A quick guide through on how this gatsby-advanced starter works:

## BACKEND

- gatsby-config.js -> this is your plugins, similar to wordpress plugins
  - When you run the backend to create `public and .cache`, these plugins are being looked at for generating graphql assets
  - When you run the frontend to consume it, it's using those same assets from `public and .cache`. It's also bundling a javascript library to frontend (imageResharp -> lazy loading images)
- gatsby-node.js -> this is the settings to point your data sources, 
  - also includes graphql setup
- data/siteConfig.js -> backend file configs

gatsby-node.js -> gatsby-config.js (middleware plugins - backend processing, and JS library frontend) -> frontend

## DATA

- content -> this is where markdown files live

## BUILD PIPELINES

- .cache 
- public 

## FRONTEND

- src/
  - layout -> entry point
  - pages -> localhost:8000/about
  - templates -> base styling/html for tags/categories/posts
  - components -> dumb reusable react components

## DEV WORKFLOW

- anytime you modify backend files (gatsby-config.js, gatsby-node.js, siteConfig.js) -> you need to clean cache using `$ npm run clean` and then `$ npm run dev`
- basically the 3 backend files are generating data to `public` and `.cache` that the frontend references.
- basically when you deploy the website, there's no backend running
- If you change frontmatter on `md`, you need to run `$ npm run clean` again

## HOW GRAPHQL STUFF WORKS

Frontend components automatically have graphql results set into props

## QUICK INSTALL

- `$ npm install`
- `$ npm run dev`

## TODO

- slugname frontmatter?
- audioUrl frontmatter to be consumed for each podcast episode (hosted on google cloud)
- Make cover frontmatter optional (b/c not all podcast have images maybe?)
- figure out how audio timestamps work (when you click shows notes at that time URL, it automatically plays podcast at that time-stamp)

## PODCAST WORKFLOW & TOOLING

- Trello
  - for episode planning (top most is highest priority in swimlane) - avoid putting images, podcast raw files, shownotes, (no attachments)
- Google Drive
  - One folder = one episode, same namimg conventions as `01-01-20