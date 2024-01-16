var r;
(function(e) {
  e.AsyncNotEnabled = "AsyncNotEnabled", e.ModulesNotSupported = "ModulesNotSupported", e.CircularModules = "CircularModules", e.NeverReach = "NeverReach", e.UnsupportedHashType = "UnsupportedHashType", e.InvalidParameter = "InvalidParameter", e.UnexpectedToken = "UnexpectedToken", e.Unrecognised = "Unrecognised", e.UnrecognisedType = "UnrecognisedType", e.MaximumCallDepth = "MaximumCallDepth", e.BooleanConditionRequired = "BooleanConditionRequired", e.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e.KeyMustBeString = "KeyMustBeString", e.WrongNumberOfParameters = "WrongNumberOfParameters", e.CallNonFunction = "CallNonFunction", e.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e.NoFunctionInDictionary = "NoFunctionInDictionary", e.NoFunctionInArray = "NoFunctionInArray", e.AssignModuleFunction = "AssignModuleFunction", e.LogicExpressionOrAnd = "LogicExpressionOrAnd", e.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e.FunctionNotFound = "FunctionNotFound", e.InvalidMemberAccessKey = "InvalidMemberAccessKey", e.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e.InvalidIdentifier = "InvalidIdentifier", e.MemberOfNull = "MemberOfNull", e.UnsupportedOperator = "UnsupportedOperator", e.Cancelled = "Cancelled", e.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e.ModuleExportNotFound = "ModuleExportNotFound", e.Immutable = "Immutable", e.OutOfBounds = "OutOfBounds", e.IllegalResult = "IllegalResult", e.FieldNotFound = "FieldNotFound", e.PortalRequired = "PortalRequired", e.LogicError = "LogicError", e.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e.KeyAccessorMustBeString = "KeyAccessorMustBeString", e.WrongSpatialReference = "WrongSpatialReference";
})(r || (r = {}));
const l = { [r.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.", [r.LogicError]: "Logic error - {reason}", [r.NeverReach]: "Encountered unreachable logic", [r.AsyncNotEnabled]: "Async Arcade must be enabled for this script", [r.ModuleAccessorMustBeString]: "Module accessor must be a string", [r.ModuleExportNotFound]: "Module has no export with provided identifier", [r.ModulesNotSupported]: "Current profile does not support modules", [r.ArrayAccessorMustBeNumber]: "Array accessor must be a number", [r.FunctionNotFound]: "Function not found", [r.FieldNotFound]: "Key not found - {key}", [r.CircularModules]: "Circular module dependencies are not allowed", [r.Cancelled]: "Execution cancelled", [r.UnsupportedHashType]: "Type not supported in hash function", [r.IllegalResult]: "Value is not a supported return type", [r.PortalRequired]: "Portal is required", [r.InvalidParameter]: "Invalid parameter", [r.WrongNumberOfParameters]: "Call with wrong number of parameters", [r.Unrecognised]: "Unrecognised code structure", [r.UnrecognisedType]: "Unrecognised type", [r.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference", [r.BooleanConditionRequired]: "Conditions must use booleans", [r.NoFunctionInDictionary]: "Dictionaries cannot contain functions.", [r.NoFunctionInArray]: "Arrays cannot contain functions.", [r.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.", [r.KeyAccessorMustBeString]: "Accessor must be a string", [r.KeyMustBeString]: "Object keys must be a string", [r.Immutable]: "Object is immutable", [r.UnexpectedToken]: "Unexpected token", [r.MemberOfNull]: "Cannot access property of null object", [r.MaximumCallDepth]: "Exceeded maximum function depth", [r.OutOfBounds]: "Out of bounds", [r.InvalidIdentifier]: "Identifier not recognised", [r.CallNonFunction]: "Expression is not a function", [r.InvalidMemberAccessKey]: "Cannot access value using a key of this type", [r.AssignModuleFunction]: "Cannot assign function to module variable", [r.UnsupportedUnaryOperator]: "Unsupported unary operator", [r.UnsupportedOperator]: "Unsupported operator", [r.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean", [r.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&" };
class y extends Error {
  constructor(...n) {
    super(...n);
  }
}
class s extends y {
  constructor(n, o) {
    super(i(o) + n.message, { cause: n }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, s), o && o.loc && (this.loc = o.loc);
  }
}
class d extends Error {
  constructor(n, o, t, c) {
    super("Execution error - " + i(t) + u(l[o], c)), this.loc = null, this.declaredRootClass = "geoscene.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, d), t && t.loc && (this.loc = t.loc);
  }
}
function i(e) {
  var n, o;
  return e && e.loc ? `Line : ${(n = e.loc.start) == null ? void 0 : n.line}, ${(o = e.loc.start) == null ? void 0 : o.column}: ` : "";
}
class p extends Error {
  constructor(n, o, t, c) {
    super("Compilation error - " + i(t) + u(l[o], c)), this.loc = null, this.declaredRootClass = "geoscene.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, p), t && t.loc && (this.loc = t.loc);
  }
}
class g extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "geoscene.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, g);
  }
}
function u(e, n) {
  try {
    if (!n)
      return e;
    for (const o in n) {
      let t = n[o];
      t || (t = ""), e = e.replace("{" + o + "}", n[o]);
    }
  } catch {
  }
  return e;
}
function b(e, n, o) {
  return o.declaredRootClass === "geoscene.arcade.arcadeexecutionerror" || o.declaredRootClass === "geoscene.arcade.arcadecompilationerror" ? o.loc === null && n && n.loc ? new s(o, { cause: o }) : o : (o.declaredRootClass === "geoscene.arcade.featureset.support.featureseterror" || o.declaredRootClass === "geoscene.arcade.featureset.support.sqlerror" || o.declaredRootClass, n && n.loc ? new s(o, { cause: o }) : o);
}
var a;
(function(e) {
  e.UnrecognisedUri = "UnrecognisedUri", e.UnsupportedUriProtocol = "UnsupportedUriProtocol";
})(a || (a = {}));
const f = { [a.UnrecognisedUri]: "Unrecognised uri - {uri}", [a.UnsupportedUriProtocol]: "Unrecognised uri protocol" };
class m extends Error {
  constructor(n, o) {
    super(u(f[n], o)), this.declaredRootClass = "geoscene.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, m);
  }
}
export {
  p as a,
  g as c,
  r as e,
  u as i,
  a as l,
  m as p,
  d as t,
  b as u
};
