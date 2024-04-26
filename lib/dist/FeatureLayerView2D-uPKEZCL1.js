import { e as l, d, a as q, b as A, ay as se, Z as x, w as C, hn as ue, ho as de, eC as he, hp as b, cV as ce, hq as pe, H as J, hr as ye, r as p, s as ae, hs as fe, z as ne, ax as ge, i as _e, $ as z, A as L, ht as H, hu as j, dI as oe, dg as me, de as M, hv as Q, hw as ve, hx as B, hy as we, hz as be, hA as D, hB as k, l as le, y as S, hC as Re, X as Ee, cc as G, f as K, j as xe, x as W, M as Fe, P as Se, S as qe, g as I, fx as Z, e4 as Ie } from "./index-Ek1MTSEY.js";
import { h as X } from "./Container-zrthpNTa.js";
import { P as Oe } from "./enums-YM9SAu8u.js";
import { f as Ce, u as Te } from "./LayerView-d-au0HlH.js";
import { d as Ve, f as Ue, m as $e, c as ke, I as Pe } from "./schemaUtils-U3wpMwz7.js";
import { e as Ne } from "./util-_ClfQE9K.js";
import { d as P, t as Ae } from "./popupUtils-bYu52YBh.js";
import { o as Y } from "./floorFilterUtils-HsstcPZ9.js";
import { i as Je } from "./RefreshableLayerView-7pUptc3P.js";
import "vue";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./MD5-ekk-4Jqp.js";
let T = class extends A {
  constructor() {
    super(...arguments), this.isAggregate = !0;
  }
  getEffectivePopupTemplate(i = !1) {
    if (this.popupTemplate)
      return this.popupTemplate;
    const e = this.sourceLayer && this.sourceLayer.featureReduction;
    return e && "popupTemplate" in e && e.popupEnabled ? e.popupTemplate : null;
  }
  getObjectId() {
    return this.objectId;
  }
};
l([d({ type: Boolean })], T.prototype, "isAggregate", void 0), l([d({ type: Number, json: { read: !0 } })], T.prototype, "objectId", void 0), T = l([q("geoscene.AggregateGraphic")], T);
const ee = T;
let m = class extends se {
  constructor(i) {
    super(i), this._filter = null, this.duration = x("mapview-transitions-duration"), this._excludedEffectView = new X(i), this._includedEffectView = new X(i);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(i) {
    this._get("featureEffect") !== i && this._transitionTo(i);
  }
  get filter() {
    var i;
    return this._filter || ((i = C(this.featureEffect)) == null ? void 0 : i.filter) || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(i) {
    this._set("scale", i), this._excludedEffectView.scale = i, this._includedEffectView.scale = i;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(i, e) {
    this._set("scale", e), this.transitioning ? (this._includedEffectView.transitionStep(i, e), this._excludedEffectView.transitionStep(i, e), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = e, this._includedEffectView.scale = e);
  }
  end() {
    this._includedEffectView.end(), this._excludedEffectView.end(), this._filter = null;
  }
  _transitionTo(i) {
    const e = this._get("featureEffect"), t = C(i), r = C(t == null ? void 0 : t.includedEffect), s = C(t == null ? void 0 : t.excludedEffect), a = this._includedEffectView.canTransitionTo(r) && this._excludedEffectView.canTransitionTo(s);
    this._includedEffectView.effect = r, this._excludedEffectView.effect = s, this._set("featureEffect", t), this._filter = (t == null ? void 0 : t.filter) || (e == null ? void 0 : e.filter) || null, a || this.end();
  }
};
l([d()], m.prototype, "_filter", void 0), l([d()], m.prototype, "_excludedEffectView", void 0), l([d()], m.prototype, "_includedEffectView", void 0), l([d()], m.prototype, "duration", void 0), l([d()], m.prototype, "excludedEffects", null), l([d()], m.prototype, "featureEffect", null), l([d()], m.prototype, "filter", null), l([d()], m.prototype, "hasEffects", null), l([d()], m.prototype, "includedEffects", null), l([d({ value: 0 })], m.prototype, "scale", null), l([d()], m.prototype, "transitioning", null), m = l([q("geoscene.layers.effects.FeatureEffectView")], m);
const ze = m;
async function Le(i, e) {
  if (!i)
    return null;
  switch (i.type) {
    case "class-breaks":
    case "simple":
    case "unique-value":
    case "dot-density":
    case "dictionary":
      return new (await import("./SymbolTileRenderer-D5Uz-Nft.js")).default(e);
    case "heatmap":
      return new (await import("./HeatmapTileRenderer-F4wwLS5J.js")).default(e);
  }
}
function N(i) {
  return i.some((e) => e.globalId);
}
function O(i) {
  return i.filter((e) => !e.error).map((e) => {
    var t;
    return (t = e.objectId) != null ? t : e.globalId;
  });
}
function te(i, e) {
  const t = new Set(i);
  for (const r of e.values())
    t.add(r);
  return t;
}
function ie(i, e) {
  const t = new Set(i);
  for (const r of e.values())
    t.delete(r);
  return t;
}
let $ = class extends se {
  constructor(e) {
    super(e), this._hasGlobalIds = !1;
  }
  normalizeCtorArgs(e) {
    return this._queueProcessor = new ue({ concurrency: 1, process: e.process }), {};
  }
  destroy() {
    this.clear();
  }
  get updating() {
    return this._queueProcessor.length > 0;
  }
  clear() {
    this._queueProcessor.clear();
  }
  push(e) {
    const t = this._queueProcessor, r = t.last();
    switch (e.type) {
      case "update":
      case "refresh":
        if ((r == null ? void 0 : r.type) === e.type)
          return;
        t.push(e).finally(() => this.notifyChange("updating"));
        break;
      case "edit": {
        const s = (r == null ? void 0 : r.type) === "processed-edit" ? r : null;
        s && t.popLast();
        const a = this._mergeEdits(s, e);
        for (const o of a)
          t.push(o).finally(() => this.notifyChange("updating"));
        break;
      }
    }
    this.notifyChange("updating");
  }
  _mergeEdits(e, t) {
    var r, s;
    const { addedFeatures: a, deletedFeatures: o, updatedFeatures: n } = t.edits;
    if (this._hasGlobalIds = this._hasGlobalIds || N(a) || N(n) || N(o), this._hasGlobalIds)
      return [e, { type: "processed-edit", edits: { addOrModified: [...a, ...n], removed: o } }];
    const u = new Set(O((r = e == null ? void 0 : e.edits.addOrModified) != null ? r : [])), h = new Set(O((s = e == null ? void 0 : e.edits.removed) != null ? s : [])), c = /* @__PURE__ */ new Set([...O(a), ...O(n)]), f = new Set(O(o));
    return [{ type: "processed-edit", edits: { addOrModified: Array.from(te(ie(u, f), c)).map((y) => ({ objectId: y })), removed: Array.from(te(ie(h, c), f)).map((y) => ({ objectId: y })) } }];
  }
};
l([d({ readOnly: !0 })], $.prototype, "updating", null), $ = l([q("geoscene.views.2d.layers.support.FeatureCommandQueue")], $);
const He = $;
function je(i) {
  return Array.isArray(i);
}
let F = class extends de {
  constructor(e) {
    super(e), this._startupResolver = he(), this.isReady = !1;
  }
  initialize() {
    this._controller = new AbortController(), this.addResolvingPromise(this._startWorker(this._controller.signal));
  }
  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }
  set tileRenderer(e) {
    this.client.tileRenderer = e;
  }
  get closed() {
    return this._connection.closed;
  }
  async startup(e, t, r, s) {
    await this.when();
    const a = this._controller.signal, o = je(r.source) ? { transferList: r.source, signal: a } : void 0, n = { service: r, config: t, tileInfo: e.tileInfo.toJSON(), tiles: s };
    await this._connection.invoke("startup", n, o), this._startupResolver.resolve(), this._set("isReady", !0);
  }
  async updateTiles(e) {
    return await this._startupResolver.promise, b(this._connection.invoke("updateTiles", e));
  }
  async update(e) {
    const t = { config: e };
    return await this._startupResolver.promise, this._connection.invoke("update", t);
  }
  async applyUpdate(e) {
    return await this._startupResolver.promise, this._connection.invoke("applyUpdate", e);
  }
  async setHighlight(e) {
    return await this._startupResolver.promise, b(this._connection.invoke("controller.setHighlight", e));
  }
  async stop() {
    if (await this._startupResolver.promise, !this.closed)
      return b(this._connection.invoke("stop"));
  }
  async refresh(e) {
    return await this._startupResolver.promise, b(this._connection.invoke("controller.refresh", e));
  }
  async querySummaryStatistics(e, t, r) {
    return await this._startupResolver.promise, this._connection.invoke("controller.querySummaryStatistics", { query: e.toJSON(), params: t }, r);
  }
  async queryUniqueValues(e, t, r) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryUniqueValues", { query: e.toJSON(), params: t }, r);
  }
  async queryClassBreaks(e, t, r) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryClassBreaks", { query: e.toJSON(), params: t }, r);
  }
  async queryHistogram(e, t, r) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryHistogram", { query: e.toJSON(), params: t }, r);
  }
  async queryFeatures(e, t) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatures", e.toJSON(), t);
  }
  async queryVisibleFeatures(e, t) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryVisibleFeatures", e.toJSON(), t);
  }
  async queryObjectIds(e, t) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryObjectIds", e.toJSON(), t);
  }
  async queryFeatureCount(e, t) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatureCount", e.toJSON(), t);
  }
  async queryExtent(e, t) {
    return this._connection.invoke("controller.queryExtent", e.toJSON(), t);
  }
  async queryLatestObservations(e, t) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryLatestObservations", e.toJSON(), t);
  }
  async queryStatistics(e) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryStatistics", e);
  }
  async getObjectId(e) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getObjectId", e);
  }
  async getDisplayId(e) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getDisplayId", e);
  }
  async getFeatures(e) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getFeatures", e);
  }
  async getAggregates() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregates");
  }
  async getAggregateValueRanges() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregateValueRanges");
  }
  async mapValidDisplayIds(e) {
    return await this._startupResolver.promise, this._connection.invoke("controller.mapValidDisplayIds", e);
  }
  async onEdits(e) {
    return await this._startupResolver.promise, b(this._connection.invoke("controller.onEdits", e));
  }
  async enableEvent(e, t) {
    return await this._startupResolver.promise, b(this._connection.invoke("controller.enableEvent", { name: e, value: t }));
  }
  pauseStream() {
    return b(this._connection.invoke("controller.pauseStream"));
  }
  resumeStream() {
    return b(this._connection.invoke("controller.resumeStream"));
  }
  async _startWorker(e) {
    try {
      this._connection = await ce("Pipeline", { client: this.client, strategy: "dedicated", signal: e });
    } catch (t) {
      pe(t);
    }
  }
};
l([d()], F.prototype, "isReady", void 0), l([d()], F.prototype, "client", void 0), l([d()], F.prototype, "tileRenderer", null), F = l([q("geoscene.views.2d.layers.support.FeatureLayerProxy")], F);
const Me = F, Qe = 1e-6;
class Be {
  constructor(e) {
    this._tiles = /* @__PURE__ */ new Map(), this.buffer = 0, this.acquireTile = e.acquireTile, this.releaseTile = e.releaseTile, this.tileInfoView = e.tileInfoView, this.buffer = e.buffer;
  }
  destroy() {
  }
  clear() {
    this._tiles.forEach((e) => this._releaseTile(e));
  }
  tileKeys() {
    const e = [];
    return this._tiles.forEach((t, r) => e.push(r)), e;
  }
  update(e) {
    const t = this.tileInfoView.getTileCoverage(e.state, this.buffer, "closest"), { spans: r, lodInfo: s } = t, { level: a } = s, o = [], n = [], u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
    for (const { row: c, colFrom: f, colTo: y } of r)
      for (let _ = f; _ <= y; _++) {
        const v = J.getId(a, c, s.normalizeCol(_), s.getWorldForColumn(_)), w = this._getOrAcquireTile(o, v);
        u.add(v), w.isReady ? w.visible = !0 : h.add(w.key);
      }
    return h.forEach((c) => this._addPlaceholders(u, c)), this._tiles.forEach((c) => {
      u.has(c.key.id) || (n.push(c.key.id), this._releaseTile(c));
    }), ye.pool.release(t), { hasMissingTiles: h.size > 0, added: o, removed: n };
  }
  _getOrAcquireTile(e, t) {
    if (!this._tiles.has(t)) {
      const r = this.acquireTile(new J(t));
      e.push(t), this._tiles.set(t, r), r.visible = !1;
    }
    return this._tiles.get(t);
  }
  _getTile(e) {
    return this._tiles.get(e);
  }
  _releaseTile(e) {
    this._tiles.delete(e.key.id), this.releaseTile(e);
  }
  _addPlaceholders(e, t) {
    const r = this._addPlaceholderChildren(e, t);
    Math.abs(1 - r) < Qe || this._addPlaceholderParent(e, t) || (this._getTile(t.id).visible = !0);
  }
  _addPlaceholderChildren(e, t) {
    let r = 0;
    return this._tiles.forEach((s) => {
      r += this._addPlaceholderChild(e, s, t);
    }), r;
  }
  _addPlaceholderChild(e, t, r) {
    return t.key.level <= r.level || !t.hasData || !r.contains(t.key) ? 0 : (t.visible = !0, e.add(t.key.id), 1 / (1 << 2 * (t.key.level - r.level)));
  }
  _addPlaceholderParent(e, t) {
    let r = t.getParentKey(), s = 0, a = null;
    for (; p(r); ) {
      if (e.has(r.id))
        return !0;
      const o = this._getTile(r.id);
      if (o != null && o.isReady)
        return o.visible = !0, e.add(o.key.id), !0;
      o != null && o.hasData && o.patchCount > s && (s = o.patchCount, a = o), r = r.getParentKey();
    }
    return !!a && (a.visible = !0, e.add(a.key.id), !0);
  }
}
const U = ae.getLogger("geoscene.views.layers.FeatureLayerView"), De = (i) => {
  let e = class extends i {
    constructor(...t) {
      super(...t), this._updatingRequiredFieldsPromise = null, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      _e(this, ["layer.renderer", "layer.labelingInfo", "layer.elevationInfo.featureExpressionInfo", "layer.displayField", "filter", "featureEffect", "layer.timeInfo", "layer.floorInfo", "timeExtent"], () => this._handleRequiredFieldsChange(), !0), z(this, "view.floors", "change", () => this._handleRequiredFieldsChange()), z(this, "layer.sublayer", "change", () => this._handleRequiredFieldsChange());
    }
    get availableFields() {
      const { layer: t, layer: { fieldsIndex: r }, requiredFields: s } = this;
      return "outFields" in t && t.outFields ? L(r, [...H(r, t.outFields), ...s]) : L(r, s);
    }
    set effect(t) {
      j(U, "effect", { replacement: "featureEffect", version: "4.22" }), this.featureEffect = t;
    }
    get effect() {
      return j(U, "effect", { replacement: "featureEffect", version: "4.22" }), this.featureEffect;
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(t) {
      t !== void 0 ? this._override("featureEffect", t) : this._clearOverride("featureEffect");
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(t) {
      U.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return !1;
    }
    highlight(t) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const t = { outFields: ["*"], returnGeometry: !0, outSpatialReference: this.view.spatialReference }, r = p(this.filter) ? this.filter.createQuery(t) : new oe(t);
      if (this.layer.type === "feature") {
        const s = Y(this);
        p(s) && (r.where = r.where ? `(${r.where}) AND (${s})` : s);
      }
      return p(this.timeExtent) && (r.timeExtent = p(r.timeExtent) ? r.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), r;
    }
    queryFeatures(t, r) {
      throw new Error("missing implementation");
    }
    queryObjectIds(t, r) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(t, r) {
      throw new Error("missing implementation");
    }
    queryExtent(t, r) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeatures(t, r) {
      const s = this.validateFetchPopupFeatures(r);
      if (s)
        throw s;
      return this.fetchClientPopupFeatures(r);
    }
    _loadArcadeModules(t) {
      if (t.get("expressionInfos.length") || Array.isArray(t.content) && t.content.some((r) => r.type === "expression"))
        return me();
    }
    _handleRequiredFieldsChange() {
      const t = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", t), t.then(() => {
        this._updatingRequiredFieldsPromise === t && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    async _updateRequiredFields() {
      if (!this.layer || !this.view)
        return;
      const t = this.view.type === "3d", { layer: r, layer: { fieldsIndex: s, objectIdField: a } } = this, o = "renderer" in r && r.renderer, n = "orderBy" in r && r.orderBy, u = r.featureReduction, h = /* @__PURE__ */ new Set(), c = await M([o ? o.collectRequiredFields(h, s) : null, Q(h, r), t ? ve(h, r) : null, p(this.filter) ? B(h, r, this.filter) : null, p(this.featureEffect) ? B(h, r, this.featureEffect.filter) : null, u ? we(h, r, u) : null, n ? be(h, r, n) : null]);
      if (r.timeInfo && this.timeExtent && D(h, r.fieldsIndex, [r.timeInfo.startField, r.timeInfo.endField]), r.type === "feature" && r.floorInfo && D(h, r.fieldsIndex, [r.floorInfo.floorField]), r.type === "subtype-group") {
        k(h, s, r.subtypeField);
        const y = r.sublayers.map((_) => {
          var v;
          return Promise.all([(v = _.renderer) == null ? void 0 : v.collectRequiredFields(h, s), Q(h, _)]);
        });
        await M(y);
      }
      for (const y of c)
        y.error && U.error(y.error);
      k(h, s, a), t && "displayField" in r && r.displayField && k(h, s, r.displayField);
      const f = Array.from(h).sort();
      this._set("requiredFields", f);
    }
    validateFetchPopupFeatures(t) {
      if (le(t))
        return null;
      for (const r of t.clientGraphics) {
        const s = r.layer;
        if ("popupEnabled" in s && !s.popupEnabled)
          return new S("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: s });
        if ("popupTemplate" in s && !P(s, t))
          return new S("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: s });
        if (r.isAggregate && !(s.featureReduction && "popupTemplate" in s.featureReduction && s.featureReduction.popupEnabled && s.featureReduction.popupTemplate))
          return new S("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: s });
      }
    }
    async fetchClientPopupFeatures(t) {
      const r = p(t) ? t.clientGraphics : null;
      if (!r || r.length === 0)
        return [];
      const s = new Array(r.length), a = /* @__PURE__ */ new Map(), o = await this.createPopupQuery(t);
      for (let n = 0; n < r.length; n++) {
        const u = r[n];
        if (u.isAggregate) {
          s[n] = u;
          continue;
        }
        const { layer: h } = u;
        if (!("popupEnabled" in h))
          continue;
        const c = H(this.layer.fieldsIndex, o.outFields), f = P(h, t);
        if (!p(f))
          continue;
        const y = await this._loadArcadeModules(f);
        y && y.arcadeUtils.hasGeometryOperations(f) || !Re(c, u) ? a.set(u.getObjectId(), n) : s[n] = u;
      }
      if (this.layer.type === "stream" || a.size === 0)
        return s.filter(Boolean);
      o.objectIds = Array.from(a.keys());
      try {
        const n = await this.layer.queryFeatures(o);
        for (const u of n.features)
          s[a.get(u.getObjectId())] = u;
      } catch {
      }
      return s.filter(Boolean);
    }
    async createPopupQuery(t) {
      const r = this.layer.createQuery(), s = /* @__PURE__ */ new Set();
      let a = !1;
      const o = p(t) && t.clientGraphics ? t.clientGraphics.map((n) => n.layer) : [this.layer];
      for (const n of o) {
        if (!("popupEnabled" in n))
          continue;
        const u = P(n, t);
        if (!p(u))
          continue;
        const h = await this._loadArcadeModules(u), c = h && h.arcadeUtils.hasGeometryOperations(u);
        a = !(this.layer.geometryType !== "point" && !c);
        const f = await Ae(this.layer, u);
        for (const y of f)
          s.add(y);
      }
      if (r.returnGeometry = a, r.returnZ = a, r.returnM = a, r.outFields = Array.from(s), r.outSpatialReference = this.view.spatialReference, this.layer.type === "feature") {
        const n = Y(this);
        p(n) && (r.where = r.where ? `(${r.where}) AND (${n})` : n);
      }
      return r;
    }
    canResume() {
      return !!super.canResume() && (!p(this.timeExtent) || !this.timeExtent.isEmpty);
    }
  };
  return l([d()], e.prototype, "_updatingRequiredFieldsPromise", void 0), l([d({ readOnly: !0 })], e.prototype, "availableFields", null), l([d()], e.prototype, "effect", null), l([d({ type: fe })], e.prototype, "featureEffect", null), l([d({ type: ne })], e.prototype, "filter", void 0), l([d(ge)], e.prototype, "timeExtent", void 0), l([d()], e.prototype, "layer", void 0), l([d({ type: Number })], e.prototype, "maximumNumberOfFeatures", null), l([d({ readOnly: !0, type: Boolean })], e.prototype, "maximumNumberOfFeaturesExceeded", null), l([d({ readOnly: !0 })], e.prototype, "requiredFields", void 0), l([d()], e.prototype, "suspended", void 0), l([d()], e.prototype, "view", void 0), e = l([q("geoscene.views.layers.FeatureLayerView")], e), e;
};
function re(i) {
  return i && "openPorts" in i;
}
const E = ae.getLogger("geoscene.views.2d.layers.FeatureLayerView2D");
let g = class extends De(Je(Ce(Te))) {
  constructor() {
    super(...arguments), this._pipelineIsUpdating = !0, this._commandsQueue = new He({ process: (i) => {
      switch (i.type) {
        case "processed-edit":
          return this._doEdit(i);
        case "refresh":
          return this._doRefresh(i.dataChanged);
        case "update":
          return this._doUpdate();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightIds = /* @__PURE__ */ new Map(), this._updateHighlight = Ee(async () => this._proxy.setHighlight(Array.from(this._highlightIds.keys()))), this._uploadsLocked = !1, this._needsClusterSizeUpdate = !1, this.featureEffectView = new ze(), this._lastDefinitionExpression = null;
  }
  destroy() {
    var i;
    G(this._updateClusterSizeTask, (e) => e.remove()), (i = this._proxy) == null || i.destroy(), this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(Promise.all([this._initProxy(), this._initServiceOptions()])), this.handles.add([this.on("valueRangesChanged", (i) => {
      this._set("_aggregateValueRanges", i.valueRanges);
    }), K(() => this.featureEffect, (i) => {
      this.featureEffectView.featureEffect = i;
    }, { initial: !0, sync: !0 })]);
  }
  async _initProxy() {
    if ("isTable" in this.layer && this.layer.isTable)
      throw new S("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: this.layer });
    this._proxy && this._proxy.destroy();
    const i = this._createClientOptions();
    return this._set("_proxy", new Me({ client: i })), this._proxy.when();
  }
  async _initServiceOptions() {
    return this._set("_serviceOptions", await this._createServiceOptions()), this._serviceOptions;
  }
  get orderByFields() {
    return this._serviceOptions.type !== "stream" && this._serviceOptions.orderByFields;
  }
  get labelsVisible() {
    const i = this.layer.type === "subtype-group" ? this.layer.sublayers.items : [this.layer];
    return !this.suspended && i.some((e) => e.labelingInfo && e.labelsVisible);
  }
  get queryMode() {
    return this._serviceOptions.type;
  }
  get renderingConfigHash() {
    if (!this.layer)
      return null;
    const i = this.availableFields, e = this.layer, t = this.view.floors, { definitionExpression: r } = e, s = this.layer.type !== "subtype-group" && this.layer.labelsVisible && this.layer.labelingInfo, a = "renderer" in e && e.renderer, o = e.type === "feature" ? e.gdbVersion : void 0, n = e.type === "feature" && e.historicMoment ? e.historicMoment.getTime() : void 0, { timeExtent: u } = this, h = "customParameters" in e ? JSON.stringify(e.customParameters) : void 0, c = "apiKey" in e ? e.apiKey : void 0, f = e.type === "stream" ? `${JSON.stringify(e.geometryDefinition)}${e.definitionExpression}` : null, y = JSON.stringify(this.clips), _ = e.featureReduction && e.featureReduction.toJSON(), v = "orderBy" in this.layer && JSON.stringify(this.layer.orderBy), w = "sublayers" in this.layer && this.layer.sublayers.items.reduce((R, V) => R + `${V.visible ? 1 : 0}.${JSON.stringify(V.renderer)}.${V.labelsVisible}
.${JSON.stringify(V.labelingInfo)}`, "");
    return JSON.stringify({ orderBy: v, sublayerHash: w, filterHash: p(this.filter) && this.filter.toJSON(), effectHash: p(this.featureEffect) && this.featureEffect.toJSON(), streamFilter: f, gdbVersion: o, definitionExpression: r, historicMoment: n, availableFields: i, renderer: a, labelingInfo: s, timeExtent: u, floors: t, clipsHash: y, featureReduction: _, customParameters: h, apiKey: c });
  }
  highlight(i) {
    var e;
    let t;
    return i instanceof A ? t = [i.getObjectId()] : typeof i == "number" || typeof i == "string" ? t = [i] : Array.isArray(i) && i.length > 0 ? t = typeof i[0] == "number" || typeof i[0] == "string" ? i : i.map((r) => r == null ? void 0 : r.getObjectId()) : xe.isCollection(i) && i.length > 0 && (t = i.map((r) => r == null ? void 0 : r.getObjectId()).toArray()), t = (e = t) == null ? void 0 : e.filter((r) => r != null), t && t.length ? (this._addHighlight(t), { remove: () => this._removeHighlight(t) }) : { remove: () => {
    } };
  }
  hasHighlight() {
    return !!this._highlightIds.size;
  }
  async hitTest(i, e) {
    if (!this.tileRenderer)
      return null;
    const t = await this.tileRenderer.hitTest(e);
    if (t.length === 0)
      return null;
    const { features: r, aggregates: s } = await this._proxy.getFeatures(t);
    return [...s.map((a) => this._createHittestResult(ee.fromJSON(a))), ...r.map((a) => this._createHittestResult(A.fromJSON(a)))];
  }
  async queryAggregates() {
    return (await this._proxy.getAggregates()).map((i) => ee.fromJSON(i));
  }
  queryStatistics() {
    return this._proxy.queryStatistics();
  }
  async querySummaryStatistics(i, e, t) {
    const r = { ...e, scale: this.view.scale };
    return this._proxy.querySummaryStatistics(this._cleanUpQuery(i), r, t);
  }
  async queryUniqueValues(i, e, t) {
    const r = { ...e, scale: this.view.scale };
    return this._proxy.queryUniqueValues(this._cleanUpQuery(i), r, t);
  }
  async queryClassBreaks(i, e, t) {
    const r = { ...e, scale: this.view.scale };
    return this._proxy.queryClassBreaks(this._cleanUpQuery(i), r, t);
  }
  async queryHistogram(i, e, t) {
    const r = { ...e, scale: this.view.scale };
    return this._proxy.queryHistogram(this._cleanUpQuery(i), r, t);
  }
  queryFeatures(i, e) {
    return this.queryFeaturesJSON(i, e).then((t) => {
      const r = W.fromJSON(t);
      return r.features.forEach((s) => this._setLayersForFeature(s)), r;
    });
  }
  queryVisibleFeatures(i, e) {
    return this._proxy.queryVisibleFeatures(this._cleanUpQuery(i), e).then((t) => {
      const r = W.fromJSON(t);
      return r.features.forEach((s) => this._setLayersForFeature(s)), r;
    });
  }
  queryFeaturesJSON(i, e) {
    return this._proxy.queryFeatures(this._cleanUpQuery(i), e);
  }
  queryObjectIds(i, e) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(i), e);
  }
  queryFeatureCount(i, e) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(i), e);
  }
  queryExtent(i, e) {
    return this._proxy.queryExtent(this._cleanUpQuery(i), e).then((t) => ({ count: t.count, extent: Fe.fromJSON(t.extent) }));
  }
  setVisibility(i, e) {
    e ? this._visibilityOverrides.delete(i) : this._visibilityOverrides.add(i), this._update();
  }
  update(i) {
    if (!this._tileStrategy || !this.tileRenderer)
      return;
    const { hasMissingTiles: e, added: t, removed: r } = this._tileStrategy.update(i);
    (t.length || r.length) && this._proxy.updateTiles({ added: t, removed: r }), e && this.requestUpdate(), this.notifyChange("updating");
  }
  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._tileStrategy = new Be({ acquireTile: (i) => this._acquireTile(i), releaseTile: (i) => this._releaseTile(i), tileInfoView: this.view.featuresTilingScheme, buffer: 0 }), this.handles.add(K(() => this.renderingConfigHash, () => this._update(), Se), "attach"), this.layer.type !== "stream" && this.handles.add(this.layer.on("edits", (i) => this._edit(i)), "attach");
  }
  detach() {
    var i;
    this._commandsQueue.clear(), (i = this._proxy) == null || i.stop(), this.container.removeAllChildren(), this.handles.remove("attach"), this.tileRenderer && (this.tileRenderer.uninstall(this.container), this.tileRenderer = null), this._tileStrategy && (this._tileStrategy.destroy(), this._tileStrategy = null), this._tileRendererHash = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    var i;
    const e = "renderer" in this.layer && this.layer.renderer != null, t = this._commandsQueue.updating, r = this._updatingRequiredFieldsPromise != null, s = !this._proxy || !this._proxy.isReady, a = this._pipelineIsUpdating, o = this.tileRenderer == null || ((i = this.tileRenderer) == null ? void 0 : i.updating), n = e && (t || r || s || a || o);
    return x("geoscene-2d-log-updating") && console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${e}
  -> hasPendingCommand ${t}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
  -> updatingTileRenderer ${o}
`), n;
  }
  _createClientOptions() {
    return { setUpdating: (i) => {
      this._set("_pipelineIsUpdating", i);
    }, emitEvent: (i) => {
      this.emit(i.name, i.event);
    } };
  }
  async _detectQueryMode(i) {
    var e;
    const t = "path" in i, r = "editingInfo" in this.layer && ((e = this.layer.editingInfo) == null ? void 0 : e.lastEditDate), s = !!this.layer.refreshInterval, a = !r && s;
    if (t && (this.layer.type === "feature" || this.layer.type === "subtype-group") && this.layer.geometryType === "point" && this.layer.capabilities.query.supportsPagination && !this.layer.capabilities.operations.supportsEditing && !a && x("featurelayer-snapshot-enabled"))
      try {
        const o = await this.layer.queryFeatureCount();
        if (o <= x("featurelayer-snapshot-point-min-threshold"))
          return { mode: "snapshot", featureCount: o };
        const n = x("featurelayer-snapshot-point-max-threshold"), u = x("featurelayer-snapshot-point-coverage"), h = this.view.extent, c = C(this.layer.fullExtent), f = c == null ? void 0 : c.clone().intersection(h), y = p(f) ? f.width * f.height : 0, _ = (c == null ? void 0 : c.width) * (c == null ? void 0 : c.height), v = _ === 0 ? 0 : y / _;
        if (o <= n && v >= u)
          return { mode: "snapshot", featureCount: o };
      } catch (o) {
        E.warn("mapview-feature-layer", "Encountered an error when querying for featureCount", { error: o });
      }
    return { mode: "on-demand" };
  }
  async _createServiceOptions() {
    var i;
    const e = this.layer;
    if (e.type === "stream")
      return null;
    const { capabilities: t, objectIdField: r } = e, s = e.fields.map((R) => R.toJSON()), a = p(e.fullExtent) && e.fullExtent.toJSON(), o = Ne(e.geometryType), n = e.timeInfo && e.timeInfo.toJSON() || null, u = e.spatialReference ? e.spatialReference.toJSON() : null, h = e.type === "feature" ? e.globalIdField : null;
    let c;
    e.type === "ogc-feature" ? c = e.source.getFeatureDefinition() : re(e.source) ? c = await e.source.openPorts() : e.parsedUrl && (c = qe(e.parsedUrl), "dynamicDataSource" in e && e.dynamicDataSource && (c.query = { layer: JSON.stringify({ source: e.dynamicDataSource }) }));
    const f = "datesInUnknownTimezone" in this.layer && this.layer.datesInUnknownTimezone, y = (i = "subtypeField" in this.layer && this.layer.subtypeField) != null ? i : null, { mode: _, featureCount: v } = await this._detectQueryMode(c);
    let w = this.layer.objectIdField;
    if (this.layer.type === "feature" && p(this.layer.orderBy) && this.layer.orderBy.length) {
      const R = !this.layer.orderBy[0].valueExpression && this.layer.orderBy[0].field;
      R && (w = R);
    }
    return { type: _, timeReferenceUnknownClient: f, subtypeField: y, featureCount: v, globalIdField: h, maxRecordCount: t.query.maxRecordCount, tileMaxRecordCount: t.query.tileMaxRecordCount, capabilities: t, fields: s, fullExtent: a, geometryType: o, objectIdField: r, source: c, timeInfo: n, spatialReference: u, orderByFields: w };
  }
  async _createMemoryServiceOptions(i) {
    const e = await i.openPorts();
    return { ...this._createServiceOptions(), type: "memory", source: e };
  }
  _cleanUpQuery(i) {
    const e = oe.from(i) || this.createQuery();
    return e.outSpatialReference || (e.outSpatialReference = this.view.spatialReference), e;
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(i) {
    return this.suspended ? void this._clearTiles() : this._validateEdit(i) ? this._commandsQueue.push({ type: "edit", edits: i }) : void 0;
  }
  async doRefresh(i) {
    if (this._tileStrategy.tileKeys().length)
      return this.suspended && i ? void this._clearTiles() : this._commandsQueue.push({ type: "refresh", dataChanged: i });
  }
  _clearTiles() {
    this._tileStrategy.tileKeys().length && (this._proxy.updateTiles({ added: [], removed: this._tileStrategy.tileKeys() }), this._tileStrategy.clear(), this.requestUpdate(), this._commandsQueue.clear(), this._update());
  }
  _validateEdit(i) {
    const e = "globalIdField" in this.layer && this.layer.globalIdField, t = i.deletedFeatures.some((s) => s.objectId === -1 || !s.objectId), r = e && this.availableFields.includes(e);
    return t && !r ? (E.error(new S("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${e} to be included the layer's outFields for updates to be reflected on the map`)), null) : i;
  }
  async _doUpdate() {
    try {
      if (this.destroyed || !this._hasRequiredSupport(this.layer) || !this._tileStrategy)
        return;
      const { featureEffectView: i, filter: e } = this;
      await this._updateRequiredFields();
      const { renderer: t } = this._getEffectiveRenderer();
      this._set("_effectiveRenderer", t);
      const r = this._createSchemaConfig(), s = this._createConfiguration(r, e, i.filter), a = this._lastDefinitionExpression !== s.definitionExpression;
      this._lastDefinitionExpression = s.definitionExpression;
      const o = this._createTileRendererHash(t);
      if (this._serviceOptions.type === "snapshot" && (s.schema.source.featureCount = this._serviceOptions.featureCount), o !== this._tileRendererHash) {
        await this._initTileRenderer(t);
        const n = this.layer, u = n.type === "stream" ? await this._initServiceOptions() : this._serviceOptions;
        this.tileRenderer.onConfigUpdate(t), n.type !== "stream" && re(n.source) && (u.source = await n.source.openPorts());
        const h = { added: this._tileStrategy.tileKeys(), removed: [] };
        await this._proxy.startup(this.view.featuresTilingScheme, s, u, h), this.hasHighlight() && await this._proxy.setHighlight(Array.from(this._highlightIds.keys())), await this._onceTilesUpdated(), this.tileRenderer.onConfigUpdate(t);
      } else {
        this._serviceOptions.type === "snapshot" && a && (s.schema.source.featureCount = await this.layer.queryFeatureCount());
        const n = await this._proxy.update(s);
        (n.mesh || n.targets.aggregate) && this._lockGPUUploads();
        try {
          await this._proxy.applyUpdate(n);
        } catch (u) {
          I(u) || E.error(u);
        }
        (n.mesh || n.targets.aggregate) && this._unlockGPUUploads(), this.tileRenderer.onConfigUpdate(t), this._updateClusterSizeVariable(), this._forceAttributeTextureUpload();
      }
      this._tileRendererHash = o, this.tileRenderer.invalidateLabels(), this.requestUpdate();
    } catch {
    }
  }
  async _doEdit(i) {
    try {
      await this._proxy.onEdits(i);
    } catch (e) {
      I(e);
    }
  }
  async _doRefresh(i) {
    var e;
    this._lockGPUUploads();
    try {
      await this._proxy.refresh(i);
    } catch (t) {
      I(t);
    }
    this._unlockGPUUploads(), (e = this.layer) != null && e.featureReduction && this._updateClusterSizeVariable();
  }
  _updateClusterSizeVariable() {
    this._needsClusterSizeUpdate && (this.tileRenderer.onConfigUpdate(this._effectiveRenderer), this._needsClusterSizeUpdate = !1);
  }
  _createUpdateClusterSizeTask(i, e) {
    return this.watch("_aggregateValueRanges", async (t) => {
      this._updateClusterEffectiveRendererSizeVariable(i, e, t), this._needsClusterSizeUpdate = !0, this._uploadsLocked || this._updateClusterSizeVariable();
    });
  }
  async _updateClusterEffectiveRendererSizeVariable(i, e, t) {
    if (i.dynamicClusterSize && "visualVariables" in i && i.visualVariables) {
      const r = Ve(i.visualVariables);
      if (p(r) && r.field === "cluster_count") {
        const s = i.visualVariables.indexOf(r);
        i.visualVariables[s] = Ue(e, t);
        const a = i.clone();
        a.dynamicClusterSize = !0, this._set("_effectiveRenderer", a);
      }
    }
  }
  _getEffectiveRenderer() {
    const i = "renderer" in this.layer && this.layer.renderer, e = this.layer.featureReduction;
    if (p(this._updateClusterSizeTask) && (this._updateClusterSizeTask.remove(), this._updateClusterSizeTask = null), e && e.type === "cluster" && $e(i)) {
      const t = e, r = [], s = ke(r, i, t, this._aggregateValueRanges);
      return G(this._updateClusterSizeTask, (a) => a.remove()), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(s, t), { renderer: s, aggregateFields: r, featureReduction: e };
    }
    return { renderer: i, aggregateFields: [], featureReduction: null };
  }
  _acquireTile(i) {
    const e = this.tileRenderer.acquireTile(i);
    return e.once("attach", () => {
      this.requestUpdate();
    }), e;
  }
  _releaseTile(i) {
    this.tileRenderer.releaseTile(i);
  }
  async _initTileRenderer(i) {
    const e = await Le(i, { layerView: this, tileInfoView: this.view.featuresTilingScheme, layer: this.layer });
    return this.tileRenderer && (this._tileStrategy.clear(), this.tileRenderer.uninstall(this.container), this.tileRenderer.destroy(), this.tileRenderer = null), this.destroyed ? null : (this._proxy.tileRenderer = e, this._set("tileRenderer", e), this.tileRenderer.install(this.container), this.tileRenderer.onConfigUpdate(i), this.requestUpdate(), this.tileRenderer);
  }
  _createTileRendererHash(i) {
    return `${i.type === "heatmap" ? "heatmap" : "symbol"}`;
  }
  get hasFilter() {
    const i = !!("floorInfo" in this.layer && this.layer.floorInfo && this.view.floors && this.view.floors.length);
    return !!this.filter || i || !!this._visibilityOverrides.size || !!this.timeExtent;
  }
  _injectOverrides(i) {
    const e = p(i) ? i.timeExtent : null, t = p(this.timeExtent) && p(e) ? this.timeExtent.intersection(e) : this.timeExtent || e;
    let r = null;
    const s = "floorInfo" in this.layer && this.layer.floorInfo;
    if (s) {
      const o = p(i) && i.where;
      r = this._addFloorFilterClause(o);
    }
    if (!this._visibilityOverrides.size && !t && !s)
      return p(i) ? i.toJSON() : null;
    (i = p(i) && i.clone() || new ne()).timeExtent = t, r && (i.where = r);
    const a = i.toJSON();
    return a.hiddenIds = Array.from(this._visibilityOverrides), a;
  }
  _addFloorFilterClause(i) {
    const e = this.layer;
    let t = i || "";
    if ("floorInfo" in e && e.floorInfo) {
      var r;
      let s = this.view.floors;
      if (!s || !s.length)
        return t;
      (r = e.floorInfo.viewAllLevelIds) != null && r.length && (s = e.floorInfo.viewAllLevelIds);
      const a = s.filter((u) => u !== "").map((u) => "'" + u + "'");
      a.push("''");
      const o = e.floorInfo.floorField;
      let n = "(" + o + " IN ({ids}) OR " + o + " IS NULL)";
      if (n = n.replace("{ids}", a.join(", ")), p(t) && t.includes(o)) {
        let u = new RegExp("AND \\(" + o + ".*NULL\\)", "g");
        t = t.replace(u, ""), u = new RegExp("\\(" + o + ".*NULL\\)", "g"), t = t.replace(u, ""), t = t.replace(/\s+/g, " ").trim();
      }
      t = t !== "" ? "(" + t + ") AND " + n : n;
    }
    return t !== "" ? t : null;
  }
  _createConfiguration(i, e, t) {
    const r = this.layer.type === "feature" && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0, s = this.layer.type === "feature" ? this.layer.gdbVersion : void 0, a = new Array(Oe), o = this._injectOverrides(e);
    a[0] = o, a[1] = p(t) ? t.toJSON() : null;
    const n = Pe(i);
    if (le(n))
      return null;
    const u = Z();
    return { definitionExpression: this.layer.definitionExpression, availableFields: this.availableFields, gdbVersion: s, historicMoment: r, devicePixelRatio: window.devicePixelRatio || 1, filters: a, schema: n, supportsTextureFloat: u.supportsTextureFloat, maxTextureSize: u.maxTextureSize };
  }
  _hasRequiredSupport(i) {
    var e;
    return !("renderer" in i && ((e = i.renderer) == null ? void 0 : e.type) === "dot-density" && !Z().supportsTextureFloat) || (E.error(new S("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), !1);
  }
  _onceTilesUpdated() {
    return this.requestUpdate(), Ie(() => !this._pipelineIsUpdating);
  }
  _lockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = !0, this.tileRenderer.lockGPUUploads());
  }
  _unlockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = !1, this.tileRenderer.unlockGPUUploads());
  }
  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }
  _createSchemaConfig() {
    const i = this.layer.type === "feature" ? this.layer.historicMoment : null, e = this.layer.type === "feature" ? this.layer.gdbVersion : null;
    return { renderer: "renderer" in this.layer && this.layer.renderer, spatialReference: this.layer.spatialReference, timeExtent: this.layer.timeExtent, definitionExpression: this.layer.definitionExpression, featureReduction: this.layer.featureReduction, fields: this.layer.fields, geometryType: this.layer.geometryType, historicMoment: i, labelsVisible: "labelsVisible" in this.layer && this.layer.labelsVisible, labelingInfo: "labelingInfo" in this.layer && this.layer.labelingInfo, availableFields: this.availableFields, featureEffect: this.featureEffect, filter: this.filter, gdbVersion: e, pixelBuffer: 0, orderBy: "orderBy" in this.layer && this.layer.orderBy ? this.layer.orderBy : null, customParameters: { ..."customParameters" in this.layer ? this.layer.customParameters : void 0, token: "apiKey" in this.layer ? this.layer.apiKey : void 0 } };
  }
  _addHighlight(i) {
    for (const e of i)
      if (this._highlightIds.has(e)) {
        const t = this._highlightIds.get(e);
        this._highlightIds.set(e, t + 1);
      } else
        this._highlightIds.set(e, 1);
    this._updateHighlight().catch((e) => {
      I(e) || E.error(e);
    });
  }
  _removeHighlight(i) {
    for (const e of i)
      if (this._highlightIds.has(e)) {
        const t = this._highlightIds.get(e) - 1;
        t === 0 ? this._highlightIds.delete(e) : this._highlightIds.set(e, t);
      }
    this._updateHighlight().catch((e) => {
      I(e) || E.error(e);
    });
  }
  _setLayersForFeature(i) {
    const e = this.layer;
    i.layer = e, i.sourceLayer = e;
  }
  _createHittestResult(i) {
    return this._setLayersForFeature(i), p(i.geometry) && (i.geometry.spatialReference = this.view.spatialReference), i;
  }
};
l([d()], g.prototype, "_serviceOptions", void 0), l([d()], g.prototype, "_proxy", void 0), l([d()], g.prototype, "_pipelineIsUpdating", void 0), l([d()], g.prototype, "_effectiveRenderer", void 0), l([d()], g.prototype, "_aggregateValueRanges", void 0), l([d()], g.prototype, "_commandsQueue", void 0), l([d()], g.prototype, "featureEffectView", void 0), l([d()], g.prototype, "labelsVisible", null), l([d({ readOnly: !0 })], g.prototype, "queryMode", null), l([d()], g.prototype, "renderingConfigHash", null), l([d()], g.prototype, "tileRenderer", void 0), l([d()], g.prototype, "updating", void 0), g = l([q("geoscene.views.2d.layers.FeatureLayerView2D")], g);
const mt = g;
export {
  mt as default
};
