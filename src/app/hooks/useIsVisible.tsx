import { useEffect, useState, MutableRefObject } from "react";

export function useIsVisible(ref: MutableRefObject<Element | null>) {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
      });
      
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}
