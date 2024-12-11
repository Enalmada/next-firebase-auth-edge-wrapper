'use client';

var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require__interop_require_default = __commonJS((exports) => {
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports._ = _interop_require_default;
});

// node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
import * as react from "react";
var require_app_router_context_shared_runtime = __commonJS((exports) => {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    AppRouterContext: function() {
      return AppRouterContext;
    },
    GlobalLayoutRouterContext: function() {
      return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function() {
      return LayoutRouterContext;
    },
    MissingSlotContext: function() {
      return MissingSlotContext;
    },
    TemplateContext: function() {
      return TemplateContext;
    }
  });
  var _interop_require_default = require__interop_require_default();
  var _react = /* @__PURE__ */ _interop_require_default._(react);
  var AppRouterContext = _react.default.createContext(null);
  var LayoutRouterContext = _react.default.createContext(null);
  var GlobalLayoutRouterContext = _react.default.createContext(null);
  var TemplateContext = _react.default.createContext(null);
  if (false) {
  }
  var MissingSlotContext = _react.default.createContext(new Set);
});

// node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
import * as _react from "react";
var require_hooks_client_context_shared_runtime = __commonJS((exports) => {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    PathParamsContext: function() {
      return PathParamsContext;
    },
    PathnameContext: function() {
      return PathnameContext;
    },
    SearchParamsContext: function() {
      return SearchParamsContext;
    }
  });
  var SearchParamsContext = (0, _react.createContext)(null);
  var PathnameContext = (0, _react.createContext)(null);
  var PathParamsContext = (0, _react.createContext)(null);
  if (false) {
  }
});

// node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
      return getSegmentValue;
    }
  });
  function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
      return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
      return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
      return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
      return isGroupSegment;
    }
  });
  function isGroupSegment(segment) {
    return segment[0] === "(" && segment.endsWith(")");
  }
  function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
      const stringifiedQuery = JSON.stringify(searchParams);
      return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
  }
  var PAGE_SEGMENT_KEY = "__PAGE__";
  var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
});

// node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    bindSnapshot: function() {
      return bindSnapshot;
    },
    createAsyncLocalStorage: function() {
      return createAsyncLocalStorage;
    },
    createSnapshot: function() {
      return createSnapshot;
    }
  });
  var sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");

  class FakeAsyncLocalStorage {
    disable() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
      return;
    }
    run() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
      return fn;
    }
  }
  var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
  function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
      return new maybeGlobalAsyncLocalStorage;
    }
    return new FakeAsyncLocalStorage;
  }
  function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
      return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
  }
  function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
      return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
      return fn(...args);
    };
  }
});

// node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "actionAsyncStorage", {
    enumerable: true,
    get: function() {
      return actionAsyncStorage;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
});

// node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "actionAsyncStorage", {
    enumerable: true,
    get: function() {
      return _actionasyncstorageinstance.actionAsyncStorage;
    }
  });
  var _actionasyncstorageinstance = require_action_async_storage_instance();
});

// node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
      return RedirectStatusCode;
    }
  });
  var RedirectStatusCode;
  (function(RedirectStatusCode2) {
    RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
  })(RedirectStatusCode || (RedirectStatusCode = {}));
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    RedirectType: function() {
      return RedirectType;
    },
    getRedirectError: function() {
      return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
      return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
      return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
      return getURLFromRedirectError;
    },
    isRedirectError: function() {
      return isRedirectError;
    },
    permanentRedirect: function() {
      return permanentRedirect;
    },
    redirect: function() {
      return redirect;
    }
  });
  var _actionasyncstorageexternal = require_action_async_storage_external();
  var _redirectstatuscode = require_redirect_status_code();
  var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
  var RedirectType;
  (function(RedirectType2) {
    RedirectType2["push"] = "push";
    RedirectType2["replace"] = "replace";
  })(RedirectType || (RedirectType = {}));
  function getRedirectError(url, type, statusCode) {
    if (statusCode === undefined)
      statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
  }
  function redirect(url, type) {
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    const redirectType = type || ((actionStore == null ? undefined : actionStore.isAction) ? "push" : "replace");
    throw getRedirectError(url, redirectType, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
  }
  function permanentRedirect(url, type) {
    if (type === undefined)
      type = "replace";
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
  }
  function isRedirectError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
      return false;
    }
    const digest = error.digest.split(";");
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(";");
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
  }
  function getURLFromRedirectError(error) {
    if (!isRedirectError(error))
      return null;
    return error.digest.split(";").slice(2, -2).join(";");
  }
  function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
      throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
  }
  function getRedirectStatusCodeFromError(error) {
    if (!isRedirectError(error)) {
      throw new Error("Not a redirect error");
    }
    return Number(error.digest.split(";").at(-2));
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    isNotFoundError: function() {
      return isNotFoundError;
    },
    notFound: function() {
      return notFound;
    }
  });
  var NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
  function notFound() {
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
  }
  function isNotFoundError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error)) {
      return false;
    }
    return error.digest === NOT_FOUND_ERROR_CODE;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    DynamicServerError: function() {
      return DynamicServerError;
    },
    isDynamicServerError: function() {
      return isDynamicServerError;
    }
  });
  var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";

  class DynamicServerError extends Error {
    constructor(description) {
      super("Dynamic server usage: " + description);
      this.description = description;
      this.digest = DYNAMIC_ERROR_CODE;
    }
  }
  function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
      return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    BailoutToCSRError: function() {
      return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
      return isBailoutToCSRError;
    }
  });
  var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";

  class BailoutToCSRError extends Error {
    constructor(reason) {
      super("Bail out to client-side rendering: " + reason);
      this.reason = reason;
      this.digest = BAILOUT_TO_CSR;
    }
  }
  function isBailoutToCSRError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err)) {
      return false;
    }
    return err.digest === BAILOUT_TO_CSR;
  }
});

// node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
      return isNextRouterError;
    }
  });
  var _notfound = require_not_found();
  var _redirect = require_redirect();
  function isNextRouterError(error) {
    return (0, _redirect.isRedirectError)(error) || (0, _notfound.isNotFoundError)(error);
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    StaticGenBailoutError: function() {
      return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
      return isStaticGenBailoutError;
    }
  });
  var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";

  class StaticGenBailoutError extends Error {
    constructor(...args) {
      super(...args);
      this.code = NEXT_STATIC_GEN_BAILOUT;
    }
  }
  function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
      return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workUnitAsyncStorage", {
    enumerable: true,
    get: function() {
      return workUnitAsyncStorage;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var workUnitAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
});

// node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    getExpectedRequestStore: function() {
      return getExpectedRequestStore;
    },
    workUnitAsyncStorage: function() {
      return _workunitasyncstorageinstance.workUnitAsyncStorage;
    }
  });
  var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
  function getExpectedRequestStore(callingExpression) {
    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
      if (workUnitStore.type === "request") {
        return workUnitStore;
      }
      if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-ppr" || workUnitStore.type === "prerender-legacy") {
        throw new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`);
      }
      if (workUnitStore.type === "cache") {
        throw new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
      } else if (workUnitStore.type === "unstable-cache") {
        throw new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
      }
    }
    throw new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
  }
});

// node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workAsyncStorage", {
    enumerable: true,
    get: function() {
      return workAsyncStorage;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var workAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
});

// node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workAsyncStorage", {
    enumerable: true,
    get: function() {
      return _workasyncstorageinstance.workAsyncStorage;
    }
  });
  var _workasyncstorageinstance = require_work_async_storage_instance();
});

// node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "makeHangingPromise", {
    enumerable: true,
    get: function() {
      return makeHangingPromise;
    }
  });
  function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject) => {
      signal.addEventListener("abort", () => {
        reject(new Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
      }, {
        once: true
      });
    });
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
  }
  function ignoreReject() {
  }
});

// node_modules/next/dist/lib/metadata/metadata-constants.js
var require_metadata_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    METADATA_BOUNDARY_NAME: function() {
      return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
      return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
      return VIEWPORT_BOUNDARY_NAME;
    }
  });
  var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
  var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
  var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
});

// node_modules/next/dist/server/app-render/dynamic-rendering.js
import * as react2 from "react";
var require_dynamic_rendering = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    Postpone: function() {
      return Postpone;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
      return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
      return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
      return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
      return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
      return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
      return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
      return createDynamicValidationState;
    },
    createPostponedAbortSignal: function() {
      return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
      return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
      return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
      return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
      return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
      return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
      return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
      return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
      return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
      return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
      return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
      return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
      return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
      return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
      return useDynamicRouteParams;
    }
  });
  var _react2 = /* @__PURE__ */ _interop_require_default(react2);
  var _hooksservercontext = require_hooks_server_context();
  var _staticgenerationbailout = require_static_generation_bailout();
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _dynamicrenderingutils = require_dynamic_rendering_utils();
  var _metadataconstants = require_metadata_constants();
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var hasPostpone = typeof _react2.default.unstable_postpone === "function";
  function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
      isDebugDynamicAccesses,
      dynamicAccesses: [],
      syncDynamicExpression: undefined,
      syncDynamicErrorWithStack: null
    };
  }
  function createDynamicValidationState() {
    return {
      hasSuspendedDynamic: false,
      hasDynamicMetadata: false,
      hasDynamicViewport: false,
      hasSyncDynamicErrors: false,
      dynamicErrors: []
    };
  }
  function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? undefined : _trackingState_dynamicAccesses_.expression;
  }
  function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
      if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
        return;
      }
    }
    if (store.forceDynamic || store.forceStatic)
      return;
    if (store.dynamicShouldError) {
      throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
      if (workUnitStore.type === "prerender-ppr") {
        postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
      } else if (workUnitStore.type === "prerender-legacy") {
        workUnitStore.revalidate = 0;
        const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
        store.dynamicUsageDescription = expression;
        store.dynamicUsageStack = err.stack;
        throw err;
      } else if (false) {
      }
    }
  }
  function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== "prerender-ppr")
      return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
  }
  function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
  }
  function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
      if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
        return;
      }
      if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-legacy") {
        workUnitStore.revalidate = 0;
      }
      if (false) {
      }
    }
  }
  function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    if (prerenderStore.controller) {
      prerenderStore.controller.abort(error);
    }
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
  }
  function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack === null) {
        dynamicTracking.syncDynamicExpression = expression;
        dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
      }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
  }
  function trackSynchronousPlatformIOAccessInDev(requestStore) {
    requestStore.prerenderPhase = false;
  }
  function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack === null) {
        dynamicTracking.syncDynamicExpression = expression;
        dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        if (prerenderStore.validating === true) {
          dynamicTracking.syncDynamicLogged = true;
        }
      }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
  }
  var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
  function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
  }
  function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
    _react2.default.unstable_postpone(createPostponeReason(route, expression));
  }
  function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function isDynamicPostpone(err) {
    if (typeof err === "object" && err !== null && typeof err.message === "string") {
      return isDynamicPostponeReason(err.message);
    }
    return false;
  }
  function isDynamicPostponeReason(reason) {
    return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
    throw new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
  }
  var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
  function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
  }
  function isPrerenderInterruptedError(error) {
    return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
  }
  function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
  }
  function consumeDynamicAccess(serverDynamic, clientDynamic) {
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
  }
  function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
      stack = stack.split(`
`).slice(4).filter((line) => {
        if (line.includes("node_modules/next/")) {
          return false;
        }
        if (line.includes(" (<anonymous>)")) {
          return false;
        }
        if (line.includes(" (node:")) {
          return false;
        }
        return true;
      }).join(`
`);
      return `Dynamic API Usage Debug - ${expression}:
${stack}`;
    });
  }
  function assertPostpone() {
    if (!hasPostpone) {
      throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
  }
  function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController;
    try {
      _react2.default.unstable_postpone(reason);
    } catch (x) {
      controller.abort(x);
    }
    return controller.signal;
  }
  function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
  }
  function useDynamicRouteParams(expression) {
    if (typeof window === "undefined") {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        if (workUnitStore) {
          if (workUnitStore.type === "prerender") {
            _react2.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
          } else if (workUnitStore.type === "prerender-ppr") {
            postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
          } else if (workUnitStore.type === "prerender-legacy") {
            throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
          }
        }
      }
    }
  }
  var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
  var hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
  var hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
  var hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
  function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
      return;
    } else if (hasMetadataRegex.test(componentStack)) {
      dynamicValidation.hasDynamicMetadata = true;
      return;
    } else if (hasViewportRegex.test(componentStack)) {
      dynamicValidation.hasDynamicViewport = true;
      return;
    } else if (hasSuspenseRegex.test(componentStack)) {
      dynamicValidation.hasSuspendedDynamic = true;
      return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
      dynamicValidation.hasSyncDynamicErrors = true;
      return;
    } else {
      const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
      const error = createErrorWithComponentStack(message, componentStack);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
  }
  function createErrorWithComponentStack(message, componentStack) {
    const error = new Error(message);
    error.stack = "Error: " + message + componentStack;
    return error;
  }
  function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
      syncError = serverDynamic.syncDynamicErrorWithStack;
      syncExpression = serverDynamic.syncDynamicExpression;
      syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
      syncError = clientDynamic.syncDynamicErrorWithStack;
      syncExpression = clientDynamic.syncDynamicExpression;
      syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
      syncError = null;
      syncExpression = undefined;
      syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
      if (!syncLogged) {
        console.error(syncError);
      }
      throw new _staticgenerationbailout.StaticGenBailoutError;
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
      for (let i = 0;i < dynamicErrors.length; i++) {
        console.error(dynamicErrors[i]);
      }
      throw new _staticgenerationbailout.StaticGenBailoutError;
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
      if (dynamicValidation.hasDynamicMetadata) {
        if (syncError) {
          console.error(syncError);
          throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
      } else if (dynamicValidation.hasDynamicViewport) {
        if (syncError) {
          console.error(syncError);
          throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
      }
    }
  }
});

// node_modules/next/dist/export/helpers/is-dynamic-usage-error.js
var require_is_dynamic_usage_error = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "isDynamicUsageError", {
    enumerable: true,
    get: function() {
      return isDynamicUsageError;
    }
  });
  var _hooksservercontext = require_hooks_server_context();
  var _bailouttocsr = require_bailout_to_csr();
  var _isnextroutererror = require_is_next_router_error();
  var _dynamicrendering = require_dynamic_rendering();
  var isDynamicUsageError = (err) => (0, _hooksservercontext.isDynamicServerError)(err) || (0, _bailouttocsr.isBailoutToCSRError)(err) || (0, _isnextroutererror.isNextRouterError)(err) || (0, _dynamicrendering.isDynamicPostpone)(err);
});

// node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
      return isPostpone;
    }
  });
  var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
  function isPostpone(error) {
    return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
      return unstable_rethrow;
    }
  });
  var _isdynamicusageerror = require_is_dynamic_usage_error();
  var _ispostpone = require_is_postpone();
  var _bailouttocsr = require_bailout_to_csr();
  var _isnextroutererror = require_is_next_router_error();
  function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _isdynamicusageerror.isDynamicUsageError)(error) || (0, _ispostpone.isPostpone)(error)) {
      throw error;
    }
    if (error instanceof Error && "cause" in error) {
      unstable_rethrow(error.cause);
    }
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    ReadonlyURLSearchParams: function() {
      return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
      return _redirect.RedirectType;
    },
    notFound: function() {
      return _notfound.notFound;
    },
    permanentRedirect: function() {
      return _redirect.permanentRedirect;
    },
    redirect: function() {
      return _redirect.redirect;
    },
    unstable_rethrow: function() {
      return _unstablerethrow.unstable_rethrow;
    }
  });
  var _redirect = require_redirect();
  var _notfound = require_not_found();
  var _unstablerethrow = require_unstable_rethrow();

  class ReadonlyURLSearchParamsError extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
  }

  class ReadonlyURLSearchParams extends URLSearchParams {
    append() {
      throw new ReadonlyURLSearchParamsError;
    }
    delete() {
      throw new ReadonlyURLSearchParamsError;
    }
    set() {
      throw new ReadonlyURLSearchParamsError;
    }
    sort() {
      throw new ReadonlyURLSearchParamsError;
    }
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require__interop_require_wildcard = __commonJS((exports) => {
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap;
    var cacheNodeInterop = new WeakMap;
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule)
      return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function")
      return { default: obj };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj))
      return cache.get(obj);
    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set))
          Object.defineProperty(newObj, key, desc);
        else
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    if (cache)
      cache.set(obj, newObj);
    return newObj;
  }
  exports._ = _interop_require_wildcard;
});

// node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
import * as react3 from "react";
var require_server_inserted_html_shared_runtime = __commonJS((exports) => {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    ServerInsertedHTMLContext: function() {
      return ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
      return useServerInsertedHTML;
    }
  });
  var _interop_require_wildcard = require__interop_require_wildcard();
  var _react2 = /* @__PURE__ */ _interop_require_wildcard._(react3);
  var ServerInsertedHTMLContext = /* @__PURE__ */ _react2.default.createContext(null);
  function useServerInsertedHTML(callback) {
    const addInsertedServerHTMLCallback = (0, _react2.useContext)(ServerInsertedHTMLContext);
    if (addInsertedServerHTMLCallback) {
      addInsertedServerHTMLCallback(callback);
    }
  }
});

// node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
      return bailoutToClientRendering;
    }
  });
  var _bailouttocsr = require_bailout_to_csr();
  var _workasyncstorageexternal = require_work_async_storage_external();
  function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? undefined : workStore.forceStatic)
      return;
    if (workStore == null ? undefined : workStore.isStaticGeneration)
      throw new _bailouttocsr.BailoutToCSRError(reason);
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// node_modules/next/dist/client/components/navigation.js
import * as _react2 from "react";
var require_navigation = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    ReadonlyURLSearchParams: function() {
      return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
      return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
      return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    notFound: function() {
      return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
      return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
      return _navigationreactserver.redirect;
    },
    unstable_rethrow: function() {
      return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
      return useParams;
    },
    usePathname: function() {
      return usePathname;
    },
    useRouter: function() {
      return useRouter;
    },
    useSearchParams: function() {
      return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
      return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
      return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
      return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
  });
  var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
  var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
  var _getsegmentvalue = require_get_segment_value();
  var _segment = require_segment();
  var _navigationreactserver = require_navigation_react_server();
  var _dynamicrendering = require_dynamic_rendering();
  var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
  function useSearchParams() {
    const searchParams = (0, _react2.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    const readonlySearchParams = (0, _react2.useMemo)(() => {
      if (!searchParams) {
        return null;
      }
      return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
      searchParams
    ]);
    if (typeof window === "undefined") {
      const { bailoutToClientRendering } = require_bailout_to_client_rendering();
      bailoutToClientRendering("useSearchParams()");
    }
    return readonlySearchParams;
  }
  function usePathname() {
    (0, _dynamicrendering.useDynamicRouteParams)("usePathname()");
    return (0, _react2.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
  }
  function useRouter() {
    const router = (0, _react2.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
      throw new Error("invariant expected app router to be mounted");
    }
    return router;
  }
  function useParams() {
    (0, _dynamicrendering.useDynamicRouteParams)("useParams()");
    return (0, _react2.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
  }
  function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === undefined)
      first = true;
    if (segmentPath === undefined)
      segmentPath = [];
    let node;
    if (first) {
      node = tree[1][parallelRouteKey];
    } else {
      const parallelRoutes = tree[1];
      var _parallelRoutes_children;
      node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node)
      return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
      return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
  }
  function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === undefined)
      parallelRouteKey = "children";
    (0, _dynamicrendering.useDynamicRouteParams)("useSelectedLayoutSegments()");
    const context = (0, _react2.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context)
      return null;
    return getSelectedLayoutSegmentPath(context.tree, parallelRouteKey);
  }
  function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === undefined)
      parallelRouteKey = "children";
    (0, _dynamicrendering.useDynamicRouteParams)("useSelectedLayoutSegment()");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
      return null;
    }
    const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});

// src/client/useRedirectAfterLogin.ts
var import_navigation2 = __toESM(require_navigation(), 1);

// src/shared/useRedirectParam.ts
var import_navigation = __toESM(require_navigation(), 1);
function useRedirectParam() {
  const params = import_navigation.useSearchParams();
  return params?.get("redirect") ?? null;
}

// src/client/useRedirectAfterLogin.ts

function useRedirectAfterLogin() {
  const router = import_navigation2.useRouter();
  const redirect = useRedirectParam();
  return () => {
    router.push(redirect ?? "/");
    router.refresh();
  };
}
export {
  useRedirectAfterLogin
};
