//Getting element from HTML
const dice = document.getElementById("dice");
const playermoves = document.getElementById("player-move");
const player1score = document.getElementById("player1-score");
const player2score = document.getElementById("player2-score");
const player1button = document.getElementById("player1-button");
const player2button = document.getElementById("player2-button");

// Start function

// header section
 const handlegamestart=()=>{
    const playerstart=Math.floor(Math.random()*2+1);
    updatemoves(playerstart === 1 ? "player-1" : "player-2" );
 };

 //Update move function
const updatemoves = (player) =>{
    playermoves.innerText=`${player} to play`;
    
//disabling the button based on the player
    if(player === "player-1")
    {
      player1button.disabled=false;
      player2button.disabled=true;

    }
    else{
         player1button.disabled=true;
          player2button.disabled=false;
    }
};


//Dice roll logic

const handleDiceRoll = (player) => {
   dice.classList.add("rotate");
   

    setTimeout(()=>{
    dice.classList.remove("rotate");
    const score=Math.floor(Math.random() * 6 + 1);
    dice.src=`assets/${score}.png`;

    if(player==="player-1"){
      updatemoves("player-2");
      updatescore(player,score,player1score);
     }
     else{
      updatemoves("player-1");
      updatescore(player,score,player2score);
     }

  },1000);
};

//update score logic

const updatescore=(player,score,playerscore)=>{
   const currentscore=playerscore.innerText;
   const totalscore=Number(currentscore)+score;
   playerscore.innerText = totalscore;
   checkgameover(totalscore,player);

}
const checkgameover=(totalscore,player) =>{
   if(totalscore >= 20)
   {
      player1button.disabled=true;
      player2button.disabled=true;
      playermoves.innerText=`${player} wins 😍`
   
   }

};

//reset the game


const handlereset=()=>{
   player1score.innerText=0;
   player2score.innerText=0;
     dice.src="assets/1.png";
      handlegamestart();
}