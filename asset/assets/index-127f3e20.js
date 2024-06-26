(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var A1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gb(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var wb={exports:{}},Yd={},yb={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),_x=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),kx=Symbol.for("react.context"),Dx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),Rx=Symbol.for("react.lazy"),Kg=Symbol.iterator;function jx(e){return e===null||typeof e!="object"?null:(e=Kg&&e[Kg]||e["@@iterator"],typeof e=="function"?e:null)}var bb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vb=Object.assign,xb={};function Qs(e,t,n){this.props=e,this.context=t,this.refs=xb,this.updater=n||bb}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cb(){}Cb.prototype=Qs.prototype;function T1(e,t,n){this.props=e,this.context=t,this.refs=xb,this.updater=n||bb}var _1=T1.prototype=new Cb;_1.constructor=T1;vb(_1,Qs.prototype);_1.isPureReactComponent=!0;var Zg=Array.isArray,Eb=Object.prototype.hasOwnProperty,N1={current:null},Sb={key:!0,ref:!0,__self:!0,__source:!0};function Ab(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Eb.call(t,r)&&!Sb.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ic,type:e,key:o,ref:s,props:i,_owner:N1.current}}function $x(e,t){return{$$typeof:ic,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P1(e){return typeof e=="object"&&e!==null&&e.$$typeof===ic}function Mx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yg=/\/+/g;function f0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mx(""+e.key):t.toString(36)}function du(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ic:case Ax:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+f0(s,0):r,Zg(i)?(n="",e!=null&&(n=e.replace(Yg,"$&/")+"/"),du(i,t,n,"",function(c){return c})):i!=null&&(P1(i)&&(i=$x(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zg(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+f0(o,a);s+=du(o,t,n,l,i)}else if(l=jx(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+f0(o,a++),s+=du(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Oc(e,t,n){if(e==null)return e;var r=[],i=0;return du(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Bx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qt={current:null},fu={transition:null},Fx={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:N1};Te.Children={map:Oc,forEach:function(e,t,n){Oc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oc(e,function(){t++}),t},toArray:function(e){return Oc(e,function(t){return t})||[]},only:function(e){if(!P1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=Qs;Te.Fragment=Tx;Te.Profiler=Nx;Te.PureComponent=T1;Te.StrictMode=_x;Te.Suspense=Ox;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;Te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vb({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=N1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Eb.call(t,l)&&!Sb.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ic,type:e.type,key:i,ref:o,props:r,_owner:s}};Te.createContext=function(e){return e={$$typeof:kx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Px,_context:e},e.Consumer=e};Te.createElement=Ab;Te.createFactory=function(e){var t=Ab.bind(null,e);return t.type=e,t};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:Dx,render:e}};Te.isValidElement=P1;Te.lazy=function(e){return{$$typeof:Rx,_payload:{_status:-1,_result:e},_init:Bx}};Te.memo=function(e,t){return{$$typeof:Ix,type:e,compare:t===void 0?null:t}};Te.startTransition=function(e){var t=fu.transition;fu.transition={};try{e()}finally{fu.transition=t}};Te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Te.useCallback=function(e,t){return qt.current.useCallback(e,t)};Te.useContext=function(e){return qt.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return qt.current.useDeferredValue(e)};Te.useEffect=function(e,t){return qt.current.useEffect(e,t)};Te.useId=function(){return qt.current.useId()};Te.useImperativeHandle=function(e,t,n){return qt.current.useImperativeHandle(e,t,n)};Te.useInsertionEffect=function(e,t){return qt.current.useInsertionEffect(e,t)};Te.useLayoutEffect=function(e,t){return qt.current.useLayoutEffect(e,t)};Te.useMemo=function(e,t){return qt.current.useMemo(e,t)};Te.useReducer=function(e,t,n){return qt.current.useReducer(e,t,n)};Te.useRef=function(e){return qt.current.useRef(e)};Te.useState=function(e){return qt.current.useState(e)};Te.useSyncExternalStore=function(e,t,n){return qt.current.useSyncExternalStore(e,t,n)};Te.useTransition=function(){return qt.current.useTransition()};Te.version="18.2.0";yb.exports=Te;var W=yb.exports;const di=Gs(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=W,Lx=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Wx=Object.prototype.hasOwnProperty,Hx=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qx={key:!0,ref:!0,__self:!0,__source:!0};function Tb(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Wx.call(t,r)&&!qx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lx,type:e,key:o,ref:s,props:i,_owner:Hx.current}}Yd.Fragment=zx;Yd.jsx=Tb;Yd.jsxs=Tb;wb.exports=Yd;var A=wb.exports,bh={},_b={exports:{}},gn={},Nb={exports:{}},Pb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var q=R.length;R.push(z);e:for(;0<q;){var H=q-1>>>1,G=R[H];if(0<i(G,z))R[H]=z,R[q]=G,q=H;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],q=R.pop();if(q!==z){R[0]=q;e:for(var H=0,G=R.length,K=G>>>1;H<K;){var re=2*(H+1)-1,ae=R[re],ue=re+1,fe=R[ue];if(0>i(ae,q))ue<G&&0>i(fe,ae)?(R[H]=fe,R[ue]=q,H=ue):(R[H]=ae,R[re]=q,H=re);else if(ue<G&&0>i(fe,q))R[H]=fe,R[ue]=q,H=ue;else break e}}return z}function i(R,z){var q=R.sortIndex-z.sortIndex;return q!==0?q:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,w=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=R)r(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function E(R){if(x=!1,y(R),!w)if(n(l)!==null)w=!0,F(S);else{var z=n(c);z!==null&&U(E,z.startTime-R)}}function S(R,z){w=!1,x&&(x=!1,v(_),_=-1),m=!0;var q=h;try{for(y(z),d=n(l);d!==null&&(!(d.expirationTime>z)||R&&!$());){var H=d.callback;if(typeof H=="function"){d.callback=null,h=d.priorityLevel;var G=H(d.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(l)&&r(l),y(z)}else r(l);d=n(l)}if(d!==null)var K=!0;else{var re=n(c);re!==null&&U(E,re.startTime-z),K=!1}return K}finally{d=null,h=q,m=!1}}var T=!1,f=null,_=-1,D=5,O=-1;function $(){return!(e.unstable_now()-O<D)}function Y(){if(f!==null){var R=e.unstable_now();O=R;var z=!0;try{z=f(!0,R)}finally{z?te():(T=!1,f=null)}}else T=!1}var te;if(typeof p=="function")te=function(){p(Y)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,L=V.port2;V.port1.onmessage=Y,te=function(){L.postMessage(null)}}else te=function(){C(Y,0)};function F(R){f=R,T||(T=!0,te())}function U(R,z){_=C(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,F(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var q=h;h=z;try{return R()}finally{h=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=h;h=R;try{return z()}finally{h=q}},e.unstable_scheduleCallback=function(R,z,q){var H=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?H+q:H):q=H,R){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=q+G,R={id:u++,callback:z,priorityLevel:R,startTime:q,expirationTime:G,sortIndex:-1},q>H?(R.sortIndex=q,t(c,R),n(l)===null&&R===n(c)&&(x?(v(_),_=-1):x=!0,U(E,q-H))):(R.sortIndex=G,t(l,R),w||m||(w=!0,F(S))),R},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(R){var z=h;return function(){var q=h;h=z;try{return R.apply(this,arguments)}finally{h=q}}}})(Pb);Nb.exports=Pb;var Vx=Nb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb=W,mn=Vx;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Db=new Set,tl={};function No(e,t){bs(e,t),bs(e+"Capture",t)}function bs(e,t){for(tl[e]=t,e=0;e<t.length;e++)Db.add(t[e])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,Gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function Qx(e){return vh.call(Jg,e)?!0:vh.call(Xg,e)?!1:Gx.test(e)?Jg[e]=!0:(Xg[e]=!0,!1)}function Kx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zx(e,t,n,r){if(t===null||typeof t>"u"||Kx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){kt[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];kt[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){kt[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){kt[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){kt[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){kt[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){kt[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){kt[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){kt[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var k1=/[\-:]([a-z])/g;function D1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(k1,D1);kt[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(k1,D1);kt[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(k1,D1);kt[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){kt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){kt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function O1(e,t,n,r){var i=kt.hasOwnProperty(t)?kt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zx(t,n,i,r)&&(n=null),r||i===null?Qx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zr=kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ic=Symbol.for("react.element"),Zo=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),I1=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),Ob=Symbol.for("react.provider"),Ib=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),Ch=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),j1=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),Rb=Symbol.for("react.offscreen"),ew=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=ew&&e[ew]||e["@@iterator"],typeof e=="function"?e:null)}var et=Object.assign,h0;function ka(e){if(h0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h0=t&&t[1]||""}return`
`+h0+e}var p0=!1;function m0(e,t){if(!e||p0)return"";p0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{p0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ka(e):""}function Yx(e){switch(e.tag){case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return e=m0(e.type,!1),e;case 11:return e=m0(e.type.render,!1),e;case 1:return e=m0(e.type,!0),e;default:return""}}function Sh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yo:return"Fragment";case Zo:return"Portal";case xh:return"Profiler";case I1:return"StrictMode";case Ch:return"Suspense";case Eh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ib:return(e.displayName||"Context")+".Consumer";case Ob:return(e._context.displayName||"Context")+".Provider";case R1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j1:return t=e.displayName||null,t!==null?t:Sh(e.type)||"Memo";case Jr:t=e._payload,e=e._init;try{return Sh(e(t))}catch{}}return null}function Xx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(t);case 8:return t===I1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ti(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jx(e){var t=jb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rc(e){e._valueTracker||(e._valueTracker=Jx(e))}function $b(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ru(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ah(e,t){var n=t.checked;return et({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tw(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ti(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mb(e,t){t=t.checked,t!=null&&O1(e,"checked",t,!1)}function Th(e,t){Mb(e,t);var n=Ti(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_h(e,t.type,n):t.hasOwnProperty("defaultValue")&&_h(e,t.type,Ti(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nw(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _h(e,t,n){(t!=="number"||Ru(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Da=Array.isArray;function us(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ti(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return et({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rw(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(Da(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ti(n)}}function Bb(e,t){var n=Ti(t.value),r=Ti(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jc,Ub=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jc=jc||document.createElement("div"),jc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e8=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(e){e8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fa[t]=Fa[e]})});function Lb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fa.hasOwnProperty(e)&&Fa[e]?(""+t).trim():t+"px"}function zb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var t8=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(e,t){if(t){if(t8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function Dh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function $1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ih=null,ds=null,fs=null;function ow(e){if(e=ac(e)){if(typeof Ih!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=nf(t),Ih(e.stateNode,e.type,t))}}function Wb(e){ds?fs?fs.push(e):fs=[e]:ds=e}function Hb(){if(ds){var e=ds,t=fs;if(fs=ds=null,ow(e),t)for(e=0;e<t.length;e++)ow(t[e])}}function qb(e,t){return e(t)}function Vb(){}var g0=!1;function Gb(e,t,n){if(g0)return e(t,n);g0=!0;try{return qb(e,t,n)}finally{g0=!1,(ds!==null||fs!==null)&&(Vb(),Hb())}}function rl(e,t){var n=e.stateNode;if(n===null)return null;var r=nf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var Rh=!1;if(Dr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Rh=!1}function n8(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ua=!1,ju=null,$u=!1,jh=null,r8={onError:function(e){Ua=!0,ju=e}};function i8(e,t,n,r,i,o,s,a,l){Ua=!1,ju=null,n8.apply(r8,arguments)}function o8(e,t,n,r,i,o,s,a,l){if(i8.apply(this,arguments),Ua){if(Ua){var c=ju;Ua=!1,ju=null}else throw Error(Q(198));$u||($u=!0,jh=c)}}function Po(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sw(e){if(Po(e)!==e)throw Error(Q(188))}function s8(e){var t=e.alternate;if(!t){if(t=Po(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sw(i),e;if(o===r)return sw(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Kb(e){return e=s8(e),e!==null?Zb(e):null}function Zb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zb(e);if(t!==null)return t;e=e.sibling}return null}var Yb=mn.unstable_scheduleCallback,aw=mn.unstable_cancelCallback,a8=mn.unstable_shouldYield,l8=mn.unstable_requestPaint,st=mn.unstable_now,c8=mn.unstable_getCurrentPriorityLevel,M1=mn.unstable_ImmediatePriority,Xb=mn.unstable_UserBlockingPriority,Mu=mn.unstable_NormalPriority,u8=mn.unstable_LowPriority,Jb=mn.unstable_IdlePriority,Xd=null,ur=null;function d8(e){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Xd,e,void 0,(e.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:p8,f8=Math.log,h8=Math.LN2;function p8(e){return e>>>=0,e===0?32:31-(f8(e)/h8|0)|0}var $c=64,Mc=4194304;function Oa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Oa(a):(o&=s,o!==0&&(r=Oa(o)))}else s=n&~i,s!==0?r=Oa(s):o!==0&&(r=Oa(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gn(t),i=1<<n,r|=e[n],t&=~i;return r}function m8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Gn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=m8(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function $h(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ev(){var e=$c;return $c<<=1,!($c&4194240)&&($c=64),e}function w0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gn(t),e[t]=n}function w8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function B1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Re=0;function tv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nv,F1,rv,iv,ov,Mh=!1,Bc=[],fi=null,hi=null,pi=null,il=new Map,ol=new Map,ni=[],y8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lw(e,t){switch(e){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(t.pointerId)}}function ma(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ac(t),t!==null&&F1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b8(e,t,n,r,i){switch(t){case"focusin":return fi=ma(fi,e,t,n,r,i),!0;case"dragenter":return hi=ma(hi,e,t,n,r,i),!0;case"mouseover":return pi=ma(pi,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return il.set(o,ma(il.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ol.set(o,ma(ol.get(o)||null,e,t,n,r,i)),!0}return!1}function sv(e){var t=no(e.target);if(t!==null){var n=Po(t);if(n!==null){if(t=n.tag,t===13){if(t=Qb(n),t!==null){e.blockedOn=t,ov(e.priority,function(){rv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return t=ac(n),t!==null&&F1(t),e.blockedOn=n,!1;t.shift()}return!0}function cw(e,t,n){hu(e)&&n.delete(t)}function v8(){Mh=!1,fi!==null&&hu(fi)&&(fi=null),hi!==null&&hu(hi)&&(hi=null),pi!==null&&hu(pi)&&(pi=null),il.forEach(cw),ol.forEach(cw)}function ga(e,t){e.blockedOn===t&&(e.blockedOn=null,Mh||(Mh=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,v8)))}function sl(e){function t(i){return ga(i,e)}if(0<Bc.length){ga(Bc[0],e);for(var n=1;n<Bc.length;n++){var r=Bc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fi!==null&&ga(fi,e),hi!==null&&ga(hi,e),pi!==null&&ga(pi,e),il.forEach(t),ol.forEach(t),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)sv(n),n.blockedOn===null&&ni.shift()}var hs=zr.ReactCurrentBatchConfig,Fu=!0;function x8(e,t,n,r){var i=Re,o=hs.transition;hs.transition=null;try{Re=1,U1(e,t,n,r)}finally{Re=i,hs.transition=o}}function C8(e,t,n,r){var i=Re,o=hs.transition;hs.transition=null;try{Re=4,U1(e,t,n,r)}finally{Re=i,hs.transition=o}}function U1(e,t,n,r){if(Fu){var i=Bh(e,t,n,r);if(i===null)_0(e,t,r,Uu,n),lw(e,r);else if(b8(i,e,t,n,r))r.stopPropagation();else if(lw(e,r),t&4&&-1<y8.indexOf(e)){for(;i!==null;){var o=ac(i);if(o!==null&&nv(o),o=Bh(e,t,n,r),o===null&&_0(e,t,r,Uu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _0(e,t,r,null,n)}}var Uu=null;function Bh(e,t,n,r){if(Uu=null,e=$1(r),e=no(e),e!==null)if(t=Po(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uu=e,null}function av(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c8()){case M1:return 1;case Xb:return 4;case Mu:case u8:return 16;case Jb:return 536870912;default:return 16}default:return 16}}var li=null,L1=null,pu=null;function lv(){if(pu)return pu;var e,t=L1,n=t.length,r,i="value"in li?li.value:li.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return pu=i.slice(e,1<r?1-r:void 0)}function mu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fc(){return!0}function uw(){return!1}function wn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fc:uw,this.isPropagationStopped=uw,this}return et(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),t}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},z1=wn(Ks),sc=et({},Ks,{view:0,detail:0}),E8=wn(sc),y0,b0,wa,Jd=et({},sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:W1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(y0=e.screenX-wa.screenX,b0=e.screenY-wa.screenY):b0=y0=0,wa=e),y0)},movementY:function(e){return"movementY"in e?e.movementY:b0}}),dw=wn(Jd),S8=et({},Jd,{dataTransfer:0}),A8=wn(S8),T8=et({},sc,{relatedTarget:0}),v0=wn(T8),_8=et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),N8=wn(_8),P8=et({},Ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k8=wn(P8),D8=et({},Ks,{data:0}),fw=wn(D8),O8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R8[e])?!!t[e]:!1}function W1(){return j8}var $8=et({},sc,{key:function(e){if(e.key){var t=O8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:W1,charCode:function(e){return e.type==="keypress"?mu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M8=wn($8),B8=et({},Jd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hw=wn(B8),F8=et({},sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:W1}),U8=wn(F8),L8=et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),z8=wn(L8),W8=et({},Jd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H8=wn(W8),q8=[9,13,27,32],H1=Dr&&"CompositionEvent"in window,La=null;Dr&&"documentMode"in document&&(La=document.documentMode);var V8=Dr&&"TextEvent"in window&&!La,cv=Dr&&(!H1||La&&8<La&&11>=La),pw=String.fromCharCode(32),mw=!1;function uv(e,t){switch(e){case"keyup":return q8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xo=!1;function G8(e,t){switch(e){case"compositionend":return dv(t);case"keypress":return t.which!==32?null:(mw=!0,pw);case"textInput":return e=t.data,e===pw&&mw?null:e;default:return null}}function Q8(e,t){if(Xo)return e==="compositionend"||!H1&&uv(e,t)?(e=lv(),pu=L1=li=null,Xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cv&&t.locale!=="ko"?null:t.data;default:return null}}var K8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K8[e.type]:t==="textarea"}function fv(e,t,n,r){Wb(r),t=Lu(t,"onChange"),0<t.length&&(n=new z1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var za=null,al=null;function Z8(e){Ev(e,0)}function ef(e){var t=ts(e);if($b(t))return e}function Y8(e,t){if(e==="change")return t}var hv=!1;if(Dr){var x0;if(Dr){var C0="oninput"in document;if(!C0){var ww=document.createElement("div");ww.setAttribute("oninput","return;"),C0=typeof ww.oninput=="function"}x0=C0}else x0=!1;hv=x0&&(!document.documentMode||9<document.documentMode)}function yw(){za&&(za.detachEvent("onpropertychange",pv),al=za=null)}function pv(e){if(e.propertyName==="value"&&ef(al)){var t=[];fv(t,al,e,$1(e)),Gb(Z8,t)}}function X8(e,t,n){e==="focusin"?(yw(),za=t,al=n,za.attachEvent("onpropertychange",pv)):e==="focusout"&&yw()}function J8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ef(al)}function eC(e,t){if(e==="click")return ef(t)}function tC(e,t){if(e==="input"||e==="change")return ef(t)}function nC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zn=typeof Object.is=="function"?Object.is:nC;function ll(e,t){if(Zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(t,i)||!Zn(e[i],t[i]))return!1}return!0}function bw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vw(e,t){var n=bw(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bw(n)}}function mv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gv(){for(var e=window,t=Ru();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ru(e.document)}return t}function q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rC(e){var t=gv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mv(n.ownerDocument.documentElement,n)){if(r!==null&&q1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vw(n,o);var s=vw(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iC=Dr&&"documentMode"in document&&11>=document.documentMode,Jo=null,Fh=null,Wa=null,Uh=!1;function xw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||Jo==null||Jo!==Ru(r)||(r=Jo,"selectionStart"in r&&q1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&ll(Wa,r)||(Wa=r,r=Lu(Fh,"onSelect"),0<r.length&&(t=new z1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jo)))}function Uc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var es={animationend:Uc("Animation","AnimationEnd"),animationiteration:Uc("Animation","AnimationIteration"),animationstart:Uc("Animation","AnimationStart"),transitionend:Uc("Transition","TransitionEnd")},E0={},wv={};Dr&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function tf(e){if(E0[e])return E0[e];if(!es[e])return e;var t=es[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wv)return E0[e]=t[n];return e}var yv=tf("animationend"),bv=tf("animationiteration"),vv=tf("animationstart"),xv=tf("transitionend"),Cv=new Map,Cw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(e,t){Cv.set(e,t),No(t,[e])}for(var S0=0;S0<Cw.length;S0++){var A0=Cw[S0],oC=A0.toLowerCase(),sC=A0[0].toUpperCase()+A0.slice(1);$i(oC,"on"+sC)}$i(yv,"onAnimationEnd");$i(bv,"onAnimationIteration");$i(vv,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(xv,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);No("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));No("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));No("onBeforeInput",["compositionend","keypress","textInput","paste"]);No("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));No("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));No("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Ew(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,o8(r,t,void 0,e),e.currentTarget=null}function Ev(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ew(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ew(i,a,c),o=l}}}if($u)throw e=jh,$u=!1,jh=null,e}function qe(e,t){var n=t[qh];n===void 0&&(n=t[qh]=new Set);var r=e+"__bubble";n.has(r)||(Sv(t,e,2,!1),n.add(r))}function T0(e,t,n){var r=0;t&&(r|=4),Sv(n,e,r,t)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function cl(e){if(!e[Lc]){e[Lc]=!0,Db.forEach(function(n){n!=="selectionchange"&&(aC.has(n)||T0(n,!1,e),T0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lc]||(t[Lc]=!0,T0("selectionchange",!1,t))}}function Sv(e,t,n,r){switch(av(t)){case 1:var i=x8;break;case 4:i=C8;break;default:i=U1}n=i.bind(null,t,n,e),i=void 0,!Rh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _0(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=no(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Gb(function(){var c=o,u=$1(n),d=[];e:{var h=Cv.get(e);if(h!==void 0){var m=z1,w=e;switch(e){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":m=M8;break;case"focusin":w="focus",m=v0;break;case"focusout":w="blur",m=v0;break;case"beforeblur":case"afterblur":m=v0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=U8;break;case yv:case bv:case vv:m=N8;break;case xv:m=z8;break;case"scroll":m=E8;break;case"wheel":m=H8;break;case"copy":case"cut":case"paste":m=k8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hw}var x=(t&4)!==0,C=!x&&e==="scroll",v=x?h!==null?h+"Capture":null:h;x=[];for(var p=c,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=rl(p,v),E!=null&&x.push(ul(p,E,y)))),C)break;p=p.return}0<x.length&&(h=new m(h,w,null,n,u),d.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==Oh&&(w=n.relatedTarget||n.fromElement)&&(no(w)||w[Or]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=c,w=w?no(w):null,w!==null&&(C=Po(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=c),m!==w)){if(x=dw,E="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=hw,E="onPointerLeave",v="onPointerEnter",p="pointer"),C=m==null?h:ts(m),y=w==null?h:ts(w),h=new x(E,p+"leave",m,n,u),h.target=C,h.relatedTarget=y,E=null,no(u)===c&&(x=new x(v,p+"enter",w,n,u),x.target=y,x.relatedTarget=C,E=x),C=E,m&&w)t:{for(x=m,v=w,p=0,y=x;y;y=Fo(y))p++;for(y=0,E=v;E;E=Fo(E))y++;for(;0<p-y;)x=Fo(x),p--;for(;0<y-p;)v=Fo(v),y--;for(;p--;){if(x===v||v!==null&&x===v.alternate)break t;x=Fo(x),v=Fo(v)}x=null}else x=null;m!==null&&Sw(d,h,m,x,!1),w!==null&&C!==null&&Sw(d,C,w,x,!0)}}e:{if(h=c?ts(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=Y8;else if(gw(h))if(hv)S=tC;else{S=J8;var T=X8}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=eC);if(S&&(S=S(e,c))){fv(d,S,n,u);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&_h(h,"number",h.value)}switch(T=c?ts(c):window,e){case"focusin":(gw(T)||T.contentEditable==="true")&&(Jo=T,Fh=c,Wa=null);break;case"focusout":Wa=Fh=Jo=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,xw(d,n,u);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":xw(d,n,u)}var f;if(H1)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xo?uv(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(cv&&n.locale!=="ko"&&(Xo||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xo&&(f=lv()):(li=u,L1="value"in li?li.value:li.textContent,Xo=!0)),T=Lu(c,_),0<T.length&&(_=new fw(_,e,null,n,u),d.push({event:_,listeners:T}),f?_.data=f:(f=dv(n),f!==null&&(_.data=f)))),(f=V8?G8(e,n):Q8(e,n))&&(c=Lu(c,"onBeforeInput"),0<c.length&&(u=new fw("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=f))}Ev(d,t)})}function ul(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=rl(e,n),o!=null&&r.unshift(ul(e,o,i)),o=rl(e,t),o!=null&&r.push(ul(e,o,i))),e=e.return}return r}function Fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sw(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=rl(n,o),l!=null&&s.unshift(ul(n,l,a))):i||(l=rl(n,o),l!=null&&s.push(ul(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function Aw(e){return(typeof e=="string"?e:""+e).replace(lC,`
`).replace(cC,"")}function zc(e,t,n){if(t=Aw(t),Aw(e)!==t&&n)throw Error(Q(425))}function zu(){}var Lh=null,zh=null;function Wh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,Tw=typeof Promise=="function"?Promise:void 0,dC=typeof queueMicrotask=="function"?queueMicrotask:typeof Tw<"u"?function(e){return Tw.resolve(null).then(e).catch(fC)}:Hh;function fC(e){setTimeout(function(){throw e})}function N0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),sl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sl(t)}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _w(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),lr="__reactFiber$"+Zs,dl="__reactProps$"+Zs,Or="__reactContainer$"+Zs,qh="__reactEvents$"+Zs,hC="__reactListeners$"+Zs,pC="__reactHandles$"+Zs;function no(e){var t=e[lr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Or]||n[lr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_w(e);e!==null;){if(n=e[lr])return n;e=_w(e)}return t}e=n,n=e.parentNode}return null}function ac(e){return e=e[lr]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ts(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function nf(e){return e[dl]||null}var Vh=[],ns=-1;function Mi(e){return{current:e}}function Ge(e){0>ns||(e.current=Vh[ns],Vh[ns]=null,ns--)}function We(e,t){ns++,Vh[ns]=e.current,e.current=t}var _i={},Bt=Mi(_i),Jt=Mi(!1),po=_i;function vs(e,t){var n=e.type.contextTypes;if(!n)return _i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function en(e){return e=e.childContextTypes,e!=null}function Wu(){Ge(Jt),Ge(Bt)}function Nw(e,t,n){if(Bt.current!==_i)throw Error(Q(168));We(Bt,t),We(Jt,n)}function Av(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,Xx(e)||"Unknown",i));return et({},n,r)}function Hu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_i,po=Bt.current,We(Bt,e),We(Jt,Jt.current),!0}function Pw(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=Av(e,t,po),r.__reactInternalMemoizedMergedChildContext=e,Ge(Jt),Ge(Bt),We(Bt,e)):Ge(Jt),We(Jt,n)}var Ar=null,rf=!1,P0=!1;function Tv(e){Ar===null?Ar=[e]:Ar.push(e)}function mC(e){rf=!0,Tv(e)}function Bi(){if(!P0&&Ar!==null){P0=!0;var e=0,t=Re;try{var n=Ar;for(Re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ar=null,rf=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(e+1)),Yb(M1,Bi),i}finally{Re=t,P0=!1}}return null}var rs=[],is=0,qu=null,Vu=0,Tn=[],_n=0,mo=null,_r=1,Nr="";function Xi(e,t){rs[is++]=Vu,rs[is++]=qu,qu=e,Vu=t}function _v(e,t,n){Tn[_n++]=_r,Tn[_n++]=Nr,Tn[_n++]=mo,mo=e;var r=_r;e=Nr;var i=32-Gn(r)-1;r&=~(1<<i),n+=1;var o=32-Gn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_r=1<<32-Gn(t)+i|n<<i|r,Nr=o+e}else _r=1<<o|n<<i|r,Nr=e}function V1(e){e.return!==null&&(Xi(e,1),_v(e,1,0))}function G1(e){for(;e===qu;)qu=rs[--is],rs[is]=null,Vu=rs[--is],rs[is]=null;for(;e===mo;)mo=Tn[--_n],Tn[_n]=null,Nr=Tn[--_n],Tn[_n]=null,_r=Tn[--_n],Tn[_n]=null}var pn=null,fn=null,Ze=!1,qn=null;function Nv(e,t){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kw(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pn=e,fn=mi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pn=e,fn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mo!==null?{id:_r,overflow:Nr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pn=e,fn=null,!0):!1;default:return!1}}function Gh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qh(e){if(Ze){var t=fn;if(t){var n=t;if(!kw(e,t)){if(Gh(e))throw Error(Q(418));t=mi(n.nextSibling);var r=pn;t&&kw(e,t)?Nv(r,n):(e.flags=e.flags&-4097|2,Ze=!1,pn=e)}}else{if(Gh(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Ze=!1,pn=e}}}function Dw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function Wc(e){if(e!==pn)return!1;if(!Ze)return Dw(e),Ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wh(e.type,e.memoizedProps)),t&&(t=fn)){if(Gh(e))throw Pv(),Error(Q(418));for(;t;)Nv(e,t),t=mi(t.nextSibling)}if(Dw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fn=mi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fn=null}}else fn=pn?mi(e.stateNode.nextSibling):null;return!0}function Pv(){for(var e=fn;e;)e=mi(e.nextSibling)}function xs(){fn=pn=null,Ze=!1}function Q1(e){qn===null?qn=[e]:qn.push(e)}var gC=zr.ReactCurrentBatchConfig;function Wn(e,t){if(e&&e.defaultProps){t=et({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gu=Mi(null),Qu=null,os=null,K1=null;function Z1(){K1=os=Qu=null}function Y1(e){var t=Gu.current;Ge(Gu),e._currentValue=t}function Kh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ps(e,t){Qu=e,K1=os=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Zt=!0),e.firstContext=null)}function In(e){var t=e._currentValue;if(K1!==e)if(e={context:e,memoizedValue:t,next:null},os===null){if(Qu===null)throw Error(Q(308));os=e,Qu.dependencies={lanes:0,firstContext:e}}else os=os.next=e;return t}var ro=null;function X1(e){ro===null?ro=[e]:ro.push(e)}function kv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,X1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ir(e,r)}function Ir(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ei=!1;function J1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ir(e,n)}return i=r.interleaved,i===null?(t.next=t,X1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ir(e,n)}function gu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,B1(e,n)}}function Ow(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ku(e,t,n,r){var i=e.updateQueue;ei=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(h=t,m=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){d=w.call(m,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(m,d,h):w,h==null)break e;d=et({},d,h);break e;case 2:ei=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);wo|=s,e.lanes=s,e.memoizedState=d}}function Iw(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var Ov=new kb.Component().refs;function Zh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:et({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var of={isMounted:function(e){return(e=e._reactInternals)?Po(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zt(),i=yi(e),o=Pr(r,i);o.payload=t,n!=null&&(o.callback=n),t=gi(e,o,i),t!==null&&(Qn(t,e,i,r),gu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zt(),i=yi(e),o=Pr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gi(e,o,i),t!==null&&(Qn(t,e,i,r),gu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),r=yi(e),i=Pr(n,r);i.tag=2,t!=null&&(i.callback=t),t=gi(e,i,r),t!==null&&(Qn(t,e,r,n),gu(t,e,r))}};function Rw(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ll(n,r)||!ll(i,o):!0}function Iv(e,t,n){var r=!1,i=_i,o=t.contextType;return typeof o=="object"&&o!==null?o=In(o):(i=en(t)?po:Bt.current,r=t.contextTypes,o=(r=r!=null)?vs(e,i):_i),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=of,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jw(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&of.enqueueReplaceState(t,t.state,null)}function Yh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ov,J1(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=In(o):(o=en(t)?po:Bt.current,i.context=vs(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zh(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&of.enqueueReplaceState(i,i.state,null),Ku(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ya(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ov&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function Hc(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $w(e){var t=e._init;return t(e._payload)}function Rv(e){function t(v,p){if(e){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=bi(v,p),v.index=0,v.sibling=null,v}function o(v,p,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,y,E){return p===null||p.tag!==6?(p=$0(y,v.mode,E),p.return=v,p):(p=i(p,y),p.return=v,p)}function l(v,p,y,E){var S=y.type;return S===Yo?u(v,p,y.props.children,E,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jr&&$w(S)===p.type)?(E=i(p,y.props),E.ref=ya(v,p,y),E.return=v,E):(E=Cu(y.type,y.key,y.props,null,v.mode,E),E.ref=ya(v,p,y),E.return=v,E)}function c(v,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=M0(y,v.mode,E),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function u(v,p,y,E,S){return p===null||p.tag!==7?(p=co(y,v.mode,E,S),p.return=v,p):(p=i(p,y),p.return=v,p)}function d(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$0(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ic:return y=Cu(p.type,p.key,p.props,null,v.mode,y),y.ref=ya(v,null,p),y.return=v,y;case Zo:return p=M0(p,v.mode,y),p.return=v,p;case Jr:var E=p._init;return d(v,E(p._payload),y)}if(Da(p)||ha(p))return p=co(p,v.mode,y,null),p.return=v,p;Hc(v,p)}return null}function h(v,p,y,E){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(v,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ic:return y.key===S?l(v,p,y,E):null;case Zo:return y.key===S?c(v,p,y,E):null;case Jr:return S=y._init,h(v,p,S(y._payload),E)}if(Da(y)||ha(y))return S!==null?null:u(v,p,y,E,null);Hc(v,y)}return null}function m(v,p,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,a(p,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ic:return v=v.get(E.key===null?y:E.key)||null,l(p,v,E,S);case Zo:return v=v.get(E.key===null?y:E.key)||null,c(p,v,E,S);case Jr:var T=E._init;return m(v,p,y,T(E._payload),S)}if(Da(E)||ha(E))return v=v.get(y)||null,u(p,v,E,S,null);Hc(p,E)}return null}function w(v,p,y,E){for(var S=null,T=null,f=p,_=p=0,D=null;f!==null&&_<y.length;_++){f.index>_?(D=f,f=null):D=f.sibling;var O=h(v,f,y[_],E);if(O===null){f===null&&(f=D);break}e&&f&&O.alternate===null&&t(v,f),p=o(O,p,_),T===null?S=O:T.sibling=O,T=O,f=D}if(_===y.length)return n(v,f),Ze&&Xi(v,_),S;if(f===null){for(;_<y.length;_++)f=d(v,y[_],E),f!==null&&(p=o(f,p,_),T===null?S=f:T.sibling=f,T=f);return Ze&&Xi(v,_),S}for(f=r(v,f);_<y.length;_++)D=m(f,v,_,y[_],E),D!==null&&(e&&D.alternate!==null&&f.delete(D.key===null?_:D.key),p=o(D,p,_),T===null?S=D:T.sibling=D,T=D);return e&&f.forEach(function($){return t(v,$)}),Ze&&Xi(v,_),S}function x(v,p,y,E){var S=ha(y);if(typeof S!="function")throw Error(Q(150));if(y=S.call(y),y==null)throw Error(Q(151));for(var T=S=null,f=p,_=p=0,D=null,O=y.next();f!==null&&!O.done;_++,O=y.next()){f.index>_?(D=f,f=null):D=f.sibling;var $=h(v,f,O.value,E);if($===null){f===null&&(f=D);break}e&&f&&$.alternate===null&&t(v,f),p=o($,p,_),T===null?S=$:T.sibling=$,T=$,f=D}if(O.done)return n(v,f),Ze&&Xi(v,_),S;if(f===null){for(;!O.done;_++,O=y.next())O=d(v,O.value,E),O!==null&&(p=o(O,p,_),T===null?S=O:T.sibling=O,T=O);return Ze&&Xi(v,_),S}for(f=r(v,f);!O.done;_++,O=y.next())O=m(f,v,_,O.value,E),O!==null&&(e&&O.alternate!==null&&f.delete(O.key===null?_:O.key),p=o(O,p,_),T===null?S=O:T.sibling=O,T=O);return e&&f.forEach(function(Y){return t(v,Y)}),Ze&&Xi(v,_),S}function C(v,p,y,E){if(typeof y=="object"&&y!==null&&y.type===Yo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ic:e:{for(var S=y.key,T=p;T!==null;){if(T.key===S){if(S=y.type,S===Yo){if(T.tag===7){n(v,T.sibling),p=i(T,y.props.children),p.return=v,v=p;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jr&&$w(S)===T.type){n(v,T.sibling),p=i(T,y.props),p.ref=ya(v,T,y),p.return=v,v=p;break e}n(v,T);break}else t(v,T);T=T.sibling}y.type===Yo?(p=co(y.props.children,v.mode,E,y.key),p.return=v,v=p):(E=Cu(y.type,y.key,y.props,null,v.mode,E),E.ref=ya(v,p,y),E.return=v,v=E)}return s(v);case Zo:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=M0(y,v.mode,E),p.return=v,v=p}return s(v);case Jr:return T=y._init,C(v,p,T(y._payload),E)}if(Da(y))return w(v,p,y,E);if(ha(y))return x(v,p,y,E);Hc(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=$0(y,v.mode,E),p.return=v,v=p),s(v)):n(v,p)}return C}var Cs=Rv(!0),jv=Rv(!1),lc={},dr=Mi(lc),fl=Mi(lc),hl=Mi(lc);function io(e){if(e===lc)throw Error(Q(174));return e}function em(e,t){switch(We(hl,t),We(fl,e),We(dr,lc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ph(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ph(t,e)}Ge(dr),We(dr,t)}function Es(){Ge(dr),Ge(fl),Ge(hl)}function $v(e){io(hl.current);var t=io(dr.current),n=Ph(t,e.type);t!==n&&(We(fl,e),We(dr,n))}function tm(e){fl.current===e&&(Ge(dr),Ge(fl))}var Ye=Mi(0);function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var k0=[];function nm(){for(var e=0;e<k0.length;e++)k0[e]._workInProgressVersionPrimary=null;k0.length=0}var wu=zr.ReactCurrentDispatcher,D0=zr.ReactCurrentBatchConfig,go=0,Je=null,mt=null,Et=null,Yu=!1,Ha=!1,pl=0,wC=0;function Ot(){throw Error(Q(321))}function rm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function im(e,t,n,r,i,o){if(go=o,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wu.current=e===null||e.memoizedState===null?xC:CC,e=n(r,i),Ha){o=0;do{if(Ha=!1,pl=0,25<=o)throw Error(Q(301));o+=1,Et=mt=null,t.updateQueue=null,wu.current=EC,e=n(r,i)}while(Ha)}if(wu.current=Xu,t=mt!==null&&mt.next!==null,go=0,Et=mt=Je=null,Yu=!1,t)throw Error(Q(300));return e}function om(){var e=pl!==0;return pl=0,e}function ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=e:Et=Et.next=e,Et}function Rn(){if(mt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var t=Et===null?Je.memoizedState:Et.next;if(t!==null)Et=t,mt=e;else{if(e===null)throw Error(Q(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Je.memoizedState=Et=e:Et=Et.next=e}return Et}function ml(e,t){return typeof t=="function"?t(e):t}function O0(e){var t=Rn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=mt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((go&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Je.lanes|=u,wo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Zn(r,t.memoizedState)||(Zt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Je.lanes|=o,wo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function I0(e){var t=Rn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Zn(o,t.memoizedState)||(Zt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mv(){}function Bv(e,t){var n=Je,r=Rn(),i=t(),o=!Zn(r.memoizedState,i);if(o&&(r.memoizedState=i,Zt=!0),r=r.queue,sm(Lv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,gl(9,Uv.bind(null,n,r,i,t),void 0,null),Tt===null)throw Error(Q(349));go&30||Fv(n,t,i)}return i}function Fv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uv(e,t,n,r){t.value=n,t.getSnapshot=r,zv(t)&&Wv(e)}function Lv(e,t,n){return n(function(){zv(t)&&Wv(e)})}function zv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch{return!0}}function Wv(e){var t=Ir(e,1);t!==null&&Qn(t,e,1,-1)}function Mw(e){var t=ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:e},t.queue=e,e=e.dispatch=vC.bind(null,Je,e),[t.memoizedState,e]}function gl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hv(){return Rn().memoizedState}function yu(e,t,n,r){var i=ar();Je.flags|=e,i.memoizedState=gl(1|t,n,void 0,r===void 0?null:r)}function sf(e,t,n,r){var i=Rn();r=r===void 0?null:r;var o=void 0;if(mt!==null){var s=mt.memoizedState;if(o=s.destroy,r!==null&&rm(r,s.deps)){i.memoizedState=gl(t,n,o,r);return}}Je.flags|=e,i.memoizedState=gl(1|t,n,o,r)}function Bw(e,t){return yu(8390656,8,e,t)}function sm(e,t){return sf(2048,8,e,t)}function qv(e,t){return sf(4,2,e,t)}function Vv(e,t){return sf(4,4,e,t)}function Gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qv(e,t,n){return n=n!=null?n.concat([e]):null,sf(4,4,Gv.bind(null,t,e),n)}function am(){}function Kv(e,t){var n=Rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zv(e,t){var n=Rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yv(e,t,n){return go&21?(Zn(n,t)||(n=ev(),Je.lanes|=n,wo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=n)}function yC(e,t){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var r=D0.transition;D0.transition={};try{e(!1),t()}finally{Re=n,D0.transition=r}}function Xv(){return Rn().memoizedState}function bC(e,t,n){var r=yi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(e))e3(t,n);else if(n=kv(e,t,n,r),n!==null){var i=zt();Qn(n,e,r,i),t3(n,t,r)}}function vC(e,t,n){var r=yi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(e))e3(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Zn(a,s)){var l=t.interleaved;l===null?(i.next=i,X1(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=kv(e,t,i,r),n!==null&&(i=zt(),Qn(n,e,r,i),t3(n,t,r))}}function Jv(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function e3(e,t){Ha=Yu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t3(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,B1(e,n)}}var Xu={readContext:In,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},xC={readContext:In,useCallback:function(e,t){return ar().memoizedState=[e,t===void 0?null:t],e},useContext:In,useEffect:Bw,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yu(4194308,4,Gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yu(4194308,4,e,t)},useInsertionEffect:function(e,t){return yu(4,2,e,t)},useMemo:function(e,t){var n=ar();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ar();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bC.bind(null,Je,e),[r.memoizedState,e]},useRef:function(e){var t=ar();return e={current:e},t.memoizedState=e},useState:Mw,useDebugValue:am,useDeferredValue:function(e){return ar().memoizedState=e},useTransition:function(){var e=Mw(!1),t=e[0];return e=yC.bind(null,e[1]),ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Je,i=ar();if(Ze){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Tt===null)throw Error(Q(349));go&30||Fv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bw(Lv.bind(null,r,o,e),[e]),r.flags|=2048,gl(9,Uv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ar(),t=Tt.identifierPrefix;if(Ze){var n=Nr,r=_r;n=(r&~(1<<32-Gn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},CC={readContext:In,useCallback:Kv,useContext:In,useEffect:sm,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Vv,useMemo:Zv,useReducer:O0,useRef:Hv,useState:function(){return O0(ml)},useDebugValue:am,useDeferredValue:function(e){var t=Rn();return Yv(t,mt.memoizedState,e)},useTransition:function(){var e=O0(ml)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:Mv,useSyncExternalStore:Bv,useId:Xv,unstable_isNewReconciler:!1},EC={readContext:In,useCallback:Kv,useContext:In,useEffect:sm,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Vv,useMemo:Zv,useReducer:I0,useRef:Hv,useState:function(){return I0(ml)},useDebugValue:am,useDeferredValue:function(e){var t=Rn();return mt===null?t.memoizedState=e:Yv(t,mt.memoizedState,e)},useTransition:function(){var e=I0(ml)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:Mv,useSyncExternalStore:Bv,useId:Xv,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do n+=Yx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function R0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var SC=typeof WeakMap=="function"?WeakMap:Map;function n3(e,t,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ed||(ed=!0,lp=r),Xh(e,t)},n}function r3(e,t,n){n=Pr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xh(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xh(e,t),typeof r!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fw(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new SC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=BC.bind(null,e,t,n),t.then(e,e))}function Uw(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lw(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pr(-1,1),t.tag=2,gi(n,t,1))),n.lanes|=1),e)}var AC=zr.ReactCurrentOwner,Zt=!1;function Ut(e,t,n,r){t.child=e===null?jv(t,null,n,r):Cs(t,e.child,n,r)}function zw(e,t,n,r,i){n=n.render;var o=t.ref;return ps(t,i),r=im(e,t,n,r,o,i),n=om(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rr(e,t,i)):(Ze&&n&&V1(t),t.flags|=1,Ut(e,t,r,i),t.child)}function Ww(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,i3(e,t,o,r,i)):(e=Cu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(s,r)&&e.ref===t.ref)return Rr(e,t,i)}return t.flags|=1,e=bi(o,r),e.ref=t.ref,e.return=t,t.child=e}function i3(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ll(o,r)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Zt=!0);else return t.lanes=e.lanes,Rr(e,t,i)}return Jh(e,t,n,r,i)}function o3(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(as,dn),dn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,We(as,dn),dn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,We(as,dn),dn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,We(as,dn),dn|=r;return Ut(e,t,i,n),t.child}function s3(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jh(e,t,n,r,i){var o=en(n)?po:Bt.current;return o=vs(t,o),ps(t,i),n=im(e,t,n,r,o,i),r=om(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rr(e,t,i)):(Ze&&r&&V1(t),t.flags|=1,Ut(e,t,n,i),t.child)}function Hw(e,t,n,r,i){if(en(n)){var o=!0;Hu(t)}else o=!1;if(ps(t,i),t.stateNode===null)bu(e,t),Iv(t,n,r),Yh(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=en(n)?po:Bt.current,c=vs(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&jw(t,s,r,c),ei=!1;var h=t.memoizedState;s.state=h,Ku(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Jt.current||ei?(typeof u=="function"&&(Zh(t,n,u,r),l=t.memoizedState),(a=ei||Rw(t,n,a,r,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dv(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Wn(t.type,a),s.props=c,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=en(n)?po:Bt.current,l=vs(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&jw(t,s,r,l),ei=!1,h=t.memoizedState,s.state=h,Ku(t,r,s,i);var w=t.memoizedState;a!==d||h!==w||Jt.current||ei?(typeof m=="function"&&(Zh(t,n,m,r),w=t.memoizedState),(c=ei||Rw(t,n,c,r,h,w,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ep(e,t,n,r,o,i)}function ep(e,t,n,r,i,o){s3(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Pw(t,n,!1),Rr(e,t,o);r=t.stateNode,AC.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Cs(t,e.child,null,o),t.child=Cs(t,null,a,o)):Ut(e,t,a,o),t.memoizedState=r.state,i&&Pw(t,n,!0),t.child}function a3(e){var t=e.stateNode;t.pendingContext?Nw(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nw(e,t.context,!1),em(e,t.containerInfo)}function qw(e,t,n,r,i){return xs(),Q1(i),t.flags|=256,Ut(e,t,n,r),t.child}var tp={dehydrated:null,treeContext:null,retryLane:0};function np(e){return{baseLanes:e,cachePool:null,transitions:null}}function l3(e,t,n){var r=t.pendingProps,i=Ye.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),We(Ye,i&1),e===null)return Qh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=cf(s,r,0,null),e=co(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=np(n),t.memoizedState=tp,e):lm(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TC(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=bi(a,o):(o=co(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?np(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=tp,r}return o=e.child,e=o.sibling,r=bi(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lm(e,t){return t=cf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qc(e,t,n,r){return r!==null&&Q1(r),Cs(t,e.child,null,n),e=lm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function TC(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=R0(Error(Q(422))),qc(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=cf({mode:"visible",children:r.children},i,0,null),o=co(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Cs(t,e.child,null,s),t.child.memoizedState=np(s),t.memoizedState=tp,o);if(!(t.mode&1))return qc(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(Q(419)),r=R0(o,r,void 0),qc(e,t,s,r)}if(a=(s&e.childLanes)!==0,Zt||a){if(r=Tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ir(e,i),Qn(r,e,i,-1))}return pm(),r=R0(Error(Q(421))),qc(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=FC.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,fn=mi(i.nextSibling),pn=t,Ze=!0,qn=null,e!==null&&(Tn[_n++]=_r,Tn[_n++]=Nr,Tn[_n++]=mo,_r=e.id,Nr=e.overflow,mo=t),t=lm(t,r.children),t.flags|=4096,t)}function Vw(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kh(e.return,t,n)}function j0(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c3(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ut(e,t,r.children,n),r=Ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vw(e,n,t);else if(e.tag===19)Vw(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(We(Ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),j0(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}j0(t,!0,n,null,o);break;case"together":j0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _C(e,t,n){switch(t.tag){case 3:a3(t),xs();break;case 5:$v(t);break;case 1:en(t.type)&&Hu(t);break;case 4:em(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;We(Gu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(We(Ye,Ye.current&1),t.flags|=128,null):n&t.child.childLanes?l3(e,t,n):(We(Ye,Ye.current&1),e=Rr(e,t,n),e!==null?e.sibling:null);We(Ye,Ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c3(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),We(Ye,Ye.current),r)break;return null;case 22:case 23:return t.lanes=0,o3(e,t,n)}return Rr(e,t,n)}var u3,rp,d3,f3;u3=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rp=function(){};d3=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,io(dr.current);var o=null;switch(n){case"input":i=Ah(e,i),r=Ah(e,r),o=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),o=[];break;case"textarea":i=Nh(e,i),r=Nh(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zu)}kh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&qe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};f3=function(e,t,n,r){n!==r&&(t.flags|=4)};function ba(e,t){if(!Ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function It(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function NC(e,t,n){var r=t.pendingProps;switch(G1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(t),null;case 1:return en(t.type)&&Wu(),It(t),null;case 3:return r=t.stateNode,Es(),Ge(Jt),Ge(Bt),nm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qn!==null&&(dp(qn),qn=null))),rp(e,t),It(t),null;case 5:tm(t);var i=io(hl.current);if(n=t.type,e!==null&&t.stateNode!=null)d3(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return It(t),null}if(e=io(dr.current),Wc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lr]=t,r[dl]=o,e=(t.mode&1)!==0,n){case"dialog":qe("cancel",r),qe("close",r);break;case"iframe":case"object":case"embed":qe("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)qe(Ia[i],r);break;case"source":qe("error",r);break;case"img":case"image":case"link":qe("error",r),qe("load",r);break;case"details":qe("toggle",r);break;case"input":tw(r,o),qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},qe("invalid",r);break;case"textarea":rw(r,o),qe("invalid",r)}kh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&zc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&zc(r.textContent,a,e),i=["children",""+a]):tl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&qe("scroll",r)}switch(n){case"input":Rc(r),nw(r,o,!0);break;case"textarea":Rc(r),iw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lr]=t,e[dl]=r,u3(e,t,!1,!1),t.stateNode=e;e:{switch(s=Dh(n,r),n){case"dialog":qe("cancel",e),qe("close",e),i=r;break;case"iframe":case"object":case"embed":qe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)qe(Ia[i],e);i=r;break;case"source":qe("error",e),i=r;break;case"img":case"image":case"link":qe("error",e),qe("load",e),i=r;break;case"details":qe("toggle",e),i=r;break;case"input":tw(e,r),i=Ah(e,r),qe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),qe("invalid",e);break;case"textarea":rw(e,r),i=Nh(e,r),qe("invalid",e);break;default:i=r}kh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?zb(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ub(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&nl(e,l):typeof l=="number"&&nl(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(tl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&qe("scroll",e):l!=null&&O1(e,o,l,s))}switch(n){case"input":Rc(e),nw(e,r,!1);break;case"textarea":Rc(e),iw(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ti(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?us(e,!!r.multiple,o,!1):r.defaultValue!=null&&us(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return It(t),null;case 6:if(e&&t.stateNode!=null)f3(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=io(hl.current),io(dr.current),Wc(t)){if(r=t.stateNode,n=t.memoizedProps,r[lr]=t,(o=r.nodeValue!==n)&&(e=pn,e!==null))switch(e.tag){case 3:zc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lr]=t,t.stateNode=r}return It(t),null;case 13:if(Ge(Ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ze&&fn!==null&&t.mode&1&&!(t.flags&128))Pv(),xs(),t.flags|=98560,o=!1;else if(o=Wc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[lr]=t}else xs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;It(t),o=!1}else qn!==null&&(dp(qn),qn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ye.current&1?gt===0&&(gt=3):pm())),t.updateQueue!==null&&(t.flags|=4),It(t),null);case 4:return Es(),rp(e,t),e===null&&cl(t.stateNode.containerInfo),It(t),null;case 10:return Y1(t.type._context),It(t),null;case 17:return en(t.type)&&Wu(),It(t),null;case 19:if(Ge(Ye),o=t.memoizedState,o===null)return It(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ba(o,!1);else{if(gt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zu(e),s!==null){for(t.flags|=128,ba(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return We(Ye,Ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&st()>As&&(t.flags|=128,r=!0,ba(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ba(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ze)return It(t),null}else 2*st()-o.renderingStartTime>As&&n!==1073741824&&(t.flags|=128,r=!0,ba(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=st(),t.sibling=null,n=Ye.current,We(Ye,r?n&1|2:n&1),t):(It(t),null);case 22:case 23:return hm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dn&1073741824&&(It(t),t.subtreeFlags&6&&(t.flags|=8192)):It(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function PC(e,t){switch(G1(t),t.tag){case 1:return en(t.type)&&Wu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Es(),Ge(Jt),Ge(Bt),nm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tm(t),null;case 13:if(Ge(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));xs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(Ye),null;case 4:return Es(),null;case 10:return Y1(t.type._context),null;case 22:case 23:return hm(),null;case 24:return null;default:return null}}var Vc=!1,$t=!1,kC=typeof WeakSet=="function"?WeakSet:Set,oe=null;function ss(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function ip(e,t,n){try{n()}catch(r){nt(e,t,r)}}var Gw=!1;function DC(e,t){if(Lh=Fu,e=gv(),q1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++u===r&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:e,selectionRange:n},Fu=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,C=w.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Wn(t.type,x),C);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(E){nt(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return w=Gw,Gw=!1,w}function qa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ip(t,n,o)}i=i.next}while(i!==r)}}function af(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function op(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h3(e){var t=e.alternate;t!==null&&(e.alternate=null,h3(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lr],delete t[dl],delete t[qh],delete t[hC],delete t[pC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p3(e){return e.tag===5||e.tag===3||e.tag===4}function Qw(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zu));else if(r!==4&&(e=e.child,e!==null))for(sp(e,t,n),e=e.sibling;e!==null;)sp(e,t,n),e=e.sibling}function ap(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ap(e,t,n),e=e.sibling;e!==null;)ap(e,t,n),e=e.sibling}var Nt=null,Hn=!1;function Kr(e,t,n){for(n=n.child;n!==null;)m3(e,t,n),n=n.sibling}function m3(e,t,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Xd,n)}catch{}switch(n.tag){case 5:$t||ss(n,t);case 6:var r=Nt,i=Hn;Nt=null,Kr(e,t,n),Nt=r,Hn=i,Nt!==null&&(Hn?(e=Nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Hn?(e=Nt,n=n.stateNode,e.nodeType===8?N0(e.parentNode,n):e.nodeType===1&&N0(e,n),sl(e)):N0(Nt,n.stateNode));break;case 4:r=Nt,i=Hn,Nt=n.stateNode.containerInfo,Hn=!0,Kr(e,t,n),Nt=r,Hn=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ip(n,t,s),i=i.next}while(i!==r)}Kr(e,t,n);break;case 1:if(!$t&&(ss(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,t,a)}Kr(e,t,n);break;case 21:Kr(e,t,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,Kr(e,t,n),$t=r):Kr(e,t,n);break;default:Kr(e,t,n)}}function Kw(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kC),t.forEach(function(r){var i=UC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Hn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Hn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Nt===null)throw Error(Q(160));m3(o,s,i),Nt=null,Hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){nt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g3(t,e),t=t.sibling}function g3(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ln(t,e),nr(e),r&4){try{qa(3,e,e.return),af(3,e)}catch(x){nt(e,e.return,x)}try{qa(5,e,e.return)}catch(x){nt(e,e.return,x)}}break;case 1:Ln(t,e),nr(e),r&512&&n!==null&&ss(n,n.return);break;case 5:if(Ln(t,e),nr(e),r&512&&n!==null&&ss(n,n.return),e.flags&32){var i=e.stateNode;try{nl(i,"")}catch(x){nt(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Mb(i,o),Dh(a,s);var c=Dh(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?zb(i,d):u==="dangerouslySetInnerHTML"?Ub(i,d):u==="children"?nl(i,d):O1(i,u,d,c)}switch(a){case"input":Th(i,o);break;case"textarea":Bb(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?us(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?us(i,!!o.multiple,o.defaultValue,!0):us(i,!!o.multiple,o.multiple?[]:"",!1))}i[dl]=o}catch(x){nt(e,e.return,x)}}break;case 6:if(Ln(t,e),nr(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){nt(e,e.return,x)}}break;case 3:if(Ln(t,e),nr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(x){nt(e,e.return,x)}break;case 4:Ln(t,e),nr(e);break;case 13:Ln(t,e),nr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dm=st())),r&4&&Kw(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?($t=(c=$t)||u,Ln(t,e),$t=c):Ln(t,e),nr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(oe=e,u=e.child;u!==null;){for(d=oe=u;oe!==null;){switch(h=oe,m=h.child,h.tag){case 0:case 11:case 14:case 15:qa(4,h,h.return);break;case 1:ss(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){nt(r,n,x)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){Yw(d);continue}}m!==null?(m.return=h,oe=m):Yw(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lb("display",s))}catch(x){nt(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){nt(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ln(t,e),nr(e),r&4&&Kw(e);break;case 21:break;default:Ln(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(p3(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var o=Qw(e);ap(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Qw(e);sp(e,a,s);break;default:throw Error(Q(161))}}catch(l){nt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OC(e,t,n){oe=e,w3(e)}function w3(e,t,n){for(var r=(e.mode&1)!==0;oe!==null;){var i=oe,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Vc;var c=$t;if(Vc=s,($t=l)&&!c)for(oe=i;oe!==null;)s=oe,l=s.child,s.tag===22&&s.memoizedState!==null?Xw(i):l!==null?(l.return=s,oe=l):Xw(i);for(;o!==null;)oe=o,w3(o),o=o.sibling;oe=i,Vc=a,$t=c}Zw(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,oe=o):Zw(e)}}function Zw(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$t||af(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Wn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Iw(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iw(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}$t||t.flags&512&&op(t)}catch(h){nt(t,t.return,h)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function Yw(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function Xw(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{af(4,t)}catch(l){nt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){nt(t,i,l)}}var o=t.return;try{op(t)}catch(l){nt(t,o,l)}break;case 5:var s=t.return;try{op(t)}catch(l){nt(t,s,l)}}}catch(l){nt(t,t.return,l)}if(t===e){oe=null;break}var a=t.sibling;if(a!==null){a.return=t.return,oe=a;break}oe=t.return}}var IC=Math.ceil,Ju=zr.ReactCurrentDispatcher,cm=zr.ReactCurrentOwner,On=zr.ReactCurrentBatchConfig,Pe=0,Tt=null,ft=null,Pt=0,dn=0,as=Mi(0),gt=0,wl=null,wo=0,lf=0,um=0,Va=null,Kt=null,dm=0,As=1/0,Sr=null,ed=!1,lp=null,wi=null,Gc=!1,ci=null,td=0,Ga=0,cp=null,vu=-1,xu=0;function zt(){return Pe&6?st():vu!==-1?vu:vu=st()}function yi(e){return e.mode&1?Pe&2&&Pt!==0?Pt&-Pt:gC.transition!==null?(xu===0&&(xu=ev()),xu):(e=Re,e!==0||(e=window.event,e=e===void 0?16:av(e.type)),e):1}function Qn(e,t,n,r){if(50<Ga)throw Ga=0,cp=null,Error(Q(185));oc(e,n,r),(!(Pe&2)||e!==Tt)&&(e===Tt&&(!(Pe&2)&&(lf|=n),gt===4&&ri(e,Pt)),tn(e,r),n===1&&Pe===0&&!(t.mode&1)&&(As=st()+500,rf&&Bi()))}function tn(e,t){var n=e.callbackNode;g8(e,t);var r=Bu(e,e===Tt?Pt:0);if(r===0)n!==null&&aw(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aw(n),t===1)e.tag===0?mC(Jw.bind(null,e)):Tv(Jw.bind(null,e)),dC(function(){!(Pe&6)&&Bi()}),n=null;else{switch(tv(r)){case 1:n=M1;break;case 4:n=Xb;break;case 16:n=Mu;break;case 536870912:n=Jb;break;default:n=Mu}n=A3(n,y3.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function y3(e,t){if(vu=-1,xu=0,Pe&6)throw Error(Q(327));var n=e.callbackNode;if(ms()&&e.callbackNode!==n)return null;var r=Bu(e,e===Tt?Pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nd(e,r);else{t=r;var i=Pe;Pe|=2;var o=v3();(Tt!==e||Pt!==t)&&(Sr=null,As=st()+500,lo(e,t));do try{$C();break}catch(a){b3(e,a)}while(1);Z1(),Ju.current=o,Pe=i,ft!==null?t=0:(Tt=null,Pt=0,t=gt)}if(t!==0){if(t===2&&(i=$h(e),i!==0&&(r=i,t=up(e,i))),t===1)throw n=wl,lo(e,0),ri(e,r),tn(e,st()),n;if(t===6)ri(e,r);else{if(i=e.current.alternate,!(r&30)&&!RC(i)&&(t=nd(e,r),t===2&&(o=$h(e),o!==0&&(r=o,t=up(e,o))),t===1))throw n=wl,lo(e,0),ri(e,r),tn(e,st()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:Ji(e,Kt,Sr);break;case 3:if(ri(e,r),(r&130023424)===r&&(t=dm+500-st(),10<t)){if(Bu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){zt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hh(Ji.bind(null,e,Kt,Sr),t);break}Ji(e,Kt,Sr);break;case 4:if(ri(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Gn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IC(r/1960))-r,10<r){e.timeoutHandle=Hh(Ji.bind(null,e,Kt,Sr),r);break}Ji(e,Kt,Sr);break;case 5:Ji(e,Kt,Sr);break;default:throw Error(Q(329))}}}return tn(e,st()),e.callbackNode===n?y3.bind(null,e):null}function up(e,t){var n=Va;return e.current.memoizedState.isDehydrated&&(lo(e,t).flags|=256),e=nd(e,t),e!==2&&(t=Kt,Kt=n,t!==null&&dp(t)),e}function dp(e){Kt===null?Kt=e:Kt.push.apply(Kt,e)}function RC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ri(e,t){for(t&=~um,t&=~lf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gn(t),r=1<<n;e[n]=-1,t&=~r}}function Jw(e){if(Pe&6)throw Error(Q(327));ms();var t=Bu(e,0);if(!(t&1))return tn(e,st()),null;var n=nd(e,t);if(e.tag!==0&&n===2){var r=$h(e);r!==0&&(t=r,n=up(e,r))}if(n===1)throw n=wl,lo(e,0),ri(e,t),tn(e,st()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ji(e,Kt,Sr),tn(e,st()),null}function fm(e,t){var n=Pe;Pe|=1;try{return e(t)}finally{Pe=n,Pe===0&&(As=st()+500,rf&&Bi())}}function yo(e){ci!==null&&ci.tag===0&&!(Pe&6)&&ms();var t=Pe;Pe|=1;var n=On.transition,r=Re;try{if(On.transition=null,Re=1,e)return e()}finally{Re=r,On.transition=n,Pe=t,!(Pe&6)&&Bi()}}function hm(){dn=as.current,Ge(as)}function lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uC(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(G1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wu();break;case 3:Es(),Ge(Jt),Ge(Bt),nm();break;case 5:tm(r);break;case 4:Es();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:Y1(r.type._context);break;case 22:case 23:hm()}n=n.return}if(Tt=e,ft=e=bi(e.current,null),Pt=dn=t,gt=0,wl=null,um=lf=wo=0,Kt=Va=null,ro!==null){for(t=0;t<ro.length;t++)if(n=ro[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ro=null}return e}function b3(e,t){do{var n=ft;try{if(Z1(),wu.current=Xu,Yu){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yu=!1}if(go=0,Et=mt=Je=null,Ha=!1,pl=0,cm.current=null,n===null||n.return===null){gt=1,wl=t,ft=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Uw(s);if(m!==null){m.flags&=-257,Lw(m,s,a,o,t),m.mode&1&&Fw(o,c,t),t=m,l=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(l),t.updateQueue=x}else w.add(l);break e}else{if(!(t&1)){Fw(o,c,t),pm();break e}l=Error(Q(426))}}else if(Ze&&a.mode&1){var C=Uw(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Lw(C,s,a,o,t),Q1(Ss(l,a));break e}}o=l=Ss(l,a),gt!==4&&(gt=2),Va===null?Va=[o]:Va.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=n3(o,l,t);Ow(o,v);break e;case 1:a=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wi===null||!wi.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=r3(o,a,t);Ow(o,E);break e}}o=o.return}while(o!==null)}C3(n)}catch(S){t=S,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function v3(){var e=Ju.current;return Ju.current=Xu,e===null?Xu:e}function pm(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||!(wo&268435455)&&!(lf&268435455)||ri(Tt,Pt)}function nd(e,t){var n=Pe;Pe|=2;var r=v3();(Tt!==e||Pt!==t)&&(Sr=null,lo(e,t));do try{jC();break}catch(i){b3(e,i)}while(1);if(Z1(),Pe=n,Ju.current=r,ft!==null)throw Error(Q(261));return Tt=null,Pt=0,gt}function jC(){for(;ft!==null;)x3(ft)}function $C(){for(;ft!==null&&!a8();)x3(ft)}function x3(e){var t=S3(e.alternate,e,dn);e.memoizedProps=e.pendingProps,t===null?C3(e):ft=t,cm.current=null}function C3(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=PC(n,t),n!==null){n.flags&=32767,ft=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gt=6,ft=null;return}}else if(n=NC(n,t,dn),n!==null){ft=n;return}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);gt===0&&(gt=5)}function Ji(e,t,n){var r=Re,i=On.transition;try{On.transition=null,Re=1,MC(e,t,n,r)}finally{On.transition=i,Re=r}return null}function MC(e,t,n,r){do ms();while(ci!==null);if(Pe&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(w8(e,o),e===Tt&&(ft=Tt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gc||(Gc=!0,A3(Mu,function(){return ms(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=On.transition,On.transition=null;var s=Re;Re=1;var a=Pe;Pe|=4,cm.current=null,DC(e,n),g3(n,e),rC(zh),Fu=!!Lh,zh=Lh=null,e.current=n,OC(n),l8(),Pe=a,Re=s,On.transition=o}else e.current=n;if(Gc&&(Gc=!1,ci=e,td=i),o=e.pendingLanes,o===0&&(wi=null),d8(n.stateNode),tn(e,st()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ed)throw ed=!1,e=lp,lp=null,e;return td&1&&e.tag!==0&&ms(),o=e.pendingLanes,o&1?e===cp?Ga++:(Ga=0,cp=e):Ga=0,Bi(),null}function ms(){if(ci!==null){var e=tv(td),t=On.transition,n=Re;try{if(On.transition=null,Re=16>e?16:e,ci===null)var r=!1;else{if(e=ci,ci=null,td=0,Pe&6)throw Error(Q(331));var i=Pe;for(Pe|=4,oe=e.current;oe!==null;){var o=oe,s=o.child;if(oe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(oe=c;oe!==null;){var u=oe;switch(u.tag){case 0:case 11:case 15:qa(8,u,o)}var d=u.child;if(d!==null)d.return=u,oe=d;else for(;oe!==null;){u=oe;var h=u.sibling,m=u.return;if(h3(u),u===c){oe=null;break}if(h!==null){h.return=m,oe=h;break}oe=m}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}oe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,oe=s;else e:for(;oe!==null;){if(o=oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qa(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,oe=v;break e}oe=o.return}}var p=e.current;for(oe=p;oe!==null;){s=oe;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,oe=y;else e:for(s=p;oe!==null;){if(a=oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:af(9,a)}}catch(S){nt(a,a.return,S)}if(a===s){oe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,oe=E;break e}oe=a.return}}if(Pe=i,Bi(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Xd,e)}catch{}r=!0}return r}finally{Re=n,On.transition=t}}return!1}function e2(e,t,n){t=Ss(n,t),t=n3(e,t,1),e=gi(e,t,1),t=zt(),e!==null&&(oc(e,1,t),tn(e,t))}function nt(e,t,n){if(e.tag===3)e2(e,e,n);else for(;t!==null;){if(t.tag===3){e2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wi===null||!wi.has(r))){e=Ss(n,e),e=r3(t,e,1),t=gi(t,e,1),e=zt(),t!==null&&(oc(t,1,e),tn(t,e));break}}t=t.return}}function BC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,Tt===e&&(Pt&n)===n&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>st()-dm?lo(e,0):um|=n),tn(e,t)}function E3(e,t){t===0&&(e.mode&1?(t=Mc,Mc<<=1,!(Mc&130023424)&&(Mc=4194304)):t=1);var n=zt();e=Ir(e,t),e!==null&&(oc(e,t,n),tn(e,n))}function FC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E3(e,n)}function UC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),E3(e,n)}var S3;S3=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Zt=!1,_C(e,t,n);Zt=!!(e.flags&131072)}else Zt=!1,Ze&&t.flags&1048576&&_v(t,Vu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bu(e,t),e=t.pendingProps;var i=vs(t,Bt.current);ps(t,n),i=im(null,t,r,e,i,n);var o=om();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,en(r)?(o=!0,Hu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,J1(t),i.updater=of,t.stateNode=i,i._reactInternals=t,Yh(t,r,e,n),t=ep(null,t,r,!0,o,n)):(t.tag=0,Ze&&o&&V1(t),Ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zC(r),e=Wn(r,e),i){case 0:t=Jh(null,t,r,e,n);break e;case 1:t=Hw(null,t,r,e,n);break e;case 11:t=zw(null,t,r,e,n);break e;case 14:t=Ww(null,t,r,Wn(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Wn(r,i),Jh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Wn(r,i),Hw(e,t,r,i,n);case 3:e:{if(a3(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dv(e,t),Ku(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ss(Error(Q(423)),t),t=qw(e,t,r,n,i);break e}else if(r!==i){i=Ss(Error(Q(424)),t),t=qw(e,t,r,n,i);break e}else for(fn=mi(t.stateNode.containerInfo.firstChild),pn=t,Ze=!0,qn=null,n=jv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){t=Rr(e,t,n);break e}Ut(e,t,r,n)}t=t.child}return t;case 5:return $v(t),e===null&&Qh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Wh(r,i)?s=null:o!==null&&Wh(r,o)&&(t.flags|=32),s3(e,t),Ut(e,t,s,n),t.child;case 6:return e===null&&Qh(t),null;case 13:return l3(e,t,n);case 4:return em(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cs(t,null,r,n):Ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Wn(r,i),zw(e,t,r,i,n);case 7:return Ut(e,t,t.pendingProps,n),t.child;case 8:return Ut(e,t,t.pendingProps.children,n),t.child;case 12:return Ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,We(Gu,r._currentValue),r._currentValue=s,o!==null)if(Zn(o.value,s)){if(o.children===i.children&&!Jt.current){t=Rr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Pr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kh(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Q(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Kh(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ps(t,n),i=In(i),r=r(i),t.flags|=1,Ut(e,t,r,n),t.child;case 14:return r=t.type,i=Wn(r,t.pendingProps),i=Wn(r.type,i),Ww(e,t,r,i,n);case 15:return i3(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Wn(r,i),bu(e,t),t.tag=1,en(r)?(e=!0,Hu(t)):e=!1,ps(t,n),Iv(t,r,i),Yh(t,r,i,n),ep(null,t,r,!0,e,n);case 19:return c3(e,t,n);case 22:return o3(e,t,n)}throw Error(Q(156,t.tag))};function A3(e,t){return Yb(e,t)}function LC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,r){return new LC(e,t,n,r)}function mm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zC(e){if(typeof e=="function")return mm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===R1)return 11;if(e===j1)return 14}return 2}function bi(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cu(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")mm(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Yo:return co(n.children,i,o,t);case I1:s=8,i|=8;break;case xh:return e=Nn(12,n,t,i|2),e.elementType=xh,e.lanes=o,e;case Ch:return e=Nn(13,n,t,i),e.elementType=Ch,e.lanes=o,e;case Eh:return e=Nn(19,n,t,i),e.elementType=Eh,e.lanes=o,e;case Rb:return cf(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ob:s=10;break e;case Ib:s=9;break e;case R1:s=11;break e;case j1:s=14;break e;case Jr:s=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Nn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function co(e,t,n,r){return e=Nn(7,e,r,t),e.lanes=n,e}function cf(e,t,n,r){return e=Nn(22,e,r,t),e.elementType=Rb,e.lanes=n,e.stateNode={isHidden:!1},e}function $0(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function M0(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function WC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=w0(0),this.expirationTimes=w0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=w0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gm(e,t,n,r,i,o,s,a,l){return e=new WC(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Nn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},J1(o),e}function HC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function T3(e){if(!e)return _i;e=e._reactInternals;e:{if(Po(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(en(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(en(n))return Av(e,n,t)}return t}function _3(e,t,n,r,i,o,s,a,l){return e=gm(n,r,!0,e,i,o,s,a,l),e.context=T3(null),n=e.current,r=zt(),i=yi(n),o=Pr(r,i),o.callback=t??null,gi(n,o,i),e.current.lanes=i,oc(e,i,r),tn(e,r),e}function uf(e,t,n,r){var i=t.current,o=zt(),s=yi(i);return n=T3(n),t.context===null?t.context=n:t.pendingContext=n,t=Pr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gi(i,t,s),e!==null&&(Qn(e,i,s,o),gu(e,i,s)),s}function rd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function t2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wm(e,t){t2(e,t),(e=e.alternate)&&t2(e,t)}function qC(){return null}var N3=typeof reportError=="function"?reportError:function(e){console.error(e)};function ym(e){this._internalRoot=e}df.prototype.render=ym.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));uf(e,t,null,null)};df.prototype.unmount=ym.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yo(function(){uf(null,e,null,null)}),t[Or]=null}};function df(e){this._internalRoot=e}df.prototype.unstable_scheduleHydration=function(e){if(e){var t=iv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ni.length&&t!==0&&t<ni[n].priority;n++);ni.splice(n,0,e),n===0&&sv(e)}};function bm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ff(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function n2(){}function VC(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=rd(s);o.call(c)}}var s=_3(t,r,e,0,null,!1,!1,"",n2);return e._reactRootContainer=s,e[Or]=s.current,cl(e.nodeType===8?e.parentNode:e),yo(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=rd(l);a.call(c)}}var l=gm(e,0,!1,null,null,!1,!1,"",n2);return e._reactRootContainer=l,e[Or]=l.current,cl(e.nodeType===8?e.parentNode:e),yo(function(){uf(t,l,n,r)}),l}function hf(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=rd(s);a.call(l)}}uf(t,s,e,i)}else s=VC(n,t,e,i,r);return rd(s)}nv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oa(t.pendingLanes);n!==0&&(B1(t,n|1),tn(t,st()),!(Pe&6)&&(As=st()+500,Bi()))}break;case 13:yo(function(){var r=Ir(e,1);if(r!==null){var i=zt();Qn(r,e,1,i)}}),wm(e,1)}};F1=function(e){if(e.tag===13){var t=Ir(e,134217728);if(t!==null){var n=zt();Qn(t,e,134217728,n)}wm(e,134217728)}};rv=function(e){if(e.tag===13){var t=yi(e),n=Ir(e,t);if(n!==null){var r=zt();Qn(n,e,t,r)}wm(e,t)}};iv=function(){return Re};ov=function(e,t){var n=Re;try{return Re=e,t()}finally{Re=n}};Ih=function(e,t,n){switch(t){case"input":if(Th(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=nf(r);if(!i)throw Error(Q(90));$b(r),Th(r,i)}}}break;case"textarea":Bb(e,n);break;case"select":t=n.value,t!=null&&us(e,!!n.multiple,t,!1)}};qb=fm;Vb=yo;var GC={usingClientEntryPoint:!1,Events:[ac,ts,nf,Wb,Hb,fm]},va={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QC={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kb(e),e===null?null:e.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Xd=Qc.inject(QC),ur=Qc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GC;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(t))throw Error(Q(200));return HC(e,t,null,n)};gn.createRoot=function(e,t){if(!bm(e))throw Error(Q(299));var n=!1,r="",i=N3;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gm(e,1,!1,null,null,n,!1,r,i),e[Or]=t.current,cl(e.nodeType===8?e.parentNode:e),new ym(t)};gn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Kb(t),e=e===null?null:e.stateNode,e};gn.flushSync=function(e){return yo(e)};gn.hydrate=function(e,t,n){if(!ff(t))throw Error(Q(200));return hf(null,e,t,!0,n)};gn.hydrateRoot=function(e,t,n){if(!bm(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=N3;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_3(t,null,e,1,n??null,i,!1,o,s),e[Or]=t.current,cl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new df(t)};gn.render=function(e,t,n){if(!ff(t))throw Error(Q(200));return hf(null,e,t,!1,n)};gn.unmountComponentAtNode=function(e){if(!ff(e))throw Error(Q(40));return e._reactRootContainer?(yo(function(){hf(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1};gn.unstable_batchedUpdates=fm;gn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ff(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return hf(e,t,n,!1,r)};gn.version="18.2.0-next-9e3b772b8-20220608";function P3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P3)}catch(e){console.error(e)}}P3(),_b.exports=gn;var KC=_b.exports,r2=KC;bh.createRoot=r2.createRoot,bh.hydrateRoot=r2.hydrateRoot;let Yr;function ZC(e){e&&(Yr=e)}function YC(){if(!Yr)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function e(n){await(Yr==null?void 0:Yr.open(n))}async function t(){await(Yr==null?void 0:Yr.close())}return{open:e,close:t}}function vm(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}const XC="1.19.6",JC=e=>e,pf=e=>e,e7=()=>`viem@${XC}`;class Z extends Error{constructor(t,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:e7()});const r=n.cause instanceof Z?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof Z&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(t){return k3(this,t)}}function k3(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e?k3(e.cause,t):t?null:e}class t7 extends Z{constructor({max:t,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class n7 extends Z{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class r7 extends Z{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function fr(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function wt(e){return fr(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function uo(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let i=0;i<n.length-1&&n[t==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class D3 extends Z{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class O3 extends Z{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Ys(e,{dir:t,size:n=32}={}){return typeof e=="string"?vi(e,{dir:t,size:n}):i7(e,{dir:t,size:n})}function vi(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new O3({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function i7(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new O3({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=t==="right";r[o?i:n-i-1]=e[o?i:e.length-i-1]}return r}const o7=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Wr(e,t={}){return typeof e=="number"||typeof e=="bigint"?ge(e,t):typeof e=="string"?xm(e,t):typeof e=="boolean"?I3(e,t):yl(e,t)}function I3(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(Fi(n,{size:t.size}),Ys(n,{size:t.size})):n}function yl(e,t={}){let n="";for(let i=0;i<e.length;i++)n+=o7[e[i]];const r=`0x${n}`;return typeof t.size=="number"?(Fi(r,{size:t.size}),Ys(r,{dir:"right",size:t.size})):r}function ge(e,t={}){const{signed:n,size:r}=t,i=BigInt(e);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof e=="bigint"?"n":"";throw new t7({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${e}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Ys(a,{size:r}):a}const s7=new TextEncoder;function xm(e,t={}){const n=s7.encode(e);return yl(n,t)}const a7=new TextEncoder;function Ni(e,t={}){return typeof e=="number"||typeof e=="bigint"?c7(e,t):typeof e=="boolean"?l7(e,t):fr(e)?Cm(e,t):kr(e,t)}function l7(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(Fi(n,{size:t.size}),Ys(n,{size:t.size})):n}const vr={zero:48,nine:57,A:65,F:70,a:97,f:102};function i2(e){if(e>=vr.zero&&e<=vr.nine)return e-vr.zero;if(e>=vr.A&&e<=vr.F)return e-(vr.A-10);if(e>=vr.a&&e<=vr.f)return e-(vr.a-10)}function Cm(e,t={}){let n=e;t.size&&(Fi(n,{size:t.size}),n=Ys(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=i2(r.charCodeAt(a++)),c=i2(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new Z(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function c7(e,t){const n=ge(e,t);return Cm(n)}function kr(e,t={}){const n=a7.encode(e);return typeof t.size=="number"?(Fi(n,{size:t.size}),Ys(n,{dir:"right",size:t.size})):n}function Fi(e,{size:t}){if(wt(e)>t)throw new r7({givenSize:wt(e),maxSize:t})}function mf(e,t={}){const{signed:n}=t;t.size&&Fi(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function u7(e,t={}){let n=e;if(t.size&&(Fi(n,{size:t.size}),n=uo(n)),uo(n)==="0x00")return!1;if(uo(n)==="0x01")return!0;throw new n7(n)}function Mt(e,t={}){return Number(mf(e,t))}function Em(e,t={}){let n=Cm(e);return t.size&&(Fi(n,{size:t.size}),n=uo(n,{dir:"right"})),new TextDecoder().decode(n)}const R3={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function j3(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Mt(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Mt(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?R3[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function $3(e){var n;const t=(n=e.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:j3(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}function Yn(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}const d7={"0x0":"reverted","0x1":"success"};function f7(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(t=>Yn(t)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Mt(e.transactionIndex):null,status:e.status?d7[e.status]:null,type:e.type?R3[e.type]||e.type:null}}const h7=vm({id:8453,name:"Base Mainnet",network:"base",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://basescan.org"},default:{name:"BaseScan",url:"https://basescan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),p7={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function gf(e){return{...e,gas:typeof e.gas<"u"?ge(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?ge(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?ge(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?ge(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?ge(e.nonce):void 0,type:typeof e.type<"u"?p7[e.type]:void 0,value:typeof e.value<"u"?ge(e.value):void 0}}class bl extends Z{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class fp extends Z{constructor({blockNumber:t,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let m7=class extends Z{constructor({chain:t,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class g7 extends Z{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class M3 extends Z{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const B3={gwei:9,wei:18},w7={ether:-9,wei:9},y7={ether:-18,gwei:-9};function id(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function nn(e,t="wei"){return id(e,w7[t])}class ls extends Z{constructor({cause:t,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(ls,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ls,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class od extends Z{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${nn(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(od,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class hp extends Z{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${nn(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(hp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class pp extends Z{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(pp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class mp extends Z{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(mp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class gp extends Z{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(gp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class wp extends Z{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(wp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class yp extends Z{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(yp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class bp extends Z{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(bp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class vp extends Z{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(vp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class sd extends Z{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${nn(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${nn(r)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(sd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class wf extends Z{constructor({cause:t}){super(`An error occurred while executing: ${t==null?void 0:t.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const b7=/^0x[a-fA-F0-9]{40}$/;function Ts(e){return b7.test(e)}function jr(e){return typeof e[0]=="string"?Sm(e):v7(e)}function v7(e){let t=0;for(const i of e)t+=i.length;const n=new Uint8Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function Sm(e){return`0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`}function x7(e,t){const n=e.exec(t);return n==null?void 0:n.groups}const o2=/^tuple(?<array>(\[(\d*)\])*)$/;function xp(e){let t=e.type;if(o2.test(e.type)&&"components"in e){t="(";const n=e.components.length;for(let i=0;i<n;i++){const o=e.components[i];t+=xp(o),i<n-1&&(t+=", ")}const r=x7(o2,e.type);return t+=`)${(r==null?void 0:r.array)??""}`,xp({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function xa(e){let t="";const n=e.length;for(let r=0;r<n;r++){const i=e[r];t+=xp(i),r!==n-1&&(t+=", ")}return t}function C7(e){return e.type==="function"?`function ${e.name}(${xa(e.inputs)})${e.stateMutability&&e.stateMutability!=="nonpayable"?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${xa(e.outputs)})`:""}`:e.type==="event"?`event ${e.name}(${xa(e.inputs)})`:e.type==="error"?`error ${e.name}(${xa(e.inputs)})`:e.type==="constructor"?`constructor(${xa(e.inputs)})${e.stateMutability==="payable"?" payable":""}`:e.type==="fallback"?"fallback()":"receive() external payable"}function de(e,t,n){return r=>{var i;return((i=e[t.name||n])==null?void 0:i.call(e,r))??t(e,r)}}function ko(e,{includeName:t=!1}={}){if(e.type!=="function"&&e.type!=="event"&&e.type!=="error")throw new j7(e.type);return`${e.name}(${yf(e.inputs,{includeName:t})})`}function yf(e,{includeName:t=!1}={}){return e?e.map(n=>E7(n,{includeName:t})).join(t?", ":","):""}function E7(e,{includeName:t}){return e.type.startsWith("tuple")?`(${yf(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}class S7 extends Z{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s2 extends Z{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Am extends Z{constructor({data:t,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${yf(n,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=r}}class bf extends Z{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class A7 extends Z{constructor({expectedLength:t,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class T7 extends Z{constructor({expectedSize:t,value:n}){super(`Size of bytes "${n}" (bytes${wt(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class _7 extends Z{constructor({expectedLength:t,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class F3 extends Z{constructor(t,{docsPath:n}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class N7 extends Z{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class P7 extends Z{constructor(t,{docsPath:n}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class a2 extends Z{constructor(t,{docsPath:n}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class ad extends Z{constructor(t,{docsPath:n}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class k7 extends Z{constructor(t,{docsPath:n}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class D7 extends Z{constructor({expectedSize:t,givenSize:n}){super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class bo extends Z{constructor({abiItem:t,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${yf(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=r,this.size=i}}class Xs extends Z{constructor({abiItem:t,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${ko(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class O7 extends Z{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class I7 extends Z{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class R7 extends Z{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class j7 extends Z{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class $7 extends Z{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function M7(e){let t=!0,n="",r=0,i="",o=!1;for(let s=0;s<e.length;s++){const a=e[s];if(["(",")",","].includes(a)&&(t=!0),a==="("&&r++,a===")"&&r--,!!t){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){e[s-1]!==","&&n!==","&&n!==",("&&(n="",t=!1);continue}i+=a,n+=a}}if(!o)throw new Z("Unable to normalize signature.");return i}const U3=e=>{const t=(()=>typeof e=="string"?e:C7(e))();return M7(t)},B7=e=>U3(e);function l2(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function L3(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function c2(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function F7(e,t){L3(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Kc=BigInt(2**32-1),u2=BigInt(32);function U7(e,t=!1){return t?{h:Number(e&Kc),l:Number(e>>u2&Kc)}:{h:Number(e>>u2&Kc)|0,l:Number(e&Kc)|0}}function L7(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:s}=U7(e[i],t);[n[i],r[i]]=[o,s]}return[n,r]}const z7=(e,t,n)=>e<<n|t>>>32-n,W7=(e,t,n)=>t<<n|e>>>32-n,H7=(e,t,n)=>t<<n-32|e>>>64-n,q7=(e,t,n)=>e<<n-32|t>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const V7=e=>e instanceof Uint8Array,G7=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Q7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Q7)throw new Error("Non little-endian hardware is not supported");function K7(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function z3(e){if(typeof e=="string"&&(e=K7(e)),!V7(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}class Z7{clone(){return this._cloneInto()}}function Y7(e){const t=r=>e().update(z3(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[W3,H3,q3]=[[],[],[]],X7=BigInt(0),Ca=BigInt(1),J7=BigInt(2),e9=BigInt(7),t9=BigInt(256),n9=BigInt(113);for(let e=0,t=Ca,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],W3.push(2*(5*r+n)),H3.push((e+1)*(e+2)/2%64);let i=X7;for(let o=0;o<7;o++)t=(t<<Ca^(t>>e9)*n9)%t9,t&J7&&(i^=Ca<<(Ca<<BigInt(o))-Ca);q3.push(i)}const[r9,i9]=L7(q3,!0),d2=(e,t,n)=>n>32?H7(e,t,n):z7(e,t,n),f2=(e,t,n)=>n>32?q7(e,t,n):W7(e,t,n);function o9(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let s=0;s<10;s++)n[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=d2(c,u,1)^n[a],h=f2(c,u,1)^n[a+1];for(let m=0;m<50;m+=10)e[s+m]^=d,e[s+m+1]^=h}let i=e[2],o=e[3];for(let s=0;s<24;s++){const a=H3[s],l=d2(i,o,a),c=f2(i,o,a),u=W3[s];i=e[u],o=e[u+1],e[u]=l,e[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}e[0]^=r9[r],e[1]^=i9[r]}n.fill(0)}class Tm extends Z7{constructor(t,n,r,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,l2(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=G7(this.state)}keccak(){o9(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){c2(this);const{blockLen:n,state:r}=this;t=z3(t);const i=t.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=t[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:i}=this;t[r]^=n,n&128&&r===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){c2(this,!1),L3(t),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=t.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);t.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return l2(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(F7(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new Tm(n,r,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}}const s9=(e,t,n)=>Y7(()=>new Tm(t,e,n)),a9=s9(1,136,256/8);function Lt(e,t){const n=t||"hex",r=a9(fr(e,{strict:!1})?Ni(e):e);return n==="bytes"?r:Wr(r)}const l9=e=>Lt(Ni(e)),_m=e=>l9(B7(e));function ht(e,t,n,{strict:r}={}){return fr(e,{strict:!1})?u9(e,t,n,{strict:r}):c9(e,t,n,{strict:r})}function V3(e,t){if(typeof t=="number"&&t>0&&t>wt(e)-1)throw new D3({offset:t,position:"start",size:wt(e)})}function G3(e,t,n){if(typeof t=="number"&&typeof n=="number"&&wt(e)!==n-t)throw new D3({offset:n,position:"end",size:wt(e)})}function c9(e,t,n,{strict:r}={}){V3(e,t);const i=e.slice(t,n);return r&&G3(i,t,n),i}function u9(e,t,n,{strict:r}={}){V3(e,t);const i=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&G3(i,t,n),i}function cc(e,t){if(e.length!==t.length)throw new _7({expectedLength:e.length,givenLength:t.length});const n=d9({params:e,values:t}),r=Pm(n);return r.length===0?"0x":r}function d9({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(Nm({param:e[r],value:t[r]}));return n}function Nm({param:e,value:t}){const n=vf(e.type);if(n){const[r,i]=n;return h9(t,{length:r,param:{...e,type:i}})}if(e.type==="tuple")return y9(t,{param:e});if(e.type==="address")return f9(t);if(e.type==="bool")return m9(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){const r=e.type.startsWith("int");return g9(t,{signed:r})}if(e.type.startsWith("bytes"))return p9(t,{param:e});if(e.type==="string")return w9(t);throw new O7(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Pm(e){let t=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?t+=32:t+=wt(a)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?(n.push(ge(t+i,{size:32})),r.push(a),i+=wt(a)):n.push(a)}return jr([...n,...r])}function f9(e){if(!Ts(e))throw new bl({address:e});return{dynamic:!1,encoded:vi(e.toLowerCase())}}function h9(e,{length:t,param:n}){const r=t===null;if(!Array.isArray(e))throw new R7(e);if(!r&&e.length!==t)throw new A7({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let i=!1;const o=[];for(let s=0;s<e.length;s++){const a=Nm({param:n,value:e[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=Pm(o);if(r){const a=ge(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?jr([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:jr(o.map(({encoded:s})=>s))}}function p9(e,{param:t}){const[,n]=t.type.split("bytes"),r=wt(e);if(!n){let i=e;return r%32!==0&&(i=vi(i,{dir:"right",size:Math.ceil((e.length-2)/2/32)*32})),{dynamic:!0,encoded:jr([vi(ge(r,{size:32})),i])}}if(r!==parseInt(n))throw new T7({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:vi(e,{dir:"right"})}}function m9(e){return{dynamic:!1,encoded:vi(I3(e))}}function g9(e,{signed:t}){return{dynamic:!1,encoded:ge(e,{size:32,signed:t})}}function w9(e){const t=xm(e),n=Math.ceil(wt(t)/32),r=[];for(let i=0;i<n;i++)r.push(vi(ht(t,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:jr([vi(ge(wt(t),{size:32})),...r])}}function y9(e,{param:t}){let n=!1;const r=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],s=Array.isArray(e)?i:o.name,a=Nm({param:o,value:e[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Pm(r):jr(r.map(({encoded:i})=>i))}}function vf(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}const b9=e=>Lt(Ni(e)),km=e=>ht(b9(U3(e)),0,4);function uc({abi:e,args:t=[],name:n}){const r=fr(n,{strict:!1}),i=e.filter(o=>r?o.type==="function"?km(o)===n:o.type==="event"?_m(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!t||t.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==t.length)continue;if(t.every((a,l)=>{const c="inputs"in o&&o.inputs[l];return c?Cp(a,c):!1}))return o}return i[0]}}function Cp(e,t){const n=typeof e,r=t.type;switch(r){case"address":return Ts(e);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in t?Object.values(t.components).every((i,o)=>Cp(Object.values(e)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(i=>Cp(i,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function dc({abi:e,eventName:t,args:n}){var a;let r=e[0];if(t&&(r=uc({abi:e,args:n,name:t}),!r))throw new a2(t,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new a2(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=ko(r),o=_m(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((h,m)=>h2({param:u,value:c[d][m]})):c[d]?h2({param:u,value:c[d]}):null))??[])}return[o,...s]}function h2({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return Lt(Ni(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new $7(e.type);return cc([e],[t])}function xf(e,{method:t}){var r,i;const n={};return e.transport.type==="fallback"&&((i=(r=e.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&t===o&&(n[s]=l.request)})),o=>n[o]||e.request}async function Q3(e,{address:t,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=xf(e,{method:"eth_newFilter"}),c=i?dc({abi:n,args:r,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?ge(o):o,toBlock:typeof a=="bigint"?ge(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function Bn(e){return typeof e=="string"?{address:e,type:"json-rpc"}:e}function Ui({abi:e,args:t,functionName:n}){let r=e[0];if(n&&(r=uc({abi:e,args:t,name:n}),!r))throw new ad(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new ad(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=ko(r),o=km(i),s="inputs"in r&&r.inputs?cc(r.inputs,t??[]):void 0;return Sm([o,s??"0x"])}const K3={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},v9={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},x9={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function Dm(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=Lt(kr(n),"bytes"),i=(t?n.substring(`${t}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Kn(e,t){if(!Ts(e))throw new bl({address:e});return Dm(e,t)}function Cf(e,t){if(t==="0x"&&e.length>0)throw new bf;if(wt(t)&&wt(t)<32)throw new Am({data:t,params:e,size:wt(t)});return C9({data:t,params:e})}function C9({data:e,params:t}){const n=[];let r=0;for(let i=0;i<t.length;i++){if(r>=wt(e))throw new Am({data:e,params:t,size:wt(e)});const o=t[i],{consumed:s,value:a}=gs({data:e,param:o,position:r});n.push(a),r+=s}return n}function gs({data:e,param:t,position:n}){const r=vf(t.type);if(r){const[o,s]=r;return S9(e,{length:o,param:{...t,type:s},position:n})}if(t.type==="tuple")return P9(e,{param:t,position:n});if(t.type==="string")return N9(e,{position:n});if(t.type.startsWith("bytes"))return T9(e,{param:t,position:n});const i=ht(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return _9(i,{param:t});if(t.type==="address")return E9(i);if(t.type==="bool")return A9(i);throw new I7(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function E9(e){return{consumed:32,value:Dm(ht(e,-20))}}function S9(e,{param:t,length:n,position:r}){if(!n){const s=Mt(ht(e,r,r+32,{strict:!0})),a=Mt(ht(e,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=gs({data:ht(e,s+32),param:t,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(ld(t)){const s=vf(t.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=Mt(ht(e,r,r+32,{strict:!0})),h=gs({data:ht(e,d),param:t,position:a?l:u*32});l+=h.consumed,c.push(h.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=gs({data:e,param:t,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function A9(e){return{consumed:32,value:u7(e)}}function T9(e,{param:t,position:n}){const[r,i]=t.type.split("bytes");if(!i){const s=Mt(ht(e,n,n+32,{strict:!0})),a=Mt(ht(e,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:ht(e,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:ht(e,n,n+parseInt(i),{strict:!0})}}function _9(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?mf(e,{signed:n}):Mt(e,{signed:n})}}function N9(e,{position:t}){const n=Mt(ht(e,t,t+32,{strict:!0})),r=Mt(ht(e,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:Em(uo(ht(e,n+32,n+32+r,{strict:!0})))}}function P9(e,{param:t,position:n}){const r=t.components.length===0||t.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(ld(t)){const s=Mt(ht(e,n,n+32,{strict:!0}));for(let a=0;a<t.components.length;++a){const l=t.components[a],c=gs({data:ht(e,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){const a=t.components[s],l=gs({data:e,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function ld(e){var r;const{type:t}=e;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return(r=e.components)==null?void 0:r.some(ld);const n=vf(e.type);return!!(n&&ld({...e,type:n[1]}))}function k9({abi:e,data:t}){const n=ht(t,0,4);if(n==="0x")throw new bf;const i=[...e||[],v9,x9].find(o=>o.type==="error"&&n===km(ko(o)));if(!i)throw new F3(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Cf(i.inputs,ht(t,4)):void 0,errorName:i.name}}const Wt=(e,t,n)=>JSON.stringify(e,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof t=="function"?t(r,o):o},n);function Z3({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof t[o]=="object"?Wt(t[o]):t[o]}`).join(", ")})`}function Ne(e,t="wei"){return id(e,B3[t])}function fc(e){const t=Object.entries(e).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=t.reduce((r,[i])=>Math.max(r,i.length),0);return t.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class D9 extends Z{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class O9 extends Z{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",fc(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class I9 extends Z{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){var w;const m=fc({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof h<"u"&&`${Ne(h)} ${((w=i==null?void 0:i.nativeCurrency)==null?void 0:w.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${nn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${nn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${nn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class Y3 extends Z{constructor({blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),t&&o!==void 0&&(s=`Transaction at block hash "${t}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class X3 extends Z{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class R9 extends Z{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class J3 extends Z{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){var x;const m=n?Bn(n):void 0,w=fc({from:m==null?void 0:m.address,to:d,value:typeof h<"u"&&`${Ne(h)} ${((x=i==null?void 0:i.nativeCurrency)==null?void 0:x.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${nn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${nn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${nn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class Om extends Z{constructor(t,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=uc({abi:n,args:r,name:s}),c=l?Z3({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?ko(l,{includeName:!0}):void 0,d=fc({address:i&&JC(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:t,docsPath:o,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=t,this.contractAddress=i,this.functionName=s,this.sender=a}}class Ep extends Z{constructor({abi:t,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=k9({abi:t,data:n});const{abiItem:u,errorName:d,args:h}=s;if(d==="Error")l=h[0];else if(d==="Panic"){const[m]=h;l=K3[m]}else{const m=u?ko(u,{includeName:!0}):void 0,w=u&&h?Z3({abiItem:u,args:h,includeFunctionName:!1,includeName:!1}):void 0;a=[m?`Error: ${m}`:"",w&&w!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof F3&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class j9 extends Z{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Im extends Z{constructor({data:t,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}class Qa extends Z{constructor({body:t,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${pf(o)}`,t&&`Request body: ${Wt(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=i,this.url=o}}class $9 extends Z{constructor({body:t,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${pf(r)}`,`Request body: ${Wt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class Rm extends Z{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${pf(r)}`,`Request body: ${Wt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class Sp extends Z{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${pf(n)}`,`Request body: ${Wt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const M9=-1;class an extends Z{constructor(t,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:t,docsPath:r,metaMessages:i||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof Rm?t.code:n??M9}}class Js extends an{constructor(t,n){super(t,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class vl extends an{constructor(t){super(t,{code:vl.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(vl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class xl extends an{constructor(t){super(t,{code:xl.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(xl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Cl extends an{constructor(t){super(t,{code:Cl.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Cl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class El extends an{constructor(t){super(t,{code:El.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(El,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class _s extends an{constructor(t){super(t,{code:_s.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(_s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class vo extends an{constructor(t){super(t,{code:vo.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(vo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Sl extends an{constructor(t){super(t,{code:Sl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Sl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Ns extends an{constructor(t){super(t,{code:Ns.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Ns,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Al extends an{constructor(t){super(t,{code:Al.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Al,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Tl extends an{constructor(t){super(t,{code:Tl.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Tl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class _l extends an{constructor(t){super(t,{code:_l.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(_l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Nl extends an{constructor(t){super(t,{code:Nl.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Nl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Yt extends Js{constructor(t){super(t,{code:Yt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Yt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Pl extends Js{constructor(t){super(t,{code:Pl.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Pl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class kl extends Js{constructor(t){super(t,{code:kl.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(kl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Dl extends Js{constructor(t){super(t,{code:Dl.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Dl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Ol extends Js{constructor(t){super(t,{code:Ol.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Ol,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class $r extends Js{constructor(t){super(t,{code:$r.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty($r,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class B9 extends an{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const F9=3;function Il(e,{abi:t,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=e instanceof Im?e:e instanceof Z?e.walk(h=>"data"in h)||e.walk():{},d=(()=>e instanceof bf?new j9({functionName:o}):[F9,_s.code].includes(a)&&(l||c||u)?new Ep({abi:t,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):e)();return new Om(d,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class ea extends Z{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class U9 extends Z{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){var w;const m=fc({from:n==null?void 0:n.address,to:d,value:typeof h<"u"&&`${Ne(h)} ${((w=i==null?void 0:i.nativeCurrency)==null?void 0:w.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${nn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${nn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${nn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}function jm(e,t){const n=(e.details||"").toLowerCase(),r=e.walk(i=>i.code===ls.code);return r instanceof Z?new ls({cause:e,message:r.details}):ls.nodeMessage.test(n)?new ls({cause:e,message:e.details}):od.nodeMessage.test(n)?new od({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):hp.nodeMessage.test(n)?new hp({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):pp.nodeMessage.test(n)?new pp({cause:e,nonce:t==null?void 0:t.nonce}):mp.nodeMessage.test(n)?new mp({cause:e,nonce:t==null?void 0:t.nonce}):gp.nodeMessage.test(n)?new gp({cause:e,nonce:t==null?void 0:t.nonce}):wp.nodeMessage.test(n)?new wp({cause:e}):yp.nodeMessage.test(n)?new yp({cause:e,gas:t==null?void 0:t.gas}):bp.nodeMessage.test(n)?new bp({cause:e,gas:t==null?void 0:t.gas}):vp.nodeMessage.test(n)?new vp({cause:e}):sd.nodeMessage.test(n)?new sd({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas,maxPriorityFeePerGas:t==null?void 0:t.maxPriorityFeePerGas}):new wf({cause:e})}function L9(e,{docsPath:t,...n}){const r=(()=>{const i=jm(e,n);return i instanceof wf?e:i})();return new U9(r,{docsPath:t,...n})}function $m(e,{format:t}){if(!t)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in e&&(n[a]=e[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=t(e||{});return r(i),n}function hc(e){const{account:t,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=e,s=t?Bn(t):void 0;if(s&&!Ts(s.address))throw new bl({address:s.address});if(o&&!Ts(o))throw new bl({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new D9;if(r&&r>2n**256n-1n)throw new od({maxFeePerGas:r});if(i&&r&&i>r)throw new sd({maxFeePerGas:r,maxPriorityFeePerGas:i})}class z9 extends Z{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Mm extends Z{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class W9 extends Z{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${nn(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class H9 extends Z{constructor({blockHash:t,blockNumber:n}){let r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Pi(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,h;const o=r??"latest",s=i??!1,a=n!==void 0?ge(n):void 0;let l=null;if(t?l=await e.request({method:"eth_getBlockByHash",params:[t,s]}):l=await e.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new H9({blockHash:t,blockNumber:n});return(((h=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:h.format)||$3)(l)}async function Bm(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function q9(e,t){return e5(e,t)}async function e5(e,t){var o,s,a;const{block:n,chain:r=e.chain,request:i}=t||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await de(e,Pi,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:e,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await e.request({method:"eth_maxPriorityFeePerGas"});return mf(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):de(e,Pi,"getBlock")({}),de(e,Bm,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new Mm;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function V9(e,t){return Ap(e,t)}async function Ap(e,t){var h,m;const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},s=await(async()=>{var w,x;return typeof((w=r==null?void 0:r.fees)==null?void 0:w.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):((x=r==null?void 0:r.fees)==null?void 0:x.baseFeeMultiplier)??1.2})();if(s<1)throw new z9;const l=10**(((h=s.toString().split(".")[1])==null?void 0:h.length)??0),c=w=>w*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await de(e,Pi,"getBlock")({});if(typeof((m=r==null?void 0:r.fees)==null?void 0:m.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Mm;const w=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await e5(e,{block:u,chain:r,request:i}),x=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??x+w,maxPriorityFeePerGas:w}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await de(e,Bm,"getGasPrice")({}))}}async function t5(e,{address:t,blockTag:n="latest",blockNumber:r}){const i=await e.request({method:"eth_getTransactionCount",params:[t,r?ge(r):n]});return Mt(i)}function G9(e){if(e.type)return e.type;if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new O9({transaction:e})}async function Ef(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:s}=t;if(!n)throw new ea;const a=Bn(n),l=await de(e,Pi,"getBlock")({blockTag:"latest"}),c={...t,from:a.address};if(typeof o>"u"&&(c.nonce=await de(e,t5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=G9(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await Ap(e,{block:l,chain:r,request:c});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<d)throw new W9({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new Mm;const{gasPrice:u}=await Ap(e,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await de(e,Fm,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),hc(c),c}async function Fm(e,t){var i,o,s;const n=t.account??e.account;if(!n)throw new ea({docsPath:"/docs/actions/public/estimateGas"});const r=Bn(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,to:C,value:v,...p}=r.type==="local"?await Ef(e,t):t,E=(l?ge(l):void 0)||c;hc(t);const S=(s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,f=(S||gf)({...$m(p,{format:S}),from:r.address,accessList:a,data:u,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,to:C,value:v}),_=await e.request({method:"eth_estimateGas",params:E?[f,E]:[f]});return BigInt(_)}catch(a){throw L9(a,{...t,account:r,chain:e.chain})}}async function Q9(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=Ui({abi:t,args:r,functionName:i});try{return await de(e,Fm,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?Bn(o.account):void 0;throw Il(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const p2="/docs/contract/decodeEventLog";function pc({abi:e,data:t,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new N7({docsPath:p2});const a=e.find(w=>w.type==="event"&&o===_m(ko(w)));if(!(a&&"name"in a)||a.type!=="event")throw new P7(o,{docsPath:p2});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(w=>!("name"in w&&w.name));let d=u?[]:{};const h=c.filter(w=>"indexed"in w&&w.indexed);for(let w=0;w<h.length;w++){const x=h[w],C=s[w];if(!C)throw new Xs({abiItem:a,param:x});d[x.name||w]=K9({param:x,value:C})}const m=c.filter(w=>!("indexed"in w&&w.indexed));if(m.length>0){if(t&&t!=="0x")try{const w=Cf(m,t);if(w)if(u)d=[...d,...w];else for(let x=0;x<m.length;x++)d[m[x].name]=w[x]}catch(w){if(i)throw w instanceof Am?new bo({abiItem:a,data:w.data,params:w.params,size:w.size}):w}else if(i)throw new bo({abiItem:a,data:"0x",params:m,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function K9({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(Cf([e],t)||[])[0]}async function Um(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(m=>dc({abi:[m],eventName:m.name,args:a}))],o&&(d=d[0]));let h;return n?h=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:n}]}):h=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:typeof r=="bigint"?ge(r):r,toBlock:typeof i=="bigint"?ge(i):i}]}),h.map(m=>{var w;try{const{eventName:x,args:C}=u?pc({abi:u,data:m.data,topics:m.topics,strict:c}):{eventName:void 0,args:void 0};return Yn(m,{args:C,eventName:x})}catch(x){let C,v;if(x instanceof bo||x instanceof Xs){if(c)return;C=x.abiItem.name,v=(w=x.abiItem.inputs)==null?void 0:w.some(p=>!("name"in p&&p.name))}return Yn(m,{args:v?[]:{},eventName:C})}}).filter(Boolean)}async function n5(e,{abi:t,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?uc({abi:t,name:o}):void 0,u=c?void 0:t.filter(d=>d.type==="event");return de(e,Um,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const B0="/docs/contract/decodeFunctionResult";function ta({abi:e,args:t,functionName:n,data:r}){let i=e[0];if(n&&(i=uc({abi:e,args:t,name:n}),!i))throw new ad(n,{docsPath:B0});if(i.type!=="function")throw new ad(void 0,{docsPath:B0});if(!i.outputs)throw new k7(i.name,{docsPath:B0});const o=Cf(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const Z9="modulepreload",Y9=function(e){return"/"+e},m2={},Ps=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Y9(o),o in m2)return;m2[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Z9,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Tp=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],r5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],i5=[...r5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],X9=[...r5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],g2=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],w2=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],J9=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],eE="0x82ad56cb";function na({blockNumber:e,chain:t,contract:n}){var i;const r=(i=t==null?void 0:t.contracts)==null?void 0:i[n];if(!r)throw new fp({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new fp({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function tE(e,{docsPath:t,...n}){const r=(()=>{const i=jm(e,n);return i instanceof wf?e:i})();return new J3(r,{docsPath:t,...n})}const F0=new Map;function Lm({fn:e,id:t,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const d=u.map(({args:h})=>h);d.length!==0&&e(d).then(h=>{var m;i&&Array.isArray(h)&&h.sort(i);for(let w=0;w<u.length;w++){const{pendingPromise:x}=u[w];(m=x.resolve)==null||m.call(x,[h[w],h])}}).catch(h=>{var m;for(let w=0;w<u.length;w++){const{pendingPromise:x}=u[w];(m=x.reject)==null||m.call(x,h)}})},s=()=>F0.delete(t),a=()=>l().map(({args:u})=>u),l=()=>F0.get(t)||[],c=u=>F0.set(t,[...l(),u]);return{flush:s,async schedule(u){const d={},h=new Promise((x,C)=>{d.resolve=x,d.reject=C});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:d}),h):(c({args:u,pendingPromise:d}),setTimeout(o,r),h)}}}async function Sf(e,t){var v,p,y,E;const{account:n=e.account,batch:r=!!((v=e.batch)!=null&&v.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:m,value:w,...x}=t,C=n?Bn(n):void 0;try{hc(t);const T=(i?ge(i):void 0)||o,f=(E=(y=(p=e.chain)==null?void 0:p.formatters)==null?void 0:y.transactionRequest)==null?void 0:E.format,D=(f||gf)({...$m(x,{format:f}),from:C==null?void 0:C.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:m,value:w});if(r&&nE({request:D}))try{return await rE(e,{...D,blockNumber:i,blockTag:o})}catch($){if(!($ instanceof M3)&&!($ instanceof fp))throw $}const O=await e.request({method:"eth_call",params:T?[D,T]:[D]});return O==="0x"?{data:void 0}:{data:O}}catch(S){const T=iE(S),{offchainLookup:f,offchainLookupSignature:_}=await Ps(()=>import("./ccip-5198fcc7.js"),[]);if((T==null?void 0:T.slice(0,10))===_&&m)return{data:await f(e,{data:T,to:m})};throw tE(S,{...t,account:C,chain:e.chain})}}function nE({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(eE)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function rE(e,t){var x;const{batchSize:n=1024,wait:r=0}=typeof((x=e.batch)==null?void 0:x.multicall)=="object"?e.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=t;let c=a;if(!c){if(!e.chain)throw new M3;c=na({blockNumber:i,chain:e.chain,contract:"multicall3"})}const d=(i?ge(i):void 0)||o,{schedule:h}=Lm({id:`${e.uid}.${d}`,wait:r,shouldSplitBatch(C){return C.reduce((p,{data:y})=>p+(y.length-2),0)>n*2},fn:async C=>{const v=C.map(E=>({allowFailure:!0,callData:E.data,target:E.to})),p=Ui({abi:Tp,args:[v],functionName:"aggregate3"}),y=await e.request({method:"eth_call",params:[{data:p,to:c},d]});return ta({abi:Tp,args:[v],functionName:"aggregate3",data:y||"0x"})}}),[{returnData:m,success:w}]=await h({data:s,to:l});if(!w)throw new Im({data:m});return m==="0x"?{data:void 0}:{data:m}}function iE(e){if(!(e instanceof Z))return;const t=e.walk();return typeof t.data=="object"?t.data.data:t.data}async function ki(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=Ui({abi:t,args:r,functionName:i});try{const{data:a}=await de(e,Sf,"call")({data:s,to:n,...o});return ta({abi:t,args:r,functionName:i,data:a||"0x"})}catch(a){throw Il(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function oE(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Bn(s.account):void 0,l=Ui({abi:t,args:r,functionName:o});try{const{data:c}=await de(e,Sf,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:ta({abi:t,args:r,functionName:o,data:c||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw Il(c,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const U0=new Map,y2=new Map;let sE=0;function ra(e,t,n){const r=++sE,i=()=>U0.get(e)||[],o=()=>{const u=i();U0.set(e,u.filter(d=>d.id!==r))},s=()=>{const u=y2.get(e);i().length===1&&u&&u(),o()},a=i();if(U0.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return s;const l={};for(const u in t)l[u]=(...d)=>{var m,w;const h=i();if(h.length!==0)for(const x of h)(w=(m=x.fns)[u])==null||w.call(m,...d)};const c=n(l);return typeof c=="function"&&y2.set(e,c),s}async function cd(e){return new Promise(t=>setTimeout(t,e))}function mc(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await cd(l);const c=async()=>{i&&(await e({unpoll:o}),await cd(r),c())};c()})(),o}const aE=new Map,lE=new Map;function cE(e){const t=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=t(e,aE),r=t(e,lE);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function uE(e,{cacheKey:t,cacheTime:n=1/0}){const r=cE(t),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=e(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const dE=e=>`blockNumber.${e}`;async function gc(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await uE(()=>e.request({method:"eth_blockNumber"}),{cacheKey:dE(e.uid),cacheTime:n??t});return BigInt(r)}async function Af(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in t&&t.abi?pc({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Yn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof bo||s instanceof Xs){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Yn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function Tf(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function fE(e,{abi:t,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){return(typeof l<"u"?l:e.transport.type!=="webSocket")?(()=>{const w=Wt(["watchContractEvent",n,r,i,e.uid,o,c]),x=u??!1;return ra(w,{onLogs:a,onError:s},C=>{let v,p,y=!1;const E=mc(async()=>{var S;if(!y){try{p=await de(e,Q3,"createContractEventFilter")({abi:t,address:n,args:r,eventName:o,strict:x})}catch{}y=!0;return}try{let T;if(p)T=await de(e,Af,"getFilterChanges")({filter:p});else{const f=await de(e,gc,"getBlockNumber")({});v&&v!==f?T=await de(e,n5,"getContractEvents")({abi:t,address:n,args:r,eventName:o,fromBlock:v+1n,toBlock:f,strict:x}):T=[],v=f}if(T.length===0)return;if(i)C.onLogs(T);else for(const f of T)C.onLogs([f])}catch(T){p&&T instanceof vo&&(y=!1),(S=C.onError)==null||S.call(C,T)}},{emitOnBegin:!0,interval:c});return async()=>{p&&await de(e,Tf,"uninstallFilter")({filter:p}),E()}})})():(()=>{let w=!0,x=()=>w=!1;return(async()=>{try{const C=o?dc({abi:t,eventName:o,args:r}):[],{unsubscribe:v}=await e.transport.subscribe({params:["logs",{address:n,topics:C}],onData(p){var E;if(!w)return;const y=p.result;try{const{eventName:S,args:T}=pc({abi:t,data:y.data,topics:y.topics,strict:u}),f=Yn(y,{args:T,eventName:S});a([f])}catch(S){let T,f;if(S instanceof bo||S instanceof Xs){if(u)return;T=S.abiItem.name,f=(E=S.abiItem.inputs)==null?void 0:E.some(D=>!("name"in D&&D.name))}const _=Yn(y,{args:f?[]:{},eventName:T});a([_])}},onError(p){s==null||s(p)}});x=v,w||x()}catch(C){s==null||s(C)}})(),x})()}function o5({chain:e,currentChainId:t}){if(!e)throw new g7;if(t!==e.id)throw new m7({chain:e,currentChainId:t})}function hE(e,{docsPath:t,...n}){const r=(()=>{const i=jm(e,n);return i instanceof wf?e:i})();return new I9(r,{docsPath:t,...n})}async function Rl(e){const t=await e.request({method:"eth_chainId"});return Mt(t)}async function zm(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function Wm(e,t){var x,C,v,p;const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...m}=t;if(!n)throw new ea({docsPath:"/docs/actions/wallet/sendTransaction"});const w=Bn(n);try{hc(t);let y;if(r!==null&&(y=await de(e,Rl,"getChainId")({}),o5({currentChainId:y,chain:r})),w.type==="local"){const f=await de(e,Ef,"prepareTransactionRequest")({account:w,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...m});y||(y=await de(e,Rl,"getChainId")({}));const _=(x=r==null?void 0:r.serializers)==null?void 0:x.transaction,D=await w.signTransaction({...f,chainId:y},{serializer:_});return await de(e,zm,"sendRawTransaction")({serializedTransaction:D})}const E=(p=(v=(C=e.chain)==null?void 0:C.formatters)==null?void 0:v.transactionRequest)==null?void 0:p.format,T=(E||gf)({...$m(m,{format:E}),accessList:i,data:o,from:w.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h});return await e.request({method:"eth_sendTransaction",params:[T]})}catch(y){throw hE(y,{...t,account:w,chain:t.chain||void 0})}}async function pE(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=Ui({abi:t,args:r,functionName:o});return await de(e,Wm,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function mE(e,{chain:t}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:ge(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const _p=256;let Zc=_p,Yc;function gE(e=11){if(!Yc||Zc+e>_p*2){Yc="",Zc=0;for(let t=0;t<_p;t++)Yc+=(256+Math.random()*256|0).toString(16).substring(1)}return Yc.substring(Zc,Zc+++e)}function s5(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=e,a=e.chain,l=e.account?Bn(e.account):void 0,{config:c,request:u,value:d}=e.transport({chain:a,pollingInterval:o}),h={...c,...d},m={account:l,batch:t,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:h,type:s,uid:gE()};function w(x){return C=>{const v=C(x);for(const y in m)delete v[y];const p={...x,...v};return Object.assign(p,{extend:w(p)})}}return Object.assign(m,{extend:w(m)})}function a5(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof t=="function"?t({count:a,error:c}):t;u&&await cd(u),s({count:a+1})};try{const c=await e();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const l5=e=>"code"in e?e.code!==-1&&e.code!==-32004&&e.code!==-32005&&e.code!==-32042&&e.code!==-32603:e instanceof Qa&&e.status?e.status!==403&&e.status!==408&&e.status!==413&&e.status!==429&&e.status!==500&&e.status!==502&&e.status!==503&&e.status!==504:!1;function wE(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>a5(async()=>{try{return await e(r)}catch(i){const o=i;switch(o.code){case vl.code:throw new vl(o);case xl.code:throw new xl(o);case Cl.code:throw new Cl(o);case El.code:throw new El(o);case _s.code:throw new _s(o);case vo.code:throw new vo(o);case Sl.code:throw new Sl(o);case Ns.code:throw new Ns(o);case Al.code:throw new Al(o);case Tl.code:throw new Tl(o);case _l.code:throw new _l(o);case Nl.code:throw new Nl(o);case Yt.code:throw new Yt(o);case Pl.code:throw new Pl(o);case kl.code:throw new kl(o);case Dl.code:throw new Dl(o);case Ol.code:throw new Ol(o);case $r.code:throw new $r(o);case 5e3:throw new Yt(o);default:throw i instanceof Z?i:new B9(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Qa){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*t},retryCount:n,shouldRetry:({error:i})=>!l5(i)})}function _f({key:e,name:t,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:wE(n,{retryCount:r,retryDelay:i}),value:a}}function Hm(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>_f({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}function b2(e,t={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=t;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=e,d=()=>{};const h=_f({key:n,name:r,async request({method:m,params:w}){const x=async(C=0)=>{const v=u[C]({chain:a,retryCount:0,timeout:c});try{const p=await v.request({method:m,params:w});return d({method:m,params:w,response:p,transport:v,status:"success"}),p}catch(p){if(d({error:p,method:m,params:w,transport:v,status:"error"}),l5(p)||C===u.length-1)throw p;return x(C+1)}};return x()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:m=>d=m,transports:u.map(m=>m({chain:a,retryCount:0}))});if(i){const m=typeof i=="object"?i:{};yE({chain:a,interval:m.interval??l,onTransports:w=>u=w,sampleCount:m.sampleCount,timeout:m.timeout,transports:u,weights:m.weights})}return h}}function yE({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async w=>{const x=w({chain:e,retryCount:0,timeout:i}),C=Date.now();let v,p;try{await x.request({method:"net_listening"}),p=1}catch{p=0}finally{v=Date.now()}return{latency:v-C,success:p}}));c.push(d),c.length>r&&c.shift();const h=Math.max(...c.map(w=>Math.max(...w.map(({latency:x})=>x)))),m=o.map((w,x)=>{const C=c.map(S=>S[x].latency),p=1-C.reduce((S,T)=>S+T,0)/C.length/h,y=c.map(S=>S[x].success),E=y.reduce((S,T)=>S+T,0)/y.length;return E===0?[0,x]:[l*p+a*E,x]}).sort((w,x)=>x[0]-w[0]);n(m.map(([,w])=>o[w])),await cd(t),u()};u()}class c5 extends Z{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function bE(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const v2=bE();function u5(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(t)},n)),i(await e({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(t),o(a)}finally{clearTimeout(s)}})()})}let Np=0;async function vE(e,{body:t,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await u5(async({signal:u})=>await fetch(e,{...n,body:Array.isArray(t)?Wt(t.map(h=>({jsonrpc:"2.0",id:h.id??Np++,...h}))):Wt({jsonrpc:"2.0",id:t.id??Np++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new Sp({body:t,url:e}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new Qa({body:t,details:Wt(c.error)||l.statusText,headers:l.headers,status:l.status,url:e});return c}catch(l){throw l instanceof Qa||l instanceof Sp?l:new Qa({body:t,details:l.message,url:e})}}const L0=new Map;async function z0(e){let t=L0.get(e);if(t)return t;const{schedule:n}=Lm({id:e,fn:async()=>{const o=new v2(e),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),h=d.method==="eth_subscription",m=h?d.params.subscription:d.id,w=h?a:s,x=w.get(m);x&&x({data:u}),h||w.delete(m)},c=()=>{L0.delete(e),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===v2.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),t=Object.assign(o,{requests:s,subscriptions:a}),L0.set(e,t),[t]}}),[r,[i]]=await n();return i}function xE(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new $9({body:t,url:e.url,details:"Socket is closed."});const r=Np++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),t.method==="eth_subscribe"&&typeof s.result=="string"&&e.subscriptions.set(s.result,i),t.method==="eth_unsubscribe"&&e.subscriptions.delete((a=t.params)==null?void 0:a[0]))};return e.requests.set(r,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e}async function CE(e,{body:t,timeout:n=1e4}){return u5(()=>new Promise(r=>ws.webSocket(e,{body:t,onResponse:r})),{errorInstance:new Sp({body:t,url:e.url}),timeout:n})}const ws={http:vE,webSocket:xE,webSocketAsync:CE};function EE(e,t={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},h=t.retryCount??l,m=c??t.timeout??1e4,w=e||(a==null?void 0:a.rpcUrls.default.http[0]);if(!w)throw new c5;return _f({key:i,name:o,async request({method:x,params:C}){const v={method:x,params:C},{schedule:p}=Lm({id:`${e}`,wait:d,shouldSplitBatch(T){return T.length>u},fn:T=>ws.http(w,{body:T,fetchOptions:r,timeout:m}),sort:(T,f)=>T.id-f.id}),y=async T=>n?p(T):[await ws.http(w,{body:T,fetchOptions:r,timeout:m})],[{error:E,result:S}]=await y(v);if(E)throw new Rm({body:v,error:E,url:w});return S},retryCount:h,retryDelay:s,timeout:m,type:"http"},{fetchOptions:r,url:e})}}function qm(e,t){var r,i,o;if(!(e instanceof Z))return!1;const n=e.walk(s=>s instanceof Ep);return n instanceof Ep?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&n.reason===K3[50]):!1}function d5(e){if(e.length!==66||e.indexOf("[")!==0||e.indexOf("]")!==65)return null;const t=`0x${e.slice(1,65)}`;return fr(t)?t:null}function Eu(e){let t=new Uint8Array(32).fill(0);if(!e)return yl(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const i=d5(n[r]),o=i?Ni(i):Lt(kr(n[r]),"bytes");t=Lt(jr([t,o]),"bytes")}return yl(t)}function SE(e){return`[${e.slice(2)}]`}function AE(e){const t=new Uint8Array(32).fill(0);return e?d5(e)||Lt(kr(e)):yl(t)}function Nf(e){const t=e.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);const n=new Uint8Array(kr(t).byteLength+2);let r=0;const i=t.split(".");for(let o=0;o<i.length;o++){let s=kr(i[o]);s.byteLength>255&&(s=kr(SE(AE(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function TE(e,{blockNumber:t,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=na({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=Ui({abi:w2,functionName:"addr",...r!=null?{args:[Eu(i),BigInt(r)]}:{args:[Eu(i)]}}),l=await de(e,ki,"readContract")({address:s,abi:i5,functionName:"resolve",args:[Wr(Nf(i)),a],blockNumber:t,blockTag:n});if(l[0]==="0x")return null;const c=ta({abi:w2,args:r!=null?[Eu(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||uo(c)==="0x00"?null:c}catch(a){if(qm(a,"resolve"))return null;throw a}}class _E extends Z{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Ea extends Z{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Vm extends Z{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class NE extends Z{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const PE=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,kE=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,DE=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,OE=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function IE(e){try{const t=await fetch(e,{method:"HEAD"});if(t.status===200){const n=t.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=e})}}function x2(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function f5({uri:e,gatewayUrls:t}){const n=DE.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=x2(t==null?void 0:t.ipfs,"https://ipfs.io"),i=x2(t==null?void 0:t.arweave,"https://arweave.net"),o=e.match(PE),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||kE.test(e);if(e.startsWith("http")&&!u&&!d){let m=e;return t!=null&&t.arweave&&(m=e.replace(/https:\/\/arweave.net/g,t==null?void 0:t.arweave)),{uri:m,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(OE,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new Vm({uri:e})}function h5(e){if(typeof e!="object"||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new _E({data:e});return e.image||e.image_url||e.image_data}async function RE({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then(i=>i.json());return await Gm({gatewayUrls:e,uri:h5(n)})}catch{throw new Vm({uri:t})}}async function Gm({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=f5({uri:t,gatewayUrls:e});if(r||await IE(n))return n;throw new Vm({uri:t})}function jE(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new Ea({reason:"Only EIP-155 supported"});if(!s)throw new Ea({reason:"Chain ID not found"});if(!l)throw new Ea({reason:"Contract address not found"});if(!i)throw new Ea({reason:"Token ID not found"});if(!a)throw new Ea({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function $E(e,{nft:t}){if(t.namespace==="erc721")return ki(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return ki(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new NE({namespace:t.namespace})}async function ME(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?BE(e,{gatewayUrls:t,record:n}):Gm({uri:n,gatewayUrls:t})}async function BE(e,{gatewayUrls:t,record:n}){const r=jE(n),i=await $E(e,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=f5({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return Gm({uri:h5(u),gatewayUrls:t})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),RE({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}async function p5(e,{blockNumber:t,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=na({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=await de(e,ki,"readContract")({address:s,abi:i5,functionName:"resolve",args:[Wr(Nf(r)),Ui({abi:g2,functionName:"text",args:[Eu(r),i]})],blockNumber:t,blockTag:n});if(a[0]==="0x")return null;const l=ta({abi:g2,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(qm(a,"resolve"))return null;throw a}}async function FE(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await de(e,p5,"getEnsText")({blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await ME(e,{record:s,gatewayUrls:r})}catch{return null}}async function UE(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=na({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await de(e,ki,"readContract")({address:o,abi:X9,functionName:"reverse",args:[Wr(Nf(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(qm(a,"reverse"))return null;throw a}}async function LE(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=na({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await de(e,ki,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Wr(Nf(r))],blockNumber:t,blockTag:n});return s}async function zE(e){const t=xf(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}async function m5(e,{address:t,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=xf(e,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(h=>dc({abi:[h],eventName:h.name,args:n}))],r&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?ge(o):o,toBlock:typeof a=="bigint"?ge(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function g5(e){const t=xf(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function WE(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n?ge(n):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||r]});return BigInt(o)}async function HE(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?ge(n):void 0;let o;return t?o=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):o=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Mt(o)}async function qE(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?ge(n):void 0,o=await e.request({method:"eth_getCode",params:[t,i||r]});if(o!=="0x")return o}function VE(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(r=>BigInt(r)))}}async function GE(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?ge(n):void 0,s=await e.request({method:"eth_feeHistory",params:[ge(t),o||r,i]});return VE(s)}async function QE(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in t&&t.abi?pc({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Yn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof bo||s instanceof Xs){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Yn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const KE=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ZE=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function YE({domain:e,message:t,primaryType:n,types:r}){const i=typeof e>"u"?{}:e,o={EIP712Domain:C5({domain:i}),...r};x5({domain:i,message:t,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(XE({domain:i,types:o})),n!=="EIP712Domain"&&s.push(w5({data:t,primaryType:n,types:o})),Lt(jr(s))}function XE({domain:e,types:t}){return w5({data:e,primaryType:"EIP712Domain",types:t})}function w5({data:e,primaryType:t,types:n}){const r=y5({data:e,primaryType:t,types:n});return Lt(r)}function y5({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],i=[JE({primaryType:t,types:n})];for(const o of n[t]){const[s,a]=v5({types:n,name:o.name,type:o.type,value:e[o.name]});r.push(s),i.push(a)}return cc(r,i)}function JE({primaryType:e,types:t}){const n=Wr(eS({primaryType:e,types:t}));return Lt(n)}function eS({primaryType:e,types:t}){let n="";const r=b5({primaryType:e,types:t});r.delete(e);const i=[e,...Array.from(r).sort()];for(const o of i)n+=`${o}(${t[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function b5({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||t[i]===void 0)return n;n.add(i);for(const o of t[i])b5({primaryType:o.type,types:t},n);return n}function v5({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:"bytes32"},Lt(y5({data:r,primaryType:n,types:e}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Lt(r)];if(n==="string")return[{type:"bytes32"},Lt(Wr(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>v5({name:t,type:i,types:e,value:s}));return[{type:"bytes32"},Lt(cc(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function x5({domain:e,message:t,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,h=a[c],m=d.match(ZE);if(m&&(typeof h=="number"||typeof h=="bigint")){const[C,v,p]=m;ge(h,{signed:v==="int",size:parseInt(p)/8})}if(d==="address"&&typeof h=="string"&&!Ts(h))throw new bl({address:h});const w=d.match(KE);if(w){const[C,v]=w;if(v&&wt(h)!==parseInt(v))throw new D7({expectedSize:parseInt(v),givenSize:wt(h)})}const x=i[d];x&&o(x,h)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),n!=="EIP712Domain"){const s=i[n];o(s,t)}}function C5({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const W0="/docs/contract/encodeDeployData";function E5({abi:e,args:t,bytecode:n}){if(!t||t.length===0)return n;const r=e.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new S7({docsPath:W0});if(!("inputs"in r))throw new s2({docsPath:W0});if(!r.inputs||r.inputs.length===0)throw new s2({docsPath:W0});const i=cc(r.inputs,t);return Sm([n,i])}const tS=`Ethereum Signed Message:
`;function nS(e,t){const n=(()=>typeof e=="string"?kr(e):e.raw instanceof Uint8Array?e.raw:Ni(e.raw))(),r=kr(`${tS}${n.length}`);return Lt(jr([r,n]),t)}function rS(e,t){let[n,r="0"]=e.split(".");const i=n.startsWith("-");if(i&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),t===0)Math.round(+`.${r}`)===1&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){const[o,s,a]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],l=Math.round(+`${s}.${a}`);l>9?r=`${BigInt(o)+BigInt(1)}0`.padStart(o.length+1,"0"):r=`${o}${l}`,r.length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${i?"-":""}${n}${r}`)}function H0(e,t="wei"){return rS(e,B3[t])}function iS(e){return e.map(t=>({...t,value:BigInt(t.value)}))}function oS(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?Mt(e.nonce):void 0,storageProof:e.storageProof?iS(e.storageProof):void 0}}async function sS(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?ge(n):void 0,a=await e.request({method:"eth_getProof",params:[t,i,s||o]});return oS(a)}async function aS(e,{address:t,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?ge(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||r]})}async function Qm(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,h;const s=r||"latest",a=n!==void 0?ge(n):void 0;let l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,ge(o)]}):(a||s)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,ge(o)]})),!l)throw new Y3({blockHash:t,blockNumber:n,blockTag:s,hash:i,index:o});return(((h=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:h.format)||j3)(l)}async function lS(e,{hash:t,transactionReceipt:n}){const[r,i]=await Promise.all([de(e,gc,"getBlockNumber")({}),t?de(e,Qm,"getBlockNumber")({hash:t}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function Pp(e,{hash:t}){var i,o,s;const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new X3({hash:t});return(((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||f7)(n)}async function cS(e,t){var x;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=t,l=r??(typeof((x=e.batch)==null?void 0:x.multicall)=="object"&&e.batch.multicall.batchSize||1024);let c=a;if(!c){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");c=na({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let d=0,h=0;for(let C=0;C<s.length;C++){const{abi:v,address:p,args:y,functionName:E}=s[C];try{const S=Ui({abi:v,args:y,functionName:E});h+=(S.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(S.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:S,target:p}]}catch(S){const T=Il(S,{abi:v,address:p,args:y,docsPath:"/docs/contract/multicall",functionName:E});if(!n)throw T;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:p}]}}const m=await Promise.allSettled(u.map(C=>de(e,ki,"readContract")({abi:Tp,address:c,args:[C],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),w=[];for(let C=0;C<m.length;C++){const v=m[C];if(v.status==="rejected"){if(!n)throw v.reason;for(let y=0;y<u[C].length;y++)w.push({status:"failure",error:v.reason,result:void 0});continue}const p=v.value;for(let y=0;y<p.length;y++){const{returnData:E,success:S}=p[y],{callData:T}=u[C][y],{abi:f,address:_,functionName:D,args:O}=s[w.length];try{if(T==="0x")throw new bf;if(!S)throw new Im({data:E});const $=ta({abi:f,args:O,data:E,functionName:D});w.push(n?{result:$,status:"success"}:$)}catch($){const Y=Il($,{abi:f,address:_,args:O,docsPath:"/docs/contract/multicall",functionName:D});if(!n)throw Y;w.push({error:Y,result:void 0,status:"failure"})}}}if(w.length!==s.length)throw new Z("multicall results mismatch");return w}const uS="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function dS(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function fS(e,t){const n=fr(e)?Ni(e):e,r=fr(t)?Ni(t):t;return dS(n,r)}async function S5(e,{address:t,hash:n,signature:r,...i}){const o=fr(r)?r:Wr(r);try{const{data:s}=await de(e,Sf,"call")({data:E5({abi:J9,args:[t,n,o],bytecode:uS}),...i});return fS(s??"0x0","0x1")}catch(s){if(s instanceof J3)return!1;throw s}}async function hS(e,{address:t,message:n,signature:r,...i}){const o=nS(n);return S5(e,{address:t,hash:o,signature:r,...i})}async function pS(e,{address:t,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=YE({message:r,primaryType:i,types:o,domain:s});return S5(e,{address:t,hash:l,signature:n,...a})}function A5(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=e.pollingInterval}){const a=typeof o<"u"?o:e.transport.type!=="webSocket";let l;return a?(()=>{const d=Wt(["watchBlockNumber",e.uid,t,n,s]);return ra(d,{onBlockNumber:r,onError:i},h=>mc(async()=>{var m;try{const w=await de(e,gc,"getBlockNumber")({cacheTime:0});if(l){if(w===l)return;if(w-l>1&&n)for(let x=l+1n;x<w;x++)h.onBlockNumber(x,l),l=x}(!l||w>l)&&(h.onBlockNumber(w,l),l=w)}catch(w){(m=h.onError)==null||m.call(h,w)}},{emitOnBegin:t,interval:s}))})():(()=>{let d=!0,h=()=>d=!1;return(async()=>{try{const{unsubscribe:m}=await e.transport.subscribe({params:["newHeads"],onData(w){var C;if(!d)return;const x=mf((C=w.result)==null?void 0:C.number);r(x,l),l=x},onError(w){i==null||i(w)}});h=m,d||h()}catch(m){i==null||i(m)}})(),h})()}async function mS(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:i=e.pollingInterval,timeout:o}){const s=Wt(["waitForTransactionReceipt",e.uid,n]);let a,l,c,u=!1;return new Promise((d,h)=>{o&&setTimeout(()=>h(new R9({hash:n})),o);const m=ra(s,{onReplaced:r,resolve:d,reject:h},w=>{const x=de(e,A5,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(C){if(u)return;let v=C;const p=y=>{x(),y(),m()};try{if(c){if(t>1&&(!c.blockNumber||v-c.blockNumber+1n<t))return;p(()=>w.resolve(c));return}if(a||(u=!0,await a5(async()=>{a=await de(e,Qm,"getTransaction")({hash:n}),a.blockNumber&&(v=a.blockNumber)},{delay:({count:y})=>~~(1<<y)*200,retryCount:6}),u=!1),c=await de(e,Pp,"getTransactionReceipt")({hash:n}),t>1&&(!c.blockNumber||v-c.blockNumber+1n<t))return;p(()=>w.resolve(c))}catch(y){if(a&&(y instanceof Y3||y instanceof X3))try{l=a;const S=(await de(e,Pi,"getBlock")({blockNumber:v,includeTransactions:!0})).transactions.find(({from:f,nonce:_})=>f===l.from&&_===l.nonce);if(!S||(c=await de(e,Pp,"getTransactionReceipt")({hash:S.hash}),t>1&&(!c.blockNumber||v-c.blockNumber+1n<t)))return;let T="replaced";S.to===l.to&&S.value===l.value?T="repriced":S.from===S.to&&S.value===0n&&(T="cancelled"),p(()=>{var f;(f=w.onReplaced)==null||f.call(w,{reason:T,replacedTransaction:l,transaction:S,transactionReceipt:c}),w.resolve(c)})}catch(E){p(()=>w.reject(E))}else p(()=>w.reject(y))}}})})})}function gS(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=e.pollingInterval}){const c=typeof a<"u"?a:e.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const w=Wt(["watchBlocks",e.uid,n,r,u,l]);return ra(w,{onBlock:i,onError:o},x=>mc(async()=>{var C;try{const v=await de(e,Pi,"getBlock")({blockTag:t,includeTransactions:u});if(v.number&&(d!=null&&d.number)){if(v.number===d.number)return;if(v.number-d.number>1&&n)for(let p=(d==null?void 0:d.number)+1n;p<v.number;p++){const y=await de(e,Pi,"getBlock")({blockNumber:p,includeTransactions:u});x.onBlock(y,d),d=y}}(!(d!=null&&d.number)||t==="pending"&&!(v!=null&&v.number)||v.number&&v.number>d.number)&&(x.onBlock(v,d),d=v)}catch(v){(C=x.onError)==null||C.call(x,v)}},{emitOnBegin:r,interval:l}))})():(()=>{let w=!0,x=()=>w=!1;return(async()=>{try{const{unsubscribe:C}=await e.transport.subscribe({params:["newHeads"],onData(v){var E,S,T;if(!w)return;const y=(((T=(S=(E=e.chain)==null?void 0:E.formatters)==null?void 0:S.block)==null?void 0:T.format)||$3)(v.result);i(y,d),d=y},onError(v){o==null||o(v)}});x=C,w||x()}catch(C){o==null||o(C)}})(),x})()}function wS(e,{address:t,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){const d=typeof l<"u"?l:e.transport.type!=="webSocket",h=u??!1;return d?(()=>{const x=Wt(["watchEvent",t,n,r,e.uid,i,c]);return ra(x,{onLogs:a,onError:s},C=>{let v,p,y=!1;const E=mc(async()=>{var S;if(!y){try{p=await de(e,m5,"createEventFilter")({address:t,args:n,event:i,events:o,strict:h})}catch{}y=!0;return}try{let T;if(p)T=await de(e,Af,"getFilterChanges")({filter:p});else{const f=await de(e,gc,"getBlockNumber")({});v&&v!==f?T=await de(e,Um,"getLogs")({address:t,args:n,event:i,events:o,fromBlock:v+1n,toBlock:f}):T=[],v=f}if(T.length===0)return;if(r)C.onLogs(T);else for(const f of T)C.onLogs([f])}catch(T){p&&T instanceof vo&&(y=!1),(S=C.onError)==null||S.call(C,T)}},{emitOnBegin:!0,interval:c});return async()=>{p&&await de(e,Tf,"uninstallFilter")({filter:p}),E()}})})():(()=>{let x=!0,C=()=>x=!1;return(async()=>{try{const v=o??(i?[i]:void 0);let p=[];v&&(p=[v.flatMap(E=>dc({abi:[E],eventName:E.name,args:n}))],i&&(p=p[0]));const{unsubscribe:y}=await e.transport.subscribe({params:["logs",{address:t,topics:p}],onData(E){var T;if(!x)return;const S=E.result;try{const{eventName:f,args:_}=pc({abi:v,data:S.data,topics:S.topics,strict:h}),D=Yn(S,{args:_,eventName:f});a([D])}catch(f){let _,D;if(f instanceof bo||f instanceof Xs){if(u)return;_=f.abiItem.name,D=(T=f.abiItem.inputs)==null?void 0:T.some($=>!("name"in $&&$.name))}const O=Yn(S,{args:D?[]:{},eventName:_});a([O])}},onError(E){s==null||s(E)}});C=y,x||C()}catch(v){s==null||s(v)}})(),C})()}function yS(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=e.pollingInterval}){return(typeof i<"u"?i:e.transport.type!=="webSocket")?(()=>{const c=Wt(["watchPendingTransactions",e.uid,t,o]);return ra(c,{onTransactions:r,onError:n},u=>{let d;const h=mc(async()=>{var m;try{if(!d)try{d=await de(e,g5,"createPendingTransactionFilter")({});return}catch(x){throw h(),x}const w=await de(e,Af,"getFilterChanges")({filter:d});if(w.length===0)return;if(t)u.onTransactions(w);else for(const x of w)u.onTransactions([x])}catch(w){(m=u.onError)==null||m.call(u,w)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await de(e,Tf,"uninstallFilter")({filter:d}),h()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await e.transport.subscribe({params:["newPendingTransactions"],onData(h){if(!c)return;const m=h.result;r([m])},onError(h){n==null||n(h)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function bS(e){return{call:t=>Sf(e,t),createBlockFilter:()=>zE(e),createContractEventFilter:t=>Q3(e,t),createEventFilter:t=>m5(e,t),createPendingTransactionFilter:()=>g5(e),estimateContractGas:t=>Q9(e,t),estimateGas:t=>Fm(e,t),getBalance:t=>WE(e,t),getBlock:t=>Pi(e,t),getBlockNumber:t=>gc(e,t),getBlockTransactionCount:t=>HE(e,t),getBytecode:t=>qE(e,t),getChainId:()=>Rl(e),getContractEvents:t=>n5(e,t),getEnsAddress:t=>TE(e,t),getEnsAvatar:t=>FE(e,t),getEnsName:t=>UE(e,t),getEnsResolver:t=>LE(e,t),getEnsText:t=>p5(e,t),getFeeHistory:t=>GE(e,t),estimateFeesPerGas:t=>V9(e,t),getFilterChanges:t=>Af(e,t),getFilterLogs:t=>QE(e,t),getGasPrice:()=>Bm(e),getLogs:t=>Um(e,t),getProof:t=>sS(e,t),estimateMaxPriorityFeePerGas:t=>q9(e,t),getStorageAt:t=>aS(e,t),getTransaction:t=>Qm(e,t),getTransactionConfirmations:t=>lS(e,t),getTransactionCount:t=>t5(e,t),getTransactionReceipt:t=>Pp(e,t),multicall:t=>cS(e,t),prepareTransactionRequest:t=>Ef(e,t),readContract:t=>ki(e,t),sendRawTransaction:t=>zm(e,t),simulateContract:t=>oE(e,t),verifyMessage:t=>hS(e,t),verifyTypedData:t=>pS(e,t),uninstallFilter:t=>Tf(e,t),waitForTransactionReceipt:t=>mS(e,t),watchBlocks:t=>gS(e,t),watchBlockNumber:t=>A5(e,t),watchContractEvent:t=>fE(e,t),watchEvent:t=>wS(e,t),watchPendingTransactions:t=>yS(e,t)}}function C2(e){const{key:t="public",name:n="Public Client"}=e;return s5({...e,key:t,name:n,type:"publicClient"}).extend(bS)}function vS(e,{abi:t,args:n,bytecode:r,...i}){const o=E5({abi:t,args:n,bytecode:r});return Wm(e,{...i,data:o})}async function xS(e){var n;return((n=e.account)==null?void 0:n.type)==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(r=>Dm(r))}async function CS(e){return await e.request({method:"wallet_getPermissions"})}async function ES(e){return(await e.request({method:"eth_requestAccounts"})).map(n=>Kn(n))}async function SS(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function AS(e,{account:t=e.account,message:n}){if(!t)throw new ea({docsPath:"/docs/actions/wallet/signMessage"});const r=Bn(t);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?xm(n):n.raw instanceof Uint8Array?Wr(n.raw):n.raw)();return e.request({method:"personal_sign",params:[i,r.address]})}async function TS(e,t){var c,u,d,h;const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new ea({docsPath:"/docs/actions/wallet/signTransaction"});const o=Bn(n);hc({account:o,...t});const s=await de(e,Rl,"getChainId")({});r!==null&&o5({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=e.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||gf;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(h=(d=e.chain)==null?void 0:d.serializers)==null?void 0:h.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:ge(s),from:o.address}]})}async function _S(e,{account:t=e.account,domain:n,message:r,primaryType:i,types:o}){if(!t)throw new ea({docsPath:"/docs/actions/wallet/signTypedData"});const s=Bn(t),a={EIP712Domain:C5({domain:n}),...o};if(x5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Wt({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>fr(u)?u.toLowerCase():u);return e.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function NS(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:ge(t)}]})}async function PS(e,t){return await e.request({method:"wallet_watchAsset",params:t})}function kS(e){return{addChain:t=>mE(e,t),deployContract:t=>vS(e,t),getAddresses:()=>xS(e),getChainId:()=>Rl(e),getPermissions:()=>CS(e),prepareTransactionRequest:t=>Ef(e,t),requestAddresses:()=>ES(e),requestPermissions:t=>SS(e,t),sendRawTransaction:t=>zm(e,t),sendTransaction:t=>Wm(e,t),signMessage:t=>AS(e,t),signTransaction:t=>TS(e,t),signTypedData:t=>_S(e,t),switchChain:t=>NS(e,t),watchAsset:t=>PS(e,t),writeContract:t=>pE(e,t)}}function Km(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return s5({...e,key:t,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(kS)}function DS(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=t.retryCount??s,c=a??t.timeout??1e4,u=e||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new c5;return _f({key:n,name:r,async request({method:h,params:m}){const w={method:h,params:m},x=await z0(u),{error:C,result:v}=await ws.webSocketAsync(x,{body:w,timeout:c});if(C)throw new Rm({body:w,error:C,url:u});return v},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return z0(u)},async subscribe({params:h,onData:m,onError:w}){const x=await z0(u),{result:C}=await new Promise((v,p)=>ws.webSocket(x,{body:{method:"eth_subscribe",params:h},onResponse(y){if(y.error){p(y.error),w==null||w(y.error);return}if(typeof y.id=="number"){v(y);return}y.method==="eth_subscription"&&m(y.params)}}));return{subscriptionId:C,async unsubscribe(){return new Promise(v=>ws.webSocket(x,{body:{method:"eth_unsubscribe",params:[C]},onResponse:v}))}}}})}}const OS=vm({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Su=vm({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var T5=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},Tr=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function ud(e){return typeof e=="string"?Number.parseInt(e,e.trim().substring(0,2)==="0x"?16:10):typeof e=="bigint"?Number(e):e}var _5={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var m=new i(u,d||l,h),w=n?n+c:c;return l._events[w]?l._events[w].fn?l._events[w]=[l._events[w],m]:l._events[w].push(m):(l._events[w]=m,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)t.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var h=0,m=d.length,w=new Array(m);h<m;h++)w[h]=d[h].fn;return w},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,h,m,w){var x=n?n+c:c;if(!this._events[x])return!1;var C=this._events[x],v=arguments.length,p,y;if(C.fn){switch(C.once&&this.removeListener(c,C.fn,void 0,!0),v){case 1:return C.fn.call(C.context),!0;case 2:return C.fn.call(C.context,u),!0;case 3:return C.fn.call(C.context,u,d),!0;case 4:return C.fn.call(C.context,u,d,h),!0;case 5:return C.fn.call(C.context,u,d,h,m),!0;case 6:return C.fn.call(C.context,u,d,h,m,w),!0}for(y=1,p=new Array(v-1);y<v;y++)p[y-1]=arguments[y];C.fn.apply(C.context,p)}else{var E=C.length,S;for(y=0;y<E;y++)switch(C[y].once&&this.removeListener(c,C[y].fn,void 0,!0),v){case 1:C[y].fn.call(C[y].context);break;case 2:C[y].fn.call(C[y].context,u);break;case 3:C[y].fn.call(C[y].context,u,d);break;case 4:C[y].fn.call(C[y].context,u,d,h);break;default:if(!p)for(S=1,p=new Array(v-1);S<v;S++)p[S-1]=arguments[S];C[y].fn.apply(C[y].context,p)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,h){var m=n?n+c:c;if(!this._events[m])return this;if(!u)return s(this,m),this;var w=this._events[m];if(w.fn)w.fn===u&&(!h||w.once)&&(!d||w.context===d)&&s(this,m);else{for(var x=0,C=[],v=w.length;x<v;x++)(w[x].fn!==u||h&&!w[x].once||d&&w[x].context!==d)&&C.push(w[x]);C.length?this._events[m]=C.length===1?C[0]:C:s(this,m)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(_5);var IS=_5.exports;const RS=Gs(IS);var Zm=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},$e=(e,t,n)=>(Zm(e,t,"read from private field"),n?n.call(e):t.get(e)),Qt=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},jl=(e,t,n,r)=>(Zm(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ct=(e,t,n)=>(Zm(e,t,"access private method"),n),Ym=class extends RS{constructor({chains:e=[Su,OS],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}};function jS(e){var n;if(!e)return"Injected";const t=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=e.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of e.providers){let a=t(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return t(e)??"Injected"}var Au,Xm=class extends Ym{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...t};super({chains:e,options:n}),this.id="injected",Qt(this,Au,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Kn(i[0])})},this.onChainChanged=i=>{const o=ud(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=jS(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:e}={}){var t;try{const n=await this.getProvider();if(!n)throw new Tr;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Kn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((t=this.storage)==null||t.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new Yt(n):n.code===-32002?new Ns(n):n}}async disconnect(){var t;const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((t=this.storage)==null||t.removeItem(this.shimDisconnectKey)))}async getAccount(){const e=await this.getProvider();if(!e)throw new Tr;const t=await e.request({method:"eth_accounts"});return Kn(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new Tr;return e.request({method:"eth_chainId"}).then(ud)}async getProvider(){const e=this.options.getProvider();return e&&jl(this,Au,e),$e(this,Au)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Km({account:n,chain:r,transport:Hm(t)})}async isAuthorized(){var e;try{if(this.options.shimDisconnect&&!((e=this.storage)!=null&&e.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Tr;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r,i,o;const t=await this.getProvider();if(!t)throw new Tr;const n=ge(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===e&&s()}))]),this.chains.find(s=>s.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===e);if(!a)throw new T5({chainId:e,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==e)throw new Yt(new Error("User rejected switch after adding network."));return a}catch(l){throw new Yt(l)}throw this.isUserRejectedRequestError(s)?new Yt(s):new $r(s)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new Tr;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}isUserRejectedRequestError(e){return e.code===4001}};Au=new WeakMap;var Jm=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},q0=(e,t,n)=>(Jm(e,t,"read from private field"),n?n.call(e):t.get(e)),V0=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Xc=(e,t,n,r)=>(Jm(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),$S=(e,t,n)=>(Jm(e,t,"access private method"),n);const MS=e=>(t,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=h=>{const m=s(h);if(!u(d,m)){const w=d;a(d=m,w)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},e(t,n,r)},BS=MS;function FS(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,t==null?void 0:t.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:i=>n.removeItem(i)}}const $l=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return $l(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return $l(r)(n)}}}},US=(e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,v)=>({...v,...C}),...t},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return e((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const u=$l(o.serialize),d=()=>{const C=o.partialize({...r()});let v;const p=u({state:C,version:o.version}).then(y=>c.setItem(o.name,y)).catch(y=>{v=y});if(v)throw v;return p},h=i.setState;i.setState=(C,v)=>{h(C,v),d()};const m=e((...C)=>{n(...C),d()},r,i);let w;const x=()=>{var C;if(!c)return;s=!1,a.forEach(p=>p(r()));const v=((C=o.onRehydrateStorage)==null?void 0:C.call(o,r()))||void 0;return $l(c.getItem.bind(c))(o.name).then(p=>{if(p)return o.deserialize(p)}).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==o.version){if(o.migrate)return o.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return p.state}).then(p=>{var y;return w=o.merge(p,(y=r())!=null?y:m),n(w,!0),d()}).then(()=>{v==null||v(w,void 0),s=!0,l.forEach(p=>p(w))}).catch(p=>{v==null||v(void 0,p)})};return i.persist={setOptions:C=>{o={...o,...C},C.getStorage&&(c=C.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>x(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},x(),w||m},LS=(e,t)=>(n,r,i)=>{let o={storage:FS(()=>localStorage),partialize:x=>x,version:0,merge:(x,C)=>({...C,...x}),...t},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...x)},r,i);const u=()=>{const x=o.partialize({...r()});return c.setItem(o.name,{state:x,version:o.version})},d=i.setState;i.setState=(x,C)=>{d(x,C),u()};const h=e((...x)=>{n(...x),u()},r,i);let m;const w=()=>{var x,C;if(!c)return;s=!1,a.forEach(p=>{var y;return p((y=r())!=null?y:h)});const v=((C=o.onRehydrateStorage)==null?void 0:C.call(o,(x=r())!=null?x:h))||void 0;return $l(c.getItem.bind(c))(o.name).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==o.version){if(o.migrate)return o.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return p.state}).then(p=>{var y;return m=o.merge(p,(y=r())!=null?y:h),n(m,!0),u()}).then(()=>{v==null||v(m,void 0),m=r(),s=!0,l.forEach(p=>p(m))}).catch(p=>{v==null||v(void 0,p)})};return i.persist={setOptions:x=>{o={...o,...x},x.storage&&(c=x.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},o.skipHydration||w(),m||h},zS=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?US(e,t):LS(e,t),WS=zS,E2=e=>{let t;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(t):l;if(!Object.is(u,t)){const d=t;t=c??typeof u!="object"?u:Object.assign({},t,u),n.forEach(h=>h(t,d))}},i=()=>t,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return t=e(r,i,a),a},HS=e=>e?E2(e):E2;function N5(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function qS(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of e){let h=!1;for(const m of t){const w=m(d);w&&(h=!0,l.some(({id:x})=>x===d.id)||(l=[...l,w.chain]),c[d.id]=[...c[d.id]||[],...w.rpcUrls.http],w.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...w.rpcUrls.webSocket]))}if(!h)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const h=l.find(x=>x.id===d)??e[0],m=c[h.id];if(!m||!m[0])throw new Error(`No providers configured for chain "${h.id}"`);const w=C2({batch:n,chain:h,transport:b2(m.map(x=>EE(x,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:l})},webSocketPublicClient:({chainId:d})=>{const h=l.find(x=>x.id===d)??e[0],m=u[h.id];if(!m||!m[0])return;const w=C2({batch:n,chain:h,transport:b2(m.map(x=>DS(x,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:l})}}}var VS=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},GS=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},QS=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},KS=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},ZS=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Ml(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,r;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ml(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const i=Object.keys(e);if(n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(o&&!Ml(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}var kp=(e,{find:t,replace:n})=>e&&t(e)?n(e):typeof e!="object"?e:Array.isArray(e)?e.map(r=>kp(r,{find:t,replace:n})):e instanceof Object?Object.entries(e).reduce((r,[i,o])=>({...r,[i]:kp(o,{find:t,replace:n})}),{}):e;function YS(e){const t=JSON.parse(e);return kp(t,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function XS(e){return{accessList:e.accessList,account:e.account,blockNumber:e.blockNumber,blockTag:e.blockTag,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function JS(e){return{accessList:e.accessList,account:e.account,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function S2(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(y7[e])}function A2(e,t){return e.slice(0,t).join(".")||"."}function T2(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function eA(e,t){const n=typeof e=="function",r=typeof t=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=T2(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=T2(i,l);if(u!==0)return r?t.call(this,a,l,A2(o,u)):`[ref=${A2(o,u)}]`}else i[0]=l,o[0]=a;return n?e.call(this,a,l):l}}function tA(e,t,n,r){return JSON.stringify(e,eA((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(t==null?void 0:t(i,s))||s},r),n??void 0)}var P5={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function k5({deserialize:e=YS,key:t="wagmi",serialize:n=tA,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${t}.${i}`);try{return s?e(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${t}.${i}`);else try{r.setItem(`${t}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${t}.${i}`)}}var _2="store",Vo,Ra,Dp,D5,nA=class{constructor({autoConnect:e=!1,connectors:t=[new Xm],publicClient:n,storage:r=k5({storage:typeof window<"u"?window.localStorage:P5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;V0(this,Dp),this.publicClients=new Map,this.webSocketPublicClients=new Map,V0(this,Vo,void 0),V0(this,Ra,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(e)try{const d=r.getItem(_2),h=(c=d==null?void 0:d.state)==null?void 0:c.data;s=h!=null&&h.account?"reconnecting":"connecting",a=(u=h==null?void 0:h.chain)==null?void 0:u.id}catch{}const l=typeof t=="function"?t():t;l.forEach(d=>d.setStorage(r)),this.store=HS(BS(WS(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:_2,storage:r,partialize:d=>{var h,m;return{...e&&{data:{account:(h=d==null?void 0:d.data)==null?void 0:h.account,chain:(m=d==null?void 0:d.data)==null?void 0:m.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,Xc(this,Ra,r==null?void 0:r.getItem("wallet")),$S(this,Dp,D5).call(this),e&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var e,t;return(t=(e=this.data)==null?void 0:e.chain)==null?void 0:t.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t=typeof e=="function"?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var e,t;this.connector&&await((t=(e=this.connector).disconnect)==null?void 0:t.call(e)),Xc(this,Vo,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(q0(this,Vo))return;Xc(this,Vo,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const e=q0(this,Ra)?[...this.connectors].sort(n=>n.id===q0(this,Ra)?-1:1):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Xc(this,Vo,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t=typeof e=="function"?e():e;t.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.publicClients.get(e??-1),t))return t;const{publicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.webSocketPublicClients.get(e??-1),t))return t;const{webSocketPublicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){var t;(t=this.storage)==null||t.setItem("wallet",e)}};Vo=new WeakMap;Ra=new WeakMap;Dp=new WeakSet;D5=function(){const e=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},t=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,h,m,w;(c=l==null?void 0:l.off)==null||c.call(l,"change",e),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",t),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((h=a.on)==null||h.call(a,"change",e),(m=a.on)==null||m.call(a,"disconnect",t),(w=a.on)==null||w.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Op;function rA(e){const t=new nA(e);return Op=t,t}function yn(){if(!Op)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Op}async function N2({chainId:e,connector:t}){const n=yn(),r=n.connector;if(r&&t.id===r.id)throw new QS;try{n.setState(o=>({...o,status:"connecting"}));const i=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState(o=>({...o,connector:t,chains:t==null?void 0:t.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:t}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function iA(){const e=yn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}var oA=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],sA=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function jn({chainId:e}={}){const t=yn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function O5({chainId:e}={}){var r,i;return await((i=(r=yn().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:e}))||null}function Ip({chainId:e}={}){const t=yn();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function aA(e,t){const n=yn(),r=async()=>t(jn(e));return n.subscribe(({publicClient:o})=>o,r)}function lA(e,t){const n=yn(),r=async()=>t(Ip(e));return n.subscribe(({webSocketPublicClient:o})=>o,r)}async function cA({abi:e,address:t,args:n,chainId:r,dataSuffix:i,functionName:o,walletClient:s,...a}){const l=jn({chainId:r}),c=s??await O5({chainId:r});if(!c)throw new Tr;r&&B5({chainId:r});const{account:u,accessList:d,blockNumber:h,blockTag:m,gas:w,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:v,nonce:p,value:y}=XS(a),{result:E,request:S}=await l.simulateContract({abi:e,address:t,functionName:o,args:n,account:u||c.account,accessList:d,blockNumber:h,blockTag:m,dataSuffix:i,gas:w,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:v,nonce:p,value:y}),T=e.filter(f=>"name"in f&&f.name===o);return{mode:"prepared",request:{...S,abi:T,chainId:r},result:E}}async function uA({chainId:e,contracts:t,blockNumber:n,blockTag:r,...i}){const o=jn({chainId:e});if(!o.chains)throw new KS;if(e&&o.chain.id!==e)throw new GS({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}async function I5({address:e,account:t,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return jn({chainId:n}).readContract({abi:r,address:e,account:t,functionName:o,args:i,blockNumber:s,blockTag:a})}async function R5({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=jn(),s=e.reduce((u,d,h)=>{const m=d.chainId??o.chain.id;return{...u,[m]:[...u[m]||[],{contract:d,index:h}]}},{}),a=()=>Object.entries(s).map(([u,d])=>uA({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:h})=>h),blockNumber:t,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,h)=>(u&&(u[c[h]]=d),u),[])}catch(o){if(o instanceof Om)throw o;const s=()=>e.map(a=>I5({...a,blockNumber:t,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function P2(e){const t=await O5({chainId:e.chainId});if(!t)throw new Tr;e.chainId&&B5({chainId:e.chainId});let n;if(e.mode==="prepared")n=e.request;else{const{chainId:i,mode:o,...s}=e;n=(await cA(s)).request}return{hash:await t.writeContract({...n,chain:e.chainId?{id:e.chainId}:null})}}async function dA({address:e,chainId:t,formatUnits:n,token:r}){const i=yn(),o=jn({chainId:t});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:t},[h,m,w]=await R5({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[e]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:m,formatted:id(h??"0",S2(n??m)),symbol:w,value:h}};try{return await c({abi:oA})}catch(u){if(u instanceof Om){const{symbol:d,...h}=await c({abi:sA});return{symbol:Em(uo(d,{dir:"right"})),...h}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:id(a??"0",S2(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function dd(){const{data:e,connector:t,status:n}=yn();switch(n){case"connected":return{address:e==null?void 0:e.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!!(e!=null&&e.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function Bl(){var i,o,s,a;const e=yn(),t=(o=(i=e.data)==null?void 0:i.chain)==null?void 0:o.id,n=e.chains??[],r=[...((s=e.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...(a=e.data)==null?void 0:a.chain,id:t}:void 0,chains:n}}async function j5({chainId:e}){const{connector:t}=yn();if(!t)throw new Tr;if(!t.switchChain)throw new ZS({connector:t});return t.switchChain(e)}function $5(e,{selector:t=n=>n}={}){const n=yn(),r=()=>e(dd());return n.subscribe(({data:o,connector:s,status:a})=>t({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:N5})}function M5(e,{selector:t=n=>n}={}){const n=yn(),r=()=>e(Bl());return n.subscribe(({data:o,chains:s})=>{var a;return t({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:N5})}async function fA({name:e,chainId:t}){const{normalize:n}=await Ps(()=>import("./index-31834cd9.js"),[]);return await jn({chainId:t}).getEnsAvatar({name:n(e)})}async function hA({address:e,chainId:t}){return jn({chainId:t}).getEnsName({address:Kn(e)})}async function pA({chainId:e}={}){return await jn({chainId:e}).getBlockNumber()}async function mA({chainId:e,confirmations:t=1,hash:n,onReplaced:r,timeout:i=0}){const o=jn({chainId:e}),s=await o.waitForTransactionReceipt({hash:n,confirmations:t,onReplaced:r,timeout:i});if(s.status==="reverted"){const a=await o.getTransaction({hash:s.transactionHash}),l=await o.call({...a,gasPrice:a.type!=="eip1559"?a.gasPrice:void 0,maxFeePerGas:a.type==="eip1559"?a.maxFeePerGas:void 0,maxPriorityFeePerGas:a.type==="eip1559"?a.maxPriorityFeePerGas:void 0}),c=Em(`0x${l.substring(138)}`);throw new Error(c)}return s}function B5({chainId:e}){var i,o;const{chain:t,chains:n}=Bl(),r=t==null?void 0:t.id;if(r&&e!==r)throw new VS({activeChain:((i=n.find(s=>s.id===r))==null?void 0:i.name)??`Chain ${r}`,targetChain:((o=n.find(s=>s.id===e))==null?void 0:o.name)??`Chain ${e}`})}const gA=Symbol(),k2=Object.getPrototypeOf,Rp=new WeakMap,wA=e=>e&&(Rp.has(e)?Rp.get(e):k2(e)===Object.prototype||k2(e)===Array.prototype),yA=e=>wA(e)&&e[gA]||null,D2=(e,t=!0)=>{Rp.set(e,t)},G0=e=>typeof e=="object"&&e!==null,eo=new WeakMap,ja=new WeakSet,bA=(e=Object.is,t=(c,u)=>new Proxy(c,u),n=c=>G0(c)&&!ja.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const h=i.get(c);if((h==null?void 0:h[0])===u)return h[1];const m=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return D2(m,!0),i.set(c,[u,m]),Reflect.ownKeys(c).forEach(w=>{if(Object.getOwnPropertyDescriptor(m,w))return;const x=Reflect.get(c,w),C={value:x,enumerable:!0,configurable:!0};if(ja.has(x))D2(x,!1);else if(x instanceof Promise)delete C.value,C.get=()=>d(x);else if(eo.has(x)){const[v,p]=eo.get(x);C.value=o(v,p(),d)}Object.defineProperty(m,w,C)}),Object.preventExtensions(m)},s=new WeakMap,a=[1,1],l=c=>{if(!G0(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const h=new Set,m=(D,O=++a[0])=>{d!==O&&(d=O,h.forEach($=>$(D,O)))};let w=a[1];const x=(D=++a[1])=>(w!==D&&!h.size&&(w=D,v.forEach(([O])=>{const $=O[1](D);$>d&&(d=$)})),d),C=D=>(O,$)=>{const Y=[...O];Y[1]=[D,...Y[1]],m(Y,$)},v=new Map,p=(D,O)=>{if(h.size){const $=O[3](C(D));v.set(D,[O,$])}else v.set(D,[O])},y=D=>{var O;const $=v.get(D);$&&(v.delete(D),(O=$[1])==null||O.call($))},E=D=>(h.add(D),h.size===1&&v.forEach(([$,Y],te)=>{const V=$[3](C(te));v.set(te,[$,V])}),()=>{h.delete(D),h.size===0&&v.forEach(([$,Y],te)=>{Y&&(Y(),v.set(te,[$]))})}),S=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),f=t(S,{deleteProperty(D,O){const $=Reflect.get(D,O);y(O);const Y=Reflect.deleteProperty(D,O);return Y&&m(["delete",[O],$]),Y},set(D,O,$,Y){const te=Reflect.has(D,O),V=Reflect.get(D,O,Y);if(te&&(e(V,$)||s.has($)&&e(V,s.get($))))return!0;y(O),G0($)&&($=yA($)||$);let L=$;if($ instanceof Promise)$.then(F=>{$.status="fulfilled",$.value=F,m(["resolve",[O],F])}).catch(F=>{$.status="rejected",$.reason=F,m(["reject",[O],F])});else{!eo.has($)&&n($)&&(L=l($));const F=!ja.has(L)&&eo.get(L);F&&p(O,F)}return Reflect.set(D,O,L,Y),m(["set",[O],$,V]),!0}});s.set(c,f);const _=[S,x,o,E];return eo.set(f,_),Reflect.ownKeys(c).forEach(D=>{const O=Object.getOwnPropertyDescriptor(c,D);"value"in O&&(f[D]=c[D],delete O.value,delete O.writable),Object.defineProperty(S,D,O)}),f})=>[l,eo,ja,e,t,n,r,i,o,s,a],[vA]=bA();function Gt(e={}){return vA(e)}function Li(e,t,n){const r=eo.get(e);let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&t(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function Fl(e){return ja.add(e),e}function er(e,t,n,r){let i=e[t];return Li(e,()=>{const o=e[t];Object.is(i,o)||n(i=o)},r)}var F5={exports:{}},U5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=W;function xA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var CA=typeof Object.is=="function"?Object.is:xA,EA=ks.useState,SA=ks.useEffect,AA=ks.useLayoutEffect,TA=ks.useDebugValue;function _A(e,t){var n=t(),r=EA({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return AA(function(){i.value=n,i.getSnapshot=t,Q0(i)&&o({inst:i})},[e,n,t]),SA(function(){return Q0(i)&&o({inst:i}),e(function(){Q0(i)&&o({inst:i})})},[e]),TA(n),n}function Q0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!CA(e,n)}catch{return!0}}function NA(e,t){return t()}var PA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?NA:_A;U5.useSyncExternalStore=ks.useSyncExternalStore!==void 0?ks.useSyncExternalStore:PA;F5.exports=U5;var eg=F5.exports;const $a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},le={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return le.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return le.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=$a.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=$a.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+$a.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function i(){e(...r)}n&&clearTimeout(n),n=setTimeout(i,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(le.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!le.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,le.wait(2e3)])},formatBalance(e,t){var r;let n;if(e==="0")n="0.000";else if(typeof e=="string"){const i=Number(e);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return $a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return le.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return le.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return le.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},ct=Gt({isConnected:!1}),Ie={state:ct,subscribe(e){return Li(ct,()=>e(ct))},subscribeKey(e,t){return er(ct,e,t)},setIsConnected(e){ct.isConnected=e},setCaipAddress(e){ct.caipAddress=e,ct.address=e?le.getPlainAddress(e):void 0},setBalance(e,t){ct.balance=e,ct.balanceSymbol=t},setProfileName(e){ct.profileName=e},setProfileImage(e){ct.profileImage=e},setAddressExplorerUrl(e){ct.addressExplorerUrl=e},resetAccount(){ct.isConnected=!1,ct.caipAddress=void 0,ct.address=void 0,ct.balance=void 0,ct.balanceSymbol=void 0,ct.profileName=void 0,ct.profileImage=void 0,ct.addressExplorerUrl=void 0}};class tg{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const K0="WALLETCONNECT_DEEPLINK_CHOICE",O2="@w3m/recent",I2="@w3m/connected_wallet_image_url",Pn={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(K0,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(K0);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(K0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=Pn.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(O2,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(O2);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(I2,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(I2)}catch{console.info("Unable to set Connected Wallet Image Url")}}},Zr=Gt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),xi={state:Zr,subscribeNetworkImages(e){return Li(Zr.networkImages,()=>e(Zr.networkImages))},subscribeKey(e,t){return er(Zr,e,t)},setWalletImage(e,t){Zr.walletImages[e]=t},setNetworkImage(e,t){Zr.networkImages[e]=t},setConnectorImage(e,t){Zr.connectorImages[e]=t},setTokenImage(e,t){Zr.tokenImages[e]=t}},Sa=Gt({connectors:[]}),kn={state:Sa,subscribeKey(e,t){return er(Sa,e,t)},setConnectors(e){Sa.connectors=e.map(t=>Fl(t))},addConnector(e){Sa.connectors.push(Fl(e))},getConnectors(){return Sa.connectors}},Aa=Gt({open:!1,selectedNetworkId:void 0}),Ds={state:Aa,subscribe(e){return Li(Aa,()=>e(Aa))},set(e){Object.assign(Aa,{...Aa,...e})}},Rt=Gt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ke={state:Rt,subscribeKey(e,t){return er(Rt,e,t)},_getClient(){if(!Rt._client)throw new Error("NetworkController client not set");return Rt._client},setClient(e){Rt._client=Fl(e)},setCaipNetwork(e){Rt.caipNetwork=e,Ds.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){Rt.caipNetwork=e,Ds.set({selectedNetworkId:e==null?void 0:e.id}),Rt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){Rt.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();Rt.supportsAllNetworks=e.supportsAllNetworks,Rt.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),Rt.caipNetwork=e},resetNetwork(){Rt.isDefaultCaipNetwork||(Rt.caipNetwork=void 0),Rt.approvedCaipNetworkIds=void 0,Rt.supportsAllNetworks=!0}},un=Gt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ke={state:un,subscribeKey(e,t){return er(un,e,t)},setProjectId(e){un.projectId=e},setIncludeWalletIds(e){un.includeWalletIds=e},setExcludeWalletIds(e){un.excludeWalletIds=e},setFeaturedWalletIds(e){un.featuredWalletIds=e},setTokens(e){un.tokens=e},setTermsConditionsUrl(e){un.termsConditionsUrl=e},setPrivacyPolicyUrl(e){un.privacyPolicyUrl=e},setCustomWallets(e){un.customWallets=e},setEnableAnalytics(e){un.enableAnalytics=e},setSdkVersion(e){un.sdkVersion=e},setMetadata(e){un.metadata=e}},kA=le.getApiUrl(),rr=new tg({baseUrl:kA}),DA="40",R2="4",Ft=Gt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Ae={state:Ft,subscribeKey(e,t){return er(Ft,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=ke.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${rr.baseUrl}/getWalletImage/${e}`,n=await rr.getBlob({path:t,headers:Ae._getApiHeaders()});xi.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${rr.baseUrl}/public/getAssetImage/${e}`,n=await rr.getBlob({path:t,headers:Ae._getApiHeaders()});xi.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${rr.baseUrl}/public/getAssetImage/${e}`,n=await rr.getBlob({path:t,headers:Ae._getApiHeaders()});xi.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Ke.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>Ae._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=kn.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>Ae._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=ke.state;if(e!=null&&e.length){const{data:t}=await rr.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):R2,include:e==null?void 0:e.join(",")}});t.sort((r,i)=>e.indexOf(r.id)-e.indexOf(i.id));const n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Ae._fetchWalletImage(r))),Ft.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=ke.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await rr.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:R2,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=Pn.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>Ae._fetchWalletImage(c))),Ft.recommended=i,Ft.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=ke.state,i=[...Ft.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await rr.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:String(e),entries:DA,include:t==null?void 0:t.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Ae._fetchWalletImage(l)),le.wait(300)]),Ft.wallets=[...Ft.wallets,...o],Ft.count=s>Ft.count?s:Ft.count,Ft.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=ke.state;Ft.search=[];const{data:r}=await rr.get({path:"/getWallets",headers:Ae._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>Ae._fetchWalletImage(o)),le.wait(300)]),Ft.search=r},prefetch(){Ft.prefetchPromise=Promise.race([Promise.allSettled([Ae.fetchFeaturedWallets(),Ae.fetchRecommendedWallets(),Ae.fetchNetworkImages(),Ae.fetchConnectorImages()]),le.wait(3e3)])}},OA=le.getAnalyticsUrl(),IA=new tg({baseUrl:OA}),RA=["MODAL_CREATED"],Uo=Gt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),je={state:Uo,subscribe(e){return Li(Uo,()=>e(Uo))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=ke.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(RA.includes(e.data.event)||typeof window>"u")return;await IA.post({path:"/e",headers:je._getApiHeaders(),body:{eventId:le.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Uo.timestamp=Date.now(),Uo.data=e,ke.state.enableAnalytics&&je._sendAnalyticsEvent(Uo)}},_t=Gt({view:"Connect",history:["Connect"]}),we={state:_t,subscribeKey(e,t){return er(_t,e,t)},push(e,t){e!==_t.view&&(_t.view=e,_t.history.push(e),_t.data=t)},reset(e){_t.view=e,_t.history=[e]},replace(e){_t.history.length>1&&_t.history.at(-1)!==e&&(_t.view=e,_t.history[_t.history.length-1]=e)},goBack(){if(_t.history.length>1){_t.history.pop();const[e]=_t.history.slice(-1);e&&(_t.view=e)}}},Jc=Gt({open:!1}),At={state:Jc,subscribeKey(e,t){return er(Jc,e,t)},async open(e){await Ae.state.prefetchPromise,e!=null&&e.view?we.reset(e.view):Ie.state.isConnected?we.reset("Account"):we.reset("Connect"),Jc.open=!0,Ds.set({open:!0}),je.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Jc.open=!1,Ds.set({open:!1}),je.sendEvent({type:"track",event:"MODAL_CLOSE"})}},jA=le.getBlockchainApiUrl(),j2=new tg({baseUrl:jA}),L5={fetchIdentity({caipChainId:e,address:t}){return j2.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:ke.state.projectId}})},fetchTransactions({account:e,projectId:t,cursor:n}){const r=n?{cursor:n}:{};return j2.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r})}},xr=Gt({message:"",variant:"success",open:!1}),Dn={state:xr,subscribeKey(e,t){return er(xr,e,t)},showSuccess(e){xr.message=e,xr.variant="success",xr.open=!0},showError(e){xr.message=e,xr.variant="error",xr.open=!0},hide(){xr.open=!1}},ut=Gt({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),zn={state:ut,subscribe(e){return Li(ut,()=>e(ut))},async fetchTransactions(e){const{projectId:t}=ke.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ut.loading=!0;try{const n=await L5.fetchTransactions({account:e,projectId:t,cursor:ut.next}),r=this.filterSpamTransactions(n.data),i=[...ut.transactions,...r];ut.loading=!1,ut.transactions=i,ut.transactionsByYear=this.groupTransactionsByYear(ut.transactionsByYear,r),ut.empty=i.length===0,ut.next=n.next?n.next:void 0}catch{je.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:ut.next}}),Dn.showError("Failed to fetch transactions"),ut.loading=!1,ut.empty=!0}},groupTransactionsByYear(e={},t=[]){const n=e;return t.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){ut.transactions=[],ut.transactionsByYear={},ut.loading=!1,ut.empty=!1,ut.next=void 0}},xt=Gt({wcError:!1,buffering:!1}),De={state:xt,subscribeKey(e,t){return er(xt,e,t)},_getClient(){if(!xt._client)throw new Error("ConnectionController client not set");return xt._client},setClient(e){xt._client=Fl(e)},connectWalletConnect(){xt.wcPromise=this._getClient().connectWalletConnect(e=>{xt.wcUri=e,xt.wcPairingExpiry=le.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInstalled(e){var t,n;return(n=(t=this._getClient()).checkInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){xt.wcUri=void 0,xt.wcPairingExpiry=void 0,xt.wcPromise=void 0,xt.wcLinking=void 0,xt.recentWallet=void 0,zn.resetTransactions(),Pn.deleteWalletConnectDeepLink()},setWcLinking(e){xt.wcLinking=e},setWcError(e){xt.wcError=e,xt.buffering=!1},setRecentWallet(e){xt.recentWallet=e},setBuffering(e){xt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Cn=Gt({status:"uninitialized"}),ir={state:Cn,subscribeKey(e,t){return er(Cn,e,t)},subscribe(e){return Li(Cn,()=>e(Cn))},_getClient(){if(!Cn._client)throw new Error("SIWEController client not set");return Cn._client},setSIWEClient(e){Cn._client=Fl(e),Cn.status="ready"},setNonce(e){Cn.nonce=e},setStatus(e){Cn.status=e},setMessage(e){Cn.message=e},setSession(e){Cn.session=e}},Lo=Gt({themeMode:"dark",themeVariables:{}}),En={state:Lo,subscribe(e){return Li(Lo,()=>e(Lo))},setThemeMode(e){Lo.themeMode=e},setThemeVariables(e){Lo.themeVariables={...Lo.themeVariables,...e}}},dt={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return xi.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return xi.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return xi.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tu=globalThis,ng=Tu.ShadowRoot&&(Tu.ShadyCSS===void 0||Tu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rg=Symbol(),$2=new WeakMap;let z5=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==rg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ng&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$2.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$2.set(n,t))}return t}toString(){return this.cssText}};const sr=e=>new z5(typeof e=="string"?e:e+"",void 0,rg),ie=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new z5(n,e,rg)},$A=(e,t)=>{if(ng)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Tu.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},M2=ng?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return sr(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:MA,defineProperty:BA,getOwnPropertyDescriptor:FA,getOwnPropertyNames:UA,getOwnPropertySymbols:LA,getPrototypeOf:zA}=Object,Ci=globalThis,B2=Ci.trustedTypes,WA=B2?B2.emptyScript:"",Z0=Ci.reactiveElementPolyfillSupport,Ka=(e,t)=>e,fd={toAttribute(e,t){switch(t){case Boolean:e=e?WA:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ig=(e,t)=>!MA(e,t),F2={attribute:!0,type:String,converter:fd,reflect:!1,hasChanged:ig};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ci.litPropertyMetadata??(Ci.litPropertyMetadata=new WeakMap);let Go=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=F2){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&BA(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=FA(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F2}static _$Ei(){if(this.hasOwnProperty(Ka("elementProperties")))return;const t=zA(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ka("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ka("properties"))){const n=this.properties,r=[...UA(n),...LA(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(M2(i))}else t!==void 0&&n.push(M2(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $A(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:fd).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:fd;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ig)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Go.elementStyles=[],Go.shadowRootOptions={mode:"open"},Go[Ka("elementProperties")]=new Map,Go[Ka("finalized")]=new Map,Z0==null||Z0({ReactiveElement:Go}),(Ci.reactiveElementVersions??(Ci.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Za=globalThis,hd=Za.trustedTypes,U2=hd?hd.createPolicy("lit-html",{createHTML:e=>e}):void 0,W5="$lit$",ii=`lit$${(Math.random()+"").slice(9)}$`,H5="?"+ii,HA=`<${H5}>`,xo=document,Ul=()=>xo.createComment(""),Ll=e=>e===null||typeof e!="object"&&typeof e!="function",q5=Array.isArray,qA=e=>q5(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Y0=`[ 	
\f\r]`,Ta=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L2=/-->/g,z2=/>/g,Ki=RegExp(`>|${Y0}(?:([^\\s"'>=/]+)(${Y0}*=${Y0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W2=/'/g,H2=/"/g,V5=/^(?:script|style|textarea|title)$/i,G5=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),I=G5(1),ne=G5(2),Co=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),q2=new WeakMap,oo=xo.createTreeWalker(xo,129);function Q5(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return U2!==void 0?U2.createHTML(t):t}const VA=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Ta;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===Ta?u[1]==="!--"?s=L2:u[1]!==void 0?s=z2:u[2]!==void 0?(V5.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Ki):u[3]!==void 0&&(s=Ki):s===Ki?u[0]===">"?(s=i??Ta,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ki:u[3]==='"'?H2:W2):s===H2||s===W2?s=Ki:s===L2||s===z2?s=Ta:(s=Ki,i=void 0);const m=s===Ki&&e[a+1].startsWith("/>")?" ":"";o+=s===Ta?l+HA:d>=0?(r.push(c),l.slice(0,d)+W5+l.slice(d)+ii+m):l+ii+(d===-2?a:m)}return[Q5(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let jp=class K5{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=VA(t,n);if(this.el=K5.createElement(c,r),oo.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=oo.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(W5)){const h=u[s++],m=i.getAttribute(d).split(ii),w=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:w[2],strings:m,ctor:w[1]==="."?QA:w[1]==="?"?KA:w[1]==="@"?ZA:Pf}),i.removeAttribute(d)}else d.startsWith(ii)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(V5.test(i.tagName)){const d=i.textContent.split(ii),h=d.length-1;if(h>0){i.textContent=hd?hd.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],Ul()),oo.nextNode(),l.push({type:2,index:++o});i.append(d[h],Ul())}}}else if(i.nodeType===8)if(i.data===H5)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(ii,d+1))!==-1;)l.push({type:7,index:o}),d+=ii.length-1}o++}}static createElement(t,n){const r=xo.createElement("template");return r.innerHTML=t,r}};function Os(e,t,n=e,r){var s,a;if(t===Co)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Ll(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Os(e,i._$AS(e,t.values),i,r)),t}let GA=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??xo).importNode(n,!0);oo.currentNode=i;let o=oo.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new og(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new YA(o,this,t)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=oo.nextNode(),s++)}return oo.currentNode=xo,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},og=class Z5{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Os(this,t,n),Ll(t)?t===at||t==null||t===""?(this._$AH!==at&&this._$AR(),this._$AH=at):t!==this._$AH&&t!==Co&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qA(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==at&&Ll(this._$AH)?this._$AA.nextSibling.data=t:this.$(xo.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=jp.createElement(Q5(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new GA(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=q2.get(t.strings);return n===void 0&&q2.set(t.strings,n=new jp(t)),n}T(t){q5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Z5(this.k(Ul()),this.k(Ul()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Pf=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=at,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=at}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Os(this,t,n,0),s=!Ll(t)||t!==this._$AH&&t!==Co,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Os(this,a[r+l],n,l),c===Co&&(c=this._$AH[l]),s||(s=!Ll(c)||c!==this._$AH[l]),c===at?t=at:t!==at&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.O(t)}O(t){t===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},QA=class extends Pf{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===at?void 0:t}};class KA extends Pf{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==at)}}let ZA=class extends Pf{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Os(this,t,n,0)??at)===Co)return;const r=this._$AH,i=t===at&&r!==at||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==at&&(r===at||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class YA{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Os(this,t)}}const X0=Za.litHtmlPolyfillSupport;X0==null||X0(jp,og),(Za.litHtmlVersions??(Za.litHtmlVersions=[])).push("3.1.0");const XA=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new og(t.insertBefore(Ul(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let J=class extends Go{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=XA(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Co}};var pb;J._$litElement$=!0,J.finalized=!0,(pb=globalThis.litElementHydrateSupport)==null||pb.call(globalThis,{LitElement:J});const J0=globalThis.litElementPolyfillSupport;J0==null||J0({LitElement:J});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let Ya,Ei,Si;function JA(e,t){Ya=document.createElement("style"),Ei=document.createElement("style"),Si=document.createElement("style"),Ya.textContent=ys(e).core.cssText,Ei.textContent=ys(e).dark.cssText,Si.textContent=ys(e).light.cssText,document.head.appendChild(Ya),document.head.appendChild(Ei),document.head.appendChild(Si),Y5(t)}function Y5(e){Ei&&Si&&(e==="light"?(Ei.removeAttribute("media"),Si.media="enabled"):(Si.removeAttribute("media"),Ei.media="enabled"))}function eT(e){Ya&&Ei&&Si&&(Ya.textContent=ys(e).core.cssText,Ei.textContent=ys(e).dark.cssText,Si.textContent=ys(e).light.cssText)}function ys(e){return{core:ie`
      :root {
        --w3m-color-mix-strength: ${sr(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${sr((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${sr((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${sr((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${sr((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:ie`
      :root {
        --w3m-color-mix: ${sr((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${sr((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:ie`
      :root {
        --w3m-color-mix: ${sr((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${sr((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const pe=ie`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,yt=ie`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,sg=ie`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function tT(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(i){customElements.get(e)||customElements.define(e,i)}}}function nT(e,t){return customElements.get(e)||customElements.define(e,t),t}function X(e){return function(n){return typeof n=="function"?nT(e,n):tT(e,n)}}const rT=ie`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var iT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $p=class extends J{render(){return I`<slot></slot>`}};$p.styles=[pe,rT];$p=iT([X("wui-card")],$p);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oT={attribute:!0,type:String,converter:fd,reflect:!1,hasChanged:ig},sT=(e=oT,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function j(e){return(t,n)=>typeof n=="object"?sT(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return j({...e,state:!0,attribute:!1})}const aT=ie`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,lT=ne`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,cT=ne`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,uT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,dT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,fT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,hT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,pT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,mT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,gT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,wT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,yT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,bT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,vT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,xT=ne`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,CT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ET=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ST=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,AT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,TT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,_T=ne` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,NT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,PT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,kT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,DT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,OT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,IT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,RT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,jT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,$T=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,MT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,BT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,FT=ne`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,UT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,LT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,zT=ne`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,WT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,HT=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,qT=ne` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,VT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,GT=ne`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,QT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,KT=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ZT=ne`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,YT=ne`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,XT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,JT=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e_=ne`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,t_=ne`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,n_=ne`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,r_=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,i_=ne`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,o_=ne`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var kf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const s_={allWallets:lT,appStore:cT,chromeStore:xT,apple:uT,arrowBottom:dT,arrowLeft:fT,arrowRight:hT,arrowTop:pT,browser:mT,checkmark:gT,chevronBottom:wT,chevronLeft:yT,chevronRight:bT,chevronTop:vT,clock:CT,close:ET,compass:AT,coinPlaceholder:ST,copy:TT,cursor:_T,desktop:NT,disconnect:PT,discord:kT,etherscan:DT,extension:OT,externalLink:IT,facebook:RT,filters:jT,github:$T,google:MT,helpCircle:BT,infoCircle:FT,mail:UT,mobile:LT,networkPlaceholder:zT,nftPlaceholder:WT,off:HT,playStore:qT,qrCode:VT,refresh:GT,search:QT,swapHorizontal:KT,swapHorizontalBold:ZT,swapVertical:YT,telegram:XT,twitch:JT,twitter:e_,twitterIcon:t_,wallet:r_,walletConnect:i_,walletPlaceholder:n_,warningCircle:o_};let Is=class extends J{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,I`${s_[this.name]}`}};Is.styles=[pe,sg,aT];kf([j()],Is.prototype,"size",void 0);kf([j()],Is.prototype,"name",void 0);kf([j()],Is.prototype,"color",void 0);Is=kf([X("wui-icon")],Is);const a_=ie`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var ag=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zl=class extends J{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return I`<img src=${this.src} alt=${this.alt} />`}};zl.styles=[pe,sg,a_];ag([j()],zl.prototype,"src",void 0);ag([j()],zl.prototype,"alt",void 0);zl=ag([X("wui-image")],zl);const l_=ie`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c_=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Mp=class extends J{render(){return I`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Mp.styles=[pe,l_];Mp=c_([X("wui-loading-hexagon")],Mp);const u_=ie`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var lg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wl=class extends J{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,I`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Wl.styles=[pe,u_];lg([j()],Wl.prototype,"color",void 0);lg([j()],Wl.prototype,"size",void 0);Wl=lg([X("wui-loading-spinner")],Wl);const d_=ie`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var X5=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let pd=class extends J{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,i=116+r,o=245+r,s=360+r*1.75;return I`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};pd.styles=[pe,d_];X5([j({type:Number})],pd.prototype,"radius",void 0);pd=X5([X("wui-loading-thumbnail")],pd);const f_=ie`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Df=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Rs=class extends J{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,I`<slot></slot>`}};Rs.styles=[f_];Df([j()],Rs.prototype,"width",void 0);Df([j()],Rs.prototype,"height",void 0);Df([j()],Rs.prototype,"borderRadius",void 0);Rs=Df([X("wui-shimmer")],Rs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e4=e=>(...t)=>({_$litDirective$:e,values:t});let t4=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h_=e4(class extends t4{constructor(e){var t;if(super(e),e.type!==J5.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.it)o in t||(n.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return Co}}),p_=ie`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Of=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let js=class extends J{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,I`<slot class=${h_(t)}></slot>`}};js.styles=[pe,p_];Of([j()],js.prototype,"variant",void 0);Of([j()],js.prototype,"color",void 0);Of([j()],js.prototype,"align",void 0);js=Of([X("wui-text")],js);const m_=ne`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,g_=ne`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,w_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,y_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,b_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,v_=ne`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,x_=ne`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,C_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,E_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,S_=ne`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,A_=ne`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,T_=ne`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,__=ne`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,N_=ie`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var n4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const P_={browser:m_,dao:g_,defi:w_,defiAlt:y_,eth:b_,layers:v_,lock:x_,login:C_,network:E_,nft:S_,noun:A_,profile:T_,system:__};let md=class extends J{constructor(){super(...arguments),this.name="browser"}render(){return I`${P_[this.name]}`}};md.styles=[pe,N_];n4([j()],md.prototype,"name",void 0);md=n4([X("wui-visual")],md);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=e=>e??at,Ue={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,i=t&255;return[n,r,i]},tintColor(e,t){const[n,r,i]=e,o=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(i+(255-i)*t);return[o,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},k_=ie`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var bn=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ht=class extends J{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ue.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ue.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ue.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ue.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ue.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ue.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ue.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ue.getSpacingStyles(this.margin,3)};
    `,I`<slot></slot>`}};Ht.styles=[pe,k_];bn([j()],Ht.prototype,"flexDirection",void 0);bn([j()],Ht.prototype,"flexWrap",void 0);bn([j()],Ht.prototype,"flexBasis",void 0);bn([j()],Ht.prototype,"flexGrow",void 0);bn([j()],Ht.prototype,"flexShrink",void 0);bn([j()],Ht.prototype,"alignItems",void 0);bn([j()],Ht.prototype,"justifyContent",void 0);bn([j()],Ht.prototype,"columnGap",void 0);bn([j()],Ht.prototype,"rowGap",void 0);bn([j()],Ht.prototype,"gap",void 0);bn([j()],Ht.prototype,"padding",void 0);bn([j()],Ht.prototype,"margin",void 0);Ht=bn([X("wui-flex")],Ht);const D_=ie`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var If=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $s=class extends J{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return I`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",I`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Ue.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};$s.styles=[pe,D_];If([j()],$s.prototype,"imageSrc",void 0);If([j()],$s.prototype,"alt",void 0);If([j()],$s.prototype,"address",void 0);$s=If([X("wui-avatar")],$s);const O_=ie`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Hr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Xn=class extends J{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||o?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,I` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Xn.styles=[pe,yt,O_];Hr([j()],Xn.prototype,"size",void 0);Hr([j()],Xn.prototype,"backgroundColor",void 0);Hr([j()],Xn.prototype,"iconColor",void 0);Hr([j()],Xn.prototype,"iconSize",void 0);Hr([j()],Xn.prototype,"background",void 0);Hr([j({type:Boolean})],Xn.prototype,"border",void 0);Hr([j()],Xn.prototype,"borderColor",void 0);Hr([j()],Xn.prototype,"icon",void 0);Xn=Hr([X("wui-icon-box")],Xn);const I_=ie`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Do=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Mr=class extends J{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return I`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${Ce(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ue.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?I`<wui-image src=${this.networkSrc}></wui-image>`:I`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return I`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Mr.styles=[pe,yt,I_];Do([j()],Mr.prototype,"networkSrc",void 0);Do([j()],Mr.prototype,"avatarSrc",void 0);Do([j()],Mr.prototype,"balance",void 0);Do([j({type:Boolean})],Mr.prototype,"disabled",void 0);Do([j({type:Boolean})],Mr.prototype,"isProfileName",void 0);Do([j()],Mr.prototype,"address",void 0);Mr=Do([X("wui-account-button")],Mr);const R_=ie`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var wc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Eo=class extends J{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),I` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?I`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:I`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Eo.styles=[pe,R_];wc([j()],Eo.prototype,"size",void 0);wc([j()],Eo.prototype,"name",void 0);wc([j()],Eo.prototype,"imageSrc",void 0);wc([j()],Eo.prototype,"walletIcon",void 0);Eo=wc([X("wui-wallet-image")],Eo);const j_=ie`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var r4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const eh=4;let gd=class extends J{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<eh;return I`${this.walletImages.slice(0,eh).map(({src:n,walletName:r})=>I`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${Ce(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(eh-this.walletImages.length)].map(()=>I` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};gd.styles=[pe,j_];r4([j({type:Array})],gd.prototype,"walletImages",void 0);gd=r4([X("wui-all-wallets-image")],gd);const $_=ie`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ia=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Di=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return I`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?I`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:I``}};Di.styles=[pe,yt,$_];ia([j()],Di.prototype,"size",void 0);ia([j({type:Boolean})],Di.prototype,"disabled",void 0);ia([j({type:Boolean})],Di.prototype,"fullWidth",void 0);ia([j({type:Boolean})],Di.prototype,"loading",void 0);ia([j()],Di.prototype,"variant",void 0);Di=ia([X("wui-button")],Di);const i4=ne`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,M_=ie`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var o4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let wd=class extends J{constructor(){super(...arguments),this.type="wallet"}render(){return I`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?I` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${i4}`:I`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};wd.styles=[pe,yt,M_];o4([j()],wd.prototype,"type",void 0);wd=o4([X("wui-card-select-loader")],wd);const B_=ne`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,F_=ie`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var yc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let So=class extends J{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,I`${this.templateVisual()} ${t?B_:i4}`}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:I`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};So.styles=[pe,F_];yc([j()],So.prototype,"size",void 0);yc([j()],So.prototype,"name",void 0);yc([j()],So.prototype,"imageSrc",void 0);yc([j({type:Boolean})],So.prototype,"selected",void 0);So=yc([X("wui-network-image")],So);const U_=ie`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var oa=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Oi=class extends J{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return I`
      <button data-selected=${Ce(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?I`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ce(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:I`
      <wui-wallet-image size="md" imageSrc=${Ce(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Oi.styles=[pe,yt,U_];oa([j()],Oi.prototype,"name",void 0);oa([j()],Oi.prototype,"type",void 0);oa([j()],Oi.prototype,"imageSrc",void 0);oa([j({type:Boolean})],Oi.prototype,"disabled",void 0);oa([j({type:Boolean})],Oi.prototype,"selected",void 0);Oi=oa([X("wui-card-select")],Oi);const L_=ie`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var sa=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ii=class extends J{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return I`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${Ue.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?I`<wui-image src=${this.imageSrc}></wui-image>`:null}};Ii.styles=[pe,yt,L_];sa([j()],Ii.prototype,"variant",void 0);sa([j()],Ii.prototype,"imageSrc",void 0);sa([j({type:Boolean})],Ii.prototype,"disabled",void 0);sa([j()],Ii.prototype,"icon",void 0);sa([j()],Ii.prototype,"href",void 0);Ii=sa([X("wui-chip")],Ii);const z_=ie`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var cg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Hl=class extends J{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return I`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?I`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Hl.styles=[pe,yt,z_];cg([j()],Hl.prototype,"size",void 0);cg([j({type:Boolean})],Hl.prototype,"loading",void 0);Hl=cg([X("wui-connect-button")],Hl);const W_=ie`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Rf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ms=class extends J{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return I`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ms.styles=[pe,yt,W_];Rf([j({type:Boolean})],Ms.prototype,"disabled",void 0);Rf([j()],Ms.prototype,"label",void 0);Rf([j()],Ms.prototype,"buttonLabel",void 0);Ms=Rf([X("wui-cta-button")],Ms);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H_=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),Xa(i,t);return!0},yd=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},s4=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),G_(t)}};function q_(e){this._$AN!==void 0?(yd(this),this._$AM=e,s4(this)):this._$AM=e}function V_(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)Xa(r[o],!1),yd(r[o]);else r!=null&&(Xa(r,!1),yd(r));else Xa(this,e)}const G_=e=>{e.type==J5.CHILD&&(e._$AP??(e._$AP=V_),e._$AQ??(e._$AQ=q_))};let Q_=class extends t4{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),s4(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Xa(this,t),yd(this))}setValue(t){if(H_(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a4=()=>new K_;let K_=class{};const th=new WeakMap,l4=e4(class extends Q_{render(e){return at}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),at}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=th.get(t);n===void 0&&(n=new WeakMap,th.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=th.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Z_=ie`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Oo=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Br=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=a4()}render(){const t=`wui-size-${this.size}`;return I` ${this.templateIcon()}
      <input
        ${l4(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${Ce(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?I`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Br.styles=[pe,yt,Z_];Oo([j()],Br.prototype,"size",void 0);Oo([j()],Br.prototype,"icon",void 0);Oo([j({type:Boolean})],Br.prototype,"disabled",void 0);Oo([j()],Br.prototype,"placeholder",void 0);Oo([j()],Br.prototype,"type",void 0);Oo([j()],Br.prototype,"keyHint",void 0);Br=Oo([X("wui-input-text")],Br);const Y_=ie`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let bd=class extends J{render(){return I`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?I`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};bd.styles=[pe,Y_];c4([j()],bd.prototype,"errorMessage",void 0);bd=c4([X("wui-email-input")],bd);const X_=ie`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var bc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ao=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Ao.styles=[pe,yt,sg,X_];bc([j()],Ao.prototype,"size",void 0);bc([j({type:Boolean})],Ao.prototype,"disabled",void 0);bc([j()],Ao.prototype,"icon",void 0);bc([j()],Ao.prototype,"iconColor",void 0);Ao=bc([X("wui-icon-link")],Ao);const J_=ie`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var u4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let vd=class extends J{constructor(){super(...arguments),this.icon="copy"}render(){return I`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};vd.styles=[pe,yt,J_];u4([j()],vd.prototype,"icon",void 0);vd=u4([X("wui-input-element")],vd);const eN=ie`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var d4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let xd=class extends J{constructor(){super(...arguments),this.disabled=!1}render(){return I`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};xd.styles=[pe,yt,eN];d4([j({type:Boolean})],xd.prototype,"disabled",void 0);xd=d4([X("wui-input-numeric")],xd);const tN=ie`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var ug=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ql=class extends J{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ql.styles=[pe,yt,tN];ug([j({type:Boolean})],ql.prototype,"disabled",void 0);ug([j()],ql.prototype,"color",void 0);ql=ug([X("wui-link")],ql);const nN=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var wr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $n=class extends J{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return I`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Ce(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return I`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return I`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return I`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?I`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:I``}chevronTemplate(){return this.chevron?I`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};$n.styles=[pe,yt,nN];wr([j()],$n.prototype,"icon",void 0);wr([j()],$n.prototype,"iconSize",void 0);wr([j()],$n.prototype,"variant",void 0);wr([j()],$n.prototype,"iconVariant",void 0);wr([j({type:Boolean})],$n.prototype,"disabled",void 0);wr([j()],$n.prototype,"imageSrc",void 0);wr([j()],$n.prototype,"alt",void 0);wr([j({type:Boolean})],$n.prototype,"chevron",void 0);wr([j({type:Boolean})],$n.prototype,"loading",void 0);$n=wr([X("wui-list-item")],$n);var Bp;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(Bp||(Bp={}));const rN=ie`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Io=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fr=class extends J{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,n]=this.images,r=(t==null?void 0:t.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,I`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,n]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||n!=null&&n.url)?I`<div class="swap-images-container">
        ${t!=null&&t.url?I`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?I`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?I`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?I`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:I`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",n;return n=this.getIcon(),this.status&&(t=this.getStatusColor()),n?I`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Fr.styles=[rN];Io([j()],Fr.prototype,"type",void 0);Io([j()],Fr.prototype,"status",void 0);Io([j()],Fr.prototype,"direction",void 0);Io([j()],Fr.prototype,"onlyDirectionIcon",void 0);Io([j()],Fr.prototype,"images",void 0);Io([j()],Fr.prototype,"secondImage",void 0);Fr=Io([X("wui-transaction-visual")],Fr);const iN=ie`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var zi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let hr=class extends J{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return I`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Bp[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[0];return t?I`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[1];return t?I`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};hr.styles=[pe,iN];zi([j()],hr.prototype,"type",void 0);zi([j()],hr.prototype,"descriptions",void 0);zi([j()],hr.prototype,"date",void 0);zi([j()],hr.prototype,"onlyDirectionIcon",void 0);zi([j()],hr.prototype,"status",void 0);zi([j()],hr.prototype,"direction",void 0);zi([j()],hr.prototype,"images",void 0);hr=zi([X("wui-transaction-list-item")],hr);const oN=ie`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var sN=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fp=class extends J{render(){return I`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Fp.styles=[pe,oN];Fp=sN([X("wui-transaction-list-item-loader")],Fp);const aN=ie`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var f4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Cd=class extends J{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,I`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Cd.styles=[pe,aN];f4([j()],Cd.prototype,"variant",void 0);Cd=f4([X("wui-tag")],Cd);const lN=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var yr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Mn=class extends J{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?I` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?I` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?I`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?I`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?I`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?I`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Mn.styles=[pe,yt,lN];yr([j({type:Array})],Mn.prototype,"walletImages",void 0);yr([j()],Mn.prototype,"imageSrc",void 0);yr([j()],Mn.prototype,"name",void 0);yr([j()],Mn.prototype,"tagLabel",void 0);yr([j()],Mn.prototype,"tagVariant",void 0);yr([j()],Mn.prototype,"icon",void 0);yr([j()],Mn.prototype,"walletIcon",void 0);yr([j({type:Boolean})],Mn.prototype,"disabled",void 0);yr([j({type:Boolean})],Mn.prototype,"showAllWallets",void 0);Mn=yr([X("wui-list-wallet")],Mn);const cN=ie`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var h4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ed=class extends J{constructor(){super(...arguments),this.logo="google"}render(){return I`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Ed.styles=[pe,cN];h4([j()],Ed.prototype,"logo",void 0);Ed=h4([X("wui-logo")],Ed);const uN=ie`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var dg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vl=class extends J{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return I`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Vl.styles=[pe,yt,uN];dg([j()],Vl.prototype,"logo",void 0);dg([j({type:Boolean})],Vl.prototype,"disabled",void 0);Vl=dg([X("wui-logo-select")],Vl);const dN=ie`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var fg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gl=class extends J{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return I`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?I`<wui-image src=${this.imageSrc}></wui-image>`:I`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Gl.styles=[pe,yt,dN];fg([j()],Gl.prototype,"imageSrc",void 0);fg([j({type:Boolean})],Gl.prototype,"disabled",void 0);Gl=fg([X("wui-network-button")],Gl);const fN=ie`
  :host {
    position: relative;
    display: block;
  }
`;var p4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sd=class extends J{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(t.key)&&t.preventDefault();const s=i.selectionStart;switch(t.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(t==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return I`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>I`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,i=this.getInputElement(r);if(i){const o=i.value;t.inputType==="insertFromPaste"?this.handlePaste(i,o,n):Ue.isNumber(o)&&t.data?(i.value=t.data,this.focusInputField("next",n)):i.value=""}}handlePaste(t,n,r){const i=n[0];if(i&&Ue.isNumber(i)){t.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};Sd.styles=[pe,fN];p4([j({type:Number})],Sd.prototype,"length",void 0);Sd=p4([X("wui-otp")],Sd);var vc={},hN=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},m4={},vn={};let hg;const pN=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];vn.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};vn.getSymbolTotalCodewords=function(t){return pN[t]};vn.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};vn.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');hg=t};vn.isKanjiModeEnabled=function(){return typeof hg<"u"};vn.toSJIS=function(t){return hg(t)};var jf={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,i){if(e.isValid(r))return r;try{return t(r)}catch{return i}}})(jf);function g4(){this.buffer=[],this.length=0}g4.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var mN=g4;function xc(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}xc.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)};xc.prototype.get=function(e,t){return this.data[e*this.size+t]};xc.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};xc.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var gN=xc,w4={};(function(e){const t=vn.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const i=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(w4);var y4={};const wN=vn.getSymbolSize,V2=7;y4.getPositions=function(t){const n=wN(t);return[[0,0],[n-V2,0],[0,n-V2]]};var b4={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},e.from=function(i){return e.isValid(i)?parseInt(i,10):void 0},e.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let h=0;h<o;h++){let m=i.get(d,h);m===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=m,a=1),m=i.get(h,d),m===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=m,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(r,i,o){switch(r){case e.Patterns.PATTERN000:return(i+o)%2===0;case e.Patterns.PATTERN001:return i%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(i+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return i*o%2+i*o%3===0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},e.getBestMask=function(i,o){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),e.applyMask(c,i);const u=e.getPenaltyN1(i)+e.getPenaltyN2(i)+e.getPenaltyN3(i)+e.getPenaltyN4(i);e.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(b4);var $f={};const ui=jf,eu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],tu=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$f.getBlocksCount=function(t,n){switch(n){case ui.L:return eu[(t-1)*4+0];case ui.M:return eu[(t-1)*4+1];case ui.Q:return eu[(t-1)*4+2];case ui.H:return eu[(t-1)*4+3];default:return}};$f.getTotalCodewordsCount=function(t,n){switch(n){case ui.L:return tu[(t-1)*4+0];case ui.M:return tu[(t-1)*4+1];case ui.Q:return tu[(t-1)*4+2];case ui.H:return tu[(t-1)*4+3];default:return}};var v4={},Mf={};const Ja=new Uint8Array(512),Ad=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)Ja[n]=t,Ad[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)Ja[n]=Ja[n-255]})();Mf.log=function(t){if(t<1)throw new Error("log("+t+")");return Ad[t]};Mf.exp=function(t){return Ja[t]};Mf.mul=function(t,n){return t===0||n===0?0:Ja[Ad[t]+Ad[n]]};(function(e){const t=Mf;e.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=t.mul(r[s],i[a]);return o},e.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=t.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=e.mul(i,new Uint8Array([1,t.exp(o)]));return i}})(v4);const x4=v4;function pg(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}pg.prototype.initialize=function(t){this.degree=t,this.genPoly=x4.generateECPolynomial(this.degree)};pg.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=x4.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var yN=pg,C4={},Wi={},mg={};mg.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var br={};const E4="[0-9]+",bN="[A-Z $%*+\\-./:]+";let Ql="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ql=Ql.replace(/u/g,"\\u");const vN="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ql+`)(?:.|[\r
]))+`;br.KANJI=new RegExp(Ql,"g");br.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");br.BYTE=new RegExp(vN,"g");br.NUMERIC=new RegExp(E4,"g");br.ALPHANUMERIC=new RegExp(bN,"g");const xN=new RegExp("^"+Ql+"$"),CN=new RegExp("^"+E4+"$"),EN=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");br.testKanji=function(t){return xN.test(t)};br.testNumeric=function(t){return CN.test(t)};br.testAlphanumeric=function(t){return EN.test(t)};(function(e){const t=mg,n=br;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+i)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(Wi);(function(e){const t=vn,n=$f,r=jf,i=Wi,o=mg,s=7973,a=t.getBCHDigit(s);function l(h,m,w){for(let x=1;x<=40;x++)if(m<=e.getCapacity(x,w,h))return x}function c(h,m){return i.getCharCountIndicator(h,m)+4}function u(h,m){let w=0;return h.forEach(function(x){const C=c(x.mode,m);w+=C+x.getBitsLength()}),w}function d(h,m){for(let w=1;w<=40;w++)if(u(h,w)<=e.getCapacity(w,m,i.MIXED))return w}e.from=function(m,w){return o.isValid(m)?parseInt(m,10):w},e.getCapacity=function(m,w,x){if(!o.isValid(m))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=i.BYTE);const C=t.getSymbolTotalCodewords(m),v=n.getTotalCodewordsCount(m,w),p=(C-v)*8;if(x===i.MIXED)return p;const y=p-c(x,m);switch(x){case i.NUMERIC:return Math.floor(y/10*3);case i.ALPHANUMERIC:return Math.floor(y/11*2);case i.KANJI:return Math.floor(y/13);case i.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(m,w){let x;const C=r.from(w,r.M);if(Array.isArray(m)){if(m.length>1)return d(m,C);if(m.length===0)return 1;x=m[0]}else x=m;return l(x.mode,x.getLength(),C)},e.getEncodedBits=function(m){if(!o.isValid(m)||m<7)throw new Error("Invalid QR Code version");let w=m<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return m<<12|w}})(C4);var S4={};const Up=vn,A4=1335,SN=21522,G2=Up.getBCHDigit(A4);S4.getEncodedBits=function(t,n){const r=t.bit<<3|n;let i=r<<10;for(;Up.getBCHDigit(i)-G2>=0;)i^=A4<<Up.getBCHDigit(i)-G2;return(r<<10|i)^SN};var T4={};const AN=Wi;function Bs(e){this.mode=AN.NUMERIC,this.data=e.toString()}Bs.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Bs.prototype.getLength=function(){return this.data.length};Bs.prototype.getBitsLength=function(){return Bs.getBitsLength(this.data.length)};Bs.prototype.write=function(t){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),t.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),t.put(i,o*3+1))};var TN=Bs;const _N=Wi,nh=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Fs(e){this.mode=_N.ALPHANUMERIC,this.data=e}Fs.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Fs.prototype.getLength=function(){return this.data.length};Fs.prototype.getBitsLength=function(){return Fs.getBitsLength(this.data.length)};Fs.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=nh.indexOf(this.data[n])*45;r+=nh.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(nh.indexOf(this.data[n]),6)};var NN=Fs,PN=function(t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=t.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const kN=PN,DN=Wi;function Us(e){this.mode=DN.BYTE,typeof e=="string"&&(e=kN(e)),this.data=new Uint8Array(e)}Us.getBitsLength=function(t){return t*8};Us.prototype.getLength=function(){return this.data.length};Us.prototype.getBitsLength=function(){return Us.getBitsLength(this.data.length)};Us.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var ON=Us;const IN=Wi,RN=vn;function Ls(e){this.mode=IN.KANJI,this.data=e}Ls.getBitsLength=function(t){return t*13};Ls.prototype.getLength=function(){return this.data.length};Ls.prototype.getBitsLength=function(){return Ls.getBitsLength(this.data.length)};Ls.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=RN.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var jN=Ls,_4={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,h,m,w,x,C;!a.empty();){l=a.pop(),c=l.value,d=l.cost,h=n[c]||{};for(u in h)h.hasOwnProperty(u)&&(m=h[u],w=d+m,x=s[u],C=typeof s[u]>"u",(C||x>w)&&(s[u]=w,a.push(u,w),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var v=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(v)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=t.single_source_shortest_paths(n,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(_4);var $N=_4.exports;(function(e){const t=Wi,n=TN,r=NN,i=ON,o=jN,s=br,a=vn,l=$N;function c(v){return unescape(encodeURIComponent(v)).length}function u(v,p,y){const E=[];let S;for(;(S=v.exec(y))!==null;)E.push({data:S[0],index:S.index,mode:p,length:S[0].length});return E}function d(v){const p=u(s.NUMERIC,t.NUMERIC,v),y=u(s.ALPHANUMERIC,t.ALPHANUMERIC,v);let E,S;return a.isKanjiModeEnabled()?(E=u(s.BYTE,t.BYTE,v),S=u(s.KANJI,t.KANJI,v)):(E=u(s.BYTE_KANJI,t.BYTE,v),S=[]),p.concat(y,E,S).sort(function(f,_){return f.index-_.index}).map(function(f){return{data:f.data,mode:f.mode,length:f.length}})}function h(v,p){switch(p){case t.NUMERIC:return n.getBitsLength(v);case t.ALPHANUMERIC:return r.getBitsLength(v);case t.KANJI:return o.getBitsLength(v);case t.BYTE:return i.getBitsLength(v)}}function m(v){return v.reduce(function(p,y){const E=p.length-1>=0?p[p.length-1]:null;return E&&E.mode===y.mode?(p[p.length-1].data+=y.data,p):(p.push(y),p)},[])}function w(v){const p=[];for(let y=0;y<v.length;y++){const E=v[y];switch(E.mode){case t.NUMERIC:p.push([E,{data:E.data,mode:t.ALPHANUMERIC,length:E.length},{data:E.data,mode:t.BYTE,length:E.length}]);break;case t.ALPHANUMERIC:p.push([E,{data:E.data,mode:t.BYTE,length:E.length}]);break;case t.KANJI:p.push([E,{data:E.data,mode:t.BYTE,length:c(E.data)}]);break;case t.BYTE:p.push([{data:E.data,mode:t.BYTE,length:c(E.data)}])}}return p}function x(v,p){const y={},E={start:{}};let S=["start"];for(let T=0;T<v.length;T++){const f=v[T],_=[];for(let D=0;D<f.length;D++){const O=f[D],$=""+T+D;_.push($),y[$]={node:O,lastCount:0},E[$]={};for(let Y=0;Y<S.length;Y++){const te=S[Y];y[te]&&y[te].node.mode===O.mode?(E[te][$]=h(y[te].lastCount+O.length,O.mode)-h(y[te].lastCount,O.mode),y[te].lastCount+=O.length):(y[te]&&(y[te].lastCount=O.length),E[te][$]=h(O.length,O.mode)+4+t.getCharCountIndicator(O.mode,p))}}S=_}for(let T=0;T<S.length;T++)E[S[T]].end=0;return{map:E,table:y}}function C(v,p){let y;const E=t.getBestModeForData(v);if(y=t.from(p,E),y!==t.BYTE&&y.bit<E.bit)throw new Error('"'+v+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(E));switch(y===t.KANJI&&!a.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new n(v);case t.ALPHANUMERIC:return new r(v);case t.KANJI:return new o(v);case t.BYTE:return new i(v)}}e.fromArray=function(p){return p.reduce(function(y,E){return typeof E=="string"?y.push(C(E,null)):E.data&&y.push(C(E.data,E.mode)),y},[])},e.fromString=function(p,y){const E=d(p,a.isKanjiModeEnabled()),S=w(E),T=x(S,y),f=l.find_path(T.map,"start","end"),_=[];for(let D=1;D<f.length-1;D++)_.push(T.table[f[D]].node);return e.fromArray(m(_))},e.rawSplit=function(p){return e.fromArray(d(p,a.isKanjiModeEnabled()))}})(T4);const Bf=vn,rh=jf,MN=mN,BN=gN,FN=w4,UN=y4,Lp=b4,zp=$f,LN=yN,Td=C4,zN=S4,WN=Wi,ih=T4;function HN(e,t){const n=e.size,r=UN.getPositions(t);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(o+a,s+l,!0,!0):e.set(o+a,s+l,!1,!0))}}function qN(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function VN(e,t){const n=FN.getPositions(t);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(i+s,o+a,!0,!0):e.set(i+s,o+a,!1,!0)}}function GN(e,t){const n=e.size,r=Td.getEncodedBits(t);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,e.set(i,o,s,!0),e.set(o,i,s,!0)}function oh(e,t,n){const r=e.size,i=zN.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function QN(e,t){const n=e.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(i,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>o&1)===1),e.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function KN(e,t,n){const r=new MN;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),WN.getCharCountIndicator(l.mode,e)),l.write(r)});const i=Bf.getSymbolTotalCodewords(e),o=zp.getTotalCodewordsCount(e,t),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return ZN(r,e,t)}function ZN(e,t,n){const r=Bf.getSymbolTotalCodewords(t),i=zp.getTotalCodewordsCount(t,n),o=r-i,s=zp.getBlocksCount(t,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,h=c-u,m=new LN(h);let w=0;const x=new Array(s),C=new Array(s);let v=0;const p=new Uint8Array(e.buffer);for(let f=0;f<s;f++){const _=f<l?u:d;x[f]=p.slice(w,w+_),C[f]=m.encode(x[f]),w+=_,v=Math.max(v,_)}const y=new Uint8Array(r);let E=0,S,T;for(S=0;S<v;S++)for(T=0;T<s;T++)S<x[T].length&&(y[E++]=x[T][S]);for(S=0;S<h;S++)for(T=0;T<s;T++)y[E++]=C[T][S];return y}function YN(e,t,n,r){let i;if(Array.isArray(e))i=ih.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const u=ih.rawSplit(e);c=Td.getBestVersionForData(u,n)}i=ih.fromString(e,c||40)}else throw new Error("Invalid data");const o=Td.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=KN(t,n,i),a=Bf.getSymbolSize(t),l=new BN(a);return HN(l,t),qN(l),VN(l,t),oh(l,n,0),t>=7&&GN(l,t),QN(l,s),isNaN(r)&&(r=Lp.getBestMask(l,oh.bind(null,l,n))),Lp.applyMask(r,l),oh(l,n,r),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:r,segments:i}}m4.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=rh.M,i,o;return typeof n<"u"&&(r=rh.from(n.errorCorrectionLevel,rh.M),i=Td.from(n.version),o=Lp.from(n.maskPattern),n.toSJISFunc&&Bf.setToSJISFunction(n.toSJISFunc)),YN(t,i,r,o)};var N4={},gg={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},e.getImageWidth=function(r,i){const o=e.getScale(r,i);return Math.floor((r+i.margin*2)*o)},e.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=e.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let h=0;h<c;h++)for(let m=0;m<c;m++){let w=(h*c+m)*4,x=o.color.light;if(h>=u&&m>=u&&h<c-u&&m<c-u){const C=Math.floor((h-u)/l),v=Math.floor((m-u)/l);x=d[a[C*s+v]?1:0]}r[w++]=x.r,r[w++]=x.g,r[w++]=x.b,r[w]=x.a}}})(gg);(function(e){const t=gg;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=t.getOptions(l);const u=t.getImageWidth(o.modules.size,l),d=c.getContext("2d"),h=d.createImageData(u,u);return t.qrToImageData(h.data,o,l),n(d,c,u),d.putImageData(h,0,0),c},e.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(N4);var P4={};const XN=gg;function Q2(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function sh(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function JN(e,t,n){let r="",i=0,o=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!o&&(o=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=o?sh("M",l+n,.5+c+n):sh("m",i,0),i=0,o=!1),l+1<t&&e[a+1]||(r+=sh("h",s),s=0)):i++}return r}P4.render=function(t,n,r){const i=XN.getOptions(n),o=t.modules.size,s=t.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+Q2(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Q2(i.color.dark,"stroke")+' d="'+JN(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const eP=hN,Wp=m4,k4=N4,tP=P4;function wg(e,t,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!eP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(l,c){try{const u=Wp.create(n,r);l(e(u,t,r))}catch(u){c(u)}})}try{const l=Wp.create(n,r);i(null,e(l,t,r))}catch(l){i(l)}}vc.create=Wp.create;vc.toCanvas=wg.bind(null,k4.render);vc.toDataURL=wg.bind(null,k4.renderToDataURL);vc.toString=wg.bind(null,function(e,t,n){return tP.render(e,n)});const nP=.1,K2=2.5,Cr=7;function ah(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+nP}function rP(e,t){const n=Array.prototype.slice.call(vc.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const iP={generate(e,t,n){const r="#141414",i="transparent",s=[],a=rP(e,"Q"),l=t/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x,y:C})=>{const v=(a.length-Cr)*l*x,p=(a.length-Cr)*l*C,y=.45;for(let E=0;E<c.length;E+=1){const S=l*(Cr-E*2);s.push(ne`
            <rect
              fill=${E===2?r:i}
              width=${E===0?S-5:S}
              rx= ${E===0?(S-5)*y:S*y}
              ry= ${E===0?(S-5)*y:S*y}
              stroke=${r}
              stroke-width=${E===0?5:0}
              height=${E===0?S-5:S}
              x= ${E===0?p+l*E+5/2:p+l*E}
              y= ${E===0?v+l*E+5/2:v+l*E}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,h=a.length/2+u/2-1,m=[];a.forEach((x,C)=>{x.forEach((v,p)=>{if(a[C][p]&&!(C<Cr&&p<Cr||C>a.length-(Cr+1)&&p<Cr||C<Cr&&p>a.length-(Cr+1))&&!(C>d&&C<h&&p>d&&p<h)){const y=C*l+l/2,E=p*l+l/2;m.push([y,E])}})});const w={};return m.forEach(([x,C])=>{var v;w[x]?(v=w[x])==null||v.push(C):w[x]=[C]}),Object.entries(w).map(([x,C])=>{const v=C.filter(p=>C.every(y=>!ah(p,y,l)));return[Number(x),v]}).forEach(([x,C])=>{C.forEach(v=>{s.push(ne`<circle cx=${x} cy=${v} fill=${r} r=${l/K2} />`)})}),Object.entries(w).filter(([x,C])=>C.length>1).map(([x,C])=>{const v=C.filter(p=>C.some(y=>ah(p,y,l)));return[Number(x),v]}).map(([x,C])=>{C.sort((p,y)=>p<y?-1:1);const v=[];for(const p of C){const y=v.find(E=>E.some(S=>ah(p,S,l)));y?y.push(p):v.push([p])}return[x,v.map(p=>[p[0],p[p.length-1]])]}).forEach(([x,C])=>{C.forEach(([v,p])=>{s.push(ne`
              <line
                x1=${x}
                x2=${x}
                y1=${v}
                y2=${p}
                stroke=${r}
                stroke-width=${l/(K2/2)}
                stroke-linecap="round"
              />
            `)})}),s}},oP=ie`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var aa=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ri=class extends J{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,I`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return ne`
      <svg height=${t} width=${t}>
        ${iP.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:I`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ri.styles=[pe,oP];aa([j()],Ri.prototype,"uri",void 0);aa([j({type:Number})],Ri.prototype,"size",void 0);aa([j()],Ri.prototype,"theme",void 0);aa([j()],Ri.prototype,"imageSrc",void 0);aa([j()],Ri.prototype,"alt",void 0);Ri=aa([X("wui-qr-code")],Ri);const sP=ie`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var aP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Hp=class extends J{constructor(){super(...arguments),this.inputComponentRef=a4()}render(){return I`
      <wui-input-text
        ${l4(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Hp.styles=[pe,sP];Hp=aP([X("wui-search-bar")],Hp);const lP=ie`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Cc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let To=class extends J{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return I`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};To.styles=[pe,lP];Cc([j()],To.prototype,"backgroundColor",void 0);Cc([j()],To.prototype,"iconColor",void 0);Cc([j()],To.prototype,"icon",void 0);Cc([j()],To.prototype,"message",void 0);To=Cc([X("wui-snackbar")],To);const cP=ie`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Hi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let pr=class extends J{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return I`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],i=this.buttons[t],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};pr.styles=[pe,yt,cP];Hi([j({type:Array})],pr.prototype,"tabs",void 0);Hi([j()],pr.prototype,"onTabChange",void 0);Hi([j({type:Array})],pr.prototype,"buttons",void 0);Hi([j({type:Boolean})],pr.prototype,"disabled",void 0);Hi([ce()],pr.prototype,"activeTab",void 0);Hi([ce()],pr.prototype,"localTabWidth",void 0);Hi([ce()],pr.prototype,"isDense",void 0);pr=Hi([X("wui-tabs")],pr);const uP=ie`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var yg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kl=class extends J{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return I`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Kl.styles=[pe,yt,uP];yg([j()],Kl.prototype,"placement",void 0);yg([j()],Kl.prototype,"message",void 0);Kl=yg([X("wui-tooltip")],Kl);const dP=ie`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ff=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zs=class extends J{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,I`${this.templateVisual()}`}templateVisual(){return this.imageSrc?I`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:I`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};zs.styles=[pe,dP];Ff([j()],zs.prototype,"imageSrc",void 0);Ff([j()],zs.prototype,"alt",void 0);Ff([j({type:Boolean})],zs.prototype,"borderRadiusFull",void 0);zs=Ff([X("wui-visual-thumbnail")],zs);const fP=ie`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Fn=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let on=class extends J{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ue.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ue.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ue.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ue.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ue.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ue.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ue.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ue.getSpacingStyles(this.margin,3)};
    `,I`<slot></slot>`}};on.styles=[pe,fP];Fn([j()],on.prototype,"gridTemplateRows",void 0);Fn([j()],on.prototype,"gridTemplateColumns",void 0);Fn([j()],on.prototype,"justifyItems",void 0);Fn([j()],on.prototype,"alignItems",void 0);Fn([j()],on.prototype,"justifyContent",void 0);Fn([j()],on.prototype,"alignContent",void 0);Fn([j()],on.prototype,"columnGap",void 0);Fn([j()],on.prototype,"rowGap",void 0);Fn([j()],on.prototype,"gap",void 0);Fn([j()],on.prototype,"padding",void 0);Fn([j()],on.prototype,"margin",void 0);on=Fn([X("wui-grid")],on);const hP=ie`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var D4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _d=class extends J{constructor(){super(...arguments),this.text=""}render(){return I`${this.template()}`}template(){return this.text?I`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};_d.styles=[pe,hP];D4([j()],_d.prototype,"text",void 0);_d=D4([X("wui-separator")],_d);var O4={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(A1,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",h="quarter",m="year",w="date",x="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(V){var L=["th","st","nd","rd"],F=V%100;return"["+V+(L[(F-20)%10]||L[F]||L[0])+"]"}},y=function(V,L,F){var U=String(V);return!U||U.length>=L?V:""+Array(L+1-U.length).join(F)+V},E={s:y,z:function(V){var L=-V.utcOffset(),F=Math.abs(L),U=Math.floor(F/60),R=F%60;return(L<=0?"+":"-")+y(U,2,"0")+":"+y(R,2,"0")},m:function V(L,F){if(L.date()<F.date())return-V(F,L);var U=12*(F.year()-L.year())+(F.month()-L.month()),R=L.clone().add(U,d),z=F-R<0,q=L.clone().add(U+(z?-1:1),d);return+(-(U+(F-R)/(z?R-q:q-R))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:d,y:m,w:u,d:c,D:w,h:l,m:a,s,ms:o,Q:h}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},S="en",T={};T[S]=p;var f="$isDayjsObject",_=function(V){return V instanceof Y||!(!V||!V[f])},D=function V(L,F,U){var R;if(!L)return S;if(typeof L=="string"){var z=L.toLowerCase();T[z]&&(R=z),F&&(T[z]=F,R=z);var q=L.split("-");if(!R&&q.length>1)return V(q[0])}else{var H=L.name;T[H]=L,R=H}return!U&&R&&(S=R),R||!U&&S},O=function(V,L){if(_(V))return V.clone();var F=typeof L=="object"?L:{};return F.date=V,F.args=arguments,new Y(F)},$=E;$.l=D,$.i=_,$.w=function(V,L){return O(V,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var Y=function(){function V(F){this.$L=D(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[f]=!0}var L=V.prototype;return L.parse=function(F){this.$d=function(U){var R=U.date,z=U.utc;if(R===null)return new Date(NaN);if($.u(R))return new Date;if(R instanceof Date)return new Date(R);if(typeof R=="string"&&!/Z$/i.test(R)){var q=R.match(C);if(q){var H=q[2]-1||0,G=(q[7]||"0").substring(0,3);return z?new Date(Date.UTC(q[1],H,q[3]||1,q[4]||0,q[5]||0,q[6]||0,G)):new Date(q[1],H,q[3]||1,q[4]||0,q[5]||0,q[6]||0,G)}}return new Date(R)}(F),this.init()},L.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},L.$utils=function(){return $},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(F,U){var R=O(F);return this.startOf(U)<=R&&R<=this.endOf(U)},L.isAfter=function(F,U){return O(F)<this.startOf(U)},L.isBefore=function(F,U){return this.endOf(U)<O(F)},L.$g=function(F,U,R){return $.u(F)?this[U]:this.set(R,F)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(F,U){var R=this,z=!!$.u(U)||U,q=$.p(F),H=function(be,he){var Ee=$.w(R.$u?Date.UTC(R.$y,he,be):new Date(R.$y,he,be),R);return z?Ee:Ee.endOf(c)},G=function(be,he){return $.w(R.toDate()[be].apply(R.toDate("s"),(z?[0,0,0,0]:[23,59,59,999]).slice(he)),R)},K=this.$W,re=this.$M,ae=this.$D,ue="set"+(this.$u?"UTC":"");switch(q){case m:return z?H(1,0):H(31,11);case d:return z?H(1,re):H(0,re+1);case u:var fe=this.$locale().weekStart||0,me=(K<fe?K+7:K)-fe;return H(z?ae-me:ae+(6-me),re);case c:case w:return G(ue+"Hours",0);case l:return G(ue+"Minutes",1);case a:return G(ue+"Seconds",2);case s:return G(ue+"Milliseconds",3);default:return this.clone()}},L.endOf=function(F){return this.startOf(F,!1)},L.$set=function(F,U){var R,z=$.p(F),q="set"+(this.$u?"UTC":""),H=(R={},R[c]=q+"Date",R[w]=q+"Date",R[d]=q+"Month",R[m]=q+"FullYear",R[l]=q+"Hours",R[a]=q+"Minutes",R[s]=q+"Seconds",R[o]=q+"Milliseconds",R)[z],G=z===c?this.$D+(U-this.$W):U;if(z===d||z===m){var K=this.clone().set(w,1);K.$d[H](G),K.init(),this.$d=K.set(w,Math.min(this.$D,K.daysInMonth())).$d}else H&&this.$d[H](G);return this.init(),this},L.set=function(F,U){return this.clone().$set(F,U)},L.get=function(F){return this[$.p(F)]()},L.add=function(F,U){var R,z=this;F=Number(F);var q=$.p(U),H=function(re){var ae=O(z);return $.w(ae.date(ae.date()+Math.round(re*F)),z)};if(q===d)return this.set(d,this.$M+F);if(q===m)return this.set(m,this.$y+F);if(q===c)return H(1);if(q===u)return H(7);var G=(R={},R[a]=r,R[l]=i,R[s]=n,R)[q]||1,K=this.$d.getTime()+F*G;return $.w(K,this)},L.subtract=function(F,U){return this.add(-1*F,U)},L.format=function(F){var U=this,R=this.$locale();if(!this.isValid())return R.invalidDate||x;var z=F||"YYYY-MM-DDTHH:mm:ssZ",q=$.z(this),H=this.$H,G=this.$m,K=this.$M,re=R.weekdays,ae=R.months,ue=R.meridiem,fe=function(he,Ee,_e,Se){return he&&(he[Ee]||he(U,z))||_e[Ee].slice(0,Se)},me=function(he){return $.s(H%12||12,he,"0")},be=ue||function(he,Ee,_e){var Se=he<12?"AM":"PM";return _e?Se.toLowerCase():Se};return z.replace(v,function(he,Ee){return Ee||function(_e){switch(_e){case"YY":return String(U.$y).slice(-2);case"YYYY":return $.s(U.$y,4,"0");case"M":return K+1;case"MM":return $.s(K+1,2,"0");case"MMM":return fe(R.monthsShort,K,ae,3);case"MMMM":return fe(ae,K);case"D":return U.$D;case"DD":return $.s(U.$D,2,"0");case"d":return String(U.$W);case"dd":return fe(R.weekdaysMin,U.$W,re,2);case"ddd":return fe(R.weekdaysShort,U.$W,re,3);case"dddd":return re[U.$W];case"H":return String(H);case"HH":return $.s(H,2,"0");case"h":return me(1);case"hh":return me(2);case"a":return be(H,G,!0);case"A":return be(H,G,!1);case"m":return String(G);case"mm":return $.s(G,2,"0");case"s":return String(U.$s);case"ss":return $.s(U.$s,2,"0");case"SSS":return $.s(U.$ms,3,"0");case"Z":return q}return null}(he)||q.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(F,U,R){var z,q=this,H=$.p(U),G=O(F),K=(G.utcOffset()-this.utcOffset())*r,re=this-G,ae=function(){return $.m(q,G)};switch(H){case m:z=ae()/12;break;case d:z=ae();break;case h:z=ae()/3;break;case u:z=(re-K)/6048e5;break;case c:z=(re-K)/864e5;break;case l:z=re/i;break;case a:z=re/r;break;case s:z=re/n;break;default:z=re}return R?z:$.a(z)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return T[this.$L]},L.locale=function(F,U){if(!F)return this.$L;var R=this.clone(),z=D(F,U,!0);return z&&(R.$L=z),R},L.clone=function(){return $.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},V}(),te=Y.prototype;return O.prototype=te,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",m],["$D",w]].forEach(function(V){te[V[1]]=function(L){return this.$g(L,V[0],V[1])}}),O.extend=function(V,L){return V.$i||(V(L,Y,O),V.$i=!0),O},O.locale=D,O.isDayjs=_,O.unix=function(V){return O(1e3*V)},O.en=T[S],O.Ls=T,O.p={},O})})(O4);var pP=O4.exports;const Zl=Gs(pP);var I4={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(A1,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(I4);var mP=I4.exports;const gP=Gs(mP);var R4={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(A1,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,h){return o.fromToBase(c,u,d,h)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,h,m){for(var w,x,C,v=d.$locale().relativeTime||s,p=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],y=p.length,E=0;E<y;E+=1){var S=p[E];S.d&&(w=h?i(c).diff(d,S.d,!0):d.diff(c,S.d,!0));var T=(n.rounding||Math.round)(Math.abs(w));if(C=w>0,T<=S.r||!S.r){T<=1&&E>0&&(S=p[E-1]);var f=v[S.l];m&&(T=m(""+T)),x=typeof f=="string"?f.replace("%d",T):f(T,u,S.l,C);break}}if(u)return x;var _=C?v.future:v.past;return typeof _=="function"?_(x):_.replace("%s",x)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(R4);var wP=R4.exports;const yP=Gs(wP);Zl.extend(yP);Zl.extend(gP);Zl.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const j4={getYear(e=new Date().toISOString()){return Zl(e).year()},getRelativeDateFromNow(e){return Zl(e).fromNow(!0)}},bP=3,vP=["receive","deposit","borrow","claim"],xP=["withdraw","repay","burn"],cs={getTransactionGroupTitle(e){const t=j4.getYear();return e===t?"This Year":e},getTransactionImages(e){const[t,n]=e,r=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),i=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!r?[this.getTransactionImage(t),this.getTransactionImage(n)]:i?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:cs.getTransactionTransferTokenType(e),url:cs.getTransactionImageURL(e)}},getTransactionImageURL(e){var i,o,s,a,l;let t=null;const n=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);return e&&n?t=(s=(o=(i=e==null?void 0:e.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:e&&r&&(t=(l=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),t},getTransactionTransferTokenType(e){return e!=null&&e.fungible_info?"FUNGIBLE":e!=null&&e.nft_info?"NFT":null},getTransactionDescriptions(e){var d,h,m;const t=(d=e.metadata)==null?void 0:d.operationType,n=e.transfers,r=((h=e.transfers)==null?void 0:h.length)>0,i=((m=e.transfers)==null?void 0:m.length)>1,o=r&&(n==null?void 0:n.every(w=>!!w.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(t==="send"||t==="receive")&&o?(l=Ue.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=Ue.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[e.metadata.status];if(i)return n.map(w=>this.getTransferDescription(w));let u="";return vP.includes(t)?u="+":xP.includes(t)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(e){var n;let t="";return e&&(e!=null&&e.nft_info?t=((n=e==null?void 0:e.nft_info)==null?void 0:n.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var r;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(r=e==null?void 0:e.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(bP):null}};var qr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let mr=class extends J{constructor(){super(),this.unsubscribe=[],this.networkImages=xi.state.networkImages,this.disabled=!1,this.balance="show",this.address=Ie.state.address,this.balanceVal=Ie.state.balance,this.balanceSymbol=Ie.state.balanceSymbol,this.profileName=Ie.state.profileName,this.profileImage=Ie.state.profileImage,this.network=Ke.state.caipNetwork,this.unsubscribe.push(Ie.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ke.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return I`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Ce(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Ce(t)}
        avatarSrc=${Ce(this.profileImage)}
        balance=${n?le.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){At.open()}};qr([j({type:Boolean})],mr.prototype,"disabled",void 0);qr([j()],mr.prototype,"balance",void 0);qr([ce()],mr.prototype,"address",void 0);qr([ce()],mr.prototype,"balanceVal",void 0);qr([ce()],mr.prototype,"balanceSymbol",void 0);qr([ce()],mr.prototype,"profileName",void 0);qr([ce()],mr.prototype,"profileImage",void 0);qr([ce()],mr.prototype,"network",void 0);mr=qr([X("w3m-account-button")],mr);var Ro=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ji=class extends J{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ie.state.isConnected,this.unsubscribe.push(Ie.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?I`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Ce(this.balance)}
          >
          </w3m-account-button>
        `:I`
          <w3m-connect-button
            size=${Ce(this.size)}
            label=${Ce(this.label)}
            loadingLabel=${Ce(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Ro([j({type:Boolean})],ji.prototype,"disabled",void 0);Ro([j()],ji.prototype,"balance",void 0);Ro([j()],ji.prototype,"size",void 0);Ro([j()],ji.prototype,"label",void 0);Ro([j()],ji.prototype,"loadingLabel",void 0);Ro([ce()],ji.prototype,"isAccount",void 0);ji=Ro([X("w3m-button")],ji);var Ec=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ws=class extends J{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=At.state.open,this.unsubscribe.push(At.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return I`
      <wui-connect-button
        size=${Ce(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?At.close():At.open()}};Ec([j()],Ws.prototype,"size",void 0);Ec([j()],Ws.prototype,"label",void 0);Ec([j()],Ws.prototype,"loadingLabel",void 0);Ec([ce()],Ws.prototype,"open",void 0);Ws=Ec([X("w3m-connect-button")],Ws);const CP=ie`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var $4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Z2="scroll-lock";let Yl=class extends J{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=At.state.open,this.initializeTheming(),Ae.prefetch(),this.unsubscribe.push(At.subscribeKey("open",t=>t?this.onOpen():this.onClose())),je.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?I`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&At.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=En.state,r=Ue.getColorTheme(n);JA(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Dn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Z2,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Z2}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")At.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};Yl.styles=CP;$4([ce()],Yl.prototype,"open",void 0);Yl=$4([X("w3m-modal")],Yl);const EP=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Yl}},Symbol.toStringTag,{value:"Module"}));var Uf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Xl=class extends J{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ke.state.caipNetwork,this.connected=Ie.state.isConnected,this.unsubscribe.push(Ke.subscribeKey("caipNetwork",t=>this.network=t),Ie.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return I`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${Ce(dt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){At.open({view:"Networks"})}};Uf([j({type:Boolean})],Xl.prototype,"disabled",void 0);Uf([ce()],Xl.prototype,"network",void 0);Uf([ce()],Xl.prototype,"connected",void 0);Xl=Uf([X("w3m-network-button")],Xl);const SP=ie`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var M4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nd=class extends J{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=we.state.view,this.unsubscribe.push(we.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return I`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return I`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return I`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return I`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return I`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return I`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return I`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return I`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return I`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return I`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return I`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return I`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return I`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return I`<w3m-transactions-view></w3m-transactions-view>`;default:return I`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=we.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Nd.styles=SP;M4([ce()],Nd.prototype,"view",void 0);Nd=M4([X("w3m-router")],Nd);const AP=ie`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var qi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let gr=class extends J{constructor(){super(),this.usubscribe=[],this.networkImages=xi.state.networkImages,this.address=Ie.state.address,this.profileImage=Ie.state.profileImage,this.profileName=Ie.state.profileName,this.balance=Ie.state.balance,this.balanceSymbol=Ie.state.balanceSymbol,this.network=Ke.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ie.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):At.close()}),Ke.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return I`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Ce(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ue.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ue.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${le.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Ce(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=Ie.state;return t?I`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=Ke.state,n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(le.copyToClopboard(this.address),Dn.showSuccess("Address copied"))}catch{Dn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&we.push("Networks")}onTransactions(){je.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),we.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await De.disconnect(),je.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),At.close()}catch{je.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Dn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=Ie.state;t&&le.openHref(t,"_blank")}};gr.styles=AP;qi([ce()],gr.prototype,"address",void 0);qi([ce()],gr.prototype,"profileImage",void 0);qi([ce()],gr.prototype,"profileName",void 0);qi([ce()],gr.prototype,"balance",void 0);qi([ce()],gr.prototype,"balanceSymbol",void 0);qi([ce()],gr.prototype,"network",void 0);qi([ce()],gr.prototype,"disconecting",void 0);gr=qi([X("w3m-account-view")],gr);var B4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let qp=class extends J{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=le.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return I`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?I`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:I`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return le.isMobile()?I`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){we.push("ConnectingWalletConnect")}};B4([ce()],qp.prototype,"search",void 0);qp=B4([X("w3m-all-wallets-view")],qp);const TP=ie`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var F4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pd=class extends J{constructor(){super(),this.unsubscribe=[],this.connectors=kn.state.connectors,this.unsubscribe.push(kn.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(le.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?I`
      <wui-list-wallet
        imageSrc=${Ce(dt.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=ke.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(r=>I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=Ae.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Pn.getRecentWallets().map(n=>I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!De.checkInstalled()?null:I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${Ce(t?void 0:"installed")}
          tagVariant=${Ce(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(Ae.state.count/10)*10;return I`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=Ae.state,{customWallets:n,featuredWalletIds:r}=ke.state,{connectors:i}=kn.state,o=Pn.getRecentWallets(),s=i.filter(u=>u.type==="ANNOUNCED");if(r||n||!t.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,l).map(u=>I`
        <wui-list-wallet
          imageSrc=${Ce(dt.getWalletImage(u))}
          name=${(u==null?void 0:u.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(u)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?le.isMobile()?we.push("AllWallets"):we.push("ConnectingWalletConnect"):we.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:n}=kn.state,i=Pn.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return t.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){je.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),we.push("AllWallets")}onConnectWallet(t){we.push("ConnectingWalletConnect",{wallet:t})}};Pd.styles=TP;F4([ce()],Pd.prototype,"connectors",void 0);Pd=F4([X("w3m-connect-view")],Pd);const _P=ie`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var jo=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class ln extends J{constructor(){var t,n,r,i;super(),this.wallet=(t=we.state.data)==null?void 0:t.wallet,this.connector=(n=we.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=dt.getWalletImage(this.wallet)??dt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=De.state.wcUri,this.error=De.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(De.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),De.subscribeKey("wcError",o=>this.error=o),De.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),I`
      <wui-flex
        data-error=${Ce(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Ce(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?I`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(De.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=En.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return I`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(le.copyToClopboard(this.uri),Dn.showSuccess("Link copied"))}catch{Dn.showError("Failed to copy")}}}ln.styles=_P;jo([ce()],ln.prototype,"uri",void 0);jo([ce()],ln.prototype,"error",void 0);jo([ce()],ln.prototype,"ready",void 0);jo([ce()],ln.prototype,"showRetry",void 0);jo([ce()],ln.prototype,"buffering",void 0);jo([j({type:Boolean})],ln.prototype,"isMobile",void 0);jo([j()],ln.prototype,"onRetry",void 0);var NP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const PP={INJECTED:"browser",ANNOUNCED:"browser"};let Y2=class extends ln{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:PP[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Pn.setConnectedWalletImageUrl(this.connector.imageUrl),await De.connectExternal(this.connector),At.close(),je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Y2=NP([X("w3m-connecting-external-view")],Y2);var kP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let X2=class extends J{constructor(){var t,n;super(...arguments),this.dappUrl=(t=ke.state.metadata)==null?void 0:t.url,this.dappName=(n=ke.state.metadata)==null?void 0:n.name}render(){return I`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?I`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&le.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){we.goBack()}};X2=kP([X("w3m-connecting-siwe-view")],X2);var bg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let kd=class extends J{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=we.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),$a.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),I`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):I`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=De.state;if(t||le.isPairingExpired(n)){if(De.connectWalletConnect(),this.wallet){const r=dt.getWalletImage(this.wallet);r&&Pn.setConnectedWalletImageUrl(r)}else{const i=kn.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=dt.getConnectorImage(i);o&&Pn.setConnectedWalletImageUrl(o)}await De.state.wcPromise,this.finalizeConnection(),At.close()}}catch(n){je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),De.setWcError(!0),le.isAllowedRetry(this.lastRetry)&&(Dn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:n}=De.state;t&&Pn.setWalletConnectDeepLink(t),n&&Pn.setWeb3ModalRecent(n),je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:w})=>w).filter(Boolean),a=o?[o]:s??[],l=a.length,c=t,u=r,d=De.checkInstalled(a),h=l&&d,m=n&&!le.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(le.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),m&&this.platforms.push("desktop"),!h&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return I`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return I`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return I`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return I`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return I`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return I`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?I`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};bg([ce()],kd.prototype,"platform",void 0);bg([ce()],kd.prototype,"platforms",void 0);kd=bg([X("w3m-connecting-wc-view")],kd);var DP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let J2=class extends J{constructor(){var t;super(...arguments),this.wallet=(t=we.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return I`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?I`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?I`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?I`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?I`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&le.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&le.openHref(this.wallet.homepage,"_blank")}};J2=DP([X("w3m-downloads-view")],J2);var OP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const IP="https://walletconnect.com/explorer";let ey=class extends J{render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{le.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=Ae.state,{customWallets:r}=ke.state;return[...n,...r??[],...t].slice(0,4).map(o=>I`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Ce(dt.getWalletImage(o))}
          @click=${()=>{le.openHref(o.homepage??IP,"_blank")}}
        ></wui-list-wallet>
      `)}};ey=OP([X("w3m-get-wallet-view")],ey);const RP=ie`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Lf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Hs=class extends J{constructor(){var t;super(),this.network=(t=we.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ke.state.caipNetwork,this.unsubscribe.push(Ke.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&we.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return I`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Ce(dt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:I`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ke.switchActiveNetwork(this.network),we.goBack())}catch{this.error=!0}}};Hs.styles=RP;Lf([ce()],Hs.prototype,"showRetry",void 0);Lf([ce()],Hs.prototype,"error",void 0);Lf([ce()],Hs.prototype,"currentNetwork",void 0);Hs=Lf([X("w3m-network-switch-view")],Hs);var U4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vp=class extends J{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ke.state.caipNetwork,this.unsubscribe.push(Ke.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return I`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){je.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),we.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=Ke.state,i=t,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return I`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${Ce(dt.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=Ie.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=Ke.state;n&&(o==null?void 0:o.id)!==t.id?r!=null&&r.includes(t.id)?await Ke.switchActiveNetwork(t):i&&we.push("SwitchNetwork",{network:t}):n||(Ke.setCaipNetwork(t),we.push("Connect"))}};U4([ce()],Vp.prototype,"caipNetwork",void 0);Vp=U4([X("w3m-networks-view")],Vp);const jP=ie`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var $o=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const nu="last-transaction",$P=7;let Ur=class extends J{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=Ie.state.address,this.transactions=zn.state.transactions,this.transactionsByYear=zn.state.transactionsByYear,this.loading=zn.state.loading,this.empty=zn.state.empty,this.next=zn.state.next,this.unsubscribe.push(Ie.subscribe(t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,zn.resetTransactions(),zn.fetchTransactions(t.address))}),zn.subscribe(t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.transactions.length===0&&zn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return I`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((n,r)=>{const i=r===t.length-1,o=parseInt(n,10),s=cs.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?I`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(t,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(t),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?I`
        <wui-transaction-list-item
          date=${r}
          direction=${o}
          id=${n&&this.next?nu:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:d?c.map((m,w)=>{const x=cs.getTransferDescription(m),C=n&&w===c.length-1;return I` <wui-transaction-list-item
          date=${r}
          direction=${m.direction}
          id=${C&&this.next?nu:""}
          status=${l}
          type=${u}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[w]]}
          .descriptions=${[x]}
        ></wui-transaction-list-item>`}):I`
      <wui-transaction-list-item
        date=${r}
        direction=${o}
        id=${n&&this.next?nu:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(t,n){return t.map((r,i)=>{const o=n&&i===t.length-1;return I`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return I`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array($P).fill(I` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}createPaginationObserver(){const{projectId:t}=ke.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(zn.fetchTransactions(this.address),je.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${nu}`);t&&((i=this.paginationObserver)==null||i.observe(t))}getTransactionListItemProps(t){var l,c,u,d,h;const n=j4.getRelativeDateFromNow((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),r=cs.getTransactionDescriptions(t),i=t==null?void 0:t.transfers,o=(c=t==null?void 0:t.transfers)==null?void 0:c[0],s=!!o&&((u=t==null?void 0:t.transfers)==null?void 0:u.every(m=>!!m.nft_info)),a=cs.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(d=t.metadata)==null?void 0:d.status,transfers:i,type:(h=t.metadata)==null?void 0:h.operationType}}};Ur.styles=jP;$o([ce()],Ur.prototype,"address",void 0);$o([ce()],Ur.prototype,"transactions",void 0);$o([ce()],Ur.prototype,"transactionsByYear",void 0);$o([ce()],Ur.prototype,"loading",void 0);$o([ce()],Ur.prototype,"empty",void 0);$o([ce()],Ur.prototype,"next",void 0);Ur=$o([X("w3m-transactions-view")],Ur);var MP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const BP=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let ty=class extends J{render(){return I`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${BP}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{le.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ty=MP([X("w3m-what-is-a-network-view")],ty);var FP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const UP=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let ny=class extends J{render(){return I`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${UP}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){je.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),we.push("GetWallet")}};ny=FP([X("w3m-what-is-a-wallet-view")],ny);const LP=ie`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Sc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const ry="local-paginator";let _o=class extends J{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ae.state.wallets.length,this.wallets=Ae.state.wallets,this.recommended=Ae.state.recommended,this.featured=Ae.state.featured,this.unsubscribe.push(Ae.subscribeKey("wallets",t=>this.wallets=t),Ae.subscribeKey("recommended",t=>this.recommended=t),Ae.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return I`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await Ae.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>I`
        <wui-card-select-loader type="wallet" id=${Ce(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>I`
        <wui-card-select
          imageSrc=${Ce(dt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:i}=Ae.state,o=window.innerWidth<352?3:4,s=t.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=t.length?r.length%o:0,i===0||[...r,...t,...n].length<i?this.shimmerTemplate(l,ry):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${ry}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=Ae.state;s.length<o&&Ae.fetchWallets({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=kn.state,r=n.find(({explorerId:i})=>i===t.id);r?we.push("ConnectingExternal",{connector:r}):we.push("ConnectingWalletConnect",{wallet:t})}};_o.styles=LP;Sc([ce()],_o.prototype,"initial",void 0);Sc([ce()],_o.prototype,"wallets",void 0);Sc([ce()],_o.prototype,"recommended",void 0);Sc([ce()],_o.prototype,"featured",void 0);_o=Sc([X("w3m-all-wallets-list")],_o);const zP=ie`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var vg=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Jl=class extends J{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?I`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Ae.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=Ae.state;return t.length?I`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>I`
            <wui-card-select
              imageSrc=${Ce(dt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:I`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=kn.state,r=n.find(({explorerId:i})=>i===t.id);r?we.push("ConnectingExternal",{connector:r}):we.push("ConnectingWalletConnect",{wallet:t})}};Jl.styles=zP;vg([ce()],Jl.prototype,"loading",void 0);vg([j()],Jl.prototype,"query",void 0);Jl=vg([X("w3m-all-wallets-search")],Jl);var zf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ec=class extends J{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(De.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return I`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};zf([j({type:Array})],ec.prototype,"platforms",void 0);zf([j()],ec.prototype,"onSelectPlatfrom",void 0);zf([ce()],ec.prototype,"buffering",void 0);ec=zf([X("w3m-connecting-header")],ec);var WP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let iy=class extends ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=kn.state,n=t.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=t.find(i=>i.type==="INJECTED");n?await De.connectExternal(n):r&&await De.connectExternal(r),At.close(),je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};iy=WP([X("w3m-connecting-wc-browser")],iy);var HP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let oy=class extends ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=le.formatNativeUrl(n,this.uri);De.setWcLinking({name:r,href:o}),De.setRecentWallet(this.wallet),le.openHref(i,"_self")}catch{this.error=!0}}};oy=HP([X("w3m-connecting-wc-desktop")],oy);var qP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let sy=class extends ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=le.formatNativeUrl(n,this.uri);De.setWcLinking({name:r,href:o}),De.setRecentWallet(this.wallet),le.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const t=le.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(De.setBuffering(!0),setTimeout(()=>{De.setBuffering(!1)},5e3))}};sy=qP([X("w3m-connecting-wc-mobile")],sy);const VP=ie`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var GP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gp=class extends ln{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),I`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return De.setWcLinking(void 0),De.setRecentWallet(this.wallet),I`<wui-qr-code
      size=${t}
      theme=${En.state.themeMode}
      uri=${this.uri}
      imageSrc=${Ce(dt.getWalletImage(this.wallet))}
      alt=${Ce(n)}
    ></wui-qr-code>`}};Gp.styles=VP;Gp=GP([X("w3m-connecting-wc-qrcode")],Gp);const QP=ie`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var KP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Qp=class extends J{constructor(){var t;super(...arguments),this.dappImageUrl=(t=ke.state.metadata)==null?void 0:t.icons,this.walletImageUrl=Pn.getConnectedWalletImageUrl()}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return I`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,n){t.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Qp.styles=QP;Qp=KP([X("w3m-connecting-siwe")],Qp);var ZP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ay=class extends J{constructor(){var t;if(super(),this.wallet=(t=we.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return I`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Ce(dt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ay=ZP([X("w3m-connecting-wc-unsupported")],ay);var YP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ly=class extends ln{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=le.formatUniversalUrl(n,this.uri);De.setWcLinking({name:r,href:o}),De.setRecentWallet(this.wallet),le.openHref(i,"_blank")}catch{this.error=!0}}};ly=YP([X("w3m-connecting-wc-web")],ly);const XP=ie`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Wf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};function cy(){var i,o,s,a,l,c;const e=(o=(i=we.state.data)==null?void 0:i.connector)==null?void 0:o.name,t=(a=(s=we.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(c=(l=we.state.data)==null?void 0:l.network)==null?void 0:c.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads",Transactions:"Activity"}}let qs=class extends J{constructor(){super(),this.unsubscribe=[],this.heading=cy()[we.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(we.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),De.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return I`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${At.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){je.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),we.push("WhatIsAWallet")}titleTemplate(){return I`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=we.state,n=t==="Connect";return this.showBack?I`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${we.goBack}
      ></wui-icon-link>`:I`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?I`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=cy()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=we.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};qs.styles=[XP];Wf([ce()],qs.prototype,"heading",void 0);Wf([ce()],qs.prototype,"buffering",void 0);Wf([ce()],qs.prototype,"showBack",void 0);qs=Wf([X("w3m-header")],qs);var L4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kp=class extends J{constructor(){super(...arguments),this.data=[]}render(){return I`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>I`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>I`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};L4([j({type:Array})],Kp.prototype,"data",void 0);Kp=L4([X("w3m-help-widget")],Kp);const JP=ie`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var ek=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Zp=class extends J{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=ke.state;return!t&&!n?null:I`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=ke.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=ke.state;return t?I`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=ke.state;return t?I`<a href=${t}>Privacy Policy</a>`:null}};Zp.styles=[JP];Zp=ek([X("w3m-legal-footer")],Zp);const tk=ie`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var z4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Dd=class extends J{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=le.isMobile(),a=le.isIos(),l=le.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=Ue.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>we.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?I`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&le.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&le.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&le.openHref(this.wallet.homepage,"_blank")}};Dd.styles=[tk];z4([j({type:Object})],Dd.prototype,"wallet",void 0);Dd=z4([X("w3m-mobile-download-links")],Dd);const nk=ie`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var W4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const rk={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Od=class extends J{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Dn.state.open,this.unsubscribe.push(Dn.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=Dn.state,r=rk[n];return I`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Dn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Od.styles=nk;W4([ce()],Od.prototype,"open",void 0);Od=W4([X("w3m-snackbar")],Od);let uy=!1;class ik{constructor(t){this.initPromise=void 0,this.setIsConnected=n=>{Ie.setIsConnected(n)},this.setCaipAddress=n=>{Ie.setCaipAddress(n)},this.setBalance=(n,r)=>{Ie.setBalance(n,r)},this.setProfileName=n=>{Ie.setProfileName(n)},this.setProfileImage=n=>{Ie.setProfileImage(n)},this.resetAccount=()=>{Ie.resetAccount()},this.setCaipNetwork=n=>{Ke.setCaipNetwork(n)},this.getCaipNetwork=()=>Ke.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Ke.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Ke.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Ke.resetNetwork()},this.setConnectors=n=>{kn.setConnectors(n)},this.addConnector=n=>{kn.addConnector(n)},this.getConnectors=()=>kn.getConnectors(),this.resetWcConnection=()=>{De.resetWcConnection()},this.fetchIdentity=n=>L5.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Ie.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{ir.setNonce(n)},this.setSIWESession=n=>{ir.setSession(n)},this.setSIWEStatus=n=>{ir.setStatus(n)},this.setSIWEMessage=n=>{ir.setMessage(n)},this.getSIWENonce=()=>ir.state.nonce,this.getSIWESession=()=>ir.state.session,this.getSIWEStatus=()=>ir.state.status,this.getSIWEMessage=()=>ir.state.message,this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),At.open(t)}async close(){await this.initOrContinue(),At.close()}getThemeMode(){return En.state.themeMode}getThemeVariables(){return En.state.themeVariables}setThemeMode(t){En.setThemeMode(t),Y5(En.state.themeMode)}setThemeVariables(t){En.setThemeVariables(t),eT(En.state.themeVariables)}subscribeTheme(t){return En.subscribe(t)}getState(){return{...Ds.state}}subscribeState(t){return Ds.subscribe(t)}getEvent(){return{...je.state}}subscribeEvents(t){return je.subscribe(t)}subscribeSIWEState(t){return ir.subscribe(t)}initControllers(t){Ke.setClient(t.networkControllerClient),Ke.setDefaultCaipNetwork(t.defaultChain),ke.setProjectId(t.projectId),ke.setIncludeWalletIds(t.includeWalletIds),ke.setExcludeWalletIds(t.excludeWalletIds),ke.setFeaturedWalletIds(t.featuredWalletIds),ke.setTokens(t.tokens),ke.setTermsConditionsUrl(t.termsConditionsUrl),ke.setPrivacyPolicyUrl(t.privacyPolicyUrl),ke.setCustomWallets(t.customWallets),ke.setEnableAnalytics(t.enableAnalytics),ke.setSdkVersion(t._sdkVersion),De.setClient(t.connectionControllerClient),t.siweControllerClient&&ir.setSIWEClient(t.siweControllerClient),t.metadata&&ke.setMetadata(t.metadata),t.themeMode&&En.setThemeMode(t.themeMode),t.themeVariables&&En.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!uy&&le.isClient()&&(uy=!0,this.initPromise=new Promise(async t=>{await Promise.all([Ps(()=>import("./index-cdec73dd.js"),[]),Ps(()=>Promise.resolve().then(()=>EP),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),t()})),this.initPromise}}const ve={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.3.2"},to={ConnectorExplorerIds:{[ve.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ve.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ve.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[ve.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ve.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[ve.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ve.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ve.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ve.INJECTED_CONNECTOR_ID]:"Browser Wallet",[ve.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[ve.COINBASE_CONNECTOR_ID]:"Coinbase",[ve.LEDGER_CONNECTOR_ID]:"Ledger",[ve.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[ve.INJECTED_CONNECTOR_ID]:"INJECTED",[ve.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[ve.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},zo={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${ve.EIP155}:${n}`]=r}),t}};function ok(e){if(e)return{id:`${ve.EIP155}:${e.id}`,name:e.name,imageId:to.EIP155NetworkImageIds[e.id]}}const sk="wagmi.wallet";class ak extends ik{constructor(t){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=t;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(d=>d.id===ve.WALLET_CONNECT_CONNECTOR_ID))throw new Error("web3modal:constructor - WalletConnectConnector is required");const c={switchCaipNetwork:async d=>{const h=zo.caipNetworkIdToNumber(d==null?void 0:d.id);h&&await j5({chainId:h})},async getApprovedCaipNetworksData(){var h,m,w,x;const d=localStorage.getItem(sk);if(d!=null&&d.includes(ve.WALLET_CONNECT_CONNECTOR_ID)){const C=n.connectors.find(S=>S.id===ve.WALLET_CONNECT_CONNECTOR_ID);if(!C)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const p=(m=(h=(await C.getProvider()).signer)==null?void 0:h.session)==null?void 0:m.namespaces,y=(w=p==null?void 0:p[ve.EIP155])==null?void 0:w.methods,E=(x=p==null?void 0:p[ve.EIP155])==null?void 0:x.chains;return{supportsAllNetworks:y==null?void 0:y.includes(ve.ADD_CHAIN_METHOD),approvedCaipNetworkIds:E}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async d=>{var w;const h=n.connectors.find(x=>x.id===ve.WALLET_CONNECT_CONNECTOR_ID);if(!h)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");h.on("message",x=>{x.type==="display_uri"&&(d(x.data),h.removeAllListeners())});const m=zo.caipNetworkIdToNumber((w=this.getCaipNetwork())==null?void 0:w.id);await N2({connector:h,chainId:m})},connectExternal:async({id:d,provider:h,info:m})=>{var C,v;const w=n.connectors.find(p=>p.id===d);if(!w)throw new Error("connectionControllerClient:connectExternal - connector is undefined");h&&m&&w.id===ve.EIP6963_CONNECTOR_ID&&((C=w.setEip6963Wallet)==null||C.call(w,{provider:h,info:m}));const x=zo.caipNetworkIdToNumber((v=this.getCaipNetwork())==null?void 0:v.id);await N2({connector:w,chainId:x})},checkInstalled:d=>{const h=this.getConnectors().filter(w=>w.type==="ANNOUNCED"),m=this.getConnectors().find(w=>w.type==="INJECTED");return d?h.length&&d.some(x=>h.some(C=>{var v;return((v=C.info)==null?void 0:v.rdns)===x}))?!0:m&&window!=null&&window.ethereum?d.some(w=>{var x;return!!((x=window.ethereum)!=null&&x[String(w)])}):!1:!!window.ethereum},disconnect:iA};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:ok(o),tokens:zo.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${ve.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(i),this.syncConnectors(n),this.listenConnectors(n),$5(()=>this.syncAccount()),M5(()=>this.syncNetwork())}getState(){const t=super.getState();return{...t,selectedNetworkId:zo.caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(n=>t({...n,selectedNetworkId:zo.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(t){const n=t==null?void 0:t.map(r=>{var i,o;return{id:`${ve.EIP155}:${r.id}`,name:r.name,imageId:to.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:t,isConnected:n}=dd(),{chain:r}=Bl();if(this.resetAccount(),n&&t&&r){const i=`${ve.EIP155}:${r.id}:${t}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:t,isConnected:n}=dd(),{chain:r}=Bl();if(r){const l=String(r.id),c=`${ve.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:to.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&t){const u=`${ve.EIP155}:${r.id}:${t}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${ve.EIP155}:${Su.id}`,address:t});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await hA({address:t,chainId:Su.id});if(n){this.setProfileName(n);const r=await fA({name:n,chainId:Su.id});r&&this.setProfileImage(r)}}}async syncBalance(t,n){var i,o,s;const r=await dA({address:t,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const n=[];t.connectors.forEach(({id:r,name:i})=>{var o,s;r!==ve.EIP6963_CONNECTOR_ID&&n.push({id:r,explorerId:to.ConnectorExplorerIds[r],imageId:to.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:to.ConnectorNamesMap[r]??i,type:to.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}eip6963EventHandler(t,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:ve.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[ve.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),t.isAuthorized({info:o,provider:s}))}}listenConnectors(t){const n=t.connectors.find(r=>r.id===ve.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(ve.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(ve.EIP6963_REQUEST_EVENT))}}}var ru=globalThis&&globalThis.__classPrivateFieldSet||function(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n},iu=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)},_u,Xr;const lh="connectedRdns";class lk extends Xm{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",_u.set(this,void 0),Xr.set(this,void 0),ru(this,_u,this.options.getProvider(),"f")}async connect(t){var r;const n=await super.connect(t);return iu(this,Xr,"f")&&((r=this.storage)==null||r.setItem(lh,iu(this,Xr,"f").info.rdns)),n}async disconnect(){var t;await super.disconnect(),(t=this.storage)==null||t.removeItem(lh),ru(this,Xr,void 0,"f")}async isAuthorized(t){var r;const n=(r=this.storage)==null?void 0:r.getItem(lh);if(n){if(!t||n!==t.info.rdns)return!0;ru(this,Xr,t,"f")}return super.isAuthorized()}async getProvider(){var t;return Promise.resolve(((t=iu(this,Xr,"f"))==null?void 0:t.provider)??iu(this,_u,"f"))}setEip6963Wallet(t){ru(this,Xr,t,"f")}}_u=new WeakMap,Xr=new WeakMap;var H4={},Hf={};Hf.byteLength=dk;Hf.toByteArray=hk;Hf.fromByteArray=gk;var cr=[],Sn=[],ck=typeof Uint8Array<"u"?Uint8Array:Array,ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Wo=0,uk=ch.length;Wo<uk;++Wo)cr[Wo]=ch[Wo],Sn[ch.charCodeAt(Wo)]=Wo;Sn["-".charCodeAt(0)]=62;Sn["_".charCodeAt(0)]=63;function q4(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function dk(e){var t=q4(e),n=t[0],r=t[1];return(n+r)*3/4-r}function fk(e,t,n){return(t+n)*3/4-n}function hk(e){var t,n=q4(e),r=n[0],i=n[1],o=new ck(fk(e,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)t=Sn[e.charCodeAt(l)]<<18|Sn[e.charCodeAt(l+1)]<<12|Sn[e.charCodeAt(l+2)]<<6|Sn[e.charCodeAt(l+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=t&255;return i===2&&(t=Sn[e.charCodeAt(l)]<<2|Sn[e.charCodeAt(l+1)]>>4,o[s++]=t&255),i===1&&(t=Sn[e.charCodeAt(l)]<<10|Sn[e.charCodeAt(l+1)]<<4|Sn[e.charCodeAt(l+2)]>>2,o[s++]=t>>8&255,o[s++]=t&255),o}function pk(e){return cr[e>>18&63]+cr[e>>12&63]+cr[e>>6&63]+cr[e&63]}function mk(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),i.push(pk(r));return i.join("")}function gk(e){for(var t,n=e.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(mk(e,s,s+o>a?a:s+o));return r===1?(t=e[n-1],i.push(cr[t>>2]+cr[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(cr[t>>10]+cr[t>>4&63]+cr[t<<2&63]+"=")),i.join("")}var xg={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */xg.read=function(e,t,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,h=n?-1:1,m=e[t+d];for(d+=h,o=m&(1<<-u)-1,m>>=-u,u+=a;u>0;o=o*256+e[t+d],d+=h,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+e[t+d],d+=h,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(m?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(m?-1:1)*s*Math.pow(2,o-r)};xg.write=function(e,t,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=r?0:o-1,w=r?1:-1,x=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(t*l-1)*Math.pow(2,i),s=s+d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[n+m]=a&255,m+=w,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+m]=s&255,m+=w,s/=256,c-=8);e[n+m-w]|=x*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Hf,n=xg,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=p,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const N=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(N,g),N.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(N){if(N>i)throw new RangeError('The value "'+N+'" is invalid for option "size"');const g=new Uint8Array(N);return Object.setPrototypeOf(g,a.prototype),g}function a(N,g,b){if(typeof N=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(N)}return l(N,g,b)}a.poolSize=8192;function l(N,g,b){if(typeof N=="string")return h(N,g);if(ArrayBuffer.isView(N))return w(N);if(N==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof N);if(Me(N,ArrayBuffer)||N&&Me(N.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Me(N,SharedArrayBuffer)||N&&Me(N.buffer,SharedArrayBuffer)))return x(N,g,b);if(typeof N=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const P=N.valueOf&&N.valueOf();if(P!=null&&P!==N)return a.from(P,g,b);const k=C(N);if(k)return k;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof N[Symbol.toPrimitive]=="function")return a.from(N[Symbol.toPrimitive]("string"),g,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof N)}a.from=function(N,g,b){return l(N,g,b)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(N){if(typeof N!="number")throw new TypeError('"size" argument must be of type number');if(N<0)throw new RangeError('The value "'+N+'" is invalid for option "size"')}function u(N,g,b){return c(N),N<=0?s(N):g!==void 0?typeof b=="string"?s(N).fill(g,b):s(N).fill(g):s(N)}a.alloc=function(N,g,b){return u(N,g,b)};function d(N){return c(N),s(N<0?0:v(N)|0)}a.allocUnsafe=function(N){return d(N)},a.allocUnsafeSlow=function(N){return d(N)};function h(N,g){if((typeof g!="string"||g==="")&&(g="utf8"),!a.isEncoding(g))throw new TypeError("Unknown encoding: "+g);const b=y(N,g)|0;let P=s(b);const k=P.write(N,g);return k!==b&&(P=P.slice(0,k)),P}function m(N){const g=N.length<0?0:v(N.length)|0,b=s(g);for(let P=0;P<g;P+=1)b[P]=N[P]&255;return b}function w(N){if(Me(N,Uint8Array)){const g=new Uint8Array(N);return x(g.buffer,g.byteOffset,g.byteLength)}return m(N)}function x(N,g,b){if(g<0||N.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(N.byteLength<g+(b||0))throw new RangeError('"length" is outside of buffer bounds');let P;return g===void 0&&b===void 0?P=new Uint8Array(N):b===void 0?P=new Uint8Array(N,g):P=new Uint8Array(N,g,b),Object.setPrototypeOf(P,a.prototype),P}function C(N){if(a.isBuffer(N)){const g=v(N.length)|0,b=s(g);return b.length===0||N.copy(b,0,0,g),b}if(N.length!==void 0)return typeof N.length!="number"||lt(N.length)?s(0):m(N);if(N.type==="Buffer"&&Array.isArray(N.data))return m(N.data)}function v(N){if(N>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return N|0}function p(N){return+N!=N&&(N=0),a.alloc(+N)}a.isBuffer=function(g){return g!=null&&g._isBuffer===!0&&g!==a.prototype},a.compare=function(g,b){if(Me(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),Me(b,Uint8Array)&&(b=a.from(b,b.offset,b.byteLength)),!a.isBuffer(g)||!a.isBuffer(b))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(g===b)return 0;let P=g.length,k=b.length;for(let M=0,B=Math.min(P,k);M<B;++M)if(g[M]!==b[M]){P=g[M],k=b[M];break}return P<k?-1:k<P?1:0},a.isEncoding=function(g){switch(String(g).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(g,b){if(!Array.isArray(g))throw new TypeError('"list" argument must be an Array of Buffers');if(g.length===0)return a.alloc(0);let P;if(b===void 0)for(b=0,P=0;P<g.length;++P)b+=g[P].length;const k=a.allocUnsafe(b);let M=0;for(P=0;P<g.length;++P){let B=g[P];if(Me(B,Uint8Array))M+B.length>k.length?(a.isBuffer(B)||(B=a.from(B)),B.copy(k,M)):Uint8Array.prototype.set.call(k,B,M);else if(a.isBuffer(B))B.copy(k,M);else throw new TypeError('"list" argument must be an Array of Buffers');M+=B.length}return k};function y(N,g){if(a.isBuffer(N))return N.length;if(ArrayBuffer.isView(N)||Me(N,ArrayBuffer))return N.byteLength;if(typeof N!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof N);const b=N.length,P=arguments.length>2&&arguments[2]===!0;if(!P&&b===0)return 0;let k=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return Qr(N).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b*2;case"hex":return b>>>1;case"base64":return pt(N).length;default:if(k)return P?-1:Qr(N).length;g=(""+g).toLowerCase(),k=!0}}a.byteLength=y;function E(N,g,b){let P=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0,g>>>=0,b<=g))return"";for(N||(N="utf8");;)switch(N){case"hex":return z(this,g,b);case"utf8":case"utf-8":return V(this,g,b);case"ascii":return U(this,g,b);case"latin1":case"binary":return R(this,g,b);case"base64":return te(this,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,g,b);default:if(P)throw new TypeError("Unknown encoding: "+N);N=(N+"").toLowerCase(),P=!0}}a.prototype._isBuffer=!0;function S(N,g,b){const P=N[g];N[g]=N[b],N[b]=P}a.prototype.swap16=function(){const g=this.length;if(g%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let b=0;b<g;b+=2)S(this,b,b+1);return this},a.prototype.swap32=function(){const g=this.length;if(g%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let b=0;b<g;b+=4)S(this,b,b+3),S(this,b+1,b+2);return this},a.prototype.swap64=function(){const g=this.length;if(g%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let b=0;b<g;b+=8)S(this,b,b+7),S(this,b+1,b+6),S(this,b+2,b+5),S(this,b+3,b+4);return this},a.prototype.toString=function(){const g=this.length;return g===0?"":arguments.length===0?V(this,0,g):E.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(g){if(!a.isBuffer(g))throw new TypeError("Argument must be a Buffer");return this===g?!0:a.compare(this,g)===0},a.prototype.inspect=function(){let g="";const b=e.INSPECT_MAX_BYTES;return g=this.toString("hex",0,b).replace(/(.{2})/g,"$1 ").trim(),this.length>b&&(g+=" ... "),"<Buffer "+g+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(g,b,P,k,M){if(Me(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),!a.isBuffer(g))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof g);if(b===void 0&&(b=0),P===void 0&&(P=g?g.length:0),k===void 0&&(k=0),M===void 0&&(M=this.length),b<0||P>g.length||k<0||M>this.length)throw new RangeError("out of range index");if(k>=M&&b>=P)return 0;if(k>=M)return-1;if(b>=P)return 1;if(b>>>=0,P>>>=0,k>>>=0,M>>>=0,this===g)return 0;let B=M-k,se=P-b;const xe=Math.min(B,se),Qe=this.slice(k,M),tt=g.slice(b,P);for(let Be=0;Be<xe;++Be)if(Qe[Be]!==tt[Be]){B=Qe[Be],se=tt[Be];break}return B<se?-1:se<B?1:0};function T(N,g,b,P,k){if(N.length===0)return-1;if(typeof b=="string"?(P=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b=+b,lt(b)&&(b=k?0:N.length-1),b<0&&(b=N.length+b),b>=N.length){if(k)return-1;b=N.length-1}else if(b<0)if(k)b=0;else return-1;if(typeof g=="string"&&(g=a.from(g,P)),a.isBuffer(g))return g.length===0?-1:f(N,g,b,P,k);if(typeof g=="number")return g=g&255,typeof Uint8Array.prototype.indexOf=="function"?k?Uint8Array.prototype.indexOf.call(N,g,b):Uint8Array.prototype.lastIndexOf.call(N,g,b):f(N,[g],b,P,k);throw new TypeError("val must be string, number or Buffer")}function f(N,g,b,P,k){let M=1,B=N.length,se=g.length;if(P!==void 0&&(P=String(P).toLowerCase(),P==="ucs2"||P==="ucs-2"||P==="utf16le"||P==="utf-16le")){if(N.length<2||g.length<2)return-1;M=2,B/=2,se/=2,b/=2}function xe(tt,Be){return M===1?tt[Be]:tt.readUInt16BE(Be*M)}let Qe;if(k){let tt=-1;for(Qe=b;Qe<B;Qe++)if(xe(N,Qe)===xe(g,tt===-1?0:Qe-tt)){if(tt===-1&&(tt=Qe),Qe-tt+1===se)return tt*M}else tt!==-1&&(Qe-=Qe-tt),tt=-1}else for(b+se>B&&(b=B-se),Qe=b;Qe>=0;Qe--){let tt=!0;for(let Be=0;Be<se;Be++)if(xe(N,Qe+Be)!==xe(g,Be)){tt=!1;break}if(tt)return Qe}return-1}a.prototype.includes=function(g,b,P){return this.indexOf(g,b,P)!==-1},a.prototype.indexOf=function(g,b,P){return T(this,g,b,P,!0)},a.prototype.lastIndexOf=function(g,b,P){return T(this,g,b,P,!1)};function _(N,g,b,P){b=Number(b)||0;const k=N.length-b;P?(P=Number(P),P>k&&(P=k)):P=k;const M=g.length;P>M/2&&(P=M/2);let B;for(B=0;B<P;++B){const se=parseInt(g.substr(B*2,2),16);if(lt(se))return B;N[b+B]=se}return B}function D(N,g,b,P){return it(Qr(g,N.length-b),N,b,P)}function O(N,g,b,P){return it(fa(g),N,b,P)}function $(N,g,b,P){return it(pt(g),N,b,P)}function Y(N,g,b,P){return it(Dc(g,N.length-b),N,b,P)}a.prototype.write=function(g,b,P,k){if(b===void 0)k="utf8",P=this.length,b=0;else if(P===void 0&&typeof b=="string")k=b,P=this.length,b=0;else if(isFinite(b))b=b>>>0,isFinite(P)?(P=P>>>0,k===void 0&&(k="utf8")):(k=P,P=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const M=this.length-b;if((P===void 0||P>M)&&(P=M),g.length>0&&(P<0||b<0)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");k||(k="utf8");let B=!1;for(;;)switch(k){case"hex":return _(this,g,b,P);case"utf8":case"utf-8":return D(this,g,b,P);case"ascii":case"latin1":case"binary":return O(this,g,b,P);case"base64":return $(this,g,b,P);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,g,b,P);default:if(B)throw new TypeError("Unknown encoding: "+k);k=(""+k).toLowerCase(),B=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function te(N,g,b){return g===0&&b===N.length?t.fromByteArray(N):t.fromByteArray(N.slice(g,b))}function V(N,g,b){b=Math.min(N.length,b);const P=[];let k=g;for(;k<b;){const M=N[k];let B=null,se=M>239?4:M>223?3:M>191?2:1;if(k+se<=b){let xe,Qe,tt,Be;switch(se){case 1:M<128&&(B=M);break;case 2:xe=N[k+1],(xe&192)===128&&(Be=(M&31)<<6|xe&63,Be>127&&(B=Be));break;case 3:xe=N[k+1],Qe=N[k+2],(xe&192)===128&&(Qe&192)===128&&(Be=(M&15)<<12|(xe&63)<<6|Qe&63,Be>2047&&(Be<55296||Be>57343)&&(B=Be));break;case 4:xe=N[k+1],Qe=N[k+2],tt=N[k+3],(xe&192)===128&&(Qe&192)===128&&(tt&192)===128&&(Be=(M&15)<<18|(xe&63)<<12|(Qe&63)<<6|tt&63,Be>65535&&Be<1114112&&(B=Be))}}B===null?(B=65533,se=1):B>65535&&(B-=65536,P.push(B>>>10&1023|55296),B=56320|B&1023),P.push(B),k+=se}return F(P)}const L=4096;function F(N){const g=N.length;if(g<=L)return String.fromCharCode.apply(String,N);let b="",P=0;for(;P<g;)b+=String.fromCharCode.apply(String,N.slice(P,P+=L));return b}function U(N,g,b){let P="";b=Math.min(N.length,b);for(let k=g;k<b;++k)P+=String.fromCharCode(N[k]&127);return P}function R(N,g,b){let P="";b=Math.min(N.length,b);for(let k=g;k<b;++k)P+=String.fromCharCode(N[k]);return P}function z(N,g,b){const P=N.length;(!g||g<0)&&(g=0),(!b||b<0||b>P)&&(b=P);let k="";for(let M=g;M<b;++M)k+=bt[N[M]];return k}function q(N,g,b){const P=N.slice(g,b);let k="";for(let M=0;M<P.length-1;M+=2)k+=String.fromCharCode(P[M]+P[M+1]*256);return k}a.prototype.slice=function(g,b){const P=this.length;g=~~g,b=b===void 0?P:~~b,g<0?(g+=P,g<0&&(g=0)):g>P&&(g=P),b<0?(b+=P,b<0&&(b=0)):b>P&&(b=P),b<g&&(b=g);const k=this.subarray(g,b);return Object.setPrototypeOf(k,a.prototype),k};function H(N,g,b){if(N%1!==0||N<0)throw new RangeError("offset is not uint");if(N+g>b)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(g,b,P){g=g>>>0,b=b>>>0,P||H(g,b,this.length);let k=this[g],M=1,B=0;for(;++B<b&&(M*=256);)k+=this[g+B]*M;return k},a.prototype.readUintBE=a.prototype.readUIntBE=function(g,b,P){g=g>>>0,b=b>>>0,P||H(g,b,this.length);let k=this[g+--b],M=1;for(;b>0&&(M*=256);)k+=this[g+--b]*M;return k},a.prototype.readUint8=a.prototype.readUInt8=function(g,b){return g=g>>>0,b||H(g,1,this.length),this[g]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(g,b){return g=g>>>0,b||H(g,2,this.length),this[g]|this[g+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(g,b){return g=g>>>0,b||H(g,2,this.length),this[g]<<8|this[g+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(g,b){return g=g>>>0,b||H(g,4,this.length),(this[g]|this[g+1]<<8|this[g+2]<<16)+this[g+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(g,b){return g=g>>>0,b||H(g,4,this.length),this[g]*16777216+(this[g+1]<<16|this[g+2]<<8|this[g+3])},a.prototype.readBigUInt64LE=He(function(g){g=g>>>0,Se(g,"offset");const b=this[g],P=this[g+7];(b===void 0||P===void 0)&&cn(g,this.length-8);const k=b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24,M=this[++g]+this[++g]*2**8+this[++g]*2**16+P*2**24;return BigInt(k)+(BigInt(M)<<BigInt(32))}),a.prototype.readBigUInt64BE=He(function(g){g=g>>>0,Se(g,"offset");const b=this[g],P=this[g+7];(b===void 0||P===void 0)&&cn(g,this.length-8);const k=b*2**24+this[++g]*2**16+this[++g]*2**8+this[++g],M=this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+P;return(BigInt(k)<<BigInt(32))+BigInt(M)}),a.prototype.readIntLE=function(g,b,P){g=g>>>0,b=b>>>0,P||H(g,b,this.length);let k=this[g],M=1,B=0;for(;++B<b&&(M*=256);)k+=this[g+B]*M;return M*=128,k>=M&&(k-=Math.pow(2,8*b)),k},a.prototype.readIntBE=function(g,b,P){g=g>>>0,b=b>>>0,P||H(g,b,this.length);let k=b,M=1,B=this[g+--k];for(;k>0&&(M*=256);)B+=this[g+--k]*M;return M*=128,B>=M&&(B-=Math.pow(2,8*b)),B},a.prototype.readInt8=function(g,b){return g=g>>>0,b||H(g,1,this.length),this[g]&128?(255-this[g]+1)*-1:this[g]},a.prototype.readInt16LE=function(g,b){g=g>>>0,b||H(g,2,this.length);const P=this[g]|this[g+1]<<8;return P&32768?P|4294901760:P},a.prototype.readInt16BE=function(g,b){g=g>>>0,b||H(g,2,this.length);const P=this[g+1]|this[g]<<8;return P&32768?P|4294901760:P},a.prototype.readInt32LE=function(g,b){return g=g>>>0,b||H(g,4,this.length),this[g]|this[g+1]<<8|this[g+2]<<16|this[g+3]<<24},a.prototype.readInt32BE=function(g,b){return g=g>>>0,b||H(g,4,this.length),this[g]<<24|this[g+1]<<16|this[g+2]<<8|this[g+3]},a.prototype.readBigInt64LE=He(function(g){g=g>>>0,Se(g,"offset");const b=this[g],P=this[g+7];(b===void 0||P===void 0)&&cn(g,this.length-8);const k=this[g+4]+this[g+5]*2**8+this[g+6]*2**16+(P<<24);return(BigInt(k)<<BigInt(32))+BigInt(b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24)}),a.prototype.readBigInt64BE=He(function(g){g=g>>>0,Se(g,"offset");const b=this[g],P=this[g+7];(b===void 0||P===void 0)&&cn(g,this.length-8);const k=(b<<24)+this[++g]*2**16+this[++g]*2**8+this[++g];return(BigInt(k)<<BigInt(32))+BigInt(this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+P)}),a.prototype.readFloatLE=function(g,b){return g=g>>>0,b||H(g,4,this.length),n.read(this,g,!0,23,4)},a.prototype.readFloatBE=function(g,b){return g=g>>>0,b||H(g,4,this.length),n.read(this,g,!1,23,4)},a.prototype.readDoubleLE=function(g,b){return g=g>>>0,b||H(g,8,this.length),n.read(this,g,!0,52,8)},a.prototype.readDoubleBE=function(g,b){return g=g>>>0,b||H(g,8,this.length),n.read(this,g,!1,52,8)};function G(N,g,b,P,k,M){if(!a.isBuffer(N))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>k||g<M)throw new RangeError('"value" argument is out of bounds');if(b+P>N.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(g,b,P,k){if(g=+g,b=b>>>0,P=P>>>0,!k){const se=Math.pow(2,8*P)-1;G(this,g,b,P,se,0)}let M=1,B=0;for(this[b]=g&255;++B<P&&(M*=256);)this[b+B]=g/M&255;return b+P},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(g,b,P,k){if(g=+g,b=b>>>0,P=P>>>0,!k){const se=Math.pow(2,8*P)-1;G(this,g,b,P,se,0)}let M=P-1,B=1;for(this[b+M]=g&255;--M>=0&&(B*=256);)this[b+M]=g/B&255;return b+P},a.prototype.writeUint8=a.prototype.writeUInt8=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,1,255,0),this[b]=g&255,b+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,2,65535,0),this[b]=g&255,this[b+1]=g>>>8,b+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,2,65535,0),this[b]=g>>>8,this[b+1]=g&255,b+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,4,4294967295,0),this[b+3]=g>>>24,this[b+2]=g>>>16,this[b+1]=g>>>8,this[b]=g&255,b+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,4,4294967295,0),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4};function K(N,g,b,P,k){_e(g,P,k,N,b,7);let M=Number(g&BigInt(4294967295));N[b++]=M,M=M>>8,N[b++]=M,M=M>>8,N[b++]=M,M=M>>8,N[b++]=M;let B=Number(g>>BigInt(32)&BigInt(4294967295));return N[b++]=B,B=B>>8,N[b++]=B,B=B>>8,N[b++]=B,B=B>>8,N[b++]=B,b}function re(N,g,b,P,k){_e(g,P,k,N,b,7);let M=Number(g&BigInt(4294967295));N[b+7]=M,M=M>>8,N[b+6]=M,M=M>>8,N[b+5]=M,M=M>>8,N[b+4]=M;let B=Number(g>>BigInt(32)&BigInt(4294967295));return N[b+3]=B,B=B>>8,N[b+2]=B,B=B>>8,N[b+1]=B,B=B>>8,N[b]=B,b+8}a.prototype.writeBigUInt64LE=He(function(g,b=0){return K(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=He(function(g,b=0){return re(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(g,b,P,k){if(g=+g,b=b>>>0,!k){const xe=Math.pow(2,8*P-1);G(this,g,b,P,xe-1,-xe)}let M=0,B=1,se=0;for(this[b]=g&255;++M<P&&(B*=256);)g<0&&se===0&&this[b+M-1]!==0&&(se=1),this[b+M]=(g/B>>0)-se&255;return b+P},a.prototype.writeIntBE=function(g,b,P,k){if(g=+g,b=b>>>0,!k){const xe=Math.pow(2,8*P-1);G(this,g,b,P,xe-1,-xe)}let M=P-1,B=1,se=0;for(this[b+M]=g&255;--M>=0&&(B*=256);)g<0&&se===0&&this[b+M+1]!==0&&(se=1),this[b+M]=(g/B>>0)-se&255;return b+P},a.prototype.writeInt8=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,1,127,-128),g<0&&(g=255+g+1),this[b]=g&255,b+1},a.prototype.writeInt16LE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,2,32767,-32768),this[b]=g&255,this[b+1]=g>>>8,b+2},a.prototype.writeInt16BE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,2,32767,-32768),this[b]=g>>>8,this[b+1]=g&255,b+2},a.prototype.writeInt32LE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,4,2147483647,-2147483648),this[b]=g&255,this[b+1]=g>>>8,this[b+2]=g>>>16,this[b+3]=g>>>24,b+4},a.prototype.writeInt32BE=function(g,b,P){return g=+g,b=b>>>0,P||G(this,g,b,4,2147483647,-2147483648),g<0&&(g=4294967295+g+1),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4},a.prototype.writeBigInt64LE=He(function(g,b=0){return K(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=He(function(g,b=0){return re(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ae(N,g,b,P,k,M){if(b+P>N.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function ue(N,g,b,P,k){return g=+g,b=b>>>0,k||ae(N,g,b,4),n.write(N,g,b,P,23,4),b+4}a.prototype.writeFloatLE=function(g,b,P){return ue(this,g,b,!0,P)},a.prototype.writeFloatBE=function(g,b,P){return ue(this,g,b,!1,P)};function fe(N,g,b,P,k){return g=+g,b=b>>>0,k||ae(N,g,b,8),n.write(N,g,b,P,52,8),b+8}a.prototype.writeDoubleLE=function(g,b,P){return fe(this,g,b,!0,P)},a.prototype.writeDoubleBE=function(g,b,P){return fe(this,g,b,!1,P)},a.prototype.copy=function(g,b,P,k){if(!a.isBuffer(g))throw new TypeError("argument should be a Buffer");if(P||(P=0),!k&&k!==0&&(k=this.length),b>=g.length&&(b=g.length),b||(b=0),k>0&&k<P&&(k=P),k===P||g.length===0||this.length===0)return 0;if(b<0)throw new RangeError("targetStart out of bounds");if(P<0||P>=this.length)throw new RangeError("Index out of range");if(k<0)throw new RangeError("sourceEnd out of bounds");k>this.length&&(k=this.length),g.length-b<k-P&&(k=g.length-b+P);const M=k-P;return this===g&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(b,P,k):Uint8Array.prototype.set.call(g,this.subarray(P,k),b),M},a.prototype.fill=function(g,b,P,k){if(typeof g=="string"){if(typeof b=="string"?(k=b,b=0,P=this.length):typeof P=="string"&&(k=P,P=this.length),k!==void 0&&typeof k!="string")throw new TypeError("encoding must be a string");if(typeof k=="string"&&!a.isEncoding(k))throw new TypeError("Unknown encoding: "+k);if(g.length===1){const B=g.charCodeAt(0);(k==="utf8"&&B<128||k==="latin1")&&(g=B)}}else typeof g=="number"?g=g&255:typeof g=="boolean"&&(g=Number(g));if(b<0||this.length<b||this.length<P)throw new RangeError("Out of range index");if(P<=b)return this;b=b>>>0,P=P===void 0?this.length:P>>>0,g||(g=0);let M;if(typeof g=="number")for(M=b;M<P;++M)this[M]=g;else{const B=a.isBuffer(g)?g:a.from(g,k),se=B.length;if(se===0)throw new TypeError('The value "'+g+'" is invalid for argument "value"');for(M=0;M<P-b;++M)this[M+b]=B[M%se]}return this};const me={};function be(N,g,b){me[N]=class extends b{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${N}]`,this.stack,delete this.name}get code(){return N}set code(k){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:k,writable:!0})}toString(){return`${this.name} [${N}]: ${this.message}`}}}be("ERR_BUFFER_OUT_OF_BOUNDS",function(N){return N?`${N} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),be("ERR_INVALID_ARG_TYPE",function(N,g){return`The "${N}" argument must be of type number. Received type ${typeof g}`},TypeError),be("ERR_OUT_OF_RANGE",function(N,g,b){let P=`The value of "${N}" is out of range.`,k=b;return Number.isInteger(b)&&Math.abs(b)>2**32?k=he(String(b)):typeof b=="bigint"&&(k=String(b),(b>BigInt(2)**BigInt(32)||b<-(BigInt(2)**BigInt(32)))&&(k=he(k)),k+="n"),P+=` It must be ${g}. Received ${k}`,P},RangeError);function he(N){let g="",b=N.length;const P=N[0]==="-"?1:0;for(;b>=P+4;b-=3)g=`_${N.slice(b-3,b)}${g}`;return`${N.slice(0,b)}${g}`}function Ee(N,g,b){Se(g,"offset"),(N[g]===void 0||N[g+b]===void 0)&&cn(g,N.length-(b+1))}function _e(N,g,b,P,k,M){if(N>b||N<g){const B=typeof g=="bigint"?"n":"";let se;throw M>3?g===0||g===BigInt(0)?se=`>= 0${B} and < 2${B} ** ${(M+1)*8}${B}`:se=`>= -(2${B} ** ${(M+1)*8-1}${B}) and < 2 ** ${(M+1)*8-1}${B}`:se=`>= ${g}${B} and <= ${b}${B}`,new me.ERR_OUT_OF_RANGE("value",se,N)}Ee(P,k,M)}function Se(N,g){if(typeof N!="number")throw new me.ERR_INVALID_ARG_TYPE(g,"number",N)}function cn(N,g,b){throw Math.floor(N)!==N?(Se(N,b),new me.ERR_OUT_OF_RANGE(b||"offset","an integer",N)):g<0?new me.ERR_BUFFER_OUT_OF_BOUNDS:new me.ERR_OUT_OF_RANGE(b||"offset",`>= ${b?1:0} and <= ${g}`,N)}const Gr=/[^+/0-9A-Za-z-_]/g;function Qi(N){if(N=N.split("=")[0],N=N.trim().replace(Gr,""),N.length<2)return"";for(;N.length%4!==0;)N=N+"=";return N}function Qr(N,g){g=g||1/0;let b;const P=N.length;let k=null;const M=[];for(let B=0;B<P;++B){if(b=N.charCodeAt(B),b>55295&&b<57344){if(!k){if(b>56319){(g-=3)>-1&&M.push(239,191,189);continue}else if(B+1===P){(g-=3)>-1&&M.push(239,191,189);continue}k=b;continue}if(b<56320){(g-=3)>-1&&M.push(239,191,189),k=b;continue}b=(k-55296<<10|b-56320)+65536}else k&&(g-=3)>-1&&M.push(239,191,189);if(k=null,b<128){if((g-=1)<0)break;M.push(b)}else if(b<2048){if((g-=2)<0)break;M.push(b>>6|192,b&63|128)}else if(b<65536){if((g-=3)<0)break;M.push(b>>12|224,b>>6&63|128,b&63|128)}else if(b<1114112){if((g-=4)<0)break;M.push(b>>18|240,b>>12&63|128,b>>6&63|128,b&63|128)}else throw new Error("Invalid code point")}return M}function fa(N){const g=[];for(let b=0;b<N.length;++b)g.push(N.charCodeAt(b)&255);return g}function Dc(N,g){let b,P,k;const M=[];for(let B=0;B<N.length&&!((g-=2)<0);++B)b=N.charCodeAt(B),P=b>>8,k=b%256,M.push(k),M.push(P);return M}function pt(N){return t.toByteArray(Qi(N))}function it(N,g,b,P){let k;for(k=0;k<P&&!(k+b>=g.length||k>=N.length);++k)g[k+b]=N[k];return k}function Me(N,g){return N instanceof g||N!=null&&N.constructor!=null&&N.constructor.name!=null&&N.constructor.name===g.name}function lt(N){return N!==N}const bt=function(){const N="0123456789abcdef",g=new Array(256);for(let b=0;b<16;++b){const P=b*16;for(let k=0;k<16;++k)g[P+k]=N[b]+N[k]}return g}();function He(N){return typeof BigInt>"u"?vt:N}function vt(){throw new Error("BigInt not supported")}})(H4);var mb;typeof window<"u"&&(window.Buffer||(window.Buffer=H4.Buffer),window.global||(window.global=window),window.process||(window.process={}),(mb=window.process)!=null&&mb.env||(window.process={env:{}}));function wk({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(e){const s=a=>{try{e.setItem(t,r(a));return}catch(l){return l}};return{persistClient:yk(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=e.getItem(t);if(a)return i(a)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:dy,restoreClient:()=>{},removeClient:dy}}function yk(e,t=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{e(...r),n=null},t))}}function dy(){}class la{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const n={listener:t};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const tc=typeof window>"u"||"Deno"in window;function An(){}function bk(e,t){return typeof e=="function"?e(t):e}function Yp(e){return typeof e=="number"&&e>=0&&e!==1/0}function V4(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ou(e,t,n){return Ac(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function G4(e,t,n){return Ac(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function ti(e,t,n){return Ac(e)?[{...t,queryKey:e},n]:[e||{},t]}function fy(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(Ac(s)){if(r){if(t.queryHash!==Cg(s,t.options))return!1}else if(!Id(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function hy(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Ac(o)){if(!t.options.mutationKey)return!1;if(n){if(so(t.options.mutationKey)!==so(o))return!1}else if(!Id(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Cg(e,t){return((t==null?void 0:t.queryKeyHashFn)||so)(e)}function so(e){return JSON.stringify(e,(t,n)=>Xp(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Id(e,t){return Q4(e,t)}function Q4(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Q4(e[n],t[n])):!1}function qf(e,t){if(e===t)return e;const n=py(e)&&py(t);if(n||Xp(e)&&Xp(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=qf(e[c],t[c]),s[c]===e[c]&&a++}return r===o&&a===r?e:s}return t}function Rd(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function py(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Xp(e){if(!my(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!my(n)||!n.hasOwnProperty("isPrototypeOf"))}function my(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ac(e){return Array.isArray(e)}function K4(e){return new Promise(t=>{setTimeout(t,e)})}function gy(e){K4(0).then(e)}function vk(){if(typeof AbortController=="function")return new AbortController}function Jp(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?qf(e,t):t}class xk extends la{constructor(){super(),this.setup=t=>{if(!tc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const jd=new xk,wy=["online","offline"];class Ck extends la{constructor(){super(),this.setup=t=>{if(!tc&&window.addEventListener){const n=()=>t();return wy.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{wy.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const $d=new Ck;function Ek(e){return Math.min(1e3*2**e,3e4)}function Vf(e){return(e??"online")==="online"?$d.isOnline():!0}class Z4{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Nu(e){return e instanceof Z4}function Y4(e){let t=!1,n=0,r=!1,i,o,s;const a=new Promise((C,v)=>{o=C,s=v}),l=C=>{r||(m(new Z4(C)),e.abort==null||e.abort())},c=()=>{t=!0},u=()=>{t=!1},d=()=>!jd.isFocused()||e.networkMode!=="always"&&!$d.isOnline(),h=C=>{r||(r=!0,e.onSuccess==null||e.onSuccess(C),i==null||i(),o(C))},m=C=>{r||(r=!0,e.onError==null||e.onError(C),i==null||i(),s(C))},w=()=>new Promise(C=>{i=v=>{const p=r||!d();return p&&C(v),p},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),x=()=>{if(r)return;let C;try{C=e.fn()}catch(v){C=Promise.reject(v)}Promise.resolve(C).then(h).catch(v=>{var p,y;if(r)return;const E=(p=e.retry)!=null?p:3,S=(y=e.retryDelay)!=null?y:Ek,T=typeof S=="function"?S(n,v):S,f=E===!0||typeof E=="number"&&n<E||typeof E=="function"&&E(n,v);if(t||!f){m(v);return}n++,e.onFail==null||e.onFail(n,v),K4(T).then(()=>{if(d())return w()}).then(()=>{t?m(v):x()})})};return Vf(e.networkMode)?x():w().then(x),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const Eg=console;function Sk(){let e=[],t=0,n=u=>{u()},r=u=>{u()};const i=u=>{let d;t++;try{d=u()}finally{t--,t||a()}return d},o=u=>{t?e.push(u):gy(()=>{n(u)})},s=u=>(...d)=>{o(()=>{u(...d)})},a=()=>{const u=e;e=[],u.length&&gy(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const rt=Sk();class X4{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Yp(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(tc?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class Ak extends X4{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Eg,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||Tk(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=Jp(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(An).catch(An):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!V4(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const m=this.observers.find(w=>w.options.queryFn);m&&this.setOptions(m.options)}Array.isArray(this.options.queryKey);const s=vk(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=u.fetchOptions)==null?void 0:d.meta})}const h=m=>{if(Nu(m)&&m.silent||this.dispatch({type:"error",error:m}),!Nu(m)){var w,x,C,v;(w=(x=this.cache.config).onError)==null||w.call(x,m,this),(C=(v=this.cache.config).onSettled)==null||C.call(v,this.state.data,m,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Y4({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:m=>{var w,x,C,v;if(typeof m>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(m),(w=(x=this.cache.config).onSuccess)==null||w.call(x,m,this),(C=(v=this.cache.config).onSettled)==null||C.call(v,m,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(m,w)=>{this.dispatch({type:"failed",failureCount:m,error:w})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:Vf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Nu(s)&&s.revert&&this.revertState?{...this.revertState}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),rt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function Tk(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class _k extends la{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:Cg(o,n);let a=this.get(s);return a||(a=new Ak({cache:this,logger:t.getLogger(),queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){rt.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=ti(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>fy(r,i))}findAll(t,n){const[r]=ti(t,n);return Object.keys(r).length>0?this.queries.filter(i=>fy(r,i)):this.queries}notify(t){rt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}onFocus(){rt.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){rt.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class Nk extends X4{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Eg,this.observers=[],this.state=t.state||J4(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var f;return this.retryer=Y4({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(_,D)=>{this.dispatch({type:"failed",failureCount:_,error:D})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(f=this.options.retry)!=null?f:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var d,h,m,w;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(h=this.mutationCache.config).onMutate)==null?void 0:d.call(h,this.state.variables,this));const _=await((m=(w=this.options).onMutate)==null?void 0:m.call(w,this.state.variables));_!==this.state.context&&this.dispatch({type:"loading",context:_,variables:this.state.variables})}const f=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,f,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,f,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,f,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(f){try{var x,C,v,p,y,E,S,T;throw await((x=(C=this.mutationCache.config).onError)==null?void 0:x.call(C,f,this.state.variables,this.state.context,this)),await((v=(p=this.options).onError)==null?void 0:v.call(p,f,this.state.variables,this.state.context)),await((y=(E=this.mutationCache.config).onSettled)==null?void 0:y.call(E,void 0,f,this.state.variables,this.state.context,this)),await((S=(T=this.options).onSettled)==null?void 0:S.call(T,void 0,f,this.state.variables,this.state.context)),f}finally{this.dispatch({type:"error",error:f})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Vf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),rt.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function J4(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class Pk extends la{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new Nk({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){rt.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>hy(t,n))}findAll(t){return this.mutations.filter(n=>hy(t,n))}notify(t){rt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return rt.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(An)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function kk(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,s;const a=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",h=((o=e.state.data)==null?void 0:o.pages)||[],m=((s=e.state.data)==null?void 0:s.pageParams)||[];let w=m,x=!1;const C=T=>{Object.defineProperty(T,"signal",{enumerable:!0,get:()=>{var f;if((f=e.signal)!=null&&f.aborted)x=!0;else{var _;(_=e.signal)==null||_.addEventListener("abort",()=>{x=!0})}return e.signal}})},v=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),p=(T,f,_,D)=>(w=D?[f,...w]:[...w,f],D?[_,...T]:[...T,_]),y=(T,f,_,D)=>{if(x)return Promise.reject("Cancelled");if(typeof _>"u"&&!f&&T.length)return Promise.resolve(T);const O={queryKey:e.queryKey,pageParam:_,meta:e.options.meta};C(O);const $=v(O);return Promise.resolve($).then(te=>p(T,_,te,D))};let E;if(!h.length)E=y([]);else if(u){const T=typeof c<"u",f=T?c:yy(e.options,h);E=y(h,T,f)}else if(d){const T=typeof c<"u",f=T?c:Dk(e.options,h);E=y(h,T,f,!0)}else{w=[];const T=typeof e.options.getNextPageParam>"u";E=(a&&h[0]?a(h[0],0,h):!0)?y([],T,m[0]):Promise.resolve(p([],m[0],h[0]));for(let _=1;_<h.length;_++)E=E.then(D=>{if(a&&h[_]?a(h[_],_,h):!0){const $=T?m[_]:yy(e.options,D);return y(D,T,$)}return Promise.resolve(p(D,m[_],h[_]))})}return E.then(T=>({pages:T,pageParams:w}))}}}}function yy(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function Dk(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class Ok{constructor(t={}){this.queryCache=t.queryCache||new _k,this.mutationCache=t.mutationCache||new Pk,this.logger=t.logger||Eg,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=jd.subscribe(()=>{jd.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=$d.subscribe(()=>{$d.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=ti(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=ou(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,s=bk(n,o);if(typeof s>"u")return;const a=ou(t),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(t,n,r){return rt.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=ti(t,n),i=this.queryCache;rt.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=ti(t,n,r),s=this.queryCache,a={type:"active",...i};return rt.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(t,n,r){const[i,o={}]=ti(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=rt.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(An).catch(An)}invalidateQueries(t,n,r){const[i,o]=ti(t,n,r);return rt.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(t,n,r){const[i,o]=ti(t,n,r),s=rt.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(An);return o!=null&&o.throwOnError||(a=a.catch(An)),a}fetchQuery(t,n,r){const i=ou(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(An).catch(An)}fetchInfiniteQuery(t,n,r){const i=ou(t,n,r);return i.behavior=kk(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(An).catch(An)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>so(t)===so(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>Id(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>so(t)===so(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>Id(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Cg(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class Ik extends la{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),by(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return e1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return e1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),Rd(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&vy(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const s=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||s!==this.currentRefetchInterval)&&this.updateRefetchInterval(s)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t),r=this.createResult(n,t);return jk(this,r,t)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(An)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),tc||this.currentResult.isStale||!Yp(this.options.staleTime))return;const n=V4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(tc||this.options.enabled===!1||!Yp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||jd.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,s=this.currentResultState,a=this.currentResultOptions,l=t!==r,c=l?t.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:h,error:m,errorUpdatedAt:w,fetchStatus:x,status:C}=d,v=!1,p=!1,y;if(n._optimisticResults){const _=this.hasListeners(),D=!_&&by(t,n),O=_&&vy(t,r,n,i);(D||O)&&(x=Vf(t.options.networkMode)?"fetching":"paused",h||(C="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!d.dataUpdatedAt&&u!=null&&u.isSuccess&&C!=="error")y=u.data,h=u.dataUpdatedAt,C=u.status,v=!0;else if(n.select&&typeof d.data<"u")if(o&&d.data===(s==null?void 0:s.data)&&n.select===this.selectFn)y=this.selectResult;else try{this.selectFn=n.select,y=n.select(d.data),y=Jp(o==null?void 0:o.data,y,n),this.selectResult=y,this.selectError=null}catch(_){this.selectError=_}else y=d.data;if(typeof n.placeholderData<"u"&&typeof y>"u"&&C==="loading"){let _;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))_=o.data;else if(_=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof _<"u")try{_=n.select(_),this.selectError=null}catch(D){this.selectError=D}typeof _<"u"&&(C="success",y=Jp(o==null?void 0:o.data,_,n),p=!0)}this.selectError&&(m=this.selectError,y=this.selectResult,w=Date.now(),C="error");const E=x==="fetching",S=C==="loading",T=C==="error";return{status:C,fetchStatus:x,isLoading:S,isSuccess:C==="success",isError:T,isInitialLoading:S&&E,data:y,dataUpdatedAt:h,error:m,errorUpdatedAt:w,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>c.dataUpdateCount||d.errorUpdateCount>c.errorUpdateCount,isFetching:E,isRefetching:E&&!S,isLoadingError:T&&d.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:p,isPreviousData:v,isRefetchError:T&&d.dataUpdatedAt!==0,isStale:Sg(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Rd(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,a=typeof s=="function"?s():s;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const u=c;return this.currentResult[u]!==n[u]&&l.has(u)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Nu(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){rt.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var s,a,l,c;(s=(a=this.options).onError)==null||s.call(a,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Rk(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function by(e,t){return Rk(e,t)||e.state.dataUpdatedAt>0&&e1(e,t,t.refetchOnMount)}function e1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Sg(e,t)}return!1}function vy(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Sg(e,n)}function Sg(e,t){return e.isStaleByTime(t.staleTime)}function jk(e,t,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?t.isPlaceholderData:!Rd(e.getCurrentResult(),t)}let $k=class extends la{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),Rd(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:J4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){rt.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var s,a,l,c;(s=(a=this.mutateOptions).onError)==null||s.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)})})}};function Mk(e){return{mutationKey:e.options.mutationKey,state:e.state}}function Bk(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}function Fk(e){return e.state.isPaused}function Uk(e){return e.state.status==="success"}function Lk(e,t={}){const n=[],r=[];if(t.dehydrateMutations!==!1){const i=t.shouldDehydrateMutation||Fk;e.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(Mk(o))})}if(t.dehydrateQueries!==!1){const i=t.shouldDehydrateQuery||Uk;e.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(Bk(o))})}return{mutations:n,queries:r}}function zk(e,t,n){if(typeof t!="object"||t===null)return;const r=e.getMutationCache(),i=e.getQueryCache(),o=t.mutations||[],s=t.queries||[];o.forEach(a=>{var l;r.build(e,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(a=>{var l;const c=i.get(a.queryHash),u={...a.state,fetchStatus:"idle"};if(c){c.state.dataUpdatedAt<u.dataUpdatedAt&&c.setState(u);return}i.build(e,{...n==null||(l=n.defaultOptions)==null?void 0:l.queries,queryKey:a.queryKey,queryHash:a.queryHash},u)})}const Wk=eg.useSyncExternalStore,xy=W.createContext(void 0),e6=W.createContext(!1);function t6(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=xy),window.ReactQueryClientContext):xy)}const Ag=({context:e}={})=>{const t=W.useContext(t6(e,W.useContext(e6)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Hk=({client:e,children:t,context:n,contextSharing:r=!1})=>{W.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=t6(n,r);return W.createElement(e6.Provider,{value:!n&&r},W.createElement(i.Provider,{value:e},t))},n6=W.createContext(!1),qk=()=>W.useContext(n6);n6.Provider;function Vk(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const Gk=W.createContext(Vk()),Qk=()=>W.useContext(Gk);function Kk(e,t){return typeof e=="function"?e(...t):!!e}function Zk(e,t,n){const r=G4(e,t,n),i=Ag({context:r.context}),[o]=W.useState(()=>new $k(i,r));W.useEffect(()=>{o.setOptions(r)},[o,r]);const s=Wk(W.useCallback(l=>o.subscribe(rt.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),a=W.useCallback((l,c)=>{o.mutate(l,c).catch(Yk)},[o]);if(s.error&&Kk(o.options.useErrorBoundary,[s.error]))throw s.error;return{...s,mutate:a,mutateAsync:s.mutate}}function Yk(){}const Xk=["added","removed","updated"];function Cy(e){return Xk.includes(e)}async function Jk({queryClient:e,persister:t,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await t.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?t.removeClient():zk(e,o.clientState,i)}else t.removeClient()}catch{t.removeClient()}}async function Ey({queryClient:e,persister:t,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:Lk(e,r)};await t.persistClient(i)}function eD(e){const t=e.queryClient.getQueryCache().subscribe(r=>{Cy(r.type)&&Ey(e)}),n=e.queryClient.getMutationCache().subscribe(r=>{Cy(r.type)&&Ey(e)});return()=>{t(),n()}}function tD(e){let t=!1,n;const r=()=>{t=!0,n==null||n()},i=Jk(e).then(()=>{t||(n=eD(e))});return[r,i]}var r6={exports:{}},i6={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf=W,nD=eg;function rD(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var iD=typeof Object.is=="function"?Object.is:rD,oD=nD.useSyncExternalStore,sD=Gf.useRef,aD=Gf.useEffect,lD=Gf.useMemo,cD=Gf.useDebugValue;i6.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=sD(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=lD(function(){function l(m){if(!c){if(c=!0,u=m,m=r(m),i!==void 0&&s.hasValue){var w=s.value;if(i(w,m))return d=w}return d=m}if(w=d,iD(u,m))return w;var x=r(m);return i!==void 0&&i(w,x)?w:(u=m,d=x)}var c=!1,u,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=oD(e,o[0],o[1]);return aD(function(){s.hasValue=!0,s.value=a},[a]),cD(a),a};r6.exports=i6;var Tg=r6.exports;function uD({queryClient:e=new Ok({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=k5({storage:typeof window<"u"&&window.localStorage?window.localStorage:P5}),persister:n=typeof window<"u"?wk({key:"cache",storage:t,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=rA({...r,storage:t});return n&&tD({queryClient:e,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:e})}var o6=W.createContext(void 0),Qf=W.createContext(void 0);function dD({children:e,config:t}){return W.createElement(o6.Provider,{children:W.createElement(Hk,{children:e,client:t.queryClient,context:Qf}),value:t})}function _g(){const e=W.useContext(o6);if(!e)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));return e}var fD=eg.useSyncExternalStore;function hD(e){return Array.isArray(e)}function pD(e){if(!Sy(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Sy(n)||!n.hasOwnProperty("isPrototypeOf"))}function Sy(e){return Object.prototype.toString.call(e)==="[object Object]"}function mD(e,t,n){return hD(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function gD(e){return JSON.stringify(e,(t,n)=>pD(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):typeof n=="bigint"?n.toString():n)}function wD(e,t){return typeof e=="function"?e(...t):!!e}function yD(e,t){const n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(r),e[r])})}),n}function bD(e,t){const n=Ag({context:e.context}),r=qk(),i=Qk(),o=n.defaultQueryOptions({...e,queryKeyHashFn:gD});o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=rt.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=rt.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=rt.batchCalls(o.onSettled)),o.suspense&&typeof o.staleTime!="number"&&(o.staleTime=1e3),(o.suspense||o.useErrorBoundary)&&(i.isReset()||(o.retryOnMount=!1));const[s]=W.useState(()=>new t(n,o)),a=s.getOptimisticResult(o);if(fD(W.useCallback(d=>r?()=>{}:s.subscribe(rt.batchCalls(d)),[s,r]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),W.useEffect(()=>{i.clearReset()},[i]),W.useEffect(()=>{s.setOptions(o,{listeners:!1})},[o,s]),o.suspense&&a.isLoading&&a.isFetching&&!r)throw s.fetchOptimistic(o).then(({data:d})=>{var h,m;(h=o.onSuccess)==null||h.call(o,d),(m=o.onSettled)==null||m.call(o,d,null)}).catch(d=>{var h,m;i.clearReset(),(h=o.onError)==null||h.call(o,d),(m=o.onSettled)==null||m.call(o,void 0,d)});if(a.isError&&!i.isReset()&&!a.isFetching&&wD(o.useErrorBoundary,[a.error,s.getCurrentQuery()]))throw a.error;const l=a.status==="loading"&&a.fetchStatus==="idle"?"idle":a.status,c=l==="idle",u=l==="loading"&&a.fetchStatus==="fetching";return{...a,defaultedOptions:o,isIdle:c,isLoading:u,observer:s,status:l}}function s6(e,t,n){const r=G4(e,t,n);return Zk({context:Qf,...r})}function Kf(e,t,n){const r=mD(e,t,n),i=bD({context:Qf,...r},Ik),o={data:i.data,error:i.error,fetchStatus:i.fetchStatus,isError:i.isError,isFetched:i.isFetched,isFetchedAfterMount:i.isFetchedAfterMount,isFetching:i.isFetching,isIdle:i.isIdle,isLoading:i.isLoading,isRefetching:i.isRefetching,isSuccess:i.isSuccess,refetch:i.refetch,status:i.status,internal:{dataUpdatedAt:i.dataUpdatedAt,errorUpdatedAt:i.errorUpdatedAt,failureCount:i.failureCount,isFetchedAfterMount:i.isFetchedAfterMount,isLoadingError:i.isLoadingError,isPaused:i.isPaused,isPlaceholderData:i.isPlaceholderData,isPreviousData:i.isPreviousData,isRefetchError:i.isRefetchError,isStale:i.isStale,remove:i.remove}};return i.defaultedOptions.notifyOnChangeProps?o:yD(o,i.observer)}var a6=()=>Ag({context:Qf});function l6({chainId:e}={}){return Tg.useSyncExternalStoreWithSelector(t=>aA({chainId:e},t),()=>jn({chainId:e}),()=>jn({chainId:e}),t=>t,(t,n)=>t.uid===n.uid)}function vD({chainId:e}={}){return Tg.useSyncExternalStoreWithSelector(t=>lA({chainId:e},t),()=>Ip({chainId:e}),()=>Ip({chainId:e}),t=>t,(t,n)=>(t==null?void 0:t.uid)===(n==null?void 0:n.uid))}function Zf({chainId:e}={}){return l6({chainId:e}).chain.id}function xD(){const[,e]=W.useReducer(t=>t+1,0);return e}function Ay({chainId:e,scopeKey:t}){return[{entity:"blockNumber",chainId:e,scopeKey:t}]}function CD({queryKey:[{chainId:e}]}){return pA({chainId:e})}function Ng({cacheTime:e=0,chainId:t,enabled:n=!0,scopeKey:r,staleTime:i,suspense:o,watch:s=!1,onBlock:a,onError:l,onSettled:c,onSuccess:u}={}){const d=Zf({chainId:t}),h=l6({chainId:d}),m=vD({chainId:d}),w=a6();return W.useEffect(()=>!n||!s&&!a?void 0:(m??h).watchBlockNumber({onBlockNumber:v=>{s&&w.setQueryData(Ay({chainId:d,scopeKey:r}),v),a&&a(v)},emitOnBegin:!0}),[d,r,a,h,w,s,m,n]),Kf(Ay({scopeKey:r,chainId:d}),CD,{cacheTime:e,enabled:n,staleTime:i,suspense:o,onError:l,onSettled:c,onSuccess:u})}function c6({chainId:e,enabled:t,queryKey:n}){const r=a6(),i=W.useCallback(()=>r.invalidateQueries({queryKey:n},{cancelRefetch:!1}),[r,n]);Ng({chainId:e,enabled:t,onBlock:t?i:void 0,scopeKey:t?void 0:"idle"})}var uh=e=>typeof e=="object"&&!Array.isArray(e);function u6(e,t,n=t,r=Ml){const i=W.useRef([]),o=Tg.useSyncExternalStoreWithSelector(e,t,n,s=>s,(s,a)=>{if(uh(s)&&uh(a)&&i.current.length){for(const l of i.current)if(!r(s[l],a[l]))return!1;return!0}return r(s,a)});if(uh(o)){const s={...o};return Object.defineProperties(s,Object.entries(s).reduce((a,[l,c])=>({...a,[l]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(l)||i.current.push(l),c)}}),{})),s}return o}function Vr({onConnect:e,onDisconnect:t}={}){const n=_g(),r=W.useCallback(a=>$5(a),[n]),i=u6(r,dd),o=W.useRef(),s=o.current;return W.useEffect(()=>{(s==null?void 0:s.status)!=="connected"&&i.status==="connected"&&(e==null||e({address:i.address,connector:i.connector,isReconnected:(s==null?void 0:s.status)==="reconnecting"||(s==null?void 0:s.status)===void 0})),(s==null?void 0:s.status)==="connected"&&i.status==="disconnected"&&(t==null||t()),o.current=i},[e,t,s,i]),i}function ED(){const e=_g(),t=W.useCallback(n=>M5(n),[e]);return u6(t,Bl)}var SD=e=>[{entity:"switchNetwork",...e}],AD=e=>{const{chainId:t}=e;if(!t)throw new Error("chainId is required");return j5({chainId:t})};function TD({chainId:e,throwForSwitchChainNotSupported:t,onError:n,onMutate:r,onSettled:i,onSuccess:o}={}){var _;const s=_g(),a=xD(),{data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:m,mutate:w,mutateAsync:x,reset:C,status:v,variables:p}=s6(SD({chainId:e}),AD,{onError:n,onMutate:r,onSettled:i,onSuccess:o}),y=W.useCallback(D=>w({chainId:D??e}),[e,w]),E=W.useCallback(D=>x({chainId:D??e}),[e,x]);W.useEffect(()=>s.subscribe(({chains:O,connector:$})=>({chains:O,connector:$}),a),[s,a]);let S,T;const f=!!((_=s.connector)!=null&&_.switchChain);return(t||f)&&(S=y,T=E),{chains:s.chains??[],data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:m,pendingChainId:p==null?void 0:p.chainId,reset:C,status:v,switchNetwork:S,switchNetworkAsync:T,variables:p}}function _D({account:e,address:t,args:n,blockNumber:r,blockTag:i,chainId:o,functionName:s,scopeKey:a}){return[{entity:"readContract",account:e,address:t,args:n,blockNumber:r,blockTag:i,chainId:o,functionName:s,scopeKey:a}]}function ND({abi:e}){return async({queryKey:[{account:t,address:n,args:r,blockNumber:i,blockTag:o,chainId:s,functionName:a}]})=>{if(!e)throw new Error("abi is required");if(!n)throw new Error("address is required");return await I5({account:t,address:n,args:r,blockNumber:i,blockTag:o,chainId:s,abi:e,functionName:a})??null}}function d6({abi:e,address:t,account:n,args:r,blockNumber:i,blockTag:o,cacheOnBlock:s=!1,cacheTime:a,chainId:l,enabled:c=!0,functionName:u,isDataEqual:d,keepPreviousData:h,onError:m,onSettled:w,onSuccess:x,scopeKey:C,select:v,staleTime:p,structuralSharing:y=(T,f)=>Ml(T,f)?T:qf(T,f),suspense:E,watch:S}={}){const T=Zf({chainId:l}),{data:f}=Ng({chainId:T,enabled:S||s,scopeKey:S||s?void 0:"idle",watch:S}),_=i??f,D=W.useMemo(()=>_D({account:n,address:t,args:r,blockNumber:s?_:void 0,blockTag:o,chainId:T,functionName:u,scopeKey:C}),[n,t,r,_,o,s,T,u,C]),O=W.useMemo(()=>{let $=!!(c&&e&&t&&u);return s&&($=!!($&&_)),$},[e,t,_,s,c,u]);return c6({chainId:T,enabled:!!(O&&S&&!s),queryKey:D}),Kf(D,ND({abi:e}),{cacheTime:a,enabled:O,isDataEqual:d,keepPreviousData:h,select:v,staleTime:p,structuralSharing:y,suspense:E,onError:m,onSettled:w,onSuccess:x})}function PD({allowFailure:e,blockNumber:t,blockTag:n,chainId:r,contracts:i,scopeKey:o}){return[{entity:"readContracts",allowFailure:e,blockNumber:t,blockTag:n,chainId:r,scopeKey:o,contracts:(i??[]).map(({address:s,args:a,chainId:l,functionName:c})=>({address:s,args:a,chainId:l,functionName:c}))}]}function kD({abis:e}){return({queryKey:[{allowFailure:t,blockNumber:n,blockTag:r,contracts:i}]})=>{const o=i.map((s,a)=>({...s,abi:e[a]}));return R5({allowFailure:t,contracts:o,blockNumber:n,blockTag:r})}}function dh({allowFailure:e,blockNumber:t,blockTag:n,cacheOnBlock:r=!1,cacheTime:i,contracts:o,enabled:s=!0,isDataEqual:a,keepPreviousData:l,onError:c,onSettled:u,onSuccess:d,scopeKey:h,select:m,staleTime:w,structuralSharing:x=(p,y)=>Ml(p,y)?p:qf(p,y),suspense:C,watch:v}={}){const p=e??!0,{data:y}=Ng({enabled:v||r,watch:v}),E=Zf(),S=t??y,T=W.useMemo(()=>PD({allowFailure:p,blockNumber:r?S:void 0,blockTag:n,chainId:E,contracts:o,scopeKey:h}),[p,S,n,r,E,h,o]),f=W.useMemo(()=>{let D=!!(s&&(o!=null&&o.every(O=>O.abi&&O.address&&O.functionName)));return r&&(D=!!(D&&S)),D},[S,r,o,s]);c6({enabled:!!(f&&v&&!r),queryKey:T});const _=(o??[]).map(({abi:D})=>D);return Kf(T,kD({abis:_}),{cacheTime:i,enabled:f,isDataEqual:a,keepPreviousData:l,staleTime:w,select:m,structuralSharing:x,suspense:C,onError:c,onSettled:u,onSuccess:d})}function DD({address:e,abi:t,functionName:n,...r}){const{args:i,accessList:o,account:s,dataSuffix:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,request:m,value:w}=r;return[{entity:"writeContract",address:e,args:i,abi:t,accessList:o,account:s,dataSuffix:a,functionName:n,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,request:m,value:w}]}function OD(e){if(e.mode==="prepared"){if(!e.request)throw new Error("request is required");return P2({mode:"prepared",request:e.request})}if(!e.address)throw new Error("address is required");if(!e.abi)throw new Error("abi is required");if(!e.functionName)throw new Error("functionName is required");return P2({address:e.address,args:e.args,chainId:e.chainId,abi:e.abi,functionName:e.functionName,accessList:e.accessList,account:e.account,dataSuffix:e.dataSuffix,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,value:e.value})}function Ho(e){const{address:t,abi:n,args:r,chainId:i,functionName:o,mode:s,request:a,dataSuffix:l}=e,{accessList:c,account:u,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,value:C}=JS(e),{data:v,error:p,isError:y,isIdle:E,isLoading:S,isSuccess:T,mutate:f,mutateAsync:_,reset:D,status:O,variables:$}=s6(DD({address:t,abi:n,functionName:o,chainId:i,mode:s,args:r,accessList:c,account:u,dataSuffix:l,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,request:a,value:C}),OD,{onError:e.onError,onMutate:e.onMutate,onSettled:e.onSettled,onSuccess:e.onSuccess}),Y=W.useMemo(()=>e.mode==="prepared"?a?()=>f({mode:"prepared",request:e.request,chainId:e.chainId}):void 0:V=>f({address:t,args:r,abi:n,functionName:o,chainId:i,accessList:c,account:u,dataSuffix:l,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,value:C,...V}),[c,u,n,t,r,i,e.chainId,e.mode,e.request,l,o,d,h,m,w,f,x,a,C]),te=W.useMemo(()=>e.mode==="prepared"?a?()=>_({mode:"prepared",request:e.request}):void 0:V=>_({address:t,args:r,abi:n,chainId:i,functionName:o,accessList:c,account:u,dataSuffix:l,gas:d,gasPrice:h,maxFeePerGas:m,maxPriorityFeePerGas:w,nonce:x,value:C,...V}),[c,u,n,t,r,i,e.mode,e.request,l,o,d,h,m,w,_,x,a,C]);return{data:v,error:p,isError:y,isIdle:E,isLoading:S,isSuccess:T,reset:D,status:O,variables:$,write:Y,writeAsync:te}}function ID({confirmations:e,chainId:t,hash:n,scopeKey:r,timeout:i}){return[{entity:"waitForTransaction",confirmations:e,chainId:t,hash:n,scopeKey:r,timeout:i}]}function RD({onReplaced:e}){return({queryKey:[{chainId:t,confirmations:n,hash:r,timeout:i}]})=>{if(!r)throw new Error("hash is required");return mA({chainId:t,confirmations:n,hash:r,onReplaced:e,timeout:i})}}function jD({chainId:e,confirmations:t,hash:n,timeout:r,cacheTime:i,enabled:o=!0,scopeKey:s,staleTime:a,suspense:l,onError:c,onReplaced:u,onSettled:d,onSuccess:h}={}){const m=Zf({chainId:e});return Kf(ID({chainId:m,confirmations:t,hash:n,scopeKey:s,timeout:r}),RD({onReplaced:u}),{cacheTime:i,enabled:!!(o&&n),staleTime:a,suspense:l,onError:c,onSettled:d,onSuccess:h})}var Ma,Qo,$D=class extends Ym{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Qt(this,Ma,void 0),Qt(this,Qo,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Kn(n[0])})},this.onChainChanged=n=>{const r=ud(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await t.enable(),r=Kn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(t){throw/(user closed modal|accounts received is empty)/i.test(t.message)?new Yt(t):t}}async disconnect(){if(!$e(this,Qo))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const t=await(await this.getProvider()).request({method:"eth_accounts"});return Kn(t[0])}async getChainId(){const e=await this.getProvider();return ud(e.chainId)}async getProvider(){var e;if(!$e(this,Qo)){let t=(await Ps(()=>import("./index-43305c6f.js").then(s=>s.i),["assets/index-43305c6f.js","assets/events-9ac67f71.js"])).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),jl(this,Ma,new t(this.options));const n=(e=$e(this,Ma).walletExtension)==null?void 0:e.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);jl(this,Qo,$e(this,Ma).makeWeb3Provider(o,i))}return $e(this,Qo)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Km({account:n,chain:r,transport:Hm(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r;const t=await this.getProvider(),n=ge(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===e);if(!o)throw new T5({chainId:e,connectorId:this.id});if(i.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Yt(s)}throw new $r(i)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}};Ma=new WeakMap;Qo=new WeakMap;var Pg={},Yf={},ye={},f6={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,h=l&65535;return u*h+(c*h+u*d<<16>>>0)|0}e.mul=Math.imul||t;function n(a,l){return a+l|0}e.add=n;function r(a,l){return a-l|0}e.sub=r;function i(a,l){return a<<l|a>>>32-l}e.rotl=i;function o(a,l){return a<<32-l|a>>>l}e.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}e.isInteger=Number.isInteger||s,e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(a){return e.isInteger(a)&&a>=-e.MAX_SAFE_INTEGER&&a<=e.MAX_SAFE_INTEGER}})(f6);Object.defineProperty(ye,"__esModule",{value:!0});var h6=f6;function MD(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}ye.readInt16BE=MD;function BD(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])>>>0}ye.readUint16BE=BD;function FD(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])<<16>>16}ye.readInt16LE=FD;function UD(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])>>>0}ye.readUint16LE=UD;function p6(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}ye.writeUint16BE=p6;ye.writeInt16BE=p6;function m6(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}ye.writeUint16LE=m6;ye.writeInt16LE=m6;function t1(e,t){return t===void 0&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}ye.readInt32BE=t1;function n1(e,t){return t===void 0&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}ye.readUint32BE=n1;function r1(e,t){return t===void 0&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}ye.readInt32LE=r1;function i1(e,t){return t===void 0&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}ye.readUint32LE=i1;function Md(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}ye.writeUint32BE=Md;ye.writeInt32BE=Md;function Bd(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}ye.writeUint32LE=Bd;ye.writeInt32LE=Bd;function LD(e,t){t===void 0&&(t=0);var n=t1(e,t),r=t1(e,t+4);return n*4294967296+r-(r>>31)*4294967296}ye.readInt64BE=LD;function zD(e,t){t===void 0&&(t=0);var n=n1(e,t),r=n1(e,t+4);return n*4294967296+r}ye.readUint64BE=zD;function WD(e,t){t===void 0&&(t=0);var n=r1(e,t),r=r1(e,t+4);return r*4294967296+n-(n>>31)*4294967296}ye.readInt64LE=WD;function HD(e,t){t===void 0&&(t=0);var n=i1(e,t),r=i1(e,t+4);return r*4294967296+n}ye.readUint64LE=HD;function g6(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Md(e/4294967296>>>0,t,n),Md(e>>>0,t,n+4),t}ye.writeUint64BE=g6;ye.writeInt64BE=g6;function w6(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Bd(e>>>0,t,n),Bd(e/4294967296>>>0,t,n+4),t}ye.writeUint64LE=w6;ye.writeInt64LE=w6;function qD(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r}ye.readUintBE=qD;function VD(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r}ye.readUintLE=VD;function GD(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!h6.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var i=1,o=e/8+r-1;o>=r;o--)n[o]=t/i&255,i*=256;return n}ye.writeUintBE=GD;function QD(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!h6.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+e/8;o++)n[o]=t/i&255,i*=256;return n}ye.writeUintLE=QD;function KD(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t)}ye.readFloat32BE=KD;function ZD(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t,!0)}ye.readFloat32LE=ZD;function YD(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t)}ye.readFloat64BE=YD;function XD(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t,!0)}ye.readFloat64LE=XD;function JD(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e),t}ye.writeFloat32BE=JD;function eO(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e,!0),t}ye.writeFloat32LE=eO;function tO(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e),t}ye.writeFloat64BE=tO;function nO(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e,!0),t}ye.writeFloat64LE=nO;var tr={};Object.defineProperty(tr,"__esModule",{value:!0});function rO(e){for(var t=0;t<e.length;t++)e[t]=0;return e}tr.wipe=rO;Object.defineProperty(Yf,"__esModule",{value:!0});var jt=ye,o1=tr,iO=20;function oO(e,t,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],h=n[23]<<24|n[22]<<16|n[21]<<8|n[20],m=n[27]<<24|n[26]<<16|n[25]<<8|n[24],w=n[31]<<24|n[30]<<16|n[29]<<8|n[28],x=t[3]<<24|t[2]<<16|t[1]<<8|t[0],C=t[7]<<24|t[6]<<16|t[5]<<8|t[4],v=t[11]<<24|t[10]<<16|t[9]<<8|t[8],p=t[15]<<24|t[14]<<16|t[13]<<8|t[12],y=r,E=i,S=o,T=s,f=a,_=l,D=c,O=u,$=d,Y=h,te=m,V=w,L=x,F=C,U=v,R=p,z=0;z<iO;z+=2)y=y+f|0,L^=y,L=L>>>32-16|L<<16,$=$+L|0,f^=$,f=f>>>32-12|f<<12,E=E+_|0,F^=E,F=F>>>32-16|F<<16,Y=Y+F|0,_^=Y,_=_>>>32-12|_<<12,S=S+D|0,U^=S,U=U>>>32-16|U<<16,te=te+U|0,D^=te,D=D>>>32-12|D<<12,T=T+O|0,R^=T,R=R>>>32-16|R<<16,V=V+R|0,O^=V,O=O>>>32-12|O<<12,S=S+D|0,U^=S,U=U>>>32-8|U<<8,te=te+U|0,D^=te,D=D>>>32-7|D<<7,T=T+O|0,R^=T,R=R>>>32-8|R<<8,V=V+R|0,O^=V,O=O>>>32-7|O<<7,E=E+_|0,F^=E,F=F>>>32-8|F<<8,Y=Y+F|0,_^=Y,_=_>>>32-7|_<<7,y=y+f|0,L^=y,L=L>>>32-8|L<<8,$=$+L|0,f^=$,f=f>>>32-7|f<<7,y=y+_|0,R^=y,R=R>>>32-16|R<<16,te=te+R|0,_^=te,_=_>>>32-12|_<<12,E=E+D|0,L^=E,L=L>>>32-16|L<<16,V=V+L|0,D^=V,D=D>>>32-12|D<<12,S=S+O|0,F^=S,F=F>>>32-16|F<<16,$=$+F|0,O^=$,O=O>>>32-12|O<<12,T=T+f|0,U^=T,U=U>>>32-16|U<<16,Y=Y+U|0,f^=Y,f=f>>>32-12|f<<12,S=S+O|0,F^=S,F=F>>>32-8|F<<8,$=$+F|0,O^=$,O=O>>>32-7|O<<7,T=T+f|0,U^=T,U=U>>>32-8|U<<8,Y=Y+U|0,f^=Y,f=f>>>32-7|f<<7,E=E+D|0,L^=E,L=L>>>32-8|L<<8,V=V+L|0,D^=V,D=D>>>32-7|D<<7,y=y+_|0,R^=y,R=R>>>32-8|R<<8,te=te+R|0,_^=te,_=_>>>32-7|_<<7;jt.writeUint32LE(y+r|0,e,0),jt.writeUint32LE(E+i|0,e,4),jt.writeUint32LE(S+o|0,e,8),jt.writeUint32LE(T+s|0,e,12),jt.writeUint32LE(f+a|0,e,16),jt.writeUint32LE(_+l|0,e,20),jt.writeUint32LE(D+c|0,e,24),jt.writeUint32LE(O+u|0,e,28),jt.writeUint32LE($+d|0,e,32),jt.writeUint32LE(Y+h|0,e,36),jt.writeUint32LE(te+m|0,e,40),jt.writeUint32LE(V+w|0,e,44),jt.writeUint32LE(L+x|0,e,48),jt.writeUint32LE(F+C|0,e,52),jt.writeUint32LE(U+v|0,e,56),jt.writeUint32LE(R+p|0,e,60)}function y6(e,t,n,r,i){if(i===void 0&&(i=0),e.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(t.length!==8&&t.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-t.length,o.set(t,s)}else{if(t.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=t,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){oO(a,o,e);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];aO(o,0,s)}return o1.wipe(a),i===0&&o1.wipe(o),r}Yf.streamXOR=y6;function sO(e,t,n,r){return r===void 0&&(r=0),o1.wipe(n),y6(e,t,n,n,r)}Yf.stream=sO;function aO(e,t,n){for(var r=1;n--;)r=r+(e[t]&255)|0,e[t]=r&255,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}var b6={},Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});function lO(e,t,n){return~(e-1)&t|e-1&n}Vi.select=lO;function cO(e,t){return(e|0)-(t|0)-1>>>31&1}Vi.lessOrEqual=cO;function v6(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}Vi.compare=v6;function uO(e,t){return e.length===0||t.length===0?!1:v6(e,t)!==0}Vi.equal=uO;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Vi,n=tr;e.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var h=a[8]|a[9]<<8;this._r[4]=(d>>>4|h<<12)&255,this._r[5]=h>>>1&8190;var m=a[10]|a[11]<<8;this._r[6]=(h>>>14|m<<2)&8191;var w=a[12]|a[13]<<8;this._r[7]=(m>>>11|w<<5)&8065;var x=a[14]|a[15]<<8;this._r[8]=(w>>>8|x<<8)&8191,this._r[9]=x>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],h=this._h[1],m=this._h[2],w=this._h[3],x=this._h[4],C=this._h[5],v=this._h[6],p=this._h[7],y=this._h[8],E=this._h[9],S=this._r[0],T=this._r[1],f=this._r[2],_=this._r[3],D=this._r[4],O=this._r[5],$=this._r[6],Y=this._r[7],te=this._r[8],V=this._r[9];c>=16;){var L=a[l+0]|a[l+1]<<8;d+=L&8191;var F=a[l+2]|a[l+3]<<8;h+=(L>>>13|F<<3)&8191;var U=a[l+4]|a[l+5]<<8;m+=(F>>>10|U<<6)&8191;var R=a[l+6]|a[l+7]<<8;w+=(U>>>7|R<<9)&8191;var z=a[l+8]|a[l+9]<<8;x+=(R>>>4|z<<12)&8191,C+=z>>>1&8191;var q=a[l+10]|a[l+11]<<8;v+=(z>>>14|q<<2)&8191;var H=a[l+12]|a[l+13]<<8;p+=(q>>>11|H<<5)&8191;var G=a[l+14]|a[l+15]<<8;y+=(H>>>8|G<<8)&8191,E+=G>>>5|u;var K=0,re=K;re+=d*S,re+=h*(5*V),re+=m*(5*te),re+=w*(5*Y),re+=x*(5*$),K=re>>>13,re&=8191,re+=C*(5*O),re+=v*(5*D),re+=p*(5*_),re+=y*(5*f),re+=E*(5*T),K+=re>>>13,re&=8191;var ae=K;ae+=d*T,ae+=h*S,ae+=m*(5*V),ae+=w*(5*te),ae+=x*(5*Y),K=ae>>>13,ae&=8191,ae+=C*(5*$),ae+=v*(5*O),ae+=p*(5*D),ae+=y*(5*_),ae+=E*(5*f),K+=ae>>>13,ae&=8191;var ue=K;ue+=d*f,ue+=h*T,ue+=m*S,ue+=w*(5*V),ue+=x*(5*te),K=ue>>>13,ue&=8191,ue+=C*(5*Y),ue+=v*(5*$),ue+=p*(5*O),ue+=y*(5*D),ue+=E*(5*_),K+=ue>>>13,ue&=8191;var fe=K;fe+=d*_,fe+=h*f,fe+=m*T,fe+=w*S,fe+=x*(5*V),K=fe>>>13,fe&=8191,fe+=C*(5*te),fe+=v*(5*Y),fe+=p*(5*$),fe+=y*(5*O),fe+=E*(5*D),K+=fe>>>13,fe&=8191;var me=K;me+=d*D,me+=h*_,me+=m*f,me+=w*T,me+=x*S,K=me>>>13,me&=8191,me+=C*(5*V),me+=v*(5*te),me+=p*(5*Y),me+=y*(5*$),me+=E*(5*O),K+=me>>>13,me&=8191;var be=K;be+=d*O,be+=h*D,be+=m*_,be+=w*f,be+=x*T,K=be>>>13,be&=8191,be+=C*S,be+=v*(5*V),be+=p*(5*te),be+=y*(5*Y),be+=E*(5*$),K+=be>>>13,be&=8191;var he=K;he+=d*$,he+=h*O,he+=m*D,he+=w*_,he+=x*f,K=he>>>13,he&=8191,he+=C*T,he+=v*S,he+=p*(5*V),he+=y*(5*te),he+=E*(5*Y),K+=he>>>13,he&=8191;var Ee=K;Ee+=d*Y,Ee+=h*$,Ee+=m*O,Ee+=w*D,Ee+=x*_,K=Ee>>>13,Ee&=8191,Ee+=C*f,Ee+=v*T,Ee+=p*S,Ee+=y*(5*V),Ee+=E*(5*te),K+=Ee>>>13,Ee&=8191;var _e=K;_e+=d*te,_e+=h*Y,_e+=m*$,_e+=w*O,_e+=x*D,K=_e>>>13,_e&=8191,_e+=C*_,_e+=v*f,_e+=p*T,_e+=y*S,_e+=E*(5*V),K+=_e>>>13,_e&=8191;var Se=K;Se+=d*V,Se+=h*te,Se+=m*Y,Se+=w*$,Se+=x*O,K=Se>>>13,Se&=8191,Se+=C*D,Se+=v*_,Se+=p*f,Se+=y*T,Se+=E*S,K+=Se>>>13,Se&=8191,K=(K<<2)+K|0,K=K+re|0,re=K&8191,K=K>>>13,ae+=K,d=re,h=ae,m=ue,w=fe,x=me,C=be,v=he,p=Ee,y=_e,E=Se,l+=16,c-=16}this._h[0]=d,this._h[1]=h,this._h[2]=m,this._h[3]=w,this._h[4]=x,this._h[5]=C,this._h[6]=v,this._h[7]=p,this._h[8]=y,this._h[9]=E},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,h,m;if(this._leftover){for(m=this._leftover,this._buffer[m++]=1;m<16;m++)this._buffer[m]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,m=2;m<10;m++)this._h[m]+=u,u=this._h[m]>>>13,this._h[m]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,m=1;m<10;m++)c[m]=this._h[m]+u,u=c[m]>>>13,c[m]&=8191;for(c[9]-=8192,d=(u^1)-1,m=0;m<10;m++)c[m]&=d;for(d=~d,m=0;m<10;m++)this._h[m]=this._h[m]&d|c[m];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,h=this._h[0]+this._pad[0],this._h[0]=h&65535,m=1;m<8;m++)h=(this._h[m]+this._pad[m]|0)+(h>>>16)|0,this._h[m]=h&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();e.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}e.oneTimeAuth=i;function o(s,a){return s.length!==e.DIGEST_LENGTH||a.length!==e.DIGEST_LENGTH?!1:t.equal(s,a)}e.equal=o})(b6);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Yf,n=b6,r=tr,i=ye,o=Vi;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,c.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var m=new Uint8Array(16);m.set(c,m.length-c.length);var w=new Uint8Array(32);t.stream(this._key,m,w,4);var x=u.length+this.tagLength,C;if(h){if(h.length!==x)throw new Error("ChaCha20Poly1305: incorrect destination length");C=h}else C=new Uint8Array(x);return t.streamXOR(this._key,m,u,C,4),this._authenticate(C.subarray(C.length-this.tagLength,C.length),w,C.subarray(0,C.length-this.tagLength),d),r.wipe(m),C},l.prototype.open=function(c,u,d,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var m=new Uint8Array(16);m.set(c,m.length-c.length);var w=new Uint8Array(32);t.stream(this._key,m,w,4);var x=new Uint8Array(this.tagLength);if(this._authenticate(x,w,u.subarray(0,u.length-this.tagLength),d),!o.equal(x,u.subarray(u.length-this.tagLength,u.length)))return null;var C=u.length-this.tagLength,v;if(h){if(h.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");v=h}else v=new Uint8Array(C);return t.streamXOR(this._key,m,u.subarray(0,u.length-this.tagLength),v,4),r.wipe(m),v},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,h){var m=new n.Poly1305(u);h&&(m.update(h),h.length%16>0&&m.update(s.subarray(h.length%16))),m.update(d),d.length%16>0&&m.update(s.subarray(d.length%16));var w=new Uint8Array(8);h&&i.writeUint64LE(h.length,w),m.update(w),i.writeUint64LE(d.length,w),m.update(w);for(var x=m.digest(),C=0;C<x.length;C++)c[C]=x[C];m.clean(),r.wipe(x),r.wipe(w)},l}();e.ChaCha20Poly1305=a})(Pg);var x6={},Tc={},kg={};Object.defineProperty(kg,"__esModule",{value:!0});function dO(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}kg.isSerializableHash=dO;Object.defineProperty(Tc,"__esModule",{value:!0});var or=kg,fO=Vi,hO=tr,C6=function(){function e(t,n){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),or.isSerializableHash(this._inner)&&or.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),hO.wipe(r)}return e.prototype.reset=function(){if(!or.isSerializableHash(this._inner)||!or.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){or.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),or.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(t){return this._inner.update(t),this},e.prototype.finish=function(t){return this._finished?(this._outer.finish(t),this):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0,this)},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype.saveState=function(){if(!or.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(t){if(!or.isSerializableHash(this._inner)||!or.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(t){if(!or.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},e}();Tc.HMAC=C6;function pO(e,t,n){var r=new C6(e,t);r.update(n);var i=r.digest();return r.clean(),i}Tc.hmac=pO;Tc.equal=fO.equal;Object.defineProperty(x6,"__esModule",{value:!0});var Ty=Tc,_y=tr,mO=function(){function e(t,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=i;var o=Ty.hmac(this._hash,r,n);this._hmac=new Ty.HMAC(t,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(t===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(t){for(var n=new Uint8Array(t),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},e.prototype.clean=function(){this._hmac.clean(),_y.wipe(this._buffer),_y.wipe(this._counter),this._bufpos=0},e}(),gO=x6.HKDF=mO,Xf={},Jf={},e0={};Object.defineProperty(e0,"__esModule",{value:!0});e0.BrowserRandomSource=void 0;const Ny=65536;class wO{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const t=typeof self<"u"?self.crypto||self.msCrypto:null;t&&t.getRandomValues!==void 0&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(t);for(let r=0;r<n.length;r+=Ny)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,Ny)));return n}}e0.BrowserRandomSource=wO;function yO(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var t0={};const bO={},vO=Object.freeze(Object.defineProperty({__proto__:null,default:bO},Symbol.toStringTag,{value:"Module"})),xO=gb(vO);Object.defineProperty(t0,"__esModule",{value:!0});t0.NodeRandomSource=void 0;const CO=tr;class EO{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof yO<"u"){const t=xO;t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(t);if(n.length!==t)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(t);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,CO.wipe)(n),r}}t0.NodeRandomSource=EO;Object.defineProperty(Jf,"__esModule",{value:!0});Jf.SystemRandomSource=void 0;const SO=e0,AO=t0;class TO{constructor(){if(this.isAvailable=!1,this.name="",this._source=new SO.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new AO.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(t)}}Jf.SystemRandomSource=TO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=Jf,n=ye,r=tr;e.defaultRandomSource=new t.SystemRandomSource;function i(c,u=e.defaultRandomSource){return u.randomBytes(c)}e.randomBytes=i;function o(c=e.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}e.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=e.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let h="";const m=u.length,w=256-256%m;for(;c>0;){const x=i(Math.ceil(c*256/w),d);for(let C=0;C<x.length&&c>0;C++){const v=x[C];v<w&&(h+=u.charAt(v%m),c--)}(0,r.wipe)(x)}return h}e.randomString=a;function l(c,u=s,d=e.defaultRandomSource){const h=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(h,u,d)}e.randomStringForEntropy=l})(Xf);var n0={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ye,n=tr;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,h=c<<3,m=c%64<56?64:128;this._buffer[u]=128;for(var w=u+1;w<m-8;w++)this._buffer[w]=0;t.writeUint32BE(d,this._buffer,m-8),t.writeUint32BE(h,this._buffer,m-4),o(this._temp,this._state,this._buffer,0,m),this._finished=!0}for(var w=0;w<this.digestLength/4;w++)t.writeUint32BE(this._state[w],l,w*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();e.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var h=l[0],m=l[1],w=l[2],x=l[3],C=l[4],v=l[5],p=l[6],y=l[7],E=0;E<16;E++){var S=u+E*4;a[E]=t.readUint32BE(c,S)}for(var E=16;E<64;E++){var T=a[E-2],f=(T>>>17|T<<32-17)^(T>>>19|T<<32-19)^T>>>10;T=a[E-15];var _=(T>>>7|T<<32-7)^(T>>>18|T<<32-18)^T>>>3;a[E]=(f+a[E-7]|0)+(_+a[E-16]|0)}for(var E=0;E<64;E++){var f=(((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))+(C&v^~C&p)|0)+(y+(i[E]+a[E]|0)|0)|0,_=((h>>>2|h<<32-2)^(h>>>13|h<<32-13)^(h>>>22|h<<32-22))+(h&m^h&w^m&w)|0;y=p,p=v,v=C,C=x+f|0,x=w,w=m,m=h,h=f+_|0}l[0]+=h,l[1]+=m,l[2]+=w,l[3]+=x,l[4]+=C,l[5]+=v,l[6]+=p,l[7]+=y,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}e.hash=s})(n0);var Dg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=Xf,n=tr;e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;function r(E){const S=new Float64Array(16);if(E)for(let T=0;T<E.length;T++)S[T]=E[T];return S}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(E){let S=1;for(let T=0;T<16;T++){let f=E[T]+S+65535;S=Math.floor(f/65536),E[T]=f-S*65536}E[0]+=S-1+37*(S-1)}function a(E,S,T){const f=~(T-1);for(let _=0;_<16;_++){const D=f&(E[_]^S[_]);E[_]^=D,S[_]^=D}}function l(E,S){const T=r(),f=r();for(let _=0;_<16;_++)f[_]=S[_];s(f),s(f),s(f);for(let _=0;_<2;_++){T[0]=f[0]-65517;for(let O=1;O<15;O++)T[O]=f[O]-65535-(T[O-1]>>16&1),T[O-1]&=65535;T[15]=f[15]-32767-(T[14]>>16&1);const D=T[15]>>16&1;T[14]&=65535,a(f,T,1-D)}for(let _=0;_<16;_++)E[2*_]=f[_]&255,E[2*_+1]=f[_]>>8}function c(E,S){for(let T=0;T<16;T++)E[T]=S[2*T]+(S[2*T+1]<<8);E[15]&=32767}function u(E,S,T){for(let f=0;f<16;f++)E[f]=S[f]+T[f]}function d(E,S,T){for(let f=0;f<16;f++)E[f]=S[f]-T[f]}function h(E,S,T){let f,_,D=0,O=0,$=0,Y=0,te=0,V=0,L=0,F=0,U=0,R=0,z=0,q=0,H=0,G=0,K=0,re=0,ae=0,ue=0,fe=0,me=0,be=0,he=0,Ee=0,_e=0,Se=0,cn=0,Gr=0,Qi=0,Qr=0,fa=0,Dc=0,pt=T[0],it=T[1],Me=T[2],lt=T[3],bt=T[4],He=T[5],vt=T[6],N=T[7],g=T[8],b=T[9],P=T[10],k=T[11],M=T[12],B=T[13],se=T[14],xe=T[15];f=S[0],D+=f*pt,O+=f*it,$+=f*Me,Y+=f*lt,te+=f*bt,V+=f*He,L+=f*vt,F+=f*N,U+=f*g,R+=f*b,z+=f*P,q+=f*k,H+=f*M,G+=f*B,K+=f*se,re+=f*xe,f=S[1],O+=f*pt,$+=f*it,Y+=f*Me,te+=f*lt,V+=f*bt,L+=f*He,F+=f*vt,U+=f*N,R+=f*g,z+=f*b,q+=f*P,H+=f*k,G+=f*M,K+=f*B,re+=f*se,ae+=f*xe,f=S[2],$+=f*pt,Y+=f*it,te+=f*Me,V+=f*lt,L+=f*bt,F+=f*He,U+=f*vt,R+=f*N,z+=f*g,q+=f*b,H+=f*P,G+=f*k,K+=f*M,re+=f*B,ae+=f*se,ue+=f*xe,f=S[3],Y+=f*pt,te+=f*it,V+=f*Me,L+=f*lt,F+=f*bt,U+=f*He,R+=f*vt,z+=f*N,q+=f*g,H+=f*b,G+=f*P,K+=f*k,re+=f*M,ae+=f*B,ue+=f*se,fe+=f*xe,f=S[4],te+=f*pt,V+=f*it,L+=f*Me,F+=f*lt,U+=f*bt,R+=f*He,z+=f*vt,q+=f*N,H+=f*g,G+=f*b,K+=f*P,re+=f*k,ae+=f*M,ue+=f*B,fe+=f*se,me+=f*xe,f=S[5],V+=f*pt,L+=f*it,F+=f*Me,U+=f*lt,R+=f*bt,z+=f*He,q+=f*vt,H+=f*N,G+=f*g,K+=f*b,re+=f*P,ae+=f*k,ue+=f*M,fe+=f*B,me+=f*se,be+=f*xe,f=S[6],L+=f*pt,F+=f*it,U+=f*Me,R+=f*lt,z+=f*bt,q+=f*He,H+=f*vt,G+=f*N,K+=f*g,re+=f*b,ae+=f*P,ue+=f*k,fe+=f*M,me+=f*B,be+=f*se,he+=f*xe,f=S[7],F+=f*pt,U+=f*it,R+=f*Me,z+=f*lt,q+=f*bt,H+=f*He,G+=f*vt,K+=f*N,re+=f*g,ae+=f*b,ue+=f*P,fe+=f*k,me+=f*M,be+=f*B,he+=f*se,Ee+=f*xe,f=S[8],U+=f*pt,R+=f*it,z+=f*Me,q+=f*lt,H+=f*bt,G+=f*He,K+=f*vt,re+=f*N,ae+=f*g,ue+=f*b,fe+=f*P,me+=f*k,be+=f*M,he+=f*B,Ee+=f*se,_e+=f*xe,f=S[9],R+=f*pt,z+=f*it,q+=f*Me,H+=f*lt,G+=f*bt,K+=f*He,re+=f*vt,ae+=f*N,ue+=f*g,fe+=f*b,me+=f*P,be+=f*k,he+=f*M,Ee+=f*B,_e+=f*se,Se+=f*xe,f=S[10],z+=f*pt,q+=f*it,H+=f*Me,G+=f*lt,K+=f*bt,re+=f*He,ae+=f*vt,ue+=f*N,fe+=f*g,me+=f*b,be+=f*P,he+=f*k,Ee+=f*M,_e+=f*B,Se+=f*se,cn+=f*xe,f=S[11],q+=f*pt,H+=f*it,G+=f*Me,K+=f*lt,re+=f*bt,ae+=f*He,ue+=f*vt,fe+=f*N,me+=f*g,be+=f*b,he+=f*P,Ee+=f*k,_e+=f*M,Se+=f*B,cn+=f*se,Gr+=f*xe,f=S[12],H+=f*pt,G+=f*it,K+=f*Me,re+=f*lt,ae+=f*bt,ue+=f*He,fe+=f*vt,me+=f*N,be+=f*g,he+=f*b,Ee+=f*P,_e+=f*k,Se+=f*M,cn+=f*B,Gr+=f*se,Qi+=f*xe,f=S[13],G+=f*pt,K+=f*it,re+=f*Me,ae+=f*lt,ue+=f*bt,fe+=f*He,me+=f*vt,be+=f*N,he+=f*g,Ee+=f*b,_e+=f*P,Se+=f*k,cn+=f*M,Gr+=f*B,Qi+=f*se,Qr+=f*xe,f=S[14],K+=f*pt,re+=f*it,ae+=f*Me,ue+=f*lt,fe+=f*bt,me+=f*He,be+=f*vt,he+=f*N,Ee+=f*g,_e+=f*b,Se+=f*P,cn+=f*k,Gr+=f*M,Qi+=f*B,Qr+=f*se,fa+=f*xe,f=S[15],re+=f*pt,ae+=f*it,ue+=f*Me,fe+=f*lt,me+=f*bt,be+=f*He,he+=f*vt,Ee+=f*N,_e+=f*g,Se+=f*b,cn+=f*P,Gr+=f*k,Qi+=f*M,Qr+=f*B,fa+=f*se,Dc+=f*xe,D+=38*ae,O+=38*ue,$+=38*fe,Y+=38*me,te+=38*be,V+=38*he,L+=38*Ee,F+=38*_e,U+=38*Se,R+=38*cn,z+=38*Gr,q+=38*Qi,H+=38*Qr,G+=38*fa,K+=38*Dc,_=1,f=D+_+65535,_=Math.floor(f/65536),D=f-_*65536,f=O+_+65535,_=Math.floor(f/65536),O=f-_*65536,f=$+_+65535,_=Math.floor(f/65536),$=f-_*65536,f=Y+_+65535,_=Math.floor(f/65536),Y=f-_*65536,f=te+_+65535,_=Math.floor(f/65536),te=f-_*65536,f=V+_+65535,_=Math.floor(f/65536),V=f-_*65536,f=L+_+65535,_=Math.floor(f/65536),L=f-_*65536,f=F+_+65535,_=Math.floor(f/65536),F=f-_*65536,f=U+_+65535,_=Math.floor(f/65536),U=f-_*65536,f=R+_+65535,_=Math.floor(f/65536),R=f-_*65536,f=z+_+65535,_=Math.floor(f/65536),z=f-_*65536,f=q+_+65535,_=Math.floor(f/65536),q=f-_*65536,f=H+_+65535,_=Math.floor(f/65536),H=f-_*65536,f=G+_+65535,_=Math.floor(f/65536),G=f-_*65536,f=K+_+65535,_=Math.floor(f/65536),K=f-_*65536,f=re+_+65535,_=Math.floor(f/65536),re=f-_*65536,D+=_-1+37*(_-1),_=1,f=D+_+65535,_=Math.floor(f/65536),D=f-_*65536,f=O+_+65535,_=Math.floor(f/65536),O=f-_*65536,f=$+_+65535,_=Math.floor(f/65536),$=f-_*65536,f=Y+_+65535,_=Math.floor(f/65536),Y=f-_*65536,f=te+_+65535,_=Math.floor(f/65536),te=f-_*65536,f=V+_+65535,_=Math.floor(f/65536),V=f-_*65536,f=L+_+65535,_=Math.floor(f/65536),L=f-_*65536,f=F+_+65535,_=Math.floor(f/65536),F=f-_*65536,f=U+_+65535,_=Math.floor(f/65536),U=f-_*65536,f=R+_+65535,_=Math.floor(f/65536),R=f-_*65536,f=z+_+65535,_=Math.floor(f/65536),z=f-_*65536,f=q+_+65535,_=Math.floor(f/65536),q=f-_*65536,f=H+_+65535,_=Math.floor(f/65536),H=f-_*65536,f=G+_+65535,_=Math.floor(f/65536),G=f-_*65536,f=K+_+65535,_=Math.floor(f/65536),K=f-_*65536,f=re+_+65535,_=Math.floor(f/65536),re=f-_*65536,D+=_-1+37*(_-1),E[0]=D,E[1]=O,E[2]=$,E[3]=Y,E[4]=te,E[5]=V,E[6]=L,E[7]=F,E[8]=U,E[9]=R,E[10]=z,E[11]=q,E[12]=H,E[13]=G,E[14]=K,E[15]=re}function m(E,S){h(E,S,S)}function w(E,S){const T=r();for(let f=0;f<16;f++)T[f]=S[f];for(let f=253;f>=0;f--)m(T,T),f!==2&&f!==4&&h(T,T,S);for(let f=0;f<16;f++)E[f]=T[f]}function x(E,S){const T=new Uint8Array(32),f=new Float64Array(80),_=r(),D=r(),O=r(),$=r(),Y=r(),te=r();for(let U=0;U<31;U++)T[U]=E[U];T[31]=E[31]&127|64,T[0]&=248,c(f,S);for(let U=0;U<16;U++)D[U]=f[U];_[0]=$[0]=1;for(let U=254;U>=0;--U){const R=T[U>>>3]>>>(U&7)&1;a(_,D,R),a(O,$,R),u(Y,_,O),d(_,_,O),u(O,D,$),d(D,D,$),m($,Y),m(te,_),h(_,O,_),h(O,D,Y),u(Y,_,O),d(_,_,O),m(D,_),d(O,$,te),h(_,O,o),u(_,_,$),h(O,O,_),h(_,$,te),h($,D,f),m(D,Y),a(_,D,R),a(O,$,R)}for(let U=0;U<16;U++)f[U+16]=_[U],f[U+32]=O[U],f[U+48]=D[U],f[U+64]=$[U];const V=f.subarray(32),L=f.subarray(16);w(V,V),h(L,L,V);const F=new Uint8Array(32);return l(F,L),F}e.scalarMult=x;function C(E){return x(E,i)}e.scalarMultBase=C;function v(E){if(E.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const S=new Uint8Array(E);return{publicKey:C(S),secretKey:S}}e.generateKeyPairFromSeed=v;function p(E){const S=(0,t.randomBytes)(32,E),T=v(S);return(0,n.wipe)(S),T}e.generateKeyPair=p;function y(E,S,T=!1){if(E.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(S.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const f=x(E,S);if(T){let _=0;for(let D=0;D<f.length;D++)_|=f[D];if(_===0)throw new Error("X25519: invalid shared key")}return f}e.sharedKey=y})(Dg);function Og(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function E6(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Og(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function Py(e,t){t||(t=e.reduce((i,o)=>i+o.length,0));const n=E6(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return Og(n)}function _O(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=e.length,l=e.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var x=0,C=0,v=0,p=w.length;v!==p&&w[v]===0;)v++,x++;for(var y=(p-v)*u+1>>>0,E=new Uint8Array(y);v!==p;){for(var S=w[v],T=0,f=y-1;(S!==0||T<C)&&f!==-1;f--,T++)S+=256*E[f]>>>0,E[f]=S%a>>>0,S=S/a>>>0;if(S!==0)throw new Error("Non-zero carry");C=T,v++}for(var _=y-C;_!==y&&E[_]===0;)_++;for(var D=l.repeat(x);_<y;++_)D+=e.charAt(E[_]);return D}function h(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var x=0;if(w[x]!==" "){for(var C=0,v=0;w[x]===l;)C++,x++;for(var p=(w.length-x)*c+1>>>0,y=new Uint8Array(p);w[x];){var E=n[w.charCodeAt(x)];if(E===255)return;for(var S=0,T=p-1;(E!==0||S<v)&&T!==-1;T--,S++)E+=a*y[T]>>>0,y[T]=E%256>>>0,E=E/256>>>0;if(E!==0)throw new Error("Non-zero carry");v=S,x++}if(w[x]!==" "){for(var f=p-v;f!==p&&y[f]===0;)f++;for(var _=new Uint8Array(C+(p-f)),D=C;f!==p;)_[D++]=y[f++];return _}}}function m(w){var x=h(w);if(x)return x;throw new Error(`Non-${t} character`)}return{encode:d,decodeUnsafe:h,decode:m}}var NO=_O,PO=NO;const kO=e=>{if(e instanceof Uint8Array&&e.constructor.name==="Uint8Array")return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},DO=e=>new TextEncoder().encode(e),OO=e=>new TextDecoder().decode(e);class IO{constructor(t,n,r){this.name=t,this.prefix=n,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class RO{constructor(t,n,r){if(this.name=t,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(t){if(typeof t=="string"){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(t){return S6(this,t)}}class jO{constructor(t){this.decoders=t}or(t){return S6(this,t)}decode(t){const n=t[0],r=this.decoders[n];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const S6=(e,t)=>new jO({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class $O{constructor(t,n,r,i){this.name=t,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new IO(t,n,r),this.decoder=new RO(t,n,i)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const r0=({name:e,prefix:t,encode:n,decode:r})=>new $O(e,t,n,r),_c=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=PO(n,t);return r0({prefix:e,name:t,encode:r,decode:o=>kO(i(o))})},MO=(e,t,n,r)=>{const i={};for(let u=0;u<t.length;++u)i[t[u]]=u;let o=e.length;for(;e[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[e[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},BO=(e,t,n)=>{const r=t[t.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<e.length;++l)for(a=a<<8|e[l],s+=8;s>n;)s-=n,o+=t[i&a>>s];if(s&&(o+=t[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Dt=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>r0({prefix:t,name:e,encode(i){return BO(i,r,n)},decode(i){return MO(i,r,n,e)}}),FO=r0({prefix:"\0",name:"identity",encode:e=>OO(e),decode:e=>DO(e)}),UO=Object.freeze(Object.defineProperty({__proto__:null,identity:FO},Symbol.toStringTag,{value:"Module"})),LO=Dt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),zO=Object.freeze(Object.defineProperty({__proto__:null,base2:LO},Symbol.toStringTag,{value:"Module"})),WO=Dt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),HO=Object.freeze(Object.defineProperty({__proto__:null,base8:WO},Symbol.toStringTag,{value:"Module"})),qO=_c({prefix:"9",name:"base10",alphabet:"0123456789"}),VO=Object.freeze(Object.defineProperty({__proto__:null,base10:qO},Symbol.toStringTag,{value:"Module"})),GO=Dt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),QO=Dt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),KO=Object.freeze(Object.defineProperty({__proto__:null,base16:GO,base16upper:QO},Symbol.toStringTag,{value:"Module"})),ZO=Dt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),YO=Dt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),XO=Dt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),JO=Dt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),eI=Dt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),tI=Dt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),nI=Dt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),rI=Dt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),iI=Dt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),oI=Object.freeze(Object.defineProperty({__proto__:null,base32:ZO,base32hex:eI,base32hexpad:nI,base32hexpadupper:rI,base32hexupper:tI,base32pad:XO,base32padupper:JO,base32upper:YO,base32z:iI},Symbol.toStringTag,{value:"Module"})),sI=_c({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),aI=_c({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),lI=Object.freeze(Object.defineProperty({__proto__:null,base36:sI,base36upper:aI},Symbol.toStringTag,{value:"Module"})),cI=_c({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),uI=_c({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),dI=Object.freeze(Object.defineProperty({__proto__:null,base58btc:cI,base58flickr:uI},Symbol.toStringTag,{value:"Module"})),fI=Dt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),hI=Dt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),pI=Dt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),mI=Dt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),gI=Object.freeze(Object.defineProperty({__proto__:null,base64:fI,base64pad:hI,base64url:pI,base64urlpad:mI},Symbol.toStringTag,{value:"Module"})),A6=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),wI=A6.reduce((e,t,n)=>(e[n]=t,e),[]),yI=A6.reduce((e,t,n)=>(e[t.codePointAt(0)]=n,e),[]);function bI(e){return e.reduce((t,n)=>(t+=wI[n],t),"")}function vI(e){const t=[];for(const n of e){const r=yI[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);t.push(r)}return new Uint8Array(t)}const xI=r0({prefix:"🚀",name:"base256emoji",encode:bI,decode:vI}),CI=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:xI},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const ky={...UO,...zO,...HO,...VO,...KO,...oI,...lI,...dI,...gI,...CI};function T6(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const Dy=T6("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),fh=T6("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);const t=E6(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),_6={utf8:Dy,"utf-8":Dy,hex:ky.base16,latin1:fh,ascii:fh,binary:fh,...ky};function Vn(e,t="utf8"){const n=_6[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Og(globalThis.Buffer.from(e,"utf-8")):n.decoder.decode(`${n.prefix}${e}`)}function Jn(e,t="utf8"){const n=_6[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):n.encoder.encode(e).substring(1)}var Oy=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},EI=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),SI=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),AI=function(){function e(t,n,r,i){this.name=t,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return e}(),TI=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),_I=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),NI=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,PI=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Iy=3,kI=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",NI]],Ry=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function DI(e){return e?jy(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new _I:typeof navigator<"u"?jy(navigator.userAgent):RI()}function OI(e){return e!==""&&kI.reduce(function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]},!1)}function jy(e){var t=OI(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new TI;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<Iy&&(i=Oy(Oy([],i,!0),jI(Iy-i.length),!0)):i=[];var o=i.join("."),s=II(e),a=PI.exec(e);return a&&a[1]?new AI(n,o,s,a[1]):new EI(n,o,s)}function II(e){for(var t=0,n=Ry.length;t<n;t++){var r=Ry[t],i=r[0],o=r[1],s=o.exec(e);if(s)return i}return null}function RI(){var e=typeof process<"u"&&process.version;return e?new SI(process.version.slice(1)):null}function jI(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}var fo={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s1=function(e,t){return s1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},s1(e,t)};function $I(e,t){s1(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var a1=function(){return a1=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a1.apply(this,arguments)};function MI(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function BI(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function FI(e,t){return function(n,r){t(n,r,e)}}function UI(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function LI(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function zI(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function WI(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function HI(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function l1(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function N6(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function qI(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(N6(arguments[t]));return e}function VI(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function nc(e){return this instanceof nc?(this.v=e,this):new nc(e)}function GI(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(h){r[h]&&(i[h]=function(m){return new Promise(function(w,x){o.push([h,m,w,x])>1||a(h,m)})})}function a(h,m){try{l(r[h](m))}catch(w){d(o[0][3],w)}}function l(h){h.value instanceof nc?Promise.resolve(h.value.v).then(c,u):d(o[0][2],h)}function c(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),o.shift(),o.length&&a(o[0][0],o[0][1])}}function QI(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(s){return(n=!n)?{value:nc(e[i](s)),done:i==="return"}:o?o(s):s}:o}}function KI(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof l1=="function"?l1(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function ZI(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function YI(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function XI(e){return e&&e.__esModule?e:{default:e}}function JI(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function eR(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const tR=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return a1},__asyncDelegator:QI,__asyncGenerator:GI,__asyncValues:KI,__await:nc,__awaiter:LI,__classPrivateFieldGet:JI,__classPrivateFieldSet:eR,__createBinding:WI,__decorate:BI,__exportStar:HI,__extends:$I,__generator:zI,__importDefault:XI,__importStar:YI,__makeTemplateObject:ZI,__metadata:UI,__param:FI,__read:N6,__rest:MI,__spread:qI,__spreadArrays:VI,__values:l1},Symbol.toStringTag,{value:"Module"})),i0=gb(tR);var hh={},_a={},$y;function nR(){if($y)return _a;$y=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.delay=void 0;function e(t){return new Promise(n=>{setTimeout(()=>{n(!0)},t)})}return _a.delay=e,_a}var Zi={},ph={},Yi={},My;function rR(){return My||(My=1,Object.defineProperty(Yi,"__esModule",{value:!0}),Yi.ONE_THOUSAND=Yi.ONE_HUNDRED=void 0,Yi.ONE_HUNDRED=100,Yi.ONE_THOUSAND=1e3),Yi}var mh={},By;function iR(){return By||(By=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=e.ONE_MINUTE*5,e.TEN_MINUTES=e.ONE_MINUTE*10,e.THIRTY_MINUTES=e.ONE_MINUTE*30,e.SIXTY_MINUTES=e.ONE_MINUTE*60,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=e.ONE_HOUR*3,e.SIX_HOURS=e.ONE_HOUR*6,e.TWELVE_HOURS=e.ONE_HOUR*12,e.TWENTY_FOUR_HOURS=e.ONE_HOUR*24,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=e.ONE_DAY*3,e.FIVE_DAYS=e.ONE_DAY*5,e.SEVEN_DAYS=e.ONE_DAY*7,e.THIRTY_DAYS=e.ONE_DAY*30,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=e.ONE_WEEK*2,e.THREE_WEEKS=e.ONE_WEEK*3,e.FOUR_WEEKS=e.ONE_WEEK*4,e.ONE_YEAR=e.ONE_DAY*365}(mh)),mh}var Fy;function P6(){return Fy||(Fy=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar(rR(),e),t.__exportStar(iR(),e)}(ph)),ph}var Uy;function oR(){if(Uy)return Zi;Uy=1,Object.defineProperty(Zi,"__esModule",{value:!0}),Zi.fromMiliseconds=Zi.toMiliseconds=void 0;const e=P6();function t(r){return r*e.ONE_THOUSAND}Zi.toMiliseconds=t;function n(r){return Math.floor(r/e.ONE_THOUSAND)}return Zi.fromMiliseconds=n,Zi}var Ly;function sR(){return Ly||(Ly=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar(nR(),e),t.__exportStar(oR(),e)}(hh)),hh}var qo={},zy;function aR(){if(zy)return qo;zy=1,Object.defineProperty(qo,"__esModule",{value:!0}),qo.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return qo.Watch=e,qo.default=e,qo}var gh={},Na={},Wy;function lR(){if(Wy)return Na;Wy=1,Object.defineProperty(Na,"__esModule",{value:!0}),Na.IWatch=void 0;class e{}return Na.IWatch=e,Na}var Hy;function cR(){return Hy||(Hy=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),i0.__exportStar(lR(),e)}(gh)),gh}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar(sR(),e),t.__exportStar(aR(),e),t.__exportStar(cR(),e),t.__exportStar(P6(),e)})(fo);var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.getLocalStorage=ze.getLocalStorageOrThrow=ze.getCrypto=ze.getCryptoOrThrow=D6=ze.getLocation=ze.getLocationOrThrow=Ig=ze.getNavigator=ze.getNavigatorOrThrow=k6=ze.getDocument=ze.getDocumentOrThrow=ze.getFromWindowOrThrow=ze.getFromWindow=void 0;function Mo(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}ze.getFromWindow=Mo;function ca(e){const t=Mo(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}ze.getFromWindowOrThrow=ca;function uR(){return ca("document")}ze.getDocumentOrThrow=uR;function dR(){return Mo("document")}var k6=ze.getDocument=dR;function fR(){return ca("navigator")}ze.getNavigatorOrThrow=fR;function hR(){return Mo("navigator")}var Ig=ze.getNavigator=hR;function pR(){return ca("location")}ze.getLocationOrThrow=pR;function mR(){return Mo("location")}var D6=ze.getLocation=mR;function gR(){return ca("crypto")}ze.getCryptoOrThrow=gR;function wR(){return Mo("crypto")}ze.getCrypto=wR;function yR(){return ca("localStorage")}ze.getLocalStorageOrThrow=yR;function bR(){return Mo("localStorage")}ze.getLocalStorage=bR;var Rg={};Object.defineProperty(Rg,"__esModule",{value:!0});var O6=Rg.getWindowMetadata=void 0;const qy=ze;function vR(){let e,t;try{e=qy.getDocumentOrThrow(),t=qy.getLocationOrThrow()}catch{return null}function n(){const d=e.getElementsByTagName("link"),h=[];for(let m=0;m<d.length;m++){const w=d[m],x=w.getAttribute("rel");if(x&&x.toLowerCase().indexOf("icon")>-1){const C=w.getAttribute("href");if(C)if(C.toLowerCase().indexOf("https:")===-1&&C.toLowerCase().indexOf("http:")===-1&&C.indexOf("//")!==0){let v=t.protocol+"//"+t.host;if(C.indexOf("/")===0)v+=C;else{const p=t.pathname.split("/");p.pop();const y=p.join("/");v+=y+"/"+C}h.push(v)}else if(C.indexOf("//")===0){const v=t.protocol+C;h.push(v)}else h.push(C)}}return h}function r(...d){const h=e.getElementsByTagName("meta");for(let m=0;m<h.length;m++){const w=h[m],x=["itemprop","property","name"].map(C=>w.getAttribute(C)).filter(C=>C?d.includes(C):!1);if(x.length&&x){const C=w.getAttribute("content");if(C)return C}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=e.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=t.origin,c=n();return{description:a,url:l,icons:c,name:s}}O6=Rg.getWindowMetadata=vR;var rc={},xR=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),I6="%[a-f0-9]{2}",Vy=new RegExp("("+I6+")|([^%]+?)","gi"),Gy=new RegExp("("+I6+")+","gi");function c1(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],c1(n),c1(r))}function CR(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(Vy)||[],n=1;n<t.length;n++)e=c1(t,n).join(""),t=e.match(Vy)||[];return e}}function ER(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=Gy.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=CR(n[0]);r!==n[0]&&(t[n[0]]=r)}n=Gy.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}var SR=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return ER(e)}},AR=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]},TR=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var s=r[o],a=e[s];(i?t.indexOf(s)!==-1:t(s,a,e))&&(n[s]=a)}return n};(function(e){const t=xR,n=SR,r=AR,i=TR,o=p=>p==null,s=Symbol("encodeFragmentIdentifier");function a(p){switch(p.arrayFormat){case"index":return y=>(E,S)=>{const T=E.length;return S===void 0||p.skipNull&&S===null||p.skipEmptyString&&S===""?E:S===null?[...E,[u(y,p),"[",T,"]"].join("")]:[...E,[u(y,p),"[",u(T,p),"]=",u(S,p)].join("")]};case"bracket":return y=>(E,S)=>S===void 0||p.skipNull&&S===null||p.skipEmptyString&&S===""?E:S===null?[...E,[u(y,p),"[]"].join("")]:[...E,[u(y,p),"[]=",u(S,p)].join("")];case"colon-list-separator":return y=>(E,S)=>S===void 0||p.skipNull&&S===null||p.skipEmptyString&&S===""?E:S===null?[...E,[u(y,p),":list="].join("")]:[...E,[u(y,p),":list=",u(S,p)].join("")];case"comma":case"separator":case"bracket-separator":{const y=p.arrayFormat==="bracket-separator"?"[]=":"=";return E=>(S,T)=>T===void 0||p.skipNull&&T===null||p.skipEmptyString&&T===""?S:(T=T===null?"":T,S.length===0?[[u(E,p),y,u(T,p)].join("")]:[[S,u(T,p)].join(p.arrayFormatSeparator)])}default:return y=>(E,S)=>S===void 0||p.skipNull&&S===null||p.skipEmptyString&&S===""?E:S===null?[...E,u(y,p)]:[...E,[u(y,p),"=",u(S,p)].join("")]}}function l(p){let y;switch(p.arrayFormat){case"index":return(E,S,T)=>{if(y=/\[(\d*)\]$/.exec(E),E=E.replace(/\[\d*\]$/,""),!y){T[E]=S;return}T[E]===void 0&&(T[E]={}),T[E][y[1]]=S};case"bracket":return(E,S,T)=>{if(y=/(\[\])$/.exec(E),E=E.replace(/\[\]$/,""),!y){T[E]=S;return}if(T[E]===void 0){T[E]=[S];return}T[E]=[].concat(T[E],S)};case"colon-list-separator":return(E,S,T)=>{if(y=/(:list)$/.exec(E),E=E.replace(/:list$/,""),!y){T[E]=S;return}if(T[E]===void 0){T[E]=[S];return}T[E]=[].concat(T[E],S)};case"comma":case"separator":return(E,S,T)=>{const f=typeof S=="string"&&S.includes(p.arrayFormatSeparator),_=typeof S=="string"&&!f&&d(S,p).includes(p.arrayFormatSeparator);S=_?d(S,p):S;const D=f||_?S.split(p.arrayFormatSeparator).map(O=>d(O,p)):S===null?S:d(S,p);T[E]=D};case"bracket-separator":return(E,S,T)=>{const f=/(\[\])$/.test(E);if(E=E.replace(/\[\]$/,""),!f){T[E]=S&&d(S,p);return}const _=S===null?[]:S.split(p.arrayFormatSeparator).map(D=>d(D,p));if(T[E]===void 0){T[E]=_;return}T[E]=[].concat(T[E],_)};default:return(E,S,T)=>{if(T[E]===void 0){T[E]=S;return}T[E]=[].concat(T[E],S)}}}function c(p){if(typeof p!="string"||p.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(p,y){return y.encode?y.strict?t(p):encodeURIComponent(p):p}function d(p,y){return y.decode?n(p):p}function h(p){return Array.isArray(p)?p.sort():typeof p=="object"?h(Object.keys(p)).sort((y,E)=>Number(y)-Number(E)).map(y=>p[y]):p}function m(p){const y=p.indexOf("#");return y!==-1&&(p=p.slice(0,y)),p}function w(p){let y="";const E=p.indexOf("#");return E!==-1&&(y=p.slice(E)),y}function x(p){p=m(p);const y=p.indexOf("?");return y===-1?"":p.slice(y+1)}function C(p,y){return y.parseNumbers&&!Number.isNaN(Number(p))&&typeof p=="string"&&p.trim()!==""?p=Number(p):y.parseBooleans&&p!==null&&(p.toLowerCase()==="true"||p.toLowerCase()==="false")&&(p=p.toLowerCase()==="true"),p}function v(p,y){y=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},y),c(y.arrayFormatSeparator);const E=l(y),S=Object.create(null);if(typeof p!="string"||(p=p.trim().replace(/^[?#&]/,""),!p))return S;for(const T of p.split("&")){if(T==="")continue;let[f,_]=r(y.decode?T.replace(/\+/g," "):T,"=");_=_===void 0?null:["comma","separator","bracket-separator"].includes(y.arrayFormat)?_:d(_,y),E(d(f,y),_,S)}for(const T of Object.keys(S)){const f=S[T];if(typeof f=="object"&&f!==null)for(const _ of Object.keys(f))f[_]=C(f[_],y);else S[T]=C(f,y)}return y.sort===!1?S:(y.sort===!0?Object.keys(S).sort():Object.keys(S).sort(y.sort)).reduce((T,f)=>{const _=S[f];return _&&typeof _=="object"&&!Array.isArray(_)?T[f]=h(_):T[f]=_,T},Object.create(null))}e.extract=x,e.parse=v,e.stringify=(p,y)=>{if(!p)return"";y=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},y),c(y.arrayFormatSeparator);const E=_=>y.skipNull&&o(p[_])||y.skipEmptyString&&p[_]==="",S=a(y),T={};for(const _ of Object.keys(p))E(_)||(T[_]=p[_]);const f=Object.keys(T);return y.sort!==!1&&f.sort(y.sort),f.map(_=>{const D=p[_];return D===void 0?"":D===null?u(_,y):Array.isArray(D)?D.length===0&&y.arrayFormat==="bracket-separator"?u(_,y)+"[]":D.reduce(S(_),[]).join("&"):u(_,y)+"="+u(D,y)}).filter(_=>_.length>0).join("&")},e.parseUrl=(p,y)=>{y=Object.assign({decode:!0},y);const[E,S]=r(p,"#");return Object.assign({url:E.split("?")[0]||"",query:v(x(p),y)},y&&y.parseFragmentIdentifier&&S?{fragmentIdentifier:d(S,y)}:{})},e.stringifyUrl=(p,y)=>{y=Object.assign({encode:!0,strict:!0,[s]:!0},y);const E=m(p.url).split("?")[0]||"",S=e.extract(p.url),T=e.parse(S,{sort:!1}),f=Object.assign(T,p.query);let _=e.stringify(f,y);_&&(_=`?${_}`);let D=w(p.url);return p.fragmentIdentifier&&(D=`#${y[s]?u(p.fragmentIdentifier,y):p.fragmentIdentifier}`),`${E}${_}${D}`},e.pick=(p,y,E)=>{E=Object.assign({parseFragmentIdentifier:!0,[s]:!1},E);const{url:S,query:T,fragmentIdentifier:f}=e.parseUrl(p,E);return e.stringifyUrl({url:S,query:i(T,y),fragmentIdentifier:f},E)},e.exclude=(p,y,E)=>{const S=Array.isArray(y)?T=>!y.includes(T):(T,f)=>!y(T,f);return e.pick(p,S,E)}})(rc);const _R={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},NR=":";function bU(e){const[t,n]=e.split(NR);return{namespace:t,reference:n}}function vU(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)}),n}function R6(e,t){return e.includes(":")?[e]:t.chains||[]}const j6="base10",rn="base16",u1="base64pad",jg="utf8",$6=0,Nc=1,PR=0,Qy=1,d1=12,$g=32;function xU(){const e=Dg.generateKeyPair();return{privateKey:Jn(e.secretKey,rn),publicKey:Jn(e.publicKey,rn)}}function CU(){const e=Xf.randomBytes($g);return Jn(e,rn)}function EU(e,t){const n=Dg.sharedKey(Vn(e,rn),Vn(t,rn),!0),r=new gO(n0.SHA256,n).expand($g);return Jn(r,rn)}function SU(e){const t=n0.hash(Vn(e,rn));return Jn(t,rn)}function AU(e){const t=n0.hash(Vn(e,jg));return Jn(t,rn)}function kR(e){return Vn(`${e}`,j6)}function o0(e){return Number(Jn(e,j6))}function TU(e){const t=kR(typeof e.type<"u"?e.type:$6);if(o0(t)===Nc&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?Vn(e.senderPublicKey,rn):void 0,r=typeof e.iv<"u"?Vn(e.iv,rn):Xf.randomBytes(d1),i=new Pg.ChaCha20Poly1305(Vn(e.symKey,rn)).seal(r,Vn(e.message,jg));return DR({type:t,sealed:i,iv:r,senderPublicKey:n})}function _U(e){const t=new Pg.ChaCha20Poly1305(Vn(e.symKey,rn)),{sealed:n,iv:r}=M6(e.encoded),i=t.open(r,n);if(i===null)throw new Error("Failed to decrypt");return Jn(i,jg)}function DR(e){if(o0(e.type)===Nc){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Jn(Py([e.type,e.senderPublicKey,e.iv,e.sealed]),u1)}return Jn(Py([e.type,e.iv,e.sealed]),u1)}function M6(e){const t=Vn(e,u1),n=t.slice(PR,Qy),r=Qy;if(o0(n)===Nc){const a=r+$g,l=a+d1,c=t.slice(r,a),u=t.slice(a,l),d=t.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+d1,o=t.slice(r,i),s=t.slice(i);return{type:n,sealed:s,iv:o}}function NU(e,t){const n=M6(e);return OR({type:o0(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?Jn(n.senderPublicKey,rn):void 0,receiverPublicKey:t==null?void 0:t.receiverPublicKey})}function OR(e){const t=(e==null?void 0:e.type)||$6;if(t===Nc){if(typeof(e==null?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(e==null?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e==null?void 0:e.senderPublicKey,receiverPublicKey:e==null?void 0:e.receiverPublicKey}}function PU(e){return e.type===Nc&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}var IR=Object.defineProperty,Ky=Object.getOwnPropertySymbols,RR=Object.prototype.hasOwnProperty,jR=Object.prototype.propertyIsEnumerable,Zy=(e,t,n)=>t in e?IR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yy=(e,t)=>{for(var n in t||(t={}))RR.call(t,n)&&Zy(e,n,t[n]);if(Ky)for(var n of Ky(t))jR.call(t,n)&&Zy(e,n,t[n]);return e};const $R="ReactNative",hn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},MR="js";function B6(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function s0(){return!k6()&&!!Ig()&&navigator.product===$R}function Mg(){return!B6()&&!!Ig()}function Pc(){return s0()?hn.reactNative:B6()?hn.node:Mg()?hn.browser:hn.unknown}function BR(e,t){let n=rc.parse(e);return n=Yy(Yy({},n),t),e=rc.stringify(n),e}function kU(){return O6()||{name:"",description:"",url:"",icons:[""]}}function FR(){if(Pc()===hn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=DI();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function UR(){var e;const t=Pc();return t===hn.browser?[t,((e=D6())==null?void 0:e.host)||"unknown"].join(":"):t}function LR(e,t,n){const r=FR(),i=UR();return[[e,t].join("-"),[MR,n].join("-"),r,i].join("/")}function DU({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=LR(e,t,r),c={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},u=BR(a[1]||"",c);return a[0]+"?"+u}function ao(e,t){return e.filter(n=>t.includes(n)).length===e.length}function OU(e){return Object.fromEntries(e.entries())}function IU(e){return new Map(Object.entries(e))}function RU(e=fo.FIVE_MINUTES,t){const n=fo.toMiliseconds(e||fo.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(t))},n),r=s,i=a})}}function jU(e,t,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),t);try{const s=await e;r(s)}catch(s){i(s)}clearTimeout(o)})}function F6(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function $U(e){return F6("topic",e)}function MU(e){return F6("id",e)}function BU(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function FU(e,t){return fo.fromMiliseconds((t||Date.now())+fo.toMiliseconds(e))}function UU(e){return Date.now()>=fo.toMiliseconds(e)}function LU(e,t){return`${e}${t?`:${t}`:""}`}function wh(e=[],t=[]){return[...new Set([...e,...t])]}async function zU({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${e}&sessionTopic=${t}`,s=Pc();s===hn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===hn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const zR="irn";function WU(e){return(e==null?void 0:e.relay)||{protocol:zR}}function HU(e){const t=_R[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var WR=Object.defineProperty,Xy=Object.getOwnPropertySymbols,HR=Object.prototype.hasOwnProperty,qR=Object.prototype.propertyIsEnumerable,Jy=(e,t,n)=>t in e?WR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,VR=(e,t)=>{for(var n in t||(t={}))HR.call(t,n)&&Jy(e,n,t[n]);if(Xy)for(var n of Xy(t))qR.call(t,n)&&Jy(e,n,t[n]);return e};function GR(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=e[i];n[o]=s}}),n}function qU(e){const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",s=rc.parse(o);return{protocol:r,topic:QR(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:GR(s)}}function QR(e){return e.startsWith("//")?e.substring(2):e}function KR(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(i=>{const o=n+t+i;e[i]&&(r[o]=e[i])}),r}function VU(e){return`${e.protocol}:${e.topic}@${e.version}?`+rc.stringify(VR({symKey:e.symKey},KR(e.relay)))}var ZR=Object.defineProperty,YR=Object.defineProperties,XR=Object.getOwnPropertyDescriptors,eb=Object.getOwnPropertySymbols,JR=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,tb=(e,t,n)=>t in e?ZR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tj=(e,t)=>{for(var n in t||(t={}))JR.call(t,n)&&tb(e,n,t[n]);if(eb)for(var n of eb(t))ej.call(t,n)&&tb(e,n,t[n]);return e},nj=(e,t)=>YR(e,XR(t));function ua(e){const t=[];return e.forEach(n=>{const[r,i]=n.split(":");t.push(`${r}:${i}`)}),t}function rj(e){const t=[];return Object.values(e).forEach(n=>{t.push(...ua(n.accounts))}),t}function ij(e,t){const n=[];return Object.values(e).forEach(r=>{ua(r.accounts).includes(t)&&n.push(...r.methods)}),n}function oj(e,t){const n=[];return Object.values(e).forEach(r=>{ua(r.accounts).includes(t)&&n.push(...r.events)}),n}function GU(e,t){const n=mj(e,t);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(e))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function U6(e){return e.includes(":")}function sj(e){return U6(e)?e.split(":")[0]:e}function L6(e){var t,n,r;const i={};if(!Bg(e))return i;for(const[o,s]of Object.entries(e)){const a=U6(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=sj(o);i[u]=nj(tj({},i[u]),{chains:wh(a,(t=i[u])==null?void 0:t.chains),methods:wh(l,(n=i[u])==null?void 0:n.methods),events:wh(c,(r=i[u])==null?void 0:r.events)})}return i}const aj={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},lj={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function oi(e,t){const{message:n,code:r}=lj[e];return{message:t?`${n} ${t}`:n,code:r}}function Vs(e,t){const{message:n,code:r}=aj[e];return{message:t?`${n} ${t}`:n,code:r}}function a0(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function Bg(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function ho(e){return typeof e>"u"}function Un(e,t){return t&&ho(e)?!0:typeof e=="string"&&!!e.trim().length}function Fg(e,t){return t&&ho(e)?!0:typeof e=="number"&&!isNaN(e)}function QU(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return ao(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=e.namespaces[s],u=ua(a),d=n[s];(!ao(R6(s,d),u)||!ao(d.methods,l)||!ao(d.events,c))&&(o=!1)}),o):!1}function Fd(e){return Un(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function cj(e){if(Un(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&Fd(n)}}return!1}function KU(e){if(Un(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function ZU(e){var t;return(t=e==null?void 0:e.proposer)==null?void 0:t.publicKey}function YU(e){return e==null?void 0:e.topic}function XU(e,t){let n=null;return Un(e==null?void 0:e.publicKey,!1)||(n=oi("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function nb(e){let t=!0;return a0(e)?e.length&&(t=e.every(n=>Un(n,!1))):t=!1,t}function uj(e,t,n){let r=null;return a0(t)&&t.length?t.forEach(i=>{r||Fd(i)||(r=Vs("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):Fd(e)||(r=Vs("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function dj(e,t,n){let r=null;return Object.entries(e).forEach(([i,o])=>{if(r)return;const s=uj(i,R6(i,o),`${t} ${n}`);s&&(r=s)}),r}function fj(e,t){let n=null;return a0(e)?e.forEach(r=>{n||cj(r)||(n=Vs("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Vs("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function hj(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=fj(r==null?void 0:r.accounts,`${t} namespace`);i&&(n=i)}),n}function pj(e,t){let n=null;return nb(e==null?void 0:e.methods)?nb(e==null?void 0:e.events)||(n=Vs("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=Vs("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function z6(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=pj(r,`${t}, namespace`);i&&(n=i)}),n}function JU(e,t,n){let r=null;if(e&&Bg(e)){const i=z6(e,t);i&&(r=i);const o=dj(e,t,n);o&&(r=o)}else r=oi("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function mj(e,t){let n=null;if(e&&Bg(e)){const r=z6(e,t);r&&(n=r);const i=hj(e,t);i&&(n=i)}else n=oi("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function gj(e){return Un(e.protocol,!0)}function eL(e,t){let n=!1;return t&&!e?n=!0:e&&a0(e)&&e.length&&e.forEach(r=>{n=gj(r)}),n}function tL(e){return typeof e=="number"}function nL(e){return typeof e<"u"&&typeof e!==null}function rL(e){return!(!e||typeof e!="object"||!e.code||!Fg(e.code,!1)||!e.message||!Un(e.message,!1))}function iL(e){return!(ho(e)||!Un(e.method,!1))}function oL(e){return!(ho(e)||ho(e.result)&&ho(e.error)||!Fg(e.id,!1)||!Un(e.jsonrpc,!1))}function sL(e){return!(ho(e)||!Un(e.name,!1))}function aL(e,t){return!(!Fd(t)||!rj(e).includes(t))}function lL(e,t,n){return Un(n,!1)?ij(e,t).includes(n):!1}function cL(e,t,n){return Un(n,!1)?oj(e,t).includes(n):!1}function uL(e,t,n){let r=null;const i=wj(e),o=yj(t),s=Object.keys(i),a=Object.keys(o),l=rb(Object.keys(e)),c=rb(Object.keys(t)),u=l.filter(d=>!c.includes(d));return u.length&&(r=oi("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),ao(s,a)||(r=oi("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(t).forEach(d=>{if(!d.includes(":")||r)return;const h=ua(t[d].accounts);h.includes(d)||(r=oi("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${h.toString()}`))}),s.forEach(d=>{r||(ao(i[d].methods,o[d].methods)?ao(i[d].events,o[d].events)||(r=oi("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=oi("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function wj(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(i=>{t[i]={methods:e[n].methods,events:e[n].events}})}),t}function rb(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function yj(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=ua(e[n].accounts);r==null||r.forEach(i=>{t[i]={accounts:e[n].accounts.filter(o=>o.includes(`${i}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function dL(e,t){return Fg(e,!1)&&e<=t.max&&e>=t.min}function fL(){const e=Pc();return new Promise(t=>{switch(e){case hn.browser:t(bj());break;case hn.reactNative:t(vj());break;case hn.node:t(xj());break;default:t(!0)}})}function bj(){return Mg()&&(navigator==null?void 0:navigator.onLine)}async function vj(){if(s0()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e==null?void 0:e.isConnected}return!0}function xj(){return!0}function hL(e){switch(Pc()){case hn.browser:Cj(e);break;case hn.reactNative:Ej(e);break}}function Cj(e){!s0()&&Mg()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function Ej(e){s0()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(t=>e(t==null?void 0:t.isConnected)))}const yh={};class pL{static get(t){return yh[t]}static set(t,n){yh[t]=n}static delete(t){delete yh[t]}}var W6="eip155",Sj="store",H6="requestedChains",f1="wallet_addEthereumChain",Xe,el,Pu,h1,Ug,q6,ku,p1,m1,V6,Ud,Lg,Ko,Ba,Ld,zg,zd,Wg,Wd,Hg,Aj=class extends Ym{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),Qt(this,Pu),Qt(this,Ug),Qt(this,ku),Qt(this,m1),Qt(this,Ud),Qt(this,Ko),Qt(this,Ld),Qt(this,zd),Qt(this,Wd),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Qt(this,Xe,void 0),Qt(this,el,void 0),this.onAccountsChanged=t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:Kn(t[0])})},this.onChainChanged=t=>{const n=Number(t),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{Ct(this,Ko,Ba).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},Ct(this,Pu,h1).call(this)}async connect({chainId:e,pairingTopic:t}={}){var n,r,i,o,s;try{let a=e;if(!a){const w=(n=this.storage)==null?void 0:n.getItem(Sj),x=(o=(i=(r=w==null?void 0:w.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;x&&!this.isChainUnsupported(x)?a=x:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();Ct(this,m1,V6).call(this);const c=Ct(this,ku,p1).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const w=this.chains.filter(x=>x.id!==a).map(x=>x.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:t,chains:[a],optionalChains:w.length?w:void 0}),Ct(this,Ko,Ba).call(this,this.chains.map(({id:x})=>x))}const u=await l.enable(),d=Kn(u[0]),h=await this.getChainId(),m=this.isChainUnsupported(h);return{account:d,chain:{id:h,unsupported:m}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Yt(a):a}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{Ct(this,Ud,Lg).call(this),Ct(this,Ko,Ba).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return Kn(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return $e(this,Xe)||await Ct(this,Pu,h1).call(this),e&&await this.switchChain(e),$e(this,Xe)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Km({account:n,chain:r,transport:Hm(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=Ct(this,ku,p1).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){var n,r;const t=this.chains.find(i=>i.id===e);if(!t)throw new $r(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=Ct(this,zd,Wg).call(this),s=Ct(this,Wd,Hg).call(this);if(!o.includes(e)&&s.includes(f1)){await i.request({method:f1,params:[{chainId:ge(t.id),blockExplorerUrls:[(r=(n=t.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const l=Ct(this,Ld,zg).call(this);l.push(e),Ct(this,Ko,Ba).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:ge(e)}]}),t}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Yt(i):new $r(i)}}};Xe=new WeakMap;el=new WeakMap;Pu=new WeakSet;h1=async function(){return!$e(this,el)&&typeof window<"u"&&jl(this,el,Ct(this,Ug,q6).call(this)),$e(this,el)};Ug=new WeakSet;q6=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await Ps(()=>import("./index.es-cd7116b4.js"),["assets/index.es-cd7116b4.js","assets/events-9ac67f71.js"]),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:c}=this.options;jl(this,Xe,await e.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:l,relayUrl:c}))}};ku=new WeakSet;p1=function(){if(Ct(this,Wd,Hg).call(this).includes(f1)||!this.options.isNewChainsStale)return!1;const t=Ct(this,Ld,zg).call(this),n=this.chains.map(({id:i})=>i),r=Ct(this,zd,Wg).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>t.includes(i))};m1=new WeakSet;V6=function(){$e(this,Xe)&&(Ct(this,Ud,Lg).call(this),$e(this,Xe).on("accountsChanged",this.onAccountsChanged),$e(this,Xe).on("chainChanged",this.onChainChanged),$e(this,Xe).on("disconnect",this.onDisconnect),$e(this,Xe).on("session_delete",this.onDisconnect),$e(this,Xe).on("display_uri",this.onDisplayUri),$e(this,Xe).on("connect",this.onConnect))};Ud=new WeakSet;Lg=function(){$e(this,Xe)&&($e(this,Xe).removeListener("accountsChanged",this.onAccountsChanged),$e(this,Xe).removeListener("chainChanged",this.onChainChanged),$e(this,Xe).removeListener("disconnect",this.onDisconnect),$e(this,Xe).removeListener("session_delete",this.onDisconnect),$e(this,Xe).removeListener("display_uri",this.onDisplayUri),$e(this,Xe).removeListener("connect",this.onConnect))};Ko=new WeakSet;Ba=function(e){var t;(t=this.storage)==null||t.setItem(H6,e)};Ld=new WeakSet;zg=function(){var e;return((e=this.storage)==null?void 0:e.getItem(H6))??[]};zd=new WeakSet;Wg=function(){var r,i,o;if(!$e(this,Xe))return[];const e=(r=$e(this,Xe).session)==null?void 0:r.namespaces;return e?((o=(i=L6(e)[W6])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Wd=new WeakSet;Hg=function(){var r,i;if(!$e(this,Xe))return[];const e=(r=$e(this,Xe).session)==null?void 0:r.namespaces;return e?((i=L6(e)[W6])==null?void 0:i.methods)??[]:[]};function Tj(){return function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}}const _j=le.getBlockchainApiUrl();function Nj({projectId:e}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${_j}/v1/?chainId=${ve.EIP155}:${n.id}&projectId=${e}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function Pj({projectId:e,chains:t,metadata:n}){const{publicClient:r}=qS(t,[Nj({projectId:e}),Tj()]);return uD({autoConnect:!0,connectors:[new Aj({chains:t,options:{projectId:e,showQrModal:!1,metadata:n}}),new lk({chains:t}),new Xm({chains:t,options:{shimDisconnect:!0}}),new $D({chains:t,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}let su;function kj(e){return su||(su=new ak({...e,_sdkVersion:`react-wagmi-${ve.VERSION}`}),ZC(su)),su}let Dj={data:""},Oj=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dj,Ij=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Rj=/\/\*[^]*?\*\/|  +/g,ib=/\n+/g,si=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?si(s,o):o+"{"+si(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=si(s,t?t.replace(/([^,])+/g,a=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=si.p?si.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Er={},G6=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+G6(e[n]);return t}return e},jj=(e,t,n,r,i)=>{let o=G6(e),s=Er[o]||(Er[o]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(o));if(!Er[s]){let l=o!==e?e:(c=>{let u,d,h=[{}];for(;u=Ij.exec(c.replace(Rj,""));)u[4]?h.shift():u[3]?(d=u[3].replace(ib," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][u[1]]=u[2].replace(ib," ").trim();return h[0]})(e);Er[s]=si(i?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&Er.g?Er.g:null;return n&&(Er.g=Er[s]),((l,c,u,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(Er[s],t,r,a),s},$j=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":si(a,""):a===!1?"":a}return r+i+(s??"")},"");function l0(e){let t=this||{},n=e.call?e(t.p):e;return jj(n.unshift?n.raw?$j(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Oj(t.target),t.g,t.o,t.k)}let Q6,g1,w1;l0.bind({g:1});let Lr=l0.bind({k:1});function Mj(e,t,n,r){si.p=t,Q6=e,g1=n,w1=r}function Gi(e,t){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),l=a.className||i.className;n.p=Object.assign({theme:g1&&g1()},a),n.o=/ *go\d+/.test(l),a.className=l0.apply(n,r)+(l?" "+l:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),w1&&c[0]&&w1(a),Q6(c,a)}return t?t(i):i}}var Bj=e=>typeof e=="function",Hd=(e,t)=>Bj(e)?e(t):e,Fj=(()=>{let e=0;return()=>(++e).toString()})(),K6=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Uj=20,Du=new Map,Lj=1e3,ob=e=>{if(Du.has(e))return;let t=setTimeout(()=>{Du.delete(e),Bo({type:4,toastId:e})},Lj);Du.set(e,t)},zj=e=>{let t=Du.get(e);t&&clearTimeout(t)},y1=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Uj)};case 1:return t.toast.id&&zj(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return e.toasts.find(o=>o.id===n.id)?y1(e,{type:1,toast:n}):y1(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?ob(r):e.toasts.forEach(o=>{ob(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Ou=[],Iu={toasts:[],pausedAt:void 0},Bo=e=>{Iu=y1(Iu,e),Ou.forEach(t=>{t(Iu)})},Wj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Hj=(e={})=>{let[t,n]=W.useState(Iu);W.useEffect(()=>(Ou.push(n),()=>{let i=Ou.indexOf(n);i>-1&&Ou.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var o,s;return{...e,...e[i.type],...i,duration:i.duration||((o=e[i.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||Wj[i.type],style:{...e.style,...(s=e[i.type])==null?void 0:s.style,...i.style}}});return{...t,toasts:r}},qj=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Fj()}),kc=e=>(t,n)=>{let r=qj(t,e,n);return Bo({type:2,toast:r}),r.id},ee=(e,t)=>kc("blank")(e,t);ee.error=kc("error");ee.success=kc("success");ee.loading=kc("loading");ee.custom=kc("custom");ee.dismiss=e=>{Bo({type:3,toastId:e})};ee.remove=e=>Bo({type:4,toastId:e});ee.promise=(e,t,n)=>{let r=ee.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(ee.success(Hd(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{ee.error(Hd(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var Vj=(e,t)=>{Bo({type:1,toast:{id:e,height:t}})},Gj=()=>{Bo({type:5,time:Date.now()})},Qj=e=>{let{toasts:t,pausedAt:n}=Hj(e);W.useEffect(()=>{if(n)return;let o=Date.now(),s=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&ee.dismiss(a.id);return}return setTimeout(()=>ee.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=W.useCallback(()=>{n&&Bo({type:6,time:Date.now()})},[n]),i=W.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:c}=s||{},u=t.filter(m=>(m.position||c)===(o.position||c)&&m.height),d=u.findIndex(m=>m.id===o.id),h=u.filter((m,w)=>w<d&&m.visible).length;return u.filter(m=>m.visible).slice(...a?[h+1]:[0,h]).reduce((m,w)=>m+(w.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Vj,startPause:Gj,endPause:r,calculateOffset:i}}},Kj=Lr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Zj=Lr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Yj=Lr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Xj=Gi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Kj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Yj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Jj=Lr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,e$=Gi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Jj} 1s linear infinite;
`,t$=Lr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,n$=Lr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,r$=Gi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${t$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${n$} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,i$=Gi("div")`
  position: absolute;
`,o$=Gi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,s$=Lr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,a$=Gi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${s$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,l$=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?W.createElement(a$,null,t):t:n==="blank"?null:W.createElement(o$,null,W.createElement(e$,{...r}),n!=="loading"&&W.createElement(i$,null,n==="error"?W.createElement(Xj,{...r}):W.createElement(r$,{...r})))},c$=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,u$=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,d$="0%{opacity:0;} 100%{opacity:1;}",f$="0%{opacity:1;} 100%{opacity:0;}",h$=Gi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,p$=Gi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,m$=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=K6()?[d$,f$]:[c$(n),u$(n)];return{animation:t?`${Lr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Lr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},g$=W.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?m$(e.position||t||"top-center",e.visible):{opacity:0},o=W.createElement(l$,{toast:e}),s=W.createElement(p$,{...e.ariaProps},Hd(e.message,e));return W.createElement(h$,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:o,message:s}):W.createElement(W.Fragment,null,o,s))});Mj(W.createElement);var w$=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=W.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return W.createElement("div",{ref:o,className:t,style:n},i)},y$=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:K6()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},b$=l0`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,au=16,v$=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:a,handlers:l}=Qj(n);return W.createElement("div",{style:{position:"fixed",zIndex:9999,top:au,left:au,right:au,bottom:au,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(c=>{let u=c.position||t,d=l.calculateOffset(c,{reverseOrder:e,gutter:r,defaultPosition:t}),h=y$(u,d);return W.createElement(w$,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?b$:"",style:h},c.type==="custom"?Hd(c.message,c):i?i(c):W.createElement(g$,{toast:c,position:u}))}))};const x$="/asset/assets/aboutBtn-afa9a9a8.svg",C$="/asset/assets/startBtn-fc1119c7.svg",b1="/asset/assets/topBanner-93fe18ab.svg",E$="/asset/assets/Logo-835fa85a.webp",ot={CLOSE:"CLOSE",BUY:"BUY",UPGRADE:"UPGRADE",EXCHANGE:"EXCHANGE",STATISTICS:"STATISTICS",ABOUT:"ABOUT",TELEGRAM:"TELEGRAM"};function qg(){const[e,t]=W.useState([]);return W.useEffect(()=>{try{fetch("config.json").then(n=>n.json()).then(n=>{let r={};for(let i in n)Object.assign(r,{[i]:n[i][0]});t(r)})}catch(n){console.log("useFetchConfigJson: ",n.message)}},[]),e}var Z6={exports:{}},S$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A$=S$,T$=A$;function Y6(){}function X6(){}X6.resetWarningCache=Y6;var _$=function(){function e(r,i,o,s,a,l){if(l!==T$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X6,resetWarningCache:Y6};return n.PropTypes=n,n};Z6.exports=_$();var Ve=Z6.exports;function J6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ex(e,t,n){return t&&sb(e.prototype,t),n&&sb(e,n),e}function tx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v1(e,t)}function qd(e){return qd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},qd(e)}function v1(e,t){return v1=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},v1(e,t)}function N$(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function P$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k$(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:P$(e)}function nx(e){var t=N$();return function(){var r=qd(e),i;if(t){var o=qd(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return k$(this,i)}}function D$(e){return O$(e)||I$(e)||R$(e)||j$()}function O$(e){if(Array.isArray(e))return x1(e)}function I$(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function R$(e,t){if(e){if(typeof e=="string")return x1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x1(e,t)}}function x1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=String(e);if(t===0)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),i=r?r[1]:"",o=r?r[3]:"",s=r?r[2]:n,a=s.length>=t?s:(D$(Array(t)).map(function(){return"0"}).join("")+s).slice(t*-1);return"".concat(i).concat(a).concat(o)}var rx={daysInHours:!1,zeroPadTime:2};function $$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.now,r=n===void 0?Date.now:n,i=t.precision,o=i===void 0?0:i,s=t.controlled,a=t.offsetTime,l=a===void 0?0:a,c=t.overtime,u;typeof e=="string"?u=new Date(e).getTime():e instanceof Date?u=e.getTime():u=e,s||(u+=l);var d=s?u:u-r(),h=Math.min(20,Math.max(0,o)),m=Math.round(parseFloat(((c?d:Math.max(0,d))/1e3).toFixed(h))*1e3),w=Math.abs(m)/1e3;return{total:m,days:Math.floor(w/(3600*24)),hours:Math.floor(w/3600%24),minutes:Math.floor(w/60%60),seconds:Math.floor(w%60),milliseconds:Number((w%1*1e3).toFixed()),completed:m<=0}}function M$(e,t){var n=e.days,r=e.hours,i=e.minutes,o=e.seconds,s=Object.assign(Object.assign({},rx),t),a=s.daysInHours,l=s.zeroPadTime,c=s.zeroPadDays,u=c===void 0?l:c,d=Math.min(2,l),h=a?Pa(r+n*24,l):Pa(r,d);return{days:a?"":Pa(n,u),hours:h,minutes:Pa(i,d),seconds:Pa(o,d)}}var ix=function(e){tx(n,e);var t=nx(n);function n(){var r;return J6(this,n),r=t.apply(this,arguments),r.state={count:r.props.count||3},r.startCountdown=function(){r.interval=window.setInterval(function(){var i=r.state.count-1;i===0?(r.stopCountdown(),r.props.onComplete&&r.props.onComplete()):r.setState(function(o){return{count:o.count-1}})},1e3)},r.stopCountdown=function(){clearInterval(r.interval)},r.addTime=function(i){r.stopCountdown(),r.setState(function(o){return{count:o.count+i}},r.startCountdown)},r}return ex(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?W.cloneElement(this.props.children,{count:this.state.count}):null}}]),n}(W.Component);ix.propTypes={count:Ve.number,children:Ve.element,onComplete:Ve.func};var Vg=function(e){tx(n,e);var t=nx(n);function n(r){var i;if(J6(this,n),i=t.call(this,r),i.mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=W.createRef(),i.tick=function(){var s=i.calcTimeDelta(),a=s.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(s,void 0,a)},i.start=function(){if(!i.isStarted()){var s=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=s?i.calcOffsetStartTimestamp()-s:0;var a=i.calcTimeDelta();i.setTimeDeltaState(a,"STARTED",i.props.onStart),!i.props.controlled&&(!a.completed||i.props.overtime)&&(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},r.date){var o=i.calcTimeDelta();i.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return ex(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(i){this.legacyMode||this.props.date!==i.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var i=this.props,o=i.date,s=i.now,a=i.precision,l=i.controlled,c=i.overtime;return $$(o,{now:s,precision:a,controlled:l,offsetTime:this.offsetTime,overtime:c})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(i){this.legacyCountdownRef.current.addTime(i)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(i){return this.state.status===i}},{key:"setTimeDeltaState",value:function(i,o,s){var a=this;if(this.mounted){var l=i.completed&&!this.state.timeDelta.completed,c=i.completed&&o==="STARTED";l&&!this.props.overtime&&this.clearTimer();var u=function(){s&&s(a.state.timeDelta),a.props.onComplete&&(l||c)&&a.props.onComplete(i,c)};return this.setState(function(d){var h=o||d.status;return i.completed&&!a.props.overtime?h="COMPLETED":!o&&h==="COMPLETED"&&(h="STOPPED"),{timeDelta:i,status:h}},u)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var i=this.props,o=i.daysInHours,s=i.zeroPadTime,a=i.zeroPadDays,l=this.state.timeDelta;return Object.assign(Object.assign({},l),{api:this.getApi(),props:this.props,formatted:M$(l,{daysInHours:o,zeroPadTime:s,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var i=this.props,o=i.count,s=i.children,a=i.onComplete;return W.createElement(ix,{ref:this.legacyCountdownRef,count:o,onComplete:a},s)}var l=this.props,c=l.className,u=l.overtime,d=l.children,h=l.renderer,m=this.getRenderProps();if(h)return h(m);if(d&&this.state.timeDelta.completed&&!u)return W.cloneElement(d,{countdown:m});var w=m.formatted,x=w.days,C=w.hours,v=w.minutes,p=w.seconds;return W.createElement("span",{className:c},m.total<0?"-":"",x,x?":":"",C,":",v,":",p)}}]),n}(W.Component);Vg.defaultProps=Object.assign(Object.assign({},rx),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});Vg.propTypes={date:Ve.oneOfType([Ve.instanceOf(Date),Ve.string,Ve.number]),daysInHours:Ve.bool,zeroPadTime:Ve.number,zeroPadDays:Ve.number,controlled:Ve.bool,intervalDelay:Ve.number,precision:Ve.number,autoStart:Ve.bool,overtime:Ve.bool,className:Ve.string,children:Ve.element,renderer:Ve.func,now:Ve.func,onMount:Ve.func,onStart:Ve.func,onPause:Ve.func,onStop:Ve.func,onTick:Ve.func,onComplete:Ve.func};const St={version:"1.0.0",baseUrl:"https://basescan.org",web3:{projectContract:"0xE3FC1e8877f182ab03dd5aD4f793d8aE0127669d",tokenContract:"0x9dDdFFcB5f26AcDA02Bdcb4f6504DE8a244aCa8E",launchTime:0,chainId:8453,modalConfig:{projectId:"591028e65161cc73bea4bd20f69fd5aa"}},display:{decimalNumberLength:2}},B$=({days:e,hours:t,minutes:n,seconds:r})=>A.jsx("div",{className:"sticky top-0 inset-x-0 bg-third z-50  flex justify-between items-center",children:A.jsxs("div",{className:"max-w-4xl text-white mx-auto py-1.5 md:py-3 px-3 flex justify-center items-center gap-x-8",children:[A.jsx("p",{className:"text-lg md:text-2xl",children:"Project Launch :"}),A.jsxs("div",{className:"flex gap-x-2",children:[e==0?null:A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"flex flex-col items-center justify-between gap-y-0",children:[A.jsx("span",{className:"text-xl sm:text-3xl",children:e}),A.jsx("span",{className:"text-xs sm:text-sm text-white/50",children:"Days"})]}),A.jsx("div",{className:"flex items-center justify-center font-bold",children:":"})]}),A.jsxs("div",{className:"flex flex-col items-center justify-between gap-y-0",children:[A.jsx("span",{className:"text-xl sm:text-3xl",children:t}),A.jsx("span",{className:"text-xs sm:text-sm text-white/50",children:"Hour"})]}),A.jsx("div",{className:"flex items-center justify-center font-bold text-xs sm:text-base",children:":"}),A.jsxs("div",{className:"flex flex-col items-center justify-between gap-y-0",children:[A.jsx("span",{className:"text-xl sm:text-3xl",children:n}),A.jsx("span",{className:"text-xs sm:text-sm text-white/50",children:"Min"})]}),A.jsx("div",{className:"flex items-center justify-center font-bold text-xs sm:text-base",children:":"}),A.jsxs("div",{className:"flex flex-col items-center justify-between gap-y-0",children:[A.jsx("span",{className:"text-xl sm:text-3xl",children:r}),A.jsx("span",{className:"text-xs sm:text-sm text-white/50",children:"Sec"})]})]})]})}),ox=W.createContext({}),F$=({hours:e,days:t,seconds:n,minutes:r,completed:i})=>i?null:A.jsx(B$,{hours:e,days:t,seconds:n,minutes:r}),U$=({children:e})=>{const[t,n]=W.useState(ot.CLOSE),[r,i]=W.useState(null),[o,s]=W.useState(!0),[a,l]=W.useState(!1),c={isProjectLaunch:a,modalType:t,setModalType:n,carIndex:r,isShowIntro:o,setIsShowIntro:s,setCarIndex:i};return A.jsxs(ox.Provider,{value:c,children:[A.jsx(Vg,{renderer:F$,date:St.web3.launchTime,onComplete:()=>l(!0)}),e]})},xn=()=>{const e=W.useContext(ox);if(!e)throw Error("You must provide Global Context to our components");return e};var sx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ab=di.createContext&&di.createContext(sx),Ai=globalThis&&globalThis.__assign||function(){return Ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ai.apply(this,arguments)},L$=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function ax(e){return e&&e.map(function(t,n){return di.createElement(t.tag,Ai({key:n},t.attr),ax(t.child))})}function c0(e){return function(t){return di.createElement(z$,Ai({attr:Ai({},e.attr)},t),ax(e.child))}}function z$(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=L$(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),di.createElement("svg",Ai({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ai(Ai({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&di.createElement("title",null,o),e.children)};return ab!==void 0?di.createElement(ab.Consumer,null,function(n){return t(n)}):t(sx)}function Vd(e){return c0({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"}}]})(e)}function lx(e){return c0({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}const W$=({classNameWrapper:e,classNameItem:t,data:n})=>{let r=[];for(const i in n)switch(i){case"telegram":r.push(A.jsx(A.Fragment,{children:A.jsx("li",{className:t,children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:n[i],children:A.jsx(Vd,{})})},i)}));break;case"telegramChat":r.push(A.jsx("li",{className:t,children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:n[i],children:A.jsx(Vd,{})})},i));break;case"twitter":r.push(A.jsx("li",{className:t,children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:n[i],children:A.jsx(lx,{})})},i));break}return A.jsx("ul",{className:e,children:r})},H$=()=>{const{isShowIntro:e,setIsShowIntro:t,setModalType:n}=xn(),{links:r}=qg(),i=()=>{t(!1)},o=()=>{t(!1),n(ot.ABOUT)};return A.jsx(A.Fragment,{children:e?A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-sm"}),A.jsx("img",{src:b1,className:"fixed -top-1 bg-repeat-x inset-x-0 w-full h-8 object-cover"}),A.jsx("img",{src:b1,className:"fixed -bottom-1 bg-repeat-x inset-x-0 w-full h-8 object-cover"}),A.jsxs("div",{className:"fixed z-20 flex justify-center flex-col items-center w-full h-full px-2 xs:px-3 md:px-0",children:[A.jsx("img",{src:E$,className:"w-3/4 sm:w-1/2 md:w-[28%] object-contain"}),A.jsxs("div",{className:"flex flex-col gap-y-6 mt-5",children:[A.jsx("img",{onClick:i,className:"object-contain w-full cursor-pointer hover:scale-110 transition hover:-translate-y-0.5",src:C$,alt:"start"}),A.jsx("img",{onClick:o,className:"object-contain w-[90%] mx-auto cursor-pointer hover:scale-110 transition hover:-translate-y-0.5",src:x$,alt:"about"})]}),A.jsxs("div",{className:"flex flex-col gap-y-2 text-white items-center mt-20",children:[A.jsx("span",{className:"text-[#BFBFBF]",children:"FOLLOW US NOW"}),A.jsx(W$,{data:r,classNameWrapper:"flex justify-center gap-x-2 xl:gap-x-3",classNameItem:"text-xl flex items-center justify-center bg-fourth h-9 w-9 text-[#BFBFBF] hover:text-white transition duration-200 cursor-pointer rounded-full"})]})]})]}):null})};function q$(){W.useEffect(()=>{try{if(window.location.href.includes("?ref=")){let e=window.location.href.split("?ref=")[1];localStorage.setItem("baseRef",e)}}catch(e){console.log("useGetReferral: ",e.message)}},[])}const ai=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ADMIN_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"GARAGE_ENTER_LIMIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"GARAGE_PROFIT_PERCENTAGE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MARKEING_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_GARAGE_COUNT",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_GARAGE_PROFIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_PROFIT_LIMIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_REFERRAL_PROFIT_STEP",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_BUY_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERCENTS_DIVIDER",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"REFERRAL_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_PROFIT_STEP",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_STEP",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TIME_STEP",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"Token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"adminWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"ref",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"buyTools",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"collectCash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_cashAmount",type:"uint256"}],name:"convertCash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"garages",outputs:[{internalType:"uint256",name:"tools",type:"uint256"},{internalType:"uint256",name:"cash",type:"uint256"},{internalType:"uint256",name:"cash2",type:"uint256"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"address",name:"ref",type:"address"},{internalType:"uint256",name:"DirectReferral",type:"uint256"},{internalType:"uint256",name:"totalBuy",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getCars",outputs:[{internalType:"uint8[6]",name:"",type:"uint8[6]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getCommission",outputs:[{internalType:"uint256[4]",name:"",type:"uint256[4]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getContractBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getDailyProfit",outputs:[{internalType:"uint256",name:"totalProfit",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getGarageBuyAmount",outputs:[{internalType:"uint256[6]",name:"",type:"uint256[6]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getGaragesPercentage",outputs:[{internalType:"uint256[6]",name:"percentages",type:"uint256[6]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getLeadershipBonus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"garageId",type:"uint256"},{internalType:"uint256",name:"carLevel",type:"uint256"}],name:"getUpgradeProfit",outputs:[{internalType:"uint256",name:"totalProfit",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserAvailableCash",outputs:[{internalType:"uint256",name:"totalProfit",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketingWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startDate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalBuy",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalCars",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalConvert",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalGarage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"garageId",type:"uint256"}],name:"upgradeGarage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawCash",outputs:[],stateMutability:"nonpayable",type:"function"}],cx=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],ux=W.createContext({}),V$=({children:e})=>{q$();const{switchNetwork:t}=TD(),{chain:n}=ED(),{address:r}=Vr(),i={address:St.web3.projectContract,abi:ai},o={address:St.web3.tokenContract,abi:cx},{data:s}=dh({contracts:[{...i,functionName:"totalGarage"},{...i,functionName:"totalBuy"}],allowFailure:!1,structuralSharing:(m,w)=>m===w?m:w,watch:!0}),{data:a}=dh({contracts:[{...o,functionName:"allowance",args:[r,St.web3.projectContract]},{...o,functionName:"balanceOf",args:[r]}],allowFailure:!1,structuralSharing:(m,w)=>m===w?m:w,watch:!0}),{data:l}=dh({contracts:[{...i,functionName:"garages",args:[r]},{...i,functionName:"getCars",args:[r]},{...i,functionName:"getCommission",args:[r]},{...i,functionName:"getUserAvailableCash",args:[r]},{...i,functionName:"getDailyProfit",args:[r]},{...i,functionName:"getLeadershipBonus",args:[r]},{...i,functionName:"getGarageBuyAmount",args:[r]},{...i,functionName:"getGaragesPercentage",args:[r]}],allowFailure:!1,structuralSharing:(m,w)=>m===w?m:w,watch:!0});W.useEffect(()=>{let m;return n&&(n==null?void 0:n.id)!==St.web3.chainId&&(m=setTimeout(()=>{ee.error("You must switch your wallet network",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5",duration:6e3}),t&&t(St.web3.chainId)},3e3)),()=>clearTimeout(m)},[n,t]);const h={tokenData:a||[0,0],userData:l||[[0,0,0,0,0,0,"0x0000000000000000000000000000000000000000",0],[0,0,0,0,0,0],[0,0,0,0],[0,0,0,0,0,0],0],globalData:s||[0,0]};return A.jsx(ux.Provider,{value:h,children:e})},dx=W.createContext({}),G$=({children:e})=>{const[t,n]=W.useState(""),[r,i]=W.useState(!1),{setModalType:o,modalType:s}=xn(),{data:a}=jD({hash:t});W.useEffect(()=>{a&&(ee.dismiss(),ee.success(A.jsx("a",{href:`${St.baseUrl}/tx/${a==null?void 0:a.transactionHash}`,target:"_blank",rel:"noopener noreferrer",className:"text-site-prime hover:-translate-y-0.5 transition duration-200",children:A.jsx("span",{children:"View Transaction"})}),{duration:5e3,className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}),s!==ot.EXCHANGE&&o(ot.CLOSE))},[t,a]);const{write:l}=Ho({address:St.web3.tokenContract,abi:cx,functionName:"approve",onError(x){ee.dismiss(),console.log(x.message)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})}}),{write:c}=Ho({address:St.web3.projectContract,abi:ai,functionName:"buyTools",onError(x){ee.dismiss(),console.log(x)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})}}),{write:u}=Ho({address:St.web3.projectContract,abi:ai,functionName:"upgradeGarage",onError(x){ee.dismiss(),console.log(x.message)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage)},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation")}}),{write:d}=Ho({address:St.web3.projectContract,abi:ai,functionName:"collectCash",onError(x){ee.dismiss(),console.log(x.message)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage)},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation")}}),{write:h}=Ho({address:St.web3.projectContract,abi:ai,functionName:"withdrawCash",onError(x){ee.dismiss(),console.log(x.message)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage)},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation")}}),{write:m}=Ho({address:St.web3.projectContract,abi:ai,functionName:"convertCash",onError(x){ee.dismiss(),console.log(x.message)},onSettled(x,C){var v,p;i(!1),C&&((v=C==null?void 0:C.cause)!=null&&v.reason)?ee.error((p=C==null?void 0:C.cause)==null?void 0:p.reason):C!=null&&C.shortMessage&&ee.error(C==null?void 0:C.shortMessage)},onSuccess(x){x&&n(x==null?void 0:x.hash)&&ee.loading("Wait for confirmation")}}),w={buyTools:c,withdrawCash:h,collectCash:d,enable:l,upgradeGarage:u,convertCash:m,isLockedBtn:r,setIsLockedBtn:i};return A.jsx(dx.Provider,{value:w,children:e})};function fx(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=fx(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Le(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=fx(e))&&(r&&(r+=" "),r+=t);return r}const Q$="/asset/assets/radialShadow-1c1fef1e.svg",K$="/asset/assets/angularShadow-94572f06.svg",Z$="/asset/assets/footerShadow-b1a3a8f6.svg",Y$="/asset/assets/leftShadow-6eb09ba3.svg",X$="/asset/assets/HeaderShadow-44d29bc2.svg",J$="/asset/assets/bgBanner-79d99cdd.png",eM="/asset/assets/bgBottom-3a5c4a06.svg",tM=()=>A.jsxs(A.Fragment,{children:[A.jsx("img",{src:b1,className:"fixed z-[0] -top-1 bg-repeat-x inset-x-0 w-full opacity-30 h-8 object-cover"}),A.jsx("img",{src:J$,className:"fixed top-8 inset-x-0 -z-[2] flex justify-center items-center w-full h-full"}),A.jsx("img",{src:eM,className:"fixed bottom-0 inset-x-0 -z-[2] flex justify-center items-center w-full h-40 object-cover"}),A.jsx("img",{src:X$,className:"fixed -z-[2] top-0 inset-x-0 flex w-full object-cover"}),A.jsx("div",{className:"bg-gradient-black fixed top-0 inset-x-0 -z-[2] flex justify-center items-center w-full h-full"}),A.jsx("img",{src:Y$,className:"fixed -z-[2] inset-y-0 flex left-0 h-full object-cover"}),A.jsx("img",{src:Z$,className:"fixed -z-[2] bottom-0 inset-x-0 flex w-full object-cover h-96"}),A.jsx("img",{src:Q$,className:"fixed -z-[2] top-0 inset-0 flex h-full w-full object-cover"}),A.jsx("img",{src:K$,className:"fixed -z-[2] top-0 inset-0 flex h-full w-full object-cover"})]}),nM="/asset/assets/fiat-e931a31a.png",hx="/asset/assets/carPreview-0688fd48.png";function rM(e){return c0({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}const px="/asset/assets/brightnessBottom-e897ad72.svg",mx="/asset/assets/brightnessTop-56f6627b.svg",iM="/asset/assets/lineTop-e8a4653f.svg",da=({children:e,title:t,icon:n})=>{const{setModalType:r}=xn();return A.jsxs(A.Fragment,{children:[A.jsx("div",{onClick:()=>r(ot.CLOSE),className:"fixed inset-0 z-10 bg-black bg-opacity-40 backdrop-blur-[3px] cursor-pointer "}),A.jsxs("div",{className:"fixed max-h-[75vh] lg:max-h-max overflow-x-visible overflow-y-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white rounded-2xl w-[87%] sm:w-[90%] max-w-md  border border-[#343E60] border-opacity-70 ",children:[A.jsx(rM,{onClick:()=>r(ot.CLOSE),className:"absolute top-4 md:top-[22px] right-[4.5%] text-[28px] cursor-pointer text-white hover:text-white/80 transition duration-75 hover:scale-105 z-20"}),A.jsx("img",{className:"absolute opacity-10 top-0 inset-x-0 w-full",src:mx}),A.jsx("img",{className:"absolute opacity-10 bottom-0 inset-x-0 w-full",src:px}),A.jsxs("div",{className:"flex justify-start gap-x-5 overflow-hidden relative py-4 md:py-5 px-5 border-b bg-black bg-opacity-50 border-[#343E60] rounded-t-2xl",children:[A.jsx("img",{src:iM,className:"absolute -bottom-[5px] w-full inset-x-0 opacity-20"}),A.jsx("span",{className:"text-xl md:text-2xl font-bold",children:t}),n?A.jsx("img",{src:n,className:"h-8 xl:h-9 object-contain my-auto z-[2]"}):null]}),e]})]})},oM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxgSURBVHgBvVkJWJTVGv7++WcflmEfdlA2USQUcEHZNwEXKORiSFgpqVG5YGKa2dXEJTO7lpYmGZcKcV8AU9kVV0pBEFkGkJ2Bgdm3/79nuNU1JWHs1vs88zwz/5zzfe+c853vvN83GPwJNDQ0mAsGB/00BGGtVKjsVGolR65UEYNDEjGhUfVoNGQtRoV7KQsXtsNzAgMdQZKDxkIhkSyVSuYKBoQ+VCpNn0TPh0RiUCjkIFcoAadQgM1mg0gigT7BgEQkEV9XyJU5JKm8vGr5cr4u/sZMcHBw0BfHsTQNQS6USCT0i0XlUF1XD7d/+hlEYrGEyWAMzfTxZpdVVmJcfT2hWk2a83jmzPEO9uBobweGhgbQ2dMDPT1931CU6m2bNq17OBa/oxIkSZIjk8neJEhig0gkNsj64TicOJOvYTLp9Y52tncnu7tWuDk511vbWnaLxeID6zZt7d++ZcN7vX19ZnV19RP6hSLfPoHAE63qRBdnJ3BydIC29o6hxubm7VIBc29W1hb5cxNE5Mar1KqzUqlswv7DR+G7vDNSFxfHgkVxMTmTXFyuubq69mAYptaOjY+Px9e8m1GX+vY65c8Vlyb+amPz5s0ULy8vXnNX18yuzt747p6+cHc3F669rQ1cKi5t7h0SBJ/KyuLrTBCR89JoVCda2joc0rdsh97evqrk+Pn7g2bNPOvk5NTz5HjvkJBxez7c+uDt9ZtFMoXQue7GDcGTY7IvXDDoam6Obmpqe4vFZE339HCHK6UV/P7+/rgz3x+tGokHZaSHSlL5gkajKap92OTw0msrJWwW8/Dnn34wf2lK8uGRyGlBo7EcjY2NqDQ6bqRSYw4jjUmKihpau3Lld1O8Jv2Dw2Ieqbx1W5QQO8/BzsamKDIuwWekBXuKIFo5R5zAT9Y3NhsuSUuXR4X47962fnW6h5NHGzwD9jwbeyNDQ2DQ6EDBKK7PGvt6UlKLtRl31XhH+z2nzuXLI0ODDPU4ennh0QkTn0kQkWMQBHGZ39rmkJK2VhQZ7J+5YkPSTnt7+wEYBWY8Uxc6nQ5MJhN9wseNNj41NXWQkIp3jRtnt+PEuQuS6IgwO6Bhp+clJlr8IUFE7h21Wu24Zfc+sDA3yUuKm7vHGrOWwlhAYm4UlP8YdJp2n+zGMiU9PV2CSH5qa8P7vrb+IURHhIwTChXpy5YdpD1FEK2eEyKY8fHnh6C+sbFyY1pqupubmwjGCH0OhzdMkEEHDKe4jXVeRkbGAHDY73d0dlShxQFjI8M3mvuKYp4iqFQpN7Z3dRmeOF8ojA4N3DVt2jQB6AAKTnGnUDCg02goBrFRt/hxbElL6xjn6PBZaeV1aWjgbI5SoUxD6Yn+G0GUiB1IgkjOyTsDZiZGZ2Ijwy7q4mBmeLg5Oun6KCeCNg5RUra0mDyZo4sN5dDAKRoVPymRycDM2Hh2W++A728EEYIGRWLs+Pl8mO7teWLSpEli0AEqNThxDbmg3WIqlQpUHKdwKCwrXWxkZmYOmOrrf3Hj9h1N4OwZ1JZHnYsDN2+mDhNUq5VJRWXXgNBoavy9vUpAVxC4rb4++xeCOFpFGjqQuCfoCILDqH5Q31hFQ6kKxaN/AJvNo0ilUmskAKaVX78FNjzza0FBQULQESRonNgstjb20PbiiCQN1BjGAx1xMDNziEqjlvf09qF0xXDobut1oaD480DfcWrr64FnbnYDng9uZibG6KDg8N+DggNGku6gI1AMkyQBZVX3qsHN2YnZ2t3uS0GpZYJGrYH2rh751Mke1fAcwHGaHZvFGl5B7TarkD0NSVjDcwDDsXuP2jvVNlaWgMw4UPqFQov7DxuARaP1WBgb9Ohq0CcoMoRJp7sXXikZJqdGVrWiFUkx/ylBoRGgI8QcaqtUJu3mcDigUimtqdV1dVyNmgQalaoUSCRqXYxNDQx/xdvrhc/mR0Xoy5UKaGpugem+PhA7N1q7X9yS8oo8igZbe6v0x4NjtdmQn69I37hlAPGxxkgKh1p9/wGdZ8FD24RRmGibxoJpc+YYcFlGn6GkmhwREgC2NjbD+ercxUtgzDWEF5CMwjAKmJoY6VnyeAeQWvFuH+hacz0/f2gs9pMXvTh0r+YBekcA9WEjX8Vhc1DMkCzxkJw+2uTpkZEONqbWhxcnxgd7THQHW2tLuFdzHzZu3QUodsBlvD3sP5QFq1Ysg4BZM8BQX1+73a8f/jbHAQuMXFpZXMAfzQfP3Jx1u6oaxSMupvJbWnq16hatgEFnd6dWSfxhreAbGh0RExqeHR0ebOri5AQtra3wYeZuuHe/Dto7O0Ask5PoNtCeYGzDPzPBxpIHH2SshSD/WWBlxQstvFRUpsEg5WZRweU/8iEgBQaYEJxQQQY0HO+gKlXqLoGgH0yMjTidHZ3j0ZjykSbGp7yxPizY/72Y8BA9FpMBObl5UFpxDbRXk0QiRVWdZFAmUxYSpEbK4bAjeDhm2YfsvvrmaogKC4alyS9DUsJLNlyu4QnX8Q47sg8d+GgkPzQRTAJUKTbxW8CIy22kWlrzbt6tuS8PCwpgogMTgsZ88/gEP78wq8DI4N3xC+Yl2lpbQeHlIvS6oi0nYWBwCPoHhoopQDlJYsyjXfWVwh/q70BgSgrTgsVayKDTE0QSadTl4jIoKquA6PBQeHnhiwZTPSdvc3N1szt99sS2m6WlvxPCGpLiy0DXZUNTs9zLY2IV1cHWid/Cb21iMZnucpnc55MjR7irliwZvk3iF7/pGB468zza0gnaX7Rt1ydQg0pNgVAoUcjkp/oHRIcf1d0q1ibYx50UZ2VpK7Wj2lf84qUB6H5OEYulscfPnjcsLr8Kqa8uhiVJ/0jlGuoH4RR2xONxScNpEW0dHdpUxfeZ7F5H5dKUAlMjo1INoXGn0xnO7Y38KWjcla27966IiQz/kNCoTfZ/9TWUVd4EQf9AGWKS09El/F7I/2n4R2gVzLNw7NuvtHd7SfSiRaupGBaDCvxlW3ftncWzMEfSf5HLoc8/Ld27/4uth/bv/XJYVZFE5JWScuDxzArj4uLah62vXPOuf3Nr++WI4ADqjdtVeUkJL9bYWFm9f/X6DSw776RoaEhS3N3Xu2e2h/PVY8eOKeFPYlpozCylQrEMlbTR8+ZEGEeGBRMPG5o2xcdGk2qV5qMly1eRrhOc5+zc/F7hMMF9+/YxjuVfuRQZEjRL27awsDBDNfDpkvbOrgsSOfkl/6dinQXEWDA1NNRQKSZi1STxSkJsTGBK4kJFxfVbjOxjeeXrViydg4TL/2Rf4mvLXwmIipX+6+BhMjbptZqVGR+ZwN+Iy6VlJa1tj8gFiSnSLdt3xv/6/DfJ7zPRORfVE8fau7th8sQJ7grJwLq0tH0M+BuAJN/q2dOn+eedPodkFj3Xf7pP/lMEV69eLZvq47kD5dJOc1MTVMcw3yAZXfHa1gX8hUAHIxiJjPXnCy/BqQsFfXHzF+x8fGt/53z7hg33fV6YnJqde1zgN83HAHWkvhArYd5fRRI1m0IRuVNNLa1mB458K4gKDkleuCDq/uNjnnLs6TauYKqXR/qRf+dKvb089YxNjA/RDY3WwP8ZqIW3kkbDf0AJWf/9rbtk/n6+a0MDZ1x6ctyISSw3Nxe/VlWddK+27uO4uVEmekiboQZPNgMjNi3XsQH5JBQKhRuqgbYhkRv3Y1EpHPj6qMBvhk96xqq3vkE5lRgTwV9I0pvau0OulF09GuA33RQdHHS99bcjpbwfx1nfLUmM5YMOEIlEZki9r0D18zsKpYp7NCcXLhaVdoaH+af6e3sXeHt7q0aaN2oD8+vsbPdbd6rflcpkL81AHVRHR1uQy+VIjqsLaHR6AR3Hb6K6oSYsLGzw8Xm1j2pNuEzuOCpJCURXXQQFpwYolSrqmQsXAR0ImamZce686IgdMWFhtc/yP6YWcG5RkR7/5+o5Dx42v6XWqPx8p07BJk5wQVpPD7RKGq3MEEpRDSwWU6rHZqOqmMLFcaoFqu6MtYV8a1s7VN68A8UV11BOJionTXA+tDghPtfW1lY2mm+dmuhFiOjNu3dndXT2RqIiKwKJcNR+tmbYWFqCnh4HmCwmMoiBUqnUhoO2H436PE1y1I7jm5ublESE+OfMi4q6jmJNMVafOnf5tUCNJqy4uNi6prHRFanoKcKBwfEEQVqhleSQJNIPOEWix2R0UOmMJh8vzxszfafWo78sulF+06nm0eI/LE9p1SgJp1YAAAAASUVORK5CYII=",sM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAoCAYAAAAG0SEsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyPSURBVHgBvVd5dFNlFv+9l5elTVKadEtJKS0tLaUUWig7HAoMiiCbLLOBI3IUUJzDcHAcxRHOqOeMHmTcD0cRgVEWxaGobFqWslWgpUL3LS1Nl7RN2iZp9uS9uXlt2aagf82X870t73333t/93eVj8IAhCAJjb35lkoRtHSNhXamCT6Lr6GYyTa2dCofdybCsfJAg8B5eCLhZBghVSu3xQzTmMDVrYlhvAy+oGnmJtEKlm/8zwyzpHkgGc/eNs/2NaQFf9W+6LY4Z9fXW8WqVRtlhBlpMAq4WNUIqC4VKJUXO9PE4d+E61GoZlCESjB+TjL0H8yFlBYQoGKQma5Cgl9HiLqg1EvgEX1VGeuxPPOPLVSsXFjIRK5tE4V31T4WzLDbW1nQvZxnpyNYWoPaWF7UNZjS3WGE0dmL+3EwoQyWIjFAh93gJFj42ATt3nQAnFaBWhWDurHToItUYoo9BeWUdmkxWPP/b0WAZD97edQ0KuQycjMHoNCViYlSI07FHh0w8soTr6RFqP9tdFWHtEXCj1ARLtxOZ6bH487pF0MXq8NJrn0LCMThzvgphYSq43DxiojVIHKqBTCqBzeEjIQIMt8xQKVhkpESiytCOp7acwGBdBASvGxarDeHhahSWdiNnylBMSMeiz3YmyjkJ+SzvghELHk2HI0lApNUBVsLh1OlidFnt8Hn90Osisf3NqRiWoMPJU6egkjZi6bzBRAweIaEqJMTF4uLVSuRfLUeAV0AbLsOOzRNh9wKf7i+GVMqCYSVwuQKwdDoRGhqJGw1QcKyU9fkCAtw+OebOzkJKchzM5g7U1ZUhIiyAR6ZnIC5Oi4DPhrJyDwbHpkLGSeH1tuLQtyew+1A9pBxLqCgQES7HkNhQUkaNUwUeRGlCsXheEsqqOnHgWwPi9Bpyk5TcwCHIQE4uVWDMyGg8uzIdfq8TnZ1GDI7WIjpqBvRx0eA4Bc6dL8CEcYkIC4+H4HOD9zkhZejMA7wAeHw8OixOcVbWdd3DZY5CYXxWNLIytJiaHQOZLEREJjw8HJzXb8Oq5WkwtriQlBiP1o46pAzVYfX6ndi0YSn2HfwB2ZkpaDfbse+LdzFzynCkpIwlqT48fAji0U/aFRSZaLYRShUYkaSGNjQb6O4G19TMYNKEWfQai70HjmB4chKqq1vILxxuNZlw6aoRsTEaHNm2D2MzIqCNiAfj94IPBLBoRgxSosJIDEM/oU9k8JqnM9unAF0xTHB5sIQCQ2cZTRF2gRYRBJoIoLGpCw5nOSprO+Fy8gj4/dj94ToEk8iiR7PR2NyChvpKRIzKpG88UF7xQ3vQ1wexgHvTRuA2AgIp46N7P0NHgSStk/Za7vL4PGfOFeCjz69QgghgUnYq/rrxacTohhKR6FN/DyHMk6VuJMb1kpEPeInovvsyFfMA8PsxIXMFRtTRz4uywQUCgvvK9Ro4XS5s2TQf6aPGobK6AdWVhbjVbEZSvAZyhQo+txNZaSkIV8qJaE5SwN8nsH/xgXzO3HMfVAQMIUrRJcIehGfF0sVYulhA0fWrlD7L8e13Z/HM6nn4dG8+nliQidLKciybN5JIV0/osGS1HwqlB+oJKgxTK3DbvXSQkUODLmbuFs4EpfCiePIXJEPlwAESThBak5PiKGQE7PnyG3qFx+UiOyqqDyNjVBLB48bwxEgU3GQREaGh+CZfh0hhau+keE1EzGQZmls74fW4IZe50NZmxbYdhSRjYDcEx6Y1aeKZ4yibncw7i/d35pHWQLxej13vPYdIrRa2rkYR4rIyA0IjElBr6BCZHBOjI1NsUKpVMBiM8Adc4P12TJ4YidOXrKIBAh48AnzvmRPg6S4tN5DmHry1dSlluFQczs3DmBFa7D9ags3rHofJ3InZmZEYN0of1JaSkQ1NYVooZDymZg4BK3QTMRXEZFsQVUiYXqINOFgR+T7LWUHYsH49lj9BKfDQQTgdHlgsNopxBW4Z7dj4KjmH5TFrFhUQ+jBIlg92FyD/ciWFXif2/msaRiQEA9UlhquK0MtdM5ZkSERXBgkQ9D/1ByIePCUdZYYGublNRDhSUyEnf2p4eo/Dj2dLcb2kjaoXsHpZllhMikrKxFBjaBqMDuTl34TD5UGkRo6r19spIw7C2cvdmDxWC95jQ/M+JxhB0kc2EkgFyE+C/b3RjuQXlKD86uZkHAeXw4Sc+a8ieWg0HslJwYoFOYjXaSjJUP4mf2qUMvgpp7e2kXXk28q6dvRQKd349EjMnRFKaNnw0Rct0EXJREyDFkr6uP6/xGPEZw0NDR4uqFN1dR3ShuuQnKjCioUzIKUXAn4iEe8h4T4KLdI34MHlwgrs+aocTS0WcZmKGjOOn/FSCRYwZ1osmjoY0Z/MQ8jGkEP4/qKjjZAJbpsJf984Hh63h9JqDVyUQBhKBjwJJRoTkdy4cKmc2iUlYqNDEB6mhNXuwqHva2n2JprnVyXhsZx4dLUJSN8cTd+xooCg34OVL0CHAB9M2YA0WY2cnBwJ01S6dE98Ru6fgmDdHR8MI9xm7HMrR2DtHxPRZnFQig2BQuGjzsWNqvoA1r5cKHYyxcenIm6wDMfO8BifPZkixIwQuYTCMgatrVZkZE2l9+RUkp2oLjvmzpy7N4TVamXdYWqpyMa7f7yYjAQRRruLx6VrzUhOkKLS4KJ+DshIU2DBHC1WLU7CC6vT0GamLsXiQ0eHg74NYNOW/8DtduHJ9bvAUvNRU3kVlrYy4h91SgFbbW/UcaH1o0dqHuIlAV9/b0CrmSXSBTAtmxNhNrZ4iPVdeGtLEuRSBmPS1DhyqhtRUXL8871jYqe7Y+dFkS/7vzqNN7d/DZPJRDXCArvdIQrneH7omW0bk3H9vEasOgzD9ObgXrm3R0I0h+On3ZgzXUaNIUd+V+Dx2SxuVnuxdmUsjv7YjumT9Dh5thNP/2EyBuuHwOEA5AR9c0sTvjyUj9RhsQi4TNTbyfNF4SrdayWmi8tNRZ8ZdJwgp8AP/ljyj+QOa0mJTjgRkQpc8YbDqbSTAtQOUzx1WcnfJcCQwXpERE/A316Mov6vmpSjPs/nRVLySCQlDINGrSYUHBSWFrRa9LnBZcVMsPX10aqmy105jmZfUKzYi7B9s5fLvdNvYeC74sBgpwwKtxxsQgjau1jqSlnMmJFORaURZy+WUUst4NA3BUgaFobCwhsIV9swJIb6P68LtfW1RQvW7H9btDx48HsV741brX/5xLUaeZAsfQlxgOJALZHAoqPQBcbgxLil6YgflkitlRbfnbiAuFgVzl6qI5gHIfdUDZHQBZVSgpFUNQfJeuB2GmFoFj64E/N9w25Y9nrx5y2vuh2s+FC0WqzTrAi7hOu97m2YKINRSVZNiUFNk5uqnRl1t3qIkF6kjRiKKRMzoI+NRH29EUU3qvHkklEIoa61pvbnhuwlxxL7ZXL9F34m7h3rsK4Ni9ecCw8mg37rReCZO+TrR0M7SIoz056A1ebAjk9KsOMfMzF75kJExejFZkPw2qEjRDJS6N5nJqubcSyvYdvdOLL9F5rEd7tnTEr9y5rfDUd/09d/pt0o+moSPeudgQAvsiIrYxQOfUKlOIkMotLqdjWiojQfdhv1An4nFBI/bSC9VA/aLm79qGzv3cK5u2/C0j7eU3Zm2aQLV1rXVtRZ8bAR3DCAquDozAlob2+nZtOKA4dPQanSYsRwJQ5/V4KZExMRNUhNWySj2dAmrLp/De7+B1GjVmze+75/3Dff12ZD6O9L7/SnQl/l4CS9zAjO2ro6tHW04MixMqSnRqGo0E8hpkMswW4x19BWyfjya+8XNdwva8ACZGveHtlZcr7g5Mabye5mEkQWSgXunhaZ1QaQvXMqGts9uPSTgQgpwfJFM2mrFU0R4SXGVyBMYUdegenFZ185v30gOexAD8P0m83qpKyZc7ZnlcliBEqJVHg95H8PCfaw4mTcnFi1vX6GmN5Fm8w0jEgeBqWCOljGBrW003H4pGHDgwQ/0PL+0UwIMNV5bxR/bFlbdbRDzH3S3vwHLlzA2D3TkJg2izrcLoRS6CmlPLyORrK6quGHy9ZnNr1xLu9h63MP+1NPCNBpXVf5qibNKPnWGzvbOLfFIyrQ7+/QUAVttFWEDG21uspRfLPm8IlrnS++u/PnBvzCYPArR2vx4gRXi/fDyq9a5xt/dMLj92Da7t8gbcw09FhK0WSsbahs6Fn9+xfyzv3aNX+18P7RVTw3wW2Vv9RQ2L1ONTKcNgryGwaj9Z25q0/9G//HwWx4atwI4WFbk18Y/wX6ucxMHZnUkgAAAABJRU5ErkJggg==",aM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuhSURBVHgBrVgJVFTXGf7em2EblmFxAWEETI2I0YiKQSQ1iGmbnFgl6kldwBCJGmNq0zaJMTHGcxKtTZrYY3qiuEatiY0YraeN2STuCihCEFmEYRuGffb1vTev974BNDLA2OTj3POYeXf+973/fv9yL4P/A8XFGkXULyLSeIFLhYgkm92WoO/uirBabUGiy8X6Bfibh48Y2eTr59/KMuxlAeKl+PDAMwzD8LhPMPczWWMUh7kE+1qTUb+wrOTahOryMjTU18LFC6iqugVtSwt4nsPYsWPh5x8AHzIeHD8Bk6dNx7SUmbfkMp8vApV+u6MCAurxc6LdLEaqOwwHv75w1bLhzY3ib+bMFh9LmyGmTp8m5mRnEae5xD2788QH4keLWcuWSJ937fpYHB0ziowoUUVGYmKCmPvCavF8cZmzvsu8X2cT47x5NjvUhIZOc5a2tanw65PHs/IP5Ckqy65DdAkgyyUNCoPBgMynFyAoKAhz5/4WRqOxnx2T0YCvTp3EisWZPh9s2fRsTV1NgdZoyxnq+fKBbtR2i0rWZd5cfPXiuqbbldDruuHj6wOWlfURo6D/t2q1EqnclauRMedx5B87NpBZWK1mHP/sMK6ePxe3bMWqfbVtxgTWN3hrfBij9zTfowfVarW/HOZPrp47s87Y3gJ/P78+UneT6yPJMjh//jyysrJRVlaGaqLHoaDRNGLb5jdw5MCuVxnBtJ8+0yuCap0ulAmO+FSrrp03KWEsEhMTIfC8NFyCAKIviKLYN99itaDyVgWO53+O6uoqHDp4ADq9Hk2NTRgM0TExOH7iFI7s24Wd29+bj+Bhn9FVu3devyV28bLXL3x7en566iPgCKlx48bhFiHAN3NwchwhykkEe0lW3rqFV1/5M3hCftGCTAjkBUByDyMlCKrT/uTob1evWoOQkBCYLWYc2pcHZfiweUtyVrxNbr88IEEq2u++Ov3q+DGjUVp6A51d3Yghb5qZ+TQ6OzvxzuZNcDqdJJXwMJhMxP8yyCPjIEYlgg+NRqBBg3cy06BUBqO65jauXL6E4sIrMBr0bmn0OD43dyVmZ2Rg27a/4KN/7CRBpscbG15HaFj4H+raDNfHjFQe6uXU9346UYyrulldwNpNcYkJCdi/fz/S0tLQ2FCPFpLfFixchBeeX4H2tlaQTIzIKb+EMWEWyoLHosUpk54dVXMWF1bMRHxcrGRTEFy4Sbx/9F9HcfzYUVhNZkREhOM/X34jRTx9WR8fOS5duojnc1dg2IiROJR/qjEkZFhK3PBALbUh6yX4wu9f+fDq2TOPBfjKJa/Rpb1ZXo5zZ79H+uwMnD1bgMKiIjycNgcTn3kR9mlz0eo/Ai0OEpmC2zXBukY8l6RCWGio9JklwTNyxAhkpM9GUtI0NGqaSQBVSkt87NjnOPt9AaYlJ2N3Xh7efHMjfOQyFBcVK5NT04b//b2tJ/qWWEuSZuPtqmW1leVorK0iRqqweMliPJKSAoUiAJoWDT49cgSznlqAmMefQTOCyLLxMPMu2IU7AcOyA6fVmakzkJCQh5ycbOzduxuRkVHIP35Skst773+AgoIzKC0rRU1NNeY8MXehURT/GMIwXZJFi0mfe/pkvpwun1ajwfVrRdj81kY47HZiQMCO7R/iV4uyEPtkFtqZILTaXOhwuNDl+DFBmUyGwRARHo7du/fhoUmTpWxgJ/avXLmMRQszsfbF1Si9UQKrxYJjRw4qDHr7S5IGibvlVZqOsg1rc8eTEKWJjlQKl/RmYWFhcBCdcEQJGS+/i/bAUYScgBarC2ozhwYLDxN3h2B8cyG+XTKlT4MD4ez5C8jJXkryq68UxfcikOjzxDcXy/1VI5PZFoMjvex68XiTXgez2QwziU4LeQubzUaSqQYNzc2YMCcTJUwkKsmy1ph4Qo5Ho0WA+S5yFPIhPNiLWY+mIePxX3skR2EhPK4XXn3I12JPY+0cl1ZRWgKO5DhpEM/1XcnyhkYMQ0fsNNQYnbht4qAmBN2ec0G8xzAtg94ie/lyyOQDVlqUlhTB6XCmyeUMk1JXU0WWkpNu0HzVm4TtTgdUKRk4bSEJlSRoG9Eb1ZwgejbKyqikRXiD5KlTMS5hAirKSz3er/iBfC+yk1mHwxHZ3NjQ4zVaLZx9V6fDATZ2IvGYgE4SEBZ+YHIUMlbmJT3A398fU6dMlX7jCU2Ek81qTZS3tbWo2tvbPDYBHClfnX7hXj90sDTjCXHx8ZD7+EBwCP3uGXRdMOq7w+VOuyPIQT1Floe5q8Em1VZqECJdRszx6+77nqYH0o+SIfT8L0gVg8pihE2L+gZfKQNwHLlPsgIn0EZDkGzRek07bkG6Ei2ThoKVedYhvU+3EHLSKrno8rp3C8xdGnQ3BEliO3JiIt1kRJf7Sh5AmwJR+o7Oc7/StbZG/KCLRpGLg9HuhMnOwUCGlaOfOZgcpIY7nLBzhDQZAQ1WyAcJFGKZkQcoFGayNH6C0H8/QwmOioxE2sxUeANKvjo4Gt0kX5oCRBhIpOuIdulV73QPnfNOcld1ahAygCxo0id9qJklHUS3Mixc8kK/QSbW16txP7CSQKLJm9ZnBxmc6A6s3uG6S9D+nXWQEQ16QsSw4Rg+MqqJVQQqKqJVKo+TqCJLSYdM9eANaJDYeLfnLGTYJJKAk7Cig5fIuhnKXDyCSXvmIAXBE6JVsWSL4dvGEo3fmDBxMtz+uncAVy6cQ119A7yBnAjeIriXVU8I0mRu5V2SV+09Hu1NU5HNJQiy60jVMHq09eD4h0Caocusr4/PxUkkHw0Eu91G2vhP4A1YohsbcTb1oJEss5l3D0rS1kPQDQbR1d/BbrMOaCsp+RHywj4XWZep40JSckq5IjDIsw9JVH9+9Agqq6sxFKiwrYI7EPROQQoKk+RJUVpyvodfXOMlKLvq0Nne6tFOsDIUySmpFdUllwtYlUplUyqV+amzZg/4YBt50y1b3oXJbMHgBKkGSdQSYsYeckaqR/4OuVCnATE3TkrkaKXyhJmPphNb8i/S09N5d4wz3EcLl2RbFQoFBgrn77/7GmvXroHVZh+EoFzSm87Z60W3/nrJRXAGTPpqC1xtanS0tni0ERCgwPKVaziZ0n8P/SwRjA4J6UxInHjsqcxFUgXx9EdRQEiuW7cWP9ys8EyQqJo4TAoIwk0KCPcvGSQaqzH5m21watVoUN/GQHhi3gLEjhlzOL7n/KavttHzF622oTB70VxVV0c7BkNoaDgWL83CfLLbGzf2F301uLCoGBtq5DjDD3d7gxGRyGkQWPgF2NtF0HV3YjDbo2JU2LHvSP2DY8amhwUw9T8iSNHQacj676mTB7e+tV6qsUOBJHlMpSdXydMRGxtH9i4tKBIiUGcnHUprLSK61dBWXJM6pfY2rbSnHhgMXnvrHSxcujQnKijgwJ1v74G607T96MG963a8v9Xjpntg84wUxbQJpR0K1SNHWjbSMmGoHpH+duVLf8KSnFV/fWBkyGt33+tXqZVs0KbFz66I03V3zfvn/jx4C6pTXuCl4XDY4T0YLM1ZiazcVSdEmbC1/10PUKtFfybY/OnBPTvn797xt74g+blBtbvm5fVYnP3cSZep83fx8fF2rwi6SepCEeyz/lT+Z68d3rsTLZom/JyIIKcIq9e9gifnztvOM/zbD4SHGzzNG1JlGp3lObJx33h4b17cl//Ol5L2TwGtWDSdLc9d06SMGL4hLjzg8GDzvQoDLTm3cXRbNjXU1S47tOdj+cXzBaQd13sdRDTX07OYmY/NwSJSEGjOZRjZ+t7zl59MsI+ozRZns/C5TqtlQXHRlYSSokJUVZRD09SArq4OqbWnpGkEh5JTBNXoWCROTMLDSVMxZfqM8qDgoHxlqGIHPdLw9pn3RbAX9DSiqdsymwRPqktkZnBkZ0jynIoclQQxLOsiJdMcEhrWHahQ3CJtYIlvgM9Fl67jAq37uE/8DxiVY6CruSUzAAAAAElFTkSuQmCC",lM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvqSURBVHgBvVgJcFTlHf+9t+/YfXsmu8km2RwElkADGARETo3jhVFBraB4DTqWOrWO1lJtaceOrU5bC47jUasz1mMsitS7iqKo4AEIoQIxIYYkm2yu3U32Pt++o997yLGQBKgz/WVe8vbb7/2/3/f7/tcLhdPE43d5+WL0l5jMbDnPYgrNUtUMBRvLGXiKogyqqsqyJGckBTFFgS+TFfsSEjc0PebtnfNsc/5016FGG9yzejbbZW9fUO5mL3J6ptQzvDBLMDEeo5FnWY4HDWRFleHzeVUWJZmRpTxUWQFNK6qR52SzVaCh5CkpJ4rJVBqKTA0mk/HORODQgf7+5E7ZV/vmik2t4riE3vz9BIfLFr/NVe69WLBYFpltNksoDrR0RNHek8LQcAZd/UlEExLCCQWZjASKUkGUIRcFg4GGpKhgyV+DAbCaaFSUmuB2GlFTxsNbJWCa142KoixSSVHOpiNbh3q7Nnb7cu/f+rfUUAGhjx623VBRXfmo1V7s7o/y+HDnCLbuHECHPw/OyMNmYaFKOZQ5ObnpfK/BaVWwZn0z1q2ZL3KGDPfSv3uxqqkYQ8EEnngjjJ8ttcIXkNETorD72xhqq4rRM5BALidikofBopkuNDV60TBZwEgg4Ovx9dx3yX39mzQuhufvMU6YvWDBJ182+21/eH4QDz/Xic92BzB9igfFNmDWtEo0zjRizvQymHiVrve64BvMwkZOJZVOGPIqD55RoBDCriKTfv/eV1HEMwbMncLgkD+Ny8/l4SmhkcgA8+t5vPtlGBve82Hz5wOYVOt2zJ83e/GC6sDrG7clo3RFqXGpQpmY5z5U4a2tgLfGoUt3zfkuLL+oDCyjYmljGc6pt+hyljqJ9BPNUGgGogSkszIsAoOzp9qQTibIDAXlpTasXuoCOUv86Q4PJrgp/RgdVg63L6Fx3QUOlDpoYseIe9cfgD+QLitzWX6urUurtMXT192GeDoPu5CHiT0cEHUTHZjX4AbxYwyFGcTSDOx2G/J5Gf5gTgkGI1jZVIeFDQ60dEaJKnEIVgc6Byicd5ZAHDlD+Mj47bN+DIQVWC2CfvUEDbhyvpFslEKJVUSxnUNgOApeMHHaugxDKRTDcmSXHGRZhrPIivMXVKKnPwKLxUp2RWPTlh4ksxTCcZk4eTvaOgfpg91JXHX3VkgkzlNEJSNH4RWOIXNEZLNmdPRJ8DiBkZgCP/Elt4sGb+LxHfElo5Gs4yoGTeVIkOT14BBlVdEJKWI2a7UVEyXiJHIyWH2lE81dHF76IE6UGSbHQmnKH4WUl+DzJfX7CFn87hvqsGReEaR0P3bsJxHZx+Cdr9LISyrIxnV8vI+F0cSQCCQRGuPREaSRJ8nKJFDEr7LgWQaMrEg6IZJKkg5nCZnsw+f7s/imV0QkKWLMNHXc0NwZJUgnhvHSm35wnAEyZcQn/4lCPeGRPMlTRvKTlykMRAzkImYoA7buZ/UNmolymaG4vkuGUtV+nj28SiCqQmIwLiRJOnr/9YEQcWQeDrNCjKrgmCQWTmOJA7OorXZhw5YRBEfSSKfTsFqtBXY01f0hPZmSI2QRSmXSulPLktrFk7NnaBVyXtQT3XjI5XIFn1u6c9jRKsFuFaBl8d3f5fH2lxn8c/MArmys0eckE0niV9mTbImiSI6LhonJEmL8iK5QYEQMKXIOgpEmTqYcnsTzo5JRyLlHI9GCMRvxg4fvqMTyS70IBNMoLTFhz/4+RKMxbPh0+Hs1VAz0D6CkpARW2zGlctkcikg+Q6YPHG1q0xXihNxghkhqJ9lYMDK6vGMhPBImYX+sTl6xwIrmDY1YMofBsH8fil127Nndi/MWNsBIwt5BRws2EwgEQLIyhgaHEAwEkUgkUO1miU0J1WfVteiEblmHFImIQbuFAc/RyKQzoyoTCoXIro8tsHqZExuevhtlU6+Fe1IjWKMDyeEuTKxvQMs3B+FyV5B8w6GIpI3joW0omUwiHo/r/lhK8rAqKdHJTZvjOiHtF1Gos26CHSpF66GvPaTJrPlLJBxBb08vYuQIjsfVjSWEqahpDNo8EQaGh79nEEYmhbYD7ejq6MaMGRPQNMuA8TDZY4Ci0q1HPusxFQ/07q+fNHURYaQT0WQdD4LRgFpSDgY7PkNFQy1U2gRbyURUiRnImUFY7A4kiJojgV4IPDWmHdJHYXIVDxlM+5ExXaFgMLZjSo0VJUWcPulUuHFJMSQxjc6DhwCZKMfYYaq8EmXe82GgsqieWHt4t7wDw7Gxo9Zm5kj1t0CWxF0FhKJR5h0ln5YmVZrHjLAjKHca8MBdS1AzcyWqaquRGvwalDiIXPQ75MUkqfp52LhBMAaShaMjsJvHtjW1hoXVqJBgSe8rIHTTE+F4MpX/Zi6p6DRNj0toYUMxHO7JyIR2w1M3Dya7B8Md76B733vIE58LhSX09WfgLtHKBQeteRwLi0gSVWlu/8X3+3YeGTual4f9rR8sOnvaHKvZj3EiHxWOLFq3P6fnLCm3BxzJ8r5+FedcuAJD/m9hs1sxHIwiHM7DW+zG7UtpDMQNeH17oVHNNRY3CMR/TJ8fP36Uvq9rZIOnhFUXnmXFeJg3TSBzh3DwYAAtbSns3Z+E90f1EKg+DJI2pq0thJxkJCGtIhwKYNveHOmBONx1laXAzo9qLZjoERAJDP5rVELXPya2hYej25oWV43p2KVFDCptpDMsZhFOHZsT6muFr3UH6WmMpJcWEQ1HkclTMJoZNB/M4bK1UTzxVrLA1orzWFKqpI7GNf5toxLSkIzFXr1kvjPnKRVGJeQwa5Vbxq5OCpv3HoueUCiLeFJGKhYlhVVBhJBd966Cd3dJyIzybmEVWNKyOJBRK5+ktGZoLEItbQMbxUy2+87rJmJ0hVgUFxnw1NtphMiGG6Zb0EeqfSxDYShTCqfThGRKwmekKvWEZHSQ7tFsZk+yc/V5ZpgFs2pC6M0TvysgdOtj0ai/veXpG5uqc66ik8O/cQaPFp+K/mEZl8zhyL1CcimFHvKG8f5XQVISSJQNS2gfOLzpEpsCg1L4jmg2sVh9hR2STD0+47YW/7iENBzyJ1/KpbO++1fVFYxrfjW1RsVfX0tjdZMJi86Zhj9vzGKaR8FnLQpe/iiBm9Zl8KuXVXQOHu6Zyp00JldzBXZuuMgCi4mVpWT6MZwu9r4wd+XAx8uG6yc5VIZh9OvOZVb17T+WqBfOtqhtz5eq119g0cdJc3V0zokXyxZ+N8FjVXc/U63u/PvMNWOtPWrWOrv7so2ZRKztqd/MIg2UATO9HFZdakTnEIuBdAUeeMWCLfsOpzAtvMfC8c2e1uKuWW6GYHH7zp2ybEx1Ri3FD27bpv54Af3F1LqqW0gPbdzdEoaBNWFrq428fdAIkkQnko5gtFblRBBl4HA4cMW5LH5ylVv1dfdd7L15c/8ZEdLwwgeR8LJz2MyFiyct3v5NhHtjOwkr1lqQoxLxBE5FpryiHJPLJKy9zkBeKi2PNv6i+8XxnjllaW9/dc5blLVy6TX3fEEFYhQJbac+rjVtw6RpMwmCvrB2PJpiWheoNV7Ef1DhqSD9cgbrVwuoKnMeqL9h11mnWo8+1YQ69+XXK6lI8/MPzZcsXO5oi6sV4VK3W3+bMJlMEAgxp8uJmgk1KCouQlVVFfmPTBprVxjgMtO+g76+C3AaOCUh6oIHs92dPcvNSrj5Hw/Oz2eSkYJXoZPmU4dVzIspPLBSRf0EY7S7O3DhNWv7R3AaOHU39j1e+529tmHWnE3RNDV7xf17wAou/ahGQz6XwCM/dRF1cyO9A4kFl6/t/+40lzm1Qkew4qFY995dX17rEJjmd9bPEG1cYlSleCqJFx+Yium11r7egdwZkTkjQhpW/iXr62o/eK1VMH/++iOzMbUij1QqpX+nkfOWyXj54bPhttOHOtt7Gi9f231GZDSc9pEdD/8Hy4sjwY71ReV1q57Z1IZXt4Rw2cIi/HrVFMQjI9sSoZHr597ZOoT/N3Y8WXtv8NNrUuHmtWpo+83Zjx+t/yV+IP4nhY7H1nW1NaScXcoU1X107i1buvED8V/2DVpx4/vHswAAAABJRU5ErkJggg==",cM="/asset/assets/bugatti-7d6c0d57.png",uM="/asset/assets/fiat1-5a4b9600.png",dM="/asset/assets/fiat2-358c5d2d.png",fM="/asset/assets/fiat3-7ff21f7b.png",hM="/asset/assets/fiat4-553d33e7.png",pM="/asset/assets/benz1-26cdcef8.png",mM="/asset/assets/benz2-a286aed3.png",gM="/asset/assets/benz3-ef38daee.png",wM="/asset/assets/benz4-b8e0e733.png",yM="/asset/assets/porsche1-b91a7e51.png",bM="/asset/assets/porsche2-499046be.png",vM="/asset/assets/porsche3-27bd362b.png",xM="/asset/assets/porsche4-9dca6917.png",CM="/asset/assets/bnw1-cd39a388.png",EM="/asset/assets/bnw2-d2433cde.png",SM="/asset/assets/bnw3-d1faece3.png",AM="/asset/assets/bnw4-c39d05dc.png",TM="/asset/assets/lamborghini1-16f77960.png",_M="/asset/assets/lamborghini2-19405f76.png",NM="/asset/assets/lamborghini3-21abca99.png",PM="/asset/assets/lamborghini4-122b4db4.png",kM="/asset/assets/bugatti1-8c987485.png",DM="/asset/assets/bugatti2-9765155d.png",OM="/asset/assets/bugatti3-37b23b80.png",IM="/asset/assets/bugatti4-fa543edc.png",Xt=[{title:"MEXA",subtitle:["model","first model","second model","third model","forth model"],icon:nM,nextCash:[.4345,1.3125,2.625,4.375],prices:[5,10,15,20],min:0,images:[uM,dM,fM,hM]},{title:"CUBIX",subtitle:["model","first model","second model","third model","forth model"],icon:oM,nextCash:[4.583,10.08,16.5,23.83],prices:[50,60,70,80],min:0,images:[pM,mM,gM,wM]},{title:"LUMINAR",subtitle:["model","first model","second model","third model","forth model"],icon:aM,nextCash:[9.583,23.95,43.125,67.08],prices:[100,150,200,250],min:0,images:[CM,EM,SM,AM]},{title:"Porsche",subtitle:["model","first model","second model","third model","forth model"],icon:sM,nextCash:[50,110,180,260],prices:[500,600,700,800],min:0,images:[yM,bM,vM,xM]},{title:"Lamborghini",subtitle:["model","first model","second model","third model","forth model"],icon:lM,nextCash:[104.16,260.41,468.75,729.16],prices:[1e3,1500,2e3,2500],images:[TM,_M,NM,PM],min:5e4},{title:"Bugatti",subtitle:["model","first model","second model","third model","forth model"],icon:cM,nextCash:[541.66,1191.66,1950,2816.66],prices:[5e3,6e3,7e3,8e3],images:[kM,DM,OM,IM],min:1e5}],sn=()=>{const e=W.useContext(ux);if(!e)throw Error("You must provide Contract Context to our components");return e},RM="/asset/assets/starOff-8aa7729c.svg",jM="/asset/assets/starOn-cfb33524.svg",Gg=({level:e,className:t="w-4 lg:w-5 xl:w-7"})=>{let n=[],r=e;for(let i=0;i<4;i++)i<r?n.push(jM):i>r&&n.push(RM);return A.jsx(A.Fragment,{children:n.map((i,o)=>A.jsx("img",{src:i,alt:"star",className:t},o))})},u0=()=>{const e=W.useContext(dx);if(!e)throw Error("You must provide Contract Context to our components");return e},Oe={CONNECT:"You must connect wallet first",WAIT:"Wait for confirmation",COPY:"Copied Successfully",BUYCAR:"You need to buy your first car",ENOUGHCASH:"You don't have enough cash",ENOUGHTOOLS:"You don't have any tools",LAUNCH:"The project has not been launched yet"},Fe=(e,t=2)=>{t&&(e=Number(e).toFixed(t));const n=e.toString().split(".");return n[0]=n[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,"),n.join(".")};function gx(e){return c0({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"}}]})(e)}const $M=()=>{var x;const{carIndex:e,isProjectLaunch:t,setModalType:n}=xn(),{userData:r}=sn(),i={address:St.web3.projectContract,abi:ai},o=(x=r==null?void 0:r[1])==null?void 0:x[e],{data:s}=d6({...i,functionName:"getUpgradeProfit",args:[e,o+1],allowFailure:!1,watch:!0,structuralSharing:(C,v)=>C===v?C:v}),a=s?Fe(Number(Ne(s)/24)):0,l={creator:Xt[e].title,price:Xt[e].prices[o],level:o,nextCash:a},{address:c}=Vr(),{upgradeGarage:u,setIsLockedBtn:d,isLockedBtn:h}=u0(),m=()=>{n(ot.EXCHANGE),ee.dismiss("tools")},w=()=>{var C;t?c?Number(Ne((C=r==null?void 0:r[0])==null?void 0:C[0]))>=l.price?(d(!0),h||(u({args:[e]}),ee.loading("Wait for confirmation",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.custom(A.jsx("div",{className:`  text-white  flex flex-col overflow-hidden 
          `,children:A.jsxs("div",{className:"border border-white/50",children:[A.jsxs("div",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3",children:[A.jsx(gx,{fill:"#ff4b4b",className:"text-2xl"}),A.jsx("span",{className:"",children:Oe.ENOUGHTOOLS})]}),A.jsx("div",{onClick:m,className:"text-center py-3 bg-black/50 backdrop-blur-sm group cursor-pointer mt-0 m-0.5",children:A.jsx("button",{className:"text-white font-bold group-hover:-translate-y-0.5 transition duration-100",children:"Buy Tools"})})]})}),{duration:5e3,id:"tools"}):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)};return A.jsxs(da,{title:"BUY",icon:Xt[e].icon,children:[A.jsx("div",{className:"absolute inset-y-0 right-0 h-full w-[110%] bg-opacity-[0.25] bg-black z-[1] buy-car-box--overlay"}),A.jsxs("div",{className:"relative h-[130px] xl:h-[210px] bg-white backdrop-blur-sm bg-opacity-[.09]",children:[A.jsx("span",{className:"text-[120px] md:text-[180px] xl:text-[200px] leading-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white z-[2] opacity-10",children:"?"}),A.jsx("img",{src:hx,className:"absolute object-contain z-[1] -bottom-6 left-1/2 -translate-x-1/2 w-2/3 mx-auto h-full"}),A.jsx("div",{className:"absolute -bottom-0.5 bg-[#27272799] h-[20%] inset-x-0 w-full"})]}),A.jsxs("div",{className:"z-[1] relative px-4 py-6 gap-y-2 flex flex-col bg-black/40",children:[A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Creator"}),A.jsx("span",{children:l.creator})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Price"}),A.jsxs("span",{children:[l.price," Tools"]})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Level"}),A.jsx("span",{children:l.level+1})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Yield per hour"}),A.jsxs("span",{children:["+ ",l.nextCash]})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Power"}),A.jsx("div",{className:"flex justify-center items-center gap-0.5",children:A.jsx(Gg,{className:"w-4 xl:w-5",level:l.level})})]})]}),A.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#343E60] to-transparent w-full h-[1px] mt-2 mb-0.5 "}),A.jsx("div",{onClick:w,className:"relative cursor-pointer group py-7 md:py-[38px] btn-linear rounded-b-xl z-10",children:A.jsx("span",{className:"absolute left-1/2 top-1/2 group-hover:-translate-y-[58%] transition duration-300 text-2xl sm:text-3xl cursor-pointer exchange-text-button lg:text-3xl font-bold xl:text-4xl -translate-y-1/2 -translate-x-1/2",children:"BUY"})})]})},Gd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARpSURBVHgBvZdfTFtVHMe/p1QcUOgFpKWMQgtMtgFyJyj7E00DxKAxQsxiMp+IL4sPZjzuZSY+bXsa03cHMdEZFSETHcvkj4EMbTbaggyD2prxpwXEjhZsodzj715oV7Y2dAb6TW567z2n53O/v/O75/wuQwIyiRYhBLXIJKmZM1hUYCYOCHIbA7wSYGOc20IqNjRv+7E7kTHZbkAJ6jZwfi4MSmBAl8R4pxqpHS7bTVe8finxGoxifSu46gcCNtHlASQugYFZAKlFayjxPnQ77QmDi8SGdnB28SmBTzwAHS1afamw4vmzb1ewUWzoAMdZ7JUYjmvzS0wrHmdPXPCW0z2EPpL4uPMIeGtOlfDuj8i5YChxhedcyWqT2GSS+MYAJZIJ+yuvj22avbZBr0q+khBqTQJUlqCRVOfkE8VxUXWDM0lgWYprNWVxC+eJQ7MyNag4cgj5Oh1Sn1FH7hfocyPn//gDuGefgGN8MtYQgoaSLUWrM58FY8exi46Wl+Gdt9/A8yVFNOgkfrlnx4PZeTxL8NYzzcjUZCAY2sTS0jL8Ph9yn8vF5NR0zLEYZ141QcVYjS+Klcpgi4tL0GRkoLjQgOzsHGTn5ODjSxdgyMtGYYEeKz4/Zj1LmFtYxqh1DAvLD7G4sIjZeU8kQnKfaMnrvZomWeRRN0+erEPjqRrcGhjB0PDPyh/fbGpA/at1yNFmofJIGQ5sh7jr+358ePGq0ueTyxdQc6wS6+sbKNBthX3Ft6pMy6fXb+Dmrf5HjsFMzFjdEOGmpaej69oV3B2fQn5eLoIbIdSQ85E7Vqyth1BbVQ6jQY8UAjuoz92JKbwkVqHu2FHE0/Ubt3H//jQZGY5EQZY6ulNFeSmFU0Bp0UFYbRMQBC2mf3ei0KAjWCoO6vPIXQYck9OYmXcjIy0NX3zzXQTsW13D5LQTE79OKW5Pv/Ua/GsBrP0bgDZLsxMs76fhLU+eCzlM8nHqZTGuCz8BVgMhNFL4Zdeev7249nkXgoEgDpWacaJWpPnPVx7yldoqrBP4y297o4eg5AJ3UdQVituzCJ9/jZIqfQdoZs4D97KXuqlQZjRgjGDvUobfsdpRSFHQ5wo4/8F7SiSsYw589nUvfvvDBTc5nIlyGRaXCwfjC/VXKLPbwjflTD1RW43KisM4XFoc07Ecmc6vehFaD+J0y+sYHLHip+FRJbwJifN2Vig2WqhsGUAStSmxFpUaIZs8z0iauGtu/HaPykU7Bb3R7UiSaHnukH+V3UmlCl1NjmvuCqmkTvlMKQS8bldAozcHGWNN2EdJnLXN2weGImBZPo9zVKs3C4lsGP9LlMkzjv7L4csdNRcVZH1afYmZFlMRe6uOB47+96NvPFFlErx7T52T08ehMcHb8L5MnfkvpjhnCX1BxJCXMvg8hfejWI1xvyR8C05buqG4R81TvLRzm57iAQjIL/lV0pmF7USKJYYEZayyNNNabdkuHORDiIDoNWEcgwTs9qdwu1xF7jbef7CXxOmvRxzvAAAAAElFTkSuQmCC",MM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOySURBVHgBrVdfSFNRGP/uTWUorpV/XhRc/oGUqQOFwocyMFAI3aMzRKEH8Ul9UkjIkCwDcRY9CEYTw4moaW+BgeJTpTX/sL1MuULiw6SmopZsO33n5B3Xdbd7rvSDcc495zvnd75/53wTgANmm82UYDBYQRDq8LMSWzMQYmKTghCAcNiNrZuEQoubk5OzPHsKmoTJye3YbYsQaYAASAIho0EApzQxIYFe4tz6+mZRFAd5CdUOgE3Ppss1qjZ/SW0wr6HBIQI8xa4BLgjUyIQ/29XiYtOPjY0PmsQFdrsTmxbQwI2iIjAmJ8Pe/r6W6M0rJSXmn+vrczGJqaY8pO/7+qClthbsVVVwcHQEqz5fXHnU3BqtuSh3CtCnGBRtaiQLQ0OQnZHBvrOwLTSbI/N3y8sj/aqyMvg6MgJN1dVq/O15dnvTOeLr9fVmTIdHatKpKSmM7FVHB/s+RA2/+/2ReblPD/a8tRVS0fxxNHfQTKF9ZmpTSQlNGZua8BevF+5VVLCNqU/nV1ZgfnmZRi0sra7Cy5kZyDSZ4G13N6Rj65Ek6BoejsVtEBMSfqHJFxlxmsXyhvKrSfoxeH6fnsKt0lKwFhSw/KPkS2tr8BkPZUhMhNednZCblcW0f9DfD4fHxxBbbcFqzM8fFtDuNtzsHWjgYWMjNNfUsL5nezuyeVFOTsS893t72WE0QcidBCS9DRx4MjbGUqgQiShZNF5MTfGRUuDVS4PLCpxoHRhQHf/k8TBf60ClSG3OK72zt6fqP2p6nTCLeu9itXS5jCmnEyZRj3TW2SXyz3h6OuiFyN5TTmTHIo4xHgcBqrHEK21UmPlA4WtjnNtKFYS4qY8XeOWVmtV2dbEUY8To41Q95FitUOI5Xnl5c/oi0Qj34vUow6gjwIggLIhBg8HN62fZx96z9PEq0og3wGhlsjk+PidKTicldfAskk0t5y31s5zX2ZwBhk+vk7YsnYJJSUM8WstBtKN4Fj1n5ubxMdUWi8DRCDHTmpDHWgujTa3sc6ZUj1x5Ri4Qn8tFzR3X5LJWSmIaZBQct5dDWXGeq7loTZRWXHwNYjwc1NTfsL76iO+xDH8gwF4t1/w8bO3uqi1DLwpOVKz13JiaYL7dPohNO/wfOJC0I3pQta5mmlss28Lfl+tCBT0NViEc7vJNTKjGzqVY65DcnWmxzIVFMYBmMXMfgGYHIc+CJyf2renpxZhiwAmsueuEUKgSRNHK3nDlnzZCJPzjtoBzs0i4Ks3OaqbmH6kXZlmypv4YAAAAAElFTkSuQmCC",Qd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgBtVd7TFNXGP/d24oV3agPfISpReoeQjtioquPOYzGzGhms8yMMpP5SHzEB2zJFsiEjKmT/SOdM2bMOHABIRI2MJsZyxhgTJhGpQhEMmAryBhvyvsh7d13DnAD5UKLwV/SnnPvefzO9zzfFeAFdGazVq3RhEIQ9tBjGLU6SJKWDwqCAy6XjVqb5HQWVt+4ke3NnoJHQl/fKOpGykQeIAF2QZKuDQEp9owMO6ZLvCo8fL8oioneEiodgJrPq9PTrymNq5ReBkVEWEXgPHU1eEaQRFr6mRcYDNq2srJcj8SrLZYUao5g5mCabzTq2ktLcyYlZpLOMCkHSR7qLrlMvJpsimH1ynjJ3x+dvb2e9iWHFqBbuhQvL18OlyShu69PaZppvsFgby8rK5GJXw0P10mCkExd2ZH8tVr8dPYsNhkMsFVVoaO7W5E0ODAQF44fx6cREdhpMuHP8nLUNjUpH5BC8UW9PslRUdEvshdDorifvFA3dlJLRwce19biTaMRabGxihuFEGl6XBzeWLMG/YOD+OzKFdwpLcUUYPkgknU4McXdh+4zJFLZV2lpqGlshHbePOzesGHCLgd37cKc2bN5v7iyEr8UFclj727ZwtdNFFuIYvlBFWSxmOnxKBTQ2tmJH3Jz0dDWhnOHD3MV/vXkiTz+9vr13K4MK5Ysgb+fH/KLi3Fg5058cegQ79e3tLhvqxHV6lw16f0teMCPt2/zNuHIEaYK/DwiWRHZc/fGjfI8y/bt0C1bhg3BwXC6XGhobVXekFKvmppQeAGZ/OhRthAl5HDHzGZuEubVo2CkDHcePUJdc/Nk24WpFhiNLHa9ylCPa2pQWVeHbyIjUUH93Hv3kFlQgB2kch+1Wp73H0l68uJFdPb0TLaVRtBbLBKmgQCKbSbVebI5Q3peHgafPuWHej0oCCqVCt/dvMmdciqoMQ0wB0qOjsa51FT5nXnzZiRmZuKPhw+RVVjo9V5M1ezam1TVLJG8s2kTlzL+4EEELFqEzPx89FHc6gMCeDiZKI53rFvHVd/b3w8v4BD0ERHF5CGKDmZctQrfx8TAb+7c8asoi+U9eIByux1Re/fipNWKCydO8Oy2j7Jds8MxNa0kFYjsT2ls9qxZsJ46hXlz5nA7fknqHSBbMrD225wc/H7/Pneg+AMH8PGlS/CjhJF6+jTX0pSgaoUR5yiNvbJiBZYvXozS6mrEXb2K5Fu3kECZjIElFXtDA/fefWfO8MNNh5zuhQJxSKOx8brJDb0DAzxGfUhyJj0DSw4MTqdTnvcvZaYPSL1jyZnnMyd8wdd3IilVJtXXr+eoHDZbP92VzLnCxk5g9jKRQ4Xq9di6di3e37YNm+mmGhwaQixpoGeME7V3deHXu3fx3tatPEf7ajRYROnzNzJFI6XbcVqWJCvdy4XDt5OPz9fuUrOU98nlyzz5v7ZyJYJ1OvTQPRuTlISm9vYJkjDJmdo7RpJGdX09/qGfu7RUBPIaTM51lEhYWCVCAUxqdpAasqunwoBFQCCZhBF3uc0l4v2jxd+4KpPIGXEUng+sVenpH40+jKu5WE200GAIhJcXh7egSySFSI+NfTehyiTybFaYUdeEmYHVnVSReIQ8d2FISA2dlEn+TAU9c1bB5YquysiIVxpWTbaOyG2LQ0JyXKLoEIbrMe8OwKJDkhKG+vosf2dlTXprCPASVHPvEZzOMIgi+3gLHffRJkl2+nAroLFsIiyxZ2c7PO33PwgCEg9J1UtNAAAAAElFTkSuQmCC",lu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASGSURBVHgB3ZlfaFtVHMd/5+Y2TdabNE2lSbWlhMxpFc3APwwRH4ZaRCVNMwf6kOBeFOPG2INv+jDQRx+MHYIwyMQHdUnaoYX5MGEvg+1h7QQ76OoQNpPuX7r1pvlz/5yd390S2iy5yU2z7LIPhNycP/d+7+/8zjm/3wmAySHQJqHUDwFZlbYTCxfgKGynlAqEQB/WUQp5IDRLCZclFC5xYFlIT326AG1gSOAHv04LEk/DTEC4IqZVVKArQGFeVgrH5vZ+kW21X0sCUZjM0ygFmIIOoFJ6slWhTQVOpuNhqpKoUYs1Ay1KVEjM7tl/Uq+drsBQ6vtYp6zWCOa7ydnw/iON6usKxCEt83CYAA1AF6BAl60yd+i3vTGxto6r16Gb4hACxF/m1cP16h4QiMPaTXEVmMhAMBn/rLZ8k8Dg8fjEw/Y5PQgh4fePx8Mby6oCmd95CQdReMRwHIngHKj85isXUg9EgBKPXud0KLYbOkQoPX2qXjmbtULZokbYpTazNQui9dh8nwCTgENdsaImULOeyWAriTYX7vkgVXeC6aDaZOExKqEge1rpci57OdOo7hWvb9hI+2agL4ZS3wV4BRQ/12Knb87MLTaqYxNo2Ej7VlDAwrQRMOHw3oe5Hk+o6m0nbu3vtfNPCi67w2q3ePoc9nptdo+NPyGWS/JauaD8L64WbpcKMhiAcMTP1kHSkv+9Ouwb8Ar9vevsgfYea09eKktLuRVRlErS2cy/q/teeH28ts+p/xZvOK12fsQ5YHvG7XV4+py2POsv9NosWfFOEfvpPpSCwKMz6rX5aHzX6JjTLUyf/2vpbOZyDgxyp1yQ/7lReCBKeUpw2w6+/NbTF65fyeGL1OuL2prOjzd9z42sK5KMD4IOclW8VWTWl/fseMmn145nwYGoZ8UvT8+cjzy/y3f0nY9fY297Hd84I66WFm9m1ja2++XiuSXB2lvdOtH3au816nTbdg6NDvhdQ8IOt8dVkMry12fm/m70bE3bZPrIz6BNFH3Ql54d9DpeHBpxjTkHhUFbn43tSdpdCrKkiclLJaWoSBJeD9oEG367bNvsJSxjmdYVMSdeW18rXrh2NXfxZkZsOiosI+RZbrDMxrmpQLwZ+mA9P0TxiXf3vVFbHv3j6OmtuAbmLRymgrBFGonYst8Sbp6zgLIMJkVl2rj01IEFdEYwGZRA9nem7f4yQ5JgMqhKtaMSTaBVhhSYDV5J4JcmEPNRTKDBJODRyIngwRW8ru4kVoU7ZgZfRN+rWA+pCkQrchaSgEcMy48TFeshm/bidDCWaneobxXzxdoPGASfPROK/QmbBNchmIp/i5k+dBMCl2ZCn39SW1w3mmEHOV/hgQ50j3nHNuehehW6oTSelWCOCg+Rto7fNjKZnn6b3SbK9uymAYURcMWgoCZOTB3QXYNbSkY+nP3RU1DL0U6dPqDVnEJ/4qeJSL5ZW0PZUlUoHs8ZtOi9NVZNOvtcyVaEtSVwI++xpNoCFjbTqZ/91eBlC6y3EplrkTBhQ8gCTgpkAaMS3PjhceQue3AIggDmuOIAAAAASUVORK5CYII=",lb="/asset/assets/arrowBottom-019ba16c.svg";function BM(){const[e,t]=W.useState("");return W.useEffect(()=>{try{if(window.location.href.includes("?ref=")){let n=window.location.href.split("?ref=")[1];n&&t(n.substring(0,42))}else if(localStorage.getItem("baseRef")){let n=localStorage.getItem("baseRef");n&&t(n.substring(0,42))}else t(St.ownerWallet)}catch(n){console.log("useReferralAccount: ",n.message)}},[]),e}const FM=()=>{var z,q;const[e,t]=W.useState(!0),[n,r]=W.useState(!0),[i,o]=W.useState(!1),[s,a]=W.useState(!1),[l,c]=W.useState(""),[u,d]=W.useState(""),h=()=>{o(H=>!H)},m=()=>{a(H=>!H)},w=()=>{!n&&!e?ee.error("You can't select USDT to USDT",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):t(H=>!H)},x=()=>{n&&e?ee.error("You can't select USDT to USDT",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):r(H=>!H)},{address:C}=Vr(),v=BM(),{tokenData:p,userData:y}=sn(),{setIsLockedBtn:E,isLockedBtn:S,withdrawCash:T,buyTools:f,convertCash:_,enable:D}=u0(),{isProjectLaunch:O}=xn(),$=()=>{O?C?(E(!0),S||(n&&e&&(Number(l)>Number(Ne(p==null?void 0:p[0]))?D({args:[St.web3.projectContract,String(p==null?void 0:p[1])]}):f({args:[v||C,H0(String(l))]})),ee.loading(Oe.WAIT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)},Y=()=>{var H;O?C?Number(Ne((H=y==null?void 0:y[0])==null?void 0:H[1]))>l?(E(!0),S||(console.log(H0(String(l))),_({args:[H0(String(l))]}),ee.loading(Oe.WAIT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.error(Oe.ENOUGHCASH,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)},te=()=>{O?C?(E(!0),S||(T(),ee.loading(Oe.WAIT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)},V=H=>{const G=Number(H.target.value);G===0?(d(""),c("")):e&&n?(d(G),c(G)):!e&&n&&(c(G),d(Number(G/100).toFixed(3)))},L=H=>{const G=Number(H.target.value);G===0?(d(""),c("")):e&&n?(d(G),c(G)):!e&&n&&(d(G),c(G*100))};console.log(p),W.useEffect(()=>{var H,G;!n&&!e&&(d(Number(Number(Ne((H=y==null?void 0:y[0])==null?void 0:H[1]))/100).toFixed(2)),c(Number(Number(Ne((G=y==null?void 0:y[0])==null?void 0:G[1]))).toFixed(2)))},[e,n]);const F=n&&e?"USDT to Tools":!n&&!e?"Cash to USDT":"Cash to Tools",U=n&&e?Number(l)>Number(Ne(p==null?void 0:p[0]))?"Enable":"Swap":!n&&!e?"Withdraw":"Collect",R=n&&e?$:!n&&!e?te:Y;return A.jsxs(da,{title:"EXCHANGE",children:[A.jsxs("div",{className:"relative bg-black backdrop-blur-[4px] bg-opacity-[0.2] rounded-b-2xl",children:[A.jsxs("div",{className:"flex justify-between px-4",children:[A.jsxs("div",{className:"flex flex-col gap-y-1 w-2/3 md:w-auto px-2 py-2.5",children:[A.jsx("span",{className:"md:text-lg",children:"Swap from"}),A.jsx("input",{min:0,disabled:!e&&!n,placeholder:"0",onChange:V,value:l,type:"number",className:"font-bold text-2xl md:text-3xl bg-transparent outline-none w-full md:w-2/3"}),A.jsxs("span",{className:"text-[#A6A0BB] text-sm md:text-base",children:["Balance:"," ",Fe(Number(Ne(e?p==null?void 0:p[1]:(z=y==null?void 0:y[0])==null?void 0:z[1])))]})]}),A.jsxs("div",{onClick:h,className:"flex gap-x-2 relative items-center cursor-pointer h-fit my-auto",children:[A.jsx("img",{className:Le("w-8 object-contain",n?"md:w-9":"md:w-10"),src:e?lu:Gd}),A.jsx("span",{className:"text-sm sm:text-base",children:e?"USDT":"Cash"}),A.jsx("img",{className:`w-2 md:w-2.5 transition duration-200 ${i&&"rotate-90"}`,src:lb}),A.jsxs("div",{onClick:w,className:`transition-all duration-200 z-[4] rounded absolute right-[110%] top-1/2 -translate-y-1/2 ease-out bg-fourth bg-opacity-90 px-2 py-1 flex items-center w-[120%] justify-between ${i?"visible translate-x-0 opacity-100 scale-100":"invisible translate-x-10 opacity-0 scale-50"}`,children:[A.jsx("img",{className:Le("w-8 object-contain",n?"md:w-10":"md:w-9"),src:e?Gd:lu}),A.jsx("span",{children:e?"Cash":"USDT"})]})]})]}),A.jsx("div",{className:"relative",children:A.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#343E60] to-transparent w-full h-[1px]"})}),A.jsxs("div",{className:"flex justify-between px-4",children:[A.jsxs("div",{className:"flex flex-col gap-y-1 w-2/3 md:w-auto px-2 py-2.5",children:[A.jsx("span",{className:"text-lg",children:"Swap to"}),A.jsx("input",{min:0,disabled:!e&&!n,placeholder:"0",onChange:L,value:u,type:"number",className:"font-bold text-2xl md:text-3xl bg-transparent outline-none w-full md:w-2/3"}),A.jsxs("span",{className:"text-[#A6A0BB] text-sm md:text-base",children:["Balance:"," ",Fe(Number(Ne(n?(q=y==null?void 0:y[0])==null?void 0:q[0]:p==null?void 0:p[1])))]})]}),A.jsxs("div",{onClick:m,className:"flex gap-x-2 items-center relative cursor-pointer h-fit my-auto",children:[A.jsx("img",{className:Le("w-8 object-contain",n?"md:w-10":"md:w-9"),src:n?Qd:lu}),A.jsx("span",{className:"text-sm sm:text-base",children:n?"Tools":"USDT"}),A.jsx("img",{className:`w-2 md:w-2.5 transition duration-200 ${e&&!n&&"opacity-30"} ${s&&"rotate-90"}`,src:lb}),A.jsxs("div",{onClick:x,className:`transition-all duration-200 z-[4] rounded absolute right-[110%] top-1/2 -translate-y-1/2  ease-out bg-fourth bg-opacity-90 px-2 py-1 flex items-center w-[120%] justify-between ${s?"visible translate-x-0 opacity-100 scale-100":"invisible translate-x-10 opacity-0 scale-50"}`,children:[A.jsx("img",{className:Le("w-8 object-contain",n?"md:w-9":"md:w-10"),src:n?lu:Qd}),A.jsx("span",{children:n?"USDT":"Tools"})]})]})]})]}),A.jsxs("div",{className:"border-t border-[#343E60] bg-black/20 z-[1] relative px-4 md:px-8 py-4 gap-y-2 flex flex-col text-[#DCDCDC] ",children:[A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Convert"}),A.jsx("span",{children:F})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"You Pay"}),A.jsx("span",{children:Fe(l)})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"You Received"}),A.jsx("span",{children:Fe(u)})]})]}),A.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#343E60] to-transparent w-full h-[1px] mt-2 mb-0.5"}),A.jsx("div",{onClick:R,className:"relative cursor-pointer group py-7 md:py-[38px] btn-linear rounded-b-xl",children:A.jsx("span",{className:"absolute left-1/2 top-1/2 group-hover:-translate-y-[58%] transition duration-300 text-2xl sm:text-3xl cursor-pointer exchange-text-button lg:text-3xl font-bold xl:text-4xl -translate-y-1/2 -translate-x-1/2",children:U})})]})},UM=()=>{var a,l,c,u,d;const{userData:e}=sn(),t=0,n=e==null?void 0:e[1].reduce((h,m)=>h+m,t);let r=0;e==null||e[1].forEach(h=>h>0&&r++);const i=[{title:"Total Investment",value:`${Number(Number(((a=e==null?void 0:e[0])==null?void 0:a[6])||0)/10**18).toFixed(0)} USDT`},{title:"Yield Per Hour",value:`${Fe(Number((e==null?void 0:e[4])||0)/10**18/24)} Cash`},{title:"Available Cash To Collect",value:`${Fe(Number(Number((e==null?void 0:e[3])||0)/10**18)+Number(Number(((l=e==null?void 0:e[0])==null?void 0:l[2])||0)/10**18))} Cash`},{title:"Total Garages",value:`${r}/6`},{title:"Your Level",value:`${n}/24`},{title:"Cash Balance",value:`${Fe(Number(Ne(((c=e==null?void 0:e[0])==null?void 0:c[1])||0)))}`},{title:"Tools Balance",value:`${Fe(Number(Ne(((u=e==null?void 0:e[0])==null?void 0:u[0])||0)),0)}`}],o=h=>{var m,w;return Number(Ne(((m=e==null?void 0:e[2])==null?void 0:m[h])||0))>0?Ne(((w=e==null?void 0:e[2])==null?void 0:w[h])||0)/2:0},s=[{title:"Direct Referrals",value:`${Number((d=e==null?void 0:e[0])==null?void 0:d[5])}`},{title:"Level 1",value:`${Fe(Number(o(0)))} Tools + ${Fe(o(0)*100)} Cash`},{title:"Level 2",value:`${Fe(Number(o(1)))} Tools + ${Fe(o(1)*100)} Cash`},{title:"Level 3",value:`${Fe(Number(o(2)))} Tools + ${Fe(o(2)*100)} Cash`},{title:"Level 4",value:`${Fe(Number(o(3)))} Tools + ${Fe(o(3)*100)} Cash`},{title:"Leadership Bonus",value:`${Fe(Number((e==null?void 0:e[5])||0)/100)}%`}];return A.jsx(da,{title:"STATISTICS",children:A.jsxs("div",{className:"bg-black/70 z-[1] relative px-6 py-6 gap-y-2 md:gap-y-3.5 flex flex-col text-[#DCDCDC] rounded-b-2xl",children:[i.map((h,m)=>A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:h.title}),A.jsx("span",{children:h.value})]},m)),A.jsx("span",{className:"md:text-lg xl:text-xl md:translate-y-2 text-white",children:"DOWNLINES"}),s.map((h,m)=>A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:h.title}),A.jsx("span",{children:h.value})]},m))]})})},LM=()=>{var x;const{carIndex:e,setModalType:t,isProjectLaunch:n}=xn(),{userData:r}=sn(),i=(x=r==null?void 0:r[1])==null?void 0:x[e],o={address:St.web3.projectContract,abi:ai},{data:s}=d6({...o,functionName:"getUpgradeProfit",args:[e,i+1],allowFailure:!1,watch:!0,structuralSharing:(C,v)=>C===v?C:v}),a=s?Fe(Number(Ne(s)/24)):0,l={creator:Xt[e].title,price:Xt[e].prices[i],level:i,nextCash:a},{address:c}=Vr(),{upgradeGarage:u,setIsLockedBtn:d,isLockedBtn:h}=u0(),m=()=>{t(ot.EXCHANGE),ee.dismiss("tools")},w=()=>{var C;n?c?Number(Ne((C=r==null?void 0:r[0])==null?void 0:C[0]))>=l.price?(d(!0),h||(u({args:[e]}),ee.loading("Wait for confirmation",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.custom(A.jsx("div",{className:`  text-white  flex flex-col overflow-hidden 
          `,children:A.jsxs("div",{className:"border border-white/50",children:[A.jsxs("div",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3",children:[A.jsx(gx,{fill:"#ff4b4b",className:"text-2xl"}),A.jsx("span",{className:"",children:Oe.ENOUGHTOOLS})]}),A.jsx("div",{onClick:m,className:"text-center py-3 bg-black/50 backdrop-blur-sm group cursor-pointer mt-0 m-0.5",children:A.jsx("button",{className:"text-white font-bold group-hover:-translate-y-0.5 transition duration-100",children:"Buy Tools"})})]})}),{duration:5e3,id:"tools"}):ee.error("You must connect wallet",{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)};return A.jsxs(da,{title:"UPGRADE",icon:Xt[e].icon,children:[A.jsx("div",{className:"absolute inset-y-0 right-0 h-full w-[110%] bg-opacity-[0.25] bg-black z-[1] buy-car-box--overlay"}),A.jsxs("div",{className:"relative h-[130px] xl:h-[210px] bg-white backdrop-blur-sm bg-opacity-[.09]",children:[A.jsx("span",{className:"text-[120px] md:text-[180px] xl:text-[200px] leading-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white z-[2] opacity-10",children:"?"}),A.jsx("img",{src:hx,className:"absolute object-contain z-[1] -bottom-6 left-1/2 -translate-x-1/2 w-2/3 mx-auto h-full"}),A.jsx("div",{className:"absolute -bottom-0.5 bg-[#27272799] h-[20%] inset-x-0 w-full"})]}),A.jsxs("div",{className:"z-[1] relative px-4 py-6 gap-y-2 flex flex-col",children:[A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Creator"}),A.jsx("span",{children:l.creator})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Price"}),A.jsxs("span",{children:[l.price," Tools"]})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Level"}),A.jsx("span",{children:l.level})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Yield per hour"}),A.jsxs("span",{children:["+ ",l.nextCash]})]}),A.jsxs("div",{className:"bg-[rgba(58,55,76,0.35)] py-1 px-2 w-full bg-opacity-[0.55] flex text-sm sm:text-base md:text-lg justify-between border border-[rgba(90,89,92,0.80)] rounded-lg",children:[A.jsx("span",{children:"Power"}),A.jsx("div",{className:"flex justify-center items-center gap-0.5",children:A.jsx(Gg,{className:"w-4 xl:w-5",level:l.level})})]})]}),A.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#343E60] to-transparent w-full h-[1px] mt-2 mb-0.5"}),A.jsx("div",{onClick:w,className:"relative cursor-pointer group py-7 md:py-[38px] btn-linear rounded-b-xl z-10",children:A.jsx("span",{className:"absolute left-1/2 top-1/2 group-hover:-translate-y-[58%] transition duration-300 text-2xl sm:text-3xl cursor-pointer exchange-text-button lg:text-3xl font-bold xl:text-4xl -translate-y-1/2 -translate-x-1/2",children:"Upgrade"})})]})},zM=()=>{const e=["Smart Garage is an investment smart game based on blockchain technology.  The main currency is USDT on the Binance smart chain.  Become the owner of luxury cars and earn money.  Play and earn","Each garage brings 230% full roi. Then the cars reset and can be bought again."];return A.jsx(da,{title:"ABOUT",children:A.jsx("div",{className:"bg-black/60 z-[1] relative px-6 h-fit py-6 gap-y-3 xl:gap-y-4 flex flex-col overflow-y-auto max-h-[500px] min-h-[350px] custom-scrollbar rounded-b-2xl",children:e.map((t,n)=>A.jsx("p",{className:"text-sm md:text-base xl:text-lg",children:t},n))})})},WM="/asset/assets/bgTelegramLink-3e5f917c.svg",HM=()=>{const{links:e}=qg(),t=[{title:"CHANNEL",link:e==null?void 0:e.telegramChannel},{title:"CHAT",link:e==null?void 0:e.telegramChat}];return A.jsx(da,{title:"TELEGRAM",children:A.jsx("div",{className:"flex flex-col gap-y-2 p-4 modal-linear-content",children:t.map((n,r)=>A.jsx("div",{className:"relative",children:A.jsxs("a",{href:n.link,target:"_blank",rel:"noreferrer",children:[A.jsx("span",{className:"sm:text-xl md:text-2xk absolute inset-0 flex items-center exchange-text-button justify-center",children:n.title}),A.jsx("img",{className:"w-full object-contain",src:WM})]})},r))})})},qM=()=>{const{modalType:e}=xn(),t=()=>{switch(e){case ot.CLOSE:return null;case ot.BUY:return A.jsx($M,{});case ot.UPGRADE:return A.jsx(LM,{});case ot.EXCHANGE:return A.jsx(FM,{});case ot.STATISTICS:return A.jsx(UM,{});case ot.ABOUT:return A.jsx(zM,{});case ot.TELEGRAM:return A.jsx(HM,{})}};return A.jsx(A.Fragment,{children:t()})},VM=()=>{const{userData:e}=sn();let t=0;e==null||e[1].forEach(r=>r>0&&t++);let n=[];for(let r=0;r<7;r++)r<t?n.push(!0):r>t&&n.push(!1);return A.jsx("div",{className:"flex gap-1 xl:gap-2",children:n.map((r,i)=>A.jsx("div",{className:Le("w-3.5 lg:w-4 h-3.5 lg:h-4 xl:h-5 xl:w-5 border rounded-[3px] border-[#414042]",r&&"bg-white")},i))})},wx=e=>{if(typeof e=="string")return e.substring(0,5)+"..."+e.substring(e.length-5,e.length)},GM=()=>{var o,s,a;const{userData:e}=sn(),{setModalType:t}=xn(),{address:n}=Vr(),{open:r}=YC(),i=[{title:"Statistics",onClick:()=>{n?t(ot.STATISTICS):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})}},{title:"Finance",onClick:()=>{n?t(ot.EXCHANGE):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"})}},{title:"About",onClick:()=>{t(ot.ABOUT)}}];return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"relative flex justify-between items-center px-5 xl:px-10 pb-1.5 mb-3 lg:mb-2 border-b-2 xl:border-b-4 border-[#61797F4D] border-opacity-25 rounded-[25px]",children:[A.jsxs("div",{className:"flex flex-col gap-y-1",children:[A.jsx("span",{className:"font-bold text-[18px] lg:text-xl xl:text-2xl 2xl:text-[30px]",children:"GARAGE / CARS"}),A.jsx(VM,{})]}),A.jsxs("div",{className:"hidden lg:flex gap-x-6 xl:gap-x-8 2xl:gap-x-10 justify-center items-center",children:[A.jsx("div",{className:"flex gap-x-12 text-lg xl:text-[27px] font-bold",children:i.map((l,c)=>A.jsx("span",{className:"cursor-pointer hover:text-blue-200 transition duration-200",onClick:l.onClick,children:l.title},c))}),n?A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"flex items-center gap-x-1 xl:gap-x-2 text-base xl:text-[22px]",children:[A.jsx("img",{className:"w-7 xl:w-8",src:MM}),A.jsx("span",{className:"text-[#C7F8FF]",children:Number((o=e==null?void 0:e[0])==null?void 0:o[5])})]}),A.jsxs("div",{className:"flex items-center gap-x-1 xl:gap-x-2 text-base xl:text-[22px]",children:[A.jsx("img",{className:"w-7 xl:w-8",src:Qd}),A.jsx("span",{className:"text-[#C7F8FF]",children:Fe(Number(Ne((s=e==null?void 0:e[0])==null?void 0:s[0])),0)}),A.jsx("span",{className:"text-[#C7F8FF]",children:"TOOLS"})]}),A.jsxs("div",{className:"flex items-center gap-x-1 xl:gap-x-2 text-base xl:text-[22px]",children:[A.jsx("img",{className:"w-7 xl:w-8",src:Gd}),A.jsx("span",{className:"text-[#C7F8FF]",children:Fe(Number(Ne((a=e==null?void 0:e[0])==null?void 0:a[1])))}),A.jsx("span",{className:"text-[#C7F8FF]",children:"CASH"})]})]}):null]}),A.jsx("button",{className:"bg-[#245959] font-sans text-sm md:text-base px-4 py-2 font-medium rounded-lg",onClick:()=>r(),children:n?wx(n):"Connect Wallet"})]}),A.jsx("div",{className:"flex lg:hidden gap-x-12 justify-center items-center",children:A.jsx("div",{className:"flex gap-x-12 text-lg font-bold",children:i.map((l,c)=>A.jsx("span",{className:"cursor-pointer hover:text-blue-200 transition duration-200",onClick:l.onClick,children:l.title},c))})})]})},QM=({children:e})=>{const{isShowIntro:t,isProjectLaunch:n}=xn(),r="px-1.5 xs:px-2 sm:px-6 md:px-8 lg:px-10 xl:px-8 2xl:px-0 max-w-8xl mx-auto";return A.jsxs(A.Fragment,{children:[A.jsx(tM,{}),A.jsx(qM,{}),A.jsxs("div",{className:Le("relative text-white ",r,n?"pt-10":"pt-5",t&&"overflow-y-hidden h-screen"),children:[A.jsx(GM,{}),e]})]})},KM="/asset/assets/bgBuy-f4790bd1.svg",ZM="/asset/assets/brightnessLeft-5220b7b9.svg",YM="/asset/assets/brightnessRight-afe2ccd5.svg",XM="/asset/assets/locked-7cee99cd.svg",JM="/asset/assets/unLocked-2f7981c1.svg";function Kd(e){if(typeof e!="number")return console.error("Input must be a number"),"";if(e>=1e3){const t=["","k","M","B","T"];let n=0;for(;e>=1e3;)e/=1e3,n++;return e.toFixed(0)+t[n]}return e.toString()}const eB=({title:e,icon:t,subtitle:n,price:r,index:i,level:o,isAccess:s})=>{var u,d,h,m;const{userData:a,globalData:l}=sn(),c=s?Number((u=a==null?void 0:a[7])==null?void 0:u[i])/100:0;return A.jsxs("div",{className:"py-2 px-4 gap-y-1 bg-black/25 flex flex-row justify-between overflow-hidden relative xl:py-3 xl:px-6",children:[A.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#343E60] to-transparent w-full h-[1px] opcaity-10 absolute z-[1] -bottom-[0]"}),A.jsxs("div",{className:" flex justify-between flex-col",children:[A.jsxs("div",{className:"flex justify-start items-center gap-x-1 md:gap-x-2",children:[A.jsx("span",{className:Le("font-bold text-xl xl:text-3xl leading-5 capitalize",o===0&&"text-second"),children:e}),A.jsx("div",{className:"flex gap-x-0 md:gap-x-0.5",children:A.jsx(Gg,{className:"w-3.5 lg:w-5 xl:w-6",level:o===0?o:o-1})})]}),A.jsxs("div",{className:Le("",s?"flex items-center justify-start gap-x-2 mt-0.5":""),children:[A.jsx("img",{className:Le("h-5 lg:h-6 xl:h-7 object-contain my-auto z-[2]",s?"":"hidden"),src:t,alt:""}),A.jsxs("div",{className:"text-fifth relative flex text-center md:text-left gap-x-1 w-fit px-2.5 py-0.5 lg:py-1 rounded-full text-[13px] md:text-sm bg-[rgba(55,64,76,0.35)] mt-1",children:[A.jsx("img",{className:Le("w-2.5 md:w-3",s?"hidden":""),src:r<0?XM:JM}),A.jsx("span",{className:"font-ProductSansRegular",children:s?A.jsxs(A.Fragment,{children:[A.jsx("span",{className:"md:hidden",children:"REQUIRED"}),A.jsx("span",{className:"md:block hidden",children:"UP TO 230% PROFIT"})]}):Number(Ne(l==null?void 0:l[1]))<((d=Xt[i])==null?void 0:d.min)?A.jsxs(A.Fragment,{children:[A.jsxs("span",{className:"md:hidden",children:["REQUIRED: $",Kd((h=Xt[i])==null?void 0:h.min)]}),A.jsxs("span",{className:"md:block hidden",children:["TOTAL INVESTMENT REQUIRED: $",Kd((m=Xt[i])==null?void 0:m.min)]})]}):"READY!"})]})]})]}),A.jsx("img",{className:Le("h-7 lg:h-8 xl:h-10 object-contain my-auto z-[2]",s?"hidden":""),src:t,alt:""}),A.jsxs("div",{className:Le("flex items-center relative w-fit",s?"":"hidden"),children:[A.jsxs("span",{className:"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-sm lg:text-base ",children:[c.toFixed(0),"%"]}),A.jsxs("svg",{className:"w-12 md:w-14 lg:w-16",viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("path",{d:"M24.5 0C29.4112 5.85657e-08 34.2091 1.47602 38.271 4.23653L34.8283 9.3024C31.7818 7.23201 28.1834 6.125 24.5 6.125L24.5 0Z",fill:"#BCCCBF",className:Le(c<10?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M38.9031 4.68082C42.876 7.56804 45.8895 11.5826 47.5526 16.2037L41.7894 18.2778C40.5421 14.812 38.282 11.801 35.3024 9.63562L38.9031 4.68082Z",className:Le(c<20?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M47.7649 16.8193C49.3046 21.4829 49.4071 26.5016 48.0592 31.2242L42.1694 29.5432C43.1803 26.0012 43.1034 22.2372 41.9487 18.7394L47.7649 16.8193Z",className:Le(c<30?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M47.845 31.9339C46.3548 36.6136 43.4926 40.7374 39.6297 43.7702L35.8473 38.9527C38.7444 36.678 40.8911 33.5852 42.0087 30.0754L47.845 31.9339Z",className:Le(c<40?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M39.0222 44.2321C35.0668 47.1432 30.3277 48.7983 25.42 48.9827L25.19 42.862C28.8708 42.7237 32.4251 41.4824 35.3917 39.2991L39.0222 44.2321Z",className:Le(c<50?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M24.5 49C19.5888 49 14.7909 47.524 10.729 44.7635L14.1717 39.6976C17.2182 41.768 20.8166 42.875 24.5 42.875L24.5 49Z",className:Le(c<60?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M10.2277 44.4136C6.23589 41.5526 3.19603 37.558 1.50257 32.948L7.25192 30.836C8.52202 34.2935 10.8019 37.2895 13.7958 39.4352L10.2277 44.4136Z",className:Le(c<70?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M1.25015 32.2262C-0.29863 27.5656 -0.410965 22.5471 0.927721 17.8219L6.82079 19.4914C5.81678 23.0353 5.90103 26.7992 7.06261 30.2947L1.25015 32.2262Z",className:Le(c<80?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M1.13658 17.1243C2.61509 12.441 5.46701 8.31002 9.32231 5.26754L13.1167 10.0757C10.2253 12.3575 8.08631 15.4557 6.97743 18.9683L1.13658 17.1243Z",className:Le(c<90?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")}),A.jsx("path",{d:"M9.96275 4.77899C13.916 1.86488 18.6538 0.206141 23.5614 0.0179865L23.796 6.13849C20.1153 6.27961 16.562 7.52366 13.5971 9.70924L9.96275 4.77899Z",className:Le(c<100?"fill-[#BCCCBF] opacity-[0.15]":"fill-[#F4D74D]")})]})]})]})},tB=e=>{var C,v;const{title:t,subtitle:n,icon:r,images:i,level:o,index:s}=e,{address:a}=Vr(),{setModalType:l,setCarIndex:c}=xn(),{userData:u,globalData:d}=sn(),h=()=>{a?(c(s),l(ot.BUY)):ee.error(Oe.CONNECT)},m=()=>{a?(c(s),l(ot.UPGRADE)):ee.error(Oe.CONNECT)},w=Number(Ne((C=u==null?void 0:u[0])==null?void 0:C[0]))-Number(Xt[s].prices[o]),x=o>0?Number((v=u==null?void 0:u[7])==null?void 0:v[s])/100:0;return A.jsxs("div",{className:"w-full p-0.5 rounded-xl overflow-hidden md:rounded-2xl bg-opacity-[0.25] bg-black relative",children:[o===0?A.jsx("div",{className:"absolute inset-y-0 right-0 h-full w-[110%] bg-opacity-[0.25] bg-black z-[2] buy-car-box--overlay"}):null,A.jsx(eB,{level:o,index:s,icon:r,subtitle:n,title:t,isAccess:o>0,price:Kd(w)}),A.jsx("img",{className:"absolute opacity-10 top-0 inset-x-0 w-full",src:mx}),A.jsx("img",{className:"absolute opacity-10 bottom-0 inset-x-0 w-full",src:px}),A.jsx("img",{className:"absolute opacity-10 left-0 inset-y-0 h-full",src:ZM}),A.jsx("img",{className:"absolute opacity-10 right-0 inset-y-0 h-full",src:YM}),A.jsxs("div",{className:"relative",children:[A.jsx("div",{className:Le("absolute inset-x-0 h-1 w-[90%] mx-auto rounded-xl overflow-hidden bg-[rgba(226,226,226,0.20)] bottom-full",o>0?"block":"hidden"),children:A.jsx("div",{className:"absolute top-0 rounded-xl left-0 h-1 bg-[#F4D74D]",style:{width:`${x}%`}})}),o===0?A.jsx(A.Fragment,{children:A.jsx("div",{className:"h-[140px] xl:h-[185px] relative pt-9",children:A.jsx("div",{onClick:()=>{var p,y;return Number(Ne(d==null?void 0:d[1]))>=((p=Xt[s])==null?void 0:p.min)?h():ee.error(`TOTAL INVESTMENT REQUIRED: ${Kd((y=Xt[s])==null?void 0:y.min)}`)},className:"relative h-[60px] xl:h-24 cursor-pointer z-[2]",children:A.jsx("img",{src:KM,className:"absolute object-cover inset-0 w-full h-full"})})})}):A.jsx(A.Fragment,{children:A.jsxs("div",{className:"h-[140px] xl:h-[185px] relative grid grid-cols-2 overflow-hidden",children:[A.jsx("div",{className:"bg-gradient-border-car-box w-full h-[2px] absolute top-1/2 -translate-y-1/2 inset-x-0"}),A.jsx("div",{className:"bg-gradient-border-car-box w-[2px] h-full absolute left-1/2 -translate-x-1/2 inset-y-0"}),Xt[s].images.map((p,y)=>A.jsxs("div",{className:Le("relative h-full z-[2]",y===0||y===3?"bg-black/50":""),children:[A.jsx("div",{className:Le(y===o?"bg-black/50 w-full h-full absolute z-[1]":"hidden")}),y>=o?A.jsx("button",{onClick:()=>y===o?m():ee.error(`You need to buy level ${o+1}`),className:Le("absolute text-fifth font-bold bg-[rgba(28,25,48,0.5)] backdrop-blur-[2px] border border-[#E986EC] text-[15px] lg:text-base w-[80%] lg:w-1/2 left-1/2 -translate-x-1/2 z-[1] top-1/2 -translate-y-1/2 py-1.5 lg:py-2 rounded-full"),children:"BUY"}):null,A.jsx("img",{src:p,className:"absolute object-contain inset-0 w-3/4 p-2 md:p-3.5 md:w-2/3 mx-auto h-full"})]},y))]})})]})]})},nB=()=>{const{userData:e}=sn();return A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 xl:gap-6 px-5 xl:px-10",children:[...Array(6).keys()].map(t=>{var n;return A.jsx(tB,{level:(n=e==null?void 0:e[1])==null?void 0:n[t],index:t,...Xt[t]},t)})})},rB="/asset/assets/tether-d1d3f69d.svg",cb="/asset/assets/background-70c6ae65.svg",cu="/asset/assets/backgroundXs-d568ed93.svg",iB=()=>{var r,i;const{globalData:e}=sn(),{address:t}=Vr(),{userData:n}=sn();return A.jsxs("div",{className:"grid grid-cols-1 custom-grid-media-query justify-center gap-x-6 xs:gap-y-[1vw] xl:gap-x-10 px-5 xl:px-10 mb-3",children:[t?A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"relative flex justify-between items-center w-full py-6 px-9 lg:hidden",children:[A.jsx("img",{src:cu,className:"block lg:hidden absolute object-contain inset-0 w-full h-full "}),A.jsx("div",{className:"z-[1]",children:A.jsx("p",{className:"total-text-linear text-sm md:text-base leading-5 lg:leading-normal w-2/3 lg:w-40 font-bold",children:"TOOLS BALANCE"})}),A.jsxs("div",{className:"flex justify-center gap-x-2 items-center z-[1]",children:[A.jsx("img",{className:"w-7",src:Qd}),A.jsx("span",{className:"text-blue-linear text-lg sm:text-base md:text-xl f lg:text-2xloxl-bold",children:Fe(Number(Ne((r=n==null?void 0:n[0])==null?void 0:r[0])),0)})]})]}),A.jsxs("div",{className:"relative flex justify-between items-center w-full py-6 px-9 lg:hidden",children:[A.jsx("img",{src:cu,className:"block absolute ojbobject-contain inset-0 w-full h-full "}),A.jsx("div",{className:"z-[1]",children:A.jsx("p",{className:"total-text-linear text-sm md:text-base w-2/3 leading-5 lg:leading-normal lg:w-40 font-bold",children:"CASH BALANCE"})}),A.jsxs("div",{className:"flex justify-center gap-x-2 items-center z-[1]",children:[A.jsx("img",{className:"w-7",src:Gd}),A.jsx("span",{className:"text-blue-linear text-lg sm:text-base md:text-xl f lg:text-2xloxl-bold",children:Fe(Number(Ne((i=n==null?void 0:n[0])==null?void 0:i[1])))})]})]})]}):null,A.jsxs("div",{className:"relative flex justify-between items-center w-full py-6 px-9 lg:px-16",children:[A.jsx("img",{src:cb,className:"hidden lg:block absolute ojbobject-contain inset-0 w-full h-full "}),A.jsx("img",{src:cu,className:"block lg:hidden absolute ojbobject-contain inset-0 w-full h-full "}),A.jsx("div",{className:"z-[1]",children:A.jsx("p",{className:"total-text-linear w-2/3 text-sm md:text-base leading-5 lg:leading-6 lg:w-40 font-bold xl:text-2xl lg:text-xl",children:"TOTAL INVESTMENT"})}),A.jsxs("div",{className:"flex justify-center gap-x-2 items-center z-[1]",children:[A.jsx("img",{className:"w-7 lg:w-8 xl:w-9",src:rB}),A.jsx("span",{className:"text-blue-linear text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold",children:Fe(Number(Ne(e==null?void 0:e[1])))})]})]}),A.jsxs("div",{className:"relative flex justify-between items-center w-full py-6 px-9 lg:px-16",children:[A.jsx("img",{src:cb,className:"hidden lg:block absolute ojbobject-contain inset-0 w-full h-full "}),A.jsx("img",{src:cu,className:"block lg:hidden absolute ojbobject-contain inset-0 w-full h-full "}),A.jsx("div",{className:"z-[1]",children:A.jsx("p",{className:"total-text-linear w-2/3 text-sm md:text-base leading-5 lg:leading-6 lg:w-40 font-bold xl:text-2xl lg:text-xl",children:"TOTAL GARAGES"})}),A.jsx("div",{className:"flex justify-center gap-x-2 items-center z-[1]",children:A.jsx("span",{className:"text-blue-linear text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold",children:Number(e==null?void 0:e[0])})})]})]})};var d0={},oB=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(i){e.addRange(i)}),t&&t.focus()}},sB=oB,ub={"text/plain":"Text","text/html":"Url",default:"Text"},aB="Copy to clipboard: #{key}, Enter";function lB(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function cB(e,t){var n,r,i,o,s,a,l=!1;t||(t={}),n=t.debug||!1;try{i=sB(),o=document.createRange(),s=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(u){if(u.stopPropagation(),t.format)if(u.preventDefault(),typeof u.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=ub[t.format]||ub.default;window.clipboardData.setData(d,e)}else u.clipboardData.clearData(),u.clipboardData.setData(t.format,e);t.onCopy&&(u.preventDefault(),t.onCopy(u.clipboardData))}),document.body.appendChild(a),o.selectNodeContents(a),s.addRange(o);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");l=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),r=lB("message"in t?t.message:aB),window.prompt(r,e)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(o):s.removeAllRanges()),a&&document.body.removeChild(a),i()}return l}var uB=cB;function C1(e){"@babel/helpers - typeof";return C1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C1(e)}Object.defineProperty(d0,"__esModule",{value:!0});d0.CopyToClipboard=void 0;var uu=yx(W),dB=yx(uB),fB=["text","onCopy","options","children"];function yx(e){return e&&e.__esModule?e:{default:e}}function db(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?db(Object(n),!0).forEach(function(r){Qg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):db(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hB(e,t){if(e==null)return{};var n=pB(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pB(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gB(e,t,n){return t&&hb(e.prototype,t),n&&hb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E1(e,t)}function E1(e,t){return E1=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},E1(e,t)}function yB(e){var t=vB();return function(){var r=Zd(e),i;if(t){var o=Zd(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return bB(this,i)}}function bB(e,t){if(t&&(C1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bx(e)}function bx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zd(e){return Zd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Zd(e)}function Qg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vx=function(e){wB(n,e);var t=yB(n);function n(){var r;mB(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),Qg(bx(r),"onClick",function(a){var l=r.props,c=l.text,u=l.onCopy,d=l.children,h=l.options,m=uu.default.Children.only(d),w=(0,dB.default)(c,h);u&&u(c,w),m&&m.props&&typeof m.props.onClick=="function"&&m.props.onClick(a)}),r}return gB(n,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var o=i.children,s=hB(i,fB),a=uu.default.Children.only(o);return uu.default.cloneElement(a,fb(fb({},s),{},{onClick:this.onClick}))}}]),n}(uu.default.PureComponent);d0.CopyToClipboard=vx;Qg(vx,"defaultProps",{onCopy:void 0,options:void 0});var xB=d0,S1=xB.CopyToClipboard;S1.CopyToClipboard=S1;var CB=S1;const EB=Gs(CB),SB="/asset/assets/collectCash-38285b94.svg",AB="/asset/assets/collectCashXs-413b34ec.svg",TB="/asset/assets/waterBox-3539051e.svg",xx=()=>{var w,x,C;const{userData:e}=sn(),{collectCash:t,setIsLockedBtn:n,isLockedBtn:r}=u0(),[i,o]=W.useState(0),[s,a]=W.useState(null),[l,c]=W.useState(new Date().getTime()),{isProjectLaunch:u}=xn(),{address:d}=Vr();function h(v,p){const y=p-v,S=(l-v)/y*100;return Number(Number(S).toFixed(2))>100?100:Number(Number(S).toFixed(2))}W.useEffect(()=>{let v=setInterval(()=>{c(new Date().getTime())},2e3);return()=>clearInterval(v)},[l]),W.useEffect(()=>{let v;return s==0||s<i?o(0):i<=s&&(v=setInterval(function(){o(p=>Number(Number(p+.01).toFixed(2)))},.5),i==s&&clearInterval(v)),()=>clearInterval(v)},[i,e,s]),W.useEffect(()=>{var E;const v=Number((E=e==null?void 0:e[0])==null?void 0:E[3])*1e3,p=v+864e5,y=h(v,p);a(y)},[e,l]);const m=()=>{var v;u?d?Number((v=e==null?void 0:e[0])==null?void 0:v[3])>0?(n(!0),r||(t(),ee.loading(Oe.WAIT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}))):ee.error(Oe.BUYCAR,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)};return A.jsxs(A.Fragment,{children:[A.jsx("img",{onClick:m,src:SB,className:"hidden md:block absolute cursor-pointer right-1/2 lg:right-[85%] md:right-[75%] top-[52%] -translate-y-1/2 w-40 h-40 max-w-md"}),A.jsx("img",{className:"absolute md:fixed md:right-4 z md:top-auto top-[-5%] md:bottom-2 w-24 lg:w-28 h-24 lg:h-28 ",src:TB}),A.jsxs("div",{className:"box relative w-20 lg:w-24 h-20 lg:h-24",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"percent text-2xl lg:text-[28px]",children:[A.jsx("div",{className:"percentNum",id:"count",children:i===100?100:Number(i).toFixed(2)}),A.jsx("div",{className:"percentB",children:"%"})]}),A.jsx("div",{className:"flex justify-center percent-cash items-center",children:A.jsxs("span",{className:`percentNum z-20 ${Number(Ne(e==null?void 0:e[3]))+Number(Ne((w=e==null?void 0:e[0])==null?void 0:w[2]))>999999?"text-[9px] md:text-xs":Number(Ne(e==null?void 0:e[3]))+Number(Ne((x=e==null?void 0:e[0])==null?void 0:x[2]))>9999999999?"text-[6px] md:text-[9px]":"text-xs md:text-[15px]"}`,children:[Fe(Number(Ne(e==null?void 0:e[3]))+Number(Ne((C=e==null?void 0:e[0])==null?void 0:C[2])),1)," ","Cash"]})})]}),A.jsxs("div",{id:"water",className:"water",style:{height:`${i}%`,transform:"translate(0,"+(s-i)+"%)"},children:[A.jsxs("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_back",children:[A.jsx("path",{d:"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"}),A.jsx("path",{d:"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"}),A.jsx("path",{d:"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"}),A.jsx("path",{d:"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"})]}),A.jsxs("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_front",children:[A.jsx("path",{d:"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"}),A.jsx("path",{d:"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"}),A.jsx("path",{d:"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"}),A.jsx("path",{d:"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"})]})]})]}),A.jsx("img",{onClick:m,src:AB,className:"md:hidden cursor-pointer w-full h-20 max-w-[180px]"})]})},_B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAgCAYAAACclNOPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4ySURBVHgB7VsJlBTFGf6ru+faXXYXZLkxBrlR8YUgCqJg4lMxGIIchhg8ogaFp6IxQfSJGvXleRISD4wx4vUU4oUaYkRRYhAURBDkkhsEdtlrdma2j+qufNXTswdz7S7LoW++93q6q+r/6+q//vr/v3qIcsghhxxyaGUIUV5omrVXCcd6wzAipwohGOWQw9EGBE/Rdf1C4ZhfQhiFd0WEbT4uKiqKKIccjhKYMIz+EL6FuMy4IPKtnOtzcd/nCWa5sPUpZWVlbSiHHI4Uamr2lUADPgWBq/QEz7At4/bS0u2dUMzCBw/2dbixAPlOvBza07JGLlmyRKMccmhNbN26tQgCttsTRMe2jXl6dXVPFCVsxrq7FQuf5XDzf4mt3Lb02yiHHFoTBw5s6+jaiI6lR6PhMchSZD5syQLLMmYif6ll6ReSJ5i7d+8OWab+Z1cobXMO1QtsDjlkRRO21PzEg5mfX7gQd4dzYwwJ+1FNVX6ItNBUdRG06FIrZt7oLyhYA+/7S8mA/TuPWgAIe1ci+0fERZT5fB+mpjFPx9rojlb2MOZfnZqm9gdEvtPwGCLbtkll20H7RSMaXe9JAa0/xRcOIxuXiifbxl2lOB9tYiyw0esb6rRPo4yw1jMW2kbpx4e2zP7ElW6kMX8yhQp+tg10HdHWWTKD4opAXpp72Q7yRDmp/k9AWw5a2O32yHi5+iny9qVv3zofQw2iD5iLSDVR2+GoL8+tX1UVtz3b8SGp4qmadGslC4V2Yq76YK56U1ao29D+evQJfeFno0XMr3qIw+ugu6KUVOdjxoLfUFNRryF5FcUnhNV52Lb5iuDG5UivlmnLiM6SPNyIjZdpbhovUAs0JOzPEZ4tuj1dOAmTOselEfzF1OWiBPw7G0QC5PVBMp192yE0KS5eKszYmXF6fklWemHNSDs2IVTYMrNBZ6flt83pHu0Z2fuGObJiQ0Hrw/PyOL/xp/Ttx7piPLr0A4Qw+oqYTFsHs7QDgecTMa67s/fHfSfPe+/owYzjjF+VkKFfJPrXRA3pyoSoz2M6fgxSfNPlSsQEFoLkccx1pSzlUE1ySQsmgnTMwK9AP0/Ew4fE2FbMzrXoUS/MViH6HK6nU5aScGamrsNpS0yBHSxKyBcYhIzlDQpN1Pu31E3zVZQOlvVjaMWpJOdTiFdlTnKzbMMhOTWY3ydlzY2z2emoZRSpvrswpgshiQswljOIqZMxzlnIM5Lr9l0JlRJA39+RWl8KZF2ZYE+RIioOaaMT+nk1rjvAM0u+53p6B4uUYV7YLuS/3YBpBdoPkODTZAXgexbEeygZ56D/I0hVrgP9QvTXpmw4cOAANCSXNqQUNlUI/WSsxK3Ig9yZU5DuibKPPGn/LBKpHBiJRAbieS+3jLfpmGlI/p7r9btbu5w7vgtpyTCUmtoPwZ/2+rEBmqW7l+dpSF5BLQD4x3pzdQB9yctMm9CQcCpF8uLG2CZ7de1BuV9UVhbLeXfzOL84RX0KCr6Jlxtj3byGGlLXeyXxGEY/r40K8HdrXJ+rAWXZWyna6uaVmejn4JTjs62ZHs0a0IdknkJZEIvFmFw6kj8cLh9CQt0EGeuBpIrsJ3HbgrJzPfLB+XkFy/NDwanV4eg55Njz6BhAiIhc1VIQ18OGjNsnwllM7o7Az2paHfrFca1KMdiRUxnL202tg6xz3gK4NiZr27YKfX433oq4IZnMHovyk12Npvo/pOZB9tvXDPoWObPNmRzhOFRA0qmx+L210cileJYOQq3N7acryyoGOo54CWlsB+LaosL8pdC//nXr1jVnEK2EwCn46YB+SOcg4mYp6pr4KCirhhQRKdDKHDfBaC7zhZr78o4dFHrGexoq7cVGZQ6Nce9CzMe8VNFxiLQCKT0k04wNCYWUxLYCgWQb9epIL18gdHdem7avL/r3+0Mrq0r7av7glHYdO65VNf/kcE0MGkh8DPrOfp/vpQH9+3xiWbUj6OiGfy7x7ovrs+yP3RtjZ2baKqVzQKHgH71dAFoxfDd9p+D7HD/rcBXj+fJErhu5YOIy+UiK8zwdp0jl1DBRW3siDNI5Ps0/2O9vc0GioF27dtIwdRLpUaNGSaN5VwNep6ioaAVikWM7diyZ6NMUOAtssKZq/xE2X2BAswaDwc3UyEHKAKYgVMAfga2STC9oeFo+IUbIOD1eSAPN5luLuuSWVkKWeRIyvk7NbI5Gu78h6WwwdjVjJ4TTtBJCvx5JXaTdCQ1US0ceavwmoiSdTJLrjUkvfx7m5yFc0rmZHXdunDEe/WdwZr6i5sORmyEdYTQSyPLy8sJ2xYU3Q5fdimQhBroBYTjTK26aEAGdOrUfoGnqeHibV8ItHAGBnAIxnxTwq6MRkngspvOn8vPz92WtSIi2+J1OzQBeQAcspn5Q/jJuuCORj5cCB4evAMEF5GcyXvd1Ct7OsLTnuDazYE8zRVucoaUgZuSWlEWMoGGpFQWSdcGYvpAhlMZdoM7xYvayFMT6AhluC9yDh37kWFfDqViOcU11NynG5qRtxqdeA2Eua5Tn0IneExRPKPs7O0zUCSQ822FYP4/i8QyZ5Jb9sBWN/QX2lEknFLskTa2Uc84ghCMdppT6tMCk6tLS5/PbFT2kKorUPnflhfyTTNMc5/f712SpqhwTeAOciuS2FfW36NJPkvIdaxx4NGLOYsZUp3EhWwSeCyBs0gN9PAXvg+DF1kZriRn3U2ZEQPurNGWtrR2ladUvRT7HW5lJLDa3YSZjBfDg+bNYYdNcARRuuCiI5+1Qkm+kbYXR75PectzQ0nH/A4TeoiOMOoHkZA/RSJXCuFaP6jeF2rSRNpfYu3evXCHuCcH8+fO1CRMmmNkq9Smqu3KhZrpu3PhJflGHDltmzZo1dsaM3w0PBoIvo6in45iSJotAiho0u4BpWpJAYiUPx+QlCyRjnuFOpyZvqfKUxSUaJO1ITHCsroQbk8A7iaSgkbiGsWwanFmQ+4V0dPAtMU2eDiXiiohwWLAVWS+8mZWMFaUIQal3YlAyfil3GBkyWkimfTsLaLG0rUBZwNaubJRnUxhxTsQsWYvCXC0GzqNv8aL898o0BDEPAe/rkbexQVT9K8uyLkpXhwyGYod/BHQ1DU4SNuCocaJHonCuL5L5kUh1+npaGId0T0HkqUL20wTEUEXfBnxtEFf8xjsleSLTx8atEIcc1xpxSIz/fm/8b2fgL5KfCMbpas9NSZMlDpm5fxnjkN1bKw7paqPi4uLzoDGewKM8r5aDlg5CX02lf0VKSzulagAB8aEKY9KuqkUt0o56H8uuN7bqV7y2RL2zrVKrg/Nh+G2HZrZgy74s+WK4ZGwSjTvWee5gESyGJnkOTydLmxmnTzc3tseOV2ivuTchZNSgC31PkPboENKP7cE991/IFN94qX3w4lYifbrl4wHKBGG/ztTgXe7LJr4eYpjQRixrw4cDjX7qLicm3oIn+WoqEmgUeOdiAB5lgBwLzv4Z7vIstRYCexOEMatJcphwqBWAfkonRx5K9MLiGo37XPrOon79p5ULVVU9e0V09lZgG0zDCZK5ML/dz7GlP9O1a9c6e2T79u3FBXmBCW6Cqf3BA9vTKkGAuX0qf0g9EhIpyDsuUzLYdvZ/UT4VS2Mw+tgei0yeR8vTqO2wl7pDYK9KzWd+gNOaBiEuEcKWc0fqfthfMS2Ypg9iP8UnBCEt+2Es/BQLQHsTAvcRZYOgf6DnD0A6J2IszzTpLPjooZziNq8PZ/PjsG0PSqIQFD81Y0qZR5tJIFk1bgdBPQxG3QrcpVYskWWKps7u0rlkkmFErtuyZcfGAX17X06KAttTJE4Ghse1qfzESdpn9GmDXsS1ZCvv2PGQDZfHhXgpWoY4m/MZRmBIUwKJjrjkZ2IdkO4Po+LvqCg1G/NLTdow5gqvle5LTaw8R9KJSAltFQT2ZRkGQ1vXpyQR1k78fkTZoFgvkPBJ00h+iSSdxD10nEA6jLDH5+Hhurj3ntYslzHSF+EgujtHkkBy7rj7tN9fsObAgW2ndGjf7U5UihALRXFkOIs79rJgIDATQb2lflU7acCAPggv0CBPCy6JRWoe84dCwzTVN11+r8dt655Jk66YjTIHnrYGMrdN22bpT240DUFsZwr4q9Lac5Z4EXEz2IPO5rqBMQUhIvBomY7FgnuImTij1qRDEYb3ej60HzxzLZ8yQtkUv6ufwx6dkpGUOWm/75NBaiyeX8OLfAwLYCBWfvLRKrMTXxVtxpjkPMjgPE+uK2+P4PyXpDLYzRRKbm0H5uSkGZgjlAc3p+xQKASlY8PuZyEKaM1z1Lj1JmmBrah/V8pyxTeNuAEadUhS/6T4KVRNpvMOCwTWJvHWedmOZdlW7QPyy+9EtbFY9ZnhcFmfBG1lZeUPbW680uBbtz16rGYaBC7xsSmLxcJnV1RUyJCRK3h6ONxbOMbCBI+uR0dRDjmkQ9X+/T0cbvwTwqJ7oYadtqlPhW2YCDewmpqaEtsyZqE8lvgkyeb6X/fv39kD4aL7ZJjGsmK3VVVVtU3wCBHpKITxQH291ibTjE6F8B6Jr15y+D4BgW81Gg2PbvCfa2gzc5WlRy4yTX2K902hq0UhvK9BA54KNmbU1AyAcf6uqP/X4RYI8zTTjN0Inh11wosYZVlZ2fcmRJHDUcLKlSvzLD12q/thqvdvw0RQ2eHm8tramhGgaWT7SGGuqamUAe33QNTws3WLm8ZLVVX7e1DuD185HAZYtKyss2XUYiu2qnF9a9ZGJq9bt64gE9OyZctChhG71LHNLbhWQXhHHiq8OeRwOGDRaFmX1atXFzeHSXrU48ePPwLHMTnkkEMORwn/B4qW8ToBLpHwAAAAAElFTkSuQmCC",NB=()=>{const{links:e}=qg(),{address:t}=Vr(),{userData:n}=sn(),{isProjectLaunch:r}=xn();let i=0;n==null||n[1].forEach(d=>d>0&&i++);const o=t?i>0?`${window.location.protocol}//${window.location.host}/?ref=${wx(t)}`:Oe.BUYCAR:Oe.CONNECT,s=t&&i>0?`${window.location.protocol}//${window.location.host}/?ref=${t}`:null;let a=0;n==null||n[1].forEach(d=>d>0&&a++);const l=()=>{r?t&&+(a>0)?ee.success(Oe.COPY,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):t&&+(a>0)==0?ee.error(Oe.BUYCAR,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.CONNECT,{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border border-white/40 [&>div]:m-0.5"}):ee.error(Oe.LAUNCH)};let c=[];for(const d in e)switch(d){case"telegram":c.push(A.jsx("li",{className:"text-xl hidden  md:flex items-center justify-center bg-[#33333B6E] h-10 w-10 text-[#BFBFBF] hover:text-white transition duration-200 cursor-pointer rounded-full",children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:e[d],children:A.jsx(Vd,{})})},d));break;case"telegramChat":c.push(A.jsx("li",{className:"text-xl hidden  md:flex items-center justify-center bg-[#33333B6E] h-10 w-10 text-[#BFBFBF] hover:text-white transition duration-200 cursor-pointer rounded-full",children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:e[d],children:A.jsx(Vd,{})})},d));break;case"twitter":c.push(A.jsx("li",{className:"text-xl flex items-center justify-center bg-[#33333B6E] w-8 sm:h-10 h-8 sm:w-10 text-[#BFBFBF] hover:text-white transition duration-200 cursor-pointer rounded-full",children:A.jsx("a",{target:"_blank",rel:"noreferrer",href:e[d],children:A.jsx(lx,{className:"text-base sm:text-xl"})})},d));break}let u=0;return n==null||n[1].forEach(d=>d>0&&u++),A.jsxs(A.Fragment,{children:[a>0?A.jsx("div",{className:"flex flex-col md:hidden items-center relative justify-center mt-10",children:A.jsx(xx,{})}):null,A.jsxs("div",{className:"relative lg:flex justify-start gap-x-7 xl:gap-x-10 items-center px-5 xl:px-10 py-4 border-t-2 xl:border-t-4 border-[#61797f0a] border-opacity-25 rounded-[25px] mt-7 grid grid-rows-2 grid-cols-2 gap-y-2 lg:gap-y-0",children:[A.jsx("span",{className:"text-sm lg:text-lg xl:text-xl min-w-max row-start-1",children:"Your Referral Address"}),A.jsx(EB,{text:s,onCopy:l,children:A.jsx("div",{className:"referral-box text-sm lg:text-lg xl:text-xl row-start-2 lg:w-1/2 col-span-full text-center rounded-xl py-3 w-full cursor-pointer",children:r?o:Oe.LAUNCH})}),A.jsxs("div",{className:"flex justify-end gap-x-2 xl:gap-x-3",children:[c," ",A.jsx("a",{target:"_blank",rel:"noreferrer",className:"flex items-center",href:e==null?void 0:e.hazeCrypto,children:A.jsx("img",{className:"h-6 sm:h-8 opacity-60 hover:opacity-90 transition duration-300 object-contain",src:_B})})]})]})]})},PB="/asset/assets/telegramBtn-a212b943.svg",kB=()=>{const{setModalType:e}=xn(),t=()=>{e(ot.TELEGRAM)};return A.jsx("div",{onClick:t,className:"fixed left-2 bottom-2 md:hidden z-[5] w-fit",children:A.jsx("img",{src:PB,className:"w-28 sm:w-40 object-contain"})})},DB=()=>{const{userData:e}=sn();let t=0;return e==null||e[1].forEach(n=>n>0&&t++),A.jsxs(QM,{children:[A.jsx(iB,{}),A.jsx(nB,{}),A.jsx(NB,{}),A.jsx(kB,{}),t>0?A.jsx("div",{className:"fixed right-6 z-[5] bottom-4 hidden md:block",children:A.jsx(xx,{})}):null]})},OB={name:"Garage",description:"Garage",url:"https://cubixgarage.mexatoken.xyz",icons:["https://avatars.githubusercontent.com/u/37784886"]},Cx=St.web3.modalConfig.projectId,Ex=[h7],Sx=Pj({chains:Ex,projectId:Cx,metadata:OB});kj({wagmiConfig:Sx,projectId:Cx,chains:Ex});const IB=()=>A.jsxs(A.Fragment,{children:[A.jsx(dD,{config:Sx,children:A.jsx(V$,{children:A.jsx(U$,{children:A.jsxs(G$,{children:[A.jsx(H$,{}),A.jsx(DB,{})]})})})}),A.jsx(v$,{toastOptions:{className:"bg-third/80 flex m-0.5 mb-0 justify-items-start justify-start pl-2 pr-4 gap-x-2 py-3 text-white rounded-none border bborder-white/40 [&>div]:m-0.5"},position:"bottom-center"})]});bh.createRoot(document.getElementById("root")).render(A.jsx(di.StrictMode,{children:A.jsx(IB,{})}));export{FE as $,Br as A,ql as B,$n as C,hr as D,Fp as E,Mn as F,Vl as G,Ed as H,Gl as I,So as J,Sd as K,Ri as L,Hp as M,To as N,pr as O,Cd as P,Kl as Q,Fr as R,zs as S,cs as T,Ue as U,Eo as V,$p as W,Ht as X,on as Y,_d as Z,TE as _,eT as a,$U as a$,UE as a0,LE as a1,p5 as a2,AE as a3,Eu as a4,Gs as a5,Z as a6,pf as a7,Wt as a8,Ts as a9,CU as aA,EU as aB,SU as aC,OR as aD,PU as aE,TU as aF,NU as aG,_U as aH,M6 as aI,o0 as aJ,rn as aK,jU as aL,fL as aM,DU as aN,hL as aO,Nc as aP,FU as aQ,VU as aR,qU as aS,RU as aT,LU as aU,Vs as aV,UU as aW,nL as aX,KU as aY,Un as aZ,BU as a_,bl as aa,k9 as ab,Sf as ac,jr as ad,cc as ae,Qa as af,fr as ag,D2 as ah,yA as ai,Ps as aj,vc as ak,gb as al,i0 as am,fo as an,ye as ao,tr as ap,Xf as aq,Vn as ar,Jn as as,Py as at,A1 as au,ho as av,ZU as aw,YU as ax,oi as ay,xU as az,Is as b,MU as b0,s0 as b1,Mg as b2,B6 as b3,OU as b4,IU as b5,AU as b6,WU as b7,HU as b8,a0 as b9,xO as bA,H4 as bB,$I as bC,kU as ba,Bg as bb,GU as bc,zU as bd,QU as be,pL as bf,eL as bg,JU as bh,mj as bi,uL as bj,rL as bk,gj as bl,XU as bm,aL as bn,iL as bo,lL as bp,dL as bq,oL as br,sL as bs,cL as bt,tL as bu,sj as bv,U6 as bw,wh as bx,bU as by,vU as bz,X as c,zl as d,Mp as e,Wl as f,pd as g,Rs as h,JA as i,js as j,md as k,Mr as l,gd as m,$s as n,Di as o,wd as p,Oi as q,Ii as r,Y5 as s,Hl as t,Ms as u,bd as v,Xn as w,Ao as x,vd as y,xd as z};
