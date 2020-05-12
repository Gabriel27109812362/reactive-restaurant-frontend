import { ERROR } from '../types';

export const error = (message) => ({
  type: ERROR,
  payload: message,
});
