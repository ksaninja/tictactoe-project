
const swoosh = new Audio;
swoosh.src = "swoosh.mp3";
const sweesh = new Audio;
sweesh.src = "sweesh.mp3";



//Declartion the variables
let playerOne = "X";
let playerTwo = "O";
let counter = 1;

//SA => 1,3,5
//S => 2,4,6

//  swal({
//    title: "you WON",
//    text: "you are amaaaazing!",
//    icon: "success",
//    button: "let's play again..!!",
//  });
//  $("#bt0").on("click",function(){
//alert ("wsw");
//  })

//   var theboard;
const ninjaplayer = true;
const samuraiplayer = false;
//   const win= [ 
//   [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]
//   ]

// function game(event) {
//   console.log(event.target);
//   $(event.target).off('click');

//   if (ninjaplayer === true) {
//     $(event.target).text('X')
//   }

// }

// $('.box').on('click', game);
// $(function () {
// });

// const cells = document.querySelectorAll('.box');
// start();
// function start() {
//   document.querySelector(".end").style.display = "none";

//   theboard = Array.from(Array(9).keys());

//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innertext = '';
//     cells[i].style.removeProperty('background-color');
//     cells[i].addEventListener('click', turnClick, false);
//   }

// }

// function turnClick(bx) {
//   turn(bx.target.id, ninjaplayer);
// }

// function turn(bxId, player) {
//   theboard[bxId] = player;
//   document.getElementById(bxId).innerText = player;
// }

// function game(event){
//     console.log(event.target);
//     $(event.target).off('click');
// }

// $(document).ready(function () {
//   $('.box').click(function () {
//     AddText();
//   });
// });

// function AddText() {
//   console.log('Added');
// };
let currentGame = {
  gameDone : false,
  currentPlayer:"",
};

function txtpop () {
// document.querySelector(".end").style.display ="block";
// document.querySelector(".end .text").innerText=txtpop;

}
function winning(){

  const box1=document.getElementById("0").innerText;
  const box2=document.getElementById("1").innerText;
  const box3=document.getElementById("2").innerText;
  const box4=document.getElementById("3").innerText;
  const box5=document.getElementById("4").innerText;
  const box6=document.getElementById("5").innerText;
  const box7=document.getElementById("6").innerText;
  const box8=document.getElementById("7").innerText;
  const box9=document.getElementById("8").innerText;
  if(box1 !== "" && box1 === box2 && box1 === box3)
  {
    currentGame.gameDone = true;
    currentGame.currentPlayer = box1;
  }
else if(box1 !=="" && box1 === box5 && box1 === box9)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box1;
}
else if(box1 !=="" && box1 === box4 && box1 === box7)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box1;
}
else if(box2!=="" && box2 === box5 && box2 === box8)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box2;
}
else if(box3 !=="" && box3 === box5 && box3 === box7)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box3;
}
else if(box3 !=="" && box3 === box6 && box3 === box9)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box3;
}
else if(box4 !=="" && box4 === box5 && box4 === box6)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box4;
}
else if(box7 !=="" && box7 === box8 && box7 === box9)
{
  currentGame.gameDone = true;
  currentGame.currentPlayer = box7;
}

if(currentGame.gameDone === true){
  setTimeout(function(){
    alert ("youuuu won " + currentGame.currentPlayer);
  },500);
  console.log("hudsaf")
  $(".box").off("click");

}
if (counter === 10 && currentGame.gameDone===false){
  alert (" TIE GAME .... Try again ^^ ");
  txtpop(winning.player == playerOne ? "Tie Game" : "You won");
}
}

//$("#bt1").on("click")

const start = function(){
  $(".box").text("");
  counter=1;
  currentGame.gameDone = false;
  $(".box").on("click",theboard);
}


// const bxs=document.querySelectorAll("#flxdiv"), N_or_S=0;
// for(let i =0;i<bxs.length;i++){
//   bxs[i].onclick=function(){
//     if (N_or_S %2 ===0)
//   }
// }






const theboard =function(event){
  if ( counter % 2 === 0 ){
    $(event.target).text(playerTwo)
  }
  else{
$(event.target).text(playerOne)

  }
  counter++;
  console.log(counter);
  
  $(event.target).off("click")
  winning();
};

$(".box").on("click",theboard);

$("#bt0").click(function(){
  $(".end").css("display","block").text("A simple TicTieToe Game, Ninja Theme... hope u enjoy it ^^.. " );

})



$("#bt0").on("mouseleave",function(){
  $(".end").css("display","none")

})

$("#bt1").click(function(){
  $(".strt").css("display","block")

})



$("#bt1").on("mouseleave",function(){
  $(".strt").css("display","none")

})


$("#bt5").click(function(){
 
  $(".end").css("display","block").text("It's All About the journey  ...     NOT the Destination .." );
})



$("#bt5").on("mouseleave",function(){
  $(".end").css("display","none")

})