# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

/_
Intro To React.
React is a JS front-end framework. It's the most popular front-end framework. It was developed by Meta devs.
Have a good understanding of JS.
Since React is a framework, it has rules and guidelines.
What can you build with React.
Web apps.
Mobile Apps (React Native / Expo)
What you need.
nvm installed, with Node v18 and above.
Creating A React Application
Create React app (old)
Vite (modern, recommended)
Vite.
npx create-vite
Select React application using JS (I don't use TypeScript)
To stop the Vite application from running: ctrl+c
To start react server running: npm run dev
Folders And Files
package.json
project settings
project information
manage your library (package)
script
Exercise.
on package.json
Locate your package.json file.
Open it in VS Code.
Locate the scripts section.
At the end of the script section, add a key-value pair:
key: favcmd
value: <favourite linux cmd ex 'ls -l'>
Run the cmd on terminal:
npm run favcmd
See linux (bash) getting executed.
Test version changes: patch, minor, major
npm version patch
npm version minor
npm version major _/
