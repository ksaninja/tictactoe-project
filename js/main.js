
const swoosh = new Audio;
swoosh.src ="swoosh.mp3";
const sweesh = new Audio;
sweesh.src ="sweesh.mp3";



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

  function game(event) {
      console.log("clicked");
      $(event.target).off('click');
    }

if (ninjaplayer === true){
$(event.target).text('X')
}

 $('.box').on('click', game);
    
  const cells = document.querySelectorAll('.box');
  start();
  function start(){
 document.querySelector(".end").style.display="none";
  
  theboard=Array.from(Array(9).keys());

  for (let i=0;i<cells.length;i++){
      cells[i].innertext='';
      cells[i].style.removeProperty('background-color');
      cells[i].addEventListener('click',turnClick, false);
  }

  }
  
  function turnClick(bx){
    turn(bx.target.id, ninjaplayer);
}

function turn(bxId, player){
    theboard[bxId]=player;
    document.getElementById(bxId).innerText=player;
}

// function game(event){
//     console.log(event.target);
//     $(event.target).off('click');
// }