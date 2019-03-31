// JavaScript Document
 var answer =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var randomItem = answer[Math.floor(Math.random()*answer.length)];
             console.log(randomItem);

		 var wins = 0;
		 var losses = 0;
		 var numberofGuesses = 10;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	
		 	var userchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
             "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (userchoices.indexOf(userGuess) > -1) {

				if (userGuess === randomItem) {
					wins++;
					numberofGuesses = 9;
					
				}

				if (userGuess != randomItem) {
					numberofGuesses --;
                    losses ++;
					guessChoices.push(userGuess);
				}

				if (numberofGuesses === 0) {

				numberofGuesses = 9;
				losses ++;
				

				
			}

			
            document.querySelector("#kp").innerHTML = userGuess;
            document.querySelector("#wi").innerHTML = wins;
            document.querySelector("#lo").innerHTML = losses;
            document.querySelector("#gl").innerHTML = numberofGuesses;




			
			}
		};
