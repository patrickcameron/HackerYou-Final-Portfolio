var gifs = ['space.gif', 'squares.gif'];
var randGif = [Math.floor(Math.random() * gifs.length)];
// function newGif() {
// 	setInterval(function() {
// 		if (randGif >= (gifs.length - 1) ) {
// 			randGif = 0;
// 		} else {
// 			randGif++;
// 		}
// 		$('img.gif').attr('src', 'images/' +  gifs[randGif]);
// 	}, 1000);
// };

$(function(){
	if ($(window).width() > 900) {
	   	$('#fullpage').fullpage({
			sectionsColor: ['#fff', 'rgb(253,248,237)', 'rgba(193,197,180,0.45)', 'rgba(233,234,239,0.32)', 'rgba(143,152,205,0.52', 'rgb(232,232,232)', 'rgb(222,222,222)'],
			loopHorizontal: false,
			continuousVertical: true,
			showActiveTooltip: true,
			controlArrows: false,
			responsiveWidth: 900,
			responsiveHeight: 600
		});
	};
	$('.aboutButton').on('click', function() {
		$('.about').toggleClass('displayNone').toggleClass('displayFlex');
		$(this).toggleClass('aboutButtonAfter');
		if( $(this).text() === 'close' ) {
			$(this).html('<p>about/CV</p>');
		}	
		else {
			$(this).html('<p>close</p>');
		}
		// $('.about').attr('style', 'background-image: url(images/' + gifs[randGif]);
		// $('p.aboutText').toggle(function() {
		// 	$(this).text('close');
		// }, function() {
		// 	
		// });
	});
	$('img.gif').attr('src', 'images/' +  gifs[randGif]);
	// newGif();
	$('.hoverLink').hover(function() {
		$('.active').toggleClass('gradientBG');
		$('.projectInfo').toggleClass('displayFlex').toggleClass('displayNone');
		$('img.screenshot').toggleClass('screenshotSmall').toggleClass('screenshotLarge');
	});
});