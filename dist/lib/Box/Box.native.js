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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var native_1 = __importDefault(require("styled-components/native"));
var react_native_1 = require("react-native");
var useSpacedChildren_1 = require("../../utils/useSpacedChildren");
var BoxWrapper = (0, native_1.default)(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n"], ["\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var $flexDirection = _a.$flexDirection;
    return $flexDirection || 'column';
}, function (_a) {
    var $justifyContent = _a.$justifyContent;
    return $justifyContent || 'flex-start';
}, function (_a) {
    var $alignItems = _a.$alignItems;
    return $alignItems || 'flex-start';
}, function (_a) {
    var $padding = _a.$padding;
    return ($padding !== undefined ? "".concat($padding, "px") : '0px');
}, function (_a) {
    var $width = _a.$width;
    return typeof $width === 'string' ? $width : $width !== undefined ? "".concat($width, "px") : 'auto';
}, function (_a) {
    var $height = _a.$height;
    return typeof $height === 'string' ? $height : $height !== undefined ? "".concat($height, "px") : 'auto';
}, function (_a) {
    var $backgroundColor = _a.$backgroundColor;
    return $backgroundColor || 'transparent';
}, function (_a) {
    var $borderRadius = _a.$borderRadius;
    return $borderRadius !== undefined ? "".concat($borderRadius, "px") : '0px';
});
var Box = react_1.default.forwardRef(function (props, ref) {
    var children = props.children, _a = props.flexDirection, flexDirection = _a === void 0 ? 'column' : _a, _b = props.gap, gap = _b === void 0 ? 0 : _b, justifyContent = props.justifyContent, alignItems = props.alignItems, padding = props.padding, width = props.width, height = props.height, backgroundColor = props.backgroundColor, borderRadius = props.borderRadius, onClick = props.onClick;
    var spacedChildren = (0, useSpacedChildren_1.useSpacedChildren)(children, gap, flexDirection);
    var content = ((0, jsx_runtime_1.jsx)(BoxWrapper, __assign({ ref: ref, "$flexDirection": flexDirection, "$justifyContent": justifyContent, "$alignItems": alignItems, "$padding": padding, "$width": width, "$height": height, "$backgroundColor": backgroundColor, "$borderRadius": borderRadius }, { children: spacedChildren })));
    return onClick ? ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ onPress: onClick, activeOpacity: 0.7 }, { children: content }))) : (content);
});
exports.default = Box;
var templateObject_1;
