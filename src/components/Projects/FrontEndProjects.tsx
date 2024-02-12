import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
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
      <h2>Full Stack Projects</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="justify-center items-center">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <CardTitle>Thumbathon</CardTitle>
                    <CardDescription className="py-2">
                      Create and Resize Thumbnails!
                    </CardDescription>
                    <CardFooter className="p-2">
                      <Icons icons={stackIcons} background="#162052" />
                    </CardFooter>
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

export default FrontEndProjects;
