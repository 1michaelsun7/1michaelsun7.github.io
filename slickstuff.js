$(document).ready(function(){

	var adtYoutubeIds = ["WuulitZGico", "-nwZqIfPUtk", "-3g7kUQXOu8", "x5sw7ggoDXk", "Kj13ZgX_UQ4", "7Ff93a-lwdU", "YbuoNpmTG4M", "jXntqigsL_8",  "BlmyCVCZL3o"];
	var danceCoverIds = ["7q3Si1SAq_I", "UJxaw20hM7E", "YLKhlJdUxVs"];
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
		for (var i = 0; i<9; i++){
			if (danceCoverIds[i] !== undefined){
				tttContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+danceCoverIds[i]+'" frameborder="0" allowFullScreen></iframe>';
			} else {
				tttContent += '<div class="novideo"><p>Coming Soon!</p></div>';
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