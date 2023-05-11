const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .btn-igual');

function insert( valor) {
    resultado.innerHTML += valor;
}

function clean () {
    resultado.innerHTML = ' ';
}

function backspace () {
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}