
  var mySwiper = new Swiper('.gallery-slider', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.plusSlides__next',
      prevEl: '.plusSlides_prev',
    },
    autoplay: {
        delay: 1000,
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'gallery-bullet',
      },
  })