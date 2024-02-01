import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CarouselProjectItem from './CarouselProjectItem';
import { CarouselProject } from './interfaces';

const CarouselContainer = ({ title, list }: CarouselProject) => {
  return (
    <div className="px-12 flex flex-col items-center">
      <h2>{title}</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselProjectItem list={list} title={''} />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
