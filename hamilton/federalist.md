# PIC 16A - Hamilton Or Not Hamilton? That Is The Question!




## The Federalist Papers

*The Federalist Papers* are a collection of essays written by
Alexander Hamilton, John Jay, and James Madison
under the pseudonym *Publius*.
They were published from 1787 to 1788.
The essays were intended to persuade New Yorkers
at the time to ratify the new U.S. Constitution.
Over time, these essays strongly influenced
the United States' constitutional theory.

**NOTE.** The essays are included with homework 2.
They can also be downloaded [here](./federalist.zip).
Within this folder, you will find a file called `all.txt`.
`all.txt` was downloaded from [The Project Gutenberg](https://www.gutenberg.org/){:target="_blank"}.
It is for use within the United States in accordance with
the Project Gutenberg License included with the ebook.
There are also files called `00.txt`, `01.txt`, `02.txt`, ..., `85.txt`.
These were obtained from `all.txt`.
A few minor edits were made for educational purposes.




## Essays 49 to 57, 62, and 63

As you look through `01.txt` to `85.txt`,
you will notice that most of the essays are
attributed to Hamilton, Jay, or Madison.
Some are also attributed to Madison with Hamilton.
However, if you look at `49.txt` to `57.txt`,
`62.txt`, and `63.txt`, the author is listed as
"MADISON **or** HAMILTON".

> "... The original manuscripts have never been found and were most likely destroyed at the time of printing (except for the drafts of Jay's essays)...
The number [Madison] claimed [to have written] in a list first made public in 1818...
differed significantly from one attributed to Hamilton, which had appeared ten years earlier in *The Port Folio*, a Philadelphia magazine.
The 14 November 1807 issue of that magazine reproduced a memorandum, said to be in Hamilton's handwriting...
The discrepancy between these two lists gave rise to a famous literary dispute over the authorship of certain numbers of *The Federalist*..."
[https://founders.archives.gov/documents/Madison/01-10-02-0177](https://founders.archives.gov/documents/Madison/01-10-02-0177){:target="_blank"}

By working on homework 2, you will try to resolve the dispute, attempting to deduce who wrote essays
[49 to 57, 62, and 63](https://guides.loc.gov/federalist-papers/full-text){:target="_blank"}!
Python is the programming language of Data Science, so we should do some Data Science!




## Addressing the question.

You will attack this problem in `hw2_q2.py`, `hw2_q3.py`, `hw2_q4.py`, and `hw2_q5.py`;
`hw2_q1.py` provides a warm up activity. Here, I want to explain where you are headed.

 - The main idea is to go through essay by essay and focus on the essays that
   are confirmed to be written by just Hamilton or just Madison.

 - For each of these essays, you can record the words that are used
   and how many times they are used.

 - Once you have this data for Hamilton and Madison, you can focus on...

   - words used by both Hamilton and Madison that are used much more by Hamilton;
   - words used by both Hamilton and Madison that are used much more by Madison;
   - words used only by Hamilton, used enough so that they are not ultra-rare words;
   - words used only by Madison, used enough so that they are not ultra-rar words.

   In this way, you will find identifier words for Hamilton and Madison.

 - Finally, you can look at the "MADISON or HAMILTON" essays and
   count how many times each of these identifier words is used.
   It will then be up to you to decide how to use the data
   in front of you to make a conclusion about each essay.

<br>


### `hw2_q1.py`

This problem warms you up
by counting alphabetic characters.
A tuple is returned to create the illusion
of returning two values.

<br>


### `hw2_q2.py`

For each essay, we need to know the author.
The author is written in the text files and
it is always in approximately the same position.
Using this observation, one can write a function to
extract the author from a string containing an essay.

<br>


### `hw2_q3.py`

This question is fairly similar to the warm up question.
There are two main differences.
 - You are working with words rather than characters.
 - The function returns `None` and updates
   a dictionary which is passed to it.
   This is so that the function can be used to
   collect cumulative data for Hamilton and Madison.

<br>


### `hw2_q4.py`

Hamilton authors more of the labeled essays than Madison.
Consequently, he uses more than double the total number of words that Madison uses.
Because of this, when considering which words Hamilton and Madison use, it makes sense to *normalize*.

For example, the most common word in Hamilton's and Madison's essays is "the" (lowercase).
 - Hamilton uses "the" 9778 times and Madison uses "the" 3830 times.
 - Although Madison uses "the" fewer times than Hamilton, it is a more common word for him.

   - In Hamilton essays, for every 100 words, there are about 8.5 occurrences of "the".
   - In Madison essays, for every 100 words, there are about 9.25 occurrences of "the".
   - We say that the *frequency* of the word "the" is 0.085 for Hamilton and 0.0925 for Madison.

Once we have the frequency of each word,
we can evaluate whether various words are
*identifying words* for Hamilton and Madison.

For example, Hamilton uses the word "coin" twice and Madison uses the word 15 times.
These occurrences corresponds to frequencies of 0.0000175 and 0.0003627,
so Madison uses the word over 20 times more frequently than Hamilton. One might
use this statistic to claim that "coin" is an identifying word for Madison.

One has to decide on a threshold for when one regards a word as identifying
for one author and that is the job of the parameters in the function
`get_identifying_words`.

<br>


### `hw2_q5.py`

There is a decent amount of code before `my_conjecture_for_authorship`
which uses the previously defined functions to find identifying words
for Hamilton and Madison. Finally, it is left to you to use these words
to help make conclusions about the "MADISON or HAMILTON" papers.

I think some conclusions are easier to reach
and others are much more uncertain.
To recieve full credit for this part,
you need to reach the same conclusion as me
for the essays where the conclusion is more clear.
For the other essays, I do not mind what conclusion you reach
as long as you have engaged with the problem.




## Conjecturing the Authorship of Essays 49 to 57, 62, and 63

Essays 49 to 57, 62, and 63 amount to 11 papers.
Suppose that you are made to gamble and that
the Python code you have written
is the only resource you have
to help decide on your bet.

You are allowed to pick between four options.

 1. The bet is for \$1100. To win,
    you have to specify the true author for each of the 11 papers correctly.
 2. The bet is for \$1000. To win,
    you have to pick 10 of the 11 papers
    and specify the true author for each of those 10 papers correctly.
 3. The bet is for \$900. To win,
    you have to pick 9 of the 11 papers
    and specify the true author for each of those 9 papers correctly.
 4. The bet is for \$800. To win,
    you have to pick 8 of the 11 papers
    and specify the true author for each of those 8 papers correctly.

In each option, if you are correct, you win the money,
but if you are incorrect, you have to pay the money.
 - Which option do you pick?
 - How do you specify the true author for the papers that you chose?
 - Justify your decisions.
