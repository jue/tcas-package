import { r as c } from "./index-Ek1MTSEY.js";
import { a as h } from "./ProgramTemplate-RS7QiLoF.js";
class f {
  constructor() {
    this._outer = /* @__PURE__ */ new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return this._outer.size === 0;
  }
  get(e, r) {
    var t;
    return (t = this._outer.get(e)) == null ? void 0 : t.get(r);
  }
  set(e, r, t) {
    const o = this._outer.get(e);
    o ? o.set(r, t) : this._outer.set(e, /* @__PURE__ */ new Map([[r, t]]));
  }
  delete(e, r) {
    const t = this._outer.get(e);
    t && (t.delete(r), t.size === 0 && this._outer.delete(e));
  }
  forEach(e) {
    this._outer.forEach((r, t) => e(r, t));
  }
}
class l {
  constructor(e) {
    this._rctx = e, this._store = new f();
  }
  dispose() {
    this._store.forEach((e) => e.forEach((r) => r.dispose())), this._store.clear();
  }
  acquire(e, r, t, o) {
    const s = this._store.get(e, r);
    if (c(s))
      return s.ref(), s;
    const i = new h(this._rctx, e, r, t, o);
    return i.ref(), this._store.set(e, r, i), i;
  }
  get test() {
    let e = 0;
    return this._store.forEach((r) => r.forEach((t) => e += t.hasGLName ? 2 : 1)), { cachedWebGLObjects: e };
  }
}
function _(n) {
  let e = "";
  for (const r in n) {
    const t = n[r];
    if (typeof t == "boolean")
      t && (e += `#define ${r}
`);
    else if (typeof t == "number")
      e += `#define ${r} ${t.toFixed()}
`;
    else if (typeof t == "object") {
      const o = t.options;
      let s = 0;
      for (const i in o)
        e += `#define ${o[i]} ${(s++).toFixed()}
`;
      e += `#define ${r} ${o[t.value]}
`;
    }
  }
  return e;
}
export {
  _ as e,
  l as s
};
