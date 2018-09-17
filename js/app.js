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

    particlesJS('contact',

        {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ccff33"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#ccff33"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "../images/flickr.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#e4e4e4",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
});
