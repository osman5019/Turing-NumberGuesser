var guess = document.querySelector("#guess");
var ranNum = Math.floor(Math.random() * 10 + 1);

guess.addEventListener('blur', function(){
	console.log(guess.value);
	console.log(parseInt(guess.value));
})

Math.floor(Math.random() * 10 + 1);

