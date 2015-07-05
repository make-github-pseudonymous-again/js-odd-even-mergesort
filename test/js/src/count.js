
var itertools = require( "aureooms-js-itertools" ) ;

test( "count" , function ( ) {

	var n , N ;

	N = 100 ;

	for ( n = 0 ; n < N ; ++n ) {

		deepEqual(
			itertools.len( itertools.list( oddevenmergesort.whole( n ) ) ) ,
			oddevenmergesort.S( n ) ,
			"count #" + n
		) ;

	}

} ) ;
