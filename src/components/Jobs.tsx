'use client';
import { useEffect } from 'react';
import { Stack } from '@/composables/bootstrap';
import JobCard from '@/components/JobCard';
import { useAppAuthState } from '@/hooks/auth.hook';
import { useBookmarks, useJobs } from '@/hooks/db.hook';
import { useRouter } from 'next/navigation';

const Jobs = () => {
  const router = useRouter();
  const [user, loading, error] = useAppAuthState();
  useEffect(() => {
    if (user === null) router.push('/');
  }, [user, router]);
  const [bookmarks, bookmarksLoading, bookmarksError] = useBookmarks({ userId: `${user?.uid}` });
  const jobIds = bookmarks?.docs.map((doc) => doc.data().jobId);
  const [bookmarkedJobs, bookmarkedJobsLoading, bookmarkedJobsError] = useJobs(jobIds ?? []);
  if (user === null) return null;
  if (loading || bookmarksLoading || bookmarkedJobsLoading) return <>Loading bookmarks...</>;
  if (!!error || !!bookmarksError || !!bookmarkedJobsError) return <p>Something went wrong</p>;
  return (
    <>
      <h3>
        Your bookmarks{' '}
        {bookmarkedJobs ? `(${bookmarkedJobs.docs.length})` : !bookmarkedJobs && !loading && !error ? '(0)' : ''}
      </h3>
      <Stack direction="horizontal" className="flex-wrap" gap={3}>
        {bookmarkedJobs?.docs.map((doc) => {
          const job = { ...doc.data(), id: doc.id };
          return <JobCard job={job} key={job.id} />;
        })}
      </Stack>
    </>
  );
};

export default Jobs;
