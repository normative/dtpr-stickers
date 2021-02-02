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
  }, [airtable.data]);

  return (
    <AirtableContext.Provider value={airtable}>
      {children}
    </AirtableContext.Provider>
  );
}
