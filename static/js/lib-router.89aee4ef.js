/*! For license information please see lib-router.89aee4ef.js.LICENSE.txt */
(self.webpackChunkmed_frontend=self.webpackChunkmed_frontend||[]).push([["118"],{12599:function(e,t,n){"use strict";var r,a,o,i;function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,{Action:function(){return r},UNSAFE_getResolveToMatches:function(){return x},UNSAFE_invariant:function(){return c},createHashHistory:function(){return s},createPath:function(){return f},isRouteErrorResponse:function(){return P},joinPaths:function(){return C},matchPath:function(){return E},matchRoutes:function(){return m},parsePath:function(){return v},resolveTo:function(){return b},stripBasename:function(){return S}}),(o=r||(r={})).Pop="POP",o.Push="PUSH",o.Replace="REPLACE";let u="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,s=o.history,h=r.Pop,v=null,m=g();function g(){return(s.state||{idx:null}).idx}function y(){h=r.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:h,location:S.location,delta:t})}null==m&&(m=0,s.replaceState(l({},s.state,{idx:m}),""));function E(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:f(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t)}let S={get action(){return h},get location(){return e(o,s)},listen(e){if(v)throw Error("A history only accepts one active listener");return o.addEventListener(u,y),v=e,()=>{o.removeEventListener(u,y),v=null}},createHref:e=>t(o,e),createURL:E,encodeLocation(e){let t=E(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=r.Push;let a=d(S.location,e,t);n&&n(a,e);let l=p(a,m=g()+1),u=S.createHref(a);try{s.pushState(l,"",u)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(u)}i&&v&&v({action:h,location:S.location,delta:1})},replace:function(e,t){h=r.Replace;let a=d(S.location,e,t);n&&n(a,e);let o=p(a,m=g()),l=S.createHref(a);s.replaceState(o,"",l),i&&v&&v({action:h,location:S.location,delta:0})},go:e=>s.go(e)};return S}(function(e,t){let{pathname:n="/",search:r="",hash:a=""}=v(e.location.hash.substr(1));return!n.startsWith("/")&&!n.startsWith(".")&&(n="/"+n),d("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:f(t))},function(e,t){h("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){void 0===n&&(n="/");let r=S(("string"==typeof t?v(t):t).pathname||"/",n);if(null==r)return null;let a=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let o=(t,o,i)=>{let l={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let u=C([a,l.relativePath]),s=r.concat(l);t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),e(t.children,n,s,u)),(null!=t.path||t.index)&&n.push({path:u,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(y)&&(r+=-2),t&&(r+=2),n.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),r)}(u,t.index),routesMeta:s})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===a.length)return o?[i,""]:[i];let l=e(a.join("/")),u=[];return u.push(...l.map(e=>""===e?i:[i,e].join("/"))),o&&u.push(...l),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))o(e,t,n);else o(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(a);let o=null;for(let e=0;null==o&&e<a.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(r);o=function(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let i=n[e],l=e===n.length-1,u="/"===a?t:t.slice(a.length)||"/",s=E({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},u);if(!s)return null;Object.assign(r,s.params);let c=i.route;o.push({params:r,pathname:C([a,s.pathname]),pathnameBase:w(C([a,s.pathnameBase])),route:c}),"/"!==s.pathnameBase&&(a=C([a,s.pathnameBase]))}return o}(a[e],t)}return o}(i=a||(a={})).data="data",i.deferred="deferred",i.redirect="redirect",i.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function E(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),h("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let u=l[n];return a&&!u?e[r]=void 0:e[r]=(u||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function S(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function x(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase)}function b(e,t,n,r){let a,o;void 0===r&&(r=!1),"string"==typeof e?a=v(e):(c(!(a=l({},e)).pathname||!a.pathname.includes("?"),R("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),R("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),R("#","search","hash",a)));let i=""===e||""===a.pathname,u=i?"/":a.pathname;if(null==u)o=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?v(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:U(r),hash:N(a)}}(a,o),h=u&&"/"!==u&&u.endsWith("/"),p=(i||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||p)&&(s.pathname+="/"),s}let C=e=>e.join("/").replace(/\/\/+/g,"/"),w=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function P(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")},79655:function(e,t,n){"use strict";n.r(t),n.d(t,{HashRouter:function(){return b},NavLink:function(){return N},Route:function(){return s.Route},Routes:function(){return s.Routes}});var r,a,o,i,l=n("67294"),u=n("73935"),s=n("89250"),c=n("12599");function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}let d="application/x-www-form-urlencoded";function f(e){return null!=e&&"string"==typeof e.tagName}let v=null,m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function g(e){return null==e||m.has(e)?e:null}let y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],E=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],S=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let R=l.createContext({isTransitioning:!1}),x=l.startTransition;u.flushSync;function b(e){let{basename:t,children:n,future:r,window:a}=e,o=l.useRef();null==o.current&&(o.current=(0,c.createHashHistory)({window:a,v5Compat:!0}));let i=o.current,[u,h]=l.useState({action:i.action,location:i.location}),{v7_startTransition:p}=r||{},d=l.useCallback(e=>{p&&x?x(()=>h(e)):h(e)},[h,p]);return l.useLayoutEffect(()=>i.listen(d),[i,d]),l.createElement(s.Router,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,future:r})}l.useId;let C="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=l.forwardRef(function(e,t){let n,{onClick:r,relative:a,reloadDocument:o,replace:i,state:u,target:d,to:f,preventScrollReset:v,unstable_viewTransition:m}=e,g=p(e,y),{basename:E}=l.useContext(s.UNSAFE_NavigationContext),S=!1;if("string"==typeof f&&w.test(f)&&(n=f,C))try{let e=new URL(window.location.href),t=new URL(f.startsWith("//")?e.protocol+f:f),n=(0,c.stripBasename)(t.pathname,E);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:S=!0}catch(e){}let R=(0,s.useHref)(f,{relative:a}),x=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:u}=void 0===t?{}:t,c=(0,s.useNavigate)(),h=(0,s.useLocation)(),p=(0,s.useResolvedPath)(e,{relative:i});return l.useCallback(t=>{var l,d,f;if(l=t,d=n,0===l.button&&(!d||"_self"===d)&&!((f=l).metaKey||f.altKey||f.ctrlKey||f.shiftKey))t.preventDefault(),c(e,{replace:void 0!==r?r:(0,s.createPath)(h)===(0,s.createPath)(p),state:a,preventScrollReset:o,relative:i,unstable_viewTransition:u})},[h,c,p,r,a,n,e,o,i,u])}(f,{replace:i,state:u,target:d,preventScrollReset:v,relative:a,unstable_viewTransition:m});return l.createElement("a",h({},g,{href:n||R,onClick:S||o?r:function(e){r&&r(e),!e.defaultPrevented&&x(e)},ref:t,target:d}))}),N=l.forwardRef(function(e,t){let n,{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:u=!1,style:d,to:f,unstable_viewTransition:v,children:m}=e,g=p(e,E),y=(0,s.useResolvedPath)(f,{relative:g.relative}),S=(0,s.useLocation)(),x=l.useContext(s.UNSAFE_DataRouterStateContext),{navigator:b,basename:C}=l.useContext(s.UNSAFE_NavigationContext),w=null!=x&&function(e,t){void 0===t&&(t={});let n=l.useContext(R);null!=n||(0,c.UNSAFE_invariant)(!1);let{basename:r}=P(o.useViewTransitionState),a=(0,s.useResolvedPath)(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=(0,c.stripBasename)(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=(0,c.stripBasename)(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=(0,c.matchPath)(a.pathname,u)||null!=(0,c.matchPath)(a.pathname,i)}(y)&&!0===v,N=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,A=S.pathname,F=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;!a&&(A=A.toLowerCase(),F=F?F.toLowerCase():null,N=N.toLowerCase()),F&&C&&(F=(0,c.stripBasename)(F,C)||F);let _="/"!==N&&N.endsWith("/")?N.length-1:N.length,L=A===N||!u&&A.startsWith(N)&&"/"===A.charAt(_),k=null!=F&&(F===N||!u&&F.startsWith(N)&&"/"===F.charAt(N.length)),O={isActive:L,isPending:k,isTransitioning:w},B=L?r:void 0;n="function"==typeof i?i(O):[i,L?"active":null,k?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let j="function"==typeof d?d(O):d;return l.createElement(U,h({},g,{"aria-current":B,className:n,ref:t,style:j,to:f,unstable_viewTransition:v}),"function"==typeof m?m(O):m)});function P(e){let t=l.useContext(s.UNSAFE_DataRouterContext);return t||(0,c.UNSAFE_invariant)(!1),t}(r=o||(o={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=i||(i={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";let A=0,F=()=>"__"+String(++A)+"__"},89250:function(e,t,n){"use strict";n.r(t),n.d(t,{Route:function(){return A},Router:function(){return F},Routes:function(){return _},UNSAFE_DataRouterContext:function(){return s},UNSAFE_DataRouterStateContext:function(){return c},UNSAFE_NavigationContext:function(){return h},UNSAFE_RouteContext:function(){return d},UNSAFE_useRouteId:function(){return N},createPath:function(){return l.createPath},useHref:function(){return v},useLocation:function(){return g},useNavigate:function(){return E},useResolvedPath:function(){return S}});var r,a,o,i=n("67294"),l=n("12599");function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s=i.createContext(null),c=i.createContext(null),h=i.createContext(null),p=i.createContext(null),d=i.createContext({outlet:null,matches:[],isDataRoute:!1}),f=i.createContext(null);function v(e,t){let{relative:n}=void 0===t?{}:t;m()||(0,l.UNSAFE_invariant)(!1);let{basename:r,navigator:a}=i.useContext(h),{hash:o,pathname:u,search:s}=S(e,{relative:n}),c=u;return"/"!==r&&(c="/"===u?r:(0,l.joinPaths)([r,u])),a.createHref({pathname:c,search:s,hash:o})}function m(){return null!=i.useContext(p)}function g(){return m()||(0,l.UNSAFE_invariant)(!1),i.useContext(p).location}function y(e){!i.useContext(h).static&&i.useLayoutEffect(e)}function E(){let{isDataRoute:e}=i.useContext(d);return e?function(){var e;let t;let{router:n}=(e=C.UseNavigateStable,(t=i.useContext(s))||(0,l.UNSAFE_invariant)(!1),t),r=U(w.UseNavigateStable),a=i.useRef(!1);return y(()=>{a.current=!0}),i.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,u({fromRouteId:r},t)))},[n,r])}():function(){m()||(0,l.UNSAFE_invariant)(!1);let e=i.useContext(s),{basename:t,future:n,navigator:r}=i.useContext(h),{matches:a}=i.useContext(d),{pathname:o}=g(),u=JSON.stringify((0,l.UNSAFE_getResolveToMatches)(a,n.v7_relativeSplatPath)),c=i.useRef(!1);return y(()=>{c.current=!0}),i.useCallback(function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n){r.go(n);return}let i=(0,l.resolveTo)(n,JSON.parse(u),o,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,l.joinPaths)([t,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[t,r,u,o,e])}()}function S(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=i.useContext(h),{matches:a}=i.useContext(d),{pathname:o}=g(),u=JSON.stringify((0,l.UNSAFE_getResolveToMatches)(a,r.v7_relativeSplatPath));return i.useMemo(()=>(0,l.resolveTo)(e,JSON.parse(u),o,"path"===n),[e,u,o,n])}let R=i.createElement(function(){let e=function(){var e,t;let n;let r=i.useContext(f);let a=(t=w.UseRouteError,(n=i.useContext(c))||(0,l.UNSAFE_invariant)(!1),n),o=U(w.UseRouteError);return void 0!==r?r:null==(e=a.errors)?void 0:e[o]}(),t=(0,l.isRouteErrorResponse)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},n):null,null)},null);class x extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(d.Provider,{value:this.props.routeContext},i.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b(e){let{routeContext:t,match:n,children:r}=e,a=i.useContext(s);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(d.Provider,{value:t},r)}var C=((r=C||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var w=((a=w||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function U(e){var t;let n;let r=(t=0,(n=i.useContext(d))||(0,l.UNSAFE_invariant)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,l.UNSAFE_invariant)(!1),a.route.id}function N(){return U(w.UseRouteId)}let P={};function A(e){(0,l.UNSAFE_invariant)(!1)}function F(e){let{basename:t="/",children:n=null,location:r,navigationType:a=l.Action.Pop,navigator:o,static:s=!1,future:c}=e;m()&&(0,l.UNSAFE_invariant)(!1);let d=t.replace(/^\/*/,"/"),f=i.useMemo(()=>({basename:d,navigator:o,static:s,future:u({v7_relativeSplatPath:!1},c)}),[d,c,o,s]);"string"==typeof r&&(r=(0,l.parsePath)(r));let{pathname:v="/",search:g="",hash:y="",state:E=null,key:S="default"}=r,R=i.useMemo(()=>{let e=(0,l.stripBasename)(v,d);return null==e?null:{location:{pathname:e,search:g,hash:y,state:E,key:S},navigationType:a}},[d,v,g,y,E,S,a]);return null==R?null:i.createElement(h.Provider,{value:f},i.createElement(p.Provider,{children:n,value:R}))}function _(e){var t;let{children:n,location:r}=e;return t=function e(t,n){void 0===n&&(n=[]);let r=[];return i.Children.forEach(t,(t,a)=>{if(!i.isValidElement(t))return;let o=[...n,a];if(t.type===i.Fragment){r.push.apply(r,e(t.props.children,o));return}t.type!==A&&(0,l.UNSAFE_invariant)(!1),!t.props.index||!t.props.children||(0,l.UNSAFE_invariant)(!1);let u={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(u.children=e(t.props.children,o)),r.push(u)}),r}(n),function(e,t,n,r){let a;m()||(0,l.UNSAFE_invariant)(!1);let{navigator:o}=i.useContext(h),{matches:s}=i.useContext(d),c=s[s.length-1],f=c?c.params:{};c&&c.pathname;let v=c?c.pathnameBase:"/";c&&c.route;let y=g();if(t){var E;let e="string"==typeof t?(0,l.parsePath)(t):t;"/"===v||(null==(E=e.pathname)?void 0:E.startsWith(v))||(0,l.UNSAFE_invariant)(!1),a=e}else a=y;let S=a.pathname||"/",C=S;if("/"!==v){let e=v.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=(0,l.matchRoutes)(e,{pathname:C}),U=function(e,t,n,r){var a,o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){if(null==(o=n)||!o.errors)return null;e=n.matches}let u=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=u.findIndex(e=>e.route.id&&(null==s?void 0:s[e.route.id]));e>=0||(0,l.UNSAFE_invariant)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(h=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){c=!0,u=h>=0?u.slice(0,h+1):[u[0]];break}}}return u.reduceRight((e,r,a)=>{let o;let l=!1,p=null,d=null;n&&(o=s&&r.route.id?s[r.route.id]:void 0,p=r.route.errorElement||R,c&&(h<0&&0===a?(function(e,t,n){!t&&!P[e]&&(P[e]=!0)}("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),l=!0,d=null):h===a&&(l=!0,d=r.route.hydrateFallbackElement||null)));let f=t.concat(u.slice(0,a+1)),v=()=>{let t;return t=o?p:l?d:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(b,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?i.createElement(x,{location:n.location,revalidation:n.revalidation,component:p,error:o,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}(w&&w.map(e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:(0,l.joinPaths)([v,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?v:(0,l.joinPaths)([v,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,n,r);return t&&U?i.createElement(p.Provider,{value:{location:u({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:l.Action.Pop}},U):U}(t,r)}i.startTransition;var L=((o=L||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{})}}]);