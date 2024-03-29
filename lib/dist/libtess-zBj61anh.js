function Kn(S, O) {
  for (var j = 0; j < O.length; j++) {
    const f = O[j];
    if (typeof f != "string" && !Array.isArray(f)) {
      for (const t in f)
        if (t !== "default" && !(t in S)) {
          const _ = Object.getOwnPropertyDescriptor(f, t);
          _ && Object.defineProperty(S, t, _.get ? _ : { enumerable: !0, get: () => f[t] });
        }
    }
  }
  return Object.freeze(S);
}
var J, ln, pn, K = { exports: {} };
J = K, ln = function() {
  function S(O) {
    const j = O.locateFile, f = {};
    var t = t !== void 0 ? t : {};
    const _ = (() => {
      let n;
      return { resolve: (e) => n(e), promise: new Promise((e) => n = e) };
    })(), mn = () => _.promise;
    t.locateFile = j, t.onRuntimeInitialized = () => {
      _.resolve(f);
    }, f.Module = t, f.whenLoaded = mn;
    var h, x = {};
    for (h in t)
      t.hasOwnProperty(h) && (x[h] = t[h]);
    var B, W, q, E, R, Q = typeof window == "object", I = typeof importScripts == "function", hn = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", p = "";
    function dn(n) {
      return t.locateFile ? t.locateFile(n, p) : p + n;
    }
    hn ? (p = I ? require("path").dirname(p) + "/" : __dirname + "/", B = function(n, e) {
      return E || (E = require("fs")), R || (R = require("path")), n = R.normalize(n), E.readFileSync(n, e ? null : "utf8");
    }, q = function(n) {
      var e = B(n, !0);
      return e.buffer || (e = new Uint8Array(e)), wn(e.buffer), e;
    }, W = function(n, e, r) {
      E || (E = require("fs")), R || (R = require("path")), n = R.normalize(n), E.readFile(n, function(o, i) {
        o ? r(o) : e(i.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), J.exports = t, process.on("uncaughtException", function(n) {
      if (!(n instanceof Yn))
        throw n;
    }), process.on("unhandledRejection", C), t.inspect = function() {
      return "[Emscripten Module object]";
    }) : (Q || I) && (I ? p = self.location.href : typeof document < "u" && document.currentScript && (p = document.currentScript.src), p = p.indexOf("blob:") !== 0 ? p.substr(0, p.lastIndexOf("/") + 1) : "", B = function(n) {
      var e = new XMLHttpRequest();
      return e.open("GET", n, !1), e.send(null), e.responseText;
    }, I && (q = function(n) {
      var e = new XMLHttpRequest();
      return e.open("GET", n, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
    }), W = function(n, e, r) {
      var o = new XMLHttpRequest();
      o.open("GET", n, !0), o.responseType = "arraybuffer", o.onload = function() {
        o.status == 200 || o.status == 0 && o.response ? e(o.response) : r();
      }, o.onerror = r, o.send(null);
    });
    var gn = t.print || console.log.bind(console), P = t.printErr || console.warn.bind(console);
    for (h in x)
      x.hasOwnProperty(h) && (t[h] = x[h]);
    x = null, t.arguments, t.thisProgram, t.quit;
    var T, D, V = 0, yn = function(n) {
      V = n;
    }, vn = function() {
      return V;
    };
    t.wasmBinary && (T = t.wasmBinary), t.noExitRuntime, typeof WebAssembly != "object" && C("no native wasm support detected");
    var Z = !1;
    function wn(n, e) {
      n || C("Assertion failed: " + e);
    }
    var $, H, M, m, nn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function tn(n, e, r) {
      for (var o = e + r, i = e; n[i] && !(i >= o); )
        ++i;
      if (i - e > 16 && n.subarray && nn)
        return nn.decode(n.subarray(e, i));
      for (var u = ""; e < i; ) {
        var a = n[e++];
        if (128 & a) {
          var l = 63 & n[e++];
          if ((224 & a) != 192) {
            var g = 63 & n[e++];
            if ((a = (240 & a) == 224 ? (15 & a) << 12 | l << 6 | g : (7 & a) << 18 | l << 12 | g << 6 | 63 & n[e++]) < 65536)
              u += String.fromCharCode(a);
            else {
              var z = a - 65536;
              u += String.fromCharCode(55296 | z >> 10, 56320 | 1023 & z);
            }
          } else
            u += String.fromCharCode((31 & a) << 6 | l);
        } else
          u += String.fromCharCode(a);
      }
      return u;
    }
    function bn(n, e) {
      return n ? tn(H, n, e) : "";
    }
    function An(n, e) {
      return n % e > 0 && (n += e - n % e), n;
    }
    function en(n) {
      $ = n, t.HEAP8 = new Int8Array(n), t.HEAP16 = new Int16Array(n), t.HEAP32 = M = new Int32Array(n), t.HEAPU8 = H = new Uint8Array(n), t.HEAPU16 = new Uint16Array(n), t.HEAPU32 = new Uint32Array(n), t.HEAPF32 = new Float32Array(n), t.HEAPF64 = new Float64Array(n);
    }
    t.INITIAL_MEMORY;
    var rn = [], on = [], un = [];
    function _n() {
      if (t.preRun)
        for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; )
          Pn(t.preRun.shift());
      N(rn);
    }
    function En() {
      N(on);
    }
    function Rn() {
      if (t.postRun)
        for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; )
          jn(t.postRun.shift());
      N(un);
    }
    function Pn(n) {
      rn.unshift(n);
    }
    function Sn(n) {
      on.unshift(n);
    }
    function jn(n) {
      un.unshift(n);
    }
    var y = 0, F = null;
    function xn(n) {
      y++, t.monitorRunDependencies && t.monitorRunDependencies(y);
    }
    function In(n) {
      if (y--, t.monitorRunDependencies && t.monitorRunDependencies(y), y == 0 && F) {
        var e = F;
        F = null, e();
      }
    }
    function C(n) {
      throw t.onAbort && t.onAbort(n), P(n += ""), Z = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(n);
    }
    t.preloadedImages = {}, t.preloadedAudios = {};
    var s, Tn = "data:application/octet-stream;base64,";
    function an(n) {
      return n.startsWith(Tn);
    }
    function sn(n) {
      return n.startsWith("file://");
    }
    function fn(n) {
      try {
        if (n == s && T)
          return new Uint8Array(T);
        if (q)
          return q(n);
        throw "both async and sync fetching of the wasm failed";
      } catch (e) {
        C(e);
      }
    }
    function Hn() {
      if (!T && (Q || I)) {
        if (typeof fetch == "function" && !sn(s))
          return fetch(s, { credentials: "same-origin" }).then(function(n) {
            if (!n.ok)
              throw "failed to load wasm binary file at '" + s + "'";
            return n.arrayBuffer();
          }).catch(function() {
            return fn(s);
          });
        if (W)
          return new Promise(function(n, e) {
            W(s, function(r) {
              n(new Uint8Array(r));
            }, e);
          });
      }
      return Promise.resolve().then(function() {
        return fn(s);
      });
    }
    function Mn() {
      var n = { a: kn };
      function e(u, a) {
        var l = u.exports;
        t.asm = l, en((D = t.asm.m).buffer), m = t.asm.q, Sn(t.asm.n), In();
      }
      function r(u) {
        e(u.instance);
      }
      function o(u) {
        return Hn().then(function(a) {
          return WebAssembly.instantiate(a, n);
        }).then(u, function(a) {
          P("failed to asynchronously prepare wasm: " + a), C(a);
        });
      }
      function i() {
        return T || typeof WebAssembly.instantiateStreaming != "function" || an(s) || sn(s) || typeof fetch != "function" ? o(r) : fetch(s, { credentials: "same-origin" }).then(function(u) {
          return WebAssembly.instantiateStreaming(u, n).then(r, function(a) {
            return P("wasm streaming compile failed: " + a), P("falling back to ArrayBuffer instantiation"), o(r);
          });
        });
      }
      if (xn(), t.instantiateWasm)
        try {
          return t.instantiateWasm(n, e);
        } catch (u) {
          return P("Module.instantiateWasm callback failed with error: " + u), !1;
        }
      return i(), {};
    }
    function N(n) {
      for (; n.length > 0; ) {
        var e = n.shift();
        if (typeof e != "function") {
          var r = e.func;
          typeof r == "number" ? e.arg === void 0 ? m.get(r)() : m.get(r)(e.arg) : r(e.arg === void 0 ? null : e.arg);
        } else
          e(t);
      }
    }
    function Fn() {
      throw "longjmp";
    }
    function Cn(n, e, r) {
      H.copyWithin(n, e, e + r);
    }
    function On(n) {
      try {
        return D.grow(n - $.byteLength + 65535 >>> 16), en(D.buffer), 1;
      } catch {
      }
    }
    function Wn(n) {
      var e = H.length, r = 2147483648;
      if ((n >>>= 0) > r)
        return !1;
      for (var o = 1; o <= 4; o *= 2) {
        var i = e * (1 + 0.2 / o);
        if (i = Math.min(i, n + 100663296), On(Math.min(r, An(Math.max(n, i), 65536))))
          return !0;
      }
      return !1;
    }
    an(s = "libtess.wasm") || (s = dn(s));
    var U = { mappings: {}, buffers: [null, [], []], printChar: function(n, e) {
      var r = U.buffers[n];
      e === 0 || e === 10 ? ((n === 1 ? gn : P)(tn(r, 0)), r.length = 0) : r.push(e);
    }, varargs: void 0, get: function() {
      return U.varargs += 4, M[U.varargs - 4 >> 2];
    }, getStr: function(n) {
      return bn(n);
    }, get64: function(n, e) {
      return n;
    } };
    function qn(n, e, r, o) {
      for (var i = 0, u = 0; u < r; u++) {
        for (var a = M[e + 8 * u >> 2], l = M[e + (8 * u + 4) >> 2], g = 0; g < l; g++)
          U.printChar(n, H[a + g]);
        i += l;
      }
      return M[o >> 2] = i, 0;
    }
    function Un() {
      return vn();
    }
    function Ln(n) {
      yn(n);
    }
    var kn = { h: Fn, l: Cn, g: Wn, f: qn, b: Un, k: Nn, d: Dn, j: Gn, i: Xn, e: Bn, c: zn, a: Ln };
    Mn(), t.___wasm_call_ctors = function() {
      return (t.___wasm_call_ctors = t.asm.n).apply(null, arguments);
    }, t._malloc = function() {
      return (t._malloc = t.asm.o).apply(null, arguments);
    }, t._free = function() {
      return (t._free = t.asm.p).apply(null, arguments);
    }, t._triangulate = function() {
      return (t._triangulate = t.asm.r).apply(null, arguments);
    };
    var L, v = t.stackSave = function() {
      return (v = t.stackSave = t.asm.s).apply(null, arguments);
    }, w = t.stackRestore = function() {
      return (w = t.stackRestore = t.asm.t).apply(null, arguments);
    }, b = t._setThrew = function() {
      return (b = t._setThrew = t.asm.u).apply(null, arguments);
    };
    function zn(n, e, r) {
      var o = v();
      try {
        m.get(n)(e, r);
      } catch (i) {
        if (w(o), i !== i + 0 && i !== "longjmp")
          throw i;
        b(1, 0);
      }
    }
    function Bn(n, e) {
      var r = v();
      try {
        m.get(n)(e);
      } catch (o) {
        if (w(r), o !== o + 0 && o !== "longjmp")
          throw o;
        b(1, 0);
      }
    }
    function Dn(n, e) {
      var r = v();
      try {
        return m.get(n)(e);
      } catch (o) {
        if (w(r), o !== o + 0 && o !== "longjmp")
          throw o;
        b(1, 0);
      }
    }
    function Nn(n) {
      var e = v();
      try {
        return m.get(n)();
      } catch (r) {
        if (w(e), r !== r + 0 && r !== "longjmp")
          throw r;
        b(1, 0);
      }
    }
    function Gn(n, e, r) {
      var o = v();
      try {
        return m.get(n)(e, r);
      } catch (i) {
        if (w(o), i !== i + 0 && i !== "longjmp")
          throw i;
        b(1, 0);
      }
    }
    function Xn(n, e, r, o) {
      var i = v();
      try {
        return m.get(n)(e, r, o);
      } catch (u) {
        if (w(i), u !== u + 0 && u !== "longjmp")
          throw u;
        b(1, 0);
      }
    }
    function Yn(n) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + n + ")", this.status = n;
    }
    function G(n) {
      function e() {
        L || (L = !0, t.calledRun = !0, Z || (En(), t.onRuntimeInitialized && t.onRuntimeInitialized(), Rn()));
      }
      y > 0 || (_n(), y > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          t.setStatus("");
        }, 1), e();
      }, 1)) : e()));
    }
    if (F = function n() {
      L || G(), L || (F = n);
    }, t.run = G, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); t.preInit.length > 0; )
        t.preInit.pop()();
    G();
    let X = null, d = null, A = null, k = null;
    const c = f.Module;
    let cn = 0;
    const Jn = (n, e, r) => {
      X || (X = c._triangulate);
      let o = c.HEAPF32;
      const i = c.HEAP32.BYTES_PER_ELEMENT, u = 2, a = o.BYTES_PER_ELEMENT;
      r > cn && (cn = r, A && (c._free(A), A = 0), d && (c._free(d), d = 0)), A || (A = c._malloc(r * a)), k || (k = c._malloc(1e3 * i)), d || (d = c._malloc(r * a)), o = c.HEAPF32, o.set(n, A / a), c.HEAP32.set(e, k / i);
      const l = X(A, k, e.length, u, d), g = l * u;
      o = c.HEAPF32;
      const z = o.slice(d / a, d / a + g), Y = {};
      return Y.buffer = z, Y.vertexCount = l, Y;
    };
    return f.triangulate = Jn, f.whenLoaded();
  }
  return { load: S };
}, (pn = ln()) !== void 0 && (J.exports = pn);
const Qn = K.exports, Vn = Object.freeze(Kn({ __proto__: null, default: Qn }, [K.exports]));
export {
  Vn as l
};
