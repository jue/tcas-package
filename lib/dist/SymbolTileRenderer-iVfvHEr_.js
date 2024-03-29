import { r as f, l as u, Z as M, eq as I, cc as x, fH as U, i6 as O, fq as Z, fr as W, fs as j, b9 as E, ft as J, eC as Q, e as tt, a as et, g as st, dh as rt } from "./index-j1oaLRcp.js";
import { s as R } from "./CircularArray-BBR-Bb_W.js";
import { p as P, E as it, I as B } from "./Utils-Mkp4Julu.js";
import { i as F, c as nt, o as at } from "./FeatureContainer-Yy5F93tk.js";
import { c as S, f as ht } from "./VertexArrayObject-WfBtioi6.js";
import { F as q } from "./enums-n72NRQQZ.js";
import { s as ot } from "./schemaUtils-NQXxAz6-.js";
import { o as ut } from "./BaseTileRenderer-L1aZ44cU.js";
import { m as dt } from "./visualVariablesUtils-lTNHq6nM.js";
import { w as y } from "./WGLContainer-Za_nqieP.js";
import "vue";
import "./enums-YM9SAu8u.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./TileContainer-_mN9fJMf.js";
import "./Container-0QnIUm3K.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./MaterialKey-tb9URCR8.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./pixelUtils-Kz9o33NO.js";
import "./ProgramTemplate-i3wM2UDs.js";
import "./StyleDefinition-lNHHnPSw.js";
import "./config-TPD5ZwJG.js";
import "./GeometryUtils-ACqEo_je.js";
import "./earcut-80XuLCNX.js";
const g = 6, V = 4294967296;
let ft = class A {
  constructor(t) {
    this._head = t, this._cursor = t;
  }
  static from(t) {
    const e = lt.from(new Float32Array(t));
    return new A(e);
  }
  get id() {
    return this._cursor.id;
  }
  get baseZoom() {
    return this._cursor.baseZoom;
  }
  get anchorX() {
    return this._cursor.anchorX;
  }
  get anchorY() {
    return this._cursor.anchorY;
  }
  get directionX() {
    return this._cursor.directionX;
  }
  get directionY() {
    return this._cursor.directionY;
  }
  get size() {
    return this._cursor.size;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  get boundsCount() {
    return this._cursor.boundsCount;
  }
  computedMinZoom() {
    return this._cursor.computedMinZoom();
  }
  setComputedMinZoom(t) {
    return this._cursor.setComputedMinZoom(t);
  }
  boundsComputedAnchorX(t) {
    return this._cursor.boundsComputedAnchorX(t);
  }
  boundsComputedAnchorY(t) {
    return this._cursor.boundsComputedAnchorY(t);
  }
  setBoundsComputedAnchorX(t, e) {
    return this._cursor.setBoundsComputedAnchorX(t, e);
  }
  setBoundsComputedAnchorY(t, e) {
    return this._cursor.setBoundsComputedAnchorY(t, e);
  }
  boundsX(t) {
    return this._cursor.boundsX(t);
  }
  boundsY(t) {
    return this._cursor.boundsY(t);
  }
  boundsWidth(t) {
    return this._cursor.boundsWidth(t);
  }
  boundsHeight(t) {
    return this._cursor.boundsHeight(t);
  }
  link(t) {
    if (f(t._head))
      return this._cursor.link(t._head);
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    var t;
    const e = new A((t = this._head) == null ? void 0 : t.copy());
    if (!e._head)
      return e;
    let s = e._head, r = e._head._link;
    for (; r; )
      s._link = r.copy(), s = r, r = s._link;
    return e;
  }
  peekId() {
    var t;
    return (t = this._cursor.peekId()) != null ? t : this._cursor._link.peekId();
  }
  nextId() {
    const t = this.id;
    for (; t === this.id; )
      if (!this.next())
        return !1;
    return !0;
  }
  save() {
    this._savedCursor = this._cursor, this._savedOffset = this._cursor._offset;
  }
  restore() {
    this._cursor = this._savedCursor, this._cursor._offset = this._savedOffset;
  }
  next() {
    if (!this._cursor)
      return !1;
    if (!this._cursor.next()) {
      if (!this._cursor._link)
        return !1;
      this._cursor = this._cursor._link, this._cursor._offset = 0;
    }
    return !0;
  }
  lookup(t) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t); ) {
      if (!this._cursor._link)
        return !1;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  delete(t) {
    let e = this._head, s = null;
    for (; e; ) {
      if (e.delete(t))
        return e.isEmpty() && f(s) && (s._link = e._link), !0;
      s = e, e = e._link;
    }
    return !1;
  }
}, lt = class L {
  constructor(t) {
    this._offset = -1, this._link = null, this._count = 0, this._deletedCount = 0, this._offsets = { instance: null }, this._buffer = t;
  }
  static from(t) {
    return new L(new Float32Array(t));
  }
  isEmpty() {
    return this._deletedCount === this.count;
  }
  get count() {
    return this._count || (this._count = this._computeCount()), this._count;
  }
  get id() {
    return this._buffer[this._offset + 0];
  }
  set id(t) {
    this._buffer[this._offset + 0] = t;
  }
  get baseZoom() {
    return this._buffer[this._offset + 1];
  }
  get anchorX() {
    return this._buffer[this._offset + 2];
  }
  get anchorY() {
    return this._buffer[this._offset + 3];
  }
  get directionX() {
    return this._buffer[this._offset + 4];
  }
  get directionY() {
    return this._buffer[this._offset + 5];
  }
  get size() {
    return this._buffer[this._offset + 6];
  }
  get materialKey() {
    return this._buffer[this._offset + 7];
  }
  computedMinZoom() {
    return this._buffer[this._offset + 8];
  }
  setComputedMinZoom(t) {
    this._buffer[this._offset + 8] = t;
  }
  get boundsCount() {
    return this._buffer[this._offset + 9];
  }
  boundsComputedAnchorX(t) {
    return this._buffer[this._offset + 10 + t * g + 0];
  }
  boundsComputedAnchorY(t) {
    return this._buffer[this._offset + 10 + t * g + 1];
  }
  setBoundsComputedAnchorX(t, e) {
    this._buffer[this._offset + 10 + t * g + 0] = e;
  }
  setBoundsComputedAnchorY(t, e) {
    this._buffer[this._offset + 10 + t * g + 1] = e;
  }
  boundsX(t) {
    return this._buffer[this._offset + 10 + t * g + 2];
  }
  boundsY(t) {
    return this._buffer[this._offset + 10 + t * g + 3];
  }
  boundsWidth(t) {
    return this._buffer[this._offset + 10 + t * g + 4];
  }
  boundsHeight(t) {
    return this._buffer[this._offset + 10 + t * g + 5];
  }
  link(t) {
    let e = this;
    for (; e._link; )
      e = e._link;
    e._link = t;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t = new L(this._buffer);
    return t._link = this._link, t._offset = this._offset, t._deletedCount = this._deletedCount, t._offsets = this._offsets, t._count = this._count, t;
  }
  peekId() {
    const t = this._offset + 10 + this.boundsCount * g + 0;
    return t >= this._buffer.length ? 0 : this._buffer[t];
  }
  next() {
    let t = 0;
    for (; this._offset < this._buffer.length && t++ < 100 && (this._offset === -1 ? this._offset = 0 : this._offset += 10 + this.boundsCount * g, this.id === V); )
      ;
    return this.id !== V && this._offset < this._buffer.length;
  }
  delete(t) {
    const e = this._offset, s = this.lookup(t);
    if (s)
      for (this.id = 4294967295, ++this._deletedCount; this.next() && this.id === t; )
        this.id = 4294967295, ++this._deletedCount;
    return this._offset = e, s;
  }
  lookup(t) {
    const e = this._offset;
    if (u(this._offsets.instance)) {
      this._offsets.instance = /* @__PURE__ */ new Map();
      const s = this.copy();
      s._offset = -1;
      let r = 0;
      for (; s.next(); )
        s.id !== r && (this._offsets.instance.set(s.id, s._offset), r = s.id);
    }
    return !!this._offsets.instance.has(t) && (this._offset = this._offsets.instance.get(t), this.id !== V || (this._offset = e, !1));
  }
  _computeCount() {
    const t = this._offset;
    let e = 0;
    for (this._offset = -1; this.next(); )
      e++;
    return this._offset = t, e;
  }
}, m = class K {
  constructor(t) {
    if (!Array.isArray(t))
      return void (this.data = t);
    this.data = t[0];
    let e = this;
    for (let s = 1; s < t.length; s++)
      e.next = new K([t[s]]), e = e.next;
  }
  *values() {
    let t = this;
    for (; t; )
      yield t.data, t = t.next;
  }
  forEach(t) {
    let e = this;
    for (; e; )
      t(e.data), e = e.next;
  }
  find(t) {
    var e;
    return t(this.data) ? this : (e = this.next) == null ? void 0 : e.find(t);
  }
  max(t, e = this) {
    const s = t(this.data) > t(e.data) ? this : e;
    return this.next ? this.next.max(t, s) : s;
  }
  remove(t, e = null) {
    return this === t ? e ? (e.next = this.next, e) : this.next : this.next.remove(t, this);
  }
  get last() {
    return this.next ? this.next.last : this;
  }
};
class X {
  constructor(t) {
    this._head = null, u(t) || (this._head = new m(t));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (u(this._head))
      return 0;
    const t = this._head.max((e) => e.end - e.start);
    return t.data.end - t.data.start;
  }
  firstFit(t) {
    if (u(this._head))
      return null;
    let e = null, s = this._head;
    for (; s; ) {
      const r = s.data.end - s.data.start;
      if (r === t)
        return e ? e.next = s.next : this._head = s.next, s.data.start;
      if (r > t) {
        const i = s.data.start;
        return s.data.start += t, i;
      }
      e = s, s = s.next;
    }
    return null;
  }
  free(t, e) {
    const s = t + e;
    if (u(this._head)) {
      const h = new m({ start: t, end: s });
      return void (this._head = h);
    }
    if (s <= this._head.data.start) {
      if (s === this._head.data.start)
        return void (this._head.data.start -= e);
      const h = new m({ start: t, end: s });
      return h.next = this._head, void (this._head = h);
    }
    let r = this._head, i = r.next;
    for (; i; ) {
      if (i.data.start >= s) {
        if (r.data.end === t) {
          if (r.data.end += e, r.data.end === i.data.start) {
            const o = i.data.end - i.data.start;
            return r.data.end += o, void (r.next = i.next);
          }
          return;
        }
        if (i.data.start === s)
          return void (i.data.start -= e);
        const h = new m({ start: t, end: s });
        return h.next = r.next, void (r.next = h);
      }
      r = i, i = i.next;
    }
    if (t === r.data.end)
      return void (r.data.end += e);
    const n = new m({ start: t, end: s });
    r.next = n;
  }
}
let b = class {
  constructor(t, e, s, r, i) {
    this.target = t, this.geometryType = e, this.materialKey = s, this.indexFrom = r, this.indexCount = i;
  }
  get indexEnd() {
    return this.indexFrom + this.indexCount;
  }
  extend(t) {
    this.indexCount += t;
  }
}, ct = class N {
  constructor(t, e) {
    this.geometryType = 0, this._target = t, this.geometryType = e;
  }
  static from(t, e, s, r) {
    const i = new N(t, e);
    if (f(r))
      for (const n of r)
        s.seekIndex(n), i.addRecord(s);
    else
      for (; s.next(); )
        i.addRecord(s);
    return i;
  }
  addRecord(t) {
    const e = this._target, s = this.geometryType, r = t.materialKey;
    let i = t.indexFrom, n = t.indexCount;
    const h = t.vertexFrom, o = t.vertexCount;
    if (n || (i = h, n = o), u(this._head)) {
      const c = new b(e, s, r, i, n);
      return void (this._head = new m(c));
    }
    let l = null, d = this._head;
    for (; d; ) {
      if (i < d.data.indexFrom)
        return this._insert(r, i, n, l, d);
      l = d, d = d.next;
    }
    this._insert(r, i, n, l, null);
  }
  forEach(t) {
    f(this._head) && this._head.forEach(t);
  }
  *infos() {
    if (f(this._head))
      for (const t of this._head.values())
        yield t;
  }
  _insert(t, e, s, r, i) {
    if (u(r) && u(i)) {
      const n = new b(this._target, this.geometryType, t, e, s);
      this._head = new m(n);
    }
    return u(r) && f(i) ? this._insertAtHead(t, e, s, i) : f(r) && u(i) ? this._insertAtEnd(t, e, s, r) : f(r) && f(i) ? this._insertAtMiddle(t, e, s, r, i) : void 0;
  }
  _insertAtHead(t, e, s, r) {
    const i = e + s;
    if (t === r.data.materialKey && i === r.data.indexFrom)
      r.data.indexFrom = e, r.data.indexCount += s;
    else {
      const n = new b(this._target, this.geometryType, t, e, s);
      this._head = new m(n), this._head.next = r;
    }
  }
  _insertAtEnd(t, e, s, r) {
    if (r.data.materialKey === t && r.data.indexEnd === e)
      r.data.indexCount += s;
    else {
      const i = new b(this._target, this.geometryType, t, e, s), n = new m(i);
      r.next = n;
    }
  }
  _insertAtMiddle(t, e, s, r, i) {
    const n = e + s;
    if (r.data.materialKey === t && r.data.indexEnd === e)
      r.data.indexCount += s, r.data.materialKey === i.data.materialKey && r.data.indexEnd === i.data.indexFrom && (r.data.indexCount += i.data.indexCount, r.next = i.next);
    else if (t === i.data.materialKey && n === i.data.indexFrom)
      i.data.indexFrom = e, i.data.indexCount += s;
    else {
      const h = new b(this._target, this.geometryType, t, e, s), o = new m(h);
      r.next = o, o.next = i;
    }
  }
};
const Y = M("geoscene-2d-log-allocations");
class C {
  constructor(t) {
    this._array = t;
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  static create(t) {
    const e = w.acquire(t);
    return new C(e);
  }
  expand(t) {
    const e = w.acquire(t);
    e.set(this._array), w.release(this._array), this._array = e;
  }
  destroy() {
    w.release(this._array);
  }
  set(t, e) {
    this._array.set(t._array, e);
  }
  slice() {
    const t = w.acquire(this._array.byteLength);
    return t.set(this._array), new C(t);
  }
}
class v {
  constructor() {
    this._data = new ArrayBuffer(v.BYTE_LENGTH), this._freeList = new X({ start: 0, end: this._data.byteLength });
  }
  static get BYTE_LENGTH() {
    return 64e6;
  }
  get buffer() {
    return this._data;
  }
  allocate(t) {
    const e = this._freeList.firstFit(t);
    return u(e) ? null : new Uint32Array(this._data, e, t / Uint32Array.BYTES_PER_ELEMENT);
  }
  free(t) {
    this._freeList.free(t.byteOffset, t.byteLength);
  }
}
let _t = class {
  constructor() {
    this._bytesAllocated = 0, this._pages = [], this._pagesByBuffer = /* @__PURE__ */ new Map(), this._addPage();
  }
  get _bytesTotal() {
    return this._pages.length * v.BYTE_LENGTH;
  }
  acquire(t) {
    if (this._bytesAllocated += t, Y && console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`), t > v.BYTE_LENGTH)
      return new Uint32Array(t / Uint32Array.BYTES_PER_ELEMENT);
    for (const e of this._pages) {
      const s = e.allocate(t);
      if (f(s))
        return s;
    }
    return I(this._addPage().allocate(t), "Expected to allocate page");
  }
  release(t) {
    this._bytesAllocated -= t.byteLength, Y && console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);
    const e = this._pagesByBuffer.get(t.buffer);
    e && e.free(t);
  }
  _addPage() {
    const t = new v();
    return this._pages.push(t), this._pagesByBuffer.set(t.buffer, t), t;
  }
};
const w = new _t(), pt = 1.25, z = 32767, gt = z << 16 | z;
let D = class {
  constructor(t, e, s) {
    const r = C.create(e * s * Uint32Array.BYTES_PER_ELEMENT);
    this.size = e, this.strideInt = s, this.bufferType = t, this.dirty = { start: 1 / 0, end: 0 }, this._gpu = null, this._cpu = r, this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get invalidated() {
    return this.bufferSize && !this._gpu;
  }
  invalidate() {
    this._invalidateTriangleBuffer(), x(this._gpu, (t) => t.dispose()), this._gpu = null;
  }
  _invalidateTriangleBuffer() {
    x(this._gpuComputeTriangles, (t) => t.dispose()), this._gpuComputeTriangles = null;
  }
  destroy() {
    x(this._gpu, (t) => t.dispose()), x(this._gpuComputeTriangles, (t) => t.dispose()), x(this._cpu, (t) => t.destroy()), x(this._cpu2, (t) => t.destroy());
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new X({ start: 0, end: this._cpu.length / this.strideInt }), this.fillPointer = 0;
  }
  ensure(t) {
    if (!(this.maxAvailableSpace() >= t) && t * this.strideInt > this._cpu.length - this.fillPointer) {
      this.invalidate();
      const e = this._cpu.length / this.strideInt, s = Math.round((e + t) * pt), r = s * this.strideInt;
      this._cpu.expand(r * Uint32Array.BYTES_PER_ELEMENT), this.freeList.free(e, s - e);
    }
  }
  set(t, e) {
    this._cpu.array[t] !== e && (this._cpu.array[t] = e, this.dirty.start = Math.min(t, this.dirty.start), this.dirty.end = Math.max(t, this.dirty.end));
  }
  getGPUBuffer(t, e = !1) {
    if (!this.bufferSize)
      return null;
    if (e) {
      if (this.bufferType !== "index")
        throw new Error("Tired to get triangle buffer, but target is not an index buffer");
      return u(this._gpuComputeTriangles) && (this._gpuComputeTriangles = this._createComputeBuffer(t)), this._gpuComputeTriangles;
    }
    return u(this._gpu) && (this._gpu = this._createBuffer(t)), this._gpu;
  }
  getCPUBuffer() {
    if (!this._cpu2) {
      const t = this._cpu.slice();
      this._cpu2 = t;
    }
    return this._cpu2.length !== this._cpu.length && this._cpu2.expand(this._cpu.length * this._cpu.array.BYTES_PER_ELEMENT), this._cpu2.set(this._cpu), this._cpu2;
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(t, e, s, r) {
    const i = s * this.strideInt;
    if (!i)
      return 0;
    const n = e * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, h = new Uint32Array(t, n, i), o = I(this.freeList.firstFit(s), "First fit region must be defined") * this.strideInt, l = i, d = o / this.strideInt - e;
    if (r !== 0)
      for (let c = 0; c < h.length; c++)
        h[c] += r;
    return this._cpu.array.set(h, o), this.dirty.start = Math.min(this.dirty.start, o), this.dirty.end = Math.max(this.dirty.end, o + l), this.fillPointer = Math.max(this.fillPointer, o + l), d;
  }
  free(t, e, s) {
    const r = t * this.strideInt, i = (t + e) * this.strideInt;
    if (s === !0)
      for (let n = t; n !== t + e; n++)
        this._cpu.array[n * this.strideInt] = gt;
    this.dirty.start = Math.min(this.dirty.start, r), this.dirty.end = Math.max(this.dirty.end, i), this.freeList.free(t, e);
  }
  upload() {
    if (this.dirty.end) {
      if (this._invalidateTriangleBuffer(), u(this._gpu))
        return this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this._gpu.setSubDataFromView(this._cpu.array, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  _createBuffer(t) {
    const e = q.DYNAMIC_DRAW;
    return this.bufferType === "index" ? S.createIndex(t, e, this._cpu.array) : S.createVertex(t, e, this._cpu.array);
  }
  _createComputeBuffer(t) {
    const e = q.DYNAMIC_DRAW, s = new Uint32Array(this.fillPointer / 3);
    for (let r = 0; r < this.fillPointer; r += 3)
      s[r / 3] = this._cpu.array[r];
    return S.createIndex(t, e, s);
  }
};
const mt = 0, yt = 1;
let xt = class {
  constructor(t, e) {
    this._vaos = /* @__PURE__ */ new Map(), this._indicesInvalid = !1, this.geometryType = t;
  }
  destroy() {
    for (const [t, e] of this._vaos)
      f(e) && e.dispose(!1);
    this._indexBuffer = U(this._indexBuffer), this._vertexBuffer = U(this._vertexBuffer);
  }
  insert(t, e, s) {
    if (!t.records.byteLength)
      return;
    const r = t.stride;
    if (this._vertexBuffer && this._indexBuffer) {
      const i = t.indices.byteLength / 4, n = t.vertices.byteLength / r;
      this._indexBuffer.ensure(i), this._vertexBuffer.ensure(n);
      const { vertices: h, indices: o } = t, l = F.from(t.records), d = this._vertexBuffer.insert(h, 0, h.byteLength / r, 0), c = this._indexBuffer.insert(o, 0, o.byteLength / 4, d);
      if (l.forEach((_) => {
        _.indexFrom += c, _.vertexFrom += d;
      }), I(this._records, "Expected records to be defined").link(l), e)
        this._indicesInvalid = !0;
      else if (this._displayList) {
        const _ = l.getCursor();
        for (; _.next(); )
          this._displayList.addRecord(_);
      }
    } else {
      const i = t.indices.byteLength / 4, n = t.vertices.byteLength / r, h = r / Uint32Array.BYTES_PER_ELEMENT;
      this._records = F.from(t.records), this._indexBuffer = new D("index", i, 1), this._vertexBuffer = new D("vertex", n, h), this._indexBuffer.insert(t.indices, 0, t.indices.byteLength / 4, 0), this._vertexBuffer.insert(t.vertices, 0, t.vertices.byteLength / r, 0), e && (this._indicesInvalid = !0);
    }
  }
  remove(t) {
    if (!u(this._records))
      for (const e of t) {
        const s = this._records.getCursor();
        if (!s.lookup(e))
          continue;
        const r = s.indexFrom, i = s.vertexFrom;
        let n = s.indexCount, h = s.vertexCount;
        for (; s.next() && s.id === e; )
          n += s.indexCount, h += s.vertexCount;
        this._indexBuffer.free(r, n), this._vertexBuffer.free(i, h, !0), this._records.delete(e);
      }
  }
  getVAO(t, e, s, r) {
    if (!this._vertexBuffer || !this._indexBuffer || u(this._records) || !this._vertexBuffer.bufferSize)
      return null;
    const i = r ? yt : mt;
    let n = this._vaos.get(i);
    (this._vertexBuffer.invalidated || this._indexBuffer.invalidated) && (x(n, (l) => l.dispose(!1)), n = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
    const h = this._indexBuffer.getGPUBuffer(t, i === 1), o = this._vertexBuffer.getGPUBuffer(t);
    return n || (n = new ht(t, s, e, { geometry: o }, h), this._vaos.set(i, n)), n;
  }
  forEachCommand(t) {
    if (!u(this._records)) {
      if (this._sortIndices(this._records), !this._displayList) {
        const e = this._cursorIndexOrder;
        this._displayList = ct.from(this, this.geometryType, this._records.getCursor(), e);
      }
      this._displayList.forEach(t);
    }
  }
  _sortIndices(t) {
    const e = !!this._indexBuffer.bufferSize;
    if (!this._indicesInvalid)
      return;
    this._indicesInvalid = !1;
    let s = 0;
    const r = t.getCursor(), i = [], n = [], h = [];
    for (; r.next(); )
      n.push(r.index), h.push(r.sortKey), i.push(r.id);
    n.sort((d, c) => {
      const _ = h[c], p = h[d];
      return p === _ ? i[c] - i[d] : _ - p;
    });
    const o = t.getCursor(), l = e ? this._indexBuffer.getCPUBuffer() : this._vertexBuffer.getCPUBuffer();
    for (const d of n) {
      if (!o.seekIndex(d))
        throw new Error("Expected to find index");
      if (e) {
        const { indexFrom: c, indexCount: _ } = o;
        o.indexFrom = s;
        for (let p = 0; p < _; p++)
          this._indexBuffer.set(s++, l.array[c + p]);
      } else {
        const { vertexFrom: c, vertexCount: _ } = o, p = this._vertexBuffer.strideInt, $ = c * p, G = $ + _ * p;
        o.vertexFrom = s / p;
        for (let T = $; T < G; T++)
          this._vertexBuffer.set(s++, l.array[T]);
      }
    }
    this._cursorIndexOrder = n, this._displayList = null;
  }
};
const bt = 50, wt = 4, vt = 8, H = 100;
let Et = 0;
class Ct extends nt {
  constructor(t, e, s, r, i) {
    super(t, e, s), this.instanceId = Et++, this.patchCount = 0, this._renderState = { current: { geometry: /* @__PURE__ */ new Map(), metrics: null }, next: null, swap: !1, swapFrames: 0, locked: !1 }, this._patches = new R(H), this._bufferPatches = new R(H), this._lastCommitTime = 0, this._lastMessageWasClear = !1, this.transforms.labelMat2d = O(), this._store = r, this._requestLabelUpdate = i;
  }
  destroy() {
    super.destroy(), this._renderState.current.geometry.forEach((t) => t.destroy());
  }
  get labelMetrics() {
    return this._renderState.current.metrics;
  }
  get hasData() {
    return !!this._renderState.current.geometry.size;
  }
  getGeometry(t) {
    return this._renderState.current.geometry.get(t);
  }
  setTransform(t, e) {
    super.setTransform(t, e);
    const s = this.transforms.labelMat2d, r = t.getScreenTransform(s, e), i = J();
    Z(i, [this.x, this.y], r), W(s, i), j(s, t.viewMat2d, s);
  }
  patch(t, e) {
    if (this.patchCount++, t.clear && this._lastMessageWasClear)
      return;
    this._lastMessageWasClear = t.clear, t.clear && this._patches.size >= bt && this._dropPatches();
    const s = t, r = s.addOrUpdate && this.key.id !== s.addOrUpdate.tileKeyOrigin;
    e && r ? this._bufferPatches.enqueue(s) : (s.sort = s.sort && !e, this._patches.enqueue(s)), this.requestRender();
  }
  commit(t) {
    if (this._lastCommitTime !== t.time) {
      this._lastCommitTime = t.time;
      for (let e = 0; e < wt; e++)
        this._updateMesh(), this.isReady && this._updateBufferMesh();
      this._renderState.swap && (this._swapRenderStates(), this.requestRender());
    }
  }
  lock() {
    this._renderState.locked = !0;
  }
  unlock() {
    this._renderState.locked = !1, this._flushUpdates(), this._swap();
  }
  _swapRenderStates() {
    if (this._renderState.next) {
      if (this._renderState.locked)
        return this._renderState.swap = !0, void this.requestRender();
      if (this._renderState.swap = !0, this._renderState.swapFrames === 0)
        return this._renderState.swapFrames = vt, void this.requestRender();
      this._renderState.swapFrames-- == 1 ? this._swap() : this.requestRender();
    }
  }
  _swap() {
    this._renderState.swap && (this._renderState.swap = !1, f(this._renderState.next) && (this._renderState.current.geometry.forEach((t) => t.destroy()), this._renderState.current = this._renderState.next, this._renderState.next = null, this._requestLabelUpdate()));
  }
  _flushUpdates() {
    let t = this._patches.maxSize;
    for (; this._patches.size && t--; )
      this._updateMesh(), this._swap();
  }
  _updateBufferMesh() {
    const t = this._bufferPatches.peek();
    if (!f(t) || !t.clear || this._renderState.next === null)
      for (; this._bufferPatches.size; ) {
        const e = this._bufferPatches.dequeue();
        f(e) && this._patchBuffer(e);
      }
  }
  _updateMesh() {
    const t = this._patches.peek();
    if (f(t) && t.clear && this._renderState.next !== null)
      return;
    const e = this._patches.dequeue();
    if (f(e)) {
      if (e.clear === !0)
        return this.isReady ? (this._renderState.next, void (this._renderState.next = { geometry: /* @__PURE__ */ new Map(), metrics: null })) : void 0;
      this.requestRender(), this._patch(e), e.end && (this.ready(), this._swapRenderStates());
    }
  }
  _patch(t) {
    P((e) => {
      this._remove(e, t.remove), this._insert(e, t, !1);
    });
  }
  _patchBuffer(t) {
    P((e) => {
      this._insert(e, t, !0);
    });
  }
  _insert(t, e, s) {
    try {
      var r;
      const i = E(this._renderState.next, this._renderState.current), n = (r = e.addOrUpdate) == null ? void 0 : r.data[t], h = i.geometry;
      if (u(n))
        return;
      h.has(t) || h.set(t, new xt(t, this.stage)), h.get(t).insert(n, e.sort, s), t === it.LABEL && this._insertLabelMetrics(e.type, n.metrics, e.clear);
    } catch {
    }
  }
  _insertLabelMetrics(t, e, s) {
    const r = E(this._renderState.next, this._renderState.current);
    if (u(e))
      return;
    const i = ft.from(e);
    if (u(r.metrics))
      r.metrics = i;
    else {
      if (t === "update") {
        const n = i.getCursor();
        for (; n.next(); )
          r.metrics.delete(n.id);
      }
      r.metrics.link(i);
    }
  }
  _remove(t, e) {
    const s = E(this._renderState.next, this._renderState.current).geometry.get(t);
    e && e.length && s && (s.remove(e), this._removeLabelMetrics(e));
  }
  _removeLabelMetrics(t) {
    const { metrics: e } = E(this._renderState.next, this._renderState.current);
    if (!u(e) && t.length)
      for (const s of t)
        for (; e.delete(s); )
          ;
  }
  _dropPatches() {
    const t = new Array();
    let e = !1;
    for (; this._patches.size; ) {
      const s = this._patches.dequeue();
      if (u(s))
        break;
      if (s.clear) {
        if (e)
          break;
        e = !0;
      }
      t.push(s);
    }
    this._patches.clear(), t.forEach((s) => this._patches.enqueue(s));
  }
}
const Tt = M("featurelayer-order-by-server-enabled");
class Bt extends at {
  constructor(t, e, s, r) {
    super(t), this._pointToCallbacks = [], this._layer = s, this._layerView = e, this._onUpdate = r;
  }
  renderChildren(t) {
    this.attributeView.update(), this.hasAnimation && t.painter.effects.integrate.draw(t, t.attributeView), super.renderChildren(t);
  }
  hasEmptyAttributeView() {
    return this.attributeView.isEmpty();
  }
  isUpdating() {
    return this.attributeView.isUpdating();
  }
  hitTest(t) {
    const e = Q();
    return this._pointToCallbacks.push({ point: t, resolver: e }), this.requestRender(), e.promise;
  }
  onTileData(t, e) {
    const s = Tt && "orderBy" in this._layer && this._layer.orderBy, r = (s == null ? void 0 : s.length) && !s[0].valueExpression && s[0].field, i = s && this._layerView.orderByFields === r;
    t.patch(e, i), this.contains(t) || this.addChild(t), this.requestRender();
  }
  onTileError(t) {
    this.contains(t) || this.addChild(t);
  }
  updateTransitionProperties(t, e) {
    super.updateTransitionProperties(t, e), this._layerView.featureEffectView.transitionStep(t, e), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(t) {
    const { minScale: e, maxScale: s } = this._layer, r = t.state.scale;
    r <= (e || 1 / 0) && r >= s && super.doRender(t);
  }
  onAttributeStoreUpdate() {
    this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this._onUpdate();
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  setStencilReference(t) {
    if (t.rendererInfo.ddDotSize > 1)
      for (const s of this.children)
        s.stencilRef = s.key.level + 1;
    else
      super.setStencilReference(t);
  }
  get hasLabels() {
    if ("sublayers" in this._layer)
      return this._layer.sublayers.some((s) => s.labelingInfo && s.labelingInfo.length && s.labelsVisible);
    const t = this._layer.featureReduction, e = t && t.type === "cluster" && t.labelsVisible && t.labelingInfo && t.labelingInfo.length;
    return this._layer.labelingInfo && this._layer.labelingInfo.length && this._layer.labelsVisible || !!e;
  }
  prepareRenderPasses(t) {
    const e = t.registerRenderPass({ name: "label", brushes: [y.label], target: () => this.hasLabels ? this.children : null, drawPhase: B.LABEL | B.LABEL_ALPHA }), s = t.registerRenderPass({ name: "geometry", brushes: [y.fill, y.line, y.marker, y.text], target: () => this.children, enableDefaultDraw: () => !this._layerView.featureEffectView.hasEffects, effects: [{ apply: t.effects.outsideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.excludedEffects }, { apply: t.effects.insideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.includedEffects }, { apply: t.effects.hittest, enable: () => !!this._pointToCallbacks.length, args: () => this._pointToCallbacks }] }), r = t.registerRenderPass({ name: "highlight", brushes: [y.fill, y.line, y.marker, y.text], target: () => this.children, drawPhase: B.HIGHLIGHT, enableDefaultDraw: () => !1, effects: [{ apply: t.effects.highlight, enable: () => !!this._layerView.hasHighlight() }] });
    return [...super.prepareRenderPasses(t), s, r, e];
  }
}
let k = class extends ut {
  install(a) {
    const t = () => this.notifyChange("updating"), e = new Bt(this.tileInfoView, this.layerView, this.layer, t);
    this.featuresView = e, a.addChild(e);
  }
  uninstall(a) {
    a.removeChild(this.featuresView), this.featuresView.destroy(), this.featuresView = null;
  }
  fetchResource(a, t) {
    const { url: e } = a, s = this.featuresView.stage;
    try {
      return s.resourceManager.fetchResource(e, { signal: t.signal });
    } catch (r) {
      return st(r) ? Promise.resolve({ width: 0, height: 0 }) : Promise.reject(r);
    }
  }
  isUpdating() {
    var a;
    const t = super.isUpdating(), e = !this.featuresView || this.featuresView.isUpdating(), s = (a = this.featuresView) == null ? void 0 : a.hasEmptyAttributeView(), r = t || e || t && s;
    return M("geoscene-2d-log-updating") && console.log(`Updating SymbolTileRenderer ${r}
  -> updatingTiles ${t}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${e}`), r;
  }
  hitTest(a) {
    return this.featuresView.hitTest(a);
  }
  supportsRenderer(a) {
    return a != null && ["simple", "class-breaks", "unique-value", "dot-density", "dictionary"].indexOf(a.type) !== -1;
  }
  onConfigUpdate(a) {
    let t = null;
    if ("visualVariables" in a) {
      const e = (ot(a).visualVariables || []).map((s) => {
        const r = s.clone();
        return "normalizationField" in s && (r.normalizationField = null), s.valueExpression && s.valueExpression !== "$view.scale" && (r.valueExpression = null, r.field = "nop"), r;
      });
      t = dt(e);
    }
    this.featuresView.setRendererInfo(a, t, this.layerView.featureEffect);
  }
  onTileData(a) {
    const t = this.tiles.get(a.tileKey);
    t && a.data && this.featuresView.onTileData(t, a.data), this.layerView.view.labelManager.requestUpdate();
  }
  onTileError(a) {
    const t = this.tiles.get(a.tileKey);
    t && this.featuresView.onTileError(t);
  }
  forceAttributeTextureUpload() {
    this.featuresView.attributeView.forceTextureUpload();
  }
  lockGPUUploads() {
    this.featuresView.attributeView.lockTextureUpload(), this.tiles.forEach((a) => a.lock());
  }
  unlockGPUUploads() {
    this.featuresView.attributeView.unlockTextureUpload(), this.tiles.forEach((a) => a.unlock());
  }
  async getMaterialItems(a) {
    return this.featuresView.getMaterialItems(a);
  }
  invalidateLabels() {
    this.featuresView.hasLabels && this.layerView.view.labelManager.requestUpdate();
  }
  createTile(a) {
    const t = this.tileInfoView.getTileBounds(rt(), a), e = () => this.layerView.view.labelManager.requestUpdate();
    return new Ct(a, t[0], t[3], this.featuresView.attributeView, e);
  }
  disposeTile(a) {
    this.featuresView.removeChild(a), a.destroy(), this.layerView.view.labelManager.requestUpdate();
  }
};
k = tt([et("geoscene.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], k);
const oe = k;
export {
  oe as default
};
