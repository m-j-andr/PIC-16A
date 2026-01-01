# PIC 16A - Snake

<p style="font-family:monospace;display:inline;">Click on the game to start... </p>
<canvas id="snake">This should be a canvas for playing Snake.</canvas><br>

<textarea id="code" rows="11" cols="78" style="font-family:monospace">def update_snake(direction, snake, apple):
    snake.insert(0, (snake[0][0] + 1, 4))</textarea>
<input type="button" value="Submit code" id="submit_button">

<script src="https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"></script>
<script src="snake-python.js" defer></script>
<script src="snake-logic.js" defer></script>
<script src="snake-draw-frame.js" defer></script>
<script src="snake-drawing.js" defer></script>