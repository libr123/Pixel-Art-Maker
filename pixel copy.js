// Select color input
var colorEl = document.getElementById("colorPicker");
// Select size input
var heightEl = document.getElementById("inputHeight");
var widthEl = document.getElementById("inputWidth");
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(evt) {
  evt.preventDefault()
  const height = heightEl.value;
  const width = widthEl.value;
  const color = colorEl.value;
  
  makeGrid(height, width);

});
//add addEventListener to color eatch cell
function makeGrid(height, width) {
  const mainElement = document.querySelector('#pixelCanvas');
  // Your code goes here!
  const tableElement = document.createElement('table');
  for (let i = 0; i < height; i++) {

    const trElement = document.createElement('tr');
    for (let x = 0; x < width; x++) {
      trElement.appendChild(document.createElement('td'));
      var button = document.querySelector("tr");

      trElement.addEventListener("click", function() {
          const curColour = trElement.style.backgroundColor;
      
          if (curColour === 'red') {
            trElement.style.backgroundColor = "blue";
          }
          else {
            trElement.style.backgroundColor = "red";
          }
      });


    }

    tableElement.appendChild(trElement);


    
  }
  mainElement.innerHTML = '';
  mainElement.appendChild(tableElement)
}