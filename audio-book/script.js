const botaoPlayPause = document.getElementById("play-pause");
const botaoVoltar = document.getElementById("anterior");
const botaoAvancar = document.getElementById("proximo");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoReiniciar = document.getElementById("reiniciar");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let faixaTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausarFaixa() {
  if (faixaTocando === false) {
    tocarFaixa();
    faixaTocando = true;
  } else {
    pausarFaixa();
    faixaTocando = false;
  }
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual++;
    botaoVoltar.removeAttribute("disabled");
  }

  audioCapitulo.src = `./audio/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  faixaTocando = true;

  if (capituloAtual === 1) {
    botaoVoltar.setAttribute("disabled", true);
  }

  alterarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = 1;
  } else {
    capituloAtual--;
  }

  audioCapitulo.src = `./audio/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  faixaTocando = true;

  if (capituloAtual === 1) {
    botaoVoltar.setAttribute("disabled", true);
  }

  alterarNomeFaixa();
}

function reiniciarFaixa() {
  audioCapitulo.currentTime = 0;
  tocarFaixa();
  faixaTocando = true;
}

function alterarNomeFaixa() {
  nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
botaoReiniciar.addEventListener("click", reiniciarFaixa);
