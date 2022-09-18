import{x as D,b as R,a4 as F,a6 as K,c0 as E,f3 as L,y as _,aS as P,Q as v,t as M,r as I,hP as $,l as A}from"./index.28204634.js";import{n as O}from"./CIMSymbolHelper.437730f6.js";import{p as U}from"./visualVariablesUtils.3d200005.js";import{x as z,l as x,b as B,E as j,t as J}from"./Matcher.2cff3216.js";import{p as N}from"./BaseProcessor.58f2fabf.js";import"./BidiEngine.ec67919b.js";import"./enums.6e42a319.js";import"./MaterialKey.8d919001.js";import"./Utils.6a347352.js";import"./enums.de935fa5.js";import"./Texture.97806b82.js";import"./VertexElementDescriptor.d386088d.js";import"./GeometryUtils.814cb798.js";import"./visualVariablesUtils.15bb2785.js";import"./tileUtils.4f6f0a33.js";import"./TileClipper.45a2e905.js";import"./Geometry.b68345ae.js";import"./GeometryUtils.8166011b.js";import"./ExpandedCIM.e9591122.js";import"./quantizationUtils.852042e2.js";import"./earcut.d30cbec0.js";import"./devEnvironmentUtils.8c6e6b72.js";class Q{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(e,r){const s=this._resourceMap,i=s.get(e);if(i)return i;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...r}),this._inFlightResourceMap.set(e,a),a.then(o=>(this._inFlightResourceMap.delete(e),s.set(e,o),o))}catch(o){return D(o)?null:{width:0,height:0}}return a}getResource(e){var r;return(r=this._resourceMap.get(e))!=null?r:null}}function k(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function T(t){const e=t.message,r={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const s in e.data){const i=e.data[s];if(r.message.data[s]=null,I(i)){const a=i.stride,o=i.indices.slice(0),l=i.vertices.slice(0),h=i.records.slice(0),d={stride:a,indices:o,vertices:l,records:h,metrics:v(i.metrics,n=>n.slice(0))};r.transferList.push(o,l,h),r.message.data[s]=d}}return r}R.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let S=class extends N{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new Q(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){const r=e.schema.processors[0];if(r.type!=="symbol")return;const s=E(this._schema,r);L(s,"mesh")&&(t.mesh=!0,t.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,r,s){return _(s),this._onTileData(t,e,r,s)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,r){const s=r.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(r=>{for(const s of r)s.message.tileKey===e.id&&this._updateTileMesh("append",e,T(s),[],!1,!1,null)})}_addBufferData(t,e){this._bufferData.has(t)||this._bufferData.set(t,[]),this._bufferData.get(t).push(T(e))}_createFactory(t){const{geometryType:e,objectIdField:r,fields:s}=this.service,i=(d,n)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",d,n),a={geometryType:e,fields:s,spatialReference:P.fromJSON(this.spatialReference)},o=new z(i,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:h}=t.mesh;return this._store=o,this._matchers.feature=x(l,o,a,this._resourceManagerProxy),this._matchers.aggregate=v(h,d=>x(d,o,a,this._resourceManagerProxy)),new B(e,r,o)}async _onTileData(t,e,r,s){_(s);const{type:i,addOrUpdate:a,remove:o,clear:l,end:h}=e,d=!!this._schema.mesh.sortKey;if(!a){const u={type:i,addOrUpdate:null,remove:o,clear:l,end:h,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},s)}const n=this._processFeatures(t,a,r,s,e.status.version);try{const u=await n;if(M(u)){const c={type:i,addOrUpdate:null,remove:o,clear:l,end:h,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:c},s)}const f=[];for(const c of u){let m=!1;const p=c.message.bufferIds,g=t.key.id,b=c.message.tileKey;if(g!==b&&I(p)){if(!this.tileStore.get(b)){this._addBufferData(g,c),f.push(c);continue}let y=this._bufferIds.get(b);y||(y=new Set,this._bufferIds.set(b,y));const C=Array.from(p);for(const w of C){if(y.has(w)){m=!0;break}y.add(w)}}m||(this._addBufferData(g,c),f.push(c))}await Promise.all(f.map(c=>{const m=t.key.id===c.message.tileKey,p=m?e.remove:[],g=m&&e.end;return this._updateTileMesh(i,t,c,p,g,e.clear,s.signal)}))}catch(u){this._handleError(t,u,s)}}async _updateTileMesh(t,e,r,s,i,a,o){const l=t,h=r.message.tileKey,d=!!this._schema.mesh.sortKey;h!==e.key.id&&(i=!1);const n=v(r,m=>m.message),u=v(r,m=>m.transferList)||[],f={type:l,addOrUpdate:n,remove:s,clear:a,end:i,sort:d},c={transferList:A(u)||[],signal:o};return _(c),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h,data:f},c)}async _processFeatures(t,e,r,s,i){if(M(e)||!e.hasFeatures)return null;const a={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:t.scale},h=await this._matchers.feature,d=await this._matchers.aggregate;_(s);const n=this._getLabelInfos(t,e);return await o.analyze(e.getCursor(),this._resourceManagerProxy,h,d,a,l),_(s),this._writeFeatureSet(t,e,a,n,o,r,i)}_writeFeatureSet(t,e,r,s,i,a,o){const l=e.getSize(),h=new j(t.key.id,{features:l,records:l,metrics:0},this._schema.mesh.matcher.symbologyType,a,!0,o),d={viewingMode:"",scale:t.scale},n=e.getCursor();for(;n.next();)try{const f=n.getDisplayId(),c=I(s)?s.get(f):null;i.writeCursor(h,n,r,d,t.level,c,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return h.serialize(u)}_handleError(t,e,r){if(!D(e)){const s={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(M(e))return null;if(e.type==="subtype"){const s={type:"subtype",classes:{}};let i=!1;for(const a in e.classes){const o=e.classes[a].filter(l=>k(l,t.scale));i=i||!!o.length,s.classes[a]=o}return i?s:null}const r=e.classes.filter(s=>k(s,t.scale));return r.length?{type:"simple",classes:r}:null}_getLabels(t,e){var r;if(e.type==="subtype"){const s=this.service.subtypeField,i=$(s,"Expected to find subtype Field"),a=t.readAttribute(i);return a==null?[]:(r=e.classes[a])!=null?r:[]}return e.classes}_getLabelInfos(t,e){const r=this._getLabelingSchemaForScale(t);if(M(r))return null;const s=new Map,i=e.getCursor();for(;i.next();){const a=i.getDisplayId(),o=[],l=U(a),h=l&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",d=this._getLabels(i,r);for(const n of d){if(n.target!==h)continue;const u=i.getStorage(),f=l&&h==="feature"?u.getComputedStringAtIndex(i.readAttribute("referenceId"),n.fieldIndex):u.getComputedStringAtIndex(a,n.fieldIndex);if(!f)continue;const c=O(f.toString()),m=c[0],p=c[1];this._store.getMosaicItem(n.symbol,J(m)).then(g=>{o[n.index]={glyphs:g.glyphMosaicItems,rtl:p,index:n.index}})}s.set(a,o)}return s}};S=F([K("esri.views.2d.layers.features.processors.SymbolProcessor")],S);const me=S;export{me as default};
