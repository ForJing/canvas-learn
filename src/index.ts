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

  const ballRect = ball.getBounds();

  canvas.addEventListener("mousemove", function() {
    if (containsPoint(ballRect, mouse.x, mouse.y)) {
      console.log("xixi");
    }
  });
};
