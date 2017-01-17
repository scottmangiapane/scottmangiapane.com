const display = document.getElementById("canvas");
const context = display.getContext("2d");
const mouse = Object({});

let displayHeight = display.height = window.innerHeight * 2;
let displayWidth = display.width = window.innerWidth * 2;
let blockSize = (displayWidth + displayHeight) / 40;
let maxSpeed = blockSize / 20;
let mouseRadius = 400;

const numberOfParticles = (displayWidth * displayHeight) / (3 * blockSize * blockSize);
const particles = [];

mouse.x = undefined;
mouse.y = undefined;

document.onmousemove = (event) => {
    mouse.x = event.clientX * 2;
    mouse.y = event.clientY * 2;
};

document.onmouseout = () => {
    mouse.x = undefined;
    mouse.y = undefined;
};

window.onresize = () => {
    displayWidth = display.width = window.innerWidth * 2;
    displayHeight = display.height = window.innerHeight * 2;
    blockSize = (displayWidth + displayHeight) / 40;
    maxSpeed = blockSize / 20;
};

for (let i = 0; i < numberOfParticles; i++) {
    let xVelocity = Math.random() * maxSpeed - maxSpeed / 2;
    let yVelocity = Math.random() * maxSpeed - maxSpeed / 2;
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
        if (distance < mouseRadius) {
            p.xPosition - mouse.x > 0 ? p.xVelocity += 0.5 : p.xVelocity -= 0.5;
            p.yPosition - mouse.y > 0 ? p.yVelocity += 0.5 : p.yVelocity -= 0.5;
            let color = parseInt(200 * distance / mouseRadius);
            let offset = (mouseRadius - distance) / 4;
            context.fillStyle = "rgba(" + color + " ," + color + ", " + color + ", 0.1)";
            context.rect(p.xPosition + offset / 2, p.yPosition + offset / 2, blockSize - offset, blockSize - offset);
        } else {
            if (p.xVelocity !== p.xVelocityBase)
                (p.xVelocity > p.xVelocityBase) ? p.xVelocity -= 0.5 : p.xVelocity += 0.5;
            if (p.yVelocity !== p.yVelocityBase)
                (p.yVelocity > p.yVelocityBase) ? p.yVelocity -= 0.5 : p.yVelocity += 0.5;
            context.fillStyle = "rgba(200, 200, 200, 0.1)";
            context.rect(p.xPosition, p.yPosition, blockSize, blockSize);
        }
        context.fill();
    });
}