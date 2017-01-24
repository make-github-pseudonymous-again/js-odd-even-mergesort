import test from 'ava';
import { S , whole } from '../../src';

import { len } from "aureooms-js-cardinality" ;

test( "count" , t => {

	const N = 100 ;

	for ( let n = 0 ; n < N ; ++n ) {

		t.deepEqual(
			len( whole( n ) ) ,
			S( n ) ,
			`count #${n}`
		) ;

	}

} ) ;
