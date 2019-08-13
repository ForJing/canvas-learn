import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const ball = new Ball();
  let angle = 0;
  const centerScale = 1;
  const range = 0.5;
  const speed = 0.05;

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;

  (function drawFrame() {
    requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range;
    angle += speed;
    ball.draw(context);
  })();
};
