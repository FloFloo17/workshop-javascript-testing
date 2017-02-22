var summarizeBasket = require ('./index').summarizeBasket;

let prices = {
  banana: 1,
  potato: 2,
  tomato: 3,
  cucumber: 4,
  salad: 5,
  apple: 6
};

let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];


console.log('BASKET', summarizeBasket(prices, products));

