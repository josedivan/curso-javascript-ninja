/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/ myArray = ['Jose', 32 , true, false, undefined  ]
// 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/ function retorne1 (myArray1){
 return myArray
}
// Jose 

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/ retorne1()[1]
// ?

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retorno2 (arr1, indice1){
 return arr1[indice1] 
}
// ?

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/ arr2 = ['javascript', 'ninja', 32.5,[1,2,3,4,"jose"], obj = {nome: "Edivan"}]
// ?

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/  
console.log(retorno2(arr2,0))
console.log(retorno2(arr2,1))
console.log(retorno2(arr2,2))
console.log(retorno2(arr2,3))
console.log(retorno2(arr2,4))

// ?

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (livro){
    
    var outrosLivros = { 'Aprendendo Javascript ninja':{
        quantidadePaginas: 220, 
        autor: 'Jose Lima',
         editora : 'Bookman'},

    'Javascript o guia do programador':{
        quantidadePaginas: 330,
         autor: 'Judith Ramos', 
         editora: 'Novatec' },

    'Aprendendo Node':{
        quantidadePaginas: 460, 
        autor: 'Flavio almeida',
         editora: 'Alta Books ' },
    
};

 return !livro ? outrosLivros : outrosLivros [livro]
}



// ?

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/ console.log(book())
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/ var bookName = 'Javascript o guia do programador';

var NomeAutor = 'Jose Lima';
console.log('O livro' + bookName + ' tem ' + book( bookName ).quantidadePaginas + ' páginas');
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
   
*/ 

var bookLivro1 = 'Aprendendo Javascript ninja';

console.log("O autor do livro" + bookLivro1 + ' é ' + book(bookLivro1).autor);
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/ var bookLivro1 = 'Aprendendo Javascript ninja';

console.log("O nome do livro" + bookLivro1 + ' foi publicado pela editora ' + book(bookLivro1).editora);

// ?

