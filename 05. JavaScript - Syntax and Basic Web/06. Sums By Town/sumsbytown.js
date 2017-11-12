function calculateSums(arr) {

    let objects = arr.map(JSON.parse);
    let townsArray = [];

    for (let object of objects)

        if (object.town in townsArray)
        {
            /* If town already exists, add to value */
            townsArray[object.town] += object.income;
        }
        else
        {
            /* If town doesn't exist, add current input value */
            townsArray[object.town] = object.income;
        }

        /* Sort the towns by name */
        let sortedTowns = Object.keys(townsArray).sort();

        /* Print each town and it's value */
        for (let town of sortedTowns)
        {
            console.log(`${town} -> ${townsArray[town]}`)
        }

}
