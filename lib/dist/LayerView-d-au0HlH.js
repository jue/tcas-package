import { e, a as d, aD as q, d as t, a4 as O, cE as x, M as A, ac as U, j as I, ey as j, y as C, f as y, eQ as v, K as M, aw as N, f6 as P, gC as _, e2 as L, ay as E, s as V, b9 as S } from "./index-Ek1MTSEY.js";
import { s as D } from "./Container-zrthpNTa.js";
let w = class extends q {
};
w = e([d("geoscene.views.layers.support.ClipArea")], w);
const g = w;
var m;
let p = m = class extends g {
  constructor() {
    super(...arguments), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new m({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
};
e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "left", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "right", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "top", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "bottom", void 0), e([t({ readOnly: !0 })], p.prototype, "version", null), p = m = e([d("geoscene.views.layers.support.ClipRect")], p);
const T = p;
var b;
const k = { base: x, key: "type", typeMap: { extent: A, polygon: U } };
let u = b = class extends g {
  constructor() {
    super(...arguments), this.type = "geometry", this.geometry = null;
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
  clone() {
    return new b({ geometry: this.geometry.clone() });
  }
};
e([t({ types: k, json: { read: O, write: !0 } })], u.prototype, "geometry", void 0), e([t({ readOnly: !0 })], u.prototype, "version", null), u = b = e([d("geoscene.views.layers.support.Geometry")], u);
const z = u;
let c = class extends g {
  constructor() {
    super(...arguments), this.type = "path", this.path = [];
  }
  get version() {
    return (this._get("version") || 0) + 1;
  }
};
e([t({ type: [[[Number]]], json: { write: !0 } })], c.prototype, "path", void 0), e([t({ readOnly: !0 })], c.prototype, "version", null), c = e([d("geoscene.views.layers.support.Path")], c);
const F = c, f = I.ofType({ key: "type", base: g, typeMap: { rect: T, path: F, geometry: z } }), K = (i) => {
  let r = class extends i {
    constructor() {
      super(...arguments), this.attached = !1, this.clips = new f(), this.lastUpdateId = -1, this.moving = !1, this.updateRequested = !1;
    }
    initialize() {
      var s, n, l, h;
      const $ = (s = (n = this.view) == null ? void 0 : n.spatialReferenceLocked) == null || s;
      (l = this.view) != null && l.spatialReference && $ && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new C("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new D()), this.container.fadeTransitionEnabled = !0, this.container.opacity = 0, this.container.clips = this.clips, this.handles.add([y(() => this.suspended, (a) => {
        this.container && (this.container.visible = !a), this.view && !a && this.updateRequested && this.view.requestUpdate();
      }, v), y(() => {
        var a, R;
        return (a = (R = this.layer) == null ? void 0 : R.opacity) != null ? a : 1;
      }, (a) => {
        this.container && (this.container.opacity = a);
      }, v), y(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (a) => {
        this.container && (this.container.blendMode = a);
      }, v), y(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (a) => {
        this.container && (this.container.effect = a);
      }, v), M(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      })]), (h = this.view) != null && h.whenLayerView ? this.view.whenLayerView(this.layer).then((a) => {
        a === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = !1;
    }
    get spatialReferenceSupported() {
      var s;
      const n = (s = this.view) == null ? void 0 : s.spatialReference;
      return n == null || this.supportsSpatialReference(n);
    }
    get updating() {
      var s;
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !((s = this.updatingHandles) == null || !s.updating));
    }
    get visibleAtCurrentScale() {
      return this.isVisibleAtScale(this.view.scale);
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = !0, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = !1, this.detach(), this.updateRequested = !1);
    }
    isVisibleAtScale(s) {
      const n = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      if (!n)
        return !0;
      const { minScale: l, maxScale: h } = n;
      return (l === 0 || s <= l) && (h === 0 || s >= h);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = !0, this.suspended || this.view.requestUpdate());
    }
    processUpdate(s) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", s), this.updateRequested && !this.suspended && (this.updateRequested = !1, this.update(s))) : this.updateRequested = !1;
    }
    hitTest(s, n) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(s) {
      return !0;
    }
    canResume() {
      return !!this.spatialReferenceSupported && !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const s = super.getSuspendInfo(), n = !this.spatialReferenceSupported, l = this.visibleAtCurrentScale;
      return n && (s.spatialReferenceNotSupported = n), l && (s.outsideScaleRange = l), s;
    }
  };
  return e([t()], r.prototype, "attached", void 0), e([t({ type: f, set(s) {
    const n = j(s, this._get("clips"), f);
    this._set("clips", n);
  } })], r.prototype, "clips", void 0), e([t()], r.prototype, "container", void 0), e([t()], r.prototype, "moving", void 0), e([t({ readOnly: !0 })], r.prototype, "spatialReferenceSupported", null), e([t({ readOnly: !0 })], r.prototype, "updateParameters", void 0), e([t()], r.prototype, "updateRequested", void 0), e([t()], r.prototype, "updating", null), e([t()], r.prototype, "view", void 0), e([t({ readOnly: !0 })], r.prototype, "visibleAtCurrentScale", null), r = e([d("geoscene.views.2d.layers.LayerView2D")], r), r;
};
let o = class extends N(P(_(L.EventedMixin(E)))) {
  constructor(i) {
    super(i), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((i) => {
      if (i.name !== "layerview:create-error") {
        const r = this.layer && this.layer.id || "no id", s = this.layer && this.layer.title || "no title";
        throw V.getLogger(this.declaredClass).error("#resolve()", `Failed to resolve layer view (layer title: '${s}', id: '${r}')`, i), i;
      }
    });
  }
  get fullOpacity() {
    return S(this.get("layer.opacity"), 1) * S(this.get("parent.fullOpacity"), 1);
  }
  get suspended() {
    return !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    return !this.suspended && this.layer.legendEnabled === !0;
  }
  get updating() {
    var i;
    return !!((i = this.updatingHandles) != null && i.updating || this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get visible() {
    var i;
    return ((i = this.layer) == null ? void 0 : i.visible) === !0;
  }
  set visible(i) {
    i !== void 0 ? this._override("visible", i) : this._clearOverride("visible");
  }
  canResume() {
    var i, r, s;
    return this.visible && ((i = this.layer) == null ? void 0 : i.loaded) && !((r = this.parent) != null && r.suspended) && ((s = this.view) == null ? void 0 : s.ready) || !1;
  }
  getSuspendInfo() {
    const i = this.parent && this.parent.suspended ? this.parent.suspendInfo : {}, r = this;
    return r.view && r.view.ready || (i.viewNotReady = !0), this.layer && this.layer.loaded || (i.layerNotLoaded = !0), this.visible || (i.layerInvisible = !0), i;
  }
  isUpdating() {
    return !1;
  }
};
e([t()], o.prototype, "fullOpacity", null), e([t()], o.prototype, "layer", void 0), e([t()], o.prototype, "parent", void 0), e([t({ readOnly: !0 })], o.prototype, "suspended", null), e([t({ readOnly: !0 })], o.prototype, "suspendInfo", null), e([t({ readOnly: !0 })], o.prototype, "legendEnabled", null), e([t({ type: Boolean, readOnly: !0 })], o.prototype, "updating", null), e([t({ readOnly: !0 })], o.prototype, "updatingProgress", null), e([t()], o.prototype, "visible", null), e([t()], o.prototype, "view", void 0), o = e([d("geoscene.views.layers.LayerView")], o);
const Q = o;
export {
  K as f,
  Q as u
};
