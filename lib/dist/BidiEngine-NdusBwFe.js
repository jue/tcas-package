let kt = class {
  constructor(n = 0, u = 0, o = 0, f = 0) {
    this.x = n, this.y = u, this.width = o, this.height = f;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(n) {
    this.x = Math.min(this.x, n.x), this.y = Math.min(this.y, n.y), this.width = Math.max(this.width, n.width), this.height = Math.max(this.height, n.height);
  }
};
const y = [["(", ")"], [")", "("], ["<", ">"], [">", "<"], ["[", "]"], ["]", "["], ["{", "}"], ["}", "{"], ["«", "»"], ["»", "«"], ["‹", "›"], ["›", "‹"], ["⁽", "⁾"], ["⁾", "⁽"], ["₍", "₎"], ["₎", "₍"], ["≤", "≥"], ["≥", "≤"], ["〈", "〉"], ["〉", "〈"], ["﹙", "﹚"], ["﹚", "﹙"], ["﹛", "﹜"], ["﹜", "﹛"], ["﹝", "﹞"], ["﹞", "﹝"], ["﹤", "﹥"], ["﹥", "﹤"]], E = ["آ", "أ", "إ", "ا"], $ = ["ﻵ", "ﻷ", "ﻹ", "ﻻ"], tt = ["ﻶ", "ﻸ", "ﻺ", "ﻼ"], I = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ی", "ئ", "ؤ"], rt = ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ﻱ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯼ", "ﺉ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺉ", "ﺅ"], it = ["ﺎ", "ﺐ", "ﺖ", "ﺚ", "ﺞ", "ﺢ", "ﺦ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺲ", "ﺶ", "ﺺ", "ﺾ", "ﻂ", "ﻆ", "ﻊ", "ﻎ", "ﻒ", "ﻖ", "ﻚ", "ﻞ", "ﻢ", "ﻦ", "ﻪ", "ﻮ", "ﻲ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯽ", "ﺊ", "ﺆ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺊ", "ﺆ"], et = ["ﺎ", "ﺒ", "ﺘ", "ﺜ", "ﺠ", "ﺤ", "ﺨ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺴ", "ﺸ", "ﺼ", "ﻀ", "ﻄ", "ﻈ", "ﻌ", "ﻐ", "ﻔ", "ﻘ", "ﻜ", "ﻠ", "ﻤ", "ﻨ", "ﻬ", "ﻮ", "ﻴ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯿ", "ﺌ", "ﺆ", "ﹱ", "ﹲ", "ﹴ", "ﹷ", "ﹹ", "ﹻ", "ﹽ", "ﹿ", "ﺀ", "ﺌ", "ﺆ"], nt = ["ﺍ", "ﺑ", "ﺗ", "ﺛ", "ﺟ", "ﺣ", "ﺧ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺳ", "ﺷ", "ﺻ", "ﺿ", "ﻃ", "ﻇ", "ﻋ", "ﻏ", "ﻓ", "ﻗ", "ﻛ", "ﻟ", "ﻣ", "ﻧ", "ﻫ", "ﻭ", "ﻳ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯾ", "ﺋ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺋ", "ﺅ"], z = ["ء", "آ", "أ", "ؤ", "إ", "ا", "ة", "د", "ذ", "ر", "ز", "و", "ى"], st = ["ً", "ً", "ٌ", "؟", "ٍ", "؟", "َ", "َ", "ُ", "ُ", "ِ", "ِ", "ّ", "ّ", "ْ", "ْ", "ء", "آ", "آ", "أ", "أ", "ؤ", "ؤ", "إ", "إ", "ئ", "ئ", "ئ", "ئ", "ا", "ا", "ب", "ب", "ب", "ب", "ة", "ة", "ت", "ت", "ت", "ت", "ث", "ث", "ث", "ث", "ج", "ج", "ج", "ج", "ح", "ح", "ح", "ح", "خ", "خ", "خ", "خ", "د", "د", "ذ", "ذ", "ر", "ر", "ز", "ز", "س", "س", "س", "س", "ش", "ش", "ش", "ش", "ص", "ص", "ص", "ص", "ض", "ض", "ض", "ض", "ط", "ط", "ط", "ط", "ظ", "ظ", "ظ", "ظ", "ع", "ع", "ع", "ع", "غ", "غ", "غ", "غ", "ف", "ف", "ف", "ف", "ق", "ق", "ق", "ق", "ك", "ك", "ك", "ك", "ل", "ل", "ل", "ل", "م", "م", "م", "م", "ن", "ن", "ن", "ن", "ه", "ه", "ه", "ه", "و", "و", "ى", "ى", "ي", "ي", "ي", "ي", "ﻵ", "ﻶ", "ﻷ", "ﻸ", "ﻹ", "ﻺ", "ﻻ", "ﻼ", "؟", "؟", "؟"], q = ["ء", "ف"], ut = ["غ", "ي"], at = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], ot = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], i = 0, a = 1, l = 2, m = 3, t = 4, _ = 5, M = 6, r = 7, U = 8, R = 9, p = 10, T = 11, e = 12, ft = 13, ht = 14, ct = 15, lt = 16, Tt = 17, c = 18, At = ["UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS", "UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO", "UBAT_RLO", "UBAT_BN"], b = 100, Lt = [b + 0, i, i, i, i, b + 1, b + 2, b + 3, a, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, b + 4, t, t, t, i, t, i, t, i, t, t, t, i, i, t, t, i, i, i, i, i, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, i, i, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, i, i, t, t, i, i, t, t, i, i, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, i, i, i, b + 5, r, r, b + 6, b + 7], gt = [[c, c, c, c, c, c, c, c, c, M, _, M, U, _, c, c, c, c, c, c, c, c, c, c, c, c, c, c, _, _, _, M, U, t, t, T, T, T, t, t, t, t, t, p, R, p, R, R, l, l, l, l, l, l, l, l, l, l, R, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, c, c, c, c, c, c, _, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, R, t, T, T, T, T, t, t, t, t, i, t, t, c, t, t, T, T, l, l, t, i, t, t, t, l, i, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, i, i, i, i, i, i, i, i], [i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, i, i, i, i, i, i, i, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, i, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, a, e, a, e, e, a, e, e, a, e, t, t, t, t, t, t, t, t, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, t, t, t, t, t, a, a, a, a, a, t, t, t, t, t, t, t, t, t, t, t], [m, m, m, m, t, t, t, t, r, T, T, r, R, r, t, t, e, e, e, e, e, e, e, e, e, e, e, r, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, m, m, m, m, m, m, m, m, m, m, T, m, m, r, r, r, e, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, e, e, e, e, e, e, e, m, t, e, e, e, e, e, e, r, r, e, e, t, e, e, e, e, r, r, l, l, l, l, l, l, l, l, l, l, r, r, r, r, r, r], [r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, r, r, e, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, e, e, e, e, e, e, e, e, e, e, e, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, e, e, e, e, e, e, e, e, e, a, a, t, t, t, t, a, t, t, t, t, t], [U, U, U, U, U, U, U, U, U, U, U, c, c, c, i, a, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, U, _, ft, ht, ct, lt, Tt, R, T, T, T, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, R, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, U, c, c, c, c, c, t, t, t, t, t, c, c, c, c, c, c, l, i, t, t, l, l, l, l, l, l, p, p, t, t, t, i, l, l, l, l, l, l, l, l, l, l, p, p, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t], [i, i, i, i, i, i, i, t, t, t, t, t, t, t, t, t, t, t, t, i, i, i, i, i, t, t, t, t, t, a, e, a, a, a, a, a, a, a, a, a, a, p, a, a, a, a, a, a, a, a, a, a, a, a, a, t, a, a, a, a, a, t, a, t, a, a, t, a, a, t, a, a, a, a, a, a, a, a, a, a, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r], [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, R, t, R, t, t, R, t, t, t, t, t, t, t, t, t, T, t, t, p, p, t, t, t, t, t, T, T, t, t, t, t, t, r, r, r, r, r, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, c], [t, t, t, T, T, T, t, t, t, t, t, p, R, p, R, R, l, l, l, l, l, l, l, l, l, l, R, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, t, t, t, t, t, t, t, t, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, t, t, t, i, i, i, i, i, i, t, t, i, i, i, i, i, i, t, t, i, i, i, i, i, i, t, t, i, i, i, t, t, t, T, T, t, t, t, T, T, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t]];
class Pt {
  constructor() {
    this.inputFormat = "ILYNN", this.outputFormat = "VLNNN", this.sourceToTarget = [], this.targetToSource = [], this.levels = [];
  }
  bidiTransform(n, u, o) {
    if (this.sourceToTarget = [], this.targetToSource = [], !n)
      return "";
    if (xt(this.sourceToTarget, this.targetToSource, n.length), !this.checkParameters(u, o))
      return n;
    u = this.inputFormat, o = this.outputFormat;
    let f = n;
    const h = yt, L = H(u.charAt(1)), A = H(o.charAt(1)), g = (u.charAt(0) === "I" ? "L" : u.charAt(0)) + L, d = (o.charAt(0) === "I" ? "L" : o.charAt(0)) + A, B = u.charAt(2) + o.charAt(2);
    h.defInFormat = g, h.defOutFormat = d, h.defSwap = B;
    const w = V(n, g, d, B, h);
    let N = !1;
    return o.charAt(1) === "R" ? N = !0 : o.charAt(1) !== "C" && o.charAt(1) !== "D" || (N = this.checkContextual(w) === "rtl"), this.sourceToTarget = F, this.targetToSource = Ot(this.sourceToTarget), k = this.targetToSource, f = u.charAt(3) === o.charAt(3) ? w : o.charAt(3) === "S" ? mt(N, w, !0) : Rt(w, N, !0), this.sourceToTarget = F, this.targetToSource = k, this.levels = D, f;
  }
  _inputFormatSetter(n) {
    if (!J.test(n))
      throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.inputFormat = n;
  }
  _outputFormatSetter(n) {
    if (!J.test(n))
      throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.outputFormat = n;
  }
  checkParameters(n, u) {
    return n ? this._inputFormatSetter(n) : n = this.inputFormat, u ? this._outputFormatSetter(u) : u = this.outputFormat, n !== u;
  }
  checkContextual(n) {
    let u = j(n);
    if (u !== "ltr" && u !== "rtl") {
      try {
        u = document.dir.toLowerCase();
      } catch {
      }
      u !== "ltr" && u !== "rtl" && (u = "ltr");
    }
    return u;
  }
  hasBidiChar(n) {
    return jt.test(n);
  }
}
function V(s, n, u, o, f) {
  const h = dt(s, { inFormat: n, outFormat: u, swap: o }, f);
  if (h.inFormat === h.outFormat)
    return s;
  n = h.inFormat, u = h.outFormat, o = h.swap;
  const L = n.substring(0, 1), A = n.substring(1, 4), g = u.substring(0, 1), d = u.substring(1, 4);
  if (f.inFormat = n, f.outFormat = u, f.swap = o, L === "L" && u === "VLTR") {
    if (A === "LTR")
      return f.dir = C, S(s, f);
    if (A === "RTL")
      return f.dir = x, S(s, f);
  }
  if (L === "V" && g === "V")
    return f.dir = A === "RTL" ? x : C, Y(s, f);
  if (L === "L" && u === "VRTL")
    return A === "LTR" ? (f.dir = C, s = S(s, f)) : (f.dir = x, s = S(s, f)), Y(s);
  if (n === "VLTR" && u === "LLTR")
    return f.dir = C, S(s, f);
  if (L === "V" && g === "L" && A !== d)
    return s = Y(s), A === "RTL" ? V(s, "LLTR", "VLTR", o, f) : V(s, "LRTL", "VRTL", o, f);
  if (n === "VRTL" && u === "LRTL")
    return V(s, "LRTL", "VRTL", o, f);
  if (L === "L" && g === "L") {
    const B = f.swap;
    return f.swap = B.substr(0, 1) + "N", A === "RTL" ? (f.dir = x, s = S(s, f), f.swap = "N" + B.substr(1, 2), f.dir = C, s = S(s, f)) : (f.dir = C, s = S(s, f), f.swap = "N" + B.substr(1, 2), s = V(s, "VLTR", "LRTL", f.swap, f)), s;
  }
  return s;
}
function dt(s, n, u) {
  if (n.inFormat === void 0 && (n.inFormat = u.defInFormat), n.outFormat === void 0 && (n.outFormat = u.defOutFormat), n.swap === void 0 && (n.swap = u.defSwap), n.inFormat === n.outFormat)
    return n;
  const o = n.inFormat.substring(0, 1), f = n.outFormat.substring(0, 1);
  let h, L = n.inFormat.substring(1, 4), A = n.outFormat.substring(1, 4);
  return L.charAt(0) === "C" && (h = j(s), L = h === "ltr" || h === "rtl" ? h.toUpperCase() : n.inFormat.charAt(2) === "L" ? "LTR" : "RTL", n.inFormat = o + L), A.charAt(0) === "C" && (h = j(s), h === "rtl" ? A = "RTL" : h === "ltr" ? (h = Ut(s), A = h.toUpperCase()) : A = n.outFormat.charAt(2) === "L" ? "LTR" : "RTL", n.outFormat = f + A), n;
}
function mt(s, n, u) {
  if (n.length === 0)
    return "";
  s === void 0 && (s = !0), u === void 0 && (u = !0);
  const o = (n = String(n)).split("");
  let f = 0, h = 1, L = o.length;
  s || (f = o.length - 1, h = -1, L = 1);
  const A = Bt(o, f, h, L, u);
  let g = "";
  for (let d = 0; d < o.length; d++)
    u && _t(A, A.length, d) > -1 ? (X(k, d, !s, -1), F.splice(d, 1)) : g += o[d];
  return g;
}
function Bt(s, n, u, o, f) {
  let h = 0;
  const L = [];
  let A = 0;
  for (let g = n; g * u < o; g += u)
    if (Q(s[g]) || O(s[g])) {
      if (s[g] === "ل" && St(s, g + u, u, o)) {
        s[g] = Vt(s[g + u], h === 0 ? $ : tt), g += u, Et(s, g, u, o), f && (L[A] = g, A++), h = 0;
        continue;
      }
      const d = s[g];
      h === 1 ? s[g] = Z(s, g + u, u, o) ? Ct(s[g]) : W(s[g], it) : Z(s, g + u, u, o) === !0 ? s[g] = W(s[g], nt) : s[g] = W(s[g], rt), O(d) || (h = 1), vt(d) === !0 && (h = 0);
    } else
      h = 0;
  return L;
}
function j(s) {
  const n = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(s);
  return n ? n[0] <= "z" ? "ltr" : "rtl" : "";
}
function Ut(s) {
  const n = s.split("");
  return n.reverse(), j(n.join(""));
}
function Rt(s, n, u) {
  if (s.length === 0)
    return "";
  u === void 0 && (u = !0), n === void 0 && (n = !0);
  let o = "";
  const f = (s = String(s)).split("");
  for (let h = 0; h < s.length; h++) {
    let L = !1;
    if (f[h] >= "ﹰ" && f[h] < "\uFEFF") {
      const A = s.charCodeAt(h);
      f[h] >= "ﻵ" && f[h] <= "ﻼ" ? (n ? (h > 0 && u && f[h - 1] === " " ? o = o.substring(0, o.length - 1) + "ل" : (o += "ل", L = !0), o += E[(A - 65269) / 2]) : (o += E[(A - 65269) / 2], o += "ل", h + 1 < s.length && u && f[h + 1] === " " ? h++ : L = !0), L && (X(k, h, !0, 1), F.splice(h, 0, F[h]))) : o += st[A - 65136];
    } else
      o += f[h];
  }
  return o;
}
function S(s, n) {
  const u = s.split(""), o = [];
  return K(u, o, n), pt(u, o, n), G(2, u, o, n), G(1, u, o, n), D = o, u.join("");
}
function K(s, n, u) {
  const o = s.length, f = u.dir ? ot : at;
  let h = 0, L = -1;
  const A = [], g = [];
  u.hiLevel = u.dir, u.lastArabic = !1, u.hasUbatAl = !1, u.hasUbatB = !1, u.hasUbatS = !1;
  for (let d = 0; d < o; d++)
    A[d] = bt(s[d]);
  for (let d = 0; d < o; d++) {
    const B = h, w = wt(s, A, g, d, u);
    g[d] = w, h = f[B][w];
    const N = 240 & h;
    h &= 15;
    const P = f[h][Mt];
    if (n[d] = P, N > 0)
      if (N === 16) {
        for (let v = L; v < d; v++)
          n[v] = 1;
        L = -1;
      } else
        L = -1;
    if (f[h][It])
      L === -1 && (L = d);
    else if (L > -1) {
      for (let v = L; v < d; v++)
        n[v] = P;
      L = -1;
    }
    A[d] === _ && (n[d] = 0), u.hiLevel |= P;
  }
  u.hasUbatS && Ft(A, n, o, u);
}
function Ft(s, n, u, o) {
  for (let f = 0; f < u; f++)
    if (s[f] === M) {
      n[f] = o.dir;
      for (let h = f - 1; h >= 0 && s[h] === U; h--)
        n[h] = o.dir;
    }
}
function pt(s, n, u) {
  if (u.hiLevel !== 0 && u.swap.substr(0, 1) !== u.swap.substr(1, 2))
    for (let o = 0; o < s.length; o++)
      n[o] === 1 && (s[o] = Nt(s[o]));
}
function bt(s) {
  const n = s.charCodeAt(0), u = Lt[n >> 8];
  return u < b ? u : gt[u - b][255 & n];
}
function Y(s, n) {
  const u = s.split("");
  if (n) {
    const o = [];
    K(u, o, n), D = o;
  }
  return u.reverse(), F.reverse(), u.join("");
}
function _t(s, n, u) {
  for (let o = 0; o < n; o++)
    if (s[o] === u)
      return o;
  return -1;
}
function Q(s) {
  for (let n = 0; n < q.length; n++)
    if (s >= q[n] && s <= ut[n])
      return !0;
  return !1;
}
function Z(s, n, u, o) {
  for (; n * u < o && O(s[n]); )
    n += u;
  return !!(n * u < o && Q(s[n]));
}
function St(s, n, u, o) {
  for (; n * u < o && O(s[n]); )
    n += u;
  let f = " ";
  if (!(n * u < o))
    return !1;
  f = s[n];
  for (let h = 0; h < E.length; h++)
    if (E[h] === f)
      return !0;
  return !1;
}
function G(s, n, u, o) {
  if (o.hiLevel < s)
    return;
  if (s === 1 && o.dir === x && !o.hasUbatB)
    return n.reverse(), void F.reverse();
  const f = n.length;
  let h, L, A, g, d, B = 0;
  for (; B < f; ) {
    if (u[B] >= s) {
      for (h = B + 1; h < f && u[h] >= s; )
        h++;
      for (L = B, A = h - 1; L < A; L++, A--)
        g = n[L], n[L] = n[A], n[A] = g, d = F[L], F[L] = F[A], F[A] = d;
      B = h;
    }
    B++;
  }
}
function wt(s, n, u, o, f) {
  const h = n[o];
  return { UBAT_L: () => (f.lastArabic = !1, i), UBAT_R: () => (f.lastArabic = !1, a), UBAT_ON: () => t, UBAT_AN: () => m, UBAT_EN: () => f.lastArabic ? m : l, UBAT_AL: () => (f.lastArabic = !0, f.hasUbatAl = !0, a), UBAT_WS: () => t, UBAT_CS: () => {
    let L, A;
    return o < 1 || o + 1 >= n.length || (L = u[o - 1]) !== l && L !== m || (A = n[o + 1]) !== l && A !== m ? t : (f.lastArabic && (A = m), A === L ? A : t);
  }, UBAT_ES: () => (o > 0 ? u[o - 1] : _) === l && o + 1 < n.length && n[o + 1] === l ? l : t, UBAT_ET: () => {
    if (o > 0 && u[o - 1] === l)
      return l;
    if (f.lastArabic)
      return t;
    let L = o + 1;
    const A = n.length;
    for (; L < A && n[L] === T; )
      L++;
    return L < A && n[L] === l ? l : t;
  }, UBAT_NSM: () => {
    if (f.inFormat === "VLTR") {
      const L = n.length;
      let A = o + 1;
      for (; A < L && n[A] === e; )
        A++;
      if (A < L) {
        const g = s[o].charCodeAt[0], d = g >= 1425 && g <= 2303 || g === 64286, B = n[A];
        if (d && (B === a || B === r))
          return a;
      }
    }
    return o < 1 || n[o - 1] === _ ? t : u[o - 1];
  }, UBAT_B: () => (f.lastArabic = !0, f.hasUbatB = !0, f.dir), UBAT_S: () => (f.hasUbatS = !0, t), UBAT_LRE: () => (f.lastArabic = !1, t), UBAT_RLE: () => (f.lastArabic = !1, t), UBAT_LRO: () => (f.lastArabic = !1, t), UBAT_RLO: () => (f.lastArabic = !1, t), UBAT_PDF: () => (f.lastArabic = !1, t), UBAT_BN: () => t }[At[h]]();
}
function Nt(s) {
  let n, u = 0, o = y.length - 1;
  for (; u <= o; )
    if (n = Math.floor((u + o) / 2), s < y[n][0])
      o = n - 1;
    else {
      if (!(s > y[n][0]))
        return y[n][1];
      u = n + 1;
    }
  return s;
}
function vt(s) {
  for (let n = 0; n < z.length; n++)
    if (z[n] === s)
      return !0;
  return !1;
}
function Ct(s) {
  for (let n = 0; n < I.length; n++)
    if (s === I[n])
      return et[n];
  return s;
}
function W(s, n) {
  for (let u = 0; u < I.length; u++)
    if (s === I[u])
      return n[u];
  return s;
}
function O(s) {
  return s >= "ً" && s <= "ٕ";
}
function H(s) {
  return s === "L" ? "LTR" : s === "R" ? "RTL" : s === "C" ? "CLR" : s === "D" ? "CRL" : "";
}
function Et(s, n, u, o) {
  for (; n * u < o && O(s[n]); )
    n += u;
  return n * u < o && (s[n] = " ", !0);
}
function Vt(s, n) {
  for (let u = 0; u < E.length; u++)
    if (s === E[u])
      return n[u];
  return s;
}
function xt(s, n, u) {
  F = [], D = [];
  for (let o = 0; o < u; o++)
    s[o] = o, n[o] = o, F[o] = o;
}
function Ot(s) {
  const n = new Array(s.length);
  for (let u = 0; u < s.length; u++)
    n[s[u]] = u;
  return n;
}
function X(s, n, u, o) {
  for (let f = 0; f < s.length; f++)
    (s[f] > n || !u && s[f] === n) && (s[f] += o);
}
let F = [], k = [], D = [];
const yt = { dir: 0, defInFormat: "LLTR", defoutFormat: "VLTR", defSwap: "YN", inFormat: "LLTR", outFormat: "VLTR", swap: "YN", hiLevel: 0, lastArabic: !1, hasUbatAl: !1, hasBlockSep: !1, hasSegSep: !1, defOutFormat: "" }, Mt = 5, It = 6, C = 0, x = 1, J = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/, jt = /[\u0591-\u06ff\ufb1d-\ufefc]/;
export {
  Pt as C,
  kt as t
};
