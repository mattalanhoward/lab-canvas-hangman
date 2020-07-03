class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // console.log(this.secretWord)
  }

  createBoard() {
    this.context.clearRect(0,0,1000,1000);
    this.drawLines()
  }

  drawLines() {
    let x = 500;
    let y = 700;
    this.context.beginPath();
    this.context.lineWidth = 3;
     for (let i = 0; i < this.secretWord.length; i++) {
       this.context.moveTo(x, y);
       this.context.lineTo(x + 30, y);
       x += 50;
     }
     this.context.stroke();
  }
 
  writeCorrectLetter(index) {
    let x = 500;                                                                                // where the letter will be written is dependent on index of letter 
    let y = 700;                                                                                // in secretWord, so times the index by 45 (distance between lines)
    this.context.font = ('24px "Times New Roman"');                                                     
    this.context.fillText(this.secretWord[index].toUpperCase(), x + (index * 45 + 5), y - 10);  // +5 on X and -10 on Y to center letter over line
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 300;
    let y = 200;
    this.context.font = ('24px "Times New Roman"');
    this.context.fillText(letter, x , y )
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // push loser image here
  }

  winner() {
    // push winner image here
  }
}

