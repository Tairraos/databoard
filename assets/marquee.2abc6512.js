var o=Object.defineProperty;var r=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var i=(e,a,t)=>(r(e,typeof a!="symbol"?a+"":a,t),t);import{bs as n,bo as c,bp as u,bq as f,br as p}from"./App.6555cd13.js";class l extends n{constructor(){super("Marquee",{w:300,h:56});i(this,"config",{textStyle:{fontFamily:"Microsoft Yahei",fontSize:18,color:"#fff",fontWeight:"normal"},loop:!0,ifSpeed:!1,duration:8e3,speed:1e3,timeout:1e3});i(this,"apis");i(this,"apiData");i(this,"events");i(this,"actions");this.initData()}initData(){const t=[c("value",{description:"\u503C"})];return u(this,{fields:Object.assign({},...t),description:"\u8DD1\u9A6C\u706F\u63A5\u53E3"}),f(this),this.events={},this.actions={},this}async loadData(){try{const t="text/marquee",s=await p(this.id,t);this.apiData.source.config.data=JSON.stringify(s.data)}catch(t){throw t}}}export{l as Marquee,l as default};