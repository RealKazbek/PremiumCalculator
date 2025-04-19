"use strict";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
let premium = false;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (
            display.innerText === "No access!" ||
            display.innerText === "CRAZY)" ||
            display.innerText === "Get it!"
        ) {
            display.innerText = "0";
        }

        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                if (premium) {
                    try {
                        display.innerText = eval(display.innerText)
                            ? eval(display.innerText).toString().slice(0, 9)
                            : eval(passedText);
                    } catch (error) {
                        display.innerText = "CRAZY)";
                    }
                } else {
                    display.innerText = "No access!";
                }
                break;
            case "+/-":
                display.innerText = "-";
                break;
            case "%":
                if (premium) {
                    try {
                        let passedText = display.innerText + "/100";
                        display.innerText =
                            eval(passedText).length > 9
                                ? eval(display.innerText).toString().slice(0, 9)
                                : eval(passedText);
                    } catch (error) {
                        display.innerText = "CRAZY)";
                    }
                } else {
                    display.innerText = "No access!";
                }
                break;
            default:
                if (display.innerText.length > 9) {
                    return;
                } else if (
                    display.innerText === "0" &&
                    e.target.innerText !== "."
                ) {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }

        if (!premium && display.innerText === "20060207") {
            premium = true;
            console.log("You got the premium version!");
            display.innerText = "Get it!";
        }
    });
});
