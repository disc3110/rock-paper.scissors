const compChoice = document.getElementById("computersChoice");
const CCImg = document.getElementById('CCImg');
function scigame(){
  compChoice.style.display= 'block'
  determWin(1,getCompResu());
}
function papergame(){
  determWin(2,getCompResu());
}
function rockgame(){
  determWin(3,getCompResu());
}
function getCompResu(){
  let rand = Math.random();
  let result ;
  if (rand<.33){
    CCImg.src = "./images/scissors.jpeg";
    result = 1
    return result
  }
  else if (rand<.66){
    result = 2
    CCImg.src = "./images/paper.jpeg";
    return result
  }
  else {
    result = 3
    CCImg.src = "./images/rock.jpeg";
    return result
  }
}
function determWin(u,c){
    if (c==u) {
      alert("It is a tie");
    }
    else if (u==1) {
      switch (c) {
        case 2:
            alert("You won");
            break;
          case 3:
            alert("Computer won");
            break;
          default:
          alert("Smth is wrong");
        }
    }
    else if (u==2) {
        switch (c) {
          case 1:
            alert("Computer won");
            break;
          case 3:
            alert("You won");
            break;
          default:
            alert("Smth is wrong");
          }
        }
    else if (u==3) {
          switch (c) {
            case 1:
              alert("Computer won");
              break;
            case 2:
              alert("You won");
              break;
            default:
              alert("Smth is wrong");
            }
      }
      else {alert("Smth is wrong");}
}


const sci= document.getElementById("sci");
const rock= document.querySelector('#rock');
const pap = document.querySelector('#pap');

sci.addEventListener('click',scigame);
pap.addEventListener('click',papergame)
rock.addEventListener('click',rockgame);
