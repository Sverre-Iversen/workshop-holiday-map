import{cf as U,gg as $,L as G,bV as N,t as p,gm as O,gn as P,bk as v,g0 as h,aq as b,r as J,aD as Z,aE as g,go as B,aI as R,gp as y,aF as E,gq as k,gr as x}from"./index.28204634.js";import{f as _,g as F}from"./projectionSupport.0cf0914c.js";const I=new U({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),w=Object.freeze({}),d=new R,L=new R,S=new R,m={esriGeometryPoint:y,esriGeometryPolyline:E,esriGeometryPolygon:k,esriGeometryMultipoint:x};function C(t,r,a,n=t.hasZ,i=t.hasM){if(p(r))return null;const o=t.hasZ&&n,s=t.hasM&&i;if(a){const e=g(S,r,t.hasZ,t.hasM,"esriGeometryPoint",a,n,i);return y(e,o,s)}return y(r,o,s)}function K(t,r,a,n,i,o,s=r,e=a){const l=r&&s,u=a&&e,f=J(n)?"coords"in n?n:n.geometry:null;if(p(f))return null;if(i){let c=Z(L,f,r,a,t,i,s,e);return o&&(c=g(S,c,l,u,t,o)),m[t](c,l,u)}if(o){const c=g(S,f,r,a,t,o,s,e);return m[t](c,l,u)}return B(d,f,r,a,s,e),m[t](d,l,u)}async function T(t,r,a){const{outFields:n,orderByFields:i,groupByFieldsForStatistics:o,outStatistics:s}=t;if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(o)for(let e=0;e<o.length;e++)o[e]=o[e].trim();if(s)for(let e=0;e<s.length;e++)s[e].onStatisticField&&(s[e].onStatisticField=s[e].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),V(t,r,a)}async function V(t,r,a){if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||r&&r===n)&&(t.where=null),!t.geometry)return t;let i=await j(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=t.geometry;i=$(i),i.spatialReference=l}t.geometry=i,await _(i.spatialReference,a);const o=(await G(N(i)))[0];if(p(o))throw w;const s=o.toJSON(),e=await F(s,s.spatialReference,a);if(!e)throw w;return e.spatialReference=a,t.geometry=e,t}async function j(t){const{geometry:r,distance:a,units:n}=t;if(a==null||"vertexAttributes"in r)return r;const i=r.spatialReference,o=n?I.fromJSON(n):O(i),s=i&&(P(i)||v(i))?r:await _(i,h).then(()=>F(r,h));return(await q())(s.spatialReference,s,a,o)}async function q(){return(await b(()=>import("./geometryEngineJSON.f32576ad.js"),["assets/geometryEngineJSON.f32576ad.js","assets/index.28204634.js","assets/index.1ae60b5b.css","assets/geometryEngineJSON.d0ee6227.js","assets/json.d1a0fa35.js"])).geodesicBuffer}function H(t){return t&&M in t?JSON.parse(JSON.stringify(t,z)):t}const M="_geVersion",z=(t,r)=>t!==M?r:void 0;export{K as J,C as O,T as P,w as U,V as v,H as x};
