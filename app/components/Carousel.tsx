"use client";

import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { AnimalData } from "../types";

interface CarouselProps {
  animalData: AnimalData[];
}

const Carousel: React.FC<CarouselProps> = ({ animalData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % animalData.length;
    if (currentIndex === 4) {
      setCurrentIndex(0);

      return;
    }
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1) % animalData.length;
    if (currentIndex === 0) {
      setCurrentIndex(4);

      return;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Trigger the effect whenever currentIndex changes

  return (
    <div>
      <div className="relative w-full" data-carousel="slide">
        <div className="relative overflow-hidden h-96 mt-10">
          {animalData.slice(0, 5).map((data, index) => (
            <div
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
              data-carousel-item
            >
              <img
                src={data.image_url}
                className="absolute block w-max -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={data.title}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-20 md:bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {animalData.slice(0, 5).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-5 md:px-20 lg:px-64 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-5 md:px-20 lg:px-64 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
