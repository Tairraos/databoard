import{f as r,a as F}from"./select-options.0560abca.js";import{b as V}from"./App.718241ee.js";import{a2 as B,aG as b,a3 as a,a8 as y,a_ as u,b0 as n,a5 as m,a4 as f}from"./vendor.97d7e3b4.js";const C=B({name:"VMarqueeProp",props:{com:{type:Object,required:!0}},setup(e){return{config:b(e.com,"config"),fontFamilys:r,fontWeights:F}}}),v={class:"setting-panel-gui"};function S(e,l,c,A,E,U){const d=a("g-select"),t=a("g-field"),i=a("g-input-number"),p=a("g-color-picker"),g=a("g-field-collapse"),s=a("n-switch");return f(),y("div",v,[u(g,{label:"\u6587\u672C\u6837\u5F0F"},{default:n(()=>[u(t,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:n(()=>[u(d,{modelValue:e.config.textStyle.fontFamily,"onUpdate:modelValue":l[0]||(l[0]=o=>e.config.textStyle.fontFamily=o),data:e.fontFamilys},null,8,["modelValue","data"])]),_:1}),u(t,{level:2,label:"\u5B57\u53F7"},{default:n(()=>[u(i,{modelValue:e.config.textStyle.fontSize,"onUpdate:modelValue":l[1]||(l[1]=o=>e.config.textStyle.fontSize=o),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),u(t,{level:2,label:"\u5B57\u4F53\u989C\u8272"},{default:n(()=>[u(p,{modelValue:e.config.textStyle.color,"onUpdate:modelValue":l[2]||(l[2]=o=>e.config.textStyle.color=o)},null,8,["modelValue"])]),_:1}),u(t,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:n(()=>[u(d,{modelValue:e.config.textStyle.fontWeight,"onUpdate:modelValue":l[3]||(l[3]=o=>e.config.textStyle.fontWeight=o),data:e.fontWeights},null,8,["modelValue","data"])]),_:1})]),_:1}),u(t,{label:"\u662F\u5426\u8F6E\u64AD"},{default:n(()=>[u(s,{value:e.config.loop,"onUpdate:value":l[4]||(l[4]=o=>e.config.loop=o)},null,8,["value"])]),_:1}),u(t,{label:"\u5B9A\u901F\u64AD\u653E"},{default:n(()=>[u(s,{value:e.config.ifSpeed,"onUpdate:value":l[5]||(l[5]=o=>e.config.ifSpeed=o)},null,8,["value"])]),_:1}),e.config.ifSpeed?(f(),m(t,{key:0,label:"\u52A8\u753B\u95F4\u9694"},{default:n(()=>[u(i,{modelValue:e.config.speed,"onUpdate:modelValue":l[6]||(l[6]=o=>e.config.speed=o),min:0,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})):(f(),m(t,{key:1,label:"\u52A8\u753B\u65F6\u95F4"},{default:n(()=>[u(i,{modelValue:e.config.duration,"onUpdate:modelValue":l[7]||(l[7]=o=>e.config.duration=o),min:0,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})),u(t,{label:"\u6BCF\u6B21\u505C\u7559"},{default:n(()=>[u(i,{modelValue:e.config.timeout,"onUpdate:modelValue":l[8]||(l[8]=o=>e.config.timeout=o),min:0,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})])}var W=V(C,[["render",S]]);export{W as default};