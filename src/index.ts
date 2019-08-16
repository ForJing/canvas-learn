import "./style.scss";
import { captureMouse } from "./utils";
import Arrow from "./arrow";
import Ball from "./ball";

window.onload = function() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const img = new Image();
  img.src = require("./1.jpg");
  img.onload = function() {
    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, 100, 100);
  };
};
