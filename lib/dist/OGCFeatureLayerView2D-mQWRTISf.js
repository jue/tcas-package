import { a as t, b as e, c as p } from "./index-O2RTvw_o.js";
import a from "./FeatureLayerView2D-dw5mIx3P.js";
import "vue";
import "./Container-YlBWRIXD.js";
import "./definitions-jqTA3541.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-RB7_nCpt.js";
import "./LayerView-AYRNbjM7.js";
import "./AttributeStoreView-rrA6haIN.js";
import "./TiledDisplayObject-kZsjPOba.js";
import "./color-etN3NLwm.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-Onm3yFPW.js";
import "./VertexArrayObject-6efe00MS.js";
import "./ProgramTemplate-k9yfNq4J.js";
import "./GeometryUtils-Ianw6pPH.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-UWG02iJs.js";
import "./featureConversionUtils-9-9v0Fhl.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-4QetR9x6.js";
import "./ExpandedCIM-lf1Qg7MQ.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-SOJirR9_.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-21mW2wiL.js";
import "./floatRGBA-ePb46nBT.js";
import "./util-KO5PrNj-.js";
import "./BitmapTileContainer-C2EKDlVt.js";
import "./Bitmap-lpchWwAe.js";
import "./TileContainer-90vnlfVn.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-4rb57HRE.js";
import "./FeatureContainer-jr0eHfMX.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-mdF6m28P.js";
import "./RefreshableLayerView-JIvmUqov.js";
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
