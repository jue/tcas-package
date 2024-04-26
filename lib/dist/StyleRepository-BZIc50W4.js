import { a as b, f as V, l as J } from "./StyleDefinition-lNHHnPSw.js";
import { U as ge, e as It } from "./enums-YM9SAu8u.js";
import { T as W } from "./enums-iri-XDIh.js";
import { l as Qt, db as I, iD as de } from "./index-Ek1MTSEY.js";
import { C as d } from "./enums-n72NRQQZ.js";
import { t as N } from "./VertexElementDescriptor-L2lGUBx9.js";
import { v as te, p as ee, z as re } from "./colorUtils-tSH3jtgH.js";
import { b as P } from "./GeometryUtils-lfXCngnH.js";
import { s as Dt } from "./Geometry-etmNDSLV.js";
let me = class {
  constructor(t) {
    this._array = [], t <= 0 && console.error("strideInBytes must be positive!"), this._stride = t;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t, e) {
    return 65535 & t | e << 16;
  }
  static i8888to32(t, e, r, i) {
    return 255 & t | (255 & e) << 8 | (255 & r) << 16 | i << 24;
  }
  static i8816to32(t, e, r) {
    return 255 & t | (255 & e) << 8 | r << 16;
  }
};
var c, q;
(function(n) {
  n[n.R8_SIGNED = 0] = "R8_SIGNED", n[n.R8_UNSIGNED = 1] = "R8_UNSIGNED", n[n.R16_SIGNED = 2] = "R16_SIGNED", n[n.R16_UNSIGNED = 3] = "R16_UNSIGNED", n[n.R8G8_SIGNED = 4] = "R8G8_SIGNED", n[n.R8G8_UNSIGNED = 5] = "R8G8_UNSIGNED", n[n.R16G16_SIGNED = 6] = "R16G16_SIGNED", n[n.R16G16_UNSIGNED = 7] = "R16G16_UNSIGNED", n[n.R8G8B8A8_SIGNED = 8] = "R8G8B8A8_SIGNED", n[n.R8G8B8A8_UNSIGNED = 9] = "R8G8B8A8_UNSIGNED", n[n.R8G8B8A8_COLOR = 10] = "R8G8B8A8_COLOR", n[n.R16G16B16A16_DASHARRAY = 11] = "R16G16B16A16_DASHARRAY", n[n.R16G16B16A16_PATTERN = 12] = "R16G16B16A16_PATTERN";
})(c || (c = {})), function(n) {
  n[n.UNIFORM = 0] = "UNIFORM", n[n.DATA_DRIVEN = 1] = "DATA_DRIVEN", n[n.INTERPOLATED_DATA_DRIVEN = 2] = "INTERPOLATED_DATA_DRIVEN", n[n.UNUSED = 3] = "UNUSED";
}(q || (q = {}));
let H = class Rt {
  constructor(t) {
    this._locations = /* @__PURE__ */ new Map(), this._key = t;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return this._locations.size === 0 && this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t, e, r, i, a) {
    const o = this.getUniforms();
    for (const s of o) {
      const { name: l, type: u, getValue: p } = s, h = p(r, e, i, a);
      if (h !== null)
        switch (u) {
          case "float":
            t.setUniform1f(l, h);
            break;
          case "vec2":
            t.setUniform2fv(l, h);
            break;
          case "vec4":
            t.setUniform4fv(l, h);
        }
    }
  }
  encodeAttributes(t, e, r, i) {
    const a = this.attributesInfo(), o = this.getEncodingInfos(), s = [];
    let l = 0, u = 0;
    for (const h of Object.keys(o)) {
      var p;
      const f = o[h], { type: m, precisionFactor: _, isLayout: g } = a[h], R = g ? r.getLayoutProperty(h) : r.getPaintProperty(h), F = (p = R.interpolator) == null ? void 0 : p.getInterpolationRange(e);
      let D = 0;
      for (const x of f) {
        const { offset: T, bufferElementsToAdd: O } = x;
        if (O > 0) {
          for (let k = 0; k < O; k++)
            s.push(0);
          l += u, u = x.bufferElementsToAdd;
        }
        const w = i ?? R.getValue(F ? F[D] : e, t);
        switch (m) {
          case c.R8_SIGNED:
          case c.R8_UNSIGNED:
            s[l] |= this._encodeByte(w * (_ || 1), 8 * T);
            break;
          case c.R16_SIGNED:
          case c.R16_UNSIGNED:
            s[l] |= this._encodeShort(w * (_ || 1), 8 * T);
            break;
          case c.R8G8_SIGNED:
          case c.R8G8_UNSIGNED:
            s[l] |= this._encodeByte(w * (_ || 1), 8 * T), s[l] |= this._encodeByte(w * (_ || 1), 8 * T + 8);
            break;
          case c.R16G16_SIGNED:
          case c.R16G16_UNSIGNED:
            s[l] |= this._encodeShort(w * (_ || 1), 8 * T), s[l] |= this._encodeShort(w * (_ || 1), 8 * T + 16);
            break;
          case c.R8G8B8A8_SIGNED:
          case c.R8G8B8A8_UNSIGNED:
            s[l] |= this._encodeByte(w * (_ || 1), 8 * T), s[l] |= this._encodeByte(w * (_ || 1), 8 * T + 8), s[l] |= this._encodeByte(w * (_ || 1), 8 * T + 16), s[l] |= this._encodeByte(w * (_ || 1), 8 * T + 24);
            break;
          case c.R8G8B8A8_COLOR:
            s[l] = this._encodeColor(w);
            break;
          case c.R16G16B16A16_DASHARRAY:
          case c.R16G16B16A16_PATTERN:
            this._encodePattern(l, s, w);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        D++;
      }
    }
    return s;
  }
  getAtributeState(t) {
    let e = 0;
    const r = 3 + 2 * t;
    return e |= this._bit(r), e |= this._bit(r + 1) << 1, e;
  }
  _buildAttributesInfo() {
    const t = [], e = {}, r = {};
    let i = -1;
    const a = this.attributesInfo(), o = this.attributes();
    let s = -1;
    for (const h of o) {
      s++;
      const f = this.getAtributeState(s);
      if (f === q.UNIFORM || f === q.UNUSED)
        continue;
      const m = a[h], _ = [];
      e[h] = _;
      const g = m.type;
      for (let R = 0; R < f; R++) {
        const { dataType: F, bytesPerElement: D, count: x, normalized: T } = Rt._encodingInfo[g], O = D * x;
        let w = r[F], k = 0;
        if (!w || w.count + x > 4)
          i++, w = { dataIndex: i, count: 0, offset: 0 }, x !== 4 && (r[F] = w), t.push({ location: -1, name: "a_data_" + i, count: x, type: F, normalized: T }), k = Math.ceil(Math.max(O / 4, 1));
        else {
          const z = t[w.dataIndex];
          z.count += x, k = Math.ceil(Math.max(z.count * D / 4, 1)) - Math.ceil(Math.max(w.offset / 4, 1));
        }
        _.push({ dataIndex: w.dataIndex, offset: w.offset, bufferElementsToAdd: k }), w.offset += O, w.count += x;
      }
    }
    for (const h of t)
      switch (h.type) {
        case d.BYTE:
        case d.UNSIGNED_BYTE:
          h.count = 4;
        case d.SHORT:
        case d.UNSIGNED_SHORT:
          h.count += h.count % 2;
      }
    this._buildVertexBufferLayout(t);
    let l = 0;
    const u = this._layoutInfo.geometry;
    for (const h of u)
      this._locations.set(h.name, l++);
    const p = this._layoutInfo.opacity;
    if (p)
      for (const h of p)
        this._locations.set(h.name, l++);
    this._buildShaderInfo(t, e), this._propertyEncodingInfo = e;
  }
  _buildVertexBufferLayout(t) {
    const e = {}, r = this.geometryInfo();
    let i = r[0].stride;
    if (t.length === 0)
      e.geometry = r;
    else {
      const a = [];
      let o = i;
      for (const s of t)
        i += ie(s.type) * s.count;
      for (const s of r) {
        const l = { ...s };
        l.stride = i, a.push(l);
      }
      for (const s of t)
        a.push(new N(s.name, s.count, s.type, o, i)), o += ie(s.type) * s.count;
      e.geometry = a;
    }
    this.opacityInfo() && (e.opacity = this.opacityInfo()), this._layoutInfo = e, this._stride = i;
  }
  _buildShaderInfo(t, e) {
    let r = `
`, i = `
`;
    const a = [];
    for (const u of t)
      r += `attribute ${this._getType(u.count)} ${u.name};
`;
    const o = this.attributes(), s = this.attributesInfo();
    let l = -1;
    for (const u of o) {
      l++;
      const { name: p, type: h, precisionFactor: f, isLayout: m } = s[u], _ = f && f !== 1 ? " * " + 1 / f : "", { bytesPerElement: g, count: R } = Rt._encodingInfo[h], F = (D) => `a_data_${D.dataIndex}${_e(R, D.offset, g)}`;
      switch (this.getAtributeState(l)) {
        case q.UNIFORM:
          {
            const D = this._getType(R), x = `u_${p}`;
            a.push({ name: x, type: D, getValue: (T, O, w, k) => {
              const z = m ? T.getLayoutValue(u, O) : T.getPaintValue(u, O);
              if (h === c.R16G16B16A16_DASHARRAY) {
                const $ = T.getDashKey(z, T.getLayoutValue("line-cap", O)), at = k.getMosaicItemPosition($, !1);
                if (Qt(at))
                  return null;
                const { tl: nt, br: Xt } = at;
                return [nt[0], Xt[1], Xt[0], nt[1]];
              }
              if (h === c.R16G16B16A16_PATTERN) {
                const $ = k.getMosaicItemPosition(z, u.indexOf("line-") === -1);
                if (Qt($))
                  return null;
                const { tl: at, br: nt } = $;
                return [at[0], nt[1], nt[0], at[1]];
              }
              if (h === c.R8G8B8A8_COLOR) {
                const $ = z[3];
                return [$ * z[0], $ * z[1], $ * z[2], $];
              }
              return z;
            } }), r += `uniform ${D} ${x};
`, i += `${D} ${p} = ${x};
`;
          }
          break;
        case q.DATA_DRIVEN:
          {
            const D = F(e[u][0]);
            i += `${this._getType(R)} ${p} = ${D}${_};
`;
          }
          break;
        case q.INTERPOLATED_DATA_DRIVEN: {
          const D = `u_t_${p}`;
          a.push({ name: D, type: "float", getValue: (O, w, k, z) => (m ? O.getLayoutProperty(u) : O.getPaintProperty(u)).interpolator.interpolationUniformValue(k, w) }), r += `uniform float ${D};
`;
          const x = F(e[u][0]), T = F(e[u][1]);
          i += `${this._getType(R)} ${p} = mix(${x}${_}, ${T}${_}, ${D});
`;
        }
      }
    }
    this._shaderHeader = r, this._shaderMain = i, this._uniforms = a;
  }
  _bit(t) {
    return (this._key & 1 << t) >> t;
  }
  _getType(t) {
    switch (t) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(t) {
    const e = 255 * t[3];
    return me.i8888to32(t[0] * e, t[1] * e, t[2] * e, e);
  }
  _encodePattern(t, e, r) {
    if (!r || !r.rect)
      return;
    const i = 2, a = r.rect, o = r.width, s = r.height;
    e[t] = this._encodeShort(a.x + i, 0), e[t] |= this._encodeShort(a.y + i + s, 16), e[t + 1] = this._encodeShort(a.x + i + o, 0), e[t + 1] |= this._encodeShort(a.y + i, 16);
  }
  _encodeByte(t, e) {
    return (255 & t) << e;
  }
  _encodeShort(t, e) {
    return (65535 & t) << e;
  }
};
H._encodingInfo = { [c.R8_SIGNED]: { dataType: d.BYTE, bytesPerElement: 1, count: 1, normalized: !1 }, [c.R8_UNSIGNED]: { dataType: d.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: !1 }, [c.R16_SIGNED]: { dataType: d.SHORT, bytesPerElement: 2, count: 1, normalized: !1 }, [c.R16_UNSIGNED]: { dataType: d.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: !1 }, [c.R8G8_SIGNED]: { dataType: d.BYTE, bytesPerElement: 1, count: 2, normalized: !1 }, [c.R8G8_UNSIGNED]: { dataType: d.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: !1 }, [c.R16G16_SIGNED]: { dataType: d.SHORT, bytesPerElement: 2, count: 2, normalized: !1 }, [c.R16G16_UNSIGNED]: { dataType: d.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: !1 }, [c.R8G8B8A8_SIGNED]: { dataType: d.BYTE, bytesPerElement: 1, count: 4, normalized: !1 }, [c.R8G8B8A8_UNSIGNED]: { dataType: d.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: !1 }, [c.R8G8B8A8_COLOR]: { dataType: d.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: !0 }, [c.R16G16B16A16_DASHARRAY]: { dataType: d.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: !1 }, [c.R16G16B16A16_PATTERN]: { dataType: d.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: !1 } };
const ie = (n) => {
  switch (n) {
    case d.FLOAT:
    case d.INT:
    case d.UNSIGNED_INT:
      return 4;
    case d.SHORT:
    case d.UNSIGNED_SHORT:
      return 2;
    case d.BYTE:
    case d.UNSIGNED_BYTE:
      return 1;
  }
}, _e = (n, t, e) => {
  const r = t / e;
  if (n === 1)
    switch (r) {
      case 0:
        return ".x";
      case 1:
        return ".y";
      case 2:
        return ".z";
      case 3:
        return ".w";
    }
  else if (n === 2)
    switch (r) {
      case 0:
        return ".xy";
      case 1:
        return ".yz";
      case 2:
        return ".zw";
    }
  else if (n === 3)
    switch (r) {
      case 0:
        return ".xyz";
      case 1:
        return ".yzw";
    }
  return "";
};
let X = class ht extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ht.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return ht.ATTRIBUTES;
  }
  attributesInfo() {
    return ht.ATTRIBUTES_INFO;
  }
};
X.ATTRIBUTES = [], X.GEOMETRY_LAYOUT = [new N("a_pos", 2, d.BYTE, 0, 2)], X.ATTRIBUTES_INFO = {};
let Q = class pt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return pt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return pt.ATTRIBUTES;
  }
  attributesInfo() {
    return pt.ATTRIBUTES_INFO;
  }
};
Q.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], Q.GEOMETRY_LAYOUT = [new N("a_pos", 2, d.SHORT, 0, 4)], Q.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: c.R8_UNSIGNED }, "circle-color": { name: "color", type: c.R8G8B8A8_COLOR }, "circle-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: c.R8G8B8A8_COLOR }, "circle-stroke-opacity": { name: "stroke_opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "circle-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 32 } };
let tt = class yt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return yt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return yt.ATTRIBUTES;
  }
  attributesInfo() {
    return yt.ATTRIBUTES_INFO;
  }
};
tt.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"], tt.GEOMETRY_LAYOUT = [new N("a_pos", 2, d.SHORT, 0, 4)], tt.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "fill-pattern": { name: "tlbr", type: c.R16G16B16A16_PATTERN, isOptional: !0 } };
let M = class Z extends H {
  constructor(t, e) {
    super(t), this.usefillColor = e;
  }
  geometryInfo() {
    return Z.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this.usefillColor ? Z.ATTRIBUTES_FILL : Z.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this.usefillColor ? Z.ATTRIBUTES_INFO_FILL : Z.ATTRIBUTES_INFO_OUTLINE;
  }
};
M.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], M.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], M.GEOMETRY_LAYOUT = [new N("a_pos", 2, d.SHORT, 0, 8), new N("a_offset", 2, d.BYTE, 4, 8), new N("a_xnormal", 2, d.BYTE, 6, 8)], M.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 } }, M.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 } };
let et = class ft extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ft.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return ft.ATTRIBUTES;
  }
  attributesInfo() {
    return ft.ATTRIBUTES_INFO;
  }
};
et.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width", "line-pattern", "line-dasharray"], et.GEOMETRY_LAYOUT = [new N("a_pos", 2, d.SHORT, 0, 16), new N("a_extrude_offset", 4, d.BYTE, 4, 16), new N("a_dir_normal", 4, d.BYTE, 8, 16), new N("a_accumulatedDistance", 2, d.UNSIGNED_SHORT, 12, 16)], et.ATTRIBUTES_INFO = { "line-width": { name: "width", type: c.R8_UNSIGNED, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: c.R8_UNSIGNED, precisionFactor: 2 }, "line-offset": { name: "offset", type: c.R8_SIGNED, precisionFactor: 2 }, "line-color": { name: "color", type: c.R8G8B8A8_COLOR }, "line-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "line-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "line-pattern": { name: "tlbr", type: c.R16G16B16A16_PATTERN, isOptional: !0 }, "line-dasharray": { name: "tlbr", type: c.R16G16B16A16_DASHARRAY, isOptional: !0 } };
const ue = [new N("a_pos", 2, d.SHORT, 0, 16), new N("a_vertexOffset", 2, d.SHORT, 4, 16), new N("a_texAngleRange", 4, d.UNSIGNED_BYTE, 8, 16), new N("a_levelInfo", 4, d.UNSIGNED_BYTE, 12, 16)], ce = [new N("a_opacityInfo", 1, d.UNSIGNED_BYTE, 0, 1)];
let ot = class At extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ue;
  }
  opacityInfo() {
    return ce;
  }
  attributes() {
    return At.ATTRIBUTES;
  }
  attributesInfo() {
    return At.ATTRIBUTES_INFO;
  }
};
ot.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], ot.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: c.R8G8B8A8_COLOR }, "icon-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR }, "icon-halo-width": { name: "halo_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "icon-size": { name: "size", type: c.R8_UNSIGNED, precisionFactor: 32, isLayout: !0 } };
let lt = class Nt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ue;
  }
  opacityInfo() {
    return ce;
  }
  attributes() {
    return Nt.ATTRIBUTES;
  }
  attributesInfo() {
    return Nt.ATTRIBUTES_INFO;
  }
};
lt.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], lt.ATTRIBUTES_INFO = { "text-color": { name: "color", type: c.R8G8B8A8_COLOR }, "text-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR }, "text-halo-width": { name: "halo_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "text-size": { name: "size", type: c.R8_UNSIGNED, isLayout: !0 } };
const he = { kind: "null" }, E = { kind: "number" }, B = { kind: "string" }, A = { kind: "boolean" }, Y = { kind: "color" }, Et = { kind: "object" }, C = { kind: "value" };
function ut(n, t) {
  return { kind: "array", itemType: n, n: t };
}
const we = [he, E, B, A, Y, Et, ut(C)];
function rt(n) {
  if (n.kind === "array") {
    const t = rt(n.itemType);
    return typeof n.n == "number" ? `array<${t}, ${n.n}>` : n.itemType.kind === "value" ? "array" : `array<${t}>`;
  }
  return n.kind;
}
function bt(n) {
  if (n === null)
    return he;
  if (typeof n == "string")
    return B;
  if (typeof n == "boolean")
    return A;
  if (typeof n == "number")
    return E;
  if (n instanceof I)
    return Y;
  if (Array.isArray(n)) {
    let t;
    for (const e of n) {
      const r = bt(e);
      if (t) {
        if (t !== r) {
          t = C;
          break;
        }
      } else
        t = r;
    }
    return ut(t || C, n.length);
  }
  return typeof n == "object" ? Et : C;
}
function xt(n, t) {
  if (t.kind === "array")
    return n.kind === "array" && (n.n === 0 && n.itemType.kind === "value" || xt(n.itemType, t.itemType)) && (typeof t.n != "number" || t.n === n.n);
  if (t.kind === "value") {
    for (const e of we)
      if (xt(n, e))
        return !0;
  }
  return t.kind === n.kind;
}
function Pt(n) {
  if (n === null)
    return "";
  const t = typeof n;
  return t === "string" ? n : t === "number" || t === "boolean" ? String(n) : n instanceof I ? n.toString() : JSON.stringify(n);
}
let ve = class {
  constructor(t) {
    this.parent = t, this.vars = {};
  }
  add(t, e) {
    this.vars[t] = e;
  }
  get(t) {
    return this.vars[t] ? this.vars[t] : this.parent ? this.parent.get(t) : null;
  }
};
class St {
  constructor() {
    this.type = C;
  }
  static parse(t) {
    if (t.length > 1)
      throw new Error('"id" does not expect arguments');
    return new St();
  }
  evaluate(t, e) {
    return t == null ? void 0 : t.id;
  }
}
let Ee = class pe {
  constructor() {
    this.type = B;
  }
  static parse(t) {
    if (t.length > 1)
      throw new Error('"geometry-type" does not expect arguments');
    return new pe();
  }
  evaluate(t, e) {
    if (!t)
      return null;
    switch (t.type) {
      case Dt.Point:
        return "Point";
      case Dt.LineString:
        return "LineString";
      case Dt.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
};
class Lt {
  constructor() {
    this.type = Et;
  }
  static parse(t) {
    if (t.length > 1)
      throw new Error('"properties" does not expect arguments');
    return new Lt();
  }
  evaluate(t, e) {
    return t == null ? void 0 : t.values;
  }
}
class Tt {
  constructor() {
    this.type = E;
  }
  static parse(t) {
    if (t.length > 1)
      throw new Error('"zoom" does not expect arguments');
    return new Tt();
  }
  evaluate(t, e) {
    return e;
  }
}
class U {
  constructor(t, e, r) {
    this.lhs = t, this.rhs = e, this.compare = r, this.type = A;
  }
  static parse(t, e, r) {
    if (t.length !== 3 && t.length !== 4)
      throw new Error(`"${t[0]}" expects 2 or 3 arguments`);
    if (t.length === 4)
      throw new Error(`"${t[0]}" collator not supported`);
    return new U(y(t[1], e), y(t[2], e), r);
  }
  evaluate(t, e) {
    return this.compare(this.lhs.evaluate(t, e), this.rhs.evaluate(t, e));
  }
}
class be extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r === i);
  }
}
class Te extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r !== i);
  }
}
class Ie extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r < i);
  }
}
class De extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r <= i);
  }
}
class Re extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r > i);
  }
}
let Ae = class extends U {
  static parse(t, e) {
    return U.parse(t, e, (r, i) => r >= i);
  }
};
class Ut {
  constructor(t) {
    this.arg = t, this.type = A;
  }
  static parse(t, e) {
    if (t.length !== 2)
      throw new Error('"!" expects 1 argument');
    return new Ut(y(t[1], e));
  }
  evaluate(t, e) {
    return !this.arg.evaluate(t, e);
  }
}
class Bt {
  constructor(t) {
    this.args = t, this.type = A;
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++)
      r.push(y(t[i], e));
    return new Bt(r);
  }
  evaluate(t, e) {
    for (const r of this.args)
      if (!r.evaluate(t, e))
        return !1;
    return !0;
  }
}
class Ot {
  constructor(t) {
    this.args = t, this.type = A;
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++)
      r.push(y(t[i], e));
    return new Ot(r);
  }
  evaluate(t, e) {
    for (const r of this.args)
      if (r.evaluate(t, e))
        return !0;
    return !1;
  }
}
class Gt {
  constructor(t) {
    this.args = t, this.type = A;
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++)
      r.push(y(t[i], e));
    return new Gt(r);
  }
  evaluate(t, e) {
    for (const r of this.args)
      if (r.evaluate(t, e))
        return !1;
    return !0;
  }
}
class kt {
  constructor(t, e, r) {
    this.type = t, this.args = e, this.fallback = r;
  }
  static parse(t, e, r) {
    if (t.length < 4)
      throw new Error('"case" expects at least 3 arguments');
    if (t.length % 2 == 1)
      throw new Error('"case" expects an odd number of arguments');
    let i;
    const a = [];
    for (let s = 1; s < t.length - 1; s += 2) {
      const l = y(t[s], e), u = y(t[s + 1], e, r);
      i || (i = u.type), a.push({ condition: l, output: u });
    }
    const o = y(t[t.length - 1], e, r);
    return i || (i = o.type), new kt(i, a, o);
  }
  evaluate(t, e) {
    for (const r of this.args)
      if (r.condition.evaluate(t, e))
        return r.output.evaluate(t, e);
    return this.fallback.evaluate(t, e);
  }
}
let Ne = class ye {
  constructor(t, e) {
    this.type = t, this.args = e;
  }
  static parse(t, e) {
    if (t.length < 2)
      throw new Error('"coalesce" expects at least 1 argument');
    let r;
    const i = [];
    for (let a = 1; a < t.length; a++) {
      const o = y(t[a], e);
      r || (r = o.type), i.push(o);
    }
    return new ye(r, i);
  }
  evaluate(t, e) {
    for (const r of this.args) {
      const i = r.evaluate(t, e);
      if (i !== null)
        return i;
    }
    return null;
  }
};
class zt {
  constructor(t, e, r, i, a) {
    this.type = t, this.input = e, this.labels = r, this.outputs = i, this.fallback = a;
  }
  static parse(t, e) {
    if (t.length < 3)
      throw new Error('"match" expects at least 3 arguments');
    if (t.length % 2 == 0)
      throw new Error('"case" expects an even number of arguments');
    let r;
    const i = y(t[1], e), a = [], o = {};
    let s;
    for (let l = 2; l < t.length - 1; l += 2) {
      let u = t[l];
      Array.isArray(u) || (u = [u]);
      for (const h of u) {
        const f = typeof h;
        if (f !== "string" && f !== "number")
          throw new Error('"match" requires string or number literal as labels');
        if (s) {
          if (f !== s)
            throw new Error('"match" requires labels to have the same type');
        } else
          s = f;
        o[h] = a.length;
      }
      const p = y(t[l + 1], e);
      r || (r = p.type), a.push(p);
    }
    return new zt(r, i, o, a, y(t[t.length - 1], e));
  }
  evaluate(t, e) {
    const r = this.input.evaluate(t, e);
    return (this.outputs[this.labels[r]] || this.fallback).evaluate(t, e);
  }
}
let gt = class j {
  constructor(t, e, r, i, a) {
    this.operator = t, this.type = e, this.interpolation = r, this.input = i, this.stops = a;
  }
  static parse(t, e, r) {
    const i = t[0];
    if (t.length < 5)
      throw new Error(`"${i}" expects at least 4 arguments`);
    const a = t[1];
    if (!Array.isArray(a) || a.length === 0)
      throw new Error(`"${a}" is not a valid interpolation`);
    switch (a[0]) {
      case "linear":
        if (a.length !== 1)
          throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (a.length !== 2 || typeof a[1] != "number")
          throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (a.length !== 5)
          throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let u = 1; u < 5; u++) {
          const p = a[u];
          if (typeof p != "number" || p < 0 || p > 1)
            throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t[0]}" unknown interpolation type "${a[0]}"`);
    }
    if (t.length % 2 != 1)
      throw new Error(`"${i}" expects an even number of arguments`);
    const o = y(t[2], e, E);
    let s;
    i === "interpolate-hcl" || i === "interpolate-lab" ? s = Y : r && r.kind !== "value" && (s = r);
    const l = [];
    for (let u = 3; u < t.length; u += 2) {
      const p = t[u];
      if (typeof p != "number")
        throw new Error(`"${i}" requires stop inputs as literal numbers`);
      if (l.length && l[l.length - 1][0] >= p)
        throw new Error(`"${i}" requires strictly ascending stop inputs`);
      const h = y(t[u + 1], e, s);
      s || (s = h.type), l.push([p, h]);
    }
    if (s && s !== Y && s !== E && (s.kind !== "array" || s.itemType !== E))
      throw new Error(`"${i}" cannot interpolate type ${rt(s)}`);
    return new j(i, s, a, o, l);
  }
  evaluate(t, e) {
    const r = this.stops;
    if (r.length === 1)
      return r[0][1].evaluate(t, e);
    const i = this.input.evaluate(t, e);
    if (i <= r[0][0])
      return r[0][1].evaluate(t, e);
    if (i >= r[r.length - 1][0])
      return r[r.length - 1][1].evaluate(t, e);
    let a = 0;
    for (; ++a < r.length && !(i < r[a][0]); )
      ;
    const o = r[a - 1][0], s = r[a][0], l = j.interpolationRatio(this.interpolation, i, o, s), u = r[a - 1][1].evaluate(t, e), p = r[a][1].evaluate(t, e);
    if (this.operator === "interpolate") {
      if (this.type.kind === "array" && Array.isArray(u) && Array.isArray(p))
        return u.map((h, f) => P(h, p[f], l));
      if (this.type.kind === "color" && u instanceof I && p instanceof I) {
        const h = new I(u), f = new I(p);
        return new I([P(h.r, f.r, l), P(h.g, f.g, l), P(h.b, f.b, l), P(h.a, f.a, l)]);
      }
      if (this.type.kind === "number" && typeof u == "number" && typeof p == "number")
        return P(u, p, l);
      throw new Error(`"${this.operator}" cannot interpolate type ${rt(this.type)}`);
    }
    if (this.operator === "interpolate-hcl") {
      const h = te(u), f = te(p), m = f.h - h.h, _ = ee({ h: h.h + l * (m > 180 || m < -180 ? m - 360 * Math.round(m / 360) : m), c: P(h.c, f.c, l), l: P(h.l, f.l, l) });
      return new I({ a: P(u.a, p.a, l), ..._ });
    }
    if (this.operator === "interpolate-lab") {
      const h = re(u), f = re(p), m = ee({ l: P(h.l, f.l, l), a: P(h.a, f.a, l), b: P(h.b, f.b, l) });
      return new I({ a: P(u.a, p.a, l), ...m });
    }
    throw new Error(`Unexpected operator "${this.operator}"`);
  }
  interpolationUniformValue(t, e) {
    const r = this.stops;
    if (r.length === 1 || t >= r[r.length - 1][0])
      return 0;
    let i = 0;
    for (; ++i < r.length && !(t < r[i][0]); )
      ;
    const a = r[i - 1][0], o = r[i][0];
    return j.interpolationRatio(this.interpolation, e, a, o);
  }
  getInterpolationRange(t) {
    const e = this.stops;
    if (e.length === 1) {
      const a = e[0][0];
      return [a, a];
    }
    const r = e[e.length - 1][0];
    if (t >= r)
      return [r, r];
    let i = 0;
    for (; ++i < e.length && !(t < e[i][0]); )
      ;
    return [e[i - 1][0], e[i][0]];
  }
  static interpolationRatio(t, e, r, i) {
    let a = 0;
    return t[0] === "linear" ? a = j._exponentialInterpolationRatio(e, 1, r, i) : t[0] === "exponential" ? a = j._exponentialInterpolationRatio(e, t[1], r, i) : t[0] === "cubic-bezier" && (a = de(t[1], t[2], t[3], t[4])(j._exponentialInterpolationRatio(e, 1, r, i), 1e-5)), a < 0 ? a = 0 : a > 1 && (a = 1), a;
  }
  static _exponentialInterpolationRatio(t, e, r, i) {
    const a = i - r;
    if (a === 0)
      return 0;
    const o = t - r;
    return e === 1 ? o / a : (e ** o - 1) / (e ** a - 1);
  }
};
class Ft {
  constructor(t, e, r) {
    this.type = t, this.input = e, this.stops = r;
  }
  static parse(t, e) {
    if (t.length < 5)
      throw new Error('"step" expects at least 4 arguments');
    if (t.length % 2 != 1)
      throw new Error('"step" expects an even number of arguments');
    const r = y(t[1], e, E);
    let i;
    const a = [];
    a.push([-1 / 0, y(t[2], e)]);
    for (let o = 3; o < t.length; o += 2) {
      const s = t[o];
      if (typeof s != "number")
        throw new Error('"step" requires stop inputs as literal numbers');
      if (a.length && a[a.length - 1][0] >= s)
        throw new Error('"step" requires strictly ascending stop inputs');
      const l = y(t[o + 1], e);
      i || (i = l.type), a.push([s, l]);
    }
    return new Ft(i, r, a);
  }
  evaluate(t, e) {
    const r = this.stops;
    if (r.length === 1)
      return r[0][1].evaluate(t, e);
    const i = this.input.evaluate(t, e);
    let a = 0;
    for (; ++a < r.length && !(i < r[a][0]); )
      ;
    return this.stops[a - 1][1].evaluate(t, e);
  }
}
class Vt {
  constructor(t, e) {
    this.type = t, this.output = e;
  }
  static parse(t, e, r) {
    if (t.length < 4)
      throw new Error('"let" expects at least 3 arguments');
    if (t.length % 2 == 1)
      throw new Error('"let" expects an odd number of arguments');
    const i = new ve(e);
    for (let o = 1; o < t.length - 1; o += 2) {
      const s = t[o];
      if (typeof s != "string")
        throw new Error(`"let" requires a string to define variable names - found ${s}`);
      i.add(s, y(t[o + 1], e));
    }
    const a = y(t[t.length - 1], i, r);
    return new Vt(a.type, a);
  }
  evaluate(t, e) {
    return this.output.evaluate(t, e);
  }
}
class Mt {
  constructor(t, e) {
    this.type = t, this.output = e;
  }
  static parse(t, e, r) {
    if (t.length !== 2 || typeof t[1] != "string")
      throw new Error('"var" requires just one literal string argument');
    const i = e.get(t[1]);
    if (!i)
      throw new Error(`${t[1]} must be defined before being used in a "var" expression`);
    return new Mt(r || C, i);
  }
  evaluate(t, e) {
    return this.output.evaluate(t, e);
  }
}
class $t {
  constructor(t, e, r) {
    this.type = t, this.index = e, this.array = r;
  }
  static parse(t, e) {
    if (t.length !== 3)
      throw new Error('"at" expects 2 arguments');
    const r = y(t[1], e, E), i = y(t[2], e);
    return new $t(i.type.itemType, r, i);
  }
  evaluate(t, e) {
    const r = this.index.evaluate(t, e), i = this.array.evaluate(t, e);
    if (r < 0 || r >= i.length)
      throw new Error('"at" index out of bounds');
    if (r !== Math.floor(r))
      throw new Error('"at" index must be an integer');
    return i[r];
  }
}
class dt {
  constructor(t, e) {
    this.key = t, this.obj = e, this.type = C;
  }
  static parse(t, e) {
    let r, i;
    switch (t.length) {
      case 2:
        return r = y(t[1], e), new dt(r);
      case 3:
        return r = y(t[1], e), i = y(t[2], e), new dt(r, i);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this.key.evaluate(t, e);
    return this.obj ? this.obj.evaluate(t, e)[r] : t == null ? void 0 : t.values[r];
  }
}
class mt {
  constructor(t, e) {
    this.key = t, this.obj = e, this.type = A;
  }
  static parse(t, e) {
    let r, i;
    switch (t.length) {
      case 2:
        return r = y(t[1], e), new mt(r);
      case 3:
        return r = y(t[1], e), i = y(t[2], e), new mt(r, i);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this.key.evaluate(t, e);
    return this.obj ? r in this.obj.evaluate(t, e) : !(t == null || !t.values[r]);
  }
}
class Ct {
  constructor(t, e) {
    this.key = t, this.vals = e, this.type = A;
  }
  static parse(t, e) {
    if (t.length !== 3)
      throw new Error('"in" expects 2 arguments');
    return new Ct(y(t[1], e), y(t[2], e));
  }
  evaluate(t, e) {
    const r = this.key.evaluate(t, e);
    return this.vals.evaluate(t, e).indexOf(r) !== -1;
  }
}
class _t {
  constructor(t, e, r) {
    this.item = t, this.array = e, this.from = r, this.type = E;
  }
  static parse(t, e) {
    if (t.length < 3 || t.length > 4)
      throw new Error('"index-of" expects 3 or 4 arguments');
    const r = y(t[1], e), i = y(t[2], e);
    if (t.length === 4) {
      const a = y(t[3], e, E);
      return new _t(r, i, a);
    }
    return new _t(r, i);
  }
  evaluate(t, e) {
    const r = this.item.evaluate(t, e), i = this.array.evaluate(t, e);
    if (this.from) {
      const a = this.from.evaluate(t, e);
      if (a !== Math.floor(a))
        throw new Error('"index-of" index must be an integer');
      return i.indexOf(r, a);
    }
    return i.indexOf(r);
  }
}
class Yt {
  constructor(t) {
    this.arg = t, this.type = E;
  }
  static parse(t, e) {
    if (t.length !== 2)
      throw new Error('"length" expects 2 arguments');
    const r = y(t[1], e);
    return new Yt(r);
  }
  evaluate(t, e) {
    const r = this.arg.evaluate(t, e);
    if (typeof r == "string" || Array.isArray(r))
      return r.length;
    throw new Error('"length" expects string or array');
  }
}
class wt {
  constructor(t, e, r, i) {
    this.type = t, this.array = e, this.from = r, this.to = i;
  }
  static parse(t, e) {
    if (t.length < 3 || t.length > 4)
      throw new Error('"slice" expects 2 or 3 arguments');
    const r = y(t[1], e), i = y(t[2], e, E);
    if (i.type !== E)
      throw new Error('"slice" index must return a number');
    if (t.length === 4) {
      const a = y(t[3], e, E);
      if (a.type !== E)
        throw new Error('"slice" index must return a number');
      return new wt(r.type, r, i, a);
    }
    return new wt(r.type, r, i);
  }
  evaluate(t, e) {
    const r = this.array.evaluate(t, e);
    if (!Array.isArray(r) && typeof r != "string")
      throw new Error('"slice" input must be an array or a string');
    const i = this.from.evaluate(t, e);
    if (i < 0 || i >= r.length)
      throw new Error('"slice" index out of bounds');
    if (i !== Math.floor(i))
      throw new Error('"slice" index must be an integer');
    if (this.to) {
      const a = this.to.evaluate(t, e);
      if (a < 0 || a >= r.length)
        throw new Error('"slice" index out of bounds');
      if (a !== Math.floor(a))
        throw new Error('"slice" index must be an integer');
      return r.slice(i, a);
    }
    return r.slice(i);
  }
}
class Ht {
  constructor() {
    this.type = A;
  }
  static parse(t) {
    if (t.length !== 1)
      throw new Error('"has-id" expects no arguments');
    return new Ht();
  }
  evaluate(t, e) {
    return t && t.id !== void 0;
  }
}
class S {
  constructor(t, e) {
    this.args = t, this.calculate = e, this.type = E;
  }
  static parse(t, e, r) {
    const i = t.slice(1).map((a) => y(a, e));
    return new S(i, r);
  }
  evaluate(t, e) {
    let r;
    return this.args && (r = this.args.map((i) => i.evaluate(t, e))), this.calculate(r);
  }
}
class xe extends S {
  static parse(t, e) {
    switch (t.length) {
      case 2:
        return S.parse(t, e, (r) => -r[0]);
      case 3:
        return S.parse(t, e, (r) => r[0] - r[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
}
class Pe extends S {
  static parse(t, e) {
    return S.parse(t, e, (r) => {
      let i = 1;
      for (const a of r)
        i *= a;
      return i;
    });
  }
}
class Se extends S {
  static parse(t, e) {
    if (t.length === 3)
      return S.parse(t, e, (r) => r[0] / r[1]);
    throw new Error('"/" expects 2 arguments');
  }
}
class Le extends S {
  static parse(t, e) {
    if (t.length === 3)
      return S.parse(t, e, (r) => r[0] % r[1]);
    throw new Error('"%" expects 2 arguments');
  }
}
class Ue extends S {
  static parse(t, e) {
    if (t.length === 3)
      return S.parse(t, e, (r) => r[0] ** r[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
}
class Be extends S {
  static parse(t, e) {
    return S.parse(t, e, (r) => {
      let i = 0;
      for (const a of r)
        i += a;
      return i;
    });
  }
}
class v {
  constructor(t, e) {
    this.args = t, this.calculate = e, this.type = E;
  }
  static parse(t, e) {
    const r = t.slice(1).map((i) => y(i, e));
    return new v(r, v.ops[t[0]]);
  }
  evaluate(t, e) {
    let r;
    return this.args && (r = this.args.map((i) => i.evaluate(t, e))), this.calculate(r);
  }
}
v.ops = { abs: (n) => Math.abs(n[0]), acos: (n) => Math.acos(n[0]), asin: (n) => Math.asin(n[0]), atan: (n) => Math.atan(n[0]), ceil: (n) => Math.ceil(n[0]), cos: (n) => Math.cos(n[0]), e: () => Math.E, floor: (n) => Math.floor(n[0]), ln: (n) => Math.log(n[0]), ln2: () => Math.LN2, log10: (n) => Math.log(n[0]) / Math.LN10, log2: (n) => Math.log(n[0]) / Math.LN2, max: (n) => Math.max(...n), min: (n) => Math.min(...n), pi: () => Math.PI, round: (n) => Math.round(n[0]), sin: (n) => Math.sin(n[0]), sqrt: (n) => Math.sqrt(n[0]), tan: (n) => Math.tan(n[0]) };
class jt {
  constructor(t) {
    this.args = t, this.type = B;
  }
  static parse(t, e) {
    return new jt(t.slice(1).map((r) => y(r, e)));
  }
  evaluate(t, e) {
    return this.args.map((r) => r.evaluate(t, e)).join("");
  }
}
class it {
  constructor(t, e) {
    this.arg = t, this.calculate = e, this.type = B;
  }
  static parse(t, e) {
    if (t.length !== 2)
      throw new Error(`${t[0]} expects 1 argument`);
    const r = y(t[1], e);
    return new it(r, it.ops[t[0]]);
  }
  evaluate(t, e) {
    return this.calculate(this.arg.evaluate(t, e));
  }
}
it.ops = { downcase: (n) => n.toLowerCase(), upcase: (n) => n.toUpperCase() };
class qt {
  constructor(t) {
    this.args = t, this.type = Y;
  }
  static parse(t, e) {
    if (t.length !== 4)
      throw new Error('"rgb" expects 3 arguments');
    const r = t.slice(1).map((i) => y(i, e));
    return new qt(r);
  }
  evaluate(t, e) {
    const r = this._validate(this.args[0].evaluate(t, e)), i = this._validate(this.args[1].evaluate(t, e)), a = this._validate(this.args[2].evaluate(t, e));
    return new I({ r, g: i, b: a });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
}
class Kt {
  constructor(t) {
    this.args = t, this.type = Y;
  }
  static parse(t, e) {
    if (t.length !== 5)
      throw new Error('"rgba" expects 4 arguments');
    const r = t.slice(1).map((i) => y(i, e));
    return new Kt(r);
  }
  evaluate(t, e) {
    const r = this._validate(this.args[0].evaluate(t, e)), i = this._validate(this.args[1].evaluate(t, e)), a = this._validate(this.args[2].evaluate(t, e)), o = this._validateAlpha(this.args[3].evaluate(t, e));
    return new I({ r, g: i, b: a, a: o });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
  _validateAlpha(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error(`${t}: invalid alpha color component`);
    return t;
  }
}
class Wt {
  constructor(t) {
    this.color = t, this.type = ut(E, 4);
  }
  static parse(t, e) {
    if (t.length !== 2)
      throw new Error('"to-rgba" expects 1 argument');
    const r = y(t[1], e);
    return new Wt(r);
  }
  evaluate(t, e) {
    return new I(this.color.evaluate(t, e)).toRgba();
  }
}
class K {
  constructor(t, e) {
    this.type = t, this.args = e;
  }
  static parse(t, e) {
    const r = t[0];
    if (t.length < 2)
      throw new Error(`${r} expects at least one argument`);
    let i, a = 1;
    if (r === "array") {
      if (t.length > 2) {
        switch (t[1]) {
          case "string":
            i = B;
            break;
          case "number":
            i = E;
            break;
          case "boolean":
            i = A;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        a++;
      } else
        i = C;
      let s;
      if (t.length > 3) {
        if (s = t[2], s !== null && (typeof s != "number" || s < 0 || s !== Math.floor(s)))
          throw new Error('"array" length argument must be a positive integer literal');
        a++;
      }
      i = ut(i, s);
    } else
      switch (r) {
        case "string":
          i = B;
          break;
        case "number":
          i = E;
          break;
        case "boolean":
          i = A;
          break;
        case "object":
          i = Et;
      }
    const o = [];
    for (; a < t.length; a++) {
      const s = y(t[a], e);
      o.push(s);
    }
    return new K(i, o);
  }
  evaluate(t, e) {
    let r;
    for (const i of this.args) {
      const a = i.evaluate(t, e);
      if (r = bt(a), xt(r, this.type))
        return a;
    }
    throw new Error(`Expected ${rt(this.type)} but got ${rt(r)}`);
  }
}
class G {
  constructor(t, e) {
    this.type = t, this.args = e;
  }
  static parse(t, e) {
    const r = t[0], i = G.types[r];
    if (i === A || i === B) {
      if (t.length !== 2)
        throw new Error(`${r} expects one argument`);
    } else if (t.length < 2)
      throw new Error(`${r} expects at least one argument`);
    const a = [];
    for (let o = 1; o < t.length; o++) {
      const s = y(t[o], e);
      a.push(s);
    }
    return new G(i, a);
  }
  evaluate(t, e) {
    if (this.type === A)
      return !!this.args[0].evaluate(t, e);
    if (this.type === B)
      return Pt(this.args[0].evaluate(t, e));
    if (this.type === E) {
      for (const r of this.args) {
        const i = Number(r.evaluate(t, e));
        if (!isNaN(i))
          return i;
      }
      return null;
    }
    if (this.type === Y) {
      for (const r of this.args)
        try {
          const i = G.toColor(r.evaluate(t, e));
          if (i instanceof I)
            return i;
        } catch {
        }
      return null;
    }
  }
  static toBoolean(t) {
    return !!t;
  }
  static toString(t) {
    return Pt(t);
  }
  static toNumber(t) {
    const e = Number(t);
    if (isNaN(e))
      throw new Error(`"${t}" is not a number`);
    return e;
  }
  static toColor(t) {
    if (t instanceof I)
      return t;
    if (typeof t == "string") {
      const e = I.fromString(t);
      if (e)
        return e;
      throw new Error(`"${t}" is not a color`);
    }
    if (Array.isArray(t))
      return I.fromArray(t);
    throw new Error(`"${t}" is not a color`);
  }
}
G.types = { "to-boolean": A, "to-color": Y, "to-number": E, "to-string": B };
class Zt {
  constructor(t) {
    this.val = t, this.type = bt(t);
  }
  static parse(t) {
    if (t.length !== 2)
      throw new Error('"literal" expects 1 argument');
    return new Zt(t[1]);
  }
  evaluate(t, e) {
    return this.val;
  }
}
class Jt {
  constructor(t) {
    this.arg = t, this.type = B;
  }
  static parse(t, e) {
    if (t.length !== 2)
      throw new Error('"typeof" expects 1 argument');
    return new Jt(y(t[1], e));
  }
  evaluate(t, e) {
    return rt(bt(this.arg.evaluate(t, e)));
  }
}
function y(n, t, e) {
  const r = typeof n;
  if (r === "string" || r === "boolean" || r === "number" || n === null) {
    if (e)
      switch (e.kind) {
        case "string":
          r !== "string" && (n = G.toString(n));
          break;
        case "number":
          r !== "number" && (n = G.toNumber(n));
          break;
        case "color":
          n = G.toColor(n);
      }
    n = ["literal", n];
  }
  if (!Array.isArray(n) || n.length === 0)
    throw new Error("Expression must be a non empty array");
  const i = n[0];
  if (typeof i != "string")
    throw new Error("First element of expression must be a string");
  const a = fe[i];
  if (a === void 0)
    throw new Error(`Invalid expression operator "${i}"`);
  if (!a)
    throw new Error(`Unimplemented expression operator "${i}"`);
  return a.parse(n, t, e);
}
const fe = { array: K, boolean: K, collator: null, format: null, image: null, literal: Zt, number: K, "number-format": null, object: K, string: K, "to-boolean": G, "to-color": G, "to-number": G, "to-string": G, typeof: Jt, accumulated: null, "feature-state": null, "geometry-type": Ee, id: St, "line-progress": null, properties: Lt, at: $t, get: dt, has: mt, in: Ct, "index-of": _t, length: Yt, slice: wt, "!": Ut, "!=": Te, "<": Ie, "<=": De, "==": be, ">": Re, ">=": Ae, all: Bt, any: Ot, case: kt, coalesce: Ne, match: zt, within: null, interpolate: gt, "interpolate-hcl": gt, "interpolate-lab": gt, step: Ft, let: Vt, var: Mt, concat: jt, downcase: it, "is-supported-script": null, "resolved-locale": null, upcase: it, rgb: qt, rgba: Kt, "to-rgba": Wt, "-": xe, "*": Pe, "/": Se, "%": Le, "^": Ue, "+": Be, abs: v, acos: v, asin: v, atan: v, ceil: v, cos: v, e: v, floor: v, ln: v, ln2: v, log10: v, log2: v, max: v, min: v, pi: v, round: v, sin: v, sqrt: v, tan: v, zoom: Tt, "heatmap-density": null, "has-id": Ht, none: Gt };
class L {
  constructor(t) {
    this._expression = t;
  }
  filter(t, e) {
    if (!this._expression)
      return !0;
    try {
      return this._expression.evaluate(t, e);
    } catch (r) {
      return console.log(r.message), !0;
    }
  }
  static createFilter(t) {
    if (!t)
      return null;
    this.isLegacyFilter(t) && (t = this.convertLegacyFilter(t));
    try {
      const e = y(t, null, A);
      return new L(e);
    } catch (e) {
      return console.log(e.message), null;
    }
  }
  static isLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0)
      return !0;
    switch (t[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return t.length === 3 && typeof t[1] == "string" && !Array.isArray(t[2]);
      case "in":
        return t.length >= 3 && typeof t[1] == "string" && !Array.isArray(t[2]);
      case "!in":
      case "none":
      case "!has":
        return !0;
      case "any":
      case "all":
        for (let e = 1; e < t.length; e++)
          if (!this.isLegacyFilter(t[1]))
            return !1;
        return !0;
      case "has":
        return t.length === 2 && (t[1] === "$id" || t[1] === "$type");
      default:
        return !1;
    }
  }
  static convertLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0)
      return !0;
    const e = t[0];
    if (t.length === 1)
      return e !== "any";
    switch (e) {
      case "==":
        return L.convertComparison("==", t[1], t[2]);
      case "!=":
        return L.negate(L.convertComparison("==", t[1], t[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return L.convertComparison(e, t[1], t[2]);
      case "in":
        return L.convertIn(t[1], t.slice(2));
      case "!in":
        return L.negate(L.convertIn(t[1], t.slice(2)));
      case "any":
      case "all":
      case "none":
        return L.convertCombining(e, t.slice(1));
      case "has":
        return L.convertHas(t[1]);
      case "!has":
        return L.negate(L.convertHas(t[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(t, e, r) {
    switch (e) {
      case "$type":
        return [t, ["geometry-type"], r];
      case "$id":
        return [t, ["id"], r];
      default:
        return [t, ["get", e], r];
    }
  }
  static convertIn(t, e) {
    switch (t) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", e]];
      case "$id":
        return ["in", ["id"], ["literal", e]];
      default:
        return ["in", ["get", t], ["literal", e]];
    }
  }
  static convertHas(t) {
    switch (t) {
      case "$type":
        return !0;
      case "$id":
        return ["has-id"];
      default:
        return ["has", t];
    }
  }
  static convertCombining(t, e) {
    return [t].concat(e.map(this.convertLegacyFilter));
  }
  static negate(t) {
    return ["!", t];
  }
}
class vt {
  constructor(t, e) {
    let r;
    switch (this.isDataDriven = !1, this.interpolator = null, t.type) {
      case "number":
      case "color":
        r = !0;
        break;
      case "array":
        r = t.value === "number";
        break;
      default:
        r = !1;
    }
    if (e == null && (e = t.default), Array.isArray(e) && e.length > 0 && fe[e[0]]) {
      const a = { number: E, color: Y, string: B, boolean: A, enum: B };
      try {
        const o = t.type === "array" ? ut(a[t.value] || C, t.length) : a[t.type], s = y(e, null, o);
        this.getValue = this._buildExpression(s, t), this.isDataDriven = !0, s instanceof gt && s.input instanceof Tt && (this.interpolator = s);
      } catch (o) {
        console.log(o.message), this.getValue = this._buildSimple(t.default);
      }
      return;
    }
    r && e.type === "interval" && (r = !1);
    const i = e && e.stops && e.stops.length > 0;
    if (i)
      for (const a of e.stops)
        a[1] = this._validate(a[1], t);
    if (this.isDataDriven = !!e && !!e.property, this.isDataDriven)
      if (e.default !== void 0 && (e.default = this._validate(e.default, t)), i)
        switch (e.type) {
          case "identity":
            this.getValue = this._buildIdentity(e, t);
            break;
          case "categorical":
            this.getValue = this._buildCategorical(e, t);
            break;
          default:
            this.getValue = r ? this._buildInterpolate(e, t) : this._buildInterval(e, t);
        }
      else
        this.getValue = this._buildIdentity(e, t);
    else
      i ? this.getValue = r ? this._buildZoomInterpolate(e) : this._buildZoomInterval(e) : (e = this._validate(e, t), this.getValue = this._buildSimple(e));
  }
  _validate(t, e) {
    if (e.type === "number") {
      if (t < e.minimum)
        return e.minimum;
      if (t > e.maximum)
        return e.maximum;
    } else
      e.type === "color" ? t = vt._parseColor(t) : e.type === "enum" ? typeof t == "string" && (t = e.values.indexOf(t)) : e.type === "array" && e.value === "enum" ? t = t.map((r) => typeof r == "string" ? e.values.indexOf(r) : r) : e.type === "string" && (t = Pt(t));
    return t;
  }
  _buildSimple(t) {
    return () => t;
  }
  _buildExpression(t, e) {
    return (r, i) => {
      try {
        const a = t.evaluate(i, r);
        return a === void 0 ? e.default : this._validate(a, e);
      } catch (a) {
        return console.log(a.message), e.default;
      }
    };
  }
  _buildIdentity(t, e) {
    return (r, i) => {
      let a;
      return i && (a = i.values[t.property]), a !== void 0 && (a = this._validate(a, e)), a ?? (t.default !== void 0 ? t.default : e.default);
    };
  }
  _buildCategorical(t, e) {
    return (r, i) => {
      let a;
      return i && (a = i.values[t.property]), a = this._categorical(a, t.stops), a !== void 0 ? a : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildInterval(t, e) {
    return (r, i) => {
      let a;
      return i && (a = i.values[t.property]), typeof a == "number" ? this._interval(a, t.stops) : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildInterpolate(t, e) {
    return (r, i) => {
      let a;
      return i && (a = i.values[t.property]), typeof a == "number" ? this._interpolate(a, t.stops, t.base || 1) : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildZoomInterpolate(t) {
    return (e) => this._interpolate(e, t.stops, t.base || 1);
  }
  _buildZoomInterval(t) {
    return (e) => this._interval(e, t.stops);
  }
  _categorical(t, e) {
    const r = e.length;
    for (let i = 0; i < r; i++)
      if (e[i][0] === t)
        return e[i][1];
  }
  _interval(t, e) {
    const r = e.length;
    let i = 0;
    for (let a = 0; a < r && e[a][0] <= t; a++)
      i = a;
    return e[i][1];
  }
  _interpolate(t, e, r) {
    let i, a;
    const o = e.length;
    for (let s = 0; s < o; s++) {
      const l = e[s];
      if (!(l[0] <= t)) {
        a = l;
        break;
      }
      i = l;
    }
    if (i && a) {
      const s = a[0] - i[0], l = t - i[0], u = r === 1 ? l / s : (r ** l - 1) / (r ** s - 1);
      if (Array.isArray(i[1])) {
        const p = i[1], h = a[1], f = [];
        for (let m = 0; m < p.length; m++)
          f.push(P(p[m], h[m], u));
        return f;
      }
      return P(i[1], a[1], u);
    }
    return i ? i[1] : a ? a[1] : void 0;
  }
  static _isEmpty(t) {
    for (const e in t)
      if (t.hasOwnProperty(e))
        return !1;
    return !0;
  }
  static _parseColor(t) {
    return Array.isArray(t) ? t : (typeof t == "string" && (t = new I(t)), t instanceof I && !this._isEmpty(t) ? I.toUnitRGBA(t) : void 0);
  }
}
class ct {
  constructor(t, e, r, i) {
    switch (this.type = t, this.typeName = e.type, this.id = e.id, this.source = e.source, this.sourceLayer = e["source-layer"], this.minzoom = e.minzoom, this.maxzoom = e.maxzoom, this.filter = e.filter, this.layout = e.layout, this.paint = e.paint, this.z = r, this.uid = i, t) {
      case b.BACKGROUND:
        this._layoutDefinition = V.backgroundLayoutDefinition, this._paintDefinition = V.backgroundPaintDefinition;
        break;
      case b.FILL:
        this._layoutDefinition = V.fillLayoutDefinition, this._paintDefinition = V.fillPaintDefinition;
        break;
      case b.LINE:
        this._layoutDefinition = V.lineLayoutDefinition, this._paintDefinition = V.linePaintDefinition;
        break;
      case b.SYMBOL:
        this._layoutDefinition = V.symbolLayoutDefinition, this._paintDefinition = V.symbolPaintDefinition;
        break;
      case b.CIRCLE:
        this._layoutDefinition = V.circleLayoutDefinition, this._paintDefinition = V.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return this._featureFilter !== void 0 ? this._featureFilter : this._featureFilter = L.createFilter(this.filter);
  }
  getLayoutProperty(t) {
    return this._layoutProperties[t];
  }
  getPaintProperty(t) {
    return this._paintProperties[t];
  }
  getLayoutValue(t, e, r) {
    let i;
    const a = this._layoutProperties[t];
    return a && (i = a.getValue(e, r)), i === void 0 && (i = this._layoutDefinition[t].default), i;
  }
  getPaintValue(t, e, r) {
    let i;
    const a = this._paintProperties[t];
    return a && (i = a.getValue(e, r)), i === void 0 && (i = this._paintDefinition[t].default), i;
  }
  isPainterDataDriven() {
    const t = this._paintProperties;
    if (t) {
      for (const e in t)
        if (t[e].isDataDriven)
          return !0;
    }
    return !1;
  }
  _parseLayout(t) {
    const e = {};
    for (const r in t) {
      const i = this._layoutDefinition[r];
      i && (e[r] = new vt(i, t[r]));
    }
    return e;
  }
  _parsePaint(t) {
    const e = {};
    for (const r in t) {
      const i = this._paintDefinition[r];
      i && (e[r] = new vt(i, t[r]));
    }
    return e;
  }
  computeAttributesKey(t, e, r, i) {
    let a = 0, o = 0;
    for (const s of e) {
      let l = 3;
      if (!s || s !== i) {
        const u = r[s], { isLayout: p, isOptional: h } = u, f = p ? this.getLayoutProperty(s) : this.getPaintProperty(s);
        l = f != null && f.interpolator ? 2 : f != null && f.isDataDriven ? 1 : h && !f ? 3 : 0;
      }
      o |= l << a, a += 2;
    }
    return o << 3 | t;
  }
}
class ae extends ct {
  constructor(t, e, r, i) {
    super(t, e, r, i), this.backgroundMaterial = new X(this.computeAttributesKey(W.BACKGROUND, X.ATTRIBUTES, X.ATTRIBUTES_INFO));
  }
}
class ne extends ct {
  constructor(t, e, r, i) {
    super(t, e, r, i);
    const a = this.getPaintProperty("fill-color"), o = this.getPaintProperty("fill-opacity"), s = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = a == null ? void 0 : a.isDataDriven, this.hasDataDrivenOpacity = o == null ? void 0 : o.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || (s == null ? void 0 : s.isDataDriven);
    const l = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !l, this.hasDataDrivenOutlineColor = l == null ? void 0 : l.isDataDriven, this.hasDataDrivenOutline = l ? l.isDataDriven : !!a && a.isDataDriven, this.hasDataDrivenOutline = (l ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new tt(this.computeAttributesKey(W.FILL, tt.ATTRIBUTES, tt.ATTRIBUTES_INFO)), this.outlineMaterial = new M(this.computeAttributesKey(W.OUTLINE, this.outlineUsesFillColor ? M.ATTRIBUTES_FILL : M.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? M.ATTRIBUTES_INFO_FILL : M.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
}
class se extends ct {
  constructor(t, e, r, i) {
    var a, o, s, l, u, p, h, f, m;
    super(t, e, r, i);
    const _ = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new et(this.computeAttributesKey(W.LINE, et.ATTRIBUTES, et.ATTRIBUTES_INFO, _ ? "line-dasharray" : "")), this.hasDataDrivenLine = ((a = this.getPaintProperty("line-blur")) == null ? void 0 : a.isDataDriven) || ((o = this.getPaintProperty("line-color")) == null ? void 0 : o.isDataDriven) || ((s = this.getPaintProperty("line-gap-width")) == null ? void 0 : s.isDataDriven) || ((l = this.getPaintProperty("line-offset")) == null ? void 0 : l.isDataDriven) || ((u = this.getPaintProperty("line-opacity")) == null ? void 0 : u.isDataDriven) || ((p = this.getPaintProperty("line-pattern")) == null ? void 0 : p.isDataDriven) || ((h = this.getPaintProperty("line-dasharray")) == null ? void 0 : h.isDataDriven) || ((f = this.getLayoutProperty("line-cap")) == null ? void 0 : f.isDataDriven) || ((m = this.getPaintProperty("line-width")) == null ? void 0 : m.isDataDriven), this.canUseThinTessellation = !1, !this.hasDataDrivenLine) {
      const g = this.getPaintProperty("line-width");
      if (!g || typeof g == "number" && 0.5 * g < ge) {
        const R = this.getPaintProperty("line-offset");
        (!R || typeof R == "number" && R === 0) && (this.canUseThinTessellation = !0);
      }
    }
  }
  getDashKey(t, e) {
    let r;
    switch (e) {
      case It.BUTT:
        r = "Butt";
        break;
      case It.ROUND:
        r = "Round";
        break;
      case It.SQUARE:
        r = "Square";
        break;
      default:
        r = "Butt";
    }
    return `dasharray-[${t.toString()}]-${r}`;
  }
}
class oe extends ct {
  constructor(t, e, r, i) {
    var a, o, s, l, u, p, h, f, m, _, g, R;
    super(t, e, r, i), this.iconMaterial = new ot(this.computeAttributesKey(W.ICON, ot.ATTRIBUTES, ot.ATTRIBUTES_INFO)), this.textMaterial = new lt(this.computeAttributesKey(W.TEXT, lt.ATTRIBUTES, lt.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = ((a = this.getPaintProperty("icon-color")) == null ? void 0 : a.isDataDriven) || ((o = this.getPaintProperty("icon-halo-blur")) == null ? void 0 : o.isDataDriven) || ((s = this.getPaintProperty("icon-halo-color")) == null ? void 0 : s.isDataDriven) || ((l = this.getPaintProperty("icon-halo-width")) == null ? void 0 : l.isDataDriven) || ((u = this.getPaintProperty("icon-opacity")) == null ? void 0 : u.isDataDriven) || ((p = this.getLayoutProperty("icon-size")) == null ? void 0 : p.isDataDriven), this.hasDataDrivenText = ((h = this.getPaintProperty("text-color")) == null ? void 0 : h.isDataDriven) || ((f = this.getPaintProperty("text-halo-blur")) == null ? void 0 : f.isDataDriven) || ((m = this.getPaintProperty("text-halo-color")) == null ? void 0 : m.isDataDriven) || ((_ = this.getPaintProperty("text-halo-width")) == null ? void 0 : _.isDataDriven) || ((g = this.getPaintProperty("text-opacity")) == null ? void 0 : g.isDataDriven) || ((R = this.getLayoutProperty("text-size")) == null ? void 0 : R.isDataDriven);
  }
}
class le extends ct {
  constructor(t, e, r, i) {
    super(t, e, r, i), this.circleMaterial = new Q(this.computeAttributesKey(W.CIRCLE, Q.ATTRIBUTES, Q.ATTRIBUTES_INFO));
  }
}
class qe {
  constructor(t, e, r) {
    var i, a, o, s, l;
    let u;
    this.allowOverlap = t.getLayoutValue("icon-allow-overlap", e), this.ignorePlacement = t.getLayoutValue("icon-ignore-placement", e), this.keepUpright = t.getLayoutValue("icon-keep-upright", e), this.optional = t.getLayoutValue("icon-optional", e), this.rotationAlignment = t.getLayoutValue("icon-rotation-alignment", e), this.rotationAlignment === J.AUTO && (this.rotationAlignment = r ? J.MAP : J.VIEWPORT), u = t.getLayoutProperty("icon-anchor"), (i = u) != null && i.isDataDriven ? this._anchorProp = u : this.anchor = t.getLayoutValue("icon-anchor", e), u = t.getLayoutProperty("icon-offset"), (a = u) != null && a.isDataDriven ? this._offsetProp = u : this.offset = t.getLayoutValue("icon-offset", e), u = t.getLayoutProperty("icon-padding"), (o = u) != null && o.isDataDriven ? this._paddingProp = u : this.padding = t.getLayoutValue("icon-padding", e), u = t.getLayoutProperty("icon-rotate"), (s = u) != null && s.isDataDriven ? this._rotateProp = u : this.rotate = t.getLayoutValue("icon-rotate", e), u = t.getLayoutProperty("icon-size"), (l = u) != null && l.isDataDriven ? this._sizeProp = u : this.size = t.getLayoutValue("icon-size", e);
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)), this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)), this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)), this._sizeProp && (this.size = this._sizeProp.getValue(t, e));
  }
}
class Ke {
  constructor(t, e, r) {
    var i, a, o, s, l, u, p, h, f, m, _;
    let g;
    this.allowOverlap = t.getLayoutValue("text-allow-overlap", e), this.ignorePlacement = t.getLayoutValue("text-ignore-placement", e), this.keepUpright = t.getLayoutValue("text-keep-upright", e), this.optional = t.getLayoutValue("text-optional", e), this.rotationAlignment = t.getLayoutValue("text-rotation-alignment", e), this.rotationAlignment === J.AUTO && (this.rotationAlignment = r ? J.MAP : J.VIEWPORT), g = t.getLayoutProperty("text-anchor"), (i = g) != null && i.isDataDriven ? this._anchorProp = g : this.anchor = t.getLayoutValue("text-anchor", e), g = t.getLayoutProperty("text-justify"), (a = g) != null && a.isDataDriven ? this._justifyProp = g : this.justify = t.getLayoutValue("text-justify", e), g = t.getLayoutProperty("text-letter-spacing"), (o = g) != null && o.isDataDriven ? this._letterSpacingProp = g : this.letterSpacing = t.getLayoutValue("text-letter-spacing", e), g = t.getLayoutProperty("text-line-height"), (s = g) != null && s.isDataDriven ? this._lineHeightProp = g : this.lineHeight = t.getLayoutValue("text-line-height", e), g = t.getLayoutProperty("text-max-angle"), (l = g) != null && l.isDataDriven ? this._maxAngleProp = g : this.maxAngle = t.getLayoutValue("text-max-angle", e), g = t.getLayoutProperty("text-max-width"), (u = g) != null && u.isDataDriven ? this._maxWidthProp = g : this.maxWidth = t.getLayoutValue("text-max-width", e), g = t.getLayoutProperty("text-offset"), (p = g) != null && p.isDataDriven ? this._offsetProp = g : this.offset = t.getLayoutValue("text-offset", e), g = t.getLayoutProperty("text-padding"), (h = g) != null && h.isDataDriven ? this._paddingProp = g : this.padding = t.getLayoutValue("text-padding", e), g = t.getLayoutProperty("text-rotate"), (f = g) != null && f.isDataDriven ? this._rotateProp = g : this.rotate = t.getLayoutValue("text-rotate", e), g = t.getLayoutProperty("text-size"), (m = g) != null && m.isDataDriven ? this._sizeProp = g : this.size = t.getLayoutValue("text-size", e), g = t.getLayoutProperty("text-writing-mode"), (_ = g) != null && _.isDataDriven ? this._writingModeProp = g : this.writingMode = t.getLayoutValue("text-writing-mode", e);
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)), this._justifyProp && (this.justify = this._justifyProp.getValue(t, e)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t, e)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t, e)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t, e)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t, e)), this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)), this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)), this._sizeProp && (this.size = this._sizeProp.getValue(t, e)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t, e));
  }
}
class st {
  constructor(t) {
    if (this._style = t, this.backgroundBucketIds = [], this._uidToLayer = /* @__PURE__ */ new Map(), this._layerByName = {}, this._runningId = 0, t.layers || (t.layers = []), this.version = parseFloat(t.version), this.layers = t.layers.map((e, r, i) => this._create(e, r, i)), this.layers) {
      let e;
      for (let r = 0; r < this.layers.length; r++)
        e = this.layers[r], this._layerByName[e.id] = e, this._uidToLayer.set(e.uid, e), e.type === b.BACKGROUND && this.backgroundBucketIds.push(e.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(t) {
    const e = this._layerByName[t];
    return !!e && e.isPainterDataDriven();
  }
  getStyleLayerId(t) {
    return t >= this.layers.length ? null : this.layers[t].id;
  }
  getStyleLayerByUID(t) {
    const e = this._uidToLayer.get(t);
    return e ?? null;
  }
  getStyleLayerIndex(t) {
    const e = this._layerByName[t];
    return e ? this.layers.indexOf(e) : -1;
  }
  setStyleLayer(t, e) {
    if (!t || !t.id)
      return;
    const r = this._style;
    e != null && e >= this.layers.length && (e = this.layers.length - 1);
    let i, a = !0;
    const o = this._layerByName[t.id];
    if (o) {
      const s = this.layers.indexOf(o);
      e || (e = s), e === s ? (a = !1, i = st._recreateLayer(t, o), this.layers[e] = i, r.layers[e] = t) : (this.layers.splice(s, 1), r.layers.splice(s, 1), i = this._create(t, e, this.layers), this.layers.splice(e, 0, i), r.layers.splice(e, 0, t));
    } else
      i = this._create(t, e, this.layers), !e || e >= this.layers.length ? (this.layers.push(i), r.layers.push(t)) : (this.layers.splice(e, 0, i), r.layers.splice(e, 0, t));
    this._layerByName[t.id] = i, this._uidToLayer.set(i.uid, i), a && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(t) {
    const e = this._layerByName[t];
    return e ? { type: e.typeName, id: e.id, source: e.source, "source-layer": e.sourceLayer, minzoom: e.minzoom, maxzoom: e.maxzoom, filter: e.filter, layout: e.layout, paint: e.paint } : null;
  }
  deleteStyleLayer(t) {
    const e = this._layerByName[t];
    if (e) {
      delete this._layerByName[t], this._uidToLayer.delete(e.uid);
      const r = this.layers.indexOf(e);
      this.layers.splice(r, 1), this._style.layers.splice(r, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(t) {
    return this._layerByName[t];
  }
  getLayoutProperties(t) {
    const e = this._layerByName[t];
    return e ? e.layout : null;
  }
  getPaintProperties(t) {
    const e = this._layerByName[t];
    return e ? e.paint : null;
  }
  setPaintProperties(t, e) {
    const r = this._layerByName[t];
    if (!r)
      return;
    const i = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: r.layout, paint: e }, a = st._recreateLayer(i, r), o = this.layers.indexOf(r);
    this.layers[o] = a, this._style.layers[o].paint = e, this._layerByName[r.id] = a, this._uidToLayer.set(r.uid, a);
  }
  setLayoutProperties(t, e) {
    const r = this._layerByName[t];
    if (!r)
      return;
    const i = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: e, paint: r.paint }, a = st._recreateLayer(i, r), o = this.layers.indexOf(r);
    this.layers[o] = a, this._style.layers[o].layout = e, this._layerByName[r.id] = a, this._uidToLayer.set(r.uid, a);
  }
  setStyleLayerVisibility(t, e) {
    const r = this._layerByName[t];
    if (!r)
      return;
    const i = r.layout || {};
    i.visibility = e;
    const a = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: i, paint: r.paint }, o = st._recreateLayer(a, r), s = this.layers.indexOf(r);
    this.layers[s] = o, this._style.layers[s].layout = i, this._layerByName[r.id] = o, this._uidToLayer.set(r.uid, o);
  }
  getStyleLayerVisibility(t) {
    var e;
    const r = this._layerByName[t];
    if (!r)
      return "none";
    const i = r.layout;
    return (e = i == null ? void 0 : i.visibility) != null ? e : "visible";
  }
  _recomputeZValues() {
    const t = this.layers, e = 1 / (t.length + 1);
    for (let r = 0; r < t.length; r++)
      t[r].z = 1 - (1 + r) * e;
  }
  _identifyRefLayers() {
    const t = [], e = [];
    let r = 0;
    for (const o of this.layers) {
      const s = o.layout;
      if (o.type === b.FILL) {
        var i;
        const l = o;
        let u = o.source + "|" + o.sourceLayer;
        u += (i = "|" + (s == null ? void 0 : s.visibility)) != null ? i : "", u += "|" + o.minzoom, u += "|" + o.maxzoom, u += "|" + JSON.stringify(o.filter), (l.hasDataDrivenFill || l.hasDataDrivenOutline) && (u += "|" + r), t.push({ key: u, layer: o });
      } else if (o.type === b.LINE) {
        var a;
        const l = o;
        let u = o.source + "|" + o.sourceLayer;
        u += (a = "|" + (s == null ? void 0 : s.visibility)) != null ? a : "", u += "|" + o.minzoom, u += "|" + o.maxzoom, u += "|" + JSON.stringify(o.filter), u += "|" + (s !== void 0 ? s["line-cap"] : ""), u += "|" + (s !== void 0 ? s["line-join"] : ""), l.hasDataDrivenLine && (u += "|" + r), e.push({ key: u, layer: o });
      }
      ++r;
    }
    this._assignRefLayers(t), this._assignRefLayers(e);
  }
  _assignRefLayers(t) {
    let e, r;
    t.sort((a, o) => a.key < o.key ? -1 : a.key > o.key ? 1 : 0);
    const i = t.length;
    for (let a = 0; a < i; a++) {
      const o = t[a];
      if (o.key === e)
        o.layer.refLayerId = r;
      else if (e = o.key, r = o.layer.id, o.layer.type === b.FILL) {
        if (!o.layer.getPaintProperty("fill-outline-color"))
          for (let s = a + 1; s < i; s++) {
            const l = t[s];
            if (l.key !== e)
              break;
            if (l.layer.getPaintProperty("fill-outline-color")) {
              t[a] = l, t[s] = o, r = l.layer.id;
              break;
            }
          }
      } else if (o.layer.type === b.LINE) {
        let s = o.layer;
        for (let l = a + 1; l < i; l++) {
          const u = t[l];
          if (u.key !== e)
            break;
          const p = u.layer;
          (s.canUseThinTessellation && !p.canUseThinTessellation || !s.canUseThinTessellation && (p.getPaintProperty("line-pattern") || p.getPaintProperty("line-dasharray"))) && (s = p, t[a] = u, t[l] = o, r = u.layer.id);
        }
      }
    }
  }
  _create(t, e, r) {
    const i = 1 - (1 + e) * (1 / (r.length + 1)), a = this._runningId++;
    switch (t.type) {
      case "background":
        return new ae(b.BACKGROUND, t, i, a);
      case "fill":
        return new ne(b.FILL, t, i, a);
      case "line":
        return new se(b.LINE, t, i, a);
      case "symbol":
        return new oe(b.SYMBOL, t, i, a);
      case "raster":
        throw new Error("Unsupported vector tile raster layer");
      case "circle":
        return new le(b.CIRCLE, t, i, a);
    }
    throw new Error("Unknown vector tile layer");
  }
  static _recreateLayer(t, e) {
    switch (t.type) {
      case "background":
        return new ae(b.BACKGROUND, t, e.z, e.uid);
      case "fill":
        return new ne(b.FILL, t, e.z, e.uid);
      case "line":
        return new se(b.LINE, t, e.z, e.uid);
      case "symbol":
        return new oe(b.SYMBOL, t, e.z, e.uid);
      case "raster":
        throw new Error("Unsupported vector tile raster layer");
      case "circle":
        return new le(b.CIRCLE, t, e.z, e.uid);
    }
  }
}
export {
  qe as L,
  st as l,
  Ke as m,
  me as t
};
