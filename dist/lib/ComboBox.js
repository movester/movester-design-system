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
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ai_1 = require("react-icons/ai");
var style_1 = require("../constants/style");
var variants = {
    xs: {
        fontSize: 8,
        padding: "4px 8px",
        height: 32,
    },
    sm: {
        fontSize: 16,
        padding: "8px 16px",
        height: 48,
    },
    md: {
        fontSize: 24,
        padding: "16px 32px",
        height: 48,
    },
};
var ComboBox = function (props) {
    var list = props.list, value = props.value, setValue = props.setValue, size = props.size, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.label, label = _b === void 0 ? "선택" : _b;
    var _c = (0, react_1.useState)(false), isOpend = _c[0], setIsOpened = _c[1];
    return ((0, jsx_runtime_1.jsxs)(Box, { children: [(0, jsx_runtime_1.jsxs)(Select, __assign({ "$border": value
                    ? "1px solid ".concat(style_1.colors.vividPrimaryColor, " ")
                    : "1px solid ".concat(style_1.colors.g000), "$color": value ? " ".concat(style_1.colors.vividPrimaryColor, " ") : "".concat(style_1.colors.g100), "$fontSize": variants[size].fontSize, "$padding": variants[size].padding, "$height": variants[size].height, "$borderRadius": isOpend ? "8px 8px 0px 0px" : "8px", "$opacity": disabled ? 0.5 : 1, onClick: function () { return !disabled && setIsOpened(function (prev) { return !prev; }); } }, { children: [(0, jsx_runtime_1.jsx)(Span, { children: value && value.id ? value.name : label }), isOpend ? ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineUp, { size: 8 })) : ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineDown, { size: 8 }))] })), isOpend && ((0, jsx_runtime_1.jsx)(OptionWarpper, { children: list.map(function (item) { return ((0, jsx_runtime_1.jsxs)(Option, __assign({ onClick: function () {
                        setValue(item);
                        setIsOpened(function (prev) { return !prev; });
                    }, "$fontSize": variants[size].fontSize, "$padding": variants[size].padding }, { children: [value && value.id === item.id && ((0, jsx_runtime_1.jsx)("span", __assign({ style: { paddingRight: "8px" } }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineCheck, { size: 10 }) }))), item.name] }), "combBox -" + item.name + "-" + item.id)); }) }))] }));
};
exports.default = ComboBox;
var Box = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: fit-content;\n"], ["\n  position: relative;\n  width: fit-content;\n"])));
var Select = styled_components_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: ", ";\n  color: ", ";\n  font-size: ", ";\n  padding: ", ";\n  height: ", ";\n  border-radius: ", ";\n  opacity: ", ";\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  border: ", ";\n  color: ", ";\n  font-size: ", ";\n  padding: ", ";\n  height: ", ";\n  border-radius: ", ";\n  opacity: ", ";\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (_a) {
    var $border = _a.$border;
    return $border;
}, function (_a) {
    var $color = _a.$color;
    return $color;
}, function (_a) {
    var $fontSize = _a.$fontSize;
    return "".concat($fontSize, "px");
}, function (_a) {
    var $padding = _a.$padding;
    return $padding;
}, function (_a) {
    var $height = _a.$height;
    return "".concat($height, "px");
}, function (_a) {
    var $borderRadius = _a.$borderRadius;
    return $borderRadius;
}, function (_a) {
    var $opacity = _a.$opacity;
    return $opacity;
});
var Span = styled_components_1.styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 32px;\n"], ["\n  padding-right: 32px;\n"])));
var OptionWarpper = styled_components_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  border-radius: 0px 0px 8px 8px;\n  overflow: hidden;\n  border: 1px solid ", ";\n  border-top: none;\n  background-color: ", ";\n  z-index: 20;\n\n  :hover {\n    background-color: ", ";\n    color: #ffffff;\n    border-color: ", ";\n  }\n  :last-child {\n    border: none;\n  }\n"], ["\n  width: 100%;\n  position: absolute;\n  border-radius: 0px 0px 8px 8px;\n  overflow: hidden;\n  border: 1px solid ", ";\n  border-top: none;\n  background-color: ", ";\n  z-index: 20;\n\n  :hover {\n    background-color: ", ";\n    color: #ffffff;\n    border-color: ", ";\n  }\n  :last-child {\n    border: none;\n  }\n"])), style_1.colors.g000, style_1.colors.f000, style_1.colors.softPrimaryColor, style_1.colors.softPrimaryColor);
var Option = styled_components_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  border-bottom: 1px solid ", ";\n  font-size: ", ";\n  padding: ", ";\n"], ["\n  width: 100%;\n  border-bottom: 1px solid ", ";\n  font-size: ", ";\n  padding: ", ";\n"])), style_1.colors.g000, function (_a) {
    var $fontSize = _a.$fontSize;
    return "".concat($fontSize, "px");
}, function (_a) {
    var $padding = _a.$padding;
    return "".concat($padding, "px");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
