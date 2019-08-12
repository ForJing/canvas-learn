export function captureMouse(element: HTMLElement) {
  const mouse = { x: 0, y: 0 };

  element.addEventListener("mousemove", function(e) {
    let x, y;

    x = e.pageX - element.offsetLeft;
    y = e.pageY - element.offsetHeight;

    mouse.x = x;
    mouse.y = y;
  });

  return mouse;
}
