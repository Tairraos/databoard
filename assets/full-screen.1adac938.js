var e=Object.defineProperty;var o=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var i=(s,t,a)=>(o(s,typeof t!="symbol"?t+"":t,a),a);import{W as r,V as n}from"./App.404b9962.js";import"./vendor.891943b7.js";class l extends r{constructor(){super("FullScreen",{w:200,h:200});i(this,"config",{request:"https://files.pengxiaotian.com/datav/fsrequest.png",exit:"https://files.pengxiaotian.com/datav/fsexit.png",bgColor:"rgba(255, 255, 255, 0.2)",borderRadius:50,alwaysShow:!0});i(this,"apis");i(this,"apiData");i(this,"events");i(this,"actions");this.initData()}initData(){return this.apis={},this.apiData={},this.events={},this.actions={},this}async loadData(){try{const t="",a=await n(this.id,t);this.apiData.source.config.data=JSON.stringify(a.data)}catch(t){throw t}}}export{l as FullScreen,l as default};
