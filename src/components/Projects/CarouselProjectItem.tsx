import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Icons from '../AboutMe/Icons';
import { CarouselProject } from './interfaces';
//import styles from './_projects.module.scss';

const CarouselProjectItem = ({ list }: CarouselProject) => {
  return (
    <CarouselContent>
      {list.map((item, index) => (
        <CarouselItem key={index} className="">
          <div className="justify-center items-center">
            <Card>
              <CardContent className="card-content flex flex-col aspect-square items-center justify-center p-1">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="py-2">
                  {item.description}
                </CardDescription>
                <CardFooter className="p-2">
                  <Icons icons={item.stackIcons} background="#3c4a8e" />
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
