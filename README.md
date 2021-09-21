# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bchau/lotide`

**Require it:**

`const _ = require('@bchau/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertObjectsEqual()`: asserts if 2 objects are equal
* `countLetters()`: counts each letter in a sentence
* `assertArraysEqual()`: asserts if 2 arrays are equal
* `head()`: returns first element of an array
* `assertEqual()`: checks if actual and expected values are equal
* `countOnly()`: finds and counts number of items in a given array
* `eqArrays()`: checks if 2 arrays are equal
* `eqObjects()`: checks if 2 arrays are equal
* `findKey()`: finds key of an object from a given value
* `letterPositions()`: finds index of each letter in a sentence
* `middle()`: returns middle value of an array
* `map()`: outputs the output from a given array based on given call back
* `tail()`: returns elements of an array except the first element
* `takeUntil()`: returns a new array until by looping in a given array until the given condition does not return true 
* `without()`: returns an array without those element/s which we do not want
* `findKeyByValue()`: finds key of an object from a given value