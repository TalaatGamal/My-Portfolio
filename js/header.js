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


































const header = document.getElementById('header');
const links = header.querySelector(".hd-2").querySelectorAll("a");

let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;
  let opacity = Math.min(currentScroll / 200, 0.5);

  header.style.backgroundColor = `rgba(0, 95, 102, ${opacity})`;
  // document.getElementById("air-sec-info").style.backgroundColor = `rgba(0, 95, 102, ${opacity})`;
  document.getElementById("air-sec-info").style.opacity="1";

  if (currentScroll > 0) {
    links.forEach(link => {
      link.style.color = "#ffffff";
      document.getElementById('header').querySelector(".hd-1").querySelector("a").style.color="#ffffff"
      // document.getElementById("air-sec-info").style.color="#ffffff";
      // document.getElementById("air-sec-info").style.borderBottomColor="#ffffff";

      document.getElementById("header").style.top="10px";
      if (window.innerWidth <= 1220) {
        document.getElementById("header").style.top = "0px";
        document.getElementById("header").style.width = "100vw";
        document.getElementById("header").style.left = "0vw";
        document.getElementById("header").style.borderRadius = "0px";
      }
      
      // document.getElementById("sidebar-menu").style.top="20px";
      // document.getElementById("sidebar-menu").style.right="20px";
      document.getElementById("sidebar-menu").style.color="#ffffff";
      document.getElementById("aa-header-color2").style.cssText=`
        
          color:rgb(255, 255, 255);
          // background-color: #1E767C;
          // padding: 1px 5px 1px 5px;
          // border-radius: 5px;
            font-weight: 500;

      `;
      document.getElementById("toggle-more").style.cssText=`
        
          color:rgb(220, 220, 220);
          background-color: #1E767C;
          padding: 5px 12px 5px 12px;
          border-radius: 10px;
      `;
    });
  } else {
    links.forEach(link => {
      link.style.color = "";
      document.getElementById('header').querySelector(".hd-1").querySelector("a").style.color="#4e6068"
      // document.getElementById("air-sec-info").style.color="#4e6068";
      // document.getElementById("air-sec-info").style.borderBottomColor="#4e6068";

      document.getElementById("sidebar-menu").style.color="#4E6068";
      document.getElementById("header").style.top="0px"
      // document.getElementById("sidebar-menu").style.top="10px";
      // document.getElementById("sidebar-menu").style.right="7px";

      document.getElementById("aa-header-color2").style.cssText=`
        
      color: #4E6068;
      background-color:rgba(0, 0, 0, 0);
      `;
      document.getElementById("toggle-more").style.cssText=`
        
      color: #2D7F85;
      background-color:rgba(0, 0, 0, 0);
      `;

    });
  }

  lastScroll = currentScroll;
});




























document.addEventListener("DOMContentLoaded", function () {
  const asiText = document.getElementById("asi-text");
  const sections = document.querySelectorAll(".section , .pro , .skill-div-mom , .experience");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          asiText.textContent = entry.target.dataset.text;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
});