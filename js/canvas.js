const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const maxFps = 50000;
let lastRendered = Date.now();

let height, width, alpha, fontSize, drawTimeout;

const mouse = { x: null, y: null };
let offset = 0;

const text = 'Hello, world!';
const binary = text.split('').map(c => c.charCodeAt(0).toString(2)).join('');

const colors = ['black', '#86981c', '#32a198', '#2e8dd0', '#6d73c2'];

document.onmousemove = (event) => {
    mouse.x = event.clientX * 2;
    mouse.y = event.clientY * 2;
};

document.onmouseout = () => {
    mouse.x = null;
    mouse.y = null;
};

window.addEventListener('resize', () => {
    clearTimeout(drawTimeout);
    drawTimeout = setTimeout(initialize, 100);
});

window.addEventListener('load', () => {
    initialize();
    requestAnimationFrame(frame);
});

function initialize() {
    height = canvas.height = window.innerHeight * 2;
    width = canvas.width = window.innerWidth * 2;
    alpha = 0;
    fontSize = Math.max(width / 100, 24);
}

function frame() {
    requestAnimationFrame(frame);
    const now = Date.now();
    if ((now - lastRendered) > (1000 / maxFps)) {
        clearFrame();
        drawBinary();
        offset = (offset + 1) % height;
        lastRendered = now;
    }
}

function clearFrame() {
    ctx.clearRect(0, 0, width, height);
}

function drawBinary() {
    ctx.font = fontSize + 'px "Roboto Mono"';
    ctx.globalAlpha = alpha;
    ctx.globalCompositeOperation = 'source-over';

    if (alpha < 1) {
        alpha += 0.01;
    }

    for (let y = 0; y <= height / fontSize * 3 / 4; y++) {
        for (let x = 0; x < width / fontSize; x++) {
            const drawX = x * fontSize;
            const drawY = (x % 2)
            ? mod(offset + (y + x * 8) * fontSize, height)
            : mod(-offset + (y - x * 8) * fontSize, height);
            ctx.fillStyle = getColor(x, y);
            ctx.fillText(binary[y % binary.length], drawX, drawY);
        }
    }
}

function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function getColor(a, b) {
    const entropy = Math.floor(a * b * lastRendered / 1000000);
    if (entropy % 13 !== 0) return colors[0];
    return colors[entropy % colors.length];
}
