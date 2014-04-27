// Your JS code goes here.
$(document).ready(function(){


	$('.info').hover(function(){
		$(this).find('.info_box').transition({ y: '-9px' }, 500),
		$(this).find('p').transition({ y: '5px' }, 500)
	},
	function(){
		$(this).find('p').transition({ y: '-.5px' }, 500),
		$(this).find('.info_box').transition({ y: '.25px'}, 500)
		
	});

	$('.highlight').css('color', '#D2D683');
	$('.highlight').css("font-family", "'Lato', sans-serif");
	$('.highlight').css('font-weight', 'bold');	

	$('[type=radio] label').click(function(){
		$(this).css('background-color', '#000000');
		$(this).css('width', '100%');
	})
	

});