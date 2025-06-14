"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Box = react_native_1.Platform.OS === 'web'
    ? require('./Box.web').default
    : require('./Box.native').default;
exports.default = Box;
