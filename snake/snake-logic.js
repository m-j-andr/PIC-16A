let playing = false;
let period = 240;




let direction = "right";
let next_direction = "right";

document.addEventListener('keydown', function(e) {
  if      (e.key === "ArrowLeft")  { if (direction !== "right") { next_direction = "left";  } }
  else if (e.key === "ArrowRight") { if (direction !== "left")  { next_direction = "right"; } }
  else if (e.key === "ArrowUp")    { if (direction !== "down")  { next_direction = "up";    } }
  else if (e.key === "ArrowDown")  { if (direction !== "up")    { next_direction = "down";  } }
});

function update_direction() {
  direction = next_direction;
}




let X = 8;
let Y = 8;

function flat_idx(xy_pair) {
  return xy_pair[0] * X + xy_pair[1];
}

function get_random_int(Z) {
  return Math.floor(Math.random() * Z);
}




let snake = [];
const non_snake = new Set();
let apple = [0, 0];




function update_apple() {
  if (non_snake.size === 0) {
    playing = false;
    alert('YOU WON!');

    period = Math.max(period - 80, 40);

    X += 6;
    Y += 6;
    reset();
  }
  else {
    const k = non_snake.values();
    const j = get_random_int(non_snake.size);

    for (let i = 0; i < j; ++i) {
      k.next();
    }
    const val = k.next().value;

    apple[0] = Math.floor(val / X);
    apple[1] =            val % X;
  }
}




function reset() {
  direction = "right";
  next_direction = "right";


  while (snake.length > 0) { snake.pop(); }

  snake.push([ Math.floor(X / 4),
               Math.floor(Y / 2) ]);

  const head = snake[0];

  for (let x = head[0] - 1; x > 0; --x) {
    snake.push([x, head[1]]);
  }


  non_snake.clear();

  for (let idx = 0; idx < X * Y; ++idx) {
    non_snake.add(idx);
  }
  for (const s of snake) {
    non_snake.delete(flat_idx(s));
  }


  update_apple(apple);
}




reset();




// let update_snake = function(direction, snake, apple) {};




function update_non_snake(popped) {
  if (popped !== undefined) {
    non_snake.add(flat_idx(popped));
  }
  non_snake.delete(flat_idx(snake[0]));
}




function update_apple_if_necessary() {
  if (snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
    update_apple();
  }
}




function game_over() {
  const head = snake[0];

  if (head[0] < 0 || head[0] >= X) { return true; }
  if (head[1] < 0 || head[1] >= Y) { return true; }

  for (let i = 1; i < snake.length; ++i) {
    if (head[0] == snake[i][0] && head[1] == snake[i][1]) {
      return true;
    }
  }
  return false;
}




function update_state() {
  update_direction();
  update_non_snake(update_snake(direction, snake, apple));
  update_apple_if_necessary();

  if (game_over()) {
    playing = false;

    alert('GAME OVER!');
    reset();
  }
}
