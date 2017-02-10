var expect = require('chai').expect;

var summarizeBasket = require ('../index').summarizeBasket;
var getUnique = require ('../index').getUnique;
var splitIdentik = require ('../index').splitIdentik;
var discount = require ('../index').discount;

let prices = {
  banana: 1,
  potato: 2,
  tomato: 3,
  cucumber: 4,
  salad: 5,
  apple: 6
};

let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];

describe('summarizeBasket', function() {

  it('Empty basket should return 0 for each value', function() {
    var result = summarizeBasket({}, []);
    expect(result.price).to.be.equal(0);
    expect(result.countArticles).to.be.equal(0);
    expect(result.countProducts).to.be.equal(0);
  });

  it('Basket witn only one product should return price of the product', function() {
    var result = summarizeBasket(prices, ['cucumber']);
    expect(result.price).to.be.equal(4);
    expect(result.countArticles).to.be.equal(1);
    expect(result.countProducts).to.be.equal(1);
  });

  it('Basket with 2 different products should return basic sum of prices', function() {
    var result = summarizeBasket(prices, ['potato', 'apple']);
    expect(result.price).to.be.equal(8);
    expect(result.countArticles).to.be.equal(2);
    expect(result.countProducts).to.be.equal(2);
  });

  it('Basket with 2 same product should return basic sum of prices but with one countProducts', function() {
    var result = summarizeBasket(prices, ['salad', 'salad']);
    expect(result.price).to.be.equal(10);
    expect(result.countArticles).to.be.equal(2);
    expect(result.countProducts).to.be.equal(1);
  });

  it('Basket with 8 items with 3 same product in should return basic sum of prices but with 5 countProducts', function() {
    var result = summarizeBasket(prices, ['potato', 'banana', 'potato', 'banana', 'cucumber', 'salad', 'apple', 'cucumber']);
    expect(result.price).to.be.equal(25);
    expect(result.countArticles).to.be.equal(8);
    expect(result.countProducts).to.be.equal(5);
  });

  it('Basket with 3 same product should sum of 2 prices of this product', function() {
    var result = summarizeBasket(prices, ['apple', 'apple', 'apple']);
    expect(result.price).to.be.equal(12);
    expect(result.countArticles).to.be.equal(3);
    expect(result.countProducts).to.be.equal(1);
  });

  it('SPEC TEST !!!', function() {
    var result = summarizeBasket(prices, [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ]);
    expect(result.price).to.be.equal(25);
    expect(result.countArticles).to.be.equal(10);
    expect(result.countProducts).to.be.equal(4);
  });



});

describe('function to return array with distinct values', function() {

  it('Empty array should return empty array', function() {
    var result = getUnique([]);
    expect(result).to.be.empty;
  });

  it('Array with one value should return array with same value', function() {
    var result = getUnique(['tutu']);
    expect(result).to.be.eql(['tutu']);
  });

  it('Array with 2 differents values should return array with same values', function() {
    var result = getUnique(['titi', 'toto']);
    expect(result).to.be.eql(['titi', 'toto']);
  });

  it('Array with 3 items with 2 same values should return array with 2 different values', function() {
    var result = getUnique(['tata', 'tete', 'tata']);
    expect(result).to.be.eql(['tata', 'tete']);
  });

});

describe('function to return array with arrays of same values', function() {

  it('Empty array should return empty array', function() {
    var result = splitIdentik([]);
    expect(result).to.be.empty;
  });

  it('Array with one value should return array with same value', function() {
    var result = splitIdentik(['tutu']);
    expect(result).to.be.eql([['tutu']]);
  });

  it('Array with 2 differents values should return array with 2 arrays inside', function() {
    var result = splitIdentik(['titi', 'toto']);
    expect(result).to.be.eql([['titi'], ['toto']]);
  });

  it('Array with 3 items with 2 same values should return array with 2 arrays inside', function() {
    var result = splitIdentik(['tata', 'tete', 'tata']);
    expect(result).to.be.eql([['tata', 'tata'], ['tete']]);
  });

});

describe('function to return array with discount', function() {

  it('Empty array should return empty array', function() {
    var result = discount([]);
    expect(result).to.be.empty;
  });

  it('Array with one sub-array with one element should return same thing', function() {
    var result = discount([
      ['ploumm']
    ]);
    expect(result).to.be.eql([
      ['ploumm']
    ]);
  });

})
