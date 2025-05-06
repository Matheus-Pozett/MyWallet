import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type LoginFormType = {
  email: string,
  password: string
};

export type UserState = {
  email: string;
};

export type SetEmailAction = {
  type: string;
  payload: UserState;
};

type TExpenses = {
  id: number,
  value: number,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: number
};

export type TGlobalState = {
  user: {
    email: string
  },
  wallet: {
    currencies: string[],
    expenses: TExpenses[],
    editor: boolean,
    idToEdit: number,
  }
};

export type TCurrency = {
  code: string;
  codein: string;
};

export type AppDispatch = ThunkDispatch<TGlobalState, null, AnyAction>;
