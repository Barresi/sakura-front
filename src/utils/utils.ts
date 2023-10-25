import { type ClassValue, clsx } from "clsx";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useWindowSize(maxWidth: string | number) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < Number(maxWidth);
}

export const filterFriendsData = (item: any, search: string) => {
  return (
    item?.username?.toLowerCase().includes(search.toLowerCase()) ||
    item?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
    item?.lastName?.toLowerCase().includes(search.toLowerCase())
  );
};
