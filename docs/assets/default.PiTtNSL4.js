import{G as g,_ as v,v as o,x as n,y as e,d,L as m,M as w,N as p,A as c,O as f,K as i,z as u,J as x,r as $,P as _,Q as k}from"./entry.UenA8HeF.js";const y=""+new URL("logo.NfOQTn5J.webp",import.meta.url).href,C=()=>g("color-mode").value,M={},j={width:"20",height:"20",fill:"none",viewBox:"0 0 24 24",class:"h-5 w-5 stroke-current"},B=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"},null,-1),L=[B];function z(l,t){return o(),n("svg",j,L)}const V=v(M,[["render",z]]),H={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",class:"h-3 w-3 shrink-0"},N=e("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"},null,-1),T=[N],E={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",class:"h-3 w-3 shrink-0"},S=d({__name:"CheckTheme",props:{show:{type:Boolean,default:!1}},setup(l){return(t,r)=>(o(),n(p,null,[m((o(),n("svg",H,T,512)),[[w,t.show]]),m((o(),n("svg",E,null,512)),[[w,!t.show]])],64))}}),Z={},D={class:"flex h-full flex-row items-center justify-center gap-1"},I=e("span",{class:"h-3 w-3 rounded-full bg-primary"},null,-1),J=e("span",{class:"h-3 w-3 rounded-full bg-secondary"},null,-1),O=e("span",{class:"h-3 w-3 rounded-full bg-accent"},null,-1),P=e("span",{class:"h-3 w-3 rounded-full bg-neutral"},null,-1),Q=[I,J,O,P];function q(l,t){return o(),n("span",D,Q)}const A=v(Z,[["render",q]]),F={title:"Change Theme",class:"dropdown dropdown-end dropdown-hover hidden [@supports(color:oklch(0_0_0))]:block"},G={tabindex:"0",role:"button",class:"btn btn-ghost"},K={tabindex:"0",class:"menu dropdown-content h-96 max-h-[calc(100vh-10rem)] w-56 rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5"},R={class:"grid grid-cols-1 gap-3 overflow-y-auto p-2"},U=["data-set-theme","aria-label","value","onClick"],W=["data-theme"],X={class:"grid grid-cols-5 grid-rows-3"},Y={class:"col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"},ee={class:"flex-grow text-sm capitalize"},te=d({__name:"ChangeTheme",setup(l){const t=C(),r=["system","light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];return(a,h)=>(o(),n("div",F,[e("div",G,[c(V)]),e("div",K,[e("div",R,[(o(),n(p,null,f(r,s=>e("button",{key:s,class:"theme-controller text-start outline-offset-4 outline-base-content","data-set-theme":s,"data-act-class":"visible",name:"theme-controller","aria-label":s,value:s,onClick:b=>i(t).preference=s},[e("span",{"data-theme":s,class:"block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"},[e("span",X,[e("span",Y,[c(S,{show:i(t).preference===s},null,8,["show"]),e("span",ee,u(s),1),c(A)])])],8,W)],8,U)),64))])])]))}}),se={title:"Change Language",class:"dropdown dropdown-end dropdown-hover"},oe=e("div",{tabindex:"0",role:"button",class:"btn btn-ghost","aria-label":"Language"},[e("svg",{class:"h-5 w-5 fill-current",width:"20",height:"20",viewBox:"0 0 512 512"},[e("path",{d:"M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"}),e("path",{d:"M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"})])],-1),ne={tabindex:"0",class:"dropdown-content max-h-[calc(100vh-10rem)] w-40 overflow-y-auto rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5"},ae={class:"menu menu-sm gap-1"},le=["onClick"],re={class:"flex w-full flex-row items-start justify-start"},ce={class:"badge badge-outline badge-sm flex items-center justify-center font-mono font-bold tracking-widest opacity-50"},ie={class:"font-[sans-serif]"},de=d({__name:"ChangeLanguage",setup(l){const{setLocale:t}=x(),r={es:{code:"es",emoji:"🇪🇸",text:"Español"},en:{code:"en",emoji:"🇬🇧",text:"English"}};return(a,h)=>(o(),n("div",null,[e("div",se,[oe,e("div",ne,[e("ul",ae,[(o(),n(p,null,f(r,s=>e("li",{key:s.emoji,onClick:b=>i(t)(s.code)},[e("div",re,[e("div",ce,u(s.emoji),1),e("div",ie,u(s.text),1)])],8,le)),64))])])])]))}}),he={class:"navbar absolute left-0 top-0 z-10 bg-base-100 px-4 py-2 md:py-4"},_e=e("div",{class:"flex-1 text-lg font-bold"},[e("img",{src:y,alt:"Logo",class:"inline-block w-8"})],-1),ue={class:"flex-none"},pe=d({__name:"NavBar",setup(l){return(t,r)=>(o(),n("nav",he,[_e,e("div",ue,[c(te),c(de)])]))}}),me={class:"btm-nav z-10 bg-base-100"},we=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),ve=[we],fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),be=[fe],ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})],-1),xe=[ge],$e=d({__name:"BottomNav",setup(l){const t=$("home");return(r,a)=>(o(),n("div",me,[e("button",{class:_(["text-primary",{active:i(t)==="home"}]),disabled:!1,onClick:a[0]||(a[0]=h=>t.value="home")},ve,2),e("button",{class:_(["text-primary",{active:i(t)==="about"}]),disabled:!0,onClick:a[1]||(a[1]=h=>t.value="about")},be,2),e("button",{class:_(["text-primary",{active:i(t)==="projects"}]),disabled:!0,onClick:a[2]||(a[2]=h=>t.value="projects")},xe,2)]))}}),ke={class:"relative h-screen w-screen"},Ce=d({__name:"default",setup(l){return(t,r)=>(o(),n("div",ke,[c(pe),k(t.$slots,"default"),c($e)]))}});export{Ce as default};