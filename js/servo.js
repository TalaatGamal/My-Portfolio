








const serWindow = document.getElementById("servo");
const SW_Button = document.getElementById("SW_Button")
const SW_Button2 = document.getElementById("SW_Button2")



SW_Button.addEventListener("click", function (e) {
    e.preventDefault();

    if (serWindow.style.display === "flex") {
        serWindow.style.opacity = "0";
        setTimeout(() => {
            serWindow.style.display = "none";
        }, 300); // يفضل استخدام مهلة قصيرة لإعطاء تأثير سلس
        document.querySelector("body").style.overflow = "auto";
    } else {
        serWindow.style.display = "flex";
        setTimeout(() => {
            serWindow.style.opacity = "1";
        }, 0);
        document.querySelector("body").style.overflow = "hidden";
    }
});

SW_Button2.addEventListener("click", function (e) {
    e.preventDefault();

    if (serWindow.style.display === "flex") {
        serWindow.style.opacity = "0";
        setTimeout(() => {
            serWindow.style.display = "none";
        }, 300); // يفضل استخدام مهلة قصيرة لإعطاء تأثير سلس
        document.querySelector("body").style.overflow = "auto";
    } else {
        serWindow.style.display = "flex";
        setTimeout(() => {
            serWindow.style.opacity = "1";
        }, 0);
        document.querySelector("body").style.overflow = "hidden";
    }
});
