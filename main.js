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
