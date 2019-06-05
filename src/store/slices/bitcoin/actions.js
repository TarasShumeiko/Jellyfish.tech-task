export const BITCOIN_PRICE = "BITCOIN_PRICE";

export const bitcoinPrice = (price) => ({
  type: BITCOIN_PRICE,
  payload: price
});