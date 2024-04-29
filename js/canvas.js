const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const maxFps = 45;
let lastRendered = Date.now();

let height, width, alpha, fontSize, fragments, drawTimeout;

let offset = 0;

const text = 'Hello, world!';
const binary = text.split('').map(c => c.charCodeAt(0).toString(2)).join('');

const colors = ['black', '#86981c', '#32a198', '#2e8dd0', '#6d73c2'];

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
    loadFragments();
}

function loadFragments() {
    fragments = [];
    for (let x = 0; x < width / fontSize; x++) {
        const fragment = new OffscreenCanvas(fontSize, height);
        const fragmentCtx = fragment.getContext('2d');
        fragmentCtx.font = fontSize + 'px "Roboto Mono"';
        fragmentCtx.globalCompositeOperation = 'source-over';
        for (let y = 0; y <= height / fontSize * 3 / 4; y++) {
            const drawY = y * fontSize;
            fragmentCtx.fillStyle = getColor(x, y);
            fragmentCtx.fillText(binary[y % binary.length], 0, drawY);
        }
        fragments.push(fragment);
    }
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
    ctx.globalAlpha = alpha;

    if (alpha < 1) {
        alpha += 0.05;
    }

    for (let i = 0; i < fragments.length; i++) {
        const drawX = i * fontSize;
        const drawY = (i % 2)
            ? mod(drawX * 8 + (i % 3 + 1) * offset, height)
            : mod(drawX * 8 - (i % 3 + 1) * offset, height);
        ctx.drawImage(fragments[i], drawX, drawY);
        ctx.drawImage(fragments[i], drawX, drawY - height);
    }
}

function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function getColor(a, b) {
    const entropy = a ^ b;
    if (entropy % 13 !== 0) return colors[0];
    return colors[entropy % colors.length];
}
