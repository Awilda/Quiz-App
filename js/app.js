$(document).ready(function(){
	$("#submit").click(function(){


//quiz questions//
var questions =  [
	{
	question: "What does a cat spend a third of its time awake doing?",
	choices:["Eating", "Cleaning itself", "Playing", "Watching TV"],
	correctAnswer: "Cleaning itself"},
	{
	question: "Who created the cat 'flap' door?",
	choices: ["Albert Einstein", "Nicolaus Copernicus", "Sir Isaac Newton", "Galileo Galilei"],
	correctAnswer: "Sir Issac Newton"},
	{
	question: "Female cats are also known as:",
	choices: ["Queen, Molly", "Whiskers, Baby", "Princess, Holly", "Nena, Juliet"],
	correctAnswer: "Queen, Molly"},
	{
	question: "A human fingerprint is to a cat's:",
	choices: ["Nose", "Paws", "Nails", "Whiskers"],
	correctAnswer: "Nose"},
	{
	question: "Approximately, how long is a cat's pregnancy?",
	choices: ["6 weeks", "9 months", "6 months", "9 weeks"],
	correctAnswer: "9 weeks"}
];

		if(questions.getElementByName("choices") === true){
			question++;
		} else {
			alert("Try Again!");
			return;
		}
	
	
	});
});


