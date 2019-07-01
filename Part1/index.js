//variables
let board = []
let catsGame = true
//Functions


let play = (clickedId)=> {
    const playerSpan = document.getElementById(`player`)
    const clickedElement = document.getElementById(clickedId)
    if (clickedElement.innerText === `X` || 
        clickedElement.innerText === `O`) {
            alert(`Please reselect`)
            return}
    if (playerSpan.innerText === `X`) {
        playerSpan.innerText = `O`
        clickedElement.innerText = `X`
        board[clickedId] = 'X'
        if (board[0] === `X` && board[1] === `X` && board[2] === `X` ||
        board[3] === `X` && board[4] === `X` && board[5] === "X" ||
        board[6] === `X` && board[7] === `X` && board[8] === "X" ||
        board[0] === `X` && board[3] === `X` && board[6] === `X` ||
        board[1] === `X` && board[4] === `X` && board[7] === "X" ||
        board[2] === `X` && board[5] === `X` && board[8] === "X" ||
        board[0] === `X` && board[4] === `X` && board[8] === "X" ||
        board[2] === `X` && board[4] === `X` && board[6] === "X" ) {
            alert(`X Wins`) 
        }
  }
  else  {
      playerSpan.innerText = `X`
      clickedElement.innerText = `O`
      board[clickedId] = `O`
      if (board[0] === `O` && board[1] === `O` && board[2] === `O` ||
      board[3] === `O` && board[4] === `O` && board[5] === "O" ||
          board[6] === `O` && board[7] === `O` && board[8] === "O" ||
          board[0] === `O` && board[3] === `O` && board[6] === `O` ||
          board[1] === `O` && board[4] === `O` && board[7] === "O" ||
          board[2] === `O` && board[5] === `O` && board[8] === "O" ||
          board[0] === `O` && board[4] === `O` && board[8] === "O" ||
          board[2] === `O` && board[4] === `O` && board[6] === "O" ) {
              alert(`O Wins`) }
            }
        }
        // button
        let reset = () => {
            for(let i = 0;i <= 8; i++) {
                let restart = document.getElementById([i]) 
                restart.innerText = ``
            } 
            board = []
            console.log(board)
    }
        
        
        


