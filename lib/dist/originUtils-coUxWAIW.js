function e(i) {
  return i && "getAtOrigin" in i && "originOf" in i;
}
function r(i) {
  i && i.writtenProperties && i.writtenProperties.forEach((n) => {
    const t = n.target;
    n.newOrigin && n.oldOrigin !== n.newOrigin && e(t) && t.updateOrigin(n.propName, n.newOrigin);
  });
}
export {
  e as i,
  r
};
