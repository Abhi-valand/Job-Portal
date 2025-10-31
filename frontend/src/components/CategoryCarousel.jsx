import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full mt-10">
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent className="flex items-center gap-3">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/4 flex justify-center"
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 text-sm md:text-base font-medium border-gray-300 hover:bg-[#6A38C2] hover:text-white hover:border-[#6A38C2] transition-all duration-300"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="bg-white border shadow-md hover:bg-gray-100 absolute left-[-2.5rem] top-1/2 -translate-y-1/2 rounded-full" />
        <CarouselNext className="bg-white border shadow-md hover:bg-gray-100 absolute right-[-2.5rem] top-1/2 -translate-y-1/2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
