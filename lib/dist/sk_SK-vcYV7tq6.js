import { n as u, o as d } from "./_commonjsHelpers-dNHJ2IQt.js";
function l(o, e) {
  for (var s = 0; s < e.length; s++) {
    const r = e[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in o)) {
          const f = Object.getOwnPropertyDescriptor(r, t);
          f && Object.defineProperty(o, t, f.get ? f : { enumerable: !0, get: () => r[t] });
        }
    }
  }
  return Object.freeze(o);
}
var i, p, a, c, n = { exports: {} };
i = n, p = n.exports, a = function(o, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { "Zoom Out": "Oddialiť", "From %1 to %2": "Z %1 do %2", "From %1": "Z %1", "To %1": "Do %1" };
}, (c = a(u, p)) !== void 0 && (i.exports = c);
const O = d(n.exports), m = Object.freeze(l({ __proto__: null, default: O }, [n.exports]));
export {
  m as s
};
