let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let containerMensagemErro = document.querySelector(".error-message");
let containerMensagemSucesso = document.querySelector(".sucess-message");

const mensagemErro =
  "ATENÇÃO: O segundo número deve ser maior do que o primeiro!";
const mensagemSucesso = "Ótimo! O segundo número é maior que o primeiro!";
let formValido = false;

numero2.addEventListener("input", function () {
  let valor1 = parseInt(numero1.value);
  let valor2 = parseInt(numero2.value);

  if (valor2 > valor1) {
    formValido = true;
    numero2.classList.remove("error");
    containerMensagemErro.style.display = "none";
    containerMensagemSucesso.style.display = "block";
    containerMensagemSucesso.innerHTML = mensagemSucesso;
  } else {
    formValido = false;
    numero2.classList.add("error");
    containerMensagemErro.style.display = "block";
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemSucesso.style.display = "none";
  }
});

numero2.addEventListener("change", function () {
  if (formValido) {
    containerMensagemErro.style.display = "none";
  }
});
