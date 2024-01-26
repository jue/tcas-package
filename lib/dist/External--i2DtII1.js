import { b4 as N, b5 as y, ae as A, b6 as u, b7 as c } from "./index-HxXrdrYt.js";
class b {
  constructor(e, s, t) {
    this.assetName = e, this.assetMimeType = s, this.parts = t;
  }
  equals(e) {
    return this === e || this.assetName === e.assetName && this.assetMimeType === e.assetMimeType && N(this.parts, e.parts, (s, t) => s.equals(t));
  }
  isOnService(e) {
    return this.parts.every((s) => s.isOnService(e));
  }
  makeHash() {
    let e = "";
    for (const s of this.parts)
      e += s.partHash;
    return e;
  }
  async toBlob(e) {
    const { parts: s } = this;
    if (s.length === 1)
      return s[0].toBlob(e);
    const t = await Promise.all(s.map((a) => a.toBlob(e)));
    return y(e), new Blob(t);
  }
}
class B {
  constructor(e, s) {
    this.partUrl = e, this.partHash = s;
  }
  equals(e) {
    return this === e || this.partUrl === e.partUrl && this.partHash === e.partHash;
  }
  isOnService(e) {
    return this.partUrl.startsWith(`${e.path}/assets/`);
  }
  async toBlob(e) {
    const { data: s } = await A(this.partUrl, { responseType: "blob" });
    return y(e), s;
  }
}
function H(r) {
  return v(r == null ? void 0 : r.source);
}
function f(r) {
  return Array.isArray(r) ? r.every((e) => e instanceof b) : !1;
}
const l = /^(model\/gltf\+json)|(model\/gltf-binary)$/, h = /\.(gltf|glb)/i;
function v(r) {
  return r ? Array.isArray(r) ? r.some(p) : p(r) : !1;
}
function p(r) {
  if (r instanceof File) {
    const { type: e, name: s } = r;
    return l.test(e) || h.test(s);
  }
  return l.test(r.assetMimeType) || h.test(r.assetName);
}
function M(r, e) {
  if (!r)
    return !1;
  const { source: s } = r;
  return T(s, e);
}
function U(r, e) {
  if (r === e)
    return !0;
  const { source: s } = r, { source: t } = e;
  if (s === t)
    return !0;
  if (f(s) && f(t)) {
    if (s.length !== t.length)
      return !1;
    const a = (n, o) => n.assetName < o.assetName ? -1 : n.assetName > o.assetName ? 1 : 0, i = [...s].sort(a), g = [...t].sort(a);
    for (let n = 0; n < i.length; ++n)
      if (!i[n].equals(g[n]))
        return !1;
    return !0;
  }
  return !1;
}
function T(r, e) {
  return Array.isArray(r) ? r.every((s) => m(s, e)) : m(r, e);
}
function m(r, e) {
  return r instanceof b && r.isOnService(e);
}
function q(r, e) {
  return r instanceof File ? u(r.name, e) ?? c(r.type, e) : c(r.assetMimeType, e) ?? u(r.assetName, e);
}
function O(r) {
  return Array.isArray(r) ? r : [r];
}
function S(r) {
  return !!r.original;
}
export {
  S as A,
  O as N,
  b as a,
  q as g,
  U as h,
  B as i,
  M as m,
  H as o
};
