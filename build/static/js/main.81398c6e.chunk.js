(this["webpackJsonpexcercise2.6"]=this["webpackJsonpexcercise2.6"]||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),r=t(16),a=t.n(r),i=(t(7),t(3)),u=t(4),s=t.n(u),l="http://localhost:3001/api/persons",d=function(){return s.a.get(l)},j=function(e){return s.a.post(l,e)},f=function(e,n){return s.a.put("".concat(l,"/").concat(e),n)},b=function(e){return s.a.delete("".concat(l,"/").concat(e))},h=t(0),O=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},m=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},g=function(e){return Object(h.jsx)("button",{onClick:e.onClick,type:e.type,children:e.text})},v=function(e){return Object(h.jsx)("input",{value:e.value,onChange:e.onChange})},x=function(){var e=Object(c.useState)(null),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(null),a=Object(i.a)(r,2),u=a[0],s=a[1],l=Object(c.useState)([]),x=Object(i.a)(l,2),p=x[0],C=x[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),S=y[0],k=y[1],L=Object(c.useState)(""),D=Object(i.a)(L,2),N=D[0],P=D[1],T=Object(c.useState)(p),F=Object(i.a)(T,2),B=F[0],E=F[1],I=p.find((function(e){return e.name.toLowerCase()===S.toLowerCase()})),J=p.find((function(e){return e.number===N}));Object(c.useEffect)((function(){d().then((function(e){C(e.data),E(e.data)}))}),[]),console.log("render",p.length);var M=function(e){var n=p.find((function(n){return n.id===e}));window.confirm("Do you really want to delete? ".concat(n.name))&&b(e).then((function(n){console.log(n);var t=p.filter((function(n){return n.id!==e}));E(t),s(" person: ".concat(S," was deleted correctly")),setTimeout((function(){s(null)}),5e3)})).catch((function(e){o("person: ".concat(n.name," was already deleted")),setTimeout((function(){o(null)}),5e3)}))},A=function(e){var n=p.find((function(n){return n.id===e}));console.log(n);var t={name:n.name,number:N,id:n.id};f(e,t).then((function(e){E(p.map((function(t){return t.id!==n.id?t:e.data})))}))},U=function(e){var n=e.persons,t=e.deletePerson;return Object(h.jsxs)("li",{children:[" ",n.name," : ",n.number," ",Object(h.jsx)("button",{onClick:t,children:" X "})]})};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{message:t}),Object(h.jsx)(m,{message:u}),Object(h.jsx)("form",{children:Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["filter by name:"," ",Object(h.jsx)(v,{type:"text",onChange:function(e){return function(e){console.log(e.target.value);var n,t=e.target.value.toLowerCase();console.log(t);var c=p.map((function(e){return e.name.toLowerCase()}));console.log(c);var o=c.includes(t);console.log("INCLUDES",o),n=p.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t)})),E(n)}(e)}})]})})}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)(v,{value:S,onChange:function(e){console.log(e.target.value),k(e.target.value)}}),Object(h.jsxs)("p",{children:["number: ",Object(h.jsx)(v,{value:N,onChange:function(e){console.log(e.target.value),P(e.target.value)}})]})]}),Object(h.jsxs)("div",{children:["debug: ",S]}),Object(h.jsxs)("div",{children:["debug: ",N]}),Object(h.jsx)("div",{children:Object(h.jsx)(g,{onClick:function(e){e.preventDefault();var n={name:S,number:N,id:p.length+1};if(J&&I)window.alert("Both name and Number are already in your phonebook");else if(!J&&I){if(window.confirm("Maybe update number?")){var t=p.find((function(e){return e.name===S}));A(t.id),k(""),P("")}}else j(n).then((function(e){C(p.concat(e.data)),E(p.concat(e.data)),k(""),P(""),s(" person: ".concat(S," was added correctly")),setTimeout((function(){s(null)}),5e3)}))},type:"submit",text:"ADD"})}),Object(h.jsx)("h1",{children:" Numbers "})]}),Object(h.jsx)("ul",{children:B.map((function(e){return Object(h.jsx)(U,{persons:e,deletePerson:function(){return M(e.id)}},e.id)}))})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),p()},7:function(e,n,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.81398c6e.chunk.js.map