import{a as u,U as p}from"./App.404b9962.js";import{a6 as a,aa as n,ad as s,a4 as y,a9 as b,al as S,a5 as c,a7 as I,b1 as r,ac as k,ag as d,aV as _,ah as $,ab as A,af as C,ae as V}from"./vendor.891943b7.js";const B={},E={t:"1632580932028",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4229",width:"64",height:"64"},z=s("path",{d:"M512.3 201.8L719.72 392 812 307.4 512.3 32 212 307.4 304.94 392 512.3 201.8z m-0.6 620.4L304.28 632 212 716.6 511.7 992 812 716.6 719.06 632 511.7 822.2z","p-id":"4230"},null,-1),L=[z];function N(e,o){return a(),n("svg",E,L)}var D=u(B,[["render",N]]);const U=y({name:"GSelectImage",components:{IconSelectArrow:D},props:{modelValue:{type:String,default:""},images:{type:Array,default:()=>[]},label:{type:String,default:""},inline:{type:[Boolean,String],default:!1},placement:{type:String,default:"left"}},emits:[p],setup(e,o){const i=b(!1),g=S(()=>e.images.find(l=>l.id===e.modelValue)||{id:"img-12138",name:"img-12138",src:"https://files.pengxiaotian.com/datav/custom-bg-border.png",border:{slice:"32 37 fill",width:"32px 37px",outset:"0",repeat:"no-repeat"}});return{visible:i,selectedImg:g,onSelectImg:l=>{i.value=!1,o.emit(p,l.id)}}}}),M={class:"datav-gui g-select-image"},T={class:"g-select-image-selection"},F={class:"g-select-image-selection__inner"},G={class:"g-select-image-selected-wrap"},O=["src"],P={class:"g-select-image-arrow"},j={key:0,class:"g-input__caption"},q={class:"g-select-image-dropdown-menu-wrap"},H={class:"g-select-image-dropdown-menu"},J=["onClick"],K=["src"],Q={key:1,class:"g-select-image-dropdown-menu-item --empty"},R=s("span",null,"\u5217\u8868\u4E3A\u7A7A",-1),W=[R];function X(e,o,i,g,h,l){const v=c("IconSelectArrow"),f=c("n-icon"),w=c("n-popover");return a(),I(w,{show:e.visible,"onUpdate:show":o[0]||(o[0]=t=>e.visible=t),placement:e.placement,trigger:"click",width:188,"show-arrow":!1,class:"g-select-image-popover",style:k({"--n-color":"var(--datav-gui-bgcolor-back)"})},{trigger:r(()=>[s("div",{class:A(["datav-gui g-select-image-wrap",[{"--inline --single":!!e.inline}]])},[s("div",M,[s("div",T,[s("div",F,[s("div",G,[s("img",{src:e.selectedImg.preview||e.selectedImg.src,class:"g-select-image-img"},null,8,O),s("span",null,d(e.selectedImg.name),1)])]),s("span",P,[_(f,{color:"var(--datav-gui-font-color-base)"},{default:r(()=>[_(v)]),_:1})])])]),e.label?(a(),n("span",j,d(e.label),1)):$("",!0)],2)]),default:r(()=>[s("div",q,[s("ul",H,[e.images&&e.images.length>0?(a(!0),n(V,{key:0},C(e.images,t=>(a(),n("li",{key:t.id,class:"g-select-image-dropdown-menu-item",onClick:Y=>e.onSelectImg(t)},[s("img",{src:t.preview||t.src,class:"g-select-image-img"},null,8,K),s("span",null,d(t.name),1)],8,J))),128)):(a(),n("li",Q,W))])])]),_:1},8,["show","placement","style"])}var m=u(U,[["render",X]]);m.install=e=>{e.component(m.name,m)};export{m as default};
