// Declares my arrays for logic
let board = [];
let playerXMoves = [];
let playerOMoves = [];
// Keeps players count values
let playerXWinCount = 0;
let playerOWinCount = 0;
// assigns each square to a variable
let sq1 = $('#sq1');
let sq2 = $('#sq2');
let sq3 = $('#sq3');
let sq4 = $('#sq4');
let sq5 = $('#sq5');
let sq6 = $('#sq6');
let sq7 = $('#sq7');
let sq8 = $('#sq8');
let sq9 = $('#sq9');
// declares arrays for later use in loops. 
let sqArray = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9];
const sqEleArray = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];
const sqEleTagArray = ['#sq1', '#sq2', '#sq3', '#sq4', '#sq5', '#sq6', '#sq7', '#sq8', '#sq9'];
// Assigns the starting player. 
let currentPlayer = "X";
// Assigns the click sound and the buttons to a variable. 
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// loop that adds my event listners to each square.
for (let i = 0; i < 9; i++) {
    document.getElementById(sqEleArray[i]).addEventListener('click', () => { markPlay(sqArray[i], i + 1) });
    document.getElementById(sqEleArray[i]).addEventListener('click', () => { audio.play() });
    console.log(i + 1);
}
// assigns event listners to my buttons. 
document.getElementById('resetBtn').addEventListener('click', () => { resetBoard() });
document.getElementById('resetScoresBtn').addEventListener('click', () => { resetScore() });
// assigns each square and pushes to the arrays based off which player is playing. 
function markPlay(square, sqVal) {
    console.log(square)
    if (currentPlayer == "X" && square.text() == "") {
        square.text("X");
        currentPlayerSwitch();
        board.push(sqVal);
        playerXMoves.push(sqVal)
        square.addClass("xSquares");
        checkForWinner();
        $('#currentPlayerText').text("Player O's Turn");
    } else if (currentPlayer == "O" && square.text() == "") {
        console.log(currentPlayer);
        console.log(square);
        square.text("O");
        currentPlayerSwitch();
        board.push(sqVal);
        console.log(board);
        playerOMoves.push(sqVal)
        console.log(playerOMoves);
        square.addClass("oSquares")
        checkForWinner();
        $('#currentPlayerText').text("Player X's Turn");
    }
}
// switches players. 
function currentPlayerSwitch() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}
// the following is the logic to determine if a player has won, or a tie has happened. 
function checkForWinner() {
    if (playerXMoves.includes(1) && playerXMoves.includes(2) && playerXMoves.includes(3)) {
        playerXWin();
    } else if (playerXMoves.includes(4) && playerXMoves.includes(5) && playerXMoves.includes(6)) {
        playerXWin();
    } else if (playerXMoves.includes(7) && playerXMoves.includes(8) && playerXMoves.includes(9)) {
        playerXWin();
    } else if (playerXMoves.includes(1) && playerXMoves.includes(5) && playerXMoves.includes(9)) {
        playerXWin();
    } else if (playerXMoves.includes(3) && playerXMoves.includes(5) && playerXMoves.includes(7)) {
        playerXWin();
    } else if (playerXMoves.includes(1) && playerXMoves.includes(4) && playerXMoves.includes(7)) {
        playerXWin();
    } else if (playerXMoves.includes(2) && playerXMoves.includes(5) && playerXMoves.includes(8)) {
        playerXWin();
    } else if (playerXMoves.includes(3) && playerXMoves.includes(6) && playerXMoves.includes(9)) {
        playerXWin();
    } else if (playerOMoves.includes(1) && playerOMoves.includes(2) && playerOMoves.includes(3)) {
        playerOWin();
    } else if (playerOMoves.includes(4) && playerOMoves.includes(5) && playerOMoves.includes(6)) {
        playerOWin();
    } else if (playerOMoves.includes(7) && playerOMoves.includes(8) && playerOMoves.includes(9)) {
        playerOWin();
    } else if (playerOMoves.includes(1) && playerOMoves.includes(5) && playerOMoves.includes(9)) {
        playerOWin();
    } else if (playerOMoves.includes(3) && playerOMoves.includes(5) && playerOMoves.includes(7)) {
        playerOWin();
    } else if (playerOMoves.includes(1) && playerOMoves.includes(4) && playerOMoves.includes(7)) {
        playerOWin();
    } else if (playerOMoves.includes(2) && playerOMoves.includes(5) && playerOMoves.includes(8)) {
        playerOWin();
    } else if (playerOMoves.includes(3) && playerOMoves.includes(6) && playerOMoves.includes(9)) {
        playerOWin();
    } else if (board.includes(1) && board.includes(2) && board.includes(3) && board.includes(4) && board.includes(5) && board.includes(6) && board.includes(7) && board.includes(8) && board.includes(9)) {
        $('#title').after(`<div class="alert alert-warning text-center fw-bold tieGame me-5 ms-5" role="alert" id="winner">
        TIE no winner this time!
      </div>`);
        // loop to clone out the items to remove even listners so the game stops. 
        for (let i = 0; i < 9; i++) {
            $(sqEleTagArray[i]).replaceWith($(sqEleTagArray[i]).clone());
        }
    }
}

// displays the text, plays sound, and increments the count if Player X wins. 
function playerXWin() {
    $('#title').after(`<div class="alert alert-danger text-center fw-bold xSquares alertBorder me-5 ms-5" role="alert"id="winner">
    Player X has won the game!</div>`);
    playerXWinCount += 1;
    $('#xWins').text(playerXWinCount);
    for (let i = 0; i < 9; i++) {
        $(sqEleTagArray[i]).replaceWith($(sqEleTagArray[i]).clone());
    }
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/531");
    audio.play();
}
// displays the text, plays sound, and increments the count if Player O wins. 
function playerOWin() {
    $('#title').after(`<div class="alert alert-primary text-center fw-bold oSquares alertBorder me-5 ms-5" role="alert" id="winner">
    Player O has won the game!
  </div>`)
    playerOWinCount += 1;
    $('#oWins').text(playerOWinCount);
    for (let i = 0; i < 9; i++) {
        $(sqEleTagArray[i]).replaceWith($(sqEleTagArray[i]).clone());
    }
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/531");
    audio.play();
}
// resets the board, clearing all text, and colors and plays audio. 
function resetBoard() {
    const resetAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/516");
    resetAudio.play();
    // clears the square text. 
    for (i = 0; i < 9; i++) {
        $(sqEleTagArray[i]).empty("");
    }
    // removes the winner text. 
    $('#winner').remove();
    // reassigns the event listners for the next round. 
    for (let i = 0; i < 9; i++) {
        document.getElementById(sqEleArray[i]).addEventListener('click', () => { markPlay(sqArray[i], i + 1) });
        document.getElementById(sqEleArray[i]).addEventListener('click', () => { audio.play() });
        console.log(i + 1);
        document.getElementById(sqEleArray[i]).className = "squares";
    }
    // clears the arrays, and reassigns the variables for the squares as well as redeclaring the array for their names. 
    playerOMoves = [];
    playerXMoves = [];
    board = [];
    console.log(playerOMoves);
    console.log(playerXMoves);
    console.log(board);

    let sq1 = $('#sq1');
    let sq2 = $('#sq2');
    let sq3 = $('#sq3');
    let sq4 = $('#sq4');
    let sq5 = $('#sq5');
    let sq6 = $('#sq6');
    let sq7 = $('#sq7');
    let sq8 = $('#sq8');
    let sq9 = $('#sq9');
    sqArray = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9];

}
// resets the score when the button is clicked. 
function resetScore() {
    playerOWinCount = 0;
    $('#oWins').text(playerOWinCount);
    playerXWinCount = 0;
    $('#xWins').text(playerXWinCount);
    resetBoard();
}