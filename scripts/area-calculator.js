function calculateTriangleArea(){
 //get triangle base value
 const baseField = document.getElementById('triangle-base');
 const baseValueText = baseField.value;
 const baseValue = parseFloat(baseValueText);
 
 //get triangle height value
 const heightField = document.getElementById('triangle-height');
 const heightValueText = heightField.value;
 const heightValue = parseFloat(heightValueText);

 const area = 0.5 * baseValue * heightValue;
 console.log(area)

 //show triangle area 
 const areaSpan = document.getElementById('triangle-area');
 areaSpan.innerText = area; 
}

function calculateRectangleArea(){
  //get rectangle width
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  //get rectangle length
   const lengthField = document.getElementById('rectangle-length');
   const lengthValueText = lengthField.value;
   const length = parseFloat(lengthValueText);
   console.log(length);

   //calculate rectangle area
   const area = width * length;
   console.log(area);

   //show rectangle area
   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}


//reusable function ---> reduce duplicate file
function calculateParallelogramArea (){
 const base = getInputValue('parallelogram-base');
 
 const height = getInputValue('parallelogram-height');

 const area = base * height;
 setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
  const majorRadius = getInputValue('ellipse-major-length');
  const minorRadius = getInputValue('ellipse-minor-length');
  const area = 3.14 * majorRadius * minorRadius;
  setElementInnerText('ellipse-area', area);
}

//reusable get input value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
const element = document.getElementById(elementId);
element.innerText = area;
}