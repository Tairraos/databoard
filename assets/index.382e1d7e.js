import{E as u}from"./App.718241ee.js";import{o as m,b as f}from"./dom.6b90dd47.js";import{bn as p,aF as o}from"./vendor.97d7e3b4.js";const t=p({x:0,y:0}),v=c=>{const n=o(()=>u.contextMenu),s=o(()=>u.selectedCom),d=o(()=>{var e;return(e=s.value)==null?void 0:e.locked}),r=o(()=>{var e;return(e=s.value)==null?void 0:e.hided}),a=o(()=>({display:n.value.show?"block":"none",left:`${t.x+10}px`,top:`${t.y+10}px`,transform:document.documentElement.clientHeight-t.y<250?"translate(0px, -100%)":""})),i=e=>{e.preventDefault(),s.value&&(t.x=e.clientX,t.y=e.clientY,n.value.show=!0,m(document,"click",l))},l=()=>{f(document,"click",l),c&&c.beforeClose&&c.beforeClose(),n.value.show=!1};return{contextMenu:n,selectedCom:s,isLocked:d,isHided:r,contextMenuStyle:a,showMenu:i,hideMenu:l}};export{v as u};