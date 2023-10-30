"use strict";
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
var Box_1 = __importDefault(require("./Box"));
var Typography_1 = __importDefault(require("./Typography"));
var style_1 = require("../constants/style");
var sizeProps = {
    sm: { height: 24, borderRadius: 12, padding: "0 8px" },
    md: { height: 30, borderRadius: 15, padding: "0 16px" },
};
var variantsProps = {
    primary: {
        backgroundColor: style_1.colors.softPrimaryColor,
        color: style_1.colors.f000,
        border: "none",
    },
    secondary: {
        backgroundColor: style_1.colors.f000,
        color: style_1.colors.vividPrimaryColor,
        border: "1px solid ".concat(style_1.colors.vividPrimaryColor),
    },
};
var Chip = function (props) {
    var children = props.children, _a = props.variants, variants = _a === void 0 ? "primary" : _a, _b = props.size, size = _b === void 0 ? "md" : _b;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ backgroundColor: variantsProps[variants].backgroundColor, border: variantsProps[variants].border, width: "fit-content", height: sizeProps[size].height, borderRadius: sizeProps[size].borderRadius, padding: sizeProps[size].padding, display: "flex", alignItems: "center", justifyContent: "center", boxSahdow: "4px 4px 4px rgba(0,0,0,0.1)" }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variants: size === "md" ? "heading3" : "body2", color: variantsProps[variants].color }, { children: children })) })));
};
exports.default = Chip;
