(this["webpackJsonpbasic-bmi-calculator"]=this["webpackJsonpbasic-bmi-calculator"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(15),a(1)),o=a(2),s=a(4),m=a(3),h=a(5),u=(a(16),a(7)),g=a.n(u),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).bmiAnalysis=function(e){return e>=30?(document.body.style.backgroundImage="linear-gradient( 107.2deg,  rgba(150,15,15,1) 10.6%, rgba(247,0,0,1) 91.1% )","Obese"):e>=25?(document.body.style.backgroundImage="radial-gradient( circle farthest-corner at 10% 20%,  rgba(205,33,42,1) 0%, rgba(236,95,5,1) 90% )","Overweight"):e<25&&e>18.5?(document.body.style.backgroundImage="linear-gradient( 109.6deg,  rgba(98,210,141,0.88) 11.2%, rgba(234,245,45,0.79) 88% )","Healthy"):(document.body.style.backgroundImage="radial-gradient( circle farthest-corner at 10% 20%,  rgba(205,33,42,1) 0%, rgba(236,95,5,1) 90% )","Underweight")},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.bmiAnalysis(this.props.bmiResult),r.a.createElement("p",null,"Score: ",this.props.bmi))}}]),t}(r.a.Component),b=a(6),v=a.n(b),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={weight:137,height:0,bmi:0},a.handleWeight=function(e){a.setState({weight:e.target.value})},a.handleHeight=function(e){var t=a.toFeet(e.target.value);a.setState({height:e.target.value}),a.setState({heightCalc:t})},a.calcBMI=function(){var e,t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.state.height*a.state.height,t=a.state.weight/e*703,console.log(a.state.bmi),n.next=5,g.a.awrap(a.setState({bmi:t.toFixed(2)}));case 5:console.log(a.state.bmi);case 6:case"end":return n.stop()}}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toFeet",value:function(e){var t=e/12;return Math.floor(t.toFixed(1))+e%12}},{key:"render",value:function(){return r.a.createElement("div",{className:v.a.bmiContainer},r.a.createElement("div",{className:v.a.formGroup},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,0!==this.state.bmi?r.a.createElement(d,{bmi:this.state.bmi,bmiResult:this.state.bmi}):this.props.title)),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"weight"},r.a.createElement("input",{type:"range",min:"2",max:"211",className:"value_range",id:"weightRange",onChange:this.handleWeight}))),r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"label-weight field-text"},this.state.weight)),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"height"},r.a.createElement("input",{type:"range",min:"2",max:"96",className:"value_range",id:"heightRange",onChange:this.handleHeight}))),r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"label-height field-text"},this.state.height)),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"submit",className:v.a.defaultBtn,onClick:this.calcBMI},"GO!")))))}}]),t}(r.a.Component),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Please enter your weight and height"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{title:this.state.title}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports={bmiContainer:"Form_bmiContainer__1geNA",formGroup:"Form_formGroup__Lw0Xw",weight:"Form_weight__3woZK",height:"Form_height__3u2HU",defaultBtn:"Form_defaultBtn__nsLd4"}}},[[10,1,2]]]);
//# sourceMappingURL=main.48928477.chunk.js.map