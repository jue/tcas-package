import { y as ce, eP as Gt, eR as Ut, eF as _t, e as $, d as K, ab as Bt, a as je, aD as Ke, M as Xe, m as Mt, r as te, db as Ze, s as Nt, w as be } from "./index-j1oaLRcp.js";
import { u as ae, i as Pe, l as Qe, c as Ue, r as _e, p as Ft, x as et, f as tt, o as Ae, e as rt, s as Vt } from "./pixelUtils-Kz9o33NO.js";
import { z as ot, p as $t, y as wt } from "./colorUtils-tSH3jtgH.js";
var Be, it, nt, bt = { exports: {} };
it = bt, Be = function() {
  function e() {
    this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null;
  }
  return e.prototype = { ensureBuffer: function(t) {
    var r = this.buffer, a = r ? r.byteLength : 0;
    if (t < a)
      return r;
    for (var l = 512; l < t; )
      l <<= 1;
    for (var s = new Uint8Array(l), h = 0; h < a; ++h)
      s[h] = r[h];
    return this.buffer = s;
  }, getByte: function() {
    for (var t = this.pos; this.bufferLength <= t; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }, getBytes: function(t) {
    var r = this.pos;
    if (t) {
      this.ensureBuffer(r + t);
      for (var a = r + t; !this.eof && this.bufferLength < a; )
        this.readBlock();
      var l = this.bufferLength;
      a > l && (a = l);
    } else {
      for (; !this.eof; )
        this.readBlock();
      a = this.bufferLength;
    }
    return this.pos = a, this.buffer.subarray(r, a);
  }, lookChar: function() {
    for (var t = this.pos; this.bufferLength <= t; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return String.fromCharCode(this.buffer[this.pos]);
  }, getChar: function() {
    for (var t = this.pos; this.bufferLength <= t; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return String.fromCharCode(this.buffer[this.pos++]);
  }, makeSubStream: function(t, r, a) {
    for (var l = t + r; this.bufferLength <= l && !this.eof; )
      this.readBlock();
    return new Stream(this.buffer, t, r, a);
  }, skip: function(t) {
    t || (t = 1), this.pos += t;
  }, reset: function() {
    this.pos = 0;
  } }, e;
}(), (nt = function() {
  if (!self || !self.Uint32Array)
    return null;
  var e = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), t = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), r = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), a = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], l = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
  function s(o) {
    throw new Error(o);
  }
  function h(o) {
    var u = 0, n = o[u++], c = o[u++];
    n != -1 && c != -1 || s("Invalid header in flate stream"), (15 & n) != 8 && s("Unknown compression method in flate stream"), ((n << 8) + c) % 31 != 0 && s("Bad FCHECK in flate stream"), 32 & c && s("FDICT bit set in flate stream"), this.bytes = o, this.bytesPos = u, this.codeSize = 0, this.codeBuf = 0, Be.call(this);
  }
  return h.prototype = Object.create(Be.prototype), h.prototype.getBits = function(o) {
    for (var u, n = this.codeSize, c = this.codeBuf, m = this.bytes, p = this.bytesPos; n < o; )
      (u = m[p++]) === void 0 && s("Bad encoding in flate stream"), c |= u << n, n += 8;
    return u = c & (1 << o) - 1, this.codeBuf = c >> o, this.codeSize = n -= o, this.bytesPos = p, u;
  }, h.prototype.getCode = function(o) {
    for (var u = o[0], n = o[1], c = this.codeSize, m = this.codeBuf, p = this.bytes, C = this.bytesPos; c < n; ) {
      var S;
      (S = p[C++]) === void 0 && s("Bad encoding in flate stream"), m |= S << c, c += 8;
    }
    var g = u[m & (1 << n) - 1], w = g >> 16, i = 65535 & g;
    return (c == 0 || c < w || w == 0) && s("Bad encoding in flate stream"), this.codeBuf = m >> w, this.codeSize = c - w, this.bytesPos = C, i;
  }, h.prototype.generateHuffmanTable = function(o) {
    for (var u = o.length, n = 0, c = 0; c < u; ++c)
      o[c] > n && (n = o[c]);
    for (var m = 1 << n, p = new Uint32Array(m), C = 1, S = 0, g = 2; C <= n; ++C, S <<= 1, g <<= 1)
      for (var w = 0; w < u; ++w)
        if (o[w] == C) {
          var i = 0, d = S;
          for (c = 0; c < C; ++c)
            i = i << 1 | 1 & d, d >>= 1;
          for (c = i; c < m; c += g)
            p[c] = C << 16 | w;
          ++S;
        }
    return [p, n];
  }, h.prototype.readBlock = function() {
    function o(L, U, B, M, N) {
      for (var H = L.getBits(B) + M; H-- > 0; )
        U[g++] = N;
    }
    var u = this.getBits(3);
    if (1 & u && (this.eof = !0), (u >>= 1) != 0) {
      var n, c;
      if (u == 1)
        n = a, c = l;
      else if (u == 2) {
        for (var m = this.getBits(5) + 257, p = this.getBits(5) + 1, C = this.getBits(4) + 4, S = Array(e.length), g = 0; g < C; )
          S[e[g++]] = this.getBits(3);
        for (var w = this.generateHuffmanTable(S), i = 0, d = (g = 0, m + p), v = new Array(d); g < d; ) {
          var b = this.getCode(w);
          b == 16 ? o(this, v, 2, 3, i) : b == 17 ? o(this, v, 3, 3, i = 0) : b == 18 ? o(this, v, 7, 11, i = 0) : v[g++] = i = b;
        }
        n = this.generateHuffmanTable(v.slice(0, m)), c = this.generateHuffmanTable(v.slice(m, d));
      } else
        s("Unknown block type in flate stream");
      for (var f = (P = this.buffer) ? P.length : 0, T = this.bufferLength; ; ) {
        var y = this.getCode(n);
        if (y < 256)
          T + 1 >= f && (f = (P = this.ensureBuffer(T + 1)).length), P[T++] = y;
        else {
          if (y == 256)
            return void (this.bufferLength = T);
          var A = (y = t[y -= 257]) >> 16;
          A > 0 && (A = this.getBits(A)), i = (65535 & y) + A, y = this.getCode(c), (A = (y = r[y]) >> 16) > 0 && (A = this.getBits(A));
          var k = (65535 & y) + A;
          T + i >= f && (f = (P = this.ensureBuffer(T + i)).length);
          for (var R = 0; R < i; ++R, ++T)
            P[T] = P[T - k];
        }
      }
    } else {
      var D, x = this.bytes, I = this.bytesPos;
      (D = x[I++]) === void 0 && s("Bad block header in flate stream");
      var E = D;
      (D = x[I++]) === void 0 && s("Bad block header in flate stream"), E |= D << 8, (D = x[I++]) === void 0 && s("Bad block header in flate stream");
      var O = D;
      (D = x[I++]) === void 0 && s("Bad block header in flate stream"), (O |= D << 8) != (65535 & ~E) && s("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
      var _ = this.bufferLength, P = this.ensureBuffer(_ + E), F = _ + E;
      this.bufferLength = F;
      for (var V = _; V < F; ++V) {
        if ((D = x[I++]) === void 0) {
          this.eof = !0;
          break;
        }
        P[V] = D;
      }
      this.bytesPos = I;
    }
  }, h;
}()) !== void 0 && (it.exports = nt);
const ye = bt.exports;
let jt = class vt {
  constructor(t) {
    t && (this.canvas = t.canvas, this.ctx = t.ctx || t.canvas && t.canvas.getContext("2d"));
  }
  decode(t, r, a) {
    if (!t || t.byteLength < 10)
      throw new ce("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let { width: l, height: s, format: h } = r;
    const { applyJpegMask: o } = r;
    if (o && (!l || !s))
      throw new ce("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((u, n) => {
      let c = null;
      h === "jpg" && o && (c = vt._getMask(t, { width: l, height: s }));
      const m = new Blob([new Uint8Array(t)], { type: "image/" + h == "jpg" ? "jpeg" : h }), p = URL.createObjectURL(m), C = new Image();
      let S;
      C.src = p, C.onload = () => {
        if (URL.revokeObjectURL(p), Gt(a))
          return void n(Ut());
        l = C.width, s = C.height, this.canvas ? (this.canvas.width === l && this.canvas.height === s || (this.canvas.width = l, this.canvas.height = s), this.ctx.clearRect(0, 0, l, s)) : (this.canvas = document.createElement("canvas"), this.canvas.width = l, this.canvas.height = s, this.ctx = this.canvas.getContext("2d")), this.ctx.drawImage(C, 0, 0);
        const g = this.ctx.getImageData(0, 0, l, s);
        let w;
        if (S = g.data, r.renderOnCanvas) {
          if (c)
            for (w = 0; w < c.length; w++)
              c[w] ? S[4 * w + 3] = 255 : S[4 * w + 3] = 0;
          return this.ctx.putImageData(g, 0, 0), void u(null);
        }
        const i = l * s, d = new Uint8Array(i), v = new Uint8Array(i), b = new Uint8Array(i);
        if (c)
          for (w = 0; w < i; w++)
            d[w] = S[4 * w], v[w] = S[4 * w + 1], b[w] = S[4 * w + 2];
        else
          for (c = new Uint8Array(i), w = 0; w < i; w++)
            d[w] = S[4 * w], v[w] = S[4 * w + 1], b[w] = S[4 * w + 2], c[w] = S[4 * w + 3];
        u({ width: l, height: s, pixels: [d, v, b], mask: c, pixelType: "u8" });
      }, C.onerror = () => {
        URL.revokeObjectURL(p), n("cannot load image");
      };
    });
  }
  static _getMask(t, r) {
    let a = null;
    try {
      const l = new Uint8Array(t), s = Math.ceil(l.length / 2);
      let h = 0;
      const o = l.length - 2;
      for (h = s; h < o && (l[h] !== 255 || l[h + 1] !== 217); h++)
        ;
      if (h += 2, h < l.length - 1) {
        const u = new ye(l.subarray(h)).getBytes();
        a = new Uint8Array(r.width * r.height);
        let n = 0;
        for (let c = 0; c < u.length; c++)
          for (let m = 7; m >= 0; m--)
            a[n++] = u[c] >> m & 1;
      }
    } catch {
    }
    return a;
  }
};
var at, st, lt, Tt = { exports: {} };
at = Tt, st = function() {
  var e = function() {
    function t(r) {
      this.message = "JPEG error: " + r;
    }
    return t.prototype = new Error(), t.prototype.name = "JpegError", t.constructor = t, t;
  }();
  return function() {
    if (!self || !self.Uint8ClampedArray)
      return null;
    var t = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r = 4017, a = 799, l = 3406, s = 2276, h = 1567, o = 3784, u = 5793, n = 2896;
    function c() {
      this.decodeTransform = null, this.colorTransform = -1;
    }
    function m(i, d) {
      for (var v, b, f = 0, T = [], y = 16; y > 0 && !i[y - 1]; )
        y--;
      T.push({ children: [], index: 0 });
      var A, k = T[0];
      for (v = 0; v < y; v++) {
        for (b = 0; b < i[v]; b++) {
          for ((k = T.pop()).children[k.index] = d[f]; k.index > 0; )
            k = T.pop();
          for (k.index++, T.push(k); T.length <= v; )
            T.push(A = { children: [], index: 0 }), k.children[k.index] = A.children, k = A;
          f++;
        }
        v + 1 < y && (T.push(A = { children: [], index: 0 }), k.children[k.index] = A.children, k = A);
      }
      return T[0].children;
    }
    function p(i, d, v) {
      return 64 * ((i.blocksPerLine + 1) * d + v);
    }
    function C(i, d, v, b, f, T, y, A, k) {
      var R = v.mcusPerLine, D = v.progressive, x = d, I = 0, E = 0;
      function O() {
        if (E > 0)
          return E--, I >> E & 1;
        if ((I = i[d++]) === 255) {
          var G = i[d++];
          if (G)
            throw new e("unexpected marker " + (I << 8 | G).toString(16));
        }
        return E = 7, I >>> 7;
      }
      function _(G) {
        for (var j = G; ; ) {
          if (typeof (j = j[O()]) == "number")
            return j;
          if (typeof j != "object")
            throw new e("invalid huffman sequence");
        }
      }
      function P(G) {
        for (var j = 0; G > 0; )
          j = j << 1 | O(), G--;
        return j;
      }
      function F(G) {
        if (G === 1)
          return O() === 1 ? 1 : -1;
        var j = P(G);
        return j >= 1 << G - 1 ? j : j + (-1 << G) + 1;
      }
      function V(G, j) {
        var Y = _(G.huffmanTableDC), X = Y === 0 ? 0 : F(Y);
        G.blockData[j] = G.pred += X;
        for (var ee = 1; ee < 64; ) {
          var ne = _(G.huffmanTableAC), Z = 15 & ne, re = ne >> 4;
          if (Z !== 0) {
            var Ot = t[ee += re];
            G.blockData[j + Ot] = F(Z), ee++;
          } else {
            if (re < 15)
              break;
            ee += 16;
          }
        }
      }
      function L(G, j) {
        var Y = _(G.huffmanTableDC), X = Y === 0 ? 0 : F(Y) << k;
        G.blockData[j] = G.pred += X;
      }
      function U(G, j) {
        G.blockData[j] |= O() << k;
      }
      var B = 0;
      function M(G, j) {
        if (B > 0)
          B--;
        else
          for (var Y = T, X = y; Y <= X; ) {
            var ee = _(G.huffmanTableAC), ne = 15 & ee, Z = ee >> 4;
            if (ne !== 0) {
              var re = t[Y += Z];
              G.blockData[j + re] = F(ne) * (1 << k), Y++;
            } else {
              if (Z < 15) {
                B = P(Z) + (1 << Z) - 1;
                break;
              }
              Y += 16;
            }
          }
      }
      var N, H = 0;
      function q(G, j) {
        for (var Y, X, ee = T, ne = y, Z = 0; ee <= ne; ) {
          var re = t[ee];
          switch (H) {
            case 0:
              if (Z = (X = _(G.huffmanTableAC)) >> 4, (Y = 15 & X) == 0)
                Z < 15 ? (B = P(Z) + (1 << Z), H = 4) : (Z = 16, H = 1);
              else {
                if (Y !== 1)
                  throw new e("invalid ACn encoding");
                N = F(Y), H = Z ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              G.blockData[j + re] ? G.blockData[j + re] += O() << k : --Z == 0 && (H = H === 2 ? 3 : 0);
              break;
            case 3:
              G.blockData[j + re] ? G.blockData[j + re] += O() << k : (G.blockData[j + re] = N << k, H = 0);
              break;
            case 4:
              G.blockData[j + re] && (G.blockData[j + re] += O() << k);
          }
          ee++;
        }
        H === 4 && --B == 0 && (H = 0);
      }
      function Ce(G, j, Y, X, ee) {
        var ne = Y % R;
        j(G, p(G, (Y / R | 0) * G.v + X, ne * G.h + ee));
      }
      function we(G, j, Y) {
        j(G, p(G, Y / G.blocksPerLine | 0, Y % G.blocksPerLine));
      }
      var se, oe, le, fe, z, ke, he = b.length;
      ke = D ? T === 0 ? A === 0 ? L : U : A === 0 ? M : q : V;
      var ie, de, Ie, Re, ue = 0;
      for (de = he === 1 ? b[0].blocksPerLine * b[0].blocksPerColumn : R * v.mcusPerColumn; ue < de; ) {
        var De = f ? Math.min(de - ue, f) : de;
        for (oe = 0; oe < he; oe++)
          b[oe].pred = 0;
        if (B = 0, he === 1)
          for (se = b[0], z = 0; z < De; z++)
            we(se, ke, ue), ue++;
        else
          for (z = 0; z < De; z++) {
            for (oe = 0; oe < he; oe++)
              for (Ie = (se = b[oe]).h, Re = se.v, le = 0; le < Re; le++)
                for (fe = 0; fe < Ie; fe++)
                  Ce(se, ke, ue, le, fe);
            ue++;
          }
        E = 0, (ie = w(i, d)) && ie.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + ie.invalid), d = ie.offset);
        var pe = ie && ie.marker;
        if (!pe || pe <= 65280)
          throw new e("marker was not found");
        if (!(pe >= 65488 && pe <= 65495))
          break;
        d += 2;
      }
      return (ie = w(i, d)) && ie.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + ie.invalid), d = ie.offset), d - x;
    }
    function S(i, d, v) {
      var b, f, T, y, A, k, R, D, x, I, E, O, _, P, F, V, L, U = i.quantizationTable, B = i.blockData;
      if (!U)
        throw new e("missing required Quantization Table.");
      for (var M = 0; M < 64; M += 8)
        x = B[d + M], I = B[d + M + 1], E = B[d + M + 2], O = B[d + M + 3], _ = B[d + M + 4], P = B[d + M + 5], F = B[d + M + 6], V = B[d + M + 7], x *= U[M], I | E | O | _ | P | F | V ? (I *= U[M + 1], E *= U[M + 2], O *= U[M + 3], _ *= U[M + 4], P *= U[M + 5], F *= U[M + 6], V *= U[M + 7], f = (b = (b = u * x + 128 >> 8) + (f = u * _ + 128 >> 8) + 1 >> 1) - f, L = (T = E) * o + (y = F) * h + 128 >> 8, T = T * h - y * o + 128 >> 8, R = (A = (A = n * (I - V) + 128 >> 8) + (R = P << 4) + 1 >> 1) - R, k = (D = (D = n * (I + V) + 128 >> 8) + (k = O << 4) + 1 >> 1) - k, y = (b = b + (y = L) + 1 >> 1) - y, T = (f = f + T + 1 >> 1) - T, L = A * s + D * l + 2048 >> 12, A = A * l - D * s + 2048 >> 12, D = L, L = k * a + R * r + 2048 >> 12, k = k * r - R * a + 2048 >> 12, R = L, v[M] = b + D, v[M + 7] = b - D, v[M + 1] = f + R, v[M + 6] = f - R, v[M + 2] = T + k, v[M + 5] = T - k, v[M + 3] = y + A, v[M + 4] = y - A) : (L = u * x + 512 >> 10, v[M] = L, v[M + 1] = L, v[M + 2] = L, v[M + 3] = L, v[M + 4] = L, v[M + 5] = L, v[M + 6] = L, v[M + 7] = L);
      for (var N = 0; N < 8; ++N)
        x = v[N], (I = v[N + 8]) | (E = v[N + 16]) | (O = v[N + 24]) | (_ = v[N + 32]) | (P = v[N + 40]) | (F = v[N + 48]) | (V = v[N + 56]) ? (f = (b = 4112 + ((b = u * x + 2048 >> 12) + (f = u * _ + 2048 >> 12) + 1 >> 1)) - f, L = (T = E) * o + (y = F) * h + 2048 >> 12, T = T * h - y * o + 2048 >> 12, y = L, R = (A = (A = n * (I - V) + 2048 >> 12) + (R = P) + 1 >> 1) - R, k = (D = (D = n * (I + V) + 2048 >> 12) + (k = O) + 1 >> 1) - k, L = A * s + D * l + 2048 >> 12, A = A * l - D * s + 2048 >> 12, D = L, L = k * a + R * r + 2048 >> 12, k = k * r - R * a + 2048 >> 12, x = (x = (b = b + y + 1 >> 1) + D) < 16 ? 0 : x >= 4080 ? 255 : x >> 4, I = (I = (f = f + T + 1 >> 1) + (R = L)) < 16 ? 0 : I >= 4080 ? 255 : I >> 4, E = (E = (T = f - T) + k) < 16 ? 0 : E >= 4080 ? 255 : E >> 4, O = (O = (y = b - y) + A) < 16 ? 0 : O >= 4080 ? 255 : O >> 4, _ = (_ = y - A) < 16 ? 0 : _ >= 4080 ? 255 : _ >> 4, P = (P = T - k) < 16 ? 0 : P >= 4080 ? 255 : P >> 4, F = (F = f - R) < 16 ? 0 : F >= 4080 ? 255 : F >> 4, V = (V = b - D) < 16 ? 0 : V >= 4080 ? 255 : V >> 4, B[d + N] = x, B[d + N + 8] = I, B[d + N + 16] = E, B[d + N + 24] = O, B[d + N + 32] = _, B[d + N + 40] = P, B[d + N + 48] = F, B[d + N + 56] = V) : (L = (L = u * x + 8192 >> 14) < -2040 ? 0 : L >= 2024 ? 255 : L + 2056 >> 4, B[d + N] = L, B[d + N + 8] = L, B[d + N + 16] = L, B[d + N + 24] = L, B[d + N + 32] = L, B[d + N + 40] = L, B[d + N + 48] = L, B[d + N + 56] = L);
    }
    function g(i, d) {
      for (var v = d.blocksPerLine, b = d.blocksPerColumn, f = new Int16Array(64), T = 0; T < b; T++)
        for (var y = 0; y < v; y++)
          S(d, p(d, T, y), f);
      return d.blockData;
    }
    function w(i, d, v) {
      function b(k) {
        return i[k] << 8 | i[k + 1];
      }
      var f = i.length - 1, T = v < d ? v : d;
      if (d >= f)
        return null;
      var y = b(d);
      if (y >= 65472 && y <= 65534)
        return { invalid: null, marker: y, offset: d };
      for (var A = b(T); !(A >= 65472 && A <= 65534); ) {
        if (++T >= f)
          return null;
        A = b(T);
      }
      return { invalid: y.toString(16), marker: A, offset: T };
    }
    return c.prototype = { parse: function(i) {
      function d() {
        var G = i[y] << 8 | i[y + 1];
        return y += 2, G;
      }
      function v() {
        var G = d(), j = y + G - 2, Y = w(i, j, y);
        Y && Y.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + Y.invalid), j = Y.offset);
        var X = i.subarray(y, j);
        return y += X.length, X;
      }
      function b(G) {
        for (var j = Math.ceil(G.samplesPerLine / 8 / G.maxH), Y = Math.ceil(G.scanLines / 8 / G.maxV), X = 0; X < G.components.length; X++) {
          z = G.components[X];
          var ee = Math.ceil(Math.ceil(G.samplesPerLine / 8) * z.h / G.maxH), ne = Math.ceil(Math.ceil(G.scanLines / 8) * z.v / G.maxV), Z = j * z.h, re = Y * z.v * 64 * (Z + 1);
          z.blockData = new Int16Array(re), z.blocksPerLine = ee, z.blocksPerColumn = ne;
        }
        G.mcusPerLine = j, G.mcusPerColumn = Y;
      }
      var f, T, y = 0, A = null, k = null, R = [], D = [], x = [], I = d();
      if (I !== 65496)
        throw new e("SOI not found");
      for (I = d(); I !== 65497; ) {
        var E, O, _;
        switch (I) {
          case 65504:
          case 65505:
          case 65506:
          case 65507:
          case 65508:
          case 65509:
          case 65510:
          case 65511:
          case 65512:
          case 65513:
          case 65514:
          case 65515:
          case 65516:
          case 65517:
          case 65518:
          case 65519:
          case 65534:
            var P = v();
            I === 65504 && P[0] === 74 && P[1] === 70 && P[2] === 73 && P[3] === 70 && P[4] === 0 && (A = { version: { major: P[5], minor: P[6] }, densityUnits: P[7], xDensity: P[8] << 8 | P[9], yDensity: P[10] << 8 | P[11], thumbWidth: P[12], thumbHeight: P[13], thumbData: P.subarray(14, 14 + 3 * P[12] * P[13]) }), I === 65518 && P[0] === 65 && P[1] === 100 && P[2] === 111 && P[3] === 98 && P[4] === 101 && (k = { version: P[5] << 8 | P[6], flags0: P[7] << 8 | P[8], flags1: P[9] << 8 | P[10], transformCode: P[11] });
            break;
          case 65499:
            for (var F = d() + y - 2; y < F; ) {
              var V = i[y++], L = new Uint16Array(64);
              if (V >> 4) {
                if (V >> 4 != 1)
                  throw new e("DQT - invalid table spec");
                for (O = 0; O < 64; O++)
                  L[t[O]] = d();
              } else
                for (O = 0; O < 64; O++)
                  L[t[O]] = i[y++];
              R[15 & V] = L;
            }
            break;
          case 65472:
          case 65473:
          case 65474:
            if (f)
              throw new e("Only single frame JPEGs supported");
            d(), (f = {}).extended = I === 65473, f.progressive = I === 65474, f.precision = i[y++], f.scanLines = d(), f.samplesPerLine = d(), f.components = [], f.componentIds = {};
            var U, B = i[y++], M = 0, N = 0;
            for (E = 0; E < B; E++) {
              U = i[y];
              var H = i[y + 1] >> 4, q = 15 & i[y + 1];
              M < H && (M = H), N < q && (N = q);
              var Ce = i[y + 2];
              _ = f.components.push({ h: H, v: q, quantizationId: Ce, quantizationTable: null }), f.componentIds[U] = _ - 1, y += 3;
            }
            f.maxH = M, f.maxV = N, b(f);
            break;
          case 65476:
            var we = d();
            for (E = 2; E < we; ) {
              var se = i[y++], oe = new Uint8Array(16), le = 0;
              for (O = 0; O < 16; O++, y++)
                le += oe[O] = i[y];
              var fe = new Uint8Array(le);
              for (O = 0; O < le; O++, y++)
                fe[O] = i[y];
              E += 17 + le, (se >> 4 ? D : x)[15 & se] = m(oe, fe);
            }
            break;
          case 65501:
            d(), T = d();
            break;
          case 65498:
            d();
            var z, ke = i[y++], he = [];
            for (E = 0; E < ke; E++) {
              var ie = f.componentIds[i[y++]];
              z = f.components[ie];
              var de = i[y++];
              z.huffmanTableDC = x[de >> 4], z.huffmanTableAC = D[15 & de], he.push(z);
            }
            var Ie = i[y++], Re = i[y++], ue = i[y++], De = C(i, y, f, he, T, Ie, Re, ue >> 4, 15 & ue);
            y += De;
            break;
          case 65535:
            i[y] !== 255 && y--;
            break;
          default:
            if (i[y - 3] === 255 && i[y - 2] >= 192 && i[y - 2] <= 254) {
              y -= 3;
              break;
            }
            throw new e("unknown marker " + I.toString(16));
        }
        I = d();
      }
      for (this.width = f.samplesPerLine, this.height = f.scanLines, this.jfif = A, this.eof = y, this.adobe = k, this.components = [], E = 0; E < f.components.length; E++) {
        var pe = R[(z = f.components[E]).quantizationId];
        pe && (z.quantizationTable = pe), this.components.push({ output: g(f, z), scaleX: z.h / f.maxH, scaleY: z.v / f.maxV, blocksPerLine: z.blocksPerLine, blocksPerColumn: z.blocksPerColumn });
      }
      this.numComponents = this.components.length;
    }, _getLinearizedBlockData: function(i, d) {
      var v, b, f, T, y, A, k, R, D, x, I, E = this.width / i, O = this.height / d, _ = 0, P = this.components.length, F = i * d * P, V = new Uint8ClampedArray(F), L = new Uint32Array(i), U = 4294967288;
      for (k = 0; k < P; k++) {
        for (b = (v = this.components[k]).scaleX * E, f = v.scaleY * O, _ = k, I = v.output, T = v.blocksPerLine + 1 << 3, y = 0; y < i; y++)
          R = 0 | y * b, L[y] = (R & U) << 3 | 7 & R;
        for (A = 0; A < d; A++)
          for (x = T * ((R = 0 | A * f) & U) | (7 & R) << 3, y = 0; y < i; y++)
            V[_] = I[x + L[y]], _ += P;
      }
      var B = this.decodeTransform;
      if (B)
        for (k = 0; k < F; )
          for (R = 0, D = 0; R < P; R++, k++, D += 2)
            V[k] = (V[k] * B[D] >> 8) + B[D + 1];
      return V;
    }, _isColorConversionNeeded: function() {
      return this.adobe ? !!this.adobe.transformCode : this.numComponents === 3 ? this.colorTransform !== 0 : this.colorTransform === 1;
    }, _convertYccToRgb: function(i) {
      for (var d, v, b, f = 0, T = i.length; f < T; f += 3)
        d = i[f], v = i[f + 1], b = i[f + 2], i[f] = d - 179.456 + 1.402 * b, i[f + 1] = d + 135.459 - 0.344 * v - 0.714 * b, i[f + 2] = d - 226.816 + 1.772 * v;
      return i;
    }, _convertYcckToRgb: function(i) {
      for (var d, v, b, f, T = 0, y = 0, A = i.length; y < A; y += 4)
        d = i[y], v = i[y + 1], b = i[y + 2], f = i[y + 3], i[T++] = v * (-660635669420364e-19 * v + 437130475926232e-18 * b - 54080610064599e-18 * d + 48449797120281e-17 * f - 0.154362151871126) - 122.67195406894 + b * (-957964378445773e-18 * b + 817076911346625e-18 * d - 0.00477271405408747 * f + 1.53380253221734) + d * (961250184130688e-18 * d - 0.00266257332283933 * f + 0.48357088451265) + f * (-336197177618394e-18 * f + 0.484791561490776), i[T++] = 107.268039397724 + v * (219927104525741e-19 * v - 640992018297945e-18 * b + 659397001245577e-18 * d + 426105652938837e-18 * f - 0.176491792462875) + b * (-778269941513683e-18 * b + 0.00130872261408275 * d + 770482631801132e-18 * f - 0.151051492775562) + d * (0.00126935368114843 * d - 0.00265090189010898 * f + 0.25802910206845) + f * (-318913117588328e-18 * f - 0.213742400323665), i[T++] = v * (-570115196973677e-18 * v - 263409051004589e-19 * b + 0.0020741088115012 * d - 0.00288260236853442 * f + 0.814272968359295) - 20.810012546947 + b * (-153496057440975e-19 * b - 132689043961446e-18 * d + 560833691242812e-18 * f - 0.195152027534049) + d * (0.00174418132927582 * d - 0.00255243321439347 * f + 0.116935020465145) + f * (-343531996510555e-18 * f + 0.24165260232407);
      return i;
    }, _convertYcckToCmyk: function(i) {
      for (var d, v, b, f = 0, T = i.length; f < T; f += 4)
        d = i[f], v = i[f + 1], b = i[f + 2], i[f] = 434.456 - d - 1.402 * b, i[f + 1] = 119.541 - d + 0.344 * v + 0.714 * b, i[f + 2] = 481.816 - d - 1.772 * v;
      return i;
    }, _convertCmykToRgb: function(i) {
      for (var d, v, b, f, T = 0, y = 1 / 255, A = 0, k = i.length; A < k; A += 4)
        d = i[A] * y, v = i[A + 1] * y, b = i[A + 2] * y, f = i[A + 3] * y, i[T++] = 255 + d * (-4.387332384609988 * d + 54.48615194189176 * v + 18.82290502165302 * b + 212.25662451639585 * f - 285.2331026137004) + v * (1.7149763477362134 * v - 5.6096736904047315 * b - 17.873870861415444 * f - 5.497006427196366) + b * (-2.5217340131683033 * b - 21.248923337353073 * f + 17.5119270841813) - f * (21.86122147463605 * f + 189.48180835922747), i[T++] = 255 + d * (8.841041422036149 * d + 60.118027045597366 * v + 6.871425592049007 * b + 31.159100130055922 * f - 79.2970844816548) + v * (-15.310361306967817 * v + 17.575251261109482 * b + 131.35250912493976 * f - 190.9453302588951) + b * (4.444339102852739 * b + 9.8632861493405 * f - 24.86741582555878) - f * (20.737325471181034 * f + 187.80453709719578), i[T++] = 255 + d * (0.8842522430003296 * d + 8.078677503112928 * v + 30.89978309703729 * b - 0.23883238689178934 * f - 14.183576799673286) + v * (10.49593273432072 * v + 63.02378494754052 * b + 50.606957656360734 * f - 112.23884253719248) + b * (0.03296041114873217 * b + 115.60384449646641 * f - 193.58209356861505) - f * (22.33816807309886 * f + 180.12613974708367);
      return i;
    }, getData: function(i, d, v) {
      if (this.numComponents > 4)
        throw new e("Unsupported color mode");
      var b = this._getLinearizedBlockData(i, d);
      if (this.numComponents === 1 && v) {
        for (var f = b.length, T = new Uint8ClampedArray(3 * f), y = 0, A = 0; A < f; A++) {
          var k = b[A];
          T[y++] = k, T[y++] = k, T[y++] = k;
        }
        return T;
      }
      if (this.numComponents === 3 && this._isColorConversionNeeded())
        return this._convertYccToRgb(b);
      if (this.numComponents === 4) {
        if (this._isColorConversionNeeded())
          return v ? this._convertYcckToRgb(b) : this._convertYcckToCmyk(b);
        if (v)
          return this._convertCmykToRgb(b);
      }
      return b;
    } }, c;
  }();
}, (lt = st()) !== void 0 && (at.exports = lt);
const Le = Tt.exports;
let Kt = class {
  static decode(t) {
    const r = new Uint8Array(t), a = new Le();
    a.parse(r);
    const { width: l, height: s, numComponents: h, eof: o } = a, u = a.getData(l, s, !0);
    let n;
    const c = l * s;
    let m = 0, p = 0, C = 0;
    if (o < r.length - 1) {
      const w = new ye(r.subarray(o)).getBytes();
      n = new Uint8Array(c);
      let i = 0;
      for (m = 0; m < w.length; m++)
        for (C = 7; C >= 0; C--)
          n[i++] = w[m] >> C & 1;
    }
    let S, g = null;
    if (h === 1)
      g = [u, u, u];
    else {
      for (g = [], m = 0; m < 3; m++)
        S = new Uint8Array(c), g.push(S);
      for (C = 0, p = 0; p < c; p++)
        for (m = 0; m < 3; m++)
          g[m][p] = u[C++];
    }
    return { width: l, height: s, pixels: g, mask: n };
  }
};
const St = [{ pixelType: "S8", size: 1, ctor: Int8Array, range: [-128, 128] }, { pixelType: "U8", size: 1, ctor: Uint8Array, range: [0, 255] }, { pixelType: "S16", size: 2, ctor: Int16Array, range: [-32768, 32767] }, { pixelType: "U16", size: 2, ctor: Uint16Array, range: [0, 65536] }, { pixelType: "S32", size: 4, ctor: Int32Array, range: [-2147483648, 2147483647] }, { pixelType: "U32", size: 4, ctor: Uint32Array, range: [0, 4294967296] }, { pixelType: "F32", size: 4, ctor: Float32Array, range: [-34027999387901484e22, 34027999387901484e22] }, { pixelType: "F64", size: 8, ctor: Float64Array, range: [-17976931348623157e292, 17976931348623157e292] }];
let Me = null;
function kt() {
  return Me || (Me = import("./lerc-wasm-ksaj48NC.js").then((e) => e.l).then(({ default: e }) => e({ locateFile: (t) => _t(`geoscene/layers/support/rasterFormats/${t}`) })).then((e) => {
    Yt(e);
  }), Me);
}
const Oe = { getBlobInfo: null, decode: null };
function Wt(e) {
  return 16 + (e >> 3 << 3);
}
function Yt(e) {
  const { _malloc: t, _free: r, _lerc_getBlobInfo: a, _lerc_getDataRanges: l, _lerc_decode_4D: s, asm: h } = e;
  let o;
  const u = Object.values(h).find((c) => c && "buffer" in c && c.buffer === e.HEAPU8.buffer), n = (c) => {
    const m = c.map((g) => Wt(g)), p = m.reduce((g, w) => g + w), C = t(p);
    o = new Uint8Array(u.buffer);
    let S = m[0];
    m[0] = C;
    for (let g = 1; g < m.length; g++) {
      const w = m[g];
      m[g] = m[g - 1] + S, S = w;
    }
    return m;
  };
  Oe.getBlobInfo = (c) => {
    const C = new Uint8Array(48), S = new Uint8Array(8 * 3), [g, w, i] = n([c.length, C.length, S.length]);
    o.set(c, g), o.set(C, w), o.set(S, i);
    let d = a(g, c.length, w, i, 12, 3);
    if (d)
      throw r(g), `lerc-getBlobInfo: error code is ${d}`;
    o = new Uint8Array(u.buffer), C.set(o.slice(w, w + C.length)), S.set(o.slice(i, i + S.length));
    const v = new Uint32Array(C.buffer), b = new Float64Array(S.buffer), [f, T, y, A, k, R, D, x, I, , E] = v, O = { version: f, dimCount: y, width: A, height: k, validPixelCount: D, bandCount: R, blobSize: x, maskCount: I, dataType: T, minValue: b[0], maxValue: b[1], maxZerror: b[2], statistics: [], bandCountWithNoData: E };
    if (E)
      return O;
    if (y === 1 && R === 1)
      return r(g), O.statistics.push({ minValue: b[0], maxValue: b[1] }), O;
    const _ = y * R * 8, P = new Uint8Array(_), F = new Uint8Array(_);
    let V, L = g, U = 0, B = !1;
    if (o.byteLength < g + 2 * _ ? (r(g), B = !0, [L, U, V] = n([c.length, _, _]), o.set(c, L)) : [U, V] = n([_, _]), o.set(P, U), o.set(F, V), d = l(g, c.length, y, R, U, V), d)
      throw r(L), B || r(U), `lerc-getDataRanges: error code is ${d}`;
    o = new Uint8Array(u.buffer), P.set(o.slice(U, U + _)), F.set(o.slice(V, V + _));
    const M = new Float64Array(P.buffer), N = new Float64Array(F.buffer), H = O.statistics;
    for (let q = 0; q < R; q++)
      if (y > 1) {
        const Ce = M.slice(q * y, (q + 1) * y), we = N.slice(q * y, (q + 1) * y), se = Math.min.apply(null, Ce), oe = Math.max.apply(null, we);
        H.push({ minValue: se, maxValue: oe, dimStats: { minValues: Ce, maxValues: we } });
      } else
        H.push({ minValue: M[q], maxValue: N[q] });
    return r(L), B || r(U), O;
  }, Oe.decode = (c, m) => {
    const { maskCount: p, dimCount: C, bandCount: S, width: g, height: w, dataType: i, bandCountWithNoData: d } = m, v = St[i], b = g * w, f = new Uint8Array(b * S), T = b * C * S * v.size, y = new Uint8Array(T), A = new Uint8Array(S), k = 8 * S, R = new Uint8Array(k), [D, x, I, E, O] = n([c.length, f.length, y.length, A.length, R.length]);
    o.set(c, D), o.set(f, x), o.set(y, I), o.set(A, E), o.set(R, O);
    const _ = s(D, c.length, p, x, C, g, w, S, i, I, E, O);
    if (_)
      throw r(D), `lerc-decode: error code is ${_}`;
    o = new Uint8Array(u.buffer), y.set(o.slice(I, I + T)), f.set(o.slice(x, x + b));
    let P = null;
    if (d) {
      A.set(o.slice(E, E + S)), R.set(o.slice(O, O + k)), P = [];
      for (let F = 0; F < A.length; F++)
        P.push(A[F] ? R[F] : null);
    }
    return r(D), { data: y, maskData: f, noDataValues: P };
  };
}
function zt(e, t, r, a, l) {
  if (r < 2)
    return e;
  const s = new a(t * r);
  if (l)
    for (let h = 0, o = 0; h < t; h++)
      for (let u = 0, n = h; u < r; u++, n += t)
        s[n] = e[o++];
  else
    for (let h = 0, o = 0; h < t; h++)
      for (let u = 0, n = h; u < r; u++, n += t)
        s[o++] = e[n];
  return s;
}
function At(e, t = {}) {
  var r;
  const a = (r = t.inputOffset) != null ? r : 0, l = e instanceof Uint8Array ? e.subarray(a) : new Uint8Array(e, a), s = Oe.getBlobInfo(l), { data: h, maskData: o } = Oe.decode(l, s), { width: u, height: n, bandCount: c, dimCount: m, dataType: p, maskCount: C, statistics: S } = s, g = St[p], w = new g.ctor(h.buffer), i = [], d = [], v = u * n, b = v * m;
  for (let k = 0; k < c; k++) {
    const R = w.subarray(k * b, (k + 1) * b);
    if (t.returnPixelInterleavedDims)
      i.push(R);
    else {
      const D = zt(R, v, m, g.ctor, !0);
      i.push(D);
    }
    d.push(o.subarray(k * b, (k + 1) * b));
  }
  const f = C === 0 ? null : C === 1 ? d[0] : new Uint8Array(v);
  if (C > 1) {
    f.set(d[0]);
    for (let k = 1; k < d.length; k++) {
      const R = d[k];
      for (let D = 0; D < v; D++)
        f[D] = f[D] & R[D];
    }
  }
  const { noDataValue: T } = t, y = T != null && g.range[0] <= T && g.range[1] >= T;
  if (C > 0 && y) {
    const { noDataValue: k } = t;
    for (let R = 0; R < c; R++) {
      const D = i[R], x = d[R] || f;
      for (let I = 0; I < v; I++)
        x[I] === 0 && (D[I] = k);
    }
  }
  const A = C === c && c > 1 ? d : null;
  return { width: u, height: n, bandCount: c, pixelType: t.pixelType && s.version === 0 ? t.pixelType : g.pixelType, dimCount: m, statistics: S, pixels: i, mask: f, bandMasks: A };
}
function Jt(e, t, r, a = !0) {
  if (t % 4 != 0 || r % 4 != 0) {
    const l = new ArrayBuffer(4 * Math.ceil(r / 4)), s = new Uint8Array(l), h = new Uint8Array(e, t, r);
    if (a)
      for (let o = 0; o < s.length; o += 4)
        s[o] = h[o + 3], s[o + 1] = h[o + 2], s[o + 2] = h[o + 1], s[o + 3] = h[o];
    else
      s.set(h);
    return new Uint32Array(s.buffer);
  }
  if (a) {
    const l = new Uint8Array(e, t, r), s = new Uint8Array(l.length);
    for (let h = 0; h < s.length; h += 4)
      s[h] = l[h + 3], s[h + 1] = l[h + 2], s[h + 2] = l[h + 1], s[h + 3] = l[h];
    return new Uint32Array(s.buffer);
  }
  return new Uint32Array(e, t, r / 4);
}
function ut() {
  const e = [];
  for (let t = 0; t <= 257; t++)
    e[t] = [t];
  return e;
}
function ct(e, t) {
  for (let r = 0; r < t.length; r++)
    e.push(t[r]);
}
const ve = /* @__PURE__ */ new Set();
function We(e, t, r, a = !0) {
  const l = Jt(e, t, r, a);
  let s = 9, h = ut(), o = 32, u = h.length, n = [], c = 1, m = l[0], p = 0;
  const C = l.length, S = 8 * (4 * C - r), g = [];
  for (; m != null; ) {
    if (o >= s)
      o -= s, p = m >>> 32 - s, m <<= s;
    else {
      p = m >>> 32 - o, m = l[c++];
      const i = s - o;
      o = 32 - i, p = (p << i) + (m >>> o), m <<= i;
    }
    if (p === 257)
      break;
    if (p === 256) {
      s = 9, h = ut(), u = h.length, n = [];
      continue;
    }
    const w = h[p];
    if (w == null) {
      if (p > h.length)
        throw "data integrity issue: code does not exist on code page";
      n.push(n[0]), h[u++] = n.slice(), ct(g, n);
    } else
      ct(g, w), n.push(w[0]), n.length > 1 && (h[u++] = n.slice()), n = w.slice();
    if (ve.has(u) && s++, o === 0 && (m = l[c++], o = 32), c > C || c === C && o <= S)
      break;
  }
  return new Uint8Array(g);
}
ve.add(511), ve.add(1023), ve.add(2047), ve.add(4095), ve.add(8191);
const ft = function(e, t) {
  const r = t.width * t.height, a = t.pixelType;
  return Math.floor(e.byteLength / (r * It(a)));
}, It = function(e) {
  let t = 1;
  switch (e) {
    case Uint8Array:
    case Int8Array:
      t = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t = 4;
      break;
    case Float64Array:
      t = 8;
  }
  return t;
}, Ht = function(e, t) {
  if (8 * e.byteLength < t)
    return null;
  const r = new Uint8Array(e, 0, Math.ceil(t / 8)), a = new Uint8Array(t);
  let l = 0, s = 0, h = 0, o = 0;
  for (h = 0; h < r.length - 1; h++)
    for (s = r[h], o = 7; o >= 0; o--)
      a[l++] = s >> o & 1;
  for (o = 7; l < t - 1; )
    s = r[r.length - 1], a[l++] = s >> o & 1, o--;
  return a;
};
let qt = class {
  static decode(t, r) {
    const a = r.pixelType, l = [], s = r.width * r.height, h = ft(t, r), { bandIds: o, format: u } = r, n = o && o.length || ft(t, r), c = t.byteLength - t.byteLength % (s * It(a)), m = new a(t, 0, s * h);
    let p, C, S, g, w;
    if (u === "bip")
      for (p = 0; p < n; p++) {
        for (g = new a(s), w = o ? o[p] : p, C = 0; C < s; C++)
          g[C] = m[C * h + w];
        l.push(g);
      }
    else if (u === "bsq")
      for (p = 0; p < n; p++)
        w = o ? o[p] : p, l.push(m.subarray(w * s, (w + 1) * s));
    return c < t.byteLength - 1 && (S = Ht(t.slice(c), s)), { pixels: l, mask: S };
  }
};
function Xt(e, t) {
  let r = 0, a = "", l = 0, s = 0;
  const h = e.length;
  for (; r < h; )
    s = e[r++], l = s >> 4, l < 8 ? l = 1 : l === 15 ? (l = 4, s = (7 & s) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : l === 14 ? (l = 3, s = (15 & s) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : (l = 2, s = (31 & s) << 6 | 63 & e[r++]), (s !== 0 || t) && (a += String.fromCharCode(s));
  return a;
}
const Ye = (() => {
  const e = [];
  return e[254] = "NEWSUBFILETYPE", e[255] = "SUBFILETYPE", e[256] = "IMAGEWIDTH", e[257] = "IMAGELENGTH", e[258] = "BITSPERSAMPLE", e[259] = "COMPRESSION", e[262] = "PHOTOMETRICINTERPRETATION", e[263] = "THRESHHOLDING", e[264] = "CELLWIDTH", e[265] = "CELLLENGTH", e[266] = "FILLORDER", e[269] = "DOCUMENTNAME", e[270] = "IMAGEDESCRIPTION", e[271] = "MAKE", e[272] = "MODEL", e[273] = "STRIPOFFSETS", e[274] = "ORIENTATION", e[277] = "SAMPLESPERPIXEL", e[278] = "ROWSPERSTRIP", e[279] = "STRIPBYTECOUNTS", e[280] = "MINSAMPLEVALUE", e[281] = "MAXSAMPLEVALUE", e[282] = "XRESOLUTION", e[283] = "YRESOLUTION", e[284] = "PLANARCONFIGURATION", e[285] = "PAGENAME", e[286] = "XPOSITION", e[287] = "YPOSITION", e[288] = "FREEOFFSETS", e[289] = "FREEBYTECOUNTS", e[290] = "GRAYRESPONSEUNIT", e[291] = "GRAYRESPONSECURVE", e[292] = "T4OPTIONS", e[293] = "T6OPTIONS", e[296] = "RESOLUTIONUNIT", e[297] = "PAGENUMBER", e[300] = "COLORRESPONSEUNIT", e[301] = "TRANSFERFUNCTION", e[305] = "SOFTWARE", e[306] = "DATETIME", e[315] = "ARTIST", e[316] = "HOSTCOMPUTER", e[317] = "PREDICTOR", e[318] = "WHITEPOINT", e[319] = "PRIMARYCHROMATICITIES", e[320] = "COLORMAP", e[321] = "HALFTONEHINTS", e[322] = "TILEWIDTH", e[323] = "TILELENGTH", e[324] = "TILEOFFSETS", e[325] = "TILEBYTECOUNTS", e[326] = "BADFAXLINES", e[327] = "CLEANFAXDATA", e[328] = "CONSECUTIVEBADFAXLINES", e[330] = "SUBIFD", e[332] = "INKSET", e[333] = "INKNAMES", e[334] = "NUMBEROFINKS", e[336] = "DOTRANGE", e[337] = "TARGETPRINTER", e[338] = "EXTRASAMPLES", e[339] = "SAMPLEFORMAT", e[340] = "SMINSAMPLEVALUE", e[341] = "SMAXSAMPLEVALUE", e[342] = "TRANSFERRANGE", e[347] = "JPEGTABLES", e[512] = "JPEGPROC", e[513] = "JPEGIFOFFSET", e[514] = "JPEGIFBYTECOUNT", e[515] = "JPEGRESTARTINTERVAL", e[517] = "JPEGLOSSLESSPREDICTORS", e[518] = "JPEGPOINTTRANSFORM", e[519] = "JPEGQTABLES", e[520] = "JPEGDCTABLES", e[521] = "JPEGACTABLES", e[529] = "YCBCRCOEFFICIENTS", e[530] = "YCBCRSUBSAMPLING", e[531] = "YCBCRPOSITIONING", e[532] = "REFERENCEBLACKWHITE", e[700] = "XMP", e[33550] = "GEOPIXELSCALE", e[33922] = "GEOTIEPOINTS", e[33432] = "COPYRIGHT", e[42112] = "GDAL_METADATA", e[42113] = "GDAL_NODATA", e[50844] = "RPCCOEFFICIENT", e[34264] = "GEOTRANSMATRIX", e[34735] = "GEOKEYDIRECTORY", e[34736] = "GEODOUBLEPARAMS", e[34737] = "GEOASCIIPARAMS", e[34665] = "EXIFIFD", e[34853] = "GPSIFD", e[40965] = "INTEROPERABILITYIFD", e;
})(), Zt = (() => {
  const e = [].concat(Ye);
  return e[36864] = "ExifVersion", e[40960] = "FlashpixVersion", e[40961] = "ColorSpace", e[42240] = "Gamma", e[37121] = "ComponentsConfiguration", e[37122] = "CompressedBitsPerPixel", e[40962] = "PixelXDimension", e[40963] = "PixelYDimension", e[37500] = "MakerNote", e[37510] = "UserComment", e[40964] = "RelatedSoundFile", e[36867] = "DateTimeOriginal", e[36868] = "DateTimeDigitized", e[36880] = "OffsetTime", e[36881] = "OffsetTimeOriginal", e[36882] = "OffsetTimeDigitized", e[37520] = "SubSecTime", e[37521] = "SubSecTimeOriginal", e[37522] = "SubSecTimeDigitized", e[37888] = "Temperature", e[37889] = "Humidity", e[37890] = "Pressure", e[37891] = "WaterDepth", e[37892] = "Acceleration", e[37893] = "CameraElevationAngle", e[42016] = "ImageUniqueID", e[42032] = "CameraOwnerName", e[42033] = "BodySerialNumber", e[42034] = "LensSpecification", e[42035] = "LensMake", e[42036] = "LensModel", e[42037] = "LensSerialNumber", e[33434] = "ExposureTime", e[33437] = "FNumber", e[34850] = "ExposureProgram", e[34852] = "SpectralSensitivity", e[34855] = "PhotographicSensitivity", e[34856] = "OECF", e[34864] = "SensitivityType", e[34865] = "StandardOutputSensitivity", e[34866] = "RecommendedExposureIndex", e[34867] = "ISOSpeed", e[34868] = "ISOSpeedLatitudeyyy", e[34869] = "ISOSpeedLatitudezzz", e[37377] = "ShutterSpeedValue", e[37378] = "ApertureValue", e[37379] = "BrightnessValue", e[37380] = "ExposureBiasValue", e[37381] = "MaxApertureValue", e[37382] = "SubjectDistance", e[37383] = "MeteringMode", e[37384] = "LightSource", e[37385] = "Flash", e[37386] = "FocalLength", e[37396] = "SubjectArea", e[41483] = "FlashEnergy", e[41484] = "SpatialFrequencyResponse", e[41486] = "FocalPlaneXResolution", e[41487] = "FocalPlaneYResolution", e[41488] = "FocalPlaneResolutionUnit", e[41492] = "SubjectLocation", e[41493] = "ExposureIndex", e[41495] = "SensingMethod", e[41728] = "FileSource", e[41729] = "SceneType", e[41730] = "CFAPattern", e[41985] = "CustomRendered", e[41986] = "ExposureMode", e[41987] = "WhiteBalance", e[41988] = "DigitalZoomRatio", e[41989] = "FocalLengthIn35mmFilm", e[41990] = "SceneCaptureType", e[41991] = "GainControl", e[41992] = "Contrast", e[41993] = "Saturation", e[41994] = "Sharpness", e[41995] = "DeviceSettingDescription", e[41996] = "SubjectDistanceRange", e;
})(), Qt = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"], er = (() => {
  const e = [];
  return e[1024] = "GTModelTypeGeoKey", e[1025] = "GTRasterTypeGeoKey", e[1026] = "GTCitationGeoKey", e[2048] = "GeographicTypeGeoKey", e[2049] = "GeogCitationGeoKey", e[2050] = "GeogGeodeticDatumGeoKey", e[2051] = "GeogPrimeMeridianGeoKey", e[2052] = "GeogLinearUnitsGeoKey", e[2053] = "GeogLinearUnitSizeGeoKey", e[2054] = "GeogAngularUnitsGeoKey", e[2055] = "GeogAngularUnitSizeGeoKey", e[2056] = "GeogEllipsoidGeoKey", e[2057] = "GeogSemiMajorAxisGeoKey", e[2058] = "GeogSemiMinorAxisGeoKey", e[2059] = "GeogInvFlatteningGeoKey", e[2061] = "GeogPrimeMeridianLongGeoKey", e[2060] = "GeogAzimuthUnitsGeoKey", e[3072] = "ProjectedCSTypeGeoKey", e[3073] = "PCSCitationGeoKey", e[3074] = "ProjectionGeoKey", e[3075] = "ProjCoordTransGeoKey", e[3076] = "ProjLinearUnitsGeoKey", e[3077] = "ProjLinearUnitSizeGeoKey", e[3078] = "ProjStdParallel1GeoKey", e[3079] = "ProjStdParallel2GeoKey", e[3080] = "ProjNatOriginLongGeoKey", e[3081] = "ProjNatOriginLatGeoKey", e[3082] = "ProjFalseEastingGeoKey", e[3083] = "ProjFalseNorthingGeoKey", e[3084] = "ProjFalseOriginLongGeoKey", e[3085] = "ProjFalseOriginLatGeoKey", e[3086] = "ProjFalseOriginEastingGeoKey", e[3087] = "ProjFalseOriginNorthingGeoKey", e[3088] = "ProjCenterLongGeoKey", e[3090] = "ProjCenterEastingGeoKey", e[3091] = "ProjCenterNorthingGeoKey", e[3092] = "ProjScaleAtNatOriginGeoKey", e[3093] = "ProjScaleAtCenterGeoKey", e[3094] = "ProjAzimuthAngleGeoKey", e[3095] = "ProjStraightVertPoleLongGeoKey", e[4096] = "VerticalCSTypeGeoKey", e[4097] = "VerticalCitationGeoKey", e[4098] = "VerticalDatumGeoKey", e[4099] = "VerticalUnitsGeoKey", e;
})(), tr = function(e, t) {
  let r = (t || Ye)[e];
  return r === void 0 && (r = "unknown" + String(e)), r;
}, Ve = /* @__PURE__ */ new Map();
Ve.set("EXIFIFD", Zt), Ve.set("GPSIFD", Qt);
const Te = { TIFF_TAGS: Ye, ifdTags: Ve, GEO_KEYS: er, getTagName: tr }, ze = (() => {
  const e = new ArrayBuffer(4), t = new Uint8Array(e);
  return new Uint32Array(e)[0] = 1, t[0] === 1;
})(), ht = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8], Se = 4294967296, rr = /* @__PURE__ */ new Set([1, 5, 6, 7, 8, 34712, 34887]);
function Rt(e, t) {
  let r = "unknown";
  return e === 3 ? r = "f32" : e === 1 ? t === 1 ? r = "u1" : t === 2 ? r = "u2" : t === 4 ? r = "u4" : t <= 8 ? r = "u8" : t <= 16 ? r = "u16" : t <= 32 && (r = "u32") : e === 2 && (t <= 8 ? r = "s8" : t <= 16 ? r = "s16" : t <= 32 && (r = "s32")), r;
}
function Ge(e) {
  let t = null;
  switch (e ? e.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t = Uint8Array;
      break;
    case "u16":
      t = Uint16Array;
      break;
    case "u32":
      t = Uint32Array;
      break;
    case "s8":
      t = Int8Array;
      break;
    case "s16":
      t = Int16Array;
      break;
    case "s32":
      t = Int32Array;
      break;
    default:
      t = Float32Array;
  }
  return t;
}
function or(e, t) {
  return { x: t[0] * e.x + t[1] * e.y + t[2], y: t[3] * e.x + t[4] * e.y + t[5] };
}
function Dt(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values;
}
function ge(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values;
}
function Ne(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values[0];
}
function W(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values[0];
}
function Fe(e, t, r, a = 0, l = Te.TIFF_TAGS, s = 4) {
  const h = s === 8, o = h ? qe(new DataView(e, r, 8), 0, t) : new DataView(e, r, 2).getUint16(0, t), u = 4 + 2 * s, n = h ? 8 : 2, c = n + o * u;
  if (r + c > e.byteLength)
    return { success: !1, ifd: null, nextIFD: null, requiredBufferSize: c };
  const m = r + c + 4 <= e.byteLength ? xe(new DataView(e, r + c, s === 8 ? 8 : 4), 0, t, s === 8) : null, p = r + n, C = /* @__PURE__ */ new Map();
  let S, g, w, i, d, v, b;
  for (let f = 0; f < o; f++) {
    g = new DataView(e, p + u * f, u), w = g.getUint16(0, t), d = g.getUint16(2, t), i = Te.getTagName(w, l);
    const T = [];
    s === 2 ? (v = g.getUint16(4, t), b = g.getUint16(6, t)) : s === 4 ? (v = g.getUint32(4, t), b = g.getUint32(8, t)) : s === 8 && (v = xe(g, 4, t, !0), b = xe(g, 12, t, !0), T.push(g.getUint32(12, t)), T.push(g.getUint32(16, t))), S = { id: w, type: d, valueCount: v, valueOffset: b, valueOffsets: T, values: null }, ur(e, t, S, a, !1, s), C.set(i, S);
  }
  return { success: !0, ifd: C, nextIFD: m, requiredBufferSize: c };
}
const ir = function(e, t) {
  return At(e, { inputOffset: t }).pixels[0];
};
async function $e(e, t, r, a, l) {
  var s, h;
  const o = ze === t, u = W(r, "BITSPERSAMPLE"), n = Rt((s = W(r, "SAMPLEFORMAT")) != null ? s : 1, u), c = (h = W(r, "COMPRESSION")) != null ? h : 1, m = Ge(n);
  let p, C, S, g, w, i, d;
  if (c === 34887)
    return await kt(), ir(e, a);
  if (c === 1)
    S = e.slice(a, a + l), g = new Uint8Array(S);
  else if (c === 8 || c === 32946)
    g = new Uint8Array(e, a, l), i = new ye(g), d = i.getBytes(), S = new ArrayBuffer(d.length), g = new Uint8Array(S), g.set(d);
  else if (c === 6) {
    g = new Uint8Array(e, a, l);
    const v = new Le();
    v.parse(g);
    const b = v.getData(v.width, v.height, !0);
    S = new ArrayBuffer(b.length), g = new Uint8Array(S), g.set(b);
  } else if (c === 7) {
    const v = r.get("JPEGTABLES").values, b = v.length - 2;
    g = new Uint8Array(b + l - 2);
    for (let A = 0; A < b; A++)
      g[A] = v[A];
    const f = new Uint8Array(e, a + 2, l - 2);
    for (let A = 0; A < f.length; A++)
      g[b + A] = f[A];
    const T = new Le();
    T.parse(g);
    const y = T.getData(T.width, T.height, !0);
    S = new ArrayBuffer(y.length), g = new Uint8Array(S), g.set(y);
  } else
    c === 5 && (g = We(e, a, l, t), S = g.buffer);
  if (n === "u8" || n === "s8" || o)
    C = new m(S);
  else {
    switch (S = new ArrayBuffer(g.length), w = new Uint8Array(S), n) {
      case "u16":
      case "s16":
        for (p = 0; p < g.length; p += 2)
          w[p] = g[p + 1], w[p + 1] = g[p];
        break;
      case "u32":
      case "s32":
      case "f32":
        for (p = 0; p < g.length; p += 4)
          w[p] = g[p + 3], w[p + 1] = g[p + 2], w[p + 2] = g[p + 1], w[p + 3] = g[p];
    }
    C = new m(S);
  }
  return C;
}
async function nr(e, t, r) {
  var a;
  const l = ge(r, "TILEOFFSETS");
  if (l === void 0)
    return null;
  const s = ge(r, "TILEBYTECOUNTS"), { width: h, height: o, pixelType: u, tileWidth: n, tileHeight: c } = Je([r]), m = He(r, t), p = t.planes, C = h * o, S = W(r, "BITSPERSAMPLE"), g = ((a = W(r, "COMPRESSION")) != null ? a : 1) === 34887, w = Ge(u), i = [];
  for (let _ = 0; _ < p; _++)
    i.push(new w(C));
  let d, v, b, f, T, y, A, k, R, D, x, I, E;
  const O = Math.ceil(h / n);
  if (S % 8 == 0)
    if (g && m && p > 1) {
      const _ = Math.round(l.length / p);
      for (d = 0; d < _; d++) {
        y = Math.floor(d / O) * c, A = d % O * n, k = y * h + A;
        for (let P = 0; P < p; P++) {
          const F = d * p + P;
          for (b = await $e(e, t.littleEndian, r, l[F], s[F]), D = 0, R = k, I = Math.min(n, h - A), x = Math.min(c, o - y), E = i[P], f = 0; f < x; f++)
            for (R = k + f * h, D = f * n, T = 0; T < I; T++, R++, D++)
              E[R] = b[D];
        }
      }
    } else
      for (d = 0; d < l.length; d++)
        for (y = Math.floor(d / O) * c, A = d % O * n, k = y * h + A, b = await $e(e, t.littleEndian, r, l[d], s[d]), D = 0, R = k, I = Math.min(n, h - A), x = Math.min(c, o - y), v = 0; v < p; v++)
          if (E = i[v], m || g)
            for (f = 0; f < x; f++)
              for (R = k + f * h, D = n * c * v + f * n, T = 0; T < I; T++, R++, D++)
                E[R] = b[D];
          else
            for (f = 0; f < x; f++)
              for (R = k + f * h, D = f * n * p + v, T = 0; T < I; T++, R++, D += p)
                E[R] = b[D];
  return { width: h, height: o, pixelType: u, pixels: i };
}
const ar = function(e, t, r) {
  var a;
  const l = ze === t.littleEndian, s = ge(r, "STRIPOFFSETS");
  if (s === void 0)
    return null;
  const { width: h, height: o, pixelType: u } = Je([r]), n = t.planes, c = h * o, m = W(r, "BITSPERSAMPLE"), p = Ge(u), C = new p(c * n), S = ge(r, "STRIPBYTECOUNTS"), g = W(r, "ROWSPERSTRIP"), w = (a = W(r, "COMPRESSION")) != null ? a : 1;
  let i, d, v, b, f, T, y, A, k, R, D, x = g;
  if (m % 8 == 0)
    for (i = 0; i < s.length; i++) {
      if (f = i * (g * h) * n, x = (i + 1) * g > o ? o - i * g : g, u === "u8" || u === "s8" || l) {
        if (w === 8 || w === 32946)
          y = new Uint8Array(e, s[i], S[i]), R = new ye(y), D = R.getBytes(), T = new ArrayBuffer(D.length), y = new Uint8Array(T), y.set(D), y.length !== x * h * n * m / 8 && console.log("strip byte counts is different than expected");
        else if (w === 6) {
          y = new Uint8Array(e, s[i], S[i]);
          const E = new Le();
          E.parse(y);
          const O = E.getData(E.width, E.height, !0);
          T = new ArrayBuffer(O.length), y = new Uint8Array(T), y.set(O);
        } else
          w === 5 ? (y = We(e, s[i], S[i], t.littleEndian), T = y.buffer) : w === 1 && (S[i] !== x * h * n * m / 8 && console.log("strip byte counts is different than expected"), T = e.slice(s[i], s[i] + S[i]));
        b = new p(T);
      } else {
        switch (w === 6 || w === 8 || w === 32946 ? (y = new Uint8Array(e, s[i], S[i]), R = new ye(y), y = R.getBytes(), T = new ArrayBuffer(y.length), A = new Uint8Array(T), y.length !== x * h * n * m / 8 && console.log("strip byte counts is different than expected")) : w === 1 && (S[i] !== x * h * n * m / 8 && console.log("strip byte counts is different than expected"), T = new ArrayBuffer(S[i]), y = new Uint8Array(e, s[i], S[i]), A = new Uint8Array(T)), u) {
          case "u16":
          case "s16":
            for (v = 0; v < y.length; v += 2)
              A[v] = y[v + 1], A[v + 1] = y[v];
            break;
          case "u32":
          case "s32":
          case "f32":
            for (v = 0; v < y.length; v += 4)
              A[v] = y[v + 3], A[v + 1] = y[v + 2], A[v + 2] = y[v + 1], A[v + 3] = y[v];
        }
        b = new p(T);
      }
      C.set(b, f);
    }
  const I = [];
  if (n === 1)
    I.push(C);
  else
    for (i = 0; i < n; i++) {
      for (k = new p(c), d = 0; d < c; d++)
        k[d] = C[d * n + i];
      I.push(k);
    }
  return { width: h, height: o, pixelType: u, pixels: I };
}, sr = function(e, t, r) {
  if (!(e && e.length > 0 && t && r))
    return null;
  let a, l, s;
  const h = e[0].length, o = e.length, u = new Uint8Array(h);
  for (let n = 0; n < o; n++)
    if (a = e[n], l = t[n], s = r[n], n === 0)
      for (let c = 0; c < h; c++)
        u[c] = a[c] < l || a[c] > s ? 0 : 1;
    else
      for (let c = 0; c < h; c++)
        u[c] && (u[c] = a[c] < l || a[c] > s ? 0 : 1);
  return u;
}, lr = function(e) {
  if (!e)
    return null;
  const t = e.match(/<Item(.*?)Item>/gi);
  if (!t || t.length === 0)
    return null;
  const r = /* @__PURE__ */ new Map();
  let a, l, s, h, o;
  for (let i = 0; i < t.length; i++)
    a = t[i], l = a.slice(6, a.indexOf(">")), h = a.indexOf("sample="), h > -1 && (o = a.slice(h + 8, a.indexOf('"', h + 8))), h = a.indexOf("name="), h > -1 && (l = a.slice(h + 6, a.indexOf('"', h + 6))), l && (s = a.slice(a.indexOf(">") + 1, a.indexOf("</Item>")).trim(), o != null ? r.has(l) ? r.get(l)[o] = s : r.set(l, [s]) : r.set(l, s)), o = null;
  const u = r.get("STATISTICS_MINIMUM"), n = r.get("STATISTICS_MAXIMUM"), c = r.get("STATISTICS_MEAN"), m = r.get("STATISTICS_STDDEV");
  let p = null;
  if (u && n) {
    p = [];
    for (let i = 0; i < u.length; i++)
      p.push({ min: parseFloat(u[i]), max: parseFloat(n[i]), avg: c && parseFloat(c[i]), stddev: m && parseFloat(m[i]) });
  }
  const C = r.get("BandName"), S = r.get("WavelengthMin"), g = r.get("WavelengthMax");
  let w = null;
  if (C) {
    w = [];
    for (let i = 0; i < C.length; i++)
      w.push({ BandName: C[i], WavelengthMin: S && parseFloat(S[i]), WavelengthMax: g && parseFloat(g[i]) });
  }
  return { statistics: p, bandProperties: w, dataType: r.get("DataType"), rawMetadata: r };
};
function ur(e, t, r, a = 0, l = !1, s = 4) {
  if (r.values)
    return !0;
  const h = r.type, o = r.valueCount;
  let u = r.valueOffset, n = [];
  const c = ht[h], m = 8 * c, p = o * c, C = o * ht[h] * 8;
  let S, g;
  const w = s === 8 ? 64 : 32, i = r.valueOffsets;
  if (C > w && p > (l ? e.byteLength : e ? e.byteLength - u + a : 0))
    return r.offlineOffsetSize = [u, p], r.values = null, !1;
  if (C <= w) {
    if (!t)
      if (w <= 32)
        u >>>= 32 - C;
      else {
        const d = i != null && i.length ? i[0] : u >>> 0, v = i != null && i.length ? i[1] : Math.round((u - d) / Se);
        C <= 32 ? (u = d >>> 32 - C, i[0] = u) : (u = d * 2 ** (32 - C) + (v >>> 32 - C), i[0] = d, i[1] = v >>> 32 - C);
      }
    if (o === 1 && m === w)
      n = [u];
    else if (w === 64) {
      const d = i != null && i.length ? i[0] : u >>> 0, v = i != null && i.length ? i[1] : Math.round((u - d) / Se);
      let b = d, f = 32;
      for (g = 1; g <= o; g++) {
        const T = 32 - m * g % 32;
        if (f < m) {
          const y = b << T >>> 32 - f, A = v << 32 - f >>> 32 - f;
          b = v, n.push(y + A * 2 ** (m - f)), f -= 32 - (m - f);
        } else
          n.push(b << T >>> 32 - m), f -= m;
        f === 0 && (f = 32, b = v);
      }
    } else
      for (g = 1; g <= o; g++) {
        const d = 32 - m * g;
        n.push(u << d >>> 32 - m);
      }
  } else {
    u -= a, l && (u = 0);
    for (let d = u; d < u + p; d += c) {
      switch (h) {
        case 1:
        case 2:
        case 7:
          S = new DataView(e, d, 1).getUint8(0);
          break;
        case 3:
          S = new DataView(e, d, 2).getUint16(0, t);
          break;
        case 4:
        case 13:
          S = new DataView(e, d, 4).getUint32(0, t);
          break;
        case 5:
          S = new DataView(e, d, 4).getUint32(0, t) / new DataView(e, d + 4, 4).getUint32(0, t);
          break;
        case 6:
          S = new DataView(e, d, 1).getInt8(0);
          break;
        case 8:
          S = new DataView(e, d, 2).getInt16(0, t);
          break;
        case 9:
          S = new DataView(e, d, 4).getInt32(0, t);
          break;
        case 10:
          S = new DataView(e, d, 4).getInt32(0, t) / new DataView(e, d + 4, 4).getInt32(0, t);
          break;
        case 11:
          S = new DataView(e, d, 4).getFloat32(0, t);
          break;
        case 12:
          S = new DataView(e, d, 8).getFloat64(0, t);
          break;
        case 16:
        case 18:
          S = qe(new DataView(e, d, 8), 0, t);
          break;
        case 17:
          S = fr(new DataView(e, d, 8), 0, t);
          break;
        default:
          S = null;
      }
      n.push(S);
    }
  }
  if (h === 2) {
    let d = "";
    const v = n;
    for (n = [], g = 0; g < v.length; g++)
      v[g] === 0 && d !== "" ? (n.push(d), d = "") : d += String.fromCharCode(v[g]);
    d === "" && n.length !== 0 || n.push(d);
  }
  return r.values = n, !0;
}
function Je(e) {
  var t, r;
  const a = e[0], l = W(a, "TILEWIDTH"), s = W(a, "TILELENGTH"), h = W(a, "IMAGEWIDTH"), o = W(a, "IMAGELENGTH"), u = W(a, "BITSPERSAMPLE"), n = W(a, "SAMPLESPERPIXEL"), c = (t = W(a, "SAMPLEFORMAT")) != null ? t : 1, m = Rt(c, u), p = He(a), C = Dt(a, "GDAL_NODATA");
  let S;
  C != null && C.length && (S = C.map((L) => parseFloat(L)), S.some((L) => isNaN(L)) && (S = null));
  const g = (r = W(a, "COMPRESSION")) != null ? r : 1;
  let w;
  switch (g) {
    case 1:
      w = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      w = "CCITT";
      break;
    case 5:
      w = "LZW";
      break;
    case 6:
    case 7:
      w = "JPEG";
      break;
    case 32773:
      w = "PACKBITS";
      break;
    case 8:
    case 32946:
      w = "DEFLATE";
      break;
    case 34712:
      w = "JPEG2000";
      break;
    case 34887:
      w = "LERC";
      break;
    default:
      w = String(g);
  }
  let i = !0, d = "";
  rr.has(g) || (i = !1, d += "unsupported tag compression " + g), c > 3 && (i = !1, d += "unsupported tag sampleFormat " + c), u % 8 != 0 && (i = !1, d += "unsupported tag bitsPerSample " + u);
  const v = Ne(a, "GEOASCIIPARAMS");
  let b;
  if (v) {
    const L = v.split("|").find((B) => B.indexOf("ESRI PE String = ") > -1), U = L ? L.replace("ESRI PE String = ", "") : "";
    b = U.startsWith("COMPD_CS") || U.startsWith("PROJCS") || U.startsWith("GEOGCS") ? { wkid: null, wkt: U } : null;
  }
  const f = ge(a, "GEOTIEPOINTS"), T = ge(a, "GEOPIXELSCALE"), y = ge(a, "GEOTRANSMATRIX"), A = a.has("GEOKEYDIRECTORY") ? a.get("GEOKEYDIRECTORY").data : null;
  let k, R, D = !1;
  if (A) {
    D = W(A, "GTRasterTypeGeoKey") === 2;
    const L = W(A, "GTModelTypeGeoKey");
    if (L === 2) {
      const U = W(A, "GeographicTypeGeoKey");
      U >= 1024 && U <= 32766 && (b = { wkid: U });
    } else if (L === 1) {
      const U = W(A, "ProjectedCSTypeGeoKey");
      U >= 1024 && U <= 32766 && (b = { wkid: U });
    }
  }
  if (T && f && f.length >= 6 ? (k = [T[0], 0, f[3] - f[0] * T[0], 0, -Math.abs(T[1]), f[4] - f[1] * T[1]], D && (k[2] -= 0.5 * k[0] + 0.5 * k[1], k[5] -= 0.5 * k[3] + 0.5 * k[4])) : y && y.length === 16 && (k = D ? [y[0], y[1], y[3] - 0.5 * y[0], y[4], y[5], y[7] - 0.5 * y[5]] : [y[0], y[1], y[3], y[4], y[5], y[7]]), k) {
    const L = [{ x: 0, y: o }, { x: 0, y: 0 }, { x: h, y: o }, { x: h, y: 0 }];
    let U, B = Number.POSITIVE_INFINITY, M = Number.POSITIVE_INFINITY, N = Number.NEGATIVE_INFINITY, H = Number.NEGATIVE_INFINITY;
    for (let q = 0; q < L.length; q++)
      U = or(L[q], k), B = U.x > B ? B : U.x, N = U.x < N ? N : U.x, M = U.y > M ? M : U.y, H = U.y < H ? H : U.y;
    R = { xmin: B, xmax: N, ymin: M, ymax: H, spatialReference: b };
  } else
    R = { xmin: -0.5, ymin: 0.5 - o, xmax: h - 0.5, ymax: 0.5, spatialReference: b };
  const x = e.filter((L) => Ne(L, "NEWSUBFILETYPE") === 1);
  let I, E, O, _, P;
  if (x.length > 0) {
    I = Math.round(Math.log(h / W(x[0], "IMAGEWIDTH")) / Math.LN2);
    const L = x[x.length - 1];
    E = Math.round(Math.log(h / W(L, "IMAGEWIDTH")) / Math.LN2), O = W(L, "TILEWIDTH"), _ = W(L, "TILELENGTH");
  }
  O = E > 0 ? O || l : null, _ = E > 0 ? _ || s : null, l && (P = [{ maxCol: Math.ceil(h / l) - 1, maxRow: Math.ceil(o / s) - 1, minRow: 0, minCol: 0 }], x.forEach((L) => {
    P.push({ maxCol: Math.ceil(W(L, "IMAGEWIDTH") / W(L, "TILEWIDTH")) - 1, maxRow: Math.ceil(W(L, "IMAGELENGTH") / W(L, "TILELENGTH")) - 1, minRow: 0, minCol: 0 });
  }));
  const F = Ne(e[0], "GDAL_METADATA"), V = lr(F);
  return d += " " + Et({ width: h, height: o, tileWidth: l, tileHeight: s, planes: n, ifds: e }), { width: h, height: o, tileWidth: l, tileHeight: s, planes: n, isBSQ: p, pixelType: m, compression: w, noData: S, isSupported: i, message: d, extent: R, affine: T ? null : k, firstPyramidLevel: I, maximumPyramidLevel: E, pyramidBlockWidth: O, pyramidBlockHeight: _, tileBoundary: P, metadata: V };
}
function He(e, t) {
  const r = Dt(e, "PLANARCONFIGURATION");
  return r ? r[0] === 2 : !!t && t.isBSQ;
}
function cr(e) {
  const { littleEndian: t, isBigTiff: r, firstIFD: a } = hr(e);
  let l = a;
  const s = [];
  do {
    const h = dr(e, t, l, 0, Te.TIFF_TAGS, r ? 8 : 4);
    if (!h.success)
      break;
    s.push(h.ifd), l = h.nextIFD;
  } while (l > 0);
  return { ...Je(s), littleEndian: t, isBigTiff: r, ifds: s };
}
function qe(e, t, r) {
  const a = e.getUint32(t, r), l = e.getUint32(t + 4, r);
  return r ? l * Se + a : a * Se + l;
}
function fr(e, t, r) {
  let a = r ? e.getInt32(t, r) : e.getUint32(t, r), l = r ? e.getUint32(t + 4, r) : e.getInt32(t + 4, r);
  const s = (r ? a : l) >= 0 ? 1 : -1;
  return r ? a *= s : l *= s, s * (r ? l * Se + a : a * Se + l);
}
function xe(e, t, r, a) {
  return a ? qe(e, t, r) : e.getUint32(t, r);
}
function hr(e) {
  const t = new DataView(e, 0, 16), r = t.getUint16(0, !1);
  let a = null;
  if (r === 18761)
    a = !0;
  else {
    if (r !== 19789)
      throw "unexpected endianess byte";
    a = !1;
  }
  const l = t.getUint16(2, a);
  if (l !== 42 && l !== 43)
    throw "unexpected tiff identifier";
  let s = 4;
  const h = l === 43;
  if (h) {
    const o = t.getUint16(s, a);
    if (s += 2, o !== 8 || t.getUint16(s, a) !== 0)
      throw "unsupported bigtiff version";
    s += 2;
  }
  return { littleEndian: a, isBigTiff: h, firstIFD: xe(t, s, a, h) };
}
function dr(e, t, r, a = 0, l = Te.TIFF_TAGS, s = 4) {
  const h = Fe(e, t, r, a, l, s);
  let o;
  const u = h.ifd;
  if (u) {
    if (Te.ifdTags.forEach((n, c) => {
      u.has(c) && (o = u.get(c), o.data = Fe(e, t, o.valueOffset - a, a, n).ifd);
    }), u.has("GEOKEYDIRECTORY")) {
      o = u.get("GEOKEYDIRECTORY");
      const n = o.values;
      if (n && n.length > 4) {
        const c = n[0] + "." + n[1] + "." + n[2];
        o.data = Fe(e, t, o.valueOffset + 6 - a, a, Te.GEO_KEYS, 2).ifd, o.data && o.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [c] });
      }
    }
    if (u.has("XMP")) {
      o = u.get("XMP");
      const n = o.values;
      typeof n[0] == "number" && o.type === 7 && (o.values = [Xt(new Uint8Array(n))]);
    }
  }
  return h;
}
function Et(e) {
  const { width: t, height: r, tileHeight: a, tileWidth: l } = e, s = e.planes, h = l ? l * a : t * r, o = W(e.ifds[0], "BITSPERSAMPLE");
  let u = "";
  return h * s > 2 ** 30 / (o > 8 ? o / 8 : 1) && (u = l ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), u;
}
async function pr(e, t) {
  var r;
  const { headerInfo: a, ifd: l, offsets: s, sizes: h } = t, o = [];
  for (let R = 0; R < s.length; R++) {
    const D = await $e(e, a.littleEndian, l, s[R], h[R] || e.byteLength);
    o.push(D);
  }
  const u = He(l, a), { pixelType: n, planes: c } = a, m = Ge(n), p = W(l, "TILEWIDTH"), C = W(l, "TILELENGTH"), S = (r = W(l, "COMPRESSION")) != null ? r : 1, g = p * C;
  let w;
  const i = [];
  let d = o[0];
  const v = S === 34887;
  for (let R = 0; R < c; R++) {
    if (w = new m(g), u && v) {
      d = o[R];
      for (let D = 0; D < g; D++)
        w[D] = d[R][D + R];
    } else if (u || v && !u)
      w = d.slice(g * R, g * (R + 1));
    else
      for (let D = 0; D < g; D++)
        w[D] = d[D * c + R];
    i.push(w);
  }
  const b = a.noData ? a.noData[0] : null, f = a.metadata ? a.metadata.statistics : null, T = f ? f.map((R) => R.min) : null, y = f ? f.map((R) => R.max) : null;
  let A, k;
  if (b != null)
    if (A = new Uint8Array(g), Math.abs(b) > 1e24)
      for (k = 0; k < g; k++)
        Math.abs((i[0][k] - b) / b) < 1e-6 ? A[k] = 0 : A[k] = 1;
    else
      for (k = 0; k < g; k++)
        i[0][k] === b ? A[k] = 0 : A[k] = 1;
  else
    T && y && t.applyMinMaxConstraint && (A = sr(i, T, y));
  return { pixelType: n, width: p, height: C, pixels: i, mask: A, noDataValue: b };
}
async function mr(e, t = 0, r) {
  r = r || cr(e);
  const { ifds: a, noData: l } = r;
  if (a.length === 0)
    throw "no valid image file directory";
  const s = Et(r);
  if (s)
    throw s;
  let h, o;
  const u = t === -1 ? a[a.length - 1] : a[t], n = l ? l[0] : null;
  if (o = r.tileWidth ? await nr(e, r, u) : await ar(e, r, u), n !== null) {
    if (o.mask = new Uint8Array(o.width * o.height), Math.abs(n) > 1e24)
      for (h = 0; h < o.width * o.height; h++)
        Math.abs((o.pixels[0][h] - n) / n) < 1e-6 ? o.mask[h] = 0 : o.mask[h] = 1;
    else
      for (h = 0; h < o.width * o.height; h++)
        o.pixels[0][h] === n ? o.mask[h] = 0 : o.mask[h] = 1;
    o.noDataValue = n;
  }
  return o;
}
var gr = function(e) {
  var t, r, a, l, s, h;
  function o(u) {
    var n, c, m, p, C, S, g, w, i, d, v, b, f;
    for (this.data = u, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, C = null; ; ) {
      switch (n = this.readUInt32(), w = (function() {
        var T, y;
        for (y = [], T = 0; T < 4; ++T)
          y.push(String.fromCharCode(this.data[this.pos++]));
        return y;
      }).call(this).join(""), w) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(n);
          break;
        case "fcTL":
          C && this.animation.frames.push(C), this.pos += 4, C = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, p = this.readUInt16(), m = this.readUInt16() || 100, C.delay = 1e3 * p / m, C.disposeOp = this.data[this.pos++], C.blendOp = this.data[this.pos++], C.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (w === "fdAT" && (this.pos += 4, n -= 4), u = (C != null ? C.data : void 0) || this.imgData, v = 0; 0 <= n ? v < n : v > n; 0 <= n ? ++v : --v)
            u.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(n), (i = 255 - this.transparency.indexed.length) > 0)
                for (b = 0; 0 <= i ? b < i : b > i; 0 <= i ? ++b : --b)
                  this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(n)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(n);
          }
          break;
        case "tEXt":
          S = (d = this.read(n)).indexOf(0), g = String.fromCharCode.apply(String, d.slice(0, S)), this.text[g] = String.fromCharCode.apply(String, d.slice(S + 1));
          break;
        case "IEND":
          return C && this.animation.frames.push(C), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (f = this.colorType) === 4 || f === 6, c = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * c, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += n;
      }
      if (this.pos += 4, this.pos > this.data.length)
        throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return o.load = function(u, n, c) {
    var m;
    return typeof n == "function" && (c = n), (m = new XMLHttpRequest()).open("GET", u, !0), m.responseType = "arraybuffer", m.onload = function() {
      var p;
      return p = new o(new Uint8Array(m.response || m.mozResponseArrayBuffer)), typeof (n != null ? n.getContext : void 0) == "function" && p.render(n), typeof c == "function" ? c(p) : void 0;
    }, m.send(null);
  }, r = 1, a = 2, t = 0, o.prototype.read = function(u) {
    var n, c;
    for (c = [], n = 0; 0 <= u ? n < u : n > u; 0 <= u ? ++n : --n)
      c.push(this.data[this.pos++]);
    return c;
  }, o.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o.prototype.decodePixels = function(u) {
    var n, c, m, p, C, S, g, w, i, d, v, b, f, T, y, A, k, R, D, x, I, E, O;
    if (u == null && (u = this.imgData), u.length === 0)
      return new Uint8Array(0);
    for (u = (u = new ye(u)).getBytes(), A = (b = this.pixelBitlength / 8) * this.width, f = new Uint8Array(A * this.height), S = u.length, y = 0, T = 0, c = 0; T < S; ) {
      switch (u[T++]) {
        case 0:
          for (p = D = 0; D < A; p = D += 1)
            f[c++] = u[T++];
          break;
        case 1:
          for (p = x = 0; x < A; p = x += 1)
            n = u[T++], C = p < b ? 0 : f[c - b], f[c++] = (n + C) % 256;
          break;
        case 2:
          for (p = I = 0; I < A; p = I += 1)
            n = u[T++], m = (p - p % b) / b, k = y && f[(y - 1) * A + m * b + p % b], f[c++] = (k + n) % 256;
          break;
        case 3:
          for (p = E = 0; E < A; p = E += 1)
            n = u[T++], m = (p - p % b) / b, C = p < b ? 0 : f[c - b], k = y && f[(y - 1) * A + m * b + p % b], f[c++] = (n + Math.floor((C + k) / 2)) % 256;
          break;
        case 4:
          for (p = O = 0; O < A; p = O += 1)
            n = u[T++], m = (p - p % b) / b, C = p < b ? 0 : f[c - b], y === 0 ? k = R = 0 : (k = f[(y - 1) * A + m * b + p % b], R = m && f[(y - 1) * A + (m - 1) * b + p % b]), g = C + k - R, w = Math.abs(g - C), d = Math.abs(g - k), v = Math.abs(g - R), i = w <= d && w <= v ? C : d <= v ? k : R, f[c++] = (n + i) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + u[T - 1]);
      }
      y++;
    }
    return f;
  }, o.prototype.decodePalette = function() {
    var u, n, c, m, p, C, S, g, w;
    for (c = this.palette, C = this.transparency.indexed || [], p = new Uint8Array((C.length || 0) + c.length), m = 0, u = 0, n = S = 0, g = c.length; S < g; n = S += 3)
      p[m++] = c[n], p[m++] = c[n + 1], p[m++] = c[n + 2], p[m++] = (w = C[u++]) != null ? w : 255;
    return p;
  }, o.prototype.copyToImageData = function(u, n) {
    var c, m, p, C, S, g, w, i, d, v, b;
    if (m = this.colors, d = null, c = this.hasAlphaChannel, this.palette.length && (d = (b = this._decodedPalette) != null ? b : this._decodedPalette = this.decodePalette(), m = 4, c = !0), i = (p = u.data || u).length, S = d || n, C = g = 0, m === 1)
      for (; C < i; )
        w = d ? 4 * n[C / 4] : g, v = S[w++], p[C++] = v, p[C++] = v, p[C++] = v, p[C++] = c ? S[w++] : this.transparency.grayscale && this.transparency.grayscale === v ? 0 : 255, g = w;
    else
      for (; C < i; )
        w = d ? 4 * n[C / 4] : g, p[C++] = S[w++], p[C++] = S[w++], p[C++] = S[w++], p[C++] = c ? S[w++] : this.transparency.rgb && this.transparency.rgb[1] === S[w - 3] && this.transparency.rgb[3] === S[w - 2] && this.transparency.rgb[5] === S[w - 1] ? 0 : 255, g = w;
  }, o.prototype.decode = function() {
    var u;
    return u = new Uint8Array(this.width * this.height * 4), this.copyToImageData(u, this.decodePixels()), u;
  }, s = e.document && e.document.createElement("canvas"), h = s && s.getContext("2d"), l = function(u) {
    var n;
    return h.width = u.width, h.height = u.height, h.clearRect(0, 0, u.width, u.height), h.putImageData(u, 0, 0), (n = new Image()).src = s.toDataURL(), n;
  }, o.prototype.decodeFrames = function(u) {
    var n, c, m, p, C, S, g, w;
    if (this.animation) {
      for (w = [], c = C = 0, S = (g = this.animation.frames).length; C < S; c = ++C)
        n = g[c], m = u.createImageData(n.width, n.height), p = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(m, p), n.imageData = m, w.push(n.image = l(m));
      return w;
    }
  }, o.prototype.renderFrame = function(u, n) {
    var c, m, p;
    return c = (m = this.animation.frames)[n], p = m[n - 1], n === 0 && u.clearRect(0, 0, this.width, this.height), (p != null ? p.disposeOp : void 0) === r ? u.clearRect(p.xOffset, p.yOffset, p.width, p.height) : (p != null ? p.disposeOp : void 0) === a && u.putImageData(p.imageData, p.xOffset, p.yOffset), c.blendOp === t && u.clearRect(c.xOffset, c.yOffset, c.width, c.height), u.drawImage(c.image, c.xOffset, c.yOffset);
  }, o.prototype.animate = function(u) {
    var n, c, m, p, C, S, g = this;
    return c = 0, S = this.animation, p = S.numFrames, m = S.frames, C = S.numPlays, (n = function() {
      var w, i;
      if (w = c++ % p, i = m[w], g.renderFrame(u, w), p > 1 && c / p < C)
        return g.animation._timeout = setTimeout(n, i.delay);
    })();
  }, o.prototype.stopAnimation = function() {
    var u;
    return clearTimeout((u = this.animation) != null ? u._timeout : void 0);
  }, o.prototype.render = function(u) {
    var n, c;
    return u._png && u._png.stopAnimation(), u._png = this, u.width = this.width, u.height = this.height, n = u.getContext("2d"), this.animation ? (this.decodeFrames(n), this.animate(n)) : (c = n.createImageData(this.width, this.height), this.copyToImageData(c, this.decodePixels()), n.putImageData(c, 0, 0));
  }, o;
}(self);
const yr = /* @__PURE__ */ new Set(["jpg", "png", "bmp", "gif"]), Cr = /* @__PURE__ */ new Set(["S8", "U8", "S16", "U16", "S32", "U32", "F32", "F64"]);
async function wr(e, t) {
  var r;
  if (!ze)
    throw new ce("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  await kt();
  const { offset: a, noDataValue: l } = t;
  let s = (r = t.pixelType) == null ? void 0 : r.toUpperCase();
  s && !Cr.has(s) && (s = null);
  const { width: h, height: o, pixelType: u, statistics: n, pixels: c, mask: m } = At(e, { inputOffset: a, noDataValue: l, pixelType: s });
  return new ae({ width: h, height: o, pixelType: u.toLowerCase(), pixels: c, mask: m, statistics: n });
}
async function br(e, t) {
  const r = await mr(e, t.pyramidLevel || 0), a = new ae({ width: r.width, height: r.height, pixels: r.pixels, pixelType: r.pixelType.toLowerCase(), mask: r.mask, statistics: null });
  return a.updateStatistics(), a;
}
async function vr(e, t) {
  const r = await pr(e, t.customOptions), a = new ae({ width: r.width, height: r.height, pixels: r.pixels, pixelType: r.pixelType.toLowerCase(), mask: r.mask, statistics: null });
  return a.updateStatistics(), a;
}
function xt(e, t) {
  const r = t.pixelType || "u8", a = ae.getPixelArrayConstructor(r), l = r === "u8" ? e : new a(e.buffer), s = [], h = t.planes || 1;
  if (h === 1)
    s.push(l);
  else
    for (let u = 0; u < h; u++) {
      const n = (t.width || 1) * (t.height || e.length), c = new a(n);
      for (let m = 0; m < n; m++)
        c[m] = l[m * h + u];
      s.push(c);
    }
  const o = new ae({ width: t.width || 1, height: t.height || e.length, pixels: s, pixelType: r, statistics: null });
  return o.updateStatistics(), o;
}
function Tr(e, t) {
  return xt(new ye(new Uint8Array(e)).getBytes(), t);
}
function Sr(e, t) {
  return xt(We(e, t.offset, t.eof, !t.isInputBigEndian), t);
}
function kr(e, t, r) {
  const { pixelTypeCtor: a } = Er(t.pixelType), l = (0, qt.decode)(e, { width: t.width, height: t.height, pixelType: a, format: r }), s = new ae({ width: t.width, height: t.height, pixels: l.pixels, pixelType: t.pixelType, mask: l.mask, statistics: null });
  return s.updateStatistics(), s;
}
function Ar(e) {
  const t = Kt.decode(e), r = new ae({ width: t.width, height: t.height, pixels: t.pixels, pixelType: "U8", mask: t.mask, statistics: null });
  return r.updateStatistics(), r;
}
function Ir(e, t) {
  const r = new Uint8Array(e), a = new gr(r), { width: l, height: s } = t, h = l * s, o = a.decode();
  let u, n = 0, c = 0;
  const m = new Uint8Array(h);
  for (n = 0; n < h; n++)
    m[n] = o[4 * n + 3];
  const p = new ae({ width: l, height: s, pixels: [], pixelType: "U8", mask: m, statistics: [] });
  for (n = 0; n < 3; n++) {
    for (u = new Uint8Array(h), c = 0; c < h; c++)
      u[c] = o[4 * c + n];
    p.addData({ pixels: u });
  }
  return p.updateStatistics(), p;
}
async function Rr(e, t, r, a) {
  const l = new jt(), s = { applyJpegMask: !1, format: t, ...r }, h = await l.decode(e, s, a), o = new ae(h);
  return o.updateStatistics(), o;
}
function Pt(e) {
  if (e == null)
    throw new ce("rasterCodec:decode", "parameter encodeddata is required.");
  const t = new Uint8Array(e, 0, 10);
  let r = "";
  return t[0] === 255 && t[1] === 216 ? r = "jpg" : t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71 ? r = "png" : t[0] === 67 && t[1] === 110 && t[2] === 116 && t[3] === 90 && t[4] === 73 && t[5] === 109 && t[6] === 97 && t[7] === 103 && t[8] === 101 && t[9] === 32 ? r = "lerc" : t[0] === 76 && t[1] === 101 && t[2] === 114 && t[3] === 99 && t[4] === 50 && t[5] === 32 ? r = "lerc2" : t[0] === 73 && t[1] === 73 && t[2] === 42 && t[3] === 0 || t[0] === 77 && t[1] === 77 && t[2] === 0 && t[3] === 42 || t[0] === 73 && t[1] === 73 && t[2] === 43 && t[3] === 0 || t[0] === 77 && t[1] === 77 && t[2] === 0 && t[3] === 43 ? r = "tiff" : t[0] === 71 && t[1] === 73 && t[2] === 70 ? r = "gif" : t[0] === 66 && t[1] === 77 ? r = "bmp" : String.fromCharCode.apply(null, t).toLowerCase().indexOf("error") > -1 && (r = "error"), r;
}
function Dr(e) {
  let t = null;
  switch (e) {
    case "lerc":
    case "lerc2":
      t = wr;
      break;
    case "jpg":
      t = Ar;
      break;
    case "png":
      t = Ir;
      break;
    case "bsq":
    case "bip":
      t = (r, a) => kr(r, a, e);
      break;
    case "tiff":
      t = br;
      break;
    case "deflate":
      t = Tr;
      break;
    case "lzw":
      t = Sr;
      break;
    case "error":
      t = () => {
        throw new ce("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      t = () => {
        throw new ce("rasterCodec:decode", "unsupported raster format");
      };
  }
  return t;
}
function Er(e) {
  let t = null, r = null;
  switch (e ? e.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      r = 255, t = Uint8Array;
      break;
    case "u16":
      r = r || 65535, t = Uint16Array;
      break;
    case "u32":
      r = r || 2 ** 32 - 1, t = Uint32Array;
      break;
    case "s8":
      r = r || -128, t = Int8Array;
      break;
    case "s16":
      r = r || -32768, t = Int16Array;
      break;
    case "s32":
      r = r || 0 - 2 ** 31, t = Int32Array;
      break;
    default:
      t = Float32Array;
  }
  return { pixelTypeCtor: t, noDataValue: r };
}
function xr(e, t = 1) {
  if (!e)
    return;
  const { pixels: r, width: a, height: l, mask: s } = e;
  if (!r || r.length === 0)
    return;
  const h = r.length, o = a - 1, u = l - 1, n = [];
  let c, m, p, C, S, g, w;
  const i = ae.getPixelArrayConstructor(e.pixelType);
  if (t === 0) {
    for (c = 0; c < h; c++) {
      for (S = r[c], g = new i(o * u), m = 0; m < u; m++)
        for (C = m * a, p = 0; p < o; p++)
          g[m * o + p] = S[C + p];
      n.push(g);
    }
    if (s)
      for (w = new Uint8Array(o * u), m = 0; m < u; m++)
        for (C = m * a, p = 0; p < o; p++)
          w[m * o + p] = s[C + p];
  } else {
    for (c = 0; c < h; c++) {
      for (S = r[c], g = new i(o * u), m = 0; m < u; m++)
        for (C = m * a, p = 0; p < o; p++)
          g[m * o + p] = (S[C + p] + S[C + p + 1] + S[C + a + p] + S[C + a + p + 1]) / 4;
      n.push(g);
    }
    if (s)
      for (w = new Uint8Array(o * u), m = 0; m < u; m++)
        for (C = m * a, p = 0; p < o; p++)
          w[m * o + p] = Math.min.apply(null, [s[C + p], s[C + p + 1], s[C + a + p], s[C + a + p + 1]]);
  }
  e.width = o, e.height = u, e.mask = w, e.pixels = n;
}
function Jr(e) {
  let t = Pt(e);
  return t === "lerc2" ? t = "lerc" : t === "error" && (t = ""), t;
}
async function Hr(e, t = {}, r) {
  if (e == null)
    throw new ce("rasterCodec:decode", "missing encodeddata parameter.");
  let a, l, s = t.format && t.format.toLowerCase();
  if (!(s !== "bsq" && s !== "bip" || t.width != null && t.height != null))
    throw new ce("rasterCodec:decode", "requires width and height in options parameter.");
  return s === "tiff" && t.customOptions ? vr(e, t) : ((!s || s !== "bsq" && s !== "bip" && s !== "deflate" && s !== "lzw") && (s = Pt(e)), t.useCanvas && yr.has(s) ? l = await Rr(e, s, t, r) : (a = Dr(s), t.isPoint && ((t = { ...t }).width++, t.height++), l = await a(e, t), t.isPoint && xr(l)), l);
}
let Q = class extends Ke {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isVirtualTileInfo = !1, this.tileInfo = null, this.blockBoundary = null;
  }
};
$([K({ type: Number, json: { write: !0 } })], Q.prototype, "blockWidth", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "blockHeight", void 0), $([K({ type: String, json: { write: !0 } })], Q.prototype, "compression", void 0), $([K({ type: Bt, json: { write: !0 } })], Q.prototype, "origin", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "firstPyramidLevel", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "maximumPyramidLevel", void 0), $([K({ json: { write: !0 } })], Q.prototype, "pyramidResolutions", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "pyramidScalingFactor", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "pyramidBlockWidth", void 0), $([K({ type: Number, json: { write: !0 } })], Q.prototype, "pyramidBlockHeight", void 0), $([K({ type: Boolean, json: { write: !0 } })], Q.prototype, "isVirtualTileInfo", void 0), $([K({ json: { write: !0 } })], Q.prototype, "tileInfo", void 0), $([K()], Q.prototype, "blockBoundary", void 0), Q = $([je("geoscene.layers.support.RasterStorageInfo")], Q);
const Pr = Q;
let J = class extends Ke {
  constructor(t) {
    super(t), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = !1, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get dataType() {
    var t, r, a;
    const l = (t = (r = this.keyProperties) == null || (a = r.DataType) == null ? void 0 : a.toLowerCase()) != null ? t : "generic";
    return l === "stdtime" ? "standard-time" : l;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t) {
    t && this._set("nativeExtent", t);
  }
  get nativePixelSize() {
    if (!te(this.transform) || !this.transform.affectsPixelSize)
      return this.pixelSize;
    const t = this.nativeExtent;
    return { x: t.width / this.width, y: t.height / this.height };
  }
};
$([K({ json: { write: !0 } })], J.prototype, "attributeTable", void 0), $([K({ json: { write: !0 } })], J.prototype, "bandCount", void 0), $([K({ json: { write: !0 } })], J.prototype, "colormap", void 0), $([K({ type: String, readOnly: !0 })], J.prototype, "dataType", null), $([K({ type: Xe, json: { write: !0 } })], J.prototype, "extent", void 0), $([K({ type: Xe, json: { write: !0 } })], J.prototype, "nativeExtent", null), $([K({ json: { write: !0 } })], J.prototype, "nativePixelSize", null), $([K({ json: { write: !0 } })], J.prototype, "format", void 0), $([K({ json: { write: !0 } })], J.prototype, "height", void 0), $([K({ json: { write: !0 } })], J.prototype, "width", void 0), $([K({ json: { write: !0 } })], J.prototype, "histograms", void 0), $([K({ json: { write: !0 } })], J.prototype, "keyProperties", void 0), $([K({ json: { write: !0 } })], J.prototype, "multidimensionalInfo", void 0), $([K()], J.prototype, "noDataValue", void 0), $([K({ json: { write: !0 } })], J.prototype, "pixelSize", void 0), $([K({ json: { write: !0 } })], J.prototype, "pixelType", void 0), $([K()], J.prototype, "isPseudoSpatialReference", void 0), $([K({ type: Mt, json: { write: !0 } })], J.prototype, "spatialReference", void 0), $([K({ json: { write: !0 } })], J.prototype, "statistics", void 0), $([K({ type: Pr, json: { write: !0 } })], J.prototype, "storageInfo", void 0), $([K({ json: { write: !0 } })], J.prototype, "transform", void 0), J = $([je("geoscene.layers.support.RasterInfo")], J);
const Lr = J;
function Lt(e) {
  let { altitude: t, azimuth: r } = e;
  const { hillshadeType: a, pixelSizePower: l, pixelSizeFactor: s, scalingType: h, isGCS: o, resolution: u } = e, n = a === "multi-directional" ? 2 * e.zFactor : e.zFactor, { x: c, y: m } = u;
  let p = n / (8 * c), C = n / (8 * m);
  if (o && n > 1e-3 && (p /= 111e3, C /= 111e3), h === "adjusted")
    if (o) {
      const x = 111e3 * c, I = 111e3 * m;
      p = (n + x ** l * s) / (8 * x), C = (n + I ** l * s) / (8 * I);
    } else
      p = (n + c ** l * s) / (8 * c), C = (n + m ** l * s) / (8 * m);
  let S = (90 - t) * Math.PI / 180, g = Math.cos(S), w = (360 - r + 90) * Math.PI / 180, i = Math.sin(S) * Math.cos(w), d = Math.sin(S) * Math.sin(w);
  const v = [315, 270, 225, 360, 180, 0], b = [60, 60, 60, 60, 60, 90], f = new Float32Array([3, 5, 3, 2, 1, 4]), T = f.reduce((x, I) => x + I), y = f.map((x) => x / T), A = a === "multi-directional" ? v.length : 1, k = new Float32Array(6), R = new Float32Array(6), D = new Float32Array(6);
  if (a === "multi-directional")
    for (let x = 0; x < A; x++)
      t = b[x], r = v[x], S = (90 - t) * Math.PI / 180, g = Math.cos(S), w = (360 - r + 90) * Math.PI / 180, i = Math.sin(S) * Math.cos(w), d = Math.sin(S) * Math.sin(w), k[x] = g, R[x] = i, D[x] = d;
  else
    k.fill(g), R.fill(i), D.fill(d);
  return { resolution: u, factor: [p, C], sinZcosA: i, sinZsinA: d, cosZ: g, sinZcosAs: R, sinZsinAs: D, cosZs: k, weights: y, hillshadeType: ["traditional", "multi-directional"].indexOf(a) };
}
function Or(e, t) {
  if (!Pe(e))
    return e;
  const { width: r, height: a, mask: l } = e, s = new Uint8Array(r * a);
  l && s.set(l);
  const { factor: h, sinZcosA: o, sinZsinA: u, cosZ: n, sinZcosAs: c, sinZsinAs: m, cosZs: p, weights: C } = Lt(t), [S, g] = h, { hillshadeType: w } = t, i = e.pixels[0], d = new Uint8Array(r * a);
  let v, b, f, T, y, A, k, R;
  const D = 1;
  for (let x = D; x < a - D; x++) {
    const I = x * r;
    for (let E = D; E < r - D; E++) {
      if (l && !l[I + E]) {
        d[I + E] = 0;
        continue;
      }
      let O = 8;
      if (l && (O = l[I - r + E - 1] + l[I - r + E] + l[I - r + E + 1] + l[I + E - 1] + l[I + E + 1] + l[I + r + E - 1] + l[I + r + E] + l[I + r + E + 1], O < 7)) {
        d[I + E] = 0, s[I + E] = 0;
        continue;
      }
      O === 7 ? (v = l[I - r + E - 1] ? i[I - r + E - 1] : i[I + E], b = l[I - r + E] ? i[I - r + E] : i[I + E], f = l[I - r + E + 1] ? i[I - r + E + 1] : i[I + E], T = l[I + E - 1] ? i[I + E - 1] : i[I + E], y = l[I + E + 1] ? i[I + E + 1] : i[I + E], A = l[I + r + E - 1] ? i[I + r + E - 1] : i[I + E], k = l[I + r + E] ? i[I + r + E] : i[I + E], R = l[I + r + E + 1] ? i[I + r + E + 1] : i[I + E]) : (v = i[I - r + E - 1], b = i[I - r + E], f = i[I - r + E + 1], T = i[I + E - 1], y = i[I + E + 1], A = i[I + r + E - 1], k = i[I + r + E], R = i[I + r + E + 1]);
      const _ = (f + y + y + R - (v + T + T + A)) * S, P = (A + k + k + R - (v + b + b + f)) * g, F = Math.sqrt(1 + _ * _ + P * P);
      let V = 0;
      if (w === "traditional") {
        let L = 255 * (n + u * P - o * _) / F;
        L < 0 && (L = 0), V = L;
      } else {
        const L = m.length;
        for (let U = 0; U < L; U++) {
          let B = 255 * (p[U] + m[U] * P - c[U] * _) / F;
          B < 0 && (B = 0), V += B * C[U];
        }
      }
      d[I + E] = 255 & V;
    }
  }
  for (let x = 0; x < a; x++)
    d[x * r] = d[x * r + 1], d[(x + 1) * r - 1] = d[(x + 1) * r - 2];
  for (let x = 1; x < r - 1; x++)
    d[x] = d[x + r], d[x + (a - 1) * r] = d[x + (a - 2) * r];
  return new ae({ width: r, height: a, pixels: [d], mask: l ? s : null, pixelType: "u8", validPixelCount: e.validPixelCount, statistics: [{ minValue: 0, maxValue: 255 }] });
}
function Gr(e, t, r, a) {
  if (!Pe(e) || !Pe(t))
    return;
  const { min: l, max: s } = a, h = e.pixels[0], { pixels: o, mask: u } = t, n = o[0], c = 255.00001 / (s - l), m = new Uint8ClampedArray(n.length), p = new Uint8ClampedArray(n.length), C = new Uint8ClampedArray(n.length), S = r.length - 1;
  for (let g = 0; g < n.length; g++) {
    if (u && u[g] === 0)
      continue;
    const w = Math.floor((n[g] - l) * c), [i, d] = r[w < 0 ? 0 : w > S ? S : w], v = h[g], b = v * d, f = b * (1 - Math.abs(i % 2 - 1)), T = v - b;
    switch (Math.floor(i)) {
      case 0:
        m[g] = b + T, p[g] = f + T, C[g] = T;
        break;
      case 1:
        m[g] = f + T, p[g] = b + T, C[g] = T;
        break;
      case 2:
        m[g] = T, p[g] = b + T, C[g] = f + T;
        break;
      case 3:
        m[g] = T, p[g] = f + T, C[g] = b + T;
        break;
      case 4:
        m[g] = f + T, p[g] = T, C[g] = b + T;
        break;
      case 5:
      case 6:
        m[g] = b + T, p[g] = T, C[g] = f + T;
    }
  }
  e.pixels = [m, p, C], e.updateStatistics();
}
const Ur = [{ id: "aspect_predefined", type: "multipart", colorRamps: [{ fromColor: [190, 190, 190], toColor: [255, 45, 8] }, { fromColor: [255, 45, 8], toColor: [255, 181, 61] }, { fromColor: [255, 181, 61], toColor: [255, 254, 52] }, { fromColor: [255, 254, 52], toColor: [0, 251, 50] }, { fromColor: [0, 251, 50], toColor: [255, 254, 52] }, { fromColor: [0, 253, 255], toColor: [0, 181, 255] }, { fromColor: [0, 181, 255], toColor: [26, 35, 253] }, { fromColor: [26, 35, 253], toColor: [255, 57, 251] }, { fromColor: [255, 57, 251], toColor: [255, 45, 8] }] }, { id: "blackToWhite_predefined", fromColor: [0, 0, 0], toColor: [255, 255, 255] }, { id: "blueBright_predefined", fromColor: [204, 204, 255], toColor: [0, 0, 224] }, { id: "blueLightToDark_predefined", fromColor: [211, 229, 232], toColor: [46, 100, 140] }, { id: "blueGreenBright_predefined", fromColor: [203, 245, 234], toColor: [48, 207, 146] }, { id: "blueGreenLightToDark_predefined", fromColor: [216, 242, 237], toColor: [21, 79, 74] }, { id: "brownLightToDark_predefined", fromColor: [240, 236, 170], toColor: [102, 72, 48] }, { id: "brownToBlueGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [156, 85, 31], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [33, 130, 145] }] }, { id: "brownToBlueGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [110, 70, 45], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [48, 100, 102] }] }, { id: "coefficientBias_predefined", fromColor: [214, 214, 255], toColor: [0, 57, 148] }, { id: "coldToHotDiverging_predefined", type: "multipart", colorRamps: [{ fromColor: [69, 117, 181], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [214, 47, 39] }] }, { id: "conditionNumber_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 97, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 34, 0] }] }, { id: "cyanToPurple_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 245, 245], toColor: [0, 0, 245] }, { fromColor: [0, 0, 245], toColor: [245, 0, 245] }] }, { id: "cyanLightToBlueDark_predefined", type: "multipart", colorRamps: [{ fromColor: [182, 237, 240], toColor: [31, 131, 224] }, { fromColor: [31, 131, 224], toColor: [9, 9, 145] }] }, { id: "distance_predefined", fromColor: [255, 200, 0], toColor: [0, 0, 255] }, { id: "elevation1_predefined", type: "multipart", colorRamps: [{ fromColor: [175, 240, 233], toColor: [255, 255, 179] }, { fromColor: [255, 255, 179], toColor: [0, 128, 64] }, { fromColor: [0, 128, 64], toColor: [252, 186, 3] }, { fromColor: [252, 186, 3], toColor: [128, 0, 0] }, { fromColor: [120, 0, 0], toColor: [105, 48, 13] }, { fromColor: [105, 48, 13], toColor: [171, 171, 171] }, { fromColor: [171, 171, 171], toColor: [255, 252, 255] }] }, { id: "elevation2_predefined", type: "multipart", colorRamps: [{ fromColor: [118, 219, 211], toColor: [255, 255, 199] }, { fromColor: [255, 255, 199], toColor: [255, 255, 128] }, { fromColor: [255, 255, 128], toColor: [217, 194, 121] }, { fromColor: [217, 194, 121], toColor: [135, 96, 38] }, { fromColor: [135, 96, 38], toColor: [150, 150, 181] }, { fromColor: [150, 150, 181], toColor: [181, 150, 181] }, { fromColor: [181, 150, 181], toColor: [255, 252, 255] }] }, { id: "errors_predefined", fromColor: [255, 235, 214], toColor: [196, 10, 10] }, { id: "grayLightToDark_predefined", fromColor: [219, 219, 219], toColor: [69, 69, 69] }, { id: "greenBright_predefined", fromColor: [204, 255, 204], toColor: [14, 204, 14] }, { id: "greenLightToDark_predefined", fromColor: [220, 245, 233], toColor: [34, 102, 51] }, { id: "greenToBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [32, 204, 16], toColor: [0, 242, 242] }, { fromColor: [0, 242, 242], toColor: [2, 33, 227] }] }, { id: "orangeBright_predefined", fromColor: [255, 235, 204], toColor: [240, 118, 5] }, { id: "orangeLightToDark_predefined", fromColor: [250, 233, 212], toColor: [171, 65, 36] }, { id: "partialSpectrum_predefined", type: "multipart", colorRamps: [{ fromColor: [242, 241, 162], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }, { fromColor: [252, 3, 69], toColor: [176, 7, 237] }, { fromColor: [176, 7, 237], toColor: [2, 29, 173] }] }, { id: "partialSpectrum1Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [135, 38, 38], toColor: [240, 149, 12] }, { fromColor: [240, 149, 12], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [74, 80, 181] }, { fromColor: [74, 80, 181], toColor: [39, 32, 122] }] }, { id: "partialSpectrum2Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [115, 77, 42], toColor: [201, 137, 52] }, { fromColor: [201, 137, 52], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [91, 63, 176] }, { fromColor: [91, 63, 176], toColor: [81, 13, 97] }] }, { id: "pinkToYellowGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [158, 30, 113], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [99, 110, 45] }] }, { id: "pinkToYellowGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 47, 73], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [22, 59, 15] }] }, { id: "precipitation_predefined", type: "multipart", colorRamps: [{ fromColor: [194, 82, 60], toColor: [237, 161, 19] }, { fromColor: [237, 161, 19], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 219, 0] }, { fromColor: [0, 219, 0], toColor: [32, 153, 143] }, { fromColor: [32, 153, 143], toColor: [11, 44, 122] }] }, { id: "prediction_predefined", type: "multipart", colorRamps: [{ fromColor: [40, 146, 199], toColor: [250, 250, 100] }, { fromColor: [250, 250, 100], toColor: [232, 16, 20] }] }, { id: "purpleBright_predefined", fromColor: [255, 204, 255], toColor: [199, 0, 199] }, { id: "purpleToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [77, 32, 150], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [20, 122, 11] }] }, { id: "purpleToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [67, 14, 89], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [24, 79, 15] }] }, { id: "purpleBlueBright_predefined", fromColor: [223, 184, 230], toColor: [112, 12, 242] }, { id: "purpleBlueLightToDark_predefined", fromColor: [229, 213, 242], toColor: [93, 44, 112] }, { id: "purpleRedBright_predefined", fromColor: [255, 204, 225], toColor: [199, 0, 99] }, { id: "purpleRedLightToDark_predefined", fromColor: [250, 215, 246], toColor: [143, 17, 57] }, { id: "redBright_predefined", fromColor: [255, 204, 204], toColor: [219, 0, 0] }, { id: "redLightToDark_predefined", fromColor: [255, 224, 224], toColor: [143, 10, 10] }, { id: "redToBlueDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [196, 69, 57], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [48, 95, 207] }] }, { id: "redToBlueDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [107, 13, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [13, 53, 97] }] }, { id: "redToGreen_predefined", type: "multipart", colorRamps: [{ fromColor: [245, 0, 0], toColor: [245, 245, 0] }, { fromColor: [245, 245, 0], toColor: [0, 245, 0] }] }, { id: "redToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [186, 20, 20], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [54, 145, 33] }] }, { id: "redToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 21, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [16, 69, 16] }] }, { id: "slope_predefined", type: "multipart", colorRamps: [{ fromColor: [56, 168, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }, { id: "spectrumFullBright_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 0, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 0, 255] }] }, { id: "spectrumFullDark_predefined", type: "multipart", colorRamps: [{ fromColor: [153, 0, 0], toColor: [153, 153, 0] }, { fromColor: [153, 153, 0], toColor: [0, 153, 153] }, { fromColor: [0, 153, 153], toColor: [0, 0, 153] }] }, { id: "spectrumFullLight_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 153, 153], toColor: [255, 255, 153] }, { fromColor: [255, 255, 153], toColor: [153, 255, 255] }, { fromColor: [153, 255, 255], toColor: [153, 153, 255] }] }, { id: "surface_predefined", type: "multipart", colorRamps: [{ fromColor: [112, 153, 89], toColor: [242, 238, 162] }, { fromColor: [242, 238, 162], toColor: [242, 206, 133] }, { fromColor: [242, 206, 133], toColor: [194, 140, 124] }, { fromColor: [194, 140, 124], toColor: [255, 242, 255] }] }, { id: "temperature_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 252, 255], toColor: [255, 0, 255] }, { fromColor: [255, 0, 255], toColor: [0, 0, 255] }, { fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 255, 0] }, { fromColor: [0, 255, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 128, 0] }, { fromColor: [255, 128, 0], toColor: [128, 0, 0] }] }, { id: "whiteToBlack_predefined", fromColor: [255, 255, 255], toColor: [0, 0, 0] }, { id: "yellowToDarkRed_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [242, 167, 46] }, { fromColor: [242, 167, 46], toColor: [107, 0, 0] }] }, { id: "yellowToGreenToDarkBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [56, 224, 9] }, { fromColor: [56, 224, 9], toColor: [26, 147, 171] }, { fromColor: [26, 147, 171], toColor: [12, 16, 120] }] }, { id: "yellowToRed_predefined", fromColor: [245, 245, 0], toColor: [255, 0, 0] }, { id: "yellowGreenBright_predefined", fromColor: [236, 252, 204], toColor: [157, 204, 16] }, { id: "yellowGreenLightToDark_predefined", fromColor: [215, 240, 175], toColor: [96, 107, 45] }], _r = { aspect_predefined: "Aspect", blackToWhite_predefined: "Black to White", blueBright_predefined: "Blue Bright", blueLightToDark_predefined: "Blue Light to Dark", blueGreenBright_predefined: "Blue-Green Bright", blueGreenLightToDark_predefined: "Blue-Green Light to Dark", brownLightToDark_predefined: "Brown Light to Dark", brownToBlueGreenDivergingBright_predefined: "Brown to Blue Green Diverging, Bright", brownToBlueGreenDivergingDark_predefined: "Brown to Blue Green Diverging, Dark", coefficientBias_predefined: "Coefficient Bias", coldToHotDiverging_predefined: "Cold to Hot Diverging", conditionNumber_predefined: "Condition Number", cyanToPurple_predefined: "Cyan to Purple", cyanLightToBlueDark_predefined: "Cyan-Light to Blue-Dark", distance_predefined: "Distance", elevation1_predefined: "Elevation #1", elevation2_predefined: "Elevation #2", errors_predefined: "Errors", grayLightToDark_predefined: "Gray Light to Dark", greenBright_predefined: "Green Bright", greenLightToDark_predefined: "Green Light to Dark", greenToBlue_predefined: "Green to Blue", orangeBright_predefined: "Orange Bright", orangeLightToDark_predefined: "Orange Light to Dark", partialSpectrum_predefined: "Partial Spectrum", partialSpectrum1Diverging_predefined: "Partial Spectrum 1 Diverging", partialSpectrum2Diverging_predefined: "Partial Spectrum 2 Diverging", pinkToYellowGreenDivergingBright_predefined: "Pink to YellowGreen Diverging, Bright", pinkToYellowGreenDivergingDark_predefined: "Pink to YellowGreen Diverging, Dark", precipitation_predefined: "Precipitation", prediction_predefined: "Prediction", purpleBright_predefined: "Purple Bright", purpleToGreenDivergingBright_predefined: "Purple to Green Diverging, Bright", purpleToGreenDivergingDark_predefined: "Purple to Green Diverging, Dark", purpleBlueBright_predefined: "Purple-Blue Bright", purpleBlueLightToDark_predefined: "Purple-Blue Light to Dark", purpleRedBright_predefined: "Purple-Red Bright", purpleRedLightToDark_predefined: "Purple-Red Light to Dark", redBright_predefined: "Red Bright", redLightToDark_predefined: "Red Light to Dark", redToBlueDivergingBright_predefined: "Red to Blue Diverging, Bright", redToBlueDivergingDark_predefined: "Red to Blue Diverging, Dark", redToGreen_predefined: "Red to Green", redToGreenDivergingBright_predefined: "Red to Green Diverging, Bright", redToGreenDivergingDark_predefined: "Red to Green Diverging, Dark", slope_predefined: "Slope", spectrumFullBright_predefined: "Spectrum-Full Bright", spectrumFullDark_predefined: "Spectrum-Full Dark", spectrumFullLight_predefined: "Spectrum-Full Light", surface_predefined: "Surface", temperature_predefined: "Temperature", whiteToBlack_predefined: "White to Black", yellowToDarkRed_predefined: "Yellow to Dark Red", yellowToGreenToDarkBlue_predefined: "Yellow to Green to Dark Blue", yellowToRed_predefined: "Yellow to Red", yellowGreenBright_predefined: "Yellow-Green Bright", yellowGreenLightToDark_predefined: "Yellow-Green Light to Dark" };
function Ee(e, t) {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] > t[r] + 2 || e[r] < t[r] - 2)
      return !1;
  return !0;
}
function Br(e, t, r) {
  const a = ot(e), l = ot(t), s = { l: a.l * (1 - r) + r * l.l, a: a.a * (1 - r) + r * l.a, b: a.b * (1 - r) + r * l.b };
  return $t(s);
}
function Mr(e, t) {
  if (!e)
    return;
  const r = t || Ur;
  let a, l = null;
  return e.type === "algorithmic" ? r.some((s) => {
    if (Ee(e.fromColor.toRgb(), s.fromColor) && Ee(e.toColor.toRgb(), s.toColor))
      return l = s.id, !0;
  }) : e.type === "multipart" && r.some((s) => {
    if (e.colorRamps && s.colorRamps && e.colorRamps.length === s.colorRamps.length && (a = e.colorRamps, !s.colorRamps.some((h, o) => {
      if (!Ee(a[o].fromColor.toRgb(), new Ze(h.fromColor).toRgb()) || !Ee(a[o].toColor.toRgb(), new Ze(h.toColor).toRgb()))
        return !0;
    }))) {
      if (l)
        return !0;
      l = s.id;
    }
  }), l;
}
function Nr(e) {
  const t = Mr(e);
  return t ? _r[t] : null;
}
function dt(e, t, r = !1) {
  if (!e || !t || t < 1)
    return;
  const a = "toJSON" in e ? e.toJSON() : e, l = a.type === "multipart" ? a.colorRamps.length : 1, s = [], h = [];
  let o, u, n, c, m, p = 0;
  if (t === 1)
    return o = a.type === "multipart" ? a.colorRamps[0].fromColor : a.fromColor, h.push([0].concat(o)), h;
  for (let C = 0; C < l; C++)
    s[C] = { start: null, end: null }, s[C].start = p, s[C].end = p + 1 / l, p = s[C].end;
  for (let C = 0; C < t; C++)
    c = C / (t - 1), s.forEach((S, g) => {
      if (c >= S.start && (c < S.end || C === t - 1 && g === l - 1)) {
        m = (c - S.start) / (S.end - S.start), a.type === "multipart" ? (o = a.colorRamps[g].fromColor, u = a.colorRamps[g].toColor) : (o = a.fromColor, u = a.toColor), C === 0 ? h.push([C].concat(o.slice(0, 3))) : C === t - 1 ? h.push([C].concat(u.slice(0, 3))) : (n = Br({ r: o[0], g: o[1], b: o[2] }, { r: u[0], g: u[1], b: u[2] }, m), h.push([C, n.r, n.g, n.b]));
        const w = o[3] != null ? o[3] > 1 ? o[3] / 255 : o[3] : 1, i = u[3] != null ? u[3] > 1 ? u[3] / 255 : u[3] : 1;
        r && h[C].push(Math.min(255, Math.round(255 * (w * (1 - m) + i * m))));
      }
    });
  return h;
}
function Zr(e) {
  const t = Nr(e);
  if (e) {
    if (e.type === "algorithmic")
      return { ...pt(e), Name: t };
    if (e.colorRamps) {
      const r = e.colorRamps.map(pt);
      return { type: "MultiPartColorRamp", NumColorRamps: r.length, ArrayOfColorRamp: r, Name: t };
    }
  }
}
function pt(e) {
  if (!e)
    return;
  const t = e.toJSON();
  return { Algorithm: (t == null ? void 0 : t.Algorithm) || "esriHSVAlgorithm", type: "AlgorithmicColorRamp", FromColor: mt(e.fromColor), ToColor: mt(e.toColor) };
}
function mt(e) {
  const t = wt(e);
  return { type: "HsvColor", Hue: t.h, Saturation: t.s, Value: t.v, AlphaValue: 255 };
}
function Qr(e) {
  const t = e.reverse().map((r) => {
    const a = r.toString(16);
    return a.length < 2 ? "0" + a : a;
  });
  return 4294967295 & Number.parseInt(t.join(""), 16);
}
const gt = Nt.getLogger("geoscene.renderers.support.RasterSymbolizer");
function Fr(e, t) {
  const { attributeTable: r, bandCount: a } = e;
  return !(!te(r) || a > 1 || t && r.fields.find((l) => l.name.toLowerCase() === t.toLowerCase()) == null);
}
function Vr(e) {
  return e.dataType === "elevation";
}
function $r(e) {
  const { bandCount: t, colormap: r } = e;
  return te(r) && r.length && t === 1;
}
const yt = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767], u32: [0, 4294967295], s32: [-2147483648, 2147483647], f32: [-34e38, 34e38], f64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
let me = class extends Ke {
  constructor(e) {
    super(e);
  }
  bind() {
    const { rendererJSON: e } = this;
    if (!e)
      return { success: !1 };
    let t;
    switch (this.lookup = { rendererJSON: {} }, e.type) {
      case "uniqueValue":
        t = this._updateUVRenderer(e);
        break;
      case "rasterColormap":
        t = this._updateColormapRenderer(e);
        break;
      case "rasterStretch":
        t = this._updateStretchRenderer(e);
        break;
      case "classBreaks":
        t = this._updateClassBreaksRenderer(e);
        break;
      case "rasterShadedRelief":
        t = this._updateShadedReliefRenderer(e);
        break;
      case "vectorField":
        t = this._updateVectorFieldRenderer();
        break;
      case "flowRenderer":
        t = this._updateFlowRenderer();
    }
    return t;
  }
  symbolize(e) {
    let t = e && e.pixelBlock;
    if (!Ct(t))
      return t;
    if (e.simpleStretchParams && this.rendererJSON.type === "rasterStretch")
      return this.simpleStretch(t, e.simpleStretchParams);
    try {
      let r;
      switch (t.pixels.length > 3 && (t = Qe(t, [0, 1, 2])), this.rendererJSON.type) {
        case "uniqueValue":
        case "rasterColormap":
          r = this._symbolizeColormap(t);
          break;
        case "classBreaks":
          r = this._symbolizeClassBreaks(t);
          break;
        case "rasterStretch":
          r = this._symbolizeStretch(t, e.bandIds);
          break;
        case "rasterShadedRelief": {
          const { extent: a } = e, l = a.spatialReference.isGeographic, s = { x: (a.xmax - a.xmin) / t.width, y: (a.ymax - a.ymin) / t.height };
          r = this._symbolizeShadedRelief(t, { isGCS: l, resolution: s });
          break;
        }
      }
      return r;
    } catch (r) {
      return gt.error("symbolize", r.message), t;
    }
  }
  simpleStretch(e, t) {
    if (!Ct(e))
      return e;
    try {
      return e.pixels.length > 3 && (e = Qe(e, [0, 1, 2])), Ue(e, t);
    } catch (r) {
      return gt.error("symbolize", r.message), e;
    }
  }
  generateWebGLParameters(e) {
    if (["uniqueValue", "rasterColormap", "classBreaks"].indexOf(this.rendererJSON.type) > -1) {
      var t;
      const { indexedColormap: o, offset: u } = ((t = this.lookup) == null ? void 0 : t.colormapLut) || {};
      return { colormap: o, colormapOffset: u, type: "lut" };
    }
    const { pixelBlock: r, isGCS: a, resolution: l, bandIds: s } = e, { rendererJSON: h } = this;
    return h.type === "rasterStretch" ? this._generateStretchWebGLParams(r, h, s) : h.type === "rasterShadedRelief" ? this._generateShadedReliefWebGLParams(h, a, l) : h.type === "vectorField" ? this._generateVectorFieldWebGLParams(h) : null;
  }
  _isLUTChanged(e) {
    if (!this.lookup || !this.lookup.rendererJSON)
      return !0;
    if ("colorRamp" in this.rendererJSON) {
      const t = this.rendererJSON.colorRamp;
      return e ? JSON.stringify(t) !== JSON.stringify(this.lookup.rendererJSON.colorRamp) : (this.rendererJSON, this.lookup.rendererJSON, JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON));
    }
    return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
  }
  _symbolizeColormap(e) {
    return this._isLUTChanged() && !this.bind().success ? e : _e(e, this.lookup.colormapLut);
  }
  _symbolizeClassBreaks(e) {
    const t = this.rasterInfo.pixelType, r = ["u8", "u16", "s8", "s16"].indexOf(t) > -1;
    return this._isLUTChanged() && !this.bind().success ? e : r ? _e(e, this.lookup.colormapLut) : Ft(e, this.lookup.remapLut);
  }
  _symbolizeStretch(e, t) {
    const { pixelType: r, bandCount: a } = this.rasterInfo, l = this.rendererJSON, s = ["u8", "u16", "s8", "s16"].indexOf(r) > -1;
    let h, o;
    const { dra: u } = l, n = l.useGamma ? l.gamma : null;
    if (l.stretchType === "histogramEqualization") {
      const p = u ? null : this.lookup.histogramLut, C = this._getStretchCutoff(l, e, t, !p), S = Ue(e, { ...C, gamma: n });
      o = et(S, { lut: u ? C.histogramLut : p, offset: 0 });
    } else if (s) {
      var c, m;
      if (u) {
        const p = this._getStretchCutoff(l, e, t);
        h = tt({ pixelType: r, ...p, gamma: n });
      } else if (this._isLUTChanged()) {
        if (!this.bind().success)
          return e;
        h = this.lookup ? this.lookup.stretchLut : null;
      } else
        h = this.lookup ? this.lookup.stretchLut : null;
      if (!h)
        return e;
      a > 1 && (t == null ? void 0 : t.length) === ((c = be(e)) == null ? void 0 : c.pixels.length) && ((m = h) == null ? void 0 : m.lut.length) === a && (h = { lut: t.map((p) => h.lut[p]), offset: h.offset }), o = et(e, h);
    } else {
      const p = this._getStretchCutoff(l, e, t);
      o = Ue(e, { ...p, gamma: n });
    }
    if (l.colorRamp) {
      if (this._isLUTChanged(!0) && !this.bind().success)
        return e;
      o = _e(o, this.lookup.colormapLut);
    }
    return o;
  }
  _symbolizeShadedRelief(e, t) {
    var r, a;
    const l = this.rendererJSON, s = { ...l, ...t }, h = Or(e, s);
    if (!l.colorRamp)
      return h;
    let o;
    if (this._isLUTChanged(!0)) {
      if (!this.bind().success)
        return h;
      o = this.lookup ? this.lookup.hsvMap : null;
    } else
      o = this.lookup ? this.lookup.hsvMap : null;
    if (!o)
      return h;
    const u = (r = (a = be(this.rasterInfo.statistics)) == null ? void 0 : a[0]) != null ? r : { min: 0, max: 8e3 };
    return Gr(h, e, o, u), h;
  }
  _isVectorFieldData() {
    const { bandCount: e, dataType: t } = this.rasterInfo;
    return e === 2 && (t === "vector-magdir" || t === "vector-uv");
  }
  _updateVectorFieldRenderer() {
    return this._isVectorFieldData() ? { success: !0 } : { success: !1, error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateFlowRenderer() {
    return this._isVectorFieldData() ? { success: !0 } : { success: !1, error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateUVRenderer(e) {
    const { bandCount: t, attributeTable: r, pixelType: a } = this.rasterInfo, l = e.field1;
    if (!l)
      return { success: !1, error: "Unsupported renderer; missing UniqueValueRenderer.field." };
    const s = e.defaultSymbol, h = t === 1 && ["u8", "s8"].includes(a);
    if (!Fr(this.rasterInfo, l) && !h)
      return { success: !1, error: "Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table." };
    const o = [];
    if (r) {
      const n = r.fields.find((c) => c.name.toLowerCase() === "value");
      if (!n)
        return { success: !1, error: "Unsupported data; the data's raster attribute table does not have a value field." };
      r.features.forEach((c) => {
        var m;
        const p = e.uniqueValueInfos.find((S) => String(S.value) === String(c.attributes[l])), C = p == null || (m = p.symbol) == null ? void 0 : m.color;
        C ? o.push([c.attributes[n.name]].concat(C)) : s && o.push([c.attributes[n.name]].concat(s.color));
      });
    } else {
      if (l.toLowerCase() !== "value")
        return { success: !1, error: 'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not availalbe.' };
      e.uniqueValueInfos.forEach((n) => {
        var c;
        const m = n == null || (c = n.symbol) == null ? void 0 : c.color;
        m ? o.push([parseInt("" + n.value, 10)].concat(m)) : s && o.push([parseInt("" + n.value, 10)].concat(s.color));
      });
    }
    if (o.length === 0)
      return { success: !1, error: "Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table." };
    const u = Ae({ colormap: o });
    return this.lookup = { rendererJSON: e, colormapLut: u }, this.canRenderInWebGL = !0, { success: !0 };
  }
  _updateColormapRenderer(e) {
    if (!$r(this.rasterInfo))
      return { success: !1, error: "Unsupported data; the data source does not have a colormap." };
    const t = e.colormapInfos.map((a) => [a.value].concat(a.color)).sort((a, l) => a[0] - l[0]);
    if (!t || t.length === 0)
      return { success: !1, error: "Unsupported renderer; ColormapRenderer must have meaningful colormapInfos." };
    const r = Ae({ colormap: t });
    return this.lookup = { rendererJSON: e, colormapLut: r }, this.canRenderInWebGL = !0, { success: !0 };
  }
  _updateShadedReliefRenderer(e) {
    if (!Vr(this.rasterInfo))
      return { success: !1, error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation".` };
    if (e.colorRamp) {
      const t = dt(e.colorRamp, 256, !0), r = Ae({ colormap: t }), a = [], l = r.indexedColormap;
      for (let s = 0; s < l.length; s += 4) {
        const h = wt({ r: l[s], g: l[s + 1], b: l[s + 2] });
        a.push([h.h / 60, h.s / 100, 255 * h.v / 100]);
      }
      this.lookup = { rendererJSON: e, colormapLut: r, hsvMap: a };
    } else
      this.lookup = null;
    return this.canRenderInWebGL = !0, { success: !0 };
  }
  _updateClassBreaksRenderer(e) {
    const t = this.rasterInfo.pixelType, r = ["u8", "u16", "s8", "s16"].indexOf(t) > -1, a = e.classBreakInfos;
    if (a == null || !a.length)
      return { success: !1, error: "Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos." };
    const l = a.sort((c, m) => c.classMaxValue - m.classMaxValue), s = l[l.length - 1];
    let h = e.minValue;
    if (!r) {
      const c = [];
      for (let m = 0; m < l.length; m++) {
        var o;
        c.push({ value: (o = l[m].classMinValue) != null ? o : h, mappedColor: l[m].symbol.color }), h = l[m].classMaxValue;
      }
      return c.push({ value: s.classMaxValue, mappedColor: s.symbol.color }), this.lookup = { rendererJSON: e, remapLut: c }, this.canRenderInWebGL = !1, { success: !0 };
    }
    const u = [];
    h = Math.floor(e.minValue);
    for (let c = 0; c < l.length; c++) {
      const m = l[c];
      for (let p = h; p < m.classMaxValue; p++)
        u.push([p].concat(m.symbol.color));
      h = Math.ceil(m.classMaxValue);
    }
    s.classMaxValue === h && u.push([s.classMaxValue].concat(s.symbol.color));
    const n = Ae({ colormap: u, fillUnspecified: !1 });
    return this.lookup = { rendererJSON: e, colormapLut: n }, this.canRenderInWebGL = !0, { success: !0 };
  }
  _isHistogramRequired(e) {
    return e === "percentClip" || e === "histogramEqualization";
  }
  _isValidRasterStatistics(e) {
    return te(e) && e.length > 0 && e[0].min != null && e[0].max != null;
  }
  _updateStretchRenderer(e) {
    var t;
    let { stretchType: r, dra: a } = e;
    if (!(r === "none" || (t = e.statistics) != null && t.length || this._isValidRasterStatistics(this.rasterInfo.statistics) || a))
      return { success: !1, error: "Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used." };
    const l = be(e.histograms || this.rasterInfo.histograms);
    !this._isHistogramRequired(e.stretchType) || l != null && l.length || a || (r = "minMax");
    const { gamma: s, useGamma: h, colorRamp: o } = e, u = this.rasterInfo.pixelType, n = !a && ["u8", "u16", "s8", "s16"].indexOf(u) > -1;
    if (r === "histogramEqualization") {
      const c = l.map((m) => rt(m));
      this.lookup = { rendererJSON: e, histogramLut: c };
    } else if (n) {
      const c = this._getStretchCutoff(e), m = tt({ pixelType: u, ...c, gamma: h ? s : null });
      this.lookup = { rendererJSON: e, stretchLut: m };
    }
    if (o) {
      const c = dt(o, 256, !0);
      this.lookup || (this.lookup = { rendererJSON: e }), this.lookup.colormapLut = Ae({ colormap: c }), this.lookup.rendererJSON = e;
    }
    return this.canRenderInWebGL = !0, { success: !0 };
  }
  _getStretchCutoff(e, t = null, r, a) {
    var l, s, h;
    let o, u, n = e.stretchType;
    var c;
    if (e.dra)
      if (n === "minMax" && te(t) && t.statistics)
        o = t.statistics.map((D) => [D.minValue, D.maxValue, 0, 0]);
      else {
        const D = Vt(t);
        o = te(D) ? D.statistics : null, u = te(D) ? D.histograms : null;
      }
    else
      o = ((c = e.statistics) == null ? void 0 : c.length) > 0 ? e.statistics : be(this.rasterInfo.statistics), u = e.histograms || be(this.rasterInfo.histograms);
    !this._isHistogramRequired(n) || (l = u) != null && l.length || (n = "minMax");
    const m = ((s = o) == null ? void 0 : s.length) || ((h = u) == null ? void 0 : h.length) || this.rasterInfo.bandCount, p = [], C = [];
    let S, g, w, i, d, v, b, f, T, y, A, k;
    switch (o && !Array.isArray(o[0]) && (o = o.map((D) => [D.min, D.max, D.avg, D.stddev])), n) {
      case "none":
        {
          const D = yt[this.rasterInfo.pixelType] || yt.f32;
          for (f = 0; f < m; f++)
            p[f] = D[0], C[f] = D[1];
        }
        break;
      case "minMax":
        for (f = 0; f < m; f++)
          p[f] = o[f][0], C[f] = o[f][1];
        break;
      case "standardDeviation":
        for (f = 0; f < m; f++)
          p[f] = o[f][2] - e.numberOfStandardDeviations * o[f][3], C[f] = o[f][2] + e.numberOfStandardDeviations * o[f][3], p[f] < o[f][0] && (p[f] = o[f][0]), C[f] > o[f][1] && (C[f] = o[f][1]);
        break;
      case "histogramEqualization":
        for (f = 0; f < m; f++)
          p[f] = u[f].min, C[f] = u[f].max;
        break;
      case "percentClip":
        for (f = 0; f < u.length; f++) {
          for (S = u[f], d = new Uint32Array(S.size), i = [...S.counts], i.length >= 20 && (i[0] = i[1] = i[2] = i[i.length - 1] = i[i.length - 2] = 0), w = 0, g = (S.max - S.min) / S.size, b = S.min === -0.5 && g === 1 ? 0.5 : 0, T = 0; T < S.size; T++)
            w += i[T], d[T] = w;
          for (v = (e.minPercent || 0) * w / 100, T = 0; T < S.size; T++)
            if (d[T] > v) {
              p[f] = S.min + g * (T + b);
              break;
            }
          for (v = (1 - (e.maxPercent || 0) / 100) * w, T = S.size - 2; T >= 0; T--)
            if (d[T] < v) {
              C[f] = S.min + g * (T + 2 - b);
              break;
            }
        }
        break;
      default:
        for (f = 0; f < m; f++)
          p[f] = o[f][0], C[f] = o[f][1];
    }
    n === "histogramEqualization" ? (A = u[0].size || 256, y = 0, a && (k = u.map((D) => rt(D)))) : (A = e.max || 255, y = e.min || 0);
    const R = { minCutOff: p, maxCutOff: C, outMax: A, outMin: y, histogramLut: k };
    return this._getSelectedBandCutoffs(R, r);
  }
  _getSelectedBandCutoffs(e, t) {
    if (t == null || t.length === 0)
      return e;
    const r = Math.max.apply(null, t), { minCutOff: a, maxCutOff: l, outMin: s, outMax: h, histogramLut: o } = e;
    return a.length === t.length || a.length <= r ? e : { minCutOff: t.map((u) => a[u]), maxCutOff: t.map((u) => l[u]), histogramLut: o ? t.map((u) => o[u]) : null, outMin: s, outMax: h };
  }
  _generateStretchWebGLParams(e, t, r) {
    let a = null, l = null;
    const s = this.lookup && this.lookup.colormapLut;
    t.colorRamp && s && (a = s.indexedColormap, l = s.offset), t.stretchType === "histogramEqualization" && (t = { ...t, stretchType: "minMax" });
    const { gamma: h } = t, o = !!(t.useGamma && h && h.some((d) => d !== 1)), { minCutOff: u, maxCutOff: n, outMin: c, outMax: m } = this._getStretchCutoff(t, e, r);
    let p = 0;
    te(e) && (p = e.getPlaneCount(), p === 2 && ((e = e.clone()).statistics = [e.statistics[0]], e.pixels = [e.pixels[0]]));
    const C = Math.min(3, (r == null ? void 0 : r.length) || p || this.rasterInfo.bandCount), S = new Float32Array(C), g = a || o ? 1 : 255;
    let w;
    for (w = 0; w < C; w++)
      S[w] = (m - c) / (n[w] - u[w]) / g;
    const i = new Float32Array(C);
    if (o)
      for (w = 0; w < C; w++)
        h[w] > 1 ? h[w] > 2 ? i[w] = 6.5 + (h[w] - 2) ** 2.5 : i[w] = 6.5 + 100 * (2 - h[w]) ** 4 : i[w] = 1;
    return { bandCount: C, outMin: c / g, outMax: m / g, minCutOff: u, maxCutOff: n, factor: S, useGamma: o, gamma: o ? h : [1, 1, 1], gammaCorrection: o ? i : [1, 1, 1], colormap: a, colormapOffset: l, stretchType: t.stretchType, type: "stretch" };
  }
  _generateShadedReliefWebGLParams(e, t, r) {
    var a, l, s;
    let h = null, o = null;
    const u = this.lookup && this.lookup.colormapLut;
    e.colorRamp && u && (h = u.indexedColormap, o = u.offset);
    const n = { ...e, isGCS: t, resolution: r }, c = Lt(n), m = (a = be(this.rasterInfo.statistics)) == null ? void 0 : a[0];
    return { ...c, minValue: (l = m == null ? void 0 : m.min) != null ? l : 0, maxValue: (s = m == null ? void 0 : m.max) != null ? s : 8e3, hillshadeType: e.hillshadeType === "traditional" ? 0 : 1, type: "hillshade", colormap: h, colormapOffset: o };
  }
  _generateVectorFieldWebGLParams(e) {
    var t, r, a, l, s, h, o, u;
    const { style: n, inputUnit: c, outputUnit: m, visualVariables: p, symbolTileSize: C, flowRepresentation: S } = e;
    let g;
    const w = (t = (r = this.rasterInfo.statistics) == null ? void 0 : r[0].min) != null ? t : 0, i = (a = (l = this.rasterInfo.statistics) == null ? void 0 : l[0].max) != null ? a : 50, d = (s = p == null ? void 0 : p.find((k) => k.type === "sizeInfo")) != null ? s : { type: "sizeInfo", field: "Magnitude", maxDataValue: i, maxSize: 0.8 * C, minDataValue: w, minSize: 0.2 * C }, v = (h = d.minDataValue) != null ? h : w, b = (o = d.maxDataValue) != null ? o : i, f = te(d.maxSize) && te(d.minSize) ? [d.minSize / C, d.maxSize / C] : [0.2, 0.8];
    if (n === "wind_speed") {
      const k = (f[0] + f[1]) / 2;
      f[0] = f[1] = k;
    }
    const T = te(v) && te(b) ? [v, b] : null;
    if (n === "classified_arrow")
      if (te(v) && te(b) && te(d)) {
        g = [];
        const k = (d.maxDataValue - d.minDataValue) / 5;
        for (let R = 0; R < 6; R++)
          g.push(d.minDataValue + k * R);
      } else
        g = [0, 1e-6, 3.5, 7, 10.5, 14];
    const y = S === "flow_to" == (n === "ocean_current_kn" || n === "ocean_current_m") ? 0 : Math.PI, A = p == null ? void 0 : p.find((k) => k.type === "rotationInfo");
    return { breakValues: g, dataRange: T, inputUnit: c, outputUnit: m, symbolTileSize: C, symbolPercentRange: f, style: n || "single_arrow", rotation: y, rotationType: (u = this.rasterInfo.storageInfo) != null && u.tileInfo && this.rasterInfo.dataType === "vector-uv" ? "geographic" : (A == null ? void 0 : A.rotationType) || e.rotationType, type: "vectorField" };
  }
};
function Ct(e) {
  return Pe(e) && e.validPixelCount !== 0;
}
$([K({ json: { write: !0 } })], me.prototype, "rendererJSON", void 0), $([K({ type: Lr, json: { write: !0 } })], me.prototype, "rasterInfo", void 0), $([K({ json: { write: !0 } })], me.prototype, "lookup", void 0), $([K()], me.prototype, "canRenderInWebGL", void 0), me = $([je("geoscene.renderers.support.RasterSymbolizer")], me);
const eo = me;
export {
  dt as C,
  dr as N,
  Jr as O,
  hr as P,
  Hr as S,
  eo as T,
  ze as a,
  Je as b,
  He as c,
  Nr as f,
  Lr as l,
  Zr as m,
  Te as n,
  Pr as p,
  Xt as r,
  Ur as t,
  Qr as u,
  ur as x
};
