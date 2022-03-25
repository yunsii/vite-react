[English](./README.md) | 简体中文

# Vite React

🚀 Use Vite + React like a Pro!

> 尝试通过 [Vite](https://github.com/vitejs/vite) 构建一个类 [Ant Design Pro](https://github.com/ant-design/ant-design-pro) 的项目，即从零搭建一个简单易用的中后台脚手架。

## ✨ Features

- 🛠 [TypeScript](https://github.com/microsoft/TypeScript) + [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier) + [lint-staged](https://github.com/okonet/lint-staged) 预设配置
- ❤️ [Less](https://github.com/less/less.js) + [Windi CSS](https://github.com/windicss/windicss) 愉悦的 CSS 开发体验
- ⚙️ 完善的 Vite 插件预设，追求极致的开发体验
- 💡 完整适配 [Ant Design](https://github.com/ant-design/ant-design)，支持样式按需引入
- 💎 提供不同定制程度的脚手架，自由选择，方便上手

## 总有一款适合你

由于每个人需求不同，也为了减少用户的心智负担，所以将越来越复杂的本项目做了拆分。但开发环境配置保持不变，也方便用户个性化定制开发环境。以下展示的是各个分支预设的核心依赖。

### [⭐️ feat/base](https://github.com/yunsii/vite-react/tree/feat/base)

仅提供最原始的 React 开发支持，方便做一个无路由的小项目，比如 Hello World，抑或基于此搭建更复杂的脚手架。

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)

### [⭐️ feat/vitjs](https://github.com/yunsii/vite-react/tree/feat/vitjs)

基于 [vitjs/vit](https://github.com/vitjs/vit) 构建，接管了路由和应用入口，支持自定义 Mock 数据。可以很方便的搭建一个基于路由的复杂应用。

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)

### [⭐️ master](https://github.com/yunsii/vite-react)\*

包含上个分支的所有特性，同时支持了 antd 的完整使用体验，实现了 [Ant Design Pro](https://github.com/ant-design/ant-design-pro) 的页面布局。

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)
- [antd](https://github.com/ant-design/ant-design)
- [@ant-design/pro-layout](https://procomponents.ant.design/components/layout)
- [ahooks](https://ahooks.js.org/hooks)

### [⭐️ feat/concent](https://github.com/yunsii/vite-react/tree/feat/concent)

包含上个分支的所有特性，使用 [concent](https://github.com/concentjs/concent) 作为全局状态管理工具。

- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/blob/main/packages/react-dom/README.md)
- [vitjs/vit](https://github.com/vitjs/vit)
- [antd](https://github.com/ant-design/ant-design)
- [@ant-design/pro-layout](https://procomponents.ant.design/components/layout)
- [ahooks](https://ahooks.js.org/hooks)
- [concent](https://github.com/concentjs/concent)
