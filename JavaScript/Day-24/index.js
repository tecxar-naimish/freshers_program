const space = {
    mercury: {
        gravity: 0.38,
        image: "mercury.png"
    },
    venus: {
        gravity: 0.91,
        image: "venus.png"
    },
    earth: {
        gravity: 1.0,
        image: "earth.png"
    },
    moon: {
        gravity: 0.167,
        image: "moon.png"
    },
    mars: {
        gravity: 0.38,
        image: "mars.png"
    },
    jupiter: {
        gravity: 2.34,
        image: "jupiter.png"
    },
    saturn: {
        gravity: 0.93,
        image: "saturn.png"
    },
    uranus: {
        gravity: 0.92,
        image: "uranus.png"
    },
    neptune: {
        gravity: 1.12,
        image: "neptune.png"
    },
    pluto: {
        gravity: 0.62,
        image: "pluto.png"
    }
}

let input = document.querySelector('input');
let select = document.querySelector('select');
let button = document.querySelector('button');
let container = document.querySelector('.container');

const contianerUI = (img, txt) => {
    let image = document.createElement('img');
    image.src = `Images/${img}`;

    let p = document.createElement('p');
    p.textContent = txt + ' N';
    p.className = 'big';

    container.appendChild(image);
    container.appendChild(p);
}

button.addEventListener('click', () => {
    container.innerHTML = '';
    let imgSrc = space[select.value].image;
    let weight = Number(input.value) * space[select.value].gravity * 9.81; 
    contianerUI(imgSrc, weight);
})
