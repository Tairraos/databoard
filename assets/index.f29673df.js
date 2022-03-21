import{a4 as P,bd as D,a9 as I,a5 as d,a6 as p,aa as _,ad as o,aX as c,a$ as h,ab as K,ag as B,aN as T,ae as w,af as R,ah as U,b0 as $,aC as q,bg as H,aB as X,aj as G,aK as J,aL as Q,a7 as V}from"./vendor.1c7e0fbb.js";import{a as L,H as W,a2 as O}from"./AppRoot.9161bc33.js";import{I as S}from"./arrow-right.8edff304.js";import{C as Y}from"./config-title.9fc05bb7.js";import{E as Z}from"./empty-panel.bf39d1fc.js";import{I as N}from"./plus.af9fc8ff.js";import{I as x}from"./delete.97a5a659.js";import{i as z,c as ee}from"./config.3c16c364.js";import"./document.9d531123.js";const te=P({name:"EventItem",components:{IconArrowRight:S,IconDelete:x,IconPlus:N},props:{item:{type:Object,required:!0}},setup(e){const s=D(z),y=I(!0),C=I(e.item.enable);return{visible:y,isEnabled:C,addField:()=>{s.addField(e.item.name)},deleteField:u=>{s.deleteField(e.item.name,u)},updateField:(u,b,k)=>{u[b]=k;const F=e.item.fields.filter(m=>m.name).map(m=>({name:m.name,map:m.map}));s.updateField(e.item.name,F)},onEnableChange:u=>{e.item.enable=u,s.toggleEnable(e.item.name,u)}}}}),ne={class:"event"},se={class:"event-text"},oe=$(" \u542F\u7528 "),ae={key:0,class:"variables"},ie={class:"variables-table"},le=o("thead",null,[o("tr",null,[o("th",{width:"80"},[o("span",null,"\u5B57\u6BB5")]),o("th",{width:"110",style:{position:"relative"}},[o("span",null,"\u7ED1\u5B9A\u5230\u53D8\u91CF")]),o("th",{width:"110"},[o("span",null,"\u5B57\u6BB5\u8BF4\u660E")])])],-1),ce={class:"variables-tbody"},de={class:"variable-input"},ue={class:"variable-input"},re={class:"variable-btn"},me={class:"variable-input"},pe={class:"desc"},ve={class:"add-variable"},_e=$(" \u65B0\u5EFA\u4E00\u4E2A\u5B57\u6BB5 ");function fe(e,s,y,C,E,i){const f=d("IconArrowRight"),v=d("n-icon"),u=d("n-checkbox"),b=d("new-input"),k=d("IconDelete"),F=d("IconPlus"),m=d("n-button");return p(),_("div",ne,[o("div",{class:"events-title",onClick:s[2]||(s[2]=t=>e.visible=!e.visible)},[c(v,{class:K(e.visible?"events-down":"events-up")},{default:h(()=>[c(f)]),_:1},8,["class"]),o("div",se,B(e.item.description),1),c(u,{checked:e.isEnabled,"onUpdate:checked":[s[0]||(s[0]=t=>e.isEnabled=t),e.onEnableChange],class:"enable-checkbox",onClick:s[1]||(s[1]=T(()=>{},["stop"]))},{default:h(()=>[oe]),_:1},8,["checked","onUpdate:checked"])]),e.visible?(p(),_("div",ae,[o("table",ie,[le,o("tbody",ce,[(p(!0),_(w,null,R(e.item.fields,(t,a)=>(p(),_("tr",{key:a},[t.custom?(p(),_(w,{key:0},[o("td",de,[c(b,{"model-value":t.name,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:n=>e.updateField(t,"name",n)},null,8,["model-value","onChange"])]),o("td",ue,[c(b,{"model-value":t.map,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:n=>e.updateField(t,"map",n)},null,8,["model-value","onChange"])]),o("td",re,[c(v,{class:"delete-btn",onClick:n=>e.deleteField(a)},{default:h(()=>[c(k)]),_:2},1032,["onClick"])])],64)):(p(),_(w,{key:1},[o("td",null,B(t.name),1),o("td",me,[c(b,{"model-value":t.map,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:n=>e.updateField(t,"map",n)},null,8,["model-value","onChange"])]),o("td",pe,B(t.description),1)],64))]))),128))])]),o("div",ve,[c(m,{focusable:!1,size:"tiny",onClick:e.addField},{icon:h(()=>[c(v,{size:12},{default:h(()=>[c(F)]),_:1})]),default:h(()=>[_e]),_:1},8,["onClick"])])])):U("",!0)])}var be=L(te,[["render",fe]]);const he=P({name:"InteractionPanel",components:{ConfigTitle:Y,EmptyPanel:Z,EventItem:be,IconArrowRight:S},setup(){const e=W(),s=D(ee),y=I(!0),C=q(()=>Object.keys(s.value.events)),E=I([]);let i=I(e.componentsView[s.value.id]);const f=(t,a,n,r=!1)=>({name:t,map:a||t,description:n,custom:r}),v=t=>{if(i.value||(i.value={}),!i.value[t]){const a=Object.keys(s.value.events[t].fields);i.value[t]={enable:!1,fields:O(a)}}},u=()=>{const t=[];for(const[a,n]of Object.entries(s.value.events)){const r={name:a,description:n.description,enable:!1,fields:Object.entries(n.fields).map(([l,g])=>f(l,"",g.description))};if(i.value){const l=i.value[a];if(l){r.enable=l.enable;for(const[g,A]of Object.entries(l.fields)){const j=r.fields.find(M=>M.name===g);j?j.map=A:r.fields.push(f(g,A,"",!0))}}}t.push(r)}E.value.push(...t)};return H(z,{addField:t=>{const a=E.value.find(n=>n.name===t);a.fields.some(n=>n.name==="")||a.fields.push(f("","","",!0))},deleteField:(t,a)=>{const r=E.value.find(l=>l.name===t).fields.splice(a,1)[0].name;if(r){delete i.value[t].fields[r];const l=i.value[t];l.enable&&e.setPublishersView(s.value.id,Object.entries(l.fields).map(g=>g[1]||g[0]),!0)}},updateField:(t,a)=>{v(t),i.value[t].fields=O(a,"name","map"),i.value[t].enable&&e.setPublishersView(s.value.id,a.map(n=>n.map||n.name),!0)},toggleEnable:(t,a)=>{v(t);const n=i.value[t];n.enable=a;const r=[];for(const l in n.fields)a&&!n.fields[l]&&(n.fields[l]=l),r.push(n.fields[l]);e.setPublishersView(s.value.id,r,a)}}),X(i,()=>{e.componentsView[s.value.id]=i.value}),G(()=>{u()}),{com:s,eventKeys:C,visible:y,eventList:E}}}),Ee={class:"interaction-panle"},ge={key:0},ke={class:"com-events"},Fe=o("span",null,B("\u4EA4\u4E92\u4E8B\u4EF6"),-1),ye={class:"extra"},Ce=$("\u6559\u7A0B"),Ie={class:"event-list"};function Be(e,s,y,C,E,i){const f=d("config-title"),v=d("IconArrowRight"),u=d("n-icon"),b=d("router-link"),k=d("event-item"),F=d("empty-panel");return p(),_("div",Ee,[c(f,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(p(),_("div",ge,[o("div",ke,[o("div",{class:"events-title",onClick:s[0]||(s[0]=m=>e.visible=!e.visible)},[c(u,{class:K(e.visible?"events-down":"events-up")},{default:h(()=>[c(v)]),_:1},8,["class"]),Fe,o("span",ye,[c(b,{to:{name:"MyCase"},target:"_blank",rel:"noopener noreferrer",class:"tutorial-link"},{default:h(()=>[Ce]),_:1})])]),J(o("div",Ie,[(p(!0),_(w,null,R(e.eventList,m=>(p(),V(k,{key:m.name,item:m},null,8,["item"]))),128))],512),[[Q,e.visible]])])])):(p(),V(F,{key:1,content:"\u8BE5\u7EC4\u4EF6\u6CA1\u6709\u4EA4\u4E92\u4E8B\u4EF6"}))])}var Re=L(he,[["render",Be]]);export{Re as default};