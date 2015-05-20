


//quiz questions//
var questions = 

	'Who created the cat \"flap\" door?<br>'
		'<input type="radio" name = "answer" value = "Albert Einstein">Albert Einstein<br>'
		'<input type="radio" name = "answer" value = "Nicolaus Copernicus">Nicolaus Copernicus<br>'
		'<input type="radio" name = "answer" value = "Sir Isaac Newton">Sir Isaac Newton<br>'
		'<input type="radio" name = "answer" value = "Galileo Galilei">Galileo Galilei<br>' ,
	
	'Female cats are also known as:<br>'
		'<input type="radio" name = "answer" value = "Queen, Molly">Queen, Molly<br>'
		'<input type="radio" name = "answer" value = "Whiskers, Baby">Whiskers, Baby<br>'
		'<input type="radio" name = "answer" value = "Princess, Holly">Princess, Holly<br>'
		'<input type="radio" name = "answer" value = "Nena, Juliet">Nena, Juliet<br>' ,
	
	'A human fingerprint is to a cat\'s:<br>' 
		'<input type="radio" name = "answer" value = "Nose">Nose<br>'
		'<input type="radio" name = "answer" value = "Paws">Paws<br>'
		'<input type="radio" name = "answer" value = "Nails">Nails<br>'
		'<input type="radio" name = "answer" value = "Whiskers">Whiskers<br>' ,
	
	'Approximately, how  \"long\" + is a cat\'s pregnancy?<br>'
		'<input type="radio" name = "answer" value = "6 weeks">6 weeks<br>'
		'<input type="radio" name = "answer" value = "9 months">9 months<br>'
		'<input type="radio" name = "answer" value = "6 months">6 months<br>'
		'<input type="radio" name = "answer" value = "9 months">9 months<br>'
	
;



$('#questionnaire').html(questions[0])
var currentQuestion = 0;

$(document).ready(function(){

		$('#questionnaire').submit(function(){
			currentQuestion++;
			$('#questionnaire').html(questions[currentQuestion]);
			return false;
		});
	
	
});


