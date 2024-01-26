import { a as t, b as e, c as p } from "./index-B7TsCcH6.js";
import a from "./FeatureLayerView2D-pAZqBQLm.js";
import "vue";
import "./Container-ul_EuzrF.js";
import "./definitions-Co8CrS3w.js";
import "./enums-Vyj7xNgv.js";
import "./Texture-v5WxIbZy.js";
import "./LayerView-C6bBL_rq.js";
import "./AttributeStoreView-gMBKUgth.js";
import "./TiledDisplayObject-952ryiS7.js";
import "./color-Xkczoxbf.js";
import "./enums-QU6RH5ju.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./WGLContainer-vjbZun5V.js";
import "./VertexArrayObject-_p3La6MY.js";
import "./ProgramTemplate-aPyLVtfI.js";
import "./GeometryUtils-wM6A7upA.js";
import "./StyleDefinition-DRnpTfyN.js";
import "./config-TPD5ZwJG.js";
import "./earcut-azOcA8wo.js";
import "./featureConversionUtils-oKi2Ei-6.js";
import "./OptimizedGeometry-VApaomRE.js";
import "./OptimizedFeatureSet-YnFpVY2S.js";
import "./visualVariablesUtils-w0od9lEd.js";
import "./ExpandedCIM-sWOoIMVV.js";
import "./BidiEngine-hERHJu7U.js";
import "./GeometryUtils-UnkSlEkY.js";
import "./utils-99Msuqlm.js";
import "./Rect-FEaRGIbu.js";
import "./quantizationUtils-nKmgNZQ1.js";
import "./floatRGBA-Wp7e9WKm.js";
import "./util-Q6nUdqQ4.js";
import "./BitmapTileContainer-bjclGYVO.js";
import "./Bitmap-qcipg2DH.js";
import "./TileContainer-v6Rn1fM6.js";
import "./CircularArray-y-fwYqtW.js";
import "./BufferPool-Hf2QRSda.js";
import "./FeatureContainer-1uun9v5E.js";
import "./floorFilterUtils-EbR9s7nP.js";
import "./popupUtils-siDvgqb0.js";
import "./RefreshableLayerView-zx_azbUs.js";
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
