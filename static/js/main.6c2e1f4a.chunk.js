(window["webpackJsonpbaseapp-react"]=window["webpackJsonpbaseapp-react"]||[]).push([[0],{182:function(n,e,t){n.exports=t(381)},187:function(n,e,t){},381:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(51),c=t.n(o),i=(t(187),t(10)),l=t(11);function u(){var n=Object(i.a)(["\n  color: white;\n"]);return u=function(){return n},n}function m(){var n=Object(i.a)(["\n  color: white;\n  font-size: 50px;\n  font-weight: normal;\n  margin: 0;\n"]);return m=function(){return n},n}function s(){var n=Object(i.a)(["\n  color: #09d3ac;\n  font-size: 40px;\n  span {\n    font-size: 100px;\n  }\n  p {\n    margin: 30px 0 10px;\n    font-size: 24px;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n  margin: 0;\n  padding: 5px;\n  color: white;\n  span {\n    font-weight: bold;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(i.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex: 1;\n"]);return d=function(){return n},n}function p(){var n=Object(i.a)(["\n  flex: 1;\n"]);return p=function(){return n},n}function h(){var n=Object(i.a)(["\n  display: flex;\n"]);return h=function(){return n},n}function v(){var n=Object(i.a)(["\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n"]);return v=function(){return n},n}function g(){var n=Object(i.a)(["\n  padding: 15px;\n  max-width: 480px;\n"]);return g=function(){return n},n}var w=l.a.div(g()),E=l.a.button(v()),b=(l.a.div(h()),l.a.div(p())),y=l.a.ul(d()),x=l.a.li(f()),O=Object(l.a)(x)(s()),j=l.a.h1(m()),k=l.a.p(u()),S=r.a.createContext(),I=t(32),T=t(143),M=t(144),D=t.n(M),N=t(52),C=t.n(N),z="https://www.alphavantage.co/query?function=".concat("TIME_SERIES_INTRADAY","&symbol=").concat("EPAM","&interval=").concat("1min","&apikey=").concat("3ON1I9KV93O2LPBT"),A=[15,22],B="day",J=8,K=5,P=window.localStorage,W=function(n){var e,t=n.children,a=r.a.useState(!0),o=Object(I.a)(a,2),c=o[0],i=o[1],l=r.a.useState({}),u=Object(I.a)(l,2),m=u[0],s=u[1],f=r.a.useState("in: 1:00"),d=Object(I.a)(f,2),p=d[0],h=d[1],v=function(n){return C()().add(n,B)},g=function(){var n=new Date,e=Number(n.getHours());return!n.getDay()%6===0&&e>=A[0]&&e<A[1]},w=60,E=function(){var n;h("in: 0:".concat((n=w-=1)<10?"0".concat(n):n))},b=function(n){i(!1),s(n)},y=function(n){var t=n.data;P.setItem("mystockstore",JSON.stringify(t)),e=g()&&setInterval(E,1e3),b(t)},x=function(n){clearInterval(e),b(n)},O=function(){var n=g();h(n?"in: 1:00":" ".concat(function(){var n=C()().weekday();return v(n<K?1:-n+J).format("MMM DD")}()," from ").concat("15:00 CET (9AM PST)")),n&&(P.removeItem("mystockstore"),w=60,i(!0),clearInterval(e));var t=JSON.parse(P.getItem("mystockstore"));t?b(t):D.a.get(z).then(y).catch(x)};return r.a.useEffect((function(){O(),setInterval(O,6e4),Object(T.disableBodyScroll)(document.querySelector("#root"))}),[]),r.a.createElement(S.Provider,{value:{loading:c,content:m,timeToShow:p}},t)},q=t(20),F=function(n){var e=n.context,t=e.loading,a=e.content,o=e.timeToShow,c=a["Time Series (1min)"];return t?r.a.createElement("p",null,"loading..."):c?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onClick:function(){window.location.reload()}}),r.a.createElement(k,null,"Next snapshot ",o),r.a.createElement(j,null,r.a.createElement("strong",null,a["Meta Data"]["2. Symbol"])," STOCK"),function(n){var e=Object.keys(n)[0],t=r.a.createElement("span",null,Number(n[e]["4. close"])),a=e.split(" "),o=Object(I.a)(a,2),c=o[0],i=o[1];return r.a.createElement(y,null,r.a.createElement("p",null,"Date: ",c),r.a.createElement(O,null,"Time: ",i," ",t))}(c),function(n){var e=Object.keys(n).map((function(e,t){return{name:e.split(" ")[1].split(":").filter((function(n,e){return 2!==e})).join(":"),open:n[e]["1. open"],high:n[e]["2. high"],low:n[e]["3. low"],close:n[e]["4. close"]}})).slice(0,45).reverse();return r.a.createElement(b,null,r.a.createElement(q.d,{width:350,height:375,data:e,margin:{top:5,right:10,left:10,bottom:5}},r.a.createElement(q.a,{strokeDasharray:"3 3",unit:"5"}),r.a.createElement(q.e,{dataKey:"name"}),r.a.createElement(q.f,{type:"number",domain:["dataMin","dataMax"]}),r.a.createElement(q.b,null),r.a.createElement(q.c,{dot:!1,strokeWidth:3,type:"monotone",dataKey:"close",stroke:"#09d3ac"})))}(c)):function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"The following error(s) occured"),r.a.createElement("ul",null,Object.keys(n).map((function(e){return r.a.createElement("li",null,n[e])}))))}(a)},R=function(){return r.a.createElement(W,null,r.a.createElement(w,null,r.a.createElement(S.Consumer,null,(function(n){return r.a.createElement(F,{context:n})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[182,1,2]]]);
//# sourceMappingURL=main.6c2e1f4a.chunk.js.map