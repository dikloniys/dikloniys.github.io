
var headerSwiper = new Swiper('.header-container', {
    slidesPerView: 1,
    centeredSlides: true
});




var mySwipers = document.querySelectorAll('.gallery-slider')
console.log(mySwipers)
mySwipers.forEach((item) => {
  var mySwiper = new Swiper (item, {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,

    navigation: {
      nextEl: item.querySelector('.swiper-button-next'),
      prevEl: item.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: item.querySelector('.pagination'),
        clickable: true,
        type: 'bullets',
        bulletClass: 'pagination__bullet',
        bulletActiveClass: 'pagination__bullet-active',
      }
  }) 
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
  } ) ;
})

var mySwipers = document.querySelectorAll('.apartments-slider')
console.log(mySwipers)
mySwipers.forEach((item) => {
  var mySwiper = new Swiper (item, {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,

    navigation: {
      nextEl: item.querySelector('.swiper-button-next'),
      prevEl: item.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: item.querySelector('.pagination'),
        clickable: true,
        type: 'bullets',
        bulletClass: 'pagination__bullet',
        bulletActiveClass: 'pagination__bullet-active',
      }
  }) 
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
  } ) ;
})
var swapButtons = document.querySelectorAll('.map-button-swap')
swapButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    console.log(e.target)
    var marButtonActive = document.querySelector('.map-button-swap.active')
    marButtonActive.classList.remove('active')
    var data = e.target.dataset.slide
    item.classList.add('active')
    var showBlock = document.querySelector('.swiper-slide[data-btn='+data+']')
  })
})
$( document ).ready(function() {
	


	$(".phone-mask").mask("+7(000) 000-00-00");
	jQuery.validator.addMethod(
		'regexp',
		function(value, element, regexp) {
			var re = new RegExp(regexp);
			return this.optional(element) || re.test(value);
		},
		"Please check your input."
	);
	$(".js-form-validate").each(function() {
		$(this).submit(function(e) {
			e.preventDefault();
		});
		$(this).validate({
			rules:{
				name:{
					required: true,
				},
				phone:{
					required: true,
					regexp: /^[+]{1}[0-9]{1}[(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/
        },
        personal: {
          required: true,
          
        },

			},
			messages:{
				name:{
					required: "Это поле обязательно для заполнения",
				},
		
				phone:{
					required: "Это поле обязательно для заполнения",
					regexp: "Проверьте корректность введенных данных"
        },
        personal: {
          required: "Обязательно",
          
        }
			},
			submitHandler: function(e) {
			}	
    })
  })
})
