(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{109:function(e,a,t){"use strict";t.r(a);var o=t(4),n=t(5),r=t(1),i=t(0),s=t(10),c=t(84),l=t(83),p=t(13),d=t(18),m=t(72),h=t(85);function u(e){return Object(m.a)("MuiPaper",e)}Object(h.a)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=t(3),v=["className","component","elevation","square","variant"],b=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},j=Object(p.a)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],!t.square&&a.rounded,"elevation"===t.variant&&a["elevation".concat(t.elevation)]]}})((function(e){var a=e.theme,t=e.ownerState;return Object(r.a)({backgroundColor:a.palette.background.paper,color:a.palette.text.primary,transition:a.transitions.create("box-shadow")},!t.square&&{borderRadius:a.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat(a.palette.divider)},"elevation"===t.variant&&Object(r.a)({boxShadow:a.shadows[t.elevation]},"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat(Object(l.a)("#fff",b(t.elevation)),", ").concat(Object(l.a)("#fff",b(t.elevation)),")")}))})),y=i.forwardRef((function(e,a){var t=Object(d.a)({props:e,name:"MuiPaper"}),o=t.className,i=t.component,l=void 0===i?"div":i,p=t.elevation,m=void 0===p?1:p,h=t.square,b=void 0!==h&&h,y=t.variant,w=void 0===y?"elevation":y,f=Object(n.a)(t,v),O=Object(r.a)({},t,{component:l,elevation:m,square:b,variant:w}),x=function(e){var a=e.square,t=e.elevation,o=e.variant,n=e.classes,r={root:["root",o,!a&&"rounded","elevation"===o&&"elevation".concat(t)]};return Object(c.a)(r,u,n)}(O);return Object(g.jsx)(j,Object(r.a)({as:l,ownerState:O,className:Object(s.a)(x.root,o),ref:a},f))})),w=t(73),f=t(14);function O(e){return Object(m.a)("MuiTypography",e)}Object(h.a)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],M=Object(p.a)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a["align".concat(Object(f.a)(t.align))],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((function(e){var a=e.theme,t=e.ownerState;return Object(r.a)({margin:0},t.variant&&a.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},L={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=i.forwardRef((function(e,a){var t=Object(d.a)({props:e,name:"MuiTypography"}),o=function(e){return L[e]||e}(t.color),i=Object(w.a)(Object(r.a)({},t,{color:o})),l=i.align,p=void 0===l?"inherit":l,m=i.className,h=i.component,u=i.gutterBottom,v=void 0!==u&&u,b=i.noWrap,j=void 0!==b&&b,y=i.paragraph,S=void 0!==y&&y,P=i.variant,B=void 0===P?"body1":P,R=i.variantMapping,W=void 0===R?k:R,C=Object(n.a)(i,x),N=Object(r.a)({},i,{align:p,color:o,className:m,component:h,gutterBottom:v,noWrap:j,paragraph:S,variant:B,variantMapping:W}),T=h||(S?"p":W[B]||k[B])||"span",A=function(e){var a=e.align,t=e.gutterBottom,o=e.noWrap,n=e.paragraph,r=e.variant,i=e.classes,s={root:["root",r,"inherit"!==e.align&&"align".concat(Object(f.a)(a)),t&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return Object(c.a)(s,O,i)}(N);return Object(g.jsx)(M,Object(r.a)({as:T,ref:a,ownerState:N,className:Object(s.a)(A.root,m)},C))})),P=t(89),B=function(e){var a=Object(o.f)(),t={color:"black"},n=void 0!==e.repoLink&&null!==e.repoLink,r=void 0!==e.liveURL&&null!==e.liveURL,i=n||r;return Object(g.jsxs)(y,{elevation:3,className:"projectCard",style:{maxWidth:"30rem",margin:"1rem",padding:"1.5rem",borderRadius:10,display:"flex",justifyContent:"space-between",flexDirection:"column"},children:[Object(g.jsx)(S,{style:{fontWeight:"bold",marginBottom:"1rem",textAlign:"center"},variant:"h4",component:"h2",children:e.name}),Object(g.jsxs)(S,{style:{marginBottom:"0.3rem"},children:[Object(g.jsx)("b",{children:"Type:"}),"  ",e.type]}),Object(g.jsxs)(S,{style:{marginBottom:"0.3rem"},children:[Object(g.jsx)("b",{children:"Technologies Used:"}),"  ",e.technologies]}),i&&Object(g.jsxs)(S,{style:{marginBottom:"0.3rem"},children:[Object(g.jsx)("b",{children:"Links: "}),n&&Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.repoLink,style:t,children:"Source Code"}),r&&n&&Object(g.jsx)("span",{children:" | "}),r&&Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.liveURL,style:t,children:"Live Demonstration"})]}),Object(g.jsx)(S,{style:{marginTop:8},children:e.description}),Object(g.jsx)(P.a,{variant:"contained",style:{alignSelf:"center",marginTop:"1.5rem"},onClick:function(){return a("/projects/".concat(e.name.replace(/\s/g,"")))},children:"Learn More"})]})};a.default=function(){return Object(g.jsxs)("div",{className:"projectList",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:25},children:[Object(g.jsx)(S,{variant:"h2",component:"h2",style:{fontWeight:500,marginTop:25,marginBottom:25},children:"Projects"}),Object(g.jsx)("div",{className:"projects",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[{name:"Local Password Manager",type:"Desktop Application",technologies:"Python, MySQL",description:"Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",repoLink:"https://www.github.com/rizwanmustafa/localpassman"},{name:"Cloud Password Manager",type:"Web Application",technologies:"ReactJS, MaterialUI, Flask, Mongodb",description:"Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",repoLink:"https://www.github.com/rizwanmustafa/CloudPasswordManager"},{name:"Local Password Manager",type:"Desktop Application",technologies:"Python, MySQL",description:"Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",repoLink:"https://www.github.com/rizwanmustafa/localpassman"},{name:"Cloud Password Manager",type:"Web Application",technologies:"ReactJS, MaterialUI, Flask, Mongodb",description:"Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",repoLink:"https://www.github.com/rizwanmustafa/CloudPasswordManager"},{name:"Local Password Manager",type:"Desktop Application",technologies:"Python, MySQL",description:"Simple, opensource password manager that encrypts your passwords and stores them in a MySQL database",repoLink:"https://www.github.com/rizwanmustafa/localpassman"},{name:"Cloud Password Manager",type:"Web Application",technologies:"ReactJS, MaterialUI, Flask, Mongodb",description:"Simple, opensource password manager that encrypts your passwords and stores them in Mongodb database",repoLink:"https://www.github.com/rizwanmustafa/CloudPasswordManager"}].map((function(e,a){return Object(g.jsx)(B,{name:e.name,type:e.type,technologies:e.technologies,description:e.description,repoLink:e.repoLink},a)}))})]})}}}]);
//# sourceMappingURL=5.a8d86c5e.chunk.js.map