import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { stackIcons } from './stackIcons';
import Icons from '../AboutMe/Icons';

const FrontEndProjects = () => {
  return (
    <div className="px-12 flex flex-col items-center">
      <h2>Frontend Projects</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                    <h2 className="text-3xl font-semibold">Thumbathon</h2>
                    <p>Create and Resize Thumbnails!</p>
                    <h3>Stack</h3>
                    {/* create icons for projects -- like how it started/going */}
                    <Icons icons={stackIcons} />
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

export default FrontEndProjects;
