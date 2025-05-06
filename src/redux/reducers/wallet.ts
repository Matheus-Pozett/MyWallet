import { AnyAction } from 'redux';
import { REQUEST_CURRENCIES, REQUEST_FAILED, REQUEST_STARTED } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isLoading: false,
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default walletReducer;
