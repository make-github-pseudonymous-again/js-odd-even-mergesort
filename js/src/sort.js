
const sort = function ( compare , a , i , j ) {

	for ( const [ x , y ] of range( i , j ) ) {

		if ( compare( a[x] , a[y] ) > 0 ) [ a[x] , a[y] ] = [ a[y] , a[x] ] ;

	}

} ;

exports.sort = sort ;
