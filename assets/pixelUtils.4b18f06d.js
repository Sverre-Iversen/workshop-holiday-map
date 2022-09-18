import{b as Z,a4 as R,a5 as V,ch as tt,a6 as et,ci as it,s as st,t as D,m as lt,r as $}from"./index.28204634.js";var N;const W=Z.getLogger("esri.layers.support.PixelBlock");let I=N=class extends it{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(N.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new st("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map(i=>this._calculateBandStatistics(i,this.mask));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||t==="f64"||t==="f32")return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,r]=e,o=this.pixels,s=this.width*this.height,l=o.length;let c,a,f;const x=[];for(let n=0;n<l;n++){f=N.createEmptyBand(t,s),c=o[n];for(let p=0;p<s;p++)a=c[p],f[p]=a>r?r:a<i?i:a;x.push(f)}this.pixels=x,this.pixelType=t}extractBands(t){if(D(t)||t.length===0||this.pixels==null||this.pixels.length===0)return this;const e=this.pixels.length,i=t.some(o=>o>=this.pixels.length),r=e===t.length&&!t.some((o,s)=>o!==s);return i||r?this:new N({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map(o=>this.pixels[o]),statistics:this.statistics&&t.map(o=>this.statistics[o])})}clone(){const t=new N({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=N.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const r=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=r?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=lt(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:r}=this;if(!t||!r||!r.length)return void W.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let o,s,l,c;o=s=l=r[0],r.length>=3?(s=r[1],l=r[2]):r.length===2&&(s=r[1]);const a=new Uint32Array(t),f=this.width*this.height;if(o.length===f)if(e&&e.length===f)if(i)for(c=0;c<f;c++)e[c]&&(a[c]=e[c]<<24|l[c]<<16|s[c]<<8|o[c]);else for(c=0;c<f;c++)e[c]&&(a[c]=255<<24|l[c]<<16|s[c]<<8|o[c]);else for(c=0;c<f;c++)a[c]=255<<24|l[c]<<16|s[c]<<8|o[c];else W.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:r}=this;if(!t||!e||!e.length)return void W.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const o=this.pixelType;let s=1,l=0,c=1;if(r&&r.length>0)l=r.map(u=>u.minValue).reduce((u,g)=>Math.min(u,g)),c=r.map(u=>u.maxValue-u.minValue).reduce((u,g)=>Math.max(u,g)),s=255/c;else{let u=255;o==="s8"?(l=-128,u=127):o==="u16"?u=65535:o==="s16"?(l=-32768,u=32767):o==="u32"?u=4294967295:o==="s32"?(l=-2147483648,u=2147483647):o==="f32"?(l=-34e38,u=34e38):o==="f64"&&(l=-Number.MAX_VALUE,u=Number.MAX_VALUE),s=255/(u-l)}const a=new Uint32Array(t),f=this.width*this.height;let x,n,p,h,m;if(x=n=p=e[0],x.length!==f)return W.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(n=e[1],e.length>=3&&(p=e[2]),i&&i.length===f)for(h=0;h<f;h++)i[h]&&(a[h]=255<<24|(p[h]-l)*s<<16|(n[h]-l)*s<<8|(x[h]-l)*s);else for(h=0;h<f;h++)a[h]=255<<24|(p[h]-l)*s<<16|(n[h]-l)*s<<8|(x[h]-l)*s;else if(i&&i.length===f)for(h=0;h<f;h++)m=(x[h]-l)*s,i[h]&&(a[h]=255<<24|m<<16|m<<8|m);else for(h=0;h<f;h++)m=(x[h]-l)*s,a[h]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return W.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let r,o,s,l;r=o=s=e[0],e.length>=3?(o=e[1],s=e[2]):e.length===2&&(o=e[1]);const c=this.width*this.height;if(r.length!==c)return W.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===c)for(l=0;l<c;l++)t[a++]=r[l],t[a++]=o[l],t[a++]=s[l],t[a++]=1&i[l];else for(l=0;l<c;l++)t[a++]=r[l],t[a++]=o[l],t[a++]=s[l],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,r=-1/0;const o=t.length;let s,l=0;if(e)for(s=0;s<o;s++)e[s]&&(l=t[s],i=l<i?l:i,r=l>r?l:r);else for(s=0;s<o;s++)l=t[s],i=l<i?l:i,r=l>r?l:r;return{minValue:i,maxValue:r}}};R([V({json:{write:!0}})],I.prototype,"width",void 0),R([V({json:{write:!0}})],I.prototype,"height",void 0),R([V({json:{write:!0}})],I.prototype,"pixelType",void 0),R([tt("pixelType")],I.prototype,"castPixelType",null),R([V({json:{write:!0}})],I.prototype,"validPixelCount",void 0),R([V({json:{write:!0}})],I.prototype,"mask",void 0),R([V({json:{write:!0}})],I.prototype,"maskIsAlpha",void 0),R([V({json:{write:!0}})],I.prototype,"pixels",void 0),R([V({json:{write:!0}})],I.prototype,"statistics",void 0),I=N=R([et("esri.layers.support.PixelBlock")],I);const G=I;function S(t){return $(t)&&t.declaredClass==="esri.layers.support.PixelBlock"&&t.pixels&&t.pixels.length>0}function pt(t,e){if(!(e!=null&&e.length)||!S(t))return t;const i=t.pixels.length;return e&&e.some(r=>r>=i)||i===1&&e.length===1&&e[0]===0?t:i!==e.length||e.some((r,o)=>r!==o)?new G({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map(r=>t.pixels[r]),statistics:t.statistics&&e.map(r=>t.statistics[r])}):t}function ut(t){if(!t)return;const e=t.colormap;if(!e||e.length===0)return;const i=e.sort((n,p)=>n[0]-p[0]);let r=0;i[0][0]<0&&(r=i[0][0]);const o=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*o),l=[];let c,a=0,f=0;const x=i[0].length===5;if(o>65536)return i.forEach(n=>{l[n[0]-r]=x?n.slice(1):n.slice(1).concat([255])}),{indexed2DColormap:l,offset:r,alphaSpecified:x};if(t.fillUnspecified)for(c=i[f],a=c[0]-r;a<o;a++)s[4*a]=c[1],s[4*a+1]=c[2],s[4*a+2]=c[3],s[4*a+3]=x?c[4]:255,a===c[0]-r&&(c=f===i.length-1?c:i[++f]);else for(a=0;a<i.length;a++)c=i[a],f=4*(c[0]-r),s[f]=c[1],s[f+1]=c[2],s[f+2]=c[3],s[f+3]=x?c[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:x}}function xt(t,e){if(!S(t)||!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),r=i.pixels;let o=i.mask;const s=i.width*i.height;if(r.length!==1)return t;const{indexedColormap:l,indexed2DColormap:c,offset:a,alphaSpecified:f}=e,x=l.length-1;let n=0;const p=r[0],h=new Uint8Array(p.length),m=new Uint8Array(p.length),u=new Uint8Array(p.length);let g,d=0;if(l)if(o)for(n=0;n<s;n++)o[n]&&(d=4*(p[n]-a),d<a||d>x?o[n]=0:(h[n]=l[d],m[n]=l[d+1],u[n]=l[d+2],o[n]=l[d+3]));else{for(o=new Uint8Array(s),n=0;n<s;n++)d=4*(p[n]-a),d<a||d>x?o[n]=0:(h[n]=l[d],m[n]=l[d+1],u[n]=l[d+2],o[n]=l[d+3]);i.mask=o}else if(o)for(n=0;n<s;n++)o[n]&&(g=c[p[n]],h[n]=g[0],m[n]=g[1],u[n]=g[2],o[n]=g[3]);else{for(o=new Uint8Array(s),n=0;n<s;n++)g=c[p[n]],h[n]=g[0],m[n]=g[1],u[n]=g[2],o[n]=g[3];i.mask=o}return i.pixels=[h,m,u],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function mt(t,e){if(!S(t))return null;const{pixels:i,mask:r}=t,o=t.width*t.height,s=i.length;let l=e.lut;const{offset:c}=e;let a,f;l&&l[0].length===1&&(l=i.map(()=>l));const x=[];let n,p,h;if(c)if(r==null)for(a=0;a<s;a++){for(n=i[a],p=l[a],h=new Uint8Array(o),f=0;f<o;f++)h[f]=p[n[f]-c];x.push(h)}else for(a=0;a<s;a++){for(n=i[a],p=l[a],h=new Uint8Array(o),f=0;f<o;f++)r[f]&&(h[f]=p[n[f]-c]);x.push(h)}else if(r==null)for(a=0;a<s;a++){for(n=i[a],p=l[a],h=new Uint8Array(o),f=0;f<o;f++)h[f]=p[n[f]];x.push(h)}else for(a=0;a<s;a++){for(n=i[a],p=l[a],h=new Uint8Array(o),f=0;f<o;f++)r[f]&&(h[f]=p[n[f]]);x.push(h)}const m=new G({width:t.width,height:t.height,pixels:x,mask:r,pixelType:"u8"});return m.updateStatistics(),m}function dt(t,e){if(!S(t))return null;const i=t.clone(),{pixels:r}=i,o=i.width*i.height,s=e.length,l=Math.floor(s/2),c=e[Math.floor(l)],a=r[0];let f,x,n,p,h,m,u=!1;const g=new Uint8Array(o),d=new Uint8Array(o),y=new Uint8Array(o);let A=i.mask;const w=e[0].mappedColor.length===4;for(A||(A=new Uint8Array(o),A.fill(w?255:1),i.mask=A),h=0;h<o;h++)if(A[h]){for(f=a[h],u=!1,m=l,x=c,n=0,p=s-1;p-n>1;){if(f===x.value){u=!0;break}f>x.value?n=m:p=m,m=Math.floor((n+p)/2),x=e[Math.floor(m)]}u||(f===e[n].value?(x=e[n],u=!0):f===e[p].value?(x=e[p],u=!0):f<e[n].value?(u=!1,x=null):f>e[n].value&&(f<e[p].value?(x=e[n],u=!0):p===s-1?(u=!1,x=null):(x=e[p],u=!0))),u?(g[h]=x.mappedColor[0],d[h]=x.mappedColor[1],y[h]=x.mappedColor[2],A[h]=x.mappedColor[3]):g[h]=d[h]=y[h]=A[h]=0}return i.pixels=[g,d,y],i.mask=A,i.pixelType="u8",i.maskIsAlpha=w,i}function nt(t,e,i,r,o,s,l,c){return{xmin:o<=i*t?0:o<i*t+t?o-i*t:t,ymin:s<=r*e?0:s<r*e+e?s-r*e:e,xmax:o+l<=i*t?0:o+l<i*t+t?o+l-i*t:t,ymax:s+c<=r*e?0:s+c<r*e+e?s+c-r*e:e}}function gt(t,e){if(!t||t.length===0)return null;const i=t.find(m=>m.pixelBlock);if(!i||D(i.pixelBlock))return null;const r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,o=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,s=.01*Math.min(r,o),l=t.sort((m,u)=>Math.abs(m.extent.ymax-u.extent.ymax)>s?u.extent.ymax-m.extent.ymax:Math.abs(m.extent.xmin-u.extent.xmin)>s?m.extent.xmin-u.extent.xmin:0),c=Math.min.apply(null,l.map(m=>m.extent.xmin)),a=Math.min.apply(null,l.map(m=>m.extent.ymin)),f=Math.max.apply(null,l.map(m=>m.extent.xmax)),x=Math.max.apply(null,l.map(m=>m.extent.ymax)),n={x:Math.round((e.xmin-c)/r),y:Math.round((x-e.ymax)/o)},p={width:Math.round((f-c)/r),height:Math.round((x-a)/o)},h={width:Math.round((e.xmax-e.xmin)/r),height:Math.round((e.ymax-e.ymin)/o)};return Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==l.length||n.x<0||n.y<0||p.width<h.width||p.height<h.height?null:{extent:e,pixelBlock:rt(l.map(m=>m.pixelBlock),p,{clipOffset:n,clipSize:h})}}function H(t,e,i,r,o,s){const{width:l,height:c}=i.block,{x:a,y:f}=i.offset,{width:x,height:n}=i.mosaic,p=nt(l,c,r,o,a,f,x,n);let h=0,m=0;if(s){const u=s.hasGCSSShiftTransform?360:s.halfWorldWidth,g=l*s.resolutionX,d=s.startX+r*g,y=d+g;d<u&&y>u?m=s.rightPadding:d>=u&&(h=s.leftMargin-s.rightPadding,m=0)}if(p.xmax-=m,typeof e!="number")for(let u=p.ymin;u<p.ymax;u++){const g=(o*c+u-f)*x+(r*l-a)+h,d=u*l;for(let y=p.xmin;y<p.xmax;y++)t[g+y]=e[d+y]}else for(let u=p.ymin;u<p.ymax;u++){const g=(o*c+u-f)*x+(r*l-a)+h;for(let d=p.xmin;d<p.xmax;d++)t[g+d]=e}}function rt(t,e,i={}){const{clipOffset:r,clipSize:o,alignmentInfo:s,blockWidths:l}=i;if(l)return at(t,e,{blockWidths:l});const c=t.find(M=>S(M));if(D(c))return null;const a=o?o.width:e.width,f=o?o.height:e.height,x=c.width,n=c.height,p=e.width/x,h=e.height/n,m={offset:r||{x:0,y:0},mosaic:o||e,block:{width:x,height:n}},u=c.pixelType,g=G.getPixelArrayConstructor(u),d=c.pixels.length,y=[];let A,w;for(let M=0;M<d;M++){w=new g(a*f);for(let v=0;v<h;v++)for(let k=0;k<p;k++){const b=t[v*p+k];S(b)&&(A=b.pixels[M],H(w,A,m,k,v,s))}y.push(w)}let B;if(t.some(M=>D(M)||M.mask&&M.mask.length>0)){B=new Uint8Array(a*f);for(let M=0;M<h;M++)for(let v=0;v<p;v++){const k=t[M*p+v],b=$(k)?k.mask:null;H(B,b||(k?1:0),m,v,M,s)}}const T=new G({width:a,height:f,pixels:y,pixelType:u,mask:B});return T.updateStatistics(),T}function at(t,e,i){const r=t.find(h=>$(h));if(D(r))return null;const o=t.some(h=>!$(h)||!!h.mask),{width:s,height:l}=e,c=o?new Uint8Array(s*l):null,{blockWidths:a}=i,f=[],x=r.getPlaneCount(),n=G.getPixelArrayConstructor(r.pixelType);if(o)for(let h=0,m=0;h<t.length;m+=a[h],h++){const u=t[h];if(!S(u))continue;const g=u.mask;for(let d=0;d<l;d++)for(let y=0;y<a[h];y++)c[d*s+y+m]=g==null?255:g[d*u.width+y]}for(let h=0;h<x;h++){const m=new n(s*l);for(let u=0,g=0;u<t.length;g+=a[u],u++){const d=t[u];if(!S(d))continue;const y=d.pixels[h];if(y!=null)for(let A=0;A<l;A++)for(let w=0;w<a[u];w++)m[A*s+w+g]=y[A*d.width+w]}f.push(m)}const p=new G({width:s,height:l,mask:c,pixels:f,pixelType:r.pixelType});return p.updateStatistics(),p}function yt(t,e,i){if(!S(t))return null;const{width:r,height:o}=t,s=e.x,l=e.y,c=i.width+s,a=i.height+l;if(s<0||l<0||c>r||a>o||s===0&&l===0&&c===r&&a===o)return t;t.mask||(t.mask=new Uint8Array(r*o));const f=t.mask;for(let x=0;x<o;x++){const n=x*r;for(let p=0;p<r;p++)f[n+p]=x<l||x>=a||p<s||p>=c?0:1}return t.updateStatistics(),t}function ot(t){if(!S(t))return null;const e=t.clone(),{width:i,height:r,pixels:o,mask:s}=t,l=o[0],c=e.pixels[0];for(let a=2;a<r-1;a++){const f=new Map;for(let n=a-2;n<a+2;n++)for(let p=0;p<4;p++){const h=n*i+p;E(f,l[h],s?s[h]:1)}c[a*i]=J(f),c[a*i+1]=c[a*i+2]=c[a*i];let x=3;for(;x<i-1;x++){let n=(a-2)*i+x+1;E(f,l[n],s?s[n]:1),n=(a-1)*i+x+1,E(f,l[n],s?s[n]:1),n=a*i+x+1,E(f,l[n],s?s[n]:1),n=(a+1)*i+x+1,E(f,l[n],s?s[n]:1),n=(a-2)*i+x-3,z(f,l[n],s?s[n]:1),n=(a-1)*i+x-3,z(f,l[n],s?s[n]:1),n=a*i+x-3,z(f,l[n],s?s[n]:1),n=(a+1)*i+x-3,z(f,l[n],s?s[n]:1),c[a*i+x]=J(f)}c[a*i+x+1]=c[a*i+x]}for(let a=0;a<i;a++)c[a]=c[i+a]=c[2*i+a],c[(r-1)*i+a]=c[(r-2)*i+a];return e.updateStatistics(),e}function J(t){if(t.size===0)return 0;let e=0,i=-1,r=0;const o=t.keys();let s=o.next();for(;!s.done;)r=t.get(s.value),r>e&&(i=s.value,e=r),s=o.next();return i}function z(t,e,i){if(i===0)return;const r=t.get(e);r===1?t.delete(e):t.set(e,r-1)}function E(t,e,i){i!==0&&t.set(e,t.has(e)?t.get(e)+1:1)}function ht(t,e,i){let{x:r,y:o}=e;const{width:s,height:l}=i;if(r===0&&o===0&&l===t.height&&s===t.width)return t;const{width:c,height:a}=t,f=Math.max(0,o),x=Math.max(0,r),n=Math.min(r+s,c),p=Math.min(o+l,a);if(n<0||p<0||!S(t))return null;r=Math.max(0,-r),o=Math.max(0,-o);const{pixels:h,mask:m}=t,u=s*l,g=h.length,d=[];for(let w=0;w<g;w++){const B=h[w],T=G.createEmptyBand(t.pixelType,u);for(let M=f;M<p;M++){const v=M*c;let k=(M+o-f)*s+r;for(let b=x;b<n;b++)T[k++]=B[v+b]}d.push(T)}const y=new Uint8Array(u);for(let w=f;w<p;w++){const B=w*c;let T=(w+o-f)*s+r;for(let M=x;M<n;M++)y[T++]=m?m[B+M]:1}const A=new G({width:i.width,height:i.height,pixelType:t.pixelType,pixels:d,mask:y});return A.updateStatistics(),A}function ct(t,e=!0){if(!S(t))return null;const{pixels:i,width:r,height:o,mask:s,pixelType:l}=t,c=[],a=Math.round(r/2),f=Math.round(o/2),x=o-1,n=r-1;for(let h=0;h<i.length;h++){const m=i[h],u=G.createEmptyBand(l,a*f);let g=0;for(let d=0;d<o;d+=2)for(let y=0;y<r;y+=2){const A=m[d*r+y];if(e){const w=y===n?A:m[d*r+y+1],B=d===x?A:m[d*r+y+r],T=y===n?B:d===x?w:m[d*r+y+r+1];u[g++]=(A+w+B+T)/4}else u[g++]=A}c.push(u)}let p=null;if(s){p=new Uint8Array(a*f);let h=0;for(let m=0;m<o;m+=2)for(let u=0;u<r;u+=2){const g=s[m*r+u];if(e){const d=u===n?g:s[m*r+u+1],y=m===x?g:s[m*r+u+r],A=u===n?y:m===x?d:s[m*r+u+r+1];p[h++]=g*d*y*A?1:0}else p[h++]=g}}return new G({width:a,height:f,pixelType:l,pixels:c,mask:p})}function wt(t,e,i){if(!S(t))return null;const{width:r,height:o}=e;let{width:s,height:l}=t;const c=new Map,a={x:0,y:0},f=i==null?1:1+i;let x=t;for(let n=0;n<f;n++){const p=Math.ceil(s/r),h=Math.ceil(l/o);for(let m=0;m<h;m++){a.y=m*o;for(let u=0;u<p;u++){a.x=u*r;const g=ht(x,a,e);c.set(`${n}/${m}/${u}`,g)}}n<f-1&&(x=ct(x)),s=Math.round(s/2),l=Math.round(l/2)}return c}function K(t,e,i,r,o=.5){const{width:s,height:l}=t,{width:c,height:a}=e,f=r.cols,x=r.rows,n=Math.ceil(c/f-.1/f),p=Math.ceil(a/x-.1/x);let h,m,u,g,d,y,A;const w=n*f,B=w*p*x,T=new Float32Array(B),M=new Float32Array(B),v=new Uint32Array(B),k=new Uint32Array(B);let b,j,P=0;for(let _=0;_<p;_++)for(let F=0;F<n;F++){h=12*(_*n+F),m=i[h],u=i[h+1],g=i[h+2],d=i[h+3],y=i[h+4],A=i[h+5];for(let C=0;C<x;C++){P=(_*x+C)*w+F*f,j=(C+.5)/x;for(let U=0;U<C;U++)b=(U+.5)/f,T[P+U]=(m*b+u*j+g)*s-o,M[P+U]=(d*b+y*j+A)*l-o,v[P+U]=Math.round(T[P+U]),k[P+U]=Math.round(M[P+U])}h+=6,m=i[h],u=i[h+1],g=i[h+2],d=i[h+3],y=i[h+4],A=i[h+5];for(let C=0;C<x;C++){P=(_*x+C)*w+F*f,j=(C+.5)/x;for(let U=C;U<f;U++)b=(U+.5)/f,T[P+U]=(m*b+u*j+g)*s-o,M[P+U]=(d*b+y*j+A)*l-o,v[P+U]=Math.round(T[P+U]),k[P+U]=Math.round(M[P+U])}}return{offsets_x:T,offsets_y:M,offsets_xi:v,offsets_yi:k,gridWidth:w}}function kt(t,e){const{coefficients:i,spacing:r}=e,{offsets_x:o,offsets_y:s,gridWidth:l}=K(t,t,i,{rows:r[0],cols:r[1]},.5),{width:c,height:a}=t,f=new Float32Array(c*a),x=180/Math.PI;for(let n=0;n<a;n++)for(let p=0;p<c;p++){const h=n*l+p,m=n===0?h:h-l,u=n===a-1?h:h+l,g=o[m]-o[u],d=s[u]-s[m];if(isNaN(g)||isNaN(d))f[n*c+p]=90;else{let y=Math.atan2(d,g)*x;y=(360+y)%360,f[n*c+p]=y}}return f}function At(t,e,i,r,o="nearest"){if(!S(t))return null;o==="majority"&&(t=ot(t));const{pixels:s,mask:l,pixelType:c}=t,a=t.width,f=t.height,x=G.getPixelArrayConstructor(c),n=s.length,{width:p,height:h}=e;let m=!1;for(let k=0;k<i.length;k+=3)i[k]===-1&&i[k+1]===-1&&i[k+2]===-1&&(m=!0);const{offsets_x:u,offsets_y:g,offsets_xi:d,offsets_yi:y,gridWidth:A}=K({width:a,height:f},e,i,r,o==="majority"?0:.5);let w;const B=(k,b,j)=>{const P=k instanceof Float32Array||k instanceof Float64Array?0:.5;for(let _=0;_<h;_++){w=_*A;for(let F=0;F<p;F++){if(u[w]<0||g[w]<0)k[_*p+F]=0;else if(j)k[_*p+F]=b[d[w]+y[w]*a];else{const C=Math.floor(u[w]),U=Math.floor(g[w]),O=Math.ceil(u[w]),L=Math.ceil(g[w]),X=u[w]-C,q=g[w]-U;if(!l||l[C+U*a]&&l[C+U*a]&&l[C+L*a]&&l[O+L*a]){const Q=(1-X)*b[C+U*a]+X*b[O+U*a],Y=(1-X)*b[C+L*a]+X*b[O+L*a];k[_*p+F]=(1-q)*Q+q*Y+P}else k[_*p+F]=b[d[w]+y[w]*a]}w++}}},T=[];let M;for(let k=0;k<n;k++)M=new x(p*h),B(M,s[k],o==="nearest"||o==="majority"),T.push(M);const v=new G({width:p,height:h,pixelType:c,pixels:T});if(l)v.mask=new Uint8Array(p*h),B(v.mask,l,!0);else if(m){v.mask=new Uint8Array(p*h);for(let k=0;k<p*h;k++)v.mask[k]=u[k]<0||g[k]<0?0:1}return v.updateStatistics(),v}export{At as C,wt as M,kt as U,rt as a,dt as b,gt as f,S as i,pt as l,ut as o,xt as r,mt as s,G as u,yt as x};
