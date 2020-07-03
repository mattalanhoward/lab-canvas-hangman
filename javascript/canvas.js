class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // console.log(this.secretWord)
  }

  createBoard() {
    this.context.clearRect(0,0,800,1200);
    this.drawLines()
  }

  drawLines() {
    let x = 400;
    let y = 500;
    this.context.beginPath();
    this.context.lineWidth = 3;
     for (let i = 0; i < this.secretWord.length; i++) {
       this.context.moveTo(x, y);
       this.context.lineTo(x + 30, y);
       x += 45;
     }
     this.context.stroke();
  }
 
  writeCorrectLetter(index) {
    let x = 400;                                                                                // where the letter will be written is dependent on index of letter 
    let y = 500;                                                                                // in secretWord, so times the index by 45 (distance between lines)
    this.context.font = ('24px Helvetica');                                                     
    this.context.fillText(this.secretWord[index].toUpperCase(), x + (index * 45 + 5), y - 10);  // +5 on X and -10 on Y to center letter over line
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

