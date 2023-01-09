import{e as O,b9 as W,x as z,f as g,s as q,bi as N,n as b,k as F,o as u,h,L as C,O as P,F as A,bj as B,a4 as E,aq as V,be as T,b8 as X,bg as D,I as M,bk as I,ap as R,aj as Y,g as G,bl as S,r as Z,p as J}from"./App.93664d39.js";import{o as K,s as p}from"./dom.003cae57.js";import{g as Q}from"./screen.ea28dc00.js";const U=O({__name:"datav-item",props:{com:{type:Object,required:!0}},setup(o){const n=W(),l=z(()=>{const s=n.pageConfig.styleFilterParams;let m="";return s.enable&&(m=`hue-rotate(${s.hue}deg) contrast(${s.contrast}%) opacity(${s.opacity}%) saturate(${s.saturate}%) brightness(${s.brightness}%)`),m});return(s,m)=>(u(),g("div",{style:b({"pointer-events":"none","z-index":0,left:o.com.attr.x+"px",top:o.com.attr.y+"px",width:o.com.attr.w+"px",height:o.com.attr.h+"px",opacity:o.com.attr.opacity,transform:`rotate(${o.com.attr.deg}deg) ${o.com.attr.filpH?"scaleX(-1)":""} ${o.com.attr.filpV?"scaleY(-1)":""}`,filter:F(l)}),class:"-datav-com absolute"},[(u(),q(N(o.com.name),{com:o.com,style:{"pointer-events":"auto"}},null,8,["com"]))],4))}}),tt=O({__name:"datav-layer",props:{com:{type:Object,required:!0}},setup(o){const n=o,l=z(()=>{const{attr:e}=n.com;return{"pointer-events":"none",position:"absolute",overflow:"visible",width:`${e.w}px`,height:`${e.h}px`,opacity:e.opacity,transform:`translate(${e.x}px, ${e.y}px)`}}),s=z(()=>{const{attr:e}=n.com;return e.apply3d?{width:"100%",height:"100%",perspective:`${e.perspective}px`,"perspective-origin":`${e.perspectiveOrigin.x}% ${e.perspectiveOrigin.y}%`}:{width:"100%",height:"100%"}}),m=(e,a)=>{const c=(v,f)=>v===f?1:0;return`rotate3d(${c(e,"x")}, ${c(e,"y")}, ${c(e,"z")}, ${a}deg)`},$=e=>{const{attr:a}=e,c={justifyContent:"center",alignItems:"center",display:"block",opacity:1,transform:"translate3d(0, 0, 0)",width:"auto",height:"auto",position:"absolute",transformOrigin:`${a.w/2+a.x}px ${a.h/2+a.y}`};if(n.com.attr.apply3d){const v=n.com.config.find(_=>_.transform3d.id===e.id),{rotate3d:f,scale3d:k,translate3d:w}=v.transform3d;c.transform=`translate3d(${w.x}px, ${w.y}px, ${w.z}px) scale3d(${k.x}, ${k.y}, 1) ${m(f.axis,f.deg)}`}return c};return(e,a)=>(u(),g("div",{key:o.com.id,style:b(F(l)),class:"-datav-layer slider"},[h("div",{class:"slider-wrap",style:b(F(s))},[(u(!0),g(C,null,P(o.com.children,c=>(u(),g("div",{key:c.id,class:"slider-item",style:b($(c))},[A(e.$slots,"default",{data:c})],4))),128))],4)],4))}}),et=O({name:"DatavTransform",props:{com:{type:Object,required:!0}},setup(){const o=n=>n.type===B.com?E(U,{com:n},{default:()=>E(V(n.name),{com:n})}):E(tt,{com:n},{default:({data:l})=>o(l)});return{create:o}},render(){return this.create(this.$props.com)}}),ot="//files.pengxiaotian.com",rt=O({name:"Preview",components:{DatavCom:et},props:{screenId:{type:[String,Number],required:!0}},setup(o){const n=T(),l=W(),s=X(),m=D(),$=M(!0),{pageConfig:e}=I(l),{coms:a}=I(s),c=z(()=>{const t=e.value.styleFilterParams;let r="";return t.enable&&(r=`hue-rotate(${t.hue}deg) contrast(${t.contrast}%) opacity(${t.opacity}%) saturate(${t.saturate}%) brightness(${t.brightness}%)`),r}),v=(t,r)=>{const d=document.documentElement.clientWidth,x=document.documentElement.clientHeight,i=d/t,y=x/r;p(document.body,{transform:`scale(${i}, ${y})`,transformOrigin:"left top",backgroundSize:"100% 100%"})},f=t=>{const r=document.documentElement.clientWidth/t;p(document.body,{transform:`scale(${r})`,transformOrigin:"left top",backgroundSize:"100%"})},k=(t,r)=>{const d=document.documentElement.clientWidth,i=document.documentElement.clientHeight/r,y=(d-t*i)/2;p(document.body,{transform:`scale(${i})`,transformOrigin:"left top",backgroundSize:`${t/d*i*100}% 100%`,backgroundPosition:`${y.toFixed(3)}px top`,marginLeft:`${y.toFixed(3)}px`})},w=(t,r)=>{const d=document.documentElement.clientWidth,i=document.documentElement.clientHeight/r,y=(d-t*i)/2;p(document.body,{transform:`scale(${i})`,transformOrigin:"left top",backgroundSize:`${t/d*i*100}% 100%`,backgroundPosition:`${y.toFixed(3)}px top`}),document.documentElement.style.overflowX="scroll"},_=()=>{p(document.body,{overflow:"hidden",position:"relative"})},j=t=>{switch(t.zoomMode){case S.auto:v(t.width,t.height);break;case S.width:f(t.width);break;case S.height:k(t.width,t.height);break;case S.full:w(t.width,t.height);break;default:_();break}},H=t=>{document.title=l.screen.name,document.querySelector('meta[name="viewport"]').setAttribute("content",`width=${t.width}`),p(document.documentElement,{overflowX:"hidden",overflowY:"visible"}),p(document.body,{width:`${t.width}px`,height:`${t.height}px`,backgroundImage:`url(${e.value.bgimage})`,backgroundColor:e.value.bgcolor}),j(t)},L=R();return Y(async()=>{var t;try{const r=await Q(+o.screenId);if(r){l.setEditorOption({screen:r.screen,config:r.config}),H(r.config),s.load(r.coms);const{componentsView:d,publishersView:x,subscribersView:i}=r.variables;m.$patch({componentsView:d,publishersView:x,subscribersView:i}),n.$patch({dataFilters:(t=r.dataFilters)!=null?t:[]}),setTimeout(()=>{$.value=!1},500),K(window,"resize",()=>{j(e.value)})}else throw new Error("404")}catch{L.replace({name:"NotFound",params:{catchAll:"error"}})}}),{cdn:ot,LOGO:G.logo,loading:$,pageConfig:e,coms:a,styleFilter:c}}});const nt={target:"_blank",href:"javascript:;"},st=["src"],at={key:0,href:"/",target:"_blank",class:"datav-watermark"},ct=["src"],it={class:"scene"};function lt(o,n,l,s,m,$){const e=V("datav-com");return u(),g(C,null,[h("div",{id:"datav-loading",style:b({background:"rgb(15, 42, 66)",display:o.loading?"block":"none"})},[h("a",nt,[h("img",{class:"datav-logo",src:`${o.cdn}/datav/datav-loading.gif`},null,8,st)])],4),h("div",{class:"datav-layout",style:b({visibility:o.loading?"hidden":"visible"})},[o.pageConfig.useWatermark?(u(),g("a",at,[h("img",{src:o.LOGO},null,8,ct)])):J("",!0),h("div",it,[(u(!0),g(C,null,P(o.coms,a=>(u(),q(e,{key:a.id,com:a},null,8,["com"]))),128))])],4)],64)}const pt=Z(rt,[["render",lt]]);export{pt as default};