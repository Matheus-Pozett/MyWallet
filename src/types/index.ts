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
