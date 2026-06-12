"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ to, duration = 1800, suffix = "", prefix = "" }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString("es-CL")}{suffix}
    </span>
  );
}
