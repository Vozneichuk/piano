const container = document.querySelector('#container');
const btnA = container.querySelector('#key65');
const btnS = container.querySelector('#key83');
const btnD = container.querySelector('#key68');
const btnF = container.querySelector('#key70');
const btnG = container.querySelector('#key71');
const btnH = container.querySelector('#key72');
const btnJ = container.querySelector('#key74');
const btnK = container.querySelector('#key75');

const audio1 = new Audio('./sound/1.mp3');
const audio2 = new Audio('./sound/2.mp3');
const audio3 = new Audio('./sound/3.mp3');
const audio4 = new Audio('./sound/4.mp3');
const audio5 = new Audio('./sound/5.mp3');
const audio6 = new Audio('./sound/6.mp3');
const audio7 = new Audio('./sound/7.mp3');
const audio8 = new Audio('./sound/8.mp3');


const removeClassA = setInterval(() => {
  btnA.classList.remove('scale')
}, 300);
const removeClassS = setInterval(() => {
  btnS.classList.remove('scale')
}, 300);
const removeClassD = setInterval(() => {
  btnD.classList.remove('scale')
}, 300);
const removeClassF = setInterval(() => {
  btnF.classList.remove('scale')
}, 300);
const removeClassG = setInterval(() => {
  btnG.classList.remove('scale')
}, 300);
const removeClassH = setInterval(() => {
  btnH.classList.remove('scale')
}, 300);
const removeClassJ = setInterval(() => {
  btnJ.classList.remove('scale')
}, 300);
const removeClassK = setInterval(() => {
  btnK.classList.remove('scale')
}, 300);


container.addEventListener('click', function(){
  switch (event.target.id) {
    case 'key65':
      audio1.play();
      audio1.currentTime = 0;
      btnA.classList.add('scale');
      removeClassA;
      break;
    case 'key83':
      audio2.play();
      audio2.currentTime = 0;
      btnS.classList.add('scale');
      removeClassS;
      break;
    case 'key68':
      audio3.play();
      audio3.currentTime = 0;
      btnD.classList.add('scale');
      removeClassD;
      break;  
    case 'key70':
      audio4.play();
      audio4.currentTime = 0;
      btnF.classList.add('scale');
      removeClassF;
      break;
    case 'key71':
      audio5.play();
      audio5.currentTime = 0;
      btnG.classList.add('scale');
      removeClassG;
      break;
    case 'key72':
      audio6.play();
      audio6.currentTime = 0;
      btnH.classList.add('scale');
      removeClassH;
      break;
    case 'key74':
      audio7.play();
      audio7.currentTime = 0;
      btnJ.classList.add('scale');
      removeClassJ;
      break;
    case 'key75':
      audio8.play();
      audio8.currentTime = 0;
      btnK.classList.add('scale');
      removeClassK;
      break;  
    default:
      break;
  }
})

// Buttons sound

document.addEventListener('keydown', function(event){
  switch (event.keyCode){
    case 65:
      audio1.play();
      audio1.currentTime = 0;
      btnA.classList.add('scale');
      removeClassA;
      break;
    case 83:
      audio2.play();
      audio2.currentTime = 0;
      btnS.classList.add('scale');
      removeClassS;
      break;
    case 68:
      audio3.play();
      audio3.currentTime = 0;
      btnD.classList.add('scale');
      removeClassD;
      break;  
    case 70:
      audio4.play();
      audio4.currentTime = 0;
      btnF.classList.add('scale');
      removeClassF;
      break;
    case 71:
      audio5.play();
      audio5.currentTime = 0;
      btnG.classList.add('scale');
      removeClassG;
      break;
    case 72:
      audio6.play();
      audio6.currentTime = 0;
      btnH.classList.add('scale');
      removeClassH;
      break;
    case 74:
      audio7.play();
      audio7.currentTime = 0;
      btnJ.classList.add('scale');
      removeClassJ;
      break;
    case 75:
      audio8.play();
      audio8.currentTime = 0;
      btnK.classList.add('scale');
      removeClassK;
      break;  
    default:
      break;
  }
})
