$(document).ready(function () {
  $("#carrossel-imagens").slick({ autoplay: true });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle(); //slideToggle é uma função do jQuery que faz o menu aparecer e desaparecer sem que a gente precise ficar verificando
  });

  $("#telefone").mask("(00) 00000-0000");

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
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, informe seu nome",
      email: "Por favor, informe um e-mail válido",
      telefone: "Por favor, informe o seu telefone",
      mensagem: "Por favor, informe uma mensagem",
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
});

$(".lista-veiculos button").click(function () {
  const destino = $("#contato");

  const nomeVeiculo = $(this).parent().find("h3").text();

  $("#veiculoDeInteresse").val(nomeVeiculo);

  $("html").animate(
    {
      scrollTop: destino.offset().top,
    },
    1000
  );
});
