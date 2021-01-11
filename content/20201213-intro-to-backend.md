---
title: "Intro to Backend Development"
slug: "intro-to-backend"
cover: "code_chefs_podcast_art.png"
date: 2020-07-13
audioPath: 006_intro_to_backend.mp3
episodeNumber: 6
fileSize: 150
showLength: 1:05:46
category: "tech"
# shortDescription is only for codechefs.dev homepage
shortDescription: "A tour of webservers, design patterns, backend languages, and more!"
tags:
    - programming
    - backend
---

### What is Backend Development?

We briefly cover how a server talks to a client, via application programming interfaces (APIs). Then we cover how backend servers are normally structured using MVC (model view controller). We discuss different backend frameworks, and reasons to choose them depending on job markets / business needs. And how to structure a highly scalable webapp like reddit or facebook. Finally we cover what a serverless function is, and tradeoffs between a more traditional backend tooling. 

<hr>

### Shownotes

<!-- - 00:30 - Intro
    - 00:40 - Testing
        - 00:50 - Testing -->

- 00:45 - Intro to backend
  - Common misconceptions of backend development
  - A backend is a server that talks to a client (your browser)
  - If you need custom functionality, you should write your own backend
- 05:20 - Web Analogies 
  - A restaurant
  - A kitchen is the backend/server
  - Dining room is the frontend. 
  - A waitress is the HTTP request.
- 10:30 - How does a backend talk to a frontend?
  - Model View Controller is a common design pattern for structuring a backend. 
      - Model is where the business logic lives
      - View is where the HTML gets rendered
      - Controller is the entry point for the route
  - A backend can talk to a frontend a few different ways
      - Either API only, the frontend and backend are decoupled
      - or serving a route on the backend side
- 16:00 - Designing a backend
  - Frame out what your building. 
  - Write the data models, and how that one table of data is correlated to another
  - Write the relationships between the data. 
      - This helps enforces data consistency 
      - Specifying types prevents bad data getting into the system
      - Shows how one set of data is related to another table
      - You can use foreign key constraints
- 23:10 - Business logic on frontend vs backend
  - Put the business logic into the backend for more complex projects. 
  - But frontend business logic is okay if you have a simple app using a firebase
  - What is an API - application programming interface - request you make to a server via HTTP
- 31:00 - Backend frameworks
  - Pick what your most familiar with
  - The strengths of the language, such as GO-lang if you need concurrency
  - For windows desktop support, you might look into C#
  - Job market - Java is poular for banking / enterprise
  - Static vs Dynamic
      - Static enforces types, and compiled before runtime
      - Javascript is dynamic, it's compiled at runtime
  - Typescript - it's a superset of Javascript
  - How does LAMP differ from NodeJ
    - NodeJS requires you to turn on your own server
    - LAMP (Linux Apache Mysql, PHP) comes with pre-installed tools
- 45:00 - Scaling a web application
  - Build a stateless application, they don't have previously knowledge of anything else
  - This means you can spin up more of these servers to handle incoming traffic
  - The database does get overloaded, which is a common scalability issue
      - Lump up data ahead of time before making a call to it
      - Make simple SQL queries
      - Use cache for serving up common sets of data
- 52:30 - Serverless vs Server backend
  - Serverless is a webapp that's only turned on when needed. 
  - Servers are generally always on
  - When should you use serverless? 
      - When there's a reusable function across multiple apps
      - Such as image uploading and grabbing the URL uploaded
      - Tasks that need to be run routinely such as emails and PDF generation
- 58:00 - Resources for learning
  - Brad Traversy, Laracasts for PHP
- 59:05 - DESSERT TIME!
  - Learning how to play Ukelele and singing
      - Singing requires head voice / chest voice
  - Youtube tutorials!

### Social Media

- [German's Twitter](https://twitter.com/germangamgon)
- [Vincent's Twitter](https://twitter.com/vincentntang)
- [Vincent's Instagram](https://instagram.com/vincentntang)
- Tweet us your thoughts on [@codechefsdev](https://twitter.com/codechefsdev)

### Links

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)