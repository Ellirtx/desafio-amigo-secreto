let amigos = [];

function limparCampo() {
    campo = document.getElementById('amigo');
    campo.value = '';
}

function adicionarAmigo() {
    let nomeInse = document.getElementById('amigo').value.trim(); 
    let msgErro = document.getElementById('mensagemDerro');

    if (nomeInse === '') {
        msgErro.innerHTML = 'Campo vazio! Insira um nome !!';
        limparCampo();
    } else {
        amigos.push(nomeInse);
        msgErro.innerText = '';
        adicionarAmigoarray();
        limparCampo();
    }
}

function adicionarAmigoarray() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}