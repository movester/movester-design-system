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
var im_1 = require("react-icons/im");
var CheckBox = function (props) {
    var isChecked = props.isChecked, setIsChecked = props.setIsChecked, _a = props.children, children = _a === void 0 ? "동의합니다." : _a;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: 8 }, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, __assign({ width: 16, height: 16, borderRadius: 4, border: isChecked ? "1px solid transparent" : "1px solid ".concat(style_1.colors.g100), backgroundColor: isChecked ? style_1.colors.softPrimaryColor : style_1.colors.f000, display: "flex", justifyContent: "center", alignItems: "center", onClick: function () { return setIsChecked(function (prev) { return !prev; }); } }, { children: isChecked && (0, jsx_runtime_1.jsx)(im_1.ImCheckmark, { color: style_1.colors.f000, size: 12 }) })), (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variants: "body2" }, { children: children }))] })));
};
exports.default = CheckBox;
