
var itertools = require( "aureooms-js-itertools" ) ;

// https://en.wikipedia.org/wiki/Batcher_odd–even_mergesort

test( "8" , function ( ) {
	deepEqual(
		itertools.list( oddevenmergesort.whole( 8 ) ) ,
		[
			[0, 1],
			[2, 3],
			[0, 2],
			[1, 3],
			[1, 2],
			[4, 5],
			[6, 7],
			[4, 6],
			[5, 7],
			[5, 6],
			[0, 4],
			[2, 6],
			[2, 4],
			[1, 5],
			[3, 7],
			[3, 5],
			[1, 2],
			[3, 4],
			[5, 6]
		],
		"whole(8)"
	) ;

} ) ;
