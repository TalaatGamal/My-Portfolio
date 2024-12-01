document.addEventListener("DOMContentLoaded", () => {
  const validUsername = "a";
  // const validKey = "12345";

  const loginForm = document.getElementById("loginFormk");
  const fpi = document.getElementById("fpi");
  const mainpage = document.getElementById("maina-page");
  const usernameInput = document.getElementById("usernamek");
  const keyInput = document.getElementById("usernamev");

  loginForm.addEventListener("input", function () {
    const username = usernameInput.value.trim();
    const key = keyInput.value.trim();

    console.log("اسم المستخدم المدخل:", username);
    console.log("المفتاح المدخل:", key);

    if (username === validUsername) {
      fpi.style.display = "none";
      mainpage.style.display = "block"; 
    } else if (username !== "") {
      console.log("اسم المستخدم غير صحيح");
    }

    if (key && key !== validKey) {
      console.log("المفتاح غير صحيح");
    }
  });
});
