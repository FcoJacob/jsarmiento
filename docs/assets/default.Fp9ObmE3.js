import{G as w,d as c,J as p,K as h,L as i,v as n,x as r,M as v,N as f,y as t,z as b,I as g,O as k,A as d,r as x,P as _,Q as $}from"./entry.YZ2ZfW0C.js";const y=""+new URL("logo.NfOQTn5J.webp",import.meta.url).href,C=()=>w("color-mode").value,M=["aria-label"],B=t("option",{disabled:"",selected:""},"Theme",-1),L=c({__name:"ChangeTheme",setup(u){const e=C(),l=["system","light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];return(s,a)=>p((n(),r("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>i(e).preference=o),"aria-label":s.$t("ui.ariaLabels.changeLanguage"),class:"select w-full max-w-xs"},[B,(n(),r(v,null,f(l,o=>t("option",{key:o},b(o),1)),64))],8,M)),[[h,i(e).preference]])}}),z=["aria-label"],j=["value"],N=c({__name:"ChangeLanguage",setup(u){const{locale:e}=g(),l={es:"🇪🇸",en:"🇬🇧"};return(s,a)=>(n(),r("form",null,[p(t("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>k(e)?e.value=o:null),"aria-label":s.$t("ui.ariaLabels.changeTheme"),class:"select"},[(n(),r(v,null,f(l,(o,m)=>t("option",{key:m,value:m},b(o),9,j)),64))],8,z),[[h,i(e)]])]))}}),V={class:"navbar absolute left-0 top-0 z-10 bg-base-100 px-4 py-2 md:py-4"},S=t("div",{class:"flex-1 text-lg font-bold"},[t("img",{src:y,alt:"Logo",class:"inline-block w-8"})],-1),T={class:"flex-none gap-2"},U=c({__name:"NavBar",setup(u){return(e,l)=>(n(),r("nav",V,[S,t("div",T,[d(L),d(N)])]))}}),D={class:"btm-nav absolute bottom-0 left-0 z-10 bg-base-100"},E=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),I=[E],J=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),O=[J],Q=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})],-1),R=[Q],q=c({__name:"BottomNav",setup(u){const e=x("home");return(l,s)=>(n(),r("div",D,[t("button",{class:_(["text-primary",{active:i(e)==="home"}]),disabled:!1,onClick:s[0]||(s[0]=a=>e.value="home")},I,2),t("button",{class:_(["text-primary",{active:i(e)==="about"}]),disabled:!0,onClick:s[1]||(s[1]=a=>e.value="about")},O,2),t("button",{class:_(["text-primary",{active:i(e)==="projects"}]),disabled:!0,onClick:s[2]||(s[2]=a=>e.value="projects")},R,2)]))}}),A={class:"relative h-screen w-screen"},G=c({__name:"default",setup(u){return(e,l)=>(n(),r("div",A,[d(U),$(e.$slots,"default"),d(q)]))}});export{G as default};
