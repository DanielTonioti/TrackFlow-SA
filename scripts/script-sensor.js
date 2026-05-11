let time = 30;
document.getElementById("dados-buttom").onclick = () => {
    time = 30;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "../public/Sensor_Data.html";
            time = 30;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("gerenciar-buttom").onclick = () => {
    time = 30;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "../public/Sensor_Manage.html";
            time = 30;
            clearInterval(id001);
        }
    }, 10);
}