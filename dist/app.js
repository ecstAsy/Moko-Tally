"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-FQYTWPQY_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_dva-core_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-L5W4WYYH_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-5EASSBLT_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_dva-loading_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react-dom_js.js");

require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/.pnpm/babel-loader@8.2.1_vy5kyqs4fusewyilg7kzwxnhni/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.1_vy5kyqs4fusewyilg7kzwxnhni/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dva */ "./src/utils/dva.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










var dvaApp = _utils_dva__WEBPACK_IMPORTED_MODULE_2__["default"].createApp({
  initialState: {},
  models: _models__WEBPACK_IMPORTED_MODULE_3__["default"]
});
var store = dvaApp.getStore();
var App = /*#__PURE__*/function (_Component) {
  (0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);
  var _super = (0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(App);
  function App() {
    (0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, App);
    return _super.apply(this, arguments);
  }
  (0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: store,
        children: this.props.children
      });
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_vy5kyqs4fusewyilg7kzwxnhni_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/.pnpm/babel-loader@8.2.1_vy5kyqs4fusewyilg7kzwxnhni/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.tsx */ "./node_modules/.pnpm/babel-loader@8.2.1_vy5kyqs4fusewyilg7kzwxnhni/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_pnpm_babel_loader_8_2_1_vy5kyqs4fusewyilg7kzwxnhni_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/models/common.ts":
/*!******************************!*\
  !*** ./src/models/common.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:08:13
 * @LastEditTime: 2023-03-08 17:08:17
 * @LastEditors: ecstAsy
 */

var getSystemInfo = function getSystemInfo() {
  var SystemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSystemInfoSync();
  SystemInfo.windowHeight = SystemInfo.windowHeight + 48;
  SystemInfo["RPX"] = SystemInfo.windowWidth / 375;
  var res = SystemInfo.model.indexOf("iPhone X");
  SystemInfo["mobile"] = res === 0 ? "IPhoneX" : "IPhoneY";
  SystemInfo["cate"] = SystemInfo.system.indexOf("iOS") > -1 ? "ios" : "android";
  return SystemInfo;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: "global",
  state: {
    // SystemInfo: getSystemInfo(),
    userId: 1,
    userInfo: null
  },
  effects: {},
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      return (0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_mac_Desktop_WEAPP_Moko_Tally_tally_client_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), payload);
    }
  }
});

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:08:36
 * @LastEditTime: 2023-03-08 17:08:39
 * @LastEditors: ecstAsy
 */

/* harmony default export */ __webpack_exports__["default"] = ([_common__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ }),

/***/ "./src/utils/dva.ts":
/*!**************************!*\
  !*** ./src/utils/dva.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var dva_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dva-core */ "webpack/container/remote/dva-core");
/* harmony import */ var dva_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dva_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-loading */ "webpack/container/remote/dva-loading");
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_loading__WEBPACK_IMPORTED_MODULE_1__);
/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:07:07
 * @LastEditTime: 2023-03-08 17:07:17
 * @LastEditors: ecstAsy
 */



var app, store, dispatch, registered;
function createApp(opt) {
  // redux 的日志
  // opt.onAction = [createLogger()];

  app = (0,dva_core__WEBPACK_IMPORTED_MODULE_0__.create)(opt);
  app.use(dva_loading__WEBPACK_IMPORTED_MODULE_1___default()({}));
  if (!registered) {
    opt.models.forEach(function (model) {
      return app.model(model);
    });
  }
  registered = true;
  app.start();
  store = app._store;
  app.getStore = function () {
    return store;
  };
  app.use({
    onError: function onError(err) {
      console.log(err);
    }
  });
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map