
const S = function ( n ) {

    if ( n < 2 ) return 0 ;

	let _m = n / 2 | 0 ;
	let _n = n - _m ;

	return S( _m ) + S( _n ) + C( _m , _n ) ;

} ;

exports.S = S ;
