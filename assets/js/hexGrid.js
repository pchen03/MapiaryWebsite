$(document).ready(function(){
	for (var i = 0;i<$('.grid-item').length+1;i++) {
		$('.grid-item:nth-of-type('+i+')').delay(i*200).queue(function(next){
			$(this).addClass('fadein');
			next();
		});
	}
});