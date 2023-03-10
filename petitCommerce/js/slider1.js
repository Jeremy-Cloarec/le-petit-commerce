



var swiper = new Swiper(".slide-content", {
   
    slidesPerView: 1,
    // slidesPerGroup: 1,
    centeredSlides:false,
    // slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    spaceBetween:24,
    loop:true,
    loopFillGroupWhithBlank:true,

   
    breakpoints: {
      576: {
        slidesPerView: 3,
        
      },
      992: {
        slidesPerView: 5,
      },
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },

    
  });





