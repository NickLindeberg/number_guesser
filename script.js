

function clearGuess() {
  // sets a function to clear the guess to use for the clear button
  document.getElementById("guessForm").reset();
  // searches page for an id called guessForm and clears the form
}

function showGuess() {
  // creates a function that looks for a user guess and displays it
  document.getElementById("showGuess").innerHTML =
  // finds an id called showGuess and populates it with below
    document.getElementById("userGuess").value;
    // takes the user input and displays it
}

function resetPage() {
  // sets a function called resetpage for my reset button
  location.reload();
  // location reload refreshes the page
}
