parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({44:[function(require,module,exports) {
window.$=document.querySelector.bind(document),window.$$=document.querySelectorAll.bind(document);
},{}],48:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t="en-US",e=exports.getLongMonth=function(e){return new Intl.DateTimeFormat(t,{month:"long"}).format(e)},o=exports.getShortMonth=function(e){return new Intl.DateTimeFormat(t,{month:"short"}).format(e)},r=exports.getShortDay=function(e){return new Intl.DateTimeFormat(t,{weekday:"short"}).format(e)},n=exports.getLongDay=function(e){return new Intl.DateTimeFormat(t,{weekday:"short"}).format(e)};
},{}],37:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupDates=exports.setDefaultState=void 0;var e=require("./helpers/date"),t=exports.setDefaultState=function(){window.history.pushState({page:"calendar"},"Calendar","/")},r=exports.setupDates=function(){var t=new Date,r=(0,e.getLongMonth)(t),a=(0,e.getShortDay)(t);$("#month").innerHTML=r,$("#today-short").innerHTML=a,$("#today-number").innerHTML=t.getDate()};
},{"./helpers/date":48}],46:[function(require,module,exports) {
"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=new Date,r=t.getDate()+"-"+t.getMonth()+"-"+t.getFullYear(),o=exports.events=e({},r,[{from_hour:8,from_minute:20,to_hour:9,to_minute:20,title:"Book flight"},{from_hour:14,from_minute:0,to_hour:15,to_minute:0,title:"Prepare dinner"},{from_hour:20,from_minute:0,to_hour:21,to_minute:0,title:"Pack"}]);
},{}],47:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.showEventDetails=function(e){var t=e.currentTarget;if(document.body.classList.contains("closing-event"))return!1;var i=t.getBoundingClientRect(),n=i.top,r=i.width/window.innerWidth,a=i.height/150;details.style.transform="scaleX("+r+") scaleY("+a+") translateX(33px) translateY("+n+"px)",details.style.transformOrigin="center "+n+"px";var s=JSON.parse(t.dataset.event);details.querySelector("#details-name").innerHTML=s.title;var o=s.from_minute.toLocaleString(void 0,{minimumIntegerDigits:2}),l=s.to_minute.toLocaleString(void 0,{minimumIntegerDigits:2});details.querySelector("#details-hour").innerHTML="Today<br>"+s.from_hour+":"+o+" - "+s.to_hour+":"+l,details.querySelector("#details-category").innerHTML="Events<br><span>\n    joubran.jad@gmail.com\n  </span>",window.history.pushState({page:"details"},s.title,"details"),setTimeout(function(){requestAnimationFrame(function(){document.body.classList.add("show-details")})},40)};
},{}],38:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showTodaysEvents=void 0;var e=require("./testing-events"),t=require("./show-details"),r=exports.showTodaysEvents=function(){var r=new Date,a=r.getDate()+"-"+r.getMonth()+"-"+r.getFullYear(),n=e.events[a];if(!n)return!1;var o=$("#events"),s=!0,i=!1,l=void 0;try{for(var v,d=n[Symbol.iterator]();!(s=(v=d.next()).done);s=!0){var u=v.value,c=u.from_hour,h=u.to_hour,f=c+u.from_minute/60,y=h-c+(u.to_minute-u.from_minute)/60,m=document.createElement("div");m.classList.add("event"),m.style.height="calc("+y+" * var(--calendar-hour))",m.style.transform="translateY(calc("+f+" * var(--calendar-hour))",m.innerHTML=u.title+'<div class="rippleJS"></div>',m.onclick=t.showEventDetails,m.dataset.event=JSON.stringify(u),o.appendChild(m)}}catch(e){i=!0,l=e}finally{try{!s&&d.return&&d.return()}finally{if(i)throw l}}};
},{"./testing-events":46,"./show-details":47}],39:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.showNowBar=function(){var e=new Date,t=e.getHours()+e.getMinutes()/60;$("#now-bar").style.setProperty("--bar-position",t)};
},{}],40:[function(require,module,exports) {
$("#details-close").addEventListener("click",function(){window.history.replaceState({page:"calendar"},"Calendar","/");var e=document.body;e.classList.add("closing-details"),e.classList.remove("show-details"),e.addEventListener("transitionend",function(t){"details"===t.srcElement.getAttribute("id")&&e.classList.remove("closing-details")})});
},{}],41:[function(require,module,exports) {
var i=function(i){t(),i.currentTarget.classList.add("highlighted")},t=function(){var i=$(".calendar .highlighted");i&&i.classList.remove("highlighted")};$$(".hour").forEach(function(t){t.addEventListener("click",i)});
},{}],42:[function(require,module,exports) {
window.addEventListener("popstate",function(e){return e.state&&"calendar"===e.state.page&&$("#details-close").dispatchEvent(new Event("click")),!0});
},{}],43:[function(require,module,exports) {

},{}],45:[function(require,module,exports) {
window.addEventListener("load",function(){function e(e,t){var i=t.target,n=i.classList;if(!n.contains("rippleJS"))return!1;if((o=i.getAttribute("data-event"))&&o!=e)return!1;i.setAttribute("data-event",e);var o,r,s=i.getBoundingClientRect();void 0!==(o=t.offsetX)?r=t.offsetY:(o=t.clientX-s.left,r=t.clientY-s.top);var a=document.createElement("div"),d=2*(s=s.width==s.height?1.412*s.width:Math.sqrt(s.width*s.width+s.height*s.height))+"px";a.style.width=d,a.style.height=d,a.style.marginLeft=-s+o+"px",a.style.marginTop=-s+r+"px",a.className="ripple",i.appendChild(a),window.setTimeout(function(){a.classList.add("held")},0);var l="mousedown"==e?"mouseup":"touchend",c=function(e){document.removeEventListener(l,c),a.classList.add("done"),window.setTimeout(function(){i.removeChild(a),i.children.length||(n.remove("active"),i.removeAttribute("data-event"))},650)};document.addEventListener(l,c)}var t,i;(function(){var e=document.createElement("div");e.className="rippleJS",document.body.appendChild(e);var t="absolute"==window.getComputedStyle(e).position;return document.body.removeChild(e),t})()||(t='/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',(i=document.createElement("style")).type="text/css",i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t)),document.head.insertBefore(i,document.head.firstChild)),document.addEventListener("mousedown",function(t){0==t.button&&e(t.type,t)}),document.addEventListener("touchstart",function(t){for(var i=0;i<t.changedTouches.length;++i)e(t.type,t.changedTouches[i])})});
},{}],18:[function(require,module,exports) {
"use strict";require("./helpers/dom");var e=require("./setup"),r=require("./fill-events"),i=require("./now-bar");require("./details"),require("./highlight"),require("./navigation"),require("./calendars"),require("./../node_modules/vanilla-ripplejs/ripple.min"),(0,e.setDefaultState)(),(0,e.setupDates)(),(0,r.showTodaysEvents)(),(0,i.showNowBar)();
},{"./helpers/dom":44,"./setup":37,"./fill-events":38,"./now-bar":39,"./details":40,"./highlight":41,"./navigation":42,"./calendars":43,"./../node_modules/vanilla-ripplejs/ripple.min":45}]},{},[18], null)
//# sourceMappingURL=js.6d52b225.map