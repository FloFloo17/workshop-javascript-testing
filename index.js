var _ = require('lodash');

let splitIdentik = (array) => {

  let objWithArray = array.reduce((acc, product) => {
    acc[product] ? acc[product].push(product) : acc[product] = [product];
    return acc;
  },{});

  let objToArr = Object.keys(objWithArray).map((item) => {
    return objWithArray[item];
  });


  return objToArr;
}

let getUnique = (array) => {
  return _.uniq(array);
}

let summarizeBasket = (prices, products) => {

  let productNumbers = products.map(item => {
    return prices[item];
  });

  let basketWithDiscount = discount(splitIdentik(productNumbers));

  let arrayPrice = basketWithDiscount.map((subArray) => {
    return sum(subArray);
  })

  let price = sum(arrayPrice);

  return {
    price: price,
    countArticles: products.length,
    countProducts: getUnique(products).length
  }
}

let sum = (numbers) => {
  return numbers.reduce((acc,number)=>{
    return acc + number;
  },0)
}


let discount = (array) => {
  return array.slice(0)
    .map(subArray => {
      return subArray.filter((item, index) => {
        return (index + 1)%3 !== 0;
      });
    });
}


module.exports = {
  summarizeBasket: summarizeBasket,
  getUnique: getUnique,
  splitIdentik: splitIdentik,
  discount: discount
};