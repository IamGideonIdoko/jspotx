'use client';

import { type Dispatch, createContext, useReducer, type ReactNode } from 'react';
import type { Job } from '@/interfaces/db.interface';
import type { JobType, JobCategory } from '@/interfaces/db.interface';

interface State {
  jobs: Job[];
  currentJobs: Job[];
  types: JobType[];
  categories: JobCategory[];
}

type ActionType = 'UPDATE_JOBS' | 'FILTER_BY_TYPE' | 'FILTER_BY_CATEGORY';

interface Action<T extends ActionType> {
  type: T;
  payload: (T extends 'UPDATE_JOBS'
    ? Job
    : T extends 'FILTER_BY_TYPE'
    ? JobType
    : T extends 'FILTER_BY_CATEGORY'
    ? JobCategory
    : never)[];
}

const initialState: State = {
  jobs: [],
  currentJobs: [],
  types: [],
  categories: [],
};

const reducer = (state: State, action: Action<ActionType>) => {
  switch (action.type) {
    case 'UPDATE_JOBS':
      return {
        ...state,
        jobs: action.payload as Job[],
        ...(state.types.length === 0 && state.categories.length === 0 ? { currentJobs: action.payload as Job[] } : {}),
      } satisfies State;
    case 'FILTER_BY_TYPE':
      return {
        ...state,
        types: action.payload as JobType[],
        currentJobs: state.jobs.filter((job) => {
          if (
            (action.payload as JobType[]).indexOf(job.type!) !== -1 ||
            state.categories.indexOf(job.category!) !== -1 ||
            (action.payload.length === 0 && state.categories.length === 0)
          )
            return true;
          return false;
        }),
      } satisfies State;
    case 'FILTER_BY_CATEGORY':
      return {
        ...state,
        categories: action.payload as JobCategory[],
        currentJobs: state.jobs.filter((job) => {
          if (
            (action.payload as JobCategory[]).indexOf(job.category!) !== -1 ||
            state.types.indexOf(job.type!) !== -1 ||
            (action.payload.length === 0 && state.types.length === 0)
          )
            return true;
          return false;
        }),
      } satisfies State;
    default:
      return state;
  }
};

// Override the default dispatch type to allow for type-safety
type DispatchType = <T extends ActionType>(value: Action<T>) => ReturnType<Dispatch<Action<T>>>;

export const JobContext = createContext<{
  state: State;
  dispatch: DispatchType;
}>({ state: initialState, dispatch: () => null });

export const JobContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    reducer as unknown as (state: State, action: Action<'UPDATE_JOBS'>) => State,
    initialState,
  );

  return (
    <JobContext.Provider value={{ state, dispatch: dispatch as unknown as DispatchType }}>
      {children}
    </JobContext.Provider>
  );
};
