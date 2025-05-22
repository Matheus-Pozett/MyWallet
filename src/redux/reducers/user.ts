import { SET_EMAIL } from '../actions';
import { SetEmailAction, UserState } from '../../types';

const INITIAL_STATE: UserState = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: SetEmailAction) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
