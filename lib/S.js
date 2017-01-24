"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S = S;

/**
 * Number of modules required to sort n items.
 */
function S(n) {

  if (n < 2) return 0;

  var _m = n / 2 | 0;
  var _n = n - _m;

  return S(_m) + S(_n) + C(_m, _n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TLmpzIl0sIm5hbWVzIjpbIlMiLCJuIiwiX20iLCJfbiIsIkMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWdCQSxDLEdBQUFBLEM7O0FBSGhCOzs7QUFHTyxTQUFTQSxDQUFULENBQWFDLENBQWIsRUFBaUI7O0FBRXBCLE1BQUtBLElBQUksQ0FBVCxFQUFhLE9BQU8sQ0FBUDs7QUFFaEIsTUFBSUMsS0FBS0QsSUFBSSxDQUFKLEdBQVEsQ0FBakI7QUFDQSxNQUFJRSxLQUFLRixJQUFJQyxFQUFiOztBQUVBLFNBQU9GLEVBQUdFLEVBQUgsSUFBVUYsRUFBR0csRUFBSCxDQUFWLEdBQW9CQyxFQUFHRixFQUFILEVBQVFDLEVBQVIsQ0FBM0I7QUFFQSIsImZpbGUiOiJTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIE51bWJlciBvZiBtb2R1bGVzIHJlcXVpcmVkIHRvIHNvcnQgbiBpdGVtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFMgKCBuICkge1xuXG4gICAgaWYgKCBuIDwgMiApIHJldHVybiAwIDtcblxuXHRsZXQgX20gPSBuIC8gMiB8IDAgO1xuXHRsZXQgX24gPSBuIC0gX20gO1xuXG5cdHJldHVybiBTKCBfbSApICsgUyggX24gKSArIEMoIF9tICwgX24gKSA7XG5cbn1cblxuIl19