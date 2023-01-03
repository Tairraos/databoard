const e=[{id:"Microsoft Yahei",value:"\u5FAE\u8F6F\u96C5\u9ED1"},{id:"SimSun",value:"\u5B8B\u4F53"},{id:"SimHei",value:"\u9ED1\u4F53"},{id:"LiSu",value:"\u96B6\u4E66"},{id:"YouYuan",value:"\u5E7C\u5706"},{id:"tahoma",value:"tahoma"},{id:"arial",value:"arial"},{id:"sans-serif",value:"sans-serif"}],i=[{id:"lighter",value:"\u7EC6"},{id:"normal",value:"\u6B63\u5E38"},{id:"bolder",value:"\u7C97"},{id:"100",value:"100"},{id:"200",value:"200"},{id:"300",value:"300"},{id:"400",value:"400"},{id:"500",value:"500"},{id:"600",value:"600"},{id:"700",value:"700"},{id:"800",value:"800"},{id:"900",value:"900"}],a=[{id:"left",value:"\u5DE6\u5BF9\u9F50"},{id:"center",value:"\u5C45\u4E2D\u5BF9\u9F50"},{id:"right",value:"\u53F3\u5BF9\u9F50"}],t=[{id:"horizontal-tb",value:"\u6C34\u5E73"},{id:"vertical-rl",value:"\u5782\u76F4"}],l=[{id:"flex-start",value:"\u5DE6\u5BF9\u9F50"},{id:"center",value:"\u5C45\u4E2D\u5BF9\u9F50"},{id:"flex-end",value:"\u53F3\u5BF9\u9F50"}],d=[{id:"flex-start",value:"\u4E0A\u5BF9\u9F50"},{id:"center",value:"\u5C45\u4E2D\u5BF9\u9F50"},{id:"flex-end",value:"\u4E0B\u5BF9\u9F50"}],n=[{id:"start",value:"\u5F00\u5934"},{id:"center",value:"\u4E2D\u95F4"},{id:"end",value:"\u672B\u5C3E"}],s=[{id:"solid",value:"\u5B9E\u7EBF"},{id:"dashed",value:"\u865A\u7EBF"}],v=[{id:"solid",value:"\u5B9E\u4F53\u586B\u5145"},{id:"gradient",value:"\u6E10\u53D8\u586B\u5145"}],o=[{id:"no-repeat",value:"\u4E0D\u91CD\u590D\uFF0C\u62C9\u4F38\u6EE1"},{id:"repeat",value:"\u6C34\u5E73\u548C\u5782\u76F4\u91CD\u590D"},{id:"repeat-x",value:"\u6C34\u5E73\u91CD\u590D"},{id:"repeat-y",value:"\u5782\u76F4\u91CD\u590D"}],c=[{id:"top",value:"\u9876\u90E8"},{id:"left",value:"\u5DE6\u4FA7"},{id:"right",value:"\u53F3\u4FA7"},{id:"bottom",value:"\u5E95\u90E8"},{id:"inside",value:"\u5185\u90E8"},{id:"insideLeft",value:"\u5185-\u5DE6\u4FA7"},{id:"insideRight",value:"\u5185-\u53F3\u4FA7"},{id:"insideTop",value:"\u5185-\u9876\u90E8"},{id:"insideBottom",value:"\u5185-\u5E95\u90E8"},{id:"insideTopLeft",value:"\u5185-\u9876\u90E8\u5C45\u5DE6"},{id:"insideBottomLeft",value:"\u5185-\u5E95\u90E8\u5C45\u5DE6"},{id:"insideTopRight",value:"\u5185-\u9876\u90E8\u5C45\u53F3"},{id:"insideBottomRight",value:"\u5185-\u9876\u90E8\u5C45\u53F3"}],E=["linear","quadraticIn","quadraticOut","quadraticInOut","cubicIn","cubicOut","cubicInOut","quarticIn","quarticOut","quarticInOut","quinticIn","quinticOut","quinticInOut","sinusoidalIn","sinusoidalOut","sinusoidalInOut","exponentialIn","exponentialOut","exponentialInOut","circularIn","circularOut","circularInOut","elasticIn","elasticOut","elasticInOut","backIn","backOut","backInOut","bounceIn","bounceOut","bounceInOut"].map(u=>({id:u,value:u})),F=[{id:"auto",value:"\u81EA\u9002\u5E94"},{id:"dataMin",value:"\u6570\u636E\u6700\u5C0F\u503C"},{id:"dataMax",value:"\u6570\u636E\u6700\u5927\u503C"}],r=[{id:"horizontal",value:"\u6C34\u5E73"},{id:"vertical",value:"\u5782\u76F4"}],D=[{id:"category",value:"\u7C7B\u76EE\u578B"},{id:"value",value:"\u6570\u503C\u578B"},{id:"time",value:"\u65F6\u95F4\u578B"}],C=[{id:"top-left",value:"\u9876\u90E8\u5C45\u5DE6"},{id:"top-center",value:"\u9876\u90E8\u5C45\u4E2D"},{id:"top-right",value:"\u9876\u90E8\u5C45\u53F3"},{id:"middle-left",value:"\u5DE6\u4FA7\u5C45\u4E2D"},{id:"middle-right",value:"\u53F3\u4FA7\u5C45\u4E2D"},{id:"bottom-left",value:"\u5E95\u90E8\u5C45\u5DE6"},{id:"bottom-center",value:"\u5E95\u90E8\u5C45\u4E2D"},{id:"bottom-right",value:"\u5E95\u90E8\u5C45\u53F3"}],p=[{id:"auto",value:"\u81EA\u9002\u5E94",icon:"shape-auto"},{id:"circle",value:"\u5706\u5F62",icon:"shape-circle"},{id:"rect",value:"\u77E9\u5F62",icon:"shape-rect"},{id:"roundRect",value:"\u5706\u89D2\u77E9\u5F62",icon:"shape-round-rect"},{id:"triangle",value:"\u4E09\u77E9\u5F62",icon:"shape-triangle"},{id:"diamond",value:"\u83F1\u5F62",icon:"shape-diamond"},{id:"arrow",value:"\u7BAD\u5934",icon:"shape-arrow"},{id:"emptyCircle",value:"\u7A7A\u5FC3\u5706\u5F62",icon:"shape-circle"},{id:"emptyRect",value:"\u7A7A\u5FC3\u77E9\u5F62",icon:"shape-rect"},{id:"emptyRoundRect",value:"\u7A7A\u5FC3\u5706\u89D2\u77E9\u5F62",icon:"shape-round-rect"},{id:"emptyTriangle",value:"\u7A7A\u5FC3\u4E09\u89D2\u5F62",icon:"shape-triangle"},{id:"emptyDiamond",value:"\u7A7A\u5FC3\u83F1\u5F62",icon:"shape-diamond"},{id:"emptyArrow",value:"\u7A7A\u5FC3\u7BAD\u5934",icon:"shape-arrow"}],m=[{id:"auto",value:"\u9ED8\u8BA4"},{id:"d",value:"11(\u6574\u6570)"},{id:".1f",value:"11.1(\u6D6E\u70B9\u6570)"},{id:".2f",value:"11.11(\u6D6E\u70B9\u6570)"},{id:".0%",value:"11%"},{id:".1%",value:"11.1%"},{id:".2%",value:"11.11%"},{id:"th",value:"1,111(\u5343\u5206\u4F4D)"},{id:".1t",value:"1,111.1(\u5343\u5206\u4F4D)"},{id:".2t",value:"1,111.11(\u5343\u5206\u4F4D)"}],h=[{id:"YYYY-MM-DD HH:mm:ss",value:"2012-01-01 02:03:00(\u5E74-\u6708-\u65E5 \u65F6:\u5206:\u79D2)"},{id:"YYYY-MM-DD",value:"2012-01-01(\u5E74-\u6708-\u65E5)"},{id:"YYYY-MM",value:"2012-01(\u5E74-\u6708)"},{id:"MM-DD",value:"01-01(\u6708-\u65E5)"},{id:"YYYY",value:"2012(\u5E74)"},{id:"MM",value:"01(\u6708)"},{id:"YYYY/MM/DD HH:mm:ss",value:"2012/01/01 02:03:00(\u5E74/\u6708/\u65E5 \u65F6:\u5206:\u79D2)"},{id:"YYYY/MM/DD",value:"2012/01/01(\u5E74/\u6708/\u65E5)"},{id:"YYYY/MM",value:"2012/01(\u5E74/\u6708)"},{id:"MM/DD",value:"01/01(\u6708/\u65E5)"}],B=[{id:"bitmap",value:"\u4F4D\u56FE"},{id:"vector",value:"\u77E2\u91CF\u56FE"}];export{i as a,D as b,h as c,C as d,c as e,e as f,p as g,a as h,v as i,E as j,l as k,s as l,d as m,B as n,r as o,o as r,F as s,n as t,m as v,t as w};
