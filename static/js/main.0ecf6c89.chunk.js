(this["webpackJsonpuek-the-game"]=this["webpackJsonpuek-the-game"]||[]).push([[0],{297:function(n,e){},299:function(n,e){},310:function(n,e){},312:function(n,e){},339:function(n,e){},341:function(n,e){},342:function(n,e){},347:function(n,e){},349:function(n,e){},368:function(n,e){},380:function(n,e){},383:function(n,e){},389:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),c=t.n(o),i=t(66),a=t.n(i),u=t(7),s=t(11);function l(){var n=Object(s.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Roboto', sans-serif;\n        background-color: ",";\n        margin: 0;\n    }\n"]);return l=function(){return n},n}var d=Object(u.b)(l(),(function(n){return n.theme.color.concrete})),b=t(70),j=t(5),x=t(53);function f(){var n=Object(s.a)(["\n    background-color: ",";\n    color: ",";\n    border-radius: 65px;\n    font-size: 30px;\n    font-weight: bold;\n    padding: 20px 45px;\n    border: none;\n    margin-top: 40px;\n    transition: opacity 1s, transform 0.5s;\n\n    &:hover{\n        opacity: 0.7;\n        transform: scale(1.1);\n    }\n"]);return f=function(){return n},n}function h(){var n=Object(s.a)(["\n    color: ",";\n    font-size: 64px;\n    font-weight: bold;\n    margin: 10px 10px 30px 10px;\n"]);return h=function(){return n},n}function m(){var n=Object(s.a)(["\n    width: 800px;\n    margin: 150px auto 200px;\n    background-color: ",";\n    text-align: center;\n    padding: 30px;\n    box-shadow: 0 0 20px ",";\n    font-size: 24px;\n    color: ",";\n"]);return m=function(){return n},n}var p=u.c.div(m(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.mercury}),(function(n){return n.theme.color.mineshaft})),O=u.c.p(h(),(function(n){return n.theme.color.green})),g=u.c.button(f(),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.white})),w=t(105),v=t(34),y=t(187);function k(){var n=Object(s.a)(["\n    font-size: 12px;\n    color: red;\n    grid-column: 2;\n    justify-self: start;\n    padding-left: 20px;\n"]);return k=function(){return n},n}function z(){var n=Object(s.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n    border-radius: 25px;\n    background-color: ",";\n    height: 37px;\n    justify-self: start;\n"]);return z=function(){return n},n}function q(){var n=Object(s.a)(["\n    margin: 15px;\n    justify-self: end;\n"]);return q=function(){return n},n}function N(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n"]);return N=function(){return n},n}var R=u.c.div(N()),E=u.c.label(q()),F=u.c.input(z(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.mercury})),S=u.c.span(k()),M=function(n){var e=n.label,t=Object(y.a)(n,["label"]),o=Object(x.c)(t),c=Object(v.a)(o,2),i=c[0],a=c[1];return Object(r.jsxs)(R,{children:[Object(r.jsx)(E,{htmlFor:t.id||t.name,children:e}),Object(r.jsx)(F,Object(w.a)(Object(w.a)({},i),t)),a.touched&&a.error?Object(r.jsx)(S,{children:a.error}):null]})},C=t(35),I={firstName:"",lastName:"",email:"",nickname:"",password:""},J=C.a({firstName:C.b().max(15,"Must be 15 characters or less").required("Required"),lastName:C.b().max(20,"Must be 20 characters or less").required("Required"),email:C.b().email("Invalid email address").required("Required"),nickname:C.b().max(20,"Must be 20 characters or less").required("Required"),password:C.b().min(8,"Must be more than 8 characters").required("Required")}),Z=function(n,e){var r=e.setSubmitting;n.password&&(n.password=t(292).generate(n.password)),setTimeout((function(){alert(JSON.stringify(n,null,2)),r(!1)}),400)},B=function(n){return Object(r.jsxs)(p,{children:[Object(r.jsx)(O,{children:n.title}),Object(r.jsx)(x.b,{initialValues:I,validationSchema:J,onSubmit:Z,children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(M,{label:"Nazwa u\u017cytkownika: ",name:"nickname",type:"text",placeholder:"np. robszy"}),Object(r.jsx)(M,{label:"Has\u0142o: ",name:"password",type:"password",placeholder:"xxxxxxxxx"}),"Rejestracja"===n.title?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{label:"Imi\u0119: ",name:"firstName",type:"text",placeholder:"np. Robert"}),Object(r.jsx)(M,{label:"Nazwisko: ",name:"lastName",type:"text",placeholder:"np. Szyd\u0142o"}),Object(r.jsx)(M,{label:"E-mail: ",name:"email",type:"text",placeholder:"np. xxxxxx@gmail.com"})]}):"",Object(r.jsx)(g,{children:"Zatwierd\u017a"})]})})]})};function W(){var n=Object(s.a)(["\n    background-color: ",";\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n"]);return W=function(){return n},n}function H(){var n=Object(s.a)(["\n    list-style: none;\n    font-size: 24px;\n    font-weight: bold;\n    margin: 20px;\n"]);return H=function(){return n},n}function L(){var n=Object(s.a)(["\n    text-decoration: none;\n    color: ",";\n    padding: 15px;\n    border: 2px solid ",";\n    border-radius: 45px;\n\n    &:hover {\n        border: 2px solid ",";\n    }\n\n    &."," {\n        background-color: ",";\n        color: ",";\n    }\n"]);return L=function(){return n},n}var T="active",V=Object(u.c)(b.b).attrs((function(){return{activeClassName:T}}))(L(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.white}),T,(function(n){return n.theme.color.white}),(function(n){return n.theme.color.green})),$=u.c.li(H()),A=u.c.ul(W(),(function(n){return n.theme.color.green})),D=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)(A,{children:[Object(r.jsx)($,{children:Object(r.jsx)(V,{to:"/signin",children:"Zaloguj si\u0119"})}),Object(r.jsx)($,{children:Object(r.jsx)(V,{to:"/signup",children:"Zarejestruj si\u0119"})})]})})};var G=function(){return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(D,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/signin",children:Object(r.jsx)(B,{title:"Logowanie"})}),Object(r.jsx)(j.a,{path:"/signup",children:Object(r.jsx)(B,{title:"Rejestracja"})})]})]})},K=t(186),P=Object(K.a)({reducer:{}}),Q=t(185);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Q.a,{store:P,children:Object(r.jsxs)(u.a,{theme:{color:{green:"#3F733E",concrete:"#F3F1F1",white:"white",mercury:"#E8E8E8",mineshaft:"#2E2C2C"}},children:[Object(r.jsx)(d,{}),Object(r.jsx)(G,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[389,1,2]]]);
//# sourceMappingURL=main.0ecf6c89.chunk.js.map