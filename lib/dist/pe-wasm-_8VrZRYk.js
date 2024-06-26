function E_(e, Q) {
  for (var B = 0; B < Q.length; B++) {
    const G = Q[B];
    if (typeof G != "string" && !Array.isArray(G)) {
      for (const Y in G)
        if (Y !== "default" && !(Y in e)) {
          const W = Object.getOwnPropertyDescriptor(G, Y);
          W && Object.defineProperty(e, Y, W.get ? W : { enumerable: !0, get: () => G[Y] });
        }
    }
  }
  return Object.freeze(e);
}
var Er, ie, br, Se = { exports: {} };
Er = Se, ie = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, typeof __filename < "u" && (ie = ie || __filename), br = function(e) {
  var Q, B;
  (e = (e = e || {}) !== void 0 ? e : {}).ready = new Promise(function(t, n) {
    Q = t, B = n;
  });
  var G, Y = {};
  for (G in e)
    e.hasOwnProperty(G) && (Y[G] = e[G]);
  var W, ae, se, V, k, fe = "./this.program", Ne = typeof window == "object", ee = typeof importScripts == "function", Or = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", F = "";
  function Tr(t) {
    return e.locateFile ? e.locateFile(t, F) : F + t;
  }
  Or ? (F = ee ? require("path").dirname(F) + "/" : __dirname + "/", W = function(t, n) {
    return V || (V = require("fs")), k || (k = require("path")), t = k.normalize(t), V.readFileSync(t, n ? null : "utf8");
  }, se = function(t) {
    var n = W(t, !0);
    return n.buffer || (n = new Uint8Array(n)), ue(n.buffer), n;
  }, ae = function(t, n, r) {
    V || (V = require("fs")), k || (k = require("path")), t = k.normalize(t), V.readFile(t, function(o, p) {
      o ? r(o) : n(p.buffer);
    });
  }, process.argv.length > 1 && (fe = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(t) {
    if (!(t instanceof a_))
      throw t;
  }), process.on("unhandledRejection", function(t) {
    throw t;
  }), e.inspect = function() {
    return "[Emscripten Module object]";
  }) : (Ne || ee) && (ee ? F = self.location.href : typeof document < "u" && document.currentScript && (F = document.currentScript.src), ie && (F = ie), F = F.indexOf("blob:") !== 0 ? F.substr(0, F.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", W = function(t) {
    var n = new XMLHttpRequest();
    return n.open("GET", t, !1), n.send(null), n.responseText;
  }, ee && (se = function(t) {
    var n = new XMLHttpRequest();
    return n.open("GET", t, !1), n.responseType = "arraybuffer", n.send(null), new Uint8Array(n.response);
  }), ae = function(t, n, r) {
    var o = new XMLHttpRequest();
    o.open("GET", t, !0), o.responseType = "arraybuffer", o.onload = function() {
      o.status == 200 || o.status == 0 && o.response ? n(o.response) : r();
    }, o.onerror = r, o.send(null);
  });
  var te, le, Sr = e.print || console.log.bind(console), J = e.printErr || console.warn.bind(console);
  for (G in Y)
    Y.hasOwnProperty(G) && (e[G] = Y[G]);
  function Nr(t, n, r) {
    switch ((n = n || "i8").charAt(n.length - 1) === "*" && (n = "i32"), n) {
      case "i1":
      case "i8":
        return H[t >> 0];
      case "i16":
        return ce[t >> 1];
      case "i32":
      case "i64":
        return c[t >> 2];
      case "float":
        return ge[t >> 2];
      case "double":
        return Number(Pe[t >> 3]);
      default:
        K("invalid type for getValue: " + n);
    }
    return null;
  }
  Y = null, e.arguments, e.thisProgram && (fe = e.thisProgram), e.quit, e.wasmBinary && (te = e.wasmBinary), e.noExitRuntime, typeof WebAssembly != "object" && K("no native wasm support detected");
  var he = !1;
  function ue(t, n) {
    t || K("Assertion failed: " + n);
  }
  var Me, H, ne, ce, c, ge, Pe, ve, De = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function Re(t, n, r) {
    for (var o = n + r, p = n; t[p] && !(p >= o); )
      ++p;
    if (p - n > 16 && t.subarray && De)
      return De.decode(t.subarray(n, p));
    for (var s = ""; n < p; ) {
      var u = t[n++];
      if (128 & u) {
        var g = 63 & t[n++];
        if ((224 & u) != 192) {
          var w = 63 & t[n++];
          if ((u = (240 & u) == 224 ? (15 & u) << 12 | g << 6 | w : (7 & u) << 18 | g << 12 | w << 6 | 63 & t[n++]) < 65536)
            s += String.fromCharCode(u);
          else {
            var pe = u - 65536;
            s += String.fromCharCode(55296 | pe >> 10, 56320 | 1023 & pe);
          }
        } else
          s += String.fromCharCode((31 & u) << 6 | g);
      } else
        s += String.fromCharCode(u);
    }
    return s;
  }
  function I(t, n) {
    return t ? Re(ne, t, n) : "";
  }
  function Ae(t, n, r, o) {
    if (!(o > 0))
      return 0;
    for (var p = r, s = r + o - 1, u = 0; u < t.length; ++u) {
      var g = t.charCodeAt(u);
      if (g >= 55296 && g <= 57343 && (g = 65536 + ((1023 & g) << 10) | 1023 & t.charCodeAt(++u)), g <= 127) {
        if (r >= s)
          break;
        n[r++] = g;
      } else if (g <= 2047) {
        if (r + 1 >= s)
          break;
        n[r++] = 192 | g >> 6, n[r++] = 128 | 63 & g;
      } else if (g <= 65535) {
        if (r + 2 >= s)
          break;
        n[r++] = 224 | g >> 12, n[r++] = 128 | g >> 6 & 63, n[r++] = 128 | 63 & g;
      } else {
        if (r + 3 >= s)
          break;
        n[r++] = 240 | g >> 18, n[r++] = 128 | g >> 12 & 63, n[r++] = 128 | g >> 6 & 63, n[r++] = 128 | 63 & g;
      }
    }
    return n[r] = 0, r - p;
  }
  function Ge(t) {
    for (var n = 0, r = 0; r < t.length; ++r) {
      var o = t.charCodeAt(r);
      o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & t.charCodeAt(++r)), o <= 127 ? ++n : n += o <= 2047 ? 2 : o <= 65535 ? 3 : 4;
    }
    return n;
  }
  function Ce(t) {
    var n = Ge(t) + 1, r = yr(n);
    return r && Ae(t, H, r, n), r;
  }
  function hr(t, n, r) {
    for (var o = 0; o < t.length; ++o)
      H[n++ >> 0] = t.charCodeAt(o);
    r || (H[n >> 0] = 0);
  }
  function Mr(t, n) {
    return t % n > 0 && (t += n - t % n), t;
  }
  function Ie(t) {
    Me = t, e.HEAP8 = H = new Int8Array(t), e.HEAP16 = ce = new Int16Array(t), e.HEAP32 = c = new Int32Array(t), e.HEAPU8 = ne = new Uint8Array(t), e.HEAPU16 = new Uint16Array(t), e.HEAPU32 = new Uint32Array(t), e.HEAPF32 = ge = new Float32Array(t), e.HEAPF64 = Pe = new Float64Array(t);
  }
  e.INITIAL_MEMORY;
  var je = [], Le = [], Ue = [];
  function vr() {
    if (e.preRun)
      for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
        Ar(e.preRun.shift());
    de(je);
  }
  function Dr() {
    de(Le);
  }
  function Rr() {
    if (e.postRun)
      for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; )
        Cr(e.postRun.shift());
    de(Ue);
  }
  function Ar(t) {
    je.unshift(t);
  }
  function Gr(t) {
    Le.unshift(t);
  }
  function Cr(t) {
    Ue.unshift(t);
  }
  var q = 0, re = null;
  function Ir(t) {
    q++, e.monitorRunDependencies && e.monitorRunDependencies(q);
  }
  function jr(t) {
    if (q--, e.monitorRunDependencies && e.monitorRunDependencies(q), q == 0 && re) {
      var n = re;
      re = null, n();
    }
  }
  function K(t) {
    e.onAbort && e.onAbort(t), J(t = "Aborted(" + t + ")"), he = !0, t += ". Build with -s ASSERTIONS=1 for more info.";
    var n = new WebAssembly.RuntimeError(t);
    throw B(n), n;
  }
  e.preloadedImages = {}, e.preloadedAudios = {};
  var j, Lr = "data:application/octet-stream;base64,";
  function Ye(t) {
    return t.startsWith(Lr);
  }
  function Fe(t) {
    return t.startsWith("file://");
  }
  function xe(t) {
    try {
      if (t == j && te)
        return new Uint8Array(te);
      if (se)
        return se(t);
      throw "both async and sync fetching of the wasm failed";
    } catch (n) {
      K(n);
    }
  }
  function Ur() {
    if (!te && (Ne || ee)) {
      if (typeof fetch == "function" && !Fe(j))
        return fetch(j, { credentials: "same-origin" }).then(function(t) {
          if (!t.ok)
            throw "failed to load wasm binary file at '" + j + "'";
          return t.arrayBuffer();
        }).catch(function() {
          return xe(j);
        });
      if (ae)
        return new Promise(function(t, n) {
          ae(j, function(r) {
            t(new Uint8Array(r));
          }, n);
        });
    }
    return Promise.resolve().then(function() {
      return xe(j);
    });
  }
  function Yr() {
    var t = { a: i_ };
    function n(s, u) {
      var g = s.exports;
      e.asm = g, Ie((le = e.asm.s).buffer), ve = e.asm.Xb, Gr(e.asm.t), jr();
    }
    function r(s) {
      n(s.instance);
    }
    function o(s) {
      return Ur().then(function(u) {
        return WebAssembly.instantiate(u, t);
      }).then(function(u) {
        return u;
      }).then(s, function(u) {
        J("failed to asynchronously prepare wasm: " + u), K(u);
      });
    }
    function p() {
      return te || typeof WebAssembly.instantiateStreaming != "function" || Ye(j) || Fe(j) || typeof fetch != "function" ? o(r) : fetch(j, { credentials: "same-origin" }).then(function(s) {
        return WebAssembly.instantiateStreaming(s, t).then(r, function(u) {
          return J("wasm streaming compile failed: " + u), J("falling back to ArrayBuffer instantiation"), o(r);
        });
      });
    }
    if (Ir(), e.instantiateWasm)
      try {
        return e.instantiateWasm(t, n);
      } catch (s) {
        return J("Module.instantiateWasm callback failed with error: " + s), !1;
      }
    return p().catch(B), {};
  }
  function de(t) {
    for (; t.length > 0; ) {
      var n = t.shift();
      if (typeof n != "function") {
        var r = n.func;
        typeof r == "number" ? n.arg === void 0 ? we(r)() : we(r)(n.arg) : r(n.arg === void 0 ? null : n.arg);
      } else
        n(e);
    }
  }
  Ye(j = "pe-wasm.wasm") || (j = Tr(j));
  var ye = [];
  function we(t) {
    var n = ye[t];
    return n || (t >= ye.length && (ye.length = t + 1), ye[t] = n = ve.get(t)), n;
  }
  function Fr() {
    var t = (/* @__PURE__ */ new Date()).getFullYear(), n = new Date(t, 0, 1), r = new Date(t, 6, 1), o = n.getTimezoneOffset(), p = r.getTimezoneOffset(), s = Math.max(o, p);
    function u(d_) {
      var dr = d_.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return dr ? dr[1] : "GMT";
    }
    c[fr() >> 2] = 60 * s, c[mr() >> 2] = +(o != p);
    var g = u(n), w = u(r), pe = Ce(g), lr = Ce(w);
    p < o ? (c[$() >> 2] = pe, c[$() + 4 >> 2] = lr) : (c[$() >> 2] = lr, c[$() + 4 >> 2] = pe);
  }
  function Ee() {
    Ee.called || (Ee.called = !0, Fr());
  }
  function xr(t, n) {
    Ee();
    var r = new Date(1e3 * c[t >> 2]);
    c[n >> 2] = r.getSeconds(), c[n + 4 >> 2] = r.getMinutes(), c[n + 8 >> 2] = r.getHours(), c[n + 12 >> 2] = r.getDate(), c[n + 16 >> 2] = r.getMonth(), c[n + 20 >> 2] = r.getFullYear() - 1900, c[n + 24 >> 2] = r.getDay();
    var o = new Date(r.getFullYear(), 0, 1), p = (r.getTime() - o.getTime()) / 864e5 | 0;
    c[n + 28 >> 2] = p, c[n + 36 >> 2] = -60 * r.getTimezoneOffset();
    var s = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), u = o.getTimezoneOffset(), g = 0 | (s != u && r.getTimezoneOffset() == Math.min(u, s));
    c[n + 32 >> 2] = g;
    var w = c[$() + (g ? 4 : 0) >> 2];
    return c[n + 40 >> 2] = w, n;
  }
  function wr(t, n) {
    return xr(t, n);
  }
  var X = { mappings: {}, buffers: [null, [], []], printChar: function(t, n) {
    var r = X.buffers[t];
    n === 0 || n === 10 ? ((t === 1 ? Sr : J)(Re(r, 0)), r.length = 0) : r.push(n);
  }, varargs: void 0, get: function() {
    return X.varargs += 4, c[X.varargs - 4 >> 2];
  }, getStr: function(t) {
    return I(t);
  }, get64: function(t, n) {
    return t;
  } };
  function Hr(t, n, r) {
    return X.varargs = r, 0;
  }
  function Xr(t, n, r) {
  }
  function zr(t, n, r) {
    return X.varargs = r, 0;
  }
  function Zr(t, n, r) {
    X.varargs = r;
  }
  function Br(t) {
  }
  function Wr(t, n) {
  }
  function qr(t) {
  }
  function Vr() {
    K("");
  }
  function kr(t, n, r) {
    ne.copyWithin(t, n, n + r);
  }
  function Jr(t) {
    try {
      return le.grow(t - Me.byteLength + 65535 >>> 16), Ie(le.buffer), 1;
    } catch {
    }
  }
  function Kr(t) {
    var n = ne.length, r = 2147483648;
    if ((t >>>= 0) > r)
      return !1;
    for (var o = 1; o <= 4; o *= 2) {
      var p = n * (1 + 0.2 / o);
      if (p = Math.min(p, t + 100663296), Jr(Math.min(r, Mr(Math.max(t, p), 65536))))
        return !0;
    }
    return !1;
  }
  var be = {};
  function $r() {
    return fe || "./this.program";
  }
  function _e() {
    if (!_e.strings) {
      var t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: $r() };
      for (var n in be)
        be[n] === void 0 ? delete t[n] : t[n] = be[n];
      var r = [];
      for (var n in t)
        r.push(n + "=" + t[n]);
      _e.strings = r;
    }
    return _e.strings;
  }
  function Qr(t, n) {
    var r = 0;
    return _e().forEach(function(o, p) {
      var s = n + r;
      c[t + 4 * p >> 2] = s, hr(o, s), r += o.length + 1;
    }), 0;
  }
  function e_(t, n) {
    var r = _e();
    c[t >> 2] = r.length;
    var o = 0;
    return r.forEach(function(p) {
      o += p.length + 1;
    }), c[n >> 2] = o, 0;
  }
  function t_(t) {
    return 0;
  }
  function n_(t, n, r, o) {
    var p = X.getStreamFromFD(t), s = X.doReadv(p, n, r);
    return c[o >> 2] = s, 0;
  }
  function r_(t, n, r, o, p) {
  }
  function __(t, n, r, o) {
    for (var p = 0, s = 0; s < r; s++) {
      var u = c[n >> 2], g = c[n + 4 >> 2];
      n += 8;
      for (var w = 0; w < g; w++)
        X.printChar(t, ne[u + w]);
      p += g;
    }
    return c[o >> 2] = p, 0;
  }
  function o_(t) {
    var n = Date.now() / 1e3 | 0;
    return t && (c[t >> 2] = n), n;
  }
  function p_(t, n, r) {
    var o = r > 0 ? r : Ge(t) + 1, p = new Array(o), s = Ae(t, p, 0, p.length);
    return n && (p.length = s), p;
  }
  var i_ = { o: wr, b: Hr, q: Xr, h: zr, d: Zr, e: Br, p: Wr, f: qr, l: Vr, j: kr, k: Kr, m: Qr, n: e_, a: t_, g: n_, i: r_, c: __, r: o_ };
  Yr(), e.___wasm_call_ctors = function() {
    return (e.___wasm_call_ctors = e.asm.t).apply(null, arguments);
  };
  var He = e._emscripten_bind_PeObject_getCode_0 = function() {
    return (He = e._emscripten_bind_PeObject_getCode_0 = e.asm.u).apply(null, arguments);
  }, Xe = e._emscripten_bind_PeObject_getName_1 = function() {
    return (Xe = e._emscripten_bind_PeObject_getName_1 = e.asm.v).apply(null, arguments);
  }, ze = e._emscripten_bind_PeObject_getType_0 = function() {
    return (ze = e._emscripten_bind_PeObject_getType_0 = e.asm.w).apply(null, arguments);
  }, Ze = e._emscripten_bind_PeCoordsys_getCode_0 = function() {
    return (Ze = e._emscripten_bind_PeCoordsys_getCode_0 = e.asm.x).apply(null, arguments);
  }, Be = e._emscripten_bind_PeCoordsys_getName_1 = function() {
    return (Be = e._emscripten_bind_PeCoordsys_getName_1 = e.asm.y).apply(null, arguments);
  }, We = e._emscripten_bind_PeCoordsys_getType_0 = function() {
    return (We = e._emscripten_bind_PeCoordsys_getType_0 = e.asm.z).apply(null, arguments);
  }, qe = e._emscripten_bind_VoidPtr___destroy___0 = function() {
    return (qe = e._emscripten_bind_VoidPtr___destroy___0 = e.asm.A).apply(null, arguments);
  }, Ve = e._emscripten_bind_PeDatum_getSpheroid_0 = function() {
    return (Ve = e._emscripten_bind_PeDatum_getSpheroid_0 = e.asm.B).apply(null, arguments);
  }, ke = e._emscripten_bind_PeDatum_getCode_0 = function() {
    return (ke = e._emscripten_bind_PeDatum_getCode_0 = e.asm.C).apply(null, arguments);
  }, Je = e._emscripten_bind_PeDatum_getName_1 = function() {
    return (Je = e._emscripten_bind_PeDatum_getName_1 = e.asm.D).apply(null, arguments);
  }, Ke = e._emscripten_bind_PeDatum_getType_0 = function() {
    return (Ke = e._emscripten_bind_PeDatum_getType_0 = e.asm.E).apply(null, arguments);
  }, $e = e._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function() {
    return ($e = e._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = e.asm.F).apply(null, arguments);
  }, Qe = e._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function() {
    return (Qe = e._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = e.asm.G).apply(null, arguments);
  }, et = e._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function() {
    return (et = e._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = e.asm.H).apply(null, arguments);
  }, tt = e._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function() {
    return (tt = e._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = e.asm.I).apply(null, arguments);
  }, nt = e._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function() {
    return (nt = e._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = e.asm.J).apply(null, arguments);
  }, rt = e._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function() {
    return (rt = e._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = e.asm.K).apply(null, arguments);
  }, _t = e._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function() {
    return (_t = e._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = e.asm.L).apply(null, arguments);
  }, ot = e._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function() {
    return (ot = e._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = e.asm.M).apply(null, arguments);
  }, pt = e._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function() {
    return (pt = e._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = e.asm.N).apply(null, arguments);
  }, it = e._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function() {
    return (it = e._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = e.asm.O).apply(null, arguments);
  }, at = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function() {
    return (at = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = e.asm.P).apply(null, arguments);
  }, st = e._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function() {
    return (st = e._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = e.asm.Q).apply(null, arguments);
  }, ut = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = function() {
    return (ut = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = e.asm.R).apply(null, arguments);
  }, ct = e._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = function() {
    return (ct = e._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = e.asm.S).apply(null, arguments);
  }, gt = e._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function() {
    return (gt = e._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = e.asm.T).apply(null, arguments);
  }, Pt = e._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = function() {
    return (Pt = e._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = e.asm.U).apply(null, arguments);
  }, yt = e._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = function() {
    return (yt = e._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = e.asm.V).apply(null, arguments);
  }, mt = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = function() {
    return (mt = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = e.asm.W).apply(null, arguments);
  }, ft = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = function() {
    return (ft = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = e.asm.X).apply(null, arguments);
  }, lt = e._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = function() {
    return (lt = e._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = e.asm.Y).apply(null, arguments);
  }, dt = e._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function() {
    return (dt = e._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = e.asm.Z).apply(null, arguments);
  }, Et = e._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function() {
    return (Et = e._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = e.asm._).apply(null, arguments);
  }, bt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = function() {
    return (bt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = e.asm.$).apply(null, arguments);
  }, Ot = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = function() {
    return (Ot = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = e.asm.aa).apply(null, arguments);
  }, Tt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = function() {
    return (Tt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = e.asm.ba).apply(null, arguments);
  }, St = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = function() {
    return (St = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = e.asm.ca).apply(null, arguments);
  }, Nt = e._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = function() {
    return (Nt = e._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = e.asm.da).apply(null, arguments);
  }, ht = e._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = function() {
    return (ht = e._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = e.asm.ea).apply(null, arguments);
  }, Mt = e._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = function() {
    return (Mt = e._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = e.asm.fa).apply(null, arguments);
  }, vt = e._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = function() {
    return (vt = e._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = e.asm.ga).apply(null, arguments);
  }, Dt = e._emscripten_bind_PeFactory_initialize_1 = function() {
    return (Dt = e._emscripten_bind_PeFactory_initialize_1 = e.asm.ha).apply(null, arguments);
  }, Rt = e._emscripten_bind_PeFactory_factoryByType_2 = function() {
    return (Rt = e._emscripten_bind_PeFactory_factoryByType_2 = e.asm.ia).apply(null, arguments);
  }, At = e._emscripten_bind_PeFactory_fromString_2 = function() {
    return (At = e._emscripten_bind_PeFactory_fromString_2 = e.asm.ja).apply(null, arguments);
  }, Gt = e._emscripten_bind_PeFactory_getCode_1 = function() {
    return (Gt = e._emscripten_bind_PeFactory_getCode_1 = e.asm.ka).apply(null, arguments);
  }, Ct = e._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function() {
    return (Ct = e._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = e.asm.la).apply(null, arguments);
  }, It = e._emscripten_bind_PeGCSExtent_getLLon_0 = function() {
    return (It = e._emscripten_bind_PeGCSExtent_getLLon_0 = e.asm.ma).apply(null, arguments);
  }, jt = e._emscripten_bind_PeGCSExtent_getSLat_0 = function() {
    return (jt = e._emscripten_bind_PeGCSExtent_getSLat_0 = e.asm.na).apply(null, arguments);
  }, Lt = e._emscripten_bind_PeGCSExtent_getRLon_0 = function() {
    return (Lt = e._emscripten_bind_PeGCSExtent_getRLon_0 = e.asm.oa).apply(null, arguments);
  }, Ut = e._emscripten_bind_PeGCSExtent_getNLat_0 = function() {
    return (Ut = e._emscripten_bind_PeGCSExtent_getNLat_0 = e.asm.pa).apply(null, arguments);
  }, Yt = e._emscripten_bind_PeGCSExtent___destroy___0 = function() {
    return (Yt = e._emscripten_bind_PeGCSExtent___destroy___0 = e.asm.qa).apply(null, arguments);
  }, Ft = e._emscripten_bind_PeGeogcs_getDatum_0 = function() {
    return (Ft = e._emscripten_bind_PeGeogcs_getDatum_0 = e.asm.ra).apply(null, arguments);
  }, xt = e._emscripten_bind_PeGeogcs_getPrimem_0 = function() {
    return (xt = e._emscripten_bind_PeGeogcs_getPrimem_0 = e.asm.sa).apply(null, arguments);
  }, wt = e._emscripten_bind_PeGeogcs_getUnit_0 = function() {
    return (wt = e._emscripten_bind_PeGeogcs_getUnit_0 = e.asm.ta).apply(null, arguments);
  }, Ht = e._emscripten_bind_PeGeogcs_getCode_0 = function() {
    return (Ht = e._emscripten_bind_PeGeogcs_getCode_0 = e.asm.ua).apply(null, arguments);
  }, Xt = e._emscripten_bind_PeGeogcs_getName_1 = function() {
    return (Xt = e._emscripten_bind_PeGeogcs_getName_1 = e.asm.va).apply(null, arguments);
  }, zt = e._emscripten_bind_PeGeogcs_getType_0 = function() {
    return (zt = e._emscripten_bind_PeGeogcs_getType_0 = e.asm.wa).apply(null, arguments);
  }, Zt = e._emscripten_bind_PeGeogtran_isEqual_1 = function() {
    return (Zt = e._emscripten_bind_PeGeogtran_isEqual_1 = e.asm.xa).apply(null, arguments);
  }, Bt = e._emscripten_bind_PeGeogtran_getGeogcs1_0 = function() {
    return (Bt = e._emscripten_bind_PeGeogtran_getGeogcs1_0 = e.asm.ya).apply(null, arguments);
  }, Wt = e._emscripten_bind_PeGeogtran_getGeogcs2_0 = function() {
    return (Wt = e._emscripten_bind_PeGeogtran_getGeogcs2_0 = e.asm.za).apply(null, arguments);
  }, qt = e._emscripten_bind_PeGeogtran_getParameters_0 = function() {
    return (qt = e._emscripten_bind_PeGeogtran_getParameters_0 = e.asm.Aa).apply(null, arguments);
  }, Vt = e._emscripten_bind_PeGeogtran_loadConstants_0 = function() {
    return (Vt = e._emscripten_bind_PeGeogtran_loadConstants_0 = e.asm.Ba).apply(null, arguments);
  }, kt = e._emscripten_bind_PeGeogtran_getCode_0 = function() {
    return (kt = e._emscripten_bind_PeGeogtran_getCode_0 = e.asm.Ca).apply(null, arguments);
  }, Jt = e._emscripten_bind_PeGeogtran_getName_1 = function() {
    return (Jt = e._emscripten_bind_PeGeogtran_getName_1 = e.asm.Da).apply(null, arguments);
  }, Kt = e._emscripten_bind_PeGeogtran_getType_0 = function() {
    return (Kt = e._emscripten_bind_PeGeogtran_getType_0 = e.asm.Ea).apply(null, arguments);
  }, $t = e._emscripten_bind_PeGTlistExtended_getGTlist_6 = function() {
    return ($t = e._emscripten_bind_PeGTlistExtended_getGTlist_6 = e.asm.Fa).apply(null, arguments);
  }, Qt = e._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = function() {
    return (Qt = e._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = e.asm.Ga).apply(null, arguments);
  }, en = e._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = function() {
    return (en = e._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = e.asm.Ha).apply(null, arguments);
  }, tn = e._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = function() {
    return (tn = e._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = e.asm.Ia).apply(null, arguments);
  }, nn = e._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = function() {
    return (nn = e._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = e.asm.Ja).apply(null, arguments);
  }, rn = e._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = function() {
    return (rn = e._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = e.asm.Ka).apply(null, arguments);
  }, _n = e._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = function() {
    return (_n = e._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = e.asm.La).apply(null, arguments);
  }, on = e._emscripten_bind_PeHorizon_getNump_0 = function() {
    return (on = e._emscripten_bind_PeHorizon_getNump_0 = e.asm.Ma).apply(null, arguments);
  }, pn = e._emscripten_bind_PeHorizon_getKind_0 = function() {
    return (pn = e._emscripten_bind_PeHorizon_getKind_0 = e.asm.Na).apply(null, arguments);
  }, an = e._emscripten_bind_PeHorizon_getInclusive_0 = function() {
    return (an = e._emscripten_bind_PeHorizon_getInclusive_0 = e.asm.Oa).apply(null, arguments);
  }, sn = e._emscripten_bind_PeHorizon_getSize_0 = function() {
    return (sn = e._emscripten_bind_PeHorizon_getSize_0 = e.asm.Pa).apply(null, arguments);
  }, un = e._emscripten_bind_PeHorizon_getCoord_0 = function() {
    return (un = e._emscripten_bind_PeHorizon_getCoord_0 = e.asm.Qa).apply(null, arguments);
  }, cn = e._emscripten_bind_PeInteger_PeInteger_1 = function() {
    return (cn = e._emscripten_bind_PeInteger_PeInteger_1 = e.asm.Ra).apply(null, arguments);
  }, gn = e._emscripten_bind_PeInteger_get_val_0 = function() {
    return (gn = e._emscripten_bind_PeInteger_get_val_0 = e.asm.Sa).apply(null, arguments);
  }, Pn = e._emscripten_bind_PeInteger_set_val_1 = function() {
    return (Pn = e._emscripten_bind_PeInteger_set_val_1 = e.asm.Ta).apply(null, arguments);
  }, yn = e._emscripten_bind_PeInteger___destroy___0 = function() {
    return (yn = e._emscripten_bind_PeInteger___destroy___0 = e.asm.Ua).apply(null, arguments);
  }, mn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = function() {
    return (mn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = e.asm.Va).apply(null, arguments);
  }, fn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = function() {
    return (fn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = e.asm.Wa).apply(null, arguments);
  }, ln = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = function() {
    return (ln = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = e.asm.Xa).apply(null, arguments);
  }, dn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = function() {
    return (dn = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = e.asm.Ya).apply(null, arguments);
  }, En = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = function() {
    return (En = e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = e.asm.Za).apply(null, arguments);
  }, bn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = function() {
    return (bn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = e.asm._a).apply(null, arguments);
  }, On = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = function() {
    return (On = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = e.asm.$a).apply(null, arguments);
  }, Tn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = function() {
    return (Tn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = e.asm.ab).apply(null, arguments);
  }, Sn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = function() {
    return (Sn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = e.asm.bb).apply(null, arguments);
  }, Nn = e._emscripten_bind_PeParameter_getValue_0 = function() {
    return (Nn = e._emscripten_bind_PeParameter_getValue_0 = e.asm.cb).apply(null, arguments);
  }, hn = e._emscripten_bind_PeParameter_getCode_0 = function() {
    return (hn = e._emscripten_bind_PeParameter_getCode_0 = e.asm.db).apply(null, arguments);
  }, Mn = e._emscripten_bind_PeParameter_getName_1 = function() {
    return (Mn = e._emscripten_bind_PeParameter_getName_1 = e.asm.eb).apply(null, arguments);
  }, vn = e._emscripten_bind_PeParameter_getType_0 = function() {
    return (vn = e._emscripten_bind_PeParameter_getType_0 = e.asm.fb).apply(null, arguments);
  }, Dn = e._emscripten_bind_PePCSInfo_getCentralMeridian_0 = function() {
    return (Dn = e._emscripten_bind_PePCSInfo_getCentralMeridian_0 = e.asm.gb).apply(null, arguments);
  }, Rn = e._emscripten_bind_PePCSInfo_getDomainMinx_0 = function() {
    return (Rn = e._emscripten_bind_PePCSInfo_getDomainMinx_0 = e.asm.hb).apply(null, arguments);
  }, An = e._emscripten_bind_PePCSInfo_getDomainMiny_0 = function() {
    return (An = e._emscripten_bind_PePCSInfo_getDomainMiny_0 = e.asm.ib).apply(null, arguments);
  }, Gn = e._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function() {
    return (Gn = e._emscripten_bind_PePCSInfo_getDomainMaxx_0 = e.asm.jb).apply(null, arguments);
  }, Cn = e._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function() {
    return (Cn = e._emscripten_bind_PePCSInfo_getDomainMaxy_0 = e.asm.kb).apply(null, arguments);
  }, In = e._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = function() {
    return (In = e._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = e.asm.lb).apply(null, arguments);
  }, jn = e._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = function() {
    return (jn = e._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = e.asm.mb).apply(null, arguments);
  }, Ln = e._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = function() {
    return (Ln = e._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = e.asm.nb).apply(null, arguments);
  }, Un = e._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = function() {
    return (Un = e._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = e.asm.ob).apply(null, arguments);
  }, Yn = e._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = function() {
    return (Yn = e._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = e.asm.pb).apply(null, arguments);
  }, Fn = e._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = function() {
    return (Fn = e._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = e.asm.qb).apply(null, arguments);
  }, xn = e._emscripten_bind_PePCSInfo_isPannableRectangle_0 = function() {
    return (xn = e._emscripten_bind_PePCSInfo_isPannableRectangle_0 = e.asm.rb).apply(null, arguments);
  }, wn = e._emscripten_bind_PePCSInfo_generate_2 = function() {
    return (wn = e._emscripten_bind_PePCSInfo_generate_2 = e.asm.sb).apply(null, arguments);
  }, Hn = e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = function() {
    return (Hn = e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = e.asm.tb).apply(null, arguments);
  }, Xn = e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = function() {
    return (Xn = e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = e.asm.ub).apply(null, arguments);
  }, zn = e._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = function() {
    return (zn = e._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = e.asm.vb).apply(null, arguments);
  }, Zn = e._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = function() {
    return (Zn = e._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = e.asm.wb).apply(null, arguments);
  }, Bn = e._emscripten_bind_PePrimem_getLongitude_0 = function() {
    return (Bn = e._emscripten_bind_PePrimem_getLongitude_0 = e.asm.xb).apply(null, arguments);
  }, Wn = e._emscripten_bind_PePrimem_getCode_0 = function() {
    return (Wn = e._emscripten_bind_PePrimem_getCode_0 = e.asm.yb).apply(null, arguments);
  }, qn = e._emscripten_bind_PePrimem_getName_1 = function() {
    return (qn = e._emscripten_bind_PePrimem_getName_1 = e.asm.zb).apply(null, arguments);
  }, Vn = e._emscripten_bind_PePrimem_getType_0 = function() {
    return (Vn = e._emscripten_bind_PePrimem_getType_0 = e.asm.Ab).apply(null, arguments);
  }, kn = e._emscripten_bind_PeProjcs_getGeogcs_0 = function() {
    return (kn = e._emscripten_bind_PeProjcs_getGeogcs_0 = e.asm.Bb).apply(null, arguments);
  }, Jn = e._emscripten_bind_PeProjcs_getParameters_0 = function() {
    return (Jn = e._emscripten_bind_PeProjcs_getParameters_0 = e.asm.Cb).apply(null, arguments);
  }, Kn = e._emscripten_bind_PeProjcs_getUnit_0 = function() {
    return (Kn = e._emscripten_bind_PeProjcs_getUnit_0 = e.asm.Db).apply(null, arguments);
  }, $n = e._emscripten_bind_PeProjcs_loadConstants_0 = function() {
    return ($n = e._emscripten_bind_PeProjcs_loadConstants_0 = e.asm.Eb).apply(null, arguments);
  }, Qn = e._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = function() {
    return (Qn = e._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = e.asm.Fb).apply(null, arguments);
  }, er = e._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = function() {
    return (er = e._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = e.asm.Gb).apply(null, arguments);
  }, tr = e._emscripten_bind_PeProjcs_getCode_0 = function() {
    return (tr = e._emscripten_bind_PeProjcs_getCode_0 = e.asm.Hb).apply(null, arguments);
  }, nr = e._emscripten_bind_PeProjcs_getName_1 = function() {
    return (nr = e._emscripten_bind_PeProjcs_getName_1 = e.asm.Ib).apply(null, arguments);
  }, rr = e._emscripten_bind_PeProjcs_getType_0 = function() {
    return (rr = e._emscripten_bind_PeProjcs_getType_0 = e.asm.Jb).apply(null, arguments);
  }, _r = e._emscripten_bind_PeSpheroid_getAxis_0 = function() {
    return (_r = e._emscripten_bind_PeSpheroid_getAxis_0 = e.asm.Kb).apply(null, arguments);
  }, or = e._emscripten_bind_PeSpheroid_getFlattening_0 = function() {
    return (or = e._emscripten_bind_PeSpheroid_getFlattening_0 = e.asm.Lb).apply(null, arguments);
  }, pr = e._emscripten_bind_PeSpheroid_getCode_0 = function() {
    return (pr = e._emscripten_bind_PeSpheroid_getCode_0 = e.asm.Mb).apply(null, arguments);
  }, ir = e._emscripten_bind_PeSpheroid_getName_1 = function() {
    return (ir = e._emscripten_bind_PeSpheroid_getName_1 = e.asm.Nb).apply(null, arguments);
  }, ar = e._emscripten_bind_PeSpheroid_getType_0 = function() {
    return (ar = e._emscripten_bind_PeSpheroid_getType_0 = e.asm.Ob).apply(null, arguments);
  }, sr = e._emscripten_bind_PeUnit_getUnitFactor_0 = function() {
    return (sr = e._emscripten_bind_PeUnit_getUnitFactor_0 = e.asm.Pb).apply(null, arguments);
  }, ur = e._emscripten_bind_PeUnit_getCode_0 = function() {
    return (ur = e._emscripten_bind_PeUnit_getCode_0 = e.asm.Qb).apply(null, arguments);
  }, cr = e._emscripten_bind_PeUnit_getName_1 = function() {
    return (cr = e._emscripten_bind_PeUnit_getName_1 = e.asm.Rb).apply(null, arguments);
  }, gr = e._emscripten_bind_PeUnit_getType_0 = function() {
    return (gr = e._emscripten_bind_PeUnit_getType_0 = e.asm.Sb).apply(null, arguments);
  }, Pr = e._emscripten_bind_PeVersion_version_string_0 = function() {
    return (Pr = e._emscripten_bind_PeVersion_version_string_0 = e.asm.Tb).apply(null, arguments);
  };
  e._pe_getPeGTlistExtendedEntrySize = function() {
    return (e._pe_getPeGTlistExtendedEntrySize = e.asm.Ub).apply(null, arguments);
  }, e._pe_getPeGTlistExtendedGTsSize = function() {
    return (e._pe_getPeGTlistExtendedGTsSize = e.asm.Vb).apply(null, arguments);
  }, e._pe_getPeHorizonSize = function() {
    return (e._pe_getPeHorizonSize = e.asm.Wb).apply(null, arguments);
  }, e._pe_geog_to_geog = function() {
    return (e._pe_geog_to_geog = e.asm.Yb).apply(null, arguments);
  }, e._pe_geog_to_proj = function() {
    return (e._pe_geog_to_proj = e.asm.Zb).apply(null, arguments);
  }, e._pe_geog_to_dd = function() {
    return (e._pe_geog_to_dd = e.asm._b).apply(null, arguments);
  }, e._pe_dd_to_geog = function() {
    return (e._pe_dd_to_geog = e.asm.$b).apply(null, arguments);
  }, e._pe_geog_to_ddm = function() {
    return (e._pe_geog_to_ddm = e.asm.ac).apply(null, arguments);
  }, e._pe_ddm_to_geog = function() {
    return (e._pe_ddm_to_geog = e.asm.bc).apply(null, arguments);
  }, e._pe_geog_to_dms = function() {
    return (e._pe_geog_to_dms = e.asm.cc).apply(null, arguments);
  }, e._pe_dms_to_geog = function() {
    return (e._pe_dms_to_geog = e.asm.dc).apply(null, arguments);
  }, e._pe_geog_to_mgrs_extended = function() {
    return (e._pe_geog_to_mgrs_extended = e.asm.ec).apply(null, arguments);
  }, e._pe_mgrs_to_geog_extended = function() {
    return (e._pe_mgrs_to_geog_extended = e.asm.fc).apply(null, arguments);
  }, e._pe_geog_to_usng = function() {
    return (e._pe_geog_to_usng = e.asm.gc).apply(null, arguments);
  }, e._pe_usng_to_geog = function() {
    return (e._pe_usng_to_geog = e.asm.hc).apply(null, arguments);
  }, e._pe_geog_to_utm = function() {
    return (e._pe_geog_to_utm = e.asm.ic).apply(null, arguments);
  }, e._pe_utm_to_geog = function() {
    return (e._pe_utm_to_geog = e.asm.jc).apply(null, arguments);
  }, e._pe_object_to_string_ext = function() {
    return (e._pe_object_to_string_ext = e.asm.kc).apply(null, arguments);
  }, e._pe_proj_to_geog_center = function() {
    return (e._pe_proj_to_geog_center = e.asm.lc).apply(null, arguments);
  };
  var yr = e._malloc = function() {
    return (yr = e._malloc = e.asm.mc).apply(null, arguments);
  };
  e._free = function() {
    return (e._free = e.asm.nc).apply(null, arguments);
  };
  var me, $ = e.__get_tzname = function() {
    return ($ = e.__get_tzname = e.asm.oc).apply(null, arguments);
  }, mr = e.__get_daylight = function() {
    return (mr = e.__get_daylight = e.asm.pc).apply(null, arguments);
  }, fr = e.__get_timezone = function() {
    return (fr = e.__get_timezone = e.asm.qc).apply(null, arguments);
  };
  function a_(t) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t;
  }
  function Oe(t) {
    function n() {
      me || (me = !0, e.calledRun = !0, he || (Dr(), Q(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), Rr()));
    }
    q > 0 || (vr(), q > 0 || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1), n();
    }, 1)) : n()));
  }
  if (e.getValue = Nr, e.UTF8ToString = I, re = function t() {
    me || Oe(), me || (re = t);
  }, e.run = Oe, e.preInit)
    for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0; )
      e.preInit.pop()();
  function m() {
  }
  function oe(t) {
    return (t || m).__cache__;
  }
  function b(t, n) {
    var r = oe(n), o = r[t];
    return o || ((o = Object.create((n || m).prototype)).ptr = t, r[t] = o);
  }
  function s_(t, n) {
    return b(t.ptr, n);
  }
  function u_(t) {
    if (!t.__destroy__)
      throw "Error: Cannot destroy object. (Did you create it yourself?)";
    t.__destroy__(), delete oe(t.__class__)[t.ptr];
  }
  function c_(t, n) {
    return t.ptr === n.ptr;
  }
  function g_(t) {
    return t.ptr;
  }
  function P_(t) {
    return t.__class__;
  }
  Oe(), m.prototype = Object.create(m.prototype), m.prototype.constructor = m, m.prototype.__class__ = m, m.__cache__ = {}, e.WrapperObject = m, e.getCache = oe, e.wrapPointer = b, e.castObject = s_, e.NULL = b(0), e.destroy = u_, e.compare = c_, e.getPointer = g_, e.getClass = P_;
  var a = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare: function() {
    if (a.needed) {
      for (var t = 0; t < a.temps.length; t++)
        e._free(a.temps[t]);
      a.temps.length = 0, e._free(a.buffer), a.buffer = 0, a.size += a.needed, a.needed = 0;
    }
    a.buffer || (a.size += 128, a.buffer = e._malloc(a.size), ue(a.buffer)), a.pos = 0;
  }, alloc: function(t, n) {
    ue(a.buffer);
    var r, o = n.BYTES_PER_ELEMENT, p = t.length * o;
    return p = p + 7 & -8, a.pos + p >= a.size ? (ue(p > 0), a.needed += p, r = e._malloc(p), a.temps.push(r)) : (r = a.buffer + a.pos, a.pos += p), r;
  }, copy: function(t, n, r) {
    switch (r >>>= 0, n.BYTES_PER_ELEMENT) {
      case 2:
        r >>>= 1;
        break;
      case 4:
        r >>>= 2;
        break;
      case 8:
        r >>>= 3;
    }
    for (var o = 0; o < t.length; o++)
      n[r + o] = t[o];
  } };
  function Te(t) {
    if (typeof t == "string") {
      var n = p_(t), r = a.alloc(n, H);
      return a.copy(n, H, r), r;
    }
    return t;
  }
  function x(t) {
    if (typeof t == "object") {
      var n = a.alloc(t, H);
      return a.copy(t, H, n), n;
    }
    return t;
  }
  function y_(t) {
    if (typeof t == "object") {
      var n = a.alloc(t, ce);
      return a.copy(t, ce, n), n;
    }
    return t;
  }
  function m_(t) {
    if (typeof t == "object") {
      var n = a.alloc(t, c);
      return a.copy(t, c, n), n;
    }
    return t;
  }
  function f_(t) {
    if (typeof t == "object") {
      var n = a.alloc(t, ge);
      return a.copy(t, ge, n), n;
    }
    return t;
  }
  function l_(t) {
    if (typeof t == "object") {
      var n = a.alloc(t, Pe);
      return a.copy(t, Pe, n), n;
    }
    return t;
  }
  function d() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function D() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function z() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function M() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function _() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function R() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function T(t, n, r, o, p, s) {
    t && typeof t == "object" && (t = t.ptr), n && typeof n == "object" && (n = n.ptr), r && typeof r == "object" && (r = r.ptr), o && typeof o == "object" && (o = o.ptr), p && typeof p == "object" && (p = p.ptr), s && typeof s == "object" && (s = s.ptr), this.ptr = Ct(t, n, r, o, p, s), oe(T)[this.ptr] = this;
  }
  function E() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function f() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function L() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function C() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function U() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function O() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function N(t) {
    t && typeof t == "object" && (t = t.ptr), this.ptr = cn(t), oe(N)[this.ptr] = this;
  }
  function P() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function l() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function A() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function i() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function v() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function y() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function S() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function h() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function Z() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return d.prototype = Object.create(m.prototype), d.prototype.constructor = d, d.prototype.__class__ = d, d.__cache__ = {}, e.PeObject = d, d.prototype.getCode = d.prototype.getCode = function() {
    var t = this.ptr;
    return He(t);
  }, d.prototype.getName = d.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Xe(n, t));
  }, d.prototype.getType = d.prototype.getType = function() {
    var t = this.ptr;
    return ze(t);
  }, D.prototype = Object.create(d.prototype), D.prototype.constructor = D, D.prototype.__class__ = D, D.__cache__ = {}, e.PeCoordsys = D, D.prototype.getCode = D.prototype.getCode = function() {
    var t = this.ptr;
    return Ze(t);
  }, D.prototype.getName = D.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Be(n, t));
  }, D.prototype.getType = D.prototype.getType = function() {
    var t = this.ptr;
    return We(t);
  }, z.prototype = Object.create(m.prototype), z.prototype.constructor = z, z.prototype.__class__ = z, z.__cache__ = {}, e.VoidPtr = z, z.prototype.__destroy__ = z.prototype.__destroy__ = function() {
    var t = this.ptr;
    qe(t);
  }, M.prototype = Object.create(d.prototype), M.prototype.constructor = M, M.prototype.__class__ = M, M.__cache__ = {}, e.PeDatum = M, M.prototype.getSpheroid = M.prototype.getSpheroid = function() {
    var t = this.ptr;
    return b(Ve(t), S);
  }, M.prototype.getCode = M.prototype.getCode = function() {
    var t = this.ptr;
    return ke(t);
  }, M.prototype.getName = M.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Je(n, t));
  }, M.prototype.getType = M.prototype.getType = function() {
    var t = this.ptr;
    return Ke(t);
  }, _.prototype = Object.create(m.prototype), _.prototype.constructor = _, _.prototype.__class__ = _, _.__cache__ = {}, e.PeDefs = _, _.prototype.get_PE_BUFFER_MAX = _.prototype.get_PE_BUFFER_MAX = function() {
    var t = this.ptr;
    return $e(t);
  }, Object.defineProperty(_.prototype, "PE_BUFFER_MAX", { get: _.prototype.get_PE_BUFFER_MAX }), _.prototype.get_PE_NAME_MAX = _.prototype.get_PE_NAME_MAX = function() {
    var t = this.ptr;
    return Qe(t);
  }, Object.defineProperty(_.prototype, "PE_NAME_MAX", { get: _.prototype.get_PE_NAME_MAX }), _.prototype.get_PE_MGRS_MAX = _.prototype.get_PE_MGRS_MAX = function() {
    var t = this.ptr;
    return et(t);
  }, Object.defineProperty(_.prototype, "PE_MGRS_MAX", { get: _.prototype.get_PE_MGRS_MAX }), _.prototype.get_PE_USNG_MAX = _.prototype.get_PE_USNG_MAX = function() {
    var t = this.ptr;
    return tt(t);
  }, Object.defineProperty(_.prototype, "PE_USNG_MAX", { get: _.prototype.get_PE_USNG_MAX }), _.prototype.get_PE_DD_MAX = _.prototype.get_PE_DD_MAX = function() {
    var t = this.ptr;
    return nt(t);
  }, Object.defineProperty(_.prototype, "PE_DD_MAX", { get: _.prototype.get_PE_DD_MAX }), _.prototype.get_PE_DMS_MAX = _.prototype.get_PE_DMS_MAX = function() {
    var t = this.ptr;
    return rt(t);
  }, Object.defineProperty(_.prototype, "PE_DMS_MAX", { get: _.prototype.get_PE_DMS_MAX }), _.prototype.get_PE_DDM_MAX = _.prototype.get_PE_DDM_MAX = function() {
    var t = this.ptr;
    return _t(t);
  }, Object.defineProperty(_.prototype, "PE_DDM_MAX", { get: _.prototype.get_PE_DDM_MAX }), _.prototype.get_PE_UTM_MAX = _.prototype.get_PE_UTM_MAX = function() {
    var t = this.ptr;
    return ot(t);
  }, Object.defineProperty(_.prototype, "PE_UTM_MAX", { get: _.prototype.get_PE_UTM_MAX }), _.prototype.get_PE_PARM_MAX = _.prototype.get_PE_PARM_MAX = function() {
    var t = this.ptr;
    return pt(t);
  }, Object.defineProperty(_.prototype, "PE_PARM_MAX", { get: _.prototype.get_PE_PARM_MAX }), _.prototype.get_PE_TYPE_NONE = _.prototype.get_PE_TYPE_NONE = function() {
    var t = this.ptr;
    return it(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_NONE", { get: _.prototype.get_PE_TYPE_NONE }), _.prototype.get_PE_TYPE_GEOGCS = _.prototype.get_PE_TYPE_GEOGCS = function() {
    var t = this.ptr;
    return at(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_GEOGCS", { get: _.prototype.get_PE_TYPE_GEOGCS }), _.prototype.get_PE_TYPE_PROJCS = _.prototype.get_PE_TYPE_PROJCS = function() {
    var t = this.ptr;
    return st(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_PROJCS", { get: _.prototype.get_PE_TYPE_PROJCS }), _.prototype.get_PE_TYPE_GEOGTRAN = _.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var t = this.ptr;
    return ut(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_GEOGTRAN", { get: _.prototype.get_PE_TYPE_GEOGTRAN }), _.prototype.get_PE_TYPE_COORDSYS = _.prototype.get_PE_TYPE_COORDSYS = function() {
    var t = this.ptr;
    return ct(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_COORDSYS", { get: _.prototype.get_PE_TYPE_COORDSYS }), _.prototype.get_PE_TYPE_UNIT = _.prototype.get_PE_TYPE_UNIT = function() {
    var t = this.ptr;
    return gt(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_UNIT", { get: _.prototype.get_PE_TYPE_UNIT }), _.prototype.get_PE_TYPE_LINUNIT = _.prototype.get_PE_TYPE_LINUNIT = function() {
    var t = this.ptr;
    return Pt(t);
  }, Object.defineProperty(_.prototype, "PE_TYPE_LINUNIT", { get: _.prototype.get_PE_TYPE_LINUNIT }), _.prototype.get_PE_STR_OPTS_NONE = _.prototype.get_PE_STR_OPTS_NONE = function() {
    var t = this.ptr;
    return yt(t);
  }, Object.defineProperty(_.prototype, "PE_STR_OPTS_NONE", { get: _.prototype.get_PE_STR_OPTS_NONE }), _.prototype.get_PE_STR_AUTH_NONE = _.prototype.get_PE_STR_AUTH_NONE = function() {
    var t = this.ptr;
    return mt(t);
  }, Object.defineProperty(_.prototype, "PE_STR_AUTH_NONE", { get: _.prototype.get_PE_STR_AUTH_NONE }), _.prototype.get_PE_STR_AUTH_TOP = _.prototype.get_PE_STR_AUTH_TOP = function() {
    var t = this.ptr;
    return ft(t);
  }, Object.defineProperty(_.prototype, "PE_STR_AUTH_TOP", { get: _.prototype.get_PE_STR_AUTH_TOP }), _.prototype.get_PE_STR_NAME_CANON = _.prototype.get_PE_STR_NAME_CANON = function() {
    var t = this.ptr;
    return lt(t);
  }, Object.defineProperty(_.prototype, "PE_STR_NAME_CANON", { get: _.prototype.get_PE_STR_NAME_CANON }), _.prototype.get_PE_PARM_X0 = _.prototype.get_PE_PARM_X0 = function() {
    var t = this.ptr;
    return dt(t);
  }, Object.defineProperty(_.prototype, "PE_PARM_X0", { get: _.prototype.get_PE_PARM_X0 }), _.prototype.get_PE_PARM_ND = _.prototype.get_PE_PARM_ND = function() {
    var t = this.ptr;
    return Et(t);
  }, Object.defineProperty(_.prototype, "PE_PARM_ND", { get: _.prototype.get_PE_PARM_ND }), _.prototype.get_PE_TRANSFORM_1_TO_2 = _.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var t = this.ptr;
    return bt(t);
  }, Object.defineProperty(_.prototype, "PE_TRANSFORM_1_TO_2", { get: _.prototype.get_PE_TRANSFORM_1_TO_2 }), _.prototype.get_PE_TRANSFORM_2_TO_1 = _.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var t = this.ptr;
    return Ot(t);
  }, Object.defineProperty(_.prototype, "PE_TRANSFORM_2_TO_1", { get: _.prototype.get_PE_TRANSFORM_2_TO_1 }), _.prototype.get_PE_TRANSFORM_P_TO_G = _.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var t = this.ptr;
    return Tt(t);
  }, Object.defineProperty(_.prototype, "PE_TRANSFORM_P_TO_G", { get: _.prototype.get_PE_TRANSFORM_P_TO_G }), _.prototype.get_PE_TRANSFORM_G_TO_P = _.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var t = this.ptr;
    return St(t);
  }, Object.defineProperty(_.prototype, "PE_TRANSFORM_G_TO_P", { get: _.prototype.get_PE_TRANSFORM_G_TO_P }), _.prototype.get_PE_HORIZON_RECT = _.prototype.get_PE_HORIZON_RECT = function() {
    var t = this.ptr;
    return Nt(t);
  }, Object.defineProperty(_.prototype, "PE_HORIZON_RECT", { get: _.prototype.get_PE_HORIZON_RECT }), _.prototype.get_PE_HORIZON_POLY = _.prototype.get_PE_HORIZON_POLY = function() {
    var t = this.ptr;
    return ht(t);
  }, Object.defineProperty(_.prototype, "PE_HORIZON_POLY", { get: _.prototype.get_PE_HORIZON_POLY }), _.prototype.get_PE_HORIZON_LINE = _.prototype.get_PE_HORIZON_LINE = function() {
    var t = this.ptr;
    return Mt(t);
  }, Object.defineProperty(_.prototype, "PE_HORIZON_LINE", { get: _.prototype.get_PE_HORIZON_LINE }), _.prototype.get_PE_HORIZON_DELTA = _.prototype.get_PE_HORIZON_DELTA = function() {
    var t = this.ptr;
    return vt(t);
  }, Object.defineProperty(_.prototype, "PE_HORIZON_DELTA", { get: _.prototype.get_PE_HORIZON_DELTA }), R.prototype = Object.create(m.prototype), R.prototype.constructor = R, R.prototype.__class__ = R, R.__cache__ = {}, e.PeFactory = R, R.prototype.initialize = R.prototype.initialize = function(t) {
    var n = this.ptr;
    a.prepare(), t = t && typeof t == "object" ? t.ptr : Te(t), Dt(n, t);
  }, R.prototype.factoryByType = R.prototype.factoryByType = function(t, n) {
    var r = this.ptr;
    return t && typeof t == "object" && (t = t.ptr), n && typeof n == "object" && (n = n.ptr), b(Rt(r, t, n), d);
  }, R.prototype.fromString = R.prototype.fromString = function(t, n) {
    var r = this.ptr;
    return a.prepare(), t && typeof t == "object" && (t = t.ptr), n = n && typeof n == "object" ? n.ptr : Te(n), b(At(r, t, n), d);
  }, R.prototype.getCode = R.prototype.getCode = function(t) {
    var n = this.ptr;
    return t && typeof t == "object" && (t = t.ptr), Gt(n, t);
  }, T.prototype = Object.create(m.prototype), T.prototype.constructor = T, T.prototype.__class__ = T, T.__cache__ = {}, e.PeGCSExtent = T, T.prototype.getLLon = T.prototype.getLLon = function() {
    var t = this.ptr;
    return It(t);
  }, T.prototype.getSLat = T.prototype.getSLat = function() {
    var t = this.ptr;
    return jt(t);
  }, T.prototype.getRLon = T.prototype.getRLon = function() {
    var t = this.ptr;
    return Lt(t);
  }, T.prototype.getNLat = T.prototype.getNLat = function() {
    var t = this.ptr;
    return Ut(t);
  }, T.prototype.__destroy__ = T.prototype.__destroy__ = function() {
    var t = this.ptr;
    Yt(t);
  }, E.prototype = Object.create(D.prototype), E.prototype.constructor = E, E.prototype.__class__ = E, E.__cache__ = {}, e.PeGeogcs = E, E.prototype.getDatum = E.prototype.getDatum = function() {
    var t = this.ptr;
    return b(Ft(t), M);
  }, E.prototype.getPrimem = E.prototype.getPrimem = function() {
    var t = this.ptr;
    return b(xt(t), v);
  }, E.prototype.getUnit = E.prototype.getUnit = function() {
    var t = this.ptr;
    return b(wt(t), h);
  }, E.prototype.getCode = E.prototype.getCode = function() {
    var t = this.ptr;
    return Ht(t);
  }, E.prototype.getName = E.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Xt(n, t));
  }, E.prototype.getType = E.prototype.getType = function() {
    var t = this.ptr;
    return zt(t);
  }, f.prototype = Object.create(d.prototype), f.prototype.constructor = f, f.prototype.__class__ = f, f.__cache__ = {}, e.PeGeogtran = f, f.prototype.isEqual = f.prototype.isEqual = function(t) {
    var n = this.ptr;
    return t && typeof t == "object" && (t = t.ptr), !!Zt(n, t);
  }, f.prototype.getGeogcs1 = f.prototype.getGeogcs1 = function() {
    var t = this.ptr;
    return b(Bt(t), E);
  }, f.prototype.getGeogcs2 = f.prototype.getGeogcs2 = function() {
    var t = this.ptr;
    return b(Wt(t), E);
  }, f.prototype.getParameters = f.prototype.getParameters = function() {
    var t = this.ptr;
    return qt(t);
  }, f.prototype.loadConstants = f.prototype.loadConstants = function() {
    var t = this.ptr;
    return !!Vt(t);
  }, f.prototype.getCode = f.prototype.getCode = function() {
    var t = this.ptr;
    return kt(t);
  }, f.prototype.getName = f.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Jt(n, t));
  }, f.prototype.getType = f.prototype.getType = function() {
    var t = this.ptr;
    return Kt(t);
  }, L.prototype = Object.create(m.prototype), L.prototype.constructor = L, L.prototype.__class__ = L, L.__cache__ = {}, e.PeGTlistExtended = L, L.prototype.getGTlist = L.prototype.getGTlist = function(t, n, r, o, p, s) {
    var u = this.ptr;
    return t && typeof t == "object" && (t = t.ptr), n && typeof n == "object" && (n = n.ptr), r && typeof r == "object" && (r = r.ptr), o && typeof o == "object" && (o = o.ptr), p && typeof p == "object" && (p = p.ptr), s && typeof s == "object" && (s = s.ptr), b($t(u, t, n, r, o, p, s), C);
  }, L.prototype.get_PE_GTLIST_OPTS_COMMON = L.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var t = this.ptr;
    return Qt(t);
  }, Object.defineProperty(L.prototype, "PE_GTLIST_OPTS_COMMON", { get: L.prototype.get_PE_GTLIST_OPTS_COMMON }), C.prototype = Object.create(m.prototype), C.prototype.constructor = C, C.prototype.__class__ = C, C.__cache__ = {}, e.PeGTlistExtendedEntry = C, C.prototype.getEntries = C.prototype.getEntries = function() {
    var t = this.ptr;
    return b(en(t), U);
  }, C.prototype.getSteps = C.prototype.getSteps = function() {
    var t = this.ptr;
    return tn(t);
  }, C.prototype.Delete = C.prototype.Delete = function(t) {
    var n = this.ptr;
    t && typeof t == "object" && (t = t.ptr), nn(n, t);
  }, U.prototype = Object.create(m.prototype), U.prototype.constructor = U, U.prototype.__class__ = U, U.__cache__ = {}, e.PeGTlistExtendedGTs = U, U.prototype.getDirection = U.prototype.getDirection = function() {
    var t = this.ptr;
    return rn(t);
  }, U.prototype.getGeogtran = U.prototype.getGeogtran = function() {
    var t = this.ptr;
    return b(_n(t), f);
  }, O.prototype = Object.create(m.prototype), O.prototype.constructor = O, O.prototype.__class__ = O, O.__cache__ = {}, e.PeHorizon = O, O.prototype.getNump = O.prototype.getNump = function() {
    var t = this.ptr;
    return on(t);
  }, O.prototype.getKind = O.prototype.getKind = function() {
    var t = this.ptr;
    return pn(t);
  }, O.prototype.getInclusive = O.prototype.getInclusive = function() {
    var t = this.ptr;
    return an(t);
  }, O.prototype.getSize = O.prototype.getSize = function() {
    var t = this.ptr;
    return sn(t);
  }, O.prototype.getCoord = O.prototype.getCoord = function() {
    var t = this.ptr;
    return un(t);
  }, N.prototype = Object.create(m.prototype), N.prototype.constructor = N, N.prototype.__class__ = N, N.__cache__ = {}, e.PeInteger = N, N.prototype.get_val = N.prototype.get_val = function() {
    var t = this.ptr;
    return gn(t);
  }, N.prototype.set_val = N.prototype.set_val = function(t) {
    var n = this.ptr;
    t && typeof t == "object" && (t = t.ptr), Pn(n, t);
  }, Object.defineProperty(N.prototype, "val", { get: N.prototype.get_val, set: N.prototype.set_val }), N.prototype.__destroy__ = N.prototype.__destroy__ = function() {
    var t = this.ptr;
    yn(t);
  }, P.prototype = Object.create(m.prototype), P.prototype.constructor = P, P.prototype.__class__ = P, P.__cache__ = {}, e.PeNotationMgrs = P, P.prototype.get_PE_MGRS_STYLE_NEW = P.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var t = this.ptr;
    return mn(t);
  }, Object.defineProperty(P.prototype, "PE_MGRS_STYLE_NEW", { get: P.prototype.get_PE_MGRS_STYLE_NEW }), P.prototype.get_PE_MGRS_STYLE_OLD = P.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var t = this.ptr;
    return fn(t);
  }, Object.defineProperty(P.prototype, "PE_MGRS_STYLE_OLD", { get: P.prototype.get_PE_MGRS_STYLE_OLD }), P.prototype.get_PE_MGRS_STYLE_AUTO = P.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var t = this.ptr;
    return ln(t);
  }, Object.defineProperty(P.prototype, "PE_MGRS_STYLE_AUTO", { get: P.prototype.get_PE_MGRS_STYLE_AUTO }), P.prototype.get_PE_MGRS_180_ZONE_1_PLUS = P.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var t = this.ptr;
    return dn(t);
  }, Object.defineProperty(P.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: P.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), P.prototype.get_PE_MGRS_ADD_SPACES = P.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var t = this.ptr;
    return En(t);
  }, Object.defineProperty(P.prototype, "PE_MGRS_ADD_SPACES", { get: P.prototype.get_PE_MGRS_ADD_SPACES }), l.prototype = Object.create(m.prototype), l.prototype.constructor = l, l.prototype.__class__ = l, l.__cache__ = {}, e.PeNotationUtm = l, l.prototype.get_PE_UTM_OPTS_NONE = l.prototype.get_PE_UTM_OPTS_NONE = function() {
    var t = this.ptr;
    return bn(t);
  }, Object.defineProperty(l.prototype, "PE_UTM_OPTS_NONE", { get: l.prototype.get_PE_UTM_OPTS_NONE }), l.prototype.get_PE_UTM_OPTS_NS = l.prototype.get_PE_UTM_OPTS_NS = function() {
    var t = this.ptr;
    return On(t);
  }, Object.defineProperty(l.prototype, "PE_UTM_OPTS_NS", { get: l.prototype.get_PE_UTM_OPTS_NS }), l.prototype.get_PE_UTM_OPTS_NS_STRICT = l.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var t = this.ptr;
    return Tn(t);
  }, Object.defineProperty(l.prototype, "PE_UTM_OPTS_NS_STRICT", { get: l.prototype.get_PE_UTM_OPTS_NS_STRICT }), l.prototype.get_PE_UTM_OPTS_ADD_SPACES = l.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var t = this.ptr;
    return Sn(t);
  }, Object.defineProperty(l.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: l.prototype.get_PE_UTM_OPTS_ADD_SPACES }), A.prototype = Object.create(d.prototype), A.prototype.constructor = A, A.prototype.__class__ = A, A.__cache__ = {}, e.PeParameter = A, A.prototype.getValue = A.prototype.getValue = function() {
    var t = this.ptr;
    return Nn(t);
  }, A.prototype.getCode = A.prototype.getCode = function() {
    var t = this.ptr;
    return hn(t);
  }, A.prototype.getName = A.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(Mn(n, t));
  }, A.prototype.getType = A.prototype.getType = function() {
    var t = this.ptr;
    return vn(t);
  }, i.prototype = Object.create(m.prototype), i.prototype.constructor = i, i.prototype.__class__ = i, i.__cache__ = {}, e.PePCSInfo = i, i.prototype.getCentralMeridian = i.prototype.getCentralMeridian = function() {
    var t = this.ptr;
    return Dn(t);
  }, i.prototype.getDomainMinx = i.prototype.getDomainMinx = function() {
    var t = this.ptr;
    return Rn(t);
  }, i.prototype.getDomainMiny = i.prototype.getDomainMiny = function() {
    var t = this.ptr;
    return An(t);
  }, i.prototype.getDomainMaxx = i.prototype.getDomainMaxx = function() {
    var t = this.ptr;
    return Gn(t);
  }, i.prototype.getDomainMaxy = i.prototype.getDomainMaxy = function() {
    var t = this.ptr;
    return Cn(t);
  }, i.prototype.getNorthPoleLocation = i.prototype.getNorthPoleLocation = function() {
    var t = this.ptr;
    return In(t);
  }, i.prototype.getNorthPoleGeometry = i.prototype.getNorthPoleGeometry = function() {
    var t = this.ptr;
    return jn(t);
  }, i.prototype.getSouthPoleLocation = i.prototype.getSouthPoleLocation = function() {
    var t = this.ptr;
    return Ln(t);
  }, i.prototype.getSouthPoleGeometry = i.prototype.getSouthPoleGeometry = function() {
    var t = this.ptr;
    return Un(t);
  }, i.prototype.isDensificationNeeded = i.prototype.isDensificationNeeded = function() {
    var t = this.ptr;
    return !!Yn(t);
  }, i.prototype.isGcsHorizonMultiOverlap = i.prototype.isGcsHorizonMultiOverlap = function() {
    var t = this.ptr;
    return !!Fn(t);
  }, i.prototype.isPannableRectangle = i.prototype.isPannableRectangle = function() {
    var t = this.ptr;
    return !!xn(t);
  }, i.prototype.generate = i.prototype.generate = function(t, n) {
    var r = this.ptr;
    return t && typeof t == "object" && (t = t.ptr), n && typeof n == "object" && (n = n.ptr), b(wn(r, t, n), i);
  }, i.prototype.get_PE_PCSINFO_OPTION_NONE = i.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var t = this.ptr;
    return Hn(t);
  }, Object.defineProperty(i.prototype, "PE_PCSINFO_OPTION_NONE", { get: i.prototype.get_PE_PCSINFO_OPTION_NONE }), i.prototype.get_PE_PCSINFO_OPTION_DOMAIN = i.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var t = this.ptr;
    return Xn(t);
  }, Object.defineProperty(i.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: i.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), i.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = i.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var t = this.ptr;
    return zn(t);
  }, Object.defineProperty(i.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: i.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), i.prototype.get_PE_POLE_POINT = i.prototype.get_PE_POLE_POINT = function() {
    var t = this.ptr;
    return Zn(t);
  }, Object.defineProperty(i.prototype, "PE_POLE_POINT", { get: i.prototype.get_PE_POLE_POINT }), v.prototype = Object.create(d.prototype), v.prototype.constructor = v, v.prototype.__class__ = v, v.__cache__ = {}, e.PePrimem = v, v.prototype.getLongitude = v.prototype.getLongitude = function() {
    var t = this.ptr;
    return Bn(t);
  }, v.prototype.getCode = v.prototype.getCode = function() {
    var t = this.ptr;
    return Wn(t);
  }, v.prototype.getName = v.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(qn(n, t));
  }, v.prototype.getType = v.prototype.getType = function() {
    var t = this.ptr;
    return Vn(t);
  }, y.prototype = Object.create(D.prototype), y.prototype.constructor = y, y.prototype.__class__ = y, y.__cache__ = {}, e.PeProjcs = y, y.prototype.getGeogcs = y.prototype.getGeogcs = function() {
    var t = this.ptr;
    return b(kn(t), E);
  }, y.prototype.getParameters = y.prototype.getParameters = function() {
    var t = this.ptr;
    return Jn(t);
  }, y.prototype.getUnit = y.prototype.getUnit = function() {
    var t = this.ptr;
    return b(Kn(t), h);
  }, y.prototype.loadConstants = y.prototype.loadConstants = function() {
    var t = this.ptr;
    return !!$n(t);
  }, y.prototype.horizonGcsGenerate = y.prototype.horizonGcsGenerate = function() {
    var t = this.ptr;
    return b(Qn(t), O);
  }, y.prototype.horizonPcsGenerate = y.prototype.horizonPcsGenerate = function() {
    var t = this.ptr;
    return b(er(t), O);
  }, y.prototype.getCode = y.prototype.getCode = function() {
    var t = this.ptr;
    return tr(t);
  }, y.prototype.getName = y.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(nr(n, t));
  }, y.prototype.getType = y.prototype.getType = function() {
    var t = this.ptr;
    return rr(t);
  }, S.prototype = Object.create(d.prototype), S.prototype.constructor = S, S.prototype.__class__ = S, S.__cache__ = {}, e.PeSpheroid = S, S.prototype.getAxis = S.prototype.getAxis = function() {
    var t = this.ptr;
    return _r(t);
  }, S.prototype.getFlattening = S.prototype.getFlattening = function() {
    var t = this.ptr;
    return or(t);
  }, S.prototype.getCode = S.prototype.getCode = function() {
    var t = this.ptr;
    return pr(t);
  }, S.prototype.getName = S.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(ir(n, t));
  }, S.prototype.getType = S.prototype.getType = function() {
    var t = this.ptr;
    return ar(t);
  }, h.prototype = Object.create(d.prototype), h.prototype.constructor = h, h.prototype.__class__ = h, h.__cache__ = {}, e.PeUnit = h, h.prototype.getUnitFactor = h.prototype.getUnitFactor = function() {
    var t = this.ptr;
    return sr(t);
  }, h.prototype.getCode = h.prototype.getCode = function() {
    var t = this.ptr;
    return ur(t);
  }, h.prototype.getName = h.prototype.getName = function(t) {
    var n = this.ptr;
    return a.prepare(), typeof t == "object" && (t = x(t)), I(cr(n, t));
  }, h.prototype.getType = h.prototype.getType = function() {
    var t = this.ptr;
    return gr(t);
  }, Z.prototype = Object.create(m.prototype), Z.prototype.constructor = Z, Z.prototype.__class__ = Z, Z.__cache__ = {}, e.PeVersion = Z, Z.prototype.version_string = Z.prototype.version_string = function() {
    var t = this.ptr;
    return I(Pr(t));
  }, e.ensureCache = a, e.ensureString = Te, e.ensureInt8 = x, e.ensureInt16 = y_, e.ensureInt32 = m_, e.ensureFloat32 = f_, e.ensureFloat64 = l_, e.ready;
}, Er.exports = br;
const b_ = Se.exports, O_ = Object.freeze(E_({ __proto__: null, default: b_ }, [Se.exports]));
export {
  O_ as p
};
