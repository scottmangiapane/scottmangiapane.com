const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let height, width, fontSize, drawTimeout;

const mouse = { x: null, y: null };
let x1 = 0;
let x2 = 0;

const text = 'Hello, world!';
const binary = text.split('').map(c => c.charCodeAt(0).toString(2)).join('');

document.onmousemove = (event) => {
    mouse.x = event.clientX * 2;
    mouse.y = event.clientY * 2;
};

document.onmouseout = () => {
    mouse.x = null;
    mouse.y = null;
};

window.onresize = () => {
    clearTimeout(drawTimeout);
    drawTimeout = setTimeout(initialize, 100);
};

initialize();
requestAnimationFrame(frame);

function initialize() {
    height = canvas.height = window.innerHeight * 2;
    width = canvas.width = window.innerWidth * 2;
    fontSize = Math.max(width / 80, 12);
}

function frame() {
    requestAnimationFrame(frame);
    clearFrame();
    drawBinary();
    drawOverlay();

    x1 = width + (x1 + 1) % width;
    x2 = width + (x2 - 1) % width;
}

function clearFrame() {
    ctx.clearRect(0, 0, width, height);
}

function drawBinary() {
    ctx.font = fontSize + 'px "Roboto Mono"';
    ctx.globalCompositeOperation = 'source-over';

    for (let y = 0; y <= height / fontSize; y++) {
        for (let x = 0; x < width / fontSize; x++) {
            ctx.fillStyle = '#596e75';
            const drawX = (y % 2)
                ? (x1 + (x + y) * fontSize) % width
                : (x2 + (x - y) * fontSize) % width;
            const drawY = y * fontSize;
            if (isPointOnBorder(drawX, drawY, fontSize * 32)) {
                ctx.fillStyle = 'black';
            }
            if (doesPointIntersectMouse(drawX, null, fontSize / 2)) {
                ctx.fillStyle = '#da3436';
            }
            if (doesPointIntersectMouse(null, drawY, fontSize / 2)) {
                ctx.fillStyle = '#da3436';
            }
            ctx.fillText(binary[x % binary.length], drawX, drawY);
        }
    }
}

function drawOverlay() {
    ctx.font = '700 ' + width / 2 + 'px "Roboto Mono"';
    ctx.globalCompositeOperation = 'source-atop';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const palette = ['#86981c', '#32a198', '#2e8dd0', '#6d73c2'];
    for (let i = palette.length - 1; i >= 0; i--) {
        ctx.fillStyle = palette[i];
        const overlay = (new Date()).getMilliseconds() > 500 ? '>_' : '> ';
        ctx.fillText(overlay, width / 2 + fontSize * i, height / 2);
    }
}

function isPointOnBorder(x, y, delta) {
    const absX = Math.abs(width / 2 - x);
    const absY = Math.abs(height / 2 - y);
    return absX > delta || absY > delta;
}

function doesPointIntersectMouse(x, y, delta) {
    if (mouse.x && mouse.y) {
        const nearX = x === null || Math.abs(mouse.x - x) < delta;
        const nearY = y === null || Math.abs(mouse.y - y) < delta;
        return nearX && nearY;
    }
    return false;
}
