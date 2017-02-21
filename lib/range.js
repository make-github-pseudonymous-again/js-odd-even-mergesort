'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.range = range;

var _merge = require('./merge');

var _marked = [range].map(regeneratorRuntime.mark);

function range(i, j) {
				var pivot;
				return regeneratorRuntime.wrap(function range$(_context) {
								while (1) {
												switch (_context.prev = _context.next) {
																case 0:
																				if (!(j - i < 2)) {
																								_context.next = 2;
																								break;
																				}

																				return _context.abrupt('return');

																case 2:
																				pivot = (i + j) / 2 | 0;
																				return _context.delegateYield(range(i, pivot), 't0', 4);

																case 4:
																				return _context.delegateYield(range(pivot, j), 't1', 5);

																case 5:
																				return _context.delegateYield((0, _merge.merge)(i, pivot, pivot, j, 1), 't2', 6);

																case 6:
																case 'end':
																				return _context.stop();
												}
								}
				}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yYW5nZS5qcyJdLCJuYW1lcyI6WyJyYW5nZSIsImkiLCJqIiwicGl2b3QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWlCQSxLLEdBQUFBLEs7O0FBRmpCOztlQUVpQkEsSzs7QUFBVixTQUFVQSxLQUFWLENBQWtCQyxDQUFsQixFQUFzQkMsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRUVBLElBQUlELENBQUosR0FBUSxDQUZWO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBSUZFLHlCQUpFLEdBSU0sQ0FBRUYsSUFBSUMsQ0FBTixJQUFZLENBQVosR0FBZ0IsQ0FKdEI7QUFBQSxrREFNQ0YsTUFBT0MsQ0FBUCxFQUFXRSxLQUFYLENBTkQ7O0FBQUE7QUFBQSxrREFPQ0gsTUFBT0csS0FBUCxFQUFlRCxDQUFmLENBUEQ7O0FBQUE7QUFBQSxrREFRQyxrQkFBT0QsQ0FBUCxFQUFXRSxLQUFYLEVBQW1CQSxLQUFuQixFQUEyQkQsQ0FBM0IsRUFBK0IsQ0FBL0IsQ0FSRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJyYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZScgO1xuXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlICggaSAsIGogKSB7XG5cbiAgICBpZiAoIGogLSBpIDwgMiApIHJldHVybiA7XG5cblx0bGV0IHBpdm90ID0gKCBpICsgaiApIC8gMiB8IDAgO1xuXG5cdHlpZWxkKiByYW5nZSggaSAsIHBpdm90ICkgO1xuXHR5aWVsZCogcmFuZ2UoIHBpdm90ICwgaiApIDtcblx0eWllbGQqIG1lcmdlKCBpICwgcGl2b3QgLCBwaXZvdCAsIGogLCAxICkgO1xuXG59XG5cbiJdfQ==