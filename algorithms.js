function LinearSearch(t,A)      // t - искомый элемент,
{                               // A - массив, в котором ищем.
    var n = A.length, i = 0;   
    
    A[n] = t;
    
    while (A[ i ] !== t) i++;
                                
    if (i < n) return i;          // На выходе индекс искомого элемента.
    else return -1;               // Если искомого элемента нет в массиве, то -1.
}