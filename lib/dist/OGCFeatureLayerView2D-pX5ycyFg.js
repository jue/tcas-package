import { a as t, b as e, c as p } from "./index-h53IWweP.js";
import a from "./FeatureLayerView2D-TQHwIIRy.js";
import "vue";
import "./Container-wINu8WJB.js";
import "./definitions-Ikx6Iti_.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-9jggcs3t.js";
import "./LayerView-Ll--tTKd.js";
import "./AttributeStoreView-XrRsw0gL.js";
import "./TiledDisplayObject-k5lpE5yM.js";
import "./color-4NJ3Arr4.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-5YwL0fPU.js";
import "./VertexArrayObject-xRQjh19m.js";
import "./ProgramTemplate-WGFc3YF6.js";
import "./GeometryUtils-qBcr22nw.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-LPvm_IXh.js";
import "./featureConversionUtils-Uyb-YOAh.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-ESIGpRYL.js";
import "./ExpandedCIM-3LZTL41U.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-m9Kp97Du.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-r2uAqrNR.js";
import "./floatRGBA-RF2HKI4x.js";
import "./util-ykcsKwVm.js";
import "./BitmapTileContainer-jEzjGdsB.js";
import "./Bitmap-6par73L5.js";
import "./TileContainer--axx6PsF.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-yCmodbIJ.js";
import "./FeatureContainer-cnT1vi-B.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-4iz1Oao6.js";
import "./RefreshableLayerView-qRSqC3UG.js";
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
