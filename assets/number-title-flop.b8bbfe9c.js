var n=Object.defineProperty;var r=(i,t,e)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(r(i,typeof t!="symbol"?t+"":t,e),e);import{W as s,P as o,Q as l,R as f,V as u}from"./App.404b9962.js";import"./vendor.891943b7.js";class g extends s{constructor(){super("NumberTitleFlop",{w:350,h:64});a(this,"config",{global:{fontFamily:"Microsoft Yahei",arrangement:"top",distance:0},title:{content:"Typesomething",textStyle:{fontSize:18,color:"#79daff",fontWeight:"normal",textAlign:"flex-start"}},counter:{fontFamily:"Microsoft Yahei",justifyContent:"flex-start",margin:{preNum:0,numSuff:0},prefix:{content:"\uFFE5",textStyle:{fontSize:36,color:"#0a73ff",fontWeight:"bolder"}},suffix:{content:"",textStyle:{fontSize:30,color:"#fff",fontWeight:"bolder"}}},numbers:{textStyle:{fontSize:36,color:"#0a73ff",fontWeight:"bolder"},marginRight:0,bgColor:"rgba(51,51,51,0)",bgRadius:6,bgSeparating:!1,digit:0,decimal:0,divisor:0,separatingChart:!0,separatingSymbol:",",decimalSymbol:".",fixedWidth:0,increment:!0,animation:!0,sameDataFlip:!1,duration:1e3}});a(this,"apis");a(this,"apiData");a(this,"events");a(this,"actions");this.initData()}initData(){const t=[o("title",{description:"\u6807\u9898",optional:!0}),o("value",{description:"\u7FFB\u724C\u5668\u6570\u503C"}),o("prefix",{description:"\u7FFB\u724C\u5668\u524D\u7F00",optional:!0}),o("suffix",{description:"\u7FFB\u724C\u5668\u540E\u7F00",optional:!0})];return l(this,{fields:Object.assign({},...t)}),f(this),this.events={},this.actions={},this}async loadData(){try{const t="text/number-title-flop",e=await u(this.id,t);this.apiData.source.config.data=JSON.stringify(e.data)}catch(t){throw t}}}export{g as NumberTitleFlop,g as default};
