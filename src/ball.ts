import { parseColor } from "./utils";

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

class Ball {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  color;
  vx: number;
  vy: number;
  lineWidth: number;

  constructor(radius: number = 40, color: any = "#f00") {
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.vx = 0;
    this.vy = 0;
    this.color = parseColor(color);
    this.lineWidth = 1;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = parseColor(this.color);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
      context.stroke();
    }
    context.restore();
  }

  getBounds(): Rect {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      w: this.radius * 2,
      h: this.radius * 2
    };
  }
}

export default Ball;
