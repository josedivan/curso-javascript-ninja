function adder(x) {
  return function (y) {
    return x + y
  };
}

var add2 = adder(5)

console.log(add2(4))
