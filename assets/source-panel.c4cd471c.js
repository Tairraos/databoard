import{a6 as i,aa as p,ad as e,a4 as j,al as m,ae as N,ab as S,ag as E,bj as M,bk as z,af as J,ah as K,a9 as L,bm as P,bp as Q,a5 as n,a7 as T,b1 as c,aV as a,b8 as B,b4 as st,b5 as at}from"./vendor.891943b7.js";import{a as F,ab as f,z as O,_ as V,E as W,ac as X,ad as Y,ae as q,af as ot,a6 as Z,ag as H}from"./App.404b9962.js";import{I as nt}from"./arrow-right.a7b4c086.js";import{I as it}from"./search.d0ddd5a3.js";import{c as x,b as tt,s as ut,a as lt}from"./config.3c16c364.js";const ct={},dt={t:"1639131563580",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4137",width:"64",height:"64"},rt=e("path",{d:"M250.52 209.31999969A398.44000031 398.44000031 0 0 1 512 111.99999969c220.92 0 400.00000031 179.08000031 400.00000031 400.00000031 0 85.44-26.80000031 164.64-72.40000031 229.60000031L711.99999969 512h120A319.99999969 319.99999969 0 0 0 290.40000031 281.12l-39.88000031-71.80000031z m522.96 605.36000062A398.44000031 398.44000031 0 0 1 512 912.00000031C291.08 912.00000031 111.99999969 732.92 111.99999969 512c0-85.44 26.80000031-164.64 72.40000031-229.60000031L312.00000031 512H192.00000031a319.99999969 319.99999969 0 0 0 541.59999938 230.88l39.88000031 71.80000031z","p-id":"4138"},null,-1),pt=[rt];function _t(t,o){return i(),p("svg",dt,pt)}var et=F(ct,[["render",_t]]);const ft=j({name:"DisplayApiStatus",props:{status:{type:String,default:f.incomplete},loadingText:{type:String,default:"\u5339\u914D\u4E2D"},successText:{type:String,default:"\u5339\u914D\u6210\u529F"},failedText:{type:String,default:"\u672A\u627E\u5230\u5B57\u6BB5"},completedText:{type:String,default:"\u914D\u7F6E\u5B8C\u6210"},incompleteText:{type:String,default:"\u914D\u7F6E\u672A\u5B8C\u6210"},optional:{type:Boolean,default:!1}},setup(t){const o=m(()=>t.status===f.loading?t.loadingText:t.status===f.success?t.successText:t.status===f.completed?t.completedText:t.optional?"\u53EF\u9009":t.status===f.failed?t.failedText:t.status===f.incomplete?t.incompleteText:t.status);return{apiStatus:f,statusText:o}}}),G=t=>(M("data-v-6993cc60"),t=t(),z(),t),mt=G(()=>e("i",{class:"status-icon validating"},null,-1)),ht=G(()=>e("i",{class:"status-icon validating"},null,-1)),vt=G(()=>e("i",{class:"status-icon validating"},null,-1)),gt={key:2,class:"status-icon --success"},bt={class:"status-text"};function Et(t,o,g,y,b,D){return i(),p("div",null,[t.status===t.apiStatus.loading?(i(),p(N,{key:0},[mt,ht,vt],64)):t.status===t.apiStatus.success||t.status===t.apiStatus.completed?(i(),p("i",{key:1,class:S(["status-icon",`--${t.status}`])},null,2)):t.optional?(i(),p("i",gt)):(i(),p("i",{key:3,class:S(["status-icon",`--${t.status}`])},null,2)),e("span",bt,E(t.statusText),1)])}var yt=F(ft,[["render",Et],["__scopeId","data-v-6993cc60"]]);const Dt=j({name:"FieldGrid",props:{fields:{type:Object}}}),R=t=>(M("data-v-6cbbbc1e"),t=t(),z(),t),wt={key:0,class:"field-wp"},Ct=R(()=>e("div",{class:"field-info"},"\u6570\u636E\u76F8\u5E94\u7ED3\u679C\u5E94\u4E3A\u5217\u8868\uFF0C\u5217\u8868\u5143\u7D20\u5305\u542B\u5982\u4E0B\u5B57\u6BB5",-1)),$t={class:"field-grid"},St=R(()=>e("div",{class:"field-item field-title"},"\u5B57\u6BB5",-1)),Bt=R(()=>e("div",{class:"field-item field-title"},"\u6620\u5C04",-1)),kt=R(()=>e("div",{class:"field-item field-title"},"\u8BF4\u660E",-1)),At={class:"field-item"},It={class:"field-item"},Ft={class:"field-item"};function Tt(t,o,g,y,b,D){return t.fields?(i(),p("div",wt,[Ct,e("div",$t,[St,Bt,kt,(i(!0),p(N,null,J(t.fields,(l,u)=>(i(),p(N,{key:u},[e("div",At,E(u),1),e("div",It,E(l.map||"-"),1),e("div",Ft,E(l.description||"-"),1)],64))),128))])])):K("",!0)}var Nt=F(Dt,[["render",Tt],["__scopeId","data-v-6cbbbc1e"]]);const Pt=j({name:"SourceDrawer",components:{IconSearch:it,IconRefresh:et,FieldGrid:Nt,FilterPanel:O(()=>V(()=>import("./filter-panel.cd885f9e.js"),["assets/filter-panel.cd885f9e.js","assets/filter-panel.210b03d9.css","assets/App.404b9962.js","assets/App.db4f71dd.css","assets/vendor.891943b7.js","assets/plus.e26fdb31.js","assets/filter-collapse-item.ed2309f0.js","assets/arrow-left.14d78497.js","assets/edit.4ec2cf6b.js","assets/delete.d67e866a.js","assets/release.7f243710.js","assets/drag.9793705e.js","assets/config.3c16c364.js"])),DsStaticEditor:O(()=>V(()=>import("./ds-static-editor.30a91d81.js"),["assets/ds-static-editor.30a91d81.js","assets/config.3c16c364.js","assets/App.404b9962.js","assets/App.db4f71dd.css","assets/vendor.891943b7.js"])),DsApiEditor:O(()=>V(()=>import("./ds-api-editor.2d9cc11e.js"),["assets/ds-api-editor.2d9cc11e.js","assets/ds-api-editor.3a546c51.css","assets/App.404b9962.js","assets/App.db4f71dd.css","assets/vendor.891943b7.js","assets/config.3c16c364.js"]))},setup(){const t=W(),o=X(),g=L(!1),y=L(!1),b=q,D=Object.entries(Y()).map(([s,r])=>({value:s,label:r})),l=()=>{g.value=!0},u=P(x),{apiName:d,apiConfig:h,apiDataConfig:_}=P(tt),v=m(()=>{var r;const s=t.dataStatusMap[u.value.id];return s?(r=s[d])!=null?r:{}:{}}),w=m(()=>{const s=t.originMap[u.value.id];return s?s[d]:""}),A=s=>{switch(s){case q.api:ot(_.value.config);break}},I=m(()=>{const s=o.dataMap[u.value.id];return s?s[d]:""}),C=async()=>{await Z(u.value.id,d,h.value,_.value)};return Q(ut,{dataStatus:v,refreshData:C}),{visible:g,visiblePreview:y,apiType:b,datasources:D,apiConfig:h,apiDataConfig:_,dataStatus:v,dataOrign:w,resData:I,open:l,changeSource:A,refreshData:C}}}),jt=e("p",{class:"source-drawer-title"},"\u8BBE\u7F6E\u6570\u636E\u6E90",-1),Rt={class:"datasource-selector"},Ut=e("label",{class:"datasource-selector-title"},"\u6570\u636E\u6E90\u7C7B\u578B",-1),Ot={class:"datasource-select"},Vt={class:"datav-new-select-wp"},Lt={class:"ds-response-btn"},Mt=B(" \u9884\u89C8\u6570\u636E\u6E90\u8FD4\u56DE\u7ED3\u679C "),zt={class:"ds-preview-content"},Kt=e("span",{class:"use-filter-text"},"\u6570\u636E\u8FC7\u6EE4\u5668",-1),Gt=e("span",{class:"tutorial-popup"},"\u6559\u7A0B",-1),qt=e("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C",-1),Ht={class:"data-response"};function Jt(t,o,g,y,b,D){const l=n("n-select"),u=n("ds-static-editor"),d=n("ds-api-editor"),h=n("IconSearch"),_=n("n-icon"),v=n("g-monaco-editor"),w=n("n-popover"),A=n("n-checkbox"),I=n("filter-panel"),C=n("field-grid"),s=n("IconRefresh"),r=n("n-drawer-content"),U=n("n-drawer");return i(),T(U,{show:t.visible,"onUpdate:show":o[3]||(o[3]=$=>t.visible=$),width:"500px","trap-focus":!1,class:"source-drawer",to:"#edit-main-wp","show-mask":""},{default:c(()=>[a(r,{closable:""},{header:c(()=>[jt]),default:c(()=>[e("div",{class:S(["step-title",{"--error":!!t.dataStatus.api}])}," \u6570\u636E\u6E90 ",2),e("div",Rt,[Ut,e("div",Ot,[e("div",Vt,[a(l,{value:t.apiDataConfig.type,"onUpdate:value":[o[0]||(o[0]=$=>t.apiDataConfig.type=$),t.changeSource],options:t.datasources,filterable:"",class:"datav-new-select"},null,8,["value","options","onUpdate:value"])])])]),t.apiDataConfig.type===t.apiType.static?(i(),T(u,{key:0})):t.apiDataConfig.type===t.apiType.api?(i(),T(d,{key:1})):K("",!0),a(w,{show:t.visiblePreview,"onUpdate:show":o[1]||(o[1]=$=>t.visiblePreview=$),placement:"left",width:400,class:"editor-popover",style:{"--n-color":"#0000"}},{trigger:c(()=>[e("div",Lt,[a(_,{class:"refresh-btn"},{default:c(()=>[a(h)]),_:1}),Mt])]),default:c(()=>[e("div",zt,[a(v,{language:"json","read-only":!0,"auto-format":!0,height:180,code:t.dataOrign},null,8,["code"])])]),_:1},8,["show"]),e("div",{class:S(["step-title",{"--error":!!t.dataStatus.filter}])},[a(A,{checked:t.apiDataConfig.config.useFilter,"onUpdate:checked":o[2]||(o[2]=$=>t.apiDataConfig.config.useFilter=$),class:"use-filter-btn"},null,8,["checked"]),Kt,Gt],2),a(I),a(C,{fields:t.apiConfig.fields},null,8,["fields"]),e("div",{class:S(["step-title",{"--error":!!t.dataStatus.api||!!t.dataStatus.filter}])},[qt,a(_,{class:"refresh-btn",onClick:t.refreshData},{default:c(()=>[a(s)]),_:1},8,["onClick"])],2),e("div",Ht,[a(v,{language:"json","read-only":!0,"auto-format":!0,code:t.resData},null,8,["code"])])]),_:1})]),_:1},8,["show"])}var Qt=F(Pt,[["render",Jt]]);const Wt=j({name:"SourcePanel",components:{DisplayApiStatus:yt,SourceDrawer:Qt,IconArrowRight:nt,IconRefresh:et},props:{apiName:{type:String,required:!0},activeName:String,collapse:Boolean},setup(t){const o=W(),g=X(),y=m(()=>t.apiName===t.activeName),b=L(null),D=Y(),l=P(x),u=m(()=>l.value.apis[t.apiName]),d=m(()=>l.value.apiData[t.apiName]);Q(tt,{apiName:t.apiName,apiConfig:u,apiDataConfig:d});const h=m(()=>{const s=g.dataMap[l.value.id];return s?s[t.apiName]:""}),_=m(()=>{var r;const s=o.fieldStatusMap[l.value.id];return(r=s==null?void 0:s[t.apiName])!=null?r:{}}),v=m(()=>{const s=Object.values(_.value);return s.includes(H.loading)?f.loading:s.includes(H.failed)?f.incomplete:f.completed}),w=P(lt);return{visible:y,sourceDrawerRef:b,datasources:D,com:l,apiConfig:u,apiDataConfig:d,fieldsStatus:_,totalStatus:v,datav_data:h,toggle:()=>{t.collapse&&w(t.apiName)},openSourceDrawer:()=>{var s;(s=b.value)==null||s.open()},refreshData:()=>{Z(l.value.id,t.apiName,u.value,d.value)}}}}),k=t=>(M("data-v-b4703960"),t=t(),z(),t),Xt={class:"api-editor-title"},Yt={class:"api-status success"},Zt={class:"attr-source-wp"},xt={class:"data-attr-table-container"},te={class:"data-attr-table"},ee=k(()=>e("thead",{class:"table-head"},[e("tr",{class:"table-head-row"},[e("th",{class:"th-item column-item attr-name"}," \u5B57\u6BB5 "),e("th",{class:"th-item column-item attr-value"}," \u6620\u5C04 "),e("th",{class:"th-item column-item attr-status"}," \u72B6\u6001 ")])],-1)),se={class:"table-body"},ae={class:"column-item attr-name"},oe={class:"ellipsis2"},ne={class:"column-item attr-value"},ie={class:"column-item attr-status"},ue={key:1,class:"table-body-row"},le=k(()=>e("td",{class:"column-item attr-name"},[e("span",null,"\u4EFB\u610F")],-1)),ce=k(()=>e("td",{class:"column-item attr-value"},null,-1)),de={class:"column-item attr-status"},re={class:"data-source"},pe=k(()=>e("div",{class:"data-result-title"}," \u6570\u636E\u54CD\u5E94\u7ED3\u679C ",-1)),_e={class:"auto-update-config"},fe=B(" \u81EA\u52A8\u66F4\u65B0\u9009\u9879 "),me=B(" \u79D2\u4E00\u6B21 "),he={class:"data-flow-wp"},ve={class:"ds-line"},ge={class:"ds-title"},be={class:"ds-type-text"},Ee=B(" \u914D\u7F6E\u6570\u636E\u6E90 "),ye={class:"ds-line mt5"},De=k(()=>e("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C ( \u53EA\u8BFB ) ",-1)),we=B(" \u5237\u65B0\u6570\u636E "),Ce={class:"ds-dots"},$e=k(()=>e("span",{class:"ds-dot"},null,-1)),Se=k(()=>e("span",{class:"ds-dot"},null,-1)),Be={class:"data-response"};function ke(t,o,g,y,b,D){const l=n("IconArrowRight"),u=n("n-icon"),d=n("display-api-status"),h=n("n-tooltip"),_=n("new-input"),v=n("n-checkbox"),w=n("n-button"),A=n("IconRefresh"),I=n("g-monaco-editor"),C=n("source-drawer");return i(),p("div",{class:S(["api-editor",{"--disable-fold":!t.collapse,"--fold":t.collapse&&t.visible}])},[e("div",Xt,[e("div",{class:"api-desc ellipsis2",onClick:o[0]||(o[0]=(...s)=>t.toggle&&t.toggle(...s))},[t.collapse?(i(),T(u,{key:0,class:"api-fold-icon"},{default:c(()=>[a(l)]),_:1})):K("",!0),B(" "+E(t.apiConfig.description||"\u6570\u636E\u63A5\u53E3"),1)]),e("div",Yt,[a(d,{status:t.totalStatus,"success-text":"\u914D\u7F6E\u5B8C\u6210"},null,8,["status"])])]),st(e("div",Zt,[e("div",xt,[e("table",te,[ee,e("tbody",se,[Object.keys(t.apiConfig.fields).length>0?(i(!0),p(N,{key:0},J(t.apiConfig.fields,(s,r)=>(i(),p("tr",{key:r,class:"table-body-row"},[e("td",ae,[a(h,{placement:"left"},{trigger:c(()=>[e("span",oe,E(r),1)]),default:c(()=>[B(" "+E(s.description),1)]),_:2},1024)]),e("td",ne,[a(_,{"model-value":s.map,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:U=>s.map=U},null,8,["model-value","onChange"])]),e("td",ie,[a(d,{status:t.fieldsStatus[r],optional:s.optional},null,8,["status","optional"])])]))),128)):(i(),p("tr",ue,[le,ce,e("td",de,[a(d,{status:"completed"})])]))])])]),e("div",re,[pe,e("div",_e,[a(v,{checked:t.apiConfig.useAutoUpdate,"onUpdate:checked":o[1]||(o[1]=s=>t.apiConfig.useAutoUpdate=s),class:"auto-update-checkbox"},{default:c(()=>[fe]),_:1},8,["checked"]),a(_,{"model-value":t.apiConfig.autoUpdate,type:"number",disabled:!t.apiConfig.useAutoUpdate,class:"update-interval-input",onChange:o[2]||(o[2]=s=>t.apiConfig.autoUpdate=s)},null,8,["model-value","disabled"]),me]),e("div",he,[e("div",ve,[e("div",ge,[e("span",be,E(t.datasources[t.apiDataConfig.type]),1)]),a(w,{size:"tiny",class:"ds-action-btn",onClick:t.openSourceDrawer},{default:c(()=>[Ee]),_:1},8,["onClick"])]),e("div",ye,[De,a(h,{placement:"left"},{trigger:c(()=>[a(u,{class:"refresh-btn",onClick:t.refreshData},{default:c(()=>[a(A)]),_:1},8,["onClick"])]),default:c(()=>[we]),_:1})]),e("div",Ce,[e("span",{class:S(["ds-dot",[t.totalStatus==="completed"?"active":"error"]])},null,2),$e,Se])]),e("div",Be,[a(I,{language:"json","read-only":!0,"auto-format":!0,code:t.datav_data,height:250,"full-screen-title":"\u6570\u636E\u54CD\u5E94\u7ED3\u679C"},null,8,["code"])])])],512),[[at,t.visible]]),a(C,{ref:"sourceDrawerRef"},null,512)],2)}var Pe=F(Wt,[["render",ke],["__scopeId","data-v-b4703960"]]);export{Pe as default};
