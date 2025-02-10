
              
// // sidabar 
              

// // enter
// const ratebutton = document.getElementById("rating-me");
// const sidebar = document.querySelector('.s-v-a');
// // exit
// const back = document.getElementById("backbutton");
// const formback = document.querySelector('.s-v-a');

// if (ratebutton) { 
//   ratebutton.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
//     document.querySelector('.sidebar-content').style.marginLeft = "42vw";
//   });
// }
// else{
//   ratebutton.addEventListener('click', () => {
//     formback.classList.toggle('vada');
//     document.querySelector('.sidebar-content').style.marginLeft = "0vw";
//   });
// };
















const ratebutton = document.getElementById("rating-me");
const sidebara = document.querySelector('.s-v-a');
const backbutton = document.getElementById("backbutton");
// enter
if (ratebutton) { 
  ratebutton.addEventListener('click', () => {
    sidebara.classList.toggle('active');

  });
}
// back
if (backbutton) {
  backbutton.addEventListener('click', () => {
    sidebara.classList.remove('active');

  });
}


















// emailjs.init("3o_Ok3aG0DS4-OWJo");

// // دالة إنشاء النجوم الديناميكية
// const createStarRating = (form) => {
//   const ratingInput = form.querySelector('[id^="ratingInput"]');
//   const starsPreview = form.querySelector('[id^="starsPreview"]');
  
//   if (!ratingInput || !starsPreview) return;

//   const stars = starsPreview.querySelectorAll('span');
//   let currentRating = 1;

//   const updateStars = (value) => {
//     stars.forEach((star, index) => {
//       star.style.color = index < value ? "rgb(0, 208, 255)" : "#ccc";
//     });
//   };

//   ratingInput.addEventListener('input', (e) => {
//     let value = parseInt(e.target.value) || 1;
//     value = Math.min(5, Math.max(1, value));
//     e.target.value = value;
//     updateStars(value);
//   });

//   ratingInput.addEventListener('blur', () => {
//     if (!ratingInput.value) {
//       ratingInput.value = 1;
//       updateStars(1);
//     }
//   });

//   updateStars(1);
// };

// // دالة إرسال الفورم
// const handleFormSubmit = async (form) => {
//   const getCairoTime = () => {
//     return new Intl.DateTimeFormat('en-EG', {
//       timeZone: 'Africa/Cairo',
//       hour12: true,
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     }).format(new Date());
//   };

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const elements = {
//       serviceName: form.querySelector('[id^="serviceName"]'),
//       username: form.querySelector('[id^="username"]'),
//       job: form.querySelector('[id^="job"]'),

//       email: form.querySelector('[id^="email"]'),
//       message: form.querySelector('[id^="message"]'),
//       ratingInput: form.querySelector('[id^="ratingInput"]'),
//       loader: form.querySelector('[id^="dira"]'),
//       thanks: form.querySelector('.thanks')
//     };

//     const formData = {
//       service_name: elements.serviceName.value.trim(),
//       username: elements.username.value.trim(),
//       job: elements.job.value.trim(),
//       email: elements.email.value.trim(),
//       message: elements.message.value.trim(),
//       rating: parseInt(elements.ratingInput.value),
//       timestamp: getCairoTime()
//     };

//     // التحقق من البيانات
//     if (!Object.values(formData).every(Boolean) || formData.rating < 1 || formData.rating > 5) {
//       alert('الرجاء تعبئة جميع الحقول بشكل صحيح!');
//       return;
//     }

//     if (elements.loader) elements.loader.style.display = "block";

//     try {
//       await emailjs.send("rate-service", "template_nav13vb", formData);
//       form.reset();
//       if (elements.thanks) {
//         elements.thanks.style.display = "block";
//         setTimeout(() => elements.thanks.style.display = "none", 10000);
//         // Reset form
//         document.getElementById("contactForm").reset();
//         updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('حدث خطأ في الإرسال!');
//     } finally {
//       if (elements.loader) elements.loader.style.display = "none";
//     }
//   });
// };

// // تهيئة جميع الفورمات تلقائيًا
// document.querySelectorAll('form[id^="contactForm"]').forEach(form => {
//   createStarRating(form);
//   handleFormSubmit(form);
// });


emailjs.init("3o_Ok3aG0DS4-OWJo");

// دالة إنشاء النجوم الديناميكية
const createStarRating = (form) => {
  const ratingInput = form.querySelector('[id^="ratingInput"]');
  const starsPreview = form.querySelector('[id^="starsPreview"]');
  
  if (!ratingInput || !starsPreview) return;

  const stars = starsPreview.querySelectorAll('span');

  const updateStars = (value) => {
    stars.forEach((star, index) => {
      star.style.color = index < value ? "rgb(0, 208, 255)" : "#ccc";
    });
  };

  ratingInput.addEventListener('input', (e) => {
    let value = parseInt(e.target.value) || 1;
    value = Math.min(5, Math.max(1, value));
    e.target.value = value;
    updateStars(value);
  });

  ratingInput.addEventListener('blur', () => {
    if (!ratingInput.value) {
      ratingInput.value = 1;
      updateStars(1);
    }
  });

  updateStars(1);

  return updateStars; // 🔥 إرجاع الدالة لاستخدامها عند إعادة تعيين النموذج
};


// دالة للحصول على الوقت بتوقيت القاهرة بصيغة 12 ساعة
const getCairoTime = () => {
  const options = {
      timeZone: 'Africa/Cairo',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
  };
  const formatter = new Intl.DateTimeFormat('ar-EG', options); // تنسيق الوقت بتوقيت القاهرة
  return formatter.format(new Date());
};

// دالة إرسال الفورم
const handleFormSubmit = (form) => {
  const updateStars = createStarRating(form); // حفظ دالة تحديث النجوم

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const elements = {
      serviceName: form.querySelector('[id^="serviceName"]'),
      username: form.querySelector('[id^="username"]'),
      job: form.querySelector('[id^="job"]'),
      email: form.querySelector('[id^="email"]'),
      message: form.querySelector('[id^="message"]'),
      ratingInput: form.querySelector('[id^="ratingInput"]'),
      loader: form.querySelector('[id^="dira"]'),
      thanks: form.querySelector('.thanks')
    };

    const formData = {
      service_name: elements.serviceName.value.trim(),
      username: elements.username.value.trim(),
      job: elements.job.value.trim(),
      email: elements.email.value.trim(),
      message: elements.message.value.trim(),
      rating: parseInt(elements.ratingInput.value),
      timestamp: getCairoTime() 

    };

    // التحقق من صحة البيانات
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('الرجاء إدخال بريد إلكتروني صالح!');
      return;
    }

    if (!Object.values(formData).every(Boolean) || formData.rating < 1 || formData.rating > 5) {
      alert('الرجاء تعبئة جميع الحقول بشكل صحيح!');
      return;
    }

    if (elements.loader) elements.loader.style.display = "block";

    try {
      await emailjs.send("rate-service", "template_nav13vb", formData);
      form.reset();
      updateStars(1); // ✅ إعادة تعيين النجوم للحالة الافتراضية
      
      if (elements.thanks) {
        elements.thanks.style.display = "block";
        setTimeout(() => elements.thanks.style.display = "none", 5000);
            document.getElementById("backo").style.display="none"
            document.getElementById('f-d-m-right').style.marginLeft ='390px'
            document.getElementById('send').style.display = 'none';
            document.getElementById('sipo2').style.display = 'flex'
      }
    //   if (thanks) {
    //     document.getElementById("backo").style.display="none"
    //  
    //     document.getElementById('con-1').style.marginLeft ='390px'
    // }
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ في الإرسال!');
    } finally {
      if (elements.loader) elements.loader.style.display = "none";
    }
  });
};

// تهيئة جميع الفورمات تلقائيًا
document.querySelectorAll('form[id^="contactForm"]').forEach(form => {
  handleFormSubmit(form);
});




























const nextElement = document.getElementById('next');

nextElement.addEventListener('click', () => {
const sendElement = document.getElementById('send');

sendElement.style.display = 'block';
document.getElementById('sipo2').style.display = 'none'
document.getElementById('f-d-m-right').style.marginLeft ='-405px'

if (document.getElementById('sipo2').style.display = 'flex') {
  document.getElementById('sipo3').style.display = 'none'
}
if (document.getElementById('sipo3').style.display = 'flex') {
  document.getElementById('sipo2').style.display = 'none'
}
});





const back = document.getElementById('backo');

back.addEventListener('click', () => {

// document.getElementById('con-1').style.marginLeft ='470px'

if (document.getElementById('f-d-m-right').style.marginLeft ='390px') {
  document.getElementById('sipo3').style.display = 'none'
  document.getElementById('sipo2').style.display = 'flex'
}

});









document.getElementById("yes").addEventListener("click", () => {
  document.querySelector(".cover-v").style.marginLeft = "-450px";
});

document.getElementById("no").addEventListener("click", () => {
  document.getElementById("servo").scrollIntoView({ behavior: "smooth" });
});
