












const ratebutton = document.getElementById("rating-me");
const sidebara = document.querySelector('.s-v-a');
const backbutton = document.getElementById("backaro");
// enter
if (ratebutton) { 
  ratebutton.addEventListener('click', () => {
    sidebara.classList.toggle('active');
    document.querySelector("body").style.overflow="hidden";
  });
}
// back
if (backbutton) {
  backbutton.addEventListener('click', () => {
    sidebara.classList.remove('active');
    document.querySelector("body").style.overflow="auto";
  });
}




















// Initialize EmailJS
emailjs.init("3o_Ok3aG0DS4-OWJo"); // استبدل بـ EmailJS User ID الخاص بك

// دالة الحصول على الوقت بتوقيت القاهرة
const getCairoTime = () => {
    const options = { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('ar-EG', options).format(new Date());
};

// تحديث النجوم بناءً على التقييم
const updateStars = (value) => {
    const starsPreview = document.getElementById("starsPreview");
    if (starsPreview) {
        const stars = starsPreview.querySelectorAll("span");
        stars.forEach((star, index) => {
            star.style.color = index < value ? "#00c5d3" : "#ccc";
        });
    }
};

// الحقول
const fields = {
    serviceName: document.getElementById("serviceName"),
    username: document.getElementById("username"),
    job: document.getElementById("job"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    ratingInput: document.getElementById("ratingInput")
};

// دالة التحقق من صحة الحقل بناءً على نوعه
const validateField = (input) => {
    const parentDiv = input.closest(".div-input"); 
    let isValid = false;

    switch (input.id) {
        case "username":
            isValid = input.value.trim().split(" ").length >= 2;
            break;
        case "email":
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
            break;
        case "job":
        case "serviceName":
            isValid = input.value.trim().length > 0;
            break;
        case "message":
            isValid = input.value.trim().length >= 10;
            break;
        case "ratingInput":
            let rating = parseInt(input.value.trim());
            isValid = !isNaN(rating) && rating >= 1 && rating <= 5;
            updateStars(rating);
            break;
        default:
            isValid = input.value.trim().length > 0;
    }

    if (isValid) {
        applyValidStyle(parentDiv);
    } else {
        applyInvalidStyle(parentDiv);
    }
};

// دالة تطبيق التنسيق الصحيح عند الإدخال الصحيح
const applyValidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = "rgba(0, 95, 81, 0.43)";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #24b29d";
        parentDiv.style.borderRight = "6px solid #24b29d";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "flex";
        if (img3) img3.style.display = "none";
        setTimeout(() => {
            if (imgn) imgn.style.display = "block";
        }, 3000);
    }
};

// دالة تطبيق التنسيق عند الإدخال الخاطئ
const applyInvalidStyle = (parentDiv) => {
    if (parentDiv) {
        parentDiv.style.backgroundColor = " #005f663b";
        parentDiv.style.border = "6px solid rgba(36, 178, 157, 0)";
        parentDiv.style.borderLeft = "6px solid #ffffff";

        const img = parentDiv.querySelector(".img");
        const img3 = parentDiv.querySelector(".img3");
        const imgn = parentDiv.querySelector(".img-in");

        if (img) img.style.display = "none";
        if (img3) img3.style.display = "flex";
        if (imgn) imgn.style.display = "none";
    }
};

// إضافة حدث التحقق أثناء الكتابة
Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => validateField(field));
});

// إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const loader = document.getElementById("dira");
    const thanks = document.querySelector(".thanks");
    let allValid = true;

    Object.values(fields).forEach((field) => {
        validateField(field);
        if (field.closest(".div-input").style.border.includes("red")) {
            allValid = false;
        }
    });

    if (!allValid) {
        alert("يرجى ملء جميع الحقول بشكل صحيح!");
        return;
    }

    // إعداد البيانات
    const formData = {
        service_name: fields.serviceName.value.trim(),
        username: fields.username.value.trim(),
        job: fields.job.value.trim(),
        email: fields.email.value.trim(),
        message: fields.message.value.trim(),
        rating: parseInt(fields.ratingInput.value.trim()),
        timestamp: getCairoTime()
    };

    if (loader) loader.style.display = "block";

    try {
        const response = await emailjs.send(
            "rate-service", 
            "template_nav13vb", 
            formData
        );

        console.log("EmailJS Response:", response);
        document.getElementById("contactForm").reset();

        // إعادة تعيين ألوان الحقول بعد الإرسال
        Object.values(fields).forEach((field) => {
            const parentDiv = field.closest(".div-input");
            if (parentDiv) {
                parentDiv.style.backgroundColor = "";
                parentDiv.style.border = "";
                parentDiv.style.borderLeft = "";
                parentDiv.style.borderRight = "";
                
                const img = parentDiv.querySelector(".img");
                const img3 = parentDiv.querySelector(".img3");
                const imgn = parentDiv.querySelector(".img-in");

                if (img) img.style.display = "none";
                if (img3) img3.style.display = "flex";
                if (imgn) imgn.style.display = "none";
            }
        });

        // **إظهار رسالة الشكر** 🟢
        if (thanks) {
            // thanks.style.display = "block";
            // setTimeout(() => {
            //     thanks.style.display = "none";
            // }, 10000);
            document.getElementById('con-1').style.marginLeft = '390px';
            document.getElementById('form-v-cont2').style.marginLeft = '820px';
            document.getElementById('sipo2').style.display = 'flex';
            document.getElementById('sipo').style.display = 'none';
            document.querySelector(".form-v-cont2").style.marginLeft ='820px'

        }
        updateStars(1); // إعادة تعيين النجوم إلى الحالة الافتراضية

    } catch (error) {
        console.error("Submission error:", error);
        alert("حدث خطأ أثناء الإرسال! حاول مرة أخرى.");
    } finally {
        if (loader) loader.style.display = "none";
    }
});


































const nextElement = document.getElementById('next');

nextElement.addEventListener('click', () => {
const sendElement = document.getElementById('send');

sendElement.style.display = 'block';
document.getElementById('sipo2').style.display = 'none'
document.getElementById('con-1').style.marginLeft ='-430px'

if (document.getElementById('sipo2').style.display = 'flex') {
  document.getElementById('sipo').style.display = 'none'
}
if (document.getElementById('sipo').style.display = 'flex') {
  document.getElementById('sipo2').style.display = 'none'
}
});





const backa = document.getElementById('backo');

backa.addEventListener('click', () => {

// document.getElementById('con-1').style.marginLeft ='470px'

if (document.getElementById('con-1').style.marginLeft ='405px') {
  document.getElementById('sipo').style.display = 'none'
  document.getElementById('sipo2').style.display = 'flex'
}

});










const fi = document.getElementById('feed-icon');
if (fi) {
  fi.addEventListener('click', () => {

    document.getElementById('feed-window').style.width="100vw"
    document.getElementById('feed-window').style.minHeight="100vh"
  })};





  document.getElementById("feed-window-back").addEventListener('click', () => {

    document.getElementById('feed-window').style.width="0vw"
    document.getElementById('feed-window').style.minHeight="0vh"
  });








const vbn = document.getElementById('back-rate-m');

vbn.addEventListener('click', () => {

// document.getElementById('con-1').style.marginLeft ='470px'
document.querySelector(".form-v-cont2").style.marginLeft ='0px'

});

