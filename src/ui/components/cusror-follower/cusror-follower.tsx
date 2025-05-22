"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/ui/utils/cn/cn";

export const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const followerRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const spring = 0.05;
      const damping = 0.7;

      velocity.current.x += (mouse.current.x - pos.current.x) * spring;
      velocity.current.y += (mouse.current.y - pos.current.y) * spring;

      velocity.current.x *= damping;
      velocity.current.y *= damping;

      pos.current.x += velocity.current.x;
      pos.current.y += velocity.current.y;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={cn(
        "bg-muted/50 pointer-events-none fixed z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    />
  );
};
