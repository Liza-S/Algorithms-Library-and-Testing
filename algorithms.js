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

/*
*	
*	Linear search sequentially checks each element of the list until it finds an element that matches the target value, using recursion.
*
*	@param value - Value of the element which index should be found.
*	@param array - Input array
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