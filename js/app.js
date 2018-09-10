document.addEventListener("DOMContentLoaded", function (){

  var prevBtn = document.querySelector(".slider__button--prev");
  var nextBtn = document.querySelector(".slider__button--next");

  var listEl = document.querySelectorAll(".slider__item");
  var articleEl = document.querySelectorAll(".slider__article");
  var counter = 0;
  var time = 4000;

  listEl[counter].classList.add("visible");
  articleEl[counter].classList.add("visible");

    var sliderId = setInterval(function () {
        listEl[counter].classList.remove("visible");
        articleEl[counter].classList.remove("visible");
        counter++;
        if (counter >= listEl.length) {
            counter = 0;
        }

        listEl[counter].classList.add("visible");
        articleEl[counter].classList.add("visible");
    }, time)

  nextBtn.addEventListener("click", function(e){
        time=4000;
        listEl[counter].classList.remove("visible");
        articleEl[counter].classList.remove("visible");
        counter++;
        if (counter >= listEl.length) {
            counter = 0;
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

});
