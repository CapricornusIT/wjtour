const next = document.querySelector('.fa-chevron-right');
const prev = document.querySelector('.fa-chevron-left');
const slides = document.querySelectorAll('.banner_slider-content');
const numberOFslides = slides.length;
let slideNumber = 0;

next.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;
    
    if (slideNumber > (numberOFslides - 1)){
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add('active');
}

prev.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;
    
    if (slideNumber < 0){
        slideNumber = numberOFslides - 1;
    }

    slides[slideNumber].classList.add('active');
}

let dropdown = document.querySelector('.dropdown_menu');
let list = document.querySelector('.header_nav-list');
dropdown.addEventListener('click', function(){
    dropdown.classList.toggle('active');
    list.classList.toggle('active');
})