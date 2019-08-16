import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const mouse = captureMouse(canvas);
  const arrow = new Arrow();
  const speed = 3;
  let lastTime = 0;

  function drawFrame(time = 0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const now = +new Date();
    const fps = 1000 / (now - lastTime);
    console.log(fps);
    lastTime = now;

    requestAnimationFrame(drawFrame);
    const dx = mouse.x - arrow.x;
    const dy = mouse.y - arrow.y;

    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    arrow.rotation = angle;
    arrow.x += vx;
    arrow.y += vy;
    arrow.draw(context);
  }

  drawFrame();
};
