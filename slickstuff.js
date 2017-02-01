$(document).ready(function(){

	var adtYoutubeIds = ["WuulitZGico", "-nwZqIfPUtk", "-3g7kUQXOu8", "x5sw7ggoDXk", "Kj13ZgX_UQ4", "7Ff93a-lwdU", "YbuoNpmTG4M", "jXntqigsL_8",  "BlmyCVCZL3o"];
	var danceCoverIds = ["7q3Si1SAq_I", "UJxaw20hM7E", "YLKhlJdUxVs"];
	var bboyIds = [];
	var adtContent = "";
	var bboyContent = "";
	var coverContent = "";

	var adtBool = false;
	var bboyBool = false;
	var coverBool = false;

	$('#bboy').on("click", function(){
		if (!bboyBool){
			for (var i = 0; i<9; i++){
				if (bboyIds[i] !== undefined){
					bboyContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+bboyIds[i]+'" frameborder="0" allowFullScreen></iframe>';
				} else {
					bboyContent += '<div class="novideo"><p>Coming Soon!</p></div>';
				}
			}
			bboyBool = true;
		}
		
		$('.changing-ttt-board').html(bboyContent);
	});

	$('#danceCovers').on("click", function(){
		if (!coverBool){
			for (var i = 0; i<9; i++){
				if (danceCoverIds[i] !== undefined){
					coverContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+danceCoverIds[i]+'" frameborder="0" allowFullScreen></iframe>';
				} else {
					coverContent += '<div class="novideo"><p>Coming Soon!</p></div>';
				}
			}
			
			coverBool = true;
		}
		
		$('.changing-ttt-board').html(coverContent);
	});

	$('#adts').on("click", function(){
		if (!adtBool){
			for (var i = 0; i<9; i++){
				if (adtYoutubeIds[i] !== undefined){
					adtContent += '<iframe title="YouTube video player" class="youtube-player" type="text/html" src="https://www.youtube.com/embed/'+adtYoutubeIds[i]+'" frameborder="0" allowFullScreen></iframe>';
				} else {
					adtContent += '<div class="novideo"><p>Coming Soon!</p></div>';
				}
			}
			adtBool = true;
		}
		$('.changing-ttt-board').html(adtContent);
		
	});
});