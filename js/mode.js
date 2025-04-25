



let mode = document.getElementById("site-mode");
// let headerx = document.getElementById("header");
let home = document.getElementById("home");
let home_cv = document.getElementById("cv");
let home_img_cover = document.getElementById("img-i1-cover");


mode.addEventListener("click", function() {
  
  home.style.cssText = `
        // background-color: rgb(11, 52, 51);
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
    document.getElementById("body").style.backgroundColor="rgb(1, 30, 35)"
    
});
