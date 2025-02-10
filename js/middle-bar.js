function liveCountWithResetAndDelay(elementId, start, end, delay, resetDelay) {
  const element = document.getElementById(elementId);
  let current = start;

  const interval = setInterval(() => {
    element.innerHTML = current; // عرض الرقم الحالي فقط
    current++;

    if (current > end) {
      clearInterval(interval); // إيقاف العداد مؤقتًا
      setTimeout(() => {
        current = start; // إعادة العد من البداية بعد التأخير
        liveCountWithResetAndDelay(elementId, start, end, delay, resetDelay); // إعادة تشغيل العد
      }, resetDelay); // مدة التأخير (بالمللي ثانية)
    }
  }, delay);
}

// عد حي داخل div1 من 1 إلى 5 مع تأخير 2 ثانية
liveCountWithResetAndDelay("m-n1", 0, 1, 300, 5000); // 500 مللي ثانية لكل رقم، 2 ثانية تأخير عند الإعادة

// عد حي داخل div2 من 1 إلى 15 مع تأخير 2 ثانية
liveCountWithResetAndDelay("m-n2", 0, 15, 100, 5000); // 300 مللي ثانية لكل رقم، 2 ثانية تأخير عند الإعادة






















// // دالة لتلوين النجوم مع إعادة التكرار
// function animateStarsWithReset(elementId, starCount, delay, resetDelay) {
//   const container = document.getElementById(elementId);

//   // إنشاء النجوم وإضافتها إلى العنصر
//   function createStars() {
//     container.innerHTML = ""; // تفريغ النجوم القديمة
//     for (let i = 0; i < starCount; i++) {
//       const star = document.createElement("span");
//       star.innerHTML = "★"; // رمز النجمة
//       star.style.color = "#ddd"; // اللون شبه الأبيض
//       star.style.fontSize = "2rem"; // حجم ثابت لجميع النجوم
//       container.appendChild(star);
//     }
//   }

//   function animateStars() {
//     const stars = container.querySelectorAll("span");
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       if (currentIndex < stars.length) {
//         stars[currentIndex].style.color = "#2b6d72"; // تلوين النجمة باللون الأزرق
//         currentIndex++;
//       } else {
//         clearInterval(interval); // إيقاف التلوين عند الانتهاء
//       }
//     }, delay);
//   }

//   // تشغيل الدورة بشكل متكرر
//   function startAnimationCycle() {
//     createStars(); // إنشاء النجوم
//     animateStars(); // تلوين النجوم واحدة تلو الأخرى
//     setTimeout(startAnimationCycle, resetDelay); // إعادة الدورة بعد انتهاء التأخير
//   }

//   startAnimationCycle();
// }

// // استدعاء الدالة لتلوين 5 نجوم مع إعادة الدورة كل 5 ثوانٍ
// animateStarsWithReset("m-n6", 5, 500, 5000);