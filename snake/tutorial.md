# PIC 16A - Snake




## A Brief History of Snake


You might have played the game
[Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)#/media/File:Snake_can_be_completed.gif){:target="_blank"}.
It was difficult to talk to a 12-year-old in the year 2000 because they would be playing Snake on
"The Unbreakable" [Nokia 3310](https://en.wikipedia.org/wiki/Nokia_3310){:target="_blank"}.
Coding this game from scratch is challenging because
one has to handle both the logic of the game and the graphics.
The way that all the pieces fit together is a bit like a jigsaw.
In this exercise, someone has put together most of the pieces for you.
However, they have purposefully left out one of the most important pieces
so that you can experience the satisfaction of coding it yourself
to finish the creation of a fully working game of Snake.


The idea of the version of Snake you will code is simple to describe.
 - A snake moves around the screen and grows whenever it eats an apple.
 - The snake is not allowed to hit the walls or eat itself;
   doing so leads to "GAME OVER".
 - The goal is to direct the snake around the playing area
   so that it grows until there is no more room to play.




## Your Task


Your task is to correctly write a function called `update_snake`
that performs a crucial calculation during the gameplay.
This function has three parameters.

 - `direction`
   - This parameter is a *string* which records the direction the snake is supposed to move.
   - We can use the values `"left"`, `"right"`, `"up"`, and `"down"` when calling the function.
 - `snake`
   - This parameter records the current position of the snake as a *list*.
   - Valid *list* arguments store positions that comprise a snake in the playing area.
   - Each position is stored as a *tuple* of two *int* coordinates.
 - `apple`
   - This parameter records
     the current position of the apple
     as a *tuple* of two *int* coordinates.
   - Valid *tuple* arguments will specify a position in the playing area.


To demonstate what this function needs to do, it is quickest to
specify the output that some code using the function must produce.
However, we will need to talk carefully about this code so that
you can see why the function needs to perform this way,
and how it fits into the whole jigsaw that makes Snake work.
The following code and its output will originally look overwhelming,
but once we have explained step-by-step what it would accomplish
during the playing of the game, it will seem much less intimidating.
Once you understand the role of `update_snake`,
you can attempt to define this function correctly,
and submit your definition of it [here](submit.md){:target="_blank"}.


<br>


### Code using `update_snake`

```python
snake = [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]

print(" " * 48, snake)

apple = (0, 5)
direction = "down"

popped = update_snake(direction, snake, apple);  print(" " * 40, snake, " " *  6, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " * 32, snake, " " *  7, popped, " " * 5, apple)

apple = (1, 7)
direction = "right"

popped = update_snake(direction, snake, apple);  print(" " * 24, snake, " " * 14, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)

snake.append(popped); snake.pop(0);              print(" " * 24, snake)

direction = "down"

popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " *  8, snake, " " * 23, popped, " " * 5, apple)

apple = (7, 0)

popped = update_snake(direction, snake, apple);  print(" " *  0, snake, " " * 30, popped, " " * 4, apple)
```


<br>


### The output that should be produced by the code using `update_snake`

```
                                                [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
                                        [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]        (7, 5)      (0, 5)
                                [(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]         None       (0, 5)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]                (6, 5)      (1, 7)
                [(2, 5), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
                [(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
        [(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                         None       (1, 7)
[(1, 8), (1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5)]                                (4, 5)      (7, 0)
```

That looks a little hectic! Please bear with me as I explain what is going on.
You can download the code [here](./snake.py).




## The first six lines of code: how game states are stored


### The variable `snake`

The first line of the code says...
```
snake = [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
```
This *list* corresponds to the snake in the following image.

<canvas id="snake-1a">This should be a canvas describing Snake.</canvas>

 - The *list* contains 10 *tuples* and you can see 10 blue dots in the snake.
 - The playing area is built on an 8-by-8 grid.
   - `x`-coordinates on the grid go from `0` to `7` and take us from left to right.
   - `y`-coordinates on the grid go from `0` to `7` and take us down the image.<br>
     **NOTE.** This may be the opposite to what you expect.
   - The top-left position in the grid is described by the *tuple* `(0, 0)`.
   - The bottom-right position in the grid is described by the *tuple* `(7, 7)`.
 - The first element in the *list* is `(0, 3)`.
   - Start at the top-left.
   - Move down by 3 grid positions.
   - You are now at the *head* of the snake.
 - The last element in the *list* is `(7, 5)`.
   - Start at the bottom-right.
   - Move up by 2 grid positions.
   - You are now at the *tail* of the snake.
 - The grid points between the head and the tail are described by
   `(1, 3)`, `(2, 3)`, `(2, 4)`, `(2, 5)`,
   `(3, 5)`, `(4, 5)`, `(5, 5)`, `(6, 5)`.
   You should check that all these points make sense to you.
 - As another example consider `(4, 5)`.
   - Start at the top-left.
   - Move right by 4 grid positions.
   - Move down by 5 grid positions.
   - You find yourself within the snake.
   - There are three blue points to the right.
     That is because `(5, 5)`, `(6, 5)`, `(7, 5)`
     come after `(4, 5)` in `snake`.

The first line of output comes from `print(" " * 48, snake)`.
This prints `snake` together with some leading spaces.
**The spaces that are printed throughout the code are
only there to make the output easier to read.**

**ASIDE.**
When graphics are involved,
there are at least three commonly used ways
that people specify locations with coordinates.
In this example, we are consistent with how the 
[canvas element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas){:target="_blank"}
in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML){:target="_blank"} interprets coordinates.


<br>


### The variable `apple`

<canvas id="snake-1b">This should be a canvas describing Snake.</canvas>

The next non-empty line of code says `apple = (0, 5)`.
You can see the apple
by starting at the top-left
and moving down by 5 grid positions.


<br>


### The variable `direction`

The next non-empty line of code says `direction = "down"`.
If we are to move the snake correctly,
we need to know what direction to move it!




## The first use of `update_snake` and its main responsibility


<canvas id="snake-1c">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
   ```
 - The position of the apple is given by `(0, 5)`.
 - The snake should move down because `direction` stores `"down"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-2a">This should be a canvas describing Snake.</canvas>

**One responsibility of `update_snake(direction, snake, apple)`
is to change `snake` from one snake position to the next.**

You should check carefully that
the new position is described
by the following *list*.
```
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
```
Therefore, `update_snake("down", snake, (0, 5))` needs to change
`snake` from the first line displayed below to the second line.
```
        [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
```

**We see that
there are two changes that
`update_snake("down", snake, (0, 5))`
needs to make to `snake`.**
 - It needs to insert `(0, 4)` at the start of the `snake`, that is, create a new *head* position.
 - It needs to remove `(7, 5)` from the end of the `snake`, that is, delete the old *tail* position.

Together, these operations preserve the length of `snake`.
This is appropriate because the snake has not eaten the apple.




## The first use of `update_snake` and its other responsibility


We have just seen that `update_snake("down", snake, (0, 5))` needs to change
`snake` from the first line displayed below to the second line.
```
        [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
```
**It also needs to return the deleted tail position `(7, 5)`**.

This is to give the other code that uses your code,
the other pieces of the jigsaw that you are completing,
permission to use this grid position for apples.
If you define `update_snake` correctly except for this part,
players will be able to "complete" Snake without truly completing it:
zig-zagging through all of the playing area and
eating just a few apples will lead to the message "YOU WON!"

It is a bit difficult to understand why this is necessary
because you did not write the other code. For an analogy,
suppose you are working at the front desk of a hotel
whose computer system is not currently working.
Four friends arrive to use rooms 61, 62, 63, and 64, and
it is important to the friends to be next to each other.
Upon arrival, it becomes clear that one of them needs to
use room 60 because it is the only room with a bathtub.
Because room 60 is free, you move the group to
rooms 60, 61, 62, and 63.
Since the computer system is not working,
you need to leave a note for the front desk manager
on the next shift, who you have never met,
so that they know room 64 is now free.
Otherwise, they may turn away new customers unnecessarily.
In this analogy,
the front desk manager who you have never met
plays the role of the code that you have not written;
leaving a note is analogous to
returning the deleted tail position.




## The first use of `update_snake` and the corresponding output


The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 40, snake, " " *  6, popped, " " * 4, apple)
```
should be as follows (up to spaces).
```
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]   (7, 5)   (0, 5)
```
This shows the newly edited value of `snake`,
the returned value of `(7, 5)`,
and the fact that `apple` is unchanged
and still has the value `(0, 5)`.
**In fact, `update_snake` should
never make any attempt
to change the apple position,
whatever the scenario.**




## The second use of `update_snake`: the snake eats an apple


### `update_snake`'s main responsibility

<canvas id="snake-2b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
   ```
 - The position of the apple is still given by `(0, 5)`.
 - The snake should move down because `direction` still stores `"down"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-3a">This should be a canvas describing Snake.</canvas>

You should check carefully that
the new position is described
by the following *list*.
```
[(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
```
Therefore, `update_snake("down", snake, (0, 5))` needs to change
`snake` from the first line displayed below to the second line.
```
        [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
[(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
```

**We see that
there is only one change that
`update_snake("down", snake, (0, 5))`
needs to make to `snake`.**
 - It needs to insert `(0, 5)` at the start of the `snake`, that is, create a new *head* position.
 - It does **not** need to remove `(6, 5)` from the end of the `snake`. The *tail* position remains the same.

This means that the length of `snake` increases by one.
This is appropriate because the snake eats the apple.


<br>


### `update_snake`'s other responsibility

**Since the tail position was not deleted,
`update_snake` returns `None`.**


<br>


### The corresponding output

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 32, snake, " " *  7, popped, " " * 5, apple)
```
should be as follows (up to spaces).
```
[(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]   None   (0, 5)
```
This shows the newly edited value of `snake`
and the returned value of `None`.
It also shows that `apple` is unchanged
and still has the value `(0, 5)`.

<canvas id="snake-3b">This should be a canvas describing Snake.</canvas>

Even when the apple is eaten,
`update_snake` does **not**
place the apple at a new location.
During gameplay,
the other code that you have not written
will take care of repositioning the apple.
In the code we are considering at present,
the reassignment `apple = (1, 7)`
takes care of this so that
we can consider more examples.

<canvas id="snake-4a">This should be a canvas describing Snake.</canvas>




## The third use of `update_snake`: the snake is unfed but it moves in a new direction


<canvas id="snake-4b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]
   ```
 - The position of the apple is given by `(1, 7)`.
 - The snake should move right because `direction` stores `"right"`
   after the reassignment `direction = "right"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-5a">This should be a canvas describing Snake.</canvas>

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 24, snake, " " * 14, popped, " " * 4, apple)
```
should be as follows (up to spaces).
```
[(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]   (6, 5)   (1, 7)
```
This shows the newly edited value of `snake`,
the returned value of `(6, 5)`,
and the fact that `apple` is unchanged
and still has the value `(1, 7)`.




## The fourth use of `update_snake`: the snake eats itself


<canvas id="snake-5b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
   ```
 - The position of the apple is still given by `(1, 7)`.
 - The snake should move right because `direction` still stores `"right"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-6a">This should be a canvas describing Snake.</canvas>

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)
```
should be as follows (up to spaces).
```
[(2, 5), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]   (5, 5)   (1, 7)
```
This shows the newly edited value of `snake`,
the returned value of `(5, 5)`,
and the fact that `apple` is unchanged
and still has the value `(1, 7)`.

It is clear from the picture that
the snake is now eating itself.
In terms of the *list* `snake`,
this is highlighted by the fact that
`snake[0] == (2, 5)` and `(2, 5) == snake[8]`.
One should not expect that
`update_snake` will be given such a *list*,
but it is fine for `update_snake`
to create such a *list*.

`update_snake` does **not**
handle ending the game.
During gameplay,
the other code that you have not written
will take care of checking for such a scenario.
In the code we are considering at present,
`snake.append(popped); snake.pop(0);`
undoes this move so that
we can consider more examples.
The output corresponding to the code
`print(" " * 24, snake)` should be
as follows (up to spaces).
```
[(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
```




## The fifth use of `update_snake`: nothing new here, the snake is unfed


<canvas id="snake-6b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
   ```
 - The position of the apple is still given by `(1, 7)`.
 - The snake should move down because `direction` stores `"down"`
   after the reassignment `direction = "down"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-7a">This should be a canvas describing Snake.</canvas>

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)
```
should be as follows (up to spaces).
```
[(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]   (5, 5)   (1, 7)
```
This shows the newly edited value of `snake`,
the returned value of `(5, 5)`,
and the fact that `apple` is unchanged
and still has the value `(1, 7)`.




## The sixth use of `update_snake`: nothing new here, the snake eats another apple


<canvas id="snake-7b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]
   ```
 - The position of the apple is still given by `(1, 7)`.
 - The snake should move down because `direction` still stores `"down"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-8">This should be a canvas describing Snake.</canvas>

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " *  8, snake, " " * 23, popped, " " * 5, apple)
```
should be as follows (up to spaces).
```
[(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]   None   (1, 7)
```
This shows the newly edited value of `snake`,
the returned value of `None`,
and the fact that `apple` is unchanged
and still has the value `(1, 7)`.
Even when the apple is eaten,
`update_snake` does **not**
place the apple at a new location.
In the code we are considering,
the reassignment `apple = (7, 0)`
takes care of this so that
we can consider one more example.

<canvas id="snake-9a">This should be a canvas describing Snake.</canvas>




## The seventh and final use of `update_snake`: the snake hits a wall


<canvas id="snake-9b">This should be a canvas describing Snake.</canvas>

 - The snake's current position is described by
   ```
   [(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]
   ```
 - The position of the apple is given by `(7, 0)`.
 - The snake should move down because `direction` still stores `"down"`.

This is enough information to deduce the next position of the snake,
shown in the following image.

<canvas id="snake-10">This should be a canvas describing Snake.</canvas>

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " *  0, snake, " " * 30, popped, " " * 4, apple)
```
should be as follows (up to spaces).
```
[(1, 8), (1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5)]   (4, 5)   (7, 0)
```
This shows the newly edited value of `snake`,
the returned value of `(4, 5)`,
and the fact that `apple` is unchanged
and still has the value `(7, 0)`.

It is clear from the picture
that the snake has hit a wall.
In terms of the *list* `snake`,
this is highlighted by the fact that
`snake[0][0] == 8` and `8 > 7`.
One should not expect that
`update_snake` will be given such a *list*,
but it is fine for `update_snake`
to create such a *list*.

`update_snake` does **not**
handle ending the game.
During gameplay,
the other code that you have not written
will take care of checking for such a scenario.




## Summarizing


Look again at the output that should be produced by the code that uses `update_snake`.

```
                                                [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
                                        [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]        (7, 5)      (0, 5)
                                [(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]         None       (0, 5)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]                (6, 5)      (1, 7)
                [(2, 5), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
                [(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
        [(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                         None       (1, 7)
[(1, 8), (1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5)]                                (4, 5)      (7, 0)
```

Now that we have discussed what the output represents for the snake,
the carefully chosen spacing allows you to recall everything that we discussed.

 - We started with the snake in some configuration.
 - (0) A new head position was added and the tail position was deleted because the snake was unfed.
 - (1) A new head position was added and the tail position was not deleted because the snake ate an apple.
 - (0) A new head position was added and the tail position was deleted because the snake was unfed.
 - (0) A new head position was added and the tail position was deleted because the snake was unfed.
 - We reverted to the previous configuration (because the snake ate itself).
 - (0) A new head position was added and the tail position was deleted because the snake was unfed.
 - (1) A new head position was added and the tail position was not deleted because the snake ate an apple.
 - (0) A new head position was added and the tail position was deleted because the snake was unfed.

By comparing carefully with the code that should produce the output,
we see that `update_snake` never changes the coordinates of `apple`.
Other than by carefully analyzing the *list* `snake`,
nothing about `update_snake` indicates
whether the snake ate itself or
whether the snake hit a wall.
This is fine because other code
addresses these issues for you.

Remember that you can download the testing code [here](./snake.py)
and that you can try your code in the context of the game [here](submit.md){:target="_blank"}.
Good luck!

<script src="snake-draw-frame.js" defer></script>
<script src="snake-examples.js" defer></script>