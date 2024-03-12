const ac = document.getElementById("ac");
const back = document.getElementById("back");
const inputValue = document.getElementById("inputs");
const numbers = document.querySelectorAll(".number");
const equal = document.getElementById("equal");
const dot = document.getElementById("point");
const operators = document.querySelectorAll(".operator");

const allOperators = ["+", "-", "*", "/", "**"];

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (
      !allOperators.includes(
        inputValue.value.charAt(inputValue.value.length - 1)
      )
    ) {
      inputValue.value += e.currentTarget.textContent;
    }
  });
});

dot.addEventListener("click", () => {
  if (inputValue.value === "") {
    inputValue.value += "0.";
  } else if (inputValue.value.charAt(inputValue.value.length - 1) !== ".") {
    inputValue.value += ".";
  }
});

equal.addEventListener("click", () => {
  if (
    allOperators.includes(inputValue.value.charAt(inputValue.value.length - 1))
  ) {
    inputValue.value = eval(inputValue.value.slice(0, -1));
  } else {
    inputValue.value = eval(inputValue.value);
  }
});

ac.addEventListener("click", () => (inputValue.value = ""));

back.addEventListener(
  "click",
  () => (inputValue.value = inputValue.value.slice(0, -1))
);

numbers.forEach((e) =>
  e.addEventListener("click", () => (inputValue.value += e.textContent))
);
