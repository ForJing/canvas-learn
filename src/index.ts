import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  let angle = 0;
  const radius = 50;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const angleSpeed = 0.01;

  function drawFrame() {
    requestAnimationFrame(drawFrame);
    const x = radius * Math.cos(angle) + centerX;
    const y = radius * Math.sin(angle) + centerY;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();

    context.moveTo(centerX, centerY);
    context.lineTo(x, y);

    context.stroke();

    angle += angleSpeed;
  }

  drawFrame();
};
