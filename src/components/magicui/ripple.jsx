import React from "react";

import { cn } from "@/lib/utils";

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 300,
  mainCircleOpacity = 0.3,
  numCircles = 4,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 40;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "dotted";

        return (
          <div
            key={i}
            className={`absolute animate-ripple bg-tertiary rounded-full border-2 shadow-xl`}
            style={{
              "--i": i,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "2px",
              borderColor: "#ffffff",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
