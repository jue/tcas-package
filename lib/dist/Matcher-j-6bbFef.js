import { y as Q, H as vi, cc as wi, l as V, r as F, jB as ie, aV as se, w as re, fh as g, fg as bi, s as ct, ca as Xe, i6 as ne, fr as Si, du as Li, jC as Pi, hm as wt, fq as bt, ft as ae, b9 as Ue, b1 as zi, eC as $i, bd as Ti, bc as oe, bn as Ii, bh as je, bi as He, aa as Wi, R as Ci, be as Ei, bf as Ri, jD as ge, jE as Me, jF as ve, g as Ai, eP as we, eM as Fi, fj as Bi } from "./index-Ek1MTSEY.js";
import { _ as Zt, t as ki, o as lt, s as Vi, b as Ye, i as k, h as E, j as Di, a as Oi, d as Gi, f as at, g as Ki, k as Zi, $ as T, l as St, m as qe, U as Ni, e as be, p as Xi, q as Ui } from "./enums-YM9SAu8u.js";
import { f as ji, b as N, d as I, p as Hi } from "./visualVariablesUtils-MRd41y5-.js";
import { E as P, z as Se, x as C, w as M, J as Yi, Q as qi } from "./Utils-1SmxxQP6.js";
import { l as Qi } from "./tileUtils-_JbVMe5W.js";
import { n as Qe, r as Ji, d as ts, a as es } from "./TileClipper-UwGzPO3l.js";
import { _ as Nt, s as is, r as Je, n as ti, i as ss, a as rs, b as ns, c as as, o as os, U as ei, B as Ct, x as mt, R as ls, L as le } from "./MaterialKey-HWb_r4Z5.js";
import { g as hs, a as cs, d as us, n as Le, e as Dt } from "./CIMSymbolHelper-vL0M3Zv4.js";
import { f as Ot, o as fs, l as ds, H as _s, s as ms } from "./ExpandedCIM-tfKWt7nu.js";
import { h as Pe, M as ps } from "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
import { s as ii } from "./Geometry-etmNDSLV.js";
import { c as xs, a as ys } from "./devEnvironmentUtils-czI3Gfmg.js";
function B(n, t) {
  if (n && "name" in n) {
    const e = n;
    return t && t.error(new Q(e.name, e.message, e.details)), !1;
  }
  return !0;
}
const gs = 1.25;
let Lt = class {
  constructor(t, e) {
    this._pos = 0;
    const i = e ? this._roundToNearest(e, t.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(i), this._buffer = new t(this._array), this._ctor = t, this._i16View = new Int16Array(this._array);
  }
  get length() {
    return this._pos;
  }
  _roundToNearest(t, e) {
    const i = Math.round(t);
    return i + (e - i % e);
  }
  _ensureSize(t) {
    if (this._pos + t >= this._buffer.length) {
      const e = this._roundToNearest((this._array.byteLength + t * this._buffer.BYTES_PER_ELEMENT) * gs, this._buffer.BYTES_PER_ELEMENT), i = new ArrayBuffer(e), s = new this._ctor(i);
      s.set(this._buffer, 0), this._array = i, this._buffer = s, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t) {
    this._ensureSize(t);
  }
  writeF32(t) {
    this._ensureSize(1);
    const e = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t, this._pos++, e;
  }
  push(t) {
    this._ensureSize(1);
    const e = this._pos;
    return this._buffer[this._pos++] = t, e;
  }
  writeFixed(t) {
    this._buffer[this._pos++] = t;
  }
  setValue(t, e) {
    this._buffer[t] = e;
  }
  i1616Add(t, e, i) {
    this._i16View[2 * t] += e, this._i16View[2 * t + 1] += i;
  }
  getValue(t) {
    return this._buffer[t];
  }
  incr(t) {
    if (this._buffer.length < t)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[t]++;
  }
  decr(t) {
    this._buffer[t]--;
  }
  writeRegion(t) {
    this._ensureSize(t.length);
    const e = this._pos;
    return this._buffer.set(t, this._pos), this._pos += t.length, e;
  }
  writeManyFrom(t, e, i) {
    this._ensureSize(i - e);
    for (let s = e; s !== i; s++)
      this.writeFixed(t._buffer[s]);
  }
  buffer() {
    const t = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t;
  }
  toArray() {
    const t = this._array, e = [];
    for (let i = 0; i < t.byteLength / 4; i++)
      e.push(t[i]);
    return e;
  }
  seek(t) {
    this._pos = t;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};
const st = /* @__PURE__ */ new Map();
function Ms(n, t, e) {
  const { indicesPerRecord: i, multiplier: s, verticesPerRecord: r } = st.get(n);
  return { recordBytes: e * Zt * Uint32Array.BYTES_PER_ELEMENT, indexBytes: s * i * e * Uint32Array.BYTES_PER_ELEMENT, vertexBytes: s * r * e * t };
}
st.set(P.MARKER, { multiplier: 1, indicesPerRecord: 6, verticesPerRecord: 4 }), st.set(P.LINE, { multiplier: 1, indicesPerRecord: 24, verticesPerRecord: 8 }), st.set(P.FILL, { multiplier: 1, indicesPerRecord: 10, verticesPerRecord: 10 }), st.set(P.TEXT, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 }), st.set(P.LABEL, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 });
let ze = class {
  constructor(t, e, i) {
    this._start = { index: 0, vertex: 0 };
    const s = Ms(t, e, i), r = e / 4;
    this.geometryType = t, this._records = new Lt(Int32Array, s.recordBytes), this._indices = new Lt(Uint32Array, s.indexBytes), this._vertices = new Lt(Uint32Array, s.vertexBytes), this._metrics = new Lt(Float32Array, 0), this._strideInt = r;
  }
  serialize(t) {
    const e = this._records.buffer(), i = this._indices.buffer(), s = this._vertices.buffer(), r = this._metrics.length ? this._metrics.buffer() : null, a = 4 * this._strideInt;
    return t.push(e, i, s), { stride: a, records: e, indices: i, vertices: s, metrics: r };
  }
  get strideInt() {
    return this._strideInt;
  }
  get recordCount() {
    return this._records.length / Zt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(t) {
    this._vertices.ensureSize(t);
  }
  indexEnsureSize(t) {
    this._indices.ensureSize(t);
  }
  recordStart() {
    this._start.index = this._indices.length, this._start.vertex = this._vertices.length;
  }
  recordEnd(t, e, i, s, r, a, o, l) {
    this._records.push(t), this._records.push(e), this._records.push(i), this._records.push(s), this._records.push(r), this._records.push(a), this._records.push(o), this._records.writeF32(l);
  }
  writeIndex(t) {
    this._indices.push(t);
  }
  writeVertex(t) {
    this._vertices.push(t);
  }
  writeVertexF32(t) {
    this._vertices.writeF32(t);
  }
  copyLastFrom(t, e, i) {
    const s = t._records.length - Zt, r = t._records.getValue(s), a = t._records.getValue(s + 1), o = t._records.getValue(s + 2), l = t._records.getValue(s + 4), h = t._records.getValue(s + 6), u = t._records.getValue(s + 7), c = this._vertices.length, d = (t._start.vertex - this._vertices.length) / this._strideInt, _ = this._indices.length, m = this.vertexCount;
    for (let f = t._start.index; f !== t._indices.length; f++) {
      const p = t._indices.getValue(f);
      this._indices.push(p - d);
    }
    for (let f = t._start.vertex; f !== t._vertices.length; f++) {
      const p = t._vertices.getValue(f);
      this._vertices.push(p);
    }
    for (let f = c; f <= this._vertices.length; f += this._strideInt)
      this._vertices.i1616Add(f, e, i);
    this._records.push(r), this._records.push(a), this._records.push(o), this._records.push(_), this._records.push(l), this._records.push(m), this._records.push(h), this._records.push(u);
  }
};
const At = 1, he = 2, Ft = 4, ce = 8, ue = 16, Bt = 32, fe = 64, kt = 128;
function $e(n) {
  switch (n) {
    case At:
    case ce:
    case Bt:
      return -1;
    case he:
    case fe:
      return 0;
    case Ft:
    case ue:
    case kt:
      return 1;
  }
}
function Te(n) {
  switch (n) {
    case At:
    case he:
    case Ft:
      return -1;
    case ce:
    case ue:
      return 0;
    case Bt:
    case fe:
    case kt:
      return 1;
  }
}
const Ie = At | ce | Bt, We = Ft | ue | kt, Ce = At | he | Ft, Ee = Bt | fe | kt;
let Xr = class {
  constructor(t, e, i, s, r) {
    this._hasAggregate = !1, this.hasRecords = !1, this._data = { self: /* @__PURE__ */ new Map(), neighbors: new Array() }, this._current = { geometryType: 0, writer: null, overlaps: 0, start: 0, insertAfter: 0, sortKey: 0, id: 0, materialKey: 0, indexStart: 0, vertStart: 0, isDotDensity: !1, bufferingEnabled: !1, metricBoxLenPointer: 0 }, this.hint = e, this.tileKey = t, this._hasAggregate = s, this._pixelBufferEnabled = r, this._strideOptions = i;
  }
  get hasAggregates() {
    return this._hasAggregate;
  }
  get hasPixelBufferEnabled() {
    return this._pixelBufferEnabled;
  }
  serialize(t) {
    const e = [];
    return e.push(this._serializeTileVertexData(this.tileKey, this.tileKey, this._data.self)), this._data.neighbors.forEach((i, s) => {
      const r = 1 << s, a = $e(r), o = Te(r), l = Qi(new vi(this.tileKey), a, o, t), h = this._serializeTileVertexData(this.tileKey, l.id, i.vertexData);
      h.message.bufferIds = i.displayIds, e.push(h);
    }), e;
  }
  _serializeTileVertexData(t, e, i) {
    var s, r, a, o, l;
    const h = new Array();
    return { message: { tileKeyOrigin: t, tileKey: e, data: { [P.MARKER]: (s = i.get(P.MARKER)) == null ? void 0 : s.serialize(h), [P.FILL]: (r = i.get(P.FILL)) == null ? void 0 : r.serialize(h), [P.LINE]: (a = i.get(P.LINE)) == null ? void 0 : a.serialize(h), [P.TEXT]: (o = i.get(P.TEXT)) == null ? void 0 : o.serialize(h), [P.LABEL]: (l = i.get(P.LABEL)) == null ? void 0 : l.serialize(h) } }, transferList: h };
  }
  featureStart(t, e) {
    this._current.insertAfter = t, this._current.sortKey = e;
  }
  featureEnd() {
  }
  recordStart(t, e, i, s) {
    this._current.writer = this._getVertexWriter(i), this._current.overlaps = 0, this._current.indexStart = this._current.writer.indexCount, this._current.vertStart = this._current.writer.vertexCount, this._current.bufferingEnabled = s, this._current.id = t, this._current.materialKey = e, this._current.geometryType = i, this._current.isDotDensity = !1, this._current.writer.recordStart();
  }
  recordCount() {
    return this._current.writer.recordCount;
  }
  vertexCount() {
    return this._current.writer.vertexCount;
  }
  indexCount() {
    return this._current.writer.indexCount;
  }
  vertexEnsureSize(t) {
    this._current.writer.vertexEnsureSize(t);
  }
  indexEnsureSize(t) {
    this._current.writer.indexEnsureSize(t);
  }
  vertexBounds(t, e, i, s) {
    this._current.bufferingEnabled && this._addOverlap(t, e, i, s);
  }
  vertexWrite(t) {
    this._current.writer.writeVertex(t);
  }
  vertexWriteF32(t) {
    this._current.writer.writeVertexF32(t);
  }
  vertexEnd() {
  }
  vertexWriter() {
    return this._current.writer.vertexWriter;
  }
  indexWrite(t) {
    this._current.writer.writeIndex(t);
  }
  indexWriter() {
    return this._current.writer.indexWriter;
  }
  metricWriter() {
    return this._current.writer.metricWriter;
  }
  metricStart(t, e, i, s, r, a, o, l) {
    this._current.writer = this._getVertexWriter(P.LABEL);
    const h = this._current.writer.metricWriter;
    h.push(ji(t)), h.push(e), h.push(i), h.push(s), h.push(r), h.push(a), h.push(o), h.push(l), h.push(255), this._current.metricBoxLenPointer = h.push(0);
  }
  metricEnd() {
    const t = this._current.writer.metricWriter;
    t.getValue(this._current.metricBoxLenPointer) === 0 && t.seek(t.length - 10);
  }
  metricBoxWrite(t, e, i, s) {
    const r = this._current.writer.metricWriter;
    r.incr(this._current.metricBoxLenPointer), r.push(0), r.push(0), r.push(t), r.push(e), r.push(i), r.push(s);
  }
  recordEnd() {
    const t = this._current.vertStart, e = this._current.writer.vertexCount - t;
    if (!e)
      return !1;
    this.hasRecords = !0;
    const i = this._current.indexStart, s = this._current.writer.indexCount - i;
    if (this._current.writer.recordEnd(this._current.id, this._current.materialKey, this._current.insertAfter, i, s, t, e, this._current.sortKey), !this._pixelBufferEnabled || this._hasAggregate || this._current.overlaps === 0 || this._current.geometryType === P.LABEL)
      return !0;
    const r = this._current.writer;
    for (let a = 0; a < 8; a++) {
      const o = 1 << a;
      if (this._current.overlaps & o) {
        this._data.neighbors[a] || (this._data.neighbors[a] = { vertexData: /* @__PURE__ */ new Map(), displayIds: /* @__PURE__ */ new Set() });
        const l = this._data.neighbors[a], h = this._current.geometryType;
        if (!l.vertexData.has(h)) {
          const m = Se(h, this._strideOptions).geometry, f = new ze(h, m, ki);
          l.vertexData.set(h, f);
        }
        const u = l.vertexData.get(this._current.geometryType), c = 8, d = 512 * -$e(o) * c, _ = 512 * -Te(o) * c;
        u.copyLastFrom(r, d, _), l.displayIds.add(this._current.id);
      }
    }
    return !0;
  }
  _addOverlap(t, e, i, s) {
    const r = 255 ^ ((t < 0 + i ? We : t >= lt - i ? Ie : We | Ie) | (e < 0 + s ? Ee : e >= lt - s ? Ce : Ee | Ce));
    this._current.overlaps |= r;
  }
  _getVertexWriter(t) {
    if (!this._data.self.has(t)) {
      const e = this._data.self, i = Se(t, this._strideOptions).geometry;
      e.set(t, new ze(t, i, this.hint.records));
    }
    return this._data.self.get(t);
  }
};
const G = 0, K = 100;
function Re(n, t, e) {
  return n[0] = t[0] - e[0], n[1] = t[1] - e[1], n;
}
function si(n, t) {
  return Math.sqrt(n * n + t * t);
}
function Ae(n) {
  const t = si(n[0], n[1]);
  n[0] /= t, n[1] /= t;
}
function vs(n, t) {
  return si(n[0] - t[0], n[1] - t[1]);
}
function b(n) {
  return typeof n == "function";
}
function Xt(n = 2) {
  return 1 / Math.max(n, 1);
}
function U(n, t) {
  return [!!n.minScale && t.scaleToZoom(n.minScale) || G, !!n.maxScale && t.scaleToZoom(n.maxScale) || K];
}
function ws(n, t) {
  return n[t + 1];
}
function ri(n) {
  return n.length - 1;
}
function bs(n) {
  let t = 0;
  for (let e = 0; e < ri(n); e++)
    t += Ss(n, e);
  return t;
}
function Ss(n, t, e = 1) {
  const [i, s] = ws(n, t);
  return Math.sqrt(i * i + s * s) * e;
}
let Ls = class Ut {
  constructor(t, e, i, s, r) {
    this._segments = t, this._index = e, this._distance = i, this._xStart = s, this._yStart = r, this._done = !1;
  }
  static create(t) {
    return new Ut(t, 0, 0, t[0][0], t[0][1]);
  }
  clone() {
    return new Ut(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t) {
    return this._index === t._index || t._index === this._index - 1 && (this._distance === 0 || t._distance === 1) || t._index === this._index + 1 && (this._distance === 1 || t._distance === 0);
  }
  leq(t) {
    return this._index < t._index || this._index === t._index && this._distance <= t._distance;
  }
  geq(t) {
    return this._index > t._index || this._index === t._index && this._distance >= t._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t = this.dy, e = (0 * t + -1 * -this.dx) / (1 * this.length);
    let i = Math.acos(e);
    return t > 0 && (i = 2 * Math.PI - i), i;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t, dy: e } = this;
    return Math.sqrt(t * t + e * e);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < ri(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = !0, null);
  }
  _seekBackwards(t, e) {
    const i = this.backwardLength;
    if (t <= i)
      return this._distance = (i - t) / this.length, this;
    let s = this.backwardLength;
    for (; this.prev(); ) {
      if (s + this.length > t)
        return this._seekBackwards(t - s);
      s += this.length;
    }
    return this._distance = 0, e ? this : null;
  }
  seek(t, e = !1) {
    if (t < 0)
      return this._seekBackwards(Math.abs(t), e);
    if (t <= this.remainingLength)
      return this._distance = (this.backwardLength + t) / this.length, this;
    let i = this.remainingLength;
    for (; this.next(); ) {
      if (i + this.length > t)
        return this.seek(t - i, e);
      i += this.length;
    }
    return this._distance = 1, e ? this : null;
  }
};
function Ps(n, t, e, i = !0) {
  const s = bs(n), r = Ls.create(n), a = s / 2;
  if (!i)
    return r.seek(a), void e(r.clone(), 0, a + 0 * t, s);
  const o = Math.max((s - t) / 2, 0), l = Math.floor(o / t), h = a - l * t;
  r.seek(h);
  for (let u = -l; u <= l; u++)
    r.x < 512 && r.x >= 0 && r.y < 512 && r.y >= 0 && e(r.clone(), u, a + u * t, s), r.seek(t);
}
function zs(n, t) {
  const e = t;
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    const r = [];
    r.push(s[0]);
    for (let o = 1; o < s.length; o++) {
      let [l, h] = r[o - 1];
      l += s[o][0], h += s[o][1], r.push([l, h]);
    }
    $s(r, e);
    const a = [];
    a.push(r[0]);
    for (let o = 1; o < r.length; o++) {
      const [l, h] = r[o - 1], [u, c] = r[o], d = Math.round(u - l), _ = Math.round(c - h);
      a.push([d, _]);
    }
    n[i] = a, s = a;
  }
  return n;
}
function $s(n, t) {
  if (t <= 0)
    return;
  const i = n.length;
  if (i < 3)
    return;
  const s = [];
  let r = 0;
  s.push(0);
  for (let c = 1; c < i; c++)
    r += vs(n[c], n[c - 1]), s.push(r);
  t = Math.min(t, 0.2 * r);
  const a = [];
  a.push(n[0][0]), a.push(n[0][1]);
  const o = n[i - 1][0], l = n[i - 1][1], h = Re([0, 0], n[0], n[1]);
  Ae(h), n[0][0] += t * h[0], n[0][1] += t * h[1], Re(h, n[i - 1], n[i - 2]), Ae(h), n[i - 1][0] += t * h[0], n[i - 1][1] += t * h[1];
  for (let c = 1; c < i; c++)
    s[c] += t;
  s[i - 1] += t;
  const u = 0.5 * t;
  for (let c = 1; c < i - 1; c++) {
    let d = 0, _ = 0, m = 0;
    for (let f = c - 1; f >= 0 && !(s[f + 1] < s[c] - u); f--) {
      const p = u + s[f + 1] - s[c], x = s[f + 1] - s[f], y = s[c] - s[f] < u ? 1 : p / x;
      if (Math.abs(y) < 1e-6)
        break;
      const v = y * y, w = y * p - 0.5 * v * x, S = y * x / t, L = n[f + 1], z = n[f][0] - L[0], $ = n[f][1] - L[1];
      d += S / w * (L[0] * y * p + 0.5 * v * (p * z - x * L[0]) - v * y * x * z / 3), _ += S / w * (L[1] * y * p + 0.5 * v * (p * $ - x * L[1]) - v * y * x * $ / 3), m += S;
    }
    for (let f = c + 1; f < i && !(s[f - 1] > s[c] + u); f++) {
      const p = u - s[f - 1] + s[c], x = s[f] - s[f - 1], y = s[f] - s[c] < u ? 1 : p / x;
      if (Math.abs(y) < 1e-6)
        break;
      const v = y * y, w = y * p - 0.5 * v * x, S = y * x / t, L = n[f - 1], z = n[f][0] - L[0], $ = n[f][1] - L[1];
      d += S / w * (L[0] * y * p + 0.5 * v * (p * z - x * L[0]) - v * y * x * z / 3), _ += S / w * (L[1] * y * p + 0.5 * v * (p * $ - x * L[1]) - v * y * x * $ / 3), m += S;
    }
    a.push(d / m), a.push(_ / m);
  }
  a.push(o), a.push(l);
  for (let c = 0, d = 0; c < i; c++)
    n[c][0] = a[d++], n[c][1] = a[d++];
}
let ni = class {
  static getPlacement(t, e, i, s) {
    const r = hs(e);
    if (!r)
      return null;
    const a = cs(t);
    return r.execute(a, e, i, s);
  }
};
const Pt = 8, ai = (n) => class extends n {
  constructor(...t) {
    super(...t), this._isCIM = !1, this._vertexBoundsScale = 1, this.geometryType = P.TEXT, this._aux = C(0, 0, this._referenceSize, this._bitset);
  }
  bindTextInfo(t, e) {
    t && t.length ? this._shapingInfo = wi(t, (i) => us(i, e, { scale: this._scale, angle: this._angle, xOffset: this._xOffset, yOffset: this._yOffset, hAlign: this._xAlignD, vAlign: this._yAlignD, maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)), lineHeight: Vi * Math.max(0.25, Math.min(this._lineHeight, 4)), decoration: this._decoration, isCIM: this._isCIM })) : this._shapingInfo = null;
  }
  _write(t, e, i, s) {
    const r = e.getDisplayId();
    this._writeGeometry(t, e, r, i, s);
  }
  _writeGeometry(t, e, i, s, r) {
    const a = this._shapingInfo;
    if (V(a))
      return;
    if (F(this._textPlacement)) {
      const l = r ?? e.readLegacyGeometryForDisplay();
      return this._writePlacedText(t, i, l, a, s);
    }
    const o = r ? ie(se(r), 2) : e.geometryType === "esriGeometryPolygon" ? e.readCentroid() : e.readGeometryForDisplay();
    if (!V(o)) {
      if (o.isPoint) {
        const [l, h] = o.coords;
        return !t.hasAggregates && t.hasPixelBufferEnabled && (l < 0 || l >= 512 || h < 0 || h >= 512) ? void 0 : this._writeGlyphs(t, i, { x: l, y: h }, a);
      }
      o.forEachVertex((l, h) => this._writeGlyphs(t, i, { x: l, y: h }, a));
    }
  }
  _writePlacedText(t, e, i, s, r) {
    const a = re(this._textPlacement), o = ni.getPlacement(i, a, g(1), r.geometryEngine);
    if (!o)
      return;
    let l = o.next();
    for (; l != null; ) {
      const h = -l.getAngle();
      s.setRotation(h);
      const u = l.tx, c = -l.ty;
      u < 0 || u >= 512 || c < 0 || c >= 512 || (this._writeGlyphs(t, e, { x: u, y: c }, s), s.setRotation(-h)), l = o.next();
    }
  }
  _writeGlyphs(t, e, i, s) {
    const r = Nt.load(this._materialKey), a = M(Math.round(Pt * i.x), Math.round(Pt * i.y)), o = this._vertexBoundsScale, l = s.bounds, h = 2 * Math.max(l.width, l.height);
    for (const u of s.glyphs)
      r.textureBinding = u.textureBinding, t.recordStart(e, r.data, this.geometryType, !0), t.vertexBounds(i.x + l.x + this._xOffset, i.y + l.y - this._yOffset, h * o, h * o), this._writeVertices(t, e, a, u), t.recordEnd();
  }
  _writeGlyph(t, e, i, s, r) {
    const a = Nt.load(this._materialKey), o = M(Math.round(Pt * i), Math.round(Pt * s));
    a.textureBinding = r.textureBinding, t.recordStart(e, a.data, this.geometryType, !0);
    const l = r.bounds, h = this._vertexBoundsScale;
    t.vertexBounds(i + l.x * h, s + l.y * h, l.width * h, l.height * h), this._writeVertices(t, e, o, r), t.recordEnd();
  }
  _writeVertices(t, e, i, s) {
    const r = t.vertexCount();
    this._writeVertexCommon(t, e, i, s), t.vertexWrite(s.offsets.upperLeft), t.vertexWrite(s.texcoords.upperLeft), t.vertexEnd(), this._writeVertexCommon(t, e, i, s), t.vertexWrite(s.offsets.upperRight), t.vertexWrite(s.texcoords.upperRight), t.vertexEnd(), this._writeVertexCommon(t, e, i, s), t.vertexWrite(s.offsets.lowerLeft), t.vertexWrite(s.texcoords.lowerLeft), t.vertexEnd(), this._writeVertexCommon(t, e, i, s), t.vertexWrite(s.offsets.lowerRight), t.vertexWrite(s.texcoords.lowerRight), t.vertexEnd(), t.indexWrite(r + 0), t.indexWrite(r + 1), t.indexWrite(r + 2), t.indexWrite(r + 1), t.indexWrite(r + 3), t.indexWrite(r + 2);
  }
  _writeVertexCommon(t, e, i, s) {
    const r = this._color, a = this._haloColor, o = C(0, 0, this._referenceSize, this._bitset), l = C(0, 0, this._size, this._haloSize);
    t.vertexWrite(i), t.vertexWrite(e), t.vertexWrite(r), t.vertexWrite(a), t.vertexWrite(l), t.vertexWrite(o), t.vertexWrite(this._minMaxZoom);
  }
};
let Mt = class {
  bindFeature(t, e, i) {
  }
  write(t, e, i, s) {
    var r;
    if (V(this._effects) || ((r = this._effects) == null ? void 0 : r.length) === 0)
      return this._write(t, e, s);
    const a = Ot.executeEffects(this._effects, e.readLegacyGeometryForDisplay(), s.geometryEngine);
    let o = Ot.next(a);
    for (; o; )
      this._write(t, e, s, o), o = Ot.next(a);
  }
  _write(t, e, i, s) {
  }
};
const Ts = 5;
let jt = class Ht extends ai(Mt) {
  constructor(t, e, i, s, r, a, o, l, h, u, c, d, _, m, f, p, x, y, v = !1, w, S) {
    super(), this._xOffset = g(_), this._yOffset = g(m), this._decoration = u || "none", this._color = r, this._haloColor = a, this._haloSize = Math.min(Math.floor(Ts * g(bi(i))), 127), this._size = Math.min(Math.round(g(e)), 127);
    const L = Math.min(Math.round(g(s || e)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * L)), this._scale = this._size / Ye, this._angle = d, this._justify = is(o || "center"), this._xAlignD = Je(o || "center"), this._yAlignD = ti(l || "baseline"), this._baseline = (l || "baseline") === "baseline", this._bitset = (h === k.MAP ? 1 : 0) | (c ? 1 : 0) << 1;
    const z = Nt.load(t);
    z.sdf = !0, this._materialKey = z.data, this._lineWidth = g(f) || 512, this._lineHeight = p || 1, this._textPlacement = x, this._effects = y, this._isCIM = v, this._minMaxZoom = M(Math.round(w * E), Math.round(S * E));
  }
  static fromText(t, e) {
    const i = new Ht(t.materialKey, t.font.size, t.haloSize || 0, t.font.size, t.color && N(t.color) || 0, t.haloColor && N(t.haloColor) || 0, t.horizontalAlignment, t.verticalAlignment, k.SCREEN, t.font.decoration, !1, t.angle || 0, t.xoffset, t.yoffset, t.lineWidth, t.lineHeight, null, null, !1, G, K), [, s] = Le(t.text);
    return i.bindTextInfo(e, s), i._vertexBoundsScale = t.maxVVSize ? t.maxVVSize / t.font.size : 1, i;
  }
  static fromCIMText(t, e, i) {
    const s = t.scaleFactor || 1, r = t.size * t.sizeRatio * s, [a, o] = U(t.scaleInfo, i), l = new Ht(t.materialKey, r, t.outlineSize * t.sizeRatio, t.referenceSize, I(t.color), I(t.outlineColor), t.horizontalAlignment, t.verticalAlignment, t.alignment, t.decoration, t.colorLocked, t.angle, t.offsetX * t.sizeRatio * s, t.offsetY * t.sizeRatio * s, 512, 1, t.markerPlacement, t.effects, !0, a, o), [, h] = Le(t.text);
    return l.bindTextInfo(e, h), l._vertexBoundsScale = t.maxVVSize ? t.maxVVSize / r : 1, l;
  }
};
const Is = ct.getLogger("geoscene.views.2d.engine.webgl.WGLLabelTemplate"), Ws = (n, t = "mapview-labeling") => Is.error(new Q(t, n)), zt = 1, it = 0, Cs = 4;
function Es(n, t) {
  const e = !!n.minScale && t.scaleToZoom(n.minScale) || 0;
  return Xe(e, 0, 25.5);
}
function Rs(n, t) {
  const e = !!n.maxScale && t.scaleToZoom(n.maxScale) || 255;
  return Xe(e, 0, 25.5);
}
function As(n) {
  const t = /* @__PURE__ */ new Map();
  return (e) => (t.has(e) || t.set(e, n(e)), t.get(e));
}
const Fs = As((n) => {
  let t = 0;
  if (n === 0)
    return 1 / 0;
  for (; !(n % 2); )
    t++, n /= 2;
  return t;
}), $t = (n) => Math.floor(127 * n + 127), ut = (n) => Math.floor(10 * n), Tt = (n) => Math.round(n * (254 / 360));
class Et extends jt {
  constructor(t, e, i, s) {
    var r, a, o;
    super(t, i.font.size, i.haloSize || 0, i.font.size, i.color && N(i.color) || 0, i.haloColor && N(i.haloColor) || 0, i.horizontalAlignment, i.verticalAlignment, ss(e.labelPlacement) ? k.MAP : k.SCREEN, i.font.decoration, !1, i.angle || 0, i.xoffset, i.yoffset, i.lineWidth, i.lineHeight, null, null, null, null, null), this._outLineLabelAngle = 0, this._refPlacementPadding = 0, this._refPlacementDirX = 0, this._refPlacementDirY = 0, this._refOffsetX = 0, this._refOffsetY = 0, this._zoomLevel = 0, this.geometryType = P.LABEL, this._allowOverrun = (r = e.allowOverrun) != null && r, this._repeatLabel = (a = e.repeatLabel) == null || a, this._labelPosition = (o = e.labelPosition) != null ? o : "curved";
    const l = Es(e, s), h = Rs(e, s), u = e.labelPlacement, [c, d] = rs(u);
    this._xAlignD = c, this._yAlignD = d, this._minZoom = l, this._maxZoom = h, this._refPlacementPadding = g(i.haloSize) + Di, this._repeatLabelDistance = e.repeatLabelDistance ? g(e.repeatLabelDistance) : 128;
    const _ = ns.load(t);
    _.sdf = !0, this._materialKey = _.data;
  }
  static fromLabelClass(t, e) {
    if (t.labelPlacement === "esriServerLinePlacementCenterAlong") {
      const i = t.symbol;
      i.xoffset = 0, i.yoffset = 0, i.angle = 0, i.font.decoration = "none";
    }
    return new Et(t.materialKey, t, t.symbol, e);
  }
  get _shapedBox() {
    return re(this._shapingInfo).bounds;
  }
  setZoomLevel(t) {
    this._zoomLevel = t;
  }
  bindReferenceTemplate(t) {
    let e = as(this._xAlignD), i = os(this._yAlignD);
    if (this._refOffsetX = 0, this._refOffsetY = 0, V(t))
      return void (this._refSymbolAndPlacementOffset = C(0, 0, $t(e), $t(i)));
    if (t.boundsType === "circle" && (e || i)) {
      const a = Math.sqrt(e * e + i * i);
      e /= a, i /= a;
    }
    const s = Math.max(t.height, t.width), r = this._refPlacementPadding * Cs;
    this._refSymbolAndPlacementOffset = C(r, s, $t(e), $t(i)), this._referenceSize = s, this._refPlacementDirX = e, this._refPlacementDirY = i, this._refOffsetX = t.xOffset, this._refOffsetY = t.yOffset;
  }
  _write(t, e) {
    if (V(this._shapingInfo))
      return;
    const i = this._shapingInfo, s = e.getDisplayId(), r = e.geometryType === "esriGeometryPolygon" ? e.readLegacyCentroid() : e.readLegacyGeometry();
    if (r)
      switch (this.current = { out: t, inId: s, inShaping: i, zoomLevel: this._zoomLevel }, e.geometryType) {
        case "esriGeometryPolyline":
          this._placeLineLabels(r);
          break;
        case "esriGeometryPoint":
        case "esriGeometryPolygon":
          this._placePointLabels(r);
          break;
        default:
          Ws("mapview-labeling", `Geometry of type ${e.geometryType} is not supported`);
      }
  }
  _isVisible(t, e) {
    const i = ut(this.current.zoomLevel);
    return ut(t) <= i && i <= ut(e);
  }
  _placePointLabels(t) {
    const { out: e, inId: i, inShaping: s } = this.current;
    this._writeGlyphs(e, i, t, s);
  }
  _placeLineLabels(t) {
    const e = zs(t.paths, this.current.inShaping.bounds.width), i = this._placeSubdivGlyphs.bind(this), s = (this._shapedBox.width + this._repeatLabelDistance) / (1 << zt);
    for (const r of e)
      Ps(r, s, i, this._repeatLabel);
  }
  _placeSubdivGlyphs(t, e, i, s) {
    const r = Fs(e), a = this._shapedBox.width / (1 << zt), o = Math.sqrt(this._repeatLabelDistance) / (1 << zt), l = Math.min(i, s - i), h = Math.log2(l / (o + a / 2)), u = e === 0 ? h : Math.min(r, h), c = Math.max(this._minZoom, this.current.zoomLevel + zt - u), d = this.current.zoomLevel - c, _ = this._shapedBox.width / 2 * 2 ** d;
    this.current.inShaping.isMultiline ? e === 0 && this._placeStraight(t, c) : this._allowOverrun && d < 0 ? this._placeStraightAlong(t, this._minZoom) : this._labelPosition === "parallel" ? this._placeStraightAlong(t, c) : this._labelPosition === "curved" && this._placeCurved(t, c, _);
  }
  _placeStraight(t, e) {
    const { out: i, inId: s, inShaping: r } = this.current;
    this._writeGlyphs(i, s, t, r, e);
  }
  _placeCurved(t, e, i) {
    const { out: s, inId: r } = this.current;
    s.metricStart(r, e, t.x, t.y, 0, 0, 0, 0);
    const a = t.clone(), o = t.angle * (180 / Math.PI) % 360, l = (t.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = Tt(o), this._placeFirst(a, e, 1), this._placeBack(t, a, e, i, 1), this._placeForward(t, a, e, i, 1), this._outLineLabelAngle = Tt(l), this._placeFirst(a, e, 0), this._placeBack(t, a, e, i, 0), this._placeForward(t, a, e, i, 0), s.metricEnd();
  }
  _placeStraightAlong(t, e) {
    const { out: i, inId: s } = this.current;
    i.metricStart(s, e, t.x, t.y, 0, 0, 0, 0);
    const r = t.clone(), a = t.angle * (180 / Math.PI) % 360, o = (t.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = Tt(a), this._placeFirst(r, e, 1, !0), this._outLineLabelAngle = Tt(o), this._placeFirst(r, e, 0, !0), i.metricEnd();
  }
  _placeBack(t, e, i, s, r) {
    const a = t.clone();
    let o = t.backwardLength + it;
    for (; a.prev() && !(o >= s); )
      this._placeOnSegment(a, e, o, i, -1, r), o += a.length + it;
  }
  _placeForward(t, e, i, s, r) {
    const a = t.clone();
    let o = t.remainingLength + it;
    for (; a.next() && !(o >= s); )
      this._placeOnSegment(a, e, o, i, 1, r), o += a.length + it;
  }
  _placeFirst(t, e, i, s = !1) {
    const r = t, a = this.current.inShaping, o = a.glyphs, l = this.current.zoomLevel, { out: h, inId: u } = this.current;
    for (const c of o) {
      const d = c.x > a.bounds.x ? i : 1 - i, _ = d * t.remainingLength + (1 - d) * t.backwardLength, m = Math.abs(c.x + c.width / 2 - a.bounds.x), f = Math.max(0, l + Math.log2(m / (_ + it))), p = Math.max(e, s ? 0 : f);
      if (c.maxZoom = 25, c.angle = t.angle + (1 - i) * Math.PI, c.minZoom = p, this._writeGlyph(h, u, r.x, r.y, c), i && this._isVisible(c.minZoom, c.maxZoom)) {
        const x = c.bounds;
        h.metricBoxWrite(x.center[0], x.center[1], x.width, x.height);
      }
    }
  }
  _placeOnSegment(t, e, i, s, r, a) {
    const o = this.current.inShaping.glyphs, { out: l, inId: h } = this.current, u = this.current.inShaping, c = this.current.zoomLevel, d = t.dx / t.length, _ = t.dy / t.length, m = { x: t.x + i * -r * d, y: t.y + i * -r * _ };
    for (const f of o) {
      const p = f.x > u.bounds.x ? a : 1 - a;
      if (!(p && r === 1 || !p && r === -1))
        continue;
      const x = Math.abs(f.x + f.width / 2 - u.bounds.x), y = Math.max(0, c + Math.log2(x / i) - 0.1), v = Math.max(s, c + Math.log2(x / (i + t.length + it)));
      if (y !== 0 && (f.angle = t.angle + (1 - a) * Math.PI, f.minZoom = v, f.maxZoom = y, this._writeGlyph(l, h, m.x, m.y, f), a && this._isVisible(f.minZoom, f.maxZoom))) {
        const w = f.bounds, S = t.x - e.x, L = t.y - e.y;
        l.metricBoxWrite(w.center[0] + S, w.center[1] + L, w.width, w.height);
      }
    }
  }
  _writeGlyphs(t, e, i, s, r = this._minZoom) {
    if (i.x < 0 || i.x >= 512 || i.y < 0 || i.y >= 512)
      return;
    const a = i.x + this._refOffsetX, o = i.y - this._refOffsetY;
    for (const c of s.glyphs)
      c.minZoom = r, c.maxZoom = this._maxZoom, this._writeGlyph(t, e, a, o, c);
    const l = this._refPlacementDirX, h = this._refPlacementDirY, u = s.boundsT;
    t.metricStart(e, r, a, o, l, h, this._referenceSize, this._materialKey), t.metricBoxWrite(u.center[0], u.center[1], u.width, u.height), t.metricEnd();
  }
  _writeVertexCommon(t, e, i, s) {
    const r = this._color, a = this._haloColor, o = C(0, 0, this._size, this._haloSize), l = Math.max(s.minZoom, this._minZoom), h = Math.min(s.maxZoom, this._maxZoom), u = C(ut(l), ut(h), this._outLineLabelAngle, 0);
    t.vertexWrite(i), t.vertexWrite(e), t.vertexWrite(r), t.vertexWrite(a), t.vertexWrite(o), t.vertexWrite(this._refSymbolAndPlacementOffset), t.vertexWrite(u);
  }
}
const Fe = 3.14159265359 / 180, Be = 8, oi = (n) => class extends n {
  constructor(...t) {
    super(...t), this.angle = 0, this.xOffset = 0, this.yOffset = 0, this.width = 0, this.height = 0, this.boundsType = "square", this._anchorX = 0, this._anchorY = 0, this._computedWidth = 0, this._computedHeight = 0, this._vertexBoundsScaleX = 1, this._vertexBoundsScaleY = 1, this._offsets = { xUpperLeft: 0, yUpperLeft: 0, xUpperRight: 0, yUpperRight: 0, xBottomLeft: 0, yBottomLeft: 0, xBottomRight: 0, yBottomRight: 0 }, this.geometryType = P.MARKER;
  }
  _write(t, e, i, s) {
    const r = e.getDisplayId();
    t.recordStart(r, this._materialKey, this.geometryType, !0), this._writeGeometry(t, e, r, i, s), t.recordEnd();
  }
  _writeGeometry(t, e, i, s, r) {
    if (F(this._markerPlacement))
      return this._writePlacedMarkers(t, e, s, r);
    if (!r && e.geometryType === "esriGeometryPoint") {
      const o = e.getX(), l = e.getY();
      return !t.hasAggregates && t.hasPixelBufferEnabled && (o < 0 || o >= 513 || l < 0 || l >= 513) ? void 0 : this._writeVertices(t, i, this._getPos(o, l), o, l);
    }
    const a = r ? ie(se(r), 2) : e.geometryType === "esriGeometryPolygon" ? e.readCentroid() : e.readGeometryForDisplay();
    if (!V(a)) {
      if (a.isPoint) {
        const [o, l] = a.coords;
        return !t.hasAggregates && t.hasPixelBufferEnabled && (o < 0 || o >= 512 || l < 0 || l >= 512) ? void 0 : this._writeVertices(t, i, this._getPos(o, l), o, l);
      }
      a.forEachVertex((o, l) => this._writeVertices(t, i, this._getPos(o, l), o, l));
    }
  }
  _writePlacedMarkers(t, e, i, s) {
    const r = s ?? e.readLegacyGeometryForDisplay(), a = ni.getPlacement(r, re(this._markerPlacement), g(1), i.geometryEngine);
    if (!a)
      return;
    const o = e.getDisplayId(), l = ae(), h = ne(), u = -128, c = 640;
    let d = a.next();
    for (; d != null; ) {
      const _ = d.tx, m = -d.ty;
      _ >= u && _ <= c && m >= u && m <= c && (this._applyTransformation(h, l, -d.getAngle() / Fe), this._writeVertices(t, o, this._getPos(_, m), _, m)), d = a.next();
    }
  }
  _writeVertices(t, e, i, s, r) {
    const a = t.vertexCount();
    if (this.angle) {
      const o = Math.max(this._computedWidth * this._vertexBoundsScaleX, this._computedHeight * this._vertexBoundsScaleY);
      t.vertexBounds(s + this.xOffset, r - this.yOffset, o, o);
    } else
      t.vertexBounds(s + this.xOffset, r - this.yOffset, this._computedWidth * this._vertexBoundsScaleX, this._computedHeight * this._vertexBoundsScaleY);
    t.vertexWrite(i), t.vertexWrite(this._offsetUpperLeft), t.vertexWrite(this._texUpperLeft), t.vertexWrite(this._bitestAndDistRatio), t.vertexWrite(e), t.vertexWrite(this._fillColor), t.vertexWrite(this._outlineColor), t.vertexWrite(this._sizeOutlineWidth), t.vertexWrite(this._minMaxZoom), t.vertexEnd(), t.vertexWrite(i), t.vertexWrite(this._offsetUpperRight), t.vertexWrite(this._texUpperRight), t.vertexWrite(this._bitestAndDistRatio), t.vertexWrite(e), t.vertexWrite(this._fillColor), t.vertexWrite(this._outlineColor), t.vertexWrite(this._sizeOutlineWidth), t.vertexWrite(this._minMaxZoom), t.vertexEnd(), t.vertexWrite(i), t.vertexWrite(this._offsetBottomLeft), t.vertexWrite(this._texBottomLeft), t.vertexWrite(this._bitestAndDistRatio), t.vertexWrite(e), t.vertexWrite(this._fillColor), t.vertexWrite(this._outlineColor), t.vertexWrite(this._sizeOutlineWidth), t.vertexWrite(this._minMaxZoom), t.vertexEnd(), t.vertexWrite(i), t.vertexWrite(this._offsetBottomRight), t.vertexWrite(this._texBottomRight), t.vertexWrite(this._bitestAndDistRatio), t.vertexWrite(e), t.vertexWrite(this._fillColor), t.vertexWrite(this._outlineColor), t.vertexWrite(this._sizeOutlineWidth), t.vertexWrite(this._minMaxZoom), t.vertexEnd(), t.indexWrite(a + 0), t.indexWrite(a + 1), t.indexWrite(a + 2), t.indexWrite(a + 1), t.indexWrite(a + 3), t.indexWrite(a + 2);
  }
  _applyTransformation(t, e, i = 0) {
    Si(t, Li(this.xOffset, -this.yOffset)), this.angle + i !== 0 && Pi(t, t, Fe * (this.angle + i));
    const s = this._computedWidth, r = this._computedHeight, a = (this._anchorX - 0.5) * s, o = (this._anchorY - 0.5) * r;
    wt(e, a, o), bt(e, e, t), this._offsetUpperLeft = M(16 * e[0], 16 * e[1]), this._offsets.xUpperLeft = e[0], this._offsets.yUpperLeft = e[1], wt(e, a + s, o), bt(e, e, t), this._offsetUpperRight = M(16 * e[0], 16 * e[1]), this._offsets.xUpperRight = e[0], this._offsets.yUpperRight = e[1], wt(e, a, o + r), bt(e, e, t), this._offsetBottomLeft = M(16 * e[0], 16 * e[1]), this._offsets.xBottomLeft = e[0], this._offsets.yBottomLeft = e[1], wt(e, a + s, o + r), bt(e, e, t), this._offsetBottomRight = M(16 * e[0], 16 * e[1]), this._offsets.xBottomRight = e[0], this._offsets.yBottomRight = e[1];
  }
  _getPos(t, e) {
    return M(Math.round(Be * t), Math.round(Be * e));
  }
};
let ft = class dt extends oi(Mt) {
  constructor(t, e, i, s, r, a, o, l, h, u, c, d, _, m, f, p, x, y, v, w, S, L, z) {
    super(), this.angle = s, this.height = o, this.width = a, this.xOffset = e * v, this.yOffset = i * v, this._markerPlacement = w, this._effects = S, this._anchorX = 0.5 - (0.5 + p) * f.width / f.width, this._anchorY = 0.5 - (0.5 + x) * f.height / f.height, this._minMaxZoom = M(Math.round(L * E), Math.round(z * E));
    const $ = (m === k.MAP ? Oi : Gi) | (c ? at : 0) | (_ ? Ki : 0) | (d ? Zi : 0), tt = f && f.sdf, j = ei.load(t);
    j.sdf = tt, j.pattern = !0, j.textureBinding = f.textureBinding, this._materialKey = j.data, this._fillColor = r, this._outlineColor = h, this._sizeOutlineWidth = C(Math.round(Math.min(Math.sqrt(128 * a), 255)), Math.round(Math.min(Math.sqrt(128 * o), 255)), Math.round(Math.min(Math.sqrt(128 * u), 255)), Math.round(Math.min(Math.sqrt(128 * l), 255)));
    const D = f.rect.x + T, H = f.rect.y + T, et = D + f.width, vt = H + f.height;
    this._offsets.xUpperLeft = D, this._offsets.yUpperLeft = H, this._offsets.xUpperRight = et, this._offsets.yUpperRight = H, this._offsets.xBottomLeft = D, this._offsets.yBottomLeft = vt, this._offsets.xBottomRight = et, this._offsets.yBottomRight = vt, this._texUpperLeft = M(D, H), this._texUpperRight = M(et, H), this._texBottomLeft = M(D, vt), this._texBottomRight = M(et, vt), a *= y, o *= y, a *= v, o *= v;
    const yi = Math.round(64 * y);
    this._bitestAndDistRatio = M($, yi), this._computedWidth = a, this._computedHeight = o;
    const gi = ae(), Mi = ne();
    this._applyTransformation(Mi, gi);
  }
  static fromCIMMarker(t, e, i) {
    const s = e && e.width || 1, r = e && e.height || 1, a = t.size, o = s / r * t.scaleX, l = t.scaleSymbolsProportionally && t.frameHeight ? a / t.frameHeight : 1;
    let h = I(t.color);
    const u = I(t.outlineColor), c = g(a), d = c * o, _ = g(t.offsetX || 0), m = g(t.offsetY || 0), f = g(t.outlineWidth || 0) * l, p = t.alignment || k.SCREEN, x = g(t.referenceSize), [y, v] = U(t.scaleInfo, i);
    e.sdf || h !== 0 || (h = -1);
    let w = t.rotation || 0;
    t.rotateClockwise || (w = -w);
    let S = 0, L = 0;
    const z = t.anchorPoint;
    z && (t.isAbsoluteAnchorPoint ? a && (S = -z.x / (a * o), L = z.y / a) : (S = z.x, L = z.y));
    const $ = new dt(t.materialKey, _, m, w, h, d, c, x, u, f, t.colorLocked, t.scaleSymbolsProportionally, !1, p, e, S, L, t.sizeRatio, Ue(t.scaleFactor, 1), t.markerPlacement, t.effects, y, v);
    return $._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / d : 1, $._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / c : 1, $;
  }
  static fromPictureMarker(t, e) {
    const i = Math.round(g(t.width)), s = Math.round(g(t.height)), r = qe, a = Math.round(g(t.xoffset || 0)), o = Math.round(g(t.yoffset || 0)), l = new dt(t.materialKey, a, o, t.angle, r, i, s, s, 0, 0, !1, !1, !1, k.SCREEN, e, 0, 0, 1, 1, null, null, G, K);
    return l._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.width : 1, l._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.height : 1, l;
  }
  static fromSimpleMarker(t, e) {
    const i = N(t.color), s = Math.round(g(t.size)), r = s, a = Math.round(g(t.xoffset || 0)), o = Math.round(g(t.yoffset || 0)), l = t.style, h = t.outline, u = 0 | (h && h.color && N(h.color)), c = 0 | (h && h.width && Math.round(g(h.width))), d = new dt(t.materialKey, a, o, t.angle, i, s, r, r, u, c, !1, !1, l === "esriSMSCross" || l === "esriSMSX", k.SCREEN, e, 0, 0, 126 / 64, 1, null, null, G, K);
    return d.boundsType = l === "esriSMSCircle" ? "circle" : "square", d._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.size : 1, d._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.size : 1, d;
  }
  static fromLineSymbolMarker(t, e) {
    const i = N(t.color), s = 6, r = Math.round(g(s * t.lineWidth)), a = r, o = t.style === "cross" || t.style === "x";
    let l;
    switch (t.placement) {
      case "begin-end":
        l = St.Both;
        break;
      case "begin":
        l = St.JustBegin;
        break;
      case "end":
        l = St.JustEnd;
        break;
      default:
        l = St.None;
    }
    const h = { type: "CIMMarkerPlacementAtExtremities", angleToLine: !0, offset: 0, extremityPlacement: l, offsetAlongLine: 0 }, u = new dt(t.materialKey, 0, 0, 0, i, r, a, a / s, i, o ? Math.round(g(t.lineWidth)) : 0, !1, !1, o, k.MAP, e, 0, 0, 126 / 64, 1, h, null, G, K);
    return u.boundsType = t.style === "circle" ? "circle" : "square", u;
  }
};
function Bs(n, t, e, i, s, r, a) {
  Qt = 0;
  const o = (i - e) * r, l = s && s.length, h = l ? (s[0] - e) * r : o;
  let u, c, d, _, m, f = li(t, e, i, 0, h, r, !0);
  if (f && f.next !== f.prev) {
    if (l && (f = Os(t, e, i, s, f, r)), o > 80 * r) {
      u = d = t[0 + e * r], c = _ = t[1 + e * r];
      for (let p = r; p < h; p += r) {
        const x = t[p + e * r], y = t[p + 1 + e * r];
        u = Math.min(u, x), c = Math.min(c, y), d = Math.max(d, x), _ = Math.max(_, y);
      }
      m = Math.max(d - u, _ - c), m = m !== 0 ? 1 / m : 0;
    }
    xt(f, n, r, u, c, m, a, 0);
  }
}
function li(n, t, e, i, s, r, a) {
  let o;
  if (a === Xs(n, t, e, i, s, r) > 0)
    for (let l = i; l < s; l += r)
      o = ke(l + t * r, n[l + t * r], n[l + 1 + t * r], o);
  else
    for (let l = s - r; l >= i; l -= r)
      o = ke(l + t * r, n[l + t * r], n[l + 1 + t * r], o);
  return o && q(o, o.next) && (yt(o), o = o.next), o;
}
function pt(n, t = n) {
  if (!n)
    return n;
  let e, i = n;
  do
    if (e = !1, i.steiner || !q(i, i.next) && W(i.prev, i, i.next) !== 0)
      i = i.next;
    else {
      if (yt(i), i = t = i.prev, i === i.next)
        break;
      e = !0;
    }
  while (e || i !== t);
  return t;
}
function xt(n, t, e, i, s, r, a, o) {
  if (!n)
    return;
  !o && r && (n = hi(n, i, s, r));
  let l = n;
  for (; n.prev !== n.next; ) {
    const h = n.prev, u = n.next;
    if (r ? Vs(n, i, s, r) : ks(n))
      t.push(h.index / e + a), t.push(n.index / e + a), t.push(u.index / e + a), yt(n), n = u.next, l = u.next;
    else if ((n = u) === l) {
      o ? o === 1 ? xt(n = js(n, t, e, a), t, e, i, s, r, a, 2) : o === 2 && Hs(n, t, e, i, s, r, a) : xt(pt(n), t, e, i, s, r, a, 1);
      break;
    }
  }
}
function ks(n) {
  const t = n.prev, e = n, i = n.next;
  if (W(t, e, i) >= 0)
    return !1;
  let s = n.next.next;
  const r = s;
  let a = 0;
  for (; s !== n.prev && (a === 0 || s !== r); ) {
    if (a++, ot(t.x, t.y, e.x, e.y, i.x, i.y, s.x, s.y) && W(s.prev, s, s.next) >= 0)
      return !1;
    s = s.next;
  }
  return !0;
}
function Vs(n, t, e, i) {
  const s = n.prev, r = n, a = n.next;
  if (W(s, r, a) >= 0)
    return !1;
  const o = s.x < r.x ? s.x < a.x ? s.x : a.x : r.x < a.x ? r.x : a.x, l = s.y < r.y ? s.y < a.y ? s.y : a.y : r.y < a.y ? r.y : a.y, h = s.x > r.x ? s.x > a.x ? s.x : a.x : r.x > a.x ? r.x : a.x, u = s.y > r.y ? s.y > a.y ? s.y : a.y : r.y > a.y ? r.y : a.y, c = Yt(o, l, t, e, i), d = Yt(h, u, t, e, i);
  let _ = n.prevZ, m = n.nextZ;
  for (; _ && _.z >= c && m && m.z <= d; ) {
    if (_ !== n.prev && _ !== n.next && ot(s.x, s.y, r.x, r.y, a.x, a.y, _.x, _.y) && W(_.prev, _, _.next) >= 0 || (_ = _.prevZ, m !== n.prev && m !== n.next && ot(s.x, s.y, r.x, r.y, a.x, a.y, m.x, m.y) && W(m.prev, m, m.next) >= 0))
      return !1;
    m = m.nextZ;
  }
  for (; _ && _.z >= c; ) {
    if (_ !== n.prev && _ !== n.next && ot(s.x, s.y, r.x, r.y, a.x, a.y, _.x, _.y) && W(_.prev, _, _.next) >= 0)
      return !1;
    _ = _.prevZ;
  }
  for (; m && m.z <= d; ) {
    if (m !== n.prev && m !== n.next && ot(s.x, s.y, r.x, r.y, a.x, a.y, m.x, m.y) && W(m.prev, m, m.next) >= 0)
      return !1;
    m = m.nextZ;
  }
  return !0;
}
function ke(n, t, e, i) {
  const s = ht.create(n, t, e);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function yt(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function Ds(n) {
  let t = n, e = n;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== n);
  return e;
}
function Os(n, t, e, i, s, r) {
  const a = new Array();
  for (let o = 0, l = i.length; o < l; o++) {
    const h = li(n, t, e, i[o] * r, o < l - 1 ? i[o + 1] * r : e * r, r, !1);
    h === h.next && (h.steiner = !0), a.push(Ds(h));
  }
  a.sort(Us);
  for (const o of a)
    Gs(o, s), s = pt(s, s.next);
  return s;
}
function Gs(n, t) {
  if (t = Ks(n, t)) {
    const e = ui(t, n);
    pt(e, e.next);
  }
}
function Ks(n, t) {
  let e = t;
  const i = n.x, s = n.y;
  let r, a = -1 / 0;
  do {
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= i && d > a) {
        if (a = d, d === i) {
          if (s === e.y)
            return e;
          if (s === e.next.y)
            return e.next;
        }
        r = e.x < e.next.x ? e : e.next;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!r)
    return null;
  if (i === a)
    return r.prev;
  const o = r, l = r.x, h = r.y;
  let u, c = 1 / 0;
  for (e = r.next; e !== o; )
    i >= e.x && e.x >= l && i !== e.x && ot(s < h ? i : a, s, l, h, s < h ? a : i, s, e.x, e.y) && (u = Math.abs(s - e.y) / (i - e.x), (u < c || u === c && e.x > r.x) && gt(e, n) && (r = e, c = u)), e = e.next;
  return r;
}
function hi(n, t, e, i) {
  for (let s; s !== n; s = s.next) {
    if (s = s || n, s.z === null && (s.z = Yt(s.x, s.y, t, e, i)), s.prev.next !== s || s.next.prev !== s)
      return s.prev.next = s, s.next.prev = s, hi(n, t, e, i);
    s.prevZ = s.prev, s.nextZ = s.next;
  }
  return n.prevZ.nextZ = null, n.prevZ = null, Zs(n);
}
function Zs(n) {
  let t, e = 1;
  for (; ; ) {
    let i, s = n;
    n = null, t = null;
    let r = 0;
    for (; s; ) {
      r++, i = s;
      let a = 0;
      for (; a < e && i; a++)
        i = i.nextZ;
      let o = e;
      for (; a > 0 || o > 0 && i; ) {
        let l;
        a === 0 ? (l = i, i = i.nextZ, o--) : o !== 0 && i ? s.z <= i.z ? (l = s, s = s.nextZ, a--) : (l = i, i = i.nextZ, o--) : (l = s, s = s.nextZ, a--), t ? t.nextZ = l : n = l, l.prevZ = t, t = l;
      }
      s = i;
    }
    if (t.nextZ = null, e *= 2, r < 2)
      return n;
  }
}
function W(n, t, e) {
  return (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y);
}
function ci(n, t, e, i) {
  return !!(q(n, t) && q(e, i) || q(n, i) && q(e, t)) || W(n, t, e) > 0 != W(n, t, i) > 0 && W(e, i, n) > 0 != W(e, i, t) > 0;
}
function Ns(n, t) {
  let e = n;
  do {
    if (e.index !== n.index && e.next.index !== n.index && e.index !== t.index && e.next.index !== t.index && ci(e, e.next, n, t))
      return !0;
    e = e.next;
  } while (e !== n);
  return !1;
}
function Xs(n, t, e, i, s, r) {
  let a = 0;
  for (let o = i, l = s - r; o < s; o += r)
    a += (n[l + t * r] - n[o + t * r]) * (n[o + 1 + t * r] + n[l + 1 + t * r]), l = o;
  return a;
}
function ot(n, t, e, i, s, r, a, o) {
  return (s - a) * (t - o) - (n - a) * (r - o) >= 0 && (n - a) * (i - o) - (e - a) * (t - o) >= 0 && (e - a) * (r - o) - (s - a) * (i - o) >= 0;
}
function gt(n, t) {
  return W(n.prev, n, n.next) < 0 ? W(n, t, n.next) >= 0 && W(n, n.prev, t) >= 0 : W(n, t, n.prev) < 0 || W(n, n.next, t) < 0;
}
function Yt(n, t, e, i, s) {
  return (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - e) * s) | n << 8)) | n << 4)) | n << 2)) | n << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * s) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function q(n, t) {
  return n.x === t.x && n.y === t.y;
}
function Us(n, t) {
  return n.x - t.x;
}
function js(n, t, e, i) {
  let s = n;
  do {
    const r = s.prev, a = s.next.next;
    !q(r, a) && ci(r, s, s.next, a) && gt(r, a) && gt(a, r) && (t.push(r.index / e + i), t.push(s.index / e + i), t.push(a.index / e + i), yt(s), yt(s.next), s = n = a), s = s.next;
  } while (s !== n);
  return s;
}
function Hs(n, t, e, i, s, r, a) {
  let o = n;
  do {
    let l = o.next.next;
    for (; l !== o.prev; ) {
      if (o.index !== l.index && Ys(o, l)) {
        let h = ui(o, l);
        return o = pt(o, o.next), h = pt(h, h.next), xt(o, t, e, i, s, r, a, 0), void xt(h, t, e, i, s, r, a, 0);
      }
      l = l.next;
    }
    o = o.next;
  } while (o !== n);
}
function Ys(n, t) {
  return n.next.index !== t.index && n.prev.index !== t.index && !Ns(n, t) && gt(n, t) && gt(t, n) && qs(n, t);
}
function qs(n, t) {
  let e = n, i = !1;
  const s = (n.x + t.x) / 2, r = (n.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && s < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
  while (e !== n);
  return i;
}
function ui(n, t) {
  const e = ht.create(n.index, n.x, n.y), i = ht.create(t.index, t.x, t.y), s = n.next, r = t.prev;
  return n.next = t, t.prev = n, e.next = s, s.prev = e, i.next = e, e.prev = i, r.next = i, i.prev = r, i;
}
class ht {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }
  static create(t, e, i) {
    const s = Qt < qt.length ? qt[Qt++] : new ht();
    return s.index = t, s.x = e, s.y = i, s.prev = null, s.next = null, s.z = null, s.prevZ = null, s.nextZ = null, s.steiner = !1, s;
  }
}
const qt = new Array(), Qs = 8096;
let Qt = 0;
for (let n = 0; n < Qs; n++)
  qt.push(new ht());
const Js = 1e-5, Y = new Qe(0, 0, 0, 1, 0), Jt = new Qe(0, 0, 0, 1, 0);
function Ve(n, t, e) {
  let i = 0;
  for (let s = 1; s < e; s++) {
    const r = n[2 * (t + s - 1)], a = n[2 * (t + s - 1) + 1];
    i += (n[2 * (t + s)] - r) * (n[2 * (t + s) + 1] + a);
  }
  return i;
}
function tr(n, t, e, i, s) {
  let r = 0;
  const a = 2;
  for (let o = e; o < i; o += 3) {
    const l = (n[o] - s) * a, h = (n[o + 1] - s) * a, u = (n[o + 2] - s) * a;
    r += Math.abs((t[l] - t[u]) * (t[h + 1] - t[l + 1]) - (t[l] - t[h]) * (t[u + 1] - t[l + 1]));
  }
  return r;
}
function er(n, t) {
  const { coords: e, lengths: i, hasIndeterminateRingOrder: s } = t, r = 0, a = n;
  if (s)
    return !1;
  let o = 0;
  for (let l = 0; l < i.length; ) {
    let h = l, u = i[l], c = Ve(e, o, u);
    const d = [];
    for (; ++h < i.length; ) {
      const p = i[h], x = Ve(e, o + u, p);
      if (!(x > 0))
        break;
      c += x, d.push(o + u), u += p;
    }
    const _ = a.length;
    Bs(a, e, o, o + u, d, 2, r);
    const m = tr(a, e, _, a.length, r), f = Math.abs(c);
    if (Math.abs((m - f) / Math.max(1e-7, f)) > Js)
      return a.length = 0, !1;
    l = h, o += u;
  }
  return !0;
}
function ir(n) {
  const { coords: t, lengths: e } = n, { buffer: i } = Ji(t, e);
  return i;
}
function sr(n, t, e) {
  let i = 0;
  for (let s = 0; s < n.lengths.length; s++) {
    const r = n.lengths[s];
    for (let a = 0; a < r; a++) {
      const o = n.coords[2 * (a + i)], l = n.coords[2 * (a + i) + 1];
      if (o < t || o > e || l < t || l > e)
        return !0;
    }
    i += r;
  }
  return !1;
}
function rr(n, t) {
  if (V(n))
    return null;
  if (!sr(n, -128, lt + 128))
    return n;
  Y.setPixelMargin(t), Y.reset(ii.Polygon);
  let e = 0;
  for (let a = 0; a < n.lengths.length; a++) {
    const o = n.lengths[a];
    let l = n.coords[2 * (0 + e)], h = n.coords[2 * (0 + e) + 1];
    Y.moveTo(l, h);
    for (let u = 1; u < o; u++)
      l = n.coords[2 * (u + e)], h = n.coords[2 * (u + e) + 1], Y.lineTo(l, h);
    Y.close(), e += o;
  }
  const i = Y.result(!1);
  if (!i)
    return null;
  const s = [], r = [];
  for (const a of i) {
    let o = 0;
    for (const l of a)
      r.push(l.x), r.push(l.y), o++;
    s.push(o);
  }
  return new zi(s, r);
}
function nr(n, t) {
  Jt.setPixelMargin(t);
  const e = Jt, i = -t, s = lt + t;
  let r = [], a = !1, o = 0;
  for (; o < n.length; ) {
    const l = [], h = n[o];
    if (!h)
      return null;
    e.reset(ii.LineString);
    let [u, c] = h[0];
    if (a)
      e.moveTo(u, c);
    else {
      if (u < i || u > s || c < i || c > s) {
        a = !0;
        continue;
      }
      l.push({ x: u, y: c });
    }
    let d = !1;
    const _ = h.length;
    for (let m = 1; m < _; ++m)
      if (u += h[m][0], c += h[m][1], a)
        e.lineTo(u, c);
      else {
        if (u < i || u > s || c < i || c > s) {
          d = !0;
          break;
        }
        l.push({ x: u, y: c });
      }
    if (d)
      a = !0;
    else {
      if (a) {
        const m = e.resultWithStarts();
        if (m)
          for (const f of m)
            r.push(f);
      } else
        r.push({ line: l, start: 0 });
      o++, a = !1;
    }
  }
  return r = r.filter((l) => l.line.length > 1), r.length === 0 ? null : r;
}
Y.setExtent(lt), Jt.setExtent(lt);
const Rt = 8, A = 16, De = 65535, fi = (n) => class extends n {
  constructor(...t) {
    super(...t), this.tessellationProperties = {}, this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0 }, this.geometryType = P.LINE;
  }
  writeGeometry(t, e, i, s) {
    this._writeGeometry(t, e, i, s);
  }
  _initializeTessellator(t) {
    const e = Ct.load(this._materialKey), i = mt.load(this._materialKey), s = this._tessellationOptions, r = e.vvSizeFieldStops || e.vvSizeMinMaxValue || e.vvSizeScaleStops || e.vvSizeUnitValue, a = this.tessellationProperties._halfWidth < Ni && !t && !r;
    this.tessellationProperties.minMaxZoom = this._minMaxZoom, s.wrapDistance = De, s.textured = this._isDashed || this._hasPattern, s.offset = this.tessellationProperties.offset, s.halfWidth = this.tessellationProperties._halfWidth;
    const o = a ? 0 : 1, l = i.outlinedFill ? or : ar;
    this._lineTessellator = new ts(l(this.tessellationProperties, o, o), lr(this.tessellationProperties), a);
  }
  _write(t, e, i, s) {
    const r = e.geometryType === "esriGeometryPoint";
    t.recordStart(e.getDisplayId(), this._materialKey, this.geometryType, r), this._writeGeometry(t, e, s, r), t.recordEnd();
  }
  _writeGeometry(t, e, i, s) {
    const r = i ?? e.readLegacyGeometryForDisplay(), a = this._getLines(r, s);
    V(a) || this._writeVertices(t, e, a);
  }
  _getLines(t, e) {
    if (V(t))
      return null;
    const i = t.paths || t.rings;
    return V(i) ? null : nr(i, e ? 256 : 16);
  }
  _writeVertices(t, e, i) {
    const s = e.getDisplayId(), r = t.vertexCount(), a = this.tessellationProperties, o = this._tessellationOptions;
    a.out = t, a.id = s, a.indexCount = 0, a.vertexCount = 0, a.offset = r, o.capType = this._capType, o.joinType = this._joinType;
    const l = mt.load(this._materialKey);
    this.tessellationProperties.key = l.outlinedFill ? l : Ct.load(this._materialKey);
    for (const { line: h, start: u } of i)
      o.initialDistance = u % De, this._lineTessellator.tessellate(h, o);
  }
}, ar = (n, t, e) => (i, s, r, a, o, l, h, u, c, d, _) => {
  const m = M(_, Math.ceil(A * n._halfWidth)), f = C(Math.round(A * h), Math.round(A * u), Math.round(A * c), Math.round(A * d)), p = C(A * o, A * l, 0, n._bitset), x = n.out;
  return x.vertexBounds(i, s, t, e), x.vertexWrite(M(Rt * i, Rt * s)), x.vertexWrite(n.id), x.vertexWrite(n._fillColor), x.vertexWrite(f), x.vertexWrite(m), x.vertexWrite(n._tl), x.vertexWrite(n._br), x.vertexWrite(p), x.vertexWrite(M(Math.ceil(A * n._halfReferenceWidth), 0)), x.vertexWrite(n.minMaxZoom), x.vertexEnd(), n.offset + n.vertexCount++;
}, or = (n, t, e) => (i, s, r, a, o, l, h, u, c, d, _) => {
  const m = C(0, 0, A * n._halfWidth, A * n._halfReferenceWidth), f = C(A * h + 128, A * u + 128, A * c + 128, A * d + 128), p = n.out, x = n._bitset << 24 | n.id;
  return p.vertexBounds(i, s, t, e), p.vertexWrite(M(Rt * i, Rt * s)), p.vertexWrite(x), p.vertexWrite(n._fillColor), n.key.simple || (p.vertexWrite(0), p.vertexWrite(0)), p.vertexWrite(m), p.vertexWrite(f), n.key.simple || p.vertexWrite(n.minMaxZoom), p.vertexEnd(), n.offset + n.vertexCount++;
}, lr = (n) => (t, e, i) => {
  const s = n.out;
  s.indexWrite(t), s.indexWrite(e), s.indexWrite(i), n.indexCount += 3;
}, hr = ct.getLogger("geoscene.views.2d.engine.webgl.WGLLineTemplate");
let te = class rt extends fi(Mt) {
  constructor(t, e, i, s, r, a, o, l, h, u, c, d, _, m, f, p, x, y, v) {
    super();
    const w = Ct.load(t);
    e && (w.sdf = e.sdf, w.pattern = !0, w.textureBinding = e.textureBinding), this._capType = s, this._joinType = r, this._miterLimitCosine = Xt(a), this.tessellationProperties._fillColor = o, this.tessellationProperties._tl = l, this.tessellationProperties._br = h, this._hasPattern = u, this._isDashed = c, this._zOrder = p, this._effects = x, this._minMaxZoom = M(Math.round(y * E), Math.round(v * E)), this._materialKey = w.data;
    const S = (_ ? at : 0) | (m ? Xi : 0) | (d ? Ui : 0);
    this.tessellationProperties._bitset = S, this.tessellationProperties._halfWidth = 0.5 * i, this.tessellationProperties._halfReferenceWidth = 0.5 * f, this.tessellationProperties.offset = 0, this._initializeTessellator(!1);
  }
  static fromCIMLine(t, e, i) {
    const s = t.color, r = t.scaleFactor || 1, a = !!t.dashTemplate;
    let o = t.cap;
    a && o === be.ROUND && (o = be.SQUARE);
    const l = t.join, h = g(t.width) * r, u = g(t.referenceWidth), c = g(t.miterLimit), d = s && I(s) || 0, [_, m] = U(t.scaleInfo, i), f = !1;
    if (!e)
      return new rt(t.materialKey, e, h, o, l, c, d, 0, 0, !1, a, t.scaleDash, t.colorLocked, f, u, t.zOrder, t.effects, _, m);
    const { rect: p, width: x, height: y } = e, v = p.x + T, w = p.y + T, S = v + x, L = w + y, z = M(v, w), $ = M(S, L), tt = !1;
    return new rt(t.materialKey, e, h, o, l, c, d, z, $, !0, a, t.scaleDash, t.colorLocked, tt, u, t.zOrder, t.effects, _, m);
  }
  static fromFillOutline(t) {
    var e;
    return t.isOutlinedFill && t.outline && ((e = t.outline) == null ? void 0 : e.style) === "esriSLSSolid" ? rt.fromSimpleLine({ hash: "", materialKey: t.materialKey, ...t.outline }, null, !0) : null;
  }
  static fromSimpleLine(t, e, i = !1) {
    const { color: s } = t, r = t.style !== "esriSLSSolid" && t.style !== "esriSLSNull", a = Yi(t.cap || "round"), o = qi(t.join || "round");
    let l = s && t.style !== "esriSLSNull" && N(s) || 0;
    t.style === "esriSLSNull" && (l = 0);
    const h = g(t.width), u = t.miterLimit;
    if (!e)
      return new rt(t.materialKey, e, h, a, o, u, l, 0, 0, !1, r, !0, !1, i, h, 0, null, G, K);
    const { rect: c, width: d, height: _ } = e, m = c.x + T, f = c.y + T, p = m + d, x = f + _, y = M(m, f), v = M(p, x);
    return new rt(t.materialKey, e, h, a, o, u, l, y, v, !0, r, !0, !1, i, h, 0, null, G, K);
  }
  static fromPictureLineSymbol(t, e, i, s) {
    return hr.error("PictureLineSymbol support does not exist!"), null;
  }
};
const cr = 100, Oe = 1, di = (n) => class extends n {
  constructor(...t) {
    super(...t), this.forceLibtess = !1, this._bitset = 0, this._lineTemplate = null, this.geometryType = P.FILL;
  }
  _maybeAddLineTemplate(t) {
    this._lineTemplate = te.fromFillOutline(t);
  }
  _write(t, e, i, s) {
    const r = e.geometryType === "esriGeometryPoint", a = mt.load(this._materialKey);
    t.recordStart(e.getDisplayId(), this._materialKey, this.geometryType, r), this._writeGeometry(t, e, a, s, r), a.outlinedFill && F(this._lineTemplate) && this._lineTemplate.writeGeometry(t, e, s, r), t.recordEnd();
  }
  _writeGeometry(t, e, i, s, r) {
    const a = this._getGeometry(e, s, r);
    if (V(a))
      return;
    const o = [];
    if (!(a.maxLength > cr) && !this.forceLibtess && er(o, a))
      return void (o.length && this._writeVertices(t, e, a.coords, a.lengths, i, o));
    const l = ir(a);
    this._writeVertices(t, e, l, [l.length / 2], i);
  }
  _writeVertex(t, e, i, s, r, a) {
    const o = M(Oe * s, Oe * r);
    t.vertexBounds(s, r, 0, 0), t.vertexWrite(o), t.vertexWrite(e), i.dotDensity ? t.vertexWriteF32(1 / Math.abs(a.readGeometryArea())) : (t.vertexWrite(this.fillColor), i.simple || (t.vertexWrite(this.tl), t.vertexWrite(this.br)), t.vertexWrite(this.aux2), t.vertexWrite(this.aux3), i.simple || t.vertexWrite(this._minMaxZoom));
  }
  _writeVertices(t, e, i, s, r, a) {
    const o = e.getDisplayId(), l = this._bitset << 24 | o, h = s.reduce((_, m) => _ + m), u = r.dotDensity ? 4 : 10, c = t.vertexCount();
    t.vertexEnsureSize(u * h);
    let d = 0;
    if (a)
      for (const _ of a) {
        const m = i[2 * _], f = i[2 * _ + 1];
        this._writeVertex(t, l, r, m, f, e), d++;
      }
    else
      for (let _ = 0; _ < i.length; _ += 2) {
        const m = Math.round(i[_]), f = Math.round(i[_ + 1]);
        this._writeVertex(t, l, r, m, f, e), d++;
      }
    t.indexEnsureSize(d);
    for (let _ = 0; _ < d; _++)
      t.indexWrite(_ + c);
  }
  _getGeometry(t, e, i) {
    const s = e ? ie(se(e), 2) : t.readGeometryForDisplay();
    return s ? rr(s, i ? 256 : 8) : null;
  }
}, Ge = ct.getLogger("geoscene.views.2d.engine.webgl.WGLDynamicMeshTemplate");
let Vt = class extends Mt {
  constructor(t) {
    super(), this._ongoingMaterialRequestMap = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._dynamicPropertyMap = /* @__PURE__ */ new Map(), this._cimLayer = t;
  }
  analyze(t, e, i, s, r) {
    if (r && r.length === 0)
      return null;
    const a = r && r.length > 0, o = e.readLegacyFeature(), l = this._materialCache, h = this._cimLayer.materialHash;
    if (!h)
      return Ge.error("A Dynamic mesh template must have a material hash value or function!"), Promise.reject(null);
    const u = typeof h == "function" ? h(o, i, s) : h;
    if (l.has(u)) {
      const y = l.get(u);
      return Promise.resolve(y);
    }
    const c = this._ongoingMaterialRequestMap.get(u);
    if (c)
      return c;
    const d = this._cimLayer, _ = fs(d.cim, this._cimLayer.materialOverrides);
    _.mosaicHash = u;
    const { type: m, url: f } = d, p = { cim: _, type: m, mosaicHash: u, url: f, size: null, dashTemplate: null, text: null, fontName: null };
    switch (m) {
      case "marker":
        p.size = Dt(d.size, o, i, s);
        break;
      case "line":
        p.dashTemplate = d.dashTemplate;
        break;
      case "text":
        p.text = Dt(d.text, o, i, s), p.fontName = Dt(d.fontName, o, i, s);
    }
    const x = t.getMosaicItem(p, r).then((y) => (a || (this._ongoingMaterialRequestMap.delete(u), l.set(u, y)), y)).catch((y) => (this._ongoingMaterialRequestMap.delete(u), Ge.error(".analyze()", y.message), null));
    return a || this._ongoingMaterialRequestMap.set(u, x), x;
  }
};
const It = 128;
let ur = class _i extends di(Vt) {
  constructor(t, e, i) {
    var s;
    if (super(t), this._minMaxZoom = M(Math.round(e * E), Math.round(i * E)), b(t.color)) {
      const c = (d, _, m) => {
        const f = t.color(d, _, m);
        return f && I(f) || 0;
      };
      this._dynamicPropertyMap.set("fillColor", c);
    } else {
      const c = t.color;
      this.fillColor = c && I(c) || 0;
    }
    const r = ((s = t.cim.placement) == null ? void 0 : s.type) === "CIMMarkerPlacementInsidePolygon" && t.cim.placement.shiftOddRows ? 2 : 1, a = t.height;
    if (b(a)) {
      const c = (d, _, m) => a(d, _, m) * r;
      this._dynamicPropertyMap.set("_height", c);
    } else
      this._height = (a || 0) * r;
    const o = t.offsetX;
    if (b(o)) {
      const c = (d, _, m) => {
        let f = g(o(d, _, m)) + It;
        return f > 255 ? f = 255 : f < 0 && (f = 0), f;
      };
      this._dynamicPropertyMap.set("_offsetX", c);
    } else {
      let c = g(o || 0) + It;
      c > 255 ? c = 255 : c < 0 && (c = 0), this._offsetX = c;
    }
    const l = t.offsetY;
    if (b(l)) {
      const c = (d, _, m) => {
        let f = g(-l(d, _, m)) + It;
        return f > 255 ? f = 255 : f < 0 && (f = 0), f;
      };
      this._dynamicPropertyMap.set("_offsetY", c);
    } else {
      let c = g(-l || 0) + It;
      c > 255 ? c = 255 : c < 0 && (c = 0), this._offsetY = c;
    }
    const h = t.scaleX;
    b(h) ? this._dynamicPropertyMap.set("_scaleX", h) : this._scaleX = h || 1;
    const u = t.angle;
    if (b(u)) {
      const c = (d, _, m) => Pe(u(d, _, m));
      this._dynamicPropertyMap.set("_angle", c);
    } else
      this._angle = Pe(u) || 0;
    if (F(t.effects)) {
      const c = t.effects;
      b(c) ? this._dynamicPropertyMap.set("_effects", c) : this._effects = c;
    }
    this._cimFillLayer = t, this._fillMaterialKey = mt.load(t.materialKey);
  }
  static fromCIMFill(t, e) {
    const [i, s] = U(t.scaleInfo, e);
    return new _i(t, i, s);
  }
  bindFeature(t, e, i) {
    const s = t.readLegacyFeature();
    this._dynamicPropertyMap.forEach((u, c) => {
      this[c] = u(s, e, i);
    });
    const r = this._fillMaterialKey, a = this._materialCache, o = (0, this._cimFillLayer.materialHash)(s, e, i), l = a.get(o);
    let h = null;
    if (l && B(l.spriteMosaicItem) && (h = l.spriteMosaicItem), h) {
      const { rect: u, width: c, height: d } = h, _ = u.x + T, m = u.y + T, f = _ + c, p = m + d;
      let x = Math.round(g(this._height));
      x > 255 ? x = 255 : x <= 0 && (x = p - m);
      let y = Math.round(g(this._height / d * c || 0));
      y > 255 ? y = 255 : y <= 0 && (y = f - _);
      const v = this._scaleX, w = 1;
      this.tl = M(_, m), this.br = M(f, p), this.aux2 = C(y, x, this._offsetX, this._offsetY), this.aux3 = C(v, w, this._angle, 0), r.sdf = h.sdf, r.pattern = !0, r.textureBinding = h.textureBinding;
    } else
      this.tl = 0, this.br = 0, this.aux2 = 0, this.aux3 = 0, r.sdf = !1, r.pattern = !1, r.textureBinding = 0;
    this._materialKey = r.data;
  }
};
class de extends fi(Vt) {
  constructor(t, e, i) {
    super(t), this._minMaxZoom = M(Math.round(e * E), Math.round(i * E)), this._cimLineLayer = t;
    let s = 0;
    b(t.width) || (s = 0.5 * g(t.width));
    const r = (l, h, u) => b(t.width) ? 0.5 * g(t.width(l, h, u)) : s;
    this._dynamicPropertyMap.set("_halfWidth", r), b(t.cap) ? this._dynamicPropertyMap.set("_capType", t.cap) : this._capType = t.cap, b(t.join) ? this._dynamicPropertyMap.set("_joinType", t.join) : this._joinType = t.join;
    const a = t.color;
    if (b(a)) {
      const l = (h, u, c) => I(a(h, u, c));
      this._dynamicPropertyMap.set("_fillColor", l);
    } else
      this._fillColor = a && I(a) || 0;
    const o = t.miterLimit;
    if (b(o)) {
      const l = (h, u, c) => Xt(o(h, u, c));
      this._dynamicPropertyMap.set("_miterLimitCosine", l);
    } else
      this._miterLimitCosine = Xt(o);
    if (F(t.effects)) {
      const l = t.effects;
      b(l) ? this._dynamicPropertyMap.set("_effects", l) : this._effects = l;
    }
    this._scaleFactor = t.scaleFactor || 1, this._isDashed = t.dashTemplate != null, this.tessellationProperties._bitset = (t.colorLocked ? 1 : 0) | (t.scaleDash ? 1 : 0) << 1, this._materialKey = t.materialKey, this._initializeTessellator(!0);
  }
  static fromCIMLine(t, e) {
    const [i, s] = U(t.scaleInfo, e);
    return new de(t, i, s);
  }
  bindFeature(t, e, i) {
    const s = t.readLegacyFeature();
    this._dynamicPropertyMap.forEach((u, c) => {
      this[c] = u(s, e, i);
    }), this._halfWidth *= this._scaleFactor;
    const r = this._materialCache, a = (0, this._cimLineLayer.materialHash)(s, e, i), o = r.get(a);
    let l = null;
    if (o && B(o.spriteMosaicItem) && (l = o.spriteMosaicItem), l) {
      this._hasPattern = !0;
      const { rect: u, width: c, height: d } = l, _ = u.x + T, m = u.y + T, f = _ + c, p = m + d;
      this.tessellationProperties._tl = M(_, m), this.tessellationProperties._br = M(f, p);
    } else
      this._hasPattern = !1, this.tessellationProperties._tl = 0, this.tessellationProperties._br = 0;
    this.tessellationProperties._fillColor = this._fillColor, this.tessellationProperties._halfWidth = this._halfWidth, this.tessellationProperties.offset = 0, this.tessellationProperties._halfReferenceWidth = this.tessellationProperties._halfWidth;
    const h = Ct.load(this._materialKey);
    l && (h.sdf = l.sdf, h.pattern = !0, h.textureBinding = l.textureBinding), this._materialKey = h.data;
  }
}
const fr = ae(), dr = ne(), _r = ct.getLogger("geoscene.views.2d.engine.webgl.WGLDynamicMarkerTemplate");
let mr = class mi extends oi(Vt) {
  constructor(t, e, i) {
    super(t), this._cimMarkerLayer = t, this._minMaxZoom = M(Math.round(e * E), Math.round(i * E));
    const s = t.color;
    if (b(s)) {
      const d = (_, m, f) => I(s(_, m, f));
      this._dynamicPropertyMap.set("_fillColor", d);
    } else
      this._fillColor = I(s);
    const r = t.outlineColor;
    if (b(r)) {
      const d = (_, m, f) => I(r(_, m, f));
      this._dynamicPropertyMap.set("_outlineColor", d);
    } else
      this._outlineColor = I(r);
    const a = t.size;
    if (b(a)) {
      const d = (_, m, f) => g(a(_, m, f));
      this._dynamicPropertyMap.set("_size", d);
    } else
      this._size = g(a) || 0;
    const o = t.scaleX;
    b(o) ? this._dynamicPropertyMap.set("_scaleX", o) : this._scaleX = o || 1;
    const l = t.offsetX;
    if (b(l)) {
      const d = (_, m, f) => g(l(_, m, f));
      this._dynamicPropertyMap.set("xOffset", d);
    } else
      this.xOffset = g(l) || 0;
    const h = t.offsetY;
    if (b(h)) {
      const d = (_, m, f) => g(h(_, m, f));
      this._dynamicPropertyMap.set("yOffset", d);
    } else
      this.yOffset = g(h) || 0;
    const u = t.outlineWidth;
    if (b(u)) {
      const d = (_, m, f) => g(u(_, m, f));
      this._dynamicPropertyMap.set("_outlineWidth", d);
    } else
      this._outlineWidth = g(u) || 0;
    const c = t.rotation;
    if (b(c) ? this._dynamicPropertyMap.set("_angle", c) : this._angle = c || 0, F(t.effects)) {
      const d = t.effects;
      b(d) ? this._dynamicPropertyMap.set("_effects", d) : this._effects = d;
    }
    if (F(t.markerPlacement)) {
      const d = t.markerPlacement;
      b(d) ? this._dynamicPropertyMap.set("_markerPlacement", d) : this._markerPlacement = d;
    }
    this._scaleFactor = Ue(t.scaleFactor, 1), this._bitSet = (t.alignment === k.MAP ? 1 : 0) | (t.colorLocked ? 1 : 0) << 1 | (t.scaleSymbolsProportionally ? 1 : 0) << 3, this._materialKey = t.materialKey;
  }
  static fromCIMMarker(t, e) {
    const [i, s] = U(t.scaleInfo, e);
    return new mi(t, i, s);
  }
  bindFeature(t, e, i) {
    const s = t.readLegacyFeature();
    this._dynamicPropertyMap.forEach((H, et) => {
      this[et] = H(s, e, i);
    });
    const r = this._cimMarkerLayer.materialHash, a = typeof r == "function" ? r(s, e, i) : r, o = this._materialCache.get(a);
    if (!o || !B(o.spriteMosaicItem) || !o.spriteMosaicItem)
      return void _r.error(new Q("mapview-cim", "Encountered an error when binding feature"));
    const l = o.spriteMosaicItem, h = this._cimMarkerLayer.sizeRatio, u = l.width / l.height * this._scaleX, c = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle;
    let d = this._size, _ = d * u;
    const m = this.xOffset, f = this.yOffset;
    this.xOffset *= this._scaleFactor, this.yOffset *= this._scaleFactor;
    const p = this._cimMarkerLayer.scaleSymbolsProportionally && this._cimMarkerLayer.frameHeight ? this._size / g(this._cimMarkerLayer.frameHeight) : 1, x = this._outlineWidth * p, y = g(this._cimMarkerLayer.referenceSize);
    let v = 0, w = 0;
    const S = this._cimMarkerLayer.anchorPoint;
    S && (this._cimMarkerLayer.isAbsoluteAnchorPoint ? this._size && (v = -S.x / (this._size * u), w = S.y / this._size) : (v = S.x, w = S.y)), this._sizeOutlineWidth = C(Math.round(Math.min(Math.sqrt(128 * _), 255)), Math.round(Math.min(Math.sqrt(128 * d), 255)), Math.round(Math.min(Math.sqrt(128 * x), 255)), Math.round(Math.min(Math.sqrt(128 * y), 255))), this.angle = c;
    const L = Math.round(64 * h);
    this._bitestAndDistRatio = M(this._bitSet, L);
    const z = l.rect.x + T, $ = l.rect.y + T, tt = z + l.width, j = $ + l.height;
    this._texUpperLeft = M(z, $), this._texUpperRight = M(tt, $), this._texBottomLeft = M(z, j), this._texBottomRight = M(tt, j);
    const D = ei.load(this._materialKey);
    D.sdf = l.sdf, D.pattern = !0, D.textureBinding = l.textureBinding, this._materialKey = D.data, this._anchorX = 0.5 - (0.5 + v) * l.width / l.width, this._anchorY = 0.5 - (0.5 + w) * l.height / l.height, _ *= h, d *= h, _ *= this._scaleFactor, d *= this._scaleFactor, _ *= l.rect.width / l.width, d *= l.rect.height / l.height, this._computedWidth = _, this._computedHeight = d, this._applyTransformation(dr, fr), this.xOffset = m, this.yOffset = f;
  }
};
function pi(n) {
  const t = new Array(n.length);
  for (let e = 0; e < n.length; e++)
    t[e] = n.charCodeAt(e);
  return t;
}
const Ke = 5;
function pr(n, t, e, i) {
  return typeof n.text == "string" ? n.text : typeof n.text == "function" ? n.text(t, e, i) : "";
}
let xr = class xi extends ai(Vt) {
  constructor(t, e, i) {
    super(t), this._horizontalAlignment = "center", this._verticalAlignment = "middle", this._textToGlyphs = /* @__PURE__ */ new Map(), this._minMaxZoom = M(Math.round(e * E), Math.round(i * E));
    const s = t.scaleFactor || 1;
    this._cimTextLayer = t;
    const r = t.color;
    if (b(r)) {
      const f = (p, x, y) => I(r(p, x, y));
      this._dynamicPropertyMap.set("_color", f);
    } else
      this._color = I(r);
    const a = t.outlineColor;
    if (b(a)) {
      const f = (p, x, y) => I(a(p, x, y));
      this._dynamicPropertyMap.set("_haloColor", f);
    } else
      this._haloColor = I(a);
    let o;
    b(t.size) || (o = Math.min(Math.round(g(t.size * t.sizeRatio)), 127));
    const l = (f, p, x) => b(t.size) ? Math.min(Math.round(g(t.size(f, p, x) * t.sizeRatio)), 127) : o;
    if (this._dynamicPropertyMap.set("_size", l), b(t.outlineSize)) {
      const f = (p, x, y) => Math.min(Math.floor(Ke * g(t.outlineSize(p, x, y) * t.sizeRatio)), 127);
      this._dynamicPropertyMap.set("_haloSize", f);
    } else
      this._haloSize = Math.min(Math.floor(Ke * g(t.outlineSize * t.sizeRatio)), 127);
    let h;
    b(t.offsetX) || (h = Math.round(g(t.offsetX * t.sizeRatio)));
    const u = (f, p, x) => b(t.offsetX) ? Math.round(g(t.offsetX(f, p, x) * t.sizeRatio)) : h;
    let c;
    this._dynamicPropertyMap.set("_xOffset", u), b(t.offsetY) || (c = Math.round(g(t.offsetY * t.sizeRatio)));
    const d = (f, p, x) => b(t.offsetY) ? Math.round(g(t.offsetY(f, p, x) * t.sizeRatio)) : c;
    if (this._dynamicPropertyMap.set("_yOffset", d), b(t.angle) ? this._dynamicPropertyMap.set("_angle", t.angle) : this._angle = t.angle, b(t.horizontalAlignment) ? this._dynamicPropertyMap.set("_horizontalAlignment", t.horizontalAlignment) : this._horizontalAlignment = t.horizontalAlignment, b(t.verticalAlignment) ? this._dynamicPropertyMap.set("_verticalAlignment", t.verticalAlignment) : this._verticalAlignment = t.verticalAlignment, F(t.effects)) {
      const f = t.effects;
      b(f) ? this._dynamicPropertyMap.set("_effects", f) : this._effects = f;
    }
    if (F(t.markerPlacement)) {
      const f = t.markerPlacement;
      b(f) ? this._dynamicPropertyMap.set("_markerPlacement", f) : this._textPlacement = f;
    }
    b(t.text) ? this._dynamicPropertyMap.set("_text", t.text) : this._text = t.text, this._scaleFactor = s;
    const _ = Math.min(Math.round(g(t.referenceSize * t.sizeRatio)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * _)), this._materialKey = t.materialKey;
    const m = ls.load(this._materialKey);
    m.sdf = !0, this._bitset = (t.alignment === k.MAP ? 1 : 0) | (t.colorLocked ? 1 : 0) << 1, this._materialKey = m.data, this._decoration = "none", this._lineHeight = 1, this._lineWidth = 512, this._isCIM = !0;
  }
  static fromCIMText(t, e) {
    const [i, s] = U(t.scaleInfo, e);
    return new xi(t, i, s);
  }
  async analyze(t, e, i, s) {
    const r = e.readLegacyFeature(), a = pr(this._cimTextLayer, r, i, s), o = await super.analyze(t, e, i, s, pi(a));
    return o && o.glyphMosaicItems && this._textToGlyphs.set(a, o.glyphMosaicItems), o;
  }
  bindFeature(t, e, i) {
    const s = t.readLegacyFeature();
    if (this._dynamicPropertyMap.forEach((a, o) => {
      this[o] = a(s, e, i);
    }), !this._text || this._text.length === 0)
      return void (this._shapingInfo = null);
    this._size *= this._scaleFactor, this._scale = this._size / Ye, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = Je(this._horizontalAlignment || "center"), this._yAlignD = ti(this._verticalAlignment || "baseline");
    const r = this._textToGlyphs.get(this._text);
    this.bindTextInfo(r, !1);
  }
};
const O = 128;
let Gt = class nt extends di(Mt) {
  constructor(t, e, i, s, r, a, o, l, h, u, c, d, _, m, f, p) {
    super(), this._effects = m;
    const x = mt.load(t);
    e && (x.sdf = e.sdf, x.pattern = !0, x.textureBinding = e.textureBinding), this.fillColor = i, this.tl = s, this.br = r, this.aux2 = C(a, o, l, h), this.aux3 = C(u, c, d, 0), this._bitset = _, this._minMaxZoom = M(Math.round(f * E), Math.round(p * E)), this._materialKey = x.data;
  }
  static fromCIMFill(t, e, i) {
    const s = t.color, r = s && I(s) || 0, a = t.materialKey, [o, l] = U(t.scaleInfo, i);
    if (!e)
      return new nt(a, null, r, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.colorLocked ? at : 0, t.effects, o, l);
    const { rect: h, width: u, height: c } = e, d = t.scaleX || 1, _ = h.x + T, m = h.y + T, f = _ + u, p = m + c, x = t.height, y = d * x;
    let v = Math.round(x);
    v > 255 ? v = 255 : v <= 0 && (v = p - m);
    let w = Math.round(y);
    w > 255 ? w = 255 : w <= 0 && (w = f - _);
    let S = g(t.offsetX || 0) + O;
    S > 255 && (S = 255);
    let L = g(-t.offsetY || 0) + O;
    L > 255 && (L = 255);
    const z = M(_, m), $ = M(f, p);
    return new nt(a, e, r, z, $, w, v, S, L, O, O, ps(t.angle), t.colorLocked ? at : 0, t.effects, o, l);
  }
  static fromSimpleFill(t, e, i = !1) {
    const { color: s } = t, r = s && t.style !== "esriSFSNull" && N(s) || 0, a = i ? at : 0, o = t.materialKey;
    let l;
    if (e) {
      const { rect: h, width: u, height: c } = e, d = h.x + T, _ = h.y + T, m = d + u, f = _ + c, p = M(d, _), x = M(m, f);
      l = new nt(o, e, r, p, x, u, c, 0, 0, O, O, 0, a, null, G, K);
    } else
      l = new nt(o, null, r, 0, 0, 0, 0, 0, 0, 0, 0, 0, a, null, G, K);
    return l._maybeAddLineTemplate(t), l;
  }
  static fromPictureFill(t, e, i = !1) {
    const s = qe, { rect: r, width: a, height: o } = e, l = r.x + T, h = r.y + T, u = l + a, c = h + o, d = M(l, h), _ = M(u, c);
    let m = Math.round(g(t.width));
    m > 255 && (m = 255);
    let f = Math.round(g(t.height));
    f > 255 && (f = 255);
    let p = g(t.xoffset) + O;
    p > 255 && (p = 255);
    let x = g(-t.yoffset) + O;
    x > 255 && (x = 255);
    const y = t.materialKey, v = i ? at : 0, w = new nt(y, e, s, d, _, m, f, p, x, O * t.xscale, O * t.yscale, 0, v, null, G, K);
    return w._maybeAddLineTemplate(t), w;
  }
};
class yr {
  constructor() {
    this._resolver = null;
  }
  isHeld() {
    return !!this._resolver;
  }
  async acquire() {
    if (!this._resolver)
      return this._resolver = $i(), Promise.resolve();
    await this._resolver.promise, await this.acquire();
  }
  release() {
    const t = this._resolver;
    this._resolver = null, t.resolve();
  }
}
async function gr(n, t, e) {
  try {
    await n.acquire(), await t(e), n.release();
  } catch (i) {
    throw n.release(), i;
  }
}
async function Mr(n, t, e) {
  if (!n.name)
    return Promise.reject(new Q("style-symbol-reference-name-missing", "Missing name in style symbol reference"));
  if (n.styleName && n.styleName === "Esri2DPointSymbolsStyle")
    return vr(n, e);
  try {
    return wr(await Ti(n, t, e), n.name, t, e);
  } catch (i) {
    return oe(i), null;
  }
}
async function vr(n, t) {
  const e = Ii.replace(/\{SymbolName\}/gi, n.name);
  try {
    const i = await je(e, t);
    return He(i.data);
  } catch (i) {
    return oe(i), null;
  }
}
async function wr(n, t, e, i) {
  const s = n.data, r = { portal: e && e.portal || Wi.getDefault(), url: Ci(n.baseUrl), origin: "portal-item" }, a = s.items.find((l) => l.name === t);
  if (!a)
    throw new Q("symbolstyleutils:symbol-name-not-found", `The symbol name '${t}' could not be found`, { symbolName: t });
  let o = Ei(Ri(a, "cimRef"), r);
  xs() && (o = ys(o));
  try {
    const l = await je(o, i);
    return He(l.data);
  } catch (l) {
    return oe(l), null;
  }
}
const Ze = async (n, t, e) => new ds(await _s(n.data, t, e), n.data, n.rendererKey, n.maxVVSize), X = async (n, t, e, i) => {
  if (!n)
    return null;
  if (n.type === "cim")
    return Ze(n, t, e);
  if (n.type === "web-style") {
    const s = { type: "cim", data: await Mr(n, null, i), rendererKey: n.rendererKey, maxVVSize: n.maxVVSize };
    return Ze(s, t, e);
  }
  return n;
};
function Wt(n) {
  if (!n)
    return null;
  const { type: t, cim: e, url: i, materialHash: s } = n, r = { cim: e, type: t, mosaicHash: s, url: i, size: null, dashTemplate: null, path: null, text: null, fontName: null };
  switch (t) {
    case "marker":
      r.size = n.size, r.path = n.path;
      break;
    case "line":
      r.dashTemplate = n.dashTemplate;
      break;
    case "text":
      r.text = n.text, r.fontName = n.fontName;
  }
  return r;
}
const R = ct.getLogger("geoscene.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"), Ne = new Array(), _e = { isOutline: !1, isOutlinedFill: !1, placement: null, stride: { fill: "default" }, vvFlags: 0 }, br = { ...ge, hash: JSON.stringify(ge), materialKey: le(P.MARKER, _e) }, Sr = { ...Me, hash: JSON.stringify(Me), materialKey: le(P.LINE, _e) }, Lr = { ...ve, hash: JSON.stringify(ve), materialKey: le(P.FILL, _e) };
function Z(n, t) {
  const e = n.length;
  return n.push(null), t.then((i) => n[e] = i), n;
}
function _t(n) {
  return !!(1 & n);
}
function Pr(n) {
  return n.name === "worker:port-closed";
}
let qr = class {
  constructor(t, e) {
    this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = /* @__PURE__ */ new Map(), this._symbolToTemplate = /* @__PURE__ */ new Map(), this._fetchQueue = [], this._idToResolver = /* @__PURE__ */ new Map(), this._cimTemplateCache = /* @__PURE__ */ new Map(), this._cimAnalyses = [], this._lock = new yr(), this._fetchResource = t, this._tileInfo = e;
  }
  get _markerError() {
    return this._errorTemplates.marker[0];
  }
  get _fillError() {
    return this._errorTemplates.fill[0];
  }
  get _lineError() {
    return this._errorTemplates.line[0];
  }
  get _textError() {
    return this._errorTemplates.line[0];
  }
  createTemplateGroup(t, e) {
    this._initErrorTemplates();
    const i = t.hash;
    if (this._symbolToTemplate.has(i))
      return this._symbolToTemplate.get(i);
    const s = new Array();
    e && this._createMeshTemplates(s, e, !0), this._createMeshTemplates(s, t, !1);
    const r = this._createGroupId(t.type === "expanded-cim" && zr(t));
    return this._idToTemplateGroup.set(r, s), this._symbolToTemplate.set(i, r), r;
  }
  getTemplateGroup(t) {
    return this._idToTemplateGroup.has(t) ? this._idToTemplateGroup.get(t) : Ne;
  }
  getDynamicTemplateGroup(t) {
    return this._idToTemplateGroup.has(t) ? (_t(t) || R.error("mapview-template-store", `Id ${t} does not refer to a dynamic template`), this._idToTemplateGroup.get(t)) : Ne;
  }
  getMosaicItem(t, e) {
    const i = this._createTemplateId(), s = new Promise((r) => this._idToResolver.set(i, r));
    return this._fetchQueue.push({ symbol: t, id: i, glyphIds: e }), s;
  }
  finalize(t) {
    return this._fetchQueue.length || this._lock.isHeld() ? gr(this._lock, this._fetchAllQueuedResources.bind(this), t) : Promise.resolve();
  }
  _initErrorTemplates() {
    this._errorTemplates || (this._errorTemplates = { fill: this._createMeshTemplates([], Lr, !1), marker: this._createMeshTemplates([], br, !1), line: this._createMeshTemplates([], Sr, !1) });
  }
  _fetchAllQueuedResources(t) {
    if (!this._fetchQueue.length)
      return Promise.resolve();
    const e = this._fetchQueue, i = this._cimAnalyses;
    return this._fetchQueue = [], this._cimAnalyses = [], Promise.all(i).then(() => this._fetchResource(e, t).then((s) => {
      for (const { id: r, mosaicItem: a } of s)
        this._idToResolver.get(r)(a), this._idToResolver.delete(r);
    })).catch((s) => {
      Ai(s) ? this._fetchQueue = this._fetchQueue.concat(e) : Pr(s) || R.error(new Q("mapview-template-store", "Unable to fetch requested texture resources", s));
    });
  }
  _createGroupId(t) {
    return this._idCounter++ << 1 | (t ? 1 : 0);
  }
  _createTemplateId() {
    return this._templateIdCounter++;
  }
  async _createSMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return B(e, R) ? ft.fromSimpleMarker(t, e) : this._markerError;
  }
  async _createPMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return B(e, R) ? ft.fromPictureMarker(t, e) : this._markerError;
  }
  async _createSFS(t, e) {
    const { spriteMosaicItem: i } = await this.getMosaicItem(t);
    return B(i, R) ? Gt.fromSimpleFill(t, i, e) : this._fillError;
  }
  async _createPFS(t, e) {
    const { spriteMosaicItem: i } = await this.getMosaicItem(t);
    return B(i, R) ? Gt.fromPictureFill(t, i, e) : this._fillError;
  }
  async _createSLS(t, e) {
    const { spriteMosaicItem: i } = await this.getMosaicItem(t);
    return B(i, R) ? te.fromSimpleLine(t, i) : this._lineError;
  }
  async _createLMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return B(e, R) ? ft.fromLineSymbolMarker(t, e) : this._markerError;
  }
  async _createTS(t) {
    const { glyphMosaicItems: e } = await this.getMosaicItem(t);
    return jt.fromText(t, e);
  }
  async _createCIMText(t) {
    const { glyphMosaicItems: e } = await this.getMosaicItem(Wt(t), pi(t.text));
    return B(e, R) ? jt.fromCIMText(t, e, this._tileInfo) : this._textError;
  }
  async _createCIMFill(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(Wt(t));
    return B(e, R) ? Gt.fromCIMFill(t, e, this._tileInfo) : this._fillError;
  }
  async _createCIMLine(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(Wt(t));
    return B(e, R) ? te.fromCIMLine(t, e, this._tileInfo) : this._lineError;
  }
  async _createCIMMarker(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(Wt(t));
    return B(e, R) ? ft.fromCIMMarker(t, e, this._tileInfo) : this._markerError;
  }
  async _createCIM(t) {
    const e = t.templateHash;
    if (this._cimTemplateCache.has(e))
      return this._cimTemplateCache.get(e);
    let i;
    switch (t.type) {
      case "marker":
        i = await this._createCIMMarker(t);
        break;
      case "line":
        i = await this._createCIMLine(t);
        break;
      case "fill":
        i = await this._createCIMFill(t);
        break;
      case "text":
        i = await this._createCIMText(t);
    }
    return this._cimTemplateCache.set(e, i), i;
  }
  async _createDynamicCIM(t) {
    const e = t.templateHash;
    if (this._cimTemplateCache.has(e))
      return this._cimTemplateCache.get(e);
    let i;
    switch (t.type) {
      case "marker":
        i = mr.fromCIMMarker(t, this._tileInfo);
        break;
      case "line":
        i = de.fromCIMLine(t, this._tileInfo);
        break;
      case "fill":
        i = ur.fromCIMFill(t, this._tileInfo);
        break;
      case "text":
        i = xr.fromCIMText(t, this._tileInfo);
    }
    return this._cimTemplateCache.set(e, i), i;
  }
  _createPrimitiveMeshTemplates(t, e, i) {
    switch (e.type) {
      case "esriSMS":
        return Z(t, this._createSMS(e));
      case "esriPMS":
        return Z(t, this._createPMS(e));
      case "esriSFS":
        return Z(t, this._createSFS(e, i));
      case "line-marker":
        return Z(t, this._createLMS(e));
      case "esriPFS":
        return Z(t, this._createPFS(e, i));
      case "esriSLS":
        return Z(t, this._createSLS(e, !1));
      case "esriTS":
        return Z(t, this._createTS(e));
      default:
        return R.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), t;
    }
  }
  _createMeshTemplates(t, e, i) {
    if (e.type.indexOf("3d") !== -1)
      return R.error("3D symbols are not supported with MapView"), t;
    if (e.type === "expanded-cim") {
      for (const s of e.layers)
        typeof s.materialHash == "function" ? Z(t, this._createDynamicCIM(s)) : Z(t, this._createCIM(s));
      return t;
    }
    if (e.type === "composite-symbol") {
      for (const s of e.layers)
        this._createPrimitiveMeshTemplates(t, s, i);
      return t;
    }
    return e.type === "cim" || e.type === "label" || e.type === "web-style" ? t : this._createPrimitiveMeshTemplates(t, e, i);
  }
};
const zr = (n) => {
  if (!n.layers)
    return !1;
  for (const t of n.layers)
    if (typeof t.materialHash == "function")
      return !0;
  return !1;
};
let Jr = class {
  constructor(t, e, i) {
    this._loadPromise = es(), this._geometryType = t, this._idField = e, this._templateStore = i;
  }
  update(t, e) {
    F(t.mesh.labels) && (this._labelTemplates = this._createLabelTemplates(t.mesh.labels, e)), this._schema = t;
  }
  _createLabelTemplates(t, e) {
    const i = /* @__PURE__ */ new Map();
    if (t.type === "simple") {
      for (const s of t.classes) {
        const r = Et.fromLabelClass(s, e);
        i.set(s.index, r);
      }
      return i;
    }
    for (const s in t.classes) {
      const r = t.classes[s];
      for (const a of r) {
        const o = Et.fromLabelClass(a, e);
        i.set(a.index, o);
      }
    }
    return i;
  }
  get templates() {
    return this._templateStore;
  }
  async analyze(t, e, i, s, r, a, o) {
    if (we(o))
      return;
    let l;
    i.type === "dictionary" && (l = await i.analyze(this._idField, t.copy(), e, r, a, o));
    let h = 0;
    for (; t.next(); ) {
      let u;
      if (u = l ? l[h++] : F(s) && Hi(t.getDisplayId()) && t.readAttribute("cluster_count") !== 1 ? s.match(this._idField, t, this._geometryType, r, a) : i.match(this._idField, t, this._geometryType, r, a), t.setGroupId(u), _t(u)) {
        const c = this._templateStore.getDynamicTemplateGroup(u);
        for (const d of c)
          d && d.analyze && d.analyze(this._templateStore, t, r, a);
      }
    }
    return await this._loadPromise, this._templateStore.finalize(o);
  }
  async analyzeGraphics(t, e, i, s, r, a) {
    if (we(a))
      return;
    const o = t.getCursor();
    for (i && await i.analyze(this._idField, o.copy(), e, s, r, a); o.next(); ) {
      let l = o.getGroupId();
      if (l != null && l !== -1 || (l = i.match(this._idField, o, o.geometryType, s, r), o.setGroupId(l)), _t(l)) {
        const h = this._templateStore.getDynamicTemplateGroup(l);
        for (const u of h)
          u && u.analyze && u.analyze(this._templateStore, o, s, r);
      }
      o.setGroupId(l);
    }
    return await this._loadPromise, this._templateStore.finalize(a);
  }
  writeGraphic(t, e, i, s) {
    const r = e.getGroupId(), a = e.getDisplayId(), o = this._templateStore.getTemplateGroup(r);
    if (t.featureStart(e.insertAfter, 0), a != null) {
      if (_t(r))
        for (const l of o)
          l && l.bindFeature(e, null, null);
      if (o) {
        for (const l of o)
          l && l.write(t, e, i, s);
        t.featureEnd();
      }
    }
  }
  writeCursor(t, e, i, s, r, a, o) {
    const l = e.getGroupId(), h = e.getDisplayId(), u = this._templateStore.getTemplateGroup(l), c = this._schema.mesh.sortKey;
    let d = 0;
    if (F(c) && (d = c.fieldIndex != null ? e.getComputedNumericAtIndex(c.fieldIndex) : c.field != null ? e.readAttribute(c.field) : e.readAttribute(this._idField), d *= c.order === "asc" ? 1 : -1), t.featureStart(0, d == null || isNaN(d) ? 0 : d), h != null && u) {
      if (_t(l))
        for (const _ of u)
          _.bindFeature(e, i, s);
      for (const _ of u)
        _.write(t, e, r, o);
      if (F(a) && t.hasRecords) {
        const _ = a && this._findLabelRef(u);
        this._writeLabels(t, e, a, _, r, o);
      }
      t.featureEnd();
    }
  }
  _findLabelRef(t) {
    for (const e of t)
      if (e instanceof ft)
        return e;
    return null;
  }
  _writeLabels(t, e, i, s, r, a) {
    for (const o of i)
      if (F(o) && o) {
        const { glyphs: l, rtl: h, index: u } = o, c = this._labelTemplates.get(u);
        c.setZoomLevel(r), c.bindReferenceTemplate(s), c.bindTextInfo(l, h), c.write(t, e, null, a);
      }
  }
};
const ee = ct.getLogger("geoscene/views/2d/engine/webgl/util/Matcher");
async function $r(n, t, e, i) {
  switch (n.type) {
    case "simple":
      return J.fromBasicRenderer(n, t, e, i);
    case "map":
      return xe.fromUVRenderer(n, t, e, i);
    case "interval":
      return pe.fromCBRenderer(n, t, e, i);
    case "dictionary":
      return ye.fromDictionaryRenderer(n, t, e, i);
    case "subtype":
      return me.fromSubtypes(n, t, e, i);
  }
}
class J {
  constructor() {
    this.type = "feature", this._defaultResult = null;
  }
  static async fromBasicRenderer(t, e, i, s) {
    const r = new J();
    if (t.symbol) {
      const a = await X(t.symbol, i, s), o = e.createTemplateGroup(a, null);
      r.setDefault(o);
    }
    return r;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(t) {
    this._defaultResult = t;
  }
  match(t, e, i, s, r) {
    return this.getDefault();
  }
  async analyze(t, e, i, s, r, a) {
    return null;
  }
}
class me extends J {
  constructor(t, e) {
    super(), this._subMatchers = t, this._subtypeField = e;
  }
  static async fromSubtypes(t, e, i, s) {
    const r = /* @__PURE__ */ new Map(), a = [];
    for (const o in t.renderers) {
      const l = parseInt(o, 10), h = $r(t.renderers[o], e, i, s).then((u) => r.set(l, u));
      a.push(h);
    }
    return await Promise.all(a), new me(r, t.subtypeField);
  }
  match(t, e, i, s, r) {
    const a = e.readAttribute(this._subtypeField), o = this._subMatchers.get(a);
    return o ? o.match(t, e, i, s, r) : null;
  }
}
class pe extends J {
  constructor(t, e, i, s) {
    super(), this.type = "interval", this._intervals = [], this._isMaxInclusive = e, this._fieldIndex = s, this._field = t, this._normalizationInfo = i;
  }
  static async fromCBRenderer(t, e, i, s) {
    const { isMaxInclusive: r, normalizationField: a, normalizationTotal: o, normalizationType: l } = t, h = t.field, u = new pe(h, r, { normalizationField: a, normalizationTotal: o, normalizationType: l }, t.fieldIndex), c = await X(t.backgroundFillSymbol, i, s);
    await Promise.all(t.intervals.map(async (_) => {
      const m = await X(_.symbol, i, s), f = await e.createTemplateGroup(m, c), p = { min: _.min, max: _.max };
      u.add(p, f);
    }));
    const d = await X(t.defaultSymbol, i, s);
    if (d) {
      const _ = await e.createTemplateGroup(d, c);
      u.setDefault(_);
    }
    return u;
  }
  add(t, e) {
    this._intervals.push({ interval: t, result: e }), this._intervals.sort((i, s) => i.interval.min - s.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  match(t, e, i, s, r) {
    if (this._fieldIndex == null && !this._field)
      return this.getDefault();
    const a = this._fieldIndex != null ? e.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(e);
    if (!a && (a == null || isNaN(a)))
      return this.getDefault();
    for (let o = 0; o < this._intervals.length; o++) {
      const { interval: l, result: h } = this._intervals[o], u = a >= l.min, c = this._isMaxInclusive ? a <= l.max : a < l.max;
      if (u && c)
        return h;
    }
    return this.getDefault();
  }
  _needsNormalization() {
    const t = this._normalizationInfo;
    return t && (t.normalizationField || t.normalizationTotal || t.normalizationType);
  }
  _getValueFromField(t) {
    const e = t.readAttribute(this._field);
    if (!this._needsNormalization() || e == null)
      return e;
    const { normalizationField: i, normalizationTotal: s, normalizationType: r } = this._normalizationInfo, a = !!i && t.readAttribute(i);
    if (r)
      switch (r) {
        case "esriNormalizeByField":
          return a ? e / a : void 0;
        case "esriNormalizeByLog":
          return Math.log(e) * Math.LOG10E;
        case "esriNormalizeByPercentOfTotal":
          return e / s * 100;
        default:
          return void ee.error(`Found unknown normalization type: ${r}`);
      }
    else
      ee.error("Normalization is required, but no type was set!");
  }
}
class xe extends J {
  constructor(t, e, i) {
    super(), this.type = "map", this._nullResult = null, this._resultsMap = /* @__PURE__ */ new Map(), this._fieldsIndex = i, this._fields = t, this._seperator = e || "";
  }
  static async fromUVRenderer(t, e, i, s) {
    const r = t.fieldDelimiter, a = [t.field];
    t.field2 && a.push(t.field2), t.field3 && a.push(t.field3);
    const o = await X(t.backgroundFillSymbol, i, s), l = new xe(a, r, t.fieldIndex);
    await Promise.all(t.map.map(async (u) => {
      const c = await X(u.symbol, i, s), d = await e.createTemplateGroup(c, o);
      u.value === "<Null>" ? l.setNullResult(d) : l.add(u.value, d);
    }));
    const h = await X(t.defaultSymbol, i, s);
    if (h) {
      const u = await e.createTemplateGroup(h, o);
      l.setDefault(u);
    }
    return l;
  }
  setNullResult(t) {
    this._nullResult = t;
  }
  add(t, e) {
    this._resultsMap.set(t.toString(), e);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  match(t, e, i, s, r) {
    if (this._fieldsIndex == null && !this._fields)
      return this.getDefault();
    const a = this._fieldsIndex != null ? e.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(e);
    if (this._nullResult !== null && (a == null || a === "" || a === "<Null>"))
      return this._nullResult;
    if (!a && a == null)
      return this.getDefault();
    const o = a.toString();
    return this._resultsMap.has(o) ? this._resultsMap.get(o) : this.getDefault();
  }
  _getValueFromFields(t) {
    const e = [];
    for (const i of this._fields) {
      const s = t.readAttribute(i);
      s == null || s === "" ? e.push("<Null>") : e.push(s);
    }
    return e.join(this._seperator);
  }
}
async function Tr(n, t) {
  const e = n || 1;
  if (typeof e == "number")
    return (s, r, a) => e;
  const i = await Bi(e, t.spatialReference, t.fields);
  return (s, r, a) => ms(i, s, { $view: a }, t.geometryType, r) || 1;
}
let Kt;
async function Ir() {
  return Kt || (Kt = import("./schemaUtils-U3wpMwz7.js").then((n) => n.a)), Kt;
}
class ye extends J {
  constructor(t, e, i, s, r, a) {
    super(), this.type = "dictionary", this._groupIdCache = new Fi(100), this._loader = t, this._fieldMap = t.fieldMap, this._symbolFields = t.getSymbolFields(), this._templates = e, this._info = i, this._scaleFn = s, this._schemaUtilsModule = r, this._symbolOptions = a;
  }
  static async fromDictionaryRenderer(t, e, i, s) {
    const [{ DictionaryLoader: r }, a] = await Promise.all([import("./index-Ek1MTSEY.js").then((h) => h.kG), Ir()]), o = new r(t.url, t.config, t.fieldMap);
    await o.fetchResources({ spatialReference: i.spatialReference, fields: i.fields });
    const l = await Tr(t.scaleExpression, i);
    return new ye(o, e, i, l, a, t.symbolOptions);
  }
  async _analyzeFeature(t, e, i, s, r) {
    const a = t.readLegacyFeature(), o = this._scaleFn(a, i, s), l = this._attributeHash(a) + "-" + o, h = this._groupIdCache.get(l);
    if (h)
      return h;
    const u = { ...s, spatialReference: this._info.spatialReference, abortOptions: r, fields: this._info.fields }, c = await this._loader.getSymbolAsync(a, u), d = this._schemaUtilsModule.createSymbolSchema(c, this._symbolOptions), _ = X(d, this._info, e, r).then((m) => {
      if (m.type !== "expanded-cim")
        return ee.error(new Q("mapview-bad-type", `Found unexpected type ${m.type} in dictionary response`)), null;
      m.hash += "-" + o;
      for (const f of m.layers)
        f.scaleFactor = o, f.templateHash += "-" + o;
      return this._templates.createTemplateGroup(m, null);
    });
    return this._groupIdCache.put(l, _, 1), _;
  }
  async analyze(t, e, i, s, r, a) {
    const o = e.getCursor(), l = [];
    for (; o.next(); )
      l.push(this._analyzeFeature(o, i, s, r, a));
    return Promise.all(l);
  }
  match(t, e, i, s, r) {
    return null;
  }
  _attributeHash(t) {
    let e = "";
    for (const i of this._symbolFields) {
      const s = this._fieldMap[i];
      s && (e += t.attributes[s] + "-");
    }
    return e;
  }
}
export {
  Xr as E,
  Jr as a,
  X as b,
  B as c,
  Lt as e,
  qr as j,
  $r as l,
  pi as t
};
