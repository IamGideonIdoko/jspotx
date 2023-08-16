import { Stack } from '@/composables/bootstrap';
import JobCard from '@/components/JobCard';

const Jobs = () => {
  return (
    <Stack direction="horizontal" className="flex-wrap" gap={3}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </Stack>
  );
};

export default Jobs;
