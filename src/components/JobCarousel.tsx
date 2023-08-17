'use client';
import { useState, useContext, useEffect } from 'react';
import { Carousel, CarouselItem } from '@/composables/bootstrap';
import JobCard from './JobCard';
import { JobContext } from '@/context/job.context';
import { useJobs } from '@/hooks/db.hook';

const JobCarousel = () => {
  const { state, dispatch } = useContext(JobContext);
  const [index, setIndex] = useState(0);
  const [jobs, loading, error] = useJobs();

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!loading && jobs) {
      dispatch({
        type: 'UPDATE_JOBS',
        payload: jobs.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      });
    }
  }, [loading, jobs, dispatch]);

  if (loading) return <p className="text-center">Loading Jobs...</p>;
  if (error) return <p className="text-center">Something went wrong</p>;
  if (state.currentJobs.length === 0) return null;
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
      {state.currentJobs.map((job) => (
        <CarouselItem data-bs-theme="light" key={job.id}>
          <JobCard job={job} center />
        </CarouselItem>
      ))}
      {/* <Carousel.Item data-bs-theme="light">
        <JobCard center />
      </Carousel.Item>
      <Carousel.Item data-bs-theme="light">
        <JobCard center />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default JobCarousel;
