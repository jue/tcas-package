import { da as Re, db as We, fo as ve, dd as f, df as xi, dl as Ii, gR as At, iP as fn, dg as Si, iQ as Ci, dk as Z, gy as Yt, dm as pn, gx as Kt, ik as mn, de as gn } from "./index-HxXrdrYt.js";
import { c as Lt, a as Ot, u as _t, d as bn } from "./loader-2TAT4OzE.js";
import { c as Di } from "./observers-irFNFMFU.js";
import { u as vn, a as yn, M as En } from "./utils3-_vU-c6Pt.js";
import { s as Ft, a as zt, c as Pt } from "./loadable-Op9Lnlao.js";
import { S as Gt, i as Nt, r as wn, b as Ht, f as xn, a as In, c as ki, d as Ti } from "./debounce-N1nXnarg.js";
import { n as U, e as ce, p as Sn, f as Cn, h as Dn, u as Ai, c as Li, a as Oi, d as _i, b as Fi, s as zi, B as kn, g as Ae, j as Tn } from "./component-hgzGHHEU.js";
import { d as Mt } from "./icon-zt2fyVc5.js";
import { d as An } from "./scrim-3215PeYp.js";
import "vue";
import "./guid-mHDePIZO.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function qt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qt(Object(i), !0).forEach(function(n) {
      Ln(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : qt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ze = function(t) {
    return typeof t;
  } : Ze = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ze(e);
}
function Ln(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function J() {
  return J = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, J.apply(this, arguments);
}
function On(e, t) {
  if (e == null)
    return {};
  var i = {}, n = Object.keys(e), a, r;
  for (r = 0; r < n.length; r++)
    a = n[r], !(t.indexOf(a) >= 0) && (i[a] = e[a]);
  return i;
}
function _n(e, t) {
  if (e == null)
    return {};
  var i = On(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (a = 0; a < r.length; a++)
      n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
var Fn = "1.15.0";
function Q(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var ee = Q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), $e = Q(/Edge/i), Zt = Q(/firefox/i), Fe = Q(/safari/i) && !Q(/chrome/i) && !Q(/android/i), Pi = Q(/iP(ad|od|hone)/i), Ni = Q(/chrome/i) && Q(/android/i), Hi = {
  capture: !1,
  passive: !1
};
function E(e, t, i) {
  e.addEventListener(t, i, !ee && Hi);
}
function y(e, t, i) {
  e.removeEventListener(t, i, !ee && Hi);
}
function it(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function zn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function X(e, t, i, n) {
  if (e) {
    i = i || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === i && it(e, t) : it(e, t)) || n && e === i)
        return e;
      if (e === i)
        break;
    } while (e = zn(e));
  }
  return null;
}
var Qt = /\s+/g;
function H(e, t, i) {
  if (e && t)
    if (e.classList)
      e.classList[i ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ").replace(Qt, " ").replace(" " + t + " ", " ");
      e.className = (n + (i ? " " + t : "")).replace(Qt, " ");
    }
}
function m(e, t, i) {
  var n = e && e.style;
  if (n) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (i = e.currentStyle), t === void 0 ? i : i[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = i + (typeof i == "string" ? "" : "px");
  }
}
function we(e, t) {
  var i = "";
  if (typeof e == "string")
    i = e;
  else
    do {
      var n = m(e, "transform");
      n && n !== "none" && (i = n + " " + i);
    } while (!t && (e = e.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(i);
}
function Mi(e, t, i) {
  if (e) {
    var n = e.getElementsByTagName(t), a = 0, r = n.length;
    if (i)
      for (; a < r; a++)
        i(n[a], a);
    return n;
  }
  return [];
}
function Y() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function T(e, t, i, n, a) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, o, s, l, c, h, u;
    if (e !== window && e.parentNode && e !== Y() ? (r = e.getBoundingClientRect(), o = r.top, s = r.left, l = r.bottom, c = r.right, h = r.height, u = r.width) : (o = 0, s = 0, l = window.innerHeight, c = window.innerWidth, h = window.innerHeight, u = window.innerWidth), (t || i) && e !== window && (a = a || e.parentNode, !ee))
      do
        if (a && a.getBoundingClientRect && (m(a, "transform") !== "none" || i && m(a, "position") !== "static")) {
          var p = a.getBoundingClientRect();
          o -= p.top + parseInt(m(a, "border-top-width")), s -= p.left + parseInt(m(a, "border-left-width")), l = o + r.height, c = s + r.width;
          break;
        }
      while (a = a.parentNode);
    if (n && e !== window) {
      var w = we(a || e), v = w && w.a, x = w && w.d;
      w && (o /= x, s /= v, u /= v, h /= x, l = o + h, c = s + u);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: c,
      width: u,
      height: h
    };
  }
}
function Jt(e, t, i) {
  for (var n = re(e, !0), a = T(e)[t]; n; ) {
    var r = T(n)[i], o = void 0;
    if (i === "top" || i === "left" ? o = a >= r : o = a <= r, !o)
      return n;
    if (n === Y())
      break;
    n = re(n, !1);
  }
  return !1;
}
function Ie(e, t, i, n) {
  for (var a = 0, r = 0, o = e.children; r < o.length; ) {
    if (o[r].style.display !== "none" && o[r] !== g.ghost && (n || o[r] !== g.dragged) && X(o[r], i.draggable, e, !1)) {
      if (a === t)
        return o[r];
      a++;
    }
    r++;
  }
  return null;
}
function Vt(e, t) {
  for (var i = e.lastElementChild; i && (i === g.ghost || m(i, "display") === "none" || t && !it(i, t)); )
    i = i.previousElementSibling;
  return i || null;
}
function B(e, t) {
  var i = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== g.clone && (!t || it(e, t)) && i++;
  return i;
}
function ei(e) {
  var t = 0, i = 0, n = Y();
  if (e)
    do {
      var a = we(e), r = a.a, o = a.d;
      t += e.scrollLeft * r, i += e.scrollTop * o;
    } while (e !== n && (e = e.parentNode));
  return [t, i];
}
function Pn(e, t) {
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === e[i][n])
          return Number(i);
    }
  return -1;
}
function re(e, t) {
  if (!e || !e.getBoundingClientRect)
    return Y();
  var i = e, n = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var a = m(i);
      if (i.clientWidth < i.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body)
          return Y();
        if (n || t)
          return i;
        n = !0;
      }
    }
  while (i = i.parentNode);
  return Y();
}
function Nn(e, t) {
  if (e && t)
    for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
  return e;
}
function dt(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var ze;
function Vi(e, t) {
  return function() {
    if (!ze) {
      var i = arguments, n = this;
      i.length === 1 ? e.call(n, i[0]) : e.apply(n, i), ze = setTimeout(function() {
        ze = void 0;
      }, t);
    }
  };
}
function Hn() {
  clearTimeout(ze), ze = void 0;
}
function Bi(e, t, i) {
  e.scrollLeft += t, e.scrollTop += i;
}
function ji(e) {
  var t = window.Polymer, i = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : i ? i(e).clone(!0)[0] : e.cloneNode(!0);
}
var V = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Mn() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(a) {
          if (!(m(a, "display") === "none" || a === g.ghost)) {
            e.push({
              target: a,
              rect: T(a)
            });
            var r = K({}, e[e.length - 1].rect);
            if (a.thisAnimationDuration) {
              var o = we(a, !0);
              o && (r.top -= o.f, r.left -= o.e);
            }
            a.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      e.push(n);
    },
    removeAnimationState: function(n) {
      e.splice(Pn(e, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var r = !1, o = 0;
      e.forEach(function(s) {
        var l = 0, c = s.target, h = c.fromRect, u = T(c), p = c.prevFromRect, w = c.prevToRect, v = s.rect, x = we(c, !0);
        x && (u.top -= x.f, u.left -= x.e), c.toRect = u, c.thisAnimationDuration && dt(p, u) && !dt(h, u) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - u.top) / (v.left - u.left) === (h.top - u.top) / (h.left - u.left) && (l = Bn(v, p, w, a.options)), dt(u, h) || (c.prevFromRect = h, c.prevToRect = u, l || (l = a.options.animation), a.animate(c, v, u, l)), l && (r = !0, o = Math.max(o, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, o) : typeof n == "function" && n(), e = [];
    },
    animate: function(n, a, r, o) {
      if (o) {
        m(n, "transition", ""), m(n, "transform", "");
        var s = we(this.el), l = s && s.a, c = s && s.d, h = (a.left - r.left) / (l || 1), u = (a.top - r.top) / (c || 1);
        n.animatingX = !!h, n.animatingY = !!u, m(n, "transform", "translate3d(" + h + "px," + u + "px,0)"), this.forRepaintDummy = Vn(n), m(n, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), m(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          m(n, "transition", ""), m(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, o);
      }
    }
  };
}
function Vn(e) {
  return e.offsetWidth;
}
function Bn(e, t, i, n) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) * n.animation;
}
var pe = [], ht = {
  initializeByDefault: !0
}, Ue = {
  mount: function(t) {
    for (var i in ht)
      ht.hasOwnProperty(i) && !(i in t) && (t[i] = ht[i]);
    pe.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), pe.push(t);
  },
  pluginEvent: function(t, i, n) {
    var a = this;
    this.eventCanceled = !1, n.cancel = function() {
      a.eventCanceled = !0;
    };
    var r = t + "Global";
    pe.forEach(function(o) {
      i[o.pluginName] && (i[o.pluginName][r] && i[o.pluginName][r](K({
        sortable: i
      }, n)), i.options[o.pluginName] && i[o.pluginName][t] && i[o.pluginName][t](K({
        sortable: i
      }, n)));
    });
  },
  initializePlugins: function(t, i, n, a) {
    pe.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var c = new s(t, i, t.options);
        c.sortable = t, c.options = t.options, t[l] = c, J(n, c.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var o = this.modifyOption(t, r, t.options[r]);
        typeof o < "u" && (t.options[r] = o);
      }
  },
  getEventProperties: function(t, i) {
    var n = {};
    return pe.forEach(function(a) {
      typeof a.eventProperties == "function" && J(n, a.eventProperties.call(i[a.pluginName], t));
    }), n;
  },
  modifyOption: function(t, i, n) {
    var a;
    return pe.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[i] == "function" && (a = r.optionListeners[i].call(t[r.pluginName], n));
    }), a;
  }
};
function jn(e) {
  var t = e.sortable, i = e.rootEl, n = e.name, a = e.targetEl, r = e.cloneEl, o = e.toEl, s = e.fromEl, l = e.oldIndex, c = e.newIndex, h = e.oldDraggableIndex, u = e.newDraggableIndex, p = e.originalEvent, w = e.putSortable, v = e.extraEventProperties;
  if (t = t || i && i[V], !!t) {
    var x, j = t.options, G = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !ee && !$e ? x = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(n, !0, !0)), x.to = o || i, x.from = s || i, x.item = a || i, x.clone = r, x.oldIndex = l, x.newIndex = c, x.oldDraggableIndex = h, x.newDraggableIndex = u, x.originalEvent = p, x.pullMode = w ? w.lastPutMode : void 0;
    var _ = K(K({}, v), Ue.getEventProperties(n, t));
    for (var R in _)
      x[R] = _[R];
    i && i.dispatchEvent(x), j[G] && j[G].call(t, x);
  }
}
var Rn = ["evt"], z = function(t, i) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.evt, r = _n(n, Rn);
  Ue.pluginEvent.bind(g)(t, i, K({
    dragEl: d,
    parentEl: D,
    ghostEl: b,
    rootEl: S,
    nextEl: fe,
    lastDownEl: Qe,
    cloneEl: C,
    cloneHidden: ae,
    dragStarted: Le,
    putSortable: A,
    activeSortable: g.active,
    originalEvent: a,
    oldIndex: ye,
    oldDraggableIndex: Pe,
    newIndex: M,
    newDraggableIndex: ne,
    hideGhostForTarget: Ui,
    unhideGhostForTarget: Xi,
    cloneNowHidden: function() {
      ae = !0;
    },
    cloneNowShown: function() {
      ae = !1;
    },
    dispatchSortableEvent: function(s) {
      F({
        sortable: i,
        name: s,
        originalEvent: a
      });
    }
  }, r));
};
function F(e) {
  jn(K({
    putSortable: A,
    cloneEl: C,
    targetEl: d,
    rootEl: S,
    oldIndex: ye,
    oldDraggableIndex: Pe,
    newIndex: M,
    newDraggableIndex: ne
  }, e));
}
var d, D, b, S, fe, Qe, C, ae, ye, M, Pe, ne, Ye, A, be = !1, nt = !1, at = [], ue, W, ft, pt, ti, ii, Le, me, Ne, He = !1, Ke = !1, Je, L, mt = [], wt = !1, rt = [], lt = typeof document < "u", Ge = Pi, ni = $e || ee ? "cssFloat" : "float", Wn = lt && !Ni && !Pi && "draggable" in document.createElement("div"), Ri = function() {
  if (lt) {
    if (ee)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Wi = function(t, i) {
  var n = m(t), a = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = Ie(t, 0, i), o = Ie(t, 1, i), s = r && m(r), l = o && m(o), c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + T(r).width, h = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + T(o).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && s.float && s.float !== "none") {
    var u = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === u) ? "vertical" : "horizontal";
  }
  return r && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || c >= a && n[ni] === "none" || o && n[ni] === "none" && c + h > a) ? "vertical" : "horizontal";
}, $n = function(t, i, n) {
  var a = n ? t.left : t.top, r = n ? t.right : t.bottom, o = n ? t.width : t.height, s = n ? i.left : i.top, l = n ? i.right : i.bottom, c = n ? i.width : i.height;
  return a === s || r === l || a + o / 2 === s + c / 2;
}, Un = function(t, i) {
  var n;
  return at.some(function(a) {
    var r = a[V].options.emptyInsertThreshold;
    if (!(!r || Vt(a))) {
      var o = T(a), s = t >= o.left - r && t <= o.right + r, l = i >= o.top - r && i <= o.bottom + r;
      if (s && l)
        return n = a;
    }
  }), n;
}, $i = function(t) {
  function i(r, o) {
    return function(s, l, c, h) {
      var u = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (r == null && (o || u))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (o && r === "clone")
        return r;
      if (typeof r == "function")
        return i(r(s, l, c, h), o)(s, l, c, h);
      var p = (o ? s : l).options.group.name;
      return r === !0 || typeof r == "string" && r === p || r.join && r.indexOf(p) > -1;
    };
  }
  var n = {}, a = t.group;
  (!a || Ze(a) != "object") && (a = {
    name: a
  }), n.name = a.name, n.checkPull = i(a.pull, !0), n.checkPut = i(a.put), n.revertClone = a.revertClone, t.group = n;
}, Ui = function() {
  !Ri && b && m(b, "display", "none");
}, Xi = function() {
  !Ri && b && m(b, "display", "");
};
lt && !Ni && document.addEventListener("click", function(e) {
  if (nt)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), nt = !1, !1;
}, !0);
var de = function(t) {
  if (d) {
    t = t.touches ? t.touches[0] : t;
    var i = Un(t.clientX, t.clientY);
    if (i) {
      var n = {};
      for (var a in t)
        t.hasOwnProperty(a) && (n[a] = t[a]);
      n.target = n.rootEl = i, n.preventDefault = void 0, n.stopPropagation = void 0, i[V]._onDragOver(n);
    }
  }
}, Xn = function(t) {
  d && d.parentNode[V]._isOutsideThisEl(t.target);
};
function g(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = J({}, t), e[V] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Wi(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: g.supportPointer !== !1 && "PointerEvent" in window && !Fe,
    emptyInsertThreshold: 5
  };
  Ue.initializePlugins(this, e, i);
  for (var n in i)
    !(n in t) && (t[n] = i[n]);
  $i(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Wn, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? E(e, "pointerdown", this._onTapStart) : (E(e, "mousedown", this._onTapStart), E(e, "touchstart", this._onTapStart)), this.nativeDraggable && (E(e, "dragover", this), E(e, "dragenter", this)), at.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), J(this, Mn());
}
g.prototype = /** @lends Sortable.prototype */
{
  constructor: g,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (me = null);
  },
  _getDirection: function(t, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, i, d) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var i = this, n = this.el, a = this.options, r = a.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, h = a.filter;
      if (ea(n), !d && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || a.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Fe && l && l.tagName.toUpperCase() === "SELECT") && (l = X(l, a.draggable, n, !1), !(l && l.animated) && Qe !== l)) {
        if (ye = B(l), Pe = B(l, a.draggable), typeof h == "function") {
          if (h.call(this, t, l, this)) {
            F({
              sortable: i,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), z("filter", i, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(u) {
          if (u = X(c, u.trim(), n, !1), u)
            return F({
              sortable: i,
              rootEl: u,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), z("filter", i, {
              evt: t
            }), !0;
        }), h)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        a.handle && !X(c, a.handle, n, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, i, n) {
    var a = this, r = a.el, o = a.options, s = r.ownerDocument, l;
    if (n && !d && n.parentNode === r) {
      var c = T(n);
      if (S = r, d = n, D = d.parentNode, fe = d.nextSibling, Qe = n, Ye = o.group, g.dragged = d, ue = {
        target: d,
        clientX: (i || t).clientX,
        clientY: (i || t).clientY
      }, ti = ue.clientX - c.left, ii = ue.clientY - c.top, this._lastX = (i || t).clientX, this._lastY = (i || t).clientY, d.style["will-change"] = "all", l = function() {
        if (z("delayEnded", a, {
          evt: t
        }), g.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !Zt && a.nativeDraggable && (d.draggable = !0), a._triggerDragStart(t, i), F({
          sortable: a,
          name: "choose",
          originalEvent: t
        }), H(d, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(h) {
        Mi(d, h.trim(), gt);
      }), E(s, "dragover", de), E(s, "mousemove", de), E(s, "touchmove", de), E(s, "mouseup", a._onDrop), E(s, "touchend", a._onDrop), E(s, "touchcancel", a._onDrop), Zt && this.nativeDraggable && (this.options.touchStartThreshold = 4, d.draggable = !0), z("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || i) && (!this.nativeDraggable || !($e || ee))) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        E(s, "mouseup", a._disableDelayedDrag), E(s, "touchend", a._disableDelayedDrag), E(s, "touchcancel", a._disableDelayedDrag), E(s, "mousemove", a._delayedDragTouchMoveHandler), E(s, "touchmove", a._delayedDragTouchMoveHandler), o.supportPointer && E(s, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var i = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    d && gt(d), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    y(t, "mouseup", this._disableDelayedDrag), y(t, "touchend", this._disableDelayedDrag), y(t, "touchcancel", this._disableDelayedDrag), y(t, "mousemove", this._delayedDragTouchMoveHandler), y(t, "touchmove", this._delayedDragTouchMoveHandler), y(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, i) {
    i = i || t.pointerType == "touch" && t, !this.nativeDraggable || i ? this.options.supportPointer ? E(document, "pointermove", this._onTouchMove) : i ? E(document, "touchmove", this._onTouchMove) : E(document, "mousemove", this._onTouchMove) : (E(d, "dragend", this), E(S, "dragstart", this._onDragStart));
    try {
      document.selection ? et(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, i) {
    if (be = !1, S && d) {
      z("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && E(document, "dragover", Xn);
      var n = this.options;
      !t && H(d, n.dragClass, !1), H(d, n.ghostClass, !0), g.active = this, t && this._appendGhost(), F({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (W) {
      this._lastX = W.clientX, this._lastY = W.clientY, Ui();
      for (var t = document.elementFromPoint(W.clientX, W.clientY), i = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(W.clientX, W.clientY), t !== i); )
        i = t;
      if (d.parentNode[V]._isOutsideThisEl(t), i)
        do {
          if (i[V]) {
            var n = void 0;
            if (n = i[V]._onDragOver({
              clientX: W.clientX,
              clientY: W.clientY,
              target: t,
              rootEl: i
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = i;
        } while (i = i.parentNode);
      Xi();
    }
  },
  _onTouchMove: function(t) {
    if (ue) {
      var i = this.options, n = i.fallbackTolerance, a = i.fallbackOffset, r = t.touches ? t.touches[0] : t, o = b && we(b, !0), s = b && o && o.a, l = b && o && o.d, c = Ge && L && ei(L), h = (r.clientX - ue.clientX + a.x) / (s || 1) + (c ? c[0] - mt[0] : 0) / (s || 1), u = (r.clientY - ue.clientY + a.y) / (l || 1) + (c ? c[1] - mt[1] : 0) / (l || 1);
      if (!g.active && !be) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (b) {
        o ? (o.e += h - (ft || 0), o.f += u - (pt || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: u
        };
        var p = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        m(b, "webkitTransform", p), m(b, "mozTransform", p), m(b, "msTransform", p), m(b, "transform", p), ft = h, pt = u, W = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!b) {
      var t = this.options.fallbackOnBody ? document.body : S, i = T(d, !0, Ge, !0, t), n = this.options;
      if (Ge) {
        for (L = t; m(L, "position") === "static" && m(L, "transform") === "none" && L !== document; )
          L = L.parentNode;
        L !== document.body && L !== document.documentElement ? (L === document && (L = Y()), i.top += L.scrollTop, i.left += L.scrollLeft) : L = Y(), mt = ei(L);
      }
      b = d.cloneNode(!0), H(b, n.ghostClass, !1), H(b, n.fallbackClass, !0), H(b, n.dragClass, !0), m(b, "transition", ""), m(b, "transform", ""), m(b, "box-sizing", "border-box"), m(b, "margin", 0), m(b, "top", i.top), m(b, "left", i.left), m(b, "width", i.width), m(b, "height", i.height), m(b, "opacity", "0.8"), m(b, "position", Ge ? "absolute" : "fixed"), m(b, "zIndex", "100000"), m(b, "pointerEvents", "none"), g.ghost = b, t.appendChild(b), m(b, "transform-origin", ti / parseInt(b.style.width) * 100 + "% " + ii / parseInt(b.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, i) {
    var n = this, a = t.dataTransfer, r = n.options;
    if (z("dragStart", this, {
      evt: t
    }), g.eventCanceled) {
      this._onDrop();
      return;
    }
    z("setupClone", this), g.eventCanceled || (C = ji(d), C.removeAttribute("id"), C.draggable = !1, C.style["will-change"] = "", this._hideClone(), H(C, this.options.chosenClass, !1), g.clone = C), n.cloneId = et(function() {
      z("clone", n), !g.eventCanceled && (n.options.removeCloneOnHide || S.insertBefore(C, d), n._hideClone(), F({
        sortable: n,
        name: "clone"
      }));
    }), !i && H(d, r.dragClass, !0), i ? (nt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (y(document, "mouseup", n._onDrop), y(document, "touchend", n._onDrop), y(document, "touchcancel", n._onDrop), a && (a.effectAllowed = "move", r.setData && r.setData.call(n, a, d)), E(document, "drop", n), m(d, "transform", "translateZ(0)")), be = !0, n._dragStartId = et(n._dragStarted.bind(n, i, t)), E(document, "selectstart", n), Le = !0, Fe && m(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var i = this.el, n = t.target, a, r, o, s = this.options, l = s.group, c = g.active, h = Ye === l, u = s.sort, p = A || c, w, v = this, x = !1;
    if (wt)
      return;
    function j(Te, dn) {
      z(Te, v, K({
        evt: t,
        isOwner: h,
        axis: w ? "vertical" : "horizontal",
        revert: o,
        dragRect: a,
        targetRect: r,
        canSort: u,
        fromSortable: p,
        target: n,
        completed: _,
        onMove: function(Xt, hn) {
          return qe(S, i, d, a, Xt, T(Xt), t, hn);
        },
        changed: R
      }, dn));
    }
    function G() {
      j("dragOverAnimationCapture"), v.captureAnimationState(), v !== p && p.captureAnimationState();
    }
    function _(Te) {
      return j("dragOverCompleted", {
        insertion: Te
      }), Te && (h ? c._hideClone() : c._showClone(v), v !== p && (H(d, A ? A.options.ghostClass : c.options.ghostClass, !1), H(d, s.ghostClass, !0)), A !== v && v !== g.active ? A = v : v === g.active && A && (A = null), p === v && (v._ignoreWhileAnimating = n), v.animateAll(function() {
        j("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (n === d && !d.animated || n === i && !n.animated) && (me = null), !s.dragoverBubble && !t.rootEl && n !== document && (d.parentNode[V]._isOutsideThisEl(t.target), !Te && de(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), x = !0;
    }
    function R() {
      M = B(d), ne = B(d, s.draggable), F({
        sortable: v,
        name: "change",
        toEl: i,
        newIndex: M,
        newDraggableIndex: ne,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = X(n, s.draggable, i, !0), j("dragOver"), g.eventCanceled)
      return x;
    if (d.contains(t.target) || n.animated && n.animatingX && n.animatingY || v._ignoreWhileAnimating === n)
      return _(!1);
    if (nt = !1, c && !s.disabled && (h ? u || (o = D !== S) : A === this || (this.lastPutMode = Ye.checkPull(this, c, d, t)) && l.checkPut(this, c, d, t))) {
      if (w = this._getDirection(t, n) === "vertical", a = T(d), j("dragOverValid"), g.eventCanceled)
        return x;
      if (o)
        return D = S, G(), this._hideClone(), j("revert"), g.eventCanceled || (fe ? S.insertBefore(d, fe) : S.appendChild(d)), _(!0);
      var P = Vt(i, s.draggable);
      if (!P || qn(t, w, this) && !P.animated) {
        if (P === d)
          return _(!1);
        if (P && i === t.target && (n = P), n && (r = T(n)), qe(S, i, d, a, n, r, t, !!n) !== !1)
          return G(), P && P.nextSibling ? i.insertBefore(d, P.nextSibling) : i.appendChild(d), D = i, R(), _(!0);
      } else if (P && Gn(t, w, this)) {
        var oe = Ie(i, 0, s, !0);
        if (oe === d)
          return _(!1);
        if (n = oe, r = T(n), qe(S, i, d, a, n, r, t, !1) !== !1)
          return G(), i.insertBefore(d, oe), D = i, R(), _(!0);
      } else if (n.parentNode === i) {
        r = T(n);
        var $ = 0, se, Se = d.parentNode !== i, N = !$n(d.animated && d.toRect || a, n.animated && n.toRect || r, w), Ce = w ? "top" : "left", te = Jt(n, "top", "top") || Jt(d, "top", "top"), De = te ? te.scrollTop : void 0;
        me !== n && (se = r[Ce], He = !1, Ke = !N && s.invertSwap || Se), $ = Zn(t, n, r, w, N ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, Ke, me === n);
        var q;
        if ($ !== 0) {
          var le = B(d);
          do
            le -= $, q = D.children[le];
          while (q && (m(q, "display") === "none" || q === b));
        }
        if ($ === 0 || q === n)
          return _(!1);
        me = n, Ne = $;
        var ke = n.nextElementSibling, ie = !1;
        ie = $ === 1;
        var Xe = qe(S, i, d, a, n, r, t, ie);
        if (Xe !== !1)
          return (Xe === 1 || Xe === -1) && (ie = Xe === 1), wt = !0, setTimeout(Kn, 30), G(), ie && !ke ? i.appendChild(d) : n.parentNode.insertBefore(d, ie ? ke : n), te && Bi(te, 0, De - te.scrollTop), D = d.parentNode, se !== void 0 && !Ke && (Je = Math.abs(se - T(n)[Ce])), R(), _(!0);
      }
      if (i.contains(d))
        return _(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    y(document, "mousemove", this._onTouchMove), y(document, "touchmove", this._onTouchMove), y(document, "pointermove", this._onTouchMove), y(document, "dragover", de), y(document, "mousemove", de), y(document, "touchmove", de);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    y(t, "mouseup", this._onDrop), y(t, "touchend", this._onDrop), y(t, "pointerup", this._onDrop), y(t, "touchcancel", this._onDrop), y(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var i = this.el, n = this.options;
    if (M = B(d), ne = B(d, n.draggable), z("drop", this, {
      evt: t
    }), D = d && d.parentNode, M = B(d), ne = B(d, n.draggable), g.eventCanceled) {
      this._nulling();
      return;
    }
    be = !1, Ke = !1, He = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), xt(this.cloneId), xt(this._dragStartId), this.nativeDraggable && (y(document, "drop", this), y(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fe && m(document.body, "user-select", ""), m(d, "transform", ""), t && (Le && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), b && b.parentNode && b.parentNode.removeChild(b), (S === D || A && A.lastPutMode !== "clone") && C && C.parentNode && C.parentNode.removeChild(C), d && (this.nativeDraggable && y(d, "dragend", this), gt(d), d.style["will-change"] = "", Le && !be && H(d, A ? A.options.ghostClass : this.options.ghostClass, !1), H(d, this.options.chosenClass, !1), F({
      sortable: this,
      name: "unchoose",
      toEl: D,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), S !== D ? (M >= 0 && (F({
      rootEl: D,
      name: "add",
      toEl: D,
      fromEl: S,
      originalEvent: t
    }), F({
      sortable: this,
      name: "remove",
      toEl: D,
      originalEvent: t
    }), F({
      rootEl: D,
      name: "sort",
      toEl: D,
      fromEl: S,
      originalEvent: t
    }), F({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: t
    })), A && A.save()) : M !== ye && M >= 0 && (F({
      sortable: this,
      name: "update",
      toEl: D,
      originalEvent: t
    }), F({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: t
    })), g.active && ((M == null || M === -1) && (M = ye, ne = Pe), F({
      sortable: this,
      name: "end",
      toEl: D,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    z("nulling", this), S = d = D = b = fe = C = Qe = ae = ue = W = Le = M = ne = ye = Pe = me = Ne = A = Ye = g.dragged = g.ghost = g.clone = g.active = null, rt.forEach(function(t) {
      t.checked = !0;
    }), rt.length = ft = pt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        d && (this._onDragOver(t), Yn(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], i, n = this.el.children, a = 0, r = n.length, o = this.options; a < r; a++)
      i = n[a], X(i, o.draggable, this.el, !1) && t.push(i.getAttribute(o.dataIdAttr) || Jn(i));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, i) {
    var n = {}, a = this.el;
    this.toArray().forEach(function(r, o) {
      var s = a.children[o];
      X(s, this.options.draggable, a, !1) && (n[r] = s);
    }, this), i && this.captureAnimationState(), t.forEach(function(r) {
      n[r] && (a.removeChild(n[r]), a.appendChild(n[r]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, i) {
    return X(t, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, i) {
    var n = this.options;
    if (i === void 0)
      return n[t];
    var a = Ue.modifyOption(this, t, i);
    typeof a < "u" ? n[t] = a : n[t] = i, t === "group" && $i(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    z("destroy", this);
    var t = this.el;
    t[V] = null, y(t, "mousedown", this._onTapStart), y(t, "touchstart", this._onTapStart), y(t, "pointerdown", this._onTapStart), this.nativeDraggable && (y(t, "dragover", this), y(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), at.splice(at.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!ae) {
      if (z("hideClone", this), g.eventCanceled)
        return;
      m(C, "display", "none"), this.options.removeCloneOnHide && C.parentNode && C.parentNode.removeChild(C), ae = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ae) {
      if (z("showClone", this), g.eventCanceled)
        return;
      d.parentNode == S && !this.options.group.revertClone ? S.insertBefore(C, d) : fe ? S.insertBefore(C, fe) : S.appendChild(C), this.options.group.revertClone && this.animate(d, C), m(C, "display", ""), ae = !1;
    }
  }
};
function Yn(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function qe(e, t, i, n, a, r, o, s) {
  var l, c = e[V], h = c.options.onMove, u;
  return window.CustomEvent && !ee && !$e ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = i, l.draggedRect = n, l.related = a || t, l.relatedRect = r || T(t), l.willInsertAfter = s, l.originalEvent = o, e.dispatchEvent(l), h && (u = h.call(c, l, o)), u;
}
function gt(e) {
  e.draggable = !1;
}
function Kn() {
  wt = !1;
}
function Gn(e, t, i) {
  var n = T(Ie(i.el, 0, i.options, !0)), a = 10;
  return t ? e.clientX < n.left - a || e.clientY < n.top && e.clientX < n.right : e.clientY < n.top - a || e.clientY < n.bottom && e.clientX < n.left;
}
function qn(e, t, i) {
  var n = T(Vt(i.el, i.options.draggable)), a = 10;
  return t ? e.clientX > n.right + a || e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left : e.clientX > n.right && e.clientY > n.top || e.clientX <= n.right && e.clientY > n.bottom + a;
}
function Zn(e, t, i, n, a, r, o, s) {
  var l = n ? e.clientY : e.clientX, c = n ? i.height : i.width, h = n ? i.top : i.left, u = n ? i.bottom : i.right, p = !1;
  if (!o) {
    if (s && Je < c * a) {
      if (!He && (Ne === 1 ? l > h + c * r / 2 : l < u - c * r / 2) && (He = !0), He)
        p = !0;
      else if (Ne === 1 ? l < h + Je : l > u - Je)
        return -Ne;
    } else if (l > h + c * (1 - a) / 2 && l < u - c * (1 - a) / 2)
      return Qn(t);
  }
  return p = p || o, p && (l < h + c * r / 2 || l > u - c * r / 2) ? l > h + c / 2 ? 1 : -1 : 0;
}
function Qn(e) {
  return B(d) < B(e) ? 1 : -1;
}
function Jn(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, i = t.length, n = 0; i--; )
    n += t.charCodeAt(i);
  return n.toString(36);
}
function ea(e) {
  rt.length = 0;
  for (var t = e.getElementsByTagName("input"), i = t.length; i--; ) {
    var n = t[i];
    n.checked && rt.push(n);
  }
}
function et(e) {
  return setTimeout(e, 0);
}
function xt(e) {
  return clearTimeout(e);
}
lt && E(document, "touchmove", function(e) {
  (g.active || be) && e.cancelable && e.preventDefault();
});
g.utils = {
  on: E,
  off: y,
  css: m,
  find: Mi,
  is: function(t, i) {
    return !!X(t, i, t, !1);
  },
  extend: Nn,
  throttle: Vi,
  closest: X,
  toggleClass: H,
  clone: ji,
  index: B,
  nextTick: et,
  cancelNextTick: xt,
  detectDirection: Wi,
  getChild: Ie
};
g.get = function(e) {
  return e[V];
};
g.mount = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (g.utils = K(K({}, g.utils), n.utils)), Ue.mount(n);
  });
};
g.create = function(e, t) {
  return new g(e, t);
};
g.version = Fn;
var k = [], Oe, It, St = !1, bt, vt, ot, _e;
function ta() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(i) {
      var n = i.originalEvent;
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? E(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? E(document, "touchmove", this._handleFallbackAutoScroll) : E(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var n = i.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? y(document, "dragover", this._handleAutoScroll) : (y(document, "pointermove", this._handleFallbackAutoScroll), y(document, "touchmove", this._handleFallbackAutoScroll), y(document, "mousemove", this._handleFallbackAutoScroll)), ai(), tt(), Hn();
    },
    nulling: function() {
      ot = It = Oe = St = _e = bt = vt = null, k.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, n) {
      var a = this, r = (i.touches ? i.touches[0] : i).clientX, o = (i.touches ? i.touches[0] : i).clientY, s = document.elementFromPoint(r, o);
      if (ot = i, n || this.options.forceAutoScrollFallback || $e || ee || Fe) {
        yt(i, this.options, s, n);
        var l = re(s, !0);
        St && (!_e || r !== bt || o !== vt) && (_e && ai(), _e = setInterval(function() {
          var c = re(document.elementFromPoint(r, o), !0);
          c !== l && (l = c, tt()), yt(i, a.options, c, n);
        }, 10), bt = r, vt = o);
      } else {
        if (!this.options.bubbleScroll || re(s, !0) === Y()) {
          tt();
          return;
        }
        yt(i, this.options, re(s, !1), !1);
      }
    }
  }, J(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function tt() {
  k.forEach(function(e) {
    clearInterval(e.pid);
  }), k = [];
}
function ai() {
  clearInterval(_e);
}
var yt = Vi(function(e, t, i, n) {
  if (t.scroll) {
    var a = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = Y(), c = !1, h;
    It !== i && (It = i, tt(), Oe = t.scroll, h = t.scrollFn, Oe === !0 && (Oe = re(i, !0)));
    var u = 0, p = Oe;
    do {
      var w = p, v = T(w), x = v.top, j = v.bottom, G = v.left, _ = v.right, R = v.width, P = v.height, oe = void 0, $ = void 0, se = w.scrollWidth, Se = w.scrollHeight, N = m(w), Ce = w.scrollLeft, te = w.scrollTop;
      w === l ? (oe = R < se && (N.overflowX === "auto" || N.overflowX === "scroll" || N.overflowX === "visible"), $ = P < Se && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflowY === "visible")) : (oe = R < se && (N.overflowX === "auto" || N.overflowX === "scroll"), $ = P < Se && (N.overflowY === "auto" || N.overflowY === "scroll"));
      var De = oe && (Math.abs(_ - a) <= o && Ce + R < se) - (Math.abs(G - a) <= o && !!Ce), q = $ && (Math.abs(j - r) <= o && te + P < Se) - (Math.abs(x - r) <= o && !!te);
      if (!k[u])
        for (var le = 0; le <= u; le++)
          k[le] || (k[le] = {});
      (k[u].vx != De || k[u].vy != q || k[u].el !== w) && (k[u].el = w, k[u].vx = De, k[u].vy = q, clearInterval(k[u].pid), (De != 0 || q != 0) && (c = !0, k[u].pid = setInterval((function() {
        n && this.layer === 0 && g.active._onTouchMove(ot);
        var ke = k[this.layer].vy ? k[this.layer].vy * s : 0, ie = k[this.layer].vx ? k[this.layer].vx * s : 0;
        typeof h == "function" && h.call(g.dragged.parentNode[V], ie, ke, e, ot, k[this.layer].el) !== "continue" || Bi(k[this.layer].el, ie, ke);
      }).bind({
        layer: u
      }), 24))), u++;
    } while (t.bubbleScroll && p !== l && (p = re(p, !1)));
    St = c;
  }
}, 30), Yi = function(t) {
  var i = t.originalEvent, n = t.putSortable, a = t.dragEl, r = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (i) {
    var c = n || r;
    s();
    var h = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, u = document.elementFromPoint(h.clientX, h.clientY);
    l(), c && !c.el.contains(u) && (o("spill"), this.onSpill({
      dragEl: a,
      putSortable: n
    }));
  }
};
function Bt() {
}
Bt.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var i = t.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(t) {
    var i = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var a = Ie(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(i, a) : this.sortable.el.appendChild(i), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Yi
};
J(Bt, {
  pluginName: "revertOnSpill"
});
function jt() {
}
jt.prototype = {
  onSpill: function(t) {
    var i = t.dragEl, n = t.putSortable, a = n || this.sortable;
    a.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), a.animateAll();
  },
  drop: Yi
};
J(jt, {
  pluginName: "removeOnSpill"
});
g.mount(new ta());
g.mount(jt, Bt);
const ct = /* @__PURE__ */ new Set(), ia = {
  ghostClass: "calcite-sortable--ghost",
  chosenClass: "calcite-sortable--chosen",
  dragClass: "calcite-sortable--drag"
};
function na(e) {
  Ki(e), ct.add(e);
  const t = "id", { group: i, handleSelector: n, dragSelector: a } = e;
  e.sortable = g.create(e.el, {
    dataIdAttr: t,
    ...ia,
    ...!!a && { draggable: a },
    ...!!i && {
      group: {
        name: i,
        ...!!e.canPull && {
          pull: (r, o, s, { newIndex: l, oldIndex: c }) => e.canPull({ toEl: r.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        },
        ...!!e.canPut && {
          put: (r, o, s, { newIndex: l, oldIndex: c }) => e.canPut({ toEl: r.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        }
      }
    },
    handle: n,
    onStart: () => {
      Ct.active = !0, aa();
    },
    onEnd: () => {
      Ct.active = !1, ra();
    },
    onSort: ({ from: r, item: o, to: s, newIndex: l, oldIndex: c }) => {
      e.onDragSort({ fromEl: r, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    }
  });
}
function Ki(e) {
  var t;
  ct.delete(e), (t = e.sortable) == null || t.destroy(), e.sortable = null;
}
const Ct = { active: !1 };
function ri(e) {
  return e.dragEnabled && Ct.active;
}
function aa() {
  Array.from(ct).forEach((e) => e.onDragStart());
}
function ra() {
  Array.from(ct).forEach((e) => e.onDragEnd());
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const ge = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, Ee = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, oa = ":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}", sa = /* @__PURE__ */ Re(class extends We {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.handleActionsStartSlotChange = (e) => {
      this.hasActionsStart = ve(e);
    }, this.handleActionsEndSlotChange = (e) => {
      this.hasActionsEnd = ve(e);
    }, this.handleContentStartSlotChange = (e) => {
      this.hasContentStart = ve(e);
    }, this.handleContentEndSlotChange = (e) => {
      this.hasContentEnd = ve(e);
    }, this.disabled = !1, this.hasActionsStart = !1, this.hasActionsEnd = !1, this.hasContentStart = !1, this.hasContentEnd = !1;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { hasActionsStart: e } = this;
    return f("div", { class: ge.actionsStart, hidden: !e, key: "actions-start-container" }, f("slot", { name: Ee.actionsStart, onSlotchange: this.handleActionsStartSlotChange }));
  }
  renderActionsEnd() {
    const { hasActionsEnd: e } = this;
    return f("div", { class: ge.actionsEnd, hidden: !e, key: "actions-end-container" }, f("slot", { name: Ee.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }));
  }
  renderContentStart() {
    const { hasContentStart: e } = this;
    return f("div", { class: ge.contentStart, hidden: !e }, f("slot", { name: Ee.contentStart, onSlotchange: this.handleContentStartSlotChange }));
  }
  renderDefaultContent() {
    return f("div", { class: ge.content }, f("slot", null));
  }
  renderContentEnd() {
    const { hasContentEnd: e } = this;
    return f("div", { class: ge.contentEnd, hidden: !e }, f("slot", { name: Ee.contentEnd, onSlotchange: this.handleContentEndSlotChange }));
  }
  render() {
    return f(xi, null, f("div", { class: ge.container }, this.renderActionsStart(), this.renderContentStart(), this.renderDefaultContent(), this.renderContentEnd(), this.renderActionsEnd()));
  }
  static get style() {
    return oa;
  }
}, [1, "calcite-stack", {
  disabled: [516],
  hasActionsStart: [32],
  hasActionsEnd: [32],
  hasContentStart: [32],
  hasContentEnd: [32]
}]);
function Gi() {
  if (typeof customElements > "u")
    return;
  ["calcite-stack"].forEach((t) => {
    switch (t) {
      case "calcite-stack":
        customElements.get(t) || customElements.define(t, sa);
        break;
    }
  });
}
Gi();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function la(e, t) {
  for (var i = -1, n = e == null ? 0 : e.length, a = Array(n); ++i < n; )
    a[i] = t(e[i], i, e);
  return a;
}
var qi = Array.isArray, ca = 1 / 0, oi = Gt ? Gt.prototype : void 0, si = oi ? oi.toString : void 0;
function Zi(e) {
  if (typeof e == "string")
    return e;
  if (qi(e))
    return la(e, Zi) + "";
  if (In(e))
    return si ? si.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ca ? "-0" : t;
}
function ua(e) {
  return e;
}
var da = "[object AsyncFunction]", ha = "[object Function]", fa = "[object GeneratorFunction]", pa = "[object Proxy]";
function ma(e) {
  if (!ki(e))
    return !1;
  var t = Ht(e);
  return t == ha || t == fa || t == da || t == pa;
}
var ga = 9007199254740991, ba = /^(?:0|[1-9]\d*)$/;
function va(e, t) {
  var i = typeof e;
  return t = t ?? ga, !!t && (i == "number" || i != "symbol" && ba.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ya = 9007199254740991;
function Qi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ya;
}
function Ea(e) {
  return e != null && Qi(e.length) && !ma(e);
}
var wa = Object.prototype;
function xa(e) {
  var t = e && e.constructor, i = typeof t == "function" && t.prototype || wa;
  return e === i;
}
function Ia(e, t) {
  for (var i = -1, n = Array(e); ++i < e; )
    n[i] = t(i);
  return n;
}
var Sa = "[object Arguments]";
function li(e) {
  return Nt(e) && Ht(e) == Sa;
}
var Ji = Object.prototype, Ca = Ji.hasOwnProperty, Da = Ji.propertyIsEnumerable, ka = li(/* @__PURE__ */ function() {
  return arguments;
}()) ? li : function(e) {
  return Nt(e) && Ca.call(e, "callee") && !Da.call(e, "callee");
};
function Ta() {
  return !1;
}
var en = typeof exports == "object" && exports && !exports.nodeType && exports, ci = en && typeof module == "object" && module && !module.nodeType && module, Aa = ci && ci.exports === en, ui = Aa ? wn.Buffer : void 0, La = ui ? ui.isBuffer : void 0, Oa = La || Ta, _a = "[object Arguments]", Fa = "[object Array]", za = "[object Boolean]", Pa = "[object Date]", Na = "[object Error]", Ha = "[object Function]", Ma = "[object Map]", Va = "[object Number]", Ba = "[object Object]", ja = "[object RegExp]", Ra = "[object Set]", Wa = "[object String]", $a = "[object WeakMap]", Ua = "[object ArrayBuffer]", Xa = "[object DataView]", Ya = "[object Float32Array]", Ka = "[object Float64Array]", Ga = "[object Int8Array]", qa = "[object Int16Array]", Za = "[object Int32Array]", Qa = "[object Uint8Array]", Ja = "[object Uint8ClampedArray]", er = "[object Uint16Array]", tr = "[object Uint32Array]", I = {};
I[Ya] = I[Ka] = I[Ga] = I[qa] = I[Za] = I[Qa] = I[Ja] = I[er] = I[tr] = !0;
I[_a] = I[Fa] = I[Ua] = I[za] = I[Xa] = I[Pa] = I[Na] = I[Ha] = I[Ma] = I[Va] = I[Ba] = I[ja] = I[Ra] = I[Wa] = I[$a] = !1;
function ir(e) {
  return Nt(e) && Qi(e.length) && !!I[Ht(e)];
}
function nr(e) {
  return function(t) {
    return e(t);
  };
}
var tn = typeof exports == "object" && exports && !exports.nodeType && exports, Me = tn && typeof module == "object" && module && !module.nodeType && module, ar = Me && Me.exports === tn, Et = ar && xn.process, di = function() {
  try {
    var e = Me && Me.require && Me.require("util").types;
    return e || Et && Et.binding && Et.binding("util");
  } catch {
  }
}(), hi = di && di.isTypedArray, rr = hi ? nr(hi) : ir, or = Object.prototype, sr = or.hasOwnProperty;
function lr(e, t) {
  var i = qi(e), n = !i && ka(e), a = !i && !n && Oa(e), r = !i && !n && !a && rr(e), o = i || n || a || r, s = o ? Ia(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || sr.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    va(c, l))) && s.push(c);
  return s;
}
function cr(e) {
  var t = [];
  if (e != null)
    for (var i in Object(e))
      t.push(i);
  return t;
}
var ur = Object.prototype, dr = ur.hasOwnProperty;
function hr(e) {
  if (!ki(e))
    return cr(e);
  var t = xa(e), i = [];
  for (var n in e)
    n == "constructor" && (t || !dr.call(e, n)) || i.push(n);
  return i;
}
function fr(e) {
  return Ea(e) ? lr(e, !0) : hr(e);
}
function pr(e) {
  return e == null ? "" : Zi(e);
}
function mr(e) {
  return function(t, i, n) {
    for (var a = -1, r = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++a];
      if (i(r[l], l, r) === !1)
        break;
    }
    return t;
  };
}
var gr = mr();
function br(e) {
  return typeof e == "function" ? e : ua;
}
var nn = /[\\^$.*+?()[\]{}|]/g, vr = RegExp(nn.source);
function yr(e) {
  return e = pr(e), e && vr.test(e) ? e.replace(nn, "\\$&") : e;
}
function Er(e, t) {
  return e == null ? e : gr(e, br(t), fr);
}
const fi = (e, t) => {
  const i = yr(t), n = new RegExp(i, "i");
  e.length === 0 && console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  const a = (o, s) => {
    if (o != null && o.constant || o != null && o.filterDisabled)
      return !0;
    let l = !1;
    return Er(o, (c) => {
      typeof c == "function" || c == null || (Array.isArray(c) || typeof c == "object" && c !== null ? a(c, s) && (l = !0) : s.test(c) && (l = !0));
    }), l;
  };
  return e.filter((o) => a(o, n));
};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const Dt = "hidden-form-input";
function Rt(e) {
  return "checked" in e;
}
const kt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakSet();
function wr(e, t) {
  if (At(t.parentElement, "[form]"))
    return !0;
  const n = "calciteInternalFormComponentRegister";
  let a = !1;
  return e.addEventListener(n, (r) => {
    a = r.composedPath().some((o) => Wt.has(o)), r.stopPropagation();
  }, { once: !0 }), t.dispatchEvent(new CustomEvent(n, {
    bubbles: !0,
    composed: !0
  })), a;
}
function xr(e) {
  const { formEl: t } = e;
  return t ? (t.requestSubmit(), !0) : !1;
}
function Ir(e) {
  const { el: t, value: i } = e, n = Sr(e);
  if (!n || wr(n, t))
    return;
  e.formEl = n, e.defaultValue = i, Rt(e) && (e.defaultChecked = e.checked);
  const a = (e.onFormReset || Cr).bind(e);
  n.addEventListener("reset", a), kt.set(e.el, a), Wt.add(t);
}
function Sr(e) {
  const { el: t, form: i } = e;
  return i ? Ii(t, { id: i }) : At(t, "form");
}
function Cr() {
  if (Rt(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
function Dr(e) {
  const { el: t, formEl: i } = e;
  if (!i)
    return;
  const n = kt.get(t);
  i.removeEventListener("reset", n), kt.delete(t), e.formEl = null, Wt.delete(t);
}
const an = (e) => {
  e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange", { bubbles: !0 }));
}, pi = (e) => e.removeEventListener("change", an);
function kr(e) {
  const { el: t, formEl: i, name: n, value: a } = e, { ownerDocument: r } = t, o = t.querySelectorAll(`input[slot="${Dt}"]`);
  if (!i || !n) {
    o.forEach((u) => {
      pi(u), u.remove();
    });
    return;
  }
  const s = Array.isArray(a) ? a : [a], l = [], c = /* @__PURE__ */ new Set();
  o.forEach((u) => {
    const p = s.find((w) => (
      /* intentional non-strict equality check */
      w == u.value
    ));
    p != null ? (c.add(p), mi(e, u, p)) : l.push(u);
  });
  let h;
  s.forEach((u) => {
    if (c.has(u))
      return;
    let p = l.pop();
    p || (p = r.createElement("input"), p.slot = Dt), h || (h = r.createDocumentFragment()), h.append(p), p.addEventListener("change", an), mi(e, p, u);
  }), h && t.append(h), l.forEach((u) => {
    pi(u), u.remove();
  });
}
function mi(e, t, i) {
  var l;
  const { defaultValue: n, disabled: a, form: r, name: o, required: s } = e;
  t.defaultValue = n, t.disabled = a, t.name = o, t.required = s, t.tabIndex = -1, r ? t.setAttribute("form", r) : t.removeAttribute("form"), Rt(e) ? (t.checked = e.checked, t.defaultChecked = e.defaultChecked, t.value = e.checked ? i || "on" : "") : t.value = i || "", (l = e.syncHiddenFormInput) == null || l.call(e, t);
}
const Tr = ({ component: e }) => (kr(e), f("slot", { name: Dt }));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const rn = "calciteInternalLabelClick", $t = "calciteInternalLabelConnected", Tt = "calciteInternalLabelDisconnected", gi = "calcite-label", Be = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakSet(), Ar = (e) => {
  const { id: t } = e, i = t && Ii(e, { selector: `${gi}[for="${t}"]` });
  if (i)
    return i;
  const n = At(e, gi);
  return !n || // labelable components within other custom elements are not considered labelable
  Lr(n, e) ? null : n;
};
function Lr(e, t) {
  let i;
  const n = "custom-element-ancestor-check", a = (o) => {
    o.stopImmediatePropagation();
    const s = o.composedPath();
    i = s.slice(s.indexOf(t), s.indexOf(e));
  };
  return e.addEventListener(n, a, { once: !0 }), t.dispatchEvent(new CustomEvent(n, { composed: !0, bubbles: !0 })), e.removeEventListener(n, a), i.filter((o) => o !== t && o !== e).filter((o) => {
    var s;
    return (s = o.tagName) == null ? void 0 : s.includes("-");
  }).length > 0;
}
function on(e) {
  const t = Ar(e.el);
  if (Ve.has(t) && t === e.labelEl || !t && xe.has(e))
    return;
  const i = Fr.bind(e);
  if (t) {
    e.labelEl = t;
    const n = Be.get(t) || [];
    n.push(e), Be.set(t, n.sort(sn)), Ve.has(e.labelEl) || (Ve.set(e.labelEl, vi), e.labelEl.addEventListener(rn, vi)), xe.delete(e), document.removeEventListener($t, je.get(e)), st.set(e, i), document.addEventListener(Tt, i);
  } else
    xe.has(e) || (i(), document.removeEventListener(Tt, st.get(e)));
}
function Or(e) {
  if (xe.delete(e), document.removeEventListener($t, je.get(e)), document.removeEventListener(Tt, st.get(e)), je.delete(e), st.delete(e), !e.labelEl)
    return;
  const t = Be.get(e.labelEl);
  t.length === 1 && (e.labelEl.removeEventListener(rn, Ve.get(e.labelEl)), Ve.delete(e.labelEl)), Be.set(e.labelEl, t.filter((i) => i !== e).sort(sn)), e.labelEl = null;
}
function sn(e, t) {
  return fn(e.el, t.el) ? -1 : 1;
}
function bi(e) {
  var t, i;
  return e.label || ((i = (t = e.labelEl) == null ? void 0 : t.textContent) == null ? void 0 : i.trim()) || "";
}
function vi(e) {
  const t = e.detail.sourceEvent.target, i = Be.get(this), n = i.find((o) => o.el === t);
  if (i.includes(n))
    return;
  const r = i[0];
  r.disabled || r.onLabelClick(e);
}
function _r() {
  xe.has(this) && on(this);
}
function Fr() {
  xe.add(this);
  const e = je.get(this) || _r.bind(this);
  je.set(this, e), document.addEventListener($t, e);
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const zr = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}", Pr = /* @__PURE__ */ Re(class extends We {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "determinate", this.value = 0, this.label = void 0, this.text = void 0, this.reversed = !1;
  }
  render() {
    const t = this.type === "determinate" ? { width: `${this.value * 100}%` } : {}, i = Si(this.el);
    return f("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, f("div", { class: "track" }, f("div", { class: {
      bar: !0,
      indeterminate: this.type === "indeterminate",
      [Ci.rtl]: i === "rtl",
      reversed: this.reversed
    }, style: t })), this.text ? f("div", { class: "text" }, this.text) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return zr;
  }
}, [1, "calcite-progress", {
  type: [513],
  value: [2],
  label: [1],
  text: [1],
  reversed: [516]
}]);
function ut() {
  if (typeof customElements > "u")
    return;
  ["calcite-progress"].forEach((t) => {
    switch (t) {
      case "calcite-progress":
        customElements.get(t) || customElements.define(t, Pr);
        break;
    }
  });
}
ut();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const O = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
}, yi = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
}, Nr = {
  action: "action"
}, Hr = `:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-app-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}input.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`, Mr = /* @__PURE__ */ Re(class extends We {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteInternalInputFocus = Z(this, "calciteInternalInputFocus", 6), this.calciteInternalInputBlur = Z(this, "calciteInternalInputBlur", 6), this.calciteInputInput = Z(this, "calciteInputInput", 7), this.calciteInputChange = Z(this, "calciteInputChange", 6), this.childElType = "input", this.previousValueOrigin = "initial", this.mutationObserver = Di("mutation", () => this.setDisabledAction()), this.userChangedValue = !1, this.keyDownHandler = (e) => {
      this.readOnly || this.disabled || (this.isClearable && e.key === "Escape" && (this.clearInputValue(e), e.preventDefault()), e.key === "Enter" && !e.defaultPrevented && xr(this) && e.preventDefault());
    }, this.clearInputValue = (e) => {
      this.setValue({
        committing: !0,
        nativeEvent: e,
        origin: "user",
        value: ""
      });
    }, this.emitChangeIfUserModified = () => {
      this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue && (this.calciteInputChange.emit(), this.setPreviousEmittedValue(this.value));
    }, this.inputBlurHandler = () => {
      this.calciteInternalInputBlur.emit(), this.emitChangeIfUserModified();
    }, this.clickHandler = (e) => {
      if (this.disabled)
        return;
      const t = Yt(this.el, "action");
      e.target !== t && this.setFocus();
    }, this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    }, this.inputChangeHandler = () => {
      this.type === "file" && (this.files = this.childEl.files);
    }, this.inputInputHandler = (e) => {
      this.disabled || this.readOnly || this.setValue({
        nativeEvent: e,
        origin: "user",
        value: e.target.value
      });
    }, this.inputKeyDownHandler = (e) => {
      this.disabled || this.readOnly || e.key === "Enter" && this.emitChangeIfUserModified();
    }, this.inputNumberInputHandler = (e) => {
      if (this.disabled || this.readOnly)
        return;
      const t = e.target.value;
      U.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const i = U.delocalize(t);
      e.inputType === "insertFromPaste" ? (ce(i) || e.preventDefault(), this.setValue({
        nativeEvent: e,
        origin: "user",
        value: Sn(i)
      }), this.childNumberEl.value = this.localizedValue) : this.setValue({
        nativeEvent: e,
        origin: "user",
        value: i
      });
    }, this.inputNumberKeyDownHandler = (e) => {
      if (this.type !== "number" || this.disabled || this.readOnly)
        return;
      if (e.key === "ArrowUp") {
        e.preventDefault(), this.nudgeNumberValue("up", e);
        return;
      }
      if (e.key === "ArrowDown") {
        this.nudgeNumberValue("down", e);
        return;
      }
      const t = [
        ...Tn,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (e.altKey || e.ctrlKey || e.metaKey)
        return;
      const i = e.shiftKey && e.key === "Tab";
      if (t.includes(e.key) || i) {
        e.key === "Enter" && this.emitChangeIfUserModified();
        return;
      }
      U.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      }, !(e.key === U.decimal && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.indexOf(U.decimal) === -1)) && (/[eE]/.test(e.key) && (!this.value && !this.childNumberEl.value || this.value && !/[eE]/.test(this.childNumberEl.value)) || e.key === "-" && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.split("-").length <= 2) || e.preventDefault());
    }, this.nudgeNumberValue = (e, t) => {
      if (t instanceof KeyboardEvent && t.repeat || this.type !== "number")
        return;
      const i = this.maxString ? parseFloat(this.maxString) : null, n = this.minString ? parseFloat(this.minString) : null, a = 150;
      this.incrementOrDecrementNumberValue(e, i, n, t), this.nudgeNumberValueIntervalId && window.clearInterval(this.nudgeNumberValueIntervalId);
      let r = !0;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (r) {
          r = !1;
          return;
        }
        this.incrementOrDecrementNumberValue(e, i, n, t);
      }, a);
    }, this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }, this.numberButtonPointerDownHandler = (e) => {
      if (!pn(e))
        return;
      e.preventDefault();
      const t = e.target.dataset.adjustment;
      this.disabled || this.nudgeNumberValue(t, e);
    }, this.hiddenInputChangeHandler = (e) => {
      e.target.name === this.name && this.setValue({
        value: e.target.value,
        origin: "direct"
      }), e.stopPropagation();
    }, this.setChildElRef = (e) => {
      this.childEl = e;
    }, this.setChildNumberElRef = (e) => {
      this.childNumberEl = e;
    }, this.setInputValue = (e) => {
      this.type === "text" && !this.childEl || this.type === "number" && !this.childNumberEl || (this[`child${this.type === "number" ? "Number" : ""}El`].value = e);
    }, this.setPreviousEmittedValue = (e) => {
      this.previousEmittedValue = this.normalizeValue(e);
    }, this.setPreviousValue = (e) => {
      this.previousValue = this.normalizeValue(e);
    }, this.setValue = ({ committing: e = !1, nativeEvent: t, origin: i, previousValue: n, value: a }) => {
      var r, o;
      if (this.setPreviousValue(n ?? this.value), this.previousValueOrigin = i, this.type === "number") {
        U.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never"
        };
        const s = ((r = this.previousValue) == null ? void 0 : r.length) > a.length || ((o = this.value) == null ? void 0 : o.length) > a.length, l = a.charAt(a.length - 1) === ".", c = l && s ? a : Cn(a), h = a && !c ? ce(this.previousValue) ? this.previousValue : "" : c;
        let u = U.localize(h);
        i !== "connected" && !l && (u = Dn(u, h, U)), this.localizedValue = l && s ? `${u}${U.decimal}` : u, this.userChangedValue = i === "user" && this.value !== h, this.value = ["-", "."].includes(h) ? "" : h;
      } else
        this.userChangedValue = i === "user" && this.value !== a, this.value = a;
      i === "direct" && (this.setInputValue(a), this.previousEmittedValue = a), t && (this.calciteInputInput.emit().defaultPrevented ? (this.value = this.previousValue, this.localizedValue = this.type === "number" ? U.localize(this.previousValue) : this.previousValue) : e && this.emitChangeIfUserModified());
    }, this.inputKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }, this.alignment = "start", this.autofocus = !1, this.clearable = !1, this.disabled = !1, this.form = void 0, this.groupSeparator = !1, this.hidden = !1, this.icon = void 0, this.iconFlipRtl = !1, this.label = void 0, this.loading = !1, this.numberingSystem = void 0, this.localeFormat = !1, this.max = void 0, this.min = void 0, this.maxLength = void 0, this.minLength = void 0, this.name = void 0, this.numberButtonType = "vertical", this.placeholder = void 0, this.prefixText = void 0, this.readOnly = !1, this.required = !1, this.scale = "m", this.status = "idle", this.step = void 0, this.autocomplete = void 0, this.pattern = void 0, this.accept = void 0, this.multiple = !1, this.inputMode = "text", this.enterKeyHint = void 0, this.suffixText = void 0, this.editingEnabled = !1, this.type = "text", this.value = "", this.files = void 0, this.messages = void 0, this.messageOverrides = void 0, this.defaultMessages = void 0, this.effectiveLocale = "", this.localizedValue = void 0, this.slottedActionElDisabledInternally = !1;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var e;
    this.maxString = ((e = this.max) == null ? void 0 : e.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var e;
    this.minString = ((e = this.min) == null ? void 0 : e.toString()) || null;
  }
  onMessagesChange() {
  }
  valueWatcher(e, t) {
    this.userChangedValue || (this.setValue({
      origin: "direct",
      previousValue: t,
      value: e == null || e == "" ? "" : this.type === "number" ? ce(e) ? e : this.previousValue || "" : e
    }), this.warnAboutInvalidNumberValue(e)), this.userChangedValue = !1;
  }
  updateRequestedIcon() {
    this.requestedIcon = Kt(yi, this.icon, this.type);
  }
  get isClearable() {
    var e;
    return !this.isTextarea && (this.clearable || this.type === "search") && ((e = this.value) == null ? void 0 : e.length) > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    Ai(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var e;
    Lt(this), Li(this), Oi(this), this.inlineEditableEl = this.el.closest("calcite-inline-editable"), this.inlineEditableEl && (this.editingEnabled = this.inlineEditableEl.editingEnabled || !1), on(this), Ir(this), this.setPreviousEmittedValue(this.value), this.setPreviousValue(this.value), this.type === "number" && (this.warnAboutInvalidNumberValue(this.value), this.setValue({
      origin: "connected",
      value: ce(this.value) ? this.value : ""
    })), (e = this.mutationObserver) == null || e.observe(this.el, { childList: !0 }), this.setDisabledAction(), this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    var e;
    Ot(this), Or(this), Dr(this), _i(this), Fi(this), (e = this.mutationObserver) == null || e.disconnect(), this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    var e, t;
    Ft(this), this.childElType = this.type === "textarea" ? "textarea" : "input", this.maxString = (e = this.max) == null ? void 0 : e.toString(), this.minString = (t = this.min) == null ? void 0 : t.toString(), this.requestedIcon = Kt(yi, this.icon, this.type), await zi(this);
  }
  componentDidLoad() {
    zt(this);
  }
  componentShouldUpdate(e, t, i) {
    return this.type === "number" && i === "value" && e && !ce(e) ? (this.setValue({
      origin: "reset",
      value: t
    }), !1) : !0;
  }
  componentDidRender() {
    _t(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var e, t;
    await Pt(this), this.type === "number" ? (e = this.childNumberEl) == null || e.focus() : (t = this.childEl) == null || t.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    var e, t;
    this.type === "number" ? (e = this.childNumberEl) == null || e.select() : (t = this.childEl) == null || t.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(e, t, i, n) {
    const { value: a } = this, r = e === "up" ? 1 : -1, o = this.step === "any" ? 1 : Math.abs(this.step || 1), l = new kn(a !== "" ? a : "0").add(`${o * r}`), c = () => typeof i == "number" && !isNaN(i) && l.subtract(`${i}`).isNegative, h = () => typeof t == "number" && !isNaN(t) && !l.subtract(`${t}`).isNegative, u = c() ? `${i}` : h() ? `${t}` : l.toString();
    this.setValue({
      committing: !0,
      nativeEvent: n,
      origin: "user",
      value: u
    });
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(e) {
    var i, n;
    const { type: t } = this;
    e.type = t, t === "number" ? (e.min = ((i = this.min) == null ? void 0 : i.toString(10)) ?? "", e.max = ((n = this.max) == null ? void 0 : n.toString(10)) ?? "") : t === "text" && (this.minLength != null && (e.minLength = this.minLength), this.maxLength != null && (e.maxLength = this.maxLength));
  }
  setDisabledAction() {
    const e = Yt(this.el, "action");
    e && (this.disabled ? (e.getAttribute("disabled") == null && (this.slottedActionElDisabledInternally = !0), e.setAttribute("disabled", "")) : this.slottedActionElDisabledInternally && (e.removeAttribute("disabled"), this.slottedActionElDisabledInternally = !1));
  }
  normalizeValue(e) {
    return this.type === "number" ? ce(e) ? e : "" : e;
  }
  warnAboutInvalidNumberValue(e) {
    this.type === "number" && e && !ce(e) && console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const e = Si(this.el), t = f("div", { class: O.loader }, f("calcite-progress", { label: this.messages.loading, type: "indeterminate" })), i = f("button", { "aria-label": this.messages.clear, class: O.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, f("calcite-icon", { icon: "x", scale: Ae(this.scale) })), n = f("calcite-icon", { class: O.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: Ae(this.scale) }), a = this.numberButtonType === "horizontal", r = f("button", { "aria-hidden": "true", class: {
      [O.numberButtonItem]: !0,
      [O.buttonItemHorizontal]: a
    }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, f("calcite-icon", { icon: "chevron-up", scale: Ae(this.scale) })), o = f("button", { "aria-hidden": "true", class: {
      [O.numberButtonItem]: !0,
      [O.buttonItemHorizontal]: a
    }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, f("calcite-icon", { icon: "chevron-down", scale: Ae(this.scale) })), s = f("div", { class: O.numberButtonWrapper }, r, o), l = f("div", { class: O.prefix }, this.prefixText), c = f("div", { class: O.suffix }, this.suffixText), h = this.type === "number" ? f("input", {
      accept: this.accept,
      "aria-label": bi(this),
      autocomplete: this.autocomplete,
      autofocus: this.autofocus ? !0 : null,
      defaultValue: this.defaultValue,
      disabled: this.disabled ? !0 : null,
      enterKeyHint: this.enterKeyHint,
      inputMode: this.inputMode,
      key: "localized-input",
      maxLength: this.maxLength,
      minLength: this.minLength,
      multiple: this.multiple,
      name: void 0,
      onBlur: this.inputBlurHandler,
      onFocus: this.inputFocusHandler,
      onInput: this.inputNumberInputHandler,
      onKeyDown: this.inputNumberKeyDownHandler,
      onKeyUp: this.inputKeyUpHandler,
      pattern: this.pattern,
      placeholder: this.placeholder || "",
      readOnly: this.readOnly,
      type: "text",
      value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildNumberElRef
    }) : null, u = this.type !== "number" ? [
      f(this.childElType, {
        accept: this.accept,
        "aria-label": bi(this),
        autocomplete: this.autocomplete,
        autofocus: this.autofocus ? !0 : null,
        class: {
          [O.editingEnabled]: this.editingEnabled,
          [O.inlineChild]: !!this.inlineEditableEl
        },
        defaultValue: this.defaultValue,
        disabled: this.disabled ? !0 : null,
        enterKeyHint: this.enterKeyHint,
        inputMode: this.inputMode,
        max: this.maxString,
        maxLength: this.maxLength,
        min: this.minString,
        minLength: this.minLength,
        multiple: this.multiple,
        name: this.name,
        onBlur: this.inputBlurHandler,
        onChange: this.inputChangeHandler,
        onFocus: this.inputFocusHandler,
        onInput: this.inputInputHandler,
        onKeyDown: this.inputKeyDownHandler,
        onKeyUp: this.inputKeyUpHandler,
        pattern: this.pattern,
        placeholder: this.placeholder || "",
        readOnly: this.readOnly,
        required: this.required ? !0 : null,
        step: this.step,
        tabIndex: this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null,
        type: this.type,
        value: this.value,
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: this.setChildElRef
      }),
      this.isTextarea ? f("div", { class: O.resizeIconWrapper }, f("calcite-icon", { icon: "chevron-down", scale: Ae(this.scale) })) : null
    ] : null;
    return f(xi, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, f("div", { class: { [O.inputWrapper]: !0, [Ci.rtl]: e === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? o : null, this.prefixText ? l : null, f("div", { class: O.wrapper }, h, u, this.isClearable ? i : null, this.requestedIcon ? n : null, this.loading ? t : null), f("div", { class: O.actionWrapper }, f("slot", { name: Nr.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly ? s : null, this.suffixText ? c : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? r : null, f(Tr, { component: this })));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      disabled: ["disabledWatcher"],
      max: ["maxWatcher"],
      min: ["minWatcher"],
      messageOverrides: ["onMessagesChange"],
      value: ["valueWatcher"],
      icon: ["updateRequestedIcon"],
      type: ["updateRequestedIcon"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Hr;
  }
}, [1, "calcite-input", {
  alignment: [513],
  autofocus: [516],
  clearable: [516],
  disabled: [516],
  form: [513],
  groupSeparator: [516, "group-separator"],
  hidden: [516],
  icon: [520],
  iconFlipRtl: [516, "icon-flip-rtl"],
  label: [1],
  loading: [516],
  numberingSystem: [513, "numbering-system"],
  localeFormat: [4, "locale-format"],
  max: [514],
  min: [514],
  maxLength: [514, "max-length"],
  minLength: [514, "min-length"],
  name: [513],
  numberButtonType: [513, "number-button-type"],
  placeholder: [1],
  prefixText: [1, "prefix-text"],
  readOnly: [516, "read-only"],
  required: [516],
  scale: [513],
  status: [513],
  step: [520],
  autocomplete: [1],
  pattern: [1],
  accept: [1],
  multiple: [4],
  inputMode: [1, "input-mode"],
  enterKeyHint: [1, "enter-key-hint"],
  suffixText: [1, "suffix-text"],
  editingEnabled: [1540, "editing-enabled"],
  type: [513],
  value: [1025],
  files: [16],
  messages: [1040],
  messageOverrides: [1040],
  defaultMessages: [32],
  effectiveLocale: [32],
  localizedValue: [32],
  slottedActionElDisabledInternally: [32],
  setFocus: [64],
  selectText: [64]
}]);
function Ut() {
  if (typeof customElements > "u")
    return;
  ["calcite-input", "calcite-icon", "calcite-progress"].forEach((t) => {
    switch (t) {
      case "calcite-input":
        customElements.get(t) || customElements.define(t, Mr);
        break;
      case "calcite-icon":
        customElements.get(t) || Mt();
        break;
      case "calcite-progress":
        customElements.get(t) || ut();
        break;
    }
  });
}
Ut();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const Vr = {
  container: "container",
  searchIcon: "search-icon"
}, Br = {
  search: "search",
  close: "x"
}, jr = 250, Rr = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}", Wr = /* @__PURE__ */ Re(class extends We {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFilterChange = Z(this, "calciteFilterChange", 6), this.filterDebounced = Ti((e, t = !1, i) => this.updateFiltered(fi(this.items, e), t, i), jr), this.inputHandler = (e) => {
      const t = e.target;
      this.value = t.value, this.filterDebounced(t.value, !0);
    }, this.keyDownHandler = (e) => {
      e.key === "Escape" && (this.clear(), e.preventDefault()), e.key === "Enter" && e.preventDefault();
    }, this.clear = () => {
      this.value = "", this.filterDebounced("", !0), this.setFocus();
    }, this.items = [], this.disabled = !1, this.filteredItems = [], this.placeholder = void 0, this.scale = "m", this.value = "", this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  watchItemsHandler() {
    this.filterDebounced(this.value);
  }
  onMessagesChange() {
  }
  valueHandler(e) {
    this.filterDebounced(e);
  }
  effectiveLocaleChange() {
    Ai(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    Ft(this), this.updateFiltered(fi(this.items, this.value)), await zi(this);
  }
  connectedCallback() {
    Lt(this), Li(this), Oi(this);
  }
  componentDidRender() {
    _t(this);
  }
  disconnectedCallback() {
    Ot(this), _i(this), Fi(this), this.filterDebounced.cancel();
  }
  componentDidLoad() {
    zt(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(e = this.value) {
    return new Promise((t) => {
      this.value = e, this.filterDebounced(e, !1, t);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    var e;
    await Pt(this), (e = this.el) == null || e.focus();
  }
  updateFiltered(e, t = !1, i) {
    this.filteredItems = e, t && this.calciteFilterChange.emit(), i == null || i();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled: e, scale: t } = this;
    return f(mn, null, f("div", { class: Vr.container }, f("label", null, f("calcite-input", {
      clearable: !0,
      disabled: e,
      icon: Br.search,
      label: this.messages.label,
      messageOverrides: { clear: this.messages.clear },
      onCalciteInputInput: this.inputHandler,
      onKeyDown: this.keyDownHandler,
      placeholder: this.placeholder,
      scale: t,
      type: "text",
      value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (i) => {
        this.textInput = i;
      }
    }))));
  }
  static get delegatesFocus() {
    return !0;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      items: ["watchItemsHandler"],
      messageOverrides: ["onMessagesChange"],
      value: ["valueHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Rr;
  }
}, [17, "calcite-filter", {
  items: [16],
  disabled: [516],
  filteredItems: [1040],
  placeholder: [1],
  scale: [513],
  value: [1025],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  filter: [64],
  setFocus: [64]
}]);
function ln() {
  if (typeof customElements > "u")
    return;
  ["calcite-filter", "calcite-icon", "calcite-input", "calcite-progress"].forEach((t) => {
    switch (t) {
      case "calcite-filter":
        customElements.get(t) || customElements.define(t, Wr);
        break;
      case "calcite-icon":
        customElements.get(t) || Mt();
        break;
      case "calcite-input":
        customElements.get(t) || Ut();
        break;
      case "calcite-progress":
        customElements.get(t) || ut();
        break;
    }
  });
}
ln();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const he = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text"
}, $r = 0, Ei = {
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end"
}, Ur = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:first-of-type){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item[data-filter]){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky);background-color:var(--calcite-ui-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}", wi = "calcite-list-item", Xr = ":scope > calcite-list-item", Yr = "calcite-list-item-group, calcite-list-item", cn = /* @__PURE__ */ Re(class extends We {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteListChange = Z(this, "calciteListChange", 6), this.calciteListFilter = Z(this, "calciteListFilter", 6), this.calciteListOrderChange = Z(this, "calciteListOrderChange", 6), this.calciteInternalListDefaultSlotChange = Z(this, "calciteInternalListDefaultSlotChange", 6), this.dragSelector = "calcite-list-item", this.enabledListItems = [], this.handleSelector = "calcite-handle", this.listItems = [], this.mutationObserver = Di("mutation", () => this.updateListItems()), this.handleDefaultSlotChange = (e) => {
      vn(yn(e.target)), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
    }, this.handleFilterActionsStartSlotChange = (e) => {
      this.hasFilterActionsStart = ve(e);
    }, this.handleFilterActionsEndSlotChange = (e) => {
      this.hasFilterActionsEnd = ve(e);
    }, this.setActiveListItem = () => {
      const { enabledListItems: e } = this;
      e.some((t) => t.active) || e[0] && (e[0].active = !0);
    }, this.updateSelectedItems = (e = !1) => {
      this.selectedItems = this.enabledListItems.filter((t) => t.selected), e && this.calciteListChange.emit();
    }, this.updateFilteredItems = (e = !1) => {
      const { listItems: t, filteredData: i, filterText: n } = this, a = i.map((l) => l.value), r = t == null ? void 0 : t.filter((l) => t.every((c) => c === l || !l.contains(c))), o = t.filter((l) => !n || a.includes(l.value)) || [], s = /* @__PURE__ */ new WeakSet();
      r.forEach((l) => this.filterElements({ el: l, filteredItems: o, visibleParents: s })), o.length > 0 && this.findAncestorOfFirstFilteredItem(o), this.filteredItems = o, e && this.calciteListFilter.emit();
    }, this.setFilterEl = (e) => {
      this.filterEl = e, this.performFilter();
    }, this.handleFilterChange = (e) => {
      e.stopPropagation();
      const { value: t } = e.currentTarget;
      this.filterText = t, this.updateFilteredData(!0);
    }, this.getItemData = () => this.listItems.map((e) => ({
      label: e.label,
      description: e.description,
      metadata: e.metadata,
      value: e.value
    })), this.updateListItems = Ti((e = !1) => {
      const { selectionAppearance: t, selectionMode: i, dragEnabled: n } = this;
      if (this.parentListEl) {
        this.queryListItems(!0).forEach((s) => {
          s.dragHandle = n;
        }), this.setUpSorting();
        return;
      }
      const a = this.queryListItems();
      a.forEach((o) => {
        o.selectionAppearance = t, o.selectionMode = i;
      }), this.queryListItems(!0).forEach((o) => {
        o.dragHandle = n;
      }), this.listItems = a, this.filterEnabled && (this.dataForFilter = this.getItemData(), this.filterEl && (this.filterEl.items = this.dataForFilter)), this.updateFilteredItems(e), this.enabledListItems = this.filteredItems.filter((o) => !o.disabled && !o.closed), this.setActiveListItem(), this.updateSelectedItems(e), this.setUpSorting();
    }, $r), this.queryListItems = (e = !1) => Array.from(this.el.querySelectorAll(e ? Xr : wi)), this.focusRow = (e) => {
      const { enabledListItems: t } = this;
      e && (t.forEach((i) => i.active = i === e), e.setFocus());
    }, this.isNavigable = (e) => {
      var i;
      const t = (i = e.parentElement) == null ? void 0 : i.closest(wi);
      return t ? t.open && this.isNavigable(t) : !0;
    }, this.handleListKeydown = (e) => {
      var a;
      if (e.defaultPrevented || this.parentListEl)
        return;
      const { key: t } = e, i = this.enabledListItems.filter((r) => this.isNavigable(r)), n = i.findIndex((r) => r.active);
      if (t === "ArrowDown") {
        e.preventDefault();
        const r = e.target === this.filterEl ? 0 : n + 1;
        i[r] && this.focusRow(i[r]);
      } else if (t === "ArrowUp") {
        if (e.preventDefault(), n === 0 && this.filterEnabled) {
          (a = this.filterEl) == null || a.setFocus();
          return;
        }
        const r = n - 1;
        i[r] && this.focusRow(i[r]);
      } else if (t === "Home") {
        e.preventDefault();
        const r = i[0];
        r && this.focusRow(r);
      } else if (t === "End") {
        e.preventDefault();
        const r = i[i.length - 1];
        r && this.focusRow(r);
      }
    }, this.findAncestorOfFirstFilteredItem = (e) => {
      var t, i;
      (t = this.ancestorOfFirstFilteredItem) == null || t.removeAttribute("data-filter"), e.forEach((n) => {
        n.removeAttribute("data-filter");
      }), this.ancestorOfFirstFilteredItem = this.getTopLevelAncestorItemElement(e[0]), e[0].setAttribute("data-filter", "0"), (i = this.ancestorOfFirstFilteredItem) == null || i.setAttribute("data-filter", "0");
    }, this.getTopLevelAncestorItemElement = (e) => {
      let t = e.parentElement.closest("calcite-list-item");
      for (; t; ) {
        const i = t.parentElement.closest("calcite-list-item");
        if (i)
          t = i;
        else
          return t;
      }
      return null;
    }, this.disabled = !1, this.canPull = void 0, this.canPut = void 0, this.dragEnabled = !1, this.group = void 0, this.filterEnabled = !1, this.filteredItems = [], this.filteredData = [], this.filterPlaceholder = void 0, this.filterText = void 0, this.label = void 0, this.loading = !1, this.openable = !1, this.selectedItems = [], this.selectionMode = "none", this.selectionAppearance = "icon", this.assistiveText = void 0, this.dataForFilter = [], this.hasFilterActionsEnd = !1, this.hasFilterActionsStart = !1;
  }
  async handleFilterTextChange() {
    this.performFilter();
  }
  handleListItemChange() {
    this.updateListItems();
  }
  handleCalciteInternalFocusPreviousItem(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const { enabledListItems: t } = this, n = t.findIndex((a) => a.active) - 1;
    t[n] && this.focusRow(t[n]);
  }
  handleCalciteInternalListItemActive(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const t = e.target, { listItems: i } = this;
    i.forEach((n) => {
      n.active = n === t;
    });
  }
  handleCalciteListItemSelect() {
    this.parentListEl || this.updateSelectedItems(!0);
  }
  handleCalciteInternalHandleChange(e) {
    this.assistiveText = e.detail.message, e.stopPropagation();
  }
  handleCalciteHandleNudge(e) {
    this.parentListEl || this.handleNudgeEvent(e);
  }
  handleCalciteInternalListItemSelect(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const t = e.target, { listItems: i, selectionMode: n } = this;
    t.selected && (n === "single" || n === "single-persist") && i.forEach((a) => a.selected = a === t), this.updateSelectedItems();
  }
  handleCalciteInternalListItemChange(e) {
    this.parentListEl || (e.stopPropagation(), this.updateListItems());
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(e) {
    e.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    ri(this) || (this.connectObserver(), this.updateListItems(), this.setUpSorting(), Lt(this), this.setParentList());
  }
  disconnectedCallback() {
    ri(this) || (this.disconnectObserver(), Ki(this), Ot(this));
  }
  componentWillLoad() {
    Ft(this);
  }
  componentDidRender() {
    _t(this);
  }
  componentDidLoad() {
    zt(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    var e, t;
    return await Pt(this), this.filterEnabled ? (e = this.filterEl) == null ? void 0 : e.setFocus() : (t = this.enabledListItems.find((i) => i.active)) == null ? void 0 : t.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading: e, label: t, disabled: i, dataForFilter: n, filterEnabled: a, filterPlaceholder: r, filterText: o, hasFilterActionsStart: s, hasFilterActionsEnd: l } = this;
    return f("div", { class: he.container }, this.dragEnabled ? f("span", { "aria-live": "assertive", class: he.assistiveText }, this.assistiveText) : null, e ? f("calcite-scrim", { class: he.scrim, loading: e }) : null, f("table", { "aria-busy": gn(e), "aria-label": t || "", class: he.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, a || s || l ? f("thead", null, f("tr", { class: { [he.sticky]: !0 } }, f("th", { colSpan: En }, f("calcite-stack", { class: he.stack }, f("slot", { name: Ei.filterActionsStart, onSlotchange: this.handleFilterActionsStartSlotChange, slot: Ee.actionsStart }), f("calcite-filter", {
      "aria-label": r,
      disabled: e || i,
      items: n,
      onCalciteFilterChange: this.handleFilterChange,
      placeholder: r,
      value: o,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFilterEl
    }), f("slot", { name: Ei.filterActionsEnd, onSlotchange: this.handleFilterActionsEndSlotChange, slot: Ee.actionsEnd }))))) : null, f("tbody", { class: he.tableContainer }, f("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  connectObserver() {
    var e;
    (e = this.mutationObserver) == null || e.observe(this.el, { childList: !0, subtree: !0 });
  }
  disconnectObserver() {
    var e;
    (e = this.mutationObserver) == null || e.disconnect();
  }
  setUpSorting() {
    const { dragEnabled: e } = this;
    e && na(this);
  }
  onDragStart() {
    this.disconnectObserver();
  }
  onDragEnd() {
    this.connectObserver();
  }
  onDragSort(e) {
    this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(e);
  }
  setParentList() {
    var e;
    this.parentListEl = (e = this.el.parentElement) == null ? void 0 : e.closest("calcite-list");
  }
  filterElements({ el: e, filteredItems: t, visibleParents: i }) {
    const n = !i.has(e) && !t.includes(e);
    e.hidden = n;
    const a = e.parentElement.closest(Yr);
    a && (n || i.add(a), this.filterElements({
      el: a,
      filteredItems: t,
      visibleParents: i
    }));
  }
  updateFilteredData(e = !1) {
    const { filterEl: t } = this;
    t && (t.filteredItems && (this.filteredData = t.filteredItems), this.updateListItems(e));
  }
  async performFilter() {
    const { filterEl: e, filterText: t } = this;
    e && (e.value = t, await e.filter(t), this.updateFilteredData());
  }
  handleNudgeEvent(e) {
    const { direction: t } = e.detail, i = e.composedPath(), n = i.find((p) => p.tagName === "CALCITE-HANDLE"), a = i.find((p) => p.tagName === "CALCITE-LIST-ITEM"), r = a == null ? void 0 : a.parentElement;
    if (!r)
      return;
    const { enabledListItems: o } = this, s = o.filter((p) => p.parentElement === r), l = s.length - 1, c = s.indexOf(a);
    let h = !1, u;
    t === "up" ? c === 0 ? (h = !0, u = l) : u = c - 1 : c === l ? u = 0 : c === l - 1 ? (h = !0, u = l) : u = c + 2, this.disconnectObserver(), h ? r.appendChild(a) : r.insertBefore(a, s[u]), this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: a,
      fromEl: r,
      toEl: r,
      newIndex: u,
      oldIndex: c
    }), n.setFocus().then(() => {
      n.activated = !0;
    });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      filterText: ["handleFilterTextChange"],
      filterEnabled: ["handleListItemChange"],
      group: ["handleListItemChange"],
      dragEnabled: ["handleListItemChange"],
      selectionMode: ["handleListItemChange"],
      selectionAppearance: ["handleListItemChange"]
    };
  }
  static get style() {
    return Ur;
  }
}, [1, "calcite-list", {
  disabled: [516],
  canPull: [16],
  canPut: [16],
  dragEnabled: [516, "drag-enabled"],
  group: [513],
  filterEnabled: [516, "filter-enabled"],
  filteredItems: [1040],
  filteredData: [1040],
  filterPlaceholder: [513, "filter-placeholder"],
  filterText: [1537, "filter-text"],
  label: [1],
  loading: [516],
  openable: [4],
  selectedItems: [1040],
  selectionMode: [513, "selection-mode"],
  selectionAppearance: [513, "selection-appearance"],
  assistiveText: [32],
  dataForFilter: [32],
  hasFilterActionsEnd: [32],
  hasFilterActionsStart: [32],
  setFocus: [64]
}, [[0, "calciteInternalFocusPreviousItem", "handleCalciteInternalFocusPreviousItem"], [0, "calciteInternalListItemActive", "handleCalciteInternalListItemActive"], [0, "calciteListItemSelect", "handleCalciteListItemSelect"], [0, "calciteInternalHandleChange", "handleCalciteInternalHandleChange"], [0, "calciteHandleNudge", "handleCalciteHandleNudge"], [0, "calciteInternalListItemSelect", "handleCalciteInternalListItemSelect"], [0, "calciteInternalListItemChange", "handleCalciteInternalListItemChange"], [0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListItemGroupDefaultSlotChange"]]]);
function un() {
  if (typeof customElements > "u")
    return;
  ["calcite-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim", "calcite-stack"].forEach((t) => {
    switch (t) {
      case "calcite-list":
        customElements.get(t) || customElements.define(t, cn);
        break;
      case "calcite-filter":
        customElements.get(t) || ln();
        break;
      case "calcite-icon":
        customElements.get(t) || Mt();
        break;
      case "calcite-input":
        customElements.get(t) || Ut();
        break;
      case "calcite-loader":
        customElements.get(t) || bn();
        break;
      case "calcite-progress":
        customElements.get(t) || ut();
        break;
      case "calcite-scrim":
        customElements.get(t) || An();
        break;
      case "calcite-stack":
        customElements.get(t) || Gi();
        break;
    }
  });
}
un();
const oo = cn, so = un;
export {
  oo as CalciteList,
  so as defineCustomElement
};
