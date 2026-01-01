const X = 8;
const Y = 8;


let d, s, a, t;


function u_s(d, s, a) {
  const h = s[0]; let nh = undefined;

  if      (d === "left")  { nh = [ h[0] - 1, h[1] ];                       }
  else if (d === "right") { nh = [ h[0] + 1, h[1] ];                       }
  else if (d === "up")    { nh = [ h[0], h[1] - 1 ];                       }
  else if (d === "down")  { nh = [ h[0], h[1] + 1 ];                       }
  else                    { nh = [ h[0], h[1] ];     console.log("error"); }

  s.unshift(nh); return (nh[0] == a[0] && nh[1] == a[1]) ? undefined : s.pop();
}


s = [[0, 3], [1, 3], [2, 3], [2, 4], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5]];
a = [0, 5];
d = "down";
                                   draw_frame(document.getElementById('snake-1a'), s, a, true);
                                   draw_frame(document.getElementById('snake-1b'), s, a, true);
                                   draw_frame(document.getElementById('snake-1c'), s, a, true);

t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-2a'), s, a, true);
                                   draw_frame(document.getElementById('snake-2b'), s, a, true);
t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-3a'), s, a, true);
                                   draw_frame(document.getElementById('snake-3b'), s, a, true);

a = [1, 7]; d = "right";           draw_frame(document.getElementById('snake-4a'), s, a, true);
                                   draw_frame(document.getElementById('snake-4b'), s, a, true);

t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-5a'), s, a, true);
                                   draw_frame(document.getElementById('snake-5b'), s, a, true);
t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-6a'), s, a, true);

s.push(t); s.shift(); d = "down";  draw_frame(document.getElementById('snake-6b'), s, a, true);

t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-7a'), s, a, true);
                                   draw_frame(document.getElementById('snake-7b'), s, a, true);
t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-8'), s, a, true);

a = [7, 0];                        draw_frame(document.getElementById('snake-9a'), s, a, true);
                                   draw_frame(document.getElementById('snake-9b'), s, a, true);
t = u_s(d, s, a);                  draw_frame(document.getElementById('snake-10'), s, a, true);