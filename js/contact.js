


const openPopup = document.getElementById("d-m");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "flex";
  setTimeout(() => popup.classList.add("show"), 10);
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("show"); 
  setTimeout(() => (popup.style.display = "none"), 300);
});


window.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  }
});





// emailjs




(function () {
  emailjs.init("3o_Ok3aG0DS4-OWJo"); 
})();

const form = document.getElementById("directMessageForm");
const emailField = document.getElementById("email-v");
const messageField = document.getElementById("userMessage");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailField.value.trim();
  const message = messageField.value.trim();

  if (email === "" || message === "") {
    feedback.style.color = "red";
    feedback.textContent = "Please fill in all fields!";
    return;
  }

  const templateParams = {
    from_name: email,  
    user_message: message,
  };

  emailjs
    .send("direct-message", "template_dwzuvu4", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        feedback.style.color = "green";
        feedback.textContent = "Message sent successfully!";
        form.reset();
      },
      function (error) {
        console.error("FAILED...", error);
        feedback.style.color = "red";
        feedback.textContent = "Failed to send the message. Try again.";
      }
    );
});
