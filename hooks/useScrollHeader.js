import { useEffect, useState } from "react";

export default function useScrollHeader() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateHeader = () => {
      const currentScroll = window.scrollY;

      // Hide on scroll down
      if (currentScroll > lastScrollY && currentScroll > 150) {
        setHidden(true);
      } else {
        // Reveal on scroll up
        setHidden(false);
      }

      // Background color change after leaving hero section
      setSolid(currentScroll > 80);

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", updateHeader);

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return { hidden, solid };
}
