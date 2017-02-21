'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.sort = sort;

var _range = require('./range');

function sort(compare, a, i, j) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {

		for (var _iterator = (0, _range.range)(i, j)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var x = _ref2[0];
			var y = _ref2[1];


			if (compare(a[x], a[y]) > 0) {
				;

				var _ref3 = [a[y], a[x]];
				a[x] = _ref3[0];
				a[y] = _ref3[1];
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3J0LmpzIl0sIm5hbWVzIjpbInNvcnQiLCJjb21wYXJlIiwiYSIsImkiLCJqIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBRWdCQSxJLEdBQUFBLEk7O0FBRmhCOztBQUVPLFNBQVNBLElBQVQsQ0FBZ0JDLE9BQWhCLEVBQTBCQyxDQUExQixFQUE4QkMsQ0FBOUIsRUFBa0NDLENBQWxDLEVBQXNDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU1Qyx1QkFBeUIsa0JBQU9ELENBQVAsRUFBV0MsQ0FBWCxDQUF6Qiw4SEFBMEM7QUFBQTs7QUFBQTs7QUFBQSxPQUE1QkMsQ0FBNEI7QUFBQSxPQUF4QkMsQ0FBd0I7OztBQUV6QyxPQUFLTCxRQUFTQyxFQUFFRyxDQUFGLENBQVQsRUFBZ0JILEVBQUVJLENBQUYsQ0FBaEIsSUFBeUIsQ0FBOUI7QUFBa0M7O0FBQWxDLGdCQUFvRCxDQUFFSixFQUFFSSxDQUFGLENBQUYsRUFBU0osRUFBRUcsQ0FBRixDQUFULENBQXBEO0FBQW9DSCxNQUFFRyxDQUFGLENBQXBDO0FBQTJDSCxNQUFFSSxDQUFGLENBQTNDO0FBQUE7QUFFQTtBQU4yQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTVDIiwiZmlsZSI6InNvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5nZSB9IGZyb20gJy4vcmFuZ2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnQgKCBjb21wYXJlICwgYSAsIGkgLCBqICkge1xuXG5cdGZvciAoIGNvbnN0IFsgeCAsIHkgXSBvZiByYW5nZSggaSAsIGogKSApIHtcblxuXHRcdGlmICggY29tcGFyZSggYVt4XSAsIGFbeV0gKSA+IDAgKSBbIGFbeF0gLCBhW3ldIF0gPSBbIGFbeV0gLCBhW3hdIF0gO1xuXG5cdH1cblxufVxuXG4iXX0=