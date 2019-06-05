export const FETCH_CURRENCIES = "FETCH_CURRENCIES";

export const fetchCurrencies = (data) => ({
  type: FETCH_CURRENCIES,
  payload: data
});

export const fetchCurrenciesThunk = () => {
  return async (dispatch) => {
    const result = await fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=USD,EUR,UAH,RUB');
    const data = await result.json();
    dispatch(data);
  }
};