// referencing HTML elements
let clearButton = document.getElementById('clear');
let output = document.getElementById('output');
let input = document.getElementById('name');

function generateText() {
  if (input.value) {
    output.innerHTML = 'Yo whats up ' + input.value;
    clearButton.hidden = false;
  }
}

function clearText() {
  output.innerHTML = '';
  input.value = '';
  clearButton.hidden = true;
}
