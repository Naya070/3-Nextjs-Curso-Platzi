webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/KawaiiHeader/AnimatedHeader.tsx":
/*!****************************************************!*\
  !*** ./components/KawaiiHeader/AnimatedHeader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TransitionExampleTransitionExplorer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/SVGIcons */ \"./components/SVGIcons/index.ts\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/naya/Cursos/Platzi/3 Nextjs Curso Platzi/components/KawaiiHeader/AnimatedHeader.tsx\",\n    _this2 = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];\nvar options = transitions.map(function (name) {\n  return {\n    key: name,\n    text: name,\n    value: name\n  };\n});\n\nvar TransitionExampleTransitionExplorer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TransitionExampleTransitionExplorer, _Component);\n\n  var _super = _createSuper(TransitionExampleTransitionExplorer);\n\n  function TransitionExampleTransitionExplorer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TransitionExampleTransitionExplorer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      animation: transitions[0],\n      duration: 500,\n      visible: true\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleChange\", function (e, _ref) {\n      var name = _ref.name,\n          value = _ref.value;\n      return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, name, value));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"toggleVisibility\", function () {\n      return _this.setState(function (prevState) {\n        return {\n          visible: !prevState[\"true\"]\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TransitionExampleTransitionExplorer, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          animation = _this$state.animation,\n          duration = _this$state.duration,\n          visible = _this$state.visible;\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Header\"], {\n        size: \"huge\",\n        as: \"h1\",\n        onClick: this.toggleVisibility,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 5\n        }\n      }, \"Are\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n        animation: \"jiggle\",\n        visible: visible,\n        duration: 900,\n        onComplete: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }\n      }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_9__[\"Arepa\"], {\n        size: \"58px\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }\n      })), \"Passion\");\n    }\n  }]);\n\n  return TransitionExampleTransitionExplorer;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\nvar AnimatedHeader = function AnimatedHeader(_ref2) {\n  var visible = _ref2.visible,\n      onClick = _ref2.onClick,\n      onComplete = _ref2.onComplete;\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Header\"], {\n    size: \"huge\",\n    as: \"h1\",\n    onClick: onClick,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 3\n    }\n  }, \"Are\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n    animation: \"jiggle\",\n    visible: visible,\n    duration: 900,\n    onComplete: onComplete,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_9__[\"Arepa\"], {\n    size: \"58px\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  })), \"Passion\");\n};\n\n_c = AnimatedHeader;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0thd2FpaUhlYWRlci9BbmltYXRlZEhlYWRlci50c3g/YzM1OCJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJuYW1lIiwia2V5IiwidGV4dCIsInZhbHVlIiwiVHJhbnNpdGlvbkV4YW1wbGVUcmFuc2l0aW9uRXhwbG9yZXIiLCJhbmltYXRpb24iLCJkdXJhdGlvbiIsInZpc2libGUiLCJlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzdGF0ZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiLCJBbmltYXRlZEhlYWRlciIsIm9uQ2xpY2siLCJvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEIsUUFEa0IsRUFFbEIsT0FGa0IsRUFHbEIsT0FIa0IsRUFJbEIsT0FKa0IsRUFLbEIsTUFMa0IsRUFNbEIsUUFOa0IsRUFPbEIsTUFQa0IsQ0FBcEI7QUFVQSxJQUFNQyxPQUFPLEdBQUdELFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsU0FBbUI7QUFDakRDLE9BQUcsRUFBRUQsSUFENEM7QUFFakRFLFFBQUksRUFBRUYsSUFGMkM7QUFHakRHLFNBQUssRUFBRUg7QUFIMEMsR0FBbkI7QUFBQSxDQUFoQixDQUFoQjs7SUFNcUJJLG1DOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQUVDLGVBQVMsRUFBRVIsV0FBVyxDQUFDLENBQUQsQ0FBeEI7QUFBNkJTLGNBQVEsRUFBRSxHQUF2QztBQUE0Q0MsYUFBTyxFQUFFO0FBQXJELEs7O3VOQUVLLFVBQUNDLENBQUQ7QUFBQSxVQUFNUixJQUFOLFFBQU1BLElBQU47QUFBQSxVQUFZRyxLQUFaLFFBQVlBLEtBQVo7QUFBQSxhQUF3QixNQUFLTSxRQUFMLCtGQUFpQlQsSUFBakIsRUFBd0JHLEtBQXhCLEVBQXhCO0FBQUEsSzs7Mk5BQ0k7QUFBQSxhQUNuQixNQUFLTSxRQUFMLENBQWMsVUFBQ0MsU0FBRDtBQUFBLGVBQWdCO0FBQUVILGlCQUFPLEVBQUUsQ0FBQ0csU0FBUztBQUFyQixTQUFoQjtBQUFBLE9BQWQsQ0FEbUI7QUFBQSxLOzs7Ozs7OzZCQUdWO0FBQUEsd0JBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsVUFDQ04sU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsUUFEWixlQUNZQSxRQURaO0FBQUEsVUFDc0JDLE9BRHRCLGVBQ3NCQSxPQUR0QjtBQUdQLGFBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxNQUFiO0FBQW9CLFVBQUUsRUFBQyxJQUF2QjtBQUE0QixlQUFPLEVBQUUsS0FBS0ssZ0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUEsTUFBQyw0REFBRDtBQUNFLGlCQUFTLEVBQUMsUUFEWjtBQUVFLGVBQU8sRUFBRUwsT0FGWDtBQUdFLGdCQUFRLEVBQUUsR0FIWjtBQUlFLGtCQUFVLEVBQUUsS0FBS00sWUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1FLE1BQUMsMERBQUQ7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsQ0FGQSxZQURGO0FBZUQ7Ozs7RUF6QmdFQywrQzs7OztBQWtDakUsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQ3JCUixPQURxQixTQUNyQkEsT0FEcUI7QUFBQSxNQUVyQlMsT0FGcUIsU0FFckJBLE9BRnFCO0FBQUEsTUFHckJDLFVBSHFCLFNBR3JCQSxVQUhxQjtBQUFBLFNBS3JCLE1BQUMsd0RBQUQ7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixNQUFFLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFFRCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRUUsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBQyxRQURaO0FBRUUsV0FBTyxFQUFFVCxPQUZYO0FBR0UsWUFBUSxFQUFFLEdBSFo7QUFJRSxjQUFVLEVBQUVVLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMERBQUQ7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FGRixZQUxxQjtBQUFBLENBQXZCOztLQUFNRixjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9LYXdhaWlIZWFkZXIvQW5pbWF0ZWRIZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZGVyLCBUcmFuc2l0aW9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IEFyZXBhIH0gZnJvbSAnQGNvbXBvbmVudHMvU1ZHSWNvbnMnXG5cbmNvbnN0IHRyYW5zaXRpb25zID0gW1xuICAnamlnZ2xlJyxcbiAgJ2ZsYXNoJyxcbiAgJ3NoYWtlJyxcbiAgJ3B1bHNlJyxcbiAgJ3RhZGEnLFxuICAnYm91bmNlJyxcbiAgJ2dsb3cnLFxuXVxuXG5jb25zdCBvcHRpb25zID0gdHJhbnNpdGlvbnMubWFwKChuYW1lOiBzdHJpbmcpID0+ICh7XG4gIGtleTogbmFtZSxcbiAgdGV4dDogbmFtZSxcbiAgdmFsdWU6IG5hbWUsXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbkV4YW1wbGVUcmFuc2l0aW9uRXhwbG9yZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYW5pbWF0aW9uOiB0cmFuc2l0aW9uc1swXSwgZHVyYXRpb246IDUwMCwgdmlzaWJsZTogdHJ1ZSB9XG5cbmhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlIH0pXG50b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT5cbnRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgdmlzaWJsZTogIXByZXZTdGF0ZS50cnVlIH0pKVxuXG5yZW5kZXIoKSB7XG4gIGNvbnN0IHsgYW5pbWF0aW9uLCBkdXJhdGlvbiwgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlciBzaXplPVwiaHVnZVwiIGFzPVwiaDFcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpc2liaWxpdHl9PlxuICAgIEFyZVxuICAgIDxUcmFuc2l0aW9uXG4gICAgICBhbmltYXRpb249XCJqaWdnbGVcIlxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIGR1cmF0aW9uPXs5MDB9XG4gICAgICBvbkNvbXBsZXRlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICA+XG4gICAgICA8QXJlcGEgc2l6ZT1cIjU4cHhcIiAvPlxuICAgIDwvVHJhbnNpdGlvbj5cbiAgICBQYXNzaW9uXG4gIDwvSGVhZGVyPlxuXG4gIClcbn1cbn1cblxuXG50eXBlIEFuaW1hdGVkSGVhZGVyUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW5cbiAgb25DbGljazogKCkgPT4gdm9pZFxuICBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkXG59XG5jb25zdCBBbmltYXRlZEhlYWRlciA9ICh7XG4gIHZpc2libGUsXG4gIG9uQ2xpY2ssXG4gIG9uQ29tcGxldGUsXG59OiBBbmltYXRlZEhlYWRlclByb3BzKSA9PiAoXG4gIDxIZWFkZXIgc2l6ZT1cImh1Z2VcIiBhcz1cImgxXCIgb25DbGljaz17b25DbGlja30+XG4gICAgQXJlXG4gICAgPFRyYW5zaXRpb25cbiAgICAgIGFuaW1hdGlvbj1cImppZ2dsZVwiXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgZHVyYXRpb249ezkwMH1cbiAgICAgIG9uQ29tcGxldGU9e29uQ29tcGxldGV9XG4gICAgPlxuICAgICAgPEFyZXBhIHNpemU9XCI1OHB4XCIgLz5cbiAgICA8L1RyYW5zaXRpb24+XG4gICAgUGFzc2lvblxuICA8L0hlYWRlcj5cbilcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/KawaiiHeader/AnimatedHeader.tsx\n");

/***/ })

})