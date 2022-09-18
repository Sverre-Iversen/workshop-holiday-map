import{a4 as o,a5 as m,e2 as F,a6 as S,s as x,b as V,x as E,X as b,d3 as R}from"./index.28204634.js";import{t as q}from"./BitmapContainer.315a95dc.js";import{f as U,u as W}from"./LayerView.3f957b48.js";import{S as $}from"./ExportStrategy.c0ebefaa.js";import{i as L}from"./RefreshableLayerView.746a0d52.js";import{l as j}from"./ExportWMSImageParameters.d2b51642.js";import"./WGLContainer.e8ab7d6c.js";import"./enums.de935fa5.js";import"./pixelUtils.4b18f06d.js";import"./utils.c9645ca6.js";import"./Utils.6a347352.js";import"./enums.6e42a319.js";import"./Texture.97806b82.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.8d919001.js";import"./VertexArrayObject.e9c17f76.js";import"./ProgramTemplate.f648ddbe.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./Bitmap.72a46501.js";const z=t=>{let e=class extends t{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:i}=this;if(!r)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:n}=i;if(!n)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:a,width:s,height:p,x:d,y:l}=u;if(!(a&&s&&p))throw new x("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:s,height:p});const c=i.fetchFeatureInfo(a,s,p,d,l);return Promise.resolve(c?[c]:[])}};return o([m()],e.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],e.prototype,"exportImageVersion",null),o([m()],e.prototype,"layer",void 0),o([m(F)],e.prototype,"timeExtent",void 0),e=o([S("esri.layers.mixins.WMSLayerView")],e),e},C=V.getLogger("esri.views.2d.layers.WMSLayerView2D");let h=class extends z(L(U(W))){constructor(){super(...arguments),this.container=new q}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{E(e)||C.error(e)})}attach(){const{layer:t,container:e}=this,{imageMaxHeight:r,imageMaxWidth:i}=t;this.strategy=new $({container:e,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(b(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,container:r}=this,{x:i,y:n}=t,{spatialReference:u}=e;let a=null,s=0,p=0;if(r.children.some(M=>{const{width:f,height:w,resolution:v,x:y,y:g}=M,P=y+v*f,I=g-v*w;return i>=y&&i<=P&&n<=g&&n>=I&&(a=new R({xmin:y,ymin:I,xmax:P,ymax:g,spatialReference:u}),s=f,p=w,!0)}),!a)return null;const d=a.width/s,l=Math.round((i-a.xmin)/d),c=Math.round((a.ymax-n)/d);return{extent:a,width:s,height:p,x:l,y:c}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,...i})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([S("esri.views.2d.layers.WMSLayerView2D")],h);const se=h;export{se as default};
