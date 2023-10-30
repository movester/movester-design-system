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
var style_1 = require("../constants/style");
var variantsColors = {
    primary: {
        backgroundColor: style_1.colors.softPrimaryColor,
        textColor: style_1.colors.f000,
        borderColor: "transaparent",
    },
    secondary: {
        backgroundColor: style_1.colors.f000,
        textColor: style_1.colors.vividPrimaryColor,
        borderColor: style_1.colors.vividPrimaryColor,
    },
};
var sizes = {
    xs: {
        height: 32,
        fontSize: 12,
    },
    sm: {
        height: 48,
        fontSize: 16,
    },
    md: {
        height: 60,
        fontSize: 24,
    },
    lg: {
        height: 80,
        fontSize: 36,
    },
};
var Button = function (props) {
    var _a = props.variants, variants = _a === void 0 ? "primary" : _a, children = props.children, size = props.size, _b = props.disabled, disabled = _b === void 0 ? false : _b, width = props.width, onClick = props.onClick;
    return ((0, jsx_runtime_1.jsx)(Box, __assign({ "$backgroundColor": variantsColors[variants].backgroundColor, "$color": variantsColors[variants].textColor, "$border": "2px solid ".concat(variantsColors[variants].borderColor), "$height": sizes[size].height, "$fontSize": sizes[size].fontSize, "$width": width, "$disabled": disabled, onClick: onClick, className: "ButtonComponent" }, { children: children ? children : "확인" })));
};
exports.default = Button;
var Box = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 8px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  display: flex;\n  font-weight: bold;\n  width: ", ";\n  box-sizing: border-box;\n  background-color: ", ";\n  color: ", ";\n  height: ", ";\n  font-size: ", ";\n  border: ", ";\n  opacity: ", ";\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  border-radius: 8px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  display: flex;\n  font-weight: bold;\n  width: ", ";\n  box-sizing: border-box;\n  background-color: ", ";\n  color: ", ";\n  height: ", ";\n  font-size: ", ";\n  border: ", ";\n  opacity: ", ";\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) { return (props.$width ? "".concat(props.$width, "px") : "100%"); }, function (props) { return props.$backgroundColor; }, function (props) { return props.$color; }, function (props) { return "".concat(props.$height, "px"); }, function (props) { return "".concat(props.$fontSize, "px"); }, function (props) { return "".concat(props.$border, "}"); }, function (props) { return (props.$disabled ? 0.6 : 1); });
var templateObject_1;
