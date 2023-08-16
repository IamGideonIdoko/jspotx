'use client';
import { useState } from 'react';
import { Carousel, CarouselItem } from '@/composables/bootstrap';
import JobCard from './JobCard';

const JobCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-bs-theme="dark"
      indicators={false}
      interval={null}
      wrap={false}
      className="mt-5"
    >
      <CarouselItem data-bs-theme="light">
        <JobCard center />
      </CarouselItem>
      <Carousel.Item data-bs-theme="light">
        <JobCard center />
      </Carousel.Item>
      <Carousel.Item data-bs-theme="light">
        <JobCard center />
      </Carousel.Item>
    </Carousel>
  );
};

export default JobCarousel;
