const container = document.querySelector('#container');
// const btnA = container.querySelector('#key65');
// const btnS = container.querySelector('#key83');
// const btnD = container.querySelector('#key68');
// const btnF = container.querySelector('#key70');
// const btnG = container.querySelector('#key71');
// const btnH = container.querySelector('#key72');
// const btnJ = container.querySelector('#key74');
// const btnK = container.querySelector('#key75');




// const removeClassA = setInterval(() => {
//   btnA.classList.remove('scale')
// }, 250);
// const removeClassS = setInterval(() => {
//   btnS.classList.remove('scale')
// }, 250);
// const removeClassD = setInterval(() => {
//   btnD.classList.remove('scale')
// }, 250);
// const removeClassF = setInterval(() => {
//   btnF.classList.remove('scale')
// }, 250);
// const removeClassG = setInterval(() => {
//   btnG.classList.remove('scale')
// }, 250);
// const removeClassH = setInterval(() => {
//   btnH.classList.remove('scale')
// }, 250);
// const removeClassJ = setInterval(() => {
//   btnJ.classList.remove('scale')
// }, 250);
// const removeClassK = setInterval(() => {
//   btnK.classList.remove('scale')
// }, 250);


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




function buttonDown(){
  const buttonPressDown = event.target.id;
  if(buttonPressDown == event.keyCode){
    let audio = new Audio(`sound/${event.target.id}.mp3`);
    audio.play();
    audio.currentTime = 0;
    event.target.classList.add('scale');
    console.log(event)
  }
}
function buttonUp(){
  const buttonPressUp = event.target.id;
  if (buttonPressUp == event.keyCode){
    event.target.classList.remove('scale');
  }
}




document.addEventListener('keydown', buttonDown) 
document.addEventListener('keyup', buttonUp)



