import ava from 'ava';
import { sort } from '../../src';
import * as spec from "@aureooms/js-in-situ-sort-spec" ;

spec.test( ava , [
    [ "Batcher's odd-even mergesort", sort ]
] ) ;
