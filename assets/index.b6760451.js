import{bD as G,Y as I,aD as S,b8 as P,b9 as j,x as r,bj as i,bC as C,a4 as A}from"./App.bfe855a2.js";import{o as T,b as Y}from"./dom.c05f3944.js";import{I as $}from"./warning.bb726daf.js";const a=G({x:0,y:0}),W=()=>{const p=I(),f=S(),o=P(),m=j(),d=r(()=>o.selectedComs.every(e=>e.locked)),l=r(()=>o.selectedComs.every(e=>e.hided)),h=r(()=>o.selectedComs.every(e=>e.type===i.layer)),g=r(()=>{var c;const e=o.selectedComs,s=(c=e[0])==null?void 0:c.parentId;return s?e.some(t=>t.type===i.layer)?!0:!o.coms.find(t=>t.id===s):e.some(t=>{var n;return(n=t.children)==null?void 0:n.some(w=>w.type===i.layer)})}),y=e=>{const s=o.selectedComs;if(s.length===0)return;const c=s[0].parentId,t=s.map(n=>n.id);(e===C.top||e===C.down)&&t.reverse(),t.forEach(n=>{o.move(e,n,c)})},E=()=>{const e=o.selectedComs;if(e.length===0)return;const s=!d.value;e.forEach(c=>{c.locked=s})},D=()=>{const e=o.selectedComs;if(e.length===0)return;const s=!l.value;e.forEach(c=>{c.hided=s})},F=()=>{const e=o.selectedComs;if(e.length===0)return;const s=e.map(t=>t.alias),c=f.create({content:`\u5220\u9664\u540E\u53EF\u80FD\u65E0\u6CD5\u6062\u590D\uFF0C\u662F\u5426\u5220\u9664${s.join("\uFF0C")}\uFF0C\u5171${s.length}\u4E2A\u7EC4\u4EF6`,negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",iconPlacement:"top",icon:()=>A($),onPositiveClick:async()=>{c.loading=!0;try{await o.deletes(e)}catch(t){p.error(t.message)}}})},v=()=>{o.selectedComs[0].renameing=!0},x=()=>{o.selectedComs.forEach(e=>{o.copy(e.id)})},k=()=>{o.selectedComs.length!==0&&o.createGroup()},M=()=>{o.selectedComs.length!==0&&o.cancelGroup()},b=(e,s)=>{e.preventDefault(),e.stopPropagation(),s.selected&&(a.x=e.clientX,a.y=e.clientY,m.contextMenu.show=!0,T(document,"click",u))},u=()=>{Y(document,"click",u),m.contextMenu.show=!1};return{pos:a,isLocked:d,isHided:l,isGroup:h,disableGroup:g,showMenu:b,hideMenu:u,moveCom:y,lockCom:E,hideCom:D,confirmDeleteCom:F,renameCom:v,copyCom:x,composeComs:k,decomposeComs:M}};export{W as u};
