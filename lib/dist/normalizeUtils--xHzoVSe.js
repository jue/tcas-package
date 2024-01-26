import { c1 as U, ae as X, dI as B, L as D, s as F, aW as H, $ as k, a8 as P, fB as O, aA as b, fC as _, H as E } from "./index-HxXrdrYt.js";
import { r as q, o as v, i as R, s as T } from "./normalizeUtilsCommon-kgfOYmtc.js";
import { f as G, r as K, o as Q } from "./utils-ZpixBail.js";
async function V(t, s, f, n) {
  const e = G(t), c = s[0].spatialReference, l = { ...n, query: { ...e.query, f: "json", sr: JSON.stringify(c), target: JSON.stringify({ geometryType: U(s[0]), geometries: s }), cutter: JSON.stringify(f) } }, o = await X(e.path + "/cut", l), { cutIndexes: u, geometries: y = [] } = o.data;
  return { cutIndexes: u, geometries: y.map((h) => {
    const x = B(h);
    return x.spatialReference = c, x;
  }) };
}
async function Y(t, s, f) {
  const n = typeof t == "string" ? D(t) : t, e = s[0].spatialReference, c = U(s[0]), l = { ...f, query: { ...n.query, f: "json", sr: e.wkid ?? JSON.stringify(e), geometries: JSON.stringify(K(s)) } }, { data: o } = await X(n.path + "/simplify", l);
  return Q(o.geometries, c, e);
}
const W = F.getLogger("geoscene.geometry.support.normalizeUtils");
function Z(t) {
  return t.type === "polygon";
}
function tt(t) {
  return t[0].type === "polygon";
}
function et(t) {
  return t[0].type === "polyline";
}
function st(t, s) {
  if (!(t instanceof P || t instanceof b)) {
    const e = "straightLineDensify: the input geometry is neither polyline nor polygon";
    throw W.error(e), new E(e);
  }
  const f = v(t), n = [];
  for (const e of f) {
    const c = [];
    n.push(c), c.push([e[0][0], e[0][1]]);
    for (let l = 0; l < e.length - 1; l++) {
      const o = e[l][0], u = e[l][1], y = e[l + 1][0], h = e[l + 1][1], x = Math.sqrt((y - o) * (y - o) + (h - u) * (h - u)), a = (h - u) / x, m = (y - o) / x, p = x / s;
      if (p > 1) {
        for (let S = 1; S <= p - 1; S++) {
          const j = S * s, r = m * j + o, i = a * j + u;
          c.push([r, i]);
        }
        const w = (x + Math.floor(p - 1) * s) / 2, A = m * w + o, J = a * w + u;
        c.push([A, J]);
      }
      c.push([y, h]);
    }
  }
  return Z(t) ? new b({ rings: n, spatialReference: t.spatialReference }) : new P({ paths: n, spatialReference: t.spatialReference });
}
function z(t, s, f) {
  if (s) {
    const n = st(t, 1e6);
    t = _(n, !0);
  }
  return f && (t = T(t, f)), t;
}
function C(t, s, f) {
  if (Array.isArray(t)) {
    const n = t[0];
    if (n > s) {
      const e = R(n, s);
      t[0] = n + e * (-2 * s);
    } else if (n < f) {
      const e = R(n, f);
      t[0] = n + e * (-2 * f);
    }
  } else {
    const n = t.x;
    if (n > s) {
      const e = R(n, s);
      t = t.clone().offset(e * (-2 * s), 0);
    } else if (n < f) {
      const e = R(n, f);
      t = t.clone().offset(e * (-2 * f), 0);
    }
  }
  return t;
}
function nt(t, s) {
  let f = -1;
  for (let n = 0; n < s.cutIndexes.length; n++) {
    const e = s.cutIndexes[n], c = s.geometries[n], l = v(c);
    for (let o = 0; o < l.length; o++) {
      const u = l[o];
      u.some((y) => {
        if (y[0] < 180)
          return !0;
        {
          let h = 0;
          for (let a = 0; a < u.length; a++) {
            const m = u[a][0];
            h = m > h ? m : h;
          }
          h = Number(h.toFixed(9));
          const x = -360 * R(h, 180);
          for (let a = 0; a < u.length; a++) {
            const m = c.getPoint(o, a);
            c.setPoint(o, a, m.clone().offset(x, 0));
          }
          return !0;
        }
      });
    }
    if (e === f) {
      if (tt(t))
        for (const o of v(c))
          t[e] = t[e].addRing(o);
      else if (et(t))
        for (const o of v(c))
          t[e] = t[e].addPath(o);
    } else
      f = e, t[e] = c;
  }
  return t;
}
async function ot(t, s, f) {
  if (!Array.isArray(t))
    return ot([t], s);
  s && typeof s != "string" && W.warn("normalizeCentralMeridian()", "The url object is deprecated, use the url string instead");
  const n = typeof s == "string" ? s : (s == null ? void 0 : s.url) ?? H.geometryServiceUrl;
  let e, c, l, o, u, y, h, x, a = 0;
  const m = [], p = [];
  for (const r of t)
    if (r != null)
      if (e || (e = r.spatialReference, c = k(e), l = e.isWebMercator, y = l ? 102100 : 4326, o = q[y].maxX, u = q[y].minX, h = q[y].plus180Line, x = q[y].minus180Line), c)
        if (r.type === "mesh")
          p.push(r);
        else if (r.type === "point")
          p.push(C(r.clone(), o, u));
        else if (r.type === "multipoint") {
          const i = r.clone();
          i.points = i.points.map((g) => C(g, o, u)), p.push(i);
        } else if (r.type === "extent") {
          const i = r.clone()._normalize(!1, !1, c);
          p.push(i.rings ? new b(i) : i);
        } else if (r.extent) {
          const i = r.extent, g = R(i.xmin, u) * (2 * o);
          let d = g === 0 ? r.clone() : T(r.clone(), g);
          i.offset(g, 0), i.intersects(h) && i.xmax !== o ? (a = i.xmax > a ? i.xmax : a, d = z(d, l), m.push(d), p.push("cut")) : i.intersects(x) && i.xmin !== u ? (a = i.xmax * (2 * o) > a ? i.xmax * (2 * o) : a, d = z(d, l, 360), m.push(d), p.push("cut")) : p.push(d);
        } else
          p.push(r.clone());
      else
        p.push(r);
    else
      p.push(r);
  let w = R(a, o), A = -90;
  const J = w, S = new P();
  for (; w > 0; ) {
    const r = 360 * w - 180;
    S.addPath([[r, A], [r, -1 * A]]), A *= -1, w--;
  }
  if (m.length > 0 && J > 0) {
    const r = nt(m, await V(n, m, S, f)), i = [], g = [];
    for (let $ = 0; $ < p.length; $++) {
      const I = p[$];
      if (I !== "cut")
        g.push(I);
      else {
        const N = r.shift(), L = t[$];
        L != null && L.type === "polygon" && L.rings && L.rings.length > 1 && N.rings.length >= L.rings.length ? (i.push(N), g.push("simplify")) : g.push(l ? O(N) : N);
      }
    }
    if (!i.length)
      return g;
    const d = await Y(n, i, f), M = [];
    for (let $ = 0; $ < g.length; $++) {
      const I = g[$];
      I !== "simplify" ? M.push(I) : M.push(l ? O(d.shift()) : d.shift());
    }
    return M;
  }
  const j = [];
  for (let r = 0; r < p.length; r++) {
    const i = p[r];
    if (i !== "cut")
      j.push(i);
    else {
      const g = m.shift();
      j.push(l === !0 ? O(g) : g);
    }
  }
  return j;
}
function ct(t, s) {
  const f = k(s);
  if (f) {
    const [n, e] = f.valid, c = e - n;
    if (t < n)
      for (; t < n; )
        t += c;
    if (t > e)
      for (; t > e; )
        t -= c;
  }
  return t;
}
export {
  ot as b,
  ct as v
};
