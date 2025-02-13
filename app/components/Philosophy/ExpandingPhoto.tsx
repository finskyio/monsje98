'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

const ExpandingPhoto: React.FC = () => {
  const sensitivity = 500;
  const springStiffness = 1000;
  const springDamping = 50;
  const pageScrollFactor = 0.1;
  const scrollStartThreshold = 30;
  const accelerationFactor = 0.3;

  const targetProgress = useMotionValue(0);
  const currentProgress = useSpring(targetProgress, {
    stiffness: springStiffness,
    damping: springDamping,
  });
  const acceleratedProgress = useTransform(
    currentProgress,
    [0, accelerationFactor],
    [0, 1]
  );
  const clipPath = useTransform(acceleratedProgress, (p) => {
    const clip = 25 - 25 * p;
    return `inset(${clip}% ${clip}% ${clip}% ${clip}%)`;
  });

  const accumulatedDeltaRef = useRef(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = e.deltaY;
    const current = targetProgress.get();

    if (current > 0 && current < accelerationFactor) {
      e.preventDefault();
    }

    if (deltaY > 0) {
      if (current < accelerationFactor) {
        const newValue = current + deltaY / sensitivity;
        if (newValue < accelerationFactor) {
          e.preventDefault();
          targetProgress.set(clamp(newValue, 0, accelerationFactor));
          accumulatedDeltaRef.current = 0;
        } else {
          const neededDelta = (accelerationFactor - current) * sensitivity;
          e.preventDefault();
          targetProgress.set(accelerationFactor);
          accumulatedDeltaRef.current += deltaY - neededDelta;
          if (accumulatedDeltaRef.current > scrollStartThreshold) {
            const remainder = accumulatedDeltaRef.current - scrollStartThreshold;
            const factor =
              targetProgress.get() < accelerationFactor ? 0.01 : pageScrollFactor;
            window.scrollBy(0, remainder * factor);
            accumulatedDeltaRef.current = 0;
          }
        }
      } else {
        accumulatedDeltaRef.current = 0;
      }
    } else if (deltaY < 0) {
      if (current > 0) {
        const newValue = current + deltaY / sensitivity;
        if (newValue > 0) {
          e.preventDefault();
          targetProgress.set(clamp(newValue, 0, accelerationFactor));
          accumulatedDeltaRef.current = 0;
        } else {
          const neededDelta = current * sensitivity;
          e.preventDefault();
          targetProgress.set(0);
          accumulatedDeltaRef.current += Math.abs(deltaY) - neededDelta;
          if (accumulatedDeltaRef.current > scrollStartThreshold) {
            const remainder = accumulatedDeltaRef.current - scrollStartThreshold;
            const factor =
              targetProgress.get() < accelerationFactor ? 0.01 : pageScrollFactor;
            window.scrollBy(0, -remainder * factor);
            accumulatedDeltaRef.current = 0;
          }
        }
      } else {
        accumulatedDeltaRef.current = 0;
      }
    }
  };

  return (
    <div
      className="relative w-full h-screen pt-12"
      style={{ overflow: 'hidden' }}
      onWheel={handleWheel}
    >
      <motion.img
        src="/philosophy/philosophy1.jpg"
        alt="Expanding Photo"
        className="object-cover w-full h-full"
        style={{ clipPath }}
      />
    </div>
  );
};

export default ExpandingPhoto;
