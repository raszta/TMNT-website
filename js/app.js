document.addEventListener("DOMContentLoaded", function (){

  var prevBtn = document.querySelector("#prevPicture");
  var nextBtn = document.querySelector("#nextPicture");

  var listEl = document.querySelectorAll(".slider__item");
  var articleEl = document.querySelectorAll(".slider__article");
  var counter = 0;

  listEl[counter].classList.add("visible");
  articleEl[counter].classList.add("visible");

  nextBtn.addEventListener("click", function(e){

      listEl[counter].classList.remove("visible");
      articleEl[counter].classList.remove("visible");
          counter++;
      if(counter>=listEl.length){
          counter=0;
      }

      listEl[counter].classList.add("visible");
      articleEl[counter].classList.add("visible");
  });

  prevBtn.addEventListener("click", function(e){

      listEl[counter].classList.remove("visible");
      articleEl[counter].classList.remove("visible");
      counter--;
      if(counter<0){
      counter=listEl.length-1;
      }
      listEl[counter].classList.add("visible");
      articleEl[counter].classList.add("visible");
  });

  var btn = document.querySelector('#menu-trigger');
  var menu = document.querySelector('.header__wrap');
  var mobile = window.matchMedia("screen and (min-width: 1024px)")

  btn.addEventListener('click', function(ev) {
    ev.preventDefault();
    menu.classList.toggle('open');
  });

  mobile.addListener( function(mobile) {
    if (mobile.matches) {
      menu.classList.remove('open');
    }
  });



});
