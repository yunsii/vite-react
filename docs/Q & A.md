# Q & A

## 启动时自动打开浏览器

vite@&#8203;2.0.1 之前配置 `server.open: true` 不能自动打开浏览器，2.0.2 之后可通过配置 `BROWSER` 环境变量启动浏览器。详情参考 [vitejs/vite#2159](https://github.com/vitejs/vite/issues/2159)。

## Vite 下如何使用 antd

根据[官方文档](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)的说明，在 webpack 下需要用到 [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) 插件，而在 Vite 下对应的需要使用 [vite-plugin-imp](https://github.com/onebay/vite-plugin-imp) 插件。值得注意的是：

### 直接使用 lib/\*_/_.less 文件

```js
vitePluginImp({
  libList: [
    {
      libName: 'antd',
      style: (name) => `antd/lib/${name}/style/index.less`,
      // style: (name) => [`antd/lib/style/index.less`, `antd/lib/${name}/style/index.less`],
    },
  ],
})
```

该配置在使用组件时可能需要单独引入 `antd/lib/style/index`，且组件的样式依赖未引入，比如在 List 组件不能正常使用 loading 属性，因为没有引入 Spin 组件的样式。且已知在使用 Col, Row 组件时，不存在 `antd/lib/col/style/index.less` 和 `antd/lib/row/style/index.less`，故此法可用性太低。

### 使用 lib/\*/style/index.js

```js
vitePluginImp({
  libList: [
    {
      libName: 'antd',
      style: (name) => `antd/lib/${name}/style`,
    },
  ],
})
```

运行时报错 `Uncaught ReferenceError: require is not defined`，因为 `antd/lib/${name}/style/index.js` 中使用了 require 引入依赖，但是不能被浏览器识别。

### 最终方案

```js
vitePluginImp({
  libList: [
    {
      libName: 'antd',
      style: (name) => `antd/es/${name}/style`,
    },
  ],
})
```

es/\*/style/index.js 中使用 import 引入依赖，能被浏览器执行，且样式依赖的问题也从内部得到了解决。
