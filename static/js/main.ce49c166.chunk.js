(window["webpackJsonpbaseapp-react"]=window["webpackJsonpbaseapp-react"]||[]).push([[0],{185:function(e,t,n){e.exports=n(384)},190:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(50),c=n.n(o),i=(n(190),n(13)),l=n(14);function u(){var e=Object(i.a)(["\n  color: white;\n"]);return u=function(){return e},e}function s(){var e=Object(i.a)(["\n  color: white;\n  font-size: 50px;\n  font-weight: normal;\n  margin: 20px 0;\n"]);return s=function(){return e},e}function f(){var e=Object(i.a)(["\n  color: #09d3ac;\n  font-size: 40px;\n  span {\n    font-size: 100px;\n  }\n  p {\n    margin: 30px 0 10px;\n    font-size: 24px;\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n  margin: 0;\n  padding: 5px;\n  color: white;\n  span {\n    font-weight: bold;\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex: 1;\n"]);return m=function(){return e},e}function d(){var e=Object(i.a)(["\n  flex: 1;\n"]);return d=function(){return e},e}function h(){var e=Object(i.a)(["\n  display: flex;\n"]);return h=function(){return e},e}function b(){var e=Object(i.a)(["\n  padding: 15px;\n  max-width: 480px;\n"]);return b=function(){return e},e}var g=l.a.div(b()),v=(l.a.div(h()),l.a.div(d())),w=l.a.ul(m()),O=l.a.li(p()),y=Object(l.a)(O)(f()),j=l.a.h1(s()),E=l.a.p(u()),x=r.a.createContext({loading:!0,content:null}),S=n(141),k=n(142),P=n(143),T=n(154),I=n(144),D=n(157),M=n(145),C=n.n(M);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(T.a)(this,Object(I.a)(t).call(this,e))).base=60,n.setTimer=function(){n.base-=1,n.setState({timeToShow:"0:".concat(n.base<10?"0".concat(n.base):n.base)})},n.getStockInfo=function(){n.setState({loading:!0}),n.setState({timeToShow:"1:00"}),C.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EPAM&interval=1min&apikey=3ON1I9KV93O2LPBT").then((function(e){var t=e.data;n.setState({content:t,loading:!1,timeToShow:"1:00"})}))},n.state={loading:!0,content:{},timeToShow:"1:00"},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.getStockInfo(),setInterval(this.setTimer,1e3),setInterval(this.getStockInfo,6e4)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(x.Provider,{value:K({},this.state)},e)}}]),t}(r.a.PureComponent),A=n(20),B=function(e){var t=e.context,n=t.loading,a=t.content,o=t.timeToShow,c=a["Time Series (1min)"];return n?r.a.createElement("p",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,"Next snapshot in: ",o),r.a.createElement(j,null,a["Meta Data"]["2. Symbol"]," STOCK"),function(e){var t=Object.keys(e)[0],n=r.a.createElement("span",null,Number(e[t]["4. close"])),a=t.split(" ")[1];return r.a.createElement(w,null,r.a.createElement(y,{key:t},"Current: ",a," ",n))}(c),function(e){var t=Object.keys(e).map((function(t,n){return{name:t.split(" ")[1].split(":").filter((function(e,t){return 2!==t})).join(":"),open:e[t]["1. open"],high:e[t]["2. high"],low:e[t]["3. low"],close:e[t]["4. close"]}})).slice(0,45).reverse();return r.a.createElement(v,null,r.a.createElement(A.d,{width:350,height:400,data:t,margin:{top:5,right:10,left:10,bottom:5}},r.a.createElement(A.a,{strokeDasharray:"3 3",unit:"5"}),r.a.createElement(A.e,{dataKey:"name"}),r.a.createElement(A.f,{type:"number",domain:["dataMin","dataMax"]}),r.a.createElement(A.b,null),r.a.createElement(A.c,{dot:!1,strokeWidth:3,type:"monotone",dataKey:"close",stroke:"#09d3ac"})))}(c))},W=function(){return r.a.createElement(N,null,r.a.createElement(g,null,r.a.createElement(x.Consumer,null,(function(e){return r.a.createElement(B,{context:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[185,1,2]]]);
//# sourceMappingURL=main.ce49c166.chunk.js.map