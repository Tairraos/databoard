import{f as e,a as l,j as t,b as a}from"./select-options.e8f9d870.js";import{d as o,as as i,f as n,o as d,c as u,a as m,w as f,F as s,g as c,A as g,t as V}from"./index.3038f72e.js";var r=o({name:"VTimerProp",props:{com:{type:Object,required:!0}},setup:o=>({config:i(o.com,"config"),fontFamilys:e,fontWeights:l,justifyContents:t,aligns:a})});const p={class:"setting-panel-gui"};r.render=function(e,l,t,a,o,i){const r=n("g-slider"),y=n("g-field"),b=n("g-color-picker"),S=n("g-field-collapse"),_=n("g-select"),v=n("g-input-number"),x=n("g-input"),h=n("el-radio-button"),U=n("el-radio-group");return d(),u("div",p,[m(S,{modelValue:e.config.iconStyle.show,"onUpdate:modelValue":l[4]||(l[4]=l=>e.config.iconStyle.show=l),toggle:!0,label:"图标样式"},{default:f((()=>[m(y,{level:2,label:"大小"},{default:f((()=>[m(r,{modelValue:e.config.iconStyle.size,"onUpdate:modelValue":l[1]||(l[1]=l=>e.config.iconStyle.size=l),min:0,max:100,step:.1},null,8,["modelValue","step"])])),_:1}),m(y,{level:2,label:"颜色"},{default:f((()=>[m(b,{modelValue:e.config.iconStyle.color,"onUpdate:modelValue":l[2]||(l[2]=l=>e.config.iconStyle.color=l)},null,8,["modelValue"])])),_:1}),m(y,{level:2,label:"边距"},{default:f((()=>[m(r,{modelValue:e.config.iconStyle.marginRight,"onUpdate:modelValue":l[3]||(l[3]=l=>e.config.iconStyle.marginRight=l),min:-100,max:100,step:1},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),m(S,{label:"时间器"},{default:f((()=>[m(S,{label:"文本样式"},{default:f((()=>[m(y,{level:2,tooltip:"请选择您系统有的字体，如果您系统无此字体，标题将会显示默认字体",label:"字体"},{default:f((()=>[m(_,{modelValue:e.config.time.textStyle.fontFamily,"onUpdate:modelValue":l[5]||(l[5]=l=>e.config.time.textStyle.fontFamily=l),data:e.fontFamilys},null,8,["modelValue","data"])])),_:1}),m(y,{level:2,label:"字号"},{default:f((()=>[m(v,{modelValue:e.config.time.textStyle.fontSize,"onUpdate:modelValue":l[6]||(l[6]=l=>e.config.time.textStyle.fontSize=l),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),m(y,{level:2,label:"字体颜色"},{default:f((()=>[m(b,{modelValue:e.config.time.textStyle.color,"onUpdate:modelValue":l[7]||(l[7]=l=>e.config.time.textStyle.color=l)},null,8,["modelValue"])])),_:1}),m(y,{level:2,label:"字体粗细"},{default:f((()=>[m(_,{modelValue:e.config.time.textStyle.fontWeight,"onUpdate:modelValue":l[8]||(l[8]=l=>e.config.time.textStyle.fontWeight=l),data:e.fontWeights},null,8,["modelValue","data"])])),_:1})])),_:1}),m(y,{level:2,tooltip:"如：hh:mm:ss为12小时制的格式",label:"格式化"},{default:f((()=>[m(x,{modelValue:e.config.time.format,"onUpdate:modelValue":l[9]||(l[9]=l=>e.config.time.format=l)},null,8,["modelValue"])])),_:1}),m(y,{level:2,label:"间隔时间"},{default:f((()=>[m(v,{modelValue:e.config.time.duration,"onUpdate:modelValue":l[10]||(l[10]=l=>e.config.time.duration=l),min:0,step:100,suffix:"ms"},null,8,["modelValue"])])),_:1}),m(y,{level:2,label:"水平对齐"},{default:f((()=>[m(U,{modelValue:e.config.time.horizontal,"onUpdate:modelValue":l[11]||(l[11]=l=>e.config.time.horizontal=l)},{default:f((()=>[(d(!0),u(s,null,c(e.justifyContents,(e=>(d(),u(h,{key:e.id,label:e.id},{default:f((()=>[g(V(e.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(y,{level:2,label:"垂直对齐"},{default:f((()=>[m(U,{modelValue:e.config.time.vertical,"onUpdate:modelValue":l[12]||(l[12]=l=>e.config.time.vertical=l)},{default:f((()=>[(d(!0),u(s,null,c(e.aligns,(e=>(d(),u(h,{key:e.id,label:e.id},{default:f((()=>[g(V(e.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])};export default r;