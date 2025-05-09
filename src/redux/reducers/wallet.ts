import { AnyAction } from 'redux';
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  REQUEST_CURRENCIES,
  REQUEST_FAILED,
  REQUEST_STARTED,
  START_EDIT_EXPENSE,
} from '../actions';
import { TWalletState } from '../../types';

const INITIAL_STATE: TWalletState = {
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
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case START_EDIT_EXPENSE:
      return {
        ...state,
        editor: true,
        idToEdit: action.payload,
      };

    case EDIT_EXPENSE:
      return {
        ...state,
        editor: false,
        idToEdit: 0,
        expenses: state.expenses.map((expense) => (
          expense.id === action.payload.id ? action.payload : expense)),
      };
    default:
      return state;
  }
};

export default walletReducer;
