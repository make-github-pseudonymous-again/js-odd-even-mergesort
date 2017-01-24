import { range } from './range' ;

export function* whole ( n ) {

    yield* range( 0 , n ) ;

}

