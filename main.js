


// home
// home
// home
// home
// home
// home
// home
// home
// home

// const text = "Web Software Engineer and Designer !!";
// const text = `<i class="fa-solid fa-terminal"></i> Junior Frontend Developer`;
// const words = document.getElementById("words");

// let i = 0;
// function typeWriter() {
//     if (i < text.length) {
//         words.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 30);
//         words.style.opacity="1"
//     } else {
//         setTimeout(() => {
//             words.style.opacity="0"
//         }, 3500);
//         setTimeout(() => {
//             words.textContent = "";
//             i = 0;
//             typeWriter();
//         }, 4000);
//     }
// }
// typeWriter();











const text = "Web Software Engineer and Designer !!";
const words = document.getElementById("words");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        words.innerHTML = `<i class="fa-brands fa-react react"></i><span></span> ${text.substring(0, i + 1)}`;
        i++;

        setTimeout(typeWriter, 20);
        words.style.opacity = "1";
    } else {
        setTimeout(() => {
            words.style.opacity = "0";
        }, 7500);

        setTimeout(() => {
            words.innerHTML = "";
            i = 0;
            typeWriter();
        }, 8000);
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
  
    setTimeout(() => {
        home.style.height="auto"
    }, 5000);
    header.style.width="85vw"
    header.style.top="10px"
    header.style.opacity="1"

    home.style.paddingTop="0px"
    home_content.style.opacity="1"

    if (document.body.style.width <= "700px") {
    header.style.width="90vw"
    // header.style.backgroundColor="red"
    }

})






// header
// header
// header
// header
// header
// header
// header
// header
// header






const bars = document.getElementById("head-bars");
const sidbar = document.getElementById("sidbar");


bars.addEventListener("click", function () {
    if (sidbar.style.top === "0vh") {
        sidbar.style.top = "-60vh";
        sidbar.style.opacity="0"
        bars.style.backgroundColor=" #f7fcfa00"
        bars.style.color="#f7fcfa"
    } else {
        sidbar.style.top = "0vh";
        sidbar.style.opacity="1"
        bars.style.backgroundColor="#f7fcfa"
        bars.style.borderRadius="10px"
        bars.style.color="rgba(0, 74, 94, 0.951)"
    }
});































// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects
// projects





let all_cards = document.getElementById("all-cards")
let btn_cards = document.getElementById("btn-all-cards")
let btn_exit = document.getElementById("exit")


btn_cards.addEventListener("click" , function () {
    all_cards.style.display="flex"
    setTimeout(() => {
        all_cards.style.opacity="1"
        all_cards.style.left="0px"
    }, 10);
})


btn_exit.addEventListener("click" , function () {
    
    all_cards.style.opacity="0"
    all_cards.style.left="50%"
    setTimeout(() => {
        all_cards.style.display="none"
    }, 500);
})