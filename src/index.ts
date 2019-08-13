import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  let angle = 0;
  const range = 50;
  const centerY = canvas.height / 2;
  const xspeed = 1;
  const yspeed = 0.05;
  let xpos = 0;
  let ypos = centerY;

  (function drawFrame() {
    requestAnimationFrame(drawFrame);

    context.beginPath();
    context.moveTo(xpos, ypos);

    xpos += xspeed;
    angle += yspeed;
    ypos = centerY - Math.sin(angle) * range;
    context.lineTo(xpos, ypos);
    context.stroke();
  })();
};
