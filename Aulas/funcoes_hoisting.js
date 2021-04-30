function myfuncao() {
  var number1 = 1
  var number2 = 2
  return sum();
  var sum = function sum() {
    return number2 + number2
  }

}
// Hoisting de funções
function myfun() {
  console.log("antes de declarar", number1);
  var number1 = 10
  console.log("Depois de declarar", number1)
}

console.log(myfuncao())
console.log(myfunc())