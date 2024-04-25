const slides = document.querySelectorAll(".slide");

let maxslide = slides.length - 1;

let curSlide = 0;

slides.forEach((slide,indx)=> {
    slide.style.transform = `translateX(${indx * 100}%)`;
})

let nextslide = document.querySelector("#btn-next");

nextSlide.addEventListener("click", function (){
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else{
        curSlide++;
    }
    

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

const prevSlide = document.querySelector("#btn-prev");

prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
curSlide = maxslide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, indx )=> {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}$)`;
    })
})