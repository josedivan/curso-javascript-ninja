var car = {
  cor: ' vermelho',
  ano: '2021',
  marcar: 'Jeep'

}

for (var pro in car) {
  console.log(pro)
}

var number = 10
switch (number) {
  case 1:
    console.log("1");
    break
  case 2:
    console.log("2")
    break
  case 3:
    console.log("3")
    break
  case 10:
    console.log("10")
    break
  default:
    console.log("fim do switch")
}
console.log(number)