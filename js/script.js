//class="animated infinite zoomOutUp"
(function($){
	$(function(){

		$('#mak p').hover(function(){ //анимация для макияжей вверху
			$(this).toggleClass('animated infinite pulse');
		});


		/*************/
		var windowHeight = $(window).height();

		$(window).scroll(function(){
			if($(window).scrollTop() > 300){
				$('#to_top').fadeIn(1000);
			}
			else{
				$('#to_top').fadeOut(1000);
			}
		});//появление кнопки вверх при прокрутки больше чем 300пх, появляется через затухание в течении 1000мсек

		$('#to_top').click(function(e){
			e.preventDefault();
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
		});//плавная прокрутка вверх страницы за 1000 мсек


		/**************/
		$('.menu a').click(function(e){
			e.preventDefault();
			var elem = $(this).attr('href');
			var top = $(elem).offset().top;
			$('body, html').stop().animate({
				scrollTop: top-30
			}, 1000);
		});//при нажатии на кнопку меню плавная прокрутка до нужного места

		/**************/
		$('.order').fancybox();//Галерея при клике на вид макияжа
		/**************/
		$('[name=phone]').inputmask('+38(999) 999-99-99');//проверка введенных данных в форму
		$('.order-form').validate({
			rules:{
				user: {
					required: true
				},
				phone: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
			},
			messages:{
				fio: {
					required: 'Введите Ваше ФИО'
				},
				phone: {
					required: 'Введите Ваш телефон'
				},
				email: {
					required: 'Введите Ваш email-адрес',
					email: 'Не корректный email'
				},
			}
		});

		



	});
})(jQuery);
