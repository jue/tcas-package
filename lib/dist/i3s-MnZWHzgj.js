function fe(S, H) {
  for (var F = 0; F < H.length; F++) {
    const o = H[F];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const d in o)
        if (d !== "default" && !(d in S)) {
          const T = Object.getOwnPropertyDescriptor(o, d);
          T && Object.defineProperty(S, d, T.get ? T : { enumerable: !0, get: () => o[d] });
        }
    }
  }
  return Object.freeze(S);
}
var zn, pn, Mn, dn = { exports: {} };
zn = dn, pn = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, Mn = function(S) {
  var H, F, o = (S = S || {}) !== void 0 ? S : {};
  o.ready = new Promise(function(n, r) {
    H = n, F = r;
  });
  var d, T = {};
  for (d in o)
    o.hasOwnProperty(d) && (T[d] = o[d]);
  var vn = typeof window == "object", q = typeof importScripts == "function";
  typeof process == "object" && typeof process.versions == "object" && process.versions.node;
  var rn, C = "";
  function Bn(n) {
    return o.locateFile ? o.locateFile(n, C) : C + n;
  }
  (vn || q) && (q ? C = self.location.href : typeof document < "u" && document.currentScript && (C = document.currentScript.src), pn && (C = pn), C = C.indexOf("blob:") !== 0 ? C.substr(0, C.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", q && (rn = function(n) {
    var r = new XMLHttpRequest();
    return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
  }));
  var V, en, Nn = o.print || console.log.bind(console), U = o.printErr || console.warn.bind(console);
  for (d in T)
    T.hasOwnProperty(d) && (o[d] = T[d]);
  T = null, o.arguments, o.thisProgram, o.quit, o.wasmBinary && (V = o.wasmBinary), o.noExitRuntime, typeof WebAssembly != "object" && G("no native wasm support detected");
  var hn = !1, mn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function gn(n, r, e) {
    for (var t = r + e, a = r; n[a] && !(a >= t); )
      ++a;
    if (a - r > 16 && n.subarray && mn)
      return mn.decode(n.subarray(r, a));
    for (var u = ""; r < a; ) {
      var c = n[r++];
      if (128 & c) {
        var i = 63 & n[r++];
        if ((224 & c) != 192) {
          var f = 63 & n[r++];
          if ((c = (240 & c) == 224 ? (15 & c) << 12 | i << 6 | f : (7 & c) << 18 | i << 12 | f << 6 | 63 & n[r++]) < 65536)
            u += String.fromCharCode(c);
          else {
            var s = c - 65536;
            u += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s);
          }
        } else
          u += String.fromCharCode((31 & c) << 6 | i);
      } else
        u += String.fromCharCode(c);
    }
    return u;
  }
  function yn(n, r) {
    return n ? gn(v, n, r) : "";
  }
  function qn(n, r, e, t) {
    if (!(t > 0))
      return 0;
    for (var a = e, u = e + t - 1, c = 0; c < n.length; ++c) {
      var i = n.charCodeAt(c);
      if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++c)), i <= 127) {
        if (e >= u)
          break;
        r[e++] = i;
      } else if (i <= 2047) {
        if (e + 1 >= u)
          break;
        r[e++] = 192 | i >> 6, r[e++] = 128 | 63 & i;
      } else if (i <= 65535) {
        if (e + 2 >= u)
          break;
        r[e++] = 224 | i >> 12, r[e++] = 128 | i >> 6 & 63, r[e++] = 128 | 63 & i;
      } else {
        if (e + 3 >= u)
          break;
        r[e++] = 240 | i >> 18, r[e++] = 128 | i >> 12 & 63, r[e++] = 128 | i >> 6 & 63, r[e++] = 128 | 63 & i;
      }
    }
    return r[e] = 0, e - a;
  }
  function Ln(n, r, e) {
    return qn(n, v, r, e);
  }
  function Gn(n) {
    for (var r = 0, e = 0; e < n.length; ++e) {
      var t = n.charCodeAt(e);
      t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & n.charCodeAt(++e)), t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
    }
    return r;
  }
  var tn, x, v, O, L, p, P, _n, wn, bn, An = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
  function Jn(n, r) {
    for (var e = n, t = e >> 1, a = t + r / 2; !(t >= a) && L[t]; )
      ++t;
    if ((e = t << 1) - n > 32 && An)
      return An.decode(v.subarray(n, e));
    for (var u = "", c = 0; !(c >= r / 2); ++c) {
      var i = O[n + 2 * c >> 1];
      if (i == 0)
        break;
      u += String.fromCharCode(i);
    }
    return u;
  }
  function Xn(n, r, e) {
    if (e === void 0 && (e = 2147483647), e < 2)
      return 0;
    for (var t = r, a = (e -= 2) < 2 * n.length ? e / 2 : n.length, u = 0; u < a; ++u) {
      var c = n.charCodeAt(u);
      O[r >> 1] = c, r += 2;
    }
    return O[r >> 1] = 0, r - t;
  }
  function Yn(n) {
    return 2 * n.length;
  }
  function Zn(n, r) {
    for (var e = 0, t = ""; !(e >= r / 4); ) {
      var a = p[n + 4 * e >> 2];
      if (a == 0)
        break;
      if (++e, a >= 65536) {
        var u = a - 65536;
        t += String.fromCharCode(55296 | u >> 10, 56320 | 1023 & u);
      } else
        t += String.fromCharCode(a);
    }
    return t;
  }
  function $n(n, r, e) {
    if (e === void 0 && (e = 2147483647), e < 4)
      return 0;
    for (var t = r, a = t + e - 4, u = 0; u < n.length; ++u) {
      var c = n.charCodeAt(u);
      if (c >= 55296 && c <= 57343 && (c = 65536 + ((1023 & c) << 10) | 1023 & n.charCodeAt(++u)), p[r >> 2] = c, (r += 4) + 4 > a)
        break;
    }
    return p[r >> 2] = 0, r - t;
  }
  function Kn(n) {
    for (var r = 0, e = 0; e < n.length; ++e) {
      var t = n.charCodeAt(e);
      t >= 55296 && t <= 57343 && ++e, r += 4;
    }
    return r;
  }
  function Qn(n, r) {
    return n % r > 0 && (n += r - n % r), n;
  }
  function Tn(n) {
    tn = n, o.HEAP8 = x = new Int8Array(n), o.HEAP16 = O = new Int16Array(n), o.HEAP32 = p = new Int32Array(n), o.HEAPU8 = v = new Uint8Array(n), o.HEAPU16 = L = new Uint16Array(n), o.HEAPU32 = P = new Uint32Array(n), o.HEAPF32 = _n = new Float32Array(n), o.HEAPF64 = wn = new Float64Array(n);
  }
  o.INITIAL_MEMORY;
  var Cn = [], Pn = [], kn = [];
  function nr() {
    if (o.preRun)
      for (typeof o.preRun == "function" && (o.preRun = [o.preRun]); o.preRun.length; )
        tr(o.preRun.shift());
    on(Cn);
  }
  function rr() {
    on(Pn);
  }
  function er() {
    if (o.postRun)
      for (typeof o.postRun == "function" && (o.postRun = [o.postRun]); o.postRun.length; )
        ir(o.postRun.shift());
    on(kn);
  }
  function tr(n) {
    Cn.unshift(n);
  }
  function or(n) {
    Pn.unshift(n);
  }
  function ir(n) {
    kn.unshift(n);
  }
  var j = 0, z = null;
  function ar(n) {
    j++, o.monitorRunDependencies && o.monitorRunDependencies(j);
  }
  function ur(n) {
    if (j--, o.monitorRunDependencies && o.monitorRunDependencies(j), j == 0 && z) {
      var r = z;
      z = null, r();
    }
  }
  function G(n) {
    o.onAbort && o.onAbort(n), U(n = "Aborted(" + n + ")"), hn = !0, n += ". Build with -s ASSERTIONS=1 for more info.";
    var r = new WebAssembly.RuntimeError(n);
    throw F(r), r;
  }
  o.preloadedImages = {}, o.preloadedAudios = {};
  var A, cr = "data:application/octet-stream;base64,";
  function En(n) {
    return n.startsWith(cr);
  }
  function Wn(n) {
    try {
      if (n == A && V)
        return new Uint8Array(V);
      if (rn)
        return rn(n);
      throw "both async and sync fetching of the wasm failed";
    } catch (r) {
      G(r);
    }
  }
  function fr() {
    return V || !vn && !q || typeof fetch != "function" ? Promise.resolve().then(function() {
      return Wn(A);
    }) : fetch(A, { credentials: "same-origin" }).then(function(n) {
      if (!n.ok)
        throw "failed to load wasm binary file at '" + A + "'";
      return n.arrayBuffer();
    }).catch(function() {
      return Wn(A);
    });
  }
  function sr() {
    var n = { env: Hn, wasi_snapshot_preview1: Hn };
    function r(u, c) {
      var i = u.exports;
      o.asm = i, Tn((en = o.asm.memory).buffer), bn = o.asm.__indirect_function_table, or(o.asm.__wasm_call_ctors), ur();
    }
    function e(u) {
      r(u.instance);
    }
    function t(u) {
      return fr().then(function(c) {
        return WebAssembly.instantiate(c, n);
      }).then(function(c) {
        return c;
      }).then(u, function(c) {
        U("failed to asynchronously prepare wasm: " + c), G(c);
      });
    }
    function a() {
      return V || typeof WebAssembly.instantiateStreaming != "function" || En(A) || typeof fetch != "function" ? t(e) : fetch(A, { credentials: "same-origin" }).then(function(u) {
        return WebAssembly.instantiateStreaming(u, n).then(e, function(c) {
          return U("wasm streaming compile failed: " + c), U("falling back to ArrayBuffer instantiation"), t(e);
        });
      });
    }
    if (ar(), o.instantiateWasm)
      try {
        return o.instantiateWasm(n, r);
      } catch (u) {
        return U("Module.instantiateWasm callback failed with error: " + u), !1;
      }
    return a().catch(F), {};
  }
  function on(n) {
    for (; n.length > 0; ) {
      var r = n.shift();
      if (typeof r != "function") {
        var e = r.func;
        typeof e == "number" ? r.arg === void 0 ? M(e)() : M(e)(r.arg) : e(r.arg === void 0 ? null : r.arg);
      } else
        r(o);
    }
  }
  En(A = "i3s.wasm") || (A = Bn(A));
  var J = [];
  function M(n) {
    var r = J[n];
    return r || (n >= J.length && (J.length = n + 1), J[n] = r = bn.get(n)), r;
  }
  function lr(n, r) {
    M(n)(r);
  }
  function pr(n) {
    return nn(n + 16) + 16;
  }
  function le(n, r) {
  }
  function dr(n, r) {
    return void 0;
  }
  function vr(n) {
    this.excPtr = n, this.ptr = n - 16, this.set_type = function(r) {
      p[this.ptr + 4 >> 2] = r;
    }, this.get_type = function() {
      return p[this.ptr + 4 >> 2];
    }, this.set_destructor = function(r) {
      p[this.ptr + 8 >> 2] = r;
    }, this.get_destructor = function() {
      return p[this.ptr + 8 >> 2];
    }, this.set_refcount = function(r) {
      p[this.ptr >> 2] = r;
    }, this.set_caught = function(r) {
      r = r ? 1 : 0, x[this.ptr + 12 >> 0] = r;
    }, this.get_caught = function() {
      return x[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(r) {
      r = r ? 1 : 0, x[this.ptr + 13 >> 0] = r;
    }, this.get_rethrown = function() {
      return x[this.ptr + 13 >> 0] != 0;
    }, this.init = function(r, e) {
      this.set_type(r), this.set_destructor(e), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
    }, this.add_ref = function() {
      var r = p[this.ptr >> 2];
      p[this.ptr >> 2] = r + 1;
    }, this.release_ref = function() {
      var r = p[this.ptr >> 2];
      return p[this.ptr >> 2] = r - 1, r === 1;
    };
  }
  function hr(n, r, e) {
    throw new vr(n).init(r, e), n;
  }
  var X = {};
  function Rn(n) {
    for (; n.length; ) {
      var r = n.pop();
      n.pop()(r);
    }
  }
  function Y(n) {
    return this.fromWireType(P[n >> 2]);
  }
  var D = {}, I = {}, Z = {}, mr = 48, gr = 57;
  function yr(n) {
    if (n === void 0)
      return "_unknown";
    var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r >= mr && r <= gr ? "_" + n : n;
  }
  function _r(n, r) {
    return n = yr(n), function() {
      return r.apply(this, arguments);
    };
  }
  function an(n, r) {
    var e = _r(r, function(t) {
      this.name = r, this.message = t;
      var a = new Error(t).stack;
      a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.toString = function() {
      return this.message === void 0 ? this.name : this.name + ": " + this.message;
    }, e;
  }
  var Sn = void 0;
  function Fn(n) {
    throw new Sn(n);
  }
  function xn(n, r, e) {
    function t(i) {
      var f = e(i);
      f.length !== n.length && Fn("Mismatched type converter count");
      for (var s = 0; s < n.length; ++s)
        k(n[s], f[s]);
    }
    n.forEach(function(i) {
      Z[i] = r;
    });
    var a = new Array(r.length), u = [], c = 0;
    r.forEach(function(i, f) {
      I.hasOwnProperty(i) ? a[f] = I[i] : (u.push(i), D.hasOwnProperty(i) || (D[i] = []), D[i].push(function() {
        a[f] = I[i], ++c === u.length && t(a);
      }));
    }), u.length === 0 && t(a);
  }
  function wr(n) {
    var r = X[n];
    delete X[n];
    var e = r.rawConstructor, t = r.rawDestructor, a = r.fields;
    xn([n], a.map(function(u) {
      return u.getterReturnType;
    }).concat(a.map(function(u) {
      return u.setterArgumentType;
    })), function(u) {
      var c = {};
      return a.forEach(function(i, f) {
        var s = i.fieldName, l = u[f], g = i.getter, _ = i.getterContext, w = u[f + a.length], W = i.setter, b = i.setterContext;
        c[s] = { read: function(N) {
          return l.fromWireType(g(_, N));
        }, write: function(N, ln) {
          var R = [];
          W(b, N, w.toWireType(R, ln)), Rn(R);
        } };
      }), [{ name: r.name, fromWireType: function(i) {
        var f = {};
        for (var s in c)
          f[s] = c[s].read(i);
        return t(i), f;
      }, toWireType: function(i, f) {
        for (var s in c)
          if (!(s in f))
            throw new TypeError('Missing field:  "' + s + '"');
        var l = e();
        for (s in c)
          c[s].write(l, f[s]);
        return i !== null && i.push(t, l), l;
      }, argPackAdvance: 8, readValueFromPointer: Y, destructorFunction: t }];
    });
  }
  function br(n, r, e, t, a) {
  }
  function un(n) {
    switch (n) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + n);
    }
  }
  function Ar() {
    for (var n = new Array(256), r = 0; r < 256; ++r)
      n[r] = String.fromCharCode(r);
    jn = n;
  }
  var jn = void 0;
  function h(n) {
    for (var r = "", e = n; v[e]; )
      r += jn[v[e++]];
    return r;
  }
  var In = void 0;
  function m(n) {
    throw new In(n);
  }
  function k(n, r, e) {
    if (e = e || {}, !("argPackAdvance" in r))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var t = r.name;
    if (n || m('type "' + t + '" must have a positive integer typeid pointer'), I.hasOwnProperty(n)) {
      if (e.ignoreDuplicateRegistrations)
        return;
      m("Cannot register type '" + t + "' twice");
    }
    if (I[n] = r, delete Z[n], D.hasOwnProperty(n)) {
      var a = D[n];
      delete D[n], a.forEach(function(u) {
        u();
      });
    }
  }
  function Tr(n, r, e, t, a) {
    var u = un(e);
    k(n, { name: r = h(r), fromWireType: function(c) {
      return !!c;
    }, toWireType: function(c, i) {
      return i ? t : a;
    }, argPackAdvance: 8, readValueFromPointer: function(c) {
      var i;
      if (e === 1)
        i = x;
      else if (e === 2)
        i = O;
      else {
        if (e !== 4)
          throw new TypeError("Unknown boolean type size: " + r);
        i = p;
      }
      return this.fromWireType(i[c >> u]);
    }, destructorFunction: null });
  }
  var cn = [], y = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
  function Un(n) {
    n > 4 && --y[n].refcount == 0 && (y[n] = void 0, cn.push(n));
  }
  function Cr() {
    for (var n = 0, r = 5; r < y.length; ++r)
      y[r] !== void 0 && ++n;
    return n;
  }
  function Pr() {
    for (var n = 5; n < y.length; ++n)
      if (y[n] !== void 0)
        return y[n];
    return null;
  }
  function kr() {
    o.count_emval_handles = Cr, o.get_first_emval = Pr;
  }
  var $ = { toValue: function(n) {
    return n || m("Cannot use deleted val. handle = " + n), y[n].value;
  }, toHandle: function(n) {
    switch (n) {
      case void 0:
        return 1;
      case null:
        return 2;
      case !0:
        return 3;
      case !1:
        return 4;
      default:
        var r = cn.length ? cn.pop() : y.length;
        return y[r] = { refcount: 1, value: n }, r;
    }
  } };
  function Er(n, r) {
    k(n, { name: r = h(r), fromWireType: function(e) {
      var t = $.toValue(e);
      return Un(e), t;
    }, toWireType: function(e, t) {
      return $.toHandle(t);
    }, argPackAdvance: 8, readValueFromPointer: Y, destructorFunction: null });
  }
  function fn(n) {
    if (n === null)
      return "null";
    var r = typeof n;
    return r === "object" || r === "array" || r === "function" ? n.toString() : "" + n;
  }
  function Wr(n, r) {
    switch (r) {
      case 2:
        return function(e) {
          return this.fromWireType(_n[e >> 2]);
        };
      case 3:
        return function(e) {
          return this.fromWireType(wn[e >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n);
    }
  }
  function Rr(n, r, e) {
    var t = un(e);
    k(n, { name: r = h(r), fromWireType: function(a) {
      return a;
    }, toWireType: function(a, u) {
      if (typeof u != "number" && typeof u != "boolean")
        throw new TypeError('Cannot convert "' + fn(u) + '" to ' + this.name);
      return u;
    }, argPackAdvance: 8, readValueFromPointer: Wr(r, t), destructorFunction: null });
  }
  function Sr(n, r, e, t, a) {
    var u = r.length;
    u < 2 && m("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var c = r[1] !== null && e !== null, i = !1, f = 1; f < r.length; ++f)
      if (r[f] !== null && r[f].destructorFunction === void 0) {
        i = !0;
        break;
      }
    var s = r[0].name !== "void", l = u - 2, g = new Array(l), _ = [], w = [];
    return function() {
      var W;
      arguments.length !== l && m("function " + n + " called with " + arguments.length + " arguments, expected " + l + " args!"), w.length = 0, _.length = c ? 2 : 1, _[0] = a, c && (W = r[1].toWireType(w, this), _[1] = W);
      for (var b = 0; b < l; ++b)
        g[b] = r[b + 2].toWireType(w, arguments[b]), _.push(g[b]);
      function N(ln) {
        if (i)
          Rn(w);
        else
          for (var R = c ? 1 : 2; R < r.length; R++) {
            var ce = R === 1 ? W : g[R - 2];
            r[R].destructorFunction !== null && r[R].destructorFunction(ce);
          }
        if (s)
          return r[0].fromWireType(ln);
      }
      return N(t.apply(null, _));
    };
  }
  function Fr(n, r, e) {
    if (n[r].overloadTable === void 0) {
      var t = n[r];
      n[r] = function() {
        return n[r].overloadTable.hasOwnProperty(arguments.length) || m("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments);
      }, n[r].overloadTable = [], n[r].overloadTable[t.argCount] = t;
    }
  }
  function xr(n, r, e) {
    o.hasOwnProperty(n) ? ((e === void 0 || o[n].overloadTable !== void 0 && o[n].overloadTable[e] !== void 0) && m("Cannot register public name '" + n + "' twice"), Fr(o, n, n), o.hasOwnProperty(e) && m("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), o[n].overloadTable[e] = r) : (o[n] = r, e !== void 0 && (o[n].numArguments = e));
  }
  function jr(n, r) {
    for (var e = [], t = 0; t < n; t++)
      e.push(p[(r >> 2) + t]);
    return e;
  }
  function Ir(n, r, e) {
    o.hasOwnProperty(n) || Fn("Replacing nonexistant public symbol"), o[n].overloadTable !== void 0 && e !== void 0 ? o[n].overloadTable[e] = r : (o[n] = r, o[n].argCount = e);
  }
  function Ur(n, r, e) {
    var t = o["dynCall_" + n];
    return e && e.length ? t.apply(null, [r].concat(e)) : t.call(null, r);
  }
  function Or(n, r, e) {
    return n.includes("j") ? Ur(n, r, e) : M(r).apply(null, e);
  }
  function Dr(n, r) {
    var e = [];
    return function() {
      e.length = arguments.length;
      for (var t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      return Or(n, r, e);
    };
  }
  function B(n, r) {
    function e() {
      return n.includes("j") ? Dr(n, r) : M(r);
    }
    n = h(n);
    var t = e();
    return typeof t != "function" && m("unknown function pointer with signature " + n + ": " + r), t;
  }
  var On = void 0;
  function Dn(n) {
    var r = Vn(n), e = h(r);
    return E(r), e;
  }
  function Hr(n, r) {
    var e = [], t = {};
    function a(u) {
      t[u] || I[u] || (Z[u] ? Z[u].forEach(a) : (e.push(u), t[u] = !0));
    }
    throw r.forEach(a), new On(n + ": " + e.map(Dn).join([", "]));
  }
  function Vr(n, r, e, t, a, u) {
    var c = jr(r, e);
    n = h(n), a = B(t, a), xr(n, function() {
      Hr("Cannot call " + n + " due to unbound types", c);
    }, r - 1), xn([], c, function(i) {
      var f = [i[0], null].concat(i.slice(1));
      return Ir(n, Sr(n, f, null, a, u), r - 1), [];
    });
  }
  function zr(n, r, e) {
    switch (r) {
      case 0:
        return e ? function(t) {
          return x[t];
        } : function(t) {
          return v[t];
        };
      case 1:
        return e ? function(t) {
          return O[t >> 1];
        } : function(t) {
          return L[t >> 1];
        };
      case 2:
        return e ? function(t) {
          return p[t >> 2];
        } : function(t) {
          return P[t >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + n);
    }
  }
  function Mr(n, r, e, t, a) {
    r = h(r), a === -1 && (a = 4294967295);
    var u = un(e), c = function(s) {
      return s;
    };
    if (t === 0) {
      var i = 32 - 8 * e;
      c = function(s) {
        return s << i >>> i;
      };
    }
    var f = r.includes("unsigned");
    k(n, { name: r, fromWireType: c, toWireType: function(s, l) {
      if (typeof l != "number" && typeof l != "boolean")
        throw new TypeError('Cannot convert "' + fn(l) + '" to ' + this.name);
      if (l < t || l > a)
        throw new TypeError('Passing a number "' + fn(l) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + t + ", " + a + "]!");
      return f ? l >>> 0 : 0 | l;
    }, argPackAdvance: 8, readValueFromPointer: zr(r, u, t !== 0), destructorFunction: null });
  }
  function Br(n, r, e) {
    var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];
    function a(u) {
      var c = P, i = c[u >>= 2], f = c[u + 1];
      return new t(tn, f, i);
    }
    k(n, { name: e = h(e), fromWireType: a, argPackAdvance: 8, readValueFromPointer: a }, { ignoreDuplicateRegistrations: !0 });
  }
  function Nr(n, r) {
    var e = (r = h(r)) === "std::string";
    k(n, { name: r, fromWireType: function(t) {
      var a, u = P[t >> 2];
      if (e)
        for (var c = t + 4, i = 0; i <= u; ++i) {
          var f = t + 4 + i;
          if (i == u || v[f] == 0) {
            var s = yn(c, f - c);
            a === void 0 ? a = s : (a += "\0", a += s), c = f + 1;
          }
        }
      else {
        var l = new Array(u);
        for (i = 0; i < u; ++i)
          l[i] = String.fromCharCode(v[t + 4 + i]);
        a = l.join("");
      }
      return E(t), a;
    }, toWireType: function(t, a) {
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      var u = typeof a == "string";
      u || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || m("Cannot pass non-string to std::string");
      var c = (e && u ? function() {
        return Gn(a);
      } : function() {
        return a.length;
      })(), i = nn(4 + c + 1);
      if (P[i >> 2] = c, e && u)
        Ln(a, i + 4, c + 1);
      else if (u)
        for (var f = 0; f < c; ++f) {
          var s = a.charCodeAt(f);
          s > 255 && (E(i), m("String has UTF-16 code units that do not fit in 8 bits")), v[i + 4 + f] = s;
        }
      else
        for (f = 0; f < c; ++f)
          v[i + 4 + f] = a[f];
      return t !== null && t.push(E, i), i;
    }, argPackAdvance: 8, readValueFromPointer: Y, destructorFunction: function(t) {
      E(t);
    } });
  }
  function qr(n, r, e) {
    var t, a, u, c, i;
    e = h(e), r === 2 ? (t = Jn, a = Xn, c = Yn, u = function() {
      return L;
    }, i = 1) : r === 4 && (t = Zn, a = $n, c = Kn, u = function() {
      return P;
    }, i = 2), k(n, { name: e, fromWireType: function(f) {
      for (var s, l = P[f >> 2], g = u(), _ = f + 4, w = 0; w <= l; ++w) {
        var W = f + 4 + w * r;
        if (w == l || g[W >> i] == 0) {
          var b = t(_, W - _);
          s === void 0 ? s = b : (s += "\0", s += b), _ = W + r;
        }
      }
      return E(f), s;
    }, toWireType: function(f, s) {
      typeof s != "string" && m("Cannot pass non-string to C++ string type " + e);
      var l = c(s), g = nn(4 + l + r);
      return P[g >> 2] = l >> i, a(s, g + 4, l + r), f !== null && f.push(E, g), g;
    }, argPackAdvance: 8, readValueFromPointer: Y, destructorFunction: function(f) {
      E(f);
    } });
  }
  function Lr(n, r, e, t, a, u) {
    X[n] = { name: h(r), rawConstructor: B(e, t), rawDestructor: B(a, u), fields: [] };
  }
  function Gr(n, r, e, t, a, u, c, i, f, s) {
    X[n].fields.push({ fieldName: h(r), getterReturnType: e, getter: B(t, a), getterContext: u, setterArgumentType: c, setter: B(i, f), setterContext: s });
  }
  function Jr(n, r) {
    k(n, { isVoid: !0, name: r = h(r), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(e, t) {
    } });
  }
  function Xr(n) {
    n > 4 && (y[n].refcount += 1);
  }
  var Yr = {};
  function Zr(n) {
    var r = Yr[n];
    return r === void 0 ? h(n) : r;
  }
  function $r(n) {
    return $.toHandle(Zr(n));
  }
  function Kr(n, r) {
    var e = I[n];
    return e === void 0 && m(r + " has unknown type " + Dn(n)), e;
  }
  function Qr(n, r) {
    var e = (n = Kr(n, "_emval_take_value")).readValueFromPointer(r);
    return $.toHandle(e);
  }
  function ne() {
    G("");
  }
  function re(n, r, e) {
    v.copyWithin(n, r, r + e);
  }
  function ee(n) {
    try {
      return en.grow(n - tn.byteLength + 65535 >>> 16), Tn(en.buffer), 1;
    } catch {
    }
  }
  function te(n) {
    var r = v.length, e = 2147483648;
    if ((n >>>= 0) > e)
      return !1;
    for (var t = 1; t <= 4; t *= 2) {
      var a = r * (1 + 0.2 / t);
      if (a = Math.min(a, n + 100663296), ee(Math.min(e, Qn(Math.max(n, a), 65536))))
        return !0;
    }
    return !1;
  }
  var K = { mappings: {}, buffers: [null, [], []], printChar: function(n, r) {
    var e = K.buffers[n];
    r === 0 || r === 10 ? ((n === 1 ? Nn : U)(gn(e, 0)), e.length = 0) : e.push(r);
  }, varargs: void 0, get: function() {
    return K.varargs += 4, p[K.varargs - 4 >> 2];
  }, getStr: function(n) {
    return yn(n);
  }, get64: function(n, r) {
    return n;
  } };
  function oe(n) {
    return 0;
  }
  function ie(n, r, e, t, a) {
  }
  function ae(n, r, e, t) {
    for (var a = 0, u = 0; u < e; u++) {
      var c = p[r >> 2], i = p[r + 4 >> 2];
      r += 8;
      for (var f = 0; f < i; f++)
        K.printChar(n, v[c + f]);
      a += i;
    }
    return p[t >> 2] = a, 0;
  }
  function ue(n) {
  }
  Sn = o.InternalError = an(Error, "InternalError"), Ar(), In = o.BindingError = an(Error, "BindingError"), kr(), On = o.UnboundTypeError = an(Error, "UnboundTypeError");
  var Hn = { __call_sighandler: lr, __cxa_allocate_exception: pr, __cxa_atexit: dr, __cxa_throw: hr, _embind_finalize_value_object: wr, _embind_register_bigint: br, _embind_register_bool: Tr, _embind_register_emval: Er, _embind_register_float: Rr, _embind_register_function: Vr, _embind_register_integer: Mr, _embind_register_memory_view: Br, _embind_register_std_string: Nr, _embind_register_std_wstring: qr, _embind_register_value_object: Lr, _embind_register_value_object_field: Gr, _embind_register_void: Jr, _emval_decref: Un, _emval_incref: Xr, _emval_new_cstring: $r, _emval_take_value: Qr, abort: ne, emscripten_memcpy_big: re, emscripten_resize_heap: te, fd_close: oe, fd_seek: ie, fd_write: ae, setTempRet0: ue };
  sr(), o.___wasm_call_ctors = function() {
    return (o.___wasm_call_ctors = o.asm.__wasm_call_ctors).apply(null, arguments);
  };
  var Q, nn = o._malloc = function() {
    return (nn = o._malloc = o.asm.malloc).apply(null, arguments);
  }, E = o._free = function() {
    return (E = o._free = o.asm.free).apply(null, arguments);
  }, Vn = o.___getTypeName = function() {
    return (Vn = o.___getTypeName = o.asm.__getTypeName).apply(null, arguments);
  };
  function sn(n) {
    function r() {
      Q || (Q = !0, o.calledRun = !0, hn || (rr(), H(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), er()));
    }
    j > 0 || (nr(), j > 0 || (o.setStatus ? (o.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o.setStatus("");
      }, 1), r();
    }, 1)) : r()));
  }
  if (o.___embind_register_native_and_builtin_types = function() {
    return (o.___embind_register_native_and_builtin_types = o.asm.__embind_register_native_and_builtin_types).apply(null, arguments);
  }, o.___errno_location = function() {
    return (o.___errno_location = o.asm.__errno_location).apply(null, arguments);
  }, o.stackSave = function() {
    return (o.stackSave = o.asm.stackSave).apply(null, arguments);
  }, o.stackRestore = function() {
    return (o.stackRestore = o.asm.stackRestore).apply(null, arguments);
  }, o.stackAlloc = function() {
    return (o.stackAlloc = o.asm.stackAlloc).apply(null, arguments);
  }, o.dynCall_vij = function() {
    return (o.dynCall_vij = o.asm.dynCall_vij).apply(null, arguments);
  }, o.dynCall_jiji = function() {
    return (o.dynCall_jiji = o.asm.dynCall_jiji).apply(null, arguments);
  }, z = function n() {
    Q || sn(), Q || (z = n);
  }, o.run = sn, o.preInit)
    for (typeof o.preInit == "function" && (o.preInit = [o.preInit]); o.preInit.length > 0; )
      o.preInit.pop()();
  return sn(), S.ready;
}, zn.exports = Mn;
const se = dn.exports, pe = Object.freeze(fe({ __proto__: null, default: se }, [dn.exports]));
export {
  pe as i
};
