import type { Timestamp } from 'firebase/firestore';
export interface Job {
  id: string;
  title?: string;
  location?: string;
  description?: string;
  company?: string;
  application?: number;
  created_at?: Timestamp;
  category?: 'remote' | 'onsite' | 'hybrid';
  type?: 'full-time' | 'part-time' | 'internship' | 'contract';
}
