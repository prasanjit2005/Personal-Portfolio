
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
    let skill = document.querySelector(".skill");
    let facts = document.querySelector("#fact");
    let project = document.querySelector("#projects");
    let works = document.querySelector("#works");
    let testimonial = document.querySelector("#testimonials");
    let contact = document.querySelector("#contacts");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) { // Adjust the value as needed
        about.classList.add("show");
    }
    if (scrollPosition > 800) {
        service.classList.add("show");
    }
    if (scrollPosition > 1500) {
        skill.classList.add("show");
    }
    if (scrollPosition > 1800) {

        let circles = document.body.querySelectorAll("circle");
        circles.forEach((element,index) => {
            if(index === 0){
                element.style.animation = "progress 1s linear forwards"
            }
            else if(index === 1){
                element.style.animation = "progress1 1s linear forwards"
            }
            else if(index === 2){
                element.style.animation = "progress2 1s linear forwards"
            }
            else if(index === 3){
                element.style.animation = "progress1 1s linear forwards"
            }
            else if(index === 4){
                element.style.animation = "progress3 1s linear forwards"
            }
        });
    }
    if (scrollPosition > 1800){
        const progressBar = document.querySelectorAll(".progress-bar");
        progressBar.forEach((element,index) => {
        if(index === 0){
            element.style.width = "90%";
        }
        else if(index ===1){
            element.style.width = "85%";
        }
        else if(index ===2){
            element.style.width = "88%";
        }
        else if(index ===3){
            element.style.width = "80%";
        }
        else if(index ===4){
            element.style.width = "95%";
        }
        else if(index ===5){
            element.style.width = "87%";
        }
    })
    }
    if (scrollPosition > 2000) {
        facts.classList.add("show");
    }
    if (scrollPosition > 2300) {
        project.classList.add("show");
    }
    if (scrollPosition > 3100) {
        works.classList.add("show");
    }
    if (scrollPosition > 3700) {
        testimonial.classList.add("show");
    }
    if (scrollPosition > 4200) {
        contact.classList.add("show");
    }
});
// left side menu trigger funtion
document.addEventListener("scroll",function(){
    let scrollint=window.scrollY;
    if(scrollint >= 0){
        document.body.querySelector("#left-top").classList.add("change")
        document.body.querySelector("#left-about").classList.remove("change")
    }
    if(scrollint >300){
        document.body.querySelector("#left-top").classList.remove("change")
        document.body.querySelector("#left-services").classList.remove("change")
        document.body.querySelector("#left-about").classList.add("change")
    }
    if(scrollint >950){
        document.body.querySelector("#left-about").classList.remove("change")
        document.body.querySelector("#left-skill").classList.remove("change")
        document.body.querySelector("#left-services").classList.add("change")
    }
    if(scrollint >1500){
        document.body.querySelector("#left-services").classList.remove("change")
        document.body.querySelector("#left-facts").classList.remove("change")
        document.body.querySelector("#left-skill").classList.add("change")
    }
    if(scrollint >3000){
        document.body.querySelector("#left-skill").classList.remove("change")
        document.body.querySelector("#left-project").classList.remove("change")
        document.body.querySelector("#left-facts").classList.add("change")
    }
    if(scrollint >3700){
        document.body.querySelector("#left-facts").classList.remove("change")
        document.body.querySelector("#left-work").classList.remove("change")
        document.body.querySelector("#left-project").classList.add("change")
    }
    if(scrollint >5000){
        document.body.querySelector("#left-project").classList.remove("change")
        document.body.querySelector("#left-work").classList.add("change")
        document.body.querySelector("#left-testimonial").classList.remove("change")
    }
    if(scrollint >6000){
        document.body.querySelector("#left-work").classList.remove("change")
        document.body.querySelector("#left-testimonial").classList.add("change")
        document.body.querySelector("#left-Contact").classList.remove("change")
    }
    if(scrollint >7000){
        document.body.querySelector("#left-testimonial").classList.remove("change")
        document.body.querySelector("#left-Contact").classList.add("change")
    }

})
// eventlister on triple line to toggle left menu
    document.body.querySelector(".menu").addEventListener("click",()=>{
    document.body.querySelector(".left").style.left=0;
    document.body.querySelector("#close").style.display="block"
    document.body.querySelector(".menu").style.display="none"
})
document.body.querySelector("#close").addEventListener("click",()=>{
    document.body.querySelector(".left").style.left="-100%";
    document.body.querySelector("#close").style.display="none"
    document.body.querySelector(".menu").style.display="block"
})

// Horizantal progress bar setting up
document.body.querySelector(".fact-box").addEventListener("mousemove",(event)=>{
    let left = document.querySelectorAll(".facts-outline")
    left.forEach(a => {
        if (event.movementX > 0){
            a.style.left = "3px";
        }else if (event.movementX < 0){
            a.style.left = "-3px";
        }
    });
    let top = document.querySelectorAll(".facts-outline")
    top.forEach(b => {
        if (event.movementY > 0){
            b.style.top = "3px";
        }else if (event.movementY < 0){
            b.style.top = "-3px";
        }
    });
    let left2 = document.querySelectorAll(".facts-outline2")
    left2.forEach(c => {
        if (event.movementX > 0){
            c.style.left = "6px";
        }else if (event.movementX < 0){
            c.style.left = "-6px";
        }
    })
    let top2 = document.querySelectorAll(".facts-outline2")
    top2.forEach(d => {
        if (event.movementY > 0){
            d.style.top = "6px";
        }else if (event.movementY < 0){
            d.style.top = "-6px";
        }
    })
    
    
})
// Testimonial Sliding animation setting up
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.querySelector(".progress2");

let currentSlide = 0;

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });


    // Update progress bar width
    progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
}

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
        clearInterval(setinterval);
        setTimeout(() => {
            interval()
        }, 5000);

    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
        clearInterval(setinterval);
        setTimeout(() => {
            interval()
        }, 5000);
    }
    
});

// Initialize
let setinterval;
function interval(){
setinterval = setInterval(() => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
    else{
        currentSlide = 0;
        updateSlide()
    }
}, 2000);
}
// updateSlide();
interval()
