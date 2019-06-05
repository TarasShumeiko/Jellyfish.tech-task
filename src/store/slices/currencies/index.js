import { FETCH_CURRENCIES } from './actions';

const INITIAL_STATE = {
  currencies: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CURRENCIES:
      return { currencies: payload };

    default:
      return state;
  }
};