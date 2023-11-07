(this["webpackJsonpcolor-ui"]=this["webpackJsonpcolor-ui"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(10),i=t(2),F=t(3);const c="hsl(210deg, 40%, 10%)",s="hsl(0deg, 0%, 100%)",l="hsl(0deg, 0%, 0%)";var d;var p,b,h=Object(i.b)(d||(d=Object(F.a)(["  \n  /* Intuitive Box model and removing default margin and padding */\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n\n  html,\n  body {\n    color: ",";\n    background: ",';\n    \n  /* Typographic tweaks: Accessible line-height and improves text-rendering */\n    line-height: 1.5;\n  \ttext-rendering: optimizeSpeed;\n\t  -webkit-font-smoothing: antialiased;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n    min-width: 300px;\n    font-family: "Gill Sans", sans-serif;\n  }\n\n  /* Improve media defaults */\n  img,\n  picture,\n  video,\n  canvas,\n  svg {\n    display: block;\n    max-width: 100%;\n  }\n\n  /* Remove built-in form typography styles */\n  input,\n  button,\n  textarea,\n  select {\n    font: inherit;\n  }\n\n  /* Avoid text-overflows */\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    overflow-wrap: break-word;\n  }\n\n  /* Accessible and custom Typgraphy */\n  h1 {\n    font-size: 1.6rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.4rem;\n  }\n\n  h4 {\n    font-size: 1.3rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  h6 {\n    font-size: 1.1rem;\n  }\n\n  ul,\n  ol {\n    list-style: none;\n  }\n\n  a,\n  a:hover,\n  a:active,\n  a:focus {\n    text-decoration: none;\n    font: inherit;\n  }\n\n  /* Create a root stacking context */\n  #root {\n    isolation: isolate;\n  }\n'])),s,c),u=t(1);const x=i.c.div(p||(p=Object(F.a)(["\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-size: 1.2rem;\n"])),s),m=i.c.span(b||(b=Object(F.a)(["\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 4px 8px;\n  border-radius: 4px;\n"])));var f,j,g=function(n){let{color:e}=n;return Object(u.jsx)(x,{style:{backgroundColor:e},children:Object(u.jsx)(m,{children:e})})};const B=i.c.div(f||(f=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 16px;\n"]))),D=i.c.div(j||(j=Object(F.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  color: #555;\n"])));var E,v,O,y=function(n){let{colors:e}=n;return Object(u.jsx)(B,{children:e.length>0?e.map(((n,e)=>Object(u.jsx)(g,{color:n},e))):Object(u.jsx)(D,{children:"No data found"})})},C=t(6);const A=i.c.div(E||(E=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),k=i.c.form(v||(v=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 1.2rem;\n"]))),w=i.c.input(O||(O=Object(F.a)(["\n  padding: 8px;\n  border-radius: 8px;\n  min-width: 300px;\n  color: ",";\n"])),l);var z,S=function(){const[n,e]=o.a.useState(""),[t,r]=o.a.useState([]);return Object(u.jsxs)(A,{children:[Object(u.jsxs)(k,{onSubmit:async t=>{t.preventDefault();const o=n.toLowerCase();C[o]?r(C[o]):(r([]),console.error("No data found for the input word:",o)),e("")},children:[Object(u.jsx)("label",{htmlFor:"text-input",children:"Enter a text:"}),Object(u.jsx)(w,{required:!0,id:"text-input",type:"text",value:n,onChange:n=>{e(n.target.value)}})]}),Object(u.jsx)(y,{colors:t})]})};const I=i.c.div(z||(z=Object(F.a)(["\n  padding: 48px;\n"])));var J=function(){return Object(u.jsx)(I,{children:Object(u.jsx)(S,{})})};const N=document.getElementById("root");Object(a.createRoot)(N).render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(i.a,{disableVendorPrefixes:!0,children:Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(J,{})]})})}))},6:function(n){n.exports=JSON.parse('{"tree":["#228B22","#008000","#556B2F"],"sky":["#87CEEB","#00BFFF","#1E90FF"],"apple":["#FF4500","#FF6347","#8B0000"],"sun":["#FFD700","#FFA500","#F0E68C"],"ocean":["#1E90FF","#00BFFF","#4169E1"],"grass":["#228B22","#008000","#7CFC00"],"rose":["#FF69B4","#FF1493","#FFC0CB"],"cloud":["#FFFFFF","#F5F5F5","#D3D3D3"],"banana":["#FFFF00","#FFD700","#FFC125"],"cherry":["#FF4500","#FF6347","#8B0000"],"lemon":["#FFF44F","#FFD700","#F0E68C"],"peach":["#FFDAB9","#FFB6C1","#FFC0CB"],"chocolate":["#8B4513","#D2691E","#A0522D"],"coffee":["#A52A2A","#8B4513","#D2691E"],"smoke":["#D3D3D3","#B0C4DE","#778899"],"fire":["#FF4500","#FF6347","#8B0000"],"leaf":["#228B22","#008000","#556B2F"],"peacock":["#00A86B","#006747","#339966"],"butterfly":["#87CEEB","#00BFFF","#1E90FF"],"beach":["#F5DEB3","#D2B48C","#DEB887"],"strawberry":["#FF0000","#DC143C","#B22222"],"butter":["#FFD700","#FFA500","#F0E68C"],"carrot":["#FFA500","#FF6347","#FF4500"],"mint":["#00FF7F","#ADFF2F","#98FB98"],"oak":["#8B4513","#D2691E","#A0522D"],"lavender":["#E6E6FA","#9370DB","#7B68EE"],"rosemary":["#008000","#228B22","#556B2F"],"daisy":["#FFD700","#FFA500","#F0E68C"],"vanilla":["#FFFFF0","#FFFACD","#FAFAD2"],"blueberry":["#0000CD","#1E90FF","#4169E1"],"champagne":["#F7E7CE","#E6BE8A","#D2B48C"],"pumpkin":["#FF4500","#FF6347","#8B0000"],"almond":["#FF4500","#FF6347","#8B0000"],"cinnamon":["#A52A2A","#8B4513","#D2691E"],"nutmeg":["#8B4513","#D2691E","#A0522D"],"raspberry":["#E30B5D","#C71585","#DB7093"]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.fa8567d0.chunk.js.map