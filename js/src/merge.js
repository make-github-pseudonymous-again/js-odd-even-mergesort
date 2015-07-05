
/**
 * Merges
 *   [ i , i + r , i + 2 * r , ... , x [
 * with
 *   [ j , j + r , j + 2 * r , ... , k [
 * (2 sorted sequences).
 */

const merge = function* ( i , x , j , k , r ) {

	const step = r * 2 ;

	const m = x - i ;
	const n = k - j ;

	if ( m <= 0 || n <= 0 ) return ;

	else if ( m <= r && n <= r ) yield [ i , j ] ;

	else {

        yield* merge(   i   , x ,   j   , k , step ) ;
        yield* merge( i + r , x , j + r , k , step ) ;

		for ( i += r , x -= r ; i < x ; i += step ) yield [ i , i + r ] ;

		if ( i < x + r ) {

			// handles the case when we want to merge
			// i              x       j        k
			// E O E ... O E O  with  E O E ...
			//   |_|     |_| |________| |_|
			//                   ^^
			//                   ||
			//            this comparison

			yield [ i , j ] ;
			j += r ;

		}

		for ( k -= r ; j < k ; j += step ) yield [ j , j + r ] ;

	}

} ;

exports.merge = merge ;
