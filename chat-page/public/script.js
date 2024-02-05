const botaoEnviar = document.getElementById("enviar");
const caixaDeMensagem = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {
  if (caixaDeMensagem.value !== "") {
    socket.emit("Nova mensagem", caixaDeMensagem.value);
    caixaDeMensagem.value = "";
  }
});

socket.addEventListener("Nova mensagem", (mensagem) => {
  const elementoMensagem = document.createElement("li");
  elementoMensagem.textContent = mensagem;
  elementoMensagem.classList.add("mensagem");
  chat.appendChild(elementoMensagem);
});
