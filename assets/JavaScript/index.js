



/*Start Up button and function */
function startGame(){
   let startBtn = document.getElementById('start-btn');
   let howToBtn = document.getElementById('how-to-play-btn');
   let gameGridItems = document.getElementsByClassName('grid-item');
   let howToScreen = document.getElementById('how-to-screen');
    startBtn.addEventListener("click", () => {
        startBtn.style.display = 'none';
        howToBtn.style.display = 'none';
        for (let i = 0; i < gameGridItems.length; i++) {
            gameGridItems[i].style.display = 'block'; 
        }
    })
    howToBtn.addEventListener("click", () => {
        howToBtn.style.display = 'none';
        startBtn.style.display = 'none';
        howToScreen.style.display = 'block';
        })
}
startGame()

/*How to Play Button */


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

