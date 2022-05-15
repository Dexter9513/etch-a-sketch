const canvas = document.querySelector('canvas');
const buttons = document.querySelectorAll('button');
const ctx = canvas.getContext('2d');
const step = 5;

ctx.lineWidth = 1;
ctx.fillStyle = '#000';
ctx.lineCap = 'round';
ctx.beginPath();
let [lastX, lastY] = [50, 50];
ctx.moveTo(lastX, lastY);


function drawWithKeys(e) {
    if (e.key === 'ArrowUp') {
        lastY -= 1 * step;
    } else if (e.key === 'ArrowDown') {
        lastY += 1 * step;
    } else if (e.key === 'ArrowLeft') {
        lastX -= 1 * step;
    } else if (e.key === 'ArrowRight') {
        lastX += 1 * step;
    }
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
}

function draw() {
    const direction = this.dataset.direction;
    if (direction === 'up') {
        lastY -= 1 * step;
    } else if (direction === 'down') {
        lastY += 1 * step;
    } else if (direction === 'left') {
        lastX -= 1 * step;
    } else if (direction === 'right') {
        lastX += 1 * step;
    }
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
}

window.addEventListener('keydown', drawWithKeys);
buttons.forEach(button => {
    button.addEventListener('click', draw);
});