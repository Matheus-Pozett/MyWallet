import { AnyAction } from 'redux';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
