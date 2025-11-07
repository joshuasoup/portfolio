"use client";

import { useEffect, useRef } from "react";

interface SignatureProps {
  paths?: Array<{
    d: string;
    speed?: number;
    delay?: number;
    className?: string;
  }>;
}

export default function Signature({ paths }: SignatureProps = {}) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Default signature paths - replace with your actual signature SVG paths
  const defaultPaths = paths || [
    {
      d: "M50 50 L150 50 L200 80 L250 30", // Replace with your signature path
      speed: 1,
      delay: 0,
    },
  ];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    paths.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      const pathData = defaultPaths[index];
      
      if (pathData) {
        const pathLengthAttr = pathElement.getAttribute("pathLength");
        const computedStyle = window.getComputedStyle(pathElement);
        
        const speed = pathData.speed || parseFloat(
          computedStyle.getPropertyValue("--path-speed") || "1"
        );
        const delay = pathData.delay || parseFloat(
          computedStyle.getPropertyValue("--path-delay") || "0"
        );
        
        if (pathLengthAttr === "1") {
          pathElement.style.strokeDasharray = "1";
          pathElement.style.strokeDashoffset = "1";
          pathElement.style.animation = `drawSignature ${speed}s ease-out ${delay}s forwards`;
        } else {
          const pathLength = pathElement.getTotalLength();
          pathElement.style.strokeDasharray = `${pathLength}`;
          pathElement.style.strokeDashoffset = `${pathLength}`;
          pathElement.style.animation = `drawSignature ${speed}s ease-out ${delay}s forwards`;
        }
      }
    });
  }, [defaultPaths]);

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <svg
        ref={svgRef}
        className="sig text-current w-64 max-w-full"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Joshua Souphanthong</title>
        {defaultPaths.map((pathData, index) => (
          <path
            key={index}
            d={pathData.d}
            className={pathData.className}
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={
              {
                "--path-speed": pathData.speed?.toString() || "1",
                "--path-delay": pathData.delay?.toString() || "0",
              } as React.CSSProperties
            }
          />
        ))}
      </svg>
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 max-w-md">
        Edit the signature path data in the Signature component to display your signature
      </p>
    </div>
  );
}
