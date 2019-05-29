/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (array.length === 0) return [0];
  const len = array.length;
  const products = [];
  let temp = 1;

  for (let i = 0; i < len; i++) {
    let start = array.slice(0, i);
    let end = array.slice(i + 1);
    let ints = start.concat(end);
    for (let j = 0; j < ints.length; j++) {
      temp *= ints[j];
    }
    products.push(temp);
    temp = 1;
  }

  return products;
}

getAllProducts([1, 7, 3, 4]);

module.exports = getAllProducts;
