let time = 120;
/* let checker = localStorage.getItem(usuario, senha);
if (checker !== senha){
window.location.href = "../public/login.html";
} */

document.getElementById("hub-toggle-admin").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "admin.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("hub-toggle-relatories").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "relatories.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("hub-toggle-sensor").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "sensor.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}