const sn = 1e-30, en = 4294967295, cn = 512, dn = 8, fn = 29, pn = 24, gn = 8, Cn = 0, mn = 0, Tn = 0, Sn = 1, Pn = 2, Rn = 3, Bn = 4, hn = 12, Mn = 5, Nn = 6, On = 5, Ln = 6, An = 0, yn = 1, En = 2, Dn = 3, Fn = 4, $n = 2, vn = 1, xn = 2, Wn = 4, Un = 1.05, Hn = 3, bn = 5, kn = 6, In = 1.15, wn = 2, Gn = 8, Jn = 500, Xn = 10, Yn = 2, qn = 0, Zn = 1, Kn = 4, Qn = 8, Vn = 4, jn = 1;
var i, t, r, o, a, l, u, s, e, c, d, f, p, g, C, m, T, S, P, R, B, h, M, N, O, L, A, y, E, D, F, $, v, x, W, U, H, b, k, I, w, G, J, X, Y, q, Z, K, Q, V, j, z, _, nn, tn, rn, on, an, ln, un;
(function(n) {
  n[n.BUTT = 0] = "BUTT", n[n.ROUND = 1] = "ROUND", n[n.SQUARE = 2] = "SQUARE", n[n.UNKNOWN = 4] = "UNKNOWN";
})(i || (i = {})), function(n) {
  n[n.BEVEL = 0] = "BEVEL", n[n.ROUND = 1] = "ROUND", n[n.MITER = 2] = "MITER", n[n.UNKNOWN = 4] = "UNKNOWN";
}(t || (t = {})), function(n) {
  n[n.SCREEN = 0] = "SCREEN", n[n.MAP = 1] = "MAP";
}(r || (r = {})), function(n) {
  n[n.Tint = 0] = "Tint", n[n.Ignore = 1] = "Ignore", n[n.Multiply = 99] = "Multiply";
}(o || (o = {})), function(n) {
  n.Both = "Both", n.JustBegin = "JustBegin", n.JustEnd = "JustEnd", n.None = "None";
}(a || (a = {})), function(n) {
  n[n.Mosaic = 0] = "Mosaic", n[n.Centered = 1] = "Centered";
}(l || (l = {})), function(n) {
  n[n.Normal = 0] = "Normal", n[n.Superscript = 1] = "Superscript", n[n.Subscript = 2] = "Subscript";
}(u || (u = {})), function(n) {
  n[n.MSSymbol = 0] = "MSSymbol", n[n.Unicode = 1] = "Unicode";
}(s || (s = {})), function(n) {
  n[n.Unspecified = 0] = "Unspecified", n[n.TrueType = 1] = "TrueType", n[n.PSOpenType = 2] = "PSOpenType", n[n.TTOpenType = 3] = "TTOpenType", n[n.Type1 = 4] = "Type1";
}(e || (e = {})), function(n) {
  n[n.Display = 0] = "Display", n[n.Map = 1] = "Map";
}(c || (c = {})), function(n) {
  n[n.Z = 0] = "Z", n[n.X = 1] = "X", n[n.Y = 2] = "Y";
}(d || (d = {})), function(n) {
  n[n.XYZ = 0] = "XYZ", n[n.ZXY = 1] = "ZXY", n[n.YXZ = 2] = "YXZ";
}(f || (f = {})), function(n) {
  n[n.Rectangle = 0] = "Rectangle", n[n.RoundedRectangle = 1] = "RoundedRectangle", n[n.Oval = 2] = "Oval";
}(p || (p = {})), function(n) {
  n[n.None = 0] = "None", n[n.Alpha = 1] = "Alpha", n[n.Screen = 2] = "Screen", n[n.Multiply = 3] = "Multiply", n[n.Add = 4] = "Add";
}(g || (g = {})), function(n) {
  n[n.TTB = 0] = "TTB", n[n.RTL = 1] = "RTL", n[n.BTT = 2] = "BTT";
}(C || (C = {})), function(n) {
  n[n.None = 0] = "None", n[n.SignPost = 1] = "SignPost", n[n.FaceNearPlane = 2] = "FaceNearPlane";
}(m || (m = {})), function(n) {
  n[n.Float = 0] = "Float", n[n.String = 1] = "String", n[n.Boolean = 2] = "Boolean";
}(T || (T = {})), function(n) {
  n[n.Intersect = 0] = "Intersect", n[n.Subtract = 1] = "Subtract";
}(S || (S = {})), function(n) {
  n.OpenEnded = "OpenEnded", n.Block = "Block", n.Crossed = "Crossed";
}(P || (P = {})), function(n) {
  n.FullGeometry = "FullGeometry", n.PerpendicularFromFirstSegment = "PerpendicularFromFirstSegment", n.ReversedFirstSegment = "ReversedFirstSegment", n.PerpendicularToSecondSegment = "PerpendicularToSecondSegment", n.SecondSegmentWithTicks = "SecondSegmentWithTicks", n.DoublePerpendicular = "DoublePerpendicular", n.OppositeToFirstSegment = "OppositeToFirstSegment", n.TriplePerpendicular = "TriplePerpendicular", n.HalfCircleFirstSegment = "HalfCircleFirstSegment", n.HalfCircleSecondSegment = "HalfCircleSecondSegment", n.HalfCircleExtended = "HalfCircleExtended", n.OpenCircle = "OpenCircle", n.CoverageEdgesWithTicks = "CoverageEdgesWithTicks", n.GapExtentWithDoubleTicks = "GapExtentWithDoubleTicks", n.GapExtentMidline = "GapExtentMidline", n.Chevron = "Chevron", n.PerpendicularWithArc = "PerpendicularWithArc", n.ClosedHalfCircle = "ClosedHalfCircle", n.TripleParallelExtended = "TripleParallelExtended", n.ParallelWithTicks = "ParallelWithTicks", n.Parallel = "Parallel", n.PerpendicularToFirstSegment = "PerpendicularToFirstSegment", n.ParallelOffset = "ParallelOffset", n.OffsetOpposite = "OffsetOpposite", n.OffsetSame = "OffsetSame", n.CircleWithArc = "CircleWithArc", n.DoubleJog = "DoubleJog", n.PerpendicularOffset = "PerpendicularOffset", n.LineExcludingLastSegment = "LineExcludingLastSegment", n.MultivertexArrow = "MultivertexArrow", n.CrossedArrow = "CrossedArrow", n.ChevronArrow = "ChevronArrow", n.ChevronArrowOffset = "ChevronArrowOffset", n.PartialFirstSegment = "PartialFirstSegment", n.Arch = "Arch", n.CurvedParallelTicks = "CurvedParallelTicks", n.Arc90Degrees = "Arc90Degrees";
}(R || (R = {})), function(n) {
  n.Mitered = "Mitered", n.Bevelled = "Bevelled", n.Rounded = "Rounded", n.Square = "Square", n.TrueBuffer = "TrueBuffer";
}(B || (B = {})), function(n) {
  n.ClosePath = "ClosePath", n.ConvexHull = "ConvexHull", n.RectangularBox = "RectangularBox";
}(h || (h = {})), function(n) {
  n.BeginningOfLine = "BeginningOfLine", n.EndOfLine = "EndOfLine";
}(M || (M = {})), function(n) {
  n.Mitered = "Mitered", n.Bevelled = "Bevelled", n.Rounded = "Rounded", n.Square = "Square";
}(N || (N = {})), function(n) {
  n.Fast = "Fast", n.Accurate = "Accurate";
}(O || (O = {})), function(n) {
  n.BeginningOfLine = "BeginningOfLine", n.EndOfLine = "EndOfLine";
}(L || (L = {})), function(n) {
  n.Sinus = "Sinus", n.Square = "Square", n.Triangle = "Triangle", n.Random = "Random";
}(A || (A = {})), function(n) {
  n[n.None = 0] = "None", n[n.Default = 1] = "Default", n[n.Force = 2] = "Force";
}(y || (y = {})), function(n) {
  n[n.Buffered = 0] = "Buffered", n[n.Left = 1] = "Left", n[n.Right = 2] = "Right", n[n.AlongLine = 3] = "AlongLine";
}(E || (E = {})), function(n) {
  n[n.Linear = 0] = "Linear", n[n.Rectangular = 1] = "Rectangular", n[n.Circular = 2] = "Circular", n[n.Buffered = 3] = "Buffered";
}(D || (D = {})), function(n) {
  n[n.Discrete = 0] = "Discrete", n[n.Continuous = 1] = "Continuous";
}(F || (F = {})), function(n) {
  n[n.AcrossLine = 0] = "AcrossLine", n[n.AloneLine = 1] = "AloneLine";
}($ || ($ = {})), function(n) {
  n[n.Left = 0] = "Left", n[n.Right = 1] = "Right", n[n.Center = 2] = "Center", n[n.Justify = 3] = "Justify";
}(v || (v = {})), function(n) {
  n[n.Base = 0] = "Base", n[n.MidPoint = 1] = "MidPoint", n[n.ThreePoint = 2] = "ThreePoint", n[n.FourPoint = 3] = "FourPoint", n[n.Underline = 4] = "Underline", n[n.CircularCW = 5] = "CircularCW", n[n.CircularCCW = 6] = "CircularCCW";
}(x || (x = {})), function(n) {
  n.Butt = "Butt", n.Round = "Round", n.Square = "Square";
}(W || (W = {})), function(n) {
  n.NoConstraint = "NoConstraint", n.HalfPattern = "HalfPattern", n.HalfGap = "HalfGap", n.FullPattern = "FullPattern", n.FullGap = "FullGap", n.Custom = "Custom";
}(U || (U = {})), function(n) {
  n[n.None = -1] = "None", n[n.Custom = 0] = "Custom", n[n.Circle = 1] = "Circle", n[n.OpenArrow = 2] = "OpenArrow", n[n.ClosedArrow = 3] = "ClosedArrow", n[n.Diamond = 4] = "Diamond";
}(H || (H = {})), function(n) {
  n[n.ExtraLeading = 0] = "ExtraLeading", n[n.Multiple = 1] = "Multiple", n[n.Exact = 2] = "Exact";
}(b || (b = {})), function(n) {
  n.Bevel = "Bevel", n.Round = "Round", n.Miter = "Miter";
}(k || (k = {})), function(n) {
  n[n.Default = 0] = "Default", n[n.String = 1] = "String", n[n.Numeric = 2] = "Numeric";
}(I || (I = {})), function(n) {
  n[n.InsidePolygon = 0] = "InsidePolygon", n[n.PolygonCenter = 1] = "PolygonCenter", n[n.RandomlyInsidePolygon = 2] = "RandomlyInsidePolygon";
}(w || (w = {})), function(n) {
  n[n.Tint = 0] = "Tint", n[n.Replace = 1] = "Replace", n[n.Multiply = 2] = "Multiply";
}(G || (G = {})), function(n) {
  n[n.ClipAtBoundary = 0] = "ClipAtBoundary", n[n.RemoveIfCenterOutsideBoundary = 1] = "RemoveIfCenterOutsideBoundary", n[n.DoNotTouchBoundary = 2] = "DoNotTouchBoundary", n[n.DoNotClip = 3] = "DoNotClip";
}(J || (J = {})), function(n) {
  n.NoConstraint = "NoConstraint", n.WithMarkers = "WithMarkers", n.WithFullGap = "WithFullGap", n.WithHalfGap = "WithHalfGap", n.Custom = "Custom";
}(X || (X = {})), function(n) {
  n.Fixed = "Fixed", n.Random = "Random", n.RandomFixedQuantity = "RandomFixedQuantity";
}(Y || (Y = {})), function(n) {
  n.LineMiddle = "LineMiddle", n.LineBeginning = "LineBeginning", n.LineEnd = "LineEnd", n.SegmentMidpoint = "SegmentMidpoint";
}(q || (q = {})), function(n) {
  n.OnPolygon = "OnPolygon", n.CenterOfMass = "CenterOfMass", n.BoundingBoxCenter = "BoundingBoxCenter";
}(Z || (Z = {})), function(n) {
  n[n.Low = 0] = "Low", n[n.Medium = 1] = "Medium", n[n.High = 2] = "High";
}(K || (K = {})), function(n) {
  n[n.MarkerCenter = 0] = "MarkerCenter", n[n.MarkerBounds = 1] = "MarkerBounds";
}(Q || (Q = {})), function(n) {
  n[n.None = 0] = "None", n[n.PropUniform = 1] = "PropUniform", n[n.PropNonuniform = 2] = "PropNonuniform", n[n.DifUniform = 3] = "DifUniform", n[n.DifNonuniform = 4] = "DifNonuniform";
}(V || (V = {})), function(n) {
  n.Tube = "Tube", n.Strip = "Strip", n.Wall = "Wall";
}(j || (j = {})), function(n) {
  n[n.Random = 0] = "Random", n[n.Increasing = 1] = "Increasing", n[n.Decreasing = 2] = "Decreasing", n[n.IncreasingThenDecreasing = 3] = "IncreasingThenDecreasing";
}(z || (z = {})), function(n) {
  n[n.Relative = 0] = "Relative", n[n.Absolute = 1] = "Absolute";
}(_ || (_ = {})), function(n) {
  n[n.Normal = 0] = "Normal", n[n.LowerCase = 1] = "LowerCase", n[n.Allcaps = 2] = "Allcaps";
}(nn || (nn = {})), function(n) {
  n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL";
}(tn || (tn = {})), function(n) {
  n.Draft = "Draft", n.Picture = "Picture", n.Text = "Text";
}(rn || (rn = {})), function(n) {
  n[n.Top = 0] = "Top", n[n.Center = 1] = "Center", n[n.Baseline = 2] = "Baseline", n[n.Bottom = 3] = "Bottom";
}(on || (on = {})), function(n) {
  n[n.Right = 0] = "Right", n[n.Upright = 1] = "Upright";
}(an || (an = {})), function(n) {
  n[n.Small = 0] = "Small", n[n.Medium = 1] = "Medium", n[n.Large = 2] = "Large";
}(ln || (ln = {})), function(n) {
  n[n.Calm = 0] = "Calm", n[n.Rippled = 1] = "Rippled", n[n.Slight = 2] = "Slight", n[n.Moderate = 3] = "Moderate";
}(un || (un = {}));
export {
  wn as $,
  Sn as A,
  Pn as B,
  Rn as C,
  Bn as D,
  hn as E,
  Y as F,
  q as G,
  On as H,
  Ln as I,
  An as J,
  yn as K,
  En as L,
  Dn as M,
  N,
  Fn as O,
  $n as P,
  vn as Q,
  xn as R,
  P as S,
  W as T,
  Un as U,
  k as V,
  bn as W,
  kn as X,
  In as Y,
  Z,
  Gn as _,
  Zn as a,
  C as a0,
  u as a1,
  s as a2,
  e as a3,
  y as a4,
  tn as a5,
  an as a6,
  m as a7,
  rn as a8,
  mn as a9,
  Cn as aa,
  Nn as ab,
  Mn as ac,
  Hn as ad,
  Wn as ae,
  pn as b,
  sn as c,
  qn as d,
  i as e,
  Yn as f,
  Kn as g,
  Xn as h,
  r as i,
  gn as j,
  Qn as k,
  a as l,
  en as m,
  t as n,
  cn as o,
  jn as p,
  Vn as q,
  dn as r,
  fn as s,
  Jn as t,
  R as u,
  U as v,
  B as w,
  A as x,
  X as y,
  Tn as z
};
