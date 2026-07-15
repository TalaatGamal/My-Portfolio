


// home
// home
// home
// home
// home
// home
// home
// home
// home

const text = "Web Software Engineer and Designer !!";
const words = document.getElementById("words");

let i = 0;
function typeWriter() {
    if (i < text.length) {
        words.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
        words.style.opacity="1"
    } else {
        setTimeout(() => {
            words.style.opacity="0"
        }, 3500);
        setTimeout(() => {
            words.textContent = "";
            i = 0;
            typeWriter();
        }, 4000);
    }
}
typeWriter();

// space ----------------
// space ----------------
// space ----------------

const home = document.getElementById("home");
const home_content = document.getElementById("home-content");
const header = document.getElementById("header");


window.addEventListener("DOMContentLoaded" , function () {
    home.style.paddingTop="0px"
    home_content.style.opacity="1"
    setTimeout(() => {
        home.style.height="auto"
    }, 5000);
    header.style.width="85vw"
    header.style.top="10px"
    header.style.opacity="1"
})







// scroll
// scroll
// scroll
// scroll
// scroll
// scroll
// scroll
// scroll
// scroll
// scroll




// name in header ***********
const name = document.getElementById("name");
const bars = document.getElementById("head-bars");



window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        name.style.color = "black";
        bars.style.color = "black";
    } else {
        name.style.color = "white";
        bars.style.color = "white";
    }
});























// video
// video
// video
// video
// video
// video
// video
// video
// video
// video
// video
// video




// let vid_cover = document.getElementById("vid-cover")
// let home = document.getElementById("home")



// window.addEventListener("DOMContentLoaded" , function() {
//     setTimeout(() => {
//         vid_cover.style.transition="3s"
//         vid_cover.style.opacity="1"
//     }, 500);
// })






















