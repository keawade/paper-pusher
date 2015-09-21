var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];

// Your code goes here! Hooray!

function bubbleSort( array ){
  var a = array.slice(0);
  if ( a.length == 0 ) {
    return [];
  }
  var switched = true;
  while( switched ){
    switched = false;
    for( var i = 0; i < a.length; i++ ){
      if( a[i] > a[i+1] ){
        var b = a[i];
        a[i] = a[i+1];
        a[i+1] = b;
        switched = true;
      }
    }
  }
  return a;
}

function quickSort(array){
  var a = array.slice(0);
  if( a.length == 0 ) {
    return [];
  }
  var left = [],
      pivot = a[0],
      right = []
  for( var i = 1; i < a.length; i++ ){
    if( a[i] < pivot ){
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));;
}

console.log(bubbleSort(group1));
console.log(bubbleSort(group2));
console.log(bubbleSort(group3));

console.log(quickSort(group1));
console.log(quickSort(group2));
console.log(quickSort(group3));
