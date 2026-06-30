"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { shimmerBlurDataURL } from "@/lib/image-utils";

const FALLBACK_SRC = "/images/placeholder-property.svg";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  showSkeleton?: boolean;
}

/**
 * SafeImage — Drop-in replacement for next/image with:
 * - Automatic fallback on load error (broken Unsplash URLs)
 * - Shimmer skeleton placeholder while loading
 * - Graceful opacity transition on load
 */
export function SafeImage({
  fallbackSrc = FALLBACK_SRC,
  showSkeleton = true,
  className,
  alt,
  onLoad,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimestamp, setRetryTimestamp] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const errorHandled = useRef(false);

  const handleError = useCallback(() => {
    if (errorHandled.current) return;
    
    if (retryCount === 0 && typeof props.src === 'string' && props.src.includes('http')) {
      // First try to cache-bust
      setRetryCount(1);
      setRetryTimestamp(Date.now());
    } else {
      // Fallback
      errorHandled.current = true;
      setHasError(true);
    }
  }, [retryCount, props.src]);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsLoaded(true);
      if (onLoad) {
        (onLoad as (e: React.SyntheticEvent<HTMLImageElement>) => void)(e);
      }
    },
    [onLoad]
  );

  let src = props.src;
  if (hasError) {
    src = fallbackSrc;
  } else if (retryCount > 0 && typeof src === 'string' && retryTimestamp) {
    src = `${src}${src.includes('?') ? '&' : '?'}retry=${retryTimestamp}`;
  }

  return (
    <>
      {/* Skeleton placeholder */}
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 image-placeholder" aria-hidden="true" />
      )}
      <Image
        {...props}
        src={src}
        alt={alt}
        placeholder={showSkeleton ? "blur" : "empty"}
        blurDataURL={showSkeleton ? shimmerBlurDataURL() : undefined}
        className={cn(
          "transition-opacity duration-[400ms] ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
}
