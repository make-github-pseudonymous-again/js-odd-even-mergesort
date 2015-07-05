[js-odd-even-mergesort](http://aureooms.github.io/js-odd-even-mergesort)
==

Batcher's odd-even mergesort code bricks for JavaScript

```js
let modules = itertools.list( oddevenmergesort.whole( 4 ) ) ;
modules ; // [ [ 0 , 1 ] , [ 2 , 3 ] , [ 0 , 2 ] , [ 1 , 3 ] , [ 1 , 2 ] ]

let a = [ 3 , 1 , 2 , 4 ] ;
for ( let [ i , j ] of modules ) if ( compare( a[i] , a[j] ) > 0 ) swap( a , i , j ) ;

// 3 ----1------1----------- 1
//       |      |
// 1 ----3------|-3----2---- 2
//              | |    |
// 2 ------2----2-|----3---- 3
//         |      |
// 4 ------4------4--------- 4

a ; // [ 1 , 2 , 3 , 4 ]
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-odd-even-mergesort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-odd-even-mergesort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-odd-even-mergesort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-odd-even-mergesort)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-odd-even-mergesort.svg?style=flat)](http://bower.io/search/?q=aureooms-js-odd-even-mergesort)
[![Build Status](http://img.shields.io/travis/aureooms/js-odd-even-mergesort.svg?style=flat)](https://travis-ci.org/aureooms/js-odd-even-mergesort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-odd-even-mergesort.svg?style=flat)](https://coveralls.io/r/aureooms/js-odd-even-mergesort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-odd-even-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-odd-even-mergesort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-odd-even-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-odd-even-mergesort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-odd-even-mergesort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-odd-even-mergesort)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-odd-even-mergesort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-odd-even-mergesort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-odd-even-mergesort.svg?style=flat)](https://github.com/aureooms/js-odd-even-mergesort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-odd-even-mergesort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-odd-even-mergesort)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-odd-even-mergesort
# or
jspm install npm:aureooms-js-odd-even-mergesort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-odd-even-mergesort
```

### bower
```terminal
bower install aureooms-js-odd-even-mergesort
```

### ender
```terminal
ender add aureooms-js-odd-even-mergesort
```

### jam
```terminal
jam install aureooms-js-odd-even-mergesort
```

### spm
```terminal
spm install aureooms-js-odd-even-mergesort --save
```

### npm
```terminal
npm install aureooms-js-odd-even-mergesort --save
```

## Require
### jspm
```js
let oddevenmergesort = require( "github:aureooms/js-odd-even-mergesort" ) ;
// or
import oddevenmergesort from 'aureooms-js-odd-even-mergesort' ;
```
### duo
```js
let oddevenmergesort = require( "aureooms/js-odd-even-mergesort" ) ;
```

### component, ender, spm, npm
```js
let oddevenmergesort = require( "aureooms-js-odd-even-mergesort" ) ;
```

### bower
The script tag exposes the global variable `oddevenmergesort`.
```html
<script src="bower_components/aureooms-js-odd-even-mergesort/js/dist/odd-even-mergesort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-odd-even-mergesort" ] , function ( oddevenmergesort ) { ... } ) ;
```

## Use

```js
let compare = require( "aureooms-js-compare" ) ;

let a = [ 3 , 1 , 2 , 4 ] ;
oddevenmergesort.sort( compare.increasing , a , 0 , a.length ) ; // O(n log² n)
a ; // [ 1 , 2 , 3 , 4 ]
```
