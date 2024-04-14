# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# File-based routing

inspired from this article: https://omarelhawary.me/blog/file-based-routing-with-react-router/

the main file is `src/pages/app.jsx` which is the root path for the app. If you want to add a new page, just create a new folder in the `src/pages` directory. Create an `index.jsx` file inside that folder and add your component there. The route will be automatically created based on the folder name. For the component you can put inside `views` folder.
