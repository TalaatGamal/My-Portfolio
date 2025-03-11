




let cardsLine = document.getElementById("ela-in")
let rArrow = document.getElementById("right-arrow")
let lArrow = document.getElementById("left-arrow")
let c1 = document.getElementById("njm1")
let c2 = document.getElementById("njm2")

if (cardsLine) {
  rArrow.addEventListener('click', () => {
    cardsLine.style.paddingRight="1400px"
    c2.style.backgroundColor="#005e56"
  //   c2.style.cssText=`
  //   background-color: #005e56; 
  //   border-left:rgba(255, 255, 255, 0) solid 3px;
  //   border-right:rgba(255, 255, 255, 0) solid 3px;
  //   border-top:rgb(255, 255, 255) solid 3px;
  //   border-bottom:rgb(255, 255, 255) solid 3px;
  // `;
    c1.style.backgroundColor="#000000b5"
  })
};

if (cardsLine) {
  lArrow.addEventListener('click', () => {
    cardsLine.style.paddingRight="0px"
    c2.style.backgroundColor="#000000b5"
    c1.style.backgroundColor="#005e56"
    // c1.style.cssText=`
    //   background-color: #005e56; 
    //   border-left:rgba(255, 255, 255, 0) solid 3px;
    //   border-right:rgba(255, 255, 255, 0) solid 3px;
    //   border-top:rgb(255, 255, 255) solid 3px;
    //   border-bottom:rgb(255, 255, 255) solid 3px;
    // `;
  })
};



function updatePadding() {
  if (!cardsLine) return; // تأكد إن العنصر موجود

  const paddingValue = window.innerWidth < 720 ? "1000px" : "1400px";

  // إزالة أي حدث سابق قبل إضافة حدث جديد لتجنب التكرار
  rArrow.removeEventListener('click', handleClick);
  
  function handleClick() {
    cardsLine.style.paddingRight = paddingValue;
  }

  rArrow.addEventListener('click', handleClick);
}

// تحديث عند تحميل الصفحة
updatePadding();

// تحديث عند تغيير حجم الشاشة
window.addEventListener('resize', updatePadding);
