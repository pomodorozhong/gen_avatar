parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fz9I":[function(require,module,exports) {
"use strict";function n(n,t,o){void 0===n&&(n="https://github.com/pomodorozhong/github-corners"),void 0===t&&(t="#151513"),void 0===o&&(o="#ffffff");var e=document.createElement("div");document.body.appendChild(e);var r=e.attachShadow({mode:"open"}),a=document.createElement("div");a.innerHTML='\n        <div class="github-corner">\n            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:'+t+"; color:"+o+'; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">\n                <a href="'+n+'" style="pointer-events:auto">\n                    <path d="M0,0 L250,250 L250,0 Z"></path>\n                </a>\n                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;"\n                class="octo-arm"></path>\n                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"\n                fill="currentColor" class="octo-body"></path>\n            </svg>\n        </div>';var i=document.createElement("style");i.textContent="\n        .github-corner:hover .octo-arm {\n            animation: octocat-wave 560ms ease-in-out\n        }\n        \n        .github-corner {\n            pointer-events: none\n        }\n        \n        @keyframes octocat-wave {\n            0%,\n            100% {\n                transform: rotate(0)\n            }\n            20%,\n            60% {\n                transform: rotate(-25deg)\n            }\n            40%,\n            80% {\n                transform: rotate(10deg)\n            }\n        }\n        \n        @media (max-width:500px) {\n            .github-corner:hover .octo-arm {\n                animation: none\n            }\n            .github-corner .octo-arm {\n                animation: octocat-wave 560ms ease-in-out\n            }\n        }",r.appendChild(i),r.appendChild(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.GithubCornerTopRight=void 0,exports.GithubCornerTopRight=n;var t="https://github.com/pomodorozhong/avatar-generator";n(t);
},{}]},{},["fz9I"], null)