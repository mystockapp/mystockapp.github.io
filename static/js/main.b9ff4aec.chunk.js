(window["webpackJsonpbaseapp-react"]=window["webpackJsonpbaseapp-react"]||[]).push([[0],{17:function(e,n,t){e.exports=t(29)},22:function(e,n,t){},28:function(e,n,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),o=t.n(c),i=(t(22),t(1)),l=t(2);function u(){var e=Object(i.a)(["\n  color: #09d3ac;\n"]);return u=function(){return e},e}function m(){var e=Object(i.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return m=function(){return e},e}function s(){var e=Object(i.a)(["\n  height: 40vmin;\n"]);return s=function(){return e},e}function g(){var e=Object(i.a)(["\n  text-align: center;\n"]);return g=function(){return e},e}var d=l.a.div(g()),f=l.a.img(s()),v=l.a.header(m()),h=l.a.a(u()),p=a.a.createContext({vars:[],incrementAge:void 0,decrementAge:void 0}),b=t(10),E=t(11),A=t(13),y=t(12),j=t(16),k=function(e){function n(e){var t;return Object(b.a)(this,n),(t=Object(A.a)(this,Object(y.a)(n).call(this,e))).state={vars:[{name:"A",age:20},{name:"B",age:30},{name:"C",age:40}]},t}return Object(j.a)(n,e),Object(E.a)(n,[{key:"modifyAge",value:function(e,n){var t=this.state.vars,r=t.find((function(n){return n.name===e}));r&&(r.age=n?r.age+1:r.age-1),this.setState({vars:t})}},{key:"incrementAge",value:function(e){this.modifyAge(e,!0)}},{key:"decrementAge",value:function(e){this.modifyAge(e)}},{key:"render",value:function(){var e=this.props.children,n=this.state.vars;return a.a.createElement(p.Provider,{value:{vars:n,incrementAge:this.incrementAge,decrementAge:this.decrementAge}},e)}}]),n}(a.a.Component);function w(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 5px 10px;\n  background-color: yellow;\n"]);return w=function(){return e},e}var x=l.a.button(w()),O="inc",C="dec",B=function(e){var n=e.name,t=e.age,r=e.incrementAge,c=e.decrementAge;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,n),a.a.createElement("h3",null,t),a.a.createElement(x,{id:O,type:"button",onClick:function(){return r(n)}},O),a.a.createElement(x,{id:C,type:"button",onClick:function(){return c(n)}},C))};function J(){var e=Object(i.a)(["\n  text-align: center;\n"]);return J=function(){return e},e}var F=l.a.h3(J()),P=function(e){var n=e.children;return a.a.createElement(p.Consumer,null,(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,null,"Vars:"),function(e){var n=e.vars,t=e.incrementAge,r=e.decrementAge;return Object.keys(n).map((function(e){return a.a.createElement(B,{key:e,name:n[e].name,age:n[e].age,incrementAge:t,decrementAge:r})}))}(e),n)}))};P.defaultProps={children:null};var W=t(28),z=function(){return a.a.createElement(k,null,a.a.createElement(d,null,a.a.createElement(v,null,a.a.createElement(f,{src:W,alt:"logo"}),a.a.createElement("p",null,"Edit \xa0",a.a.createElement("code",null,"src/App.jsx"),"\xa0 and save to reload."),a.a.createElement(h,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"React"),a.a.createElement(P,null,"My name is John!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b9ff4aec.chunk.js.map