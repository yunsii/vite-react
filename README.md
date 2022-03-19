English | [简体中文](./README.zh-CN.md)

# Vite React

🚀 Use Vite + React like a Pro!

> Try building an [Ant Design Pro](https://github.com/ant-design/ant-design-pro)-like project with [Vite](https://github.com/vitejs/vite), which builds an easy-to-use mid-background scaffolding from scratch.

## ✨ Features

- 🛠 TypeScript + Eslint + Prettier + Stylelint, preset configurations
- ❤️ Less + Windi CSS, enjoyable CSS development experience
- ⚙️ Preset Vite plugins reasonable, the pursuit of the ultimate development experience
- 💡 Fully features of antd, support style import on demand
- 💎 Provide different degrees of custom scaffolding, free choice, easy to use

## Always one option fit for you

Due to the different needs of everybody, and in order to reduce the mental burden of users, the increasingly complex project was split, but the development environment configuration remained unchanged, which also made it convenient for users to customize the development environment. The following shows the preset core dependencies of each branch.

### [⭐️ feat/base](https://github.com/yunsii/vite-react/tree/feat/base)

Only provides primitive React development support for small, routless projects such as Hello World or for custom more complex scaffolding.

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)

### [⭐️ feat/vitjs](https://github.com/yunsii/vite-react/tree/feat/vitjs)

Based on [vitjs/vit](https://github.com/vitjs/vit), take over the route and application entry, support custom MOCK data. It can be convenient to build a complicated application based on routing.

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)

### [⭐️ master](https://github.com/yunsii/vite-react)*

Contains all the features of the previous branch, while supporting the fully features of antd, ant implements of [Ant Design Pro](https://github.com/ant-design/ant-design-pro) page layout

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)
- [antd](https://github.com/ant-design/ant-design)
- [@ant-design/pro-layout](https://procomponents.ant.design/components/layout)
- [ahooks](https://ahooks.js.org/hooks)

### [⭐️ feat/concent](https://github.com/yunsii/vite-react/tree/feat/concent)

Contains all the features of the previous branch, Use [concent](https://github.com/concentjs/concent) as a global state management tool.

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)
- [antd](https://github.com/ant-design/ant-design)
- [@ant-design/pro-layout](https://procomponents.ant.design/components/layout)
- [ahooks](https://ahooks.js.org/hooks)
- [concent](https://github.com/concentjs/concent)
