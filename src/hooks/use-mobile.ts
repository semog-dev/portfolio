import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // garante que só roda no client
    if (typeof window === "undefined") return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // executa uma vez
    checkIsMobile();

    // escuta mudanças de tamanho
    mql.addEventListener("change", checkIsMobile);

    return () => {
      mql.removeEventListener("change", checkIsMobile);
    };
  }, []);

  return isMobile;
}
