$(function(){
	$(window).load(function() {
	    $('#sample_slider').swipeslider();
    });
	$('#page1').on("swipeleft",function(){
		$.mobile.changePage('#page2',{transition: 'slide', reverse:false},false, false);
	});
	$('#page2').on("swipeleft",function(){
		$.mobile.changePage('#page3',{transition: 'slide', reverse:false},false, false);
	});
	$('#page2').on("swiperight",function(){
		$.mobile.changePage('#page1',{transition: 'slide', reverse:true},false, false);
	});
	$('#page3').on("swiperight",function(){
		$.mobile.changePage('#page2',{transition: 'slide', reverse:true},false, false);
	});
})