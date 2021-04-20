var arr = ['Edivan', null, true, { bola: 'Azul' }, function () { }]

console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
qtd = arr.length

//while (qtd > 0) {
// console.log(arr[--qtd]);
//}

while (qtd > 0) {
  console.log(arr[--qtd]);
  if (qtd === 3) {
    console.log(arr[qtd].bola);
  }
}