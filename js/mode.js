



let mode = document.getElementById("site-mode");
// let headerx = document.getElementById("header");
let home = document.getElementById("home");
let home_cv = document.getElementById("cv");
let home_img_cover = document.getElementById("img-i1-cover");


mode.addEventListener("click", function() {
  
  home.style.cssText = `
        color: rgb(216, 216, 216);
    `;
  home_cv.style.cssText = `
        color: rgb(216, 216, 216);
        border-bottom:rgba(255, 255, 255, 0.66) solid 3px;
    `;
    home_img_cover.style.cssText = `
          border:  rgba(255, 255, 255, 0.66)  double 10px;
            // background-color: #000;
    `;
    document.getElementById("body").style.backgroundColor="rgb(22, 35, 39)"
    document.getElementById("skill-div-mom").style.cssText=`
        background: linear-gradient(20deg ,rgb(29, 94, 99),rgb(29, 94, 99),rgb(29, 94, 99),rgb(29, 94, 99),rgb(29, 94, 99), rgb(22, 35, 39), rgb(22, 35, 39), rgb(22, 35, 39), rgb(22, 35, 39), rgb(22, 35, 39));
    `;
    document.getElementById("sdm-main-h2").style.color="rgb(218, 218, 218)"
    document.getElementById("ml-content").querySelectorAll("h2").forEach(function(h2) {
    h2.style.color = "rgb(218, 218, 218)";
    });

  //   document.getElementById("body").style.cssText=`
  //         // background: linear-gradient(120deg ,  rgb(0, 0, 0),rgb(0, 21, 11) 60%);

    
  // //     background-image: url(https://images.pexels.com/photos/10299274/pexels-photo-10299274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  // // background-position: center;
  // // background-size: cover;
  // // background-repeat: repeat;
  // // background-attachment: fixed;
  //   `;
    
});
