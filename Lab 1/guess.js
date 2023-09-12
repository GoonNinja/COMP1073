/*Completed by Adam Miszkiewicz and Kevin Bailey
Part 1, 2, 5 done by Adam
Part 3 and 4 done by Kevin */

// STEP 1: Initialize game variables
      // STEP 1a: Pick random number
      var randomNumber = Math.floor(Math.random() * 50) + 1;
      // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
      var guesses = document.querySelector('p#guesses');
      var lastResult = document.querySelector('p#lastResult');
      var lowOrHi = document.querySelector('p#lowOrHi');
      // STEP 1c: Create variables to represent the guessing form
      var guessField = document.querySelector('input#guessField');
      var guessSubmit = document.querySelector('button');
      // STEP 1d: Create variables to initialize counter for number of guesses
      var guessCount = 0;
      // STEP 1e: Create a variable to represent the game reset button
      var resetButton;

      // STEP 2: Put focus on the field that allows user to type in guesses
      guessField.focus();

      // STEP 3: Build a function to check the user's guess
      function checkGuess() {
        // STEP 3a: Create a variable to contain what number the user entered
        var userGuess = Number(guessField.value);
        // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }
        // STEP 3c: Add the user's current guess to that list, plus a space
        guesses.textContent += userGuess + ' ';

        // STEP 3d: Conditional - the user guessed correctly
        if (userGuess === randomNumber) {
          // Output a success message, then end the game
          lastResult.textContent = 'You guessed the number!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        // STEP 3e: Conditional - the user is all out of guesses
        } else if (guessCount === 7) {
          // Output an appropriate message, then end the game
          lastResult.textContent = 'You are out of guesses.';
          setGameOver();
        // STEP 3f: Conditional - the user's guess is incorrect
        } else {
          // Output an appropriate message
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'orange';
          // If the guess is too low, let the user know
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Too low.';
            lowOrHi.style.backgroundColor = 'yellow';
            lowOrHi.style.color = 'red';
          // Else if the guess is too high, let the user know
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Too high.';
            lowOrHi.style.backgroundColor = 'lightblue';
            lowOrHi.style.color = 'red';
          }
        }
        // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
        guessCount++;
        guessField.value = '';
        guessField.focus();
        // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
      }

      // STEP 4: Build a function to end the game
      function setGameOver() {
        // STEP 4a: Disable the guessing field and submit button
        guessField.disabled = true;
        guessSubmit.disabled = true;
        // STEP 4b: Build a new button to start a new game
        resetButton = document.createElement('button');
        resetButton.textContent = 'New game';
        document.body.appendChild(resetButton);
        // STEP 4c: Add a click event to the new button that calls resetGame function
        resetButton.addEventListener('click', resetGame);
      }

      // STEP 5: Build a function to start a new game
      function resetGame() {
        // STEP 5a: Restore the guessCount variable to 1
        guessCount = 1;
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
        var resetParas = document.querySelectorAll('section p');
        for (var i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        // STEP 5c: Remove the reset button
        resetButton.parentNode.removeChild(resetButton);
        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        // STEP 5e: Change background color of lastResult paragraph back to white
        lastResult.style.backgroundColor = 'white';
        // STEP 5f: Generate a new random number
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
      // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
      guessSubmit.addEventListener('click', checkGuess);