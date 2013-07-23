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

	$('a.nav').click(function(){
		$('a.nav').css('opacity', '1') 
		$('a.nav').css('color', '#021B4B')
		$('a.nav:not(.active)').fadeTo(500, 0.5)
		$('a.nav:not(.active)').css('color', '#0FA5DD')	
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

	$('a#poem').mouseover(function(){
		$('a').removeClass('actived')
		$('a#poem').addClass('actived')
	})

	$('a.sidenav').click(function(){
		$('a.sidenav').css('background-color', '#ffffff') 
		$('a.sidenav').css('color', '#021B4B')
		$('a.sidenav:not(.actived)').css('background-color', '#0C394F')
		$('a.sidenav:not(.actived)').css('color', '#ffffff')
	})







})