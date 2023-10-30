"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var Box = function (props) {
    var children = props.children, flexDirection = props.flexDirection, _a = props.gap, gap = _a === void 0 ? 0 : _a, justifyContent = props.justifyContent, alignItems = props.alignItems, _b = props.padding, padding = _b === void 0 ? 0 : _b, width = props.width, _c = props.height, height = _c === void 0 ? "100%" : _c, display = props.display, overflow = props.overflow, backgroundColor = props.backgroundColor, border = props.border, _d = props.borderRadius, borderRadius = _d === void 0 ? 0 : _d, onClick = props.onClick, onMouseOver = props.onMouseOver, gridTemplateColumns = props.gridTemplateColumns, ref = props.ref, boxSahdow = props.boxSahdow;
    return ((0, jsx_runtime_1.jsx)(BoxWrapper, __assign({ "$flexDirection": flexDirection, "$gap": gap, "$justifyContent": justifyContent, "$alignItems": alignItems, "$padding": padding, "$width": width, "$height": height, "$display": display, "$overflow": overflow, "$backgroundColor": backgroundColor, "$border": border, "$borderRadius": borderRadius, "$gridTemplateColumns": gridTemplateColumns, "$boxSahdow": boxSahdow, onClick: onClick, onMouseOver: onMouseOver, ref: ref }, { children: children })));
};
exports.default = Box;
var BoxWrapper = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  gap: ", ";\n  overflow: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  grid-template-columns: ", ";\n  box-shadow: ", ";\n  word-break: break-all;\n"], ["\n  width: ", ";\n  height: ", ";\n  display: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  gap: ", ";\n  overflow: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  grid-template-columns: ", ";\n  box-shadow: ", ";\n  word-break: break-all;\n"])), function (_a) {
    var $width = _a.$width;
    return typeof $width === "string" ? $width : "".concat($width, "px ");
}, function (_a) {
    var $height = _a.$height;
    return typeof $height === "string" ? $height : "".concat($height, "px ");
}, function (_a) {
    var $display = _a.$display;
    return $display;
}, function (_a) {
    var $flexDirection = _a.$flexDirection;
    return $flexDirection;
}, function (_a) {
    var $justifyContent = _a.$justifyContent;
    return $justifyContent;
}, function (_a) {
    var $alignItems = _a.$alignItems;
    return $alignItems;
}, function (_a) {
    var $padding = _a.$padding;
    return typeof $padding === "string" ? $padding : "".concat($padding, "px ");
}, function (_a) {
    var $gap = _a.$gap;
    return "".concat($gap, "px");
}, function (_a) {
    var $overflow = _a.$overflow;
    return $overflow;
}, function (_a) {
    var $backgroundColor = _a.$backgroundColor;
    return $backgroundColor;
}, function (_a) {
    var $border = _a.$border;
    return $border;
}, function (_a) {
    var $borderRadius = _a.$borderRadius;
    return "".concat($borderRadius, "px");
}, function (_a) {
    var $gridTemplateColumns = _a.$gridTemplateColumns;
    return $gridTemplateColumns;
}, function (_a) {
    var $boxSahdow = _a.$boxSahdow;
    return $boxSahdow;
});
var templateObject_1;
