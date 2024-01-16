import { eD as C, R as O, a9 as I, eE as x, eF as D } from "./index-h53IWweP.js";
import { S as F } from "./quat-e5sgx9ql.js";
import { w as R, l as $, c as k, I as U, e as z } from "./I3SBinaryReader-U-ooiASO.js";
import { r as B, n as A } from "./vec3f32-BgIjjdRt.js";
import { a as J, b as N, d as V } from "./PointCloudUniqueValueRenderer-SG2fTLgg.js";
import "vue";
import "./mat3f64-Hpz0k8AN.js";
import "./quatf64-7HSf-W7T.js";
import "./VertexAttribute-g45rDpm-.js";
function E(c, t, l, r) {
  const { rendererJSON: i, isRGBRenderer: p } = c;
  let n = null, a = null;
  if (t && p)
    n = t;
  else if (t && (i == null ? void 0 : i.type) === "pointCloudUniqueValueRenderer") {
    a = J.fromJSON(i);
    const e = a.colorUniqueValueInfos;
    n = new Uint8Array(3 * r);
    const s = g(a.fieldTransformType);
    for (let o = 0; o < r; o++) {
      const u = (s ? s(t[o]) : t[o]) + "";
      for (let f = 0; f < e.length; f++)
        if (e[f].values.includes(u)) {
          n[3 * o] = e[f].color.r, n[3 * o + 1] = e[f].color.g, n[3 * o + 2] = e[f].color.b;
          break;
        }
    }
  } else if (t && (i == null ? void 0 : i.type) === "pointCloudStretchRenderer") {
    a = N.fromJSON(i);
    const e = a.stops;
    n = new Uint8Array(3 * r);
    const s = g(a.fieldTransformType);
    for (let o = 0; o < r; o++) {
      const u = s ? s(t[o]) : t[o], f = e.length - 1;
      if (u < e[0].value)
        n[3 * o] = e[0].color.r, n[3 * o + 1] = e[0].color.g, n[3 * o + 2] = e[0].color.b;
      else if (u >= e[f].value)
        n[3 * o] = e[f].color.r, n[3 * o + 1] = e[f].color.g, n[3 * o + 2] = e[f].color.b;
      else
        for (let b = 1; b < e.length; b++)
          if (u < e[b].value) {
            const m = (u - e[b - 1].value) / (e[b].value - e[b - 1].value);
            n[3 * o] = e[b].color.r * m + e[b - 1].color.r * (1 - m), n[3 * o + 1] = e[b].color.g * m + e[b - 1].color.g * (1 - m), n[3 * o + 2] = e[b].color.b * m + e[b - 1].color.b * (1 - m);
            break;
          }
    }
  } else if (t && (i == null ? void 0 : i.type) === "pointCloudClassBreaksRenderer") {
    a = V.fromJSON(i);
    const e = a.colorClassBreakInfos;
    n = new Uint8Array(3 * r);
    const s = g(a.fieldTransformType);
    for (let o = 0; o < r; o++) {
      const u = s ? s(t[o]) : t[o];
      for (let f = 0; f < e.length; f++)
        if (u >= e[f].minValue && u <= e[f].maxValue) {
          n[3 * o] = e[f].color.r, n[3 * o + 1] = e[f].color.g, n[3 * o + 2] = e[f].color.b;
          break;
        }
    }
  } else
    n = new Uint8Array(3 * r).fill(255);
  if (l && a && a.colorModulation) {
    const e = a.colorModulation.minValue, s = a.colorModulation.maxValue, o = 0.3;
    for (let u = 0; u < r; u++) {
      const f = l[u], b = f >= s ? 1 : f <= e ? o : o + (1 - o) * (f - e) / (s - e);
      n[3 * u] = b * n[3 * u], n[3 * u + 1] = b * n[3 * u + 1], n[3 * u + 2] = b * n[3 * u + 2];
    }
  }
  return n;
}
function T(c, t) {
  if (c.encoding == null || c.encoding === "") {
    const l = R(t, c);
    if (l.vertexAttributes.position == null)
      return;
    const r = $(t, l.vertexAttributes.position), i = l.header.fields, p = [i.offsetX, i.offsetY, i.offsetZ], n = [i.scaleX, i.scaleY, i.scaleZ], a = r.length / 3, e = new Float64Array(3 * a);
    for (let s = 0; s < a; s++)
      e[3 * s] = r[3 * s] * n[0] + p[0], e[3 * s + 1] = r[3 * s + 1] * n[1] + p[1], e[3 * s + 2] = r[3 * s + 2] * n[2] + p[2];
    return e;
  }
  if (c.encoding === "lepcc-xyz")
    return k(t).result;
}
function h(c, t, l) {
  return c != null && c.attributeInfo.useElevation ? t ? _(t, l) : null : c != null && c.attributeInfo.storageInfo ? U(c.attributeInfo.storageInfo, c.buffer, l) : null;
}
function _(c, t) {
  const l = new Float64Array(t);
  for (let r = 0; r < t; r++)
    l[r] = c[3 * r + 2];
  return l;
}
function q(c, t, l, r, i) {
  const p = c.length / 3;
  let n = 0;
  for (let a = 0; a < p; a++) {
    let e = !0;
    for (let s = 0; s < r.length && e; s++) {
      const { filterJSON: o } = r[s], u = i[s].values[a];
      switch (o.type) {
        case "pointCloudValueFilter": {
          const f = o.mode === "exclude";
          o.values.includes(u) === f && (e = !1);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const f = S(o.requiredSetBits), b = S(o.requiredClearBits);
          (u & f) === f && !(u & b) || (e = !1);
          break;
        }
        case "pointCloudReturnFilter": {
          const f = 15 & u, b = u >>> 4 & 15, m = b > 1, M = f === 1, y = f === b;
          let v = !1;
          for (const d of o.includedReturns)
            if (d === "last" && y || d === "firstOfMany" && M && m || d === "lastOfMany" && y && m || d === "single" && !m) {
              v = !0;
              break;
            }
          v || (e = !1);
          break;
        }
      }
    }
    e && (l[n] = a, c[3 * n] = c[3 * a], c[3 * n + 1] = c[3 * a + 1], c[3 * n + 2] = c[3 * a + 2], t[3 * n] = t[3 * a], t[3 * n + 1] = t[3 * a + 1], t[3 * n + 2] = t[3 * a + 2], n++);
  }
  return n;
}
function g(c) {
  switch (c) {
    default:
    case null:
    case "none":
      return (t) => t;
    case "low-four-bit":
      return (t) => 15 & t;
    case "high-four-bit":
      return (t) => (240 & t) >> 4;
    case "absolute-value":
      return (t) => Math.abs(t);
    case "modulo-ten":
      return (t) => t % 10;
  }
}
function S(c) {
  let t = 0;
  for (const l of c || [])
    t |= 1 << l;
  return t;
}
class P {
  transform(t) {
    const l = this._transform(t), r = [l.points.buffer, l.rgb.buffer];
    l.pointIdFilterMap != null && r.push(l.pointIdFilterMap.buffer);
    for (const i of l.attributes)
      "buffer" in i.values && C(i.values.buffer) && i.values.buffer !== l.rgb.buffer && r.push(i.values.buffer);
    return Promise.resolve({ result: l, transferList: r });
  }
  _transform(t) {
    const l = T(t.schema, t.geometryBuffer);
    let r = l.length / 3, i = null;
    const p = new Array(), n = h(t.primaryAttributeData, l, r);
    t.primaryAttributeData != null && n && p.push({ attributeInfo: t.primaryAttributeData.attributeInfo, values: n });
    const a = h(t.modulationAttributeData, l, r);
    t.modulationAttributeData != null && a && p.push({ attributeInfo: t.modulationAttributeData.attributeInfo, values: a });
    let e = E(t.rendererInfo, n, a, r);
    if (t.filterInfo && t.filterInfo.length > 0 && t.filterAttributesData != null) {
      const o = t.filterAttributesData.filter(O).map((u) => {
        const f = h(u, l, r), b = { attributeInfo: u.attributeInfo, values: f };
        return p.push(b), b;
      });
      i = new Uint32Array(r), r = q(l, e, i, t.filterInfo, o);
    }
    for (const o of t.userAttributesData) {
      const u = h(o, l, r);
      p.push({ attributeInfo: o.attributeInfo, values: u });
    }
    3 * r < e.length && (e = new Uint8Array(e.buffer.slice(0, 3 * r))), this._applyElevationOffsetInPlace(l, r, t.elevationOffset);
    const s = this._transformCoordinates(l, r, t.obb, I.fromJSON(t.inSR), I.fromJSON(t.outSR));
    return { obb: t.obb, points: s, rgb: e, attributes: p, pointIdFilterMap: i };
  }
  _transformCoordinates(t, l, r, i, p) {
    if (!x(t, i, 0, t, p, 0, l))
      throw new Error("Can't reproject");
    const n = B(r.center[0], r.center[1], r.center[2]), a = A(), e = A();
    F(w, r.quaternion);
    const s = new Float32Array(3 * l);
    for (let o = 0; o < l; o++)
      a[0] = t[3 * o] - n[0], a[1] = t[3 * o + 1] - n[1], a[2] = t[3 * o + 2] - n[2], D(e, a, w), r.halfSize[0] = Math.max(r.halfSize[0], Math.abs(e[0])), r.halfSize[1] = Math.max(r.halfSize[1], Math.abs(e[1])), r.halfSize[2] = Math.max(r.halfSize[2], Math.abs(e[2])), s[3 * o] = a[0], s[3 * o + 1] = a[1], s[3 * o + 2] = a[2];
    return s;
  }
  _applyElevationOffsetInPlace(t, l, r) {
    if (r !== 0)
      for (let i = 0; i < l; i++)
        t[3 * i + 2] += r;
  }
}
const w = z();
function W() {
  return new P();
}
export {
  W as default
};