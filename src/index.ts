import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const mouse = captureMouse(canvas);

  function onMouseMove() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }

  canvas.addEventListener("mousedown", function() {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
    canvas.addEventListener("mousemove", onMouseMove, false);
  });

  canvas.addEventListener("mouseup", function() {
    canvas.removeEventListener("mousemove", onMouseMove);
  });
};
