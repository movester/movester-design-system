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
var styled_components_1 = require("styled-components");
var style_1 = require("../constants/style");
var Typography_1 = __importDefault(require("./Typography"));
var Textarea = function (props) {
    var value = props.value, setValue = props.setValue, placeholder = props.placeholder, _a = props.disabled, disabled = _a === void 0 ? false : _a, maxLength = props.maxLength, _b = props.readonly, readonly = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsxs)(Box, { children: [(0, jsx_runtime_1.jsx)(TextareaBox, { value: value, onChange: setValue, placeholder: placeholder, maxLength: maxLength, readOnly: readonly, disabled: disabled }), maxLength && ((0, jsx_runtime_1.jsx)(TextIndicator, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variants: "body2", color: style_1.colors.g000 }, { children: value.toString().length + "/" + maxLength })) }))] }));
};
exports.default = Textarea;
var Box = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n"])));
var TextareaBox = styled_components_1.styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  padding: 16px;\n  outline: none;\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  resize: none;\n"], ["\n  border: 1px solid ", ";\n  padding: 16px;\n  outline: none;\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  resize: none;\n"])), style_1.colors.g000);
var TextIndicator = styled_components_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
