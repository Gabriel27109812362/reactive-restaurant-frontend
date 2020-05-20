import { LOG_IN, LOG_OUT } from '../types';

const initialState = {
  userEmail: '',
  accessToken: '',
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN: {
      const { email, token } = action;
      return {
        userEmail: email,
        accessToken: token,
        isAuthenticated: true,
      };
    }

    case LOG_OUT: {
      return {
        userEmail: '',
        accessToken: '',
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }

};

export default userReducer;
