// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({34:[function(require,module,exports) {
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);
},{}],39:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var locale = "en-US";

var getLongMonth = exports.getLongMonth = function getLongMonth(date) {
  return new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
};
var getShortMonth = exports.getShortMonth = function getShortMonth(date) {
  return new Intl.DateTimeFormat(locale, { month: "short" }).format(date);
};

var getShortDay = exports.getShortDay = function getShortDay(date) {
  return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
};

var getLongDay = exports.getLongDay = function getLongDay(date) {
  return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
};
},{}],27:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupDates = exports.setDefaultState = undefined;

var _date = require("./helpers/date");

var setDefaultState = exports.setDefaultState = function setDefaultState() {
  window.history.pushState({ page: "calendar" }, "Calendar", "/");
};

var setupDates = exports.setupDates = function setupDates() {
  var date = new Date();

  var month = (0, _date.getLongMonth)(date);
  var shortDay = (0, _date.getShortDay)(date);

  $("#month").innerHTML = month;
  $("#today-short").innerHTML = shortDay;
  $("#today-number").innerHTML = date.getDate();
};
},{"./helpers/date":39}],37:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//for testing
var date = new Date();
var today = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

var events = exports.events = _defineProperty({}, today, [{
  from_hour: 8,
  from_minute: 20,
  to_hour: 9,
  to_minute: 20,
  title: "Book flight"
}, {
  from_hour: 14,
  from_minute: 0,
  to_hour: 15,
  to_minute: 0,
  title: "Prepare dinner"
}, {
  from_hour: 20,
  from_minute: 0,
  to_hour: 21,
  to_minute: 0,
  title: "Pack"
}]);
},{}],38:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showEventDetails = exports.showEventDetails = function showEventDetails(e) {
  var event = e.currentTarget;
  if (document.body.classList.contains("closing-event")) {
    return false;
  }

  var first = event.getBoundingClientRect();

  var translateY = first.top;
  var scaleX = first.width / window.innerWidth;
  var scaleY = first.height / 150;

  // Invert.
  details.style.transform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ") translateX(33px) translateY(" + translateY + "px)";
  details.style.transformOrigin = "center " + translateY + "px";

  var info = JSON.parse(event.dataset.event);

  //set event details
  details.querySelector("#details-name").innerHTML = info.title;
  var from_minute = info.from_minute.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  var to_minute = info.to_minute.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  details.querySelector("#details-hour").innerHTML = "Today<br>" + info.from_hour + ":" + from_minute + " - " + info.to_hour + ":" + to_minute;
  details.querySelector("#details-category").innerHTML = "Events<br><span>\n    joubran.jad@gmail.com\n  </span>";

  window.history.pushState({ page: "details" }, info.title, "details");

  setTimeout(function () {
    requestAnimationFrame(function () {
      document.body.classList.add("show-details");
    });
  }, 40);
};
},{}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTodaysEvents = undefined;

var _testingEvents = require('./testing-events');

var _showDetails = require('./show-details');

//move this to worker thread
var showTodaysEvents = exports.showTodaysEvents = function showTodaysEvents() {
  var date = new Date();
  var today = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

  var todaysEvents = _testingEvents.events[today];
  if (!todaysEvents) {
    return false;
  }
  var container = $("#events");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todaysEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var event = _step.value;

      var from = event.from_hour;
      var to = event.to_hour;

      var position = from + event.from_minute / 60;

      var height = to - from + (event.to_minute - event.from_minute) / 60;

      var entry = document.createElement("div");
      entry.classList.add("event");
      entry.style.height = 'calc(' + height + ' * var(--calendar-hour))';
      entry.style.transform = 'translateY(calc(' + position + ' * var(--calendar-hour))';

      entry.innerHTML = event.title + '<div class="rippleJS"></div>';
      entry.onclick = _showDetails.showEventDetails;
      entry.dataset.event = JSON.stringify(event);
      container.appendChild(entry);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
},{"./testing-events":37,"./show-details":38}],29:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showNowBar = exports.showNowBar = function showNowBar() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

  var position = hour + minute / 60;

  var nowBar = $("#now-bar");
  nowBar.style.setProperty('--bar-position', position);
};
},{}],30:[function(require,module,exports) {
$("#details-close").addEventListener("click", function () {
  window.history.replaceState({ page: "calendar" }, "Calendar", "/");

  var body = document.body;
  body.classList.add("closing-details");
  body.classList.remove("show-details");
  body.addEventListener("transitionend", function (event) {
    if (event.srcElement.getAttribute("id") === "details") {
      body.classList.remove("closing-details");
    }
  });
});
},{}],31:[function(require,module,exports) {
var highlightEvent = function highlightEvent(event) {
  resetHighlights();
  event.currentTarget.classList.add("highlighted");
};

var resetHighlights = function resetHighlights() {
  var highlighted = $(".calendar .highlighted");
  if (highlighted) {
    highlighted.classList.remove("highlighted");
  }
};

$$(".hour").forEach(function (hour) {
  hour.addEventListener("click", highlightEvent);
});
},{}],32:[function(require,module,exports) {
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.page === "calendar") {
    $("#details-close").dispatchEvent(new Event("click"));
  }
  return true;
});
},{}],33:[function(require,module,exports) {

},{}],36:[function(require,module,exports) {
window.addEventListener("load",function(){function n(a){var b=document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));document.head.insertBefore(b,document.head.firstChild)}function g(a,b){var e=b.target,g=e.classList;if(!g.contains("rippleJS"))return!1;var f=e.getAttribute("data-event");if(f&&f!=a)return!1;e.setAttribute("data-event",a);var c=e.getBoundingClientRect(),f=b.offsetX,h;void 0!==f?h=b.offsetY:(f=b.clientX-c.left,
h=b.clientY-c.top);var d=document.createElement("div"),c=c.width==c.height?1.412*c.width:Math.sqrt(c.width*c.width+c.height*c.height),k=2*c+"px";d.style.width=k;d.style.height=k;d.style.marginLeft=-c+f+"px";d.style.marginTop=-c+h+"px";d.className="ripple";e.appendChild(d);window.setTimeout(function(){d.classList.add("held")},0);var l="mousedown"==a?"mouseup":"touchend",m=function(a){document.removeEventListener(l,m);d.classList.add("done");window.setTimeout(function(){e.removeChild(d);e.children.length||
(g.remove("active"),e.removeAttribute("data-event"))},650)};document.addEventListener(l,m)}(function(){var a=document.createElement("div");a.className="rippleJS";document.body.appendChild(a);var b="absolute"==window.getComputedStyle(a).position;document.body.removeChild(a);return b})()||n('/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}');
document.addEventListener("mousedown",function(a){0==a.button&&g(a.type,a)});document.addEventListener("touchstart",function(a){for(var b=0;b<a.changedTouches.length;++b)g(a.type,a.changedTouches[b])})});

},{}],9:[function(require,module,exports) {
"use strict";

require("./helpers/dom");

var _setup = require("./setup");

var _fillEvents = require("./fill-events");

var _nowBar = require("./now-bar");

require("./details");

require("./highlight");

require("./navigation");

require("./calendars");

require("./../node_modules/vanilla-ripplejs/ripple.min");

(0, _setup.setDefaultState)();
// import "./zoom";


(0, _setup.setupDates)();

(0, _fillEvents.showTodaysEvents)();

(0, _nowBar.showNowBar)();
},{"./helpers/dom":34,"./setup":27,"./fill-events":28,"./now-bar":29,"./details":30,"./highlight":31,"./navigation":32,"./calendars":33,"./../node_modules/vanilla-ripplejs/ripple.min":36}],41:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55509' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[41,9], null)
//# sourceMappingURL=/js.956ae3f2.map