import { C } from './C' ;

/**
 * Number of modules required to sort n items.
 */
export function S ( n ) {

    if ( n < 2 ) return 0 ;

	let _m = n / 2 | 0 ;
	let _n = n - _m ;

	return S( _m ) + S( _n ) + C( _m , _n ) ;

}

