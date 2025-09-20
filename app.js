let amigos = [];

function limparCampo() {
    campo = document.getElementById('amigo');
    campo.value = '';
}

function agregarAmigo() {
    const nomeInse = document.getElementById('amigo').value.trim(); 
    const msgErro = document.getElementById('mensagemDerro');

    if (nomeInse === '' || amigos.includes(nomeInse)) {
        msgErro.textContent = nomeInse === ''
        ? 'Campo vazio ! Insira um nome !!' : 'Esse nome já existe na lista!!';
        limparCampo();
    } else { 
        amigos.push(nomeInse);
        msgErro.innerText = '';
        adicionarAmigosLista();
        limparCampo();
    }
}

function adicionarAmigosLista() {
    const lista = document.getElementById("listaAmigos");

    lista.textContent = "";

    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
     
    listaAmigos.appendChild(li);
  }
}