window.addEventListener('load', start);
function start() {
  var red = document.querySelector('#rangeRed');
  var blue = document.querySelector('#rangeBlue');
  var green = document.querySelector('#rangeGreen');

  var inputRed = document.querySelector('#inputRed');
  var inputBlue = document.querySelector('#inputBlue');
  var inputGreen = document.querySelector('#inputGreen');

  var labelGreen = document.querySelector('#labelGreen');
  var labelRed = document.querySelector('#labelRed');
  var labelBlue = document.querySelector('#labelBlue');

  inputRed.value = red.value;
  inputBlue.value = blue.value;
  inputGreen.value = green.value;

  green.addEventListener('input', start);
  blue.addEventListener('input', start);
  red.addEventListener('input', start);

  inputRed.setAttribute('style', 'color: rgb(' + red.value + ',0,0)');
  labelRed.setAttribute('style', 'color: rgb(' + red.value + ',0,0)');
  inputGreen.setAttribute('style', 'color: rgb(0,' + green.value + ',0)');
  labelGreen.setAttribute('style', 'color: rgb(0,' + green.value + ',0)');
  inputBlue.setAttribute('style', 'color: rgb(0,0,' + blue.value + ')');
  labelBlue.setAttribute('style', 'color: rgb(0,0,' + blue.value + ')');

  var divColor = document.querySelector('#divColor');
  divColor.setAttribute(
    'style',
    'background-color: rgb(' +
      red.value +
      ',' +
      green.value +
      ',' +
      blue.value +
      ')'
  );
}
