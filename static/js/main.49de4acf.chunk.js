(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{12:function(e,c,t){e.exports={footer:"footer_footer__3cypa",body:"footer_body___O8x2",column:"footer_column__1PGoL",link:"footer_link__dc6X9"}},13:function(e,c,t){e.exports={list:"currencyList_list__1PwZo",card:"currencyList_card__1_v5A",currency:"currencyList_currency__2_ejR",name:"currencyList_name__396d4",baseCurrency:"currencyList_baseCurrency__2O0jb",allCurrency:"currencyList_allCurrency__1fV5p"}},21:function(e,c,t){e.exports={cardsWrap:"convert_cardsWrap__Pjto7",card:"convert_card__2eY1y",input:"convert_input__2bb8v",clear:"convert_clear__NPSeI"}},24:function(e,c,t){e.exports={form:"search_form__1Rrky",input:"search_input__1EqOU",button:"search_button__2ZJOD"}},25:function(e,c,t){e.exports={header:"header_header__1uQbk",inner:"header_inner__2EfIx",logo:"header_logo__2ehPa",baseCurrencyWrap:"header_baseCurrencyWrap__t5jtl"}},26:function(e,c,t){e.exports={body:"select_body__2U7ti",baseCurrency:"select_baseCurrency__3Ees8",list:"select_list__3GM4f",item:"select_item__wbDEt"}},34:function(e,c,t){e.exports={ldsRoller:"loading_ldsRoller__1mhMw",body:"loading_body__2pjPO"}},35:function(e,c,t){e.exports={body:"main_body__2oguR",currencyList:"main_currencyList__3yBku"}},48:function(e,c,t){e.exports={body:"alert_body__1eNOb",alert:"alert_alert__2QPdc"}},64:function(e,c,t){},65:function(e,c,t){},91:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),r=t(28),s=t.n(r),i=t(5),o=t(53),u=(t(64),t(65),t(15)),l=t.n(u),j=t(23),d=t(6),b=t(31),O=t.n(b),h="382d555418b3e5f66981fc03",m="https://v6.exchangerate-api.com/v6",f=function(e){return O.a.get("".concat(m,"/").concat(h,"/latest/").concat(e)).then((function(e){return e.data}))},p=function(){return O.a.get("".concat(m,"/").concat(h,"/codes")).then((function(e){return e.data.supported_codes}))},_=function(e,c){return O.a.get("".concat(m,"/").concat(h,"/pair/").concat(e,"/").concat(c)).then((function(e){return e.data}))},x="SET_LATEST",y="SET_SEARCH_RESULT",v="SET_CONVERSION_RESULT",N="SET_CODES",C={latest:{conversion_rates:{}},conversionResult:{},searchResult:[],codes:[]},g=function(e){return{type:y,payload:e}},k=function(){return function(){var e=Object(j.a)(l.a.mark((function e(c,t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(),a=n.app.baseCurrency,f(a).then((function(e){c({type:x,payload:e})}));case 3:case"end":return e.stop()}}),e)})));return function(c,t){return e.apply(this,arguments)}}()},S=function(e,c){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(e,c).then((function(e){n({type:v,payload:e})}));case 1:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case x:return Object(d.a)(Object(d.a)({},e),{},{latest:c.payload});case y:return Object(d.a)(Object(d.a)({},e),{},{searchResult:c.payload});case v:return Object(d.a)(Object(d.a)({},e),{},{conversionResult:c.payload});case N:return Object(d.a)(Object(d.a)({},e),{},{codes:c.payload});default:return e}},w="SET_INITIALIZED",R="SET_BASE_CURRENCY",I={initialized:!1,baseCurrency:"USD"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case w:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});case R:return Object(d.a)(Object(d.a)({},e),{},{baseCurrency:c.payload});default:return e}},P=t(34),T=t.n(P),U=t(1),A=function(){return Object(U.jsx)("div",{className:T.a.body,children:Object(U.jsxs)("div",{className:T.a.ldsRoller,children:[Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{}),Object(U.jsx)("div",{})]})})},B=a.a.memo(A),F=t(25),q=t.n(F),z=t(19),D=t(26),W=t.n(D),G=function(e){var c=Object(n.useState)(!1),t=Object(z.a)(c,2),a=t[0],r=t[1],s=Object(i.c)((function(e){return e.data.codes}));return Object(U.jsxs)("div",{className:W.a.body,children:[Object(U.jsx)("div",{onClick:function(){r(a=!a)},className:W.a.baseCurrency,children:e.initialCurrency}),a&&Object(U.jsx)("div",{className:W.a.list,children:s.map((function(c){return Object(U.jsx)("div",{className:W.a.item,onClick:function(){e.onItemClick(c[0]),r(!1)},children:c[0]})}))})]})},M=a.a.memo(G),J=function(){var e=Object(i.b)(),c=Object(i.c)((function(e){return e.app.baseCurrency}));return Object(U.jsx)("header",{className:q.a.header,children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:q.a.inner,children:[Object(U.jsx)("div",{className:q.a.logo,children:"currency converter"}),Object(U.jsxs)("div",{className:q.a.baseCurrencyWrap,children:[Object(U.jsx)("span",{children:"Base currency"}),Object(U.jsx)(M,{onItemClick:function(c){e({type:R,payload:c}),e(k())},initialCurrency:c})]})]})})})},V=a.a.memo(J),Z=t(12),H=t.n(Z),Q=function(){return Object(U.jsx)("div",{className:H.a.footer,children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:H.a.body,children:[Object(U.jsxs)("div",{className:[H.a.techInfo,H.a.column].join(""),children:[Object(U.jsx)("p",{children:"Main"}),Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"https://github.com/z-a-h-a-r/currencyConverter",className:H.a.link,target:"_blank",children:"Project Code"})}),Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"https://github.com/z-a-h-a-r",className:H.a.link,target:"_blank",children:"My GitHub"})})]})]}),Object(U.jsxs)("div",{className:[H.a.apis,H.a.column].join(""),children:[Object(U.jsx)("p",{children:"API"}),Object(U.jsx)("ul",{children:Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"https://www.exchangerate-api.com/",className:H.a.link,target:"_blank",children:"exchangerate API"})})})]}),Object(U.jsxs)("div",{className:[H.a.contacs,H.a.column].join(""),children:[Object(U.jsx)("p",{children:"Contacs"}),Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{children:"usfuld@gmail.com"}),Object(U.jsx)("li",{children:Object(U.jsx)("a",{target:"_blank",href:"https://t.me/z_a_h_a_r_74/",className:H.a.link,children:"telegram"})})]})]})]})})})},Y=a.a.memo(Q),X=t(35),K=t.n(X),$=t(13),ee=t.n($),ce=t(48),te=t.n(ce),ne=function(e){return Object(U.jsx)("div",{className:te.a.body,children:e.content})},ae=a.a.memo(ne),re=t(20),se=t(24),ie=t.n(se),oe=t(54),ue=t.p+"static/media/search.3370a178.svg",le=function(e){return Object(U.jsx)(oe.a,{initialValues:{query:""},validate:function(e){return{}},onSubmit:function(c,t){var n=t.setSubmitting;e.callback(c),n(!1)},children:function(c){var t,n,a=c.values,r=(c.errors,c.touched,c.handleChange),s=c.handleBlur,i=c.handleSubmit,o=c.isSubmitting;return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("form",{onSubmit:i,className:ie.a.form,children:[Object(U.jsx)("input",(t={className:ie.a.input,type:"text",name:"query",onChange:r,onBlur:s,value:a.email,placeholder:"Search currency"},Object(re.a)(t,"className",ie.a.input),Object(re.a)(t,"autocomplete","off"),t)),Object(U.jsx)("button",(n={disabled:o||e.isNotFound,className:ie.a.button,type:"submit"},Object(re.a)(n,"className",ie.a.button),Object(re.a)(n,"children",Object(U.jsx)("img",{src:ue,alt:""})),n))]})})}})},je=a.a.memo(le),de=function(e){var c=Object(i.b)(),t=Object(n.useState)(!1),a=Object(z.a)(t,2),r=a[0],s=a[1],o=Object(i.c)((function(e){return e.data.latest.conversion_rates})),u=Object(i.c)((function(e){return e.data.searchResult})),l=Object(i.c)((function(e){return e.app.baseCurrency}));return r&&setTimeout((function(){s(!1)}),3e3),Object(U.jsxs)(U.Fragment,{children:[r&&Object(U.jsx)(ae,{content:"currency not found"}),Object(U.jsx)(je,{isNotFound:r,callback:function(e){var t=[];Object.keys(o).forEach((function(c){0!==e.query.length&&c.includes(e.query.toUpperCase())&&t.push({name:c,currency:o[c]})})),0!==e.query.length&&0===t.length&&s(!0),c(g(t))}}),Object(U.jsxs)("div",{className:ee.a.baseCurrency,children:["1 ",l," ="]}),0!==u.length?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("div",{className:ee.a.list,children:u.map((function(e){return Object(U.jsxs)("div",{className:ee.a.card,children:[Object(U.jsx)("span",{className:ee.a.name,children:e.name}),Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{className:ee.a.name,children:e.currency}),Object(U.jsx)("span",{className:ee.a.currency,children:e.name})]})]},e.name)}))}),Object(U.jsx)("button",{className:ee.a.allCurrency,onClick:function(){c(g([]))},children:"all currency"})]}):Object(U.jsx)("div",{className:ee.a.list,children:Object.keys(o).map((function(e){return Object(U.jsxs)("div",{className:ee.a.card,children:[Object(U.jsx)("span",{className:ee.a.name,children:e}),Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{className:ee.a.name,children:o[e].toFixed(4)}),Object(U.jsx)("span",{className:ee.a.currency,children:e})]})]},e)}))})]})},be=a.a.memo(de),Oe=t(21),he=t.n(Oe),me=t(51),fe=t(3),pe=function(){var e=Object(i.b)(),c=Object(fe.d)(),t=Object(n.useState)("USD"),a=Object(z.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)("GBP"),u=Object(z.a)(o,2),l=u[0],j=u[1],d=Object(n.useState)(1),b=Object(z.a)(d,2),O=b[0],h=b[1],m=me.parse(c.location.search.substr(1)),f=Object(i.c)((function(e){return e.data.conversionResult.conversion_rate}));Object(n.useEffect)((function(){var c=m.fromCount,t=m.firstCurrency,n=m.secondCurrency;t&&s(r=t),n&&j(l=n),n&&h(O=c),e(S(r,l))}),[]);var p,_=function(){c.push({pathname:"/",search:"firstCurrency=".concat(r,"&secondCurrency=").concat(l,"&fromCount=").concat(O)})};return Object(U.jsxs)("div",{className:he.a.cardsWrap,children:[Object(U.jsxs)("div",{className:he.a.card,children:[Object(U.jsx)(M,{onItemClick:function(c){s(r=c),e(S(r,l)),_()},initialCurrency:r}),Object(U.jsx)("input",{type:"number",className:he.a.input,onChange:function(e){h(O=Number(e.target.value)),_()},value:0===O?"":O}),Object(U.jsx)("div",{onClick:function(){h(O="")},className:he.a.clear,children:"clear"})]}),Object(U.jsxs)("div",{className:he.a.card,children:[Object(U.jsx)(M,{onItemClick:function(c){j(l=c),e(S(r,l)),_()},initialCurrency:l}),Object(U.jsx)("input",{type:"text",value:(p=f*O,(p.toString().includes(".")?p.toString().split(".").pop().length:0)<4?f*O:(f*O).toFixed(4)),className:he.a.input})]})]})},_e=a.a.memo(pe),xe=function(e){return Object(U.jsxs)("section",{className:K.a.body,children:[Object(U.jsx)(_e,{}),Object(U.jsx)("div",{className:K.a.currencyList,children:Object(U.jsx)(be,{})})]})},ye=a.a.memo(xe),ve=function(e){var c=Object(i.b)(),t=Object(i.c)((function(e){return e.app.initialized}));return Object(n.useEffect)((function(){c(function(){var e=Object(j.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new Promise((function(e,t){e(c(k()))})).then((function(){return new Promise((function(e,t){e(c(function(){var e=Object(j.a)(l.a.mark((function e(c,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p().then((function(e){c({type:N,payload:e})}));case 1:case"end":return e.stop()}}),e)})));return function(c,t){return e.apply(this,arguments)}}()))}))})).then((function(){return new Promise((function(e,t){var n;e(c({type:w,payload:n}))}))}));case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}())}),[]),t?Object(U.jsxs)("div",{className:"body",children:[Object(U.jsx)(V,{}),Object(U.jsx)("div",{className:"container",children:Object(U.jsx)(ye,{})}),Object(U.jsx)(Y,{})]}):Object(U.jsx)(B,{})},Ne=a.a.memo(ve),Ce=t(27),ge=t(52),ke=Object(Ce.b)({app:L,data:E}),Se=Object(Ce.d)(ke,Object(Ce.c)(Object(Ce.a)(ge.a)));s.a.render(Object(U.jsx)(i.a,{store:Se,children:Object(U.jsx)(o.a,{children:Object(U.jsx)(Ne,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.49de4acf.chunk.js.map