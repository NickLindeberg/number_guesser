var round = 1;

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
    hideShow();
    hideButton();
    roundCounter();
  }
}

function cheat() {
  document.body.style.backgroundColor = "tomato";
  document.getElementById("answer-is").innerHTML = "This Answer Is ";
  document.getElementById("cheater").innerHTML = nmbr;
}

function clearCheat() {
  document.body.style.backgroundColor = "white";
  document.getElementById("cheater").innerHTML = "";
  document.getElementById("answer-is").innerHTML = "";
}



function roundCounter() {
  document.getElementById("round-count").innerHTML = round;
  document.getElementById('round').classList.add('show');
}

function hideShow() {
  document.getElementById("show-min").innerHTML = min
  document.getElementById("show-max").innerHTML = max
  // creates a random number based on the min/max user input
  document.getElementById('min-max-button').disabled = true;
  // diables set min/max button after it has been clicked
  document.getElementById('min-num').style.display = "none";
  // disables min field once button has been clicked
  document.getElementById('max-num').style.display = "none";
  // disables max field once button has been clicked
  document.getElementById('instructions').style.display = "none";

  document.getElementById('userGuess').disabled = false;
  document.getElementById('userGuess').classList.add('show');

  // enables user guess field once button has been clicked
  document.getElementById('guess-button').classList.add('show');
  document.getElementById('clear-button').classList.add('show');
  document.getElementById('reset-button').classList.add('show');
  document.getElementById('cheat-button').classList.add('show');

}

function hideButton() {
  document.getElementById('min-max-button').classList.add('hide');
}

function widenRange() {
  min = min - 10;
  document.getElementById("show-min").innerHTML = min
  max = max + 10;
  document.getElementById("show-max").innerHTML = max
  nmbr =  Math.ceil(Math.random() * (max - min)) + min;
}

function showRange() {
  var range = document.getElementById("range");
    range.style.display = "block";
  }

function clearGuess() {
  // sets a function to clear the guess to use for the clear button
  document.getElementById("guessForm").reset();
  // searches page for an id called guessForm and clears the form
  guessInput();
  clearInput();
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
  var guess = document.getElementById("userGuess").value;
  if (guess > max) {
    clearGuess();
    alert(mess = "Error, WAY TOO HIGH, choose a lower number")
  } else if (guess < min) {
    clearGuess();
    alert(mess = "Error, WAY TOO LOW, choose a higher number")
  } else {
    userResult();
  }
}

function validate() {
  var message;
  var guess = document.getElementById("userGuess").value;
  if (guess == nmbr) {
    message = "BOOM! You Win!";
    showGuess();
    clearGuess();
    round = round += 1;
    roundCounter();
    clearCheat();
    document.getElementById('reset-button').disabled = false;
    widenRange();
  }  else if (guess > nmbr ) {
    message = "Too High, guess again!";
    showGuess();
    document.getElementById('reset-button').disabled = false;
  }
  else {
    message = "Too Low, guess again!";
    showGuess();
    document.getElementById('reset-button').disabled = false;
  }
  document.getElementById("highLow").innerHTML = message;
  resetButton();
}


function guessInput() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('guess-button').disabled = true;
        } else {
            document.getElementById('guess-button').disabled = false;
        }
    }

function clearInput() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('clear-button').disabled = true;
        } else {
            document.getElementById('clear-button').disabled = false;
        }
    }

function resetButton() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('reset').disabled = true;
        } else {
            document.getElementById('reset').disabled = false;
        }
      }


function minMaxButton() {
	 if(document.getElementsByClassName("mm").value==="") {
            document.getElementById('min-max-button').disabled = true;
        } else {
            document.getElementById('min-max-button').disabled = false;
        }
      }
