"use client";

import type { MotionValue } from "framer-motion";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
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
  quality?: number;
  sizes?: string;
  animation?: "hero" | "revealLeft" | "revealRight" | "scaleUp" | "parallax" | "none";
  parallaxY?: MotionValue<string> | MotionValue<number> | number;
}

function CustomImageInner({
  src,
  alt,
  width,
  height,
  fill: fillProp = false,
  className,
  containerClassName,
  overlay = "bg-background/50",
  priority = false,
  quality = 60,
  sizes = "(max-width: 768px) 100vw, 100vw",
  animation = "none",
  parallaxY,
}: CustomImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const isFill = fillProp || (!width && !height);

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
    animationStyles = { y: parallaxY, height: "120%", top: "-10%" };
  } else if (
    parallaxY &&
    (animation === "hero" ||
      animation === "revealLeft" ||
      animation === "revealRight" ||
      animation === "scaleUp")
  ) {
    animationStyles = { y: parallaxY, height: "120%", top: "-10%" };
  } else if (
    !parallaxY &&
    (animation === "hero" || (typeof animation === "string" && animation.includes("reveal")))
  ) {
    animationStyles = { width: "100%", height: "100%", objectFit: "cover" };
  }

  const imageEl =
    !isFill && width != null && height != null ? (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={cn("img-noir object-cover", className)}
        style={{ width: "100%", height: "auto" }}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={cn("img-noir object-cover absolute inset-0 h-full w-full", className)}
      />
    );

  return (
    <div ref={ref} className={cn("group relative overflow-hidden", containerClassName)}>
      <motion.div
        className="absolute inset-0 text-[0] leading-none"
        variants={animationVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ ...animationStyles }}
      >
        {imageEl}
        <div className={cn("pointer-events-none absolute inset-0 mix-blend-multiply", overlay)} />
      </motion.div>
    </div>
  );
}

const CustomImage = memo(CustomImageInner);

export default CustomImage;
