"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { imageReveal, imageRevealRight, imageScale, scaleUp, imageScaleSlow } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  overlay?: string;
  priority?: boolean;
  animation?: "hero" | "revealLeft" | "revealRight" | "scaleUp" | "parallax" | "none";
  parallaxY?: any; // Framer motion useTransform value
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  overlay = "bg-background/50",
  priority = false,
  animation = "none",
  parallaxY,
}: CustomImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const isFill = fill || (!width && !height);

  let animationVariant;
  let animationStyles = {};

  switch (animation) {
    case "hero":
      animationVariant = imageScaleSlow;
      break;
    case "revealLeft":
      animationVariant = imageReveal;
      break;
    case "revealRight":
      animationVariant = imageRevealRight;
      break;
    case "scaleUp":
      animationVariant = scaleUp;
      break;
    case "parallax":
    case "none":
    default:
      animationVariant = undefined;
      break;
  }

  if (parallaxY && animation === "parallax") {
    // If it's pure parallax with no entrance animation
    animationStyles = { y: parallaxY, height: "120%", top: "-10%" };
  } else if (parallaxY && (animation === "hero" || animation === "revealLeft" || animation === "revealRight" || animation === "scaleUp")) {
    // Both animations and Parallax combination
    animationStyles = { y: parallaxY, height: "120%", top: "-10%" };
  } else if (!parallaxY && (animation === "hero" || animation.includes("reveal"))) {
    animationStyles = { width: "100%", height: "100%", objectFit: "cover" };
  }

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden group", containerClassName)}
    >
      <motion.div
        className="w-full h-full absolute inset-0 text-[0] leading-none"
        variants={animationVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ ...animationStyles }}
      >
        <Image
          src={src}
          alt={alt}
          fill={isFill}
          width={isFill ? undefined : width}
          height={isFill ? undefined : height}
          className={cn("img-noir object-cover", className)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // purely black 1px
        />
        {/* Theme-specific overlay applied on top */}
        <div className={cn("absolute inset-0 pointer-events-none mix-blend-multiply", overlay)} />
      </motion.div>
    </div>
  );
}
