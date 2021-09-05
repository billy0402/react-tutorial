import { SET_USER, UserActionTypes } from '../actions/user';

interface UserState {
  name: string;
  user: any;
}

const initialState: UserState = {
  name: '神Q超人',
  user: {},
};

const user = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default user;
