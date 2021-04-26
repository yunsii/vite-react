var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{g as i,p as a,s,k as c,l as u,L as l}from"./vendor.53115a9c.js";import{G as f}from"./index.19a3bd1b.js";var p="undefined"!=typeof Element,d="function"==typeof Map,h="function"==typeof Set,m="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function y(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,o,i;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!y(e[n],t[n]))return!1;return!0}if(d&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!y(n.value[1],t.get(n.value[0])))return!1;return!0}if(h&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(m&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(p&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==o[n]&&"__v"!==o[n]&&"__o"!==o[n]||!e.$$typeof)&&!y(e[o[n]],t[o[n]]))return!1;return!0}return e!=e&&t!=t}var T=function(e,t){try{return y(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},b=function(e,t,r,n,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function A(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},O=Object.keys(C).map((function(e){return C[e]})),E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S=Object.keys(E).reduce((function(e,t){return e[E[t]]=t,e}),{}),j=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},w=function(e){var t=j(e,C.TITLE),r=j(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=j(e,"defaultTitle");return t||n||void 0},P=function(e){return j(e,"onChangeClientState")||function(){}},x=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return g({},e,t)}),{})},I=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o+=1){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},L=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r,i=Object.keys(e),a=0;a<i.length;a+=1){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a+=1){var s=i[a],c=g({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},k=function(e){return Array.isArray(e)?e.join(""):e},_=[C.NOSCRIPT,C.SCRIPT,C.STYLE],N=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},H=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[E[r]||r]=e[r],t}),t)},R=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return r=t.titleAttributes,(n={key:e=t.title})["data-rh"]=!0,o=H(r,n),[i.createElement(C.TITLE,o,e)];var e,r,n,o},toString:function(){return n=e,o=t.title,i=t.titleAttributes,a=r,s=M(i),c=k(o),s?"<"+n+' data-rh="true" '+s+">"+N(c,a)+"</"+n+">":"<"+n+' data-rh="true">'+N(c,a)+"</"+n+">";var n,o,i,a,s,c}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return H(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return r=e,t.map((function(e,t){var n,o=((n={key:t})["data-rh"]=!0,n);return Object.keys(e).forEach((function(t){var r=E[t]||t;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:e.innerHTML||e.cssText}:o[r]=e[t]})),i.createElement(r,o)}));var r},toString:function(){return n=e,o=r,t.reduce((function(e,t){var r=Object.keys(t).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,r){var n=void 0===t[r]?r:r+'="'+N(t[r],o)+'"';return e?e+" "+n:n}),""),i=t.innerHTML||t.cssText||"",a=-1===_.indexOf(n);return e+"<"+n+' data-rh="true" '+r+(a?"/>":">"+i+"</"+n+">")}),"");var n,o}}}},B=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:R(C.BASE,e.baseTag,r),bodyAttributes:R("bodyAttributes",t,r),htmlAttributes:R("htmlAttributes",n,r),link:R(C.LINK,o,r),meta:R(C.META,i,r),noscript:R(C.NOSCRIPT,a,r),script:R(C.SCRIPT,s,r),style:R(C.STYLE,c,r),title:R(C.TITLE,{title:l,titleAttributes:f},r)}},D=i.createContext({}),Y=a.shape({setHelmet:a.func,helmetInstances:a.shape({get:a.func,add:a.func,remove:a.func})}),q="undefined"!=typeof document,U=function(e){function t(r){var n;return(n=e.call(this,r)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM||(r.context.helmet=B({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n}return v(t,e),t.prototype.render=function(){return i.createElement(D.Provider,{value:this.value},this.props.children)},t}(i.Component);U.canUseDOM=q,U.propTypes={context:a.shape({helmet:a.shape()}),children:a.node.isRequired},U.defaultProps={context:{}},U.displayName="HelmetProvider";var V=function(e,t){var r,n=document.head||document.querySelector(C.HEAD),o=n.querySelectorAll(e+"[data-rh]"),i=[].slice.call(o),a=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&("innerHTML"===o?n.innerHTML=t.innerHTML:"cssText"===o?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(o,void 0===t[o]?"":t[o]));n.setAttribute("data-rh","true"),i.some((function(e,t){return r=t,n.isEqualNode(e)}))?i.splice(r,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},K=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s+=1){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f-=1)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},z=function(e,t){var r,n,o=e.baseTag,i=e.htmlAttributes,a=e.linkTags,s=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;K(C.BODY,e.bodyAttributes),K(C.HTML,i),n=d,void 0!==(r=p)&&document.title!==r&&(document.title=k(r)),K(C.TITLE,n);var h={baseTag:V(C.BASE,o),linkTags:V(C.LINK,a),metaTags:V(C.META,s),noscriptTags:V(C.NOSCRIPT,c),scriptTags:V(C.SCRIPT,l),styleTags:V(C.STYLE,f)},m={},y={};Object.keys(h).forEach((function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=h[e].oldTags)})),t&&t(),u(e,m,y)},F=null,G=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}v(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!s(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,o=null,i=(e=r.helmetInstances.get().map((function(e){var t=g({},e.props);return delete t.context,t})),{baseTag:I(["href"],e),bodyAttributes:x("bodyAttributes",e),defer:j(e,"defer"),encode:j(e,"encodeSpecialCharacters"),htmlAttributes:x("htmlAttributes",e),linkTags:L(C.LINK,["rel","href"],e),metaTags:L(C.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:L(C.NOSCRIPT,["innerHTML"],e),onChangeClientState:P(e),scriptTags:L(C.SCRIPT,["src","innerHTML"],e),styleTags:L(C.STYLE,["cssText"],e),title:w(e),titleAttributes:x("titleAttributes",e)});U.canUseDOM?(t=i,F&&cancelAnimationFrame(F),t.defer?F=requestAnimationFrame((function(){z(t,(function(){F=null}))})):(z(t),F=null)):B&&(o=B(i)),n(o)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(i.Component);G.propTypes={context:Y.isRequired},G.displayName="HelmetDispatcher";var $=function(e){function t(){return e.apply(this,arguments)||this}v(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!T(this.props,e)},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return g({},n,((t={})[r.type]=[].concat(n[r.type]||[],[g({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case C.TITLE:return g({},o,((t={})[n.type]=a,t.titleAttributes=g({},i),t));case C.BODY:return g({},o,{bodyAttributes:g({},i)});case C.HTML:return g({},o,{htmlAttributes:g({},i)});default:return g({},o,((r={})[n.type]=g({},i),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=g({},t);return Object.keys(e).forEach((function(t){var n;r=g({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return b(O.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+O.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),b(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=A(o,["children"]),s=Object.keys(a).reduce((function(e,t){return e[S[t]||t]=a[t],e}),{}),c=e.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(e,i),c){case C.FRAGMENT:t=r.mapChildrenToProps(i,t);break;case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),this.mapArrayTypeChildrenToProps(n,t)},r.render=function(){var e=this.props,t=e.children,r=g({},A(e,["children"]));return t&&(r=this.mapChildrenToProps(t,r)),i.createElement(D.Consumer,null,(function(e){return i.createElement(G,g({},r,{context:e}))}))},t}(i.Component);$.propTypes={base:a.object,bodyAttributes:a.object,children:a.oneOfType([a.arrayOf(a.node),a.node]),defaultTitle:a.string,defer:a.bool,encodeSpecialCharacters:a.bool,htmlAttributes:a.object,link:a.arrayOf(a.object),meta:a.arrayOf(a.object),noscript:a.arrayOf(a.object),onChangeClientState:a.func,script:a.arrayOf(a.object),style:a.arrayOf(a.object),title:a.string,titleAttributes:a.object,titleTemplate:a.string},$.defaultProps={defer:!0,encodeSpecialCharacters:!0},$.displayName="Helmet";var W="_container_14kf8_5",J="_content_14kf8_12",Q="_top_14kf8_27",X="_header_14kf8_30",Z="_logo_14kf8_37",ee="_title_14kf8_42",te="_desc_14kf8_50";export default e=>{const{route:a={routes:[]},children:s,location:p={pathname:""}}=e,{routes:d=[]}=a,{breadcrumb:h}=c(d),m=u(((e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(r)for(var a of r(i))n.call(i,a)&&o(e,a,i[a]);return e})({pathname:p.pathname,breadcrumb:h,title:"Vite React"},e));return i.createElement(U,null,i.createElement($,null,i.createElement("title",null,m),i.createElement("meta",{name:"description",content:m})),i.createElement("div",{className:W},i.createElement("div",{className:J},i.createElement("div",{className:Q},i.createElement("div",{className:X},i.createElement(l,{to:"/"},i.createElement("img",{alt:"logo",className:Z,src:"https://github.com/vitjs/vit/raw/master/icons/logo.svg"}),i.createElement("span",{className:ee},"Vite React"))),i.createElement("div",{className:te},"🚀 Use Vite + React like a Pro!")),s),i.createElement(f,null)))};
