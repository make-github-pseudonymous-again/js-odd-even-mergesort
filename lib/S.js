'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S = S;

var _C = require('./C');

/**
 * Number of modules required to sort n items.
 */
function S(n) {

  if (n < 2) return 0;

  var _m = n / 2 | 0;
  var _n = n - _m;

  return S(_m) + S(_n) + (0, _C.C)(_m, _n);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TLmpzIl0sIm5hbWVzIjpbIlMiLCJuIiwiX20iLCJfbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFLZ0JBLEMsR0FBQUEsQzs7QUFMaEI7O0FBRUE7OztBQUdPLFNBQVNBLENBQVQsQ0FBYUMsQ0FBYixFQUFpQjs7QUFFcEIsTUFBS0EsSUFBSSxDQUFULEVBQWEsT0FBTyxDQUFQOztBQUVoQixNQUFJQyxLQUFLRCxJQUFJLENBQUosR0FBUSxDQUFqQjtBQUNBLE1BQUlFLEtBQUtGLElBQUlDLEVBQWI7O0FBRUEsU0FBT0YsRUFBR0UsRUFBSCxJQUFVRixFQUFHRyxFQUFILENBQVYsR0FBb0IsVUFBR0QsRUFBSCxFQUFRQyxFQUFSLENBQTNCO0FBRUEiLCJmaWxlIjoiUy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEMgfSBmcm9tICcuL0MnIDtcblxuLyoqXG4gKiBOdW1iZXIgb2YgbW9kdWxlcyByZXF1aXJlZCB0byBzb3J0IG4gaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTICggbiApIHtcblxuICAgIGlmICggbiA8IDIgKSByZXR1cm4gMCA7XG5cblx0bGV0IF9tID0gbiAvIDIgfCAwIDtcblx0bGV0IF9uID0gbiAtIF9tIDtcblxuXHRyZXR1cm4gUyggX20gKSArIFMoIF9uICkgKyBDKCBfbSAsIF9uICkgO1xuXG59XG5cbiJdfQ==