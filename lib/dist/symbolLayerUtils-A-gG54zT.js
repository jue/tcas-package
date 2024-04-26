import { bo as p, y as n, r as c, C as h, bp as b, bq as d, ar as w, br as v } from "./index-Ek1MTSEY.js";
import "vue";
let i = a();
function a() {
  return new p(50);
}
function x() {
  i = a();
}
function I(e, r) {
  if (e.type === "icon")
    return y(e, r);
  if (e.type === "object")
    return l(e, r);
  throw new n("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}
async function P(e, r) {
  if (e.type === "icon")
    return z(e, r);
  if (e.type === "object")
    return j(e, r);
  throw new n("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}
async function y(e, r) {
  if (e.resource.href)
    return g(e.resource.href).then((t) => [t.width, t.height]);
  if (e.resource.primitive)
    return c(r) ? [r, r] : [256, 256];
  throw new n("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function z(e, r) {
  return y(e, r).then((t) => {
    if (e.size == null)
      return t;
    const o = t[0] / t[1];
    return o > 1 ? [e.size, e.size / o] : [e.size * o, e.size];
  });
}
function g(e) {
  return h(e, { responseType: "image" }).then((r) => r.data);
}
function l(e, r) {
  return B(e, r).then((t) => b(t));
}
async function j(e, r) {
  const t = await l(e, r);
  return d(t, e);
}
async function B(e, r) {
  if (!e.isPrimitive) {
    const o = e.resource.href, s = i.get(o);
    if (s !== void 0)
      return Promise.resolve(s);
    const f = await import("./objectResourceUtils-OJjWtHkB.js").then((m) => m.o), u = await f.fetch(o, { disableTextures: !0 });
    return i.put(o, u.referenceBoundingBox), u.referenceBoundingBox;
  }
  let t = null;
  if (e.resource && e.resource.primitive && (t = w(v(e.resource.primitive)), c(r)))
    for (let o = 0; o < t.length; o++)
      t[o] *= r;
  return t ? Promise.resolve(t) : Promise.reject(new n("symbol:invalid-resource", "The symbol does not have a valid resource"));
}
export {
  x as clearBoundingBoxCache,
  y as computeIconLayerResourceSize,
  I as computeLayerResourceSize,
  P as computeLayerSize,
  l as computeObjectLayerResourceSize
};
