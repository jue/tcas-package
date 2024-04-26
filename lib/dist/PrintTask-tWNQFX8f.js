import { e as p, e5 as Ve, ay as we, d as y, m as le, M as xe, a as $, aD as k, D as J, bY as ue, x as ie, iP as $e, V as Oe, q as F, C as j, eN as Te, eR as ce, iQ as Je, iR as N, iS as Ne, iT as je, ig as Fe, r as _, hv as Ee, ac as Re, iU as ke, eb as z, iV as Ae, T as Ce, iW as Ue, aq as pe, ao as _e, fh as K, y as qe, aF as ze } from "./index-Ek1MTSEY.js";
import { a as Pe } from "./GPMessage-sfsWusZ1.js";
import { o as Be } from "./floorFilterUtils-HsstcPZ9.js";
import "vue";
let M = class extends we {
  constructor() {
    super(...arguments), this.outSpatialReference = null, this.processExtent = null, this.processSpatialReference = null, this.returnFeatureCollection = !1, this.returnM = !1, this.returnZ = !1;
  }
};
p([y({ type: le })], M.prototype, "outSpatialReference", void 0), p([y({ type: xe })], M.prototype, "processExtent", void 0), p([y({ type: le })], M.prototype, "processSpatialReference", void 0), p([y({ nonNullable: !0 })], M.prototype, "returnFeatureCollection", void 0), p([y({ nonNullable: !0 })], M.prototype, "returnM", void 0), p([y({ nonNullable: !0 })], M.prototype, "returnZ", void 0), M = p([$("geoscene.rest.geoprocessor.GPOptions")], M), M.from = Ve(M);
const se = M;
let G = class extends k {
  constructor() {
    super(...arguments), this.extent = null, this.height = null, this.href = null, this.opacity = 1, this.rotation = 0, this.scale = null, this.visible = !0, this.width = null;
  }
};
p([y({ type: xe })], G.prototype, "extent", void 0), p([y()], G.prototype, "height", void 0), p([y()], G.prototype, "href", void 0), p([y()], G.prototype, "opacity", void 0), p([y()], G.prototype, "rotation", void 0), p([y()], G.prototype, "scale", void 0), p([y()], G.prototype, "visible", void 0), p([y()], G.prototype, "width", void 0), G = p([$("geoscene.layer.support.MapImage")], G);
const ye = G;
let A = class extends k {
  constructor(a) {
    super(a), this.itemId = null, this.url = null;
  }
};
p([y({ type: String, json: { read: { source: "itemID" }, write: { target: "itemID" } } })], A.prototype, "itemId", void 0), p([y({ type: String, json: { write: !0 } })], A.prototype, "url", void 0), A = p([$("geoscene.rest.support.DataFile")], A);
const re = A, de = new J({ esriMeters: "meters", esriFeet: "feet", esriKilometers: "kilometers", esriMiles: "miles", esriNauticalMiles: "nautical-miles", esriYards: "yards" }, { ignoreUnknown: !1 });
let C = class extends k {
  constructor(a) {
    super(a), this.distance = 0, this.units = null;
  }
};
p([y({ json: { write: !0 } })], C.prototype, "distance", void 0), p([y({ json: { read: de.read, write: de.write } })], C.prototype, "units", void 0), C = p([$("geoscene.rest.support.LinearUnit")], C);
const fe = C, me = new J({ GPBoolean: "boolean", GPDataFile: "data-file", GPDate: "date", GPDouble: "double", GPFeatureRecordSetLayer: "feature-record-set-layer", GPField: "field", GPLinearUnit: "linear-unit", GPLong: "long", GPRasterData: "raster-data", GPRasterDataLayer: "raster-data-layer", GPRecordSet: "record-set", GPString: "string", "GPMultiValue:GPBoolean": "multi-value", "GPMultiValue:GPDataFile": "multi-value", "GPMultiValue:GPDate": "multi-value", "GPMultiValue:GPDouble": "multi-value", "GPMultiValue:GPFeatureRecordSetLayer": "multi-value", "GPMultiValue:GPField": "multi-value", "GPMultiValue:GPLinearUnit": "multi-value", "GPMultiValue:GPLong": "multi-value", "GPMultiValue:GPRasterData": "multi-value", "GPMultiValue:GPRasterDataLayer": "multi-value", "GPMultiValue:GPRecordSet": "multi-value", "GPMultiValue:GPString": "multi-value" });
let U = class extends k {
  constructor(a) {
    super(a), this.dataType = null, this.value = null;
  }
};
p([y({ json: { read: me.read, write: me.write } })], U.prototype, "dataType", void 0), p([y()], U.prototype, "value", void 0), U = p([$("geoscene.rest.support.ParameterValue")], U);
const Ke = U;
let E = class extends k {
  constructor(e) {
    super(e), this.format = null, this.itemId = null, this.url = null;
  }
};
p([y()], E.prototype, "format", void 0), p([y({ json: { read: { source: "itemID" }, write: { target: "itemID" } } })], E.prototype, "itemId", void 0), p([y()], E.prototype, "url", void 0), E = p([$("geoscene.rest.support.RasterData")], E);
const he = E;
async function De(e, a, t, r, n) {
  const i = {}, s = {}, u = [];
  return We(r, u, i), Oe(u).then((o) => {
    const { outSpatialReference: l, processExtent: d, processSpatialReference: f, returnFeatureCollection: m, returnM: w, returnZ: g } = t, { path: b } = F(e);
    for (const P in i) {
      const D = i[P];
      s[P] = o.slice(D[0], D[1]);
    }
    const c = l ? l.wkid || l : null, S = f ? f.wkid || f : null, x = a === "execute" ? { returnFeatureCollection: m || void 0, returnM: w || void 0, returnZ: g || void 0 } : null, h = Y({ ...d ? { context: { extent: d, outSR: c, processSR: S } } : { "env:outSR": c, "env:processSR": S }, ...r, ...x, f: "json" }, null, s), v = { ...n, query: h };
    return j(`${b}/${a}`, v);
  });
}
function We(e, a, t) {
  for (const r in e) {
    const n = e[r];
    if (n && typeof n == "object" && n instanceof ie) {
      const { features: i } = n;
      t[r] = [a.length, a.length + i.length], i.forEach((s) => {
        a.push(s.geometry);
      });
    }
  }
}
function ne(e) {
  const a = e.dataType, t = Ke.fromJSON(e);
  switch (a) {
    case "GPBoolean":
    case "GPDouble":
    case "GPLong":
    case "GPString":
    case "GPMultiValue:GPBoolean":
    case "GPMultiValue:GPDouble":
    case "GPMultiValue:GPLong":
    case "GPMultiValue:GPString":
      return t;
    case "GPDate":
      t.value = new Date(t.value);
      break;
    case "GPDataFile":
      t.value = re.fromJSON(t.value);
      break;
    case "GPLinearUnit":
      t.value = fe.fromJSON(t.value);
      break;
    case "GPFeatureRecordSetLayer":
    case "GPRecordSet": {
      const r = e.value.url;
      t.value = r ? re.fromJSON(t.value) : ie.fromJSON(t.value);
      break;
    }
    case "GPRasterData":
    case "GPRasterDataLayer": {
      const r = e.value.mapImage;
      t.value = r ? ye.fromJSON(r) : he.fromJSON(t.value);
      break;
    }
    case "GPField":
      t.value = ue.fromJSON(t.value);
      break;
    case "GPMultiValue:GPDate": {
      const r = t.value;
      t.value = r.map((n) => new Date(n));
      break;
    }
    case "GPMultiValue:GPDataFile":
      t.value = t.value.map((r) => re.fromJSON(r));
      break;
    case "GPMultiValue:GPLinearUnit":
      t.value = t.value.map((r) => fe.fromJSON(r));
      break;
    case "GPMultiValue:GPFeatureRecordSetLayer":
    case "GPMultiValue:GPRecordSet":
      t.value = t.value.map((r) => ie.fromJSON(r));
      break;
    case "GPMultiValue:GPRasterData":
    case "GPMultiValue:GPRasterDataLayer":
      t.value = t.value.map((r) => r ? ye.fromJSON(r) : he.fromJSON(t.value));
      break;
    case "GPMultiValue:GPField":
      t.value = t.value.map((r) => ue.fromJSON(r));
  }
  return t;
}
function Y(e, a, t) {
  for (const r in e) {
    const n = e[r];
    Array.isArray(n) ? e[r] = JSON.stringify(n.map((i) => Y({ item: i }, !0).item)) : n instanceof Date && (e[r] = n.getTime());
  }
  return $e(e, a, t);
}
async function Ze(e, a, t, r) {
  return t = se.from(t || {}), De(e, "execute", t, a, r).then((n) => {
    const i = n.data.results || [], s = n.data.messages || [];
    return { results: i.map(ne), messages: s.map((u) => Pe.fromJSON(u)) };
  });
}
var W;
const Qe = new J({ esriJobCancelled: "job-cancelled", esriJobCancelling: "job-cancelling", esriJobDeleted: "job-deleted", esriJobDeleting: "job-deleting", esriJobTimedOut: "job-timed-out", esriJobExecuting: "job-executing", esriJobFailed: "job-failed", esriJobNew: "job-new", esriJobSubmitted: "job-submitted", esriJobSucceeded: "job-succeeded", esriJobWaiting: "job-waiting" });
let T = W = class extends k {
  constructor(e) {
    super(e), this.jobId = null, this.jobStatus = null, this.messages = null, this.requestOptions = null, this.sourceUrl = null, this._timer = null;
  }
  cancelJob(e) {
    const { jobId: a, sourceUrl: t } = this, { path: r } = F(t), n = { ...this.requestOptions, ...e, query: { f: "json" } };
    return this._clearTimer(), j(`${r}/jobs/${a}/cancel`, n).then((i) => {
      const s = W.fromJSON(i.data);
      return this.messages = s.messages, this.jobStatus = s.jobStatus, this;
    });
  }
  destroy() {
    clearInterval(this._timer);
  }
  checkJobStatus(e) {
    const { path: a } = F(this.sourceUrl), t = { ...this.requestOptions, ...e, query: { f: "json" } }, r = `${a}/jobs/${this.jobId}`;
    return j(r, t).then(({ data: n }) => {
      const i = W.fromJSON(n);
      return this.messages = i.messages, this.jobStatus = i.jobStatus, this;
    });
  }
  fetchResultData(e, a, t) {
    a = se.from(a || {});
    const { returnFeatureCollection: r, returnM: n, returnZ: i, outSpatialReference: s } = a, { path: u } = F(this.sourceUrl), o = Y({ returnFeatureCollection: r, returnM: n, returnZ: i, outSR: s, returnType: "data", f: "json" }, null), l = { ...this.requestOptions, ...t, query: o }, d = `${u}/jobs/${this.jobId}/results/${e}`;
    return j(d, l).then((f) => ne(f.data));
  }
  fetchResultImage(e, a, t) {
    const { path: r } = F(this.sourceUrl), n = { ...a.toJSON(), f: "json" }, i = Y(n), s = { ...this.requestOptions, ...t, query: i }, u = `${r}/jobs/${this.jobId}/results/${e}`;
    return j(u, s).then((o) => ne(o.data));
  }
  async fetchResultMapImageLayer() {
    const { path: e } = F(this.sourceUrl), a = e.indexOf("/GPServer/"), t = `${e.substring(0, a)}/MapServer/jobs/${this.jobId}`;
    return new (await import("./MapImageLayer-UtYwV_Bf.js")).default({ url: t });
  }
  async waitForJobCompletion(e = {}) {
    const { interval: a = 1e3, signal: t, statusCallback: r } = e;
    return new Promise((n, i) => {
      Te(t, () => {
        this._clearTimer(), i(ce());
      }), this._clearTimer();
      const s = setInterval(() => {
        this._timer || i(ce()), this.checkJobStatus(this.requestOptions).then((u) => {
          const { jobStatus: o } = u;
          switch (this.jobStatus = o, o) {
            case "job-succeeded":
              this._clearTimer(), n(this);
              break;
            case "job-submitted":
            case "job-executing":
            case "job-waiting":
            case "job-new":
              r && r(this);
              break;
            case "job-cancelled":
            case "job-cancelling":
            case "job-deleted":
            case "job-deleting":
            case "job-timed-out":
            case "job-failed":
              this._clearTimer(), i(this);
          }
        });
      }, a);
      this._timer = s;
    });
  }
  _clearTimer() {
    this._timer && (clearInterval(this._timer), this._timer = null);
  }
};
p([y()], T.prototype, "jobId", void 0), p([y({ json: { read: Qe.read } })], T.prototype, "jobStatus", void 0), p([y({ type: [Pe] })], T.prototype, "messages", void 0), p([y()], T.prototype, "requestOptions", void 0), p([y({ json: { write: !0 } })], T.prototype, "sourceUrl", void 0), T = W = p([$("geoscene.rest.support.JobInfo")], T);
const Ye = T;
async function He(e, a, t, r) {
  return t = se.from(t || {}), De(e, "submitJob", t, a, r).then((n) => {
    const i = Ye.fromJSON(n.data);
    return i.sourceUrl = e, i;
  });
}
const H = new J({ PDF: "pdf", PNG32: "png32", PNG8: "png8", JPG: "jpg", GIF: "gif", EPS: "eps", SVG: "svg", SVGZ: "svgz" });
H.fromJSON.bind(H);
const Xe = H.toJSON.bind(H), X = new J({ MAP_ONLY: "map-only", "A3 Landscape": "a3-landscape", "A3 Portrait": "a3-portrait", "A4 Landscape": "a4-landscape", "A4 Portrait": "a4-portrait", "Letter ANSI A Landscape": "letter-ansi-a-landscape", "Letter ANSI A Portrait": "letter-ansi-a-portrait", "Tabloid ANSI B Landscape": "tabloid-ansi-b-landscape", "Tabloid ANSI B Portrait": "tabloid-ansi-b-portrait" });
X.fromJSON.bind(X);
const et = X.toJSON.bind(X), ae = "simple-marker", tt = "picture-marker", ge = "simple-line", rt = "simple-fill", at = "shield-label-symbol", it = "text";
function nt(e, a) {
  const { graphic: t, renderer: r, symbol: n } = a, i = n.type;
  if (i === it || i === at || !("visualVariables" in r) || !r.visualVariables)
    return;
  const s = r.getVisualVariablesForType("size"), u = r.getVisualVariablesForType("color"), o = r.getVisualVariablesForType("opacity"), l = r.getVisualVariablesForType("rotation"), d = s[0], f = u[0], m = o[0], w = l[0];
  if (d) {
    const g = i === ae ? n.style : null, b = Je(d, t, { shape: g });
    b != null && (i === ae ? e.size = N(b) : i === tt ? (e.width = N(b), e.height = N(b)) : i === ge ? e.width = N(b) : e.outline && (e.outline.width = N(b)));
  }
  if (f) {
    const g = Ne(f, t);
    (g && i === ae || i === ge || i === rt) && (e.color = g ? g.toJSON() : void 0);
  }
  if (m) {
    const g = je(m, t);
    g != null && e.color && (e.color[3] = Math.round(255 * g));
  }
  w && (e.angle = -Fe(r, t));
}
function ot() {
  return { layerDefinition: { name: "multipointLayer", geometryType: "esriGeometryMultipoint", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryMultipoint", features: [] } };
}
function st() {
  return { layerDefinition: { name: "polygonLayer", geometryType: "esriGeometryPolygon", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPolygon", features: [] } };
}
function be() {
  return { layerDefinition: { name: "pointLayer", geometryType: "esriGeometryPoint", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPoint", features: [] } };
}
function lt() {
  return { layerDefinition: { name: "polylineLayer", geometryType: "esriGeometryPolyline", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPolyline", features: [] } };
}
function ut(e, a = 15) {
  const t = e.canvas.width, r = e.canvas.height, n = e.getImageData(0, 0, t, r).data;
  let i, s, u, o, l, d;
  e:
    for (s = r; s--; )
      for (i = t; i--; )
        if (n[4 * (t * s + i) + 3] > a) {
          d = s;
          break e;
        }
  if (!d)
    return null;
  e:
    for (i = t; i--; )
      for (s = d + 1; s--; )
        if (n[4 * (t * s + i) + 3] > a) {
          l = i;
          break e;
        }
  e:
    for (i = 0; i <= l; ++i)
      for (s = d + 1; s--; )
        if (n[4 * (t * s + i) + 3] > a) {
          u = i;
          break e;
        }
  e:
    for (s = 0; s <= d; ++s)
      for (i = u; i <= l; ++i)
        if (n[4 * (t * s + i) + 3] > a) {
          o = s;
          break e;
        }
  return { x: u, y: o, width: l - u, height: d - o };
}
function ct(e, a) {
  const t = e.allLayerViews.items;
  if (a === e.scale)
    return t.filter((n) => !n.suspended);
  const r = new Array();
  for (const n of t)
    gt(n.parent) && !r.includes(n.parent) || !n.visible || a && "isVisibleAtScale" in n && !n.isVisibleAtScale(a) || r.push(n);
  return r;
}
function pt(e) {
  return e && e.type === "bing-maps";
}
function Ie(e) {
  return e && "blendMode" in e && "effect" in e;
}
function yt(e) {
  return e && e.type === "csv";
}
function dt(e) {
  return e && e.type === "feature";
}
function ft(e) {
  return e && e.type === "geojson";
}
function mt(e) {
  return e && e.type === "graphics";
}
function ht(e) {
  return e && e.type === "group";
}
function gt(e) {
  return e && e.declaredClass === "geoscene.views.2d.layers.GroupLayerView2D";
}
function bt(e) {
  return e && e.type === "imagery";
}
function vt(e) {
  return e && e.type === "imagery-tile";
}
function St(e) {
  return e && e.type === "kml";
}
function wt(e) {
  return e && e.type === "map-image";
}
function xt(e) {
  return e && e.type === "map-notes";
}
function Pt(e) {
  return e && e.type === "open-street-map";
}
function Dt(e) {
  const a = e.layer;
  if (Ie(a)) {
    const t = a.blendMode;
    if ((!t || t === "normal") && (a.effect || "featureEffect" in e && e.featureEffect))
      return !0;
  }
  return !1;
}
function It(e) {
  return e && e.type === "stream";
}
function Mt(e) {
  return e && e.type === "tile";
}
function Gt(e) {
  return e && e.type === "vector-tile";
}
function Lt(e) {
  return e && e.type === "web-tile";
}
function Vt(e) {
  return e && e.type === "wms";
}
function $t(e) {
  return e && e.type === "wmts";
}
let I = class extends we {
  constructor(e) {
    super(e), this.attributionVisible = !0, this.exportOptions = { width: 800, height: 1100, dpi: 96 }, this.forceFeatureAttributes = !1, this.format = "png32", this.label = null, this.layout = "map-only", this.layoutOptions = null, this.outScale = 0, this.scalePreserved = !0, this.showLabels = !0;
  }
};
p([y()], I.prototype, "attributionVisible", void 0), p([y()], I.prototype, "exportOptions", void 0), p([y()], I.prototype, "forceFeatureAttributes", void 0), p([y()], I.prototype, "format", void 0), p([y()], I.prototype, "label", void 0), p([y()], I.prototype, "layout", void 0), p([y()], I.prototype, "layoutOptions", void 0), p([y()], I.prototype, "outScale", void 0), p([y()], I.prototype, "scalePreserved", void 0), p([y()], I.prototype, "showLabels", void 0), I = p([$("geoscene.rest.support.PrintTemplate")], I);
const Ot = I, ve = { Feet: "ft", Kilometers: "km", Meters: "m", Miles: "mi" }, Se = new J({ esriFeet: "Feet", esriKilometers: "Kilometers", esriMeters: "Meters", esriMiles: "Miles" }), Tt = new J({ esriExecutionTypeSynchronous: "sync", esriExecutionTypeAsynchronous: "async" }), ee = /* @__PURE__ */ new Map();
async function Jt(e, a, t) {
  const r = Ge(e);
  let n = ee.get(r);
  return Promise.resolve().then(() => n ? { data: n.gpMetadata } : (n = { gpServerUrl: r, is11xService: !1, legendLayerNameMap: {}, legendLayers: [] }, j(r, { query: { f: "json" } }))).then((i) => (n.gpMetadata = i.data, n.cimVersion = n.gpMetadata.cimVersion, n.is11xService = !!n.cimVersion, ee.set(r, n), Me(a, n))).then((i) => {
    const s = Xt(n);
    let u;
    const o = (l) => s === "sync" ? l.results && l.results[0] && l.results[0].value : u.fetchResultData("Output_File", null, t).then((d) => d.value);
    return s === "async" ? He(e, i, null, t).then((l) => (u = l, l.waitForJobCompletion({ interval: a.updateDelay }).then(o))) : Ze(e, i, null, t).then(o);
  });
}
async function Me(e, a) {
  a = a || { is11xService: !1, legendLayerNameMap: {}, legendLayers: [] };
  const t = e.template || new Ot();
  t.showLabels == null && (t.showLabels = !0);
  const r = t.exportOptions;
  let n;
  const i = et(t.layout);
  if (r && (n = { dpi: r.dpi }, i.toLowerCase() === "map_only" || i === "")) {
    const f = r.width, m = r.height;
    n.outputSize = [f, m];
  }
  const s = t.layoutOptions;
  let u;
  if (s) {
    let f, m;
    s.scalebarUnit === "Miles" || s.scalebarUnit === "Kilometers" ? (f = "Kilometers", m = "Miles") : s.scalebarUnit !== "Meters" && s.scalebarUnit !== "Feet" || (f = "Meters", m = "Feet"), u = { titleText: s.titleText, authorText: s.authorText, copyrightText: s.copyrightText, customTextElements: s.customTextElements, scaleBarOptions: { metricUnit: Se.toJSON(f), metricLabel: ve[f], nonMetricUnit: Se.toJSON(m), nonMetricLabel: ve[m] } };
  }
  let o = null;
  s != null && s.legendLayers && (o = s.legendLayers.map((f) => {
    a.legendLayerNameMap[f.layerId] = f.title;
    const m = { id: f.layerId };
    return f.subLayerIds && (m.subLayerIds = f.subLayerIds), m;
  }));
  const l = await Nt(e, t, a);
  if (l.operationalLayers) {
    const f = new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"), m = /[\u0600-\u06FF]/, w = (b) => {
      const c = b.text, S = b.font, x = S && S.family && S.family.toLowerCase();
      c && S && (x === "arial" || x === "arial unicode ms") && (S.family = f.test(c) ? "Arial Unicode MS" : "Arial", S.style !== "normal" && m.test(c) && (S.family = "Arial Unicode MS"));
    }, g = () => {
      throw new qe("print:cim-symbol-unsupported", "CIMSymbol is not supported by a print service published from ArcMap");
    };
    l.operationalLayers.forEach((b) => {
      var c, S, x;
      (c = b.featureCollection) != null && c.layers ? b.featureCollection.layers.forEach((h) => {
        var v, P, D, L;
        if ((v = h.layerDefinition) != null && (P = v.drawingInfo) != null && (D = P.renderer) != null && D.symbol) {
          const O = h.layerDefinition.drawingInfo.renderer;
          O.symbol.type === "esriTS" ? w(O.symbol) : O.symbol.type !== "CIMSymbolReference" || a.is11xService || g();
        }
        (L = h.featureSet) != null && L.features && h.featureSet.features.forEach((O) => {
          O.symbol && (O.symbol.type === "esriTS" ? w(O.symbol) : O.symbol.type !== "CIMSymbolReference" || a.is11xService || g());
        });
      }) : !a.is11xService && (S = b.layerDefinition) != null && (x = S.drawingInfo) != null && x.renderer && JSON.stringify(b.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"') && g();
    });
  }
  e.outSpatialReference && (l.mapOptions.spatialReference = e.outSpatialReference.toJSON()), Object.assign(l, { exportOptions: n, layoutOptions: u || {} }), Object.assign(l.layoutOptions, { legendOptions: { operationalLayers: o ?? a.legendLayers.slice() } }), a.legendLayers.length = 0, ee.set(a.gpServerUrl, a);
  const d = { Web_Map_as_JSON: JSON.stringify(l), Format: Xe(t.format), Layout_Template: i };
  return e.extraParameters && Object.assign(d, e.extraParameters), d;
}
async function Nt(e, a, t) {
  const r = e.view;
  let n = r.spatialReference;
  const i = { operationalLayers: await jt(r, a, t) };
  let s = t.ssExtent || e.extent || r.extent;
  if (n && n.isWrappable && (s = s.clone()._normalize(!0), n = s.spatialReference), i.mapOptions = { extent: s && s.toJSON(), spatialReference: n && n.toJSON(), showAttribution: a.attributionVisible }, t.ssExtent = null, r.background && (i.background = r.background.toJSON()), r.rotation && (i.mapOptions.rotation = -r.rotation), a.scalePreserved && (i.mapOptions.scale = a.outScale || r.scale), _(r.timeExtent)) {
    const u = _(r.timeExtent.start) ? r.timeExtent.start.getTime() : null, o = _(r.timeExtent.end) ? r.timeExtent.end.getTime() : null;
    i.mapOptions.time = [u, o];
  }
  return i;
}
function Ge(e) {
  let a = e;
  const t = a.lastIndexOf("/GPServer/");
  return t > 0 && (a = a.slice(0, t + 9)), a;
}
async function jt(e, a, t) {
  const r = [], n = { layerView: null, printTemplate: a, view: e };
  let i = 0;
  a.scalePreserved && (i = a.outScale || e.scale);
  const s = ct(e, i);
  for (const u of s) {
    const o = u.layer;
    if (!o.loaded || ht(o))
      continue;
    let l;
    n.layerView = u, l = Dt(u) ? await q(o, n, t) : pt(o) ? Ft(o) : yt(o) ? await Et(o, n, t) : dt(o) ? await Rt(o, n, t) : ft(o) ? await kt(o, n, t) : mt(o) ? await At(o, n, t) : bt(o) ? Ct(o, t) : vt(o) ? await Ut(o, n, t) : St(o) ? await _t(o, n, t) : wt(o) ? qt(o, n, t) : xt(o) ? await zt(n, t) : Pt(o) ? Bt() : It(o) ? await Kt(o, n, t) : Mt(o) ? Wt(o, t) : Gt(o) ? await Zt(o, n, t) : Lt(o) ? Qt(o) : Vt(o) ? Yt(o) : $t(o) ? Ht(o) : await q(o, n, t), l && (Array.isArray(l) ? r.push(...l) : (l.id = o.id, l.title = t.legendLayerNameMap[o.id] || o.title, l.opacity = o.opacity, l.minScale = o.minScale || 0, l.maxScale = o.maxScale || 0, Ie(o) && o.blendMode && o.blendMode !== "normal" && (l.blendMode = o.blendMode), r.push(l)));
  }
  if (i && r.forEach((u) => {
    u.minScale = 0, u.maxScale = 0;
  }), e.graphics && e.graphics.length) {
    const u = await V(null, e.graphics, a, t);
    u && r.push(u);
  }
  return r;
}
function Ft(e) {
  return { culture: e.culture, key: e.key, type: "BingMaps" + (e.style === "aerial" ? "Aerial" : e.style === "hybrid" ? "Hybrid" : "Road") };
}
async function Et(e, a, t) {
  e.legendEnabled && t.legendLayers.push({ id: e.id });
  const r = a.layerView, n = a.printTemplate;
  let i;
  return !t.is11xService || r.filter ? V(e, await te(r), n, t) : (i = { type: "CSV" }, e.write(i, { origin: "web-map" }), delete i.popupInfo, delete i.layerType, i.showLabels = n.showLabels && e.labelsVisible, i);
}
async function V(e, a, t, r) {
  let n;
  const i = st(), s = lt(), u = be(), o = ot(), l = be();
  if (l.layerDefinition.name = "textLayer", delete l.layerDefinition.drawingInfo, e) {
    if (e.declaredClass === "geoscene.layers.FeatureLayer" || e.declaredClass === "geoscene.layers.StreamLayer" ? i.layerDefinition.name = s.layerDefinition.name = u.layerDefinition.name = o.layerDefinition.name = r.legendLayerNameMap[e.id] || e.get("arcgisProps.title") || e.title : e.declaredClass === "geoscene.layers.GraphicsLayer" && (a = e.graphics.items), e.renderer) {
      const h = e.renderer.toJSON();
      i.layerDefinition.drawingInfo.renderer = h, s.layerDefinition.drawingInfo.renderer = h, u.layerDefinition.drawingInfo.renderer = h, o.layerDefinition.drawingInfo.renderer = h;
    }
    if (t.showLabels && e.labelsVisible && typeof e.write == "function") {
      var d, f;
      const h = (d = e.write({}, { origin: "web-map" }).layerDefinition) == null || (f = d.drawingInfo) == null ? void 0 : f.labelingInfo;
      h && (n = !0, i.layerDefinition.drawingInfo.labelingInfo = h, s.layerDefinition.drawingInfo.labelingInfo = h, u.layerDefinition.drawingInfo.labelingInfo = h, o.layerDefinition.drawingInfo.labelingInfo = h);
    }
  }
  let m;
  e != null && e.renderer || n || (delete i.layerDefinition.drawingInfo, delete s.layerDefinition.drawingInfo, delete u.layerDefinition.drawingInfo, delete o.layerDefinition.drawingInfo);
  const w = e == null ? void 0 : e.fieldsIndex, g = e == null ? void 0 : e.renderer;
  if (w) {
    const h = /* @__PURE__ */ new Set();
    n && await Ee(h, e), g && typeof g.collectRequiredFields == "function" && await g.collectRequiredFields(h, w), m = Array.from(h);
    const v = w.fields.map((P) => P.toJSON());
    i.layerDefinition.fields = v, s.layerDefinition.fields = v, u.layerDefinition.fields = v, o.layerDefinition.fields = v;
  }
  const b = a && a.length;
  let c;
  for (let h = 0; h < b; h++) {
    var S;
    const v = a[h] || a.getItemAt(h);
    if (v.visible === !1 || !v.geometry || (c = v.toJSON(), c.hasOwnProperty("popupTemplate") && delete c.popupTemplate, c.geometry && c.geometry.z && delete c.geometry.z, c.symbol && c.symbol.outline && c.symbol.outline.type === "esriCLS" && !r.is11xService))
      continue;
    !r.is11xService && c.symbol && c.symbol.outline && c.symbol.outline.color && c.symbol.outline.color[3] && (c.symbol.outline.color[3] = 255);
    const P = e && e.renderer && ("valueExpression" in e.renderer && e.renderer.valueExpression || "hasVisualVariables" in e.renderer && e.renderer.hasVisualVariables());
    if (!c.symbol && e && e.renderer && P && !r.is11xService) {
      const D = e.renderer, L = await D.getSymbolAsync(v);
      if (!L)
        continue;
      c.symbol = L.toJSON(), "hasVisualVariables" in D && D.hasVisualVariables() && nt(c.symbol, { renderer: D, graphic: v, symbol: L });
    }
    if (c.symbol && (c.symbol.angle || delete c.symbol.angle, Q(c.symbol) ? c.symbol = await Z(c.symbol, r) : c.symbol.text && delete c.attributes), (!t || !t.forceFeatureAttributes) && (S = m) != null && S.length) {
      const D = {};
      m.forEach((L) => {
        c.attributes && c.attributes.hasOwnProperty(L) && (D[L] = c.attributes[L]);
      }), c.attributes = D;
    }
    v.geometry.type === "polygon" ? i.featureSet.features.push(c) : v.geometry.type === "polyline" ? s.featureSet.features.push(c) : v.geometry.type === "point" ? c.symbol && c.symbol.text ? l.featureSet.features.push(c) : u.featureSet.features.push(c) : v.geometry.type === "multipoint" ? o.featureSet.features.push(c) : v.geometry.type === "extent" && (c.geometry = Re.fromExtent(v.geometry).toJSON(), i.featureSet.features.push(c));
  }
  const x = [i, s, o, u, l].filter((h) => h.featureSet.features.length > 0);
  for (const h of x) {
    const v = h.featureSet.features.every((P) => P.symbol);
    !v || t && t.forceFeatureAttributes || h.featureSet.features.forEach((P) => {
      delete P.attributes;
    }), v && delete h.layerDefinition.drawingInfo, h.layerDefinition.drawingInfo && h.layerDefinition.drawingInfo.renderer && await Le(h.layerDefinition.drawingInfo.renderer, r);
  }
  return x.length ? { featureCollection: { layers: x }, showLabels: n } : null;
}
async function Rt(e, a, t) {
  var r, n;
  let i;
  const s = e.renderer, u = parseFloat(t.cimVersion);
  if (e.featureReduction && (!t.is11xService || u < 2.9) || (s == null ? void 0 : s.type) === "dot-density" && (!t.is11xService || u < 2.6))
    return q(e, a, t);
  e.legendEnabled && t.legendLayers.push({ id: e.id });
  const o = a.layerView, { printTemplate: l, view: d } = a, f = s && ("valueExpression" in s && s.valueExpression || "hasVisualVariables" in s && s.hasVisualVariables()), m = ((r = e.source) == null ? void 0 : r.type) !== "feature-layer" && ((n = e.source) == null ? void 0 : n.type) !== "ogc-feature";
  if (!t.is11xService && f || o.filter || m || !s || "field" in s && s.field != null && (typeof s.field != "string" || !e.getField(s.field))) {
    const c = await te(o);
    i = await V(e, c, l, t);
  } else {
    var w, g;
    if (i = { id: (b = e.write()).id, title: b.title, opacity: b.opacity, minScale: b.minScale, maxScale: b.maxScale, url: b.url, layerType: b.layerType, customParameters: b.customParameters, layerDefinition: b.layerDefinition }, i.showLabels = l.showLabels && e.labelsVisible, B(i, e), (w = i.layerDefinition) != null && (g = w.drawingInfo) != null && g.renderer && (delete i.layerDefinition.minScale, delete i.layerDefinition.maxScale, await Le(i.layerDefinition.drawingInfo.renderer, t), "visualVariables" in s && s.visualVariables && s.visualVariables[0])) {
      const S = s.visualVariables[0];
      if (S.type === "size" && S.maxSize && typeof S.maxSize != "number" && S.minSize && typeof S.minSize != "number") {
        const x = ke(S, d.scale);
        i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize = x.minSize, i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize = x.maxSize;
      }
    }
    const c = Be(o);
    c && (i.layerDefinition || (i.layerDefinition = {}), i.layerDefinition.definitionExpression = i.layerDefinition.definitionExpression ? `(${i.layerDefinition.definitionExpression}) AND (${c})` : c);
  }
  var b;
  return i;
}
async function kt(e, { layerView: a, printTemplate: t }, r) {
  return e.legendEnabled && r.legendLayers.push({ id: e.id }), V(e, await te(a), t, r);
}
async function At(e, { printTemplate: a }, t) {
  return V(e, null, a, t);
}
function Ct(e, a) {
  e.legendEnabled && a.legendLayers.push({ id: e.id });
  const t = { layerType: (r = e.write()).layerType, customParameters: r.customParameters };
  var r;
  if (t.bandIds = e.bandIds, t.compressionQuality = e.compressionQuality, t.format = e.format, t.interpolation = e.interpolation, (e.mosaicRule || e.definitionExpression) && (t.mosaicRule = e.exportImageServiceParameters.mosaicRule.toJSON()), e.renderingRule || e.renderer)
    if (a.is11xService)
      e.renderingRule && (t.renderingRule = e.renderingRule.toJSON()), e.renderer && (t.layerDefinition = t.layerDefinition || {}, t.layerDefinition.drawingInfo = t.layerDefinition.drawingInfo || {}, t.layerDefinition.drawingInfo.renderer = e.renderer.toJSON());
    else {
      const n = e.exportImageServiceParameters.combineRendererWithRenderingRule();
      n && (t.renderingRule = n.toJSON());
    }
  return B(t, e), t;
}
async function Ut(e, a, t) {
  var r;
  if (((r = e.renderer) == null ? void 0 : r.type) === "flow")
    return q(e, a, t);
  e.legendEnabled && t.legendLayers.push({ id: e.id });
  const n = { bandIds: (i = e.write() || {}).bandIds, customParameters: i.customParameters, interpolation: i.interpolation, layerDefinition: i.layerDefinition };
  var i;
  return n.layerType = "ArcGISImageServiceLayer", B(n, e), n;
}
async function _t(e, a, t) {
  const r = a.printTemplate;
  if (t.is11xService) {
    const n = { type: "kml" };
    return e.write(n, { origin: "web-map" }), delete n.layerType, n.url = z(e.url), n;
  }
  {
    const n = [], i = a.layerView;
    i.allVisibleMapImages.forEach((o, l) => {
      const d = { id: `${e.id}_image${l}`, type: "image", title: e.id, minScale: e.minScale || 0, maxScale: e.maxScale || 0, opacity: e.opacity, extent: o.extent };
      o.href.substr(0, 22) === "data:image/png;base64," ? d.imageData = o.href.substr(22) : d.url = o.href, n.push(d);
    });
    const s = [...i.allVisiblePoints.items, ...i.allVisiblePolylines.items, ...i.allVisiblePolygons.items], u = { id: e.id, ...await V(null, s, r, t) };
    return n.push(u), n;
  }
}
function qt(e, { view: a }, t) {
  let r;
  const n = { id: e.id, subLayerIds: [] };
  let i = [];
  const s = a.scale, u = (l) => {
    const d = s === 0, f = l.minScale === 0 || s <= l.minScale, m = l.maxScale === 0 || s >= l.maxScale;
    if (l.visible && (d || f && m))
      if (l.sublayers)
        l.sublayers.forEach(u);
      else {
        const w = l.toExportImageJSON(), g = { id: l.id, name: l.title, layerDefinition: { drawingInfo: w.drawingInfo, definitionExpression: w.definitionExpression, source: w.source } };
        i.unshift(g), n.subLayerIds.push(l.id);
      }
  };
  var o;
  return e.sublayers && e.sublayers.forEach(u), i.length && (i = i.map(({ id: l, name: d, layerDefinition: f }) => ({ id: l, name: d, layerDefinition: f })), r = { layerType: (o = e.write()).layerType, customParameters: o.customParameters }, r.layers = i, r.visibleLayers = e.capabilities.exportMap.supportsDynamicLayers ? void 0 : n.subLayerIds, B(r, e), e.legendEnabled && t.legendLayers.push(n)), r;
}
async function zt({ layerView: e, printTemplate: a }, t) {
  const r = [], n = e.layer;
  if (_(n.featureCollections))
    for (const i of n.featureCollections) {
      const s = await V(i, i.source, a, t);
      s && r.push(...s.featureCollection.layers);
    }
  else if (_(n.sublayers))
    for (const i of n.sublayers) {
      const s = await V(null, i.graphics, a, t);
      s && r.push(...s.featureCollection.layers);
    }
  return { featureCollection: { layers: r } };
}
function Bt() {
  return { type: "OpenStreetMap" };
}
async function q(e, { printTemplate: a, view: t }, r) {
  const n = { type: "image" }, i = { format: "png", ignoreBackground: !0, layers: [e], rotation: 0 }, s = r.ssExtent || t.extent.clone();
  let u = 96, o = !0, l = !0;
  if (a.exportOptions) {
    const m = a.exportOptions;
    m.dpi > 0 && (u = m.dpi), m.width > 0 && (o = m.width % 2 == t.width % 2), m.height > 0 && (l = m.height % 2 == t.height % 2);
  }
  if (a.layout === "map-only" && a.scalePreserved && (!a.outScale || a.outScale === t.scale) && u === 96 && (!o || !l) && (i.area = { x: 0, y: 0, width: t.width, height: t.height }, o || (i.area.width -= 1), l || (i.area.height -= 1), !r.ssExtent)) {
    const m = t.toMap(Ae(i.area.width, i.area.height));
    s.ymin = m.y, s.xmax = m.x, r.ssExtent = s;
  }
  n.extent = s.clone()._normalize(!0).toJSON();
  const d = await t.takeScreenshot(i), { data: f } = Ce(d.dataUrl);
  return n.imageData = f, n;
}
async function Kt(e, { layerView: a, printTemplate: t }, r) {
  return e.legendEnabled && r.legendLayers.push({ id: e.id }), V(e, await te(a), t, r);
}
function Wt(e, a) {
  e.legendEnabled && a.legendLayers.push({ id: e.id });
  const t = { layerType: (r = e.write()).layerType, customParameters: r.customParameters };
  var r;
  return B(t, e), t;
}
async function Zt(e, a, t) {
  if (t.is11xService && e.serviceUrl && e.styleUrl) {
    const r = oe(e.styleUrl, e.apiKey), n = oe(e.serviceUrl, e.apiKey);
    if (!r && !n || t.cimVersion !== "2.1.0") {
      const i = { type: "VectorTileLayer" };
      return i.styleUrl = z(e.styleUrl), i.token = r, n !== r && (i.additionalTokens = [{ url: e.serviceUrl, token: n }]), i;
    }
  }
  return q(e, a, t);
}
function Qt(e) {
  const a = { type: "WebTiledLayer", urlTemplate: e.urlTemplate.replace(/\${/g, "{"), credits: e.copyright };
  return e.subDomains && e.subDomains.length > 0 && (a.subDomains = e.subDomains), a;
}
function Yt(e) {
  let a;
  const t = [], r = (n) => {
    n.visible && (n.sublayers ? n.sublayers.forEach(r) : n.name && t.unshift(n.name));
  };
  return e.sublayers && e.sublayers.forEach(r), t.length && (a = { type: "wms", customLayerParameters: e.customLayerParameters, customParameters: e.customParameters, transparentBackground: e.imageTransparency, visibleLayers: t, url: z(e.url), version: e.version }), a;
}
function Ht(e) {
  const a = e.activeLayer;
  return { type: "wmts", customLayerParameters: e.customLayerParameters, customParameters: e.customParameters, format: a.imageFormat, layer: a.id, style: a.styleId, tileMatrixSet: a.tileMatrixSetId, url: z(e.url) };
}
function B(e, a) {
  a.url && (e.url = z(e.url || a.url), e.token = oe(e.url, a.apiKey));
}
function oe(e, a) {
  var t, r;
  return Ue(e) && (a || pe.apiKey) ? a || pe.apiKey : (t = _e) == null || (r = t.findCredential(e)) == null ? void 0 : r.token;
}
async function Z(e, a) {
  a.canvas || (a.canvas = document.createElement("canvas"));
  const t = 1024;
  a.canvas.width = t, a.canvas.height = t;
  const r = a.canvas.getContext("2d");
  let n, i;
  if (e.path) {
    var s;
    const u = new Path2D(e.path);
    u.closePath(), r.fillStyle = Array.isArray(e.color) ? `rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3] / 255})` : "rgb(0,0,0)", r.fill(u);
    const o = ut(r);
    if (!o)
      return null;
    r.clearRect(0, 0, t, t);
    const l = K(e.size) / Math.max(o.width, o.height);
    r.scale(l, l);
    const d = t / l, f = d / 2 - o.width / 2 - o.x, m = d / 2 - o.height / 2 - o.y;
    if (r.translate(f, m), Array.isArray(e.color) && r.fill(u), (s = e.outline) != null && s.width && Array.isArray(e.outline.color)) {
      const g = e.outline;
      r.lineWidth = K(g.width) / l, r.lineJoin = "round", r.strokeStyle = `rgba(${g.color[0]},${g.color[1]},${g.color[2]},${g.color[3] / 255})`, r.stroke(u), o.width += r.lineWidth, o.height += r.lineWidth;
    }
    o.width *= l, o.height *= l;
    const w = r.getImageData(t / 2 - o.width / 2, t / 2 - o.height / 2, Math.ceil(o.width), Math.ceil(o.height));
    n = w.width, i = w.height, r.canvas.width = n, r.canvas.height = i, r.putImageData(w, 0, 0);
  } else {
    const u = e.contentType === "image/svg+xml" ? "data:image/svg+xml;base64," + e.imageData : e.url, o = (await j(u, { responseType: "image" })).data;
    n = K(e.width), i = K(e.height), r.canvas.width = n, r.canvas.height = i, r.drawImage(o, 0, 0, r.canvas.width, r.canvas.height);
  }
  return { type: "esriPMS", imageData: r.canvas.toDataURL("image/png").substr(22), angle: e.angle, contentType: "image/png", height: N(i), width: N(n), xoffset: e.xoffset, yoffset: e.yoffset };
}
async function Le(e, a) {
  const t = e.type;
  if (t === "simple" && Q(e.symbol))
    e.symbol = await Z(e.symbol, a);
  else if (t === "uniqueValue" || t === "classBreaks") {
    Q(e.defaultSymbol) && (e.defaultSymbol = await Z(e.defaultSymbol, a));
    const r = e[t === "uniqueValue" ? "uniqueValueInfos" : "classBreakInfos"];
    if (r)
      for (const n of r)
        Q(n.symbol) && (n.symbol = await Z(n.symbol, a));
  }
}
async function te(e) {
  return e.queryFeatures(e.createQuery()).then((a) => a.features);
}
function Xt(e) {
  return e.gpMetadata && e.gpMetadata.executionType ? Tt.fromJSON(e.gpMetadata.executionType) : "sync";
}
function Q(e) {
  return e && (e.path || e.contentType === "image/svg+xml" || e.url && e.url.endsWith(".svg"));
}
const er = new J({ esriExecutionTypeSynchronous: "sync", esriExecutionTypeAsynchronous: "async" });
let R = class extends ze {
  constructor(...e) {
    super(...e), this._gpMetadata = null, this.updateDelay = 1e3;
  }
  get mode() {
    return this._gpMetadata && this._gpMetadata.executionType ? er.fromJSON(this._gpMetadata.executionType) : "sync";
  }
  execute(e, a) {
    return e && (e.updateDelay = this.updateDelay), Jt(this.url, e, { ...this.requestOptions, ...a });
  }
  async _getGpPrintParams(e) {
    const a = Ge(this.url), t = ee.get(a);
    return Me(e, t);
  }
};
p([y()], R.prototype, "_gpMetadata", void 0), p([y({ readOnly: !0 })], R.prototype, "mode", null), p([y()], R.prototype, "updateDelay", void 0), R = p([$("geoscene.tasks.PrintTask")], R);
const cr = R;
export {
  cr as default
};
