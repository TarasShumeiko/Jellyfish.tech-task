import { USER_NAME } from './actions';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_NAME:
      return { name: payload };

    default:
      return state
  }
};