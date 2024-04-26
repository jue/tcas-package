import { e as g, d as m, hV as Re, a as Q, hW as Ce, hX as U, hY as Je, hZ as be, eG as We, h_ as Ke, aD as Pe, e2 as De, ao as A, h$ as Ne, R as le, eC as Z, eN as Y, y as T, eP as Ye, dE as L, e9 as M, C as F, v as $, i0 as ce, i1 as he, I as Se, aq as ue, eb as Xe, i2 as Qe, gK as ee, c6 as Ie, ap as Ze, i3 as $e } from "./index-Ek1MTSEY.js";
import "vue";
const D = { base: "geoscene-identity-form", group: "geoscene-identity-form__group", label: "geoscene-identity-form__label", footer: "geoscene-identity-form__footer", esriInput: "geoscene-input", esriButton: "geoscene-button", esriButtonSecondary: "geoscene-button--secondary" }, et = "ArcGIS Online";
let q = class extends Ce {
  constructor(e, t) {
    super(e, t), this._usernameInputNode = null, this._passwordInputNode = null, this.messages = null, this.signingIn = !1, this.server = null, this.resource = null, this.error = null, this.oAuthPrompt = !1;
  }
  render() {
    const { error: e, server: t, resource: r, signingIn: i, oAuthPrompt: s, messages: n } = this, l = U("div", { class: D.group }, Je(s ? n.oAuthInfo : n.info, { server: /\.arcgis\.com/i.test(t) ? et : t, resource: `(${r || n.lblItem})` })), p = s ? null : U("div", { class: D.group, key: "username" }, U("label", { class: D.label }, n.lblUser, U("input", { value: "", required: !0, autocomplete: "off", spellcheck: !1, type: "text", bind: this, afterCreate: be, "data-node-ref": "_usernameInputNode", class: D.esriInput }))), a = s ? null : U("div", { class: D.group, key: "password" }, U("label", { class: D.label }, n.lblPwd, U("input", { value: "", required: !0, type: "password", bind: this, afterCreate: be, "data-node-ref": "_passwordInputNode", class: D.esriInput }))), u = U("div", { class: this.classes(D.group, D.footer) }, U("input", { type: "submit", disabled: !!i, value: i ? n.lblSigning : n.lblOk, class: D.esriButton }), U("input", { type: "button", value: n.lblCancel, bind: this, onclick: this._cancel, class: this.classes(D.esriButton, D.esriButtonSecondary) })), f = e ? U("div", null, e.details && e.details.httpStatus ? n.invalidUser : n.noAuthService) : null;
    return U("form", { class: D.base, bind: this, onsubmit: this._submit }, l, f, p, a, u);
  }
  _cancel() {
    this._set("signingIn", !1), this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(e) {
    e.preventDefault(), this._set("signingIn", !0);
    const t = this.oAuthPrompt ? {} : { username: this._usernameInputNode && this._usernameInputNode.value, password: this._passwordInputNode && this._passwordInputNode.value };
    this.emit("submit", t);
  }
};
g([m(), Re("geoscene/identity/t9n/identity")], q.prototype, "messages", void 0), g([m()], q.prototype, "signingIn", void 0), g([m()], q.prototype, "server", void 0), g([m()], q.prototype, "resource", void 0), g([m()], q.prototype, "error", void 0), g([m()], q.prototype, "oAuthPrompt", void 0), q = g([Q("geoscene.identity.IdentityForm")], q);
const tt = q;
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Ee = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"], oe = /* @__PURE__ */ Ee.join(","), Fe = typeof Element > "u", z = Fe ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ge = !Fe && Element.prototype.getRootNode ? function(o) {
  return o.getRootNode();
} : function(o) {
  return o.ownerDocument;
}, qe = function(e, t, r) {
  var i = Array.prototype.slice.apply(e.querySelectorAll(oe));
  return t && z.call(e, oe) && i.unshift(e), i = i.filter(r), i;
}, Le = function o(e, t, r) {
  for (var i = [], s = Array.from(e); s.length; ) {
    var n = s.shift();
    if (n.tagName === "SLOT") {
      var l = n.assignedElements(), p = l.length ? l : n.children, a = o(p, !0, r);
      r.flatten ? i.push.apply(i, a) : i.push({
        scope: n,
        candidates: a
      });
    } else {
      var u = z.call(n, oe);
      u && r.filter(n) && (t || !e.includes(n)) && i.push(n);
      var f = n.shadowRoot || // check for an undisclosed shadow
      typeof r.getShadowRoot == "function" && r.getShadowRoot(n), h = !r.shadowRootFilter || r.shadowRootFilter(n);
      if (f && h) {
        var v = o(f === !0 ? n.children : f.children, !0, r);
        r.flatten ? i.push.apply(i, v) : i.push({
          scope: n,
          candidates: v
        });
      } else
        s.unshift.apply(s, n.children);
    }
  }
  return i;
}, je = function(e, t) {
  return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex;
}, rt = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Be = function(e) {
  return e.tagName === "INPUT";
}, st = function(e) {
  return Be(e) && e.type === "hidden";
}, it = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return t;
}, nt = function(e, t) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === t)
      return e[r];
}, ot = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || ge(e), r = function(l) {
    return t.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(e.name));
  else
    try {
      i = r(e.name);
    } catch (n) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", n.message), !1;
    }
  var s = nt(i, e.form);
  return !s || s === e;
}, at = function(e) {
  return Be(e) && e.type === "radio";
}, lt = function(e) {
  return at(e) && !ot(e);
}, ke = function(e) {
  var t = e.getBoundingClientRect(), r = t.width, i = t.height;
  return r === 0 && i === 0;
}, ct = function(e, t) {
  var r = t.displayCheck, i = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = z.call(e, "details>summary:first-of-type"), n = s ? e.parentElement : e;
  if (z.call(n, "details:not([open]) *"))
    return !0;
  var l = ge(e).host, p = (l == null ? void 0 : l.ownerDocument.contains(l)) || e.ownerDocument.contains(e);
  if (!r || r === "full") {
    if (typeof i == "function") {
      for (var a = e; e; ) {
        var u = e.parentElement, f = ge(e);
        if (u && !u.shadowRoot && i(u) === !0)
          return ke(e);
        e.assignedSlot ? e = e.assignedSlot : !u && f !== e.ownerDocument ? e = f.host : e = u;
      }
      e = a;
    }
    if (p)
      return !e.getClientRects().length;
  } else if (r === "non-zero-area")
    return ke(e);
  return !1;
}, ht = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var r = 0; r < t.children.length; r++) {
          var i = t.children.item(r);
          if (i.tagName === "LEGEND")
            return z.call(t, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, ae = function(e, t) {
  return !(t.disabled || st(t) || ct(t, e) || // For a details element with a summary, the summary element gets the focus
  it(t) || ht(t));
}, _e = function(e, t) {
  return !(lt(t) || je(t) < 0 || !ae(e, t));
}, ut = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, dt = function o(e) {
  var t = [], r = [];
  return e.forEach(function(i, s) {
    var n = !!i.scope, l = n ? i.scope : i, p = je(l, n), a = n ? o(i.candidates) : l;
    p === 0 ? n ? t.push.apply(t, a) : t.push(l) : r.push({
      documentOrder: s,
      tabIndex: p,
      item: i,
      isScope: n,
      content: a
    });
  }), r.sort(rt).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(t);
}, pt = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Le([e], t.includeContainer, {
    filter: _e.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: ut
  }) : r = qe(e, t.includeContainer, _e.bind(null, t)), dt(r);
}, ft = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Le([e], t.includeContainer, {
    filter: ae.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : r = qe(e, t.includeContainer, ae.bind(null, t)), r;
}, te = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return z.call(e, oe) === !1 ? !1 : _e(t, e);
}, vt = /* @__PURE__ */ Ee.concat("iframe").join(","), de = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return z.call(e, vt) === !1 ? !1 : ae(t, e);
};
/*!
* focus-trap 6.7.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Ae(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function gt(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ae(Object(t), !0).forEach(function(r) {
      _t(o, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : Ae(Object(t)).forEach(function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return o;
}
function _t(o, e, t) {
  return e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
var Te = /* @__PURE__ */ function() {
  var o = [];
  return {
    activateTrap: function(t) {
      if (o.length > 0) {
        var r = o[o.length - 1];
        r !== t && r.pause();
      }
      var i = o.indexOf(t);
      i === -1 || o.splice(i, 1), o.push(t);
    },
    deactivateTrap: function(t) {
      var r = o.indexOf(t);
      r !== -1 && o.splice(r, 1), o.length > 0 && o[o.length - 1].unpause();
    }
  };
}(), mt = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, wt = function(e) {
  return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
}, yt = function(e) {
  return e.key === "Tab" || e.keyCode === 9;
}, Ue = function(e) {
  return setTimeout(e, 0);
}, pe = function(e, t) {
  var r = -1;
  return e.every(function(i, s) {
    return t(i) ? (r = s, !1) : !0;
  }), r;
}, X = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, re = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, bt = function(e, t) {
  var r = (t == null ? void 0 : t.document) || document, i = gt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0
  }, t), s = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0
  }, n, l = function(c, d, S) {
    return c && c[d] !== void 0 ? c[d] : i[S || d];
  }, p = function(c) {
    return !!(c && s.containers.some(function(d) {
      return d.contains(c);
    }));
  }, a = function(c) {
    var d = i[c];
    if (typeof d == "function") {
      for (var S = arguments.length, R = new Array(S > 1 ? S - 1 : 0), O = 1; O < S; O++)
        R[O - 1] = arguments[O];
      d = d.apply(void 0, R);
    }
    if (!d) {
      if (d === void 0 || d === !1)
        return d;
      throw new Error("`".concat(c, "` was specified but was not a node, or did not return a node"));
    }
    var P = d;
    if (typeof d == "string" && (P = r.querySelector(d), !P))
      throw new Error("`".concat(c, "` as selector refers to no known node"));
    return P;
  }, u = function() {
    var c = a("initialFocus");
    if (c === !1)
      return !1;
    if (c === void 0)
      if (p(r.activeElement))
        c = r.activeElement;
      else {
        var d = s.tabbableGroups[0], S = d && d.firstTabbableNode;
        c = S || a("fallbackFocus");
      }
    if (!c)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return c;
  }, f = function() {
    if (s.tabbableGroups = s.containers.map(function(c) {
      var d = pt(c), S = ft(c);
      if (d.length > 0)
        return {
          container: c,
          firstTabbableNode: d[0],
          lastTabbableNode: d[d.length - 1],
          /**
           * Finds the __tabbable__ node that follows the given node in the specified direction,
           *  in this container, if any.
           * @param {HTMLElement} node
           * @param {boolean} [forward] True if going in forward tab order; false if going
           *  in reverse.
           * @returns {HTMLElement|undefined} The next tabbable node, if any.
           */
          nextTabbableNode: function(O) {
            var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, G = S.findIndex(function(V) {
              return V === O;
            });
            return P ? S.slice(G + 1).find(function(V) {
              return te(V);
            }) : S.slice(0, G).reverse().find(function(V) {
              return te(V);
            });
          }
        };
    }).filter(function(c) {
      return !!c;
    }), s.tabbableGroups.length <= 0 && !a("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
  }, h = function _(c) {
    if (c !== !1 && c !== r.activeElement) {
      if (!c || !c.focus) {
        _(u());
        return;
      }
      c.focus({
        preventScroll: !!i.preventScroll
      }), s.mostRecentlyFocusedNode = c, mt(c) && c.select();
    }
  }, v = function(c) {
    var d = a("setReturnFocus", c);
    return d || (d === !1 ? !1 : c);
  }, y = function(c) {
    var d = re(c);
    if (!p(d)) {
      if (X(i.clickOutsideDeactivates, c)) {
        n.deactivate({
          // if, on deactivation, we should return focus to the node originally-focused
          //  when the trap was activated (or the configured `setReturnFocus` node),
          //  then assume it's also OK to return focus to the outside node that was
          //  just clicked, causing deactivation, as long as that node is focusable;
          //  if it isn't focusable, then return focus to the original node focused
          //  on activation (or the configured `setReturnFocus` node)
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked, whether it's focusable or not; by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node)
          returnFocus: i.returnFocusOnDeactivate && !de(d)
        });
        return;
      }
      X(i.allowOutsideClick, c) || c.preventDefault();
    }
  }, w = function(c) {
    var d = re(c), S = p(d);
    S || d instanceof Document ? S && (s.mostRecentlyFocusedNode = d) : (c.stopImmediatePropagation(), h(s.mostRecentlyFocusedNode || u()));
  }, I = function(c) {
    var d = re(c);
    f();
    var S = null;
    if (s.tabbableGroups.length > 0) {
      var R = pe(s.tabbableGroups, function(W) {
        var K = W.container;
        return K.contains(d);
      }), O = R >= 0 ? s.tabbableGroups[R] : void 0;
      if (R < 0)
        c.shiftKey ? S = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : S = s.tabbableGroups[0].firstTabbableNode;
      else if (c.shiftKey) {
        var P = pe(s.tabbableGroups, function(W) {
          var K = W.firstTabbableNode;
          return d === K;
        });
        if (P < 0 && (O.container === d || de(d) && !te(d) && !O.nextTabbableNode(d, !1)) && (P = R), P >= 0) {
          var G = P === 0 ? s.tabbableGroups.length - 1 : P - 1, V = s.tabbableGroups[G];
          S = V.lastTabbableNode;
        }
      } else {
        var J = pe(s.tabbableGroups, function(W) {
          var K = W.lastTabbableNode;
          return d === K;
        });
        if (J < 0 && (O.container === d || de(d) && !te(d) && !O.nextTabbableNode(d)) && (J = R), J >= 0) {
          var He = J === s.tabbableGroups.length - 1 ? 0 : J + 1, Ge = s.tabbableGroups[He];
          S = Ge.firstTabbableNode;
        }
      }
    } else
      S = a("fallbackFocus");
    S && (c.preventDefault(), h(S));
  }, b = function(c) {
    if (wt(c) && X(i.escapeDeactivates, c) !== !1) {
      c.preventDefault(), n.deactivate();
      return;
    }
    if (yt(c)) {
      I(c);
      return;
    }
  }, x = function(c) {
    if (!X(i.clickOutsideDeactivates, c)) {
      var d = re(c);
      p(d) || X(i.allowOutsideClick, c) || (c.preventDefault(), c.stopImmediatePropagation());
    }
  }, B = function() {
    if (s.active)
      return Te.activateTrap(n), s.delayInitialFocusTimer = i.delayInitialFocus ? Ue(function() {
        h(u());
      }) : h(u()), r.addEventListener("focusin", w, !0), r.addEventListener("mousedown", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", x, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", b, {
        capture: !0,
        passive: !1
      }), n;
  }, H = function() {
    if (s.active)
      return r.removeEventListener("focusin", w, !0), r.removeEventListener("mousedown", y, !0), r.removeEventListener("touchstart", y, !0), r.removeEventListener("click", x, !0), r.removeEventListener("keydown", b, !0), n;
  };
  return n = {
    activate: function(c) {
      if (s.active)
        return this;
      var d = l(c, "onActivate"), S = l(c, "onPostActivate"), R = l(c, "checkCanFocusTrap");
      R || f(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = r.activeElement, d && d();
      var O = function() {
        R && f(), B(), S && S();
      };
      return R ? (R(s.containers.concat()).then(O, O), this) : (O(), this);
    },
    deactivate: function(c) {
      if (!s.active)
        return this;
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, H(), s.active = !1, s.paused = !1, Te.deactivateTrap(n);
      var d = l(c, "onDeactivate"), S = l(c, "onPostDeactivate"), R = l(c, "checkCanReturnFocus");
      d && d();
      var O = l(c, "returnFocus", "returnFocusOnDeactivate"), P = function() {
        Ue(function() {
          O && h(v(s.nodeFocusedBeforeActivation)), S && S();
        });
      };
      return O && R ? (R(v(s.nodeFocusedBeforeActivation)).then(P, P), this) : (P(), this);
    },
    pause: function() {
      return s.paused || !s.active ? this : (s.paused = !0, H(), this);
    },
    unpause: function() {
      return !s.paused || !s.active ? this : (s.paused = !1, f(), B(), this);
    },
    updateContainerElements: function(c) {
      var d = [].concat(c).filter(Boolean);
      return s.containers = d.map(function(S) {
        return typeof S == "string" ? r.querySelector(S) : S;
      }), s.active && f(), this;
    }
  }, n.updateContainerElements(e), n;
};
const E = { base: "geoscene-identity-modal", open: "geoscene-identity-modal--open", closed: "geoscene-identity-modal--closed", title: "geoscene-identity-modal__title", dialog: "geoscene-identity-modal__dialog", content: "geoscene-identity-modal__content", closeButton: "geoscene-identity-modal__close-button", iconClose: "geoscene-icon-close" };
let j = class extends Ce {
  constructor(o, e) {
    super(o, e), this.container = document.createElement("div"), this.content = null, this.open = !1, this._close = () => {
      this.open = !1;
    }, document.body.appendChild(this.container), this.own(this.watch("open", () => this._toggleFocusTrap()));
  }
  destroy() {
    this._destroyFocusTrap();
  }
  render() {
    const o = this.id, { open: e, content: t, title: r, messages: i } = this, s = e && !!t, n = { [E.open]: s, [E.closed]: !s }, l = U("button", { class: E.closeButton, "aria-label": i.close, title: i.close, bind: this, onclick: this._close }, U("span", { "aria-hidden": "true", class: E.iconClose })), p = `${o}_title`, a = `${o}_content`, u = r ? U("h1", { id: p, class: E.title }, r) : null, f = s ? U("div", { bind: this, class: E.dialog, role: "dialog", "aria-labelledby": p, "aria-describedby": a, afterCreate: this._createFocusTrap }, l, u, this._renderContent(a)) : null;
    return U("div", { tabIndex: -1, class: this.classes(E.base, n) }, f);
  }
  _destroyFocusTrap() {
    var o;
    (o = this._focusTrap) == null || o.deactivate({ onDeactivate: null }), this._focusTrap = null;
  }
  _toggleFocusTrap() {
    const { _focusTrap: o, open: e } = this;
    o && (e ? o.activate() : o.deactivate());
  }
  _createFocusTrap(o) {
    this._destroyFocusTrap();
    const e = requestAnimationFrame(() => {
      this._focusTrap = bt(o, { initialFocus: "input", onDeactivate: this._close }), this._toggleFocusTrap();
    });
    this.own(We(() => cancelAnimationFrame(e)));
  }
  _renderContent(o) {
    const e = this.content;
    return typeof e == "string" ? U("div", { class: E.content, id: o, innerHTML: e }) : Ke(e) ? U("div", { class: E.content, id: o }, e.render()) : e instanceof HTMLElement ? U("div", { class: E.content, id: o, bind: e, afterCreate: this._attachToNode }) : null;
  }
  _attachToNode(o) {
    const e = this;
    o.appendChild(e);
  }
};
g([m({ readOnly: !0 })], j.prototype, "container", void 0), g([m()], j.prototype, "content", void 0), g([m()], j.prototype, "open", void 0), g([m(), Re("geoscene/t9n/common")], j.prototype, "messages", void 0), g([m({ aliasOf: "messages.auth.signIn" })], j.prototype, "title", void 0), j = g([Q("geoscene.identity.IdentityModal")], j);
const xe = j, fe = "esriJSAPIOAuth";
class me {
  constructor(e, t) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = e, this.storage = t, this._init();
  }
  isValid() {
    let e = !1;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token))
      if (this.expires == null && this.refreshToken)
        e = !0;
      else {
        const t = Date.now();
        this.expires > t && (this.expires - t) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (e = !0);
      }
    return e;
  }
  save() {
    if (!this.storage)
      return !1;
    const e = this._load(), t = this.oAuthInfo;
    if (t && t.authNamespace && t.portalUrl) {
      let r = e[t.authNamespace];
      r || (r = e[t.authNamespace] = {}), this.appId || (this.appId = t.appId), r[t.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(fe, JSON.stringify(e));
      } catch (i) {
        return console.warn(i), !1;
      }
      return !0;
    }
    return !1;
  }
  destroy() {
    const e = this._load(), t = this.oAuthInfo;
    if (t && t.appId && t.portalUrl && (this.expires == null || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const r = t.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", i = new FormData();
      if (i.append("f", "json"), i.append("auth_token", this.refreshToken || this.token), i.append("client_id", t.appId), i.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), typeof navigator.sendBeacon == "function")
        navigator.sendBeacon(r, i);
      else {
        const s = new XMLHttpRequest();
        s.open("POST", r), s.send(i);
      }
    }
    if (t && t.authNamespace && t.portalUrl && this.storage) {
      const r = e[t.authNamespace];
      if (r) {
        delete r[t.portalUrl];
        try {
          this.storage.setItem(fe, JSON.stringify(e));
        } catch (i) {
          console.log(i);
        }
      }
    }
    t && (t._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const e = this._load(), t = this.oAuthInfo;
    if (t && t.authNamespace && t.portalUrl) {
      let r = e[t.authNamespace];
      r && (r = r[t.portalUrl], r && (this.appId = r.appId, this.codeVerifier = r.codeVerifier, this.expires = r.expires, this.refreshToken = r.refreshToken, this.ssl = r.ssl, this.stateUID = r.stateUID, this.token = r.token, this.userId = r.userId));
    }
  }
  _load() {
    let e = {};
    if (this.storage) {
      const t = this.storage.getItem(fe);
      if (t)
        try {
          e = JSON.parse(t);
        } catch (r) {
          console.warn(r);
        }
    }
    return e;
  }
}
me.prototype.declaredClass = "geoscene.identity.OAuthCredential";
var we;
let C = we = class extends Pe {
  constructor(o) {
    super(o), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = !1, this.forceUserId = !1, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = !1, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.geosceneonline.cn/geoscene", this.preserveUrlHash = !1, this.userId = null;
  }
  clone() {
    return we.fromJSON(this.toJSON());
  }
};
g([m({ json: { write: !0 } })], C.prototype, "appId", void 0), g([m({ json: { write: !0 } })], C.prototype, "authNamespace", void 0), g([m({ json: { write: !0 } })], C.prototype, "expiration", void 0), g([m({ json: { write: !0 } })], C.prototype, "flowType", void 0), g([m({ json: { write: !0 } })], C.prototype, "forceLogin", void 0), g([m({ json: { write: !0 } })], C.prototype, "forceUserId", void 0), g([m({ json: { write: !0 } })], C.prototype, "locale", void 0), g([m({ json: { write: !0 } })], C.prototype, "minTimeUntilExpiration", void 0), g([m({ json: { write: !0 } })], C.prototype, "popup", void 0), g([m({ json: { write: !0 } })], C.prototype, "popupCallbackUrl", void 0), g([m({ json: { write: !0 } })], C.prototype, "popupWindowFeatures", void 0), g([m({ json: { write: !0 } })], C.prototype, "portalUrl", void 0), g([m({ json: { write: !0 } })], C.prototype, "preserveUrlHash", void 0), g([m({ json: { write: !0 } })], C.prototype, "userId", void 0), C = we = g([Q("geoscene.identity.OAuthInfo")], C);
const Oe = C;
let N = class extends Pe {
  constructor(e) {
    super(e), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
g([m({ json: { write: !0 } })], N.prototype, "adminTokenServiceUrl", void 0), g([m({ json: { write: !0 } })], N.prototype, "currentVersion", void 0), g([m({ json: { write: !0 } })], N.prototype, "hasPortal", void 0), g([m({ json: { write: !0 } })], N.prototype, "hasServer", void 0), g([m({ json: { write: !0 } })], N.prototype, "owningSystemUrl", void 0), g([m({ json: { write: !0 } })], N.prototype, "owningTenant", void 0), g([m({ json: { write: !0 } })], N.prototype, "server", void 0), g([m({ json: { write: !0 } })], N.prototype, "shortLivedTokenValidity", void 0), g([m({ json: { write: !0 } })], N.prototype, "tokenServiceUrl", void 0), g([m({ json: { write: !0 } })], N.prototype, "webTierAuth", void 0), N = g([Q("geoscene.identity.ServerInfo")], N);
const ve = N, se = {}, Ve = (o) => {
  const e = new M(o.owningSystemUrl).host, t = new M(o.server).host, r = /.+\.arcgis\.com$/i;
  return r.test(e) && r.test(t);
}, ye = (o, e) => !!(Ve(o) && e && e.some((t) => t.test(o.server)));
let ie = null, ne = null;
try {
  ie = window.localStorage, ne = window.sessionStorage;
} catch {
}
class Me extends De {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this.defaultOAuthInfo = null, this.defaultTokenValidity = 60, this.dialog = null, this.formConstructor = tt, this.tokenValidity = null, this.normalizeWebTierAuth = !1, this._appOrigin = window.origin !== "null" ? window.origin : window.location.origin, this._appUrlObj = le(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = !1, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ customBaseUrl: "www.geosceneonline.cn", regex: /^https?:\/\/www\.geosceneonline\.cn/i, tokenServiceUrl: "https://www.geosceneonline.cn/geoscene/sharing/rest/generateToken" }, { regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.geoscene.cn", tokenServiceUrl: "https://devext.geoscene.cn/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.geoscene.cn", tokenServiceUrl: "https://qaext.geoscene.cn/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = !0, this._hasTestedIfAppIsOnPortal = !1, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e) => {
      this._pageShowHandler(e);
    });
  }
  registerServers(e) {
    const t = this.serverInfos;
    t ? (e = e.filter((r) => !this.findServerInfo(r.server)), this.serverInfos = t.concat(e)) : this.serverInfos = e, e.forEach((r) => {
      r.owningSystemUrl && this._portals.push(r.owningSystemUrl), r.hasPortal && this._portals.push(r.server);
    });
  }
  registerOAuthInfos(e) {
    const t = this.oAuthInfos;
    if (t) {
      for (const r of e) {
        const i = this.findOAuthInfo(r.portalUrl);
        i && t.splice(t.indexOf(i), 1);
      }
      this.oAuthInfos = t.concat(e);
    } else
      this.oAuthInfos = e;
  }
  registerToken(e) {
    e = { ...e };
    const t = this._sanitizeUrl(e.server), r = this._isServerRsrc(t);
    let i, s = this.findServerInfo(t), n = !0;
    s || (s = new ve(), s.server = this._getServerInstanceRoot(t), r ? s.hasServer = !0 : (s.tokenServiceUrl = this._getTokenSvcUrl(t), s.hasPortal = !0), this.registerServers([s])), i = this._findCredential(t), i ? (delete e.server, Object.assign(i, e), n = !1) : (i = new k({ userId: e.userId, server: s.server, token: e.token, expires: e.expires, ssl: e.ssl, scope: r ? "server" : "portal" }), i.resources = [t], this.credentials.push(i)), i.emitTokenChange(!1), n || i.refreshServerTokens();
  }
  toJSON() {
    return Ne({ serverInfos: this.serverInfos.map((e) => e.toJSON()), oAuthInfos: this.oAuthInfos.map((e) => e.toJSON()), credentials: this.credentials.map((e) => e.toJSON()) });
  }
  initialize(e) {
    if (!e)
      return;
    typeof e == "string" && (e = JSON.parse(e));
    const t = e.serverInfos, r = e.oAuthInfos, i = e.credentials;
    if (t) {
      const s = [];
      t.forEach((n) => {
        n.server && n.tokenServiceUrl && s.push(n.declaredClass ? n : new ve(n));
      }), s.length && this.registerServers(s);
    }
    if (r) {
      const s = [];
      r.forEach((n) => {
        n.appId && s.push(n.declaredClass ? n : new Oe(n));
      }), s.length && this.registerOAuthInfos(s);
    }
    i && i.forEach((s) => {
      s.server && s.token && s.expires && s.expires > Date.now() && ((s = s.declaredClass ? s : new k(s)).emitTokenChange(), this.credentials.push(s));
    });
  }
  findServerInfo(e) {
    let t;
    e = this._sanitizeUrl(e);
    for (const r of this.serverInfos)
      if (this._hasSameServerInstance(r.server, e)) {
        t = r;
        break;
      }
    return t;
  }
  findOAuthInfo(e) {
    let t;
    e = this._sanitizeUrl(e);
    for (const r of this.oAuthInfos)
      if (this._hasSameServerInstance(r.portalUrl, e)) {
        t = r;
        break;
      }
    return t;
  }
  findCredential(e, t) {
    let r;
    e = this._sanitizeUrl(e);
    const i = this._isServerRsrc(e) ? "server" : "portal";
    if (t) {
      for (const s of this.credentials)
        if (this._hasSameServerInstance(s.server, e) && t === s.userId && s.scope === i) {
          r = s;
          break;
        }
    } else
      for (const s of this.credentials)
        if (this._hasSameServerInstance(s.server, e) && this._getIdenticalSvcIdx(e, s) !== -1 && s.scope === i) {
          r = s;
          break;
        }
    return r;
  }
  getCredential(e, t) {
    let r, i, s = !0;
    t && (r = !!t.token, i = t.error, s = t.prompt !== !1), t = { ...t }, e = this._sanitizeUrl(e);
    const n = new AbortController(), l = Z();
    if (t.signal && Y(t.signal, () => {
      n.abort();
    }), Y(n, () => {
      l.reject(new T("identity-manager:user-aborted", "ABORTED"));
    }), Ye(n))
      return l.promise;
    t.signal = n.signal;
    const p = this._isAdminResource(e), a = r ? this.findCredential(e) : null;
    let u;
    if (a && i && i.details && i.details.httpStatus === 498)
      a.destroy();
    else if (a)
      return u = new T("identity-manager:not-authorized", "You are currently signed in as: '" + a.userId + "'. You do not have access to this resource: " + e, { error: i }), l.reject(u), l.promise;
    const f = this._findCredential(e, t);
    if (f)
      return l.resolve(f), l.promise;
    let h = this.findServerInfo(e);
    if (h)
      !h.hasServer && this._isServerRsrc(e) && (h._restInfoPms = this._getTokenSvcUrl(e), h.hasServer = !0);
    else {
      const v = this._getTokenSvcUrl(e);
      if (!v)
        return u = new T("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), l.reject(u), l.promise;
      h = new ve(), h.server = this._getServerInstanceRoot(e), typeof v == "string" ? (h.tokenServiceUrl = v, h.hasPortal = !0) : (h._restInfoPms = v, h.hasServer = !0), this.registerServers([h]);
    }
    return h.hasPortal && h._selfReq === void 0 && (s || L(h.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((v) => v.tokenServiceUrl === h.tokenServiceUrl)) && (h._selfReq = { owningTenant: t && t.owningTenant, selfDfd: this._getPortalSelf(h.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e) }), this._enqueue(e, h, t, l, p);
  }
  getResourceName(e) {
    return this._isRESTService(e) ? e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e) && e.replace(this._gwUser, "$1") || this._gwItem.test(e) && e.replace(this._gwItem, "$1") || this._gwGroup.test(e) && e.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e, t, r) {
    const i = this._rePortalTokenSvc.test(e.tokenServiceUrl), s = new M(this._appOrigin), n = e.shortLivedTokenValidity;
    let l, p, a, u, f, h, v, y;
    t && (y = this.tokenValidity || n || this.defaultTokenValidity, y > n && n > 0 && (y = n)), r && (l = r.isAdmin, p = r.serverUrl, a = r.token, h = r.signal, v = r.ssl, e.customParameters = r.customParameters), l ? u = e.adminTokenServiceUrl : (u = e.tokenServiceUrl, f = new M(u.toLowerCase()), e.webTierAuth && r != null && r.serverUrl && !v && s.scheme === "http" && (L(s.uri, u, !0) || f.scheme === "https" && s.host === f.host && s.port === "7080" && f.port === "7443") && (u = u.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const w = { query: { request: "getToken", username: t == null ? void 0 : t.username, password: t == null ? void 0 : t.password, serverUrl: p, token: a, expiration: y, referer: l || i ? this._appOrigin : null, client: l ? "referer" : null, f: "json", ...e.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e, r), signal: h, ...r == null ? void 0 : r.ioArgs };
    return i || (w.withCredentials = !1), F(u, w).then((I) => {
      const b = I.data;
      if (!b || !b.token)
        return new T("identity-manager:authentication-failed", "Unable to generate token");
      const x = e.server;
      return se[x] || (se[x] = {}), t && (se[x][t.username] = t.password), b.validity = y, b;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e) {
    return this.checkAppAccess(e, "").then((t) => t.credential);
  }
  checkAppAccess(e, t, r) {
    let i = !1;
    return this.getCredential(e, { prompt: !1 }).then((s) => {
      let n;
      const l = { f: "json" };
      if (s.scope === "portal")
        if (t && (this._doPortalSignIn(e) || r && r.force))
          n = s.server + "/sharing/rest/oauth2/validateAppAccess", l.client_id = t;
        else {
          if (!s.token)
            return { credential: s };
          n = s.server + "/sharing/rest";
        }
      else {
        if (!s.token)
          return { credential: s };
        n = s.server + "/rest/services";
      }
      return s.token && (l.token = s.token), F(n, { query: l, authMode: "anonymous" }).then((p) => {
        if (p.data.valid === !1)
          throw new T("identity-manager:not-authorized", `You are currently signed in as: '${s.userId}'.`, p.data);
        return i = !!p.data.viewOnlyUserTypeApp, { credential: s };
      }).catch((p) => {
        if (p.name === "identity-manager:not-authorized")
          throw p;
        const a = p.details && p.details.httpStatus;
        if (a === 498)
          throw s.destroy(), new T("identity-manager:not-authenticated", "User is not signed in.");
        if (a === 400)
          throw new T("identity-manager:invalid-request");
        return { credential: s };
      });
    }).then((s) => ({ credential: s.credential, viewOnly: i }));
  }
  setOAuthResponseHash(e) {
    e && (e.charAt(0) === "#" && (e = e.substring(1)), this._processOAuthPopupParams($(e)));
  }
  setOAuthRedirectionHandler(e) {
    this._oAuthRedirectFunc = e;
  }
  setProtocolErrorHandler(e) {
    this._protocolFunc = e;
  }
  signIn(e, t, r = {}) {
    const i = Z(), s = () => {
      var f, h, v, y, w;
      (f = p) == null || f.remove(), (h = a) == null || h.remove(), (v = u) == null || v.remove(), (y = l) == null || y.destroy(), (w = this.dialog) == null || w.destroy(), this.dialog = l = p = a = u = null;
    }, n = () => {
      s(), this._oAuthDfd = null, i.reject(new T("identity-manager:user-aborted", "ABORTED"));
    };
    r.signal && Y(r.signal, () => {
      n();
    });
    let l = new this.formConstructor();
    l.resource = this.getResourceName(e), l.server = t.server, this.dialog = new xe(), this.dialog.content = l, this.dialog.open = !0, this.emit("dialog-create");
    let p = l.on("cancel", n), a = this.dialog.watch("open", n), u = l.on("submit", (f) => {
      this.generateToken(t, f, { isAdmin: r.isAdmin, signal: r.signal }).then((h) => {
        s();
        const v = new k({ userId: f.username, server: t.server, token: h.token, expires: h.expires != null ? Number(h.expires) : null, ssl: !!h.ssl, isAdmin: r.isAdmin, validity: h.validity });
        i.resolve(v);
      }).catch((h) => {
        l.error = h, l.signingIn = !1;
      });
    });
    return i.promise;
  }
  oAuthSignIn(e, t, r, i) {
    this._oAuthDfd = Z();
    const s = this._oAuthDfd;
    let n;
    i != null && i.signal && Y(i.signal, () => {
      const y = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      y && !y.closed ? y.close() : this.dialog && h();
    }), s.resUrl_ = e, s.sinfo_ = t, s.oinfo_ = r;
    const l = r._oAuthCred;
    if (l.storage && (r.flowType === "authorization-code" || r.flowType === "auto" && !r.popup && t.currentVersion >= 8.4)) {
      let y = crypto.getRandomValues(new Uint8Array(32));
      n = ce(y), l.codeVerifier = n, y = crypto.getRandomValues(new Uint8Array(32)), l.stateUID = ce(y), l.save() || (l.codeVerifier = n = null);
    } else
      l.codeVerifier = null;
    let p, a, u, f;
    this._getCodeChallenge(n).then((y) => {
      const w = !i || i.oAuthPopupConfirmation !== !1;
      r.popup && w ? (p = new this.formConstructor(), p.oAuthPrompt = !0, p.server = t.server, this.dialog = new xe(), this.dialog.content = p, this.dialog.open = !0, this.emit("dialog-create"), a = p.on("cancel", h), u = this.dialog.watch("open", h), f = p.on("submit", () => {
        v(), this._doOAuthSignIn(e, t, r, y);
      })) : this._doOAuthSignIn(e, t, r, y);
    });
    const h = () => {
      v(), this._oAuthDfd = null, s.reject(new T("identity-manager:user-aborted", "ABORTED"));
    }, v = () => {
      var y, w, I, b, x;
      (y = a) == null || y.remove(), (w = u) == null || w.remove(), (I = f) == null || I.remove(), (b = p) == null || b.destroy(), (x = this.dialog) == null || x.destroy(), this.dialog = null;
    };
    return s.promise;
  }
  destroyCredentials() {
    this.credentials && this.credentials.slice().forEach((e) => {
      e.destroy();
    }), this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e = "https://www.geosceneonline.cn/geoscene/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = he(window, "message", (t) => {
      var r;
      if ((t.origin === this._appOrigin || t.origin.endsWith(".arcgis.com")) && ((r = t.data) == null ? void 0 : r.type) === "arcgis:auth:requestCredential") {
        const i = t.source;
        this.getCredential(e).then((s) => {
          i.postMessage({ type: "arcgis:auth:credential", credential: { expires: s.expires, server: s.server, ssl: s.ssl, token: s.token, userId: s.userId } }, t.origin);
        }).catch((s) => {
          i.postMessage({ type: "arcgis:auth:error", error: { name: s.name, message: s.message } }, t.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e = window.location.hash;
    if (e) {
      e.charAt(0) === "#" && (e = e.substring(1));
      const s = $(e);
      let n = !1;
      if (s.access_token && s.expires_in && s.state && s.hasOwnProperty("username"))
        try {
          s.state = JSON.parse(s.state), s.state.portalUrl && (this._oAuthLocationParams = s, n = !0);
        } catch {
        }
      else if (s.error && s.error_description && (console.log("IdentityManager OAuth Error: ", s.error, " - ", s.error_description), s.error === "access_denied" && (n = !0, s.state)))
        try {
          s.state = JSON.parse(s.state);
        } catch {
        }
      var t;
      n && (window.location.hash = ((t = s.state) == null ? void 0 : t.hash) || "");
    }
    let r = window.location.search;
    if (r) {
      r.charAt(0) === "?" && (r = r.substring(1));
      const s = $(r);
      let n = !1;
      if (s.code && s.state)
        try {
          s.state = JSON.parse(s.state), s.state.portalUrl && s.state.uid && (this._oAuthLocationParams = s, n = !0);
        } catch {
        }
      else if (s.error && s.error_description && (console.log("IdentityManager OAuth Error: ", s.error, " - ", s.error_description), s.error === "access_denied" && (n = !0, s.state)))
        try {
          s.state = JSON.parse(s.state);
        } catch {
        }
      if (n) {
        var i;
        const l = { ...s };
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((u) => {
          delete l[u];
        });
        const p = Se(l), a = window.location.pathname + (p ? `?${p}` : "") + (((i = s.state) == null ? void 0 : i.hash) || "");
        window.history.replaceState(window.history.state, "", a);
      }
    }
  }
  _getOAuthToken(e, t, r, i, s) {
    return e = e.replace(/^http:/i, "https:"), F(`${e}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i && s ? { grant_type: "authorization_code", code: t, redirect_uri: i, client_id: r, code_verifier: s } : { grant_type: "refresh_token", refresh_token: t, client_id: r } }).then((n) => n.data);
  }
  _getCodeChallenge(e) {
    if (e && globalThis.isSecureContext) {
      const t = new TextEncoder().encode(e);
      return crypto.subtle.digest("SHA-256", t).then((r) => ce(new Uint8Array(r)));
    }
    return Promise.resolve(null);
  }
  _pageShowHandler(e) {
    if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const t = new T("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(t);
    }
  }
  _findCredential(e, t) {
    let r, i, s, n, l = -1;
    const p = t && t.token, a = t && t.resource, u = this._isServerRsrc(e) ? "server" : "portal", f = this.credentials.filter((h) => this._hasSameServerInstance(h.server, e) && h.scope === u);
    if (e = a || e, f.length)
      if (f.length === 1) {
        if (r = f[0], n = this.findServerInfo(r.server), i = n && n.owningSystemUrl, s = i && this.findCredential(i, r.userId), l = this._getIdenticalSvcIdx(e, r), !p)
          return l === -1 && r.resources.push(e), this._addResource(e, s), r;
        l !== -1 && (r.resources.splice(l, 1), this._removeResource(e, s));
      } else {
        let h, v;
        if (f.some((y) => (v = this._getIdenticalSvcIdx(e, y), v !== -1 && (h = y, n = this.findServerInfo(h.server), i = n && n.owningSystemUrl, s = i && this.findCredential(i, h.userId), l = v, !0))), p)
          h && (h.resources.splice(l, 1), this._removeResource(e, s));
        else if (h)
          return this._addResource(e, s), h;
      }
  }
  _findOAuthInfo(e) {
    let t = this.findOAuthInfo(e);
    if (!t) {
      for (const r of this.oAuthInfos)
        if (this._isIdProvider(r.portalUrl, e)) {
          t = r;
          break;
        }
    }
    return t;
  }
  _addResource(e, t) {
    t && this._getIdenticalSvcIdx(e, t) === -1 && t.resources.push(e);
  }
  _removeResource(e, t) {
    let r = -1;
    t && (r = this._getIdenticalSvcIdx(e, t), r > -1 && t.resources.splice(r, 1));
  }
  _useProxy(e, t) {
    return t && t.isAdmin && !L(e.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e.tokenServiceUrl) && String(e.currentVersion) === "10.1" && !L(e.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e) {
    const t = new M(e);
    return t.scheme + "://" + t.host + (t.port != null ? ":" + t.port : "");
  }
  _getServerInstanceRoot(e) {
    const t = e.toLowerCase();
    let r = t.indexOf(this._agsRest);
    return r === -1 && this._isAdminResource(e) && (r = this._agsAdmin.test(e) ? e.replace(this._agsAdmin, "$1").length : e.search(this._adminSvcs)), r === -1 && (r = t.indexOf("/sharing")), r === -1 && t.substr(-1) === "/" && (r = t.length - 1), r > -1 ? e.substring(0, r) : e;
  }
  _hasSameServerInstance(e, t) {
    return e.substr(-1) === "/" && (e = e.slice(0, -1)), e = e.toLowerCase(), t = this._getServerInstanceRoot(t).toLowerCase(), e = this._normalizeAGOLorgDomain(e), t = this._normalizeAGOLorgDomain(t), (e = e.substr(e.indexOf(":"))) === (t = t.substr(t.indexOf(":")));
  }
  _normalizeAGOLorgDomain(e) {
    const t = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, r = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, i = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return t.test(e) ? e = e.replace(t, "https://www.geosceneonline.cn/geoscene") : r.test(e) ? e = e.replace(r, "https://devext.geoscene.cn") : i.test(e) && (e = e.replace(i, "https://qaext.geoscene.cn")), e;
  }
  _sanitizeUrl(e) {
    const t = (ue.request.proxyUrl || "").toLowerCase(), r = t ? e.toLowerCase().indexOf(t + "?") : -1;
    return r !== -1 && (e = e.substring(r + t.length + 1)), e = Xe(e), le(e).path;
  }
  _isRESTService(e) {
    return e.indexOf(this._agsRest) > -1;
  }
  _isAdminResource(e) {
    return this._agsAdmin.test(e) || this._adminSvcs.test(e);
  }
  _isServerRsrc(e) {
    return this._isRESTService(e) || this._isAdminResource(e);
  }
  _isIdenticalService(e, t) {
    let r;
    if (this._isRESTService(e) && this._isRESTService(t)) {
      const i = this._getSuffix(e).toLowerCase(), s = this._getSuffix(t).toLowerCase();
      if (r = i === s, !r) {
        const n = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r = i.replace(n, "$1") === s.replace(n, "$1");
      }
    } else
      this._isAdminResource(e) && this._isAdminResource(t) ? r = !0 : this._isServerRsrc(e) || this._isServerRsrc(t) || !this._isPortalDomain(e) || (r = !0);
    return r;
  }
  _isPortalDomain(e) {
    const t = new M(e.toLowerCase()), r = this._portalConfig;
    let i = this._gwDomains.some((s) => s.regex.test(t.uri));
    return !i && r && (i = this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl), t.uri)), i || ue.portalUrl && (i = L(t, ue.portalUrl, !0)), i || (i = this._portals.some((s) => this._hasSameServerInstance(s, t.uri))), i = i || this._agsPortal.test(t.path), i;
  }
  _isIdProvider(e, t) {
    let r = -1, i = -1;
    this._gwDomains.forEach((n, l) => {
      r === -1 && n.regex.test(e) && (r = l), i === -1 && n.regex.test(t) && (i = l);
    });
    let s = !1;
    if (r > -1 && i > -1 && (r === 0 || r === 4 ? i !== 0 && i !== 4 || (s = !0) : r === 1 ? i !== 1 && i !== 2 || (s = !0) : r === 2 ? i === 2 && (s = !0) : r === 3 && i === 3 && (s = !0)), !s) {
      const n = this.findServerInfo(t), l = n && n.owningSystemUrl;
      l && Ve(n) && this._isPortalDomain(l) && this._isIdProvider(e, l) && (s = !0);
    }
    return s;
  }
  _getIdenticalSvcIdx(e, t) {
    let r = -1;
    for (let i = 0; i < t.resources.length; i++) {
      const s = t.resources[i];
      if (this._isIdenticalService(e, s)) {
        r = i;
        break;
      }
    }
    return r;
  }
  _getSuffix(e) {
    return e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e) {
    let t, r, i;
    if (this._isRESTService(e) || this._isAdminResource(e)) {
      const s = this._getServerInstanceRoot(e);
      return t = s + "/admin/generateToken", r = F(e = s + "/rest/info", { query: { f: "json" } }).then((n) => n.data), { adminUrl: t, promise: r };
    }
    if (this._isPortalDomain(e)) {
      let s = "";
      if (this._gwDomains.some((n) => (n.regex.test(e) && (s = n.tokenServiceUrl), !!s)), s || this._portals.some((n) => (this._hasSameServerInstance(n, e) && (s = n + this._gwTokenUrl), !!s)), s || (i = e.toLowerCase().indexOf("/sharing"), i !== -1 && (s = e.substring(0, i) + this._gwTokenUrl)), s || (s = this._getOrigin(e) + this._gwTokenUrl), s) {
        const n = new M(e).port;
        /^http:\/\//i.test(e) && n === "7080" && (s = s.replace(/:7080/i, ":7443")), s = s.replace(/http:/i, "https:");
      }
      return s;
    }
    if (e.toLowerCase().indexOf("premium.arcgisonline.com") !== -1)
      return "https://premium.arcgisonline.com/server/tokens";
  }
  _processOAuthResponseParams(e, t, r) {
    const i = t._oAuthCred;
    if (e.code) {
      const n = i.codeVerifier;
      return i.codeVerifier = null, i.stateUID = null, i.save(), this._getOAuthToken(r.server, e.code, t.appId, this._getRedirectURI(t, !0), n).then((l) => {
        const p = new k({ userId: l.username, server: r.server, token: l.access_token, expires: Date.now() + 1e3 * l.expires_in, ssl: l.ssl, oAuthState: e.state, _oAuthCred: i });
        return t.userId = p.userId, i.storage = l.persist ? ie : ne, i.refreshToken = l.refresh_token, i.token = null, i.expires = l.refresh_token_expires_in ? Date.now() + 1e3 * l.refresh_token_expires_in : null, i.userId = p.userId, i.ssl = p.ssl, i.save(), p;
      });
    }
    const s = new k({ userId: e.username, server: r.server, token: e.access_token, expires: Date.now() + 1e3 * Number(e.expires_in), ssl: e.ssl === "true", oAuthState: e.state, _oAuthCred: i });
    return t.userId = s.userId, i.storage = e.persist ? ie : ne, i.refreshToken = null, i.token = s.token, i.expires = s.expires, i.userId = s.userId, i.ssl = s.ssl, i.save(), Promise.resolve(s);
  }
  _processOAuthPopupParams(e) {
    var t;
    const r = this._oAuthDfd;
    if (this._oAuthDfd = null, r)
      if (clearInterval(this._oAuthIntervalId), (t = this._oAuthOnPopupHandle) == null || t.remove(), e.error) {
        const i = e.error === "access_denied", s = new T(i ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", i ? "ABORTED" : "OAuth: " + e.error + " - " + e.error_description);
        r.reject(s);
      } else
        this._processOAuthResponseParams(e, r.oinfo_, r.sinfo_).then((i) => {
          r.resolve(i);
        }).catch((i) => {
          r.reject(i);
        });
  }
  _setOAuthResponseQueryString(e) {
    e && (e.charAt(0) === "?" && (e = e.substring(1)), this._processOAuthPopupParams($(e)));
  }
  _exchangeToken(e, t, r) {
    return F(`${e}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t, token: r } }).then((i) => i.data.token);
  }
  _getPlatformSelf(e, t) {
    return e = e.replace(/^http:/i, "https:"), F(`${e}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: !0 }).then((r) => r.data);
  }
  _getPortalSelf(e, t) {
    let r;
    return this._gwDomains.some((i) => (i.regex.test(e) && (r = i.customBaseUrl), !!r)), r ? Promise.resolve({ allSSL: !0, currentVersion: "8.4", customBaseUrl: r, portalMode: "multitenant", supportsOAuth: !0 }) : (this._appOrigin.startsWith("https:") ? e = e.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t) && (e = e.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")), F(e, { query: { f: "json" }, authMode: "anonymous", withCredentials: !0 }).then((i) => i.data));
  }
  _doPortalSignIn(e) {
    const t = this._portalConfig, r = window.location.href, i = this.findServerInfo(e);
    return !(!t && !this._isPortalDomain(r) || !(i ? i.hasPortal || i.owningSystemUrl && this._isPortalDomain(i.owningSystemUrl) : this._isPortalDomain(e)) || !(this._isIdProvider(r, e) || t && (this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl), e) || this._isIdProvider(t.restBaseUrl, e)) || L(r, e, !0)));
  }
  _checkProtocol(e, t, r, i) {
    let s = !0;
    const n = i ? t.adminTokenServiceUrl : t.tokenServiceUrl;
    return n.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && Qe(n) && (s = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e, serverInfo: t }), !s) && r(new T("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection.")), s;
  }
  _enqueue(e, t, r, i, s, n) {
    return i || (i = Z()), i.resUrl_ = e, i.sinfo_ = t, i.options_ = r, i.admin_ = s, i.refresh_ = n, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(i)) : this._xoReqs.push(i) : this._doSignIn(i), i.promise;
  }
  _doSignIn(e) {
    this._busy = e, this._rejectOnPersistedPageShow = !1;
    const t = (a) => {
      const u = e.options_ && e.options_.resource, f = e.resUrl_, h = e.refresh_;
      let v = !1;
      this.credentials.indexOf(a) === -1 && (h && this.credentials.indexOf(h) !== -1 ? (h.userId = a.userId, h.token = a.token, h.expires = a.expires, h.validity = a.validity, h.ssl = a.ssl, h.creationTime = a.creationTime, v = !0, a = h) : this.credentials.push(a)), a.resources || (a.resources = []), a.resources.includes(u || f) || a.resources.push(u || f), a.scope = this._isServerRsrc(f) ? "server" : "portal", a.emitTokenChange();
      const y = this._soReqs, w = {};
      this._soReqs = [], y.forEach((I) => {
        if (!this._isIdenticalService(f, I.resUrl_)) {
          const b = this._getSuffix(I.resUrl_);
          w[b] || (w[b] = !0, a.resources.push(I.resUrl_));
        }
      }), e.resolve(a), y.forEach((I) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(f), I.resUrl_) ? I.resolve(a) : this._soReqs.push(I);
      }), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, v || this.emit("credential-create", { credential: a }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r = (a) => {
      e.reject(a), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, i = (a, u, f, h) => {
      var v, y;
      const w = e.sinfo_, I = !e.options_ || e.options_.prompt !== !1, b = w.hasPortal && this._findOAuthInfo(e.resUrl_);
      let x, B;
      if (a)
        t(new k({ userId: a, server: w.server, token: f || null, expires: h != null ? Number(h) : null, ssl: !!u }));
      else if (window !== window.parent && (v = this._appUrlObj.query) != null && v["arcgis-auth-origin"] && (y = this._appUrlObj.query) != null && y["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e.resUrl_)) {
        var H;
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const _ = he(window, "message", (c) => {
          c.source === window.parent && c.data && (c.data.type === "arcgis:auth:credential" ? (_.remove(), c.data.credential.expires < Date.now() ? r(new T("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t(new k(c.data.credential))) : c.data.type === "arcgis:auth:error" && (_.remove(), c.data.error.name === "tokenExpiredError" ? r(new T("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r(T.fromJSON(c.data.error))));
        });
        Y((H = e.options_) == null ? void 0 : H.signal, () => {
          _.remove();
        });
      } else if (b) {
        let _ = b._oAuthCred;
        if (!_) {
          const c = new me(b, ie), d = new me(b, ne);
          c.isValid() && d.isValid() ? c.expires > d.expires ? (_ = c, d.destroy()) : (_ = d, c.destroy()) : _ = c.isValid() ? c : d, b._oAuthCred = _;
        }
        if (_.isValid()) {
          x = new k({ userId: _.userId, server: w.server, token: _.token, expires: _.expires, ssl: _.ssl, _oAuthCred: _ });
          const c = b.appId !== _.appId && this._doPortalSignIn(e.resUrl_);
          c || _.refreshToken ? (e._pendingDfd = _.refreshToken ? this._getOAuthToken(w.server, _.refreshToken, _.appId).then((d) => (x.expires = Date.now() + 1e3 * d.expires_in, x.token = d.access_token, x)) : Promise.resolve(x), e._pendingDfd.then((d) => c ? this._exchangeToken(d.server, b.appId, d.token).then((S) => (d.token = S, d)).catch(() => d) : d).then((d) => {
            t(d);
          }).catch(() => {
            _.destroy(), i();
          })) : t(x);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(b.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === _.stateUID && _.codeVerifier)) {
          const c = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e._pendingDfd = this._processOAuthResponseParams(c, b, w).then((d) => {
            t(d);
          }).catch(r);
        } else {
          const c = () => {
            I ? e._pendingDfd = this.oAuthSignIn(e.resUrl_, w, b, e.options_).then(t, r) : (B = new T("identity-manager:not-authenticated", "User is not signed in."), r(B));
          };
          this._doPortalSignIn(e.resUrl_) ? e._pendingDfd = this._getPlatformSelf(w.server, b.appId).then((d) => {
            L(d.portalUrl, this._appOrigin, !0) ? (x = new k({ userId: d.username, server: w.server, expires: Date.now() + 1e3 * d.expires_in, token: d.token }), t(x)) : c();
          }).catch(c) : c();
        }
      } else if (I) {
        if (this._checkProtocol(e.resUrl_, w, r, e.admin_)) {
          let _ = e.options_;
          e.admin_ && (_ = _ || {}, _.isAdmin = !0), e._pendingDfd = this.signIn(e.resUrl_, w, _).then(t, r);
        }
      } else
        B = new T("identity-manager:not-authenticated", "User is not signed in."), r(B);
    }, s = () => {
      const a = e.sinfo_, u = a.owningSystemUrl, f = e.options_;
      let h, v, y, w;
      if (f && (h = f.token, v = f.error, y = f.prompt), w = this._findCredential(u, { token: h, resource: e.resUrl_ }), !w) {
        for (const I of this.credentials)
          if (this._isIdProvider(u, I.server)) {
            w = I;
            break;
          }
      }
      if (w) {
        const I = this.findCredential(e.resUrl_, w.userId);
        if (I)
          t(I);
        else if (ye(a, this._legacyFed)) {
          const b = w.toJSON();
          b.server = a.server, b.resources = null, t(new k(b));
        } else
          (e._pendingDfd = this.generateToken(this.findServerInfo(w.server), null, { serverUrl: e.resUrl_, token: w.token, signal: e.options_.signal, ssl: w.ssl })).then((b) => {
            t(new k({ userId: w.userId, server: a.server, token: b.token, expires: b.expires != null ? Number(b.expires) : null, ssl: !!b.ssl, isAdmin: e.admin_, validity: b.validity }));
          }, r);
      } else
        this._busy = null, h && (e.options_.token = null), (e._pendingDfd = this.getCredential(u.replace(/\/?$/, "/sharing"), { resource: e.resUrl_, owningTenant: a.owningTenant, signal: e.options_.signal, token: h, error: v, prompt: y })).then(() => {
          this._enqueue(e.resUrl_, e.sinfo_, e.options_, e, e.admin_);
        }, (I) => {
          e.resUrl_ = e.sinfo_ = e.refresh_ = null, e.reject(I);
        });
    };
    this._errbackFunc = r;
    const n = e.sinfo_.owningSystemUrl, l = this._isServerRsrc(e.resUrl_), p = e.sinfo_._restInfoPms;
    p ? p.promise.then((a) => {
      const u = e.sinfo_;
      if (u._restInfoPms) {
        u.adminTokenServiceUrl = u._restInfoPms.adminUrl, u._restInfoPms = null, u.tokenServiceUrl = ee("authInfo.tokenServicesUrl", a) || ee("authInfo.tokenServiceUrl", a) || ee("tokenServiceUrl", a), u.shortLivedTokenValidity = ee("authInfo.shortLivedTokenValidity", a), u.currentVersion = a.currentVersion, u.owningTenant = a.owningTenant;
        const f = u.owningSystemUrl = a.owningSystemUrl;
        f && this._portals.push(f);
      }
      l && u.owningSystemUrl ? s() : i();
    }, () => {
      e.sinfo_._restInfoPms = null;
      const a = new T("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r(a);
    }) : l && n ? s() : e.sinfo_._selfReq ? e.sinfo_._selfReq.selfDfd.then((a) => {
      const u = {};
      let f, h, v, y;
      return a && (f = a.user && a.user.username, u.username = f, u.allSSL = a.allSSL, h = a.supportsOAuth, v = parseFloat(a.currentVersion), a.portalMode === "multitenant" && (y = a.customBaseUrl), e.sinfo_.currentVersion = v), e.sinfo_.webTierAuth = !!f, f && this.normalizeWebTierAuth ? this.generateToken(e.sinfo_, null, { ssl: u.allSSL }).catch(() => null).then((w) => (u.portalToken = w && w.token, u.tokenExpiration = w && w.expires, u)) : !f && h && v >= 4.4 && !this._findOAuthInfo(e.resUrl_) ? this._generateOAuthInfo({ portalUrl: e.sinfo_.server, customBaseUrl: y, owningTenant: e.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => u) : u;
    }).catch(() => null).then((a) => {
      e.sinfo_._selfReq = null, a ? i(a.username, a.allSSL, a.portalToken, a.tokenExpiration) : i();
    }) : i();
  }
  _generateOAuthInfo(e) {
    let t, r, i = e.portalUrl;
    const s = e.customBaseUrl, n = e.owningTenant, l = !this.defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (l) {
      r = window.location.href;
      let p = r.indexOf("?");
      p > -1 && (r = r.slice(0, p)), p = r.search(/\/(apps|home)\//), r = p > -1 ? r.slice(0, p) : null;
    }
    return l && r ? (this._hasTestedIfAppIsOnPortal = !0, t = F(r + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this.defaultOAuthInfo = new Oe({ appId: "arcgisonline", popupCallbackUrl: r + "/home/oauth-callback.html" });
    })) : t = Promise.resolve(), t.then(() => {
      if (this.defaultOAuthInfo)
        return i = i.replace(/^http:/i, "https:"), F(i + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: n, client_id: this.defaultOAuthInfo.appId, redirect_uri: Ie(this.defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((p) => {
          if (p.data.valid) {
            const a = this.defaultOAuthInfo.clone();
            p.data.urlKey && s ? a.portalUrl = "https://" + p.data.urlKey.toLowerCase() + "." + s : a.portalUrl = i, a.popup = window !== window.top || !(L(i, this._appOrigin) || this._gwDomains.some((u) => u.regex.test(i) && u.regex.test(this._appOrigin))), this.oAuthInfos.push(a);
          }
        });
    });
  }
  _doOAuthSignIn(e, t, r, i) {
    const s = r._oAuthCred, n = { portalUrl: r.portalUrl };
    !r.popup && r.preserveUrlHash && window.location.hash && (n.hash = window.location.hash), s.stateUID && (n.uid = s.stateUID);
    const l = { client_id: r.appId, response_type: s.codeVerifier ? "code" : "token", state: JSON.stringify(n), expiration: r.expiration, locale: r.locale, redirect_uri: this._getRedirectURI(r, !!s.codeVerifier) };
    r.forceLogin && (l.force_login = !0), r.forceUserId && r.userId && (l.prepopulatedusername = r.userId), !r.popup && this._doPortalSignIn(e) && (l.redirectToUserOrgUrl = !0), s.codeVerifier && (l.code_challenge = i || s.codeVerifier, l.code_challenge_method = i ? "S256" : "plain");
    const p = r.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", a = p + "?" + Se(l);
    if (r.popup) {
      const u = window.open(a, "esriJSAPIOAuth", r.popupWindowFeatures);
      if (u)
        u.focus(), this._oAuthDfd.oAuthWin_ = u, this._oAuthIntervalId = setInterval(() => {
          if (u.closed) {
            clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
            const f = this._oAuthDfd;
            if (f) {
              const h = new T("identity-manager:user-aborted", "ABORTED");
              f.reject(h);
            }
          }
        }, 500), this._oAuthOnPopupHandle = he(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (f) => {
          f.type === "arcgis:auth:hash" ? this.setOAuthResponseHash(f.detail) : this._setOAuthResponseQueryString(f.detail);
        });
      else {
        const f = new T("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(f);
      }
    } else
      this._rejectOnPersistedPageShow = !0, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: l, authorizeUrl: p, resourceUrl: e, serverInfo: t, oAuthInfo: r }) : window.location.href = a;
  }
  _getRedirectURI(e, t) {
    const r = window.location.href.replace(/#.*$/, "");
    if (e.popup)
      return Ie(e.popupCallbackUrl);
    if (t) {
      const i = le(r);
      return i.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((s) => {
        delete i.query[s];
      }), Ze(i.path, i.query);
    }
    return r;
  }
}
Me.prototype.declaredClass = "geoscene.identity.IdentityManagerBase";
let k = class extends De.EventedAccessor {
  constructor(o) {
    super(o), this._oAuthCred = null, this.tokenRefreshBuffer = 2, o && o._oAuthCred && (this._oAuthCred = o._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const o = A.findServerInfo(this.server), e = o && o.owningSystemUrl, t = !!e && this.scope === "server", r = t && ye(o, A._legacyFed), i = o.webTierAuth, s = i && A.normalizeWebTierAuth, n = se[this.server], l = n && n[this.userId];
    let p, a = this.resources && this.resources[0], u = t && A.findServerInfo(e), f = { username: this.userId, password: l };
    if (i && !s)
      return;
    t && !u && A.serverInfos.some((v) => (A._isIdProvider(e, v.server) && (u = v), !!u));
    const h = u && A.findCredential(u.server, this.userId);
    if (!t || h) {
      if (!r) {
        if (t)
          p = { serverUrl: a, token: h && h.token, ssl: h && h.ssl };
        else if (s)
          f = null, p = { ssl: this.ssl };
        else {
          if (!l) {
            let v;
            return a && (a = A._sanitizeUrl(a), this._enqueued = 1, v = A._enqueue(a, o, null, null, this.isAdmin, this), v.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), v;
          }
          this.isAdmin && (p = { isAdmin: !0 });
        }
        return A.generateToken(t ? u : o, t ? null : f, p).then((v) => {
          this.token = v.token, this.expires = v.expires != null ? Number(v.expires) : null, this.creationTime = Date.now(), this.validity = v.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      h.refreshToken();
    }
  }
  refreshServerTokens() {
    this.scope === "portal" && A.credentials.forEach((o) => {
      const e = A.findServerInfo(o.server), t = e && e.owningSystemUrl;
      o !== this && o.userId === this.userId && t && o.scope === "server" && (A._hasSameServerInstance(this.server, t) || A._isIdProvider(t, this.server)) && (ye(e, A._legacyFed) ? (o.token = this.token, o.expires = this.expires, o.creationTime = this.creationTime, o.validity = this.validity, o.emitTokenChange()) : o.refreshToken());
    });
  }
  emitTokenChange(o) {
    clearTimeout(this._refreshTimer);
    const e = this.server && A.findServerInfo(this.server), t = e && e.owningSystemUrl, r = t && A.findServerInfo(t);
    o === !1 || t && this.scope !== "portal" && (!r || !r.webTierAuth || A.normalizeWebTierAuth) || this.expires == null && this.validity == null || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const o = A.credentials.indexOf(this);
    o > -1 && A.credentials.splice(o, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const o = Ne({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), e = this.resources;
    return e && e.length > 0 && (o.resources = e.slice()), o;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const o = 6e4 * this.tokenRefreshBuffer, e = 2 ** 31 - 1;
    let t = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    t < 0 ? t = 0 : t > e && (t = e), this._refreshTimer = setTimeout(this.refreshToken.bind(this), t > o ? t - o : t);
  }
};
g([m()], k.prototype, "creationTime", void 0), g([m()], k.prototype, "expires", void 0), g([m()], k.prototype, "isAdmin", void 0), g([m()], k.prototype, "oAuthState", void 0), g([m()], k.prototype, "resources", void 0), g([m()], k.prototype, "scope", void 0), g([m()], k.prototype, "server", void 0), g([m()], k.prototype, "ssl", void 0), g([m()], k.prototype, "token", void 0), g([m()], k.prototype, "tokenRefreshBuffer", void 0), g([m()], k.prototype, "userId", void 0), g([m()], k.prototype, "validity", void 0), k = g([Q("geoscene.identity.Credential")], k);
class ze extends Me {
}
ze.prototype.declaredClass = "geoscene.identity.IdentityManager";
const St = new ze();
$e(St);
export {
  St as default
};
