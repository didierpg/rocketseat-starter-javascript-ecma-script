/*  MÓDULO 01 */

// 1º exercício
import Usuario from './Usuario';
import Admin from './Admin';

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// 2º exercício
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log(usuarios.map((item) => item.idade));
console.log(usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat'));
console.log(usuarios.find(item => item.empresa === 'Google'));

let usuariosIdadeDobrada = usuarios.map(item => {
  item.idade *= 2
  return item;
});
console.log(usuariosIdadeDobrada.filter(item => item.idade <= 50));

// 3º exercício

// 3.1
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
/*
 function mostraIdade(usuario) {
  return usuario.idade;
} 
*/
const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idadeee = 23;
/* 
function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
} 
*/
const mostraUsuario = (nome = 'Diego', idadeee = 18) => ({ nome, idadeee });
console.log(mostraUsuario(nome, idadeee));
console.log(mostraUsuario(nome));

// 3.4
/* 
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  })
} 
*/
const promise = () => (new Promise((resolve, reject) => resolve()))
console.log(promise());

// 4º exercício

/* 
4.1 Desestruturação simples
 */
const empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { name, endereco: { cidade, estado } } = empresa;

console.log(name); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

/* 
4.2 Desestruturação em parâmetros
 */

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 5º Exercício
/* 
5.1 Rest 
*/
const arr1 = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr1;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


const soma = (...numeros) => numeros.reduce((item, next) => (item + next));
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


/*
5.2 Spread
*/

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario1, nome: 'Gabriel' }
console.log(usuario2);
const usuario3 = { ...usuario1, endereco: { cidade: 'Lontras' } }
console.log(usuario3);

// 6º Exercício
const nomeUsuario = 'Diego';
const idadeUsuario = 23;
console.log(`O usuário ${nomeUsuario} possui ${idadeUsuario} anos`);

// 7º Exercício
const nomee = 'Diego';
const idadee = 23;
const usuarioo = {
  nomee: nomee,
  idadee: idadee,
  cidadee: 'Rio do Sul',
};
console.log(usuarioo);

/*  MÓDULO 02 */
import ClasseUsuario from './functions';
/* 1.1 */
ClasseUsuario.info();
/* 1.2 */
import { idade } from './functions';
console.log(idade);
/* 1.3 */
import { idade as IdadeUsuario } from './functions';
console.log(IdadeUsuario);

/*  MÓDULO 03 */

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//       console.log('2s');
//       delay().then(() => {
//         console.log('3s');
//       });
//     })
//   });
// }
async function umPorSegundo() {
  await delay();
  console.log(1);
  await delay();
  console.log(2);
  await delay();
  console.log(3);
}
umPorSegundo();

import axios from 'axios';
// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.warn('Usuário não existe');
//     })
// }
async function getUserFromGithub(user) {
  try {
    console.log(await axios.get(`https://api.github.com/users/${user}`));
  } catch (error) {
    console.warn('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
  static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.warn('Repositório não existe');
      })
  }

  // static async getRepositories(repo) {
  //   try {

  //     console.log(axios.get(`https://api.github.com/repos/${repo}`));
  //   } catch (error) {
  //     console.log('Repositório não existe');

  //   }
  // }

}
Github.getRepositories('didierpg/rocketseat-starter-javascript');
Github.getRepositories('rocketseat/dslkvmskv');

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${usuario}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.warn('Usuário não existe');
//     });
// }

async function buscaUsuario(usuario) {
  try {
    console.log(await axios.get(`https://api.github.com/users/${usuario}`));

  } catch (error) {
    console.warn('Usuário não existe');
  }
}
buscaUsuario('diego3g');