(this["webpackJsonpyevhenii-kononko-task-pagination-redux"]=this["webpackJsonpyevhenii-kononko-task-pagination-redux"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),u=n(6),s=n.n(u),i=n(7),o=n(3),l=n(5),m=(r={},Object(o.a)(r,"SET_ACTIVE_USER",(function(e){var t=e.users.length;return t?Object(l.a)({},e,{activeUser:e.users[Math.floor(Math.random()*t)]}):Object(l.a)({},e,{activeUser:null})})),Object(o.a)(r,"SET_PAGE",(function(e,t){var n=t.page;return Object(l.a)({},e,{currentPage:n})})),Object(o.a)(r,"SET_PAGE_LIMIT",(function(e,t){var n=t.limit;return Object(l.a)({},e,{pageLimit:n,currentPage:1})})),Object(o.a)(r,"SET_USERS",(function(e,t){var n=t.users;return Object(l.a)({},e,{users:n,usersCount:n.length})})),Object(o.a)(r,"DEFAULT",(function(e){return e})),r),p={users:[],usersCount:0,activeUser:null,pageLimit:5,currentPage:1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=m[t.type]||m.DEFAULT;return n(e,t)},f=Object(i.b)(v),E=n(2),g=(n(28),n(13)),d=n(14),b=n(16),h=n(15),j=n(17),O="".concat(window.location.href,"data/users"),U=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setUsers,n=e.setActiveUser;fetch(O).then((function(e){return e.json()})).then((function(e){return t(e)})),setInterval((function(){n()}),8e3)}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.activeUser,r=e.currentPage,a=e.usersLimit,u=(r-1)*a,s=t.slice(u,u+a);return c.a.createElement("div",{className:"users"},s.length?s.map((function(e){return c.a.createElement("div",{key:e.id,className:"user"},c.a.createElement("p",{className:"user-name"},"".concat(e.name," ").concat(e.surname)),c.a.createElement("p",{className:"user-desc"},e.desc))})):'Oops! No users! (run "yarn serve" or "npm run serve" command in terminal and reload page)',n&&c.a.createElement("div",{className:"user user-active"},"".concat(n.name," ").concat(n.surname)))}}]),t}(c.a.Component),y=Object(E.b)((function(e){return{users:e.users,usersLimit:e.pageLimit,currentPage:e.currentPage,activeUser:e.activeUser}}),(function(e){return{setUsers:function(t){return e(function(e){return{type:"SET_USERS",users:e}}(t))},setActiveUser:function(){return e({type:"SET_ACTIVE_USER"})}}}))(U);var P=Object(E.b)((function(e){return{pagesCount:Math.ceil(e.usersCount/e.pageLimit),currentPage:e.currentPage}}),(function(e){return{setPage:function(t){return e(function(e){return{type:"SET_PAGE",page:e}}(t))}}}))((function(e){var t=e.pagesCount,n=e.currentPage,r=e.setPage;return t>1?c.a.createElement("div",{className:"pagination"},Array(t).fill(0).map((function(e,t){var a=t+1,u=n===a?" active":"";return c.a.createElement("div",{key:t,onClick:function(){return r(a)},className:"pagination-item"+u},a)}))):null}));var k=Object(E.b)((function(e){return{usersLimit:e.pageLimit}}),(function(e){return{setUsersLimit:function(t){return e(function(e){return{type:"SET_PAGE_LIMIT",limit:e}}(t))}}}))((function(e){var t=e.usersLimit,n=e.setUsersLimit;return c.a.createElement("div",{className:"limit"},c.a.createElement("span",null,"Per page: "),[3,5,10,20].map((function(e,r){var a=e===t?" active":"";return c.a.createElement("button",{key:r,onClick:function(){return n(e)},className:"limit-btn"+a},e)})))}));var L=function(){return c.a.createElement("section",{className:"container"},c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-top"},c.a.createElement("h1",null,"Users"),c.a.createElement(k,null)),c.a.createElement("hr",null),c.a.createElement(P,null)),c.a.createElement(y,null))};s.a.render(c.a.createElement(E.a,{store:f},c.a.createElement(L,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f958998c.chunk.js.map