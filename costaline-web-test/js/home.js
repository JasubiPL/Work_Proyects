// <---------- Slider Control -------------------->

// <--- DOM Elements ------>
const slider = document.querySelector('.main__slider');
const sliderItems = slider.querySelectorAll('.__slider-item');
const sliderControls = slider.querySelectorAll('.__slider-control');
const blogSliderContainer = document.querySelector(".__blog-articles-container");
const blogSliderItems = document.querySelectorAll(".__blog-article-items");
const blogSliderControls = document.querySelectorAll(".__blog-slider-controls") 

// <--- Variables------>
let currentSlide = 0;
let currentBLog = 0;

function showSlide(slideIndex) {
  sliderItems.forEach(slide => slide.classList.remove('active'));
  sliderItems[slideIndex].classList.add('active');
}

// <--- Functions ------>

// <--- Slider ---->
function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderItems.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItems.length - 1;
  }
  showSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 4000);

sliderControls.forEach(control => {
  control.addEventListener('click', () => {
    clearInterval(slideInterval);
    if (control.getAttribute('data-slide') === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    slideInterval = setInterval(nextSlide, 4000);
  });
});

// <--- Blog Slider ---->

function nextBlog(){
  if(currentBLog < blogSliderItems.length - 1){
    blogSliderContainer.style.transform = `translate(-${(currentBLog + 1) * 100}vw)`
    currentBLog ++ 
    console.log(currentBLog)
  }
}

function prevBlog(){
  if(currentBLog > 0 ){
    currentBLog --
    blogSliderContainer.style.transform = `translate(${(currentBLog * 100) * -1}vw)`
  }
}

blogSliderControls.forEach(control =>{
  control.addEventListener("click", () =>{
    if (control.getAttribute('data-slide') === 'next') {
      nextBlog();
    } else {
      prevBlog();
    }
  })
})


