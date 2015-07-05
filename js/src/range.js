
const range = function* ( i , j ) {

    if ( j - i < 2 ) return ;

	let pivot = ( i + j ) / 2 | 0 ;

	yield* range( i , pivot ) ;
	yield* range( pivot , j ) ;
	yield* merge( i , pivot , pivot , j , 1 ) ;

} ;

exports.range = range ;
