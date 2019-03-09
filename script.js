var round = 1;

function setMinMax() {
  max = Math.ceil(document.getElementById("max-num").value);
  min = Math.floor(document.getElementById("min-num").value);
  if (min > max) {
    alert("The Maximum HAS to be greater than the minimum")
  } else {
    nmbr =  Math.ceil(Math.random() * (max - min)) + min;
    hideShow();
    hideMinMaxButton();
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
  document.getElementById('min-max-button').disabled = true;
  document.getElementById('min-num').style.display = "none";
  document.getElementById('max-num').style.display = "none";
  document.getElementById('instructions').style.display = "none";
  document.getElementById('userGuess').disabled = null;
  document.getElementById('userGuess').classList.add('show');
  document.getElementById('guess-button').classList.add('show');
  document.getElementById('clear-button').classList.add('show');
  document.getElementById('reset-button').classList.add('show');
  document.getElementById('cheat-button').classList.add('show');
}

function hideMinMaxButton() {
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
  document.getElementById("guessForm").reset();
  disGuessButton();
  clearInput();
}

function showGuess() {
  document.getElementById("guess").innerHTML =
    document.getElementById("userGuess").value;
}

function userResult() {
  var x = document.getElementById('information');
   x.style.display = "block";
   validate();
}

function resetPage() {
  location.reload();
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
    widenRange();
  }  else if (guess > nmbr ) {
    message = "Too High, guess again!";
    showGuess();
  }
  else {
    message = "Too Low, guess again!";
    showGuess();
  }
  document.getElementById("highLow").innerHTML = message;
  resetButton();
}

function disGuessButton() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('guess-button').disabled = true;
        } else {
            document.getElementById('guess-button').disabled = null;
        }
    }

function clearInput() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('clear-button').disabled = true;
        } else {
            document.getElementById('clear-button').disabled = null;
        }
    }

function resetButton() {
	 if(document.getElementById("userGuess").value==="") {
            document.getElementById('reset-button').disabled = true;
        } else {
            document.getElementById('reset-button').disabled = null;
        }
      }


function minMaxButton() {
	 if(document.getElementsByClassName("mm").value==="") {
            document.getElementById('min-max-button').disabled = true;
        } else {
            document.getElementById('min-max-button').disabled = null;
        }
      }
