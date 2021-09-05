import { Dispatch } from 'redux';

export const SET_USER = 'SET_USER';

interface SetUserPayload {
  user: any;
}

export interface SetUser {
  type: typeof SET_USER;
  payload: SetUserPayload;
}

const setUser = (user: any): SetUser => ({
  type: 'SET_USER',
  payload: { user },
});

export const fetchUser = () => async (dispatch: Dispatch) => {
  const response = await fetch('https://httpbin.org/get');
  const user = await response.json();
  return dispatch(setUser(user));
};

export type UserActionTypes = SetUser;
