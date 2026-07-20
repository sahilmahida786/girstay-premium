type LogLevel = 'info' | 'warn' | 'error';

interface LogContext {
  [key: string]: any;
}

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: LogContext;
  timestamp: string;
  code?: string;
  route?: string;
}

const REDACT_KEYS = ['password', 'card', 'cvv', 'token', 'secret', 'signature', 'razorpay_signature'];

function sanitizeContext(context?: LogContext): LogContext | undefined {
  if (!context) return undefined;
  
  const sanitized = { ...context };
  
  for (const key in sanitized) {
    if (REDACT_KEYS.some(redact => key.toLowerCase().includes(redact))) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeContext(sanitized[key]);
    }
  }
  
  return sanitized;
}

class Logger {
  private static format(level: LogLevel, message: string, code?: string, context?: LogContext): LogEntry {
    return {
      level,
      message,
      code,
      context: sanitizeContext(context),
      timestamp: new Date().toISOString(),
      route: typeof window !== 'undefined' ? window.location.pathname : 'server',
    };
  }

  private static print(entry: LogEntry) {
    // In production, this could send to Datadog, Sentry, etc.
    const logString = JSON.stringify(entry);
    
    switch (entry.level) {
      case 'info':
        console.info(logString);
        break;
      case 'warn':
        console.warn(logString);
        break;
      case 'error':
        console.error(logString);
        break;
    }
  }

  static info(message: string, context?: LogContext) {
    this.print(this.format('info', message, undefined, context));
  }

  static warn(message: string, code?: string, context?: LogContext) {
    this.print(this.format('warn', message, code, context));
  }

  static error(message: string, code?: string, context?: LogContext) {
    this.print(this.format('error', message, code, context));
  }
}

export { Logger };
