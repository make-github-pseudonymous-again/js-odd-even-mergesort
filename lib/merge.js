"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.merge = merge;

var _marked = [merge].map(regeneratorRuntime.mark);

/**
 * Merges
 *   [ i , i + r , i + 2 * r , ... , x [
 * with
 *   [ j , j + r , j + 2 * r , ... , k [
 * (2 sorted sequences).
 */

function merge(i, x, j, k, r) {
	var step, m, n;
	return regeneratorRuntime.wrap(function merge$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					step = r * 2;
					m = x - i;
					n = k - j;

					if (!(m <= 0 || n <= 0)) {
						_context.next = 7;
						break;
					}

					return _context.abrupt("return");

				case 7:
					if (!(m <= r && n <= r)) {
						_context.next = 12;
						break;
					}

					_context.next = 10;
					return [i, j];

				case 10:
					_context.next = 32;
					break;

				case 12:
					return _context.delegateYield(merge(i, x, j, k, step), "t0", 13);

				case 13:
					return _context.delegateYield(merge(i + r, x, j + r, k, step), "t1", 14);

				case 14:
					i += r, x -= r;

				case 15:
					if (!(i < x)) {
						_context.next = 21;
						break;
					}

					_context.next = 18;
					return [i, i + r];

				case 18:
					i += step;
					_context.next = 15;
					break;

				case 21:
					if (!(i < x + r)) {
						_context.next = 25;
						break;
					}

					_context.next = 24;
					return [i, j];

				case 24:
					j += r;

				case 25:
					k -= r;

				case 26:
					if (!(j < k)) {
						_context.next = 32;
						break;
					}

					_context.next = 29;
					return [j, j + r];

				case 29:
					j += step;
					_context.next = 26;
					break;

				case 32:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImkiLCJ4IiwiaiIsImsiLCJyIiwic3RlcCIsIm0iLCJuIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNpQkEsSyxHQUFBQSxLOztlQUFBQSxLOztBQVJqQjs7Ozs7Ozs7QUFRTyxTQUFVQSxLQUFWLENBQWtCQyxDQUFsQixFQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxDQUE5QixFQUFrQ0MsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFNBRkEsR0FFT0QsSUFBSSxDQUZYO0FBSUFFLE1BSkEsR0FJSUwsSUFBSUQsQ0FKUjtBQUtBTyxNQUxBLEdBS0lKLElBQUlELENBTFI7O0FBQUEsV0FPREksS0FBSyxDQUFMLElBQVVDLEtBQUssQ0FQZDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLFdBU0lELEtBQUtGLENBQUwsSUFBVUcsS0FBS0gsQ0FUbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQVM2QixDQUFFSixDQUFGLEVBQU1FLENBQU4sQ0FUN0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUNBYVFILE1BQVNDLENBQVQsRUFBZUMsQ0FBZixFQUFxQkMsQ0FBckIsRUFBMkJDLENBQTNCLEVBQStCRSxJQUEvQixDQWJSOztBQUFBO0FBQUEsbUNBY1FOLE1BQU9DLElBQUlJLENBQVgsRUFBZUgsQ0FBZixFQUFtQkMsSUFBSUUsQ0FBdkIsRUFBMkJELENBQTNCLEVBQStCRSxJQUEvQixDQWRSOztBQUFBO0FBZ0JDTCxVQUFLSSxDQUFMLEVBQVNILEtBQUtHLENBaEJmOztBQUFBO0FBQUEsV0FnQm1CSixJQUFJQyxDQWhCdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQWdCNkMsQ0FBRUQsQ0FBRixFQUFNQSxJQUFJSSxDQUFWLENBaEI3Qzs7QUFBQTtBQWdCMkJKLFVBQUtLLElBaEJoQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQWtCQUwsSUFBSUMsSUFBSUcsQ0FsQlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQTRCRSxDQUFFSixDQUFGLEVBQU1FLENBQU4sQ0E1QkY7O0FBQUE7QUE2QkpBLFVBQUtFLENBQUw7O0FBN0JJO0FBaUNDRCxVQUFLQyxDQWpDTjs7QUFBQTtBQUFBLFdBaUNVRixJQUFJQyxDQWpDZDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBaUNvQyxDQUFFRCxDQUFGLEVBQU1BLElBQUlFLENBQVYsQ0FqQ3BDOztBQUFBO0FBaUNrQkYsVUFBS0csSUFqQ3ZCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBNZXJnZXNcbiAqICAgWyBpICwgaSArIHIgLCBpICsgMiAqIHIgLCAuLi4gLCB4IFtcbiAqIHdpdGhcbiAqICAgWyBqICwgaiArIHIgLCBqICsgMiAqIHIgLCAuLi4gLCBrIFtcbiAqICgyIHNvcnRlZCBzZXF1ZW5jZXMpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogbWVyZ2UgKCBpICwgeCAsIGogLCBrICwgciApIHtcblxuXHRjb25zdCBzdGVwID0gciAqIDIgO1xuXG5cdGNvbnN0IG0gPSB4IC0gaSA7XG5cdGNvbnN0IG4gPSBrIC0gaiA7XG5cblx0aWYgKCBtIDw9IDAgfHwgbiA8PSAwICkgcmV0dXJuIDtcblxuXHRlbHNlIGlmICggbSA8PSByICYmIG4gPD0gciApIHlpZWxkIFsgaSAsIGogXSA7XG5cblx0ZWxzZSB7XG5cbiAgICAgICAgeWllbGQqIG1lcmdlKCAgIGkgICAsIHggLCAgIGogICAsIGsgLCBzdGVwICkgO1xuICAgICAgICB5aWVsZCogbWVyZ2UoIGkgKyByICwgeCAsIGogKyByICwgayAsIHN0ZXAgKSA7XG5cblx0XHRmb3IgKCBpICs9IHIgLCB4IC09IHIgOyBpIDwgeCA7IGkgKz0gc3RlcCApIHlpZWxkIFsgaSAsIGkgKyByIF0gO1xuXG5cdFx0aWYgKCBpIDwgeCArIHIgKSB7XG5cblx0XHRcdC8vIGhhbmRsZXMgdGhlIGNhc2Ugd2hlbiB3ZSB3YW50IHRvIG1lcmdlXG5cdFx0XHQvLyBpICAgICAgICAgICAgICB4ICAgICAgIGogICAgICAgIGtcblx0XHRcdC8vIEUgTyBFIC4uLiBPIEUgTyAgd2l0aCAgRSBPIEUgLi4uXG5cdFx0XHQvLyAgIHxffCAgICAgfF98IHxfX19fX19fX3wgfF98XG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgICBeXlxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgICAgfHxcblx0XHRcdC8vICAgICAgICAgICAgdGhpcyBjb21wYXJpc29uXG5cblx0XHRcdHlpZWxkIFsgaSAsIGogXSA7XG5cdFx0XHRqICs9IHIgO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggayAtPSByIDsgaiA8IGsgOyBqICs9IHN0ZXAgKSB5aWVsZCBbIGogLCBqICsgciBdIDtcblxuXHR9XG5cbn1cblxuIl19