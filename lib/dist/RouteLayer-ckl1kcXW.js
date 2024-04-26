import { e as t, d as i, iB as N, a as V, aD as k, bM as je, bO as H, bP as yt, ad as le, B as J, r as o, bj as ee, w as x, aE as y, ab as ne, l as g, bD as U, S as ye, ac as it, bs as pe, m as Q, fa as ht, j as L, s as ft, bt as vt, bu as Tt, bv as gt, bw as St, bz as wt, aw as Nt, f as Ot, a3 as Ct, ae as It, M as Dt, aQ as Ft, aq as Ze, iA as At, y as z, R as Bt, c1 as jt, aa as Et, iC as xt, eh as Jt, b as Pt, dl as Lt, Y as Mt, gp as _t, bE as Wt } from "./index-Ek1MTSEY.js";
import { r as Ut } from "./originUtils-coUxWAIW.js";
import { y as Ie, p as De, h as M, m as C, A as be, b as Fe, N as Y, l as rt, t as ot, s as Vt, r as $t, n as Rt, c as kt, e as ce, f as qt, g as Gt } from "./NAMessage-KvfqzuuR.js";
import { p as zt } from "./route-RdwKSc07.js";
import "vue";
import "./GPMessage-sfsWusZ1.js";
import "./DirectionsFeatureSet-5SN0UaXF.js";
let B = class extends k {
  constructor() {
    super(...arguments), this.directionLines = new je({ color: [0, 122, 194], width: 6 }), this.directionPoints = new H({ color: [255, 255, 255], size: 6, outline: { color: [0, 122, 194], width: 2 } }), this.pointBarriers = new H({ style: "x", size: 10, outline: { color: [255, 0, 0], width: 3 } }), this.polygonBarriers = new yt({ color: [255, 170, 0, 0.6], outline: { width: 7.5, color: [255, 0, 0, 0.6] } }), this.polylineBarriers = new je({ width: 7.5, color: [255, 85, 0, 0.7] }), this.routeInfo = new je({ width: 8, color: [20, 89, 127] }), this.firstStop = new H({ color: [0, 255, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.middleStop = new H({ color: [51, 51, 51], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.lastStop = new H({ color: [255, 0, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.invalidStop = new H({ color: [255, 0, 0], size: 12, outline: { color: [255, 255, 255], width: 3 } }), this.waypointStop = new H({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.breakStop = new H({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } });
  }
};
t([i({ nonNullable: !0, types: N })], B.prototype, "directionLines", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "directionPoints", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "pointBarriers", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "polygonBarriers", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "polylineBarriers", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "routeInfo", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "firstStop", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "middleStop", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "lastStop", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "invalidStop", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "waypointStop", void 0), t([i({ nonNullable: !0, types: N })], B.prototype, "breakStop", void 0), B = t([V("geoscene.layers.support.DefaultSymbols")], B);
const st = B;
var Je;
let j = Je = class extends k {
  constructor(e) {
    super(e), this.directionLineType = null, this.directionPointId = null, this.distance = null, this.duration = null, this.fromLevel = null, this.geometry = null, this.objectId = null, this.popupTemplate = null, this.symbol = null, this.toLevel = null;
  }
  static fromPortalJSON(e) {
    var r, s;
    return new Je({ directionLineType: Ie.fromJSON(e.attributes.DirectionLineType), directionPointId: e.attributes.DirectionPointID, distance: e.attributes.Meters, duration: e.attributes.Minutes, fromLevel: (r = e.attributes.FromLevel) != null ? r : null, geometry: le.fromJSON(e.geometry), objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, symbol: o(e.symbol) ? ee(e.symbol) : null, toLevel: (s = e.attributes.ToLevel) != null ? s : null });
  }
  toPortalJSON() {
    const e = { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), DirectionLineType: o(this.directionLineType) ? Ie.toJSON(this.directionLineType) : null, DirectionPointID: x(this.directionPointId), Meters: x(this.distance), Minutes: x(this.duration) }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
    return o(this.fromLevel) && (e.attributes.FromLevel = this.fromLevel), o(this.toLevel) && (e.attributes.ToLevel = this.toLevel), e;
  }
};
j.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "DirectionLineType", alias: "Line Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriDirectionsLineType", codedValues: [{ name: "Unknown", code: 0 }, { name: "Segment", code: 1 }, { name: "Maneuver Segment", code: 2 }, { name: "Restriction violation", code: 3 }, { name: "Scale cost barrier crossing", code: 4 }, { name: "Heavy Traffic", code: 5 }, { name: "Slow Traffic", code: 6 }, { name: "Moderate Traffic", code: 7 }] } }, { name: "DirectionPointID", alias: "Direction Point ID", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !1 }, { name: "FromLevel", alias: "Start from 3D Level", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !1 }, { name: "Meters", alias: "Length in Meters", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "Minutes", alias: "Duration in Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "ToLevel", alias: "End at 3D Level", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !1 }], j.popupInfo = { title: "Direction Lines", fieldInfos: [{ fieldName: "DirectionLineType", label: "Line Type", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "Meters", label: "Length in Meters", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Minutes", label: "Duration in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "DirectionPointID", label: "Direction Point ID", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "FromLevel", label: "Start from 3D Level", isEditable: !1, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ToLevel", label: "End at 3D Level", isEditable: !1, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ type: Ie.apiValues, json: { read: { source: "attributes.DirectionLineType", reader: Ie.read } } })], j.prototype, "directionLineType", void 0), t([i({ json: { read: { source: "attributes.DirectionPointID" } } })], j.prototype, "directionPointId", void 0), t([i({ json: { read: { source: "attributes.Meters" } } })], j.prototype, "distance", void 0), t([i({ json: { read: { source: "attributes.Minutes" } } })], j.prototype, "duration", void 0), t([i({ json: { read: { source: "attributes.FromLevel" } } })], j.prototype, "fromLevel", void 0), t([i({ type: le })], j.prototype, "geometry", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], j.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], j.prototype, "popupTemplate", void 0), t([i({ types: N, json: { read: !1 } })], j.prototype, "symbol", void 0), t([i({ json: { read: { source: "attributes.ToLevel" } } })], j.prototype, "toLevel", void 0), j = Je = t([V("geoscene.rest.support.DirectionLine")], j);
const de = j;
var Pe;
let h = Pe = class extends k {
  constructor(e) {
    super(e), this.alternateName = null, this.arrivalTime = null, this.arrivalTimeOffset = null, this.azimuth = null, this.branchName = null, this.directionPointType = null, this.displayText = null, this.exitName = null, this.geometry = null, this.intersectingName = null, this.level = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sequence = null, this.shortVoiceInstruction = null, this.stopId = null, this.symbol = null, this.towardName = null, this.voiceInstruction = null;
  }
  readArrivalTime(e, r) {
    return o(r.attributes.ArrivalTime) ? new Date(r.attributes.ArrivalTime) : null;
  }
  static fromPortalJSON(e) {
    var r, s, n, a, b, c, w, v, D, I, F, O, T;
    return new Pe({ alternateName: (r = e.attributes.AlternateName) != null ? r : null, arrivalTime: o(e.attributes.ArrivalTime) ? new Date(e.attributes.ArrivalTime) : null, arrivalTimeOffset: (s = e.attributes.ArrivalUTCOffset) != null ? s : null, azimuth: (n = e.attributes.Azimuth) != null ? n : null, branchName: (a = e.attributes.BranchName) != null ? a : null, directionPointType: De.fromJSON(e.attributes.DirectionPointType), displayText: (b = e.attributes.DisplayText) != null ? b : null, exitName: (c = e.attributes.ExitName) != null ? c : null, geometry: ne.fromJSON(e.geometry), intersectingName: (w = e.attributes.IntersectingName) != null ? w : null, level: (v = e.attributes.Level) != null ? v : null, name: (D = e.attributes.Name) != null ? D : null, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, sequence: e.attributes.Sequence, shortVoiceInstruction: (I = e.attributes.ShortVoiceInstruction) != null ? I : null, stopId: (F = e.attributes.StopID) != null ? F : null, symbol: o(e.symbol) ? ee(e.symbol) : null, towardName: (O = e.attributes.TowardName) != null ? O : null, voiceInstruction: (T = e.attributes.VoiceInstruction) != null ? T : null });
  }
  toPortalJSON() {
    const e = { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), DirectionPointType: o(this.directionPointType) ? De.toJSON(this.directionPointType) : null, Sequence: x(this.sequence), StopID: this.stopId }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
    return o(this.alternateName) && (e.attributes.AlternateName = this.alternateName), o(this.arrivalTime) && (e.attributes.ArrivalTime = this.arrivalTime.getTime()), o(this.arrivalTimeOffset) && (e.attributes.ArrivalUTCOffset = this.arrivalTimeOffset), o(this.azimuth) && (e.attributes.Azimuth = this.azimuth), o(this.branchName) && (e.attributes.BranchName = this.branchName), o(this.displayText) && (e.attributes.DisplayText = this.displayText), o(this.exitName) && (e.attributes.ExitName = this.exitName), o(this.intersectingName) && (e.attributes.IntersectingName = this.intersectingName), o(this.level) && (e.attributes.Level = this.level), o(this.name) && (e.attributes.Name = this.name), o(this.shortVoiceInstruction) && (e.attributes.ShortVoiceInstruction = this.shortVoiceInstruction), o(this.towardName) && (e.attributes.TowardName = this.towardName), o(this.voiceInstruction) && (e.attributes.VoiceInstruction = this.voiceInstruction), e;
  }
};
h.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "AlternateName", alias: "Alternative Feature Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "ArrivalTime", alias: "Maneuver Starts at", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !0 }, { name: "ArrivalUTCOffset", alias: "Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "Azimuth", alias: "Azimuth", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "BranchName", alias: "Signpost Branch Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "DirectionPointType", alias: "Directions Item Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriDirectionPointType", codedValues: [{ name: "Unknown", code: 0 }, { name: "", code: 1 }, { name: "Arrive at stop", code: 50 }, { name: "Depart at stop", code: 51 }, { name: "Go straight", code: 52 }, { name: "Take ferry", code: 100 }, { name: "Take off ferry", code: 101 }, { name: "Keep center at fork", code: 102 }, { name: "Take roundabout", code: 103 }, { name: "Make U-Turn", code: 104 }, { name: "Pass the door", code: 150 }, { name: "Take stairs", code: 151 }, { name: "", code: 152 }, { name: "Take escalator", code: 153 }, { name: "Take pedestrian ramp", code: 154 }, { name: "Keep left at fork", code: 200 }, { name: "Ramp left", code: 201 }, { name: "Take left-handed roundabout", code: 202 }, { name: "Make left-handed U-Turn", code: 203 }, { name: "Bear left", code: 204 }, { name: "Turn left", code: 205 }, { name: "Make sharp left", code: 206 }, { name: "Turn left, followed by turn left", code: 207 }, { name: "Turn left, followed by turn right", code: 208 }, { name: "Keep right at fork", code: 300 }, { name: "Ramp right", code: 301 }, { name: "Take right-handed roundabout", code: 302 }, { name: "Make right-handed U-Turn", code: 303 }, { name: "Bear right", code: 304 }, { name: "Turn right", code: 305 }, { name: "Make sharp right", code: 306 }, { name: "Turn right, followed by turn left", code: 307 }, { name: "Turn right, followed by turn right", code: 308 }, { name: "Indicates up direction of elevator", code: 400 }, { name: "Indicates up direction of escalator", code: 401 }, { name: "Take up-stairs", code: 402 }, { name: "Indicates down direction of elevator", code: 500 }, { name: "Indicates down direction of escalator", code: 501 }, { name: "Take down-stairs", code: 502 }, { name: "General event", code: 1e3 }, { name: "Landmark", code: 1001 }, { name: "Time zone change", code: 1002 }, { name: "Heavy traffic segment", code: 1003 }, { name: "Scale cost barrier crossing", code: 1004 }, { name: "Administrative Border crossing", code: 1005 }, { name: "Restriction violation", code: 1006 }] } }, { name: "DisplayText", alias: "Text to Display", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "ExitName", alias: "Highway Exit Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "IntersectingName", alias: "Intersecting Feature Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "Level", alias: "3D Logical Level", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "Name", alias: "Primary Feature Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "ShortVoiceInstruction", alias: "Voice Instruction", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "StopID", alias: "Stop ID", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "TowardName", alias: "Signpost Toward Name", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "VoiceInstruction", alias: "Voice Full Instruction", type: "esriFieldTypeString", length: 2048, editable: !0, nullable: !0, visible: !0, domain: null }], h.popupInfo = { title: "{DisplayText}", fieldInfos: [{ fieldName: "DirectionPointType", label: "Directions Item Type", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "DisplayText", label: "Text to Display", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "Sequence", label: "Sequence", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "StopID", label: "Stop ID", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ArrivalTime", label: "Maneuver Starts at", isEditable: !0, tooltip: "", visible: !0, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "ArrivalUTCOffset", label: "Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Azimuth", label: "Azimuth", isEditable: !1, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Name", label: "Primary Feature Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "AlternateName", label: "Alternative Feature Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "ExitName", label: "Highway Exit Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "IntersectingName", label: "Intersecting Feature Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "BranchName", label: "Signpost Branch Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "TowardName", label: "Signpost Toward Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "ShortVoiceInstruction", label: "Voice Instruction", isEditable: !1, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "VoiceInstruction", label: "Voice Full Instruction", isEditable: !1, tooltip: "", visible: !1, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ json: { read: !1 } })], h.prototype, "alternateName", void 0), t([i()], h.prototype, "arrivalTime", void 0), t([y("arrivalTime", ["attributes.ArrivalTime"])], h.prototype, "readArrivalTime", null), t([i({ json: { read: { source: "attributes.ArrivalUTCOffset" } } })], h.prototype, "arrivalTimeOffset", void 0), t([i({ json: { read: { source: "attributes.Azimuth" } } })], h.prototype, "azimuth", void 0), t([i({ json: { read: { source: "attributes.BranchName" } } })], h.prototype, "branchName", void 0), t([i({ type: De.apiValues, json: { read: { source: "attributes.DirectionPointType", reader: De.read } } })], h.prototype, "directionPointType", void 0), t([i({ json: { read: { source: "attributes.DisplayText" } } })], h.prototype, "displayText", void 0), t([i({ json: { read: { source: "attributes.ExitName" } } })], h.prototype, "exitName", void 0), t([i({ type: ne })], h.prototype, "geometry", void 0), t([i({ json: { read: !1 } })], h.prototype, "intersectingName", void 0), t([i({ json: { read: !1 } })], h.prototype, "level", void 0), t([i({ json: { read: { source: "attributes.Name" } } })], h.prototype, "name", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], h.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], h.prototype, "popupTemplate", void 0), t([i({ json: { read: { source: "attributes.Sequence" } } })], h.prototype, "sequence", void 0), t([i({ json: { read: !1 } })], h.prototype, "shortVoiceInstruction", void 0), t([i({ json: { read: { source: "attributes.StopID" } } })], h.prototype, "stopId", void 0), t([i({ types: N, json: { read: !1 } })], h.prototype, "symbol", void 0), t([i({ json: { read: { source: "attributes.TowardName" } } })], h.prototype, "towardName", void 0), t([i({ json: { read: !1 } })], h.prototype, "voiceInstruction", void 0), h = Pe = t([V("geoscene.rest.support.DirectionPoint")], h);
const me = h;
function R(e, r) {
  if (g(e))
    return null;
  const s = {}, n = new RegExp(`^${r}`, "i");
  for (const a in e)
    e.hasOwnProperty(a) && n.test(a) && (s[a.substring(r.length)] = e[a]);
  return s;
}
function Ae(e, r) {
  return g(e) || g(r) ? null : Math.round((e - r) / 6e4);
}
var Se;
let S = Se = class extends k {
  constructor(e) {
    super(e), this.addedCost = null, this.barrierType = null, this.costs = null, this.curbApproach = null, this.fullEdge = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sideOfEdge = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null;
  }
  readCosts(e, r) {
    return R(r.attributes, "Attr_");
  }
  writeCosts(e, r) {
    if (!g(e)) {
      r.attributes || (r.attributes = {});
      for (const s in e)
        r.attributes[`Attr_${s}`] = e[s];
    }
  }
  static fromPortalJSON(e) {
    var r, s;
    return new Se({ addedCost: (r = e.attributes.AddedCost) != null ? r : null, barrierType: o(e.attributes.BarrierType) ? M.fromJSON(e.attributes.BarrierType) : null, costs: o(e.attributes.Costs) ? JSON.parse(e.attributes.Costs) : null, curbApproach: o(e.attributes.CurbApproach) ? C.fromJSON(e.attributes.CurbApproach) : null, fullEdge: o(e.attributes.FullEdge) ? be.fromJSON(e.attributes.FullEdge) : null, geometry: ne.fromJSON(e.geometry), name: (s = e.attributes.Name) != null ? s : null, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, status: o(e.attributes.Status) ? Y.fromJSON(e.attributes.Status) : null, symbol: o(e.symbol) ? ee(e.symbol) : null });
  }
  clone() {
    return new Se(ye({ addedCost: this.addedCost, barrierType: this.barrierType, costs: this.costs, curbApproach: this.curbApproach, fullEdge: this.fullEdge, geometry: this.geometry, name: this.name, objectId: this.objectId, popupTemplate: this.popupTemplate, sideOfEdge: this.sideOfEdge, sourceId: this.sourceId, sourceOid: this.sourceOid, status: this.status, symbol: this.symbol }));
  }
  toPortalJSON() {
    return { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), AddedCost: this.addedCost, BarrierType: o(this.barrierType) ? M.toJSON(this.barrierType) : null, Costs: o(this.costs) ? JSON.stringify(this.costs) : null, CurbApproach: o(this.curbApproach) ? C.toJSON(this.curbApproach) : null, FullEdge: o(this.fullEdge) ? be.toJSON(this.fullEdge) : null, Name: this.name, Status: o(this.status) ? Y.toJSON(this.status) : null }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
  }
};
S.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "AddedCost", alias: "Added Cost", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0, domain: null }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNABarrierType", codedValues: [{ name: "Restriction", code: 0 }, { name: "Scaled Cost", code: 1 }, { name: "Added Cost", code: 2 }] } }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !1, domain: { type: "codedValue", name: "esriNACurbApproachType", codedValues: [{ name: "Either side", code: 0 }, { name: "From the right", code: 1 }, { name: "From the left", code: 2 }, { name: "Depart in the same direction", code: 3 }] } }, { name: "FullEdge", alias: "Full Edge", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNAIntYesNo", codedValues: [{ name: "No", code: 0 }, { name: "Yes", code: 1 }] } }, { name: "Name", alias: "Name", type: "esriFieldTypeString", length: 255, editable: !0, nullable: !0, visible: !0 }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNAObjectStatus", codedValues: [{ name: "OK", code: 0 }, { name: "Not Located on Network", code: 1 }, { name: "Network Unbuilt", code: 2 }, { name: "Prohibited Street", code: 3 }, { name: "Invalid Field Values", code: 4 }, { name: "Cannot Reach", code: 5 }, { name: "Time Window Violation", code: 6 }] } }], S.popupInfo = { title: "Point Barriers", fieldInfos: [{ fieldName: "Name", label: "Name", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "BarrierType", label: "Barrier Type", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "AddedCost", label: "Added Cost", isEditable: !0, tooltip: "", visible: !0, format: { places: 3, digitSeparator: !0 }, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ json: { read: !1 } })], S.prototype, "addedCost", void 0), t([i({ type: M.apiValues, json: { name: "attributes.BarrierType", read: { reader: M.read }, write: { writer: M.write } } })], S.prototype, "barrierType", void 0), t([i()], S.prototype, "costs", void 0), t([y("costs", ["attributes"])], S.prototype, "readCosts", null), t([U("costs")], S.prototype, "writeCosts", null), t([i({ type: C.apiValues, json: { read: { source: "attributes.CurbApproach", reader: C.read } } })], S.prototype, "curbApproach", void 0), t([i({ type: be.apiValues, json: { name: "attributes.FullEdge", read: { reader: be.read }, write: { writer: be.write } } })], S.prototype, "fullEdge", void 0), t([i({ type: ne, json: { write: !0 } })], S.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name", write: !0 } })], S.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID", write: !0 } })], S.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], S.prototype, "popupTemplate", void 0), t([i({ type: Fe.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: Fe.read } } })], S.prototype, "sideOfEdge", void 0), t([i({ json: { read: { source: "attributes.SourceID" } } })], S.prototype, "sourceId", void 0), t([i({ json: { read: { source: "attributes.SourceOID" } } })], S.prototype, "sourceOid", void 0), t([i({ type: Y.apiValues, json: { read: { source: "attributes.Status", reader: Y.read } } })], S.prototype, "status", void 0), t([i({ types: N, json: { read: !1 } })], S.prototype, "symbol", void 0), S = Se = t([V("geoscene.rest.support.PointBarrier")], S);
const re = S;
var we;
let E = we = class extends k {
  constructor(e) {
    super(e), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null;
  }
  readCosts(e, r) {
    return R(r.attributes, "Attr_");
  }
  writeCosts(e, r) {
    if (!g(e)) {
      r.attributes || (r.attributes = {});
      for (const s in e)
        r.attributes[`Attr_${s}`] = e[s];
    }
  }
  static fromPortalJSON(e) {
    var r, s;
    return new we({ barrierType: o(e.attributes.BarrierType) ? M.fromJSON(e.attributes.BarrierType) : null, costs: o(e.attributes.Costs) ? JSON.parse(e.attributes.Costs) : null, geometry: it.fromJSON(e.geometry), name: (r = e.attributes.Name) != null ? r : null, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, scaleFactor: (s = e.attributes.ScaleFactor) != null ? s : null, symbol: o(e.symbol) ? ee(e.symbol) : null });
  }
  clone() {
    return new we(ye({ barrierType: this.barrierType, costs: this.costs, geometry: this.geometry, name: this.name, objectId: this.objectId, popupTemplate: this.popupTemplate, scaleFactor: this.scaleFactor, symbol: this.symbol }));
  }
  toPortalJSON() {
    var e, r;
    return { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), BarrierType: o(this.barrierType) ? M.toJSON(this.barrierType) : null, Costs: o(this.costs) ? JSON.stringify(this.costs) : null, Name: (e = this.name) != null ? e : null, ScaleFactor: (r = this.scaleFactor) != null ? r : null }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
  }
};
E.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNABarrierType", codedValues: [{ name: "Restriction", code: 0 }, { name: "Scaled Cost", code: 1 }, { name: "Added Cost", code: 2 }] } }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "Name", alias: "Name", type: "esriFieldTypeString", length: 255, editable: !0, nullable: !0, visible: !0 }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }], E.popupInfo = { title: "Polygon Barriers", fieldInfos: [{ fieldName: "Name", label: "Name", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "BarrierType", label: "Barrier Type", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "ScaleFactor", isEditable: !0, tooltip: "", visible: !0, format: { places: 3, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Costs", label: "Costs", isEditable: !0, tooltip: "", visible: !1, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ type: M.apiValues, json: { name: "attributes.BarrierType", read: { reader: M.read }, write: { writer: M.write } } })], E.prototype, "barrierType", void 0), t([i()], E.prototype, "costs", void 0), t([y("costs", ["attributes"])], E.prototype, "readCosts", null), t([U("costs")], E.prototype, "writeCosts", null), t([i({ type: it, json: { write: !0 } })], E.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name", write: !0 } })], E.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID", write: !0 } })], E.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], E.prototype, "popupTemplate", void 0), t([i({ json: { read: !1 } })], E.prototype, "scaleFactor", void 0), t([i({ types: N, json: { read: !1 } })], E.prototype, "symbol", void 0), E = we = t([V("geoscene.rest.support.PolygonBarrier")], E);
const oe = E;
var Ne;
let P = Ne = class extends k {
  constructor(e) {
    super(e), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null;
  }
  readCosts(e, r) {
    return R(r.attributes, "Attr_");
  }
  static fromPortalJSON(e) {
    var r, s;
    return new Ne({ barrierType: o(e.attributes.BarrierType) ? M.fromJSON(e.attributes.BarrierType) : null, costs: o(e.attributes.Costs) ? JSON.parse(e.attributes.Costs) : null, geometry: le.fromJSON(e.geometry), name: (r = e.attributes.Name) != null ? r : null, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, scaleFactor: (s = e.attributes.ScaleFactor) != null ? s : null, symbol: o(e.symbol) ? ee(e.symbol) : null });
  }
  clone() {
    return new Ne(ye({ barrierType: this.barrierType, costs: this.costs, geometry: this.geometry, name: this.name, objectId: this.objectId, popupTemplate: this.popupTemplate, scaleFactor: this.scaleFactor, symbol: this.symbol }));
  }
  toPortalJSON() {
    return { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), BarrierType: o(this.barrierType) ? M.toJSON(this.barrierType) : null, Costs: o(this.costs) ? JSON.stringify(this.costs) : null, Name: this.name, ScaleFactor: this.scaleFactor }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
  }
};
P.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNABarrierType", codedValues: [{ name: "Restriction", code: 0 }, { name: "Scaled Cost", code: 1 }, { name: "Added Cost", code: 2 }] } }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "Name", alias: "Name", type: "esriFieldTypeString", length: 255, editable: !0, nullable: !0, visible: !0 }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }], P.popupInfo = { title: "Line Barriers", fieldInfos: [{ fieldName: "Name", label: "Name", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "BarrierType", label: "Barrier Type", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "ScaleFactor", isEditable: !0, tooltip: "", visible: !0, format: { places: 3, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Costs", label: "Costs", isEditable: !0, tooltip: "", visible: !1, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ type: M.apiValues, json: { read: { source: "attributes.BarrierType", reader: M.read } } })], P.prototype, "barrierType", void 0), t([i()], P.prototype, "costs", void 0), t([y("costs", ["attributes"])], P.prototype, "readCosts", null), t([i({ type: le, json: { write: !0 } })], P.prototype, "geometry", void 0), t([i({ json: { name: "attributes.Name", write: !0 } })], P.prototype, "name", void 0), t([i({ json: { name: "attributes.ObjectID", write: !0 } })], P.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], P.prototype, "popupTemplate", void 0), t([i({ json: { read: !1 } })], P.prototype, "scaleFactor", void 0), t([i({ types: N, json: { read: !1 } })], P.prototype, "symbol", void 0), P = Ne = t([V("geoscene.rest.support.PolylineBarrier")], P);
const se = P;
let W = class extends k {
  constructor(e) {
    super(e), this.accumulateAttributes = null, this.directionsLanguage = null, this.findBestSequence = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.startTimeIsUTC = null, this.timeWindowsAreUTC = null, this.travelMode = null;
  }
};
t([i({ type: [String], json: { read: { source: "accumulateAttributeNames" }, write: { target: "accumulateAttributeNames" } } })], W.prototype, "accumulateAttributes", void 0), t([i({ type: String, json: { write: !0 } })], W.prototype, "directionsLanguage", void 0), t([i({ type: Boolean, json: { write: !0 } })], W.prototype, "findBestSequence", void 0), t([i({ type: Boolean, json: { write: !0 } })], W.prototype, "preserveFirstStop", void 0), t([i({ type: Boolean, json: { write: !0 } })], W.prototype, "preserveLastStop", void 0), t([i({ type: Boolean, json: { write: !0 } })], W.prototype, "startTimeIsUTC", void 0), t([i({ type: Boolean, json: { write: !0 } })], W.prototype, "timeWindowsAreUTC", void 0), t([i({ type: rt, json: { write: !0 } })], W.prototype, "travelMode", void 0), W = t([V("geoscene.layers.support.RouteSettings")], W);
const at = W;
var Le;
let m = Le = class extends k {
  constructor(e) {
    super(e), this.analysisSettings = null, this.endTime = null, this.endTimeOffset = null, this.firstStopId = null, this.geometry = null, this.lastStopId = null, this.messages = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.startTime = null, this.startTimeOffset = null, this.stopCount = null, this.symbol = null, this.totalCosts = null, this.totalDistance = null, this.totalDuration = null, this.totalLateDuration = null, this.totalViolations = null, this.totalWait = null, this.totalWaitDuration = null, this.version = "1.0.0";
  }
  readEndTime(e, r) {
    return o(r.attributes.EndTimeUTC) ? new Date(r.attributes.EndTimeUTC) : null;
  }
  readEndTimeOffset(e, r) {
    return Ae(r.attributes.EndTime, r.attributes.EndTimeUTC);
  }
  readStartTime(e, r) {
    return o(r.attributes.StartTimeUTC) ? new Date(r.attributes.StartTimeUTC) : null;
  }
  readStartTimeOffset(e, r) {
    return Ae(r.attributes.StartTime, r.attributes.StartTimeUTC);
  }
  readTotalCosts(e, r) {
    return R(r.attributes, "Total_");
  }
  readTotalViolations(e, r) {
    return R(r.attributes, "TotalViolation_");
  }
  readTotalWait(e, r) {
    return R(r.attributes, "TotalWait_");
  }
  static fromPortalJSON(e) {
    var r, s, n, a, b, c;
    return new Le({ analysisSettings: o(e.attributes.AnalysisSettings) ? at.fromJSON(JSON.parse(e.attributes.AnalysisSettings)) : null, endTime: o(e.attributes.EndTime) ? new Date(e.attributes.EndTime) : null, endTimeOffset: (r = e.attributes.EndUTCOffset) != null ? r : null, geometry: le.fromJSON(e.geometry), messages: o(e.attributes.Messages) ? JSON.parse(e.attributes.Messages) : null, name: e.attributes.RouteName, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, startTime: o(e.attributes.StartTime) ? new Date(e.attributes.StartTime) : null, startTimeOffset: (s = e.attributes.StartUTCOffset) != null ? s : null, symbol: o(e.symbol) ? ee(e.symbol) : null, totalCosts: o(e.attributes.TotalCosts) ? JSON.parse(e.attributes.TotalCosts) : null, totalDistance: (n = e.attributes.TotalMeters) != null ? n : null, totalDuration: (a = e.attributes.TotalMinutes) != null ? a : null, totalLateDuration: (b = e.attributes.TotalLateMinutes) != null ? b : null, totalWaitDuration: (c = e.attributes.TotalWaitMinutes) != null ? c : null, version: e.attributes.Version });
  }
  toPortalJSON() {
    return { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), AnalysisSettings: o(this.analysisSettings) ? JSON.stringify(this.analysisSettings.toJSON()) : null, EndTime: o(this.endTime) ? this.endTime.getTime() : null, EndUTCOffset: this.endTimeOffset, Messages: o(this.messages) ? JSON.stringify(this.messages) : null, RouteName: x(this.name), StartTime: o(this.startTime) ? this.startTime.getTime() : null, StartUTCOffset: this.startTimeOffset, TotalCosts: o(this.totalCosts) ? JSON.stringify(this.totalCosts) : null, TotalLateMinutes: this.totalLateDuration, TotalMeters: this.totalDistance, TotalMinutes: this.totalDuration, TotalWaitMinutes: this.totalWaitDuration, Version: x(this.version) }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
  }
};
m.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "AnalysisSettings", alias: "Analysis Settings", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "EndTime", alias: "End Time", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !0 }, { name: "EndUTCOffset", alias: "End Time: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "Messages", alias: "Analysis Messages", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString", length: 1024, editable: !0, nullable: !0, visible: !0, domain: null }, { name: "StartTime", alias: "Start Time", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !0 }, { name: "StartUTCOffset", alias: "Start Time: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "TotalCosts", alias: "Total Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "TotalLateMinutes", alias: "Total Late Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }, { name: "TotalMeters", alias: "Total Meters", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "TotalMinutes", alias: "Total Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "TotalWaitMinutes", alias: "Total Wait Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }, { name: "Version", alias: "Version", type: "esriFieldTypeString", length: 16, editable: !0, nullable: !0, visible: !0, domain: null }], m.popupInfo = { title: "Route Details", fieldInfos: [{ fieldName: "RouteName", label: "Route Name", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "TotalMinutes", label: "Total Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TotalMeters", label: "Total Meters", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TotalLateMinutes", label: "Total Late Minutes", isEditable: !1, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TotalWaitMinutes", label: "Total Wait Minutes", isEditable: !1, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TotalCosts", label: "Total Costs", isEditable: !1, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "StartTime", label: "Start Time", isEditable: !1, tooltip: "", visible: !0, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "StartUTCOffset", label: "Start Time: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "EndTime", label: "End Time", isEditable: !1, tooltip: "", visible: !0, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "EndUTCOffset", label: "End Time: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Messages", label: "Analysis Messages", isEditable: !1, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "AnalysisSettings", isEditable: !1, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "Version", label: "Version", isEditable: !1, tooltip: "", visible: !0, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ json: { read: !1 } })], m.prototype, "analysisSettings", void 0), t([i()], m.prototype, "endTime", void 0), t([y("endTime", ["attributes.EndTimeUTC"])], m.prototype, "readEndTime", null), t([i()], m.prototype, "endTimeOffset", void 0), t([y("endTimeOffset", ["attributes.EndTime", "attributes.EndTimeUTC"])], m.prototype, "readEndTimeOffset", null), t([i({ json: { read: { source: "attributes.FirstStopID" } } })], m.prototype, "firstStopId", void 0), t([i({ type: le })], m.prototype, "geometry", void 0), t([i({ json: { read: { source: "attributes.LastStopID" } } })], m.prototype, "lastStopId", void 0), t([i({ json: { read: !1 } })], m.prototype, "messages", void 0), t([i({ json: { read: { source: "attributes.Name" } } })], m.prototype, "name", void 0), t([i({ json: { read: { source: "attributes.ObjectID" } } })], m.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], m.prototype, "popupTemplate", void 0), t([i()], m.prototype, "startTime", void 0), t([y("startTime", ["attributes.StartTimeUTC"])], m.prototype, "readStartTime", null), t([i()], m.prototype, "startTimeOffset", void 0), t([y("startTimeOffset", ["attributes.StartTime", "attributes.StartTimeUTC"])], m.prototype, "readStartTimeOffset", null), t([i({ json: { read: { source: "attributes.StopCount" } } })], m.prototype, "stopCount", void 0), t([i({ types: N, json: { read: !1 } })], m.prototype, "symbol", void 0), t([i()], m.prototype, "totalCosts", void 0), t([y("totalCosts", ["attributes"])], m.prototype, "readTotalCosts", null), t([i({ json: { read: !1 } })], m.prototype, "totalDistance", void 0), t([i({ json: { read: !1 } })], m.prototype, "totalDuration", void 0), t([i({ json: { read: !1 } })], m.prototype, "totalLateDuration", void 0), t([i()], m.prototype, "totalViolations", void 0), t([y("totalViolations", ["attributes"])], m.prototype, "readTotalViolations", null), t([i()], m.prototype, "totalWait", void 0), t([y("totalWait", ["attributes"])], m.prototype, "readTotalWait", null), t([i({ json: { read: !1 } })], m.prototype, "totalWaitDuration", void 0), t([i({ json: { read: !1 } })], m.prototype, "version", void 0), m = Le = t([V("geoscene.rest.support.RouteInfo")], m);
const Te = m, Kt = { type: String, json: { read: { source: "token" }, write: { target: "token" } } };
var Oe;
let p = Oe = class extends k {
  constructor(e) {
    super(e), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = !1, this.returnDirections = !1, this.returnPolygonBarriers = !1, this.returnPolylineBarriers = !1, this.returnRoutes = !0, this.returnStops = !1, this.returnZ = !0, this.startTime = null, this.startTimeIsUTC = !0, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(e) {
    return ht(Oe, e);
  }
  writePointBarriers(e, r, s) {
    this._writeNetworkFeatures(e, r, s);
  }
  writePolygonBarrier(e, r, s) {
    this._writeNetworkFeatures(e, r, s);
  }
  writePolylineBarrier(e, r, s) {
    this._writeNetworkFeatures(e, r, s);
  }
  readStartTime(e, r) {
    return r.startTime != null ? new Date(r.startTime) : null;
  }
  writeStartTime(e, r) {
    r.startTime = e ? e.getTime() : null;
  }
  writeStops(e, r, s) {
    this._writeNetworkFeatures(e, r, s);
  }
  clone() {
    return new Oe(ye({ accumulateAttributes: this.accumulateAttributes, apiKey: this.apiKey, attributeParameterValues: this.attributeParameterValues, directionsLanguage: this.directionsLanguage, directionsLengthUnits: this.directionsLengthUnits, directionsOutputType: this.directionsOutputType, directionsStyleName: this.directionsStyleName, directionsTimeAttribute: this.directionsTimeAttribute, findBestSequence: this.findBestSequence, ignoreInvalidLocations: this.ignoreInvalidLocations, impedanceAttribute: this.impedanceAttribute, outputGeometryPrecision: this.outputGeometryPrecision, outputGeometryPrecisionUnits: this.outputGeometryPrecisionUnits, outputLines: this.outputLines, outSpatialReference: this.outSpatialReference, pointBarriers: this.pointBarriers, polygonBarriers: this.polygonBarriers, polylineBarriers: this.polylineBarriers, preserveFirstStop: this.preserveFirstStop, preserveLastStop: this.preserveLastStop, restrictionAttributes: this.restrictionAttributes, restrictUTurns: this.restrictUTurns, returnBarriers: this.returnBarriers, returnDirections: this.returnDirections, returnPolygonBarriers: this.returnPolygonBarriers, returnPolylineBarriers: this.returnPolylineBarriers, returnRoutes: this.returnRoutes, returnStops: this.returnStops, returnZ: this.returnZ, startTime: this.startTime, startTimeIsUTC: this.startTimeIsUTC, stops: this.stops, timeWindowsAreUTC: this.timeWindowsAreUTC, travelMode: this.travelMode, useHierarchy: this.useHierarchy, useTimeWindows: this.useTimeWindows }));
  }
  _writeNetworkFeatures(e, r, s) {
    r[s] = L.isCollection(e) ? { features: e.toArray().map((n) => n.toJSON()) } : e.toJSON();
  }
};
t([i({ type: [String], json: { name: "accumulateAttributeNames", write: !0 } })], p.prototype, "accumulateAttributes", void 0), t([i(Kt)], p.prototype, "apiKey", void 0), t([i({ json: { write: !0 } })], p.prototype, "attributeParameterValues", void 0), t([i({ type: String, json: { write: !0 } })], p.prototype, "directionsLanguage", void 0), t([pe(ot)], p.prototype, "directionsLengthUnits", void 0), t([pe(Vt)], p.prototype, "directionsOutputType", void 0), t([i({ type: String, json: { write: !0 } })], p.prototype, "directionsStyleName", void 0), t([i({ type: String, json: { write: !0 } })], p.prototype, "directionsTimeAttribute", void 0), t([i({ json: { write: !0 } })], p.prototype, "findBestSequence", void 0), t([i({ json: { write: !0 } })], p.prototype, "ignoreInvalidLocations", void 0), t([i({ type: String, json: { read: { source: "impedanceAttributeName" }, write: { target: "impedanceAttributeName" } } })], p.prototype, "impedanceAttribute", void 0), t([i({ type: Number, json: { write: !0 } })], p.prototype, "outputGeometryPrecision", void 0), t([pe($t)], p.prototype, "outputGeometryPrecisionUnits", void 0), t([pe(Rt)], p.prototype, "outputLines", void 0), t([i({ type: Q, json: { write: !0 } })], p.prototype, "outSpatialReference", void 0), t([i({ json: { write: !0 } })], p.prototype, "pointBarriers", void 0), t([U("pointBarriers")], p.prototype, "writePointBarriers", null), t([i({ json: { write: !0 } })], p.prototype, "polygonBarriers", void 0), t([U("polygonBarriers")], p.prototype, "writePolygonBarrier", null), t([i({ json: { write: !0 } })], p.prototype, "polylineBarriers", void 0), t([U("polylineBarriers")], p.prototype, "writePolylineBarrier", null), t([i({ json: { write: !0 } })], p.prototype, "preserveFirstStop", void 0), t([i({ json: { write: !0 } })], p.prototype, "preserveLastStop", void 0), t([i({ type: [String], json: { write: !0 } })], p.prototype, "restrictionAttributes", void 0), t([pe(kt)], p.prototype, "restrictUTurns", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnBarriers", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnDirections", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolygonBarriers", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolylineBarriers", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnRoutes", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnStops", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "returnZ", void 0), t([i({ type: Date, json: { type: Number, write: !0 } })], p.prototype, "startTime", void 0), t([y("startTime")], p.prototype, "readStartTime", null), t([U("startTime")], p.prototype, "writeStartTime", null), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "startTimeIsUTC", void 0), t([i({ json: { write: !0 } })], p.prototype, "stops", void 0), t([U("stops")], p.prototype, "writeStops", null), t([i({ json: { write: !0 } })], p.prototype, "timeWindowsAreUTC", void 0), t([i({ type: rt, json: { write: !0 } })], p.prototype, "travelMode", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "useHierarchy", void 0), t([i({ type: Boolean, json: { write: !0 } })], p.prototype, "useTimeWindows", void 0), p = Oe = t([V("geoscene.rest.support.RouteParameters")], p);
const He = p;
var Ce;
let l = Ce = class extends k {
  constructor(e) {
    super(e), this.arriveCurbApproach = null, this.arriveTime = null, this.arriveTimeOffset = null, this.bearing = null, this.bearingTol = null, this.cumulativeCosts = null, this.cumulativeDistance = null, this.cumulativeDuration = null, this.curbApproach = null, this.departCurbApproach = null, this.departTime = null, this.departTimeOffset = null, this.distanceToNetworkInMeters = null, this.geometry = null, this.lateDuration = null, this.locationType = null, this.name = null, this.navLatency = null, this.objectId = null, this.popupTemplate = null, this.posAlong = null, this.routeName = null, this.serviceCosts = null, this.serviceDistance = null, this.serviceDuration = null, this.sequence = null, this.sideOfEdge = null, this.snapX = null, this.snapY = null, this.snapZ = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.timeWindowEnd = null, this.timeWindowEndOffset = null, this.timeWindowStart = null, this.timeWindowStartOffset = null, this.violations = null, this.waitDuration = null, this.wait = null;
  }
  readArriveTimeOffset(e, r) {
    return Ae(r.attributes.ArriveTime, r.attributes.ArriveTimeUTC);
  }
  readCumulativeCosts(e, r) {
    return R(r.attributes, "Cumul_");
  }
  readDepartTimeOffset(e, r) {
    return Ae(r.attributes.DepartTime, r.attributes.DepartTimeUTC);
  }
  readServiceCosts(e, r) {
    return R(r.attributes, "Attr_");
  }
  writeServiceCosts(e, r) {
    if (!g(e)) {
      r.attributes || (r.attributes = {});
      for (const s in e)
        r.attributes[`Attr_${s}`] = e[s];
    }
  }
  writeTimeWindowEnd(e, r) {
    g(e) || (r.attributes || (r.attributes = {}), r.attributes.TimeWindowEnd = e.getTime());
  }
  writeTimeWindowStart(e, r) {
    g(e) || (r.attributes || (r.attributes = {}), r.attributes.TimeWindowStart = e.getTime());
  }
  readViolations(e, r) {
    return R(r.attributes, "Violation_");
  }
  readWait(e, r) {
    return R(r.attributes, "Wait_");
  }
  static fromPortalJSON(e) {
    var r, s, n, a, b, c, w, v, D, I;
    return new Ce({ arriveCurbApproach: o(e.attributes.ArrivalCurbApproach) ? C.fromJSON(e.attributes.ArrivalCurbApproach) : null, arriveTime: o(e.attributes.ArrivalTime) ? new Date(e.attributes.ArrivalTime) : null, arriveTimeOffset: e.attributes.ArrivalUTCOffset, cumulativeCosts: o(e.attributes.CumulativeCosts) ? JSON.parse(e.attributes.CumulativeCosts) : null, cumulativeDistance: (r = e.attributes.CumulativeMeters) != null ? r : null, cumulativeDuration: (s = e.attributes.CumulativeMinutes) != null ? s : null, curbApproach: o(e.attributes.CurbApproach) ? C.fromJSON(e.attributes.CurbApproach) : null, departCurbApproach: o(e.attributes.DepartureCurbApproach) ? C.fromJSON(e.attributes.DepartureCurbApproach) : null, departTime: o(e.attributes.DepartureTime) ? new Date(e.attributes.DepartureTime) : null, departTimeOffset: (n = e.attributes.DepartureUTCOffset) != null ? n : null, geometry: ne.fromJSON(e.geometry), lateDuration: (a = e.attributes.LateMinutes) != null ? a : null, locationType: o(e.attributes.LocationType) ? ce.fromJSON(e.attributes.LocationType) : null, name: e.attributes.Name, objectId: e.attributes.__OBJECTID, popupTemplate: o(e.popupInfo) ? J.fromJSON(e.popupInfo) : null, routeName: e.attributes.RouteName, sequence: (b = e.attributes.Sequence) != null ? b : null, serviceCosts: o(e.attributes.ServiceCosts) ? JSON.parse(e.attributes.ServiceCosts) : null, serviceDistance: (c = e.attributes.ServiceMeters) != null ? c : null, serviceDuration: (w = e.attributes.ServiceMinutes) != null ? w : null, status: o(e.attributes.Status) ? Y.fromJSON(e.attributes.Status) : null, symbol: o(e.symbol) ? ee(e.symbol) : null, timeWindowEnd: o(e.attributes.TimeWindowEnd) ? new Date(e.attributes.TimeWindowEnd) : null, timeWindowEndOffset: (v = e.attributes.TimeWindowEndUTCOffset) != null ? v : null, timeWindowStart: o(e.attributes.TimeWindowStart) ? new Date(e.attributes.TimeWindowStart) : null, timeWindowStartOffset: (D = e.attributes.TimeWindowStartUTCOffset) != null ? D : null, waitDuration: (I = e.attributes.WaitMinutes) != null ? I : null });
  }
  clone() {
    return new Ce(ye({ arriveCurbApproach: this.arriveCurbApproach, arriveTime: this.arriveTime, arriveTimeOffset: this.arriveTimeOffset, bearing: this.bearing, bearingTol: this.bearingTol, cumulativeCosts: this.cumulativeCosts, cumulativeDistance: this.cumulativeDistance, cumulativeTime: this.cumulativeDuration, curbApproach: this.curbApproach, departCurbApproach: this.departCurbApproach, departTime: this.departTime, departTimeOffset: this.departTimeOffset, distanceToNetworkInMeters: this.distanceToNetworkInMeters, geometry: this.geometry, lateDuration: this.lateDuration, locationType: this.locationType, name: this.name, navLatency: this.navLatency, objectId: this.objectId, popupTemplate: this.popupTemplate, posAlong: this.posAlong, routeName: this.routeName, serviceCosts: this.serviceCosts, serviceDistance: this.serviceDistance, serviceDuration: this.serviceDuration, sequence: this.sequence, sideOfEdge: this.sideOfEdge, snapX: this.snapX, snapY: this.snapY, snapZ: this.snapZ, sourceId: this.sourceId, sourceOid: this.sourceOid, status: this.status, symbol: this.symbol, timeWindowEnd: this.timeWindowEnd, timeWindowEndOffset: this.timeWindowEndOffset, timeWindowStart: this.timeWindowStart, timeWindowStartOffset: this.timeWindowStartOffset, waitDuration: this.waitDuration }));
  }
  toPortalJSON() {
    var e, r;
    return { geometry: o(this.geometry) ? this.geometry.toJSON() : null, attributes: { __OBJECTID: x(this.objectId), ArrivalCurbApproach: o(this.arriveCurbApproach) ? C.toJSON(this.arriveCurbApproach) : null, ArrivalTime: o(this.arriveTime) ? this.arriveTime.getTime() : null, ArrivalUTCOffset: this.arriveTimeOffset, CumulativeCosts: o(this.cumulativeCosts) ? JSON.stringify(this.cumulativeCosts) : null, CumulativeMeters: this.cumulativeDistance, CumulativeMinutes: this.cumulativeDuration, CurbApproach: o(this.curbApproach) ? C.toJSON(this.curbApproach) : null, DepartureCurbApproach: o(this.departCurbApproach) ? C.toJSON(this.departCurbApproach) : null, DepartureTime: o(this.departTime) ? this.departTime.getTime() : null, DepartureUTCOffset: this.departTimeOffset, LateMinutes: this.lateDuration, LocationType: o(this.locationType) ? ce.toJSON(this.locationType) : null, Name: x(this.name), RouteName: x(this.routeName), Sequence: this.sequence, ServiceCosts: o(this.serviceCosts) ? JSON.stringify(this.serviceCosts) : null, ServiceMeters: this.serviceDistance, ServiceMinutes: this.serviceDuration, Status: o(this.status) ? Y.toJSON(this.status) : null, TimeWindowEnd: o(this.timeWindowEnd) ? this.timeWindowEnd.getTime() : null, TimeWindowEndUTCOffset: (e = this.timeWindowEndOffset) != null ? e : this.arriveTimeOffset, TimeWindowStart: o(this.timeWindowStart) ? this.timeWindowStart.getTime() : null, TimeWindowStartUTCOffset: (r = this.timeWindowEndOffset) != null ? r : this.arriveTimeOffset, WaitMinutes: this.waitDuration }, symbol: o(this.symbol) ? this.symbol.toJSON() : null, popupInfo: o(this.popupTemplate) ? this.popupTemplate.toJSON() : null };
  }
};
l.fields = [{ name: "__OBJECTID", alias: "OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1, domain: null }, { name: "ArrivalCurbApproach", alias: "Arrival Curb Approach", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNACurbApproachType", codedValues: [{ name: "Either side", code: 0 }, { name: "From the right", code: 1 }, { name: "From the left", code: 2 }, { name: "Depart in the same direction", code: 3 }] } }, { name: "ArrivalTime", alias: "Arrival Time", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !0 }, { name: "ArrivalUTCOffset", alias: "Arrival Time: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "CumulativeCosts", alias: "Cumulative Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "CumulativeMeters", alias: "Cumulative Meters", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "CumulativeMinutes", alias: "Cumulative Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !0 }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !1, domain: { type: "codedValue", name: "esriNACurbApproachType", codedValues: [{ name: "Either side", code: 0 }, { name: "From the right", code: 1 }, { name: "From the left", code: 2 }, { name: "Depart in the same direction", code: 3 }] } }, { name: "DepartureCurbApproach", alias: "Departure Curb Approach", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNACurbApproachType", codedValues: [{ name: "Either side", code: 0 }, { name: "From the right", code: 1 }, { name: "From the left", code: 2 }, { name: "Depart in the same direction", code: 3 }] } }, { name: "DepartureTime", alias: "Departure Time", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !0 }, { name: "DepartureUTCOffset", alias: "Departure Time: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "LateMinutes", alias: "Minutes Late", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }, { name: "LocationType", alias: "Location Type", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNALocationType", codedValues: [{ name: "Stop", code: 0 }, { name: "Waypoint", code: 1 }] } }, { name: "Name", alias: "Name", type: "esriFieldTypeString", length: 255, editable: !0, nullable: !0, visible: !0 }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString", length: 255, editable: !0, nullable: !0, visible: !0 }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "ServiceCosts", alias: "Service Costs", type: "esriFieldTypeString", length: 1048576, editable: !0, nullable: !0, visible: !1, domain: null }, { name: "ServiceMeters", alias: "Service Meters", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }, { name: "ServiceMinutes", alias: "Service Minutes", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0, domain: { type: "codedValue", name: "esriNAObjectStatus", codedValues: [{ name: "OK", code: 0 }, { name: "Not Located on Network", code: 1 }, { name: "Network Unbuilt", code: 2 }, { name: "Prohibited Street", code: 3 }, { name: "Invalid Field Values", code: 4 }, { name: "Cannot Reach", code: 5 }, { name: "Time Window Violation", code: 6 }] } }, { name: "TimeWindowEnd", alias: "Time Window End", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !1 }, { name: "TimeWindowEndUTCOffset", alias: "Time Window End: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "TimeWindowStart", alias: "Time Window Start", type: "esriFieldTypeDate", length: 36, editable: !0, nullable: !0, visible: !1 }, { name: "TimeWindowStartUTCOffset", alias: "Time Window Start: Offset from UTC in Minutes", type: "esriFieldTypeInteger", editable: !0, nullable: !0, visible: !0 }, { name: "WaitMinutes", alias: "Minutes Early", type: "esriFieldTypeDouble", editable: !0, nullable: !0, visible: !1 }], l.popupInfo = { title: "{Name}", fieldInfos: [{ fieldName: "Name", label: "Name", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "RouteName", label: "Route Name", isEditable: !0, tooltip: "", visible: !0, stringFieldOption: "textbox" }, { fieldName: "Sequence", label: "Sequence", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ArrivalTime", label: "Arrival Time", isEditable: !0, tooltip: "", visible: !0, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "ArrivalUTCOffset", label: "Arrival Time: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "DepartureTime", label: "Departure Time", isEditable: !0, tooltip: "", visible: !0, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "DepartureUTCOffset", label: "Departure Time: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "CurbApproach", label: "Curb Approach", isEditable: !0, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ArrivalCurbApproach", label: "Arrival Curb Approach", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "DepartureCurbApproach", label: "Departure Curb Approach", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "Status", label: "Status", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "LocationType", label: "Location Type", isEditable: !1, tooltip: "", visible: !0, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TimeWindowStart", label: "Time Window Start", isEditable: !0, tooltip: "", visible: !1, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "TimeWindowStartUTCOffset", label: "Time Window Start: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "TimeWindowEnd", label: "Time Window End", isEditable: !0, tooltip: "", visible: !1, format: { dateFormat: "shortDateShortTime24" }, stringFieldOption: "textbox" }, { fieldName: "TimeWindowEndUTCOffset", label: "Time Window End: Offset from UTC in Minutes", isEditable: !1, tooltip: "", visible: !1, format: { places: 0, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ServiceMinutes", label: "Service Minutes", isEditable: !0, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ServiceMeters", label: "Service Meters", isEditable: !0, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "ServiceCosts", label: "Service Costs", isEditable: !0, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "CumulativeMinutes", label: "Cumulative Minutes", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "CumulativeMeters", label: "Cumulative Meters", isEditable: !1, tooltip: "", visible: !0, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "CumulativeCosts", label: "Cumulative Costs", isEditable: !0, tooltip: "", visible: !1, stringFieldOption: "textbox" }, { fieldName: "LateMinutes", label: "Minutes Late", isEditable: !1, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }, { fieldName: "WaitMinutes", label: "Minutes Early", isEditable: !1, tooltip: "", visible: !1, format: { places: 2, digitSeparator: !0 }, stringFieldOption: "textbox" }], description: null, showAttachments: !1, mediaInfos: [] }, t([i({ type: C.apiValues, json: { read: { source: "attributes.ArrivalCurbApproach", reader: C.read } } })], l.prototype, "arriveCurbApproach", void 0), t([i({ type: Date, json: { read: { source: "attributes.ArriveTimeUTC" } } })], l.prototype, "arriveTime", void 0), t([i()], l.prototype, "arriveTimeOffset", void 0), t([y("arriveTimeOffset", ["attributes.ArriveTime", "attributes.ArriveTimeUTC"])], l.prototype, "readArriveTimeOffset", null), t([i({ json: { name: "attributes.Bearing", read: !1, write: !0 } })], l.prototype, "bearing", void 0), t([i({ json: { name: "attributes.BearingTol", read: !1, write: !0 } })], l.prototype, "bearingTol", void 0), t([i()], l.prototype, "cumulativeCosts", void 0), t([y("cumulativeCosts", ["attributes"])], l.prototype, "readCumulativeCosts", null), t([i({ json: { read: !1 } })], l.prototype, "cumulativeDistance", void 0), t([i({ json: { read: !1 } })], l.prototype, "cumulativeDuration", void 0), t([i({ type: C.apiValues, json: { name: "attributes.CurbApproach", read: { reader: C.read }, write: { writer: C.write } } })], l.prototype, "curbApproach", void 0), t([i({ type: C.apiValues, json: { read: { source: "attributes.DepartCurbApproach", reader: C.read } } })], l.prototype, "departCurbApproach", void 0), t([i({ type: Date, json: { read: { source: "attributes.DepartTimeUTC" } } })], l.prototype, "departTime", void 0), t([i()], l.prototype, "departTimeOffset", void 0), t([y("departTimeOffset", ["attributes.DepartTime", "attributes.DepartTimeUTC"])], l.prototype, "readDepartTimeOffset", null), t([i({ json: { read: { source: "attributes.DistanceToNetworkInMeters" } } })], l.prototype, "distanceToNetworkInMeters", void 0), t([i({ type: ne, json: { write: !0 } })], l.prototype, "geometry", void 0), t([i({ json: { name: "attributes.LateMinutes", read: !1 } })], l.prototype, "lateDuration", void 0), t([i({ type: ce.apiValues, json: { name: "attributes.LocationType", read: { reader: ce.read }, write: { writer: ce.write } } })], l.prototype, "locationType", void 0), t([i({ json: { name: "attributes.Name", write: !0 } })], l.prototype, "name", void 0), t([i({ json: { read: { source: "attributes.NavLatency" } } })], l.prototype, "navLatency", void 0), t([i({ json: { name: "attributes.ObjectID", write: !0 } })], l.prototype, "objectId", void 0), t([i({ type: J, json: { read: !1 } })], l.prototype, "popupTemplate", void 0), t([i({ json: { read: { source: "attributes.PosAlong" } } })], l.prototype, "posAlong", void 0), t([i({ json: { name: "attributes.RouteName", write: !0 } })], l.prototype, "routeName", void 0), t([i()], l.prototype, "serviceCosts", void 0), t([y("serviceCosts", ["attributes"])], l.prototype, "readServiceCosts", null), t([U("serviceCosts")], l.prototype, "writeServiceCosts", null), t([i({ json: { read: !1 } })], l.prototype, "serviceDistance", void 0), t([i({ json: { read: !1 } })], l.prototype, "serviceDuration", void 0), t([i({ json: { name: "attributes.Sequence", write: !0 } })], l.prototype, "sequence", void 0), t([i({ type: Fe.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: Fe.read } } })], l.prototype, "sideOfEdge", void 0), t([i({ json: { read: { source: "attributes.SnapX" } } })], l.prototype, "snapX", void 0), t([i({ json: { read: { source: "attributes.SnapY" } } })], l.prototype, "snapY", void 0), t([i({ json: { read: { source: "attributes.SnapZ" } } })], l.prototype, "snapZ", void 0), t([i({ json: { read: { source: "attributes.SourceID" } } })], l.prototype, "sourceId", void 0), t([i({ json: { read: { source: "attributes.SourceOID" } } })], l.prototype, "sourceOid", void 0), t([i({ type: Y.apiValues, json: { read: { source: "attributes.Status", reader: Y.read } } })], l.prototype, "status", void 0), t([i({ types: N, json: { read: !1 } })], l.prototype, "symbol", void 0), t([i({ type: Date, json: { name: "attributes.TimeWindowEnd" } })], l.prototype, "timeWindowEnd", void 0), t([U("timeWindowEnd")], l.prototype, "writeTimeWindowEnd", null), t([i({ json: { read: !1 } })], l.prototype, "timeWindowEndOffset", void 0), t([i({ type: Date, json: { name: "attributes.TimeWindowStart" } })], l.prototype, "timeWindowStart", void 0), t([U("timeWindowStart")], l.prototype, "writeTimeWindowStart", null), t([i({ json: { read: !1 } })], l.prototype, "timeWindowStartOffset", void 0), t([i()], l.prototype, "violations", void 0), t([y("violations", ["attributes"])], l.prototype, "readViolations", null), t([i({ json: { read: !1 } })], l.prototype, "waitDuration", void 0), t([i()], l.prototype, "wait", void 0), t([y("wait", ["attributes"])], l.prototype, "readWait", null), l = Ce = t([V("geoscene.rest.support.Stop")], l);
const ae = l;
function Ee(e) {
  return e.length ? e : null;
}
function ge(e) {
  return "layers" in e;
}
function Zt(e) {
  return e.declaredClass === "geoscene.rest.support.FeatureSet";
}
function Ht(e) {
  return e.declaredClass === "geoscene.rest.support.NetworkFeatureSet";
}
function Yt(e, r, s) {
  var n, a, b, c, w, v, D, I, F, O, T;
  const { impedance: f, networkDataset: ue, supportedTravelModes: te, defaultTravelMode: he } = r, ie = ue.networkAttributes.filter((u) => u.usageType === "esriNAUTCost"), Be = te.find((u) => u.id === he), q = (n = s.travelMode) != null ? n : Be;
  if (g(q))
    return void lt.warn("route-layer:missing-travel-mode", "The routing service must have a default travel mode or one must be specified in the route parameter.");
  const { timeAttributeName: _, distanceAttributeName: G } = q, K = ie.find((u) => u.name === _), Me = ie.find((u) => u.name === G), fe = (a = (b = (c = s.travelMode) == null ? void 0 : c.impedanceAttributeName) != null ? b : s.impedanceAttribute) != null ? a : f, Z = Gt.fromJSON(K == null ? void 0 : K.units), ve = ot.fromJSON(Me == null ? void 0 : Me.units);
  if (!Z || !ve)
    throw new z("routelayer:unknown-impedance-units", "the units of either the distance or time impedance are unknown");
  const nt = (w = s.directionsLanguage) != null ? w : r.directionsLanguage, _e = (v = (D = s.accumulateAttributes) != null ? D : r.accumulateAttributeNames) != null ? v : [], ut = new Set(ie.filter(({ name: u }) => u === _ || u === G || u === fe || _e.includes(u)).map(({ name: u }) => u)), $ = (u) => {
    for (const Ke in u)
      ut.has(Ke) || delete u[Ke];
  };
  for (const u of e.pointBarriers) {
    var We;
    o(u.costs) && (u.addedCost = (We = u.costs[fe]) != null ? We : 0, $(u.costs));
  }
  for (const u of e.polygonBarriers) {
    var Ue;
    o(u.costs) && (u.scaleFactor = (Ue = u.costs[fe]) != null ? Ue : 1, $(u.costs));
  }
  for (const u of e.polylineBarriers) {
    var Ve;
    o(u.costs) && (u.scaleFactor = (Ve = u.costs[fe]) != null ? Ve : 1, $(u.costs));
  }
  const { routeInfo: A } = e, { findBestSequence: pt, preserveFirstStop: dt, preserveLastStop: mt, startTimeIsUTC: bt, timeWindowsAreUTC: ct } = s;
  A.analysisSettings = new at({ accumulateAttributes: _e, directionsLanguage: nt, findBestSequence: pt, preserveFirstStop: dt, preserveLastStop: mt, startTimeIsUTC: bt, timeWindowsAreUTC: ct, travelMode: q }), A.totalDuration = X((I = A.totalCosts[_]) != null ? I : 0, Z), A.totalDistance = xe((F = A.totalCosts[G]) != null ? F : 0, ve), A.totalLateDuration = X((O = A.totalViolations[_]) != null ? O : 0, Z), A.totalWaitDuration = X((T = A.totalWait[_]) != null ? T : 0, Z), o(A.totalCosts) && $(A.totalCosts), o(A.totalViolations) && $(A.totalViolations), o(A.totalWait) && $(A.totalWait);
  for (const u of e.stops) {
    var $e, Re, ke, qe, Ge, ze;
    o(u.serviceCosts) && (u.serviceDuration = X(($e = u.serviceCosts[_]) != null ? $e : 0, Z), u.serviceDistance = xe((Re = u.serviceCosts[G]) != null ? Re : 0, ve), $(u.serviceCosts)), o(u.cumulativeCosts) && (u.cumulativeDuration = X((ke = u.cumulativeCosts[_]) != null ? ke : 0, Z), u.cumulativeDistance = xe((qe = u.cumulativeCosts[G]) != null ? qe : 0, ve), $(u.cumulativeCosts)), o(u.violations) && (u.lateDuration = X((Ge = u.violations[_]) != null ? Ge : 0, Z), $(u.violations)), o(u.wait) && (u.waitDuration = X((ze = u.wait[_]) != null ? ze : 0, Z), $(u.wait));
  }
}
async function Ye(e) {
  const r = Q.WGS84;
  return await Lt(e.spatialReference, r), Mt(e, r);
}
function X(e, r) {
  switch (r) {
    case "seconds":
      return e / 60;
    case "hours":
      return 60 * e;
    case "days":
      return 60 * e * 24;
    default:
      return e;
  }
}
function xe(e, r) {
  return r === "decimal-degrees" || r === "points" || r === "unknown" ? e : _t(e, r, "meters");
}
const Xt = L.ofType(de), Qt = L.ofType(me), Xe = L.ofType(re), Qe = L.ofType(oe), et = L.ofType(se), tt = L.ofType(ae), lt = ft.getLogger("geoscene.layers.RouteLayer");
let d = class extends vt(Tt(gt(St(wt(Nt(Wt)))))) {
  constructor(...e) {
    super(...e), this._featureCollection = null, this._type = "Feature Collection", this.defaultSymbols = new st(), this.directionLines = null, this.directionPoints = null, this.featureCollectionType = "route", this.legendEnabled = !1, this.maxScale = 0, this.minScale = 0, this.pointBarriers = new Xe(), this.polygonBarriers = new Qe(), this.polylineBarriers = new et(), this.routeInfo = null, this.spatialReference = Q.WGS84, this.stops = new tt(), this.type = "route", this.handles.add(Ot(() => this.stops.toArray(), () => {
      g(this.routeInfo) && this._setStopSymbol(this.stops);
    }, { sync: !0 }));
  }
  writeFeatureCollectionWebmap(e, r, s, n) {
    const a = [this._writePolygonBarriers(), this._writePolylineBarriers(), this._writePointBarriers(), this._writeRouteInfo(), this._writeDirectionLines(), this._writeDirectionPoints(), this._writeStops()].filter((w) => !!w), b = a.map((w, v) => v), c = n.origin === "web-map" ? "featureCollection.layers" : "layers";
    Ct(c, a, r), r.opacity = this.opacity, r.visibility = this.visible, r.visibleLayers = b;
  }
  readDirectionLines(e, r) {
    return this._getNetworkFeatures(r, "DirectionLines", (s) => de.fromPortalJSON(s));
  }
  readDirectionPoints(e, r) {
    return this._getNetworkFeatures(r, "DirectionPoints", (s) => me.fromPortalJSON(s));
  }
  get fullExtent() {
    if (o(this.routeInfo) && o(this.routeInfo.geometry))
      return this.routeInfo.geometry.extent;
    if (this.stops.length > 1) {
      const { spatialReference: e } = this.stops[0], r = new It({ spatialReference: e }), s = this.stops.toArray().map((n) => n.geometry);
      for (const n of s)
        o(n) && r.addPoint(n);
      return r.extent;
    }
    return new Dt({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: Q.WGS84 });
  }
  readMaxScale(e, r) {
    var s;
    const n = (ge(r) ? r.layers : r.featureCollection.layers).find((a) => o(a.layerDefinition.maxScale));
    return (s = n == null ? void 0 : n.layerDefinition.maxScale) != null ? s : 0;
  }
  readMinScale(e, r) {
    var s;
    const n = (ge(r) ? r.layers : r.featureCollection.layers).find((a) => o(a.layerDefinition.minScale));
    return (s = n == null ? void 0 : n.layerDefinition.minScale) != null ? s : 0;
  }
  readPointBarriers(e, r) {
    return this._getNetworkFeatures(r, "Barriers", (s) => re.fromPortalJSON(s));
  }
  readPolygonBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolygonBarriers", (s) => oe.fromPortalJSON(s));
  }
  readPolylineBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolylineBarriers", (s) => se.fromPortalJSON(s));
  }
  readRouteInfo(e, r) {
    const s = this._getNetworkFeatures(r, "RouteInfo", (n) => Te.fromPortalJSON(n));
    return s.length > 0 ? s.getItemAt(0) : null;
  }
  readSpatialReference(e, r) {
    var s, n;
    const a = ge(r) ? r.layers : r.featureCollection.layers;
    if (!a.length)
      return Q.WGS84;
    const { layerDefinition: b } = a[0], c = (s = (n = b.spatialReference) != null ? n : b.extent.spatialReference) != null ? s : Ft;
    return Q.fromJSON(c);
  }
  readStops(e, r) {
    return this._getNetworkFeatures(r, "Stops", (s) => ae.fromPortalJSON(s), (s) => this._setStopSymbol(s));
  }
  get title() {
    return o(this.routeInfo) && o(this.routeInfo.name) ? this.routeInfo.name : "Route";
  }
  set title(e) {
    e ? this._override("title", e) : this._clearOverride("title");
  }
  get url() {
    return Ze.routeServiceUrl;
  }
  set url(e) {
    e != null ? this._set("url", At(e, lt)) : this._set("url", Ze.routeServiceUrl);
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e)), Promise.resolve(this);
  }
  removeAll() {
    o(this.directionLines) && (this.directionLines.removeAll(), this._set("directionLines", null)), o(this.directionPoints) && (this.directionPoints.removeAll(), this._set("directionPoints", null)), o(this.routeInfo) && this._set("routeInfo", null), this.pointBarriers.removeAll(), this.polygonBarriers.removeAll(), this.polylineBarriers.removeAll(), this.stops.removeAll();
  }
  async save() {
    await this.load();
    const { fullExtent: e, portalItem: r } = this;
    if (!r)
      throw new z("routelayer:portal-item-not-set", "save() requires to the layer to have a portal item");
    if (!r.id)
      throw new z("routelayer:portal-item-not-saved", "Please use saveAs() first to save the routelayer");
    if (r.type !== "Feature Collection")
      throw new z("routelayer:portal-item-wrong-type", 'Portal item needs to have type "Feature Collection"');
    if (g(this.routeInfo))
      throw new z("routelayer:route-unsolved", "save() requires a solved route");
    const { portal: s } = r;
    if (await s._signIn(), s.user || await r.reload(), s.user.username !== r.owner)
      throw new z("routelayer:not-portal-item-owner", "You can only overwrite your portal items");
    const { itemUrl: n } = r, a = { messages: [], origin: "portal-item", portal: s, url: n && Bt(n), writtenProperties: [] }, b = this.write(null, a);
    return r.extent = await Ye(e), r.title = this.title, await r.update({ data: b }), r;
  }
  async saveAs(e, r = {}) {
    if (await this.load(), g(this.routeInfo))
      throw new z("routelayer:route-unsolved", "saveAs() requires a solved route");
    const s = jt.from(e).clone();
    s.extent != null || (s.extent = await Ye(this.fullExtent)), s.id = null, s.portal != null || (s.portal = Et.getDefault()), s.title != null || (s.title = this.title), s.type = "Feature Collection", s.typeKeywords = ["Data", "Feature Collection", "Multilayer", "Route Layer"];
    const { portal: n } = s, a = { messages: [], origin: "portal-item", portal: n, url: null, writtenProperties: [] };
    await n._signIn();
    const b = r == null ? void 0 : r.folder, c = this.write(null, a);
    return await n.user.addItem({ item: s, folder: b, data: c }), this.portalItem = s, Ut(a), a.portalItem = s, s;
  }
  async solve(e, r) {
    var s, n, a, b, c, w;
    const v = (s = e == null ? void 0 : e.stops) != null ? s : this.stops, D = (n = e == null ? void 0 : e.pointBarriers) != null ? n : Ee(this.pointBarriers), I = (a = e == null ? void 0 : e.polylineBarriers) != null ? a : Ee(this.polylineBarriers), F = (b = e == null ? void 0 : e.polygonBarriers) != null ? b : Ee(this.polygonBarriers);
    if (g(v))
      throw new z("routelayer:undefined-stops", "the route layer must have stops defined in the route parameters.");
    if ((Zt(v) || Ht(v)) && v.features.length < 2 || L.isCollection(v) && v.length < 2)
      throw new z("routelayer:insufficent-stops", "the route layer must have two or more stops to solve a route.");
    const O = await qt(this.url, e == null ? void 0 : e.apiKey, r), { defaultTravelMode: T, supportedTravelModes: f } = O, ue = f.find((K) => K.id === T), te = (c = e == null ? void 0 : e.travelMode) != null ? c : ue, he = (w = e == null ? void 0 : e.accumulateAttributes) != null ? w : [];
    o(te) && he.push(te.distanceAttributeName);
    const ie = { startTime: /* @__PURE__ */ new Date() }, Be = { accumulateAttributes: he, directionsOutputType: "featuresets", ignoreInvalidLocations: !0, pointBarriers: D, polylineBarriers: I, polygonBarriers: F, preserveFirstStop: !0, preserveLastStop: !0, returnBarriers: !!D, returnDirections: !0, returnPolygonBarriers: !!F, returnPolylineBarriers: !!I, returnRoutes: !0, returnStops: !0, stops: v }, q = e ? He.from(e) : new He();
    for (const K in ie)
      q[K] == null && (q[K] = ie[K]);
    q.set(Be);
    const _ = await zt(this.url, q, r), G = this._toRouteLayerSolution(_);
    return this._isOverridden("title") || (this.title = xt(G.routeInfo.name, "Route")), Yt(G, O, q), G;
  }
  update(e) {
    const { stops: r, directionLines: s, directionPoints: n, pointBarriers: a, polylineBarriers: b, polygonBarriers: c, routeInfo: w } = e;
    this.set({ stops: r, pointBarriers: a, polylineBarriers: b, polygonBarriers: c }), this._set("directionLines", s), this._set("directionPoints", n), this._set("routeInfo", w);
  }
  _getLayerDefinition() {
    return { capabilities: "Query,Update,Editing", extent: this.fullExtent.toJSON(), hasM: !1, hasZ: !1, maxScale: this.maxScale, minScale: this.minScale, objectIdField: "__OBJECTID", spatialReference: this.spatialReference.toJSON(), type: "Feature Layer", typeIdField: "" };
  }
  _getNetworkFeatures(e, r, s, n) {
    const a = (ge(e) ? e.layers : e.featureCollection.layers).find((O) => O.layerDefinition.name === r);
    if (g(a))
      return new L();
    const { layerDefinition: b, popupInfo: c, featureSet: w } = a, v = b.drawingInfo.renderer, { features: D } = w, I = v && Jt(v), F = D.map((O) => {
      var T;
      const f = s(O), { attributes: ue } = O, te = new Pt({ attributes: ue });
      return f.symbol != null || (f.symbol = (T = I == null ? void 0 : I.getSymbol(te)) != null ? T : this._getNetworkSymbol(r)), f.popupTemplate != null || (f.popupTemplate = c && J.fromJSON(c)), f;
    });
    return n && F.some((O) => !O.symbol) && n(F), new L(F);
  }
  _getNetworkSymbol(e) {
    switch (e) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  _setStopSymbol(e) {
    if (!e || e.length === 0)
      return;
    if (g(this.routeInfo) || e.length === 1)
      return void e.forEach((a, b) => {
        switch (b) {
          case 0:
            a.symbol = this.defaultSymbols.firstStop;
            break;
          case e.length - 1:
            a.symbol = this.defaultSymbols.lastStop;
            break;
          default:
            a.symbol = this.defaultSymbols.middleStop;
        }
      });
    const r = e.map((a) => a.sequence).filter((a) => o(a)), s = Math.min(...r), n = Math.max(...r);
    for (const a of e)
      a.sequence !== s ? a.sequence !== n ? a.status === "ok" || a.status === "not-located-on-closest" ? a.locationType !== "waypoint" ? a.locationType !== "break" ? a.symbol = this.defaultSymbols.middleStop : a.symbol = this.defaultSymbols.breakStop : a.symbol = this.defaultSymbols.waypointStop : a.symbol = this.defaultSymbols.invalidStop : a.symbol = this.defaultSymbols.lastStop : a.symbol = this.defaultSymbols.firstStop;
  }
  _toRouteLayerSolution(e) {
    var r, s, n, a, b;
    const c = e.routeResults[0].stops.map((T) => ae.fromJSON(T.toJSON()));
    this._setStopSymbol(c);
    const w = new tt(c), v = new Qe((r = e.polygonBarriers) == null ? void 0 : r.map((T) => {
      const f = oe.fromJSON(T.toJSON());
      return f.symbol = this.defaultSymbols.polygonBarriers, f;
    })), D = new et((s = e.polylineBarriers) == null ? void 0 : s.map((T) => {
      const f = se.fromJSON(T.toJSON());
      return f.symbol = this.defaultSymbols.polylineBarriers, f;
    })), I = new Xe((n = e.pointBarriers) == null ? void 0 : n.map((T) => {
      const f = re.fromJSON(T.toJSON());
      return f.symbol = this.defaultSymbols.pointBarriers, f;
    })), F = Te.fromJSON(e.routeResults[0].route.toJSON());
    F.symbol = this.defaultSymbols.routeInfo;
    const O = new Qt((a = e.routeResults[0].directionPoints) == null ? void 0 : a.features.map((T) => {
      const f = me.fromJSON(T.toJSON());
      return f.symbol = this.defaultSymbols.directionPoints, f;
    }));
    return { directionLines: new Xt((b = e.routeResults[0].directionLines) == null ? void 0 : b.features.map((T) => {
      const f = de.fromJSON(T.toJSON());
      return f.symbol = this.defaultSymbols.directionLines, f;
    })), directionPoints: O, pointBarriers: I, polygonBarriers: v, polylineBarriers: D, routeInfo: F, stops: w };
  }
  _writeDirectionLines() {
    return g(this.directionLines) || !this.directionLines.length ? null : { featureSet: { features: this.directionLines.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPolyline" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.directionLines.toJSON() } }, fields: de.fields, geometryType: "esriGeometryPolyline", name: "DirectionLines", title: "Direction Lines" }, popupInfo: de.popupInfo };
  }
  _writeDirectionPoints() {
    return g(this.directionPoints) || !this.directionPoints.length ? null : { featureSet: { features: this.directionPoints.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPoint" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.directionPoints.toJSON() } }, fields: me.fields, geometryType: "esriGeometryPoint", name: "DirectionPoints", title: "Direction Points" }, popupInfo: me.popupInfo };
  }
  _writePointBarriers() {
    return g(this.pointBarriers) || !this.pointBarriers.length ? null : { featureSet: { features: this.pointBarriers.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPoint" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.pointBarriers.toJSON() } }, fields: re.fields, geometryType: "esriGeometryPoint", name: "Barrier", title: "Point Barrier" }, popupInfo: re.popupInfo };
  }
  _writePolygonBarriers() {
    return g(this.polygonBarriers) || !this.polygonBarriers.length ? null : { featureSet: { features: this.polygonBarriers.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPolygon" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.polygonBarriers.toJSON() } }, fields: oe.fields, geometryType: "esriGeometryPolygon", name: "PolygonBarriers", title: "Polygon Barriers" }, popupInfo: oe.popupInfo };
  }
  _writePolylineBarriers() {
    return g(this.polylineBarriers) || !this.polylineBarriers.length ? null : { featureSet: { features: this.polylineBarriers.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPolyline" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.polylineBarriers.toJSON() } }, fields: se.fields, geometryType: "esriGeometryPolyline", name: "PolylineBarriers", title: "Line Barriers" }, popupInfo: se.popupInfo };
  }
  _writeRouteInfo() {
    return g(this.routeInfo) ? null : { featureSet: { features: [this.routeInfo.toPortalJSON()], geometryType: "esriGeometryPolyline" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "simple", symbol: this.defaultSymbols.routeInfo.toJSON() } }, fields: Te.fields, geometryType: "esriGeometryPolyline", name: "RouteInfo", title: "Route Details" }, popupInfo: Te.popupInfo };
  }
  _writeStops() {
    return g(this.stops) || !this.stops.length ? null : { featureSet: { features: this.stops.toArray().map((e) => e.toPortalJSON()), geometryType: "esriGeometryPoint" }, layerDefinition: { ...this._getLayerDefinition(), drawingInfo: { renderer: { type: "uniqueValue", field1: "Sequence", defaultSymbol: this.defaultSymbols.middleStop.toJSON(), uniqueValueInfos: [{ value: "1", symbol: this.defaultSymbols.firstStop.toJSON(), label: "First Stop" }, { value: `${this.stops.length}`, symbol: this.defaultSymbols.lastStop.toJSON(), label: "Last Stop" }] } }, fields: ae.fields, geometryType: "esriGeometryPoint", name: "Stops", title: "Stops" }, popupInfo: ae.popupInfo };
  }
};
t([i({ readOnly: !0, json: { read: !1, origins: { "portal-item": { write: { allowNull: !0, ignoreOrigin: !0 } }, "web-map": { write: { overridePolicy() {
  return { allowNull: !0, ignoreOrigin: this.portalItem == null };
} } } } } })], d.prototype, "_featureCollection", void 0), t([U(["web-map", "portal-item"], "_featureCollection")], d.prototype, "writeFeatureCollectionWebmap", null), t([i({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { target: "type", overridePolicy() {
  return { ignoreOrigin: this.portalItem != null };
} } } } } })], d.prototype, "_type", void 0), t([i({ nonNullable: !0, type: st })], d.prototype, "defaultSymbols", void 0), t([i({ readOnly: !0 })], d.prototype, "directionLines", void 0), t([y(["web-map", "portal-item"], "directionLines", ["layers", "featureCollection.layers"])], d.prototype, "readDirectionLines", null), t([i({ readOnly: !0 })], d.prototype, "directionPoints", void 0), t([y(["web-map", "portal-item"], "directionPoints", ["layers", "featureCollection.layers"])], d.prototype, "readDirectionPoints", null), t([i({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { ignoreOrigin: !0 } } } } })], d.prototype, "featureCollectionType", void 0), t([i({ readOnly: !0 })], d.prototype, "fullExtent", null), t([i({ json: { origins: { "web-map": { name: "featureCollection.showLegend" } }, write: !0 } })], d.prototype, "legendEnabled", void 0), t([i({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), t([i({ type: Number, nonNullable: !0, json: { write: !1 } })], d.prototype, "maxScale", void 0), t([y(["web-map", "portal-item"], "maxScale", ["layers", "featureCollection.layers"])], d.prototype, "readMaxScale", null), t([i({ type: Number, nonNullable: !0, json: { write: !1 } })], d.prototype, "minScale", void 0), t([y(["web-map", "portal-item"], "minScale", ["layers", "featureCollection.layers"])], d.prototype, "readMinScale", null), t([i({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })], d.prototype, "operationalLayerType", void 0), t([i({ nonNullable: !0, type: L.ofType(re) })], d.prototype, "pointBarriers", void 0), t([y(["web-map", "portal-item"], "pointBarriers", ["layers", "featureCollection.layers"])], d.prototype, "readPointBarriers", null), t([i({ nonNullable: !0, type: L.ofType(oe) })], d.prototype, "polygonBarriers", void 0), t([y(["web-map", "portal-item"], "polygonBarriers", ["layers", "featureCollection.layers"])], d.prototype, "readPolygonBarriers", null), t([i({ nonNullable: !0, type: L.ofType(se) })], d.prototype, "polylineBarriers", void 0), t([y(["web-map", "portal-item"], "polylineBarriers", ["layers", "featureCollection.layers"])], d.prototype, "readPolylineBarriers", null), t([i({ readOnly: !0 })], d.prototype, "routeInfo", void 0), t([y(["web-map", "portal-item"], "routeInfo", ["layers", "featureCollection.layers"])], d.prototype, "readRouteInfo", null), t([i({ type: Q })], d.prototype, "spatialReference", void 0), t([y(["web-map", "portal-item"], "spatialReference", ["layers", "featureCollection.layers"])], d.prototype, "readSpatialReference", null), t([i({ nonNullable: !0, type: L.ofType(ae) })], d.prototype, "stops", void 0), t([y(["web-map", "portal-item"], "stops", ["layers", "featureCollection.layers"])], d.prototype, "readStops", null), t([i()], d.prototype, "title", null), t([i({ readOnly: !0, json: { read: !1 } })], d.prototype, "type", void 0), t([i()], d.prototype, "url", null), d = t([V("geoscene.layers.RouteLayer")], d);
const li = d;
export {
  li as default
};
