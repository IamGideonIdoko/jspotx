'use client';
import { useContext, type ChangeEvent } from 'react';
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
import { JobContext } from '@/context/job.context';
import type { JobType, JobCategory } from '@/interfaces/db.interface';

const JobFilter = () => {
  const { state, dispatch } = useContext(JobContext);

  const handleTypeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const currentType = event.target.id as JobType;
    const newTypes: JobType[] = checked
      ? [...state.types, currentType]
      : state.types.filter((type) => type !== currentType);
    dispatch({
      type: 'FILTER_BY_TYPE',
      payload: newTypes,
    });
  };

  const handleCategoryFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const currentCategory = event.target.id as JobCategory;
    const newCategories: JobCategory[] = checked
      ? [...state.categories, currentCategory]
      : state.categories.filter((category) => category !== currentCategory);
    dispatch({
      type: 'FILTER_BY_CATEGORY',
      payload: newCategories,
    });
  };
  return (
    <Stack gap={4}>
      <Accordion alwaysOpen defaultActiveKey={['0']}>
        <AccordionItem eventKey="0" className={`soft-border`}>
          <AccordionHeader className={`${styles.accordionHeader}`}>Job Type</AccordionHeader>
          <AccordionBody>
            <Form>
              <FormCheck
                checked={state.types.indexOf('fulltime') !== -1}
                type="checkbox"
                label="Fulltime"
                id="fulltime"
                className="mb-2"
                onChange={handleTypeFilter}
              />
              <FormCheck
                checked={state.types.indexOf('parttime') !== -1}
                type="checkbox"
                label="Partime"
                id="parttime"
                className="mb-2"
                onChange={handleTypeFilter}
              />
              <FormCheck
                checked={state.types.indexOf('internship') !== -1}
                type="checkbox"
                label="Internship"
                id="internship"
                className="mb-2"
                onChange={handleTypeFilter}
              />
              <FormCheck
                checked={state.types.indexOf('contract') !== -1}
                type="checkbox"
                label="Contract"
                id="contract"
                className="mb-2"
                onChange={handleTypeFilter}
              />
            </Form>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion alwaysOpen defaultActiveKey={['0']}>
        <AccordionItem eventKey="0" className={`soft-border`}>
          <AccordionHeader className={`${styles.accordionHeader}`}>Job Category</AccordionHeader>
          <AccordionBody>
            <Form>
              <FormCheck
                checked={state.categories.indexOf('remote') !== -1}
                type="checkbox"
                label="Remote"
                id="remote"
                className="mb-2"
                onChange={handleCategoryFilter}
              />
              <FormCheck
                checked={state.categories.indexOf('onsite') !== -1}
                type="checkbox"
                label="Onsite"
                id="onsite"
                className="mb-2"
                onChange={handleCategoryFilter}
              />
              <FormCheck
                checked={state.categories.indexOf('hybrid') !== -1}
                type="checkbox"
                label="Hybrid"
                id="hybrid"
                className="mb-2"
                onChange={handleCategoryFilter}
              />
            </Form>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default JobFilter;
