
const words = ["DEVELOPER","DESIGNER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const textElement = document.getElementById("text");
    let currentWord = words[wordIndex];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100; // Speed up deleting
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll up animation js code
document.addEventListener("scroll", function () {
    let about = document.querySelector(".about");
    let service = document.querySelector(".services");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) { // Adjust the value as needed
        about.classList.add("show");
    }
    if (scrollPosition > 800) {
        service.classList.add("show");
    }
});
// left side menu trigger funtion
document.addEventListener("scroll",function(){
    let scrollint=window.scrollY;
    if(scrollint == 100){
        
    }
})