import {
  Dispatch, useCallback, useReducer,
} from 'react';

function useReducerState(
  reducer,
  initialState,
  requestAction,
  successAction,
  failedAction,
): [
  { [name: string]: any },
  {
    onRequest,
    onSuccess,
    onError,
  }
] {
  const [state, dispatch]: [any, Dispatch<any>] = useReducer(
    reducer,
    initialState,
  );

  const onSuccess = useCallback((data) => {
    dispatch(successAction(data));
  }, []);

  const onError = useCallback((e) => {
    dispatch(failedAction(e));
  }, []);

  const onRequest = () => {
    dispatch(requestAction());
  };

  const actions = {
    onRequest,
    onSuccess,
    onError,
  };

  return [state, actions];
}

export default useReducerState;
