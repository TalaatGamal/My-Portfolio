


// const paragraphs = document.querySelectorAll('.comment');
// const avatar = document.querySelectorAll('.avatar');

// paragraphs.forEach(paragraph => {
//   paragraph.addEventListener('click', () => {

//     if (paragraph.style.width === "100%") {
//       paragraph.style.width = "60%";
//     } else {
//       paragraph.style.width = "100%";
//     }
//   });
// });






// const paragraphs = document.querySelectorAll('.comment');
// const avatars = document.querySelectorAll('.avatar');

// paragraphs.forEach((paragraph, index) => {
//   paragraph.addEventListener('click', () => {

//     if (paragraph.style.width === "100%") {
//             paragraph.style.width = "60%";
//           } else {
//             paragraph.style.width = "100%";
//           }
        

//     const avatar = avatars[index];
//     animateAvatar(avatar); 
//   });
// });

// function animateAvatar(element) {
//   let start = 0; 
//   const animationDuration = 1000; 
//   const startTime = performance.now();

//   function step(currentTime) {
//     const elapsedTime = currentTime - startTime; 
//     const progress = Math.min(elapsedTime / animationDuration, 1); 

//     element.style.opacity = 1 - progress; 
//     element.style.transform = `translateX(${progress * 500}px)`;

//     if (progress < 1) {
//       requestAnimationFrame(step); 
//     }
//   }

//   requestAnimationFrame(step);
// }
























// const paragraphs = document.querySelectorAll('.comment');
// const avatars = document.querySelectorAll('.avatar');

// paragraphs.forEach((paragraph, index) => {
//   paragraph.addEventListener('click', () => {
//     if (paragraph.style.width === "100%") {
//       paragraph.style.width = "60%";
//     } else {
//       paragraph.style.width = "100%";
//     }

//     const avatar = avatars[index];
//     toggleAnimation(avatar);
//   });
// });

// function toggleAnimation(element) {
//   // التحقق إذا كان العنصر متحركًا بالفعل
//   if (element.dataset.isAnimating === "true") {
//     resetAvatar(element); // إعادة العنصر لحالته الأصلية
//   } else {
//     animateAvatar(element); // بدء الحركة
//   }
// }

// function animateAvatar(element) {
//   element.dataset.isAnimating = "true"; // تعيين حالة الحركة
//   const animationDuration = 1000; // مدة الحركة
//   const startTime = performance.now();

//   function step(currentTime) {
//     const elapsedTime = currentTime - startTime;
//     const progress = Math.min(elapsedTime / animationDuration, 1);

//     element.style.opacity = 1 - progress;
//     element.style.transform = `translateX(${progress * 500}px)`;

//     if (progress < 1) {
//       requestAnimationFrame(step);
//     }
//   }

//   requestAnimationFrame(step);
// }

// function resetAvatar(element) {
//   element.dataset.isAnimating = "false"; // إعادة تعيين حالة الحركة
//   element.style.opacity = 1; // إعادة الشفافية
//   element.style.transform = "translateX(0px)"; // إعادة الموضع
// }













// const paragraphs = document.querySelectorAll('.comment');
// const avatars = document.querySelectorAll('.avatar');

// paragraphs.forEach((paragraph, index) => {
//   paragraph.addEventListener('click', () => {
//     const avatar = avatars[index];

//     // نفذ حركة avatar أولاً
//     animateAvatar(avatar, () => {
//       // بعد انتهاء حركة avatar، قم بتغيير عرض comment
//       toggleCommentWidth(paragraph);
//     });
//   });
// });

// function toggleCommentWidth(paragraph) {
//   if (paragraph.style.width === "100%") {
//     paragraph.style.width = "60%";
//   } else {
//     paragraph.style.width = "100%";
//   }
// }

// function animateAvatar(element, callback) {
//   element.dataset.isAnimating = "true"; // تعيين حالة الحركة
//   const animationDuration = 1000; // مدة الحركة
//   const startTime = performance.now();

//   function step(currentTime) {
//     const elapsedTime = currentTime - startTime;
//     const progress = Math.min(elapsedTime / animationDuration, 1);

//     element.style.opacity = 1 - progress;
//     element.style.transform = `translateX(${progress * 500}px)`;

//     if (progress < 1) {
//       requestAnimationFrame(step); // تابع الحركة
//     } else {
//       element.dataset.isAnimating = "false"; // إنهاء الحركة
//       if (callback) callback(); // استدعاء الدالة التالية (toggleCommentWidth)
//     }
//   }

//   requestAnimationFrame(step);
// }























const paragraphs = document.querySelectorAll('.comment');
const avatars = document.querySelectorAll('.avatar');

paragraphs.forEach((paragraph, index) => {
  paragraph.addEventListener('click', () => {
    const avatar = avatars[index];

    if (paragraph.style.width === "100%") {

      toggleCommentWidth(paragraph, () => {
        reverseAnimateAvatar(avatar); 
      });
    } else {

      animateAvatar(avatar, () => {
        toggleCommentWidth(paragraph); 
      });
    }
  });
});

// دالة تغيير عرض الـ comment
function toggleCommentWidth(paragraph, callback) {
  if (paragraph.style.width === "100%") {
    paragraph.style.width = "60%";
    document.querySelectorAll(".vbn-animat").forEach(element => {
      element.style.paddingTop = "0px";
    });
  } else {
    paragraph.style.width = "100%";
    document.querySelectorAll(".vbn-animat").forEach(element => {
      element.style.paddingTop = "10px";
    });
      }

  if (callback) {
    setTimeout(callback, 300); 
  }
}

function animateAvatar(element, callback) {
  const animationDuration = 400;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / animationDuration, 1);

    element.style.opacity = 1 - progress;
    element.style.transform = `translateX(${progress * 500}px)`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (callback) {
      callback();
    }
  }

  requestAnimationFrame(step);
}

function reverseAnimateAvatar(element, callback) {
  const animationDuration = 400;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / animationDuration, 1);

    element.style.opacity = progress;
    element.style.transform = `translateX(${(1 - progress) * 500}px)`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (callback) {
      callback(); 
    }
  }

  requestAnimationFrame(step);
}
