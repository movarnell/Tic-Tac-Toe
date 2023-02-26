// Create an array to represent the game board
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Create a variable to keep track of whose turn it is
let currentPlayer = 'X';

// Create a function to check if a player has won
function checkWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    // No winner
    return false;
}

// Create a function to check if the game is a tie
function checkTie() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }

    // Board is full and no winner, so it's a tie
    return true;
}

// Create a function to make a move
function makeMove(row, col) {
    // Check if the move is valid
    if (board[row][col] !== '') {
        return false;
    }

    // Make the move
    board[row][col] = currentPlayer;

    // Check if the game is over
    if (checkWin()) {
        console.log(`${currentPlayer} wins!`);
        return true;
    } else if (checkTie()) {
        console.log('It\'s a tie!');
        return true;
    }

    // Switch to the other player's turn
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    return false;
}
