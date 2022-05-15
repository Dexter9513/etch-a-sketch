const container = document.querySelector('.container');
const button = document.querySelector('button');
const originalPixelSize = 30;
const originalCanvasSize = 16;
let rainbow = true;


function createCanvas(size, sizeOfEachPixel) {
    // delete old canvas
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => container.removeChild(row));

    // draw new canvas
    for (i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < size; j++) {
            pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
    document.documentElement.style.setProperty('--padding', (sizeOfEachPixel - 2) / 2 + 'px');
    
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            // pixel.classList.add('fill')

            // rainbow fill
            pixel.style.background =back = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`
        });
    });
}

createCanvas(originalCanvasSize, originalPixelSize);

button.addEventListener('click', () => {
    newCanvasSize = prompt('Enter number of squares per side');
    if (newCanvasSize < 1 || newCanvasSize > 100) {
        alert('Must be between 1 and 100!');
        return;
    }
    const newPixelSize = originalCanvasSize * originalPixelSize / newCanvasSize;
    createCanvas(newCanvasSize, newPixelSize);
});
