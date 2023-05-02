'use strict'
let year = new Date();
let currentYear = year.getFullYear();
document.querySelector(".date").textContent = currentYear;

let contactMobileMenuIcon = document.querySelector("#contact-mobile-menu-icon");
let contactMobileMenuCloseIcon = document.querySelector("#mobile-contact-close-icon");
let MobileMenuCon = document.querySelector(".mobile-menu-contact");
let MobileMenuLinks = document.querySelector("#contact-links");

contactMobileMenuIcon.addEventListener("click", function(){
    MobileMenuCon.style.width ="50%";
    MobileMenuLinks.style.display ="block";
    MobileMenu.style.transition ="0.2s";
    

})
contactMobileMenuCloseIcon.addEventListener("click", function(){
    MobileMenuCon.style.width ="0";
    MobileMenuLinks.style.display ="none";
})
// TO CLOSE THE MENU WHEN THE WIDTH IS ABOVE 1015PX
function getScreenWidth() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0]
  
    return w.innerWidth || e.clientWidth || g.clientWidth
  }
  
  function wheelListener() {
    console.log(getScreenWidth())
  }
  
  window.onresize = function() {
    if (getScreenWidth() > 1015) {
        MobileMenuCon.style.width = "0" ;
        MobileMenuLinks.style.display ="none";
    } 
  }
  
  // to apply when the window loaded
  window.onresize()