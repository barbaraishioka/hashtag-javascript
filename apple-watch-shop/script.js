const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "verde-cipreste",
};

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "azul-inverno",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "meia-noite",
};

const estelar = {
  nome: "Estelar",
  pasta: "estelar",
};

const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "rosa-claro",
};

const imagemVisualizacao = document.getElementById("imagem-visualizacao");

const tituloProduto = document.getElementById("titulo-produto");

const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ["41 mm", "45 mm"];

let tamanhoSelecionado = 1; // "45 mm" selecionado

let imagemSelecionada = 1; // Imagem miniatura selecionada

let corSelecionada = 1;

const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

function alterarImagem() {
  // Capturando o id do input type="radio" que tem o atributo checked - Imagem miniatura
  const idOpcaoSelecionada = document.querySelector(
    "[name='opcao-imagem']:checked",
  ).id;

  // Capturando o primeiro caracter do id acima.
  // Exemplo: id="1-imagem" captura somente o 1
  imagemSelecionada = idOpcaoSelecionada.charAt(0);

  // Capturando a imagem maior que mostra o item selecionado
  imagemVisualizacao.src = `./img/apple-watch-color-options/${opcoesCores[corSelecionada].pasta}/${imagemSelecionada}.jpeg`;
}

function alterarTamanho() {
  // alterar tamanho selecionado
  const idOpcaoSelecionada = document.querySelector(
    "[name='opcao-tamanho']:checked",
  ).id;

  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

  // alterar título do produto de acordo com o tamanho selecionado
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  // alterar tamanho da imagem de acordo com o tamanho selecionado

  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function alterarCor() {
  // alterar cor selecionada
  const idOpcaoSelecionada = document.querySelector(
    "[name='opcao-cor']:checked",
  ).id;

  corSelecionada = idOpcaoSelecionada.charAt(0);

  // alterar nome da cor no título do produto
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  // alterar nome da cor
  nomeCorSelecionada.innerText = `Cor: ${opcoesCores[corSelecionada].nome}`;

  // alterar imagens das miniaturas

  miniaturaImagem0.src = `./img/apple-watch-color-options/${opcoesCores[corSelecionada].pasta}/0.jpeg`;

  miniaturaImagem1.src = `./img/apple-watch-color-options/${opcoesCores[corSelecionada].pasta}/1.jpeg`;

  miniaturaImagem2.src = `./img/apple-watch-color-options/${opcoesCores[corSelecionada].pasta}/2.jpeg`;

  // alterar imagem de visualização
  imagemVisualizacao.src = `./img/apple-watch-color-options/${opcoesCores[corSelecionada].pasta}/${imagemSelecionada}.jpeg`;
}
