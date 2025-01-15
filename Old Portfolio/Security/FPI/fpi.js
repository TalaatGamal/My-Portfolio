// document.addEventListener("DOMContentLoaded", () => {
//   const validUsername = "a";
//   // const validKey = "12345";

//   const loginForm = document.getElementById("loginFormk");
//   const fpi = document.getElementById("fpi");
//   const mainpage = document.getElementById("maina-page");
//   // const body = document.getElementById("body");
//   const usernameInput = document.getElementById("usernamek");
//   const keyInput = document.getElementById("usernamev");

//   loginForm.addEventListener("input", function () {
//     const username = usernameInput.value.trim();
//     const key = keyInput.value.trim();

//     if (username === validUsername) {
//       fpi.style.display = "none";
//       mainpage.style.display = "block"; 
//       // body.style.overflowY = "auto"
//     }
//     // Not Important ⛓️‍💥

//     // else if (username !== "") {
//     //   console.log("اسم المستخدم غير صحيح");
//     // }

//     // if (key && key !== validKey) {
//     //   console.log("المفتاح غير صحيح");
//     // }
//   });
// });
















document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginFormk");
  const fpi = document.getElementById("fpi");
  const mainpage = document.getElementById("maina-page");
  const usernameInput = document.getElementById("usernamek");
  const keyInput = document.getElementById("usernamev");

  // دالة للتحقق من الضغط على زر "Enter"
  function handleEnterKey(event) {
    if (event.key === "Enter") { // التحقق من أن الزر المضغوط هو "Enter"
      const username = usernameInput.value.trim();
      const key = keyInput.value.trim();

      // السماح بالدخول فقط عند الضغط على "Enter"
      fpi.style.display = "none";
      mainpage.style.display = "block";

      // تسجيل بيانات المستخدم (اختياري)
      console.log("User Logged In:", { username, key, timestamp: new Date().toISOString() });
    }
  }

  // الاستماع إلى الضغط على أي زر داخل النموذج
  loginForm.addEventListener("keydown", handleEnterKey);
});
