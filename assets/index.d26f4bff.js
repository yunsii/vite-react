import{r as e,aG as t,aj as n}from"./index.dc41960e.js";import{C as r}from"./index.543308be.js";import"./index.e2a07c2d.js";import{P as o}from"./index.45f70078.js";import"./lodash-es.dacdeb55.js";import"./index.92e459fd.js";import"./index.30f176be.js";import"./index.ecb0f2e9.js";import"./RouteContext.8f492d03.js";import"./Sider.03f84abf.js";import"./DownOutlined.dc192ac9.js";var i=Object.defineProperty,s=Object.getOwnPropertyDescriptor;let c=class extends e.Component{constructor(){super(...arguments),this.inc=()=>this.setState({num:this.state.num+1})}render(){const{num:t}=this.state;return e.createElement("div",null,e.createElement("h1",null,"class comp: ",t),e.createElement("button",{onClick:this.inc},"inc()"))}};function l(){const{state:t,setState:r}=n("counter");return e.createElement("div",null,e.createElement("h1",null,"fn comp: ",t.num),e.createElement("button",{onClick:()=>r({num:t.num+1})},"inc()"))}function m(){return e.createElement(o,null,e.createElement(r,null,e.createElement(c,null),e.createElement(l,null)))}c=((e,t,n,r)=>{for(var o,c=r>1?void 0:r?s(t,n):t,l=e.length-1;l>=0;l--)(o=e[l])&&(c=(r?o(t,n,c):o(c))||c);return r&&c&&i(t,n,c),c})([t("counter")],c);export default m;export{l as DemoFn};
