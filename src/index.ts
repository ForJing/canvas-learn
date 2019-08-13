import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  let angle = 0;
  // 椭圆 两个半径不同
  const radiusX = 150;
  const radiusY = 100;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const angleSpeed = 0.01

  function drawFrame() {
    requestAnimationFrame(drawFrame);
    const x = radiusX * Math.cos(angle) + centerX;
    const y = radiusY * Math.sin(angle) + centerY;

    context.beginPath();

    context.moveTo(centerX, centerY);
    context.lineTo(x, y);

    context.stroke();

    angle += angleSpeed;
  }

  drawFrame();
};
