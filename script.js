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
        alert("Limit: Maximum value for 'End' is 100,000 to protect browser performance.");
        end = 100000;
        document.getElementById('endVal').value = 100000;
    }

    clearContainer();
    const totalElements = end - start + 1;
    const sideSize = Math.ceil(Math.sqrt(totalElements));
    container.style.gridTemplateColumns = `repeat(${sideSize}, 1fr)`;

    const fragment = document.createDocumentFragment();

    for (let i = start; i <= end; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('box');

        const isFizz = i % fizzDiv === 0;
        const isBuzz = i % buzzDiv === 0;

        if (isFizz && isBuzz) {
            pixel.classList.add('fizzbuzz');
        } else if (isFizz) {
            pixel.classList.add('fizz');
        } else if (isBuzz) {
            pixel.classList.add('buzz');
        } else {
            pixel.classList.add('none');
        }

        fragment.appendChild(pixel);
    }

    container.appendChild(fragment);
};


btnGenerate.addEventListener('click', generatePattern);
btnClear.addEventListener('click', clearContainer);

document.addEventListener('DOMContentLoaded', generatePattern);