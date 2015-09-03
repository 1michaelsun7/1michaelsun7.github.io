$(document).ready(function(){

	var adtYoutubeIds = ["WU4S28itOHU", "Le0qVyAkeAg", "CFxwTsq-lUY", "JCKWDp_jyFw", "hc0USqSsnuA", "IOc35QWBoYY", "jXntqigsL_8", "BlmyCVCZL3o", "B9q30hy1m9w"];
	var danceCoverIds = ["bts-ineedu.mp4", "bts-ineedu.mp4"];
	var bboyIds = [];
	var tttContent = "";

	$('#bboy').on("click", function(){
		for (var i = 0; i<9; i++){
			if (bboyIds[i] !== undefined){
				tttContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+bboyIds[i]+'" frameborder="0" allowFullScreen></iframe>';
			} else {
				tttContent += '<div class="novideo"><p>Coming Soon!</p></div>';
			}
		}
		$('.changing-ttt-board').html(tttContent);
		tttContent = "";
	});

	$('#danceCovers').on("click", function(){
		for (var i = 0; i<6; i++){
			if (danceCoverIds[i] !== undefined){
				tttContent += '<video height="150" controls><source src="'+danceCoverIds[i]+'" type="video/mp4"></video>';
			} else {
				tttContent += '<div class="novideovideo"><p>Coming Soon!</p></div>';
			}
		}
		$('.changing-ttt-board').html(tttContent);
		tttContent = "";
	});

	$('#adts').on("click", function(){
		if ($('#adts').data("youtube-links") == "1"){
			for (var i = 0; i<9; i++){
				if (adtYoutubeIds[i] !== undefined){
					tttContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+adtYoutubeIds[i]+'" frameborder="0" allowFullScreen></iframe>';
				} else {
					tttContent += '<div class="novideo"><p>Coming Soon!</p></div>';
				}
			}
			$('.changing-ttt-board').html(tttContent);
			tttContent = "";
		}
		
	});
});