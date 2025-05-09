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

type TCurrency = {
  code: string;
  name: string;
  ask: string;
};

type TExchangeRates = Record<string, TCurrency>;

type TExpenses = {
  id: number,
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: TExchangeRates
};

export type TWalletState = {
  currencies: string[];
  expenses: TExpenses[];
  editor: boolean;
  idToEdit: number;
  isLoading: boolean;
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

export type AppDispatch = ThunkDispatch<TGlobalState, null, AnyAction>;
