let slideHidden = function (visible) {
  for (let i = 0; i < slide.length; i++) {

      if (i >= visible) {
        console.log(i);
        slide[i].classList.add('hidden');
      }
      buttonOpen.textContent = "Показать все";
      buttonOpen.style.transform = 'translateY(0px)';
  }
}

let slideVisible = function () {
  for (let i = 0; i < slide.length; i++) {
    if (slide[i].classList.contains("hidden")) {
      slide[i].classList.remove('hidden');
    }
    buttonOpen.textContent = "Скрыть";
    buttonOpen.style.transform = 'translateY(10px)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  console.log(width);
  if (width < 768){
    const slider = new Swiper('.brand-slider__container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      spaceBetween: 16,

      freeMode: true,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 40
        }
      }
    });
  }
})

let width = window.innerWidth;
let slide = document.querySelectorAll('.brand-slide');
let buttonOpen = document.querySelector('.brend-slider__button-show');

if (width < 1120 && width >= 720) {
  slideHidden(6);  
}
else if (width >= 1120){
  slideHidden(8);
}
else {
  buttonOpen.style.display = "none";
}

buttonOpen.addEventListener('click', function () {

  if (width < 1120){
    if ((buttonOpen.innerText).length === 6) {
      slideHidden(6);  
    }
    else if ((buttonOpen.innerText).length === 12) {
      slideVisible();
    }
  } else {
    if ((buttonOpen.innerText).length === 6) {
      slideHidden(8);  
    }
    else if ((buttonOpen.innerText).length === 12) {
      slideVisible();
    }
  }
}); 




