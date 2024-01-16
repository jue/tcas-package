import { dt as h, du as d, ae as p } from "./index-h53IWweP.js";
import { t as f } from "./query-ePqQPCKo.js";
import { l } from "./AttachmentInfo-b82YC0Dj.js";
import "vue";
import "./normalizeUtils-zXVQRAEh.js";
import "./normalizeUtilsCommon-Iyh1ge5t.js";
import "./utils-QyFvT44r.js";
import "./pbfQueryUtils-72HutQeH.js";
import "./pbf-LwH3gq-e.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
function y(n) {
  const t = n.toJSON();
  return t.attachmentTypes && (t.attachmentTypes = t.attachmentTypes.join(",")), t.keywords && (t.keywords = t.keywords.join(",")), t.globalIds && (t.globalIds = t.globalIds.join(",")), t.objectIds && (t.objectIds = t.objectIds.join(",")), t.size && (t.size = t.size.join(",")), t;
}
function G(n, t) {
  const o = {};
  for (const a of t) {
    const { parentObjectId: e, parentGlobalId: s, attachmentInfos: c } = a;
    for (const r of c) {
      const { id: i } = r, u = h(d(`${n.path}/${e}/attachments/${i}`)), m = l.fromJSON(r);
      m.set({ url: u, parentObjectId: e, parentGlobalId: s }), o[e] ? o[e].push(m) : o[e] = [m];
    }
  }
  return o;
}
function S(n, t, o) {
  let a = { query: f({ ...n.query, f: "json", ...y(t) }) };
  return o && (a = { ...o, ...a, query: { ...o.query, ...a.query } }), p(n.path + "/queryAttachments", a).then((e) => e.data.attachmentGroups);
}
async function T(n, t, o) {
  const { objectIds: a } = t, e = [];
  for (const s of a)
    e.push(p(n.path + "/" + s + "/attachments", o));
  return Promise.all(e).then((s) => a.map((c, r) => ({ parentObjectId: c, attachmentInfos: s[r].data.attachmentInfos })));
}
export {
  S as executeAttachmentQuery,
  T as fetchAttachments,
  G as processAttachmentQueryResult
};
