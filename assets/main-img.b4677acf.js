var e=Object.defineProperty;var o=(i,a,t)=>a in i?e(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var s=(i,a,t)=>(o(i,typeof a!="symbol"?a+"":a,t),t);import{W as n,V as r}from"./App.404b9962.js";import"./vendor.891943b7.js";class h extends n{constructor(){super("MainImg",{w:300,h:180});s(this,"config",{imageType:"bitmap",backgroundImage:"https://files.pengxiaotian.com/datav/main-img.png",vectorImage:"https://files.pengxiaotian.com/datav/datav-vue-logo.svg",vectorFill:"#38ae70",repeat:"no-repeat",radius:1,urlConfig:{url:"",ifBlank:!1},cursor:!0});s(this,"apis");s(this,"apiData");s(this,"events");s(this,"actions");this.initData()}initData(){return this.apis={},this.apiData={},this.events={},this.actions={},this}async loadData(){try{const a="",t=await r(this.id,a);this.apiData.source.config.data=JSON.stringify(t.data)}catch(a){throw a}}}export{h as MainImg,h as default};
