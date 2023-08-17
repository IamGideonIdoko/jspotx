import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '@/libs/firebase';
import type { Job, Bookmark } from '@/interfaces/db.interface';
import type { Query } from 'firebase/firestore';

export const useJobs = (jobIds?: string[]) => {
  const query = firebase.firestore().collection('jobs');
  if (jobIds && jobIds.length > 0) query.where('id', 'in', jobIds);
  return useCollection<Job>(jobIds && jobIds.length === 0 ? null : (query as unknown as Query<Job>));
};

export const useBookmarks = ({ userId, jobId }: { userId: string; jobId?: string }) => {
  const query = firebase.firestore().collection('bookmarks');
  if (userId) query.where('userId', '==', userId);
  if (jobId) query.where('jobId', '==', jobId);
  return useCollection<Bookmark>(query as unknown as Query<Bookmark>);
};
