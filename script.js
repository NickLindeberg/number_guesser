var round = 1;
// sets a round counter as a var to be used to calculate the round

function setMinMax() {
  max = Math.ceil(document.getElementById("max-num").value);
  // sets a max value based on user input
  min = Math.floor(document.getElementById("min-num").value);
  // sets a min value based on user input
  if (min > max) {
    alert("The Maximum HAS to be greater than the minimum")
    // if user puts in a min that is higher than the max, it gives an error alert box
  } else {
    nmbr =  Math.ceil(Math.random() * (max - min)) + min;
    // if the two inputs are valid then it will create a number to guess based on the min and max
    hideShow();
    // hides a bunch of fields and shows the correct fields, see function for more details
    hideMinMaxButton();
    // calls this function to hide the min/max button
    roundCounter();
    // calls the round counter to display the correct round user is on
  }
}

function cheat() {
  document.body.style.backgroundColor = "tomato";
  // when cheat button is clicked it changes the background color to tomato, you are welcome Dione
  document.getElementById("answer-is").innerHTML = "This Answer Is ";
  // shows a line under the cheat button that says the answer is
  document.getElementById("cheater").innerHTML = nmbr;
  // adds the correct answer to the answer is line under the cheat button
}

function clearCheat() {
  document.body.style.backgroundColor = "white";
  // when correct guess is chosen it clears the cheat and background color
  document.getElementById("cheater").innerHTML = "";
  // removes the answer from bottom of the page
  document.getElementById("answer-is").innerHTML = "";
  // removes the answer is from bottom of page
}

function roundCounter() {
  document.getElementById("round-count").innerHTML = round;
  // once first guess is chosen it starts counting the round based on the round var
  document.getElementById('round').classList.add('show');
  // adds a show class so you can see the round counter
}

function hideShow() {
  document.getElementById("show-min").innerHTML = min
  // sets the show-min div to min number
  document.getElementById("show-max").innerHTML = max
  // sets the show-max div to max number
  document.getElementById('min-max-button').disabled = true;
  // diables set min/max button after it has been clicked
  document.getElementById('min-num').style.display = "none";
  // disables min field once button has been clicked
  document.getElementById('max-num').style.display = "none";
  // disables max field once button has been clicked
  document.getElementById('instructions').style.display = "none";
  // removes the instructions from the top of the page once first guess has been made
  document.getElementById('userGuess').disabled = null;
  // enables user guess field to be used once it shows up on the page
  document.getElementById('userGuess').classList.add('show');
  // makes guess field show up on page
  document.getElementById('guess-button').classList.add('show');
  // shows guess button once min/max has been set
  document.getElementById('clear-button').classList.add('show');
  // shows clear button once min/max has been set
  document.getElementById('reset-button').classList.add('show');
  // shows reset button once min/max has been set
  document.getElementById('cheat-button').classList.add('show');
  // shows cheat button once min/max has been set
}

function hideMinMaxButton() {
  document.getElementById('min-max-button').classList.add('hide');
  // adds a class of hide to the min max button
}

function widenRange() {
  min = min - 10;
  // subtracts 10 from the min to increase range
  document.getElementById("show-min").innerHTML = min
  // sets min var to the new min
  max = max + 10;
  // adds 1- to the max to increase range
  document.getElementById("show-max").innerHTML = max
  // sets max var to the new max
  nmbr =  Math.ceil(Math.random() * (max - min)) + min;
  // chooses a new random number based on the new min and max
}

function showRange() {
  var range = document.getElementById("range");
  // shows range on page to show user
    range.style.display = "block";
  }

function clearGuess() {
  // sets a function to clear the guess to use for the clear button
  document.getElementById("guessForm").reset();
  // searches page for an id called guessForm and clears the form
  disGuessButton();
  // disables guess button until the user adds a new guess to the input field
  clearInput();
  // clears the input field on user guess
}

function showGuess() {
  // creates a function that looks for a user guess and displays it
  document.getElementById("guess").innerHTML =
  // finds an id called showGuess and populates it with below
    document.getElementById("userGuess").value;
    // takes the user input and displays it
}

function userResult() {
  // sets a function that takes an id and toggles on or off
  var x = document.getElementById('information');
  // sets a variable based on id passed into function
   x.style.display = "block";
   validate();
}

function resetPage() {
  // sets a function called resetpage for my reset button
  location.reload();
  // location reload refreshes the page
}

function goodNumber() {
  var mess;
  // sets a blank var of message to be used below
  var guess = document.getElementById("userGuess").value;
  // grabs guess from userguess field and sets it to a var called guess;
  if (guess > max) {
    // if guess is higher than the max input submitted earlier it
    clearGuess();
    // clears the guess
    alert(mess = "Error, WAY TOO HIGH, choose a lower number")
    // and shows a pop up alert message saying the guess is too high
  } else if (guess < min) {
    // if guess is lower than the min input submitted earlier it
    clearGuess();
    // clears the guess
    alert(mess = "Error, WAY TOO LOW, choose a higher number")
    // and shows a pop up alert message saying the guess is too low
  } else {
    userResult();
    // once the number has been deemed a good guess it will kick to the next function
  }
}

function validate() {
  var message;
  // sets a var for message that will be used below
  var guess = document.getElementById("userGuess").value;
  // takes guess input from guess input field
  if (guess == nmbr) {
    // if user guesses number
    message = "BOOM! You Win!";
    // it shows above mess
    showGuess();
    // shows the number they guessed
    clearGuess();
    // clears the guess from the input field
    round = round += 1;
    // adds a round to the round counter
    roundCounter();
    // called round counter to update the number
    clearCheat();
    // clears the cheat function if used to make sure the background is white
    widenRange();
    // increases range of min and max
  }  else if (guess > nmbr ) {
    // if the guess is too high it
    message = "Too High, guess again!";
    // shows a message saying it is too high
    showGuess();
    // shows the number they guessed
  }
  else {
    // if the guess is too low it
    message = "Too Low, guess again!";
    // shows a message saying it is too low
    showGuess();
    // shows the number they guessed
  }
  document.getElementById("highLow").innerHTML = message;
  // displays message from above depending on their input
  resetButton();
  // enables reset button
}

function disGuessButton() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('guess-button').disabled = true;
        } else {
            document.getElementById('guess-button').disabled = null;
        }
    }
// this function disables the guess button if the user guess is not submitted

function clearInput() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('clear-button').disabled = true;
        } else {
            document.getElementById('clear-button').disabled = null;
        }
    }
// this function clears the user guess field

function resetButton() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('reset-button').disabled = true;
        } else {
            document.getElementById('reset-button').disabled = null;
        }
      }
// this function will disable the reset button if the value of the guess field is empty


function minMaxButton() {
	 if(document.getElementsByClassName("mm").value==="") {
            document.getElementById('min-max-button').disabled = true;
        } else {
            document.getElementById('min-max-button').disabled = null;
        }
      }
// this function disables the set min max button if there isnt nothing in the max field
