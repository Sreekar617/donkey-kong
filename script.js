const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;

const playerSprites = new Image();
playerSprites.src = 'mario.png';

function startAnimation() {
    ctx.clearRect(0, 0, canvas_width, canvas_height)
    ctx.fillRect(50,50,100,100)
    requestAnimationFrame(startAnimation);
};
startAnimation();