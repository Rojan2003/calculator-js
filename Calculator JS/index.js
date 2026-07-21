let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

// Add a click event to every button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let buttonValue = this.textContent;

    if (buttonValue === "=") {
      calculate();
    } 
    else if (buttonValue === "C") {
      clearDisplay();
    } 
    else {
      appendToDisplay(buttonValue);
    }
  });
});

// Adds text to the display
function appendToDisplay(value) {
  display.textContent += value;
}

// Clears the display
function clearDisplay() {
  display.textContent = "";
}

// Calculates the result
function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}