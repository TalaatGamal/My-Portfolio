















const container = document.getElementById("scrollContainerd");
const cards = document.querySelectorAll(".cardd");

function updateActiveCard() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach((card) => card.classList.remove("actived"));
    if (closestCard) closestCard.classList.add("actived");
}

container.addEventListener("scroll", updateActiveCard);
updateActiveCard(); 

window.onload = function () {
    setTimeout(() => {

        const mediaQuery = window.matchMedia("(max-width: 1080px)");

        function handleScreenChange(event) {
            if (event.matches) {
              container.scrollTo({
                left: container.scrollLeft + 0,
                behavior: "smooth"
            });
            } else {
              container.scrollTo({
                left: container.scrollLeft + 390,
                behavior: "smooth"
            });
            }
        }

        handleScreenChange(mediaQuery);

        mediaQuery.addEventListener("change", handleScreenChange);




        updateActiveCard();
    },100);
    setTimeout(() => {
      document.getElementById("aai").style.cssText=`
          height: 0px;
          box-shadow:rgba(255, 0, 0, 0) 0px 0px 100px 50px;
          padding: 0px;
      `;
      setTimeout(() => {
        document.getElementById("aira").style.display="none";
      }, 500);
    }, 20000);



    let count = 20;
    const numDiv = document.getElementById("num-o");

    const countdown = setInterval(() => {
        count--;
        numDiv.textContent = count;

    }, 1000);
};

















/*

// let mainBackground = document.getElementById("crd-2");
// let back1 = document.getElementById("img1v");
// let back2 = document.getElementById("img2v");
// let back3 = document.getElementById("img3v");

// const box = document.querySelector(".background");
// let lastX = null; // تخزين آخر قيمة لتجنب التكرار

// function checkAnimation() {
//   const computedStyle = window.getComputedStyle(box);
//   const matrix = new WebKitCSSMatrix(computedStyle.transform);
//   const xPosition = matrix.m41; // استخراج الإزاحة على محور X
//   let x;

//   if (xPosition === 700) {
//     x = 2;
//   } else if (xPosition === 350) {
//     x = 3;
//   } else if (xPosition === 0) {
//     x = 4;
//   } else if (xPosition === -350) {
//     x = 5;
//   } else if (xPosition === -700) {
//     x = 6;
//   } else {
//     x = null; // إذا لم تتطابق مع أي شرط
//   }

//   // تحديث الخلفية فقط إذا تغيرت القيمة
//   if (x !== lastX) {
//     lastX = x;

//     if (x === 3) {
//       mainBackground.style.backgroundImage = `url(https://images.pexels.com/photos/31002445/pexels-photo-31002445/free-photo-of-elegant-grey-heron-by-hiroshima-water-s-edge.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)`;
//       back1.style.backgroundImage = "url()";
//     }
//     if (x === 4) {
//       mainBackground.style.backgroundImage = `url(https://images.pexels.com/photos/30151296/pexels-photo-30151296/free-photo-of-romantic-couple-relaxing-on-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)`;
//       back2.style.backgroundImage = "url()";
//     }
//     // أضف حالات أخرى عند الحاجة
//   }

//   requestAnimationFrame(checkAnimation); // استدعاء الدالة بشكل متكرر
// }

// requestAnimationFrame(checkAnimation);
*/




let mainBackground = document.getElementById("crd-2");
let back1 = document.getElementById("img1v");
let back2 = document.getElementById("img2v");
let back3 = document.getElementById("img3v");

const box = document.querySelector(".background");
let lastX = null; // تخزين آخر قيمة لتجنب التكرار

function checkAnimation() {
  const computedStyle = window.getComputedStyle(box);
  const matrix = new WebKitCSSMatrix(computedStyle.transform);
  const xPosition = matrix.m41; // استخراج الإزاحة على محور X
  let x;

  if (xPosition === 700) {
    x = 2;
  } else if (xPosition === 350) {
    x = 3;
  } else if (xPosition === 0) {
    x = 4;
  } else if (xPosition === -350) {
    x = 5;
  } else if (xPosition === -700) {
    x = 6;
  } else {
    x = null; // إذا لم تتطابق مع أي شرط
  }

  // تحديث الخلفية فقط إذا تغيرت القيمة
  if (x !== lastX) {
    lastX = x;

    if (x === 3) {
      mainBackground.style.backgroundImage = `url(https://images.pexels.com/photos/31002445/pexels-photo-31002445/free-photo-of-elegant-grey-heron-by-hiroshima-water-s-edge.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load&timestamp)`;
      back1.style.backgroundImage = "url()";
    }
    if (x === 4) {
      mainBackground.style.backgroundImage = `url(https://images.pexels.com/photos/30151296/pexels-photo-30151296/free-photo-of-romantic-couple-relaxing-on-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)`;
      back2.style.backgroundImage = "url()";
    }
    if (x === 5) {
      mainBackground.style.backgroundImage = `url(https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=600)`;
    }
  }

  requestAnimationFrame(checkAnimation); // استدعاء الدالة بشكل متكرر
}

requestAnimationFrame(checkAnimation);
