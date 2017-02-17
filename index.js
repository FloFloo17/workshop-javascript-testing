
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
  };
};

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