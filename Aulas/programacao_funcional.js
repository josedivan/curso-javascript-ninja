//Exemplo: funções retorna objetos
function pessoa(documentos) {
  return documentos = {
    rg: 1233456,
    nome: 'jose',
    sobrenome: 'lima',
  }
}
// chamada das funcções com acesso ao objeto 

pessoa().nome // retorna 'jose'
pessoa().sobrenome // retorna 'Lima'