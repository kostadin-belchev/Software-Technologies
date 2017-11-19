function addRemove(arr) {

    let outputArray = [];

    for (i = 0; i < arr.length; i++) {
        /* Split and get information */
        let parameters = arr[i].split(' ');
        let command = parameters[0];
        let element = parameters[1];
        /* Add element */
        if (command == 'add')
            outputArray.push(element);
        /* Remove element */
        else if (command == 'remove' && element in outputArray)
            outputArray.splice(element, 1);
    }
    /* Print every element */
    for (i = 0; i < outputArray.length; i++) {
        console.log(outputArray[i]);
    }

}