import{l as c,r as w}from"./select-options.8a7ac8f4.js";import{e as G,aH as T,bu as z,r as S,aq as d,o as t,f as b,j as u,w as a,L as B,O as v,K as E,t as U,s,p as g}from"./App.bfe855a2.js";const $=G({name:"VBgBoxProp",props:{com:{type:Object,required:!0}},setup(l){return{config:T(l.com,"config"),lineStyles:c,repeatTypes:w,presetImages:z,handleAddFillsItem:()=>({fill:"#333",opacity:10}),handleAddStopsItem:()=>({offset:0,color:"#f60"})}}}),N={class:"setting-panel-gui"};function R(l,o,C,k,j,q){const m=d("g-input-number"),n=d("g-field"),p=d("g-color-picker"),i=d("g-field-collapse"),V=d("n-radio-button"),F=d("n-radio-group"),y=d("g-select"),A=d("g-select-image"),D=d("g-upload-image"),f=d("g-input"),I=d("n-switch");return t(),b("div",N,[u(n,{tooltip:"\u5F53\u5E94\u7528\u6E10\u53D8\u8FB9\u6846\u6216\u56FE\u7247\u8FB9\u6846\u65F6\uFF0C\u5706\u89D2\u5931\u6548",label:"\u5706\u89D2"},{default:a(()=>[u(m,{modelValue:l.config.borderRadius,"onUpdate:modelValue":o[0]||(o[0]=e=>l.config.borderRadius=e),min:0,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u586B\u5145",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:l.config.fills,min:0,max:5,tab:"\u586B\u5145","add-item":l.handleAddFillsItem},{default:a(e=>[u(n,{label:"\u586B\u5145",tooltip:"",level:2,"is-flat":!0},{default:a(()=>[u(p,{modelValue:e.item.fill,"onUpdate:modelValue":r=>e.item.fill=r,inline:"inline",label:"\u586B\u5145"},null,8,["modelValue","onUpdate:modelValue"]),u(m,{modelValue:e.item.opacity,"onUpdate:modelValue":r=>e.item.opacity=r,min:0,max:100,step:1,suffix:"%",inline:"inline",label:"\u900F\u660E\u5EA6"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["list","add-item"]),u(i,{modelValue:l.config.border.show,"onUpdate:modelValue":o[14]||(o[14]=e=>l.config.border.show=e),toggle:!0,label:"\u8FB9\u6846"},{default:a(()=>[u(n,{level:2,label:"\u8FB9\u6846\u7C7B\u578B"},{default:a(()=>[u(F,{value:l.config.border.type,"onUpdate:value":o[1]||(o[1]=e=>l.config.border.type=e),size:"small"},{default:a(()=>[(t(),b(B,null,v([{key:"flat",value:"\u7EAF\u8272"},{key:"linearGradient",value:"\u6E10\u53D8"},{key:"image",value:"\u56FE\u7247"}],e=>u(V,{key:e.key,value:e.key},{default:a(()=>[E(U(e.value),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),l.config.border.type==="flat"?(t(),s(n,{key:0,level:2,label:"\u8FB9\u6846\u914D\u7F6E","is-flat":!0},{default:a(()=>[u(m,{modelValue:l.config.border.flat.width,"onUpdate:modelValue":o[2]||(o[2]=e=>l.config.border.flat.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u7C97\u7EC6"},null,8,["modelValue"]),u(y,{modelValue:l.config.border.flat.style,"onUpdate:modelValue":o[3]||(o[3]=e=>l.config.border.flat.style=e),data:l.lineStyles,inline:"inline",label:"\u6837\u5F0F"},null,8,["modelValue","data"]),u(p,{modelValue:l.config.border.flat.color,"onUpdate:modelValue":o[4]||(o[4]=e=>l.config.border.flat.color=e),inline:"inline-single",label:"\u989C\u8272"},null,8,["modelValue"])]),_:1})):g("",!0),l.config.border.type==="linearGradient"?(t(),s(i,{key:1,label:"\u8FB9\u6846\u914D\u7F6E"},{default:a(()=>[u(n,{level:2,label:"\u7C97\u7EC6"},{default:a(()=>[u(m,{modelValue:l.config.border.linearGradient.width,"onUpdate:modelValue":o[5]||(o[5]=e=>l.config.border.linearGradient.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u6E10\u53D8\u8272"},{default:a(()=>[u(n,{level:2,label:"\u89D2\u5EA6"},{default:a(()=>[u(m,{modelValue:l.config.border.linearGradient.color.angle,"onUpdate:modelValue":o[6]||(o[6]=e=>l.config.border.linearGradient.color.angle=e),min:0,max:360,step:1,suffix:"deg"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u8282\u70B9",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:l.config.border.linearGradient.color.stops,min:0,max:100,tab:"\u8282\u70B9","add-item":l.handleAddStopsItem},{default:a(e=>[u(n,{label:"\u8282\u70B9",tooltip:"",level:2,"is-flat":!0},{default:a(()=>[u(m,{modelValue:e.item.offset,"onUpdate:modelValue":r=>e.item.offset=r,min:0,max:100,step:1,inline:"inline",label:"\u4F4D\u7F6E"},null,8,["modelValue","onUpdate:modelValue"]),u(p,{modelValue:e.item.color,"onUpdate:modelValue":r=>e.item.color=r,inline:"inline",label:"\u989C\u8272"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["list","add-item"])]),_:1})]),_:1})):g("",!0),l.config.border.type==="image"?(t(),s(n,{key:2,level:2,label:"\u914D\u7F6E\u65B9\u5F0F"},{default:a(()=>[u(F,{value:l.config.border.imageType,"onUpdate:value":o[7]||(o[7]=e=>l.config.border.imageType=e),size:"small"},{default:a(()=>[(t(),b(B,null,v([{key:"preset",value:"\u9884\u8BBE\u8FB9\u6846"},{key:"custom",value:"\u81EA\u5B9A\u4E49\u8FB9\u6846"}],e=>u(V,{key:e.key,value:e.key},{default:a(()=>[E(U(e.value),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1})):g("",!0),l.config.border.type==="image"&&l.config.border.imageType==="preset"?(t(),s(n,{key:3,level:2,label:"\u8FB9\u6846\u914D\u7F6E"},{default:a(()=>[u(A,{modelValue:l.config.border.presetImage,"onUpdate:modelValue":o[8]||(o[8]=e=>l.config.border.presetImage=e),images:l.presetImages},null,8,["modelValue","images"])]),_:1})):g("",!0),l.config.border.type==="image"&&l.config.border.imageType==="custom"?(t(),s(n,{key:4,level:2,label:"\u8FB9\u6846\u914D\u7F6E","is-flat":!0},{default:a(()=>[u(D,{modelValue:l.config.border.customImage.source,"onUpdate:modelValue":o[9]||(o[9]=e=>l.config.border.customImage.source=e),inline:"inline",label:"\u56FE\u7247"},null,8,["modelValue"]),u(f,{modelValue:l.config.border.customImage.slice,"onUpdate:modelValue":o[10]||(o[10]=e=>l.config.border.customImage.slice=e),inline:"inline",label:"\u5207\u7247"},null,8,["modelValue"]),u(f,{modelValue:l.config.border.customImage.width,"onUpdate:modelValue":o[11]||(o[11]=e=>l.config.border.customImage.width=e),inline:"inline",label:"\u5BBD\u5EA6"},null,8,["modelValue"]),u(f,{modelValue:l.config.border.customImage.outset,"onUpdate:modelValue":o[12]||(o[12]=e=>l.config.border.customImage.outset=e),inline:"inline",label:"\u5916\u6269"},null,8,["modelValue"]),u(y,{modelValue:l.config.border.customImage.repeat,"onUpdate:modelValue":o[13]||(o[13]=e=>l.config.border.customImage.repeat=e),data:l.repeatTypes,inline:"inline",label:"\u5E73\u94FA\u7C7B\u578B"},null,8,["modelValue","data"])]),_:1})):g("",!0)]),_:1},8,["modelValue"]),u(i,{label:"\u6EE4\u955C"},{default:a(()=>[u(n,{level:2,label:"\u6A21\u7CCA"},{default:a(()=>[u(f,{modelValue:l.config.filter.blur,"onUpdate:modelValue":o[15]||(o[15]=e=>l.config.filter.blur=e)},null,8,["modelValue"])]),_:1})]),_:1}),u(i,{label:"\u80CC\u666F\u8FC7\u6EE4\u5668"},{default:a(()=>[u(n,{level:2,label:"\u78E8\u73BB\u7483\u6A21\u7CCA"},{default:a(()=>[u(f,{modelValue:l.config.backdropFilter.blur,"onUpdate:modelValue":o[16]||(o[16]=e=>l.config.backdropFilter.blur=e)},null,8,["modelValue"])]),_:1})]),_:1}),u(i,{tooltip:"\u70B9\u51FB\u56FE\u7247\u533A\u57DF\u53EF\u8DF3\u8F6C\u81F3\u8BBE\u5B9A\u7684\u8D85\u94FE\u63A5",label:"\u8D85\u94FE\u63A5\u914D\u7F6E"},{default:a(()=>[u(n,{level:2,label:"\u8D85\u94FE\u63A5"},{default:a(()=>[u(f,{modelValue:l.config.urlConfig.url,"onUpdate:modelValue":o[17]||(o[17]=e=>l.config.urlConfig.url=e)},null,8,["modelValue"])]),_:1}),u(n,{level:2,label:"\u662F\u5426\u65B0\u6253\u5F00\u7A97\u53E3"},{default:a(()=>[u(I,{value:l.config.urlConfig.ifBlank,"onUpdate:value":o[18]||(o[18]=e=>l.config.urlConfig.ifBlank=e)},null,8,["value"])]),_:1})]),_:1})])}const H=S($,[["render",R]]);export{H as default};
