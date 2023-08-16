import type { FC } from 'react';
import { Card, Image, CardBody, CardTitle, CardText, Stack, Badge } from '@/composables/bootstrap';
import defaultImage from '@/assets/images/default_image.jpg';
import styles from '@/styles/home.module.css';
import SaveButton from '@/composables/SaveButton';
import { Job } from '@/interfaces/db.interface';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const JobCard: FC<{ job: Job; center?: boolean }> = ({ job, center }) => {
  return (
    <Card style={{ width: '18rem' }} className={`soft-border mw-100 ${!!center ? 'mx-auto' : ''}`}>
      <CardBody>
        <Stack direction="horizontal" className="mw-100 mb-3" gap={2}>
          <Stack>
            <Stack className={`${styles.cardImageWrapper}`}>
              <Image src={defaultImage.src} alt="Job logo" />
            </Stack>
          </Stack>
          <Stack>
            <CardTitle className={`${styles.cardTitle}`}>🔥 {job.title ?? ''}</CardTitle>
            <Stack direction="horizontal" className="align-items-between" gap={2}>
              <CardText className={`font-weight-light text-monospace mb-0 ${styles.cardCompany}`}>
                {job.company ?? ''}
              </CardText>
              <CardText className={`mb-0 ${styles.cardCompany}`}>•</CardText>
              <CardText className={`font-weight-light ${styles.cardCompany}`}>{job.location ?? ''}</CardText>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="horizontal" className="mb-3" gap={2}>
          <Badge className={`${styles.cardBadge}`}>{job.type ?? ''}</Badge>
          <Badge className={`${styles.cardBadge}`}>{job.category ?? ''}</Badge>
        </Stack>
        <CardText className={`${styles.cardDescription}`}>{job.description ?? ''}</CardText>
        <Stack direction="horizontal" className="justify-content-between align-items-center">
          <CardText className={`font-weight-light ${styles.cardCompany} mb-0 pb-0`}>
            {job.created_at ? dayjs().to(job.created_at.toDate().toISOString()) : ''}
          </CardText>
          <SaveButton jobId={job.id} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
