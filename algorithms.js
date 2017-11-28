/*SEARCHING*/

/*	
*	
*	Linear search sequentially checks each element of the list until it finds an element that matches the target value.
*
*	@param value - Value of the element which index should be found.
*	@param array - Input array
*	@returns Index of the element or 'Not found.' if not found.
*
*	Time complexity: O(n)	
*/

function linearSearch(value, array)      
{                               
    var length = array.length, index = 0;   
    
    array[length] = value;
    
    while (array[ index ] !== value) index++;
                                
    if (index < length) return index;          
    else return "Not found.";               
}

/*
*	
*	Linear search sequentially checks each element of the list until it finds an element that matches the target value, using recursion.
*
*	@param value - Value of the element which index should be found.
*	@param array - Input array
*	@returns Index of the element or 'Not found.' if not found.
*
*	Time complexity: O(n)	
*/
function recursiveLinearSearch(value,array) 
{
	var length  = array.length, index = 0;                                         

	if (index>length){
		return 'Not found.';

	} else if (array[index]==value) {
		return index;

	} else {
		return (recursiveLinearSearch(array,length,index+1,value));
	}

}

/*
*
* 	Searches for specific element in a given array using the binary search algorithm.
*
* 	@param array Input array.
* 	@param value Value of the element which index should be found.
* 	@returns Index of the element or 'Not found.' if not found.
*	
*	Time complexity: O(log N).
*/
function binarySearch(value, array)       
{                                
    var index = 0, length = array.length, middle; 
                                 
    while (index < length)                
    {  
    	middle = Math.floor((index+length)/2);
       	if (value <= array[middle]) length = middle;
       	else index = middle+1;
    }
   
    if (array[ index ] === value) return index;     
    else return 'Not found.';                 
}

/*
*
* 	Searches for specific element in a given array using the recursive binary search algorithm.
*
* 	@param array Input array.
* 	@param value Value of the element which index should be found.
* 	@returns Index of the element or 'Not found.' if not found.
*	
*	Time complexity: O(log N).
*/

function recursiveBinarySearch(array, value, start=0, stop=(array.length-1)) {
	var midPoint = Math.floor(((stop-start)/2) + start);

	switch (true) {
		case array[midPoint] === value:
			return midPoint;
		case stop - start === 0:
			return 'Not found.';
		case array[midPoint] < value:
			return recursiveBinarySearch(array, value, midPoint+1, stop);
		case array[midPoint] > value:
			return recursiveBinarySearch(array, value, start, midPoint);
	}
}


/*SORTING*/

/*
*
* 	Selection sort. Ascending. It's correct only for array of integers.
* 
* 	@param {Array} array Input array.
* 	@return {Array} Sorted array.
*
* 	Time complexity: O(N^2).
*
*/

function selectionSort(array) {                              
    var length = array.length;
    for (var i = 0; i < length-1; i++) { 
    	var min = i;
       	for (var j = i+1; j < length; j++) { 
       		if (array[j] < array[min]) 
       			min = j; 
       	} 
       	var t = array[min]; 
       	array[min] = array[ i ]; 
       	array[ i ] = t;
    }                    
    return array;
}

/*
*
* 	Insertion sort algorithm. Ascending. It's correct only for array of integers.
* 
* 	@param {Array} array Input array.
* 	@return {Array} Sorted array.
*
* 	Time complexity: O(N^2).
*
*/
function insertionSort(array)      
{                               
    var length = array.length;
    for (var i = 0; i < length; i++) { 
    	var current = array[ i ], j = i-1;
       	while (j >= 0 && array[j] > current) { 
       		array[j+1] = array[j]; j--; 
       	}
       array[j+1] = current;
    }                    
    return array;
}

/*
*
* 	Mergesort method. Ascending. It's correct only for array of integers.
*
* 	@param {Array} array The array which should be sorted.
*	@returns {Array} Sorted array.
*
*	Time complexity: O(log N).
*
*/
function mergeSort(array)
{
    if (array.length < 2)
        return array;
 
    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

/*
*
*   The quicksort algorithm. It's correct only for array of integers.
*
*   @param {Array} array The array which should be sorted.
*   @returns {Array} Sorted newArray.
*
*   Time complexity: O(log N).
*
*/
function quickSort(array) {
	if (array.length <= 1) { 
		return array;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

/*
*
*   Sorts an array using counting sort.
*
*   @param {Array} array The array to sort.
*   @param {number} maxValue The max value for the counting sort.
*   @returns {Array} Sorted array.
*
*   Time complexity: O(N)
*   
*/
function countingSort(array, maxValue) {
    var buckets = new Array(maxValue + 1);
    var sortedIndex = 0;
    var i;

    for (i = 0; i < array.length; i++) {
        if (!buckets[array[i]]) {
            buckets[array[i]] = 0;
        }
        buckets[array[i]]++;
    }

    for (i = 0; i < buckets.length; i++) {
        while (buckets[i] > 0) {
            array[sortedIndex++] = i;
            buckets[i]--;
        }
    }

    return array;
}

/*
*   Sorts an array using radix sort.
*
*   @param {Array} array The array to sort.
*   @param {number} [radix=10] The base/radix to use.
*   @returns The sorted array.
*
*   Time complexity: O(N)
*/
function radixSort(array, radix) {
    if (array.length === 0) {
        return array;
    }

    radix = radix || 10;

    // Determine minimum and maximum values
    var minValue = array[0];
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    // Perform counting sort on each exponent/digit, starting at the least
    // significant digit
    var exponent = 1;
    while ((maxValue - minValue) / exponent >= 1) {
        array = countingSortByDigit(array, radix, exponent, minValue);

        exponent *= radix;
    }

    return array;
}

/**
* Stable sorts an array by a particular digit using counting sort.
* @param {Array} array The array to sort.
* @param {number} radix The base/radix to use to sort.
* @param {number} exponent The exponent of the significant digit to sort.
* @param {number} minValue The minimum value within the array.
* @returns The sorted array.
*/
function countingSortByDigit(array, radix, exponent, minValue) {
    var i;
    var bucketIndex;
    var buckets = new Array(radix);
    var output = new Array(array.length);

    // Initialize bucket
    for (i = 0; i < radix; i++) {
        buckets[i] = 0;
    }

    // Count frequencies
    for (i = 0; i < array.length; i++) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        buckets[bucketIndex]++;
    }

    // Compute cumulates
    for (i = 1; i < radix; i++) {
        buckets[i] += buckets[i - 1];
    }

    // Move records
    for (i = array.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        output[--buckets[bucketIndex]] = array[i];
    }

    // Copy back
    for (i = 0; i < array.length; i++) {
        array[i] = output[i];
    }

    return array;
}