var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,l=(e,l)=>{for(var c in l||(l={}))a.call(l,c)&&n(e,c,l[c]);if(t)for(var c of t(l))r.call(l,c)&&n(e,c,l[c]);return e};import{g as c,bJ as o,t as s,bt as m,bg as i,bK as u,bv as b,bL as d,bM as p,h as v,an as E,bN as g,bH as h,bO as _,L as f,bP as y}from"./vendor.53115a9c.js";import{G as N}from"./index.19a3bd1b.js";var k="_container_8z6xy_1";const O=e=>{var{overlayClassName:n}=e,m=((e,n)=>{var l={};for(var c in e)a.call(e,c)&&n.indexOf(c)<0&&(l[c]=e[c]);if(null!=e&&t)for(var c of t(e))n.indexOf(c)<0&&r.call(e,c)&&(l[c]=e[c]);return l})(e,["overlayClassName"]);return c.createElement(o,l({overlayClassName:s(k,n)},m))};var j={menu:"_menu_1c6t3_1",right:"_right_1c6t3_7",action:"_action_1c6t3_14",search:"_search_1c6t3_31",account:"_account_1c6t3_37",avatar:"_avatar_1c6t3_37",dark:"_dark_1c6t3_43"};const x=({menu:e})=>{const{dispatch:a}=m("login"),{state:t}=m("me"),r=c.createElement(u,{className:j.menu,selectedKeys:[],onClick:e=>{const{key:t}=e;"logout"!==t?v.push(`/account/${t}`):null==a||a("logout")}},e&&c.createElement(u.Item,{key:"center"},c.createElement(b,null),"个人中心"),e&&c.createElement(u.Item,{key:"settings"},c.createElement(d,null),"个人设置"),e&&c.createElement(u.Divider,null),c.createElement(u.Item,{key:"logout"},c.createElement(p,null),"退出登录"));return c.createElement(O,{overlay:r},c.createElement("span",{className:`${j.action} ${j.account}`},c.createElement(i,{size:"small",className:j.avatar,src:t.avatar,alt:"avatar"}),c.createElement("span",{className:`${j.name} anticon`},t.name)))},C=()=>{let e=j.right;return c.createElement(E,{className:e},c.createElement("span",{className:j.action},c.createElement(g,null)),c.createElement(x,{menu:!0}))},I={navTheme:"light",layout:"side",contentWidth:"Fluid",fixedHeader:!0,fixSiderbar:!0,colorWeak:!1,title:"Vite React",iconfontUrl:""};export default e=>{const a=h();return c.createElement(_,l(l(l({logo:"https://github.com/vitjs/vit/raw/master/icons/logo.svg"},e),{onPageChange:()=>{"ok"!==localStorage.getItem("status")&&"/user/login"!==v.location.pathname&&v.push("/user/login")},onMenuHeaderClick:()=>v.push("/"),menuItemRender:(e,t)=>e.isUrl||!e.path||a.pathname===e.path?t:c.createElement(f,{to:e.path},t),rightContentRender:()=>c.createElement(C,null),breadcrumbRender:(e=[])=>[{path:"/",breadcrumbName:c.createElement(y,null)},...e],itemRender:(e,a,t,r)=>0===t.indexOf(e)?c.createElement(f,{to:r.join("/")},e.breadcrumbName):c.createElement("span",null,e.breadcrumbName),footerRender:()=>c.createElement(N,null)}),I))};
