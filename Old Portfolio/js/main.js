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













// section title out header ---------------------------------------
// section title out header ---------------------------------------



// الدالة التي تتحقق من موضع العنصر
function checkElementPosition() {
  const element = document.getElementById('tte'); // استبدل 'yourElementId' بمعرف العنصر الخاص بك
  const rect = element.getBoundingClientRect(); // الحصول على معلومات موضع العنصر
  const distanceFromTop = rect.top; // المسافة من أعلى الصفحة

  // التحقق مما إذا كانت المسافة تساوي 8vh
  if (distanceFromTop <= window.innerHeight * 0.09) {
      document.getElementById('v1').style.display = 'none' // تغيير لون الخلفية إلى الأحمر
      document.getElementById('v2').style.display = 'block' // تغيير لون الخلفية إلى الأحمر
      console.log(': العنصر في نطاق 8vh'); // كتابة رسالة في وحدة التحكم
  } else {
    document.getElementById('v1').style.display = 'block' // تغيير لون الخلفية إلى الأحمر
    document.getElementById('v2').style.display = 'none' // تغيير لون الخلفية إلى الأحمر
        console.log('العنصر خارج نطاق 8vh'); // كتابة رسالة في وحدة التحكم
  }
}
window.addEventListener('scroll', checkElementPosition);

document.addEventListener('DOMContentLoaded', checkElementPosition);






// section title in header ---------------------------------------
// section title in header ---------------------------------------



const sections = document.querySelectorAll('section');
const headerTitle = document.querySelector('.header-title'); // الهيدر الخاص بالتغيير

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTitle = section.querySelector('.section-title'); // تأكد أن لكل قسم عنوان بهذا الكلاس

        // تحقق إذا كان القسم الحالي في منتصف الشاشة
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            // headerTitle.textContent = `Talaat Gamal  ${section.id}`;
            headerTitle.innerHTML = `Talaat Gamal <span class="rtv">${section.id}</span>`;

        } else {
            sectionTitle?.classList.remove('active-section-title'); // إزالة الكلاس عند مغادرة القسم
        }
    });
});
