import React, {
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import airtableReducer, {
  fetchAirtableFailed,
  fetchAirtableRequested,
  fetchAirtableSuccessed,
  getAirtableDataInitialState,
} from 'reducers/airtable';
import { getAirtableData } from 'sideEffects/airtable';
import { sessionKeys } from '../constants';

const initialState = getAirtableDataInitialState();
export const AirtableContext = React.createContext(initialState);

export function AirtableProvider({ children }: { children: ReactNode }) {
  const [airtable, dispatchAirtable] = useReducer(
    airtableReducer,
    getAirtableDataInitialState(),
  );

  const handleAirtableOnSuccess = useCallback((airtableData) => {
    dispatchAirtable(fetchAirtableSuccessed(airtableData));
  }, []);

  const handleAirtableOnError = useCallback((e) => {
    dispatchAirtable(fetchAirtableFailed(e));
  }, []);

  useEffect(() => {
    if (!airtable.data) {
      dispatchAirtable(fetchAirtableRequested());
      getAirtableData(handleAirtableOnSuccess, handleAirtableOnError);
    }
  }, []);

  useEffect(() => {
    if (airtable.data && !sessionStorage.getItem(sessionKeys.AIRTABLE)) {
      sessionStorage.setItem(sessionKeys.AIRTABLE, JSON.stringify(airtable.data));
    }
  }, [airtable.data]);

  return (
    <AirtableContext.Provider value={airtable}>
      {children}
    </AirtableContext.Provider>
  );
}
