
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;


    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');


    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}


// let menu = document.querySelector(".dop-menu");
// let menuToggle = document.querySelector(".menu-toggle");

// menuToggle.addEventListener("click", function(e) {
//     e.preventDefault();
//     menu.classList.toggle("show-menu");
//     menuToggle.classList.toggle("active");
// });

// window.addEventListener('resize', function() {
//     if (window.innerWidth > 480 && menu.classList.contains('dop-menu')) {
//         menu.classList.remove('show-menu');
//         menuToggle.classList.remove("active");
//     }
// });



let menu = document.querySelector(" header .menu");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});
window.addEventListener('resize',function () {
 if (window.innerWidth > 375 && menu.classList.contains('show-menu')){
    menu.classList.remove('show-menu');
    menuToggle.classList.remove("active");
    }
});