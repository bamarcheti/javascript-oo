const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true, // por padrão
  exibirInfos: function () {
    console.log(`Nome: ${this.nome}, Email: ${this.email}`);
  },
};

// user.exibirInfos();

// const exibir = user.exibirInfos;
// exibir();

const exibir = function () {
  console.log(`Nome: ${this.nome}, Email: ${this.email}`);
};

const exibirNome = exibir.bind(user);
exibirNome();
