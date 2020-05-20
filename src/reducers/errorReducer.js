import { CLEAR_ERROR, ERROR } from '../types';

const initialState = {
  error: false,
  message: '',
};

const errorReducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR: {
      const { payload } = action;
      return {
        error: true,
        message: payload,
      };
    }
    case CLEAR_ERROR: {
      return {
        error: false,
        message: '',
      };
    }

    default:
      return state;
  }
};
