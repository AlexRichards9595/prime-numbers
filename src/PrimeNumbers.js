var generate = function(number) {
  var returnArray = new Array;
  for (var i = 2; i < number; i++) {

    while (number % i == 0) {
      number = number / i;
      returnArray.push(i);
    }
  }
  if (number != 1) {
    returnArray.push(number);
  }
  return returnArray;
}
