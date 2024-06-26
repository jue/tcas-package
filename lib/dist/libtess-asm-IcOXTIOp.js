function W4(K2, o0) {
  for (var Y2 = 0; Y2 < o0.length; Y2++) {
    const u2 = o0[Y2];
    if (typeof u2 != "string" && !Array.isArray(u2)) {
      for (const C in u2)
        if (C !== "default" && !(C in K2)) {
          const U2 = Object.getOwnPropertyDescriptor(u2, C);
          U2 && Object.defineProperty(K2, C, U2.get ? U2 : { enumerable: !0, get: () => u2[C] });
        }
    }
  }
  return Object.freeze(K2);
}
var O0, I1, M1, D0 = { exports: {} };
O0 = D0, I1 = function() {
  function K2(o0) {
    const Y2 = o0.locateFile, u2 = {};
    var C = C !== void 0 ? C : {};
    const U2 = (() => {
      let d;
      return { resolve: (y) => d(y), promise: new Promise((y) => d = y) };
    })(), _1 = () => U2.promise;
    C.locateFile = Y2, C.onRuntimeInitialized = () => {
      U2.resolve(u2);
    }, u2.Module = C, u2.whenLoaded = _1;
    var w2, N2 = {};
    for (w2 in C)
      C.hasOwnProperty(w2) && (N2[w2] = C[w2]);
    var v0, t0, b0, j2, F2, H0 = typeof window == "object", V2 = typeof importScripts == "function", d0 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", A2 = "";
    function S1(d) {
      return C.locateFile ? C.locateFile(d, A2) : A2 + d;
    }
    d0 ? (A2 = V2 ? require("path").dirname(A2) + "/" : __dirname + "/", v0 = function(d, y) {
      var M = H2(d);
      return M ? y ? M : M.toString() : (j2 || (j2 = require("fs")), F2 || (F2 = require("path")), d = F2.normalize(d), j2.readFileSync(d, y ? null : "utf8"));
    }, b0 = function(d) {
      var y = v0(d, !0);
      return y.buffer || (y = new Uint8Array(y)), B1(y.buffer), y;
    }, t0 = function(d, y, M) {
      var L = H2(d);
      L && y(L), j2 || (j2 = require("fs")), F2 || (F2 = require("path")), d = F2.normalize(d), j2.readFile(d, function(S, U) {
        S ? M(S) : y(U.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), O0.exports = C, process.on("uncaughtException", function(d) {
      if (!(d instanceof t4))
        throw d;
    }), process.on("unhandledRejection", i0), C.inspect = function() {
      return "[Emscripten Module object]";
    }) : (H0 || V2) && (V2 ? A2 = self.location.href : typeof document < "u" && document.currentScript && (A2 = document.currentScript.src), A2 = A2.indexOf("blob:") !== 0 ? A2.substr(0, A2.lastIndexOf("/") + 1) : "", v0 = function(d) {
      try {
        var y = new XMLHttpRequest();
        return y.open("GET", d, !1), y.send(null), y.responseText;
      } catch (L) {
        var M = H2(d);
        if (M)
          return Z1(M);
        throw L;
      }
    }, V2 && (b0 = function(d) {
      try {
        var y = new XMLHttpRequest();
        return y.open("GET", d, !1), y.responseType = "arraybuffer", y.send(null), new Uint8Array(y.response);
      } catch (L) {
        var M = H2(d);
        if (M)
          return M;
        throw L;
      }
    }), t0 = function(d, y, M) {
      var L = new XMLHttpRequest();
      L.open("GET", d, !0), L.responseType = "arraybuffer", L.onload = function() {
        if (L.status == 200 || L.status == 0 && L.response)
          y(L.response);
        else {
          var S = H2(d);
          S ? y(S.buffer) : M();
        }
      }, L.onerror = M, L.send(null);
    });
    var L1 = C.print || console.log.bind(console), O2 = C.printErr || console.warn.bind(console);
    for (w2 in N2)
      N2.hasOwnProperty(w2) && (C[w2] = N2[w2]);
    N2 = null, C.arguments, C.thisProgram, C.quit;
    var D2, Q0 = 0, P1 = function(d) {
      Q0 = d;
    }, x1 = function() {
      return Q0;
    };
    C.wasmBinary && (D2 = C.wasmBinary), C.noExitRuntime;
    var G2, m2 = { Memory: function(d) {
      this.buffer = new ArrayBuffer(65536 * d.initial);
    }, Module: function(d) {
    }, Instance: function(d, y) {
      this.exports = function(M) {
        function L(Q) {
          return Q.set = function(c2, N) {
            this[c2] = N;
          }, Q.get = function(c2) {
            return this[c2];
          }, Q;
        }
        for (var S, U = new Uint8Array(123), O = 25; O >= 0; --O)
          U[48 + O] = 52 + O, U[65 + O] = O, U[97 + O] = 26 + O;
        function D(Q, c2, N) {
          for (var h, s2, i = 0, m = c2, L2 = N.length, P2 = c2 + (3 * L2 >> 2) - (N[L2 - 2] == "=") - (N[L2 - 1] == "="); i < L2; i += 4)
            h = U[N.charCodeAt(i + 1)], s2 = U[N.charCodeAt(i + 2)], Q[m++] = U[N.charCodeAt(i)] << 2 | h >> 4, m < P2 && (Q[m++] = h << 4 | s2 >> 2), m < P2 && (Q[m++] = s2 << 6 | U[N.charCodeAt(i + 3)]);
        }
        function a2(Q) {
          D(S, 1024, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"), D(S, 1132, "BwAAAAAAAD8AAAA/AAAAAAAAAAB4Bg=="), D(S, 1168, "EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE="), D(S, 1249, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL"), D(S, 1307, "DA=="), D(S, 1319, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"), D(S, 1365, "Dg=="), D(S, 1377, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"), D(S, 1423, "EA=="), D(S, 1435, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"), D(S, 1490, "EgAAABISEgAAAAAAAAk="), D(S, 1539, "Cw=="), D(S, 1551, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"), D(S, 1597, "DA=="), D(S, 1609, "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG"), D(S, 1648, "4A9QAAAAAAAF"), D(S, 1668, "KA=="), D(S, 1692, "KQAAACoAAACYCwAAAAQ="), D(S, 1716, "AQ=="), D(S, 1731, "Cv////8="), D(S, 1972, "wA8=");
        }
        U[43] = 62, U[47] = 63;
        var o2 = new ArrayBuffer(16), Q2 = new Int32Array(o2), f1 = new Float64Array(o2);
        function W2(Q) {
          return Q2[Q];
        }
        function a1(Q, c2) {
          Q2[Q] = c2;
        }
        function k4() {
          return f1[0];
        }
        function y0(Q) {
          f1[0] = Q;
        }
        function u4(Q) {
          var c2 = Q.a, N = c2.buffer;
          c2.grow = Q4;
          var h = new Int8Array(N), s2 = new Int16Array(N), i = new Int32Array(N), m = new Uint8Array(N), L2 = new Uint16Array(N), P2 = new Uint32Array(N), c = new Float32Array(N), X = new Float64Array(N), W = Math.imul, u = Math.fround, c4 = Math.abs, s0 = Math.clz32, g2 = Math.max, t2 = Q.abort, K = Q.b, V = Q.c, x2 = Q.d, f0 = Q.e, n1 = Q.f, e1 = Q.g, s4 = Q.h, r4 = Q.i, A4 = Q.j, l4 = Q.k, v4 = Q.l, d4 = Q.m, B = 5246944, l2 = 0;
          function H(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, p = 0, w = 0;
            B = v = B - 16 | 0;
            i: {
              f: {
                a: {
                  n: {
                    e: {
                      b: {
                        o: {
                          c: {
                            u: {
                              t: {
                                A: {
                                  r: {
                                    if ((n |= 0) >>> 0 <= 244) {
                                      if (3 & (f = (t = i[614]) >>> (a = (s = n >>> 0 < 11 ? 16 : n + 11 & -8) >>> 3 | 0) | 0)) {
                                        n = (o = i[2504 + (f = (e = a + (1 & (-1 ^ f)) | 0) << 3) >> 2]) + 8 | 0, (0 | (a = i[o + 8 >> 2])) != (0 | (f = f + 2496 | 0)) ? (i[a + 12 >> 2] = f, i[f + 8 >> 2] = a) : (p = 2456, w = f2(e) & t, i[p >> 2] = w), f = e << 3, i[o + 4 >> 2] = 3 | f, i[4 + (f = f + o | 0) >> 2] = 1 | i[f + 4 >> 2];
                                        break i;
                                      }
                                      if ((A = i[616]) >>> 0 >= s >>> 0)
                                        break r;
                                      if (f) {
                                        a = n = (f = (0 - (n = (0 - (n = 2 << a) | n) & f << a) & n) - 1 | 0) >>> 12 & 16, a |= n = (f = f >>> n | 0) >>> 5 & 8, a |= n = (f = f >>> n | 0) >>> 2 & 4, b = i[2504 + (n = (a = ((a |= n = (f = f >>> n | 0) >>> 1 & 2) | (n = (f = f >>> n | 0) >>> 1 & 1)) + (f >>> n | 0) | 0) << 3) >> 2], (0 | (f = i[b + 8 >> 2])) != (0 | (n = n + 2496 | 0)) ? (i[f + 12 >> 2] = n, i[n + 8 >> 2] = f) : (t = f2(a) & t, i[614] = t), n = b + 8 | 0, i[b + 4 >> 2] = 3 | s, o = (f = a << 3) - s | 0, i[4 + (e = b + s | 0) >> 2] = 1 | o, i[f + b >> 2] = o, A && (a = 2496 + ((f = A >>> 3 | 0) << 3) | 0, b = i[619], (f = 1 << f) & t ? f = i[a + 8 >> 2] : (i[614] = f | t, f = a), i[a + 8 >> 2] = b, i[f + 12 >> 2] = b, i[b + 12 >> 2] = a, i[b + 8 >> 2] = f), i[619] = e, i[616] = o;
                                        break i;
                                      }
                                      if (!(k = i[615]))
                                        break r;
                                      for (a = n = (f = (k & 0 - k) - 1 | 0) >>> 12 & 16, a |= n = (f = f >>> n | 0) >>> 5 & 8, a |= n = (f = f >>> n | 0) >>> 2 & 4, f = i[2760 + (((a |= n = (f = f >>> n | 0) >>> 1 & 2) | (n = (f = f >>> n | 0) >>> 1 & 1)) + (f >>> n | 0) << 2) >> 2], e = (-8 & i[f + 4 >> 2]) - s | 0, a = f; (n = i[a + 16 >> 2]) || (n = i[a + 20 >> 2]); )
                                        e = (o = (a = (-8 & i[n + 4 >> 2]) - s | 0) >>> 0 < e >>> 0) ? a : e, f = o ? n : f, a = n;
                                      if ((r = f + s | 0) >>> 0 <= f >>> 0)
                                        break A;
                                      if (l = i[f + 24 >> 2], (0 | (o = i[f + 12 >> 2])) != (0 | f)) {
                                        n = i[f + 8 >> 2], i[n + 12 >> 2] = o, i[o + 8 >> 2] = n;
                                        break f;
                                      }
                                      if (!(n = i[(a = f + 20 | 0) >> 2])) {
                                        if (!(n = i[f + 16 >> 2]))
                                          break t;
                                        a = f + 16 | 0;
                                      }
                                      for (; b = a, o = n, (n = i[(a = n + 20 | 0) >> 2]) || (a = o + 16 | 0, n = i[o + 16 >> 2]); )
                                        ;
                                      i[b >> 2] = 0;
                                      break f;
                                    }
                                    if (s = -1, !(n >>> 0 > 4294967231) && (s = -8 & (n = n + 11 | 0), r = i[615])) {
                                      e = 0 - s | 0, t = 0, s >>> 0 < 256 || (t = 31, s >>> 0 > 16777215 || (n = n >>> 8 | 0, n <<= b = n + 1048320 >>> 16 & 8, t = 28 + ((n = ((n <<= a = n + 520192 >>> 16 & 4) << (f = n + 245760 >>> 16 & 2) >>> 15 | 0) - (f | a | b) | 0) << 1 | s >>> n + 21 & 1) | 0));
                                      k: {
                                        s: {
                                          if (a = i[2760 + (t << 2) >> 2])
                                            for (n = 0, f = s << ((0 | t) == 31 ? 0 : 25 - (t >>> 1 | 0) | 0); ; ) {
                                              if (!((b = (-8 & i[a + 4 >> 2]) - s | 0) >>> 0 >= e >>> 0 || (o = a, e = b))) {
                                                e = 0, n = a;
                                                break s;
                                              }
                                              if (b = i[a + 20 >> 2], a = i[16 + ((f >>> 29 & 4) + a | 0) >> 2], n = b ? (0 | b) == (0 | a) ? n : b : n, f <<= 1, !a)
                                                break;
                                            }
                                          else
                                            n = 0;
                                          if (!(n | o)) {
                                            if (o = 0, !(n = (0 - (n = 2 << t) | n) & r))
                                              break r;
                                            a = n = (f = (n & 0 - n) - 1 | 0) >>> 12 & 16, a |= n = (f = f >>> n | 0) >>> 5 & 8, a |= n = (f = f >>> n | 0) >>> 2 & 4, n = i[2760 + (((a |= n = (f = f >>> n | 0) >>> 1 & 2) | (n = (f = f >>> n | 0) >>> 1 & 1)) + (f >>> n | 0) << 2) >> 2];
                                          }
                                          if (!n)
                                            break k;
                                        }
                                        for (; e = (a = (f = (-8 & i[n + 4 >> 2]) - s | 0) >>> 0 < e >>> 0) ? f : e, o = a ? n : o, n = (f = i[n + 16 >> 2]) || i[n + 20 >> 2]; )
                                          ;
                                      }
                                      if (!(!o | i[616] - s >>> 0 <= e >>> 0)) {
                                        if ((k = o + s | 0) >>> 0 <= o >>> 0)
                                          break A;
                                        if (t = i[o + 24 >> 2], (0 | o) != (0 | (f = i[o + 12 >> 2]))) {
                                          n = i[o + 8 >> 2], i[n + 12 >> 2] = f, i[f + 8 >> 2] = n;
                                          break a;
                                        }
                                        if (!(n = i[(a = o + 20 | 0) >> 2])) {
                                          if (!(n = i[o + 16 >> 2]))
                                            break u;
                                          a = o + 16 | 0;
                                        }
                                        for (; b = a, f = n, (n = i[(a = n + 20 | 0) >> 2]) || (a = f + 16 | 0, n = i[f + 16 >> 2]); )
                                          ;
                                        i[b >> 2] = 0;
                                        break a;
                                      }
                                    }
                                  }
                                  if ((a = i[616]) >>> 0 >= s >>> 0) {
                                    e = i[619], (f = a - s | 0) >>> 0 >= 16 ? (i[616] = f, n = e + s | 0, i[619] = n, i[n + 4 >> 2] = 1 | f, i[a + e >> 2] = f, i[e + 4 >> 2] = 3 | s) : (i[619] = 0, i[616] = 0, i[e + 4 >> 2] = 3 | a, i[4 + (n = a + e | 0) >> 2] = 1 | i[n + 4 >> 2]), n = e + 8 | 0;
                                    break i;
                                  }
                                  if ((k = i[617]) >>> 0 > s >>> 0) {
                                    f = k - s | 0, i[617] = f, n = (a = i[620]) + s | 0, i[620] = n, i[n + 4 >> 2] = 1 | f, i[a + 4 >> 2] = 3 | s, n = a + 8 | 0;
                                    break i;
                                  }
                                  if (n = 0, f = r = s + 47 | 0, i[732] ? a = i[734] : (i[735] = -1, i[736] = -1, i[733] = 4096, i[734] = 4096, i[732] = v + 12 & -16 ^ 1431655768, i[737] = 0, i[725] = 0, a = 4096), (a = (b = f + a | 0) & (o = 0 - a | 0)) >>> 0 <= s >>> 0 || (e = i[724]) && e >>> 0 < (t = (f = i[722]) + a | 0) >>> 0 | f >>> 0 >= t >>> 0)
                                    break i;
                                  if (4 & m[2900])
                                    break b;
                                  r: {
                                    k: {
                                      if (e = i[620])
                                        for (n = 2904; ; ) {
                                          if (e >>> 0 < (f = i[n >> 2]) + i[n + 4 >> 2] >>> 0 && f >>> 0 <= e >>> 0)
                                            break k;
                                          if (!(n = i[n + 8 >> 2]))
                                            break;
                                        }
                                      if ((0 | (f = T2(0))) == -1 || (t = a, (n = (e = i[733]) - 1 | 0) & f && (t = (a - f | 0) + (n + f & 0 - e) | 0), t >>> 0 <= s >>> 0 | t >>> 0 > 2147483646) || (e = i[724]) && e >>> 0 < (o = (n = i[722]) + t | 0) >>> 0 | n >>> 0 >= o >>> 0)
                                        break o;
                                      if ((0 | f) != (0 | (n = T2(t))))
                                        break r;
                                      break e;
                                    }
                                    if ((t = o & b - k) >>> 0 > 2147483646)
                                      break o;
                                    if ((0 | (f = T2(t))) == (i[n >> 2] + i[n + 4 >> 2] | 0))
                                      break c;
                                    n = f;
                                  }
                                  if (!((0 | n) == -1 | s + 48 >>> 0 <= t >>> 0)) {
                                    if ((f = (f = i[734]) + (r - t | 0) & 0 - f) >>> 0 > 2147483646) {
                                      f = n;
                                      break e;
                                    }
                                    if ((0 | T2(f)) != -1) {
                                      t = f + t | 0, f = n;
                                      break e;
                                    }
                                    T2(0 - t | 0);
                                    break o;
                                  }
                                  if (f = n, (0 | n) != -1)
                                    break e;
                                  break o;
                                }
                                t2();
                              }
                              o = 0;
                              break f;
                            }
                            f = 0;
                            break a;
                          }
                          if ((0 | f) != -1)
                            break e;
                        }
                        i[725] = 4 | i[725];
                      }
                      if (a >>> 0 > 2147483646 || (0 | (f = T2(a))) == -1 | (0 | (n = T2(0))) == -1 | n >>> 0 <= f >>> 0 || (t = n - f | 0) >>> 0 <= s + 40 >>> 0)
                        break n;
                    }
                    n = i[722] + t | 0, i[722] = n, n >>> 0 > P2[723] && (i[723] = n);
                    e: {
                      b: {
                        o: {
                          if (b = i[620]) {
                            for (n = 2904; ; ) {
                              if (((e = i[n >> 2]) + (a = i[n + 4 >> 2]) | 0) == (0 | f))
                                break o;
                              if (!(n = i[n + 8 >> 2]))
                                break;
                            }
                            break b;
                          }
                          for ((n = i[618]) >>> 0 <= f >>> 0 && n || (i[618] = f), n = 0, i[727] = t, i[726] = f, i[622] = -1, i[623] = i[732], i[729] = 0; a = 2496 + (e = n << 3) | 0, i[e + 2504 >> 2] = a, i[e + 2508 >> 2] = a, (0 | (n = n + 1 | 0)) != 32; )
                            ;
                          a = (e = t - 40 | 0) - (n = f + 8 & 7 ? -8 - f & 7 : 0) | 0, i[617] = a, n = n + f | 0, i[620] = n, i[n + 4 >> 2] = 1 | a, i[4 + (f + e | 0) >> 2] = 40, i[621] = i[736];
                          break e;
                        }
                        if (!(8 & m[n + 12 | 0] | e >>> 0 > b >>> 0 | f >>> 0 <= b >>> 0)) {
                          i[n + 4 >> 2] = a + t, a = (n = b + 8 & 7 ? -8 - b & 7 : 0) + b | 0, i[620] = a, n = (f = i[617] + t | 0) - n | 0, i[617] = n, i[a + 4 >> 2] = 1 | n, i[4 + (f + b | 0) >> 2] = 40, i[621] = i[736];
                          break e;
                        }
                      }
                      P2[618] > f >>> 0 && (i[618] = f), a = f + t | 0, n = 2904;
                      b: {
                        o: {
                          c: {
                            u: {
                              t: {
                                A: {
                                  for (; ; ) {
                                    if ((0 | a) != i[n >> 2]) {
                                      if (n = i[n + 8 >> 2])
                                        continue;
                                      break A;
                                    }
                                    break;
                                  }
                                  if (!(8 & m[n + 12 | 0]))
                                    break t;
                                }
                                for (n = 2904; ; ) {
                                  if ((a = i[n >> 2]) >>> 0 <= b >>> 0 && (o = a + i[n + 4 >> 2] | 0) >>> 0 > b >>> 0)
                                    break u;
                                  n = i[n + 8 >> 2];
                                }
                              }
                              if (i[n >> 2] = f, i[n + 4 >> 2] = i[n + 4 >> 2] + t, i[4 + (r = (f + 8 & 7 ? -8 - f & 7 : 0) + f | 0) >> 2] = 3 | s, a = (t = a + (a + 8 & 7 ? -8 - a & 7 : 0) | 0) - (k = s + r | 0) | 0, (0 | b) == (0 | t)) {
                                i[620] = k, n = i[617] + a | 0, i[617] = n, i[k + 4 >> 2] = 1 | n;
                                break o;
                              }
                              if (i[619] == (0 | t)) {
                                i[619] = k, n = i[616] + a | 0, i[616] = n, i[k + 4 >> 2] = 1 | n, i[n + k >> 2] = n;
                                break o;
                              }
                              if ((3 & (n = i[t + 4 >> 2])) == 1) {
                                b = -8 & n;
                                t:
                                  if (n >>> 0 <= 255) {
                                    if (e = i[t + 8 >> 2], n = n >>> 3 | 0, (0 | (f = i[t + 12 >> 2])) == (0 | e)) {
                                      p = 2456, w = i[614] & f2(n), i[p >> 2] = w;
                                      break t;
                                    }
                                    i[e + 12 >> 2] = f, i[f + 8 >> 2] = e;
                                  } else {
                                    if (s = i[t + 24 >> 2], (0 | t) == (0 | (f = i[t + 12 >> 2])))
                                      if ((e = i[(n = t + 20 | 0) >> 2]) || (e = i[(n = t + 16 | 0) >> 2])) {
                                        for (; o = n, (e = i[(n = (f = e) + 20 | 0) >> 2]) || (n = f + 16 | 0, e = i[f + 16 >> 2]); )
                                          ;
                                        i[o >> 2] = 0;
                                      } else
                                        f = 0;
                                    else
                                      n = i[t + 8 >> 2], i[n + 12 >> 2] = f, i[f + 8 >> 2] = n;
                                    if (s) {
                                      e = i[t + 28 >> 2];
                                      A: {
                                        if (i[(n = 2760 + (e << 2) | 0) >> 2] == (0 | t)) {
                                          if (i[n >> 2] = f, f)
                                            break A;
                                          p = 2460, w = i[615] & f2(e), i[p >> 2] = w;
                                          break t;
                                        }
                                        if (i[s + (i[s + 16 >> 2] == (0 | t) ? 16 : 20) >> 2] = f, !f)
                                          break t;
                                      }
                                      i[f + 24 >> 2] = s, (n = i[t + 16 >> 2]) && (i[f + 16 >> 2] = n, i[n + 24 >> 2] = f), (n = i[t + 20 >> 2]) && (i[f + 20 >> 2] = n, i[n + 24 >> 2] = f);
                                    }
                                  }
                                t = b + t | 0, a = a + b | 0;
                              }
                              if (i[t + 4 >> 2] = -2 & i[t + 4 >> 2], i[k + 4 >> 2] = 1 | a, i[a + k >> 2] = a, a >>> 0 <= 255) {
                                f = 2496 + ((n = a >>> 3 | 0) << 3) | 0, (a = i[614]) & (n = 1 << n) ? n = i[f + 8 >> 2] : (i[614] = n | a, n = f), i[f + 8 >> 2] = k, i[n + 12 >> 2] = k, i[k + 12 >> 2] = f, i[k + 8 >> 2] = n;
                                break o;
                              }
                              if (n = 31, a >>> 0 <= 16777215 && (n = a >>> 8 | 0, n <<= o = n + 1048320 >>> 16 & 8, n = 28 + ((n = ((n <<= e = n + 520192 >>> 16 & 4) << (f = n + 245760 >>> 16 & 2) >>> 15 | 0) - (f | e | o) | 0) << 1 | a >>> n + 21 & 1) | 0), i[k + 28 >> 2] = n, i[k + 16 >> 2] = 0, i[k + 20 >> 2] = 0, o = 2760 + (n << 2) | 0, (e = i[615]) & (f = 1 << n)) {
                                for (n = a << ((0 | n) == 31 ? 0 : 25 - (n >>> 1 | 0) | 0), f = i[o >> 2]; ; ) {
                                  if (e = f, (-8 & i[f + 4 >> 2]) == (0 | a))
                                    break c;
                                  if (f = n >>> 29 | 0, n <<= 1, !(f = i[16 + (o = e + (4 & f) | 0) >> 2]))
                                    break;
                                }
                                i[o + 16 >> 2] = k, i[k + 24 >> 2] = e;
                              } else
                                i[615] = f | e, i[o >> 2] = k, i[k + 24 >> 2] = o;
                              i[k + 12 >> 2] = k, i[k + 8 >> 2] = k;
                              break o;
                            }
                            for (a = (e = t - 40 | 0) - (n = f + 8 & 7 ? -8 - f & 7 : 0) | 0, i[617] = a, n = n + f | 0, i[620] = n, i[n + 4 >> 2] = 1 | a, i[4 + (f + e | 0) >> 2] = 40, i[621] = i[736], i[(a = (n = (o + (o - 39 & 7 ? 39 - o & 7 : 0) | 0) - 47 | 0) >>> 0 < b + 16 >>> 0 ? b : n) + 4 >> 2] = 27, n = i[729], i[a + 16 >> 2] = i[728], i[a + 20 >> 2] = n, n = i[727], i[a + 8 >> 2] = i[726], i[a + 12 >> 2] = n, i[728] = a + 8, i[727] = t, i[726] = f, i[729] = 0, n = a + 24 | 0; i[n + 4 >> 2] = 7, f = n + 8 | 0, n = n + 4 | 0, f >>> 0 < o >>> 0; )
                              ;
                            if ((0 | a) == (0 | b))
                              break e;
                            if (i[a + 4 >> 2] = -2 & i[a + 4 >> 2], o = a - b | 0, i[b + 4 >> 2] = 1 | o, i[a >> 2] = o, o >>> 0 <= 255) {
                              f = 2496 + ((n = o >>> 3 | 0) << 3) | 0, (a = i[614]) & (n = 1 << n) ? n = i[f + 8 >> 2] : (i[614] = n | a, n = f), i[f + 8 >> 2] = b, i[n + 12 >> 2] = b, i[b + 12 >> 2] = f, i[b + 8 >> 2] = n;
                              break e;
                            }
                            if (n = 31, i[b + 16 >> 2] = 0, i[b + 20 >> 2] = 0, o >>> 0 <= 16777215 && (n = o >>> 8 | 0, n <<= e = n + 1048320 >>> 16 & 8, n = 28 + ((n = ((n <<= a = n + 520192 >>> 16 & 4) << (f = n + 245760 >>> 16 & 2) >>> 15 | 0) - (f | a | e) | 0) << 1 | o >>> n + 21 & 1) | 0), i[b + 28 >> 2] = n, e = 2760 + (n << 2) | 0, (a = i[615]) & (f = 1 << n)) {
                              for (n = o << ((0 | n) == 31 ? 0 : 25 - (n >>> 1 | 0) | 0), f = i[e >> 2]; ; ) {
                                if (a = f, (0 | o) == (-8 & i[f + 4 >> 2]))
                                  break b;
                                if (f = n >>> 29 | 0, n <<= 1, !(f = i[16 + (e = a + (4 & f) | 0) >> 2]))
                                  break;
                              }
                              i[e + 16 >> 2] = b, i[b + 24 >> 2] = a;
                            } else
                              i[615] = f | a, i[e >> 2] = b, i[b + 24 >> 2] = e;
                            i[b + 12 >> 2] = b, i[b + 8 >> 2] = b;
                            break e;
                          }
                          n = i[e + 8 >> 2], i[n + 12 >> 2] = k, i[e + 8 >> 2] = k, i[k + 24 >> 2] = 0, i[k + 12 >> 2] = e, i[k + 8 >> 2] = n;
                        }
                        n = r + 8 | 0;
                        break i;
                      }
                      n = i[a + 8 >> 2], i[n + 12 >> 2] = b, i[a + 8 >> 2] = b, i[b + 24 >> 2] = 0, i[b + 12 >> 2] = a, i[b + 8 >> 2] = n;
                    }
                    if (!((n = i[617]) >>> 0 <= s >>> 0)) {
                      f = n - s | 0, i[617] = f, n = (a = i[620]) + s | 0, i[620] = n, i[n + 4 >> 2] = 1 | f, i[a + 4 >> 2] = 3 | s, n = a + 8 | 0;
                      break i;
                    }
                  }
                  i[613] = 48, n = 0;
                  break i;
                }
                a:
                  if (t) {
                    a = i[o + 28 >> 2];
                    n: {
                      if (i[(n = 2760 + (a << 2) | 0) >> 2] == (0 | o)) {
                        if (i[n >> 2] = f, f)
                          break n;
                        r = f2(a) & r, i[615] = r;
                        break a;
                      }
                      if (i[t + (i[t + 16 >> 2] == (0 | o) ? 16 : 20) >> 2] = f, !f)
                        break a;
                    }
                    i[f + 24 >> 2] = t, (n = i[o + 16 >> 2]) && (i[f + 16 >> 2] = n, i[n + 24 >> 2] = f), (n = i[o + 20 >> 2]) && (i[f + 20 >> 2] = n, i[n + 24 >> 2] = f);
                  }
                a:
                  if (e >>> 0 <= 15)
                    n = e + s | 0, i[o + 4 >> 2] = 3 | n, i[4 + (n = n + o | 0) >> 2] = 1 | i[n + 4 >> 2];
                  else if (i[o + 4 >> 2] = 3 | s, i[k + 4 >> 2] = 1 | e, i[e + k >> 2] = e, e >>> 0 <= 255)
                    f = 2496 + ((n = e >>> 3 | 0) << 3) | 0, (a = i[614]) & (n = 1 << n) ? n = i[f + 8 >> 2] : (i[614] = n | a, n = f), i[f + 8 >> 2] = k, i[n + 12 >> 2] = k, i[k + 12 >> 2] = f, i[k + 8 >> 2] = n;
                  else {
                    n = 31, e >>> 0 <= 16777215 && (n = e >>> 8 | 0, n <<= b = n + 1048320 >>> 16 & 8, n = 28 + ((n = ((n <<= a = n + 520192 >>> 16 & 4) << (f = n + 245760 >>> 16 & 2) >>> 15 | 0) - (f | a | b) | 0) << 1 | e >>> n + 21 & 1) | 0), i[k + 28 >> 2] = n, i[k + 16 >> 2] = 0, i[k + 20 >> 2] = 0, a = 2760 + (n << 2) | 0;
                    n: {
                      if ((f = 1 << n) & r) {
                        for (n = e << ((0 | n) == 31 ? 0 : 25 - (n >>> 1 | 0) | 0), s = i[a >> 2]; ; ) {
                          if ((-8 & i[(f = s) + 4 >> 2]) == (0 | e))
                            break n;
                          if (a = n >>> 29 | 0, n <<= 1, !(s = i[16 + (a = f + (4 & a) | 0) >> 2]))
                            break;
                        }
                        i[a + 16 >> 2] = k, i[k + 24 >> 2] = f;
                      } else
                        i[615] = f | r, i[a >> 2] = k, i[k + 24 >> 2] = a;
                      i[k + 12 >> 2] = k, i[k + 8 >> 2] = k;
                      break a;
                    }
                    n = i[f + 8 >> 2], i[n + 12 >> 2] = k, i[f + 8 >> 2] = k, i[k + 24 >> 2] = 0, i[k + 12 >> 2] = f, i[k + 8 >> 2] = n;
                  }
                n = o + 8 | 0;
                break i;
              }
              f:
                if (l) {
                  a = i[f + 28 >> 2];
                  a: {
                    if (i[(n = 2760 + (a << 2) | 0) >> 2] == (0 | f)) {
                      if (i[n >> 2] = o, o)
                        break a;
                      p = 2460, w = f2(a) & k, i[p >> 2] = w;
                      break f;
                    }
                    if (i[(i[l + 16 >> 2] == (0 | f) ? 16 : 20) + l >> 2] = o, !o)
                      break f;
                  }
                  i[o + 24 >> 2] = l, (n = i[f + 16 >> 2]) && (i[o + 16 >> 2] = n, i[n + 24 >> 2] = o), (n = i[f + 20 >> 2]) && (i[o + 20 >> 2] = n, i[n + 24 >> 2] = o);
                }
              e >>> 0 <= 15 ? (n = e + s | 0, i[f + 4 >> 2] = 3 | n, i[4 + (n = n + f | 0) >> 2] = 1 | i[n + 4 >> 2]) : (i[f + 4 >> 2] = 3 | s, i[r + 4 >> 2] = 1 | e, i[e + r >> 2] = e, A && (a = 2496 + ((n = A >>> 3 | 0) << 3) | 0, o = i[619], (n = 1 << n) & t ? n = i[a + 8 >> 2] : (i[614] = n | t, n = a), i[a + 8 >> 2] = o, i[n + 12 >> 2] = o, i[o + 12 >> 2] = a, i[o + 8 >> 2] = n), i[619] = r, i[616] = e), n = f + 8 | 0;
            }
            return B = v + 16 | 0, 0 | n;
          }
          function h4(n, f, a, e, o) {
            n |= 0, f |= 0, a |= 0, e |= 0, o |= 0;
            for (var t = 0, b = 0, k = 0, s = 0, r = 0, A = 0, l = u(0), v = u(0), p = u(0), w = 0, g = 0, E = 0, R = 0, _ = 0, P = 0, x = 0, j = 0, F = 0; (b = i[2032 + (t = k << 2) >> 2]) && (i[b >> 2] = 0), (b = i[2032 + (4 | t) >> 2]) && (i[b >> 2] = 0), (b = i[2032 + (8 | t) >> 2]) && (i[b >> 2] = 0), (t = i[2032 + (12 | t) >> 2]) && (i[t >> 2] = 0), (0 | (k = k + 4 | 0)) != 100; )
              ;
            if ((k = i[608]) || (k = H(12), i[608] = k), i[k + 4 >> 2] = 0, i[k + 8 >> 2] = e, i[k >> 2] = o, (k = i[609]) || ((o = H(1900)) ? (i[o + 100 >> 2] = 12, i[o + 96 >> 2] = 13, i[o + 92 >> 2] = 14, i[o + 88 >> 2] = 15, s2[o + 80 >> 1] = 0, i[o + 52 >> 2] = 0, i[o + 56 >> 2] = 100130, i[o + 16 >> 2] = 0, i[o + 20 >> 2] = 0, i[o >> 2] = 0, i[o + 1896 >> 2] = 0, i[o + 1736 >> 2] = 8, i[o + 1732 >> 2] = 11, i[o + 1728 >> 2] = 6, i[o + 1724 >> 2] = 5, i[o + 1720 >> 2] = 4, i[o + 1716 >> 2] = 3, i[o + 104 >> 2] = 16, i[o + 76 >> 2] = 17, i[o + 12 >> 2] = 18, i[o + 24 >> 2] = 0) : o = 0, i[609] = o, q2(o, 100107, 34), q2(i[609], 100100, 35), q2(i[609], 100102, 36), q2(i[609], 100105, 37), q2(i[609], 100103, 38), q2(i[609], 100104, 39), i[i[609] + 56 >> 2] = 100130, o = i[609], c[o + 16 >> 2] = 0, c[o + 24 >> 2] = 1, c[o + 20 >> 2] = 0, k = i[609]), o = 0, t = i[608], i[k >> 2] && C2(k, 0), i[k + 112 >> 2] = 0, i[k >> 2] = 1, h[k + 108 | 0] = 0, i[k + 1896 >> 2] = t, i[k + 8 >> 2] = 0, (0 | a) > 0)
              for (; ; ) {
                if (w = i[(g << 2) + f >> 2], t = i[609], i[t >> 2] != 1 && C2(t, 1), i[t >> 2] = 2, i[t + 4 >> 2] = 0, i[t + 112 >> 2] >= 1 && (h[t + 108 | 0] = 1), k = 0, (0 | w) > 0)
                  for (; ; ) {
                    r = E = (W(o + k | 0, e) << 2) + n | 0, b = i[609], i[b >> 2] != 2 && C2(b, 2);
                    i: {
                      f: {
                        a: {
                          if (m[b + 108 | 0]) {
                            if (t = R0(), i[b + 8 >> 2] = t, !t)
                              break a;
                            if ((0 | (t = i[b + 112 >> 2])) >= 1)
                              for (R = 116 + (b + (t << 4) | 0) | 0, s = b + 116 | 0, t = i[b + 4 >> 2]; ; ) {
                                F = i[s + 12 >> 2];
                                n: {
                                  if (!t) {
                                    if (!(t = a0(i[b + 8 >> 2])))
                                      break a;
                                    if (z(t, i[t + 4 >> 2]))
                                      break n;
                                    break a;
                                  }
                                  if (!n2(t))
                                    break a;
                                  t = i[t + 12 >> 2];
                                }
                                if (A = i[t + 16 >> 2], i[A + 12 >> 2] = F, c[A + 16 >> 2] = c[s >> 2], l = c[s + 4 >> 2], i[A + 24 >> 2] = 0, c[A + 20 >> 2] = l, i[t + 28 >> 2] = 1, i[i[t + 4 >> 2] + 28 >> 2] = -1, i[b + 4 >> 2] = t, !(R >>> 0 > (s = s + 16 | 0) >>> 0))
                                  break;
                              }
                            h[b + 108 | 0] = 0, i[b + 112 >> 2] = 0, i[b + 4 >> 2] = 0;
                          }
                          s = (P = +(l = (_ = +(l = c[r + 4 >> 2])) < -1e37 ? u(-9999999933815813e21) : l)) > 1e37, A = (j = +(v = (x = +(v = c[r >> 2])) < -1e37 ? u(-9999999933815813e21) : v)) > 1e37, ((t = +(p = c[r + 8 >> 2]) < -1e37) | (r = +(p = t ? u(-9999999933815813e21) : p) > 1e37) | _ < -1e37 | P > 1e37 || j > 1e37 || x < -1e37) && ((0 | (t = i[b + 1732 >> 2])) == 11 ? I[i[b + 12 >> 2]](100155) : I[0 | t](100155, i[b + 1896 >> 2])), l = s ? u(9999999933815813e21) : l, v = A ? u(9999999933815813e21) : v;
                          n: {
                            if (!i[b + 8 >> 2]) {
                              if ((0 | (s = i[b + 112 >> 2])) <= 99) {
                                c[124 + (t = b + (s << 4) | 0) >> 2] = r ? u(9999999933815813e21) : p, c[t + 120 >> 2] = l, c[t + 116 >> 2] = v, i[t + 128 >> 2] = E, i[b + 112 >> 2] = s + 1;
                                break i;
                              }
                              if (t = R0(), i[b + 8 >> 2] = t, !t)
                                break n;
                              if ((0 | (t = i[b + 112 >> 2])) >= 1)
                                for (A = 116 + (b + (t << 4) | 0) | 0, s = b + 116 | 0, t = i[b + 4 >> 2]; ; ) {
                                  R = i[s + 12 >> 2];
                                  e: {
                                    if (!t) {
                                      if (!(t = a0(i[b + 8 >> 2])))
                                        break n;
                                      if (z(t, i[t + 4 >> 2]))
                                        break e;
                                      break n;
                                    }
                                    if (!n2(t))
                                      break n;
                                    t = i[t + 12 >> 2];
                                  }
                                  if (r = i[t + 16 >> 2], i[r + 12 >> 2] = R, c[r + 16 >> 2] = c[s >> 2], p = c[s + 4 >> 2], i[r + 24 >> 2] = 0, c[r + 20 >> 2] = p, i[t + 28 >> 2] = 1, i[i[t + 4 >> 2] + 28 >> 2] = -1, i[b + 4 >> 2] = t, !(A >>> 0 > (s = s + 16 | 0) >>> 0))
                                    break;
                                }
                              h[b + 108 | 0] = 0, i[b + 112 >> 2] = 0;
                            }
                            e: {
                              b: {
                                if (!(t = i[b + 4 >> 2])) {
                                  if (!(t = a0(i[b + 8 >> 2])))
                                    break e;
                                  if (z(t, i[t + 4 >> 2]))
                                    break b;
                                  break e;
                                }
                                if (!n2(t))
                                  break e;
                                t = i[t + 12 >> 2];
                              }
                              s = i[t + 16 >> 2], c[s + 16 >> 2] = v, i[s + 12 >> 2] = E, i[s + 24 >> 2] = 0, c[s + 20 >> 2] = l, i[t + 28 >> 2] = 1, i[i[t + 4 >> 2] + 28 >> 2] = -1, i[b + 4 >> 2] = t;
                              break i;
                            }
                            if ((0 | (t = i[b + 1732 >> 2])) != 11)
                              break f;
                            I[i[b + 12 >> 2]](100902);
                            break i;
                          }
                          if ((0 | (t = i[b + 1732 >> 2])) != 11)
                            break f;
                          I[i[b + 12 >> 2]](100902);
                          break i;
                        }
                        if ((0 | (t = i[b + 1732 >> 2])) == 11) {
                          I[i[b + 12 >> 2]](100902);
                          break i;
                        }
                      }
                      I[0 | t](100902, i[b + 1896 >> 2]);
                    }
                    if ((0 | w) == (0 | (k = k + 1 | 0)))
                      break;
                  }
                if (t = i[609], i[t >> 2] != 2 && C2(t, 2), i[t >> 2] = 1, o = o + w | 0, (0 | (g = g + 1 | 0)) == (0 | a))
                  break;
              }
            a = i[609], n = 0, f = H(40), i[f >> 2] = 0, o = m1(s = a + 1740 | 0, 1, f, 4), b = 0 | V();
            i: {
              f: {
                a: {
                  n: {
                    e: {
                      b:
                        for (; ; ) {
                          o: {
                            c: {
                              u: {
                                t: {
                                  A: {
                                    r: {
                                      k: {
                                        if (n) {
                                          if ((0 | (n = i[a + 1732 >> 2])) != 11) {
                                            if (f = i[a + 1896 >> 2], i[611] = 0, x2(0 | n, 100902, 0 | f), n = i[611], i[611] = 0, f = -1, !n || !(e = i[612]))
                                              break r;
                                            if (f = J(i[n >> 2], o, b))
                                              break k;
                                            break e;
                                          }
                                          if (n = i[a + 12 >> 2], i[611] = 0, n1(0 | n, 100902), n = i[611], i[611] = 0, f = -1, !n || !(e = i[612]))
                                            break t;
                                          if (f = J(i[n >> 2], o, b))
                                            break A;
                                          break e;
                                        }
                                        if (i[a >> 2] == 1)
                                          break o;
                                        if (i[611] = 0, x2(19, 0 | a, 1), n = i[611], i[611] = 0, f = -1, !n || !(e = i[612]))
                                          break c;
                                        if (f = J(i[n >> 2], o, b))
                                          break u;
                                        break e;
                                      }
                                      K(0 | e);
                                    }
                                    if (n = 0 | V(), (0 | f) == 1)
                                      continue;
                                    break i;
                                  }
                                  K(0 | e);
                                }
                                if (n = 0 | V(), (0 | f) == 1)
                                  continue;
                                break i;
                              }
                              K(0 | e);
                            }
                            if (n = 0 | V(), (0 | f) == 1)
                              continue;
                          }
                          i[a >> 2] = 0;
                          o: {
                            c: {
                              u: {
                                if (!i[a + 8 >> 2]) {
                                  if (!(m[a + 80 | 0] | i[a + 104 >> 2] != 16)) {
                                    if (i[611] = 0, t = 0 | f0(20, 0 | a), n = i[611], i[611] = 0, f = -1, n && (e = i[612])) {
                                      if (!(f = J(i[n >> 2], o, b)))
                                        break e;
                                      K(0 | e);
                                    }
                                    if (n = 0 | V(), (0 | f) == 1)
                                      continue;
                                    if (t) {
                                      i[a + 1896 >> 2] = 0;
                                      break i;
                                    }
                                  }
                                  if (i[611] = 0, e = 0 | v4(21), n = i[611], i[611] = 0, f = -1, n && (t = i[612])) {
                                    if (!(f = J(i[n >> 2], o, b)))
                                      break n;
                                    K(0 | t);
                                  }
                                  if (n = 0 | V(), (0 | f) == 1)
                                    continue;
                                  if (i[a + 8 >> 2] = e, !e)
                                    break u;
                                  if ((0 | (n = i[a + 112 >> 2])) >= 1)
                                    for (w = 116 + (a + (n << 4) | 0) | 0, e = a + 116 | 0, f = i[a + 4 >> 2]; ; ) {
                                      r = i[e + 12 >> 2];
                                      t: {
                                        A: {
                                          r: {
                                            k: {
                                              s: {
                                                l: {
                                                  if (!f) {
                                                    if (n = i[a + 8 >> 2], i[611] = 0, f = 0 | f0(22, 0 | n), n = i[611], i[611] = 0, t = -1, !n || !(k = i[612]))
                                                      break s;
                                                    if (t = J(i[n >> 2], o, b))
                                                      break l;
                                                    break a;
                                                  }
                                                  if (i[611] = 0, A = 0 | f0(23, 0 | f), n = i[611], i[611] = 0, t = -1, !n || !(k = i[612]))
                                                    break r;
                                                  if (t = J(i[n >> 2], o, b))
                                                    break k;
                                                  break a;
                                                }
                                                K(0 | k);
                                              }
                                              if (n = 0 | V(), (0 | t) != 1)
                                                break A;
                                              continue b;
                                            }
                                            K(0 | k);
                                          }
                                          if (n = 0 | V(), (0 | t) == 1)
                                            continue b;
                                          if (!A)
                                            break u;
                                          f = i[f + 12 >> 2];
                                          break t;
                                        }
                                        if (!f)
                                          break u;
                                        if (n = i[f + 4 >> 2], i[611] = 0, A = 0 | l4(24, 0 | f, 0 | n), n = i[611], i[611] = 0, t = -1, n && (k = i[612])) {
                                          if (!(t = J(i[n >> 2], o, b)))
                                            break a;
                                          K(0 | k);
                                        }
                                        if (n = 0 | V(), (0 | t) == 1)
                                          continue b;
                                        if (!A)
                                          break u;
                                      }
                                      if (n = i[f + 16 >> 2], i[n + 12 >> 2] = r, c[n + 16 >> 2] = c[e >> 2], l = c[e + 4 >> 2], i[n + 24 >> 2] = 0, c[n + 20 >> 2] = l, i[f + 28 >> 2] = 1, i[i[f + 4 >> 2] + 28 >> 2] = -1, i[a + 4 >> 2] = f, !(w >>> 0 > (e = e + 16 | 0) >>> 0))
                                        break;
                                    }
                                  h[a + 108 | 0] = 0, i[a + 112 >> 2] = 0;
                                }
                                if (i[611] = 0, t1(a), n = i[611], i[611] = 0, f = -1, !n || !(e = i[612]))
                                  break o;
                                if (f = J(i[n >> 2], o, b))
                                  break c;
                                break e;
                              }
                              if (i[611] = 0, x2(26, 0 | s, 1), f = i[611], i[611] = 0, f && (n = i[612])) {
                                if (!J(i[f >> 2], o, b))
                                  break f;
                                K(0 | n);
                              }
                              n = 0 | V();
                              continue;
                            }
                            K(0 | e);
                          }
                          if (n = 0 | V(), (0 | f) != 1) {
                            if (i[611] = 0, t = 0 | f0(27, 0 | a), n = i[611], i[611] = 0, f = -1, n && (e = i[612])) {
                              if (!(f = J(i[n >> 2], o, b)))
                                break e;
                              K(0 | e);
                            }
                            if (n = 0 | V(), (0 | f) != 1) {
                              o: {
                                c: {
                                  u: {
                                    t: {
                                      A: {
                                        r: {
                                          k: {
                                            s: {
                                              l: {
                                                v: {
                                                  d: {
                                                    if (!t) {
                                                      if (i[611] = 0, x2(26, 0 | s, 1), f = i[611], i[611] = 0, !f || !(n = i[612]))
                                                        break v;
                                                      if (J(i[f >> 2], o, b))
                                                        break d;
                                                      break f;
                                                    }
                                                    if (f = i[a + 8 >> 2], m[a + 60 | 0])
                                                      break r;
                                                    if (m[a + 81 | 0]) {
                                                      if (i[611] = 0, t = 0 | A4(28, 0 | f, 1, 1), n = i[611], i[611] = 0, e = -1, !n || !(k = i[612]))
                                                        break k;
                                                      if (e = J(i[n >> 2], o, b))
                                                        break l;
                                                      break a;
                                                    }
                                                    if (i[611] = 0, t = 0 | f0(29, 0 | f), n = i[611], i[611] = 0, e = -1, !n || !(k = i[612]))
                                                      break k;
                                                    if (e = J(i[n >> 2], o, b))
                                                      break s;
                                                    break a;
                                                  }
                                                  K(0 | n);
                                                }
                                                n = 0 | V();
                                                continue;
                                              }
                                              K(0 | k);
                                              break k;
                                            }
                                            K(0 | k);
                                          }
                                          if (n = 0 | V(), (0 | e) == 1)
                                            continue;
                                          k: {
                                            s: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        if (!t) {
                                                          if (i[611] = 0, x2(26, 0 | s, 1), f = i[611], i[611] = 0, !f || !(n = i[612]))
                                                            break h;
                                                          if (J(i[f >> 2], o, b))
                                                            break p;
                                                          break f;
                                                        }
                                                        if (!(i[a + 88 >> 2] != 15 | i[a + 100 >> 2] != 12 | i[a + 96 >> 2] != 13 | i[a + 92 >> 2] != 14 || i[a + 1716 >> 2] != 3 | i[a + 1728 >> 2] != 6 | i[a + 1724 >> 2] != 5 || i[a + 1720 >> 2] != 4))
                                                          break k;
                                                        if (m[a + 81 | 0]) {
                                                          if (i[611] = 0, x2(30, 0 | a, 0 | f), n = i[611], i[611] = 0, e = -1, !n || !(t = i[612]))
                                                            break v;
                                                          if (e = J(i[n >> 2], o, b))
                                                            break d;
                                                          break n;
                                                        }
                                                        if (i[611] = 0, x2(31, 0 | a, 0 | f), n = i[611], i[611] = 0, e = -1, !n || !(t = i[612]))
                                                          break s;
                                                        if (e = J(i[n >> 2], o, b))
                                                          break l;
                                                        break n;
                                                      }
                                                      K(0 | n);
                                                    }
                                                    n = 0 | V();
                                                    continue;
                                                  }
                                                  K(0 | t);
                                                }
                                                if (n = 0 | V(), (0 | e) == 1)
                                                  continue;
                                                break k;
                                              }
                                              K(0 | t);
                                            }
                                            if (n = 0 | V(), (0 | e) == 1)
                                              continue;
                                          }
                                          if (i[a + 104 >> 2] != 16) {
                                            if (i[611] = 0, c1(f), n = i[611], i[611] = 0, e = -1, !n || !(t = i[612]))
                                              break t;
                                            if (e = J(i[n >> 2], o, b))
                                              break A;
                                            break n;
                                          }
                                        }
                                        if (i[611] = 0, M0(f), n = i[611], i[611] = 0, f = -1, !n || !(e = i[612]))
                                          break c;
                                        if (f = J(i[n >> 2], o, b))
                                          break u;
                                        break e;
                                      }
                                      K(0 | t);
                                    }
                                    if (n = 0 | V(), (0 | e) != 1)
                                      break o;
                                    continue;
                                  }
                                  K(0 | e);
                                }
                                if (n = 0 | V(), (0 | f) == 1)
                                  continue;
                                i[a + 8 >> 2] = 0, i[a + 1896 >> 2] = 0;
                                break i;
                              }
                              if (n = i[a + 104 >> 2], i[611] = 0, n1(0 | n, 0 | f), n = i[611], i[611] = 0, f = -1, n && (e = i[612])) {
                                if (!(f = J(i[n >> 2], o, b)))
                                  break e;
                                K(0 | e);
                              }
                              if (n = 0 | V(), (0 | f) != 1)
                                break;
                            }
                          }
                        }
                      i[a + 1896 >> 2] = 0, i[a + 8 >> 2] = 0;
                      break i;
                    }
                    b2(n, e), t2();
                  }
                  b2(n, t), t2();
                }
                b2(n, k), t2();
              }
              b2(f, n), t2();
            }
            return T(o), i[i[608] + 4 >> 2];
          }
          function o1(n, f) {
            var a = u(0), e = u(0), o = 0, t = u(0), b = u(0), k = 0, s = 0, r = u(0), A = 0, l = 0, v = 0, p = u(0), w = u(0), g = u(0), E = 0, R = 0, _ = 0, P = 0, x = 0, j = 0, F = 0, q = 0, Y = 0, k2 = u(0), p2 = 0, e0 = u(0);
            B = k = B - 144 | 0, Y = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], F = i[Y >> 2], _ = i[F + 16 >> 2], x = i[i[F + 4 >> 2] + 16 >> 2], j = i[f >> 2], P = i[i[j + 4 >> 2] + 16 >> 2], E = i[j + 16 >> 2], G(P, i[n + 72 >> 2], E) > u(0) && (a = c[P + 28 >> 2], e = c[P + 32 >> 2], o = i[n + 72 >> 2], t = c[o + 28 >> 2], b = c[o + 32 >> 2], r = c[E + 28 >> 2], X[k + 40 >> 3] = c[E + 32 >> 2], X[k + 32 >> 3] = r, X[k + 24 >> 3] = b, X[k + 16 >> 3] = t, X[k + 8 >> 3] = e, X[k >> 3] = a, E1(1098, k));
            i: {
              f: {
                a:
                  if ((0 | E) != (0 | _) && !((w = (a = c[E + 32 >> 2]) <= (e = c[P + 32 >> 2]) ? a : e) > ((e = c[_ + 32 >> 2]) >= (t = c[x + 32 >> 2]) ? e : t))) {
                    n: {
                      if (!(!(a <= e) | (t = c[E + 28 >> 2]) != (b = c[_ + 28 >> 2])) || t < b) {
                        if (!(G(x, E, _) > u(0)))
                          break n;
                        break a;
                      }
                      if (G(P, _, E) < u(0))
                        break a;
                    }
                    v = x, o = _, l = E, (a = c[(A = P) + 28 >> 2]) < (e = c[E + 28 >> 2]) | (c[A + 32 >> 2] <= c[l + 32 >> 2] ? a == e : 0) ? (s = l, l = A) : s = A, (a = c[o + 28 >> 2]) > (e = c[v + 28 >> 2]) | (c[v + 32 >> 2] <= c[o + 32 >> 2] ? a == e : 0) ? (a = e, A = o, o = v) : A = v, a > (e = c[l + 28 >> 2]) | (c[l + 32 >> 2] <= c[o + 32 >> 2] ? a == e : 0) ? (e = a, v = A, R = o, A = s, o = l) : (v = s, R = l), s = k;
                    n:
                      if ((b = c[A + 28 >> 2]) > e | (c[R + 32 >> 2] <= c[A + 32 >> 2] ? e == b : 0))
                        if (p = c[v + 28 >> 2], !(c[A + 32 >> 2] <= c[v + 32 >> 2]) | b != p && !(p > b))
                          if (e = G(o, R, A), a = G(o, v, A), l = u(e - a) < u(0), (t = u(g2(l ? u(-e) : e, u(0)))) <= (e = u(g2(l ? a : u(-a), u(0))))) {
                            if (b = c[R + 28 >> 2], r = c[v + 28 >> 2], a = u(u(b + r) * u(0.5)), e == u(0))
                              break n;
                            a = u(b + u(u(t / u(t + e)) * u(r - b)));
                          } else
                            a = c[v + 28 >> 2], a = u(a + u(u(e / u(t + e)) * u(c[R + 28 >> 2] - a)));
                        else {
                          if (a = u(0), r = u(b - e), t = u(e - c[o + 28 >> 2]), (w = u(r + t)) > u(0) && (a = c[((l = t < r) ? o : A) + 32 >> 2], a = u(u(c[R + 32 >> 2] - a) + u(u((l ? t : r) / w) * u(a - c[(l ? A : o) + 32 >> 2])))), k2 = u(-a), w = a, p = u(p - b), (t = u(r + p)) > u(0) && (g = c[((l = r < p) ? R : v) + 32 >> 2], g = u(u(c[A + 32 >> 2] - g) + u(u((l ? r : p) / t) * u(g - c[(l ? v : R) + 32 >> 2])))), l = u(a + g) < u(0), (p = u(g2(l ? k2 : w, u(0)))) <= (t = u(g2(l ? u(-g) : g, u(0))))) {
                            if (a = u(u(e + b) * u(0.5)), t == u(0))
                              break n;
                            a = u(e + u(r * u(p / u(p + t))));
                            break n;
                          }
                          a = u(b + u(u(e - b) * u(t / u(p + t))));
                        }
                      else
                        a = u(u(e + b) * u(0.5));
                    c[s + 84 >> 2] = a, (a = c[o + 32 >> 2]) < (e = c[A + 32 >> 2]) | (c[o + 28 >> 2] <= c[A + 28 >> 2] ? a == e : 0) ? (s = A, A = o) : s = o, (e = c[v + 32 >> 2]) > (a = c[R + 32 >> 2]) | (c[R + 28 >> 2] <= c[v + 28 >> 2] ? a == e : 0) ? (e = a, o = v, v = R) : o = R, (a = c[A + 32 >> 2]) < e | (c[A + 28 >> 2] <= c[v + 28 >> 2] ? a == e : 0) ? (R = o, l = v, o = s, v = A) : (R = s, l = A);
                    n: {
                      e:
                        if ((b = c[l + 32 >> 2]) < (r = c[o + 32 >> 2]) | (c[l + 28 >> 2] <= c[o + 28 >> 2] ? b == r : 0)) {
                          if (g = c[R + 32 >> 2], !(!(c[o + 28 >> 2] <= c[R + 28 >> 2]) | r != g) || g > r) {
                            if (a = u(0), e = u(0), p = u(r - b), t = u(b - c[v + 32 >> 2]), (w = u(p + t)) > u(0) && (e = c[((s = t < p) ? v : o) + 28 >> 2], e = u(u(c[l + 28 >> 2] - e) + u(u((s ? t : p) / w) * u(e - c[(s ? o : v) + 28 >> 2])))), e0 = u(-e), w = e, g = u(g - r), (t = u(p + g)) > u(0) && (k2 = c[o + 28 >> 2], a = c[((o = p < g) ? l : R) + 28 >> 2], a = u(u(k2 - a) + u(u((o ? p : g) / t) * u(a - c[(o ? R : l) + 28 >> 2])))), o = u(e + a) < u(0), (e = u(g2(o ? e0 : w, u(0)))) <= (a = u(g2(o ? u(-a) : a, u(0))))) {
                              if (a == u(0))
                                break e;
                              c[k + 88 >> 2] = b + u(p * u(e / u(e + a)));
                              break n;
                            }
                            c[k + 88 >> 2] = r + u(u(b - r) * u(a / u(e + a)));
                            break n;
                          }
                          if (a = u(0), e = u(0), t = u(r - b), p = c[v + 32 >> 2], w = u(b - p), u(t + w) > u(0) && (e = c[l + 28 >> 2], e = u(u(w * u(e - c[o + 28 >> 2])) + u(t * u(e - c[v + 28 >> 2])))), w = u(-e), t = e, r = u(r - g), p = u(g - p), u(r + p) > u(0) && (a = c[R + 28 >> 2], a = u(u(p * u(a - c[o + 28 >> 2])) + u(r * u(a - c[v + 28 >> 2])))), o = u(e - a) < u(0), (e = u(g2(o ? w : t, u(0)))) <= (a = u(g2(o ? a : u(-a), u(0))))) {
                            if (a == u(0)) {
                              c[k + 88 >> 2] = u(b + g) * u(0.5);
                              break n;
                            }
                            c[k + 88 >> 2] = b + u(u(g - b) * u(e / u(e + a)));
                            break n;
                          }
                          c[k + 88 >> 2] = g + u(u(b - g) * u(a / u(e + a)));
                          break n;
                        }
                      c[k + 88 >> 2] = u(b + r) * u(0.5);
                    }
                    a = c[k + 84 >> 2], s = i[n + 72 >> 2];
                    n: {
                      if (a < (t = c[s + 28 >> 2]))
                        e = c[s + 32 >> 2];
                      else if (a != t || !((e = c[s + 32 >> 2]) >= c[k + 88 >> 2]))
                        break n;
                      c[k + 88 >> 2] = e, c[k + 84 >> 2] = t, a = t;
                    }
                    A = o = E, (e = t = c[o + 28 >> 2]) < (b = c[_ + 28 >> 2]) || t == b && (e = t, A = E, c[o + 32 >> 2] <= c[_ + 32 >> 2]) || (e = b, A = _), o = A;
                    n: {
                      if (a > e)
                        b = c[o + 32 >> 2];
                      else if (a != e || !((b = c[o + 32 >> 2]) <= c[k + 88 >> 2]))
                        break n;
                      c[k + 88 >> 2] = b, c[k + 84 >> 2] = e, t = c[E + 28 >> 2], a = e;
                    }
                    if (c[_ + 28 >> 2] != a | c[k + 88 >> 2] != c[_ + 32 >> 2] && (c[k + 88 >> 2] != c[E + 32 >> 2] || a != t)) {
                      n: {
                        a = c[s + 28 >> 2];
                        e: {
                          if (c[P + 32 >> 2] != c[s + 32 >> 2] || a != c[P + 28 >> 2]) {
                            if (G(P, s, k + 56 | 0) >= u(0))
                              break e;
                            s = i[n + 72 >> 2], a = c[s + 28 >> 2];
                          }
                          if (c[x + 32 >> 2] == c[s + 32 >> 2] && a == c[x + 28 >> 2] || !(G(x, s, k + 56 | 0) <= u(0)))
                            break n;
                        }
                        if ((0 | (o = i[n + 72 >> 2])) == (0 | x)) {
                          if (!n2(i[j + 4 >> 2]) || !z(i[F + 4 >> 2], j))
                            break i;
                          for (o = i[i[f >> 2] + 16 >> 2]; f = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2], A = i[f >> 2], (0 | o) == i[A + 16 >> 2]; )
                            ;
                          if (s = f, m[f + 15 | 0] && (s = 0, (o = v2(i[i[i[i[i[f + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[A + 12 >> 2])) && $(i[f >> 2]) && (i[f >> 2] = o, h[f + 15 | 0] = 0, i[o + 24 >> 2] = f, s = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2])), !s)
                            break i;
                          o = i[i[i[s + 4 >> 2] + 8 >> 2] >> 2], f = i[o >> 2], n0(n, o, Y), p2 = 1, B2(n, s, i[i[f + 4 >> 2] + 12 >> 2], f, f, 1);
                          break a;
                        }
                        if ((0 | o) == (0 | P)) {
                          if (!n2(i[F + 4 >> 2]) || !z(i[j + 12 >> 2], i[i[F + 4 >> 2] + 12 >> 2]))
                            break i;
                          for (s = i[i[i[f >> 2] + 4 >> 2] + 16 >> 2], o = f; o = i[i[i[o + 4 >> 2] + 4 >> 2] >> 2], (0 | s) == i[i[i[o >> 2] + 4 >> 2] + 16 >> 2]; )
                            ;
                          s = i[i[i[i[i[i[o + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2] + 8 >> 2], i[f >> 2] = i[i[F + 4 >> 2] + 12 >> 2], p2 = 1, B2(n, o, i[n0(n, f, 0) + 8 >> 2], i[i[j + 4 >> 2] + 8 >> 2], s, 1);
                          break a;
                        }
                        if (G(P, o, k + 56 | 0) >= u(0)) {
                          if (h[f + 14 | 0] = 1, h[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !n2(i[j + 4 >> 2]))
                            break i;
                          s = i[j + 16 >> 2], o = i[n + 72 >> 2], c[s + 28 >> 2] = c[o + 28 >> 2], c[s + 32 >> 2] = c[o + 32 >> 2];
                        } else
                          o = i[n + 72 >> 2];
                        if (!(G(x, o, k + 56 | 0) <= u(0)))
                          break a;
                        if (h[Y + 14 | 0] = 1, h[f + 14 | 0] = 1, !n2(i[F + 4 >> 2]))
                          break i;
                        f = i[F + 16 >> 2], n = i[n + 72 >> 2], c[f + 28 >> 2] = c[n + 28 >> 2], c[f + 32 >> 2] = c[n + 32 >> 2];
                        break a;
                      }
                      if (!n2(i[j + 4 >> 2]) || !n2(i[F + 4 >> 2]) || !z(i[i[F + 4 >> 2] + 12 >> 2], j))
                        break i;
                      if (o = i[j + 16 >> 2], c[o + 28 >> 2] = c[k + 84 >> 2], c[o + 32 >> 2] = c[k + 88 >> 2], s = s1(i[n + 68 >> 2], o), o = i[j + 16 >> 2], i[o + 36 >> 2] = s, (0 | s) == 2147483647)
                        break f;
                      i[k + 112 >> 2] = i[E + 12 >> 2], i[k + 116 >> 2] = i[P + 12 >> 2], i[k + 120 >> 2] = i[_ + 12 >> 2], i[k + 124 >> 2] = i[x + 12 >> 2], i[o + 24 >> 2] = 0, i[o + 16 >> 2] = 0, i[o + 20 >> 2] = 0, a = c[o + 28 >> 2], w = (e = u(c[P + 28 >> 2] - a)) < u(0) ? u(-e) : e, e = c[o + 32 >> 2], t = u(c[P + 32 >> 2] - e), b = u(w + (t < u(0) ? u(-t) : t)), w = (t = u(c[E + 28 >> 2] - a)) < u(0) ? u(-t) : t, t = u(c[E + 32 >> 2] - e), r = u(w + (t < u(0) ? u(-t) : t)), q = +u(r + b), t = u(0.5 * +b / q), c[k + 96 >> 2] = t, b = u(0.5 * +r / q), c[k + 100 >> 2] = b, r = u(u(u(c[E + 16 >> 2] * t) + u(c[P + 16 >> 2] * b)) + u(0)), c[o + 16 >> 2] = r, g = u(u(u(c[E + 20 >> 2] * t) + u(c[P + 20 >> 2] * b)) + u(0)), c[o + 20 >> 2] = g, b = u(u(u(c[E + 24 >> 2] * t) + u(c[P + 24 >> 2] * b)) + u(0)), c[o + 24 >> 2] = b, w = (t = u(c[_ + 28 >> 2] - a)) < u(0) ? u(-t) : t, t = u(c[_ + 32 >> 2] - e), t = u(w + (t < u(0) ? u(-t) : t)), w = (a = u(c[x + 28 >> 2] - a)) < u(0) ? u(-a) : a, a = u(c[x + 32 >> 2] - e), a = u(w + (a < u(0) ? u(-a) : a)), q = +u(t + a), a = u(0.5 * +a / q), c[k + 104 >> 2] = a, e = u(0.5 * +t / q), c[k + 108 >> 2] = e, t = u(r + u(u(c[_ + 16 >> 2] * a) + u(c[x + 16 >> 2] * e))), c[o + 16 >> 2] = t, r = u(g + u(u(c[_ + 20 >> 2] * a) + u(c[x + 20 >> 2] * e))), c[o + 20 >> 2] = r, a = u(b + u(u(c[_ + 24 >> 2] * a) + u(c[x + 24 >> 2] * e))), c[o + 24 >> 2] = a, c[k + 140 >> 2] = a, c[k + 136 >> 2] = r, c[k + 132 >> 2] = t, i[o + 12 >> 2] = 0, o = o + 12 | 0, (0 | (s = i[n + 1736 >> 2])) == 8 ? I[i[n + 76 >> 2]](k + 132 | 0, k + 112 | 0, k + 96 | 0, o) : I[0 | s](k + 132 | 0, k + 112 | 0, k + 96 | 0, o, i[n + 1896 >> 2]), i[o >> 2] | m[n + 60 | 0] || ((0 | (o = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100156) : I[0 | o](100156, i[n + 1896 >> 2]), h[n + 60 | 0] = 1), h[Y + 14 | 0] = 1, h[f + 14 | 0] = 1, h[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1;
                    } else
                      C0(n, f);
                  }
                return B = k + 144 | 0, p2;
              }
              L0(i[n + 68 >> 2]), i[n + 68 >> 2] = 0;
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function p4(n) {
            n |= 0;
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = u(0), A = u(0), l = 0, v = 0, p = 0, w = 0, g = 0, E = 0, R = 0, _ = 0, P = 0, x = 0;
            B = t = B - 48 | 0, h[n + 60 | 0] = 0;
            i: {
              if (a = i[n + 8 >> 2], (0 | (f = i[a + 64 >> 2])) != (0 | (k = a - -64 | 0)))
                for (; ; ) {
                  a = i[f + 12 >> 2], o = i[f >> 2], b = i[f + 16 >> 2], e = i[i[f + 4 >> 2] + 16 >> 2];
                  f: {
                    if (!(c[b + 28 >> 2] != c[e + 28 >> 2] | c[b + 32 >> 2] != c[e + 32 >> 2] | i[a + 12 >> 2] == (0 | f))) {
                      i[t + 24 >> 2] = 0, i[t + 28 >> 2] = 0, i[t + 16 >> 2] = 0, i[t + 20 >> 2] = 0, e = i[287], i[t + 8 >> 2] = i[286], i[t + 12 >> 2] = e, e = i[285], i[t >> 2] = i[284], i[t + 4 >> 2] = e, e = i[a + 16 >> 2], i[t + 16 >> 2] = i[e + 12 >> 2], i[t + 20 >> 2] = i[b + 12 >> 2], c[t + 36 >> 2] = c[e + 16 >> 2], c[t + 40 >> 2] = c[e + 20 >> 2], c[t + 44 >> 2] = c[e + 24 >> 2], i[e + 12 >> 2] = 0, e = e + 12 | 0, (0 | (b = i[n + 1736 >> 2])) == 8 ? I[i[n + 76 >> 2]](t + 36 | 0, t + 16 | 0, t, e) : I[0 | b](t + 36 | 0, t + 16 | 0, t, e, i[n + 1896 >> 2]), i[e >> 2] || (i[e >> 2] = i[t + 16 >> 2]);
                      a: {
                        if (z(a, f)) {
                          if (!$(f))
                            break a;
                          e = i[a + 12 >> 2];
                          break f;
                        }
                        break i;
                      }
                      break i;
                    }
                    e = a, a = f;
                  }
                  if (i[e + 12 >> 2] == (0 | a)) {
                    if ((0 | a) != (0 | e) && (o = i[o + 4 >> 2] != (0 | e) && (0 | e) != (0 | o) ? o : i[o >> 2], !$(e)) || (f = (0 | a) == (0 | o) | i[o + 4 >> 2] == (0 | a) ? i[o >> 2] : o, !$(a)))
                      break i;
                  } else
                    f = o;
                  if ((0 | f) == (0 | k))
                    break;
                }
              o = n, (f = H(28)) ? (e = f, (a = H(28)) ? (i[a + 8 >> 2] = 0, i[a + 12 >> 2] = 32, b = H(132), i[a >> 2] = b, b ? (k = H(264), i[a + 4 >> 2] = k, k ? (i[a + 24 >> 2] = 9, i[a + 16 >> 2] = 0, i[a + 20 >> 2] = 0, i[b + 4 >> 2] = 1, i[k + 8 >> 2] = 0) : (T(b), T(a), a = 0)) : (T(a), a = 0)) : a = 0, i[e >> 2] = a, a ? (e = H(128), i[f + 4 >> 2] = e, e ? (i[f + 24 >> 2] = 9, i[f + 20 >> 2] = 0, i[f + 12 >> 2] = 0, i[f + 16 >> 2] = 32) : (T(i[a + 4 >> 2]), T(i[a >> 2]), T(a), T(f), f = 0)) : (T(f), f = 0)) : f = 0, p = f, i[o + 68 >> 2] = f;
              f:
                if (f) {
                  a: {
                    a = i[n + 8 >> 2];
                    n: {
                      if ((0 | (f = i[a >> 2])) != (0 | a))
                        for (; ; ) {
                          if (o = s1(p, f), i[f + 36 >> 2] = o, (0 | o) == 2147483647)
                            break n;
                          if ((0 | a) == (0 | (f = i[f >> 2])))
                            break;
                        }
                      if (B = E = B - 400 | 0, o = H(4 + (f = (g = i[p + 12 >> 2]) << 2) | 0), i[p + 8 >> 2] = o, B = E + 400 | 0, o) {
                        if (!((b = (f + o | 0) - 4 | 0) >>> 0 < o >>> 0)) {
                          if (a = i[p + 4 >> 2], e = 1 + ((k = (g << 2) - 4 | 0) >>> 2 | 0) & 7)
                            for (f = o; i[f >> 2] = a, f = f + 4 | 0, a = a + 4 | 0, e = e - 1 | 0; )
                              ;
                          else
                            f = o;
                          if (!(k >>> 0 < 28))
                            for (; i[f >> 2] = a, i[f + 28 >> 2] = a + 28, i[f + 24 >> 2] = a + 24, i[f + 20 >> 2] = a + 20, i[f + 16 >> 2] = a + 16, i[f + 12 >> 2] = a + 12, i[f + 8 >> 2] = a + 8, i[f + 4 >> 2] = a + 4, a = a + 32 | 0, b >>> 0 >= (f = f + 32 | 0) >>> 0; )
                              ;
                        }
                        for (i[E + 4 >> 2] = b, i[E >> 2] = o, R = 2016473283, s = 1; ; ) {
                          if ((l = i[((s << 3) + E | 0) - 4 >> 2]) >>> 0 > (k = i[(w << 3) + E >> 2]) + 40 >>> 0)
                            for (; ; ) {
                              for (R = W(R, 1539415821) + 1 | 0, P = i[(f = ((R >>> 0) % (1 + (l - k >> 2) >>> 0) << 2) + k | 0) >> 2], i[f >> 2] = i[k >> 2], i[k >> 2] = P, e = l + 4 | 0, a = k - 4 | 0; ; ) {
                                o = e, v = i[a + 4 >> 2], b = a, f = a + 4 | 0, e = i[v >> 2], r = c[e + 28 >> 2], _ = i[P >> 2], s = f;
                                e:
                                  if (!(r < (A = c[_ + 28 >> 2]))) {
                                    for (; ; ) {
                                      if (a = f, s = f, c[e + 32 >> 2] <= c[_ + 32 >> 2] && r == A)
                                        break e;
                                      if (f = a + 4 | 0, b = a, v = i[a + 4 >> 2], e = i[v >> 2], A > (r = c[e + 28 >> 2]))
                                        break;
                                    }
                                    s = f;
                                  }
                                a = s, s = i[(e = o - 4 | 0) >> 2], f = i[s >> 2];
                                e:
                                  if (!(A < (r = c[f + 28 >> 2])))
                                    for (; ; ) {
                                      if (!(!(c[_ + 32 >> 2] <= c[f + 32 >> 2]) | r != A))
                                        break e;
                                      if (o = e, s = i[(e = e - 4 | 0) >> 2], f = i[s >> 2], A < (r = c[f + 28 >> 2]))
                                        break;
                                    }
                                if (i[a >> 2] = s, i[e >> 2] = v, !(a >>> 0 < e >>> 0))
                                  break;
                              }
                              if (f = i[a >> 2], i[a >> 2] = v, i[e >> 2] = f, (a - k | 0) < (l - e | 0) ? (f = o, e = l, l = b) : (f = k, e = b, k = o), i[4 + (a = (w << 3) + E | 0) >> 2] = e, i[a >> 2] = f, w = w + 1 | 0, !(k + 40 >>> 0 < l >>> 0))
                                break;
                            }
                          if (s = w, l >>> 0 >= (o = k + 4 | 0) >>> 0)
                            for (; ; ) {
                              e = i[o >> 2], a = f = o;
                              e:
                                if (!(k >>> 0 >= f >>> 0))
                                  for (; ; ) {
                                    if (b = i[e >> 2], r = c[b + 28 >> 2], w = i[(a = f - 4 | 0) >> 2], v = i[w >> 2], r < (A = c[v + 28 >> 2])) {
                                      a = f;
                                      break e;
                                    }
                                    if (!(!(c[b + 32 >> 2] <= c[v + 32 >> 2]) | r != A)) {
                                      a = f;
                                      break e;
                                    }
                                    if (i[f >> 2] = w, !(k >>> 0 < (f = a) >>> 0))
                                      break;
                                  }
                              if (i[a >> 2] = e, !(l >>> 0 >= (o = o + 4 | 0) >>> 0))
                                break;
                            }
                          if (w = s - 1 | 0, !((0 | s) >= 1))
                            break;
                        }
                        if (i[p + 20 >> 2] = 1, i[p + 16 >> 2] = g, p = i[p >> 2], (0 | (o = i[p + 8 >> 2])) >= 1)
                          for (l = i[p + 4 >> 2], k = i[p >> 2], a = o; ; ) {
                            for (e = a, s = l + ((w = i[k + (a << 2) >> 2]) << 3) | 0, f = a; (0 | o) <= (0 | (a = f << 1)) || (v = i[l + (i[k + ((b = 1 | a) << 2) >> 2] << 3) >> 2], r = c[v + 28 >> 2], g = i[l + (i[k + (a << 2) >> 2] << 3) >> 2], A = c[g + 28 >> 2], !(c[v + 32 >> 2] <= c[g + 32 >> 2]) | r != A && !(r < A) || (a = b)), !((0 | a) > (0 | o) || (b = i[s >> 2], r = c[b + 28 >> 2], v = i[k + (a << 2) >> 2], R = i[(g = l + (v << 3) | 0) >> 2], r < (A = c[R + 28 >> 2]) | (c[b + 32 >> 2] <= c[R + 32 >> 2] ? r == A : 0))); )
                              i[k + (f << 2) >> 2] = v, i[g + 4 >> 2] = f, f = a;
                            if (i[k + (f << 2) >> 2] = w, i[s + 4 >> 2] = f, a = e - 1 | 0, !((0 | e) > 1))
                              break;
                          }
                        i[p + 20 >> 2] = 1, f = 1;
                      } else
                        f = 0;
                      if (f)
                        break a;
                    }
                    L0(i[n + 68 >> 2]), i[n + 68 >> 2] = 0;
                    break f;
                  }
                  if (a = n - -64 | 0, (f = H(20)) ? (i[f + 16 >> 2] = 10, i[f + 12 >> 2] = n, i[f >> 2] = 0, i[f + 8 >> 2] = f, i[f + 4 >> 2] = f) : f = 0, i[a >> 2] = f, !f)
                    break i;
                  if (p1(n, u(-3999999973526325e22)), p1(n, u(3999999973526325e22)), a = I0(i[n + 68 >> 2]))
                    for (; ; ) {
                      a:
                        if (f = w1(i[n + 68 >> 2]))
                          for (; ; ) {
                            if (c[f + 28 >> 2] != c[a + 28 >> 2] | c[f + 32 >> 2] != c[a + 32 >> 2])
                              break a;
                            if (o = i[I0(i[n + 68 >> 2]) + 8 >> 2], e = i[a + 8 >> 2], i[t + 24 >> 2] = 0, i[t + 28 >> 2] = 0, i[t + 16 >> 2] = 0, i[t + 20 >> 2] = 0, f = i[287], i[t + 8 >> 2] = i[286], i[t + 12 >> 2] = f, f = i[285], i[t >> 2] = i[284], i[t + 4 >> 2] = f, f = i[e + 16 >> 2], i[t + 16 >> 2] = i[f + 12 >> 2], i[t + 20 >> 2] = i[i[o + 16 >> 2] + 12 >> 2], c[t + 36 >> 2] = c[f + 16 >> 2], c[t + 40 >> 2] = c[f + 20 >> 2], c[t + 44 >> 2] = c[f + 24 >> 2], i[f + 12 >> 2] = 0, f = f + 12 | 0, (0 | (b = i[n + 1736 >> 2])) == 8 ? I[i[n + 76 >> 2]](t + 36 | 0, t + 16 | 0, t, f) : I[0 | b](t + 36 | 0, t + 16 | 0, t, f, i[n + 1896 >> 2]), i[f >> 2] || (i[f >> 2] = i[t + 16 >> 2]), !z(e, o))
                              break i;
                            if (!(f = w1(i[n + 68 >> 2])))
                              break;
                          }
                      if (r0(n, a), !(a = I0(i[n + 68 >> 2])))
                        break;
                    }
                  if (f = i[i[i[(o = n - -64 | 0) >> 2] + 4 >> 2] >> 2], a = i[f >> 2], i[n + 72 >> 2] = i[a + 16 >> 2], i[a + 24 >> 2] = 0, h2(i[f + 4 >> 2]), T(f), a = i[o >> 2], f = i[i[a + 4 >> 2] >> 2])
                    for (; i[i[f >> 2] + 24 >> 2] = 0, h2(i[f + 4 >> 2]), T(f), a = i[o >> 2], f = i[i[a + 4 >> 2] >> 2]; )
                      ;
                  if ((0 | a) != (0 | (f = i[a + 4 >> 2])))
                    for (; T(f), (0 | a) != (0 | (f = i[f + 4 >> 2])); )
                      ;
                  if (T(a), L0(i[n + 68 >> 2]), x = 1, n = i[n + 8 >> 2], (0 | (a = i[n + 40 >> 2])) != (0 | (o = n + 40 | 0)))
                    for (; ; ) {
                      if (n = i[a + 8 >> 2], a = i[a >> 2], (0 | n) == i[i[n + 12 >> 2] + 12 >> 2] && (f = i[n + 8 >> 2], i[f + 28 >> 2] = i[f + 28 >> 2] + i[n + 28 >> 2], f = i[f + 4 >> 2], i[f + 28 >> 2] = i[f + 28 >> 2] + i[i[n + 4 >> 2] + 28 >> 2], !$(n))) {
                        x = 0;
                        break f;
                      }
                      if ((0 | a) == (0 | o))
                        break;
                    }
                }
              return B = t + 48 | 0, 0 | x;
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function g0(n, f, a, e, o, t) {
            var b = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, p = 0, w = 0, g = 0, E = 0, R = 0, _ = 0, P = 0, x = 0, j = 0, F = 0;
            B = k = B - 80 | 0, i[k + 76 >> 2] = f, x = k + 55 | 0, _ = k + 56 | 0, f = 0;
            i: {
              f:
                for (; ; ) {
                  (0 | w) < 0 || ((2147483647 - w | 0) < (0 | f) ? (i[613] = 61, w = -1) : w = f + w | 0);
                  a: {
                    n: {
                      e: {
                        if (A = i[k + 76 >> 2], b = m[0 | (f = A)])
                          for (; ; ) {
                            b: {
                              o:
                                if (b &= 255) {
                                  if ((0 | b) != 37)
                                    break b;
                                  for (b = f; ; ) {
                                    if (m[f + 1 | 0] != 37)
                                      break o;
                                    if (s = f + 2 | 0, i[k + 76 >> 2] = s, b = b + 1 | 0, l = m[f + 2 | 0], f = s, (0 | l) != 37)
                                      break;
                                  }
                                } else
                                  b = f;
                              if (f = b - A | 0, n && Z(n, A, f), f)
                                continue f;
                              E = -1, b = 1, s = k, f = i[k + 76 >> 2], m[f + 2 | 0] != 36 | h[i[k + 76 >> 2] + 1 | 0] - 48 >>> 0 >= 10 || (E = h[f + 1 | 0] - 48 | 0, P = 1, b = 3), f = b + f | 0, i[s + 76 >> 2] = f, g = 0;
                              o:
                                if ((s = (r = h[0 | f]) - 32 | 0) >>> 0 > 31)
                                  b = f;
                                else if (b = f, 75913 & (s = 1 << s))
                                  for (; ; ) {
                                    if (b = f + 1 | 0, i[k + 76 >> 2] = b, g |= s, (s = (r = h[f + 1 | 0]) - 32 | 0) >>> 0 >= 32)
                                      break o;
                                    if (f = b, !(75913 & (s = 1 << s)))
                                      break;
                                  }
                              o:
                                if ((0 | r) != 42) {
                                  if ((0 | (v = C1(k + 76 | 0))) < 0)
                                    break e;
                                  f = i[k + 76 >> 2];
                                } else {
                                  if (s = k, h[b + 1 | 0] - 48 >>> 0 >= 10 || (f = i[k + 76 >> 2], m[f + 2 | 0] != 36)) {
                                    if (P)
                                      break e;
                                    P = 0, v = 0, n && (f = i[a >> 2], i[a >> 2] = f + 4, v = i[f >> 2]), f = i[k + 76 >> 2] + 1 | 0;
                                  } else
                                    i[((h[f + 1 | 0] << 2) + o | 0) - 192 >> 2] = 10, v = i[((h[f + 1 | 0] << 3) + e | 0) - 384 >> 2], P = 1, f = f + 3 | 0;
                                  if (i[s + 76 >> 2] = f, (0 | v) > -1)
                                    break o;
                                  v = 0 - v | 0, g |= 8192;
                                }
                              l = -1;
                              o:
                                if (m[0 | f] == 46)
                                  if (m[f + 1 | 0] != 42)
                                    i[k + 76 >> 2] = f + 1, l = C1(k + 76 | 0), f = i[k + 76 >> 2];
                                  else {
                                    if (!(h[f + 2 | 0] - 48 >>> 0 >= 10) && (f = i[k + 76 >> 2], m[f + 3 | 0] == 36)) {
                                      i[((h[f + 2 | 0] << 2) + o | 0) - 192 >> 2] = 10, l = i[((h[f + 2 | 0] << 3) + e | 0) - 384 >> 2], f = f + 4 | 0, i[k + 76 >> 2] = f;
                                      break o;
                                    }
                                    if (P)
                                      break e;
                                    n ? (f = i[a >> 2], i[a >> 2] = f + 4, l = i[f >> 2]) : l = 0, f = i[k + 76 >> 2] + 2 | 0, i[k + 76 >> 2] = f;
                                  }
                              for (b = 0; ; ) {
                                if (R = b, p = -1, h[0 | f] - 65 >>> 0 > 57)
                                  break i;
                                if (r = f + 1 | 0, i[k + 76 >> 2] = r, b = h[0 | f], f = r, !((b = m[1103 + (b + W(R, 58) | 0) | 0]) - 1 >>> 0 < 8))
                                  break;
                              }
                              o: {
                                c: {
                                  if ((0 | b) != 19) {
                                    if (!b)
                                      break i;
                                    if ((0 | E) >= 0) {
                                      i[(E << 2) + o >> 2] = b, b = i[4 + (f = (E << 3) + e | 0) >> 2], i[k + 64 >> 2] = i[f >> 2], i[k + 68 >> 2] = b;
                                      break c;
                                    }
                                    if (!n)
                                      break a;
                                    v1(k - -64 | 0, b, a), r = i[k + 76 >> 2];
                                    break o;
                                  }
                                  if ((0 | E) > -1)
                                    break i;
                                }
                                if (f = 0, !n)
                                  continue f;
                              }
                              s = -65537 & g, b = 8192 & g ? s : g, p = 0, E = 1024, g = _;
                              o: {
                                c: {
                                  u: {
                                    t: {
                                      A: {
                                        r: {
                                          k: {
                                            s: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        w: {
                                                          m: {
                                                            switch (f = h[r - 1 | 0], (f = R && (15 & f) == 3 ? -33 & f : f) - 88 | 0) {
                                                              case 11:
                                                                break o;
                                                              case 9:
                                                              case 13:
                                                              case 14:
                                                              case 15:
                                                                break c;
                                                              case 27:
                                                                break k;
                                                              case 12:
                                                              case 17:
                                                                break v;
                                                              case 23:
                                                                break d;
                                                              case 0:
                                                              case 32:
                                                                break h;
                                                              case 24:
                                                                break p;
                                                              case 22:
                                                                break w;
                                                              case 29:
                                                                break m;
                                                              case 1:
                                                              case 2:
                                                              case 3:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                              case 7:
                                                              case 8:
                                                              case 10:
                                                              case 16:
                                                              case 18:
                                                              case 19:
                                                              case 20:
                                                              case 21:
                                                              case 25:
                                                              case 26:
                                                              case 28:
                                                              case 30:
                                                              case 31:
                                                                break n;
                                                            }
                                                            switch (f - 65 | 0) {
                                                              case 0:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                                break c;
                                                              case 2:
                                                                break A;
                                                              case 1:
                                                              case 3:
                                                                break n;
                                                            }
                                                            if ((0 | f) == 83)
                                                              break r;
                                                            break n;
                                                          }
                                                          r = i[k + 64 >> 2], s = i[k + 68 >> 2], E = 1024;
                                                          break l;
                                                        }
                                                        f = 0;
                                                        w:
                                                          switch (255 & R) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              i[i[k + 64 >> 2] >> 2] = w;
                                                              continue f;
                                                            case 2:
                                                              b = i[k + 64 >> 2], i[b >> 2] = w, i[b + 4 >> 2] = w >> 31;
                                                              continue f;
                                                            case 3:
                                                              s2[i[k + 64 >> 2] >> 1] = w;
                                                              continue f;
                                                            case 4:
                                                              h[i[k + 64 >> 2]] = w;
                                                              continue f;
                                                            case 7:
                                                              break w;
                                                            default:
                                                              continue f;
                                                          }
                                                        b = i[k + 64 >> 2], i[b >> 2] = w, i[b + 4 >> 2] = w >> 31;
                                                        continue f;
                                                      }
                                                      l = l >>> 0 > 8 ? l : 8, b |= 8, f = 120;
                                                    }
                                                    if (A = _, j = 32 & f, (s = R = i[k + 68 >> 2]) | (r = i[k + 64 >> 2]))
                                                      for (; h[0 | (A = A - 1 | 0)] = j | m[1632 + (15 & r) | 0], F = !s & r >>> 0 > 15 | (0 | s) != 0, R = s, s = s >>> 4 | 0, r = (15 & R) << 28 | r >>> 4, F; )
                                                        ;
                                                    if (!(i[k + 64 >> 2] | i[k + 68 >> 2]) | !(8 & b))
                                                      break s;
                                                    E = 1024 + (f >>> 4 | 0) | 0, p = 2;
                                                    break s;
                                                  }
                                                  if (f = _, (s = A = i[k + 68 >> 2]) | (r = i[k + 64 >> 2]))
                                                    for (; h[0 | (f = f - 1 | 0)] = 7 & r | 48, R = !s & r >>> 0 > 7 | (0 | s) != 0, A = s, s = s >>> 3 | 0, r = (7 & A) << 29 | r >>> 3, R; )
                                                      ;
                                                  if (A = f, !(8 & b))
                                                    break s;
                                                  l = (0 | (f = _ - A | 0)) < (0 | l) ? l : f + 1 | 0;
                                                  break s;
                                                }
                                                s = f = i[k + 68 >> 2], r = i[k + 64 >> 2], (0 | f) < -1 || (0 | f) <= -1 ? (s = 0 - (s + ((0 | r) != 0) | 0) | 0, r = 0 - r | 0, i[k + 64 >> 2] = r, i[k + 68 >> 2] = s, p = 1, E = 1024) : 2048 & b ? (p = 1, E = 1025) : E = (p = 1 & b) ? 1026 : 1024;
                                              }
                                              A = z2(r, s, _);
                                            }
                                            if (b = (0 | l) > -1 ? -65537 & b : b, s = f = i[k + 68 >> 2], !(l | (0 | (r = i[k + 64 >> 2])) != 0 | (0 | f) != 0)) {
                                              l = 0, A = _;
                                              break n;
                                            }
                                            l = (0 | (f = !(s | r) + (_ - A | 0) | 0)) < (0 | l) ? l : f;
                                            break n;
                                          }
                                          g = (0 | (f = l)) != 0;
                                          k: {
                                            s: {
                                              l: {
                                                v:
                                                  if (!(!(3 & (b = A = (b = i[k + 64 >> 2]) || 1071)) | !f))
                                                    for (; ; ) {
                                                      if (!m[0 | b])
                                                        break l;
                                                      if (g = (0 | (f = f - 1 | 0)) != 0, !(3 & (b = b + 1 | 0)))
                                                        break v;
                                                      if (!f)
                                                        break;
                                                    }
                                                if (!g)
                                                  break s;
                                              }
                                              l:
                                                if (!(!m[0 | b] | f >>> 0 < 4))
                                                  for (; ; ) {
                                                    if ((-1 ^ (r = i[b >> 2])) & r - 16843009 & -2139062144)
                                                      break l;
                                                    if (b = b + 4 | 0, !((f = f - 4 | 0) >>> 0 > 3))
                                                      break;
                                                  }
                                              if (f)
                                                for (; ; ) {
                                                  if (r = b, !m[0 | b])
                                                    break k;
                                                  if (b = b + 1 | 0, !(f = f - 1 | 0))
                                                    break;
                                                }
                                            }
                                            r = 0;
                                          }
                                          g = r || l + A | 0, b = s, l = r ? r - A | 0 : l;
                                          break n;
                                        }
                                        if (s = i[k + 64 >> 2], l)
                                          break t;
                                        f = 0, i2(n, 32, v, 0, b);
                                        break u;
                                      }
                                      i[k + 12 >> 2] = 0, i[k + 8 >> 2] = i[k + 64 >> 2], i[k + 64 >> 2] = k + 8, l = -1, s = k + 8 | 0;
                                    }
                                    f = 0;
                                    t: {
                                      for (; ; ) {
                                        if (!(A = i[s >> 2]))
                                          break t;
                                        if (!((r = (0 | (A = h1(k + 4 | 0, A))) < 0) | A >>> 0 > l - f >>> 0)) {
                                          if (s = s + 4 | 0, l >>> 0 > (f = f + A | 0) >>> 0)
                                            continue;
                                          break t;
                                        }
                                        break;
                                      }
                                      if (p = -1, r)
                                        break i;
                                    }
                                    if (i2(n, 32, v, f, b), f)
                                      for (s = 0, r = i[k + 64 >> 2]; ; ) {
                                        if (!(A = i[r >> 2]) || (0 | (s = (A = h1(k + 4 | 0, A)) + s | 0)) > (0 | f))
                                          break u;
                                        if (Z(n, k + 4 | 0, A), r = r + 4 | 0, !(f >>> 0 > s >>> 0))
                                          break;
                                      }
                                    else
                                      f = 0;
                                  }
                                  i2(n, 32, v, f, 8192 ^ b), f = (0 | f) < (0 | v) ? v : f;
                                  continue f;
                                }
                                f = 0 | I[0 | t](n, X[k + 64 >> 3], v, l, b, f);
                                continue f;
                              }
                              h[k + 55 | 0] = i[k + 64 >> 2], l = 1, A = x, b = s;
                              break n;
                            }
                            s = f + 1 | 0, i[k + 76 >> 2] = s, b = m[f + 1 | 0], f = s;
                          }
                        if (p = w, n)
                          break i;
                        if (!P)
                          break a;
                        for (f = 1; ; ) {
                          if (n = i[(f << 2) + o >> 2]) {
                            if (v1((f << 3) + e | 0, n, a), p = 1, (0 | (f = f + 1 | 0)) != 10)
                              continue;
                            break i;
                          }
                          break;
                        }
                        if (p = 1, f >>> 0 >= 10)
                          break i;
                        for (; ; ) {
                          if (i[(f << 2) + o >> 2])
                            break e;
                          if ((0 | (f = f + 1 | 0)) == 10)
                            break;
                        }
                        break i;
                      }
                      p = -1;
                      break i;
                    }
                    i2(n, 32, f = (0 | (s = (l = (0 | (r = g - A | 0)) > (0 | l) ? r : l) + p | 0)) > (0 | v) ? s : v, s, b), Z(n, E, p), i2(n, 48, f, s, 65536 ^ b), i2(n, 48, l, r, 0), Z(n, A, r), i2(n, 32, f, s, 8192 ^ b);
                    continue;
                  }
                  break;
                }
              p = 0;
            }
            return B = k + 80 | 0, p;
          }
          function w4(n, f, a, e, o, t) {
            n |= 0, f = +f, a |= 0, e |= 0, o |= 0, t |= 0;
            var b = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, p = 0, w = 0, g = 0, E = 0, R = 0, _ = 0, P = 0, x = 0, j = 0, F = 0, q = 0, Y = 0, k2 = 0, p2 = 0;
            B = r = B - 560 | 0, i[r + 44 >> 2] = 0, y0(+f), b = 0 | W2(1), W2(0), (0 | b) < -1 || (0 | b) <= -1 ? (x = 1, j = 1034, y0(+(f = -f)), b = 0 | W2(1), W2(0)) : 2048 & o ? (x = 1, j = 1037) : (j = (x = 1 & o) ? 1040 : 1035, p2 = !x);
            i:
              if ((2146435072 & b) != 2146435072) {
                _ = r + 16 | 0;
                f: {
                  a: {
                    n: {
                      if (f = y1(f, r + 44 | 0), (f += f) != 0) {
                        if (b = i[r + 44 >> 2], i[r + 44 >> 2] = b - 1, (0 | (F = 32 | t)) != 97)
                          break n;
                        break f;
                      }
                      if ((0 | (F = 32 | t)) == 97)
                        break f;
                      A = i[r + 44 >> 2], v = (0 | e) < 0 ? 6 : e;
                      break a;
                    }
                    A = b - 29 | 0, i[r + 44 >> 2] = A, f *= 268435456, v = (0 | e) < 0 ? 6 : e;
                  }
                  for (k = E = (0 | A) < 0 ? r + 48 | 0 : r + 336 | 0; b = f < 4294967296 & f >= 0 ? ~~f >>> 0 : 0, i[(e = k) >> 2] = b, k = k + 4 | 0, (f = 1e9 * (f - +(b >>> 0))) != 0; )
                    ;
                  if ((0 | A) < 1)
                    e = A, b = k, s = E;
                  else
                    for (s = E, e = A; ; ) {
                      if (R = (0 | e) < 29 ? e : 29, !(s >>> 0 > (b = k - 4 | 0) >>> 0)) {
                        for (e = R, w = 0; g = b, p = 0, Y = w, w = i[b >> 2], l = 31 & e, (63 & e) >>> 0 >= 32 ? (k2 = w << l, l = 0) : (k2 = (1 << l) - 1 & w >>> 32 - l, l = w << l), p = p + k2 | 0, p = l >>> 0 > (w = Y + l | 0) >>> 0 ? p + 1 | 0 : p, Y = g, g = S0(w = r1(l = w, p, 1e9), l2, 1e9, 0), i[Y >> 2] = l - g, s >>> 0 <= (b = b - 4 | 0) >>> 0; )
                          ;
                        (e = w) && (i[(s = s - 4 | 0) >> 2] = e);
                      }
                      for (; s >>> 0 < (b = k) >>> 0 && !i[(k = b - 4 | 0) >> 2]; )
                        ;
                      if (e = i[r + 44 >> 2] - R | 0, i[r + 44 >> 2] = e, k = b, !((0 | e) > 0))
                        break;
                    }
                  if (k = (v + 25 | 0) / 9 | 0, (0 | e) <= -1)
                    for (R = k + 1 | 0, q = (0 | F) == 102; ; ) {
                      w = (0 | e) < -9 ? 9 : 0 - e | 0;
                      a:
                        if (b >>> 0 > s >>> 0) {
                          for (g = 1e9 >>> w | 0, l = -1 << w ^ -1, e = 0, k = s; Y = e, e = i[k >> 2], i[k >> 2] = Y + (e >>> w | 0), e = W(g, e & l), (k = k + 4 | 0) >>> 0 < b >>> 0; )
                            ;
                          if (s = i[s >> 2] ? s : s + 4 | 0, !e)
                            break a;
                          i[b >> 2] = e, b = b + 4 | 0;
                        } else
                          s = i[s >> 2] ? s : s + 4 | 0;
                      if (e = i[r + 44 >> 2] + w | 0, i[r + 44 >> 2] = e, b = (0 | R) < b - (k = q ? E : s) >> 2 ? k + (R << 2) | 0 : b, !((0 | e) < 0))
                        break;
                    }
                  if (k = 0, !(b >>> 0 <= s >>> 0 || (k = W(E - s >> 2, 9), e = 10, (l = i[s >> 2]) >>> 0 < 10)))
                    for (; k = k + 1 | 0, l >>> 0 >= (e = W(e, 10)) >>> 0; )
                      ;
                  if ((0 | (e = (v - ((0 | F) == 102 ? 0 : k) | 0) - ((0 | F) == 103 & (0 | v) != 0) | 0)) < (W(b - E >> 2, 9) - 9 | 0)) {
                    if (p = (((l = (0 | (g = e + 9216 | 0)) / 9 | 0) << 2) + ((0 | A) < 0 ? r + 48 | 4 : r + 340 | 0) | 0) - 4096 | 0, e = 10, (0 | (g = g - W(l, 9) | 0)) <= 7)
                      for (; e = W(e, 10), (0 | (g = g + 1 | 0)) != 8; )
                        ;
                    if (R = (g = i[p >> 2]) - W(e, l = (g >>> 0) / (e >>> 0) | 0) | 0, ((0 | (A = p + 4 | 0)) != (0 | b) || R) && (f = (0 | b) == (0 | A) ? 1 : 1.5, P = (A = e >>> 1 | 0) >>> 0 > R >>> 0 ? 0.5 : (0 | A) == (0 | R) ? f : 1.5, f = 1 & l ? 9007199254740994 : 9007199254740992, m[0 | j] != 45 | p2 || (P = -P, f = -f), A = g - R | 0, i[p >> 2] = A, f + P != f)) {
                      if (e = e + A | 0, i[p >> 2] = e, e >>> 0 >= 1e9)
                        for (; i[p >> 2] = 0, (p = p - 4 | 0) >>> 0 < s >>> 0 && (i[(s = s - 4 | 0) >> 2] = 0), e = i[p >> 2] + 1 | 0, i[p >> 2] = e, e >>> 0 > 999999999; )
                          ;
                      if (k = W(E - s >> 2, 9), e = 10, !((A = i[s >> 2]) >>> 0 < 10))
                        for (; k = k + 1 | 0, A >>> 0 >= (e = W(e, 10)) >>> 0; )
                          ;
                    }
                    b = (e = p + 4 | 0) >>> 0 < b >>> 0 ? e : b;
                  }
                  for (; l = b, !(A = b >>> 0 <= s >>> 0) && !i[(b = l - 4 | 0) >> 2]; )
                    ;
                  if ((0 | F) == 103) {
                    if (v = ((e = (0 | (b = v || 1)) > (0 | k) & (0 | k) > -5) ? -1 ^ k : -1) + b | 0, t = (e ? -1 : -2) + t | 0, !(w = 8 & o)) {
                      if (b = -9, !A && (A = i[l - 4 >> 2]) && (g = 10, b = 0, !((A >>> 0) % 10 | 0))) {
                        for (; e = b, b = b + 1 | 0, !((A >>> 0) % ((g = W(g, 10)) >>> 0) | 0); )
                          ;
                        b = -1 ^ e;
                      }
                      e = W(l - E >> 2, 9), (-33 & t) != 70 ? (w = 0, v = (0 | (e = (0 | (e = ((e + k | 0) + b | 0) - 9 | 0)) > 0 ? e : 0)) > (0 | v) ? v : e) : (w = 0, v = (0 | (e = (0 | (e = (e + b | 0) - 9 | 0)) > 0 ? e : 0)) > (0 | v) ? v : e);
                    }
                  } else
                    w = 8 & o;
                  if (R = (v | w) != 0, e = n, A = a, (0 | (g = -33 & t)) == 70)
                    t = (0 | k) > 0 ? k : 0;
                  else {
                    if ((_ - (b = z2((b = k >> 31) + k ^ b, 0, _)) | 0) <= 1)
                      for (; h[0 | (b = b - 1 | 0)] = 48, (_ - b | 0) < 2; )
                        ;
                    h[0 | (q = b - 2 | 0)] = t, h[b - 1 | 0] = (0 | k) < 0 ? 45 : 43, t = _ - q | 0;
                  }
                  i2(e, 32, A, p = 1 + (t + (R + (v + x | 0) | 0) | 0) | 0, o), Z(n, j, x), i2(n, 48, a, p, 65536 ^ o);
                  a: {
                    n: {
                      e: {
                        if ((0 | g) == 70) {
                          for (e = r + 16 | 8, k = r + 16 | 9, s = t = s >>> 0 > E >>> 0 ? E : s; ; ) {
                            b = z2(i[s >> 2], 0, k);
                            b:
                              if ((0 | t) == (0 | s))
                                (0 | b) == (0 | k) && (h[r + 24 | 0] = 48, b = e);
                              else {
                                if (r + 16 >>> 0 >= b >>> 0)
                                  break b;
                                for (; h[0 | (b = b - 1 | 0)] = 48, r + 16 >>> 0 < b >>> 0; )
                                  ;
                              }
                            if (Z(n, b, k - b | 0), !(E >>> 0 >= (s = s + 4 | 0) >>> 0))
                              break;
                          }
                          if (b = 0, !R)
                            break n;
                          if (Z(n, 1069, 1), (0 | v) < 1 | s >>> 0 >= l >>> 0)
                            break e;
                          for (; ; ) {
                            if ((b = z2(i[s >> 2], 0, k)) >>> 0 > r + 16 >>> 0)
                              for (; h[0 | (b = b - 1 | 0)] = 48, r + 16 >>> 0 < b >>> 0; )
                                ;
                            if (Z(n, b, (0 | v) < 9 ? v : 9), b = v - 9 | 0, l >>> 0 <= (s = s + 4 | 0) >>> 0)
                              break n;
                            if (e = (0 | v) > 9, v = b, !e)
                              break;
                          }
                          break n;
                        }
                        b:
                          if (!((0 | v) < 0))
                            for (t = s >>> 0 < l >>> 0 ? l : s + 4 | 0, A = r + 16 | 9, e = r + 16 | 8, k = s; ; ) {
                              (0 | A) == (0 | (b = z2(i[k >> 2], 0, A))) && (h[r + 24 | 0] = 48, b = e);
                              o:
                                if ((0 | k) == (0 | s))
                                  Z(n, b, 1), b = b + 1 | 0, !w && (0 | v) <= 0 || Z(n, 1069, 1);
                                else {
                                  if (r + 16 >>> 0 >= b >>> 0)
                                    break o;
                                  for (; h[0 | (b = b - 1 | 0)] = 48, r + 16 >>> 0 < b >>> 0; )
                                    ;
                                }
                              if (Z(n, l = b, (0 | (b = A - b | 0)) < (0 | v) ? b : v), v = v - b | 0, t >>> 0 <= (k = k + 4 | 0) >>> 0)
                                break b;
                              if (!((0 | v) > -1))
                                break;
                            }
                        i2(n, 48, v + 18 | 0, 18, 0), Z(n, q, _ - q | 0);
                        break a;
                      }
                      b = v;
                    }
                    i2(n, 48, b + 9 | 0, 9, 0);
                  }
                  break i;
                }
                if (E = (A = 32 & t) ? j + 9 | 0 : j, !(e >>> 0 > 11) && (b = 12 - e | 0)) {
                  for (P = 8; P *= 16, b = b - 1 | 0; )
                    ;
                  f = m[0 | E] != 45 ? f + P - P : -(P + (-f - P));
                }
                for ((0 | _) == (0 | (b = z2((k = (b = i[r + 44 >> 2]) >> 31) ^ b + k, 0, _))) && (h[r + 15 | 0] = 48, b = r + 15 | 0), v = 2 | x, k = i[r + 44 >> 2], h[0 | (l = b - 2 | 0)] = t + 15, h[b - 1 | 0] = (0 | k) < 0 ? 45 : 43, b = 8 & o, s = r + 16 | 0; t = s, w = A, k = c4(f) < 2147483648 ? ~~f : -2147483648, h[0 | s] = w | m[k + 1632 | 0], f = 16 * (f - +(0 | k)), !(b || (0 | e) > 0 | f != 0) | ((s = t + 1 | 0) - (r + 16 | 0) | 0) != 1 || (h[t + 1 | 0] = 46, s = t + 2 | 0), f != 0; )
                  ;
                i2(t = n, 32, b = a, p = (A = !e | ((s - r | 0) - 18 | 0) >= (0 | e) ? (_ - (l + (r + 16 | 0) | 0) | 0) + s | 0 : 2 + ((e + _ | 0) - l | 0) | 0) + v | 0, o), Z(n, E, v), i2(n, 48, a, p, 65536 ^ o), Z(n, r + 16 | 0, e = s - (r + 16 | 0) | 0), i2(n, 48, A - ((t = e) + (e = _ - l | 0) | 0) | 0, 0, 0), Z(n, l, e);
              } else
                i2(n, 32, a, p = x + 3 | 0, -65537 & o), Z(n, j, x), e = 32 & t, Z(n, f != f ? e ? 1053 : 1061 : e ? 1057 : 1065, 3);
            return i2(n, 32, a, p, 8192 ^ o), B = r + 560 | 0, 0 | ((0 | a) > (0 | p) ? a : p);
          }
          function r0(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = u(0), s = 0, r = u(0), A = 0, l = 0, v = 0;
            B = b = B + -64 | 0, i[n + 72 >> 2] = f, a = o = i[f + 8 >> 2];
            i: {
              f: {
                a: {
                  for (; ; ) {
                    if (e = i[a + 24 >> 2])
                      break a;
                    if ((0 | o) == (0 | (a = i[a + 8 >> 2])))
                      break;
                  }
                  for (i[b >> 2] = i[o + 4 >> 2], o = a = i[n - -64 >> 2]; o = i[o + 4 >> 2], (e = i[o >> 2]) && !(0 | I[i[a + 16 >> 2]](i[a + 12 >> 2], b, e)); )
                    ;
                  if (e = i[o >> 2], o = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], s = i[o >> 2], t = i[e >> 2], G(i[i[t + 4 >> 2] + 16 >> 2], f, i[t + 16 >> 2]) == u(0)) {
                    if (k = c[f + 28 >> 2], o = i[e >> 2], a = i[o + 16 >> 2], !(k != c[a + 28 >> 2] | c[a + 32 >> 2] != c[f + 32 >> 2])) {
                      if (e = i[f + 8 >> 2], i[b + 40 >> 2] = 0, i[b + 44 >> 2] = 0, i[b + 32 >> 2] = 0, i[b + 36 >> 2] = 0, f = i[287], i[b + 24 >> 2] = i[286], i[b + 28 >> 2] = f, f = i[285], i[b + 16 >> 2] = i[284], i[b + 20 >> 2] = f, i[b + 32 >> 2] = i[a + 12 >> 2], i[b + 36 >> 2] = i[i[e + 16 >> 2] + 12 >> 2], c[b + 52 >> 2] = c[a + 16 >> 2], c[b + 56 >> 2] = c[a + 20 >> 2], c[b + 60 >> 2] = c[a + 24 >> 2], i[a + 12 >> 2] = 0, f = a + 12 | 0, (0 | (a = i[n + 1736 >> 2])) == 8 ? I[i[n + 76 >> 2]](b + 52 | 0, b + 32 | 0, b + 16 | 0, f) : I[0 | a](b + 52 | 0, b + 32 | 0, b + 16 | 0, f, i[n + 1896 >> 2]), i[f >> 2] || (i[f >> 2] = i[b + 32 >> 2]), z(o, e))
                        break f;
                      break i;
                    }
                    if (t = i[o + 4 >> 2], a = i[t + 16 >> 2], c[a + 32 >> 2] != c[f + 32 >> 2] || k != c[a + 28 >> 2]) {
                      if (!n2(t))
                        break i;
                      if (m[e + 15 | 0]) {
                        if (!$(i[o + 8 >> 2]))
                          break i;
                        h[e + 15 | 0] = 0;
                      }
                      if (!z(i[f + 8 >> 2], o))
                        break i;
                      r0(n, f);
                      break f;
                    }
                    for (; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], (0 | a) == i[i[i[e >> 2] + 4 >> 2] + 16 >> 2]; )
                      ;
                    if (o = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], s = i[o >> 2], t = i[s + 4 >> 2], a = i[t + 8 >> 2], m[o + 15 | 0]) {
                      if (i[s + 24 >> 2] = 0, h2(i[o + 4 >> 2]), T(o), !$(t))
                        break i;
                      t = i[i[a + 4 >> 2] + 12 >> 2];
                    }
                    if (!z(i[f + 8 >> 2], t))
                      break i;
                    A = i[t + 8 >> 2], t = a, f = a, o = i[i[a + 4 >> 2] + 16 >> 2], k = c[o + 28 >> 2], s = i[a + 16 >> 2], k < (r = c[s + 28 >> 2]) | (c[o + 32 >> 2] <= c[s + 32 >> 2] ? k == r : 0) || (f = 0), B2(n, e, A, t, f, 1);
                    break f;
                  }
                  if (l = m[e + 12 | 0], s = i[s + 4 >> 2], A = i[s + 16 >> 2], k = c[A + 28 >> 2], v = i[i[t + 4 >> 2] + 16 >> 2], a = e, k < (r = c[v + 28 >> 2]) || k == r && (a = e, c[A + 32 >> 2] <= c[v + 32 >> 2]) || (a = o), m[a + 15 | 0] || l) {
                    n: {
                      if ((0 | a) == (0 | e)) {
                        if (o = v2(i[i[f + 8 >> 2] + 4 >> 2], i[t + 12 >> 2]))
                          break n;
                        break i;
                      }
                      if (!(o = v2(i[i[s + 8 >> 2] + 4 >> 2], i[f + 8 >> 2])))
                        break i;
                      o = i[o + 4 >> 2];
                    }
                    if (m[a + 15 | 0]) {
                      if ($(i[a >> 2])) {
                        i[a >> 2] = o, h[a + 15 | 0] = 0, i[o + 24 >> 2] = a, r0(n, f);
                        break f;
                      }
                      break i;
                    }
                    if (!(a = H(16)) || (i[a >> 2] = o, e = _0(i[n - -64 >> 2], i[e + 4 >> 2], a), i[a + 4 >> 2] = e, !e))
                      break i;
                    h[a + 13 | 0] = 0, h[a + 14 | 0] = 0, h[a + 15 | 0] = 0, i[o + 24 >> 2] = a, t = i[n + 56 >> 2], o = i[i[a >> 2] + 28 >> 2] + i[i[i[e + 4 >> 2] >> 2] + 8 >> 2] | 0, i[a + 8 >> 2] = o;
                    n: {
                      e:
                        switch (t - 100130 | 0) {
                          case 0:
                            e = 1 & o;
                            break n;
                          case 1:
                            e = (0 | o) != 0;
                            break n;
                          case 2:
                            e = (0 | o) > 0;
                            break n;
                          case 3:
                            e = o >>> 31 | 0;
                            break n;
                          case 4:
                            break e;
                          default:
                            break n;
                        }
                      e = o + 1 >>> 0 > 2;
                    }
                    h[a + 12 | 0] = e, r0(n, f);
                    break f;
                  }
                  B2(a = n, e, n = i[f + 8 >> 2], n, 0, 1);
                  break f;
                }
                for (f = i[i[e >> 2] + 16 >> 2]; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], a = i[e >> 2], (0 | f) == i[a + 16 >> 2]; )
                  ;
                if (m[e + 15 | 0] && (!(f = v2(i[i[i[i[i[e + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[a + 12 >> 2])) || !$(i[e >> 2]) || (i[e >> 2] = f, h[e + 15 | 0] = 0, i[f + 24 >> 2] = e, !(e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2]))))
                  break i;
                if (f = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], a = i[f >> 2], f = n0(n, f, 0), (0 | a) != (0 | (o = i[f + 8 >> 2])))
                  B2(n, e, o, a, a, 1);
                else {
                  if (o = i[e >> 2], A = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], s = i[A >> 2], i[i[o + 4 >> 2] + 16 >> 2] != i[i[s + 4 >> 2] + 16 >> 2] && o1(n, e), v = 1, t = i[n + 72 >> 2], k = c[t + 28 >> 2], l = i[o + 16 >> 2], !(k != c[l + 28 >> 2] | c[l + 32 >> 2] != c[t + 32 >> 2])) {
                    if (!z(i[i[a + 4 >> 2] + 12 >> 2], o))
                      break i;
                    for (a = i[i[e >> 2] + 16 >> 2]; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], t = i[e >> 2], (0 | a) == i[t + 16 >> 2]; )
                      ;
                    if (m[e + 15 | 0] && (!(a = v2(i[i[i[i[i[e + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[t + 12 >> 2])) || !$(i[e >> 2]) || (i[e >> 2] = a, h[e + 15 | 0] = 0, i[a + 24 >> 2] = e, !(e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2]))))
                      break i;
                    t = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], a = i[t >> 2], n0(n, t, A), t = i[n + 72 >> 2], k = c[t + 28 >> 2], v = 0;
                  }
                  a: {
                    if (r = k, l = i[s + 16 >> 2], r != (k = c[l + 28 >> 2]) | c[l + 32 >> 2] != c[t + 32 >> 2]) {
                      if (v)
                        break a;
                    } else {
                      if (!z(f, i[i[s + 4 >> 2] + 12 >> 2]))
                        break i;
                      f = n0(n, A, 0);
                    }
                    B2(n, e, i[f + 8 >> 2], a, a, 1);
                    break f;
                  }
                  if (a = i[o + 16 >> 2], r = c[a + 28 >> 2], !(c[l + 32 >> 2] <= c[a + 32 >> 2]) | k != r && !(r > k) || (o = i[i[s + 4 >> 2] + 12 >> 2]), !(f = v2(i[i[f + 8 >> 2] + 4 >> 2], o)))
                    break i;
                  B2(n, e, f, a = i[f + 8 >> 2], a, 0), h[i[i[f + 4 >> 2] + 24 >> 2] + 15 | 0] = 1, k1(n, e);
                }
              }
              return void (B = b - -64 | 0);
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function t1(n) {
            n |= 0;
            var f = 0, a = 0, e = 0, o = u(0), t = u(0), b = 0, k = 0, s = u(0), r = u(0), A = u(0), l = u(0), v = 0, p = u(0), w = 0, g = u(0), E = u(0), R = u(0), _ = u(0), P = u(0), x = u(0), j = u(0), F = 0, q = 0, Y = u(0), k2 = u(0), p2 = 0, e0 = 0, x0 = 0, B0 = 0, T0 = 0, U0 = 0, j0 = 0, F0 = 0;
            w = i[n + 8 >> 2], f = B - 80 | 0, t = c[n + 16 >> 2], c[f + 8 >> 2] = t, E = c[n + 20 >> 2], c[f + 12 >> 2] = E, R = c[n + 24 >> 2], c[f + 16 >> 2] = R;
            i:
              if (p2 = t == u(0) & E == u(0) & R == u(0)) {
                if (i[f + 76 >> 2] = -42943038, i[f + 68 >> 2] = -42943038, i[f + 72 >> 2] = -42943038, i[f + 64 >> 2] = 2104540610, i[f + 56 >> 2] = 2104540610, i[f + 60 >> 2] = 2104540610, e0 = (0 | (v = i[w >> 2])) == (0 | w))
                  g = u(-19999999867631625e21), s = u(19999999867631625e21), r = u(19999999867631625e21), p = u(-19999999867631625e21), A = u(19999999867631625e21), l = u(-19999999867631625e21);
                else {
                  for (_ = u(19999999867631625e21), P = u(-19999999867631625e21), x = u(-19999999867631625e21), j = u(19999999867631625e21), Y = u(-19999999867631625e21), k2 = u(19999999867631625e21), g = u(-19999999867631625e21), s = u(19999999867631625e21), l = u(-19999999867631625e21), A = u(19999999867631625e21), p = u(-19999999867631625e21), r = u(19999999867631625e21), a = v; g = (e = (o = c[a + 24 >> 2]) > g) ? o : g, P = e ? o : P, s = (F = o < s) ? o : s, _ = F ? o : _, l = (b = (o = c[a + 20 >> 2]) > l) ? o : l, x = b ? o : x, A = (q = o < A) ? o : A, j = q ? o : j, p = (k = (o = c[a + 16 >> 2]) > p) ? o : p, Y = k ? o : Y, x0 = k ? a : x0, r = (k = o < r) ? o : r, k2 = k ? o : k2, B0 = k ? a : B0, T0 = e ? a : T0, U0 = F ? a : U0, j0 = b ? a : j0, F0 = q ? a : F0, (0 | w) != (0 | (a = i[a >> 2])); )
                    ;
                  i[f + 20 >> 2] = B0, c[f + 56 >> 2] = k2, c[f + 68 >> 2] = Y, i[f + 32 >> 2] = x0, c[f + 60 >> 2] = j, i[f + 24 >> 2] = F0, c[f + 72 >> 2] = x, i[f + 36 >> 2] = j0, c[f + 64 >> 2] = _, i[f + 28 >> 2] = U0, c[f + 76 >> 2] = P, i[f + 40 >> 2] = T0;
                }
                if (a = 2, e = (b = u(l - A) > u(p - r)) << 2, e = u(g - s) > u(c[e + (f + 68 | 0) >> 2] - c[e + (f + 56 | 0) >> 2]) ? 2 : b, c[(b = e << 2) + (f + 56 | 0) >> 2] >= c[b + (f + 68 | 0) >> 2])
                  i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 0;
                else {
                  if (a = i[(e <<= 2) + (f + 20 | 0) >> 2], e = i[e + (f + 32 | 0) >> 2], P = c[e + 16 >> 2], A = u(c[a + 16 >> 2] - P), c[f + 44 >> 2] = A, x = c[e + 20 >> 2], l = u(c[a + 20 >> 2] - x), c[f + 48 >> 2] = l, j = c[e + 24 >> 2], o = u(c[a + 24 >> 2] - j), c[f + 52 >> 2] = o, !e0) {
                    for (_ = u(0), a = v; s = u(c[a + 20 >> 2] - x), r = u(c[a + 16 >> 2] - P), g = u(u(A * s) - u(l * r)), p = u(c[a + 24 >> 2] - j), s = u(u(l * p) - u(o * s)), r = u(u(o * r) - u(A * p)), (p = u(u(g * g) + u(u(s * s) + u(r * r)))) > _ && (R = g, E = r, _ = p, t = s), (0 | w) != (0 | (a = i[a >> 2])); )
                      ;
                    if (c[f + 16 >> 2] = R, c[f + 12 >> 2] = E, c[f + 8 >> 2] = t, !(_ <= u(0)))
                      break i;
                  }
                  i[f + 16 >> 2] = 0, i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 0, a = (l < u(0) ? u(-l) : l) > (A < u(0) ? u(-A) : A), t = c[(f + 44 | 0) + (a << 2) >> 2], a = (o < u(0) ? u(-o) : o) > (t < u(0) ? u(-t) : t) ? 2 : a;
                }
                i[(f + 8 | 0) + (a << 2) >> 2] = 1065353216, R = c[f + 16 >> 2], t = c[f + 8 >> 2], E = c[f + 12 >> 2];
              } else
                v = i[w >> 2];
            if (e = (E < u(0) ? u(-E) : E) > (t < u(0) ? u(-t) : t), t = c[(f + 8 | 0) + (e << 2) >> 2], a = n + 28 | 0, e = (R < u(0) ? u(-R) : R) > (t < u(0) ? u(-t) : t) ? 2 : e, i[a + (b = e << 2) >> 2] = 0, i[(k = (e + 1 >>> 0) % 3 << 2) + a >> 2] = 1065353216, i[(e = (e + 2 >>> 0) % 3 << 2) + a >> 2] = 0, i[(a = n + 40 | 0) + b >> 2] = 0, f = c[b + (f + 8 | 0) >> 2] > u(0), c[a + k >> 2] = u(f ? -0 : 0), c[a + e >> 2] = u(f ? 1 : -1), !(e = (0 | w) == (0 | v)))
              for (a = v; f = i[a + 20 >> 2], i[a + 28 >> 2] = i[a + 16 >> 2], i[a + 32 >> 2] = f, (0 | w) != (0 | (a = i[a >> 2])); )
                ;
            if (p2 && (0 | (f = i[w + 40 >> 2])) != (0 | (b = w + 40 | 0))) {
              for (t = u(0); ; ) {
                if (k = i[f + 8 >> 2], i[(a = k) + 28 >> 2] >= 1)
                  for (; F = i[a + 16 >> 2], q = i[i[a + 4 >> 2] + 16 >> 2], t = u(t + u(u(c[F + 28 >> 2] - c[q + 28 >> 2]) * u(c[F + 32 >> 2] + c[q + 32 >> 2]))), (0 | k) != (0 | (a = i[a + 12 >> 2])); )
                    ;
                if ((0 | b) == (0 | (f = i[f >> 2])))
                  break;
              }
              if (t < u(0)) {
                if (!e)
                  for (; c[v + 32 >> 2] = -c[v + 32 >> 2], (0 | (v = i[v >> 2])) != (0 | w); )
                    ;
                c[n + 40 >> 2] = -c[n + 40 >> 2], c[n + 44 >> 2] = -c[n + 44 >> 2], c[n + 48 >> 2] = -c[n + 48 >> 2];
              }
            }
          }
          function T(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            i:
              if (n |= 0) {
                t = (e = n - 8 | 0) + (n = -8 & (f = i[n - 4 >> 2])) | 0;
                f:
                  if (!(1 & f)) {
                    if (!(3 & f) || (e = e - (f = i[e >> 2]) | 0) >>> 0 < P2[618])
                      break i;
                    if (n = n + f | 0, i[619] == (0 | e)) {
                      if ((3 & (f = i[t + 4 >> 2])) == 3)
                        return i[616] = n, i[t + 4 >> 2] = -2 & f, i[e + 4 >> 2] = 1 | n, void (i[n + e >> 2] = n);
                    } else {
                      if (f >>> 0 <= 255) {
                        if (o = i[e + 8 >> 2], f = f >>> 3 | 0, (0 | (a = i[e + 12 >> 2])) == (0 | o)) {
                          s = 2456, r = i[614] & f2(f), i[s >> 2] = r;
                          break f;
                        }
                        i[o + 12 >> 2] = a, i[a + 8 >> 2] = o;
                        break f;
                      }
                      if (k = i[e + 24 >> 2], (0 | e) == (0 | (f = i[e + 12 >> 2])))
                        if ((a = i[(o = e + 20 | 0) >> 2]) || (a = i[(o = e + 16 | 0) >> 2])) {
                          for (; b = o, (a = i[(o = (f = a) + 20 | 0) >> 2]) || (o = f + 16 | 0, a = i[f + 16 >> 2]); )
                            ;
                          i[b >> 2] = 0;
                        } else
                          f = 0;
                      else
                        a = i[e + 8 >> 2], i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                      if (!k)
                        break f;
                      o = i[e + 28 >> 2];
                      a: {
                        if (i[(a = 2760 + (o << 2) | 0) >> 2] == (0 | e)) {
                          if (i[a >> 2] = f, f)
                            break a;
                          s = 2460, r = i[615] & f2(o), i[s >> 2] = r;
                          break f;
                        }
                        if (i[k + (i[k + 16 >> 2] == (0 | e) ? 16 : 20) >> 2] = f, !f)
                          break f;
                      }
                      if (i[f + 24 >> 2] = k, (a = i[e + 16 >> 2]) && (i[f + 16 >> 2] = a, i[a + 24 >> 2] = f), !(a = i[e + 20 >> 2]))
                        break f;
                      i[f + 20 >> 2] = a, i[a + 24 >> 2] = f;
                    }
                  }
                if (!(e >>> 0 >= t >>> 0) && 1 & (f = i[t + 4 >> 2])) {
                  f: {
                    if (!(2 & f)) {
                      if (i[620] == (0 | t)) {
                        if (i[620] = e, n = i[617] + n | 0, i[617] = n, i[e + 4 >> 2] = 1 | n, i[619] != (0 | e))
                          break i;
                        return i[616] = 0, void (i[619] = 0);
                      }
                      if (i[619] == (0 | t))
                        return i[619] = e, n = i[616] + n | 0, i[616] = n, i[e + 4 >> 2] = 1 | n, void (i[n + e >> 2] = n);
                      n = (-8 & f) + n | 0;
                      a:
                        if (f >>> 0 <= 255) {
                          if (o = i[t + 8 >> 2], f = f >>> 3 | 0, (0 | (a = i[t + 12 >> 2])) == (0 | o)) {
                            s = 2456, r = i[614] & f2(f), i[s >> 2] = r;
                            break a;
                          }
                          i[o + 12 >> 2] = a, i[a + 8 >> 2] = o;
                        } else {
                          if (k = i[t + 24 >> 2], (0 | t) == (0 | (f = i[t + 12 >> 2])))
                            if ((a = i[(o = t + 20 | 0) >> 2]) || (a = i[(o = t + 16 | 0) >> 2])) {
                              for (; b = o, (a = i[(o = (f = a) + 20 | 0) >> 2]) || (o = f + 16 | 0, a = i[f + 16 >> 2]); )
                                ;
                              i[b >> 2] = 0;
                            } else
                              f = 0;
                          else
                            a = i[t + 8 >> 2], i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                          if (k) {
                            o = i[t + 28 >> 2];
                            n: {
                              if (i[(a = 2760 + (o << 2) | 0) >> 2] == (0 | t)) {
                                if (i[a >> 2] = f, f)
                                  break n;
                                s = 2460, r = i[615] & f2(o), i[s >> 2] = r;
                                break a;
                              }
                              if (i[k + (i[k + 16 >> 2] == (0 | t) ? 16 : 20) >> 2] = f, !f)
                                break a;
                            }
                            i[f + 24 >> 2] = k, (a = i[t + 16 >> 2]) && (i[f + 16 >> 2] = a, i[a + 24 >> 2] = f), (a = i[t + 20 >> 2]) && (i[f + 20 >> 2] = a, i[a + 24 >> 2] = f);
                          }
                        }
                      if (i[e + 4 >> 2] = 1 | n, i[n + e >> 2] = n, i[619] != (0 | e))
                        break f;
                      return void (i[616] = n);
                    }
                    i[t + 4 >> 2] = -2 & f, i[e + 4 >> 2] = 1 | n, i[n + e >> 2] = n;
                  }
                  if (n >>> 0 <= 255)
                    return f = 2496 + ((n = n >>> 3 | 0) << 3) | 0, (a = i[614]) & (n = 1 << n) ? n = i[f + 8 >> 2] : (i[614] = n | a, n = f), i[f + 8 >> 2] = e, i[n + 12 >> 2] = e, i[e + 12 >> 2] = f, void (i[e + 8 >> 2] = n);
                  o = 31, i[e + 16 >> 2] = 0, i[e + 20 >> 2] = 0, n >>> 0 <= 16777215 && (f = n >>> 8 | 0, f <<= b = f + 1048320 >>> 16 & 8, o = 28 + ((f = ((f <<= o = f + 520192 >>> 16 & 4) << (a = f + 245760 >>> 16 & 2) >>> 15 | 0) - (a | o | b) | 0) << 1 | n >>> f + 21 & 1) | 0), i[e + 28 >> 2] = o, b = 2760 + (o << 2) | 0;
                  f: {
                    a: {
                      if ((a = i[615]) & (f = 1 << o)) {
                        for (o = n << ((0 | o) == 31 ? 0 : 25 - (o >>> 1 | 0) | 0), f = i[b >> 2]; ; ) {
                          if (a = f, (-8 & i[f + 4 >> 2]) == (0 | n))
                            break a;
                          if (f = o >>> 29 | 0, o <<= 1, !(f = i[16 + (b = a + (4 & f) | 0) >> 2]))
                            break;
                        }
                        i[b + 16 >> 2] = e, i[e + 24 >> 2] = a;
                      } else
                        i[615] = f | a, i[b >> 2] = e, i[e + 24 >> 2] = b;
                      i[e + 12 >> 2] = e, i[e + 8 >> 2] = e;
                      break f;
                    }
                    n = i[a + 8 >> 2], i[n + 12 >> 2] = e, i[a + 8 >> 2] = e, i[e + 24 >> 2] = 0, i[e + 12 >> 2] = a, i[e + 8 >> 2] = n;
                  }
                  n = i[622] - 1 | 0, i[622] = n || -1;
                }
              }
          }
          function m4(n, f) {
            f |= 0;
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, p = 0, w = 0, g = 0, E = 0, R = 0, _ = 0;
            if (B = k = B - 16 | 0, i[84 + (n |= 0) >> 2] = 0, (0 | (r = i[f + 40 >> 2])) != (0 | (w = f + 40 | 0)))
              for (f = r; h[f + 20 | 0] = 0, (0 | w) != (0 | (f = i[f >> 2])); )
                ;
            if ((0 | r) != (0 | w)) {
              for (; ; ) {
                if (!(m[r + 20 | 0] | !m[r + 21 | 0])) {
                  if (b = i[r + 8 >> 2], m[n + 80 | 0])
                    f = 1, a = 1;
                  else {
                    o = 0, e = 0, f = 0, t = i[(a = b) + 20 >> 2];
                    i:
                      if (m[t + 21 | 0])
                        for (; ; ) {
                          if (m[(f = t) + 20 | 0]) {
                            f = e;
                            break i;
                          }
                          if (h[f + 20 | 0] = 1, i[f + 16 >> 2] = e, o = o + 1 | 0, e = f, a = i[a + 8 >> 2], t = i[a + 20 >> 2], !m[t + 21 | 0])
                            break;
                        }
                    e = i[b + 4 >> 2], t = i[e + 20 >> 2];
                    i: {
                      f:
                        if (!m[t + 21 | 0] | m[t + 20 | 0]) {
                          if (E = b, !f)
                            break i;
                        } else
                          for (a = f; ; ) {
                            if (h[(f = t) + 20 | 0] = 1, i[f + 16 >> 2] = a, o = o + 1 | 0, E = i[e + 12 >> 2], e = i[E + 4 >> 2], t = i[e + 20 >> 2], !m[t + 21 | 0])
                              break f;
                            if (a = f, m[t + 20 | 0])
                              break;
                          }
                      for (; h[f + 20 | 0] = 0, f = i[f + 16 >> 2]; )
                        ;
                    }
                    R = (0 | o) > 1, t = 0, a = 0, f = 0, v = i[b + 12 >> 2], e = i[(s = v) + 20 >> 2];
                    i:
                      if (m[e + 21 | 0])
                        for (; ; ) {
                          if (m[(f = e) + 20 | 0]) {
                            f = a;
                            break i;
                          }
                          if (h[f + 20 | 0] = 1, i[f + 16 >> 2] = a, t = t + 1 | 0, a = f, s = i[s + 8 >> 2], e = i[s + 20 >> 2], !m[e + 21 | 0])
                            break;
                        }
                    g = R ? o : 1, e = i[v + 4 >> 2], o = i[e + 20 >> 2];
                    i: {
                      f:
                        if (!m[o + 21 | 0] | m[o + 20 | 0]) {
                          if (!f)
                            break i;
                        } else
                          for (a = f; ; ) {
                            if (h[(f = o) + 20 | 0] = 1, i[f + 16 >> 2] = a, t = t + 1 | 0, v = i[e + 12 >> 2], e = i[v + 4 >> 2], o = i[e + 20 >> 2], !m[o + 21 | 0])
                              break f;
                            if (a = f, m[o + 20 | 0])
                              break;
                          }
                      for (; h[f + 20 | 0] = 0, f = i[f + 16 >> 2]; )
                        ;
                    }
                    _ = (0 | t) > (0 | g), o = 0, a = 0, f = 0, p = i[i[b + 8 >> 2] + 4 >> 2], e = i[(s = p) + 20 >> 2];
                    i:
                      if (m[e + 21 | 0])
                        for (; ; ) {
                          if (m[(f = e) + 20 | 0]) {
                            f = a;
                            break i;
                          }
                          if (h[f + 20 | 0] = 1, i[f + 16 >> 2] = a, o = o + 1 | 0, a = f, s = i[s + 8 >> 2], e = i[s + 20 >> 2], !m[e + 21 | 0])
                            break;
                        }
                    A = _ ? t : g, e = i[p + 4 >> 2], t = i[e + 20 >> 2];
                    i: {
                      f:
                        if (!m[t + 21 | 0] | m[t + 20 | 0]) {
                          if (!f)
                            break i;
                        } else
                          for (a = f; ; ) {
                            if (h[(f = t) + 20 | 0] = 1, i[f + 16 >> 2] = a, o = o + 1 | 0, p = i[e + 12 >> 2], e = i[p + 4 >> 2], t = i[e + 20 >> 2], !m[t + 21 | 0])
                              break f;
                            if (a = f, m[t + 20 | 0])
                              break;
                          }
                      for (; h[f + 20 | 0] = 0, f = i[f + 16 >> 2]; )
                        ;
                    }
                    E0(k, b), s = i[k + 8 >> 2], g = i[k + 4 >> 2], l = i[k >> 2], E0(k, i[b + 12 >> 2]), t = i[k + 8 >> 2], e = i[k + 4 >> 2], a = i[k >> 2], E0(k, i[i[b + 8 >> 2] + 4 >> 2]), f = o, (0 | (f = (l = (0 | (f = (A = (0 | (f = (o = (0 | o) > (0 | A)) ? f : A)) < (0 | l)) ? l : f)) < (0 | a)) ? a : f)) >= (0 | (a = i[k >> 2])) ? (b = l ? e : A ? g : o ? p : _ ? v : R ? E : b, a = l ? t : A ? s : o || R | _ ? 2 : 1) : (b = i[k + 4 >> 2], f = a, a = i[k + 8 >> 2]);
                  }
                  I[0 | a](n, b, f);
                }
                if ((0 | w) == (0 | (r = i[r >> 2])))
                  break;
              }
              if (o = i[n + 84 >> 2]) {
                for ((0 | (f = i[n + 1716 >> 2])) == 3 ? I[i[n + 88 >> 2]](4) : I[0 | f](4, i[n + 1896 >> 2]), t = -1; ; ) {
                  for (f = i[o + 8 >> 2]; m[n + 80 | 0] && (0 | (a = !(b = m[i[i[f + 4 >> 2] + 20 >> 2] + 21 | 0]))) != (0 | t) && ((0 | (e = i[n + 1720 >> 2])) == 4 ? I[i[n + 92 >> 2]](!b) : I[0 | e](!b, i[n + 1896 >> 2]), t = a), (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (f = i[f + 12 >> 2])) != i[o + 8 >> 2]; )
                    ;
                  if (!(o = i[o + 16 >> 2]))
                    break;
                }
                (0 | (f = i[n + 1728 >> 2])) == 6 ? I[i[n + 100 >> 2]]() : I[0 | f](i[n + 1896 >> 2]), i[n + 84 >> 2] = 0;
              }
            }
            B = k + 16 | 0;
          }
          function b1(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            t = n + f | 0;
            i: {
              f:
                if (!(1 & (a = i[n + 4 >> 2]))) {
                  if (!(3 & a))
                    break i;
                  f = (a = i[n >> 2]) + f | 0;
                  a: {
                    if ((0 | (n = n - a | 0)) != i[619]) {
                      if (a >>> 0 <= 255) {
                        if (o = i[n + 8 >> 2], a = a >>> 3 | 0, (0 | (e = i[n + 12 >> 2])) != (0 | o))
                          break a;
                        s = 2456, r = i[614] & f2(a), i[s >> 2] = r;
                        break f;
                      }
                      if (k = i[n + 24 >> 2], (0 | (a = i[n + 12 >> 2])) == (0 | n))
                        if ((e = i[(o = n + 20 | 0) >> 2]) || (e = i[(o = n + 16 | 0) >> 2])) {
                          for (; b = o, (e = i[(o = (a = e) + 20 | 0) >> 2]) || (o = a + 16 | 0, e = i[a + 16 >> 2]); )
                            ;
                          i[b >> 2] = 0;
                        } else
                          a = 0;
                      else
                        e = i[n + 8 >> 2], i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
                      if (!k)
                        break f;
                      o = i[n + 28 >> 2];
                      n: {
                        if (i[(e = 2760 + (o << 2) | 0) >> 2] == (0 | n)) {
                          if (i[e >> 2] = a, a)
                            break n;
                          s = 2460, r = i[615] & f2(o), i[s >> 2] = r;
                          break f;
                        }
                        if (i[k + (i[k + 16 >> 2] == (0 | n) ? 16 : 20) >> 2] = a, !a)
                          break f;
                      }
                      if (i[a + 24 >> 2] = k, (e = i[n + 16 >> 2]) && (i[a + 16 >> 2] = e, i[e + 24 >> 2] = a), !(e = i[n + 20 >> 2]))
                        break f;
                      i[a + 20 >> 2] = e, i[e + 24 >> 2] = a;
                      break f;
                    }
                    if ((3 & (a = i[t + 4 >> 2])) != 3)
                      break f;
                    return i[616] = f, i[t + 4 >> 2] = -2 & a, i[n + 4 >> 2] = 1 | f, void (i[t >> 2] = f);
                  }
                  i[o + 12 >> 2] = e, i[e + 8 >> 2] = o;
                }
              f: {
                if (!(2 & (a = i[t + 4 >> 2]))) {
                  if (i[620] == (0 | t)) {
                    if (i[620] = n, f = i[617] + f | 0, i[617] = f, i[n + 4 >> 2] = 1 | f, i[619] != (0 | n))
                      break i;
                    return i[616] = 0, void (i[619] = 0);
                  }
                  if (i[619] == (0 | t))
                    return i[619] = n, f = i[616] + f | 0, i[616] = f, i[n + 4 >> 2] = 1 | f, void (i[n + f >> 2] = f);
                  f = (-8 & a) + f | 0;
                  a:
                    if (a >>> 0 <= 255) {
                      if (o = i[t + 8 >> 2], a = a >>> 3 | 0, (0 | (e = i[t + 12 >> 2])) == (0 | o)) {
                        s = 2456, r = i[614] & f2(a), i[s >> 2] = r;
                        break a;
                      }
                      i[o + 12 >> 2] = e, i[e + 8 >> 2] = o;
                    } else {
                      if (k = i[t + 24 >> 2], (0 | t) == (0 | (a = i[t + 12 >> 2])))
                        if ((o = i[(e = t + 20 | 0) >> 2]) || (o = i[(e = t + 16 | 0) >> 2])) {
                          for (; b = e, (o = i[(e = (a = o) + 20 | 0) >> 2]) || (e = a + 16 | 0, o = i[a + 16 >> 2]); )
                            ;
                          i[b >> 2] = 0;
                        } else
                          a = 0;
                      else
                        e = i[t + 8 >> 2], i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
                      if (k) {
                        o = i[t + 28 >> 2];
                        n: {
                          if (i[(e = 2760 + (o << 2) | 0) >> 2] == (0 | t)) {
                            if (i[e >> 2] = a, a)
                              break n;
                            s = 2460, r = i[615] & f2(o), i[s >> 2] = r;
                            break a;
                          }
                          if (i[k + (i[k + 16 >> 2] == (0 | t) ? 16 : 20) >> 2] = a, !a)
                            break a;
                        }
                        i[a + 24 >> 2] = k, (e = i[t + 16 >> 2]) && (i[a + 16 >> 2] = e, i[e + 24 >> 2] = a), (e = i[t + 20 >> 2]) && (i[a + 20 >> 2] = e, i[e + 24 >> 2] = a);
                      }
                    }
                  if (i[n + 4 >> 2] = 1 | f, i[n + f >> 2] = f, i[619] != (0 | n))
                    break f;
                  return void (i[616] = f);
                }
                i[t + 4 >> 2] = -2 & a, i[n + 4 >> 2] = 1 | f, i[n + f >> 2] = f;
              }
              if (f >>> 0 <= 255)
                return a = 2496 + ((f = f >>> 3 | 0) << 3) | 0, (e = i[614]) & (f = 1 << f) ? f = i[a + 8 >> 2] : (i[614] = f | e, f = a), i[a + 8 >> 2] = n, i[f + 12 >> 2] = n, i[n + 12 >> 2] = a, void (i[n + 8 >> 2] = f);
              o = 31, i[n + 16 >> 2] = 0, i[n + 20 >> 2] = 0, f >>> 0 <= 16777215 && (a = f >>> 8 | 0, a <<= b = a + 1048320 >>> 16 & 8, o = 28 + ((a = ((a <<= o = a + 520192 >>> 16 & 4) << (e = a + 245760 >>> 16 & 2) >>> 15 | 0) - (e | o | b) | 0) << 1 | f >>> a + 21 & 1) | 0), i[n + 28 >> 2] = o, b = 2760 + (o << 2) | 0;
              f: {
                if ((e = i[615]) & (a = 1 << o)) {
                  for (o = f << ((0 | o) == 31 ? 0 : 25 - (o >>> 1 | 0) | 0), a = i[b >> 2]; ; ) {
                    if (e = a, (-8 & i[a + 4 >> 2]) == (0 | f))
                      break f;
                    if (a = o >>> 29 | 0, o <<= 1, !(a = i[16 + (b = e + (4 & a) | 0) >> 2]))
                      break;
                  }
                  i[b + 16 >> 2] = n, i[n + 24 >> 2] = e;
                } else
                  i[615] = a | e, i[b >> 2] = n, i[n + 24 >> 2] = b;
                return i[n + 12 >> 2] = n, void (i[n + 8 >> 2] = n);
              }
              f = i[e + 8 >> 2], i[f + 12 >> 2] = n, i[e + 8 >> 2] = n, i[n + 24 >> 2] = 0, i[n + 12 >> 2] = e, i[n + 8 >> 2] = f;
            }
          }
          function C0(n, f) {
            var a = 0, e = 0, o = 0, t = u(0), b = 0, k = 0, s = u(0), r = 0, A = 0, l = 0, v = 0, p = 0, w = 0, g = 0, E = 0, R = 0, _ = 0, P = 0, x = 0, j = 0, F = 0;
            B = o = B - 48 | 0;
            i: {
              l = i[f >> 2], k = i[l + 16 >> 2], s = c[k + 28 >> 2], a = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], p = i[a >> 2], e = i[p + 16 >> 2], t = c[e + 28 >> 2];
              f: {
                if (!(!(c[k + 32 >> 2] <= c[e + 32 >> 2]) | s != t) || s < t) {
                  if (G(i[i[p + 4 >> 2] + 16 >> 2], k, e) > u(0))
                    break f;
                  if (k = i[l + 16 >> 2], e = i[p + 16 >> 2], c[k + 32 >> 2] != c[e + 32 >> 2] || c[k + 28 >> 2] != c[e + 28 >> 2]) {
                    if (!n2(i[p + 4 >> 2]) || !z(l, i[i[p + 4 >> 2] + 12 >> 2]))
                      break i;
                    _ = 1, h[a + 14 | 0] = 1, h[f + 14 | 0] = 1;
                    break f;
                  }
                  if (_ = 1, (0 | e) == (0 | k))
                    break f;
                  if (b = i[n + 68 >> 2], (0 | (f = i[k + 36 >> 2])) >= 0) {
                    if (w = i[b >> 2], r = i[w >> 2], k = f, A = i[w + 4 >> 2], f = i[4 + (P = A + (f << 3) | 0) >> 2], R = i[w + 8 >> 2], E = i[r + (R << 2) >> 2], i[r + (f << 2) >> 2] = E, i[4 + (x = (E << 3) + A | 0) >> 2] = f, j = R - 1 | 0, i[w + 8 >> 2] = j, (0 | f) < (0 | R)) {
                      a: {
                        if ((0 | f) < 2 || (a = i[(i[r + (f << 1 & -4) >> 2] << 3) + A >> 2], t = c[a + 28 >> 2], g = i[(E << 3) + A >> 2], t < (s = c[g + 28 >> 2]) || !(!(c[a + 32 >> 2] <= c[g + 32 >> 2]) | s != t)))
                          for (F = (E << 3) + A | 0; ; ) {
                            if ((0 | j) <= (0 | (a = f << 1)) || (v = i[(i[r + ((e = 1 | a) << 2) >> 2] << 3) + A >> 2], s = c[v + 28 >> 2], b = i[(i[r + (a << 2) >> 2] << 3) + A >> 2], t = c[b + 28 >> 2], !(c[v + 32 >> 2] <= c[b + 32 >> 2]) | s != t && !(s < t) || (a = e)), (0 | a) >= (0 | R)) {
                              a = f;
                              break a;
                            }
                            if (g = i[F >> 2], s = c[g + 28 >> 2], v = i[r + (a << 2) >> 2], e = i[(b = (v << 3) + A | 0) >> 2], s < (t = c[e + 28 >> 2])) {
                              a = f;
                              break a;
                            }
                            if (!(!(c[g + 32 >> 2] <= c[e + 32 >> 2]) | s != t)) {
                              a = f;
                              break a;
                            }
                            i[r + (f << 2) >> 2] = v, i[b + 4 >> 2] = f, f = a;
                          }
                        for (; ; ) {
                          if (v = i[r + ((a = f >> 1) << 2) >> 2], e = i[(b = (v << 3) + A | 0) >> 2], (t = c[e + 28 >> 2]) < s) {
                            a = f;
                            break a;
                          }
                          if (!(!(c[e + 32 >> 2] <= c[g + 32 >> 2]) | s != t)) {
                            a = f;
                            break a;
                          }
                          if (i[r + (f << 2) >> 2] = v, i[b + 4 >> 2] = f, !((f = a) >>> 0 > 1))
                            break;
                        }
                      }
                      i[r + (a << 2) >> 2] = E, i[x + 4 >> 2] = a;
                    }
                    i[P >> 2] = 0, i[P + 4 >> 2] = i[w + 16 >> 2], i[w + 16 >> 2] = k;
                  } else {
                    i[i[b + 4 >> 2] + ((-1 ^ f) << 2) >> 2] = 0;
                    a:
                      if (!((0 | (f = i[b + 12 >> 2])) < 1))
                        for (k = i[b + 8 >> 2]; ; ) {
                          if (i[i[k + ((a = f - 1 | 0) << 2) >> 2] >> 2])
                            break a;
                          if (i[b + 12 >> 2] = a, e = (0 | f) > 1, f = a, !e)
                            break;
                        }
                  }
                  if (a = i[i[p + 4 >> 2] + 12 >> 2], i[o + 24 >> 2] = 0, i[o + 28 >> 2] = 0, i[o + 16 >> 2] = 0, i[o + 20 >> 2] = 0, f = i[287], i[o + 8 >> 2] = i[286], i[o + 12 >> 2] = f, f = i[285], i[o >> 2] = i[284], i[o + 4 >> 2] = f, f = i[a + 16 >> 2], i[o + 16 >> 2] = i[f + 12 >> 2], i[o + 20 >> 2] = i[i[l + 16 >> 2] + 12 >> 2], c[o + 36 >> 2] = c[f + 16 >> 2], c[o + 40 >> 2] = c[f + 20 >> 2], c[o + 44 >> 2] = c[f + 24 >> 2], i[f + 12 >> 2] = 0, e = f + 12 | 0, (0 | (f = i[n + 1736 >> 2])) == 8 ? I[i[n + 76 >> 2]](o + 36 | 0, o + 16 | 0, o, e) : I[0 | f](o + 36 | 0, o + 16 | 0, o, e, i[n + 1896 >> 2]), i[e >> 2] || (i[e >> 2] = i[o + 16 >> 2]), z(a, l))
                    break f;
                  break i;
                }
                if (!(G(i[i[l + 4 >> 2] + 16 >> 2], e, k) < u(0)) && (_ = 1, h[f + 14 | 0] = 1, h[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !n2(i[l + 4 >> 2]) || !z(i[i[p + 4 >> 2] + 12 >> 2], l)))
                  break i;
              }
              return B = o + 48 | 0, _;
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function y4(n) {
            n |= 0;
            var f = 0, a = 0, e = u(0), o = u(0), t = u(0), b = u(0), k = u(0), s = u(0), r = 0, A = 0, l = 0, v = u(0), p = u(0), w = 0, g = u(0), E = u(0), R = u(0), _ = u(0), P = u(0), x = 0, j = 0, F = u(0), q = u(0), Y = u(0);
            i: {
              f:
                if (!((0 | (l = i[n + 112 >> 2])) < 3)) {
                  if (r = (j = n + 116 | 0) + (l << 4) | 0, b = c[n + 24 >> 2], k = c[n + 16 >> 2], s = c[n + 20 >> 2], b != u(0) || k != u(0) | s != u(0))
                    g = c[n + 124 >> 2], t = u(c[n + 140 >> 2] - g), E = c[n + 120 >> 2], v = u(c[n + 136 >> 2] - E), R = c[n + 116 >> 2], p = u(c[n + 132 >> 2] - R);
                  else {
                    for (a = n + 148 | 0, b = u(0), s = u(0), k = u(0), f = n + 132 | 0, R = c[n + 116 >> 2], e = p = u(c[f >> 2] - R), E = c[n + 120 >> 2], o = v = u(c[n + 136 >> 2] - E), g = c[n + 124 >> 2], _ = t = u(c[n + 140 >> 2] - g); P = u(c[f + 20 >> 2] - E), F = u(c[a >> 2] - R), q = u(u(e * P) - u(o * F)), Y = u(c[f + 24 >> 2] - g), o = u(u(o * Y) - u(_ * P)), e = u(u(_ * F) - u(e * Y)), u(u(b * q) + u(u(k * o) + u(s * e))) >= u(0) ? (s = u(s + e), k = u(k + o), b = u(b + q)) : (s = u(s - e), k = u(k - o), b = u(b - q)), e = F, o = P, _ = Y, r >>> 0 > (a = (f = a) + 16 | 0) >>> 0; )
                      ;
                    if ((0 | l) < 3)
                      break f;
                  }
                  for (a = n + 148 | 0, f = w = n + 132 | 0; ; ) {
                    e = t, t = v, x = f, o = p, v = u(c[f + 20 >> 2] - E), p = u(c[(f = a) >> 2] - R), P = u(b * u(u(o * v) - u(t * p))), _ = t, t = u(c[x + 24 >> 2] - g);
                    a:
                      if ((e = u(P + u(u(k * u(u(_ * t) - u(e * v))) + u(s * u(u(e * p) - u(o * t)))))) != u(0)) {
                        if (e > u(0)) {
                          if (a = 0, x = (0 | A) < 0, A = 1, !x)
                            break a;
                          break i;
                        }
                        if (a = 0, x = (0 | A) > 0, A = -1, x)
                          break i;
                      }
                    if (!(r >>> 0 > (a = f + 16 | 0) >>> 0))
                      break;
                  }
                  switch (a = 0, 0 | A) {
                    case 2:
                      break i;
                    case 0:
                      break f;
                  }
                  a = 1;
                  a: {
                    n:
                      switch (i[n + 56 >> 2] - 100132 | 0) {
                        case 0:
                          if ((0 | A) >= 0)
                            break a;
                          break f;
                        case 2:
                          break i;
                        case 1:
                          break n;
                        default:
                          break a;
                      }
                    if ((0 | A) > 0)
                      break f;
                  }
                  (0 | (f = i[n + 1716 >> 2])) == 3 ? I[i[n + 88 >> 2]](m[n + 81 | 0] ? 2 : (0 | l) < 4 ? 4 : 6) : I[0 | f](m[n + 81 | 0] ? 2 : (0 | l) < 4 ? 4 : 6, i[n + 1896 >> 2]), (0 | (f = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[n + 128 >> 2]) : I[0 | f](i[n + 128 >> 2], i[n + 1896 >> 2]);
                  a:
                    if ((0 | A) <= 0) {
                      if (j >>> 0 >= (f = r - 16 | 0) >>> 0)
                        break a;
                      for (; (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[r - 4 >> 2]) : I[0 | a](i[r - 4 >> 2], i[n + 1896 >> 2]), r = f, j >>> 0 < (f = f - 16 | 0) >>> 0; )
                        ;
                    } else if (!((0 | l) < 2))
                      for (; (0 | (f = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[w + 12 >> 2]) : I[0 | f](i[w + 12 >> 2], i[n + 1896 >> 2]), (w = w + 16 | 0) >>> 0 < r >>> 0; )
                        ;
                  (0 | (f = i[n + 1728 >> 2])) == 6 ? I[i[n + 100 >> 2]]() : I[0 | f](i[n + 1896 >> 2]);
                }
              a = 1;
            }
            return 0 | a;
          }
          function A0(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, p = 0, w = 0;
            if (!n)
              return H(f);
            if (f >>> 0 >= 4294967232)
              return i[613] = 48, 0;
            b = f >>> 0 < 11 ? 16 : f + 11 & -8, o = -8 & (r = i[4 + (t = n - 8 | 0) >> 2]);
            i:
              if (3 & r) {
                k = o + t | 0;
                f:
                  if (o >>> 0 >= b >>> 0) {
                    if ((e = o - b | 0) >>> 0 < 16)
                      break f;
                    i[t + 4 >> 2] = 1 & r | b | 2, i[4 + (a = t + b | 0) >> 2] = 3 | e, i[k + 4 >> 2] = 1 | i[k + 4 >> 2], b1(a, e);
                  } else if (i[620] != (0 | k))
                    if (i[619] != (0 | k)) {
                      if (2 & (e = i[k + 4 >> 2]) || (A = o + (-8 & e) | 0) >>> 0 < b >>> 0)
                        break i;
                      v = A - b | 0;
                      a:
                        if (e >>> 0 <= 255) {
                          if (o = i[k + 8 >> 2], a = e >>> 3 | 0, (0 | (e = i[k + 12 >> 2])) == (0 | o)) {
                            p = 2456, w = i[614] & f2(a), i[p >> 2] = w;
                            break a;
                          }
                          i[o + 12 >> 2] = e, i[e + 8 >> 2] = o;
                        } else {
                          if (l = i[k + 24 >> 2], (0 | (s = i[k + 12 >> 2])) == (0 | k))
                            if ((a = i[(o = k + 20 | 0) >> 2]) || (a = i[(o = k + 16 | 0) >> 2])) {
                              for (; e = o, s = a, (a = i[(o = a + 20 | 0) >> 2]) || (o = s + 16 | 0, a = i[s + 16 >> 2]); )
                                ;
                              i[e >> 2] = 0;
                            } else
                              s = 0;
                          else
                            a = i[k + 8 >> 2], i[a + 12 >> 2] = s, i[s + 8 >> 2] = a;
                          if (l) {
                            e = i[k + 28 >> 2];
                            n: {
                              if (i[(a = 2760 + (e << 2) | 0) >> 2] == (0 | k)) {
                                if (i[a >> 2] = s, s)
                                  break n;
                                p = 2460, w = i[615] & f2(e), i[p >> 2] = w;
                                break a;
                              }
                              if (i[(i[l + 16 >> 2] == (0 | k) ? 16 : 20) + l >> 2] = s, !s)
                                break a;
                            }
                            i[s + 24 >> 2] = l, (a = i[k + 16 >> 2]) && (i[s + 16 >> 2] = a, i[a + 24 >> 2] = s), (a = i[k + 20 >> 2]) && (i[s + 20 >> 2] = a, i[a + 24 >> 2] = s);
                          }
                        }
                      v >>> 0 <= 15 ? (i[t + 4 >> 2] = 1 & r | A | 2, i[4 + (a = t + A | 0) >> 2] = 1 | i[a + 4 >> 2]) : (i[t + 4 >> 2] = 1 & r | b | 2, i[4 + (e = t + b | 0) >> 2] = 3 | v, i[4 + (a = t + A | 0) >> 2] = 1 | i[a + 4 >> 2], b1(e, v));
                    } else {
                      if ((e = o + i[616] | 0) >>> 0 < b >>> 0)
                        break i;
                      (a = e - b | 0) >>> 0 >= 16 ? (i[t + 4 >> 2] = 1 & r | b | 2, i[4 + (o = t + b | 0) >> 2] = 1 | a, i[(e = e + t | 0) >> 2] = a, i[e + 4 >> 2] = -2 & i[e + 4 >> 2]) : (i[t + 4 >> 2] = e | 1 & r | 2, i[4 + (a = e + t | 0) >> 2] = 1 | i[a + 4 >> 2], a = 0, o = 0), i[619] = o, i[616] = a;
                    }
                  else {
                    if ((o = o + i[617] | 0) >>> 0 <= b >>> 0)
                      break i;
                    i[t + 4 >> 2] = 1 & r | b | 2, a = o - b | 0, i[4 + (e = t + b | 0) >> 2] = 1 | a, i[617] = a, i[620] = e;
                  }
                a = t;
              } else {
                if (b >>> 0 < 256 || o >>> 0 >= b + 4 >>> 0 && (a = t, o - b >>> 0 <= i[734] << 1 >>> 0))
                  break i;
                a = 0;
              }
            return a ? a + 8 | 0 : (t = H(f)) ? (u1(t, n, f >>> 0 > (a = (3 & (a = i[n - 4 >> 2]) ? -4 : -8) + (-8 & a) | 0) >>> 0 ? a : f), T(n), t) : 0;
          }
          function k1(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = u(0), r = 0, A = u(0);
            for (e = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2]; ; ) {
              i: {
                if (m[e + 14 | 0])
                  for (; e = i[i[i[(f = e) + 4 >> 2] + 8 >> 2] >> 2], m[e + 14 | 0]; )
                    ;
                f: {
                  a: {
                    n: {
                      e: {
                        if (m[f + 14 | 0])
                          a = f;
                        else if (!(a = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2]) || (e = f, !m[a + 14 | 0]))
                          break e;
                        h[a + 14 | 0] = 0, o = i[a >> 2], f = i[i[o + 4 >> 2] + 16 >> 2], b = i[e >> 2];
                        b:
                          if ((0 | f) != i[i[b + 4 >> 2] + 16 >> 2]) {
                            s = c[f + 28 >> 2], r = i[i[i[a + 4 >> 2] + 8 >> 2] >> 2], t = i[r >> 2], k = i[i[t + 4 >> 2] + 16 >> 2], A = c[k + 28 >> 2];
                            o: {
                              if (!(!(c[f + 32 >> 2] <= c[k + 32 >> 2]) | s != A) || s < A) {
                                if (G(f, k, i[o + 16 >> 2]) < u(0)) {
                                  f = a;
                                  break b;
                                }
                                if (h[a + 14 | 0] = 1, h[i[i[i[a + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !(f = n2(o)))
                                  break f;
                                if (z(i[t + 4 >> 2], f))
                                  break o;
                                break i;
                              }
                              if (G(k, f, i[t + 16 >> 2]) > u(0)) {
                                f = a;
                                break b;
                              }
                              if (h[r + 14 | 0] = 1, h[a + 14 | 0] = 1, !(f = n2(t)) || !z(i[o + 12 >> 2], i[t + 4 >> 2]))
                                break i;
                              f = i[f + 4 >> 2];
                            }
                            if (h[i[f + 20 >> 2] + 21 | 0] = m[a + 12 | 0], m[e + 15 | 0]) {
                              if (i[i[e >> 2] + 24 >> 2] = 0, h2(i[e + 4 >> 2]), T(e), !$(b))
                                break i;
                              e = i[i[i[a + 4 >> 2] + 8 >> 2] >> 2], b = i[e >> 2], f = a;
                            } else if (m[a + 15 | 0]) {
                              if (i[i[a >> 2] + 24 >> 2] = 0, h2(i[a + 4 >> 2]), T(a), !$(o))
                                break i;
                              f = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], o = i[f >> 2];
                            } else
                              f = a;
                          } else
                            f = a;
                        if (i[o + 16 >> 2] == i[b + 16 >> 2])
                          break a;
                        if (a = i[i[o + 4 >> 2] + 16 >> 2], t = i[i[b + 4 >> 2] + 16 >> 2], m[e + 15 | 0] | m[f + 15 | 0] | (0 | a) == (0 | t) || (k = a, (0 | (a = i[n + 72 >> 2])) != (0 | t) && (0 | k) != (0 | a)))
                          break n;
                        if (!o1(n, f))
                          break a;
                      }
                      return;
                    }
                    C0(n, f);
                  }
                  if (i[o + 16 >> 2] != i[b + 16 >> 2] || (t = i[o + 4 >> 2], a = i[b + 4 >> 2], i[t + 16 >> 2] != i[a + 16 >> 2]))
                    continue;
                  if (i[b + 28 >> 2] = i[b + 28 >> 2] + i[o + 28 >> 2], i[a + 28 >> 2] = i[a + 28 >> 2] + i[t + 28 >> 2], i[i[f >> 2] + 24 >> 2] = 0, h2(i[f + 4 >> 2]), T(f), !$(o))
                    break i;
                  f = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2];
                  continue;
                }
              }
              break;
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function g4(n) {
            n |= 0;
            var f = 0, a = 0, e = 0, o = u(0), t = u(0), b = 0, k = 0, s = 0, r = 0;
            if ((0 | (f = i[n + 40 >> 2])) != (0 | (s = n + 40 | 0)))
              for (; ; ) {
                if (n = i[f >> 2], m[f + 21 | 0]) {
                  for (f = f + 8 | 0; f = i[f >> 2], a = i[i[f + 4 >> 2] + 16 >> 2], o = c[a + 28 >> 2], e = i[f + 16 >> 2], t = c[e + 28 >> 2], !(!(c[a + 32 >> 2] <= c[e + 32 >> 2]) | o != t) || o < t; )
                    f = i[f + 8 >> 2] + 4 | 0;
                  for (; !(!(c[e + 32 >> 2] <= c[a + 32 >> 2]) | o != t) || o > t; )
                    f = i[f + 12 >> 2], e = i[f + 16 >> 2], t = c[e + 28 >> 2], a = i[i[f + 4 >> 2] + 16 >> 2], o = c[a + 28 >> 2];
                  i: {
                    f:
                      if ((0 | (e = i[i[f + 8 >> 2] + 4 >> 2])) != i[f + 12 >> 2])
                        for (; ; ) {
                          if (b = i[e + 16 >> 2], t = c[b + 28 >> 2], !(c[a + 32 >> 2] <= c[b + 32 >> 2]) | o != t && !(t > o)) {
                            a:
                              if (i[e + 12 >> 2] != (0 | f))
                                for (; ; ) {
                                  if (a = i[i[f + 8 >> 2] + 4 >> 2], b = i[a + 16 >> 2], o = c[b + 28 >> 2], k = i[i[a + 4 >> 2] + 16 >> 2], !(o < (t = c[k + 28 >> 2]) | (c[b + 32 >> 2] <= c[k + 32 >> 2] ? o == t : 0))) {
                                    if (!(G(i[i[f + 4 >> 2] + 16 >> 2], i[f + 16 >> 2], b) >= u(0)))
                                      break a;
                                    a = i[i[f + 8 >> 2] + 4 >> 2];
                                  }
                                  if (f = v2(f, a), a = 0, !f)
                                    break i;
                                  if ((0 | (f = i[f + 4 >> 2])) == i[e + 12 >> 2])
                                    break;
                                }
                            f = i[f + 12 >> 2];
                          } else {
                            a:
                              if ((0 | (a = i[e + 12 >> 2])) != (0 | f))
                                for (b = e + 12 | 0; ; ) {
                                  if (k = i[i[a + 4 >> 2] + 16 >> 2], o = c[k + 28 >> 2], r = i[a + 16 >> 2], !(o < (t = c[r + 28 >> 2]) | (c[k + 32 >> 2] <= c[r + 32 >> 2] ? o == t : 0))) {
                                    if (!(G(i[e + 16 >> 2], i[i[e + 4 >> 2] + 16 >> 2], k) <= u(0)))
                                      break a;
                                    a = i[b >> 2];
                                  }
                                  if (e = v2(a, e), a = 0, !e)
                                    break i;
                                  if (b = (e = i[e + 4 >> 2]) + 12 | 0, (0 | (a = i[e + 12 >> 2])) == (0 | f))
                                    break;
                                }
                            e = i[i[e + 8 >> 2] + 4 >> 2];
                          }
                          if (i[f + 12 >> 2] == (0 | e))
                            break f;
                          a = i[i[f + 4 >> 2] + 16 >> 2], o = c[a + 28 >> 2];
                        }
                    if (a = i[e + 12 >> 2], i[a + 12 >> 2] != (0 | f))
                      for (; ; ) {
                        if (e = v2(a, e), a = 0, !e)
                          break i;
                        if (e = i[e + 4 >> 2], a = i[e + 12 >> 2], i[a + 12 >> 2] == (0 | f))
                          break;
                      }
                    a = 1;
                  }
                  if (!a)
                    return 0;
                }
                if ((0 | s) == (0 | (f = n)))
                  break;
              }
            return 1;
          }
          function $(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0;
            if (o = i[n + 4 >> 2], (0 | (b = i[o + 20 >> 2])) != (0 | (a = i[n + 20 >> 2]))) {
              for (f = e = i[a + 8 >> 2]; i[f + 20 >> 2] = b, (0 | e) != (0 | (f = i[f + 12 >> 2])); )
                ;
              f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, T(a);
            }
            if ((0 | (e = i[n + 8 >> 2])) != (0 | n)) {
              if (t = i[n + 4 >> 2], f = i[t + 12 >> 2], i[i[t + 20 >> 2] + 8 >> 2] = f, i[i[n + 16 >> 2] + 8 >> 2] = e, t = i[f + 8 >> 2], i[i[e + 4 >> 2] + 12 >> 2] = f, i[i[t + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = t, i[f + 8 >> 2] = e, (0 | a) == (0 | b)) {
                if (!(a = H(24)))
                  return 0;
                for (f = i[n + 20 >> 2], e = i[f + 4 >> 2], i[a + 4 >> 2] = e, i[e >> 2] = a, i[a >> 2] = f, i[f + 4 >> 2] = a, i[a + 12 >> 2] = 0, i[a + 16 >> 2] = 0, i[a + 8 >> 2] = n, h[a + 20 | 0] = 0, h[a + 21 | 0] = m[f + 21 | 0], f = n; i[f + 20 >> 2] = a, (0 | (f = i[f + 12 >> 2])) != (0 | n); )
                  ;
              }
            } else {
              for (a = i[n + 16 >> 2], f = e = i[a + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | e) != (0 | (f = i[f + 8 >> 2])); )
                ;
              f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, T(a);
            }
            if ((0 | (f = i[o + 8 >> 2])) != (0 | o))
              a = i[i[o + 4 >> 2] + 12 >> 2], i[i[n + 20 >> 2] + 8 >> 2] = a, i[i[o + 16 >> 2] + 8 >> 2] = f, e = i[a + 8 >> 2], i[i[f + 4 >> 2] + 12 >> 2] = a, i[i[e + 4 >> 2] + 12 >> 2] = o, i[o + 8 >> 2] = e, i[a + 8 >> 2] = f;
            else {
              for (a = i[o + 16 >> 2], f = e = i[a + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | e) != (0 | (f = i[f + 8 >> 2])); )
                ;
              for (f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, T(a), a = i[o + 20 >> 2], f = o = i[a + 8 >> 2]; i[f + 20 >> 2] = 0, (0 | o) != (0 | (f = i[f + 12 >> 2])); )
                ;
              f = i[a >> 2], o = i[a + 4 >> 2], i[f + 4 >> 2] = o, i[o >> 2] = f, T(a);
            }
            return f = i[n + 4 >> 2], f = i[(n = n >>> 0 > f >>> 0 ? f : n) >> 2], a = i[i[n + 4 >> 2] >> 2], i[i[f + 4 >> 2] >> 2] = a, i[i[a + 4 >> 2] >> 2] = f, T(n), 1;
          }
          function v2(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            if (e = 0, a = H(64)) {
              if (k = i[n + 4 >> 2], t = i[(e = n >>> 0 > k >>> 0 ? k : n) + 4 >> 2], o = i[t >> 2], i[a + 32 >> 2] = o, i[i[o + 4 >> 2] >> 2] = a, i[a >> 2] = e, b = a + 32 | 0, i[t >> 2] = b, i[a + 16 >> 2] = 0, i[a + 20 >> 2] = 0, i[a + 12 >> 2] = b, i[a + 4 >> 2] = b, i[a + 24 >> 2] = 0, i[a + 28 >> 2] = 0, i[a + 48 >> 2] = 0, i[a + 52 >> 2] = 0, i[a + 44 >> 2] = a, i[a + 40 >> 2] = b, i[a + 36 >> 2] = a, i[a + 56 >> 2] = 0, i[a + 60 >> 2] = 0, i[a + 8 >> 2] = a, (0 | (s = i[n + 20 >> 2])) != (0 | (t = i[f + 20 >> 2]))) {
                for (e = o = i[t + 8 >> 2]; i[e + 20 >> 2] = s, (0 | o) != (0 | (e = i[e + 12 >> 2])); )
                  ;
                e = i[t >> 2], o = i[t + 4 >> 2], i[e + 4 >> 2] = o, i[o >> 2] = e, T(t), k = i[n + 4 >> 2], o = i[a + 8 >> 2], e = i[n + 20 >> 2];
              } else
                o = a, e = t;
              if (n = i[n + 12 >> 2], r = i[n + 8 >> 2], i[i[o + 4 >> 2] + 12 >> 2] = n, i[i[r + 4 >> 2] + 12 >> 2] = a, i[a + 8 >> 2] = r, i[n + 8 >> 2] = o, n = i[f + 8 >> 2], o = i[a + 40 >> 2], i[i[o + 4 >> 2] + 12 >> 2] = f, i[i[n + 4 >> 2] + 12 >> 2] = b, i[a + 40 >> 2] = n, i[f + 8 >> 2] = o, i[a + 16 >> 2] = i[k + 16 >> 2], f = i[f + 16 >> 2], n = e, i[a + 52 >> 2] = n, i[a + 48 >> 2] = f, i[a + 20 >> 2] = n, i[n + 8 >> 2] = b, e = a, (0 | t) == (0 | s) && (e = 0, f = H(24))) {
                for (e = i[n + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, i[f >> 2] = n, i[n + 4 >> 2] = f, i[f + 12 >> 2] = 0, i[f + 16 >> 2] = 0, i[f + 8 >> 2] = a, h[f + 20 | 0] = 0, h[f + 21 | 0] = m[n + 21 | 0], e = a; i[e + 20 >> 2] = f, (0 | (e = i[e + 12 >> 2])) != (0 | a); )
                  ;
                e = a;
              }
            }
            return e;
          }
          function u1(n, f, a) {
            var e = 0, o = 0;
            if (a >>> 0 >= 512)
              d4(0 | n, 0 | f, 0 | a);
            else {
              e = n + a | 0;
              i:
                if (3 & (n ^ f))
                  if (e >>> 0 < 4)
                    a = n;
                  else if ((o = e - 4 | 0) >>> 0 < n >>> 0)
                    a = n;
                  else
                    for (a = n; h[0 | a] = m[0 | f], h[a + 1 | 0] = m[f + 1 | 0], h[a + 2 | 0] = m[f + 2 | 0], h[a + 3 | 0] = m[f + 3 | 0], f = f + 4 | 0, o >>> 0 >= (a = a + 4 | 0) >>> 0; )
                      ;
                else {
                  f:
                    if (3 & n)
                      if ((0 | a) < 1)
                        a = n;
                      else
                        for (a = n; ; ) {
                          if (h[0 | a] = m[0 | f], f = f + 1 | 0, !(3 & (a = a + 1 | 0)))
                            break f;
                          if (!(a >>> 0 < e >>> 0))
                            break;
                        }
                    else
                      a = n;
                  if (!((n = -4 & e) >>> 0 < 64 || (o = n + -64 | 0) >>> 0 < a >>> 0))
                    for (; i[a >> 2] = i[f >> 2], i[a + 4 >> 2] = i[f + 4 >> 2], i[a + 8 >> 2] = i[f + 8 >> 2], i[a + 12 >> 2] = i[f + 12 >> 2], i[a + 16 >> 2] = i[f + 16 >> 2], i[a + 20 >> 2] = i[f + 20 >> 2], i[a + 24 >> 2] = i[f + 24 >> 2], i[a + 28 >> 2] = i[f + 28 >> 2], i[a + 32 >> 2] = i[f + 32 >> 2], i[a + 36 >> 2] = i[f + 36 >> 2], i[a + 40 >> 2] = i[f + 40 >> 2], i[a + 44 >> 2] = i[f + 44 >> 2], i[a + 48 >> 2] = i[f + 48 >> 2], i[a + 52 >> 2] = i[f + 52 >> 2], i[a + 56 >> 2] = i[f + 56 >> 2], i[a + 60 >> 2] = i[f + 60 >> 2], f = f - -64 | 0, o >>> 0 >= (a = a - -64 | 0) >>> 0; )
                      ;
                  if (n >>> 0 <= a >>> 0)
                    break i;
                  for (; i[a >> 2] = i[f >> 2], f = f + 4 | 0, n >>> 0 > (a = a + 4 | 0) >>> 0; )
                    ;
                }
              if (a >>> 0 < e >>> 0)
                for (; h[0 | a] = m[0 | f], f = f + 1 | 0, (0 | e) != (0 | (a = a + 1 | 0)); )
                  ;
            }
          }
          function n2(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0;
            if (t = n |= 0, n = 0, (f = H(64)) && (e = i[t + 4 >> 2], o = i[(a = e >>> 0 < t >>> 0 ? e : t) + 4 >> 2], b = i[o >> 2], i[f + 32 >> 2] = b, i[i[b + 4 >> 2] >> 2] = f, i[f >> 2] = a, a = f + 32 | 0, i[o >> 2] = a, i[f + 16 >> 2] = 0, i[f + 20 >> 2] = 0, i[f + 12 >> 2] = a, i[f + 4 >> 2] = a, i[f + 24 >> 2] = 0, i[f + 28 >> 2] = 0, i[f + 48 >> 2] = 0, i[f + 52 >> 2] = 0, i[f + 40 >> 2] = a, i[f + 36 >> 2] = f, i[f + 56 >> 2] = 0, i[f + 60 >> 2] = 0, i[f + 8 >> 2] = f, o = i[t + 12 >> 2], b = i[o + 8 >> 2], i[f + 44 >> 2] = o, i[i[b + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = b, i[o + 8 >> 2] = f, o = i[e + 16 >> 2], i[f + 16 >> 2] = o, e = H(40))) {
              for (n = i[o + 4 >> 2], i[e + 4 >> 2] = n, i[n >> 2] = e, i[e >> 2] = o, i[o + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 8 >> 2] = a, n = a; i[n + 16 >> 2] = e, (0 | a) != (0 | (n = i[n + 8 >> 2])); )
                ;
              n = i[t + 20 >> 2], i[f + 20 >> 2] = n, i[f + 52 >> 2] = n, n = f;
            }
            return n ? (f = i[n + 4 >> 2], n = i[t + 4 >> 2], a = i[i[n + 4 >> 2] + 12 >> 2], e = i[a + 8 >> 2], o = i[n + 8 >> 2], i[i[o + 4 >> 2] + 12 >> 2] = a, i[i[e + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = e, i[a + 8 >> 2] = o, a = i[f + 8 >> 2], e = i[n + 8 >> 2], i[i[e + 4 >> 2] + 12 >> 2] = f, i[i[a + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = a, i[f + 8 >> 2] = e, i[n + 16 >> 2] = i[f + 16 >> 2], a = i[f + 4 >> 2], i[i[a + 16 >> 2] + 8 >> 2] = a, i[a + 20 >> 2] = i[n + 20 >> 2], i[f + 28 >> 2] = i[t + 28 >> 2], i[a + 28 >> 2] = i[n + 28 >> 2], 0 | f) : 0;
          }
          function B2(n, f, a, e, o, t) {
            var b = 0, k = 0, s = 0, r = 0, A = 0;
            r = f + 4 | 0, s = n - -64 | 0;
            i: {
              for (; ; ) {
                if (k = i[a + 4 >> 2], !(b = H(16)) || (i[b >> 2] = k, A = _0(i[s >> 2], i[f + 4 >> 2], b), i[b + 4 >> 2] = A, !A))
                  break i;
                if (h[b + 13 | 0] = 0, h[b + 14 | 0] = 0, h[b + 15 | 0] = 0, i[k + 24 >> 2] = b, (0 | e) == (0 | (a = i[a + 8 >> 2])))
                  break;
              }
              if (b = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], a = i[i[b >> 2] + 4 >> 2], o = o || i[a + 8 >> 2], i[a + 16 >> 2] == i[o + 16 >> 2])
                for (s = 0; ; ) {
                  if (e = f, f = b, (0 | (b = o)) != i[(o = a) + 8 >> 2] && (!z(i[i[o + 4 >> 2] + 12 >> 2], o) || !z(i[i[b + 4 >> 2] + 12 >> 2], o)))
                    break i;
                  k = i[e + 8 >> 2] - i[o + 28 >> 2] | 0, i[f + 8 >> 2] = k;
                  f: {
                    a:
                      switch (i[n + 56 >> 2] - 100130 | 0) {
                        case 0:
                          a = 1 & k;
                          break f;
                        case 1:
                          a = (0 | k) != 0;
                          break f;
                        case 2:
                          a = (0 | k) > 0;
                          break f;
                        case 3:
                          a = k >>> 31 | 0;
                          break f;
                        case 4:
                          break a;
                        default:
                          break f;
                      }
                    a = k + 1 >>> 0 > 2;
                  }
                  if (h[f + 12 | 0] = a, h[e + 14 | 0] = 1, s && C0(n, e) && (i[o + 28 >> 2] = i[o + 28 >> 2] + i[b + 28 >> 2], a = i[o + 4 >> 2], i[a + 28 >> 2] = i[a + 28 >> 2] + i[i[b + 4 >> 2] + 28 >> 2], i[i[e >> 2] + 24 >> 2] = 0, h2(i[r >> 2]), T(e), !$(b)))
                    break i;
                  if (r = f + 4 | 0, s = 1, b = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], a = i[i[b >> 2] + 4 >> 2], i[a + 16 >> 2] != i[o + 16 >> 2])
                    break;
                }
              return h[f + 14 | 0] = 1, void (t && k1(n, f));
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function c1(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            if ((0 | (o = i[40 + (n |= 0) >> 2])) != (0 | (k = n + 40 | 0)))
              for (; ; ) {
                if (r = i[o >> 2], !m[o + 21 | 0]) {
                  for (s = i[o + 8 >> 2], n = i[s + 12 >> 2]; ; ) {
                    if (i[n + 20 >> 2] = 0, b = i[n + 12 >> 2], f = i[n + 4 >> 2], !i[f + 20 >> 2]) {
                      if (e = i[n + 16 >> 2], (0 | (a = i[n + 8 >> 2])) != (0 | n))
                        i[e + 8 >> 2] = a, e = i[f + 12 >> 2], t = i[e + 8 >> 2], i[i[a + 4 >> 2] + 12 >> 2] = e, i[i[t + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = t, i[e + 8 >> 2] = a;
                      else {
                        for (f = a = i[e + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | a) != (0 | (f = i[f + 8 >> 2])); )
                          ;
                        f = i[e >> 2], a = i[e + 4 >> 2], i[f + 4 >> 2] = a, i[a >> 2] = f, T(e), f = i[n + 4 >> 2];
                      }
                      if (e = i[f + 16 >> 2], (0 | (a = i[f + 8 >> 2])) != (0 | f))
                        i[e + 8 >> 2] = a, e = i[i[f + 4 >> 2] + 12 >> 2], t = i[e + 8 >> 2], i[i[a + 4 >> 2] + 12 >> 2] = e, i[i[t + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = t, i[e + 8 >> 2] = a;
                      else {
                        for (f = a = i[e + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | a) != (0 | (f = i[f + 8 >> 2])); )
                          ;
                        f = i[e >> 2], a = i[e + 4 >> 2], i[f + 4 >> 2] = a, i[a >> 2] = f, T(e), f = i[n + 4 >> 2];
                      }
                      e = i[(f = n >>> 0 > f >>> 0 ? f : n) >> 2], a = i[i[f + 4 >> 2] >> 2], i[i[e + 4 >> 2] >> 2] = a, i[i[a + 4 >> 2] >> 2] = e, T(f);
                    }
                    if (f = (0 | n) != (0 | s), n = b, !f)
                      break;
                  }
                  n = i[o >> 2], b = i[o + 4 >> 2], i[n + 4 >> 2] = b, i[b >> 2] = n, T(o);
                }
                if ((0 | k) == (0 | (o = r)))
                  break;
              }
          }
          function z(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0;
            if ((0 | (n |= 0)) != (0 | (f |= 0))) {
              if ((0 | (e = i[f + 16 >> 2])) != (0 | (b = i[n + 16 >> 2]))) {
                for (a = o = i[e + 8 >> 2]; i[a + 16 >> 2] = b, (0 | o) != (0 | (a = i[a + 8 >> 2])); )
                  ;
                a = i[e >> 2], o = i[e + 4 >> 2], i[a + 4 >> 2] = o, i[o >> 2] = a, T(e);
              }
              if ((0 | (k = i[n + 20 >> 2])) != (0 | (o = i[f + 20 >> 2]))) {
                for (a = t = i[o + 8 >> 2]; i[a + 20 >> 2] = k, (0 | t) != (0 | (a = i[a + 12 >> 2])); )
                  ;
                a = i[o >> 2], t = i[o + 4 >> 2], i[a + 4 >> 2] = t, i[t >> 2] = a, T(o);
              }
              if (a = i[n + 8 >> 2], t = i[f + 8 >> 2], i[i[t + 4 >> 2] + 12 >> 2] = n, i[i[a + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = a, i[n + 8 >> 2] = t, (0 | e) == (0 | b)) {
                if (!(e = H(40)))
                  return 0;
                for (a = i[n + 16 >> 2], b = i[a + 4 >> 2], i[e + 4 >> 2] = b, i[b >> 2] = e, i[e >> 2] = a, i[a + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 8 >> 2] = f, a = f; i[a + 16 >> 2] = e, (0 | (a = i[a + 8 >> 2])) != (0 | f); )
                  ;
                i[i[n + 16 >> 2] + 8 >> 2] = n;
              }
              if ((0 | o) == (0 | k)) {
                if (!(e = H(24)))
                  return 0;
                for (a = i[n + 20 >> 2], o = i[a + 4 >> 2], i[e + 4 >> 2] = o, i[o >> 2] = e, i[e >> 2] = a, i[a + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 8 >> 2] = f, h[e + 20 | 0] = 0, h[e + 21 | 0] = m[a + 21 | 0], a = f; i[a + 20 >> 2] = e, (0 | (a = i[a + 12 >> 2])) != (0 | f); )
                  ;
                i[i[n + 20 >> 2] + 8 >> 2] = n;
              }
            }
            return 1;
          }
          function s1(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0, s = u(0), r = 0, A = 0, l = u(0);
            if (i[n + 20 >> 2]) {
              e = f, a = i[n >> 2], n = i[a + 8 >> 2] + 1 | 0, i[a + 8 >> 2] = n;
              i: {
                if (!((0 | (f = i[a + 12 >> 2])) >= n << 1)) {
                  if (i[a + 12 >> 2] = f << 1, o = i[a + 4 >> 2], f = A0(t = i[a >> 2], f << 3 | 4), i[a >> 2] = f, !f) {
                    i[a >> 2] = t, o = 2147483647;
                    break i;
                  }
                  if (f = A0(i[a + 4 >> 2], 8 + (i[a + 12 >> 2] << 3) | 0), i[a + 4 >> 2] = f, !f) {
                    i[a + 4 >> 2] = o, o = 2147483647;
                    break i;
                  }
                }
                if (t = i[a + 4 >> 2], o = n, (f = i[a + 16 >> 2]) && (i[a + 16 >> 2] = i[4 + (t + (f << 3) | 0) >> 2], o = f), b = i[a >> 2], i[b + (n << 2) >> 2] = o, i[(k = t + (o << 3) | 0) >> 2] = e, i[k + 4 >> 2] = n, i[a + 20 >> 2]) {
                  f:
                    if (n >>> 0 < 2)
                      f = n;
                    else
                      for (s = c[e + 28 >> 2]; ; ) {
                        if (a = i[((f = n >> 1) << 2) + b >> 2], A = i[(r = t + (a << 3) | 0) >> 2], (l = c[A + 28 >> 2]) < s) {
                          f = n;
                          break f;
                        }
                        if (!(!(c[A + 32 >> 2] <= c[e + 32 >> 2]) | s != l)) {
                          f = n;
                          break f;
                        }
                        if (i[(n << 2) + b >> 2] = a, i[r + 4 >> 2] = n, !((n = f) >>> 0 > 1))
                          break;
                      }
                  i[(f << 2) + b >> 2] = o, i[k + 4 >> 2] = f;
                }
              }
              return o;
            }
            if (e = (a = i[n + 12 >> 2]) + 1 | 0, i[n + 12 >> 2] = e, o = i[n + 4 >> 2], (0 | (t = e)) < (0 | (e = i[n + 16 >> 2])))
              e = o;
            else if (i[n + 16 >> 2] = e << 1, e = A0(o, e << 3), i[n + 4 >> 2] = e, !e)
              return i[n + 4 >> 2] = o, 2147483647;
            return i[(a << 2) + e >> 2] = f, -1 ^ a;
          }
          function a0(n) {
            n |= 0;
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = 0;
            t = H(40), b = H(40);
            i: {
              if (!(e = H(24)) || !t | !b) {
                if (t && T(t), b && T(b), !e)
                  break i;
                return T(e), 0;
              }
              if (!(f = H(64)))
                return 0;
              for (a = i[n + 68 >> 2], o = i[(a = a >>> 0 < (o = n - -64 | 0) >>> 0 ? a : o) + 4 >> 2], k = i[o >> 2], i[f + 32 >> 2] = k, i[i[k + 4 >> 2] >> 2] = f, i[f >> 2] = a, a = o, o = f + 32 | 0, i[a >> 2] = o, i[f + 16 >> 2] = 0, i[f + 20 >> 2] = 0, i[f + 12 >> 2] = o, i[f + 4 >> 2] = o, i[f + 24 >> 2] = 0, i[f + 28 >> 2] = 0, i[f + 48 >> 2] = 0, i[f + 52 >> 2] = 0, i[f + 44 >> 2] = f, i[f + 40 >> 2] = o, i[f + 36 >> 2] = f, i[f + 56 >> 2] = 0, i[f + 60 >> 2] = 0, i[f + 8 >> 2] = f, a = i[n + 4 >> 2], i[t + 4 >> 2] = a, i[a >> 2] = t, i[t + 12 >> 2] = 0, i[t + 8 >> 2] = f, a = f; i[a + 16 >> 2] = t, (0 | (a = i[a + 8 >> 2])) != (0 | f); )
                ;
              for (i[b + 4 >> 2] = t, i[t >> 2] = b, i[b >> 2] = n, i[n + 4 >> 2] = b, i[b + 12 >> 2] = 0, i[b + 8 >> 2] = o, a = o; i[a + 16 >> 2] = b, (0 | o) != (0 | (a = i[a + 8 >> 2])); )
                ;
              for (a = i[n + 44 >> 2], i[e + 4 >> 2] = a, i[a >> 2] = e, i[e >> 2] = n + 40, i[n + 44 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 8 >> 2] = f, h[e + 20 | 0] = 0, h[e + 21 | 0] = m[n + 61 | 0], a = f; i[a + 20 >> 2] = e, (0 | (a = i[a + 12 >> 2])) != (0 | f); )
                ;
            }
            return 0 | f;
          }
          function E0(n, f) {
            var a = 0, e = 0, o = 0, t = 0, b = 0, k = 0;
            i[n + 8 >> 2] = i[283], a = i[282], i[n >> 2] = i[281], i[n + 4 >> 2] = a, a = i[f + 20 >> 2];
            i:
              if (m[a + 21 | 0]) {
                o = f;
                f: {
                  a: {
                    for (; ; ) {
                      if (m[a + 20 | 0])
                        break i;
                      if (h[a + 20 | 0] = 1, i[a + 16 >> 2] = e, o = i[i[o + 12 >> 2] + 4 >> 2], e = i[o + 20 >> 2], m[e + 21 | 0]) {
                        if (m[e + 20 | 0])
                          break a;
                        if (h[e + 20 | 0] = 1, i[e + 16 >> 2] = a, t = t + 2 | 0, o = i[o + 8 >> 2], a = i[o + 20 >> 2], m[a + 21 | 0])
                          continue;
                        break i;
                      }
                      break;
                    }
                    t |= 1;
                    break f;
                  }
                  t |= 1;
                }
                e = a;
              } else
                o = f;
            b = i[f + 4 >> 2], a = i[b + 20 >> 2];
            i:
              if (!(!m[a + 21 | 0] | m[a + 20 | 0])) {
                f: {
                  a: {
                    for (; ; ) {
                      if (h[a + 20 | 0] = 1, i[a + 16 >> 2] = e, f = i[b + 12 >> 2], b = i[f + 4 >> 2], e = i[b + 20 >> 2], m[e + 21 | 0]) {
                        if (m[e + 20 | 0])
                          break a;
                        if (h[e + 20 | 0] = 1, i[e + 16 >> 2] = a, k = k + 2 | 0, f = i[i[b + 8 >> 2] + 4 >> 2], b = i[f + 4 >> 2], a = i[b + 20 >> 2], !m[a + 21 | 0])
                          break i;
                        if (!m[a + 20 | 0])
                          continue;
                        break i;
                      }
                      break;
                    }
                    k |= 1;
                    break f;
                  }
                  k |= 1;
                }
                e = a;
              }
            a = t + k | 0, i[n >> 2] = a;
            i: {
              if (1 & t) {
                if (!(1 & k))
                  break i;
                i[n >> 2] = a - 1, f = f + 8 | 0;
              } else
                f = o + 4 | 0;
              f = i[f >> 2];
            }
            if (i[n + 4 >> 2] = f, e)
              for (; h[e + 20 | 0] = 0, e = i[e + 16 >> 2]; )
                ;
          }
          function C4(n, f, a) {
            f |= 0, a |= 0, (0 | (a = i[1716 + (n |= 0) >> 2])) == 3 ? I[i[n + 88 >> 2]](5) : I[0 | a](5, i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2];
            i:
              if (m[a + 21 | 0])
                for (; ; ) {
                  if (m[a + 20 | 0] || (h[a + 20 | 0] = 1, f = i[i[f + 12 >> 2] + 4 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !m[a + 21 | 0] | m[a + 20 | 0]))
                    break i;
                  if (h[a + 20 | 0] = 1, f = i[f + 8 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !m[a + 21 | 0])
                    break;
                }
            (0 | (f = i[n + 1728 >> 2])) == 6 ? I[i[n + 100 >> 2]]() : I[0 | f](i[n + 1896 >> 2]);
          }
          function C2(n, f) {
            f |= 0;
            var a = 0;
            if ((0 | (a = i[(n |= 0) >> 2])) != (0 | f))
              for (; ; ) {
                i:
                  if (f >>> 0 > a >>> 0) {
                    f:
                      switch (0 | a) {
                        case 0:
                          (0 | (a = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100151) : I[0 | a](100151, i[n + 1896 >> 2]), i[n >> 2] && C2(n, 0), i[n + 112 >> 2] = 0, a = 1, i[n >> 2] = 1, h[n + 108 | 0] = 0, i[n + 1896 >> 2] = 0, i[n + 8 >> 2] = 0;
                          break i;
                        case 1:
                          break f;
                        default:
                          break i;
                      }
                    if ((0 | (a = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100152) : I[0 | a](100152, i[n + 1896 >> 2]), i[n >> 2] != 1 && C2(n, 1), i[n >> 2] = 2, i[n + 4 >> 2] = 0, a = 2, i[n + 112 >> 2] < 1)
                      break i;
                    h[n + 108 | 0] = 1;
                  } else {
                    f:
                      switch (a - 1 | 0) {
                        case 1:
                          (0 | (a = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100154) : I[0 | a](100154, i[n + 1896 >> 2]), i[n >> 2] != 2 && C2(n, 2), a = 1, i[n >> 2] = 1;
                          break i;
                        case 0:
                          break f;
                        default:
                          break i;
                      }
                    (0 | (a = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100153) : I[0 | a](100153, i[n + 1896 >> 2]), (a = i[n + 8 >> 2]) && M0(a), a = 0, i[n + 8 >> 2] = 0, i[n >> 2] = 0, i[n + 4 >> 2] = 0;
                  }
                if ((0 | f) == (0 | a))
                  break;
              }
          }
          function r1(n, f, a) {
            var e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0, A = 0, l = 0;
            i: {
              f: {
                a: {
                  n: {
                    e: {
                      b: {
                        o: {
                          c: {
                            u: {
                              t: {
                                if (o = f, f) {
                                  if (!(e = a))
                                    break t;
                                  break u;
                                }
                                n = (n >>> 0) / (a >>> 0) | 0, l2 = 0;
                                break i;
                              }
                              if (!n)
                                break c;
                              break o;
                            }
                            if (!(e - 1 & e))
                              break b;
                            s = 0 - (k = (s0(e) + 33 | 0) - s0(o) | 0) | 0;
                            break n;
                          }
                          n = (o >>> 0) / 0 | 0, l2 = 0;
                          break i;
                        }
                        if ((e = 32 - s0(o) | 0) >>> 0 < 31)
                          break e;
                        break a;
                      }
                      if ((0 | e) == 1)
                        break f;
                      a = 31 & (e = e ? 31 - s0(e - 1 ^ e) | 0 : 32), (63 & e) >>> 0 >= 32 ? (o = 0, n = f >>> a | 0) : (o = f >>> a | 0, n = ((1 << a) - 1 & f) << 32 - a | n >>> a), l2 = o;
                      break i;
                    }
                    k = e + 1 | 0, s = 63 - e | 0;
                  }
                  if (e = f, t = 31 & (o = 63 & k), o >>> 0 >= 32 ? (o = 0, t = e >>> t | 0) : (o = e >>> t | 0, t = ((1 << t) - 1 & e) << 32 - t | n >>> t), e = 31 & (s &= 63), s >>> 0 >= 32 ? (f = n << e, n = 0) : (f = (1 << e) - 1 & n >>> 32 - e | f << e, n <<= e), k)
                    for (s = (0 | (e = a - 1 | 0)) != -1 ? 0 : -1; t = (r = b = t << 1 | f >>> 31) - (A = a & (b = s - ((o = o << 1 | t >>> 31) + (e >>> 0 < b >>> 0) | 0) >> 31)) | 0, o = o - (r >>> 0 < A >>> 0) | 0, f = f << 1 | n >>> 31, n = l | n << 1, l = b &= 1, k = k - 1 | 0; )
                      ;
                  l2 = f << 1 | n >>> 31, n = b | n << 1;
                  break i;
                }
                n = 0, f = 0;
              }
              l2 = f;
            }
            return n;
          }
          function E4(n, f, a) {
            f |= 0, a |= 0;
            var e = 0, o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            B = o = B - 32 | 0, t = i[28 + (n |= 0) >> 2], i[o + 16 >> 2] = t, e = i[n + 20 >> 2], i[o + 28 >> 2] = a, i[o + 24 >> 2] = f, f = e - t | 0, i[o + 20 >> 2] = f, t = f + a | 0, r = 2, f = o + 16 | 0;
            i: {
              f: {
                (e = 0 | e1(i[n + 60 >> 2], o + 16 | 0, 2, o + 12 | 0)) ? (i[613] = e, e = -1) : e = 0;
                a: {
                  if (!e)
                    for (; ; ) {
                      if ((0 | (e = i[o + 12 >> 2])) == (0 | t))
                        break a;
                      if ((0 | e) <= -1)
                        break f;
                      if (b = e - ((k = (b = i[f + 4 >> 2]) >>> 0 < e >>> 0) ? b : 0) | 0, i[(s = (k << 3) + f | 0) >> 2] = b + i[s >> 2], i[(s = (k ? 12 : 4) + f | 0) >> 2] = i[s >> 2] - b, t = t - e | 0, f = k ? f + 8 | 0 : f, r = r - k | 0, (e = 0 | e1(i[n + 60 >> 2], 0 | f, 0 | r, o + 12 | 0)) ? (i[613] = e, e = -1) : e = 0, e)
                        break;
                    }
                  if ((0 | t) != -1)
                    break f;
                }
                f = i[n + 44 >> 2], i[n + 28 >> 2] = f, i[n + 20 >> 2] = f, i[n + 16 >> 2] = f + i[n + 48 >> 2], n = a;
                break i;
              }
              i[n + 28 >> 2] = 0, i[n + 16 >> 2] = 0, i[n + 20 >> 2] = 0, i[n >> 2] = 32 | i[n >> 2], n = 0, (0 | r) != 2 && (n = a - i[f + 4 >> 2] | 0);
            }
            return B = o + 32 | 0, 0 | n;
          }
          function A1(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = 0, k = u(0), s = 0, r = u(0), A = 0, l = 0, v = 0, p = 0, w = 0, g = 0;
            if (o = i[n + 4 >> 2], a = i[n >> 2], e = i[a + 4 >> 2], w = i[(f = o + (e << 3) | 0) >> 2], !((0 | (t = i[n + 8 >> 2])) < 1) && (A = i[(t << 2) + a >> 2], i[a + 4 >> 2] = A, i[4 + (l = (A << 3) + o | 0) >> 2] = 1, i[f >> 2] = 0, i[f + 4 >> 2] = i[n + 16 >> 2], v = t - 1 | 0, i[n + 8 >> 2] = v, i[n + 16 >> 2] = e, (0 | t) != 1)) {
              for (g = (A << 3) + o | 0, f = 1; (0 | v) <= (0 | (n = f << 1)) || (b = i[(i[((e = 1 | n) << 2) + a >> 2] << 3) + o >> 2], k = c[b + 28 >> 2], s = i[(i[(n << 2) + a >> 2] << 3) + o >> 2], r = c[s + 28 >> 2], !(c[b + 32 >> 2] <= c[s + 32 >> 2]) | k != r && !(k < r) || (n = e)), !((0 | n) >= (0 | t) || (e = i[g >> 2], k = c[e + 28 >> 2], b = i[(n << 2) + a >> 2], p = i[(s = (b << 3) + o | 0) >> 2], k < (r = c[p + 28 >> 2]) | (c[e + 32 >> 2] <= c[p + 32 >> 2] ? k == r : 0))); )
                i[(f << 2) + a >> 2] = b, i[s + 4 >> 2] = f, f = n;
              i[(f << 2) + a >> 2] = A, i[l + 4 >> 2] = f;
            }
            return w;
          }
          function R4(n, f, a) {
            f |= 0, a |= 0, (0 | (a = i[1716 + (n |= 0) >> 2])) == 3 ? I[i[n + 88 >> 2]](6) : I[0 | a](6, i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2];
            i:
              if (m[a + 21 | 0])
                for (; ; ) {
                  if (m[a + 20 | 0])
                    break i;
                  if (h[a + 20 | 0] = 1, f = i[f + 8 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : I[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !m[a + 21 | 0])
                    break;
                }
            (0 | (f = i[n + 1728 >> 2])) == 6 ? I[i[n + 100 >> 2]]() : I[0 | f](i[n + 1896 >> 2]);
          }
          function l1(n, f, a) {
            var e = 0, o = 0;
            if (a && (h[(e = n + a | 0) - 1 | 0] = f, h[0 | n] = f, !(a >>> 0 < 3 || (h[e - 2 | 0] = f, h[n + 1 | 0] = f, h[e - 3 | 0] = f, h[n + 2 | 0] = f, a >>> 0 < 7 || (h[e - 4 | 0] = f, h[n + 3 | 0] = f, a >>> 0 < 9 || (e = (e = n) + (n = 0 - n & 3) | 0, o = W(255 & f, 16843009), i[e >> 2] = o, i[(f = (n = a - n & -4) + e | 0) - 4 >> 2] = o, n >>> 0 < 9 || (i[e + 8 >> 2] = o, i[e + 4 >> 2] = o, i[f - 8 >> 2] = o, i[f - 12 >> 2] = o, n >>> 0 < 25 || (i[e + 24 >> 2] = o, i[e + 20 >> 2] = o, i[e + 16 >> 2] = o, i[e + 12 >> 2] = o, i[f - 16 >> 2] = o, i[f - 20 >> 2] = o, i[f - 24 >> 2] = o, i[f - 28 >> 2] = o, (a = n - (f = 4 & e | 24) | 0) >>> 0 < 32))))))))
              for (o = S0(o, 0, 1, 1), n = l2, f = f + e | 0; i[f + 24 >> 2] = o, e = n, i[f + 28 >> 2] = e, i[f + 16 >> 2] = o, i[f + 20 >> 2] = e, i[f + 8 >> 2] = o, i[f + 12 >> 2] = e, i[f >> 2] = o, i[f + 4 >> 2] = e, f = f + 32 | 0, (a = a - 32 | 0) >>> 0 > 31; )
                ;
          }
          function v1(n, f, a) {
            i:
              if (!(f >>> 0 > 20)) {
                f:
                  switch (f - 9 | 0) {
                    case 0:
                      return f = i[a >> 2], i[a >> 2] = f + 4, void (i[n >> 2] = i[f >> 2]);
                    case 1:
                      return f = i[a >> 2], i[a >> 2] = f + 4, f = i[f >> 2], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
                    case 2:
                      return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = i[f >> 2], void (i[n + 4 >> 2] = 0);
                    case 3:
                      return f = i[a >> 2] + 7 & -8, i[a >> 2] = f + 8, a = i[f + 4 >> 2], i[n >> 2] = i[f >> 2], void (i[n + 4 >> 2] = a);
                    case 4:
                      return f = i[a >> 2], i[a >> 2] = f + 4, f = s2[f >> 1], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
                    case 5:
                      return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = L2[f >> 1], void (i[n + 4 >> 2] = 0);
                    case 6:
                      return f = i[a >> 2], i[a >> 2] = f + 4, f = h[0 | f], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
                    case 7:
                      return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = m[0 | f], void (i[n + 4 >> 2] = 0);
                    case 8:
                      return f = i[a >> 2] + 7 & -8, i[a >> 2] = f + 8, void (X[n >> 3] = X[f >> 3]);
                    case 9:
                      break f;
                    default:
                      break i;
                  }
                I[0](n, a);
              }
          }
          function G(n, f, a) {
            var e = u(0), o = u(0), t = 0, b = 0, k = u(0), s = u(0), r = 0, A = u(0), l = u(0);
            B = b = B + -64 | 0, r = (e = c[f + 28 >> 2]) > (o = c[n + 28 >> 2]);
            i: {
              f: {
                if (!(!(c[n + 32 >> 2] <= c[f + 32 >> 2]) | e != o) || r) {
                  if ((k = c[a + 28 >> 2]) > e | (c[f + 32 >> 2] <= c[a + 32 >> 2] ? e == k : 0))
                    break i;
                  if (t = 1, r)
                    break f;
                }
                t = 0, e == o && (t = c[n + 32 >> 2] <= c[f + 32 >> 2]);
              }
              r = t, t = 1, (k = c[a + 28 >> 2]) > e || (t = 0, e == k && (t = c[f + 32 >> 2] <= c[a + 32 >> 2])), s = c[n + 32 >> 2], A = c[f + 32 >> 2], l = c[a + 32 >> 2], X[b + 40 >> 3] = k, X[b + 24 >> 3] = e, X[b + 48 >> 3] = l, X[b + 32 >> 3] = A, X[b + 16 >> 3] = s, X[b + 8 >> 3] = o, i[b + 4 >> 2] = t, i[b >> 2] = r, E1(1092, b), k = c[a + 28 >> 2], o = c[n + 28 >> 2], e = c[f + 28 >> 2];
            }
            return s = u(0), B = b - -64 | 0, o = u(e - o), e = u(k - e), u(o + e) > u(0) && (s = o, o = c[f + 32 >> 2], s = u(u(s * u(o - c[a + 32 >> 2])) + u(e * u(o - c[n + 32 >> 2])))), s;
          }
          function n0(n, f, a) {
            var e = 0, o = 0, t = 0, b = 0;
            e = i[f >> 2];
            i: {
              if ((0 | f) != (0 | a))
                for (; ; ) {
                  if (h[f + 15 | 0] = 0, b = i[f + 4 >> 2], t = i[i[b + 8 >> 2] >> 2], o = i[t >> 2], i[o + 16 >> 2] != i[e + 16 >> 2]) {
                    if (!m[t + 15 | 0])
                      return n = m[f + 12 | 0], a = i[e + 20 >> 2], i[a + 8 >> 2] = e, h[a + 21 | 0] = n, i[e + 24 >> 2] = 0, h2(b), T(f), e;
                    if (!(o = v2(i[i[e + 8 >> 2] + 4 >> 2], i[o + 4 >> 2])) || !$(i[t >> 2]))
                      break i;
                    i[t >> 2] = o, h[t + 15 | 0] = 0, i[o + 24 >> 2] = t;
                  }
                  if (i[e + 8 >> 2] != (0 | o) && (!z(i[i[o + 4 >> 2] + 12 >> 2], o) || !z(e, o)))
                    break i;
                  if (o = m[f + 12 | 0], e = i[f >> 2], b = i[e + 20 >> 2], i[b + 8 >> 2] = e, h[b + 21 | 0] = o, i[e + 24 >> 2] = 0, h2(i[f + 4 >> 2]), T(f), e = i[t >> 2], (0 | a) == (0 | (f = t)))
                    break;
                }
              return e;
            }
            b2(n + 1740 | 0, 1), t2();
          }
          function q2(n, f, a) {
            switch (f - 100100 | 0) {
              case 0:
                return void (i[n + 88 >> 2] = a || 15);
              case 6:
                return void (i[n + 1716 >> 2] = a || 3);
              case 4:
                return h[n + 80 | 0] = (0 | a) != 0, void (i[n + 92 >> 2] = a || 14);
              case 10:
                return h[n + 80 | 0] = (0 | a) != 0, void (i[n + 1720 >> 2] = a || 4);
              case 1:
                return void (i[n + 96 >> 2] = a || 13);
              case 7:
                return void (i[n + 1724 >> 2] = a || 5);
              case 2:
                return void (i[n + 100 >> 2] = a || 12);
              case 8:
                return void (i[n + 1728 >> 2] = a || 6);
              case 3:
                return void (i[n + 12 >> 2] = a || 18);
              case 9:
                return void (i[n + 1732 >> 2] = a || 11);
              case 5:
                return void (i[n + 76 >> 2] = a || 17);
              case 11:
                return void (i[n + 1736 >> 2] = a || 8);
              case 12:
                return void (i[n + 104 >> 2] = a || 16);
            }
            (0 | (f = i[n + 1732 >> 2])) == 11 ? I[i[n + 12 >> 2]](100900) : I[0 | f](100900, i[n + 1896 >> 2]);
          }
          function Z(n, f, a) {
            var e = 0, o = 0, t = 0;
            if (!(32 & m[0 | n]))
              i: {
                o = f, e = a;
                f: {
                  if (!(n = i[(f = n) + 16 >> 2])) {
                    if (n = m[f + 74 | 0], h[f + 74 | 0] = n - 1 | n, 8 & (n = i[f >> 2]) ? (i[f >> 2] = 32 | n, n = -1) : (i[f + 4 >> 2] = 0, i[f + 8 >> 2] = 0, n = i[f + 44 >> 2], i[f + 28 >> 2] = n, i[f + 20 >> 2] = n, i[f + 16 >> 2] = n + i[f + 48 >> 2], n = 0), n)
                      break f;
                    n = i[f + 16 >> 2];
                  }
                  if (n - (t = i[f + 20 >> 2]) >>> 0 < e >>> 0) {
                    I[i[f + 36 >> 2]](f, o, a);
                    break i;
                  }
                  a:
                    if (!(h[f + 75 | 0] < 0)) {
                      for (n = a; ; ) {
                        if (e = n, !n)
                          break a;
                        if (m[o + (n = e - 1 | 0) | 0] == 10)
                          break;
                      }
                      if (I[i[f + 36 >> 2]](f, o, e) >>> 0 < e >>> 0)
                        break f;
                      o = e + o | 0, a = a - e | 0, t = i[f + 20 >> 2];
                    }
                  u1(t, o, a), i[f + 20 >> 2] = i[f + 20 >> 2] + a;
                }
              }
          }
          function d1(n, f, a, e) {
            var o = 0, t = 0;
            B = o = B - 208 | 0, i[o + 204 >> 2] = a, l1(o + 160 | 0, 0, 40), i[o + 200 >> 2] = i[o + 204 >> 2], (0 | g0(0, f, o + 200 | 0, o + 80 | 0, o + 160 | 0, e)) < 0 || (i[n + 76 >> 2], a = i[n >> 2], h[n + 74 | 0] <= 0 && (i[n >> 2] = -33 & a), t = 32 & a, i[n + 48 >> 2] ? g0(n, f, o + 200 | 0, o + 80 | 0, o + 160 | 0, e) : (i[n + 48 >> 2] = 80, i[n + 16 >> 2] = o + 80, i[n + 28 >> 2] = o, i[n + 20 >> 2] = o, a = i[n + 44 >> 2], i[n + 44 >> 2] = o, g0(n, f, o + 200 | 0, o + 80 | 0, o + 160 | 0, e), a && (I[i[n + 36 >> 2]](n, 0, 0), i[n + 48 >> 2] = 0, i[n + 44 >> 2] = a, i[n + 28 >> 2] = 0, i[n + 16 >> 2] = 0, i[n + 20 >> 2] = 0)), i[n >> 2] = i[n >> 2] | t), B = o + 208 | 0;
          }
          function I4(n, f) {
            n |= 0;
            var a = 0, e = 0, o = 0;
            if ((0 | (a = i[40 + (f |= 0) >> 2])) != (0 | (e = f + 40 | 0)))
              for (; ; ) {
                if (m[a + 21 | 0]) {
                  for ((0 | (f = i[n + 1716 >> 2])) == 3 ? I[i[n + 88 >> 2]](2) : I[0 | f](2, i[n + 1896 >> 2]), f = i[a + 8 >> 2]; (0 | (o = i[n + 1724 >> 2])) == 5 ? I[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : I[0 | o](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (f = i[f + 12 >> 2])) != i[a + 8 >> 2]; )
                    ;
                  (0 | (f = i[n + 1728 >> 2])) == 6 ? I[i[n + 100 >> 2]]() : I[0 | f](i[n + 1896 >> 2]);
                }
                if ((0 | e) == (0 | (a = i[a >> 2])))
                  break;
              }
          }
          function h1(n, f) {
            if (!n)
              return 0;
            i: {
              f: {
                if (n) {
                  if (f >>> 0 <= 127)
                    break f;
                  if (i[i[493] >> 2]) {
                    if (f >>> 0 <= 2047) {
                      h[n + 1 | 0] = 63 & f | 128, h[0 | n] = f >>> 6 | 192, n = 2;
                      break i;
                    }
                    if (!((-8192 & f) != 57344 && f >>> 0 >= 55296)) {
                      h[n + 2 | 0] = 63 & f | 128, h[0 | n] = f >>> 12 | 224, h[n + 1 | 0] = f >>> 6 & 63 | 128, n = 3;
                      break i;
                    }
                    if (f - 65536 >>> 0 <= 1048575) {
                      h[n + 3 | 0] = 63 & f | 128, h[0 | n] = f >>> 18 | 240, h[n + 2 | 0] = f >>> 6 & 63 | 128, h[n + 1 | 0] = f >>> 12 & 63 | 128, n = 4;
                      break i;
                    }
                  } else if ((-128 & f) == 57216)
                    break f;
                  i[613] = 25, n = -1;
                } else
                  n = 1;
                break i;
              }
              h[0 | n] = f, n = 1;
            }
            return n;
          }
          function R0() {
            var n = 0, f = 0, a = 0;
            return (n = H(128)) ? (i[n + 8 >> 2] = 0, i[n + 12 >> 2] = 0, f = n + 40 | 0, i[n + 44 >> 2] = f, i[n + 48 >> 2] = 0, i[n + 52 >> 2] = 0, i[n + 40 >> 2] = f, s2[n + 54 >> 1] = 0, s2[n + 56 >> 1] = 0, s2[n + 58 >> 1] = 0, s2[n + 60 >> 1] = 0, i[n + 72 >> 2] = 0, i[n + 76 >> 2] = 0, f = n + 96 | 0, i[n + 68 >> 2] = f, a = n - -64 | 0, i[n + 64 >> 2] = a, i[n + 80 >> 2] = 0, i[n + 84 >> 2] = 0, i[n + 88 >> 2] = 0, i[n + 92 >> 2] = 0, i[n + 104 >> 2] = 0, i[n + 108 >> 2] = 0, i[n + 100 >> 2] = a, i[n + 96 >> 2] = f, i[n + 112 >> 2] = 0, i[n + 116 >> 2] = 0, i[n + 120 >> 2] = 0, i[n + 124 >> 2] = 0, i[n >> 2] = n, i[n + 4 >> 2] = n, 0 | n) : 0;
          }
          function M4(n, f, a) {
            n |= 0, f |= 0, a |= 0;
            var e = 0, o = 0, t = u(0), b = u(0);
            return a = i[a >> 2], e = i[i[a + 4 >> 2] + 16 >> 2], f = i[f >> 2], (0 | (o = i[i[f + 4 >> 2] + 16 >> 2])) == (0 | (n = i[n + 72 >> 2])) ? (0 | n) == (0 | e) ? (f = i[f + 16 >> 2], t = c[f + 28 >> 2], a = i[a + 16 >> 2], b = c[a + 28 >> 2], !(!(c[f + 32 >> 2] <= c[a + 32 >> 2]) | t != b) || t < b ? G(n, f, a) <= u(0) | 0 : G(n, a, f) >= u(0) | 0) : G(e, n, i[a + 16 >> 2]) <= u(0) | 0 : (f = i[f + 16 >> 2], (0 | n) == (0 | e) ? G(o, n, f) >= u(0) | 0 : g1(o, n, f) >= g1(i[i[a + 4 >> 2] + 16 >> 2], n, i[a + 16 >> 2]) | 0);
          }
          function I0(n) {
            var f = 0, a = 0, e = 0, o = 0, t = 0, b = u(0), k = u(0), s = 0;
            if (!(f = i[n + 12 >> 2]))
              return A1(i[n >> 2]);
            if (t = i[n + 8 >> 2], e = i[i[(t + (f << 2) | 0) - 4 >> 2] >> 2], a = i[n >> 2], i[a + 8 >> 2] && (o = i[i[a + 4 >> 2] + (i[i[a >> 2] + 4 >> 2] << 3) >> 2], b = c[o + 28 >> 2], k = c[e + 28 >> 2], !(!(c[o + 32 >> 2] <= c[e + 32 >> 2]) | b != k) || b < k))
              return A1(a);
            for (a = ((0 | f) < 1 ? f : 1) - 1 | 0; ; ) {
              if ((0 | f) < 2)
                return i[n + 12 >> 2] = a, e;
              if (o = f << 2, f = s = f - 1 | 0, i[i[(o + t | 0) - 8 >> 2] >> 2])
                break;
            }
            return i[n + 12 >> 2] = s, e;
          }
          function _4(n, f, a) {
            f |= 0, a |= 0;
            var e = 0, o = 0, t = 0, b = 0;
            t = 1;
            i:
              if ((0 | (e = i[64 + (n |= 0) >> 2])) != (0 | (o = n - -64 | 0))) {
                if (b = 0 - f | 0, !a) {
                  for (; ; )
                    if (n = m[i[e + 20 >> 2] + 21 | 0], i[e + 28 >> 2] = (0 | n) == m[i[i[e + 4 >> 2] + 20 >> 2] + 21 | 0] ? 0 : n ? f : b, (0 | o) == (0 | (e = i[e >> 2])))
                      break i;
                }
                for (; ; ) {
                  if (n = i[e >> 2], (0 | (a = m[i[e + 20 >> 2] + 21 | 0])) == m[i[i[e + 4 >> 2] + 20 >> 2] + 21 | 0]) {
                    if (!$(e)) {
                      t = 0;
                      break i;
                    }
                  } else
                    i[e + 28 >> 2] = a ? f : b;
                  if ((0 | o) == (0 | (e = n)))
                    break;
                }
              }
            return 0 | t;
          }
          function p1(n, f) {
            var a = 0, e = 0, o = 0;
            (a = H(16)) && (o = a0(i[n + 8 >> 2])) && (e = i[o + 16 >> 2], c[e + 32 >> 2] = f, i[e + 28 >> 2] = 2112929218, e = i[i[o + 4 >> 2] + 16 >> 2], c[e + 32 >> 2] = f, i[e + 28 >> 2] = -34554430, i[n + 72 >> 2] = e, h[a + 15 | 0] = 0, h[a + 12 | 0] = 0, i[a + 8 >> 2] = 0, i[a >> 2] = o, h[a + 13 | 0] = 1, h[a + 14 | 0] = 0, e = a, a = _0(o = i[n + 64 >> 2], o, a), i[e + 4 >> 2] = a, a) || (b2(n + 1740 | 0, 1), t2());
          }
          function M0(n) {
            var f = 0, a = 0, e = 0;
            if ((0 | (f = i[40 + (n |= 0) >> 2])) != (0 | (a = n + 40 | 0)))
              for (; e = i[f >> 2], T(f), (0 | a) != (0 | (f = e)); )
                ;
            if ((0 | (f = i[n >> 2])) != (0 | n))
              for (; e = i[f >> 2], T(f), (0 | (f = e)) != (0 | n); )
                ;
            if ((0 | (f = i[n + 64 >> 2])) != (0 | (a = n - -64 | 0)))
              for (; e = i[f >> 2], T(f), (0 | a) != (0 | (f = e)); )
                ;
            T(n);
          }
          function w1(n) {
            var f = 0, a = u(0), e = u(0);
            if (!(f = i[n + 12 >> 2]))
              return n = i[n >> 2], i[i[n + 4 >> 2] + (i[i[n >> 2] + 4 >> 2] << 3) >> 2];
            f = i[i[(i[n + 8 >> 2] + (f << 2) | 0) - 4 >> 2] >> 2], n = i[n >> 2];
            i: {
              if (i[n + 8 >> 2] && (n = i[i[n + 4 >> 2] + (i[i[n >> 2] + 4 >> 2] << 3) >> 2], (a = c[n + 28 >> 2]) < (e = c[f + 28 >> 2]) || a == e && c[n + 32 >> 2] <= c[f + 32 >> 2]))
                break i;
              n = f;
            }
            return n;
          }
          function S4(n, f, a, e) {
            n |= 0, f |= 0, a |= 0, e |= 0, a = 0;
            i: {
              if (f = i[520]) {
                if (!((a = i[f >> 2]) >>> 0 < 100001)) {
                  f = H(12);
                  break i;
                }
              } else
                f = H(1200008), i[f + 4 >> 2] = 12, i[f >> 2] = 0, i[520] = f;
              i[f >> 2] = a + 1, f = 8 + (W(a, 12) + f | 0) | 0;
            }
            c[f >> 2] = c[n >> 2], c[f + 4 >> 2] = c[n + 4 >> 2], c[f + 8 >> 2] = c[n + 8 >> 2], i[e >> 2] = f;
          }
          function z2(n, f, a) {
            var e = 0, o = 0, t = 0;
            if (f >>> 0 < 1)
              e = n;
            else
              for (; e = r1(n, f, 10), t = o = l2, o = S0(e, o, 10, 0), h[0 | (a = a - 1 | 0)] = n - o | 48, o = f >>> 0 > 9, n = e, f = t, o; )
                ;
            if (e)
              for (; n = (e >>> 0) / 10 | 0, h[0 | (a = a - 1 | 0)] = e - W(n, 10) | 48, f = e >>> 0 > 9, e = n, f; )
                ;
            return a;
          }
          function m1(n, f, a, e) {
            var o = 0, t = 0, b = 0;
            if (t = i[610] + 1 | 0, i[610] = t, i[n >> 2] = t, e)
              for (; ; ) {
                if (!i[(b = (o << 3) + a | 0) >> 2])
                  return i[b >> 2] = t, i[4 + (n = (o << 3) + a | 0) >> 2] = f, i[n + 8 >> 2] = 0, K(0 | e), a;
                if ((0 | (o = o + 1 | 0)) == (0 | e))
                  break;
              }
            return o = n, n = e << 1, f = m1(o, f, A0(a, e << 4 | 8), n), K(0 | n), f;
          }
          function y1(n, f) {
            var a = 0, e = 0, o = 0;
            if (y0(+n), a = 0 | W2(1), e = 0 | W2(0), o = a, (0 | (a = a >>> 20 & 2047)) != 2047) {
              if (!a)
                return a = f, n == 0 ? f = 0 : (n = y1(18446744073709552e3 * n, f), f = i[f >> 2] + -64 | 0), i[a >> 2] = f, n;
              i[f >> 2] = a - 1022, a1(0, 0 | e), a1(1, -2146435073 & o | 1071644672), n = +k4();
            }
            return n;
          }
          function g1(n, f, a) {
            var e = u(0), o = u(0), t = u(0), b = u(0), k = u(0);
            return e = c[f + 28 >> 2], o = u(e - c[n + 28 >> 2]), e = u(c[a + 28 >> 2] - e), (t = u(o + e)) > u(0) ? (k = c[f + 32 >> 2], b = c[((f = e > o) ? n : a) + 32 >> 2], e = u(u(k - b) + u(u((f ? o : e) / t) * u(b - c[(f ? a : n) + 32 >> 2])))) : e = u(0), e;
          }
          function _0(n, f, a) {
            for (var e = 0; f = i[f + 8 >> 2], (e = i[f >> 2]) && !(0 | I[i[n + 16 >> 2]](i[n + 12 >> 2], e, a)); )
              ;
            return (n = H(12)) ? (i[n >> 2] = a, i[n + 4 >> 2] = i[f + 4 >> 2], i[i[f + 4 >> 2] + 8 >> 2] = n, i[n + 8 >> 2] = f, i[f + 4 >> 2] = n, n) : 0;
          }
          function S0(n, f, a, e) {
            var o = 0, t = 0, b = 0, k = 0, s = 0, r = 0;
            return r = W(o = a >>> 16 | 0, t = n >>> 16 | 0), o = (65535 & (t = ((s = W(b = 65535 & a, k = 65535 & n)) >>> 16 | 0) + W(t, b) | 0)) + W(o, k) | 0, l2 = (W(f, a) + r | 0) + W(n, e) + (t >>> 16) + (o >>> 16) | 0, 65535 & s | o << 16;
          }
          function i2(n, f, a, e, o) {
            var t = 0;
            if (B = t = B - 256 | 0, !(73728 & o | (0 | a) <= (0 | e))) {
              if (l1(t, 255 & f, (e = (a = a - e | 0) >>> 0 < 256) ? a : 256), !e)
                for (; Z(n, t, 256), (a = a - 256 | 0) >>> 0 > 255; )
                  ;
              Z(n, t, a);
            }
            B = t + 256 | 0;
          }
          function J(n, f, a) {
            var e = 0, o = 0;
            i:
              if (a)
                for (; ; ) {
                  if (!(o = i[(e << 3) + f >> 2]))
                    break i;
                  if ((0 | n) == (0 | o))
                    return i[4 + ((e << 3) + f | 0) >> 2];
                  if ((0 | (e = e + 1 | 0)) == (0 | a))
                    break;
                }
            return 0;
          }
          function T2(n) {
            var f = 0, a = 0;
            return (n = (f = i[412]) + (a = n + 3 & -4) | 0) >>> 0 <= f >>> 0 && a || n >>> 0 > R1() << 16 >>> 0 && !(0 | s4(0 | n)) ? (i[613] = 48, -1) : (i[412] = n, f);
          }
          function C1(n) {
            var f = 0, a = 0, e = 0;
            if (h[i[n >> 2]] - 48 >>> 0 < 10)
              for (; f = i[n >> 2], e = h[0 | f], i[n >> 2] = f + 1, a = (W(a, 10) + e | 0) - 48 | 0, h[f + 1 | 0] - 48 >>> 0 < 10; )
                ;
            return a;
          }
          function L4(n, f) {
            n |= 0;
            var a = 0, e = 0;
            (0 | (a = i[4 + (f |= 0) >> 2])) <= 99998 && (e = i[f >> 2] + (W(i[f + 8 >> 2], a) << 2) | 0, c[e >> 2] = c[n >> 2], c[e + 4 >> 2] = c[n + 4 >> 2], i[f + 4 >> 2] = a + 1);
          }
          function P4(n, f) {
            n |= 0, f |= 0;
            var a = u(0), e = u(0);
            if ((a = c[n + 28 >> 2]) < (e = c[f + 28 >> 2]))
              n = 1;
            else {
              if (a != e)
                return 0;
              n = c[n + 32 >> 2] <= c[f + 32 >> 2];
            }
            return 0 | n;
          }
          function L0(n) {
            var f = 0;
            (f = i[n >> 2]) && (T(i[f + 4 >> 2]), T(i[f >> 2]), T(f)), (f = i[n + 8 >> 2]) && T(f), (f = i[n + 4 >> 2]) && T(f), T(n);
          }
          function x4(n) {
            n |= 0;
            var f = 0;
            B = f = B - 16 | 0, i[f >> 2] = n, B = n = B - 16 | 0, i[n + 12 >> 2] = f, d1(i[288], 1078, f, 0), B = n + 16 | 0, B = f + 16 | 0;
          }
          function B4(n, f, a) {
            n |= 0, f = i[20 + (f |= 0) >> 2], i[f + 16 >> 2] = i[n + 84 >> 2], i[n + 84 >> 2] = f, h[f + 20 | 0] = 1;
          }
          function h2(n) {
            var f = 0;
            f = i[n + 4 >> 2], i[f + 8 >> 2] = i[n + 8 >> 2], i[i[n + 8 >> 2] + 4 >> 2] = f, T(n);
          }
          function E1(n, f) {
            var a = 0;
            B = a = B - 16 | 0, i[a + 12 >> 2] = f, d1(i[288], n, f, 43), B = a + 16 | 0;
          }
          function f2(n) {
            var f = 0;
            return (-1 >>> (f = 31 & n) & -2) << f | (-1 << (n = 0 - n & 31) & -2) >>> n;
          }
          function b2(n, f) {
            n |= 0, f |= 0, i[611] || (i[612] = f, i[611] = n), r4();
          }
          function T4(n, f) {
            n |= 0, f |= 0, i[611] || (i[612] = f, i[611] = n);
          }
          function U4(n, f, a, e) {
            return l2 = 0, 0;
          }
          function j4(n, f, a, e, o) {
          }
          function F4(n, f, a, e) {
          }
          function O4(n) {
            return 0;
          }
          function l0(n, f) {
          }
          function D4() {
            return 0 | B;
          }
          function H4(n) {
            B = n |= 0;
          }
          function E2(n) {
          }
          function P0() {
          }
          S = m, a2();
          var I = L([null, B4, R4, l0, l0, l0, E2, C4, j4, P4, M4, l0, P0, E2, E2, E2, E2, F4, E2, C2, y4, R0, a0, n2, z, t1, b2, p4, _4, g4, I4, m4, c1, M0, L4, E2, P0, S4, x4, E2, O4, E4, U4, w4]);
          function R1() {
            return N.byteLength / 65536 | 0;
          }
          function Q4(n) {
            n |= 0;
            var f = 0 | R1(), a = f + n | 0;
            if (f < a && a < 65536) {
              var e = new ArrayBuffer(W(a, 65536));
              new Int8Array(e).set(h), h = new Int8Array(e), s2 = new Int16Array(e), i = new Int32Array(e), m = new Uint8Array(e), L2 = new Uint16Array(e), P2 = new Uint32Array(e), c = new Float32Array(e), X = new Float64Array(e), N = e, c2.buffer = N, S = m;
            }
            return f;
          }
          return { n: P0, o: H, p: T, q: I, r: h4, s: D4, t: H4, u: T4 };
        }
        return u4(M);
      }($0);
    }, instantiate: function(d, y) {
      return { then: function(M) {
        var L = new m2.Module(d);
        M({ instance: new m2.Instance(L) });
      } };
    }, RuntimeError: Error };
    D2 = [], typeof m2 != "object" && i0("no native wasm support detected");
    var W0 = !1;
    function B1(d, y) {
      d || i0("Assertion failed: " + y);
    }
    var J2, Z2, X2, q0 = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function z0(d, y, M) {
      for (var L = y + M, S = y; d[S] && !(S >= L); )
        ++S;
      if (S - y > 16 && d.subarray && q0)
        return q0.decode(d.subarray(y, S));
      for (var U = ""; y < S; ) {
        var O = d[y++];
        if (128 & O) {
          var D = 63 & d[y++];
          if ((224 & O) != 192) {
            var a2 = 63 & d[y++];
            if ((O = (240 & O) == 224 ? (15 & O) << 12 | D << 6 | a2 : (7 & O) << 18 | D << 12 | a2 << 6 | 63 & d[y++]) < 65536)
              U += String.fromCharCode(O);
            else {
              var o2 = O - 65536;
              U += String.fromCharCode(55296 | o2 >> 10, 56320 | 1023 & o2);
            }
          } else
            U += String.fromCharCode((31 & O) << 6 | D);
        } else
          U += String.fromCharCode(O);
      }
      return U;
    }
    function T1(d, y) {
      return d ? z0(Z2, d, y) : "";
    }
    function U1(d, y) {
      return d % y > 0 && (d += y - d % y), d;
    }
    function K0(d) {
      J2 = d, C.HEAP8 = new Int8Array(d), C.HEAP16 = new Int16Array(d), C.HEAP32 = X2 = new Int32Array(d), C.HEAPU8 = Z2 = new Uint8Array(d), C.HEAPU16 = new Uint16Array(d), C.HEAPU32 = new Uint32Array(d), C.HEAPF32 = new Float32Array(d), C.HEAPF64 = new Float64Array(d);
    }
    var d2, Y0 = C.INITIAL_MEMORY || 16777216;
    (G2 = C.wasmMemory ? C.wasmMemory : new m2.Memory({ initial: Y0 / 65536, maximum: 32768 })) && (J2 = G2.buffer), Y0 = J2.byteLength, K0(J2);
    var N0 = [], V0 = [], G0 = [];
    function j1() {
      if (C.preRun)
        for (typeof C.preRun == "function" && (C.preRun = [C.preRun]); C.preRun.length; )
          D1(C.preRun.shift());
      p0(N0);
    }
    function F1() {
      p0(V0);
    }
    function O1() {
      if (C.postRun)
        for (typeof C.postRun == "function" && (C.postRun = [C.postRun]); C.postRun.length; )
          Q1(C.postRun.shift());
      p0(G0);
    }
    function D1(d) {
      N0.unshift(d);
    }
    function H1(d) {
      V0.unshift(d);
    }
    function Q1(d) {
      G0.unshift(d);
    }
    var R2 = 0, $2 = null;
    function W1(d) {
      R2++, C.monitorRunDependencies && C.monitorRunDependencies(R2);
    }
    function q1(d) {
      if (R2--, C.monitorRunDependencies && C.monitorRunDependencies(R2), R2 == 0 && $2) {
        var y = $2;
        $2 = null, y();
      }
    }
    function i0(d) {
      throw C.onAbort && C.onAbort(d), O2(d += ""), W0 = !0, d = "abort(" + d + "). Build with -s ASSERTIONS=1 for more info.", new m2.RuntimeError(d);
    }
    C.preloadedImages = {}, C.preloadedAudios = {};
    var e2, J0 = "data:application/octet-stream;base64,";
    function h0(d) {
      return d.startsWith(J0);
    }
    function Z0(d) {
      return d.startsWith("file://");
    }
    function X0(d) {
      try {
        if (d == e2 && D2)
          return new Uint8Array(D2);
        var y = H2(d);
        if (y)
          return y;
        if (b0)
          return b0(d);
        throw "both async and sync fetching of the wasm failed";
      } catch (M) {
        i0(M);
      }
    }
    function z1() {
      if (!D2 && (H0 || V2)) {
        if (typeof fetch == "function" && !Z0(e2))
          return fetch(e2, { credentials: "same-origin" }).then(function(d) {
            if (!d.ok)
              throw "failed to load wasm binary file at '" + e2 + "'";
            return d.arrayBuffer();
          }).catch(function() {
            return X0(e2);
          });
        if (t0)
          return new Promise(function(d, y) {
            t0(e2, function(M) {
              d(new Uint8Array(M));
            }, y);
          });
      }
      return Promise.resolve().then(function() {
        return X0(e2);
      });
    }
    function K1() {
      var d = { a: $0 };
      function y(U, O) {
        var D = U.exports;
        C.asm = D, d2 = C.asm.q, H1(C.asm.n), q1();
      }
      function M(U) {
        y(U.instance);
      }
      function L(U) {
        return z1().then(function(O) {
          return m2.instantiate(O, d);
        }).then(U, function(O) {
          O2("failed to asynchronously prepare wasm: " + O), i0(O);
        });
      }
      function S() {
        return D2 || typeof m2.instantiateStreaming != "function" || h0(e2) || Z0(e2) || typeof fetch != "function" ? L(M) : fetch(e2, { credentials: "same-origin" }).then(function(U) {
          return m2.instantiateStreaming(U, d).then(M, function(O) {
            return O2("wasm streaming compile failed: " + O), O2("falling back to ArrayBuffer instantiation"), L(M);
          });
        });
      }
      if (W1(), C.instantiateWasm)
        try {
          return C.instantiateWasm(d, y);
        } catch (U) {
          return O2("Module.instantiateWasm callback failed with error: " + U), !1;
        }
      return S(), {};
    }
    function p0(d) {
      for (; d.length > 0; ) {
        var y = d.shift();
        if (typeof y != "function") {
          var M = y.func;
          typeof M == "number" ? y.arg === void 0 ? d2.get(M)() : d2.get(M)(y.arg) : M(y.arg === void 0 ? null : y.arg);
        } else
          y(C);
      }
    }
    function Y1() {
      throw "longjmp";
    }
    function N1(d, y, M) {
      Z2.copyWithin(d, y, y + M);
    }
    function V1(d) {
      try {
        return G2.grow(d - J2.byteLength + 65535 >>> 16), K0(G2.buffer), 1;
      } catch {
      }
    }
    function G1(d) {
      var y = Z2.length, M = 2147483648;
      if ((d >>>= 0) > M)
        return !1;
      for (var L = 1; L <= 4; L *= 2) {
        var S = y * (1 + 0.2 / L);
        if (S = Math.min(S, d + 100663296), V1(Math.min(M, U1(Math.max(d, S), 65536))))
          return !0;
      }
      return !1;
    }
    h0(e2 = "libtess-asm.wasm") || (e2 = S1(e2));
    var k0 = { mappings: {}, buffers: [null, [], []], printChar: function(d, y) {
      var M = k0.buffers[d];
      y === 0 || y === 10 ? ((d === 1 ? L1 : O2)(z0(M, 0)), M.length = 0) : M.push(y);
    }, varargs: void 0, get: function() {
      return k0.varargs += 4, X2[k0.varargs - 4 >> 2];
    }, getStr: function(d) {
      return T1(d);
    }, get64: function(d, y) {
      return d;
    } };
    function J1(d, y, M, L) {
      for (var S = 0, U = 0; U < M; U++) {
        for (var O = X2[y + 8 * U >> 2], D = X2[y + (8 * U + 4) >> 2], a2 = 0; a2 < D; a2++)
          k0.printChar(d, Z2[O + a2]);
        S += D;
      }
      return X2[L >> 2] = S, 0;
    }
    function Z1(d) {
      for (var y = [], M = 0; M < d.length; M++) {
        var L = d[M];
        L > 255 && (L &= 255), y.push(String.fromCharCode(L));
      }
      return y.join("");
    }
    var X1 = typeof atob == "function" ? atob : function(d) {
      var y, M, L, S, U, O, D = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a2 = "", o2 = 0;
      d = d.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do
        y = D.indexOf(d.charAt(o2++)) << 2 | (S = D.indexOf(d.charAt(o2++))) >> 4, M = (15 & S) << 4 | (U = D.indexOf(d.charAt(o2++))) >> 2, L = (3 & U) << 6 | (O = D.indexOf(d.charAt(o2++))), a2 += String.fromCharCode(y), U !== 64 && (a2 += String.fromCharCode(M)), O !== 64 && (a2 += String.fromCharCode(L));
      while (o2 < d.length);
      return a2;
    };
    function $1(d) {
      if (typeof d0 == "boolean" && d0) {
        var y = Buffer.from(d, "base64");
        return new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
      }
      try {
        for (var M = X1(d), L = new Uint8Array(M.length), S = 0; S < M.length; ++S)
          L[S] = M.charCodeAt(S);
        return L;
      } catch {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }
    function H2(d) {
      if (h0(d))
        return $1(d.slice(J0.length));
    }
    var $0 = { i: Y1, m: N1, h: G1, g: J1, c: x1, l: n4, e: a4, k: e4, j: o4, f: f4, d: i4, a: G2, b: P1 };
    K1(), C.___wasm_call_ctors = function() {
      return (C.___wasm_call_ctors = C.asm.n).apply(null, arguments);
    }, C._malloc = function() {
      return (C._malloc = C.asm.o).apply(null, arguments);
    }, C._free = function() {
      return (C._free = C.asm.p).apply(null, arguments);
    }, C._triangulate = function() {
      return (C._triangulate = C.asm.r).apply(null, arguments);
    };
    var u0, I2 = C.stackSave = function() {
      return (I2 = C.stackSave = C.asm.s).apply(null, arguments);
    }, M2 = C.stackRestore = function() {
      return (M2 = C.stackRestore = C.asm.t).apply(null, arguments);
    }, _2 = C._setThrew = function() {
      return (_2 = C._setThrew = C.asm.u).apply(null, arguments);
    };
    function i4(d, y, M) {
      var L = I2();
      try {
        d2.get(d)(y, M);
      } catch (S) {
        if (M2(L), S !== S + 0 && S !== "longjmp")
          throw S;
        _2(1, 0);
      }
    }
    function f4(d, y) {
      var M = I2();
      try {
        d2.get(d)(y);
      } catch (L) {
        if (M2(M), L !== L + 0 && L !== "longjmp")
          throw L;
        _2(1, 0);
      }
    }
    function a4(d, y) {
      var M = I2();
      try {
        return d2.get(d)(y);
      } catch (L) {
        if (M2(M), L !== L + 0 && L !== "longjmp")
          throw L;
        _2(1, 0);
      }
    }
    function n4(d) {
      var y = I2();
      try {
        return d2.get(d)();
      } catch (M) {
        if (M2(y), M !== M + 0 && M !== "longjmp")
          throw M;
        _2(1, 0);
      }
    }
    function e4(d, y, M) {
      var L = I2();
      try {
        return d2.get(d)(y, M);
      } catch (S) {
        if (M2(L), S !== S + 0 && S !== "longjmp")
          throw S;
        _2(1, 0);
      }
    }
    function o4(d, y, M, L) {
      var S = I2();
      try {
        return d2.get(d)(y, M, L);
      } catch (U) {
        if (M2(S), U !== U + 0 && U !== "longjmp")
          throw U;
        _2(1, 0);
      }
    }
    function t4(d) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + d + ")", this.status = d;
    }
    function w0(d) {
      function y() {
        u0 || (u0 = !0, C.calledRun = !0, W0 || (F1(), C.onRuntimeInitialized && C.onRuntimeInitialized(), O1()));
      }
      R2 > 0 || (j1(), R2 > 0 || (C.setStatus ? (C.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          C.setStatus("");
        }, 1), y();
      }, 1)) : y()));
    }
    if ($2 = function d() {
      u0 || w0(), u0 || ($2 = d);
    }, C.run = w0, C.preInit)
      for (typeof C.preInit == "function" && (C.preInit = [C.preInit]); C.preInit.length > 0; )
        C.preInit.pop()();
    w0();
    let m0 = null, y2 = null, S2 = null, c0 = null;
    const r2 = u2.Module;
    let i1 = 0;
    const b4 = (d, y, M) => {
      m0 || (m0 = r2._triangulate);
      let L = r2.HEAPF32;
      const S = r2.HEAP32.BYTES_PER_ELEMENT, U = 2, O = L.BYTES_PER_ELEMENT;
      M > i1 && (i1 = M, S2 && (r2._free(S2), S2 = 0), y2 && (r2._free(y2), y2 = 0)), S2 || (S2 = r2._malloc(M * O)), c0 || (c0 = r2._malloc(1e3 * S)), y2 || (y2 = r2._malloc(M * O)), L = r2.HEAPF32, L.set(d, S2 / O), r2.HEAP32.set(y, c0 / S);
      const D = m0(S2, c0, y.length, U, y2), a2 = D * U;
      L = r2.HEAPF32;
      const o2 = L.slice(y2 / O, y2 / O + a2), Q2 = {};
      return Q2.buffer = o2, Q2.vertexCount = D, Q2;
    };
    return u2.triangulate = b4, u2.whenLoaded();
  }
  return { load: K2 };
}, (M1 = I1()) !== void 0 && (O0.exports = M1);
const q4 = D0.exports, z4 = Object.freeze(W4({ __proto__: null, default: q4 }, [D0.exports]));
export {
  z4 as l
};
