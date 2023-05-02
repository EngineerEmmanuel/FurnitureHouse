'use strict'
let year = new Date();
let currentYear = year.getFullYear();
document.querySelector(".date").textContent = currentYear;


let closeIcon = document.querySelector("#mobile-close-icon");
let bar = document.querySelector("#mobile-menu-icon");
let mobileMenu = document.querySelector(".mobile-menu");
let miniMenu = document.querySelector("#children");


// HIDE IT
closeIcon.addEventListener("click", function(){
    miniMenu.style.display = "none" ;
    mobileMenu.style.width = "0%";
    // mobileMenu.style.backgroundColor = "red";
})
// HOW TO SHOW THE MOBILE MENU
bar.addEventListener("click", function(){
    mobileMenu.style.width = "50%" ;
    mobileMenu.style.display = "block" ;
    miniMenu.style.display = "block" ;
})
// when the mobile menu is active but the window width is above 1015px, this hides the mobile menu
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
        mobileMenu.style.display = "none" ;
    } 
  }
  
  // to apply when the window loaded
  window.onresize()


// FOR THE FORM
function Form(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "info@furniturehouse.org",
        Password : "password",
        To : 'emmanuelchukwuemeka970@gmail.com',
        From : document.querySelector("#email").value,
        Subject : "I want to be recieving amazing furniture tips",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
// FOR THE CONTACT US FORM
function submitForm(){
    let firstName = document.querySelector("#fname").value;
    let lastName = document.querySelector("#lname").value;
    let Email = document.querySelector("#mail").value;
    let from = firstName + lastName +`my email address is {Eemail}`;
    let problem = document.querySelector("#textarea").value;
    Email.send({
        Host : "smtp.@gmail.com",
        Username : "emmanuelchukwuemeka970@gmail.com",
        Password : "Ewensboss19",
        To : 'emmanuelchukwuemeka970@gmail.com',
        From : from,
        Subject : "i what the services of furniture house",
        Body : problem
    }).then(
      message => alert(message)
    );
}

