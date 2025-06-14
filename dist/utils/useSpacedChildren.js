"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpacedChildren = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
/**
 * gap을 구현하기 위한 유틸 훅
 * @param children - JSX children
 * @param gap - number px 단위
 * @param flexDirection - row 또는 column
 * @returns 자식 요소 사이에 gap을 적용한 배열
 */
function useSpacedChildren(children, gap, flexDirection) {
    if (flexDirection === void 0) { flexDirection = 'column'; }
    var validChildren = react_1.default.Children.toArray(children);
    return validChildren.map(function (child, index) {
        var isLast = index === validChildren.length - 1;
        var spacingStyle = flexDirection === 'row'
            ? { marginRight: isLast ? 0 : gap }
            : { marginBottom: isLast ? 0 : gap };
        return react_1.default.createElement(react_native_1.View, { key: index, style: spacingStyle }, child);
    });
}
exports.useSpacedChildren = useSpacedChildren;
