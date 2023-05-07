const numberBtns =  document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const inputScreen = document.querySelector(`#input`);
const topScreen = document.querySelector(`#top`);
const clearBtn = document.querySelector(`#clear`);
const equalBtn = document.querySelector(`#equals`);
let operator;
let firstNum;
let secondNum;

numberBtns.forEach(btn => btn.addEventListener(`click`, () => {
    inputScreen.textContent = inputScreen.textContent + btn.textContent;
}));

clearBtn.addEventListener(`click`, () => {
    inputScreen.textContent = ``;
    topScreen.textContent = ``;
})

operatorBtns.forEach(btn => btn.addEventListener(`click`, () => {
    firstNum = +inputScreen.textContent;
    topScreen.textContent = btn.textContent + `   ` + inputScreen.textContent;
    inputScreen.textContent = ``;
    operator = btn.textContent;
    console.log(firstNum);
    console.log(operator);
}));

equalBtn.addEventListener(`click`, () => {
    secondNum = inputScreen.textContent;
    if (operator = `x`) {
        inputScreen.textContent = multipy(firstNum, secondNum);
        topScreen.textContent = ``;
    }
});

const multipy = (a, b) => {return a*b};