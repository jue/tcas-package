import { dq as h, H as a, dr as u, aX as v, ds as p, bh as c } from "./index-h53IWweP.js";
import "vue";
let l = b();
function b() {
  return new h(50);
}
async function g(r, i = null) {
  var t;
  if (!r.isPrimitive) {
    const e = r.resource.href;
    if (!e)
      throw new a("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s = l.get(e);
    if (s !== void 0)
      return s;
    const { fetch: f } = await import("./objectResourceUtils-Odu4dTSF.js").then((m) => m.o), d = await f(e, { disableTextures: !0 }), n = u(d.referenceBoundingBox, c());
    return l.put(e, n), n;
  }
  if (!((t = r.resource) != null && t.primitive))
    throw new a("symbol:invalid-resource", "The symbol does not have a valid resource");
  const o = v(p(r.resource.primitive));
  if (i != null)
    for (let e = 0; e < o.length; e++)
      o[e] *= i;
  return u(o, c());
}
export {
  g as computeObjectLayerResourceSize
};
