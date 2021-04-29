function myfunction() {
  function sum() {
    return 3 + 1
  }
  return sum();
}
// retorno de funçôes 
function myFunction() {
  var number1 = 1
  var number2 = 2
  return sum()
  function sum() {
    return number1 + number2
  }
}
console.log(myfunction())
console.log(myFunction())