(this.webpackJsonpcrm=this.webpackJsonpcrm||[]).push([[0],{12:function(e,t,n){e.exports={"table-cell":"UpdateCustomer_table-cell__xamcF","update-input":"UpdateCustomer_update-input__1GxEm","table-cell-buttons":"UpdateCustomer_table-cell-buttons__L8d4b","button-save":"UpdateCustomer_button-save__1EEB_","button-cancel":"UpdateCustomer_button-cancel__1fOXt"}},15:function(e,t,n){e.exports={"button-container":"Modal_button-container__1jPG1","modal-box":"Modal_modal-box__hlyrp",message:"Modal_message__2mrm4"}},18:function(e,t,n){e.exports={"dropdownmenu-button":"DropDownMenu_dropdownmenu-button__1qJIg","dropdownmenu-button--active":"DropDownMenu_dropdownmenu-button--active__3nU6h","dropdownmenu-box":"DropDownMenu_dropdownmenu-box__2OWa3","dropdownmenu-link":"DropDownMenu_dropdownmenu-link__2IA6n"}},21:function(e,t,n){e.exports={"table-cell":"CustomerDisplay_table-cell__2MKql"}},25:function(e,t,n){e.exports={button:"Button_button__17rWu","save-customer-button":"Button_save-customer-button__nRNjZ","save-update-button":"Button_save-update-button__3b4bI","cancel-update-button":"Button_cancel-update-button__38PG_",disabled:"Button_disabled__8H72j"}},27:function(e,t,n){e.exports={header:"Header_header__16PFf",title:"Header_title__1LevX"}},29:function(e,t,n){e.exports={overlay:"Overlay_overlay__3jeSK"}},37:function(e,t,n){},39:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),o=(n(37),n(10)),l=n.n(o),u=n(28),i=n(13),d=n(2),b=(n(39),n(3)),j=n(17),m=n(14),h=n(5),O=n.n(h),x=n(25),p=n.n(x),f=n(0);var v=function(e){return Object(f.jsx)("button",{onClick:e.clickHandler,className:"".concat(p.a.button," ").concat(p.a[e.additionalClass]),children:e.buttonText})},_=n(29),g=n.n(_);var N=function(e){return Object(f.jsx)("div",{className:g.a.overlay,onClick:e.onClose})},C=n(15),w=n.n(C);var k=function(e){return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(N,{}),Object(f.jsxs)("div",{className:w.a["modal-box"],children:[Object(f.jsx)("h3",{className:w.a.message,children:e.errorMessage}),Object(f.jsx)("div",{className:w.a["button-container"],children:Object(f.jsx)(v,{buttonText:" Ok",clickHandler:e.onClose})})]})]})};var S=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),u=Object(d.a)(o,2),b=u[0],m=u[1],h=Object(a.useState)(""),x=Object(d.a)(h,2),p=x[0],_=x[1],g=Object(a.useState)(""),N=Object(d.a)(g,2),C=N[0],w=N[1],S=Object(a.useState)(!1),y=Object(d.a)(S,2),E=y[0],D=y[1],M=Object(a.useState)(!1),T=Object(d.a)(M,2),F=T[0],L=T[1],P=Object(a.useState)(null),U=Object(d.a)(P,2),A=U[0],B=U[1];function H(){return(H=Object(i.a)(l.a.mark((function t(){var n,a,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(null),n={id:0,firstName:c,lastName:b,email:C.trim(),phone:p},t.prev=2,t.next=5,fetch("/customers",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:if((a=t.sent).ok){t.next=14;break}if(s="Something went wrong",500===a.status){t.next=13;break}return t.next=11,a.json();case 11:t.sent.message.includes("unique_email")&&(s="Email already exists");case 13:throw new Error(s);case 14:return t.next=16,a.json();case 16:o=t.sent,e.onAddCustomer(o),D(!0),I(),w(""),r(""),m(""),_(""),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(2),B(t.t0.message);case 29:case"end":return t.stop()}}),t,null,[[2,26]])})))).apply(this,arguments)}function I(){setTimeout((function(){D(!1)}),1500)}var q=E?"Customer added successfully!":F&&"Email is required.",J=document.getElementById("modal-destination");return Object(f.jsxs)(a.Fragment,{children:[A&&Object(s.createPortal)(Object(f.jsx)(k,{onClose:function(){B(null)},errorMessage:A}),J),Object(f.jsx)("span",{className:O.a["success-message"],children:q}),Object(f.jsxs)("form",{className:O.a["add-form"],onSubmit:function(e){e.preventDefault(),""===C.trim()?L(!0):(L(!1),function(){H.apply(this,arguments)}())},children:[Object(f.jsxs)("div",{className:O.a["form-group"],children:[Object(f.jsx)("h3",{className:O.a.text,children:"First Name:"}),Object(f.jsx)("input",{className:O.a["add-input"],name:"firstName",type:"text",value:c,onChange:function(e){r(e.target.value)}})]}),Object(f.jsxs)("div",{className:O.a["form-group"],children:[Object(f.jsx)("h3",{className:O.a.text,children:"Last Name:"}),Object(f.jsx)("input",{className:O.a["add-input"],name:"lastName",type:"text",value:b,onChange:function(e){m(e.target.value)}})]}),Object(f.jsxs)("div",{className:O.a["form-group"],children:[Object(f.jsx)("h3",{className:O.a.text,children:"Phone:"}),Object(f.jsx)("input",{className:O.a["add-input"],name:"phone",type:"text",value:p,onChange:function(e){_(e.target.value)}})]}),Object(f.jsxs)("div",{className:O.a["form-group"],children:[Object(f.jsx)("h3",{className:O.a.text,children:"Email:"}),Object(f.jsx)("input",{className:"".concat(O.a["add-input"]," ").concat(F&&O.a["input-required"]),name:"email",type:"text",value:C,onChange:function(e){w(e.target.value)}})]}),Object(f.jsxs)("div",{className:O.a["button-container"],children:[Object(f.jsx)(v,{buttonText:"Save",additionalClass:"save-customer-button"}),Object(f.jsx)(j.b,{to:"/",className:O.a["back-link"],children:"Back"})]})]})]})},y=n(32),E=n(21),D=n.n(E);var M=function(e){return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)("td",{className:D.a["table-cell"],children:e.customer.firstName+"  "}),Object(f.jsx)("td",{className:D.a["table-cell"],children:e.customer.lastName+"  "}),Object(f.jsx)("td",{className:D.a["table-cell"],children:e.customer.email+"  "}),Object(f.jsx)("td",{className:D.a["table-cell"],children:e.customer.phone+"  "})]})},T=n(12),F=n.n(T);var L=function(e){var t=Object(a.useState)(e.customer.firstName),n=Object(d.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(e.customer.lastName),u=Object(d.a)(o,2),b=u[0],j=u[1],m=Object(a.useState)(e.customer.phone),h=Object(d.a)(m,2),O=h[0],x=h[1],p=Object(a.useState)(e.customer.email),_=Object(d.a)(p,2),g=_[0],N=_[1],C=Object(a.useState)(null),w=Object(d.a)(C,2),S=w[0],y=w[1];function E(){return(E=Object(i.a)(l.a.mark((function t(){var n,a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(null),n={id:e.customer.id,firstName:c,lastName:b,email:g.trim(),phone:O},t.prev=2,t.next=5,fetch("/customers",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:if((a=t.sent).ok){t.next=14;break}if(s="Something went wrong",500===a.status){t.next=13;break}return t.next=11,a.json();case 11:t.sent.message.includes("unique_email")&&(s="Email already exists");case 13:throw new Error(s);case 14:e.onUpdateCustomer(n),e.closeUpdateMenu(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),y(t.t0.message);case 21:case"end":return t.stop()}}),t,null,[[2,18]])})))).apply(this,arguments)}var D=document.getElementById("modal-destination");return Object(f.jsxs)(a.Fragment,{children:[S&&Object(s.createPortal)(Object(f.jsx)(k,{onClose:function(){y(null)},errorMessage:S}),D),Object(f.jsx)("td",{className:F.a["table-cell"],children:Object(f.jsx)("input",{className:F.a["update-input"],name:"firstName",type:"text",placeholder:"First name",value:c,onChange:function(e){r(e.target.value)}})}),Object(f.jsx)("td",{className:F.a["table-cell"],children:Object(f.jsx)("input",{className:F.a["update-input"],name:"lastName",type:"text",placeholder:"Last name",value:b,onChange:function(e){j(e.target.value)}})}),Object(f.jsx)("td",{className:F.a["table-cell"],children:Object(f.jsx)("input",{className:F.a["update-input"],name:"email",type:"text",placeholder:"Email adress",value:g,onChange:function(e){N(e.target.value)}})}),Object(f.jsx)("td",{className:F.a["table-cell"],children:Object(f.jsx)("input",{className:F.a["update-input"],name:"phone",type:"text",placeholder:"Phone number",value:O,onChange:function(e){x(e.target.value)}})}),Object(f.jsxs)("td",{className:F.a["table-cell-buttons"],children:[Object(f.jsx)(v,{buttonText:"Save",additionalClass:"save-update-button",clickHandler:function(e){e.preventDefault(),""===g.trim()?y("Email is required"):(y(null),function(){E.apply(this,arguments)}())}}),Object(f.jsx)(v,{buttonText:"Cancel",additionalClass:"cancel-update-button",clickHandler:e.closeUpdateMenu})]})]})},P=n(18),U=n.n(P);var A=function(e){return Object(a.useEffect)((function(){return e.showMenu&&document.addEventListener("click",e.onShowMenu),function(){document.removeEventListener("click",e.onShowMenu)}}),[e.showMenu]),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{className:e.showMenu?U.a["dropdownmenu-button--active"]:U.a["dropdownmenu-button"],onClick:e.onShowMenu,children:Object(f.jsx)("ion-icon",{name:"caret-back-outline"})}),e.showMenu?Object(f.jsxs)("nav",{className:U.a["dropdownmenu-box"],children:[Object(f.jsx)("a",{className:U.a["dropdownmenu-link"],href:"#",onClick:e.onEdit,children:"Edit"}),Object(f.jsx)("a",{className:U.a["dropdownmenu-link"],href:"#",onClick:e.onDelete,children:"Delete"})]}):null]})};var B=function(e){return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(N,{onClose:e.onCancel}),Object(f.jsxs)("div",{className:w.a["modal-box"],children:[Object(f.jsx)("p",{children:"Do you really want to delete the customer?"}),Object(f.jsxs)("div",{className:w.a["button-container"],children:[Object(f.jsx)(v,{buttonText:"Yes",additionalClass:"page-button",clickHandler:e.onDelete}),Object(f.jsx)(v,{buttonText:"No",additionalClass:"page-button",clickHandler:e.onCancel})]})]})]})};var H=function(e){var t=Object(a.useState)(e.customer),n=Object(d.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),u=l[0],i=l[1],b=Object(a.useState)(!1),j=Object(d.a)(b,2),h=j[0],O=j[1],x=Object(a.useState)(!1),p=Object(d.a)(x,2),v=p[0],_=p[1],g=document.getElementById("modal-destination");return Object(f.jsxs)(a.Fragment,{children:[h?Object(f.jsx)(L,{onUpdateCustomer:function(t){r(t),e.onUpdate(t)},closeUpdateMenu:function(){O(!1)},customer:c}):Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(M,{customer:c}),Object(f.jsx)(A,{showMenu:u,onShowMenu:function(){i(!u)},onEdit:function(e){e.preventDefault(),O(!0)},onDelete:function(e){e.preventDefault(),_(!0),Object(m.a)(document)}})]}),v&&Object(s.createPortal)(Object(f.jsx)(B,{onDelete:function(){_(!1),e.onDelete(c),Object(m.b)(document)},onCancel:function(){_(!1),Object(m.b)(document)}}),g)]})},I=n(9),q=n.n(I);var J=function(e){function t(t){e.onDelete(t)}var n=e.index+1,a=e.customerList.map((function(a){return Object(f.jsxs)("tr",{className:q.a["table-row"],children:[Object(f.jsx)("td",{children:n++}),Object(f.jsx)(H,{customer:a,onDelete:t,onUpdate:e.onUpdate})]},a.id)}));return Object(f.jsx)(y.Fragment,{children:Object(f.jsxs)("table",{className:"".concat(q.a["customer-table"]," ").concat(e.onSearch&&q.a.hide),children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:"".concat(q.a["table-header"]," ").concat(q.a["table-header--number"]),children:"\u2116"}),Object(f.jsx)("th",{className:q.a["table-header"],children:"First name"}),Object(f.jsx)("th",{className:q.a["table-header"],children:"Last name"}),Object(f.jsx)("th",{className:q.a["table-header"],children:"Email"}),Object(f.jsx)("th",{className:q.a["table-header"],children:"Phone"}),Object(f.jsx)("th",{className:"".concat(q.a["table-header"]," ").concat(q.a["table-header--action"]),children:"Action"})]})}),Object(f.jsx)("tbody",{children:a})]})})},R=n(27),W=n.n(R);var G=function(){return Object(f.jsx)("header",{className:W.a.header,children:Object(f.jsx)("h1",{className:W.a.title,children:"CRM"})})};var K=function(){var e=10,t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),h=Object(d.a)(o,2),O=h[0],x=h[1],p=Object(a.useState)(null),_=Object(d.a)(p,2),g=_[0],N=_[1],C=Object(a.useState)(!1),w=Object(d.a)(C,2),y=w[0],E=w[1],D=Object(a.useState)(""),M=Object(d.a)(D,2),T=M[0],F=M[1],L=Object(a.useState)([]),P=Object(d.a)(L,2),U=P[0],A=P[1],B=Object(a.useState)(1),H=Object(d.a)(B,2),I=H[0],q=H[1],R=Object(a.useState)(1),W=Object(d.a)(R,2),K=W[0],X=W[1],Q=Object(a.useState)(0),Y=Object(d.a)(Q,2),Z=Y[0],z=Y[1];function V(){return(V=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),N(null),e.prev=2,e.next=5,fetch("/customers");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Failed to fetch");case 8:return e.next=10,t.json();case 10:n=e.sent,r(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),N(e.t0.message);case 17:x(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}function $(){return($=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!1),e.prev=1,e.next=4,fetch("/customers",{method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Something went wrong.");case 7:te(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),ee();case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function ee(){E(!0),Object(m.a)(document)}function te(e){r((function(t){return t.filter((function(t){return t.id!==e.id}))}))}function ne(t){var n=function(t){return Math.ceil(t.length/e)}(t);X(n),I>1&&t.length%e===0&&I===K&&ce(n),A(t)}function ae(){T?ne(c.filter((function(e){var t,n,a,c;return(null===(t=e.firstName)||void 0===t?void 0:t.toLowerCase().includes(T))||(null===(n=e.lastName)||void 0===n?void 0:n.toLowerCase().includes(T))||(null===(a=e.email)||void 0===a?void 0:a.toLowerCase().includes(T))||(null===(c=e.phone)||void 0===c?void 0:c.toLowerCase().includes(T))}))):ne(c)}function ce(t){q((function(){return t})),z((function(){return(t-1)*e}))}Object(a.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){ae()}),[c,T]);var se=I===K,re=!O&&!g&&0===U.length,oe=document.getElementById("modal-destination");return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(G,{}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/add-customer",children:Object(f.jsx)("section",{children:Object(f.jsx)(S,{onAddCustomer:function(e){var t=[].concat(Object(u.a)(c),[e]);r(t)}})})}),Object(f.jsx)(b.a,{path:"/",exact:!0,children:Object(f.jsxs)("section",{children:[y&&Object(s.createPortal)(Object(f.jsx)(k,{errorMessage:"Something went wrong",onClose:function(){E(!1),Object(m.b)(document)}}),oe),Object(f.jsxs)("div",{className:"top-container",children:[Object(f.jsx)(j.b,{className:"add-customer-link",to:"/add-customer",children:"Add"}),Object(f.jsx)("input",{className:"search-input",value:T,onChange:function(e){z(0),q(1),F(e.target.value),ae(e.target.value)},placeholder:"Search"})]}),!O&&c.length>0&&Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(J,{onUpdate:function(e){r((function(t){for(var n=0,a=t.length-1;n<=a;){var c=Math.floor((a+n)/2);if(t[c].id===e.id){var s=Object(u.a)(t);return s[c]=e,s}t[c].id<e.id?n=c+1:a=c-1}return t}))},index:I===K&&K>1?U.length-e:Z,customerList:U.slice(I===K?-10:Z,Z+e),onDelete:function(e){return $.apply(this,arguments)}}),!re&&Object(f.jsxs)("div",{className:"buttons-container",children:[Object(f.jsx)(v,{buttonText:"<<",clickHandler:function(e){e.preventDefault(),q((function(){return 1})),z((function(){return 0}))}}),Object(f.jsx)(v,{buttonText:"Previous",clickHandler:function(t){t.preventDefault(),I>1&&(z((function(t){return t-e})),q((function(e){return e-1})))}}),Object(f.jsx)("p",{className:"page-number",children:I}),Object(f.jsx)(v,{buttonText:"Next",clickHandler:function(t){t.preventDefault(),I<K&&(z((function(t){return t+e})),q((function(e){return e+1})))},additionalClass:se&&"disabled"}),Object(f.jsx)(v,{buttonText:">>",clickHandler:function(e){e.preventDefault(),ce(K)},additionalClass:se&&"disabled"})]})]}),O&&Object(f.jsx)("p",{children:"Loading..."}),re&&Object(f.jsx)("p",{children:"No customers found."}),!O&&0===U.length&&g&&Object(f.jsx)("p",{children:g})]})}),Object(f.jsx)(b.a,{children:Object(f.jsx)("h2",{children:"Page not found."})})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(j.a,{children:Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(K,{})})}),document.getElementById("root")),X()},5:function(e,t,n){e.exports={"add-form":"AddCustomer_add-form__1tD8K","form-group":"AddCustomer_form-group__2txkQ",text:"AddCustomer_text__15WIJ","add-input":"AddCustomer_add-input__3riDI","input-required":"AddCustomer_input-required__3eRWM","button-container":"AddCustomer_button-container__w5tIl","back-link":"AddCustomer_back-link__3DctN","success-message":"AddCustomer_success-message__1SN6R"}},9:function(e,t,n){e.exports={"customer-table":"CustomerTable_customer-table__31cU1","table-header":"CustomerTable_table-header__2E9pq","table-header--number":"CustomerTable_table-header--number__3G3Rk","table-header--action":"CustomerTable_table-header--action__2WxE2","table-row":"CustomerTable_table-row__K7lTE"}}},[[49,1,2]]]);
//# sourceMappingURL=main.2c24cbba.chunk.js.map