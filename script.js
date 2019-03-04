const nmbr = Math.ceil(Math.random() * 100);
const max = document.getElementById("max-num").value;
const min = document.getElementById("min-num").value;

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
    alert(mess = "Error, WAY TOO HIGH, choose a number between 1-100")
  } else if (guess < min) {
    clearGuess();
    alert(mess = "Error, WAY TOO LOW, choose a number between 1-100")
  } else {
    mess = ""
    document.getElementById("error").innerHTML = mess;
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
    document.getElementById('reset-button').disabled = false;
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
