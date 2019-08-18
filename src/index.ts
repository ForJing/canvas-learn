import "./style.scss";
import { captureMouse, containsPoint } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const mouse = captureMouse(canvas);
  const ball = new Ball(20, Math.random() * 0xffffff);

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
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseup", onMouseUp);
    }
  });

  function onMouseMove() {
    ball.x = mouse.x - offsetx;
    ball.y = mouse.y - offsety;
  }

  function onMouseUp() {
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseup", onMouseUp);
  }

  function drawFrame() {
    requestAnimationFrame(drawFrame);

    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw(context);
  }

  drawFrame();
};
