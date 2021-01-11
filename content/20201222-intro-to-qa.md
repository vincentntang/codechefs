---
title: "Intro to Quality Assurance (QA) with John Sickels"
slug: "intro-to-qa"
cover: "code_chefs_podcast_art.png"
date: 2020-08-14
audioPath: 007_intro_to_qa_with_john.mp3
episodeNumber: 7
fileSize: 141
showLength: 1:01:55
category: "tech"
# shortDescription is only for codechefs.dev homepage
shortDescription: "Thinking about getting into QA? We have you covered!"
tags:
    - programming
    - quality-assurance
    - qa
    - devops
---

### Intro to QA

We cover what QA engineer does. First by explaining the differences between manual vs automated testing, and how this is used in the software development lifecycle. 
Next, how QA is adopted into a company's operations, and whether you should test early on or down the pipeline in your app. 

Then We cover (literally!) what test coverage means, and how the phrase "100% test code coverage" may be misleading. 

And all the fun things you can do with QA automation! Image diff checking, 3rd party API testing, stress testing, etc just to name a few. We cover how CI/CD pipelines are integrated into a QA environment, and discuss pros/cons between different test frameworks such as Cypress.


<hr>

### Shownotes

<!-- - 00:30 - Intro
    - 00:40 - Testing
        - 00:50 - Testing -->

- 00:50 - John Sickels!
  - Formerly a restaurant waiter
  - How John got into QA
- 02:30 - How does Quality Assurance Work?
  - Making sure the app functions!
  - "Acceptance Testing" is the requirements spec'd for the task to test against
  - It's always cheaper to fix things before they get into production!
- 04:50 - Manual vs Automated Testing
  - Manual QA is someone who just tries to break the app
  - The newer method is "Automated Testing", writing scripts to test each deploy
  - You still need to have manual testing, because automated testing doesn't usually have 100% coverage
  - It's good to have both!
  - Test criteria is generally written on the task itself
- 09:40 - Adopting QA in your company
  - It needs to come from the top management level
  - It's expensive to fix errors down the road
  - Higher quality codebases usually have QA automation
  - Some companies might have an internal QA guild
  - Agencies is a whole different fielding
  - Two testing methodologies
      - Shift left - test early, test often
      - Shift right - adding QA into a legacy app
- 16:30 - Test Coverage
  - There are tools for this! It can be measured against the number of functions you have
  - End to end testing is harder to cover due to:
      - Jerk/Monkey/Fuzzy testing - testing with garbage data against routes
  - Cypress has plugins for these!
  - 100% coverage on unit tests
  - TDD (Test driven development) - this is a shift-left approach to test early
- 19:40 - Visual Testing
  - You can do something called Smoke Testing
  - This checks if an HTML element is rendered on a page
  - or if an image is 400px by 400px
  - You can even do diff image testing too, checking against pixel colors with threshold differences
  - and integrate this into a CI/CD pipeline
- 23:00 - How do you test 3rd party APIs?
  - For stripe.js, use their external testing services
  - You can use `try catch` blocks and add error catching
  - Box Testing
  - Black box testing
      - This is a limited testing environment, no source code access
  - Grey box testing
      - You have partial access to the code
  - White box testing
      - You have direct access to the code
- 29:00 - Different ways to test
  - You can connect to backend tooling with your testing framework
  - Or in isolation (UI to UI testing)
- 33:30 - DevOps CI/CD Tooling with QA
  - You can force PRs to be reviewed before they get merged in
  - Your CI/CD pipeline can listen for that PR and run the tests
  - A greenlight test is if your branch passes before its merged
  - Git hooks can be used for prelinting the codebase before its merged
  - You can run tests locally with an environment variable, so you can build / test faster
  - CLI tooling can be used to run these tests locally
- 39:00 - How do you test multiple frontends / backends?
  - You can make a seperate API service that just hits all your microservices for testing
  - These are usually tested against staging/production environments, shift-right approach
  - Also for stress-testing as well
  - Testing as a service
- 44:10 - Why QA is cool!
  - You make developers life easier!
  - Better production code
  - Automated QA has alot of overlap with DevOps
- 46:00 - Cypress Alternatives
  - Flagpole is an internal QA tool where John works at
  - It implements puppeteer level scraping automatio/stress-testing
  - Same language syntax using Javascript
- 49:40 - Do you need testing with Typescript?
  - There are tools to actually integrate these together!
  - But you still need to test these functions/endpoints with garbage data
  - Typed languages generally don't do this out of the box for you
- 55:00 - DESSERT TIME
  - Creating the Code Chefs Podcast!
  - Our background in the restaurant industry!
  - Sharing food is like sharing knowledge
  - John Sickels transitioning from waiter to coder

### Social Media

- [German's Twitter](https://twitter.com/germangamgon)
- [Vincent's Twitter](https://twitter.com/vincentntang)
- [Vincent's Instagram](https://instagram.com/vincentntang)
- Tweet us your thoughts on [@codechefsdev](https://twitter.com/codechefsdev)

### Links

- [John Sickels Website](https://johnwsickels.com/)