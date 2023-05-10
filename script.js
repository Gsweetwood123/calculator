// Set variables
const allBtns = document.querySelectorAll(`button`);
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

allBtns.forEach(btn => btn.addEventListener(`mouseenter`, () => {
    btn.classList.add(`button_hover`);
}))

allBtns.forEach(btn => btn.addEventListener(`mouseout`, () => {
    btn.classList.remove(`button_hover`);
}))

allBtns.forEach(btn => btn.addEventListener(`mousedown`, () => {
    btn.style.transform = `scale(.9)`;
}))

allBtns.forEach(btn => btn.addEventListener(`mouseup`, () => {
    btn.style.transform = `scale(1)`;
}))

//Button functions
numberBtns.forEach(btn => btn.addEventListener(`click`, () => {
    if (inputScreen.textContent.length < 10) {
        inputScreen.textContent = inputScreen.textContent + btn.textContent;
    } else {
        return;
    }
}));

decimalBtn.addEventListener(`click`, () => {
    if (inputScreen.textContent.includes(`.`)) {
        return;
    } else {
        inputScreen.textContent = inputScreen.textContent + decimalBtn.textContent;
    }
})

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
    operatorBtns.forEach (btn => btn.disabled = true)
}));

equalBtn.addEventListener(`click`, () => {
    secondNum = +inputScreen.textContent;
    operatorBtns.forEach (btn => btn.disabled = false)
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
            topScreen.textContent = ``;
            break;
        case `-`:
            inputScreen.textContent = subtract(firstNum, secondNum);
            topScreen.textContent = ``;
            break;
        }
    });


//Operator functions
const multipy = (a, b) => {
    return a*b
};

const divide = (a,b) => {
    if (b === 0) {
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

window.addEventListener(`keypress`, (event) => {
    if (inputScreen.textContent.length < 10 && event.key < 10) {
        inputScreen.textContent = inputScreen.textContent + event.key
    } else {
        switch(event.key) {
            case `+` :
                firstNum = +inputScreen.textContent;
                topScreen.textContent = inputScreen.textContent + `   ` + event.key;
                inputScreen.textContent = ``;
                operator = event.key;
                operatorBtns.forEach (btn => btn.disabled = true)
                break;
            case `-` :
                firstNum = +inputScreen.textContent;
                topScreen.textContent = inputScreen.textContent + `   ` + event.key;
                inputScreen.textContent = ``;
                operator = event.key;
                operatorBtns.forEach (btn => btn.disabled = true)
                break;
            case `*` :
                firstNum = +inputScreen.textContent;
                topScreen.textContent = inputScreen.textContent + `   ` + `x`;
                inputScreen.textContent = ``;
                operator = `x`;
                operatorBtns.forEach (btn => btn.disabled = true)
                break;
            case `/` :
                firstNum = +inputScreen.textContent;
                topScreen.textContent = inputScreen.textContent + `   ` + event.key;
                inputScreen.textContent = ``;
                operator = event.key;
                operatorBtns.forEach (btn => btn.disabled = true)
                break;
            case `.`:
                if (inputScreen.textContent.includes(`.`)) {
                    return;
                } else {
                    inputScreen.textContent = inputScreen.textContent + decimalBtn.textContent;
                };
                break;
            case `Enter` :
                secondNum = +inputScreen.textContent;
                operatorBtns.forEach (btn => btn.disabled = false);
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
                        topScreen.textContent = ``;
                        break;
                    case `-`:
                        inputScreen.textContent = subtract(firstNum, secondNum);
                        topScreen.textContent = ``;
                        break;
                    }
                break;
    }
    }
})