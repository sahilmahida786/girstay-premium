"use client";

import { useState, useEffect, useCallback } from 'react';

export function useNetworkState() {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Use a layout effect fallback if needed, but since it's browser API, standard useEffect is fine
  useEffect(() => {
    // Set initial state
    setIsOnline(typeof navigator !== 'undefined' ? navigator.onLine : true);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline };
}
