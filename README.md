# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raijenken27/lotide`

**Require it:**

`const _ = require('@raijenken27/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation


***head:*** Retrieves the initial element from an array; yields 'undefined' if the array is devoid of elements.

***tail:*** Provides all elements except the first one from an array; returns an empty array if the input array is empty.

***middle:*** Supplies the central element(s) of a given array; for arrays containing one or two elements, it yields an empty array.

***without:*** Generates a subset of a given array by eliminating undesired elements.

***flatten:*** Yields a condensed version of the provided array.

***countOnly:*** Offers a count of specific items from the input, focusing exclusively on strings.

***countLetters:*** Delivers a count of each character in the inputted string.

***letterPositions:*** Furnishes all zero-based indices where each character is located within the string.

***findKeyByValue:*** Retrieves the initial key that holds the given value within the input object. If no key with the specified value is found, it returns 'undefined.'

***map:*** Creates a fresh array by applying a mapping function that takes an array and a callback function as its two arguments.

***takeUntil:*** Produces a truthy value based on an input array and callback function provided as parameters to the 'takeUntil' function.

***findKey:*** Generates a truthy value based on an input object and callback function provided as parameters to the 'findKey' function. If no key satisfies the criteria, it returns 'undefined.'