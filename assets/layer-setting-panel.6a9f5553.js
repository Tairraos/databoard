import{c as O}from"./config.3c16c364.js";import{a as S}from"./App.404b9962.js";import{a4 as A,bm as I,al as $,a5 as i,a6 as f,aa as V,ad as p,aV as a,b1 as r,am as o,ae as _,ah as M,bj as j,bk as N,af as P,ac as x}from"./vendor.891943b7.js";const H=m=>(j("data-v-05e377b2"),m=m(),N(),m),L={class:"config-manager-page"},K=H(()=>p("div",{class:"config-manager-head"},"\u7EC4\u5185\u914D\u7F6E",-1)),T={class:"config-manager-body"},W={class:"layer-setting-panel"},X={class:"perspective-origin-container"},Y={class:"layer-setting-touchpad"},q=["onClick"],G=A({__name:"layer-setting-panel",setup(m){const l=I(O),v=[[0,0],[50,0],[100,0],[0,50],[50,50],[100,50],[0,100],[50,100],[100,100]],y=[{id:"x",value:"x\u8F74"},{id:"y",value:"y\u8F74"},{id:"z",value:"z\u8F74"}],F=$(()=>[...l.value.config].reverse()),b=u=>{l.value.attr.w=u},U=u=>{l.value.attr.h=u},E=u=>{const t=l.value.children.find(n=>n.id===u.transform3d.id);return t==null?void 0:t.alias},h=u=>{l.value.attr.perspectiveOrigin.x=u[0],l.value.attr.perspectiveOrigin.y=u[1]},C=(u,t,n)=>{if(n.transform3d.scale3d.lock){const s=n.transform3d.scale3d.y+u-t;n.transform3d.scale3d.y=+Math.max(Math.min(s,10),.1).toFixed(2)}},B=(u,t,n)=>{if(n.transform3d.scale3d.lock){const s=n.transform3d.scale3d.x+u-t;n.transform3d.scale3d.x=+Math.max(Math.min(s,10),.1).toFixed(2)}};return(u,t)=>{const n=i("g-input-number"),s=i("g-field"),g=i("g-slider"),D=i("n-switch"),k=i("g-select"),w=i("g-switch"),z=i("g-field-collapse");return f(),V("div",L,[K,p("div",T,[p("div",W,[a(s,{label:"\u56FE\u8868\u5C3A\u5BF8","is-flat":!0},{default:r(()=>[a(n,{modelValue:o(l).scaling.w,"onUpdate:modelValue":[t[0]||(t[0]=e=>o(l).scaling.w=e),b],min:10,max:888888,inline:""},null,8,["modelValue"]),a(n,{modelValue:o(l).scaling.h,"onUpdate:modelValue":[t[1]||(t[1]=e=>o(l).scaling.h=e),U],min:10,max:888888,inline:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u56FE\u8868\u4F4D\u7F6E","is-flat":!0},{default:r(()=>[a(n,{modelValue:o(l).attr.x,"onUpdate:modelValue":t[2]||(t[2]=e=>o(l).attr.x=e),inline:""},null,8,["modelValue"]),a(n,{modelValue:o(l).attr.y,"onUpdate:modelValue":t[3]||(t[3]=e=>o(l).attr.y=e),inline:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u900F\u660E\u5EA6"},{default:r(()=>[a(g,{modelValue:o(l).attr.opacity,"onUpdate:modelValue":t[4]||(t[4]=e=>o(l).attr.opacity=e),min:0,max:1,step:.05},null,8,["modelValue","step"])]),_:1}),a(s,{label:"\u5E94\u75283D\u53D8\u6362"},{default:r(()=>[a(D,{value:o(l).attr.apply3d,"onUpdate:value":t[5]||(t[5]=e=>o(l).attr.apply3d=e)},null,8,["value"])]),_:1}),o(l).attr.apply3d?(f(),V(_,{key:0},[a(z,{label:"3D\u53D8\u6362",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal"],list:o(F),min:0,max:5,tab:E},{default:r(({item:e})=>[a(s,{level:2,label:"\u65CB\u8F6C","is-flat":!0},{default:r(()=>[a(k,{modelValue:e.transform3d.rotate3d.axis,"onUpdate:modelValue":d=>e.transform3d.rotate3d.axis=d,data:y,inline:"inline-single",label:"\u65CB\u8F6C\u8F74"},null,8,["modelValue","onUpdate:modelValue"]),a(g,{modelValue:e.transform3d.rotate3d.deg,"onUpdate:modelValue":d=>e.transform3d.rotate3d.deg=d,min:-180,max:180,step:1,inline:"inline-single",label:"\u5EA6\u6570",suffix:"\xB0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(s,{level:2,label:"\u7F29\u653E","is-flat":!0},{default:r(()=>[a(n,{modelValue:e.transform3d.scale3d.x,"onUpdate:modelValue":[d=>e.transform3d.scale3d.x=d,(d,c)=>C(d,c,e)],min:.1,max:10,step:.01,inline:"",label:"x\u8F74"},null,8,["modelValue","onUpdate:modelValue","min","step"]),a(n,{modelValue:e.transform3d.scale3d.y,"onUpdate:modelValue":[d=>e.transform3d.scale3d.y=d,(d,c)=>B(d,c,e)],min:.1,max:10,step:.01,inline:"",label:"y\u8F74"},null,8,["modelValue","onUpdate:modelValue","min","step"]),a(w,{modelValue:e.transform3d.scale3d.lock,"onUpdate:modelValue":d=>e.transform3d.scale3d.lock=d,inline:"inline-single",label:"\u6BD4\u4F8B\u9501\u5B9A"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(s,{level:2,label:"\u5E73\u79FB","is-flat":!0},{default:r(()=>[a(n,{modelValue:e.transform3d.translate3d.x,"onUpdate:modelValue":d=>e.transform3d.translate3d.x=d,inline:"",label:"x\u8F74"},null,8,["modelValue","onUpdate:modelValue"]),a(n,{modelValue:e.transform3d.translate3d.y,"onUpdate:modelValue":d=>e.transform3d.translate3d.y=d,inline:"",label:"y\u8F74"},null,8,["modelValue","onUpdate:modelValue"]),a(n,{modelValue:e.transform3d.translate3d.z,"onUpdate:modelValue":d=>e.transform3d.translate3d.z=d,inline:"inline-single",label:"z\u8F74"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["list"]),a(s,{label:"\u900F\u89C6\u8DDD\u79BB"},{default:r(()=>[a(n,{modelValue:o(l).attr.perspective,"onUpdate:modelValue":t[6]||(t[6]=e=>o(l).attr.perspective=e),min:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u6D88\u5931\u70B9\u4F4D\u7F6E",tooltip:"\u900F\u89C6\u6295\u5F71\u4E2D\uFF0C\u4E00\u7EC4\u5E73\u884C\u7EBF\u7684\u4EA4\u70B9\u3002"},{default:r(()=>[p("div",X,[p("div",Y,[(f(),V(_,null,P(v,(e,d)=>p("span",{key:d,class:"layer-setting-touchpad-handler",style:x({left:`${e[0]}%`,top:`${e[1]}%`}),onClick:c=>h(e)},null,12,q)),64)),p("span",{class:"layer-setting-touchpad-handler --pointer",style:x({left:`${o(l).attr.perspectiveOrigin.x}%`,top:`${o(l).attr.perspectiveOrigin.y}%`})},null,4)]),a(n,{modelValue:o(l).attr.perspectiveOrigin.x,"onUpdate:modelValue":t[7]||(t[7]=e=>o(l).attr.perspectiveOrigin.x=e),min:0,max:100,prefix:"x",suffix:"%",class:"datav-gui-stepper stepper-x"},null,8,["modelValue"]),a(n,{modelValue:o(l).attr.perspectiveOrigin.y,"onUpdate:modelValue":t[8]||(t[8]=e=>o(l).attr.perspectiveOrigin.y=e),min:0,max:100,prefix:"y",suffix:"%",class:"datav-gui-stepper"},null,8,["modelValue"])])]),_:1})],64)):M("",!0)])])])}}});var Z=S(G,[["__scopeId","data-v-05e377b2"]]);export{Z as default};
