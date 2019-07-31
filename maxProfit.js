let max = -1;

const maxProfit = function(arr) {
  // base case is an array with only 1 item
  if (arr.length > 1) {
    // pop off the first element to be the purchasePrice
    let purchasePrice = arr.shift();
    // compare the max profit between purchasePrice and each element in the array
    // console.log('arr:', arr);
    for (let element of arr) {
      // console.log("element - purchasePrice:", element, purchasePrice, element-purchasePrice);
      if (max < element - purchasePrice) {
        max = element - purchasePrice;
      }
    }
    maxProfit(arr);
  }
  return max;
}

module.exports = maxProfit;



