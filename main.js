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
