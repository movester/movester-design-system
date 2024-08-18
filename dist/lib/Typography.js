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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var variantsProperties = {
    title1: {
        fontSize: 36,
        fontWeight: 800,
    },
    heading1: {
        fontSize: 24,
        fontWeight: 800,
    },
    heading2: {
        fontSize: 16,
        fontWeight: 800,
    },
    heading3: {
        fontSize: 14,
        fontWeight: 800,
    },
    body1: {
        fontSize: 16,
        fontWeight: 500,
    },
    body2: {
        fontSize: 14,
        fontWeight: 500,
    },
    body3: {
        fontSize: 8,
        fontWeight: 500,
    },
    caption: {
        fontSize: 8,
        fontWeight: 500,
    },
};
var Typography = function (props) {
    var _a = props.variants, variants = _a === void 0 ? "body2" : _a, color = props.color, children = props.children;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
            fontSize: "".concat(variantsProperties[variants].fontSize, "px"),
            fontWeight: "".concat(variantsProperties[variants].fontWeight),
            color: "".concat(color),
        } }, { children: children })));
};
exports.default = Typography;
