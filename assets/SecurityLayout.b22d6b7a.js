import{u as d,r as u,j as e,l as f,F as m}from"./react-venders.6d4d36aa.js";import{ag as g,al as l,am as h}from"./index.63e668dd.js";const j=({children:n})=>{const{state:t,connectedState:o,dispatch:s}=g({module:"me",connect:{loading:["me/fetchMe"]}}),r=o.loading["me/fetchMe"],c=d(),a=t&&!!t.email,i=l({redirect:window.location.href});return u.exports.useEffect(()=>{s("fetchMe")},[]),!a||r?e(h,{}):!a&&c.pathname!=="/user/login"?e(f,{to:`/user/login?${i}`}):e(m,{children:n})};export{j as default};