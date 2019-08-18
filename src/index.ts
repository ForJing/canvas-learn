import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const gravity = 0.5;
  const dedounce = -0.7;

  const ball = new Ball(20, Math.random() * 0xffffff);

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.vx = 8;
  ball.vy = 20;

  function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.vy += gravity;

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x + ball.radius >= canvas.width) {
      ball.x = canvas.width - ball.radius;
      ball.vx *= dedounce;
    } else if (ball.x - ball.radius <= 0) {
      ball.x = ball.radius;
      ball.vx *= dedounce;
    }

    if (ball.y + ball.radius >= canvas.height) {
      ball.y = canvas.height - ball.radius;
      ball.vy *= dedounce;
    } else if (ball.y - ball.radius <= 0) {
      ball.y = ball.radius;
      ball.vy *= dedounce;
    }

    ball.draw(context);

    requestAnimationFrame(drawFrame);
  }

  drawFrame();
};
