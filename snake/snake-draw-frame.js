const P = 18;
const p = 7;


function draw_frame(canvas, snake, apple, show_grid) {
  canvas.width  = (2 * X + 1) * P;
  canvas.height = (2 * Y + 1) * P;


  const context = canvas.getContext('2d');


  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);


  context.fillStyle = 'yellow';
  context.fillRect((2 * apple[0] + 1) * P, (2 * apple[1] + 1) * P, P, P);


  context.fillStyle = 'white';

  for (let s of snake) {
    context.fillRect((2 * s[0] + 1) * P, (2 * s[1] + 1) * P, P, P);
  }

  for (let i = 1; i < snake.length; ++i) {
    const s0 = snake[i - 1];
    const s1 = snake[i];

    context.fillRect((s0[0] + s1[0] + 1) * P, (s0[1] + s1[1] + 1) * P, P, P);
  }


  if (show_grid) {
    context.fillStyle = 'white';

    for (let x = 0; x < X; ++x) {
      for (let y = 0; y < Y; ++y) {
        context.fillRect((2 * x + 1) * P + p, (2 * y + 1) * P + p, P - 2*p, P - 2*p);
      }
    }


    context.fillStyle = 'blue';

    for (let s of snake) {
      context.fillRect((2 * s[0] + 1) * P + p, (2 * s[1] + 1) * P + p, P - 2*p, P - 2*p);
    }


    context.fillStyle = 'green';
    context.fillRect((2 * apple[0] + 1) * P + p, (2 * apple[1] + 1) * P + p, P - 2*p, P - 2*p);
  }
}
