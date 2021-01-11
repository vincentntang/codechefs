---
title: "The Javascript Event Loop"
slug: "the-event-loop"
cover: "code_chefs_podcast_art.png"
date: 2020-08-14
audioPath: 008_the_event_loop.mp3
episodeNumber: 8
fileSize: 64.5
showLength: 28:12
category: "tech"
# shortDescription is only for codechefs.dev homepage
shortDescription: "The way Javascript handles concurrency and asynchronous code in an application"
tags:
    - programming
    - event-loop
    - javascript
---

### How does Javascript handle concurrency?

When you execute asynchronous code in Javascript, it goes through an Event Loop. It describes what order a list of callbacks will be made, using a  Stack and a Heap. This is important when understanding the order in which javascript code executes so you don't run into race conditions. In this episode, we deep dive into how it all works!

<hr>

### Shownotes

<!-- - 00:30 - Intro
    - 00:40 - Testing
        - 00:50 - Testing -->

- 01:30 - Basics and why it matters
  - Javascript is single threaded
  - The event loop gives it Javascript the ability to handle concurrency and async code
  - It's useful for describing animation states
- 07:30 - The mechanics
  - Browser initializes with v8 engine
  - The event loop runs, and code executes top to bottom
  - Two concepts - callstack and heap
    - Callstack is FIFO (Last in first out) - like a stack of pancakes
    - It describes when callbacks will occur when things are finished in that execution
    - When nothing is left over in the callback queue, everything has been executed
- 12:30 Examples:

```javascript
console.log("hello");
setTimeout(() => {
  console.log("resolve timeout");
},5000)
console.log("last line");
```

`Hello` is logged, then `resolve timeout` is placed into a callback queue. `last line` is then logged. 5 seconds later, the callback queue is checked, and `resolve timeout` is logged.

What if you had a long list of executable code, and a `setTimeout` with a very short duration called in the middle?

```js
console.log(1);
console.log(2);
console.log(3);
setTimeout(()=> {
  console.log("set time out function")
}, 100);
//.....
console.log(1000);
```

The `setTimeout` function will still execute after all other code runs.

- 16:50 - Additional notes
  - For async await, understand the order in which your promises are resolving.
  - If two HTTP calls can be executed in parallel, use `Promise.all()`
  - Stack vs Heap in Event Loops
- 22:00 - Dessert Time
  - 22:40 - Swimming with Vincent
  - 24:00 - Linux OS and GPUs with German

### Social Media

- [German's Twitter](https://twitter.com/germangamgon)
- [Vincent's Twitter](https://twitter.com/vincentntang)
- [Vincent's Instagram](https://instagram.com/vincentntang)
- Tweet us your thoughts on [@codechefsdev](https://twitter.com/codechefsdev)

### Links

- [The event loop playground](http://latentflip.com/loupe/)
- [Overview of Event Loops](https://flaviocopes.com/javascript-event-loop/)