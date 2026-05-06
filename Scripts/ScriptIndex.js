let time = 120;
document.getElementById("IndexButton").onclick = () => {
    time = 120;
    let id001 = setInterval(function () {
        if (time >= 1) {
            time -= 1;
        }
        else {
            window.location.href = "public/Login.html";
            time = 120;
            clearInterval(id001);
        }
    }, 10);
}