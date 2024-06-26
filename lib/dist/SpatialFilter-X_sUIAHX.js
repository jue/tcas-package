import { cj as w, cv as d, hE as c, hF as Q, cu as p, hG as J, hH as Y, hI as j, hJ as q, m as V, hK as W, aT as Z, hL as T, cY as C, hM as X, hN as z, hO as A, hP as L, hQ as k, cm as ee } from "./index-Ek1MTSEY.js";
import { WhereClause as S } from "./WhereClause-tgx5XbAS.js";
import { k as te, K as re, W as ne, M as se, F as ae, h as ie, w as le, A as ue, x as oe, O as he, p as ce, g as O } from "./geometryEngineAsync-qMem9Fr-.js";
let de = class {
  constructor(e, t) {
    this._lastId = -1, this._progress = t, this._parent = e;
  }
  reset() {
    this._lastId = -1;
  }
  nextBatch(e) {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((n) => this.nextBatch(e), (n) => this.nextBatch(e));
    const t = { returnpromise: null, hasset: !1 }, r = [];
    return t.returnpromise = w((n, a) => {
      this._parent._getSet(this._progress).then((i) => {
        let l = i._known.length - 1;
        if (i._known[i._known.length - 1] === "GETPAGES" && (l -= 1), this._lastId + e > l && i._known.length > 0 && i._known[i._known.length - 1] === "GETPAGES")
          this._parent._expandPagedSet(i, this._parent._maxQueryRate(), 0, 0, this._progress).then((u) => {
            t.hasset = !0, this._parent._mainSetInUse = null, this.nextBatch(e).then(n, a);
          }, (u) => {
            t.hasset = !0, this._parent._mainSetInUse = null, a(u);
          });
        else {
          if (l >= this._lastId + e || i._candidates.length === 0) {
            for (let u = 0; u < e; u++) {
              const h = u + this._lastId + 1;
              if (h >= i._known.length)
                break;
              r[u] = i._known[h];
            }
            return this._lastId += r.length, r.length === 0 && (t.hasset = !0, this._parent._mainSetInUse = null, n([])), void this._parent._getFeatureBatch(r, this._progress).then((u) => {
              t.hasset = !0, this._parent._mainSetInUse = null, n(u);
            }, (u) => {
              t.hasset = !0, this._parent._mainSetInUse = null, a(u);
            });
          }
          this._parent._refineSetBlock(i, this._parent._maxProcessingRate(), this._progress).then(() => {
            t.hasset = !0, this._parent._mainSetInUse = null, this.nextBatch(e).then(n, a);
          }, (u) => {
            t.hasset = !0, this._parent._mainSetInUse = null, a(u);
          });
        }
      }, (i) => {
        t.hasset = !0, this._parent._mainSetInUse = null, a(i);
      });
    }), t.hasset === !1 && (this._parent._mainSetInUse = t.returnpromise, t.hasset = !0), t.returnpromise;
  }
  next() {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((t) => this.next(), (t) => this.next());
    const e = { returnpromise: null, hasset: !1 };
    return e.returnpromise = w((t, r) => {
      this._parent._getSet(this._progress).then((n) => {
        this._lastId < n._known.length - 1 ? n._known[this._lastId + 1] === "GETPAGES" ? this._parent._expandPagedSet(n, this._parent._maxQueryRate(), 0, 0, this._progress).then((a) => (e.hasset = !0, this._parent._mainSetInUse = null, this.next())).then(t, r) : (this._lastId += 1, this._parent._getFeature(n, n._known[this._lastId], this._progress).then((a) => {
          e.hasset = !0, this._parent._mainSetInUse = null, t(a);
        }, (a) => {
          e.hasset = !0, this._parent._mainSetInUse = null, r(a);
        })) : n._candidates.length > 0 ? this._parent._refineSetBlock(n, this._parent._maxProcessingRate(), this._progress).then(() => {
          e.hasset = !0, this._parent._mainSetInUse = null, this.next().then(t, r);
        }, (a) => {
          e.hasset = !0, this._parent._mainSetInUse = null, r(a);
        }) : (e.hasset = !0, this._parent._mainSetInUse = null, t(null));
      }, (n) => {
        e.hasset = !0, this._parent._mainSetInUse = null, r(n);
      });
    }), e.hasset === !1 && (this._parent._mainSetInUse = e.returnpromise, e.hasset = !0), e.returnpromise;
  }
  count() {
    return this._parent._totalCount !== -1 ? d(this._parent._totalCount) : this._parent._getSet(this._progress).then((e) => this._refineAllSets(e)).then((e) => (this._parent._totalCount = e._known.length, d(this._parent._totalCount)));
  }
  _refineAllSets(e) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" ? this._parent._expandPagedSet(e, this._parent._maxQueryRate(), 0, 1, this._progress).then((t) => this._refineAllSets(e)).then((t) => d(t)) : e._candidates.length > 0 ? e._known[e._candidates.length - 1] === "GETPAGES" ? this._parent._expandPagedSet(e, this._parent._maxQueryRate(), 0, 2, this._progress).then((t) => this._refineAllSets(e)).then((t) => d(t)) : this._parent._refineSetBlock(e, this._parent._maxProcessingRate(), this._progress).then((t) => t._candidates.length > 0 ? this._refineAllSets(t) : d(t)) : d(e);
  }
};
class b {
  constructor(e, t, r, n) {
    this._candidates = null, this._known = null, this._lastFetchedIndex = 0, this._ordered = !1, this.pagesDefinition = null, this._candidates = e, this._known = t, this._ordered = r, this.pagesDefinition = n;
  }
}
let v = class {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(e) {
    this._databaseTypeMetaData[e] === void 0 && delete this._databaseTypeMetaData[e];
  }
  getDatabaseType(e) {
    return e === "MUSTBESET" || this._databaseTypeMetaData[e] === void 0 ? null : this._databaseTypeMetaData[e];
  }
  setDatabaseType(e, t) {
    this._databaseTypeMetaData[e] = t;
  }
  getLayerInfo(e) {
    return this._layerInfo[e] === void 0 ? null : this._layerInfo[e];
  }
  setLayerInfo(e, t) {
    this._layerInfo[e] = t;
  }
  clearLayerInfo(e) {
    this._layerInfo[e] !== void 0 && delete this._layerInfo[e];
  }
};
v.applicationCache = null;
function G(s, e) {
  return o(s.parseTree, e, s.parameters);
}
function Le(s, e, t) {
  return o(s, e, t);
}
function ke(s, e, t, r) {
  return S.create(o(s.parseTree, c.Standardised, s.parameters, e, t), r);
}
function Oe(s, e, t = "AND") {
  return S.create("((" + G(s, c.Standardised) + ")" + t + "(" + G(e, c.Standardised) + "))", s.fieldsIndex);
}
function o(s, e, t, r = null, n = null) {
  let a, i, l, u;
  switch (s.type) {
    case "interval":
      return me(o(s.value, e, t, r, n), s.qualifier, s.op);
    case "case_expression": {
      let h = " CASE ";
      s.format === "simple" && (h += o(s.operand, e, t, r, n));
      for (let f = 0; f < s.clauses.length; f++)
        h += " WHEN " + o(s.clauses[f].operand, e, t, r, n) + " THEN " + o(s.clauses[f].value, e, t, r, n);
      return s.else !== null && (h += " ELSE " + o(s.else, e, t, r, n)), h += " END ", h;
    }
    case "param": {
      const h = t[s.value.toLowerCase()];
      if (typeof h == "string")
        return "'" + t[s.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
      if (h instanceof Date)
        return N(h, e);
      if (h instanceof Array) {
        const f = [];
        for (let E = 0; E < h.length; E++)
          typeof h[E] == "string" ? f.push("'" + h[E].toString().replace(/'/g, "''") + "'") : h[E] instanceof Date ? f.push(N(h[E], e)) : f.push(h[E].toString());
        return f;
      }
      return h.toString();
    }
    case "expr_list":
      i = [];
      for (const h of s.value)
        i.push(o(h, e, t, r, n));
      return i;
    case "unary_expr":
      return " ( NOT " + o(s.expr, e, t, r, n) + " ) ";
    case "binary_expr":
      switch (s.operator) {
        case "AND":
          return " (" + o(s.left, e, t, r, n) + " AND " + o(s.right, e, t, r, n) + ") ";
        case "OR":
          return " (" + o(s.left, e, t, r, n) + " OR " + o(s.right, e, t, r, n) + ") ";
        case "IS":
          if (s.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return " (" + o(s.left, e, t, r, n) + " IS NULL )";
        case "ISNOT":
          if (s.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return " (" + o(s.left, e, t, r, n) + " IS NOT NULL )";
        case "IN":
          return a = [], s.right.type === "expr_list" ? (a = o(s.right, e, t, r, n), " (" + o(s.left, e, t, r, n) + " IN (" + a.join(",") + ")) ") : (u = o(s.right, e, t, r, n), u instanceof Array ? " (" + o(s.left, e, t, r, n) + " IN (" + u.join(",") + ")) " : " (" + o(s.left, e, t, r, n) + " IN (" + u + ")) ");
        case "NOT IN":
          return a = [], s.right.type === "expr_list" ? (a = o(s.right, e, t, r, n), " (" + o(s.left, e, t, r, n) + " NOT IN (" + a.join(",") + ")) ") : (u = o(s.right, e, t, r, n), u instanceof Array ? " (" + o(s.left, e, t, r, n) + " NOT IN (" + u.join(",") + ")) " : " (" + o(s.left, e, t, r, n) + " NOT IN (" + u + ")) ");
        case "BETWEEN":
          return l = o(s.right, e, t, r, n), " (" + o(s.left, e, t, r, n) + " BETWEEN " + l[0] + " AND " + l[1] + " ) ";
        case "NOTBETWEEN":
          return l = o(s.right, e, t, r, n), " (" + o(s.left, e, t, r, n) + " NOT BETWEEN " + l[0] + " AND " + l[1] + " ) ";
        case "LIKE":
          return s.escape !== "" ? " (" + o(s.left, e, t, r, n) + " LIKE " + o(s.right, e, t, r, n) + " ESCAPE '" + s.escape + "') " : " (" + o(s.left, e, t, r, n) + " LIKE " + o(s.right, e, t, r, n) + ") ";
        case "NOT LIKE":
          return s.escape !== "" ? " (" + o(s.left, e, t, r, n) + " NOT LIKE " + o(s.right, e, t, r, n) + " ESCAPE '" + s.escape + "') " : " (" + o(s.left, e, t, r, n) + " NOT LIKE " + o(s.right, e, t, r, n) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + o(s.left, e, t, r, n) + " " + s.operator + " " + o(s.right, e, t, r, n) + ") ";
      }
      throw new Error("Not Supported Operator " + s.operator);
    case "null":
      return "null";
    case "bool":
      return s.value === !0 ? "1" : "0";
    case "string":
      return "'" + s.value.toString().replace(/'/g, "''") + "'";
    case "timestamp":
    case "date":
      return N(s.value, e);
    case "number":
      return s.value.toString();
    case "current_time":
      return pe(s.mode === "date", e);
    case "column_ref":
      return r && r.toLowerCase() === s.column.toLowerCase() ? "(" + n + ")" : s.column;
    case "function": {
      const h = o(s.args, e, t, r, n);
      return _e(s.name, h, e);
    }
  }
  throw new Error("Unsupported sql syntax " + s.type);
}
function _e(s, e, t) {
  switch (s.toLowerCase().trim()) {
    case "abs":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for call to ABS");
      return "abs(" + e[0] + ")";
    case "ceiling":
    case "ceil":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for call to CEILING");
      switch (t) {
        case c.Standardised:
        case c.StandardisedNoInterval:
      }
      return "CEILING(" + e[0] + ")";
    case "floor":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for call to Floor");
      return "FLOOR(" + e[0] + ")";
    case "log":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for call to LOG");
      return "LOG(" + e[0] + ")";
    case "log10":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for call to LOG10");
      return "LOG10(" + e[0] + ")";
    case "power":
      if (e.length !== 2)
        throw new Error("Invalid Parameter for call to POWER");
      return "POWER(" + e[0] + "," + e[1] + ")";
    case "round":
      if (e.length === 2)
        return "ROUND(" + e[0] + "," + e[1] + ")";
      if (e.length === 1)
        return "ROUND(" + e[0] + ")";
      throw new Error("Invalid Parameter for call to ROUND");
    case "truncate":
      if (e.length < 1 || e.length > 2)
        throw new Error("Invalid Parameter for TRUNCATE function");
      return t === c.SqlServer ? "ROUND(" + e[0] + (e.length === 1 ? "0" : "," + e[1]) + ",1)" : "TRUNCATE(" + e[0] + (e.length === 1 ? ")" : "," + e[1] + ")");
    case "char_length":
    case "len":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for CHAR_LENGTH function");
      switch (t) {
        case c.SqlServer:
          return "LEN(" + e[0] + ")";
        case c.Oracle:
          return "LENGTH(" + e[0] + ")";
        default:
          return "CHAR_LENGTH(" + e[0] + ")";
      }
    case "concat":
      if (e.length < 1)
        throw new Error("Invalid Parameter for CONCAT function");
      {
        let r = "CONCAT(";
        for (let n = 0; n < e.length; n++)
          n !== 0 && (r += ","), r += e[n];
        return r += ")", r;
      }
    case "lower":
    case "lcase":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for Lower function");
      return "LOWER(" + e[0] + ")";
    case "upper":
    case "ucase":
      if (e.length !== 1)
        throw new Error("Invalid Parameter for Upper function");
      return "UPPER(" + e[0] + ")";
    case "substring": {
      let r = "";
      switch (t) {
        case c.Oracle:
          return r = "SUBSTR(" + e[0] + "," + e[1], e.length === 3 && (r += "," + e[2]), r += ")", r;
        case c.SqlServer:
          return r = e.length === 3 ? "SUBSTRING(" + e[0] + "," + e[1] + "," + e[2] + ")" : "SUBSTRING(" + e[0] + ",  " + e[1] + ", LEN(" + e[0] + ") - " + e[1] + ")", r;
        default:
          return r = "SUBSTRING(" + e[0] + " FROM " + e[1], e.length === 3 && (r += " FOR " + e[2]), r += ")", r;
      }
    }
    case "extract":
      return "EXTRACT(" + e[0].replace(/\'/g, "") + " FROM " + e[1] + ")";
  }
  throw new Error("Function Not Recognised");
}
function N(s, e) {
  const t = Q.fromJSDate(s), r = t.hour === 0 && t.minute === 0 && t.second === 0 && t.millisecond === 0;
  switch (e) {
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
      return r ? `date '${t.toFormat("yyyy-LL-dd")}'` : `date '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case c.Oracle:
      return r ? `TO_DATE('${t.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${t.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case c.SqlServer:
      return `'${t.toFormat(r ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case c.PGDB:
      return `#${t.toFormat(r ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case c.Postgres:
      return `TIMESTAMP '${t.toFormat(r ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `date '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function pe(s, e) {
  switch (e) {
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
    case c.Oracle:
      return s ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case c.SqlServer:
      return s ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case c.PGDB:
    case c.Postgres:
    default:
      return s ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function fe(s, e, t = {}) {
  const r = {}, n = {}, a = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", single: "double", double: "double", date: "date", string: "string" };
  for (const i of e) {
    const l = a[i.type];
    r[i.name.toLowerCase()] = l === void 0 ? "" : l;
  }
  for (const i in t) {
    const l = a[t[i]];
    n[i.toLowerCase()] = l === void 0 ? "" : l;
  }
  switch (g(r, s.parseTree, s.parameters, n)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "string":
      return "string";
  }
  return "";
}
function g(s, e, t, r) {
  let n;
  switch (e.type) {
    case "interval":
      return "integer";
    case "case_expression": {
      const a = [];
      if (e.format === "simple") {
        for (let i = 0; i < e.clauses.length; i++)
          a.push(g(s, e.clauses[i].value, t, r));
        e.else !== null && a.push(g(s, e.else, t, r));
      } else {
        for (let i = 0; i < e.clauses.length; i++)
          a.push(g(s, e.else, t, r));
        e.else !== null && a.push(g(s, e.else, t, r));
      }
      return x(a);
    }
    case "param": {
      const a = r[e.value.toLowerCase()];
      if (a === void 0 && t) {
        const i = t[e.value.toLowerCase()];
        if (i === void 0 || i === null)
          return "";
        if (typeof i == "string" || i instanceof String)
          return "string";
        if (typeof i == "boolean")
          return "boolean";
        if (i instanceof Date)
          return "date";
        if (typeof i == "number")
          return i % 1 == 0 ? "integer" : "double";
      }
      return a === void 0 ? "" : a;
    }
    case "expr_list": {
      const a = [];
      for (const i of e.value)
        a.push(g(s, i, t, r));
      return a;
    }
    case "unary_expr":
      return "boolean";
    case "binary_expr":
      switch (e.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if (e.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return x([g(s, e.left, t, r), g(s, e.right, t, r)]);
        default:
          throw new Error("Not Supported Operator " + e.operator);
      }
    case "null":
      return "";
    case "bool":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return e.value === null ? "" : e.value % 1 == 0 ? "integer" : "double";
    case "date":
    case "timestamp":
    case "current_time":
      return "date";
    case "column_ref": {
      const a = s[e.column.toLowerCase()];
      return a === void 0 ? "" : a;
    }
    case "function":
      switch (e.name.toLowerCase()) {
        case "position":
        case "extract":
        case "char_length":
          return "integer";
        case "round":
          return n = g(s, e.args, t, r), n instanceof Array ? n.length > 0 ? n[0] : "" : n;
        case "sign":
          return n = g(s, e.args, t, r), n instanceof Array && (n = x(n)), n === "integer" || n === "double" ? n : "double";
        case "ceiling":
        case "floor":
        case "abs": {
          const a = g(s, e.args, t, r);
          return a instanceof Array ? x(a) : a;
        }
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "power":
        case "truncate":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
      }
      return "";
  }
  throw new Error("Unsupported sql syntax " + e.type);
}
const U = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function x(s) {
  if (s) {
    let e = "";
    for (const t of s)
      t !== "" && (e = e === "" || U[e] < U[t] ? t : e);
    return e;
  }
  return "";
}
function Ge(s, e) {
  return m(s.parseTree, e);
}
function ge(s) {
  return s.parseTree.type === "column_ref";
}
function m(s, e) {
  if (s == null)
    return !1;
  switch (s.type) {
    case "when_clause":
      return m(s.operand, e) || m(s.value, e);
    case "case_expression":
      for (const t of s.clauses)
        if (m(t, e))
          return !0;
      return !(s.format !== "simple" || !m(s.operand, e)) || !(s.else === null || !m(s.else, e));
    case "param":
    case "null":
    case "bool":
    case "date":
    case "timestamp":
    case "string":
    case "number":
      return !1;
    case "expr_list":
      for (const t of s.value)
        if (m(t, e))
          return !0;
      return !1;
    case "unary_expr":
      return m(s.expr, e);
    case "binary_expr":
      return m(s.left, e) || m(s.right, e);
    case "column_ref":
      return e.toLowerCase() === s.column.toLowerCase();
    case "function":
      return m(s.args, e);
  }
  return !1;
}
function P(s) {
  let e = "";
  return e += s.period.toUpperCase(), e;
}
function me(s, e, t) {
  let r = "";
  return r = e.type === "interval-period" ? P(e) : P(e.start) + " TO " + P(e.end), "INTERVAL " + t + " " + s + " " + r;
}
function ye(s) {
  return s = +s, isFinite(s) ? s - s % 1 || (s < 0 ? -0 : s === 0 ? s : 0) : s;
}
function R(s) {
  let e = 0;
  for (let t = 0; t < s.length; t++)
    e += s[t];
  return e / s.length;
}
function M(s) {
  const e = R(s);
  let t = 0;
  for (let r = 0; r < s.length; r++)
    t += (e - s[r]) ** 2;
  return t / s.length;
}
function B(s) {
  const e = R(s);
  let t = 0;
  for (let r = 0; r < s.length; r++)
    t += (e - s[r]) ** 2;
  return t / (s.length - 1);
}
function $(s) {
  let e = 0;
  for (let t = 0; t < s.length; t++)
    e += s[t];
  return e;
}
function Se(s, e) {
  const t = [], r = {}, n = [];
  for (let a = 0; a < s.length; a++) {
    if (s[a] !== void 0 && s[a] !== null) {
      const i = s[a];
      if (Y(i) || j(i))
        r[i] === void 0 && (t.push(i), r[i] = 1);
      else {
        let l = !1;
        for (let u = 0; u < n.length; u++)
          q(n[u], i) === !0 && (l = !0);
        l === !1 && (n.push(i), t.push(i));
      }
    }
    if (t.length >= e && e !== -1)
      return t;
  }
  return t;
}
function Ue(s) {
  switch (s.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function Me(s, e, t = 1e3) {
  switch (s.toLowerCase()) {
    case "distinct":
      return Se(e, t);
    case "avg":
    case "mean":
      return R(e);
    case "min":
      return Math.min.apply(Math, e);
    case "sum":
      return $(e);
    case "max":
      return Math.max.apply(Math, e);
    case "stdev":
    case "stddev":
      return Math.sqrt(M(e));
    case "var":
    case "variance":
      return M(e);
    case "count":
      return e.length;
  }
  return 0;
}
function Ie(s, e, t) {
  return D(s, e, t, !0).then((r) => r.length === 0 ? null : Math.min.apply(Math, r));
}
function we(s, e, t) {
  return D(s, e, t, !0).then((r) => r.length === 0 ? null : Math.max.apply(Math, r));
}
function Te(s, e, t) {
  let r = "";
  return ge(e) === !1 && (r = fe(e, s.fields, null)), D(s, e, t, !0).then((n) => {
    if (n.length === 0)
      return null;
    const a = R(n);
    return a === null ? a : r === "integer" ? ye(a) : a;
  });
}
function Fe(s, e, t) {
  return D(s, e, t, !0).then((r) => r.length === 0 ? null : B(r));
}
function be(s, e, t) {
  return D(s, e, t, !0).then((r) => r.length === 0 ? null : Math.sqrt(B(r)));
}
function Ee(s, e, t) {
  return D(s, e, t, !0).then((r) => r.length === 0 ? null : $(r));
}
function ve(s, e) {
  try {
    return s.iterator(e).count();
  } catch (t) {
    return p(t);
  }
}
function D(s, e, t, r = !1) {
  try {
    const n = s.iterator(t);
    return w((a, i) => {
      H(n, [], e, r, a, i);
    });
  } catch (n) {
    return p(n);
  }
}
function H(s, e, t, r, n, a) {
  J(s.next().then((i) => {
    try {
      if (i !== null) {
        const l = t.calculateValue(i);
        return l === null ? r === !1 && (e[e.length] = l) : e[e.length] = l, H(s, e, t, r, n, a);
      }
      n(e);
    } catch (l) {
      a(l);
    }
  }, a));
}
function De(s, e, t = 1e3, r = null) {
  return xe(s, e, t, r);
}
function xe(s, e, t, r) {
  try {
    return K(s.iterator(r), {}, [], e, t);
  } catch (n) {
    return p(n);
  }
}
function K(s, e, t, r, n) {
  return s.next().then((a) => {
    if (a !== null) {
      const i = r.calculateValue(a);
      return i != null && e[i] === void 0 && (t.push(i), e[i] = 1), t.length >= n && n !== -1 ? t : K(s, e, t, r, n);
    }
    return t;
  });
}
let y = class _ {
  constructor(e) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = c.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "geoscene.arcade.featureset.support.FeatureSet", this._featureCache = [], this.types = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = !1, this.hasZ = !1, this._transparent = !1, this.loaded = !1, this._loadPromise = null, this._fieldsIndex = null, e && e.lrucache && (this.recentlyUsedQueries = e.lrucache), e && e.interceptor && (this.featureSetQueryInterceptor = e.interceptor);
  }
  optimisePagingFeatureQueries(e) {
    this._parent && this._parent.optimisePagingFeatureQueries(e);
  }
  _hasMemorySource() {
    return !0;
  }
  prop(e, t) {
    return t === void 0 ? this[e] : (this[e] !== void 0 && (this[e] = t), this);
  }
  end() {
    return this._parent !== null && this._parent._transparent === !0 ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = w((e, t) => {
      if (this._parent.loaded === !0)
        return this._initialiseFeatureSet(), void e(this);
      this._parent.load().then(() => {
        try {
          this._initialiseFeatureSet(), e(this);
        } catch (r) {
          t(r);
        }
      }, t);
    })), this._loadPromise;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new V({ wkid: 4326 }), this.geometryType = W.point);
  }
  getField(e, t) {
    let r;
    return (t = t || this.fields) && (e = e.toLowerCase(), t.some((n) => (n && n.name.toLowerCase() === e && (r = n), !!r))), r;
  }
  getFieldsIndex() {
    return this._fieldsIndex === null && (this._fieldsIndex = new Z(this.fields)), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return this._parent !== null ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return this._parent !== null ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e) {
    if (e !== null && e.aborted)
      throw new Error("Operation has been cancelled.");
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  _canDoAggregates(e, t, r, n, a) {
    return this._parent === null ? d(!1) : this._parent._canDoAggregates(e, t, r, n, a);
  }
  _getAggregatePagesDataSourceDefinition(e, t, r, n, a, i, l) {
    return this._parent === null ? p(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e, t, r, n, a, i, l);
  }
  _getAgregagtePhysicalPage(e, t, r) {
    return this._parent === null ? p(new Error("Should never be called")) : this._parent._getAgregagtePhysicalPage(e, t, r);
  }
  databaseType() {
    if (this._databaseType === c.NotEvaluated) {
      if (v.applicationCache !== null) {
        const r = v.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (r !== null)
          return r;
      }
      if (this._databaseTypeProbed !== null)
        return this._databaseTypeProbed;
      const e = [{ thetype: c.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: c.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: c.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
      let t = w((r, n) => {
        this._getDatabaseTypeImpl(e, 0).then((a) => {
          this._databaseType = a, r(this._databaseType);
        }, (a) => {
          n(a);
        });
      });
      return v.applicationCache !== null && (v.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), t), t = t.catch((r) => {
        throw v.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), r;
      })), this._databaseTypeProbed = t, this._databaseTypeProbed;
    }
    return d(this._databaseType);
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  _getDatabaseTypeImpl(e, t) {
    return t >= e.length ? d(c.StandardisedNoInterval) : this._runDatabaseProbe(e[t].testwhere).then((r) => r === !0 ? e[t].thetype : this._getDatabaseTypeImpl(e, t + 1));
  }
  _runDatabaseProbe(e) {
    return this._parent !== null ? this._parent._runDatabaseProbe(e) : p(new Error("Not Implemented"));
  }
  isTable() {
    return this._parent.isTable();
  }
  _featureFromCache(e) {
    if (this._featureCache[e] !== void 0)
      return this._featureCache[e];
  }
  _isInFeatureSet(e) {
    return T.Unknown;
  }
  _getSet(e) {
    throw new Error("Not implemented in abstract class");
  }
  _getFeature(e, t, r) {
    try {
      return this._checkCancelled(r), this._featureFromCache(t) !== void 0 ? d(this._featureFromCache(t)) : this._getFeatures(e, t, this._maxProcessingRate(), r).then(() => (this._checkCancelled(r), this._featureFromCache(t) !== void 0 ? this._featureFromCache(t) : p(new Error("Feature Not Found"))));
    } catch (n) {
      return p(n);
    }
  }
  _getFeatureBatch(e, t) {
    try {
      this._checkCancelled(t);
      const r = new b([], e, !1, null), n = [];
      return this._getFeatures(r, -1, e.length, t).then(() => {
        this._checkCancelled(t);
        for (const a of e)
          this._featureFromCache(a) !== void 0 && n.push(this._featureFromCache(a));
        return n;
      });
    } catch (r) {
      return p(r);
    }
  }
  _getFeatures(e, t, r, n) {
    return d("success");
  }
  _getFilteredSet(e, t, r, n, a) {
    throw new Error("Not implemented in abstract class");
  }
  _refineSetBlock(e, t, r) {
    try {
      if (this._checkIfNeedToExpandCandidatePage(e, this._maxQueryRate()) === !0)
        return this._expandPagedSet(e, this._maxQueryRate(), 0, 0, r).then(() => this._refineSetBlock(e, t, r));
      this._checkCancelled(r);
      const n = e._candidates.length;
      this._refineKnowns(e, t);
      let a = n - e._candidates.length;
      return e._candidates.length === 0 || a >= t ? d(e) : this._refineIfParentKnown(e, t - a, r).then(() => {
        if (this._checkCancelled(r), this._refineKnowns(e, t - a), a = n - e._candidates.length, a < t && e._candidates.length > 0) {
          const i = t - a, l = this._prepareFetchAndRefineSet(e._candidates);
          return this._fetchAndRefineFeatures(l, l.length > i ? i : e._candidates.length, r).then(() => (this._checkCancelled(r), this._refineKnowns(e, t - a), e));
        }
        return e;
      });
    } catch (n) {
      return p(n);
    }
  }
  _fetchAndRefineFeatures(e, t, r) {
    return null;
  }
  _prepareFetchAndRefineSet(e) {
    const t = [];
    for (let r = 0; r < e.length; r++)
      this._isPhysicalFeature(e[r]) && t.push(e[r]);
    return t;
  }
  _isPhysicalFeature(e) {
    return this._parent === null || this._parent._isPhysicalFeature(e);
  }
  _refineKnowns(e, t) {
    let r = 0, n = null;
    const a = [];
    t = this._maxQueryRate();
    for (let i = 0; i < e._candidates.length && e._candidates[i] !== "GETPAGES"; i++) {
      let l = !1;
      const u = this._candidateIdTransform(e._candidates[i]);
      u !== e._candidates[i] && (l = !0);
      const h = this._isInFeatureSet(u);
      if (h === T.InFeatureSet)
        l === !0 ? e._known.indexOf(u) < 0 && (e._known.push(u), r += 1) : (e._known.push(e._candidates[i]), r += 1), n === null ? n = { start: i, end: i } : n.end === i - 1 ? n.end = i : (a.push(n), n = { start: i, end: i });
      else if (h === T.NotInFeatureSet)
        n === null ? n = { start: i, end: i } : n.end === i - 1 ? n.end = i : (a.push(n), n = { start: i, end: i }), r += 1;
      else if (h === T.Unknown && (r += 1, e._ordered === !0))
        break;
      if (r >= t)
        break;
    }
    n !== null && a.push(n);
    for (let i = a.length - 1; i >= 0; i--)
      e._candidates.splice(a[i].start, a[i].end - a[i].start + 1);
  }
  _refineIfParentKnown(e, t, r) {
    const n = new b([], [], e._ordered, null);
    return n._candidates = e._candidates.slice(0), this._parent._refineSetBlock(n, t, r);
  }
  _candidateIdTransform(e) {
    return this._parent._candidateIdTransform(e);
  }
  _checkIfNeedToExpandKnownPage(e, t) {
    if (e.pagesDefinition === null)
      return !1;
    let r = 0;
    for (let n = e._lastFetchedIndex; n < e._known.length; n++) {
      if (e._known[n] === "GETPAGES")
        return !0;
      if (this._featureCache[e._known[n]] === void 0 && (r += 1, r >= t))
        break;
    }
    return !1;
  }
  _checkIfNeedToExpandCandidatePage(e, t) {
    if (e.pagesDefinition === null)
      return !1;
    let r = 0;
    for (let n = 0; n < e._candidates.length; n++) {
      if (e._candidates[n] === "GETPAGES")
        return !0;
      if (r += 1, r >= t)
        break;
    }
    return !1;
  }
  _expandPagedSet(e, t, r, n, a) {
    return this._parent === null ? p(new Error("Parent Paging not implemented")) : this._parent._expandPagedSet(e, t, r, n, a);
  }
  _expandPagedSetFeatureSet(e, t, r, n, a) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" && (n = 1), n === 0 && e._candidates.length > 0 && e._candidates[e._candidates.length - 1] === "GETPAGES" && (n = 2), n === 0 ? d("finished") : this._getPage(e, n, a).then((i) => r + i < t ? this._expandPagedSet(e, t, r + i, 0, a) : "success");
  }
  _getPage(e, t, r) {
    const n = t === 1 ? e._known : e._candidates;
    if (e.pagesDefinition.internal.set.length > e.pagesDefinition.resultOffset || e.pagesDefinition.internal.fullyResolved === !0) {
      n.length = n.length - 1;
      let a = 0;
      for (let l = 0; l < e.pagesDefinition.resultRecordCount && !(e.pagesDefinition.resultOffset + l >= e.pagesDefinition.internal.set.length); l++)
        n[n.length] = e.pagesDefinition.internal.set[e.pagesDefinition.resultOffset + l], a++;
      e.pagesDefinition.resultOffset += a;
      let i = !1;
      return e.pagesDefinition.internal.fullyResolved === !0 && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset && (i = !0), i === !1 && n.push("GETPAGES"), d(a);
    }
    return this._getPhysicalPage(e, t, r).then(() => this._getPage(e, t, r));
  }
  _getPhysicalPage(e, t, r) {
    return null;
  }
  _clonePageDefinition(e) {
    return this._parent === null ? null : this._parent._clonePageDefinition(e);
  }
  _first(e) {
    return this.iterator(e).next();
  }
  first(e) {
    return this._first(e);
  }
  calculateStatistic(e, t, r, n) {
    return this._ensureLoaded().then(() => this._stat(e, t, "", null, null, r, n).then((a) => a.calculated === !1 ? this._manualStat(e, t, r, n).then((i) => i.result) : a.result));
  }
  _manualStat(e, t, r, n) {
    switch (e.toLowerCase()) {
      case "count":
        return ve(this, n).then((a) => ({ calculated: !0, result: a }));
      case "distinct":
        return De(this, t, r).then((a) => ({ calculated: !0, result: a }));
      case "avg":
      case "mean":
        return Te(this, t, n).then((a) => ({ calculated: !0, result: a }));
      case "stdev":
        return be(this, t, n).then((a) => ({ calculated: !0, result: a }));
      case "variance":
        return Fe(this, t, n).then((a) => ({ calculated: !0, result: a }));
      case "sum":
        return Ee(this, t, n).then((a) => ({ calculated: !0, result: a }));
      case "min":
        return Ie(this, t, n).then((a) => ({ calculated: !0, result: a }));
      case "max":
        return we(this, t, n).then((a) => ({ calculated: !0, result: a }));
      default:
        return d({ calculated: !0, result: 0 });
    }
  }
  _stat(e, t, r, n, a, i, l) {
    return this._parent._stat(e, t, r, n, a, i, l).then((u) => u.calculated === !1 ? a === null && r === "" && n === null ? this._manualStat(e, t, i, l) : { calculated: !1 } : u);
  }
  _unionAllGeomSelf(e) {
    const t = this.iterator(this._defaultTracker(e)), r = [];
    return w((n, a) => {
      this._unionShapeInBatches(r, t, n, a);
    });
  }
  _unionAllGeom(e) {
    return w((t, r) => {
      const n = this.iterator(this._defaultTracker(e)), a = [];
      this._unionShapeInBatches(a, n, t, r);
    });
  }
  _unionShapeInBatches(e, t, r, n) {
    t.next().then((a) => {
      try {
        a !== null && a.geometry !== null && e.push(a.geometry), e.length > 30 || a === null && e.length > 1 ? te(e).then((i) => {
          try {
            a === null ? r(i) : (e = [i], this._unionShapeInBatches(e, t, r, n));
          } catch (l) {
            n(l);
          }
        }, n) : a === null ? e.length === 1 ? r(e[0]) : r(null) : this._unionShapeInBatches(e, t, r, n);
      } catch (i) {
        n(i);
      }
    }, n);
  }
  iterator(e) {
    return new de(this, e);
  }
  intersection(e, t = !1) {
    return _._featuresetFunctions.intersection.bind(this)(e, t);
  }
  difference(e, t = !1, r = !0) {
    return _._featuresetFunctions.difference.bind(this)(e, t, r);
  }
  symmetricDifference(e, t = !1, r = !0) {
    return _._featuresetFunctions.symmetricDifference.bind(this)(e, t, r);
  }
  morphShape(e, t, r = "unknown", n = null) {
    return _._featuresetFunctions.morphShape.bind(this)(e, t, r, n);
  }
  morphShapeAndAttributes(e, t, r = "unknown") {
    return _._featuresetFunctions.morphShapeAndAttributes.bind(this)(e, t, r);
  }
  union(e, t = !1) {
    return _._featuresetFunctions.union.bind(this)(e, t);
  }
  intersects(e) {
    return _._featuresetFunctions.intersects.bind(this)(e);
  }
  envelopeIntersects(e) {
    return _._featuresetFunctions.envelopeIntersects.bind(this)(e);
  }
  contains(e) {
    return _._featuresetFunctions.contains.bind(this)(e);
  }
  overlaps(e) {
    return _._featuresetFunctions.overlaps.bind(this)(e);
  }
  relate(e, t) {
    return _._featuresetFunctions.relate.bind(this)(e, t);
  }
  within(e) {
    return _._featuresetFunctions.within.bind(this)(e);
  }
  touches(e) {
    return _._featuresetFunctions.touches.bind(this)(e);
  }
  top(e) {
    return _._featuresetFunctions.top.bind(this)(e);
  }
  crosses(e) {
    return _._featuresetFunctions.crosses.bind(this)(e);
  }
  buffer(e, t, r, n = !0) {
    return _._featuresetFunctions.buffer.bind(this)(e, t, r, n);
  }
  filter(e, t = null) {
    return _._featuresetFunctions.filter.bind(this)(e, t);
  }
  orderBy(e) {
    return _._featuresetFunctions.orderBy.bind(this)(e);
  }
  dissolve(e, t) {
    return _._featuresetFunctions.dissolve.bind(this)(e, t);
  }
  groupby(e, t) {
    return _._featuresetFunctions.groupby.bind(this)(e, t);
  }
  reduce(e, t = null, r) {
    return w((n, a) => {
      this._reduceImpl(this.iterator(this._defaultTracker(r)), e, t, 0, n, a, 0);
    });
  }
  _reduceImpl(e, t, r, n, a, i, l) {
    try {
      if (++l > 1e3)
        return void setTimeout(() => {
          l = 0, this._reduceImpl(e, t, r, n, a, i, l);
        });
      e.next().then((u) => {
        try {
          if (u === null)
            a(r);
          else {
            const h = t(r, u, n, this);
            C(h) ? h.then((f) => {
              this._reduceImpl(e, t, f, n + 1, a, i, l);
            }, i) : this._reduceImpl(e, t, h, n + 1, a, i, l);
          }
        } catch (h) {
          i(h);
        }
      }, i);
    } catch (u) {
      i(u);
    }
  }
  removeField(e) {
    return _._featuresetFunctions.removeField.bind(this)(e);
  }
  addField(e, t, r = null) {
    return _._featuresetFunctions.addField.bind(this)(e, t, r);
  }
  sumArea(e, t = !1, r) {
    const n = X(e);
    return this.reduce((a, i) => i.geometry === null ? 0 : t ? re(i.geometry, n).then((l) => a + l) : ne(i.geometry, n).then((l) => a + l), 0, r);
  }
  sumLength(e, t = !1, r) {
    const n = z(e);
    return this.reduce((a, i) => i.geometry === null ? 0 : t ? se(i.geometry, n).then((l) => a + l) : ae(i.geometry, n).then((l) => a + l), 0, r);
  }
  _substituteVars(e, t) {
    if (t !== null) {
      const r = {};
      for (const n in t)
        r[n.toLowerCase()] = t[n];
      e.parameters = r;
    }
  }
  distinct(e, t = 1e3, r = null, n) {
    return this.load().then(() => {
      const a = S.create(e, this.getFieldsIndex());
      return this._substituteVars(a, r), this.calculateStatistic("distinct", a, t, this._defaultTracker(n));
    });
  }
  min(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("min", n, -1, this._defaultTracker(r));
    });
  }
  max(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("max", n, -1, this._defaultTracker(r));
    });
  }
  avg(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("avg", n, -1, this._defaultTracker(r));
    });
  }
  sum(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("sum", n, -1, this._defaultTracker(r));
    });
  }
  stdev(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("stdev", n, -1, this._defaultTracker(r));
    });
  }
  variance(e, t = null, r) {
    return this.load().then(() => {
      const n = S.create(e, this.getFieldsIndex());
      return this._substituteVars(n, t), this.calculateStatistic("variance", n, -1, this._defaultTracker(r));
    });
  }
  count(e) {
    return this.load().then(() => this.calculateStatistic("count", S.create("1", this.getFieldsIndex()), -1, this._defaultTracker(e)));
  }
  _defaultTracker(e) {
    return e || { aborted: !1 };
  }
  forEach(e, t) {
    return w((r, n) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t)), e, this, r, n, 0);
    });
  }
  _forEachImpl(e, t, r, n, a, i) {
    try {
      if (++i > 1e3)
        return void setTimeout(() => {
          i = 0, this._forEachImpl(e, t, r, n, a, i);
        }, 0);
      e.next().then((l) => {
        try {
          if (l === null)
            n(r);
          else {
            const u = t(l);
            u == null ? this._forEachImpl(e, t, r, n, a, i) : C(u) ? u.then(() => {
              try {
                this._forEachImpl(e, t, r, n, a, i);
              } catch (h) {
                a(h);
              }
            }, a) : this._forEachImpl(e, t, r, n, a, i);
          }
        } catch (u) {
          a(u);
        }
      }, a);
    } catch (l) {
      a(l);
    }
  }
  convertToJSON(e) {
    const t = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let r = 0; r < this.fields.length; r++)
      t.layerDefinition.fields.push(A(this.fields[r]));
    return this.reduce((r, n) => {
      const a = { geometry: n.geometry && n.geometry.toJSON(), attributes: {} };
      for (const i in n.attributes)
        a.attributes[i] = n.attributes[i];
      return t.featureSet.features.push(a), 1;
    }, 0, e).then(() => t);
  }
  castToText() {
    return "object, FeatureSet";
  }
  queryAttachments(e, t, r, n, a) {
    return this._parent.queryAttachments(e, t, r, n, a);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypes() {
    return this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e) => ({ name: e.name, code: e.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e = [];
    for (const t of this.fields)
      e.push(A(t));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: L[this.geometryType] === void 0 ? "" : L[this.geometryType], fields: e };
  }
  convertToText(e, t) {
    return e === "schema" ? this._ensureLoaded().then(() => JSON.stringify(this.schema())) : e === "featureset" ? this._ensureLoaded().then(() => {
      const r = [];
      return this.reduce((n, a) => {
        const i = { geometry: a.geometry ? a.geometry.toJSON() : null, attributes: a.attributes };
        return i.geometry !== null && i.geometry.spatialReference && delete i.geometry.spatialReference, r.push(i), 1;
      }, 0, t).then(() => {
        const n = this.schema();
        return n.features = r, n.spatialReference = this.spatialReference.toJSON(), JSON.stringify(n);
      });
    }) : d(this.castToText());
  }
  getFeatureByObjectId(e, t) {
    return this._parent.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return this._parent !== null ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return this._parent !== null ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e = null) {
    return (e == null ? void 0 : e.featureset) === "keeptype" ? this : (e == null ? void 0 : e.featureset) === "none" ? null : { type: "FeatureSet" };
  }
  castAsJsonAsync(e = null, t = null) {
    return (t == null ? void 0 : t.featureset) === "keeptype" ? d(this) : (t == null ? void 0 : t.featureset) === "schema" ? this._ensureLoaded().then(() => JSON.parse(JSON.stringify(this.schema()))) : (t == null ? void 0 : t.featureset) === "none" ? d(null) : this._ensureLoaded().then(() => {
      const r = [];
      return this.reduce((n, a) => {
        const i = { geometry: a.geometry ? (t == null ? void 0 : t.keepGeometryType) === !0 ? a.geometry : a.geometry.toJSON() : null, attributes: a.attributes };
        return i.geometry !== null && i.geometry.spatialReference && (t == null ? void 0 : t.keepGeometryType) !== !0 && delete i.geometry.spatialReference, r.push(i), 1;
      }, 0, e).then(() => {
        const n = this.schema();
        return n.features = r, n.spatialReference = (t == null ? void 0 : t.keepGeometryType) === !0 ? this.spatialReference : this.spatialReference.toJSON(), n;
      });
    });
  }
};
y._featuresetFunctions = {};
class F extends y {
  constructor(e) {
    super(e), this.declaredClass = "geoscene.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new b([], [], !1, null), this._parent = e.parentfeatureset, this._databaseType = c.Standardised;
  }
  _getSet() {
    return d(this._wset);
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return T.NotInFeatureSet;
  }
  _getFeature() {
    return p(new Error("No Feature Found in EmptySet"));
  }
  queryAttachments() {
    return d([]);
  }
  _getFeatures() {
    return d("success");
  }
  _featureFromCache() {
    return null;
  }
  _fetchAndRefineFeatures() {
    return p(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet() {
    return d(new b([], [], !1, null));
  }
  _stat(e, t, r, n, a, i, l) {
    return this._manualStat(e, t, i, l);
  }
  _canDoAggregates() {
    return d(!1);
  }
}
class I extends y {
  constructor(e) {
    super(e), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "geoscene.arcade.featureset.actions.SpatialFilter", this._relationString = e.relationString, this._parent = e.parentfeatureset, this._maxProcessing = 40, this._relation = e.relation, this._relationGeom = e.relationGeom;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e)).then((t) => (this._checkCancelled(e), this._wset = new b(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset)) : d(this._wset);
  }
  _isInFeatureSet(e) {
    let t = this._parent._isInFeatureSet(e);
    return t === T.NotInFeatureSet ? t : (t = this._idstates[e], t === void 0 ? T.Unknown : t);
  }
  _getFeature(e, t, r) {
    return this._parent._getFeature(e, t, r);
  }
  _getFeatures(e, t, r, n) {
    return this._parent._getFeatures(e, t, r, n);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  executeSpatialRelationTest(e) {
    if (e.geometry === null)
      return d(!1);
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects": {
        const t = k(this._relationGeom), r = k(e.geometry);
        return O(t, r);
      }
      case "esriSpatialRelIntersects":
        return O(this._relationGeom, e.geometry);
      case "esriSpatialRelContains":
        return ce(this._relationGeom, e.geometry);
      case "esriSpatialRelOverlaps":
        return he(this._relationGeom, e.geometry);
      case "esriSpatialRelWithin":
        return oe(this._relationGeom, e.geometry);
      case "esriSpatialRelTouches":
        return ue(this._relationGeom, e.geometry);
      case "esriSpatialRelCrosses":
        return le(this._relationGeom, e.geometry);
      case "esriSpatialRelRelation":
        return ie(this._relationGeom, e.geometry, this._relationString);
    }
  }
  _fetchAndRefineFeatures(e, t, r) {
    const n = new b([], e, !1, null), a = Math.min(t, e.length);
    return this._parent._getFeatures(n, -1, a, r).then(() => {
      this._checkCancelled(r);
      const i = [];
      for (let l = 0; l < a; l++) {
        const u = this._parent._featureFromCache(e[l]);
        i.push(this.executeSpatialRelationTest(u));
      }
      return ee(i);
    }).then((i) => {
      for (let l = 0; l < t; l++)
        i[l] === !0 ? this._idstates[e[l]] = T.InFeatureSet : this._idstates[e[l]] = T.NotInFeatureSet;
      return "success";
    });
  }
  _getFilteredSet(e, t, r, n, a) {
    return this._ensureLoaded().then(() => this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, r, n, a)).then((i) => {
      let l;
      return this._checkCancelled(a), l = t !== null ? new b(i._candidates.slice(0).concat(i._known.slice(0)), [], i._ordered, this._clonePageDefinition(i.pagesDefinition)) : new b(i._candidates.slice(0), i._known.slice(0), i._ordered, this._clonePageDefinition(i.pagesDefinition)), l;
    });
  }
  _stat(e, t, r, n, a, i, l) {
    return r !== "" ? d({ calculated: !1 }) : this._parent._stat(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a, i, l).then((u) => u.calculated === !1 ? a === null && r === "" && n === null ? this._manualStat(e, t, i, l) : { calculated: !1 } : u);
  }
  _canDoAggregates(e, t, r, n, a) {
    return r !== "" || n !== null || this._parent === null ? d(!1) : this._parent._canDoAggregates(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a);
  }
  _getAggregatePagesDataSourceDefinition(e, t, r, n, a, i, l) {
    return this._parent === null ? p(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a, i, l);
  }
  static registerAction() {
    y._featuresetFunctions.intersects = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: e });
    }, y._featuresetFunctions.envelopeIntersects = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: e });
    }, y._featuresetFunctions.contains = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: e });
    }, y._featuresetFunctions.overlaps = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: e });
    }, y._featuresetFunctions.within = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: e });
    }, y._featuresetFunctions.touches = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: e });
    }, y._featuresetFunctions.crosses = function(e) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: e });
    }, y._featuresetFunctions.relate = function(e, t) {
      return e == null ? new F({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: e, relationString: t });
    };
  }
}
export {
  ge as E,
  me as T,
  y as a,
  G as b,
  Le as c,
  v as d,
  fe as f,
  I as g,
  Ge as h,
  pe as i,
  _e as l,
  Ue as m,
  F as n,
  Oe as o,
  Me as p,
  ke as s,
  b as t,
  N as u
};
