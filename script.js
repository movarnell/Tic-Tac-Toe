let board = [];

let playerXMoves = [];
let playerOMoves = [];

let playerXWinCount = 0;
let playerOWinCount = 0;

let sq1 = $('#sq1');
let sq2 = $('#sq2');
let sq3 = $('#sq3');
let sq4 = $('#sq4');
let sq5 = $('#sq5');
let sq6 = $('#sq6');
let sq7 = $('#sq7');
let sq8 = $('#sq8');
let sq9 = $('#sq9');

let currentPlayer = "X";

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");




document.getElementById('sq1').addEventListener('click', () => { markPlay(sq1, 1) });
document.getElementById('sq1').addEventListener('click', () => { audio.play() });
document.getElementById('sq2').addEventListener('click', () => { markPlay(sq2, 2) });
document.getElementById('sq2').addEventListener('click', () => { audio.play() });
document.getElementById('sq3').addEventListener('click', () => { markPlay(sq3, 3) });
document.getElementById('sq3').addEventListener('click', () => { audio.play() });
document.getElementById('sq4').addEventListener('click', () => { markPlay(sq4, 4) });
document.getElementById('sq4').addEventListener('click', () => { audio.play() });
document.getElementById('sq5').addEventListener('click', () => { markPlay(sq5, 5) });
document.getElementById('sq5').addEventListener('click', () => { audio.play() });
document.getElementById('sq6').addEventListener('click', () => { markPlay(sq6, 6) });
document.getElementById('sq6').addEventListener('click', () => { audio.play() });
document.getElementById('sq7').addEventListener('click', () => { markPlay(sq7, 7) });
document.getElementById('sq7').addEventListener('click', () => { audio.play() });
document.getElementById('sq8').addEventListener('click', () => { markPlay(sq8, 8) });
document.getElementById('sq8').addEventListener('click', () => { audio.play() });
document.getElementById('sq9').addEventListener('click', () => { markPlay(sq9, 9) });
document.getElementById('sq9').addEventListener('click', () => { audio.play() });

document.getElementById('resetBtn').addEventListener('click', () => { resetBoard() });
document.getElementById('resetScoresBtn').addEventListener('click', () => { resetScore() });

function markPlay(square, sqVal) {
    console.log(square)
    if (currentPlayer == "X" && square.text() == "") {
        console.log(currentPlayer);
        console.log(square);
        square.text("X");
        console.log(square);
        currentPlayerSwitch();
        console.log("sqVal = " + sqVal)
        board.push(sqVal);
        playerXMoves.push(sqVal)
        console.log(board);
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

function currentPlayerSwitch() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function checkForWinner() {

    console.log(playerXMoves.includes("1"))
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
        $('#title').after(`<div class="alert alert-warning text-center fw-bold" role="alert" id="winner">
        TIE no winner this time!
      </div>`);
        $('#sq1').replaceWith($('#sq1').clone());
        $('#sq2').replaceWith($('#sq2').clone());
        $('#sq3').replaceWith($('#sq3').clone());
        $('#sq4').replaceWith($('#sq4').clone());
        $('#sq5').replaceWith($('#sq5').clone());
        $('#sq6').replaceWith($('#sq6').clone());
        $('#sq7').replaceWith($('#sq7').clone());
        $('#sq8').replaceWith($('#sq8').clone());
        $('#sq9').replaceWith($('#sq9').clone());
    }

}


function playerXWin() {
    $('#title').after(`<div class="alert alert-danger text-center fw-bold" role="alert"id="winner">
    Player X has won the game!
  </div>`);
    console.log("Player X Wins")
    playerXWinCount += 1;
    $('#xWins').text(playerXWinCount);
    $('#sq1').replaceWith($('#sq1').clone());
    $('#sq2').replaceWith($('#sq2').clone());
    $('#sq3').replaceWith($('#sq3').clone());
    $('#sq4').replaceWith($('#sq4').clone());
    $('#sq5').replaceWith($('#sq5').clone());
    $('#sq6').replaceWith($('#sq6').clone());
    $('#sq7').replaceWith($('#sq7').clone());
    $('#sq8').replaceWith($('#sq8').clone());
    $('#sq9').replaceWith($('#sq9').clone());
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/531");
    audio.play();

}

function playerOWin() {
    $('#title').after(`<div class="alert alert-primary text-center fw-bold" role="alert" id="winner">
    Player O has won the game!
  </div>`)
    playerOWinCount += 1;
    $('#oWins').text(playerOWinCount);
    $('#sq1').replaceWith($('#sq1').clone());
    $('#sq2').replaceWith($('#sq2').clone());
    $('#sq3').replaceWith($('#sq3').clone());
    $('#sq4').replaceWith($('#sq4').clone());
    $('#sq5').replaceWith($('#sq5').clone());
    $('#sq6').replaceWith($('#sq6').clone());
    $('#sq7').replaceWith($('#sq7').clone());
    $('#sq8').replaceWith($('#sq8').clone());
    $('#sq9').replaceWith($('#sq9').clone());
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/531");
    audio.play();
}

function resetBoard() {
    const resetAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/516");
    resetAudio.play();


    $("#sq1").empty("");
    $("#sq2").empty("");
    $("#sq3").empty("");
    $("#sq4").empty("");
    $("#sq5").empty("");
    $("#sq6").empty("");
    $("#sq7").empty("");
    $("#sq8").empty("");
    $("#sq9").empty("");
    $('#winner').remove();

    document.getElementById('sq1').addEventListener('click', () => { markPlay(sq1, 1) });
    document.getElementById('sq1').addEventListener('click', () => { audio.play() });
    document.getElementById('sq2').addEventListener('click', () => { markPlay(sq2, 2) });
    document.getElementById('sq2').addEventListener('click', () => { audio.play() });
    document.getElementById('sq3').addEventListener('click', () => { markPlay(sq3, 3) });
    document.getElementById('sq3').addEventListener('click', () => { audio.play() });
    document.getElementById('sq4').addEventListener('click', () => { markPlay(sq4, 4) });
    document.getElementById('sq4').addEventListener('click', () => { audio.play() });
    document.getElementById('sq5').addEventListener('click', () => { markPlay(sq5, 5) });
    document.getElementById('sq5').addEventListener('click', () => { audio.play() });
    document.getElementById('sq6').addEventListener('click', () => { markPlay(sq6, 6) });
    document.getElementById('sq6').addEventListener('click', () => { audio.play() });
    document.getElementById('sq7').addEventListener('click', () => { markPlay(sq7, 7) });
    document.getElementById('sq7').addEventListener('click', () => { audio.play() });
    document.getElementById('sq8').addEventListener('click', () => { markPlay(sq8, 8) });
    document.getElementById('sq8').addEventListener('click', () => { audio.play() });
    document.getElementById('sq9').addEventListener('click', () => { markPlay(sq9, 9) });
    document.getElementById('sq9').addEventListener('click', () => { audio.play() });


    document.getElementById("sq1").className = "squares";
    document.getElementById("sq2").className = "squares";
    document.getElementById("sq3").className = "squares";
    document.getElementById("sq4").className = "squares";
    document.getElementById("sq5").className = "squares";
    document.getElementById("sq6").className = "squares";
    document.getElementById("sq7").className = "squares";
    document.getElementById("sq8").className = "squares";
    document.getElementById("sq9").className = "squares";

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

}

function resetScore() {
    playerOWinCount = 0;
    $('#oWins').text(playerOWinCount);
    playerXWinCount = 0;
    $('#xWins').text(playerXWinCount);
    resetBoard();
}