import { az as l } from "./index-j1oaLRcp.js";
function s(n, r, e) {
  return r.flatten(({ sublayers: i }) => i).length !== n.length ? !0 : !!n.some((i) => i.originIdOf("minScale") > e || i.originIdOf("maxScale") > e || i.originIdOf("renderer") > e || i.originIdOf("labelingInfo") > e || i.originIdOf("opacity") > e || i.originIdOf("labelsVisible") > e || i.originIdOf("source") > e) || !f(n, r);
}
function g(n, r, e) {
  return !!n.some((o) => {
    const i = o.source;
    return !(!i || i.type === "map-layer" && i.mapLayerId === o.id && (!i.gdbVersion || i.gdbVersion === e.gdbVersion)) || o.originIdOf("renderer") > l.SERVICE || o.originIdOf("labelingInfo") > l.SERVICE || o.originIdOf("opacity") > l.SERVICE || o.originIdOf("labelsVisible") > l.SERVICE;
  }) || !f(n, r);
}
function f(n, r) {
  if (!n || !n.length)
    return !0;
  const e = r.slice().reverse().flatten(({ sublayers: t }) => t && t.toArray().reverse()).map((t) => t.id).toArray();
  if (n.length > e.length)
    return !1;
  let o = 0;
  const i = e.length;
  for (const { id: t } of n) {
    for (; o < i && e[o] !== t; )
      o++;
    if (o >= i)
      return !1;
  }
  return !0;
}
function d(n) {
  return !!n && n.some((r) => r.minScale != null || r.layerDefinition && r.layerDefinition.minScale != null);
}
export {
  s as e,
  g as n,
  d as o
};
