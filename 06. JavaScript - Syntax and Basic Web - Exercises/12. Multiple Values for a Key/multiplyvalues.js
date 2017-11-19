function multiplyValues(arr) {

    /* Make array for every valid value */
    let keyValues = [];
    /* Take the specific key */
    let outputKey = arr[arr.length - 1];

    /* Loop through each element and add it to the output array if the condition is met */
    for (i = 0; i < arr.length - 1; i++) {
        let parameters = arr[i].split(' ');
        if (outputKey == parameters[0])
            keyValues.push(parameters[1]);
    }

    /* If there are any values in the output array, print them. Print None if there are no values */
    if (keyValues.length > 0)
        for (i = 0; i < keyValues.length; i++) {
            console.log(keyValues[i]);
        }
    else
        console.log('None');

}
