import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const mouse = captureMouse(canvas);
  const arrow = new Arrow();

  arrow.x = canvas.width / 2;
  arrow.y = canvas.height / 2;

  (function drawFrame() {
    requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const dx = mouse.x - arrow.x;
    const dy = mouse.y - arrow.y;

    arrow.rotation = Math.atan2(dy, dx);
    arrow.draw(context);
  })();
};
