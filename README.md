[@aureooms/js-odd-even-mergesort](https://make-github-pseudonymous-again.github.io/js-odd-even-mergesort)
==

<img src="https://cdn.rawgit.com/aureooms/js-odd-even-mergesort/master/media/sketch.svg" width="864">

Batcher's odd-even mergesort algorithm for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-odd-even-mergesort).
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

[![License](https://img.shields.io/github/license/aureooms/js-odd-even-mergesort.svg)](https://raw.githubusercontent.com/aureooms/js-odd-even-mergesort/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-odd-even-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-odd-even-mergesort)
[![Build](https://img.shields.io/travis/aureooms/js-odd-even-mergesort/master.svg)](https://travis-ci.org/aureooms/js-odd-even-mergesort/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-odd-even-mergesort.svg)](https://david-dm.org/aureooms/js-odd-even-mergesort)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-odd-even-mergesort.svg)](https://david-dm.org/aureooms/js-odd-even-mergesort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-odd-even-mergesort.svg)](https://github.com/aureooms/js-odd-even-mergesort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-odd-even-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-odd-even-mergesort)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-odd-even-mergesort.svg)](https://codeclimate.com/github/aureooms/js-odd-even-mergesort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-odd-even-mergesort.svg)](https://codeclimate.com/github/aureooms/js-odd-even-mergesort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-odd-even-mergesort/master.svg)](https://codecov.io/gh/aureooms/js-odd-even-mergesort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-odd-even-mergesort.svg)](https://codeclimate.com/github/aureooms/js-odd-even-mergesort/trends/technical_debt)
[![Documentation](http://make-github-pseudonymous-again.github.io/js-odd-even-mergesort//badge.svg)](http://make-github-pseudonymous-again.github.io/js-odd-even-mergesort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-odd-even-mergesort)](https://bundlephobia.com/result?p=@aureooms/js-odd-even-mergesort)
