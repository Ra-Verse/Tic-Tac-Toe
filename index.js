const cells = document.querySelectorAll(".cell");
const message = document.querySelector("#message");
const restartBtn = document.querySelector("#restart");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    running = true;
    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restart);
    message.textContent = `${currentPlayer}'s turn`;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(currBoard[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, cellIndex){
    currBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `${currentPlayer}'s turn`;
}

function highlightWinningCells(condition) {
    condition.forEach((index) => {
        cells[index].classList.add("winning");
    });
}

function checkWinner(){

    let roundWon = false;
    for (let i = 0; i <winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = currBoard[condition[0]];
        const cellB = currBoard[condition[1]];
        const cellC = currBoard[condition[2]];

        if(cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            highlightWinningCells(condition);
            roundWon = true;
            running = false;
            break;
        }

    }

    if (roundWon) {
        message.textContent = `${currentPlayer} wins`;
    } else if(!currBoard.includes("")){
        message.textContent = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }
}

function restart() {
    currBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("winning");
    });
    message.textContent = `${currentPlayer}'s turn`;
    running = true;
}