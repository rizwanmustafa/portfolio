(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(52),r=n.n(c),a=n(0),i=n(33),o=n(4),s=n(91),l=n(58),j=Object(l.a)({palette:{primary:{light:"#54d47d",main:"#05a24f",dark:"#007224",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#4792f4",dark:"#0065c1",contrastText:"#fff"}}}),d=n(21),b=n(92),u=n(3),x=function(){var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return Object(u.jsx)("div",{className:"loading",style:Object(d.a)(Object(d.a)({},{position:"absolute",left:"50%",top:"50%",width:"100%",height:"100%",transform:"translate(-50%, -50%)",zIndex:3}),e),children:Object(u.jsxs)("div",{style:e,children:[Object(u.jsx)(b.a,{size:"6rem"}),Object(u.jsx)("p",{style:{fontSize:"1.5rem",fontWeight:300},children:"Loading content!"})]})})},O=n(7),p=n(88),f=n(93),m=n(89),h=function(e){return Object(u.jsx)(m.a,{variant:e.location.pathname===e.route?"outlined":"text",onClick:function(){return e.navigate(e.route)},style:e.style,children:e.display})},g=function(){var e=Object(o.e)(),t=Object(o.f)(),n=Object(a.useState)(!1),c=Object(O.a)(n,2),r=c[0],i=c[1],s=Object(a.useRef)(null);return Object(a.useEffect)((function(){null!==s.current&&(console.log(s.current),!0===r?s.current.style.maxHeight=s.current.scrollHeight+"px":!1===r&&(s.current.style.maxHeight="0px"))}),[r]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f.a,{color:j.palette.primary.main,rounded:!0,label:"Show Menu",onToggle:function(e){i(e)}}),Object(u.jsxs)(p.a,{ref:s,style:{position:"absolute",top:"275%",left:"50%",zIndex:1,width:"85%",transform:"translate(-50%, -50%)",borderRadius:10,backgroundColor:"white",boxShadow:"1px 5px 20px -10px black",transition:"max-height 0.75s ease",padding:0,maxHeight:0,overflow:"hidden"},direction:"column",children:[Object(u.jsx)(h,{display:"Home",route:"/",navigate:t,location:e,style:{margin:"1.5rem 1.5rem 0 1.5rem"}}),Object(u.jsx)(h,{display:"Projects",route:"/projects",navigate:t,location:e,style:{margin:"0 1.5rem"}}),Object(u.jsx)(h,{display:"Contact",route:"/contact",navigate:t,location:e,style:{margin:"0 1.5rem"}}),Object(u.jsx)(h,{display:"About",route:"/about",navigate:t,location:e,style:{margin:"0 1.5rem 1.5rem 1.5rem"}})]})]})},y=n.p+"static/media/Logo.85ad4980.svg",v=function(){var e=Object(o.f)(),t=Object(o.e)(),n=Object(a.useState)(window.innerWidth>768),c=Object(O.a)(n,2),r=c[0],i=c[1],s=Object(a.useCallback)((function(){return i(window.innerWidth>768)}),[]);return Object(a.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}})),Object(u.jsxs)(p.a,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",style:{padding:"0.5rem 1rem",borderBottom:"2px solid ".concat(j.palette.primary.main),position:"relative"},children:[Object(u.jsx)("img",{src:y,style:{width:"6rem",cursor:"pointer"},onClick:function(){return e("/")},alt:""}),r?Object(u.jsxs)(p.a,{direction:"row",spacing:3,children:[Object(u.jsx)(h,{display:"Home",route:"/",location:t,navigate:e}),Object(u.jsx)(h,{display:"Projects",route:"/projects",location:t,navigate:e}),Object(u.jsx)(h,{display:"Contact",route:"/contact",location:t,navigate:e}),Object(u.jsx)(h,{display:"About",route:"/about",location:t,navigate:e})]}):Object(u.jsx)(g,{})]})},w=(n(70),Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,110))}))),k=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,109))}));r.a.render(Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.a,{theme:j,children:[Object(u.jsx)(v,{}),Object(u.jsx)(o.c,{children:Object(u.jsxs)(o.a,{path:"/",children:[Object(u.jsx)(o.a,{index:!0,element:Object(u.jsx)(a.Suspense,{fallback:Object(u.jsx)(x,{}),children:Object(u.jsx)(w,{})})}),Object(u.jsxs)(o.a,{path:"projects",children:[Object(u.jsx)(o.a,{index:!0,element:Object(u.jsx)(a.Suspense,{fallback:Object(u.jsx)(x,{}),children:Object(u.jsx)(k,{})})}),Object(u.jsx)(o.a,{path:"LocalPasswordManager",element:Object(u.jsx)("div",{children:"Hello there"})})]})]})})]})}),document.querySelector("#root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.0382b4b0.chunk.js.map