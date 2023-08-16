import { Row, Col } from '@/composables/bootstrap';
import styles from '@/styles/home.module.css';
import JobFilter from '@/components/JobFilter';
import JobCarousel from '@/components/JobCarousel';

export default function Home() {
  return (
    <Row className={`mx-lg-5 mx-md-2 mx-sm-1 ${styles.main}`}>
      <Col className={`${styles.leftColumn} pb-3`}>
        <JobFilter />
      </Col>
      <Col className={`${styles.rightColumn}`}>
        {/* <p>Showing 1,120 Jobs Quality Assurance in Jakarta</p> */}
        <h3>Job Spotlights</h3>
        <JobCarousel />
      </Col>
    </Row>
  );
}
