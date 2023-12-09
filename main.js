$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    const nomeTarefa = $("#nome_tarefa").val();
    const novaTarefa = `<li>${nomeTarefa}</li>`; // Cria um novo elemento de lista com o nome da tarefa

    $("#lista_tarefas").append(novaTarefa); // Adiciona a nova tarefa à lista
    $("#nome_tarefa").val(""); // Limpa o campo de entrada após adicionar a tarefa
  });

  $("#lista_tarefas").on("click", "li", function () {
    $(this).toggleClass("riscado");
  });
});
