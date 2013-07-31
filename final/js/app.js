// Your JS code goes here.

$(document).ready(function(){

	$('a#home').mouseover(function(){
		$('a').removeClass('active')
		$('a#home').addClass('active')

	})

	$('a#about').mouseover(function(){
		$('a').removeClass('active')
		$('a#about').addClass('active')
	})

	$('a#poetry').mouseover(function(){
		$('a').removeClass('active')
		$('a#poetry').addClass('active')
	})

	$('a#photography').mouseover(function(){
		$('a').removeClass('active')
		$('a#photography').addClass('active')
	})

	$('a.topnav').click(function(){
		$('a.topnav').css('opacity', '1') 
		$('a.topnav').css('color', '#021B4B')
		$('a.topnav:not(.active)').fadeTo(500, 0.5)
		$('a.topnav:not(.active)').css('color', '#0FA5DD')	
	})

	$('a#outdoors').mouseover(function(){
		$('a').removeClass('actived')
		$('a#outdoors').addClass('actived')

	})

	$('a#hoopin').mouseover(function(){
		$('a').removeClass('actived')
		$('a#hoopin').addClass('actived')
	})

	$('a#black').mouseover(function(){
		$('a').removeClass('actived')
		$('a#black').addClass('actived')
	})

	$('a#poem').hover(function(){
		$('a#poem').addClass('actived')
	},
	function(){ $('a#poem').removeClass('actived')
	})

	$('a#black').hover(function(){
		$('a#black').addClass('actived')
	},
	function(){ $('a#black').removeClass('actived')
	})

	$('a#hoopin').hover(function(){
		$('a#hoopin').addClass('actived')
	},
	function(){ $('a#hoopin').removeClass('actived')
	})

	$('a#outdoors').hover(function(){
		$('a#outdoors').addClass('actived')
	},
	function(){ $('a#outdoors').removeClass('actived')
	})

	$('a.sidenav').click(function(){
		$('a.sidenav').css('background-color', '#ffffff') 
		$('a.sidenav').css('color', '#021B4B')
		$('a.sidenav:not(.actived)').css('background-color', '#0C394F')
		$('a.sidenav:not(.actived)').css('color', '#ffffff')
		
	})


	$('.photo').hover(function(){
		$(this).find('.caption').slideDown(400);
	},
	function(){
		$(this).find('.caption').fadeOut(300);
	})


	$('#hoopin').click(function(){
		$('.outdoors').fadeOut(),
		$('.hoopin').slideUp().fadeIn();
		$('.black').fadeOut();
	})

	$('#outdoors').click(function(){
		$('.outdoors').fadeIn();
		$('.hoopin').fadeOut();
		$('.black').fadeOut();

	})

	$('#black').click(function(){
		$('.hoopin').fadeOut();
		$('.black').fadeIn();
		$('.outdoors').fadeOut();

	})

	$('.button').click(function(){
    	$('.mini_menu').slideDown(500),
   		$('.button').click(function(){
      		$('.mini_menu').slideUp(500)
    		})
   	})


})