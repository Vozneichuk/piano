const container = document.querySelector('#container');
const buttonKey = document.querySelectorAll('.buttonKey');

function buttonDown(event){
  console.log(event)
  const buttonPressDown = event.keyCode;
  for (let i = 0; i < buttonKey.length; i++){
    if(buttonPressDown == buttonKey[i].id){
      let audio = new Audio(`sound/${event.keyCode}.mp3`);
      audio.play();
      audio.currentTime = 0;
      buttonKey[i].classList.add('scale')
    }
  }
}
function buttonUp(event){
  const buttonPressUp = event.keyCode;
  for (let i = 0; i < buttonKey.length; i++){
    if (buttonPressUp == buttonKey[i].id){
      buttonKey[i].classList.remove('scale');
    }
  }
}




container.addEventListener('keydown', buttonDown) 
container.addEventListener('keyup', buttonUp)








function clickMouse (){
  const mouseClick = event.target.id;
  if(mouseClick){
    let audio = new Audio(`sound/${event.target.id}.mp3`);
    audio.play();
    audio.currentTime = 0;
    event.target.classList.add('scale');
  }
}
function unClickMouse(){
  const mouseUnClick = event.target.id;
  if(mouseUnClick){
    event.target.classList.remove('scale');
    console.log(event)
  }
}

container.addEventListener('mousedown', clickMouse)
container.addEventListener('mouseup', unClickMouse)