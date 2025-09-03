'use client';
import { useEffect, useState } from 'react';

/**
 * Persist state in localStorage.
 */
export function useLocalStorage<T>(key: string, initial: T | (() => T)) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return typeof initial === 'function' ? (initial as () => T)() : initial;
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : (typeof initial === 'function' ? (initial as () => T)() : initial);
    } catch {
      return typeof initial === 'function' ? (initial as () => T)() : initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [key, state]);

  return [state, setState] as const;
}
