import { e as r, d as o, a as p } from "./index-j1oaLRcp.js";
import m from "./FeatureLayerView2D-38umVoIr.js";
import "vue";
import "./Container-0QnIUm3K.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-u7tKPPGO.js";
import "./schemaUtils-NQXxAz6-.js";
import "./Utils-Mkp4Julu.js";
import "./enums-n72NRQQZ.js";
import "./Texture-PL6UBkoQ.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-2imPlhyq.js";
import "./MaterialKey-tb9URCR8.js";
import "./CIMSymbolHelper-KLEKDisI.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-M5Tsr5j1.js";
import "./quantizationUtils-p-hCoL_j.js";
import "./MD5-ekk-4Jqp.js";
import "./util-S-jvKCCd.js";
import "./popupUtils-GfxNYuRl.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-nMKrSELX.js";
const s = (t) => {
  let e = class extends t {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((a) => a.name);
    }
  };
  return r([o()], e.prototype, "layer", void 0), r([o({ readOnly: !0 })], e.prototype, "availableFields", null), e = r([p("geoscene.views.layers.OGCFeatureLayerView")], e), e;
};
let i = class extends s(m) {
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
};
i = r([p("geoscene.views.2d.layers.OGCFeatureLayerView2D")], i);
const I = i;
export {
  I as default
};
