const container = document.getElementById('container');
const btnGenerate = document.getElementById('btnGenerate');
const btnClear = document.getElementById('btnClear');

const clearContainer = () => {
    container.innerHTML = '';
};

const generatePattern = () => {
    let start = parseInt(document.getElementById('startVal').value);
    let end = parseInt(document.getElementById('endVal').value);
    const fizzDiv = parseInt(document.getElementById('fizzVal').value) || 3;
    const buzzDiv = parseInt(document.getElementById('buzzVal').value) || 5;

    if (isNaN(start) || isNaN(end)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (end < start) {
        alert("Error: 'End' cannot be less than 'Start'!");
        return;
    }

    if (end > 100000) {
        alert("Limit: Maximum value is 100000.");
        end = 100000;
        document.getElementById('endVal').value = 100000;
    }

    clearContainer();
    const totalElements = end - start + 1;
    const sideSize = Math.ceil(Math.sqrt(totalElements));
    container.style.gridTemplateColumns = `repeat(${sideSize}, 1fr)`;

    let fontSize = "0.8rem";
    if (sideSize > 15) fontSize = "0.5rem";
    if (sideSize > 30) fontSize = "0.2rem";

    const fragment = document.createDocumentFragment();

    for (let i = start; i <= end; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('box');
        pixel.id = "myid" + i;
        pixel.style.fontSize = fontSize;

        const isFizz = i % fizzDiv === 0;
        const isBuzz = i % buzzDiv === 0;

        if (isFizz && isBuzz) {
            pixel.classList.add('fizzbuzz');
            if (end <= 100) pixel.innerText = "FizzBuzz";
            else if (end <= 400) pixel.innerText = i;
        } else if (isFizz) {
            pixel.classList.add('fizz');
            if (end <= 100) pixel.innerText = "Fizz";
            else if (end <= 400) pixel.innerText = i;
        } else if (isBuzz) {
            pixel.classList.add('buzz');
            if (end <= 100) pixel.innerText = "Buzz";
            else if (end <= 400) pixel.innerText = i;
        } else {
            pixel.classList.add('none');
            if (end <= 400) pixel.innerText = i;
        }

        fragment.appendChild(pixel);
    }

    container.appendChild(fragment);
};

btnGenerate.addEventListener('click', generatePattern);
btnClear.addEventListener('click', clearContainer);

document.addEventListener('DOMContentLoaded', generatePattern);