(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(7),r=a.n(c),i=(a(14),a(9)),l=a(2),d=a(3),j=a(5),o=a(4),b=a(0),u=function(){return Object(b.jsx)("thead",{className:"table_head",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Case"}),Object(b.jsx)("th",{children:"Deadline"}),Object(b.jsx)("th",{children:"Remove"})]})})},h=function(e){var t=e.caseData,a=e.removeCase,n=t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.nameCase}),Object(b.jsx)("td",{children:e.deadline}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return a(t)},className:"btn_remove",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},t)}));return Object(b.jsxs)("tbody",{children:[" ",n," "]})},m=function(e){var t=e.caseData,a=e.removeCase;return Object(b.jsxs)("table",{className:"tbl",children:[Object(b.jsx)(u,{}),Object(b.jsx)(h,{caseData:t,removeCase:a})]})},O=a(8),f=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).formSubmitHandler=function(e){e.preventDefault();var t=n.state,a=t.nameCase,s=t.deadline;/[\w\u0430-\u044f]{3}/i.test(a)&&/[\w\u0430-\u044f]{3}/i.test(s)&&(n.props.formHandler(n.state),n.setState(n.initialState))},n.changeHandle=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(O.a)({},a,s))},n.initialState={nameCase:"",deadline:""},n.state=n.initialState,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nameCase,a=e.deadline;return Object(b.jsxs)("form",{onSubmit:this.formSubmitHandler,className:"form_class",children:[Object(b.jsx)("label",{htmlFor:"case",children:"Case"}),Object(b.jsx)("input",{id:"case",type:"text",name:"nameCase",value:t,onChange:this.changeHandle}),Object(b.jsx)("label",{htmlFor:"case",children:"Deadline"}),Object(b.jsx)("input",{id:"deadline",type:"text",name:"deadline",value:a,onChange:this.changeHandle}),Object(b.jsx)("button",{type:"submit",className:"btn_submit",children:"SUBMIT CASE"})]})}}]),a}(n.Component),v=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={cases:[{nameCase:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431",deadline:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f"},{nameCase:"\u041f\u043e\u0433\u0443\u043b\u044f\u0442\u044c \u0441 \u041b\u0451\u0432\u043e\u0439",deadline:"\u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c"}]},e.removeCase=function(t){var a=e.state.cases;e.setState({cases:a.filter((function(e,a){return a!==t}))})},e.formHandler=function(t){var a=e.state.cases;e.setState({cases:[].concat(Object(i.a)(a),[t])})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.cases;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(b.jsx)(m,{caseData:e,removeCase:this.removeCase}),Object(b.jsx)(f,{formHandler:this.formHandler})]})}}]),a}(n.Component);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cabcebc0.chunk.js.map