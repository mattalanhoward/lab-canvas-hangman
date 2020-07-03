class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  //picks random word and stores it in this.words.
  pickWord() {
    // ... your code goes
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  //checks that the keydown event is a letter
  checkIfLetter(keyCode) {
    if (keyCode < 91 && keyCode > 64) {
      return true
    } else {
      return false;
    }
  }

  //returns true i letter has been pressed false if new letter
  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false
    } else {
        //push pressed letters to letters array
        this.letters.push(event.key)
      return true
    }
  }


  //add passed letter to guessedLetters string.
  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        return false;
      }
      return true;
    }
  }
}



let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
      hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
     hangmanCanvas.createBoard() 
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(`************`)
  console.log(event.key)

  //check if letter
  if (hangman.checkIfLetter(event.keyCode)){
    console.log("This is a letter")
  
  //check if letter has already been clicked
  if(hangman.checkClickedLetters(event.key)) {
    console.log(`New Letter`)

    //adds guessed letters to guessedLetters string
    if(hangman.secretWord.includes(event.key)){
      hangman.addCorrectLetter(event.key)
      }

      } else { 
                  //already guessed letter
        console.log("This letter has been guessed already")
      }
  } else {
    //not a letter
    console.log("This is not a letter")
  }
  console.log(`Letters array ${hangman.letters}`)
  console.log(`Guessed Letters ${hangman.guessedLetters}`)
});






