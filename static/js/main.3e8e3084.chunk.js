(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/tomato.78df75cb.svg"},15:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l),o=(a(21),a(5)),i=a(6),c=a(8),u=a(7),m=a(9),h=a(29),d=a(30),p=a(13),f=a.n(p);a(10),a(22);function E(e,t){for(var a,n=e,r=0;r<e.length;r+=1)(e.charCodeAt(r)<=32||e.charCodeAt(r)>=226)&&(r+=1),(a=e.charCodeAt(r)-33-(t.charCodeAt(r%t.length)-33))<0&&(a+=193),a%=193,n=n.replaceAt(r,String.fromCharCode(a+33));return n}function v(e,t){for(var a,n=e,r=0;r<e.length;r+=1)(e.charCodeAt(r)<=32||e.charCodeAt(r)>=226)&&(r+=1),a=((a=e.charCodeAt(r)-33)+(t.charCodeAt(r%t.length)-33))%193,n=n.replaceAt(r,String.fromCharCode(a+33));return n}function b(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title is-3 is-spaced has-text-white"},"MC-2.0 Cipher"),r.a.createElement("p",{className:"subtitle is-4 has-text-white-ter"},"a low-level string encryption based on vigenere"))}function g(){return r.a.createElement("div",{className:"section"},r.a.createElement("a",{className:"has-text-info has-text-left subtitle is-3",href:"https://drive.google.com/file/d/12FUF_74zSd7J3KBtSvkC8TGALyL-KMHV/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("u",null,"Python Version for File Encryption")))}String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};var w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputField:"",outputField:"",passwordField:""},a.handleInputChange=function(e){a.setState({inputField:e.target.value})},a.handlePasswordChange=function(e){a.setState({passwordField:e.target.value})},a.handleEncryButton=function(){a.setState({outputField:v(a.state.inputField,a.state.passwordField)})},a.handleDecryButton=function(){a.setState({outputField:E(a.state.inputField,a.state.passwordField)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"Column",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half"},r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Enter your text here:"),r.a.createElement("textarea",{value:this.state.inputField,onChange:this.handleInputChange,className:"form-control textarea upperTextbox"}),r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Password:"),r.a.createElement("input",{value:this.state.passwordField,onChange:this.handlePasswordChange,className:"input is-primary",type:"text"}),r.a.createElement("div",{className:"columns innerColumnsStyle is-mobile"},r.a.createElement("button",{onClick:this.handleEncryButton,className:"column button is-white is-fullwidth stylesButton",type:"button"},"encryption"),r.a.createElement("button",{onClick:this.handleDecryButton,className:"column button is-white is-fullwidth stylesButton",type:"button"},"decryption"))),r.a.createElement("div",{className:"column is-half"},r.a.createElement("p",{className:"has-text-white-ter has-text-left subtitle is-5"},"Result:"),r.a.createElement("textarea",{value:this.state.outputField,className:"textarea",type:"text",readOnly:!0})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"cipher-header section has-background-black has-text-centered"},r.a.createElement(b,null),r.a.createElement("div",{className:"container section is-medium"},r.a.createElement("div",null,this.Column()),r.a.createElement(g,null)))}}]),t}(n.Component),y=(a(23),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{titel:"designed by Freepik from Flaticon",src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",{className:"section subtitle is-small"},"designed by Freepik from Flaticon"),r.a.createElement("div",{className:"columns"},r.a.createElement("a",{className:"App-link column",href:"http://tomato-timer.com",target:"_blank",rel:"noopener noreferrer"},"Pomodoro Timer"),r.a.createElement("a",{className:"App-link column is-half",href:"/mc2"},"Advanced Vigenere"))))}}]),t}(n.Component));function C(){return r.a.createElement(w,null)}var N=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{path:"/",exact:!0,component:y}),r.a.createElement(d.a,{path:"/mc2/",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.3e8e3084.chunk.js.map