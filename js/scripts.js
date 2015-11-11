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
	$('#fullpage').fullpage({
		// sectionsColor : ['white', '#EE964B', '#F4D35E', 'white', 'rgb(233,234,239)', '#F95738'],
		// sectionsColor: ['#fff', '#50FFB1', '#4FB286', '#3C896D', '#546D64'],
		sectionsColor: ['#fff', 'rgb(253,248,237)', 'rgba(193,197,180,0.45)', 'rgba(233,234,239,0.32)', 'rgba(143,152,205,0.52', 'rgb(232,232,232'],
		loopHorizontal: false,
		continuousVertical: true,
		showActiveTooltip: true,
		controlArrows: false
	});
	$('.aboutButton').on('click', function() {
		$('.about').toggleClass('displayNone').toggleClass('displayFlex');
		$(this).toggleClass('aboutButtonAfter');
		$(this).html('<p>close</p>');
		// $('.about').attr('style', 'background-image: url(images/' + gifs[randGif]);
		// $('p.aboutText').toggle(function() {
		// 	$(this).text('close');
		// }, function() {
		// 	$(this.text('about/CV');
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