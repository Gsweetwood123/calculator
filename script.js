const numberBtns =  document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const inputScreen = document.querySelector(`#input`);
const topScreen = document.querySelector(`#top`);
const clearBtn = document.querySelector(`#clear`);

numberBtns.forEach(btn => btn.addEventListener(`click`, () => {
    inputScreen.textContent = inputScreen.textContent + btn.textContent;
}));

clearBtn.addEventListener(`click`, () => {
    inputScreen.textContent = ``;
    topScreen.textContent = ``;
})

operatorBtns.forEach(btn => btn.addEventListener(`click`, () => {
    topScreen.textContent = btn.textContent + inputScreen.textContent;
    inputScreen.textContent = ``;
}));