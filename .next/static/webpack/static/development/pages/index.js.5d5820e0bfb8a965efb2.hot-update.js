webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/KawaiiHeader/AnimatedHeader.tsx":
/*!****************************************************!*\
  !*** ./components/KawaiiHeader/AnimatedHeader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gfg; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_SVGIcons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/SVGIcons */ \"./components/SVGIcons/index.ts\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/naya/Cursos/Platzi/3 Nextjs Curso Platzi/components/KawaiiHeader/AnimatedHeader.tsx\",\n    _this2 = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar gfg = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(gfg, _React$Component);\n\n  var _super = _createSuper(gfg);\n\n  function gfg(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, gfg);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"gfg1\", function () {\n      return _this.setState(function (btt) {\n        return {\n          visible: !btt.visible\n        };\n      });\n    });\n\n    _this.state = {\n      value: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gfg, [{\n    key: \"render\",\n    value: function render() {\n      var visible = this.state.visible;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }\n      }, __jsx(Button, {\n        content: visible ? 'Click here' : 'Click here',\n        onClick: this.gfg1,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n        visible: visible,\n        animation: \"jiggle\",\n        duration: 250,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, __jsx(Icon, {\n        size: \"huge\",\n        name: \"js\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return gfg;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n\n\nvar AnimatedHeader = function AnimatedHeader(_ref) {\n  var visible = _ref.visible,\n      onClick = _ref.onClick,\n      onComplete = _ref.onComplete;\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Header\"], {\n    size: \"huge\",\n    as: \"h1\",\n    onClick: onClick,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, \"Are\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n    animation: \"jiggle\",\n    visible: visible,\n    duration: 900,\n    onComplete: onComplete,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(_components_SVGIcons__WEBPACK_IMPORTED_MODULE_9__[\"Arepa\"], {\n    size: \"58px\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  })), \"Passion\");\n};\n\n_c = AnimatedHeader;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0thd2FpaUhlYWRlci9BbmltYXRlZEhlYWRlci50c3g/YzM1OCJdLCJuYW1lcyI6WyJnZmciLCJwcm9wcyIsInNldFN0YXRlIiwiYnR0IiwidmlzaWJsZSIsInN0YXRlIiwidmFsdWUiLCJnZmcxIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBbmltYXRlZEhlYWRlciIsIm9uQ2xpY2siLCJvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRXFCQSxHOzs7OztBQUNuQixlQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLDhCQUFNQSxLQUFOOztBQURzQiwrTUFLakI7QUFBQSxhQUNMLE1BQUtDLFFBQUwsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsZUFBVTtBQUFFQyxpQkFBTyxFQUFFLENBQUNELEdBQUcsQ0FBQ0M7QUFBaEIsU0FBVjtBQUFBLE9BQWQsQ0FESztBQUFBLEtBTGlCOztBQUd0QixVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FBYjtBQUhzQjtBQUl2Qjs7Ozs2QkFJUTtBQUFBLFVBQ0NGLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREO0FBR1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxNQUFEO0FBQ0UsZUFBTyxFQUFFQSxPQUFPLEdBQUcsWUFBSCxHQUFrQixZQURwQztBQUVFLGVBQU8sRUFBRSxLQUFLRyxJQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsRUFNRSxNQUFDLDREQUFEO0FBQVksZUFBTyxFQUFFSCxPQUFyQjtBQUE4QixpQkFBUyxFQUFDLFFBQXhDO0FBQWlELGdCQUFRLEVBQUUsR0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsSUFBRDtBQUFNLFlBQUksRUFBQyxNQUFYO0FBQWtCLFlBQUksRUFBQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FORixDQURGO0FBWUQ7Ozs7RUF4QjhCSSw0Q0FBSyxDQUFDQyxTOzs7O0FBaUN2QyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFDckJOLE9BRHFCLFFBQ3JCQSxPQURxQjtBQUFBLE1BRXJCTyxPQUZxQixRQUVyQkEsT0FGcUI7QUFBQSxNQUdyQkMsVUFIcUIsUUFHckJBLFVBSHFCO0FBQUEsU0FLckIsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLE1BQUUsRUFBQyxJQUF2QjtBQUE0QixXQUFPLEVBQUVELE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFFRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxXQUFPLEVBQUVQLE9BRlg7QUFHRSxZQUFRLEVBQUUsR0FIWjtBQUlFLGNBQVUsRUFBRVEsVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQywwREFBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQUZGLFlBTHFCO0FBQUEsQ0FBdkI7O0tBQU1GLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0thd2FpaUhlYWRlci9BbmltYXRlZEhlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXIsIFRyYW5zaXRpb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IHsgQXJlcGEgfSBmcm9tICdAY29tcG9uZW50cy9TVkdJY29ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2ZnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7dmFsdWU6IHN0cmluZ30+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcbiAgfVxuICBnZmcxID0gKCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKChidHQpID0+ICh7IHZpc2libGU6ICFidHQudmlzaWJsZSB9KSlcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb250ZW50PXt2aXNpYmxlID8gJ0NsaWNrIGhlcmUnIDogJ0NsaWNrIGhlcmUnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2ZnMX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPFRyYW5zaXRpb24gdmlzaWJsZT17dmlzaWJsZX0gYW5pbWF0aW9uPSdqaWdnbGUnIGR1cmF0aW9uPXsyNTB9PlxuICAgICAgICAgIDxJY29uIHNpemU9J2h1Z2UnIG5hbWU9J2pzJyAvPlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG50eXBlIEFuaW1hdGVkSGVhZGVyUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW5cbiAgb25DbGljazogKCkgPT4gdm9pZFxuICBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkXG59XG5jb25zdCBBbmltYXRlZEhlYWRlciA9ICh7XG4gIHZpc2libGUsXG4gIG9uQ2xpY2ssXG4gIG9uQ29tcGxldGUsXG59OiBBbmltYXRlZEhlYWRlclByb3BzKSA9PiAoXG4gIDxIZWFkZXIgc2l6ZT1cImh1Z2VcIiBhcz1cImgxXCIgb25DbGljaz17b25DbGlja30+XG4gICAgQXJlXG4gICAgPFRyYW5zaXRpb25cbiAgICAgIGFuaW1hdGlvbj1cImppZ2dsZVwiXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgZHVyYXRpb249ezkwMH1cbiAgICAgIG9uQ29tcGxldGU9e29uQ29tcGxldGV9XG4gICAgPlxuICAgICAgPEFyZXBhIHNpemU9XCI1OHB4XCIgLz5cbiAgICA8L1RyYW5zaXRpb24+XG4gICAgUGFzc2lvblxuICA8L0hlYWRlcj5cbilcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/KawaiiHeader/AnimatedHeader.tsx\n");

/***/ })

})