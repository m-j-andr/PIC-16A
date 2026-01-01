def update_snake(direction, snake, apple):
  pass

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

#                                                 [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
#                                         [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]        (7, 5)      (0, 5)
#                                 [(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]         None       (0, 5)
#                         [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]                (6, 5)      (1, 7)
#                 [(2, 5), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
#                         [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]
#                 [(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                        (5, 5)      (1, 7)
#         [(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5)]                         None       (1, 7)
# [(1, 8), (1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5)]                                (4, 5)      (7, 0)
