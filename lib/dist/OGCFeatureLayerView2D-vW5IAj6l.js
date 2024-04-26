import { e as r, d as o, a as p } from "./index-Ek1MTSEY.js";
import m from "./FeatureLayerView2D-uPKEZCL1.js";
import "vue";
import "./Container-zrthpNTa.js";
import "./enums-YM9SAu8u.js";
import "./LayerView-d-au0HlH.js";
import "./schemaUtils-U3wpMwz7.js";
import "./Utils-1SmxxQP6.js";
import "./enums-n72NRQQZ.js";
import "./Texture-__nVcVzI.js";
import "./VertexElementDescriptor-L2lGUBx9.js";
import "./visualVariablesUtils-EcwyP76J.js";
import "./MaterialKey-HWb_r4Z5.js";
import "./CIMSymbolHelper-vL0M3Zv4.js";
import "./BidiEngine-NdusBwFe.js";
import "./GeometryUtils-lfXCngnH.js";
import "./ExpandedCIM-tfKWt7nu.js";
import "./quantizationUtils-N9FQ_cmo.js";
import "./MD5-ekk-4Jqp.js";
import "./util-_ClfQE9K.js";
import "./popupUtils-bYu52YBh.js";
import "./floorFilterUtils-HsstcPZ9.js";
import "./RefreshableLayerView-7pUptc3P.js";
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
