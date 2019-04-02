Flow of tic tac toe with minmax AI

Initial function
Function startGame()
-create array for board record keeping
-hide endgame msg
-create event listener for all button. linked to function turnClick() 

Function turnClick()
-check if square is occupyied (if true)
    -call function turn()
    -check if game is won using Function checkWin() and Function checkTie(). if not call Function bestSpot() for aiPlayer

Function Turn()
-Append the ID of player to relevant array
-change board using getElementByID
-check if win by calling CheckWin()
    -if gamewon then call Function gameOver()

Function checkWin()
-find every position player inputted
-check if player has a winning combination counter checking with winCombo
-return null if no winner / return index and player if winning combination detected

Function checkTie()
-check if tie game return true and remove listener if true

Function gameOver()
-change display box to highlight winning combination
-remove listener function to prevent further change
-call Function declareWinner()

Function declareWinner()
-check box display to pop up game over sign and display winner name

Function bestSpot()
-return the result of Function miniMax()

Function miniMax()
-find the empty spots in array
-call checkWin() to determine and score move that lead to win lose or no spot avaliable. prioritises not letting player win over ai winning
-recursive call miniMax() to map out remaining spot of by loading a new board with moves filled in
-determin best move by checking best score
-return best move to turnClick()

await new clickEvent()
