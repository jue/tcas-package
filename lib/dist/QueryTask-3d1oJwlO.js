import { aD as h, aC as j, a, b as u, eu as y, c as q, b3 as I, L as v, z as T, g as z, ev as l, b7 as m, b6 as f, H as J } from "./index-h53IWweP.js";
import { f as S } from "./utils-QyFvT44r.js";
import { n as N, s as A } from "./executeForIds-i9bdbGYS.js";
import { S as C } from "./query-ePqQPCKo.js";
import { a as $ } from "./executeQueryJSON-Lx88O8j6.js";
import { n as U } from "./executeQueryPBF-vYJWbr4Z.js";
async function X(e, t, r) {
  const o = S(e);
  return C(o, h.from(t), { ...r }).then((s) => ({ count: s.data.count, extent: j.fromJSON(s.data.extent) }));
}
let i = class extends I {
  constructor(e) {
    super(e), this.dynamicDataSource = null, this.fieldsIndex = null, this.gdbVersion = null, this.infoFor3D = null, this.pbfSupported = !1, this.queryAttachmentsSupported = !1, this.sourceSpatialReference = null, this.url = null;
  }
  get parsedUrl() {
    return v(this.url);
  }
  async execute(e, t) {
    const r = await this.executeJSON(e, t);
    return this.featureSetFromJSON(e, r, t);
  }
  async executeJSON(e, t) {
    var n;
    const r = this._normalizeQuery(e), o = ((n = e.outStatistics) == null ? void 0 : n[0]) != null, s = T("featurelayer-pbf-statistics"), c = !o || s;
    let p;
    if (this.pbfSupported && c)
      try {
        p = await U(this.url, r, t);
      } catch (d) {
        if (d.name !== "query:parsing-pbf")
          throw d;
        this.pbfSupported = !1;
      }
    return this.pbfSupported && c || (p = await $(this.url, r, t)), this._normalizeFields(p.fields), p;
  }
  async featureSetFromJSON(e, t, r) {
    if (!this._queryIs3DObjectFormat(e) || this.infoFor3D == null || !t.features)
      return z.fromJSON(t);
    const { meshFeatureSetFromJSON: o } = await l(import("./meshFeatureSet-lNdx3Sb3.js").then((s) => s.b), r);
    return o(e, this.infoFor3D, t);
  }
  executeForCount(e, t) {
    return N(this.url, this._normalizeQuery(e), t);
  }
  executeForExtent(e, t) {
    return X(this.url, this._normalizeQuery(e), t);
  }
  executeForIds(e, t) {
    return A(this.url, this._normalizeQuery(e), t);
  }
  async executeRelationshipQuery(e, t) {
    const [{ default: r }, { executeRelationshipQuery: o }] = await l(Promise.all([import("./index-h53IWweP.js").then((s) => s.lF), import("./executeRelationshipQuery-Oj41BnoN.js")]), t);
    return e = r.from(e), (this.gdbVersion || this.dynamicDataSource) && ((e = e.clone()).gdbVersion = e.gdbVersion || this.gdbVersion, e.dynamicDataSource = e.dynamicDataSource || this.dynamicDataSource), o(this.url, e, t);
  }
  async executeRelationshipQueryForCount(e, t) {
    const [{ default: r }, { executeRelationshipQueryForCount: o }] = await l(Promise.all([import("./index-h53IWweP.js").then((s) => s.lF), import("./executeRelationshipQuery-Oj41BnoN.js")]), t);
    return e = r.from(e), (this.gdbVersion || this.dynamicDataSource) && ((e = e.clone()).gdbVersion = e.gdbVersion || this.gdbVersion, e.dynamicDataSource = e.dynamicDataSource || this.dynamicDataSource), o(this.url, e, t);
  }
  async executeAttachmentQuery(e, t) {
    const { executeAttachmentQuery: r, fetchAttachments: o, processAttachmentQueryResult: s } = await l(import("./queryAttachments-VV5-KgR1.js"), t), c = S(this.url);
    return s(c, await (this.queryAttachmentsSupported ? r(c, e, t) : o(c, e, t)));
  }
  async executeTopFeaturesQuery(e, t) {
    const { executeTopFeaturesQuery: r } = await l(import("./executeTopFeaturesQuery-uwTZAfR3.js"), t);
    return r(this.parsedUrl, e, this.sourceSpatialReference, t);
  }
  async executeForTopIds(e, t) {
    const { executeForTopIds: r } = await l(import("./executeForTopIds-vHFjwama.js"), t);
    return r(this.parsedUrl, e, t);
  }
  async executeForTopExtents(e, t) {
    const { executeForTopExtents: r } = await l(import("./executeForTopExtents-DOFUy_5e.js"), t);
    return r(this.parsedUrl, e, t);
  }
  async executeForTopCount(e, t) {
    const { executeForTopCount: r } = await l(import("./executeForTopCount-fiVkkRN7.js"), t);
    return r(this.parsedUrl, e, t);
  }
  _normalizeQuery(e) {
    let t = h.from(e);
    t.sourceSpatialReference = t.sourceSpatialReference || this.sourceSpatialReference, (this.gdbVersion || this.dynamicDataSource) && (t = t === e ? t.clone() : t, t.gdbVersion = e.gdbVersion || this.gdbVersion, t.dynamicDataSource = e.dynamicDataSource ? y.from(e.dynamicDataSource) : this.dynamicDataSource);
    const { infoFor3D: r } = this;
    if (r != null && this._queryIs3DObjectFormat(e)) {
      t = t === e ? t.clone() : t, t.formatOf3DObjects = null;
      const { supportedFormats: o, queryFormats: s } = r, c = m("model/gltf-binary", o) ?? f("glb", o), p = m("model/gltf+json", o) ?? f("gtlf", o);
      for (const n of s) {
        if (n === c) {
          t.formatOf3DObjects = n;
          break;
        }
        n !== p || t.formatOf3DObjects || (t.formatOf3DObjects = n);
      }
      if (!t.formatOf3DObjects)
        throw new J("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
      if (t.outFields == null || !t.outFields.includes("*")) {
        t = t === e ? t.clone() : t, t.outFields == null && (t.outFields = []);
        const { originX: n, originY: d, originZ: b, translationX: F, translationY: D, translationZ: x, scaleX: g, scaleY: O, scaleZ: w, rotationX: Q, rotationY: V, rotationZ: R, rotationDeg: _ } = r.transformFieldRoles;
        t.outFields.push(n, d, b, F, D, x, g, O, w, Q, V, R, _);
      }
    }
    return t;
  }
  _normalizeFields(e) {
    if (this.fieldsIndex != null && e != null)
      for (const t of e) {
        const r = this.fieldsIndex.get(t.name);
        r && Object.assign(t, r.toJSON());
      }
  }
  _queryIs3DObjectFormat(e) {
    return this.infoFor3D != null && e.returnGeometry === !0 && e.multipatchOption !== "xyFootprint" && !e.outStatistics;
  }
};
a([u({ type: y })], i.prototype, "dynamicDataSource", void 0), a([u()], i.prototype, "fieldsIndex", void 0), a([u()], i.prototype, "gdbVersion", void 0), a([u()], i.prototype, "infoFor3D", void 0), a([u({ readOnly: !0 })], i.prototype, "parsedUrl", null), a([u()], i.prototype, "pbfSupported", void 0), a([u()], i.prototype, "queryAttachmentsSupported", void 0), a([u()], i.prototype, "sourceSpatialReference", void 0), a([u({ type: String })], i.prototype, "url", void 0), i = a([q("geoscene.tasks.QueryTask")], i);
const H = i;
export {
  H as x
};
