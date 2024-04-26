import { eF as we, s as ue, f as L, eD as Se, C as Ve, g as Te, r as f, Z as re, fG as Z, e as s, d as o, a as u, aD as y, aE as ce, bW as S, be as Re, db as le, j as h, ey as I, bR as je, bv as Le, bw as Ee, bu as Ce, bz as Ie, bS as Me, u as qe, iA as Ae, fH as Pe, bG as We, dd as $e, gh as Fe, y as oe, dX as Ne, bJ as ke, bK as De, bE as ze } from "./index-Ek1MTSEY.js";
import { A as Ue, E as Be } from "./RenderSlot-9D6BRv6G.js";
import { I as Oe, N as Y, O as F } from "./enums-n72NRQQZ.js";
import { A as He } from "./SceneService-yc-BGZl3.js";
import "vue";
import "./originUtils-coUxWAIW.js";
import "./resourceUtils-OFVXASHI.js";
var de, te, K, he, $;
(function(t) {
  t[t.Binary = 0] = "Binary", t[t.JSON = 1] = "JSON";
})(de || (de = {})), function(t) {
  t[t.TreeIndex = 0] = "TreeIndex", t[t.TreeStats = 1] = "TreeStats", t[t.TreeData = 2] = "TreeData", t[t.BrickBundles = 3] = "BrickBundles", t[t.Section = 4] = "Section", t[t.VariableStats = 5] = "VariableStats";
}(te || (te = {})), function(t) {
  t[t.None = 1] = "None", t[t.Front = 2] = "Front", t[t.Back = 3] = "Back";
}(K || (K = {})), function(t) {
  t[t.Low = 0] = "Low", t[t.Medium = 1] = "Medium", t[t.High = 2] = "High";
}(he || (he = {})), function(t) {
  t[t.None = 0] = "None", t[t.StaticSections = 1] = "StaticSections", t[t.Slices = 2] = "Slices", t[t.DynamicSections = 4] = "DynamicSections", t[t.GhostShell = 8] = "GhostShell", t[t.Isosurface = 16] = "Isosurface", t[t.Quality = 32] = "Quality", t[t.SunLocation = 64] = "SunLocation", t[t.StaticSectionSelection = 128] = "StaticSectionSelection", t[t.ExaggerationAndOffset = 256] = "ExaggerationAndOffset", t[t.CurrentTime = 512] = "CurrentTime", t[t.CurrentVariable = 1024] = "CurrentVariable", t[t.DeleteIsosurface = 2048] = "DeleteIsosurface", t[t.ContainerVisibility = 4096] = "ContainerVisibility", t[t.RenderMode = 8192] = "RenderMode", t[t.Optimization = 16384] = "Optimization";
}($ || ($ = {}));
function Ge(t) {
  return new Promise((e) => import("./vxlLayer-oOktuy7c.js").then((i) => i.v).then(({ default: i }) => {
    const r = i({ locateFile: Je, preinitializedWebGLContext: t, onRuntimeInitialized: () => e(r) });
  })).catch((e) => Promise.reject(e));
}
function Je(t) {
  return we(`geoscene/libs/vxl/${t}`);
}
const k = ue.getLogger("geoscene.layers.VoxelWasmPerScene");
var d;
(function(t) {
  t[t.Lifetime = 1] = "Lifetime", t[t.RequestResponse = 2] = "RequestResponse", t[t.Rendering = 3] = "Rendering", t[t.Error = 4] = "Error";
})(d || (d = {}));
let Ke = class {
  constructor(e) {
    this._halfIntTexturesAvailable = !1, this._havePreparedWithAllLayers = !1, this._renderPluginContext = null, this._vxl = null, this._pluginIsActive = !1, this._moreToLoad = !1, this._viewportWidth = -1, this._viewportHeight = -1, this._newLayers = [], this._layers = /* @__PURE__ */ new Map(), this._renderPass = Ue.MATERIAL, this._renderSlot = Be.VOXEL, this._rctx = null, this._renderTargetToRestore = null, this._lastFrameWasStationary = !1, this._wasmMemBlockSizes = [512, 1024, 2048, 4096, 8192, 16384, 32768, 65536], this._wasmMemBlocks = /* @__PURE__ */ new Map(), this._dbgFlags = /* @__PURE__ */ new Set(), this._view = e, this._initialize();
  }
  get canRender() {
    return !!this._vxl && this._view.viewingMode === "local";
  }
  _dbg(e, i) {
    this._dbgFlags.has(e) && (e === d.Error ? k.error(i) : k.warn(i));
  }
  _removeRenderPlugin() {
    this._pluginIsActive && this._view._stage && (this._dbg(d.Lifetime, "--removeRenderPlugin--"), this._view._stage.removeRenderPlugin(this)), this._pluginIsActive = !1;
  }
  _initialize() {
    this._dbg(d.Lifetime, "--initialize--");
    for (const e of this._wasmMemBlockSizes)
      this._wasmMemBlocks.set(e, 0);
    this._readyWatchHandle = L(() => this._view.ready, (e) => {
      e && this._view.viewingMode === "local" ? (this._dbg(d.Lifetime, "view ready status changed to ready on a local view, calling addRenderPlugin"), this._view._stage.addRenderPlugin([this._renderSlot], this), this._pluginIsActive = !0) : (this._dbg(d.Lifetime, "view ready status changed, not ready or not a local view!"), this._removeRenderPlugin());
    }, { initial: !0 }), this._qualityWatchHandle = L(() => {
      var e;
      return (e = this._view) == null ? void 0 : e.qualityProfile;
    }, (e) => {
      this._dbg(d.Rendering, "qualityProfile changed to " + e), this._vxl && this._vxl.set_quality(this._toWasmQuality(e));
    }, { initial: !0 }), this._timeExtentWatchHandle = L(() => {
      var e;
      return (e = this._view) == null ? void 0 : e.timeExtent;
    }, () => {
      if (this._vxl) {
        var e;
        const i = this._getTimeArgs((e = this._view) == null ? void 0 : e.timeExtent);
        this._dbg(d.Rendering, "sceneView timeExtent changed to useTime=" + i.useTime + " st=" + i.startTime + " et=" + i.endTime), this._vxl.set_scene_time_extent(i.startTime, i.endTime, i.useTime), this._renderPluginContext.requestRender();
      }
    }, { initial: !0 }), this._stationaryWatchHandle = L(() => {
      var e;
      return (e = this._view) == null ? void 0 : e.stationary;
    }, (e) => {
      this._vxl && e && !this._lastFrameWasStationary && this._renderPluginContext.requestRender();
    });
  }
  initializeRenderContext(e) {
    this._dbg(d.Lifetime, "--initializeRenderContext--");
    const i = e.renderContext.rctx;
    i.type === Se.WEBGL2 ? (this._renderPluginContext = e, this._rctx = e.renderContext.rctx, this._halfIntTexturesAvailable = !!this._rctx.capabilities.textureNorm16, this._initializeWasm(i.gl)) : this._dbg(d.Error, "WebGL 1 context only!");
  }
  uninitializeRenderContext() {
    this._renderPluginContext = null, this._rctx = null, this._dbg(d.Lifetime, "--uninitializeRenderContext--");
  }
  _restoreFramebuffer() {
    if (!this._renderTargetToRestore)
      return;
    const e = this._renderTargetToRestore.fbo;
    if (!this._rctx)
      return void this._dbg(d.Error, "no context in restoreFramebuffer!");
    this._rctx.bindFramebuffer(e, !0);
    const i = this._renderTargetToRestore.viewport;
    this._rctx.setViewport(i.x, i.y, i.width, i.height);
  }
  _bindPreviousDepthToSlot(e, i) {
    const r = !!this._rctx, n = !!this._renderTargetToRestore;
    if (!r || !n)
      return 0;
    const l = this._renderTargetToRestore.fbo.depthStencilTexture;
    return l ? (i === 0 ? this._rctx.bindTexture(null, e, !0) : this._rctx.bindTexture(l, e, !0), 1) : (this._dbg(d.Error, "no depth/stencil texture exists!"), 0);
  }
  _modifyResourceCount(e, i, r) {
    if (!this._rctx)
      return void this._dbg(d.Error, "modifyAllocation callback has no rendering context!");
    const n = e;
    r === 1 ? this._rctx.instanceCounter.increment(n, i) : this._rctx.instanceCounter.decrement(n, i);
  }
  _setBlendState(e, i, r, n) {
    this._rctx ? (this._rctx.setBlendingEnabled(e === 1), this._rctx.setBlendFunction(i, r), this._rctx.setBlendEquation(n)) : this._dbg(d.Error, "setBlendState callback has no rendering context!");
  }
  _setFrontFace(e) {
    this._rctx ? this._rctx.setFrontFace(e) : this._dbg(d.Error, "setFrontFace callback has no rendering context!");
  }
  _setDepthStencilStateFunction(e, i, r) {
    this._rctx ? (this._rctx.setDepthFunction(r), this._rctx.setDepthTestEnabled(e === 1), this._rctx.setDepthWriteEnabled(i === 1), this._rctx.setStencilTestEnabled(!1), this._rctx.setStencilFunction(Oe.ALWAYS, 0, 255), this._rctx.setStencilOpSeparate(Y.FRONT, F.KEEP, F.INCR, F.KEEP), this._rctx.setStencilOpSeparate(Y.BACK, F.KEEP, F.DECR, F.KEEP)) : this._dbg(d.Error, "setDepthStencilStateFunction callback has no rendering context!");
  }
  _setRasterizerState(e) {
    if (this._rctx)
      switch (e) {
        case K.None:
          this._rctx.setFaceCullingEnabled(!1);
          break;
        case K.Back:
          this._rctx.setCullFace(Y.BACK), this._rctx.setFaceCullingEnabled(!0);
          break;
        case K.Front:
          this._rctx.setCullFace(Y.FRONT), this._rctx.setFaceCullingEnabled(!0);
      }
    else
      this._dbg(d.Error, "setRasterizerState callback has no rendering context!");
  }
  _setViewport(e, i, r, n) {
    this._rctx ? this._rctx.setViewport(e, i, r, n) : this._dbg(d.Error, "setViewport callback has no rendering context!");
  }
  _updateMemoryUsage() {
    this._layers.forEach((e, i) => {
      if (e.needMemoryUsageUpdate) {
        const r = this._vxl.estimate_memory_usage(i);
        r >= 0 && (e.needMemoryUsageUpdate = !1, e.layerView.setUsedMemory(r));
      }
    });
  }
  _syncRequestsResponses() {
    this._layers.forEach((e, i) => {
      const r = [];
      e.responses.forEach((p, _) => {
        r.push(_), this._dbg(d.RequestResponse, "responding for requestID:" + _ + " size:" + p.size), this._vxl.respond(i, _, p), p.requestType !== te.TreeIndex && p.requestType !== te.Section || (e.needMemoryUsageUpdate = !0);
      });
      const n = e.responses;
      for (const p of r)
        n.delete(p);
      const l = this._vxl.get_new_requests(i), a = e.abortController.signal;
      for (const p in l) {
        e.outstandingRequestCount += 1, e.outstandingRequestCount === 1 && e.layerView.updatingFlagChanged();
        const _ = l[p], N = { responseType: "array-buffer", signal: a };
        this._dbg(d.RequestResponse, "making requestID:" + p + " url:" + _.url), Ve(_.url, N).then((v) => {
          e.outstandingRequestCount -= 1, e.outstandingRequestCount === 0 && e.layerView.updatingFlagChanged(), this._dbg(d.RequestResponse, "have response for requestID:" + p);
          let V = 0;
          if (v.data.byteLength > 0) {
            V = this._vxl._malloc(v.data.byteLength);
            const T = new Uint8Array(this._vxl.HEAPU8.buffer, V, v.data.byteLength), se = new Uint8Array(v.data);
            for (let X = 0; X < v.data.byteLength; ++X)
              T[X] = se[X];
          }
          n.set(+p, { responseType: _.responseType, ptr: V, size: v.data.byteLength, success: !0, requestType: _.requestType });
        }).catch((v) => {
          e.outstandingRequestCount -= 1, e.outstandingRequestCount === 0 && e.layerView.updatingFlagChanged(), Te(v) || (this._dbg(d.Error, `requestID:${p} failed, error=${v.toString()}`), n.set(+p, { responseType: _.responseType, ptr: 0, size: 0, success: !1, requestType: _.requestType }));
        });
      }
    });
  }
  updateWasmCamera(e) {
    this._vxl.set_projection_matrix.apply(this._vxl, e.projectionMatrix), this._vxl.set_view_matrix.apply(this._vxl, e.viewMatrix), this._vxl.set_near_far(e.near, e.far);
  }
  isUpdating(e) {
    return !(this._vxl || !this._vxlPromise) || !!this._layers.has(e) && this._layers.get(e).outstandingRequestCount > 0;
  }
  setEnabled(e, i) {
    this._layers.forEach((r, n) => {
      r.layerView === e && (this._vxl.set_enabled(n, i), this._renderPluginContext.requestRender());
    });
  }
  setSlices(e, i) {
    const r = { mask: $.Slices, slices: { planes: i, currentEditPlane: -1 } };
    return this._doMaskedUIUpdate(e, r, !0);
  }
  setDynamicSections(e, i) {
    const r = { mask: $.DynamicSections, dynamicSections: { planes: i, currentEditPlane: -1 } };
    return this._doMaskedUIUpdate(e, r, !0);
  }
  setStaticSections(e, i) {
    const r = { mask: $.StaticSections, staticSections: i };
    return this._doMaskedUIUpdate(e, r, !0);
  }
  setCurrentVariable(e, i) {
    const r = { mask: $.CurrentVariable, currentVariable: i };
    return this._doMaskedUIUpdate(e, r, !0);
  }
  setRenderMode(e, i) {
    const r = { mask: $.RenderMode, renderMode: i };
    return this._doMaskedUIUpdate(e, r, !0);
  }
  _doMaskedUIUpdate(e, i, r) {
    if (!this._vxl)
      return !1;
    let n = !1;
    return this._layers.forEach((l, a) => {
      if (l.layerView === e) {
        const p = { str: JSON.stringify(i), byteCount: 0, ptr: 0, isReusable: !1 };
        this._allocateBlock(p) && (n = this._vxl.handle_masked_ui_update(a, p.ptr, p.byteCount) === 1, p.isReusable || this._vxl._free(p.ptr));
      }
    }), n && r && this._renderPluginContext.requestRender(), n;
  }
  addVoxelLayer(e) {
    if (!this._vxl) {
      const r = { layerView: e, resolveCallback: null, rejectCallback: null }, n = new Promise((l, a) => {
        r.resolveCallback = l, r.rejectCallback = a;
      });
      return this._newLayers.push(r), n;
    }
    const i = this._addVoxelLayer(e);
    return i < 0 ? Promise.reject(-1) : Promise.resolve(i);
  }
  removeVoxelLayer(e) {
    if (!this._vxl) {
      const n = this._newLayers.findIndex((a) => e === a.layerView);
      n >= 0 && (this._newLayers[n].resolveCallback(-1), this._newLayers.splice(n, 1));
      const l = this._newLayers.length;
      return l === 0 && (this._dbg(d.Lifetime, " no voxel layers left after removing a layer, removing RenderPlugin and destroying"), this.destroy()), l;
    }
    let i = -1;
    this._layers.forEach((n, l) => {
      n.layerView === e && (i = l, n.abortController.abort(), this._vxl.remove_layer(i));
    }), i >= 0 && this._layers.delete(i);
    const r = this._layers.size;
    return r === 0 && (this._dbg(d.Lifetime, " no voxel layers left after removing a layer, removing RenderPlugin and destroying"), this.destroy()), r;
  }
  _getBlockSize(e) {
    for (const i of this._wasmMemBlockSizes)
      if (e < i)
        return i;
    return -1;
  }
  _allocateBlock(e) {
    e.byteCount = this._vxl.lengthBytesUTF8(e.str) + 1;
    const i = this._getBlockSize(e.byteCount);
    return i < 0 ? (e.isReusable = !1, e.ptr = this._vxl._malloc(e.byteCount)) : (e.isReusable = !0, e.ptr = this._wasmMemBlocks.get(i), e.ptr === 0 && (e.ptr = this._vxl._malloc(i), this._wasmMemBlocks.set(i, e.ptr))), e.ptr !== 0 && (this._vxl.stringToUTF8(e.str, e.ptr, e.byteCount), !0);
  }
  _getTimeArgs(e) {
    let i = -Number.MAX_VALUE, r = Number.MAX_VALUE, n = !1;
    return f(e) && (e.isAllTime ? n = !0 : (f(e.start) && (n = !0, i = e.start.getTime() / 1e3), f(e.end) && (n = !0, r = e.end.getTime() / 1e3))), { startTime: i, endTime: r, useTime: n };
  }
  _addVoxelLayer(e) {
    var i;
    const r = e.layer;
    let n = -1;
    const l = r.getConfiguration();
    if (l.length < 1)
      return -1;
    const a = { str: l, byteCount: 0, ptr: 0, isReusable: !1 };
    if (!this._allocateBlock(a))
      return -1;
    const p = this._getTimeArgs((i = this._view) == null ? void 0 : i.timeExtent), _ = this._view.spatialReference.isWGS84 && r.spatialReference.isWGS84 ? 111319.49079327357 : 1;
    if (n = this._vxl.add_layer(r.serviceRoot, a.ptr, a.byteCount, _, _, p.startTime, p.endTime, p.useTime, this._toWasmQuality(this._view.qualityProfile)), a.isReusable || this._vxl._free(a.ptr), n >= 0) {
      const N = new AbortController();
      if (this._layers.set(n, { layerView: e, responses: /* @__PURE__ */ new Map(), outstandingRequestCount: 0, abortController: N, needMemoryUsageUpdate: !1 }), !this._halfIntTexturesAvailable || re("mac")) {
        const v = [];
        let V = "";
        for (const T of e.layer.variables)
          T.renderingFormat.type !== "Int16" && T.renderingFormat.type !== "UInt16" || (v.push(T.name), T.id === e.layer.style.currentVariableId && (V = T.name));
        V !== "" && k.error("#addVoxelLayer_error()", e.layer, `The voxel layer '${e.layer.title}' cannot render the current variable '${V}' in this browser`), v.length > 0 && k.warn("#addVoxelLayer_warning()", e.layer, `The voxel layer '${e.layer.title}' cannot render the variables '${v.toString()}' in this browser`);
      }
      return re("geoscene-mobile") && k.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."), n;
    }
    return -1;
  }
  prepareRender(e) {
    if (!this._vxl)
      return;
    const i = e.viewForward, r = e.eye;
    this._vxl.update_camera_pos_and_direction(r[0], r[1], r[2], i[0], i[1], i[2]);
    const n = this._vxl.cull();
    this._dbg(d.RequestResponse, "missingResourceCount=" + n), this._moreToLoad = n > 0, this._havePreparedWithAllLayers = this._newLayers.length === 0, this._updateMemoryUsage();
  }
  render(e) {
    if (!this._vxl || e.pass !== this._renderPass || e.slot !== this._renderSlot)
      return;
    for (const r of this._newLayers) {
      const n = this._addVoxelLayer(r.layerView);
      n === -1 ? r.rejectCallback(-1) : r.resolveCallback(n);
    }
    if (this._newLayers = [], this._layers.size === 0)
      return void this._dbg(d.Error, "No voxel layers but RenderPlugin instance is being asked to render!");
    this._renderTargetToRestore = { fbo: this._rctx.getBoundFramebufferObject(), viewport: this._rctx.getViewport() }, this._syncRequestsResponses(), this._lastFrameWasStationary = this._view.stationary, this._rctx.setPolygonOffsetFillEnabled(!1), this._rctx.setScissorTestEnabled(!1), this._rctx.setColorMask(!0, !0, !0, !0), this._vxl.begin_color_frame(!this._view.stationary || this._moreToLoad, e.scenelightingData.lightingMainDirection[0], e.scenelightingData.lightingMainDirection[1], e.scenelightingData.lightingMainDirection[2]);
    const i = this._renderTargetToRestore.viewport;
    i.width === this._viewportWidth && i.height === this._viewportHeight || (this._viewportWidth = i.width, this._viewportHeight = i.height, this._vxl.set_viewport(i.width, i.height), this._layers.forEach((r) => {
      r.needMemoryUsageUpdate = !0;
    })), i.x === 0 && i.y === 0 || this._dbg(d.Error, "Unsupported viewport parameters detected!"), this.updateWasmCamera(e.camera), this._vxl.draw(), this._renderTargetToRestore.fbo = null, e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(), this._vxl.get_active_texture_unit()), e.rctx.externalVertexArrayObjectUpdate(), e.rctx.externalVertexBufferUpdate(), this._rctx.externalProgramUpdate(), (this._moreToLoad || !this._havePreparedWithAllLayers && this._layers.size > 0) && this._renderPluginContext.requestRender();
  }
  destroy() {
    this._dbg(d.Lifetime, "--destroy--"), this._removeRenderPlugin(), this._readyWatchHandle = Z(this._readyWatchHandle), this._qualityWatchHandle = Z(this._qualityWatchHandle), this._timeExtentWatchHandle = Z(this._timeExtentWatchHandle), this._stationaryWatchHandle = Z(this._stationaryWatchHandle), this._vxl && (this._layers.forEach((e) => {
      e.abortController.abort();
    }), this._wasmMemBlocks.forEach((e) => {
      e !== 0 && this._vxl._free(e);
    }), this._vxl.uninitialize_voxel_wasm(), this._vxl = null);
  }
  _initializeWasm(e) {
    return this._vxl ? Promise.resolve() : (this._vxlPromise || (this._vxlPromise = Ge(e).then((i) => {
      var r;
      if (this._vxl = i, this._vxlPromise = null, this._newLayers.length <= 0)
        return this._dbg(d.Lifetime, " no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"), void this.destroy();
      const n = this._getTimeArgs((r = this._view) == null ? void 0 : r.timeExtent), l = this._vxl.addFunction(this._restoreFramebuffer.bind(this), "v"), a = this._vxl.addFunction(this._setBlendState.bind(this), "viiii"), p = this._vxl.addFunction(this._setFrontFace.bind(this), "vi"), _ = this._vxl.addFunction(this._setRasterizerState.bind(this), "vi"), N = this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this), "viii"), v = this._vxl.addFunction(this._setViewport.bind(this), "viiii"), V = this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this), "iii"), T = this._vxl.addFunction(this._modifyResourceCount.bind(this), "viii"), se = this._halfIntTexturesAvailable && !re("mac");
      this._vxl.initialize_voxel_wasm(l, a, p, _, N, v, V, T, n.startTime, n.endTime, n.useTime, se), this._renderPluginContext && this._renderPluginContext.requestRender();
    }).catch(() => {
      for (const i of this._newLayers)
        i.rejectCallback(-2);
      this._dbg(d.Error, " WASM failed to download, removing RenderPlugin and destroying"), this.destroy();
    })), this._vxlPromise);
  }
  pickDepth(e, i, r) {
    if (!this._vxl || !this._rctx || this._layers.size === 0)
      return null;
    const n = r.viewport[3] - i;
    if (e < 0 || e > r.viewport[2] || i < 0 || i > r.viewport[3])
      return this._dbg(d.Error, `pickDepth: outOfRange, screenXY=[${e}, ${n}], vp=[${r.viewport.toString()}]`), null;
    this._renderTargetToRestore = { fbo: this._rctx.getBoundFramebufferObject(), viewport: this._rctx.getViewport() };
    const l = r.viewForward, a = r.eye;
    this._vxl.update_camera_pos_and_direction(a[0], a[1], a[2], l[0], l[1], l[2]), this.updateWasmCamera(r), this._vxl.begin_frame();
    const p = this._vxl.pick_depth(e, n);
    return this._renderTargetToRestore.fbo = null, this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(), this._vxl.get_active_texture_unit()), this._rctx.externalVertexArrayObjectUpdate(), this._rctx.externalVertexBufferUpdate(), this._rctx.externalProgramUpdate(), p.success ? p.distanceToCamera : null;
  }
  _toWasmQuality(e) {
    switch (e) {
      case "low":
        return 0;
      case "medium":
        return 1;
      case "high":
        return 2;
    }
  }
}, D = class z {
  constructor() {
    this.view2WASM = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return z.instance || (z.instance = new z()), z.instance;
  }
  getVoxelWasmPerSceneView(e) {
    return this.view2WASM.has(e) ? this.view2WASM.get(e) : null;
  }
  isUpdating(e, i) {
    return !!this.view2WASM.has(e) && this.view2WASM.get(e).isUpdating(i);
  }
  addLayer(e, i) {
    return this.view2WASM.has(e) || this.view2WASM.set(e, new Ke(e)), this.view2WASM.get(e).addVoxelLayer(i);
  }
  removeLayer(e, i) {
    this.view2WASM.has(e) && this.view2WASM.get(e).removeVoxelLayer(i) < 1 && this.view2WASM.delete(e);
  }
  setLayerEnabled(e, i, r) {
    this.view2WASM.has(e) && this.view2WASM.get(e).setEnabled(i, r);
  }
  setLayerSlices(e, i) {
    let r = !1;
    return this.view2WASM.forEach((n, l) => {
      l.allLayerViews.filter((a) => a.type === "voxel-3d").forEach((a) => {
        a.layer === e && (r = n.setSlices(a, i));
      });
    }), r;
  }
  setLayerDynamicSections(e, i) {
    let r = !1;
    return this.view2WASM.forEach((n, l) => {
      l.allLayerViews.filter((a) => a.type === "voxel-3d").forEach((a) => {
        a.layer === e && (r = n.setDynamicSections(a, i));
      });
    }), r;
  }
  setLayerCurrentVariable(e, i) {
    let r = !1;
    return this.view2WASM.forEach((n, l) => {
      l.allLayerViews.filter((a) => a.type === "voxel-3d").forEach((a) => {
        a.layer === e && (r = n.setCurrentVariable(a, i));
      });
    }), r;
  }
  setLayerRenderMode(e, i) {
    let r = !1;
    return this.view2WASM.forEach((n, l) => {
      l.allLayerViews.filter((a) => a.type === "voxel-3d").forEach((a) => {
        a.layer === e && (r = n.setRenderMode(a, i));
      });
    }), r;
  }
  setLayerStaticSections(e, i) {
    let r = !1;
    return this.view2WASM.forEach((n, l) => {
      l.allLayerViews.filter((a) => a.type === "voxel-3d").forEach((a) => {
        a.layer === e && (r = n.setStaticSections(a, i));
      });
    }), r;
  }
}, M = class extends y {
  constructor() {
    super(...arguments), this.enabled = !0, this.label = "", this.normal = null, this.point = null;
  }
};
s([o({ type: Boolean, json: { default: !0, write: !0 } })], M.prototype, "enabled", void 0), s([o({ type: String, json: { write: !0 } })], M.prototype, "label", void 0), s([o({ type: [Number], json: { write: !0 } })], M.prototype, "normal", void 0), s([o({ type: [Number], json: { write: !0 } })], M.prototype, "point", void 0), M = s([u("geoscene.layers.support.VoxelDynamicSection")], M);
const ie = M;
let q = class extends y {
  constructor() {
    super(...arguments), this.enabled = !0, this.label = "", this.normal = null, this.point = null;
  }
};
s([o({ type: Boolean, json: { write: !0 } })], q.prototype, "enabled", void 0), s([o({ type: String, json: { write: !0 } })], q.prototype, "label", void 0), s([o({ type: [Number], json: { write: !0 } })], q.prototype, "normal", void 0), s([o({ type: [Number], json: { write: !0 } })], q.prototype, "point", void 0), q = s([u("geoscene.layers.support.VoxelSlice")], q);
const Q = q;
let g = class extends y {
  constructor() {
    super(...arguments), this.enabled = !0, this.href = null, this.id = null, this.label = "", this.normal = null, this.point = null, this.sizeInPixel = null, this.slices = null, this.timeId = 0, this.variableId = null;
  }
  readHref(e, i, r) {
    return Re(e, r);
  }
};
s([o({ type: Boolean, json: { default: !0, write: !0 } })], g.prototype, "enabled", void 0), s([o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "href", void 0), s([ce(["service", "web-scene"], "href")], g.prototype, "readHref", null), s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "id", void 0), s([o({ type: String, json: { write: !0 } })], g.prototype, "label", void 0), s([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "normal", void 0), s([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "point", void 0), s([o({ type: [S], json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "sizeInPixel", void 0), s([o({ type: [Q], json: { write: !0 } })], g.prototype, "slices", void 0), s([o({ type: S, json: { default: 0, write: !0 } })], g.prototype, "timeId", void 0), s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], g.prototype, "variableId", void 0), g = s([u("geoscene.layers.support.VoxelSection")], g);
const ye = g;
let U = class extends y {
  constructor() {
    super(...arguments), this.diffuseFactor = 0.5, this.specularFactor = 0.5;
  }
};
s([o({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: !0 } })], U.prototype, "diffuseFactor", void 0), s([o({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: !0 } })], U.prototype, "specularFactor", void 0), U = s([u("geoscene.layers.support.VoxelSimpleShading")], U);
const _e = U;
let A = class extends y {
  constructor() {
    super(...arguments), this.color = null, this.value = null, this.enabled = !0, this.label = null;
  }
};
s([o({ type: le, json: { type: [S], write: { enabled: !0, isRequired: !0 } } })], A.prototype, "color", void 0), s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], A.prototype, "value", void 0), s([o({ type: Boolean, json: { default: !0, write: !0 } })], A.prototype, "enabled", void 0), s([o({ type: String, json: { write: !0 } })], A.prototype, "label", void 0), A = s([u("geoscene.layers.support.VoxelIsosurface")], A);
const ve = A;
let B = class extends y {
  constructor() {
    super(...arguments), this.alpha = 0, this.position = 0;
  }
};
s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], B.prototype, "alpha", void 0), s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], B.prototype, "position", void 0), B = s([u("geoscene.layers.support.VoxelAlphaStop")], B);
const ge = B;
let O = class extends y {
  constructor() {
    super(...arguments), this.color = null, this.position = 0;
  }
};
s([o({ type: le, json: { type: [S], write: { enabled: !0, isRequired: !0 } } })], O.prototype, "color", void 0), s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], O.prototype, "position", void 0), O = s([u("geoscene.layers.support.VoxelColorStop")], O);
const me = O;
let H = class extends y {
  constructor() {
    super(...arguments), this.enabled = !1, this.range = null;
  }
};
s([o({ type: Boolean, json: { default: !1, write: !0 } })], H.prototype, "enabled", void 0), s([o({ type: [Number], json: { write: !0 } })], H.prototype, "range", void 0), H = s([u("geoscene.layers.support.VoxelRangeFilter")], H);
const Qe = H;
let E = class extends y {
  constructor(e) {
    super(e), this.interpolation = null, this.stretchRange = null, this.rangeFilter = null, this.colorStops = new h(), this.alphaStops = new h();
  }
  set colorStops(e) {
    this._set("colorStops", I(e, this._get("colorStops"), h.ofType(me)));
  }
  set alphaStops(e) {
    this._set("alphaStops", I(e, this._get("alphaStops"), h.ofType(ge)));
  }
};
s([o({ type: ["linear", "nearest"], json: { write: !0 } })], E.prototype, "interpolation", void 0), s([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], E.prototype, "stretchRange", void 0), s([o({ type: h.ofType(me), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.colorStops && this.colorStops.length > 0 };
} } } })], E.prototype, "colorStops", null), s([o({ type: h.ofType(ge), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.alphaStops && this.alphaStops.length > 0 };
} } } })], E.prototype, "alphaStops", null), s([o({ type: Qe, json: { write: !0 } })], E.prototype, "rangeFilter", void 0), E = s([u("geoscene.layers.support.VoxelTransferFunctionStyle")], E);
const Xe = E;
let P = class extends y {
  constructor() {
    super(...arguments), this.color = null, this.value = 0, this.enabled = !0, this.label = null;
  }
};
s([o({ type: le, json: { type: [S], write: { enabled: !0, isRequired: !0 } } })], P.prototype, "color", void 0), s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], P.prototype, "value", void 0), s([o({ type: Boolean, json: { default: !0, write: !0 } })], P.prototype, "enabled", void 0), s([o({ type: String, json: { write: !0 } })], P.prototype, "label", void 0), P = s([u("geoscene.layers.support.VoxelUniqueValue")], P);
const be = P;
let C = class extends y {
  constructor(e) {
    super(e), this.variableId = 0, this.label = null, this.transferFunction = null, this.uniqueValues = new h(), this.isosurfaces = new h();
  }
  set uniqueValues(e) {
    this._set("uniqueValues", I(e, this._get("uniqueValues"), h.ofType(be)));
  }
  set isosurfaces(e) {
    this._set("isosurfaces", I(e, this._get("isosurfaces"), h.ofType(ve)));
  }
};
s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], C.prototype, "variableId", void 0), s([o({ type: String, json: { write: !0 } })], C.prototype, "label", void 0), s([o({ type: Xe, json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !this.uniqueValues || this.uniqueValues.length < 1 };
} } } })], C.prototype, "transferFunction", void 0), s([o({ type: h.ofType(be), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.uniqueValues && this.uniqueValues.length > 0 };
} } } })], C.prototype, "uniqueValues", null), s([o({ type: h.ofType(ve), json: { write: { enabled: !0, overridePolicy() {
  const t = !this.uniqueValues || this.uniqueValues.length < 1, e = !!this.isosurfaces && this.isosurfaces.length > 0;
  return { enabled: t && e };
} } } })], C.prototype, "isosurfaces", null), C = s([u("geoscene.layers.support.VoxelVariableStyle")], C);
const xe = C;
let R = class extends y {
  constructor(e) {
    super(e), this.volumeId = 0, this.verticalExaggeration = 1, this.exaggerationMode = "scale-height", this.verticalOffset = 0, this.slices = new h(), this.dynamicSections = new h();
  }
  set slices(e) {
    this._set("slices", I(e, this._get("slices"), h.ofType(Q)));
  }
  set dynamicSections(e) {
    this._set("dynamicSections", I(e, this._get("dynamicSections"), h.ofType(ie)));
  }
};
s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], R.prototype, "volumeId", void 0), s([o({ type: Number, json: { default: 1, write: !0 } })], R.prototype, "verticalExaggeration", void 0), s([o({ type: ["scale-position", "scale-height"], json: { default: "scale-height", write: !0 } })], R.prototype, "exaggerationMode", void 0), s([o({ type: Number, json: { default: 0, write: !0 } })], R.prototype, "verticalOffset", void 0), s([o({ type: h.ofType(Q), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.slices && this.slices.length > 0 };
} } } })], R.prototype, "slices", null), s([o({ type: h.ofType(ie), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.dynamicSections && this.dynamicSections.length > 0 };
} } } })], R.prototype, "dynamicSections", null), R = s([u("geoscene.layers.support.VoxelVolumeStyle")], R);
const fe = R;
let b = class extends y {
  constructor(t) {
    super(t), this.currentVariableId = 0, this.renderMode = "volume", this.enableSlices = !0, this.enableSections = !0, this.enableDynamicSections = !0, this.enableIsosurfaces = !0, this.shading = new _e(), this.volumeStyles = new h(), this.variableStyles = new h();
  }
  set volumeStyles(t) {
    this._set("volumeStyles", I(t, this._get("volumeStyles"), h.ofType(fe)));
  }
  set variableStyles(t) {
    this._set("variableStyles", I(t, this._get("variableStyles"), h.ofType(xe)));
  }
};
s([o({ type: h.ofType(fe), json: { write: !0 } })], b.prototype, "volumeStyles", null), s([o({ type: S, json: { write: { enabled: !0, isRequired: !0 } } })], b.prototype, "currentVariableId", void 0), s([o({ type: ["volume", "surfaces"], json: { write: !0 } })], b.prototype, "renderMode", void 0), s([o({ type: h.ofType(xe), json: { write: !0 } })], b.prototype, "variableStyles", null), s([o({ type: Boolean, json: { write: !0 } })], b.prototype, "enableSlices", void 0), s([o({ type: Boolean, json: { write: !0 } })], b.prototype, "enableSections", void 0), s([o({ type: Boolean, json: { write: !0 } })], b.prototype, "enableDynamicSections", void 0), s([o({ type: Boolean, json: { write: !0 } })], b.prototype, "enableIsosurfaces", void 0), s([o({ type: _e, json: { write: !0 } })], b.prototype, "shading", void 0), b = s([u("geoscene.layers.support.VoxelStyle")], b);
const Ze = b;
let j = class extends y {
  constructor() {
    super(...arguments), this.continuity = null, this.hasNoData = !1, this.noData = 0, this.offset = 0, this.scale = 1, this.type = null;
  }
};
s([o({ type: ["discrete", "continuous"], json: { write: !0 } })], j.prototype, "continuity", void 0), s([o({ type: Boolean, json: { write: !0 } })], j.prototype, "hasNoData", void 0), s([o({ type: Number, json: { write: !0 } })], j.prototype, "noData", void 0), s([o({ type: Number, json: { write: !0 } })], j.prototype, "offset", void 0), s([o({ type: Number, json: { write: !0 } })], j.prototype, "scale", void 0), s([o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], j.prototype, "type", void 0), j = s([u("geoscene.layers.support.VoxelFormat")], j);
const pe = j;
let w = class extends y {
  constructor() {
    super(...arguments), this.id = null, this.description = "", this.name = null, this.originalFormat = null, this.renderingFormat = null, this.unit = "", this.volumeId = 0, this.type = null;
  }
};
s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], w.prototype, "id", void 0), s([o({ type: String, json: { write: !0 } })], w.prototype, "description", void 0), s([o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], w.prototype, "name", void 0), s([o({ type: pe, json: { write: !0 } })], w.prototype, "originalFormat", void 0), s([o({ type: pe, json: { write: { enabled: !0, isRequired: !0 } } })], w.prototype, "renderingFormat", void 0), s([o({ type: String, json: { write: !0 } })], w.prototype, "unit", void 0), s([o({ type: Number, json: { write: !0 } })], w.prototype, "volumeId", void 0), s([o({ type: ["stc-hot-spot-results", "stc-cluster-outlier-results", "stc-estimated-bin", "generic-nearest-interpolated"], json: { write: !0 } })], w.prototype, "type", void 0), w = s([u("geoscene.layers.support.VoxelVariable")], w);
const Ye = w;
let ee = class extends y {
  constructor() {
    super(...arguments), this.values = null;
  }
};
s([o({ type: [Number], json: { write: !0 } })], ee.prototype, "values", void 0), ee = s([u("geoscene.layers.support.VoxelIrregularSpacing")], ee);
const et = ee;
let G = class extends y {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = 0;
  }
};
s([o({ type: Number, json: { write: !0 } })], G.prototype, "scale", void 0), s([o({ type: Number, json: { write: !0 } })], G.prototype, "offset", void 0), G = s([u("geoscene.layers.support.VoxelRegularSpacing")], G);
const tt = G;
let x = class extends y {
  constructor() {
    super(...arguments), this.irregularSpacing = null, this.isPositiveUp = null, this.isWrappedDateLine = null, this.label = null, this.name = null, this.quantity = null, this.regularSpacing = null, this.size = 0, this.unit = null;
  }
};
s([o({ type: et, json: { write: !0 } })], x.prototype, "irregularSpacing", void 0), s([o({ type: Boolean, json: { write: !0 } })], x.prototype, "isPositiveUp", void 0), s([o({ type: Boolean, json: { write: !0 } })], x.prototype, "isWrappedDateLine", void 0), s([o({ type: String, json: { write: !0 } })], x.prototype, "label", void 0), s([o({ type: String, json: { write: !0 } })], x.prototype, "name", void 0), s([o({ type: String, json: { write: !0 } })], x.prototype, "quantity", void 0), s([o({ type: tt, json: { write: !0 } })], x.prototype, "regularSpacing", void 0), s([o({ type: Number, json: { write: !0 } })], x.prototype, "size", void 0), s([o({ type: String, json: { write: !0 } })], x.prototype, "unit", void 0), x = s([u("geoscene.layers.support.VoxelDimension")], x);
const it = x;
let J = class extends y {
  constructor() {
    super(...arguments), this.id = 0, this.dimensions = null;
  }
  getZDimension() {
    if (!this.dimensions || !Array.isArray(this.dimensions) || this.dimensions.length !== 4)
      return -1;
    for (let e = 2; e < 4; ++e)
      if (this.dimensions[e].size > 0)
        return e;
    return -1;
  }
  isVolumeValid() {
    return !!this.dimensions && !!Array.isArray(this.dimensions) && this.dimensions.length === 4 && !(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) && this.getZDimension() !== -1;
  }
};
s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], J.prototype, "id", void 0), s([o({ type: [it], json: { write: { enabled: !0, isRequired: !0 } } })], J.prototype, "dimensions", void 0), J = s([u("geoscene.layers.support.VoxelVolume")], J);
const st = J;
var ae;
let W = ae = class extends y {
  constructor() {
    super(...arguments), this.apronWidth = 1, this.brickSize = [32, 32, 32], this.maxLodLevel = 0, this.nodeSize = [4, 4, 4];
  }
  isValid() {
    const t = new ae();
    return t.apronWidth === this.apronWidth && t.maxLodLevel === this.maxLodLevel && !!this.brickSize && !!this.nodeSize && !(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) && this.brickSize.length === 3 && this.nodeSize.length === 3 && this.brickSize[0] === 32 && this.brickSize[1] === 32 && this.brickSize[2] === 32 && this.nodeSize[0] === 4 && this.nodeSize[1] === 4 && this.nodeSize[2] === 4;
  }
};
s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], W.prototype, "apronWidth", void 0), s([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], W.prototype, "brickSize", void 0), s([o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], W.prototype, "maxLodLevel", void 0), s([o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], W.prototype, "nodeSize", void 0), W = ae = s([u("geoscene.layers.support.VoxelVolumeIndex")], W);
const rt = W, ne = ue.getLogger(" geoscene.layers.VoxelLayer");
var m;
(function(t) {
  t[t.API = 1] = "API", t[t.VerboseAPI = 2] = "VerboseAPI", t[t.Error = 3] = "Error";
})(m || (m = {}));
let c = class extends He(je(Le(Ee(Ce(Ie(Me(ze))))))) {
  constructor(t) {
    super(t), this.serviceRoot = "", this.popupEnabled = !0, this.operationalLayerType = "Voxel", this.legendEnabled = !0, this.title = null, this.sections = new h(), this.style = null, this.opacity = 1, this.variables = new h(), this.volumes = new h(), this.index = null, this.minScale = 0, this.maxScale = 0, this.type = "voxel", this._dbgFlags = /* @__PURE__ */ new Set(), this._handles = new qe(), this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" };
  }
  set url(t) {
    this._set("url", Ae(t, ne));
  }
  destroy() {
    this._handles = Pe(this._handles);
  }
  _dbg(t, e) {
    this._dbgFlags.has(t) && (t === m.Error ? ne.error(e) : ne.warn(e));
  }
  load(t) {
    const e = f(t) ? t.signal : null, i = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, t).catch(We).then(() => this._fetchService(e)).then(() => this.serviceRoot = this.url);
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  getConfiguration() {
    this._handles.add([L(() => this._getRenderMode(), (e) => this._pushRenderModeToWasm(e)), L(() => this._getCurrentVariableId(), (e) => this._pushCurrentVariableIdToWasm(e)), L(() => this._getDynamicSections(), (e) => this._pushDynamicSectionsToWasm(e)), L(() => this._getSlices(), (e) => this._pushSlicesToWasm(e)), L(() => this._getSections(), (e) => this._pushSectionsToWasm(e))]);
    const t = { layerType: this.operationalLayerType, version: this.version.versionString, name: this.title, spatialReference: this.spatialReference, fullExtent: this.fullExtent, volumes: this.volumes.toJSON(), variables: this.variables.toJSON(), index: this.index.toJSON(), sections: this.sections.toJSON(), style: this.style };
    return t.index && this.index.isValid() ? JSON.stringify(t) : "";
  }
  readVersion(t, e) {
    return super.parseVersionString(t);
  }
  _getSections() {
    const t = [];
    for (const e of this.sections)
      t.push(new ye({ enabled: e.enabled, href: e.href, id: e.id, label: e.label, normal: e.normal, point: e.point, sizeInPixel: e.sizeInPixel, slices: e.slices, timeId: e.timeId, variableId: e.variableId }));
    return t;
  }
  _pushSectionsToWasm(t) {
    this._dbg(m.VerboseAPI, "VoxelLayer._pushSectionsToWasm() called"), D.getInstance().setLayerStaticSections(this, t) || this._dbg(m.Error, "VoxelLayer._pushSectionsToWasm() failed!");
  }
  _isPlaneValid(t, e, i) {
    if (!t.point || !Array.isArray(t.point) || t.point.length !== 3 || !t.normal || !Array.isArray(t.normal) || t.normal.length !== 3)
      return !1;
    for (let l = 0; l < 3; ++l) {
      const a = t.point[l];
      if (a < 0 || a >= i[e[l]].size)
        return !1;
    }
    const r = $e(t.normal[0], t.normal[1], t.normal[2]);
    Fe(r, r);
    const n = 1e-6;
    return !(Math.abs(r[0]) + Math.abs(r[1]) + Math.abs(r[2]) < n) && (t.normal[0] = r[0], t.normal[1] = r[1], t.normal[2] = r[2], !0);
  }
  getVariableStyle(t) {
    let e = -1;
    if (e = f(t) ? t : this._getCurrentVariableId(), !(this != null && this.style.variableStyles) || e === -1)
      return null;
    const i = this.style.variableStyles.findIndex((r) => r.variableId === e);
    return i < 0 ? null : this.style.variableStyles.getItemAt(i);
  }
  getVariable(t) {
    let e = -1;
    if (e = f(t) ? t : this._getCurrentVariableId(), !this.variables || e === -1)
      return null;
    const i = this.variables.findIndex((r) => r.id === e);
    return i < 0 ? null : this.variables.getItemAt(i);
  }
  getVolume(t) {
    const e = this.getVariable(t);
    return f(e) ? this.volumes.find(({ id: i }) => i === e.volumeId) : null;
  }
  validateLayer(t) {
    if (t.layerType && t.layerType !== this.operationalLayerType)
      throw new oe("voxel-layer:layer-type-not-supported", "VoxelLayer does not support this layer type", { layerType: t.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor) || this.version.major < 3)
      throw new oe("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
    if (this.version.major > 3)
      throw new oe("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
  }
  _getVolumeStyle(t) {
    const e = this.getVariable(t);
    return f(e) ? this.style.volumeStyles.find(({ volumeId: i }) => i === e.volumeId) : null;
  }
  _getSlices() {
    const t = [], e = this.getVolume(null);
    if (!f(e) || !e.isVolumeValid())
      return t;
    const i = this._getVolumeStyle(null);
    if (!f(i))
      return t;
    for (const r of i.slices)
      this._isPlaneValid(r, [0, 1, e.getZDimension()], e.dimensions) ? t.push(new Q({ enabled: r.enabled, label: r.label, point: r.point, normal: r.normal })) : t.push(new Q({ enabled: !1, label: "invalid", point: r.point, normal: r.normal }));
    return t;
  }
  _pushSlicesToWasm(t) {
    this._dbg(m.VerboseAPI, "VoxelLayer._pushSlicesToWasm() called!"), D.getInstance().setLayerSlices(this, t) || this._dbg(m.Error, "VoxelLayer._pushSlicesToWasm() failed!");
  }
  _getDynamicSections() {
    const t = [], e = this.getVolume(null);
    if (!f(e) || !e.isVolumeValid())
      return t;
    const i = this._getVolumeStyle(null);
    if (!f(i))
      return t;
    for (const r of i.dynamicSections)
      this._isPlaneValid(r, [0, 1, e.getZDimension()], e.dimensions) ? t.push(new ie({ enabled: r.enabled, label: r.label, point: r.point, normal: r.normal })) : t.push(new ie({ enabled: !1, label: "invalid", point: r.point, normal: r.normal }));
    return t;
  }
  _pushDynamicSectionsToWasm(t) {
    this._dbg(m.VerboseAPI, "VoxelLayer._pushDynamicSectionsToWasm() called!"), D.getInstance().setLayerDynamicSections(this, t) || this._dbg(m.Error, "VoxelLayer._updateDynamicSections() failed!");
  }
  _getCurrentVariableId() {
    return this.style ? this.style.currentVariableId : -1;
  }
  _pushCurrentVariableIdToWasm(t) {
    this._dbg(m.VerboseAPI, "VoxelLayer._pushCurrentVariableIdToWasm() called!"), D.getInstance().setLayerCurrentVariable(this, t) || this._dbg(m.Error, "VoxelLayer._pushCurrentVariableIdToWasm() failed!");
  }
  _getRenderMode() {
    return this.style ? this.style.renderMode : "volume";
  }
  _pushRenderModeToWasm(t) {
    this._dbg(m.VerboseAPI, "VoxelLayer._pushRenderModeToWasm() called!"), D.getInstance().setLayerRenderMode(this, t) || this._dbg(m.Error, "VoxelLayer.setLayerRenderMode() failed!");
  }
};
s([o(Ne)], c.prototype, "popupEnabled", void 0), s([o({ type: ["Voxel"] })], c.prototype, "operationalLayerType", void 0), s([o(ke)], c.prototype, "legendEnabled", void 0), s([o({ json: { write: !0 } })], c.prototype, "title", void 0), s([o(De)], c.prototype, "url", null), s([o({ type: h.ofType(ye), json: { write: !0, origins: { "web-scene": { name: "layerDefinition.sections", write: !0 }, service: { write: !1 } } } })], c.prototype, "sections", void 0), s([o({ type: Ze, json: { write: !0, origins: { "web-scene": { name: "layerDefinition.style", write: !0 }, service: { write: !1 } } } })], c.prototype, "style", void 0), s([o({ type: ["show", "hide"] })], c.prototype, "listMode", void 0), s([o({ type: Number, range: { min: 0, max: 1 }, nonNullable: !0, json: { read: !1, write: !1, origins: { "web-scene": { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 } } } })], c.prototype, "opacity", void 0), s([o({ type: h.ofType(Ye) })], c.prototype, "variables", void 0), s([o({ type: h.ofType(st) })], c.prototype, "volumes", void 0), s([o({ type: rt })], c.prototype, "index", void 0), s([o({ type: Number, json: { name: "layerDefinition.minScale", read: !1, write: !1, origins: { service: { read: !1, write: !1 } } } })], c.prototype, "minScale", void 0), s([o({ type: Number, json: { name: "layerDefinition.maxScale", read: !1, write: !1, origins: { service: { read: !1, write: !1 } } } })], c.prototype, "maxScale", void 0), s([o({ json: { read: !1 }, readOnly: !0 })], c.prototype, "type", void 0), s([o({ readOnly: !0, json: { name: "serviceVersion" } })], c.prototype, "version", void 0), s([ce("service", "version")], c.prototype, "readVersion", null), c = s([u("geoscene.layers.VoxelLayer")], c);
const Ct = c;
export {
  Ct as default
};
