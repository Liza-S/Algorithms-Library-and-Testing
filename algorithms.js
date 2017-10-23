/*	
*	
*	Linear search sequentially checks each element of the list until it finds an element that matches the target value.
*
*	@param value - Value of the element which index should be found.
*	@param array - Input array
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