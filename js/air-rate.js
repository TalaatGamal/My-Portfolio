




const openPopup2 = document.getElementById("air-rate");
const popup2 = document.getElementById("popup2");
const closePopup2 = document.getElementById("closePopup2");

openPopup2.addEventListener("click", function (e) {
  e.preventDefault();
  popup2.style.display = "flex";
  setTimeout(() => popup2.classList.add("show"), 10);
  document.querySelector("body").style.overflow="hidden"
});

closePopup2.addEventListener("click", function () {
  popup2.classList.remove("show"); 
  setTimeout(() => (popup2.style.display = "none"), 300);
  document.querySelector("body").style.overflowY="auto"
});











