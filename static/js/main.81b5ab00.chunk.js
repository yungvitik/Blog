(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(9),i=n.n(o),a=n(5),r=(n(15),n(3)),l=n(2),u=n(8),j=n.n(u),d=n(10),b="https://bloggy-api.herokuapp.com",m=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},t.abrupt("return",fetch("".concat(b).concat(e),n).then((function(t){return t.json()})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){return m("/posts")},O=function(t){return m("/posts/".concat(t))},f=(n(17),n(0)),p=function(t){var e=t.posts,n=t.setDetailsPostId,c=t.removePost;return Object(f.jsxs)("div",{className:"PostsList",children:[Object(f.jsx)("h2",{children:"Posts:"}),Object(f.jsx)("ul",{className:"PostsList__list",children:e.length>0?Object(f.jsx)(f.Fragment,{children:e.map((function(t){return Object(f.jsxs)("li",{className:"PostsList__item",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("strong",{children:"[Post #".concat(t.id,"]: ")}),t.title]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return c(t.id)},children:"X"}),Object(f.jsx)(a.b,{to:"/Blog/details",children:Object(f.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(t.id)},children:"Open"})})]})]},t.id)}))}):"No posts"})]})},x=function(t){return m("/comments?postId=".concat(t))},v=(n(19),function(t){var e=t.postId,n=t.onAddComments,s=Object(c.useState)(""),o=Object(r.a)(s,2),i=o[0],a=o[1];return Object(f.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n({body:i,postId:e}),a("")},children:[Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:i,onChange:function(t){return a(t.target.value)}})}),Object(f.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),N=(n(20),n(21),function(t){var e=t.editPostId,n=t.editPost,s=Object(c.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(c.useState)(""),j=Object(r.a)(u,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){O(e).then((function(t){l(t.title||""),b(t.body||"")}))}),[e]),Object(f.jsxs)("form",{className:"NewForm",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"title",placeholder:"Type post title",className:"NewForm__input",value:i,onChange:function(t){return l(t.target.value)}})}),Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"body",placeholder:"",className:"NewForm__input",value:d,onChange:function(t){return b(t.target.value)}})})]}),Object(f.jsx)("button",{type:"button",className:"NewForm__submit-button button",onClick:function(){n(i,d)},children:"Save changes"}),Object(f.jsx)(a.b,{to:"/Blog/details",children:Object(f.jsx)("button",{type:"button",className:"NewForm__submit-button button",children:"Close editor"})})]})}),_=function(t){var e=t.detailsPostId,n=Object(c.useState)([]),s=Object(r.a)(n,2),o=s[0],i=s[1],u=Object(c.useState)(null),j=Object(r.a)(u,2),d=j[0],b=j[1],h=Object(c.useState)(!1),p=Object(r.a)(h,2),_=p[0],g=p[1];Object(c.useEffect)((function(){O(e).then((function(t){return b(t)})),x(e).then((function(t){return i(t)}))}),[e]);var P=function(t){(function(t){return m("/comments/".concat(t),{method:"DELETE"})})(t).then((function(){x(e).then((function(t){return i(t)}))}))};return Object(f.jsxs)("div",{className:"PostDetails",children:[Object(f.jsx)(a.b,{to:"/Blog",children:Object(f.jsx)("button",{type:"button",className:"button",children:"Back to postList"})}),Object(f.jsx)("h2",{children:"Post details:"}),Object(f.jsx)("section",{className:"PostDetails__post",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/",element:Object(f.jsxs)("div",{children:[Object(f.jsx)("strong",{children:null===d||void 0===d?void 0:d.title}),Object(f.jsx)("p",{children:null===d||void 0===d?void 0:d.body}),Object(f.jsx)(a.b,{to:"/Blog/details/edit",children:Object(f.jsx)("button",{type:"button",className:"button",children:"Edit"})})]})}),Object(f.jsx)(l.a,{path:"/edit",element:Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)(N,{editPostId:e,editPost:function(t,n){var c;(c={id:e,title:t,body:n},m("/posts/".concat(c.id),{method:"PUT",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})).then((function(){O(e).then((function(t){return b(t)}))}))}})})})]})}),o.length>0&&Object(f.jsxs)("section",{className:"PostDetails__comments",children:[Object(f.jsx)("button",{type:"button",className:"button",onClick:function(){return g(!_)},children:"".concat(_?"Show":"Hide"," ")+"".concat(o.length," ").concat(1===o.length?"comment":"comments")}),Object(f.jsx)("ul",{className:"PostDetails__list",children:_||o.map((function(t){return Object(f.jsxs)("li",{className:"PostDetails__list-item",children:[Object(f.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return P(t.id)},children:"X"}),Object(f.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(f.jsx)("section",{children:Object(f.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(f.jsx)(v,{postId:e,onAddComments:function(t){(function(t){return m("/comments",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})})(t).then((function(){x(e).then((function(t){return i(t)}))}))}})})})]})},g=(n(22),function(t){var e=t.addPost,n=Object(c.useState)(""),s=Object(r.a)(n,2),o=s[0],i=s[1],a=Object(c.useState)(""),l=Object(r.a)(a,2),u=l[0],j=l[1];return Object(f.jsxs)("form",{className:"NewPostForm",onSubmit:function(t){t.preventDefault(),e({title:o,body:u}),i(""),j("")},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"title",placeholder:"Type post title",className:"NewPostForm__input",value:o,onChange:function(t){return i(t.target.value)}})}),Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("textarea",{name:"body",placeholder:"",className:"NewPostForm__input",value:u,onChange:function(t){return j(t.target.value)}})})]}),Object(f.jsx)("button",{type:"submit",className:"NewPostForm__submit-button button",children:"Add post"})]})}),P=(n(23),n(24),function(){var t=Object(c.useState)(),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)([]),i=Object(r.a)(o,2),a=i[0],u=i[1];Object(c.useEffect)((function(){h().then((function(t){return u(t)}))}));return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/Blog",exact:!0,element:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(g,{addPost:function(t){(function(t){return m("/posts",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})})(t).then((function(){h().then((function(t){return u(t)}))}))}})}),Object(f.jsx)("main",{className:"App__main",children:Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(p,{posts:a,detailsPostId:n,setDetailsPostId:s,removePost:function(t){(function(t){return m("/posts/".concat(t),{method:"DELETE"})})(t).then((function(){h().then((function(t){return u(t)}))}))}})})})]})}),Object(f.jsx)(l.a,{path:"/Blog/details/*",element:Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)(_,{detailsPostId:n})})})]})})}),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(P,{})})}),document.getElementById("root")),y()}],[[25,1,2]]]);
//# sourceMappingURL=main.81b5ab00.chunk.js.map