'use client';

import React, { Dispatch, createContext, useReducer } from 'react';
import type { Job } from '@/interfaces/db.interface';

interface State {
  allJobs: Job[];
  currentJobs: Job[];
}

type ActionType = 'CREATE' | 'UPDATE';

interface Action {
  type: ActionType;
  payload: Job[];
}

const initialState: State = {
  allJobs: [],
  currentJobs: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return { ...state, allJobs: action.payload, currentJobs: action.payload };
    case 'UPDATE':
      return { ...state, currentJobs: action.payload };
    default:
      return state;
  }
};

export const JobContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const JobContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <JobContext.Provider value={{ state, dispatch }}>{children}</JobContext.Provider>;
};
