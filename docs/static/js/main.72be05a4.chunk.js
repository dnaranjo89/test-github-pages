(this["webpackJsonpmy-todo-list"]=this["webpackJsonpmy-todo-list"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(11),i=c.n(a),r=(c(16),c(17),c(18),c(19),c(10)),j=c(4),l=c(7),o=c(0);function d(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"rights",children:[Object(o.jsxs)("p",{children:[" created by \xa9 ",Object(o.jsx)("a",{href:"https://react-icons.github.io/react-icons/",children:"Rana Ahmed"})]}),Object(o.jsxs)("div",{className:"social-media",children:[Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"https://github.com/rana3399/Personal-To-Do-App-React/tree/master",children:[" ",Object(o.jsx)(l.a,{size:32})," "]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/rana-ahmed-rana/",children:[Object(o.jsx)(l.b,{size:32})," "]})})]})]})})}var b=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(function(){var e=localStorage.getItem("inputKey");return e?JSON.parse(e):[]}()),i=Object(j.a)(a,2),l=i[0],b=i[1],m=Object(s.useState)(""),h=Object(j.a)(m,2),O=(h[0],h[1]);Object(s.useEffect)((function(){return localStorage.setItem("inputKey",JSON.stringify(l))}),[l]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"main-header-container",children:Object(o.jsx)("h3",{className:"app-main-header",children:"My Todo List"})}),Object(o.jsx)("div",{className:"main-container",children:Object(o.jsxs)("div",{className:"child-container",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{className:"todo-img",src:"../img/todo-app-img.jpg",alt:"todo-app"}),Object(o.jsx)("figcaption",{children:"Add your list here \u270c "}),Object(o.jsx)("input",{onKeyPress:function(e){if("Enter"===e.key){var t={id:1e3*Math.random(),name:c};b([].concat(Object(r.a)(l),[t])),n("")}},className:"input-field",type:"text",placeholder:" \u270d Write your list",onChange:function(e){n(e.target.value)},value:c})]}),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsxs)("button",{className:"add-btn",onClick:function(){if(c){var e={id:1e3*Math.random(),name:c};b([].concat(Object(r.a)(l),[e])),n("")}else alert("Please write something")},children:["Add more items ",Object(o.jsx)("i",{className:"fas fa-plus"})]}),Object(o.jsxs)("button",{className:"delete-btn",onClick:function(){return l.length>=1?b([]):alert("Nothing to delete!")},children:["Delete All ",Object(o.jsx)("i",{class:"fas fa-minus-circle"})]})]}),Object(o.jsx)("div",{className:"added-items-list",children:l.map((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"items",children:[Object(o.jsxs)("p",{className:"todo-item",children:[e.name," "]}),Object(o.jsxs)("div",{className:"icon-container",children:[Object(o.jsx)("span",{className:"edit-icon",children:Object(o.jsx)("i",{onClick:function(){return function(e){var t=l.find((function(t){return t.id===e}));n(t.name),O(e)}(e.id)},className:"far fa-edit"})}),Object(o.jsxs)("span",{className:"delete-icon",children:[Object(o.jsx)("i",{onClick:function(){return function(e){var t=l.filter((function(t){return t.id!==e}));b(t)}(e.id)},className:"fas fa-trash-alt"})," "]})]})]},e.id)})}))})]})}),Object(o.jsx)(d,{})]})},m=c(8);var h=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"This is Home / Log in page "}),Object(o.jsx)(m.b,{to:"/todo",children:" Click here to go to Todo-List page. "}),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("p",{className:"sign",align:"center",children:"Sign in"}),Object(o.jsx)("form",{className:"form1"}),Object(o.jsx)("input",{className:"un ",type:"text",align:"center",placeholder:"Username"}),Object(o.jsx)("input",{className:"pass",type:"password",align:"center",placeholder:"Password"}),Object(o.jsx)("div",{className:"submit-container-box",children:Object(o.jsx)("a",{className:"submit",align:"center",children:"Sign in"})}),Object(o.jsxs)("p",{className:"forgot",align:"center",children:[" ",Object(o.jsx)("a",{href:"#"}),"Forgot Password?"]})]})]}),Object(o.jsx)(d,{})]})},O=c(2);var u=function(){return Object(o.jsx)(m.a,{basename:"/my-todo-list",children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/",element:Object(o.jsx)(h,{})}),Object(o.jsx)(O.a,{path:"/todo",element:Object(o.jsx)(b,{})})]})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.72be05a4.chunk.js.map