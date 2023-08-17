import type { Timestamp } from 'firebase/firestore';

export type JobType = 'fulltime' | 'parttime' | 'internship' | 'contract';
export type JobCategory = 'remote' | 'onsite' | 'hybrid';
export interface Job {
  id: string;
  title?: string;
  location?: string;
  description?: string;
  company?: string;
  application?: number;
  created_at?: Timestamp;
  category?: JobCategory;
  type?: JobType;
}

export interface Bookmark {
  id: string;
  userId: string;
  jobId: string;
  created_at: Timestamp;
}
