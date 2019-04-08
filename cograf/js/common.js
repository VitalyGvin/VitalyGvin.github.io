$(document).ready(function(){
	timer();
	$('.soft_scroll').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2019,3,16,0,0,0);
    var result = (achiveDate - nowDate)+1000;
    var days = Math.floor(result/1000/60/60/24);
    if(days > 0)
    {
    	$('.counter').removeClass("d-none");
    	if((days < 5) && (days > 1))
	    {
	    	$('#day').append(days + " дня");
	    	$('#mod').append("Осталось");
	    }
	    else if (days == 1)
	    {
	    	$('#day').append(days + " день");
	    	$('#mod').append("Остался");
	    }
	    else
	    {
	    	$('#day').append(days + " дней");
	    	$('#mod').append("Осталось");
	    }
    }
}