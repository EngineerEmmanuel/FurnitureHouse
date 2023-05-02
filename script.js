// 'use strict'
let year = new Date();
let currentYear = year.getFullYear();
document.querySelector(".date").textContent = currentYear;



// FOR THE DROP DOWN MENU IN THE NAV SECTION
let listMain = document.querySelector("#listmain");
let subPro = document.querySelector(".sub-pro");
let downArrow = document.querySelector("#down-arrow");

// FOR TOUCH PADS

listMain.addEventListener("click", function(){
  subPro.style.display = "inline-block";
  downArrow.style.transform ="rotate(180deg)";
})
// FOR MOUSEOVER

listMain.addEventListener("mouseover", function(){
  subPro.style.display = "inline-block";
  downArrow.style.transform ="rotate(180deg)";
})

subPro.addEventListener("mouseout", function(){

  subPro.style.display = "none";
  downArrow.style.transform ="rotate(360deg)";
  // setTimeout(function(){
   
  // },1000)
  
})

// to hide the hover menu when it`s not focused for 3 seconds
// listMain.addEventListener("mouseover", function(){
//   if(subPro.style.display == "inline-block" && subPro!="mouseover"){
//     setTimeout(function(){
//       subPro.style.display = "none";
//       downArrow.style.transform ="rotate(360deg)";
//     }, 3000)
//   }else{
//     subPro.style.display = "block";
//     downArrow.style.transform ="rotate(180deg)";
//   }
// })

//  FOR THE CLOSING AND OPEING OF THE MOBILE MENU
let mobileMenu = document.querySelector(".mobile-menu");
let mobileCloseIcon = document.querySelector("#mobile-close-icon");
let subChildren = document.querySelector("#children");
let barIcon = document.querySelector("#mobile-menu-icon");


// TO CLOSE THE MOBILE MENU WHEN YOU CLICK ON ABOUT US IN THE HOME PAGE
let abou = document.querySelector("#abouth");
abou.addEventListener("click",function(){
  if(mobileMenu.style.width === "50%"){
    mobileMenu.style.width ="0";
    subChildren.style.display = "none";
    overlay.style.display = "none";
  }

})

// TO OPEN THE MENU


mobileCloseIcon.addEventListener("click", function closeam(){
  mobileMenu.style.width = "0%";
  subChildren.style.display = "none";
  overlay.style.display = "none";
})
// TO CLOSE IT WITH THE OVERLAY
let overlay = document.querySelector(".overlay");
overlay.addEventListener("click",function(){
  mobileMenu.style.width = "0%";
  subChildren.style.display = "none";
  this.style.display = "none";
})
// TO SHOW IT
barIcon.addEventListener("click", function(){
  
    mobileMenu.style.width = "50%";
    mobileMenu.style.display = "block";
    subChildren.style.display = "block";
    overlay.style.display = "block";

  // mobileMenu.style.width = "25%";
  // subChildren.style.display = "block";
  // overlay.style.display = "block";
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
  // console.log(getScreenWidth())
}

window.onresize = function() {
  if (getScreenWidth() > 1015) {
      mobileMenu.style.display = "none" ;
      overlay.style.display = "none";
  } 
}

// to apply when the window loaded
window.onresize()

// FOR THE STICKY NAV
let section = document.querySelector(".about-us");
let head = document.querySelector("#hsections");
section.getClientRects();
// window.addEventListener("scroll",function(){
//   window.scrollY;
//   if(window.scrollY>section.top){
//     head.classList.add("sticky");
//   }
// })

window.addEventListener('scroll', function(e) {
  // We can get the current scroll position, as we learned before.
  // scrollY and scrollX live on the window element, NOT the event object, which is useless in scroll
  console.log(window.scrollY);

  // 2.
  // Now, we will achieve the sticky effect, by simply adding a sticky class to the navigation when it should become sticky [SHOW CSS]
  // Now the question is: when exactly should the navigation become sticky?
  // Well, it should happen as soon as we reach the first section. So, how do we determine that position? Well, we just take the TOP coordinate of this first section, and add the sticky class whenever the current scroll position is GREATER than the TOP, so, the STARTING position of the section
  // Let's calculate that outside, because it never changes, we can optimize this
  if (window.scrollY > section.top) head.classList.add('sticky');
  else head.classList.remove('sticky');
});







const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = () => {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = (dot) => {
  const dots = document.querySelectorAll(".dots__dot");
  dots.forEach((d) => d.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${dot}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", (e) => {
  console.log(e.target);
  // 1.
  // if (e.target.classList.contains('dots__dot')) {

  // 2.
  // If we need to do more complex matching, we can use MATCHES instead, which tests if a certain element WOULD BE selected by a certain selector. The selector has the exact same form as in querySelector or in CSS

  // TODO classList NOT necessary?!
  if (e.target.matches(".dots__dot")) {
    const { slide } = e.target.dataset; // Destructuring
    goToSlide(slide);
    activateDot(slide);
  }
});

// Go to next slide every 10 seconds
// setInterval(nextSlide, 10000);

const init = () => {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// for the subscription

// for the contact us page
let conlistMain = document.querySelector("#con-listmain");
let conSubPro = document.querySelector(".con-sub-pro");
let conDownArrow = document.querySelector("#con-down-arrow");
let oga = document.querySelector(".pro");

// FOR MOUSEOVER

conlistMain.addEventListener("mouseover", function(){
  conSubPro.style.display = "inline-block";
  conDownArrow.style.transform ="rotate(180deg)";
})

conSubPro.addEventListener("mouseout", function(){

  conSubPro.style.display = "none";
  conDownArrow.style.transform ="rotate(360deg)";
  // setTimeout(function(){
   
  // },1000)
  
 
})
