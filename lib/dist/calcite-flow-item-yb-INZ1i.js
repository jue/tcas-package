import { ib as Re, ic as et, id as ie, ie as tt, ig as nt, ih as O, ii as R, dd as c, da as _, db as G, dk as x, de as K, dc as it, ij as ze, dl as at, df as Ne, dm as se, ik as Ke, fo as I, il as ot, dg as st } from "./index-HxXrdrYt.js";
import { d as W, c as $e, u as Ue, a as je } from "./loader-2TAT4OzE.js";
import { s as q, a as Y, c as V } from "./loadable-Op9Lnlao.js";
import { u as ce, c as le, a as de, s as ue, d as he, b as fe, g as rt, i as _e } from "./component-hgzGHHEU.js";
import { c as Ge } from "./observers-irFNFMFU.js";
import { g as We } from "./guid-mHDePIZO.js";
import { d as X } from "./action-E3f8npws.js";
import { d as J } from "./icon-zt2fyVc5.js";
import { f as ct, c as lt, d as dt, a as ut, r as ht, b as ft, F as Ce } from "./FloatingArrow-9d_dbM4m.js";
import { o as xe } from "./openCloseComponent-wkUwucrg.js";
import { d as qe } from "./scrim-3215PeYp.js";
import "vue";
import "./debounce-N1nXnarg.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function Fe(t, e) {
  return (t + e) % e;
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Ae(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Pe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ae(Object(n), !0).forEach(function(o) {
      pt(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function pt(t, e, n) {
  return e = bt(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function mt(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function bt(t) {
  var e = mt(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Be = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var o = e[e.length - 1];
      o !== n && o.pause();
    }
    var r = e.indexOf(n);
    r === -1 || e.splice(r, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var o = e.indexOf(n);
    o !== -1 && e.splice(o, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, vt = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, gt = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, N = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, Et = function(e) {
  return N(e) && !e.shiftKey;
}, yt = function(e) {
  return N(e) && e.shiftKey;
}, Te = function(e) {
  return setTimeout(e, 0);
}, Se = function(e, n) {
  var o = -1;
  return e.every(function(r, d) {
    return n(r) ? (o = d, !1) : !0;
  }), o;
}, z = function(e) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    o[r - 1] = arguments[r];
  return typeof e == "function" ? e.apply(void 0, o) : e;
}, U = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, wt = [], kt = function(e, n) {
  var o = (n == null ? void 0 : n.document) || document, r = (n == null ? void 0 : n.trapStack) || wt, d = Pe({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Et,
    isKeyBackward: yt
  }, n), s = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, f, p = function(a, i, l) {
    return a && a[i] !== void 0 ? a[i] : d[l || i];
  }, g = function(a, i) {
    var l = typeof (i == null ? void 0 : i.composedPath) == "function" ? i.composedPath() : void 0;
    return s.containerGroups.findIndex(function(u) {
      var h = u.container, b = u.tabbableNodes;
      return h.contains(a) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (l == null ? void 0 : l.includes(h)) || b.find(function(v) {
        return v === a;
      });
    });
  }, C = function(a) {
    var i = d[a];
    if (typeof i == "function") {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
        u[h - 1] = arguments[h];
      i = i.apply(void 0, u);
    }
    if (i === !0 && (i = void 0), !i) {
      if (i === void 0 || i === !1)
        return i;
      throw new Error("`".concat(a, "` was specified but was not a node, or did not return a node"));
    }
    var b = i;
    if (typeof i == "string" && (b = o.querySelector(i), !b))
      throw new Error("`".concat(a, "` as selector refers to no known node"));
    return b;
  }, F = function() {
    var a = C("initialFocus");
    if (a === !1)
      return !1;
    if (a === void 0 || !ie(a, d.tabbableOptions))
      if (g(o.activeElement) >= 0)
        a = o.activeElement;
      else {
        var i = s.tabbableGroups[0], l = i && i.firstTabbableNode;
        a = l || C("fallbackFocus");
      }
    if (!a)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return a;
  }, B = function() {
    if (s.containerGroups = s.containers.map(function(a) {
      var i = tt(a, d.tabbableOptions), l = nt(a, d.tabbableOptions), u = i.length > 0 ? i[0] : void 0, h = i.length > 0 ? i[i.length - 1] : void 0, b = l.find(function(E) {
        return O(E);
      }), v = l.slice().reverse().find(function(E) {
        return O(E);
      }), k = !!i.find(function(E) {
        return R(E) > 0;
      });
      return {
        container: a,
        tabbableNodes: i,
        focusableNodes: l,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: k,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: u,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: h,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: b,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: v,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(D) {
          var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, T = i.indexOf(D);
          return T < 0 ? L ? l.slice(l.indexOf(D) + 1).find(function(M) {
            return O(M);
          }) : l.slice(0, l.indexOf(D)).reverse().find(function(M) {
            return O(M);
          }) : i[T + (L ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(a) {
      return a.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !C("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(a) {
      return a.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, Z = function m(a) {
    var i = a.activeElement;
    if (i)
      return i.shadowRoot && i.shadowRoot.activeElement !== null ? m(i.shadowRoot) : i;
  }, A = function m(a) {
    if (a !== !1 && a !== Z(document)) {
      if (!a || !a.focus) {
        m(F());
        return;
      }
      a.focus({
        preventScroll: !!d.preventScroll
      }), s.mostRecentlyFocusedNode = a, vt(a) && a.select();
    }
  }, me = function(a) {
    var i = C("setReturnFocus", a);
    return i || (i === !1 ? !1 : a);
  }, be = function(a) {
    var i = a.target, l = a.event, u = a.isBackward, h = u === void 0 ? !1 : u;
    i = i || U(l), B();
    var b = null;
    if (s.tabbableGroups.length > 0) {
      var v = g(i, l), k = v >= 0 ? s.containerGroups[v] : void 0;
      if (v < 0)
        h ? b = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : b = s.tabbableGroups[0].firstTabbableNode;
      else if (h) {
        var E = Se(s.tabbableGroups, function(te) {
          var ne = te.firstTabbableNode;
          return i === ne;
        });
        if (E < 0 && (k.container === i || ie(i, d.tabbableOptions) && !O(i, d.tabbableOptions) && !k.nextTabbableNode(i, !1)) && (E = v), E >= 0) {
          var D = E === 0 ? s.tabbableGroups.length - 1 : E - 1, L = s.tabbableGroups[D];
          b = R(i) >= 0 ? L.lastTabbableNode : L.lastDomTabbableNode;
        } else
          N(l) || (b = k.nextTabbableNode(i, !1));
      } else {
        var T = Se(s.tabbableGroups, function(te) {
          var ne = te.lastTabbableNode;
          return i === ne;
        });
        if (T < 0 && (k.container === i || ie(i, d.tabbableOptions) && !O(i, d.tabbableOptions) && !k.nextTabbableNode(i)) && (T = v), T >= 0) {
          var M = T === s.tabbableGroups.length - 1 ? 0 : T + 1, ke = s.tabbableGroups[M];
          b = R(i) >= 0 ? ke.firstTabbableNode : ke.firstDomTabbableNode;
        } else
          N(l) || (b = k.nextTabbableNode(i));
      }
    } else
      b = C("fallbackFocus");
    return b;
  }, $ = function(a) {
    var i = U(a);
    if (!(g(i, a) >= 0)) {
      if (z(d.clickOutsideDeactivates, a)) {
        f.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: d.returnFocusOnDeactivate
        });
        return;
      }
      z(d.allowOutsideClick, a) || a.preventDefault();
    }
  }, ve = function(a) {
    var i = U(a), l = g(i, a) >= 0;
    if (l || i instanceof Document)
      l && (s.mostRecentlyFocusedNode = i);
    else {
      a.stopImmediatePropagation();
      var u, h = !0;
      if (s.mostRecentlyFocusedNode)
        if (R(s.mostRecentlyFocusedNode) > 0) {
          var b = g(s.mostRecentlyFocusedNode), v = s.containerGroups[b].tabbableNodes;
          if (v.length > 0) {
            var k = v.findIndex(function(E) {
              return E === s.mostRecentlyFocusedNode;
            });
            k >= 0 && (d.isKeyForward(s.recentNavEvent) ? k + 1 < v.length && (u = v[k + 1], h = !1) : k - 1 >= 0 && (u = v[k - 1], h = !1));
          }
        } else
          s.containerGroups.some(function(E) {
            return E.tabbableNodes.some(function(D) {
              return R(D) > 0;
            });
          }) || (h = !1);
      else
        h = !1;
      h && (u = be({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: d.isKeyBackward(s.recentNavEvent)
      })), A(u || s.mostRecentlyFocusedNode || F());
    }
    s.recentNavEvent = void 0;
  }, Qe = function(a) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = a;
    var l = be({
      event: a,
      isBackward: i
    });
    l && (N(a) && a.preventDefault(), A(l));
  }, ge = function(a) {
    if (gt(a) && z(d.escapeDeactivates, a) !== !1) {
      a.preventDefault(), f.deactivate();
      return;
    }
    (d.isKeyForward(a) || d.isKeyBackward(a)) && Qe(a, d.isKeyBackward(a));
  }, Ee = function(a) {
    var i = U(a);
    g(i, a) >= 0 || z(d.clickOutsideDeactivates, a) || z(d.allowOutsideClick, a) || (a.preventDefault(), a.stopImmediatePropagation());
  }, ye = function() {
    if (s.active)
      return Be.activateTrap(r, f), s.delayInitialFocusTimer = d.delayInitialFocus ? Te(function() {
        A(F());
      }) : A(F()), o.addEventListener("focusin", ve, !0), o.addEventListener("mousedown", $, {
        capture: !0,
        passive: !1
      }), o.addEventListener("touchstart", $, {
        capture: !0,
        passive: !1
      }), o.addEventListener("click", Ee, {
        capture: !0,
        passive: !1
      }), o.addEventListener("keydown", ge, {
        capture: !0,
        passive: !1
      }), f;
  }, we = function() {
    if (s.active)
      return o.removeEventListener("focusin", ve, !0), o.removeEventListener("mousedown", $, !0), o.removeEventListener("touchstart", $, !0), o.removeEventListener("click", Ee, !0), o.removeEventListener("keydown", ge, !0), f;
  }, Ze = function(a) {
    var i = a.some(function(l) {
      var u = Array.from(l.removedNodes);
      return u.some(function(h) {
        return h === s.mostRecentlyFocusedNode;
      });
    });
    i && A(F());
  }, ee = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Ze) : void 0, H = function() {
    ee && (ee.disconnect(), s.active && !s.paused && s.containers.map(function(a) {
      ee.observe(a, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return f = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(a) {
      if (s.active)
        return this;
      var i = p(a, "onActivate"), l = p(a, "onPostActivate"), u = p(a, "checkCanFocusTrap");
      u || B(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = o.activeElement, i == null || i();
      var h = function() {
        u && B(), ye(), H(), l == null || l();
      };
      return u ? (u(s.containers.concat()).then(h, h), this) : (h(), this);
    },
    deactivate: function(a) {
      if (!s.active)
        return this;
      var i = Pe({
        onDeactivate: d.onDeactivate,
        onPostDeactivate: d.onPostDeactivate,
        checkCanReturnFocus: d.checkCanReturnFocus
      }, a);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, we(), s.active = !1, s.paused = !1, H(), Be.deactivateTrap(r, f);
      var l = p(i, "onDeactivate"), u = p(i, "onPostDeactivate"), h = p(i, "checkCanReturnFocus"), b = p(i, "returnFocus", "returnFocusOnDeactivate");
      l == null || l();
      var v = function() {
        Te(function() {
          b && A(me(s.nodeFocusedBeforeActivation)), u == null || u();
        });
      };
      return b && h ? (h(me(s.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
    },
    pause: function(a) {
      if (s.paused || !s.active)
        return this;
      var i = p(a, "onPause"), l = p(a, "onPostPause");
      return s.paused = !0, i == null || i(), we(), H(), l == null || l(), this;
    },
    unpause: function(a) {
      if (!s.paused || !s.active)
        return this;
      var i = p(a, "onUnpause"), l = p(a, "onPostUnpause");
      return s.paused = !1, i == null || i(), B(), ye(), H(), l == null || l(), this;
    },
    updateContainerElements: function(a) {
      var i = [].concat(a).filter(Boolean);
      return s.containers = i.map(function(l) {
        return typeof l == "string" ? o.querySelector(l) : l;
      }), s.active && B(), H(), this;
    }
  }, f.updateContainerElements(e), f;
};
const ae = globalThis.calciteConfig, Ct = (ae == null ? void 0 : ae.focusTrapStack) || [];
function xt(t, e) {
  const { el: n } = t, o = (e == null ? void 0 : e.focusTrapEl) || n;
  if (!o)
    return;
  const r = {
    clickOutsideDeactivates: !0,
    escapeDeactivates: !1,
    fallbackFocus: o,
    setReturnFocus: (d) => (Re(d), !1),
    ...e == null ? void 0 : e.focusTrapOptions,
    // the following options are not overridable
    document: n.ownerDocument,
    tabbableOptions: et,
    trapStack: Ct
  };
  t.focusTrap = kt(o, r);
}
function De(t, e) {
  var n;
  t.focusTrapDisabled || (n = t.focusTrap) == null || n.activate(e);
}
function oe(t, e) {
  var n;
  (n = t.focusTrap) == null || n.deactivate(e);
}
function Ft(t) {
  var e;
  (e = t.focusTrap) == null || e.updateContainerElements(t.el);
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const Ye = (t, e) => {
  const n = t.level ? `h${t.level}` : "div";
  return delete t.level, c(n, { ...t }, e);
};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const P = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading"
}, At = "auto", Ie = "aria-controls", Oe = "aria-expanded";
class Pt {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map(), this.registeredElementCount = 0, this.queryPopover = (e) => {
      const { registeredElements: n } = this, o = e.find((r) => n.has(r));
      return n.get(o);
    }, this.togglePopovers = (e) => {
      const n = e.composedPath(), o = this.queryPopover(n);
      o && !o.triggerDisabled && (o.open = !o.open), Array.from(this.registeredElements.values()).filter((r) => r !== o && r.autoClose && r.open && !n.includes(r)).forEach((r) => r.open = !1);
    }, this.keyHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" ? this.closeAllPopovers() : _e(e.key) && this.togglePopovers(e));
    }, this.clickHandler = (e) => {
      se(e) && this.togglePopovers(e);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, n) {
    this.registeredElementCount++, this.registeredElements.set(e, n), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => e.open = !1);
  }
  addListeners() {
    document.addEventListener("pointerdown", this.clickHandler, { capture: !0 }), document.addEventListener("keydown", this.keyHandler, { capture: !0 });
  }
  removeListeners() {
    document.removeEventListener("pointerdown", this.clickHandler, { capture: !0 }), document.removeEventListener("keydown", this.keyHandler, { capture: !0 });
  }
}
const Bt = ":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}", He = new Pt(), Tt = /* @__PURE__ */ _(class extends G {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePopoverBeforeClose = x(this, "calcitePopoverBeforeClose", 6), this.calcitePopoverClose = x(this, "calcitePopoverClose", 6), this.calcitePopoverBeforeOpen = x(this, "calcitePopoverBeforeOpen", 6), this.calcitePopoverOpen = x(this, "calcitePopoverOpen", 6), this.mutationObserver = Ge("mutation", () => this.updateFocusTrapElements()), this.guid = `calcite-popover-${We()}`, this.openTransitionProp = "opacity", this.hasLoaded = !1, this.setTransitionEl = (t) => {
      this.transitionEl = t;
    }, this.setFilteredPlacements = () => {
      const { el: t, flipPlacements: e } = this;
      this.filteredFlipPlacements = e ? ct(e, t) : null;
    }, this.setUpReferenceElement = (t = !0) => {
      this.removeReferences(), this.effectiveReferenceElement = this.getReferenceElement(), lt(this, this.effectiveReferenceElement, this.el);
      const { el: e, referenceElement: n, effectiveReferenceElement: o } = this;
      t && n && !o && console.warn(`${e.tagName}: reference-element id "${n}" was not found.`, {
        el: e
      }), this.addReferences();
    }, this.getId = () => this.el.id || this.guid, this.setExpandedAttr = () => {
      const { effectiveReferenceElement: t, open: e } = this;
      t && "setAttribute" in t && t.setAttribute(Oe, K(e));
    }, this.addReferences = () => {
      const { effectiveReferenceElement: t } = this;
      if (!t)
        return;
      const e = this.getId();
      "setAttribute" in t && t.setAttribute(Ie, e), He.registerElement(t, this.el), this.setExpandedAttr();
    }, this.removeReferences = () => {
      const { effectiveReferenceElement: t } = this;
      t && ("removeAttribute" in t && (t.removeAttribute(Ie), t.removeAttribute(Oe)), He.unregisterElement(t));
    }, this.hide = () => {
      this.open = !1;
    }, this.storeArrowEl = (t) => {
      this.arrowEl = t, this.reposition(!0);
    }, this.autoClose = !1, this.closable = !1, this.flipDisabled = !1, this.focusTrapDisabled = !1, this.pointerDisabled = !1, this.flipPlacements = void 0, this.heading = void 0, this.headingLevel = void 0, this.label = void 0, this.messageOverrides = void 0, this.messages = void 0, this.offsetDistance = dt, this.offsetSkidding = 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = At, this.referenceElement = void 0, this.scale = "m", this.triggerDisabled = !1, this.effectiveLocale = "", this.floatingLayout = "vertical", this.effectiveReferenceElement = void 0, this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(t) {
    this.open && (t ? oe(this) : De(this));
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  onMessagesChange() {
  }
  offsetDistanceOffsetHandler() {
    this.reposition(!0);
  }
  offsetSkiddingHandler() {
    this.reposition(!0);
  }
  openHandler(t) {
    xe(this), t && this.reposition(!0), this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(!0);
  }
  placementHandler() {
    this.reposition(!0);
  }
  referenceElementHandler() {
    this.setUpReferenceElement(), this.reposition(!0);
  }
  effectiveLocaleChange() {
    ce(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements(), le(this), de(this), this.setUpReferenceElement(this.hasLoaded), xt(this), this.open && xe(this);
  }
  async componentWillLoad() {
    await ue(this), q(this);
  }
  componentDidLoad() {
    Y(this), this.referenceElement && !this.effectiveReferenceElement && this.setUpReferenceElement(), this.reposition(), this.hasLoaded = !0;
  }
  disconnectedCallback() {
    this.removeReferences(), he(this), fe(this), ut(this, this.effectiveReferenceElement, this.el), oe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(t = !1) {
    const { el: e, effectiveReferenceElement: n, placement: o, overlayPositioning: r, flipDisabled: d, filteredFlipPlacements: s, offsetDistance: f, offsetSkidding: p, arrowEl: g } = this;
    return ht(this, {
      floatingEl: e,
      referenceEl: n,
      overlayPositioning: r,
      placement: o,
      flipDisabled: d,
      flipPlacements: s,
      offsetDistance: f,
      offsetSkidding: p,
      arrowEl: g,
      type: "popover"
    }, t);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await V(this), it(this.el), ze(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    Ft(this);
  }
  getReferenceElement() {
    const { referenceElement: t, el: e } = this;
    return (typeof t == "string" ? at(e, { id: t }) : t) || null;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit(), De(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit(), oe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages: t, closable: e } = this;
    return e ? c("div", { class: P.closeButtonContainer, key: P.closeButtonContainer }, c("calcite-action", {
      appearance: "transparent",
      class: P.closeButton,
      onClick: this.hide,
      scale: this.scale,
      text: t.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (n) => this.closeButtonEl = n
    }, c("calcite-icon", { icon: "x", scale: rt(this.scale) }))) : null;
  }
  renderHeader() {
    const { heading: t, headingLevel: e } = this, n = t ? c(Ye, { class: P.heading, level: e }, t) : null;
    return n ? c("div", { class: P.header, key: P.header }, n, this.renderCloseButton()) : null;
  }
  render() {
    const { effectiveReferenceElement: t, heading: e, label: n, open: o, pointerDisabled: r, floatingLayout: d } = this, s = t && o, f = !s, p = r ? null : c(ft, {
      floatingLayout: d,
      key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeArrowEl
    });
    return c(Ne, { "aria-hidden": K(f), "aria-label": n, "aria-live": "polite", "calcite-hydrated-hidden": f, id: this.getId(), role: "dialog" }, c("div", {
      class: {
        [Ce.animation]: !0,
        [Ce.animationActive]: s
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl
    }, p, c("div", { class: {
      [P.hasHeader]: !!e,
      [P.container]: !0
    } }, this.renderHeader(), c("div", { class: P.content }, c("slot", null)), e ? null : this.renderCloseButton())));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      focusTrapDisabled: ["handleFocusTrapDisabled"],
      flipPlacements: ["flipPlacementsHandler"],
      messageOverrides: ["onMessagesChange"],
      offsetDistance: ["offsetDistanceOffsetHandler"],
      offsetSkidding: ["offsetSkiddingHandler"],
      open: ["openHandler"],
      overlayPositioning: ["overlayPositioningHandler"],
      placement: ["placementHandler"],
      referenceElement: ["referenceElementHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Bt;
  }
}, [1, "calcite-popover", {
  autoClose: [516, "auto-close"],
  closable: [516],
  flipDisabled: [516, "flip-disabled"],
  focusTrapDisabled: [516, "focus-trap-disabled"],
  pointerDisabled: [516, "pointer-disabled"],
  flipPlacements: [16],
  heading: [1],
  headingLevel: [514, "heading-level"],
  label: [1],
  messageOverrides: [1040],
  messages: [1040],
  offsetDistance: [514, "offset-distance"],
  offsetSkidding: [514, "offset-skidding"],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  referenceElement: [1, "reference-element"],
  scale: [513],
  triggerDisabled: [516, "trigger-disabled"],
  effectiveLocale: [32],
  floatingLayout: [32],
  effectiveReferenceElement: [32],
  defaultMessages: [32],
  reposition: [64],
  setFocus: [64],
  updateFocusTrapElements: [64]
}]);
function Q() {
  if (typeof customElements > "u")
    return;
  ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"].forEach((e) => {
    switch (e) {
      case "calcite-popover":
        customElements.get(e) || customElements.define(e, Tt);
        break;
      case "calcite-action":
        customElements.get(e) || X();
        break;
      case "calcite-icon":
        customElements.get(e) || J();
        break;
      case "calcite-loader":
        customElements.get(e) || W();
        break;
    }
  });
}
Q();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const Le = {
  menu: "menu",
  defaultTrigger: "default-trigger"
}, re = {
  tooltip: "tooltip",
  trigger: "trigger"
}, St = {
  menu: "ellipsis"
}, Dt = "data-active", It = `:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[data-active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`, Ot = ["ArrowUp", "ArrowDown", "End", "Home"], Ht = /* @__PURE__ */ _(class extends G {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteActionMenuOpen = x(this, "calciteActionMenuOpen", 6), this.actionElements = [], this.guid = `calcite-action-menu-${We()}`, this.menuId = `${this.guid}-menu`, this.menuButtonId = `${this.guid}-menu-button`, this.connectMenuButtonEl = () => {
      const { menuButtonId: t, menuId: e, open: n, label: o } = this, r = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      this.menuButtonEl !== r && (this.disconnectMenuButtonEl(), this.menuButtonEl = r, this.setTooltipReferenceElement(), r && (r.active = n, r.setAttribute("aria-controls", e), r.setAttribute("aria-expanded", K(n)), r.setAttribute("aria-haspopup", "true"), r.id || (r.id = t), r.label || (r.label = o), r.text || (r.text = o), r.addEventListener("pointerdown", this.menuButtonClick), r.addEventListener("keydown", this.menuButtonKeyDown)));
    }, this.disconnectMenuButtonEl = () => {
      const { menuButtonEl: t } = this;
      t && (t.removeEventListener("pointerdown", this.menuButtonClick), t.removeEventListener("keydown", this.menuButtonKeyDown));
    }, this.setMenuButtonEl = (t) => {
      const e = t.target.assignedElements({
        flatten: !0
      }).filter((n) => n == null ? void 0 : n.matches("calcite-action"));
      this.slottedMenuButtonEl = e[0], this.connectMenuButtonEl();
    }, this.setDefaultMenuButtonEl = (t) => {
      this.defaultMenuButtonEl = t, this.connectMenuButtonEl();
    }, this.handleCalciteActionClick = () => {
      this.open = !1, this.setFocus();
    }, this.menuButtonClick = (t) => {
      se(t) && this.toggleOpen();
    }, this.updateTooltip = (t) => {
      const e = t.target.assignedElements({
        flatten: !0
      }).filter((n) => n == null ? void 0 : n.matches("calcite-tooltip"));
      this.tooltipEl = e[0], this.setTooltipReferenceElement();
    }, this.setTooltipReferenceElement = () => {
      const { tooltipEl: t, expanded: e, menuButtonEl: n, open: o } = this;
      t && (t.referenceElement = !e && !o ? n : null);
    }, this.updateAction = (t, e) => {
      const { guid: n, activeMenuItemIndex: o } = this, r = `${n}-action-${e}`;
      t.tabIndex = -1, t.setAttribute("role", "menuitem"), t.id || (t.id = r), t.toggleAttribute(Dt, e === o);
    }, this.updateActions = (t) => {
      t == null || t.forEach(this.updateAction);
    }, this.handleDefaultSlotChange = (t) => {
      const e = t.target.assignedElements({
        flatten: !0
      }).filter((n) => n == null ? void 0 : n.matches("calcite-action"));
      this.actionElements = e;
    }, this.menuButtonKeyDown = (t) => {
      const { key: e } = t, { actionElements: n, activeMenuItemIndex: o, open: r } = this;
      if (n.length) {
        if (_e(e)) {
          if (t.preventDefault(), !r) {
            this.toggleOpen();
            return;
          }
          const d = n[o];
          d ? d.click() : this.toggleOpen(!1);
        }
        if (e === "Tab") {
          this.open = !1;
          return;
        }
        if (e === "Escape") {
          this.toggleOpen(!1), t.preventDefault();
          return;
        }
        this.handleActionNavigation(t, e, n);
      }
    }, this.handleActionNavigation = (t, e, n) => {
      if (!this.isValidKey(e, Ot))
        return;
      if (t.preventDefault(), !this.open) {
        this.toggleOpen(), (e === "Home" || e === "ArrowDown") && (this.activeMenuItemIndex = 0), (e === "End" || e === "ArrowUp") && (this.activeMenuItemIndex = n.length - 1);
        return;
      }
      e === "Home" && (this.activeMenuItemIndex = 0), e === "End" && (this.activeMenuItemIndex = n.length - 1);
      const o = this.activeMenuItemIndex;
      e === "ArrowUp" && (this.activeMenuItemIndex = Fe(Math.max(o - 1, -1), n.length)), e === "ArrowDown" && (this.activeMenuItemIndex = Fe(o + 1, n.length));
    }, this.toggleOpenEnd = () => {
      this.setFocus(), this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    }, this.toggleOpen = (t = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd), this.open = t;
    }, this.appearance = "solid", this.expanded = !1, this.flipPlacements = void 0, this.label = void 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = "auto", this.scale = void 0, this.menuButtonEl = void 0, this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    q(this);
  }
  componentDidLoad() {
    Y(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = !1, this.setTooltipReferenceElement();
  }
  openHandler(t) {
    this.activeMenuItemIndex = this.open ? 0 : -1, this.menuButtonEl && (this.menuButtonEl.active = t), this.calciteActionMenuOpen.emit(), this.setTooltipReferenceElement();
  }
  closeCalciteActionMenuOnClick(t) {
    !se(t) || t.composedPath().includes(this.el) || (this.open = !1);
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    return await V(this), Re(this.menuButtonEl);
  }
  renderMenuButton() {
    const { appearance: t, label: e, scale: n, expanded: o } = this;
    return c("slot", { name: re.trigger, onSlotchange: this.setMenuButtonEl }, c("calcite-action", {
      appearance: t,
      class: Le.defaultTrigger,
      icon: St.menu,
      scale: n,
      text: e,
      textEnabled: o,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setDefaultMenuButtonEl
    }));
  }
  renderMenuItems() {
    const { actionElements: t, activeMenuItemIndex: e, open: n, menuId: o, menuButtonEl: r, label: d, placement: s, overlayPositioning: f, flipPlacements: p } = this, g = t[e], C = (g == null ? void 0 : g.id) || null;
    return c("calcite-popover", { flipPlacements: p, focusTrapDisabled: !0, label: d, offsetDistance: 0, open: n, overlayPositioning: f, placement: s, pointerDisabled: !0, referenceElement: r }, c("div", { "aria-activedescendant": C, "aria-labelledby": r == null ? void 0 : r.id, class: Le.menu, id: o, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, c("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  render() {
    return c(Ke, null, this.renderMenuButton(), this.renderMenuItems(), c("slot", { name: re.tooltip, onSlotchange: this.updateTooltip }));
  }
  isValidKey(t, e) {
    return !!e.find((n) => n === t);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expanded: ["expandedHandler"],
      open: ["openHandler"],
      activeMenuItemIndex: ["activeMenuItemIndexHandler"]
    };
  }
  static get style() {
    return It;
  }
}, [1, "calcite-action-menu", {
  appearance: [513],
  expanded: [516],
  flipPlacements: [16],
  label: [1],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  scale: [513],
  menuButtonEl: [32],
  activeMenuItemIndex: [32],
  setFocus: [64]
}, [[9, "pointerdown", "closeCalciteActionMenuOnClick"]]]);
function pe() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-menu":
        customElements.get(e) || customElements.define(e, Ht);
        break;
      case "calcite-action":
        customElements.get(e) || X();
        break;
      case "calcite-icon":
        customElements.get(e) || J();
        break;
      case "calcite-loader":
        customElements.get(e) || W();
        break;
      case "calcite-popover":
        customElements.get(e) || Q();
        break;
    }
  });
}
pe();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const y = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer"
}, j = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right",
  expand: "chevron-down",
  collapse: "chevron-up"
}, w = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
}, Lt = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}", Mt = /* @__PURE__ */ _(class extends G {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePanelClose = x(this, "calcitePanelClose", 6), this.calcitePanelToggle = x(this, "calcitePanelToggle", 6), this.calcitePanelScroll = x(this, "calcitePanelScroll", 6), this.resizeObserver = Ge("resize", () => this.resizeHandler()), this.resizeHandler = () => {
      const { panelScrollEl: t } = this;
      !t || typeof t.scrollHeight != "number" || typeof t.offsetHeight != "number" || (t.tabIndex = t.scrollHeight > t.offsetHeight ? 0 : -1);
    }, this.setContainerRef = (t) => {
      this.containerEl = t;
    }, this.panelKeyDownHandler = (t) => {
      this.closable && t.key === "Escape" && !t.defaultPrevented && (this.close(), t.preventDefault());
    }, this.close = () => {
      this.closed = !0, this.calcitePanelClose.emit();
    }, this.collapse = () => {
      this.collapsed = !this.collapsed, this.calcitePanelToggle.emit();
    }, this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    }, this.handleHeaderActionsStartSlotChange = (t) => {
      this.hasStartActions = I(t);
    }, this.handleHeaderActionsEndSlotChange = (t) => {
      this.hasEndActions = I(t);
    }, this.handleHeaderMenuActionsSlotChange = (t) => {
      this.hasMenuItems = I(t);
    }, this.handleActionBarSlotChange = (t) => {
      const e = ot(t).filter((n) => n == null ? void 0 : n.matches("calcite-action-bar"));
      e.forEach((n) => n.layout = "horizontal"), this.hasActionBar = !!e.length;
    }, this.handleHeaderContentSlotChange = (t) => {
      this.hasHeaderContent = I(t);
    }, this.handleFooterSlotChange = (t) => {
      this.hasFooterContent = I(t);
    }, this.handleFooterActionsSlotChange = (t) => {
      this.hasFooterActions = I(t);
    }, this.handleFabSlotChange = (t) => {
      this.hasFab = I(t);
    }, this.setPanelScrollEl = (t) => {
      var e, n;
      this.panelScrollEl = t, (e = this.resizeObserver) == null || e.disconnect(), t && ((n = this.resizeObserver) == null || n.observe(t), this.resizeHandler());
    }, this.closed = !1, this.disabled = !1, this.closable = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.headingLevel = void 0, this.loading = !1, this.heading = void 0, this.description = void 0, this.menuOpen = !1, this.messageOverrides = void 0, this.messages = void 0, this.hasStartActions = !1, this.hasEndActions = !1, this.hasMenuItems = !1, this.hasHeaderContent = !1, this.hasActionBar = !1, this.hasFooterContent = !1, this.hasFooterActions = !1, this.hasFab = !1, this.defaultMessages = void 0, this.effectiveLocale = "", this.showHeaderContent = !1;
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    $e(this), le(this), de(this);
  }
  async componentWillLoad() {
    q(this), await ue(this);
  }
  componentDidLoad() {
    Y(this);
  }
  componentDidRender() {
    Ue(this);
  }
  disconnectedCallback() {
    var t;
    je(this), he(this), fe(this), (t = this.resizeObserver) == null || t.disconnect();
  }
  effectiveLocaleChange() {
    ce(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await V(this), ze(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(t) {
    var e;
    (e = this.panelScrollEl) == null || e.scrollTo(t);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading: t, headingLevel: e, description: n, hasHeaderContent: o } = this, r = t ? c(Ye, { class: y.heading, level: e }, t) : null, d = n ? c("span", { class: y.description }, n) : null;
    return !o && (r || d) ? c("div", { class: y.headerContent, key: "header-content" }, r, d) : null;
  }
  renderActionBar() {
    return c("div", { class: y.actionBarContainer, hidden: !this.hasActionBar }, c("slot", { name: w.actionBar, onSlotchange: this.handleActionBarSlotChange }));
  }
  renderHeaderSlottedContent() {
    return c("div", { class: y.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, c("slot", { name: w.headerContent, onSlotchange: this.handleHeaderContentSlotChange }));
  }
  renderHeaderStartActions() {
    const { hasStartActions: t } = this;
    return c("div", { class: { [y.headerActionsStart]: !0, [y.headerActions]: !0 }, hidden: !t, key: "header-actions-start" }, c("slot", { name: w.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange }));
  }
  renderHeaderActionsEnd() {
    const { hasEndActions: t, messages: e, closable: n, collapsed: o, collapseDirection: r, collapsible: d, hasMenuItems: s } = this, { collapse: f, expand: p, close: g } = e, C = [j.expand, j.collapse];
    r === "up" && C.reverse();
    const F = d ? c("calcite-action", { "aria-expanded": K(!o), "aria-label": f, "data-test": "collapse", icon: o ? C[0] : C[1], onClick: this.collapse, text: f, title: o ? p : f }) : null, B = n ? c("calcite-action", { "aria-label": g, "data-test": "close", icon: j.close, onClick: this.close, text: g, title: g }) : null, Z = c("slot", { name: w.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }), A = t || F || B || s;
    return c("div", { class: { [y.headerActionsEnd]: !0, [y.headerActions]: !0 }, hidden: !A, key: "header-actions-end" }, Z, this.renderMenu(), F, B);
  }
  renderMenu() {
    const { hasMenuItems: t, messages: e, menuOpen: n } = this;
    return c("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !t, key: "menu", label: e.options, open: n, placement: "bottom-end" }, c("calcite-action", { icon: j.menu, slot: re.trigger, text: e.options }), c("slot", { name: w.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange }));
  }
  renderHeaderNode() {
    const { hasHeaderContent: t, hasStartActions: e, hasEndActions: n, closable: o, collapsible: r, hasMenuItems: d, hasActionBar: s } = this, f = this.renderHeaderContent(), p = t || !!f || e || n || r || o || d;
    return this.showHeaderContent = p, c("header", { class: y.header, hidden: !(p || s) }, c("div", { class: { [y.headerContainer]: !0, [y.headerContainerBorderEnd]: s }, hidden: !p }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), f, this.renderHeaderActionsEnd()), this.renderActionBar());
  }
  renderFooterNode() {
    const { hasFooterContent: t, hasFooterActions: e } = this, n = t || e;
    return c("footer", { class: y.footer, hidden: !n }, c("slot", { key: "footer-slot", name: w.footer, onSlotchange: this.handleFooterSlotChange }), c("slot", { key: "footer-actions-slot", name: w.footerActions, onSlotchange: this.handleFooterActionsSlotChange }));
  }
  renderContent() {
    return c("div", {
      class: y.contentWrapper,
      hidden: this.collapsible && this.collapsed,
      onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setPanelScrollEl
    }, c("slot", null), this.renderFab());
  }
  renderFab() {
    return c("div", { class: y.fabContainer, hidden: !this.hasFab }, c("slot", { name: w.fab, onSlotchange: this.handleFabSlotChange }));
  }
  render() {
    const { loading: t, panelKeyDownHandler: e, closed: n, closable: o } = this, r = c("article", {
      "aria-busy": K(t),
      class: y.container,
      hidden: n,
      onKeyDown: e,
      tabIndex: o ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef
    }, this.renderHeaderNode(), this.renderContent(), this.renderFooterNode());
    return c(Ke, null, t ? c("calcite-scrim", { loading: t }) : null, r);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Lt;
  }
}, [1, "calcite-panel", {
  closed: [1540],
  disabled: [516],
  closable: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  headingLevel: [514, "heading-level"],
  loading: [516],
  heading: [1],
  description: [1],
  menuOpen: [516, "menu-open"],
  messageOverrides: [1040],
  messages: [1040],
  hasStartActions: [32],
  hasEndActions: [32],
  hasMenuItems: [32],
  hasHeaderContent: [32],
  hasActionBar: [32],
  hasFooterContent: [32],
  hasFooterActions: [32],
  hasFab: [32],
  defaultMessages: [32],
  effectiveLocale: [32],
  showHeaderContent: [32],
  setFocus: [64],
  scrollContentTo: [64]
}]);
function Ve() {
  if (typeof customElements > "u")
    return;
  ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-panel":
        customElements.get(e) || customElements.define(e, Mt);
        break;
      case "calcite-action":
        customElements.get(e) || X();
        break;
      case "calcite-action-menu":
        customElements.get(e) || pe();
        break;
      case "calcite-icon":
        customElements.get(e) || J();
        break;
      case "calcite-loader":
        customElements.get(e) || W();
        break;
      case "calcite-popover":
        customElements.get(e) || Q();
        break;
      case "calcite-scrim":
        customElements.get(e) || qe();
        break;
    }
  });
}
Ve();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const Rt = {
  backButton: "back-button"
}, Me = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
}, S = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
}, zt = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}", Xe = /* @__PURE__ */ _(class extends G {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFlowItemBack = x(this, "calciteFlowItemBack", 7), this.calciteFlowItemScroll = x(this, "calciteFlowItemScroll", 6), this.calciteFlowItemClose = x(this, "calciteFlowItemClose", 6), this.calciteFlowItemToggle = x(this, "calciteFlowItemToggle", 6), this.handlePanelScroll = (t) => {
      t.stopPropagation(), this.calciteFlowItemScroll.emit();
    }, this.handlePanelClose = (t) => {
      t.stopPropagation(), this.calciteFlowItemClose.emit();
    }, this.handlePanelToggle = (t) => {
      t.stopPropagation(), this.collapsed = t.target.collapsed, this.calciteFlowItemToggle.emit();
    }, this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    }, this.setBackRef = (t) => {
      this.backButtonEl = t;
    }, this.setContainerRef = (t) => {
      this.containerEl = t;
    }, this.closable = !1, this.closed = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.beforeBack = void 0, this.description = void 0, this.disabled = !1, this.heading = void 0, this.headingLevel = void 0, this.loading = !1, this.menuOpen = !1, this.messageOverrides = void 0, this.messages = void 0, this.showBackButton = !1, this.defaultMessages = void 0, this.effectiveLocale = "";
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    $e(this), le(this), de(this);
  }
  async componentWillLoad() {
    await ue(this), q(this);
  }
  componentDidRender() {
    Ue(this);
  }
  disconnectedCallback() {
    je(this), he(this), fe(this);
  }
  componentDidLoad() {
    Y(this);
  }
  effectiveLocaleChange() {
    ce(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await V(this);
    const { backButtonEl: t, containerEl: e } = this;
    if (t)
      return t.setFocus();
    if (e)
      return e.setFocus();
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(t) {
    var e;
    await ((e = this.containerEl) == null ? void 0 : e.scrollContentTo(t));
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el: t } = this, e = st(t) === "rtl", { showBackButton: n, backButtonClick: o, messages: r } = this, d = r.back, s = e ? Me.backRight : Me.backLeft;
    return n ? c("calcite-action", {
      "aria-label": d,
      class: Rt.backButton,
      icon: s,
      key: "flow-back-button",
      onClick: o,
      scale: "s",
      slot: "header-actions-start",
      text: d,
      title: d,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setBackRef
    }) : null;
  }
  render() {
    const { collapsed: t, collapseDirection: e, collapsible: n, closable: o, closed: r, description: d, disabled: s, heading: f, headingLevel: p, loading: g, menuOpen: C, messages: F } = this;
    return c(Ne, null, c("calcite-panel", {
      closable: o,
      closed: r,
      collapseDirection: e,
      collapsed: t,
      collapsible: n,
      description: d,
      disabled: s,
      heading: f,
      headingLevel: p,
      loading: g,
      menuOpen: C,
      messageOverrides: F,
      onCalcitePanelClose: this.handlePanelClose,
      onCalcitePanelScroll: this.handlePanelScroll,
      onCalcitePanelToggle: this.handlePanelToggle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef
    }, this.renderBackButton(), c("slot", { name: S.actionBar, slot: w.actionBar }), c("slot", { name: S.headerActionsStart, slot: w.headerActionsStart }), c("slot", { name: S.headerActionsEnd, slot: w.headerActionsEnd }), c("slot", { name: S.headerContent, slot: w.headerContent }), c("slot", { name: S.headerMenuActions, slot: w.headerMenuActions }), c("slot", { name: S.fab, slot: w.fab }), c("slot", { name: S.footerActions, slot: w.footerActions }), c("slot", { name: S.footer, slot: w.footer }), c("slot", null)));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return zt;
  }
}, [1, "calcite-flow-item", {
  closable: [516],
  closed: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  beforeBack: [16],
  description: [1],
  disabled: [516],
  heading: [1],
  headingLevel: [514, "heading-level"],
  loading: [516],
  menuOpen: [516, "menu-open"],
  messageOverrides: [1040],
  messages: [1040],
  showBackButton: [4, "show-back-button"],
  defaultMessages: [32],
  effectiveLocale: [32],
  setFocus: [64],
  scrollContentTo: [64]
}]);
function Je() {
  if (typeof customElements > "u")
    return;
  ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-flow-item":
        customElements.get(e) || customElements.define(e, Xe);
        break;
      case "calcite-action":
        customElements.get(e) || X();
        break;
      case "calcite-action-menu":
        customElements.get(e) || pe();
        break;
      case "calcite-icon":
        customElements.get(e) || J();
        break;
      case "calcite-loader":
        customElements.get(e) || W();
        break;
      case "calcite-panel":
        customElements.get(e) || Ve();
        break;
      case "calcite-popover":
        customElements.get(e) || Q();
        break;
      case "calcite-scrim":
        customElements.get(e) || qe();
        break;
    }
  });
}
Je();
const Qt = Xe, Zt = Je;
export {
  Qt as CalciteFlowItem,
  Zt as defineCustomElement
};
