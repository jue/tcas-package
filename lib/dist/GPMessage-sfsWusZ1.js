import { D as i, e as s, d as r, a as p, aD as a } from "./index-Ek1MTSEY.js";
const o = new i({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
let e = class extends a {
  constructor(t) {
    super(t), this.description = null, this.type = null;
  }
};
s([r({ type: String, json: { write: !0 } })], e.prototype, "description", void 0), s([r({ type: String, json: { read: o.read, write: o.write } })], e.prototype, "type", void 0), e = s([p("geoscene.rest.support.GPMessage")], e);
const y = e;
export {
  y as a
};
