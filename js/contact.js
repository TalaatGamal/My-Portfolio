
let main = document.getElementById("main")
let video = document.getElementById("video")

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        main.style.opacity="1"
        main.style.width="80vw"
    }, 500);
    setTimeout(() => {
        video.style.opacity="1"
    }, 2000);
});
