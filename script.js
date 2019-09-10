var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomColorBtn = document.getElementById('randomColorBtn');

setColors();

color1.addEventListener('input', setColors);
color2.addEventListener('input', setColors);
randomColorBtn.addEventListener('click', generatColors);

function setColors(){
    var linear =   document.body.style.background = "linear-gradient(to right, " 
       + color1.value 
       + ", " 
       + color2.value 
       + ")";
       css.textContent = linear + ';';
   }
   
  function generatColors() {
        var randomInt1 = getRandomColor();
        var randomInt2 = getRandomColor();
        var linear = document.body.style.background = 'linear-gradient(to right, '
        + randomInt1 + ', '
        + randomInt2 + ')';
        css.textContent = linear + ';'
        color1.value = randomInt1;
        color2.value = randomInt2;
  }
//   random hex color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }