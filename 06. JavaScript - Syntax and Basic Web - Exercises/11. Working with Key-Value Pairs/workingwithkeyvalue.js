function keyValue(arr) {

    /* Create the dictionary */
    let keyValuePairs = [];

    for (i = 0; i < arr.length - 1; i++) {
        /* Split input */
        let parameters = arr[i].split(' ');
        /* Get the key */
        let key = parameters[0];
        /* Get the value */
        let value = parameters[1];
        /* Set the value to the specific key */
        keyValuePairs[key] = value;
    }
    /* Take the output key from the input array */
    let outputKey = arr[arr.length - 1];
    /* Print the value set to the specific key or print None if there is no such key */
    console.log(keyValuePairs[outputKey] || 'None');

}