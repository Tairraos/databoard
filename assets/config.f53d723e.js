import{e as f,aH as p,r as m,aq as a,o as g,f as c,j as l,w as t}from"./App.6555cd13.js";const C=f({name:"VFullScreenProp",props:{com:{type:Object,required:!0}},setup(e){return{config:p(e.com,"config")}}}),V={class:"setting-panel-gui"};function _(e,o,b,w,F,v){const s=a("g-upload-image"),u=a("g-field"),d=a("g-color-picker"),i=a("g-slider"),r=a("n-switch");return g(),c("div",V,[l(u,{label:"\u5168\u5C4F\u663E\u793A"},{default:t(()=>[l(s,{modelValue:e.config.request,"onUpdate:modelValue":o[0]||(o[0]=n=>e.config.request=n)},null,8,["modelValue"])]),_:1}),l(u,{label:"\u9000\u51FA\u5168\u5C4F"},{default:t(()=>[l(s,{modelValue:e.config.exit,"onUpdate:modelValue":o[1]||(o[1]=n=>e.config.exit=n)},null,8,["modelValue"])]),_:1}),l(u,{label:"\u80CC\u666F\u989C\u8272"},{default:t(()=>[l(d,{modelValue:e.config.bgColor,"onUpdate:modelValue":o[2]||(o[2]=n=>e.config.bgColor=n)},null,8,["modelValue"])]),_:1}),l(u,{label:"\u5706\u89D2"},{default:t(()=>[l(i,{modelValue:e.config.borderRadius,"onUpdate:modelValue":o[3]||(o[3]=n=>e.config.borderRadius=n),min:0,max:100,step:1,suffix:"%"},null,8,["modelValue"])]),_:1}),l(u,{label:"\u59CB\u7EC8\u663E\u793A\u56FE\u7247\u80CC\u666F"},{default:t(()=>[l(r,{value:e.config.alwaysShow,"onUpdate:value":o[4]||(o[4]=n=>e.config.alwaysShow=n)},null,8,["value"])]),_:1})])}const U=m(C,[["render",_]]);export{U as default};