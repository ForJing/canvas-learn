import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  // const gradient = context.createLinearGradient(
  //   0,
  //   0,
  //   canvas.width,
  //   canvas.height
  // );
  // gradient.addColorStop(0, "#f00");
  // gradient.addColorStop(1, "rgba(255, 0, 0, 0.1)");

  // context.fillStyle = gradient;

  // context.fillRect(0, 0, canvas.width, canvas.height);

  const c1 = { x: 150, y: 150, radius: 30 };
  const c2 = { x: 150, y: 150, radius: 60 };
  const gradient = context.createRadialGradient(
    c1.x,
    c1.y,
    c1.radius,
    c2.x,
    c2.y,
    c2.radius
  );
  gradient.addColorStop(0.5, "blue");
  gradient.addColorStop(1, "green");
  context.fillStyle = gradient;
  context.arc(150, 150, 60, 0, Math.PI * 2);
  context.fill();
  context.arc(150, 150, 30, 0, Math.PI * 2)
  context.stroke()
};
