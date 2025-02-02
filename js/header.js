document.getElementById("toggle-more").addEventListener("click", function (e) {
  e.preventDefault();
  const airWindow = document.querySelector(".air-window");

  if (airWindow.classList.contains("visible")) {
    airWindow.classList.remove("visible");
      document.querySelector(".hr-air-w3").style.display="none"
    document.querySelector(".hr-air-w2").style.display="none"

    setTimeout(() => {
      airWindow.style.visibility = "hidden";
    }, 300);
  } else {
    airWindow.style.visibility = "visible"; 
    airWindow.classList.add("visible");
    document.querySelector(".hr-air-w3").style.display="block"
    document.querySelector(".hr-air-w2").style.display="block"
  }
});































// emailjs




// (function () {
//   emailjs.init("3o_Ok3aG0DS4-OWJo"); 
// })();

// const formv = document.getElementById("directMessageForm-v");
// const emailFieldv = document.getElementById("email-v-v");
// const messageFieldv = document.getElementById("userMessage-v");
// const feedbackv = document.getElementById("formFeedback-v");

// formv.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = emailFieldv.value.trim();
//   const message = messageFieldv.value.trim();

//   if (email === "" || message === "") {
//     feedback.style.color = "red";
//     feedback.textContent = "Please fill in all fields!";
//     return;
//   }

//   const templateParams = {
//     from_name: email,  
//     user_message: message,
//   };

//   emailjs
//     .send("direct-message", "template_dwzuvu4", templateParams)
//     .then(
//       function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//         feedbackv.style.color = "green";
//         feedbackv.textContent = "Message sent successfully!";
//         formv.reset();
//       },
//       function (error) {
//         console.error("FAILED...", error);
//         feedbackv.style.color = "red";
//         feedbackv.textContent = "Failed to send the message. Try again.";
//       }
//     );
// });






















// window.addEventListener('scroll', function() {
//   const header = document.getElementById('header');
//   let scrollY = window.scrollY || window.pageYOffset;
  
//   let r = 0,    // الأحمر 00
//       g = 95,   // الأخضر 5f
//       b = 102;  // الأزرق 66
  
//   let opacity = Math.min(scrollY / 200, 0.4);
  
//   header.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
// });

// let lastScroll = 0;
// window.addEventListener('scroll', function() {
//   const currentScroll = window.pageYOffset;
  
//   if (Math.abs(currentScroll - lastScroll) < 5) return;
  
//   requestAnimationFrame(() => {
//     const header = document.getElementById('header');
//     let opacity = Math.min(currentScroll / 200, 0.4);
//     header.style.backgroundColor = `rgba(0, 95, 102, ${opacity})`;

//   //   document.getElementById('header').querySelector(".hd-2").querySelectorAll("a").forEach(function(link) {
//   //     link.style.color = "#ffffff";
//   // });

//       lastScroll = currentScroll;
//   });
// });












const header = document.getElementById('header');
const links = header.querySelector(".hd-2").querySelectorAll("a");

let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;
  let opacity = Math.min(currentScroll / 200, 0.4);

  // تغيير خلفية الهيدر بناءً على التمرير
  header.style.backgroundColor = `rgba(0, 95, 102, ${opacity})`;

  // تفعيل الكود عند التمرير
  if (currentScroll > 0) {
    links.forEach(link => {
      link.style.color = "#ffffff";  // تغيير لون الروابط للأبيض
      document.getElementById('header').querySelector(".hd-1").querySelector("a").style.color="#ffffff"
    });
  } else {
    links.forEach(link => {
      link.style.color = "";  // إعادة لون الروابط للحالة الأصلية
      document.getElementById('header').querySelector(".hd-1").querySelector("a").style.color="#4e6068"
    });
  }

  lastScroll = currentScroll;
});
