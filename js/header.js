document.getElementById("toggle-more").addEventListener("click", function (e) {
  e.preventDefault();
  const airWindow = document.querySelector(".air-window");

  if (airWindow.classList.contains("visible")) {
    airWindow.classList.remove("visible");
      document.querySelector(".hr-air-w3").style.display="none"
    document.querySelector(".hr-air-w2").style.display="none"

    setTimeout(() => {
      airWindow.style.visibility = "hidden";
    }, 300);
  } else {
    airWindow.style.visibility = "visible"; 
    airWindow.classList.add("visible");
    document.querySelector(".hr-air-w3").style.display="block"
    document.querySelector(".hr-air-w2").style.display="block"
  }
});































// emailjs




(function () {
  emailjs.init("3o_Ok3aG0DS4-OWJo"); 
})();

const formv = document.getElementById("directMessageForm-v");
const emailFieldv = document.getElementById("email-v-v");
const messageFieldv = document.getElementById("userMessage-v");
const feedbackv = document.getElementById("formFeedback-v");

formv.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailFieldv.value.trim();
  const message = messageFieldv.value.trim();

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
        feedbackv.style.color = "green";
        feedbackv.textContent = "Message sent successfully!";
        formv.reset();
      },
      function (error) {
        console.error("FAILED...", error);
        feedbackv.style.color = "red";
        feedbackv.textContent = "Failed to send the message. Try again.";
      }
    );
});
