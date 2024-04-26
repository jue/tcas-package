import { e as o, d, a as y, ay as O, Z as R, s as b, S as _, ez as T, eA as S, eB as w, e2 as V, l as I, eC as g, dr as q } from "./index-Ek1MTSEY.js";
const u = -1;
let c = class extends O {
  constructor(s) {
    super(s), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = R("mapview-transitions-duration"), this.effects = [];
  }
  set effect(s) {
    if (this._get("effect") !== (s = s || "")) {
      this._set("effect", s);
      try {
        this._transitionTo(m(s));
      } catch (t) {
        this._transitionTo([]), b.getLogger(this.declaredClass).warn("Invalid Effect", { effect: s, error: t });
      }
    }
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(s) {
    this._updateForScale(s);
  }
  get transitioning() {
    return this._to !== null;
  }
  canTransitionTo(s) {
    try {
      return this.scale > 0 && v(this._current, m(s), this.scale);
    } catch {
      return !1;
    }
  }
  transitionStep(s, t) {
    this._applyTimeTransition(s), this._updateForScale(t);
  }
  end() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(s) {
    this.scale > 0 && v(this._current, s, this.scale) ? (this._final = s, this._to = _(s), C(this._current, this._to, this.scale), this._from = _(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = s), this._set("effects", this._current[0] ? _(this._current[0].effects) : []);
  }
  _applyTimeTransition(s) {
    if (!(this._to && this._from && this._current && this._final))
      return;
    this._time += s;
    const t = Math.min(1, this._time / this.duration);
    for (let e = 0; e < this._current.length; e++) {
      const n = this._current[e], r = this._from[e], h = this._to[e];
      n.scale = $(r.scale, h.scale, t);
      for (let i = 0; i < n.effects.length; i++) {
        const a = n.effects[i], f = r.effects[i], p = h.effects[i];
        a.interpolate(f, p, t);
      }
    }
    t === 1 && (this._current = this._final, this._set("effects", this._current[0] ? _(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(s) {
    if (this._set("scale", s), this._current.length === 0)
      return;
    const t = this._current, e = this._current.length - 1;
    let n, r, h = 1;
    if (t.length === 1 || s >= t[0].scale)
      r = n = t[0].effects;
    else if (s <= t[e].scale)
      r = n = t[e].effects;
    else
      for (let i = 0; i < e; i++) {
        const a = t[i], f = t[i + 1];
        if (a.scale >= s && f.scale <= s) {
          h = (s - a.scale) / (f.scale - a.scale), n = a.effects, r = f.effects;
          break;
        }
      }
    for (let i = 0; i < this.effects.length; i++)
      this.effects[i].interpolate(n[i], r[i], h);
  }
};
function m(s) {
  const t = T(s) || [];
  return E(t) ? [{ scale: u, effects: t }] : t;
}
function v(s, t, e) {
  var n, r, h, i;
  return (n = s[0]) == null || !n.effects || (r = t[0]) == null || !r.effects ? !0 : !((((h = s[0]) == null ? void 0 : h.scale) === u || ((i = t[0]) == null ? void 0 : i.scale) === u) && (s.length > 1 || t.length > 1) && e <= 0) && S(s[0].effects, t[0].effects);
}
function C(s, t, e) {
  var n, r;
  const h = s.length > t.length ? s : t, i = s.length > t.length ? t : s, a = i[i.length - 1], f = (n = a == null ? void 0 : a.scale) != null ? n : e, p = (r = a == null ? void 0 : a.effects) != null ? r : [];
  for (let l = i.length; l < h.length; l++)
    i.push({ scale: f, effects: [...p] });
  for (let l = 0; l < h.length; l++)
    i[l].scale = i[l].scale === u ? e : i[l].scale, h[l].scale = h[l].scale === u ? e : h[l].scale, w(i[l].effects, h[l].effects);
}
function $(s, t, e) {
  return s + (t - s) * e;
}
function E(s) {
  const t = s[0];
  return !!t && "type" in t;
}
o([d()], c.prototype, "_to", void 0), o([d()], c.prototype, "duration", void 0), o([d({ value: "" })], c.prototype, "effect", null), o([d({ readOnly: !0 })], c.prototype, "effects", void 0), o([d({ readOnly: !0 })], c.prototype, "hasEffects", null), o([d({ value: 0 })], c.prototype, "scale", null), o([d({ readOnly: !0 })], c.prototype, "transitioning", null), c = o([y("geoscene.layers.effects.EffectView")], c);
const M = 1 / R("mapview-transitions-duration");
class A extends V {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = !0, this.computedOpacity = 1, this.fadeTransitionEnabled = !1, this.inFadeTransition = !1, this._isReady = !1, this._opacity = 1, this._stage = null, this._visible = !0;
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(t) {
    this._opacity !== t && (this._opacity = Math.min(1, Math.max(t, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t) {
    if (this._stage === t)
      return;
    const e = this._stage;
    this._stage = t, t ? this._stage.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : e.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return I(this._transforms) && (this._transforms = this._createTransforms()), this._transforms;
  }
  get visible() {
    return this._visible;
  }
  set visible(t) {
    this._visible !== t && (this._visible = t, this.requestRender());
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.computedOpacity = 0, this.fadeTransitionEnabled = !0, this._fadeInResolver = g(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = !0, this._fadeOutResolver = g(), this.requestRender()), this._fadeOutResolver.promise;
  }
  beforeRender(t) {
    this.updateTransitionProperties(t.deltaTime, t.state.scale);
  }
  afterRender(t) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && this.computedOpacity === 0 && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  setTransform(t) {
  }
  processRender(t) {
    this.stage && this.computedVisible && this.doRender(t);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(t, e) {
    if (this.fadeTransitionEnabled) {
      const n = this._fadeOutResolver || !this.visible ? 0 : this.opacity, r = this.computedOpacity;
      if (r === n)
        this.computedVisible = this.visible;
      else {
        const h = t * M;
        this.computedOpacity = r > n ? Math.max(n, r - h) : Math.min(n, r + h), this.computedVisible = this.computedOpacity > 0;
        const i = n === this.computedOpacity;
        this.inFadeTransition = !i, i || this.requestRender();
      }
    } else
      this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t) {
  }
  ready() {
    this._isReady || (this._isReady = !0, this.emit("isReady"), this.requestRender());
  }
}
class D extends A {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = !1, this.children = [], this._effectView = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this._blendMode = t, this.requestRender();
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.children.forEach((e) => e.clips = t);
  }
  get computedEffects() {
    var t, e;
    return (t = (e = this._effectView) == null ? void 0 : e.effects) != null ? t : null;
  }
  get effect() {
    var t, e;
    return (t = (e = this._effectView) == null ? void 0 : e.effect) != null ? t : "";
  }
  set effect(t) {
    (this._effectView || t) && (this._effectView || (this._effectView = new c()), this._effectView.effect = t, this.requestRender());
  }
  updateTransitionProperties(t, e) {
    super.updateTransitionProperties(t, e), this._effectView && (this._effectView.transitionStep(t, e), this._effectView.transitioning && this.requestRender());
  }
  doRender(t) {
    const e = this.createRenderParams(t);
    this.renderChildren(e);
  }
  addChild(t) {
    return this.addChildAt(t, this.children.length);
  }
  addChildAt(t, e = this.children.length) {
    if (!t || this.contains(t))
      return t;
    this._needsSort = !0;
    const n = t.parent;
    return n && n !== this && n.removeChild(t), e >= this.children.length ? this.children.push(t) : this.children.splice(e, 0, t), this._childrenSet.add(t), t.parent = this, t.stage = this.stage, this !== this.stage && (t.clips = this.clips), this.requestRender(), t;
  }
  contains(t) {
    return this._childrenSet.has(t);
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = !0;
    for (const t of this.children)
      this !== this.stage && (t.clips = null), t.stage = null, t.parent = null;
    this.children.length = 0;
  }
  removeChild(t) {
    return this.contains(t) ? this.removeChildAt(this.children.indexOf(t)) : t;
  }
  removeChildAt(t) {
    if (t < 0 || t >= this.children.length)
      return null;
    this._needsSort = !0;
    const e = this.children.splice(t, 1)[0];
    return this._childrenSet.delete(e), this !== this.stage && (e.clips = null), e.stage = null, e.parent = null, e;
  }
  sortChildren(t) {
    this._needsSort && (this.children.sort(t), this._needsSort = !1);
  }
  _createTransforms() {
    return { dvs: q() };
  }
  onAttach() {
    super.onAttach();
    const t = this.stage;
    for (const e of this.children)
      e.stage = t;
  }
  onDetach() {
    super.onDetach();
    for (const t of this.children)
      t.stage = null;
  }
  renderChildren(t) {
    for (const e of this.children)
      e.beforeRender(t);
    for (const e of this.children)
      e.processRender(t);
    for (const e of this.children)
      e.afterRender(t);
  }
  createRenderParams(t) {
    return { ...t, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: t.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition };
  }
}
export {
  A as a,
  c as h,
  D as s
};
