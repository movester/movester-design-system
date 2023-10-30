"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var style_1 = require("../constants/style");
var Divider = function (props) {
    var _a = props.color, color = _a === void 0 ? style_1.colors.g200 : _a;
    return (0, jsx_runtime_1.jsx)(Box, { style: { backgroundColor: "".concat(color) } });
};
exports.default = Divider;
var Box = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 1px;\n"], ["\n  height: 1px;\n"])));
var templateObject_1;
