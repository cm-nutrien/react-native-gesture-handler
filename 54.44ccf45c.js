(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{201:function(e,t,a){"use strict";var n=a(0),r=a(203);t.a=function(){return Object(n.useContext)(r.a)}},202:function(e,t,a){"use strict";var n=a(189),r=a(201),c=a(190),o=a(200);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,m=i.href||t,u={};i.target?u={target:i.target}:Object(o.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var b=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(b),logoAlt:i.alt}}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},205:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(208),o=a(200),l=a(189),i=a(190),s="",m="dark",u=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),u=Object(n.useCallback)((function(){c(m),o(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:i,setDarkTheme:u}},b=a(203);var d=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(b.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(192),a(191),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var g=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},h=a(127),E=a.n(h);var k=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,i=a.backgroundColor,s=a.textColor,m=Object(n.useState)(!0),u=m[0],b=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&b(!1)}),[]),!o||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),b(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},p=a(2),O=(a(209),a(9)),j=a(197),_=a.n(j),w=a(199),N=a(204),C=a(212),y=a.n(C),S=a(128),T=a.n(S),L=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.moon)})},D=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.sun)})},I=function(e){var t=Object(l.a)().isClient;return r.a.createElement(y.a,Object(p.a)({disabled:!t,icons:{checked:r.a.createElement(L,null),unchecked:r.a.createElement(D,null)}},e))},x=a(201),B=a(210);var M=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},G=a(52),H=function(){return{scrollX:G.a.canUseDOM?window.pageXOffset:0,scrollY:G.a.canUseDOM?window.pageYOffset:0}},P=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(H()),r=a[0],c=a[1],o=function(){var t=H();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r},U=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),b=u[0],d=u[1],f=Object(n.useCallback)((function(e){null!==e&&d(e.getBoundingClientRect().height)}),[]),v=Object(B.b)(),g=M(v.hash),h=g[0],E=g[1];return P((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<b))){if(o)return l(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-b,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,b]),Object(n.useEffect)((function(){e&&(r(!0),E(v.hash))}),[v]),Object(n.useEffect)((function(){e&&h&&l(!0)}),[h]),{navbarRef:f,isNavbarVisible:a}},R=a(205),A=a(202),W=a(206),F=a(129),V=a.n(F);function Y(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,m=e.prependBaseUrlToHref,u=Object(O.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(i.a)(n),d=Object(i.a)(t),f=Object(i.a)(c,!0);return r.a.createElement(w.a,Object(p.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?f:c}:Object.assign({isNavLink:!0,activeClassName:s,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(d)}}:null),u),o)}function J(e){var t=e.items,a=e.position,n=e.className,c=Object(O.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),_()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(Y,Object(p.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(O.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(p.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(Y,Object(p.a)({className:o(n)},c))}function K(e){var t=e.items,a=(e.position,e.className),n=Object(O.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),_()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(p.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(O.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(p.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(p.a)({className:c(a)},n)))}var X=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,m=void 0===s?[]:s,u=o.hideOnScroll,b=void 0!==u&&u,d=c.disableDarkMode,f=void 0!==d&&d,v=a.isClient,g=Object(n.useState)(!1),h=g[0],E=g[1],k=Object(n.useState)(!1),O=k[0],j=k[1],C=Object(x.a)(),y=C.isDarkTheme,S=C.setLightTheme,T=C.setDarkTheme,L=U(b),D=L.navbarRef,B=L.isNavbarVisible,M=Object(A.a)(),G=M.logoLink,H=M.logoLinkProps,P=M.logoImageUrl,F=M.logoAlt;Object(R.a)(h);var Y=Object(n.useCallback)((function(){E(!0)}),[E]),X=Object(n.useCallback)((function(){E(!1)}),[E]),q=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:D,className:_()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":h},e[V.a.navbarHideable]=b,e[V.a.navbarHidden]=!B,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(w.a,Object(p.a)({className:"navbar__brand",to:G},H),null!=i&&r.a.createElement("strong",{className:_()("navbar__title",(t={},t[V.a.hideLogoText]=O,t))},i))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(J,Object(p.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(W.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(J,Object(p.a)({},e,{key:t}))})),!f&&r.a.createElement(I,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:q}),r.a.createElement(N.a,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(w.a,Object(p.a)({className:"navbar__brand",onClick:X,to:G},H),null!=P&&r.a.createElement("img",{key:v,className:"navbar__logo",src:P,alt:F}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&h&&r.a.createElement(I,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement(K,Object(p.a)({},e,{onClick:X,key:t}))})))))))};a(130);var q=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(i.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(w.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(W.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null};a(131);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,m=a.themeConfig.image,u=a.url,b=e.children,f=e.title,v=e.noFooter,h=e.description,E=e.image,p=e.keywords,O=e.permalink,j=e.version,_=f?f+" | "+s:s,w=E||m,N=u+Object(i.a)(w);Object(o.a)(w)||(N=w);var C=Object(i.a)(n);return r.a.createElement(d,null,r.a.createElement(g,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),j&&r.a.createElement("meta",{name:"docsearch:version",content:j}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:N}),w&&r.a.createElement("meta",{property:"twitter:image",content:N}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),O&&r.a.createElement("meta",{property:"og:url",content:u+O}),O&&r.a.createElement("link",{rel:"canonical",href:u+O}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(X,null),r.a.createElement("div",{className:"main-wrapper"},b),!v&&r.a.createElement(q,null)))}},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(207);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);