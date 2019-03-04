const nmbr = Math.ceil(Math.random() * 100);

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
   showGuess();
   cheat();
   validate();
}

function resetPage() {
  // sets a function called resetpage for my reset button
  location.reload();
  // location reload refreshes the page
}

function cheat() {
  document.getElementById("cheat").innerHTML =
  nmbr;
}

function validate() {
  var message;
  var guess = document.getElementById("userGuess").value;
  if (guess == nmbr) {
    message = "BOOM!";
  }
  else if (guess > nmbr ) {
    message = "Too High, guess again!";
  }
  else {
    message = "Too Low, guess again!";
  }
  document.getElementById("highLow").innerHTML = message;
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
