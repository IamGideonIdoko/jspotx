import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '@/libs/firebase';
import type { Job } from '@/interfaces/db.interface';
import type { Query } from 'firebase/firestore';

export const useJobs = () => useCollection<Job>(firebase.firestore().collection('jobs') as unknown as Query<Job>);
