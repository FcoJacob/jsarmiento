import{u as k,d as A,c as y,h as N,r as S,o as B,a as E,b as z,e as I,f as L,g as w,i as T,j,p as U,k as V,n as D,l as F,m as P,q as H,w as M,s as O,_ as $,t as G,v as Q,x as W,y as g,z as _,A as X,B as J,C as K,D as Y,E as Z}from"./entry.6rwqDVXf.js";async function R(t,a=k()){const{path:l,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>R(t,a));a._routePreloaded.add(l);const s=e.map(u=>{var n;return(n=u.components)==null?void 0:n.default}).filter(u=>typeof u=="function");for(const u of s){const n=Promise.resolve(u()).catch(()=>{}).finally(()=>r.splice(r.indexOf(n)));r.push(n)}await Promise.all(r)}const ee=(...t)=>t.find(a=>a!==void 0),te="noopener noreferrer";function ae(t){const a=t.componentName||"NuxtLink",l=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return C(e,t.trailingSlash);const s="path"in e?e.path:r(e).path;return{...e,name:void 0,path:C(s,t.trailingSlash)}};return A({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=k(),u=F(),n=y(()=>{const o=e.to||e.href||"";return l(o,s.resolve)}),f=y(()=>typeof n.value=="string"&&N(n.value,{acceptRelative:!0})),h=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||f.value),b=S(!1),v=S(null),q=o=>{var d;v.value=e.custom?(d=o==null?void 0:o.$el)==null?void 0:d.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const d=P();let m,i=null;B(()=>{const x=re();E(()=>{m=z(()=>{var p;(p=v==null?void 0:v.value)!=null&&p.tagName&&(i=x.observe(v.value,async()=>{i==null||i(),i=null;const c=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!h.value&&R(n.value,s).catch(()=>{})]),b.value=!0}))})})}),I(()=>{m&&L(m),i==null||i(),i=null})}return()=>{var x,p;if(!h.value){const c={ref:q,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(b.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),w(T("RouterLink"),c,r.default)}const o=typeof n.value=="object"?((x=s.resolve(n.value))==null?void 0:x.href)??null:n.value&&!e.external&&!f.value?l(j(u.app.baseURL,n.value),s.resolve):n.value||null,d=e.target||null,m=e.noRel?null:ee(e.rel,t.externalRelAttribute,o?te:"")||null,i=()=>H(o,{replace:e.replace});return e.custom?r.default?r.default({href:o,navigate:i,get route(){if(!o)return;const c=U(o);return{path:c.pathname,fullPath:c.pathname,get query(){return V(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:m,target:d,isExternal:h.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:v,href:o,rel:m,target:d},(p=r.default)==null?void 0:p.call(r))}}})}const ne=ae(D);function C(t,a){const l=a==="append"?M:O;return N(t)&&!t.startsWith("http")?t:l(t,!0)}function re(){const t=P();if(t._observer)return t._observer;let a=null;const l=new Map,e=(s,u)=>(a||(a=new IntersectionObserver(n=>{for(const f of n){const h=l.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&h&&h()}})),l.set(s,u),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const se=t=>(Y("data-v-ccd3db62"),t=t(),Z(),t),le={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ie=se(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ce={class:"max-w-520px text-center z-20"},ue=["textContent"],de=["textContent"],fe={class:"w-full flex items-center justify-center"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return G({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(l,e)=>{const r=ne;return Q(),W("div",le,[ie,g("div",ce,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:_(t.statusCode)},null,8,ue),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:_(t.description)},null,8,de),g("div",fe,[X(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:J(()=>[K(_(t.backHome),1)]),_:1})])])])}}},me=$(he,[["__scopeId","data-v-ccd3db62"]]);export{me as default};
