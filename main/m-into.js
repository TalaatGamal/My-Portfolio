






              
// main-into
              






document.addEventListener("DOMContentLoaded", function () {
  let mo = document.getElementById("mInto");
  let body = document.getElementById("body");

  // إخفاء العنصر بالتدريج
  setTimeout(() => {
    mo.style.opacity = "0";
  }, 1000);

  // تغيير display بعد اختفاء العنصر
  setTimeout(() => {
    mo.style.display = "none";
    body.style.overflow = "auto"; // إعادة التمرير بعد الإخفاء
    console.log("auto");
  }, 1700);

  // تعطيل التمرير طالما العنصر ظاهر
  if (window.getComputedStyle(mo).display === "flex") {
    body.style.overflow = "hidden";
    console.log("hidden");
  }
});
