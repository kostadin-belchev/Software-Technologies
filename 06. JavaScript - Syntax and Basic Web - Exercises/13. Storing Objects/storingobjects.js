function storeObj(arr) {

    for (i = 0; i < arr.length; i++) {
        /* Split input */
        let parameters = arr[i].split(' -> ');

        /* Set the parameters to an object */
        let personObject = {name: parameters[0],
            age: parameters[1],
            grade: parameters[2]};

        /* Print the information */
        console.log(`Name: ${personObject.name}`);
        console.log(`Age: ${personObject.age}`);
        console.log(`Grade: ${personObject.grade}`);

    }
}
