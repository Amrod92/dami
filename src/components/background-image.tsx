"use client";

import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <img
      className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
      src="https://tailkits.com/ui/iframe/assets/img/bg-lines-9.png"
      alt=""
    />
  );
}
