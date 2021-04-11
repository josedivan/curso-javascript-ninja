// ESCOPO GLOBAL E ESCOPO LOCAL 
//================================================================================
// Se declarar uma variavel dentro de uma função cria um escopo de varivel local e você não consegue acessar essa varivel fora da função.
//==================================================================================
// Criar uma variavel fora da função ela é considerada global e podemos acessar a qualquer momento.

myvar = 1 // variavel criada no escopo global

function myfunction (){  // O valor da varivel vai retornar porque a varivel existe fora da função
  return myvar;
}

function outraFuncao (){ // Esta variavel só existe dentro da função e só retorna se invocar a função.
  outraVar = 2
}


