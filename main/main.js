




















              
// fixed icon 
              


  const arrow = document.querySelector(".fixed-icon");
  const page = document.querySelector(".pages");
  let isClosed = false;

  arrow.addEventListener("click", () => {

    if (isClosed) {
      page.style.transform = "translateX(0)";
      arrow.querySelector("i").style.transform = "rotate(0deg)";
    } else {
      page.style.transform = "translateX(-200px)";
      arrow.querySelector("i").style.transform = "rotate(180deg)";
    }
    isClosed = !isClosed;
  });

  







  
              
// sidabar 
              




const menuIcon = document.querySelector('.sidebar-menu');
const sidebar = document.querySelector('.sidebar-content');
const xIcon = document.getElementById("x-icon");
const menuIconElement = document.getElementById("menu-icon");

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  if (sidebar.classList.contains('active')) {
    xIcon.style.display = "block";
    menuIconElement.style.display = "none";
  } else {
    xIcon.style.display = "none";
    menuIconElement.style.display = "block";
  }
});


















              
// air-window
              





document.getElementById("mora").addEventListener("click", function (e) {
  e.preventDefault();
  const airWindow = document.querySelector(".air-w-bar");

  if (airWindow.classList.contains("visiblea")) {
    // إخفاء العنصر مع الأنيميشن
    airWindow.classList.remove("visiblea");
    setTimeout(() => {
      airWindow.style.display = "none";
    }, 300); // الانتظار حتى تنتهي الأنيميشن
  } else {
    // إظهار العنصر مع الأنيميشن
    airWindow.style.display = "flex";
    setTimeout(() => {
      airWindow.classList.add("visiblea");
    }, 10); // تأخير بسيط لتفعيل الأنيميشن
  }
});

// إغلاق العنصر عند النقر على #back-x
document.getElementById("back-x").addEventListener("click", function (e) {
  e.preventDefault();
  const airWindow = document.querySelector(".air-w-bar");
  airWindow.classList.remove("visiblea");
  setTimeout(() => {
    airWindow.style.display = "none";
  }, 300); // الانتظار حتى تنتهي الأنيميشن
});




















              
// home
              





  // Array of words to display
const words = ["front-end developer", "Software Engineer"];
let currentWordIndex = 0;
let typingSpeed = 30;  // Speed of typing
let erasingSpeed = 30; // Speed of erasing
let delayBetweenWords = 5000; // Delay between typing the next word

const dynamicTextElement = document.getElementById("dynamic-text");
const cursorElement = document.getElementById("cursor");

function typeWord() {

  let word = words[currentWordIndex];
  let charIndex = 0;

  function type() {
    if (charIndex < word.length) {
      dynamicTextElement.textContent += word.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(eraseWord, delayBetweenWords);
    }
  }

  type();
}

function eraseWord() {
  let word = words[currentWordIndex];
  let charIndex = word.length;

  function erase() {
    if (charIndex > 0) {
      dynamicTextElement.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length; // Loop through words
      setTimeout(typeWord, typingSpeed);
    }
  }

  erase();
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeWord, typingSpeed + 1000); // Initial delay before typing starts
});

















