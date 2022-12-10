import{a as U,C as z,v as R}from"./App.404b9962.js";import{I as L}from"./plus.e26fdb31.js";import{F as M,f as O,a as T}from"./filter-collapse-item.ed2309f0.js";import{b as q,s as G}from"./config.3c16c364.js";import{a4 as H,a9 as m,bm as y,al as F,bp as w,a5 as v,a6 as g,aa as D,ad as u,ae as J,af as Q,a7 as k,ah as W,aV as E,b1 as P,ac as X,ab as Y}from"./vendor.891943b7.js";import"./arrow-left.14d78497.js";import"./edit.4ec2cf6b.js";import"./delete.d67e866a.js";import"./release.7f243710.js";import"./drag.9793705e.js";const Z=H({name:"FilterPanel",components:{IconPlus:L,FilterCollapseItem:M},setup(){const l=m(void 0),n=m(null),b=m(null),o=m({visible:!1,top:"4px",from:0,to:0}),d=z(),C=R(),{apiDataConfig:s}=y(q),{refreshData:i}=y(G),I=F(()=>{const a=s.value.pageFilters.map(e=>e.id);return d.dataFilters.filter(e=>!a.includes(e.id)).map(e=>({value:e.id,label:e.name}))}),c=F(()=>s.value.pageFilters.reduce((a,e)=>{const t=d.dataFilters.find(_=>_.id==e.id);return t&&a.push(t),a},[])),r=F(()=>{const a=[...C.coms,...C.subComs],e=Object.create(null);return a.forEach(t=>{for(const _ in t.apiData)t.apiData[_].pageFilters.forEach(f=>{e[f.id]?(e[f.id].ids.push(t.id),e[f.id].names.push(t.alias)):e[f.id]={ids:[t.id],names:[t.alias]}})}),e}),p=F(()=>s.value.pageFilters.reduce((a,e)=>(a[e.id]=e.enabled,a),{})),A=a=>{s.value.pageFilters.push({id:a,enabled:!0}),i()},B=(a,e)=>{s.value.pageFilters.find(t=>t.id===a).enabled=e,i()},j=(a,e)=>{const t=a.trim();t&&e.name!==t&&(e.name=t,e.id>0&&d.updateName(e))},N=()=>{n.value||(n.value={id:0,name:"\u65B0\u5EFA\u8FC7\u6EE4\u5668",code:"return data;",origin:"return data;",projectId:0,createAt:"",updateAt:""})},S=a=>{a>0?(s.value.pageFilters=s.value.pageFilters.filter(e=>e.id!==a),i()):n.value=null},$=async a=>{if(a.id>0)await d.update(a),p.value[a.id]&&i();else{const e=await d.create(a);s.value.pageFilters.push({id:e,enabled:!0}),n.value=null,i()}},K=()=>{const{from:a,to:e}=o.value;if(a!==e){const t=s.value.pageFilters;t.splice(e,0,...t.splice(a,1)),i()}},h=(a,e,t)=>{o.value.visible=a,o.value.top=`${t.offsetTop-6}px`,a?o.value.to=e:(o.value.from=e,K())},V=()=>{h(!0,c.value.length,b.value)};return w(O,{usedFilters:r,editFilterName:j,removeFilter:S,saveFilter:$}),w(T,{enabledFilters:p,onUsedChange:B,updateIndicator:h}),{filterId:l,apiDataConfig:s,dataFilters:I,selectedFilters:c,newDataFilter:n,addPanelRef:b,dragInfo:o,selectFilter:A,addFilter:N,dragEnter:V}}}),x={class:"filter-list"},ee=u("span",{class:"datav-empty"},"\u8FC7\u6EE4\u5668\u5217\u8868\u4E3A\u7A7A\uFF0C\u8BF7\u521B\u5EFA\u540E\u4F7F\u7528",-1),ae=u("div",{class:"filter-dragging-wp"},null,-1);function te(l,n,b,o,d,C){const s=v("filter-collapse-item"),i=v("n-select"),I=v("IconPlus"),c=v("n-icon");return g(),D("div",{class:Y(["filter-wp",{"--disabled":!l.apiDataConfig.config.useFilter}])},[u("div",x,[(g(!0),D(J,null,Q(l.selectedFilters,(r,p)=>(g(),k(s,{key:r.id,index:p,"data-filter":r},null,8,["index","data-filter"]))),128)),l.newDataFilter?(g(),k(s,{key:0,"data-filter":l.newDataFilter,index:l.selectedFilters.length,"is-new":!0,draggable:!1,"has-feedback":!1,removable:!0},null,8,["data-filter","index"])):W("",!0),u("div",{ref:"addPanelRef",class:"add-filter",onDragenter:n[1]||(n[1]=(...r)=>l.dragEnter&&l.dragEnter(...r))},[E(i,{value:l.filterId,options:l.dataFilters,filterable:"","fallback-option":!1,placeholder:"\u6DFB\u52A0\u8FC7\u6EE4\u5668",class:"datav-new-select filter-select","onUpdate:value":l.selectFilter},{empty:P(()=>[ee]),_:1},8,["value","options","onUpdate:value"]),u("div",{class:"new-filter-btn",onClick:n[0]||(n[0]=(...r)=>l.addFilter&&l.addFilter(...r))},[E(c,{class:"icon-add"},{default:P(()=>[E(I)]),_:1})])],544)]),ae,u("div",{class:"drag-indicator",style:X({display:l.dragInfo.visible?"block":"none",top:l.dragInfo.top})},null,4)],2)}var me=U(Z,[["render",te]]);export{me as default};
