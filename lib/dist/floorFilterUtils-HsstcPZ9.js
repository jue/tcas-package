function i(l) {
  var o;
  const n = l.layer;
  return "floorInfo" in n && (o = n.floorInfo) != null && o.floorField && "floors" in l.view ? f(l.view.floors, n.floorInfo.floorField) : null;
}
function e(l, o) {
  var n;
  return "floorInfo" in o && (n = o.floorInfo) != null && n.floorField ? f(l, o.floorInfo.floorField) : null;
}
function t(l, o) {
  const { definitionExpression: n } = o;
  return l ? n ? `(${n}) AND (${l})` : l : n;
}
function f(l, o) {
  if (l == null || !l.length)
    return null;
  const n = l.filter((r) => r !== "").map((r) => `'${r}'`);
  return n.push("''"), `${o} IN (${n.join(",")}) OR ${o} IS NULL`;
}
export {
  t as l,
  e as n,
  i as o
};
