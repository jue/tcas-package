import { n as u, o as l } from "./_commonjsHelpers-dNHJ2IQt.js";
function b(r, e) {
  for (var s = 0; s < e.length; s++) {
    const o = e[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const t in o)
        if (t !== "default" && !(t in r)) {
          const f = Object.getOwnPropertyDescriptor(o, t);
          f && Object.defineProperty(r, t, f.get ? f : { enumerable: !0, get: () => o[t] });
        }
    }
  }
  return Object.freeze(r);
}
var p, a, c, i, n = { exports: {} };
p = n, a = n.exports, c = function(r, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { "Zoom Out": "Отдалечаване", "From %1 to %2": "От %1 до %2", "From %1": "От %1", "To %1": "До %1" };
}, (i = c(u, a)) !== void 0 && (p.exports = i);
const d = l(n.exports), m = Object.freeze(b({ __proto__: null, default: d }, [n.exports]));
export {
  m as b
};
