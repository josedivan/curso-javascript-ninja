// Funções literal 

function sum() {
  return 1 + 2;
}
console.log(sum())


// Funções anonima 

var sum2 = function () {
  return 2 + 3
}
console.log(sum2())

var sum3 = function outraFuncoes() {

  return 5 + 3
}

console.log(sum3())
  //console.log(outraFuncoes())

  // Funções executáveis 

  (function () {

    console.log('isso é uma função executável ' + (1 + 3));
  }());
