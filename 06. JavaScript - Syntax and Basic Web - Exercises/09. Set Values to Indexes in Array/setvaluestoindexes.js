function setValues(arr) {

    /* Get the length of the array */
    let lenght = Number(arr[0]);
    let outputArray = [];

    for (i = 0; i < lenght; i++)
        /* Put 0 in each element, which you will replace later. Output must contain
         * the specific 0 if the element hasn't been edited.
         */
        outputArray.push(0);

        for (i = 1; i < arr.length; i++) {
            /* Split each input command and use the information from it */
            let data = arr[i].split(' ');
            let currentIndex = Number(data[0]);
            /* Check if the wanted index exists in the array. Set the value if it does */
            if (currentIndex in outputArray)
                outputArray[currentIndex] = Number(data[2]);
        }
        /* Print every element of the output array */
        for (let line in outputArray)
            console.log(outputArray[line]);


}