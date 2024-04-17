const playerOneSymbol = "file:///Users/rockyibarra/UNLV/JavaScript-course/submissions-js/Browser-Game-Project/assets/images/xicon.png"
const playerTwoSymbol = "file:///Users/rockyibarra/UNLV/JavaScript-course/submissions-js/Browser-Game-Project/assets/images/Oicon.png"

let startBtn = document.getElementById('start-btn');
let howToBtn = document.getElementById('how-to-play-btn');
let gameGridItems = document.getElementsByClassName('grid-item');
let gameGridItemsArray = Array.from(gameGridItems);
let howToScreen = document.getElementById('how-to-screen');
let goBackBtn = document.getElementById('go-back-btn');


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
            console.log('flag')
            let winMessage = document.getElementById('winner-message');
            let resultMessage = document.getElementById('result-message');
            resultMessage.style.display = 'block';
            winMessage.style.display = 'block';
            return true; // Player one has won
        }
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
                    let winMessage = document.getElementById('winner-message');
                    winMessage.style.display = 'block';

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

                    // // Check if player two has won
                    // if (checkWin(playerTwoSymbol) == false) {
                    //     console.log('Player Two wins!');
                    //     // Perform actions for player two winning
                    //     return; // Exit function
                    // }
                    
                }
            }
        })
    })
}

gamePlay();











/*Loser Message */


/*Draw Message*/







/*Thoughts and Ideas*/
//I want the first thing the user to see is a start and how to play button.
//If the user clicks start then immediately launches game.
//if user clicks how to play then the how to play message comes up with directions on how to play game. 
//from the how to play message there is an option to start game as well. which launches game. 
// when game launches a tic-tac-toe grid will appear. 
// user is automatically Player one and assigned the 'X' and makes first move. 
// user should be able to use mouse and click on an open section of the grid to place an X. 
// once user places an X an "O" will appear on an open space on the grid and it will be the users turn again.
// this repeats until user wins/loses/or draws.
// user shouldn't be able to place an X on a tile with an O
// On all win/lose/draw messages there should be a button with "Start New Game" which launches new game. 

