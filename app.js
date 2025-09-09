let amigos = [];

function limparCampo() {
    campo = document.getElementById('amigo');
    campo.value = '';
}

function adicionarAmigo() {
    let nomeInse = document.getElementById('amigo').value.trim();
    if (nomeInse === '') {
        alert ('Campo vazio insira um nome!')
        limparCampo();
    } else {
        amigos.push(nomeInse);
        limparCampo();
        return console.log(amigos);
        
    }
}
