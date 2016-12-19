const particleSize = 100;

const canvas = document.getElementById("canvas");
const canvasWidth = canvas.width = window.innerWidth * 2;
const canvasHeight = canvas.height = window.innerHeight * 2;

const context = canvas.getContext("2d");

const mouse = [];

document.onmousemove = function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
};

const particles = [];

for (let i = 0; i < 100; i++)
    particles.push({
        xPosition: Math.random() * canvasWidth,
        yPosition: Math.random() * canvasHeight,
        xVelocity: (Math.random() * canvasWidth - canvasWidth / 2) / 500,
        yVelocity: (Math.random() * canvasHeight - canvasHeight / 2) / 500,
    });

requestAnimationFrame(frame);

function frame() {
    requestAnimationFrame(frame);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    particles.forEach(function (p) {
        p.xPosition += p.xVelocity;
        p.yPosition += p.yVelocity;
        if (p.xPosition > canvasWidth)
            p.xPosition = -particleSize;
        if (p.yPosition > canvasHeight)
            p.yPosition = -particleSize;
        if (p.xPosition < -particleSize)
            p.xPosition = canvasWidth;
        if (p.yPosition < -particleSize)
            p.yPosition = canvasHeight;
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