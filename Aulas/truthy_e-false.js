1 === "b" // false 
if(1) { teste1 =true} else {teste1 = false } // valor 1 retorna true;

if(0) { teste2 =true} else {teste2 = false } // valor 0 retorna false;

if("") { teste3 = true} else {teste3 = false} // string vazia retorna false 

if("0") {teste4 = true} else {teste4 = false} // retorna true, porque está porque está dentro de uma string 
if(0) {teste5 = true} else {teste5 = false} // os valores zero, null, undefined , -0 e NaN sempre vão retornar false.
if({}) {teste6 = true} else {teste6 = false} // objeto vazio e array retornam true.

!true // inverte e retona false, ele faz a negação 
!false  // inverte o valor e retorna true  
!! true // !! inverte o valor duas vezes e retorna true
!!0 // false 
!!2 // true 
!! "Edivan"// true 
!! NaN // false 

console.log(teste1)
console.log(teste2)
console.log(teste3)
console.log(teste4)
console.log(teste5)
console.log(teste6)