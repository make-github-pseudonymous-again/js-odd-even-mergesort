[@aureooms/js-odd-even-mergesort](https://aureooms.github.io/js-odd-even-mergesort)
==

<img src="https://cdn.rawgit.com/aureooms/js-odd-even-mergesort/master/media/sketch.svg" width="864">

Batcher's odd-even mergesort algorithm for JavaScript.
See [docs](https://aureooms.github.io/js-odd-even-mergesort).
Parent is [@aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
import { whole } from '@aureooms/js-odd-even-mergesort' ;
import { list } from '@aureooms/js-itertools' ;
import { increasing } from '@aureooms/js-compare' ;
import { swap } from '@aureooms/js-array' ;
let modules = list( whole( 4 ) ) ;
modules ; // [ [ 0 , 1 ] , [ 2 , 3 ] , [ 0 , 2 ] , [ 1 , 3 ] , [ 1 , 2 ] ]

let a = [ 3 , 1 , 2 , 4 ] ;
for ( let [ i , j ] of modules ) if ( increasing( a[i] , a[j] ) > 0 ) swap( a , i , j ) ;

// 3 ----1------1----------- 1
//       |      |
// 1 ----3------|-3----2---- 2
//              | |    |
// 2 ------2----2-|----3---- 3
//         |      |
// 4 ------4------4--------- 4

a ; // [ 1 , 2 , 3 , 4 ]
```

[![NPM license](https://img.shields.io/npm/l/@aureooms/js-odd-even-mergesort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-odd-even-mergesort/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-odd-even-mergesort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-odd-even-mergesort)
[![Build Status](https://img.shields.io/travis/aureooms/js-odd-even-mergesort.svg?style=flat)](https://travis-ci.org/aureooms/js-odd-even-mergesort)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-odd-even-mergesort.svg?style=flat)](https://coveralls.io/r/aureooms/js-odd-even-mergesort)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-odd-even-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-odd-even-mergesort#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-odd-even-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-odd-even-mergesort#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-odd-even-mergesort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-odd-even-mergesort)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-odd-even-mergesort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-odd-even-mergesort)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-odd-even-mergesort.svg?style=flat)](https://github.com/aureooms/js-odd-even-mergesort/issues)
[![Documentation](https://aureooms.github.io/js-odd-even-mergesort/badge.svg)](https://aureooms.github.io/js-odd-even-mergesort/source.html)
