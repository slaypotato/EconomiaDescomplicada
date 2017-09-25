var botaoAdicionar = document.querySelector("#cadastro-usuario");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var usuario = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(usuario);
    if (erros.length > 0) {
      exibeMensagensDeErro(erros);

      return;
    }


    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";


});
function obtemPacienteDoFormulario(form){
  var usuario = {
      nome: form.nome.value,
      email: form.email.value
  }
  return usuario;
}

function validaPaciente(usuario) {

    var erros = [];

    if (usuario.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (usuario.email.length == 0) {
        erros.push("Email não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        ul.classList.add("#mensagens-erro");
    });
}
