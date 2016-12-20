const radius = 100;

const display = document.getElementById("canvas");
let displayWidth = display.width = window.innerWidth * 2;
let displayHeight = display.height = window.innerHeight * 2;

const context = display.getContext("2d");

const mouse = [];

document.onmousemove = function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
};

document.onmouseout = function () {
    mouse.x = undefined;
    mouse.y = undefined;
};

window.onresize = function () {
    displayWidth = display.width = window.innerWidth * 2;
    displayHeight = display.height = window.innerHeight * 2;
};

const particles = [];

for (let i = 0; i < 200; i++)
    particles.push({
        xPosition: Math.random() * displayWidth,
        yPosition: Math.random() * displayHeight,
        xVelocity: (Math.random() * displayWidth - displayWidth / 2) / 500,
        yVelocity: (Math.random() * displayHeight - displayHeight / 2) / 500,
    });

requestAnimationFrame(frame);

function frame() {
    requestAnimationFrame(frame);
    context.clearRect(0, 0, displayWidth, displayHeight);
    particles.forEach(function (p) {
        p.xPosition += p.xVelocity;
        p.yPosition += p.yVelocity;
        if (p.xPosition - radius > displayWidth)
            p.xPosition = -radius;
        if (p.yPosition - radius > displayHeight)
            p.yPosition = -radius;
        if (p.xPosition < -radius)
            p.xPosition = displayWidth + radius;
        if (p.yPosition < -radius)
            p.yPosition = displayHeight + radius;
        context.beginPath();
        let distance = Math.sqrt(Math.pow(p.xPosition - mouse.x * 2, 2) + Math.pow(p.yPosition - mouse.y * 2, 2));
        if (distance < 400) {
            let c = parseInt(136 + 102 * distance / 400);
            context.fillStyle = "rgba(" + c + " ," + c + ", " + c + ", 0.6)";
            let offset = (400 - distance) / 8;
            context.rect(p.xPosition + offset / 2, p.yPosition + offset / 2, radius - offset, radius - offset);
        } else {
            context.fillStyle = "rgba(238, 238, 238, 0.6)";
            context.rect(p.xPosition, p.yPosition, radius, radius);
        }
        context.fill();
    });
}