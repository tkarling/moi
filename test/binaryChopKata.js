function chop1(no, arr) {
	for(var i = 0; i < arr.length; i++) {
		if(no === arr[i]) {
			return i;
		}
	}
	return -1;
}

function chop2(no, arr) {
	function chop2f(start, end) {
		// console.log(no, arr, start, end);
		if(start === end) {
			// console.log('(start === end)', no, arr, start, end)
			return -1;
		}
		else if ((end - start) === 1) {
			// console.log('(end - start) === 1', no, arr, start, end)
			return (arr[start] === no) ? start : -1;
		}
		var mid = Math.floor(end / 2);
		// console.log('(start === end)', no, arr, start, end, mid)
		if(mid === start) {
			// console.log('(mid === start)', no, arr, start, end, mid)
			mid++;
		}

		if(arr[mid] === no) {
			// console.log('(arr[mid] === no)', no, arr, start, end, mid)
			return mid; 
		} else if (arr[mid] < no) {
			return chop2f(mid, end);
		} else {
			return chop2f(start, mid);
		}
	}

	var start = 0;
	var end = arr.length;
	return chop2f(start, end);
}

function chop3(no, arr) {
	function chop3f(start, end) {
		// console.log(no, arr, start, end);
		if(start >= end) {
			// console.log('(start === end)', no, arr, start, end)
			return -1;
		}
		else if ((end - start) === 1) {
			// console.log('(end - start) === 1', no, arr, start, end)
			return (arr[start] === no) ? start : -1;
		}
		var mid = Math.floor(end / 2);
		// console.log('(start === end)', no, arr, start, end, mid)
		if(mid === start) {
			// console.log('(mid === start)', no, arr, start, end, mid)
			mid++;
		}

		if(arr[mid] === no) {
			// console.log('(arr[mid] === no)', no, arr, start, end, mid)
			return mid; 
		} else if (arr[mid] < no) {
			return chop3f(mid, end);
		} else {
			return chop3f(start, mid);
		}
	}

	return chop3f(0, arr.length);
}

function binarySearch( sortedValues, target ){
// from: http://jasonwyatt.tumblr.com/post/33760740791/algorithms-in-javascript-binary-search
  // summary:
  //    Performs a binary search on an array of sorted 
  //    values for a specified target. 
  // sortedValues: Array
  //    Array of values to search within.
  // target: String|Number
  //    Item to search for, within the sortedValues array.
  // returns:
  //    Number or null. The location of the target within
  //    the sortedValues array, if found. Otherwise returns 
  //    null.
  
  // define the recursive function.
  function search( low, high ) {
    // If the low index is greater than the high index, 
    //  return null for not-found. 
    if ( low > high ) {
      return -1;
    }
    
    // If the value at the low index is our target, return 
    //  the low index.
    if ( sortedValues[low] === target ){
      return low;
    }
    
    // If the value at the high index is our target, return
    //  the high index.
    if ( sortedValues[high] === target ){
      return high;
    }
    
    // Find the middle index and median element.
    var middle = Math.floor( ( low + high ) / 2 );
    var middleElement = sortedValues[middle];
    
    // Recursive calls, depending on whether or not the 
    //  middleElement is less-than or greater-than the 
    //  target.
    // Note: We can use high-1 and low+1 because we've 
    //  already checked for equality at the high and low 
    //  indexes above.
    if ( middleElement > target ) {
      return search(low+1, middle);
    } else if ( middleElement < target ) {
      return search(middle, high-1);
    }
    
    // If middleElement === target, we can return that value.
    return middle;
  }
  
  // Start our search between the first and last elements of 
  //  the array.
  return search(0, sortedValues.length-1);
}



var count = 0;
function assert_chop(expectedResult, no, arr) {
	// var result = chop1(no, arr);
	// var result = chop2(no, arr);
	// var result = chop3(no, arr);
	var result = binarySearch( arr, no );

	// console.log('exp, res: ', expectedResult, result);
	if(expectedResult !== result) {
		console.log('Error', expectedResult, no, arr);
	} else {
		count++;
		// console.log('OK: ', count);
	}
}

  assert_chop(-1, 3, []);
  assert_chop(-1, 3, [1]);
  assert_chop(0,  1, [1]);
  //  #
  assert_chop(0,  1, [1, 3, 5]);
  assert_chop(1,  3, [1, 3, 5]);
  assert_chop(2,  5, [1, 3, 5]);


  assert_chop(-1, 0, [1, 3, 5]);
  assert_chop(-1, 2, [1, 3, 5]);
  assert_chop(-1, 4, [1, 3, 5]);
  assert_chop(-1, 6, [1, 3, 5]);
// //  #
  assert_chop(0,  1, [1, 3, 5, 7]);
  assert_chop(1,  3, [1, 3, 5, 7]);
  assert_chop(2,  5, [1, 3, 5, 7]);
  assert_chop(3,  7, [1, 3, 5, 7]);

  assert_chop(-1, 0, [1, 3, 5, 7]);
  assert_chop(-1, 2, [1, 3, 5, 7]);
  assert_chop(-1, 4, [1, 3, 5, 7]);
  assert_chop(-1, 6, [1, 3, 5, 7]);
  assert_chop(-1, 8, [1, 3, 5, 7]);

console.log('OK Total: ', count);


