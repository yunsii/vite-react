import{r as t,c as T}from"./react-venders.5235ec1f.js";import{F as B,J as En,_ as O,D as Lt,a as ge,c as z,e as E,U as Je,V as Xe,Q as Ze,P as Qe,o as et,K as kt,b as V,w as we,k as Rn,q as qe,r as vt,d as _n,an as Nn,p as wt,Y as Kn}from"./index.cb6fb8e2.js";import{s as At}from"./index.e8c4f864.js";import{F as Oe,K as ee,T as wn,C as On,u as We,E as Tn}from"./focus.4488a975.js";import{_ as $n,c as Dn}from"./index.8cbc3436.js";import{a as Ft}from"./Sider.b6da53b4.js";var Ln=["children","locked"],J=t.exports.createContext(null);function kn(n,e){var a=O({},n);return Object.keys(e).forEach(function(r){var o=e[r];o!==void 0&&(a[r]=o)}),a}function Te(n){var e=n.children,a=n.locked,r=B(n,Ln),o=t.exports.useContext(J),l=En(function(){return kn(o,r)},[o,r],function(i,s){return!a&&(i[0]!==s[0]||!At(i[1],s[1]))});return t.exports.createElement(J.Provider,{value:l},e)}function Vt(n,e,a,r){var o=t.exports.useContext(J),l=o.activeKey,i=o.onActive,s=o.onInactive,u={active:l===n};return e||(u.onMouseEnter=function(c){a==null||a({key:n,domEvent:c}),i(n)},u.onMouseLeave=function(c){r==null||r({key:n,domEvent:c}),s(n)}),u}var An=["item"];function Ye(n){var e=n.item,a=B(n,An);return Object.defineProperty(a,"item",{get:function(){return Lt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}function zt(n){var e=n.icon,a=n.props,r=n.children,o;return typeof e=="function"?o=t.exports.createElement(e,O({},a)):o=e,o||r||null}function jt(n){var e=t.exports.useContext(J),a=e.mode,r=e.rtl,o=e.inlineIndent;if(a!=="inline")return null;var l=n;return r?{paddingRight:l*o}:{paddingLeft:l*o}}var Fn=[],Ut=t.exports.createContext(null);function tt(){return t.exports.useContext(Ut)}var Wt=t.exports.createContext(Fn);function be(n){var e=t.exports.useContext(Wt);return t.exports.useMemo(function(){return n!==void 0?[].concat(ge(e),[n]):e},[e,n])}var Gt=t.exports.createContext(null),Ht=t.exports.createContext(null);function qt(n,e){return n===void 0?null:"".concat(n,"-").concat(e)}function Yt(n){var e=t.exports.useContext(Ht);return qt(e,n)}var ft=t.exports.createContext({}),Vn=["title","attribute","elementRef"],zn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],jn=["active"],Un=function(n){Je(a,n);var e=Xe(a);function a(){return Ze(this,a),e.apply(this,arguments)}return Qe(a,[{key:"render",value:function(){var o=this.props,l=o.title,i=o.attribute,s=o.elementRef,u=B(o,Vn),c=et(u,["eventKey"]);return Lt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.exports.createElement(Oe.Item,T({},i,{title:typeof l=="string"?l:void 0},c,{ref:s}))}}]),a}(t.exports.Component),Wn=function(e){var a,r=e.style,o=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,s=e.itemIcon,u=e.children,c=e.role,d=e.onMouseEnter,g=e.onMouseLeave,m=e.onClick,y=e.onKeyDown,p=e.onFocus,b=B(e,zn),I=Yt(l),h=t.exports.useContext(J),M=h.prefixCls,x=h.onItemClick,f=h.disabled,C=h.overflowDisabled,v=h.itemIcon,$=h.selectedKeys,P=h.onActive,K=t.exports.useContext(ft),j=K._internalRenderMenuItem,w="".concat(M,"-item"),A=t.exports.useRef(),te=t.exports.useRef(),U=f||i,D=be(l),L=function(k){return{key:l,keyPath:ge(D).reverse(),item:A.current,domEvent:k}},_=s||v,G=Vt(l,U,d,g),fe=G.active,pe=B(G,jn),se=$.includes(l),ue=jt(D.length),ne=function(k){if(!U){var X=L(k);m==null||m(Ye(X)),x(X)}},F=function(k){if(y==null||y(k),k.which===ee.ENTER){var X=L(k);m==null||m(Ye(X)),x(X)}},H=function(k){P(l),p==null||p(k)},me={};e.role==="option"&&(me["aria-selected"]=se);var ce=t.exports.createElement(Un,T({ref:A,elementRef:te,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":C&&I?null:I},b,pe,me,{component:"li","aria-disabled":i,style:O(O({},ue),r),className:z(w,(a={},E(a,"".concat(w,"-active"),fe),E(a,"".concat(w,"-selected"),se),E(a,"".concat(w,"-disabled"),U),a),o),onClick:ne,onKeyDown:F,onFocus:H}),u,t.exports.createElement(zt,{props:O(O({},e),{},{isSelected:se}),icon:_}));return j&&(ce=j(ce,e)),ce};function pt(n){var e=n.eventKey,a=tt(),r=be(e);return t.exports.useEffect(function(){if(a)return a.registerPath(e,r),function(){a.unregisterPath(e,r)}},[r]),a?null:t.exports.createElement(Wn,n)}function mt(n,e){return kt(n).map(function(a,r){if(t.exports.isValidElement(a)){var o,l,i=a.key,s=(o=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&o!==void 0?o:i,u=s==null;u&&(s="tmp_key-".concat([].concat(ge(e),[r]).join("-")));var c={key:s,eventKey:s};return t.exports.cloneElement(a,c)}return a})}function he(n){var e=t.exports.useRef(n);e.current=n;var a=t.exports.useCallback(function(){for(var r,o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(r=e.current)===null||r===void 0?void 0:r.call.apply(r,[e].concat(l))},[]);return n?a:void 0}var Gn=["className","children"],Hn=function(e,a){var r=e.className,o=e.children,l=B(e,Gn),i=t.exports.useContext(J),s=i.prefixCls,u=i.mode,c=i.rtl;return t.exports.createElement("ul",T({className:z(s,c&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(u==="inline"?"inline":"vertical"),r)},l,{"data-menu-list":!0,ref:a}),o)},xt=t.exports.forwardRef(Hn);xt.displayName="SubMenuList";var le={adjustX:1,adjustY:1},qn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},Yn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}};function Bt(n,e,a){if(e)return e;if(a)return a[n]||a.other}var Bn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Jn(n){var e=n.prefixCls,a=n.visible,r=n.children,o=n.popup,l=n.popupClassName,i=n.popupOffset,s=n.disabled,u=n.mode,c=n.onVisibleChange,d=t.exports.useContext(J),g=d.getPopupContainer,m=d.rtl,y=d.subMenuOpenDelay,p=d.subMenuCloseDelay,b=d.builtinPlacements,I=d.triggerSubMenuAction,h=d.forceSubMenuRender,M=d.motion,x=d.defaultMotions,f=t.exports.useState(!1),C=V(f,2),v=C[0],$=C[1],P=m?O(O({},Yn),b):O(O({},qn),b),K=Bn[u],j=Bt(u,M,x),w=O(O({},j),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),A=t.exports.useRef();return t.exports.useEffect(function(){return A.current=we(function(){$(a)}),function(){we.cancel(A.current)}},[a]),t.exports.createElement(wn,{prefixCls:e,popupClassName:z("".concat(e,"-popup"),E({},"".concat(e,"-rtl"),m),l),stretch:u==="horizontal"?"minWidth":null,getPopupContainer:g,builtinPlacements:P,popupPlacement:K,popupVisible:v,popup:o,popupAlign:i&&{offset:i},action:s?[]:[I],mouseEnterDelay:y,mouseLeaveDelay:p,onPopupVisibleChange:c,forceRender:h,popupMotion:w},r)}function Xn(n){var e=n.id,a=n.open,r=n.keyPath,o=n.children,l="inline",i=t.exports.useContext(J),s=i.prefixCls,u=i.forceSubMenuRender,c=i.motion,d=i.defaultMotions,g=i.mode,m=t.exports.useRef(!1);m.current=g===l;var y=t.exports.useState(!m.current),p=V(y,2),b=p[0],I=p[1],h=m.current?a:!1;t.exports.useEffect(function(){m.current&&I(!1)},[g]);var M=O({},Bt(l,c,d));r.length>1&&(M.motionAppear=!1);var x=M.onVisibleChanged;return M.onVisibleChanged=function(f){return!m.current&&!f&&I(!0),x==null?void 0:x(f)},b?null:t.exports.createElement(Te,{mode:l,locked:!m.current},t.exports.createElement(Rn,T({visible:h},M,{forceRender:u,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(f){var C=f.className,v=f.style;return t.exports.createElement(xt,{id:e,className:C,style:v},o)}))}var Zn=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Qn=["active"],er=function(e){var a,r=e.style,o=e.className,l=e.title,i=e.eventKey;e.warnKey;var s=e.disabled,u=e.internalPopupClose,c=e.children,d=e.itemIcon,g=e.expandIcon,m=e.popupClassName,y=e.popupOffset,p=e.onClick,b=e.onMouseEnter,I=e.onMouseLeave,h=e.onTitleClick,M=e.onTitleMouseEnter,x=e.onTitleMouseLeave,f=B(e,Zn),C=Yt(i),v=t.exports.useContext(J),$=v.prefixCls,P=v.mode,K=v.openKeys,j=v.disabled,w=v.overflowDisabled,A=v.activeKey,te=v.selectedKeys,U=v.itemIcon,D=v.expandIcon,L=v.onItemClick,_=v.onOpenChange,G=v.onActive,fe=t.exports.useContext(ft),pe=fe._internalRenderSubMenuItem,se=t.exports.useContext(Gt),ue=se.isSubPathKey,ne=be(),F="".concat($,"-submenu"),H=j||s,me=t.exports.useRef(),ce=t.exports.useRef(),re=d||U,k=g||D,X=K.includes(i),de=!w&&X,ye=ue(te,i),xe=Vt(i,H,M,x),Ie=xe.active,Le=B(xe,Qn),ke=t.exports.useState(!1),Ae=V(ke,2),Z=Ae[0],nt=Ae[1],Me=function(Y){H||nt(Y)},Fe=function(Y){Me(!0),b==null||b({key:i,domEvent:Y})},rt=function(Y){Me(!1),I==null||I({key:i,domEvent:Y})},Ve=t.exports.useMemo(function(){return Ie||(P!=="inline"?Z||ue([A],i):!1)},[P,Ie,A,Z,i,ue]),ze=jt(ne.length),Pe=function(Y){H||(h==null||h({key:i,domEvent:Y}),P==="inline"&&_(i,!X))},at=he(function(W){p==null||p(Ye(W)),L(W)}),je=function(Y){P!=="inline"&&_(i,Y)},q=function(){G(i)},Se=C&&"".concat(C,"-popup"),Ee=t.exports.createElement("div",T({role:"menuitem",style:ze,className:"".concat(F,"-title"),tabIndex:H?null:-1,ref:me,title:typeof l=="string"?l:null,"data-menu-id":w&&C?null:C,"aria-expanded":de,"aria-haspopup":!0,"aria-controls":Se,"aria-disabled":H,onClick:Pe,onFocus:q},Le),l,t.exports.createElement(zt,{icon:P!=="horizontal"?k:null,props:O(O({},e),{},{isOpen:de,isSubMenu:!0})},t.exports.createElement("i",{className:"".concat(F,"-arrow")}))),Re=t.exports.useRef(P);if(P!=="inline"&&(Re.current=ne.length>1?"vertical":P),!w){var ae=Re.current;Ee=t.exports.createElement(Jn,{mode:ae,prefixCls:F,visible:!u&&de&&P!=="inline",popupClassName:m,popupOffset:y,popup:t.exports.createElement(Te,{mode:ae==="horizontal"?"vertical":ae},t.exports.createElement(xt,{id:Se,ref:ce},c)),disabled:H,onVisibleChange:je},Ee)}var _e=t.exports.createElement(Oe.Item,T({role:"none"},f,{component:"li",style:r,className:z(F,"".concat(F,"-").concat(P),o,(a={},E(a,"".concat(F,"-open"),de),E(a,"".concat(F,"-active"),Ve),E(a,"".concat(F,"-selected"),ye),E(a,"".concat(F,"-disabled"),H),a)),onMouseEnter:Fe,onMouseLeave:rt}),Ee,!w&&t.exports.createElement(Xn,{id:Se,open:de,keyPath:ne},c));return pe&&(_e=pe(_e,e)),t.exports.createElement(Te,{onItemClick:at,mode:P==="horizontal"?"vertical":P,itemIcon:re,expandIcon:k},_e)};function Ct(n){var e=n.eventKey,a=n.children,r=be(e),o=mt(a,r),l=tt();t.exports.useEffect(function(){if(l)return l.registerPath(e,r),function(){l.unregisterPath(e,r)}},[r]);var i;return l?i=o:i=t.exports.createElement(er,n,o),t.exports.createElement(Wt.Provider,{value:r},i)}var st=ee.LEFT,ut=ee.RIGHT,ct=ee.UP,Ge=ee.DOWN,He=ee.ENTER,Jt=ee.ESC,Ne=ee.HOME,Ke=ee.END,Ot=[ct,Ge,st,ut];function tr(n,e,a,r){var o,l,i,s,u="prev",c="next",d="children",g="parent";if(n==="inline"&&r===He)return{inlineTrigger:!0};var m=(o={},E(o,ct,u),E(o,Ge,c),o),y=(l={},E(l,st,a?c:u),E(l,ut,a?u:c),E(l,Ge,d),E(l,He,d),l),p=(i={},E(i,ct,u),E(i,Ge,c),E(i,He,d),E(i,Jt,g),E(i,st,a?d:g),E(i,ut,a?g:d),i),b={inline:m,horizontal:y,vertical:p,inlineSub:m,horizontalSub:p,verticalSub:p},I=(s=b["".concat(n).concat(e?"":"Sub")])===null||s===void 0?void 0:s[r];switch(I){case u:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case g:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function nr(n){for(var e=n;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function rr(n,e){for(var a=n||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function Xt(n,e){var a=On(n,!0);return a.filter(function(r){return e.has(r)})}function Tt(n,e,a){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var o=Xt(n,e),l=o.length,i=o.findIndex(function(s){return a===s});return r<0?i===-1?i=l-1:i-=1:r>0&&(i+=1),i=(i+l)%l,o[i]}function ar(n,e,a,r,o,l,i,s,u,c){var d=t.exports.useRef(),g=t.exports.useRef();g.current=e;var m=function(){we.cancel(d.current)};return t.exports.useEffect(function(){return function(){m()}},[]),function(y){var p=y.which;if([].concat(Ot,[He,Jt,Ne,Ke]).includes(p)){var b,I,h,M=function(){b=new Set,I=new Map,h=new Map;var D=l();return D.forEach(function(L){var _=document.querySelector("[data-menu-id='".concat(qt(r,L),"']"));_&&(b.add(_),h.set(_,L),I.set(L,_))}),b};M();var x=I.get(e),f=rr(x,b),C=h.get(f),v=tr(n,i(C,!0).length===1,a,p);if(!v&&p!==Ne&&p!==Ke)return;(Ot.includes(p)||[Ne,Ke].includes(p))&&y.preventDefault();var $=function(D){if(D){var L=D,_=D.querySelector("a");_!=null&&_.getAttribute("href")&&(L=_);var G=h.get(D);s(G),m(),d.current=we(function(){g.current===G&&L.focus()})}};if([Ne,Ke].includes(p)||v.sibling||!f){var P;!f||n==="inline"?P=o.current:P=nr(f);var K,j=Xt(P,b);p===Ne?K=j[0]:p===Ke?K=j[j.length-1]:K=Tt(P,b,f,v.offset),$(K)}else if(v.inlineTrigger)u(C);else if(v.offset>0)u(C,!0),m(),d.current=we(function(){M();var U=f.getAttribute("aria-controls"),D=document.getElementById(U),L=Tt(D,b);$(L)},5);else if(v.offset<0){var w=i(C,!0),A=w[w.length-2],te=I.get(A);u(A,!1),$(te)}}c==null||c(y)}}var or=Math.random().toFixed(5).toString().slice(2),$t=0;function ir(n){var e=We(n,{value:n}),a=V(e,2),r=a[0],o=a[1];return t.exports.useEffect(function(){$t+=1;var l="".concat(or,"-").concat($t);o("rc-menu-uuid-".concat(l))},[]),r}function lr(n){Promise.resolve().then(n)}var ht="__RC_UTIL_PATH_SPLIT__",Dt=function(e){return e.join(ht)},sr=function(e){return e.split(ht)},dt="rc-menu-more";function ur(){var n=t.exports.useState({}),e=V(n,2),a=e[1],r=t.exports.useRef(new Map),o=t.exports.useRef(new Map),l=t.exports.useState([]),i=V(l,2),s=i[0],u=i[1],c=t.exports.useRef(0),d=t.exports.useRef(!1),g=function(){d.current||a({})},m=t.exports.useCallback(function(x,f){var C=Dt(f);o.current.set(C,x),r.current.set(x,C),c.current+=1;var v=c.current;lr(function(){v===c.current&&g()})},[]),y=t.exports.useCallback(function(x,f){var C=Dt(f);o.current.delete(C),r.current.delete(x)},[]),p=t.exports.useCallback(function(x){u(x)},[]),b=t.exports.useCallback(function(x,f){var C=r.current.get(x)||"",v=sr(C);return f&&s.includes(v[0])&&v.unshift(dt),v},[s]),I=t.exports.useCallback(function(x,f){return x.some(function(C){var v=b(C,!0);return v.includes(f)})},[b]),h=function(){var f=ge(r.current.keys());return s.length&&f.push(dt),f},M=t.exports.useCallback(function(x){var f="".concat(r.current.get(x)).concat(ht),C=new Set;return ge(o.current.keys()).forEach(function(v){v.startsWith(f)&&C.add(o.current.get(v))}),C},[]);return t.exports.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:m,unregisterPath:y,refreshOverflowKeys:p,isSubPathKey:I,getKeyPath:b,getKeys:h,getSubPathKeys:M}}var cr=["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ce=[],dr=function(e){var a,r,o=e.prefixCls,l=o===void 0?"rc-menu":o,i=e.style,s=e.className,u=e.tabIndex,c=u===void 0?0:u,d=e.children,g=e.direction,m=e.id,y=e.mode,p=y===void 0?"vertical":y,b=e.inlineCollapsed,I=e.disabled,h=e.disabledOverflow,M=e.subMenuOpenDelay,x=M===void 0?.1:M,f=e.subMenuCloseDelay,C=f===void 0?.1:f,v=e.forceSubMenuRender,$=e.defaultOpenKeys,P=e.openKeys,K=e.activeKey,j=e.defaultActiveFirst,w=e.selectable,A=w===void 0?!0:w,te=e.multiple,U=te===void 0?!1:te,D=e.defaultSelectedKeys,L=e.selectedKeys,_=e.onSelect,G=e.onDeselect,fe=e.inlineIndent,pe=fe===void 0?24:fe,se=e.motion,ue=e.defaultMotions,ne=e.triggerSubMenuAction,F=ne===void 0?"hover":ne,H=e.builtinPlacements,me=e.itemIcon,ce=e.expandIcon,re=e.overflowedIndicator,k=re===void 0?"...":re,X=e.overflowedIndicatorPopupClassName,de=e.getPopupContainer,ye=e.onClick,xe=e.onOpenChange,Ie=e.onKeyDown;e.openAnimation,e.openTransitionName;var Le=e._internalRenderMenuItem,ke=e._internalRenderSubMenuItem,Ae=B(e,cr),Z=mt(d,Ce),nt=t.exports.useState(!1),Me=V(nt,2),Fe=Me[0],rt=Me[1],Ve=t.exports.useRef(),ze=ir(m),Pe=g==="rtl",at=t.exports.useMemo(function(){return(p==="inline"||p==="vertical")&&b?["vertical",b]:[p,!1]},[p,b]),je=V(at,2),q=je[0],Se=je[1],Ee=t.exports.useState(0),Re=V(Ee,2),ae=Re[0],_e=Re[1],W=ae>=Z.length-1||q!=="horizontal"||h,Y=We($,{value:P,postState:function(S){return S||Ce}}),gt=V(Y,2),oe=gt[0],bt=gt[1],ot=function(S){bt(S),xe==null||xe(S)},nn=t.exports.useState(oe),yt=V(nn,2),rn=yt[0],an=yt[1],it=q==="inline",It=t.exports.useRef(!1);t.exports.useEffect(function(){it&&an(oe)},[oe]),t.exports.useEffect(function(){if(!It.current){It.current=!0;return}it?bt(rn):ot(Ce)},[it]);var ve=ur(),Mt=ve.registerPath,Pt=ve.unregisterPath,on=ve.refreshOverflowKeys,St=ve.isSubPathKey,ln=ve.getKeyPath,sn=ve.getKeys,un=ve.getSubPathKeys,cn=t.exports.useMemo(function(){return{registerPath:Mt,unregisterPath:Pt}},[Mt,Pt]),dn=t.exports.useMemo(function(){return{isSubPathKey:St}},[St]);t.exports.useEffect(function(){on(W?Ce:Z.slice(ae+1).map(function(R){return R.key}))},[ae,W]);var vn=We(K||j&&((a=Z[0])===null||a===void 0?void 0:a.key),{value:K}),Et=V(vn,2),Rt=Et[0],lt=Et[1],fn=he(function(R){lt(R)}),pn=he(function(){lt(void 0)}),mn=We(D||[],{value:L,postState:function(S){return Array.isArray(S)?S:S==null?Ce:[S]}}),_t=V(mn,2),Ue=_t[0],xn=_t[1],Cn=function(S){if(A){var N=S.key,ie=Ue.includes(N),Q;U?ie?Q=Ue.filter(function(Sn){return Sn!==N}):Q=[].concat(ge(Ue),[N]):Q=[N],xn(Q);var Kt=O(O({},S),{},{selectedKeys:Q});ie?G==null||G(Kt):_==null||_(Kt)}!U&&oe.length&&q!=="inline"&&ot(Ce)},hn=he(function(R){ye==null||ye(Ye(R)),Cn(R)}),Nt=he(function(R,S){var N=oe.filter(function(Q){return Q!==R});if(S)N.push(R);else if(q!=="inline"){var ie=un(R);N=N.filter(function(Q){return!ie.has(Q)})}At(oe,N)||ot(N)}),gn=he(de),bn=function(S,N){var ie=N!=null?N:!oe.includes(S);Nt(S,ie)},yn=ar(q,Rt,Pe,ze,Ve,sn,ln,lt,bn,Ie);t.exports.useEffect(function(){rt(!0)},[]);var In=t.exports.useMemo(function(){return{_internalRenderMenuItem:Le,_internalRenderSubMenuItem:ke}},[Le,ke]),Mn=q!=="horizontal"||h?Z:Z.map(function(R,S){return t.exports.createElement(Te,{key:R.key,overflowDisabled:S>ae},R)}),Pn=t.exports.createElement(Oe,T({id:m,ref:Ve,prefixCls:"".concat(l,"-overflow"),component:"ul",itemComponent:pt,className:z(l,"".concat(l,"-root"),"".concat(l,"-").concat(q),s,(r={},E(r,"".concat(l,"-inline-collapsed"),Se),E(r,"".concat(l,"-rtl"),Pe),r)),dir:g,style:i,role:"menu",tabIndex:c,data:Mn,renderRawItem:function(S){return S},renderRawRest:function(S){var N=S.length,ie=N?Z.slice(-N):null;return t.exports.createElement(Ct,{eventKey:dt,title:k,disabled:W,internalPopupClose:N===0,popupClassName:X},ie)},maxCount:q!=="horizontal"||h?Oe.INVALIDATE:Oe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(S){_e(S)},onKeyDown:yn},Ae));return t.exports.createElement(ft.Provider,{value:In},t.exports.createElement(Ht.Provider,{value:ze},t.exports.createElement(Te,{prefixCls:l,mode:q,openKeys:oe,rtl:Pe,disabled:I,motion:Fe?se:null,defaultMotions:Fe?ue:null,activeKey:Rt,onActive:fn,onInactive:pn,selectedKeys:Ue,inlineIndent:pe,subMenuOpenDelay:x,subMenuCloseDelay:C,forceSubMenuRender:v,builtinPlacements:H,triggerSubMenuAction:F,getPopupContainer:gn,itemIcon:me,expandIcon:ce,onItemClick:hn,onOpenChange:Nt},t.exports.createElement(Gt.Provider,{value:dn},Pn),t.exports.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.exports.createElement(Ut.Provider,{value:cn},Z)))))},vr=["className","title","eventKey","children"],fr=["children"],pr=function(e){var a=e.className,r=e.title;e.eventKey;var o=e.children,l=B(e,vr),i=t.exports.useContext(J),s=i.prefixCls,u="".concat(s,"-item-group");return t.exports.createElement("li",T({},l,{onClick:function(d){return d.stopPropagation()},className:z(u,a)}),t.exports.createElement("div",{className:"".concat(u,"-title"),title:typeof r=="string"?r:void 0},r),t.exports.createElement("ul",{className:"".concat(u,"-list")},o))};function Zt(n){var e=n.children,a=B(n,fr),r=be(a.eventKey),o=mt(e,r),l=tt();return l?o:t.exports.createElement(pr,et(a,["warnKey"]),o)}function Qt(n){var e=n.className,a=n.style,r=t.exports.useContext(J),o=r.prefixCls,l=tt();return l?null:t.exports.createElement("li",{className:z("".concat(o,"-item-divider"),e),style:a})}var mr=be,$e=dr;$e.Item=pt;$e.SubMenu=Ct;$e.ItemGroup=Zt;$e.Divider=Qt;var xr=t.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),Be=xr;function Cr(n){var e,a=n.popupClassName,r=n.icon,o=n.title,l=n.theme,i=t.exports.useContext(Be),s=i.prefixCls,u=i.inlineCollapsed,c=i.antdMenuTheme,d=mr(),g;if(!r)g=u&&!d.length&&o&&typeof o=="string"?t.exports.createElement("div",{className:"".concat(s,"-inline-collapsed-noicon")},o.charAt(0)):t.exports.createElement("span",{className:"".concat(s,"-title-content")},o);else{var m=qe(o)&&o.type==="span";g=t.exports.createElement(t.exports.Fragment,null,vt(r,{className:z(qe(r)?(e=r.props)===null||e===void 0?void 0:e.className:"","".concat(s,"-item-icon"))}),m?o:t.exports.createElement("span",{className:"".concat(s,"-title-content")},o))}var y=t.exports.useMemo(function(){return T(T({},i),{firstLevel:!1})},[i]);return t.exports.createElement(Be.Provider,{value:y},t.exports.createElement(Ct,T({},et(n,["icon"]),{title:g,popupClassName:z(s,"".concat(s,"-").concat(l||c),a)})))}var hr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},en=function(n){Je(a,n);var e=Xe(a);function a(){var r;return Ze(this,a),r=e.apply(this,arguments),r.renderItem=function(o){var l,i=o.siderCollapsed,s,u=r.context,c=u.prefixCls,d=u.firstLevel,g=u.inlineCollapsed,m=u.direction,y=u.disableMenuItemTitleTooltip,p=r.props,b=p.className,I=p.children,h=r.props,M=h.title,x=h.icon,f=h.danger,C=hr(h,["title","icon","danger"]),v=M;typeof M=="undefined"?v=d?I:"":M===!1&&(v="");var $={title:v};!i&&!g&&($.title=null,$.visible=!1);var P=kt(I).length,K=t.exports.createElement(pt,T({},C,{className:z((l={},E(l,"".concat(c,"-item-danger"),f),E(l,"".concat(c,"-item-only-child"),(x?P+1:P)===1),l),b),title:typeof M=="string"?M:void 0}),vt(x,{className:z(qe(x)?(s=x.props)===null||s===void 0?void 0:s.className:"","".concat(c,"-item-icon"))}),r.renderItemChildren(g));return y||(K=t.exports.createElement($n,T({},$,{placement:m==="rtl"?"left":"right",overlayClassName:"".concat(c,"-inline-collapsed-tooltip")}),K)),K},r}return Qe(a,[{key:"renderItemChildren",value:function(o){var l=this.context,i=l.prefixCls,s=l.firstLevel,u=this.props,c=u.icon,d=u.children,g=t.exports.createElement("span",{className:"".concat(i,"-title-content")},d);return(!c||qe(d)&&d.type==="span")&&d&&o&&s&&typeof d=="string"?t.exports.createElement("div",{className:"".concat(i,"-inline-collapsed-noicon")},d.charAt(0)):g}},{key:"render",value:function(){return t.exports.createElement(Ft.Consumer,null,this.renderItem)}}]),a}(t.exports.Component);en.contextType=Be;var gr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},br=function(e){var a=e.prefixCls,r=e.className,o=e.dashed,l=gr(e,["prefixCls","className","dashed"]),i=t.exports.useContext(_n),s=i.getPrefixCls,u=s("menu",a),c=z(E({},"".concat(u,"-item-divider-dashed"),!!o),r);return t.exports.createElement(Qt,T({className:c},l))},yr=br,Ir=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},tn=function(n){Je(a,n);var e=Xe(a);function a(r){var o;return Ze(this,a),o=e.call(this,r),o.getMemoizedContextValue=Nn(function(l,i,s,u,c){return{prefixCls:l,inlineCollapsed:i||!1,antdMenuTheme:s,direction:u,firstLevel:!0,disableMenuItemTitleTooltip:c}}),o.renderMenu=function(l){var i=l.getPopupContainer,s=l.getPrefixCls,u=l.direction,c=s(),d=o.props,g=d.prefixCls,m=d.className,y=d.theme,p=d.expandIcon,b=d._internalDisableMenuItemTitleTooltip,I=Ir(d,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip"]),h=et(I,["siderCollapsed","collapsedWidth"]),M=o.getInlineCollapsed(),x={horizontal:{motionName:"".concat(c,"-slide-up")},inline:Dn,other:{motionName:"".concat(c,"-zoom-big")}},f=s("menu",g),C=z("".concat(f,"-").concat(y),m),v=o.getMemoizedContextValue(f,M,y,u,b);return t.exports.createElement(Be.Provider,{value:v},t.exports.createElement($e,T({getPopupContainer:i,overflowedIndicator:t.exports.createElement(Tn,null),overflowedIndicatorPopupClassName:"".concat(f,"-").concat(y)},h,{inlineCollapsed:M,className:C,prefixCls:f,direction:u,defaultMotions:x,expandIcon:vt(p,{className:"".concat(f,"-submenu-expand-icon")})})))},wt(!("inlineCollapsed"in r&&r.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),wt(!(r.siderCollapsed!==void 0&&"inlineCollapsed"in r),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),o}return Qe(a,[{key:"getInlineCollapsed",value:function(){var o=this.props,l=o.inlineCollapsed,i=o.siderCollapsed;return i!==void 0?i:l}},{key:"render",value:function(){return t.exports.createElement(Kn,null,this.renderMenu)}}]),a}(t.exports.Component);tn.defaultProps={theme:"light"};var De=function(n){Je(a,n);var e=Xe(a);function a(){return Ze(this,a),e.apply(this,arguments)}return Qe(a,[{key:"render",value:function(){var o=this;return t.exports.createElement(Ft.Consumer,null,function(l){return t.exports.createElement(tn,T({},o.props,l))})}}]),a}(t.exports.Component);De.Divider=yr;De.Item=en;De.SubMenu=Cr;De.ItemGroup=Zt;var Kr=De,Mr=t.exports.createContext({}),wr=Mr;export{Kr as M,wr as R};
