const playerOne = 'x'
const playerTwo = 'o'

let startBtn = document.getElementById('start-btn');
let howToBtn = document.getElementById('how-to-play-btn');
let gameGridItems = document.getElementsByClassName('grid-item');
let gameGridItemsArray = Array.from(gameGridItems);
let howToScreen = document.getElementById('how-to-screen');
let goBackBtn = document.getElementById('go-back-btn');


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

    gameGridItemsArray.forEach((item) => {
        item.addEventListener("click", () => {
            if(!item.querySelector('img')) {
                let image = document.createElement('img');
                image.src = 'assets/images/xicon.png';
                image.style.width = '150px';
                image.style.height = '150px';
                image.style.position = 'relative';
                image.style.left = '20%';
                image.style.top = '10%';
                item.appendChild(image);
            }
        })
    })
}
pageLoad()




/*Congratulations Message */


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

