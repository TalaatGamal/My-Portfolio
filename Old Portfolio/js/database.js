





//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐🩵🩵 Database & server 🩵🩵⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐




<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>



  const SUPABASE_URL = "https://lnohiidyljlwffoireap.supabase.co";  // استبدل بـ Project URL
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxub2hpaWR5bGpsd2Zmb2lyZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MTc1ODMsImV4cCI6MjA0ODI5MzU4M30.kqRqH7iWFN1Id9DyN3k7y83o0YvIRbtbZiMtPBeaQIc";  // استبدل بـ API Key

  // تهيئة Supabase بشكل صحيح
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const form = document.getElementById("contactForm");
  const savedDataList = document.getElementById("savedDataList");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      timestamp: new Date().toISOString()
    };

    if (!data.username || !data.email || !data.message) {
      alert("يرجى تعبئة جميع الحقول!");
      return;
    }

    try {
      // حفظ البيانات في Supabase
      const { error } = await supabase.from("messages").insert([data]);
      if (error) throw error;

      alert("تم حفظ البيانات بنجاح!");
      form.reset();

      // تحديث القائمة
      loadMessages();
    } catch (err) {
      console.error("خطأ أثناء الحفظ:", err);
      alert("حدث خطأ أثناء الحفظ!");
    }
  });

  // وظيفة لجلب البيانات من Supabase
  async function loadMessages() {
    try {
      const { data, error } = await supabase.from("messages").select("*").order("timestamp", { ascending: false });
      if (error) throw error;

      savedDataList.innerHTML = ""; // مسح القائمة القديمة
      data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = ` 
          <strong>${item.username}</strong> - ${item.email}: ${item.message} <br>
          <small>تم الإرسال في: ${new Date(item.timestamp).toLocaleString()}</small>
        `;
        savedDataList.appendChild(listItem);
      });
    } catch (err) {
      console.error("خطأ أثناء جلب البيانات:", err);
    }
  }

  // تحميل البيانات عند فتح الصفحة
  loadMessages();
