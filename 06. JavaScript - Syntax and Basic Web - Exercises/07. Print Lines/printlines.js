function printLines(arr) {
    /* Loop through all of the array elements */
    for (let currentLine of arr)
        /* Check if the current line contains Stop or no */

        if (currentLine == 'Stop')
            return;
        else
            console.log(currentLine);
}
printLines(['Line 1', 'Line 2', 'Stop'])