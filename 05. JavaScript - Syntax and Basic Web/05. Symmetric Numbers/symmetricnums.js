/* If anyone is following my repo: Sry for the wait. I was busy xD */
function symmetricNumbers(arr) {

    let inputNumber = Number(arr[0]);
    let outputArray = [];

    for (let i = 1; i <= inputNumber; i++) {
        if (symmCheck("" + i))
        {
            outputArray.push(i);
        }
    }
    console.log(outputArray.join(" "));
    /* Function to check the numbers */
    function symmCheck(str) {

        for (let i = 0; i < str.length / 2; i++) {

            if (str[i] != str[str.length - i - 1])
            {
                return false;
            }
        }
        return true;
    }
}
