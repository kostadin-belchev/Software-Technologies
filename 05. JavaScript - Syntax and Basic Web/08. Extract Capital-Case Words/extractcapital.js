function extractCapital(arr) {

    /* Joins the elements of an array into a string, and return the string */
    let inputText = arr.join(",");

    /* Split with regexp */
    let allWords = inputText.split(/\W+/);

    /* Filter uppercase words */
    let uppercaseWords = allWords
        .filter(l => l.length > 0)
        .filter(x => x.toUpperCase() == x);

    /* Print all uppercase words */
    console.log(uppercaseWords.join(', '));
}
