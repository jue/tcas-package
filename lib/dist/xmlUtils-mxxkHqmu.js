function i(c, e) {
  for (const o of c.children)
    if (o.localName in e) {
      const n = e[o.localName];
      if (typeof n == "function") {
        const f = n(o);
        f && i(o, f);
      } else
        i(o, n);
    }
}
function* l(c, e) {
  for (const o of c.children)
    if (o.localName in e) {
      const n = e[o.localName];
      typeof n == "function" ? yield n(o) : yield* l(o, n);
    }
}
export {
  l as n,
  i as o
};
