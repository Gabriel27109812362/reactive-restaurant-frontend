import { LOG_IN, LOG_OUT } from '../types';

const initialState = {
  userEmail: '',
  accessToken: '',
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN: {

      const { email, token } = action;

      return {
        userEmail: email,
        accessToken: token,
      };
    }

    case LOG_OUT: {
      return {
        userEmail: '',
        accessToken: '',
      };
    }

    default:
      return state;

  }

};

export default userReducer;
