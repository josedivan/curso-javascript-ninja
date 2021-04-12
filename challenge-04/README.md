# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (comparar) {
  return !!comparar;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)// false
isTruthy(null)// false
isTruthy(false)// false
isTruthy("")// false
isTruthy(undefined) // false
isTruthy(NaN) // false
isTruthy(-0) // false



/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(" 1")
isTruthy("o)
isTruthy(3*3)
isTruthy({})
isTruthy([])
isTruthy("josé")
isTruthy($)
isTruthy( 1<2)
isTruthy( 1 >2)
isTruthy(1==1);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

carro = {
marca: "Jeep",
Modelo: " Bolt",
placa: 152689,
ano: 2021,
cor: "plata",
quantasPortas:4 ,
assentos: 5 ,
quantidadePessoa: 0;
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor){
  carro.cor = "cor"
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
  return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
  return carro.Modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
  return 'Este carro é um ' + carro.obterMarca() + " " + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(adicionar){
  carro.quantidadePessoa++;

  if(carro.quantidadePessoa == 1){
    return 'Já tem 1 pessoa no carro! ';
  }
  if (carro.quantidadePessoa == 2){
    return 'Já tem 2 pessoa no carro !';
  }
  if (carro.quantidadePessoa == 3){
    return 'Já tem 3 pessoa no carro !';
  }
  if ((carro.quantidadePessoa == 4){
    return 'Já tem 4 pessoa no carro!';

}
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor()

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')

// E agora, qual a cor do carro?
carro.ObterCor()// vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('musgo')

// E agora, qual a cor do carro?

carro.obterCor()// MMusgo
// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(4)

// Adicione mais 4 pessoas no carro.

carro.adicionarPessoas(4)

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
