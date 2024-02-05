const botaoEnviar = document.getElementById("enviar");
const caixaDeMensagem = document.getElementById("texto");
const chat = document.getElementById("mensagens");

botaoEnviar.addEventListener("click", () => {
  if (caixaDeMensagem.value !== "") {
    const elementoMensagem = document.createElement("li");
    elementoMensagem.textContent = caixaDeMensagem.value;
    elementoMensagem.classList.add("mensagem");
    chat.appendChild(elementoMensagem);
    caixaDeMensagem.value = "";
  }
});
