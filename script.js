let pedra = document.querySelector(".pedra");
let papel = document.querySelector(".papel");
let tesoura = document.querySelector(".tesoura");

let escolhas = document.querySelector(".escolhas");
let escolhaJogador = document.querySelector(".escolhaJogador");
let escolhaComputador = document.querySelector(".escolhaComputador");

let pontosJogador = document.querySelector(".pontosJogador");
let pontosComputador = document.querySelector(".pontosComputador");
var jogador = 0;
var computador = 0;

pedra.addEventListener("click", stone);
papel.addEventListener("click", paper);
tesoura.addEventListener("click", scissors);

var numberAleatorio = 0;

function aleatorio() {
  numberAleatorio = Math.floor(Math.random() * 3);
}

function ocupacao() {
  escolhas.style.opacity = "0";
}

function stone() {
  aleatorio();

  if (numberAleatorio == 0) {
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/pedradire.png";
    escolhaComputador.src = "./img/pedraesq.png";
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 1) {
    computador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/pedradire.png";
    escolhaComputador.src = "./img/papelesq.png";
    pontosComputador.innerHTML = computador;
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 2) {
    jogador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/pedradire.png";
    escolhaComputador.src = "./img/tesouraesq.png";
    pontosJogador.innerHTML = jogador;
    setTimeout(ocupacao, 700);
  }
}

function paper() {
  aleatorio();

  if (numberAleatorio == 0) {
    jogador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/papeldire.png";
    escolhaComputador.src = "./img/pedraesq.png";
    pontosJogador.innerHTML = jogador;
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 1) {
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/papeldire.png";
    escolhaComputador.src = "/img/papelesq.png";
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 2) {
    computador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/papeldire.png";
    escolhaComputador.src = "./img/tesouraesq.png";
    pontosComputador.innerHTML = computador;
    setTimeout(ocupacao, 700);
  }
}
function scissors() {
  aleatorio();

  if (numberAleatorio == 0) {
    computador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/tesouradire.png";
    escolhaComputador.src = "./img/pedraesq.png";
    pontosComputador.innerHTML = computador;
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 1) {
    jogador++;
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/tesouradire.png";
    escolhaComputador.src = "./img/papeldire.png";
    pontosJogador.innerHTML = jogador;
    setTimeout(ocupacao, 700);
  } else if (numberAleatorio == 2) {
    escolhas.style.opacity = "100%";
    escolhaJogador.src = "./img/tesouradire.png";
    escolhaComputador.src = "./img/tesouraesq.png";
    setTimeout(ocupacao, 700);
  }
}
