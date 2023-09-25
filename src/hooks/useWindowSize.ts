import { useEffect, useState } from "react";

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
