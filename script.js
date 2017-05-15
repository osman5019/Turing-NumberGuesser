var guess = document.querySelector("#guess");
var guessButton = document.querySelector("#guess_b");
var clearButton = document.querySelector("#clear_b");
var title2 = document.querySelector("#title2");
var numDisplay = document.querySelector("#number-display");
var subtitle = document.querySelector("#subtitle");
var resetButton = document.querySelector("#reset");
var display = document.querySelector("#display");
var ranNum = Math.floor(Math.random() * 100 + 1);
guess.addEventListener("blur", function(){
	// console.log(guess.innerHTML);
})

guessButton.addEventListener("click", function(){
if (guess.value == ""){
	subtitle.innerHTML = "Please enter a guess";
} else {
	numDisplay.innerHTML = guess.value;
	if(guess.value < ranNum){
		subtitle.innerHTML = "That's too low";
	} else if (guess.value > ranNum){
		subtitle.innerHTML = "That's too high";
	} else {
		subtitle.innerHTML = "Boom!!!";
	}
}
});

clearButton.addEventListener("click", function(){
	guess.value = "";
	numDisplay.innerHTML = "";
	subtitle.innerHTML = "";
});

resetButton.addEventListener("click", function(){
	guess.value = "";
	numDisplay.innerHTML = "";
	subtitle.innerHTML = "";
});