# todo-app

This repo contains a todo-app made with React.

This repository is frontend application that must follow this requirements:

* width >= 480px, width = 480
* if width < 480 => shrink

## Features

<dl>
  <dt>Clean Architecture</dt>
  <dd>
    This project architecture use principles of <a href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html">Clean Architecture</a> focused on codebase scalability.
  </dd>
  
  <dt>Domain Driven Design(DDD) and Model-View-Controller(MVC)</dt>
  <dd>
    Uses <a href="https://martinfowler.com/bliki/DomainDrivenDesign.html">DDD</a> approach to reduce domain complexity and focus the development in domain model.
    Uses <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC</a> in presentation of app.
  </dd>
  
  <dt>Dependency injection</dt>
  <dd>
    Use the technique dependency injection for code not be coupled and make easy to mock dependencies during the tests.
  </dd>

 <dt>Web Framework</dt>
  <dd>
    Use <a href="https://reactjs.org/">ReactJs</a> for building user interfaces. 
  </dd>
  
 <dt>Animation</dt>
  <dd>
    Use <a href="https://react-spring.dev/">React-Spring</a> for animation. 
  </dd>
  
 <dt>React Component has docs</dt>
  <dd>
    Use <a href="https://storybook.js.org/">Storybook</a> for documenting react components.
  </dd>
  
<dt>Prepared for testing</dt>
  <dd>
    The test suite uses <a href="https://www.npmjs.com/package/jest">Jest</a> as test runner and is prepared to run unit, integration and functional tests right from the beginning. 
    Use <a href="https://testing-library.com/">React-Testing Library</a> to test React components.
  </dd>

<dt>Compile Tyscript to Javascript</dt>
  <dd>
    Use <a href="https://www.npmjs.com/package/typescript">typescript</a> for compile typescript code to javascript to NodeJS runs it.
  </dd>
  
 <dt>Create React App</dt>
  <dd>
    This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.
  </dd>
</dl>

## Quick start

0. Do you need a Node installed in your machine. I suggest to use this tool: <a href="https://github.com/nvm-sh/nvm">nvm</a>.
1. Clone the repository
```bash
git clone https://github.com/matheusfcorocher/todo-app.git
```
2. Install the dependencies with `npm`
```bash
npm install
```
3. Run the application in development mode with
```bash
npm start
```
4. Access `http://localhost:3000` and you're ready to go!
The page will reload when you make changes.
You may also see any lint errors in the console.

## Scripts

This api comes with a collection of npm scripts to make your life easier, you'll run them with `npm run <script name>`:

- `build`: Transpile the ts files to js in builder folder.
- `start`: Start the development server with Node.js
- `storybook`: Run storybook server.
- `test`: Run all tests suite with option --runInBand and NODE_ENV=test

## References
- https://todomvc.com/examples/backbone_require/#/
- https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality
- https://create-react-app.dev/docs/getting-started
- https://www.youtube.com/watch?v=lRaL-8qZ0mM&ab_channel=freeCodeCamp.org
- https://style.monday.com/?path=/docs/welcome--page
