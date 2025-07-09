// import Admin from "./Admin.js";
// import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas("Cassio", "c@c.com");
console.log(dadosFicticios);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01");
// console.log(novaDocente.exibirInfos());

// novoUser.#nome = "Márcia"
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);
