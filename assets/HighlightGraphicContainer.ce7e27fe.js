import{a4 as s,a6 as o}from"./index.28204634.js";import{I as a}from"./Utils.6a347352.js";import{t as d}from"./BaseGraphicContainer.fad6790a.js";import{_ as h}from"./enums.de935fa5.js";let t=class extends d{doRender(r){r.drawPhase===a.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.bindTextures(r.context),!this.children.some(n=>n.hasData))return;super.renderChildren(r);const{painter:i}=r,e=i.effects.highlight;e.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,e.defines.concat(["highlightAll"])),e.draw(r),e.unbind()}};t=s([o("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const f=t;export{f as n};
