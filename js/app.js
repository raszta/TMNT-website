document.addEventListener("DOMContentLoaded", function (){

    const prevBtn = document.querySelector(".slider__button--prev");
    const nextBtn = document.querySelector(".slider__button--next");

    const listEl = document.querySelectorAll(".slider__item");
    const articleEl = document.querySelectorAll(".slider__article");
    let counter = 0;
    const time = 4000;
    let sliderId = setInterval(function () {
        nextSlide();
    }, time)
  listEl[counter].classList.add("visible");
  articleEl[counter].classList.add("visible");

  nextBtn.addEventListener("click", function(e){
        clearInterval(sliderId);
        nextSlide();
      sliderId = setInterval(function () {
          nextSlide();
      }, time)
  });

  prevBtn.addEventListener("click", function(e){ 
      clearInterval(sliderId);
      prevSlide();
      sliderId = setInterval(function () {
          nextSlide();
      }, time)
  });

  function nextSlide(){
      listEl[counter].classList.remove("visible");
      articleEl[counter].classList.remove("visible");
      counter++;
      if (counter >= listEl.length) {
          counter = 0;
      }
      listEl[counter].classList.add("visible");
      articleEl[counter].classList.add("visible");
  }
  function prevSlide(){
      listEl[counter].classList.remove("visible");
      articleEl[counter].classList.remove("visible");
      counter--;
      if (counter < 0) {
          counter = listEl.length-1;
      }
      listEl[counter].classList.add("visible");
      articleEl[counter].classList.add("visible");
  }

    const header = document.querySelector('.header');
    window.addEventListener('scroll', function (e) {
        if (this.pageYOffset >= 40) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    })
});
