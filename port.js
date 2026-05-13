//*navigator bar section*//


const sliderImg = document.querySelectorAll(".slider-img")
var sliderIndex = 0;
var inter
function slider(){
  
  sliderImg.forEach((img) => {
      img.classList.remove("active")
  })
  auto()
  sliderImg[sliderIndex].classList.add("active");
  
 
}
function auto() {
  sliderIndex++
  inter = setTimeout(slider, 2000);
  if(sliderIndex >= sliderImg.length){
      sliderIndex = 0;
  }
 
  }
 
    
slider()
const hiddenText = document.querySelectorAll('.hidden-text');

function revealText() {
    hiddenText.forEach((text, index) => {
        const textPosition = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (textPosition < windowHeight - 50) {
            setTimeout(() => {
                text.classList.add("show");
            }, index * 100); // Staggered animation delay
        }
    });
}

window.addEventListener("scroll", revealText);
revealText(); 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" an App Developer", " a Frontend Developer" , " a Backend Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
const ul = document.getElementById("uls");
function bull() {
 ul.classList.toggle("kiss")
  
}
