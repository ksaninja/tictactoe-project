
const swoosh = new Audio;
swoosh.src = "swoosh.mp3";
const sweesh = new Audio;
sweesh.src = "sweesh.mp3";



//Declartion the variables
let playerOne = "NINJA";
let playerTwo = "SAMURAI";
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
  let currentGame = {
    gameDone : false,
    currentPlayer:""
  };
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
else if(box3 !=="" && box3 === box6 && box1 === box9)
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

  $(".box").off("click");

}
}

$("#bt1").on("click",function(){
  $(".box").text("");
  $(".box").on("click",winning());
})


// const bxs=document.querySelectorAll("#flxdiv"), N_or_S=0;
// for(let i =0;i<bxs.length;i++){
//   bxs[i].onclick=function(){
//     if (N_or_S %2 ===0)
//   }
// }



$(".box").on("click",function(event){
  if ( counter % 2 === 0 ){
    $(event.target).text(playerTwo)
  }
  else{
$(event.target).text(playerOne)

  }
  console.log(counter);
  counter++;
  
  $(event.target).off("click")
  winning();
});

