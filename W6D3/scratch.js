Number.prototype.product = function(numbers) {
  
  return numbers.map(function(number) {
    return this * number;
  }.bind(this));
};

String.prototype.add = function(newStr) {
  return this + newStr;
};

const three = new Number(3);

function addThreeToEach(numbers) {
  return numbers.map(function(number) {
    return three.sum(number);
  });
}
