
$(document).ready(function() {

	$("#noticias a").click(function(){

		var url=$(this).attr("href");
		$("#contenidos_externos").load(url+" #noticia");
		return false;

	});

			
}); 