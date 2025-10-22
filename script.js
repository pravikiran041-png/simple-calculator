const display = document.getElementById("display");

function append(value) {
  if(display.value === "0") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let sanitized = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    display.value = eval(sanitized);
  } catch {
    display.value = "Error";
    setTimeout(() => display.value = "", 1000);
  }
}