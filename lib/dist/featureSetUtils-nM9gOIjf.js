import { cv as f, m as X, hK as Y, hL as b, cY as me, cu as F, cm as ue, c$ as Fe, hE as x, b as A, hG as U, aT as we, bY as q, cj as N, im as ee, io as Se, dI as k, gP as be, gQ as Ie, x as Ce, b8 as ve, ip as ne, b_ as D, iq as V, C as L, a4 as De, ir as ae, ao as J, is as xe, it as Re, e0 as Te, cE as ke, iu as le, aa as Ne, c1 as Ee } from "./index-Ek1MTSEY.js";
import { a as T, t as g, o as E, s as W, b as v, l as Pe, i as Ae, u as $, T as Le, h as he, c as Oe, E as M, f as qe, p as O, m as je, g as Ge, d as m } from "./SpatialFilter-X_sUIAHX.js";
import { WhereClause as R } from "./WhereClause-tgx5XbAS.js";
import { c as Be, a as Ue, e as We } from "./arcadeUtils-w0rSqD6f.js";
import { x as de, n as ce } from "./MD5-ekk-4Jqp.js";
class fe {
  constructor() {
    this.declaredRootClass = "geoscene.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e, t, i) {
    this._layerById[t] = i, this._layerByName[e] = i;
  }
  featureSetByName(e, t = !0, i = ["*"]) {
    return this._layerByName[e] === void 0 ? this.resolvePromise(null) : this.resolvePromise(this._layerByName[e]);
  }
  featureSetById(e, t = !0, i = ["*"]) {
    return this._layerById[e] === void 0 ? this.resolvePromise(null) : this.resolvePromise(this._layerById[e]);
  }
  castToText() {
    return "object, FeatureSetCollection";
  }
  resolvePromise(e) {
    return f(e);
  }
}
class j extends T {
  constructor(e) {
    super(e), this.declaredClass = "geoscene.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e.parentfeatureset, e.whereclause instanceof R ? (this._whereclause = e.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new X({ wkid: 4326 }), this.geometryType = Y.point);
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getFilteredSet("", null, this._whereclause, null, e)).then((t) => (this._checkCancelled(e), this._whereClauseFunction !== null ? this._wset = new g(t._candidates.slice(0).concat(t._known.slice(0)), [], t._ordered, this._clonePageDefinition(t.pagesDefinition)) : this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset)) : f(this._wset);
  }
  _isInFeatureSet(e) {
    let t = this._parent._isInFeatureSet(e);
    return t === b.NotInFeatureSet ? t : (t = this._idstates[e], t === void 0 ? b.Unknown : t);
  }
  _getFeature(e, t, i) {
    return this._parent._getFeature(e, t, i);
  }
  _getFeatures(e, t, i, s) {
    return this._parent._getFeatures(e, t, i, s);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  executeWhereClause(e) {
    return this._whereclause.testFeature(e);
  }
  executeWhereClauseDeferred(e) {
    if (this._whereClauseFunction !== null)
      try {
        const t = this._whereClauseFunction(e);
        return me(t) ? t : f(t);
      } catch (t) {
        return F(t);
      }
    return f(this.executeWhereClause(e));
  }
  _fetchAndRefineFeatures(e, t, i) {
    const s = new g([], e, !1, null), r = Math.min(t, e.length);
    return this._parent._getFeatures(s, -1, r, i).then(() => {
      if (this._checkCancelled(i), this._whereClauseFunction == null) {
        for (let a = 0; a < r; a++) {
          const l = this._parent._featureFromCache(e[a]);
          this.executeWhereClause(l) === !0 ? this._idstates[e[a]] = b.InFeatureSet : this._idstates[e[a]] = b.NotInFeatureSet;
        }
        return "success";
      }
      const n = [];
      for (let a = 0; a < r; a++) {
        const l = this._parent._featureFromCache(e[a]);
        n.push(this.executeWhereClauseDeferred(l));
      }
      return ue(n).then((a) => {
        for (let l = 0; l < t; l++)
          a[l] === !0 ? this._idstates[e[l]] = b.InFeatureSet : this._idstates[e[l]] = b.NotInFeatureSet;
        return "success";
      });
    });
  }
  _getFilteredSet(e, t, i, s, r) {
    return this._whereClauseFunction !== null || (i !== null ? this._whereclause !== null && (i = E(this._whereclause, i)) : i = this._whereclause), this._ensureLoaded().then(() => this._parent._getFilteredSet(e, t, i, s, r)).then((n) => {
      let a;
      return this._checkCancelled(r), a = this._whereClauseFunction !== null ? new g(n._candidates.slice(0).concat(n._known.slice(0)), [], n._ordered, this._clonePageDefinition(n.pagesDefinition)) : new g(n._candidates.slice(0), n._known.slice(0), n._ordered, this._clonePageDefinition(n.pagesDefinition)), a;
    });
  }
  _stat(e, t, i, s, r, n, a) {
    if (this._whereClauseFunction !== null)
      return r === null && i === "" && s === null ? this._manualStat(e, t, n, a) : f({ calculated: !1 });
    let l = this._whereclause;
    return r !== null && this._whereclause !== null && (l = E(this._whereclause, r)), this._parent._stat(e, t, i, s, l, n, a).then((o) => o.calculated === !1 ? r === null && i === "" && s === null ? this._manualStat(e, t, n, a) : { calculated: !1 } : o);
  }
  _canDoAggregates(e, t, i, s, r) {
    return this._whereClauseFunction !== null ? f(!1) : (r !== null ? this._whereclause !== null && (r = E(this._whereclause, r)) : r = this._whereclause, this._parent === null ? f(!1) : this._parent._canDoAggregates(e, t, i, s, r));
  }
  _getAggregatePagesDataSourceDefinition(e, t, i, s, r, n, a) {
    return this._parent === null ? F(new Error("Should never be called")) : (r !== null ? this._whereclause !== null && (r = E(this._whereclause, r)) : r = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(e, t, i, s, r, n, a));
  }
  static registerAction() {
    T._featuresetFunctions.filter = function(e) {
      if (typeof e == "function")
        return new j({ parentfeatureset: this, whereclause: e });
      let t = null;
      return e instanceof R && (t = e), new j({ parentfeatureset: this, whereclause: t });
    };
  }
}
class Q {
  constructor(e) {
    this.field = e, this.sqlRewritable = !1;
  }
  postInitialization(e, t) {
  }
}
let K = class extends Q {
  constructor(e) {
    super(e), this.sqlRewritable = !0;
  }
  extractValue(e) {
    return e.attributes[this.field.name];
  }
  rewriteSql(e) {
    return { rewritten: this.sqlRewritable, where: e };
  }
}, Me = class extends Q {
  constructor(e, t, i) {
    super(Fe(e)), this.originalField = e, this.sqlRewritable = !0, this.field.name = t, this.field.alias = i;
  }
  rewriteSql(e, t) {
    return { rewritten: this.sqlRewritable, where: W(e, this.field.name, this.originalField.name, t.getFieldsIndex()) };
  }
  extractValue(e) {
    return e.attributes[this.originalField.name];
  }
}, Qe = class w extends Q {
  constructor(e, t, i) {
    super(e), this.codefield = t, this.lkp = i, this.reverseLkp = {};
    for (const s in i)
      this.reverseLkp[i[s]] = s;
    this.sqlRewritable = !0;
  }
  rewriteSql(e, t) {
    const i = this.evaluateNodeToWhereClause(e.parseTree, x.Standardised, this.field.name, this.codefield instanceof R ? v(this.codefield, x.Standardised) : this.codefield, e.parameters);
    return i.indexOf(w.BADNESS) >= 0 ? { rewritten: !1, where: e } : { rewritten: this.sqlRewritable, where: R.create(i, t._parent.getFieldsIndex()) };
  }
  evaluateNodeToWhereClause(e, t, i = null, s = null, r) {
    let n, a, l, o;
    switch (e.type) {
      case "interval":
        return Le(this.evaluateNodeToWhereClause(e.value, t, i, s, r), e.qualifier, e.op);
      case "case_expression": {
        let u = " CASE ";
        e.format === "simple" && (u += this.evaluateNodeToWhereClause(e.operand, t, i, w.BADNESS, r));
        for (let h = 0; h < e.clauses.length; h++)
          u += " WHEN " + this.evaluateNodeToWhereClause(e.clauses[h].operand, t, i, w.BADNESS, r) + " THEN " + this.evaluateNodeToWhereClause(e.clauses[h].value, t, i, w.BADNESS, r);
        return e.else !== null && (u += " ELSE " + this.evaluateNodeToWhereClause(e.else, t, i, w.BADNESS, r)), u += " END ", u;
      }
      case "param": {
        const u = r[e.value.toLowerCase()];
        if (typeof u == "string")
          return "'" + r[e.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
        if (u instanceof Date)
          return $(u, t);
        if (u instanceof Array) {
          const h = [];
          for (let c = 0; c < u.length; c++)
            typeof u[c] == "string" ? h.push("'" + u[c].toString().replace(/'/g, "''") + "'") : u[c] instanceof Date ? h.push($(u[c], t)) : h.push(u[c].toString());
          return h;
        }
        return u.toString();
      }
      case "expr_list":
        a = [];
        for (const u of e.value)
          a.push(this.evaluateNodeToWhereClause(u, t, i, s, r));
        return a;
      case "unary_expr":
        return " ( NOT " + this.evaluateNodeToWhereClause(e.expr, t, i, w.BADNESS, r) + " ) ";
      case "binary_expr":
        switch (e.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " AND " + this.evaluateNodeToWhereClause(e.right, t, i, s, r) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " OR " + this.evaluateNodeToWhereClause(e.right, t, i, s, r) + ") ";
          case "IS":
            if (e.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IS NULL )";
          case "ISNOT":
            if (e.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IS NOT NULL )";
          case "IN":
            if (n = [], e.right.type === "expr_list") {
              if (e.left.type === "column_ref" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const u = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  u.push(this.lkp[c.value].toString());
                }
                if (h)
                  return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IN (" + u.join(",") + ")) ";
              }
              return n = this.evaluateNodeToWhereClause(e.right, t, i, s, r), " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IN (" + n.join(",") + ")) ";
            }
            return o = this.evaluateNodeToWhereClause(e.right, t, i, s, r), o instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IN (" + o.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " IN (" + o + ")) ";
          case "NOT IN":
            if (n = [], e.right.type === "expr_list") {
              if (e.left.type === "column_ref" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const u = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  u.push(this.lkp[c.value].toString());
                }
                if (h)
                  return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " NOT IN (" + u.join(",") + ")) ";
              }
              return n = this.evaluateNodeToWhereClause(e.right, t, i, s, r), " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " NOT IN (" + n.join(",") + ")) ";
            }
            return o = this.evaluateNodeToWhereClause(e.right, t, i, s, r), o instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " NOT IN (" + o.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, r) + " NOT IN (" + o + ")) ";
          case "BETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r), " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "NOTBETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r), " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " NOT BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + ") ";
          case "NOT LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + ") ";
          case "<>":
          case "=":
            if (e.left.type === "column_ref" && e.right.type === "string") {
              if (e.left.column.toUpperCase() === this.field.name.toUpperCase() && this.lkp[e.right.value.toString()] !== void 0)
                return " (" + s + " " + e.operator + " " + this.lkp[e.right.value.toString()].toString() + ") ";
            } else if (e.right.type === "column_ref" && e.left.type === "string" && e.right.column.toUpperCase() === this.field.name.toUpperCase())
              return " (" + this.lkp[e.right.value.toString()].toString() + " " + e.operator + " " + s + ") ";
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) + ") ";
        }
        throw new Error("Not Supported Operator " + e.operator);
      case "null":
        return "null";
      case "bool":
        return e.value === !0 ? "1" : "0";
      case "string":
        return "'" + e.value.toString().replace(/'/g, "''") + "'";
      case "timestamp":
      case "date":
        return $(e.value, t);
      case "number":
        return e.value.toString();
      case "current_time":
        return Ae(e.mode === "date", t);
      case "column_ref":
        return i && i.toLowerCase() === e.column.toLowerCase() ? "(" + s + ")" : e.column;
      case "function": {
        const u = this.evaluateNodeToWhereClause(e.args, t, i, w.BADNESS, r);
        return Pe(e.name, u, t);
      }
    }
    throw new Error("Unsupported sql syntax " + e.type);
  }
  extractValue(e) {
    return this.codefield instanceof R ? this.reverseLkp[this.codefield.calculateValueCompiled(e)] : this.reverseLkp[e.attributes[this.codefield]];
  }
};
Qe.BADNESS = "_!!!_BAD_LKP_!!!!";
let $e = class extends Q {
  constructor(e, t) {
    super(e), this.sql = t;
  }
  rewriteSql(e, t) {
    return { rewritten: !0, where: W(e, this.field.name, v(this.sql, x.Standardised), t.getFieldsIndex()) };
  }
  extractValue(e) {
    return this.sql.calculateValueCompiled(e);
  }
}, Ve = class extends T {
  constructor(e) {
    super(e), this._calcFunc = null, this.declaredClass = "geoscene.arcade.featureset.actions.Adapted", this.adaptedFields = null, this._extraFilter = null, this._extraFilter = e.extraFilter, this._parent = e.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e.adaptedFields;
  }
  static findField(e, t) {
    for (const i of e)
      if (i.name.toLowerCase() === t.toString().toLowerCase())
        return i;
    return null;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new X({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = Y.point, this.typeIdField = "", this.types = null), this.fields = [];
    for (const e of this.adaptedFields)
      e.postInitialization(this, this._parent), this.fields.push(e.field);
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._extraFilter ? this._getFilteredSet("", null, null, null, e) : this._parent._getSet(e)).then((t) => (this._checkCancelled(e), this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset)) : f(this._wset);
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  _getFeatures(e, t, i, s) {
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const n = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, n) === !0)
      return this._expandPagedSet(e, n, 0, 0, s).then(() => this._getFeatures(e, t, i, s));
    let a = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length && (a++, a <= i && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[o]] === void 0 && (e._known[o] !== t && r.push(e._known[o]), r.length >= n))); o++)
      ;
    if (r.length === 0)
      return f("success");
    e = new g([], r, e._ordered, null);
    const l = Math.min(r.length, i);
    return this._parent._getFeatures(e, -1, l, s).then(() => {
      this._checkCancelled(s);
      const o = [];
      for (let u = 0; u < l; u++) {
        const h = this._parent._featureFromCache(r[u]);
        h !== void 0 && o.push({ geometry: h.geometry, attributes: h.attributes, id: r[u] });
      }
      for (const u of o) {
        const h = [];
        for (const c of this.adaptedFields)
          h[c.field.name] = c.extractValue(u);
        this._featureCache[u.id] = new A({ attributes: h, geometry: Be(u.geometry) });
      }
      return "success";
    });
  }
  _fetchAndRefineFeatures() {
    return F(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet(e, t, i, s, r) {
    let n = !1;
    const a = this._reformulateWithoutAdaptions(i);
    n = a.cannot, i = a.where;
    let l = !1;
    if (s !== null) {
      l = !0;
      const o = [];
      for (const u of this.adaptedFields)
        if (!(u instanceof K) && s.scanForField(u.field.name) === !0) {
          if (!(u instanceof Me)) {
            s = null, l = !1;
            break;
          }
          o.push({ field: u.field.name, newfield: u.originalField.name });
        }
      s && o.length > 0 && (s = s.replaceFields(o));
    }
    return i !== null ? this._extraFilter !== null && (i = E(this._extraFilter, i)) : i = this._extraFilter, this._ensureLoaded().then(() => this._parent._getFilteredSet(e, t, i, s, r)).then((o) => {
      let u;
      return this._checkCancelled(r), u = n === !0 ? new g(o._candidates.slice(0).concat(o._known.slice(0)), [], l === !0 && o._ordered, this._clonePageDefinition(o.pagesDefinition)) : new g(o._candidates.slice(0), o._known.slice(0), l === !0 && o._ordered, this._clonePageDefinition(o.pagesDefinition)), u;
    });
  }
  _reformulateWithoutAdaptions(e) {
    const t = { cannot: !1, where: e };
    if (e !== null) {
      for (const i of this.adaptedFields)
        if (he(e, i.field.name) === !0) {
          const s = i.rewriteSql(e, this);
          if (s.rewritten !== !0) {
            t.cannot = !0, t.where = null;
            break;
          }
          t.where = s.where;
        }
    }
    return t;
  }
  _stat(e, t, i, s, r, n, a) {
    let l = !1, o = this._reformulateWithoutAdaptions(t);
    return l = o.cannot, t = o.where, o = this._reformulateWithoutAdaptions(r), l = l || o.cannot, (r = o.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, l === !0 ? r === null && i === "" && s === null ? this._manualStat(e, t, n, a) : f({ calculated: !1 }) : this._parent._stat(e, t, i, s, r, n, a).then((u) => u.calculated === !1 ? r === null && i === "" && s === null ? this._manualStat(e, t, n, a) : { calculated: !1 } : u);
  }
  _canDoAggregates(e, t, i, s, r) {
    if (this._parent === null)
      return f(!1);
    for (let l = 0; l < e.length; l++)
      for (const o of this.adaptedFields)
        if (e[l].toLowerCase() === o.field.name.toLowerCase() && !(o instanceof K))
          return f(!1);
    const n = [];
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (o.workingexpr !== null) {
        const u = this._reformulateWithoutAdaptions(o.workingexpr);
        if (u.cannot)
          return f(!1);
        const h = o.clone();
        h.workingexpr = u.where, n.push(h);
      } else
        n.push(o);
    }
    const a = this._reformulateWithoutAdaptions(r);
    return a.cannot ? f(!1) : ((r = a.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, this._parent._canDoAggregates(e, n, i, s, r));
  }
  _getAggregatePagesDataSourceDefinition(e, t, i, s, r, n, a) {
    if (this._parent === null)
      return F(new Error("Should never be called"));
    const l = [];
    for (let u = 0; u < t.length; u++) {
      const h = t[u];
      if (h.workingexpr !== null) {
        const c = this._reformulateWithoutAdaptions(h.workingexpr);
        if (c.cannot)
          return F(new Error("Should never be called"));
        const p = h.clone();
        p.workingexpr = c.where, l.push(p);
      } else
        l.push(h);
    }
    const o = this._reformulateWithoutAdaptions(r);
    return o.cannot ? F(new Error("Should never be called")) : ((r = o.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e, l, i, s, r, n, a));
  }
};
function oe(d, e) {
  return d === e ? 0 : d === null ? -1 : e === null ? 1 : d < e ? -1 : 1;
}
class G {
  constructor(e) {
    const t = e.split(",");
    this._fields = [], this._directions = [];
    for (let i = 0; i < t.length; i++) {
      const s = t[i].match(/\S+/g);
      this._fields.push(s[0]), s.length === 2 ? s[1].toLowerCase() === "asc" ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let e = "";
    for (let t = 0; t < this._fields.length; t++)
      t !== 0 && (e += ","), e += this._fields[t], this._directions[t] === 1 ? e += " ASC" : e += " DESC";
    return e;
  }
  order(e) {
    e.sort((t, i) => {
      for (let s = 0; s < this._fields.length; s++) {
        const r = this.featureValue(t.feature, this._fields[s], s), n = this.featureValue(i.feature, this._fields[s], s);
        let a = 0;
        if (a = this._directions[s] === 1 ? oe(r, n) : -1 * oe(r, n), a !== 0)
          return a;
      }
      return 0;
    });
  }
  scanForField(e) {
    for (let t = 0; t < this._fields.length; t++)
      if (this._fields[t].toLowerCase().trim() === e.toLowerCase().trim())
        return !0;
    return !1;
  }
  replaceFields(e) {
    let t = "";
    for (let i = 0; i < this._fields.length; i++) {
      i !== 0 && (t += ",");
      let s = this._fields[i];
      for (const r of e)
        if (s.toLowerCase() === r.field.toLowerCase()) {
          s = r.newfield;
          break;
        }
      t += s, this._directions[i] === 1 ? t += " ASC" : t += " DESC";
    }
    return new G(t);
  }
  featureValue(e, t, i) {
    const s = e.attributes[t];
    if (s !== void 0)
      return s;
    for (const r in e.attributes)
      if (t.toLowerCase() === r.toLowerCase())
        return this._fields[i] = r, e.attributes[r];
    return null;
  }
}
let z = class pe extends T {
  constructor(e) {
    super(e), this._orderbyclause = null, this.declaredClass = "geoscene.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e.orderbyclause, this._parent = e.parentfeatureset;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, this._orderbyclause, e)).then((t) => (this._checkCancelled(e), this._wset = t, this._wset)) : f(this._wset);
  }
  manualOrderSet(e, t) {
    return this.getIdColumnDictionary(e, [], -1, t).then((i) => {
      this._orderbyclause.order(i);
      const s = new g([], [], !0, null);
      for (let r = 0; r < i.length; r++)
        s._known.push(i[r].id);
      return s;
    });
  }
  getIdColumnDictionary(e, t, i, s) {
    if (i < e._known.length - 1) {
      const r = this._maxQueryRate();
      if (e._known[i + 1] === "GETPAGES")
        return U(this._parent._expandPagedSet(e, r, 0, 0, s)).then(() => this.getIdColumnDictionary(e, t, i, s));
      let n = i + 1;
      const a = [];
      for (; n < e._known.length && e._known[n] !== "GETPAGES"; )
        a.push(e._known[n]), n++;
      return i += a.length, U(this._parent._getFeatureBatch(a, s)).then((l) => {
        this._checkCancelled(s);
        for (const o of l)
          t.push({ id: o.attributes[this.objectIdField], feature: o });
        return this.getIdColumnDictionary(e, t, i, s);
      });
    }
    return e._candidates.length > 0 ? U(this._refineSetBlock(e, this._maxProcessingRate(), s)).then(() => (this._checkCancelled(s), this.getIdColumnDictionary(e, t, i, s))) : f(t);
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  _getFeatures(e, t, i, s) {
    return this._parent._getFeatures(e, t, i, s);
  }
  _featureFromCache(e) {
    if (this._featureCache[e] === void 0) {
      const t = this._parent._featureFromCache(e);
      return t === void 0 ? void 0 : t === null ? null : (this._featureCache[e] = t, t);
    }
    return this._featureCache[e];
  }
  _fetchAndRefineFeatures() {
    return F(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet(e, t, i, s, r) {
    return this._ensureLoaded().then(() => this._parent._getFilteredSet(e, t, i, s === null ? this._orderbyclause : s, r)).then((n) => {
      this._checkCancelled(r);
      const a = new g(n._candidates.slice(0), n._known.slice(0), n._ordered, this._clonePageDefinition(n.pagesDefinition));
      let l = !0;
      return n._candidates.length > 0 && (l = !1), a._ordered === !1 ? this.manualOrderSet(a, r).then((o) => (l === !1 && (t === null && i === null || (o = new g(o._candidates.slice(0).concat(o._known.slice(0)), [], o._ordered, this._clonePageDefinition(o.pagesDefinition)))), o)) : a;
    });
  }
  static registerAction() {
    T._featuresetFunctions.orderBy = function(e) {
      return e === "" ? this : new pe({ parentfeatureset: this, orderbyclause: new G(e) });
    };
  }
};
function Je(d) {
  if (d.parseTree.type === "function") {
    if (d.parseTree.args.value.length === 0)
      return { name: d.parseTree.name, expr: null };
    if (d.parseTree.args.value.length > 1)
      throw new Error("Statistic does not have 1 or 0 Parameters");
    const e = R.create(Oe(d.parseTree.args.value[0], x.Standardised, d.parameters), d.fieldsIndex);
    return { name: d.parseTree.name, expr: e };
  }
  return null;
}
class B {
  clone() {
    const e = new B();
    return e.field = this.field, e.tofieldname = this.tofieldname, e.typeofstat = this.typeofstat, e.workingexpr = this.workingexpr, e;
  }
  static parseStatField(e, t, i) {
    const s = new B();
    s.field = e;
    const r = R.create(t, i), n = Je(r);
    if (n === null)
      throw new Error("Invalid Statistic Function");
    const a = n.name.toUpperCase().trim();
    if (a === "MIN") {
      if (s.typeofstat = "MIN", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (a === "MAX") {
      if (s.typeofstat = "MAX", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (a === "COUNT")
      s.typeofstat = "COUNT", s.workingexpr = n.expr;
    else if (a === "STDEV") {
      if (s.typeofstat = "STDDEV", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (a === "SUM") {
      if (s.typeofstat = "SUM", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (a === "MEAN") {
      if (s.typeofstat = "AVG", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (a === "AVG") {
      if (s.typeofstat = "AVG", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else {
      if (a !== "VAR")
        throw new Error("Invalid Statistic Function");
      if (s.typeofstat = "VAR", s.workingexpr = n.expr, r === null)
        throw new Error("Invalid Statistic Function Parameters");
    }
    return s;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
}
function Ke(d) {
  if (!d)
    return "COUNT";
  switch (d.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
let ze = class _e extends T {
  constructor(e) {
    super(e), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = !0, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "geoscene.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e.parentfeatureset, this._config = e;
  }
  isTable() {
    return !0;
  }
  _getSet(e) {
    return this._wset === null ? this._getFilteredSet("", null, null, null, e).then((t) => (this._wset = t, this._wset)) : f(this._wset);
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _nextUniqueName(e) {
    for (; e["T" + this._uniqueIds.toString()] === 1; )
      this._uniqueIds++;
    const t = "T" + this._uniqueIds.toString();
    return e[t] = 1, t;
  }
  _convertToEsriFieldType(e) {
    return e;
  }
  _initialiseFeatureSet() {
    const e = {};
    let t = !1, i = 1;
    const s = this._parent ? this._parent.getFieldsIndex() : new we([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; t === !1; ) {
      let n = !1;
      for (let a = 0; a < this._config.groupbyfields.length; a++)
        if (this._config.groupbyfields[a].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          n = !0;
          break;
        }
      if (n === !1) {
        for (let a = 0; a < this._config.statsfields.length; a++)
          if (this._config.statsfields[a].name.toLowerCase() === this.objectIdField.toLowerCase()) {
            n = !0;
            break;
          }
      }
      n === !1 ? t = !0 : (this.objectIdField = "ROW__ID" + i.toString(), i++);
    }
    for (const n of this._config.statsfields) {
      const a = new B();
      a.field = n.name, a.tofieldname = n.name, a.workingexpr = n.expression instanceof R ? n.expression : R.create(n.expression, s), a.typeofstat = Ke(n.statistic), this._decodedStatsfield.push(a);
    }
    this._decodedGroupbyfield = [];
    for (const n of this._config.groupbyfields) {
      const a = { name: n.name, singlefield: null, tofieldname: n.name, expression: n.expression instanceof R ? n.expression : R.create(n.expression, s) };
      this._decodedGroupbyfield.push(a);
    }
    if (this._parent !== null) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const n of this._parent.fields)
        e[n.name.toUpperCase()] = 1;
      this.types = null;
    } else
      this.geometryType = Y.point, this.typeIdField = "", this.types = null, this.spatialReference = new X({ wkid: 4326 });
    this.fields = [];
    const r = new B();
    r.field = this._nextUniqueName(e), r.tofieldname = this.objectIdField, r.workingexpr = R.create(this._parent.objectIdField, this._parent.getFieldsIndex()), r.typeofstat = "MIN", this._decodedStatsfield.push(r);
    for (const n of this._decodedGroupbyfield) {
      const a = new q();
      if (n.name = this._nextUniqueName(e), a.name = n.tofieldname, a.alias = a.name, M(n.expression)) {
        const l = this._parent.getField(v(n.expression, x.Standardised));
        if (!l)
          throw new Error("Field is not present for Aggregation");
        n.name = l.name, n.singlefield = l.name, this.phsyicalgroupbyfields.push(l.name), a.type = l.type;
      } else {
        a.type = this._convertToEsriFieldType(qe(n.expression, this._parent.fields));
        const l = new q();
        l.name = n.name, l.alias = l.name, this.phsyicalgroupbyfields.push(n.name), this._adaptedFields.push(new $e(l, n.expression)), this._candosimplegroupby = !1;
      }
      this.fields.push(a);
    }
    if (this._adaptedFields.length > 0)
      for (const n of this._parent.fields)
        this._adaptedFields.push(new K(n));
    for (let n = 0; n < this._decodedStatsfield.length; n++) {
      const a = new q();
      let l = null;
      const o = this._decodedStatsfield[n];
      o.field = this._nextUniqueName(e), o.tofieldname === this.objectIdField && (this._internalObjectIdField = o.field), a.name = o.tofieldname, a.alias = a.name;
      const u = o.workingexpr !== null && M(o.workingexpr) ? v(o.workingexpr, x.Standardised) : "";
      switch (this._decodedStatsfield[n].typeofstat) {
        case "SUM":
          if (u !== "") {
            if (l = this._parent.getField(u), !l)
              throw new Error("Field is not present for Aggregation");
            a.type = l.type;
          } else
            a.type = "double";
          break;
        case "MIN":
        case "MAX":
          if (u !== "") {
            if (l = this._parent.getField(u), !l)
              throw new Error("Field is not present for Aggregation");
            a.type = l.type;
          } else
            a.type = "double";
          break;
        case "COUNT":
          a.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if (u !== "" && (l = this._parent.getField(u), !l))
            throw new Error("Field is not present for Aggregation");
          a.type = "double";
      }
      this.fields.push(a);
    }
  }
  _canDoAggregates() {
    return f(!1);
  }
  _getFeatures(e, t, i, s) {
    t !== -1 && this._featureCache[t];
    const r = this._maxQuery;
    return this._checkIfNeedToExpandKnownPage(e, r) === !0 ? this._expandPagedSet(e, r, 0, 0, s).then(() => this._getFeatures(e, t, i, s)) : f("success");
  }
  _getFilteredSet(e, t, i, s, r) {
    if (e !== "")
      return f(new g([], [], !0, null));
    let n = null;
    const a = { ordered: !1, nowhereclause: !1 };
    return this._ensureLoaded().then(() => {
      if (i !== null) {
        for (let l = 0; l < this._decodedStatsfield.length; l++)
          if (he(i, this._decodedStatsfield[l].tofieldname) === !0) {
            a.nowhereclause = !0, i = null;
            break;
          }
      }
      if (s !== null) {
        a.ordered = !0;
        for (let l = 0; l < this._decodedStatsfield.length; l++)
          if (s.scanForField(this._decodedStatsfield[l].tofieldname) === !0) {
            s = null, a.ordered = !1;
            break;
          }
        if (s !== null) {
          for (const l of this._decodedGroupbyfield)
            if (l.singlefield === null && s.scanForField(l.tofieldname) === !0) {
              s = null, a.ordered = !1;
              break;
            }
        }
      }
      return this._candosimplegroupby === !1 ? f(!1) : this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null);
    }).then((l) => {
      if (l) {
        let u = null;
        i && (u = this._reformulateWhereClauseWithoutGroupByFields(i));
        let h = null;
        return s && (h = this._reformulateOrderClauseWithoutGroupByFields(s)), this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, u, h, this._internalObjectIdField).then((c) => (this._checkCancelled(r), n = a.nowhereclause === !0 ? new g(c._candidates.slice(0).concat(c._known.slice(0)), [], a.ordered === !0 && c._ordered, this._clonePageDefinition(c.pagesDefinition)) : new g(c._candidates.slice(0), c._known.slice(0), a.ordered === !0 && c._ordered, this._clonePageDefinition(c.pagesDefinition)), n));
      }
      let o = this._parent;
      if (this._adaptedFields.length > 0 && (o = new Ve({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), a.nowhereclause === !0)
        n = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new z({ parentfeatureset: o, orderbyclause: new G(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
      else {
        let u = o;
        if (i !== null) {
          let h = null;
          i && (h = this._reformulateWhereClauseWithoutGroupByFields(i)), u = new j({ parentfeatureset: u, whereclause: h });
        }
        n = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new z({ parentfeatureset: u, orderbyclause: new G(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
      }
      return n;
    });
  }
  _reformulateWhereClauseWithoutStatsFields(e) {
    for (const t of this._decodedStatsfield)
      e = W(e, t.tofieldname, v(t.workingexpr, x.Standardised), this._parent.getFieldsIndex());
    return e;
  }
  _reformulateWhereClauseWithoutGroupByFields(e) {
    for (const t of this._decodedGroupbyfield)
      t.tofieldname !== t.name && (e = W(e, t.tofieldname, v(t.expression, x.Standardised), this._parent.getFieldsIndex()));
    return e;
  }
  _reformulateOrderClauseWithoutGroupByFields(e) {
    const t = [];
    for (const i of this._decodedGroupbyfield)
      i.tofieldname !== i.name && t.push({ field: i.tofieldname, newfield: i.name });
    return t.length > 0 ? e.replaceFields(t) : e;
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.aggregatefeaturesetpagedefinition === !0 ? { aggregatefeaturesetpagedefinition: !0, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, internal: e.internal } : this._parent._clonePageDefinition(e);
  }
  _refineSetBlock(e, t, i) {
    try {
      if (this._checkIfNeedToExpandCandidatePage(e, this._maxQuery) === !0)
        return this._expandPagedSet(e, this._maxQuery, 0, 0, i).then(() => this._refineSetBlock(e, t, i));
      this._checkCancelled(i);
      const s = e._candidates.length;
      return this._refineKnowns(e, t), e._candidates.length, e._candidates.length, f(e);
    } catch (s) {
      return F(s);
    }
  }
  _expandPagedSet(e, t, i, s, r) {
    return this._expandPagedSetFeatureSet(e, t, i, s, r);
  }
  _getPhysicalPage(e, t, i) {
    return e.pagesDefinition.aggregatefeaturesetpagedefinition === !0 ? N((s, r) => {
      this._sequentialGetPhysicalItem(e, e.pagesDefinition.resultRecordCount, i, []).then((n) => {
        s(n);
      }, r);
    }) : this._getAgregagtePhysicalPage(e, t, i).then((s) => {
      for (const r of s) {
        const n = { geometry: r.geometry, attributes: {} };
        for (const a of this._decodedGroupbyfield)
          n.attributes[a.tofieldname] = r.attributes[a.name];
        for (const a of this._decodedStatsfield)
          n.attributes[a.tofieldname] = r.attributes[a.field];
        this._featureCache[n.attributes[this.objectIdField]] = new A(n);
      }
      return s.length;
    });
  }
  _sequentialGetPhysicalItem(e, t, i, s) {
    return N((r, n) => {
      e.pagesDefinition.internal.iterator === null && (e.pagesDefinition.internal.iterator = e.pagesDefinition.internal.subfeatureset.iterator(i)), e.pagesDefinition.internal.fullyResolved === !0 || t === 0 ? r(s.length) : this._nextAggregateItem(e, t, i, s, (a) => {
        a === null ? r(s.length) : (t -= 1, r(this._sequentialGetPhysicalItem(e, t, i, s)));
      }, n);
    });
  }
  _nextAggregateItem(e, t, i, s, r, n) {
    try {
      U(e.pagesDefinition.internal.iterator.next()).then((a) => {
        if (a === null)
          if (e.pagesDefinition.internal.workingItem !== null) {
            const l = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
            s.push(l), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(l.attributes[this.objectIdField]), e.pagesDefinition.internal.fullyResolved = !0, r(null);
          } else
            e.pagesDefinition.internal.fullyResolved = !0, r(null);
        else {
          const l = this._generateAggregateHash(a);
          if (e.pagesDefinition.internal.workingItem === null)
            e.pagesDefinition.internal.workingItem = { features: [a], id: l };
          else {
            if (l !== e.pagesDefinition.internal.workingItem.id) {
              const o = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
              return s.push(o), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(o.attributes[this.objectIdField]), t -= 1, e.pagesDefinition.internal.workingItem = { features: [a], id: l }, void r(o);
            }
            e.pagesDefinition.internal.workingItem.features.push(a);
          }
          this._nextAggregateItem(e, t, i, s, r, n);
        }
      }, n);
    } catch (a) {
      n(a);
    }
  }
  _calculateFieldStat(e, t, i) {
    const s = [];
    for (let r = 0; r < e.features.length; r++)
      if (t.workingexpr !== null) {
        const n = t.workingexpr.calculateValue(e.features[r]);
        n !== null && s.push(n);
      } else
        s.push(null);
    switch (t.typeofstat) {
      case "MIN":
        i.attributes[t.tofieldname] = O("min", s, -1);
        break;
      case "MAX":
        i.attributes[t.tofieldname] = O("max", s, -1);
        break;
      case "SUM":
        i.attributes[t.tofieldname] = O("sum", s, -1);
        break;
      case "COUNT":
        i.attributes[t.tofieldname] = s.length;
        break;
      case "VAR":
        i.attributes[t.tofieldname] = O("var", s, -1);
        break;
      case "STDDEV":
        i.attributes[t.tofieldname] = O("stddev", s, -1);
        break;
      case "AVG":
        i.attributes[t.tofieldname] = O("avg", s, -1);
    }
    return !0;
  }
  _calculateAndAppendAggregateItem(e) {
    const t = { attributes: {}, geometry: null };
    for (const s of this._decodedGroupbyfield) {
      const r = s.singlefield ? e.features[0].attributes[s.singlefield] : s.expression.calculateValue(e.features[0]);
      t.attributes[s.tofieldname] = r;
    }
    for (const s of this._decodedStatsfield)
      this._calculateFieldStat(e, s, t);
    const i = [];
    for (let s = 0; s < this._decodedStatsfield.length; s++)
      i.push(this._calculateFieldStat(e, this._decodedStatsfield[s], t));
    return this._featureCache[t.attributes[this.objectIdField]] = new A({ attributes: t.attributes, geometry: t.geometry }), t;
  }
  _generateAggregateHash(e) {
    let t = "";
    for (const i of this._decodedGroupbyfield) {
      const s = i.singlefield ? e.attributes[i.singlefield] : i.expression.calculateValue(e);
      t += s == null ? ":" : ":" + s.toString();
    }
    return de(t, ce.String);
  }
  _stat() {
    return f({ calculated: !1 });
  }
  getFeatureByObjectId() {
    return f(null);
  }
  static registerAction() {
    T._featuresetFunctions.groupby = function(e, t) {
      return new _e({ parentfeatureset: this, groupbyfields: e, statsfields: t });
    };
  }
};
class te extends T {
  constructor(e) {
    super(e), this._topnum = 0, this.declaredClass = "geoscene.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = e.topnum, this._parent = e.parentfeatureset;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getSet(e)).then((t) => (this._wset = new g(t._candidates.slice(0), t._known.slice(0), !1, this._clonePageDefinition(t.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset)) : f(this._wset);
  }
  _setKnownLength(e) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" ? e._known.length - 1 : e._known.length;
  }
  _isInFeatureSet(e) {
    const t = this._parent._isInFeatureSet(e);
    if (t === b.NotInFeatureSet)
      return t;
    const i = this._idstates[e];
    return i === b.InFeatureSet || i === b.NotInFeatureSet ? i : t === b.InFeatureSet && i === void 0 ? this._countedin < this._topnum ? (this._idstates[e] = b.InFeatureSet, this._countedin++, b.InFeatureSet) : (this._idstates[e] = b.NotInFeatureSet, b.NotInFeatureSet) : b.Unknown;
  }
  _expandPagedSet(e, t, i, s, r) {
    if (this._parent === null)
      return F(new Error("Parent Paging not implemented"));
    if (t > this._topnum && (t = this._topnum), this._countedin >= this._topnum && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset) {
      let n = e._known.length;
      return n > 0 && e._known[n - 1] === "GETPAGES" && (e._known.length = n - 1), n = e._candidates.length, n > 0 && e._candidates[n - 1] === "GETPAGES" && (e._candidates.length = n - 1), f("success");
    }
    return this._parent._expandPagedSet(e, t, i, s, r).then((n) => (this._setKnownLength(e) > this._topnum && (e._known.length = this._topnum), this._setKnownLength(e) >= this._topnum && (e._candidates.length = 0), n));
  }
  _getFeatures(e, t, i, s) {
    const r = [], n = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, n) === !0)
      return this._expandPagedSet(e, n, 0, 0, s).then(() => this._getFeatures(e, t, i, s));
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    let a = 0;
    for (let u = e._lastFetchedIndex; u < e._known.length && (a++, a <= i && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[u]] === void 0 && (e._known[u] !== t && r.push(e._known[u]), r.length > n))); u++)
      ;
    if (r.length === 0)
      return f("success");
    const l = new g([], r, !1, null), o = Math.min(r.length, i);
    return this._parent._getFeatures(l, -1, o, s).then(() => {
      for (let u = 0; u < o; u++) {
        const h = this._parent._featureFromCache(r[u]);
        h !== void 0 && (this._featureCache[r[u]] = h);
      }
      return "success";
    });
  }
  _getFilteredSet(e, t, i, s, r) {
    return this._ensureLoaded().then(() => this._getSet(r)).then((n) => new g(n._candidates.slice(0).concat(n._known.slice(0)), [], !1, this._clonePageDefinition(n.pagesDefinition)));
  }
  _refineKnowns(e, t) {
    let i = 0, s = null;
    const r = [];
    for (let n = 0; n < e._candidates.length; n++) {
      const a = this._isInFeatureSet(e._candidates[n]);
      if (a === b.InFeatureSet) {
        if (e._known.push(e._candidates[n]), i += 1, s === null ? s = { start: n, end: n } : s.end === n - 1 ? s.end = n : (r.push(s), s = { start: n, end: n }), e._known.length >= this._topnum)
          break;
      } else if (a === b.NotInFeatureSet)
        s === null ? s = { start: n, end: n } : s.end === n - 1 ? s.end = n : (r.push(s), s = { start: n, end: n }), i += 1;
      else if (a === b.Unknown)
        break;
      if (i >= t)
        break;
    }
    s !== null && r.push(s);
    for (let n = r.length - 1; n >= 0; n--)
      e._candidates.splice(r[n].start, r[n].end - r[n].start + 1);
    this._setKnownLength(e) > this._topnum && (e._known = e._known.slice(0, this._topnum)), this._setKnownLength(e) >= this._topnum && (e._candidates = []);
  }
  _stat() {
    return f({ calculated: !1 });
  }
  _canDoAggregates() {
    return f(!1);
  }
  static registerAction() {
    T._featuresetFunctions.top = function(e) {
      return new te({ parentfeatureset: this, topnum: e });
    };
  }
}
let Ze = class Z extends T {
  constructor(e) {
    super(e), this.declaredClass = "geoscene.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = !1, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = !1, this._requestStandardised = !1, this._useDefinitionExpression = !0, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ee;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e) {
    this._pageJustIds = e;
  }
  convertQueryToLruCacheKey(e) {
    const t = Se(e.toJSON());
    return de(t, ce.String);
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = N((e, t) => {
      try {
        if (this._layer.loaded === !0)
          return this._initialiseFeatureSet(), void e(this);
        this._layer.when().then(() => {
          try {
            this._initialiseFeatureSet(), e(this);
          } catch (i) {
            t(i);
          }
        }, t), this._layer.load();
      } catch (i) {
        t(i);
      }
    })), this._loadPromise;
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields && !(this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")) {
      const e = [];
      for (const t of this.fields)
        if (t.type === "oid")
          e.push(t);
        else
          for (const i of this._layer.outFields)
            if (i.toLowerCase() === t.name.toLowerCase()) {
              e.push(t);
              break;
            }
      this.fields = e;
    }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e = [], t = [];
        for (const i of this.fields)
          if (i.type === "oid")
            e.push(i), t.push(i.name);
          else
            for (const s of this._overrideFields)
              if (s.toLowerCase() === i.name.toLowerCase()) {
                e.push(i), t.push(i.name);
                break;
              }
        this.fields = e, this._overrideFields = t;
      }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === !0 ? (this._databaseType = x.StandardisedNoInterval, e != null && e >= 10.61 && (this._databaseType = x.Standardised)) : e != null && (e >= 10.5 && (this._databaseType = x.StandardisedNoInterval, this._requestStandardised = !0), e >= 10.61 && (this._databaseType = x.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields)
      e.type === "global-id" && (this.globalIdField = e.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _refineSetBlock(e) {
    return f(e);
  }
  _candidateIdTransform(e) {
    return e;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e)).then((t) => (this._wset = t, t)) : f(this._wset);
  }
  _runDatabaseProbe(e) {
    return N((t, i) => {
      try {
        this._ensureLoaded().then(() => {
          try {
            const s = new k();
            s.where = e.replace("OBJECTID", this._layer.objectIdField), this._layer.queryObjectIds(s).then(() => {
              t(!0);
            }, () => {
              try {
                t(!1);
              } catch (r) {
                i(r);
              }
            });
          } catch (s) {
            i(s);
          }
        });
      } catch (s) {
        i(s);
      }
    });
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || this._layer.capabilities.query.supportsPagination !== !0);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e) {
    return !e.outStatistics && this._layer && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsFormatPBF === !0 && this._layer.capabilities.query.supportsQuantizationEditMode === !0;
  }
  queryPBF(e) {
    return e.quantizationParameters = { mode: "edit" }, be(this._layer.parsedUrl, e, new Ie({})).then((t) => Ce.fromJSON(ve(t.data)).unquantize());
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion ? this._layer.gdbVersion : "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title, source: this, canQueryRelated: !0, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e, t) {
    const i = t === "execute" ? ae : t === "executeForCount" ? xe : Re, s = t === "execute" && this.pbfSupportedForQuery(e);
    let r = null;
    if (this.recentlyUsedQueries) {
      const n = this.convertQueryToLruCacheKey(e);
      r = this.recentlyUsedQueries.getFromCache(n), r === null && (r = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e), this.recentlyUsedQueries.addToCache(n, r), r = r.catch((a) => {
        throw this.recentlyUsedQueries.removeFromCache(n), a;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e, method: t }), r === null && (r = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e)), r;
  }
  _getFilteredSet(e, t, i, s, r) {
    return this.databaseType().then((n) => {
      if (this.isTable() && t && e !== null && e !== "")
        return new g([], [], !0, null);
      if (this._canUsePagination())
        return this._getFilteredSetUsingPaging(e, t, i, s, r);
      let a = "", l = !1;
      s !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (a = s.constructClause(), l = !0);
      const o = new k();
      return o.where = i === null ? t === null ? "1=1" : "" : v(i, n), this._requestStandardised && (o.sqlFormat = "standard"), o.spatialRelationship = this._makeRelationshipEnum(e), o.outSpatialReference = this.spatialReference, o.orderByFields = a !== "" ? a.split(",") : null, o.geometry = t === null ? null : t, o.relationParameter = this._makeRelationshipParam(e), this.executeQuery(o, "executeForIds").then((u) => (u === null && (u = []), this._checkCancelled(r), new g([], u, l, null)));
    });
  }
  _expandPagedSet(e, t, i, s, r) {
    return this._expandPagedSetFeatureSet(e, t, i, s, r);
  }
  _getFilteredSetUsingPaging(e, t, i, s, r) {
    try {
      let n = "", a = !1;
      return s !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (n = s.constructClause(), a = !0), this.databaseType().then((l) => {
        let o = i === null ? t === null ? "1=1" : "" : v(i, l);
        this._layer.definitionExpression && this._useDefinitionExpression && (o = o !== "" ? "((" + this._layer.definitionExpression + ") AND (" + o + "))" : this._layer.definitionExpression);
        let u = this._maxQueryRate();
        const h = this._layer.capabilities.query.maxRecordCount;
        h !== void 0 && h < u && (u = h);
        let c = null;
        if (this._pageJustIds === !0)
          c = new g([], ["GETPAGES"], a, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: this._layer.objectIdField, resultRecordCount: u, resultOffset: 0, geometry: t === null ? null : t, where: o, orderByFields: n, returnGeometry: !1, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
        else {
          let p = !0;
          this._removeGeometry === !0 && (p = !1);
          const _ = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]);
          c = new g([], ["GETPAGES"], a, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: _.join(","), resultRecordCount: u, resultOffset: 0, geometry: t === null ? null : t, where: o, orderByFields: n, returnGeometry: p, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
        }
        return this._expandPagedSet(c, u, 0, 1, r).then(() => c);
      });
    } catch (n) {
      return F(n);
    }
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  _getPhysicalPage(e, t, i) {
    try {
      const s = e.pagesDefinition.internal.lastRetrieved, r = s, n = e.pagesDefinition.internal.lastPage, a = new k();
      return this._requestStandardised && (a.sqlFormat = "standard"), a.spatialRelationship = e.pagesDefinition.spatialRel, a.relationParameter = e.pagesDefinition.relationParam, a.outFields = e.pagesDefinition.outFields.split(","), a.num = e.pagesDefinition.resultRecordCount, a.start = e.pagesDefinition.internal.lastPage, a.geometry = e.pagesDefinition.geometry, a.where = e.pagesDefinition.where, a.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, a.returnGeometry = e.pagesDefinition.returnGeometry, a.outSpatialReference = this.spatialReference, this.executeQuery(a, "execute").then((l) => {
        if (this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== n)
          return "done";
        for (let o = 0; o < l.features.length; o++)
          e.pagesDefinition.internal.set[r + o] = l.features[o].attributes[this._layer.objectIdField];
        if (this._pageJustIds === !1)
          for (let o = 0; o < l.features.length; o++)
            this._featureCache[l.features[o].attributes[this._layer.objectIdField]] = l.features[o];
        return (l.exceededTransferLimit === void 0 && l.features.length !== e.pagesDefinition.resultRecordCount || l.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = s + l.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, "done";
      });
    } catch (s) {
      return F(s);
    }
  }
  _fieldsIncludingObjectId(e) {
    if (e === null)
      return [this.objectIdField];
    const t = e.slice(0);
    if (t.indexOf("*") > -1)
      return t;
    let i = !1;
    for (const s of t)
      if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
        i = !0;
        break;
      }
    return i === !1 && t.push(this.objectIdField), t;
  }
  _getFeatures(e, t, i, s) {
    const r = [];
    try {
      if (t !== -1 && this._featureCache[t] === void 0 && r.push(t), this._checkIfNeedToExpandKnownPage(e, this._maxProcessingRate()) === !0)
        return this._expandPagedSet(e, this._maxProcessingRate(), 0, 0, s).then(() => this._getFeatures(e, t, i, s));
      let n = 0;
      for (let a = e._lastFetchedIndex; a < e._known.length; a++) {
        if (e._lastFetchedIndex += 1, n++, this._featureCache[e._known[a]] === void 0) {
          let l = !1;
          if (this._layer._mode !== null && this._layer._mode !== void 0) {
            const o = this._layer._mode;
            if (o._featureMap[e._known[a]] !== void 0) {
              const u = o._featureMap[e._known[a]];
              u !== null && (l = !0, this._featureCache[e._known[a]] = u);
            }
          }
          if (l === !1 && (e._known[a] !== t && r.push(e._known[a]), r.length >= this._maxProcessingRate() - 1))
            break;
        }
        if (n >= i && r.length === 0)
          break;
      }
      if (r.length === 0)
        return f("success");
      try {
        const a = new k();
        return this._requestStandardised && (a.sqlFormat = "standard"), a.objectIds = r, a.outFields = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]), a.returnGeometry = !0, this._removeGeometry === !0 && (a.returnGeometry = !1), a.outSpatialReference = this.spatialReference, this.executeQuery(a, "execute").then((l) => {
          if (this._checkCancelled(s), l.error !== void 0)
            return F(new Error(l.error));
          for (let o = 0; o < l.features.length; o++)
            this._featureCache[l.features[o].attributes[this._layer.objectIdField]] = l.features[o];
          return "success";
        });
      } catch (a) {
        return F(a);
      }
    } catch (n) {
      return F(n);
    }
  }
  _getDistinctPages(e, t, i, s, r, n, a, l, o) {
    return this._ensureLoaded().then(() => this.databaseType()).then((u) => {
      let h = i.parseTree.column;
      for (let _ = 0; _ < this._layer.fields.length; _++)
        if (this._layer.fields[_].name.toLowerCase() === h.toLowerCase()) {
          h = this._layer.fields[_].name;
          break;
        }
      const c = new k();
      this._requestStandardised && (c.sqlFormat = "standard");
      let p = n === null ? r === null ? "1=1" : "" : v(n, u);
      return this._layer.definitionExpression && this._useDefinitionExpression && (p = p !== "" ? "((" + this._layer.definitionExpression + ") AND (" + p + "))" : this._layer.definitionExpression), c.where = p, c.spatialRelationship = this._makeRelationshipEnum(s), c.relationParameter = this._makeRelationshipParam(s), c.geometry = r === null ? null : r, c.returnDistinctValues = !0, c.returnGeometry = !1, c.outFields = [h], this.executeQuery(c, "execute").then((_) => {
        if (this._checkCancelled(o), !_.hasOwnProperty("features"))
          return F(new Error("Unnexected Result querying statistics from layer"));
        let I = !1;
        for (let y = 0; y < this._layer.fields.length; y++)
          if (this._layer.fields[y].name === h) {
            this._layer.fields[y].type === "date" && (I = !0);
            break;
          }
        for (let y = 0; y < _.features.length; y++) {
          if (I) {
            const S = _.features[y].attributes[h];
            S !== null ? l.push(new Date(S)) : l.push(S);
          } else
            l.push(_.features[y].attributes[h]);
          if (l.length >= a)
            break;
        }
        return _.features.length === 0 ? l : _.features.length === this._layer.capabilities.query.maxRecordCount && l.length < a ? this._getDistinctPages(e + _.features.length, t, i, s, r, n, a, l, o).then((y) => ({ calculated: !0, result: y })) : l;
      });
    });
  }
  _distinctStat(e, t, i, s, r, n, a) {
    return this._getDistinctPages(0, e, t, i, s, r, n, [], a).then((l) => ({ calculated: !0, result: l }));
  }
  isTable() {
    return this._layer.isTable || this._layer.geometryType === null || this._layer.type === "table" || this._layer.geometryType === "";
  }
  _countstat(e, t, i, s) {
    return this.databaseType().then((r) => {
      const n = new k();
      if (this._requestStandardised && (n.sqlFormat = "standard"), this.isTable() && i && t !== null && t !== "")
        return { calculated: !0, result: 0 };
      let a = s === null ? i === null ? "1=1" : "" : v(s, r);
      return this._layer.definitionExpression && this._useDefinitionExpression && (a = a !== "" ? "((" + this._layer.definitionExpression + ") AND (" + a + "))" : this._layer.definitionExpression), n.where = a, n.where = a, n.spatialRelationship = this._makeRelationshipEnum(t), n.relationParameter = this._makeRelationshipParam(t), n.geometry = i === null ? null : i, n.returnGeometry = !1, this.executeQuery(n, "executeForCount").then((l) => ({ calculated: !0, result: l }));
    });
  }
  _stats(e, t, i, s, r, n, a) {
    return this._ensureLoaded().then(() => {
      const l = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === !0, o = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsStatistics === !0, u = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsDistinct === !0;
      return e === "count" ? u ? this._countstat(e, i, s, r) : { calculated: !1 } : o === !1 || M(t) === !1 && l === !1 || t.isStandardized === !1 ? i !== "" || r !== null ? { calculated: !1 } : this._manualStat(e, t, n, a) : e === "distinct" ? u === !1 ? i !== "" || r !== null ? { calculated: !1 } : this._manualStat(e, t, n, a) : this._distinctStat(e, t, i, s, r, n, a) : this.databaseType().then((h) => {
        if (this.isTable() && s && i !== null && i !== "")
          return { calculated: !0, result: null };
        const c = new k();
        this._requestStandardised && (c.sqlFormat = "standard");
        let p = r === null ? s === null ? "1=1" : "" : v(r, h);
        this._layer.definitionExpression && this._useDefinitionExpression && (p = p !== "" ? "((" + this._layer.definitionExpression + ") AND (" + p + "))" : this._layer.definitionExpression), c.where = p, c.spatialRelationship = this._makeRelationshipEnum(i), c.relationParameter = this._makeRelationshipParam(i), c.geometry = s === null ? null : s;
        const _ = new ne();
        _.statisticType = je(e), _.onStatisticField = v(t, h), _.outStatisticFieldName = "ARCADE_STAT_RESULT", c.returnGeometry = !1;
        let I = "ARCADE_STAT_RESULT";
        return c.outStatistics = [_], this.executeQuery(c, "execute").then((y) => {
          if (!y.hasOwnProperty("features") || y.features.length === 0)
            return F(new Error("Unnexected Result querying statistics from layer"));
          let S = !1;
          for (let C = 0; C < y.fields.length; C++)
            if (y.fields[C].name.toUpperCase() === "ARCADE_STAT_RESULT") {
              I = y.fields[C].name, y.fields[C].type === "date" && (S = !0);
              break;
            }
          if (S) {
            let C = y.features[0].attributes[I];
            return C !== null && (C = new Date(y.features[0].attributes[I])), { calculated: !0, result: C };
          }
          return { calculated: !0, result: y.features[0].attributes[I] };
        });
      });
    });
  }
  _stat(e, t, i, s, r, n, a) {
    return this._stats(e, t, i, s, r, n, a);
  }
  _canDoAggregates(e, t) {
    return this._ensureLoaded().then(() => {
      let i = !1;
      const s = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === !0;
      if (this._layer.capabilities !== void 0 && this._layer.capabilities.query !== null && this._layer.capabilities.query.supportsStatistics === !0 && this._layer.capabilities.query.supportsOrderBy === !0 && (i = !0), i)
        for (let r = 0; r < t.length - 1; r++)
          t[r].workingexpr !== null && (t[r].workingexpr.isStandardized === !1 || M(t[r].workingexpr) === !1 && s === !1) && (i = !1);
      return i !== !1;
    });
  }
  _makeRelationshipEnum(e) {
    if (e.indexOf("esriSpatialRelRelation") >= 0)
      return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.indexOf("esriSpatialRelRelation") >= 0 ? e.split(":")[1] : "";
  }
  _getAggregatePagesDataSourceDefinition(e, t, i, s, r, n, a) {
    return this._ensureLoaded().then(() => this.databaseType()).then((l) => {
      let o = "", u = !1, h = !1;
      n !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (o = n.constructClause(), h = !0), this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsPagination === !1 && (h = !1, u = !0, o = this._layer.objectIdField);
      const c = [];
      for (let y = 0; y < t.length; y++) {
        const S = new ne();
        S.onStatisticField = t[y].workingexpr !== null ? v(t[y].workingexpr, l) : "", S.outStatisticFieldName = t[y].field, S.statisticType = t[y].toStatisticsName(), c.push(S);
      }
      o === "" && (o = e.join(","));
      let p = this._maxQueryRate();
      const _ = this._layer.capabilities.query.maxRecordCount;
      _ !== void 0 && _ < p && (p = _);
      let I = r === null ? s === null ? "1=1" : "" : v(r, l);
      return this._layer.definitionExpression && this._useDefinitionExpression && (I = I !== "" ? "((" + this._layer.definitionExpression + ") AND (" + I + "))" : this._layer.definitionExpression), new g([], ["GETPAGES"], h, { groupbypage: !0, spatialRel: this._makeRelationshipEnum(i), relationParam: this._makeRelationshipParam(i), outFields: ["*"], useOIDpagination: u, generatedOid: a, resultRecordCount: p, resultOffset: 0, groupByFieldsForStatistics: e, outStatistics: c, geometry: s === null ? null : s, where: I, orderByFields: o, returnGeometry: !1, returnIdsOnly: !1, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
    });
  }
  _getAgregagtePhysicalPage(e, t, i) {
    try {
      let s = e.pagesDefinition.where;
      e.pagesDefinition.useOIDpagination === !0 && (s = s !== "" ? "(" + s + ") AND (" + e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString() + ")" : e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString());
      const r = e.pagesDefinition.internal.lastRetrieved, n = r, a = e.pagesDefinition.internal.lastPage, l = new k();
      return this._requestStandardised && (l.sqlFormat = "standard"), l.where = s, l.spatialRelationship = e.pagesDefinition.spatialRel, l.relationParameter = e.pagesDefinition.relationParam, l.outFields = e.pagesDefinition.outFields, l.outStatistics = e.pagesDefinition.outStatistics, l.geometry = e.pagesDefinition.geometry, l.groupByFieldsForStatistics = e.pagesDefinition.groupByFieldsForStatistics, l.num = e.pagesDefinition.resultRecordCount, l.start = e.pagesDefinition.internal.lastPage, l.returnGeometry = e.pagesDefinition.returnGeometry, l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, this.isTable() && l.geometry && l.spatialRelationship ? f([]) : this.executeQuery(l, "execute").then((o) => {
        if (this._checkCancelled(i), !o.hasOwnProperty("features"))
          return F(new Error("Unnexected Result querying aggregates from layer"));
        const u = [];
        if (e.pagesDefinition.internal.lastPage !== a)
          return [];
        for (let h = 0; h < o.features.length; h++)
          e.pagesDefinition.internal.set[n + h] = o.features[h].attributes[e.pagesDefinition.generatedOid];
        for (let h = 0; h < o.features.length; h++)
          u.push(new A({ attributes: o.features[h].attributes, geometry: null }));
        return e.pagesDefinition.useOIDpagination === !0 ? o.features.length === 0 ? e.pagesDefinition.internal.fullyResolved = !0 : e.pagesDefinition.internal.lastMaxId = o.features[o.features.length - 1].attributes[e.pagesDefinition.generatedOid] : (o.exceededTransferLimit === void 0 && o.features.length !== e.pagesDefinition.resultRecordCount || o.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = r + o.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, u;
      });
    } catch (s) {
      return F(s);
    }
  }
  static create(e, t, i, s, r) {
    const n = new D({ url: e, outFields: t === null ? ["*"] : t });
    return new Z({ layer: n, spatialReference: i, lrucache: s, interceptor: r });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON && this._layer.source.sourceJSON.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return V(this._layer.parsedUrl.path);
  }
  queryAttachments(e, t, i, s, r) {
    if (this._layer.capabilities.data.supportsAttachment && this._layer.capabilities.operations.supportsQueryAttachments) {
      const n = { objectIds: [e], returnMetadata: r };
      return (t && t > 0 || i && i > 0) && (n.size = [t && t > 0 ? t : 0, i && i > 0 ? i : t + 1]), s && s.length > 0 && (n.attachmentTypes = s), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: n, method: "attachments" }), this._layer.queryAttachments(n).then((a) => {
        const l = [];
        return a && a[e] && a[e].forEach((o) => {
          const u = this._layer.parsedUrl.path + "/" + e.toString() + "/attachments/" + o.id.toString();
          let h = null;
          r && o.exifInfo && (h = Ue.convertJsonToArcade(o.exifInfo, !0)), l.push(new We(o.id, o.name, o.contentType, o.size, u, h));
        }), l;
      });
    }
    return f([]);
  }
  queryRelatedFeatures(e) {
    const t = { f: "json", relationshipId: e.relationshipId.toString(), definitionExpression: e.where, outFields: e.outFields.join(","), returnGeometry: e.returnGeometry.toString() };
    return e.resultOffset !== void 0 && e.resultOffset !== null && (t.resultOffset = e.resultOffset.toString()), e.resultRecordCount !== void 0 && e.resultRecordCount !== null && (t.resultRecordCount = e.resultRecordCount.toString()), e.orderByFields && (t.orderByFields = e.orderByFields.join(",")), e.objectIds.length > 0 && (t.objectIds = e.objectIds.join(",")), e.outSpatialReference && (t.outSR = JSON.stringify(e.outSpatialReference.toJSON())), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: t, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" }), L(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: t }).then((i) => {
      if (i.data) {
        const s = {}, r = i.data;
        if (r && r.relatedRecordGroups) {
          const n = r.spatialReference;
          for (const a of r.relatedRecordGroups) {
            const l = a.objectId, o = [];
            for (const u of a.relatedRecords) {
              u.geometry && (u.geometry.spatialReference = n);
              const h = new A({ geometry: u.geometry ? De(u.geometry) : null, attributes: u.attributes });
              o.push(h);
            }
            s[l] = { features: o, exceededTransferLimit: r.exceededTransferLimit === !0 };
          }
        }
        return s;
      }
      return F("Invalid Request");
    });
  }
  getFeatureByObjectId(e, t) {
    const i = new k();
    return i.outFields = t, i.returnGeometry = !1, i.outSpatialReference = this.spatialReference, i.where = this.objectIdField + "=" + e.toString(), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: i, method: "execute" }), ae(this._layer.parsedUrl.path, i).then((s) => s.features.length === 1 ? s.features[0] : null);
  }
  getIdentityUser() {
    return this.load().then(() => {
      var e;
      const t = (e = J) == null ? void 0 : e.findCredential(this._layer.url);
      return t ? t.userId : null;
    });
  }
  getOwningSystemUrl() {
    return this.load().then(() => {
      var e;
      const t = (e = J) == null ? void 0 : e.findServerInfo(this._layer.url);
      if (t)
        return f(t.owningSystemUrl);
      let i = this._layer.url;
      const s = i.toLowerCase().indexOf("/rest/services");
      return i = s > -1 ? i.substring(0, s) : i, i ? (i += "/rest/info", N((r, n) => {
        L(i, { query: { f: "json" } }).then((a) => {
          let l = "";
          a.data && a.data.owningSystemUrl && (l = a.data.owningSystemUrl), r(l);
        }, (a) => {
          r("");
        });
      })) : f("");
    });
  }
  getDataSourceFeatureSet() {
    const e = new Z({ layer: this._layer, spatialReference: this.spatialReference, outFields: this._overrideFields, includeGeometry: !this._removeGeometry, lrucache: this.recentlyUsedQueries, interceptor: this.featureSetQueryInterceptor });
    return e._useDefinitionExpression = !1, e;
  }
};
class ie extends T {
  constructor(e) {
    super(e), this.declaredClass = "geoscene.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = !1, this._overrideFields = null, this._forceIsTable = !1, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.isTable === !0 && (this._forceIsTable = !0), e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ee;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = N((e, t) => {
      if (this._layer.loaded === !0)
        return this._initialiseFeatureSet(), void e(this);
      this._layer.when().then(() => {
        try {
          this._initialiseFeatureSet(), e(this);
        } catch (i) {
          t(i);
        }
      }, t), this._layer.load();
    })), this._loadPromise;
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields && !(this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")) {
      const e = [];
      for (const t of this.fields)
        if (t.type === "oid")
          e.push(t);
        else
          for (const i of this._layer.outFields)
            if (i.toLowerCase() === t.name.toLowerCase()) {
              e.push(t);
              break;
            }
      this.fields = e;
    }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e = [], t = [];
        for (const i of this.fields)
          if (i.type === "oid")
            e.push(i), t.push(i.name);
          else
            for (const s of this._overrideFields)
              if (s.toLowerCase() === i.name.toLowerCase()) {
                e.push(i), t.push(i.name);
                break;
              }
        this.fields = e, this._overrideFields = t;
      }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields)
      e.type === "global-id" && (this.globalIdField = e.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this._databaseType = x.Standardised, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || this._layer.type === "table" || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e)).then((t) => (this._wset = t, t)) : f(this._wset);
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields)
      t[i.name] = e.attributes[i.name];
    return new A({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  _getFilteredSet(e, t, i, s, r) {
    let n = "", a = !1;
    if (s !== null && (n = s.constructClause(), a = !0), this.isTable() && t && e !== null && e !== "") {
      const o = new g([], [], !0, null);
      return f(o);
    }
    const l = new k();
    return l.where = i === null ? t === null ? "1=1" : "" : v(i, x.Standardised), l.spatialRelationship = this._makeRelationshipEnum(e), l.outSpatialReference = this.spatialReference, l.orderByFields = n !== "" ? n.split(",") : null, l.geometry = t === null ? null : t, l.returnGeometry = !0, l.relationParameter = this._makeRelationshipParam(e), this._layer.queryFeatures(l).then((o) => {
      if (o === null)
        return new g([], [], a, null);
      this._checkCancelled(r);
      const u = [];
      return o.features.forEach((h) => {
        const c = h.attributes[this._layer.objectIdField];
        u.push(c), this._featureCache[c] = this._changeFeature(h);
      }), new g([], u, a, null);
    });
  }
  _makeRelationshipEnum(e) {
    if (e.indexOf("esriSpatialRelRelation") >= 0)
      return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.indexOf("esriSpatialRelRelation") >= 0 ? e.split(":")[1] : "";
  }
  _queryAllFeatures() {
    if (this._wset)
      return f(this._wset);
    const e = new k();
    return e.where = "1=1", this._ensureLoaded().then(() => {
      if (this._layer.source && this._layer.source.items) {
        const t = [];
        return this._layer.source.items.forEach((i) => {
          const s = i.attributes[this._layer.objectIdField];
          t.push(s), this._featureCache[s] = this._changeFeature(i);
        }), this._wset = new g([], t, !1, null), this._wset;
      }
      return this._layer.queryFeatures(e).then((t) => {
        const i = [];
        return t.features.forEach((s) => {
          const r = s.attributes[this._layer.objectIdField];
          i.push(r), this._featureCache[r] = this._changeFeature(s);
        }), this._wset = new g([], i, !1, null), this._wset;
      });
    });
  }
  _getFeatures(e, t, i) {
    const s = [];
    t !== -1 && this._featureCache[t] === void 0 && s.push(t);
    for (let r = e._lastFetchedIndex; r < e._known.length && (e._lastFetchedIndex += 1, !(this._featureCache[e._known[r]] === void 0 && (e._known[r] !== t && s.push(e._known[r]), s.length > i))); r++)
      ;
    return s.length === 0 ? f("success") : F(new Error("Unaccounted for Features. Not in Feature Collection"));
  }
  _refineSetBlock(e) {
    return f(e);
  }
  _stat() {
    return f({ calculated: !1 });
  }
  _canDoAggregates() {
    return f(!1);
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e) {
    const t = {};
    for (const i in e)
      t[i] = e[i];
    return t;
  }
  nativeCapabilities() {
    return { title: this._layer.title, canQueryRelated: !1, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: !0 };
  }
  static create(e, t) {
    let i = e.layerDefinition.objectIdField;
    const s = e.layerDefinition.typeIdField ? e.layerDefinition.typeIdField : "", r = [];
    if (e.layerDefinition.types)
      for (const p of e.layerDefinition.types)
        r.push(Te.fromJSON(p));
    let n = e.layerDefinition.geometryType;
    n === void 0 && (n = e.featureSet.geometryType || "");
    let a = e.featureSet.features;
    const l = t.toJSON();
    if (i === "" || i === void 0) {
      let p = !1;
      for (const _ of e.layerDefinition.fields)
        if (_.type === "oid" || _.type === "esriFieldTypeOID") {
          i = _.name, p = !0;
          break;
        }
      if (p === !1) {
        let _ = "FID", I = !0, y = 0;
        for (; I; ) {
          let C = !0;
          for (const ge of e.layerDefinition.fields)
            if (ge.name === _) {
              C = !1;
              break;
            }
          C === !0 ? I = !1 : (y++, _ = "FID" + y.toString());
        }
        e.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: _, alias: _ });
        const S = [];
        for (let C = 0; C < a.length; C++)
          S.push({ geometry: e.featureSet.features[C].geometry, attributes: e.featureSet.features[C].attributes ? this._cloneAttr(e.featureSet.features[C].attributes) : {} }), S[C].attributes[_] = C;
        a = S, i = _;
      }
    }
    const o = [];
    for (const p of e.layerDefinition.fields)
      p instanceof q ? o.push(p) : o.push(q.fromJSON(p));
    let u = n;
    switch (u) {
      case "esriGeometryPoint":
        u = "point";
        break;
      case "esriGeometryPolyline":
        u = "polyline";
        break;
      case "esriGeometryPolygon":
        u = "polygon";
        break;
      case "esriGeometryExtent":
        u = "extent";
        break;
      case "esriGeometryMultipoint":
        u = "multipoint";
    }
    for (const p of a)
      p.geometry && !(p.geometry instanceof ke) && (p.geometry.type = u, p.geometry.spatialReference === void 0 && (p.geometry.spatialReference = l));
    const h = { outFields: ["*"], source: a, fields: o, types: r, typeIdField: s, objectIdField: i, spatialReference: t };
    h.geometryType = u || "point";
    const c = new D(h);
    return new ie({ layer: c, spatialReference: t, isTable: u === null || u === "" });
  }
  queryAttachments() {
    return f([]);
  }
  getFeatureByObjectId(e) {
    const t = new k();
    return t.where = this.objectIdField + "=" + e.toString(), this._layer.queryFeatures(t).then((i) => i.features.length === 1 ? i.features[0] : null);
  }
  getOwningSystemUrl() {
    return f("");
  }
  getIdentityUser() {
    return f("");
  }
}
class He extends T {
  constructor(e) {
    super(e), this.declaredClass = "geoscene.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = !1, this._removeGeometry = !1, this._overrideFields = null, this.featureObjectId = null, this.relatedLayer = null, this.relationship = null, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, this._findObjectId = e.objectId, this.featureObjectId = e.objectId, this.relationship = e.relationship, this.relatedLayer = e.relatedLayer, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ee;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = N((e, t) => {
      ue([this._layer.load(), this.relatedLayer.load()]).then(() => {
        this._initialiseFeatureSet(), e(this);
      }, t);
    })), this._loadPromise;
  }
  nativeCapabilities() {
    return this.relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this.relatedLayer.geometryType, this.fields = this.relatedLayer.fields.slice(0), this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const t = [], i = [];
        for (const s of this.fields)
          if (s.type === "oid")
            t.push(s), i.push(s.name);
          else
            for (const r of this._overrideFields)
              if (r.toLowerCase() === s.name.toLowerCase()) {
                t.push(s), i.push(s.name);
                break;
              }
        this.fields = t, this._overrideFields = i;
      }
    const e = this._layer.nativeCapabilities();
    e && (this._databaseType = e.databaseType, this._requestStandardised = e.requestStandardised), this.objectIdField = this.relatedLayer.objectIdField, this.globalIdField = this.relatedLayer.globalIdField, this.hasM = this.relatedLayer.supportsM, this.hasZ = this.relatedLayer.supportsZ, this.typeIdField = this.relatedLayer.typeIdField, this.types = this.relatedLayer.types;
  }
  databaseType() {
    return this.relatedLayer.databaseType().then(() => (this._databaseType = this.relatedLayer._databaseType, this._databaseType));
  }
  isTable() {
    return this.relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  _getSet(e) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e)).then((t) => (this._wset = t, t)) : f(this._wset);
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields)
      t[i.name] = e.attributes[i.name];
    return new A({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  _getFilteredSet(e, t, i, s, r) {
    return this.databaseType().then(() => {
      if (this.isTable() && t && e !== null && e !== "")
        return new g([], [], !0, null);
      const n = this._layer.nativeCapabilities();
      if (n.canQueryRelated === !1)
        return new g([], [], !0, null);
      if (n.capabilities.queryRelated && n.capabilities.queryRelated.supportsPagination)
        return this._getFilteredSetUsingPaging(e, t, i, s, r);
      let a = "", l = !1;
      s !== null && n.capabilities && n.capabilities.queryRelated && n.capabilities.queryRelated.supportsOrderBy === !0 && (a = s.constructClause(), l = !0);
      const o = new le();
      o.objectIds = [this._findObjectId];
      const u = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this.relatedLayer.fields ? this.relatedLayer.fields.map((c) => c.name) : ["*"]);
      o.outFields = u, o.relationshipId = this.relationship.id, o.where = "1=1";
      let h = !0;
      return this._removeGeometry === !0 && (h = !1), o.returnGeometry = h, this._requestStandardised && (o.sqlFormat = "standard"), o.outSpatialReference = this.spatialReference, o.orderByFields = a !== "" ? a.split(",") : null, n.source.queryRelatedFeatures(o).then((c) => {
        this._checkCancelled(r);
        const p = c[this._findObjectId] ? c[this._findObjectId].features : [], _ = [];
        for (let S = 0; S < p.length; S++)
          this._featureCache[p[S].attributes[this.relatedLayer.objectIdField]] = p[S], _.push(p[S].attributes[this.relatedLayer.objectIdField]);
        const I = t && e !== null && e !== "", y = i != null;
        return new g(I || y ? _ : [], I || y ? [] : _, l, null);
      });
    });
  }
  _fieldsIncludingObjectId(e) {
    if (e === null)
      return [this.objectIdField];
    const t = e.slice(0);
    if (t.indexOf("*") > -1)
      return t;
    let i = !1;
    for (const s of t)
      if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
        i = !0;
        break;
      }
    return i === !1 && t.push(this.objectIdField), t;
  }
  _getFilteredSetUsingPaging(e, t, i, s, r) {
    try {
      let n = "", a = !1;
      const l = this._layer.nativeCapabilities();
      return s !== null && l && l.capabilities.queryRelated && l.capabilities.queryRelated.supportsOrderBy === !0 && (n = s.constructClause(), a = !0), this.databaseType().then(() => {
        const o = "1=1";
        let u = this._maxQueryRate();
        const h = l.capabilities.query.maxRecordCount;
        h !== void 0 && h < u && (u = h);
        const c = t && e !== null && e !== "", p = i != null;
        let _ = null, I = !0;
        this._removeGeometry === !0 && (I = !1);
        const y = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this.relatedLayer.fields ? this.relatedLayer.fields.map((S) => S.name) : ["*"]);
        return _ = new g(c || p ? ["GETPAGES"] : [], c || p ? [] : ["GETPAGES"], a, { outFields: y.join(","), resultRecordCount: u, resultOffset: 0, objectIds: [this._findObjectId], where: o, orderByFields: n, returnGeometry: I, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } }), this._expandPagedSet(_, u, 0, 0, r).then(() => _);
      });
    } catch (n) {
      return F(n);
    }
  }
  _expandPagedSet(e, t, i, s, r) {
    return this._expandPagedSetFeatureSet(e, t, i, s, r);
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  _getPhysicalPage(e, t, i) {
    try {
      const s = e.pagesDefinition.internal.lastRetrieved, r = s, n = e.pagesDefinition.internal.lastPage, a = this._layer.nativeCapabilities(), l = new le();
      return this._requestStandardised === !0 && (l.sqlFormat = "standard"), l.relationshipId = this.relationship.id, l.objectIds = e.pagesDefinition.objectIds, l.resultOffset = e.pagesDefinition.internal.lastPage, l.resultRecordCount = e.pagesDefinition.resultRecordCount, l.outFields = e.pagesDefinition.outFields.split(","), l.where = e.pagesDefinition.where, l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, l.returnGeometry = e.pagesDefinition.returnGeometry, l.outSpatialReference = this.spatialReference, a.source.queryRelatedFeatures(l).then((o) => {
        if (this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== n)
          return 0;
        const u = o[this._findObjectId] ? o[this._findObjectId].features : [];
        for (let c = 0; c < u.length; c++)
          e.pagesDefinition.internal.set[r + c] = u[c].attributes[this.relatedLayer.objectIdField];
        for (let c = 0; c < u.length; c++)
          this._featureCache[u[c].attributes[this.relatedLayer.objectIdField]] = u[c];
        const h = !o[this._findObjectId] || o[this._findObjectId].exceededTransferLimit === !1;
        return u.length !== e.pagesDefinition.resultRecordCount && h && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = s + u.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, u.length;
      });
    } catch (s) {
      return F(s);
    }
  }
  _getFeatures(e, t, i, s) {
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const n = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, n) === !0)
      return this._expandPagedSet(e, n, 0, 0, s).then(() => this._getFeatures(e, t, i, s));
    let a = 0;
    for (let l = e._lastFetchedIndex; l < e._known.length && (a++, a <= i && (e._lastFetchedIndex += 1), !(e._known[l] !== "GETPAGES" && this._featureCache[e._known[l]] === void 0 && (e._known[l] !== t && r.push(e._known[l]), r.length > i))) && !(a >= i && r.length === 0); l++)
      ;
    return r.length === 0 ? f("success") : F(new Error("Unaccounted for Features. Not in Feature Collection"));
  }
  _refineSetBlock(e, t, i) {
    return f(e);
  }
  _stat(e, t, i, s, r, n, a) {
    return f({ calculated: !1 });
  }
  get gdbVersion() {
    return this.relatedLayer.gdbVersion;
  }
  _canDoAggregates(e, t, i, s, r) {
    return f(!1);
  }
  relationshipMetaData() {
    return this.relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this.relatedLayer.serviceUrl();
  }
  queryAttachments(e, t, i, s, r) {
    return this.relatedLayer.queryAttachments(e, t, i, s, r);
  }
  getFeatureByObjectId(e, t) {
    return this.relatedLayer.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this.relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this.relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this.relatedLayer;
  }
}
function Xe() {
  m.applicationCache === null && (m.applicationCache = new m());
}
function H(d, e) {
  if (m.applicationCache) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t)
      return t.then((r) => f(new D({ url: d, outFields: e, sourceJSON: r })));
    const i = new D({ url: d, outFields: e });
    let s = N((r, n) => {
      i.load().then(() => {
        r(i.sourceJSON);
      }, (a) => {
        n(a);
      });
    });
    return m.applicationCache && (m.applicationCache.setLayerInfo(d, s), s = s.catch((r) => {
      throw m.applicationCache.clearLayerInfo(d), r;
    })), s.then(() => f(i));
  }
  return f(new D({ url: d, outFields: e }));
}
function se(d, e, t, i, s, r = null) {
  return H(d, ["*"]).then((n) => f(P(n, e, t, i, s, r)));
}
function P(d, e = null, t = null, i = !0, s = null, r = null) {
  return d._hasMemorySource() === !0 ? new ie({ layer: d, spatialReference: e, outFields: t, includeGeometry: i, lrucache: s, interceptor: r }) : new Ze({ layer: d, spatialReference: e, outFields: t, includeGeometry: i, lrucache: s, interceptor: r });
}
function Ye(d) {
  if (m.applicationCache !== null) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t !== null)
      return t;
  }
  let e = L(d, { responseType: "json", query: { f: "json" } }).then((t) => {
    if (t.data) {
      const i = t.data;
      return f(i);
    }
    return f(null);
  });
  return m.applicationCache !== null && (m.applicationCache.setLayerInfo(d, e), e = e.catch((t) => {
    throw m.applicationCache.clearLayerInfo(d), t;
  })), e;
}
function et(d, e) {
  const t = "QUERYDATAELEMTS:" + e.toString() + ":" + d;
  if (m.applicationCache !== null) {
    const s = m.applicationCache.getLayerInfo(t);
    if (s !== null)
      return s;
  }
  let i = L(d + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([e.toString()]), f: "json" } }).then((s) => {
    if (s.data) {
      const r = s.data;
      if (r.layerDataElements && r.layerDataElements[0])
        return r.layerDataElements[0];
    }
    throw new Error("Not Found");
  });
  return m.applicationCache !== null && (m.applicationCache.setLayerInfo(t, i), i = i.catch((s) => {
    throw m.applicationCache.clearLayerInfo(t), s;
  })), i;
}
function ye(d) {
  if (m.applicationCache !== null) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t !== null)
      return t;
  }
  let e = L(d, { responseType: "json", query: { f: "json" } }).then((t) => {
    if (t.data) {
      const i = t.data;
      return i.layers || (i.layers = []), i.tables || (i.tables = []), f(i);
    }
    return f({ layers: [], tables: [] });
  });
  return m.applicationCache !== null && (m.applicationCache.setLayerInfo(d, e), e = e.catch((t) => {
    throw m.applicationCache.clearLayerInfo(d), t;
  })), e;
}
function tt(d, e) {
  const t = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null };
  return ye(d).then((i) => {
    if (t.metadata = i, i.controllerDatasetLayers && i.controllerDatasetLayers.utilityNetworkLayerId !== void 0 && i.controllerDatasetLayers.utilityNetworkLayerId !== null) {
      if (i.layers)
        for (const r of i.layers)
          t.layerNameLkp[r.id] = r.name;
      if (i.tables)
        for (const r of i.tables)
          t.layerNameLkp[r.id] = r.name;
      const s = i.controllerDatasetLayers.utilityNetworkLayerId;
      return t.networkId = s, et(d, s).then((r) => {
        if (r) {
          t.queryelem = r, t.queryelem && t.queryelem.dataElement && t.queryelem.dataElement.schemaGeneration !== void 0 && (t.unVersion = t.queryelem.dataElement.schemaGeneration), t.lkp = {}, t.queryelem.dataElement.domainNetworks || (t.queryelem.dataElement.domainNetworks = []);
          for (const n of t.queryelem.dataElement.domainNetworks) {
            for (const a of n.edgeSources ? n.edgeSources : []) {
              const l = { layerId: a.layerId, sourceId: a.sourceId, className: t.layerNameLkp[a.layerId] ? t.layerNameLkp[a.layerId] : null };
              l.className && (t.lkp[l.className] = l);
            }
            for (const a of n.junctionSources ? n.junctionSources : []) {
              const l = { layerId: a.layerId, sourceId: a.sourceId, className: t.layerNameLkp[a.layerId] ? t.layerNameLkp[a.layerId] : null };
              l.className && (t.lkp[l.className] = l);
            }
          }
          if (t.queryelem.dataElement.terminalConfigurations)
            for (const n of t.queryelem.dataElement.terminalConfigurations)
              for (const a of n.terminals)
                t.terminals.push({ terminalId: a.terminalId, terminalName: a.terminalName });
          return Ye(d + "/" + s).then((n) => {
            if (n.systemLayers && n.systemLayers.associationsTableId !== void 0 && n.systemLayers.associationsTableId !== null) {
              const a = [];
              return t.unVersion >= 4 && (a.push("STATUS"), a.push("PERCENTALONG")), se(d + "/" + n.systemLayers.associationsTableId.toString(), e, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...a], !1, null, null).then((l) => l.load()).then((l) => t.unVersion >= 4 ? (l = l.filter(R.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)", l.getFieldsIndex()))).load() : l).then((l) => ({ lkp: t.lkp, associations: l, unVersion: t.unVersion, terminals: t.terminals }));
            }
            return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
          });
        }
        return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
      });
    }
    return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
  });
}
function it(d, e, t, i = null, s = null, r = !0, n = null, a = null) {
  let l = d.serviceUrl();
  return l ? (l = l.charAt(l.length - 1) === "/" ? l + e.relatedTableId.toString() : l + "/" + e.relatedTableId.toString(), se(l, i, s, r, n, a).then((o) => new He({ layer: d, relatedLayer: o, relationship: e, objectId: t, spatialReference: i, outFields: s, includeGeometry: r, lrucache: n, interceptor: a }))) : null;
}
j.registerAction(), ze.registerAction(), z.registerAction(), Ge.registerAction(), te.registerAction();
class st extends fe {
  constructor(e, t = null, i = null, s = null) {
    super(), this._map = e, this._overridespref = t, this.lrucache = i, this.interceptor = s, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = P(e, this._overridespref, i === null ? ["*"] : i, t, this.lrucache, this.interceptor);
    return this._instantLayers.push({ featureset: s, opitem: e, includeGeometry: t, outFields: JSON.stringify(i) }), s;
  }
  featureSetByName(e, t = !0, i = null) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === !1)
      return this._map.load().then(() => {
        try {
          return this.featureSetByName(e, t, i);
        } catch (n) {
          return F(n);
        }
      });
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let n = 0; n < this._instantLayers.length; n++) {
      const a = this._instantLayers[n];
      if (a.opitem.title === e && a.includeGeometry === t && a.outFields === s)
        return this.resolvePromise(this._instantLayers[n].featureset);
    }
    const r = this._map.allLayers.find((n) => n instanceof D && n.title === e);
    if (r)
      return this.resolvePromise(this._makeAndAddFeatureSet(r, t, i));
    if (this._map.tables) {
      const n = this._map.tables.find((a) => !!(a.title && a.title === e || a.title && a.title === e));
      if (n) {
        if (n instanceof D)
          return this.resolvePromise(this._makeAndAddFeatureSet(n, t, i));
        if (!n._materializedTable) {
          const a = n.outFields ? n : { ...n, outFields: ["*"] };
          n._materializedTable = new D(a);
        }
        return n._materializedTable.load().then(() => this.resolvePromise(this._makeAndAddFeatureSet(n._materializedTable, t, i)));
      }
    }
    return this.resolvePromise(null);
  }
  featureSetById(e, t = !0, i = ["*"]) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === !1)
      return this._map.load().then(() => {
        try {
          return this.featureSetById(e, t, i);
        } catch (n) {
          return F(n);
        }
      });
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let n = 0; n < this._instantLayers.length; n++) {
      const a = this._instantLayers[n];
      if (a.opitem.id === e && a.includeGeometry === t && a.outFields === s)
        return this.resolvePromise(this._instantLayers[n].featureset);
    }
    const r = this._map.allLayers.find((n) => n instanceof D && n.id === e);
    if (r)
      return this.resolvePromise(this._makeAndAddFeatureSet(r, t, i));
    if (this._map.tables) {
      const n = this._map.tables.find((a) => a.id === e);
      if (n) {
        if (n instanceof D)
          return this.resolvePromise(this._makeAndAddFeatureSet(n, t, i));
        if (!n._materializedTable) {
          const a = { ...n, outFields: ["*"] };
          n._materializedTable = new D(a);
        }
        return n._materializedTable.load().then(() => this.resolvePromise(this._makeAndAddFeatureSet(n._materializedTable, t, i)));
      }
    }
    return this.resolvePromise(null);
  }
}
class re extends fe {
  constructor(e, t = null, i = null, s = null) {
    super(), this._url = e, this._overridespref = t, this.lrucache = i, this.interceptor = s, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = P(e, this._overridespref, i === null ? ["*"] : i, t, this.lrucache);
    return this._instantLayers.push({ featureset: s, opitem: e, includeGeometry: t, outFields: JSON.stringify(i) }), s;
  }
  _loadMetaData() {
    return ye(this._url).then((e) => (this.metadata = e, e));
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new re(this._url, this._overridespref, this.lrucache, this.interceptor);
  }
  featureSetByName(e, t = !0, i = null) {
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let r = 0; r < this._instantLayers.length; r++) {
      const n = this._instantLayers[r];
      if (n.opitem.title === e && n.includeGeometry === t && n.outFields === s)
        return this.resolvePromise(this._instantLayers[r].featureset);
    }
    return this._loadMetaData().then((r) => {
      let n = null;
      for (const a of r.layers ? r.layers : [])
        a.name === e && (n = a);
      if (!n)
        for (const a of r.tables ? r.tables : [])
          a.name === e && (n = a);
      return n ? H(this._url + "/" + n.id, ["*"]).then((a) => this._makeAndAddFeatureSet(a, t, i)) : this.resolvePromise(null);
    });
  }
  featureSetById(e, t = !0, i = ["*"]) {
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    e = e != null ? e.toString() : "";
    for (let r = 0; r < this._instantLayers.length; r++) {
      const n = this._instantLayers[r];
      if (n.opitem.id === e && n.includeGeometry === t && n.outFields === s)
        return this.resolvePromise(this._instantLayers[r].featureset);
    }
    return this._loadMetaData().then((r) => {
      let n = null;
      for (const a of r.layers ? r.layers : [])
        a.id !== null && a.id !== void 0 && a.id.toString() === e && (n = a);
      if (!n)
        for (const a of r.tables ? r.tables : [])
          a.id !== null && a.id !== void 0 && a.id.toString() === e && (n = a);
      return n ? H(this._url + "/" + n.id, ["*"]).then((a) => this._makeAndAddFeatureSet(a, t, i)) : this.resolvePromise(null);
    });
  }
}
function rt(d, e, t = null, i = null) {
  return new st(d, e, t, i);
}
function nt(d, e, t = null, i = null) {
  return new re(d, e, t, i);
}
function at(d, e) {
  return d === null ? e : new Ne({ url: d.field("url") });
}
function lt(d, e, t) {
  return J.findCredential(d.restUrl) ? d.loadStatus === "loaded" && e === "" && d.user && d.user.sourceJSON && t === !1 ? f(d.user.sourceJSON) : e === "" ? L(d.restUrl + "/community/self", { responseType: "json", query: { f: "json", ...t === !1 ? {} : { returnUserLicenseTypeExtensions: !0 } } }).then((i) => {
    if (i.data) {
      const s = i.data;
      if (s && s.username)
        return f(s);
    }
    return f(null);
  }) : L(d.restUrl + "/community/users/" + e, { responseType: "json", query: { f: "json" } }).then((i) => {
    if (i.data) {
      const s = i.data;
      return s.error ? null : f(s);
    }
    return f(null);
  }) : f(null);
}
function ot(d, e, t, i, s) {
  if (d === null)
    return null;
  if (d instanceof D) {
    switch (e) {
      case "datasource":
        return P(d, s, d.outFields, !0, t, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return P(d, s, d.outFields, !0, t, i);
    }
    return null;
  }
  if (d instanceof T)
    switch (e) {
      case "datasource":
        return d.getDataSourceFeatureSet();
      case "parent":
        return d;
      case "root":
        return d.getRootFeatureSet();
    }
  return null;
}
function ut(d, e, t, i, s, r, n, a = null) {
  if (m.applicationCache) {
    const l = m.applicationCache.getLayerInfo(d + ":" + r.url);
    if (l)
      return l.then((o) => {
        try {
          const u = new D({ url: V(o.url) + "/" + e, outFields: ["*"] });
          return f(P(u, t, i, s, n, a));
        } catch (u) {
          return F(u);
        }
      }, (o) => F(o));
  }
  return N((l, o) => {
    const u = new Ee({ id: d, portal: r }).load();
    m.applicationCache && m.applicationCache.setLayerInfo(d + ":" + r.url, u), u.then((h) => {
      try {
        const c = new D({ url: V(h.url) + "/" + e, outFields: ["*"] });
        l(P(c, t, i, s, n, a));
      } catch (c) {
        o(c);
      }
    }, (h) => {
      m.applicationCache && m.applicationCache.clearLayerInfo(d + ":" + r.url), o(h);
    });
  });
}
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constructAssociationMetaDataFeatureSetFromUrl: tt,
  constructFeatureSet: P,
  constructFeatureSetFromPortalItem: ut,
  constructFeatureSetFromRelationship: it,
  constructFeatureSetFromUrl: se,
  convertToFeatureSet: ot,
  createFeatureSetCollectionFromMap: rt,
  createFeatureSetCollectionFromService: nt,
  getPortal: at,
  initialiseMetaDataCache: Xe,
  lookupUser: lt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qe as C,
  at as D,
  Ve as E,
  ut as G,
  ot as P,
  se as T,
  j as _,
  z as a,
  te as b,
  $e as c,
  K as d,
  G as e,
  Ft as f,
  P as g,
  tt as j,
  lt as q,
  fe as r,
  Me as v,
  it as w,
  ie as y
};
