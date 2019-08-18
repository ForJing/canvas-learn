import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const gravity = 0.5;

  let balls = Array(180)
    .fill(0)
    .map(() => {
      const ball = new Ball(2, Math.random() * 0xffffff);

      ball.x = canvas.width / 2;
      ball.y = canvas.height;
      ball.vx = Math.random() * 2 - 1;
      ball.vy = Math.random() * -10 - 10;
      return ball;
    });

  function drawFrame() {
    requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {
      ball.vy += gravity;
      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.draw(context);

      if (
        ball.x - ball.radius > canvas.width ||
        ball.x + ball.radius < 0 ||
        ball.y - ball.radius > canvas.height ||
        ball.radius + ball.x < 0
      ) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height;
        ball.vx = Math.random() * 2 - 1;
        ball.vy = Math.random() * -10 - 10;
      }
    });
  }

  drawFrame();
};
