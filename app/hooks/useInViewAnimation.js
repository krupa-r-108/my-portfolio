"use client"
import { useEffect, useRef, useState } from "react";

export default function useInViewAnimation() {
  const ref = useRef(null);          // This will point to the element
  const [isVisible, setIsVisible] = useState(false); // Track if element is visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {   
          setIsVisible(true);         
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.4 }              
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];           
}
