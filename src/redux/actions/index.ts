// Coloque aqui suas actions

import { AppDispatch, SetEmailAction, TCurrency } from '../../types';
import { getCurrencies } from '../../utils/api';

export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_FAILED = 'REQUEST_FAILED';

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

export const getCurrenciesApi = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(requestStarted());
    try {
      const currencies: Record<string, TCurrency> = await getCurrencies();

      const currencyCodes = Object.values(currencies)
        .filter((currency) => currency.codein !== 'BRLT')
        .map((currency) => currency.code);

      dispatch(requestSuccessful(currencyCodes));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};
