(this.webpackJsonpExpenseTrackerClient=this.webpackJsonpExpenseTrackerClient||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(10),r=n.n(l),i=(n(16),n(5)),u=n(1),o=n(38);n(17),n(18);function c(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),l=n[0],r=n[1];return Object(a.useEffect)((function(){setTimeout((function(){r({display:"none"})}),1e4)})),s.a.createElement("div",{style:l,className:"notifications"},s.a.createElement("div",{className:"notifications-container"},s.a.createElement("button",{onClick:function(e){e.preventDefault(),r({display:"none"})},className:"notifications-btn-close"},"X")),s.a.createElement("div",{className:"notifications-container-msg"},s.a.createElement("p",null,"This is a experimental web app. Real emails are not required."),s.a.createElement("p",null,"Closing in 10 seconds")))}n(19);var d=n(3),m=n(4);n(25);function b(e){return s.a.createElement("div",{className:"view-controller"},s.a.createElement("div",{className:"Users"===e.currentView?"view-controller-btn-container view-controller-btn-container-active":"view-controller-btn-container"},s.a.createElement("button",{className:"view-controller-btn",onClick:function(t){t.preventDefault(),e.SwitchView("Users")}},s.a.createElement(d.a,{icon:m.i}))),s.a.createElement("div",{className:"Budgets"===e.currentView?"view-controller-btn-container view-controller-btn-container-active":"view-controller-btn-container"},s.a.createElement("button",{className:"view-controller-btn",onClick:function(t){t.preventDefault(),e.SwitchView("Budgets")}},s.a.createElement(d.a,{icon:m.g}))))}var g=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-primary"},s.a.createElement("h1",null,"Expense Tracker"),s.a.createElement("p",null,"Made by"," ",s.a.createElement("a",{href:"https://github.com/rem029",target:"_blank"},"rem029")," ")),s.a.createElement(b,{SwitchView:e.SwitchView,currentView:e.currentView})))};n(26),n(27);function f(e){return s.a.createElement("div",null,s.a.createElement("div",{className:e.className}))}function p(e){var t=e.userInfo,n=e.userUpdate,l=e.Logout,r=e.isLoaded,i=e.loginStatus,o=e.loginMsg,c=t.username,b=t.password,g=t.firstName,p=t.lastName,h=t.email,E=Object(a.useState)(c),v=Object(u.a)(E,2),w=v[0],j=v[1],S=Object(a.useState)(b),O=Object(u.a)(S,2),N=O[0],y=O[1],U=Object(a.useState)(b),D=Object(u.a)(U,2),L=D[0],C=D[1],x=Object(a.useState)(g),k=Object(u.a)(x,2),B=k[0],I=k[1],M=Object(a.useState)(p),A=Object(u.a)(M,2),P=A[0],T=A[1],H=Object(a.useState)(h),R=Object(u.a)(H,2),G=R[0],V=R[1],F=Object(a.useState)(!0),_=Object(u.a)(F,2),J=_[0],q=_[1];return s.a.createElement("div",null,s.a.createElement("div",{className:"user-info"},s.a.createElement("span",null,s.a.createElement(d.a,{icon:m.a})),s.a.createElement("h2",null," User Profile"),s.a.createElement("button",{className:"user-info-btn",onClick:function(e){e.preventDefault(),l()}},r?"Log out":s.a.createElement(f,{className:"spinner spinner-style-login"})),s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"Username"),s.a.createElement("input",{type:"text",value:w,name:"username",disabled:!0,onChange:function(e){j(e.target.value)}})),s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",value:G,name:"email",disabled:J,onChange:function(e){V(e.target.value)}})),s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"text",value:N,name:"password",disabled:J,onChange:function(e){y(e.target.value)}})),!0!==J&&s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"Confirm Password"),s.a.createElement("input",{type:"text",value:L,name:"cpassword",disabled:J,onChange:function(e){C(e.target.value)}})),s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"First name"),s.a.createElement("input",{type:"text",value:B,name:"email",disabled:J,onChange:function(e){I(e.target.value)}})),s.a.createElement("div",{className:"user-info-field"},s.a.createElement("label",null,"Last name"),s.a.createElement("input",{type:"text",value:P,name:"email",disabled:J,onChange:function(e){T(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("button",{className:r?"user-info-btn":"user-info-btn user-info-btn-disable",onClick:function(e){e.preventDefault(),J||n({username:w,email:G,password:N,cpassword:L,firstName:B,lastName:P}),q(!J)}},r?J?"Edit Profile":"Update":s.a.createElement(f,{className:"spinner spinner-style-login"})),s.a.createElement("p",{className:"user-info-msg",style:i?{color:"#457B9D",fontSize:"12px",fontWeight:"300"}:{color:"#E63946",fontSize:"12px",fontWeight:"300"}},o))))}n(28);var h=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),c=o[0],b=o[1],g=Object(a.useState)(""),p=Object(u.a)(g,2),h=p[0],E=p[1],v=Object(a.useState)(""),w=Object(u.a)(v,2),j=w[0],S=w[1],O=Object(a.useState)(""),N=Object(u.a)(O,2),y=N[0],U=N[1],D=Object(a.useState)(""),L=Object(u.a)(D,2),C=L[0],x=L[1],k=Object(a.useState)(!0),B=Object(u.a)(k,2),I=B[0],M=B[1],A=Object(a.useState)(!1),P=Object(u.a)(A,2),T=P[0],H=P[1],R=Object(a.useState)(!1),G=Object(u.a)(R,2),V=G[0],F=G[1],_=Object(a.useState)(!1),J=Object(u.a)(_,2),q=J[0],z=J[1];return s.a.createElement("div",null,s.a.createElement("form",{className:"user-form",onSubmit:function(t){t.preventDefault(),I?e.Login(l,c):e.userRegister({username:l,email:C,password:c,cpassword:h,firstName:j,lastName:y})}},s.a.createElement("div",{className:"user-form-title"},s.a.createElement("h3",null,"XT"),s.a.createElement("p",null,"Manage your personal expense")),s.a.createElement("div",{className:"user-selection"},s.a.createElement("button",{className:I?"user-selection-btn user-selection-btn-active":"user-selection-btn",onClick:function(e){e.preventDefault(),M(!0)}},"Sign in"),s.a.createElement("button",{className:I?"user-selection-btn":"user-selection-btn user-selection-btn-active",onClick:function(e){e.preventDefault(),M(!1)}},"Sign up")),s.a.createElement("div",{className:"user-selection-anim"},s.a.createElement("div",{className:I?"user-selection-anim-orig":"user-selection-anim-orig user-selection-anim-orig-right"})),I?s.a.createElement("div",{className:"user-login-form"},s.a.createElement("div",{className:"user-login-form-input-style-username"},s.a.createElement("span",{className:"user-login-form-input-style-username-icon"},s.a.createElement(d.a,{icon:m.i})),s.a.createElement("input",{type:"text",value:l,name:"username",disabled:e.isDisabled,placeholder:"Username",tabIndex:1,onChange:function(e){r(e.target.value)}})),s.a.createElement("div",{className:"user-login-form-input-style-password"},s.a.createElement("span",{className:"user-login-form-input-style-password-icon"},s.a.createElement(d.a,{icon:m.f})),s.a.createElement("input",{type:T?"type":"password",name:"password",disabled:e.isDisabled,value:c,placeholder:"Password",tabIndex:2,onChange:function(e){b(e.target.value)}}),s.a.createElement("button",{onClick:function(e){e.preventDefault(),H(!T)}},T?s.a.createElement(d.a,{icon:m.d}):s.a.createElement(d.a,{icon:m.e}))),s.a.createElement("button",{type:"submit",className:"user-login-form-btn",tabIndex:3},e.isLoaded?s.a.createElement("span",null,"SIGN IN"):s.a.createElement("span",null,s.a.createElement(f,{className:"spinner spinner-style-login"}),"Loading..."))):s.a.createElement("div",{className:"user-signup-form"},s.a.createElement("div",{className:"user-signup-form-input-info"},"Fields with (*) are required."),s.a.createElement("label",null,"Username *"),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:"text",value:l,name:"username",placeholder:"Username",disabled:e.isDisabled,onChange:function(e){r(e.target.value)}})),s.a.createElement("label",null,"Email *"),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:"email",value:C,name:"email",placeholder:"username@example.com",disabled:e.isDisabled,onChange:function(e){x(e.target.value)}})),s.a.createElement("label",null,"Password *"),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:V?"text":"password",value:c,name:"password",placeholder:"Password",disabled:e.isDisabled,onChange:function(e){b(e.target.value)}}),s.a.createElement("button",{name:"btn-showpw",onClick:function(e){e.preventDefault(),F(!V)}},V?s.a.createElement(d.a,{icon:m.d}):s.a.createElement(d.a,{icon:m.e}))),s.a.createElement("label",null,"Confirm Password *"),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:q?"text":"password",value:h,name:"cpassword",placeholder:"Confirm Password",disabled:e.isDisabled,onChange:function(e){E(e.target.value)}}),s.a.createElement("button",{name:"btn-showpw",onClick:function(e){e.preventDefault(),z(!q)}},q?s.a.createElement(d.a,{icon:m.d}):s.a.createElement(d.a,{icon:m.e}))),s.a.createElement("label",null,"Full Name"),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:"text",value:j,name:"firstName",placeholder:"First name",disabled:e.isDisabled,onChange:function(e){S(e.target.value)}})),s.a.createElement("div",{className:"user-signup-form-input-style"},s.a.createElement("input",{type:"text",value:y,name:"lastName",placeholder:"Last name",disabled:e.isDisabled,onChange:function(e){U(e.target.value)}})),s.a.createElement("button",{type:"submit",className:"user-signup-form-btn"},e.isLoaded?s.a.createElement("span",null,"SIGN UP"):s.a.createElement("span",null,s.a.createElement(f,{className:"spinner spinner-style-login"}),"Loading..."))),s.a.createElement("p",{style:{color:e.loginStatus?"#457B9D":"#E63946",fontSize:"12px",fontWeight:"300"}},e.loginMsg)))};n(29);function E(e){return s.a.createElement("div",{className:"user-view-anim"},e.isUserLogin?s.a.createElement(p,{userInfo:e.userInfo,Logout:e.Logout,loginStatus:e.loginStatus,loginMsg:e.loginMsg,userUpdate:e.userUpdate,UpdateLoginStatus:e.UpdateLoginStatus,isLoaded:e.isLoaded}):s.a.createElement(h,{Login:e.Login,loginStatus:e.loginStatus,loginMsg:e.loginMsg,isLoaded:e.isLoaded,isDisabled:e.isDisabled,userInfo:e.userInfo,userRegister:e.userRegister,UpdateLoginStatus:e.UpdateLoginStatus}))}n(30),n(31),n(32);function v(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)("income"),o=Object(u.a)(i,2),c=o[0],d=o[1],m=Object(a.useState)(null),b=Object(u.a)(m,2),g=b[0],f=b[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),E=h[0],v=h[1];return s.a.createElement("div",{className:"budget-new-form-bg"},s.a.createElement("div",{className:"budget-new-form"},s.a.createElement("button",{onClick:function(t){t.preventDefault(),e.setAddMode(!1),e.SetShowAddBtn(!0)},className:"budget-new-form-btn-close"},"X"),s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setAddMode(!1),e.SetShowAddBtn(!0),e.BudgetAdd({title:l,type:c,note:E,amount:g})}},s.a.createElement("div",{className:"budget-new-form-field-container"},s.a.createElement("div",{className:"budget-new-form-field"},s.a.createElement("div",{className:"btn-budget-type-container"},s.a.createElement("button",{type:"button",className:"income"===c?"btn-budget-type-inc btn-budget-type-inc-active":"btn-budget-type-inc",name:"btn-budget-type",onClick:function(e){e.preventDefault(),d("income")}},"Income"),s.a.createElement("button",{type:"button",className:"expense"===c?"btn-budget-type-exp btn-budget-type-exp-active":"btn-budget-type-exp",name:"btn-budget-type",onClick:function(e){e.preventDefault(),d("expense")}},"Expense"))),s.a.createElement("div",{className:"budget-new-form-field"},s.a.createElement("span",null,"*"),s.a.createElement("input",{type:"text",name:"budgetTitle",placeholder:"Title",value:l,onChange:function(e){r(e.target.value)}})),s.a.createElement("div",{className:"budget-new-form-field"},s.a.createElement("span",null,"*"),s.a.createElement("input",{type:"number",name:"budgetAmount",placeholder:"Enter amount",value:Number(g),onChange:function(e){f(e.target.value)}})),s.a.createElement("div",{className:"budget-new-form-field"},s.a.createElement("textarea",{name:"budgetNote",placeholder:"Note",value:E,onChange:function(e){v(e.target.value)}})),s.a.createElement("button",{type:"submit",className:"budget-new-form-field-btn-add"},"Add"),s.a.createElement("p",{style:e.budgetStatus?{color:"#fff",fontSize:"12px"}:{color:"#e63946",fontSize:"12px"}},e.budgetMsg)))))}function w(e){return s.a.createElement("div",null,e.showAddBtn&&s.a.createElement("div",{className:"budget-new-container"},s.a.createElement("button",{className:"budget-new-container-btn",onClick:function(t){t.preventDefault(),e.setAddMode(!0),e.SetShowAddBtn(!1)}},"+")),e.addMode&&s.a.createElement(v,{setAddMode:e.setAddMode,userInfo:e.userInfo,isUserLogin:e.isUserLogin,BudgetAdd:e.BudgetAdd,budgetStatus:e.budgetStatus,budgetMsg:e.budgetMsg,SetShowAddBtn:e.SetShowAddBtn}))}n(33),n(34);var j=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(!0),o=Object(u.a)(i,2),c=o[0],b=o[1],g=Object(a.useState)(e.budget.title),f=Object(u.a)(g,2),p=f[0],h=f[1],E=Object(a.useState)(Number(e.budget.amount)),v=Object(u.a)(E,2),w=v[0],j=v[1];return s.a.createElement("div",{className:c?"list-budget-item list-budget-item-"+e.budget.type:"list-budget-item list-budget-item-"+e.budget.type+" list-budget-item list-budget-item-"+e.budget.type+"-active"},s.a.createElement("span",null,s.a.createElement("input",{type:"text",value:p,disabled:c,onChange:function(e){h(e.target.value)}})),s.a.createElement("input",{type:"number",value:w,disabled:c,onChange:function(e){j(e.target.value)}}),s.a.createElement("div",{className:"list-budget-item-btn-options-container"},s.a.createElement("button",{className:l?"list-budget-item-btn list-budget-item-btn-active":"list-budget-item-btn",onClick:function(t){c?r(!l):(e.BudgetUpdate({_id:e.budget._id,type:e.budget.type,note:e.budget.note,title:p,amount:w},e.index),b(!0))}},c?s.a.createElement(d.a,{icon:m.b}):s.a.createElement(d.a,{icon:m.c})),l&&s.a.createElement("div",{className:"list-budget-item-btn-options"},s.a.createElement("button",{onClick:function(e){r(!1),b(!1)}},s.a.createElement(d.a,{icon:m.c}),s.a.createElement("span",null,"EDIT")),s.a.createElement("div",null),s.a.createElement("button",{onClick:function(t){r(!1),e.BudgetDelete({_id:e.budget._id,type:e.budget.type,note:e.budget.note,title:p,amount:w},e.budget.tmpID)}},s.a.createElement(d.a,{icon:m.h}),s.a.createElement("span",null,"DELETE")))))};function S(e){return s.a.createElement("div",{className:"list-budgets"},e.isLoaded?s.a.createElement("ul",null,null!==e.budgets?e.budgets.map((function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(j,{index:n,budget:t,SetShowAddBtn:e.SetShowAddBtn,BudgetUpdate:e.BudgetUpdate,BudgetDelete:e.BudgetDelete}))})):s.a.createElement("p",null,"Add a Budget")):s.a.createElement("div",null,s.a.createElement(f,{className:"spinner spinner-style-budgets-view"}),s.a.createElement("span",null,"Loading...")))}n(35);var O=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(0),o=Object(u.a)(i,2),c=o[0],d=o[1],m=Object(a.useState)(""),b=Object(u.a)(m,2),g=b[0],p=b[1];return Object(a.useEffect)((function(){if(null!==e.budgets){var t=0,n=0;r(0),d(0),e.budgets.forEach((function(e){"income"===e.type?(t+=Number(e.amount),r(t)):"expense"===e.type&&(n+=Number(e.amount),d(Number(n)))}))}else r(0),d(0);e.guestMode?p("Guest"):e.userInfo?p(e.userInfo.username):p("ERROR")}),[e.budgets,e.guestMode,e.userInfo]),s.a.createElement("div",{className:"budget-dashboard-container"},s.a.createElement("div",{className:"budget-dashboard-header"},s.a.createElement("h2",null,"Hello,"," ",s.a.createElement("button",{onClick:function(t){t.preventDefault(),e.SwitchView("Users")}},e.isLoaded?s.a.createElement("span",null,g):s.a.createElement(f,{className:"spinner spinner-style-dashboard"})),"!"),e.guestMode&&s.a.createElement("p",null,s.a.createElement("button",{onClick:function(t){t.preventDefault(),e.SwitchView("Users")}},"Log in or Sign up")," ","to save your data. ",s.a.createElement("b",null,"Its FREE"))),s.a.createElement("div",{className:"budget-dashboard-box-container"},s.a.createElement("div",{className:"budget-dashboard-box budget-dashboard-box-income"},s.a.createElement("h3",null,"Income"),s.a.createElement("p",null,Number(l))),s.a.createElement("div",{className:"budget-dashboard-box budget-dashboard-box-expense"},s.a.createElement("h3",null,"Expense"),s.a.createElement("p",null,Number(c))),s.a.createElement("div",{className:"budget-dashboard-box budget-dashboard-box-balance"},s.a.createElement("h3",null,"Balance"),s.a.createElement("p",null,Number(l-c)))))};function N(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(!0),o=Object(u.a)(i,2),c=o[0],d=o[1];return s.a.createElement("div",{className:"budget-view-anim"},s.a.createElement(O,{guestMode:e.guestMode,budgets:e.budgets,userInfo:e.userInfo,isUserLogin:e.isUserLogin,SwitchView:e.SwitchView,isLoaded:e.isLoaded}),s.a.createElement(S,{budgets:e.budgets,setAddMode:r,SetShowAddBtn:d,isLoaded:e.isLoaded,BudgetUpdate:e.BudgetUpdate,BudgetDelete:e.BudgetDelete}),s.a.createElement(w,{userInfo:e.userInfo,isUserLogin:e.isUserLogin,BudgetAdd:e.BudgetAdd,budgetStatus:e.budgetStatus,budgetMsg:e.budgetMsg,guestMode:e.guestMode,setAddMode:r,addMode:l,SetShowAddBtn:d,showAddBtn:c}))}var y={localIP:"http://192.168.100.12",localURL:"http://localhost:5000/api/users",Url:"https://infinite-sea-11156.herokuapp.com/api/users",port:5e3,url:function(){return this.Url},testUrl:"http://localhost:5000/testglobal",Login:function(e,t,n){var a=this,s=this.url()+"/login",l={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e,password:t}),credentials:"include"};fetch(s,l).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){n(e)}))})).catch((function(e){a.ErrorHandler(e,(function(e){n(e)}))}))},Register:function(e,t){var n=this,a=this.url()+"/register",s={method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e.username,password:e.password,email:e.email,firstName:e.firstName,lastName:e.lastName,isLogIn:!0}),credentials:"include"};fetch(a,s).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},Update:function(e,t){var n=this,a=this.url()+"/update",s={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e.username,password:e.password,email:e.email,firstName:e.firstName,lastName:e.lastName,isLogIn:!0}),credentials:"include"};fetch(a,s).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},GetInfo:function(e,t){var n=this,a=this.url()+"/"+e;fetch(a,{method:"GET",headers:{"Content-type":"application/json"},credentials:"include"}).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},Logout:function(e){var t=this,n=this.url()+"/logout";fetch(n,{method:"POST",headers:{"Content-type":"application/json"},credentials:"include"}).then((function(t){if(!t.ok)throw new Error(t.status);t.json().then((function(t){e(t)}))})).catch((function(n){t.ErrorHandler(n,(function(t){e(t)}))}))},Test:function(e){var t=this;fetch(this.testUrl,{method:"GET",headers:{"Content-type":"application/json"},credentials:"include"}).then((function(t){if(!t.ok)throw new Error(t.status);t.json().then((function(t){e(t)}))})).catch((function(n){t.ErrorHandler(n,(function(t){e(t)}))}))},ErrorHandler:function(e,t){"401"===e.message?t({status:!1,message:"Login Unsuccessful"}):(e.message="Failed to fetch")?t({status:!1,message:"Unable to contact server"}):t({status:!1,message:"Contact Developer"})}},U={localIP:"http://192.168.100.12",localURL:"http://localhost:5000/api/budgets",Url:"https://infinite-sea-11156.herokuapp.com/api/budgets",port:5e3,tmpBudgetData:[],url:function(){return this.Url},Add:function(e,t){var n=this,a=this.url()+"/add",s={method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e.username,userID:e.userID,type:e.type,title:e.title,note:e.note,amount:e.amount}),credentials:"include"};fetch(a,s).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},AddMany:function(e,t,n){var a=this,s=this.url()+"/addmany",l={method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e.username,userID:e._id,budgets:t}),credentials:"include"};fetch(s,l).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){n(e)}))})).catch((function(e){a.ErrorHandler(e,(function(e){n(e)}))}))},GetAll:function(e,t){var n=this,a=this.url()+"/"+e;fetch(a,{method:"GET",headers:{"Content-type":"application/json"},credentials:"include"}).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},Update:function(e,t){var n=this,a=this.url()+"/update",s={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({_id:e._id,username:e.username,userID:e.userID,type:e.type,title:e.title,note:e.note,amount:e.amount}),credentials:"include"};fetch(a,s).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},Delete:function(e,t){var n=this,a=this.url()+"/delete",s={method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({_id:e._id,username:e.username}),credentials:"include"};fetch(a,s).then((function(e){if(!e.ok)throw new Error(e.status);e.json().then((function(e){t(e)}))})).catch((function(e){n.ErrorHandler(e,(function(e){t(e)}))}))},ErrorHandler:function(e,t){"401"===e.message?t({status:!1,message:"Login Unsuccessful"}):(e.message="Failed to fetch")?t({status:!1,message:"Unable to contact server"}):t({status:!1,message:"Contact Developer"})}},D={localIP:"http://192.168.100.12",localURL:"http://localhost:5000/api/pageviews",Url:"https://infinite-sea-11156.herokuapp.com/api/pageviews",port:5e3,url:function(){return this.Url},testUrl:"http://localhost:5000/testglobal",Add:function(e){var t=this,n=this.url()+"/add";fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},credentials:"include"}).then((function(t){if(!t.ok)throw new Error(t.status);t.json().then((function(t){e(t)}))})).catch((function(n){t.ErrorHandler(n,(function(t){e(t)}))}))},ErrorHandler:function(e,t){"401"===e.message?t({status:!1,message:"Login Unsuccessful"}):(e.message="Failed to fetch")?t({status:!1,message:"Unable to contact server"}):t({status:!1,message:"Contact Developer"})}},L=0;function C(){L++;var e=Math.floor(100*Math.random());return(L+e+Date.now()).toString()}var x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),d=Object(u.a)(r,2),m=d[0],b=d[1],f=Object(a.useState)(!1),p=Object(u.a)(f,2),h=p[0],v=p[1],w=Object(a.useState)(""),j=Object(u.a)(w,2),S=j[0],O=j[1],L=Object(a.useState)([]),x=Object(u.a)(L,2),k=x[0],B=x[1],I=Object(a.useState)(null),M=Object(u.a)(I,2),A=M[0],P=M[1],T=Object(a.useState)(!1),H=Object(u.a)(T,2),R=H[0],G=H[1],V=Object(a.useState)(!0),F=Object(u.a)(V,2),_=F[0],J=F[1],q=Object(a.useState)(!1),z=Object(u.a)(q,2),W=z[0],X=z[1],Y=Object(a.useState)(!0),$=Object(u.a)(Y,2),K=$[0],Q=$[1],Z=Object(a.useState)("Budgets"),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),se=Object(u.a)(ae,2),le=se[0],re=se[1],ie=Object(a.useState)(!1),ue=Object(u.a)(ie,2),oe=ue[0],ce=ue[1],de=Object(a.useState)(!1),me=Object(u.a)(de,2),be=me[0],ge=me[1],fe=Object(a.useState)({}),pe=Object(u.a)(fe,2),he=(pe[0],pe[1]),Ee=Object(o.a)(["budget"]),ve=Object(u.a)(Ee,3),we=ve[0],je=ve[1],Se=ve[2];Object(a.useEffect)((function(){le||Ne("RELOG","RELOG"),K?we.budget&&B(we.budget):(oe||Ue(),ce(!0)),be||(D.Add((function(e){he(e)})),ge(!0)),re(!0)}),[k,K,A]);var Oe=function(e){je("budget",JSON.stringify(e),{maxAge:144e4})},Ne=function(e,t){e.length>0&&t.length>0?(J(!1),X(!0),y.Login(e,t,(function(e){l(e.status),b(e.message),P((function(t){return e.user?e.user:null})),G(e.status),!0===e.status?(Q(!1),we.budget&&we.budget.length>0&&(ye(e.user,we.budget),Se("budget")),De("Budgets")):Q(!0),J(!0),X(!1)}))):(l(!1),b("Username or password is blank"))},ye=function(e,t){null!==e?(J(!1),X(!0),U.tmpBudgetData=[],t.forEach((function(e){delete e.tmpID,U.tmpBudgetData=U.tmpBudgetData.concat(e)})),U.AddMany(e,U.tmpBudgetData,(function(e){v(e.status),O(e.message),e.budgets?B(e.budgets):B(null),J(!0),X(!1)})),J(!0),X(!1),O("Fields with (*) are require and cannot be blank."),v(!1)):(J(!0),X(!1))},Ue=function(){null!==A&&R?(J(!1),X(!0),U.GetAll(A.username,(function(e){v(e.status),O(e.message),e.budgets?B(e.budgets):B(null),J(!0),X(!1)}))):K?(we.budget&&B(we.budget),v(!0),O("You are in Guest Mode.")):(B(null),v(!1),O("User info is null"))},De=function(e){e?("Budgets"===e&&Ue(),ne(e)):ne("Users"===te?"Budgets":"Users")};return s.a.createElement("div",null,s.a.createElement(g,{SwitchView:De,currentView:te}),s.a.createElement("div",{className:"container-main"},s.a.createElement(c,null),"Users"===te&&s.a.createElement(E,{Login:Ne,loginStatus:n,loginMsg:m,isLoaded:_,isDisabled:W,userInfo:A,userRegister:function(e){J(!1),X(!0),e.username.length>0||e.email.length>0?e.password===e.cpassword?y.Register(e,(function(t){t.status?Ne(e.username,e.password):(l(t.status),G(t.status),b(t.message),J(!0),X(!1))})):(l(!1),b("Password doest not match"),J(!0),X(!1)):(l(!1),b("Fields with (*) are required."),J(!0),X(!1))},Logout:function(){J(!1),X(!0),y.Logout((function(e){l(e.status),b(e.message),J(!0),X(!1),G(!1),P(null),B([]),Q(!0)}))},isUserLogin:R,UpdateLoginStatus:function(e){l(e.status),b(e.message)},userUpdate:function(e){e.username.length>0&&e.password.length>0&&e.cpassword.length>0&&e.email.length>0?e.password===e.cpassword?(J(!1),X(!0),y.Update(e,(function(e){l(e.status),b(e.message),e.user&&P(e.user),J(!0),X(!1)}))):(l(!1),b("Please confirm your password"),J(!0),X(!1)):(l(!1),b("Username, email or password is blank"),J(!0),X(!1))}}),"Budgets"===te&&s.a.createElement(N,{userInfo:A,isUserLogin:R,guestMode:K,SwitchView:De,isLoaded:_,BudgetUpdate:function(e,t){if(null!==A&&R)J(!1),X(!0),e=Object(i.a)(Object(i.a)({},e),{username:A.username,userID:A._id}),U.Update(e,(function(e){v(e.status),O(e.message),e.budgets?B(e.budgets):B(null),J(!0),X(!1)}));else{if(K)k[t]=e,B((function(n){return n[t]=e,Oe(n),n})),O("Successfully updated as Guest"),v(!0);else O("User is not logged in."),v(!1);J(!0),X(!1)}},BudgetDelete:function(e,t){null!==A&&R?(J(!1),X(!0),e=Object(i.a)(Object(i.a)({},e),{username:A.username}),U.Delete(e,(function(e){v(e.status),O(e.message),e.budgets?B(e.budgets):B(null),J(!0),X(!1)}))):(K?(B((function(e){var n=e.filter((function(e){return e.tmpID!==t}));return Oe(n),n})),O("Successfully deleted as Guest"),v(!0)):(O("User is not logged in."),v(!1)),J(!0),X(!1))},BudgetAdd:function(e){null!==A&&R?e.type.length>0&&e.title.length>0&&"type"!==e.type.length?(J(!1),X(!0),e=Object(i.a)(Object(i.a)({},e),{username:A.username,userID:A._id}),U.Add(e,(function(e){v(e.status),O(e.message),e.budgets?B(e.budgets):B(null),J(!0),X(!1)}))):(J(!0),X(!1),O("Fields with (*) are require and cannot be blank."),v(!1)):(K?e.type.length>0&&e.title.length>0&&"type"!==e.type.length?(e=Object(i.a)(Object(i.a)({},e),{username:"guest",userID:"guest",tmpID:C()}),B((function(t){return Oe(t.concat(e)),t.concat(e)})),O("Successfully added as Guest"),v(!0)):(O("Fields with (*) are require and cannot be blank."),v(!1)):(O("User is not logged in."),v(!1)),J(!0),X(!1))},budgetStatus:h,budgetMsg:S,budgets:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ee0bb24b.chunk.js.map