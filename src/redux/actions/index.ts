// Coloque aqui suas actions

import { AppDispatch, SetEmailAction } from '../../types';
import { getCurrencies } from '../../utils/api';

export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const getEmail = (email: string): SetEmailAction => ({
  type: SET_EMAIL,
  payload: { email },
});

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data: any) => ({
  type: REQUEST_CURRENCIES,
  payload: data,
});

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

const addExpense = (data: any) => ({
  type: ADD_EXPENSE,
  payload: data,
});

export const getCurrenciesApi = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(requestStarted());
    try {
      const dataAPI = await getCurrencies();
      delete dataAPI.USDT;

      dispatch(requestSuccessful(dataAPI));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const addExpenseThunk = (expenseData: any) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const data = await getCurrencies();
    delete data.USDT;

    const { wallet } = getState();
    const id = wallet.expenses.length;

    const newExpense = {
      id,
      ...expenseData,
      exchangeRates: data,
    };

    dispatch(addExpense(newExpense));
  };
};
