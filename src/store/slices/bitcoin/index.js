import { BITCOIN_PRICE } from './actions';

const INITIAL_STATE = {
  bitcoin: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case BITCOIN_PRICE:
      return { bitcoin: payload };

    default:
      return state;
  }
}