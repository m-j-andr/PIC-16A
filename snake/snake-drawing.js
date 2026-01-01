const canvas = document.getElementById('snake');

draw_frame(canvas, snake, apple, false);

canvas.addEventListener('click', function() {
  playing = !playing;
});




function play() {
  if (playing) {
    update_state();
  }

  draw_frame(canvas, snake, apple, false);
  setTimeout(play, period);
}

play();
