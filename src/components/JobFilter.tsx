'use client';

import {
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  Form,
  FormCheck,
  Stack,
} from '@/composables/bootstrap';
import styles from '@/styles/home.module.css';

const JobFilter = () => {
  return (
    <Stack gap={4}>
      {/* <Accordion alwaysOpen defaultActiveKey={['0']}>
        <AccordionItem eventKey="0" className={`soft-border`}>
          <AccordionHeader className={`${styles.accordionHeader}`}>Experience Level</AccordionHeader>
          <AccordionBody>
            <Form>
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
            </Form>
          </AccordionBody>
        </AccordionItem>
      </Accordion> */}

      <Accordion alwaysOpen defaultActiveKey={['0']}>
        <AccordionItem eventKey="0" className={`soft-border`}>
          <AccordionHeader className={`${styles.accordionHeader}`}>Job Type</AccordionHeader>
          <AccordionBody>
            <Form>
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
            </Form>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion alwaysOpen defaultActiveKey={['0']}>
        <AccordionItem eventKey="0" className={`soft-border`}>
          <AccordionHeader className={`${styles.accordionHeader}`}>Job Category</AccordionHeader>
          <AccordionBody>
            <Form>
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
              <FormCheck type="checkbox" label="Internship" id="intership" className="mb-2" />
            </Form>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default JobFilter;