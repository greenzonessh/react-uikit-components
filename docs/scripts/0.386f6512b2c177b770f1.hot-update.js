webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  for (var i = 0; i < item.length; i++) {\n    return item.map(function (val, index) {\n      var col = undefined;\n\n      function isUndefined(data) {\n        return data ? data : 0;\n      };\n\n      var item1PlusOne = val[2] + 1;\n      var item1PlusItem2 = val[2] + isUndefined(item[index + 1])[2];\n      var item2MinusItem1 = isUndefined(item[index + 1])[2] - isUndefined(val[2])[2];\n\n      console.log(val[1], item1PlusOne, item1PlusItem2, item2MinusItem1);\n\n      // sets colspan\n      if (item1PlusOne !== item1PlusItem2 + 1) {\n        col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n      };\n\n      return _react2.default.createElement('td', {\n        colSpan: col,\n        key: index,\n        'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n    });\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQ3hDLE1BQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRXRCLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLFdBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDcEMsVUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDOztBQUVwQixlQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDekIsZUFBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztPQUN4QixDQUFDOztBQUVGLFVBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsVUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsVUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9FLGFBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDOzs7QUFHbEUsVUFBSSxZQUFZLEtBQUssY0FBYyxHQUFHLENBQUMsRUFBRTtBQUN2QyxXQUFHLEdBQUcsZUFBZSxLQUFLLENBQUMsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDO09BQ3RELENBQUM7O0FBRUYsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbEMsSUFBSSxFQUNKO0FBQ0UsZUFBTyxFQUFFLEdBQUc7QUFDWixXQUFHLEVBQUUsS0FBSztBQUNWLG9CQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNqRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztLQUNILENBQUMsQ0FBQztHQUNKO0NBQ0YsQ0FBQzs7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3JDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0NBQ3hDLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6Ijk2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVGFibGVEYXRhID0gZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzKSB7XG4gIHZhciBpdGVtID0gcHJvcHMuaXRlbTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICByZXR1cm4gaXRlbS5tYXAoZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgIHZhciBjb2wgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhIDogMDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBpdGVtMVBsdXNPbmUgPSB2YWxbMl0gKyAxO1xuICAgICAgdmFyIGl0ZW0xUGx1c0l0ZW0yID0gdmFsWzJdICsgaXNVbmRlZmluZWQoaXRlbVtpbmRleCArIDFdKVsyXTtcbiAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSBpc1VuZGVmaW5lZChpdGVtW2luZGV4ICsgMV0pWzJdIC0gaXNVbmRlZmluZWQodmFsWzJdKVsyXTtcblxuICAgICAgY29uc29sZS5sb2codmFsWzFdLCBpdGVtMVBsdXNPbmUsIGl0ZW0xUGx1c0l0ZW0yLCBpdGVtMk1pbnVzSXRlbTEpO1xuXG4gICAgICAvLyBzZXRzIGNvbHNwYW5cbiAgICAgIGlmIChpdGVtMVBsdXNPbmUgIT09IGl0ZW0xUGx1c0l0ZW0yICsgMSkge1xuICAgICAgICBjb2wgPSBpdGVtMk1pbnVzSXRlbTEgIT09IDAgPyBpdGVtMk1pbnVzSXRlbTEgOiBudWxsO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGQnLFxuICAgICAgICB7XG4gICAgICAgICAgY29sU3BhbjogY29sLFxuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAndGFibGVkYXRhLVsnICsgcHJvcHMuaW5kZXggKyAnLCAnICsgaW5kZXggKyAnXS0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgICAgdmFsWzFdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59O1xuXG5UYWJsZURhdGEucHJvcFR5cGVzID0ge1xuICBpdGVtOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBpbmRleDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVEYXRhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvbGliL3RhYmxlLWRhdGEuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})