import { L as r, W as e } from "./index-O2RTvw_o.js";
function l(t) {
  return { origin: "portal-item", url: r(t.itemUrl), portal: t.portal || e.getDefault(), portalItem: t, readResourcePaths: [] };
}
function a(t) {
  return { origin: "portal-item", messages: [], writtenProperties: [], url: t.itemUrl ? r(t.itemUrl) : null, portal: t.portal || e.getDefault(), portalItem: t };
}
export {
  l as e,
  a as o
};