var owl = $('.owl-carousel');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    mouseDrag: false
});

$(function () {
	$(window).scroll(function() {
	    $('.about-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__fadeInDown");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.request-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.method-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.service-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.nutrition-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.programm-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.mega-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.protocol-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.check-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__slideInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.form-block').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__animated animate__fadeInDown");
	        }
	    });
	});
})