const layar = document.querySelector(".screen");
const papanKalkulator = document.querySelector(".calculator-body");

papanKalkulator.addEventListener("click", function (event) {
    if (event.target.tagName !== "INPUT") return;

    if (event.target.classList.contains("action-clear")) {
        layar.innerText = "";
        return;
    }

    if (event.target.classList.contains("action-backspace")) {
        layar.innerText = layar.innerText.toString().slice(0, -1);
        return;
    }

    if (event.target.classList.contains("action-evaluate")) {
        try {
            layar.innerText = eval(layar.innerText);
        } catch (err) {
            layar.innerText = "Error";
        }
        return;
    }

    if (event.target.classList.contains("action-sin")) {
        let result = Math.sin(degreesToRadians(parseFloat(layar.innerText)));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-cos")) {
        let result = Math.cos(degreesToRadians(parseFloat(layar.innerText)));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-tan")) {
        let result = Math.tan(degreesToRadians(parseFloat(layar.innerText)));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("percent")) {
        let result = percentage(parseFloat(layar.innerText));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-log")) {
        let result = Math.log10(parseFloat(layar.innerText));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-sqrt")) {
        let result = Math.sqrt(parseFloat(layar.innerText));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-square")) {
        let result = Math.pow(parseFloat(layar.innerText), 2);
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-exp")) {
        let result = Math.exp(parseFloat(layar.innerText));
        layar.innerText = limitDecimal(result);
        return;
    }

    if (event.target.classList.contains("action-factorial")) {
        let value = parseInt(layar.innerText);
        let result = factorial(value);
        layar.innerText = result;
        return;
    }

    layar.innerText += event.target.value;
});

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function limitDecimal(value) {
    return parseFloat(value.toFixed(7));
}

function percentage(value) {
    return value * (1 / 100);
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
