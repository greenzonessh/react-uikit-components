webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof2(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _typeof(obj) {\n  return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  var _loop = function _loop(i) {\n    return {\n      v: item.map(function (val, index) {\n        var col = undefined;\n        var isUndefined = function isUndefined(data) {\n          return data ? data : 0;\n        };\n\n        var item1PlusOne = val[2] + 1;\n        var item1PlusItem2 = val[2] + isUndefined(item[index + 1])[2];\n        var item2MinusItem1 = isUndefined(item[index + 1])[2] - isUndefined(val[i])[2];\n\n        console.log(isUndefined(item[index + 1]), isUndefined(val[i])[2]);\n\n        // sets colspan\n        if (item1PlusOne !== item1PlusItem2 + 1) {\n          col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n        };\n\n        return _react2.default.createElement('td', {\n          colSpan: col,\n          key: index,\n          'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n      })\n    };\n  };\n\n  for (var i = 0; i < item.length; i++) {\n    var _ret = _loop(i);\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLEdBQUcsUUFBUSxVQUFVLEdBQUcsMENBQUgsR0FBRyxFQUFDO0NBQUU7O0FBRTVILElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixNQUFJLEtBQUssR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDNUIsV0FBTztBQUNMLE9BQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxZQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDcEIsWUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzNDLGlCQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCLENBQUM7O0FBRUYsWUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixZQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxZQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFL0UsZUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR2pFLFlBQUksWUFBWSxLQUFLLGNBQWMsR0FBRyxDQUFDLEVBQUU7QUFDdkMsYUFBRyxHQUFHLGVBQWUsS0FBSyxDQUFDLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQztTQUN0RCxDQUFDOztBQUVGLGVBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSjtBQUNFLGlCQUFPLEVBQUUsR0FBRztBQUNaLGFBQUcsRUFBRSxLQUFLO0FBQ1Ysc0JBQVksRUFBRSxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ2pGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO09BQ0gsQ0FBQztLQUNILENBQUM7R0FDSCxDQUFDOztBQUVGLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDN0Y7Q0FDRixDQUFDOztBQUVGLFNBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDckMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FDeEMsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMiLCJmaWxlIjoiOTYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciBUYWJsZURhdGEgPSBmdW5jdGlvbiBUYWJsZURhdGEocHJvcHMpIHtcbiAgdmFyIGl0ZW0gPSBwcm9wcy5pdGVtO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdjogaXRlbS5tYXAoZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzVW5kZWZpbmVkID0gZnVuY3Rpb24gaXNVbmRlZmluZWQoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBkYXRhID8gZGF0YSA6IDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGl0ZW0xUGx1c09uZSA9IHZhbFsyXSArIDE7XG4gICAgICAgIHZhciBpdGVtMVBsdXNJdGVtMiA9IHZhbFsyXSArIGlzVW5kZWZpbmVkKGl0ZW1baW5kZXggKyAxXSlbMl07XG4gICAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSBpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pWzJdIC0gaXNVbmRlZmluZWQodmFsW2ldKVsyXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pLCBpc1VuZGVmaW5lZCh2YWxbaV0pWzJdKTtcblxuICAgICAgICAvLyBzZXRzIGNvbHNwYW5cbiAgICAgICAgaWYgKGl0ZW0xUGx1c09uZSAhPT0gaXRlbTFQbHVzSXRlbTIgKyAxKSB7XG4gICAgICAgICAgY29sID0gaXRlbTJNaW51c0l0ZW0xICE9PSAwID8gaXRlbTJNaW51c0l0ZW0xIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xTcGFuOiBjb2wsXG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiAndGFibGVkYXRhLVsnICsgcHJvcHMuaW5kZXggKyAnLCAnICsgaW5kZXggKyAnXS0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgICAgICB2YWxbMV1cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3JldCA9IF9sb29wKGkpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG59O1xuXG5UYWJsZURhdGEucHJvcFR5cGVzID0ge1xuICBpdGVtOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBpbmRleDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVEYXRhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvbGliL3RhYmxlLWRhdGEuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})