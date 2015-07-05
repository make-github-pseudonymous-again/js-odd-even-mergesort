"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/merge.js */

		/**
   * Merges
   *   [ i , i + r , i + 2 * r , ... , x [
   * with
   *   [ j , j + r , j + 2 * r , ... , k [
   * (2 sorted sequences).
   */

		var merge = regeneratorRuntime.mark(function merge(i, x, j, k, r) {
			var step, m, n;
			return regeneratorRuntime.wrap(function merge$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						step = r * 2;
						m = x - i;
						n = k - j;

						if (!(m <= 0 || n <= 0)) {
							context$3$0.next = 7;
							break;
						}

						return context$3$0.abrupt("return");

					case 7:
						if (!(m <= r && n <= r)) {
							context$3$0.next = 12;
							break;
						}

						context$3$0.next = 10;
						return [i, j];

					case 10:
						context$3$0.next = 32;
						break;

					case 12:
						return context$3$0.delegateYield(merge(i, x, j, k, step), "t0", 13);

					case 13:
						return context$3$0.delegateYield(merge(i + r, x, j + r, k, step), "t1", 14);

					case 14:
						i += r, x -= r;

					case 15:
						if (!(i < x)) {
							context$3$0.next = 21;
							break;
						}

						context$3$0.next = 18;
						return [i, i + r];

					case 18:
						i += step;
						context$3$0.next = 15;
						break;

					case 21:
						if (!(i < x + r)) {
							context$3$0.next = 25;
							break;
						}

						context$3$0.next = 24;
						return [i, j];

					case 24:
						j += r;

					case 25:
						k -= r;

					case 26:
						if (!(j < k)) {
							context$3$0.next = 32;
							break;
						}

						context$3$0.next = 29;
						return [j, j + r];

					case 29:
						j += step;
						context$3$0.next = 26;
						break;

					case 32:
					case "end":
						return context$3$0.stop();
				}
			}, merge, this);
		});

		exports.merge = merge;

		/* js/src/range.js */

		var range = regeneratorRuntime.mark(function range(i, j) {
			var pivot;
			return regeneratorRuntime.wrap(function range$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(j - i < 2)) {
							context$3$0.next = 2;
							break;
						}

						return context$3$0.abrupt("return");

					case 2:
						pivot = (i + j) / 2 | 0;
						return context$3$0.delegateYield(range(i, pivot), "t0", 4);

					case 4:
						return context$3$0.delegateYield(range(pivot, j), "t1", 5);

					case 5:
						return context$3$0.delegateYield(merge(i, pivot, pivot, j, 1), "t2", 6);

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, range, this);
		});

		exports.range = range;

		/* js/src/sort.js */

		var sort = function sort(compare, a, i, j) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {

				for (var _iterator = range(i, j)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var x = _step$value[0];
					var y = _step$value[1];

					if (compare(a[x], a[y]) > 0) {
						;

						var _ref = [a[y], a[x]];
						a[x] = _ref[0];
						a[y] = _ref[1];
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};

		exports.sort = sort;

		/* js/src/whole.js */

		var whole = regeneratorRuntime.mark(function whole(n) {
			return regeneratorRuntime.wrap(function whole$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(range(0, n), "t0", 1);

					case 1:
					case "end":
						return context$3$0.stop();
				}
			}, whole, this);
		});

		exports.whole = whole;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-odd-even-mergesort", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["oddevenmergesort"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-odd-even-mergesort");
})();

// handles the case when we want to merge
// i              x       j        k
// E O E ... O E O  with  E O E ...
//   |_|     |_| |________| |_|
//                   ^^
//                   ||
//            this comparison