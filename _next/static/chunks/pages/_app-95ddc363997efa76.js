(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(100)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var b=(t=l.default.Children.only(m))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],N=l.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);l.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,g,r,n]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,h,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof g?g:n&&n.locale,_=n&&n.isLocaleDomain&&i.getDomainLocale(p,O,n&&n.locales,n&&n.domainLocales);E.href=_||i.addBasePath(i.addLocale(p,O,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),h=m[0],v=m[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d]};var a=r(7294),l=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},100:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),o=(r(906),r(6270),r(1664));function a(){return(0,n.jsx)("svg",{className:"fill-neutral-500 hover:fill-neutral-300 transition-colors cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:(0,n.jsx)("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})})}function l(){return(0,n.jsx)("header",{className:"md:mb-8 bg-dark-blog",children:(0,n.jsxs)("div",{className:"container flex items-center justify-between py-8 mx-auto p-4 lg:px-32",children:[(0,n.jsx)(o.default,{passHref:!0,href:"/",children:(0,n.jsx)("span",{className:"text-2xl md:text-3xl font-lobster cursor-pointer text-secondary-blog",children:"Mehdi's Engineering Blog"})}),(0,n.jsx)("a",{href:"https://www.github.com/mhdi-kr",referrerPolicy:"no-referrer",children:(0,n.jsx)(a,{})})]})})}function i(){return(0,n.jsx)("footer",{className:"bg-dark-blog text-center p-2",children:(0,n.jsxs)("time",{className:"text-white text-xs",children:["2019 - ",(new Date).getFullYear()]})})}var c,u=function(e){var t;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("aside",{className:e.className,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("p",{className:"font-medium mb-1 text-gray-600",children:"recently posted"}),(0,n.jsx)("ul",{className:"text-gray-500",children:null===e||void 0===e||null===(t=e.posts)||void 0===t?void 0:t.slice(0,5).map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{passHref:!0,href:"/blog/".concat(e.slug),children:(0,n.jsx)("a",{className:"text-xs mt-0",children:e.frontmatter.title})})},t)}))})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("p",{className:"font-medium mb-2 text-gray-600",children:"Tags"}),(0,n.jsx)("ul",{className:"text-gray-500 flex flex-wrap",children:Object.values(c).map((function(e){return e})).sort((function(e,t){return t.length-e.length})).map((function(e,t){return(0,n.jsx)("li",{className:"mr-1 mb-1 text-xs bg-gray-100 p-1 rounded cursor-pointer",children:e},t)}))})]})]})})};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}!function(e){e.TUTORIAL="tutorial",e.EMBEDED="embeded",e.FRONTEND="frontend",e.BACKEND="backend",e.DEVOPS="devops",e.TEST="test",e.LIFE="life"}(c||(c={}));var d=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsxs)("section",{className:"container flex flex-col md:flex-row items-start px-4 md:p-4 lg:px-32 mx-auto",children:[(0,n.jsx)("main",{className:"w-full md:w-2/3 pb-8",children:(0,n.jsx)(t,f({},r))}),(0,n.jsx)(u,f({className:"md:p-8 w-full md:w-1/3 text-sm sticky top-0"},r))]}),(0,n.jsx)(i,{})]})}},906:function(){},6270:function(){},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);