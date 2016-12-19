const particleSize = 100;

const display = document.getElementById("canvas");
const displayWidth = display.width = window.innerWidth * 2;
const displayHeight = display.height = window.innerHeight * 2;

const context = display.getContext("2d");

const mouse = [];

document.onmousemove = function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
};

const particles = [];

for (let i = 0; i < 100; i++)
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
        if (p.xPosition > displayWidth)
            p.xPosition = -particleSize;
        if (p.yPosition > displayHeight)
            p.yPosition = -particleSize;
        if (p.xPosition < -particleSize)
            p.xPosition = displayWidth;
        if (p.yPosition < -particleSize)
            p.yPosition = displayHeight;
        context.beginPath();
        let distance = Math.sqrt(Math.pow(p.xPosition - mouse.x * 2, 2) + Math.pow(p.yPosition - mouse.y * 2, 2));
        if (distance < 400) {
            let c = parseInt(136 + 102 * distance / 400);
            context.fillStyle = "rgba(" + c + " ," + c + ", " + c + ", 0.8)";
            let offset = (400 - distance) / 4;
            context.rect(p.xPosition - offset / 2, p.yPosition - offset / 2, particleSize + offset, particleSize + offset);
        } else {
            context.fillStyle = "rgba(238, 238, 238, 0.8)";
            context.rect(p.xPosition, p.yPosition, particleSize, particleSize);
        }
        context.fill();
    });
}