
/**
 * Number of modules required to merge two sorted lists of size m and n.
 * See TAOC Vol 3 (Networks for Sorting).
 */
export function C ( m , n ) {

	if ( m * n <= 1 ) return m * n ;

	const _m = m / 2 | 0 ;
	const _n = n / 2 | 0 ;

	return C( m - _m , n - _n ) + C( _m , _n ) + ( ( m + n - 1 ) / 2 | 0 ) ;

}

