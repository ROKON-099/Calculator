  let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";

    }
}
function deleteLast() {
  let display = document.getElementById("display");

  display.value = display.value.slice(0, -1);

  if (display.value === "") {
    display.value = "0";
  }
}