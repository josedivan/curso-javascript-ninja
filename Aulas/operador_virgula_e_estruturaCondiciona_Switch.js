function myfunc (){
  var a = 1, b = 5, c= 10;
return [a,b,c]
}

function myfunc1 (){
  var x = 0
  return (x += 1, x)
}
// Outra forma 2 de fazer o mesmo resultado.
function myfunc1 (){
  var x = 0
  return (x = x + 1, x)
}
// // Outra forma 3 de fazer o mesmo resultado.
function myfunc1 (){
  var x = 0
  return ++x
}
// ESTRUTURA CONDICIONAL SWITCH
function valorDeX(x) {
  switch (x) {
    case 1: 
      console.log("x é igual 1:");
      break;
    case 2:
      console.log("x é igual a 2:");
      break;
    case 3:
      console.log("x é igual a 3:");
      break;
    default:
      console.log("x não é igual a nenhum número");
  }
}

console.log(valorDeX(0))

console.log(myfunc())
console.log(myfunc1())