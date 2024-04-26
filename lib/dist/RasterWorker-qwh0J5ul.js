import { r as n, M as l, w as c, bb as f } from "./index-Ek1MTSEY.js";
import { u as i, s as u, v as d, y as p, O as S, b as h } from "./pixelUtils-fZs8KEK2.js";
import { S as O, T as x } from "./RasterSymbolizer-SsQwvNcx.js";
import { y, G as b, D as N } from "./rasterProjectionHelper-Ia_gNcY-.js";
import { d as v, m as J, h as g } from "./dataUtils-lGjvmAg3.js";
import { f as z } from "./utils-7FwU8yS2.js";
import "vue";
import "./colorUtils-tSH3jtgH.js";
class j {
  convertVectorFieldData(e) {
    const t = i.fromJSON(e.pixelBlock), s = v(t, e.type);
    return Promise.resolve(n(s) && s.toJSON());
  }
  async decode(e) {
    const t = await O(e.data, e.options);
    return t && t.toJSON();
  }
  symbolize(e) {
    e.pixelBlock = i.fromJSON(e.pixelBlock), e.extent = e.extent ? l.fromJSON(e.extent) : null;
    const t = this.symbolizer.symbolize(e);
    return Promise.resolve(n(t) && t.toJSON());
  }
  async updateSymbolizer(e) {
    var t;
    this.symbolizer = x.fromJSON(e.symbolizerJSON), e.histograms && ((t = this.symbolizer) == null ? void 0 : t.rendererJSON.type) === "rasterStretch" && (this.symbolizer.rendererJSON.histograms = e.histograms);
  }
  stretch(e) {
    const t = this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock), e.stretchParams);
    return Promise.resolve(n(t) && t.toJSON());
  }
  estimateStatisticsHistograms(e) {
    const t = u(i.fromJSON(e.srcPixelBlock));
    return Promise.resolve(t);
  }
  split(e) {
    const t = d(i.fromJSON(e.srcPixelBlock), e.tileSize, e.maximumPyramidLevel);
    return t && t.forEach((s, o) => {
      t.set(o, s == null ? void 0 : s.toJSON());
    }), Promise.resolve(t);
  }
  async mosaicAndTransform(e) {
    var t;
    const s = e.srcPixelBlocks.map((m) => m ? new i(m) : null), o = p(s, e.srcMosaicSize, { blockWidths: e.blockWidths, alignmentInfo: e.alignmentInfo, clipOffset: e.clipOffset, clipSize: e.clipSize });
    let r, a = o;
    return e.coefs && (a = S(o, e.destDimension, e.coefs, e.sampleSpacing, e.interpolation)), e.projectDirections && e.gcsGrid && (r = h(e.destDimension, e.gcsGrid), a = c(J(a, e.isUV ? "vector-uv" : "vector-magdir", r))), { pixelBlock: (t = a) == null ? void 0 : t.toJSON(), localNorthDirections: r };
  }
  async createStreamlinesMesh(e, t) {
    const s = { data: new Float32Array(e.flowData.buffer), width: e.flowData.width, height: e.flowData.height }, { vertexData: o, indexData: r } = await g(e.rendererSettings, s, t.signal);
    return { result: { vertexBuffer: o.buffer, indexBuffer: r.buffer }, transferList: [o.buffer, r.buffer] };
  }
  async getProjectionOffsetGrid(e) {
    const t = l.fromJSON(e.projectedExtent), s = l.fromJSON(e.srcBufferExtent);
    let o = null;
    e.datumTransformationSteps && (o = new f({ steps: e.datumTransformationSteps })), (e.includeGCSGrid || y(t.spatialReference, s.spatialReference, o)) && await b();
    const r = e.rasterTransform ? z(e.rasterTransform) : null;
    return N({ ...e, projectedExtent: t, srcBufferExtent: s, datumTransformation: o, rasterTransform: r });
  }
}
export {
  j as default
};
