$(function() {

	//When you click the submit button
		//the page does not refresh
	$('form').on('submit', function(e) {
		e.preventDefault();
		$('input.submit').attr('value', '').attr('style', 'background-image: url(images/refresh.png); background-repeat: no-repeat; background-position: center;');
		$('section.answerWrapperOuter').addClass('displayBlock');

		// //this is a variable to hold the answer for question1
		// //we are asking which button in question 1 the user clicked, and storing that in var answer1

		var questionAnswer1 = $("input:radio[name=question1]:checked").val();

		// //create a variable to hold the data for question 2

		var greatestWeakness = $("input:radio[name=question2]:checked").val();


		var sentence1;

		var reclaimSoul;

			// this is where our sweet sweet burns are stored -- ADD MORE WITTY COMEBACKS THAT ARE RELEVANT!!!


		if (questionAnswer1 == 1) {
			sentence1 = ["<a href='http://imgur.com/iydMdeL'>\"Ham. I'm wearing ham.\"</a>" ]
		}
			else if (questionAnswer1 == 2){
				sentence1 = ["<p>\"How many people has that line worked on? If you're including me in that number, you're badly mistaken.\"</p>", "<p>Reply only with <a href='http://imgur.com/a/K02G9'>Smash Mouth Lyrics</a> until they leave you alone.</p>"]

			}

			else if (questionAnswer1 == 3) {
				sentence1 = ["<a href='http://i.imgur.com/CEUHhzf.png'>\"Add a dolphin to the story\".</a>", "<p>\"Hey! Thanks for the message! How are you? I'm doing really well. What's your mom like? Is she nice? I'd love to meet her.\"</p>"]

			}

			else if (questionAnswer1 == 4) {
				sentence1 = ["<img src='images/itsanofromme.jpg'> <a href='http://imgur.com/gu5wAp3'>\"It's a no from me\"</a>"]

			}

			else if (questionAnswer1 == 5) {
				sentence1 = ["<img src='images/knifeemoji.png'>", "<img src='images/weinerslicer.jpg' alt='weiner slicer'>", "<img src='images/slicing-salami.jpg'>"]

			}

			else if (questionAnswer1 == 6) {
				sentence1 = ["<img src='images/stareback.gif'>"]

			}

			else {
				alert("Creep undefined! Did you answer both questions?")
			}


			// ADD MORE IMAGES/FUNNY LINKS TO MAKE IT FUNNY/lESS NEGATIVE/LIGHTEN MOOD

		if (greatestWeakness == 1) {
			reclaimSoul = ["<p><a href='https://youtu.be/5sw_qUHx9vE?t=1m56s'>Watch this video of an old man waiting at the airport with flowers for his wife</a>.</p>"]
		}
			else if (greatestWeakness == 2) {
				reclaimSoul = ["<p><a href='http://i.imgur.com/YfcFFXm.jpg'>The only acceptable kind of bathroom selfie</a>.</p>"]
			}

			else if (greatestWeakness == 3) {
				reclaimSoul = ["<p>Listen to <a href='https://www.youtube.com/watch?v=JGlD6Ho24lU'>this Roy Orbison song about breakups</a>. Maybe if your ex was this cool, you'd actually miss them.</p>"]
			}

			else if (greatestWeakness == 4) {
				reclaimSoul =  ["<p><a href='https://www.youtube.com/watch?v=w_RaPOOVX1Y'>Watch this video of very poor grammar and thank yourself for paying attention in English class</a>.</p>"]
			}

			else if (greatestWeakness  == 5) {
				reclaimSoul =  ["<p>Look at <a href='http://i.imgur.com/XvWwMWE.jpg'>this photo of a cat and dog hugging</a>. And maybe delete your Tinder profile for a while.</p>"]
			}

			else if (greatestWeakness  == 6) {
				reclaimSoul =  ["<p>It's probably time to delete all your online dating profiles, and possibly move to a monastery.</p>"]
			}

			else {
				alert("Creep undefined! Did you answer both questions?")
			}


			var comeback = sentence1[Math.floor(Math.random()*sentence1.length)];
			console.log(comeback);
			var suggestedAction = reclaimSoul[Math.floor(Math.random()*reclaimSoul.length)]

			// when a user clicks on submit, the 'comeback' will display in the div called comeback
			// Secondly, when user clicks submit, 'reclaimSoul' will be displayed in the div called action
	
				$('div.comeback').html(comeback);
				console.log(comeback)

				$('div.action').html(suggestedAction);

				console.log(suggestedAction);
			
				$('section.answer').show();

		// plugging our JQuery into html section


	});
});

