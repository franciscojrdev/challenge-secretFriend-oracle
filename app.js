//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nomeDoAmigo = document.getElementById("amigo").value;
  if (nomeDoAmigo == "") {
    alert("Por favor, insira um nome.");
  }
  amigos.push(nomeDoAmigo);
  criarLista(nomeDoAmigo);
  esconderLista("resultado");
  limparCampo();
}

function sortearAmigo() {
  let numero = gerarNumeroAleatorio();
  if (amigos.length == 0 || numero == undefined) {
    alert("Nenhum amigo adicionado a lista.");
  } else {
    let amigoSecreto = amigos[numero - 1];
    mostrarAmigo(amigoSecreto);
  }
}

function criarLista(nome) {
  let lista = document.getElementById("listaAmigos");
  let newLi = document.createElement("li");
  newLi.textContent = nome;
  lista.appendChild(newLi);
}

function mostrarAmigo(nome) {
  let resultado = document.getElementById("resultado");
  esconderLista("listaAmigos");
  resultado.innerHTML = "O seu amigo secreto sorteado é: " + nome;
}

function esconderLista(valor) {
  let lista = document.getElementById(valor);
  lista.innerHTML = "";
}

function limparCampo() {
  let campo = document.querySelector("input");
  campo.value = "";
}

function gerarNumeroAleatorio() {
  let numero = Math.floor(Math.random() * amigos.length + 1);
  return numero;
}
