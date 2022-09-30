const inputBill = document.getElementById("input__bill-input");
const inputPeople = document.getElementById("input__ppl-input");
// Active Tip %
// document.querySelector(".input__tip-grid-item--active").innerHTML.slice(0,-1)
const outputTip = document.getElementById("tip-output");
const outputTotal = document.getElementById("total-output");




function handleCalculations() {
    if (document.querySelectorAll(".input__tip-grid-item")[5].classList.contains("input__tip-grid-item--active") == true) {
        active = document.querySelector(".input__tip-grid-item--active input").value;
    } else {
        active = document.querySelector(".input__tip-grid-item--active").innerHTML.slice(0,-1);
    }
    total = parseInt(inputBill.value);
    total = total + (inputBill.value * (active * 0.01));
    return total;
}
function handleTotalSplitting() {
    return handleCalculations() / inputPeople.value;
}
function handleTipSplitting() {
    return (handleCalculations() - inputBill.value) / inputPeople.value;
}
function updateDisplay() {
    if (inputBill.value > 0 && inputPeople.value > 0) {
        outputTip.innerHTML = handleTipSplitting().toFixed(2);
        outputTotal.innerHTML = handleTotalSplitting().toFixed(2);
    } else {
        return;
    }
}
function handleCustomPercent() {
    handleCalculations()
}
inputBill.addEventListener("input", updateDisplay);
inputPeople.addEventListener("input", updateDisplay);
document.getElementById("input__tip-input").addEventListener("input", updateDisplay);
function handleReset() {
    document.location.reload();
}






function handleActiveTip(num) {
    document.querySelectorAll(".input__tip-grid-item").forEach(element => {
        element.classList.remove("input__tip-grid-item--active");
    })
    document.querySelectorAll(".input__tip-grid-item")[num].classList.add("input__tip-grid-item--active");
    updateDisplay()
}