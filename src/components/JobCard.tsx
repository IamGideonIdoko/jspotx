import type { FC } from 'react';
import { Card, Image, CardBody, CardTitle, CardText, Stack, Badge } from '@/composables/bootstrap';
import defaultImage from '@/assets/images/default_image.jpg';
import styles from '@/styles/home.module.css';
import SaveButton from '@/composables/SaveButton';

const JobCard: FC<{ center?: boolean }> = ({ center }) => {
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
            <CardTitle className={`${styles.cardTitle}`}>🔥 Quality Assurance Tester Manual Intern</CardTitle>
            <Stack direction="horizontal" className="align-items-between" gap={2}>
              <CardText className={`font-weight-light text-monospace mb-0 ${styles.cardCompany}`}>Google</CardText>
              <CardText className={`mb-0 ${styles.cardCompany}`}>•</CardText>
              <CardText className={`font-weight-light ${styles.cardCompany}`}>Jarkata Pusat</CardText>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="horizontal" className="mb-3" gap={2}>
          <Badge className={`${styles.cardBadge}`}>Fulltime</Badge>
          <Badge className={`${styles.cardBadge}`}>Onsite</Badge>
          <Badge className={`${styles.cardBadge}`}>Internship</Badge>
        </Stack>
        <CardText className={`${styles.cardDescription}`}>
          Some quick example text to build on the card title and make up the bulk of the content.
        </CardText>
        <Stack direction="horizontal" className="justify-content-between align-items-center">
          <CardText className={`font-weight-light ${styles.cardCompany} mb-0 pb-0`}>2 days ago</CardText>
          <SaveButton />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
