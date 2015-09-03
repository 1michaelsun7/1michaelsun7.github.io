$(document).ready(function(){
	$('body,html').animate({
		scrollTop: 0
	}, 100);
	var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	

	$('#headingBorder').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 500, function(){	
		$('#icon1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 100, function(){
			$('#icon2').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 100, function(){
				$('#icon3').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 100, function(){
					// un-lock scroll position
					var html = jQuery('html');
					html.css('overflow', html.data('previous-overflow'));
				});
			});
		});
	});
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > $('#index').height()-50){
			$('#menu').show();
		} else {
			$('#menu').hide();
		}
	});

	var failedTries = 0;
	$(window).on('resize', function(){
		$('#headingBorder').css({
			'height': (17+$('#headingBorder h2').height() + 'px')
		});

    	$("#low-centered").css({
    		'height': '10%',
    		'width': (3*$("#low-centered").height()+'px')
    	});

    	var docheight = $(window).height();
    	$(".bottom-centered").css({
    		'height': ((docheight*3/40.0)+'px'),
    		'margin-bottom': ((docheight*-1/80.0)+'px')
    	});

    	$(".bottom-centered-projects").css({
    		'height': ((docheight*3/40.0)+'px'),
    		'margin-bottom': ((docheight*-1/80.0)+'px')
    	});

    	$(".bottom-centered-dance").css({
    		'height': ((docheight*3/40.0)+'px'),
    		'margin-bottom': ((docheight*-1/80.0)+'px')
    	});

    	$(".next").css({
    		'left': ('calc(50% - ' + (docheight*3/80.0)+'px)')
    	});

	});

	$(".toIndex").on("click", function(){
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	var optionsShowing = false;

	$(".small-screen-options").on("click", function(){
		if (!optionsShowing){
			$(".drop-menu").show(500);
			$(".open-menu").hide();
			$(".close-menu").show(500);
			optionsShowing = true;
		} else {
			$(".drop-menu").hide(500);
			$(".close-menu").hide();
			$(".open-menu").show(500);
			optionsShowing = false;
		}
		
	});

	$(".toIndexSmall").on("click", function(){
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		$(".drop-menu").hide(500);
		$(".close-menu").hide();
		$(".open-menu").show(500);	
	});

	$(".toAboutSmall").on("click", function(){
		var indexHeight = $("#index").height();
		$('body,html').animate({
			scrollTop: indexHeight - 50
		}, 1000);
		$(".drop-menu").hide(500);
		$(".close-menu").hide();
		$(".open-menu").show(500);
		optionsShowing = false;
	});

	$(".toProjectsSmall").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + 50
		}, 1000);
		$(".drop-menu").hide(500);
		$(".close-menu").hide();
		$(".open-menu").show(500);
		optionsShowing = false;
	});

	$(".toDanceSmall").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		var aboutProjectsHeight = $("#aboutProjects").height();
		var projectHeight = $("#projects").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + projectHeight + aboutProjectsHeight + 150
		}, 1000);
		$(".drop-menu").hide(500);
		$(".close-menu").hide();
		$(".open-menu").show(500);
		optionsShowing = false;
	});

	$(".toContactSmall").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		var aboutProjectsHeight = $("#aboutProjects").height();
		var projectHeight = $("#projects").height();
		var aboutDanceHeight = $("#aboutDance").height();
		var danceHeight = $("#dance").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + projectHeight + aboutProjectsHeight + aboutDanceHeight + danceHeight + 350
		}, 1000);
		$(".drop-menu").hide(500);
		$(".close-menu").hide();
		$(".open-menu").show(500);
		optionsShowing = false;
	});

});