import{h as Y,i as Z,j as ee,k as re,f as te,n as ne,c as y,b as C,t as oe,M as ae,R as se,N as ce,S as le,O as ie,Q as ue,T as pe,U as de,V as me,W as fe}from"./index.2946d84a.js";import{g as Ce,P as ve,C as xe,T as k}from"./index.ebef0161.js";import"./useForceUpdate.53b00dac.js";import"./button.3eff13e1.js";import{r as t,d as F,k as l,o as S}from"./react-venders.4b0a87d2.js";var he=function(c){Y(n,c);var e=Z(n);function n(){var r;return ee(this,n),r=e.apply(this,arguments),r.state={error:void 0,info:{componentStack:""}},r}return re(n,[{key:"componentDidCatch",value:function(a,i){this.setState({error:a,info:i})}},{key:"render",value:function(){var a=this.props,i=a.message,d=a.description,v=a.children,x=this.state,h=x.error,m=x.info,g=m&&m.componentStack?m.componentStack:null,E=typeof i=="undefined"?(h||"").toString():i,b=typeof d=="undefined"?g:d;return h?t.exports.createElement($,{type:"error",message:E,description:t.exports.createElement("pre",null,b)}):v}}]),n}(t.exports.Component),ye=globalThis&&globalThis.__rest||function(c,e){var n={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&e.indexOf(r)<0&&(n[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(c);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(c,r[a])&&(n[r[a]]=c[r[a]]);return n},ge={success:ce,info:le,error:ie,warning:ue},Ee={success:pe,info:de,error:me,warning:fe},D=function(e){var n,r=e.description,a=e.prefixCls,i=e.message,d=e.banner,v=e.className,x=v===void 0?"":v,h=e.style,m=e.onMouseEnter,g=e.onMouseLeave,E=e.onClick,b=e.afterClose,O=e.showIcon,j=e.closable,N=e.closeText,I=e.closeIcon,L=I===void 0?t.exports.createElement(ae,null):I,w=e.action,f=ye(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),R=t.exports.useState(!1),T=te(R,2),M=T[0],H=T[1],W=t.exports.useRef(),_=t.exports.useContext(ne),z=_.getPrefixCls,Q=_.direction,o=z("alert",a),U=function(s){var p;H(!0),(p=f.onClose)===null||p===void 0||p.call(f,s)},V=function(){var s=f.type;return s!==void 0?s:d?"warning":"info"},q=N?!0:j,A=V(),G=function(){var s=f.icon,p=(r?Ee:ge)[A]||null;return s?se(s,t.exports.createElement("span",{className:"".concat(o,"-icon")},s),function(){return{className:y("".concat(o,"-icon"),C({},s.props.className,s.props.className))}}):t.exports.createElement(p,{className:"".concat(o,"-icon")})},J=function(){return q?t.exports.createElement("button",{type:"button",onClick:U,className:"".concat(o,"-close-icon"),tabIndex:0},N?t.exports.createElement("span",{className:"".concat(o,"-close-text")},N):L):null},P=d&&O===void 0?!0:O,K=y(o,"".concat(o,"-").concat(A),(n={},C(n,"".concat(o,"-with-description"),!!r),C(n,"".concat(o,"-no-icon"),!P),C(n,"".concat(o,"-banner"),!!d),C(n,"".concat(o,"-rtl"),Q==="rtl"),n),x),X=Ce(f);return t.exports.createElement(oe,{visible:!M,motionName:"".concat(o,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(s){return{maxHeight:s.offsetHeight}},onLeaveEnd:b},function(u){var s=u.className,p=u.style;return t.exports.createElement("div",F({ref:W,"data-show":!M,className:y(K,s),style:F(F({},h),p),onMouseEnter:m,onMouseLeave:g,onClick:E,role:"alert"},X),P?G():null,t.exports.createElement("div",{className:"".concat(o,"-content")},i?t.exports.createElement("div",{className:"".concat(o,"-message")},i):null,r?t.exports.createElement("div",{className:"".concat(o,"-description")},r):null),w?t.exports.createElement("div",{className:"".concat(o,"-action")},w):null,J())})};D.ErrorBoundary=he;var $=D;const be="_pre_1ilw1_2";var Ne={pre:be};const B=({children:c})=>l("pre",{className:y(Ne.pre,"my-12px px-20px py-12px"),children:l("code",{children:l(k.Text,{copyable:!0,children:c})})});function we(){return l(ve,{children:S(xe,{children:[l($,{message:"\u66F4\u5FEB\u66F4\u5F3A\u7684\u91CD\u578B\u7EC4\u4EF6\uFF0C\u5DF2\u7ECF\u53D1\u5E03\u3002",type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),S(k.Text,{strong:!0,children:["\u9AD8\u7EA7\u8868\u683C",l("a",{href:"https://procomponents.ant.design/components/table",rel:"noopener noreferrer",target:"__blank",children:"\u6B22\u8FCE\u4F7F\u7528"})]}),l(B,{children:"yarn add @ant-design/pro-table"}),S(k.Text,{strong:!0,style:{marginBottom:12},children:["\u9AD8\u7EA7\u5E03\u5C40",l("a",{href:"https://procomponents.ant.design/components/layout",rel:"noopener noreferrer",target:"__blank",children:"\u6B22\u8FCE\u4F7F\u7528"})]}),l(B,{children:"yarn add @ant-design/pro-layout"})]})})}export{we as default};
