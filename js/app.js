$(document).ready(function(){

var position= 0, quiz, quizApp, question, choice, choices, chA, chB, chC, chD, correct=0;


var questions = [
["What does a cat spend a third of its time awake doing?", "Eating", "Cleaning itself", "Playing", "Watching TV", "B"],
["Who created the cat 'flap' door?", "Albert Einstein", "Nicolaus Copernicus", "Sir Isaac Newton", "Galileo Galilei", "C"],
["Female cats are also known as:","Queen, Molly", "Whiskers, Baby", "Princess, Holly", "Nena, Juliet", "A"],
["A human fingerprint is to a cat's:", "Nose", "Paws", "Nails", "Whiskers", "A"],
["Approximately, how long is a cat's pregnancy?", "6 weeks", "9 months", "6 months", "9 weeks", "D"]	
];

	function _(x){
	return document.getElementById(x);
	}

	function renderQuestion(){
		quiz= _("quiz");
		_("quizApp").innerHTML= "Question " + (position+1) + " of " + questions.length;
			question= questions[position][0];
			chA= questions[position][1];
			chB= questions[position][2];
			chC= questions[position][3];
			chD= questions[position][4];
			quiz.innerHTML= "<h3>" + question + "</h3>";
			quiz.innerHTML+= "<input type= 'radio' name='choices' value='A'> "+chA+" <br>";
			quiz.innerHTML+= "<input type= 'radio' name='choices' value='B'> "+chB+" <br>";
			quiz.innerHTML+= "<input type= 'radio' name='choices' value='C'> "+chC+" <br>";
			quiz.innerHTML+= "<input type= 'radio' name='choices' value='D'> "+chD+" <br><br>";
			quiz.innerHTML+= "<button onclick= 'checkAnswer()'>Submit</button>";
	}

	function checkAnswer(){
		choices= document.getElementByName("choices");
		for (var i = 0; i < choices.length; i++) {
			if(choices[i].checked){
				choice= choices[i].value;
			}
		}	

		if(choice === questions[position][5]){
			correct++;
		}
			position++;
			renderQuestion();
		
	}

	window.addEventListener("load", renderQuestion, false);
});


