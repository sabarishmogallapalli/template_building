(self.webpackChunkPortfolio_Website_Template=self.webpackChunkPortfolio_Website_Template||[]).push([[630],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,a=new RegExp("^"+i.source),s=new RegExp(i.source+o.source,"gu"),c=new RegExp("\\d+"+o.source,"gu"),l=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),l=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?l(e):i(e);return e!==i(e)&&(e=((e,n,o)=>{let i=!1,a=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];i&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),i=!1,s=a,a=!0,c++):a&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=a,a=!1,i=!0):(i=n(l)===l&&o(l)!==l,s=a,a=o(l)===l&&n(l)!==l)}return e})(e,i,l)),e=e.replace(a,""),e=o.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),o.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,r){"use strict";r.d(t,{L:function(){return m},M:function(){return E},P:function(){return T},S:function(){return F},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return f},h:function(){return c}});var n=r(7294),o=(r(3204),r(5697)),i=r.n(o);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,o){return void 0===o&&(o={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},o,{opacity:t?1:0})})}function f(e,t,r,n,o,i,s,c){const l={};i&&(l.backgroundColor=i,"fixed"===r?(l.width=n,l.height=o,l.backgroundColor=i,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const p=["children"],d=function(e){let{layout:t,width:r,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(d,a({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],g=function(e){let{src:t,srcSet:r,loading:o,alt:i="",shouldLoad:c}=e,l=s(e,h);return n.createElement("img",a({},l,{decoding:"async",loading:o,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:i}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:o=!0}=e,i=s(e,y);const c=i.sizes||(null==t?void 0:t.sizes),l=n.createElement(g,a({},i,t,{sizes:c,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,sizes:c})})),l):l};var v;g.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};T.displayName="Placeholder",T.propTypes={fallback:o.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,a({},e)),n.createElement("noscript",null,n.createElement(b,a({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],S=e=>e.replace(/\n/g,""),A=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),a=3;a<n;a++)o[a-3]=arguments[a];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(o)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:A},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set;let P,N;const I=function(e){let{as:t="div",image:o,style:i,backgroundColor:u,className:f,class:p,onStartLoad:d,onLoad:m,onError:h}=e,y=s(e,x);const{width:g,height:b,layout:v}=o,w=l(g,b,v),{style:T,className:E}=w,C=s(w,j),O=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(f=p);const A=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,g,b);return(0,n.useEffect)((()=>{P||(P=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==d||d({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(S);if(N&&L.has(S))return;let t,n;return P.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;O.current&&(O.current.innerHTML=r(a({isLoading:!0,isLoaded:L.has(S),image:o},y)),L.has(S)||(t=requestAnimationFrame((()=>{O.current&&(n=s(O.current,S,L,i,d,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{L.has(S)&&N&&(O.current.innerHTML=N(a({isLoading:L.has(S),isLoaded:L.has(S),image:o},y)),null==d||d({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(t,a({},C,{style:a({},T,i,{backgroundColor:u}),className:E+(f?" "+f:""),ref:O,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));_.propTypes=k,_.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:r,__imageData:o,__error:i}=t,c=s(t,M);return i&&console.warn(i),o?n.createElement(e,a({image:o},c)):(console.warn("Image not loaded",r),null)}}const z=R((function(e){let{as:t="div",className:r,class:o,style:i,image:c,loading:p="lazy",imgClassName:d,imgStyle:h,backgroundColor:y,objectFit:g,objectPosition:b}=e,v=s(e,C);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(r=o),h=a({objectFit:g,objectPosition:b,backgroundColor:y},h);const{width:w,height:A,layout:k,images:x,placeholder:j,backgroundColor:L}=c,P=l(w,A,k),{style:N,className:I}=P,_=s(P,O),M={fallback:void 0,sources:[]};return x.fallback&&(M.fallback=a({},x.fallback,{srcSet:x.fallback.srcSet?S(x.fallback.srcSet):void 0})),x.sources&&(M.sources=x.sources.map((e=>a({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,a({},_,{style:a({},N,i,{backgroundColor:y}),className:I+(r?" "+r:"")}),n.createElement(m,{layout:k,width:w,height:A},n.createElement(T,a({},f(j,!1,k,w,A,L,g,b))),n.createElement(E,a({"data-gatsby-image-ssr":"",className:d},v,u("eager"===p,!1,M,p,h)))))})),q=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:A,width:q,height:q,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=W;const F=R(_);F.displayName="StaticImage",F.propTypes=W},4120:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=r(471),i=r(3700);let a=20;function s(e){switch(e){case i.iL:return n.createElement(o.$GO,{size:a});case i.qr:return n.createElement(o.Mdg,{size:a});case i.HO:return n.createElement(o.qo$,{size:a});case i.m2:return n.createElement(o.Ffv,{size:a});case"arrow":return n.createElement(o.fWx,{size:a})}}var c=r(1883);function l(e){return n.createElement("div",{className:"pl-7 pt-3 text-md xl:text-lg 2xl:text-xl"},n.createElement("a",{href:(0,c.withPrefix)(e.href),id:"no-link",className:"z-50 relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold primary-color-text transition-all duration-150 ease-in-out rounded-xl hover:pl-9 hover:pr-3 bg-opacity-0 group"},n.createElement("span",{className:"absolute bottom-0 left-0 w-0 h-full transition-all duration-100 ease-in-out primary-color-bg group-hover:w-full"}),n.createElement("span",{className:"absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"},s(e.icon)),n.createElement("span",{className:"absolute left-0 pl-2.5 -translate-x-12 cool-button-text-color group-hover:translate-x-0 ease-out duration-150"},s("arrow")),n.createElement("span",{className:"relative w-full text-left transition-colors duration-200 ease-in-out group-hover:cool-button-text-color"},e.buttonTitle)))}},8810:function(e,t,r){"use strict";r.d(t,{Z:function(){return he}});var n,o,i,a,s=r(7294),c=r(5697),l=r.n(c),u=r(3524),f=r.n(u),p=r(9590),d=r.n(p),m=r(4852),h=r.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",A="name",k="property",x="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=J(e,v.TITLE),r=J(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,N);return t||n||void 0},K=function(e){return J(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==T&&s!==S||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=h()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),Z=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:r.g.cancelAnimationFrame||Z,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ae(v.BODY,n),ae(v.HTML,o),ie(f,p);var d={baseTag:se(v.BASE,r),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,s),scriptTags:se(v.SCRIPT,l),styleTags:se(v.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(v.TITLE,t)},ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+H+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(H,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=le(r,n),[s.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ce(r),i=oe(t);return o?"<"+e+" "+H+'="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+" "+H+'="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return le(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+" "+H+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ue(v.BASE,t,n),bodyAttributes:ue(y,r,n),htmlAttributes:ue(g,o,n),link:ue(v.LINK,i,n),meta:ue(v.META,a,n),noscript:ue(v.NOSCRIPT,s,n),script:ue(v.SCRIPT,c,n),style:ue(v.STYLE,l,n),title:ue(v.TITLE,{title:f,titleAttributes:p},n)}},pe=f()((function(e){return{baseTag:G([E,L],e),bodyAttributes:V(y,e),defer:J(e,I),encode:J(e,_),htmlAttributes:V(g,e),linkTags:$(v.LINK,[x,E],e),metaTags:$(v.META,[A,w,C,k,S],e),noscriptTags:$(v.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:$(v.SCRIPT,[j,O],e),styleTags:$(v.STYLE,[T],e),title:Y(e),titleAttributes:V(b,e)}}),(function(e){re&&ee(re),e.defer?re=X((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return D({},o,((t={})[n.type]=a,t.titleAttributes=D({},i),t));case v.BODY:return D({},o,{bodyAttributes:D({},i)});case v.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((r={})[n.type]=D({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(B(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind;var me=r(220);function he(){return s.createElement(de,null,s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,me.jG),s.createElement("meta",{name:"description",content:me.kr}),s.createElement("meta",{name:"keywords",content:me.aQ}),s.createElement("link",{rel:"canonical",href:me._O}))}},6624:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),o=r(1883);function i(e){return n.createElement("div",{className:"z-50"},n.createElement(o.Link,{key:e.name,to:e.href,target:"_blank",className:"z-50 m-1 block px-3 py-2 icon-color-text hover:primary-text dynamic-hover"},e.name))}},6985:function(e,t,r){"use strict";r.d(t,{A1:function(){return n},Ib:function(){return o},jo:function(){return i}});const n="Tim Plette",o="Website Portfolio Designer",i="Easy to use portfolio website template: Bring your job hunt or admission app to life!"},3700:function(e,t,r){"use strict";r.d(t,{HO:function(){return i},hL:function(){return c},iL:function(){return a},m2:function(){return o},qr:function(){return n}});const n="bio",o="projects",i="contact",a="resume";function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}const c=[{icon:n,title:s(n),href:"/"+n},{icon:o,title:s(o),href:"/"+o},{icon:i,title:s(i),href:"/"+i},{icon:a,title:s(a),href:"/"+a+".pdf"}]},220:function(e,t,r){"use strict";r.d(t,{_O:function(){return a},aQ:function(){return i},jG:function(){return n},kr:function(){return o}});const n="Template Website",o="Portfolio Website Template",i="template, portfolio, high school, college, project, admissions, resume",a="https://josh-beck.github.io/Portfolio-Website-Template/"},7401:function(e,t,r){"use strict";r.d(t,{c:function(){return s}});var n=r(7294),o=r(9583),i=r(7735),a=r(6225);const s=[{name:n.createElement(o.ltd,{size:30}),href:"https://www.linkedin.com/posts/joshuatbeck_website-resume-opensourcesoftware-activity-7090107148017266688-eQxH"},{name:n.createElement(o.hJX,{size:30}),href:"https://github.com/Josh-Beck/Portfolio-Website-Template"},{name:n.createElement(i.Aih,{size:30}),href:"https://app.hackthebox.com/"},{name:n.createElement(a.SIz,{size:30}),href:"https://www.youtube.com/"}]},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",s),f}}}}]);
//# sourceMappingURL=c747a4ebb2e462301304ff75f7fdeb846d13c6fc-a68bd109769b6600bdcb.js.map