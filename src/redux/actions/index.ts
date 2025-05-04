// Coloque aqui suas actions

import { SetEmailAction } from '../../types';

export const SET_EMAIL = 'SET_EMAIL';

export const getEmail = (email: string): SetEmailAction => ({
  type: SET_EMAIL,
  payload: { email },
});
