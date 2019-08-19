import "./style.scss";
import { captureMouse, containsPoint } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const mouse = captureMouse(canvas);
  const ball = new Ball(20, Math.random() * 0xffffff);
  const easing = 0.005;

  let targetX = canvas.width / 2;
  let targetY = canvas.height / 2;

  let r = 255;
  let g = 0;
  let b = 0;

  let r2 = 0;
  let g2 = 0;
  let b2 = 255;

  function drawFrame() {
    requestAnimationFrame(drawFrame);

    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.x += (mouse.x - ball.x) * easing;
    ball.y += (mouse.y - ball.y) * easing;

    r += (r2 - r) * easing;
    g += (g2 - g) * easing;
    b += (b2 - b) * easing ;

    const color = (r << 16) | (g << 8) | b;
    ball.color = color;
    ball.draw(context);
  }

  drawFrame();
};
