(window.webpackJsonpmosing=window.webpackJsonpmosing||[]).push([[0],{61:function(e,t,n){e.exports=n(91)},75:function(e,t){},77:function(e,t){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(12),i=n(15),c=n.n(i),s=n(23),l=n(32),u=n(54),p=function(e,t){return{type:"WORLD_MAP_GET_TRAVEL",travel:e,error:t}},h=function(e){var t={routes:[]};return e.elements[0].elements.forEach((function(e){var n={label:e.attributes.part,options:[]};t.routes.push(n),e.elements.forEach((function(e){var t={label:e.elements[0].elements[0].text,value:"".concat(e.elements[1].elements[0].text,";").concat(e.elements[2].elements[0].text)};n.options.push(t)}))})),t},f=n(5),v=n(4),d=n(6),m=n(7),g=n(8),w=n(94),b=n(95),y=n(93),k=n(96),E=(n(52),n(60)),O=(n(89),n(10)),j=n.n(O),x=n(55),A=n.n(x),R=n(56),M=n.n(R),W=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.props.setMarker(e)},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.icon({iconUrl:A.a,shadowUrl:M.a}),j.a.Marker.prototype.options.icon=t,e.next=4,this.props.getTravelAsync();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[this.props.map.lat,this.props.map.long];if(this.props.marker){var t=this.props.marker.value.split(";");e=[parseFloat(t[0]),parseFloat(t[1])]}return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{center:e,zoom:this.props.map.zoom,style:{width:"100%",height:"100vh"}},o.a.createElement(b.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.props.marker&&o.a.createElement(y.a,{position:e},o.a.createElement(k.a,null,this.props.marker.label))),o.a.createElement("div",{className:"select"},o.a.createElement(E.a,{options:this.props.travel?this.props.travel.routes:void 0,onChange:this.handleChange,isClearable:!0})))}}]),t}(o.a.Component),T=Object(l.b)((function(e){return e.WorldMapReducer.payload}),(function(e){return{getTravelAsync:function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./Travel.xml",{method:"GET"});case 3:return n=e.sent,e.t0=t,e.t1=p,e.t2=h,e.t3=u.xml2js,e.next=10,n.text();case 10:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=(0,e.t2)(e.t5),e.t7=(0,e.t1)(e.t6,""),(0,e.t0)(e.t7),e.next=21;break;case 17:e.prev=17,e.t8=e.catch(0),t(p(null,e.t8)),console.log(e.t8);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),setMarker:function(t){return e({type:"WORLD_MAP_SET_MARKER",marker:t})}}}))(W),_=function(){return o.a.createElement(T,null)},C=n(20),L=n(58),P=n(59),S={type:"",payload:{map:{lat:51.505,long:-.09,zoom:13},travel:null,marker:null,error:""}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return Object(P.a)(e,(function(e){"WORLD_MAP_GET_TRAVEL"===t.type?e.payload.travel=t.travel:"WORLD_MAP_SET_MARKER"===t.type&&(e.payload.marker=t.marker)}))},U=Object(C.c)({WorldMapReducer:D}),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.d(t,"store",(function(){return N}));var G,N=(G=void 0,Object(C.d)(U,G,Object(C.a)(L.a)));a.render(r.createElement(l.a,{store:N},r.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mosing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mosing","/service-worker.js");z?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.0c6b9f27.chunk.js.map