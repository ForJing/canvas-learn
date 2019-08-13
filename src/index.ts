import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const ball = new Ball();
  let angleX = 0;
  let angleY = 0;
  const range = 50;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const xspeed = 0.07;
  const yspeed = 0.11;

  (function drawFrame() {
    requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.x = centerX + Math.sin(angleX) * range;
    ball.y = centerY + Math.sin(angleY) * range;

    angleX += xspeed;
    angleY += yspeed;

    ball.draw(context);
  })();
};
