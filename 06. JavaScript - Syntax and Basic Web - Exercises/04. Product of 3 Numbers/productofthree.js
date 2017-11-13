function productOfThree(arr) {

    /* Imput may not be a number, so we must map it. */
    let numbers = arr.map(Number);

    /* Filter the negative numbers in the new array */
    let negativeNumbers = numbers.filter(n => n < 0);

    /* Check if the count of the negative numbers is odd or even */
    if (negativeNumbers.length % 2 == 0)
        return 'Positive';
    else
        return 'Negative';
}