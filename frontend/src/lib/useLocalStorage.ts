'use client';
import { useEffect, useState } from 'react';

/**
 * Persist state in localStorage with SSR hydration safety.
 */
export function useLocalStorage<T>(key: string, initial: T | (() => T)) {
  const [state, setState] = useState<T>(
    typeof initial === 'function' ? (initial as () => T)() : initial
  );
  const [hydrated, setHydrated] = useState(false);

  // Sync state with localStorage after hydration
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        setState(JSON.parse(raw));
      }
    } catch {
      // ignore errors
    }
    setHydrated(true);
  }, [key]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (!hydrated) return; // prevent server mismatch
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [key, state, hydrated]);

  return [state, setState, hydrated] as const;
}
