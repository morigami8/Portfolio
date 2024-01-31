import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Icons from '../AboutMe/Icons';
import { Project } from './interfaces';

const CarouselProjectItem = (list: Project[]) => {
  return (
    <CarouselContent>
      {list.map((item, index) => (
        <CarouselItem key={index} className="">
          <div className="justify-center items-center">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="py-2">
                  {item.description}
                </CardDescription>
                <CardFooter className="p-2">
                  <Icons icons={item.stackIcons} />
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default CarouselProjectItem;
