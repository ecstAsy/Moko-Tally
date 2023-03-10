"use strict";
var taro_app_library;
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro_app_library"],{

/***/ "webpack/container/entry/taro_app_library":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var moduleMap = {
	"./react": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5EASSBLT_js"), __webpack_require__.e("node_modules_taro_weapp_prebundle_react_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react.js */ "./node_modules/.taro/weapp/prebundle/react.js")); }; });
	},
	"./react-redux": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5EASSBLT_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-FQYTWPQY_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_react-redux_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react-redux.js */ "./node_modules/.taro/weapp/prebundle/react-redux.js")); }; });
	},
	"./dva-core": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-L5W4WYYH_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_dva-core_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/dva-core.js */ "./node_modules/.taro/weapp/prebundle/dva-core.js")); }; });
	},
	"./@tarojs/taro": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_taro.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_taro.js")); }; });
	},
	"./redux-logger": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_redux-logger_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/redux-logger.js */ "./node_modules/.taro/weapp/prebundle/redux-logger.js")); }; });
	},
	"./dva-loading": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-L5W4WYYH_js"), __webpack_require__.e("node_modules_taro_weapp_prebundle_dva-loading_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/dva-loading.js */ "./node_modules/.taro/weapp/prebundle/dva-loading.js")); }; });
	},
	"./react/jsx-runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5EASSBLT_js"), __webpack_require__.e("node_modules_taro_weapp_prebundle_react_jsx-runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react_jsx-runtime.js */ "./node_modules/.taro/weapp/prebundle/react_jsx-runtime.js")); }; });
	},
	"./@tarojs/runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("node_modules_taro_weapp_prebundle_tarojs_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_runtime.js")); }; });
	},
	"./@tarojs/plugin-platform-weapp/dist/runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_plugin-platform-weapp_dist_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_plugin-platform-weapp_dist_runtime.js")); }; });
	},
	"./@tarojs/plugin-framework-react/dist/runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_plugin-framework-react_dist_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_plugin-framework-react_dist_runtime.js")); }; });
	},
	"./react-dom": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5K2QZOIU_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-VYWETQAV_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-5EASSBLT_js"), __webpack_require__.e("vendors-node_modules_taro_weapp_prebundle_chunk-FQYTWPQY_js"), __webpack_require__.e("node_modules_taro_weapp_prebundle_react-dom_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react-dom.js */ "./node_modules/.taro/weapp/prebundle/react-dom.js")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

var taroModuleMap = {
	"./react": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react.js */ "./node_modules/.taro/weapp/prebundle/react.js")); };
	},
	"./react-redux": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react-redux.js */ "./node_modules/.taro/weapp/prebundle/react-redux.js")); };
	},
	"./dva-core": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/dva-core.js */ "./node_modules/.taro/weapp/prebundle/dva-core.js")); };
	},
	"./@tarojs/taro": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_taro.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_taro.js")); };
	},
	"./redux-logger": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/redux-logger.js */ "./node_modules/.taro/weapp/prebundle/redux-logger.js")); };
	},
	"./dva-loading": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/dva-loading.js */ "./node_modules/.taro/weapp/prebundle/dva-loading.js")); };
	},
	"./react/jsx-runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react_jsx-runtime.js */ "./node_modules/.taro/weapp/prebundle/react_jsx-runtime.js")); };
	},
	"./@tarojs/runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_runtime.js")); };
	},
	"./@tarojs/plugin-platform-weapp/dist/runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_plugin-platform-weapp_dist_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_plugin-platform-weapp_dist_runtime.js")); };
	},
	"./@tarojs/plugin-framework-react/dist/runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/@tarojs_plugin-framework-react_dist_runtime.js */ "./node_modules/.taro/weapp/prebundle/@tarojs_plugin-framework-react_dist_runtime.js")); };
	},
	"./react-dom": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/weapp/prebundle/react-dom.js */ "./node_modules/.taro/weapp/prebundle/react-dom.js")); };
	}
};
var taroGet = function(module) {
	return taroModuleMap[module]();
};
__webpack_require__.taro(taroGet);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("webpack/container/entry/taro_app_library"));
/******/ taro_app_library = __webpack_exports__;
/******/ }
]);