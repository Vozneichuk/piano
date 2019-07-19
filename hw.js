const container = document.querySelector('#container');

function buttonDown(event){
  console.log(event)
  const buttonPressDown = event.keyCode;
  if(buttonPressDown){
    let audio = new Audio(`sound/${event.target.id}.mp3`);
    audio.play();
    audio.currentTime = 0;
    event.target.classList.add('scale');
  }
}
function buttonUp(event){
  const buttonPressUp = event.keyCode;
  if (buttonPressUp){
    event.target.classList.remove('scale');
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