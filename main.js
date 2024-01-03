<<<<<<< HEAD
$("#telefone").mask("(00) 00000-0000");

$("#cpf").mask("000.000.000-00");

$("#cep").mask("00000-000");

$("form").validate({
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    telefone: {
      required: true,
    },
    cpf: {
      required: true,
    },
    endereco: {
      required: true,
    },
    cep: {
      required: true,
    },
  },
  messages: {
    nome: "Por favor, informe o seu nome completo!",
    email: "Por favor, informe um e-mail válido!",
    telefone: "Por favor, informe o seu telefone!",
    cpf: "Por favor, informe o seu CPF!",
    endereco: "Por favor, informe o seu endereço!",
    cep: "Por favor, informe o seu CEP!",
  },
  submitHandler: function (form) {
    console.log(form);
  },
  invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
      alert(`Existem ${camposIncorretos} campos incorretos`);
    }
  },
});
=======
const form = document.getElementById("form-agenda");
const nomes = [];
const telefones = [];
const spanNome = '<span class="nome-final">';
const spanTelefone = '<span class="telefone-final">';

let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefoneContato = document.getElementById("telefone-contato");

  if (nomes.includes(inputNomeContato.value)) {
    alert("Nome já existe");
    return;
  } else {
    nomes.push(inputNomeContato.value);
    telefones.push(inputTelefoneContato.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputTelefoneContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
>>>>>>> d28800e538228b20aa0c8527b1e7ab344ec87a10
