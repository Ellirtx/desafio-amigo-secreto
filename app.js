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
