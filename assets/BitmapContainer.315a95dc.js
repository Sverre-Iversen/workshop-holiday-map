import{b as s,W as t}from"./WGLContainer.e8ab7d6c.js";import{I as a}from"./Utils.6a347352.js";class p extends s{get requiresDedicatedFBO(){return this.children.some(e=>e.blendFunction==="additive")}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap",brushes:[t.bitmap],target:()=>this.children,drawPhase:a.MAP});return[...super.prepareRenderPasses(e),r]}}export{p as t};
