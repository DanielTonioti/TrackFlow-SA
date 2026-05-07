let contas = (("marlon@gmail.com", "123"), 
    ("susane@gmail.com", "1234"), 
    ("frederico@gmail.com", "12345")
);
let cancel = 0;

console.log(contas[0][1]);

document.getElementById("form-login").addEventListener("submit", function (e){
e.preventDefault();

cancel = 0;
let usuario = document.getElementById("usuario-email").value;
let senha = document.getElementById("usuario-senha").value;

if (usuario == null)
{
    cancel = 1;
}
if (!usuario.includes("@"))
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
if (cancel == 0){
localStorage.setItem(usuario, senha);
window.location.href = "../public/hub.html";
}

})

// window.location.href = "../public/hub.html";