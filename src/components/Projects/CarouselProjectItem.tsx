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
              <a
                href={item.link}
                onClick={(e) => {
                  if (item.link === '#') {
                    e.preventDefault();
                  }
                }}
                target="_blank"
                style={{
                  pointerEvents: item.link === '#' ? 'none' : 'auto',
                  cursor: item.link === '#' ? 'default' : 'pointer',
                }}
              >
                <CardContent className="card-content flex flex-col aspect-square items-center justify-center p-2">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="py-2">
                    {item.description}
                  </CardDescription>
                  <CardFooter className="p-2">
                    <Icons icons={item.stackIcons} />
                  </CardFooter>
                </CardContent>
              </a>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default CarouselProjectItem;
