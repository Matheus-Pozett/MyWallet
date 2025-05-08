import { AnyAction } from 'redux';
import {
  ADD_EXPENSE, REQUEST_CURRENCIES, REQUEST_FAILED, REQUEST_STARTED } from '../actions';

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
        currencies: Object.keys(action.payload),
        isLoading: false,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_EXPENSE:
      return {
        ...state, expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default walletReducer;
