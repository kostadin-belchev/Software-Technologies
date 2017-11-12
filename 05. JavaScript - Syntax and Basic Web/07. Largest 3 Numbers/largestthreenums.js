function findNums (arr) {
    /* Map the input array, it may not be an array of numbers */
    let inputArray = arr.map(Number);

    /* Sort the input array in descending order and put each element into a new array */
    let outputArray = inputArray.sort(function(a, b){return b-a});

    /*
    * Print the first three elements
    * Math.min(3, arr.length)
    * returns the smallest 3 indexes to use for output.
    */
    for (i = 0; i < Math.min(3, outputArray.length); i++)
        /* Print each number */
        console.log(outputArray[i]);

}
