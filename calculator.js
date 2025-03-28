const display = document.querySelector(".display");
const resetButton = document.querySelector("#reset");
const numButton = document.querySelectorAll(".num");
const signButton = document.querySelectorAll(".sign");
const sign = document.querySelector("#plusMinus");
const result = document.querySelector("#result");

let valArr = [];
let resultString = "";

// Reset Button Functionality
resetButton.addEventListener("click", () => {
    display.textContent = "0";
    valArr.length = 0;
    resultString = "";
});

// Number Button Click Handler
numButton.forEach(button => {
    button.addEventListener("click", (e) => {
        valArr.push(e.target.textContent);
        display.textContent = valArr.join(""); // Fixed: Display full number sequence
    });
});

// Operator Button Click Handler
signButton.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent !== "=" && valArr.length > 0) {
            valArr.push(e.target.textContent);
            display.textContent = valArr.join(""); // Fixed: Display full equation
        }
    });
});

// Toggle Positive/Negative
sign.addEventListener("click", () => {
    if (valArr.length > 0) {
        let last = valArr.pop();
        if (!isNaN(last)) {
            last = (-1 * parseFloat(last)).toString(); // Fixed: Convert to negative number
        }
        valArr.push(last);
        display.textContent = valArr.join("");
    }
});

// Calculate Result
result.addEventListener("click", () => {
    resultString = valArr.join(""); // Fixed: Reset before calculation
    try {
        display.textContent = eval(resultString); // ⚠️ eval is risky, use carefully
        valArr = [display.textContent]; // Store result for further calculations
    } catch (error) {
        display.textContent = "Error";
        valArr = [];
    }
});
