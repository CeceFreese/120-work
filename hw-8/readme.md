Cecelia Freese
Creative Coding 1 sect. 50

# Week 8
## Overview

Creative freedom is a wonderful thing, and so are loops. The assignment for this week was to create anything with loops which led to many new revelations (don't worry we will discuss them later).

### Steps
1. Read the Course Material
2. Duplicate empty-example
3. Look over the course material again for inspiration
4. Bla Bla Bla procrastination
5. Make more coffee
6. Get to work!

Some of the examples for this week were really interesting. I played around with a few on the website for a bit, then wrote some code for falling ellipses and weird rays of lines into my new sketch.js file. Originally I wanted to have two rows of ellipses one falling and the other rising. However, I could not figure out how to draw a new batch of rising ellipses when the first had hit the top of the screen. So, I went with just the falling ellipses.

## Interesting Stuff

Getting rid of a section of code for "background" results in an interesting effect. I call it the paint drip and I think it happens because the automatic setting for an edge is black. Without a background color, all those edges (for each ellipse drawn) are shown.

CHANGING THE SIZE OF THE WINDOW AROUND BY CLICKING AND DRAGGING IT FROM ONE SIDE ALLOWS YOU TO MANIPULATE WHERE THE ELLIPSES ARE DRAWN!
Crazy stuff. I'm pretty sure this happens because of a small change I made to the original code; using windowWidth and windowHeight instead of solid numbers. So, when the width and height of a window is changed while the code is running, the outputs for that code change with it. 
