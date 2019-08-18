import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  let balls = Array(300)
    .fill(0)
    .map(() => {
      const ball = new Ball(20);

      ball.x = Math.random() * canvas.width;
      ball.y = Math.random() * canvas.height;
      ball.vx = Math.random() * 2 - 1;
      ball.vy = Math.random() * 2 - 1;

      return ball;
    });

  function drawFrame() {
    requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // balls.forEach(ball => {
    //   ball.x += ball.vx;
    //   ball.y += ball.vy;

    //   if (
    //     ball.x - ball.radius > canvas.width ||
    //     ball.x + ball.radius < 0 ||
    //     ball.y + ball.radius < 0 ||
    //     ball.y - ball.radius > canvas.height
    //   ) {
    //     console.time("xixi");
    //     balls = balls.filter(i => i != ball);
    //     console.timeEnd("xixi");
    //   }

    //   ball.draw(context);
    // });

    for (let i = balls.length - 1; i >= 0; i--) {
      const ball = balls[i];
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (
        ball.x - ball.radius > canvas.width ||
        ball.x + ball.radius < 0 ||
        ball.y + ball.radius < 0 ||
        ball.y - ball.radius > canvas.height
      ) {
        console.time("xixi");
        balls.splice(i, 1);
        console.timeEnd("xixi");
      }

      ball.draw(context);
    }
  }

  drawFrame();
};
