import{_ as e}from"./config-title.ccf69843.js";import{_ as a}from"./empty-panel.c6fa87f6.js";import{d as n,j as t,i as s,C as c,D as o,f as m,o as i,c as l,a as r,G as d}from"./index.bdf38cb7.js";var p=n({name:"InteractionPanel",components:{ConfigTitle:e,EmptyPanel:a},setup(){const e=s("com"),a=t((()=>Object.keys(e.value.events)));return{com:e,eventKeys:a}}});const f=d();c("data-v-50536d3c");const v={class:"interaction-panle"},y={key:0},u=r("div",{class:"com-events"},null,-1);o();const j=f(((e,a,n,t,s,c)=>{const o=m("config-title"),d=m("empty-panel");return i(),l("div",v,[r(o,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(i(),l("div",y,[u])):(i(),l(d,{key:1,content:"该组件没有交互事件"}))])}));p.render=j,p.__scopeId="data-v-50536d3c";export default p;