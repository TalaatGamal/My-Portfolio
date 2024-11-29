
document.addEventListener('DOMContentLoaded', function () { // تأكد من تحميل الـ DOM
const menuIcon = document.getElementById('software');
const sidebar = document.getElementById('box1');
let startX = 0;
let currentX = 0;
let isDragging = false;
let isSidebarOpen = false; // حالة السايد بار (مفتوح أو مغلق)

// إضافة حدث للنقر على الأيقونة
menuIcon.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.style.left = '-100%'; // إخفاء الشريط الجانبي

        // document.getElementById('exa').style.display="none"
        // document.getElementById('icon').style.display="block"
        isSidebarOpen = false;
    } else {
        sidebar.style.left = '0'; // إظهار الشريط الجانبي
        sidebar.style.transition = 'right 1s ease';
        // document.getElementById('exa').style.display="block"
        // document.getElementById('icon').style.display="none"
        isSidebarOpen = true;
    }
  });
});