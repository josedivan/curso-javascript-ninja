pessoa = {
  nome: "Edivan",
  idade: 32,
  pesso: 80,
};
pessoa = { sexo: "Masculino" }; // Objeto agora vai ser a propriedade masculino

// ============================================================================

pessoa = {
  nome: "Edivan",
  idade: 32,
  peso: 80,
};
pessoa.idade = 32;
//  =========================================================================

pessoa = {
  nome: "Edivan",
  idade: 32,
  peso: 80,
};
// ISSO É UM MÉTODO DENTRO DE OBJETO, É COMO SE FOSSE UMA FUNÇÃO.
pessoa.andar = function () {
  return "Andando..";
};
// criando um método aniversário que aumente um ano da idade pessoa

pessoa = {
  nome: "Edivan",
  idade: 32,
  peso: 80,
};

pessoa.aniversario = function () {
  pessoa.idade++;
};

// Criando um método dentro o obejto para retornar o nome completo

pessoa.nomeCompleto = function () {
  return pessoa.nome + " " + "Lima";
};

console.log(pessoa.nomeCompleto());
console.log(pessoa);
