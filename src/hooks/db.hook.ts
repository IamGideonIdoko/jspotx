import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '@/libs/firebase';
import type { Job, Bookmark } from '@/interfaces/db.interface';
import type { Query } from 'firebase/firestore';

export const useJobs = (jobIds?: string[]) => {
  let query: firebase.firestore.Query<firebase.firestore.DocumentData> | null = firebase.firestore().collection('jobs');
  if (jobIds && jobIds.length > 0) {
    // If array to Job IDs is passed then only fetch jobs with those ids
    query = query.where('id', 'in', jobIds);
  } else if (jobIds && jobIds.length === 0) {
    query = null;
  }
  return useCollection<Job>(query as unknown as Query<Job> | null);
};

export const useBookmarks = ({ userId, jobId }: { userId: string; jobId?: string }) => {
  let query: firebase.firestore.Query<firebase.firestore.DocumentData> = firebase.firestore().collection('bookmarks');
  if (userId) query = query.where('userId', '==', userId);
  if (jobId) query = query.where('jobId', '==', jobId);
  return useCollection<Bookmark>(query as unknown as Query<Bookmark>);
};
