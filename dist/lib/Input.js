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
var md_1 = require("react-icons/md");
var style_1 = require("../constants/style");
var Input = function (props) {
    var value = props.value, setValue = props.setValue, placeholder = props.placeholder, _a = props.invisible, invisible = _a === void 0 ? false : _a, onClear = props.onClear;
    return ((0, jsx_runtime_1.jsxs)(Box, { children: [(0, jsx_runtime_1.jsx)(InputBox, { value: value, onChange: setValue, placeholder: placeholder, "$invisible": invisible }), value && onClear && ((0, jsx_runtime_1.jsx)(IconBox, __assign({ onClick: onClear }, { children: (0, jsx_runtime_1.jsx)(md_1.MdCancel, { size: 24, color: style_1.colors.g000 }) })))] }));
};
exports.default = Input;
var Box = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n"], ["\n  position: relative;\n  display: block;\n"])));
var IconBox = styled_components_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: 16px;\n  top: 14px;\n"], ["\n  position: absolute;\n  right: 16px;\n  top: 14px;\n"])));
var InputBox = styled_components_1.styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: ", ";\n  padding: ", ";\n  outline: none;\n  border-radius: 8px;\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n"], ["\n  border: ", ";\n  padding: ", ";\n  outline: none;\n  border-radius: 8px;\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n"])), function (_a) {
    var $invisible = _a.$invisible;
    return $invisible ? "none" : "1px solid ".concat(style_1.colors.g000);
}, function (_a) {
    var $invisible = _a.$invisible;
    return ($invisible ? "0px 16px" : "16px");
});
var templateObject_1, templateObject_2, templateObject_3;
