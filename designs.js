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
function makeGrid(height, width) {
  const mainElement = document.querySelector('#pixelCanvas');
  const tableElement = document.createElement('table');
  for (let i = 0; i < height; i++) {
    const trElement = document.createElement('tr');
    for (let x = 0; x < width; x++) {
      trElement.appendChild(document.createElement('td'));
    }
//trying to apply color to the celll
    tableElement.appendChild(trElement);
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
  mainElement.innerHTML = '';
  mainElement.appendChild(tableElement)
}