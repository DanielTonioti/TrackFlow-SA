let Contas = (("Marlon", "123"), ("Susane", "1234"), ("Frederico", "12345"))
let Cancel = 0;

console.log(Contas[0][1]);

document.getElementById("form-login").addEventListener("submit", function (e){

let usuario = document.getElementById("UsuarioEmail").value;
let senha = document.getElementById("UsuarioSenha").value;

if (usuario == null)
{
    cancel = 1;
}
if (senha.length < 4)
{
    cancel = 1;
}
if (cancel == 1)
{
alert("Dados Incorretos");
}


})