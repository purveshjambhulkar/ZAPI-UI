import React, { useRef } from "react";
import "./Carousel.css";

type CarouselProps = {
  children: React.ReactNode;
  itemsToShow?: number;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ children, itemsToShow = 1, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.offsetWidth / itemsToShow;
      container.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`zui-carousel-wrapper ${className}`}>
      <button className="zui-carousel-nav left" onClick={() => scroll("left")}>
        &#8249;
      </button>
      <div className="zui-carousel" ref={containerRef}>
        {React.Children.map(children, (child) => (
          <div className="zui-carousel-item" style={{ flex: `0 0 ${100 / itemsToShow}%` }}>
            {child}
          </div>
        ))}
      </div>
      <button className="zui-carousel-nav right" onClick={() => scroll("right")}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
