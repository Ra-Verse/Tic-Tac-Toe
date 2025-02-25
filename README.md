# Simple Tic-Tac-Toe

This is a basic Tic-Tac-Toe game implemented using pure JavaScript, HTML, and CSS. No external libraries are used.

## Features

-   Play Tic-Tac-Toe in your browser.
-   Detects wins and draws.
-   Highlights the winning cells.
-   Restart the game.
-   Simple and clean UI.

## How to Use

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Ra-Verse/Tic-Tac-Toe
    ```
2.  **Open `index.html`:**
    Open the `index.html` file in your web browser.

## Game Logic

The game logic is implemented in `script.js`. Here's a breakdown:

-   **Initialization:**
    -   `initializeGame()` sets up event listeners for cell clicks and the restart button.
    -   It also sets the initial player and message.
-   **Cell Click Handling:**
    -   `cellClicked()` checks if the cell is empty and the game is running.
    -   If valid, it updates the cell and checks for a winner.
-   **Updating Cells:**
    -   `updateCell()` updates the `currBoard` array and the cell's text content.
-   **Player Switching:**
    -   `changePlayer()` switches the current player and updates the message.
-   **Winner Checking:**
    -   `checkWinner()` iterates through the `winCondition` array to check for winning combinations.
    -   If a win is detected, `highlightWinningCells()` is called, and the game ends.
    -   If no win and the board is full, a draw is declared.
-   **Restarting the Game:**
    -   `restart()` resets the board, player, and message, and removes the winning cell highlight.
-   **Highlighting Winning Cells:**
    -   `highlightWinningCells()` adds a class to the winning cells to change their appearence.
