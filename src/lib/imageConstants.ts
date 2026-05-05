/**
 * Shared `sizes` hints for `next/image` so the optimizer picks sensible widths
 * without downloading desktop-sized assets on mobile.
 */
export const IMAGE_SIZES_GRID =
  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" as const;

export const IMAGE_SIZES_FULL_WIDTH = "100vw" as const;

export const IMAGE_SIZES_LOGO_STRIP =
  "(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 160px" as const;
