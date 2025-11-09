
let intro = document.getElementById("intro")
let nn_cover = document.getElementById("nn-cover")

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        nn_cover.style.width="100%"
    }, 1);
    setTimeout(() => {
        intro.style.opacity="0"
    }, 1000);
    setTimeout(() => {
        intro.style.display="none"
    }, 2000);
});
