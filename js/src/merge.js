
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

			yield [ i , j ] ;
			j += r ;

		}

		for ( k -= r ; j < k ; j += step ) yield [ j , j + r ] ;

	}

} ;

exports.merge = merge ;
