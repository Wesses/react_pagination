(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),r=a(1),l=(a(10),a(2)),s=a.n(l);function o(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var j=a(0),d=function(e){var c=e.total,a=e.perPage,t=e.currentItem,n=e.onPageChange,i=t+a-1>c?c:t+a-1;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){1!==t&&n(t-a)},children:"\xab"})}),o(1,Math.ceil(c/a)).map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:e===Math.ceil(i/a)}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){t!==1+a*(e-1)&&n(1+a*(e-1))}(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:i===c}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i===c,onClick:function(){i!==c&&n(t+a)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:o(t,i).map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},u=[3,5,10,20],m=function(){var e=Object(r.useState)(u[1]),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],m=s+a-1;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(m/a," (items ").concat(s," - ").concat(m>42?42:m," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:u[1],children:u.map((function(e){return Object(j.jsx)("option",{value:e,onClick:function(){t(e),o(1)},children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:a,currentItem:s,onPageChange:function(e){return o(e)}})]})};n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2bccec76.chunk.js.map