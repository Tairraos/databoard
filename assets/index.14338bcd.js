import{_ as e}from"./config-title.5148d33c.js";import{_ as a}from"./empty-panel.2b6a9fa8.js";import{d as n,ae as t,e as s,y as o,z as c,k as m,l,m as i,p as r,A as d}from"./index.21d9dc82.js";var p=n({name:"InteractionPanel",components:{ConfigTitle:e,EmptyPanel:a},setup(){const e=t("com"),a=s((()=>Object.keys(e.value.events)));return{com:e,eventKeys:a}}});const v=d();o("data-v-6feeada4");const f={class:"interaction-panle"},y={key:0},u=r("div",{class:"com-events"},null,-1);c();const g=v(((e,a,n,t,s,o)=>{const c=m("config-title"),d=m("empty-panel");return l(),i("div",f,[r(c,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(l(),i("div",y,[u])):(l(),i(d,{key:1,content:"该组件没有交互事件"}))])}));p.render=g,p.__scopeId="data-v-6feeada4";export default p;