import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const x0 = 100;
  const y0 = 200;
  const x2 = 300;
  const y2 = 200;

  const mouse = captureMouse(canvas);

  canvas.addEventListener("mousemove", function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const x1 = mouse.x * 2 - (x0 + x2) / 2;
    const y1 = mouse.y * 2 - (y0 + y2) / 2;
    context.beginPath();
    context.moveTo(x0, y0);
    context.fillRect(x1, y1, 10, 10);
    context.quadraticCurveTo(x1, y1, x2, y2);
    context.stroke();
  });
};
