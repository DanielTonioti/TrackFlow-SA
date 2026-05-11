let timenav = 30;

document.getElementById("hub-toggle-admin").onclick = () => {
    timenav = 30;
    let id001 = setInterval(function () {
        if (timenav >= 1) {
            timenav -= 1;
        }
        else {
            window.location.href = "admin.html";
            timenav = 30;
            clearInterval(id001);
        }
    }, 10);
} // Brings you to the admin page after a small delay
document.getElementById("hub-toggle-relatories").onclick = () => {
    timenav = 30;
    let id001 = setInterval(function () {
        if (timenav >= 1) {
            timenav -= 1;
        }
        else {
            window.location.href = "relatories.html";
            timenav = 30;
            clearInterval(id001);
        }
    }, 10);
} // Brings you to the relatories page after a small delay
document.getElementById("hub-toggle-sensor").onclick = () => {
    timenav = 30;
    let id001 = setInterval(function () {
        if (timenav >= 1) {
            timenav -= 1;
        }
        else {
            window.location.href = "sensor.html";
            timenav = 30;
            clearInterval(id001);
        }
    }, 10);
} // Brings you to the sensors page after a small delay