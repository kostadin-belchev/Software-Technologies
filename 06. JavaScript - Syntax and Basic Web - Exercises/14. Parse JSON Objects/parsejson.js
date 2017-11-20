function parseJSON(arr) {

    /* Parse objects */
    let parsedObjects = arr.map(JSON.parse);

    /* Loop through each object */
    for (let object of parsedObjects) {
        console.log(`Name: ${object.name}`);
        console.log(`Age: ${object.age}`);
        console.log(`Date: ${object.date}`);
    }

}