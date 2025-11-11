"use client";
import { useEffect, useState } from "react";

export function useIsLargeScreen(breakpoint = 1024) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const update = () => setIsLargeScreen(window.innerWidth >= breakpoint);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isLargeScreen;
}
