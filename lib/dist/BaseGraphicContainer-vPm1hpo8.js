import { dh as b, di as _e, dm as mt, jl as H, a5 as ve, a8 as P, a9 as be, a7 as k, a6 as ne, dJ as Qe, jm as Ae, jn as yt, jo as G, r as F, jp as Re, ac as gt, w as xt, aX as et, jq as _t, l as U, fC as vt, jr as bt, fO as Dt, fP as Ct, fS as Bt, js as he, b1 as tt, fk as wt, jt as st, gM as Tt, ju as Ft, fh as N, f6 as It, e as v, d as D, a as it, Z as Rt, aw as Mt, fx as St, bc as _, jv as Lt, jw as $t, g as Z, m as At, bG as ze, jx as zt, jy as Ot, jz as Gt, jA as jt, ay as Pt, dr as Oe, ds as Ut, dq as Vt, dt as kt, du as Kt, hU as Et, dv as qt } from "./index-j1oaLRcp.js";
import { W as Ge, j as Ht, Y as Nt, n as Zt } from "./CIMSymbolHelper-KLEKDisI.js";
import { f as Xt, g as Wt } from "./projectionSupport-eTH1ob6-.js";
import { R as Yt } from "./enums-YM9SAu8u.js";
import { q as Me, k as te, t as De, n as Jt, r as Qt, H as oe, I as de, E as R, z as es, p as ts, d as ss } from "./Utils-Mkp4Julu.js";
import { f as rt, c as ae } from "./VertexArrayObject-WfBtioi6.js";
import { F as Ce, R as je, E as is, C as nt, I as rs } from "./enums-n72NRQQZ.js";
import { c as ns, i as os, o as as } from "./FeatureContainer-Yy5F93tk.js";
import { e as se, l as ls, j as hs, a as ds, b as cs, E as us } from "./Matcher-lReemcRu.js";
import { L as fs, h as ps, l as ms } from "./schemaUtils-NQXxAz6-.js";
import { d as ys, j as gs, r as xs, M as _s } from "./ComputedAttributeStorage-4bJ5RN5o.js";
import { O as vs, U as ce } from "./quantizationUtils-p-hCoL_j.js";
import "./MaterialKey-tb9URCR8.js";
import { t as bs } from "./vec3f32-iv6FBVVh.js";
import { a as Ds } from "./Container-0QnIUm3K.js";
function Cs(o) {
  if (!o)
    return null;
  let e = null;
  const t = o.spatialReference, s = _e(t);
  if (!s)
    return "toJSON" in o ? o.toJSON() : o;
  const i = mt(t) ? 102100 : 4326, r = H[i].maxX, n = H[i].minX, a = H[i].plus180Line, h = H[i].minus180Line;
  let d;
  const l = "toJSON" in o ? o.toJSON() : o;
  if (ve(l))
    d = Pe(l, r, n);
  else if (P(l))
    l.points = l.points.map((c) => Pe(c, r, n)), d = l;
  else if (be(l))
    d = ws(l, s);
  else if (k(l) || ne(l)) {
    const c = Is;
    Qe(c, l);
    const u = { xmin: c[0], ymin: c[1], xmax: c[2], ymax: c[3] }, f = G(u.xmin, n) * (2 * r), p = f === 0 ? l : Bs(l, f);
    u.xmin += f, u.xmax += f, Ae(u, a) && u.xmax !== r || Ae(u, h) && u.xmin !== n ? e = p : d = p;
  } else
    d = l;
  return e !== null ? new Fs().cut(e, r) : d;
}
function Bs(o, e) {
  const t = yt(o);
  for (const s of t)
    for (const i of s)
      i[0] += e;
  return o;
}
function ws(o, e) {
  if (!e)
    return o;
  const t = Ts(o, e).map((s) => s.extent);
  return t.length < 2 ? t[0] || o : t.length > 2 ? (o.xmin = e.valid[0], o.xmax = e.valid[1], o) : { rings: t.map((s) => [[s.xmin, s.ymin], [s.xmin, s.ymax], [s.xmax, s.ymax], [s.xmax, s.ymin], [s.xmin, s.ymin]]) };
}
function Pe(o, e, t) {
  if (Array.isArray(o)) {
    const s = o[0];
    if (s > e) {
      const i = G(s, e);
      o[0] = s + i * (-2 * e);
    } else if (s < t) {
      const i = G(s, t);
      o[0] = s + i * (-2 * t);
    }
  } else {
    const s = o.x;
    if (s > e) {
      const i = G(s, e);
      o.x += i * (-2 * e);
    } else if (s < t) {
      const i = G(s, t);
      o.x += i * (-2 * t);
    }
  }
  return o;
}
function Ts(o, e) {
  const t = [], { ymin: s, ymax: i } = o, r = o.xmax - o.xmin, n = o.xmin, a = o.xmax;
  let h;
  const [d, l] = e.valid;
  h = Ue(o.xmin, e);
  const c = h.x, u = h.frameId;
  h = Ue(o.xmax, e);
  const f = h.x, p = h.frameId, y = c === f && r > 0;
  if (r > 2 * l) {
    const x = { xmin: n < a ? c : f, ymin: s, xmax: l, ymax: i }, g = { xmin: d, ymin: s, xmax: n < a ? f : c, ymax: i }, I = { xmin: 0, ymin: s, xmax: l, ymax: i }, w = { xmin: d, ymin: s, xmax: 0, ymax: i }, K = [], E = [];
    X(x, I) && K.push(u), X(x, w) && E.push(u), X(g, I) && K.push(p), X(g, w) && E.push(p);
    for (let q = u + 1; q < p; q++)
      K.push(q), E.push(q);
    t.push({ extent: x, frameIds: [u] }, { extent: g, frameIds: [p] }, { extent: I, frameIds: K }, { extent: w, frameIds: E });
  } else
    c > f || y ? t.push({ extent: { xmin: c, ymin: s, xmax: l, ymax: i }, frameIds: [u] }, { extent: { xmin: d, ymin: s, xmax: f, ymax: i }, frameIds: [p] }) : t.push({ extent: { xmin: c, ymin: s, xmax: f, ymax: i }, frameIds: [u] });
  return t;
}
function Ue(o, e) {
  const [t, s] = e.valid, i = 2 * s;
  let r, n = 0;
  return o > s ? (r = Math.ceil(Math.abs(o - s) / i), o -= r * i, n = r) : o < t && (r = Math.ceil(Math.abs(o - t) / i), o += r * i, n = -r), { x: o, frameId: n };
}
function X(o, e) {
  const { xmin: t, ymin: s, xmax: i, ymax: r } = e;
  return W(o, t, s) && W(o, t, r) && W(o, i, r) && W(o, i, s);
}
function W(o, e, t) {
  return e >= o.xmin && e <= o.xmax && t >= o.ymin && t <= o.ymax;
}
let Fs = class {
  cut(e, t) {
    let s;
    if (e.rings)
      this.closed = !0, s = e.rings, this.minPts = 4;
    else {
      if (!e.paths)
        return null;
      this.closed = !1, s = e.paths, this.minPts = 2;
    }
    const i = s.length, r = -2 * t;
    for (let n = 0; n < i; n++) {
      const a = s[n];
      if (a && a.length >= this.minPts) {
        const h = [];
        for (const d of a)
          h.push([d[0] + r, d[1]]);
        s.push(h);
      }
    }
    return this.closed ? e.rings = s : e.paths = s, e;
  }
};
const Is = b(), m = -1;
let Ve = class {
  constructor() {
    this._dirties = [{ vertexFrom: m, vertexCount: m, indexFrom: m, indexCount: m, allDirty: !1 }, { vertexFrom: m, vertexCount: m, indexFrom: m, indexCount: m, allDirty: !1 }, { vertexFrom: m, vertexCount: m, indexFrom: m, indexCount: m, allDirty: !1 }, { vertexFrom: m, vertexCount: m, indexFrom: m, indexCount: m, allDirty: !1 }, { vertexFrom: m, vertexCount: m, indexFrom: m, indexCount: m, allDirty: !1 }];
  }
  hasDirty() {
    return this._dirties.some((e) => e.indexCount !== m || e.allDirty);
  }
  markAllClean() {
    for (const e of this._dirties)
      e.indexFrom = m, e.indexCount = m, e.vertexFrom = m, e.vertexCount = m, e.allDirty = !1;
  }
  markAllDirty() {
    for (const e of this._dirties)
      e.allDirty = !0;
  }
  forEach(e) {
    for (let t = 0; t < this._dirties.length; ++t) {
      const { indexCount: s, indexFrom: i, vertexCount: r, vertexFrom: n, allDirty: a } = this._dirties[t], h = {};
      let d, l = !1;
      (a || n !== m && r > 0) && (h.geometry = { count: r, from: n, allDirty: a }, l = !0), (a || i !== m && s > 0) && (d = { count: s, from: i, allDirty: a }, l = !0), l && e({ indices: d, vertices: h }, t);
    }
  }
  markDirtyIndices(e, t, s) {
    const i = this._dirties[e], r = t, n = s;
    if (!i.allDirty)
      if (i.indexCount !== m) {
        const a = Math.min(i.indexFrom, r), h = Math.max(i.indexFrom + i.indexCount, r + n) - a;
        i.indexFrom = a, i.indexCount = h;
      } else
        i.indexFrom = r, i.indexCount = n;
  }
  markDirtyVertices(e, t, s, i) {
    const r = this._dirties[e], n = s, a = i;
    if (!r.allDirty)
      if (r.vertexCount !== m) {
        const h = Math.min(r.vertexFrom, n), d = Math.max(r.vertexFrom + r.vertexCount, n + a) - h;
        r.vertexFrom = h, r.vertexCount = d;
      } else
        r.vertexFrom = n, r.vertexCount = a;
  }
}, Rs = class {
  constructor(e) {
    this._largestRange = null, this._parent = e, this._updateLargestRange();
  }
  get largestRange() {
    return this._largestRange;
  }
  rangeCreated(e) {
    (!this._largestRange || e.count > this._largestRange.count) && (this._largestRange = e);
  }
  rangeResized(e, t) {
    e === this._largestRange ? e.count < t && this._updateLargestRange() : (!this._largestRange || e.count > this._largestRange.count) && (this._largestRange = e);
  }
  findBestRange(e) {
    let t = this._parent._freeHead, s = null;
    for (; t !== null; )
      t.count >= e && (!s || t.count - e < s.count - e) && (s = t), t = t.next;
    return s;
  }
  findAdjacentRanges(e, t) {
    let s = !0, i = !1, r = null, n = this._parent._freeHead;
    for (; s && !i; ) {
      const a = r !== null ? r.from + r.count : 0, h = n !== null ? n.from : this._parent._size;
      e >= a && e + t <= h ? (s = !1, i = !0) : n !== null ? (r = n, n = n.next) : s = !1;
    }
    return [r, n];
  }
  _updateLargestRange() {
    let e = null, t = this._parent._freeHead;
    for (; t !== null; )
      (!e || t.count > e.count) && (e = t), t = t.next;
    this._largestRange = e;
  }
}, Y = class $ {
  constructor(e, t) {
    this._allocated = 0, this._size = e, this._freeHead = e > 0 ? { from: 0, count: e, prev: null, next: null } : null, this._bookKeeper = t || new Rs(this), this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
  }
  allocate(e) {
    const t = this._bookKeeper.findBestRange(e);
    if (t === null)
      return -1;
    const s = t.from, i = t.count;
    if (t.from += e, t.count -= e, this._bookKeeper.rangeResized(t, s, i), this._allocated += e, t.count === 0) {
      const r = t.prev !== null ? this._freeHead : t.next;
      $._removeRange(t), this._freeHead = r;
    }
    return s;
  }
  free(e, t) {
    const [s, i] = this._bookKeeper.findAdjacentRanges(e, t), r = { from: e, count: t, prev: s, next: i };
    if (s !== null && (s.next = r), i !== null && (i.prev = r), this._bookKeeper.rangeCreated(r), this._allocated -= t, i !== null && r.from + r.count === i.from) {
      const n = r.from, a = r.count;
      $._fuse(r, i), $._removeRange(i), this._bookKeeper.rangeResized(r, n, a), this._bookKeeper.rangeResized(i, void 0, 0);
    }
    if (s !== null && s.from + s.count === r.from) {
      const n = s.from, a = s.count;
      $._fuse(s, r), $._removeRange(r), this._bookKeeper.rangeResized(s, n, a), this._bookKeeper.rangeResized(r, void 0, 0);
    }
    this._freeHead = r.prev !== null ? this._freeHead : r;
  }
  get fragmentation() {
    const e = this._size - this._allocated;
    return e === 0 ? 0 : 1 - this._bookKeeper.largestRange.count / e;
  }
  static _removeRange(e) {
    e.prev !== null ? e.next !== null ? (e.prev.next = e.next, e.next.prev = e.prev) : e.prev.next = null : e.next !== null && (e.next.prev = null);
  }
  static _fuse(e, t) {
    e.count += t.count, e.next = t.next, t.from += t.count, t.count = 0, t.next !== null && (t.next.prev = e);
  }
};
const j = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];
function Ms(o) {
  const e = o.getStrides(), t = {};
  for (let s = 0; s < e.length; s++)
    t[j[s]] = e[s];
  return t;
}
const ke = 0.5;
let Ke = class ot {
  constructor(e, t, s, i) {
    this._strides = e, this._displayList = t, this._freeListsAndStorage = {}, this._dirtyMap = null, this._dirtyMap = s;
    for (const r in e) {
      this._freeListsAndStorage[r] = { vtxFreeList: i ? new Y(i) : null, idxFreeList: i ? new Y(i) : null, vertexBuffers: {}, indexBuffer: i ? new Uint32Array(i) : null };
      for (const n in e[r])
        this._freeListsAndStorage[r].vertexBuffers[n] = { data: i ? Me(i, e[r][n]) : null, stride: e[r][n] };
    }
  }
  static fromTileData(e, t) {
    const s = Ms(e), i = [0, 0, 0, 0, 0], r = [0, 0, 0, 0, 0], n = e.tileDisplayData.displayObjects;
    for (const h of n)
      for (const d of h.displayRecords)
        i[d.geometryType] = Math.max(i[d.geometryType], d.vertexFrom + d.vertexCount), r[d.geometryType] = Math.max(r[d.geometryType], d.indexFrom + d.indexCount);
    const a = new ot(s, e.tileDisplayData.displayList, t, null);
    for (let h = 0; h < e.tileBufferData.geometries.length; ++h) {
      const d = i[h], l = r[h], c = e.tileBufferData.geometries[h], u = j[h], f = a._storageFor(u), p = e.tileBufferData.geometries[h].indexBuffer;
      let y;
      f.indexBuffer = p, f.idxFreeList = new Y(p.length), f.idxFreeList.allocate(l);
      for (const x in c.vertexBuffer) {
        const g = e.tileBufferData.geometries[h].vertexBuffer[x];
        f.vertexBuffers[x].data = g.data, f.vertexBuffers[x].stride = g.stride;
        const I = te(g.stride), w = g.data.length * I / g.stride;
        y || (y = w);
      }
      f.vtxFreeList = new Y(y), f.vtxFreeList.allocate(d);
    }
    return a;
  }
  delete(e) {
    const t = j[e.geometryType];
    this._freeVertices(t, e.vertexFrom, e.vertexCount), this._freeIndices(t, e.indexFrom, e.indexCount), this._displayList.removeFromList(e), e.vertexFrom = void 0, e.indexFrom = void 0;
  }
  setMeshData(e, t, s, i, r) {
    const n = j[e.geometryType];
    let a, h;
    e.meshData = null, e.vertexFrom === void 0 ? (h = t.vertexCount, a = this._allocateVertices(n, h)) : t.vertexCount > e.vertexCount ? (this._freeVertices(n, e.vertexFrom, e.vertexCount), h = t.vertexCount, a = this._allocateVertices(n, h)) : t.vertexCount === e.vertexCount ? (a = e.vertexFrom, h = e.vertexCount) : (this._freeVertices(n, e.vertexFrom + t.vertexCount, e.vertexCount - t.vertexCount), a = e.vertexFrom, h = t.vertexCount);
    let d, l, c, u = !0;
    if (e.indexFrom === void 0 ? (d = r, c = t.indexCount, l = this._allocateIndices(n, c)) : t.indexCount > e.indexCount ? (d = this._displayList.removeFromList(e), this._freeIndices(n, e.indexFrom, e.indexCount), c = t.indexCount, l = this._allocateIndices(n, c)) : t.indexCount === e.indexCount ? (u = !1, l = e.indexFrom, c = e.indexCount) : (d = this._displayList.removeFromList(e), this._freeIndices(n, e.indexFrom + t.indexCount, e.indexCount - t.indexCount), l = e.indexFrom, c = t.indexCount), a !== -1 && l !== -1) {
      const f = this._storageFor(n);
      if (De(a, l, f.vertexBuffers, f.indexBuffer, t, s, i), e.vertexFrom = a, e.indexFrom = l, e.vertexCount = t.vertexCount, e.indexCount = t.indexCount, this._dirtyMap) {
        this._dirtyMap.markDirtyIndices(e.geometryType, e.indexFrom, e.indexCount);
        for (const p in s)
          this._dirtyMap.markDirtyVertices(e.geometryType, p, e.vertexFrom, e.vertexCount);
      }
      return u && this._displayList.addToList(e, d), !0;
    }
    return a !== -1 && this._freeVertices(n, a, h), l !== -1 && this._freeIndices(n, l, c), e.setMeshDataFromBuffers(t, s, i), e.vertexFrom = void 0, e.vertexCount = 0, e.indexFrom = void 0, e.indexCount = 0, !1;
  }
  tryAddMeshData(e, t) {
    const s = t.vertexBuffer, i = t.indexBuffer, r = j[e.geometryType], n = this._allocateVertices(r, e.vertexCount);
    if (n === -1)
      return this._freeVertices(r, n, e.vertexCount), !1;
    const a = this._allocateIndices(r, e.indexCount);
    if (a === -1)
      return this._freeVertices(r, n, e.vertexCount), this._freeIndices(r, a, e.indexCount), !1;
    const h = this._storageFor(r);
    if (De(n, a, h.vertexBuffers, h.indexBuffer, e, s, i), e.vertexFrom = n, e.indexFrom = a, this._dirtyMap) {
      this._dirtyMap.markDirtyIndices(e.geometryType, e.indexFrom, e.indexCount);
      for (const d in s)
        this._dirtyMap.markDirtyVertices(e.geometryType, d, n, e.vertexCount);
    }
    return this._displayList.addToList(e), !0;
  }
  _allocateVertices(e, t) {
    const s = this._storageFor(e), i = s.vtxFreeList.allocate(t);
    return i === -1 || s.vtxFreeList.fragmentation > ke ? -1 : i;
  }
  _freeVertices(e, t, s) {
    this._storageFor(e).vtxFreeList.free(t, s);
  }
  _freeIndices(e, t, s) {
    this._storageFor(e).idxFreeList.free(t, s);
  }
  _allocateIndices(e, t) {
    const s = this._storageFor(e), i = s.idxFreeList.allocate(t);
    return i === -1 || s.idxFreeList.fragmentation > ke ? -1 : i;
  }
  _storageFor(e) {
    return this._freeListsAndStorage[e];
  }
  _stridesFor(e, t) {
    return this._strides[e][t];
  }
}, Ss = class {
  constructor(e) {
    this.geometryMap = Jt(() => ({ indexBuffer: ae.createIndex(e, Ce.STATIC_DRAW), vao: null }), (t, s) => ({ vertexBuffer: ae.createVertex(e, Qt[s]) }));
  }
  dispose() {
    for (let e = 0; e < 5; e++) {
      const t = this.geometryMap[e];
      if (t) {
        t.data.vao && t.data.vao.dispose(!1), t.data.indexBuffer && t.data.indexBuffer.dispose();
        for (const s in t.buffers)
          t.buffers[s] && t.buffers[s].data.vertexBuffer.dispose();
      }
    }
  }
  get(e) {
    const t = this.geometryMap[e];
    return { getVAO(s, i, r) {
      if (!t.data.vao) {
        const n = {};
        for (const a in t.buffers)
          n[a] = t.buffers[a].data.vertexBuffer;
        t.data.vao = new rt(s, r, i, n, t.data.indexBuffer);
      }
      return t.data.vao;
    } };
  }
  has(e) {
    return this.geometryMap[e] != null;
  }
  upload(e, t) {
    t.forEach((s, i) => {
      this._upload(s, i, e);
    });
  }
  _upload(e, t, s) {
    if (e.indices && (e.indices.allDirty ? this._uploadIndices(s, t) : e.indices.from != null && e.indices.count != null && this._uploadIndices(s, t, e.indices.from, e.indices.count)), e.vertices) {
      const i = e.vertices;
      for (const r in i) {
        const n = i[r];
        n.allDirty ? this._uploadVertices(s, t, r) : n.from != null && n.count != null && this._uploadVertices(s, t, r, n.from, n.count);
      }
    }
  }
  _uploadVertices(e, t, s, i, r) {
    const n = this.geometryMap[t];
    if (!n)
      return;
    const a = e.geometries[t].vertexBuffer[s];
    if (!a)
      return;
    const h = a.stride, d = a.data.buffer;
    n.buffers[s] && d.byteLength > 0 && (i != null && r != null ? n.buffers[s].data.vertexBuffer.setSubData(d, i * h, i * h, (i + r) * h) : n.buffers[s].data.vertexBuffer.setData(d));
  }
  _uploadIndices(e, t, s, i) {
    const r = this.geometryMap[t];
    if (!r)
      return;
    const n = 4, a = e.geometries[t].indexBuffer.buffer;
    r.data.indexBuffer && a.byteLength > 0 && (s != null && i != null ? r.data.indexBuffer.setSubData(a, s * n, s * n, (s + i) * n) : r.data.indexBuffer.setData(a));
  }
};
class Ls extends ns {
  constructor() {
    super(...arguments), this._data = null, this._displayList = null, this._lastCommitTime = 0, this._hasData = !1, this._invalidated = !1, this._wglBuffers = null, this._dirtyMap = new Ve();
  }
  destroy() {
    super.destroy(), this.clear();
  }
  get hasData() {
    return !!this._hasData;
  }
  get displayObjects() {
    var e;
    return (e = this._displayObjects) != null ? e : [];
  }
  getGeometry(e) {
    return this._wglBuffers && this._wglBuffers.has(e) ? this._wglBuffers.get(e) : null;
  }
  getDisplayList() {
    return this._displayList;
  }
  patch(e) {
    if (e.clear === !0)
      return this.clear(), void (this._hasData = !1);
    const t = e.addOrUpdate, s = e.remove;
    !this._data && t && t.tileDisplayData.displayObjects.length ? (t.tileDisplayData.computeDisplayList(), this._dirtyMap = new Ve(), this._dispRecStore = Ke.fromTileData(t, this._dirtyMap), this._data = t, this._dirtyMap.markAllDirty(), this._hasData = !0, e.end && this.ready()) : this._data && (t && t.tileDisplayData.displayObjects.length || s.length) ? this._doPatchData(e) : e.end && this.ready(), e.end && !this._data && this.clear(), this.requestRender(), this.emit("change");
  }
  commit(e) {
    e.time && e.time === this._lastCommitTime || (this._lastCommitTime = e.time, this.visible && this._data && (this._wglBuffers || (this._wglBuffers = new Ss(e.context)), (this._dirtyMap.hasDirty() || this._invalidated) && (this._invalidated = !1, this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap), this._displayList = this._data.tileDisplayData.displayList.clone(), this._displayObjects = this._data.tileDisplayData.displayObjects.slice(), this._dirtyMap.markAllClean())));
  }
  clear() {
    this._data = null, this._displayList = null, this._dispRecStore = null, this._wglBuffers && (this._wglBuffers.dispose(), this._wglBuffers = null);
  }
  _doPatchData(e) {
    this._invalidated = !0, this._patchData(e) || (this._dirtyMap.markAllDirty(), this._data.reshuffle(), this._dispRecStore = Ke.fromTileData(this._data, this._dirtyMap)), this.requestRender();
  }
  _patchData(e) {
    let t = !0;
    const s = e.addOrUpdate && e.addOrUpdate.tileDisplayData && e.addOrUpdate.tileDisplayData.displayObjects || [], i = (e.remove || []).slice();
    for (const r of s)
      r.insertAfter != null && i.push(r.id);
    for (const r of i) {
      const n = this._data.tileDisplayData.displayObjectRegistry.get(r);
      if (n) {
        this._data.tileDisplayData.displayList.removeFromList(n.displayRecords);
        for (const h of n.displayRecords)
          this._dispRecStore.delete(h);
        this._data.tileDisplayData.displayObjectRegistry.delete(r);
        const a = this._data.tileDisplayData.displayObjects.indexOf(n);
        this._data.tileDisplayData.displayObjects.splice(a, 1);
      }
    }
    for (const r of s) {
      let n, a = this._data.tileDisplayData.displayObjectRegistry.get(r.id);
      if (a) {
        const d = a.displayRecords;
        a.set(r), a.displayRecords = d;
        const l = a.displayRecords.length;
        for (let c = 0; c < l; ++c) {
          const u = a.displayRecords[c], f = r.displayRecords[c];
          (c >= r.displayRecords.length || u.geometryType !== f.geometryType || u.symbolLevel !== f.symbolLevel || u.zOrder !== f.zOrder || u.materialKey !== f.materialKey) && (this._dispRecStore.delete(a.displayRecords[c]), c < r.displayRecords.length && (a.displayRecords[c] = void 0));
        }
        a.displayRecords.length = r.displayRecords.length;
      } else {
        let d;
        a = r.copy(), a.displayRecords = [], this._data.tileDisplayData.displayObjectRegistry.set(r.id, a);
        const l = this._data.tileDisplayData.displayObjects;
        if (a.insertAfter != null)
          if (n = {}, a.insertAfter >= 0) {
            const c = this._data.tileDisplayData.displayObjectRegistry.get(a.insertAfter);
            c ? (d = l.indexOf(c) + 1, d < l.length ? l.splice(d, 0, a) : (l.push(a), d = l.length)) : (l.push(a), d = l.length);
          } else
            l.unshift(a), d = 0;
        else
          l.push(a), d = l.length;
        if (n) {
          const c = r.displayRecords.length > 0 ? 1 : 0;
          let u = 0;
          for (let f = d - 1; f >= 0 && u < c; --f)
            for (let p = l[f].displayRecords.length - 1; p >= 0 && u < c; --p) {
              const y = l[f].displayRecords[p], x = this._data.tileDisplayData.displayList.getDPInfoType();
              n[x] || (n[x] = y, ++u);
            }
        }
      }
      const h = r.displayRecords.length;
      for (let d = 0; d < h; ++d) {
        const l = r.displayRecords[d];
        let c = a.displayRecords[d];
        c ? (c.meshData = l.meshData, c.materialKey = l.materialKey) : (c = l.copy(), c.vertexFrom = void 0, c.indexFrom = void 0, a.displayRecords[d] = c);
        const u = l.geometryType, f = this._data.tileDisplayData.displayList.getDPInfoType(), p = e.addOrUpdate.tileBufferData.geometries[u], y = p.vertexBuffer, x = p.indexBuffer;
        let g;
        n && (g = n[f] ? this._data.tileDisplayData.displayList.splitAfter(n[f]) : -1), t = this._dispRecStore.setMeshData(c, l, y, x, g) && t, n && c.indexFrom != null && c.indexFrom != null && (n[f] = c);
      }
    }
    return t;
  }
}
let at = class {
  constructor() {
    this._byGeometryType = null;
  }
  get satisfied() {
    return !this._byGeometryType;
  }
  reset() {
    this._byGeometryType = null;
  }
  verticesFor(e) {
    return this._byGeometryType ? this._byGeometryType[e].vertices : 0;
  }
  indicesFor(e) {
    return this._byGeometryType ? this._byGeometryType[e].indices : 0;
  }
  needMore(e, t, s) {
    if (!t && !s)
      return;
    this._byGeometryType || (this._byGeometryType = [{ vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }]);
    const i = this._byGeometryType[e];
    i.vertices += t, i.indices += s;
  }
};
const ue = 5;
let fe = class Be {
  constructor() {
    this.geometries = [{ indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }];
  }
  clone() {
    const e = new Be();
    for (let t = 0; t < this.geometries.length; t++) {
      const s = this.geometries[t], i = e.geometries[t];
      i.indexBuffer = s.indexBuffer.slice(), i.vertexBuffer = {};
      for (const r in s.vertexBuffer) {
        const { data: n, stride: a } = s.vertexBuffer[r];
        i.vertexBuffer[r] = { data: n.slice(), stride: a };
      }
    }
    return e;
  }
  static deserialize(e) {
    const t = new Be();
    for (let s = 0; s < ue; ++s) {
      t.geometries[s].indexBuffer = new Uint32Array(e.geometries[s].indexBuffer), t.geometries[s].vertexBuffer = {};
      for (const i in e.geometries[s].vertexBuffer)
        t.geometries[s].vertexBuffer[i] = { data: oe(e.geometries[s].vertexBuffer[i].data, e.geometries[s].vertexBuffer[i].stride), stride: e.geometries[s].vertexBuffer[i].stride };
    }
    return t;
  }
  serialize() {
    const e = { geometries: [{ indexBuffer: this.geometries[0].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[1].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[2].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[3].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[4].indexBuffer.buffer, vertexBuffer: {} }] };
    for (let t = 0; t < ue; ++t)
      for (const s in this.geometries[t].vertexBuffer)
        e.geometries[t].vertexBuffer[s] = { data: this.geometries[t].vertexBuffer[s].data.buffer, stride: this.geometries[t].vertexBuffer[s].stride };
    return e;
  }
  getBuffers() {
    const e = [];
    for (let t = 0; t < ue; ++t) {
      e.push(this.geometries[t].indexBuffer.buffer);
      for (const s in this.geometries[t].vertexBuffer)
        e.push(this.geometries[t].vertexBuffer[s].data.buffer);
    }
    return e;
  }
};
function J(o, e, t, ...s) {
  e < o.length ? o.splice(e, t, ...s) : o.push(...s);
}
const pe = /* @__PURE__ */ new Map();
pe.set(de.MAP, [R.FILL, R.LINE, R.MARKER, R.TEXT]), pe.set(de.LABEL, [R.LABEL]), pe.set(de.LABEL_ALPHA, [R.LABEL]);
class Se {
  constructor() {
    this.symbolLevels = [];
  }
  replay(e, t, s) {
    for (const i of this.symbolLevels)
      for (const r of i.zLevels) {
        const n = r.geometryDPInfo.unified;
        if (n)
          for (const a of n) {
            const h = e.painter.getGeometryBrush(a.geometryType), d = t.getGeometry(a.geometryType), l = { geometryType: a.geometryType, materialKey: a.materialKey, indexFrom: a.indexFrom, indexCount: a.indexCount, target: d };
            h.prepareState(e, t), h.drawGeometry(e, t, l, s);
          }
      }
  }
  get empty() {
    return !this.symbolLevels || this.symbolLevels.length === 0;
  }
  clear() {
    this.symbolLevels.length = 0;
  }
  addToList(e, t) {
    if (Array.isArray(e))
      for (const s of e)
        this._addToList(s, t);
    else
      this._addToList(e, t);
  }
  removeFromList(e) {
    Array.isArray(e) || (e = [e]);
    let t = null;
    for (const s of e)
      t = this._removeFromList(s);
    return t;
  }
  clone() {
    const e = new Se();
    for (const t of this.symbolLevels)
      e.symbolLevels.push(t.clone());
    return e;
  }
  splitAfter(e) {
    const t = this._getDisplayList(e.symbolLevel, e.zOrder), s = t.length, i = e.indexFrom + e.indexCount;
    for (let r = 0; r < s; ++r) {
      const n = t[r];
      if (n.geometryType === e.geometryType && i > n.indexFrom && i <= n.indexFrom + n.indexCount) {
        if (i < n.indexFrom + n.indexCount) {
          const a = new me();
          a.geometryType = n.geometryType, a.materialKey = n.materialKey, a.indexFrom = i, a.indexCount = n.indexFrom + n.indexCount - i, t.splice(r + 1, 0, a), n.indexCount = i - n.indexFrom;
        }
        return r;
      }
    }
  }
  _addToList(e, t) {
    const s = e.symbolLevel, i = e.zOrder, r = this._getDisplayList(s, i), n = t ?? r.length - 1, a = n >= 0 && n < r.length ? r[n] : null;
    if (a !== null && a.materialKey === e.materialKey && a.indexFrom + a.indexCount === e.indexFrom && a.geometryType === e.geometryType)
      a.indexCount += e.indexCount;
    else {
      const h = new me();
      h.indexFrom = e.indexFrom, h.indexCount = e.indexCount, h.materialKey = e.materialKey, h.geometryType = e.geometryType, J(r, n + 1, 0, h);
    }
  }
  _removeFromList(e) {
    const t = e.symbolLevel, s = e.zOrder, i = this._getDisplayList(t, s), r = i.length;
    let n;
    for (let a = 0; a < r; ++a) {
      const h = i[a];
      if (e.indexFrom + e.indexCount > h.indexFrom && e.indexFrom < h.indexFrom + h.indexCount && h.geometryType === e.geometryType) {
        n = a;
        break;
      }
    }
    if (n !== void 0) {
      const a = i[n];
      if (e.indexFrom === a.indexFrom)
        return a.indexCount -= e.indexCount, a.indexFrom += e.indexCount, a.indexCount === 0 && J(i, n, 1), n - 1;
      if (e.indexFrom + e.indexCount === a.indexFrom + a.indexCount)
        return a.indexCount -= e.indexCount, a.indexCount === 0 ? (J(i, n, 1), n - 1) : n;
      {
        const h = a.indexFrom, d = e.indexFrom - a.indexFrom, l = e.indexCount, c = a.indexFrom + a.indexCount - (e.indexFrom + e.indexCount);
        a.indexCount = d;
        const u = new me();
        return u.geometryType = a.geometryType, u.materialKey = a.materialKey, u.indexFrom = h + d + l, u.indexCount = c, J(i, n + 1, 0, u), n;
      }
    }
    return null;
  }
  _getDisplayList(e, t) {
    let s;
    const i = this.symbolLevels.length;
    for (let a = 0; a < i; a++)
      if (this.symbolLevels[a].symbolLevel === e) {
        s = this.symbolLevels[a];
        break;
      }
    let r;
    s || (s = new $e(), s.symbolLevel = e, this.symbolLevels.push(s));
    const n = s.zLevels.length;
    for (let a = 0; a < n; a++)
      if (s.zLevels[a].zLevel === t) {
        r = s.zLevels[a];
        break;
      }
    return r || (r = new Le(), r.geometryDPInfo = new ht(), r.zLevel = t, s.zLevels.push(r)), r.geometryDPInfo.unified || (r.geometryDPInfo.unified = []), r.geometryDPInfo.unified;
  }
  getDPInfoType() {
    return "unified";
  }
}
let me = class lt {
  constructor() {
    this.materialKey = null, this.indexFrom = 0, this.indexCount = 0;
  }
  clone() {
    const e = new lt();
    return e.geometryType = this.geometryType, e.materialKey = this.materialKey, e.indexFrom = this.indexFrom, e.indexCount = this.indexCount, e;
  }
}, ht = class dt {
  constructor() {
    this.fill = null, this.line = null, this.marker = null, this.text = null, this.label = null, this.unified = null;
  }
  clone() {
    const e = new dt();
    return e.fill = this.fill && this.fill.map((t) => t.clone()), e.line = this.line && this.line.map((t) => t.clone()), e.marker = this.marker && this.marker.map((t) => t.clone()), e.text = this.text && this.text.map((t) => t.clone()), e.label = this.label && this.label.map((t) => t.clone()), e.unified = this.unified && this.unified.map((t) => t.clone()), e;
  }
};
class Le {
  constructor() {
    this.geometryDPInfo = new ht();
  }
  clone() {
    const e = new Le();
    return e.zLevel = this.zLevel, e.geometryDPInfo = this.geometryDPInfo.clone(), e;
  }
}
class $e {
  constructor() {
    this.zLevels = [];
  }
  clone() {
    const e = new $e();
    e.symbolLevel = this.symbolLevel;
    for (const t of this.zLevels)
      e.zLevels.push(t.clone());
    return e;
  }
}
let Ee = class {
  constructor() {
    this.vertexData = /* @__PURE__ */ new Map(), this.vertexCount = 0, this.indexData = [];
  }
  clear() {
    this.vertexData.clear(), this.vertexCount = 0, this.indexData = [];
  }
  update(e, t, s) {
    for (const i in e)
      this.vertexData.set(i, e[i]);
    for (const i in this.vertexData)
      e[i] === null && this.vertexData.delete(i);
    this.vertexCount = t, this.indexData = s;
  }
}, we = class Te {
  constructor(e, t, s, i = 0, r = 0) {
    this.id = e, this.geometryType = t, this.materialKey = s, this.minZoom = i, this.maxZoom = r, this.meshData = null, this.symbolLevel = 0, this.zOrder = 0, this.vertexFrom = 0, this.vertexCount = 0, this.indexFrom = 0, this.indexCount = 0;
  }
  get sortKey() {
    return this._sortKey === void 0 && this._computeSortKey(), this._sortKey;
  }
  clone() {
    return this.copy();
  }
  copy() {
    const e = new Te(this.id, this.geometryType, this.materialKey);
    return e.vertexFrom = this.vertexFrom, e.vertexCount = this.vertexCount, e.indexFrom = this.indexFrom, e.indexCount = this.indexCount, e.zOrder = this.zOrder, e.symbolLevel = this.symbolLevel, e.meshData = this.meshData, e.minZoom = this.minZoom, e.maxZoom = this.maxZoom, e;
  }
  setMeshDataFromBuffers(e, t, s) {
    const i = new Ee();
    for (const r in t) {
      const n = t[r].stride, a = t[r].data, h = [], d = te(n);
      for (let l = 0; l < n * e.vertexCount / d; ++l)
        h[l] = a[l + n * e.vertexFrom / d];
      i.vertexData.set(r, h);
    }
    i.indexData.length = 0;
    for (let r = 0; r < e.indexCount; ++r)
      i.indexData[r] = s[r + e.indexFrom] - e.vertexFrom;
    i.vertexCount = e.vertexCount, this.meshData = i;
  }
  readMeshDataFromBuffers(e, t) {
    this.meshData ? this.meshData.clear() : this.meshData = new Ee();
    for (const s in e) {
      const i = e[s].stride, r = e[s].data, n = [], a = te(i);
      for (let h = 0; h < i * this.vertexCount / a; ++h)
        n[h] = r[h + i * this.vertexFrom / a];
      this.meshData.vertexData.set(s, n);
    }
    this.meshData.indexData.length = 0;
    for (let s = 0; s < this.indexCount; ++s)
      this.meshData.indexData[s] = t[s + this.indexFrom] - this.vertexFrom;
    this.meshData.vertexCount = this.vertexCount;
  }
  writeMeshDataToBuffers(e, t, s, i) {
    for (const r in t) {
      const n = t[r].stride, a = this.meshData.vertexData.get(r), h = t[r].data, d = te(n);
      for (let l = 0; l < n * this.meshData.vertexCount / d; ++l)
        h[l + n * e / d] = a[l];
    }
    for (let r = 0; r < this.meshData.indexData.length; ++r)
      i[r + s] = this.meshData.indexData[r] + e;
    this.vertexFrom = e, this.vertexCount = this.meshData.vertexCount, this.indexFrom = s, this.indexCount = this.meshData.indexData.length;
  }
  static writeAllMeshDataToBuffers(e, t, s) {
    let i = 0, r = 0;
    for (const n of e)
      n.writeMeshDataToBuffers(i, t, r, s), i += n.vertexCount, r += n.indexCount;
  }
  _computeSortKey() {
    this._sortKey = (31 & this.symbolLevel) << 12 | (127 & this.zOrder) << 4 | 7 & this.geometryType;
  }
  serialize(e) {
    return e.push(this.geometryType), e.push(this.materialKey), e.push(this.vertexFrom), e.push(this.vertexCount), e.push(this.indexFrom), e.push(this.indexCount), e.push(this.minZoom), e.push(this.maxZoom), e;
  }
  static deserialize(e, t) {
    const s = e.readInt32(), i = e.readInt32(), r = new Te(t.id, s, i);
    return r.vertexFrom = e.readInt32(), r.vertexCount = e.readInt32(), r.indexFrom = e.readInt32(), r.indexCount = e.readInt32(), r.minZoom = e.readInt32(), r.maxZoom = e.readInt32(), r;
  }
};
function ct(o, e) {
  if (e !== null) {
    o.push(e.length);
    for (const t of e)
      t.serialize(o);
    return o;
  }
  o.push(0);
}
function $s(o, e, t) {
  const s = o.readInt32(), i = new Array(s);
  for (let r = 0; r < i.length; r++)
    i[r] = e.deserialize(o, t);
  return i;
}
let ut = class ie {
  constructor(e) {
    this.insertAfter = null, this.id = e, this.displayRecords = [];
  }
  copy() {
    const e = new ie(this.id);
    return e.set(this), e;
  }
  clone() {
    const e = new ie(this.id);
    return e.displayRecords = this.displayRecords.map((t) => t.clone()), e.insertAfter = this.insertAfter, e;
  }
  set(e) {
    this.id = e.id, this.displayRecords = e.displayRecords, this.insertAfter = e.insertAfter;
  }
  serialize(e) {
    return e.push(this.id), ct(e, this.displayRecords), e;
  }
  static deserialize(e) {
    const t = e.readInt32(), s = new ie(t), i = { id: t };
    return s.displayRecords = $s(e, we, i), s;
  }
};
function As(o) {
  const e = [[], [], [], [], []], t = o;
  for (const s of t)
    for (const i of s.displayRecords)
      e[i.geometryType].push(i);
  return e;
}
let qe = class Fe {
  constructor() {
  }
  get displayObjectRegistry() {
    if (!this._displayObjectRegistry) {
      this._displayObjectRegistry = /* @__PURE__ */ new Map();
      for (const e of this.displayObjects)
        this._displayObjectRegistry.set(e.id, e);
    }
    return this._displayObjectRegistry;
  }
  get displayList() {
    return this._displayList;
  }
  computeDisplayList() {
    this._displayList = new Se();
    for (const e of this.displayObjects)
      for (const t of e.displayRecords)
        this._displayList.addToList(t);
  }
  clone() {
    const e = new Fe();
    return this.displayObjects && (e.displayObjects = this.displayObjects.map((t) => t.clone())), e;
  }
  serialize(e) {
    return ct(e, this.displayObjects), e;
  }
  _deserializeObjects(e) {
    const t = e.readInt32(), s = new Array(t), i = /* @__PURE__ */ new Map();
    for (let r = 0; r < s.length; ++r) {
      const n = ut.deserialize(e);
      s[r] = n, i.set(n.id, n);
    }
    this.displayObjects = s, this._displayList = null, this._displayObjectRegistry = i;
  }
  static deserialize(e) {
    const t = new Fe();
    return t._deserializeObjects(e), t;
  }
}, ye = class Ie {
  constructor(e, t) {
    this.data = e, this.stride = t;
  }
  static decode(e) {
    const t = oe(e.data, e.stride), s = e.stride;
    return new Ie(t, s);
  }
  static fromVertexVector(e) {
    const t = oe(e.data.buffer(), e.stride), s = e.stride;
    return new Ie(t, s);
  }
};
class A {
  constructor(e, t, s) {
    this.geometryType = e, this.indexBuffer = new Uint32Array(t), this.namedBuffers = s;
  }
  static decode(e) {
    const t = e.geometryType, s = e.indexBuffer, i = {};
    for (const r in e.namedBuffers)
      i[r] = ye.decode(e.namedBuffers[r]);
    return new A(t, s, i);
  }
  static fromVertexData(e, t) {
    const s = e.indices, i = oe(e.vertices, e.stride), r = e.stride, n = { geometry: new ye(i, r) };
    return new A(t, s, n);
  }
  static fromVertexVectors(e) {
    const t = e.geometryType, s = e.indexVector.buffer(), i = {};
    for (const r in e.namedVectors)
      i[r] = ye.fromVertexVector(e.namedVectors[r]);
    return new A(t, s, i);
  }
}
class zs {
  constructor(e, t) {
    this.data = e, this.stride = t;
  }
  get vertexCount() {
    const e = this.stride / 4, t = this.data.length / e;
    return t !== (0 | t) && console.debug("Corrupted stride"), t;
  }
  transfer(e, t) {
    const s = this.data.buffer();
    e.vertexCount = this.vertexCount, e.data = s, e.stride = this.stride, t.push(s);
  }
}
let Os = class {
  constructor(e, t, s) {
    this.geometryType = e, this.indexVector = new se(Uint32Array, 6 * t), this.namedVectors = {};
    const i = es(e, s);
    for (const r in i) {
      const n = i[r];
      let a;
      switch (n % 4) {
        case 0:
        case 2:
          a = new se(Uint32Array, n * t);
          break;
        case 1:
        case 3:
          a = new se(Uint8Array, n * t);
      }
      this.namedVectors[r] = new zs(a, n);
    }
  }
  get(e) {
    return this.namedVectors[e].data;
  }
  getVector(e) {
    return this.namedVectors[e];
  }
  transfer(e, t) {
    const s = this.indexVector.buffer(), i = {};
    t.push(s);
    for (const r in this.namedVectors) {
      const n = this.namedVectors[r];
      i[r] = {}, n.transfer(i[r], t);
    }
    e.geometryType = this.geometryType, e.indexBuffer = s, e.namedBuffers = i, this.destroy();
  }
  intoBuffers() {
    const e = A.fromVertexVectors(this);
    return this.destroy(), e;
  }
  destroy() {
    this.indexVector = null, this.namedVectors = null;
  }
};
const Q = new at(), M = new at(), He = 1.5, Gs = 5;
function js(o, e) {
  const t = {};
  for (const s in o) {
    const i = { data: Me(e, o[s]), stride: o[s] };
    t[s] = i;
  }
  return t;
}
function Ps(o) {
  return [o.fill || {}, o.line || {}, o.icon || {}, o.text || {}, o.label || {}];
}
let Ne = class T {
  constructor() {
    this.tileDisplayData = null, this.tileBufferData = null;
  }
  reshuffle() {
    Q.reset();
    const e = As(this.tileDisplayData.displayObjects);
    for (const i of e)
      for (const r of i)
        r && Q.needMore(r.geometryType, r.meshData ? r.meshData.vertexCount : r.vertexCount, r.meshData ? r.meshData.indexData.length : r.indexCount);
    const t = e.length, s = new fe();
    for (let i = 0; i < t; ++i) {
      s.geometries[i].indexBuffer = new Uint32Array(Math.round(He * Q.indicesFor(i)));
      const r = [];
      for (const d in this.tileBufferData.geometries[i].vertexBuffer)
        r.push(this.tileBufferData.geometries[i].vertexBuffer[d].stride);
      const n = T._computeVertexAlignment(r), a = Math.round(He * Q.verticesFor(i)), h = T._align(a, n);
      for (const d in this.tileBufferData.geometries[i].vertexBuffer) {
        const l = this.tileBufferData.geometries[i].vertexBuffer[d].stride;
        s.geometries[i].vertexBuffer[d] = { stride: l, data: Me(h, l) };
      }
    }
    M.reset(), this.tileDisplayData.displayList.clear();
    for (let i = 0; i < t; ++i) {
      const r = e[i];
      for (const n of r) {
        if (n.meshData)
          n.writeMeshDataToBuffers(M.verticesFor(i), s.geometries[i].vertexBuffer, M.indicesFor(i), s.geometries[i].indexBuffer), n.meshData = null;
        else {
          const a = this.tileBufferData.geometries[i].vertexBuffer, h = this.tileBufferData.geometries[i].indexBuffer, d = s.geometries[i].vertexBuffer, l = s.geometries[i].indexBuffer, c = M.verticesFor(i), u = M.indicesFor(i);
          De(c, u, d, l, n, a, h), n.vertexFrom = c, n.indexFrom = u;
        }
        M.needMore(i, n.vertexCount, n.indexCount);
      }
    }
    for (const i of this.tileDisplayData.displayObjects)
      this.tileDisplayData.displayList.addToList(i.displayRecords);
    this.tileBufferData = s;
  }
  getStrides() {
    const e = [];
    for (let t = 0; t < this.tileBufferData.geometries.length; ++t) {
      const s = this.tileBufferData.geometries[t];
      e[t] = {};
      for (const i in s.vertexBuffer)
        e[t][i] = s.vertexBuffer[i].stride;
    }
    return e;
  }
  clone() {
    const e = new T();
    return e.tileBufferData = this.tileBufferData.clone(), e.tileDisplayData = this.tileDisplayData.clone(), e;
  }
  _guessSize() {
    const { displayObjects: e } = this.tileDisplayData, t = Math.min(e.length, 4), s = 12, i = 40;
    let r = 0;
    for (let n = 0; n < t; n++)
      r = Math.max(r, e[n].displayRecords.length);
    return 2 * (e.length * s + e.length * r * i);
  }
  serialize() {
    const e = this.tileBufferData.serialize(), t = this.tileBufferData.getBuffers(), s = this.tileDisplayData.serialize(new se(Int32Array, this._guessSize())).buffer();
    return t.push(s), { result: { displayData: s, bufferData: e }, transferList: t };
  }
  static fromVertexData(e, t) {
    const s = {}, i = /* @__PURE__ */ new Map();
    for (const r of t)
      i.set(r.id, r);
    return ts((r) => {
      const n = e.data[r];
      if (F(n)) {
        const a = os.from(n.records).getCursor();
        for (; a.next(); ) {
          const h = a.id, d = a.materialKey, l = a.indexFrom, c = a.indexCount, u = a.vertexFrom, f = a.vertexCount, p = i.get(h), y = new we(h, r, d);
          y.indexFrom = l, y.indexCount = c, y.vertexFrom = u, y.vertexCount = f, p.displayRecords.push(y);
        }
        s[r] = A.fromVertexData(n, r);
      } else
        s[r] = new Os(r, 0, { fill: "default" }).intoBuffers();
    }), T.fromMeshData({ displayObjects: t, vertexBuffersMap: s });
  }
  static fromMeshData(e) {
    const t = new T(), s = new qe(), i = new fe();
    s.displayObjects = e.displayObjects;
    for (const r in e.vertexBuffersMap) {
      const n = e.vertexBuffersMap[r];
      i.geometries[r].indexBuffer = n.indexBuffer, i.geometries[r].vertexBuffer = n.namedBuffers;
    }
    return t.tileDisplayData = s, t.tileBufferData = i, t;
  }
  static bind(e, t) {
    const s = new T();
    return s.tileDisplayData = e, s.tileBufferData = t, s;
  }
  static create(e, t) {
    const s = new T();
    s.tileDisplayData = new qe(), s.tileDisplayData.displayObjects = e;
    const i = [0, 0, 0, 0, 0], r = [0, 0, 0, 0, 0], n = [[], [], [], [], []];
    for (const d of e)
      for (const l of d.displayRecords)
        n[l.geometryType].push(l), i[l.geometryType] += l.meshData.vertexCount, r[l.geometryType] += l.meshData.indexData.length;
    const a = new fe(), h = Ps(t);
    for (let d = 0; d < Gs; d++) {
      const l = new Uint32Array(r[d]), c = js(h[d], i[d]);
      we.writeAllMeshDataToBuffers(n[d], c, l), a.geometries[d] = { indexBuffer: l, vertexBuffer: c };
    }
    return s.tileBufferData = a, s;
  }
  static _align(e, t) {
    const s = e % t;
    return s === 0 ? e : e + (t - s);
  }
  static _computeVertexAlignment(e) {
    let t = !1, s = !1;
    for (const i of e)
      i % 4 == 2 ? t = !0 : i % 4 != 0 && (s = !0);
    return s ? 4 : t ? 2 : 1;
  }
};
const S = 512, B = 50;
function Us(o, e) {
  if (!e.isWrappable)
    return null;
  const [t, s] = Re(e);
  return o[2] > s ? [b([o[0], o[1], s, o[3]]), b([t, o[1], t + o[2] - s, o[3]])] : o[0] < t ? [b([t, o[1], o[2], o[3]]), b([s - (t - o[0]), o[1], s, o[3]])] : null;
}
function ft(o) {
  return o === "text" || o === "esriTS";
}
function pt(o) {
  return o === "simple-marker" || o === "picture-marker" || o === "esriSMS" || o === "esriPMS";
}
function Ze(o) {
  switch (xt(o.geometry).type) {
    case "point":
    case "multipoint":
      return 0;
    case "polyline":
      return 1;
    case "polygon":
    case "extent":
      return 2;
  }
  return 0;
}
function Vs(o) {
  if (!o)
    return null;
  const { xmin: e, ymin: t, xmax: s, ymax: i, spatialReference: r } = o;
  return new gt({ rings: [[[e, t], [e, i], [s, i], [s, t], [e, t]]], spatialReference: r });
}
class le extends ys {
  constructor(e, t) {
    super(e, t, null);
  }
  static from(e) {
    const t = gs.createInstance(), s = [], i = e.filter((r) => !!r.geometry);
    for (const r of i) {
      const n = et(r.geometry);
      _t(s, [r], n, !1, !1, "uid");
    }
    return new le(t, s);
  }
  get geometryType() {
    const e = this._current;
    return e ? e.geometryType : null;
  }
  get insertAfter() {
    return this._current.insertAfter;
  }
  readGraphic() {
    return this._current;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new le(this.instance, this._features);
    return this.copyInto(e), e;
  }
}
const z = new tt(), ge = new tt(), Xe = "esriGeometryPolyline";
function We(o) {
  o.coords.length = 0, o.lengths.length = 0;
}
let V = class re {
  constructor() {
    this.bounds = b(), this.graphic = null;
  }
  static acquire(e = null, t, s, i, r) {
    let n;
    return re._pool.length === 0 ? n = new re() : (n = re._pool.pop(), this._set.delete(n)), n.acquire(e, t, s, i, r), n;
  }
  static release(e) {
    e && !this._set.has(e) && (e.release(), this._pool.push(e), this._set.add(e));
  }
  static getCentroidQuantized(e, t) {
    if (k(e.geometry)) {
      const s = e.symbol;
      if (U(s))
        return null;
      if (pt(s.type) || ft(s.type)) {
        const i = vt(e.geometry);
        return vs(t, {}, { x: i[0], y: i[1] }, !1, !1);
      }
    }
    return null;
  }
  acquire(e = null, t, s, i, r) {
    e && this.set(e, t, s, i, r);
  }
  release() {
    this.graphic = null, this.symbolResource = null, this.geometry = null;
  }
  get symbol() {
    return this.symbolResource.symbol;
  }
  set(e, t, s, i, r) {
    this.graphic = e, this.geometry = s, this.symbolResource = t, this.bounds = i, r && (this.size = r);
  }
  getGeometryQuantized(e, t, s, i) {
    const r = this.geometry;
    if (k(r)) {
      const n = r.rings;
      if (n.length === 1 && n[0].length === 2)
        return ce(e, { paths: [[n[0][0], n[0][1]]] });
    } else {
      if (ne(r))
        return We(z), We(ge), bt(z, r), Dt(ge, z, r.hasZ, r.hasM, Xe, e.scale[0]), Ct(z, ge, r.hasZ, r.hasM, Xe, e), Bt(z, r.hasZ, r.hasM);
      if (P(r)) {
        const n = 0.5 * i * Math.max(Math.abs(this.size[0]) + this.size[2] - this.size[0], Math.abs(this.size[1]) + this.size[3] - this.size[1]), [a, h] = Re(s), d = h - a, l = r.points.filter((c) => {
          if (c[0] + n > h || c[0] - n < a) {
            const u = [...c];
            return c[0] + n > h ? u[0] -= d : u[0] += d, he(t, c, n) || he(t, u, n);
          }
          return he(t, c, n);
        });
        return l.length === 0 ? { points: l } : ce(e, { points: l });
      }
    }
    return ce(e, this.geometry);
  }
};
V._pool = [], V._set = /* @__PURE__ */ new Set();
const O = { minX: 0, minY: 0, maxX: 0, maxY: 0 }, L = b(), Ye = 1e-5;
function ee(o, e, t, s, i) {
  return O.minX = e, O.minY = t, O.maxX = s, O.maxY = i, o.search(O);
}
function ks(o) {
  return { minX: o.bounds[0], minY: o.bounds[1], maxX: o.bounds[2], maxY: o.bounds[3] };
}
class Ks {
  constructor(e, t, s, i, r, n, a) {
    this._graphics = i, this._onAdd = r, this._onRemove = n, this._hashToCIM = a, this._index = wt(9, ks), this._itemByGraphic = /* @__PURE__ */ new Map(), this._inflatedSizeHelper = new Ge(), this._tileInfoView = e, this._uidFieldName = s;
    const h = e.getClosestInfoForScale(t);
    h && (this._resolution = this._tileInfoView.getTileResolution(h.level));
  }
  setResourceManager(e) {
    this._cimResourceManager = e, this._hittestDrawHelper = new Ht(e);
  }
  hitTest(e, t, s, i, r) {
    e = st(e, this._tileInfoView.spatialReference);
    const n = 0.5 * i * window.devicePixelRatio * s;
    L[0] = e - n, L[1] = t - n, L[2] = e + n, L[3] = t + n;
    const a = 0.5 * i * (s + B), h = ee(this._index, e - a, t - a, e + a, t + a);
    if (!h || h.length === 0)
      return [];
    const d = [], l = b(), c = b();
    for (const p of h) {
      const { geometry: y, symbolResource: x } = p;
      this._getSymbolBounds(l, x, y, c, r), c[3] = c[2] = c[1] = c[0] = 0, Tt(l, L) && p.graphic.visible && d.push(p);
    }
    if (d.length === 0)
      return [];
    const u = this._hittestDrawHelper, f = [];
    for (const p of d) {
      const { geometry: y, symbolResource: x } = p, { hash: g, textInfo: I } = x, w = this._hashToCIM.get(g);
      w && u.hitTest(L, w.symbol, y, I, r, i) && f.push(p);
    }
    return f.sort(Es), f.map((p) => p.graphic);
  }
  getGraphicsData(e, t, s) {
    const i = this._searchForItems(t);
    if (i.length === 0 || s.length === 0)
      return [];
    i.sort((c, u) => c.zorder - u.zorder), i[0].insertAfter = -1;
    for (let c = 1; c < i.length; c++)
      i[c].insertAfter = i[c - 1].graphic.uid;
    i.sort((c, u) => c.graphic.uid - u.graphic.uid), s.sort((c, u) => c.uid - u.uid);
    let r, n = 0, a = 0;
    const h = t.resolution, d = [], l = { originPosition: "upperLeft", scale: [h, h], translate: [t.bounds[0], t.bounds[3]] };
    for (const c of s) {
      for (a = -2; n < i.length; )
        if (r = i[n], n++, c.uid === r.graphic.uid) {
          a = r.insertAfter;
          break;
        }
      if (!r.geometry || a === -2)
        continue;
      const u = r.getGeometryQuantized(l, t.bounds, this._tileInfoView.spatialReference, h), f = { ...r.graphic.attributes };
      f[this._uidFieldName] = c.uid, r.groupId == null && (r.groupId = e.createTemplateGroup(r.symbol, null)), d.push({ centroid: V.getCentroidQuantized(r, l), geometry: u, attributes: f, symbol: r.symbol, groupId: r.groupId, insertAfter: a, zorder: r.zorder });
    }
    return d.sort((c, u) => c.zorder - u.zorder), d;
  }
  queryTileData(e, t) {
    if (this._graphics.length === 0)
      return [];
    const { bounds: s, resolution: i } = t, r = this._searchForItems(t), n = [];
    return r.length === 0 || this._createTileGraphics(n, e, r, { originPosition: "upperLeft", scale: [i, i], translate: [s[0], s[3]] }, t), n;
  }
  has(e) {
    return this._itemByGraphic.has(e);
  }
  getBounds(e) {
    const t = this._itemByGraphic.get(e);
    return t ? t.bounds : null;
  }
  getAllBounds() {
    return Array.from(this._itemByGraphic.values()).filter((e) => e.graphic.visible).map((e) => e.bounds);
  }
  addOrModify(e, t, s) {
    if (!e || U(t))
      return;
    this.has(e) && this.remove(e), this._onAdd(e);
    const i = [0, 0, 0, 0], r = this._getSymbolBounds(null, t, s, i, 0), n = V.acquire(e, t, s, F(r) ? r : null, i);
    return this._itemByGraphic.set(e, n), s && this._index.insert(n), n.bounds;
  }
  remove(e) {
    if (!this._itemByGraphic.has(e))
      return;
    this._onRemove(e);
    const t = this._itemByGraphic.get(e);
    t.bounds && this._index.remove(t), this._itemByGraphic.delete(e);
  }
  updateZ() {
    const e = this._graphics.items;
    let t, s;
    for (let i = 0; i < e.length; i++)
      s = e[i], t = this._itemByGraphic.get(s), t && (t.zorder = i);
  }
  update(e, t, s) {
    const i = this._itemByGraphic.get(e);
    i.groupId = null;
    const r = Ft(i.bounds);
    this._index.remove(i);
    const n = this._getSymbolBounds(i.bounds, t, s, i.size, 0);
    return F(n) && i.set(e, t, s, n, i.size), s && this._index.insert(i), { oldBounds: r, newBounds: i.bounds };
  }
  updateLevel(e) {
    if (this._resolution === e)
      return;
    this._resolution = e, this._index.clear();
    const t = this._itemByGraphic, s = [];
    for (const [i, r] of t) {
      const n = this._getSymbolBounds(r.bounds, r.symbolResource, r.geometry, r.size, 0);
      r.geometry && F(n) && (r.bounds = n, s.push(r));
    }
    this._index.load(s);
  }
  clear() {
    this._itemByGraphic.clear(), this._index.clear();
  }
  _createTileGraphics(e, t, s, i, r) {
    const n = this._uidFieldName, a = this._tileInfoView.spatialReference, { bounds: h, resolution: d } = r;
    let l, c, u, f;
    s.sort((p, y) => p.zorder - y.zorder);
    for (let p = 0; p < s.length; p++) {
      u = s[p], l = u.graphic, c = u.getGeometryQuantized(i, h, a, d), f = p === 0 ? -1 : s[p - 1].graphic.uid;
      const y = { ...u.graphic.attributes };
      y[n] = l.uid, u.groupId == null && (u.groupId = t.createTemplateGroup(u.symbol, null)), e.push({ centroid: V.getCentroidQuantized(u, i), geometry: c, attributes: y, symbol: u.symbol, groupId: u.groupId, insertAfter: f, zorder: u.zorder });
    }
  }
  _searchForItems(e) {
    const t = this._tileInfoView.spatialReference, s = e.bounds;
    if (t.isWrappable) {
      const [i, r] = Re(t), n = Math.abs(s[2] - r) < Ye, a = Math.abs(s[0] - i) < Ye;
      if ((!n || !a) && (n || a)) {
        const h = e.resolution;
        let d;
        d = b(n ? [i, s[1], i + h * B, s[3]] : [r - h * B, s[1], r, s[3]]);
        const l = ee(this._index, s[0], s[1], s[2], s[3]), c = ee(this._index, d[0], d[1], d[2], d[3]);
        return [.../* @__PURE__ */ new Set([...l, ...c])];
      }
    }
    return ee(this._index, s[0], s[1], s[2], s[3]);
  }
  _getSymbolBounds(e, t, s, i, r) {
    if (!t || !t.symbol || !s)
      return null;
    if (e || (e = b()), Qe(e, s), !i || i[0] === 0 && i[1] === 0 && i[2] === 0 && i[3] === 0) {
      const { hash: h, textInfo: d } = t, l = this._hashToCIM.get(h);
      if (!l)
        return null;
      i || (i = [0, 0, 0, 0]);
      const c = this._inflatedSizeHelper.getSymbolInflateSize(i, l.symbol, this._cimResourceManager, r, d);
      i[0] = N(c[0]), i[1] = N(c[1]), i[2] = N(c[2]), i[3] = N(c[3]);
    }
    const n = this._resolution, a = Ge.safeSize(i);
    return e[0] -= a * n, e[1] -= a * n, e[2] += a * n, e[3] += a * n, e;
  }
}
const Es = (o, e) => {
  const t = Ze(o.graphic), s = Ze(e.graphic);
  return t === s ? e.zorder - o.zorder : t - s;
}, qs = (o) => {
  let e = class extends It(o) {
    constructor() {
      super(...arguments), this.graphics = null, this.renderer = null;
    }
  };
  return v([D()], e.prototype, "graphics", void 0), v([D()], e.prototype, "renderer", void 0), v([D()], e.prototype, "updating", void 0), v([D()], e.prototype, "view", void 0), e = v([it("geoscene.views.layers.GraphicsView")], e), e;
}, Hs = Rt("geoscene-2d-graphic-debug");
function xe(o, e, t) {
  if (t.has(o))
    return t.get(o);
  const s = { tile: e, addedOrModified: [], removed: [] };
  return t.set(o, s), s;
}
let C = class extends qs(Mt(Pt)) {
  constructor(o) {
    super(o), this._storage = new xs(), this._displayIds = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._tiles = /* @__PURE__ */ new Map(), this._graphicStoreUpdate = !1, this._graphicsSet = /* @__PURE__ */ new Set(), this._matcher = Promise.resolve(null), this._tileUpdateSet = /* @__PURE__ */ new Set(), this._tilesToUpdate = /* @__PURE__ */ new Map(), this._graphicIdToAbortController = /* @__PURE__ */ new Map(), this._attached = !1, this._updatingGraphicsTimer = null, this._hashToExpandedSymbol = /* @__PURE__ */ new Map(), this._hashToExpandedSymbolPromise = /* @__PURE__ */ new Map(), this._hashToCIMSymbolPromise = /* @__PURE__ */ new Map(), this._hashToCIM = /* @__PURE__ */ new Map(), this._processing = !1, this._needsProcessing = !1, this._pendingUpdate = { added: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set(), removed: /* @__PURE__ */ new Set() }, this.lastUpdateId = -1, this.updateRequested = !1, this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this._controller.abort(), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._attributeStore = null, this._hashToExpandedSymbol.clear(), this.view = null, this.renderer = null, this._hashToCIM.clear(), this._hashToCIMSymbolPromise.clear(), this._hashToExpandedSymbolPromise.clear();
  }
  _createMatcher(o, e, t) {
    if (o) {
      const s = fs({ indexCount: 0, fields: {} }, "feature", o);
      this._matcher = ls(s, e, null, t);
    }
  }
  _createDisplayId(o) {
    return this._displayIds.has(o) || this._displayIds.set(o, this._storage.createDisplayId()), this._displayIds.get(o);
  }
  initialize() {
    this._attributeStore = new _s({ type: "local", initialize: (i) => Promise.resolve(this.container.attributeView.initialize(i)), update: (i) => this.container.attributeView.requestUpdate(i), render: () => this.container.requestRender() }, St()), this.container.hasHighlight = () => this._attributeStore.hasHighlight;
    const o = (i) => {
      this._createDisplayId(i.uid), this._setFilterState(i.uid, i.visible);
    }, e = (i) => {
      const r = this._displayIds.get(i.uid);
      this._displayIds.delete(i.uid), this._storage.releaseDisplayId(r);
    }, t = new hs(this.container.getMaterialItems.bind(this.container), this.view.featuresTilingScheme.tileInfo);
    this._graphicStore = new Ks(this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, o, e, this._hashToCIM), this._meshFactory = new ds(null, this.uid, t), this._templateStore = t, this.handles.add([this.watch("renderer", (i) => {
      this._createMatcher(i, t, this.container.stage.resourceManager);
      for (const r of this.graphics)
        this._pendingUpdate.updated.add(r);
      this.requestUpdate();
    }), this.view.graphicsTileStore.on("update", (i) => this._onTileUpdate(i)), this.container.on("attach", () => {
      Hs && this.container.enableRenderingBounds(() => this._graphicStore.getAllBounds()), this.graphics.items.length > 0 && this._graphicsChangeHandler({ target: this.graphics, added: this.graphics.items, removed: [], moved: [] }), this.handles.add(this.graphics.on("change", (r) => this._graphicsChangeHandler(r)), "graphics");
      const i = this.container.stage.resourceManager;
      this._createMatcher(this.renderer, t, i), this._graphicStore.setResourceManager(i), this._attached = !0, this.notifyChange("updating");
    })]);
    const s = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: s, removed: [] });
  }
  get updating() {
    return !this._attached || this._updatingGraphicsTimer !== null || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0;
  }
  hitTest(o) {
    if (!this.view || !this.view.position)
      return null;
    const { resolution: e, rotation: t } = this.view.state;
    return this._graphicStore.hitTest(o.x, o.y, 2, e, t);
  }
  update(o) {
    _(this._controller.signal);
    const e = o.state, { resolution: t } = e;
    if (this._graphicStore.updateLevel(t), this._graphicStoreUpdate = !0, this.updateRequested = !1, this._pendingUpdate.updated.size > 0) {
      if (!this._processing)
        return void this._updateGraphics();
      this._needsProcessing = !0;
    }
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.requestUpdateCallback());
  }
  processUpdate(o) {
    this.updateRequested && (this.updateRequested = !1, this.update(o));
  }
  graphicUpdateHandler(o) {
    const { graphic: e, property: t, newValue: s } = o;
    switch (t) {
      case "attributes":
      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(e), this.requestUpdate();
        break;
      case "visible":
        this._setFilterState(e.uid, s), this._attributeStore.sendUpdates();
    }
  }
  setHighlight(o) {
    const e = o.map((t) => this._displayIds.get(t));
    this._attributeStore.setHighlight(o, e);
  }
  _getIntersectingTiles(o) {
    const e = this._graphicStore.getBounds(o);
    if (!e || Lt(e) === 0 || $t(e) === 0)
      return [];
    const t = Us(e, this.view.spatialReference);
    return F(t) ? [.../* @__PURE__ */ new Set([...this.view.graphicsTileStore.boundsIntersections(t[0]), ...this.view.graphicsTileStore.boundsIntersections(t[1])])] : this.view.graphicsTileStore.boundsIntersections(e);
  }
  async _updateTile(o) {
    _(this._controller.signal);
    const e = o.tile, t = this._getGraphicsData(this._templateStore, e, o.addedOrModified), s = await this._processGraphics(e, t);
    return _(this._controller.signal), this._patchTile(e.key, { type: "update", addOrUpdate: s, remove: o.removed, end: !0, clear: !1, sort: !1 }), s;
  }
  _patchTile(o, e) {
    if (!this._tiles.has(o))
      return;
    const t = this._tiles.get(o);
    this.container.onTileData(t, e), this.container.requestRender();
  }
  _graphicsChangeHandler(o) {
    const e = this._pendingUpdate;
    for (const t of o.added)
      e.added.add(t);
    for (const t of o.moved)
      e.updated.add(t);
    for (const t of o.removed)
      this._pendingUpdate.added.has(t) ? e.added.delete(t) : e.removed.add(t);
    this._processing ? this._needsProcessing = !0 : this._updateGraphics();
  }
  _getGraphicsToUpdate() {
    const o = { added: [], removed: [], updated: [] };
    if (!this.graphics)
      return o;
    const e = this._pendingUpdate;
    for (const t of this.graphics.items)
      e.added.has(t) ? o.added.push(t) : e.updated.has(t) && o.updated.push(t);
    for (const t of e.removed)
      this._graphicStore.has(t) && o.removed.push(t);
    return e.added.clear(), e.removed.clear(), e.updated.clear(), o;
  }
  async _updateGraphics() {
    this._processing = !0;
    const { added: o, removed: e, updated: t } = this._getGraphicsToUpdate(), s = this._tilesToUpdate;
    let i;
    try {
      if (!this._graphicStoreUpdate) {
        const l = this.view.state, { resolution: c } = l;
        this._graphicStore.updateLevel(c);
      }
      const r = [], n = new Array(o.length + e.length);
      for (let l = 0; l < t.length; l++) {
        const c = t[l], u = this._getIntersectingTiles(c);
        for (const f of u)
          i = f.id, xe(i, f, s).removed.push(this._displayIds.get(c.uid));
        r.push(this._updateGraphic(c, null)), n[l] = c;
      }
      const a = t.length;
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        n[a + l] = c, this._graphicsSet.add(c), r.push(this._addGraphic(c));
      }
      for (const l of e) {
        this._abortProcessingGraphic(l.uid);
        const c = this._getIntersectingTiles(l);
        for (const u of c)
          i = u.id, xe(i, u, s).removed.push(this._displayIds.get(l.uid));
        this._graphicsSet.delete(l), this._graphicStore.remove(l);
      }
      let h;
      this._flipUpdatingGraphics(), await Promise.all(r);
      for (let l = 0; l < n.length; l++) {
        h = n[l];
        const c = this._getIntersectingTiles(h);
        for (const u of c)
          i = u.id, xe(i, u, s).addedOrModified.push(h);
      }
      this._graphicStore.updateZ();
      const d = [];
      for (const [l, c] of s)
        d.push(this._updateTile(c));
      await Promise.all(d);
    } catch (r) {
      Z(r);
    }
    for (const r of e)
      try {
        const n = await this._getSymbolForGraphic(r, {});
        if (n) {
          const a = n.hash();
          this._hashToExpandedSymbol.delete(a);
        }
      } catch (n) {
        Z(n);
      }
    s.clear(), this.notifyChange("updating"), this._processing = !1, this._needsProcessing && (this._needsProcessing = !1, this._updateGraphics());
  }
  _getArcadeInfo(o) {
    const e = (o.attributes ? Object.keys(o.attributes) : []).map((t) => ({ name: t, alias: t, type: typeof o.attributes[t] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
    return U(o.geometry) ? null : { geometryType: et(o.geometry), spatialReference: At.fromJSON(o.geometry.spatialReference), fields: e };
  }
  _getSymbolForGraphic(o, e) {
    return _(this._controller.signal), F(o.symbol) ? Promise.resolve(o.symbol) : F(this.renderer) ? this.renderer.getSymbolAsync(o, { scale: this.view.scale, abortOptions: e }) : Promise.resolve(this._getNullSymbol(o));
  }
  _getCIMSymbol(o, e, t) {
    let s = this._hashToCIM.get(e);
    if (s)
      return Promise.resolve(s);
    const i = Nt(o);
    if (F(i)) {
      if (i.type === "CIMSymbolReference")
        return s = i, this._hashToCIM.set(e, s), Promise.resolve(s);
      let r = this._hashToCIMSymbolPromise.get(e);
      return r || (r = i.fetchCIMSymbol(t).then((n) => (this._hashToCIM.set(e, n.data), this._hashToCIMSymbolPromise.delete(e), n)).catch((n) => (this._hashToCIMSymbolPromise.delete(e), ze(n), null)), this._hashToCIMSymbolPromise.set(e, r), r);
    }
    return Promise.resolve(null);
  }
  _expandCIMSymbol(o, e, t, s) {
    const i = this._hashToExpandedSymbol.get(t);
    if (i)
      return Promise.resolve(i);
    let r = this._hashToExpandedSymbolPromise.get(t);
    if (r)
      return r;
    const n = this.container.stage, a = this._getArcadeInfo(e), h = ps(null), d = ms(o, h);
    return r = cs(d, a, n.resourceManager, s), this._hashToExpandedSymbolPromise.set(t, r), r.then((l) => (this._hashToExpandedSymbol.set(t, l), this._hashToExpandedSymbolPromise.delete(t), l)), r;
  }
  async _getSymbolResources(o, e) {
    return _(this._controller.signal), this.container.stage ? this._getSymbolForGraphic(o, e).then((t) => {
      const s = t.hash();
      return this._getCIMSymbol(t, s, e).then((i) => U(i) ? null : this._expandCIMSymbol(i, o, s, e).then((r) => {
        const n = r.layers.filter((a) => a.type === "text" && typeof a.text == "string");
        if (n && n.length > 0) {
          const a = new Array(n.length);
          for (let d = 0; d < n.length; d++) {
            const l = n[d], c = [], [u] = Zt(l.text);
            for (let f = 0; f < u.length; f++)
              c.push(u.charCodeAt(f));
            a[d] = { symbol: l, id: d, glyphIds: c };
          }
          const h = /* @__PURE__ */ new Map();
          return this.container.getMaterialItems(a).then((d) => {
            for (let l = 0; l < n.length; l++) {
              const c = n[l];
              h.set(c.cim, { text: c.text, mosaicItem: d[l].mosaicItem });
            }
            return { symbol: r, textInfo: h, hash: s };
          });
        }
        return { symbol: r, hash: s };
      }));
    }).catch((t) => (ze(t), null)) : null;
  }
  async _projectAndNormalizeGeometry(o, e) {
    if (_(this._controller.signal), U(o.geometry) || o.geometry.type === "mesh")
      return null;
    let t = o.geometry;
    if (k(t)) {
      const r = t.rings;
      t.rings = r;
    } else if (ne(t)) {
      const r = t.paths;
      t.paths = r;
    } else if (be(t)) {
      const r = await this._getSymbolForGraphic(o, e);
      _(this._controller.signal), pt(r.type) || ft(r.type) ? t = t.center : t = Vs(t);
    }
    await Xt(t.spatialReference, this.view.spatialReference);
    const s = Cs(t), i = Wt(s, t.spatialReference, this.view.spatialReference);
    return zt(i), i;
  }
  _onTileUpdate(o) {
    const e = _e(this.view.spatialReference);
    if (o.added && o.added.length > 0)
      for (const t of o.added)
        this._addNewTile(t, e);
    if (o.removed && o.removed.length > 0)
      for (const t of o.removed)
        this._removeTile(t.key);
  }
  async _addGraphic(o) {
    this._abortProcessingGraphic(o.uid), _(this._controller.signal);
    const e = new AbortController();
    this._graphicIdToAbortController.set(o.uid, e);
    const t = { signal: e.signal };
    try {
      await this._addOrUpdateGraphic(o, t), _(this._controller.signal), this._graphicIdToAbortController.delete(o.uid);
    } catch (s) {
      if (this._graphicIdToAbortController.delete(o.uid), !Z(s))
        throw s;
    }
  }
  _updateGraphic(o, e) {
    _(this._controller.signal);
    const t = this._projectAndNormalizeGeometry(o, e), s = this._getSymbolResources(o, e);
    return Promise.all([t, s]).then(([i, r]) => {
      _(this._controller.signal), this._graphicStore.addOrModify(o, r, i);
    });
  }
  _addOrUpdateGraphic(o, e) {
    _(this._controller.signal);
    const t = this._projectAndNormalizeGeometry(o, e), s = this._getSymbolResources(o, e);
    return Promise.all([t, s]).then(([i, r]) => {
      _(this._controller.signal), this._graphicsSet.has(o) && this._graphicStore.addOrModify(o, r, i);
    });
  }
  _addTile(o) {
    const e = this.view.featuresTilingScheme.getTileBounds(b(), o), t = new Ls(o, e[0], e[3]);
    return this._tiles.set(o, t), this.container.addChild(t), t;
  }
  async _addNewTile(o, e) {
    const t = this._addTile(o.key), s = this._graphicStore.queryTileData(this._templateStore, o);
    if (s.length === 0)
      return;
    if (e) {
      const r = Math.round((e.valid[1] - e.valid[0]) / o.resolution);
      for (const n of s)
        n.geometry && (ve(n.geometry) || P(n.geometry)) && this._wrapPoints(n, r);
    }
    const i = o.key;
    this._tileUpdateSet.add(o.key), this.notifyChange("updating");
    try {
      const r = { type: "update", clear: !1, addOrUpdate: await this._processGraphics(o, s), remove: [], end: !0, sort: !1 };
      t.patch(r), this._tileUpdateSet.delete(i), this.notifyChange("updating");
    } catch (r) {
      if (this._tileUpdateSet.delete(i), this.notifyChange("updating"), !Z(r))
        throw r;
    }
  }
  _removeTile(o) {
    if (!this._tiles.has(o))
      return;
    const e = this._tiles.get(o);
    this.container.removeChild(e), e.destroy(), this._tiles.delete(o);
  }
  _setFilterState(o, e) {
    const t = this._displayIds.get(o), s = this._attributeStore.getHighlightFlag(o);
    this._attributeStore.setData(t, 0, 0, s | (e ? Yt : 0));
  }
  _getGraphicsData(o, e, t) {
    const s = this.view, i = _e(s.spatialReference), r = this._graphicStore.getGraphicsData(o, e, t);
    if (i) {
      const n = Math.round((i.valid[1] - i.valid[0]) / e.resolution);
      for (const a of r)
        a.geometry && (ve(a.geometry) || P(a.geometry)) && this._wrapPoints(a, n);
    }
    return r;
  }
  _wrapPoints(o, e) {
    const t = o.geometry;
    P(t) ? this._wrapMultipoint(t, e) : this._wrapPoint(o, e);
  }
  _wrapMultipoint(o, e) {
    const t = o.points, s = [];
    let i = 0, r = 0;
    for (const [n, a] of t) {
      if (s.push([n + i, a]), i = 0, e === S) {
        const h = 5 * B;
        n + r < h ? (s.push([e, 0]), i = -e) : n + r > S - h && (s.push([-e, 0]), i = e);
      } else
        n + r < -B ? (s.push([e, 0]), i = -e) : n + r > S + B && (s.push([-e, 0]), i = e);
      r += n;
    }
    o.points = s;
  }
  _wrapPoint(o, e) {
    const t = o.geometry;
    if (e === S) {
      const s = 5 * B;
      t.x < s ? o.geometry = { points: [[t.x, t.y], [e, 0]] } : t.x > S - s && (o.geometry = { points: [[t.x, t.y], [-e, 0]] });
    } else
      t.x < -B ? o.geometry = { points: [[t.x, t.y], [e, 0]] } : t.x > S + B && (o.geometry = { points: [[t.x, t.y], [-e, 0]] });
  }
  _processGraphics(o, e, t) {
    if (!(e && e.length) || !this._meshFactory)
      return null;
    const s = le.from(e), i = this._meshFactory;
    return this._matcher.then((r) => i.analyzeGraphics(s, this.container.stage.resourceManager, r, null, null, t).then(() => (this._attributeStore.sendUpdates(), this._processAnalyzedGraphics(o, s))));
  }
  _processAnalyzedGraphics(o, e) {
    const t = this._meshFactory, s = e.getSize(), i = e.getCursor(), r = { features: s, records: s, metrics: 0 }, n = new us(o.key.id, r, { fill: "default" }, !1, !1), a = [];
    for (; i.next(); ) {
      const c = i.readGraphic();
      c.insertAfter = c.insertAfter === -1 ? -1 : this._displayIds.get(c.insertAfter), c.displayId = this._displayIds.get(c.attributes[this.uid]);
      const u = new ut(c.displayId);
      u.insertAfter = c.insertAfter, a.push(u), t.writeGraphic(n, i, o.level, this.container.stage.resourceManager);
    }
    const h = o.tileInfoView.tileInfo.isWrappable, d = n.serialize(h);
    if (d.length !== 1)
      return new Ne();
    const l = d[0].message;
    return Ne.fromVertexData(l, a);
  }
  _abortProcessingGraphic(o) {
    this._graphicIdToAbortController.has(o) && this._graphicIdToAbortController.get(o).abort();
  }
  _getNullSymbol(o) {
    const e = o.geometry;
    return ne(e) ? Ot : k(e) || be(e) ? Gt : jt;
  }
  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(() => {
      this._updatingGraphicsTimer = null, this.notifyChange("updating");
    }, 160), this.notifyChange("updating");
  }
};
v([D({ constructOnly: !0 })], C.prototype, "requestUpdateCallback", void 0), v([D()], C.prototype, "container", void 0), v([D({ constructOnly: !0 })], C.prototype, "graphics", void 0), v([D()], C.prototype, "updating", null), v([D()], C.prototype, "view", void 0), v([D()], C.prototype, "updateRequested", void 0), C = v([it("geoscene.views.2d.layers.support.GraphicsView2D")], C);
const xi = C, Ns = Math.PI / 180, Zs = 4;
class Xs extends Ds {
  constructor(e) {
    super(), this._dvsMat3 = Oe(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = e;
  }
  destroy() {
    this._vao && (this._vao.dispose(!0), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program && (this._program.dispose(), this._program = null);
  }
  doRender(e) {
    const { context: t } = e, s = this._getBounds();
    if (s.length < 1)
      return;
    this._createShaderProgram(t), this._updateMatricesAndLocalOrigin(e), this._updateBufferData(t, s), t.setBlendingEnabled(!0), t.setDepthTestEnabled(!1), t.setStencilWriteMask(0), t.setStencilTestEnabled(!1), t.setBlendFunction(je.ONE, je.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0);
    const i = this._program;
    t.bindVAO(this._vao), t.useProgram(i), i.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), t.gl.lineWidth(1), t.drawElements(is.LINES, 8 * s.length, nt.UNSIGNED_INT, 0), t.bindVAO();
  }
  _createTransforms() {
    return { dvs: Oe() };
  }
  _createShaderProgram(e) {
    if (this._program)
      return;
    const t = `precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`, s = `precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;
    this._program = e.programCache.acquire(t, s, Je().attributes);
  }
  _updateMatricesAndLocalOrigin(e) {
    const { state: t } = e, { displayMat3: s, size: i, resolution: r, pixelRatio: n, rotation: a, viewpoint: h } = t, d = Ns * a, { x: l, y: c } = h.targetGeometry, u = st(l, t.spatialReference);
    this._localOrigin.x = u, this._localOrigin.y = c;
    const f = n * i[0], p = n * i[1], y = r * f, x = r * p, g = Ut(this._dvsMat3);
    Vt(g, g, s), kt(g, g, Kt(f / 2, p / 2)), Et(g, g, bs(i[0] / y, -p / x, 1)), qt(g, g, -d);
  }
  _updateBufferData(e, t) {
    const { x: s, y: i } = this._localOrigin, r = 2 * Zs * t.length, n = new Float32Array(r), a = new Uint32Array(8 * t.length);
    let h = 0, d = 0;
    for (const l of t)
      l && (n[2 * h + 0] = l[0] - s, n[2 * h + 1] = l[1] - i, n[2 * h + 2] = l[0] - s, n[2 * h + 3] = l[3] - i, n[2 * h + 4] = l[2] - s, n[2 * h + 5] = l[3] - i, n[2 * h + 6] = l[2] - s, n[2 * h + 7] = l[1] - i, a[d + 0] = h + 0, a[d + 1] = h + 3, a[d + 2] = h + 3, a[d + 3] = h + 2, a[d + 4] = h + 2, a[d + 5] = h + 1, a[d + 6] = h + 1, a[d + 7] = h + 0, h += 4, d += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(n.buffer) : this._vertexBuffer = ae.createVertex(e, Ce.DYNAMIC_DRAW, n.buffer), this._indexBuffer ? this._indexBuffer.setData(a) : this._indexBuffer = ae.createIndex(e, Ce.DYNAMIC_DRAW, a), !this._vao) {
      const l = Je();
      this._vao = new rt(e, l.attributes, l.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const Je = () => ss("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: nt.FLOAT }] });
class _i extends as {
  constructor(e) {
    super(e), this.hasHighlight = () => !0;
  }
  destroy() {
    super.destroy(), this._boundsRenderer && (this._boundsRenderer.destroy(), this._boundsRenderer = null);
  }
  enableRenderingBounds(e) {
    this._boundsRenderer = new Xs(e), this.requestRender();
  }
  get hasLabels() {
    return !1;
  }
  onTileData(e, t) {
    e.patch(t), this.contains(e) || this.addChild(e), this.requestRender();
  }
  onTileError(e) {
    e.clear(), this.contains(e) || this.addChild(e);
  }
  _renderChildren(e, t) {
    for (const s of this.children)
      s.isReady && s.hasData && (s.commit(e), e.context.setStencilFunction(rs.EQUAL, s.stencilRef, 255), s._displayList.replay(e, s, t));
  }
}
export {
  xi as r,
  _i as t
};
