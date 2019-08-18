import "./style.scss";
import { captureMouse, containsPoint } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const mouse = captureMouse(canvas);
  const ball = new Ball(20, Math.random() * 0xffffff);

  let isMouseDown = false;
  let oldX;
  let oldY;

  let vx = 0;
  let vy = 0;

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;

  ball.draw(context);

  let offsetx = 0;
  let offsety = 0;

  canvas.addEventListener("mousedown", function() {
    const ballRect = ball.getBounds();

    if (containsPoint(ballRect, mouse.x, mouse.y)) {
      offsetx = mouse.x - ball.x;
      offsety = mouse.y - ball.y;
      isMouseDown = true;
      oldX = ball.x;
      oldY = ball.y;
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseup", onMouseUp);
    }
  });

  function onMouseMove() {
    ball.x = mouse.x - offsetx;
    ball.y = mouse.y - offsety;
  }

  function onMouseUp() {
    isMouseDown = false;
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseup", onMouseUp);
  }

  function trackVelocity() {
    vx = ball.x - oldX;
    vy = ball.y - oldY;
    oldX = ball.x;
    oldY = ball.y;
  }

  function drawFrame() {
    requestAnimationFrame(drawFrame);

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (isMouseDown) {
      trackVelocity();
    } else {
      ball.x += vx;
      ball.y += vy;
    }

    ball.draw(context);
  }

  drawFrame();
};
