# Getting Started 
I tried to follow the wireframe as strict as possible. I mocked my data using Graphql Faker(an npm package). 
You need to have install globally so you can have access to the playground. 

To install: run in the terminal.
```
npm install -g graphql-faker
  or
yarn add -g graphql-faker
```

To mock: run in the project folder.
```
graphql-faker --open
```

This will enable mocking and saving the schema i desire to use.

## Some decisions
I used react context to manage state to avoid prop drilling in the application.
When searching from the input i reset the state of my filter and vice versa. 
I enabled search for all fields which are; Name, Status and Type.

## To Start Application:
After installing graphql-faker globally 
To install dependencies, run the command.
```
npm install
```

To start application on browser run the command:
```
npm start
```
