
let splitIdentik = (array) => {
  let newArray = [];
  let checker = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(!checker.hasOwnProperty(item)) {
      checker[item] = newArray.length;
      newArray.push([item]);
    } else {
      newArray[checker[item]].push(item);
    }
  }

  return newArray;
};


let getUnique = (array) => {
  let newArray = [];
  let checker = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(!checker[item]) {
      checker[item] = true;
      newArray.push(item);
    }
  }

  return newArray;
};

let summarizeBasket = (prices, products) => {

  let price = 0;

  let splittedProducts = splitIdentik(products);

  for (let j = 0; j < splittedProducts.length; j++) {
    let sameProducts = splittedProducts[j];

    let toSubstract = Math.floor(sameProducts.length / 3);
    let product = sameProducts[0];
    let priceSameProduct = (sameProducts.length - toSubstract) * prices[product];
    price += priceSameProduct;
  }


  return {
    price: price,
    countArticles: products.length,
    countProducts: getUnique(products).length
  };
};

module.exports = {
  summarizeBasket: summarizeBasket,
  getUnique: getUnique,
  splitIdentik: splitIdentik
};