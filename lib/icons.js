"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = exports.Underline = exports.Italic = exports.Bold = exports.ChevronRight = exports.List = exports.Type = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                    Icons from Feather: https://feathericons.com/
                                                                                                                                                                                                                                                                    with slight modifications
                                                                                                                                                                                                                                                                  */

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Type = function Type(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-type"
    }, props),
    _react2.default.createElement("polyline", { points: "4 7 4 4 20 4 20 7" }),
    _react2.default.createElement("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
    _react2.default.createElement("line", { x1: "12", y1: "4", x2: "12", y2: "20" })
  );
};

var List = function List(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-list"
    }, props),
    _react2.default.createElement("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
    _react2.default.createElement("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
    _react2.default.createElement("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
    _react2.default.createElement("line", { x1: "3", y1: "6", x2: "3", y2: "6" }),
    _react2.default.createElement("line", { x1: "3", y1: "12", x2: "3", y2: "12" }),
    _react2.default.createElement("line", { x1: "3", y1: "18", x2: "3", y2: "18" })
  );
};

var ChevronRight = function ChevronRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-chevron-right"
    }, props),
    _react2.default.createElement("polyline", { points: "9 18 15 12 9 6" })
  );
};

var Bold = function Bold(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-bold"
    }, props),
    _react2.default.createElement("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    _react2.default.createElement("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
  );
};

var Italic = function Italic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-italic"
    }, props),
    _react2.default.createElement("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
    _react2.default.createElement("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
    _react2.default.createElement("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
  );
};

var Underline = function Underline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-underline"
    }, props),
    _react2.default.createElement("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
    _react2.default.createElement("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
  );
};

var Camera = function Camera(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-camera"
    }, props),
    _react2.default.createElement("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }),
    _react2.default.createElement("circle", { cx: "12", cy: "13", r: "4" })
  );
};

exports.Type = Type;
exports.List = List;
exports.ChevronRight = ChevronRight;
exports.Bold = Bold;
exports.Italic = Italic;
exports.Underline = Underline;
exports.Camera = Camera;