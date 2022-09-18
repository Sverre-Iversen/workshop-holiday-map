import{b as y,kU as m,aq as h,kV as w,s as d,kW as v,hy as b,kX as x,kY as _,kZ as k}from"./index.28204634.js";const p=y.getLogger("esri.layers.support.labelFormatUtils"),g={type:"simple",evaluate:()=>null},E={getAttribute:(a,s)=>a.field(s)};async function L(a,s,e){if(!a||!a.symbol)return g;const t=a.where,u=m(a),i=t?await h(()=>import("./WhereClause.0db16567.js"),["assets/WhereClause.0db16567.js","assets/index.28204634.js","assets/index.1ae60b5b.css"]):null;let o;if(u.type==="arcade"){const n=await w(u.expression,e,s);o={type:"arcade",evaluate(l){try{const r=n.evaluate({$feature:"attributes"in l?n.repurposeFeature(l):l});if(r!=null)return r.toString()}catch{p.error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:l,expression:u}))}return null},needsHydrationToEvaluate:()=>_(u.expression)==null}}else o={type:"simple",evaluate:n=>u.expression.replace(/{[^}]*}/g,l=>{const r=l.slice(1,-1),c=s.get(r);if(!c)return l;let f=null;return"attributes"in n?n&&n.attributes&&(f=n.attributes[c.name]):f=n.field(c.name),f==null?"":F(f,c)})};if(t){let n;try{n=i.WhereClause.create(t,s)}catch(r){return p.error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:t,error:r})),g}const l=o.evaluate;o.evaluate=r=>{const c="attributes"in r?void 0:E;try{if(n.testFeature(r,c))return l(r)}catch(f){p.error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:t,feature:r,error:f}))}return null}}return o}function F(a,s){if(a==null)return"";const e=s.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const u=a;for(const i of e.codedValues)if(i.code===u)return i.name}else if(e.type==="range"){const u=+a,i="range"in e?e.range[0]:e.minValue,o="range"in e?e.range[1]:e.maxValue;if(i<=u&&u<=o)return e.name}}let t=a;return s.type==="date"||s.type==="esriFieldTypeDate"?t=v(t,k("short-date")):b(s)&&(t=x(+t)),t||""}export{L as createLabelFunction,F as formatField};
