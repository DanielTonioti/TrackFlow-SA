let time = 120;
/* let checker = localStorage.getItem(usuario, senha);
if (checker !== senha){
window.location.href = "../public/login.html";
} */

document.getElementById("HubToggleAdmin").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "Admin.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("HubToggleRelatories").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "Relatories.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("HubToggleSensor").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "Sensor.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}