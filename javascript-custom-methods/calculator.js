/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  substract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  },
  getAverage(numbers) {
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i];
    }
    return average / numbers.length;
  }
};
