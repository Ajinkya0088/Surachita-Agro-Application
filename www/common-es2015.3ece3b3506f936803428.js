(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=`${e*t/n-e}ms`,s=2*Math.PI*t/n;return{r:5,style:{top:`${9*Math.sin(s)}px`,left:`${9*Math.cos(s)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,s=`${e*r-e}ms`,o=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})}}},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));const r=(e,t)=>null!==t.closest(e),s=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,o=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},i=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!i.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n)}return!1}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));const r=async(e,t,n,r,s)=>{if(e)return e.attachViewToDom(t,n,s,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>o.classList.add(e)),s&&Object.assign(o,s),t.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},SmdQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8Y7J"),s=n("xgBC");let o=(()=>{class e{constructor(e){this.storage=e,this.favorites=[],this.HAS_LOGGED_IN="hasLoggedIn",this.HAS_SEEN_TUTORIAL="hasSeenTutorial"}hasFavorite(e){return this.favorites.indexOf(e)>-1}addFavorite(e){this.favorites.push(e)}removeFavorite(e){const t=this.favorites.indexOf(e);t>-1&&this.favorites.splice(t,1)}login(e){return this.storage.set(this.HAS_LOGGED_IN,!0).then(()=>(this.setDeatils(e),window.dispatchEvent(new CustomEvent("user:login"))))}signup(e){return this.storage.set(this.HAS_LOGGED_IN,!0).then(()=>window.dispatchEvent(new CustomEvent("user:signup")))}logout(){return this.storage.remove(this.HAS_LOGGED_IN).then(()=>{this.storage.remove("id"),this.storage.remove("name"),this.storage.remove("username"),this.storage.remove("token")}).then(()=>{window.dispatchEvent(new CustomEvent("user:logout"))})}setDeatils(e){this.storage.set("id",JSON.stringify(e.id)),this.storage.set("name",JSON.stringify(e.name)),this.storage.set("username",JSON.stringify(e.username)),this.storage.set("token",JSON.stringify(e.jwt))}getID(){return this.storage.get("id").then(e=>e)}isLoggedIn(){return this.storage.get(this.HAS_LOGGED_IN).then(e=>!0===e)}checkHasSeenTutorial(){return this.storage.get(this.HAS_SEEN_TUTORIAL).then(e=>e)}}return e.ngInjectableDef=r.Jb({factory:function(){return new e(r.Kb(s.b))},token:e,providedIn:"root"}),e})()},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const i=o(e);for(let t=0;t<i.length;t++)s(i[t])}});const r=o(t);for(let e=0;e<r.length;e++)s(r[e]);const i=document.createElement("div");i.appendChild(t);const c=i.querySelector("div");return null!==c?c.innerHTML:i.innerHTML}catch(t){return console.error(t),""}},s=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!i.includes(r.toLowerCase())){e.removeAttribute(r);continue}const s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=o(e);for(let n=0;n<t.length;n++)s(t[n])},o=e=>null!=e.children?e.children:e.childNodes,i=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},s=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);