let Contas = (("Marlon", "123"), ("Susane", "1234"), ("Frederico", "12345"))
let Cancel = 0;

console.log(Contas[0][1]);

document.getElementById("form-login").addEventListener("submit", function (e){
e.preventDefault();

Cancel = 0;
let usuario = document.getElementById("UsuarioEmail").value;
let senha = document.getElementById("UsuarioSenha").value;

if (usuario == null)
{
    Cancel = 1;
}
if (!usuario.includes("@"))
{
    Cancel = 1;
}
if (senha.length < 4)
{
    Cancel = 1;
}
if (Cancel == 1)
{
alert("Dados Incorretos");
}
if (Cancel == 0){
window.location.href = "../public/hub.html";
}

})