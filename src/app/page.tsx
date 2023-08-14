import { Row, Col, Stack } from '@/composables/bootstrap';
import styles from '@/styles/home.module.css';
import JobFilter from '@/components/JobFilter';
import JobCard from '@/components/JobCard';

export default function Home() {
  return (
    <Row className={`mx-lg-5 mx-md-2 mx-sm-1 ${styles.main}`}>
      <Col className={`${styles.leftColumn} pb-3`}>
        <JobFilter />
      </Col>
      <Col className={`${styles.rightColumn}`}>
        <p>Showing 1,120 Jobs Quality Assurance in Jakarta</p>
        <Stack direction="horizontal" className="flex-wrap" gap={3}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </Stack>
      </Col>
    </Row>
  );
}
