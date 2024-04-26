import { ff as B, s as G, y as _ } from "./index-Ek1MTSEY.js";
import { e as S, n as d } from "./enums-YM9SAu8u.js";
import { F as P, G as h, C as l } from "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import { t as $ } from "./VertexElementDescriptor-L2lGUBx9.js";
const v = new Float32Array(1);
new Uint32Array(v.buffer);
function Lt(t) {
  return [255 & t, (65280 & t) >>> 8, (16711680 & t) >>> 16, (4278190080 & t) >>> 24];
}
function St(t, n) {
  return 65535 & t | n << 16;
}
function dt(t, n, e, r) {
  return 255 & t | (255 & n) << 8 | (255 & e) << 16 | r << 24;
}
var a, y, p, I, U, R, E;
(function(t) {
  t[t.FILL = 0] = "FILL", t[t.LINE = 1] = "LINE", t[t.MARKER = 2] = "MARKER", t[t.TEXT = 3] = "TEXT", t[t.LABEL = 4] = "LABEL";
})(a || (a = {})), function(t) {
  t[t.SUCCEEDED = 0] = "SUCCEEDED", t[t.FAILED_OUT_OF_MEMORY = 1] = "FAILED_OUT_OF_MEMORY";
}(y || (y = {})), function(t) {
  t[t.NONE = 0] = "NONE", t[t.MAP = 1] = "MAP", t[t.LABEL = 2] = "LABEL", t[t.LABEL_ALPHA = 4] = "LABEL_ALPHA", t[t.HITTEST = 8] = "HITTEST", t[t.HIGHLIGHT = 16] = "HIGHLIGHT", t[t.CLIP = 32] = "CLIP", t[t.DEBUG = 64] = "DEBUG", t[t.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(p || (p = {})), function(t) {
  t[t.SIZE = 0] = "SIZE", t[t.COLOR = 1] = "COLOR", t[t.OPACITY = 2] = "OPACITY", t[t.ROTATION = 3] = "ROTATION";
}(I || (I = {})), function(t) {
  t[t.NONE = 0] = "NONE", t[t.OPACITY = 1] = "OPACITY", t[t.COLOR = 2] = "COLOR", t[t.ROTATION = 4] = "ROTATION", t[t.SIZE_MINMAX_VALUE = 8] = "SIZE_MINMAX_VALUE", t[t.SIZE_SCALE_STOPS = 16] = "SIZE_SCALE_STOPS", t[t.SIZE_FIELD_STOPS = 32] = "SIZE_FIELD_STOPS", t[t.SIZE_UNIT_VALUE = 64] = "SIZE_UNIT_VALUE";
}(U || (U = {})), function(t) {
  t[t.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", t[t.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", t[t.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", t[t.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(R || (R = {})), function(t) {
  t[t.SPRITE = 0] = "SPRITE", t[t.GLYPH = 1] = "GLYPH";
}(E || (E = {}));
class C {
  constructor() {
    this.color = [0, 0, 0, 0], this.haloColor = [0, 0, 0, 0], this.haloSize = 0, this.size = 12, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
  acquire(n, e, r, i, s, u, O, c, f) {
    this.color = n, this.haloColor = e, this.haloSize = r, this.size = i, this.angle = s, this.offsetX = u, this.offsetY = O, this.hAnchor = c, this.vAnchor = f;
  }
  release() {
    this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0, this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0, this.haloSize = 0, this.size = 0, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
}
C.pool = new B(C);
const A = G.getLogger("geoscene.views.2d.engine.webgl.Utils"), o = "geometry", H = [{ name: o, strideInBytes: 36 }], Y = [{ name: o, strideInBytes: 32 }], b = [{ name: o, strideInBytes: 20 }], z = [{ name: o, strideInBytes: 12 }], x = [{ name: o, strideInBytes: 40 }], X = [{ name: o, strideInBytes: 36 }], Z = [{ name: o, strideInBytes: 36 }];
function T(t) {
  const n = {};
  for (const e of t)
    n[e.name] = e.strideInBytes;
  return n;
}
const V = T(H), k = T(Y), K = T(b), q = T(z), W = T(x), J = T(X), Q = T(Z);
function _t(t, { fill: n }) {
  switch (t) {
    case a.MARKER:
      return V;
    case a.FILL:
      return n === "dot-density" ? q : n === "simple" ? K : k;
    case a.LINE:
      return W;
    case a.TEXT:
      return J;
    case a.LABEL:
      return Q;
  }
}
const j = [o], tt = [o], nt = [o], et = [o], rt = [o];
function st(t) {
  switch (t) {
    case a.MARKER:
      return j;
    case a.FILL:
      return tt;
    case a.LINE:
      return nt;
    case a.TEXT:
      return et;
    case a.LABEL:
      return rt;
  }
}
function at(t) {
  switch (t % 4) {
    case 0:
    case 2:
      return 4;
    case 1:
    case 3:
      return 1;
  }
}
function Ot(t, n) {
  switch (n % 4) {
    case 0:
    case 2:
      return new Uint32Array(Math.floor(t * n / 4));
    case 1:
    case 3:
      return new Uint8Array(t * n);
  }
}
function Nt(t, n) {
  switch (n % 4) {
    case 0:
    case 2:
      return new Uint32Array(t);
    case 1:
    case 3:
      return new Uint8Array(t);
  }
}
function mt(t) {
  return t != null;
}
function yt(t) {
  return typeof t == "number";
}
function pt(t) {
  switch (t) {
    case "butt":
      return S.BUTT;
    case "round":
      return S.ROUND;
    case "square":
      return S.SQUARE;
    default:
      return A.error(new _("mapview-invalid-type", `Cap type ${t} is not a valid option. Defaulting to round`)), S.ROUND;
  }
}
function Ut(t) {
  switch (t) {
    case "miter":
      return d.MITER;
    case "bevel":
      return d.BEVEL;
    case "round":
      return d.ROUND;
    default:
      return A.error(new _("mapview-invalid-type", `Join type ${t} is not a valid option. Defaulting to round`)), d.ROUND;
  }
}
function Rt(t) {
  switch (t) {
    case "opacity":
      return I.OPACITY;
    case "color":
      return I.COLOR;
    case "rotation":
      return I.ROTATION;
    case "size":
      return I.SIZE;
    default:
      return A.error(`Cannot interpret unknown vv: ${t}`), null;
  }
}
function Et(t, n, e, r, i, s, u) {
  for (const c in s) {
    const f = s[c].stride, N = at(f), g = s[c].data, w = e[c].data, D = f * i.vertexCount / N, M = f * t / N, F = f * i.vertexFrom / N;
    for (let L = 0; L < D; ++L)
      w[L + M] = g[L + F];
  }
  const O = i.indexCount;
  for (let c = 0; c < O; ++c)
    r[c + n] = u[c + i.indexFrom] - i.vertexFrom + t;
}
const Ct = { [o]: P.STATIC_DRAW };
function gt(t, n) {
  const e = [];
  for (let r = 0; r < 5; ++r) {
    const i = st(r), s = {};
    for (const u of i)
      s[u] = { data: n(r, u) };
    e.push({ data: t(r), buffers: s });
  }
  return e;
}
function it(t) {
  switch (t) {
    case l.BYTE:
    case l.UNSIGNED_BYTE:
      return 1;
    case l.SHORT:
    case l.UNSIGNED_SHORT:
      return 2;
    case l.FLOAT:
    case l.INT:
    case l.UNSIGNED_INT:
      return 4;
  }
}
function wt(t) {
  switch (t) {
    case h.UNSIGNED_BYTE:
      return 1;
    case h.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case h.FLOAT:
      return 4;
    default:
      return void A.error(new _("webgl-utils", `Unable to handle type ${t}`));
  }
}
function Dt(t) {
  switch (t) {
    case h.UNSIGNED_BYTE:
      return Uint8Array;
    case h.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case h.FLOAT:
      return Float32Array;
    default:
      return void A.error(new _("webgl-utils", `Unable to handle type ${t}`));
  }
}
function ot(t) {
  const n = {};
  for (const e in t) {
    const r = t[e];
    let i = 0;
    n[e] = r.map((s) => {
      const u = new $(s.name, s.count, s.type, i, 0, s.normalized || !1);
      return i += s.count * it(s.type), u;
    }), n[e].forEach((s) => s.stride = i);
  }
  return n;
}
const ct = (t) => {
  const n = /* @__PURE__ */ new Map();
  for (const e in t)
    for (const r of t[e])
      n.set(r.name, r.location);
  return n;
}, ut = (t) => {
  const n = {};
  for (const e in t) {
    const r = t[e];
    n[e] = r.length ? r[0].stride : 0;
  }
  return n;
}, m = /* @__PURE__ */ new Map(), Mt = (t, n) => {
  if (!m.has(t)) {
    const e = ot(n), r = { strides: ut(e), bufferLayouts: e, attributes: ct(n) };
    m.set(t, r);
  }
  return m.get(t);
};
function Ft(t) {
  t(a.FILL), t(a.LINE), t(a.MARKER), t(a.TEXT), t(a.LABEL);
}
const Bt = (t) => "path" in t && lt(t.path), Gt = (t) => "url" in t && t.url || "imageData" in t && t.imageData, Pt = (t) => "imageData" in t && t.imageData && "contentType" in t && t.contentType ? `data:${t.contentType};base64,${t.imageData}` : "url" in t ? t.url : null, $t = (t) => "url" in t && t.url && t.url.includes(".gif") || "contentType" in t && t.contentType === "image/gif" || "imageData" in t && t.imageData.includes("data:image/gif"), vt = (t) => "url" in t && t.url && t.url.includes(".png") || "contentType" in t && t.contentType === "image/png" || "imageData" in t && t.imageData.includes("data:image/png"), Ht = (t) => t.type && t.type.toLowerCase().indexOf("3d") !== -1;
function Yt(t) {
  switch (t.type) {
    case "line": {
      const n = t;
      return n.cim.type === "CIMSolidStroke" && !n.dashTemplate;
    }
    case "fill":
      return t.cim.type === "CIMSolidFill";
    case "esriSFS":
      return t.style === "esriSFSSolid" || t.style === "esriSFSNull";
    case "esriSLS":
      return t.style === "esriSLSSolid" || t.style === "esriSLSNull";
    default:
      return !1;
  }
}
const bt = (t) => t.includes("data:image/svg+xml");
function zt(t) {
  switch ("cim" in t ? t.cim.type : t.type) {
    case "esriSMS":
    case "esriPMS":
    case "CIMPointSymbol":
    case "CIMVectorMarker":
    case "CIMPictureMarker":
    case "CIMCharacterMarker":
      return !1;
    default:
      return !0;
  }
}
function xt(t) {
  const n = "maxVVSize" in t && t.maxVVSize, e = "width" in t && t.width || "size" in t && t.size || 0;
  return n || e;
}
function Xt(t) {
  const n = [];
  for (let e = 0; e < t.length; e++)
    n.push(t.charCodeAt(e));
  return n;
}
const lt = (t) => !!t && (t = t.trim(), !!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t) && /[\dz]$/i.test(t) && t.length > 4));
export {
  U as A,
  a as E,
  Nt as H,
  p as I,
  pt as J,
  mt as K,
  xt as L,
  Lt as M,
  Xt as N,
  E as O,
  Ut as Q,
  bt as S,
  $t as T,
  Rt as W,
  yt as Z,
  R as _,
  wt as a,
  Ht as b,
  Dt as c,
  Mt as d,
  Yt as e,
  zt as f,
  Gt as g,
  vt as h,
  Pt as i,
  at as k,
  gt as n,
  Ft as p,
  Ot as q,
  Ct as r,
  Et as t,
  St as w,
  dt as x,
  Bt as y,
  _t as z
};
