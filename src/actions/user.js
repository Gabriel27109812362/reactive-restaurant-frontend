import { api } from '../api';
import { LOG_IN, LOG_OUT } from '../types';
import { error, clear } from 'actions/error';

export const registerUser = ({ name, surname, email, password }) => dispatch => {
  try {
    api.post('/user/register/', { name, surname, email, password });
  } catch(e) {
    dispatch(error(e.message));
  }

};

export const authUser = ({ email, password }) => async dispatch => {
  try {
    const { data: { accessToken } } = await api.post('user/auth',
      { email, password });
    dispatch(logInUser(email, accessToken));
    window.localStorage.setItem('jwtToken', accessToken.toString());
    dispatch(clear);
    return accessToken;
  } catch(e) {
    dispatch(error(e.message));
  }
};

export const logInUser = (email, token) => ({
  type: LOG_IN,
  email,
  token,
});

export const logOutUser = () => ({
  type: LOG_OUT,
});


