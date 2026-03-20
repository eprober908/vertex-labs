"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealOnScrollProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
};

export function RevealOnScroll<T extends ElementType = "div">({
  as,
  children,
  className,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
}: RevealOnScrollProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal-on-scroll", isVisible && "animate-fade-up", className)}
    >
      {children}
    </Tag>
  );
}
