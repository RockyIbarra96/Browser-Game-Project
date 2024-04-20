const playerOneSymbol = "https://rockyibarra96.github.io/tictactoe/assets/images/xicon.png"
const playerTwoSymbol = "https://rockyibarra96.github.io/tictactoe/assets/images/Oicon.png"

let startBtn = document.getElementById('start-btn');
let howToBtn = document.getElementById('how-to-play-btn');
let gameGridItems = document.getElementsByClassName('grid-item');
let gameGridItemsArray = Array.from(gameGridItems);
let howToScreen = document.getElementById('how-to-screen');
let goBackBtn = document.getElementById('go-back-btn');
let winMessage = document.getElementById('winner-message');
let tieMessage = document.getElementById('draw-message');
let resultMessage = document.getElementById('result-message');
let loseMessage = document.getElementById('lose-message');

/*Congratulations Message */
function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Extract symbols from gameGridItemsArray
    let symbols = gameGridItemsArray.map(item => {
        if (item.querySelector('img')) {
            return item.querySelector('img').src;
        } else {
            return ''; // Empty cell
        }
    });

    // Check each winning combination
    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        console.log(symbols)
        // Check if all cells in the current combination have playerOneSymbol
        if (symbols[a] === playerOneSymbol && symbols[b] === playerOneSymbol && symbols[c] === playerOneSymbol) {
            resultMessage.style.display = 'block';
            winMessage.style.display = 'block';
            return true; // Player one has won
        }
        if (symbols[a] === playerTwoSymbol && symbols[b] === playerTwoSymbol && symbols[c] === playerTwoSymbol) {
            resultMessage.style.display = 'block';
            loseMessage.style.display = 'block';
            return true; // Player two has won
        }
        let counter = 0;
        for(let i = 0; i <= symbols.length; i++) {
            if(symbols[i] === (playerOneSymbol || playerTwoSymbol)) {
                counter = counter + 2;
                console.log(counter)
                if(counter >= 9) {
                    console.log('tie')
                    resultMessage.style.display = 'block';
                    tieMessage.style.display = 'block';
                }

            }
        }
        console.log(symbols.length)
    }
    return false; // Player one has not won
}



/*Start Up button and function */
function pageLoad(){
   
   /*Start Button to Game Grid */
    startBtn.addEventListener("click", () => {
        startBtn.style.display = 'none';
        howToBtn.style.display = 'none';
        for (let i = 0; i < gameGridItems.length; i++) {
            gameGridItems[i].style.display = 'block'; 
        }

    })

    /*How to Play Button */
    howToBtn.addEventListener("click", () => {
        howToBtn.style.display = 'none';
        startBtn.style.display = 'none';
        howToScreen.style.display = 'block';
        })
    /*Go Back Button functionality */
    goBackBtn.addEventListener("click", () => {
        howToScreen.style.display = 'none';
        startBtn.style.display = 'block';
        howToBtn.style.display = 'block';
    })

    
}
pageLoad()

function gamePlay(){
    gameGridItemsArray.forEach((item, index) => {
        item.addEventListener("click", () => {
            if(!item.querySelector('img')) {
                let currentPlayerSymbol;
                let p1Image = document.createElement('img');
                p1Image.src = 'assets/images/xicon.png';
                p1Image.style.width = '150px';
                p1Image.style.height = '150px';
                p1Image.style.position = 'relative';
                p1Image.style.left = '20%';
                p1Image.style.top = '10%';
                item.appendChild(p1Image);
                currentPlayerSymbol = playerOneSymbol;

                

                // Check if player one has won
                if (checkWin(currentPlayerSymbol) == true) {
                    console.log('Player One wins!');
                    

                    // Perform actions for player one winning
                    return; // Exit function to prevent player two's turn
                }

                let emptyGridItems = gameGridItemsArray.filter(item => !item.querySelector('img'));
                if(emptyGridItems.length > 0) {
                    let randomIndex = Math.floor(Math.random() * emptyGridItems.length);
                    let randomGridItem = emptyGridItems[randomIndex];
            
                    let p2Image = document.createElement('img');
                    p2Image.src = 'assets/images/Oicon.png';
                    p2Image.style.width = '120px';
                    p2Image.style.height = '120px';
                    p2Image.style.position = 'relative';
                    p2Image.style.left = '30%';
                    p2Image.style.top = '10%';
                    randomGridItem.append(p2Image);

                    currentPlayerSymbol = playerTwoSymbol;

                    // Check if player two has won
                    if (checkWin(playerTwoSymbol) == true) {
                        console.log('Player Two wins!');
                        // Perform actions for player two winning
                        return; // Exit function
                    }
                    
                }
            }
        })
    })
}

gamePlay();
