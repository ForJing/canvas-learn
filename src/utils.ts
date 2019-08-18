export function captureMouse(element: HTMLElement) {
  const mouse = { x: 0, y: 0 };

  element.addEventListener("mousemove", function(e) {
    let x, y;

    x = e.pageX - element.offsetLeft;
    y = e.pageY - element.offsetTop;

    mouse.x = x;
    mouse.y = y;
  });

  return mouse;
}

export function colorToRGB(color, alpha?: number) {
  if (typeof color === "string" && color[0] === "#") {
    color = parseInt(color.slice(1), 16);
  }

  alpha = alpha === undefined ? 1 : alpha;

  // extract component value
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;
  const a = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;

  if (a === 1) {
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

export function parseColor(color, toNumber?: boolean) {
  if (toNumber) {
    if (typeof color === "number") {
      return color | 0;
    }
    if (typeof color === "string" && color[0] === "#") {
      color = color.slice(1);
      return parseInt(color, 16);
    }
  } else {
    if (typeof color === "number") {
      color = "#" + ("0000" + (color | 0).toString(16)).substr(-6);
    }
    return color;
  }
}
