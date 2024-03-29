class y {
  constructor(t, s) {
    this.x = t, this.y = s;
  }
  clone() {
    return new y(this.x, this.y);
  }
  equals(t, s) {
    return t === this.x && s === this.y;
  }
  isEqual(t) {
    return t.x === this.x && t.y === this.y;
  }
  setCoords(t, s) {
    this.x = t, this.y = s;
  }
  normalize() {
    const t = this.x, s = this.y, n = Math.sqrt(t * t + s * s);
    this.x /= n, this.y /= n;
  }
  rightPerpendicular() {
    const t = this.x;
    this.x = this.y, this.y = -t;
  }
  move(t, s) {
    this.x += t, this.y += s;
  }
  assign(t) {
    this.x = t.x, this.y = t.y;
  }
  assignAdd(t, s) {
    this.x = t.x + s.x, this.y = t.y + s.y;
  }
  assignSub(t, s) {
    this.x = t.x - s.x, this.y = t.y - s.y;
  }
  rotate(t, s) {
    const n = this.x, h = this.y;
    this.x = n * t - h * s, this.y = n * s + h * t;
  }
  scale(t) {
    this.x *= t, this.y *= t;
  }
  length() {
    const t = this.x, s = this.y;
    return Math.sqrt(t * t + s * s);
  }
  static distance(t, s) {
    const n = s.x - t.x, h = s.y - t.y;
    return Math.sqrt(n * n + h * h);
  }
  static add(t, s) {
    return new y(t.x + s.x, t.y + s.y);
  }
  static sub(t, s) {
    return new y(t.x - s.x, t.y - s.y);
  }
}
var x;
(function(i) {
  i[i.Unknown = 0] = "Unknown", i[i.Point = 1] = "Point", i[i.LineString = 2] = "LineString", i[i.Polygon = 3] = "Polygon";
})(x || (x = {}));
export {
  x as s,
  y as t
};
