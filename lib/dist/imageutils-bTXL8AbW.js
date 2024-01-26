import { H as i, af as g, ag as c } from "./index-HxXrdrYt.js";
function m(n) {
  const t = r(n);
  return t != null ? t.toDataURL() : "";
}
async function u(n) {
  const t = r(n);
  if (t == null)
    throw new i("imageToArrayBuffer", "Unsupported image type");
  const e = await s(n), a = await new Promise((o) => t.toBlob(o, e));
  if (!a)
    throw new i("imageToArrayBuffer", "Failed to encode image");
  return { data: await a.arrayBuffer(), type: e };
}
async function s(n) {
  if (!(n instanceof HTMLImageElement))
    return "image/png";
  const t = n.src;
  if (g(t)) {
    const e = c(t);
    return (e == null ? void 0 : e.mediaType) === "image/jpeg" ? e.mediaType : "image/png";
  }
  return /\.png$/i.test(t) ? "image/png" : /\.(jpg|jpeg)$/i.test(t) ? "image/jpeg" : "image/png";
}
function r(n) {
  if (n instanceof HTMLCanvasElement)
    return n;
  if (n instanceof HTMLVideoElement)
    return null;
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  return n instanceof HTMLImageElement ? e.drawImage(n, 0, 0, n.width, n.height) : n instanceof ImageData && e.putImageData(n, 0, 0), t;
}
function p(n) {
  const t = [], e = new Uint8Array(n);
  for (let a = 0; a < e.length; a++)
    t.push(String.fromCharCode(e[a]));
  return "data:application/octet-stream;base64," + btoa(t.join(""));
}
function l(n) {
  if (n.byteLength < 8)
    return !1;
  const t = new Uint8Array(n);
  return t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71 && t[4] === 13 && t[5] === 10 && t[6] === 26 && t[7] === 10;
}
export {
  m as a,
  p as c,
  l as g,
  r as o,
  u as r
};