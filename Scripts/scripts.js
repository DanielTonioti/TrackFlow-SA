let Contas = (("Marlon", "123"), ("Susane", "1234"), ("Frederico", "12345"))
let Cancel = 0;

console.log(Contas[0][1]);

document.getElementById("id001").addEventListener("submit", function (e){

let usuario = document.getElementById("id002").value;
let senha = document.getElementById("id003").value;

if (usuario == null)
{
    cancel = 1;
}
if (senha.length < 4)
{
    cancel = 1;
}



})