function turnIntoJSON(arr) {
    /* Create an output object to write data inside */
    let outputObject = {};
    /* Loop through each pair of key&value and put them inside the object */
    for (i = 0; i < arr.length; i++) {
        /* Split input */
        let parameters = arr[i].split(' -> ');
        /* Take the key */
        let key = parameters[0];
        /* Take the value */
        let value = parameters[1];
        /* Check if the value is a number. If so make it a number type. example: Age: 20 */
        if (!isNaN(value))
            value = Number(value);
        /* Set the value to the specific key */
        outputObject[key] = value;
    }
	
    /* Print the final object */
    console.log(JSON.stringify(outputObject));
}
