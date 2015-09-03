$(document).ready(function(){
	$(".toAbout").on("click", function(){
		var indexHeight = $("#index").height();
		$('body,html').animate({
			scrollTop: indexHeight
		}, 1000);
	});

	$(".toProjects").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + 50
		}, 1000);
	});

	$(".toDance").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		var aboutProjectsHeight = $("#aboutProjects").height();
		var projectHeight = $("#projects").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + projectHeight + aboutProjectsHeight + 150
		}, 1000);
	});

	$(".toContact").on("click", function(){
		var indexHeight = $("#index").height();
		var aboutHeight = $("#about").height();
		var aboutProjectsHeight = $("#aboutProjects").height();
		var projectHeight = $("#projects").height();
		var aboutDanceHeight = $("#aboutDance").height();
		var danceHeight = $("#dance").height();
		$('body,html').animate({
			scrollTop: indexHeight + aboutHeight + projectHeight + aboutProjectsHeight + aboutDanceHeight + danceHeight + 350
		}, 1000);
	});
});