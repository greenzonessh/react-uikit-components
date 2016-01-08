webpackHotUpdate(0,{

/***/ 964:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _tableData = __webpack_require__(962);\n\nvar _tableData2 = _interopRequireDefault(_tableData);\n\nvar _sortIt = __webpack_require__(961);\n\nvar _sortIt2 = _interopRequireDefault(_sortIt);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n// Convert object to array with index column position\nvar bodyToArray = function bodyToArray(body, columns) {\n\n  return body.map(function (item) {\n    return Object.keys(item).map(function (k) {\n      var pos = columns.map(function (i) {\n        return i.toLowerCase();\n      }).indexOf(k.toLowerCase());\n      console.log([k, item[k], pos]);\n      return [k, item[k], pos];\n    });\n  });\n};\n\n// Sorts a collection of data\nvar sort = function sort(data, critera) {\n  if (!critera) return data;\n  return (0, _sortIt2.default)(data, critera);\n};\n\nvar numbered = function numbered(index) {\n  return _react2.default.createElement('td', null, index + 1);\n};\n\nvar TableRows = function TableRows(props, columns) {\n  return bodyToArray(sort(props.body, props.sort), columns).map(function (item, index) {\n    return _react2.default.createElement('tr', { key: index, 'data-kitid': 'tablerow-' + index + '-' + props.kitid }, props.numbered ? numbered(index) : null, (0, _tableData2.default)({\n      columns: columns,\n      item: item,\n      index: index,\n      kitid: props.kitid\n    }));\n  });\n};\n\nTableRows.propTypes = {\n  body: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  numbered: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),\n  sort: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.string])\n};\n\nexports.default = TableRows;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtcm93cy5qcz9hY2E4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksVUFBVSxHQUFHLG1CQUFPLENBQUMsR0FBYyxDQUFDLENBQUM7O0FBRXpDLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVyRCxJQUFJLE9BQU8sR0FBRyxtQkFBTyxDQUFDLEdBQVMsQ0FBQyxDQUFDOztBQUVqQyxJQUFJLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFL0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOzs7QUFHL0YsSUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTs7QUFFcEQsU0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFO0FBQzlCLFdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDeEMsVUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNqQyxlQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztPQUN4QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsYUFBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0o7OztBQUdELElBQUksSUFBSSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdEMsTUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQztBQUMxQixTQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQzdDLENBQUM7O0FBRUYsSUFBSSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3RDLFNBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxHQUFHLENBQUMsQ0FDVixDQUFDO0NBQ0gsQ0FBQzs7QUFFRixJQUFJLFNBQVMsR0FBRyxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ2pELFNBQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25GLFdBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xDLElBQUksRUFDSixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDckUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUN2QyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLGFBQU8sRUFBRSxPQUFPO0FBQ2hCLFVBQUksRUFBRSxJQUFJO0FBQ1YsV0FBSyxFQUFFLEtBQUs7QUFDWixXQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7S0FDbkIsQ0FBQyxDQUNILENBQUM7R0FDSCxDQUFDLENBQUM7Q0FDSixDQUFDOztBQUVGLFNBQVMsQ0FBQyxTQUFTLEdBQUc7QUFDcEIsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDckMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqSCxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQy9HLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6Ijk2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RhYmxlRGF0YSA9IHJlcXVpcmUoJy4vdGFibGUtZGF0YScpO1xuXG52YXIgX3RhYmxlRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJsZURhdGEpO1xuXG52YXIgX3NvcnRJdCA9IHJlcXVpcmUoJ3NvcnQtaXQnKTtcblxudmFyIF9zb3J0SXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydEl0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQ29udmVydCBvYmplY3QgdG8gYXJyYXkgd2l0aCBpbmRleCBjb2x1bW4gcG9zaXRpb25cbnZhciBib2R5VG9BcnJheSA9IGZ1bmN0aW9uIGJvZHlUb0FycmF5KGJvZHksIGNvbHVtbnMpIHtcblxuICByZXR1cm4gYm9keS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbSkubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICB2YXIgcG9zID0gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0pLmluZGV4T2Yoay50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGNvbnNvbGUubG9nKFtrLCBpdGVtW2tdLCBwb3NdKTtcbiAgICAgIHJldHVybiBbaywgaXRlbVtrXSwgcG9zXTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBTb3J0cyBhIGNvbGxlY3Rpb24gb2YgZGF0YVxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KGRhdGEsIGNyaXRlcmEpIHtcbiAgaWYgKCFjcml0ZXJhKSByZXR1cm4gZGF0YTtcbiAgcmV0dXJuICgwLCBfc29ydEl0Mi5kZWZhdWx0KShkYXRhLCBjcml0ZXJhKTtcbn07XG5cbnZhciBudW1iZXJlZCA9IGZ1bmN0aW9uIG51bWJlcmVkKGluZGV4KSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAndGQnLFxuICAgIG51bGwsXG4gICAgaW5kZXggKyAxXG4gICk7XG59O1xuXG52YXIgVGFibGVSb3dzID0gZnVuY3Rpb24gVGFibGVSb3dzKHByb3BzLCBjb2x1bW5zKSB7XG4gIHJldHVybiBib2R5VG9BcnJheShzb3J0KHByb3BzLmJvZHksIHByb3BzLnNvcnQpLCBjb2x1bW5zKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RyJyxcbiAgICAgIHsga2V5OiBpbmRleCwgJ2RhdGEta2l0aWQnOiAndGFibGVyb3ctJyArIGluZGV4ICsgJy0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgIHByb3BzLm51bWJlcmVkID8gbnVtYmVyZWQoaW5kZXgpIDogbnVsbCxcbiAgICAgICgwLCBfdGFibGVEYXRhMi5kZWZhdWx0KSh7XG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAga2l0aWQ6IHByb3BzLmtpdGlkXG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufTtcblxuVGFibGVSb3dzLnByb3BUeXBlcyA9IHtcbiAgYm9keTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBudW1iZXJlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmddKSxcbiAgc29ydDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlUm93cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LXRhYmxlL2xpYi90YWJsZS1yb3dzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})