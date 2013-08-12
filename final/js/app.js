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
		$('.outdoors').hide(),
		$('.hoopin').fadeIn();
		$('.black').hide();
	})

	$('#outdoors').click(function(){
		$('.black').hide();
		$('.outdoors').fadeIn();
		$('.hoopin').hide();

	})

	$('#black').click(function(){
		$('.hoopin').hide();
		$('.black').fadeIn();
		$('.outdoors').hide();

	})

	$('.button').click(function(){
    	$('.mini_menu').slideToggle(500)
   	})



   	// colorbox plugin for image gallery

   	$(".outdoors").find("a.photos").colorbox({rel:"group1"});

   	$(".hoopin").find("a.photos").colorbox({rel:"group2"});

   	$(".black").find("a.photos").colorbox({rel:"group3"});

   	//carousel for main page slideshow

   		$('.carousel').carousel({
  			interval: 2000,
  			pause: "hover"
		});

   	//scrollTo

   		$('nav').find('a').click(function(e){
			$('.bigbox').scrollTo(this.hash, this.hash);
			e.preventDefault();
		});

	//Poetry Page
		$('.poem_list').hover(
		function(){
			$(this).css('position', 'relative'),
			$(this).css('z-Index', '100'),
			$(this).css('margin', '0'),
			$(this).css('background-color', '#EEEEEE'),
			$(this).css('color', '#1C86D2'),
			$(this).transition({scale: 1.2}, 100),
			$(this).transition({scale: 1})
		},
		function(){
			$(this).transition({scale: 1}),
			$(this).css('position', 'relative'),
			$(this).css('z-Index', '5'),
			$(this).css('margin', '0'),		
			$(this).css('color', '#FFFFFF'),	
			$(this).css('background-color', '#0C394F')
		});



})