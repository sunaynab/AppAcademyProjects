function sum1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

function sum2(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

Function.prototype.myBind1 = function myBind1 (context) {
  const func = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function () {
    const callArgs = Array.from(arguments);
    return func.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function myBind2 (context, ...bindArgs){
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  const numbers = [];
  function _curriedSum(num){
    numbers.push(num);

    if (numbers.length === numArgs){
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
Function.prototype.curry = function curry(numArgs) {
  const args = [];
  const fn = this;
  function _curried(num){
    if (args.length === numArgs){
      return fn(...args);
    }else {
      return _curried;
    }
  }
  return _curried;
};
