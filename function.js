function alertF(){
  alert("YAY");
}
function getCompResu(){
  let rand = Math.random();
  let result ;
  if (rand<.33){
    result = 1
    return result
  }
  else if (rand<.66){
    result = 2
    return result
  }
  else {
    result = 3
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

determWin(1,getCompResu());


const sci= document.getElementById("sci");
const rock= document.querySelector('#rock');
const pap = document.querySelector('#pap');
