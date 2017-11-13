function multiplyDivideCheck(arr) {
    /* Get numbers from array */
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    /* Check if the second number is greater than or equal to the first number */
    if (num2 >= num1)
        return num1 * num2;
    /* Check if the first number is greater than the second number */
    else if (num1 > num2)
        return num1 / num2;

}