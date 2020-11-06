(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[14],{114:function(e,t,r){},123:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r(69),i=r(66),o=r(4),s=r.n(o),u=r(9),l=r(28),d=r(16);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=c.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"});function v({title:e,titleId:t,...r},n){return c.createElement("svg",f({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,m)}const b=c.forwardRef(v);r.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j=c.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"});function g({title:e,titleId:t,...r},n){return c.createElement("svg",p({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,j)}const O=c.forwardRef(g);r.p;var x=r(73),h=r(70);r(114);function w(e,t,r,n){if(null!==t)return t;const c=r.length;return n>0?(e+1)%c:(e-1+c)%c}t.default=({width:e,height:t,images:r,placeholder:o,...f})=>{const[m,v]=Object(c.useState)(0),[p,j]=Object(c.useState)(!1),[g,y]=Object(c.useState)(!0),[_,F]=Object(c.useState)(),[I,R]=Object(c.useState)(),E=Object(c.useRef)(),C=Object(c.useRef)(),M=Object(c.useRef)(),k=Object(c.useRef)(),A=Object(c.useRef)(),N=Object(c.useRef)(),P=Object(c.useRef)(),L=Object(c.useRef)(!1),S=Object(c.useRef)(),D=Object(c.useRef)(),U=Object(c.useRef)(),q=Object(u.h)(),z=Object(u.d)(E,!0),B=Object(c.useRef)(),J=Object(c.useRef)(),T=Object(c.useRef)(),$=`Slide ${m+1} of ${r.length}. ${r[m].alt}`;Object(c.useEffect)((()=>{const r=[e/-2,e/2,t/2,t/-2,1,1e3];return P.current=new a.Nb({canvas:E.current,antialias:!1,powerPreference:"high-performance"}),N.current=new a.cb(...r),A.current=new a.rb,P.current.setPixelRatio(2),P.current.setClearColor(1118481,1),P.current.setSize(e,t),P.current.domElement.style.width="100%",P.current.domElement.style.height="auto",A.current.background=new a.l(1118481),N.current.position.z=1,()=>{L.current=!1,Object(x.b)(A.current),Object(x.a)(P.current)}}),[t,e]),Object(c.useEffect)((()=>{let n=!0;return z&&!p&&(async()=>{const c=new a.Cb,i=P.current.capabilities.getMaxAnisotropy(),o=r.map((async e=>{const t=await Object(h.a)(e),r=await c.loadAsync(t);return await P.current.initTexture(r),r.encoding=a.Ob,r.minFilter=a.G,r.magFilter=a.G,r.anisotropy=i,r.generateMipmaps=!1,r})),s=await Promise.all(o);n&&(k.current=new a.sb({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:s[0]},nextImage:{type:"t",value:s[1]}},vertexShader:"\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  varying vec2 vUv;\n  uniform sampler2D currentImage;\n  uniform sampler2D nextImage;\n  uniform float dispFactor;\n  uniform float direction;\n\n  void main() {\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n",transparent:!1,opacity:1}),M.current=new a.fb(e,t,1),C.current=new a.Q(M.current,k.current),C.current.position.set(0,0,0),A.current.add(C.current),j(!0),F(s),requestAnimationFrame((()=>{P.current.render(A.current,N.current)})))})(),()=>{n=!1}}),[t,r,z,p,e]);const G=Object(c.useCallback)((({index:e,direction:t=1})=>{if(!_)return;v(e);const r=k.current.uniforms;r.nextImage.value=_[e],r.direction.value=t;const n=()=>{r.currentImage.value=_[e],r.dispFactor.value=0,L.current=!1};if(q||1===r.dispFactor.value)n(),requestAnimationFrame((()=>{P.current.render(A.current,N.current)}));else{L.current=!0;const e=Object(i.g)(r.dispFactor.value,(e=>{r.dispFactor.value=e,1===e&&n()}));J.current=Object(i.e)({from:e.get(),to:1,velocity:e.getVelocity(),stiffness:100,damping:20}).start(e)}}),[q,_]),V=Object(c.useCallback)((({direction:e,index:t=null,...r})=>{if(!p)return;if(L.current)return cancelAnimationFrame(U.current),void(U.current=requestAnimationFrame((()=>V({direction:e,index:t,...r}))));const n=w(m,t,_,e);G({index:n,direction:e,...r})}),[G,m,p,_]),K=Object(c.useCallback)((e=>{if(e===m)return;V({direction:e>m?1:-1,index:e})}),[m,V]);Object(c.useEffect)((()=>{const e=()=>{const e=E.current.getBoundingClientRect();R(e)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((()=>{let e;const t=()=>{e=requestAnimationFrame(t),L.current&&P.current.render(A.current,N.current)};return e=requestAnimationFrame(t),()=>{var t;cancelAnimationFrame(e),null===(t=J.current)||void 0===t||t.stop()}}),[]),Object(c.useEffect)((()=>{if(o){const e=()=>{y(!1)},t=B.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}}),[o]);const Q=Object(c.useCallback)((e=>{if(L.current||!k.current||!_)return;const{x:t}=e;D.current=t;const n=Math.abs(t),c=I.width;S.current=t>0?-1:1;const a=1-(n-c)/c*-1,i=w(m,null,r,S.current),o=k.current.uniforms,s=Math.min(Math.max(a,0),1);o.currentImage.value=_[m],o.nextImage.value=_[i],o.direction.value=S.current,q||(o.dispFactor.value=s),requestAnimationFrame((()=>{P.current.render(A.current,N.current)}))}),[I,m,r,q,_]),H=Object(c.useCallback)((()=>{if(!k.current)return;const e=k.current.uniforms,t=1e3*(1-e.dispFactor.value),r=Math.abs(D.current),n=.2*I.width;D.current=0,L.current||0!==r&&r&&(r>n?V({duration:t,direction:S.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,V({direction:-1*S.current,index:m})))}),[I,m,V]);Object(c.useEffect)((()=>{let e;const t=Object(i.g)({x:0,y:0},(e=>{Q(e)})),r=Object(i.c)(T.current,"mousedown touchstart").start((r=>{r.preventDefault(),e=Object(i.d)({x:0,y:0}).start(t)})),n=Object(i.c)(document,"mouseup touchend").start((()=>{var t;H(),null===(t=e)||void 0===t||t.stop()}));return()=>{var t;r.stop(),n.stop(),null===(t=e)||void 0===t||t.stop()}}),[H,Q]);return Object(n.jsxs)("div",{className:"carousel",onKeyDown:e=>{const t={ArrowRight:()=>V({direction:1}),ArrowLeft:()=>V({direction:-1})}[e.key];t&&t()},...f,children:[Object(n.jsxs)("div",{className:"carousel__content",children:[Object(n.jsxs)("div",{className:"carousel__image-wrapper",ref:T,children:[Object(n.jsx)("div",{"aria-atomic":!0,className:"carousel__canvas-wrapper","aria-live":"polite","aria-label":$,role:"img",children:Object(n.jsx)("canvas",{"aria-hidden":!0,className:"carousel__canvas",ref:E})}),g&&o&&Object(n.jsx)("img",{"aria-hidden":!0,className:s()("carousel__placeholder",{"carousel__placeholder--loaded":!l.a&&p&&_}),src:o,ref:B,alt:"",role:"presentation"})]}),Object(n.jsx)("button",{className:"carousel__button carousel__button--prev","aria-label":"Previous slide",onClick:()=>V({direction:-1}),onMouseUp:d.a,children:Object(n.jsx)(b,{})}),Object(n.jsx)("button",{className:"carousel__button carousel__button--next","aria-label":"Next slide",onClick:()=>V({direction:1}),onMouseUp:d.a,children:Object(n.jsx)(O,{})})]}),Object(n.jsx)("div",{className:"carousel__nav",children:r.map(((e,t)=>Object(n.jsx)("button",{className:"carousel__nav-button",onClick:()=>K(t),onMouseUp:d.a,"aria-label":"Jump to slide "+(t+1),"aria-pressed":t===m},e.alt)))})]})}},73:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return i}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)c(e.material);else for(const t of e.material)c(t)}))},c=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},a=e=>{e.dispose(),e.forceContextLoss(),e=null},i=e=>{for(const t of e)t.parent.remove(t)}}}]);
//# sourceMappingURL=14.0c8dbb4e.chunk.js.map