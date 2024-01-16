import { dG as Os, fh as Ze, at as Yr, s as Ce, dE as ii, bc as ta, jB as ia, dF as qr, kW as Gr, kX as Kr, kY as Xr, ey as Qr, kZ as Ks, k_ as sa, k$ as ra, l0 as na, V as Je, a as g, b as m, d8 as _t, m as $t, c as K, b3 as yt, l as D, f as ae, H, fZ as Xs, eg as aa, io as Ae, ip as Be, w as et, l1 as ni, iq as b, is as Ci, l2 as Qs, l3 as ft, l4 as oa, b0 as Fs, im as la, l5 as Jr, fD as Zr, l6 as ha, l7 as da, fz as ca, ev as ua, T as mt, j1 as pa, aD as Yi, c3 as ga, ae as fa, fq as bs, R as $i, l8 as ma, dp as mi, br as ba, ir as De, l9 as _s, la as Mt, Q as _a, lb as ya, lc as en, ld as va, le as wa, lf as ys, lg as xa, bg as Ma, cj as tn, jr as qi, M as Gi, j as sn, e6 as rn, fT as Bi, d as Pa, eB as ka, ft as Ai, dz as Ca, lh as Li, li as nn, e2 as Aa, z as an, lj as Ta, lk as Ia, ll as Oa, cz as Fa, dN as Da, fB as Ea, ax as Js, az as Sa, jP as Zs, lm as $a, fa as Ba, ln as Ue } from "./index-O2RTvw_o.js";
import { e as Ds } from "./throttle-QIuHYXCG.js";
import { E as er } from "./ByteSizeUnit-dxTdcbwN.js";
import { l as La } from "./AttachmentInfo-GuCV1xae.js";
import { e as on, t as Ra } from "./widget-ejJhL7YK.js";
import { b as xt, q as ja, g as Ki, D as Na, I as Ha } from "./utils-hTTSzIWS.js";
import { s as Xi } from "./executeQueryJSON-Yju-NJyU.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./normalizeUtils-XFPcyvoe.js";
import "./pbf-jTu79NaY.js";
function za(s) {
  return (e) => {
    e.hasOwnProperty("_delegatedEventNames") || (e._delegatedEventNames = e._delegatedEventNames ? e._delegatedEventNames.slice() : []);
    const t = e._delegatedEventNames, i = Array.isArray(s) ? s : Va(s);
    t.push(...i);
  };
}
function Va(s) {
  return s.split(",").map((e) => e.trim());
}
const tr = ["B", "kB", "MB", "GB", "TB"];
function Wa(s, e) {
  let t = e === 0 ? 0 : Math.floor(Math.log(e) / Math.log(er.KILOBYTES));
  t = Yr(t, 0, tr.length - 1);
  const i = Os(e / er.KILOBYTES ** t, { maximumFractionDigits: 2 });
  return Ze(s.units.bytes[tr[t]], { fileSize: i });
}
const Ua = "geoscene.widgets.Feature.support.featureUtils", ir = Ce.getLogger(Ua), Ya = /href=(""|'')/gi, qa = /(\{([^\{\r\n]+)\})/g, Ga = /\'/g, ln = /^\s*expression\//i, Ka = /(\n)/gi, Xa = /[\u00A0-\u9999<>\&]/gim, Qa = /href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi, Ja = /^(?:mailto:|tel:)/, hn = "relationships/", sr = qr("short-date-short-time");
function dn(s) {
  if (s != null)
    return s.get("sourceLayer") || s.get("layer");
}
async function Ti(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function cn(s = "") {
  if (s)
    return !Ja.test(s.trim().toLowerCase());
}
function Es(s) {
  return !!s && ln.test(s);
}
function Za(s, e) {
  if (!Es(e) || !s)
    return null;
  const t = e.replace(ln, "").toLowerCase();
  let i = null;
  return s.some((r) => r.name.toLowerCase() === t && (i = r, !0)), i;
}
function un(s, e) {
  const t = Za(e, s == null ? void 0 : s.fieldName);
  return t ? t.title || null : s ? s.label || s.fieldName : null;
}
function eo(s, e) {
  const t = e.get(s.toLowerCase());
  return `{${t && t.fieldName || s}}`;
}
function to(s) {
  return s.replaceAll(Ya, "");
}
function si(s, e) {
  const t = Ss(e, s);
  return t ? t.name : s;
}
function io(s, e) {
  return s && s.map((t) => si(t, e));
}
function Ss(s, e) {
  return s && typeof s.getField == "function" && e ? s.getField(e) ?? null : null;
}
function pn(s) {
  return `${s}`.trim();
}
function ht({ attributes: s, globalAttributes: e, layer: t, text: i, expressionAttributes: r, fieldInfoMap: n }) {
  return i ? vs({ formattedAttributes: e, template: ao(i, { ...e, ...r, ...s }, t), fieldInfoMap: n }) : "";
}
function vs({ formattedAttributes: s, template: e, fieldInfoMap: t }) {
  return pn(to(Ze(Ze(e, (i) => eo(i, t)), s)));
}
function so(s, e, t = !1) {
  const i = e[s];
  if (typeof i == "string") {
    const r = "%27", n = (t ? encodeURIComponent(i) : i).replaceAll(Ga, r);
    e[s] = n;
  }
}
function ro(s, e = !1) {
  const t = { ...s };
  return Object.keys(t).forEach((i) => so(i, t, e)), t;
}
function no(s, e, t) {
  const i = (e = pn(e)) && e[0] !== "{";
  return Ze(s, ro(t, i || !1));
}
function ws(s, e) {
  return s.replaceAll(qa, (t, i, r) => {
    const n = Ss(e, r);
    return n ? `{${n.name}}` : i;
  });
}
function ao(s, e, t) {
  const i = ws(s, t);
  return i && i.replaceAll(Qa, (r, n, a) => no(r, n || a, e));
}
function oo(s, e) {
  if (typeof s == "string" && e && e.dateFormat == null && (e.places != null || e.digitSeparator != null)) {
    const t = Number(s);
    if (!isNaN(t))
      return t;
  }
  return s;
}
function rr(s) {
  return s != null && typeof s == "object" && "layer" in s && !!s.layer;
}
function lo(s) {
  return s != null && typeof s == "object" && "type" in s && s.type === "map-image";
}
function ho(s) {
  return s != null && typeof s == "object" && "fieldsIndex" in s && "geometryType" in s && "getField" in s && "load" in s && "loaded" in s && "objectIdField" in s && "spatialReference" in s && "type" in s && s.type === "feature" && "when" in s;
}
function co(s) {
  return s != null && typeof s == "object" && "createQuery" in s && "queryFeatureCount" in s && "queryObjectIds" in s && "queryRelatedFeatures" in s && "queryRelatedFeaturesCount" in s && "relationships" in s;
}
function gn(s) {
  return ho(s) && co(s);
}
function uo(s, e) {
  var f;
  const { fieldInfos: t, fieldName: i, preventPlacesFormatting: r, layer: n } = e, a = fn(t, i), o = a == null ? void 0 : a.clone(), l = Ss(n, i);
  if (o && !Ks(i)) {
    const c = l == null ? void 0 : l.type;
    if (c === "date" || c === "date-only" || c === "time-only" || c === "timestamp-offset" || (f = o.format) != null && f.dateFormat) {
      const p = o.format ?? new sa();
      if (p.dateFormat ?? (p.dateFormat = c === "date-only" ? "short-date" : "short-date-short-time"), typeof s == "number") {
        const d = !rr(n) && ra(n) && n.datesInUnknownTimezone || rr(n) && lo(n.layer) && n.layer.datesInUnknownTimezone;
        return p.formatDate(s, d);
      }
      switch (c) {
        case "date-only":
          return p.formatDateOnly(s);
        case "time-only":
          return p.formatTimeOnly(s);
        case "timestamp-offset":
          return p.formatTimestamp(s);
      }
    }
  }
  const h = o == null ? void 0 : o.format;
  return typeof s == "string" && Ks(i) && h ? h.formatRasterPixelValue(s) : typeof (s = oo(s, h)) == "string" || s == null || h == null ? ai(s) : r ? Os(s, { ...na(h), minimumFractionDigits: 0, maximumFractionDigits: 20 }) : h.formatNumber(s);
}
function fn(s, e) {
  if (s && s.length && e)
    return s.find((t) => {
      var i;
      return ((i = t.fieldName) == null ? void 0 : i.toLowerCase()) === e.toLowerCase();
    });
}
function po({ fieldName: s, graphic: e, layer: t }) {
  if (Ne(s) || !t || typeof t.getFeatureType != "function")
    return null;
  const { typeIdField: i } = t;
  if (!i || s !== i)
    return null;
  const r = t.getFeatureType(e);
  return r ? r.name : null;
}
function go({ fieldName: s, value: e, graphic: t, layer: i }) {
  if (Ne(s) || !i || typeof i.getFieldDomain != "function")
    return null;
  const r = t && i.getFieldDomain(s, { feature: t });
  return r && r.type === "coded-value" ? r.getName(e) : null;
}
function fo(s, e) {
  const { creatorField: t, creationDateField: i, editorField: r, editDateField: n } = s;
  if (!e)
    return;
  const a = e[n];
  if (typeof a == "number") {
    const l = e[r];
    return { type: "edit", date: ii(a, sr), user: l };
  }
  const o = e[i];
  if (typeof o == "number") {
    const l = e[t];
    return { type: "create", date: ii(o, sr), user: l };
  }
  return null;
}
function mo(s, e) {
  const t = /* @__PURE__ */ new Map();
  return s && s.forEach((i) => {
    const r = si(i.fieldName, e);
    i.fieldName = r, t.set(r.toLowerCase(), i);
  }), t;
}
function nr(s) {
  const e = [];
  if (!s)
    return e;
  const { fieldInfos: t, content: i } = s;
  return t && e.push(...t), i && Array.isArray(i) && i.forEach((r) => {
    if (r.type === "fields") {
      const n = r && r.fieldInfos;
      n && e.push(...n);
    }
  }), e;
}
function $s(s) {
  return s.replaceAll(Xa, (e) => `&#${e.charCodeAt(0)};`);
}
function ai(s) {
  return typeof s == "string" ? s.replaceAll(Ka, '<br class="geoscene-text-new-line" />') : s;
}
function mn(s) {
  var h, f;
  const { value: e, fieldName: t, fieldInfos: i, fieldInfoMap: r, layer: n, graphic: a } = s;
  if (e == null)
    return "";
  const o = go({ fieldName: t, value: e, graphic: a, layer: n });
  if (o)
    return o;
  const l = po({ fieldName: t, graphic: a, layer: n });
  if (l)
    return l;
  if (r.get(t.toLowerCase()))
    return uo(e, { fieldInfos: i || Array.from(r.values()), fieldName: t, layer: n });
  switch ((f = (h = n == null ? void 0 : n.fieldsIndex) == null ? void 0 : h.get(t)) == null ? void 0 : f.type) {
    case "date":
      return ii(e);
    case "date-only":
      return Xr(e);
    case "time-only":
      return Kr(e);
    case "timestamp-offset":
      return Gr(e);
  }
  return ai(e);
}
function Qi({ fieldInfos: s, attributes: e, layer: t, graphic: i, fieldInfoMap: r, relatedInfos: n }) {
  const a = {};
  return n == null || n.forEach((o) => vo({ attributes: a, relatedInfo: o, fieldInfoMap: r, fieldInfos: s, layer: t })), e && Object.keys(e).forEach((o) => {
    const l = e[o];
    a[o] = mn({ fieldName: o, fieldInfos: s, fieldInfoMap: r, layer: t, value: l, graphic: i });
  }), a;
}
async function bn(s, e) {
  var f, c;
  const { layer: t, graphic: i, outFields: r, objectIds: n, returnGeometry: a, spatialReference: o } = s, l = n[0];
  if (typeof l != "number" && typeof l != "string") {
    const p = "Could not query required fields for the specified feature. The feature's ID is invalid.", d = { layer: t, graphic: i, objectId: l, requiredFields: r };
    return ir.warn(p, d), null;
  }
  if (!((c = (f = ta(t)) == null ? void 0 : f.operations) != null && c.supportsQuery)) {
    const p = "The specified layer cannot be queried. The following fields will not be available.", d = { layer: t, graphic: i, requiredFields: r, returnGeometry: a };
    return ir.warn(p, d), null;
  }
  const h = t.createQuery();
  return h.objectIds = n, h.outFields = r != null && r.length ? r : [t.objectIdField], h.returnGeometry = !!a, h.returnZ = !!a, h.returnM = !!a, h.outSpatialReference = o, (await t.queryFeatures(h, e)).features[0];
}
async function bo(s) {
  var i;
  if (!((i = s.expressionInfos) != null && i.length))
    return !1;
  const e = await Qr(), { arcadeUtils: { hasGeometryFunctions: t } } = e;
  return t(s);
}
async function _o({ graphic: s, popupTemplate: e, layer: t, spatialReference: i }, r) {
  if (!t || !e || (typeof t.load == "function" && await t.load(r), !s.attributes))
    return;
  const n = s.attributes[t.objectIdField];
  if (n == null)
    return;
  const a = [n], o = await e.getRequiredFields(t.fieldsIndex), l = ia(o, s), h = l ? [] : o, f = e.returnGeometry || await bo(e);
  if (l && !f)
    return;
  const c = await bn({ layer: t, graphic: s, outFields: h, objectIds: a, returnGeometry: f, spatialReference: i }, r);
  c && (c.geometry && (s.geometry = c.geometry), c.attributes && (s.attributes = { ...s.attributes, ...c.attributes }));
}
function Ne(s = "") {
  return !!s && s.includes(hn);
}
function yo(s) {
  return s ? `${hn}${s.layerId}/${s.fieldName}` : "";
}
function ar({ attributes: s, graphic: e, relatedInfo: t, fieldInfos: i, fieldInfoMap: r, layer: n }) {
  s && e && t && Object.keys(e.attributes).forEach((a) => {
    const o = yo({ layerId: t.relation.id.toString(), fieldName: a }), l = e.attributes[a];
    s[o] = mn({ fieldName: o, fieldInfos: i, fieldInfoMap: r, layer: n, value: l, graphic: e });
  });
}
function vo({ attributes: s, relatedInfo: e, fieldInfoMap: t, fieldInfos: i, layer: r }) {
  s && e && (e.relatedFeatures && e.relatedFeatures && e.relatedFeatures.forEach((n) => ar({ attributes: s, graphic: n, relatedInfo: e, fieldInfoMap: t, fieldInfos: i, layer: r })), e.relatedStatsFeatures && e.relatedStatsFeatures && e.relatedStatsFeatures.forEach((n) => ar({ attributes: s, graphic: n, relatedInfo: e, fieldInfoMap: t, fieldInfos: i, layer: r })));
}
const or = (s) => {
  if (!s)
    return !1;
  const e = s.toUpperCase();
  return e.includes("CURRENT_TIMESTAMP") || e.includes("CURRENT_DATE") || e.includes("CURRENT_TIME");
}, _n = ({ layer: s, method: e, query: t, definitionExpression: i }) => {
  var a, o;
  if (!((o = (a = s.capabilities) == null ? void 0 : a.query) != null && o.supportsCacheHint) || e === "attachments")
    return;
  const r = t.where != null ? t.where : null, n = t.geometry != null ? t.geometry : null;
  or(i) || or(r) || (n == null ? void 0 : n.type) === "extent" || t.resultType === "tile" || (t.cacheHint = !0);
}, wo = ({ query: s, layer: e, method: t }) => {
  _n({ layer: e, method: t, query: s, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression}` });
}, xo = ({ queryPayload: s, layer: e, method: t }) => {
  _n({ layer: e, method: t, query: s, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression}` });
};
function Mo(s, e, t) {
  return s && e && t ? lr(s.allLayers, e, t) || lr(s.allTables, e, t) : null;
}
function lr(s, e, t) {
  return s.filter(gn).find((i) => i !== e && i.url === e.url && i.layerId === t.relatedTableId);
}
const hr = { editing: !1, operations: { add: !0, update: !0, delete: !0 } }, yn = Je.ofType(La);
let fe = class extends yt {
  constructor(e) {
    super(e), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...hr }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new yn(), this.fileInfos = new Je(), this.graphic = null, this.mode = "view", this.filesEnabled = !1, this.addHandles(D(() => this.graphic, () => this._graphicChanged(), ae));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(e) {
    return { ...hr, ...e };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: e } = this;
    if (!e)
      return !1;
    const t = e.layer || e.sourceLayer;
    return (t == null ? void 0 : t.loaded) && "capabilities" in t && t.capabilities && "operations" in t.capabilities && "supportsResizeAttachments" in t.capabilities.operations && t.capabilities.operations.supportsResizeAttachments || !1;
  }
  async getAttachments() {
    const { _attachmentLayer: e, attachmentInfos: t } = this;
    if (!e || typeof e.queryAttachments != "function")
      throw new H("invalid-layer", "getAttachments(): A valid layer is required.");
    const i = this._getObjectId(), r = new Xs({ objectIds: [i], returnMetadata: !0 }), n = [], a = e.queryAttachments(r).then((l) => l[i] || n).catch(() => n);
    this._getAttachmentsPromise = a, this.notifyChange("state");
    const o = await a;
    return t.removeAll(), o.length && t.addMany(o), this._getAttachmentsPromise = null, this.notifyChange("state"), o;
  }
  async addAttachment(e, t = this.graphic) {
    var l;
    const { _attachmentLayer: i, attachmentInfos: r, capabilities: n } = this;
    if (!t)
      throw new H("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: t });
    if (!e)
      throw new H("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: e });
    if (!((l = n.operations) != null && l.add))
      throw new H("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!i || typeof i.addAttachment != "function")
      throw new H("invalid-layer", "addAttachment(): A valid layer is required.");
    const a = i.addAttachment(t, e).then((h) => this._queryAttachment(h.objectId, t)), o = await a;
    return r.add(o), o;
  }
  async deleteAttachment(e) {
    var l;
    const { _attachmentLayer: t, attachmentInfos: i, graphic: r, capabilities: n } = this;
    if (!e)
      throw new H("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: e });
    if (!((l = n.operations) != null && l.delete))
      throw new H("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!t || typeof t.deleteAttachments != "function")
      throw new H("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!r)
      throw new H("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const a = t.deleteAttachments(r, [e.id]).then(() => e), o = await a;
    return i.remove(o), o;
  }
  async updateAttachment(e, t = this.activeAttachmentInfo) {
    var f;
    const { _attachmentLayer: i, attachmentInfos: r, graphic: n, capabilities: a } = this;
    if (!e)
      throw new H("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: e });
    if (!t)
      throw new H("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: t });
    if (!((f = a.operations) != null && f.update))
      throw new H("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o = r.findIndex((c) => c === t);
    if (!i || typeof i.updateAttachment != "function")
      throw new H("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!n)
      throw new H("invalid-graphic", "updateAttachment(): A graphic is required.");
    const l = i.updateAttachment(n, t.id, e).then((c) => this._queryAttachment(c.objectId)), h = await l;
    return r.splice(o, 1, h), h;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((e) => this.addAttachment(e.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(e, t) {
    if (!e || !t)
      return null;
    const i = { file: e, form: t };
    return this.fileInfos.add(i), i;
  }
  updateFile(e, t, i = this.activeFileInfo) {
    if (!e || !t || !i)
      return null;
    const r = this.fileInfos.findIndex((n) => i === n);
    return r > -1 && this.fileInfos.splice(r, 1, { file: e, form: t }), this.fileInfos.items[r];
  }
  deleteFile(e) {
    const t = this.fileInfos.find((i) => i.file === e);
    return t ? (this.fileInfos.remove(t), t) : null;
  }
  async _queryAttachment(e, t) {
    const { _attachmentLayer: i } = this;
    if (!e || !(i != null && i.queryAttachments))
      throw new H("invalid-attachment-id", "Could not query attachment.");
    const r = this._getObjectId(t), n = new Xs({ objectIds: [r], attachmentsWhere: `AttachmentId=${e}`, returnMetadata: !0 });
    return i.queryAttachments(n).then((a) => a[r][0]);
  }
  _getObjectId(e = this.graphic) {
    return (e == null ? void 0 : e.getObjectId()) ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const { graphic: e } = this, t = dn(e);
    this._attachmentLayer = t ? t.type === "scene" && t.associatedLayer != null ? t.associatedLayer : t : null;
  }
};
g([m()], fe.prototype, "capabilities", void 0), g([_t("capabilities")], fe.prototype, "castCapabilities", null), g([m()], fe.prototype, "activeAttachmentInfo", void 0), g([m()], fe.prototype, "activeFileInfo", void 0), g([m({ readOnly: !0, type: yn })], fe.prototype, "attachmentInfos", void 0), g([m()], fe.prototype, "fileInfos", void 0), g([m({ type: $t })], fe.prototype, "graphic", void 0), g([m()], fe.prototype, "mode", void 0), g([m({ readOnly: !0 })], fe.prototype, "state", null), g([m()], fe.prototype, "filesEnabled", void 0), g([m({ readOnly: !0 })], fe.prototype, "supportsResizeAttachments", null), fe = g([K("geoscene.widgets.Attachments.AttachmentsViewModel")], fe);
const Bs = fe;
function dr(s) {
  const e = s.toLowerCase();
  return e === "image/bmp" || e === "image/emf" || e === "image/exif" || e === "image/gif" || e === "image/x-icon" || e === "image/jpeg" || e === "image/png" || e === "image/tiff" || e === "image/x-wmf";
}
function Po(s) {
  const e = aa("geoscene/themes/base/images/files/");
  return s ? s === "text/plain" ? `${e}text-32.svg` : s === "application/pdf" ? `${e}pdf-32.svg` : s === "text/csv" ? `${e}csv-32.svg` : s === "application/gpx+xml" ? `${e}gpx-32.svg` : s === "application/x-dwf" ? `${e}cad-32.svg` : s === "application/postscript" || s === "application/json" || s === "text/xml" || s === "model/vrml" ? `${e}code-32.svg` : s === "application/x-zip-compressed" || s === "application/x-7z-compressed" || s === "application/x-gzip" || s === "application/x-tar" || s === "application/x-gtar" || s === "application/x-bzip2" || s === "application/gzip" || s === "application/x-compress" || s === "application/x-apple-diskimage" || s === "application/x-rar-compressed" || s === "application/zip" ? `${e}zip-32.svg` : s.includes("image/") ? `${e}image-32.svg` : s.includes("audio/") ? `${e}sound-32.svg` : s.includes("video/") ? `${e}video-32.svg` : s.includes("msexcel") || s.includes("ms-excel") || s.includes("spreadsheetml") ? `${e}excel-32.svg` : s.includes("msword") || s.includes("ms-word") || s.includes("wordprocessingml") ? `${e}word-32.svg` : s.includes("powerpoint") || s.includes("presentationml") ? `${e}report-32.svg` : `${e}generic-32.svg` : `${e}generic-32.svg`;
}
const cr = { addButton: !0, addSubmitButton: !0, cancelAddButton: !0, cancelUpdateButton: !0, deleteButton: !0, errorMessage: !0, progressBar: !0, updateButton: !0 }, R = "geoscene-attachments", st = "geoscene-button", C = { base: R, loaderContainer: `${R}__loader-container`, loader: `${R}__loader`, fadeIn: `${R}--fade-in`, container: `${R}__container`, containerList: `${R}__container--list`, containerPreview: `${R}__container--preview`, actions: `${R}__actions`, deleteButton: `${R}__delete-button`, addAttachmentButton: `${R}__add-attachment-button`, errorMessage: `${R}__error-message`, items: `${R}__items`, item: `${R}__item`, itemButton: `${R}__item-button`, itemMask: `${R}__item-mask`, itemMaskIcon: `${R}__item-mask--icon`, itemImage: `${R}__image`, itemImageResizable: `${R}__image--resizable`, itemLabel: `${R}__label`, itemFilename: `${R}__filename`, itemChevronIcon: `${R}__item-chevron-icon`, itemLink: `${R}__item-link`, itemLinkOverlay: `${R}__item-link-overlay`, itemLinkOverlayIcon: `${R}__item-link-overlay-icon`, itemEditIcon: `${R}__item-edit-icon`, itemAddIcon: `${R}__item-add-icon`, itemAddButton: `${R}__item-add-button`, formNode: `${R}__form-node`, fileFieldset: `${R}__file-fieldset`, fileLabel: `${R}__file-label`, fileName: `${R}__file-name`, fileInput: `${R}__file-input`, metadata: `${R}__metadata`, metadataFieldset: `${R}__metadata-fieldset`, progressBar: `${R}__progress-bar`, geosceneWidget: "geoscene-widget", esriButton: st, buttonDisabled: `${st}--disabled`, esriButtonSecondary: `${st}--secondary`, esriButtonTertiary: `${st}--tertiary`, esriButtonThird: `${st}--third`, esriButtonSmall: `${st}--small`, esriButtonHalf: `${st}--half`, empty: "geoscene-widget__content--empty", iconExternalLink: "geoscene-icon-link-external", iconEdit: "geoscene-icon-edit", iconRight: "geoscene-icon-right", iconLeft: "geoscene-icon-left", iconPlus: "geoscene-icon-plus" }, Ji = window.CSS;
let de = class extends Be {
  constructor(e, t) {
    super(e, t), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = !1, this.viewModel = null, this.visibleElements = { ...cr }, this._supportsImageOrientation = Ji && Ji.supports && Ji.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  initialize() {
    this.viewModel || (this.viewModel = new Bs()), this.addHandles([et(() => {
      var e;
      return (e = this.viewModel) == null ? void 0 : e.attachmentInfos;
    }, "change", () => this.scheduleRender()), et(() => {
      var e;
      return (e = this.viewModel) == null ? void 0 : e.fileInfos;
    }, "change", () => this.scheduleRender()), D(() => {
      var e;
      return (e = this.viewModel) == null ? void 0 : e.mode;
    }, () => this._modeChanged(), ae)]);
  }
  loadDependencies() {
    return ni({ icon: () => import("./calcite-icon-qQRYmWQk.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e) {
    this.viewModel.capabilities = e;
  }
  get effectiveDisplayType() {
    const { displayType: e } = this;
    return e && e !== "auto" ? e : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e) {
    this.viewModel.graphic = e;
  }
  get label() {
    var e;
    return ((e = this.messages) == null ? void 0 : e.widgetLabel) ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  castVisibleElements(e) {
    return { ...cr, ...e };
  }
  addAttachment() {
    const { _addAttachmentForm: e, viewModel: t } = this;
    return this._set("submitting", !0), this._set("error", null), t.addAttachment(e).then((i) => (this._set("submitting", !1), this._set("error", null), t.mode = "view", i)).catch((i) => {
      throw this._set("submitting", !1), this._set("error", new H("attachments:add-attachment", this.messages.addErrorMessage, i)), i;
    });
  }
  deleteAttachment(e) {
    const { viewModel: t } = this;
    return this._set("submitting", !0), this._set("error", null), t.deleteAttachment(e).then((i) => (this._set("submitting", !1), this._set("error", null), t.mode = "view", i)).catch((i) => {
      throw this._set("submitting", !1), this._set("error", new H("attachments:delete-attachment", this.messages.deleteErrorMessage, i)), i;
    });
  }
  updateAttachment() {
    const { viewModel: e } = this, { _updateAttachmentForm: t } = this;
    return this._set("submitting", !0), this._set("error", null), e.updateAttachment(t).then((i) => (this._set("submitting", !1), this._set("error", null), e.mode = "view", i)).catch((i) => {
      throw this._set("submitting", !1), this._set("error", new H("attachments:update-attachment", this.messages.updateErrorMessage, i)), i;
    });
  }
  addFile() {
    const e = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e;
  }
  updateFile() {
    const { viewModel: e } = this, t = e.updateFile(this.selectedFile, this._updateAttachmentForm, e.activeFileInfo);
    return e.mode = "view", t;
  }
  deleteFile(e) {
    var i;
    const t = this.viewModel.deleteFile(e || ((i = this.viewModel.activeFileInfo) == null ? void 0 : i.file));
    return this.viewModel.mode = "view", t;
  }
  render() {
    const { submitting: e, viewModel: t } = this, { state: i } = t;
    return b("div", { class: this.classes(C.base, C.geosceneWidget) }, e ? this.renderProgressBar() : null, i === "loading" ? this.renderLoading() : this.renderAttachments(), this.renderErrorMessage());
  }
  renderErrorMessage() {
    const { error: e, visibleElements: t } = this;
    return e && t.errorMessage ? b("div", { key: "error-message", class: C.errorMessage }, e.message) : null;
  }
  renderAttachments() {
    const { activeFileInfo: e, mode: t, activeAttachmentInfo: i } = this.viewModel;
    return t === "add" ? this.renderAddForm() : t === "edit" ? this.renderDetailsForm(i || e) : this.renderAttachmentContainer();
  }
  renderLoading() {
    return b("div", { class: C.loaderContainer, key: "loader" }, b("div", { class: C.loader }));
  }
  renderProgressBar() {
    return this.visibleElements.progressBar ? b("div", { class: C.progressBar, key: "progress-bar" }) : null;
  }
  renderAddForm() {
    const { submitting: e, selectedFile: t } = this, i = e || !t, r = this.visibleElements.cancelAddButton ? b("button", { type: "button", bind: this, disabled: e, onclick: this._cancelForm, class: this.classes(C.esriButton, C.esriButtonTertiary, C.esriButtonSmall, C.esriButtonHalf, e && C.buttonDisabled) }, this.messages.cancel) : null, n = this.visibleElements.addSubmitButton ? b("button", { type: "submit", disabled: i, class: this.classes(C.esriButton, C.esriButtonSecondary, C.esriButtonSmall, C.esriButtonHalf, { [C.buttonDisabled]: i }) }, this.messages.add) : null, a = t ? b("span", { key: "file-name", class: C.fileName }, t.name) : null, o = b("form", { bind: this, afterCreate: Ci, afterRemoved: Qs, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, b("fieldset", { class: C.fileFieldset }, a, b("label", { class: this.classes(C.fileLabel, C.esriButton, C.esriButtonSecondary) }, t ? this.messages.changeFile : this.messages.selectFile, b("input", { class: C.fileInput, type: "file", name: "attachment", bind: this, onchange: this._handleFileInputChange }))), n, r);
    return b("div", { key: "add-form-container", class: C.formNode }, o);
  }
  renderDetailsForm(e) {
    var P, O, L;
    const { visibleElements: t, viewModel: i, selectedFile: r, submitting: n } = this, { capabilities: a } = i, o = n || !r;
    let l, h, f, c;
    r ? (l = r.type, h = r.name, f = r.size) : e && "file" in e ? (l = e.file.type, h = e.file.name, f = e.file.size) : e && "contentType" in e && (l = e.contentType, h = e.name, f = e.size, c = e.url);
    const p = a.editing && ((P = a.operations) != null && P.delete) && t.deleteButton ? b("button", { key: "delete-button", type: "button", disabled: n, bind: this, onclick: (E) => this._submitDeleteAttachment(E, e), class: this.classes(C.esriButton, C.esriButtonSmall, C.esriButtonTertiary, C.deleteButton, { [C.buttonDisabled]: n }) }, this.messages.delete) : void 0, d = a.editing && ((O = a.operations) != null && O.update) && t.updateButton ? b("button", { disabled: o, key: "update-button", type: "submit", class: this.classes(C.esriButton, C.esriButtonSmall, C.esriButtonThird, { [C.buttonDisabled]: o }) }, this.messages.update) : void 0, _ = this.visibleElements.cancelUpdateButton ? b("button", { disabled: n, key: "cancel-button", type: "button", bind: this, onclick: this._cancelForm, class: this.classes(C.esriButton, C.esriButtonSmall, C.esriButtonTertiary, C.esriButtonThird, { [C.buttonDisabled]: n }) }, this.messages.cancel) : void 0, u = a.editing && ((L = a.operations) != null && L.update) ? b("fieldset", { key: "file", class: C.fileFieldset }, b("span", { key: "file-name", class: C.fileName }, h), b("label", { class: this.classes(C.fileLabel, C.esriButton, C.esriButtonSecondary) }, this.messages.changeFile, b("input", { class: C.fileInput, type: "file", name: "attachment", bind: this, onchange: this._handleFileInputChange }))) : void 0, y = b("fieldset", { key: "size", class: C.metadataFieldset }, b("label", null, Wa(this.messagesUnits, f ?? 0))), v = b("fieldset", { key: "content-type", class: C.metadataFieldset }, b("label", null, l)), x = c != null ? b("a", { class: C.itemLink, href: c, rel: "noreferrer", target: "_blank" }, this.renderImageMask(e, 400), b("div", { class: C.itemLinkOverlay }, b("span", { class: C.itemLinkOverlayIcon }, b("calcite-icon", { icon: "launch" })))) : this.renderImageMask(e, 400), w = b("form", { bind: this, afterCreate: Ci, afterRemoved: Qs, "data-node-ref": "_updateAttachmentForm", onsubmit: (E) => this._submitUpdateAttachment(E, e) }, b("div", { class: C.metadata }, y, v), u, b("div", { class: C.actions }, p, _, d));
    return b("div", { key: "edit-form-container", class: C.formNode }, x, w);
  }
  renderImageMask(e, t) {
    return e ? "file" in e ? this.renderGenericImageMask(e.file.name, e.file.type) : this.renderImageMaskForAttachment(e, t) : null;
  }
  renderGenericImageMask(e, t) {
    const { supportsResizeAttachments: i } = this.viewModel, r = Po(t), n = { [C.itemImageResizable]: i };
    return b("div", { class: this.classes(C.itemMaskIcon, C.itemMask) }, b("img", { title: e, alt: e, src: r, class: this.classes(n, C.itemImage) }));
  }
  renderImageMaskForAttachment(e, t) {
    const { supportsResizeAttachments: i } = this.viewModel;
    if (!e)
      return null;
    const { contentType: r, name: n, url: a } = e;
    if (!i || !dr(r))
      return this.renderGenericImageMask(n, r);
    const o = this._getCSSTransform(e), l = o ? { transform: o, "image-orientation": "none" } : {}, h = `${a}${a != null && a.includes("?") ? "&" : "?"}w=${t}`, f = { [C.itemImageResizable]: i };
    return b("div", { class: this.classes(C.itemMask) }, b("img", { styles: l, alt: n, title: n, src: h, class: this.classes(f, C.itemImage) }));
  }
  renderFile(e) {
    const { file: t } = e;
    return b("li", { class: C.item, key: t }, b("button", { key: "details-button", bind: this, class: C.itemButton, title: this.messages.attachmentDetails, "aria-label": this.messages.attachmentDetails, onclick: () => this._startEditFile(e), type: "button" }, this.renderImageMask(e), b("label", { class: C.itemLabel }, b("span", { class: C.itemFilename }, t.name || this.messages.noTitle), b("span", { "aria-hidden": "true", class: this.classes(C.itemChevronIcon, ft(this.container) ? C.iconLeft : C.iconRight) }))));
  }
  renderAttachmentInfo({ attachmentInfo: e, displayType: t }) {
    const { viewModel: i, effectiveDisplayType: r } = this, { capabilities: n, supportsResizeAttachments: a } = i, { contentType: o, name: l, url: h } = e, f = this.renderImageMask(e, t === "list" ? 48 : 400), c = n.editing ? b("span", { "aria-hidden": "true", class: this.classes(C.itemChevronIcon, ft(this.container) ? C.iconLeft : C.iconRight) }) : null, p = [f, r === "preview" && a && dr(o) ? null : b("label", { class: C.itemLabel }, b("span", { class: C.itemFilename }, l || this.messages.noTitle), c)], d = n.editing ? b("button", { key: "details-button", bind: this, class: C.itemButton, title: this.messages.attachmentDetails, "aria-label": this.messages.attachmentDetails, "data-attachment-info-id": e.id, onclick: () => this._startEditAttachment(e), type: "button" }, p) : b("a", { key: "details-link", class: C.itemButton, href: h ?? void 0, target: "_blank" }, p);
    return b("li", { class: C.item, key: e }, d);
  }
  renderAttachmentContainer() {
    var _;
    const { effectiveDisplayType: e, viewModel: t, visibleElements: i } = this, { attachmentInfos: r, capabilities: n, fileInfos: a } = t, o = !!(r != null && r.length), l = !!(a != null && a.length), h = { [C.containerList]: e !== "preview", [C.containerPreview]: e === "preview" }, f = n.editing && ((_ = n.operations) != null && _.add) && i.addButton ? b("button", { bind: this, onclick: () => this._startAddAttachment(), class: this.classes(C.esriButton, C.esriButtonTertiary, C.addAttachmentButton), type: "button" }, b("span", { "aria-hidden": "true", class: this.classes(C.itemAddIcon, C.iconPlus) }), this.messages.add) : void 0, c = o ? b("ul", { key: "attachments-list", class: C.items }, r.toArray().map((u) => this.renderAttachmentInfo({ attachmentInfo: u, displayType: e }))) : void 0, p = l ? b("ul", { key: "file-list", class: C.items }, a.toArray().map((u) => this.renderFile(u))) : void 0, d = l || o ? void 0 : b("div", { class: C.empty }, this.messages.noAttachments);
    return b("div", { key: "attachments-container", class: this.classes(C.container, h) }, c, p, d, f);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e) {
    const t = e.target, i = t && t.files && t.files.item(0);
    this._set("selectedFile", i);
  }
  _submitDeleteAttachment(e, t) {
    e.preventDefault(), t && ("file" in t ? this.deleteFile(t.file) : t && this.deleteAttachment(t));
  }
  _submitAddAttachment(e) {
    e.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e, t) {
    e.preventDefault(), t && "file" in t ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e) {
    const { viewModel: t } = this;
    t.activeFileInfo = null, t.activeAttachmentInfo = e, t.mode = "edit";
  }
  _startEditFile(e) {
    const { viewModel: t } = this;
    t.activeAttachmentInfo = null, t.activeFileInfo = e, t.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e) {
    e.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e) {
    const { orientationInfo: t } = e;
    return !this._supportsImageOrientation && t ? [t.rotation ? `rotate(${t.rotation}deg)` : "", t.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
g([m()], de.prototype, "capabilities", null), g([m()], de.prototype, "displayType", void 0), g([m({ readOnly: !0 })], de.prototype, "effectiveDisplayType", null), g([m()], de.prototype, "graphic", null), g([m()], de.prototype, "label", null), g([m(), Ae("geoscene/widgets/Attachments/t9n/Attachments")], de.prototype, "messages", void 0), g([m(), Ae("geoscene/core/t9n/Units")], de.prototype, "messagesUnits", void 0), g([m({ readOnly: !0 })], de.prototype, "selectedFile", void 0), g([m({ readOnly: !0 })], de.prototype, "submitting", void 0), g([m({ readOnly: !0 })], de.prototype, "error", void 0), g([m({ type: Bs })], de.prototype, "viewModel", void 0), g([m()], de.prototype, "visibleElements", void 0), g([_t("visibleElements")], de.prototype, "castVisibleElements", null), de = g([K("geoscene.widgets.Attachments")], de);
const ko = de;
let zt = class extends Bs {
  constructor(e) {
    super(e), this.description = null, this.title = null;
  }
};
g([m()], zt.prototype, "description", void 0), g([m()], zt.prototype, "title", void 0), zt = g([K("geoscene.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], zt);
const Ls = zt, Co = { heading: "geoscene-widget__heading" };
function Rs({ level: s, class: e, ...t }, i) {
  const r = Ao(s);
  return b(`h${r}`, { ...t, class: oa(Co.heading, e), role: "heading", "aria-level": String(r) }, i);
}
function Ao(s) {
  return Yr(Math.ceil(s), 1, 6);
}
const Zi = "geoscene-feature-element-info", es = { base: Zi, title: `${Zi}__title`, description: `${Zi}__description` };
let Pt = class extends Be {
  constructor(e, t) {
    super(e, t), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return b("div", { class: es.base }, this.renderTitle(), this.renderDescription());
  }
  renderTitle() {
    const { title: e } = this;
    return e ? b(Rs, { level: this.headingLevel, class: es.title }, e) : null;
  }
  renderDescription() {
    const { description: e } = this;
    return e ? b("div", { key: "description", class: es.description }, e) : null;
  }
};
g([m()], Pt.prototype, "description", void 0), g([m()], Pt.prototype, "headingLevel", void 0), g([m()], Pt.prototype, "title", void 0), Pt = g([K("geoscene.widgets.Feature.support.FeatureElementInfo")], Pt);
const Ri = Pt, To = { base: "geoscene-feature-attachments" };
let Le = class extends Be {
  constructor(e, t) {
    super(e, t), this._featureElementInfo = null, this.attachmentsWidget = new ko(), this.headingLevel = 2, this.viewModel = new Ls();
  }
  initialize() {
    this._featureElementInfo = new Ri(), this.addHandles([D(() => {
      var e, t;
      return [(e = this.viewModel) == null ? void 0 : e.description, (t = this.viewModel) == null ? void 0 : t.title, this.headingLevel];
    }, () => this._setupFeatureElementInfo(), ae), D(() => this.viewModel, (e) => this.attachmentsWidget.viewModel = e, ae)]);
  }
  destroy() {
    var e;
    this.attachmentsWidget.destroy(), (e = this._featureElementInfo) == null || e.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e) {
    this.attachmentsWidget.displayType = e;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e) {
    this.viewModel.graphic = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    var t;
    const { attachmentsWidget: e } = this;
    return b("div", { class: To.base }, (t = this._featureElementInfo) == null ? void 0 : t.render(), e == null ? void 0 : e.render());
  }
  _setupFeatureElementInfo() {
    var r;
    const { description: e, title: t, headingLevel: i } = this;
    (r = this._featureElementInfo) == null || r.set({ description: e, title: t, headingLevel: i });
  }
};
g([m({ readOnly: !0 })], Le.prototype, "attachmentsWidget", void 0), g([m()], Le.prototype, "description", null), g([m()], Le.prototype, "displayType", null), g([m()], Le.prototype, "graphic", null), g([m()], Le.prototype, "headingLevel", void 0), g([m()], Le.prototype, "title", null), g([m({ type: Ls })], Le.prototype, "viewModel", void 0), Le = g([K("geoscene.widgets.Feature.FeatureAttachments")], Le);
const Io = Le;
let Ge = class extends Fs(yt) {
  constructor(e) {
    super(e), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.handles.add(D(() => this.creator, (t) => {
      this._destroyContent(), this._createContent(t);
    }, ae));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: e, graphic: t, destroyer: i } = this;
    e && t && (Ti(i, { graphic: t }).catch(() => null), this._set("created", null));
  }
  async _createContent(e) {
    const t = this.graphic;
    if (!t || !e)
      return;
    const i = Ti(e, { graphic: t }).catch(() => null);
    this._loadingPromise = i, this.notifyChange("state");
    const r = await i;
    i === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", r));
  }
};
g([m({ readOnly: !0 })], Ge.prototype, "created", void 0), g([m()], Ge.prototype, "creator", void 0), g([m()], Ge.prototype, "destroyer", void 0), g([m({ type: $t })], Ge.prototype, "graphic", void 0), g([m({ readOnly: !0 })], Ge.prototype, "state", null), Ge = g([K("geoscene.widgets.Feature.FeatureContent.FeatureContentViewModel")], Ge);
const Ii = Ge, ts = "geoscene-feature-content", is = { base: ts, loaderContainer: `${ts}__loader-container`, loader: `${ts}__loader` };
let kt = class extends Be {
  constructor(e, t) {
    super(e, t), this.viewModel = null, this._addTargetToAnchors = (i) => {
      Array.from(i.querySelectorAll("a")).forEach((r) => {
        cn(r.href) && !r.hasAttribute("target") && r.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    var e;
    return (e = this.viewModel) == null ? void 0 : e.creator;
  }
  set creator(e) {
    this.viewModel && (this.viewModel.creator = e);
  }
  get graphic() {
    var e;
    return (e = this.viewModel) == null ? void 0 : e.graphic;
  }
  set graphic(e) {
    this.viewModel && (this.viewModel.graphic = e);
  }
  renderLoading() {
    return b("div", { class: is.loaderContainer, key: "loader" }, b("div", { class: is.loader }));
  }
  renderCreated() {
    var t;
    const e = (t = this.viewModel) == null ? void 0 : t.created;
    return e ? e instanceof HTMLElement ? b("div", { key: e, bind: e, afterCreate: this._attachToNode }) : on(e) ? b("div", { key: e }, !e.destroyed && e.render()) : b("div", { key: e, innerHTML: e, afterCreate: this._addTargetToAnchors }) : null;
  }
  render() {
    var t;
    const e = (t = this.viewModel) == null ? void 0 : t.state;
    return b("div", { class: is.base }, e === "loading" ? this.renderLoading() : this.renderCreated());
  }
  _attachToNode(e) {
    const t = this;
    e.appendChild(t);
  }
};
g([m()], kt.prototype, "creator", null), g([m()], kt.prototype, "graphic", null), g([m({ type: Ii })], kt.prototype, "viewModel", void 0), kt = g([K("geoscene.widgets.Feature.FeatureContent")], kt);
const bi = kt;
let je = class extends yt {
  constructor(e) {
    super(e), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: e, fieldInfos: t } = this, i = [];
    return t == null || t.forEach((r) => {
      if (!(!r.hasOwnProperty("visible") || r.visible))
        return;
      const n = r.clone();
      n.label = un(n, e), i.push(n);
    }), i;
  }
};
g([m()], je.prototype, "attributes", void 0), g([m({ type: [la] })], je.prototype, "expressionInfos", void 0), g([m()], je.prototype, "description", void 0), g([m({ type: [Jr] })], je.prototype, "fieldInfos", void 0), g([m({ readOnly: !0 })], je.prototype, "formattedFieldInfos", null), g([m()], je.prototype, "title", void 0), je = g([K("geoscene.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], je);
const ji = je, Oo = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function Fo(s) {
  let e = null;
  return Oo.some((t) => (t.pattern.test(s) && (e = t), !!e)), e;
}
function Do(s, e) {
  if (typeof e != "string" || !e)
    return e;
  const t = Fo(e);
  if (!t)
    return e;
  const i = e.match(t.pattern), r = i && i[2], n = Ze(Ze(t.label, { messages: s, hierPart: r }), { appName: t.appName }), a = t.target ? ` target="${t.target}"` : "", o = t.target === "_blank" ? ' rel="noreferrer"' : "";
  return e.replace(t.pattern, `<a${a} href="$1"${o}>${n}</a>`);
}
const hi = "geoscene-feature-fields", Lt = { base: hi, fieldHeader: `${hi}__field-header`, fieldData: `${hi}__field-data`, fieldDataDate: `${hi}__field-data--date`, esriTable: "geoscene-widget__table" };
let Fe = class extends Be {
  constructor(e, t) {
    super(e, t), this._featureElementInfo = null, this.viewModel = new ji(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new Ri(), this.addHandles(D(() => {
      var e, t;
      return [(e = this.viewModel) == null ? void 0 : e.description, (t = this.viewModel) == null ? void 0 : t.title];
    }, () => this._setupFeatureElementInfo(), ae));
  }
  destroy() {
    var e;
    (e = this._featureElementInfo) == null || e.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e) {
    this.viewModel.attributes = e;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e) {
    this.viewModel.expressionInfos = e;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e) {
    this.viewModel.fieldInfos = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  renderFieldInfo(e, t) {
    const { attributes: i } = this.viewModel, r = e.fieldName, n = e.label || r, a = i ? i[r] == null ? "" : i[r] : "", o = !(!e.format || !e.format.dateFormat), l = typeof a == "number" && !o ? this._forceLTR(a) : Do(this.messagesURIUtils, a), h = { [Lt.fieldDataDate]: o };
    return b("tr", { key: `fields-element-info-row-${r}-${t}` }, b("th", { key: `fields-element-info-row-header-${r}-${t}`, class: Lt.fieldHeader, innerHTML: n }), b("td", { key: `fields-element-info-row-data-${r}-${t}`, class: this.classes(Lt.fieldData, h), innerHTML: l }));
  }
  renderFields() {
    const { formattedFieldInfos: e } = this.viewModel;
    return e != null && e.length ? b("table", { class: Lt.esriTable, summary: this.messages.fieldsSummary }, b("tbody", null, e.map((t, i) => this.renderFieldInfo(t, i)))) : null;
  }
  render() {
    var e;
    return b("div", { class: Lt.base }, (e = this._featureElementInfo) == null ? void 0 : e.render(), this.renderFields());
  }
  _setupFeatureElementInfo() {
    var i;
    const { description: e, title: t } = this;
    (i = this._featureElementInfo) == null || i.set({ description: e, title: t });
  }
  _forceLTR(e) {
    return `&lrm;${e}`;
  }
};
g([m()], Fe.prototype, "attributes", null), g([m()], Fe.prototype, "description", null), g([m()], Fe.prototype, "expressionInfos", null), g([m()], Fe.prototype, "fieldInfos", null), g([m()], Fe.prototype, "title", null), g([m({ type: ji, nonNullable: !0 })], Fe.prototype, "viewModel", void 0), g([m(), Ae("geoscene/widgets/Feature/t9n/Feature")], Fe.prototype, "messages", void 0), g([m(), Ae("geoscene/widgets/support/t9n/uriUtils")], Fe.prototype, "messagesURIUtils", void 0), Fe = g([K("geoscene.widgets.Feature.FeatureFields")], Fe);
const vn = Fe, Eo = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, So = { maximumFractionDigits: 20 };
function $o(s) {
  return Os(s, So);
}
const Bo = "<", Lo = ">", Ro = qr("short-date");
function jo(s, e, t, i) {
  let r = "";
  e === 0 ? r = `${Bo} ` : e === t && (r = `${Lo} `);
  let n = null;
  return n = i ? ii(s, Ro) : $o(s), r + n;
}
const No = new Zr([64, 64, 64]);
function Ho(s, e) {
  const t = [], i = s.length - 1;
  return s.length === 5 ? t.push(0, 2, 4) : t.push(0, i), s.map((r, n) => t.includes(n) ? jo(r, n, i, e) : null);
}
async function zo(s, e, t) {
  let i = !1, r = [], n = [];
  if (s.stops) {
    const h = s.stops;
    r = h.map((f) => f.value), i = h.some((f) => !!f.label), i && (n = h.map((f) => f.label));
  }
  const a = r[0], o = r[r.length - 1];
  if (a == null && o == null)
    return null;
  const l = i ? null : Ho(r, t ?? !1);
  return (await Promise.all(r.map(async (h, f) => ({ value: h, color: s.type === "opacity" ? await Vo(h, s, e) : (await import("./index-O2RTvw_o.js").then((c) => c.lD)).getColor(s, h), label: i ? n[f] : (l == null ? void 0 : l[f]) ?? "" })))).reverse();
}
async function Vo(s, e, t) {
  const i = new Zr(t ?? No), r = (await import("./index-O2RTvw_o.js").then((n) => n.lD)).getOpacity(e, s);
  return r != null && (i.a = r), i;
}
function Wo(s) {
  if (!s.colorStops)
    return [];
  const e = [...s.colorStops].filter((i) => {
    var r;
    return ((r = i.color) == null ? void 0 : r.a) > 0;
  });
  let t = e.length - 1;
  if (e && e[0]) {
    const i = e[t];
    i && i.ratio !== 1 && (e.push(new ha({ ratio: 1, color: i.color })), t++);
  }
  return e.map((i, r) => {
    var a, o;
    let n = "";
    return r === 0 ? n = ((a = s.legendOptions) == null ? void 0 : a.minLabel) || "low" : r === t && (n = ((o = s.legendOptions) == null ? void 0 : o.maxLabel) || "high"), { color: i.color, label: n, ratio: i.ratio };
  }).reverse();
}
Ce.getLogger("geoscene.renderers.support.utils");
async function be(s, e, t) {
  ca(s, e, () => []).push(...t);
}
async function Uo(s) {
  var t, i;
  const e = /* @__PURE__ */ new Map();
  if (!s)
    return e;
  if ("visualVariables" in s && s.visualVariables) {
    const r = s.visualVariables.filter((n) => n.type === "color");
    for (const n of r) {
      const a = (await zo(n) ?? []).map((o) => o.color);
      await be(e, n.field || n.valueExpression, a);
    }
  }
  if (s.type === "heatmap") {
    const r = Wo(s).map((n) => n.color);
    await be(e, s.field || s.valueExpression, r);
  } else if (s.type === "pie-chart") {
    for (const r of s.attributes)
      await be(e, r.field || r.valueExpression, [r.color]);
    await be(e, "default", [(t = s == null ? void 0 : s.othersCategory) == null ? void 0 : t.color, xt(s.backgroundFillSymbol, null)]);
  } else if (s.type === "dot-density") {
    for (const r of s.attributes)
      await be(e, r.field || r.valueExpression, [r.color]);
    await be(e, "default", [s.backgroundColor]);
  } else if (s.type === "unique-value")
    if (((i = s.authoringInfo) == null ? void 0 : i.type) === "predominance")
      for (const r of s.uniqueValueInfos ?? [])
        await be(e, r.value.toString(), [xt(r.symbol, null)]);
    else {
      const r = (s.uniqueValueInfos ?? []).map((h) => xt(h.symbol, null)), { field: n, field2: a, field3: o, valueExpression: l } = s;
      (n || l) && await be(e, n || l, r), a && await be(e, a, r), o && await be(e, o, r);
    }
  else if (s.type === "class-breaks") {
    const r = s.classBreakInfos.map((o) => xt(o.symbol, null)), { field: n, valueExpression: a } = s;
    await be(e, n ?? a, r);
  } else
    s.type === "simple" && await be(e, "default", [xt(s.symbol, null)]);
  return "defaultSymbol" in s && s.defaultSymbol && await be(e, "default", [xt(s.defaultSymbol, null)]), e.forEach((r, n) => {
    const a = da(r.filter(Boolean), (o, l) => JSON.stringify(o) === JSON.stringify(l));
    e.set(n, a);
  }), e;
}
const Yo = "geoscene.widgets.Feature.support.relatedFeatureUtils", ur = Ce.getLogger(Yo), pr = /* @__PURE__ */ new Map();
function _i(s) {
  if (!Ne(s))
    return null;
  const [e, t] = s.split("/").slice(1);
  return { layerId: e, fieldName: t };
}
function qo(s, e) {
  if (!e.relationships)
    return null;
  let t = null;
  const { relationships: i } = e;
  return i.some((r) => r.id === parseInt(s, 10) && (t = r, !0)), t;
}
function Go({ originRelationship: s, relationships: e, layerId: t }) {
  let i = null;
  return e && e.some((r) => (`${r.relatedTableId}` === t && r.id === (s == null ? void 0 : s.id) && (i = r), !!i)), i;
}
function Ko(s, e) {
  const t = e.toLowerCase();
  for (const i in s)
    if (i.toLowerCase() === t)
      return s[i];
  return null;
}
function Xo(s, e) {
  const t = qo(s, e);
  if (t)
    return { url: `${e.url}/${t.relatedTableId}`, sourceSpatialReference: e.spatialReference, relation: t, relatedFields: [], outStatistics: [] };
}
function Qo(s, e) {
  if (!e || !s)
    return;
  const { features: t, statsFeatures: i } = s, r = t && t.value;
  e.relatedFeatures = r ? r.features : [];
  const n = i && i.value;
  e.relatedStatsFeatures = n ? n.features : [];
}
function Jo(s, e, t, i) {
  var n;
  const r = new bs();
  return r.outFields = ["*"], r.relationshipId = typeof e.id == "number" ? e.id : parseInt(e.id, 10), r.objectIds = [s.attributes[t.objectIdField]], ((n = t.queryRelatedFeatures) == null ? void 0 : n.call(t, r, i)) ?? Promise.resolve({});
}
function Zo(s, e, t) {
  let i = 0;
  const r = [];
  for (; i < e.length; )
    r.push(`${s} IN (${e.slice(i, t + i)})`), i += t;
  return r.join(" OR ");
}
async function el(s, e, t, i) {
  const r = t.layerId.toString(), { layerInfo: n, relation: a, relatedFields: o, outStatistics: l, url: h, sourceSpatialReference: f } = e;
  if (!n || !a)
    return null;
  const c = Go({ originRelationship: a, relationships: n.relationships, layerId: r });
  if (c != null && c.relationshipTableId && c.keyFieldInRelationshipTable) {
    const d = (await Jo(s, c, t, i))[s.attributes[t.objectIdField]];
    if (!d)
      return null;
    const _ = d.features.map((u) => u.attributes[n.objectIdField]);
    if (l != null && l.length && n.supportsStatistics) {
      const u = new Yi();
      u.where = Zo(n.objectIdField, _, 1e3), u.outFields = o, u.outStatistics = l, u.sourceSpatialReference = f;
      const y = { features: Promise.resolve(d), statsFeatures: Xi(h, u) };
      return mt(y);
    }
  }
  const p = c == null ? void 0 : c.keyField;
  if (p) {
    const d = ga(nl(n.fields, p)), _ = Ko(s.attributes, a.keyField), u = d ? `${p}=${_}` : `${p}='${_}'`, y = Xi(h, new Yi({ where: u, outFields: e.relatedFields, sourceSpatialReference: f }), i), v = e.outStatistics && e.outStatistics.length > 0 && n.supportsStatistics ? Xi(h, new Yi({ where: u, outFields: e.relatedFields, outStatistics: e.outStatistics, sourceSpatialReference: f }), i) : null, x = { features: y };
    return v && (x.statsFeatures = v), mt(x);
  }
  return null;
}
function tl(s, e) {
  return fa(s, { query: { f: "json" }, signal: e && e.signal });
}
function il({ relatedInfos: s, layer: e }, t) {
  const i = {};
  return s.forEach((r, n) => {
    const { relation: a } = r;
    if (!a) {
      const c = new H("relation-required", "A relation is required on a layer to retrieve related records.");
      throw ur.error(c), c;
    }
    const { relatedTableId: o } = a;
    if (typeof o != "number") {
      const c = new H("A related table ID is required on a layer to retrieve related records.");
      throw ur.error(c), c;
    }
    const l = `${e.url}/${o}`, h = pr.get(l), f = h ?? tl(l);
    h || pr.set(l, f), i[n] = f;
  }), ua(mt(i), t);
}
function sl({ graphic: s, relatedInfos: e, layer: t }, i) {
  const r = {};
  return e.forEach((n, a) => {
    n.layerInfo && (r[a] = el(s, n, t, i));
  }), mt(r);
}
function rl({ relatedInfo: s, fieldName: e, fieldInfo: t }) {
  var i, r;
  if ((i = s.relatedFields) == null || i.push(e), t.statisticType) {
    const n = new pa({ statisticType: t.statisticType, onStatisticField: e, outStatisticFieldName: e });
    (r = s.outStatistics) == null || r.push(n);
  }
}
function nl(s, e) {
  if (s != null) {
    e = e.toLowerCase();
    for (const t of s)
      if (t && t.name.toLowerCase() === e)
        return t;
  }
  return null;
}
const gr = { chartAnimation: !0 };
let ee = class extends yt {
  constructor(e) {
    super(e), this.abilities = { ...gr }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = !1, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(e) {
    return { ...gr, ...e };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(e) {
    this._setContentElementMedia(e);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(e) {
    const { formattedMediaInfoCount: t } = this, i = (e + t) % t;
    this.activeMediaInfoIndex = i;
  }
  _pageContentElementMedia(e) {
    const { activeMediaInfoIndex: t } = this, i = t + e;
    this._setContentElementMedia(i);
  }
  _formatMediaInfos() {
    const { mediaInfos: e, layer: t } = this, i = this.attributes ?? {}, r = this.formattedAttributes ?? {}, n = this.expressionAttributes ?? {}, a = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return (e == null ? void 0 : e.map((o) => {
      const l = o == null ? void 0 : o.clone();
      if (!l)
        return null;
      if (l.title = ht({ attributes: i, fieldInfoMap: a, globalAttributes: r, expressionAttributes: n, layer: t, text: l.title }), l.caption = ht({ attributes: i, fieldInfoMap: a, globalAttributes: r, expressionAttributes: n, layer: t, text: l.caption }), l.altText = ht({ attributes: i, fieldInfoMap: a, globalAttributes: r, expressionAttributes: n, layer: t, text: l.altText }), l.type === "image") {
        const { value: h } = l;
        return this._setImageValue({ value: h, formattedAttributes: r, layer: t }), l.value.sourceURL ? l : void 0;
      }
      if (l.type === "pie-chart" || l.type === "line-chart" || l.type === "column-chart" || l.type === "bar-chart") {
        const { value: h } = l;
        return this._setChartValue({ value: h, chartType: l.type, attributes: i, formattedAttributes: r, layer: t, expressionAttributes: n }), l;
      }
      return null;
    }).filter($i)) ?? [];
  }
  _setImageValue(e) {
    const t = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: i, formattedAttributes: r, layer: n } = e, { linkURL: a, sourceURL: o } = i;
    if (o) {
      const l = ws(o, n);
      i.sourceURL = vs({ formattedAttributes: r, template: l, fieldInfoMap: t });
    }
    if (a) {
      const l = ws(a, n);
      i.linkURL = vs({ formattedAttributes: r, template: l, fieldInfoMap: t });
    }
  }
  _setChartValue(e) {
    const { value: t, attributes: i, formattedAttributes: r, chartType: n, layer: a, expressionAttributes: o } = e, { popupTemplate: l, relatedInfos: h } = this, { fields: f, normalizeField: c } = t, p = a;
    if (t.fields = io(f, p), c && (t.normalizeField = si(c, p)), !f.some((_) => !!(r[_] != null || Ne(_) && (h != null && h.size))))
      return;
    const d = (l == null ? void 0 : l.fieldInfos) ?? [];
    f.forEach((_) => {
      if (Ne(_))
        return void (t.series = [...t.series, ...this._getRelatedChartInfos({ fieldInfos: d, fieldName: _, formattedAttributes: r, chartType: n, value: t })]);
      const u = this._getChartOption({ value: t, attributes: i, chartType: n, formattedAttributes: r, expressionAttributes: o, fieldName: _, fieldInfos: d });
      t.series.push(u);
    });
  }
  _getRelatedChartInfos(e) {
    var d;
    const { fieldInfos: t, fieldName: i, formattedAttributes: r, chartType: n, value: a } = e, o = [], l = _i(i), h = l && ((d = this.relatedInfos) == null ? void 0 : d.get(l.layerId.toString()));
    if (!h)
      return o;
    const { relatedFeatures: f, relation: c } = h;
    if (!c || !f)
      return o;
    const { cardinality: p } = c;
    return f.forEach((_) => {
      const { attributes: u } = _;
      u && Object.keys(u).forEach((y) => {
        y === l.fieldName && o.push(this._getChartOption({ value: a, attributes: u, formattedAttributes: r, fieldName: i, chartType: n, relatedFieldName: y, hasMultipleRelatedFeatures: (f == null ? void 0 : f.length) > 1, fieldInfos: t }));
      });
    }), p === "one-to-many" || p === "many-to-many" ? o : [o[0]];
  }
  _getTooltip({ label: e, value: t, chartType: i }) {
    return i === "pie-chart" ? `${e}` : `${e}: ${t}`;
  }
  _getChartOption(e) {
    var L;
    const { value: t, attributes: i, formattedAttributes: r, expressionAttributes: n, fieldName: a, relatedFieldName: o, fieldInfos: l, chartType: h, hasMultipleRelatedFeatures: f } = e, c = this.layer, p = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: d, tooltipField: _ } = t, u = d ? Ne(d) ? i[_i(d).fieldName] : i[d] : null, y = Es(a) && n && n[a] !== void 0 ? n[a] : o && i[o] !== void 0 ? i[o] : i[a] !== void 0 ? i[a] : r[a], v = new ma({ fieldName: a, value: y === void 0 ? null : y && u ? y / u : y });
    if (Ne(a)) {
      const E = p.get(a.toLowerCase()), $ = _ && p.get(_.toLowerCase()), z = (E == null ? void 0 : E.fieldName) ?? a, N = f && _ ? _i(_).fieldName : ($ == null ? void 0 : $.fieldName) ?? _, U = f && N ? i[N] : r[N] ?? (E == null ? void 0 : E.label) ?? (E == null ? void 0 : E.fieldName) ?? o, he = f && o ? i[o] : r[z];
      return v.tooltip = this._getTooltip({ label: U, value: he, chartType: h }), v;
    }
    const x = fn(l, a), w = si(a, c), P = _ && r[_] !== void 0 ? r[_] : un(x || new Jr({ fieldName: w }), (L = this.popupTemplate) == null ? void 0 : L.expressionInfos), O = r[w];
    return v.tooltip = this._getTooltip({ label: P, value: O, chartType: h }), v;
  }
};
g([m()], ee.prototype, "abilities", void 0), g([_t("abilities")], ee.prototype, "castAbilities", null), g([m()], ee.prototype, "activeMediaInfoIndex", void 0), g([m({ readOnly: !0 })], ee.prototype, "activeMediaInfo", null), g([m()], ee.prototype, "attributes", void 0), g([m()], ee.prototype, "description", void 0), g([m()], ee.prototype, "fieldInfoMap", void 0), g([m()], ee.prototype, "formattedAttributes", void 0), g([m()], ee.prototype, "expressionAttributes", void 0), g([m({ readOnly: !0 })], ee.prototype, "formattedMediaInfos", null), g([m()], ee.prototype, "isAggregate", void 0), g([m()], ee.prototype, "layer", void 0), g([m({ readOnly: !0 })], ee.prototype, "formattedMediaInfoCount", null), g([m()], ee.prototype, "mediaInfos", void 0), g([m()], ee.prototype, "popupTemplate", void 0), g([m()], ee.prototype, "relatedInfos", void 0), g([m()], ee.prototype, "title", void 0), ee = g([K("geoscene.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], ee);
const dt = ee;
function js(s) {
  return Number(s) !== s;
}
function al(s) {
  return {}.toString.call(s);
}
function we(s) {
  if (s != null && !F(s)) {
    let e = Number(s);
    return js(e) && St(s) && s != "" ? we(s.replace(/[^0-9.\-]+/g, "")) : e;
  }
  return s;
}
function ol(s) {
  if (xs(s))
    return new Date(s);
  if (F(s))
    return new Date(s);
  {
    let e = Number(s);
    return F(e) ? new Date(e) : new Date(s);
  }
}
function ll(s) {
  if (js(s))
    return "NaN";
  if (s === 1 / 0)
    return "Infinity";
  if (s === -1 / 0)
    return "-Infinity";
  if (s === 0 && 1 / s == -1 / 0)
    return "-0";
  let e = s < 0;
  s = Math.abs(s);
  let t, i = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + s), r = i[1], n = i[2] || "";
  if (i[3] === void 0)
    t = n === "" ? r : r + "." + n;
  else {
    let a = +i[3];
    if (s < 1)
      t = "0." + fr("0", a - 1) + r + n;
    else {
      let o = a - n.length;
      t = o === 0 ? r + n : o < 0 ? r + n.slice(0, o) + "." + n.slice(o) : r + n + fr("0", o);
    }
  }
  return e ? "-" + t : t;
}
function fr(s, e) {
  return new Array(e + 1).join(s);
}
function xs(s) {
  return al(s) === "[object Date]";
}
function St(s) {
  return typeof s == "string";
}
function F(s) {
  return typeof s == "number" && Number(s) == s;
}
function Ni(s) {
  return typeof s == "object" && s !== null;
}
const tt = "__§§§__", Tt = "__§§§§__";
function Oi(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i)
    if (s[i] === e)
      return i;
  return -1;
}
function hl(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i)
    if (e(s[i]))
      return !0;
  return !1;
}
function dl(s, e) {
  const t = s.length, i = new Array(t);
  for (let r = 0; r < t; ++r)
    i[r] = e(s[r], r);
  return i;
}
function k(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i)
    e(s[i], i);
}
function Gt(s, e) {
  let t = s.length;
  for (; t > 0; )
    --t, e(s[t], t);
}
function wn(s, e) {
  const t = s.length;
  for (let i = 0; i < t && e(s[i], i); ++i)
    ;
}
function Xe(s, e) {
  let t = !1, i = 0;
  for (; ; ) {
    if (i = s.indexOf(e, i), i === -1)
      return t;
    t = !0, s.splice(i, 1);
  }
}
function Pe(s, e) {
  let t = s.indexOf(e);
  return t !== -1 && (s.splice(t, 1), !0);
}
function ri(s, e) {
  s.indexOf(e) === -1 && s.push(e);
}
function cl(s) {
  const e = s.length, t = new Array(e);
  for (let i = 0; i < e; ++i)
    t[i] = s[i];
  return t;
}
function ss(s, e, t) {
  s.splice(e, 0, t);
}
function mr(s, e) {
  s.splice(e, 1);
}
function xn(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i)
    if (e(s[i], i))
      return i;
  return -1;
}
function ul(s, e) {
  let t = s.length;
  for (; t > 0; )
    if (--t, e(s[t], t))
      return t;
  return -1;
}
function pl(s, e) {
  const t = xn(s, e);
  if (t !== -1)
    return s[t];
}
function gl(s, e) {
  const t = ul(s, e);
  if (t !== -1)
    return s[t];
}
function fl(s, e) {
  let t = 0, i = s.length, r = !1;
  for (; t < i; ) {
    const n = t + i >> 1, a = e(s[n]);
    a < 0 ? t = n + 1 : a === 0 ? (r = !0, t = n + 1) : i = n;
  }
  return { found: r, index: r ? t - 1 : t };
}
function ml(s, e) {
  let t = 0, i = s.length, r = !1;
  for (; t < i; ) {
    const n = t + i >> 1, a = e(s[n]);
    a < 0 ? t = n + 1 : (a === 0 && (r = !0), i = n);
  }
  return { found: r, index: t };
}
function Hi(s, e) {
  let t = s.length;
  for (; t > 0; )
    --t, e(s[t]) || s.splice(t, 1);
}
class Ns {
  constructor() {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
let re = class {
  constructor(e) {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dispose", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1, this._dispose = e;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}, bl = class extends Ns {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _dispose() {
    k(this._disposers, (e) => {
      e.dispose();
    });
  }
}, xe = class extends Ns {
  constructor(e) {
    super(), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposers = e;
  }
  _dispose() {
    k(this._disposers, (e) => {
      e.dispose();
    });
  }
}, Mn = class extends re {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_counter", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  increment() {
    return ++this._counter, new re(() => {
      --this._counter, this._counter === 0 && this.dispose();
    });
  }
}, Bt = class {
  constructor() {
    Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_killed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_iterating", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_enabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = !0, this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      const e = this._listeners;
      this._iterating = 1, this._listeners = null, this._disabled = null;
      try {
        k(e, (t) => {
          t.disposer.dispose();
        });
      } finally {
        this._killed = null, this._iterating = null;
      }
    }
  }
  hasListeners() {
    return this._listeners.length !== 0;
  }
  hasListenersByType(e) {
    return hl(this._listeners, (t) => (t.type === null || t.type === e) && !t.killed);
  }
  enable() {
    this._enabled = !0;
  }
  disable() {
    this._enabled = !1;
  }
  enableType(e) {
    delete this._disabled[e];
  }
  disableType(e, t = 1 / 0) {
    this._disabled[e] = t;
  }
  _removeListener(e) {
    if (this._iterating === 0) {
      const t = this._listeners.indexOf(e);
      if (t === -1)
        throw new Error("Invalid state: could not remove listener");
      this._listeners.splice(t, 1);
    } else
      this._killed.push(e);
  }
  _removeExistingListener(e, t, i, r) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._eachListener((n) => {
      n.once !== e || n.type !== t || i !== void 0 && n.callback !== i || n.context !== r || n.disposer.dispose();
    });
  }
  isEnabled(e) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(e) && this._disabled[e] === void 0;
  }
  removeType(e) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._eachListener((t) => {
      t.type === e && t.disposer.dispose();
    });
  }
  has(e, t, i) {
    return xn(this._listeners, (r) => r.once !== !0 && r.type === e && (t === void 0 || r.callback === t) && r.context === i) !== -1;
  }
  _shouldDispatch(e) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    const t = this._disabled[e];
    return F(t) ? (t <= 1 ? delete this._disabled[e] : --this._disabled[e], !1) : this._enabled;
  }
  _eachListener(e) {
    ++this._iterating;
    try {
      k(this._listeners, e);
    } finally {
      --this._iterating, this._iterating === 0 && this._killed.length !== 0 && (k(this._killed, (t) => {
        this._removeListener(t);
      }), this._killed.length = 0);
    }
  }
  dispatch(e, t) {
    this._shouldDispatch(e) && this._eachListener((i) => {
      i.killed || i.type !== null && i.type !== e || i.dispatch(e, t);
    });
  }
  _on(e, t, i, r, n, a) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._removeExistingListener(e, t, i, r);
    const o = { type: t, callback: i, context: r, shouldClone: n, dispatch: a, killed: !1, once: e, disposer: new re(() => {
      o.killed = !0, this._removeListener(o);
    }) };
    return this._listeners.push(o), o;
  }
  onAll(e, t, i = !0) {
    return this._on(!1, null, e, t, i, (r, n) => e.call(t, n)).disposer;
  }
  on(e, t, i, r = !0) {
    return this._on(!1, e, t, i, r, (n, a) => t.call(i, a)).disposer;
  }
  once(e, t, i, r = !0) {
    const n = this._on(!0, e, t, i, r, (a, o) => {
      n.disposer.dispose(), t.call(i, o);
    });
    return n.disposer;
  }
  off(e, t, i) {
    this._removeExistingListener(!1, e, t, i);
  }
  copyFrom(e) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    if (e === this)
      throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    const t = [];
    return k(e._listeners, (i) => {
      !i.killed && i.shouldClone && (i.type === null ? t.push(this.onAll(i.callback, i.context)) : i.once ? t.push(this.once(i.type, i.callback, i.context)) : t.push(this.on(i.type, i.callback, i.context)));
    }), new xe(t);
  }
};
function Rt(s, e) {
  if (!(s >= 0 && s < e))
    throw new Error("Index out of bounds: " + s);
}
let Pn = class {
  constructor(e = []) {
    Object.defineProperty(this, "_values", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new Bt() }), this._values = e;
  }
  get values() {
    return this._values;
  }
  contains(e) {
    return this._values.indexOf(e) !== -1;
  }
  removeValue(e) {
    let t = 0, i = this._values.length;
    for (; t < i; )
      this._values[t] === e ? (this.removeIndex(t), --i) : ++t;
  }
  indexOf(e) {
    return Oi(this._values, e);
  }
  get length() {
    return this._values.length;
  }
  hasIndex(e) {
    return e >= 0 && e < this._values.length;
  }
  getIndex(e) {
    return this._values[e];
  }
  _onPush(e) {
    this.events.isEnabled("push") && this.events.dispatch("push", { type: "push", target: this, newValue: e });
  }
  _onInsertIndex(e, t) {
    this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex", { type: "insertIndex", target: this, index: e, newValue: t });
  }
  _onSetIndex(e, t, i) {
    this.events.isEnabled("setIndex") && this.events.dispatch("setIndex", { type: "setIndex", target: this, index: e, oldValue: t, newValue: i });
  }
  _onRemoveIndex(e, t) {
    this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex", { type: "removeIndex", target: this, index: e, oldValue: t });
  }
  _onMoveIndex(e, t, i) {
    this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex", { type: "moveIndex", target: this, oldIndex: e, newIndex: t, value: i });
  }
  _onClear(e) {
    this.events.isEnabled("clear") && this.events.dispatch("clear", { type: "clear", target: this, oldValues: e });
  }
  setIndex(e, t) {
    Rt(e, this._values.length);
    const i = this._values[e];
    return i !== t && (this._values[e] = t, this._onSetIndex(e, i, t)), i;
  }
  insertIndex(e, t) {
    return Rt(e, this._values.length + 1), ss(this._values, e, t), this._onInsertIndex(e, t), t;
  }
  swap(e, t) {
    const i = this._values.length;
    if (Rt(e, i), Rt(t, i), e !== t) {
      const r = this._values[e], n = this._values[t];
      this._values[e] = n, this._onSetIndex(e, r, n), this._values[t] = r, this._onSetIndex(t, n, r);
    }
  }
  removeIndex(e) {
    Rt(e, this._values.length);
    const t = this._values[e];
    return mr(this._values, e), this._onRemoveIndex(e, t), t;
  }
  moveValue(e, t) {
    let i = this.indexOf(e);
    if (i !== -1)
      if (mr(this._values, i), t == null) {
        const r = this._values.length;
        this._values.push(e), this._onMoveIndex(i, r, e);
      } else
        ss(this._values, t, e), this._onMoveIndex(i, t, e);
    else
      t == null ? (this._values.push(e), this._onPush(e)) : (ss(this._values, t, e), this._onInsertIndex(t, e));
    return e;
  }
  push(e) {
    return this._values.push(e), this._onPush(e), e;
  }
  unshift(e) {
    return this.insertIndex(0, e), e;
  }
  pushAll(e) {
    k(e, (t) => {
      this.push(t);
    });
  }
  copyFrom(e) {
    this.pushAll(e._values);
  }
  pop() {
    return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  setAll(e) {
    const t = this._values;
    this._values = [], this._onClear(t), k(e, (i) => {
      this._values.push(i), this._onPush(i);
    });
  }
  clear() {
    this.setAll([]);
  }
  *[Symbol.iterator]() {
    const e = this._values.length;
    for (let t = 0; t < e; ++t)
      yield this._values[t];
  }
  each(e) {
    k(this._values, e);
  }
  eachReverse(e) {
    Gt(this._values, e);
  }
}, _l = class extends Pn {
  constructor() {
    super(...arguments), Object.defineProperty(this, "autoDispose", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _onSetIndex(e, t, i) {
    this.autoDispose && t.dispose(), super._onSetIndex(e, t, i);
  }
  _onRemoveIndex(e, t) {
    this.autoDispose && t.dispose(), super._onRemoveIndex(e, t);
  }
  _onClear(e) {
    this.autoDispose && k(e, (t) => {
      t.dispose();
    }), super._onClear(e);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this.autoDispose && k(this._values, (e) => {
      e.dispose();
    }));
  }
}, fc = class extends _l {
  constructor(e, t) {
    super(), Object.defineProperty(this, "template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "make", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.template = e, this.make = t;
  }
}, yl = class extends Pn {
  constructor(e) {
    super(), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._container = e, this._events = this.events.onAll((t) => {
      if (t.type === "clear")
        k(t.oldValues, (i) => {
          this._onRemoved(i);
        });
      else if (t.type === "push")
        this._onInserted(t.newValue);
      else if (t.type === "setIndex")
        this._onRemoved(t.oldValue), this._onInserted(t.newValue, t.index);
      else if (t.type === "insertIndex")
        this._onInserted(t.newValue, t.index);
      else if (t.type === "removeIndex")
        this._onRemoved(t.oldValue);
      else {
        if (t.type !== "moveIndex")
          throw new Error("Unknown IListEvent type");
        this._onRemoved(t.value), this._onInserted(t.value, t.newIndex);
      }
    });
  }
  _onInserted(e, t) {
    e._setParent(this._container, !0);
    const i = this._container._childrenDisplay;
    t === void 0 ? i.addChild(e._display) : i.addChildAt(e._display, t);
  }
  _onRemoved(e) {
    this._container._childrenDisplay.removeChild(e._display), this._container.markDirtyBounds(), this._container.markDirty();
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._events.dispose(), k(this.values, (e) => {
      e.dispose();
    }));
  }
}, W = class Ms {
  constructor(e) {
    Object.defineProperty(this, "_value", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._value = e;
  }
  get value() {
    return this._value / 100;
  }
  get percent() {
    return this._value;
  }
  toString() {
    return this._value + "%";
  }
  interpolate(e, t) {
    return e + this.value * (t - e);
  }
  static normalize(e, t, i) {
    return e instanceof Ms ? e : new Ms(t === i ? 0 : 100 * Math.min(Math.max(1 / (i - t) * (e - t), 0), 1));
  }
};
function oi(s) {
  return new W(s);
}
oi(0);
const X = oi(100), te = oi(50);
function ge(s) {
  return Object.keys(s);
}
function vl(s, e) {
  return ge(s).sort(e);
}
function wl(s) {
  return Object.assign({}, s);
}
function q(s, e) {
  ge(s).forEach((t) => {
    e(t, s[t]);
  });
}
function xl(s, e) {
  for (let t in s)
    if (Ml(s, t) && !e(t, s[t]))
      break;
}
function Ml(s, e) {
  return {}.hasOwnProperty.call(s, e);
}
function Pl(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function ie(s, e, t, i) {
  return s.addEventListener(e, t, i || !1), new re(() => {
    s.removeEventListener(e, t, i || !1);
  });
}
function kn(s) {
  return ie(window, "resize", (e) => {
    s();
  });
}
function ut(s) {
  switch (s) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return !1;
}
function rs(s) {
  return s.pointerId || 0;
}
function kl() {
  if (document.activeElement && document.activeElement != document.body)
    if (document.activeElement.blur)
      document.activeElement.blur();
    else {
      let s = document.createElement("button");
      s.style.position = "fixed", s.style.top = "0px", s.style.left = "-10000px", document.body.appendChild(s), s.focus(), s.blur(), document.body.removeChild(s);
    }
}
function Cl(s) {
  s && s.focus();
}
function Ps(s) {
  if (ut("pointerevents"))
    return s;
  if (ut("touchevents"))
    switch (s) {
      case "pointerover":
      case "pointerdown":
        return "touchstart";
      case "pointerout":
      case "pointerup":
        return "touchend";
      case "pointermove":
        return "touchmove";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  else if (ut("mouseevents"))
    switch (s) {
      case "pointerover":
        return "mouseover";
      case "pointerout":
        return "mouseout";
      case "pointerdown":
        return "mousedown";
      case "pointermove":
        return "mousemove";
      case "pointerup":
        return "mouseup";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  return s;
}
function br(s) {
  if (typeof Touch < "u" && s instanceof Touch)
    return !0;
  if (typeof PointerEvent < "u" && s instanceof PointerEvent && s.pointerType != null)
    switch (s.pointerType) {
      case "touch":
      case "pen":
      case 2:
        return !0;
      case "mouse":
      case 4:
        return !1;
      default:
        return !(s instanceof MouseEvent);
    }
  else if (s.type != null && s.type.match(/^mouse/))
    return !1;
  return !0;
}
function ns(s, e, t) {
  s.style[e] = t;
}
function Al(s, e) {
  return s.style[e];
}
function Cn(s) {
  if (s.composedPath) {
    const e = s.composedPath();
    return e.length === 0 ? null : e[0];
  }
  return s.target;
}
function Tl(s, e) {
  let t = e;
  for (; ; ) {
    if (s === t)
      return !0;
    if (t.parentNode === null) {
      if (t.host == null)
        return !1;
      t = t.host;
    } else
      t = t.parentNode;
  }
}
function Il(s, e) {
  return s.target && Tl(e.root.dom, s.target);
}
function Ct(s, e) {
  s.style.pointerEvents = e ? "auto" : "none";
}
function Ol() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function Fl() {
  return Ol() ? 1 : void 0;
}
function Ye(s, e) {
  return F(s) ? s : s != null && F(s.value) && F(e) ? e * s.value : 0;
}
function _c(s) {
  let e = ("" + s).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
}
function Q(s, e = 0, t = "0") {
  return typeof s != "string" && (s = s.toString()), e > s.length ? Array(e - s.length + 1).join(t) + s : s;
}
function Dl(s) {
  return s.replace(/^[\s]*/, "");
}
function El(s) {
  return s.replace(/[\s]*$/, "");
}
function yi(s) {
  return Dl(El(s));
}
function Sl(s) {
  if (s === void 0)
    return "string";
  let e = (s = (s = (s = s.toLowerCase().replace(/^\[[^\]]*\]/, "")).replace(/\[[^\]]+\]/, "")).trim()).match(/\/(date|number|duration)$/);
  return e ? e[1] : s === "number" ? "number" : s === "date" ? "date" : s === "duration" ? "duration" : s.match(/[#0]/) ? "number" : s.match(/[ymwdhnsqaxkzgtei]/) ? "date" : "string";
}
function Hs(s) {
  return s.replace(/\/(date|number|duration)$/i, "");
}
function _r(s) {
  return s && s.replace(/<[^>]*>/g, "");
}
function yr(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function vr(s, e = !1) {
  const t = new Date(s.getFullYear(), 0, 0), i = s.getTime() - t.getTime() + 60 * (t.getTimezoneOffset() - s.getTimezoneOffset()) * 1e3;
  return Math.floor(i / 864e5);
}
function Fi(s, e = !1) {
  const t = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - i);
  const r = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - r.getTime()) / 864e5 + 1) / 7);
}
function $l(s, e = !1) {
  const t = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = t.getUTCDay() || 7;
  return t.setUTCDate(t.getUTCDate() + 4 - i), new Date(Date.UTC(t.getUTCFullYear(), 0, 1)).getFullYear();
}
function Bl(s, e = !1) {
  const t = Fi(new Date(s.getFullYear(), s.getMonth(), 1), e);
  let i = Fi(s, e);
  return i == 1 && (i = 53), i - t + 1;
}
function Ll(s, e, t = 1, i = !1) {
  let r = new Date(e, 0, 4, 0, 0, 0, 0);
  return i && r.setUTCFullYear(e), 7 * s + t - ((r.getDay() || 7) + 3);
}
function di(s, e) {
  return s > 12 ? s -= 12 : s === 0 && (s = 12), e != null ? s + (e - 1) : s;
}
function ci(s, e = !1, t = !1, i = !1) {
  if (i)
    return e ? "Coordinated Universal Time" : "UTC";
  let r = s.toLocaleString("UTC"), n = s.toLocaleString("UTC", { timeZoneName: e ? "long" : "short" }).substr(r.length);
  return t === !1 && (n = n.replace(/ (standard|daylight|summer|winter) /i, " ")), n;
}
function Rl(s) {
  const e = new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)), t = new Date(e.toLocaleString("en-US", { timeZone: "UTC" }));
  return (new Date(e.toLocaleString("en-US", { timeZone: s })).getTime() - t.getTime()) / 6e4 * -1;
}
function yc(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function An(s) {
  let e, t, i, r = s.h, n = s.s, a = s.l;
  if (n == 0)
    e = t = i = a;
  else {
    let o = function(f, c, p) {
      return p < 0 && (p += 1), p > 1 && (p -= 1), p < 0.16666666666666666 ? f + 6 * (c - f) * p : p < 0.5 ? c : p < 0.6666666666666666 ? f + (c - f) * (0.6666666666666666 - p) * 6 : f;
    }, l = a < 0.5 ? a * (1 + n) : a + n - a * n, h = 2 * a - l;
    e = o(h, l, r + 1 / 3), t = o(h, l, r), i = o(h, l, r - 1 / 3);
  }
  return { r: Math.round(255 * e), g: Math.round(255 * t), b: Math.round(255 * i) };
}
function Tn(s) {
  let e = s.r / 255, t = s.g / 255, i = s.b / 255, r = Math.max(e, t, i), n = Math.min(e, t, i), a = 0, o = 0, l = (r + n) / 2;
  if (r === n)
    a = o = 0;
  else {
    let h = r - n;
    switch (o = l > 0.5 ? h / (2 - r - n) : h / (r + n), r) {
      case e:
        a = (t - i) / h + (t < i ? 6 : 0);
        break;
      case t:
        a = (i - e) / h + 2;
        break;
      case i:
        a = (e - t) / h + 4;
    }
    a /= 6;
  }
  return { h: a, s: o, l };
}
function jl(s, e) {
  return s && { r: Math.max(0, Math.min(255, s.r + vi(s.r, e))), g: Math.max(0, Math.min(255, s.g + vi(s.g, e))), b: Math.max(0, Math.min(255, s.b + vi(s.b, e))), a: s.a };
}
function vi(s, e) {
  let t = e > 0 ? 255 - s : s;
  return Math.round(t * e);
}
function Nl(s, e) {
  if (s) {
    let t = vi(Math.min(Math.max(s.r, s.g, s.b), 230), e);
    return { r: Math.max(0, Math.min(255, Math.round(s.r + t))), g: Math.max(0, Math.min(255, Math.round(s.g + t))), b: Math.max(0, Math.min(255, Math.round(s.b + t))), a: s.a };
  }
  return s;
}
function wr(s) {
  return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 >= 128;
}
function Hl(s, e) {
  if (s === void 0 || e == 1)
    return s;
  let t = Tn(s);
  return t.s = e, An(t);
}
function zl(s, e = { r: 255, g: 255, b: 255 }, t = { r: 255, g: 255, b: 255 }) {
  let i = e, r = t;
  return wr(t) && (i = t, r = e), wr(s) ? r : i;
}
function Vl(s, e) {
  return s || (s = []), [...s, ...e].filter((t, i, r) => r.indexOf(t) === i);
}
function vc(s, e) {
  return !!e && s.left == e.left && s.right == e.right && s.top == e.top && s.bottom == e.bottom;
}
function In(s) {
  return s[0] === "#" && (s = s.substr(1)), s.length == 3 && (s = s[0].repeat(2) + s[1].repeat(2) + s[2].repeat(2)), parseInt(s, 16);
}
function Wl(s) {
  let e = (s = s.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (e)
    e.push("1");
  else if (e = s.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !e)
    return 0;
  let t = "";
  for (let i = 1; i <= 3; i++) {
    let r = parseInt(e[i]).toString(16);
    r.length == 1 && (r = "0" + r), t += r;
  }
  return In(t);
}
function At(s) {
  return I.fromAny(s);
}
class I {
  constructor(e) {
    Object.defineProperty(this, "_hex", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._hex = 0 | e;
  }
  get hex() {
    return this._hex;
  }
  get r() {
    return this._hex >>> 16;
  }
  get g() {
    return this._hex >> 8 & 255;
  }
  get b() {
    return 255 & this._hex;
  }
  toCSS(e = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + e + ")";
  }
  toCSSHex() {
    return "#" + Q(this.r.toString(16), 2) + Q(this.g.toString(16), 2) + Q(this.b.toString(16), 2);
  }
  toHSL(e = 1) {
    return Tn({ r: this.r, g: this.g, b: this.b, a: e });
  }
  static fromHSL(e, t, i) {
    const r = An({ h: e, s: t, l: i });
    return this.fromRGB(r.r, r.g, r.b);
  }
  toString() {
    return this.toCSSHex();
  }
  static fromHex(e) {
    return new I(e);
  }
  static fromRGB(e, t, i) {
    return new I((0 | i) + (t << 8) + (e << 16));
  }
  static fromString(e) {
    return new I(In(e));
  }
  static fromCSS(e) {
    return new I(Wl(e));
  }
  static fromAny(e) {
    if (St(e)) {
      if (e[0] == "#")
        return I.fromString(e);
      if (e.substr(0, 3) == "rgb")
        return I.fromCSS(e);
    } else {
      if (F(e))
        return I.fromHex(e);
      if (e instanceof I)
        return I.fromHex(e.hex);
    }
    throw new Error("Unknown color syntax: " + e);
  }
  static alternative(e, t, i) {
    const r = zl({ r: e.r, g: e.g, b: e.b }, t ? { r: t.r, g: t.g, b: t.b } : void 0, i ? { r: i.r, g: i.g, b: i.b } : void 0);
    return this.fromRGB(r.r, r.g, r.b);
  }
  static interpolate(e, t, i, r = "rgb") {
    if (r == "hsl") {
      const n = t.toHSL(), a = i.toHSL();
      return I.fromHSL(Ke(e, n.h, a.h), Ke(e, n.s, a.s), Ke(e, n.l, a.l));
    }
    return I.fromRGB(Ke(e, t.r, i.r), Ke(e, t.g, i.g), Ke(e, t.b, i.b));
  }
  static lighten(e, t) {
    const i = jl({ r: e.r, g: e.g, b: e.b }, t);
    return I.fromRGB(i.r, i.g, i.b);
  }
  static brighten(e, t) {
    const i = Nl({ r: e.r, g: e.g, b: e.b }, t);
    return I.fromRGB(i.r, i.g, i.b);
  }
  static saturate(e, t) {
    const i = Hl({ r: e.r, g: e.g, b: e.b }, t);
    return I.fromRGB(i.r, i.g, i.b);
  }
}
function xr(s) {
  return mi(this, void 0, void 0, function* () {
    if (s !== void 0) {
      const e = [];
      q(s, (t, i) => {
        e.push(i.waitForStop());
      }), yield Promise.all(e);
    }
  });
}
function Ke(s, e, t) {
  return e + s * (t - e);
}
function Ul(s, e, t) {
  return s >= 1 ? t : e;
}
function Yl(s, e, t) {
  return new W(Ke(s, e.percent, t.percent));
}
function ql(s, e, t) {
  return I.interpolate(s, e, t);
}
function Gl(s, e) {
  return typeof s == "number" && typeof e == "number" ? Ke : s instanceof W && e instanceof W ? Yl : s instanceof I && e instanceof I ? ql : Ul;
}
const On = Math.PI, Fn = On / 180, Kt = 180 / On;
function wc(s, e, t) {
  if (!F(e) || e <= 0) {
    let i = Math.round(s);
    return t && i - s == 0.5 && i--, i;
  }
  {
    let i = Math.pow(10, e);
    return Math.round(s * i) / i;
  }
}
function xc(s, e) {
  if (!F(e) || e <= 0)
    return Math.ceil(s);
  {
    let t = Math.pow(10, e);
    return Math.ceil(s * t) / t;
  }
}
function ve(s, e, t) {
  return Math.min(Math.max(s, e), t);
}
function ks(s) {
  return Math.sin(Fn * s);
}
function Cs(s) {
  return Math.cos(Fn * s);
}
function Kl(s) {
  return (s %= 360) < 0 && (s += 360), s;
}
function Xl(s, e, t, i, r) {
  let n = Number.MAX_VALUE, a = Number.MAX_VALUE, o = -Number.MAX_VALUE, l = -Number.MAX_VALUE, h = [];
  h.push(as(r, t)), h.push(as(r, i));
  let f = Math.min(90 * Math.floor(t / 90), 90 * Math.floor(i / 90)), c = Math.max(90 * Math.ceil(t / 90), 90 * Math.ceil(i / 90));
  for (let p = f; p <= c; p += 90)
    p >= t && p <= i && h.push(as(r, p));
  for (let p = 0; p < h.length; p++) {
    let d = h[p];
    d.x < n && (n = d.x), d.y < a && (a = d.y), d.x > o && (o = d.x), d.y > l && (l = d.y);
  }
  return { left: s + n, top: e + a, right: s + o, bottom: e + l };
}
function as(s, e) {
  return { x: s * Cs(e), y: s * ks(e) };
}
function Mc(s) {
  const e = s.length;
  if (e > 0) {
    let t = s[0], i = t.left, r = t.top, n = t.right, a = t.bottom;
    if (e > 1)
      for (let o = 1; o < e; o++)
        t = s[o], i = Math.min(t.left, i), n = Math.max(t.right, n), r = Math.min(t.top, r), a = Math.max(t.bottom, a);
    return { left: i, right: n, top: r, bottom: a };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function Mr(s) {
  return s;
}
function Vt(s) {
  return s * s * s;
}
function ui(s) {
  return function(e) {
    return 1 - s(1 - e);
  };
}
class Ql {
  constructor(e, t) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_userSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = e, this._settings = t, q(t, (i) => {
      this._userSettings[i] = !0;
    });
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  setRaw(e, t) {
    this._settings[e] = t;
  }
  set(e, t) {
    this._userSettings[e] = !0, this.setRaw(e, t);
  }
  remove(e) {
    delete this._userSettings[e], delete this._settings[e];
  }
  setAll(e) {
    ge(e).forEach((t) => {
      this.set(t, e[t]);
    });
  }
  _eachSetting(e) {
    q(this._settings, e);
  }
  apply() {
    const e = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, t = this._entity.states.lookup("default");
    this._eachSetting((i, r) => {
      e[i] || (e[i] = !0, this !== t && (i in t._settings || (t._settings[i] = this._entity.get(i))), this._entity.set(i, r));
    });
  }
  applyAnimate(e) {
    e == null && (e = this._settings.stateAnimationDuration), e == null && (e = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
    let t = this._settings.stateAnimationEasing;
    t == null && (t = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", Vt)));
    const i = this._entity.states.lookup("default"), r = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, n = {};
    return this._eachSetting((a, o) => {
      if (!r[a]) {
        r[a] = !0, this != i && (a in i._settings || (i._settings[a] = this._entity.get(a)));
        const l = this._entity.animate({ key: a, to: o, duration: e, easing: t });
        l && (n[a] = l);
      }
    }), n;
  }
}
class Jl {
  constructor(e) {
    Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._entity = e;
  }
  lookup(e) {
    return this._states[e];
  }
  create(e, t) {
    const i = this._states[e];
    if (i)
      return i.setAll(t), i;
    {
      const r = new Ql(this._entity, t);
      return this._states[e] = r, r;
    }
  }
  remove(e) {
    delete this._states[e];
  }
  apply(e) {
    const t = this._states[e];
    t && t.apply(), this._entity._applyState(e);
  }
  applyAnimate(e, t) {
    let i;
    const r = this._states[e];
    return r && (i = r.applyAnimate(t)), this._entity._applyStateAnimated(e, t), i;
  }
}
class Zl {
  constructor() {
    Object.defineProperty(this, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.3.12" }), Object.defineProperty(this, "licenses", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "entitiesById", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "rootElements", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
}
const Ee = new Zl();
function eh(s) {
  Ee.licenses.push(s);
}
function pt(s, e) {
  return s === e ? 0 : s < e ? -1 : 1;
}
function Dn(s, e, t) {
  const i = s.length, r = e.length, n = Math.min(i, r);
  for (let a = 0; a < n; ++a) {
    const o = t(s[a], e[a]);
    if (o !== 0)
      return o;
  }
  return pt(i, r);
}
function Pc(s, e) {
  return s === e ? 0 : s < e ? -1 : 1;
}
let th = class {
  constructor(e) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = e;
  }
  add(e, t) {
    let i = this._callbacks[e];
    return i === void 0 && (i = this._callbacks[e] = []), i.push(t), this._entity._markDirtyKey(e), new re(() => {
      Pe(i, t) && this._entity._markDirtyKey(e);
    });
  }
  remove(e) {
    const t = this._callbacks[e];
    t !== void 0 && (delete this._callbacks[e], t.length !== 0 && this._entity._markDirtyKey(e));
  }
  enable(e) {
    this._disabled[e] && (delete this._disabled[e], this._entity._markDirtyKey(e));
  }
  disable(e) {
    this._disabled[e] || (this._disabled[e] = !0, this._entity._markDirtyKey(e));
  }
  fold(e, t) {
    if (!this._disabled[e]) {
      const i = this._callbacks[e];
      if (i !== void 0)
        for (let r = 0, n = i.length; r < n; ++r)
          t = i[r](t, this._entity, e);
    }
    return t;
  }
}, pi = class {
  constructor(e, t, i, r, n, a, o) {
    Object.defineProperty(this, "_animation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_from", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_to", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_duration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_easing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_loops", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_interpolate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_oldTime", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_time", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_stopped", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_playing", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new Bt() }), this._animation = e, this._from = t, this._to = i, this._duration = r, this._easing = n, this._loops = a, this._interpolate = Gl(t, i), this._oldTime = o;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    this._stopped || (this._stopped = !0, this._playing = !1, this.events.isEnabled("stopped") && this.events.dispatch("stopped", { type: "stopped", target: this }));
  }
  pause() {
    this._playing = !1, this._oldTime = null;
  }
  play() {
    this._stopped || this._playing || (this._playing = !0, this._animation._startAnimation());
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((e, t) => {
      if (this._stopped)
        e();
      else {
        const i = () => {
          r.dispose(), e();
        }, r = this.events.on("stopped", i);
      }
    });
  }
  _checkEnded() {
    return !(this._loops > 1) || (--this._loops, !1);
  }
  _run(e) {
    this._oldTime !== null && (this._time += e - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = e;
  }
  _reset(e) {
    this._oldTime = e, this._time = 0;
  }
  _value(e) {
    return this._interpolate(this._easing(e), this._from, this._to);
  }
}, ih = 0, sh = class {
  constructor(e) {
    Object.defineProperty(this, "uid", { enumerable: !0, configurable: !0, writable: !0, value: ++ih }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_userProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._settings = e;
  }
  _checkDirty() {
    ge(this._settings).forEach((e) => {
      this._userProperties[e] = !0, this._markDirtyKey(e);
    });
  }
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(e) {
    if (this.isDisposed())
      return !1;
    {
      let t = !1;
      return q(this._animatingSettings, (i, r) => {
        if (r._stopped)
          this._stopAnimation(i);
        else if (r._playing) {
          r._run(e);
          const n = r.percentage;
          n >= 1 ? r._checkEnded() ? this.set(i, r._value(1)) : (t = !0, r._reset(e), this._set(i, r._value(1))) : (t = !0, this._set(i, r._value(n)));
        }
      }), q(this._animatingPrivateSettings, (i, r) => {
        if (r._stopped)
          this._stopAnimationPrivate(i);
        else if (r._playing) {
          r._run(e);
          const n = r.percentage;
          n >= 1 ? r._checkEnded() ? this.setPrivate(i, r._value(1)) : (t = !0, r._reset(e), this._setPrivate(i, r._value(1))) : (t = !0, this._setPrivate(i, r._value(n)));
        }
      }), t;
    }
  }
  _markDirtyKey(e) {
    this.markDirty();
  }
  _markDirtyPrivateKey(e) {
    this.markDirty();
  }
  on(e, t) {
    let i = this._settingEvents[e];
    return i === void 0 && (i = this._settingEvents[e] = []), i.push(t), new re(() => {
      Pe(i, t), i.length === 0 && delete this._settingEvents[e];
    });
  }
  onPrivate(e, t) {
    let i = this._privateSettingEvents[e];
    return i === void 0 && (i = this._privateSettingEvents[e] = []), i.push(t), new re(() => {
      Pe(i, t), i.length === 0 && delete this._privateSettingEvents[e];
    });
  }
  getRaw(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  get(e, t) {
    return this.getRaw(e, t);
  }
  _sendKeyEvent(e, t) {
    const i = this._settingEvents[e];
    i !== void 0 && k(i, (r) => {
      r(t, this, e);
    });
  }
  _sendPrivateKeyEvent(e, t) {
    const i = this._privateSettingEvents[e];
    i !== void 0 && k(i, (r) => {
      r(t, this, e);
    });
  }
  _setRaw(e, t, i) {
    this._prevSettings[e] = t, this._sendKeyEvent(e, i);
  }
  setRaw(e, t) {
    const i = this._settings[e];
    this._settings[e] = t, i !== t && this._setRaw(e, i, t);
  }
  _set(e, t) {
    const i = this._settings[e];
    this._settings[e] = t, i !== t && (this._setRaw(e, i, t), this._markDirtyKey(e));
  }
  _stopAnimation(e) {
    const t = this._animatingSettings[e];
    t && (delete this._animatingSettings[e], t.stop());
  }
  set(e, t) {
    return this._set(e, t), this._stopAnimation(e), t;
  }
  remove(e) {
    e in this._settings && (this._prevSettings[e] = this._settings[e], delete this._settings[e], this._sendKeyEvent(e, void 0), this._markDirtyKey(e)), this._stopAnimation(e);
  }
  removeAll() {
    k(ge(this._settings), (e) => {
      this.remove(e);
    });
  }
  getPrivate(e, t) {
    const i = this._privateSettings[e];
    return i !== void 0 ? i : t;
  }
  _setPrivateRaw(e, t, i) {
    this._prevPrivateSettings[e] = t, this._sendPrivateKeyEvent(e, i);
  }
  setPrivateRaw(e, t) {
    const i = this._privateSettings[e];
    this._privateSettings[e] = t, i !== t && this._setPrivateRaw(e, i, t);
  }
  _setPrivate(e, t) {
    const i = this._privateSettings[e];
    this._privateSettings[e] = t, i !== t && (this._setPrivateRaw(e, i, t), this._markDirtyPrivateKey(e));
  }
  _stopAnimationPrivate(e) {
    const t = this._animatingPrivateSettings[e];
    t && (t.stop(), delete this._animatingPrivateSettings[e]);
  }
  setPrivate(e, t) {
    return this._setPrivate(e, t), this._stopAnimationPrivate(e), t;
  }
  removePrivate(e) {
    e in this._privateSettings && (this._prevPrivateSettings[e] = this._privateSettings[e], delete this._privateSettings[e], this._markDirtyPrivateKey(e)), this._stopAnimationPrivate(e);
  }
  setAll(e) {
    q(e, (t, i) => {
      this.set(t, i);
    });
  }
  animate(e) {
    const t = e.key, i = e.to, r = e.duration || 0, n = e.loops || 1, a = e.from === void 0 ? this.get(t) : e.from, o = e.easing === void 0 ? Mr : e.easing;
    if (r === 0)
      this.set(t, i);
    else {
      if (a !== void 0 && a !== i) {
        this.set(t, a);
        const h = this._animatingSettings[t] = new pi(this, a, i, r, o, n, this._animationTime());
        return this._startAnimation(), h;
      }
      this.set(t, i);
    }
    const l = new pi(this, a, i, r, o, n, null);
    return l.stop(), l;
  }
  animatePrivate(e) {
    const t = e.key, i = e.to, r = e.duration || 0, n = e.loops || 1, a = e.from === void 0 ? this.getPrivate(t) : e.from, o = e.easing === void 0 ? Mr : e.easing;
    if (r === 0)
      this.setPrivate(t, i);
    else {
      if (a !== void 0 && a !== i) {
        this.setPrivate(t, a);
        const h = this._animatingPrivateSettings[t] = new pi(this, a, i, r, o, n, this._animationTime());
        return this._startAnimation(), h;
      }
      this.setPrivate(t, i);
    }
    const l = new pi(this, a, i, r, o, n, null);
    return l.stop(), l;
  }
  _dispose() {
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}, me = class extends sh {
  constructor(e, t, i, r = []) {
    if (super(t), Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_user_id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new Jl(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new th(this) }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: this._createEvents() }), Object.defineProperty(this, "_userPrivateProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPrivate", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templates", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_internalTemplates", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_defaultThemes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_templateDisposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_runSetup", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposerProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), !i)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._root = e, this._internalTemplates = r, t.id && this._registerId(t.id);
  }
  static new(e, t, i) {
    const r = new this(e, t, !0);
    return r._template = i, r._afterNew(), r;
  }
  static _new(e, t, i = []) {
    const r = new this(e, t, !0, i);
    return r._afterNew(), r;
  }
  _afterNew() {
    this._checkDirty();
    let e = !1;
    const t = this._template;
    t && (e = !0, t._setObjectTemplate(this)), k(this._internalTemplates, (i) => {
      e = !0, i._setObjectTemplate(this);
    }), e && this._applyTemplates(!1), this.states.create("default", {}), this._setDefaults();
  }
  _afterNewApplyThemes() {
    this._checkDirty();
    const e = this._template;
    e && e._setObjectTemplate(this), k(this._internalTemplates, (t) => {
      t._setObjectTemplate(this);
    }), this.states.create("default", {}), this._setDefaults(), this._applyThemes();
  }
  _createEvents() {
    return new Bt();
  }
  get classNames() {
    return this.constructor.classNames;
  }
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefault(e, t) {
    e in this._settings || super.set(e, t);
  }
  _setRawDefault(e, t) {
    e in this._settings || super.setRaw(e, t);
  }
  _clearDirty() {
    ge(this._dirty).forEach((e) => {
      this._dirty[e] = !1;
    }), ge(this._dirtyPrivate).forEach((e) => {
      this._dirtyPrivate[e] = !1;
    });
  }
  isDirty(e) {
    return !!this._dirty[e];
  }
  isPrivateDirty(e) {
    return !!this._dirtyPrivate[e];
  }
  _markDirtyKey(e) {
    this._dirty[e] = !0, super._markDirtyKey(e);
  }
  _markDirtyPrivateKey(e) {
    this._dirtyPrivate[e] = !0, super._markDirtyKey(e);
  }
  isType(e) {
    return this.classNames.indexOf(e) !== -1;
  }
  _pushPropertyDisposer(e, t) {
    let i = this._disposerProperties[e];
    return i === void 0 && (i = this._disposerProperties[e] = []), i.push(t), t;
  }
  _disposeProperty(e) {
    const t = this._disposerProperties[e];
    t !== void 0 && (k(t, (i) => {
      i.dispose();
    }), delete this._disposerProperties[e]);
  }
  set template(e) {
    const t = this._template;
    t !== e && (this._template = e, t && t._removeObjectTemplate(this), e && e._setObjectTemplate(this), this._applyTemplates());
  }
  get template() {
    return this._template;
  }
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(e) {
  }
  _applyStateAnimated(e, t) {
  }
  get(e, t) {
    const i = this.adapters.fold(e, this._settings[e]);
    return i !== void 0 ? i : t;
  }
  isUserSetting(e) {
    return this._userProperties[e] || !1;
  }
  set(e, t) {
    return this._userProperties[e] = !0, super.set(e, t);
  }
  setRaw(e, t) {
    this._userProperties[e] = !0, super.setRaw(e, t);
  }
  _setSoft(e, t) {
    return this._userProperties[e] ? t : super.set(e, t);
  }
  remove(e) {
    delete this._userProperties[e], this._removeTemplateProperty(e);
  }
  setPrivate(e, t) {
    return this._userPrivateProperties[e] = !0, super.setPrivate(e, t);
  }
  setPrivateRaw(e, t) {
    this._userPrivateProperties[e] = !0, super.setPrivateRaw(e, t);
  }
  removePrivate(e) {
    delete this._userPrivateProperties[e], this._removeTemplatePrivateProperty(e);
  }
  _setTemplateProperty(e, t, i) {
    this._userProperties[t] || e === this._findTemplateByKey(t) && super.set(t, i);
  }
  _setTemplatePrivateProperty(e, t, i) {
    this._userPrivateProperties[t] || e === this._findTemplateByPrivateKey(t) && super.setPrivate(t, i);
  }
  _removeTemplateProperty(e) {
    if (!this._userProperties[e]) {
      const t = this._findTemplateByKey(e);
      t ? super.set(e, t._settings[e]) : super.remove(e);
    }
  }
  _removeTemplatePrivateProperty(e) {
    if (!this._userPrivateProperties[e]) {
      const t = this._findTemplateByPrivateKey(e);
      t ? super.setPrivate(e, t._privateSettings[e]) : super.removePrivate(e);
    }
  }
  _walkParents(e) {
    e(this._root._rootContainer), e(this);
  }
  _applyStateByKey(e) {
    const t = this.states.create(e, {}), i = {};
    this._eachTemplate((r) => {
      const n = r.states.lookup(e);
      n && n._apply(t, i);
    }), q(t._settings, (r) => {
      i[r] || t._userSettings[r] || t.remove(r);
    });
  }
  _applyTemplate(e, t) {
    this._templateDisposers.push(e._apply(this, t)), q(e._settings, (i, r) => {
      t.settings[i] || this._userProperties[i] || (t.settings[i] = !0, super.set(i, r));
    }), q(e._privateSettings, (i, r) => {
      t.privateSettings[i] || this._userPrivateProperties[i] || (t.privateSettings[i] = !0, super.setPrivate(i, r));
    }), this._runSetup && e.setup && (this._runSetup = !1, e.setup(this));
  }
  _findStaticTemplate(e) {
    if (this._template && e(this._template))
      return this._template;
  }
  _eachTemplate(e) {
    this._findStaticTemplate((t) => (e(t), !1)), Gt(this._internalTemplates, e), k(this._templates, e);
  }
  _applyTemplates(e = !0) {
    e && this._disposeTemplates();
    const t = { settings: {}, privateSettings: {}, states: {} };
    this._eachTemplate((i) => {
      this._applyTemplate(i, t);
    }), e && (q(this._settings, (i) => {
      this._userProperties[i] || t.settings[i] || super.remove(i);
    }), q(this._privateSettings, (i) => {
      this._userPrivateProperties[i] || t.privateSettings[i] || super.removePrivate(i);
    }));
  }
  _findTemplate(e) {
    const t = this._findStaticTemplate(e);
    if (t === void 0) {
      const i = gl(this._internalTemplates, e);
      return i === void 0 ? pl(this._templates, e) : i;
    }
    return t;
  }
  _findTemplateByKey(e) {
    return this._findTemplate((t) => e in t._settings);
  }
  _findTemplateByPrivateKey(e) {
    return this._findTemplate((t) => e in t._privateSettings);
  }
  _disposeTemplates() {
    k(this._templateDisposers, (e) => {
      e.dispose();
    }), this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    k(this._templates, (e) => {
      e._removeObjectTemplate(this);
    }), this._templates.length = 0;
  }
  _applyThemes() {
    let e = !1;
    const t = [];
    let i = [];
    const r = /* @__PURE__ */ new Set(), n = this.get("themeTagsSelf");
    return n && k(n, (a) => {
      r.add(a);
    }), this._walkParents((a) => {
      a === this._root._rootContainer && (e = !0), a._defaultThemes.length > 0 && t.push(a._defaultThemes);
      const o = a.get("themes");
      o && i.push(o);
      const l = a.get("themeTags");
      l && k(l, (h) => {
        r.add(h);
      });
    }), i = t.concat(i), this._removeTemplates(), e && Gt(this.classNames, (a) => {
      const o = [];
      k(i, (l) => {
        k(l, (h) => {
          const f = h._lookupRules(a);
          f && Gt(f, (c) => {
            if (c.tags.every((p) => r.has(p))) {
              const p = ml(o, (d) => {
                const _ = pt(c.tags.length, d.tags.length);
                return _ === 0 ? Dn(c.tags, d.tags, pt) : _;
              });
              o.splice(p.index, 0, c);
            }
          });
        });
      }), k(o, (l) => {
        this._templates.push(l.template), l.template._setObjectTemplate(this);
      });
    }), this._applyTemplates(), e && (this._runSetup = !1), e;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const e = this.get("id");
      e && this._registerId(e);
      const t = this._prevSettings.id;
      t && delete Ee.entitiesById[t];
    }
  }
  _registerId(e) {
    if (Ee.entitiesById[e] && Ee.entitiesById[e] !== this)
      throw new Error('An entity with id "' + e + '" already exists.');
    Ee.entitiesById[e] = this;
  }
  _afterChanged() {
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _dispose() {
    super._dispose();
    const e = this._template;
    e && e._removeObjectTemplate(this), k(this._internalTemplates, (i) => {
      i._removeObjectTemplate(this);
    }), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((i) => {
      i.dispose();
    }), q(this._disposerProperties, (i, r) => {
      k(r, (n) => {
        n.dispose();
      });
    });
    const t = this.get("id");
    t && delete Ee.entitiesById[t];
  }
  setTimeout(e, t) {
    const i = setTimeout(() => {
      this.removeDispose(r), e();
    }, t), r = new re(() => {
      clearTimeout(i);
    });
    return this._disposers.push(r), r;
  }
  removeDispose(e) {
    if (!this.isDisposed()) {
      let t = Oi(this._disposers, e);
      t > -1 && this._disposers.splice(t, 1);
    }
    e.dispose();
  }
  hasTag(e) {
    return Oi(this.get("themeTags", []), e) !== -1;
  }
  addTag(e) {
    if (!this.hasTag(e)) {
      const t = this.get("themeTags", []);
      t.push(e), this.set("themeTags", t);
    }
  }
  removeTag(e) {
    if (this.hasTag(e)) {
      const t = this.get("themeTags", []);
      Xe(t, e), this.set("themeTags", t);
    }
  }
  _t(e, t, ...i) {
    return this._root.language.translate(e, t, ...i);
  }
  get root() {
    return this._root;
  }
};
Object.defineProperty(me, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Entity" }), Object.defineProperty(me, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: ["Entity"] });
let rh = class {
  constructor(e, t, i) {
    Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._name = e, this._template = t, this._settings = i;
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  set(e, t) {
    this._settings[e] = t, this._template._stateChanged(this._name);
  }
  remove(e) {
    delete this._settings[e], this._template._stateChanged(this._name);
  }
  setAll(e) {
    ge(e).forEach((t) => {
      this._settings[t] = e[t];
    }), this._template._stateChanged(this._name);
  }
  _apply(e, t) {
    q(this._settings, (i, r) => {
      t[i] || e._userSettings[i] || (t[i] = !0, e.setRaw(i, r));
    });
  }
}, nh = class {
  constructor(e) {
    Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._template = e;
  }
  lookup(e) {
    return this._states[e];
  }
  create(e, t) {
    const i = this._states[e];
    if (i)
      return i.setAll(t), i;
    {
      const r = new rh(e, this._template, t);
      return this._states[e] = r, this._template._stateChanged(e), r;
    }
  }
  remove(e) {
    delete this._states[e], this._template._stateChanged(e);
  }
  _apply(e, t) {
    q(this._states, (i, r) => {
      let n = t.states[i];
      n == null && (n = t.states[i] = {});
      const a = e.states.create(i, {});
      r._apply(a, n);
    });
  }
}, ah = class {
  constructor() {
    Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  add(e, t) {
    let i = this._callbacks[e];
    return i === void 0 && (i = this._callbacks[e] = []), i.push(t), new re(() => {
      Pe(i, t), i.length === 0 && delete this._callbacks[e];
    });
  }
  remove(e) {
    this._callbacks[e] !== void 0 && delete this._callbacks[e];
  }
  _apply(e) {
    const t = [];
    return q(this._callbacks, (i, r) => {
      k(r, (n) => {
        t.push(e.adapters.add(i, n));
      });
    }), new xe(t);
  }
}, As = class En {
  constructor(e, t) {
    if (Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entities", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new nh(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new ah() }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new Bt() }), Object.defineProperty(this, "setup", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !t)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._settings = e;
  }
  static new(e) {
    return new En(e, !0);
  }
  get entities() {
    return this._entities;
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  setRaw(e, t) {
    this._settings[e] = t;
  }
  set(e, t) {
    this._settings[e] !== t && (this.setRaw(e, t), this._entities.forEach((i) => {
      i._setTemplateProperty(this, e, t);
    }));
  }
  remove(e) {
    e in this._settings && (delete this._settings[e], this._entities.forEach((t) => {
      t._removeTemplateProperty(e);
    }));
  }
  removeAll() {
    q(this._settings, (e, t) => {
      this.remove(e);
    });
  }
  getPrivate(e, t) {
    const i = this._privateSettings[e];
    return i !== void 0 ? i : t;
  }
  setPrivateRaw(e, t) {
    return this._privateSettings[e] = t, t;
  }
  setPrivate(e, t) {
    return this._privateSettings[e] !== t && (this.setPrivateRaw(e, t), this._entities.forEach((i) => {
      i._setTemplatePrivateProperty(this, e, t);
    })), t;
  }
  removePrivate(e) {
    e in this._privateSettings && (delete this._privateSettings[e], this._entities.forEach((t) => {
      t._removeTemplatePrivateProperty(e);
    }));
  }
  setAll(e) {
    q(e, (t, i) => {
      this.set(t, i);
    });
  }
  on(e, t) {
    let i = this._settingEvents[e];
    return i === void 0 && (i = this._settingEvents[e] = []), i.push(t), new re(() => {
      Pe(i, t), i.length === 0 && delete this._settingEvents[e];
    });
  }
  onPrivate(e, t) {
    let i = this._privateSettingEvents[e];
    return i === void 0 && (i = this._privateSettingEvents[e] = []), i.push(t), new re(() => {
      Pe(i, t), i.length === 0 && delete this._privateSettingEvents[e];
    });
  }
  _apply(e, t) {
    const i = [];
    return q(this._settingEvents, (r, n) => {
      k(n, (a) => {
        i.push(e.on(r, a));
      });
    }), q(this._privateSettingEvents, (r, n) => {
      k(n, (a) => {
        i.push(e.onPrivate(r, a));
      });
    }), this.states._apply(e, t), i.push(this.adapters._apply(e)), i.push(e.events.copyFrom(this.events)), new xe(i);
  }
  _setObjectTemplate(e) {
    this._entities.push(e);
  }
  _removeObjectTemplate(e) {
    Xe(this._entities, e);
  }
  _stateChanged(e) {
    this._entities.forEach((t) => {
      t._applyStateByKey(e);
    });
  }
}, Sn = class $n extends Bt {
  constructor(e) {
    super(), Object.defineProperty(this, "_sprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rendererDisposers", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dispatchParents", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), this._sprite = e;
  }
  _makePointerEvent(e, t) {
    return { type: e, originalEvent: t.event, point: t.point, simulated: t.simulated, native: t.native, target: this._sprite };
  }
  _onRenderer(e, t) {
    this._sprite.set("interactive", !0), this._sprite._display.interactive = !0;
    let i = this._rendererDisposers[e];
    if (i === void 0) {
      const r = this._sprite._display.on(e, (n) => {
        t.call(this, n);
      });
      i = this._rendererDisposers[e] = new Mn(() => {
        delete this._rendererDisposers[e], r.dispose();
      });
    }
    return i.increment();
  }
  _on(e, t, i, r, n, a) {
    const o = super._on(e, t, i, r, n, a), l = $n.RENDERER_EVENTS[t];
    return l !== void 0 && (o.disposer = new xe([o.disposer, this._onRenderer(t, l)])), o;
  }
  stopParentDispatch() {
    this._dispatchParents = !1;
  }
  dispatchParents(e, t) {
    const i = this._dispatchParents;
    this._dispatchParents = !0;
    try {
      this.dispatch(e, t), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(e, t);
    } finally {
      this._dispatchParents = i;
    }
  }
};
Object.defineProperty(Sn, "RENDERER_EVENTS", { enumerable: !0, configurable: !0, writable: !0, value: { click: function(s) {
  this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", s)) && this.dispatch("click", this._makePointerEvent("click", s));
}, rightclick: function(s) {
  this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", s));
}, middleclick: function(s) {
  this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", s));
}, dblclick: function(s) {
  this.dispatchParents("dblclick", this._makePointerEvent("dblclick", s));
}, pointerover: function(s) {
  this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", s));
}, pointerout: function(s) {
  this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", s));
}, pointerdown: function(s) {
  this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", s));
}, pointerup: function(s) {
  this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", s));
}, globalpointerup: function(s) {
  this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", s));
}, globalpointermove: function(s) {
  this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", s));
}, wheel: function(s) {
  this.dispatchParents("wheel", { type: "wheel", target: this._sprite, originalEvent: s.event, point: s.point });
} } });
let Se = class extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dataItem", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templateField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_sizeDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDragging", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dragEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isHidden", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isShowing", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isHiding", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDown", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_downPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downPoints", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_toggleDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_hoverDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipMoveDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipPointerDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_statesHandled", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _afterNew() {
    this.setPrivateRaw("visible", !0), super._afterNew();
  }
  _markDirtyKey(e) {
    super._markDirtyKey(e), e != "x" && e != "y" && e != "dx" && e != "dy" || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition());
  }
  _markDirtyPrivateKey(e) {
    super._markDirtyPrivateKey(e), e != "x" && e != "y" || this.markDirtyPosition();
  }
  _removeTemplateField() {
    this._templateField && this._templateField._removeObjectTemplate(this);
  }
  _createEvents() {
    return new Sn(this);
  }
  _processTemplateField() {
    let e;
    const t = this.get("templateField");
    if (t) {
      const i = this.dataItem;
      if (i) {
        const r = i.dataContext;
        r && (e = r[t], e instanceof As || !e || (e = As.new(e)));
      }
    }
    this._templateField !== e && (this._removeTemplateField(), this._templateField = e, e && e._setObjectTemplate(this), this._applyTemplates());
  }
  _setDataItem(e) {
    const t = this._dataItem;
    this._dataItem = e, this._processTemplateField();
    const i = "dataitemchanged";
    e != t && this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this, oldDataItem: t, newDataItem: e });
  }
  set dataItem(e) {
    this._setDataItem(e);
  }
  get dataItem() {
    if (this._dataItem)
      return this._dataItem;
    {
      let e = this._parent;
      for (; e; ) {
        if (e._dataItem)
          return e._dataItem;
        e = e._parent;
      }
    }
  }
  _addPercentageSizeChildren() {
    let e = this.parent;
    e && (this.get("width") instanceof W || this.get("height") instanceof W ? ri(e._percentageSizeChildren, this) : Pe(e._percentageSizeChildren, this));
  }
  _addPercentagePositionChildren() {
    let e = this.parent;
    e && (this.get("x") instanceof W || this.get("y") instanceof W ? ri(e._percentagePositionChildren, this) : Pe(e._percentagePositionChildren, this));
  }
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const e = this._localBounds;
    if (e) {
      const t = this.get("centerX");
      t != null && (this._display.pivot.x = e.left + Ye(t, e.right - e.left));
      const i = this.get("centerY");
      i != null && (this._display.pivot.y = e.top + Ye(i, e.bottom - e.top));
    }
  }
  _beforeChanged() {
    if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip")) {
      const e = this._prevSettings.tooltip;
      e && e.dispose();
    }
    if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition")) {
      const e = this._tooltipMoveDp;
      e && (e.dispose(), this._tooltipMoveDp = void 0);
      const t = this._tooltipPointerDp;
      t && (t.dispose(), this._tooltipPointerDp = void 0), this.get("tooltipPosition") == "pointer" && (this._tooltipPointerDp = new xe([this.events.on("pointerover", () => {
        this._tooltipMoveDp = this.events.on("globalpointermove", (i) => {
          this.showTooltip(i.point);
        });
      }), this.events.on("pointerout", () => {
        const i = this._tooltipMoveDp;
        i && (i.dispose(), this._tooltipMoveDp = void 0);
      })]));
    }
  }
  _handleStates() {
    this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", !0)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !1)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", !1)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !0)), this.markDirtyAccessibility()), this._statesHandled = !0);
  }
  _changed() {
    super._changed();
    const e = this._display, t = this.events;
    if (this.isDirty("draggable")) {
      const i = this.get("draggable");
      i ? (this.set("interactive", !0), this._dragDp = new xe([t.on("pointerdown", (r) => {
        this.dragStart(r);
      }), t.on("globalpointermove", (r) => {
        this.dragMove(r);
      }), t.on("globalpointerup", (r) => {
        this.dragStop(r);
      })])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), e.cancelTouch = !!i;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const i = this.get("tooltipText"), r = this.get("tooltipHTML"), n = this.get("showTooltipOn", "hover");
      this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (i || r) && (n == "click" ? this._tooltipDp = new xe([t.on("click", () => {
        this.setTimeout(() => this.showTooltip(), 10);
      }), ie(document, "click", (a) => {
        this.hideTooltip();
      })]) : n == "always" || (this._tooltipDp = new xe([t.on("pointerover", () => {
        this.showTooltip();
      }), t.on("pointerout", () => {
        this.hideTooltip();
      })])));
    }
    if (this.isDirty("toggleKey")) {
      let i = this.get("toggleKey");
      i && i != "none" ? this._toggleDp = t.on("click", () => {
        this._isDragging || this.set(i, !this.get(i));
      }) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0);
    }
    if (this.isDirty("opacity") && (e.alpha = Math.max(0, this.get("opacity", 1))), this.isDirty("rotation") && (this.markDirtyBounds(), e.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), e.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? e.visible = !0 : (e.visible = !1, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds(), this._addPercentageSizeChildren();
      const i = this.parent;
      i && (this.isDirty("width") && this.get("width") instanceof W || this.isDirty("height") && this.get("height") instanceof W) && (i.markDirty(), i._prevWidth = 0), this._sizeDirty = !0;
    }
    if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && (this.markDirtyBounds(), this._sizeDirty = !0), this._sizeDirty && this._updateSize(), this.isDirty("wheelable")) {
      const i = this.get("wheelable");
      i && this.set("interactive", !0), e.wheelable = !!i;
    }
    if ((this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (e.filter = this.get("filter")), this.isDirty("cursorOverStyle") && (e.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new xe([t.on("focus", () => {
      this.showTooltip();
    }), t.on("blur", () => {
      this.hideTooltip();
    })]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility()), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (e.exportable = this.get("exportable")), this.isDirty("interactive")) {
      const i = this.events;
      this.get("interactive") ? this._hoverDp = new xe([i.on("click", (r) => {
        br(r.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout(() => {
          this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", !0), this.events.dispatch("pointerover", { type: "pointerover", target: r.target, originalEvent: r.originalEvent, point: r.point, simulated: r.simulated });
        }, 10));
      }), i.on("globalpointerup", (r) => {
        br(r.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", !1), this.events.dispatch("pointerout", { type: "pointerout", target: r.target, originalEvent: r.originalEvent, point: r.point, simulated: r.simulated })), this._isDown && this._handleUp(r);
      }), i.on("pointerover", () => {
        this._handleOver();
      }), i.on("pointerout", () => {
        this._handleOut();
      }), i.on("pointerdown", (r) => {
        this._handleDown(r);
      })]) : (this._display.interactive = !1, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0));
    }
    this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", !1)), this.get("showTooltipOn") == "always" && this._display.visible && this.showTooltip();
  }
  dragStart(e) {
    this._dragEvent = e, this.events.stopParentDispatch();
  }
  dragStop(e) {
    if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging) {
      this._isDragging = !1;
      const t = "dragstop";
      this.events.isEnabled(t) && this.events.dispatch(t, { type: t, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
    }
  }
  _handleOver() {
    this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleOut() {
    this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleUp(e) {
    if (!this.isHidden()) {
      this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
      const t = rs(e.originalEvent);
      delete this._downPoints[t], ge(this._downPoints).length == 0 && (this._isDown = !1);
    }
  }
  _hasMoved(e) {
    const t = rs(e.originalEvent), i = this._downPoints[t];
    if (i) {
      const r = Math.abs(i.x - e.point.x), n = Math.abs(i.y - e.point.y);
      return r > 5 || n > 5;
    }
    return !1;
  }
  _hasDown() {
    return ge(this._downPoints).length > 0;
  }
  _handleDown(e) {
    const t = this.parent;
    if (t && !this.get("draggable") && t._handleDown(e), this.get("interactive") && !this.isHidden()) {
      this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = { x: e.point.x, y: e.point.y }, this._isDown = !0;
      const i = rs(e.originalEvent);
      this._downPoints[i] = { x: e.point.x, y: e.point.y };
    }
  }
  dragMove(e) {
    let t = this._dragEvent;
    if (t) {
      if (t.simulated && !e.simulated)
        return !0;
      let i = 0, r = this.parent;
      for (; r != null; )
        i += r.get("rotation", 0), r = r.parent;
      let n = e.point.x - t.point.x, a = e.point.y - t.point.y;
      const o = this.events;
      if (t.simulated && !this._isDragging) {
        this._isDragging = !0, this._dragEvent = e, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        o.isEnabled(l) && o.dispatch(l, { type: l, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      }
      if (this._isDragging) {
        let l = this._dragPoint;
        this.set("x", l.x + n * Cs(i) + a * ks(i)), this.set("y", l.y + a * Cs(i) - n * ks(i));
        const h = "dragged";
        o.isEnabled(h) && o.dispatch(h, { type: h, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      } else if (Math.hypot(n, a) > 5) {
        this._isDragging = !0, this._dragEvent = e, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        o.isEnabled(l) && o.dispatch(l, { type: l, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  depth() {
    let e = this.parent, t = 0;
    for (; ; ) {
      if (!e)
        return t;
      ++t, e = e.parent;
    }
  }
  markDirtySize() {
    this._sizeDirty = !0, this.markDirty();
  }
  markDirtyBounds() {
    if (this.get("isMeasured")) {
      const e = this._display;
      this._root._addDirtyBounds(this), e.isMeasured = !0, e.invalidateBounds();
      const t = this.parent;
      t && this.get("position") != "absolute" && (t.get("width") == null || t.get("height") == null || t.get("layout")) && t.markDirtyBounds(), this.get("focusable") && this.isFocus() && this.markDirtyAccessibility();
    }
  }
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  markDirtyLayer() {
    this._display.markDirtyLayer(!0);
  }
  markDirty() {
    super.markDirty(), this.markDirtyLayer();
  }
  _updateBounds() {
    const e = this._adjustedLocalBounds;
    let t;
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), t = this._adjustedLocalBounds) : (t = { left: 0, right: 0, top: 0, bottom: 0 }, this._localBounds = t, this._adjustedLocalBounds = t), !e || e.left !== t.left || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom) {
      const i = "boundschanged";
      this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this }), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds());
    }
  }
  _fixMinBounds(e) {
    let t = this.get("minWidth", this.getPrivate("minWidth")), i = this.get("minHeight", this.getPrivate("minHeight"));
    F(t) && e.right - e.left < t && (e.right = e.left + t), F(i) && e.bottom - e.top < i && (e.bottom = e.top + i);
    let r = this.getPrivate("width"), n = this.getPrivate("height");
    F(r) && (r > 0 ? e.right = e.left + r : e.left = e.right + r), F(n) && (n > 0 ? e.bottom = e.top + n : e.top = e.bottom + n);
  }
  _removeParent(e) {
    e && (e.children.removeValue(this), Pe(e._percentageSizeChildren, this), Pe(e._percentagePositionChildren, this));
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = !1, this._statesHandled = !1;
  }
  hover() {
    this.showTooltip(), this._handleOver();
  }
  unhover() {
    this.hideTooltip(), this._handleOut();
  }
  showTooltip(e) {
    const t = this.getTooltip(), i = this.get("tooltipText"), r = this.get("tooltipHTML");
    if ((i || r) && t) {
      const n = this.get("tooltipPosition"), a = this.getPrivate("tooltipTarget", this);
      n != "fixed" && e || (this._display._setMatrix(), e = this.toGlobal(a._getTooltipPoint())), t.set("pointTo", e), t.set("tooltipTarget", a), t.get("x") || t.set("x", e.x), t.get("y") || t.set("y", e.y), i && t.label.set("text", i), r && t.label.set("html", r);
      const o = this.dataItem;
      if (o && t.label._setDataItem(o), this.get("showTooltipOn") == "always" && (e.x < 0 || e.x > this._root.width() || e.y < 0 || e.y > this._root.height()))
        return void this.hideTooltip();
      t.label.text.markDirtyText();
      const l = t.show();
      return this.setPrivateRaw("showingTooltip", !0), l;
    }
  }
  hideTooltip() {
    const e = this.getTooltip();
    if (e && e.get("tooltipTarget") == this.getPrivate("tooltipTarget", this)) {
      let t = e.get("keepTargetHover") && e.get("stateAnimationDuration", 0) == 0 ? 400 : void 0;
      const i = e.hide(t);
      return this.setPrivateRaw("showingTooltip", !1), i;
    }
  }
  _getTooltipPoint() {
    const e = this._localBounds;
    if (e) {
      let t = 0, i = 0;
      return this.get("isMeasured") ? (t = e.left + Ye(this.get("tooltipX", 0), e.right - e.left), i = e.top + Ye(this.get("tooltipY", 0), e.bottom - e.top)) : (t = Ye(this.get("tooltipX", 0), this.width()), i = Ye(this.get("tooltipY", 0), this.height())), { x: t, y: i };
    }
    return { x: 0, y: 0 };
  }
  getTooltip() {
    let e = this.get("tooltip");
    if (e)
      return e;
    {
      let t = this.parent;
      if (t)
        return t.getTooltip();
    }
  }
  _updatePosition() {
    const e = this.parent;
    let t = this.get("dx", 0), i = this.get("dy", 0), r = this.get("x"), n = this.getPrivate("x"), a = 0, o = 0;
    const l = this.get("position");
    r instanceof W && (r = e ? e.innerWidth() * r.value + e.get("paddingLeft", 0) : 0), F(r) ? a = r + t : n != null ? a = n : e && l == "relative" && (a = e.get("paddingLeft", 0) + t);
    let h = this.get("y"), f = this.getPrivate("y");
    h instanceof W && (h = e ? e.innerHeight() * h.value + e.get("paddingTop", 0) : 0), F(h) ? o = h + i : f != null ? o = f : e && l == "relative" && (o = e.get("paddingTop", 0) + i);
    const c = this._display;
    if (c.x != a || c.y != o) {
      c.invalidateBounds(), c.x = a, c.y = o;
      const p = "positionchanged";
      this.events.isEnabled(p) && this.events.dispatch(p, { type: p, target: this });
    }
    this.getPrivate("showingTooltip") && this.showTooltip();
  }
  x() {
    let e = this.get("x"), t = this.getPrivate("x");
    const i = this.parent;
    return i ? e instanceof W ? Ye(e, i.innerWidth()) + i.get("paddingLeft", 0) : F(e) ? e : t ?? i.get("paddingLeft", this._display.x) : this._display.x;
  }
  y() {
    let e = this.getPrivate("y");
    if (e != null)
      return e;
    let t = this.get("y");
    const i = this.parent;
    return i ? t instanceof W ? Ye(t, i.innerHeight()) + i.get("paddingTop", 0) : F(t) ? t : e ?? i.get("paddingTop", this._display.y) : this._display.y;
  }
  _dispose() {
    super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
    const e = this.get("tooltip");
    e && e.dispose(), this.markDirty();
  }
  adjustedLocalBounds() {
    return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds;
  }
  localBounds() {
    return this._localBounds;
  }
  bounds() {
    const e = this._adjustedLocalBounds, t = this.x(), i = this.y();
    return { left: e.left + t, right: e.right + t, top: e.top + i, bottom: e.bottom + i };
  }
  globalBounds() {
    const e = this.localBounds(), t = this.toGlobal({ x: e.left, y: e.top }), i = this.toGlobal({ x: e.right, y: e.top }), r = this.toGlobal({ x: e.right, y: e.bottom }), n = this.toGlobal({ x: e.left, y: e.bottom });
    return { left: Math.min(t.x, i.x, r.x, n.x), top: Math.min(t.y, i.y, r.y, n.y), right: Math.max(t.x, i.x, r.x, n.x), bottom: Math.max(t.y, i.y, r.y, n.y) };
  }
  _onShow(e) {
  }
  _onHide(e) {
  }
  appear(e, t) {
    return mi(this, void 0, void 0, function* () {
      return yield this.hide(0), t ? new Promise((i, r) => {
        this.setTimeout(() => {
          i(this.show(e));
        }, t);
      }) : this.show(e);
    });
  }
  show(e) {
    return mi(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = !1, this._isShowing = !0, this._isHiding = !1, this.states.lookup("default").get("visible") && this.set("visible", !0), this._onShow(e);
        const t = this.states.applyAnimate("default", e);
        yield xr(t), this._isShowing = !1;
      }
    });
  }
  hide(e) {
    return mi(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = !0, this._isShowing = !1;
        let t = this.states.lookup("hidden");
        t || (t = this.states.create("hidden", { opacity: 0, visible: !1 })), this._isHidden = !0, this._onHide(e);
        const i = this.states.applyAnimate("hidden", e);
        yield xr(i), this._isHiding = !1;
      }
    });
  }
  isHidden() {
    return this._isHidden;
  }
  isShowing() {
    return this._isShowing;
  }
  isHiding() {
    return this._isHiding;
  }
  isHover() {
    return this._display.hovering();
  }
  isFocus() {
    return this._root.focused(this);
  }
  isDragging() {
    return this._isDragging;
  }
  isVisible() {
    return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"));
  }
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  compositeOpacity() {
    const e = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * e : e;
  }
  width() {
    let e = this.get("width"), t = this.get("maxWidth", this.getPrivate("maxWidth")), i = this.get("minWidth", this.getPrivate("minWidth")), r = this.getPrivate("width"), n = 0;
    if (F(r))
      n = r;
    else if (e == null)
      this._adjustedLocalBounds && (n = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
    else if (e instanceof W) {
      const a = this.parent;
      n = a ? a.innerWidth() * e.value : this._root.width() * e.value;
    } else
      F(e) && (n = e);
    return F(i) && (n = Math.max(i, n)), F(t) && (n = Math.min(t, n)), n;
  }
  maxWidth() {
    let e = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (F(e))
      return e;
    {
      let i = this.get("width");
      if (F(i))
        return i;
    }
    const t = this.parent;
    return t ? t.innerWidth() : this._root.width();
  }
  maxHeight() {
    let e = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (F(e))
      return e;
    {
      let i = this.get("height");
      if (F(i))
        return i;
    }
    const t = this.parent;
    return t ? t.innerHeight() : this._root.height();
  }
  height() {
    let e = this.get("height"), t = this.get("maxHeight", this.getPrivate("maxHeight")), i = this.get("minHeight", this.getPrivate("minHeight")), r = this.getPrivate("height"), n = 0;
    if (F(r))
      n = r;
    else if (e == null)
      this._adjustedLocalBounds && (n = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
    else if (e instanceof W) {
      const a = this.parent;
      n = a ? a.innerHeight() * e.value : this._root.height() * e.value;
    } else
      F(e) && (n = e);
    return F(i) && (n = Math.max(i, n)), F(t) && (n = Math.min(t, n)), n;
  }
  _findStaticTemplate(e) {
    return this._templateField && e(this._templateField) ? this._templateField : super._findStaticTemplate(e);
  }
  _walkParents(e) {
    this._parent && this._walkParent(e);
  }
  _walkParent(e) {
    this._parent && this._parent._walkParent(e), e(this);
  }
  get parent() {
    return this._parent;
  }
  _setParent(e, t = !1) {
    const i = this._parent;
    e !== i && (this.markDirtyBounds(), e.markDirty(), this._parent = e, t && (this._removeParent(i), e && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes());
  }
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  toGlobal(e) {
    return this._display.toGlobal(e);
  }
  toLocal(e) {
    return this._display.toLocal(e);
  }
  _getDownPoint() {
    const e = this._getDownPointId();
    if (e)
      return this._downPoints[e];
  }
  _getDownPointId() {
    if (this._downPoints)
      return vl(this._downPoints, (e, t) => e > t ? 1 : e < t ? -1 : 0)[0];
  }
  toFront() {
    const e = this.parent;
    e && e.children.moveValue(this, e.children.length - 1);
  }
  toBack() {
    const e = this.parent;
    e && e.children.moveValue(this, 0);
  }
};
Object.defineProperty(Se, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Sprite" }), Object.defineProperty(Se, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: me.classNames.concat([Se.className]) });
let Xt = class extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_backgroundDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_pattern", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("color") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fill") || this.isDirty("fillOpacity")) && (this._clear = !0);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const e = this.get("repetition", ""), t = this.get("width", 100), i = this.get("height", 100), r = this.get("fill"), n = this.get("fillOpacity", 1);
      this._display.clear(), this._backgroundDisplay.clear(), r && n > 0 && (this._backgroundDisplay.beginFill(r, n), this._backgroundDisplay.drawRect(0, 0, t, i), this._backgroundDisplay.endFill()), this._display.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(this._display, this._backgroundDisplay, e, t, i);
    }
  }
};
Object.defineProperty(Xt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Pattern" }), Object.defineProperty(Xt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: me.classNames.concat([Xt.className]) });
let Qt = class extends Xt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _beforeChanged() {
    super._beforeChanged(), this._clear = !0, this.isDirty("src") && this._load();
  }
  _draw() {
    super._draw();
    const e = this._image;
    if (e) {
      const t = this.get("width", 100), i = this.get("height", 100), r = this.get("fit", "image");
      let n = 0, a = 0;
      r == "pattern" ? (n = t, a = i) : (n = e.width, a = e.height, r == "image" && (this.set("width", n), this.set("height", a)));
      let o = 0, l = 0;
      this.get("centered", !0) && (o = t / 2 - n / 2, l = i / 2 - a / 2), this._display.image(e, n, a, o, l);
    }
  }
  _load() {
    const e = this.get("src");
    if (e) {
      const t = new Image();
      t.src = e, t.decode().then(() => {
        this._image = t, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded", { type: "loaded", target: this });
      }).catch((i) => {
      });
    }
  }
};
var Di;
Object.defineProperty(Qt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "PicturePattern" }), Object.defineProperty(Qt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Xt.classNames.concat([Qt.className]) }), function(s) {
  s.ADD = "lighter", s.COLOR = "color", s.COLOR_BURN = "color-burn", s.COLOR_DODGE = "color-dodge", s.DARKEN = "darken", s.DIFFERENCE = "difference", s.DST_OVER = "destination-over", s.EXCLUSION = "exclusion", s.HARD_LIGHT = "hard-light", s.HUE = "hue", s.LIGHTEN = "lighten", s.LUMINOSITY = "luminosity", s.MULTIPLY = "multiply", s.NORMAL = "source-over", s.OVERLAY = "overlay", s.SATURATION = "saturation", s.SCREEN = "screen", s.SOFT_LIGHT = "soft-light", s.SRC_ATOP = "source-atop", s.XOR = "xor";
}(Di || (Di = {}));
const $c = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset"];
let He = class extends Se {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _beforeChanged() {
    if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = !0), this._display.crisp = this.get("crisp", !1), this.isDirty("fillGradient")) {
      const e = this.get("fillGradient");
      if (e) {
        this._display.isMeasured = !0;
        const t = e.get("target");
        t && (this._disposers.push(t.events.on("boundschanged", () => {
          this._markDirtyKey("fill");
        })), this._disposers.push(t.events.on("positionchanged", () => {
          this._markDirtyKey("fill");
        })));
      }
    }
    if (this.isDirty("strokeGradient")) {
      const e = this.get("strokeGradient");
      if (e) {
        this._display.isMeasured = !0;
        const t = e.get("target");
        t && (this._disposers.push(t.events.on("boundschanged", () => {
          this._markDirtyKey("stroke");
        })), this._disposers.push(t.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        })));
      }
    }
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
      let e = this.get("strokeDasharray");
      F(e) && (e = e < 0.5 ? [0] : [e]), this._display.setLineDash(e);
      const t = this.get("strokeDashoffset");
      t && this._display.setLineDashOffset(t);
      const i = this.get("blendMode", Di.NORMAL);
      this._display.blendMode = i;
      const r = this.get("draw");
      r && r(this._display, this);
      const n = this.get("svgPath");
      n != null && this._display.svgPath(n);
    }
  }
  _afterChanged() {
    if (super._afterChanged(), this._clear) {
      const e = this.get("fill"), t = this.get("fillGradient"), i = this.get("fillPattern"), r = this.get("fillOpacity"), n = this.get("stroke"), a = this.get("strokeGradient"), o = this.get("strokePattern"), l = this.get("shadowColor"), h = this.get("shadowBlur"), f = this.get("shadowOffsetX"), c = this.get("shadowOffsetY"), p = this.get("shadowOpacity");
      if (l && (h || f || c) && this._display.shadow(l, h, f, c, p), i) {
        let d = !1;
        !e || i.get("fill") && !i.get("fillInherited") || (i.set("fill", e), i.set("fillInherited", !0), d = !0), !n || i.get("color") && !i.get("colorInherited") || (i.set("color", n), i.set("colorInherited", !0), d = !0), d && i._changed();
        const _ = i.pattern;
        _ && (this._display.beginFill(_, r), this._display.endFill(), i instanceof Qt && i.events.once("loaded", () => {
          this._clear = !0, this.markDirty();
        }));
      } else if (t) {
        if (e) {
          const _ = t.get("stops", []);
          _.length && k(_, (u) => {
            u.color && !u.colorInherited || !e || (u.color = e, u.colorInherited = !0), (u.opacity == null || u.opacityInherited) && (u.opacity = r, u.opacityInherited = !0);
          });
        }
        const d = t.getFill(this);
        d && (this._display.beginFill(d, r), this._display.endFill());
      } else
        e && (this._display.beginFill(e, r), this._display.endFill());
      if (n || a || o) {
        const d = this.get("strokeOpacity");
        let _ = this.get("strokeWidth", 1);
        this.get("nonScalingStroke") && (_ /= this.get("scale", 1)), this.get("crisp") && (_ /= this._root._renderer.resolution);
        const u = this.get("lineJoin");
        if (o) {
          let y = !1;
          !n || o.get("color") && !o.get("colorInherited") || (o.set("color", n), o.set("colorInherited", !0), y = !0), y && o._changed();
          const v = o.pattern;
          v && (this._display.lineStyle(_, v, d, u), this._display.endStroke(), o instanceof Qt && o.events.once("loaded", () => {
            this._clear = !0, this.markDirty();
          }));
        } else if (a) {
          const y = a.get("stops", []);
          y.length && k(y, (x) => {
            x.color && !x.colorInherited || !n || (x.color = n, x.colorInherited = !0), (x.opacity == null || x.opacityInherited) && (x.opacity = d, x.opacityInherited = !0);
          });
          const v = a.getFill(this);
          v && (this._display.lineStyle(_, v, d, u), this._display.endStroke());
        } else
          n && (this._display.lineStyle(_, n, d, u), this._display.endStroke());
      }
      this.getPrivate("showingTooltip") && this.showTooltip();
    }
    this._clear = !1;
  }
};
Object.defineProperty(He, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Graphics" }), Object.defineProperty(He, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Se.classNames.concat([He.className]) });
let Ot = class extends He {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0);
  }
  _changed() {
    super._changed(), this._clear && !this.get("draw") && this._draw();
  }
  _draw() {
    this._display.drawRect(0, 0, this.width(), this.height());
  }
  _updateSize() {
    this.markDirty(), this._clear = !0;
  }
};
function ze(s, e) {
  s.get("reverseChildren", !1) ? s.children.eachReverse(e) : s.children.each(e);
}
Object.defineProperty(Ot, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Rectangle" }), Object.defineProperty(Ot, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: He.classNames.concat([Ot.className]) });
let Ve = class extends me {
};
Object.defineProperty(Ve, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Layout" }), Object.defineProperty(Ve, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: me.classNames.concat([Ve.className]) });
let Ft = class extends Ve {
  updateContainer(e) {
    let t = e.get("paddingLeft", 0), i = e.innerWidth(), r = 0;
    ze(e, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("width");
        if (o instanceof W) {
          r += o.value;
          let l = i * o.value, h = a.get("minWidth", a.getPrivate("minWidth", -1 / 0));
          h > l && (i -= h, r -= o.value);
          let f = a.get("maxWidth", a.getPrivate("maxWidth", 1 / 0));
          l > f && (i -= f, r -= o.value);
        } else
          F(o) || (o = a.width()), i -= o + a.get("marginLeft", 0) + a.get("marginRight", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), ze(e, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("width");
        if (o instanceof W) {
          let l = i * o.value / r - a.get("marginLeft", 0) - a.get("marginRight", 0), h = a.get("minWidth", a.getPrivate("minWidth", -1 / 0)), f = a.get("maxWidth", a.getPrivate("maxWidth", 1 / 0));
          l = Math.min(Math.max(h, l), f), a.setPrivate("width", l);
        }
      }
    });
    let n = t;
    ze(e, (a) => {
      if (a.get("position") == "relative")
        if (a.isVisible()) {
          let o = a.adjustedLocalBounds(), l = a.get("marginLeft", 0), h = a.get("marginRight", 0), f = a.get("maxWidth"), c = o.left, p = o.right;
          f && p - c > f && (p = c + f);
          let d = n + l - c;
          a.setPrivate("x", d), n = d + p + h;
        } else
          a.setPrivate("x", void 0);
    });
  }
};
Object.defineProperty(Ft, "className", { enumerable: !0, configurable: !0, writable: !0, value: "HorizontalLayout" }), Object.defineProperty(Ft, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Ve.classNames.concat([Ft.className]) });
let Dt = class extends Ve {
  updateContainer(e) {
    let t = e.get("paddingTop", 0), i = e.innerHeight(), r = 0;
    ze(e, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("height");
        if (o instanceof W) {
          r += o.value;
          let l = i * o.value, h = a.get("minHeight", a.getPrivate("minHeight", -1 / 0));
          h > l && (i -= h, r -= o.value);
          let f = a.get("maxHeight", a.getPrivate("maxHeight", 1 / 0));
          l > f && (i -= f, r -= o.value);
        } else
          F(o) || (o = a.height()), i -= o + a.get("marginTop", 0) + a.get("marginBottom", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), ze(e, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("height");
        if (o instanceof W) {
          let l = i * o.value / r - a.get("marginTop", 0) - a.get("marginBottom", 0), h = a.get("minHeight", a.getPrivate("minHeight", -1 / 0)), f = a.get("maxHeight", a.getPrivate("maxHeight", 1 / 0));
          l = Math.min(Math.max(h, l), f), a.setPrivate("height", l);
        }
      }
    });
    let n = t;
    ze(e, (a) => {
      if (a.get("position") == "relative")
        if (a.isVisible()) {
          let o = a.adjustedLocalBounds(), l = a.get("marginTop", 0), h = o.top, f = o.bottom, c = a.get("maxHeight");
          c && f - h > c && (f = h + c);
          let p = a.get("marginBottom", 0), d = n + l - h;
          a.setPrivate("y", d), n = d + f + p;
        } else
          a.setPrivate("y", void 0);
    });
  }
};
Object.defineProperty(Dt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "VerticalLayout" }), Object.defineProperty(Dt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Ve.classNames.concat([Dt.className]) });
let gt = class extends Ve {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew();
  }
  updateContainer(e) {
    let t = e.get("paddingLeft", 0), i = e.get("paddingRight", 0), r = e.get("paddingTop", 0), n = e.maxWidth() - t - i, a = n, o = 1;
    ze(e, (_) => {
      if (_.get("visible") && _.getPrivate("visible") && !_.get("forceHidden") && _.get("position") != "absolute") {
        let u = _.width();
        u < a && (a = u), u > o && (o = u);
      }
    }), a = ve(a, 1, n), o = ve(o, 1, n);
    let l = 1;
    l = this.get("fixedWidthGrid") ? n / o : n / a, l = Math.max(1, Math.floor(l)), l = Math.min(this.get("maxColumns", Number.MAX_VALUE), l);
    let h = this.getColumnWidths(e, l, o, n), f = r, c = 0, p = 0;
    l = h.length;
    let d = t;
    ze(e, (_) => {
      if (_.get("position") == "relative" && _.isVisible()) {
        const u = _.get("marginTop", 0), y = _.get("marginBottom", 0);
        let v = _.adjustedLocalBounds(), x = _.get("marginLeft", 0), w = _.get("marginRight", 0), P = d + x - v.left, O = f + u - v.top;
        _.setPrivate("x", P), _.setPrivate("y", O), d += h[c] + w, p = Math.max(p, _.height() + u + y), c++, c >= l && (c = 0, d = t, f += p);
      }
    });
  }
  getColumnWidths(e, t, i, r) {
    let n = 0, a = [], o = 0;
    return ze(e, (l) => {
      let h = l.adjustedLocalBounds();
      l.get("position") != "absolute" && l.isVisible() && (this.get("fixedWidthGrid") ? a[o] = i : a[o] = Math.max(0 | a[o], h.right - h.left + l.get("marginLeft", 0) + l.get("marginRight", 0)), o < e.children.length - 1 && (o++, o == t && (o = 0)));
    }), k(a, (l) => {
      n += l;
    }), n > r ? t > 2 ? (t -= 1, this.getColumnWidths(e, t, i, r)) : [r] : a;
  }
};
Object.defineProperty(gt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "GridLayout" }), Object.defineProperty(gt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Ve.classNames.concat([gt.className]) });
let $e = class {
  static escape(e) {
    return e.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  static unescape(e) {
    return e.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  static cleanUp(e) {
    return e.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  static chunk(e, t = !1, i = !1) {
    let r = [];
    e = this.escape(e);
    let n = t ? e.split("'") : [e];
    for (let a = 0; a < n.length; a++) {
      let o = n[a];
      if (o !== "")
        if (a % 2 == 0) {
          o = o.replace(/\]\[/g, "]" + tt + "["), o = o.replace(/\[\]/g, "[ ]");
          let l = o.split(/[\[\]]+/);
          for (let h = 0; h < l.length; h++) {
            let f = this.cleanUp(this.unescape(l[h]));
            f !== tt && f !== "" && (h % 2 == 0 ? r.push({ type: "value", text: f }) : r.push({ type: i ? "value" : "format", text: "[" + f + "]" }));
          }
        } else {
          let l = o.split(/[\[\]]+/);
          for (let h = 0; h < l.length; h++) {
            let f = this.cleanUp(this.unescape(l[h]));
            f !== "" && (h % 2 == 0 ? r.push({ type: "text", text: f }) : this.isImage(f) ? r.push({ type: "image", text: "[" + f + "]" }) : r.push({ type: "format", text: "[" + f + "]" }));
          }
        }
    }
    return r;
  }
  static isImage(e) {
    return !!e.match(/img[ ]?:/);
  }
  static getTextStyle(e) {
    let t = {};
    if (e == "" || e == "[ ]")
      return {};
    const i = e.match(/('[^']*')|("[^"]*")/gi);
    if (i)
      for (let n = 0; n < i.length; n++)
        e = e.replace(i[n], i[n].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
    let r = e.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!r)
      return {};
    for (let n = 0; n < r.length; n++)
      if (r[n].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i))
        t.fontWeight = r[n];
      else if (r[n].match(/^(underline|line-through)$/i))
        t.textDecoration = r[n];
      else if (r[n] != "/")
        if (r[n].match(/:/)) {
          const a = r[n].replace("+", " ").split(/:[ ]*/);
          t[a[0]] = a[1];
        } else
          t.fill = I.fromString(r[n]);
    return t;
  }
};
function Ei(s, e) {
  if (e != null) {
    e = "" + e;
    let t, i = (e = $e.escape(e)).match(/\{([^}]+)\}/g);
    if (i)
      for (t = 0; t < i.length; t++) {
        let r = Ts(s, i[t].replace(/\{([^}]+)\}/, "$1"));
        r == null && (r = ""), e = e.split(i[t]).join(r);
      }
    e = $e.unescape(e);
  } else
    e = "";
  return e;
}
function Ts(s, e, t) {
  let i;
  const r = s.dataItem;
  let n, a = [], o = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  for (; n = o.exec(e), n !== null; )
    if (n[3]) {
      a.push({ prop: n[3] });
      const l = s.getDateFormatter().get("dateFields", []), h = s.getNumberFormatter().get("numericFields", []), f = s.getDurationFormatter().get("durationFields", []);
      l.indexOf(n[3]) !== -1 ? a.push({ method: "formatDate", params: [] }) : h.indexOf(n[3]) !== -1 ? a.push({ method: "formatNumber", params: [] }) : f.indexOf(n[3]) !== -1 && a.push({ method: "formatDuration", params: [] });
    } else {
      let l = [];
      if (yi(n[2]) != "") {
        let h, f = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
        for (; h = f.exec(n[2]), h !== null; )
          l.push(h[1] || h[2] || h[3]);
      }
      a.push({ method: n[1], params: l });
    }
  if (r) {
    i = nt(s, a, r._settings), (i == null || Ni(i)) && (i = nt(s, a, r));
    let l = r.dataContext;
    i == null && l && (i = nt(s, a, l), i == null && (i = nt(s, [{ prop: e }], l)), i == null && l.dataContext && (i = nt(s, a, l.dataContext))), i == null && r.component && r.component.dataItem !== r && (i = Ts(r.component, e));
  }
  return i == null && (i = nt(s, a, s)), i == null && s.parent && (i = Ts(s.parent, e)), i;
}
function oh(s, e) {
  const t = s.getPrivate("customData");
  if (Ni(t))
    return t[e];
}
function nt(s, e, t, i) {
  let r = t, n = !1;
  for (let a = 0, o = e.length; a < o; a++) {
    let l = e[a];
    if (l.prop) {
      if (r instanceof Se) {
        let h = r.get(l.prop);
        h == null && (h = r.getPrivate(l.prop)), h == null && (h = oh(r, l.prop)), h == null && (h = r[l.prop]), r = h;
      } else if (r.get) {
        let h = r.get(l.prop);
        h == null && (h = r[l.prop]), r = h;
      } else
        r = r[l.prop];
      if (r == null)
        return;
    } else
      switch (l.method) {
        case "formatNumber":
          let h = we(r);
          h != null && (r = s.getNumberFormatter().format(h, i || l.params[0] || void 0), n = !0);
          break;
        case "formatDate":
          let f = ol(r);
          if (!xs(f) || js(f.getTime()))
            return;
          f != null && (r = s.getDateFormatter().format(f, i || l.params[0] || void 0), n = !0);
          break;
        case "formatDuration":
          let c = we(r);
          c != null && (r = s.getDurationFormatter().format(c, i || l.params[0] || void 0, l.params[1] || void 0), n = !0);
          break;
        case "urlEncode":
        case "encodeURIComponent":
          r = encodeURIComponent(r);
          break;
        default:
          r[l.method] && r[l.method].apply(t, l.params);
      }
  }
  if (!n) {
    let a = [{ method: "", params: i }];
    if (i == null)
      F(r) ? (a[0].method = "formatNumber", a[0].params = "") : xs(r) && (a[0].method = "formatDate", a[0].params = "");
    else {
      let o = Sl(i);
      o === "number" ? a[0].method = "formatNumber" : o === "date" ? a[0].method = "formatDate" : o === "duration" && (a[0].method = "formatDuration");
    }
    a[0].method && (r = nt(s, a, r));
  }
  return r;
}
Object.defineProperty($e, "prefix", { enumerable: !0, configurable: !0, writable: !0, value: "__amcharts__" });
let Me = class Bn extends Se {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "_childrenDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "children", { enumerable: !0, configurable: !0, writable: !0, value: new yl(this) }), Object.defineProperty(this, "_percentageSizeChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_percentagePositionChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_prevWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_prevHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd0", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd1", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNew(), this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    Gt(this.allChildren(), (e) => {
      e.dispose();
    }), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose();
  }
  _changed() {
    if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", !1)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((e) => {
      e.removePrivate("x"), e.removePrivate("y");
    })), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((e) => {
      e.markDirtyPosition();
    }), this.isDirty("maskContent")) {
      const e = this._childrenDisplay;
      let t = this._contentMask;
      this.get("maskContent") ? t || (t = Ot.new(this._root, { x: -0.5, y: -0.5, width: this.width() + 1, height: this.height() + 1 }), this._contentMask = t, e.addChildAt(t._display, 0), e.mask = t._display) : t && (e.removeChild(t._display), e.mask = null, t.dispose(), this._contentMask = void 0);
    }
  }
  _updateSize() {
    super._updateSize(), k(this._percentageSizeChildren, (e) => {
      e._updateSize();
    }), k(this._percentagePositionChildren, (e) => {
      e.markDirtyPosition(), e._updateSize();
    }), this.updateBackground();
  }
  updateBackground() {
    const e = this.get("background");
    let t = this._localBounds;
    if (t && !this.isHidden()) {
      let i = t.left, r = t.top, n = t.right - i, a = t.bottom - r, o = this.get("maxWidth"), l = this.get("maxHeight");
      l && a > l && (a = l), o && n > o && (n = o);
      let h = this.width(), f = this.height();
      e && (e.setAll({ width: n, height: a, x: i, y: r }), this._display.interactive && (e._display.interactive = !0));
      const c = this._contentMask;
      c && c.setAll({ width: h + 1, height: f + 1 });
      const p = this.get("verticalScrollbar");
      if (p) {
        p.set("height", f), p.set("x", h - p.width() - p.get("marginRight", 0)), p.set("end", p.get("start", 0) + f / this._contentHeight);
        const d = p.get("background");
        d && d.setAll({ width: p.width(), height: f });
        let _ = !0;
        this._contentHeight <= f && (_ = !1), p.setPrivate("visible", _);
      }
    }
  }
  _applyThemes() {
    return !!super._applyThemes() && (this.eachChildren((e) => {
      e._applyThemes();
    }), !0);
  }
  _applyState(e) {
    super._applyState(e), this.get("setStateOnChildren") && this.eachChildren((t) => {
      t.states.apply(e);
    });
  }
  _applyStateAnimated(e, t) {
    super._applyStateAnimated(e, t), this.get("setStateOnChildren") && this.eachChildren((i) => {
      i.states.applyAnimate(e, t);
    });
  }
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    let e = this.get("width"), t = this.get("height"), i = this.getPrivate("width"), r = this.getPrivate("height"), n = { left: 0, top: 0, right: this.width(), bottom: this.height() }, a = this.get("layout"), o = !1, l = !1;
    if ((a instanceof Ft || a instanceof gt) && (o = !0), a instanceof Dt && (l = !0), e == null && i == null || t == null && r == null || this.get("verticalScrollbar")) {
      let h = Number.MAX_VALUE, f = h, c = -h, p = h, d = -h;
      const _ = this.get("paddingLeft", 0), u = this.get("paddingTop", 0), y = this.get("paddingRight", 0), v = this.get("paddingBottom", 0);
      this.children.each((x) => {
        if (x.get("position") != "absolute" && x.get("isMeasured")) {
          let w = x.adjustedLocalBounds(), P = x.x(), O = x.y(), L = P + w.left, E = P + w.right, $ = O + w.top, z = O + w.bottom;
          o && (L -= x.get("marginLeft", 0), E += x.get("marginRight", 0)), l && ($ -= x.get("marginTop", 0), z += x.get("marginBottom", 0)), L < f && (f = L), E > c && (c = E), $ < p && (p = $), z > d && (d = z);
        }
      }), f == h && (f = 0), c == -h && (c = 0), p == h && (p = 0), d == -h && (d = 0), n.left = f - _, n.top = p - u, n.right = c + y, n.bottom = d + v;
    }
    this._contentWidth = n.right - n.left, this._contentHeight = n.bottom - n.top, F(e) && (n.left = 0, n.right = e), F(i) && (n.left = 0, n.right = i), F(t) && (n.top = 0, n.bottom = t), F(r) && (n.top = 0, n.bottom = r), this._localBounds = n;
  }
  _updateBounds() {
    const e = this.get("layout");
    e && e.updateContainer(this), super._updateBounds(), this.updateBackground();
  }
  markDirty() {
    super.markDirty(), this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const e = this.innerWidth(), t = this.innerHeight();
    if (e != this._prevWidth || t != this._prevHeight) {
      let i = this.get("layout"), r = !1, n = !1;
      i && ((i instanceof Ft || i instanceof gt) && (r = !0), i instanceof Dt && (n = !0)), k(this._percentageSizeChildren, (a) => {
        if (!r) {
          let o = a.get("width");
          o instanceof W && a.setPrivate("width", o.value * e);
        }
        if (!n) {
          let o = a.get("height");
          o instanceof W && a.setPrivate("height", o.value * t);
        }
      }), k(this._percentagePositionChildren, (a) => {
        a.markDirtyPosition(), a.markDirtyBounds();
      }), this._prevWidth = e, this._prevHeight = t, this._sizeDirty = !0, this.updateBackground();
    }
    this._handleStates();
  }
  _updateChildren() {
    if (this.isDirty("html")) {
      const e = this.get("html");
      e && e !== "" ? this._root._setHTMLContent(this, Ei(this, this.get("html", ""))) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this);
    }
    if (this.isDirty("verticalScrollbar")) {
      const e = this.get("verticalScrollbar");
      if (e) {
        e._setParent(this), e.children.removeValue(e.startGrip), e.children.removeValue(e.endGrip), this.set("maskContent", !0), this.set("paddingRight", e.width() + e.get("marginRight", 0) + e.get("marginLeft", 0));
        let t = this.get("background");
        t || (t = this.set("background", Ot.new(this._root, { themeTags: ["background"], fillOpacity: 0, fill: this._root.interfaceColors.get("alternativeBackground") }))), this._vsbd0 = this.events.on("wheel", (i) => {
          const r = i.originalEvent;
          if (!Il(r, this))
            return;
          r.preventDefault();
          let n = r.deltaY / 5e3;
          const a = e.get("start", 0), o = e.get("end", 1);
          a + n <= 0 && (n = -a), o + n >= 1 && (n = 1 - o), a + n >= 0 && o + n <= 1 && (e.set("start", a + n), e.set("end", o + n));
        }), this._disposers.push(this._vsbd0), this._vsbd1 = e.events.on("rangechanged", () => {
          let i = this._contentHeight;
          const r = this._childrenDisplay, n = this._contentMask;
          r.y = -e.get("start") * i, r.markDirtyLayer(), n && (n._display.y = -r.y, r.mask = n._display);
        }), this._disposers.push(this._vsbd1), this._display.addChild(e._display);
      } else {
        const t = this._prevSettings.verticalScrollbar;
        t && (this._display.removeChild(t._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose(), this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", !1), this.set("paddingRight", void 0));
      }
    }
    if (this.isDirty("background")) {
      const e = this._prevSettings.background;
      e && this._display.removeChild(e._display);
      const t = this.get("background");
      t instanceof Se && (t.set("isMeasured", !1), t._setParent(this), this._display.addChildAt(t._display, 0));
    }
    if (this.isDirty("mask")) {
      const e = this.get("mask"), t = this._prevSettings.mask;
      if (t && (this._display.removeChild(t._display), t != e && t.dispose()), e) {
        const i = e.parent;
        i && i.children.removeValue(e), e._setParent(this), this._display.addChildAt(e._display, 0), this._childrenDisplay.mask = e._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField(), this.children.each((e) => {
      e._processTemplateField();
    });
  }
  walkChildren(e) {
    this.children.each((t) => {
      t instanceof Bn && t.walkChildren(e), e(t);
    });
  }
  eachChildren(e) {
    const t = this.get("background");
    t && e(t);
    const i = this.get("verticalScrollbar");
    i && e(i);
    const r = this.get("mask");
    r && e(r), this.children.values.forEach((n) => {
      e(n);
    });
  }
  allChildren() {
    const e = [];
    return this.eachChildren((t) => {
      e.push(t);
    }), e;
  }
  _setDataItem(e) {
    const t = e !== this._dataItem;
    super._setDataItem(e);
    const i = this.get("html", "");
    i && i !== "" && t && this._root._setHTMLContent(this, Ei(this, i));
  }
};
Object.defineProperty(Me, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Container" }), Object.defineProperty(Me, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Se.classNames.concat([Me.className]) });
let Jt = class extends Se {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textStyle", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeTextStyle() }), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeText("", this.textStyle) }), Object.defineProperty(this, "_textStyles", { enumerable: !0, configurable: !0, writable: !0, value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale"] }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _updateBounds() {
    if (this.get("text"))
      super._updateBounds();
    else {
      let e = { left: 0, right: 0, top: 0, bottom: 0 };
      this._adjustedLocalBounds = e;
    }
  }
  _changed() {
    super._changed(), this._display.clear();
    let e = this.textStyle;
    if (this.isDirty("opacity")) {
      let t = this.get("opacity", 1);
      this._display.alpha = t;
    }
    if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), this.get("role") == "tooltip" && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement") && this.getPrivate("tooltipElement") && this._disposers.push(new re(() => {
      this._root._removeTooltipElement(this);
    })), this.isDirty("width") && (e.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (e.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (e.breakWords = this.get("breakWords", !1), this.markDirtyBounds()), this.isDirty("ellipsis") && (e.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (e.ignoreFormatting = this.get("ignoreFormatting", !1), this.markDirtyBounds()), this.isDirty("minScale") && (e.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill")) {
      let t = this.get("fill");
      t && (e.fill = t);
    }
    if (this.isDirty("fillOpacity")) {
      let t = this.get("fillOpacity", 1);
      t && (e.fillOpacity = t);
    }
    (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (e.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (e.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), k(this._textStyles, (t) => {
      this._dirty[t] && (e[t] = this.get(t), this.markDirtyBounds());
    }), e.fontSize = this.get("fontSize"), e.fontFamily = this.get("fontFamily"), this._display.style = e, this.isDirty("role") && this.get("role") == "tooltip" && this._root.updateTooltip(this);
  }
  _getText() {
    const e = this.get("text", "");
    return this.get("populateText") ? Ei(this, e) : e;
  }
  markDirtyText() {
    this._display.text = this._getText(), this.get("role") == "tooltip" && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty();
  }
  _setDataItem(e) {
    super._setDataItem(e), this.get("populateText") && this.markDirtyText();
  }
  getNumberFormatter() {
    return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter();
  }
  getDateFormatter() {
    return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter();
  }
  getDurationFormatter() {
    return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter();
  }
};
Object.defineProperty(Jt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Text" }), Object.defineProperty(Jt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Se.classNames.concat([Jt.className]) });
let wi = class extends Me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_textKeys", { enumerable: !0, configurable: !0, writable: !0, value: ["text", "fill", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting"] });
  }
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew(), this._makeText(), k(this._textKeys, (e) => {
      const t = this.get(e);
      t != null && this._text.set(e, t);
    }), this.get("html", "") !== "" && this._text.set("text", ""), this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    }), this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(Jt.new(this._root, {}));
  }
  _updateChildren() {
    if (super._updateChildren(), k(this._textKeys, (e) => {
      this._text.set(e, this.get(e));
    }), this.isDirty("maxWidth") && this._setMaxDimentions(), this.isDirty("maxHeight") && this._setMaxDimentions(), this.isDirty("rotation") && this._setMaxDimentions(), this.get("html", "") !== "" ? this._text.set("text", "") : this._text.set("text", this.get("text")), this.isDirty("textAlign") || this.isDirty("width")) {
      const e = this.get("textAlign");
      let t;
      this.get("width") != null ? t = e == "right" ? X : e == "center" ? te : 0 : e == "left" || e == "start" ? t = this.get("paddingLeft") : e != "right" && e != "end" || (t = -this.get("paddingRight")), this.text.set("x", t);
    }
  }
  _setMaxDimentions() {
    const e = this.get("rotation"), t = e == 90 || e == 270 || e == -90, i = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
    F(i) ? this.text.set(t ? "maxHeight" : "maxWidth", i - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : this.text.set(t ? "maxHeight" : "maxWidth", void 0);
    const r = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
    F(r) ? this.text.set(t ? "maxWidth" : "maxHeight", r - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : this.text.set(t ? "maxWidth" : "maxHeight", void 0);
  }
  _setDataItem(e) {
    super._setDataItem(e), this._markDirtyKey("text"), this.text.get("populateText") && this.text.markDirtyText();
  }
  getText() {
    return this._text._getText();
  }
};
Object.defineProperty(wi, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Label" }), Object.defineProperty(wi, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Me.classNames.concat([wi.className]) });
class lh {
  constructor(e, t) {
    if (Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rules", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._root = e, !t)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
  }
  static new(e) {
    const t = new this(e, !0);
    return t.setupDefaultRules(), t;
  }
  setupDefaultRules() {
  }
  _lookupRules(e) {
    return this._rules[e];
  }
  ruleRaw(e, t = []) {
    let i = this._rules[e];
    i || (i = this._rules[e] = []), t.sort(pt);
    const { index: r, found: n } = fl(i, (a) => {
      const o = pt(a.tags.length, t.length);
      return o === 0 ? Dn(a.tags, t, pt) : o;
    });
    if (n)
      return i[r].template;
    {
      const a = As.new({});
      return i.splice(r, 0, { tags: t, template: a }), a;
    }
  }
  rule(e, t = []) {
    return this.ruleRaw(e, t);
  }
}
let Et = class extends He {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) && (this._clear = !0);
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds();
      let e = this.width(), t = this.height();
      if (e > 0 && t > 0) {
        let i = this.get("cornerRadius", 8);
        i = ve(i, 0, Math.min(e / 2, t / 2));
        let r = this.get("pointerX", 0), n = this.get("pointerY", 0), a = this.get("pointerBaseWidth", 15) / 2, o = 0, l = 0, h = 0, f = (r - o) * (t - l) - (n - l) * (e - o), c = (r - h) * (0 - t) - (n - t) * (e - h);
        const p = this._display;
        if (p.moveTo(i, 0), f > 0 && c > 0) {
          let d = Math.round(ve(r, i + a, e - a - i));
          n = ve(n, -1 / 0, 0), p.lineTo(d - a, 0), p.lineTo(r, n), p.lineTo(d + a, 0);
        }
        if (p.lineTo(e - i, 0), p.arcTo(e, 0, e, i, i), f > 0 && c < 0) {
          let d = Math.round(ve(n, i + a, t - a - i));
          r = ve(r, e, 1 / 0), p.lineTo(e, i), p.lineTo(e, Math.max(d - a, i)), p.lineTo(r, n), p.lineTo(e, d + a);
        }
        if (p.lineTo(e, t - i), p.arcTo(e, t, e - i, t, i), f < 0 && c < 0) {
          let d = Math.round(ve(r, i + a, e - a - i));
          n = ve(n, t, 1 / 0), p.lineTo(e - i, t), p.lineTo(d + a, t), p.lineTo(r, n), p.lineTo(d - a, t);
        }
        if (p.lineTo(i, t), p.arcTo(0, t, 0, t - i, i), f < 0 && c > 0) {
          let d = Math.round(ve(n, i + a, t - i - a));
          r = ve(r, -1 / 0, 0), p.lineTo(0, t - i), p.lineTo(0, d + a), p.lineTo(r, n), p.lineTo(0, Math.max(d - a, i));
        }
        p.lineTo(0, i), p.arcTo(0, 0, i, 0, i), p.closePath();
      }
    }
  }
};
Object.defineProperty(Et, "className", { enumerable: !0, configurable: !0, writable: !0, value: "PointedRectangle" }), Object.defineProperty(Et, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: He.classNames.concat([Et.className]) });
let Zt = class extends Me {
  constructor(e, t, i, r = []) {
    super(e, t, i, r), Object.defineProperty(this, "_fx", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_fy", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_label", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_fillDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_labelDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_w", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_h", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_keepHoverDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_htmlContentHovered", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _afterNew() {
    this._settings.themeTags = Vl(this._settings.themeTags, ["tooltip"]), super._afterNew(), this.set("background", Et.new(this._root, { themeTags: ["tooltip", "background"] })), this._label = this.children.push(wi.new(this._root, {})), this._disposers.push(this._label.events.on("boundschanged", () => {
      this._updateBackground();
    })), this._disposers.push(this.on("bounds", () => {
      this._updateBackground();
    })), this._updateTextColor(), this._root.tooltipContainer.children.push(this), this.hide(0), this._disposers.push(this.label.onPrivate("htmlElement", (e) => {
      e && (ie(e, "pointerover", (t) => {
        this._htmlContentHovered = !0;
      }), ie(e, "pointerout", (t) => {
        this._htmlContentHovered = !1;
      }));
    })), this._root._tooltips.push(this);
  }
  get label() {
    return this._label;
  }
  dispose() {
    super.dispose(), Xe(this._root._tooltips, this);
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && this.get("background")._markDirtyKey("width"), this.get("labelText") != null && this.label.set("text", this.get("labelText")), this.get("labelHTML") != null && this.label.set("html", this.get("labelHTML"));
  }
  _changed() {
    if (super._changed(), (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) && this._updateBackground(), this.isDirty("tooltipTarget") && this.updateBackgroundColor(), this.isDirty("keepTargetHover"))
      if (this.get("keepTargetHover")) {
        const e = this.get("background");
        this._keepHoverDp = new xe([e.events.on("pointerover", (t) => {
          let i = this.get("tooltipTarget");
          i && (i.parent && i.parent.getPrivate("tooltipTarget") == i && (i = i.parent), i.hover());
        }), e.events.on("pointerout", (t) => {
          let i = this.get("tooltipTarget");
          i && (i.parent && i.parent.getPrivate("tooltipTarget") == i && (i = i.parent), this._htmlContentHovered || i.unhover());
        })]);
      } else
        this._keepHoverDp && (this._keepHoverDp.dispose(), this._keepHoverDp = void 0);
  }
  _onShow() {
    super._onShow(), this.updateBackgroundColor();
  }
  updateBackgroundColor() {
    let e = this.get("tooltipTarget");
    const t = this.get("background");
    let i, r;
    e && t && (i = e.get("fill"), r = e.get("stroke"), i == null && (i = r), this.get("getFillFromSprite") && (this._fillDp && this._fillDp.dispose(), i != null && t.set("fill", i), this._fillDp = e.on("fill", (n) => {
      n != null && (t.set("fill", n), this._updateTextColor(n));
    }), this._disposers.push(this._fillDp)), this.get("getStrokeFromSprite") && (this._strokeDp && this._strokeDp.dispose(), i != null && t.set("stroke", i), this._strokeDp = e.on("fill", (n) => {
      n != null && t.set("stroke", n);
    }), this._disposers.push(this._strokeDp)), this.get("getLabelFillFromSprite") && (this._labelDp && this._labelDp.dispose(), i != null && this.label.set("fill", i), this._labelDp = e.on("fill", (n) => {
      n != null && this.label.set("fill", n);
    }), this._disposers.push(this._labelDp))), this._updateTextColor(i);
  }
  _updateTextColor(e) {
    this.get("autoTextColor") && (e == null && (e = this.get("background").get("fill")), e == null && (e = this._root.interfaceColors.get("background")), e instanceof I && this.label.set("fill", I.alternative(e, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text"))));
  }
  _setDataItem(e) {
    super._setDataItem(e), this.label._setDataItem(e);
  }
  _updateBackground() {
    super.updateBackground();
    const e = this._root.container;
    if (e) {
      let t = 0.5, i = 0.5, r = this.get("centerX");
      r instanceof W && (t = r.value);
      let n = this.get("centerY");
      n instanceof W && (i = n.value);
      let a = e.width(), o = e.height(), l = this.parent, h = 0, f = 0;
      if (l) {
        h = l.x(), f = l.y();
        const U = l.get("layerMargin");
        U && (h += U.left || 0, f += U.top || 0, a += (U.left || 0) + (U.right || 0), o += (U.top || 0) + (U.bottom || 0));
      }
      const c = this.get("bounds", { left: -h, top: -f, right: a - h, bottom: o - f });
      this._updateBounds();
      let p = this.width(), d = this.height();
      p === 0 && (p = this._w), d === 0 && (d = this._h);
      let _ = this.get("pointTo", { x: a / 2, y: o / 2 }), u = _.x, y = _.y, v = this.get("pointerOrientation"), x = this.get("background"), w = 0, P = 0, O = 0;
      x instanceof Et && (w = x.get("pointerLength", 0), P = x.get("strokeWidth", 0) / 2, O = P, x.set("width", p), x.set("height", d));
      let L = 0, E = 0, $ = c.right - c.left, z = c.bottom - c.top;
      v == "horizontal" || v == "left" || v == "right" ? (P = 0, v == "horizontal" ? u > c.left + $ / 2 ? (u -= p * (1 - t) + w, O *= -1) : u += p * t + w : v == "left" ? u += p * (1 - t) + w : (u -= p * t + w, O *= -1)) : (O = 0, v == "vertical" ? y > c.top + d / 2 + w ? y -= d * (1 - i) + w : (y += d * i + w, P *= -1) : v == "down" ? y -= d * (1 - i) + w : (y += d * i + w, P *= -1)), u = ve(u, c.left + p * t, c.left + $ - p * (1 - t)) + O, y = ve(y, c.top + d * i, c.top + z - d * (1 - i)) - P, L = _.x - u + p * t + O, E = _.y - y + d * i - P, this._fx = u, this._fy = y;
      const N = this.get("animationDuration", 0);
      if (N > 0 && this.get("visible") && this.get("opacity") > 0.1) {
        const U = this.get("animationEasing");
        this.animate({ key: "x", to: u, duration: N, easing: U }), this.animate({ key: "y", to: y, duration: N, easing: U });
      } else
        this.set("x", u), this.set("y", y);
      x instanceof Et && (x.set("pointerX", L), x.set("pointerY", E)), p > 0 && (this._w = p), d > 0 && (this._h = d);
    }
  }
};
Object.defineProperty(Zt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Tooltip" }), Object.defineProperty(Zt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Me.classNames.concat([Zt.className]) });
function B(s, e, t, i) {
  s.set(e, t.get(i)), t.on(i, (r) => {
    s.set(e, r);
  });
}
let hh = class extends lh {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = this._root.language, t = this._root.interfaceColors, i = this._root.horizontalLayout, r = this._root.verticalLayout, n = this.rule.bind(this);
    n("InterfaceColors").setAll({ stroke: I.fromHex(15066597), fill: I.fromHex(15987699), primaryButton: I.fromHex(6788316), primaryButtonHover: I.fromHex(6779356), primaryButtonDown: I.fromHex(6872182), primaryButtonActive: I.fromHex(6872182), primaryButtonText: I.fromHex(16777215), primaryButtonStroke: I.fromHex(16777215), secondaryButton: I.fromHex(14277081), secondaryButtonHover: I.fromHex(10724259), secondaryButtonDown: I.fromHex(9276813), secondaryButtonActive: I.fromHex(15132390), secondaryButtonText: I.fromHex(0), secondaryButtonStroke: I.fromHex(16777215), grid: I.fromHex(0), background: I.fromHex(16777215), alternativeBackground: I.fromHex(0), text: I.fromHex(0), alternativeText: I.fromHex(16777215), disabled: I.fromHex(11382189), positive: I.fromHex(5288704), negative: I.fromHex(11730944) });
    {
      const a = n("ColorSet");
      a.setAll({ passOptions: { hue: 0.05, saturation: 0, lightness: 0 }, colors: [I.fromHex(6797276)], step: 1, reuse: !1, startIndex: 0 }), a.setPrivate("currentStep", 0), a.setPrivate("currentPass", 0);
    }
    n("Entity").setAll({ stateAnimationDuration: 0, stateAnimationEasing: ui(Vt) }), n("Component").setAll({ interpolationDuration: 0, interpolationEasing: ui(Vt) }), n("Sprite").setAll({ visible: !0, scale: 1, opacity: 1, rotation: 0, position: "relative", tooltipX: te, tooltipY: te, tooltipPosition: "fixed", isMeasured: !0 }), n("Sprite").states.create("default", { visible: !0, opacity: 1 }), n("Container").setAll({ interactiveChildren: !0, setStateOnChildren: !1 }), n("Graphics").setAll({ strokeWidth: 1 }), n("Chart").setAll({ width: X, height: X, interactiveChildren: !1 }), n("Sprite", ["horizontal", "center"]).setAll({ centerX: te, x: te }), n("Sprite", ["vertical", "center"]).setAll({ centerY: te, y: te }), n("Container", ["horizontal", "layout"]).setAll({ layout: i }), n("Container", ["vertical", "layout"]).setAll({ layout: r }), n("Pattern").setAll({ repetition: "repeat", width: 50, height: 50, rotation: 0, fillOpacity: 1 }), n("LinePattern").setAll({ gap: 6, colorOpacity: 1, width: 49, height: 49 }), n("RectanglePattern").setAll({ gap: 6, checkered: !1, centered: !0, maxWidth: 5, maxHeight: 5, width: 48, height: 48, strokeWidth: 0 }), n("CirclePattern").setAll({ gap: 5, checkered: !1, centered: !1, radius: 3, strokeWidth: 0, width: 45, height: 45 }), n("LinearGradient").setAll({ rotation: 90 }), n("Legend").setAll({ fillField: "fill", strokeField: "stroke", nameField: "name", layout: gt.new(this._root, {}), layer: 30, clickTarget: "itemContainer" }), n("Container", ["legend", "item", "itemcontainer"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5, layout: i, setStateOnChildren: !0, interactiveChildren: !1, ariaChecked: !0, focusable: !0, ariaLabel: e.translate("Press ENTER to toggle"), role: "checkbox" });
    {
      const a = n("Rectangle", ["legend", "item", "background"]);
      a.setAll({ fillOpacity: 0 }), B(a, "fill", t, "background");
    }
    n("Container", ["legend", "marker"]).setAll({ setStateOnChildren: !0, centerY: te, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0, width: 18, height: 18 }), n("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll({ width: X, height: X, cornerRadiusBL: 3, cornerRadiusTL: 3, cornerRadiusBR: 3, cornerRadiusTR: 3 });
    {
      const a = n("RoundedRectangle", ["legend", "marker", "rectangle"]).states.create("disabled", {});
      B(a, "fill", t, "disabled"), B(a, "stroke", t, "disabled");
    }
    n("Label", ["legend", "label"]).setAll({ centerY: te, marginLeft: 5, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0, populateText: !0 }), B(n("Label", ["legend", "label"]).states.create("disabled", {}), "fill", t, "disabled"), n("Label", ["legend", "value", "label"]).setAll({ centerY: te, marginLeft: 5, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0, width: 50, centerX: X, populateText: !0 }), B(n("Label", ["legend", "value", "label"]).states.create("disabled", {}), "fill", t, "disabled"), n("HeatLegend").setAll({ stepCount: 1 }), n("RoundedRectangle", ["heatlegend", "marker"]).setAll({ cornerRadiusTR: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusBL: 0 }), n("RoundedRectangle", ["vertical", "heatlegend", "marker"]).setAll({ height: X, width: 15 }), n("RoundedRectangle", ["horizontal", "heatlegend", "marker"]).setAll({ width: X, height: 15 }), n("HeatLegend", ["vertical"]).setAll({ height: X }), n("HeatLegend", ["horizontal"]).setAll({ width: X }), n("Label", ["heatlegend", "start"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 }), n("Label", ["heatlegend", "end"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 });
    {
      const a = n("Label");
      a.setAll({ paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontSize: "1em", populateText: !1 }), B(a, "fill", t, "text");
    }
    n("RadialLabel").setAll({ textType: "regular", centerY: te, centerX: te, inside: !1, radius: 0, baseRadius: X, orientation: "auto", textAlign: "center" }), n("RoundedRectangle").setAll({ cornerRadiusTL: 8, cornerRadiusBL: 8, cornerRadiusTR: 8, cornerRadiusBR: 8 }), n("PointedRectangle").setAll({ pointerBaseWidth: 15, pointerLength: 10, cornerRadius: 8 }), n("Slice").setAll({ shiftRadius: 0, dRadius: 0, dInnerRadius: 0 });
    {
      const a = n("Tick");
      a.setAll({ strokeOpacity: 0.15, isMeasured: !1, length: 4.5, position: "absolute", crisp: !0 }), B(a, "stroke", t, "grid");
    }
    n("Bullet").setAll({ locationX: 0.5, locationY: 0.5 }), n("Tooltip").setAll({ position: "absolute", getFillFromSprite: !0, getStrokeFromSprite: !1, autoTextColor: !0, paddingTop: 9, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, marginBottom: 5, pointerOrientation: "vertical", centerX: te, centerY: te, animationEasing: ui(Vt), exportable: !1 }), n("PointedRectangle", ["tooltip", "background"]).setAll({ strokeOpacity: 0.9, cornerRadius: 4, pointerLength: 4, pointerBaseWidth: 8, fillOpacity: 0.9, stroke: I.fromHex(16777215) });
    {
      const a = n("Label", ["tooltip"]);
      a.setAll({ role: "tooltip", populateText: !0, paddingRight: 0, paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }), B(a, "fill", t, "alternativeText");
    }
    n("Button").setAll({ paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, interactive: !0, layout: i, interactiveChildren: !1, setStateOnChildren: !0, focusable: !0 }), n("Button").states.create("hover", {}), n("Button").states.create("down", { stateAnimationDuration: 0 }), n("Button").states.create("active", {});
    {
      const a = n("RoundedRectangle", ["button", "background"]);
      B(a, "fill", t, "primaryButton"), B(a, "stroke", t, "primaryButtonStroke");
    }
    B(n("RoundedRectangle", ["button", "background"]).states.create("hover", {}), "fill", t, "primaryButtonHover"), B(n("RoundedRectangle", ["button", "background"]).states.create("down", { stateAnimationDuration: 0 }), "fill", t, "primaryButtonDown"), B(n("RoundedRectangle", ["button", "background"]).states.create("active", {}), "fill", t, "primaryButtonActive"), B(n("Graphics", ["button", "icon"]), "stroke", t, "primaryButtonText"), B(n("Label", ["button"]), "fill", t, "primaryButtonText"), n("Button", ["zoom"]).setAll({ paddingTop: 18, paddingBottom: 18, paddingLeft: 12, paddingRight: 12, centerX: 46, centerY: -10, y: 0, x: X, role: "button", ariaLabel: e.translate("Zoom Out"), layer: 30 });
    {
      const a = n("RoundedRectangle", ["background", "button", "zoom"]);
      a.setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), B(a, "fill", t, "primaryButton");
    }
    B(n("RoundedRectangle", ["background", "button", "zoom"]).states.create("hover", {}), "fill", t, "primaryButtonHover"), B(n("RoundedRectangle", ["background", "button", "zoom"]).states.create("down", { stateAnimationDuration: 0 }), "fill", t, "primaryButtonDown");
    {
      const a = n("Graphics", ["icon", "button", "zoom"]);
      a.setAll({ crisp: !0, strokeOpacity: 0.7, draw: (o) => {
        o.moveTo(0, 0), o.lineTo(12, 0);
      } }), B(a, "stroke", t, "primaryButtonText");
    }
    n("Button", ["resize"]).setAll({ paddingTop: 9, paddingBottom: 9, paddingLeft: 13, paddingRight: 13, draggable: !0, centerX: te, centerY: te, position: "absolute", role: "slider", ariaValueMin: "0", ariaValueMax: "100", ariaLabel: e.translate("Use up and down arrows to move selection") });
    {
      const a = n("RoundedRectangle", ["background", "resize", "button"]);
      a.setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), B(a, "fill", t, "secondaryButton"), B(a, "stroke", t, "secondaryButtonStroke");
    }
    B(n("RoundedRectangle", ["background", "resize", "button"]).states.create("hover", {}), "fill", t, "secondaryButtonHover"), B(n("RoundedRectangle", ["background", "resize", "button"]).states.create("down", { stateAnimationDuration: 0 }), "fill", t, "secondaryButtonDown");
    {
      const a = n("Graphics", ["resize", "button", "icon"]);
      a.setAll({ interactive: !1, crisp: !0, strokeOpacity: 0.5, draw: (o) => {
        o.moveTo(0, 0.5), o.lineTo(0, 12.5), o.moveTo(4, 0.5), o.lineTo(4, 12.5);
      } }), B(a, "stroke", t, "secondaryButtonText");
    }
    n("Button", ["resize", "vertical"]).setAll({ rotation: 90, cursorOverStyle: "ns-resize" }), n("Button", ["resize", "horizontal"]).setAll({ cursorOverStyle: "ew-resize" }), n("Button", ["play"]).setAll({ paddingTop: 13, paddingBottom: 13, paddingLeft: 14, paddingRight: 14, ariaLabel: e.translate("Play"), toggleKey: "active" });
    {
      const a = n("RoundedRectangle", ["play", "background"]);
      a.setAll({ strokeOpacity: 0.5, cornerRadiusBL: 100, cornerRadiusBR: 100, cornerRadiusTL: 100, cornerRadiusTR: 100 }), B(a, "fill", t, "primaryButton");
    }
    {
      const a = n("Graphics", ["play", "icon"]);
      a.setAll({ stateAnimationDuration: 0, dx: 1, draw: (o) => {
        o.moveTo(0, -5), o.lineTo(8, 0), o.lineTo(0, 5), o.lineTo(0, -5);
      } }), B(a, "fill", t, "primaryButtonText");
    }
    n("Graphics", ["play", "icon"]).states.create("default", { stateAnimationDuration: 0 }), n("Graphics", ["play", "icon"]).states.create("active", { stateAnimationDuration: 0, draw: (a) => {
      a.moveTo(-4, -5), a.lineTo(-1, -5), a.lineTo(-1, 5), a.lineTo(-4, 5), a.lineTo(-4, -5), a.moveTo(4, -5), a.lineTo(1, -5), a.lineTo(1, 5), a.lineTo(4, 5), a.lineTo(4, -5);
    } }), n("Button", ["switch"]).setAll({ paddingTop: 4, paddingBottom: 4, paddingLeft: 4, paddingRight: 4, ariaLabel: e.translate("Press ENTER to toggle"), toggleKey: "active", width: 40, height: 24, layout: null });
    {
      const a = n("RoundedRectangle", ["switch", "background"]);
      a.setAll({ strokeOpacity: 0.5, cornerRadiusBL: 100, cornerRadiusBR: 100, cornerRadiusTL: 100, cornerRadiusTR: 100 }), B(a, "fill", t, "primaryButton");
    }
    {
      const a = n("Circle", ["switch", "icon"]);
      a.setAll({ radius: 8, centerY: 0, centerX: 0, dx: 0 }), B(a, "fill", t, "primaryButtonText");
    }
    n("Graphics", ["switch", "icon"]).states.create("active", { dx: 16 }), n("Scrollbar").setAll({ start: 0, end: 1, layer: 30, animationEasing: ui(Vt) }), n("Scrollbar", ["vertical"]).setAll({ marginRight: 13, marginLeft: 13, minWidth: 12, height: X }), n("Scrollbar", ["horizontal"]).setAll({ marginTop: 13, marginBottom: 13, minHeight: 12, width: X }), this.rule("Button", ["scrollbar"]).setAll({ exportable: !1 });
    {
      const a = n("RoundedRectangle", ["scrollbar", "main", "background"]);
      a.setAll({ cornerRadiusTL: 8, cornerRadiusBL: 8, cornerRadiusTR: 8, cornerRadiusBR: 8, fillOpacity: 0.8 }), B(a, "fill", t, "fill");
    }
    {
      const a = n("RoundedRectangle", ["scrollbar", "thumb"]);
      a.setAll({ role: "slider", ariaLive: "polite", position: "absolute", draggable: !0 }), B(a, "fill", t, "secondaryButton");
    }
    B(n("RoundedRectangle", ["scrollbar", "thumb"]).states.create("hover", {}), "fill", t, "secondaryButtonHover"), B(n("RoundedRectangle", ["scrollbar", "thumb"]).states.create("down", { stateAnimationDuration: 0 }), "fill", t, "secondaryButtonDown"), n("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll({ x: te, width: X, centerX: te, ariaLabel: e.translate("Use up and down arrows to move selection") }), n("RoundedRectangle", ["scrollbar", "thumb", "horizontal"]).setAll({ y: te, centerY: te, height: X, ariaLabel: e.translate("Use left and right arrows to move selection") });
    {
      const a = n("PointedRectangle", ["axis", "tooltip", "background"]);
      a.setAll({ cornerRadius: 0 }), B(a, "fill", t, "alternativeBackground");
    }
    n("Label", ["axis", "tooltip"]).setAll({ role: void 0 }), n("Label", ["axis", "tooltip", "y"]).setAll({ textAlign: "right" }), n("Label", ["axis", "tooltip", "y", "opposite"]).setAll({ textAlign: "left" }), n("Label", ["axis", "tooltip", "x"]).setAll({ textAlign: "center" }), n("Tooltip", ["categoryaxis"]).setAll({ labelText: "{category}" }), n("Star").setAll({ spikes: 5, innerRadius: 5, radius: 10 }), n("Tooltip", ["stock"]).setAll({ paddingTop: 6, paddingBottom: 5, paddingLeft: 7, paddingRight: 7 }), n("PointedRectangle", ["tooltip", "stock", "axis"]).setAll({ pointerLength: 0, pointerBaseWidth: 0, cornerRadius: 3 }), n("Label", ["tooltip", "stock"]).setAll({ fontSize: "0.8em" }), n("SpriteResizer").setAll({ rotationStep: 10 }), n("Container", ["resizer", "grip"]).states.create("hover", {});
    {
      const a = n("RoundedRectangle", ["resizer", "grip"]);
      a.setAll({ strokeOpacity: 0.7, strokeWidth: 1, fillOpacity: 1, width: 12, height: 12 }), B(a, "fill", t, "background"), B(a, "stroke", t, "alternativeBackground");
    }
    {
      const a = n("RoundedRectangle", ["resizer", "grip", "outline"]);
      a.setAll({ strokeOpacity: 0, fillOpacity: 0, width: 20, height: 20 }), a.states.create("hover", { fillOpacity: 0.3 }), B(a, "fill", t, "alternativeBackground");
    }
    n("RoundedRectangle", ["resizer", "grip", "left"]).setAll({ cornerRadiusBL: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusTR: 0 }), n("RoundedRectangle", ["resizer", "grip", "right"]).setAll({ cornerRadiusBL: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusTR: 0 });
    {
      const a = n("Rectangle", ["resizer", "rectangle"]);
      a.setAll({ strokeDasharray: [2, 2], strokeOpacity: 0.5, strokeWidth: 1 }), B(a, "stroke", t, "alternativeBackground");
    }
  }
};
class dh {
  constructor() {
    Object.defineProperty(this, "_observer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] }), this._observer = new ResizeObserver((e) => {
      k(e, (t) => {
        k(this._targets, (i) => {
          i.target === t.target && i.callback();
        });
      });
    });
  }
  addTarget(e, t) {
    this._observer.observe(e, { box: "border-box" }), this._targets.push({ target: e, callback: t });
  }
  removeTarget(e) {
    this._observer.unobserve(e), Hi(this._targets, (t) => t.target !== e);
  }
}
class zi {
  constructor() {
    Object.defineProperty(this, "_timer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  addTarget(e, t) {
    if (this._timer === null) {
      let r = null;
      const n = () => {
        const a = Date.now();
        (r === null || a > r + zi.delay) && (r = a, k(this._targets, (o) => {
          let l = o.target.getBoundingClientRect();
          l.width === o.size.width && l.height === o.size.height || (o.size = l, o.callback());
        })), this._targets.length === 0 ? this._timer = null : this._timer = requestAnimationFrame(n);
      };
      this._timer = requestAnimationFrame(n);
    }
    let i = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    this._targets.push({ target: e, callback: t, size: i });
  }
  removeTarget(e) {
    Hi(this._targets, (t) => t.target !== e), this._targets.length === 0 && this._timer !== null && (cancelAnimationFrame(this._timer), this._timer = null);
  }
}
Object.defineProperty(zi, "delay", { enumerable: !0, configurable: !0, writable: !0, value: 200 });
let os = null;
function ch() {
  return os === null && (os = typeof ResizeObserver < "u" ? new dh() : new zi()), os;
}
class uh {
  constructor(e, t) {
    Object.defineProperty(this, "_sensor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_element", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_listener", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), this._sensor = ch(), this._element = e, this._listener = kn(t), this._sensor.addTarget(e, t);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
}
class xi extends me {
}
Object.defineProperty(xi, "className", { enumerable: !0, configurable: !0, writable: !0, value: "InterfaceColors" }), Object.defineProperty(xi, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: me.classNames.concat([xi.className]) });
class ph extends me {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e = "_big_number_suffix_", t = "_small_number_suffix_", i = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{ number: 1e3, suffix: this._t(e + "3") }, { number: 1e6, suffix: this._t(e + "6") }, { number: 1e9, suffix: this._t(e + "9") }, { number: 1e12, suffix: this._t(e + "12") }, { number: 1e15, suffix: this._t(e + "15") }, { number: 1e18, suffix: this._t(e + "18") }, { number: 1e21, suffix: this._t(e + "21") }, { number: 1e24, suffix: this._t(e + "24") }]), this._setDefault("smallNumberPrefixes", [{ number: 1e-24, suffix: this._t(t + "24") }, { number: 1e-21, suffix: this._t(t + "21") }, { number: 1e-18, suffix: this._t(t + "18") }, { number: 1e-15, suffix: this._t(t + "15") }, { number: 1e-12, suffix: this._t(t + "12") }, { number: 1e-9, suffix: this._t(t + "9") }, { number: 1e-6, suffix: this._t(t + "6") }, { number: 1e-3, suffix: this._t(t + "3") }]), this._setDefault("bytePrefixes", [{ number: 1, suffix: this._t(i + "B") }, { number: 1024, suffix: this._t(i + "KB") }, { number: 1048576, suffix: this._t(i + "MB") }, { number: 1073741824, suffix: this._t(i + "GB") }, { number: 1099511627776, suffix: this._t(i + "TB") }, { number: 1125899906842624, suffix: this._t(i + "PB") }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r;
    (t == null || St(t) && t.toLowerCase() === "number") && (t = this.get("numberFormat", ""));
    let n = Number(e);
    if (Ni(t))
      try {
        return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(n) : new Intl.NumberFormat(void 0, t).format(n);
      } catch {
        return "Invalid";
      }
    else {
      t = Hs(t);
      let a, o = this.parseFormat(t, this._root.language);
      a = n > this.get("negativeBase") ? o.positive : n < this.get("negativeBase") ? o.negative : o.zero, i == null || a.mod || (a = wl(a), a.decimals.active = n == 0 ? 0 : i), r = a.template.split(tt).join(this.applyFormat(n, a));
    }
    return r;
  }
  parseFormat(e, t) {
    const i = t.translateEmpty("_thousandSeparator"), r = t.translateEmpty("_decimalSeparator");
    let n = { positive: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, negative: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, zero: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 } }, a = (e = e.replace("||", Tt)).split("|");
    return n.positive.source = a[0], a[2] === void 0 ? n.zero = n.positive : n.zero.source = a[2], a[1] === void 0 ? n.negative = n.positive : n.negative.source = a[1], q(n, (o, l) => {
      if (l.parsed)
        return;
      let h = l.source;
      h.toLowerCase() === "number" && (h = this.get("numberFormat", "#,###.#####"));
      let f = $e.chunk(h, !0);
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (p.text = p.text.replace(Tt, "|"), p.type === "value") {
          let d = p.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (d)
            if (d === null || d[0] === "")
              l.template += p.text;
            else {
              let _ = d[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
              _ && (l.mod = _[0].toLowerCase(), l.modSpacing = !!d[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
              let u = d[0].split(".");
              if (u[0] !== "") {
                l.thousands.active = (u[0].match(/0/g) || []).length, l.thousands.passive = (u[0].match(/\#/g) || []).length + l.thousands.active;
                let y = u[0].split(",");
                y.length === 1 || (l.thousands.interval = (y.pop() || "").length, l.thousands.interval === 0 && (l.thousands.interval = -1));
              }
              u[1] === void 0 || (l.decimals.active = (u[1].match(/0/g) || []).length, l.decimals.passive = (u[1].match(/\#/g) || []).length + l.decimals.active), l.template += p.text.split(d[0]).join(tt);
            }
        } else
          l.template += p.text;
      }
      l.parsed = !0;
    }), n;
  }
  applyFormat(e, t) {
    let i = e < 0;
    e = Math.abs(e);
    let r = "", n = "", a = t.mod ? t.mod.split("") : [];
    if (a.indexOf("b") !== -1) {
      let c = this.applyPrefix(e, this.get("bytePrefixes"), a.indexOf("!") !== -1);
      e = c[0], r = c[1], n = c[2], t.modSpacing && (n = " " + n);
    } else if (a.indexOf("a") !== -1) {
      let c = this.applyPrefix(e, e < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), a.indexOf("!") !== -1);
      e = c[0], r = c[1], n = c[2], t.modSpacing && (n = " " + n);
    } else if (a.indexOf("p") !== -1) {
      let c = Math.min(e.toString().length + 2, 21);
      e = parseFloat(e.toPrecision(c)), r = this._root.language.translate("_percentPrefix"), n = this._root.language.translate("_percentSuffix"), r == "" && n == "" && (n = "%");
    } else if (a.indexOf("%") !== -1) {
      let c = Math.min(e.toString().length + 2, 21);
      e *= 100, e = parseFloat(e.toPrecision(c)), n = "%";
    } else if (a.indexOf("‰") !== -1) {
      let c = Math.min(e.toString().length + 3, 21);
      e *= 1e3, e = parseFloat(e.toPrecision(c)), n = "‰";
    }
    if (a.indexOf("e") !== -1) {
      let c;
      c = t.decimals.passive >= 0 ? e.toExponential(t.decimals.passive).split("e") : e.toExponential().split("e"), e = Number(c[0]), n = "e" + c[1], t.modSpacing && (n = " " + n);
    } else if (t.decimals.passive === 0)
      e = Math.round(e);
    else if (t.decimals.passive > 0) {
      let c = Math.pow(10, t.decimals.passive);
      e = Math.round(e * c) / c;
    }
    let o = "", l = ll(e).split("."), h = l[0];
    if (h.length < t.thousands.active && (h = Array(t.thousands.active - h.length + 1).join("0") + h), t.thousands.interval > 0) {
      let c = [], p = h.split("").reverse().join("");
      for (let d = 0, _ = h.length; d <= _; d += t.thousands.interval) {
        let u = p.substr(d, t.thousands.interval).split("").reverse().join("");
        u !== "" && c.unshift(u);
      }
      h = c.join(t.thousands.separator);
    }
    o += h, l.length === 1 && l.push("");
    let f = l[1];
    return f.length < t.decimals.active && (f += Array(t.decimals.active - f.length + 1).join("0")), f !== "" && (o += t.decimals.separator + f), o === "" && (o = "0"), e !== 0 && i && a.indexOf("s") === -1 && (o = "-" + o), r && (o = r + o), n && (o += n), o;
  }
  applyPrefix(e, t, i = !1) {
    let r = e, n = "", a = "", o = !1, l = 1;
    for (let h = 0, f = t.length; h < f; h++)
      t[h].number <= e && (t[h].number === 0 ? r = 0 : (r = e / t[h].number, l = t[h].number), n = t[h].prefix, a = t[h].suffix, o = !0);
    return !o && i && t.length && e != 0 && (r = e / t[0].number, n = t[0].prefix, a = t[0].suffix, o = !0), o && (r = parseFloat(r.toPrecision(Math.min(l.toString().length + Math.floor(r).toString().replace(/[^0-9]*/g, "").length, 21)))), [r, n, a];
  }
  escape(e) {
    return e.replace("||", Tt);
  }
  unescape(e) {
    return e.replace(Tt, "|");
  }
}
function Ln(s, e) {
  let t = 0, i = 0, r = 1, n = 0, a = 0, o = 0, l = 0, h = 0;
  return s.formatToParts(e).forEach((f) => {
    switch (f.type) {
      case "year":
        t = +f.value;
        break;
      case "month":
        i = +f.value - 1;
        break;
      case "day":
        r = +f.value;
        break;
      case "hour":
        n = +f.value;
        break;
      case "minute":
        a = +f.value;
        break;
      case "second":
        o = +f.value;
        break;
      case "fractionalSecond":
        l = +f.value;
        break;
      case "weekday":
        switch (f.value) {
          case "Sun":
            h = 0;
            break;
          case "Mon":
            h = 1;
            break;
          case "Tue":
            h = 2;
            break;
          case "Wed":
            h = 3;
            break;
          case "Thu":
            h = 4;
            break;
          case "Fri":
            h = 5;
            break;
          case "Sat":
            h = 6;
        }
    }
  }), n === 24 && (n = 0), { year: t, month: i, day: r, hour: n, minute: a, second: o, millisecond: l, weekday: h };
}
function Pr(s, e) {
  const { year: t, month: i, day: r, hour: n, minute: a, second: o, millisecond: l } = Ln(s, e);
  return Date.UTC(t, i, r, n, a, o, l);
}
class gh {
  constructor(e, t) {
    if (Object.defineProperty(this, "_utc", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dtf", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !t)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e, this._utc = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 }), this._dtf = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 });
  }
  static new(e) {
    return new this(e, !0);
  }
  convertLocal(e) {
    const t = this.offsetUTC(e), i = e.getTimezoneOffset(), r = new Date(e);
    r.setUTCMinutes(r.getUTCMinutes() - (t - i));
    const n = r.getTimezoneOffset();
    return i != n && r.setUTCMinutes(r.getUTCMinutes() + n - i), r;
  }
  offsetUTC(e) {
    return (Pr(this._utc, e) - Pr(this._dtf, e)) / 6e4;
  }
  parseDate(e) {
    return Ln(this._dtf, e);
  }
}
class fh extends me {
  _setDefaults() {
    this._setDefault("capitalize", !0), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t) {
    let i;
    t !== void 0 && t !== "" || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let r = e;
    if (Ni(t))
      try {
        const o = this.get("intlLocales");
        return o ? new Intl.DateTimeFormat(o, t).format(r) : new Intl.DateTimeFormat(void 0, t).format(r);
      } catch {
        return "Invalid";
      }
    let n = this.parseFormat(t);
    const a = this._root.timezone;
    return a && !this._root.utc && (r = a.convertLocal(r)), F(r.getTime()) ? (i = this.applyFormat(r, n), this.get("capitalize") && (i = i.replace(/^.{1}/, i.substr(0, 1).toUpperCase())), i) : "Invalid date";
  }
  applyFormat(e, t) {
    let i, r, n, a, o, l, h, f, c = t.template, p = e.getTime();
    this._root.utc ? (i = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDay(), a = e.getUTCDate(), o = e.getUTCHours(), l = e.getUTCMinutes(), h = e.getUTCSeconds(), f = e.getUTCMilliseconds()) : (i = e.getFullYear(), r = e.getMonth(), n = e.getDay(), a = e.getDate(), o = e.getHours(), l = e.getMinutes(), h = e.getSeconds(), f = e.getMilliseconds());
    for (let d = 0, _ = t.parts.length; d < _; d++) {
      let u = "";
      switch (t.parts[d]) {
        case "G":
          u = this._t(i < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          u = Math.abs(i).toString(), i < 0 && (u += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          u = Math.abs(i).toString().substr(-t.parts[d].length), i < 0 && (u += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let y = $l(e, this._root.utc);
          u = t.parts[d] == "YYYY" ? Math.abs(y).toString() : Math.abs(y).toString().substr(-t.parts[d].length), y < 0 && (u += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          u = "" + Math.ceil((e.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          u = this._t(this._getMonth(r)).substr(0, 1);
          break;
        case "MMMM":
          u = this._t(this._getMonth(r));
          break;
        case "MMM":
          u = this._t(this._getShortMonth(r));
          break;
        case "MM":
          u = Q(r + 1, 2, "0");
          break;
        case "M":
          u = (r + 1).toString();
          break;
        case "ww":
          u = Q(Fi(e, this._root.utc), 2, "0");
          break;
        case "w":
          u = Fi(e, this._root.utc).toString();
          break;
        case "W":
          u = Bl(e, this._root.utc).toString();
          break;
        case "dd":
          u = Q(a, 2, "0");
          break;
        case "d":
          u = a.toString();
          break;
        case "DD":
        case "DDD":
          u = Q(vr(e, this._root.utc).toString(), t.parts[d].length, "0");
          break;
        case "D":
          u = vr(e, this._root.utc).toString();
          break;
        case "t":
          u = this._root.language.translateFunc("_dateOrd").call(this, a);
          break;
        case "E":
          u = (n || 7).toString();
          break;
        case "EE":
          u = Q((n || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          u = this._t(this._getShortWeekday(n));
          break;
        case "EEEE":
        case "eeee":
          u = this._t(this._getWeekday(n));
          break;
        case "EEEEE":
        case "eeeee":
          u = this._t(this._getShortWeekday(n)).substr(0, 1);
          break;
        case "e":
        case "ee":
          u = (n - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), t.parts[d] == "ee" && (u = Q(u, 2, "0"));
          break;
        case "a":
          u = o >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          u = o >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          u = o >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          u = di(o).toString();
          break;
        case "hh":
          u = Q(di(o), 2, "0");
          break;
        case "H":
          u = o.toString();
          break;
        case "HH":
          u = Q(o, 2, "0");
          break;
        case "K":
          u = di(o, 0).toString();
          break;
        case "KK":
          u = Q(di(o, 0), 2, "0");
          break;
        case "k":
          u = (o + 1).toString();
          break;
        case "kk":
          u = Q(o + 1, 2, "0");
          break;
        case "m":
          u = l.toString();
          break;
        case "mm":
          u = Q(l, 2, "0");
          break;
        case "s":
          u = h.toString();
          break;
        case "ss":
          u = Q(h, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          u = Math.round(f / 1e3 * Math.pow(10, t.parts[d].length)).toString();
          break;
        case "x":
          u = p.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          u = Q(f, t.parts[d].length, "0");
          break;
        case "z":
          u = ci(e, !1, !1, this._root.utc);
          break;
        case "zz":
          u = ci(e, !0, !1, this._root.utc);
          break;
        case "zzz":
          u = ci(e, !1, !0, this._root.utc);
          break;
        case "zzzz":
          u = ci(e, !0, !0, this._root.utc);
          break;
        case "Z":
        case "ZZ":
          let v = this._root.utc ? "UTC" : this._root.timezone;
          v instanceof gh && (v = v.name);
          const x = v ? Rl(v) : e.getTimezoneOffset();
          let w = Math.abs(x) / 60, P = Math.floor(w), O = 60 * w - 60 * P;
          this._root.utc && (P = 0, O = 0), t.parts[d] == "Z" ? (u = "GMT", u += x > 0 ? "-" : "+", u += Q(P, 2) + ":" + Q(O, 2)) : (u = x > 0 ? "-" : "+", u += Q(P, 2) + Q(O, 2));
          break;
        case "i":
          u = e.toISOString();
          break;
        case "I":
          u = e.toUTCString();
      }
      c = c.replace(tt, u);
    }
    return c;
  }
  parseFormat(e) {
    let t = { template: "", parts: [] }, i = $e.chunk(e, !0);
    for (let r = 0; r < i.length; r++) {
      let n = i[r];
      if (n.type === "value") {
        if (n.text.match(/^date$/i)) {
          let o = this.get("dateFormat", "yyyy-MM-dd");
          St(o) || (o = "yyyy-MM-dd"), n.text = o;
        }
        let a = n.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (a)
          for (let o = 0; o < a.length; o++)
            t.parts.push(a[o]), n.text = n.text.replace(a[o], tt);
      }
      t.template += n.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e) {
    return this._months()[e];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e) {
    return this._shortMonths()[e];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e) {
    return this._weekdays()[e];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e) {
    return this._shortWeekdays()[e];
  }
  parse(e, t) {
    if (e instanceof Date)
      return e;
    if (F(e))
      return new Date(e);
    let i;
    St(e) || (e = e.toString());
    let r = "";
    t = (t = Hs(t)).substr(0, e.length);
    let n = this.parseFormat(t), a = { year: -1, year3: -1, year2: -1, year1: -1, month: -1, monthShort: -1, monthLong: -1, weekdayShort: -1, weekdayLong: -1, day: -1, yearDay: -1, week: -1, hourBase0: -1, hour12Base0: -1, hourBase1: -1, hour12Base1: -1, minute: -1, second: -1, millisecond: -1, millisecondDigits: -1, am: -1, zone: -1, timestamp: -1, iso: -1 }, o = { year: 1970, month: 0, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, timestamp: null, offset: 0, utc: this._root.utc }, l = 0, h = 0;
    for (let p = 0; p < n.parts.length; p++) {
      switch (h = p + l + 1, n.parts[p]) {
        case "yyyy":
        case "YYYY":
          r += "([0-9]{4})", a.year = h;
          break;
        case "yyy":
        case "YYY":
          r += "([0-9]{3})", a.year3 = h;
          break;
        case "yy":
        case "YY":
          r += "([0-9]{2})", a.year2 = h;
          break;
        case "y":
        case "Y":
          r += "([0-9]{1})", a.year1 = h;
          break;
        case "MMMM":
          r += "(" + this.getStringList(this._months()).join("|") + ")", a.monthLong = h;
          break;
        case "MMM":
          r += "(" + this.getStringList(this._shortMonths()).join("|") + ")", a.monthShort = h;
          break;
        case "MM":
        case "M":
          r += "([0-9]{2}|[0-9]{1})", a.month = h;
          break;
        case "ww":
        case "w":
          r += "([0-9]{2}|[0-9]{1})", a.week = h;
          break;
        case "dd":
        case "d":
          r += "([0-9]{2}|[0-9]{1})", a.day = h;
          break;
        case "DDD":
        case "DD":
        case "D":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.yearDay = h;
          break;
        case "dddd":
          r += "(" + this.getStringList(this._weekdays()).join("|") + ")", a.weekdayLong = h;
          break;
        case "ddd":
          r += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", a.weekdayShort = h;
          break;
        case "aaa":
        case "aa":
        case "a":
          r += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", a.am = h;
          break;
        case "hh":
        case "h":
          r += "([0-9]{2}|[0-9]{1})", a.hour12Base1 = h;
          break;
        case "HH":
        case "H":
          r += "([0-9]{2}|[0-9]{1})", a.hourBase0 = h;
          break;
        case "KK":
        case "K":
          r += "([0-9]{2}|[0-9]{1})", a.hour12Base0 = h;
          break;
        case "kk":
        case "k":
          r += "([0-9]{2}|[0-9]{1})", a.hourBase1 = h;
          break;
        case "mm":
        case "m":
          r += "([0-9]{2}|[0-9]{1})", a.minute = h;
          break;
        case "ss":
        case "s":
          r += "([0-9]{2}|[0-9]{1})", a.second = h;
          break;
        case "SSS":
        case "SS":
        case "S":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.millisecond = h, a.millisecondDigits = n.parts[p].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.millisecond = h;
          break;
        case "x":
          r += "([0-9]{1,})", a.timestamp = h;
          break;
        case "Z":
          r += "GMT([-+]+[0-9]{2}:[0-9]{2})", a.zone = h;
          break;
        case "ZZ":
          r += "([\\-+]+[0-9]{2}[0-9]{2})", a.zone = h;
          break;
        case "i":
          r += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", a.iso = h, l += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          l--;
      }
      r += "[^0-9]*";
    }
    let f = new RegExp(r), c = e.match(f);
    if (c) {
      if (a.year > -1 && (o.year = parseInt(c[a.year])), a.year3 > -1) {
        let p = parseInt(c[a.year3]);
        p += 1e3, o.year = p;
      }
      if (a.year2 > -1) {
        let p = parseInt(c[a.year2]);
        p += p > 50 ? 1e3 : 2e3, o.year = p;
      }
      if (a.year1 > -1) {
        let p = parseInt(c[a.year1]);
        p = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + p, o.year = p;
      }
      if (a.monthLong > -1 && (o.month = this.resolveMonth(c[a.monthLong])), a.monthShort > -1 && (o.month = this.resolveShortMonth(c[a.monthShort])), a.month > -1 && (o.month = parseInt(c[a.month]) - 1), a.week > -1 && a.day === -1 && (o.month = 0, o.day = Ll(parseInt(c[a.week]), o.year, 1, this._root.utc)), a.day > -1 && (o.day = parseInt(c[a.day])), a.yearDay > -1 && (o.month = 0, o.day = parseInt(c[a.yearDay])), a.hourBase0 > -1 && (o.hour = parseInt(c[a.hourBase0])), a.hourBase1 > -1 && (o.hour = parseInt(c[a.hourBase1]) - 1), a.hour12Base0 > -1) {
        let p = parseInt(c[a.hour12Base0]);
        p == 11 && (p = 0), a.am > -1 && !this.isAm(c[a.am]) && (p += 12), o.hour = p;
      }
      if (a.hour12Base1 > -1) {
        let p = parseInt(c[a.hour12Base1]);
        p == 12 && (p = 0), a.am > -1 && !this.isAm(c[a.am]) && (p += 12), o.hour = p;
      }
      if (a.minute > -1 && (o.minute = parseInt(c[a.minute])), a.second > -1 && (o.second = parseInt(c[a.second])), a.millisecond > -1) {
        let p = parseInt(c[a.millisecond]);
        a.millisecondDigits == 2 ? p *= 10 : a.millisecondDigits == 1 && (p *= 100), o.millisecond = p;
      }
      if (a.timestamp > -1) {
        o.timestamp = parseInt(c[a.timestamp]);
        const p = new Date(o.timestamp);
        o.year = p.getUTCFullYear(), o.month = p.getUTCMonth(), o.day = p.getUTCDate(), o.hour = p.getUTCHours(), o.minute = p.getUTCMinutes(), o.second = p.getUTCSeconds(), o.millisecond = p.getUTCMilliseconds();
      }
      a.zone > -1 && (o.offset = this.resolveTimezoneOffset(new Date(o.year, o.month, o.day), c[a.zone])), a.iso > -1 && (o.year = we(c[a.iso + 0]), o.month = we(c[a.iso + 1]) - 1, o.day = we(c[a.iso + 2]), o.hour = we(c[a.iso + 3]), o.minute = we(c[a.iso + 4]), o.second = we(c[a.iso + 5]), o.millisecond = we(c[a.iso + 6]), c[a.iso + 7] == "Z" || c[a.iso + 7] == "z" ? o.utc = !0 : c[a.iso + 7] != "" && (o.offset = this.resolveTimezoneOffset(new Date(o.year, o.month, o.day), c[a.iso + 7]))), i = o.utc ? new Date(Date.UTC(o.year, o.month, o.day, o.hour, o.minute, o.second, o.millisecond)) : new Date(o.year, o.month, o.day, o.hour, o.minute + o.offset, o.second, o.millisecond);
    } else
      i = new Date(e);
    return i;
  }
  resolveTimezoneOffset(e, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), r = i[1], n = i[2], a = i[3], o = 60 * parseInt(n) + parseInt(a);
      return r == "+" && (o *= -1), o - (e || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e) {
    let t = this._months().indexOf(e);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e), t > -1) ? t : 0;
  }
  resolveShortMonth(e) {
    let t = this._shortMonths().indexOf(e);
    return t > -1 ? t : (t = this._months().indexOf(e), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e), t > -1) ? t : 0);
  }
  isAm(e) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) > -1;
  }
  getStringList(e) {
    let t = [];
    for (let i = 0; i < e.length; i++)
      this._root.language ? t.push(yr(this._t(e[i]))) : t.push(yr(e[i]));
    return t;
  }
}
class mh extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", { enumerable: !0, configurable: !0, writable: !0, value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" } });
  }
  _setDefaults() {
    const e = "_duration_millisecond", t = "_duration_second", i = "_duration_minute", r = "_duration_hour", n = "_duration_day", a = "_duration_week", o = "_duration_month", l = "_duration_year", h = "_second", f = "_minute", c = "_hour", p = "_day", d = "_week", _ = "_week", u = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", { millisecond: { millisecond: this._t(e), second: this._t(e + h), minute: this._t(e + f), hour: this._t(e + c), day: this._t(e + p), week: this._t(e + d), month: this._t(e + _), year: this._t(e + u) }, second: { second: this._t(t), minute: this._t(t + f), hour: this._t(t + c), day: this._t(t + p), week: this._t(t + d), month: this._t(t + _), year: this._t(t + u) }, minute: { minute: this._t(i), hour: this._t(i + c), day: this._t(i + p), week: this._t(i + d), month: this._t(i + _), year: this._t(i + u) }, hour: { hour: this._t(r), day: this._t(r + p), week: this._t(r + d), month: this._t(r + _), year: this._t(r + u) }, day: { day: this._t(n), week: this._t(n + d), month: this._t(n + _), year: this._t(n + u) }, week: { week: this._t(a), month: this._t(a + _), year: this._t(a + u) }, month: { month: this._t(o), year: this._t(o + u) }, year: { year: this._t(l) } }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r = i || this.get("baseUnit");
    t !== void 0 && t !== "" || (t = this.get("durationFormat") != null ? this.get("durationFormat") : this.getFormat(we(e), void 0, r)), t = Hs(t);
    let n, a = this.parseFormat(t, r), o = Number(e);
    n = o > this.get("negativeBase") ? a.positive : o < this.get("negativeBase") ? a.negative : a.zero;
    let l = this.applyFormat(o, n);
    return n.color !== "" && (l = "[" + n.color + "]" + l + "[/]"), l;
  }
  parseFormat(e, t) {
    let i = t || this.get("baseUnit"), r = { positive: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, negative: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, zero: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 } }, n = (e = e.replace("||", Tt)).split("|");
    return r.positive.source = n[0], n[2] === void 0 ? r.zero = r.positive : r.zero.source = n[2], n[1] === void 0 ? r.negative = r.positive : r.negative.source = n[1], q(r, (a, o) => {
      if (o.parsed)
        return;
      let l = o.source, h = [];
      h = o.source.match(/^\[([^\]]*)\]/), h && h.length && h[0] !== "" && (l = o.source.substr(h[0].length), o.color = h[1]);
      let f = $e.chunk(l, !0);
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (p.text = p.text.replace(Tt, "|"), p.type === "value") {
          p.text.match(/[yYMdDwhHKkmsSn]+a/) && (o.absolute = !0, p.text = p.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let d = p.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (d)
            for (let _ = 0; _ < d.length; _++)
              d[_] == null && (d[_] = this._unitAliases[d[_]]), o.parts.push(d[_]), p.text = p.text.replace(d[_], tt);
        }
        o.template += p.text;
      }
      o.parsed = !0;
    }), r;
  }
  applyFormat(e, t) {
    let i = !t.absolute && e < this.get("negativeBase");
    e = Math.abs(e);
    let r = this.toTimeStamp(e, t.baseUnit), n = t.template;
    for (let a = 0, o = t.parts.length; a < o; a++) {
      let l = t.parts[a], h = this._toTimeUnit(l.substr(0, 1)), f = l.length, c = Math.floor(r / this._getUnitValue(h));
      n = n.replace(tt, Q(c, f, "0")), r -= c * this._getUnitValue(h);
    }
    return i && (n = "-" + n), n;
  }
  toTimeStamp(e, t) {
    return e * this._getUnitValue(t);
  }
  _toTimeUnit(e) {
    switch (e) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e, t, i) {
    if (this.get("durationFormat") != null)
      return this.get("durationFormat");
    if (i || (i = this.get("baseUnit")), t != null && e != t) {
      e = Math.abs(e), t = Math.abs(t);
      let r = this.getValueUnit(Math.max(e, t), i);
      return this.get("durationFormats")[i][r];
    }
    {
      let r = this.getValueUnit(e, i);
      return this.get("durationFormats")[i][r];
    }
  }
  getValueUnit(e, t) {
    let i;
    t || (t = this.get("baseUnit"));
    let r = this.getMilliseconds(e, t);
    return xl(this._getUnitValues(), (n, a) => {
      if (n == t || i) {
        if (r / a <= 1)
          return i || (i = n), !1;
        i = n;
      }
      return !0;
    }), i;
  }
  getMilliseconds(e, t) {
    return t || (t = this.get("baseUnit")), e * this._getUnitValue(t);
  }
  _getUnitValue(e) {
    return this._getUnitValues()[e];
  }
  _getUnitValues() {
    return { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
  }
}
const Rn = { firstDayOfWeek: 1, _decimalSeparator: ".", _thousandSeparator: ",", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date: "yyyy-MM-dd", _date_millisecond: "mm:ss SSS", _date_millisecond_full: "HH:mm:ss SSS", _date_second: "HH:mm:ss", _date_second_full: "HH:mm:ss", _date_minute: "HH:mm", _date_minute_full: "HH:mm - MMM dd, yyyy", _date_hour: "HH:mm", _date_hour_full: "HH:mm - MMM dd, yyyy", _date_day: "MMM dd", _date_day_full: "MMM dd, yyyy", _date_week: "ww", _date_week_full: "MMM dd, yyyy", _date_month: "MMM", _date_month_full: "MMM, yyyy", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "AD", _era_bc: "BC", A: "", P: "", AM: "", PM: "", "A.M.": "", "P.M.": "", January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "", Jan: "", Feb: "", Mar: "", Apr: "", "May(short)": "May", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Sunday: "", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: "", _dateOrd: function(s) {
  let e = "th";
  if (s < 11 || s > 13)
    switch (s % 10) {
      case 1:
        e = "st";
        break;
      case 2:
        e = "nd";
        break;
      case 3:
        e = "rd";
    }
  return e;
}, "Zoom Out": "", Play: "", Stop: "", Legend: "", "Press ENTER to toggle": "", Loading: "", Home: "", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Force directed tree": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "", Image: "", Data: "", Print: "", "Press ENTER or use arrow keys to navigate": "", "Press ENTER to open": "", "Press ENTER to print.": "", "Press ENTER to export as %1.": "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", HTML: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "", "From %1": "", "To %1": "", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "", Close: "", Minimize: "" };
class bh extends me {
  _setDefaults() {
    this.setPrivate("defaultLocale", Rn), super._setDefaults();
  }
  translate(e, t, ...i) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let r = e, n = t[e];
    if (n === null)
      r = "";
    else if (n != null)
      n && (r = n);
    else if (t !== this.getPrivate("defaultLocale"))
      return this.translate(e, this.getPrivate("defaultLocale"), ...i);
    if (i.length)
      for (let a = i.length, o = 0; o < a; ++o)
        r = r.split("%" + (o + 1)).join(i[o]);
    return r;
  }
  translateAny(e, t, ...i) {
    return this.translate(e, t, ...i);
  }
  setTranslationAny(e, t, i) {
    (i || this._root.locale)[e] = t;
  }
  setTranslationsAny(e, t) {
    q(e, (i, r) => {
      this.setTranslationAny(i, r, t);
    });
  }
  translateEmpty(e, t, ...i) {
    let r = this.translate(e, t, ...i);
    return r == e ? "" : r;
  }
  translateFunc(e, t) {
    return this._root.locale[e] ? this._root.locale[e] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e, t) {
    return this.isDefault() ? e : dl(e, (i) => this.translate(i, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
}
class ls {
  constructor(e = 1, t = 0, i = 0, r = 1, n = 0, a = 0) {
    Object.defineProperty(this, "a", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "b", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "c", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "d", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tx", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ty", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.a = e, this.b = t, this.c = i, this.d = r, this.tx = n, this.ty = a;
  }
  setTransform(e, t, i, r, n, a = 1) {
    this.a = Math.cos(n) * a, this.b = Math.sin(n) * a, this.c = -Math.sin(n) * a, this.d = Math.cos(n) * a, this.tx = e - (i * this.a + r * this.c), this.ty = t - (i * this.b + r * this.d);
  }
  apply(e) {
    return { x: this.a * e.x + this.c * e.y + this.tx, y: this.b * e.x + this.d * e.y + this.ty };
  }
  applyInverse(e) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return { x: this.d * t * e.x + -this.c * t * e.y + (this.ty * this.c - this.tx * this.d) * t, y: this.a * t * e.y + -this.b * t * e.x + (-this.ty * this.a + this.tx * this.b) * t };
  }
  append(e) {
    const t = this.a, i = this.b, r = this.c, n = this.d;
    this.a = e.a * t + e.b * r, this.b = e.a * i + e.b * n, this.c = e.c * t + e.d * r, this.d = e.c * i + e.d * n, this.tx = e.tx * t + e.ty * r + this.tx, this.ty = e.tx * i + e.ty * n + this.ty;
  }
  prepend(e) {
    const t = this.tx;
    if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
      const i = this.a, r = this.c;
      this.a = i * e.a + this.b * e.c, this.b = i * e.b + this.b * e.d, this.c = r * e.a + this.d * e.c, this.d = r * e.b + this.d * e.d;
    }
    this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty;
  }
  copyFrom(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty;
  }
}
var _h = /* @__PURE__ */ function() {
  function s(e, t) {
    var i = [], r = !0, n = !1, a = void 0;
    try {
      for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (i.push(o.value), !t || i.length !== t); r = !0)
        ;
    } catch (h) {
      n = !0, a = h;
    } finally {
      try {
        !r && l.return && l.return();
      } finally {
        if (n)
          throw a;
      }
    }
    return i;
  }
  return function(e, t) {
    if (Array.isArray(e))
      return e;
    if (Symbol.iterator in Object(e))
      return s(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), ei = 2 * Math.PI, hs = function(s, e, t, i, r, n, a) {
  var o = s.x, l = s.y;
  return { x: i * (o *= e) - r * (l *= t) + n, y: r * o + i * l + a };
}, yh = function(s, e) {
  var t = e === 1.5707963267948966 ? 0.551915024494 : e === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(e / 4), i = Math.cos(s), r = Math.sin(s), n = Math.cos(s + e), a = Math.sin(s + e);
  return [{ x: i - r * t, y: r + i * t }, { x: n + a * t, y: a - n * t }, { x: n, y: a }];
}, kr = function(s, e, t, i) {
  var r = s * t + e * i;
  return r > 1 && (r = 1), r < -1 && (r = -1), (s * i - e * t < 0 ? -1 : 1) * Math.acos(r);
}, vh = function(s, e, t, i, r, n, a, o, l, h, f, c) {
  var p = Math.pow(r, 2), d = Math.pow(n, 2), _ = Math.pow(f, 2), u = Math.pow(c, 2), y = p * d - p * u - d * _;
  y < 0 && (y = 0), y /= p * u + d * _;
  var v = (y = Math.sqrt(y) * (a === o ? -1 : 1)) * r / n * c, x = y * -n / r * f, w = h * v - l * x + (s + t) / 2, P = l * v + h * x + (e + i) / 2, O = (f - v) / r, L = (c - x) / n, E = (-f - v) / r, $ = (-c - x) / n, z = kr(1, 0, O, L), N = kr(O, L, E, $);
  return o === 0 && N > 0 && (N -= ei), o === 1 && N < 0 && (N += ei), [w, P, z, N];
}, wh = function(s) {
  var e = s.px, t = s.py, i = s.cx, r = s.cy, n = s.rx, a = s.ry, o = s.xAxisRotation, l = o === void 0 ? 0 : o, h = s.largeArcFlag, f = h === void 0 ? 0 : h, c = s.sweepFlag, p = c === void 0 ? 0 : c, d = [];
  if (n === 0 || a === 0)
    return [];
  var _ = Math.sin(l * ei / 360), u = Math.cos(l * ei / 360), y = u * (e - i) / 2 + _ * (t - r) / 2, v = -_ * (e - i) / 2 + u * (t - r) / 2;
  if (y === 0 && v === 0)
    return [];
  n = Math.abs(n), a = Math.abs(a);
  var x = Math.pow(y, 2) / Math.pow(n, 2) + Math.pow(v, 2) / Math.pow(a, 2);
  x > 1 && (n *= Math.sqrt(x), a *= Math.sqrt(x));
  var w = vh(e, t, i, r, n, a, f, p, _, u, y, v), P = _h(w, 4), O = P[0], L = P[1], E = P[2], $ = P[3], z = Math.abs($) / (ei / 4);
  Math.abs(1 - z) < 1e-7 && (z = 1);
  var N = Math.max(Math.ceil(z), 1);
  $ /= N;
  for (var U = 0; U < N; U++)
    d.push(yh(E, $)), E += $;
  return d.map(function(he) {
    var Te = hs(he[0], n, a, u, _, O, L), vt = Te.x, oe = Te.y, li = hs(he[1], n, a, u, _, O, L), G = li.x, ke = li.y, Ie = hs(he[2], n, a, u, _, O, L);
    return { x1: vt, y1: oe, x2: G, y2: ke, x: Ie.x, y: Ie.y };
  });
};
function xh(s, e, t) {
  if (e !== t)
    throw new Error("Required " + t + " arguments for " + s + " but got " + e);
}
function Wt(s, e, t) {
  if (e < t)
    throw new Error("Required at least " + t + " arguments for " + s + " but got " + e);
}
function _e(s, e, t) {
  if (Wt(s, e, t), e % t != 0)
    throw new Error("Arguments for " + s + " must be in pairs of " + t);
}
function Mh(s) {
  for (let e = 0; e < s.length; e += 7) {
    let t = e + 3, i = s[t];
    if (i.length > 1) {
      const r = /^([01])([01])(.*)$/.exec(i);
      r !== null && (s.splice(t, 0, r[1]), ++t, s.splice(t, 0, r[2]), ++t, r[3].length > 0 ? s[t] = r[3] : s.splice(t, 1));
    }
    if (++t, i = s[t], i.length > 1) {
      const r = /^([01])(.+)$/.exec(i);
      r !== null && (s.splice(t, 0, r[1]), ++t, s[t] = r[2]);
    }
  }
}
function Cr(s) {
  if (s === 0 || s === 1)
    return s;
  throw new Error("Flag must be 0 or 1");
}
function Ph(s) {
  const e = [0, 0, 0];
  for (let t = 0; t < 24; t++)
    e[t % 3] <<= 1, e[t % 3] |= 1 & s, s >>= 1;
  return (0 | e[2]) + (e[1] << 8) + (e[0] << 16);
}
function gi(s, e) {
  for (; (!s.interactive || e(s)) && s._parent; )
    s = s._parent;
}
function kh(s, e, t) {
  return ie(s, Ps(e), (i) => {
    const r = Cn(i);
    let n = i.touches;
    n ? (n.length == 0 && (n = i.changedTouches), t(cl(n), r)) : t([i], r);
  });
}
function Ar(s) {
  const e = document.createElement("canvas");
  e.width = 1, e.height = 1;
  const t = e.getContext("2d", { willReadFrequently: !0 });
  t.drawImage(s, 0, 0, 1, 1);
  try {
    return t.getImageData(0, 0, 1, 1), !1;
  } catch {
    return console.warn('Image "' + s.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), !0;
  }
}
function Ut(s) {
  s.width = 0, s.height = 0, s.style.width = "0px", s.style.height = "0px";
}
class Ch {
  constructor() {
    Object.defineProperty(this, "_x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_y", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e) {
    this._x = e;
  }
  set y(e) {
    this._y = e;
  }
}
class Vi extends Ns {
  constructor(e) {
    super(), Object.defineProperty(this, "_layer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "mask", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportable", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "interactive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "inactive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "wheelable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "cancelTouch", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "isMeasured", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "buttonMode", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "alpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "compoundAlpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "angle", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "crisp", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "pivot", { enumerable: !0, configurable: !0, writable: !0, value: new Ch() }), Object.defineProperty(this, "filter", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "cursorOverStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_replacedCursorStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new ls() }), Object.defineProperty(this, "_matrix", { enumerable: !0, configurable: !0, writable: !0, value: new ls() }), Object.defineProperty(this, "_uMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new ls() }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_bounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._renderer = e;
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = !0;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e = this;
    for (; ; ) {
      if (e._layer)
        return e._layer;
      if (!e._parent)
        return this._renderer.defaultLayer;
      e = e._parent;
    }
  }
  setLayer(e, t) {
    e == null ? this._layer = void 0 : (this._layer = this._renderer.getLayer(e, !0), this._layer.visible = !0, this._layer.margin = t, t && Ct(this._layer.view, !1), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = !0, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost());
  }
  markDirtyLayer() {
    this.getLayer().dirty = !0;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e) {
  }
  _getColorId() {
    return this._colorId === void 0 && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive() {
    return this.inactive == 0 && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask() {
    return this._isInteractive();
  }
  contains(e) {
    for (; ; ) {
      if (e === this)
        return !0;
      if (!e._parent)
        return !1;
      e = e._parent;
    }
  }
  toGlobal(e) {
    return this._matrix.apply(e);
  }
  toLocal(e) {
    return this._matrix.applyInverse(e);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    return this._localBounds || (this._localBounds = { left: 1e7, top: 1e7, right: -1e7, bottom: -1e7 }, this._addBounds(this._localBounds)), this._localBounds;
  }
  getAdjustedBounds(e) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i = t.apply({ x: e.left, y: e.top }), r = t.apply({ x: e.right, y: e.top }), n = t.apply({ x: e.right, y: e.bottom }), a = t.apply({ x: e.left, y: e.bottom });
    return { left: Math.min(i.x, r.x, n.x, a.x), top: Math.min(i.y, r.y, n.y, a.y), right: Math.max(i.x, r.x, n.x, a.x), bottom: Math.max(i.y, r.y, n.y, a.y) };
  }
  on(e, t, i) {
    return this.interactive ? this._renderer._addEvent(this, e, t, i) : new re(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e, t) {
    const i = this._matrix;
    let r = i.tx * t, n = i.ty * t;
    this.crisp && (r = Math.floor(r) + 0.5, n = Math.floor(n) + 0.5), e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, r, n);
  }
  _transformMargin(e, t, i) {
    const r = this._matrix;
    e.setTransform(r.a * t, r.b * t, r.c * t, r.d * t, (r.tx + i.left) * t, (r.ty + i.top) * t);
  }
  _transformLayer(e, t, i) {
    i.margin ? this._transformMargin(e, i.scale || t, i.margin) : this._transform(e, i.scale || t);
  }
  render(e) {
    if (this.visible && (this.exportable !== !1 || !this._renderer._omitTainted)) {
      this._setMatrix();
      const t = this._renderer.resolution, i = this._renderer.layers, r = this._renderer._ghostLayer, n = r.context, a = this.mask;
      a && a._setMatrix(), k(i, (o) => {
        if (o) {
          const l = o.context;
          l.save(), a && (a._transformLayer(l, t, o), a._runPath(l), l.clip()), l.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(l, t, o), this.filter && (l.filter = this.filter);
        }
      }), n.save(), a && this._isInteractiveMask() && (a._transformMargin(n, t, r.margin), a._runPath(n), n.clip()), this._transformMargin(n, t, r.margin), this._render(e), n.restore(), k(i, (o) => {
        o && o.context.restore();
      });
    }
  }
  _render(e) {
    this.exportable === !1 && ((this._layer || e).tainted = !0);
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e) => e.value === this);
  }
  shouldCancelTouch() {
    const e = this._renderer;
    return !(e.tapToActivate && !e._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
}
class Ah extends Vi {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_childLayers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_children", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _isInteractiveMask() {
    return this.interactiveChildren || super._isInteractiveMask();
  }
  addChild(e) {
    e._parent = this, this._children.push(e), e._layer && this.registerChildLayer(e._layer);
  }
  addChildAt(e, t) {
    e._parent = this, this._children.splice(t, 0, e), e._layer && this.registerChildLayer(e._layer);
  }
  removeChild(e) {
    e._parent = void 0, Pe(this._children, e);
  }
  _render(e) {
    super._render(e);
    const t = this._renderer;
    this.interactive && this.interactiveChildren && ++t._forceInteractive;
    const i = this._layer || e;
    k(this._children, (r) => {
      r.compoundAlpha = this.compoundAlpha * this.alpha, r.render(i);
    }), this.interactive && this.interactiveChildren && --t._forceInteractive;
  }
  registerChildLayer(e) {
    this._childLayers || (this._childLayers = []), ri(this._childLayers, e), this._parent && this._parent.registerChildLayer(e);
  }
  markDirtyLayer(e = !1) {
    super.markDirtyLayer(), e && this._childLayers && k(this._childLayers, (t) => t.dirty = !0);
  }
  _dispose() {
    super._dispose(), this._childLayers && k(this._childLayers, (e) => {
      e.dirty = !0;
    });
  }
}
function J(s, e) {
  s.left = Math.min(s.left, e.x), s.top = Math.min(s.top, e.y), s.right = Math.max(s.right, e.x), s.bottom = Math.max(s.bottom, e.y);
}
class ne {
  colorize(e, t) {
  }
  path(e) {
  }
  addBounds(e) {
  }
}
class Th extends ne {
  colorize(e, t) {
    e.beginPath();
  }
}
class ds extends ne {
  constructor(e) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fillStyle = t !== void 0 ? t : this.color;
  }
}
class Ih extends ne {
  constructor(e) {
    super(), Object.defineProperty(this, "clearShadow", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fill(), this.clearShadow && (e.shadowColor = "", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
  }
}
class Oh extends ne {
  colorize(e, t) {
    e.stroke();
  }
}
class cs extends ne {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "lineJoin", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  colorize(e, t) {
    e.strokeStyle = t !== void 0 ? t : this.color, e.lineWidth = this.width, this.lineJoin && (e.lineJoin = this.lineJoin);
  }
}
class Fh extends ne {
  constructor(e) {
    super(), Object.defineProperty(this, "dash", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.setLineDash(this.dash);
  }
}
class Dh extends ne {
  constructor(e) {
    super(), Object.defineProperty(this, "dashOffset", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.lineDashOffset = this.dashOffset;
  }
}
class Eh extends ne {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    const t = this.x, i = this.y, r = t + this.width, n = i + this.height;
    J(e, { x: t, y: i }), J(e, { x: r, y: i }), J(e, { x: t, y: n }), J(e, { x: r, y: n });
  }
}
class Sh extends ne {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  path(e) {
    e.moveTo(this.x + this.radius, this.y), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e) {
    J(e, { x: this.x - this.radius, y: this.y - this.radius }), J(e, { x: this.x + this.radius, y: this.y + this.radius });
  }
}
class $h extends ne {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radiusX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "radiusY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e) {
    J(e, { x: this.x - this.radiusX, y: this.y - this.radiusY }), J(e, { x: this.x + this.radiusX, y: this.y + this.radiusY });
  }
}
class Bh extends ne {
  constructor(e, t, i, r, n, a) {
    super(), Object.defineProperty(this, "cx", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cy", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "endAngle", { enumerable: !0, configurable: !0, writable: !0, value: n }), Object.defineProperty(this, "anticlockwise", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    this.radius > 0 && e.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e) {
    let t = Xl(this.cx, this.cy, this.startAngle * Kt, this.endAngle * Kt, this.radius);
    J(e, { x: t.left, y: t.top }), J(e, { x: t.right, y: t.bottom });
  }
}
class Lh extends ne {
  constructor(e, t, i, r, n) {
    super(), Object.defineProperty(this, "x1", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y1", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "x2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "y2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: n });
  }
  path(e) {
    this.radius > 0 && e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e) {
  }
}
class Rh extends ne {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.lineTo(this.x, this.y);
  }
  addBounds(e) {
    J(e, { x: this.x, y: this.y });
  }
}
class jh extends ne {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.moveTo(this.x, this.y);
  }
  addBounds(e) {
    J(e, { x: this.x, y: this.y });
  }
}
class Nh extends ne {
  path(e) {
    e.closePath();
  }
}
class Hh extends ne {
  constructor(e, t, i, r, n, a) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "cpX2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "cpY2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: n }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    e.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e) {
    J(e, { x: this.cpX, y: this.cpY }), J(e, { x: this.cpX2, y: this.cpY2 }), J(e, { x: this.toX, y: this.toY });
  }
}
class zh extends ne {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e) {
    J(e, { x: this.cpX, y: this.cpY }), J(e, { x: this.toX, y: this.toY });
  }
}
class Vh extends ne {
  constructor(e, t, i, r, n) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "blur", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "offsetX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "offsetY", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "opacity", { enumerable: !0, configurable: !0, writable: !0, value: n });
  }
  colorize(e, t) {
    this.opacity && (e.fillStyle = this.color), e.shadowColor = this.color, e.shadowBlur = this.blur, e.shadowOffsetX = this.offsetX, e.shadowOffsetY = this.offsetY;
  }
}
class Wh extends ne {
  constructor(e, t, i, r, n) {
    super(), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: n });
  }
  path(e) {
    e.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    J(e, { x: this.x, y: this.y }), J(e, { x: this.width, y: this.height });
  }
}
class Uh extends Vi {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "blendMode", { enumerable: !0, configurable: !0, writable: !0, value: Di.NORMAL }), Object.defineProperty(this, "_hasShadows", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_fillAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e) {
    this._operations.push(e);
  }
  beginFill(e, t = 1) {
    this._fillAlpha = t, e ? e instanceof I ? this._pushOp(new ds(e.toCSS(t))) : (this.isMeasured = !0, this._pushOp(new ds(e))) : this._pushOp(new ds("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new Ih(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new Oh());
  }
  beginPath() {
    this._pushOp(new Th());
  }
  lineStyle(e = 0, t, i = 1, r) {
    this._strokeAlpha = i, t ? t instanceof I ? this._pushOp(new cs(e, t.toCSS(i), r)) : this._pushOp(new cs(e, t, r)) : this._pushOp(new cs(e, "rgba(0, 0, 0, " + i + ")", r));
  }
  setLineDash(e) {
    this._pushOp(new Fh(e || []));
  }
  setLineDashOffset(e = 0) {
    this._pushOp(new Dh(e));
  }
  drawRect(e, t, i, r) {
    this._pushOp(new Eh(e, t, i, r));
  }
  drawCircle(e, t, i) {
    this._pushOp(new Sh(e, t, i));
  }
  drawEllipse(e, t, i, r) {
    this._pushOp(new $h(e, t, i, r));
  }
  arc(e, t, i, r, n, a = !1) {
    this._pushOp(new Bh(e, t, i, r, n, a));
  }
  arcTo(e, t, i, r, n) {
    this._pushOp(new Lh(e, t, i, r, n));
  }
  lineTo(e, t) {
    this._pushOp(new Rh(e, t));
  }
  moveTo(e, t) {
    this._pushOp(new jh(e, t));
  }
  bezierCurveTo(e, t, i, r, n, a) {
    this._pushOp(new Hh(e, t, i, r, n, a));
  }
  quadraticCurveTo(e, t, i, r) {
    this._pushOp(new zh(e, t, i, r));
  }
  closePath() {
    this._pushOp(new Nh());
  }
  shadow(e, t = 0, i = 0, r = 0, n) {
    this._hasShadows = !0, this._pushOp(new Vh(n ? e.toCSS(n) : e.toCSS(this._fillAlpha || this._strokeAlpha), t, i, r));
  }
  image(e, t, i, r, n) {
    this._pushOp(new Wh(e, t, i, r, n));
  }
  svgPath(e) {
    let t = 0, i = 0, r = null, n = null, a = null, o = null;
    const l = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, h = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let f;
    for (; (f = l.exec(e)) !== null; ) {
      const c = f[1], p = f[2], d = [];
      for (; (f = h.exec(p)) !== null; )
        d.push(f[1]);
      switch (c !== "S" && c !== "s" && c !== "C" && c !== "c" && (r = null, n = null), c !== "Q" && c !== "q" && c !== "T" && c !== "t" && (a = null, o = null), c) {
        case "M":
          _e(c, d.length, 2), t = +d[0], i = +d[1], this.moveTo(t, i);
          for (let u = 2; u < d.length; u += 2)
            t = +d[u], i = +d[u + 1], this.lineTo(t, i);
          break;
        case "m":
          _e(c, d.length, 2), t += +d[0], i += +d[1], this.moveTo(t, i);
          for (let u = 2; u < d.length; u += 2)
            t += +d[u], i += +d[u + 1], this.lineTo(t, i);
          break;
        case "L":
          _e(c, d.length, 2);
          for (let u = 0; u < d.length; u += 2)
            t = +d[u], i = +d[u + 1], this.lineTo(t, i);
          break;
        case "l":
          _e(c, d.length, 2);
          for (let u = 0; u < d.length; u += 2)
            t += +d[u], i += +d[u + 1], this.lineTo(t, i);
          break;
        case "H":
          Wt(c, d.length, 1);
          for (let u = 0; u < d.length; ++u)
            t = +d[u], this.lineTo(t, i);
          break;
        case "h":
          Wt(c, d.length, 1);
          for (let u = 0; u < d.length; ++u)
            t += +d[u], this.lineTo(t, i);
          break;
        case "V":
          Wt(c, d.length, 1);
          for (let u = 0; u < d.length; ++u)
            i = +d[u], this.lineTo(t, i);
          break;
        case "v":
          Wt(c, d.length, 1);
          for (let u = 0; u < d.length; ++u)
            i += +d[u], this.lineTo(t, i);
          break;
        case "C":
          _e(c, d.length, 6);
          for (let u = 0; u < d.length; u += 6) {
            const y = +d[u], v = +d[u + 1];
            r = +d[u + 2], n = +d[u + 3], t = +d[u + 4], i = +d[u + 5], this.bezierCurveTo(y, v, r, n, t, i);
          }
          break;
        case "c":
          _e(c, d.length, 6);
          for (let u = 0; u < d.length; u += 6) {
            const y = +d[u] + t, v = +d[u + 1] + i;
            r = +d[u + 2] + t, n = +d[u + 3] + i, t += +d[u + 4], i += +d[u + 5], this.bezierCurveTo(y, v, r, n, t, i);
          }
          break;
        case "S":
          _e(c, d.length, 4), r !== null && n !== null || (r = t, n = i);
          for (let u = 0; u < d.length; u += 4) {
            const y = 2 * t - r, v = 2 * i - n;
            r = +d[u], n = +d[u + 1], t = +d[u + 2], i = +d[u + 3], this.bezierCurveTo(y, v, r, n, t, i);
          }
          break;
        case "s":
          _e(c, d.length, 4), r !== null && n !== null || (r = t, n = i);
          for (let u = 0; u < d.length; u += 4) {
            const y = 2 * t - r, v = 2 * i - n;
            r = +d[u] + t, n = +d[u + 1] + i, t += +d[u + 2], i += +d[u + 3], this.bezierCurveTo(y, v, r, n, t, i);
          }
          break;
        case "Q":
          _e(c, d.length, 4);
          for (let u = 0; u < d.length; u += 4)
            a = +d[u], o = +d[u + 1], t = +d[u + 2], i = +d[u + 3], this.quadraticCurveTo(a, o, t, i);
          break;
        case "q":
          _e(c, d.length, 4);
          for (let u = 0; u < d.length; u += 4)
            a = +d[u] + t, o = +d[u + 1] + i, t += +d[u + 2], i += +d[u + 3], this.quadraticCurveTo(a, o, t, i);
          break;
        case "T":
          _e(c, d.length, 2), a !== null && o !== null || (a = t, o = i);
          for (let u = 0; u < d.length; u += 2)
            a = 2 * t - a, o = 2 * i - o, t = +d[u], i = +d[u + 1], this.quadraticCurveTo(a, o, t, i);
          break;
        case "t":
          _e(c, d.length, 2), a !== null && o !== null || (a = t, o = i);
          for (let u = 0; u < d.length; u += 2)
            a = 2 * t - a, o = 2 * i - o, t += +d[u], i += +d[u + 1], this.quadraticCurveTo(a, o, t, i);
          break;
        case "A":
        case "a":
          const _ = c === "a";
          Mh(d), _e(c, d.length, 7);
          for (let u = 0; u < d.length; u += 7) {
            let y = +d[u + 5], v = +d[u + 6];
            _ && (y += t, v += i);
            const x = wh({ px: t, py: i, rx: +d[u], ry: +d[u + 1], xAxisRotation: +d[u + 2], largeArcFlag: Cr(+d[u + 3]), sweepFlag: Cr(+d[u + 4]), cx: y, cy: v });
            k(x, (w) => {
              this.bezierCurveTo(w.x1, w.y1, w.x2, w.y2, w.x, w.y), t = w.x, i = w.y;
            });
          }
          break;
        case "Z":
        case "z":
          xh(c, d.length, 0), this.closePath();
      }
    }
  }
  _runPath(e) {
    e.beginPath(), k(this._operations, (t) => {
      t.path(e);
    });
  }
  _render(e) {
    super._render(e);
    const t = this._layer || e, i = t.dirty, r = this._isInteractive();
    if (i || r) {
      const n = t.context, a = this._renderer._ghostLayer.context;
      let o;
      i && (n.globalCompositeOperation = this.blendMode, n.beginPath()), r && (a.beginPath(), o = this._getColorId()), k(this._operations, (l) => {
        i && (l.path(n), l.colorize(n, void 0)), r && (l.path(a), l.colorize(a, o));
      });
    }
  }
  renderDetached(e) {
    if (this.visible) {
      this._setMatrix(), e.save();
      const t = this.mask;
      t && (t._setMatrix(), t._transform(e, 1), t._runPath(e), e.clip()), e.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e, 1), this.filter && (e.filter = this.filter), e.globalCompositeOperation = this.blendMode, e.beginPath(), k(this._operations, (i) => {
        i.path(e), i.colorize(e, void 0);
      }), e.restore();
    }
  }
  _addBounds(e) {
    this.visible && this.isMeasured && k(this._operations, (t) => {
      t.addBounds(e);
    });
  }
}
class jn extends Vi {
  constructor(e, t, i) {
    super(e), Object.defineProperty(this, "text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "style", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "textVisible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_textInfo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), this.text = t, this.style = i;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e) {
    this.style.textAlign && (e.textAlign = this.style.textAlign), this.style.direction && (e.direction = this.style.direction), this.style.textBaseline && (e.textBaseline = this.style.textBaseline);
  }
  _prerender(e, t = !1, i = !1) {
    super._render(e);
    const r = e.context, n = this._renderer._ghostLayer.context, a = this.style;
    let o = this._getFontStyle(void 0, i);
    r.font = o, this._isInteractive() && !t && (n.font = o), a.fill && (a.fill instanceof I ? r.fillStyle = a.fill.toCSS(a.fillOpacity != null ? a.fillOpacity : 1) : r.fillStyle = a.fill), a.shadowColor && (e.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e.context.shadowOffsetY = a.shadowOffsetY), this._shared(r), this._isInteractive() && !t && (n.fillStyle = this._getColorId(), this._shared(n));
  }
  _getFontStyle(e, t = !1) {
    const i = this.style;
    let r = [];
    return e && e.fontVariant ? r.push(e.fontVariant) : i.fontVariant && r.push(i.fontVariant), t || (e && e.fontWeight ? r.push(e.fontWeight) : i.fontWeight && r.push(i.fontWeight)), e && e.fontStyle ? r.push(e.fontStyle) : i.fontStyle && r.push(i.fontStyle), e && e.fontSize ? (F(e.fontSize) && (e.fontSize = e.fontSize + "px"), r.push(e.fontSize)) : i.fontSize && (F(i.fontSize) && (i.fontSize = i.fontSize + "px"), r.push(i.fontSize)), e && e.fontFamily ? r.push(e.fontFamily) : i.fontFamily ? r.push(i.fontFamily) : r.length && r.push("Arial"), r.join(" ");
  }
  _render(e) {
    const t = this._layer || e;
    if (this._textInfo || this._measure(t), this.textVisible) {
      const i = this._isInteractive(), r = t.context, n = t.dirty, a = this._renderer._ghostLayer.context;
      r.save(), a.save(), this._prerender(t), k(this._textInfo, (o, l) => {
        k(o.textChunks, (h, f) => {
          if (h.style && (r.save(), a.save(), r.font = h.style, this._isInteractive() && (a.font = h.style)), h.fill && (r.save(), r.fillStyle = h.fill.toCSS()), n && r.fillText(h.text, h.offsetX, o.offsetY + h.offsetY), h.textDecoration == "underline" || h.textDecoration == "line-through") {
            let c, p = 1, d = 1, _ = h.height, u = h.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                u -= h.width;
                break;
              case "center":
                u -= h.width / 2;
            }
            if (h.style)
              switch ($e.getTextStyle(h.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  p = 2;
              }
            _ && (d = _ / 20), c = h.textDecoration == "line-through" ? p + o.offsetY + h.offsetY - h.height / 2 : p + 1.5 * d + o.offsetY + h.offsetY, r.save(), r.beginPath(), h.fill ? r.strokeStyle = h.fill.toCSS() : this.style.fill && this.style.fill instanceof I && (r.strokeStyle = this.style.fill.toCSS()), r.lineWidth = p * d, r.moveTo(u, c), r.lineTo(u + h.width, c), r.stroke(), r.restore();
          }
          i && this.interactive && a.fillText(h.text, h.offsetX, o.offsetY + h.offsetY), h.fill && r.restore(), h.style && (r.restore(), a.restore());
        });
      }), r.restore(), a.restore();
    }
  }
  _addBounds(e) {
    if (this.visible && this.isMeasured) {
      const t = this._measure(this.getLayer());
      J(e, { x: t.left, y: t.top }), J(e, { x: t.right, y: t.bottom });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e) {
    const t = e.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl";
    this._textInfo = [];
    const n = this.style.oversizedBehavior, a = this.style.maxWidth, o = F(a) && n == "truncate", l = F(a) && (n == "wrap" || n == "wrap-no-break");
    t.save(), i.save(), this._prerender(e, !0, this._ignoreFontWeight());
    const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", f = this.text.toString().replace(/\r/g, "").split(/\n/);
    let c, p = !0, d = 0, _ = 0, u = 0;
    k(f, (v, x) => {
      let w;
      for (w = v == "" ? [{ type: "value", text: "" }] : $e.chunk(v, !1, this.style.ignoreFormatting); w.length > 0; ) {
        let P = { offsetY: u, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
        const O = this._measureText(h, t), L = O.actualBoundingBoxAscent + O.actualBoundingBoxDescent;
        let E;
        P.height = L, P.ascent = O.actualBoundingBoxAscent;
        let $, z, N, U = this.style.textDecoration, he = !1, Te = !0, vt = [];
        wn(w, (oe, li) => {
          if (oe.type == "format")
            if (oe.text == "[/]")
              p || (t.restore(), i.restore(), p = !0), $ = void 0, c = void 0, z = void 0, U = this.style.textDecoration, N = void 0, E = oe.text;
            else {
              p || (t.restore(), i.restore());
              let G = $e.getTextStyle(oe.text);
              const ke = this._getFontStyle(G);
              t.save(), i.save(), t.font = ke, c = ke, E = oe.text, G.textDecoration && (U = G.textDecoration), G.fill && ($ = G.fill), G.width && (z = we(G.width)), G.verticalAlign && (N = G.verticalAlign), p = !1;
              const Ie = this._measureText(h, t), wt = Ie.actualBoundingBoxAscent + Ie.actualBoundingBoxDescent;
              wt > P.height && (P.height = wt), Ie.actualBoundingBoxAscent > P.ascent && (P.ascent = Ie.actualBoundingBoxAscent);
            }
          else if (oe.type == "value" && !he) {
            const G = this._measureText(oe.text, t);
            let ke = G.actualBoundingBoxLeft + G.actualBoundingBoxRight;
            if (o) {
              let We = Te || this.style.breakWords || !1;
              const it = this.style.ellipsis || "", Gs = this._measureText(it, t), Zn = Gs.actualBoundingBoxLeft + Gs.actualBoundingBoxRight;
              if (P.width + ke > a) {
                const ea = a - P.width - Zn;
                oe.text = this._truncateText(t, oe.text, ea, We), oe.text += it, he = !0;
              }
            } else if (l && P.width + ke > a) {
              const We = a - P.width, it = this._truncateText(t, oe.text, We, !1, Te && this.style.oversizedBehavior != "wrap-no-break");
              if (it == "")
                return this.textVisible = !0, !1;
              vt = w.slice(li + 1), yi(it) != yi(oe.text) && (vt.unshift({ type: "value", text: oe.text.substr(it.length) }), E && vt.unshift({ type: "format", text: E })), oe.text = yi(it), w = [], he = !0;
            }
            let Ie = 1, wt = 1;
            if (c && z && z > ke) {
              const We = ke / z;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  Ie = We;
                  break;
                case "center":
                  Ie = We, wt = We;
                  break;
                default:
                  wt = We;
              }
              ke = z;
            }
            const Ui = G.actualBoundingBoxAscent + G.actualBoundingBoxDescent;
            Ui > P.height && (P.height = Ui), G.actualBoundingBoxAscent > P.ascent && (P.ascent = G.actualBoundingBoxAscent), P.width += ke, P.left += G.actualBoundingBoxLeft / Ie, P.right += G.actualBoundingBoxRight / wt, P.textChunks.push({ style: c, fill: $, text: oe.text, width: ke, height: Ui, left: G.actualBoundingBoxLeft, right: G.actualBoundingBoxRight, ascent: G.actualBoundingBoxAscent, offsetX: 0, offsetY: 0, textDecoration: U, verticalAlign: N }), Te = !1;
          }
          return !0;
        }), this.style.lineHeight instanceof W ? (P.height *= this.style.lineHeight.value, P.ascent *= this.style.lineHeight.value) : (P.height *= this.style.lineHeight || 1.2, P.ascent *= this.style.lineHeight || 1.2), d < P.left && (d = P.left), _ < P.right && (_ = P.right), this._textInfo.push(P), u += P.height, w = vt || [];
      }
    }), p || (t.restore(), i.restore()), k(this._textInfo, (v, x) => {
      let w = 0;
      k(v.textChunks, (P) => {
        if (P.offsetX = w + P.left - v.left, P.offsetY += v.height - v.height * (this.style.baselineRatio || 0.19), w += P.width, P.verticalAlign)
          switch (P.verticalAlign) {
            case "super":
              P.offsetY -= v.height / 2 - P.height / 2;
              break;
            case "sub":
              P.offsetY += P.height / 2;
          }
      });
    });
    const y = { left: r ? -_ : -d, top: 0, right: r ? d : _, bottom: u };
    if (n !== "none") {
      const v = this._fitRatio(y);
      if (v < 1)
        if (n == "fit")
          F(this.style.minScale) && v < this.style.minScale ? (this.textVisible = !1, y.left = 0, y.top = 0, y.right = 0, y.bottom = 0) : (this._originalScale && this._originalScale != 1 || (this._originalScale = this.scale), this.scale = v, this.textVisible = !0);
        else if (n == "hide")
          this.textVisible = !1, y.left = 0, y.top = 0, y.right = 0, y.bottom = 0;
        else {
          switch (this.style.textAlign) {
            case "right":
            case "end":
              y.left = -a, y.right = 0;
              break;
            case "center":
              y.left = -a / 2, y.right = a / 2;
              break;
            default:
              y.left = 0, y.right = a;
          }
          this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
        }
      else
        this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
    }
    return t.restore(), i.restore(), y;
  }
  _fitRatio(e) {
    const t = this.style.maxWidth, i = this.style.maxHeight;
    if (!F(t) && !F(i))
      return 1;
    const r = e.right - e.left, n = e.bottom - e.top;
    return Math.min(t / r || 1, i / n || 1);
  }
  _truncateText(e, t, i, r = !1, n = !0) {
    let a;
    do {
      if (r)
        t = t.slice(0, -1);
      else {
        let l = t.replace(/[^,;:!?\\\/\s]+[,;:!?\\\/\s]*$/g, "");
        if (l == "" && n)
          r = !0;
        else {
          if (l == "")
            return t;
          t = l;
        }
      }
      const o = this._measureText(t, e);
      a = o.actualBoundingBoxLeft + o.actualBoundingBoxRight;
    } while (a > i && t != "");
    return t;
  }
  _measureText(e, t) {
    let i = t.measureText(e), r = {};
    if (i.actualBoundingBoxAscent == null) {
      const a = document.createElement("div");
      a.innerText = e, a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-1000000px;", a.style.fontFamily = this.style.fontFamily || "", a.style.fontSize = this.style.fontSize + "", document.body.appendChild(a);
      const o = a.getBoundingClientRect();
      document.body.removeChild(a);
      const l = o.height, h = i.width;
      r = { actualBoundingBoxAscent: l, actualBoundingBoxDescent: 0, actualBoundingBoxLeft: 0, actualBoundingBoxRight: h, fontBoundingBoxAscent: l, fontBoundingBoxDescent: 0, width: h };
    } else
      r = { actualBoundingBoxAscent: i.actualBoundingBoxAscent, actualBoundingBoxDescent: i.actualBoundingBoxDescent, actualBoundingBoxLeft: i.actualBoundingBoxLeft, actualBoundingBoxRight: i.actualBoundingBoxRight, fontBoundingBoxAscent: i.actualBoundingBoxAscent, fontBoundingBoxDescent: i.actualBoundingBoxDescent, width: i.width };
    const n = i.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        r.actualBoundingBoxLeft = n, r.actualBoundingBoxRight = 0;
        break;
      case "center":
        r.actualBoundingBoxLeft = n / 2, r.actualBoundingBoxRight = n / 2;
        break;
      default:
        r.actualBoundingBoxLeft = 0, r.actualBoundingBoxRight = n;
    }
    return r;
  }
}
class Yh {
  constructor() {
    Object.defineProperty(this, "fill", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fillOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textAlign", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontFamily", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontWeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontVariant", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textDecoration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "lineHeight", { enumerable: !0, configurable: !0, writable: !0, value: oi(120) }), Object.defineProperty(this, "baselineRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.19 }), Object.defineProperty(this, "direction", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textBaseline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "oversizedBehavior", { enumerable: !0, configurable: !0, writable: !0, value: "none" }), Object.defineProperty(this, "breakWords", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "ellipsis", { enumerable: !0, configurable: !0, writable: !0, value: "…" }), Object.defineProperty(this, "maxWidth", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "maxHeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "minScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ignoreFormatting", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class qh extends jn {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", { enumerable: !0, configurable: !0, writable: !0, value: "circular" }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "inside", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "orientation", { enumerable: !0, configurable: !0, writable: !0, value: "auto" }), Object.defineProperty(this, "kerning", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_textReversed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _render(e) {
    this.textType === "circular" ? this._renderCircular(e) : super._render(e);
  }
  _renderCircular(e) {
    if (this.textVisible) {
      const t = this._layer || e;
      this._prerender(t);
      const i = this._isInteractive(), r = t.context, n = t.dirty, a = this._renderer._ghostLayer.context;
      r.save(), i && a.save(), this._textInfo || this._measure(t);
      let o = this.radius || 0, l = this.startAngle || 0, h = 0, f = this.orientation, c = f == "auto" ? "auto" : f == "inward";
      const p = this.inside, d = this.style.textAlign || "left", _ = this.kerning || 0;
      let u = d == "left" ? 1 : -1;
      const y = !this._textReversed;
      if (c == "auto") {
        let v = 0, x = 0;
        k(this._textInfo, (w, P) => {
          const O = l + w.width / (o - w.height) / 2 * -u;
          O > v && (v = O);
        }), x = d == "left" ? (v + h / 2) * Kt : d == "right" ? (v - h / 2) * Kt : l * Kt, x = Kl(x), c = x >= 270 || x <= 90;
      }
      c == 1 && y && (this._textInfo.reverse(), this._textReversed = !0), k(this._textInfo, (v, x) => {
        const w = v.height;
        p || (o += w), (u == -1 && c || u == 1 && !c) && y && v.textChunks.reverse();
        let P = l;
        h = 0, d == "center" && (P += v.width / (o - w) / 2 * -u, h = P - l), P += Math.PI * (c ? 0 : 1), r.save(), i && a.save(), r.rotate(P), i && a.rotate(P);
        let O = 0;
        k(v.textChunks, (L, E) => {
          const $ = L.text, z = L.width;
          O = z / 2 / (o - w) * u, r.rotate(O), i && a.rotate(O), L.style && (r.save(), a.save(), r.font = L.style, i && (a.font = L.style)), L.fill && (r.save(), r.fillStyle = L.fill.toCSS()), r.textBaseline = "middle", r.textAlign = "center", i && (a.textBaseline = "middle", a.textAlign = "center"), n && r.fillText($, 0, (c ? 1 : -1) * (0 - o + w / 2)), i && a.fillText($, 0, (c ? 1 : -1) * (0 - o + w / 2)), L.fill && r.restore(), L.style && (r.restore(), a.restore()), O = (z / 2 + _) / (o - w) * u, r.rotate(O), i && a.rotate(O);
        }), r.restore(), i && a.restore(), p && (o -= w);
      }), r.restore(), i && a.restore();
    }
  }
  _measure(e) {
    return this.textType === "circular" ? this._measureCircular(e) : super._measure(e);
  }
  _measureCircular(e) {
    const t = e.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl", n = this.style.oversizedBehavior, a = this.style.maxWidth, o = F(a) && n == "truncate", l = this.style.ellipsis || "";
    let h;
    this.textVisible = !0, this._textInfo = [], this._textReversed = !1, t.save(), i.save(), this._prerender(e, !0);
    const f = this.text.toString().replace(/\r/g, "").split(/\n/);
    let c = !0, p = 0, d = 0;
    return k(f, (_, u) => {
      let y, v, x, w = $e.chunk(_, !1, this.style.ignoreFormatting), P = { offsetY: d, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
      k(w, (O, L) => {
        if (O.type == "format") {
          if (O.text == "[/]")
            c || (t.restore(), i.restore(), c = !0), v = void 0, y = void 0, x = void 0;
          else {
            let E = $e.getTextStyle(O.text);
            const $ = this._getFontStyle(E);
            t.save(), i.save(), t.font = $, y = $, E.fill && (v = E.fill), E.width && (x = we(E.width)), c = !1;
          }
          o && (h = this._measureText(l, t));
        } else if (O.type == "value") {
          const E = O.text.match(/./gu) || [];
          r && E.reverse();
          for (let $ = 0; $ < E.length; $++) {
            const z = E[$], N = this._measureText(z, t);
            let U = N.width;
            y && x && x > U && (U = x);
            const he = N.actualBoundingBoxAscent + N.actualBoundingBoxDescent;
            if (he > P.height && (P.height = he), N.actualBoundingBoxAscent > P.ascent && (P.ascent = N.actualBoundingBoxAscent), P.width += U, P.left += N.actualBoundingBoxLeft, P.right += N.actualBoundingBoxRight, P.textChunks.push({ style: y, fill: v, text: z, width: U, height: he + N.actualBoundingBoxDescent, left: N.actualBoundingBoxLeft, right: N.actualBoundingBoxRight, ascent: N.actualBoundingBoxAscent, offsetX: 0, offsetY: he, textDecoration: void 0 }), p += U, o) {
              h || (h = this._measureText(l, t));
              const Te = h.actualBoundingBoxLeft + h.actualBoundingBoxRight;
              if (p += Te, p + Te > a) {
                P.textChunks.length == 1 ? this.textVisible = !1 : (P.width += Te, P.left += h.actualBoundingBoxLeft, P.right += h.actualBoundingBoxRight, P.textChunks.push({ style: y, fill: v, text: l, width: Te, height: he + h.actualBoundingBoxDescent, left: h.actualBoundingBoxLeft, right: h.actualBoundingBoxRight, ascent: h.actualBoundingBoxAscent, offsetX: 0, offsetY: he, textDecoration: void 0 }));
                break;
              }
            }
            if (r)
              break;
          }
        }
      }), this.style.lineHeight instanceof W ? P.height *= this.style.lineHeight.value : P.height *= this.style.lineHeight || 1.2, this._textInfo.push(P), d += P.height;
    }), c || (t.restore(), i.restore()), n == "hide" && p > a && (this.textVisible = !1), k(this._textInfo, (_) => {
      k(_.textChunks, (u) => {
        u.offsetY += Math.round((_.height - u.height + (_.ascent - u.ascent)) / 2);
      });
    }), t.restore(), i.restore(), { left: 0, top: 0, right: 0, bottom: 0 };
  }
}
class Gh extends Vi {
  constructor(e, t) {
    super(e), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_imageMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && Ut(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e = 0, t = 0;
      this.width && (e = this.width), this.height && (t = this.height), this._localBounds = { left: 0, top: 0, right: e, bottom: t }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e) {
    if (super._render(e), this.image) {
      const t = this._layer || e;
      if (this.tainted === void 0 && (this.tainted = Ar(this.image), t.tainted = !0), this.tainted && this._renderer._omitTainted)
        return;
      if (t.dirty) {
        this.shadowColor && (t.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (t.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (t.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (t.context.shadowOffsetY = this.shadowOffsetY);
        const i = this.width || this.image.naturalWidth, r = this.height || this.image.naturalHeight;
        t.context.drawImage(this.image, 0, 0, i, r);
      }
      if (this.interactive && this._isInteractive()) {
        const i = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(i, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e) {
    if (this._imageMask === void 0) {
      const t = this.width || e.naturalWidth, i = this.height || e.naturalHeight, r = document.createElement("canvas");
      r.width = t, r.height = i;
      const n = r.getContext("2d");
      n.imageSmoothingEnabled = !1, n.fillStyle = this._getColorId(), n.fillRect(0, 0, t, i), Ar(e) || (n.globalCompositeOperation = "destination-in", n.drawImage(e, 0, 0, t, i)), this._imageMask = r;
    }
    return this._imageMask;
  }
}
class Kh {
  constructor(e, t, i, r) {
    Object.defineProperty(this, "event", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "originalPoint", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "point", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "bbox", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "simulated", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "native", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), ut("touchevents") && e instanceof Touch ? this.id = e.identifier : this.id = null;
  }
}
class Xh extends bl {
  constructor(e) {
    if (super(), Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "_layerDom", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "layers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_dirtyLayers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "defaultLayer", { enumerable: !0, configurable: !0, writable: !0, value: this.getLayer(0) }), Object.defineProperty(this, "_ghostLayer", { enumerable: !0, configurable: !0, writable: !0, value: new Qh() }), Object.defineProperty(this, "_patternCanvas", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("canvas") }), Object.defineProperty(this, "_patternContext", { enumerable: !0, configurable: !0, writable: !0, value: this._patternCanvas.getContext("2d") }), Object.defineProperty(this, "_domWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_domHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_canvasWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_canvasHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interactionsEnabled", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_colorMap", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_forceInteractive", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_omitTainted", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_hovering", { enumerable: !0, configurable: !0, writable: !0, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_dragging", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_mousedown", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_lastPointerMoveEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tapToActivate", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "tapToActivateTimeout", { enumerable: !0, configurable: !0, writable: !0, value: 3e3 }), Object.defineProperty(this, "_touchActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_touchActiveTimeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.resolution = e ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.appendChild(this._layerDom), this._disposers.push(new re(() => {
      q(this._events, (t, i) => {
        i.disposer.dispose();
      }), k(this.layers, (t) => {
        Ut(t.view), t.exportableView && Ut(t.exportableView);
      }), Ut(this._ghostLayer.view), Ut(this._patternCanvas);
    })), this._disposers.push(kn(() => {
      e == null && (this.resolution = window.devicePixelRatio);
    })), ut("touchevents")) {
      const t = (i) => {
        this._dragging.length !== 0 && wn(this._dragging, (r) => !r.value.shouldCancelTouch() || (i.preventDefault(), !1)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(ie(window, "touchstart", t, { passive: !1 })), this._disposers.push(ie(this.view, "touchstart", t, { passive: !1 })), this._disposers.push(ie(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, { passive: !0 })), this._disposers.push(ie(window, "click", (i) => {
        this._touchActive = !1;
      }, { passive: !0 })), this._disposers.push(ie(this.view, "click", (i) => {
        window.setTimeout(() => {
          this._touchActive = !0, this._delayTouchDeactivate();
        }, 100);
      }, { passive: !0 }));
    }
    ut("wheelevents") && this._disposers.push(ie(this.view, "wheel", (t) => {
      let i = !1;
      this._hovering.forEach((r) => {
        if (r.wheelable)
          return i = !0, !1;
      }), i && t.preventDefault();
    }, { passive: !1 }));
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = !1;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e) {
    e ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e, t, i, r) {
    return this.defaultLayer.context.createLinearGradient(e, t, i, r);
  }
  createRadialGradient(e, t, i, r, n, a) {
    return this.defaultLayer.context.createRadialGradient(e, t, i, r, n, a);
  }
  createPattern(e, t, i, r, n) {
    return this._patternCanvas.width = r, this._patternCanvas.height = n, this._patternContext.clearRect(0, 0, r, n), t.renderDetached(this._patternContext), e.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i);
  }
  makeContainer() {
    return new Ah(this);
  }
  makeGraphics() {
    return new Uh(this);
  }
  makeText(e, t) {
    return new jn(this, e, t);
  }
  makeTextStyle() {
    return new Yh();
  }
  makeRadialText(e, t) {
    return new qh(this, e, t);
  }
  makePicture(e) {
    return new Gh(this, e);
  }
  resizeLayer(e) {
    e.resize(this._canvasWidth, this._canvasHeight, this._domWidth, this._domHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._canvasWidth, this._canvasHeight, this._domWidth, this._domHeight, this.resolution);
  }
  resize(e, t, i, r) {
    this._canvasWidth = e, this._canvasHeight = t, this._domWidth = i, this._domHeight = r, k(this.layers, (n) => {
      n && (n.dirty = !0, this.resizeLayer(n));
    }), this.resizeGhost(), this.view.style.width = i + "px", this.view.style.height = r + "px";
  }
  createDetachedLayer(e = !1) {
    const t = document.createElement("canvas"), i = t.getContext("2d", { willReadFrequently: e }), r = new Jh(t, i);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", r;
  }
  getLayerByOrder(e) {
    const t = this.layers, i = t.length;
    for (let r = 0; r < i; r++) {
      const n = t[r];
      if (n.order == e)
        return n;
    }
  }
  getLayer(e, t = !0) {
    let i = this.getLayerByOrder(e);
    if (i)
      return i;
    const r = this.createDetachedLayer(e == 99);
    r.order = e, r.visible = t, r.visible && this.resizeLayer(r);
    const n = this.layers;
    n.push(r), n.sort((l, h) => l.order > h.order ? 1 : l.order < h.order ? -1 : 0);
    const a = n.length;
    let o;
    for (let l = Oi(n, r) + 1; l < a; l++)
      if (n[l].visible) {
        o = n[l];
        break;
      }
    return r.visible && (o === void 0 ? this._layerDom.appendChild(r.view) : this._layerDom.insertBefore(r.view, o.view)), r;
  }
  render(e) {
    if (this._dirtyLayers.length = 0, k(this.layers, (t) => {
      t && t.dirty && t.visible && (this._dirtyLayers.push(t), t.clear());
    }), this._ghostLayer.clear(), e.render(this.defaultLayer), this._ghostLayer.context.restore(), k(this.layers, (t) => {
      if (t) {
        const i = t.context;
        i.beginPath(), i.moveTo(0, 0), i.stroke();
      }
    }), k(this._dirtyLayers, (t) => {
      t.context.restore(), t.dirty = !1;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const { events: t, target: i, native: r } = this._lastPointerMoveEvent;
      k(t, (n) => {
        this._dispatchGlobalMousemove(n, i, r);
      });
    }
  }
  paintId(e) {
    const t = Ph(++this._colorId), i = I.fromHex(t).toCSS();
    return this._colorMap[i] = e, i;
  }
  _removeObject(e) {
    e._colorId !== void 0 && delete this._colorMap[e._colorId];
  }
  _adjustBoundingBox(e) {
    const t = this._ghostLayer.margin;
    return new DOMRect(e.left - t.left, e.top - t.top, e.width + t.left + t.right, e.height + t.top + t.bottom);
  }
  getEvent(e, t = !0) {
    const i = this.view.getBoundingClientRect(), r = { x: e.clientX || 0, y: e.clientY || 0 }, n = { x: r.x - (t ? i.left : 0), y: r.y - (t ? i.top : 0) };
    return new Kh(e, r, n, this._adjustBoundingBox(i));
  }
  _getHitTarget(e, t, i) {
    if (t.width === 0 || t.height === 0 || e.x < t.left || e.x > t.right || e.y < t.top || e.y > t.bottom || !i || !this._layerDom.contains(i))
      return;
    const r = this._ghostLayer.getImageData(e, t);
    if (r.data[0] === 0 && r.data[1] === 0 && r.data[2] === 0)
      return !1;
    const n = I.fromRGB(r.data[0], r.data[1], r.data[2]).toCSS();
    return this._colorMap[n];
  }
  _withEvents(e, t) {
    const i = this._events[e];
    if (i !== void 0) {
      i.dispatching = !0;
      try {
        t(i);
      } finally {
        i.dispatching = !1, i.cleanup && (i.cleanup = !1, Hi(i.callbacks, (r) => !r.disposed), i.callbacks.length === 0 && (i.disposer.dispose(), delete this._events[e]));
      }
    }
  }
  _dispatchEventAll(e, t) {
    this.interactionsEnabled && this._withEvents(e, (i) => {
      k(i.callbacks, (r) => {
        r.disposed || r.callback.call(r.context, t);
      });
    });
  }
  _dispatchEvent(e, t, i) {
    if (!this.interactionsEnabled)
      return !1;
    let r = !1;
    return this._withEvents(e, (n) => {
      k(n.callbacks, (a) => {
        a.disposed || a.object !== t || (a.callback.call(a.context, i), r = !0);
      });
    }), r;
  }
  _dispatchMousedown(e, t) {
    const i = e.button;
    if (i != 0 && i != 2 && i != 1 && i !== void 0)
      return;
    const r = this.getEvent(e), n = this._getHitTarget(r.originalPoint, r.bbox, t);
    if (n) {
      const a = r.id;
      let o = !1;
      gi(n, (l) => {
        const h = { id: a, value: l };
        return this._mousedown.push(h), !o && this._dispatchEvent("pointerdown", l, r) && (o = !0, this._dragging.some((f) => f.value === l && f.id === a) || this._dragging.push(h)), !0;
      });
    }
  }
  _dispatchGlobalMousemove(e, t, i) {
    const r = this.getEvent(e), n = this._getHitTarget(r.originalPoint, r.bbox, t);
    r.native = i, n ? (this._hovering.forEach((a) => {
      a.contains(n) || (this._hovering.delete(a), a.cursorOverStyle && ns(document.body, "cursor", a._replacedCursorStyle), this._dispatchEvent("pointerout", a, r));
    }), r.native && gi(n, (a) => (this._hovering.has(a) || (this._hovering.add(a), a.cursorOverStyle && (a._replacedCursorStyle = Al(document.body, "cursor"), ns(document.body, "cursor", a.cursorOverStyle)), this._dispatchEvent("pointerover", a, r)), !0))) : (this._hovering.forEach((a) => {
      a.cursorOverStyle && ns(document.body, "cursor", a._replacedCursorStyle), this._dispatchEvent("pointerout", a, r);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", r);
  }
  _dispatchGlobalMouseup(e, t) {
    const i = this.getEvent(e);
    i.native = t, this._dispatchEventAll("globalpointerup", i);
  }
  _dispatchDragMove(e) {
    if (this._dragging.length !== 0) {
      const t = this.getEvent(e), i = t.id;
      this._dragging.forEach((r) => {
        r.id === i && this._dispatchEvent("pointermove", r.value, t);
      });
    }
  }
  _dispatchDragEnd(e, t) {
    const i = e.button;
    let r;
    if (i == 0 || i === void 0)
      r = "click";
    else if (i == 2)
      r = "rightclick";
    else {
      if (i != 1)
        return;
      r = "middleclick";
    }
    const n = this.getEvent(e), a = n.id;
    if (this._mousedown.length !== 0) {
      const o = this._getHitTarget(n.originalPoint, n.bbox, t);
      o && this._mousedown.forEach((l) => {
        l.id === a && l.value.contains(o) && this._dispatchEvent(r, l.value, n);
      }), this._mousedown.length = 0;
    }
    this._dragging.length !== 0 && (this._dragging.forEach((o) => {
      o.id === a && this._dispatchEvent("pointerup", o.value, n);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && gi(r, (n) => !this._dispatchEvent("dblclick", n, i));
  }
  _dispatchWheel(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && gi(r, (n) => !this._dispatchEvent("wheel", n, i));
  }
  _makeSharedEvent(e, t) {
    if (this._listeners[e] === void 0) {
      const i = t();
      this._listeners[e] = new Mn(() => {
        delete this._listeners[e], i.dispose();
      });
    }
    return this._listeners[e].increment();
  }
  _onPointerEvent(e, t) {
    let i = !1, r = null;
    function n() {
      r = null, i = !1;
    }
    return new xe([new re(() => {
      r !== null && clearTimeout(r), n();
    }), ie(this.view, Ps(e), (a) => {
      i = !0, r !== null && clearTimeout(r), r = window.setTimeout(n, 0);
    }), kh(window, e, (a, o) => {
      r !== null && (clearTimeout(r), r = null), t(a, o, i), i = !1;
    })]);
  }
  _initEvent(e) {
    switch (e) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const t = (i, r, n) => {
            this._lastPointerMoveEvent = { events: i, target: r, native: n }, k(i, (a) => {
              this._dispatchGlobalMousemove(a, r, n);
            });
          };
          return new xe([this._onPointerEvent("pointerdown", t), this._onPointerEvent("pointermove", t)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const t = this._onPointerEvent("pointerup", (r, n, a) => {
            k(r, (o) => {
              this._dispatchGlobalMouseup(o, a);
            }), this._lastPointerMoveEvent = { events: r, target: n, native: a };
          }), i = this._onPointerEvent("pointercancel", (r, n, a) => {
            k(r, (o) => {
              this._dispatchGlobalMouseup(o, a);
            }), this._lastPointerMoveEvent = { events: r, target: n, native: a };
          });
          return new re(() => {
            t.dispose(), i.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const t = this._onPointerEvent("pointerdown", (a, o) => {
            k(a, (l) => {
              this._dispatchMousedown(l, o);
            });
          }), i = this._onPointerEvent("pointermove", (a) => {
            k(a, (o) => {
              this._dispatchDragMove(o);
            });
          }), r = this._onPointerEvent("pointerup", (a, o) => {
            k(a, (l) => {
              this._dispatchDragEnd(l, o);
            });
          }), n = this._onPointerEvent("pointercancel", (a, o) => {
            k(a, (l) => {
              this._dispatchDragEnd(l, o);
            });
          });
          return new re(() => {
            t.dispose(), i.dispose(), r.dispose(), n.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (t, i) => {
          k(t, (r) => {
            this._dispatchDoubleClick(r, i);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => ie(window, Ps("wheel"), (t) => {
          this._dispatchWheel(t, Cn(t));
        }, { passive: !1 }));
    }
  }
  _addEvent(e, t, i, r) {
    let n = this._events[t];
    n === void 0 && (n = this._events[t] = { disposer: this._initEvent(t), callbacks: [], dispatching: !1, cleanup: !1 });
    const a = { object: e, context: r, callback: i, disposed: !1 };
    return n.callbacks.push(a), new re(() => {
      a.disposed = !0, n.dispatching ? n.cleanup = !0 : (Pe(n.callbacks, a), n.callbacks.length === 0 && (n.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e, t) {
    this.render(e), t || (t = {});
    let i = this.resolution, r = Math.floor(this._canvasWidth * this.resolution), n = Math.floor(this._canvasHeight * this.resolution);
    if (t.minWidth && t.minWidth > r) {
      let d = t.minWidth / r;
      d > i && (i = d * this.resolution);
    }
    if (t.minHeight && t.minHeight > n) {
      let d = t.minHeight / n;
      d > i && (i = d * this.resolution);
    }
    if (t.maxWidth && t.maxWidth < r) {
      let d = t.maxWidth / r;
      d < i && (i = d * this.resolution);
    }
    if (t.maxHeight && t.maxHeight > n) {
      let d = t.maxHeight / n;
      d < i && (i = d * this.resolution);
    }
    t.maintainPixelRatio && (i /= this.resolution);
    const a = [];
    let o = !1;
    const l = document.createElement("canvas");
    i != this.resolution && (o = !0, r = r * i / this.resolution, n = n * i / this.resolution), l.width = r, l.height = n, l.style.position = "fixed", l.style.top = "-10000px", this.view.appendChild(l), a.push(l);
    const h = l.getContext("2d");
    let f = 0, c = 0, p = !1;
    return k(this.layers, (d) => {
      if (d && d.visible && (d.tainted || o)) {
        p = !0, d.exportableView = d.view, d.exportableContext = d.context, d.view = document.createElement("canvas"), d.view.style.position = "fixed", d.view.style.top = "-10000px", this.view.appendChild(d.view), a.push(d.view);
        let _ = 0, u = 0;
        d.margin && (_ += d.margin.left || 0 + d.margin.right || 0, u += d.margin.top || 0 + d.margin.bottom || 0), d.view.width = r + _, d.view.height = n + u, d.context = d.view.getContext("2d"), d.dirty = !0, d.scale = i;
      }
    }), p && (this._omitTainted = !0, this.render(e), this._omitTainted = !1), k(this.layers, (d) => {
      if (d && d.visible) {
        let _ = 0, u = 0;
        d.margin && (_ = -(d.margin.left || 0) * this.resolution, u = -(d.margin.top || 0) * this.resolution), h.drawImage(d.view, _, u), d.exportableView && (d.view = d.exportableView, d.exportableView = void 0), d.exportableContext && (d.context = d.exportableContext, d.exportableContext = void 0), f < d.view.clientWidth && (f = d.view.clientWidth), c < d.view.clientHeight && (c = d.view.clientHeight), d.scale = void 0;
      }
    }), l.style.width = f + "px", l.style.height = c + "px", k(a, (d) => {
      d.style.position = "", d.style.top = "", this.view.removeChild(d);
    }), l;
  }
}
class Qh {
  constructor() {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", { alpha: !1, willReadFrequently: !0 }), this.context.imageSmoothingEnabled = !1, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e, t, i, r, n) {
    e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e * n), this._height = Math.floor(t * n), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  getImageData(e, t) {
    return this.context.getImageData(Math.round((e.x - t.left) / t.width * this._width), Math.round((e.y - t.top) / t.height * this._height), 1, 1);
  }
  setMargin(e) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, k(e, (t) => {
      t.margin && (this.margin.left = Math.max(this.margin.left, t.margin.left), this.margin.right = Math.max(this.margin.right, t.margin.right), this.margin.top = Math.max(this.margin.top, t.margin.top), this.margin.bottom = Math.max(this.margin.bottom, t.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
}
class Jh {
  constructor(e, t) {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "order", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "dirty", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportableView", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "exportableContext", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), this.view = e, this.context = t;
  }
  resize(e, t, i, r, n) {
    this.width != null && (e = this.width, i = this.width), this.height != null && (t = this.height, r = this.height), this.margin ? (e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e * n), this._height = Math.floor(t * n), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
}
function Tr(s, e) {
  s == null ? requestAnimationFrame(e) : setTimeout(() => {
    requestAnimationFrame(e);
  }, 1e3 / s);
}
class zs {
  constructor(e, t = {}, i) {
    if (Object.defineProperty(this, "dom", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_inner", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyBounds", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPositions", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_ticker", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_tickers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_updateTick", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new Bt() }), Object.defineProperty(this, "animationTime", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_animations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rootContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tooltipContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipContainerSettings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltip", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "language", { enumerable: !0, configurable: !0, writable: !0, value: bh.new(this, {}) }), Object.defineProperty(this, "locale", { enumerable: !0, configurable: !0, writable: !0, value: Rn }), Object.defineProperty(this, "utc", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "timezone", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fps", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "numberFormatter", { enumerable: !0, configurable: !0, writable: !0, value: ph.new(this, {}) }), Object.defineProperty(this, "dateFormatter", { enumerable: !0, configurable: !0, writable: !0, value: fh.new(this, {}) }), Object.defineProperty(this, "durationFormatter", { enumerable: !0, configurable: !0, writable: !0, value: mh.new(this, {}) }), Object.defineProperty(this, "tabindex", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_tabindexes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_a11yD", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusedSprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isShift", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_keyboardDragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_readerAlertElement", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_logo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDiv", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "nonce", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interfaceColors", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "verticalLayout", { enumerable: !0, configurable: !0, writable: !0, value: Dt.new(this, {}) }), Object.defineProperty(this, "horizontalLayout", { enumerable: !0, configurable: !0, writable: !0, value: Ft.new(this, {}) }), Object.defineProperty(this, "gridLayout", { enumerable: !0, configurable: !0, writable: !0, value: gt.new(this, {}) }), Object.defineProperty(this, "_paused", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "autoResize", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_fontHash", { enumerable: !0, configurable: !0, writable: !0, value: "" }), Object.defineProperty(this, "_isDisposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_resizeSensorDisposer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltips", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_htmlElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_htmlEnabledContainers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), !i)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let r, n;
    if (this._settings = t, t.accessible == 0 && (this._a11yD = !0), t.useSafeResolution == null && (t.useSafeResolution = !0), t.useSafeResolution && (r = Fl()), this._renderer = new Xh(r), n = e instanceof HTMLElement ? e : document.getElementById(e), k(Ee.rootElements, (l) => {
      if (l.dom === n)
        throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = xi.new(this, {}), n === null)
      throw new Error("Could not find HTML element with id `" + e + "`");
    this.dom = n;
    let a = document.createElement("div");
    a.style.position = "relative", a.style.height = "100%", n.appendChild(a);
    const o = t.tooltipContainerBounds;
    o && (this._tooltipContainerSettings = o), this._inner = a, this._updateComputedStyles(), Ee.rootElements.push(this);
  }
  static new(e, t) {
    const i = new zs(e, t, !0);
    return i._init(), i;
  }
  moveDOM(e) {
    let t;
    if (t = e instanceof HTMLElement ? e : document.getElementById(e), t) {
      for (; this.dom.childNodes.length > 0; )
        t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e = this.tooltipContainer.children.push(Me.new(this, { interactive: !0, interactiveChildren: !1, position: "absolute", setStateOnChildren: !0, paddingTop: 9, paddingRight: 9, paddingBottom: 9, paddingLeft: 9, scale: 0.6, y: oi(100), centerY: X, tooltipText: "Created using amCharts 5", tooltipX: X, cursorOverStyle: "pointer", background: Ot.new(this, { fill: At(4671320), fillOpacity: 0, tooltipY: 5 }) })), t = Zt.new(this, { pointerOrientation: "horizontal", paddingTop: 4, paddingRight: 7, paddingBottom: 4, paddingLeft: 7 });
      t.label.setAll({ fontSize: 12 }), t.get("background").setAll({ fill: this.interfaceColors.get("background"), stroke: this.interfaceColors.get("grid"), strokeOpacity: 0.3 }), e.set("tooltip", t), e.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e.states.create("hover", {}), e.children.push(He.new(this, { stroke: At(13421772), strokeWidth: 3, svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6" })).states.create("hover", { stroke: At(3976191) }), e.children.push(He.new(this, { stroke: At(8947848), strokeWidth: 3, svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0" })).states.create("hover", { stroke: At(4671320) }), this._logo = e, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e) {
    return this._settings.calculateSize ? this._settings.calculateSize(e) : { width: e.width, height: e.height };
  }
  _init() {
    const e = this._renderer, t = this._getRealSize(), i = this._getCalculatedSize(t), r = Math.floor(i.width), n = Math.floor(i.height), a = Math.floor(t.width), o = Math.floor(t.height), l = Me.new(this, { visible: !0, width: a, height: o });
    this._rootContainer = l, this._rootContainer._defaultThemes.push(hh.new(this));
    const h = l.children.push(Me.new(this, { visible: !0, width: X, height: X }));
    this.container = h, e.resize(a, o, r, n), this._inner.appendChild(e.view), this._initResizeSensor();
    const f = document.createElement("div");
    if (this._htmlElementContainer = f, f.className = "am5-html-container", f.style.position = "absolute", f.style.pointerEvents = "none", this._tooltipContainerSettings || (f.style.overflow = "hidden"), this._inner.appendChild(f), this._a11yD !== !0) {
      const c = document.createElement("div");
      c.className = "am5-reader-container", c.setAttribute("role", "alert"), c.style.position = "absolute", c.style.width = "1px", c.style.height = "1px", c.style.overflow = "hidden", c.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = c, this._inner.appendChild(this._readerAlertElement);
      const p = document.createElement("div");
      p.className = "am5-focus-container", p.style.position = "absolute", p.style.pointerEvents = "none", p.style.top = "0px", p.style.left = "0px", p.style.overflow = "hidden", p.style.width = r + "px", p.style.height = n + "px", p.setAttribute("role", "application"), Ct(p, !1), this._focusElementContainer = p, this._inner.appendChild(this._focusElementContainer);
      const d = document.createElement("div");
      this._tooltipElementContainer = d, d.className = "am5-tooltip-container", this._inner.appendChild(d), ut("keyboardevents") && (this._disposers.push(ie(window, "keydown", (_) => {
        _.keyCode == 16 ? this._isShift = !0 : _.keyCode == 9 && (this._isShift = _.shiftKey);
      })), this._disposers.push(ie(window, "keyup", (_) => {
        _.keyCode == 16 && (this._isShift = !1);
      })), this._disposers.push(ie(p, "keydown", (_) => {
        const u = this._focusedSprite;
        if (u) {
          _.keyCode == 27 && (kl(), this._focusedSprite = void 0);
          let y = 0, v = 0;
          switch (_.keyCode) {
            case 13:
              _.preventDefault();
              const x = e.getEvent(new MouseEvent("click"));
              return void u.events.dispatch("click", { type: "click", originalEvent: x.event, point: x.point, simulated: !0, target: u });
            case 37:
              y = -6;
              break;
            case 39:
              y = 6;
              break;
            case 38:
              v = -6;
              break;
            case 40:
              v = 6;
              break;
            default:
              return;
          }
          if (y != 0 || v != 0) {
            if (_.preventDefault(), !u.isDragging()) {
              this._keyboardDragPoint = { x: 0, y: 0 };
              const P = e.getEvent(new MouseEvent("mousedown", { clientX: 0, clientY: 0 }));
              u.events.isEnabled("pointerdown") && u.events.dispatch("pointerdown", { type: "pointerdown", originalEvent: P.event, point: P.point, simulated: !0, target: u });
            }
            const x = this._keyboardDragPoint;
            x.x += y, x.y += v;
            const w = e.getEvent(new MouseEvent("mousemove", { clientX: x.x, clientY: x.y }), !1);
            u.events.isEnabled("globalpointermove") && u.events.dispatch("globalpointermove", { type: "globalpointermove", originalEvent: w.event, point: w.point, simulated: !0, target: u });
          }
        }
      })), this._disposers.push(ie(p, "keyup", (_) => {
        if (this._focusedSprite) {
          const u = this._focusedSprite, y = _.keyCode;
          switch (y) {
            case 37:
            case 39:
            case 38:
            case 40:
              if (u.isDragging()) {
                const v = this._keyboardDragPoint, x = e.getEvent(new MouseEvent("mouseup", { clientX: v.x, clientY: v.y }));
                return u.events.isEnabled("globalpointerup") && u.events.dispatch("globalpointerup", { type: "globalpointerup", originalEvent: x.event, point: x.point, simulated: !0, target: u }), void (this._keyboardDragPoint = void 0);
              }
              if (u.get("focusableGroup")) {
                const v = u.get("focusableGroup"), x = this._tabindexes.filter((O) => O.get("focusableGroup") == v);
                let w = x.indexOf(u);
                const P = x.length - 1;
                w += y == 39 || y == 40 ? 1 : -1, w < 0 ? w = P : w > P && (w = 0), Cl(x[w].getPrivate("focusElement").dom);
              }
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new uh(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e = this._getRealSize(), t = this._getCalculatedSize(e), i = Math.floor(t.width), r = Math.floor(t.height);
    if (i > 0 && r > 0) {
      const n = Math.floor(e.width), a = Math.floor(e.height), o = this._htmlElementContainer;
      if (o.style.width = i + "px", o.style.height = r + "px", this._a11yD !== !0) {
        const h = this._focusElementContainer;
        h.style.width = i + "px", h.style.height = r + "px";
      }
      this._renderer.resize(n, a, i, r);
      const l = this._rootContainer;
      l.setPrivate("width", n), l.setPrivate("height", a), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = !1);
  }
  _runTickers(e) {
    k(this._tickers, (t) => {
      t(e);
    });
  }
  _runAnimations(e) {
    Hi(this._animations, (t) => t._runAnimation(e));
  }
  _runDirties() {
    let e = {};
    for (; this._isDirtyParents; )
      this._isDirtyParents = !1, ge(this._dirtyParents).forEach((a) => {
        const o = this._dirtyParents[a];
        delete this._dirtyParents[a], o.isDisposed() || (e[o.uid] = o, o._prepareChildren());
      });
    ge(e).forEach((a) => {
      e[a]._updateChildren();
    });
    const t = [];
    ge(this._dirty).forEach((a) => {
      const o = this._dirty[a];
      o.isDisposed() ? delete this._dirty[o.uid] : (t.push(o), o._beforeChanged());
    }), t.forEach((a) => {
      a._changed(), delete this._dirty[a.uid], a._clearDirty();
    }), this._isDirty = !1;
    const i = {}, r = [];
    ge(this._dirtyBounds).forEach((a) => {
      const o = this._dirtyBounds[a];
      delete this._dirtyBounds[a], o.isDisposed() || (i[o.uid] = o.depth(), r.push(o));
    }), this._positionHTMLElements(), r.sort((a, o) => pt(i[o.uid], i[a.uid])), r.forEach((a) => {
      a._updateBounds();
    });
    const n = this._dirtyPositions;
    ge(n).forEach((a) => {
      const o = n[a];
      delete n[a], o.isDisposed() || o._updatePosition();
    }), t.forEach((a) => {
      a._afterChanged();
    });
  }
  _renderFrame(e) {
    return !this._updateTick || (this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", { type: "framestarted", target: this, timestamp: e }), this._checkComputedStyles(), this._runTickers(e), this._runAnimations(e), this._runDirties(), this._render(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", { type: "frameended", target: this, timestamp: e }), this._tickers.length === 0 && this._animations.length === 0 && !this._isDirty);
  }
  _runTicker(e, t) {
    this.isDisposed() || (this.animationTime = e, this._renderFrame(e) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Tr(this.fps, this._ticker)));
  }
  _runTickerNow(e = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e;
      for (; ; ) {
        const i = performance.now();
        if (i >= t) {
          this.animationTime = null;
          break;
        }
        if (this.animationTime = i, this._renderFrame(i)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    this._ticker === null && (this.animationTime = null, this._ticker = (e) => {
      this._runTicker(e);
    }, Tr(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e) {
    this._updateTick = e, e && this._startTicker();
  }
  _addDirtyEntity(e) {
    this._dirty[e.uid] === void 0 && (this._isDirty = !0, this._dirty[e.uid] = e, this._startTicker());
  }
  _addDirtyParent(e) {
    this._dirtyParents[e.uid] === void 0 && (this._isDirty = !0, this._isDirtyParents = !0, this._dirtyParents[e.uid] = e, this._startTicker());
  }
  _addDirtyBounds(e) {
    this._dirtyBounds[e.uid] === void 0 && (this._isDirty = !0, this._dirtyBounds[e.uid] = e, this._startTicker());
  }
  _addDirtyPosition(e) {
    this._dirtyPositions[e.uid] === void 0 && (this._isDirty = !0, this._dirtyPositions[e.uid] = e, this._startTicker());
  }
  _addAnimation(e) {
    this._animations.indexOf(e) === -1 && (this._animations.push(e), this._startTicker());
  }
  _markDirty() {
    this._isDirty = !0;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = !0, this._startTicker();
    });
  }
  eachFrame(e) {
    return this._tickers.push(e), this._startTicker(), new re(() => {
      Pe(this._tickers, e);
    });
  }
  markDirtyGlobal(e) {
    e || (e = this.container), e.walkChildren((t) => {
      t instanceof Me && this.markDirtyGlobal(t), t.markDirty(), t.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = !0, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), k(this._disposers, (e) => {
      e.dispose();
    }), this._inner && Pl(this._inner), Xe(Ee.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e) {
    this._a11yD !== !0 && (this._readerAlertElement.innerHTML = _r(e));
  }
  setThemes(e) {
    this._rootContainer.set("themes", e);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i = this.interfaceColors;
    i && i._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e = this._tooltipContainerSettings, t = this._rootContainer.children.push(Me.new(this, { position: "absolute", isMeasured: !1, width: X, height: X, layer: e ? 35 : 30, layerMargin: e || void 0 }));
      this.tooltipContainer = t;
      const i = Zt.new(this, {});
      this.container.set("tooltip", i), i.hide(0), this._tooltip = i;
    }
  }
  _registerTabindexOrder(e) {
    this._a11yD != 1 && (e.get("focusable") ? ri(this._tabindexes, e) : Xe(this._tabindexes, e), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e) {
    this._a11yD != 1 && (Xe(this._tabindexes, e), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (this._a11yD == 1)
      return;
    this._tabindexes.sort((t, i) => {
      const r = t.get("tabindexOrder", 0), n = i.get("tabindexOrder", 0);
      return r == n ? 0 : r > n ? 1 : -1;
    });
    const e = [];
    k(this._tabindexes, (t, i) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i, t) : this._makeFocusElement(i, t);
      const r = t.get("focusableGroup");
      r && (e.indexOf(r) !== -1 ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e.push(r));
    });
  }
  _updateCurrentFocus() {
    this._a11yD != 1 && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e, t) {
    if (this._a11yD == 1 || (t || (t = e.getPrivate("focusElement").dom), !t))
      return;
    e.get("visible") && e.get("role") != "tooltip" && !e.isHidden() ? t.getAttribute("tabindex") != "-1" && t.setAttribute("tabindex", "" + this.tabindex) : t.removeAttribute("tabindex");
    const i = e.get("role");
    i ? t.setAttribute("role", i) : t.removeAttribute("role");
    const r = e.get("ariaLabel");
    if (r) {
      const d = Ei(e, r);
      t.setAttribute("aria-label", d);
    } else
      t.removeAttribute("aria-label");
    const n = e.get("ariaLive");
    n ? t.setAttribute("aria-live", n) : t.removeAttribute("aria-live");
    const a = e.get("ariaChecked");
    a != null ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked"), e.get("ariaHidden") ? t.setAttribute("aria-hidden", "hidden") : t.removeAttribute("aria-hidden");
    const o = e.get("ariaOrientation");
    o ? t.setAttribute("aria-orientation", o) : t.removeAttribute("aria-orientation");
    const l = e.get("ariaValueNow");
    l ? t.setAttribute("aria-valuenow", l) : t.removeAttribute("aria-valuenow");
    const h = e.get("ariaValueMin");
    h ? t.setAttribute("aria-valuemin", h) : t.removeAttribute("aria-valuemin");
    const f = e.get("ariaValueMax");
    f ? t.setAttribute("aria-valuemax", f) : t.removeAttribute("aria-valuemax");
    const c = e.get("ariaValueText");
    c ? t.setAttribute("aria-valuetext", c) : t.removeAttribute("aria-valuetext");
    const p = e.get("ariaControls");
    p ? t.setAttribute("aria-controls", p) : t.removeAttribute("aria-controls");
  }
  _makeFocusElement(e, t) {
    if (t.getPrivate("focusElement") || this._a11yD == 1)
      return;
    const i = document.createElement("div");
    t.get("role") != "tooltip" && (i.tabIndex = this.tabindex), i.style.position = "absolute", Ct(i, !1);
    const r = [];
    t.setPrivate("focusElement", { dom: i, disposers: r }), this._decorateFocusElement(t), r.push(ie(i, "focus", (n) => {
      this._handleFocus(n, e);
    })), r.push(ie(i, "blur", (n) => {
      this._handleBlur(n, e);
    })), this._moveFocusElement(e, t);
  }
  _removeFocusElement(e) {
    if (this._a11yD == 1)
      return;
    Xe(this._tabindexes, e);
    const t = e.getPrivate("focusElement");
    t && (this._focusElementContainer.removeChild(t.dom), k(t.disposers, (i) => {
      i.dispose();
    }));
  }
  _hideFocusElement(e) {
    this._a11yD != 1 && (e.getPrivate("focusElement").dom.style.display = "none");
  }
  _moveFocusElement(e, t) {
    if (this._a11yD == 1)
      return;
    const i = this._focusElementContainer, r = t.getPrivate("focusElement").dom;
    if (r === this._focusElementContainer.children[e])
      return;
    const n = this._focusElementContainer.children[e + 1];
    n ? i.insertBefore(r, n) : i.append(r);
  }
  _positionFocusElement(e) {
    if (this._a11yD == 1)
      return;
    const t = e.globalBounds();
    let i = t.right == t.left ? e.width() : t.right - t.left, r = t.top == t.bottom ? e.height() : t.bottom - t.top, n = t.left - 2, a = t.top - 2;
    i < 0 && (n += i, i = Math.abs(i)), r < 0 && (a += r, r = Math.abs(r));
    const o = e.getPrivate("focusElement").dom;
    o.style.top = a + "px", o.style.left = n + "px", o.style.width = i + 4 + "px", o.style.height = r + 4 + "px";
  }
  _handleFocus(e, t) {
    if (this._a11yD == 1)
      return;
    const i = this._tabindexes[t];
    i.isVisibleDeep() ? (this._positionFocusElement(i), this._focusedSprite = i, i.events.isEnabled("focus") && i.events.dispatch("focus", { type: "focus", originalEvent: e, target: i })) : this._focusNext(e.target, this._isShift ? -1 : 1);
  }
  _focusNext(e, t) {
    if (this._a11yD == 1)
      return;
    const i = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let r = i.indexOf(e) + t;
    r < 0 ? r = i.length - 1 : r >= i.length && (r = 0), i[r].focus();
  }
  _handleBlur(e, t) {
    if (this._a11yD == 1)
      return;
    const i = this._focusedSprite;
    i && i.events.isEnabled("blur") && i.events.dispatch("blur", { type: "blur", originalEvent: e, target: i }), this._focusedSprite = void 0;
  }
  updateTooltip(e) {
    if (this._a11yD == 1)
      return;
    const t = _r(e._getText());
    let i = e.getPrivate("tooltipElement");
    e.get("role") == "tooltip" && t != "" ? (i || (i = this._makeTooltipElement(e)), i.innerHTML != t && (i.innerHTML = t)) : i && (i.remove(), e.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e) {
    const t = this._tooltipElementContainer, i = document.createElement("div");
    return i.style.position = "absolute", i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.clip = "rect(1px, 1px, 1px, 1px)", Ct(i, !1), this._decorateFocusElement(e, i), t.append(i), e.setPrivate("tooltipElement", i), i;
  }
  _removeTooltipElement(e) {
    if (this._a11yD == 1)
      return;
    const t = e.getPrivate("tooltipElement");
    if (t) {
      const i = t.parentElement;
      i && i.removeChild(t);
    }
  }
  _invalidateAccessibility(e) {
    if (this._a11yD == 1)
      return;
    this._focusElementDirty = !0;
    const t = e.getPrivate("focusElement");
    e.get("focusable") ? t && (this._decorateFocusElement(e), this._positionFocusElement(e)) : t && this._removeFocusElement(e);
  }
  focused(e) {
    return this._focusedSprite === e;
  }
  documentPointToRoot(e) {
    const t = this.dom.getBoundingClientRect();
    return { x: e.x - t.left, y: e.y - t.top };
  }
  rootPointToDocument(e) {
    const t = this.dom.getBoundingClientRect();
    return { x: e.x + t.left, y: e.y + t.top };
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _updateComputedStyles() {
    const e = window.getComputedStyle(this.dom);
    let t = "";
    q(e, (r, n) => {
      St(r) && r.match(/^font/) && (t += n);
    });
    const i = t != this._fontHash;
    return i && (this._fontHash = t), i;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e) {
    e instanceof Me ? e.children.each((t) => {
      this._invalidateLabelBounds(t);
    }) : e instanceof Jt && e.markDirtyBounds();
  }
  _hasLicense() {
    for (let e = 0; e < Ee.licenses.length; e++)
      if (Ee.licenses[e].match(/^AM5C.{5,}/i))
        return !0;
    return !1;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", !0);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e) {
    this._renderer.debugGhostView = e;
  }
  set tapToActivate(e) {
    this._renderer.tapToActivate = e;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e) {
    this._renderer.tapToActivateTimeout = e;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e) {
    const t = this._htmlElementContainer, i = document.createElement("div");
    return e.setPrivate("htmlElement", i), i.style.position = "absolute", i.style.overflow = "auto", i.style.boxSizing = "border-box", Ct(i, e.get("interactive", !1)), e.events.isEnabled("click") && (Ct(i, !0), this._disposers.push(ie(i, "click", (r) => {
      const n = this._renderer.getEvent(r);
      e.events.dispatch("click", { type: "click", originalEvent: n.event, point: n.point, simulated: !1, target: e });
    }))), this._positionHTMLElement(e), t.append(i), ri(this._htmlEnabledContainers, e), i;
  }
  _positionHTMLElements() {
    k(this._htmlEnabledContainers, (e) => {
      this._positionHTMLElement(e);
    });
  }
  _positionHTMLElement(e) {
    const t = e.getPrivate("htmlElement");
    if (t) {
      k(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (f) => {
        const c = e.get(f);
        t.style[f] = c ? c + "px" : "";
      });
      const i = e.compositeOpacity();
      setTimeout(() => {
        t.style.opacity = i + "";
      }, 10);
      const r = e.isVisibleDeep();
      r && (t.style.display = "block");
      const n = e.globalBounds();
      t.style.top = n.top + "px", t.style.left = n.left + "px";
      const a = e.get("width"), o = e.get("height");
      let l = 0, h = 0;
      if (a && (l = e.width()), o && (h = e.height()), a && o)
        e.removePrivate("minWidth"), e.removePrivate("minHeight");
      else {
        t.style.position = "fixed", t.style.width = "", t.style.height = "";
        const f = t.getBoundingClientRect();
        t.style.position = "absolute", l = f.width, h = f.height, e._adjustedLocalBounds = { left: 0, right: 0, top: 0, bottom: 0 }, e.setPrivate("minWidth", l), e.setPrivate("minHeight", h);
      }
      l > 0 && (t.style.minWidth = l + "px"), h > 0 && (t.style.minHeight = h + "px"), r && i != 0 || (t.style.display = "none");
    }
  }
  _setHTMLContent(e, t) {
    let i = e.getPrivate("htmlElement");
    i || (i = this._makeHTMLElement(e)), i.innerHTML != t && (i.innerHTML = t);
  }
  _removeHTMLContent(e) {
    let t = e.getPrivate("htmlElement");
    t && this._htmlElementContainer.removeChild(t), Xe(this._htmlEnabledContainers, e);
  }
}
eh("AM5C241025748");
const Ir = "en-us", Vs = /* @__PURE__ */ new Map([["ar", () => import("./ar2-X8TcZRpq.js")], ["bg-bg", () => import("./bg_BG2-TOtKx3C8.js")], ["bs-ba", () => import("./bs_BA2-oxZzmKTS.js")], ["ca-es", () => import("./ca_ES2-NcQmDygT.js")], ["cs-cz", () => import("./cs_CZ2-AewHOooD.js")], ["da-dk", () => import("./da_DK2-Bnd8enOu.js")], ["de-de", () => import("./de_DE2-6m-H_GCA.js")], ["de-ch", () => import("./de_CH2-20mUNPcR.js")], ["el-gr", () => import("./el_GR2-Po2FrqBx.js")], ["en-us", () => import("./en_US2-rmaKYp-9.js")], ["en-ca", () => import("./en_CA2-rmaKYp-9.js")], ["es-es", () => import("./es_ES2-6ongbmKs.js")], ["et-ee", () => import("./et_EE2-v8QcV81Z.js")], ["fi-fi", () => import("./fi_FI2-o7F7S6-l.js")], ["fr-fr", () => import("./fr_FR2-SV23Z7N_.js")], ["he-il", () => import("./he_IL2-_En4tUJY.js")], ["hr-hr", () => import("./hr_HR2-7FvsfCo4.js")], ["hu-hu", () => import("./hu_HU2-tQfSVckw.js")], ["id-id", () => import("./id_ID2-t3GHvkXq.js")], ["it-it", () => import("./it_IT2-1EjT3Rkh.js")], ["ja-jp", () => import("./ja_JP2-MWZAeVM_.js")], ["ko-kr", () => import("./ko_KR2-WDPEsLve.js")], ["lt-lt", () => import("./lt_LT2-ycau7lTR.js")], ["lv-lv", () => import("./lv_LV2-VsLf47bB.js")], ["nb-no", () => import("./nb_NO2-qxcha-HM.js")], ["nl-nl", () => import("./nl_NL2-23Sa9Z8P.js")], ["pl-pl", () => import("./pl_PL2-G7L_Z5Pn.js")], ["pt-br", () => import("./pt_BR2-B5-nQNeA.js")], ["pt-pt", () => import("./pt_PT2-MgO8nSuV.js")], ["ro-ro", () => import("./ro_RO2-0-6jUCkh.js")], ["ru-ru", () => import("./ru_RU2-S_nXcSRN.js")], ["sk-sk", () => import("./sk_SK2-wz336u-p.js")], ["sl-sl", () => import("./sl_SL2-Snrvh6Ul.js")], ["sr-rs", () => import("./sr_RS2-ox0iV2wk.js")], ["sv-se", () => import("./sv_SE2-NqM7i_80.js")], ["th-th", () => import("./th_TH2-V09pN4h3.js")], ["tr-tr", () => import("./tr_TR2-H4w6HPac.js")], ["uk-ua", () => import("./uk_UA2-rKhbSLar.js")], ["vi-vn", () => import("./vi_VN2-qqHJ8lQ4.js")], ["zh-cn", () => import("./zh_Hans2-mouAXmWe.js")], ["zh-hk", () => import("./zh_Hant2-PyUOlesJ.js")], ["zh-tw", () => import("./zh_Hant2-PyUOlesJ.js")]]);
function Zh(s) {
  const e = s.split("-")[0].toLowerCase();
  let t = null;
  for (const i of Vs.keys())
    if (i.startsWith(e)) {
      t = i;
      break;
    }
  return t;
}
function ed(s) {
  return s ? Vs.has(s.toLowerCase()) ? s.toLowerCase() : Zh(s) || Ir : Ir;
}
async function td(s, e = ba()) {
  const t = zs.new(s);
  return t.locale = (await Vs.get(ed(e))()).default, t;
}
const Nn = ["#7ABEE5", "#B39BD5", "#F8AE83", "#92E6E4", "#FBC487", "#EE967A", "#CEA2D6", "#89D594", "#CEE68F", "#F1A6D5"].map((s) => At(s)), id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRoot: td,
  esriChartColorSet: Nn
}, Symbol.toStringTag, { value: "Module" })), Z = "geoscene-feature-media", ce = { base: Z, mediaContainer: `${Z}__container`, mediaItemContainer: `${Z}__item-container`, mediaItem: `${Z}__item`, mediaItemText: `${Z}__item-text`, mediaItemTitle: `${Z}__item-title`, mediaItemCaption: `${Z}__item-caption`, mediaNavigation: `${Z}__item-navigation`, mediaPagination: `${Z}__pagination`, mediaPaginationText: `${Z}__pagination-text`, mediaPrevious: `${Z}__previous`, mediaPreviousIconLTR: `${Z}__previous-icon`, mediaPreviousIconRTL: `${Z}__previous-icon--rtl`, mediaNext: `${Z}__next`, mediaNextIconLTR: `${Z}__next-icon`, mediaNextIconRTL: `${Z}__next-icon--rtl`, mediaChart: `${Z}__chart`, mediaPaginationButton: `${Z}__pagination-button`, mediaPaginationIcon: `${Z}__pagination-icon`, mediaChartRendered: `${Z}__chart--rendered` }, us = 15, qe = "category", jt = "value", sd = "rgba(50, 50, 50, 1)", rd = 250, nd = 500, ad = 200;
let ue = class extends Be {
  constructor(e, t) {
    super(e, t), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new dt(), this.messages = null, this._disposeChart = (i) => {
      var r;
      (r = this._chartRootMap.get(i)) == null || r.dispose(), this._chartRootMap.delete(i);
    }, this._createChart = async (i) => {
      const { destroyed: r, viewModel: n } = this;
      if (r || !n || !i)
        return;
      const { createRoot: a } = await Promise.resolve().then(() => id), o = await a(i);
      this._chartRootMap.set(i, o), this._renderChart({ mediaInfo: n.activeMediaInfo, root: o });
    };
  }
  initialize() {
    this._featureElementInfo = new Ri(), this.addHandles([D(() => {
      var e, t;
      return [(e = this.viewModel) == null ? void 0 : e.activeMediaInfo, (t = this.viewModel) == null ? void 0 : t.activeMediaInfoIndex];
    }, () => this._setupMediaRefreshTimer(), ae), D(() => {
      var e, t;
      return [(e = this.viewModel) == null ? void 0 : e.description, (t = this.viewModel) == null ? void 0 : t.title];
    }, () => this._setupFeatureElementInfo(), ae)]);
  }
  loadDependencies() {
    return ni({ icon: () => import("./calcite-icon-qQRYmWQk.js") });
  }
  destroy() {
    var e;
    this._clearMediaRefreshTimer(), (e = this._featureElementInfo) == null || e.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e) {
    this.viewModel.attributes = e;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e) {
    this.viewModel.activeMediaInfoIndex = e;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e) {
    this.viewModel.fieldInfoMap = e;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e) {
    this.viewModel.layer = e;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e) {
    this.viewModel.mediaInfos = e;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e) {
    this.viewModel.popupTemplate = e;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e) {
    this.viewModel.relatedInfos = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    var e;
    return b("div", { bind: this, class: ce.base, onkeyup: this._handleMediaKeyup }, (e = this._featureElementInfo) == null ? void 0 : e.render(), this.renderMedia());
  }
  renderMedia() {
    const { formattedMediaInfoCount: e, activeMediaInfoIndex: t } = this.viewModel, i = this.renderMediaText();
    return e ? b("div", { key: "media-element-container", class: ce.mediaContainer }, this.renderMediaInfo(), b("div", { class: ce.mediaNavigation }, i, b("div", { class: ce.mediaPagination }, this.renderMediaPageButton("previous"), b("span", { class: ce.mediaPaginationText }, De(this.messages.pageText, { index: t + 1, total: e })), this.renderMediaPageButton("next")))) : null;
  }
  renderMediaText() {
    const { activeMediaInfo: e } = this.viewModel;
    if (!e)
      return null;
    const t = e && e.title ? b("div", { key: "media-title", class: ce.mediaItemTitle, innerHTML: e.title }) : null, i = e && e.caption ? b("div", { key: "media-caption", class: ce.mediaItemCaption, innerHTML: e.caption }) : null;
    return t || i ? b("div", { key: "media-text", class: ce.mediaItemText }, t, i) : null;
  }
  renderImageMediaInfo(e) {
    const { _refreshIntervalInfo: t } = this, { activeMediaInfoIndex: i, formattedMediaInfoCount: r } = this.viewModel, { value: n, refreshInterval: a, altText: o, title: l, type: h } = e, { sourceURL: f, linkURL: c } = n, p = cn(c ?? void 0) ? "_blank" : "_self", d = p === "_blank" ? "noreferrer" : "", _ = a ? t : null, u = _ ? _.timestamp : 0, y = _ ? _.sourceURL : f, v = b("img", { alt: o || l, key: `media-${h}-${i}-${r}-${u}`, src: y ?? void 0 });
    return (c ? b("a", { title: l, href: c, rel: d, target: p }, v) : null) ?? v;
  }
  renderChartMediaInfo(e) {
    const { activeMediaInfoIndex: t, formattedMediaInfoCount: i } = this.viewModel;
    return b("div", { key: `media-${e.type}-${t}-${i}`, bind: this, class: ce.mediaChart, afterCreate: this._createChart, afterRemoved: this._disposeChart });
  }
  renderMediaInfoType() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? e.type === "image" ? this.renderImageMediaInfo(e) : e.type.includes("chart") ? this.renderChartMediaInfo(e) : null : null;
  }
  renderMediaInfo() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? b("div", { key: "media-container", class: ce.mediaItemContainer }, b("div", { key: "media-item-container", class: ce.mediaItem }, this.renderMediaInfoType())) : null;
  }
  renderMediaPageButton(e) {
    if (this.viewModel.formattedMediaInfoCount < 2)
      return null;
    const t = e === "previous", i = t ? this.messages.previous : this.messages.next, r = t ? "chevron-left" : "chevron-right", n = t ? "media-previous" : "media-next", a = t ? this._previous : this._next;
    return b("button", { type: "button", key: n, title: i, "aria-label": i, tabIndex: 0, class: ce.mediaPaginationButton, bind: this, onclick: a }, b("calcite-icon", { class: ce.mediaPaginationIcon, scale: "s", icon: r }));
  }
  _setupFeatureElementInfo() {
    var i;
    const { description: e, title: t } = this;
    (i = this._featureElementInfo) == null || i.set({ description: e, title: t });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel)
      return;
    const { isAggregate: e, layer: t } = this.viewModel;
    return e && (t != null && t.featureReduction) && "renderer" in t.featureReduction ? t.featureReduction.renderer : t == null ? void 0 : t.renderer;
  }
  async _getRendererColors() {
    const { colorAm5: e } = await import("./chartCommon-_J2mmGua.js"), t = /* @__PURE__ */ new Map(), i = this._getRenderer(), r = "default";
    if (!i)
      return t;
    const n = await Uo(i);
    return n.delete(r), Array.from(n.values()).every((a) => (a == null ? void 0 : a.length) === 1) && Array.from(n.keys()).forEach((a) => {
      var l, h;
      const o = (h = (l = n.get(a)) == null ? void 0 : l[0]) == null ? void 0 : h.toCss(!0);
      o && t.set(a, e(o));
    }), t;
  }
  _handleMediaKeyup(e) {
    const t = Mt(e);
    t === "ArrowLeft" && (e.stopPropagation(), this.viewModel.previous()), t === "ArrowRight" && (e.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && !!this.viewModel.abilities.chartAnimation && !Eo();
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? rd : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? nd : 0;
  }
  async _renderChart(e) {
    const { root: t, mediaInfo: i } = e, { value: r, type: n } = i, { ResponsiveThemeAm5: a, DarkThemeAm5: o, AnimatedThemeAm5: l, ColorSetAm5: h, ThemeAm5: f } = await import("./chartCommon-_J2mmGua.js"), c = f.new(t);
    c.rule("ColorSet").set("colors", Nn);
    const p = [a.new(t), c];
    _s() && p.push(o.new(t)), this._canAnimateChart() && p.push(l.new(t)), t.setThemes(p);
    const d = await this._getRendererColors(), _ = h.new(t, {}), u = r.series.map((y, v) => {
      const x = d.get(y.fieldName) || _.getIndex(v);
      return { [qe]: y.tooltip, [jt]: y.value, columnSettings: { fill: x, stroke: x } };
    }).filter((y) => n !== "pie-chart" || y.value != null && y.value > 0);
    n === "pie-chart" ? this._createPieChart(e, u) : this._createXYChart(e, u);
  }
  _getDirection() {
    return ft(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!ft(this.container);
  }
  async _customizeChartTooltip(e, t = "horizontal") {
    var r;
    const { colorAm5: i } = await import("./chartCommon-_J2mmGua.js");
    e.setAll({ pointerOrientation: t }), (r = e.get("background")) == null || r.setAll({ stroke: i(sd) }), e.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: ad });
  }
  async _createPieChart(e, t) {
    const { TooltipAm5: i } = await import("./chartCommon-_J2mmGua.js"), { PieChartAm5: r, PieSeriesAm5: n } = await import("./pieChart-FcXd-1Vh.js"), { mediaInfo: a, root: o } = e, { title: l } = a, h = 5, f = (a == null ? void 0 : a.altText) || (a == null ? void 0 : a.title) || "", c = o.container.children.push(r.new(o, { ariaLabel: f, focusable: !0, paddingBottom: h, paddingTop: h, paddingLeft: h, paddingRight: h })), p = `{category}: {valuePercentTotal.formatNumber('0.00')}%
 ({value})`, d = i.new(o, { labelText: p }), _ = c.series.push(n.new(o, { name: l, valueField: jt, categoryField: qe, tooltip: d }));
    _.ticks.template.set("forceHidden", !0), _.labels.template.set("forceHidden", !0), _.slices.template.states.create("active", { shiftRadius: h }), this._customizeChartTooltip(d), _.slices.template.setAll({ ariaLabel: p, focusable: !0, templateField: "columnSettings" }), _.data.setAll(t), _.appear(this._getChartSeriesAnimationMS()), c.appear(this._getChartAnimationMS()), c.root.dom.classList.toggle(ce.mediaChartRendered, !0);
  }
  _getMinSeriesValue(e) {
    let t = 0;
    return e.forEach((i) => t = Math.min(i.value, t)), t;
  }
  async _createColumnChart(e, t, i) {
    const { TooltipAm5: r, ScrollbarAm5: n } = await import("./chartCommon-_J2mmGua.js"), { CategoryAxisAm5: a, AxisRendererXAm5: o, ValueAxisAm5: l, AxisRendererYAm5: h, ColumnSeriesAm5: f } = await import("./xyChart-toHMG3ru.js"), { mediaInfo: c, root: p } = t, { value: d, title: _ } = c;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u = e.xAxes.push(a.new(p, { renderer: o.new(p, { inversed: this._isInversed() }), categoryField: qe }));
    u.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const y = e.yAxes.push(l.new(p, { renderer: h.new(p, { inside: !1 }), min: this._getMinSeriesValue(d.series) }));
    y.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const v = "{categoryX}", x = r.new(p, { labelText: v }), w = e.series.push(f.new(p, { name: _, xAxis: u, yAxis: y, valueYField: jt, categoryXField: qe, tooltip: x }));
    this._customizeChartTooltip(x), w.columns.template.setAll({ ariaLabel: v, focusable: !0, templateField: "columnSettings" }), d.series.length > us && e.set("scrollbarX", n.new(p, { orientation: "horizontal" })), u.data.setAll(i), w.data.setAll(i), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e, t, i) {
    const { TooltipAm5: r, ScrollbarAm5: n } = await import("./chartCommon-_J2mmGua.js"), { CategoryAxisAm5: a, AxisRendererXAm5: o, ValueAxisAm5: l, AxisRendererYAm5: h, ColumnSeriesAm5: f } = await import("./xyChart-toHMG3ru.js"), { mediaInfo: c, root: p } = t, { value: d, title: _ } = c;
    e.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const u = e.yAxes.push(a.new(p, { renderer: h.new(p, { inversed: !0 }), categoryField: qe }));
    u.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const y = e.xAxes.push(l.new(p, { renderer: o.new(p, { inside: !1, inversed: this._isInversed() }), min: this._getMinSeriesValue(d.series) }));
    y.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const v = "{categoryY}", x = r.new(p, { labelText: v }), w = e.series.push(f.new(p, { name: _, xAxis: y, yAxis: u, valueXField: jt, categoryYField: qe, tooltip: x }));
    this._customizeChartTooltip(x, "vertical"), w.columns.template.setAll({ ariaLabel: v, focusable: !0, templateField: "columnSettings" }), d.series.length > us && e.set("scrollbarY", n.new(p, { orientation: "vertical" })), u.data.setAll(i), w.data.setAll(i), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e, t, i) {
    const { TooltipAm5: r, ScrollbarAm5: n } = await import("./chartCommon-_J2mmGua.js"), { CategoryAxisAm5: a, AxisRendererXAm5: o, ValueAxisAm5: l, AxisRendererYAm5: h, LineSeriesAm5: f } = await import("./xyChart-toHMG3ru.js"), { root: c, mediaInfo: p } = t, { value: d, title: _ } = p;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u = e.xAxes.push(a.new(c, { renderer: o.new(c, { inversed: this._isInversed() }), categoryField: qe }));
    u.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const y = e.yAxes.push(l.new(c, { renderer: h.new(c, { inside: !1 }), min: this._getMinSeriesValue(d.series) }));
    y.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const v = "{categoryX}", x = r.new(c, { labelText: v }), w = e.series.push(f.new(c, { name: _, xAxis: u, yAxis: y, valueYField: jt, categoryXField: qe, tooltip: x }));
    this._customizeChartTooltip(x, "vertical"), d.series.length > us && e.set("scrollbarX", n.new(c, { orientation: "horizontal" })), u.data.setAll(i), w.data.setAll(i), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e, t) {
    const { XYChartAm5: i, XYCursorAm5: r } = await import("./xyChart-toHMG3ru.js"), { root: n, mediaInfo: a } = e, { type: o } = a, l = (a == null ? void 0 : a.altText) || (a == null ? void 0 : a.title) || "", h = n.container.children.push(i.new(n, { ariaLabel: l, focusable: !0, panX: !0, panY: !0 }));
    h.set("cursor", r.new(n, {})), o === "column-chart" && await this._createColumnChart(h, e, t), o === "bar-chart" && await this._createBarChart(h, e, t), o === "line-chart" && await this._createLineChart(h, e, t), h.root.dom.classList.toggle(ce.mediaChartRendered, !0);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e } = this;
    e && (clearTimeout(e), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e) {
    const t = Date.now();
    this._refreshIntervalInfo = { timestamp: t, sourceURL: e && this._getImageSource(e, t) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e } = this.viewModel;
    e && e.type === "image" && e.refreshInterval && this._setRefreshTimeout(e);
  }
  _setRefreshTimeout(e) {
    const { refreshInterval: t, value: i } = e;
    if (!t)
      return;
    const r = 6e4 * t;
    this._updateMediaInfoTimestamp(i.sourceURL);
    const n = setInterval(() => {
      this._updateMediaInfoTimestamp(i.sourceURL);
    }, r);
    this._refreshTimer = n;
  }
  _getImageSource(e, t) {
    const i = e.includes("?") ? "&" : "?", [r, n = ""] = e.split("#");
    return `${r}${i}timestamp=${t}${n ? "#" : ""}${n}`;
  }
};
g([m()], ue.prototype, "_refreshIntervalInfo", void 0), g([m()], ue.prototype, "attributes", null), g([m()], ue.prototype, "activeMediaInfoIndex", null), g([m()], ue.prototype, "description", null), g([m()], ue.prototype, "fieldInfoMap", null), g([m()], ue.prototype, "layer", null), g([m()], ue.prototype, "mediaInfos", null), g([m()], ue.prototype, "popupTemplate", null), g([m()], ue.prototype, "relatedInfos", null), g([m()], ue.prototype, "title", null), g([m({ type: dt })], ue.prototype, "viewModel", void 0), g([m(), Ae("geoscene/widgets/Feature/t9n/Feature")], ue.prototype, "messages", void 0), ue = g([K("geoscene.widgets.Feature.FeatureMedia")], ue);
const Hn = ue, od = ["$datastore", "$map", "$layer", "$aggregatedfeatures"], ld = "geoscene.widgets.Feature.support.arcadeFeatureUtils", hd = Ce.getLogger(ld);
function dd(s) {
  return typeof s == "string" ? ai($s(s)) : Array.isArray(s) ? cd(s) : (s == null ? void 0 : s.declaredClass) === "geoscene.arcade.Dictionary" ? ud(s) : s;
}
function cd(s) {
  return `<ul class="geoscene-widget__list">${s.map((e) => `<li>${typeof e == "string" ? ai($s(e)) : e}</li>`).join("")}</ul>`;
}
function ud(s) {
  return `<table class="geoscene-widget__table">${s.keys().map((e) => {
    const t = s.field(e);
    return `<tr><th>${e}</th><td>${typeof t == "string" ? ai($s(t)) : t}</td></tr>`;
  }).join("")}</table>`;
}
function pd({ aggregatedFeatures: s, arcadeUtils: e, featureSetVars: t, context: i, viewInfo: r, map: n, graphic: a, interceptor: o }) {
  t.forEach((l) => {
    const h = l.toLowerCase(), f = r.sr, c = { map: n, spatialReference: f, interceptor: o };
    if (h === "$map" && (i.vars[h] = e.convertMapToFeatureSetCollection(c)), h === "$layer" && (i.vars[h] = e.convertFeatureLayerToFeatureSet({ layer: a.sourceLayer, spatialReference: f, interceptor: o })), h === "$datastore" && (i.vars[h] = e.convertServiceUrlToWorkspace({ url: a.sourceLayer.url, spatialReference: f, interceptor: o })), h === "$aggregatedfeatures") {
      const p = a.layer, { fields: d, objectIdField: _, geometryType: u, spatialReference: y, displayField: v } = p, x = new _a({ fields: d, objectIdField: _, geometryType: u, spatialReference: y, displayField: v, ...p.type === "feature" ? { templates: p.templates, typeIdField: p.typeIdField, types: p.types } : null, source: s });
      i.vars[h] = e.convertFeatureLayerToFeatureSet({ layer: x, spatialReference: y, interceptor: o });
    }
  });
}
function zn() {
  return import("./arcadeUtils-6_knHA4j.js").then((s) => s.az);
}
function gd(s) {
  return "createQuery" in s && "queryFeatures" in s;
}
async function fd({ graphic: s, view: e }) {
  const { isAggregate: t, layer: i } = s;
  if (!t || !i || (e == null ? void 0 : e.type) !== "2d")
    return [];
  const r = await e.whenLayerView(i);
  if (!gd(r))
    return [];
  const n = r.createQuery(), a = s.getObjectId();
  n.aggregateIds = a != null ? [a] : [];
  const { features: o } = await r.queryFeatures(n);
  return o;
}
async function Vn({ expressionInfo: s, arcadeUtils: e, interceptor: t, spatialReference: i, map: r, graphic: n, view: a }) {
  if (!s || !s.expression)
    return null;
  const o = e.createSyntaxTree(s.expression), l = od.filter((d) => e.hasVariable(o, d)), [h] = await Promise.all([fd({ graphic: n, view: a }), e.loadScriptDependencies(o, !0, l)]), f = e.getViewInfo({ spatialReference: i }), c = e.createExecContext(n, f);
  c.interceptor = t, c.useAsync = !0, pd({ aggregatedFeatures: h, arcadeUtils: e, featureSetVars: l, context: c, viewInfo: f, map: r, graphic: n, interceptor: t });
  const p = e.createFunction(o, c);
  return e.executeAsyncFunction(p, c).catch((d) => hd.error("arcade-execution-error", { error: d, graphic: n, expressionInfo: s }));
}
async function md({ expressionInfos: s, spatialReference: e, graphic: t, interceptor: i, map: r, view: n }) {
  if (!s || !s.length)
    return {};
  const a = await zn(), o = {};
  for (const f of s)
    o[`expression/${f.name}`] = Vn({ expressionInfo: f, arcadeUtils: a, interceptor: i, spatialReference: e, map: r, graphic: t, view: n });
  const l = await mt(o), h = {};
  for (const f in l)
    h[f] = dd(l[f].value);
  return h;
}
const bd = 1;
let ye = class extends Fs(yt) {
  constructor(e) {
    super(e), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: t } = this;
      t && t.abort(), this._abortController = null;
    }, this._createVM = () => {
      var r, n;
      const t = (r = this.contentElement) == null ? void 0 : r.type;
      (n = this.contentElementViewModel) == null || n.destroy();
      const i = t === "fields" ? new ji() : t === "media" ? new dt() : t === "text" ? new Ii() : null;
      this._set("contentElementViewModel", i);
    }, this._compile = async () => {
      this._cancelQuery();
      const t = new AbortController();
      this._abortController = t, await this._compileExpression(), this._abortController === t && (this._abortController = null);
    }, this._compileThrottled = Ds(this._compile, bd, this), this._compileExpression = async () => {
      const { expressionInfo: t, graphic: i, interceptor: r, spatialReference: n, map: a, view: o, _abortController: l } = this;
      if (!(t && i && n && a))
        return void this._set("contentElement", null);
      const h = await zn();
      if (l !== this._abortController)
        return;
      const f = await Vn({ arcadeUtils: h, expressionInfo: t, graphic: i, interceptor: r, map: a, spatialReference: n, view: o });
      if (!f || f.declaredClass !== "geoscene.arcade.Dictionary")
        return void this._set("contentElement", null);
      const c = await f.castAsJsonAsync(l == null ? void 0 : l.signal), p = c == null ? void 0 : c.type, d = p === "media" ? ya.fromJSON(c) : p === "text" ? en.fromJSON(c) : p === "fields" ? va.fromJSON(c) : null;
      this._set("contentElement", d);
    }, this.handles.add([D(() => [this.expressionInfo, this.graphic, this.map, this.spatialReference, this.view], () => this._compileThrottled(), ae), D(() => [this.contentElement], () => this._createVM(), ae)]);
  }
  initialize() {
    this.addHandles(this._compileThrottled);
  }
  destroy() {
    var e;
    this._cancelQuery(), (e = this.contentElementViewModel) == null || e.destroy(), this._set("contentElementViewModel", null), this._set("contentElement", null);
  }
  get spatialReference() {
    var e;
    return ((e = this.view) == null ? void 0 : e.spatialReference) ?? null;
  }
  set spatialReference(e) {
    this._override("spatialReference", e);
  }
  get state() {
    const { _abortController: e, contentElement: t, contentElementViewModel: i } = this;
    return e ? "loading" : t || i ? "ready" : "disabled";
  }
  get map() {
    var e;
    return ((e = this.view) == null ? void 0 : e.map) ?? null;
  }
  set map(e) {
    this._override("map", e);
  }
};
g([m()], ye.prototype, "_abortController", void 0), g([m({ type: wa })], ye.prototype, "expressionInfo", void 0), g([m({ type: $t })], ye.prototype, "graphic", void 0), g([m({ readOnly: !0 })], ye.prototype, "contentElement", void 0), g([m({ readOnly: !0 })], ye.prototype, "contentElementViewModel", void 0), g([m()], ye.prototype, "interceptor", void 0), g([m()], ye.prototype, "spatialReference", null), g([m({ readOnly: !0 })], ye.prototype, "state", null), g([m()], ye.prototype, "map", null), g([m()], ye.prototype, "view", void 0), ye = g([K("geoscene.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], ye);
const Ws = ye, fi = { iconLoading: "geoscene-icon-loading-indicator geoscene-rotating", base: "geoscene-feature-expression", loadingSpinnerContainer: "geoscene-feature__loading-container", spinner: "geoscene-feature__loading-spinner" };
let Mi = class extends Be {
  constructor(e, t) {
    super(e, t), this._contentWidget = null, this.viewModel = new Ws();
  }
  initialize() {
    this.addHandles(D(() => {
      var e;
      return (e = this.viewModel) == null ? void 0 : e.contentElementViewModel;
    }, () => this._setupExpressionWidget(), ae));
  }
  destroy() {
    this._destroyContentWidget();
  }
  renderLoading() {
    return b("div", { key: "loading-container", class: fi.loadingSpinnerContainer }, b("span", { class: this.classes(fi.iconLoading, fi.spinner) }));
  }
  render() {
    var t;
    const { state: e } = this.viewModel;
    return b("div", { class: fi.base }, e === "loading" ? this.renderLoading() : e === "disabled" ? null : (t = this._contentWidget) == null ? void 0 : t.render());
  }
  _destroyContentWidget() {
    const { _contentWidget: e } = this;
    e && (e.viewModel = null, e.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e, contentElement: t } = this.viewModel, i = t == null ? void 0 : t.type;
    this._destroyContentWidget();
    const r = e ? i === "fields" ? new vn({ viewModel: e }) : i === "media" ? new Hn({ viewModel: e }) : i === "text" ? new bi({ viewModel: e }) : null : null;
    this._contentWidget = r, this.scheduleRender();
  }
};
g([m({ type: Ws })], Mi.prototype, "viewModel", void 0), Mi = g([K("geoscene.widgets.Feature.FeatureExpression")], Mi);
const _d = Mi;
function yd(s, e, t) {
  const i = Object.keys(e).filter((a) => ys(s, a)), r = i.map((a) => e[a]), n = i.map((a) => t.get(a)).filter($i);
  return wd(s, Wn(r, n));
}
function Wn(s, e) {
  const t = e.map((i, r) => {
    let n = s[r];
    if (i.domain && i.domain.type === "coded-value") {
      const a = i.domain.codedValues.find((o) => o.code === n);
      a != null && a.name && (n = a.name);
    }
    return xa(i) && (n = vd(i, n)), [i.name, n];
  });
  return Object.fromEntries(t);
}
function vd(s, e) {
  if (!s || e == null)
    return null;
  switch (s.type) {
    case "date":
      return ii(e);
    case "date-only":
      return Xr(e);
    case "time-only":
      return Kr(e);
    case "timestamp-offset":
      return Gr(e);
    default:
      return null;
  }
}
function wd(s, e) {
  return Ze(Ze(s, (t) => `{${t.toLowerCase()}}`), Object.fromEntries(Object.entries(e).map(([t, i]) => [t.toLowerCase(), i])));
}
var Or;
(function(s) {
  s.TOO_SHORT = "length-validation-error::too-short";
})(Or || (Or = {}));
const xd = (s) => {
  var t;
  const e = [];
  if (s.formTemplate) {
    const { description: i, title: r } = s.formTemplate;
    (t = s.fields) == null || t.forEach((n) => {
      const a = r && ys(r, n.name), o = i && ys(i, n.name);
      (a || o) && e.push(n.name);
    });
  }
  return e;
}, ps = 100;
let j = class extends Ma(tn(Fs(yt))) {
  constructor(e) {
    super(e), this._loaded = !1, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = !1, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: t } = this;
      t && t.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: t } = this;
      t && t.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: t } = this;
      t && t.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const t = new AbortController();
      this._queryAbortController = t, await qi(this._query()), this._queryAbortController === t && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = !1, this._cancelQueryFeatureCount();
      const t = new AbortController();
      this._queryFeatureCountAbortController = t, await qi(this._queryFeatureCount()), this._queryFeatureCountAbortController === t && (this._queryFeatureCountAbortController = null), this._loaded = !0;
    }, this._queryPageController = async () => {
      const t = new AbortController();
      this._queryPageAbortController = t, await qi(this._queryPage()), this._queryPageAbortController === t && (this._queryPageAbortController = null);
    }, this._queryDebounced = Gi(this._queryController, ps), this._queryFeatureCountDebounced = Gi(this._queryFeatureCountController, ps), this._queryPageDebounced = Gi(this._queryPageController, ps), this._query = async () => {
      const { _queryAbortController: t, relatedFeatures: i } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, i.removeAll(), this.destroyed || i.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: t == null ? void 0 : t.signal }))));
    }, this.handles.add([D(() => {
      var t;
      return [this.displayCount, this.graphic, this.layer, (t = this.layer) == null ? void 0 : t.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount];
    }, () => this._queryDebounced(), ae), D(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), D(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.removeAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e) {
    const { featuresPerPage: t, featureCount: i } = this, r = 1, n = Math.ceil(i / t) || 1;
    this._set("featurePage", Math.min(Math.max(e, r), n));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e, relatedLayer: t } = this;
    return e && (t != null && t.loaded) ? e.map((i) => {
      const r = i.clone();
      return r.field = si(i.field, t), r;
    }) : e ?? [];
  }
  get supportsCacheHint() {
    var e, t, i;
    return !!((i = (t = (e = this.layer) == null ? void 0 : e.capabilities) == null ? void 0 : t.queryRelated) != null && i.supportsCacheHint);
  }
  get canLoad() {
    return !!this.map && typeof this.relationshipId == "number" && typeof this.objectId == "number";
  }
  get canQuery() {
    var t, i;
    const e = (i = (t = this.layer) == null ? void 0 : t.capabilities) == null ? void 0 : i.queryRelated;
    return !!(this.relatedLayer && this.relationship && typeof this.relationshipId == "number" && typeof this.objectId == "number" && (e != null && e.supportsCount) && (e != null && e.supportsPagination));
  }
  get itemDescriptionFieldName() {
    var e;
    return ((e = this.orderByFieldsFixedCasing[0]) == null ? void 0 : e.field) || null;
  }
  set displayCount(e) {
    this._set("displayCount", Math.min(Math.max(e, 0), 10));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    var e, t;
    return (this.objectIdField && ((t = (e = this.graphic) == null ? void 0 : e.attributes) == null ? void 0 : t[this.objectIdField])) ?? null;
  }
  get objectIdField() {
    var e;
    return ((e = this.layer) == null ? void 0 : e.objectIdField) || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new Je();
  }
  get relatedFeatureInfos() {
    const { itemDescriptionFieldName: e, relatedFeatures: t, relatedLayer: i } = this;
    if (!t.length || !i)
      return [];
    const r = i && "formTemplate" in i && i.formTemplate, n = r && (r == null ? void 0 : r.title) || void 0;
    return t.map((a) => {
      let o;
      if (e) {
        const l = a.getAttribute(e), h = i.fieldsIndex.get(e);
        if (h) {
          const f = Wn([l], [h])[e];
          f != null && (o = f.toString());
        }
      }
      return { feature: a, description: o, title: n ? yd(n, a.attributes, i.fieldsIndex) : void 0 };
    }).toArray();
  }
  get relatedLayer() {
    const { layer: e, map: t, relationship: i } = this;
    return e != null && e.loaded && t && i ? Mo(t, e, i) ?? null : null;
  }
  get relationship() {
    var i;
    const { relationshipId: e, layer: t } = this;
    return typeof e == "number" ? ((i = t == null ? void 0 : t.relationships) == null ? void 0 : i.find(({ id: r }) => r === e)) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new Je();
  }
  get state() {
    const { _queryAbortController: e, _queryFeatureCountAbortController: t, _queryPageAbortController: i, canQuery: r, _loaded: n, canLoad: a } = this;
    return t || a && !n ? "loading" : e || i ? "querying" : r ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e) {
    return this.relatedFeatures.find((t) => t.getObjectId() === e);
  }
  _destroyRelatedFeatureViewModels() {
    var e;
    (e = this.relatedFeatureViewModels) == null || e.forEach((t) => !t.destroyed && t.destroy()), this.relatedFeatureViewModels.removeAll();
  }
  async _queryFeatureCount() {
    const { layer: e, relatedLayer: t, relationshipId: i, objectId: r, _queryFeatureCountAbortController: n, canQuery: a, supportsCacheHint: o } = this;
    if (await (e == null ? void 0 : e.load()), await (t == null ? void 0 : t.load()), !a || !e || !t)
      return void this._set("featureCount", 0);
    const l = t.createQuery(), h = new bs({ cacheHint: o, relationshipId: i, returnGeometry: !1, objectIds: [r], where: l.where ?? void 0 }), f = await e.queryRelatedFeaturesCount(h, { signal: n == null ? void 0 : n.signal });
    this._set("featureCount", f[r] || 0);
  }
  _sliceFeatures(e) {
    const { showAllEnabled: t, displayCount: i } = this;
    return t ? e : i ? e.slice(0, i) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e, featurePage: t, showAllEnabled: i, _queryPageAbortController: r, featureCount: n } = this;
    !i || t < 2 || !n || e.addMany(await this._queryRelatedFeatures({ signal: r == null ? void 0 : r.signal }));
  }
  async _queryRelatedFeatures(e) {
    var E;
    const { orderByFieldsFixedCasing: t, showAllEnabled: i, featuresPerPage: r, displayCount: n, layer: a, relationshipId: o, featurePage: l, featureCount: h, relatedLayer: f, supportsCacheHint: c } = this, { canQuery: p, objectId: d } = this;
    if (!p || !a || !f)
      return [];
    const _ = i ? ((l - 1) * r + h) % h : 0, u = i ? r : n, y = f.objectIdField, v = [...t.map(($) => $.field), ...xd(f), y].filter($i), x = t.map(($) => `${$.field} ${$.order}`), w = f.createQuery(), P = new bs({ orderByFields: x, start: _, num: u, outFields: v, cacheHint: c, relationshipId: o, returnGeometry: !1, objectIds: [d], where: w.where ?? void 0 }), O = await a.queryRelatedFeatures(P, { signal: e == null ? void 0 : e.signal }), L = ((E = O[d]) == null ? void 0 : E.features) || [];
    return L.forEach(($) => {
      $.sourceLayer = f, $.layer = f;
    }), L;
  }
};
g([m()], j.prototype, "_loaded", void 0), g([m()], j.prototype, "_queryAbortController", void 0), g([m()], j.prototype, "_queryPageAbortController", void 0), g([m()], j.prototype, "_queryFeatureCountAbortController", void 0), g([m({ value: 1 })], j.prototype, "featurePage", null), g([m()], j.prototype, "featuresPerPage", void 0), g([m({ readOnly: !0 })], j.prototype, "orderByFieldsFixedCasing", null), g([m({ readOnly: !0 })], j.prototype, "supportsCacheHint", null), g([m({ readOnly: !0 })], j.prototype, "canLoad", null), g([m({ readOnly: !0 })], j.prototype, "canQuery", null), g([m()], j.prototype, "description", void 0), g([m({ readOnly: !0 })], j.prototype, "itemDescriptionFieldName", null), g([m({ value: 3 })], j.prototype, "displayCount", null), g([m({ type: $t })], j.prototype, "graphic", void 0), g([m()], j.prototype, "layer", void 0), g([m()], j.prototype, "map", void 0), g([m({ readOnly: !0 })], j.prototype, "objectId", null), g([m({ readOnly: !0 })], j.prototype, "objectIdField", null), g([m()], j.prototype, "orderByFields", void 0), g([m({ readOnly: !0 })], j.prototype, "relatedFeatures", null), g([m({ readOnly: !0 })], j.prototype, "relatedFeatureInfos", null), g([m({ readOnly: !0 })], j.prototype, "relatedLayer", null), g([m({ readOnly: !0 })], j.prototype, "relationship", null), g([m()], j.prototype, "featureCount", void 0), g([m({ readOnly: !0 })], j.prototype, "relatedFeatureViewModels", null), g([m()], j.prototype, "relationshipId", void 0), g([m()], j.prototype, "showAllEnabled", void 0), g([m()], j.prototype, "state", null), g([m()], j.prototype, "title", void 0), g([m()], j.prototype, "getRelatedFeatureByObjectId", null), j = g([K("geoscene.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], j);
const Us = j, Yt = "geoscene-feature", Nt = `${Yt}-relationship`, Oe = { base: Nt, geosceneWidget: "geoscene-widget", listContainer: `${Nt}__list`, listItem: `${Nt}__list-item`, listItemHidden: `${Nt}__list-item--hidden`, listContainerQuerying: `${Nt}__list--querying`, featureObserver: `${Yt}__feature-observer`, stickySpinnerContainer: `${Yt}__sticky-loading-container`, loadingSpinnerContainer: `${Yt}__loading-container`, spinner: `${Yt}__loading-spinner`, iconLoading: "geoscene-icon-loading-indicator geoscene-rotating" }, Fr = { title: !0, description: !0 };
let pe = class extends Be {
  constructor(s, e) {
    super(s, e), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([t]) => {
      t != null && t.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.headingLevel = 2, this.viewModel = new Us(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Fr }, this._increaseFeaturePage = () => {
      const { state: t, showAllEnabled: i, relatedFeatures: r, featuresPerPage: n, featurePage: a } = this.viewModel;
      t === "ready" && i && r.length >= n * a && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new Ri(), this.addHandles([D(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), ae), D(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), et(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return ni({ icon: () => import("./calcite-icon-qQRYmWQk.js"), list: () => import("./calcite-list-8OiO3BaW.js"), "list-item": () => import("./calcite-list-item-KNX9g-b_.js"), notice: () => import("./calcite-notice-QdBqtny8.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = sn(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: s, featureCount: e, displayCount: t, state: i } = this.viewModel;
    return !s && !!e && i === "ready" && (e > t || t === 0);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(s) {
    this.viewModel.description = s;
  }
  get featureCountDescription() {
    const { messages: s } = this, { featureCount: e } = this.viewModel;
    return De(s == null ? void 0 : s.numberRecords, { number: e });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(s) {
    this.viewModel.title = s;
  }
  castVisibleElements(s) {
    return { ...Fr, ...s };
  }
  renderStickyLoading() {
    return this.viewModel.state === "querying" ? b("div", { key: "sticky-loader", class: Oe.stickySpinnerContainer }, this.renderLoadingIcon()) : null;
  }
  renderLoadingIcon() {
    return b("span", { class: this.classes(Oe.iconLoading, Oe.spinner) });
  }
  renderLoading() {
    return b("div", { key: "loading-container", class: Oe.loadingSpinnerContainer }, this.renderLoadingIcon());
  }
  renderShowAllIconNode() {
    return b("calcite-icon", { scale: "s", icon: "list", slot: "content-end" });
  }
  renderChevronIconNode() {
    const s = ft(this.container) ? "chevron-left" : "chevron-right";
    return b("calcite-icon", { scale: "s", icon: s, slot: "content-end" });
  }
  renderRelatedFeature(s) {
    var r;
    const { itemDescriptionFieldName: e } = this.viewModel, t = s.title;
    s.description = e && ((r = s.formattedAttributes) == null ? void 0 : r.global[e]);
    const i = s.state === "loading";
    return b("calcite-list-item", { class: this.classes(Oe.listItem, { [Oe.listItemHidden]: i }), key: s.uid, label: t, description: s.description ?? "", onCalciteListItemSelect: () => this.emit("select-record", { featureViewModel: s }) }, this.renderChevronIconNode());
  }
  renderShowAllListItem() {
    var s;
    return this.displayShowAllButton ? b("calcite-list-item", { key: "show-all-item", label: (s = this.messages) == null ? void 0 : s.showAll, description: this.featureCountDescription, onCalciteListItemSelect: () => this.emit("show-all-records") }, this.renderShowAllIconNode()) : null;
  }
  renderNoRelatedFeaturesMessage() {
    var s;
    return b("calcite-notice", { key: "no-related-features-message", icon: "information", open: !0, kind: "brand", scale: "s", width: "full" }, b("div", { slot: "message" }, (s = this.messages) == null ? void 0 : s.noRelatedFeatures));
  }
  renderFeatureObserver() {
    return b("div", { key: "feature-observer", class: Oe.featureObserver, bind: this, afterCreate: this._relatedFeatureIntersectionObserverCreated });
  }
  renderList() {
    const { relatedFeatureViewModels: s } = this.viewModel;
    return b("calcite-list", null, s.toArray().map((e) => this.renderRelatedFeature(e)), this.renderShowAllListItem());
  }
  renderRelatedFeatures() {
    const { displayListItems: s } = this, { state: e } = this.viewModel;
    return b("div", { key: "list-container", class: this.classes(Oe.listContainer, { [Oe.listContainerQuerying]: e === "querying" }) }, s ? this.renderList() : e === "ready" ? this.renderNoRelatedFeaturesMessage() : null, this.renderStickyLoading(), this.renderFeatureObserver());
  }
  renderRelationshipNotFound() {
    var s;
    return b("calcite-notice", { key: "relationship-not-found", icon: "exclamation-mark-triangle", open: !0, kind: "danger", scale: "s", width: "full" }, b("div", { slot: "message" }, (s = this.messages) == null ? void 0 : s.relationshipNotFound));
  }
  render() {
    var e;
    const { state: s } = this.viewModel;
    return b("div", { class: this.classes(Oe.base, Oe.geosceneWidget) }, (e = this._featureElementInfo) == null ? void 0 : e.render(), s === "loading" ? this.renderLoading() : s === "disabled" ? this.renderRelationshipNotFound() : this.renderRelatedFeatures());
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: s } = this.viewModel, e = "related-feature-viewmodels";
    this.removeHandles(e), s == null || s.forEach((t) => {
      this.addHandles(D(() => [t.title, t.state], () => this.scheduleRender(), ae), e);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    var r;
    const { headingLevel: s, visibleElements: e } = this, t = e.description && this.description, i = e.title && this.title;
    (r = this._featureElementInfo) == null || r.set({ description: t, title: i, headingLevel: s });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: s, showAllEnabled: e } = this.viewModel;
    await rn(0), this._relatedFeatureIntersectionObserverNode && s === "ready" && e && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(s) {
    this._relatedFeatureIntersectionObserverNode = s;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
g([m()], pe.prototype, "_relatedFeatureIntersectionObserverNode", void 0), g([m({ readOnly: !0 })], pe.prototype, "displayShowAllButton", null), g([m({ readOnly: !0 })], pe.prototype, "displayListItems", null), g([m()], pe.prototype, "description", null), g([m({ readOnly: !0 })], pe.prototype, "featureCountDescription", null), g([m()], pe.prototype, "headingLevel", void 0), g([m()], pe.prototype, "title", null), g([m({ type: Us })], pe.prototype, "viewModel", void 0), g([m(), Ae("geoscene/widgets/Feature/t9n/Feature")], pe.prototype, "messages", void 0), g([m(), Ae("geoscene/t9n/common")], pe.prototype, "messagesCommon", void 0), g([m()], pe.prototype, "visibleElements", void 0), g([_t("visibleElements")], pe.prototype, "castVisibleElements", null), pe = g([K("geoscene.widgets.Feature.FeatureRelationship")], pe);
const Dr = pe;
let Md = class {
  constructor(e, t) {
    this.preLayerQueryCallback = e, this.preRequestCallback = t, this.preLayerQueryCallback || (this.preLayerQueryCallback = (i) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (i) => {
    });
  }
};
var qt;
const Pd = 1, Er = "content-view-models", Sr = "relationship-view-models", $r = { attachmentsContent: !0, chartAnimation: !0, customContent: !0, expressionContent: !0, fieldsContent: !0, mediaContent: !0, textContent: !0, relationshipContent: !0 };
let V = qt = class extends tn(yt) {
  constructor(s) {
    super(s), this._handles = new Bi(), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = Ds(this._graphicChanged, Pd, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...$r }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = !1, this.formattedAttributes = null, this.lastEditInfo = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e) => {
      const { abilities: t } = this;
      return e.type === "attachments" && !!t.attachmentsContent || e.type === "custom" && !!t.customContent || e.type === "fields" && !!t.fieldsContent || e.type === "media" && !!t.mediaContent || e.type === "text" && !!t.textContent || e.type === "expression" && !!t.expressionContent || e.type === "relationship" && !!t.relationshipContent;
    }, this._handles.add(D(() => [this.graphic, this._effectivePopupTemplate, this.abilities], () => this._graphicChangedThrottled(), ae));
  }
  initialize() {
    this.addHandles(this._graphicChangedThrottled);
  }
  destroy() {
    this._clear(), this._cancelFeatureQuery(), this._error = null, this._handles.destroy(), this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return this.graphic != null ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return mo(nr(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return dn(this.graphic);
  }
  castAbilities(s) {
    return { ...$r, ...s };
  }
  get isTable() {
    var s;
    return ((s = this._sourceLayer) == null ? void 0 : s.isTable) || !1;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(s) {
    this._set("graphic", s ? s.clone() : null);
  }
  get spatialReference() {
    var s;
    return ((s = this.view) == null ? void 0 : s.spatialReference) ?? null;
  }
  set spatialReference(s) {
    this._override("spatialReference", s);
  }
  get map() {
    var s;
    return ((s = this.view) == null ? void 0 : s.map) || null;
  }
  set map(s) {
    this._override("map", s);
  }
  get waitingForContent() {
    return !!this._featureAbortController;
  }
  setActiveMedia(s, e) {
    const t = this.contentViewModels[s];
    t instanceof dt && t.setActiveMedia(e);
  }
  nextMedia(s) {
    const e = this.contentViewModels[s];
    e instanceof dt && e.next();
  }
  previousMedia(s) {
    const e = this.contentViewModels[s];
    e instanceof dt && e.previous();
  }
  async updateGeometry() {
    var a;
    const { graphic: s, spatialReference: e, _sourceLayer: t } = this;
    await (t == null ? void 0 : t.load());
    const i = t == null ? void 0 : t.objectIdField;
    if (!i || !s || !t)
      return;
    const r = (a = s == null ? void 0 : s.attributes) == null ? void 0 : a[i];
    if (r == null)
      return;
    const n = [r];
    if (!s.geometry) {
      const o = await bn({ layer: t, graphic: s, outFields: [], objectIds: n, returnGeometry: !0, spatialReference: e }), l = o == null ? void 0 : o.geometry;
      l && (s.geometry = l);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  async _graphicChanged() {
    this._cancelFeatureQuery(), this._error = null, this._clear();
    const { graphic: s } = this;
    if (!s)
      return;
    const e = new AbortController();
    this._featureAbortController = e;
    try {
      await this._queryFeature({ signal: e.signal });
    } catch (t) {
      Pa(t) || (this._error = t, Ce.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: t, graphic: s, popupTemplate: this._effectivePopupTemplate }));
    }
    this._featureAbortController === e && (this._featureAbortController = null);
  }
  _cancelFeatureQuery() {
    const { _featureAbortController: s } = this;
    s && s.abort(), this._featureAbortController = null;
  }
  _compileContentElement(s, e) {
    return s.type === "attachments" ? this._compileAttachments(s, e) : s.type === "custom" ? this._compileCustom(s, e) : s.type === "fields" ? this._compileFields(s, e) : s.type === "media" ? this._compileMedia(s, e) : s.type === "text" ? this._compileText(s, e) : s.type === "expression" ? this._compileExpression(s, e) : s.type === "relationship" ? this._compileRelationship(s, e) : void 0;
  }
  _compileContent(s) {
    if (this._destroyContentViewModels(), this.graphic)
      return Array.isArray(s) ? s.filter(this._isAllowedContentType).map((e, t) => this._compileContentElement(e, t)).filter($i) : typeof s == "string" ? this._compileText(new en({ text: s }), 0).text : s;
  }
  _destroyContentViewModels() {
    var s, e;
    (s = this._handles) == null || s.remove(Sr), (e = this._handles) == null || e.remove(Er), this.contentViewModels.forEach((t) => t && !t.destroyed && t.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(s, e) {
    var r;
    const t = (r = s == null ? void 0 : s.graphic) == null ? void 0 : r.getObjectId(), i = e == null ? void 0 : e.getObjectId();
    return t != null && i != null && t === i;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: s, relatedFeatures: e, map: t }) {
    const { view: i, spatialReference: r } = this;
    e == null || e.filter(Boolean).forEach((n) => {
      s.find((a) => this._matchesFeature(a, n)) || s.add(new qt({ abilities: { relationshipContent: !1 }, map: t, view: i, spatialReference: r, graphic: n }));
    }), s.forEach((n) => {
      (e == null ? void 0 : e.find((o) => this._matchesFeature(n, o))) || s.remove(n);
    });
  }
  _setExpressionContentVM(s, e) {
    const t = this.formattedAttributes, { contentElement: i, contentElementViewModel: r } = s, n = i == null ? void 0 : i.type;
    r && n && (n === "fields" && (this._createFieldsFormattedAttributes({ contentElement: i, contentElementIndex: e, formattedAttributes: t }), r.set(this._createFieldsVMParams(i, e))), n === "media" && (this._createMediaFormattedAttributes({ contentElement: i, contentElementIndex: e, formattedAttributes: t }), r.set(this._createMediaVMParams(i, e))), n === "text" && r.set(this._createTextVMParams(i)));
  }
  _compileRelationship(s, e) {
    const { displayCount: t, orderByFields: i, relationshipId: r, title: n, description: a } = s, { _sourceLayer: o, graphic: l, map: h } = this;
    if (!gn(o))
      return;
    const f = new Us({ displayCount: t, graphic: l, orderByFields: i, relationshipId: r, layer: o, map: h, ...this._compileTitleAndDesc({ title: n, description: a }) });
    return this.contentViewModels[e] = f, this._handles.add(et(() => f.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(f)), Sr), s;
  }
  _compileExpression(s, e) {
    const { expressionInfo: t } = s, { graphic: i, map: r, spatialReference: n, view: a } = this, o = new Ws({ expressionInfo: t, graphic: i, interceptor: qt.interceptor, map: r, spatialReference: n, view: a });
    return this.contentViewModels[e] = o, this._handles.add(D(() => o.contentElementViewModel, () => this._setExpressionContentVM(o, e), ae), Er), s;
  }
  _compileAttachments(s, e) {
    const { graphic: t } = this, { description: i, title: r } = s;
    return this.contentViewModels[e] = new Ls({ graphic: t, ...this._compileTitleAndDesc({ title: r, description: i }) }), s;
  }
  _compileCustom(s, e) {
    const { graphic: t } = this, { creator: i, destroyer: r } = s;
    return this.contentViewModels[e] = new Ii({ graphic: t, creator: i, destroyer: r }), s;
  }
  _compileTitleAndDesc({ title: s, description: e }) {
    const { _fieldInfoMap: t, _sourceLayer: i, graphic: r, formattedAttributes: n } = this, a = r == null ? void 0 : r.attributes, o = this._expressionAttributes, l = n.global;
    return { title: ht({ attributes: a, fieldInfoMap: t, globalAttributes: l, expressionAttributes: o, layer: i, text: s }), description: ht({ attributes: a, fieldInfoMap: t, globalAttributes: l, expressionAttributes: o, layer: i, text: e }) };
  }
  _createFieldsVMParams(s, e) {
    const t = this._effectivePopupTemplate, i = this.formattedAttributes, r = { ...i == null ? void 0 : i.global, ...i == null ? void 0 : i.content[e] }, n = (s == null ? void 0 : s.fieldInfos) || (t == null ? void 0 : t.fieldInfos), a = n == null ? void 0 : n.filter(({ fieldName: f }) => Es(f) || Ne(f) || r.hasOwnProperty(f)), o = t == null ? void 0 : t.expressionInfos, { description: l, title: h } = s;
    return { attributes: r, expressionInfos: o, fieldInfos: a, ...this._compileTitleAndDesc({ title: h, description: l }) };
  }
  _compileFields(s, e) {
    const t = s.clone(), i = new ji(this._createFieldsVMParams(s, e));
    return this.contentViewModels[e] = i, t.fieldInfos = i.formattedFieldInfos.slice(0), t;
  }
  _createMediaVMParams(s, e) {
    const { abilities: t, graphic: i, _fieldInfoMap: r, _effectivePopupTemplate: n, relatedInfos: a, _sourceLayer: o, _expressionAttributes: l } = this, h = this.formattedAttributes, f = (i == null ? void 0 : i.attributes) ?? {}, { description: c, mediaInfos: p, title: d } = s;
    return { abilities: { chartAnimation: t.chartAnimation }, activeMediaInfoIndex: s.activeMediaInfoIndex || 0, attributes: f, isAggregate: i == null ? void 0 : i.isAggregate, layer: o, fieldInfoMap: r, formattedAttributes: { ...h == null ? void 0 : h.global, ...h == null ? void 0 : h.content[e] }, expressionAttributes: l, mediaInfos: p, popupTemplate: n, relatedInfos: a, ...this._compileTitleAndDesc({ title: d, description: c }) };
  }
  _compileMedia(s, e) {
    const t = s.clone(), i = new dt(this._createMediaVMParams(s, e));
    return t.mediaInfos = i.formattedMediaInfos.slice(0), this.contentViewModels[e] = i, t;
  }
  _createTextVMParams(s) {
    var n;
    const { graphic: e, _fieldInfoMap: t, _sourceLayer: i, _expressionAttributes: r } = this;
    if (s && s.text) {
      const a = (e == null ? void 0 : e.attributes) ?? {}, o = ((n = this.formattedAttributes) == null ? void 0 : n.global) ?? {};
      s.text = ht({ attributes: a, fieldInfoMap: t, globalAttributes: o, expressionAttributes: r, layer: i, text: s.text });
    }
    return { graphic: e, creator: s.text };
  }
  _compileText(s, e) {
    const t = s.clone();
    return this.contentViewModels[e] = new Ii(this._createTextVMParams(t)), t;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: s, _sourceLayer: e, graphic: t } = this;
    if (!s)
      return;
    const { lastEditInfoEnabled: i } = s, r = e == null ? void 0 : e.editFieldsInfo;
    return i && r ? fo(r, t == null ? void 0 : t.attributes) : void 0;
  }
  _compileTitle(s) {
    var o;
    const { _fieldInfoMap: e, _sourceLayer: t, graphic: i, _expressionAttributes: r } = this, n = (i == null ? void 0 : i.attributes) ?? {}, a = ((o = this.formattedAttributes) == null ? void 0 : o.global) ?? {};
    return ht({ attributes: n, fieldInfoMap: e, globalAttributes: a, expressionAttributes: r, layer: t, text: s });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: s, graphic: e } = this;
    if (!e)
      return null;
    const t = s == null ? void 0 : s.title;
    return Ti(t, { graphic: e });
  }
  async _getContent() {
    const { _effectivePopupTemplate: s, graphic: e } = this;
    if (!e)
      return null;
    const t = s == null ? void 0 : s.content;
    return Ti(t, { graphic: e });
  }
  async _queryFeature(s) {
    const { _featureAbortController: e, _sourceLayer: t, graphic: i, _effectivePopupTemplate: r } = this, n = this.map, a = this.view, o = this.spatialReference;
    if (e !== this._featureAbortController || !i)
      return;
    await _o({ graphic: i, popupTemplate: r, layer: t, spatialReference: o }, s);
    const { content: { value: l }, title: { value: h } } = await mt({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: f } } = await mt({ checkForRelatedFeatures: this._checkForRelatedFeatures(s), expressionAttributes: md({ expressionInfos: r == null ? void 0 : r.expressionInfos, spatialReference: o, graphic: i, map: n, interceptor: qt.interceptor, view: a }) });
    e === this._featureAbortController && i && (this._expressionAttributes = f, this._graphicExpressionAttributes = { ...i.attributes, ...f }, this._set("formattedAttributes", this._createFormattedAttributes(l)), this._set("title", this._compileTitle(h)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(l) || null));
  }
  _createMediaFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: t }) {
    const { _effectivePopupTemplate: i, graphic: r, relatedInfos: n, _sourceLayer: a, _fieldInfoMap: o, _graphicExpressionAttributes: l } = this;
    t.content[e] = Qi({ fieldInfos: i == null ? void 0 : i.fieldInfos, graphic: r, attributes: { ...l, ...s.attributes }, layer: a, fieldInfoMap: o, relatedInfos: n });
  }
  _createFieldsFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: t }) {
    if (s.fieldInfos) {
      const { graphic: i, relatedInfos: r, _sourceLayer: n, _fieldInfoMap: a, _graphicExpressionAttributes: o } = this;
      t.content[e] = Qi({ fieldInfos: s.fieldInfos, graphic: i, attributes: { ...o, ...s.attributes }, layer: n, fieldInfoMap: a, relatedInfos: r });
    }
  }
  _createFormattedAttributes(s) {
    const { _effectivePopupTemplate: e, graphic: t, relatedInfos: i, _sourceLayer: r, _fieldInfoMap: n, _graphicExpressionAttributes: a } = this, o = e == null ? void 0 : e.fieldInfos, l = { global: Qi({ fieldInfos: o, graphic: t, attributes: a, layer: r, fieldInfoMap: n, relatedInfos: i }), content: [] };
    return Array.isArray(s) && s.forEach((h, f) => {
      h.type === "fields" && this._createFieldsFormattedAttributes({ contentElement: h, contentElementIndex: f, formattedAttributes: l }), h.type === "media" && this._createMediaFormattedAttributes({ contentElement: h, contentElementIndex: f, formattedAttributes: l });
    }), l;
  }
  _checkForRelatedFeatures(s) {
    const { graphic: e, _effectivePopupTemplate: t } = this;
    return this._queryRelatedInfos(e, nr(t), s);
  }
  async _queryRelatedInfos(s, e, t) {
    const { relatedInfos: i, _sourceLayer: r } = this;
    i.clear();
    const n = (r == null ? void 0 : r.associatedLayer) != null ? await (r == null ? void 0 : r.associatedLayer.load(t)) : r;
    if (!n || !s)
      return;
    const a = e.filter((h) => h && Ne(h.fieldName));
    if (!a || !a.length)
      return;
    e.forEach((h) => this._configureRelatedInfo(h, n));
    const o = await il({ relatedInfos: i, layer: n }, t);
    Object.keys(o).forEach((h) => {
      var p;
      const f = i.get(h.toString()), c = (p = o[h]) == null ? void 0 : p.value;
      f && c && (f.layerInfo = c.data);
    });
    const l = await sl({ graphic: s, relatedInfos: i, layer: n }, t);
    Object.keys(l).forEach((h) => {
      var f;
      Qo((f = l[h]) == null ? void 0 : f.value, i.get(h.toString()));
    });
  }
  _configureRelatedInfo(s, e) {
    const { relatedInfos: t } = this, i = _i(s.fieldName);
    if (!i)
      return;
    const { layerId: r, fieldName: n } = i;
    if (!r)
      return;
    const a = t.get(r.toString()) || Xo(r, e);
    a && (rl({ relatedInfo: a, fieldName: n, fieldInfo: s }), this.relatedInfos.set(r, a));
  }
};
V.interceptor = new Md(wo, xo), g([m()], V.prototype, "_error", void 0), g([m()], V.prototype, "_featureAbortController", void 0), g([m({ readOnly: !0 })], V.prototype, "_effectivePopupTemplate", null), g([m({ readOnly: !0 })], V.prototype, "_fieldInfoMap", null), g([m({ readOnly: !0 })], V.prototype, "_sourceLayer", null), g([m()], V.prototype, "abilities", void 0), g([_t("abilities")], V.prototype, "castAbilities", null), g([m({ readOnly: !0 })], V.prototype, "content", void 0), g([m({ readOnly: !0 })], V.prototype, "contentViewModels", void 0), g([m()], V.prototype, "description", void 0), g([m({ type: Boolean })], V.prototype, "defaultPopupTemplateEnabled", void 0), g([m({ readOnly: !0 })], V.prototype, "isTable", null), g([m({ readOnly: !0 })], V.prototype, "state", null), g([m({ readOnly: !0 })], V.prototype, "formattedAttributes", void 0), g([m({ type: $t, value: null })], V.prototype, "graphic", null), g([m({ readOnly: !0 })], V.prototype, "lastEditInfo", void 0), g([m({ readOnly: !0 })], V.prototype, "relatedInfos", void 0), g([m()], V.prototype, "spatialReference", null), g([m({ readOnly: !0 })], V.prototype, "title", void 0), g([m()], V.prototype, "map", null), g([m({ readOnly: !0 })], V.prototype, "waitingForContent", null), g([m()], V.prototype, "view", void 0), V = qt = g([K("geoscene.widgets.FeatureViewModel")], V);
const Ys = V, le = "geoscene-feature", Y = { iconText: "geoscene-icon-font-fallback-text", iconLoading: "geoscene-icon-loading-indicator geoscene-rotating", esriTable: "geoscene-widget__table", geosceneWidget: "geoscene-widget", base: le, container: `${le}__size-container`, title: `${le}__title`, main: `${le}__main-container`, btn: `${le}__button`, icon: `${le}__icon`, content: `${le}__content`, contentNode: `${le}__content-node`, contentElement: `${le}__content-element`, text: `${le}__text`, lastEditedInfo: `${le}__last-edited-info`, fields: `${le}__fields`, fieldHeader: `${le}__field-header`, fieldData: `${le}__field-data`, fieldDataDate: `${le}__field-data--date`, loadingSpinnerContainer: `${le}__loading-container`, spinner: `${le}__loading-spinner` }, Un = (s) => {
  let e = class extends s {
    constructor() {
      super(...arguments), this.renderNodeContent = (t) => on(t) && !t.destroyed ? b("div", { class: Y.contentNode, key: t }, t.render()) : t instanceof HTMLElement ? b("div", { class: Y.contentNode, key: t, bind: t, afterCreate: this._attachToNode }) : Ra(t) ? b("div", { class: Y.contentNode, key: t, bind: t.domNode, afterCreate: this._attachToNode }) : null;
    }
    _attachToNode(t) {
      const i = this;
      t.appendChild(i);
    }
  };
  return e = g([K("geoscene.widgets.Feature.ContentMixin")], e), e;
};
var Is;
const Br = { title: !0, content: !0, lastEditedInfo: !0 }, Lr = "relationship-handles";
let se = Is = class extends Un(Be) {
  constructor(s, e) {
    super(s, e), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.messagesURIUtils = null, this.visibleElements = { ...Br }, this.viewModel = new Ys();
  }
  initialize() {
    this.addHandles(D(() => {
      var s;
      return (s = this.viewModel) == null ? void 0 : s.contentViewModels;
    }, () => this._setupContentWidgets(), ae));
  }
  loadDependencies() {
    return ni({ notice: () => import("./calcite-notice-QdBqtny8.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(s) {
    this.viewModel.graphic = s;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(s) {
    this.viewModel.defaultPopupTemplateEnabled = s;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get label() {
    var s;
    return ((s = this.messages) == null ? void 0 : s.widgetLabel) ?? "";
  }
  set label(s) {
    this._overrideIfSome("label", s);
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(s) {
    this.viewModel.spatialReference = s;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(s) {
    return { ...Br, ...s };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(s) {
    this.viewModel.map = s;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(s) {
    this.viewModel.view = s;
  }
  render() {
    const { state: s } = this.viewModel, e = b("div", { class: Y.container, key: "container" }, this.renderTitle(), s === "error" ? this.renderError() : s === "loading" ? this.renderLoading() : this.renderContentContainer());
    return b("div", { class: this.classes(Y.base, Y.geosceneWidget) }, e);
  }
  setActiveMedia(s, e) {
    return this.viewModel.setActiveMedia(s, e);
  }
  nextMedia(s) {
    return this.viewModel.nextMedia(s);
  }
  previousMedia(s) {
    return this.viewModel.previousMedia(s);
  }
  renderError() {
    const { messagesCommon: s, messages: e, visibleElements: t } = this;
    return b("calcite-notice", { open: !0, kind: "danger", icon: "exclamation-mark-circle", scale: "s" }, t.title ? b("div", { key: "error-title", slot: "title" }, s.errorMessage) : null, b("div", { key: "error-message", slot: "message" }, e.loadingError));
  }
  renderLoading() {
    return b("div", { key: "loading-container", class: Y.loadingSpinnerContainer }, b("span", { class: this.classes(Y.iconLoading, Y.spinner) }));
  }
  renderContentContainer() {
    const { visibleElements: s } = this;
    return s.content ? b("div", { class: Y.main }, [this.renderContent(), this.renderLastEditInfo()]) : null;
  }
  renderTitle() {
    const { visibleElements: s, title: e } = this;
    return s.title ? b(Rs, { level: this.headingLevel, class: Y.title, innerHTML: e }) : null;
  }
  renderContent() {
    const s = this.viewModel.content, e = "content";
    if (!s)
      return null;
    if (Array.isArray(s))
      return s.length ? b("div", { class: Y.contentNode, key: `${e}-content-elements` }, s.map(this.renderContentElement, this)) : null;
    if (typeof s == "string") {
      const t = this._contentWidgets[0];
      return !t || t.destroyed ? null : b("div", { class: Y.contentNode, key: `${e}-content` }, t.render());
    }
    return this.renderNodeContent(s);
  }
  renderContentElement(s, e) {
    var i;
    const { visibleElements: t } = this;
    if (typeof t.content != "boolean" && !((i = t.content) != null && i[s.type]))
      return null;
    switch (s.type) {
      case "attachments":
        return this.renderAttachments(e);
      case "custom":
        return this.renderCustom(s, e);
      case "fields":
        return this.renderFields(e);
      case "media":
        return this.renderMedia(e);
      case "text":
        return this.renderText(s, e);
      case "expression":
        return this.renderExpression(e);
      case "relationship":
        return this.renderRelationship(e);
      default:
        return null;
    }
  }
  renderAttachments(s) {
    const e = this._contentWidgets[s];
    if (!e || e.destroyed)
      return null;
    const { state: t, attachmentInfos: i } = e.viewModel;
    return t === "loading" || i.length > 0 ? b("div", { key: this._buildKey("attachments-element", s), class: this.classes(Y.contentElement) }, e.render()) : null;
  }
  renderRelationship(s) {
    const e = this._contentWidgets[s];
    return e && !e.destroyed && this.flowItems ? b("div", { key: this._buildKey("relationship-element", s), class: Y.contentElement }, e.render()) : null;
  }
  renderExpression(s) {
    const e = this._contentWidgets[s];
    return !e || e.destroyed ? null : b("div", { key: this._buildKey("expression-element", s), class: Y.contentElement }, e.render());
  }
  renderCustom(s, e) {
    const { creator: t } = s, i = this._contentWidgets[e];
    return !i || i.destroyed ? null : t ? b("div", { key: this._buildKey("custom-element", e), class: Y.contentElement }, i.render()) : null;
  }
  renderFields(s) {
    const e = this._contentWidgets[s];
    return !e || e.destroyed ? null : b("div", { key: this._buildKey("fields-element", s), class: Y.contentElement }, e.render());
  }
  renderMedia(s) {
    const e = this._contentWidgets[s];
    return !e || e.destroyed ? null : b("div", { key: this._buildKey("media-element", s), class: Y.contentElement }, e.render());
  }
  renderLastEditInfo() {
    const { visibleElements: s, messages: e } = this, { lastEditInfo: t } = this.viewModel;
    if (!t || !s.lastEditedInfo)
      return null;
    const { date: i, user: r } = t, n = t.type === "edit" ? r ? e.lastEditedByUser : e.lastEdited : r ? e.lastCreatedByUser : e.lastCreated, a = De(n, { date: i, user: r });
    return b("div", { key: "edit-info-element", class: this.classes(Y.lastEditedInfo, Y.contentElement) }, a);
  }
  renderText(s, e) {
    const t = s.text, i = this._contentWidgets[e];
    return !i || i.destroyed ? null : t ? b("div", { key: this._buildKey("text-element", e), class: this.classes(Y.contentElement, Y.text) }, i.render()) : null;
  }
  _buildKey(s, ...e) {
    return `${s}__${this.get("viewModel.graphic.uid") || "0"}-${e.join("-")}`;
  }
  _destroyContentWidget(s) {
    s && (s.viewModel = null, !s.destroyed && s.destroy());
  }
  _destroyContentWidgets() {
    this.removeHandles(Lr), this._contentWidgets.forEach((s) => this._destroyContentWidget(s)), this._contentWidgets = [];
  }
  _addFeatureRelationshipHandles(s) {
    const { flowItems: e, visibleElements: t } = this;
    this.addHandles([et(() => s, "select-record", ({ featureViewModel: i }) => {
      e && (i.abilities = { relationshipContent: !0 }, e.push(new Is({ flowItems: e, viewModel: i, visibleElements: t })));
    }), et(() => s, "show-all-records", () => {
      if (!e)
        return;
      const { viewModel: i } = s;
      i.showAllEnabled = !0;
      const r = new Dr({ visibleElements: { title: !1, description: !1 }, viewModel: i });
      this._addFeatureRelationshipHandles(r), e.push(r);
    })], Lr);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: s, visibleElements: e } = this, t = this.get("viewModel.content"), { contentViewModels: i } = this.viewModel;
    if (Array.isArray(t))
      t.forEach((r, n) => {
        if (r.type === "attachments" && (this._contentWidgets[n] = new Io({ displayType: r.displayType, headingLevel: e.title ? s + 1 : s, viewModel: i[n] })), r.type === "fields" && (this._contentWidgets[n] = new vn({ viewModel: i[n] })), r.type === "media" && (this._contentWidgets[n] = new Hn({ viewModel: i[n] })), r.type === "text" && (this._contentWidgets[n] = new bi({ viewModel: i[n] })), r.type === "custom" && (this._contentWidgets[n] = new bi({ viewModel: i[n] })), r.type === "expression" && (this._contentWidgets[n] = new _d({ viewModel: i[n] })), r.type === "relationship") {
          const a = new Dr({ viewModel: i[n] });
          this._addFeatureRelationshipHandles(a), this._contentWidgets[n] = a;
        }
      }, this);
    else {
      const r = i[0];
      r && !r.destroyed && (this._contentWidgets[0] = new bi({ viewModel: r }));
    }
    this.scheduleRender();
  }
};
g([m()], se.prototype, "graphic", null), g([m()], se.prototype, "defaultPopupTemplateEnabled", null), g([m()], se.prototype, "flowItems", void 0), g([m()], se.prototype, "headingLevel", void 0), g([m({ readOnly: !0 })], se.prototype, "isTable", null), g([m()], se.prototype, "label", null), g([m(), Ae("geoscene/widgets/Feature/t9n/Feature")], se.prototype, "messages", void 0), g([m(), Ae("geoscene/t9n/common")], se.prototype, "messagesCommon", void 0), g([m(), Ae("geoscene/widgets/support/t9n/uriUtils")], se.prototype, "messagesURIUtils", void 0), g([m()], se.prototype, "spatialReference", null), g([m({ readOnly: !0 })], se.prototype, "title", null), g([m()], se.prototype, "visibleElements", void 0), g([_t("visibleElements")], se.prototype, "castVisibleElements", null), g([m()], se.prototype, "map", null), g([m()], se.prototype, "view", null), g([m({ type: Ys })], se.prototype, "viewModel", void 0), se = Is = g([K("geoscene.widgets.Feature")], se);
const kd = se;
var Yn;
const Pi = Symbol("anchorHandles");
let at = class extends ka.EventedAccessor {
  constructor(e) {
    super(e), this[Yn] = new Bi(), this.location = null, this.screenLocationEnabled = !1, this.view = null, this[Pi].add([Ai(() => Ca(this.screenLocationEnabled ? this.view : null, (t) => [t.size, t.type === "3d" ? t.camera : t.viewpoint]), () => this.notifyChange("screenLocation")), D(() => this.screenLocation, (t, i) => {
      t != null && i != null && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null, this[Pi] = sn(this[Pi]);
  }
  get screenLocation() {
    var r;
    const { location: e, view: t, screenLocationEnabled: i } = this;
    return i && e != null && t != null && t.ready ? (r = t.toScreen) == null ? void 0 : r.call(t, e) : null;
  }
};
Yn = Pi, g([m()], at.prototype, "location", void 0), g([m()], at.prototype, "screenLocation", null), g([m()], at.prototype, "screenLocationEnabled", void 0), g([m()], at.prototype, "view", void 0), at = g([K("geoscene.widgets.support.AnchorElementViewModel")], at);
const qn = at, Cd = "geoscene.widgets.CompassViewModel";
let ki = class extends qn {
  constructor(e) {
    super(e), this.visible = !1;
  }
};
g([m()], ki.prototype, "visible", void 0), ki = g([K(Cd)], ki);
const Gn = ki, gs = "geoscene-spinner", fs = { base: gs, spinnerStart: `${gs}--start`, spinnerFinish: `${gs}--finish` };
let ot = class extends Be {
  constructor(e, t) {
    super(e, t), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new Gn();
  }
  initialize() {
    this.addHandles(D(() => this.visible, (e) => this._visibleChange(e)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e) {
    this.viewModel.view = e;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e) {
    this.viewModel.visible = e;
  }
  show(e) {
    const { location: t, promise: i } = e ?? {};
    t && (this.viewModel.location = t), this.visible = !0;
    const r = () => this.hide();
    i && i.catch(() => {
    }).then(r);
  }
  hide() {
    this.visible = !1;
  }
  render() {
    const { visible: e } = this, { screenLocation: t } = this.viewModel, i = !!t, r = e && i, n = !e && i, a = { [fs.spinnerStart]: r, [fs.spinnerFinish]: n }, o = this._getPositionStyles();
    return b("div", { class: this.classes(fs.base, a), styles: o });
  }
  _visibleChange(e) {
    if (e)
      return void (this.viewModel.screenLocationEnabled = !0);
    const t = rn(this._animationDelay);
    this._animationPromise = t, t.catch(() => {
    }).then(() => {
      this._animationPromise === t && (this.viewModel.screenLocationEnabled = !1, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const { screenLocation: e, view: t } = this.viewModel;
    if (t == null || e == null)
      return {};
    const { padding: i } = t;
    return { left: e.x - i.left + "px", top: e.y - i.top + "px" };
  }
};
g([m()], ot.prototype, "location", null), g([m()], ot.prototype, "view", null), g([m({ type: Gn })], ot.prototype, "viewModel", void 0), g([m()], ot.prototype, "visible", null), ot = g([K("geoscene.widgets.Spinner")], ot);
const Ad = ot, Wi = { iconZoom: "geoscene-icon-zoom-in-magnifying-glass", iconTrash: "geoscene-icon-trash", iconBrowseClusteredFeatures: "geoscene-icon-table" }, ct = new Li({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: Wi.iconZoom }), Rr = new Li({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: Wi.iconTrash }), It = new Li({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: Wi.iconZoom }), Qe = new nn({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: Wi.iconBrowseClusteredFeatures, value: !1 }), Td = "geoscene.widgets.Popup.PopupViewModel", Si = Ce.getLogger(Td), Id = (s) => {
  const { event: e, view: t, viewModel: i } = s, { action: r } = e;
  if (!r)
    return Promise.reject(new H("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: n, id: a } = r;
  if (!a)
    return Promise.reject(new H("trigger-action:invalid-action", "action.id is missing"));
  if (n)
    return Promise.reject(new H("trigger-action:invalid-action", "Action is disabled"));
  if (a === ct.id)
    return Fd(i).catch(Aa);
  if (a === It.id)
    return Dd(i);
  if (a === Qe.id)
    return i.browseClusterEnabled = !i.browseClusterEnabled, i.featureMenuOpen = i.browseClusterEnabled, Promise.resolve();
  if (a === Rr.id) {
    i.visible = !1;
    const { selectedFeature: o } = i;
    if (!o)
      return Promise.reject(new H(`trigger-action:${Rr.id}`, "selectedFeature is required", { selectedFeature: o }));
    const { sourceLayer: l } = o;
    return l ? l.remove(o) : t == null || t.graphics.remove(o), Promise.resolve();
  }
  return Promise.resolve();
};
function Kn(s) {
  const { selectedFeature: e, location: t, view: i } = s;
  return i ? i.type === "3d" ? e ?? t ?? null : s.get("selectedFeature.geometry") || t : null;
}
function lt(s) {
  var e, t;
  return !!s && s.isAggregate && ((t = (e = s.sourceLayer) == null ? void 0 : e.featureReduction) == null ? void 0 : t.type) === "cluster";
}
async function Od(s, e) {
  if ((e == null ? void 0 : e.type) !== "3d" || !s || s.declaredClass !== "geoscene.Graphic")
    return !0;
  const t = e.getViewForGraphic(s);
  if (t && "whenGraphicBounds" in t) {
    let i;
    try {
      i = await t.whenGraphicBounds(s, { useViewElevation: !0 });
    } catch {
    }
    return !i || !i.boundingBox || i.boundingBox[0] === i.boundingBox[3] && i.boundingBox[1] === i.boundingBox[4] && i.boundingBox[2] === i.boundingBox[5];
  }
  return !0;
}
async function Fd(s) {
  var f;
  const { location: e, selectedFeature: t, view: i, zoomFactor: r } = s, n = Kn(s);
  if (!i || !n) {
    const c = new H("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: n, view: i });
    throw Si.error(c), c;
  }
  const a = i.scale / r, o = (f = s.selectedFeature) == null ? void 0 : f.geometry, l = o ?? e, h = l != null && l.type === "point" && await Od(t, i);
  ct.active = !0, ct.disabled = !0;
  try {
    await s.zoomTo({ target: { target: n, scale: h ? a : void 0 } });
  } catch {
    const p = new H("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: t });
    Si.error(p);
  } finally {
    ct.active = !1, ct.disabled = !1, s.zoomToLocation = null, h && (s.location = l);
  }
}
async function Dd(s) {
  const { selectedFeature: e, view: t } = s;
  if ((t == null ? void 0 : t.type) !== "2d") {
    const a = new H("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: t });
    throw Si.error(a), a;
  }
  if (!e || !lt(e)) {
    const a = new H("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: e });
    throw Si.error(a), a;
  }
  const [i, r] = await qs(t, e);
  It.active = !0, It.disabled = !0;
  const { extent: n } = await i.queryExtent(r);
  await s.zoomTo({ target: n }), It.active = !1, It.disabled = !1;
}
async function Ed(s) {
  const { view: e, selectedFeature: t } = s;
  if (!e || !t)
    return;
  const [i, r] = await qs(e, t), { extent: n } = await i.queryExtent(r);
  s.selectedClusterBoundaryFeature.geometry = n, e.graphics.add(s.selectedClusterBoundaryFeature);
}
async function Sd(s) {
  const { selectedFeature: e, view: t } = s;
  if (!t || !e)
    return;
  const [i, r] = await qs(t, e);
  Qe.active = !0, Qe.disabled = !0;
  const { features: n } = await i.queryFeatures(r);
  Qe.active = !1, Qe.disabled = !1, Qe.value = !0, s == null || s.open({ features: [e].concat(n), featureMenuOpen: !0 });
}
async function qs(s, e) {
  const t = await s.whenLayerView(e.sourceLayer), i = t.createQuery(), r = e.getObjectId();
  return i.aggregateIds = r != null ? [r] : [], [t, i];
}
function $d(s) {
  Qe.value = !1;
  const e = s.features.filter((t) => lt(t));
  e.length && (s.features = e);
}
function Xn(s) {
  var e;
  if (s == null)
    return null;
  switch (s.type) {
    case "point":
      return s;
    case "extent":
      return s.center;
    case "polygon":
      return s.centroid;
    case "multipoint":
    case "polyline":
      return (e = s.extent) == null ? void 0 : e.center;
    default:
      return null;
  }
}
const T = "geoscene-popup", Ht = `${T}__header`, rt = `${T}--is-docked`, M = { calciteThemeLight: "calcite-mode-light", calciteThemeDark: "calcite-mode-dark", iconLeftTriangleArrow: "geoscene-icon-left-triangle-arrow", iconRightTriangleArrow: "geoscene-icon-right-triangle-arrow", iconDockToTop: "geoscene-icon-maximize", iconDockToBottom: "geoscene-icon-dock-bottom", iconDockToLeft: "geoscene-icon-dock-left", iconDockToRight: "geoscene-icon-dock-right", iconClose: "geoscene-icon-close", iconUndock: "geoscene-icon-minimize", iconCheckMark: "geoscene-icon-check-mark", iconLoading: "geoscene-icon-loading-indicator", iconDefaultAction: "geoscene-icon-default-action", iconActionsMenu: "geoscene-icon-handle-horizontal", rotating: "geoscene-rotating", base: T, widget: "geoscene-widget", main: `${T}__main-container`, loadingContainer: `${T}__loading-container`, isCollapsible: `${T}--is-collapsible`, isCollapsed: `${T}--is-collapsed`, shadow: `${T}--shadow`, isDocked: rt, isDockedTopLeft: `${rt}-top-left`, isDockedTopCenter: `${rt}-top-center`, isDockedTopRight: `${rt}-top-right`, isDockedBottomLeft: `${rt}-bottom-left`, isDockedBottomCenter: `${rt}-bottom-center`, isDockedBottomRight: `${rt}-bottom-right`, alignTopCenter: `${T}--aligned-top-center`, alignBottomCenter: `${T}--aligned-bottom-center`, alignTopLeft: `${T}--aligned-top-left`, alignBottomLeft: `${T}--aligned-bottom-left`, alignTopRight: `${T}--aligned-top-right`, alignBottomRight: `${T}--aligned-bottom-right`, isFeatureMenuOpen: `${T}--feature-menu-open`, isActionsMenuOpen: `${T}--actions-menu-open`, hasFeatureUpdated: `${T}--feature-updated`, header: Ht, headerButtons: `${Ht}-buttons`, headerContainer: `${Ht}-container`, headerContainerButton: `${Ht}-container--button`, headerTitle: `${Ht}-title`, content: `${T}__content`, contentHasFlows: "geoscene-content--has-flows", contentFlowItem: "geoscene-content__flow-item", footer: `${T}__footer`, footerHasPagination: `${T}__footer--has-pagination`, footerHasActions: `${T}__footer--has-actions`, footerHasActionsMenu: `${T}__footer--has-actions-menu`, button: `${T}__button`, buttonDisabled: `${T}__button--disabled`, buttonDock: `${T}__button--dock`, icon: `${T}__icon`, iconDock: `${T}__icon--dock-icon`, inlineActionsContainer: `${T}__inline-actions-container`, actionsMenuButton: `${T}__actions-menu-button`, actions: `${T}__actions`, action: `${T}__action`, actionImage: `${T}__action-image`, actionText: `${T}__action-text`, actionToggle: `${T}__action-toggle`, actionToggleOn: `${T}__action-toggle--on`, actionExit: `${T}__action--exit`, actionSelectFeature: `${T}__action--select-feature`, pointer: `${T}__pointer`, pointerDirection: `${T}__pointer-direction`, navigation: `${T}__navigation`, paginationIcon: `${T}__pagination-icon`, paginationPrevious: `${T}__pagination-previous`, paginationNext: `${T}__pagination-next`, featureMenu: `${T}__feature-menu`, featureMenuList: `${T}__feature-menu-list`, featureMenuItem: `${T}__feature-menu-item`, featureMenuViewport: `${T}__feature-menu-viewport`, featureMenuHeader: `${T}__feature-menu-header`, featureMenuNote: `${T}__feature-menu-note`, featureMenuSelected: `${T}__feature-menu-item--selected`, featureMenuButton: `${T}__feature-menu-button`, featureMenuButtonIcon: `${T}__feature-menu-button-icon`, featureMenuTitle: `${T}__feature-menu-title`, featureMenuObserver: `${T}__feature-menu-observer`, featureMenuLoader: `${T}__feature-menu-loader`, collapseButton: `${T}__collapse-button`, collapseIcon: `${T}__collapse-icon` }, Bd = "OBJECTID";
var bt;
(function(s) {
  s[s.size = 22] = "size", s[s.lineWidth = 50] = "lineWidth", s[s.maxSize = 120] = "maxSize", s[s.maxOutlineSize = 80] = "maxOutlineSize", s[s.tallSymbolWidth = 20] = "tallSymbolWidth";
})(bt || (bt = {}));
const jr = an("android");
an("chrome") || jr && jr >= 4;
Ta();
bt.size;
bt.maxSize;
bt.maxOutlineSize;
bt.lineWidth;
bt.tallSymbolWidth;
function Qn(s) {
  return s && "opacity" in s ? s.opacity * Qn(s.parent) : 1;
}
async function Ld(s, e) {
  if (!s)
    return;
  const t = s.sourceLayer, i = (e != null && e.useSourceLayer ? t : s.layer) ?? t, r = Qn(i);
  if (s.symbol != null && (e == null || e.ignoreGraphicSymbol !== !0)) {
    const w = s.symbol.type === "web-style" ? await ja(s.symbol, { ...e, cache: e != null ? e.webStyleCache : null }) : s.symbol.clone();
    return Ki(w, null, r), w;
  }
  const n = (e != null ? e.renderer : null) ?? (i && "renderer" in i ? i.renderer : null);
  let a = n && "getSymbolAsync" in n ? await n.getSymbolAsync(s, e) : null;
  if (!a)
    return;
  if (a = a.type === "web-style" ? await a.fetchSymbol({ ...e, cache: e != null ? e.webStyleCache : null }) : a.clone(), !(n && "visualVariables" in n && n.visualVariables && n.visualVariables.length))
    return Ki(a, null, r), a;
  if ("arcadeRequiredForVisualVariables" in n && n.arcadeRequiredForVisualVariables && (e == null || e.arcade == null)) {
    const w = { ...e };
    w.arcade = await Qr(), e = w;
  }
  const { getColor: o, getOpacity: l, getAllSizes: h, getRotationAngle: f } = await import("./index-O2RTvw_o.js").then((w) => w.lD), c = [], p = [], d = [], _ = [];
  for (const w of n.visualVariables)
    switch (w.type) {
      case "color":
        c.push(w);
        break;
      case "opacity":
        p.push(w);
        break;
      case "rotation":
        _.push(w);
        break;
      case "size":
        w.target || d.push(w);
    }
  const u = !!c.length && c[c.length - 1], y = u ? o(u, s, e) : null, v = !!p.length && p[p.length - 1];
  let x = v ? l(v, s, e) : null;
  if (r != null && (x = x != null ? x * r : r), Ki(a, y, x), d.length) {
    const w = h(d, s, e);
    await Na(a, w);
  }
  for (const w of _)
    Ha(a, f(w, s, e), w.axis);
  return a;
}
function Nr(s) {
  return s && typeof s.highlight == "function";
}
const ti = Je.ofType({ key: "type", defaultKeyValue: "button", base: Ia, typeMap: { button: Li, toggle: nn } }), Rd = () => [ct.clone()], jd = () => [It.clone(), Qe.clone()];
let S = class extends Oa(qn) {
  get isLoadingFeature() {
    return this.featureViewModels.some((e) => e.waitingForContent);
  }
  constructor(e) {
    super(e), this._handles = new Bi(), this._pendingPromises = /* @__PURE__ */ new Set(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this.featurePage = null, this.actions = new ti(), this.activeFeature = null, this.defaultPopupTemplateEnabled = !1, this.autoCloseEnabled = !1, this.autoOpenEnabled = !0, this.browseClusterEnabled = !1, this.content = null, this.featuresPerPage = 20, this.featureMenuOpen = !1, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = !0, this.includeDefaultActions = !0, this.selectedClusterBoundaryFeature = new $t({ symbol: new Fa({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = !1, this.view = null, this.visible = !1, this.zoomFactor = 4, this.zoomToLocation = null;
  }
  initialize() {
    this._handles.add([this.on("view-change", () => this._autoClose()), D(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), D(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), D(() => {
      var e, t;
      return (t = (e = this.view) == null ? void 0 : e.animation) == null ? void 0 : t.state;
    }, (e) => this._animationStateChange(e)), D(() => this.location, (e) => this._locationChange(e)), D(() => this.selectedFeature, (e) => this._selectedFeatureChange(e)), D(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), D(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), D(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e) => Id({ event: e, viewModel: this, view: this.view })), Ai(() => !this.waitingForResult, () => this._waitingForResultChange(), Da), D(() => {
      var e, t;
      return [this.features, (e = this.view) == null ? void 0 : e.map, (t = this.view) == null ? void 0 : t.spatialReference];
    }, () => this._updateFeatureVMs()), D(() => {
      var e;
      return (e = this.view) == null ? void 0 : e.scale;
    }, () => this._viewScaleChange()), Ai(() => !this.visible, () => this.browseClusterEnabled = !1), D(() => this.browseClusterEnabled, (e) => e ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._handles.destroy(), this._pendingPromises.clear(), this.browseClusterEnabled = !1, this.view = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e = this._get("allActions") || new ti();
    e.removeAll();
    const { actions: t, defaultActions: i, defaultPopupTemplateEnabled: r, includeDefaultActions: n, selectedFeature: a } = this, o = n ? i.concat(t) : t, l = a && (typeof a.getEffectivePopupTemplate == "function" && a.getEffectivePopupTemplate(r) || a.popupTemplate), h = l && l.actions, f = l && l.overwriteActions ? h : h ? h.concat(o) : o;
    return f && f.filter(Boolean).forEach((c) => e.add(c)), e;
  }
  get defaultActions() {
    const e = this._get("defaultActions") || new ti();
    return e.removeAll(), e.addMany(lt(this.selectedFeature) ? jd() : Rd()), e;
  }
  get featureCount() {
    return this.features.length;
  }
  get features() {
    return this._get("features") || [];
  }
  set features(e) {
    const t = e || [];
    this._set("features", t);
    const { pendingPromisesCount: i, promiseCount: r, selectedFeatureIndex: n } = this, a = r && t.length;
    a && i && n === -1 ? this.selectedFeatureIndex = 0 : a && n !== -1 || (this.selectedFeatureIndex = t.length ? 0 : -1);
  }
  get location() {
    return this._get("location") || null;
  }
  set location(e) {
    var r, n, a;
    let t = e;
    const i = (n = (r = this.view) == null ? void 0 : r.spatialReference) == null ? void 0 : n.isWebMercator;
    e && ((a = e == null ? void 0 : e.spatialReference) != null && a.isWGS84) && i && (t = Ea(e)), this._set("location", t);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get waitingForResult() {
    return !(!(this._fetchFeaturesController || this.pendingPromisesCount > 0) || this.featureCount !== 0);
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(e) {
    if (this._pendingPromises.clear(), this.features = [], !Array.isArray(e) || !e.length)
      return this._set("promises", []), void this.notifyChange("pendingPromisesCount");
    this._set("promises", e), (e = e.slice(0)).forEach((t) => {
      this._pendingPromises.add(t);
      const i = (n) => {
        this._pendingPromises.has(t) && this._updateFeatures(n), this._updatePendingPromises(t);
      }, r = () => this._updatePendingPromises(t);
      t.then(i, r);
    }), this.notifyChange("pendingPromisesCount");
  }
  get selectedFeature() {
    const { features: e, selectedFeatureIndex: t } = this;
    return t === -1 ? null : e[t] || null;
  }
  get selectedFeatureIndex() {
    const e = this._get("selectedFeatureIndex");
    return typeof e == "number" ? e : -1;
  }
  set selectedFeatureIndex(e) {
    const { featureCount: t } = this;
    e = isNaN(e) || e < -1 || !t ? -1 : (e + t) % t, this.activeFeature = null, this._set("selectedFeatureIndex", e);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get state() {
    return this.get("view.ready") ? "ready" : "disabled";
  }
  centerAtLocation() {
    const { view: e } = this, t = Kn(this);
    return t && e ? this.callGoTo({ target: { target: t, scale: e.scale } }) : Promise.reject(new H("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: t, view: e }));
  }
  zoomTo(e) {
    return this.callGoTo(e);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(e, t) {
    const { view: i } = this;
    if (!i || !e)
      throw new H("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: e, view: i });
    return i.fetchPopupFeatures(e, { event: t && t.event, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: t && t.signal });
  }
  open(e) {
    const t = { updateLocationEnabled: !1, promises: [], fetchFeatures: !1, ...e, visible: !0 }, { fetchFeatures: i } = t;
    delete t.fetchFeatures, i && this._setFetchFeaturesPromises(t.location);
    const r = ["actionsMenuOpen", "collapsed"];
    for (const n of r)
      delete t[n];
    this.set(t);
  }
  triggerAction(e) {
    const t = this.allActions.at(e);
    t && !t.disabled && this.emit("trigger-action", { action: t });
  }
  next() {
    return this.selectedFeatureIndex = this.selectedFeatureIndex + 1, this;
  }
  previous() {
    return this.selectedFeatureIndex = this.selectedFeatureIndex - 1, this;
  }
  disableClusterBrowsing() {
    $d(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: e, selectedFeature: t } = this;
    (e == null ? void 0 : e.type) === "2d" ? lt(t) ? (await Ed(this), await Sd(this)) : Ce.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t) : Ce.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t);
  }
  handleViewClick(e) {
    this.autoOpenEnabled && this._fetchFeaturesAndOpen(e);
  }
  _animationStateChange(e) {
    this.zoomToLocation || (ct.disabled = e === "waiting-for-target");
  }
  _clearBrowsedClusterGraphics() {
    var t;
    const e = (t = this.view) == null ? void 0 : t.graphics;
    e && (e.remove(this.selectedClusterBoundaryFeature), this._selectedClusterFeature && e.remove(this._selectedClusterFeature)), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (lt(this.selectedFeature))
      return this.browseClusterEnabled = !1, this.visible = !1, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e) {
    const { selectedFeature: t, updateLocationEnabled: i } = this;
    i && e && (!t || t.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: e, featureCount: t, featurePage: i, featuresPerPage: r, featureViewModels: n } = this;
    if (i === null)
      return;
    const a = ((i - 1) * r + t) % t, o = a + r;
    n.slice(a, o).forEach((l, h) => {
      l && !l.graphic && (l.graphic = e[a + h]);
    });
  }
  async _selectedFeatureChange(e) {
    const { location: t, updateLocationEnabled: i, view: r } = this;
    if (e && r) {
      if (this.browseClusterEnabled)
        return this._selectedClusterFeature && (r.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), lt(e) ? void 0 : (e.symbol = await Ld(e), this._selectedClusterFeature = e, void r.graphics.add(this._selectedClusterFeature));
      !i && t || !e.geometry ? i && !e.geometry && this.centerAtLocation().then(() => {
        var a;
        const n = (a = r.center) == null ? void 0 : a.clone();
        n && (this.location = n);
      }) : this.location = Xn(e.geometry);
    }
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = !1);
  }
  _setFetchFeaturesPromises(e) {
    return this._fetchFeaturesWithController(this._getScreenPoint(e || this.location)).then((t) => {
      const { clientOnlyGraphics: i, promisesPerLayerView: r } = t, n = Promise.resolve(i), a = r.map((o) => o.promise);
      this.promises = [n, ...a];
    });
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e) => e && !e.destroyed && e.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: e, features: t, featureViewModels: i } = this;
    if (lt(e) || (this.browseClusterEnabled = !1), this._destroyFeatureVMs(), !t || !t.length)
      return;
    const r = i.slice(0), n = [];
    t.forEach((a, o) => {
      var h, f;
      if (!a)
        return;
      let l = null;
      if (r.some((c, p) => (c && c.graphic === a && (l = c, r.splice(p, 1)), !!l)), l)
        n[o] = l;
      else {
        const c = new Ys({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: (h = this.view) == null ? void 0 : h.spatialReference, graphic: a === e ? a : null, map: (f = this.view) == null ? void 0 : f.map, view: this.view });
        n[o] = c;
      }
    }), r.forEach((a) => a && !a.destroyed && a.destroy()), this._set("featureViewModels", n);
  }
  _getScreenPoint(e) {
    const { view: t } = this;
    return t && e && typeof t.toScreen == "function" ? t.toScreen(e) : null;
  }
  _cancelFetchingFeatures() {
    const e = this._fetchFeaturesController;
    e && e.abort(), this._fetchFeaturesController = null, this.notifyChange("waitingForResult");
  }
  _fetchFeaturesWithController(e, t) {
    this._cancelFetchingFeatures();
    const i = new AbortController(), { signal: r } = i;
    this._fetchFeaturesController = i, this.notifyChange("waitingForResult");
    const n = this.fetchFeatures(e, { signal: r, event: t });
    return n.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null, this.notifyChange("waitingForResult");
    }), n;
  }
  _fetchFeaturesAndOpen(e) {
    const { screenPoint: t, mapPoint: i } = e, { view: r } = this;
    this._fetchFeaturesWithController(t, e).then((n) => {
      const { clientOnlyGraphics: a, promisesPerLayerView: o, location: l } = n, h = [Promise.resolve(a), ...o.map((f) => f.promise)];
      return r != null && r.popup && "open" in r.popup && r.popup.open({ location: l || i, promises: h }), n;
    });
  }
  _updatePendingPromises(e) {
    e && this._pendingPromises.has(e) && (this._pendingPromises.delete(e), this.notifyChange("pendingPromisesCount"));
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = !1);
  }
  async _getLayerView(e, t) {
    return await e.when(), e.whenLayerView(t);
  }
  _getHighlightLayer(e) {
    const { layer: t, sourceLayer: i } = e;
    return i && "layer" in i && i.layer ? i.layer : (i == null ? void 0 : i.type) === "map-notes" || (i == null ? void 0 : i.type) === "subtype-group" ? i : t;
  }
  _getHighlightTarget(e, t) {
    const i = t.type === "imagery" ? void 0 : "objectIdField" in t ? t.objectIdField || Bd : null, r = e.attributes;
    return r && i && r[i] || e;
  }
  async _highlightActiveFeature() {
    const e = "highlight-active-feature";
    this._handles.remove(e);
    const { highlightEnabled: t, view: i, activeFeature: r, visible: n } = this;
    if (!(r && i && t && n))
      return;
    const a = this._getHighlightLayer(r);
    if (!(a && a instanceof Js))
      return;
    const o = this._getLayerView(i, a);
    this._highlightActiveFeaturePromise = o;
    const l = await o;
    if (!(l && Nr(l) && this._highlightActiveFeaturePromise === o && this.activeFeature && this.highlightEnabled))
      return;
    const h = l.highlight(this._getHighlightTarget(r, a));
    this._handles.add(h, e);
  }
  async _highlightSelectedFeature() {
    const e = "highlight-selected-feature";
    this._handles.remove(e);
    const { selectedFeature: t, highlightEnabled: i, view: r, visible: n } = this;
    if (!(t && r && i && n))
      return;
    const a = this._getHighlightLayer(t);
    if (!(a && a instanceof Js))
      return;
    const o = this._getLayerView(r, a);
    this._highlightSelectedFeaturePromise = o;
    const l = await o;
    if (!(l && Nr(l) && this._highlightSelectedFeaturePromise === o && this.selectedFeature && this.highlightEnabled && this.visible))
      return;
    const h = l.highlight(this._getHighlightTarget(t, a));
    this._handles.add(h, e);
  }
  _updateFeatures(e) {
    const { features: t } = this;
    if (!e || !e.length)
      return;
    if (!t.length)
      return void (this.features = e);
    const i = e.filter((r) => !t.includes(r));
    this.features = t.concat(i);
  }
};
g([m()], S.prototype, "featurePage", void 0), g([m()], S.prototype, "isLoadingFeature", null), g([m({ type: ti })], S.prototype, "actions", void 0), g([m({ readOnly: !0 })], S.prototype, "active", null), g([m()], S.prototype, "activeFeature", void 0), g([m({ readOnly: !0 })], S.prototype, "allActions", null), g([m({ type: Boolean })], S.prototype, "defaultPopupTemplateEnabled", void 0), g([m()], S.prototype, "autoCloseEnabled", void 0), g([m()], S.prototype, "autoOpenEnabled", void 0), g([m()], S.prototype, "browseClusterEnabled", void 0), g([m()], S.prototype, "content", void 0), g([m({ type: ti, readOnly: !0 })], S.prototype, "defaultActions", null), g([m({ readOnly: !0 })], S.prototype, "featureCount", null), g([m()], S.prototype, "features", null), g([m()], S.prototype, "featuresPerPage", void 0), g([m()], S.prototype, "featureMenuOpen", void 0), g([m()], S.prototype, "featureViewModelAbilities", void 0), g([m({ readOnly: !0 })], S.prototype, "featureViewModels", void 0), g([m()], S.prototype, "highlightEnabled", void 0), g([m()], S.prototype, "includeDefaultActions", void 0), g([m({ type: Sa })], S.prototype, "location", null), g([m({ readOnly: !0 })], S.prototype, "pendingPromisesCount", null), g([m({ readOnly: !0 })], S.prototype, "selectedClusterBoundaryFeature", void 0), g([m({ readOnly: !0 })], S.prototype, "waitingForResult", null), g([m({ readOnly: !0 })], S.prototype, "promiseCount", null), g([m()], S.prototype, "promises", null), g([m({ value: null, readOnly: !0 })], S.prototype, "selectedFeature", null), g([m({ value: -1 })], S.prototype, "selectedFeatureIndex", null), g([m({ readOnly: !0 })], S.prototype, "selectedFeatureViewModel", null), g([m({ readOnly: !0 })], S.prototype, "state", null), g([m()], S.prototype, "title", void 0), g([m()], S.prototype, "updateLocationEnabled", void 0), g([m()], S.prototype, "view", void 0), g([m()], S.prototype, "visible", void 0), g([m()], S.prototype, "zoomFactor", void 0), g([m()], S.prototype, "zoomToLocation", void 0), g([m()], S.prototype, "centerAtLocation", null), S = g([K("geoscene.widgets.Popup.PopupViewModel")], S);
const Jn = S, Hr = "selected-index", Nd = 0, zr = "popup-spinner", Vr = { buttonEnabled: !0, position: "auto", breakpoint: { width: 544 } }, Wr = "geoscene-popup";
function Re(s, e) {
  return e === void 0 ? `${Wr}__${s}` : `${Wr}__${s}-${e}`;
}
const Ur = { closeButton: !0, featureNavigation: !0 };
let A = class extends Un(Be) {
  constructor(s, e) {
    super(s, e), this._blurClose = !1, this._blurContainer = !1, this._containerNode = null, this._mainContainerNode = null, this._featureMenuNode = null, this._actionsMenuNode = null, this._focusClose = !1, this._focusContainer = !1, this._focusDockButton = !1, this._focusFeatureMenuButton = !1, this._focusActionsMenuButton = !1, this._focusFirstFeature = !1, this._focusFirstAction = !1, this._handles = new Bi(), this._pointerOffsetInPx = 16, this._spinner = null, this._feature = null, this._featureMenuIntersectionObserverNode = null, this._featureMenuViewportNode = null, this._rootFlowItemNode = null, this._featureMenuIntersectionObserverCallback = ([t]) => {
      t != null && t.isIntersecting && this.viewModel.featurePage != null && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._displaySpinnerThrottled = Ds(() => this._displaySpinner(), Nd), this._exitRelatedRecordsActions = /* @__PURE__ */ new WeakMap(), this._featureSelectionActions = /* @__PURE__ */ new WeakMap(), this._flowItems = new Je(), this.alignment = "auto", this.collapsed = !1, this.collapseEnabled = !0, this.dockEnabled = !1, this.headingLevel = 2, this.maxInlineActions = 3, this.messages = null, this.messagesCommon = null, this.spinnerEnabled = !0, this.viewModel = new Jn(), this.visibleElements = { ...Ur }, this._handleOpenRelatedFeature = (t) => {
      this._openRelatedFeature(t);
    }, this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, D(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.screenLocation;
    }, () => this._positionContainer()), D(() => {
      var t;
      return [(t = this.viewModel) == null ? void 0 : t.active, this.dockEnabled];
    }, () => this._toggleScreenLocationEnabled()), D(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.screenLocation;
    }, (t, i) => {
      !!t != !!i && this.reposition();
    }), D(() => {
      var t, i, r, n, a, o;
      return [(i = (t = this.viewModel) == null ? void 0 : t.view) == null ? void 0 : i.padding, (n = (r = this.viewModel) == null ? void 0 : r.view) == null ? void 0 : n.size, (a = this.viewModel) == null ? void 0 : a.active, (o = this.viewModel) == null ? void 0 : o.location, this.alignment];
    }, () => this.reposition()), D(() => this.spinnerEnabled, (t) => this._spinnerEnabledChange(t)), D(() => {
      var t, i;
      return (i = (t = this.viewModel) == null ? void 0 : t.view) == null ? void 0 : i.size;
    }, (t, i) => this._updateDockEnabledForViewSize(t, i)), D(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.view;
    }, (t, i) => this._viewChange(t, i)), D(() => {
      var t, i;
      return (i = (t = this.viewModel) == null ? void 0 : t.view) == null ? void 0 : i.ready;
    }, (t, i) => this._viewReadyChange(t ?? !1, i ?? !1)), D(() => {
      var t, i;
      return [(t = this.viewModel) == null ? void 0 : t.waitingForResult, (i = this.viewModel) == null ? void 0 : i.location];
    }, () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), D(() => this.selectedFeatureWidget, () => this._destroyFlowItemWidgets()), D(() => {
      var t, i, r, n;
      return [(i = (t = this.selectedFeatureWidget) == null ? void 0 : t.viewModel) == null ? void 0 : i.title, (n = (r = this.selectedFeatureWidget) == null ? void 0 : r.viewModel) == null ? void 0 : n.state];
    }, () => this._setTitleFromFeatureWidget()), D(() => {
      var t, i, r, n;
      return [(i = (t = this.selectedFeatureWidget) == null ? void 0 : t.viewModel) == null ? void 0 : i.content, (n = (r = this.selectedFeatureWidget) == null ? void 0 : r.viewModel) == null ? void 0 : n.state];
    }, () => this._setContentFromFeatureWidget()), Ai(() => !this.collapsed, () => {
      var t, i;
      ((i = (t = this.viewModel) == null ? void 0 : t.view) == null ? void 0 : i.widthBreakpoint) === "xsmall" && this.viewModel.active && this.collapseEnabled && this.viewModel.centerAtLocation();
    }), et(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.allActions;
    }, "change", () => this._watchActions()), D(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.allActions;
    }, () => this._watchActions(), ae), D(() => {
      var t;
      return (t = this.viewModel) == null ? void 0 : t.featureViewModels;
    }, () => this._featureMenuViewportScrollTop()), et(() => this._flowItems, "change", () => {
      this.notifyChange("_activeFlowItemWidget"), this.scheduleRender();
    }), D(() => {
      var t, i, r, n;
      return [(i = (t = this._activeFlowItemWidget) == null ? void 0 : t.viewModel) == null ? void 0 : i.state, (n = (r = this._activeFlowItemWidget) == null ? void 0 : r.viewModel) == null ? void 0 : n.title];
    }, () => this.scheduleRender())]);
  }
  loadDependencies() {
    return ni({ action: () => import("./calcite-action-V1uDcFfW.js"), flow: () => import("./calcite-flow-1SHxEmAO.js"), "flow-item": () => import("./calcite-flow-item-JEGv59tm.js"), icon: () => import("./calcite-icon-qQRYmWQk.js"), tooltip: () => import("./calcite-tooltip-bWi9nIb5.js") });
  }
  initialize() {
    this.addHandles(this._displaySpinnerThrottled);
  }
  destroy() {
    var s, e;
    this._destroyFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), (s = this._handles) == null || s.destroy(), this._unobserveFeatureMenuObserver(), (e = this._featureMenuIntersectionObserver) == null || e.disconnect();
  }
  get actionsMenuId() {
    return `${this.id}-actions-menu`;
  }
  get actionsMenuButtonId() {
    return `${this.id}-actions-menu-button`;
  }
  get featureMenuId() {
    return `${this.id}-feature-menu`;
  }
  get titleId() {
    return `${this.id}-popup-title`;
  }
  get contentId() {
    return `${this.id}-popup-content`;
  }
  get hasContent() {
    const { selectedFeatureWidget: s, viewModel: e } = this;
    if (!s)
      return !!(e != null && e.content);
    const t = s.viewModel;
    if (t != null && t.waitingForContent || (t == null ? void 0 : t.state) === "error")
      return !0;
    const i = t == null ? void 0 : t.content;
    return Array.isArray(i) ? !!i.length : !!i;
  }
  get featureNavigationVisible() {
    return this.viewModel.active && this.viewModel.featureCount > 1 && !!this.visibleElements.featureNavigation;
  }
  get collapsible() {
    return !!(this.collapseEnabled && this.viewModel.title && this.hasContent);
  }
  get featureMenuVisible() {
    return this.featureNavigationVisible && this.featureMenuOpen;
  }
  get contentCollapsed() {
    return this.collapsible && !this.featureMenuVisible && this.collapsed;
  }
  get dividedActions() {
    return this._divideActions();
  }
  get _activeFlowItemWidget() {
    const { _flowItems: s } = this;
    return s.at(-1) ?? null;
  }
  get actions() {
    return this.viewModel.actions;
  }
  set actions(s) {
    this.viewModel.actions = s;
  }
  set actionsMenuOpen(s) {
    this._set("actionsMenuOpen", !!s);
  }
  get actionsMenuOpen() {
    return !!this.viewModel.active && this._get("actionsMenuOpen");
  }
  get autoCloseEnabled() {
    return this.viewModel.autoCloseEnabled;
  }
  set autoCloseEnabled(s) {
    this.viewModel.autoCloseEnabled = s;
  }
  get autoOpenEnabled() {
    return Zs(Ce.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled;
  }
  set autoOpenEnabled(s) {
    Zs(Ce.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled = s;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(s) {
    this.viewModel.defaultPopupTemplateEnabled = s;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(s) {
    this.viewModel.content = s;
  }
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || Vr;
  }
  set dockOptions(s) {
    var o, l;
    const e = { ...Vr }, t = (l = (o = this.viewModel) == null ? void 0 : o.view) == null ? void 0 : l.breakpoints, i = {};
    t && (i.width = t.xsmall, i.height = t.xsmall);
    const r = { ...e, ...s }, n = { ...e.breakpoint, ...i }, { breakpoint: a } = r;
    typeof a == "object" ? r.breakpoint = { ...n, ...a } : a && (r.breakpoint = n), this._set("dockOptions", r), this._setCurrentDockPosition(), this.reposition();
  }
  get featureCount() {
    return this.viewModel.featureCount;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(s) {
    this.viewModel.featureMenuOpen = s;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(s) {
    this.viewModel.features = s;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(s) {
    this.viewModel.goToOverride = s;
  }
  get highlightEnabled() {
    return this.viewModel.highlightEnabled;
  }
  set highlightEnabled(s) {
    this.viewModel.highlightEnabled = s;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(s) {
    this.viewModel.location = s;
  }
  get label() {
    var s;
    return ((s = this.messages) == null ? void 0 : s.widgetLabel) ?? "";
  }
  set label(s) {
    this._overrideIfSome("label", s);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(s) {
    this.viewModel.promises = s;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(s) {
    this.viewModel.selectedFeatureIndex = s;
  }
  get selectedFeatureWidget() {
    const { _feature: s, visibleElements: e, headingLevel: t, _flowItems: i } = this, { selectedFeatureViewModel: r } = this.viewModel, n = { ...e, title: !1 };
    return r ? (s ? (s.viewModel = r, s.visibleElements = n) : this._feature = new kd({ flowItems: i, headingLevel: t + 1, viewModel: r, visibleElements: n }), this._feature) : null;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(s) {
    this.viewModel.title = s;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(s) {
    this.viewModel.updateLocationEnabled = s;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(s) {
    this.viewModel.view = s;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(s) {
    this.viewModel.visible = s;
  }
  castVisibleElements(s) {
    return { ...Ur, ...s };
  }
  blur() {
    const { active: s } = this.viewModel;
    s || Ce.getLogger(this).warn("Popup can only be blurred when currently active."), this.visibleElements.closeButton ? this._blurClose = !0 : this._blurContainer = !0, this.scheduleRender();
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.visible = !1;
  }
  fetchFeatures(s, e) {
    return this.viewModel.fetchFeatures(s, e);
  }
  focus() {
    const { active: s } = this.viewModel;
    s || Ce.getLogger(this).warn("Popup can only be focused when currently active."), this.visibleElements.closeButton ? this._focusClose = !0 : this._focusContainer = !0, this.scheduleRender();
  }
  next() {
    return this.viewModel.next();
  }
  open(s) {
    var r, n;
    this._handles.remove(Hr);
    const e = !!s && !!s.featureMenuOpen, t = !!s && !!s.actionsMenuOpen, i = { collapsed: !!s && !!s.collapsed, actionsMenuOpen: t, featureMenuOpen: e };
    ((n = (r = this.viewModel) == null ? void 0 : r.view) == null ? void 0 : n.widthBreakpoint) === "xsmall" && (i.collapsed = !0), this.set(i), this.viewModel.open(s), this._shouldFocus(s), this._addSelectedFeatureIndexHandle();
  }
  previous() {
    return this.viewModel.previous();
  }
  reposition() {
    this.renderNow(), this._positionContainer(), this._setCurrentAlignment();
  }
  triggerAction(s) {
    return this.viewModel.triggerAction(s);
  }
  render() {
    var _, u, y, v;
    const { actionsMenuOpen: s, dockEnabled: e, featureMenuVisible: t, dividedActions: i, currentAlignment: r, currentDockPosition: n } = this, { active: a } = this.viewModel, { menuActions: o } = i, l = a && o.length > 1 && s, h = a && e, f = a && !e, c = (u = (_ = this.selectedFeature) == null ? void 0 : _.layer) == null ? void 0 : u.title, p = (v = (y = this.selectedFeature) == null ? void 0 : y.layer) == null ? void 0 : v.id, d = { [M.alignTopCenter]: r === "top-center", [M.alignBottomCenter]: r === "bottom-center", [M.alignTopLeft]: r === "top-left", [M.alignBottomLeft]: r === "bottom-left", [M.alignTopRight]: r === "top-right", [M.alignBottomRight]: r === "bottom-right", [M.isDocked]: h, [M.shadow]: f, [M.isDockedTopLeft]: n === "top-left", [M.isDockedTopCenter]: n === "top-center", [M.isDockedTopRight]: n === "top-right", [M.isDockedBottomLeft]: n === "bottom-left", [M.isDockedBottomCenter]: n === "bottom-center", [M.isDockedBottomRight]: n === "bottom-right", [M.isFeatureMenuOpen]: t, [M.isActionsMenuOpen]: l };
    return b("div", { class: this.classes(M.base, d), role: "presentation", "data-layer-title": c, "data-layer-id": p, bind: this, afterCreate: this._positionContainer, afterUpdate: this._positionContainer }, a ? [this.renderMainContainer(), this.renderPointer()] : null);
  }
  renderLoadingIcon() {
    return b("span", { "aria-hidden": "true", class: this.classes(M.icon, M.iconLoading, M.rotating) });
  }
  renderNavigationLoading() {
    const { messagesCommon: s } = this;
    return this.viewModel.pendingPromisesCount ? b("div", { key: Re("loading-container"), role: "presentation", class: M.loadingContainer, "aria-label": s.loading, title: s.loading }, this.renderLoadingIcon()) : null;
  }
  renderPreviousButton() {
    const { messages: s } = this;
    return b("div", { role: "button", tabIndex: 0, bind: this, onclick: this._previous, onkeydown: this._previous, class: this.classes(M.button, M.paginationPrevious), "aria-label": s.previous, title: s.previous }, b("calcite-icon", { icon: "chevron-left", scale: "s", class: M.paginationIcon }));
  }
  renderNextButton() {
    const { messages: s } = this;
    return b("div", { role: "button", tabIndex: 0, bind: this, onclick: this._next, onkeydown: this._next, class: this.classes(M.button, M.paginationNext), "aria-label": s.next, title: s.next }, b("calcite-icon", { icon: "chevron-right", scale: "s", class: M.paginationIcon }));
  }
  renderFeatureMenuButton() {
    const { featureMenuOpen: s, featureMenuId: e, messagesCommon: t } = this, { featureCount: i, selectedFeatureIndex: r } = this.viewModel;
    return b("div", { role: "button", tabIndex: 0, bind: this, onclick: this._toggleFeatureMenu, onkeydown: this._toggleFeatureMenu, afterCreate: this._focusFeatureMenuButtonNode, afterUpdate: this._focusFeatureMenuButtonNode, class: M.featureMenuButton, "aria-haspopup": "true", "aria-controls": e, "aria-expanded": s.toString(), "aria-label": t.menu, title: t.menu }, b("calcite-icon", { icon: "list-bullet", scale: "s", class: M.featureMenuButtonIcon }), this._getPageText(i, r));
  }
  renderNavigationButtons() {
    return this.featureNavigationVisible ? [this.renderPreviousButton(), this.renderNextButton(), this.renderNavigationLoading() || this.renderFeatureMenuButton()] : [];
  }
  renderDockIcon() {
    const { dockEnabled: s } = this, e = this._wouldDockTo(), t = { [M.iconUndock]: s, [M.iconDock]: !s, [M.iconDockToRight]: !s && (e === "top-right" || e === "bottom-right"), [M.iconDockToLeft]: !s && (e === "top-left" || e === "bottom-left"), [M.iconDockToTop]: !s && e === "top-center", [M.iconDockToBottom]: !s && e === "bottom-center" };
    return b("span", { "aria-hidden": "true", class: this.classes(t, M.icon) });
  }
  renderDockButton() {
    var r, n, a;
    const { dockEnabled: s, messages: e } = this, t = (n = (r = this.viewModel) == null ? void 0 : r.view) == null ? void 0 : n.widthBreakpoint, i = s ? e.undock : e.dock;
    return t !== "xsmall" && ((a = this.dockOptions) != null && a.buttonEnabled) ? b("div", { role: "button", "aria-label": i, title: i, tabIndex: 0, bind: this, onclick: this._toggleDockEnabled, onkeydown: this._toggleDockEnabled, afterCreate: this._focusDockButtonNode, afterUpdate: this._focusDockButtonNode, class: this.classes(M.button, M.buttonDock) }, this.renderDockIcon()) : null;
  }
  renderTitle() {
    const { title: s } = this.viewModel, { titleId: e, collapsible: t, contentCollapsed: i, messagesCommon: r } = this, n = { [M.headerContainerButton]: t }, a = b(Rs, { level: this.headingLevel, class: M.headerTitle, innerHTML: s ?? "" }), o = t ? b("button", { key: `${s}--collapsible`, id: e, title: i ? r.expand : r.collapse, bind: this, enterAnimation: this._createFeatureUpdatedAnimation(), class: this.classes(M.headerContainer, n), "aria-expanded": i ? "false" : "true", onclick: this._toggleCollapsed, type: "button" }, a, b("calcite-icon", { class: M.collapseIcon, key: "collapse-icon", icon: i ? "chevron-down" : "chevron-up", scale: "m" })) : b("div", { key: s ?? "title", id: e, bind: this, enterAnimation: this._createFeatureUpdatedAnimation(), class: this.classes(M.headerContainer, n) }, a);
    return s ? o : null;
  }
  renderCloseIcon() {
    return b("span", { "aria-hidden": "true", class: this.classes(M.icon, M.iconClose) });
  }
  renderCloseButton() {
    const { visibleElements: s, messagesCommon: e } = this;
    return s.closeButton ? b("div", { role: "button", tabIndex: 0, bind: this, onclick: this._close, onkeydown: this._close, class: M.button, "aria-label": e.close, title: e.close, afterCreate: this._closeButtonNodeUpdated, afterUpdate: this._closeButtonNodeUpdated }, this.renderCloseIcon()) : null;
  }
  renderHeader() {
    return b("header", { class: M.header }, this.renderTitle(), b("div", { class: M.headerButtons }, this.renderDockButton(), this.renderCloseButton()));
  }
  renderContentContainer() {
    const { contentId: s, hasContent: e, contentCollapsed: t, _flowItems: i } = this, { content: r } = this.viewModel, n = i.toArray(), a = { [M.contentHasFlows]: !!n.length };
    return e && !t ? b("div", { key: r ?? "content", enterAnimation: this._createFeatureUpdatedAnimation(), id: s, class: this.classes(M.content, a) }, b("calcite-flow", { bind: this }, b("calcite-flow-item", { bind: this, "data-node-ref": "_rootFlowItemNode", afterCreate: Ci, key: "root-flow-item", onCalciteFlowItemBack: this._handleBackClick }, this.renderContent()), n.map((o) => this.renderFlowItem(o))), n.map((o) => this.renderFlowItemTooltips(o))) : null;
  }
  renderFlowItem(s) {
    const { messages: e } = this, t = _s(), i = "graphic" in s && !s.isTable;
    return b("calcite-flow-item", { bind: this, class: this.classes({ [M.calciteThemeDark]: !t, [M.calciteThemeLight]: t }), heading: s.title ?? "", description: this._getFlowItemDescription(s), onCalciteFlowItemBack: this._handleBackClick, key: `flow-item-${s.viewModel.uid}` }, b("calcite-action", { class: M.actionExit, icon: "move-up", label: e == null ? void 0 : e.exitRelatedRecords, text: e == null ? void 0 : e.exitRelatedRecords, slot: "header-actions-start", bind: this, afterCreate: (r) => this._storeExitRelatedRecordsAction(s, r), onclick: this._destroyFlowItemWidgets }), i ? b("calcite-action", { class: M.actionSelectFeature, icon: "zoom-to-object", label: e == null ? void 0 : e.selectFeature, text: e == null ? void 0 : e.selectFeature, slot: "header-actions-end", bind: this, afterCreate: (r) => this._storeFeatureSelectionAction(s, r), onclick: () => this._handleOpenRelatedFeature(s) }) : null, b("div", { class: this.classes(M.contentFlowItem, { [M.calciteThemeDark]: t, [M.calciteThemeLight]: !t }) }, s.render()));
  }
  renderFlowItemTooltips(s) {
    const { messages: e, _exitRelatedRecordsActions: t, _featureSelectionActions: i } = this, r = _s(), n = i.get(s);
    return [b("calcite-tooltip", { class: this.classes({ [M.calciteThemeDark]: !r, [M.calciteThemeLight]: r }), key: `exit-related-records-tooltip-${s.viewModel.uid}`, label: e == null ? void 0 : e.exitRelatedRecords, overlayPositioning: "fixed", referenceElement: t.get(s), placement: "top" }, e == null ? void 0 : e.exitRelatedRecords), n ? b("calcite-tooltip", { class: this.classes({ [M.calciteThemeDark]: !r, [M.calciteThemeLight]: r }), key: `select-related-record-tooltip-${s.viewModel.uid}`, label: e == null ? void 0 : e.selectFeature, overlayPositioning: "fixed", referenceElement: n, placement: "top" }, e == null ? void 0 : e.selectFeature) : null];
  }
  renderActionsMenuButton() {
    const { actionsMenuId: s, actionsMenuButtonId: e, actionsMenuOpen: t, dividedActions: i, messagesCommon: r } = this, n = t ? r.close : r.open, { menuActions: a } = i;
    return a.length ? b("div", { key: Re("actions-menu-button"), class: this.classes(M.button, M.actionsMenuButton), role: "button", id: e, "aria-haspopup": "true", "aria-controls": t ? s : null, tabIndex: 0, bind: this, onclick: this._toggleActionsMenu, onkeydown: this._toggleActionsMenu, afterCreate: this._focusActionsMenuButtonNode, afterUpdate: this._focusActionsMenuButtonNode, "aria-label": n, title: n }, b("span", { "aria-hidden": "true", class: M.iconActionsMenu })) : null;
  }
  renderMenuActions() {
    const { actionsMenuId: s, actionsMenuButtonId: e, actionsMenuOpen: t, dividedActions: i } = this, { menuActions: r } = i;
    return r.length && t ? b("ul", { id: s, role: "menu", "aria-labelledby": e, key: Re("actions"), class: M.actions, bind: this, onkeyup: this._handleActionMenuKeyup, afterCreate: this._actionsMenuNodeUpdated, afterUpdate: this._actionsMenuNodeUpdated }, r.toArray().map((n) => this.renderAction({ action: n, type: "menu-item" }))) : null;
  }
  renderInlineActions() {
    const { inlineActions: s } = this.dividedActions;
    return s.length ? s.toArray().map((e) => this.renderAction({ action: e, type: "inline" })) : [];
  }
  renderInlineActionsContainer() {
    const { inlineActions: s, menuActions: e } = this.dividedActions, t = !!s.length, i = !!e.length;
    return t || i ? b("div", { key: "inline-actions-container", "data-inline-actions": t.toString(), "data-menu-actions": i.toString(), class: M.inlineActionsContainer }, this.renderInlineActions(), this.renderActionsMenuButton(), this.renderMenuActions()) : null;
  }
  renderNavigation() {
    return this.featureNavigationVisible ? b("section", { key: Re("navigation"), class: this.classes(M.navigation) }, this.renderNavigationButtons()) : null;
  }
  renderFooter() {
    const { featureNavigationVisible: s, dividedActions: e } = this, { inlineActions: t, menuActions: i } = e, r = !!t.length, n = !!i.length, a = { [M.footerHasPagination]: s, [M.footerHasActions]: r, [M.footerHasActionsMenu]: n };
    return s || r ? b("div", { key: Re("feature-buttons"), class: this.classes(M.footer, a) }, this.renderInlineActionsContainer(), this.renderNavigation()) : null;
  }
  renderFeatureMenuContainer() {
    const { messages: s } = this, { featureViewModels: e, isLoadingFeature: t } = this.viewModel, i = De(s.selectedFeatures, { total: e.length });
    return b("section", { key: Re("menu"), class: M.featureMenu }, b("strong", { class: M.featureMenuHeader }, i), b("nav", { bind: this, class: M.featureMenuViewport, "data-node-ref": "_featureMenuViewportNode", afterCreate: Ci }, this.renderFeatureMenu(), b("div", { class: M.featureMenuObserver, bind: this, afterCreate: this._featureMenuIntersectionObserverCreated }), t ? b("div", { class: M.featureMenuLoader }, this.renderLoadingIcon()) : null));
  }
  renderPointer() {
    return this.dockEnabled ? null : b("div", { key: Re("pointer"), class: M.pointer, role: "presentation" }, b("div", { class: this.classes(M.pointerDirection, M.shadow) }));
  }
  renderMainContainer() {
    const { dockEnabled: s, currentAlignment: e, currentDockPosition: t, titleId: i, contentId: r, collapsible: n, hasContent: a, contentCollapsed: o, visibleElements: l } = this, { title: h } = this.viewModel, f = e === "bottom-left" || e === "bottom-center" || e === "bottom-right" || t === "top-left" || t === "top-center" || t === "top-right", c = e === "top-left" || e === "top-center" || e === "top-right" || t === "bottom-left" || t === "bottom-center" || t === "bottom-right", p = { [M.shadow]: s, [M.isCollapsible]: n, [M.isCollapsed]: o };
    return b("div", { class: this.classes(M.main, M.widget, p), tabIndex: l.closeButton ? void 0 : -1, role: "dialog", "aria-live": "polite", "aria-labelledby": h ? i : "", "aria-describedby": a && !o ? r : "", bind: this, onkeyup: this._handleMainKeyup, afterCreate: this._mainContainerNodeUpdated, afterUpdate: this._mainContainerNodeUpdated }, f ? this.renderFooter() : null, f ? this.renderFeatureMenuContainer() : null, this.renderHeader(), this.renderContentContainer(), c ? this.renderFooter() : null, c ? this.renderFeatureMenuContainer() : null);
  }
  renderContent() {
    var e;
    const s = (e = this.viewModel) == null ? void 0 : e.content;
    return s ? typeof s == "string" ? b("div", { class: Y.contentNode, key: s, innerHTML: s }) : this.renderNodeContent(s) : null;
  }
  renderActionText(s) {
    return b("span", { key: "text", class: M.actionText }, s);
  }
  renderActionCalciteIcon(s, e) {
    return b("calcite-icon", { scale: "s", key: `calcite-icon-${e}`, icon: s, class: M.icon });
  }
  renderActionIcon(s) {
    const e = this._getActionClass(s), t = this._getActionImage(s), i = { [M.iconLoading]: s.active, [M.rotating]: s.active, [M.icon]: !!e, [M.actionImage]: !s.active && !!t };
    return e && (i[e] = !s.active), b("span", { key: "icon", "aria-hidden": "true", class: this.classes(M.icon, i), styles: this._getIconStyles(t) });
  }
  renderAction(s) {
    const { action: e, type: t } = s, i = this._getActionTitle(e), r = { [M.action]: e.type !== "toggle", [M.actionToggle]: e.type === "toggle", [M.actionToggleOn]: e.type === "toggle" && e.value, [M.buttonDisabled]: e.disabled }, n = [e.icon && !e.active ? this.renderActionCalciteIcon(e.icon, e.uid) : this.renderActionIcon(e), this.renderActionText(i)], a = t === "menu-item" ? b("li", { key: e.uid, role: "menuitem", tabIndex: 0, title: i, "aria-label": i, class: this.classes(M.button, r), onkeyup: this._handleActionMenuItemKeyup, bind: this, "data-action-uid": e.uid, onclick: this._triggerAction, onkeydown: this._triggerAction }, n) : b("div", { key: e.uid, role: "button", tabIndex: 0, title: i, "aria-label": i, class: this.classes(M.button, r), onkeyup: this._handleActionMenuItemKeyup, bind: this, "data-action-uid": e.uid, onclick: this._triggerAction, onkeydown: this._triggerAction }, n);
    return e.visible ? a : null;
  }
  renderFeatureMenuItem(s, e) {
    const { messages: t, messagesCommon: i } = this, { selectedFeatureIndex: r, selectedFeatureViewModel: n } = this.viewModel, a = s === n, o = { [M.featureMenuSelected]: a }, l = a ? b("span", { key: Re(`feature-menu-selected-feature-${r}`), title: t.selectedFeature, "aria-label": t.selectedFeature, class: M.iconCheckMark }) : null, h = b("span", { innerHTML: s.title || i.untitled });
    return b("li", { role: "menuitem", tabIndex: -1, key: Re(`feature-menu-feature-${r}`), class: this.classes(o, M.featureMenuItem), bind: this, "data-feature-index": e, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onkeyup: this._handleFeatureMenuItemKeyup, onclick: this._selectFeature, onkeydown: this._selectFeature, onmouseover: this._setActiveFeature, onmouseleave: this._removeActiveFeature }, b("span", { class: M.featureMenuTitle }, h, l));
  }
  renderFeatureMenu() {
    const { featureMenuId: s } = this, { featureViewModels: e } = this.viewModel;
    return e.length > 1 ? b("ol", { class: M.featureMenuList, id: s, bind: this, afterCreate: this._featureMenuNodeUpdated, afterUpdate: this._featureMenuNodeUpdated, onkeyup: this._handleFeatureMenuKeyup, role: "menu" }, e.filter((t) => !!t.graphic).map((t, i) => this.renderFeatureMenuItem(t, i))) : null;
  }
  _storeFeatureSelectionAction(s, e) {
    this._featureSelectionActions.set(s, e), this.scheduleRender();
  }
  _storeExitRelatedRecordsAction(s, e) {
    this._exitRelatedRecordsActions.set(s, e), this.scheduleRender();
  }
  _getFlowItemDescription(s) {
    return "featureCountDescription" in s ? s.featureCountDescription : s.viewModel.description ?? "";
  }
  async _openRelatedFeature(s) {
    await s.viewModel.updateGeometry();
    const e = s.graphic, t = e == null ? void 0 : e.geometry;
    if (t == null || e == null)
      return;
    this._destroyFlowItemWidgets(), await this.viewModel.zoomTo({ target: t });
    const i = Xn(t);
    this.open({ features: [e], location: i ?? void 0 });
  }
  _destroyFlowItemWidgets() {
    this._flowItems.removeAll().forEach((s) => {
      "showAllEnabled" in s.viewModel && (s.viewModel.showAllEnabled = !1), s.viewModel = null, s.destroy();
    });
  }
  _handleBackClick() {
    const s = this._flowItems.pop();
    s && (this._exitRelatedRecordsActions.delete(s), this._featureSelectionActions.delete(s), "showAllEnabled" in s.viewModel && (s.viewModel.showAllEnabled = !1), s && (s.viewModel = null, s.destroy()));
  }
  _getActionTitle(s) {
    const { messages: e, selectedFeature: t, messagesCommon: i } = this, { id: r } = s, n = t == null ? void 0 : t.attributes, a = s.title ?? "", o = r === "zoom-to-feature" ? De(a, { messages: e }) : r === "remove-selected-feature" ? De(a, { messages: i }) : r === "zoom-to-clustered-features" || r === "browse-clustered-features" ? De(a, { messages: e }) : s.title;
    return o && n ? De(o, n) : o ?? "";
  }
  _getActionClass(s) {
    const { selectedFeature: e } = this, t = e == null ? void 0 : e.attributes, { className: i, image: r } = s, n = r || i ? i : M.iconDefaultAction;
    return n && t ? De(n, t) : n ?? "";
  }
  _getActionImage(s) {
    if (s.active)
      return "";
    const { selectedFeature: e } = this, t = e == null ? void 0 : e.attributes, { image: i } = s;
    return i && t ? De(i, t) : i ?? "";
  }
  _createFeatureUpdatedAnimation() {
    return $a("enter", M.hasFeatureUpdated);
  }
  _getInlineActionCount() {
    const { maxInlineActions: s, featureNavigationVisible: e } = this;
    if (typeof s != "number")
      return null;
    const t = Math.round(s);
    return Math.max(e ? t - 1 : t, 0);
  }
  _watchActions() {
    const { allActions: s } = this.viewModel;
    this.notifyChange("dividedActions");
    const e = "actions";
    this._handles.remove(e), s && s.forEach((t) => {
      this._handles.add(D(() => [t.uid, t.active, t.className, t.disabled, t.id, t.title, t.image, t.visible], () => this.scheduleRender()), e);
    });
  }
  _divideActions() {
    const { allActions: s } = this.viewModel, e = s.filter((n) => n.visible), t = this._getInlineActionCount(), i = t === null, r = t === 0;
    return { inlineActions: i ? e.slice(0) : r ? new Je() : e.slice(0, t), menuActions: i ? new Je() : r ? e.slice(0) : e.slice(t) };
  }
  _featureMenuOpenChanged(s) {
    s ? this._focusFirstFeature = !0 : this._focusFeatureMenuButton = !0;
  }
  _actionsMenuOpenChanged(s) {
    s ? this._focusFirstAction = !0 : this._focusActionsMenuButton = !0;
  }
  _setTitleFromFeatureWidget() {
    var t, i;
    const { selectedFeatureWidget: s, messagesCommon: e } = this;
    s && (this.viewModel.title = ((t = s.viewModel) == null ? void 0 : t.state) === "error" ? e.errorMessage : ((i = s.viewModel) == null ? void 0 : i.title) || "");
  }
  _setContentFromFeatureWidget() {
    const { selectedFeatureWidget: s } = this;
    s && (this.viewModel.content = s);
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(s) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(s), this._featureMenuIntersectionObserverNode = s;
  }
  _handleFeatureMenuKeyup(s) {
    Mt(s) === "Escape" && (s.stopPropagation(), this._focusFeatureMenuButton = !0, this.featureMenuOpen = !1, this.scheduleRender());
  }
  _handleActionMenuKeyup(s) {
    Mt(s) === "Escape" && (s.stopPropagation(), this._focusActionsMenuButton = !0, this.actionsMenuOpen = !1, this.scheduleRender());
  }
  _setActiveFeature(s) {
    const { viewModel: e } = this, t = ms(s.currentTarget);
    e.activeFeature = e.features[t] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _handleFeatureMenuItemKeyup(s) {
    const e = Mt(s), { _featureMenuNode: t } = this, i = ms(s.currentTarget);
    if (!t)
      return;
    const r = t.querySelectorAll("li"), n = r.length;
    e !== "ArrowUp" ? e !== "ArrowDown" ? e !== "Home" ? e !== "End" || (s.stopPropagation(), r[r.length - 1].focus()) : (s.stopPropagation(), r[0].focus()) : (s.stopPropagation(), r[(i + 1 + n) % n].focus()) : (s.stopPropagation(), r[(i - 1 + n) % n].focus());
  }
  _handleActionMenuItemKeyup(s) {
    const e = Mt(s), { _actionsMenuNode: t } = this, i = s.currentTarget.dataset.actionUid, { menuActions: r } = this.dividedActions, n = r.findIndex((l) => l.uid === i);
    if (!t)
      return;
    const a = t.querySelectorAll("li"), o = a.length;
    e !== "ArrowUp" ? e !== "ArrowDown" ? e !== "Home" ? e !== "End" || (s.stopPropagation(), a[a.length - 1].focus()) : (s.stopPropagation(), a[0].focus()) : (s.stopPropagation(), a[(n + 1 + o) % o].focus()) : (s.stopPropagation(), a[(n - 1 + o) % o].focus());
  }
  _handleMainKeyup(s) {
    const e = Mt(s);
    e === "ArrowLeft" && (s.stopPropagation(), this.previous()), e === "ArrowRight" && (s.stopPropagation(), this.next());
  }
  _spinnerEnabledChange(s) {
    if (this._destroySpinner(), !s)
      return;
    const e = this.get("viewModel.view");
    this._createSpinner(e);
  }
  _hideSpinner() {
    const { _spinner: s } = this;
    s && (s.location = null, s.hide());
  }
  _displaySpinner() {
    const { _spinner: s } = this;
    if (!s)
      return;
    const { location: e, waitingForResult: t } = this.viewModel;
    t && e ? s.show({ location: e }) : s.hide();
  }
  _getIconStyles(s) {
    return { "background-image": s ? `url(${s})` : "" };
  }
  async _shouldFocus(s) {
    s != null && s.shouldFocus && (await Ba(() => {
      var e;
      return ((e = this.viewModel) == null ? void 0 : e.active) === !0;
    }), this.focus());
  }
  _addSelectedFeatureIndexHandle() {
    const s = D(() => {
      var e;
      return (e = this.viewModel) == null ? void 0 : e.selectedFeatureIndex;
    }, (e, t) => this._selectedFeatureIndexUpdated(e, t));
    this._handles.add(s, Hr);
  }
  _selectedFeatureIndexUpdated(s, e) {
    const { featureCount: t } = this;
    t && s !== e && s !== -1 && (this._destroyFlowItemWidgets(), this.actionsMenuOpen = !1, this.featureMenuOpen = !1, this._mainContainerNode && (this._mainContainerNode.scrollTop = 0), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _destroySelectedFeatureWidget() {
    const { _feature: s } = this;
    s && (s.viewModel = null, s && !s.destroyed && s.destroy()), this._feature = null;
  }
  _isScreenLocationWithinView(s, e) {
    return s.x > -1 && s.y > -1 && s.x <= e.width && s.y <= e.height;
  }
  _isOutsideView(s) {
    const { popupHeight: e, popupWidth: t, screenLocation: i, side: r, view: n } = s;
    if (isNaN(t) || isNaN(e) || !n || !i)
      return !1;
    const a = n.padding;
    return r === "right" && i.x + t / 2 > n.width - a.right || r === "left" && i.x - t / 2 < a.left || r === "top" && i.y - e < a.top || r === "bottom" && i.y + e > n.height - a.bottom;
  }
  _calculateAutoAlignment(s) {
    if (s !== "auto")
      return s;
    const { _pointerOffsetInPx: e, _containerNode: t, _mainContainerNode: i, viewModel: r } = this, { screenLocation: n, view: a } = r;
    if (n == null || !a || !t)
      return "top-center";
    if (!this._isScreenLocationWithinView(n, a))
      return this._get("currentAlignment") || "top-center";
    function o(w) {
      return parseInt(w.replaceAll(/[^-\d\.]/g, ""), 10);
    }
    const l = i ? window.getComputedStyle(i, null) : null, h = l ? o(l.getPropertyValue("max-height")) : 0, f = l ? o(l.getPropertyValue("height")) : 0, { height: c, width: p } = t.getBoundingClientRect(), d = p + e, _ = Math.max(c, h, f) + e, u = this._isOutsideView({ popupHeight: _, popupWidth: d, screenLocation: n, side: "right", view: a }), y = this._isOutsideView({ popupHeight: _, popupWidth: d, screenLocation: n, side: "left", view: a }), v = this._isOutsideView({ popupHeight: _, popupWidth: d, screenLocation: n, side: "top", view: a }), x = this._isOutsideView({ popupHeight: _, popupWidth: d, screenLocation: n, side: "bottom", view: a });
    return y ? v ? "bottom-right" : "top-right" : u ? v ? "bottom-left" : "top-left" : v ? x ? "top-center" : "bottom-center" : "top-center";
  }
  _callCurrentAlignment(s) {
    return typeof s == "function" ? s.call(this) : s;
  }
  _getCurrentAlignment() {
    const { alignment: s, dockEnabled: e } = this;
    return e || !this.viewModel.active ? null : this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(s)));
  }
  _setCurrentAlignment() {
    this._set("currentAlignment", this._getCurrentAlignment());
  }
  _setCurrentDockPosition() {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }
  _calculatePositionResult(s) {
    const e = ["left", "right"];
    return ft(this.container) && e.reverse(), s == null ? void 0 : s.replace(/leading/gi, e[0]).replaceAll(/trailing/gi, e[1]);
  }
  _callDockPosition(s) {
    return typeof s == "function" ? s.call(this) : s;
  }
  _getDockPosition() {
    var s;
    return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition((s = this.dockOptions) == null ? void 0 : s.position)));
  }
  _getCurrentDockPosition() {
    return this.dockEnabled && this.viewModel.active ? this._getDockPosition() : null;
  }
  _wouldDockTo() {
    return this.dockEnabled ? null : this._getDockPosition();
  }
  _calculateAutoDockPosition(s) {
    var a;
    if (s !== "auto")
      return s;
    const e = (a = this.viewModel) == null ? void 0 : a.view, t = ft(this.container) ? "top-left" : "top-right";
    if (!e)
      return t;
    const i = e.padding || { left: 0, right: 0, top: 0, bottom: 0 }, r = e.width - i.left - i.right, { breakpoints: n } = e;
    return n && r <= n.xsmall ? "bottom-center" : t;
  }
  _positionContainer(s = this._containerNode) {
    if (s && (this._containerNode = s), !this._containerNode)
      return;
    const { screenLocation: e } = this.viewModel, { width: t } = this._containerNode.getBoundingClientRect(), i = this._calculatePositionStyle(e, t);
    i && Object.assign(this._containerNode.style, i);
  }
  _calculateFullWidth(s) {
    const { currentAlignment: e, _pointerOffsetInPx: t } = this;
    return e === "top-left" || e === "bottom-left" || e === "top-right" || e === "bottom-right" ? s + t : s;
  }
  _calculateAlignmentPosition(s, e, t, i) {
    const { currentAlignment: r, _pointerOffsetInPx: n } = this;
    if (!t)
      return;
    const { padding: a } = t, o = i / 2, l = t.height - e, h = t.width - s;
    return r === "bottom-center" ? { top: e + n - a.top, left: s - o - a.left } : r === "top-left" ? { bottom: l + n - a.bottom, right: h + n - a.right } : r === "bottom-left" ? { top: e + n - a.top, right: h + n - a.right } : r === "top-right" ? { bottom: l + n - a.bottom, left: s + n - a.left } : r === "bottom-right" ? { top: e + n - a.top, left: s + n - a.left } : r === "top-center" ? { bottom: l + n - a.bottom, left: s - o - a.left } : void 0;
  }
  _calculatePositionStyle(s, e) {
    const { dockEnabled: t, view: i } = this;
    if (!i)
      return;
    if (t)
      return { left: "", top: "", right: "", bottom: "" };
    if (s == null || !e)
      return;
    const r = this._calculateFullWidth(e), n = this._calculateAlignmentPosition(s.x, s.y, i, r);
    return n ? { top: n.top !== void 0 ? `${n.top}px` : "auto", left: n.left !== void 0 ? `${n.left}px` : "auto", bottom: n.bottom !== void 0 ? `${n.bottom}px` : "auto", right: n.right !== void 0 ? `${n.right}px` : "auto" } : void 0;
  }
  _viewChange(s, e) {
    s && e && (this.close(), this.clear());
  }
  _viewReadyChange(s, e) {
    if (s) {
      const t = this.get("viewModel.view");
      this._wireUpView(t);
    } else
      e && (this.close(), this.clear());
  }
  _wireUpView(s) {
    if (this._destroySpinner(), !s)
      return;
    const { spinnerEnabled: e } = this;
    e && this._createSpinner(s), this._setDockEnabledForViewSize(this.dockOptions);
  }
  _dockingThresholdCrossed(s, e, t) {
    const [i, r] = s, [n, a] = e, { width: o = 0, height: l = 0 } = t ?? {};
    return i <= o && n > o || i > o && n <= o || r <= l && a > l || r > l && a <= l;
  }
  _updateDockEnabledForViewSize(s, e) {
    if (!s || !e)
      return;
    const t = this.get("viewModel.view.padding") || { left: 0, right: 0, top: 0, bottom: 0 }, i = t.left + t.right, r = t.top + t.bottom, n = [], a = [];
    n[0] = s[0] - i, n[1] = s[1] - r, a[0] = e[0] - i, a[1] = e[1] - r;
    const { dockOptions: o } = this, l = o.breakpoint;
    this._dockingThresholdCrossed(n, a, l) && this._setDockEnabledForViewSize(o), this._setCurrentDockPosition();
  }
  _focusDockButtonNode(s) {
    this._focusDockButton && (this._focusDockButton = !1, s.focus());
  }
  _closeButtonNodeUpdated(s) {
    return this._focusClose ? (this._focusClose = !1, void s.focus()) : this._blurClose ? (this._blurClose = !1, void s.blur()) : void 0;
  }
  _mainContainerNodeUpdated(s) {
    return this._mainContainerNode = s, this._focusContainer ? (this._focusContainer = !1, void s.focus()) : this._blurContainer ? (this._blurContainer = !1, void s.blur()) : void 0;
  }
  _featureMenuNodeUpdated(s) {
    if (this._featureMenuNode = s, !s || !this._focusFirstFeature)
      return;
    this._focusFirstFeature = !1;
    const e = s.querySelectorAll("li");
    e.length && e[0].focus();
  }
  _actionsMenuNodeUpdated(s) {
    if (this._actionsMenuNode = s, !s || !this._focusFirstAction)
      return;
    this._focusFirstAction = !1;
    const e = s.querySelectorAll("li");
    e.length && e[0].focus();
  }
  _focusFeatureMenuButtonNode(s) {
    this._focusFeatureMenuButton && (this._focusFeatureMenuButton = !1, s.focus());
  }
  _focusActionsMenuButtonNode(s) {
    this._focusActionsMenuButton && (this._focusActionsMenuButton = !1, s.focus());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && (this._featureMenuViewportNode.scrollTop = 0);
  }
  _toggleScreenLocationEnabled() {
    const { dockEnabled: s, viewModel: e } = this;
    if (!e)
      return;
    const t = e.active && !s;
    e.screenLocationEnabled = t;
  }
  _shouldDockAtCurrentViewSize(s) {
    var o, l;
    const e = s.breakpoint, t = (l = (o = this.viewModel) == null ? void 0 : o.view) == null ? void 0 : l.ui;
    if (!t)
      return !1;
    const { width: i, height: r } = t;
    if (isNaN(i) || isNaN(r) || !e)
      return !1;
    const n = e.hasOwnProperty("width") && i <= (e.width ?? 0), a = e.hasOwnProperty("height") && r <= (e.height ?? 0);
    return n || a;
  }
  _setDockEnabledForViewSize(s) {
    s.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(s));
  }
  _getPageText(s, e) {
    return this.featureNavigationVisible ? De(this.messages.pageText, { index: e + 1, total: s }) : null;
  }
  _destroySpinner() {
    var s, e;
    this._spinner && ((e = (s = this.view) == null ? void 0 : s.ui) == null || e.remove(this._spinner, zr), this._spinner.destroy(), this._spinner = null);
  }
  _createSpinner(s) {
    s && (this._spinner = new Ad({ view: s }), s.ui.add(this._spinner, { key: zr, position: "manual", internal: !0 }));
  }
  _toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  _close() {
    this.close(), this.view && this.view.focus();
  }
  _toggleDockEnabled() {
    this.dockEnabled = !this.dockEnabled, this._focusDockButton = !0, this.scheduleRender();
  }
  _toggleFeatureMenu() {
    const s = !this.featureMenuOpen;
    this._featureMenuOpenChanged(s), this.actionsMenuOpen = !1, this.featureMenuOpen = s;
  }
  _toggleActionsMenu() {
    const s = !this.actionsMenuOpen;
    this._actionsMenuOpenChanged(s), this.featureMenuOpen = !1, this.actionsMenuOpen = s;
  }
  _triggerAction(s) {
    const e = s.currentTarget.dataset.actionUid, { allActions: t } = this.viewModel, i = t.findIndex((n) => n.uid === e), r = t.at(i);
    r && r.type === "toggle" && (r.value = !r.value), this.actionsMenuOpen = !1, this.viewModel.triggerAction(i);
  }
  _selectFeature(s) {
    const e = ms(s.currentTarget);
    e == null || isNaN(e) || (this.viewModel.selectedFeatureIndex = e), this.featureMenuOpen = !1, this._focusFeatureMenuButton = !0, this.scheduleRender();
  }
  _next() {
    this.next();
  }
  _previous() {
    this.previous();
  }
};
function ms(s) {
  return s == null ? void 0 : s["data-feature-index"];
}
g([m({ readOnly: !0 })], A.prototype, "actionsMenuId", null), g([m({ readOnly: !0 })], A.prototype, "actionsMenuButtonId", null), g([m({ readOnly: !0 })], A.prototype, "featureMenuId", null), g([m({ readOnly: !0 })], A.prototype, "titleId", null), g([m({ readOnly: !0 })], A.prototype, "contentId", null), g([m({ readOnly: !0 })], A.prototype, "hasContent", null), g([m({ readOnly: !0 })], A.prototype, "featureNavigationVisible", null), g([m({ readOnly: !0 })], A.prototype, "collapsible", null), g([m({ readOnly: !0 })], A.prototype, "featureMenuVisible", null), g([m({ readOnly: !0 })], A.prototype, "contentCollapsed", null), g([m({ readOnly: !0 })], A.prototype, "dividedActions", null), g([m({ readOnly: !0, dependsOn: ["_flowItems.length"] })], A.prototype, "_activeFlowItemWidget", null), g([m()], A.prototype, "actions", null), g([m()], A.prototype, "actionsMenuOpen", null), g([m()], A.prototype, "alignment", void 0), g([m()], A.prototype, "autoCloseEnabled", null), g([m()], A.prototype, "autoOpenEnabled", null), g([m()], A.prototype, "defaultPopupTemplateEnabled", null), g([m()], A.prototype, "content", null), g([m()], A.prototype, "collapsed", void 0), g([m()], A.prototype, "collapseEnabled", void 0), g([m({ readOnly: !0 })], A.prototype, "currentAlignment", null), g([m({ readOnly: !0 })], A.prototype, "currentDockPosition", null), g([m()], A.prototype, "dockOptions", null), g([m()], A.prototype, "dockEnabled", void 0), g([m({ readOnly: !0 })], A.prototype, "featureCount", null), g([m()], A.prototype, "featureMenuOpen", null), g([m()], A.prototype, "features", null), g([m()], A.prototype, "goToOverride", null), g([m()], A.prototype, "headingLevel", void 0), g([m()], A.prototype, "highlightEnabled", null), g([m()], A.prototype, "location", null), g([m()], A.prototype, "label", null), g([m()], A.prototype, "maxInlineActions", void 0), g([m(), Ae("geoscene/widgets/Popup/t9n/Popup")], A.prototype, "messages", void 0), g([m(), Ae("geoscene/t9n/common")], A.prototype, "messagesCommon", void 0), g([m()], A.prototype, "promises", null), g([m({ readOnly: !0 })], A.prototype, "selectedFeature", null), g([m()], A.prototype, "selectedFeatureIndex", null), g([m({ readOnly: !0 })], A.prototype, "selectedFeatureWidget", null), g([m()], A.prototype, "spinnerEnabled", void 0), g([m()], A.prototype, "title", null), g([m()], A.prototype, "updateLocationEnabled", null), g([m()], A.prototype, "view", null), g([m({ type: Jn }), za(["triggerAction", "trigger-action"])], A.prototype, "viewModel", void 0), g([m()], A.prototype, "visible", null), g([m()], A.prototype, "visibleElements", void 0), g([_t("visibleElements")], A.prototype, "castVisibleElements", null), g([Ue()], A.prototype, "_close", null), g([Ue()], A.prototype, "_toggleDockEnabled", null), g([Ue()], A.prototype, "_toggleFeatureMenu", null), g([Ue()], A.prototype, "_toggleActionsMenu", null), g([Ue()], A.prototype, "_triggerAction", null), g([Ue()], A.prototype, "_selectFeature", null), g([Ue()], A.prototype, "_next", null), g([Ue()], A.prototype, "_previous", null), A = g([K("geoscene.widgets.Popup")], A);
const Hd = A, su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hd
}, Symbol.toStringTag, { value: "Module" }));
export {
  wl as $,
  xe as A,
  wc as B,
  br as C,
  Pc as D,
  Ei as E,
  Ot as F,
  te as G,
  _c as H,
  vc as I,
  Me as J,
  Vl as K,
  js as L,
  As as M,
  $c as N,
  Pe as O,
  cl as P,
  wi as Q,
  He as R,
  yc as S,
  sh as T,
  oi as U,
  xc as V,
  fc as W,
  I as X,
  At as Y,
  q as Z,
  dl as _,
  W as a,
  su as a0,
  Mc as b,
  k as c,
  Xl as d,
  Kl as e,
  B as f,
  ge as g,
  Cs as h,
  Fn as i,
  me as j,
  Pn as k,
  F as l,
  Ye as m,
  ve as n,
  ks as o,
  Il as p,
  Jt as q,
  pl as r,
  Yl as s,
  lh as t,
  Zt as u,
  Xe as v,
  _l as w,
  ut as x,
  ie as y,
  X as z
};