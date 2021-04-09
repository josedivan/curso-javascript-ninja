x = 3;
y = 3;

if (x != y) {
  x = 3;
}
// se x for diferente de y retone o valor de x

if (x === y && x === 3) {
  // modificando o valor de x e y dentro da estrutura do if

  x = 5;
  y = 3;
}
// else if paa testar duas condições ou maisd

var x = 1;
var y = 10;

if (x == 2) {
  y = 2;
} else if (y === 3) {
  x = 10;
  y = 100;
} else {
  x = 0;
  y = 0;
}

console.log(x);
console.log(y);
