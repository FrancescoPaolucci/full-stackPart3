(this["webpackJsonpexcercise2.6"]=this["webpackJsonpexcercise2.6"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(16),a=n.n(r),s=(n(7),n(3)),u=n(4),i=n.n(u),l="/api/notes",j=function(){return i.a.get(l)},d=function(e){return i.a.post(l,e)},b=function(e){return i.a.delete("".concat(l,"/").concat(e))},f=n(0),O=function(e){var t=e.message;return null===t?null:Object(f.jsx)("div",{className:"error",children:t})},h=function(e){var t=e.message;return null===t?null:Object(f.jsx)("div",{className:"notification",children:t})},g=function(e){return Object(f.jsx)("button",{onClick:e.onClick,type:e.type,children:e.text})},x=function(e){return Object(f.jsx)("input",{value:e.value,onChange:e.onChange})},v=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(null),a=Object(s.a)(r,2),u=a[0],i=a[1],l=Object(c.useState)([]),v=Object(s.a)(l,2),m=v[0],p=v[1],C=Object(c.useState)(""),w=Object(s.a)(C,2),y=w[0],S=w[1],k=Object(c.useState)(""),D=Object(s.a)(k,2),L=D[0],E=D[1],T=Object(c.useState)(m),N=Object(s.a)(T,2),P=N[0],A=N[1],F=m.some((function(e){return e.name===y}));Object(c.useEffect)((function(){j().then((function(e){p(e.data),A(e.data)}))}),[]),console.log("render",m.length);var I=function(e){"http://localhost:3001/persons/".concat(e);var t=m.find((function(t){return t.id===e}));window.confirm("Do you really want to delete? ".concat(t.name))&&b(e).then((function(t){console.log(t);var n=m.filter((function(t){return t.id!==e}));A(n),i(" person: ".concat(y," was deleted correctly")),setTimeout((function(){i(null)}),5e3)})).catch((function(e){o("person: ".concat(t.name," was already deleted")),setTimeout((function(){o(null)}),5e3)}))},B=function(e){var t=e.persons,n=e.deletePerson;return Object(f.jsxs)("li",{children:[" ",t.name," : ",t.number," ",Object(f.jsx)("button",{onClick:n,children:" X "})]})};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(O,{message:n}),Object(f.jsx)(h,{message:u}),Object(f.jsx)("form",{children:Object(f.jsx)("div",{children:Object(f.jsxs)("p",{children:["filter by name:"," ",Object(f.jsx)(x,{type:"text",onChange:function(e){return function(e){console.log(e.target.value);var t,n=e.target.value.toLowerCase();console.log(n);var c=m.map((function(e){return e.name.toLowerCase()}));console.log(c);var o=c.includes(n);console.log("INCLUDES",o),t=m.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n)})),A(t)}(e)}})]})})}),Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)(x,{value:y,onChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(f.jsxs)("p",{children:["number: ",Object(f.jsx)(x,{value:L,onChange:function(e){console.log(e.target.value),E(e.target.value)}})]})]}),Object(f.jsxs)("div",{children:["debug: ",y]}),Object(f.jsxs)("div",{children:["debug: ",L]}),Object(f.jsx)("div",{children:Object(f.jsx)(g,{onClick:function(e){e.preventDefault();var t={name:y,number:L,id:m.length+1};F?window.alert("NAME ALREADY EXIST"):d(t).then((function(e){p(m.concat(e.data)),A(m.concat(e.data)),S(""),E(""),i(" person: ".concat(y," was added correctly")),setTimeout((function(){i(null)}),5e3)}))},type:"submit",text:"ADD"})}),Object(f.jsx)("h1",{children:" Numbers "})]}),Object(f.jsx)("ul",{children:P.map((function(e){return Object(f.jsx)(B,{persons:e,deletePerson:function(){return I(e.id)}},e.id)}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),m()},7:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.b60cc543.chunk.js.map