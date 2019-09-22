class LargestProduct {
  constructor(number) {
    this.number = number;
    this.index = 0;
  }

  getLargestProduct() {
    let largest = [];
    let array = this.number.split("").map(int => parseInt(int));
    array.map((x, y, array) => {
      return largest.push(
        x * array[y + 1] * array[y + 2] * array[y + 3] * array[y + 4]
      );
    });
    let sortArr = largest.filter(num => !isNaN(num)).sort((a, b) => a - b);
    let largestProd = sortArr[sortArr.length - 1];
    // console.log(largest.indexOf(largestProd));
    this.index = largest.indexOf(largestProd);
    return largestProd;
  }

  getLargestProductIndex() {
    this.getLargestProduct();
    return this.index;
  }
}

module.exports = LargestProduct;
