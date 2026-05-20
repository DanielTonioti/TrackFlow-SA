const botaoSensor001 = document.getElementById("sensor001");
const botaoSensor002 = document.getElementById("sensor002");
const botaoSensor003 = document.getElementById("sensor003");
const botaoSensor004 = document.getElementById("sensor004");
const botaoSensor005 = document.getElementById("sensor005");
const botaoSensor006 = document.getElementById("sensor006");
const botaoSensor007 = document.getElementById("sensor007");
const botaoSensor008 = document.getElementById("sensor008");
const botaoSensor009 = document.getElementById("sensor009");
const botaoSensor010 = document.getElementById("sensor010");
const lista = document.getElementById("lista-sensor001");
const seta = document.getElementById("seta-admin");
const setaFuncionario = document.getElementById("seta-func");
const botaoFuncionario = document.getElementById("botao-func");
const listaFuncionario = document.getElementById("lista-func");

botaoSensor001.addEventListener('click', function () {

shower();
    
});
botaoSensor002.addEventListener('click', function () {

shower();
    
});
botaoSensor003.addEventListener('click', function () {

shower();
    
});
botaoSensor004.addEventListener('click', function () {

shower();
    
});
botaoSensor005.addEventListener('click', function () {

shower();
    
});
botaoSensor006.addEventListener('click', function () {

shower();
    
});
botaoSensor007.addEventListener('click', function () {

shower();
    
});
botaoSensor008.addEventListener('click', function () {

shower();
    
});
botaoSensor009.addEventListener('click', function () {

shower();
    
});
botaoSensor010.addEventListener('click', function () {

shower();
    
});
function shower(){
    const estaAberto = lista.classList.contains('show');

    if (estaAberto) {

        lista.classList.remove('show');
        seta.style.transform = "rotate(0deg)";
    } else {

        lista.classList.add('show');
        seta.style.transform = "rotate(180deg)";
    }
}