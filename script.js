// Set variables
const numberBtns =  document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const inputScreen = document.querySelector(`#input`);
const topScreen = document.querySelector(`#top`);
const clearBtn = document.querySelector(`#clear`);
const equalBtn = document.querySelector(`#equals`);
const decimalBtn = document.querySelector(`#decimal`);
const percentBtn = document.querySelector(`#percent`);
const deleteBtn = document.querySelector(`#delete`);
let operator;
let firstNum;
let secondNum;


//Button functions
numberBtns.forEach(btn => btn.addEventListener(`click`, () => {
    inputScreen.textContent = inputScreen.textContent + btn.textContent;
}));


percentBtn.addEventListener(`click`, () => {
    inputScreen.textContent = (inputScreen.textContent / 100);
});

deleteBtn.addEventListener(`click`, () => {
    inputScreen.textContent = inputScreen.textContent.substring(0,inputScreen.textContent.length - 1);
})

clearBtn.addEventListener(`click`, () => {
    inputScreen.textContent = ``;
    topScreen.textContent = ``;
});

operatorBtns.forEach(btn => btn.addEventListener(`click`, () => {
    firstNum = +inputScreen.textContent;
    topScreen.textContent = inputScreen.textContent + `   ` + btn.textContent;
    inputScreen.textContent = ``;
    operator = btn.textContent;
}));

equalBtn.addEventListener(`click`, () => {
    secondNum = inputScreen.textContent;
    switch(operator) {
        case `x`:
            inputScreen.textContent = multipy(firstNum, secondNum);
            topScreen.textContent = ``;
            break;
            case `/`:
                inputScreen.textContent = divide(firstNum, secondNum);
                topScreen.textContent = ``;
                break;
                case `+`:
            inputScreen.textContent = add(firstNum, secondNum);
            firstNum = inputScreen.textContent;
            topScreen.textContent = ``;
            break;
            case `-`:
                inputScreen.textContent = subtract(firstNum, secondNum);
            firstNum = inputScreen.textContent;
            topScreen.textContent = ``;
            break;
        }
    });


//Operator functions
const multipy = (a, b) => {
    return a*b
};

const divide = (a,b) => {
    if (b === `0`) {
        return `Stop it.`;
    }
        return a/b;
};

const add = (a,b) => {
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
};