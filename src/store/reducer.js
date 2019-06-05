import { combineReducers } from 'redux';
import name from './slices/name';
import currencies from './slices/currencies';
import bitcoin from './slices/bitcoin';

const rootReducer = combineReducers({
  name,
  currencies,
  bitcoin
});

export default rootReducer;