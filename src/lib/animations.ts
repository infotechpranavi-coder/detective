import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring", stiffness: 100, damping: 20, mass: 1,
      duration: 0.7 
    } 
  },
};

export const slideReveal: Variants = {
  hidden: { scaleY: 0, transformOrigin: 'top' },
  visible: { 
    scaleY: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.95 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)", 
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const imageRevealRight: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)", 
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const imageScale: Variants = {
  hidden: { scale: 1.1 },
  visible: { 
    scale: 1.0, 
    transition: { duration: 1.8, ease: "easeOut" } 
  },
};

export const imageScaleSlow: Variants = {
  hidden: { scale: 1.1 },
  visible: { 
    scale: 1.0, 
    transition: { duration: 8, ease: "easeOut" } 
  },
};
