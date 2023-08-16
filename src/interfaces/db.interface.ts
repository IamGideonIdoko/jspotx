export interface Job {
  title?: string;
  location?: string;
  description?: string;
  company?: string;
  application?: number;
  created_at?: string;
  category?: 'remote' | 'onsite' | 'hybrid';
  type?: 'full-time' | 'part-time' | 'internship' | 'contract';
}
