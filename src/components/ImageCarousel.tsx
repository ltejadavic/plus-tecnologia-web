"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ImageSlot } from "@/data/site";

type ImageCarouselProps = {
  images: ImageSlot[];
  className?: string;
  sizes: string;
  intervalMs?: number;
};

export default function ImageCarousel({
  images,
  className = "aspect-[32/21] w-full",
  sizes,
  intervalMs = 4200,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [allowsMotion, setAllowsMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setAllowsMotion(!mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isPaused || !allowsMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [allowsMotion, images.length, intervalMs, isPaused]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      aria-label="Galería de imágenes"
      className={`relative overflow-hidden bg-light ${className}`}
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={index === activeIndex ? image.alt : ""}
          fill
          sizes={sizes}
          aria-hidden={index !== activeIndex}
          className={`object-cover transition duration-700 ease-out ${
            index === activeIndex ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
          }`}
        />
      ))}
      {images.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-primary/45 px-2 py-1">
          {images.map((image, index) => (
            <span
              key={`${image.src}-indicator`}
              className={`h-1.5 w-1.5 rounded-full transition ${
                index === activeIndex ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
