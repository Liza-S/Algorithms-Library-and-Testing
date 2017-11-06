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
* Selection sort.
* 
* @param {Array} array Input array.
* @return {Array} Sorted array.
*
*/

function selectionSort(array) {                              
    var n = array.length;
    for (var i = 0; i < n-1; i++) { 
    	var min = i;
       	for (var j = i+1; j < n; j++) { 
       		if (array[j] < array[min]) 
       			min = j; 
       	} 
       	var t = array[min]; 
       	array[min] = array[ i ]; 
       	array[ i ] = t;
    }                    
    return array;
}