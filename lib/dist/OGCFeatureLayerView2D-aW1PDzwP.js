import { a as t, b as e, c as p } from "./index-HxXrdrYt.js";
import a from "./FeatureLayerView2D-oSWjsEcR.js";
import "vue";
import "./Container-y548tJqA.js";
import "./definitions-5wPyT42Z.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-X07ZHrz1.js";
import "./LayerView-xItHBa3T.js";
import "./AttributeStoreView-znq5iYkn.js";
import "./TiledDisplayObject-LbgA65yW.js";
import "./color-kwBCExHr.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-ZsplblwK.js";
import "./VertexArrayObject-2WiKUGbv.js";
import "./ProgramTemplate-AJhvSjOE.js";
import "./GeometryUtils-ks2bByfT.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-fJT_ZMGO.js";
import "./featureConversionUtils-F620bamw.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-DYpRy0_r.js";
import "./ExpandedCIM-zhKUhBHU.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-40PVs7PG.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-W83AezcF.js";
import "./floatRGBA-QTyluuyG.js";
import "./util-_Vbm8maX.js";
import "./BitmapTileContainer-gQnm5fn6.js";
import "./Bitmap-EiCLkSAd.js";
import "./TileContainer-KY-TE4tX.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-IiDyiuVY.js";
import "./FeatureContainer-iNSNk881.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-r80YF5Ip.js";
import "./RefreshableLayerView-8Iw3yFgN.js";
const s = (i) => {
  let r = class extends i {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((m) => m.name);
    }
  };
  return t([e()], r.prototype, "layer", void 0), t([e({ readOnly: !0 })], r.prototype, "availableFields", null), r = t([p("geoscene.views.layers.OGCFeatureLayerView")], r), r;
};
let o = class extends s(a) {
  supportsSpatialReference(i) {
    return this.layer.serviceSupportsSpatialReference(i);
  }
};
o = t([p("geoscene.views.2d.layers.OGCFeatureLayerView2D")], o);
const X = o;
export {
  X as default
};
