import { y as we, O as ve, N as Ne, P as Ie, o as be, r as Se, f as Te, S as Oe, p as Re, u as Ae, I as Ce, g as Ue, b as f, a as T, _ as fe, e as Me, s as Fe } from "./arcadeUtils-9hqHphUR.js";
import { cj as h, ck as H, cl as R, cm as D, cn as F, m as xe, co as I, cp as Q, cq as u, cr as A, cs as Y, ct as V, cu as v, cv as m, cw as G, cx as N, cy as L, cz as P, cA as x, cB as he, cC as M, cD as p, cE as ae, cF as C, cG as De, cH as q, cI as Le, cJ as Pe, cK as ke, cL as _e, cM as oe, cN as je, ab as Ve, ac as Be, ad as Ye, ae as Ge, M as ze, cO as He } from "./index-j1oaLRcp.js";
import { registerFunctions as qe } from "./geomasync-RYr55Mi7.js";
import "vue";
import "./geometryEngineAsync-yfpffnx_.js";
function ce(r) {
  return r && typeof r.then == "function";
}
const z = 100;
function g(r) {
  return r instanceof Error ? v(r) : v(new Error(r));
}
function pe(r) {
  return m(r);
}
function $(r, e) {
  const n = [];
  for (let t = 0; t < e.arguments.length; t++)
    n.push(i(r, e.arguments[t]));
  return D(n);
}
function S(r, e, n) {
  return h((t, a) => {
    if (e.preparsed === !0)
      return t(n(r, null, e.arguments));
    $(r, e).then((o) => {
      try {
        t(n(r, e, o));
      } catch (c) {
        a(c);
      }
    }, a);
  });
}
function _(r, e, n) {
  try {
    if (e.preparsed === !0) {
      const t = n(r, null, e.arguments);
      return ce(t) ? t : m(t);
    }
    return $(r, e).then((t) => {
      try {
        const a = n(r, e, t);
        return ce(a) ? a : m(a);
      } catch (a) {
        return g(a);
      }
    });
  } catch (t) {
    return g(t);
  }
}
function i(r, e, n) {
  try {
    if (e.breakpoint && n !== !0)
      return e.breakpoint().then(() => i(r, e, !0));
    switch (e.type) {
      case "VariableDeclarator":
        return sr(r, e);
      case "VariableDeclaration":
        return ge(r, e, 0);
      case "BlockStatement":
        return ar(r, e);
      case "FunctionDeclaration":
        return cr(r, e);
      case "ReturnStatement":
        return or(r, e);
      case "IfStatement":
        return tr(r, e);
      case "ExpressionStatement":
        return nr(r, e);
      case "UpdateExpression":
        return er(r, e);
      case "AssignmentExpression":
        return rr(r, e);
      case "ForStatement":
        return Je(r, e);
      case "ForInStatement":
        return $e(r, e);
      case "BreakStatement":
        return m(A);
      case "EmptyStatement":
        return m(u);
      case "ContinueStatement":
        return m(Y);
      case "TemplateElement":
        return dr(r, e);
      case "TemplateLiteral":
        return gr(r, e);
      case "Identifier":
        return ee(r, e);
      case "MemberExpression":
        return lr(r, e);
      case "Literal":
        return pe(e.value);
      case "CallExpression":
        return pr(r, e);
      case "UnaryExpression":
        return ir(r, e);
      case "BinaryExpression":
        return fr(r, e);
      case "LogicalExpression":
        return hr(r, e);
      case "ArrayExpression":
        return ur(r, e);
      case "ObjectExpression":
        return Ze(r, e);
      case "Property":
        return Ke(r, e);
      default:
        return g(f(e, "RUNTIME", "UNREOGNISED"));
    }
  } catch (t) {
    return g(t);
  }
}
function Ze(r, e) {
  try {
    const n = [];
    for (let t = 0; t < e.properties.length; t++)
      n.push(i(r, e.properties[t]));
    return D(n).then((t) => h((a) => {
      const o = {};
      for (let s = 0; s < t.length; s++) {
        const l = t[s];
        if (G(l.value))
          throw new Error("Illegal Argument");
        if (N(l.key) === !1)
          throw new Error("Illegal Argument");
        l.value === u ? o[l.key.toString()] = null : o[l.key.toString()] = l.value;
      }
      const c = new T(o);
      c.immutable = !1, a(c);
    }));
  } catch (n) {
    return g(n);
  }
}
function Ke(r, e) {
  try {
    return i(r, e.value).then((n) => h((t) => {
      e.key.type === "Identifier" ? t({ key: e.key.name, value: n }) : i(r, e.key).then((a) => {
        t({ key: a, value: n });
      });
    }));
  } catch (n) {
    return v(n);
  }
}
function se(r, e, n) {
  try {
    return i(r, e.body).then((t) => {
      try {
        return n.lastAction = t, n.lastAction === A || n.lastAction instanceof I ? (n.testResult = !1, m(n)) : e.update !== null ? i(r, e.update).then(() => m(n)) : m(n);
      } catch (a) {
        return v(a);
      }
    });
  } catch (t) {
    return v(t);
  }
}
function We(r, e, n) {
  try {
    return e.test !== null ? i(r, e.test).then((t) => {
      try {
        return r.abortSignal.aborted === !0 ? v(new Error("Cancelled")) : (n.testResult = t, n.testResult === !1 ? m(n) : n.testResult !== !0 ? v(new Error(f(e, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"))) : se(r, e, n));
      } catch (a) {
        return v(a);
      }
    }) : se(r, e, n);
  } catch (t) {
    return v(t);
  }
}
function B(r, e, n, t, a, o) {
  try {
    We(r, e, n).then(() => {
      try {
        n.testResult === !0 ? ++o > z ? (o = 0, setTimeout(() => {
          B(r, e, n, t, a, o);
        }, 0)) : B(r, e, n, t, a, o) : n.lastAction instanceof I ? t(n.lastAction) : t(u);
      } catch (c) {
        a(c);
      }
    }, (c) => {
      a(c);
    });
  } catch (c) {
    a(c);
  }
}
function Je(r, e) {
  try {
    return e.init !== null ? i(r, e.init).then(() => h((n, t) => {
      B(r, e, { testResult: !0, lastAction: u }, (a) => {
        n(a);
      }, (a) => {
        t(a);
      }, 0);
    })) : h((n, t) => {
      B(r, e, { testResult: !0, lastAction: u }, (a) => {
        n(a);
      }, (a) => {
        t(a);
      }, 0);
    });
  } catch (n) {
    return v(n);
  }
}
function Z(r, e, n, t, a, o, c, s, l, E) {
  try {
    if (t <= o)
      return void s(u);
    a.value = c === "k" ? n[o] : o, i(r, e.body).then((d) => {
      try {
        d instanceof I ? s(d) : d === A ? s(u) : ++E > z ? (E = 0, setTimeout(() => {
          Z(r, e, n, t, a, o + 1, c, s, l, E);
        }, 0)) : Z(r, e, n, t, a, o + 1, c, s, l, E);
      } catch (y) {
        l(y);
      }
    }, (d) => {
      l(d);
    });
  } catch (d) {
    l(d);
  }
}
function K(r, e, n, t, a, o, c, s, l) {
  try {
    if (n.length() <= a)
      return void c(u);
    t.value = o === "k" ? n.get(a) : a, i(r, e.body).then((E) => {
      E instanceof I ? c(E) : E === A ? c(u) : ++l > z ? (l = 0, setTimeout(() => {
        K(r, e, n, t, a + 1, o, c, s, l);
      }, 0)) : K(r, e, n, t, a + 1, o, c, s, l);
    }, (E) => {
      s(E);
    });
  } catch (E) {
    s(E);
  }
}
function W(r, e, n, t, a, o) {
  try {
    if (o === void 0 && (o = "i"), n.length === 0)
      return void t.resolve(u);
    Z(r, e, n, n.length, a, 0, o, (c) => {
      t.resolve(c);
    }, (c) => {
      t.reject(c);
    }, 0);
  } catch (c) {
    t.reject(c);
  }
}
function Xe(r, e, n, t, a, o) {
  try {
    if (o === void 0 && (o = "i"), n.length === 0)
      return void t.resolve(u);
    K(r, e, n, a, 0, o, (c) => {
      t.resolve(c);
    }, (c) => {
      t.reject(c);
    }, 0);
  } catch (c) {
    t.reject(c);
  }
}
function Qe(r, e, n, t, a) {
  try {
    W(r, e, n.keys(), t, a, "k");
  } catch (o) {
    t.reject(o);
  }
}
function J(r, e, n, t, a, o, c, s) {
  try {
    r.next().then((l) => {
      try {
        if (l === null)
          o(u);
        else {
          const E = fe.createFromGraphicLikeObject(l.geometry, l.attributes, t);
          E._underlyingGraphic = l, a.value = E, i(e, n.body).then((d) => {
            try {
              d === A ? o(u) : d instanceof I ? o(d) : ++s > z ? (s = 0, setTimeout(() => {
                J(r, e, n, t, a, o, c, s);
              }, 0)) : J(r, e, n, t, a, o, c, s);
            } catch (y) {
              c(y);
            }
          }, (d) => {
            c(d);
          });
        }
      } catch (E) {
        c(E);
      }
    }, (l) => {
      c(l);
    });
  } catch (l) {
    c(l);
  }
}
function $e(r, e) {
  return h((n, t) => {
    i(r, e.right).then((a) => {
      try {
        let o = null;
        o = e.left.type === "VariableDeclaration" ? i(r, e.left) : m(), o.then(() => {
          try {
            let c = "";
            if (e.left.type === "VariableDeclaration") {
              const l = e.left.declarations[0].id;
              l.type === "Identifier" && (c = l.name);
            } else
              e.left.type === "Identifier" && (c = e.left.name);
            if (!c)
              throw new Error(f(e, "RUNTIME", "INVALIDVARIABLE"));
            c = c.toLowerCase();
            let s = null;
            if (r.localScope !== null && r.localScope[c] !== void 0 && (s = r.localScope[c]), s === null && r.globalScope[c] !== void 0 && (s = r.globalScope[c]), s === null)
              return void t(new Error(f(e, "RUNTIME", "VARIABLENOTDECLARED")));
            L(a) || N(a) ? W(r, e, a, { reject: t, resolve: n }, s) : P(a) ? Xe(r, e, a, { reject: t, resolve: n }, s) : a instanceof T || x(a) ? Qe(r, e, a, { reject: t, resolve: n }, s) : he(a) ? J(a.iterator(r.abortSignal), r, e, a, s, (l) => {
              n(l);
            }, (l) => {
              t(l);
            }, 0) : W(r, e, [], { reject: t, resolve: n }, s);
          } catch (c) {
            t(c);
          }
        }, t);
      } catch (o) {
        t(o);
      }
    }, t);
  });
}
function er(r, e) {
  try {
    const n = e.argument;
    if (n.type === "MemberExpression") {
      const t = { t: null };
      return i(r, n.object).then((a) => {
        let o = null;
        return t.t = a, n.computed === !0 ? o = i(r, n.property) : n.property.type === "Identifier" && (o = m(n.property.name)), o;
      }).then((a) => h((o) => {
        const c = t.t;
        let s;
        if (L(c)) {
          if (!M(a))
            throw new Error("Invalid Parameter");
          if (a < 0 && (a = c.length + a), a < 0 || a >= c.length)
            throw new Error("Assignment outside of array bounds");
          s = p(c[a]), c[a] = e.operator === "++" ? s + 1 : s - 1;
        } else if (c instanceof T) {
          if (N(a) === !1)
            throw new Error("Dictionary accessor must be a string");
          if (c.hasField(a) !== !0)
            throw new Error("Invalid Parameter");
          s = p(c.field(a)), c.setField(a, e.operator === "++" ? s + 1 : s - 1);
        } else {
          if (!x(c))
            throw P(c) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
          if (N(a) === !1)
            throw new Error("Feature accessor must be a string");
          if (c.hasField(a) !== !0)
            throw new Error("Invalid Parameter");
          s = p(c.field(a)), c.setField(a, e.operator === "++" ? s + 1 : s - 1);
        }
        e.prefix === !1 ? o(s) : o(e.operator === "++" ? s + 1 : s - 1);
      }));
    }
    return h((t, a) => {
      const o = e.argument.type === "Identifier" ? e.argument.name.toLowerCase() : "";
      if (!o)
        throw new Error("Invalid identifier");
      let c;
      return r.localScope !== null && r.localScope[o] !== void 0 ? (c = p(r.localScope[o].value), r.localScope[o] = { value: e.operator === "++" ? c + 1 : c - 1, valueset: !0, node: e }, void (e.prefix === !1 ? t(c) : t(e.operator === "++" ? c + 1 : c - 1))) : r.globalScope[o] !== void 0 ? (c = p(r.globalScope[o].value), r.globalScope[o] = { value: e.operator === "++" ? c + 1 : c - 1, valueset: !0, node: e }, void (e.prefix === !1 ? t(c) : t(e.operator === "++" ? c + 1 : c - 1))) : void a(new Error("Variable not recognised"));
    });
  } catch (n) {
    return v(n);
  }
}
function O(r, e, n, t) {
  switch (e) {
    case "=":
      return r === u ? null : r;
    case "/=":
      return p(n) / p(r);
    case "*=":
      return p(n) * p(r);
    case "-=":
      return p(n) - p(r);
    case "+=":
      return N(n) || N(r) ? C(n) + C(r) : p(n) + p(r);
    case "%=":
      return p(n) % p(r);
    default:
      throw new Error(f(t, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}
function rr(r, e) {
  return h((n, t) => {
    const a = e.left;
    if (a.type === "MemberExpression")
      i(r, e.right).then((o) => {
        try {
          i(r, a.object).then((c) => {
            try {
              let s = null;
              if (a.computed === !0)
                s = i(r, a.property);
              else {
                if (a.property.type !== "Identifier")
                  throw new Error("Expected computed or identifier for assignemnt target");
                s = m(a.property.name);
              }
              s.then((l) => {
                try {
                  if (L(c)) {
                    if (!M(l))
                      throw new Error("Invalid Parameter");
                    if (l < 0 && (l = c.length + l), l < 0 || l > c.length)
                      throw new Error("Assignment outside of array bounds");
                    if (l === c.length) {
                      if (e.operator !== "=")
                        throw new Error("Invalid Parameter");
                      c[l] = O(o, e.operator, c[l], e);
                    } else
                      c[l] = O(o, e.operator, c[l], e);
                  } else if (c instanceof T) {
                    if (N(l) === !1)
                      throw new Error("Dictionary accessor must be a string");
                    if (c.hasField(l) === !0)
                      c.setField(l, O(o, e.operator, c.field(l), e));
                    else {
                      if (e.operator !== "=")
                        throw new Error("Invalid Parameter");
                      c.setField(l, O(o, e.operator, null, e));
                    }
                  } else {
                    if (!x(c))
                      throw P(c) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                    if (N(l) === !1)
                      throw new Error("Feature accessor must be a string");
                    if (c.hasField(l) === !0)
                      c.setField(l, O(o, e.operator, c.field(l), e));
                    else {
                      if (e.operator !== "=")
                        throw new Error("Invalid Parameter");
                      c.setField(l, O(o, e.operator, null, e));
                    }
                  }
                  n(u);
                } catch (E) {
                  t(E);
                }
              }, t);
            } catch (s) {
              t(s);
            }
          }, t);
        } catch (c) {
          t(c);
        }
      }, t);
    else {
      const o = a.name.toLowerCase();
      if (r.localScope !== null && r.localScope[o] !== void 0)
        return void i(r, e.right).then((c) => {
          try {
            r.localScope[o] = { value: O(c, e.operator, r.localScope[o].value, e), valueset: !0, node: e.right }, n(u);
          } catch (s) {
            t(s);
          }
        }, t);
      r.globalScope[o] !== void 0 ? i(r, e.right).then((c) => {
        try {
          r.globalScope[o] = { value: O(c, e.operator, r.globalScope[o].value, e), valueset: !0, node: e.right }, n(u);
        } catch (s) {
          t(s);
        }
      }, t) : t(new Error("Cannot assign undeclared variable"));
    }
  });
}
function nr(r, e) {
  try {
    return e.expression.type === "AssignmentExpression" ? i(r, e.expression) : (e.expression.type, i(r, e.expression).then((n) => h((t) => {
      t(n === u ? u : new Q(n));
    })));
  } catch (n) {
    return v(n);
  }
}
function tr(r, e) {
  return h((n, t) => {
    e.test.type !== "AssignmentExpression" && e.test.type !== "UpdateExpression" ? i(r, e.test).then((a) => {
      try {
        a === !0 ? i(r, e.consequent).then(n, t) : a === !1 ? e.alternate !== null ? i(r, e.alternate).then(n, t) : n(u) : t(new Error(f(e.test, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION")));
      } catch (o) {
        t(o);
      }
    }, t) : t(new Error(f(e.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
  });
}
function ar(r, e) {
  try {
    return de(r, e, 0);
  } catch (n) {
    return g(n);
  }
}
function de(r, e, n) {
  try {
    return n >= e.body.length ? m(u) : h((t, a) => {
      i(r, e.body[n]).then((o) => {
        try {
          o instanceof I || o === A || o === Y || n === e.body.length - 1 ? t(o) : de(r, e, n + 1).then(t, a);
        } catch (c) {
          a(c);
        }
      }, a);
    });
  } catch (t) {
    return g(t);
  }
}
function or(r, e) {
  return h((n, t) => {
    e.argument === null ? n(new I(u)) : i(r, e.argument).then((a) => {
      try {
        n(new I(a));
      } catch (o) {
        t(o);
      }
    }, t);
  });
}
function cr(r, e) {
  try {
    const n = e.id.name.toLowerCase();
    return r.globalScope[n] = { valueset: !0, node: null, value: new V(e, r) }, m(u);
  } catch (n) {
    return g(n);
  }
}
function ge(r, e, n) {
  return h((t, a) => {
    n >= e.declarations.length ? t(u) : i(r, e.declarations[n]).then(() => {
      n === e.declarations.length - 1 ? t(u) : ge(r, e, n + 1).then(() => {
        t(u);
      }, a);
    }, a);
  });
}
function sr(r, e) {
  try {
    let n = null;
    return n = e.init === null ? m(null) : i(r, e.init), r.localScope !== null ? n.then((t) => h((a) => {
      if (t === u && (t = null), e.id.type !== "Identifier")
        throw new Error("Can only assign a regular variable");
      const o = e.id.name.toLowerCase();
      r.localScope[o] = { value: t, valueset: !0, node: e.init }, a(u);
    })) : n.then((t) => h((a) => {
      if (e.id.type !== "Identifier")
        throw new Error("Can only assign a regular variable");
      const o = e.id.name.toLowerCase();
      t === u && (t = null), r.globalScope[o] = { value: t, valueset: !0, node: e.init }, a(u);
    }));
  } catch (n) {
    return g(n);
  }
}
let b = 0;
function le(r, e, n, t) {
  let a;
  switch (e = e.toLowerCase()) {
    case "hasz": {
      const o = r.hasZ;
      return o !== void 0 && o;
    }
    case "hasm": {
      const o = r.hasM;
      return o !== void 0 && o;
    }
    case "spatialreference": {
      let o = r.spatialReference._arcadeCacheId;
      if (o === void 0) {
        let s = !0;
        Object.freeze && Object.isFrozen(r.spatialReference) && (s = !1), s && (b++, r.spatialReference._arcadeCacheId = b, o = b);
      }
      const c = new T({ wkt: r.spatialReference.wkt, wkid: r.spatialReference.wkid });
      return o !== void 0 && (c._arcadeCacheId = "SPREF" + o.toString()), c;
    }
  }
  switch (r.type) {
    case "extent":
      switch (e) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const o = r[e];
          return o !== void 0 ? o : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (e) {
        case "rings":
          return a = r.cache._arcadeCacheId, a === void 0 && (b++, a = b, r.cache._arcadeCacheId = a), new oe(r.rings, r.spatialReference, r.hasZ === !0, r.hasM === !0, a);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (e) {
        case "x":
        case "y":
        case "z":
        case "m":
          return r[e] !== void 0 ? r[e] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (e) {
        case "paths":
          return a = r.cache._arcadeCacheId, a === void 0 && (b++, a = b, r.cache._arcadeCacheId = a), new oe(r.paths, r.spatialReference, r.hasZ === !0, r.hasM === !0, a);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (e) {
        case "points":
          return a = r.cache._arcadeCacheId, a === void 0 && (b++, a = b, r.cache._arcadeCacheId = a), new _e(r.points, r.spatialReference, r.hasZ === !0, r.hasM === !0, a, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(f(t, "RUNTIME", "PROPERTYNOTFOUND"));
}
function lr(r, e) {
  try {
    return i(r, e.object).then((n) => {
      try {
        return n === null ? v(new Error(f(e, "RUNTIME", "NOTFOUND"))) : e.computed === !1 ? e.property.type === "Identifier" ? n instanceof T || x(n) ? m(n.field(e.property.name)) : n instanceof ae ? m(le(n, e.property.name, r, e)) : v(new Error(f(e, "RUNTIME", "INVALIDTYPE"))) : v(new Error(f(e, "RUNTIME", "INVALIDTYPE"))) : i(r, e.property).then((t) => h((a, o) => {
          if (n instanceof T || x(n))
            N(t) ? a(n.field(t)) : o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
          else if (n instanceof ae)
            N(t) ? a(le(n, t, r, e)) : o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
          else if (L(n))
            if (M(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = n.length + t), t >= n.length || t < 0)
                throw new Error(f(e, "RUNTIME", "OUTOFBOUNDS"));
              a(n[t]);
            } else
              o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
          else if (P(n))
            if (M(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = n.length() + t), t >= n.length() || t < 0)
                throw new Error(f(e, "RUNTIME", "OUTOFBOUNDS"));
              a(n.get(t));
            } else
              o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
          else if (N(n))
            if (M(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = n.length + t), t >= n.length || t < 0)
                throw new Error(f(e, "RUNTIME", "OUTOFBOUNDS"));
              a(n[t]);
            } else
              o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
          else
            o(new Error(f(e, "RUNTIME", "INVALIDTYPE")));
        }));
      } catch (t) {
        return g(t);
      }
    });
  } catch (n) {
    return g(n);
  }
}
function ir(r, e) {
  try {
    return i(r, e.argument).then((n) => h((t, a) => {
      R(n) && e.operator === "!" ? t(!n) : e.operator === "-" ? t(-1 * p(n)) : e.operator === "+" ? t(1 * p(n)) : e.operator === "~" ? t(~p(n)) : a(new Error(f(e, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR")));
    }));
  } catch (n) {
    return g(n);
  }
}
function ur(r, e) {
  try {
    const n = [];
    for (let t = 0; t < e.elements.length; t++)
      n.push(i(r, e.elements[t]));
    return D(n).then((t) => h((a, o) => {
      for (let c = 0; c < t.length; c++) {
        if (G(t[c]))
          return void o(new Error(f(e, "RUNTIME", "FUNCTIONCONTEXTILLEGAL")));
        t[c] === u && (t[c] = null);
      }
      a(t);
    }));
  } catch (n) {
    return g(n);
  }
}
function fr(r, e) {
  try {
    return D([i(r, e.left), i(r, e.right)]).then((n) => h((t, a) => {
      const o = n[0], c = n[1];
      switch (e.operator) {
        case "|":
        case "<<":
        case ">>":
        case ">>>":
        case "^":
        case "&":
          t(Le(p(o), p(c), e.operator));
        case "==":
          t(q(o, c));
          break;
        case "!=":
          t(!q(o, c));
          break;
        case "<":
        case ">":
        case "<=":
        case ">=":
          t(De(o, c, e.operator));
          break;
        case "+":
          N(o) || N(c) ? t(C(o) + C(c)) : t(p(o) + p(c));
          break;
        case "-":
          t(p(o) - p(c));
          break;
        case "*":
          t(p(o) * p(c));
          break;
        case "/":
          t(p(o) / p(c));
          break;
        case "%":
          t(p(o) % p(c));
          break;
        default:
          a(new Error(f(e, "RUNTIME", "OPERATORNOTRECOGNISED")));
      }
    }));
  } catch (n) {
    return g(n);
  }
}
function hr(r, e) {
  return h((n, t) => {
    e.left.type !== "AssignmentExpression" && e.left.type !== "UpdateExpression" ? e.right.type !== "AssignmentExpression" && e.right.type !== "UpdateExpression" ? i(r, e.left).then((a) => {
      try {
        if (!R(a))
          throw new Error(f(e, "RUNTIME", "ONLYBOOLEAN"));
        switch (e.operator) {
          case "||":
            a === !0 ? n(a) : i(r, e.right).then((o) => {
              try {
                if (!R(o))
                  throw new Error(f(e, "RUNTIME", "ONLYORORAND"));
                n(o);
              } catch (c) {
                t(c);
              }
            }, t);
            break;
          case "&&":
            a === !1 ? n(a) : i(r, e.right).then((o) => {
              try {
                if (!R(o))
                  throw new Error(f(e, "RUNTIME", "ONLYORORAND"));
                n(o);
              } catch (c) {
                t(c);
              }
            }, t);
            break;
          default:
            throw new Error(f(e, "RUNTIME", "ONLYORORAND"));
        }
      } catch (o) {
        t(o);
      }
    }, t) : t(new Error(f(e.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))) : t(new Error(f(e.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
  });
}
function ee(r, e) {
  return h((n, t) => {
    const a = e.name.toLowerCase();
    if (r.localScope === null || r.localScope[a] === void 0)
      if (r.globalScope[a] === void 0)
        t(new Error(f(e, "RUNTIME", "VARIABLENOTFOUND")));
      else {
        const o = r.globalScope[a];
        o.valueset === !0 ? n(o.value) : o.d !== null ? o.d.then(n, t) : (o.d = i(r, o.node), o.d.then((c) => {
          try {
            o.value = c, o.valueset = !0, n(c);
          } catch (s) {
            t(s);
          }
        }, t));
      }
    else {
      const o = r.localScope[a];
      o.valueset === !0 ? n(o.value) : o.d !== null ? o.d.then(n, t) : (o.d = i(r, o.node), o.d.then((c) => {
        try {
          o.value = c, o.valueset = !0, n(c);
        } catch (s) {
          t(s);
        }
      }, t));
    }
  });
}
function pr(r, e) {
  try {
    if (e.callee.type !== "Identifier")
      return g(f(e, "RUNTIME", "ONLYNODESSUPPORTED"));
    if (r.localScope !== null && r.localScope[e.callee.name.toLowerCase()] !== void 0) {
      const n = r.localScope[e.callee.name.toLowerCase()];
      return n.value instanceof F ? n.value.fn(r, e) : n.value instanceof V ? ue(r, e, n.value.definition) : g(f(e, "RUNTIME", "NOTAFUNCTION"));
    }
    if (r.globalScope[e.callee.name.toLowerCase()] !== void 0) {
      const n = r.globalScope[e.callee.name.toLowerCase()];
      return n.value instanceof F ? n.value.fn(r, e) : n.value instanceof V ? ue(r, e, n.value.definition) : g(f(e, "RUNTIME", "NOTAFUNCTION"));
    }
    return g(f(e, "RUNTIME", "NOTFOUND"));
  } catch (n) {
    return g(n);
  }
}
function dr(r, e) {
  return m(e.value ? e.value.cooked : "");
}
function gr(r, e) {
  return h((n) => {
    const t = [];
    Pe(e.expressions, (a, o, c, s) => i(r, o).then((l) => {
      t[c] = C(l);
    })).then(() => {
      let a = "", o = 0;
      for (const c of e.quasis)
        a += c.value ? c.value.cooked : "", c.tail === !1 && (a += t[o] ? t[o] : "", o++);
      n(a);
    });
  });
}
const w = {};
function ie(r) {
  return r === null ? "" : L(r) || P(r) ? "Array" : je(r) ? "Date" : N(r) ? "String" : R(r) ? "Boolean" : M(r) ? "Number" : r instanceof Me ? "Attachment" : r instanceof Fe ? "Portal" : r instanceof T ? "Dictionary" : x(r) ? "Feature" : r instanceof Ve ? "Point" : r instanceof Be ? "Polygon" : r instanceof Ye ? "Polyline" : r instanceof Ge ? "Multipoint" : r instanceof ze ? "Extent" : G(r) ? "Function" : he(r) ? "FeatureSet" : He(r) ? "FeatureSetCollection" : r === u ? "" : typeof r == "number" && isNaN(r) ? "Number" : "Unrecognised Type";
}
function Ee(r, e, n, t) {
  return h((a, o) => {
    i(r, e.arguments[n]).then((c) => {
      try {
        if (q(c, t))
          return void i(r, e.arguments[n + 1]).then(a, o);
        {
          const s = e.arguments.length - n;
          return s === 1 ? void i(r, e.arguments[n]).then(a, o) : (s === 2 && a(null), s === 3 ? void i(r, e.arguments[n + 2]).then(a, o) : void Ee(r, e, n + 2, t).then(a, o));
        }
      } catch (s) {
        o(s);
      }
    }, o);
  });
}
function me(r, e, n, t) {
  return h((a, o) => {
    t === !0 ? i(r, e.arguments[n + 1]).then(a, o) : e.arguments.length - n === 3 ? i(r, e.arguments[n + 2]).then(a, o) : i(r, e.arguments[n + 2]).then((c) => {
      try {
        if (R(c) === !1)
          return void o(new Error("WHEN needs boolean test conditions"));
        me(r, e, n + 2, c).then(a, o);
      } catch (s) {
        o(s);
      }
    });
  });
}
function X(r, e) {
  try {
    const n = r.length, t = Math.floor(n / 2);
    return n === 0 ? m([]) : n === 1 ? m([r[0]]) : h((a, o) => {
      const c = [X(r.slice(0, t), e), X(r.slice(t, n), e)];
      D(c).then((s) => {
        try {
          j(s[0], s[1], e, []).then(a, o);
        } catch (l) {
          o(l);
        }
      }, o);
    });
  } catch (n) {
    return g(n);
  }
}
function j(r, e, n, t) {
  return h((a, o) => {
    const c = t;
    r.length > 0 || e.length > 0 ? r.length > 0 && e.length > 0 ? n(r[0], e[0]).then((s) => {
      try {
        isNaN(s) && (s = 1), s <= 0 ? (c.push(r[0]), r = r.slice(1)) : (c.push(e[0]), e = e.slice(1)), j(r, e, n, t).then(a, o);
      } catch (l) {
        o(l);
      }
    }, o) : r.length > 0 ? (c.push(r[0]), j(r = r.slice(1), e, n, t).then(a, o)) : e.length > 0 && (c.push(e[0]), e = e.slice(1), j(r, e, n, t).then(a, o)) : a(t);
  });
}
function U(r, e) {
  const n = r.length, t = Math.floor(n / 2);
  return e || (e = function(a, o) {
    return a < o ? -1 : a === o ? 0 : 1;
  }), n === 0 ? [] : n === 1 ? [r[0]] : Er(U(r.slice(0, t), e), U(r.slice(t, n), e), e);
}
function Er(r, e, n) {
  const t = [];
  for (; r.length > 0 || e.length > 0; )
    if (r.length > 0 && e.length > 0) {
      let a = n(r[0], e[0]);
      isNaN(a) && (a = 1), a <= 0 ? (t.push(r[0]), r = r.slice(1)) : (t.push(e[0]), e = e.slice(1));
    } else
      r.length > 0 ? (t.push(r[0]), r = r.slice(1)) : e.length > 0 && (t.push(e[0]), e = e.slice(1));
  return t;
}
function ye(r, e, n) {
  try {
    const t = r.body;
    if (n.length !== r.params.length)
      return g(new Error("Invalid Parameter calls to function."));
    for (let a = 0; a < n.length; a++) {
      const o = r.params[a];
      o.type === "Identifier" && (e.localScope[o.name.toLowerCase()] = { d: null, value: n[a], valueset: !0, node: null });
    }
    return i(e, t).then((a) => h((o, c) => {
      a instanceof I ? o(a.value) : a !== A ? a !== Y ? o(a instanceof Q ? a.value : a) : c(new Error("Cannot Continue from a Function")) : c(new Error("Cannot Break from a Function"));
    }));
  } catch (t) {
    return v(t);
  }
}
function ue(r, e, n) {
  return _(r, e, function(t, a, o) {
    const c = { spatialReference: r.spatialReference, services: r.services, console: r.console, lrucache: r.lrucache, interceptor: r.interceptor, localScope: {}, abortSignal: r.abortSignal, globalScope: r.globalScope, depthCounter: r.depthCounter + 1 };
    if (c.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return ye(n, c, o);
  });
}
function re(r) {
  return function() {
    const n = { abortSignal: r.context.abortSignal, spatialReference: r.context.spatialReference, console: r.context.console, lrucache: r.context.lrucache, interceptor: r.context.interceptor, services: r.context.services, localScope: {}, globalScope: r.context.globalScope, depthCounter: r.context.depthCounter + 1 };
    if (n.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return ye(r.definition, n, arguments);
  };
}
we(w, S), ve(w, S), Ne(w, S), Ie(w, S), be(w, S), qe({ functions: w, compiled: !1, signatures: null, failDefferred: null, evaluateIdentifier: null, arcadeCustomFunctionHandler: null, mode: "async", standardFunction: S, standardFunctionAsync: _ }), w.typeof = function(r, e) {
  return S(r, e, function(n, t, a) {
    H(a, 1, 1);
    const o = ie(a[0]);
    if (o === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return o;
  });
}, w.iif = function(r, e) {
  return h((n, t) => {
    H(e.arguments === null ? [] : e.arguments, 3, 3), i(r, e.arguments[0]).then((a) => {
      try {
        if (R(a) === !1)
          return void t(new Error("IF Function must have a boolean test condition"));
        D([i(r, e.arguments[1]), i(r, e.arguments[2])]).then((o) => {
          n(a ? o[0] : o[1]);
        }, t);
      } catch (o) {
        t(o);
      }
    }, t);
  });
}, w.decode = function(r, e) {
  return h((n, t) => {
    e.arguments.length < 2 ? t(new Error("Missing Parameters")) : e.arguments.length !== 2 ? (e.arguments.length - 1) % 2 != 0 ? i(r, e.arguments[0]).then((a) => {
      try {
        Ee(r, e, 1, a).then(n, t);
      } catch (o) {
        t(o);
      }
    }, t) : t(new Error("Must have a default value result.")) : i(r, e.arguments[1]).then(n, t);
  });
}, w.when = function(r, e) {
  try {
    return e.arguments.length < 3 ? g("Missing Parameters") : e.arguments.length % 2 == 0 ? g("Must have a default value result.") : i(r, e.arguments[0]).then((n) => h((t, a) => {
      if (R(n) === !1)
        return void a(new Error("WHEN needs boolean test conditions"));
      me(r, e, 0, n).then(t, a);
    }));
  } catch (n) {
    return g(n);
  }
}, w.sort = function(r, e) {
  return _(r, e, function(n, t, a) {
    H(a, 1, 2);
    let o = a[0];
    if (P(o) && (o = o.toArray()), L(o) === !1)
      return g(Error("Illegal Argument"));
    if (a.length > 1)
      return G(a[1]) === !1 ? g(Error("Illegal Argument")) : X(o, re(a[1]));
    {
      let c = o;
      if (c.length === 0)
        return m([]);
      const s = {};
      for (let d = 0; d < c.length; d++) {
        const y = ie(c[d]);
        y !== "" && (s[y] = !0);
      }
      if (s.Array === !0 || s.Dictionary === !0 || s.Feature === !0 || s.Point === !0 || s.Polygon === !0 || s.Polyline === !0 || s.Multipoint === !0 || s.Extent === !0 || s.Function === !0)
        return m(c.slice(0));
      let l = 0, E = "";
      for (const d in s)
        l++, E = d;
      return l > 1 || E === "String" ? c = U(c, function(d, y) {
        if (d == null || d === u)
          return y == null || y === u ? 0 : 1;
        if (y == null || y === u)
          return -1;
        const ne = C(d), te = C(y);
        return ne < te ? -1 : ne === te ? 0 : 1;
      }) : E === "Number" ? c = U(c, function(d, y) {
        return d - y;
      }) : E === "Boolean" ? c = U(c, function(d, y) {
        return d === y ? 0 : y ? -1 : 1;
      }) : E === "Date" && (c = U(c, function(d, y) {
        return y - d;
      })), m(c);
    }
  });
};
const mr = { failDefferred: g, resolveDeffered: pe, fixSpatialReference: ke, parseArguments: $, standardFunction: S, standardFunctionAsync: _, evaluateIdentifier: ee, arcadeCustomFunction: re };
for (const r in w)
  w[r] = { value: new F(w[r]), valueset: !0, node: null };
const k = function() {
};
function yr(r, e) {
  const n = new k();
  r == null && (r = {}), e == null && (e = {});
  const t = new T({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  t.immutable = !1, n.textformatting = { value: t, valueset: !0, node: null };
  for (const a in e)
    n[a] = { value: new F(e[a]), native: !0, valueset: !0, node: null };
  for (const a in r)
    r[a] && r[a].declaredClass === "geoscene.Graphic" ? n[a] = { value: fe.createFromGraphic(r[a]), valueset: !0, node: null } : n[a] = { value: r[a], valueset: !0, node: null };
  return n;
}
function wr(r) {
  console.log(r);
}
k.prototype = w, k.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: !0, node: null }, k.prototype.pi = { value: Math.PI, valueset: !0, node: null };
const Or = mr;
function vr(r) {
  const e = { mode: "async", compiled: !1, functions: {}, signatures: [], standardFunction: S, standardFunctionAsync: _, failDefferred: g, evaluateIdentifier: ee, arcadeCustomFunctionHandler: re };
  for (let n = 0; n < r.length; n++)
    r[n].registerFunctions(e);
  for (const n in e.functions)
    w[n] = { value: new F(e.functions[n]), valueset: !0, node: null }, k.prototype[n] = w[n];
  for (let n = 0; n < e.signatures.length; n++)
    Se(e.signatures[n], "async");
}
function Rr(r, e) {
  let n = e.spatialReference;
  n == null && (n = new xe({ wkid: 102100 }));
  const t = yr(e.vars, e.customfunctions);
  return i({ spatialReference: n, services: e.services, abortSignal: e.abortSignal === void 0 || e.abortSignal === null ? { aborted: !1 } : e.abortSignal, globalScope: t, console: e.console ? e.console : wr, lrucache: e.lrucache, interceptor: e.interceptor, localScope: null, depthCounter: 1 }, r.body[0].body).then((a) => h((o, c) => {
    a instanceof I && (a = a.value), a instanceof Q && (a = a.value), a === u && (a = null), a !== A ? a !== Y ? a instanceof F || a instanceof V ? c(new Error("Cannot return FUNCTION")) : o(a) : c(new Error("Cannot return CONTINUE")) : c(new Error("Cannot return BREAK"));
  }));
}
function Ar(r, e) {
  return Te(r);
}
function Cr(r, e) {
  return Oe(r, e, "full");
}
function Ur(r, e) {
  return Re(r, e);
}
function Mr(r, e) {
  return Ae(r, e);
}
function Fr(r) {
  return Ce(r);
}
vr([Ue]);
export {
  Rr as executeScript,
  vr as extend,
  Ar as extractFieldLiterals,
  Fr as findFunctionCalls,
  Or as functionHelper,
  Mr as referencesFunction,
  Ur as referencesMember,
  Cr as validateScript
};
