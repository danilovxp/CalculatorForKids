(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),u=(n(18),n(20)),i=(n(10),n(12)),s=n(1),o=n(21),m=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],l=n[1],u=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement(o.a,{size:"lg",variant:"".concat(c?"warning":"outline-warning"),onClick:function(){l(!c),c?e.onDelete(e.sign):e.onAdd(e.sign)},ref:u},e.sign))},d=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),c=Object(s.a)(n,2),l=c[0],u=c[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),m=o[0],d=o[1],f=["Correct","Incorrect"];return r.a.createElement("div",null,r.a.createElement("span",null,"".concat(e.exercise.leftOperand," ").concat(e.exercise.action," ").concat(e.exercise.rightOperand)),r.a.createElement("span",null," = "),r.a.createElement("input",{type:"number",ref:t,disabled:m}),r.a.createElement("button",{onClick:function(){var n;d(!0),n="+"===e.exercise.action?e.exercise.leftOperand+e.exercise.rightOperand:"-"===e.exercise.action?e.exercise.leftOperand-e.exercise.rightOperand:"*"===e.exercise.action?e.exercise.leftOperand*e.exercise.rightOperand:e.exercise.leftOperand/e.exercise.rightOperand,+t.current.value===n?(u(f[0]),e.onCorrect()):(u(f[1]),e.onError())},disabled:m},"Answer"),r.a.createElement("span",null,l))},f=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(0),i=Object(s.a)(u,2),o=i[0],m=i[1],f=function(){l(c+1)},p=function(){m(o+1)};return r.a.createElement("div",null,r.a.createElement("div",null,e.exercises.length?e.exercises.map((function(e,t){return r.a.createElement(d,{key:t,exercise:e,onError:p,onCorrect:f})})):"No exercises yet"),e.exercises.length>0&&r.a.createElement("p",null,"Correct:  ".concat(c)),e.exercises.length>0&&r.a.createElement("p",null,"Incorrect: ".concat(o)),e.exercises.length>0&&e.exercises.length===o+c&&r.a.createElement("div",null,r.a.createElement("p",null,c>o?"You win":"You lose"),r.a.createElement("button",{onClick:e.onReset},"Reset")))},p=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useState)([]),l=Object(s.a)(c,2),o=l[0],d=l[1],p=Object(a.useState)([]),b=Object(s.a)(p,2),E=b[0],O=b[1],h=Object(a.useState)(!1),v=Object(s.a)(h,2),g=v[0],x=v[1],j=Object(a.useState)(!0),C=Object(s.a)(j,2),S=C[0],w=C[1],k=function(e){d([].concat(Object(i.a)(o),[e]))},y=function(e){d(o.filter((function(t){return t!==e})))},R=function(){x(n.current.value.length>0&&e.current.value.length>0&&t.current.value.length>0)};return r.a.createElement(u.a,null,S?r.a.createElement("div",null,r.a.createElement("div",{className:"action-wrapper"},["+","-","*","/"].map((function(e,t){return r.a.createElement(m,{key:t,sign:e,onDelete:y,onAdd:k})}))),r.a.createElement("div",{className:"input-form"},r.a.createElement("span",null,"Choose a number from")," ",r.a.createElement("input",{type:"number",ref:e,onChange:R}),r.a.createElement("span",null,"to"),r.a.createElement("input",{type:"number",ref:t,onChange:R})),r.a.createElement("div",{className:"exercises-number-field"},r.a.createElement("span",null,"Choose a number of exercises:"),r.a.createElement("input",{type:"number",ref:n,onChange:R})),r.a.createElement("div",{className:"btn-generate"},r.a.createElement("button",{onClick:function(){for(var a=+e.current.value,r=+t.current.value,c=+n.current.value,l=[],u=0;u<c;u++){var i=o[Math.floor(Math.random()*o.length)],s=Math.round(Math.random()*(r-a)+a),m=Math.round(Math.random()*(r-a)+a);if(s<m){var f=[m,s];s=f[0],m=f[1]}l.push({action:i,leftOperand:s,rightOperand:m})}!function(e){O(e)}(l),e.current.value="",t.current.value="",n.current.value="",d([]),w(!1)},disabled:0===o.length||!g},"Generate"))):r.a.createElement("div",{className:"exercises-wrapper"},r.a.createElement(f,{exercises:E,onReset:function(){w(!0)}})))},b=function(){return r.a.createElement(u.a,{className:"main-wrapper"},r.a.createElement(p,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d5e26a6b.chunk.js.map