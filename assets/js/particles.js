const display = document.getElementById("canvas");
const context = display.getContext("2d");

const blockSize = 100;
const mouse = Object({});

let displayHeight = display.height = window.innerHeight * 2;
let displayWidth = display.width = window.innerWidth * 2;

mouse.x = undefined;
mouse.y = undefined;

document.onmousemove = (event) => {
    if (window.innerWidth >= 550) {
        mouse.x = event.clientX * 2;
        mouse.y = event.clientY * 2;
    }
};

document.onmouseout = () => {
    if (window.innerWidth >= 550) {
        mouse.x = undefined;
        mouse.y = undefined;
    }
};

window.onresize = () => {
    if (window.innerWidth < 550) {
        mouse.x = window.innerWidth / 2;
        mouse.y = window.innerHeight / 2;
    }
    displayWidth = display.width = window.innerWidth * 2;
    displayHeight = display.height = window.innerHeight * 2;
};

const particles = [];

for (let i = 0; i < 200; i++) {
    let xVelocity = Math.random() * 6 - 3;
    let yVelocity = Math.random() * 6 - 3;
    particles.push({
        xPosition: Math.random() * displayWidth,
        yPosition: Math.random() * displayHeight,
        xVelocity: xVelocity,
        yVelocity: yVelocity,
        xVelocityBase: xVelocity,
        yVelocityBase: yVelocity,
    });
}

requestAnimationFrame(frame);

function frame() {
    requestAnimationFrame(frame);
    context.clearRect(0, 0, displayWidth, displayHeight);
    particles.forEach(function (p) {
        p.xPosition += p.xVelocity;
        p.yPosition += p.yVelocity;
        if (p.xPosition > displayWidth)
            p.xPosition = -blockSize;
        if (p.yPosition > displayHeight)
            p.yPosition = -blockSize;
        if (p.xPosition < -blockSize)
            p.xPosition = displayWidth;
        if (p.yPosition < -blockSize)
            p.yPosition = displayHeight;
        context.beginPath();
        let distance = Math.sqrt(Math.pow(p.xPosition - mouse.x, 2) + Math.pow(p.yPosition - mouse.y, 2));
        if (distance < 400) {
            p.xPosition - mouse.x > 0 ? p.xVelocity++ : p.xVelocity--;
            p.yPosition - mouse.y > 0 ? p.yVelocity++ : p.yVelocity--;
            let color = parseInt(136 + 102 * distance / 400);
            let offset = (400 - distance) / 8;
            context.fillStyle = "rgba(" + color + " ," + color + ", " + color + ", 0.6)";
            context.rect(p.xPosition + offset / 2, p.yPosition + offset / 2, blockSize - offset, blockSize - offset);
        } else {
            if (p.xVelocity !== p.xVelocityBase)
                (p.xVelocity > p.xVelocityBase) ? p.xVelocity-- : p.xVelocity++;
            if (p.yVelocity !== p.yVelocityBase)
                (p.yVelocity > p.yVelocityBase) ? p.yVelocity-- : p.yVelocity++;
            context.fillStyle = "rgba(238, 238, 238, 0.6)";
            context.rect(p.xPosition, p.yPosition, blockSize, blockSize);
        }
        context.fill();
    });
}