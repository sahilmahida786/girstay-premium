import { Logger } from './logger';

export interface RetryOptions {
  maxAttempts?: number;
  baseDelayMs?: number;
  shouldRetry?: (error: any) => boolean;
}

const DEFAULT_OPTIONS: RetryOptions = {
  maxAttempts: 3,
  baseDelayMs: 1000,
  shouldRetry: (error) => {
    // Retry on network errors or 5xx server errors
    // Do not retry on 4xx client errors (like 400 Bad Request, 401 Unauthorized)
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return true; // Network error
    }
    if (error?.status >= 500) {
      return true;
    }
    return false;
  }
};

export class ApiError extends Error {
  status?: number;
  code?: string;
  
  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

export async function withRetry<T>(
  operationName: string,
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const config = { ...DEFAULT_OPTIONS, ...options };
  let attempt = 1;

  while (true) {
    try {
      return await operation();
    } catch (error: any) {
      const isLastAttempt = attempt >= (config.maxAttempts || 3);
      const isRetryable = config.shouldRetry ? config.shouldRetry(error) : false;

      if (isLastAttempt || !isRetryable) {
        Logger.error(`Operation [${operationName}] failed after ${attempt} attempts`, error?.code || 'OPERATION_FAILED', { error: error.message || String(error) });
        throw error;
      }

      const delay = (config.baseDelayMs || 1000) * Math.pow(2, attempt - 1);
      Logger.warn(`Operation [${operationName}] failed (attempt ${attempt}). Retrying in ${delay}ms...`, 'RETRY', { error: error.message || String(error) });
      
      await new Promise(resolve => setTimeout(resolve, delay));
      attempt++;
    }
  }
}
