import { cloneElement, memo, useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactElement;
  message: string;
  position?: "top" | "bottom" | "left" | "right";
}

function Tooltip({ children, message, position }: Props) {
  const [anchor, setAnchor] = useState<string | null>(position ?? null);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    if (!tooltipRef.current || position) return;

    const rect = tooltipRef.current.getBoundingClientRect();
    const viewport = { height: window.innerHeight, width: window.innerWidth };

    if (rect.x > viewport.width / 2) {
      setAnchor("right");
    } else {
      setAnchor("left");
    }
  }, [position]);

  const tooltipRef = useRef<HTMLSpanElement>(null);

  const handlePosition = () => {
    if (!tooltipRef.current) return;

    switch (anchor) {
      case "top": {
        return `bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 before:left-0 before:right-0 before:top-[calc(100%-4px)] before:mx-auto before:rotate-45 opacity-0 translate-y-1 ${
          tooltip && "pointer-events-auto opacity-100 translate-y-0"
        }`;
      }
      case "bottom": {
        return `top-[calc(100%+12px)] left-1/2 -translate-x-1/2 before:left-0 before:right-0 before:bottom-[calc(100%-4px)] before:mx-auto before:rotate-45 opacity-0 -translate-y-1 ${
          tooltip && "pointer-events-auto opacity-100 translate-y-0"
        }`;
      }
      case "left": {
        return `top-0 bottom-0 left-[calc(100%+12px)] before:-left-1 before:top-0 before:bottom-0 before:-translate-y-px before:my-auto before:rotate-45 opacity-0 -translate-x-1 ${
          tooltip && "pointer-events-auto opacity-100 translate-x-0"
        }`;
      }
      case "right": {
        return `top-0 bottom-0 right-[calc(100%+12px)] before:-right-1 before:top-0 before:bottom-0 before:-translate-y-px before:my-auto before:rotate-45 opacity-0 translate-x-1 ${
          tooltip && "pointer-events-auto opacity-100 translate-x-0"
        }`;
      }
    }
  };

  return (
    <div
      onMouseEnter={() => setTimeout(() => setTooltip(true))}
      onMouseLeave={() => setTimeout(() => setTooltip(false))}
      className="relative"
    >
      {cloneElement(children)}
      <span
        ref={tooltipRef}
        className={`${
          tooltip
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${handlePosition()} before:absolute before:content-[''] before:w-2 before:h-2 before:bg-black pointer-events-none absolute z-10 m-auto h-fit rounded bg-[#030303] px-2 py-1 text-[11px] font-medium shadow-sm text-white whitespace-nowrap transition-all`}
      >
        {message}
      </span>
    </div>
  );
}

export default memo(Tooltip);
