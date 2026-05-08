let time = 30;

document.getElementById("hub-toggle-admin").onclick = () => {
    time = 30;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "admin.html";
            time = 30;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("hub-toggle-relatories").onclick = () => {
    time = 30;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "relatories.html";
            time = 30;
            clearInterval(id001);
        }
    }, 10);
}
document.getElementById("hub-toggle-sensor").onclick = () => {
    time = 30;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "sensor.html";
            time = 30;
            clearInterval(id001);
        }
    }, 10);
}