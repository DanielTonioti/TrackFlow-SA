const botaoSensor = document.getElementById("botao-sensor");
const lista = document.getElementById("lista-sensor001");
const seta = document.getElementById("seta-admin");
const setaFuncionario = document.getElementById("seta-func");
const botaoFuncionario = document.getElementById("botao-func");
const listaFuncionario = document.getElementById("lista-func");

botaoSensor.addEventListener('click', function () {


    const estaAberto = lista.classList.contains('show');

    if (estaAberto) {

        lista.classList.remove('show');
        seta.style.transform = "rotate(0deg)";
    } else {

        lista.classList.add('show');
        seta.style.transform = "rotate(180deg)";
    }
});