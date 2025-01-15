
// start emailjs
emailjs.init("3o_Ok3aG0DS4-OWJo");
// end emailjs

// start supabase
const SUPABASE_URL = "https://lnohiidyljlwffoireap.supabase.co"; // استبدل بـ Project URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxub2hpaWR5bGpsd2Zmb2lyZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MTc1ODMsImV4cCI6MjA0ODI5MzU4M30.kqRqH7iWFN1Id9DyN3k7y83o0YvIRbtbZiMtPBeaQIc"; // استبدل بـ API Key
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// end supabase

// التعامل مع جميع النماذج على الصفحة
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  const ratingField = form.querySelector("#starRating");
  let selectedRating = 0;

  // إذا كان النموذج يحتوي على تقييم النجوم، أضف أحداث التفاعل معه
  if (ratingField) {
    const stars = ratingField.querySelectorAll("span");

    // إضافة الحدث عند الضغط على النجوم
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        selectedRating = star.getAttribute("data-value");
        updateStars(stars, selectedRating);
      });

      star.addEventListener("mouseover", () => {
        const hoverRating = star.getAttribute("data-value");
        updateStars(stars, hoverRating); // تحديث الألوان عند التمرير
      });

      star.addEventListener("mouseout", () => {
        updateStars(stars, selectedRating); // إعادة التلوين إلى التقييم المختار
      });
    });

    // تحديث ألوان النجوم
    function updateStars(stars, rating) {
      stars.forEach((star) => {
        if (parseInt(star.getAttribute("data-value"), 6) <= parseInt(rating, 6)) {
          star.style.color = "#00d5ff"; // اللون الأزرق عند الاختيار
        } else {
          star.style.color = "#ccc"; // لون رمادي عند عدم الاختيار
        }
      });
    }
  }

  // إضافة حدث الإرسال للنموذج
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // استخراج بيانات الحقول المشتركة
    const usernameField = form.querySelector("#username");
    const emailField = form.querySelector("#email");
    const messageField = form.querySelector("#message");

    if (!usernameField || !emailField || !messageField) {
      alert("بعض الحقول المطلوبة غير موجودة في النموذج! تأكد من صحة الحقول.");
      return;
    }

    const data = {
      username: usernameField.value,
      email: emailField.value,
      message: messageField.value,
      timestamp: new Date().toISOString(), // تخزين الوقت بصيغة ISO
    };

    // إذا كان التقييم موجودًا، أضفه إلى البيانات
    if (ratingField) {
      if (!selectedRating) {
        alert("يرجى اختيار تقييم النجوم!");
        return;
      }
      data.rating = selectedRating;
    }

    // التحقق من صحة البيانات
    if (!data.username || !data.email || !data.message) {
      alert("يرجى تعبئة جميع الحقول!");
      return;
    }

    // إظهار مؤشر التحميل الخاص بالنموذج الحالي
    const loader = form.querySelector(".sircle");
    if (loader) loader.style.display = "block";

    try {
      // حفظ البيانات في Supabase
      const { error } = await supabase.from("messages").insert([data]);
      if (error) throw error;

      // إرسال البيانات عبر EmailJS
      await emailjs.send("service_jmd86we", "template_c7pd0tv", data);

      // alert("تم إرسال رسالتك بنجاح!");
      form.reset(); // إعادة تعيين النموذج

      document.querySelector(".thanks").style.display = "block"; 
      document.querySelector(".thanksa").style.display = "block"; 
      setTimeout(function() {
          document.querySelector(".thanks").style.display = "none"; 
          document.querySelector(".thanksa").style.display = "none"; 
      }, 10000);

      
      // إعادة تعيين التقييم إذا كان موجودًا
      if (ratingField) {
        const stars = ratingField.querySelectorAll("span");
        updateStars(stars, 0);
        selectedRating = 0;
      }
    } catch (err) {
      console.error("خطأ أثناء معالجة النموذج:", err);
      alert("حدث خطأ أثناء معالجة النموذج!");
    } finally {
      // إخفاء مؤشر التحميل
      if (loader) loader.style.display = "none";
    }
  });
});

