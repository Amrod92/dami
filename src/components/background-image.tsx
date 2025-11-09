"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const lightPalette = {
  bgTop: "#dbe6f1",
  bgMid: "#e6eef6",
  bgBottom: "#f6f9fc",
  grid: "rgba(191, 202, 218, 0.35)",
  line: "rgba(183, 197, 214, 0.3)",
  haloInner: "rgba(255, 255, 255, 0.35)",
  haloOuter: "rgba(255, 255, 255, 0)",
};

const darkPalette = {
  bgTop: "#0f172a",
  bgMid: "#111827",
  bgBottom: "#0b1120",
  grid: "rgba(148, 163, 184, 0.15)",
  line: "rgba(148, 163, 184, 0.35)",
  haloInner: "rgba(59, 130, 246, 0.25)",
  haloOuter: "rgba(59, 130, 246, 0)",
};

export default function BackgroundImage() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname !== "/") {
    return null;
  }

  const palette = resolvedTheme === "dark" ? darkPalette : lightPalette;

  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-20 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1228 768"
      preserveAspectRatio="none"
      role="img"
      aria-label="Subtle grid gradient background"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.bgTop} />
          <stop offset="50%" stopColor={palette.bgMid} />
          <stop offset="100%" stopColor={palette.bgBottom} />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="10%" r="80%">
          <stop offset="0%" stopColor={palette.haloInner} />
          <stop offset="60%" stopColor={palette.haloInner} stopOpacity="0.12" />
          <stop offset="100%" stopColor={palette.haloOuter} />
        </radialGradient>
        <radialGradient id="bottomFade" cx="50%" cy="100%" r="90%">
          <stop offset="55%" stopColor="var(--background)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="0.6" />
        </radialGradient>
        <linearGradient id="sectionFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--background)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="1" />
        </linearGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke={palette.grid}
            strokeWidth="1"
          />
        </pattern>
        <linearGradient id="lineFadeV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.line} />
          <stop offset="100%" stopColor={palette.line} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineFadeH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.line} />
          <stop offset="100%" stopColor={palette.line} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#halo)" />
      <line
        x1="614"
        y1="0"
        x2="614"
        y2="768"
        stroke="url(#lineFadeV)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="384"
        x2="1228"
        y2="384"
        stroke="url(#lineFadeH)"
        strokeWidth="1"
      />
      <rect width="100%" height="100%" fill="url(#bottomFade)" />
      <rect y="640" width="100%" height="128" fill="url(#sectionFade)" />
    </svg>
  );
}
