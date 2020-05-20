import { CLEAR_ERROR, ERROR } from '../types';

export const error = (message) => ({
  type: ERROR,
  payload: message,
});

export const clear = () => ({
  type: CLEAR_ERROR,
});
