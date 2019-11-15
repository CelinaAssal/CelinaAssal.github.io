function newStyle() {
  let newColor = '';
  let newFont = ''; 
  let x = Math.floor(Math.random()*7); 
  switch (x){
    case 0:
      newColor = 'red';
      newFont = 'Times New Roman'; 
      break;
    case 1: 
      newColor = 'blue';
      newFont = 'Florence, cursive'; 
      break;
    case 2:
      newColor = 'yellow';
      newFont = 'Verdana';
      break; 
    case 3:
      newColor= 'purple';
      newFont = 'Courier New';
      break
    case 4:
      newColor = 'cyan';
      newFont = 'Georgia'; 
      break;
    case 5:
        newColor = 'maroon';
        newFont = 'Palatino';
        break;
    case 6: 
        newColor = 'lime';
        newFont = 'Impact';
        break;
  }
  let elem = document.getElementById('logo');
  elem.style.color = newColor;
  elem.style.fontFamily = newFont; 
}

const marhaban = new Audio("Marhaban.m4a");
const kayfak = new Audio("Kayfak.m4a");
const shlonak = new Audio("Shlonak.m4a");
const shukranjazeelanlak = new Audio("ShukranJazeelanLak.m4a");
const shukranktir = new Audio("ShukranKtir.m4a");
const nem = new Audio("nem.m4a");
const ee = new Audio("ee.m4a");
const la = new Audio("la.m4a");
const yalla = new Audio("yalla.m4a");
const home = new Audio("GoingHome.m4a");
const school = new Audio("School.m4a");



audio.oncanplaythrough = function(){
  marhaban.play();
  kayfak.play();
  shlonak.play();
  shukranjazeelanlak.play();
  shukranktir.play();
  nem.play();
  ee.play();
  la.play();
  yalla.play();
  home.play();
  school.play();
  }
