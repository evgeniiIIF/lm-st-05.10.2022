(function(){"use strict";function t(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(t,r){if(r)t:{var o=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var u=t[i];if(!(u in o))break t;o=o[u]}(r=r(i=o[t=t[t.length-1]]))!=i&&null!=r&&e(o,t,{configurable:!0,writable:!0,value:r})}}function o(t){return(t={next:t})[Symbol.iterator]=function(){return this},t}function i(e){var n="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return n?n.call(e):{next:t(e)}}function u(t){if(!(t instanceof Array)){t=i(t);for(var e,n=[];!(e=t.next()).done;)n.push(e.value);t=n}return t}function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r("Symbol",(function(t){function n(t,n){this.g=t,e(this,"description",{configurable:!0,writable:!0,value:n})}if(t)return t;n.prototype.toString=function(){return this.g};var r="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",o=0;return function t(e){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new n(r+(e||"")+"_"+o++,e)}})),r("Symbol.iterator",(function(r){if(r)return r;r=Symbol("Symbol.iterator");for(var i="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),u=0;u<i.length;u++){var a=n[i[u]];"function"==typeof a&&"function"!=typeof a.prototype[r]&&e(a.prototype,r,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return r})),r("WeakMap",(function(t){function n(t){if(this.g=(l+=Math.random()+1).toString(),t){t=i(t);for(var e;!(e=t.next()).done;)e=e.value,this.set(e[0],e[1])}}function r(){}function o(t){var e=typeof t;return"object"===e&&null!==t||"function"===e}function u(t){if(!a(t,c)){var n=new r;e(t,c,{value:n})}}function s(t){var e=Object[t];e&&(Object[t]=function(t){return t instanceof r?t:(Object.isExtensible(t)&&u(t),e(t))})}if(function(){if(!t||!Object.seal)return!1;try{var e=Object.seal({}),n=Object.seal({}),r=new t([[e,2],[n,3]]);return 2==r.get(e)&&3==r.get(n)&&(r.delete(e),r.set(n,4),!r.has(e)&&4==r.get(n))}catch(t){return!1}}())return t;var c="$jscomp_hidden_"+Math.random();s("freeze"),s("preventExtensions"),s("seal");var l=0;return n.prototype.set=function(t,e){if(!o(t))throw Error("Invalid WeakMap key");if(u(t),!a(t,c))throw Error("WeakMap key fail: "+t);return t[c][this.g]=e,this},n.prototype.get=function(t){return o(t)&&a(t,c)?t[c][this.g]:void 0},n.prototype.has=function(t){return o(t)&&a(t,c)&&a(t[c],this.g)},n.prototype.delete=function(t){return!!(o(t)&&a(t,c)&&a(t[c],this.g))&&delete t[c][this.g]},n})),r("Map",(function(t){function e(){var t={};return t.previous=t.next=t.head=t}function n(t,e){var n=t.g;return o((function(){if(n){for(;n.head!=t.g;)n=n.previous;for(;n.next!=n.head;)return n=n.next,{done:!1,value:e(n)};n=null}return{done:!0,value:void 0}}))}function r(t,e){var n=e&&typeof e;"object"==n||"function"==n?s.has(e)?n=s.get(e):(n=""+ ++c,s.set(e,n)):n="p_"+e;var r=t.data_[n];if(r&&a(t.data_,n))for(t=0;t<r.length;t++){var o=r[t];if(e!=e&&o.key!=o.key||e===o.key)return{id:n,list:r,index:t,h:o}}return{id:n,list:r,index:-1,h:void 0}}function u(t){if(this.data_={},this.g=e(),this.size=0,t){t=i(t);for(var n;!(n=t.next()).done;)n=n.value,this.set(n[0],n[1])}}if(function(){if(!t||"function"!=typeof t||!t.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),n=new t(i([[e,"s"]]));if("s"!=n.get(e)||1!=n.size||n.get({x:4})||n.set({x:4},"t")!=n||2!=n.size)return!1;var r=n.entries(),o=r.next();return!o.done&&o.value[0]==e&&"s"==o.value[1]&&!((o=r.next()).done||4!=o.value[0].x||"t"!=o.value[1]||!r.next().done)}catch(t){return!1}}())return t;var s=new WeakMap;u.prototype.set=function(t,e){var n=r(this,t=0===t?0:t);return n.list||(n.list=this.data_[n.id]=[]),n.h?n.h.value=e:(n.h={next:this.g,previous:this.g.previous,head:this.g,key:t,value:e},n.list.push(n.h),this.g.previous.next=n.h,this.g.previous=n.h,this.size++),this},u.prototype.delete=function(t){return!(!(t=r(this,t)).h||!t.list)&&(t.list.splice(t.index,1),t.list.length||delete this.data_[t.id],t.h.previous.next=t.h.next,t.h.next.previous=t.h.previous,t.h.head=null,this.size--,!0)},u.prototype.clear=function(){this.data_={},this.g=this.g.previous=e(),this.size=0},u.prototype.has=function(t){return!!r(this,t).h},u.prototype.get=function(t){return(t=r(this,t).h)&&t.value},u.prototype.entries=function(){return n(this,(function(t){return[t.key,t.value]}))},u.prototype.keys=function(){return n(this,(function(t){return t.key}))},u.prototype.values=function(){return n(this,(function(t){return t.value}))},u.prototype.forEach=function(t,e){for(var n,r=this.entries();!(n=r.next()).done;)n=n.value,t.call(e,n[1],n[0],this)},u.prototype[Symbol.iterator]=u.prototype.entries;var c=0;return u})),r("Set",(function(t){function e(t){if(this.g=new Map,t){t=i(t);for(var e;!(e=t.next()).done;)this.add(e.value)}this.size=this.g.size}return function(){if(!t||"function"!=typeof t||!t.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),n=new t(i([e]));if(!n.has(e)||1!=n.size||n.add(e)!=n||1!=n.size||n.add({x:4})!=n||2!=n.size)return!1;var r=n.entries(),o=r.next();return!o.done&&o.value[0]==e&&o.value[1]==e&&(!(o=r.next()).done&&o.value[0]!=e&&4==o.value[0].x&&o.value[1]==o.value[0]&&r.next().done)}catch(t){return!1}}()?t:(e.prototype.add=function(t){return t=0===t?0:t,this.g.set(t,t),this.size=this.g.size,this},e.prototype.delete=function(t){return t=this.g.delete(t),this.size=this.g.size,t},e.prototype.clear=function(){this.g.clear(),this.size=0},e.prototype.has=function(t){return this.g.has(t)},e.prototype.entries=function(){return this.g.entries()},e.prototype.values=function(){return this.g.values()},e.prototype.keys=e.prototype.values,e.prototype[Symbol.iterator]=e.prototype.values,e.prototype.forEach=function(t,e){var n=this;this.g.forEach((function(r){return t.call(e,r,r,n)}))},e)})),r("String.prototype.endsWith",(function(t){return t||function(t,e){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(t instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var n=this+"";t+="",void 0===e&&(e=n.length),e=Math.max(0,Math.min(0|e,n.length));for(var r=t.length;0<r&&0<e;)if(n[--e]!=t[--r])return!1;return 0>=r}}));var s=this||self;function c(t,e){t=t.split(".");var n,r=s;t[0]in r||void 0===r.execScript||r.execScript("var "+t[0]);for(;t.length&&(n=t.shift());)t.length||void 0===e?r=r[n]&&r[n]!==Object.prototype[n]?r[n]:r[n]={}:r[n]=e}var l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f(t){return t?decodeURI(t):t}var h,p,d=s.window;c("yt.config_",(null==d||null==(h=d.yt)?void 0:h.config_)||(null==d||null==(p=d.ytcfg)?void 0:p.data_)||{});var y=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),v=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),g=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),b=Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),m=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function x(){return y.map((function(t){return function(t){var e=t.split(".");return t=e[e.length-1],(e=e.reduce((function(t,e){return t&&t[e]}),window))?(e=Function.prototype.toString.call(e).replace(/\n/g," ").replace(/  +/g," "))!="function "+t+"() { [native code] }"?t+" is not native, prologue: "+e.slice(0,50):null:t+" is missing"}(t)})).filter((function(t){return!!t}))}function w(t){var e=t.match(l)[1]||null;return m.some((function(t){return e==t}))}function j(t){var e=f(t.match(l)[3]||null);return!(e&&!w(t))||(v.some((function(t){return e==t}))||b.some((function(t){return e.endsWith(t)})))}function S(){var t=new Set;return[].concat(u(document.querySelectorAll("script"))).forEach((function(e){e.src&&(e=function(t){if(!w(t))return null;var e=f(t.match(l)[3]||null);return e?g.some((function(t){return e==t}))?null:e:null}(e.src))&&t.add(e)})),[].concat(u(t)).sort()}c("ytbin.polymer.shared.lib.tampering.info",(function(){var t=function(){var t=new Set;return[].concat(u(document.querySelectorAll("script"))).forEach((function(e){e.src&&!j(e.src)&&t.add(e.src)})),[].concat(u(document.querySelectorAll("link[href]"))).forEach((function(e){"alternate"==e.rel||j(e.href)||t.add(e.href)})),[].concat(u(t)).sort()}(),e=x(),n=S(),r=[];return n.length&&r.push("extensions",n),t.length&&r.push("suspiciousIncludes",t),e.length&&r.push("suspiciousApis",e),r.length?r:null}))}).call(this);