var arr = ['Edivan', null, true, { bola: 'Azul' }, function () { }]

// Add um item no array push()
arr.push({ carr: 'Jeep', ano: '2021' })
arr.push(function soma(x, y) { return x + y })

console.log(arr[6](1, 2))
