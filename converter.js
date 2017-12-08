// create variables for html ID's
let temp = document.getElementById("temp");
let switchToF = document.getElementById("switchToF");
let switchToC = document.getElementById("switchToC");
let converterRadio = document.getElementById("converterRadio");
let clearRadio = document.getElementById("clearRadio");
let resultAmount = document.getElementById("resultAmount");

// make a fahrenheit function to take celsius input and convert to fahrenheit
function toFahrenheit () {  
  let convertedTempValue = (temp.value * 1.8) + 32;
  if (convertedTempValue > 90) {
    resultAmount.style.color = "blue";

  } else {
    resultAmount.style.color = "green";
  }; 
  
  console.log(convertedTempValue, temp.value);
  // send the reslut to DOM
  resultAmount.innerHTML = convertedTempValue;

}

// make a celsius function to take fahrenheit input and convert to celsius
function toCelsius () {
    let convertedTempValue = (temp.value - 32) * .5556;
    if (convertedTempValue > 32) {
      resultAmount.style.color = "red";

// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
// **DO NOT MAKE AN ELSE IF STATEMENT IF IT IS BINARY**
    } else {
      resultAmount.style.color = "green";
    };
    resultAmount.innerHTML = convertedTempValue;
}
    

// create a function to determine the input value.
function determineConverter () {
  if (switchToF.checked) { 
    toFahrenheit(temp.value);
        
  } else   { 
    toCelsius(temp.value);
  };
    
}
      

function clearContents () {
      temp.value = " ";
}
// add event listeners for the convert and clear buttons
    converterRadio.addEventListener("click",determineConverter);
    clearRadio.addEventListener("click", clearContents);
    
    // Get a reference to the button element in the DOM
    // var button = document.getElementById("converter");
    // var button = document.getElementById("clear");
    
    // This function should determine which conversion should
    // happen based on which radio button is selected.
    // function determineConverter (clickEvent) {
    //   console.log("event", clickEvent);
    // }
    
    // // Assign a function to be executed when the button is clicked
    // button.addEventListener("click", determineConverter);