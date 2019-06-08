# Map App

## Table of contents

- [Component Guidlines](#component-guidlines)
  - [1. File/Folder Structure](#1-file-folder-structure)
- [Github instructions](#github-instructions)
  - [1. Setup Local Repository](#1-setup-local-repository)
  - [2. Workflow](#2-setup-docker)
  - [3. Branch Naming](#3-testing)
- [Document](#document)
  - [1. Used Library](#1-used-library)

## Component Guidlines

### 1. File/Folder Structure

```files
src/components
├── ComponentName
│ ├── ComponentName.js — block ComponentName
│ ├── ComponentName.scss — visual styles
│ └── index.js — export file
```

## Instructions

### 1. Setup Local Repository

```git
git clone https://github.com/goginim/map-app
cd map-app
npm i
```

### 2. Setup Docker

- docker build -t map-app .

- docker run -it -p 8080:80 map-app

### 3. Testing

- npm run cypress

## Document

### 1. Used Library

- For GraphQL

  - apollo-boost
  - apollo-cache-inmemory
  - apollo-link-http
  - graphql
  - react-apollo

- For Map
  - d3-scale
  - react-motion
  - react-simple-maps
  - react-tooltip

### Q1. How did you decide on the technical and architectural choices used as part of your solution?

- The structure should be simple to make easy for new team member getting onboard and diving into the project
- Each component has a separate folder. The name of the folder and the name of the component file should preferably be identical. By using this way, the developer doesn't get a list of index.js file but the actual component files when developer search for files.
- Also, each component folders have index.js file to make importing the component easier.

### Q2. Are there any improvements you could make to the final piece?

- A feature for changing section size can be an improvement because the application can show a bigger map section or bigger information section depending on the user's preference.

### Q3. What would you do differently if you had more time?

- If I had more time, I would add more features to register, login, save the country list and take memo for each country. By using those features, it can be a simple travel tracking application. So, users can take a memo for each country before and after travel. It will be awesome!
