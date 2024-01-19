import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Projects = () => {
  return (
    <div className="px-12">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                    <h2 className="text-3xl font-semibold">Thumbathon</h2>
                    <p>Create and Resize Thumbnails!</p>
                    {/* create icons for projects -- like how it started/going */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
