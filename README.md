## Coding Challenge - Split Array Into Chunks

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.


Example pseudo-code:

groupArrayElements([ 1, 2, 3, 4, 5], 3);
> [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]


## Solution

### Language
The chosen language is JavaScript

## How I Coded This

The result should be in a new array, with the original array remaining intact.  
Having the required number of chunks, we first need to find out how many elements per chunk should the new array have.

For this I've used the `Math.round` function, with it defaulting to `1` in the cases where the result is 0.  
Both `Math.floor` and `Math.ceil` will yield wrong new array sizes in certain circumstances (array size 5, split into 4 chunks - this will result in a 3 element array using `Math.ceil`).


I've used a reducer function with an accumulator in order to add the elements to the new array.  
This function adds a new array to the accumulator once the required number of elements per array has been reached (or first iteration), unless the max no. of chunks has been reached, or adds a new element to the previous array until we reach the maximum number of elements per chunk, or reach the maximum number of chunks.

## How To Install
In the main folder

`npm install`


## How To Run The Tests

In the main folder

`npm test`

## How To Run

In the main folder

`npm start`

