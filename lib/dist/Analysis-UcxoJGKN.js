import { ci as r, bg as a, cj as o, R as l, a as e, b as s, c as p, b3 as c } from "./index-h53IWweP.js";
let y = 0, t = class extends r(a(o(c))) {
  constructor(n) {
    super(n), this.id = `${Date.now().toString(16)}-analysis-${y++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(n) {
    const i = this.parent;
    if (i != null)
      switch (i.type) {
        case "line-of-sight":
        case "dimension":
          i.releaseAnalysis(this);
          break;
        case "2d":
        case "3d":
          i.analyses.includes(this) && i.analyses.remove(this);
      }
    this._set("parent", n);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(l);
  }
};
e([s({ type: String, constructOnly: !0, clonable: !1 })], t.prototype, "id", void 0), e([s({ type: String })], t.prototype, "title", void 0), e([s({ constructOnly: !0 })], t.prototype, "type", void 0), e([s({ clonable: !1, value: null })], t.prototype, "parent", null), e([s({ readOnly: !0 })], t.prototype, "isEditable", null), e([s({ readOnly: !0 })], t.prototype, "requiredPropertiesForEditing", void 0), t = e([p("geoscene.analysis.Analysis")], t);
const u = t;
export {
  u as c
};