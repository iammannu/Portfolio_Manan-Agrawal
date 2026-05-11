"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Lightweight counter animation hook — replaces react-countup to avoid
 * webpack module resolution errors in Next.js 15 App Router.
 *
 * @param end     Target number to count up to
 * @param active  Trigger — typically an IntersectionObserver inView flag
 * @param duration Animation duration in milliseconds (default 1800ms)
 * @param delay   Start delay in milliseconds (default 0)
 */
export function useCountUp(
  end: number,
  active: boolean,
  duration = 1800,
  delay = 0
): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);
  const triggered = useRef(false);

  useEffect(() => {
    if (!active || triggered.current) return;
    triggered.current = true;

    let timeoutId: ReturnType<typeof setTimeout>;

    timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        /* easeOutCubic */
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameRef.current);
    };
  }, [active, end, duration, delay]);

  return count;
}
