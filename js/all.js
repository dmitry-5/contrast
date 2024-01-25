    new WOW().init();

    //popup functions
    function PopUpShow(){
        $("#header-popup").addClass('popup-show');
    }
    function PopUpHide(){
        $("#header-popup").removeClass('popup-show');
    }
    function PopUpShow1(){
        $("#s-3popup").addClass('popup-show');
    }
    function PopUpHide1(){
        $("#s-3popup").removeClass('popup-show');
    }

$(function(){

	//tabs
	$('#menu-tabs li a').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li a').removeClass('active');
		$(this).addClass('active');
		return false;
	});


	//bxslider review
	$('#menu-tabs li a.t1').click();

	//bxslider team
	$('.slider-review').bxSlider();

	//services
	$('.slider-team').bxSlider();

	//fixed navigation
	$(document).scroll (function(){
		if ($(document).scrollTop () > $('.wrapper').height () + 0)
		    $('#header-nav').addClass ('fixed').css("background", "rgba(255, 255, 255, 0.95)").css("box-shadow", "0px 2px 10px 0px rgba(50, 50, 50, 0.50)");
		else
			$('#header-nav').removeClass ('fixed').css("background", "rgba(255, 255, 255, 0.5)").css("box-shadow", "none");
	});


	// Scroll to sections for PC navigation
    $(document).ready(function(){
        $("#header-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000).height () + 60, 'px';
        });
      });


	// Scroll to sections for mobile navigation
    $(document).ready(function(){
        $("#mobile-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
      });

	// Scroll to sections from footer
    $(document).ready(function(){
        $("#footer-list").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
      });

});


