const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let diceImage = document.querySelector('.dice');

const roll=document.querySelector('.btn--roll');
const hold=document.querySelector('.btn--hold');
const newGame=document.querySelector('.btn--new');


let playing= true;
let current=0;
let playerActiv=0;//nis nga player 0;

let switchPlayer = function(){
    document.getElementById(`current--${playerActiv}`).textContent=0;
    current=0;
    playerActiv= playerActiv === 0? 1 : 0 ; 
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};


////////BUTONI ROLL/////////////////////////////////
roll.addEventListener('click', function(){
    if (playing){
    let dice = Math.trunc(Math.random()*6)+1
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png.jpg`;

    
    if(dice !== 1){
        current+=dice;
        document.getElementById(`current--${playerActiv}`).textContent=current;
        }else{
            switchPlayer();
        }
    }
});
/////////////////////////////////////////////////////// 
//////////////button Hold//////////////////////////////
let scores= [0, 0];

hold.addEventListener('click',()=>{
    if(playing){
        scores[playerActiv]+=current;
        document.getElementById(`score--${playerActiv}`).textContent=scores[playerActiv];

        if(scores[playerActiv] >= 100){
            //finish the game
            playing=false;
            document.querySelector(`.player--${playerActiv}`).classList.add('player--winner');
            document.querySelector(`.player--${playerActiv}`).classList.remove('player--active');
            dispatchEvent.classList.add('hidden');

        }else if(scores[playerActiv]>0){
            switchPlayer();
        }    
    }
});