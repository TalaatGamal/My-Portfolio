// الحصول على الأيقونة والشريط الجانبي

const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
let startX = 0;
let currentX = 0;
let isDragging = false;
let isSidebarOpen = false; // حالة السايد بار (مفتوح أو مغلق)

// إضافة حدث للنقر على الأيقونة
menuIcon.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
        document.getElementById('exa').style.display="none"
        document.getElementById('icon').style.display="block"
        document.getElementById('body').style.overflow="auto"
        isSidebarOpen = false;
    } else {
        sidebar.style.right = '0'; // إظهار الشريط الجانبي
        sidebar.style.transition = 'right 0.3s ease';
        document.getElementById('exa').style.display="block"
        document.getElementById('icon').style.display="none"
        document.getElementById('body').style.overflow="hidden"
        isSidebarOpen = true;
    }
});

// عندما يبدأ اللمس
// document.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//     // إذا كان السايدبار مغلقًا، تأكد من أن السحب بدأ من مسافة أقل من 10vw
//     if (!isSidebarOpen && startX >= window.innerWidth - (window.innerWidth * 0.2)) {
//         isDragging = true;
//         currentX = startX; // إعادة ضبط currentX عند بداية اللمس
//         console.log("sidepar is open")
//     }
//     else if (isSidebarOpen) {
//         // إذا كان السايد بار مفتوحًا، يمكن بدء السحب من أي مكان
//         isDragging = true;
//         currentX = startX;
//         console.log("sidepar is closed")
//     }
// });

// // عندما يتم تحريك اللمس
// document.addEventListener('touchmove', (e) => {
//     if (isDragging) {
//         currentX = e.touches[0].clientX;

//         // حساب الفرق بين الموقع الحالي وموقع البداية
//         const deltaX = startX - currentX; // تعديل لاتجاه السحب (لليمين أو اليسار)

//         if (!isSidebarOpen) {
//             // إذا كان السايد بار مغلقًا وسُحب إلى اليسار لفتحه
//             if (deltaX < 0) {
//                 sidebar.style.right = Math.min(-deltaX, 500) + 'px';
//             }
//         } else {
//             // إذا كان السايد بار مفتوحًا وسُحب إلى اليمين لإغلاقه
//             if (deltaX > 0) {
//                 sidebar.style.right = Math.max(-deltaX, -500) + 'px';
//             }
//         }
//     }
// });

// // عندما ينتهي اللمس
// document.addEventListener('touchend', () => {
//     if (isDragging) {
//         isDragging = false;

//         // إذا كان الفرق كبيرًا كفاية لفتح أو إغلاق السايد بار
//         if (!isSidebarOpen && startX - currentX > 100) {
//             sidebar.style.right = '0'; // فتح السايد بار
//             isSidebarOpen = true;
//         } else if (isSidebarOpen && startX - currentX < -100) {
//             sidebar.style.right = '-100%'; // إخفاء السايد بار
//             isSidebarOpen = false;
//         } else {
//             // إرجاع السايد بار إلى حالته السابقة إذا لم يكن السحب كافيًا
//             sidebar.style.right = isSidebarOpen ? '0' : '-100%';
//         }
//     }
// });

