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


















// // الدالة التي تتحقق من موضع العنصر
// function checkElementPosition() {
//   const element = document.getElementById('tte'); // استبدل 'yourElementId' بمعرف العنصر الخاص بك
//   const rect = element.getBoundingClientRect(); // الحصول على معلومات موضع العنصر
//   const distanceFromTop = rect.top; // المسافة من أعلى الصفحة

//   // التحقق مما إذا كانت المسافة تساوي 8vh
//   if (distanceFromTop <= window.innerHeight * 0.09) {
//       document.getElementById('tte').style.backgroundColor = '#00737b'; // تغيير لون الخلفية إلى الأحمر
//       document.getElementById('tte').style.boxShadow = '#00737b 0px 10px 10px 5px'; // تغيير لون الخلفية إلى الأحمر
//       console.log(': العنصر في نطاق 8vh'); // كتابة رسالة في وحدة التحكم
//   } else {
//     document.getElementById('tte').style.backgroundColor = '#00737b00'; // تغيير لون الخلفية إلى الأحمر
//     document.getElementById('tte').style.boxShadow = '#00737b00 0px 35px 40px 4px'; // تغيير لون الخلفية إلى الأحمر
//     console.log('العنصر خارج نطاق 8vh'); // كتابة رسالة في وحدة التحكم
//   }
// }

// // استمع لحدث التمرير لتحديث الخلفية
// window.addEventListener('scroll', checkElementPosition);

// // تحقق من الموضع عند تحميل الصفحة
// document.addEventListener('DOMContentLoaded', checkElementPosition);


























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

// استمع لحدث التمرير لتحديث الخلفية
window.addEventListener('scroll', checkElementPosition);

// تحقق من الموضع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', checkElementPosition);
