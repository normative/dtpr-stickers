import useReducerState from 'hooks/useReducerState';
import React, {
  ReactNode,
  useEffect,
} from 'react';

import airtableReducer, {
  AirtableStateType,
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
  const [airtable, actions] = useReducerState(
    airtableReducer,
    getAirtableDataInitialState(),
    fetchAirtableRequested,
    fetchAirtableSuccessed,
    fetchAirtableFailed,
  );

  useEffect(() => {
    if (!airtable.data) {
      actions.onRequest();
      getAirtableData(actions.onSuccess, actions.onError);
    }
  }, []);

  useEffect(() => {
    if (airtable.data && !sessionStorage.getItem(sessionKeys.AIRTABLE)) {
      sessionStorage.setItem(sessionKeys.AIRTABLE, JSON.stringify(airtable.data));
    }
  }, [airtable.data]);

  return (
    <AirtableContext.Provider value={airtable as AirtableStateType}>
      {children}
    </AirtableContext.Provider>
  );
}
