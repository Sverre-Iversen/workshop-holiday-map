import{a as ue}from"./vec33.15857488.js";import{c as Se,u as ge,r as Ie,e as _e}from"./types.a0bac8dc.js";import{cg as ce,y as Ee,l9 as de,t as fe,U as Oe,il as Ne,aT as Ae,s as ee,b as Ue,f9 as le,jO as pe,la as Ce,n as Re,eY as Be,gP as Me,gK as $e,gJ as Le,h2 as ve,fP as Fe,r as te,gD as re,aa as Pe,gC as De,E as R,G as C,gu as U,ab as H,i as Ge,k_ as je}from"./index.28204634.js";import{e as ye,r as me}from"./mat4f64.a79dd289.js";import{D as X,L as K,C as l,E as G}from"./enums.de935fa5.js";import{x as Ve}from"./quat.6a9f6d39.js";import{e as ke}from"./quatf64.ddec7ef6.js";import{B as Ye,g as ze,d as He,i as W,c as ne,u as he,x as qe,L as Je,O as Xe,E as Ke,F as Qe,w as We,q as Ze,A as et,V as tt}from"./BufferView.b480ef50.js";import{s as Te}from"./vectorStacks.3d1c2125.js";import{v as rt}from"./lineSegment.568e7c1d.js";function nt(n,e,t){if(n.count!==e.count)return void ue.error("source and destination buffers need to have the same number of elements");const o=n.count,r=t[0],s=t[1],a=t[2],c=t[3],u=t[4],i=t[5],d=t[6],f=t[7],p=t[8],y=t[9],m=t[10],x=t[11],B=t[12],I=t[13],w=t[14],S=t[15],h=n.typedBuffer,_=n.typedBufferStride,T=e.typedBuffer,M=e.typedBufferStride;for(let N=0;N<o;N++){const A=N*_,L=N*M,v=T[L],F=T[L+1],P=T[L+2],D=T[L+3];h[A]=r*v+u*F+p*P+B*D,h[A+1]=s*v+i*F+y*P+I*D,h[A+2]=a*v+d*F+m*P+w*D,h[A+3]=c*v+f*F+x*P+S*D}}function ot(n,e,t){if(n.count!==e.count)return void ue.error("source and destination buffers need to have the same number of elements");const o=n.count,r=t[0],s=t[1],a=t[2],c=t[3],u=t[4],i=t[5],d=t[6],f=t[7],p=t[8],y=n.typedBuffer,m=n.typedBufferStride,x=e.typedBuffer,B=e.typedBufferStride;for(let I=0;I<o;I++){const w=I*m,S=I*B,h=x[S],_=x[S+1],T=x[S+2],M=x[S+3];y[w]=r*h+c*_+d*T,y[w+1]=s*h+u*_+f*T,y[w+2]=a*h+i*_+p*T,y[w+3]=M}}function st(n,e){const t=Math.min(n.count,e.count),o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let c=0;c<t;c++){const u=c*r,i=c*a,d=s[i],f=s[i+1],p=s[i+2],y=d*d+f*f+p*p;if(y>0){const m=1/Math.sqrt(y);o[u]=m*d,o[u+1]=m*f,o[u+2]=m*p}}}function at(n,e,t){const o=Math.min(n.count,e.count),r=n.typedBuffer,s=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<o;u++){const i=u*s,d=u*c;r[i]=t*a[d],r[i+1]=t*a[d+1],r[i+2]=t*a[d+2],r[i+3]=t*a[d+3]}}function it(n,e,t){const o=Math.min(n.count,e.count),r=n.typedBuffer,s=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<o;u++){const i=u*s,d=u*c;r[i]=a[d]>>t,r[i+1]=a[d+1]>>t,r[i+2]=a[d+2]>>t,r[i+3]=a[d+3]>>t}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:nt,transformMat3:ot,normalize:st,scale:at,shiftRight:it},Symbol.toStringTag,{value:"Module"}));function ut(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let d=0;d<c;++d){for(let f=0;f<9;++f)o[u+f]=s[i+f];u+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:ut},Symbol.toStringTag,{value:"Module"}));function ct(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let d=0;d<c;++d){for(let f=0;f<16;++f)o[u+f]=s[i+f];u+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:ct},Symbol.toStringTag,{value:"Module"}));function dt(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let d=0;d<c;++d)o[u]=s[i],u+=r,i+=a}function q(n,e){const t=n.count;e||(e=new n.TypedArrayConstructor(t));for(let o=0;o<t;o++)e[o]=n.get(o);return e}Object.freeze(Object.defineProperty({__proto__:null,copy:dt,makeDense:q},Symbol.toStringTag,{value:"Module"}));function be(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let d=0;d<c;++d)o[u]=s[i],o[u+1]=s[i+1],u+=r,i+=a}function ft(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;if(Se(e.elementType)){const d=ge(e.elementType);if(Ie(e.elementType))for(let f=0;f<c;++f)o[u]=Math.max(s[i]/d,-1),o[u+1]=Math.max(s[i+1]/d,-1),u+=r,i+=a;else for(let f=0;f<c;++f)o[u]=s[i]/d,o[u+1]=s[i+1]/d,u+=r,i+=a}else be(n,e,t);return n}function lt(n,e,t,o){var u,i;const r=n.typedBuffer,s=n.typedBufferStride,a=(u=o==null?void 0:o.count)!=null?u:n.count;let c=((i=o==null?void 0:o.dstIndex)!=null?i:0)*s;for(let d=0;d<a;++d)r[c]=e,r[c+1]=t,c+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:be,normalizeIntegerBuffer:ft,fill:lt},Symbol.toStringTag,{value:"Module"}));function pt(n,e,t){const o=n.typedBuffer,r=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let d=0;d<c;++d)o[u]=s[i],o[u+1]=s[i+1],o[u+2]=s[i+2],o[u+3]=s[i+3],u+=r,i+=a}function yt(n,e,t,o,r,s){var d,f;const a=n.typedBuffer,c=n.typedBufferStride,u=(d=s==null?void 0:s.count)!=null?d:n.count;let i=((f=s==null?void 0:s.dstIndex)!=null?f:0)*c;for(let p=0;p<u;++p)a[i]=e,a[i+1]=t,a[i+2]=o,a[i+3]=r,i+=c}Object.freeze(Object.defineProperty({__proto__:null,copy:pt,fill:yt},Symbol.toStringTag,{value:"Module"}));function Wt(n,e){return new n(new ArrayBuffer(e*n.ElementCount*_e(n.ElementType)))}class Zt{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return ce(e)?(Ee(t),de(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,o){if(fe(this.streamDataRequester))return(await Oe(t,{responseType:mt[e]})).data;const r=await Ne(this.streamDataRequester.request(t,e,o));if(r.ok===!0)return r.value;throw Ae(r.error),new ee("",`Request for resource failed: ${r.error}`)}}const mt={image:"image",binary:"array-buffer",json:"json"},ht=Ue.getLogger("esri.views.3d.glTF");class Tt{error(e){throw new ee("gltf-loader-error",e)}errorUnsupported(e){throw new ee("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){ht.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function bt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function xt(n,e={}){return{data:n,parameters:{wrap:{s:X.REPEAT,t:X.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}class oe{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}var $,se;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})($||($={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(se||(se={}));const xe={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},wt={pbrMetallicRoughness:xe,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},St={ESRI_externalColorMixMode:"tint"},ae=(n={})=>{const e={...xe,...n.pbrMetallicRoughness},t=gt({...St,...n.extras});return{...wt,...n,pbrMetallicRoughness:e,extras:t}};function gt(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:le(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const It={magFilter:K.LINEAR,minFilter:K.LINEAR_MIPMAP_LINEAR,wrapS:X.REPEAT,wrapT:X.REPEAT},_t=n=>({...It,...n});function Et(n){let e,t;return n.replace(/^(.*\/)?([^/]*)$/,(o,r,s)=>(e=r||"",t=s||"","")),{dirPart:e,filePart:t}}const j={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class g{constructor(e,t,o,r,s){this.context=e,this.errorContext=t,this.uri=o,this.json=r,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=Et(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(r.scenes==null,"Scenes must be defined."),t.errorUnsupportedIf(r.meshes==null,"Meshes must be defined"),t.errorUnsupportedIf(r.nodes==null,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,o,r){if(ce(o)){const c=Re(o);if(c.mediaType!=="model/gltf-binary")try{const i=JSON.parse(c.isBase64?atob(c.data):c.data);return new g(e,t,o,i)}catch{}const u=de(o);if(g._isGLBData(u))return this._fromGLBData(e,t,o,u)}if(o.endsWith(".gltf")){const c=await e.loadJSON(o,r);return new g(e,t,o,c)}const s=await e.loadBinary(o,r);if(g._isGLBData(s))return this._fromGLBData(e,t,o,s);const a=await e.loadJSON(o,r);return new g(e,t,o,a)}static _isGLBData(e){const t=new oe(e);return t.remainingBytes()>=4&&t.readUint32()===j.MAGIC}static async _fromGLBData(e,t,o,r){const s=await g._parseGLBData(t,r);return new g(e,t,o,s.json,s.binaryData)}static async _parseGLBData(e,t){const o=new oe(t);e.assert(o.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=o.readUint32(),s=o.readUint32(),a=o.readUint32();e.assert(r===j.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(s!==2,"An unsupported GLB container version was detected. Only version 2 is supported.");let c,u,i=0;for(;o.remainingBytes()>=8;){const d=o.readUint32(),f=o.readUint32();i===0?(e.assert(f===j.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(d>=0,"No JSON data found."),c=await Rt(o.readUint8Array(d))):i===1?(e.errorUnsupportedIf(f!==j.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),u=o.readUint8Array(d)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),i+=1}return c||e.error("No GLB JSON chunk detected."),{json:c,binaryData:u}}async getBuffer(e,t){const o=this.json.buffers[e],r=this.errorContext;if(o.uri==null)return r.assert(this.glbBuffer!=null,"GLB buffer not present"),this.glbBuffer;const s=await this._getBufferLoader(e,t);return r.assert(s.byteLength===o.byteLength,"Buffer byte lengths should match."),s}async _getBufferLoader(e,t){const o=this.bufferLoaders.get(e);if(o)return o;const r=this.json.buffers[e],s=this.context.loadBinary(this._resolveUri(r.uri),t).then(a=>new Uint8Array(a));return this.bufferLoaders.set(e,s),s}async getAccessor(e,t){const o=this.errorContext;o.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[e];o.errorUnsupportedIf((r==null?void 0:r.bufferView)==null,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in[$.MAT2,$.MAT3,$.MAT4],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],a=await this.getBuffer(s.buffer,t),c=At[r.type],u=Ut[r.componentType],i=c*u,d=s.byteStride||i;return{raw:a.buffer,byteStride:d,byteOffset:a.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:d===i,componentCount:c,componentByteSize:u,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(e.indices==null)return null;const o=await this.getAccessor(e.indices,t);if(o.isDenselyPacked)switch(o.componentType){case l.UNSIGNED_BYTE:return new Uint8Array(o.raw,o.byteOffset,o.entryCount);case l.UNSIGNED_SHORT:return new Uint16Array(o.raw,o.byteOffset,o.entryCount);case l.UNSIGNED_INT:return new Uint32Array(o.raw,o.byteOffset,o.entryCount)}else switch(o.componentType){case l.UNSIGNED_BYTE:return q(this._wrapAccessor(He,o));case l.UNSIGNED_SHORT:return q(this._wrapAccessor(ze,o));case l.UNSIGNED_INT:return q(this._wrapAccessor(Ye,o))}}async getPositionData(e,t){const o=this.errorContext;o.errorUnsupportedIf(e.attributes.POSITION==null,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return o.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+k[r.componentType]),o.errorUnsupportedIf(r.componentCount!==3,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(W,r)}async getNormalData(e,t){const o=this.errorContext;o.assert(e.attributes.NORMAL!=null,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return o.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+k[r.componentType]),o.errorUnsupportedIf(r.componentCount!==3,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(W,r)}async getTangentData(e,t){const o=this.errorContext;o.assert(e.attributes.TANGENT!=null,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return o.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+k[r.componentType]),o.errorUnsupportedIf(r.componentCount!==4,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new ne(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const o=this.errorContext;o.assert(e.attributes.TEXCOORD_0!=null,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return o.errorUnsupportedIf(r.componentCount!==2,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),r.componentType===l.FLOAT?this._wrapAccessor(he,r):(o.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),Ct(r))}async getVertexColors(e,t){const o=this.errorContext;o.assert(e.attributes.COLOR_0!=null,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(o.errorUnsupportedIf(r.componentCount!==4&&r.componentCount!==3,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),r.componentCount===4){if(r.componentType===l.FLOAT)return this._wrapAccessor(ne,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor(qe,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Je,r)}else if(r.componentCount===3){if(r.componentType===l.FLOAT)return this._wrapAccessor(W,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor(Xe,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Ke,r)}o.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+k[r.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,t,o){let r=this.materialCache.get(e.material);if(!r){const s=e.material!=null?ae(this.json.materials[e.material]):ae(),a=s.pbrMetallicRoughness,c=this.hasVertexColors(e),u=this.getTexture(a.baseColorTexture,t),i=this.getTexture(s.normalTexture,t),d=o?this.getTexture(s.occlusionTexture,t):null,f=o?this.getTexture(s.emissiveTexture,t):null,p=o?this.getTexture(a.metallicRoughnessTexture,t):null,y=e.material!=null?e.material:-1;r={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:a.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await u,normalTexture:await i,name:s.name,id:y,occlusionTexture:await d,emissiveTexture:await f,emissiveFactor:s.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await p,hasVertexColors:c,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return r}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf((e.texCoord||0)!==0,"Only TEXCOORD with index 0 is supported.");const o=e.index,r=this.errorContext,s=this.json.textures[o],a=_t(s.sampler!=null?this.json.samplers[s.sampler]:{});r.errorUnsupportedIf(s.source==null,"Source is expected to be defined for a texture.");const c=this.json.images[s.source],u=await this._loadTextureImageData(o,s,t);return Be(this.textureCache,o,()=>{const i=f=>f===33071||f===33648||f===10497,d=f=>(r.error(`Unexpected TextureSampler WrapMode: ${f}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:i(a.wrapS)?a.wrapS:d(a.wrapS),wrapT:i(a.wrapT)?a.wrapT:d(a.wrapT),minFilter:a.minFilter,name:c.name,id:o}})}getNodeTransform(e){if(e===void 0)return Nt;let t=this.nodeTransformCache.get(e);if(!t){const o=this.getNodeTransform(this._getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=Me(ye(),o,r.matrix):r.translation||r.rotation||r.scale?(t=me(o),r.translation&&$e(t,t,r.translation),r.rotation&&(V[3]=Ve(V,r.rotation),Le(t,t,V[3],V)),r.scale&&ve(t,t,r.scale)):t=o,this.nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return Fe(e,this.baseUri)}_getNodeParent(e){return this.nodeParentMap.get(e)}_checkVersionSupported(){const e=pe.parse(this.json.asset.version,"glTF");Ot.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&e.extensionsRequired.length!==0&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(o=>{this.nodeParentMap.set(o,t)})})}async _loadTextureImageData(e,t,o){const r=this.textureLoaders.get(e);if(r)return r;const s=this._createTextureLoader(t,o);return this.textureLoaders.set(e,s),s}async _createTextureLoader(e,t){const o=this.json.images[e.source];if(o.uri)return this.context.loadImage(this._resolveUri(o.uri),t);const r=this.errorContext;r.errorUnsupportedIf(o.bufferView==null,"Image bufferView must be defined."),r.errorUnsupportedIf(o.mimeType==null,"Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,t);return r.errorUnsupportedIf(s.byteStride!=null,"byteStride not supported for image buffer"),Bt(new Uint8Array(a.buffer,a.byteOffset+(s.byteOffset||0),s.byteLength),o.mimeType)}}const Ot=new pe(2,0,"glTF"),Nt=Ce(ye(),Math.PI/2),V=ke(),At={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Ut={[l.BYTE]:1,[l.UNSIGNED_BYTE]:1,[l.SHORT]:2,[l.UNSIGNED_SHORT]:2,[l.FLOAT]:4,[l.UNSIGNED_INT]:4};function Ct(n){switch(n.componentType){case l.BYTE:return new tt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_BYTE:return new et(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.SHORT:return new Ze(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_SHORT:return new We(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_INT:return new Qe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.FLOAT:return new he(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);default:return void le(n.componentType)}}async function Rt(n){return new Promise((e,t)=>{const o=new Blob([n]),r=new FileReader;r.onload=()=>{const s=r.result;e(JSON.parse(s))},r.onerror=s=>{t(s)},r.readAsText(o)})}async function Bt(n,e){return new Promise((t,o)=>{const r=new Blob([n],{type:e}),s=URL.createObjectURL(r),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then(()=>t(a),()=>t(a)):t(a)}),a.addEventListener("error",c=>{URL.revokeObjectURL(s),o(c)}),a.src=s})}const k={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Mt=0;async function er(n,e,t={},o=!0){const r=await g.load(n,J,e,t),s="gltf_"+Mt++,a={lods:[],materials:new Map,textures:new Map,meta:$t(r)},c=!(!r.json.asset.extras||r.json.asset.extras.ESRI_type!=="symbolResource"),u=new Map;await Lt(r,async(i,d,f,p)=>{var A;const y=(A=u.get(f))!=null?A:0;u.set(f,y+1);const m=i.mode!==void 0?i.mode:G.TRIANGLES,x=m===G.TRIANGLES||m===G.TRIANGLE_STRIP||m===G.TRIANGLE_FAN?m:null;if(fe(x))return void J.warnUnsupported("Unsupported primitive mode ("+Dt[m]+"). Skipping primitive.");if(!r.hasPositions(i))return void J.warn("Skipping primitive without POSITION vertex attribute.");const B=r.getPositionData(i,t),I=r.getMaterial(i,t,o),w=r.hasNormals(i)?r.getNormalData(i,t):null,S=r.hasTangents(i)?r.getTangentData(i,t):null,h=r.hasTextureCoordinates(i)?r.getTextureCoordinates(i,t):null,_=r.hasVertexColors(i)?r.getVertexColors(i,t):null,T=r.getIndexData(i,t),M={transform:me(d),attributes:{position:await B,normal:w?await w:null,texCoord0:h?await h:null,color:_?await _:null,tangent:S?await S:null},indices:await T,primitiveType:x,material:Ft(a,await I,s)};let N=null;te(a.meta)&&te(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(N=a.meta.ESRI_lod.thresholds[f]),a.lods[f]=a.lods[f]||{parts:[],name:p,lodThreshold:N},a.lods[f].parts[y]=M});for(const i of a.lods)i.parts=i.parts.filter(d=>!!d);return{model:a,meta:{isEsriSymbolResource:c,uri:r.uri},customMeta:{}}}function $t(n){const e=n.json;let t=null;return e.nodes.forEach(o=>{const r=o.extras;te(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}async function Lt(n,e){const t=n.json,o=t.scenes[t.scene||0].nodes,r=o.length>1,s=[];for(const c of o){const u=t.nodes[c];s.push(a(c,0)),vt(u)&&!r&&u.extensions.MSFT_lod.ids.forEach((i,d)=>a(i,d+1))}async function a(c,u){const i=t.nodes[c],d=n.getNodeTransform(c);if(J.warnUnsupportedIf(i.weights!=null,"Morph targets are not supported."),i.mesh!=null){const f=t.meshes[i.mesh];for(const p of f.primitives)s.push(e(p,d,u,f.name))}for(const f of i.children||[])s.push(a(f,u))}await Promise.all(s)}function vt(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function Ft(n,e,t){const o=s=>{const a=`${t}_tex_${s&&s.id}${s&&s.name?"_"+s.name:""}`;if(s&&!n.textures.has(a)){const c=xt(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:Pt.includes(s.minFilter),noUnpackFlip:!0});n.textures.set(a,c)}return a},r=`${t}_mat_${e.id}_${e.name}`;if(!n.materials.has(r)){const s=bt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?o(e.colorTexture):void 0,textureNormal:e.normalTexture?o(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?o(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?o(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?o(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(r,s)}return r}const J=new Tt,Pt=[K.LINEAR_MIPMAP_LINEAR,K.LINEAR_MIPMAP_NEAREST],Dt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Gt(n,e,t){return re(Z,e,n),re(ie,t,n),Pe(De(Z,Z,ie))/2}new Te(rt);new Te(()=>({p0:null,p1:null,p2:null}));const Z=R(),ie=R();let O=(()=>{const n=new Uint32Array(131072);for(let e=0;e<n.length;++e)n[e]=e;return n})();const we=new Uint16Array([0]),Q=(()=>{const n=new Uint16Array(65536);for(let e=0;e<n.length;++e)n[e]=e;return n})();function jt(n){if(n===1)return we;if(n<Q.length)return new Uint16Array(Q.buffer,0,n);if(n>O.length){const e=Math.max(2*O.length,n);O=new Uint32Array(e);for(let t=0;t<O.length;t++)O[t]=t}return new Uint32Array(O.buffer,0,n)}function tr(n){if(n===1)return new Uint16Array(we);if(n<Q.length)return new Uint16Array(Q.slice(0,n));if(n>O.length){const e=new Uint32Array(n);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(O.slice(0,n))}function rr(n,e,t){if(!n)return!1;const{size:o,data:r}=n;C(t,0,0,0),C(E,0,0,0);let s=0,a=0;for(let c=0;c<e.length-2;c+=3){const u=e[c+0]*o,i=e[c+1]*o,d=e[c+2]*o;C(b,r[u+0],r[u+1],r[u+2]),C(Y,r[i+0],r[i+1],r[i+2]),C(z,r[d+0],r[d+1],r[d+2]);const f=Gt(b,Y,z);f?(U(b,b,Y),U(b,b,z),H(b,b,1/3*f),U(t,t,b),s+=f):(U(E,E,b),U(E,E,Y),U(E,E,z),a+=3)}return(a!==0||s!==0)&&(s!==0?(H(t,t,1/s),!0):a!==0&&(H(t,E,1/a),!0))}function nr(n,e,t){if(!n||!e)return!1;const{size:o,data:r}=n;C(t,0,0,0);let s=-1,a=0;for(let c=0;c<e.length;c++){const u=e[c]*o;s!==u&&(t[0]+=r[u+0],t[1]+=r[u+1],t[2]+=r[u+2],a++),s=u}return a>1&&H(t,t,1/a),a>0}const b=R(),Y=R(),z=R(),E=R();function or(n,e=jt){return typeof n=="number"?e(n):Ge(n)||je(n)?new Uint32Array(n):n}function sr(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,o=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let s=0;s<t;s+=1)s%2==0?(o[r++]=s,o[r++]=s+1,o[r++]=s+2):(o[r++]=s+1,o[r++]=s,o[r++]=s+2)}else{let r=0;for(let s=0;s<t;s+=1)if(s%2==0){const a=n[s],c=n[s+1],u=n[s+2];o[r++]=a,o[r++]=c,o[r++]=u}else{const a=n[s+1],c=n[s],u=n[s+2];o[r++]=a,o[r++]=c,o[r++]=u}}return o}function ar(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,o=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let s=0;s<t;++s)o[r++]=0,o[r++]=s+1,o[r++]=s+2;return o}{const r=n[0];let s=n[1],a=0;for(let c=0;c<t;++c){const u=n[c+2];o[a++]=r,o[a++]=s,o[a++]=u,s=u}return o}}const ir=2.1;export{ot as a,ft as b,er as c,at as d,pt as e,sr as f,nr as g,or as h,ar as i,st as j,lt as k,jt as l,it as m,Zt as n,ir as o,tr as p,Wt as r,yt as t,rr as u};
