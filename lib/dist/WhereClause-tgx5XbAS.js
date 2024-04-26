import { fi as Es, Z as At } from "./index-Ek1MTSEY.js";
import "vue";
function Ss(l, u) {
  const o = Ft[l.toLowerCase()];
  if (o == null)
    throw new Error("Function Not Recognised");
  if (u.length < o.minParams || u.length > o.maxParams)
    throw new Error(`Invalid Parameter count for call to ${l.toUpperCase()}`);
  return o.evaluate(u);
}
function Cs(l, u) {
  const o = Ft[l.toLowerCase()];
  return o != null && u >= o.minParams && u <= o.maxParams;
}
const Ft = { min: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.min.apply(Math, l[0]) }, max: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.max.apply(Math, l[0]) }, avg: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Lt(l[0]) }, sum: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Ps(l[0]) }, stddev: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.sqrt(It(l[0])) }, count: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : l[0].length }, var: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : It(l[0]) } };
function Lt(l) {
  let u = 0;
  for (let o = 0; o < l.length; o++)
    u += l[o];
  return u / l.length;
}
function Ps(l) {
  let u = 0;
  for (let o = 0; o < l.length; o++)
    u += l[o];
  return u;
}
function It(l) {
  const u = Lt(l), o = l.length;
  let p = 0;
  for (const i of l)
    p += (i - u) ** 2;
  return o > 1 ? p / (o - 1) : 0;
}
let $ = class j {
  constructor() {
    this.op = "+", this.day = 0, this.second = 0, this.hour = 0, this.month = 0, this.year = 0, this.minute = 0;
  }
  static _fixDefaults(u) {
    if (u.precision !== null || u.secondary !== null)
      throw new Error("Primary and Secondary SqlInterval qualifiers not supported");
  }
  static createFromMilliseconds(u) {
    const o = new j();
    return o.second = u / 1e3, o;
  }
  static createFromValueAndQualifer(u, o, p) {
    let i = null;
    const v = new j();
    if (v.op = p === "-" ? "-" : "+", o.type === "interval-period") {
      j._fixDefaults(o);
      const m = new RegExp("^[0-9]{1,}$");
      if (o.period === "year" || o.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (!m.test(u))
        throw new Error("Illegal Interval");
      v[o.period] = parseFloat(u);
    } else {
      if (j._fixDefaults(o.start), j._fixDefaults(o.end), o.start.period === "year" || o.start.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (o.end.period === "year" || o.end.period === "month")
        throw new Error("Year-Month Intervals not supported");
      switch (o.start.period) {
        case "day":
          switch (o.end.period) {
            case "hour":
              if (i = new RegExp("^[0-9]{1,} [0-9]{1,}$"), !i.test(u))
                throw new Error("Illegal Interval");
              v[o.start.period] = parseFloat(u.split(" ")[0]), v[o.end.period] = parseFloat(u.split(" ")[1]);
              break;
            case "minute":
              if (i = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"), !i.test(u))
                throw new Error("Illegal Interval");
              {
                v[o.start.period] = parseFloat(u.split(" ")[0]);
                const m = u.split(" ")[1].split(":");
                v.hour = parseFloat(m[0]), v.minute = parseFloat(m[1]);
              }
              break;
            case "second":
              if (i = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !i.test(u))
                throw new Error("Illegal Interval");
              {
                v[o.start.period] = parseFloat(u.split(" ")[0]);
                const m = u.split(" ")[1].split(":");
                v.hour = parseFloat(m[0]), v.minute = parseFloat(m[1]), v.second = parseFloat(m[2]);
              }
              break;
            default:
              throw "Invalid Interval.";
          }
          break;
        case "hour":
          switch (o.end.period) {
            case "minute":
              if (i = new RegExp("^[0-9]{1,}:[0-9]{1,}$"), !i.test(u))
                throw new Error("Illegal Interval");
              v.hour = parseFloat(u.split(":")[0]), v.minute = parseFloat(u.split(":")[1]);
              break;
            case "second":
              if (i = new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !i.test(u))
                throw new Error("Illegal Interval");
              {
                const m = u.split(":");
                v.hour = parseFloat(m[0]), v.minute = parseFloat(m[1]), v.second = parseFloat(m[2]);
              }
              break;
            default:
              throw "Invalid Interval.";
          }
          break;
        case "minute":
          if (o.end.period !== "second")
            throw "Invalid Interval.";
          if (i = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !i.test(u))
            throw new Error("Illegal Interval");
          {
            const m = u.split(":");
            v.minute = parseFloat(m[0]), v.second = parseFloat(m[1]);
          }
          break;
        default:
          throw "Invalid Interval.";
      }
    }
    return v;
  }
  valueInMilliseconds() {
    return (this.op === "-" ? -1 : 1) * (1e3 * this.second + 60 * this.minute * 1e3 + 60 * this.hour * 60 * 1e3 + 24 * this.day * 60 * 60 * 1e3 + this.month * (365 / 12) * 24 * 60 * 60 * 1e3 + 365 * this.year * 24 * 60 * 60 * 1e3);
  }
};
function Mt(l, u) {
  const o = Dt[l.toLowerCase()];
  if (o == null)
    throw new Error("Function Not Recognised");
  if (u.length < o.minParams || u.length > o.maxParams)
    throw new Error(`Invalid Parameter count for call to ${l.toUpperCase()}`);
  return o.evaluate(u);
}
function Fs(l, u) {
  const o = Dt[l.toLowerCase()];
  return o != null && u >= o.minParams && u <= o.maxParams;
}
const Dt = { extract: { minParams: 2, maxParams: 2, evaluate: ([l, u]) => {
  if (u == null)
    return null;
  if (u instanceof Date)
    switch (l.toUpperCase()) {
      case "SECOND":
        return u.getSeconds();
      case "MINUTE":
        return u.getMinutes();
      case "HOUR":
        return u.getHours();
      case "DAY":
        return u.getDate();
      case "MONTH":
        return u.getMonth() + 1;
      case "YEAR":
        return u.getFullYear();
    }
  throw new Error("Invalid Parameter for call to EXTRACT");
} }, substring: { minParams: 2, maxParams: 3, evaluate: (l) => {
  if (l.length === 2) {
    const [u, o] = l;
    return u == null || o == null ? null : u.toString().substring(o - 1);
  }
  if (l.length === 3) {
    const [u, o, p] = l;
    return u == null || o == null || p == null ? null : p <= 0 ? "" : u.toString().substring(o - 1, o + p - 1);
  }
} }, position: { minParams: 2, maxParams: 2, evaluate: ([l, u]) => l == null || u == null ? null : u.indexOf(l) + 1 }, trim: { minParams: 2, maxParams: 3, evaluate: (l) => {
  const u = l.length === 3, o = u ? l[1] : " ", p = u ? l[2] : l[1];
  if (o == null || p == null)
    return null;
  const i = `(${Es(o)})`;
  switch (l[0]) {
    case "BOTH":
      return p.replace(new RegExp(`^${i}*|${i}*$`, "g"), "");
    case "LEADING":
      return p.replace(new RegExp(`^${i}*`, "g"), "");
    case "TRAILING":
      return p.replace(new RegExp(`${i}*$`, "g"), "");
  }
  throw new Error("Invalid Parameter for call to TRIM");
} }, abs: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.abs(l[0]) }, ceiling: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.ceil(l[0]) }, floor: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.floor(l[0]) }, log: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.log(l[0]) }, log10: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.log(l[0]) * Math.LOG10E }, sin: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.sin(l[0]) }, cos: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.cos(l[0]) }, tan: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.tan(l[0]) }, asin: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.asin(l[0]) }, acos: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.acos(l[0]) }, atan: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : Math.atan(l[0]) }, sign: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : l[0] > 0 ? 1 : l[1] < 0 ? -1 : 0 }, power: { minParams: 2, maxParams: 2, evaluate: (l) => l[0] == null || l[1] == null ? null : l[0] ** l[1] }, mod: { minParams: 2, maxParams: 2, evaluate: (l) => l[0] == null || l[1] == null ? null : l[0] % l[1] }, round: { minParams: 1, maxParams: 2, evaluate: (l) => {
  const u = l[0], o = l.length === 2 ? 10 ** l[1] : 1;
  return u == null ? null : Math.round(u * o) / o;
} }, truncate: { minParams: 1, maxParams: 2, evaluate: (l) => l[0] == null ? null : l.length === 1 ? parseInt(l[0].toFixed(0), 10) : parseFloat(l[0].toFixed(l[1])) }, char_length: { minParams: 1, maxParams: 1, evaluate: (l) => typeof l[0] == "string" || l[0] instanceof String ? l[0].length : 0 }, concat: { minParams: 1, maxParams: 1 / 0, evaluate: (l) => {
  let u = "";
  for (let o = 0; o < l.length; o++) {
    if (l[o] == null)
      return null;
    u += l[o].toString();
  }
  return u;
} }, lower: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : l[0].toString().toLowerCase() }, upper: { minParams: 1, maxParams: 1, evaluate: (l) => l[0] == null ? null : l[0].toString().toUpperCase() } };
var _t, Et, Ot = { exports: {} };
Et = function() {
  function l(i, v) {
    function m() {
      this.constructor = i;
    }
    m.prototype = v.prototype, i.prototype = new m();
  }
  function u(i, v, m, t) {
    var N = Error.call(this, i);
    return Object.setPrototypeOf && Object.setPrototypeOf(N, u.prototype), N.expected = v, N.found = m, N.location = t, N.name = "SyntaxError", N;
  }
  function o(i, v, m) {
    return m = m || " ", i.length > v ? i : (v -= i.length, i + (m += m.repeat(v)).slice(0, v));
  }
  function p(i, v) {
    var m, t = {}, N = (v = v !== void 0 ? v : {}).grammarSource, T = { start: We }, P = We, J = "!", M = "=", x = ">=", _ = ">", F = "<=", E = "<>", Bt = "<", Ee = "!=", ie = "+", le = "-", jt = "*", Yt = "/", zt = "@", Se = "'", Ce = "N'", W = "''", Gt = ".", Wt = "null", Zt = "true", Kt = "false", Qt = "in", Xt = "is", er = "like", tr = "escape", rr = "not", nr = "and", ar = "or", ur = "between", sr = "from", or = "for", ir = "substring", lr = "extract", cr = "trim", fr = "position", pr = "timestamp", vr = "date", hr = "leading", dr = "trailing", mr = "both", gr = "to", wr = "interval", yr = "year", Nr = "month", br = "day", xr = "hour", Tr = "minute", Ar = "second", Ir = "case", _r = "end", Er = "when", Sr = "then", Cr = "else", Pr = ",", Fr = "(", Lr = ")", Pe = "`", Mr = /^[A-Za-z_\x80-\uFFFF]/, Dr = /^[A-Za-z0-9_]/, Or = /^[A-Za-z0-9_.\x80-\uFFFF]/, Fe = /^[^']/, Rr = /^[0-9]/, $r = /^[eE]/, Jr = /^[+\-]/, kr = /^[ \t\n\r]/, Le = /^[^`]/, Ur = g("!", !1), Me = g("=", !1), Hr = g(">=", !1), Vr = g(">", !1), qr = g("<=", !1), Br = g("<>", !1), jr = g("<", !1), Yr = g("!=", !1), ce = g("+", !1), fe = g("-", !1), zr = g("*", !1), Gr = g("/", !1), Wr = D([["A", "Z"], ["a", "z"], "_", ["", "￿"]], !1, !1), Zr = D([["A", "Z"], ["a", "z"], ["0", "9"], "_"], !1, !1), Kr = D([["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["", "￿"]], !1, !1), Qr = g("@", !1), De = g("'", !1), Xr = g("N'", !1), Oe = g("''", !1), Re = D(["'"], !0, !1), en = g(".", !1), tn = D([["0", "9"]], !1, !1), rn = D(["e", "E"], !1, !1), nn = D(["+", "-"], !1, !1), an = g("NULL", !0), un = g("TRUE", !0), sn = g("FALSE", !0), on = g("IN", !0), ln = g("IS", !0), cn = g("LIKE", !0), fn = g("ESCAPE", !0), pn = g("NOT", !0), vn = g("AND", !0), hn = g("OR", !0), dn = g("BETWEEN", !0), mn = g("FROM", !0), gn = g("FOR", !0), wn = g("SUBSTRING", !0), yn = g("EXTRACT", !0), Nn = g("TRIM", !0), bn = g("POSITION", !0), xn = g("TIMESTAMP", !0), Tn = g("DATE", !0), An = g("LEADING", !0), In = g("TRAILING", !0), _n = g("BOTH", !0), En = g("TO", !0), Sn = g("INTERVAL", !0), Cn = g("YEAR", !0), Pn = g("MONTH", !0), Fn = g("DAY", !0), Ln = g("HOUR", !0), Mn = g("MINUTE", !0), Dn = g("SECOND", !0), On = g("CASE", !0), Rn = g("END", !0), $n = g("WHEN", !0), Jn = g("THEN", !0), kn = g("ELSE", !0), Un = g(",", !1), Hn = g("(", !1), Vn = g(")", !1), qn = D([" ", "	", `
`, "\r"], !1, !1), $e = g("`", !1), Je = D(["`"], !0, !1), Bn = function(e) {
      return e;
    }, jn = function(e, n) {
      var a = { type: "expr_list" }, s = _s(e, n);
      return a.value = s, a;
    }, pe = function(e, n) {
      return Te(e, n);
    }, Yn = function(e) {
      return As("NOT", e);
    }, zn = function(e, n) {
      return n == "" || n == null || n == null ? e : n.type == "arithmetic" ? Te(e, n.tail) : Tt(n.op, e, n.right, n.escape);
    }, Gn = function(e) {
      return { type: "arithmetic", tail: e };
    }, Wn = function(e, n) {
      return { op: e + "NOT", right: n };
    }, Zn = function(e, n) {
      return { op: e, right: n };
    }, Kn = function(e, n, a) {
      return { op: "NOT" + e, right: { type: "expr_list", value: [n, a] } };
    }, Qn = function(e, n, a) {
      return { op: e, right: { type: "expr_list", value: [n, a] } };
    }, ke = function(e) {
      return e[0] + " " + e[2];
    }, Xn = function(e, n, a) {
      return { op: e, right: n, escape: a.value };
    }, ea = function(e, n) {
      return { op: e, right: n, escape: "" };
    }, ta = function(e, n) {
      return { op: e, right: n };
    }, ra = function(e) {
      return { op: e, right: { type: "expr_list", value: [] } };
    }, na = function(e, n) {
      return { op: e, right: n };
    }, aa = function(e, n) {
      return Te(e, n);
    }, ua = function(e) {
      return e.paren = !0, e;
    }, sa = function(e) {
      return /^CURRENT_DATE$/i.test(e) ? { type: "current_time", mode: "date" } : /^CURRENT_TIMESTAMP$/i.test(e) ? { type: "current_time", mode: "timestamp" } : { type: "column_ref", table: "", column: e };
    }, Ue = function(e) {
      return e;
    }, He = function(e, n) {
      return e + n.join("");
    }, oa = function(e) {
      return { type: "param", value: e[1] };
    }, ia = function(e, n) {
      return { type: "function", name: "extract", args: { type: "expr_list", value: [{ type: "string", value: e }, n] } };
    }, la = function(e, n, a) {
      return { type: "function", name: "substring", args: { type: "expr_list", value: a ? [e, n, a[2]] : [e, n] } };
    }, ca = function(e, n, a) {
      return { type: "function", name: "trim", args: { type: "expr_list", value: [{ type: "string", value: e ?? "BOTH" }, n, a] } };
    }, fa = function(e, n) {
      return { type: "function", name: "trim", args: { type: "expr_list", value: [{ type: "string", value: e ?? "BOTH" }, n] } };
    }, pa = function(e, n) {
      return { type: "function", name: "position", args: { type: "expr_list", value: [e, n] } };
    }, va = function(e, n) {
      return { type: "function", name: e, args: n || { type: "expr_list", value: [] } };
    }, ha = function(e) {
      return { type: "timestamp", value: e.value };
    }, da = function(e, n, a) {
      return { type: "interval", value: n, qualifier: a, op: e };
    }, ma = function(e, n) {
      return { type: "interval", value: e, qualifier: n, op: "" };
    }, ga = function(e, n) {
      return { type: "interval-qualifier", start: e, end: n };
    }, wa = function(e, n) {
      return { type: "interval-period", period: e.value, precision: n, secondary: null };
    }, Ve = function(e) {
      return { type: "interval-period", period: e.value, precision: null, secondary: null };
    }, ya = function(e) {
      return { type: "interval-period", period: e.value, precision: null, secondary: null };
    }, qe = function(e, n) {
      return { type: "interval-period", period: "second", precision: e, secondary: n };
    }, Na = function(e) {
      return { type: "interval-period", period: "second", precision: e, secondary: null };
    }, ba = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, xa = function(e, n) {
      return { type: "interval-period", period: e.value, precision: n, secondary: null };
    }, Ta = function(e) {
      return { type: "interval-period", period: "second", precision: e, secondary: null };
    }, Aa = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, Ia = function() {
      return { type: "string", value: "day" };
    }, _a = function() {
      return { type: "string", value: "hour" };
    }, Ea = function() {
      return { type: "string", value: "minute" };
    }, Sa = function() {
      return { type: "string", value: "month" };
    }, Ca = function() {
      return { type: "string", value: "year" };
    }, Be = function(e) {
      return parseFloat(e);
    }, Pa = function(e) {
      return { type: "date", value: e.value };
    }, Fa = function() {
      return { type: "null", value: null };
    }, La = function() {
      return { type: "bool", value: !0 };
    }, Ma = function() {
      return { type: "bool", value: !1 };
    }, je = function() {
      return "'";
    }, Da = function(e) {
      return { type: "string", value: e.join("") };
    }, Oa = function(e, n) {
      return { type: "case_expression", format: "simple", operand: e, clauses: n, else: null };
    }, Ra = function(e, n, a) {
      return { type: "case_expression", format: "simple", operand: e, clauses: n, else: a.value };
    }, $a = function(e) {
      return { type: "case_expression", format: "searched", clauses: e, else: null };
    }, Ja = function(e, n) {
      return { type: "case_expression", format: "searched", clauses: e, else: n.value };
    }, Ye = function(e, n) {
      return { type: "when_clause", operand: e, value: n };
    }, ka = function(e) {
      return { type: "else_clause", value: e };
    }, Ua = function(e) {
      return { type: "number", value: e };
    }, Ha = function(e, n, a) {
      return parseFloat(e + n + a);
    }, Va = function(e, n) {
      return parseFloat(e + n);
    }, qa = function(e, n) {
      return parseFloat(e + n);
    }, Ba = function(e) {
      return parseFloat(e);
    }, ja = function(e, n) {
      return e[0] + n;
    }, Ya = function(e) {
      return "." + (e ?? "");
    }, za = function(e, n) {
      return e + n;
    }, Ga = function(e) {
      return e.join("");
    }, Wa = function(e, n) {
      return "e" + (n === null ? "" : n);
    }, Za = function() {
      return "IN";
    }, Ka = function() {
      return "IS";
    }, Qa = function() {
      return "LIKE";
    }, Xa = function() {
      return "ESCAPE";
    }, eu = function() {
      return "NOT";
    }, tu = function() {
      return "AND";
    }, ru = function() {
      return "OR";
    }, nu = function() {
      return "BETWEEN";
    }, au = function() {
      return "FROM";
    }, uu = function() {
      return "FOR";
    }, su = function() {
      return "SUBSTRING";
    }, ou = function() {
      return "EXTRACT";
    }, iu = function() {
      return "TRIM";
    }, lu = function() {
      return "POSITION";
    }, cu = function() {
      return "TIMESTAMP";
    }, fu = function() {
      return "DATE";
    }, pu = function() {
      return "LEADING";
    }, vu = function() {
      return "TRAILING";
    }, hu = function() {
      return "BOTH";
    }, du = function() {
      return "TO";
    }, mu = function() {
      return "INTERVAL";
    }, gu = function() {
      return "YEAR";
    }, wu = function() {
      return "MONTH";
    }, yu = function() {
      return "DAY";
    }, Nu = function() {
      return "HOUR";
    }, bu = function() {
      return "MINUTE";
    }, xu = function() {
      return "SECOND";
    }, Tu = function() {
      return "CASE";
    }, Au = function() {
      return "END";
    }, Iu = function() {
      return "WHEN";
    }, _u = function() {
      return "THEN";
    }, Eu = function() {
      return "ELSE";
    }, Su = function(e) {
      return e.join("");
    }, r = 0, Z = [{ line: 1, column: 1 }], L = 0, ve = [], c = 0;
    if ("startRule" in v) {
      if (!(v.startRule in T))
        throw new Error(`Can't start parsing from rule "` + v.startRule + '".');
      P = T[v.startRule];
    }
    function g(e, n) {
      return { type: "literal", text: e, ignoreCase: n };
    }
    function D(e, n, a) {
      return { type: "class", parts: e, inverted: n, ignoreCase: a };
    }
    function Cu() {
      return { type: "end" };
    }
    function ze(e) {
      var n, a = Z[e];
      if (a)
        return a;
      for (n = e - 1; !Z[n]; )
        n--;
      for (a = { line: (a = Z[n]).line, column: a.column }; n < e; )
        i.charCodeAt(n) === 10 ? (a.line++, a.column = 1) : a.column++, n++;
      return Z[e] = a, a;
    }
    function Ge(e, n) {
      var a = ze(e), s = ze(n);
      return { source: N, start: { offset: e, line: a.line, column: a.column }, end: { offset: n, line: s.line, column: s.column } };
    }
    function h(e) {
      r < L || (r > L && (L = r, ve = []), ve.push(e));
    }
    function Pu(e, n, a) {
      return new u(u.buildMessage(e, n), e, n, a);
    }
    function We() {
      var e, n;
      return e = r, f(), (n = I()) !== t ? (f(), e = Bn(n)) : (r = e, e = t), e;
    }
    function Ze() {
      var e, n, a, s, d, y, b, A;
      if (e = r, (n = I()) !== t) {
        for (a = [], s = r, d = f(), (y = se()) !== t ? (b = f(), (A = I()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t); s !== t; )
          a.push(s), s = r, d = f(), (y = se()) !== t ? (b = f(), (A = I()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t);
        e = jn(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function I() {
      var e, n, a, s, d, y, b, A;
      if (e = r, (n = he()) !== t) {
        for (a = [], s = r, d = f(), (y = ft()) !== t ? (b = f(), (A = he()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t); s !== t; )
          a.push(s), s = r, d = f(), (y = ft()) !== t ? (b = f(), (A = he()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t);
        e = pe(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function he() {
      var e, n, a, s, d, y, b, A;
      if (e = r, (n = K()) !== t) {
        for (a = [], s = r, d = f(), (y = ne()) !== t ? (b = f(), (A = K()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t); s !== t; )
          a.push(s), s = r, d = f(), (y = ne()) !== t ? (b = f(), (A = K()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t);
        e = pe(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function K() {
      var e, n, a, s, d;
      return e = r, (n = z()) === t && (n = r, i.charCodeAt(r) === 33 ? (a = J, r++) : (a = t, c === 0 && h(Ur)), a !== t ? (s = r, c++, i.charCodeAt(r) === 61 ? (d = M, r++) : (d = t, c === 0 && h(Me)), c--, d === t ? s = void 0 : (r = s, s = t), s !== t ? n = a = [a, s] : (r = n, n = t)) : (r = n, n = t)), n !== t ? (a = f(), (s = K()) !== t ? e = Yn(s) : (r = e, e = t)) : (r = e, e = t), e === t && (e = Fu()), e;
    }
    function Fu() {
      var e, n, a;
      return e = r, (n = O()) !== t ? (f(), (a = Lu()) === t && (a = null), e = zn(n, a)) : (r = e, e = t), e;
    }
    function Lu() {
      var e;
      return (e = Mu()) === t && (e = $u()) === t && (e = Ou()) === t && (e = Du()) === t && (e = Ru()), e;
    }
    function Mu() {
      var e, n, a, s, d, y;
      if (e = [], n = r, a = f(), (s = Ke()) !== t ? (d = f(), (y = O()) !== t ? n = a = [a, s, d, y] : (r = n, n = t)) : (r = n, n = t), n !== t)
        for (; n !== t; )
          e.push(n), n = r, a = f(), (s = Ke()) !== t ? (d = f(), (y = O()) !== t ? n = a = [a, s, d, y] : (r = n, n = t)) : (r = n, n = t);
      else
        e = t;
      return e !== t && (e = Gn(e)), e;
    }
    function Ke() {
      var e;
      return i.substr(r, 2) === x ? (e = x, r += 2) : (e = t, c === 0 && h(Hr)), e === t && (i.charCodeAt(r) === 62 ? (e = _, r++) : (e = t, c === 0 && h(Vr)), e === t && (i.substr(r, 2) === F ? (e = F, r += 2) : (e = t, c === 0 && h(qr)), e === t && (i.substr(r, 2) === E ? (e = E, r += 2) : (e = t, c === 0 && h(Br)), e === t && (i.charCodeAt(r) === 60 ? (e = Bt, r++) : (e = t, c === 0 && h(jr)), e === t && (i.charCodeAt(r) === 61 ? (e = M, r++) : (e = t, c === 0 && h(Me)), e === t && (i.substr(r, 2) === Ee ? (e = Ee, r += 2) : (e = t, c === 0 && h(Yr)))))))), e;
    }
    function Du() {
      var e, n, a, s;
      return e = r, (n = lt()) !== t ? (f(), (a = z()) !== t ? (f(), (s = O()) !== t ? e = Wn(n, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = lt()) !== t ? (f(), (a = O()) !== t ? e = Zn(n, a) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function Ou() {
      var e, n, a, s, d, y;
      return e = r, (n = z()) !== t ? (f(), (a = pt()) !== t ? (f(), (s = O()) !== t ? (f(), (d = ne()) !== t ? (f(), (y = O()) !== t ? e = Kn(a, s, y) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = pt()) !== t ? (f(), (a = O()) !== t ? (f(), (s = ne()) !== t ? (f(), (d = O()) !== t ? e = Qn(n, a, d) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function Qe() {
      var e, n, a, s, d;
      return e = r, n = r, (a = z()) !== t ? (s = f(), (d = ct()) !== t ? n = a = [a, s, d] : (r = n, n = t)) : (r = n, n = t), n !== t && (n = ke(n)), (e = n) === t && (e = ct()), e;
    }
    function de() {
      var e, n, a, s, d;
      return e = r, n = r, (a = z()) !== t ? (s = f(), (d = be()) !== t ? n = a = [a, s, d] : (r = n, n = t)) : (r = n, n = t), n !== t && (n = ke(n)), (e = n) === t && (e = be()), e;
    }
    function Ru() {
      var e, n, a, s;
      return e = r, (n = Qe()) !== t ? (f(), (a = V()) !== t ? (f(), fs() !== t ? (f(), (s = Ne()) !== t ? e = Xn(n, a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = Qe()) !== t ? (f(), (a = V()) !== t ? e = ea(n, a) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function $u() {
      var e, n, a, s;
      return e = r, (n = de()) !== t ? (f(), (a = S()) !== t ? (f(), (s = Ze()) !== t ? (f(), C() !== t ? e = ta(n, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = de()) !== t ? (f(), (a = S()) !== t ? (f(), (s = C()) !== t ? e = ra(n) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = de()) !== t ? (f(), (a = ye()) !== t ? e = na(n, a) : (r = e, e = t)) : (r = e, e = t))), e;
    }
    function O() {
      var e, n, a, s, d, y, b, A;
      if (e = r, (n = me()) !== t) {
        for (a = [], s = r, d = f(), (y = Xe()) !== t ? (b = f(), (A = me()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t); s !== t; )
          a.push(s), s = r, d = f(), (y = Xe()) !== t ? (b = f(), (A = me()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t);
        e = pe(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function Xe() {
      var e;
      return i.charCodeAt(r) === 43 ? (e = ie, r++) : (e = t, c === 0 && h(ce)), e === t && (i.charCodeAt(r) === 45 ? (e = le, r++) : (e = t, c === 0 && h(fe))), e;
    }
    function me() {
      var e, n, a, s, d, y, b, A;
      if (e = r, (n = ge()) !== t) {
        for (a = [], s = r, d = f(), (y = et()) !== t ? (b = f(), (A = ge()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t); s !== t; )
          a.push(s), s = r, d = f(), (y = et()) !== t ? (b = f(), (A = ge()) !== t ? s = d = [d, y, b, A] : (r = s, s = t)) : (r = s, s = t);
        e = aa(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function et() {
      var e;
      return i.charCodeAt(r) === 42 ? (e = jt, r++) : (e = t, c === 0 && h(zr)), e === t && (i.charCodeAt(r) === 47 ? (e = Yt, r++) : (e = t, c === 0 && h(Gr))), e;
    }
    function ge() {
      var e, n;
      return (e = zu()) === t && (e = Hu()) === t && (e = Vu()) === t && (e = qu()) === t && (e = Bu()) === t && (e = ju()) === t && (e = rs()) === t && (e = Ju()) === t && (e = ye()) === t && (e = r, S() !== t ? (f(), (n = I()) !== t ? (f(), C() !== t ? e = ua(n) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function Ju() {
      var e;
      return (e = ku()) !== t && (e = sa(e)), e;
    }
    function ku() {
      var e;
      return (e = Uu()) !== t && (e = Ue(e)), e;
    }
    function Uu() {
      var e, n, a, s;
      if (e = r, (n = we()) !== t) {
        for (a = [], s = rt(); s !== t; )
          a.push(s), s = rt();
        e = He(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function tt() {
      var e, n, a, s;
      if (e = r, (n = we()) !== t) {
        for (a = [], s = w(); s !== t; )
          a.push(s), s = w();
        e = He(n, a);
      } else
        r = e, e = t;
      return e;
    }
    function we() {
      var e;
      return Mr.test(i.charAt(r)) ? (e = i.charAt(r), r++) : (e = t, c === 0 && h(Wr)), e;
    }
    function w() {
      var e;
      return Dr.test(i.charAt(r)) ? (e = i.charAt(r), r++) : (e = t, c === 0 && h(Zr)), e;
    }
    function rt() {
      var e;
      return Or.test(i.charAt(r)) ? (e = i.charAt(r), r++) : (e = t, c === 0 && h(Kr)), e;
    }
    function ye() {
      var e, n, a;
      return e = r, i.charCodeAt(r) === 64 ? (n = zt, r++) : (n = t, c === 0 && h(Qr)), n !== t && (a = tt()) !== t ? e = n = [n, a] : (r = e, e = t), e !== t && (e = oa(e)), e;
    }
    function Hu() {
      var e, n, a;
      return e = r, hs() !== t ? (f(), S() !== t ? (f(), (n = Yu()) !== t ? (f(), xe() !== t ? (f(), (a = I()) !== t ? (f(), C() !== t ? e = ia(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function Vu() {
      var e, n, a, s, d, y, b;
      return e = r, vs() !== t ? (f(), S() !== t ? (f(), (n = I()) !== t ? (f(), xe() !== t ? (f(), (a = I()) !== t ? (f(), s = r, (d = ps()) !== t ? (y = f(), (b = I()) !== t ? s = d = [d, y, b, f()] : (r = s, s = t)) : (r = s, s = t), s === t && (s = null), (d = C()) !== t ? e = la(n, a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function qu() {
      var e, n, a, s;
      return e = r, vt() !== t ? (f(), S() !== t ? (f(), (n = nt()) === t && (n = null), f(), (a = I()) !== t ? (f(), xe() !== t ? (f(), (s = I()) !== t ? (f(), C() !== t ? e = ca(n, a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, vt() !== t ? (f(), S() !== t ? (f(), (n = nt()) === t && (n = null), f(), (a = I()) !== t ? (f(), C() !== t ? e = fa(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function nt() {
      var e;
      return (e = ws()) === t && (e = ys()) === t && (e = Ns()), e;
    }
    function Bu() {
      var e, n, a;
      return e = r, ds() !== t ? (f(), S() !== t ? (f(), (n = I()) !== t ? (f(), be() !== t ? (f(), (a = I()) !== t ? (f(), C() !== t ? e = pa(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ju() {
      var e, n, a;
      return e = r, (n = Ts()) !== t ? (f(), S() !== t ? (f(), (a = Ze()) === t && (a = null), f(), C() !== t ? e = va(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function Yu() {
      var e;
      return (e = dt()) === t && (e = mt()) === t && (e = gt()) === t && (e = wt()) === t && (e = yt()) === t && (e = k()), e;
    }
    function zu() {
      var e;
      return (e = Ne()) === t && (e = us()) === t && (e = ts()) === t && (e = es()) === t && (e = Xu()) === t && (e = Gu()) === t && (e = Wu()), e;
    }
    function Gu() {
      var e, n;
      return e = r, ms() !== t ? (f(), (n = V()) !== t ? e = ha(n) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function Wu() {
      var e, n, a, s;
      return e = r, ht() !== t ? (f(), i.charCodeAt(r) === 45 ? (n = le, r++) : (n = t, c === 0 && h(fe)), n === t && (i.charCodeAt(r) === 43 ? (n = ie, r++) : (n = t, c === 0 && h(ce))), n !== t ? (f(), (a = V()) !== t ? (f(), (s = at()) !== t ? e = da(n, a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, ht() !== t ? (f(), (n = V()) !== t ? (f(), (a = at()) !== t ? e = ma(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)), e;
    }
    function at() {
      var e, n, a;
      return e = r, (n = Zu()) !== t ? (f(), bs() !== t ? (f(), (a = Ku()) !== t ? e = ga(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = Qu()), e;
    }
    function Zu() {
      var e, n, a;
      return e = r, (n = Y()) !== t ? (f(), S() !== t ? (f(), (a = X()) !== t ? (f(), C() !== t ? e = wa(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = Y()) !== t && (n = Ve(n)), e = n), e;
    }
    function Ku() {
      var e, n, a, s;
      return e = r, (n = Y()) !== t && (n = ya(n)), (e = n) === t && (e = r, (n = k()) !== t ? (f(), S() !== t ? (f(), (a = X()) !== t ? (f(), se() !== t ? (f(), (s = Q()) !== t ? (f(), C() !== t ? e = qe(a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = k()) !== t ? (f(), S() !== t ? (f(), (a = X()) !== t ? (f(), C() !== t ? e = Na(a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = k()) !== t && (n = ba()), e = n))), e;
    }
    function Qu() {
      var e, n, a, s;
      return e = r, (n = Y()) !== t ? (f(), S() !== t ? (f(), (a = Q()) !== t ? (f(), C() !== t ? e = xa(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = Y()) !== t && (n = Ve(n)), (e = n) === t && (e = r, (n = k()) !== t ? (f(), S() !== t ? (f(), (a = X()) !== t ? (f(), se() !== t ? (f(), (s = Q()) !== t ? (f(), C() !== t ? e = qe(a, s) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = k()) !== t ? (f(), S() !== t ? (f(), (a = Q()) !== t ? (f(), C() !== t ? e = Ta(a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e === t && (e = r, (n = k()) !== t && (n = Aa()), e = n)))), e;
    }
    function Y() {
      var e, n;
      return e = r, (n = gt()) !== t && (n = Ia()), (e = n) === t && (e = r, (n = wt()) !== t && (n = _a()), (e = n) === t && (e = r, (n = yt()) !== t && (n = Ea()), (e = n) === t && (e = r, (n = mt()) !== t && (n = Sa()), (e = n) === t && (e = r, (n = dt()) !== t && (n = Ca()), e = n)))), e;
    }
    function Q() {
      var e;
      return (e = q()) !== t && (e = Be(e)), e;
    }
    function X() {
      var e;
      return (e = q()) !== t && (e = Be(e)), e;
    }
    function Xu() {
      var e, n;
      return e = r, gs() !== t ? (f(), (n = V()) !== t ? e = Pa(n) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function es() {
      var e;
      return (e = is()) !== t && (e = Fa()), e;
    }
    function ts() {
      var e, n;
      return e = r, (n = ls()) !== t && (n = La()), (e = n) === t && (e = r, (n = cs()) !== t && (n = Ma()), e = n), e;
    }
    function V() {
      var e;
      return (e = Ne()) === t && (e = ye()), e;
    }
    function Ne() {
      var e, n, a, s, d;
      if (e = r, i.charCodeAt(r) === 39 ? (n = Se, r++) : (n = t, c === 0 && h(De)), n === t && (i.substr(r, 2) === Ce ? (n = Ce, r += 2) : (n = t, c === 0 && h(Xr))), n !== t) {
        for (a = [], s = r, i.substr(r, 2) === W ? (d = W, r += 2) : (d = t, c === 0 && h(Oe)), d !== t && (d = je()), (s = d) === t && (Fe.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = t, c === 0 && h(Re))); s !== t; )
          a.push(s), s = r, i.substr(r, 2) === W ? (d = W, r += 2) : (d = t, c === 0 && h(Oe)), d !== t && (d = je()), (s = d) === t && (Fe.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = t, c === 0 && h(Re)));
        i.charCodeAt(r) === 39 ? (s = Se, r++) : (s = t, c === 0 && h(De)), s !== t ? e = Da(a) : (r = e, e = t);
      } else
        r = e, e = t;
      return e;
    }
    function rs() {
      var e;
      return (e = ns()) === t && (e = as()), e;
    }
    function ns() {
      var e, n, a, s, d;
      if (e = r, ae() !== t)
        if (f(), (n = I()) !== t) {
          for (f(), a = [], s = te(); s !== t; )
            a.push(s), s = te();
          s = f(), (d = ue()) !== t ? e = Oa(n, a) : (r = e, e = t);
        } else
          r = e, e = t;
      else
        r = e, e = t;
      if (e === t)
        if (e = r, ae() !== t)
          if (f(), (n = I()) !== t) {
            for (f(), a = [], s = te(); s !== t; )
              a.push(s), s = te();
            s = f(), (d = ut()) !== t ? (f(), ue() !== t ? e = Ra(n, a, d) : (r = e, e = t)) : (r = e, e = t);
          } else
            r = e, e = t;
        else
          r = e, e = t;
      return e;
    }
    function as() {
      var e, n, a, s;
      if (e = r, ae() !== t) {
        for (f(), n = [], a = ee(); a !== t; )
          n.push(a), a = ee();
        a = f(), (s = ue()) !== t ? e = $a(n) : (r = e, e = t);
      } else
        r = e, e = t;
      if (e === t)
        if (e = r, ae() !== t) {
          for (f(), n = [], a = ee(); a !== t; )
            n.push(a), a = ee();
          a = f(), (s = ut()) !== t ? (f(), ue() !== t ? e = Ja(n, s) : (r = e, e = t)) : (r = e, e = t);
        } else
          r = e, e = t;
      return e;
    }
    function ee() {
      var e, n, a;
      return e = r, Nt() !== t ? (f(), (n = I()) !== t ? (f(), bt() !== t ? (f(), (a = I()) !== t ? e = Ye(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function te() {
      var e, n, a;
      return e = r, Nt() !== t ? (f(), (n = I()) !== t ? (f(), bt() !== t ? (f(), (a = I()) !== t ? e = Ye(n, a) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ut() {
      var e, n;
      return e = r, xs() !== t ? (f(), (n = I()) !== t ? e = ka(n) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function us() {
      var e, n, a, s;
      return e = r, (n = ss()) !== t ? (a = r, c++, s = we(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Ua(n) : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ss() {
      var e, n, a, s;
      return e = r, (n = re()) !== t && (a = st()) !== t && (s = ot()) !== t ? e = Ha(n, a, s) : (r = e, e = t), e === t && (e = r, (n = re()) !== t && (a = st()) !== t ? e = Va(n, a) : (r = e, e = t), e === t && (e = r, (n = re()) !== t && (a = ot()) !== t ? e = qa(n, a) : (r = e, e = t), e === t && (e = r, (n = re()) !== t && (n = Ba(n)), e = n))), e;
    }
    function re() {
      var e, n, a;
      return (e = q()) === t && (e = r, i.charCodeAt(r) === 45 ? (n = le, r++) : (n = t, c === 0 && h(fe)), n === t && (i.charCodeAt(r) === 43 ? (n = ie, r++) : (n = t, c === 0 && h(ce))), n !== t && (a = q()) !== t ? e = ja(n, a) : (r = e, e = t)), e;
    }
    function st() {
      var e, n, a;
      return e = r, i.charCodeAt(r) === 46 ? (n = Gt, r++) : (n = t, c === 0 && h(en)), n !== t ? ((a = q()) === t && (a = null), e = Ya(a)) : (r = e, e = t), e;
    }
    function ot() {
      var e, n, a;
      return e = r, (n = os()) !== t && (a = q()) !== t ? e = za(n, a) : (r = e, e = t), e;
    }
    function q() {
      var e, n;
      if (e = [], (n = it()) !== t)
        for (; n !== t; )
          e.push(n), n = it();
      else
        e = t;
      return e !== t && (e = Ga(e)), e;
    }
    function it() {
      var e;
      return Rr.test(i.charAt(r)) ? (e = i.charAt(r), r++) : (e = t, c === 0 && h(tn)), e;
    }
    function os() {
      var e, n, a;
      return e = r, $r.test(i.charAt(r)) ? (n = i.charAt(r), r++) : (n = t, c === 0 && h(rn)), n !== t ? (Jr.test(i.charAt(r)) ? (a = i.charAt(r), r++) : (a = t, c === 0 && h(nn)), a === t && (a = null), e = Wa(n, a)) : (r = e, e = t), e;
    }
    function is() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Wt ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(an)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = n = [n, a] : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ls() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Zt ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(un)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = n = [n, a] : (r = e, e = t)) : (r = e, e = t), e;
    }
    function cs() {
      var e, n, a, s;
      return e = r, i.substr(r, 5).toLowerCase() === Kt ? (n = i.substr(r, 5), r += 5) : (n = t, c === 0 && h(sn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = n = [n, a] : (r = e, e = t)) : (r = e, e = t), e;
    }
    function be() {
      var e, n, a, s;
      return e = r, i.substr(r, 2).toLowerCase() === Qt ? (n = i.substr(r, 2), r += 2) : (n = t, c === 0 && h(on)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Za() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function lt() {
      var e, n, a, s;
      return e = r, i.substr(r, 2).toLowerCase() === Xt ? (n = i.substr(r, 2), r += 2) : (n = t, c === 0 && h(ln)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Ka() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ct() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === er ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(cn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Qa() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function fs() {
      var e, n, a, s;
      return e = r, i.substr(r, 6).toLowerCase() === tr ? (n = i.substr(r, 6), r += 6) : (n = t, c === 0 && h(fn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Xa() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function z() {
      var e, n, a, s;
      return e = r, i.substr(r, 3).toLowerCase() === rr ? (n = i.substr(r, 3), r += 3) : (n = t, c === 0 && h(pn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = eu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ne() {
      var e, n, a, s;
      return e = r, i.substr(r, 3).toLowerCase() === nr ? (n = i.substr(r, 3), r += 3) : (n = t, c === 0 && h(vn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = tu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ft() {
      var e, n, a, s;
      return e = r, i.substr(r, 2).toLowerCase() === ar ? (n = i.substr(r, 2), r += 2) : (n = t, c === 0 && h(hn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = ru() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function pt() {
      var e, n, a, s;
      return e = r, i.substr(r, 7).toLowerCase() === ur ? (n = i.substr(r, 7), r += 7) : (n = t, c === 0 && h(dn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = nu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function xe() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === sr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(mn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = au() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ps() {
      var e, n, a, s;
      return e = r, i.substr(r, 3).toLowerCase() === or ? (n = i.substr(r, 3), r += 3) : (n = t, c === 0 && h(gn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = uu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function vs() {
      var e, n, a, s;
      return e = r, i.substr(r, 9).toLowerCase() === ir ? (n = i.substr(r, 9), r += 9) : (n = t, c === 0 && h(wn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = su() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function hs() {
      var e, n, a, s;
      return e = r, i.substr(r, 7).toLowerCase() === lr ? (n = i.substr(r, 7), r += 7) : (n = t, c === 0 && h(yn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = ou() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function vt() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === cr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(Nn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = iu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ds() {
      var e, n, a, s;
      return e = r, i.substr(r, 8).toLowerCase() === fr ? (n = i.substr(r, 8), r += 8) : (n = t, c === 0 && h(bn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = lu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ms() {
      var e, n, a, s;
      return e = r, i.substr(r, 9).toLowerCase() === pr ? (n = i.substr(r, 9), r += 9) : (n = t, c === 0 && h(xn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = cu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function gs() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === vr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(Tn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = fu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ws() {
      var e, n, a, s;
      return e = r, i.substr(r, 7).toLowerCase() === hr ? (n = i.substr(r, 7), r += 7) : (n = t, c === 0 && h(An)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = pu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ys() {
      var e, n, a, s;
      return e = r, i.substr(r, 8).toLowerCase() === dr ? (n = i.substr(r, 8), r += 8) : (n = t, c === 0 && h(In)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = vu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function Ns() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === mr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(_n)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = hu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function bs() {
      var e, n, a, s;
      return e = r, i.substr(r, 2).toLowerCase() === gr ? (n = i.substr(r, 2), r += 2) : (n = t, c === 0 && h(En)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = du() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ht() {
      var e, n, a, s;
      return e = r, i.substr(r, 8).toLowerCase() === wr ? (n = i.substr(r, 8), r += 8) : (n = t, c === 0 && h(Sn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = mu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function dt() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === yr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(Cn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = gu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function mt() {
      var e, n, a, s;
      return e = r, i.substr(r, 5).toLowerCase() === Nr ? (n = i.substr(r, 5), r += 5) : (n = t, c === 0 && h(Pn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = wu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function gt() {
      var e, n, a, s;
      return e = r, i.substr(r, 3).toLowerCase() === br ? (n = i.substr(r, 3), r += 3) : (n = t, c === 0 && h(Fn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = yu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function wt() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === xr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(Ln)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Nu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function yt() {
      var e, n, a, s;
      return e = r, i.substr(r, 6).toLowerCase() === Tr ? (n = i.substr(r, 6), r += 6) : (n = t, c === 0 && h(Mn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = bu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function k() {
      var e, n, a, s;
      return e = r, i.substr(r, 6).toLowerCase() === Ar ? (n = i.substr(r, 6), r += 6) : (n = t, c === 0 && h(Dn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = xu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ae() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Ir ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(On)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Tu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function ue() {
      var e, n, a, s;
      return e = r, i.substr(r, 3).toLowerCase() === _r ? (n = i.substr(r, 3), r += 3) : (n = t, c === 0 && h(Rn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Au() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function Nt() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Er ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h($n)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Iu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function bt() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Sr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(Jn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = _u() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function xs() {
      var e, n, a, s;
      return e = r, i.substr(r, 4).toLowerCase() === Cr ? (n = i.substr(r, 4), r += 4) : (n = t, c === 0 && h(kn)), n !== t ? (a = r, c++, s = w(), c--, s === t ? a = void 0 : (r = a, a = t), a !== t ? e = Eu() : (r = e, e = t)) : (r = e, e = t), e;
    }
    function se() {
      var e;
      return i.charCodeAt(r) === 44 ? (e = Pr, r++) : (e = t, c === 0 && h(Un)), e;
    }
    function S() {
      var e;
      return i.charCodeAt(r) === 40 ? (e = Fr, r++) : (e = t, c === 0 && h(Hn)), e;
    }
    function C() {
      var e;
      return i.charCodeAt(r) === 41 ? (e = Lr, r++) : (e = t, c === 0 && h(Vn)), e;
    }
    function f() {
      var e, n;
      for (e = [], n = xt(); n !== t; )
        e.push(n), n = xt();
      return e;
    }
    function xt() {
      var e;
      return kr.test(i.charAt(r)) ? (e = i.charAt(r), r++) : (e = t, c === 0 && h(qn)), e;
    }
    function Ts() {
      var e, n, a, s;
      if (e = r, (n = tt()) !== t && (n = Ue(n)), (e = n) === t)
        if (e = r, i.charCodeAt(r) === 96 ? (n = Pe, r++) : (n = t, c === 0 && h($e)), n !== t) {
          if (a = [], Le.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = t, c === 0 && h(Je)), s !== t)
            for (; s !== t; )
              a.push(s), Le.test(i.charAt(r)) ? (s = i.charAt(r), r++) : (s = t, c === 0 && h(Je));
          else
            a = t;
          a !== t ? (i.charCodeAt(r) === 96 ? (s = Pe, r++) : (s = t, c === 0 && h($e)), s !== t ? e = Su(a) : (r = e, e = t)) : (r = e, e = t);
        } else
          r = e, e = t;
      return e;
    }
    function As(e, n) {
      return { type: "unary_expr", operator: e, expr: n };
    }
    function Tt(e, n, a, s) {
      var d = { type: "binary_expr", operator: e, left: n, right: a };
      return s !== void 0 && (d.escape = s), d;
    }
    function Is(e, n) {
      for (var a = [e], s = 0; s < n.length; s++)
        a.push(n[s][3]);
      return a;
    }
    function _s(e, n, a) {
      return Is(e, n);
    }
    function Te(e, n) {
      for (var a = e, s = 0; s < n.length; s++)
        a = Tt(n[s][1], a, n[s][3]);
      return a;
    }
    if ((m = P()) !== t && r === i.length)
      return m;
    throw m !== t && r < i.length && h(Cu()), Pu(ve, L < i.length ? i.charAt(L) : null, L < i.length ? Ge(L, L + 1) : Ge(L, L));
  }
  return l(u, Error), u.prototype.format = function(i) {
    var v = "Error: " + this.message;
    if (this.location) {
      var m, t = null;
      for (m = 0; m < i.length; m++)
        if (i[m].source === this.location.source) {
          t = i[m].text.split(/\r\n|\n|\r/g);
          break;
        }
      var N = this.location.start, T = this.location.source + ":" + N.line + ":" + N.column;
      if (t) {
        var P = this.location.end, J = o("", N.line.toString().length), M = t[N.line - 1], x = N.line === P.line ? P.column : M.length + 1;
        v += `
 --> ` + T + `
` + J + ` |
` + N.line + " | " + M + `
` + J + " | " + o("", N.column - 1) + o("", x - N.column, "^");
      } else
        v += `
 at ` + T;
    }
    return v;
  }, u.buildMessage = function(i, v) {
    var m = { literal: function(x) {
      return '"' + N(x.text) + '"';
    }, class: function(x) {
      var _ = x.parts.map(function(F) {
        return Array.isArray(F) ? T(F[0]) + "-" + T(F[1]) : T(F);
      });
      return "[" + (x.inverted ? "^" : "") + _ + "]";
    }, any: function() {
      return "any character";
    }, end: function() {
      return "end of input";
    }, other: function(x) {
      return x.description;
    } };
    function t(x) {
      return x.charCodeAt(0).toString(16).toUpperCase();
    }
    function N(x) {
      return x.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(_) {
        return "\\x0" + t(_);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(_) {
        return "\\x" + t(_);
      });
    }
    function T(x) {
      return x.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(_) {
        return "\\x0" + t(_);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(_) {
        return "\\x" + t(_);
      });
    }
    function P(x) {
      return m[x.type](x);
    }
    function J(x) {
      var _, F, E = x.map(P);
      if (E.sort(), E.length > 0) {
        for (_ = 1, F = 1; _ < E.length; _++)
          E[_ - 1] !== E[_] && (E[F] = E[_], F++);
        E.length = F;
      }
      switch (E.length) {
        case 1:
          return E[0];
        case 2:
          return E[0] + " or " + E[1];
        default:
          return E.slice(0, -1).join(", ") + ", or " + E[E.length - 1];
      }
    }
    function M(x) {
      return x ? '"' + N(x) + '"' : "end of input";
    }
    return "Expected " + J(i) + " but " + M(v) + " found.";
  }, { SyntaxError: u, parse: p };
}, (_t = Ot).exports && (_t.exports = Et());
let Ls = class {
  static parse(u) {
    return Ot.exports.parse(u);
  }
};
const Rt = /^(\d{4})-(\d{1,2})-(\d{1,2})$/, Ms = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)$/, Ds = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)(\+|\-)(\d{1,2}):(\d{1,2})$/, Os = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})(\+|\-)(\d{1,2}):(\d{1,2})$/, Rs = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/, $s = /* @__PURE__ */ new Set(["current_timestamp", "current_date", "current_time"]);
function U(l, u) {
  return (l += "").length >= u ? l : new Array(u - l.length + 1).join("0") + l;
}
function G(l, u, o = "0", p = "0", i = "0", v = "0", m = "", t = "0", N = "0") {
  if (m === "+" || m === "-") {
    const T = `${U(parseInt(l, 10), 4)}-${U(parseInt(u, 10), 2)}-${U(parseInt(o, 10), 2)}`;
    let P = "";
    parseFloat(v) < 10 && (P = "0");
    const J = `${U(parseInt(p, 10), 2)}:${U(parseInt(i, 10), 2)}:${P + parseFloat(v).toString()}`, M = `${m}${U(parseInt(t, 10), 2)}:${U(parseInt(N, 10), 2)}`;
    return /* @__PURE__ */ new Date(T + "T" + J + M);
  }
  return new Date(parseInt(l, 10), parseInt(u, 10) - 1, parseInt(o, 10), parseInt(p, 10), parseInt(i, 10), parseFloat(v));
}
class Js {
  static makeBool(u) {
    return Jt(u);
  }
  static featureValue(u, o, p, i) {
    return qt(u, o, p, i);
  }
  static equalsNull(u) {
    return u === null;
  }
  static applyLike(u, o, p) {
    return _e(u, o, p);
  }
  static ensureArray(u) {
    return Ae(u);
  }
  static applyIn(u, o) {
    return Ie(u, o);
  }
  static currentDate() {
    const u = /* @__PURE__ */ new Date();
    return u.setHours(0, 0, 0, 0), u;
  }
  static makeSqlInterval(u, o, p) {
    return $.createFromValueAndQualifer(u, o, p);
  }
  static convertInterval(u) {
    return u instanceof $ ? u.valueInMilliseconds() : u;
  }
  static currentTimestamp() {
    return /* @__PURE__ */ new Date();
  }
  static compare(u, o, p) {
    return Ht(u, o, p);
  }
  static calculate(u, o, p) {
    return Vt(u, o, p);
  }
  static makeComparable(u) {
    return R(u);
  }
  static evaluateFunction(u, o) {
    return Mt(u, o);
  }
  static lookup(u, o) {
    const p = o[u];
    return p === void 0 ? null : p;
  }
  static between(u, o) {
    return u == null || o[0] == null || o[1] == null ? null : u >= o[0] && u <= o[1];
  }
  static notbetween(u, o) {
    return u == null || o[0] == null || o[1] == null ? null : u < o[0] || u > o[1];
  }
  static ternaryNot(u) {
    return oe(u);
  }
  static ternaryAnd(u, o) {
    return kt(u, o);
  }
  static ternaryOr(u, o) {
    return Ut(u, o);
  }
}
class $t {
  constructor(u, o) {
    this.fieldsIndex = o, this.datefields = {}, this.parameters = {}, this._hasDateFunctions = void 0, this.parseTree = Ls.parse(u);
    const { isStandardized: p, isAggregate: i, referencedFieldNames: v } = this._extractExpressionInfo(o);
    this.referencedFieldNames = v, this.isStandardized = p, this.isAggregate = i;
  }
  static create(u, o) {
    return new $t(u, o);
  }
  get fieldNames() {
    return this.referencedFieldNames;
  }
  testSet(u, o = B) {
    const p = {};
    for (const i of this.fieldNames)
      p[i] = u.map((v) => o.getAttribute(v, i));
    return !!this._evaluateNode(this.parseTree, { attributes: p }, B);
  }
  calculateValue(u, o = B) {
    const p = this._evaluateNode(this.parseTree, u, o);
    return p instanceof $ ? p.valueInMilliseconds() / 864e5 : p;
  }
  calculateValueCompiled(u, o = B) {
    return this.parseTree._compiledVersion != null ? this.parseTree._compiledVersion(u, this.parameters, o, this.datefields) : At("geoscene-csp-restrictions") ? this.calculateValue(u, o) : (this._compileMe(), this.parseTree._compiledVersion(u, this.parameters, o, this.datefields));
  }
  testFeature(u, o = B) {
    return !!this._evaluateNode(this.parseTree, u, o);
  }
  testFeatureCompiled(u, o = B) {
    return this.parseTree._compiledVersion != null ? !!this.parseTree._compiledVersion(u, this.parameters, o, this.datefields) : At("geoscene-csp-restrictions") ? this.testFeature(u, o) : (this._compileMe(), !!this.parseTree._compiledVersion(u, this.parameters, o, this.datefields));
  }
  get hasDateFunctions() {
    return this._hasDateFunctions != null || (this._hasDateFunctions = !1, this._visitAll(this.parseTree, (u) => {
      u.type === "current_time" ? this._hasDateFunctions = !0 : u.type === "function" && (this._hasDateFunctions = this._hasDateFunctions || $s.has(u.name.toLowerCase()));
    })), this._hasDateFunctions;
  }
  getFunctions() {
    const u = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (o) => {
      o.type === "function" && u.add(o.name.toLowerCase());
    }), Array.from(u);
  }
  getExpressions() {
    const u = /* @__PURE__ */ new Map();
    return this._visitAll(this.parseTree, (o) => {
      if (o.type === "function") {
        const p = o.name.toLowerCase(), i = o.args.value[0];
        if (i.type === "column_ref") {
          const v = i.column, m = `${p}-${v}`;
          u.has(m) || u.set(m, { aggregateType: p, field: v });
        }
      }
    }), [...u.values()];
  }
  getVariables() {
    const u = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (o) => {
      o.type === "param" && u.add(o.value.toLowerCase());
    }), Array.from(u);
  }
  _compileMe() {
    const u = "return this.convertInterval(" + this.evaluateNodeToJavaScript(this.parseTree) + ")";
    this.parseTree._compiledVersion = new Function("feature", "lookups", "attributeAdapter", "datefields", u).bind(Js);
  }
  _extractExpressionInfo(u) {
    const o = [], p = /* @__PURE__ */ new Set();
    let i = !0, v = !0;
    return this._visitAll(this.parseTree, (m) => {
      switch (m.type) {
        case "column_ref": {
          const t = u.get(m.column);
          let N, T;
          t ? N = T = t.name : (T = m.column, N = T.toLowerCase()), !t || t.type !== "date" && t.type !== "esriFieldTypeDate" || (this.datefields[t.name] = 1), p.has(N) || (p.add(N), o.push(T)), m.column = T;
          break;
        }
        case "function": {
          const { name: t, args: N } = m, T = N.value.length;
          i && (i = Fs(t, T)), v && (v = Cs(t, T));
          break;
        }
      }
    }), { referencedFieldNames: Array.from(o), isStandardized: i, isAggregate: v };
  }
  _visitAll(u, o) {
    if (u != null)
      switch (o(u), u.type) {
        case "when_clause":
          this._visitAll(u.operand, o), this._visitAll(u.value, o);
          break;
        case "case_expression":
          for (const p of u.clauses)
            this._visitAll(p, o);
          u.format === "simple" && this._visitAll(u.operand, o), u.else !== null && this._visitAll(u.else, o);
          break;
        case "expr_list":
          for (const p of u.value)
            this._visitAll(p, o);
          break;
        case "unary_expr":
          this._visitAll(u.expr, o);
          break;
        case "binary_expr":
          this._visitAll(u.left, o), this._visitAll(u.right, o);
          break;
        case "function":
          this._visitAll(u.args, o);
      }
  }
  evaluateNodeToJavaScript(u) {
    switch (u.type) {
      case "interval":
        return "this.makeSqlInterval(" + this.evaluateNodeToJavaScript(u.value) + ", " + JSON.stringify(u.qualifier) + "," + JSON.stringify(u.op) + ")";
      case "case_expression": {
        let o = "";
        if (u.format === "simple") {
          const p = "this.makeComparable(" + this.evaluateNodeToJavaScript(u.operand) + ")";
          o = "( ";
          for (let i = 0; i < u.clauses.length; i++)
            o += " (" + p + " === this.makeComparable(" + this.evaluateNodeToJavaScript(u.clauses[i].operand) + ")) ? (" + this.evaluateNodeToJavaScript(u.clauses[i].value) + ") : ";
          u.else !== null ? o += this.evaluateNodeToJavaScript(u.else) : o += "null", o += " )";
        } else {
          o = "( ";
          for (let p = 0; p < u.clauses.length; p++)
            o += " this.makeBool(" + this.evaluateNodeToJavaScript(u.clauses[p].operand) + ")===true ? (" + this.evaluateNodeToJavaScript(u.clauses[p].value) + ") : ";
          u.else !== null ? o += this.evaluateNodeToJavaScript(u.else) : o += "null", o += " )";
        }
        return o;
      }
      case "param":
        return "this.lookup(" + JSON.stringify(u.value.toLowerCase()) + ",lookups)";
      case "expr_list": {
        let o = "[";
        for (const p of u.value)
          o !== "[" && (o += ","), o += this.evaluateNodeToJavaScript(p);
        return o += "]", o;
      }
      case "unary_expr":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(u.expr) + ")";
      case "binary_expr":
        switch (u.operator) {
          case "AND":
            return "this.ternaryAnd(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + " )";
          case "OR":
            return "this.ternaryOr(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + " )";
          case "IS":
            if (u.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "this.equalsNull(" + this.evaluateNodeToJavaScript(u.left) + ")";
          case "ISNOT":
            if (u.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "(!(this.equalsNull(" + this.evaluateNodeToJavaScript(u.left) + ")))";
          case "IN":
            return "this.applyIn(" + this.evaluateNodeToJavaScript(u.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(u.right) + "))";
          case "NOT IN":
            return "this.ternaryNot(this.applyIn(" + this.evaluateNodeToJavaScript(u.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(u.right) + ")))";
          case "BETWEEN":
            return "this.between(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + ")";
          case "NOTBETWEEN":
            return "this.notbetween(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + ")";
          case "LIKE":
            return "this.applyLike(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + "," + JSON.stringify(u.escape) + ")";
          case "NOT LIKE":
            return "this.ternaryNot(this.applyLike(" + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + "," + JSON.stringify(u.escape) + "))";
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return "this.compare(" + JSON.stringify(u.operator) + "," + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + ")";
          case "*":
          case "-":
          case "+":
          case "/":
            return "this.calculate(" + JSON.stringify(u.operator) + "," + this.evaluateNodeToJavaScript(u.left) + "," + this.evaluateNodeToJavaScript(u.right) + ")";
        }
        throw new Error("Not Supported Operator " + u.operator);
      case "null":
      case "bool":
      case "string":
      case "number":
        return JSON.stringify(u.value);
      case "date":
        return "(new Date(" + Ct(u.value).getTime().toString() + "))";
      case "timestamp":
        return "(new Date(" + St(u.value).getTime().toString() + "))";
      case "current_time":
        return u.mode === "date" ? "this.currentDate()" : "this.currentTimestamp()";
      case "column_ref":
        return "this.featureValue(feature," + JSON.stringify(u.column) + ",datefields,attributeAdapter)";
      case "function":
        return "this.evaluateFunction(" + JSON.stringify(u.name) + "," + this.evaluateNodeToJavaScript(u.args) + ")";
    }
    throw new Error("Unsupported sql syntax " + u.type);
  }
  _evaluateNode(u, o, p) {
    switch (u.type) {
      case "interval": {
        const i = this._evaluateNode(u.value, o, p);
        return $.createFromValueAndQualifer(i, u.qualifier, u.op);
      }
      case "case_expression":
        if (u.format === "simple") {
          const i = R(this._evaluateNode(u.operand, o, p));
          for (let v = 0; v < u.clauses.length; v++)
            if (i === R(this._evaluateNode(u.clauses[v].operand, o, p)))
              return this._evaluateNode(u.clauses[v].value, o, p);
          if (u.else !== null)
            return this._evaluateNode(u.else, o, p);
        } else {
          for (let i = 0; i < u.clauses.length; i++)
            if (Jt(this._evaluateNode(u.clauses[i].operand, o, p)))
              return this._evaluateNode(u.clauses[i].value, o, p);
          if (u.else !== null)
            return this._evaluateNode(u.else, o, p);
        }
        return null;
      case "param":
        return this.parameters[u.value.toLowerCase()];
      case "expr_list": {
        const i = [];
        for (const v of u.value)
          i.push(this._evaluateNode(v, o, p));
        return i;
      }
      case "unary_expr":
        return oe(this._evaluateNode(u.expr, o, p));
      case "binary_expr":
        switch (u.operator) {
          case "AND":
            return kt(this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p));
          case "OR":
            return Ut(this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p));
          case "IS":
            if (u.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(u.left, o, p) === null;
          case "ISNOT":
            if (u.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(u.left, o, p) !== null;
          case "IN": {
            const i = Ae(this._evaluateNode(u.right, o, p));
            return Ie(this._evaluateNode(u.left, o, p), i);
          }
          case "NOT IN": {
            const i = Ae(this._evaluateNode(u.right, o, p));
            return oe(Ie(this._evaluateNode(u.left, o, p), i));
          }
          case "BETWEEN": {
            const i = this._evaluateNode(u.left, o, p), v = this._evaluateNode(u.right, o, p);
            return i == null || v[0] == null || v[1] == null ? null : i >= R(v[0]) && i <= R(v[1]);
          }
          case "NOTBETWEEN": {
            const i = this._evaluateNode(u.left, o, p), v = this._evaluateNode(u.right, o, p);
            return i == null || v[0] == null || v[1] == null ? null : i < R(v[0]) || i > R(v[1]);
          }
          case "LIKE":
            return _e(this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p), u.escape);
          case "NOT LIKE":
            return oe(_e(this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p), u.escape));
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return Ht(u.operator, this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p));
          case "-":
          case "+":
          case "*":
          case "/":
            return Vt(u.operator, this._evaluateNode(u.left, o, p), this._evaluateNode(u.right, o, p));
        }
      case "null":
      case "bool":
      case "string":
      case "number":
        return u.value;
      case "date":
        return Ct(u.value);
      case "timestamp":
        return St(u.value);
      case "current_time": {
        const i = /* @__PURE__ */ new Date();
        return u.mode === "date" && i.setHours(0, 0, 0, 0), i;
      }
      case "column_ref":
        return qt(o, u.column, this.datefields, p);
      case "function": {
        const i = this._evaluateNode(u.args, o, p);
        return this.isAggregate ? Ss(u.name, i) : Mt(u.name, i);
      }
    }
    throw new Error("Unsupported sql syntax " + u.type);
  }
}
function St(l) {
  let u = Ms.exec(l);
  if (u !== null) {
    const [, o, p, i, v, m, t] = u;
    return G(o, p, i, v, m, t);
  }
  if (u = Ds.exec(l), u !== null) {
    const [, o, p, i, v, m, t, N, T, P] = u;
    return G(o, p, i, v, m, t, N, T, P);
  }
  if (u = Os.exec(l), u !== null) {
    const [, o, p, i, v, m, t, N, T] = u;
    return G(o, p, i, v, m, "0", t, N, T);
  }
  if (u = Rs.exec(l), u !== null) {
    const [, o, p, i, v, m] = u;
    return G(o, p, i, v, m);
  }
  if (u = Rt.exec(l), u !== null) {
    const [, o, p, i] = u;
    return G(o, p, i);
  }
  throw new Error("SQL Invalid Timestamp");
}
function Ct(l) {
  const u = Rt.exec(l);
  if (u === null)
    throw new Error("SQL Invalid Date");
  const [, o, p, i] = u;
  return new Date(parseInt(o, 10), parseInt(p, 10) - 1, parseInt(i, 10));
}
function Jt(l) {
  return l === !0;
}
function Ae(l) {
  return Array.isArray(l) ? l : [l];
}
function oe(l) {
  return l !== null ? l !== !0 : null;
}
function kt(l, u) {
  return l != null && u != null ? l === !0 && u === !0 : l !== !1 && u !== !1 && null;
}
function Ut(l, u) {
  return l != null && u != null ? l === !0 || u === !0 : l === !0 || u === !0 || null;
}
function Ie(l, u) {
  if (l == null)
    return null;
  let o = !1;
  for (const p of u)
    if (p == null)
      o = null;
    else if (l === p) {
      o = !0;
      break;
    }
  return o;
}
const Pt = "-[]/{}()*+?.\\^$|";
var H;
function ks(l, u) {
  const o = u;
  let p = "", i = H.Normal;
  for (let v = 0; v < l.length; v++) {
    const m = l.charAt(v);
    switch (i) {
      case H.Normal:
        m === o ? i = H.Escaped : Pt.includes(m) ? p += "\\" + m : p += m === "%" ? ".*" : m === "_" ? "." : m;
        break;
      case H.Escaped:
        Pt.includes(m) ? p += "\\" + m : p += m, i = H.Normal;
    }
  }
  return new RegExp("^" + p + "$", "m");
}
function _e(l, u, o) {
  return l == null ? null : ks(u, o).test(l);
}
function R(l) {
  return l instanceof Date ? l.valueOf() : l;
}
function Ht(l, u, o) {
  if (u == null || o == null)
    return null;
  const p = R(u), i = R(o);
  switch (l) {
    case "<>":
      return p !== i;
    case "=":
      return p === i;
    case ">":
      return p > i;
    case "<":
      return p < i;
    case ">=":
      return p >= i;
    case "<=":
      return p <= i;
  }
}
function Vt(l, u, o) {
  if (u instanceof $)
    if (o instanceof Date)
      switch (l) {
        case "+":
          return new Date(u.valueInMilliseconds() + o.getTime());
        case "-":
          return u.valueInMilliseconds() - o.getTime();
        case "*":
          return u.valueInMilliseconds() * o.getTime();
        case "/":
          return u.valueInMilliseconds() / o.getTime();
      }
    else if (o instanceof $)
      switch (l) {
        case "+":
          return $.createFromMilliseconds(u.valueInMilliseconds() + o.valueInMilliseconds());
        case "-":
          return $.createFromMilliseconds(u.valueInMilliseconds() - o.valueInMilliseconds());
        case "*":
          return u.valueInMilliseconds() * o.valueInMilliseconds();
        case "/":
          return u.valueInMilliseconds() / o.valueInMilliseconds();
      }
    else
      u = u.valueInMilliseconds();
  else if (o instanceof $)
    if (u instanceof Date)
      switch (l) {
        case "+":
          return new Date(o.valueInMilliseconds() + u.getTime());
        case "-":
          return new Date(u.getTime() - o.valueInMilliseconds());
        case "*":
          return u.getTime() * o.valueInMilliseconds();
        case "/":
          return u.getTime() / o.valueInMilliseconds();
      }
    else
      o = o.valueInMilliseconds();
  else if (u instanceof Date && typeof o == "number")
    switch (o = 24 * o * 60 * 60 * 1e3, u = u.getTime(), l) {
      case "+":
        return new Date(u + o);
      case "-":
        return new Date(u - o);
      case "*":
        return new Date(u * o);
      case "/":
        return new Date(u / o);
    }
  else if (o instanceof Date && typeof u == "number")
    switch (u = 24 * u * 60 * 60 * 1e3, o = o.getTime(), l) {
      case "+":
        return new Date(u + o);
      case "-":
        return new Date(u - o);
      case "*":
        return new Date(u * o);
      case "/":
        return new Date(u / o);
    }
  switch (l) {
    case "+":
      return u + o;
    case "-":
      return u - o;
    case "*":
      return u * o;
    case "/":
      return u / o;
  }
}
function Us(l) {
  return l && typeof l.attributes == "object";
}
function qt(l, u, o, p) {
  const i = p.getAttribute(l, u);
  return i != null && o[u] === 1 ? new Date(i) : i;
}
(function(l) {
  l[l.Normal = 0] = "Normal", l[l.Escaped = 1] = "Escaped";
})(H || (H = {}));
const B = { getAttribute: (l, u) => (Us(l) ? l.attributes : l)[u] };
export {
  $t as WhereClause,
  B as defaultAttributeAdapter
};
