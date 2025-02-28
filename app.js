//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let escolherAmigo = gerarNumeroAleatorio();
let limite = listaDeAmigos.length;

function adicionarAmigo() {
  let nomeDoAmigo = document.getElementById("amigo").value;
  if (nomeDoAmigo == "") {
    alert("Por favor, insira um nome.");
  }
  amigos.push(nomeDoAmigo);
  criarLista(nomeDoAmigo);
  limparCampo();
}

function criarLista(nome) {
  let lista = document.getElementById("listaAmigos");
  console.log(lista);
  let newLi = document.createElement("li");
  newLi.textContent = nome;
  lista.appendChild(newLi);
}

function limparCampo() {
  let campo = document.querySelector("input");
  campo.value = "";
}

function gerarNumeroAleatorio() {
  let numero = parseInt(Math.random() * limite + 1);
}
